import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {getStoreHandlers} from "../../hook"
import {bulk, filters} from "enmity/modules"
import {get} from "enmity/api/settings";

const [
    MessageStore
] = [
    getStoreHandlers("MessageStore")
]

const [
    FluxDispatcher
] = bulk(
    filters.byProps("_currentDispatchActionType", "_subscriptions", "_actionHandlers", "_waitQueue")
)


const Patcher = create('PreviewFile')

const PreviewFile: Plugin = {
    ...manifest,
    onStart() {
        const knownFormats = ["application/json", "application/javascript"]

        async function parseMessage(message) {
            let preview = ""
            for (const attachment of message.attachments) {
                if (attachment.content_type && (attachment.content_type.startsWith("text/") || knownFormats.includes(attachment.content_type.split(";")[0]))) {
                    let savedSize = Number(get(plugin_name, "size", "1000"))
                    if (typeof savedSize !== "number") savedSize = 1000
                    const size = attachment.size > savedSize ? savedSize : attachment.size
                    const resp = await fetch(attachment.url, {
                        headers: {
                            'Range': `bytes=0-${size}`
                        }
                    })
                    const filename = attachment.url.split("/").slice(-1)[0]
                    const ext = attachment.url.split(".").slice(-1)[0]
                    let text = await resp.text()
                    let lines = text.split("\n")
                    let savedLines = Number(get(plugin_name, "lines", "10"))
                    if (typeof savedLines !== "number") savedLines = 10
                    if (lines.length > savedLines) lines = lines.slice(0, savedLines)
                    text = lines.join("\n")
                    preview += `\`${filename}\` \`\`\`${ext}\n${text}\n\`\`\`\n`
                }
            }
            if (preview) {
                message.content += `\n\n${preview}`
                FluxDispatcher.dispatch({
                    type: 'MESSAGE_UPDATE',
                    message: message,
                    ignore: true
                })
            }
        }


        Patcher.before(MessageStore, "LOAD_MESSAGES_SUCCESS", (self, args, res) => {
            args[0].messages.filter(message => message.attachments.length).forEach(message => {
                parseMessage(message).then()
            })
        })

        Patcher.before(MessageStore, "MESSAGE_CREATE", (self, args, res) => {
            if (args[0].message.attachments.length) {
                parseMessage(args[0].message).then()
            }
        })
    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(PreviewFile)
