import{S as ne,i as oe,s as se,$ as Oe,j as K,t as g,ar as fe,n as k,as as le,o as U,b5 as ke,b6 as de,q as I,r as be,aU as b,aW as Le,e as ue,aK as ce,aL as re,aM as ie,aN as ae,b as Me,g as Ce,m as ye,p as Te,h as Pe}from"./index-be480613.js";const Ee=l=>({features:l[0]&16,data:l[0]&16,map:l[0]&4,close:l[0]&1}),x=l=>{var f;return{features:l[4],data:(f=l[4])==null?void 0:f[0],map:l[2],close:l[31]}};function $(l){let f,e,t=(l[4]||l[3]instanceof b.Marker)&&ee(l);return{c(){f=ue("div"),t&&t.c()},m(o,s){K(o,f,s),t&&t.m(f,null),l[32](f),e=!0},p(o,s){o[4]||o[3]instanceof b.Marker?t?(t.p(o,s),s[0]&24&&g(t,1)):(t=ee(o),t.c(),g(t,1),t.m(f,null)):t&&(fe(),k(t,1,1,()=>{t=null}),le())},i(o){e||(g(t),e=!0)},o(o){k(t),e=!1},d(o){o&&U(f),t&&t.d(),l[32](null)}}}function ee(l){let f;const e=l[30].default,t=ce(e,l,l[29],x);return{c(){t&&t.c()},m(o,s){t&&t.m(o,s),f=!0},p(o,s){t&&t.p&&(!f||s[0]&536870933)&&re(t,e,o,o[29],f?ae(e,o[29],s,Ee):ie(o[29]),x)},i(o){f||(g(t,o),f=!0)},o(o){k(t,o),f=!1},d(o){t&&t.d(o)}}}function Ie(l){let f,e,t=l[9].default&&$(l);return{c(){t&&t.c(),f=Oe()},m(o,s){t&&t.m(o,s),K(o,f,s),e=!0},p(o,s){o[9].default?t?(t.p(o,s),s[0]&512&&g(t,1)):(t=$(o),t.c(),g(t,1),t.m(f.parentNode,f)):t&&(fe(),k(t,1,1,()=>{t=null}),le())},i(o){e||(g(t),e=!0)},o(o){k(t),e=!1},d(o){o&&U(f),t&&t.d(o)}}}function je(l,f,e){let t,o,s,u,c,j,{$$slots:z={},$$scope:F}=f;const me=ke(z);let{closeButton:B=void 0}=f,{closeOnClickOutside:M=!0}=f,{closeOnClickInside:C=!1}=f,{closeOnMove:S=!1}=f,{openOn:a="click"}=f,{openIfTopMost:y=!0}=f,{focusAfterOpen:W=!0}=f,{anchor:A=void 0}=f,{offset:H=void 0}=f,{popupClass:N=void 0}=f,{maxWidth:q=void 0}=f,{lngLat:m=void 0}=f,{html:T=void 0}=f,{open:i=!1}=f;const{map:G,popupTarget:J,layerEvent:P,layer:Q,eventTopMost:R}=de();I(l,G,n=>e(2,s=n)),I(l,J,n=>e(3,c=n)),I(l,P,n=>e(28,u=n)),I(l,Q,n=>e(35,j=n));const _e=["click","dblclick","contextmenu"];let r,E=!1,h;function pe(){if(!r)return;let n=r.getElement();!n||n===h||(h=n,a==="hover"&&(h.style.pointerEvents="none"),h.addEventListener("mouseenter",()=>{e(24,E=!0)},{passive:!0}),h.addEventListener("mouseleave",()=>{e(24,E=!1)},{passive:!0}),h.addEventListener("click",()=>{C&&e(0,i=!1)},{passive:!0}))}be(()=>{if(s)return s.on("click",v),typeof c=="string"&&(s.on("click",c,O),s.on("dblclick",c,O),s.on("contextmenu",c,O),s.on("mousemove",c,Z),s.on("mouseleave",c,Y),s.on("touchstart",c,V),s.on("touchend",c,X)),()=>{s!=null&&s.loaded()&&(r==null||r.remove(),s.off("click",v),c instanceof b.Marker?c.getPopup()===r&&c.setPopup(void 0):typeof c=="string"&&(s.off("click",c,O),s.off("dblclick",c,O),s.off("contextmenu",c,O),s.off("mousemove",c,Z),s.off("mouseleave",c,Y),s.off("touchstart",c,V),s.off("touchend",c,X)))}});let _=null,p="normal";function O(n){n.type===a&&(y&&R(n)!==j||("layerType"in n?n.layerType==="deckgl"?(e(10,m=n.coordinate),e(4,_=n.object?[n.object]:null)):(e(10,m=n.lngLat),e(4,_=n.features??[])):(e(10,m=n.lngLat),e(4,_=n.features??[])),setTimeout(()=>e(0,i=!0))))}let d=null;function V(n){d=n.point}function X(n){if(!d||a!=="hover")return;let w=d.dist(n.point);d=null,w<3&&(e(10,m=n.lngLat),e(4,_=n.features??[]),r.isOpen()?e(25,p="justOpened"):(e(25,p="opening"),e(0,i=!0)))}function Y(n){a!=="hover"||d||p!=="normal"||(e(0,i=!1),e(4,_=null))}function Z(n){if(!(a!=="hover"||d||p!=="normal")){if(y&&R(n)!==j){e(0,i=!1),e(4,_=null);return}e(0,i=!0),e(4,_=n.features??[]),e(10,m=n.lngLat)}}function v(n){if(p==="justOpened"){e(25,p="normal");return}if(!M)return;let w=[h,c instanceof b.Marker?c==null?void 0:c.getElement():null];i&&r.isOpen()&&!w.some(D=>D==null?void 0:D.contains(n.originalEvent.target))&&e(0,i=!1)}let L;const ge=()=>e(0,i=!1);function he(n){Me[n?"unshift":"push"](()=>{L=n,e(1,L)})}return l.$$set=n=>{"closeButton"in n&&e(11,B=n.closeButton),"closeOnClickOutside"in n&&e(12,M=n.closeOnClickOutside),"closeOnClickInside"in n&&e(13,C=n.closeOnClickInside),"closeOnMove"in n&&e(14,S=n.closeOnMove),"openOn"in n&&e(15,a=n.openOn),"openIfTopMost"in n&&e(16,y=n.openIfTopMost),"focusAfterOpen"in n&&e(17,W=n.focusAfterOpen),"anchor"in n&&e(18,A=n.anchor),"offset"in n&&e(19,H=n.offset),"popupClass"in n&&e(20,N=n.popupClass),"maxWidth"in n&&e(21,q=n.maxWidth),"lngLat"in n&&e(10,m=n.lngLat),"html"in n&&e(22,T=n.html),"open"in n&&e(0,i=n.open),"$$scope"in n&&e(29,F=n.$$scope)},l.$$.update=()=>{if(l.$$.dirty[0]&14336&&e(27,t=B??(!M&&!C)),l.$$.dirty[0]&146685952&&(r||(e(23,r=new b.Popup({closeButton:t,closeOnClick:!1,closeOnMove:S,focusAfterOpen:W,maxWidth:q,className:N,anchor:A,offset:H})),h=r.getElement(),r.on("open",()=>{e(0,i=!0),pe()}),r.on("close",n=>{e(0,i=!1)}))),l.$$.dirty[0]&8421384&&r&&c instanceof b.Marker&&(a==="click"?c.setPopup(r):c.getPopup()===r&&c.setPopup(void 0)),l.$$.dirty[0]&268468224&&_e.includes(a)&&(u==null?void 0:u.type)===a&&(O(u),Le(P,u=null,u)),l.$$.dirty[0]&268468224&&e(26,o=a==="hover"&&((u==null?void 0:u.type)==="mousemove"||(u==null?void 0:u.type)==="mouseenter")),l.$$.dirty[0]&352354304&&a==="hover"&&P&&(o&&u&&(u.layerType==="deckgl"?(e(10,m=u.coordinate),e(4,_=u.object?[u.object]:null)):(e(10,m=u.lngLat),e(4,_=u.features??[]))),e(0,i=(o||E)??!1)),l.$$.dirty[0]&12582914&&(L?r.setDOMContent(L):T&&r.setHTML(T)),l.$$.dirty[0]&8389632&&m&&r.setLngLat(m),l.$$.dirty[0]&41943045&&s){let n=r.isOpen();i&&!n?(r.addTo(s),p==="opening"&&e(25,p="justOpened")):!i&&n&&r.remove()}},[i,L,s,c,_,G,J,P,Q,me,m,B,M,C,S,a,y,W,A,H,N,q,T,r,E,p,o,t,u,F,z,ge,he]}class Be extends ne{constructor(f){super(),oe(this,f,je,Ie,se,{closeButton:11,closeOnClickOutside:12,closeOnClickInside:13,closeOnMove:14,openOn:15,openIfTopMost:16,focusAfterOpen:17,anchor:18,offset:19,popupClass:20,maxWidth:21,lngLat:10,html:22,open:0},null,[-1,-1])}}const Se=l=>({props:l&8}),te=l=>({props:He(l[3])});function We(l){let f,e;const t=l[1].default,o=ce(t,l,l[2],te);return{c(){f=ue("div"),o&&o.c(),Pe(f,"class","govuk-prose")},m(s,u){K(s,f,u),o&&o.m(f,null),e=!0},p(s,u){o&&o.p&&(!e||u&12)&&re(o,t,s,s[2],e?ae(t,s[2],u,Se):ie(s[2]),te)},i(s){e||(g(o,s),e=!0)},o(s){k(o,s),e=!1},d(s){s&&U(f),o&&o.d(s)}}}function Ae(l){let f,e;return f=new Be({props:{openOn:l[0],openIfTopMost:!0,$$slots:{default:[We,({features:t})=>({3:t}),({features:t})=>t?8:0]},$$scope:{ctx:l}}}),{c(){Ce(f.$$.fragment)},m(t,o){ye(f,t,o),e=!0},p(t,[o]){const s={};o&1&&(s.openOn=t[0]),o&12&&(s.$$scope={dirty:o,ctx:t}),f.$set(s)},i(t){e||(g(f.$$.fragment,t),e=!0)},o(t){k(f.$$.fragment,t),e=!1},d(t){Te(f,t)}}}function He(l){return l?l[0].properties??{}:{}}function Ne(l,f,e){let{$$slots:t={},$$scope:o}=f,{openOn:s="hover"}=f;return l.$$set=u=>{"openOn"in u&&e(0,s=u.openOn),"$$scope"in u&&e(2,o=u.$$scope)},[s,t,o]}class we extends ne{constructor(f){super(),oe(this,f,Ne,Ae,se,{openOn:0})}}export{we as P};
