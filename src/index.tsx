import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {getStoreHandlers} from "../../hook"
import {bulk, filters} from "enmity/modules"

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
            if (message.content) message.content += "\n\n"
            for (const attachment of message.attachments) {
                if (attachment.content_type && (attachment.content_type.startsWith("text/") || knownFormats.includes(attachment.content_type.split(";")[0]))) {
                    const size = attachment.size > 1000 ? 1000 : attachment.size
                    const resp = await fetch(attachment.url, {
                        headers: {
                            'range': `bytes=-${size}`
                        }
                    })
                    const filename = attachment.url.split("/").slice(-1)[0]
                    const ext = attachment.url.split(".").slice(-1)[0]
                    let text = await resp.text()
                    let lines = text.split("\n")
                    if (lines.length > 10) lines = lines.slice(0, 10)
                    text = lines.join("\n")
                    message.content += `\`${filename}\` \`\`\`${ext}\n${text}\n\`\`\`\n`
                }
            }
            FluxDispatcher.dispatch({
                type: 'MESSAGE_UPDATE',
                message: message
            })
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
