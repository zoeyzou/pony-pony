(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/cover.c0a12c3f.png"},24:function(e,t,n){e.exports=n.p+"static/media/dot-background.3a79f8be.png"},26:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(14),c=n.n(i),l=n(2),u=n(3),s=n(5),d=n(1),m=d.d.div.withConfig({displayName:"sliderstyles__SliderContainer",componentId:"sc-1w23bag-0"})(["display:block;"]),p=d.d.div.withConfig({displayName:"sliderstyles__SliderWrapper",componentId:"sc-1w23bag-1"})(["margin:5px 0;display:flex;align-items:center;justify-content:center;position:relative;"]),h=d.d.input.withConfig({displayName:"sliderstyles__Slider",componentId:"sc-1w23bag-2"})(["flex:1;-webkit-appearance:none;width:100%;height:10px;margin:0 5px;background-color:",";border:1px solid ",";border-radius:10px;transition:all 0.3s ease;&:hover{filter:brightness(90%);}&::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background-color:",";border-radius:30px;box-shadow:0px 0px 3px darkgreen;transition:all 0.5s ease;&:hover,&:active{transform:scale(1.05);}}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.primary})),f=d.d.output.withConfig({displayName:"sliderstyles__Output",componentId:"sc-1w23bag-3"})(["display:",";position:absolute;left:calc(50% - 10px);"],(function(e){return e.show?"block":"none"})),g=d.d.span.withConfig({displayName:"sliderstyles__Display",componentId:"sc-1w23bag-4"})(["width:20px;text-align:center;"]),b=d.d.label.withConfig({displayName:"labelstyles__Label",componentId:"sc-1072mp3-0"})(["display:block;"]),y=function(e){var t=e.children,n=Object(s.a)(e,["children"]);return o.a.createElement(b,n,t)},v=function(e){var t=e.min,n=void 0===t?0:t,a=e.max,i=void 0===a?10:a,c=e.value,l=void 0===c?0:c,d=e.title,b=e.onChangeHandler,v=Object(s.a)(e,["min","max","value","title","onChangeHandler"]),w=Object(r.useState)(l),x=Object(u.a)(w,2),k=x[0],j=x[1],O=Object(r.useState)(!1),E=Object(u.a)(O,2),S=E[0],C=E[1];Object(r.useEffect)((function(){S||k===l||null===b||void 0===b||b(k)}),[k,l,S,b]);return o.a.createElement(m,null,d&&o.a.createElement(y,null,d),o.a.createElement(p,null,o.a.createElement(g,null,n),o.a.createElement(h,Object.assign({},v,{"aria-label":v["aria-label"]||"range slider",type:"range",min:n,max:i,value:k,onMouseDown:function(){return C(!0)},onMouseUp:function(){return C(!1)},onChange:function(e){var t=Number(e.currentTarget.value);j(t)}})),o.a.createElement(f,{show:S},k),o.a.createElement(g,null,i)))},w=d.d.div.withConfig({displayName:"selectstyles__SelectWrapper",componentId:"bo07mx-0"})(["position:relative;display:block;> *{font-family:",";color:",";}"],(function(e){return e.theme.fonts.body}),(function(e){return e.theme.colors.dark["shade-100"]})),x=d.d.select.withConfig({displayName:"selectstyles__Select",componentId:"bo07mx-1"})(["cursor:pointer;appearance:none;width:100%;max-width:100%;padding:4px 8px;margin:5px 0;border:none;border-radius:4px;background-color:rgba(0,0,0,0.1);font-size:16px;font-weight:700;line-height:1.3;filter:opacity(90%);transition:all 0.2s ease-in;&::-ms-expand{display:none;}&:hover{transition:all 0.2s ease-in;filter:opacity(100%);}"]),k=d.d.option.withConfig({displayName:"selectstyles__Option",componentId:"bo07mx-2"})(["cursor:pointer;background-color:",";font-size:12px;font-weight:normal;"],(function(e){return e.theme.colors.light["shade-100"]})),j=d.d.span.withConfig({displayName:"selectstyles__Arrow",componentId:"bo07mx-3"})(["cursor:pointer;position:absolute;font-size:16px;right:10px;bottom:8px;transform:rotate(90deg) scaleY(1.5);"]),O=function(e){var t=e.defaultValue,n=e.options,a=e.title,i=e.placeholder,c=e.onChangeHandler,l=Object(s.a)(e,["defaultValue","options","title","placeholder","onChangeHandler"]),d=Object(r.useState)(t||""),m=Object(u.a)(d,2),p=m[0],h=m[1];Object(r.useEffect)((function(){p!==t&&(null===c||void 0===c||c(p))}),[p,t,c]);return o.a.createElement(w,null,a&&o.a.createElement(y,null,a),o.a.createElement(x,Object.assign({},l,{onChange:function(e){var t=e.currentTarget.value;h(t)},defaultValue:p}),o.a.createElement(k,{key:"empty",value:""},i||"Please choose an option"),n.map((function(e,t){return o.a.createElement(k,{key:t,value:e.value},e.label)}))),o.a.createElement(j,null,">"))},E=function(e){return e.settings},S=function(e){return[e.settings.minLength,e.settings.maxLength]},C=function(e){return[e.settings.minDifficulty,e.settings.maxDifficulty]},_=n(6),P=Object(_.b)({name:"settings",initialState:{minLength:15,maxLength:25,width:15,height:15,minDifficulty:0,maxDifficulty:10,difficultyLevel:0,currentPony:null},reducers:{changeWidth:function(e,t){e.width=t.payload},changeHeight:function(e,t){e.height=t.payload},changeDifficulty:function(e,t){e.difficultyLevel=t.payload},changePony:function(e,t){e.currentPony=t.payload},resetSettings:function(e){e.width=15,e.height=15,e.difficultyLevel=0,e.currentPony=null}}}),z=P.actions,I=z.changeWidth,D=z.changeHeight,N=z.changeDifficulty,L=z.changePony,G=z.resetSettings,A=P.reducer,F=function(e){return e.game},W=function(e){return"pending"===e.game.fetchingState.game||"pending"===e.game.fetchingState.movement},U=function(e){return null!==e.game.ponyPos&&null!==e.game.domokunPos&&null!==e.game.exit&&e.game.mazeData.length>0&&"preparing"!==e.game.gameStatus},H=function(e){return e.game.hiddenUrl&&("won"===e.game.gameStatus||"over"===e.game.gameStatus)},T=function(e){return e.game.hiddenUrl};!function(e){e.twilightSparkle="Twilight Sparkle",e.spike="Spike",e.applejack="Applejack",e.rainbowDash="Rainbow Dash",e.pinkiePie="Pinkie Pie",e.rarity="Rarity",e.fluttershy="Fluttershy"}(a||(a={}));var q,B=d.d.section.withConfig({displayName:"game-settingstyles__GameSettingWrapper",componentId:"sc-1km6djf-0"})(["grid-area:setting;padding:1vh 0;@media (max-width:","){overflow-y:auto;}"],(function(e){return e.theme.breakpoints.tablet})),M=d.d.div.withConfig({displayName:"game-settingstyles__InstructionWrapper",componentId:"sc-1km6djf-1"})(["text-align:center;font-family:",";font-size:16px;overflow-y:auto;& > p{font-family:",";}"],(function(e){return e.theme.fonts.title}),(function(e){return e.theme.fonts.body})),R=function(){return o.a.createElement(M,null,o.a.createElement("h1",null,"Game Instructions"),o.a.createElement("p",null,"Use \u2191 to move up"),o.a.createElement("p",null,"Use \u2193 to move down"),o.a.createElement("p",null,"Use \u2190 to move left"),o.a.createElement("p",null,"Use \u2192 to move right"),o.a.createElement("p",null,"Win the game by moving pony to the exit"),o.a.createElement("p",null,"Don\u2018t let Domokun catch your pony!"))},V=function(){var e=Object(l.b)(),t=Object(l.c)(S),n=Object(l.c)(C),r=Object(l.c)(E),i=r.width,c=r.currentPony,u=r.difficultyLevel,s=Object(l.c)(U);return o.a.createElement(B,null,s&&o.a.createElement(R,null),!s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{min:t[0],max:t[1],value:i,title:"Size",onChangeHandler:function(t){e(I(t)),e(D(t))}}),o.a.createElement(v,{min:n[0],max:n[1],value:u,title:"Difficulty",onChangeHandler:function(t){return e(N(t))}}),o.a.createElement(O,{title:"Choose a pony",placeholder:"Choose a pony",defaultValue:c||"",options:Object.values(a).map((function(e){return{label:e,value:e}})),onChangeHandler:function(t){return e(L(t))}})))},J=n(7);function Y(){var e=Object(J.a)(["\n      border-right: 0.4vh solid;\n    "]);return Y=function(){return e},e}function $(){var e=Object(J.a)(["\n      border-bottom: 0.4vh solid;\n    "]);return $=function(){return e},e}function K(){var e=Object(J.a)(["\n      border-left: 0.4vh solid;\n    "]);return K=function(){return e},e}function Q(){var e=Object(J.a)(["\n      border-top: 0.4vh solid;\n    "]);return Q=function(){return e},e}!function(e){e.north="north",e.south="south",e.west="west",e.east="east"}(q||(q={}));var X=d.d.div.withConfig({displayName:"mazestyles__Maze",componentId:"mywk92-0"})(["max-width:80vh;display:grid;grid-template-columns:",";grid-auto-rows:1fr;&::before{content:'';width:0;padding-bottom:100%;grid-row:1 / 1;grid-column:1 / 1;}& > *:first-child{grid-row:1 / 1;grid-column:1 / 1;}"],(function(e){var t=e.size;return"repeat(".concat(t[0],", minmax(10px, 1fr))")})),Z=d.d.div.withConfig({displayName:"mazestyles__CellWrapper",componentId:"mywk92-1"})(["position:relative;overflow:hidden;box-sizing:border-box;margin:-0.15vh;border-color:",";"," "," "," ",""],(function(e){return e.theme.colors.dark["shade-100"]}),(function(e){return e.walls.includes(q.north)&&Object(d.c)(Q())}),(function(e){return e.walls.includes(q.west)&&Object(d.c)(K())}),(function(e){return e.walls.includes(q.south)&&Object(d.c)($())}),(function(e){return e.walls.includes(q.east)&&Object(d.c)(Y())})),ee=d.d.div.withConfig({displayName:"mazestyles__Cell",componentId:"mywk92-2"})(["position:absolute;top:0;left:0;bottom:0;right:0;padding:0.4vh;width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]),te=n(13);function ne(e,t,n){var a=[];e.includes("north")&&a.push(q.north),e.includes("west")&&a.push(q.west);var r=function(e,t){var n=t[0],a=t[1],r=[];return e<n&&r.push(q.north),e>=n*(a-1)&&r.push(q.south),e%n===0&&r.push(q.west),e%n===n-1&&r.push(q.east),r.length>0?r:null}(t,n);return r&&(a=[].concat(Object(te.a)(a),Object(te.a)(r))),a}var ae=function(e){var t=e.walls,n=e.children;return o.a.createElement(Z,{walls:t},o.a.createElement(ee,null,n))};function re(){var e=Object(J.a)(["\n  max-width: 100%;\n  max-height: 100%;\n"]);return re=function(){return e},e}var oe=d.d.img(re()),ie=function(e){var t=e.alt,n=Object(s.a)(e,["alt"]);return o.a.createElement(oe,Object.assign({},n,{alt:t||"image"}))},ce=function(e){var t=e.type,i=Object(r.useState)(""),c=Object(u.a)(i,2),l=c[0],s=c[1],d=Object(r.useState)(!1),m=Object(u.a)(d,2),p=m[0],h=m[1];Object(r.useEffect)((function(){l&&h(!0)}),[l]);var f=function(e){return s(e.default)};switch(t){case a.applejack:n.e(3).then(n.t.bind(null,40,7)).then(f);break;case a.fluttershy:n.e(6).then(n.t.bind(null,41,7)).then(f);break;case a.pinkiePie:n.e(7).then(n.t.bind(null,42,7)).then(f);break;case a.rainbowDash:n.e(8).then(n.t.bind(null,43,7)).then(f);break;case a.rarity:n.e(9).then(n.t.bind(null,44,7)).then(f);break;case a.spike:n.e(10).then(n.t.bind(null,45,7)).then(f);break;case a.twilightSparkle:n.e(11).then(n.t.bind(null,46,7)).then(f);break;case"domokun":n.e(4).then(n.t.bind(null,47,7)).then(f);break;case"exit":n.e(5).then(n.t.bind(null,48,7)).then(f);break;default:return null}return p?o.a.createElement(ie,{src:l,alt:t}):null},le=function(e){var t=e.data,n=e.size,a=void 0===n?[15,15]:n,r=e.endPointPos,i=e.ponyStartingPos,c=e.domokunStartingPos,l=e.pony;return o.a.createElement(X,{size:a},t.map((function(e,t){return o.a.createElement(ae,{key:t,walls:ne(e,t,a)},r===t&&o.a.createElement(ce,{type:"exit"}),i===t&&o.a.createElement(ce,{type:l}),c===t&&o.a.createElement(ce,{type:"domokun"}))})))},ue=n(8),se=n.n(ue),de=n(12),me=n(25);function pe(e,t){return he.apply(this,arguments)}function he(){return(he=Object(de.a)(se.a.mark((function e(t,n){var a,r,o;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null===n||void 0===n?void 0:n.query,r={method:(null===n||void 0===n?void 0:n.method)||"GET",headers:Object(me.a)({"Content-Type":"application/json",Accept:"application/json"},null===n||void 0===n?void 0:n.headers),body:a?JSON.stringify(a):null===n||void 0===n?void 0:n.body},e.next=4,fetch(t,r);case 4:return o=e.sent,e.abrupt("return",o.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe="https://ponychallenge.trustpilot.com/pony-challenge/maze";function ge(e){var t=e.width,n=e.height,a=e.difficulty,r=e.pony;return pe(fe,{method:"POST",query:{"maze-width":t,"maze-height":n,"maze-player-name":r,difficulty:a}})}function be(e){return pe("".concat(fe,"/").concat(e))}function ye(e,t){return pe("".concat(fe,"/").concat(e),{method:"POST",query:{direction:t}})}var ve=Object(_.b)({name:"game",initialState:{gameId:null,mazeData:[],gameStatus:"preparing",ponyPos:null,domokunPos:null,exit:null,fetchingState:{game:"finish",movement:"finish"}},reducers:{setGameId:function(e,t){e.gameId=t.payload},initiateGame:function(e,t){var n=t.payload,a=n.data,r=Object(u.a)(n.pony,1)[0],o=Object(u.a)(n.domokun,1)[0],i=Object(u.a)(n["end-point"],1)[0],c=n["game-state"].state;e.mazeData=a,e.ponyPos=r,e.domokunPos=o,e.exit=i,e.gameStatus=c.toLowerCase()},startFetching:function(e,t){e.fetchingState[t.payload]="pending"},finishFetching:function(e,t){e.fetchingState[t.payload]="finish"},errorFetching:function(e,t){e.fetchingState[t.payload]="error"},setGameStatus:function(e,t){e.gameStatus=t.payload.state,"won"!==t.payload.state&&"over"!==t.payload.state||(e.hiddenUrl=t.payload["hidden-url"])},updateGame:function(e,t){var n=t.payload,a=Object(u.a)(n.pony,1)[0],r=Object(u.a)(n.domokun,1)[0];e.ponyPos=a,e.domokunPos=r},resetGame:function(e){e.gameId=null,e.mazeData=[],e.gameStatus="preparing",e.ponyPos=null,e.domokunPos=null,e.exit=null,e.fetchingState={game:"finish",movement:"finish"},e.hiddenUrl=void 0}}}),we=ve.actions,xe=we.setGameId,ke=we.initiateGame,je=we.startFetching,Oe=we.errorFetching,Ee=we.finishFetching,Se=we.setGameStatus,Ce=we.updateGame,_e=we.resetGame,Pe=function(e){return function(){var t=Object(de.a)(se.a.mark((function t(n,a){var r,o;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("pending"!==a().game.fetchingState.game){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,n(je("game")),t.next=7,ge(e);case 7:return r=t.sent,n(xe(r.maze_id)),t.next=11,be(r.maze_id);case 11:o=t.sent,n(ke(o)),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),n(Oe("game"));case 18:return t.prev=18,n(Ee("game")),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[3,15,18,21]])})));return function(e,n){return t.apply(this,arguments)}}()},ze=function(e){return function(){var t=Object(de.a)(se.a.mark((function t(n,a){var r,o,i,c;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a(),o=r.game.gameId,"pending"!==r.game.fetchingState.movement&&o){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,n(je("movement")),t.next=8,ye(o,e);case 8:if(i=t.sent,n(Se(i)),"active"!==i.state){t.next=15;break}return t.next=13,be(o);case 13:c=t.sent,n(Ce(c));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(4),n(Oe("movement"));case 20:return t.prev=20,n(Ee("movement")),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[4,17,20,23]])})));return function(e,n){return t.apply(this,arguments)}}()},Ie=ve.reducer;var De=n(23),Ne=n.n(De),Le=d.d.section.withConfig({displayName:"gamestyles__GameWrapper",componentId:"wr2bq9-0"})(["grid-area:game;"]),Ge=function(){var e=Object(l.b)(),t=Object(l.c)(E),n=t.width,a=t.height,i=t.currentPony,c=Object(l.c)(F),u=c.mazeData,s=c.exit,d=c.ponyPos,m=c.domokunPos,p=Object(l.c)(U),h=Object(l.c)(H),f=Object(l.c)(W),g=Object(l.c)(T);Object(r.useEffect)((function(){var t=function(t){if(t.preventDefault(),t.stopPropagation(),!f){var n=function(e){return"ArrowUp"===e?q.north:"ArrowDown"===e?q.south:"ArrowLeft"===e?q.west:"ArrowRight"===e?q.east:null}(t.key);n&&e(ze(n))}};return p&&document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[f,p,e]);var b=null;return p?h&&(b=o.a.createElement(ie,{src:"".concat("https://ponychallenge.trustpilot.com/").concat(g)})):b=o.a.createElement(ie,{src:Ne.a}),o.a.createElement(Le,null,b,p&&!h&&o.a.createElement(le,{pony:i,size:[n,a],data:u,domokunStartingPos:m,ponyStartingPos:d,endPointPos:s}))},Ae=d.d.button.withConfig({displayName:"buttonstyles__StyledButton",componentId:"sc-1xtro2q-0"})(["width:100%;appearance:none;background:none;font-family:",";font-size:32px;font-weight:bolder;padding-left:12px;padding-right:12px;outline:none;border:2px solid transparent;color:rgb(112,76,182);padding-bottom:4px;cursor:pointer;background-color:rgba(112,76,182,0.1);border-radius:2px;transition:all 0.15s;&:hover,&:focus{border:2px solid rgba(112,76,182,0.4);}&:active{background-color:rgba(112,76,182,0.2);}&[disabled]{cursor:not-allowed;color:rgba(112,76,182,0.4);&:hover,&:focus{border:2px solid transparent;color:rgba(112,76,182,0.4);}}"],(function(e){return e.theme.fonts.body})),Fe=o.a.forwardRef((function(e,t){var n=e.ariaLabel,a=e.type,r=e.onClick,i=e.children,c=e.disabled,l=Object(s.a)(e,["ariaLabel","type","onClick","children","disabled"]);return o.a.createElement(Ae,Object.assign({},l,{type:a||"button",ref:t,"aria-label":n||"generic button",onClick:r,disabled:c}),i)})),We=d.d.section.withConfig({displayName:"controlstyles__ControlWrapper",componentId:"wbqkb-0"})(["grid-area:button;padding:6vh 0;@media (max-width:","){padding:3vh 0;}"],(function(e){return e.theme.breakpoints.tablet})),Ue=function(){var e=Object(l.c)(E),t=e.width,n=e.height,a=e.difficultyLevel,r=e.currentPony,i=Object(l.c)(U),c=Object(l.b)();return o.a.createElement(We,null,i&&o.a.createElement(Fe,{onClick:function(){c(_e()),c(G())}},"Reset Game"),!i&&o.a.createElement(Fe,{onClick:function(){return r?c(Pe({width:t,height:n,difficulty:a,pony:r})):void 0},disabled:!r},"Start Game"))},He=d.d.main.withConfig({displayName:"appstyles__PageLayout",componentId:"sc-1qifvrj-0"})(["background-color:",";opacity:0.9;border-radius:5px;height:calc(100vh - 8vh - 8vh);margin:8vh 10vw;padding:2vh 4vw;display:grid;grid-template-areas:'game setting' 'game button';grid-template-columns:2fr 1fr;grid-template-rows:1fr auto;grid-gap:5vw;> *{display:grid;grid-gap:2.5vw;align-content:center;}@media (max-width:","){grid-template-areas:'game game' 'setting button';grid-template-columns:1fr auto;grid-template-rows:1fr auto;grid-gap:2vh;}@media (max-width:","){margin:8vh 4vw;grid-template-areas:'game' 'setting' 'button';grid-template-columns:1fr;grid-template-rows:1fr auto auto;grid-gap:2vh;}"],(function(e){return e.theme.colors.light["shade-100"]}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.mobile})),Te=function(){return o.a.createElement(He,null,o.a.createElement(Ge,null),o.a.createElement(V,null),o.a.createElement(Ue,null))},qe=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var a=t(n);return console.log("next state",e.getState()),console.groupEnd(),a}}},Be=Object(_.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),Me=Be.actions,Re=(Me.increment,Me.decrement,Me.incrementByAmount,Be.reducer),Ve=Object(_.a)({reducer:{counter:Re,settings:A,game:Ie},middleware:[qe].concat(Object(te.a)(Object(_.c)()))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(24),Ye=n.n(Je);function $e(){var e=Object(J.a)(["\n   body {\n      margin: 0;\n      font-family: ",";\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      background-image: url(",");\n      background-size: cover;\n   }\n\n   code {\n      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n   }\n\n   *, * > * {\n      box-sizing: border-box;\n   }\n"]);return $e=function(){return e},e}var Ke=Object(d.b)($e(),(function(e){return e.theme.fonts.body}),Ye.a);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,{theme:{colors:{primary:"#AAABD3",secondary:"#CBA6C3",dark:{"shade-100":"#353866"},light:{"shade-100":"#F8FAFF"}},fonts:{title:"'Lobster Two', cursive",body:"'Arvo', serif"},breakpoints:{tablet:"768px",mobile:"420px"}}},o.a.createElement(Ke,null),o.a.createElement(l.a,{store:Ve},o.a.createElement(Te,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4466083b.chunk.js.map