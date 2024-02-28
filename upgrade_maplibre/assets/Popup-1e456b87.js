import{S as R,i as U,s as V,F as Me,g as se,m as re,t as b,n as M,p as ce,H as Te,e as ae,h as Q,j as X,w as Ie,o as p,b as x,aY as ve,c as ze,l as Ee,Y as me,Z as de,_ as he,$ as _e,O as He,aZ as j,J as Se,K as ge,N as be,b6 as Fe,a6 as Pe,q as G,r as je,a5 as B,Q as Be,U as we,b7 as Ae}from"./index-2a0d7e3c.js";function We(t){let n,e,o;return{c(){n=ae("input"),n.disabled=t[1],Q(n,"class","govuk-file-upload"),Q(n,"id",t[4]),Q(n,"type","file")},m(f,u){X(f,n,u),t[6](n),e||(o=Ie(n,"change",t[3]),e=!0)},p(f,u){u&2&&(n.disabled=f[1])},d(f){f&&p(n),t[6](null),e=!1,o()}}}function De(t){let n,e;return n=new Me({props:{label:t[0],id:t[4],$$slots:{default:[We]},$$scope:{ctx:t}}}),{c(){se(n.$$.fragment)},m(o,f){re(n,o,f),e=!0},p(o,[f]){const u={};f&1&&(u.label=o[0]),f&134&&(u.$$scope={dirty:f,ctx:o}),n.$set(u)},i(o){e||(b(n.$$.fragment,o),e=!0)},o(o){M(n.$$.fragment,o),e=!1},d(o){ce(n,o)}}}function Ne(t,n,e){let{label:o}=n,{loadFile:f}=n,{disabled:u=!1}=n,i;function s(d){let I=new FileReader;I.onload=k=>{f(k.target.result)};let O=i.files;I.readAsText(O[0])}let a=Te();function T(d){x[d?"unshift":"push"](()=>{i=d,e(2,i)})}return t.$$set=d=>{"label"in d&&e(0,o=d.label),"loadFile"in d&&e(5,f=d.loadFile),"disabled"in d&&e(1,u=d.disabled)},[o,u,i,s,a,f,T]}class Re extends R{constructor(n){super(),U(this,n,Ne,De,V,{label:0,loadFile:5,disabled:1})}}function qe(t){let n;const e=t[15].default,o=me(e,t,t[23],null);return{c(){o&&o.c()},m(f,u){o&&o.m(f,u),n=!0},p(f,u){o&&o.p&&(!n||u&8388608)&&de(o,e,f,f[23],n?_e(e,f[23],u,null):he(f[23]),null)},i(f){n||(b(o,f),n=!0)},o(f){M(o,f),n=!1},d(f){o&&o.d(f)}}}function Ye(t){let n,e,o;function f(i){t[16](i)}let u={id:t[1],type:"fill",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],minzoom:t[9],maxzoom:t[10],hoverCursor:t[11],manageHoverState:t[12],eventsIfTopMost:t[13],interactive:t[14],$$slots:{default:[qe]},$$scope:{ctx:t}};return t[0]!==void 0&&(u.hovered=t[0]),n=new ve({props:u}),x.push(()=>ze(n,"hovered",f)),n.$on("click",t[17]),n.$on("dblclick",t[18]),n.$on("contextmenu",t[19]),n.$on("mouseenter",t[20]),n.$on("mousemove",t[21]),n.$on("mouseleave",t[22]),{c(){se(n.$$.fragment)},m(i,s){re(n,i,s),o=!0},p(i,[s]){const a={};s&2&&(a.id=i[1]),s&4&&(a.source=i[2]),s&8&&(a.sourceLayer=i[3]),s&16&&(a.beforeId=i[4]),s&32&&(a.beforeLayerType=i[5]),s&64&&(a.paint=i[6]),s&128&&(a.layout=i[7]),s&256&&(a.filter=i[8]),s&512&&(a.minzoom=i[9]),s&1024&&(a.maxzoom=i[10]),s&2048&&(a.hoverCursor=i[11]),s&4096&&(a.manageHoverState=i[12]),s&8192&&(a.eventsIfTopMost=i[13]),s&16384&&(a.interactive=i[14]),s&8388608&&(a.$$scope={dirty:s,ctx:i}),!e&&s&1&&(e=!0,a.hovered=i[0],Ee(()=>e=!1)),n.$set(a)},i(i){o||(b(n.$$.fragment,i),o=!0)},o(i){M(n.$$.fragment,i),o=!1},d(i){ce(n,i)}}}function Ze(t,n,e){let{$$slots:o={},$$scope:f}=n,{id:u=He("fill")}=n,{source:i=void 0}=n,{sourceLayer:s=void 0}=n,{beforeId:a=void 0}=n,{beforeLayerType:T=void 0}=n,{paint:d}=n,{layout:I=void 0}=n,{filter:O=void 0}=n,{minzoom:k=void 0}=n,{maxzoom:v=void 0}=n,{hoverCursor:E=void 0}=n,{manageHoverState:h=!1}=n,{hovered:L=null}=n,{eventsIfTopMost:H=!1}=n,{interactive:S=!0}=n;function w(r){L=r,e(0,L)}function A(r){j.call(this,t,r)}function W(r){j.call(this,t,r)}function _(r){j.call(this,t,r)}function F(r){j.call(this,t,r)}function m(r){j.call(this,t,r)}function N(r){j.call(this,t,r)}return t.$$set=r=>{"id"in r&&e(1,u=r.id),"source"in r&&e(2,i=r.source),"sourceLayer"in r&&e(3,s=r.sourceLayer),"beforeId"in r&&e(4,a=r.beforeId),"beforeLayerType"in r&&e(5,T=r.beforeLayerType),"paint"in r&&e(6,d=r.paint),"layout"in r&&e(7,I=r.layout),"filter"in r&&e(8,O=r.filter),"minzoom"in r&&e(9,k=r.minzoom),"maxzoom"in r&&e(10,v=r.maxzoom),"hoverCursor"in r&&e(11,E=r.hoverCursor),"manageHoverState"in r&&e(12,h=r.manageHoverState),"hovered"in r&&e(0,L=r.hovered),"eventsIfTopMost"in r&&e(13,H=r.eventsIfTopMost),"interactive"in r&&e(14,S=r.interactive),"$$scope"in r&&e(23,f=r.$$scope)},[L,u,i,s,a,T,d,I,O,k,v,E,h,H,S,o,w,A,W,_,F,m,N,f]}class Ue extends R{constructor(n){super(),U(this,n,Ze,Ye,V,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13,interactive:14})}}const Ge=t=>({features:t[0]&16,data:t[0]&16,map:t[0]&4,close:t[0]&1}),fe=t=>{var n;return{features:t[4],data:(n=t[4])==null?void 0:n[0],map:t[2],close:t[31]}};function ue(t){let n,e,o=(t[4]||t[3]instanceof B.Marker)&&ie(t);return{c(){n=ae("div"),o&&o.c()},m(f,u){X(f,n,u),o&&o.m(n,null),t[32](n),e=!0},p(f,u){f[4]||f[3]instanceof B.Marker?o?(o.p(f,u),u[0]&24&&b(o,1)):(o=ie(f),o.c(),b(o,1),o.m(n,null)):o&&(ge(),M(o,1,1,()=>{o=null}),be())},i(f){e||(b(o),e=!0)},o(f){M(o),e=!1},d(f){f&&p(n),o&&o.d(),t[32](null)}}}function ie(t){let n;const e=t[30].default,o=me(e,t,t[29],fe);return{c(){o&&o.c()},m(f,u){o&&o.m(f,u),n=!0},p(f,u){o&&o.p&&(!n||u[0]&536870933)&&de(o,e,f,f[29],n?_e(e,f[29],u,Ge):he(f[29]),fe)},i(f){n||(b(o,f),n=!0)},o(f){M(o,f),n=!1},d(f){o&&o.d(f)}}}function Je(t){let n,e,o=t[9].default&&ue(t);return{c(){o&&o.c(),n=Se()},m(f,u){o&&o.m(f,u),X(f,n,u),e=!0},p(f,u){f[9].default?o?(o.p(f,u),u[0]&512&&b(o,1)):(o=ue(f),o.c(),b(o,1),o.m(n.parentNode,n)):o&&(ge(),M(o,1,1,()=>{o=null}),be())},i(f){e||(b(o),e=!0)},o(f){M(o),e=!1},d(f){f&&p(n),o&&o.d(f)}}}function Ke(t,n,e){let o,f,u,i,s,a,{$$slots:T={},$$scope:d}=n;const I=Fe(T);let{closeButton:O=void 0}=n,{closeOnClickOutside:k=!0}=n,{closeOnClickInside:v=!1}=n,{closeOnMove:E=!1}=n,{openOn:h="click"}=n,{openIfTopMost:L=!0}=n,{focusAfterOpen:H=!0}=n,{anchor:S=void 0}=n,{offset:w=void 0}=n,{popupClass:A=void 0}=n,{maxWidth:W=void 0}=n,{lngLat:_=void 0}=n,{html:F=void 0}=n,{open:m=!1}=n;const{map:N,popupTarget:r,layerEvent:q,layer:$,eventTopMost:ke}=Pe();G(t,N,l=>e(2,u=l)),G(t,r,l=>e(3,s=l)),G(t,q,l=>e(28,i=l)),G(t,$,l=>e(35,a=l));const ye=["click","dblclick","contextmenu"];let c,Y=!1,C;function Oe(){if(!c)return;let l=c.getElement();!l||l===C||(C=l,h==="hover"&&(C.style.pointerEvents="none"),C.addEventListener("mouseenter",()=>{e(24,Y=!0)},{passive:!0}),C.addEventListener("mouseleave",()=>{e(24,Y=!1)},{passive:!0}),C.addEventListener("click",()=>{v&&e(0,m=!1)},{passive:!0}))}je(()=>{if(u)return u.on("click",Z),u.on("contextmenu",Z),typeof s=="string"&&(u.on("click",s,z),u.on("dblclick",s,z),u.on("contextmenu",s,z),u.on("mousemove",s,le),u.on("mouseleave",s,oe),u.on("touchstart",s,ne),u.on("touchend",s,te)),()=>{u!=null&&u.loaded()&&(c==null||c.remove(),u.off("click",Z),u.off("contextmenu",Z),s instanceof B.Marker?s.getPopup()===c&&s.setPopup(void 0):typeof s=="string"&&(u.off("click",s,z),u.off("dblclick",s,z),u.off("contextmenu",s,z),u.off("mousemove",s,le),u.off("mouseleave",s,oe),u.off("touchstart",s,ne),u.off("touchend",s,te)))}});function ee(l){return L?!("marker"in l)&&!Ae(l)&&ke(l)!==a:!1}let g=null,y="normal";function z(l){l.type===h&&(ee(l)||("layerType"in l?l.layerType==="deckgl"?(e(10,_=l.coordinate),e(4,g=l.object?[l.object]:null)):(e(10,_=l.lngLat),e(4,g=l.features??[])):(e(10,_=l.lngLat),e(4,g=l.features??[])),setTimeout(()=>e(0,m=!0))))}let P=null;function ne(l){P=l.point}function te(l){if(!P||h!=="hover")return;let J=P.dist(l.point);P=null,J<3&&(e(10,_=l.lngLat),e(4,g=l.features??[]),c.isOpen()?e(25,y="justOpened"):(e(25,y="opening"),e(0,m=!0)))}function oe(l){h!=="hover"||P||y!=="normal"||(e(0,m=!1),e(4,g=null))}function le(l){if(!(h!=="hover"||P||y!=="normal")){if(ee(l)){e(0,m=!1),e(4,g=null);return}e(0,m=!0),e(4,g=l.features??[]),e(10,_=l.lngLat)}}function Z(l){if(y==="justOpened"){e(25,y="normal");return}if(!k)return;let J=[C,s instanceof B.Marker?s==null?void 0:s.getElement():null];m&&c.isOpen()&&!J.some(K=>K==null?void 0:K.contains(l.originalEvent.target))&&(l.type==="contextmenu"&&h==="contextmenu"||l.type!=="contextmenu")&&e(0,m=!1)}Be(()=>{u&&(c!=null&&c.isOpen())&&c.remove()});let D;const Le=()=>e(0,m=!1);function Ce(l){x[l?"unshift":"push"](()=>{D=l,e(1,D)})}return t.$$set=l=>{"closeButton"in l&&e(11,O=l.closeButton),"closeOnClickOutside"in l&&e(12,k=l.closeOnClickOutside),"closeOnClickInside"in l&&e(13,v=l.closeOnClickInside),"closeOnMove"in l&&e(14,E=l.closeOnMove),"openOn"in l&&e(15,h=l.openOn),"openIfTopMost"in l&&e(16,L=l.openIfTopMost),"focusAfterOpen"in l&&e(17,H=l.focusAfterOpen),"anchor"in l&&e(18,S=l.anchor),"offset"in l&&e(19,w=l.offset),"popupClass"in l&&e(20,A=l.popupClass),"maxWidth"in l&&e(21,W=l.maxWidth),"lngLat"in l&&e(10,_=l.lngLat),"html"in l&&e(22,F=l.html),"open"in l&&e(0,m=l.open),"$$scope"in l&&e(29,d=l.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&14336&&e(27,o=O??(!k&&!v)),t.$$.dirty[0]&146685952&&(c||(e(23,c=new B.Popup({closeButton:o,closeOnClick:!1,closeOnMove:E,focusAfterOpen:H,maxWidth:W,className:A,anchor:S,offset:w})),C=c.getElement(),c.on("open",()=>{e(0,m=!0),Oe()}),c.on("close",l=>{e(0,m=!1)}))),t.$$.dirty[0]&8421384&&c&&s instanceof B.Marker&&(h==="click"?s.setPopup(c):s.getPopup()===c&&s.setPopup(void 0)),t.$$.dirty[0]&268468224&&ye.includes(h)&&(i==null?void 0:i.type)===h&&(z(i),we(q,i=null,i)),t.$$.dirty[0]&268468224&&e(26,f=h==="hover"&&((i==null?void 0:i.type)==="mousemove"||(i==null?void 0:i.type)==="mouseenter")),t.$$.dirty[0]&352354304&&h==="hover"&&q&&(f&&i&&(i.layerType==="deckgl"?(e(10,_=i.coordinate),e(4,g=i.object?[i.object]:null)):(e(10,_=i.lngLat),e(4,g=i.features??[]))),e(0,m=(f||Y)??!1)),t.$$.dirty[0]&12582914&&(D?c.setDOMContent(D):F&&c.setHTML(F)),t.$$.dirty[0]&8389632&&_&&c.setLngLat(_),t.$$.dirty[0]&41943045&&u){let l=c.isOpen();m&&!l?(c.addTo(u),y==="opening"&&e(25,y="justOpened")):!m&&l&&c.remove()}},[m,D,u,s,g,N,r,q,$,I,_,O,k,v,E,h,L,H,S,w,A,W,F,c,Y,y,f,o,i,d,T,Le,Ce]}class Ve extends R{constructor(n){super(),U(this,n,Ke,Je,V,{closeButton:11,closeOnClickOutside:12,closeOnClickInside:13,closeOnMove:14,openOn:15,openIfTopMost:16,focusAfterOpen:17,anchor:18,offset:19,popupClass:20,maxWidth:21,lngLat:10,html:22,open:0},null,[-1,-1])}}export{Re as F,Ve as P,Ue as a};
