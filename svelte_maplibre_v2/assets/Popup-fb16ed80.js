import{S as x,i as $,s as ee,$ as _e,j as w,t as g,as as te,n as d,at as ne,o as D,b6 as pe,b7 as ge,q,r as he,aV as b,aX as Oe,e as oe,aL as se,aM as fe,aN as le,aO as ue,b as de,g as ke,m as be,p as Le,h as Ce}from"./index-6aa6f154.js";const ye=l=>({features:l[0]&16,data:l[0]&16,map:l[0]&4,close:l[0]&1}),U=l=>{var f;return{features:l[4],data:(f=l[4])==null?void 0:f[0],map:l[2],close:l[29]}};function Y(l){let f,e,t=(l[4]||l[3]instanceof b.Marker)&&Z(l);return{c(){f=oe("div"),t&&t.c()},m(o,s){w(o,f,s),t&&t.m(f,null),l[30](f),e=!0},p(o,s){o[4]||o[3]instanceof b.Marker?t?(t.p(o,s),s[0]&24&&g(t,1)):(t=Z(o),t.c(),g(t,1),t.m(f,null)):t&&(te(),d(t,1,1,()=>{t=null}),ne())},i(o){e||(g(t),e=!0)},o(o){d(t),e=!1},d(o){o&&D(f),t&&t.d(),l[30](null)}}}function Z(l){let f;const e=l[28].default,t=se(e,l,l[27],U);return{c(){t&&t.c()},m(o,s){t&&t.m(o,s),f=!0},p(o,s){t&&t.p&&(!f||s[0]&134217749)&&fe(t,e,o,o[27],f?ue(e,o[27],s,ye):le(o[27]),U)},i(o){f||(g(t,o),f=!0)},o(o){d(t,o),f=!1},d(o){t&&t.d(o)}}}function Me(l){let f,e,t=l[8].default&&Y(l);return{c(){t&&t.c(),f=_e()},m(o,s){t&&t.m(o,s),w(o,f,s),e=!0},p(o,s){o[8].default?t?(t.p(o,s),s[0]&256&&g(t,1)):(t=Y(o),t.c(),g(t,1),t.m(f.parentNode,f)):t&&(te(),d(t,1,1,()=>{t=null}),ne())},i(o){e||(g(t),e=!0)},o(o){d(t),e=!1},d(o){o&&D(f),t&&t.d(o)}}}function Pe(l,f,e){let t,o,s,u,c,{$$slots:V={},$$scope:X}=f;const ce=pe(V);let{closeButton:j=void 0}=f,{closeOnClickOutside:C=!0}=f,{closeOnClickInside:y=!1}=f,{closeOnMove:T=!1}=f,{openOn:a="click"}=f,{focusAfterOpen:B=!0}=f,{anchor:S=void 0}=f,{offset:A=void 0}=f,{popupClass:I=void 0}=f,{maxWidth:W=void 0}=f,{lngLat:m=void 0}=f,{html:M=void 0}=f,{open:i=!1}=f;const{map:z,popupTarget:F,layerEvent:P}=ge();q(l,z,n=>e(2,s=n)),q(l,F,n=>e(3,c=n)),q(l,P,n=>e(26,u=n));const re=["click","dblclick","contextmenu"];let r,E=!1,h;function ie(){if(!r)return;let n=r.getElement();!n||n===h||(h=n,a==="hover"&&(h.style.pointerEvents="none"),h.addEventListener("mouseenter",()=>{e(22,E=!0)},{passive:!0}),h.addEventListener("mouseleave",()=>{e(22,E=!1)},{passive:!0}),h.addEventListener("click",()=>{y&&e(0,i=!1)},{passive:!0}))}he(()=>{if(s)return s.on("click",R),typeof c=="string"&&(s.on("click",c,O),s.on("dblclick",c,O),s.on("contextmenu",c,O),s.on("mousemove",c,Q),s.on("mouseleave",c,K),s.on("touchstart",c,G),s.on("touchend",c,J)),()=>{s!=null&&s.loaded()&&(r==null||r.remove(),s.off("click",R),c instanceof b.Marker?c.getPopup()===r&&c.setPopup(void 0):typeof c=="string"&&(s.off("click",c,O),s.off("dblclick",c,O),s.off("contextmenu",c,O),s.off("mousemove",c,Q),s.off("mouseleave",c,K),s.off("touchstart",c,G),s.off("touchend",c,J)))}});let _=null,p="normal";function O(n){n.type===a&&("layerType"in n?n.layerType==="deckgl"?(e(9,m=n.coordinate),e(4,_=n.object?[n.object]:null)):(e(9,m=n.lngLat),e(4,_=n.features??[])):(e(9,m=n.lngLat),e(4,_=n.features??[])),setTimeout(()=>e(0,i=!0)))}let k=null;function G(n){k=n.point}function J(n){if(!k||a!=="hover")return;let H=k.dist(n.point);k=null,H<3&&(e(9,m=n.lngLat),e(4,_=n.features??[]),r.isOpen()?e(23,p="justOpened"):(e(23,p="opening"),e(0,i=!0)))}function K(n){a!=="hover"||k||p!=="normal"||(e(0,i=!1),e(4,_=null))}function Q(n){a!=="hover"||k||p!=="normal"||(e(0,i=!0),e(4,_=n.features??[]),e(9,m=n.lngLat))}function R(n){if(p==="justOpened"){e(23,p="normal");return}if(!C)return;let H=[h,c instanceof b.Marker?c==null?void 0:c.getElement():null];i&&r.isOpen()&&!H.some(N=>N==null?void 0:N.contains(n.originalEvent.target))&&e(0,i=!1)}let L;const ae=()=>e(0,i=!1);function me(n){de[n?"unshift":"push"](()=>{L=n,e(1,L)})}return l.$$set=n=>{"closeButton"in n&&e(10,j=n.closeButton),"closeOnClickOutside"in n&&e(11,C=n.closeOnClickOutside),"closeOnClickInside"in n&&e(12,y=n.closeOnClickInside),"closeOnMove"in n&&e(13,T=n.closeOnMove),"openOn"in n&&e(14,a=n.openOn),"focusAfterOpen"in n&&e(15,B=n.focusAfterOpen),"anchor"in n&&e(16,S=n.anchor),"offset"in n&&e(17,A=n.offset),"popupClass"in n&&e(18,I=n.popupClass),"maxWidth"in n&&e(19,W=n.maxWidth),"lngLat"in n&&e(9,m=n.lngLat),"html"in n&&e(20,M=n.html),"open"in n&&e(0,i=n.open),"$$scope"in n&&e(27,X=n.$$scope)},l.$$.update=()=>{if(l.$$.dirty[0]&7168&&e(25,t=j??(!C&&!y)),l.$$.dirty[0]&36675584&&(r||(e(21,r=new b.Popup({closeButton:t,closeOnClick:!1,closeOnMove:T,focusAfterOpen:B,maxWidth:W,className:I,anchor:S,offset:A})),h=r.getElement(),r.on("open",()=>{e(0,i=!0),ie()}),r.on("close",n=>{e(0,i=!1)}))),l.$$.dirty[0]&2113544&&r&&c instanceof b.Marker&&(a==="click"?c.setPopup(r):c.getPopup()===r&&c.setPopup(void 0)),l.$$.dirty[0]&67125248&&re.includes(a)&&(u==null?void 0:u.type)===a&&(O(u),Oe(P,u=null,u)),l.$$.dirty[0]&67125248&&e(24,o=a==="hover"&&((u==null?void 0:u.type)==="mousemove"||(u==null?void 0:u.type)==="mouseenter")),l.$$.dirty[0]&88096768&&a==="hover"&&P&&(o&&u&&(u.layerType==="deckgl"?(e(9,m=u.coordinate),e(4,_=u.object?[u.object]:null)):(e(9,m=u.lngLat),e(4,_=u.features??[]))),e(0,i=(o||E)??!1)),l.$$.dirty[0]&3145730&&(L?r.setDOMContent(L):M&&r.setHTML(M)),l.$$.dirty[0]&2097664&&m&&r.setLngLat(m),l.$$.dirty[0]&10485765&&s){let n=r.isOpen();i&&!n?(r.addTo(s),p==="opening"&&e(23,p="justOpened")):!i&&n&&r.remove()}},[i,L,s,c,_,z,F,P,ce,m,j,C,y,T,a,B,S,A,I,W,M,r,E,p,o,t,u,X,V,ae,me]}class Ee extends x{constructor(f){super(),$(this,f,Pe,Me,ee,{closeButton:10,closeOnClickOutside:11,closeOnClickInside:12,closeOnMove:13,openOn:14,focusAfterOpen:15,anchor:16,offset:17,popupClass:18,maxWidth:19,lngLat:9,html:20,open:0},null,[-1,-1])}}const je=l=>({props:l&8}),v=l=>({props:Se(l[3])});function Te(l){let f,e;const t=l[1].default,o=se(t,l,l[2],v);return{c(){f=oe("div"),o&&o.c(),Ce(f,"class","govuk-prose")},m(s,u){w(s,f,u),o&&o.m(f,null),e=!0},p(s,u){o&&o.p&&(!e||u&12)&&fe(o,t,s,s[2],e?ue(t,s[2],u,je):le(s[2]),v)},i(s){e||(g(o,s),e=!0)},o(s){d(o,s),e=!1},d(s){s&&D(f),o&&o.d(s)}}}function Be(l){let f,e;return f=new Ee({props:{openOn:l[0],$$slots:{default:[Te,({features:t})=>({3:t}),({features:t})=>t?8:0]},$$scope:{ctx:l}}}),{c(){ke(f.$$.fragment)},m(t,o){be(f,t,o),e=!0},p(t,[o]){const s={};o&1&&(s.openOn=t[0]),o&12&&(s.$$scope={dirty:o,ctx:t}),f.$set(s)},i(t){e||(g(f.$$.fragment,t),e=!0)},o(t){d(f.$$.fragment,t),e=!1},d(t){Le(f,t)}}}function Se(l){return l?l[0].properties??{}:{}}function Ae(l,f,e){let{$$slots:t={},$$scope:o}=f,{openOn:s="hover"}=f;return l.$$set=u=>{"openOn"in u&&e(0,s=u.openOn),"$$scope"in u&&e(2,o=u.$$scope)},[s,t,o]}class We extends x{constructor(f){super(),$(this,f,Ae,Be,ee,{openOn:0})}}export{We as P};
