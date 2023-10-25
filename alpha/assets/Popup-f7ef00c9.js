import{S as G,i as J,s as K,F as Ce,g as se,m as re,t as b,n as M,p as ce,e as ae,h as Q,j as U,w as Me,o as V,b as Y,aW as Te,c as Ie,l as ze,aL as me,aM as de,aN as he,aO as _e,aP as Se,aX as H,Z as Pe,_ as ge,$ as be,b2 as Ee,b3 as Fe,q as R,r as ve,aQ as j,aS as He}from"./index-54baa3ee.js";function je(t){let n,e,o;return{c(){n=ae("input"),n.disabled=t[2],Q(n,"class","govuk-file-upload"),Q(n,"id",t[1]),Q(n,"type","file")},m(l,u){U(l,n,u),t[6](n),e||(o=Me(n,"change",t[4]),e=!0)},p(l,u){u&4&&(n.disabled=l[2]),u&2&&Q(n,"id",l[1])},d(l){l&&V(n),t[6](null),e=!1,o()}}}function Be(t){let n,e;return n=new Ce({props:{label:t[0],id:t[1],$$slots:{default:[je]},$$scope:{ctx:t}}}),{c(){se(n.$$.fragment)},m(o,l){re(n,o,l),e=!0},p(o,[l]){const u={};l&1&&(u.label=o[0]),l&2&&(u.id=o[1]),l&142&&(u.$$scope={dirty:l,ctx:o}),n.$set(u)},i(o){e||(b(n.$$.fragment,o),e=!0)},o(o){M(n.$$.fragment,o),e=!1},d(o){ce(n,o)}}}function we(t,n,e){let{label:o}=n,{id:l}=n,{loadFile:u}=n,{disabled:s=!1}=n,i;function c(m){let I=new FileReader;I.onload=k=>{u(k.target.result)};let y=i.files;I.readAsText(y[0])}function T(m){Y[m?"unshift":"push"](()=>{i=m,e(3,i)})}return t.$$set=m=>{"label"in m&&e(0,o=m.label),"id"in m&&e(1,l=m.id),"loadFile"in m&&e(5,u=m.loadFile),"disabled"in m&&e(2,s=m.disabled)},[o,l,s,i,c,u,T]}class Xe extends G{constructor(n){super(),J(this,n,we,Be,K,{label:0,id:1,loadFile:5,disabled:2})}}function Ae(t){let n;const e=t[14].default,o=me(e,t,t[22],null);return{c(){o&&o.c()},m(l,u){o&&o.m(l,u),n=!0},p(l,u){o&&o.p&&(!n||u&4194304)&&de(o,e,l,l[22],n?_e(e,l[22],u,null):he(l[22]),null)},i(l){n||(b(o,l),n=!0)},o(l){M(o,l),n=!1},d(l){o&&o.d(l)}}}function We(t){let n,e,o;function l(s){t[15](s)}let u={id:t[1],type:"fill",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],minzoom:t[9],maxzoom:t[10],hoverCursor:t[11],manageHoverState:t[12],eventsIfTopMost:t[13],$$slots:{default:[Ae]},$$scope:{ctx:t}};return t[0]!==void 0&&(u.hovered=t[0]),n=new Te({props:u}),Y.push(()=>Ie(n,"hovered",l)),n.$on("click",t[16]),n.$on("dblclick",t[17]),n.$on("contextmenu",t[18]),n.$on("mouseenter",t[19]),n.$on("mousemove",t[20]),n.$on("mouseleave",t[21]),{c(){se(n.$$.fragment)},m(s,i){re(n,s,i),o=!0},p(s,[i]){const c={};i&2&&(c.id=s[1]),i&4&&(c.source=s[2]),i&8&&(c.sourceLayer=s[3]),i&16&&(c.beforeId=s[4]),i&32&&(c.beforeLayerType=s[5]),i&64&&(c.paint=s[6]),i&128&&(c.layout=s[7]),i&256&&(c.filter=s[8]),i&512&&(c.minzoom=s[9]),i&1024&&(c.maxzoom=s[10]),i&2048&&(c.hoverCursor=s[11]),i&4096&&(c.manageHoverState=s[12]),i&8192&&(c.eventsIfTopMost=s[13]),i&4194304&&(c.$$scope={dirty:i,ctx:s}),!e&&i&1&&(e=!0,c.hovered=s[0],ze(()=>e=!1)),n.$set(c)},i(s){o||(b(n.$$.fragment,s),o=!0)},o(s){M(n.$$.fragment,s),o=!1},d(s){ce(n,s)}}}function Ne(t,n,e){let{$$slots:o={},$$scope:l}=n,{id:u=Se("fill")}=n,{source:s=void 0}=n,{sourceLayer:i=void 0}=n,{beforeId:c=void 0}=n,{beforeLayerType:T=void 0}=n,{paint:m}=n,{layout:I=void 0}=n,{filter:y=void 0}=n,{minzoom:k=void 0}=n,{maxzoom:z=void 0}=n,{hoverCursor:P=void 0}=n,{manageHoverState:h=!1}=n,{hovered:L=null}=n,{eventsIfTopMost:E=!1}=n;function B(r){L=r,e(0,L)}function w(r){H.call(this,t,r)}function A(r){H.call(this,t,r)}function W(r){H.call(this,t,r)}function _(r){H.call(this,t,r)}function F(r){H.call(this,t,r)}function d(r){H.call(this,t,r)}return t.$$set=r=>{"id"in r&&e(1,u=r.id),"source"in r&&e(2,s=r.source),"sourceLayer"in r&&e(3,i=r.sourceLayer),"beforeId"in r&&e(4,c=r.beforeId),"beforeLayerType"in r&&e(5,T=r.beforeLayerType),"paint"in r&&e(6,m=r.paint),"layout"in r&&e(7,I=r.layout),"filter"in r&&e(8,y=r.filter),"minzoom"in r&&e(9,k=r.minzoom),"maxzoom"in r&&e(10,z=r.maxzoom),"hoverCursor"in r&&e(11,P=r.hoverCursor),"manageHoverState"in r&&e(12,h=r.manageHoverState),"hovered"in r&&e(0,L=r.hovered),"eventsIfTopMost"in r&&e(13,E=r.eventsIfTopMost),"$$scope"in r&&e(22,l=r.$$scope)},[L,u,s,i,c,T,m,I,y,k,z,P,h,E,o,B,w,A,W,_,F,d,l]}class Ze extends G{constructor(n){super(),J(this,n,Ne,We,K,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}const qe=t=>({features:t[0]&16,data:t[0]&16,map:t[0]&4,close:t[0]&1}),fe=t=>{var n;return{features:t[4],data:(n=t[4])==null?void 0:n[0],map:t[2],close:t[31]}};function ue(t){let n,e,o=(t[4]||t[3]instanceof j.Marker)&&ie(t);return{c(){n=ae("div"),o&&o.c()},m(l,u){U(l,n,u),o&&o.m(n,null),t[32](n),e=!0},p(l,u){l[4]||l[3]instanceof j.Marker?o?(o.p(l,u),u[0]&24&&b(o,1)):(o=ie(l),o.c(),b(o,1),o.m(n,null)):o&&(ge(),M(o,1,1,()=>{o=null}),be())},i(l){e||(b(o),e=!0)},o(l){M(o),e=!1},d(l){l&&V(n),o&&o.d(),t[32](null)}}}function ie(t){let n;const e=t[30].default,o=me(e,t,t[29],fe);return{c(){o&&o.c()},m(l,u){o&&o.m(l,u),n=!0},p(l,u){o&&o.p&&(!n||u[0]&536870933)&&de(o,e,l,l[29],n?_e(e,l[29],u,qe):he(l[29]),fe)},i(l){n||(b(o,l),n=!0)},o(l){M(o,l),n=!1},d(l){o&&o.d(l)}}}function De(t){let n,e,o=t[9].default&&ue(t);return{c(){o&&o.c(),n=Pe()},m(l,u){o&&o.m(l,u),U(l,n,u),e=!0},p(l,u){l[9].default?o?(o.p(l,u),u[0]&512&&b(o,1)):(o=ue(l),o.c(),b(o,1),o.m(n.parentNode,n)):o&&(ge(),M(o,1,1,()=>{o=null}),be())},i(l){e||(b(o),e=!0)},o(l){M(o),e=!1},d(l){l&&V(n),o&&o.d(l)}}}function Qe(t,n,e){let o,l,u,s,i,c,{$$slots:T={},$$scope:m}=n;const I=Ee(T);let{closeButton:y=void 0}=n,{closeOnClickOutside:k=!0}=n,{closeOnClickInside:z=!1}=n,{closeOnMove:P=!1}=n,{openOn:h="click"}=n,{openIfTopMost:L=!0}=n,{focusAfterOpen:E=!0}=n,{anchor:B=void 0}=n,{offset:w=void 0}=n,{popupClass:A=void 0}=n,{maxWidth:W=void 0}=n,{lngLat:_=void 0}=n,{html:F=void 0}=n,{open:d=!1}=n;const{map:r,popupTarget:p,layerEvent:q,layer:x,eventTopMost:$}=Fe();R(t,r,f=>e(2,u=f)),R(t,p,f=>e(3,i=f)),R(t,q,f=>e(28,s=f)),R(t,x,f=>e(35,c=f));const ke=["click","dblclick","contextmenu"];let a,D=!1,C;function Le(){if(!a)return;let f=a.getElement();!f||f===C||(C=f,h==="hover"&&(C.style.pointerEvents="none"),C.addEventListener("mouseenter",()=>{e(24,D=!0)},{passive:!0}),C.addEventListener("mouseleave",()=>{e(24,D=!1)},{passive:!0}),C.addEventListener("click",()=>{z&&e(0,d=!1)},{passive:!0}))}ve(()=>{if(u)return u.on("click",le),typeof i=="string"&&(u.on("click",i,S),u.on("dblclick",i,S),u.on("contextmenu",i,S),u.on("mousemove",i,te),u.on("mouseleave",i,oe),u.on("touchstart",i,ee),u.on("touchend",i,ne)),()=>{u!=null&&u.loaded()&&(a==null||a.remove(),u.off("click",le),i instanceof j.Marker?i.getPopup()===a&&i.setPopup(void 0):typeof i=="string"&&(u.off("click",i,S),u.off("dblclick",i,S),u.off("contextmenu",i,S),u.off("mousemove",i,te),u.off("mouseleave",i,oe),u.off("touchstart",i,ee),u.off("touchend",i,ne)))}});let g=null,O="normal";function S(f){f.type===h&&(L&&$(f)!==c||("layerType"in f?f.layerType==="deckgl"?(e(10,_=f.coordinate),e(4,g=f.object?[f.object]:null)):(e(10,_=f.lngLat),e(4,g=f.features??[])):(e(10,_=f.lngLat),e(4,g=f.features??[])),setTimeout(()=>e(0,d=!0))))}let v=null;function ee(f){v=f.point}function ne(f){if(!v||h!=="hover")return;let X=v.dist(f.point);v=null,X<3&&(e(10,_=f.lngLat),e(4,g=f.features??[]),a.isOpen()?e(25,O="justOpened"):(e(25,O="opening"),e(0,d=!0)))}function oe(f){h!=="hover"||v||O!=="normal"||(e(0,d=!1),e(4,g=null))}function te(f){if(!(h!=="hover"||v||O!=="normal")){if(L&&$(f)!==c){e(0,d=!1),e(4,g=null);return}e(0,d=!0),e(4,g=f.features??[]),e(10,_=f.lngLat)}}function le(f){if(O==="justOpened"){e(25,O="normal");return}if(!k)return;let X=[C,i instanceof j.Marker?i==null?void 0:i.getElement():null];d&&a.isOpen()&&!X.some(Z=>Z==null?void 0:Z.contains(f.originalEvent.target))&&e(0,d=!1)}let N;const Oe=()=>e(0,d=!1);function ye(f){Y[f?"unshift":"push"](()=>{N=f,e(1,N)})}return t.$$set=f=>{"closeButton"in f&&e(11,y=f.closeButton),"closeOnClickOutside"in f&&e(12,k=f.closeOnClickOutside),"closeOnClickInside"in f&&e(13,z=f.closeOnClickInside),"closeOnMove"in f&&e(14,P=f.closeOnMove),"openOn"in f&&e(15,h=f.openOn),"openIfTopMost"in f&&e(16,L=f.openIfTopMost),"focusAfterOpen"in f&&e(17,E=f.focusAfterOpen),"anchor"in f&&e(18,B=f.anchor),"offset"in f&&e(19,w=f.offset),"popupClass"in f&&e(20,A=f.popupClass),"maxWidth"in f&&e(21,W=f.maxWidth),"lngLat"in f&&e(10,_=f.lngLat),"html"in f&&e(22,F=f.html),"open"in f&&e(0,d=f.open),"$$scope"in f&&e(29,m=f.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&14336&&e(27,o=y??(!k&&!z)),t.$$.dirty[0]&146685952&&(a||(e(23,a=new j.Popup({closeButton:o,closeOnClick:!1,closeOnMove:P,focusAfterOpen:E,maxWidth:W,className:A,anchor:B,offset:w})),C=a.getElement(),a.on("open",()=>{e(0,d=!0),Le()}),a.on("close",f=>{e(0,d=!1)}))),t.$$.dirty[0]&8421384&&a&&i instanceof j.Marker&&(h==="click"?i.setPopup(a):i.getPopup()===a&&i.setPopup(void 0)),t.$$.dirty[0]&268468224&&ke.includes(h)&&(s==null?void 0:s.type)===h&&(S(s),He(q,s=null,s)),t.$$.dirty[0]&268468224&&e(26,l=h==="hover"&&((s==null?void 0:s.type)==="mousemove"||(s==null?void 0:s.type)==="mouseenter")),t.$$.dirty[0]&352354304&&h==="hover"&&q&&(l&&s&&(s.layerType==="deckgl"?(e(10,_=s.coordinate),e(4,g=s.object?[s.object]:null)):(e(10,_=s.lngLat),e(4,g=s.features??[]))),e(0,d=(l||D)??!1)),t.$$.dirty[0]&12582914&&(N?a.setDOMContent(N):F&&a.setHTML(F)),t.$$.dirty[0]&8389632&&_&&a.setLngLat(_),t.$$.dirty[0]&41943045&&u){let f=a.isOpen();d&&!f?(a.addTo(u),O==="opening"&&e(25,O="justOpened")):!d&&f&&a.remove()}},[d,N,u,i,g,r,p,q,x,I,_,y,k,z,P,h,L,E,B,w,A,W,F,a,D,O,l,o,s,m,T,Oe,ye]}class Ge extends G{constructor(n){super(),J(this,n,Qe,De,K,{closeButton:11,closeOnClickOutside:12,closeOnClickInside:13,closeOnMove:14,openOn:15,openIfTopMost:16,focusAfterOpen:17,anchor:18,offset:19,popupClass:20,maxWidth:21,lngLat:10,html:22,open:0},null,[-1,-1])}}export{Xe as F,Ge as P,Ze as a};
