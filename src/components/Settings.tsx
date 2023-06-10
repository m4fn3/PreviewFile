import {FormRow, FormSection, View, ScrollView, Image, Text, FormInput} from 'enmity/components'
import {Constants, Navigation, React, StyleSheet, Toasts} from 'enmity/metro/common'
import {Linking} from "enmity/metro/common"
// @ts-ignore
import {name, version} from '../../manifest.json'
import {getIDByName} from "enmity/api/assets"
import {getByProps} from "enmity/modules"

const GitHubIcon = getIDByName('img_account_sync_github_white')
const DiscordIcon = getIDByName('Discord')
const TwitterIcon = getIDByName('img_account_sync_twitter_white')
const FailIcon = getIDByName('Small')

const Invites = getByProps('acceptInviteAndTransitionToInviteChannel')

export default ({settings}) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20
        },
        title: {
            flexDirection: "column",
        },
        name: {
            fontSize: 30,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 30,
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
        },
        author: {
            fontSize: 15,
            paddingLeft: 50,
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
        },
        info: {
            height: 45,
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: "center",
            alignItems: "center"
        },
        footer: {
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 20
        }
    })
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{uri: 'https://avatars.githubusercontent.com/u/43488869'}}
                    style={styles.image}
                />
                <View style={styles.title}>
                    <Text style={styles.name}>PreviewFile</Text>
                    <Text style={styles.author}>by mafu</Text>
                </View>
            </View>
            <FormSection title="SETTING">
                <FormInput
                    title="Max file size"
                    placeholder="1000"
                    value={settings.get("size", "1000")}
                    onSubmitEditing={(event) => {
                        if (isNaN(event.nativeEvent.text)) {
                            Toasts.open({
                                content: `You entered an invalid number`,
                                source: FailIcon
                            })
                        } else {
                            settings.set("size", event.nativeEvent.text)
                        }
                    }}
                />
                <FormInput
                    title="Max number of lines"
                    placeholder="10"
                    value={settings.get("lines", "10")}
                    onSubmitEditing={(event) => {
                        if (isNaN(event.nativeEvent.text)) {
                            Toasts.open({
                                content: `You entered an invalid number`,
                                source: FailIcon
                            })
                        } else {
                            settings.set("lines", event.nativeEvent.text)
                        }
                    }}
                />
            </FormSection>
            <FormSection title="INFORMATION">
                <FormRow
                    label="Follow me on Twitter"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={TwitterIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://twitter.com/m4fn3")
                    }}
                />
                <FormRow
                    label="Visit my server for help"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={DiscordIcon}/>}
                    onPress={() => {
                        Invites.acceptInviteAndTransitionToInviteChannel({
                            inviteKey: 'TrCqPTCrdq',
                            context: {location: 'Invite Button Embed'},
                            callback: () => {
                                Navigation.pop()
                            }
                        })
                    }}
                />
                <FormRow
                    label="Check Source on GitHub"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={GitHubIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://github.com/m4fn3/PreviewFile")
                    }}
                />
            </FormSection>
            <Text style={styles.footer}>
                {`v${version}`}
            </Text>
        </ScrollView>
    )
};