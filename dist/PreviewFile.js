function P(t){window.enmity.plugins.registerPlugin(t)}const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const i=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const f=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const R=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const S=window.enmity.modules.common.Linking,D=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function M(t){return window.enmity.patcher.create(t)}var y="PreviewFile",v="1.0.2",L="allow previewing text files",k=[{name:"mafu",id:"519760564755365888"}],B="#00a3af",z={name:y,version:v,description:L,authors:k,color:B};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const H=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const G=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const g=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const b=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const E=e.FormInput;e.FormLabel,e.FormRadio;const r=e.FormRow,T=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function d(t){return window.enmity.assets.getIDByName(t)}const V={byProps:(...t)=>window.enmity.modules.filters.byProps(...t),byName:(t,n)=>window.enmity.modules.filters.byName(t,n),byTypeName:(t,n)=>window.enmity.modules.filters.byTypeName(t,n),byDisplayName:(t,n)=>window.enmity.modules.filters.byDisplayName(t,n)};function $(t,n){return window.enmity.modules.getModule(t,n)}function O(...t){return window.enmity.modules.bulk(...t)}function j(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;const U=d("img_account_sync_github_white"),Y=d("Discord"),q=d("img_account_sync_twitter_white"),F=d("Small"),K=j("acceptInviteAndTransitionToInviteChannel");var W=({settings:t})=>{const n=D.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:w.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:w.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:w.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return i.createElement(G,null,i.createElement(b,{style:n.container},i.createElement(H,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:n.image}),i.createElement(b,{style:n.title},i.createElement(g,{style:n.name},"PreviewFile"),i.createElement(g,{style:n.author},"by mafu"))),i.createElement(T,{title:"SETTING"},i.createElement(E,{title:"Max file size",value:t.get("size","1000"),onSubmitEditing:o=>{isNaN(o.nativeEvent.text)?f.open({content:"You entered an invalid number",source:F}):t.set("size",o.nativeEvent.text)}}),i.createElement(E,{title:"Max number of lines",value:t.get("lines","10"),onSubmitEditing:o=>{isNaN(o.nativeEvent.text)?f.open({content:"You entered an invalid number",source:F}):t.set("lines",o.nativeEvent.text)}})),i.createElement(T,{title:"INFORMATION"},i.createElement(r,{label:"Follow me on Twitter",style:n.info,trailing:r.Arrow,leading:i.createElement(r.Icon,{source:q}),onPress:()=>{S.openURL("https://twitter.com/m4fn3")}}),i.createElement(r,{label:"Visit my server for help",style:n.info,trailing:r.Arrow,leading:i.createElement(r.Icon,{source:Y}),onPress:()=>{K.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{R.pop()}})}}),i.createElement(r,{label:"Check Source on GitHub",style:n.info,trailing:r.Arrow,leading:i.createElement(r.Icon,{source:U}),onPress:()=>{S.openURL("https://github.com/m4fn3/PreviewFile")}})),i.createElement(g,{style:n.footer},`v${v}`))};const Q=$(t=>{var n,o,m;return(m=(o=(n=t._dispatcher)==null?void 0:n._actionHandlers)==null?void 0:o._dependencyGraph)==null?void 0:m.nodes}),p=Q._dispatcher._actionHandlers._dependencyGraph.nodes;function J(t){let n=Object.keys(p).filter(o=>p[o].name===t);if(n.length)return p[n[0]].actionHandler}function A(t,n,o){return window.enmity.settings.get(t,n,o)}const[C]=[J("MessageStore")],[X]=O(V.byProps("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue")),h=M("PreviewFile"),Z={...z,onStart(){const t=["application/json","application/javascript"];async function n(o){let m="";for(const s of o.attachments)if(s.content_type&&(s.content_type.startsWith("text/")||t.includes(s.content_type.split(";")[0]))){let l=Number(A(y,"size","1000"));typeof l!="number"&&(l=1e3);const _=s.size>l?l:s.size,N=await fetch(s.url,{headers:{Range:`bytes=0-${_}`}}),I=s.url.split("/").slice(-1)[0],x=s.url.split(".").slice(-1)[0];let u=await N.text(),a=u.split(`
`),c=Number(A(y,"lines","10"));typeof c!="number"&&(c=10),a.length>c&&(a=a.slice(0,c)),u=a.join(`
`),m+=`\`${I}\` \`\`\`${x}
${u}
\`\`\`
`}m&&(o.content+=`

${m}`,X.dispatch({type:"MESSAGE_UPDATE",message:o,ignore:!0}))}h.before(C,"LOAD_MESSAGES_SUCCESS",(o,m,s)=>{m[0].messages.filter(l=>l.attachments.length).forEach(l=>{n(l).then()})}),h.before(C,"MESSAGE_CREATE",(o,m,s)=>{m[0].message.attachments.length&&n(m[0].message).then()})},onStop(){h.unpatchAll()},getSettingsPanel({settings:t}){return i.createElement(W,{settings:t})}};P(Z);
