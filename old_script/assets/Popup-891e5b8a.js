import{S as Z,i as Q,s as U,F as Me,g as se,m as re,t as b,n as M,p as ce,e as ae,h as G,j as V,w as Te,o as p,b as x,aX as Ie,c as ve,l as ze,X as me,Y as de,Z as he,_ as _e,N as Ee,aY as j,I as Pe,J as ge,K as be,b3 as Se,a5 as Fe,q as J,r as He,a4 as B,P as je,T as Be,b4 as we}from"./index-755c6143.js";function Ae(t){let n,e,o;return{c(){n=ae("input"),n.disabled=t[2],G(n,"class","govuk-file-upload"),G(n,"id",t[1]),G(n,"type","file")},m(f,u){V(f,n,u),t[6](n),e||(o=Te(n,"change",t[4]),e=!0)},p(f,u){u&4&&(n.disabled=f[2]),u&2&&G(n,"id",f[1])},d(f){f&&p(n),t[6](null),e=!1,o()}}}function We(t){let n,e;return n=new Me({props:{label:t[0],id:t[1],$$slots:{default:[Ae]},$$scope:{ctx:t}}}),{c(){se(n.$$.fragment)},m(o,f){re(n,o,f),e=!0},p(o,[f]){const u={};f&1&&(u.label=o[0]),f&2&&(u.id=o[1]),f&142&&(u.$$scope={dirty:f,ctx:o}),n.$set(u)},i(o){e||(b(n.$$.fragment,o),e=!0)},o(o){M(n.$$.fragment,o),e=!1},d(o){ce(n,o)}}}function De(t,n,e){let{label:o}=n,{id:f}=n,{loadFile:u}=n,{disabled:s=!1}=n,i;function a(m){let I=new FileReader;I.onload=k=>{u(k.target.result)};let O=i.files;I.readAsText(O[0])}function T(m){x[m?"unshift":"push"](()=>{i=m,e(3,i)})}return t.$$set=m=>{"label"in m&&e(0,o=m.label),"id"in m&&e(1,f=m.id),"loadFile"in m&&e(5,u=m.loadFile),"disabled"in m&&e(2,s=m.disabled)},[o,f,s,i,a,u,T]}class Re extends Z{constructor(n){super(),Q(this,n,De,We,U,{label:0,id:1,loadFile:5,disabled:2})}}function Ne(t){let n;const e=t[15].default,o=me(e,t,t[23],null);return{c(){o&&o.c()},m(f,u){o&&o.m(f,u),n=!0},p(f,u){o&&o.p&&(!n||u&8388608)&&de(o,e,f,f[23],n?_e(e,f[23],u,null):he(f[23]),null)},i(f){n||(b(o,f),n=!0)},o(f){M(o,f),n=!1},d(f){o&&o.d(f)}}}function qe(t){let n,e,o;function f(s){t[16](s)}let u={id:t[1],type:"fill",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],minzoom:t[9],maxzoom:t[10],hoverCursor:t[11],manageHoverState:t[12],eventsIfTopMost:t[13],interactive:t[14],$$slots:{default:[Ne]},$$scope:{ctx:t}};return t[0]!==void 0&&(u.hovered=t[0]),n=new Ie({props:u}),x.push(()=>ve(n,"hovered",f)),n.$on("click",t[17]),n.$on("dblclick",t[18]),n.$on("contextmenu",t[19]),n.$on("mouseenter",t[20]),n.$on("mousemove",t[21]),n.$on("mouseleave",t[22]),{c(){se(n.$$.fragment)},m(s,i){re(n,s,i),o=!0},p(s,[i]){const a={};i&2&&(a.id=s[1]),i&4&&(a.source=s[2]),i&8&&(a.sourceLayer=s[3]),i&16&&(a.beforeId=s[4]),i&32&&(a.beforeLayerType=s[5]),i&64&&(a.paint=s[6]),i&128&&(a.layout=s[7]),i&256&&(a.filter=s[8]),i&512&&(a.minzoom=s[9]),i&1024&&(a.maxzoom=s[10]),i&2048&&(a.hoverCursor=s[11]),i&4096&&(a.manageHoverState=s[12]),i&8192&&(a.eventsIfTopMost=s[13]),i&16384&&(a.interactive=s[14]),i&8388608&&(a.$$scope={dirty:i,ctx:s}),!e&&i&1&&(e=!0,a.hovered=s[0],ze(()=>e=!1)),n.$set(a)},i(s){o||(b(n.$$.fragment,s),o=!0)},o(s){M(n.$$.fragment,s),o=!1},d(s){ce(n,s)}}}function Xe(t,n,e){let{$$slots:o={},$$scope:f}=n,{id:u=Ee("fill")}=n,{source:s=void 0}=n,{sourceLayer:i=void 0}=n,{beforeId:a=void 0}=n,{beforeLayerType:T=void 0}=n,{paint:m}=n,{layout:I=void 0}=n,{filter:O=void 0}=n,{minzoom:k=void 0}=n,{maxzoom:v=void 0}=n,{hoverCursor:E=void 0}=n,{manageHoverState:h=!1}=n,{hovered:L=null}=n,{eventsIfTopMost:P=!1}=n,{interactive:S=!0}=n;function w(r){L=r,e(0,L)}function A(r){j.call(this,t,r)}function W(r){j.call(this,t,r)}function _(r){j.call(this,t,r)}function F(r){j.call(this,t,r)}function d(r){j.call(this,t,r)}function N(r){j.call(this,t,r)}return t.$$set=r=>{"id"in r&&e(1,u=r.id),"source"in r&&e(2,s=r.source),"sourceLayer"in r&&e(3,i=r.sourceLayer),"beforeId"in r&&e(4,a=r.beforeId),"beforeLayerType"in r&&e(5,T=r.beforeLayerType),"paint"in r&&e(6,m=r.paint),"layout"in r&&e(7,I=r.layout),"filter"in r&&e(8,O=r.filter),"minzoom"in r&&e(9,k=r.minzoom),"maxzoom"in r&&e(10,v=r.maxzoom),"hoverCursor"in r&&e(11,E=r.hoverCursor),"manageHoverState"in r&&e(12,h=r.manageHoverState),"hovered"in r&&e(0,L=r.hovered),"eventsIfTopMost"in r&&e(13,P=r.eventsIfTopMost),"interactive"in r&&e(14,S=r.interactive),"$$scope"in r&&e(23,f=r.$$scope)},[L,u,s,i,a,T,m,I,O,k,v,E,h,P,S,o,w,A,W,_,F,d,N,f]}class Ze extends Z{constructor(n){super(),Q(this,n,Xe,qe,U,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13,interactive:14})}}const Ye=t=>({features:t[0]&16,data:t[0]&16,map:t[0]&4,close:t[0]&1}),fe=t=>{var n;return{features:t[4],data:(n=t[4])==null?void 0:n[0],map:t[2],close:t[31]}};function ue(t){let n,e,o=(t[4]||t[3]instanceof B.Marker)&&ie(t);return{c(){n=ae("div"),o&&o.c()},m(f,u){V(f,n,u),o&&o.m(n,null),t[32](n),e=!0},p(f,u){f[4]||f[3]instanceof B.Marker?o?(o.p(f,u),u[0]&24&&b(o,1)):(o=ie(f),o.c(),b(o,1),o.m(n,null)):o&&(ge(),M(o,1,1,()=>{o=null}),be())},i(f){e||(b(o),e=!0)},o(f){M(o),e=!1},d(f){f&&p(n),o&&o.d(),t[32](null)}}}function ie(t){let n;const e=t[30].default,o=me(e,t,t[29],fe);return{c(){o&&o.c()},m(f,u){o&&o.m(f,u),n=!0},p(f,u){o&&o.p&&(!n||u[0]&536870933)&&de(o,e,f,f[29],n?_e(e,f[29],u,Ye):he(f[29]),fe)},i(f){n||(b(o,f),n=!0)},o(f){M(o,f),n=!1},d(f){o&&o.d(f)}}}function Ge(t){let n,e,o=t[9].default&&ue(t);return{c(){o&&o.c(),n=Pe()},m(f,u){o&&o.m(f,u),V(f,n,u),e=!0},p(f,u){f[9].default?o?(o.p(f,u),u[0]&512&&b(o,1)):(o=ue(f),o.c(),b(o,1),o.m(n.parentNode,n)):o&&(ge(),M(o,1,1,()=>{o=null}),be())},i(f){e||(b(o),e=!0)},o(f){M(o),e=!1},d(f){f&&p(n),o&&o.d(f)}}}function Je(t,n,e){let o,f,u,s,i,a,{$$slots:T={},$$scope:m}=n;const I=Se(T);let{closeButton:O=void 0}=n,{closeOnClickOutside:k=!0}=n,{closeOnClickInside:v=!1}=n,{closeOnMove:E=!1}=n,{openOn:h="click"}=n,{openIfTopMost:L=!0}=n,{focusAfterOpen:P=!0}=n,{anchor:S=void 0}=n,{offset:w=void 0}=n,{popupClass:A=void 0}=n,{maxWidth:W=void 0}=n,{lngLat:_=void 0}=n,{html:F=void 0}=n,{open:d=!1}=n;const{map:N,popupTarget:r,layerEvent:q,layer:$,eventTopMost:ke}=Fe();J(t,N,l=>e(2,u=l)),J(t,r,l=>e(3,i=l)),J(t,q,l=>e(28,s=l)),J(t,$,l=>e(35,a=l));const ye=["click","dblclick","contextmenu"];let c,X=!1,C;function Oe(){if(!c)return;let l=c.getElement();!l||l===C||(C=l,h==="hover"&&(C.style.pointerEvents="none"),C.addEventListener("mouseenter",()=>{e(24,X=!0)},{passive:!0}),C.addEventListener("mouseleave",()=>{e(24,X=!1)},{passive:!0}),C.addEventListener("click",()=>{v&&e(0,d=!1)},{passive:!0}))}He(()=>{if(u)return u.on("click",Y),u.on("contextmenu",Y),typeof i=="string"&&(u.on("click",i,z),u.on("dblclick",i,z),u.on("contextmenu",i,z),u.on("mousemove",i,le),u.on("mouseleave",i,oe),u.on("touchstart",i,ne),u.on("touchend",i,te)),()=>{u!=null&&u.loaded()&&(c==null||c.remove(),u.off("click",Y),u.off("contextmenu",Y),i instanceof B.Marker?i.getPopup()===c&&i.setPopup(void 0):typeof i=="string"&&(u.off("click",i,z),u.off("dblclick",i,z),u.off("contextmenu",i,z),u.off("mousemove",i,le),u.off("mouseleave",i,oe),u.off("touchstart",i,ne),u.off("touchend",i,te)))}});function ee(l){return L?!("marker"in l)&&!we(l)&&ke(l)!==a:!1}let g=null,y="normal";function z(l){l.type===h&&(ee(l)||("layerType"in l?l.layerType==="deckgl"?(e(10,_=l.coordinate),e(4,g=l.object?[l.object]:null)):(e(10,_=l.lngLat),e(4,g=l.features??[])):(e(10,_=l.lngLat),e(4,g=l.features??[])),setTimeout(()=>e(0,d=!0))))}let H=null;function ne(l){H=l.point}function te(l){if(!H||h!=="hover")return;let K=H.dist(l.point);H=null,K<3&&(e(10,_=l.lngLat),e(4,g=l.features??[]),c.isOpen()?e(25,y="justOpened"):(e(25,y="opening"),e(0,d=!0)))}function oe(l){h!=="hover"||H||y!=="normal"||(e(0,d=!1),e(4,g=null))}function le(l){if(!(h!=="hover"||H||y!=="normal")){if(ee(l)){e(0,d=!1),e(4,g=null);return}e(0,d=!0),e(4,g=l.features??[]),e(10,_=l.lngLat)}}function Y(l){if(y==="justOpened"){e(25,y="normal");return}if(!k)return;let K=[C,i instanceof B.Marker?i==null?void 0:i.getElement():null];d&&c.isOpen()&&!K.some(R=>R==null?void 0:R.contains(l.originalEvent.target))&&(l.type==="contextmenu"&&h==="contextmenu"||l.type!=="contextmenu")&&e(0,d=!1)}je(()=>{u&&(c!=null&&c.isOpen())&&c.remove()});let D;const Le=()=>e(0,d=!1);function Ce(l){x[l?"unshift":"push"](()=>{D=l,e(1,D)})}return t.$$set=l=>{"closeButton"in l&&e(11,O=l.closeButton),"closeOnClickOutside"in l&&e(12,k=l.closeOnClickOutside),"closeOnClickInside"in l&&e(13,v=l.closeOnClickInside),"closeOnMove"in l&&e(14,E=l.closeOnMove),"openOn"in l&&e(15,h=l.openOn),"openIfTopMost"in l&&e(16,L=l.openIfTopMost),"focusAfterOpen"in l&&e(17,P=l.focusAfterOpen),"anchor"in l&&e(18,S=l.anchor),"offset"in l&&e(19,w=l.offset),"popupClass"in l&&e(20,A=l.popupClass),"maxWidth"in l&&e(21,W=l.maxWidth),"lngLat"in l&&e(10,_=l.lngLat),"html"in l&&e(22,F=l.html),"open"in l&&e(0,d=l.open),"$$scope"in l&&e(29,m=l.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&14336&&e(27,o=O??(!k&&!v)),t.$$.dirty[0]&146685952&&(c||(e(23,c=new B.Popup({closeButton:o,closeOnClick:!1,closeOnMove:E,focusAfterOpen:P,maxWidth:W,className:A,anchor:S,offset:w})),C=c.getElement(),c.on("open",()=>{e(0,d=!0),Oe()}),c.on("close",l=>{e(0,d=!1)}))),t.$$.dirty[0]&8421384&&c&&i instanceof B.Marker&&(h==="click"?i.setPopup(c):i.getPopup()===c&&i.setPopup(void 0)),t.$$.dirty[0]&268468224&&ye.includes(h)&&(s==null?void 0:s.type)===h&&(z(s),Be(q,s=null,s)),t.$$.dirty[0]&268468224&&e(26,f=h==="hover"&&((s==null?void 0:s.type)==="mousemove"||(s==null?void 0:s.type)==="mouseenter")),t.$$.dirty[0]&352354304&&h==="hover"&&q&&(f&&s&&(s.layerType==="deckgl"?(e(10,_=s.coordinate),e(4,g=s.object?[s.object]:null)):(e(10,_=s.lngLat),e(4,g=s.features??[]))),e(0,d=(f||X)??!1)),t.$$.dirty[0]&12582914&&(D?c.setDOMContent(D):F&&c.setHTML(F)),t.$$.dirty[0]&8389632&&_&&c.setLngLat(_),t.$$.dirty[0]&41943045&&u){let l=c.isOpen();d&&!l?(c.addTo(u),y==="opening"&&e(25,y="justOpened")):!d&&l&&c.remove()}},[d,D,u,i,g,N,r,q,$,I,_,O,k,v,E,h,L,P,S,w,A,W,F,c,X,y,f,o,s,m,T,Le,Ce]}class Qe extends Z{constructor(n){super(),Q(this,n,Je,Ge,U,{closeButton:11,closeOnClickOutside:12,closeOnClickInside:13,closeOnMove:14,openOn:15,openIfTopMost:16,focusAfterOpen:17,anchor:18,offset:19,popupClass:20,maxWidth:21,lngLat:10,html:22,open:0},null,[-1,-1])}}export{Re as F,Qe as P,Ze as a};
