(this["webpackJsonpsmart-face-recognition"]=this["webpackJsonpsmart-face-recognition"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/MagicBrainLogo.48866f5b.png"},31:function(e,t,a){e.exports=a(78)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),i=a.n(r),o=(a(36),a(25)),s=a(26),c=a(29),m=a(27),u=a(30),p=a(28),d=a.n(p),g=(a(37),function(){return l.a.createElement("div",{className:"MagicBrain"},l.a.createElement("img",{src:d.a,alt:"logo"}))}),h=function(e){var t=e.isSignedIn,a=e.onRouteChange;return t?l.a.createElement("nav",{className:"mr3"},l.a.createElement("div",{style:{float:"left"},className:"pl6 pt4"},l.a.createElement(g,null)),l.a.createElement("div",{className:"ma3 pr5 f5 pt3",style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{className:"pr3 black",style:{float:"right"}},"Hello, Maor Attias"),l.a.createElement("p",{onClick:function(){return a("signout")},className:"link dim black b pointer pr4",style:{float:"right"}},"Sign Out"))):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-start"}},l.a.createElement("div",{style:{position:"relative"}}))},f=function(e){var t=e.onInputChange,a=e.onButtonSubmit;return l.a.createElement("div",{className:"mt6 ml6 mb4 w-50 f1"},l.a.createElement("p",{style:{display:"flex",alignItems:"flex-start",fontSize:"40px",color:"#413fa0",fontWeight:"bold"}},"Magic Brain detects faces in pictures,",l.a.createElement("br",null),"Just pick an image and let the magic happen."),l.a.createElement("div",{className:"w-80"},l.a.createElement("div",{className:"center"},l.a.createElement("input",{style:{marginLeft:"0"},className:"f4 mt5 w-60 center inputDetect",type:"tex",onChange:t,placeholder:"Image url"}),l.a.createElement("button",{className:"w-33 mt5 grow f4 link white curveBorder30 b",style:{backgroundColor:"#413fa0",border:"none"},onClick:a},"LOAD IMAGE"))))},E=function(e){var t=e.onRouteChange;return l.a.createElement("div",{className:"centerItems formBackround"},l.a.createElement("article",{className:"br4 w-20 shadow-5 center bg-white formMinWidth"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph3 mh0"},l.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},l.a.createElement(g,null)),l.a.createElement("div",{className:"mt3 pb3 w5"},l.a.createElement("input",{className:"inputForm input-reset purpleBorder",type:"email",name:"email-address",id:"email-address",placeholder:"Email"})),l.a.createElement("div",{className:"mv3 pb2"},l.a.createElement("input",{className:"inputForm purpleBorder",type:"password",name:"password",id:"password",placeholder:"Password"}))),l.a.createElement("div",{className:"f8"},l.a.createElement("input",{onClick:function(){return t("home")},className:" br-pill pa2 input-reset ba grow pointer white dib w5 b",style:{backgroundColor:"#413fa0"},type:"submit",value:"SIGN IN"})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("div",{className:""},"Don't have an acount?"," ",l.a.createElement("span",{href:"#0",onClick:function(){t("register")},className:"b link dim black pointer",style:{display:"inline"}},"Register now")))))))},b=function(e){var t=e.onRouteChange;return l.a.createElement("div",{className:"centerItems formBackround"},l.a.createElement("article",{className:"br4 w-20 shadow-5 center bg-white formMinWidth"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure "},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},l.a.createElement(g,null)),l.a.createElement("div",{className:"mt3 pb3 w5"},l.a.createElement("input",{className:"input-reset inputForm purpleBorder",type:"email",id:"name",placeholder:"Name"})),l.a.createElement("div",{className:"mt3 pb3"},l.a.createElement("input",{className:"input-reset inputForm purpleBorder",type:"email",name:"email-address",id:"email-address",placeholder:"Email"})),l.a.createElement("div",{className:"mv3 pb3"},l.a.createElement("input",{className:"input-reset inputForm purpleBorder",type:"password",name:"password",id:"password",placeholder:"Password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:function(){return t("home")},className:"br-pill pa2 input-reset ba grow pointer white dib w-100 b",type:"submit",style:{backgroundColor:"#413fa0"},value:"CREATE ACCOUNT"})),l.a.createElement("div",{className:"lh-copy mt3 rubikRegular"},"Already have an acount?"," ",l.a.createElement("span",{href:"#0",onClick:function(){t("signin")},className:"b link dim black pointer",style:{display:"inline"}},"Log in"))))))},v=(a(38),function(e){var t=e.imageUrl,a=e.box;return l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"absolute mt5"},l.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"400px",height:"340",style:{borderRadius:"10px"}}),l.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),N=a(10),w=a.n(N),y=(a(76),new w.a.App({apiKey:"58a6e5300873423c868961a41dbe2a15"})),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).calculateFaceLocation=function(e){console.log(e);var t=e.outputs[0].data.regions[0].region_info.bounding_box;console.log(t);var a=document.getElementById("inputimage"),n=Number(a.width),l=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*l,rightCol:n-t.right_col*n,bottomRow:l-t.bottom_row*l}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),y.models.predict(w.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"home",isSignedIn:!0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,r=e.box;return l.a.createElement("div",{className:"App"},"home"===n?l.a.createElement("div",null,l.a.createElement(h,{isSignedIn:t,onRouteChange:this.onRouteChange}),l.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),l.a.createElement("div",null,l.a.createElement("div",{className:"ml6 w-40"},l.a.createElement(v,{box:r,imageUrl:a})))):"signin"===n?l.a.createElement(E,{onRouteChange:this.onRouteChange}):l.a.createElement(b,{onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(77);i.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a8e87602.chunk.js.map