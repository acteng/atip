import{S as M,i as R,s as z,aG as E,e as p,g as b,h as y,j as g,aH as I,aI as L,aJ as B,t as h,l as w,o as C,d as S,I as ue,v as G,az as se,aX as ne,aY as ce,F as fe,f as H,m as O,p as q,G as j,a1 as F,aA as _e,aZ as A,H as de,a_ as me,u as T,r as D,E as ae,a$ as J,x as N,n as $,b0 as be,q as ge,z as P,A as ie,a4 as he,b as oe,L as W,ao as Z,R as pe,c as ke,k as ve,aN as we,b1 as ye,a as re}from"./layer_helper_utils-ac09d4f6.js";function Ce(a){let e,t,l;const s=a[3].default,n=E(s,a,a[2],null);return{c(){e=p("fieldset"),t=p("div"),n&&n.c(),b(t,"class",a[0]),b(t,"data-module","govuk-checkboxes"),b(e,"class","govuk-fieldset")},m(o,i){y(o,e,i),g(e,t),n&&n.m(t,null),l=!0},p(o,[i]){n&&n.p&&(!l||i&4)&&I(n,s,o,o[2],l?B(s,o[2],i,null):L(o[2]),null)},i(o){l||(h(n,o),l=!0)},o(o){w(n,o),l=!1},d(o){o&&C(e),n&&n.d(o)}}}function Se(a,e,t){let{$$slots:l={},$$scope:s}=e,{small:n=!1}=e,o=n?"govuk-checkboxes--small":"govuk-checkboxes";return a.$$set=i=>{"small"in i&&t(1,n=i.small),"$$scope"in i&&t(2,s=i.$$scope)},[o,n,s,l]}class Ke extends M{constructor(e){super(),R(this,e,Se,Ce,z,{small:1})}}const Ve=a=>({}),U=a=>({});function Ee(a){let e,t,l,s,n,o,i,r,c;const u=a[5].default,f=E(u,a,a[4],null),_=a[5].right,d=E(_,a,a[4],U);return{c(){e=p("div"),t=p("input"),l=S(),s=p("label"),f&&f.c(),n=S(),o=p("span"),d&&d.c(),b(t,"type","checkbox"),b(t,"class","govuk-checkboxes__input"),b(t,"id",a[1]),b(s,"class","govuk-label govuk-checkboxes__label"),b(s,"for",a[1]),b(s,"title",a[2]),ue(o,"float","right"),b(e,"class","govuk-checkboxes__item"),b(e,"style",a[3])},m(m,k){y(m,e,k),g(e,t),t.checked=a[0],g(e,l),g(e,s),f&&f.m(s,null),g(e,n),g(e,o),d&&d.m(o,null),i=!0,r||(c=[G(t,"change",a[7]),G(t,"change",a[6])],r=!0)},p(m,[k]){(!i||k&2)&&b(t,"id",m[1]),k&1&&(t.checked=m[0]),f&&f.p&&(!i||k&16)&&I(f,u,m,m[4],i?B(u,m[4],k,null):L(m[4]),null),(!i||k&2)&&b(s,"for",m[1]),(!i||k&4)&&b(s,"title",m[2]),d&&d.p&&(!i||k&16)&&I(d,_,m,m[4],i?B(_,m[4],k,Ve):L(m[4]),U)},i(m){i||(h(f,m),h(d,m),i=!0)},o(m){w(f,m),w(d,m),i=!1},d(m){m&&C(e),f&&f.d(m),d&&d.d(m),r=!1,se(c)}}}function Ie(a,e,t){let{$$slots:l={},$$scope:s}=e;const n=ce(l);let{id:o}=e,{checked:i}=e,{hint:r=null}=e,u=n.right!==void 0?"float: none":"";function f(d){ne.call(this,a,d)}function _(){i=this.checked,t(0,i)}return a.$$set=d=>{"id"in d&&t(1,o=d.id),"checked"in d&&t(0,i=d.checked),"hint"in d&&t(2,r=d.hint),"$$scope"in d&&t(4,s=d.$$scope)},[i,o,r,u,s,l,f,_]}class Qe extends M{constructor(e){super(),R(this,e,Ie,Ee,z,{id:1,checked:0,hint:2})}}function X(a,e,t){const l=a.slice();return l[8]=e[t][0],l[9]=e[t][1],l}function Y(a){let e;return{c(){e=p("option"),e.__value="",T(e,e.__value)},m(t,l){y(t,e,l)},d(t){t&&C(e)}}}function K(a){let e,t=a[9]+"",l,s;return{c(){e=p("option"),l=D(t),e.__value=s=a[8],T(e,e.__value)},m(n,o){y(n,e,o),g(e,l)},p(n,o){o&8&&t!==(t=n[9]+"")&&ae(l,t),o&8&&s!==(s=n[8])&&(e.__value=s,T(e,e.__value))},d(n){n&&C(e)}}}function Le(a){let e,t,l,s,n=a[4]&&Y(),o=j(a[3]),i=[];for(let r=0;r<o.length;r+=1)i[r]=K(X(a,o,r));return{c(){e=p("select"),n&&n.c(),t=F();for(let r=0;r<i.length;r+=1)i[r].c();b(e,"class","govuk-select"),b(e,"id",a[2]),e.disabled=a[5],a[0]===void 0&&_e(()=>a[7].call(e))},m(r,c){y(r,e,c),n&&n.m(e,null),g(e,t);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(e,null);A(e,a[0],!0),l||(s=[G(e,"change",a[7]),G(e,"change",a[6])],l=!0)},p(r,c){if(r[4]?n||(n=Y(),n.c(),n.m(e,t)):n&&(n.d(1),n=null),c&8){o=j(r[3]);let u;for(u=0;u<o.length;u+=1){const f=X(r,o,u);i[u]?i[u].p(f,c):(i[u]=K(f),i[u].c(),i[u].m(e,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=o.length}c&4&&b(e,"id",r[2]),c&32&&(e.disabled=r[5]),c&9&&A(e,r[0])},d(r){r&&C(e),n&&n.d(),de(i,r),l=!1,se(s)}}}function Be(a){let e,t;return e=new fe({props:{label:a[1],id:a[2],$$slots:{default:[Le]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},m(l,s){O(e,l,s),t=!0},p(l,[s]){const n={};s&2&&(n.label=l[1]),s&4&&(n.id=l[2]),s&4157&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function Me(a,e,t){let{label:l}=e,{id:s}=e,{choices:n}=e,{emptyOption:o=!1}=e,{disabled:i=!1}=e,{value:r}=e;function c(f){ne.call(this,a,f)}function u(){r=me(this),t(0,r),t(3,n)}return a.$$set=f=>{"label"in f&&t(1,l=f.label),"id"in f&&t(2,s=f.id),"choices"in f&&t(3,n=f.choices),"emptyOption"in f&&t(4,o=f.emptyOption),"disabled"in f&&t(5,i=f.disabled),"value"in f&&t(0,r=f.value)},[r,l,s,n,o,i,c,u]}class xe extends M{constructor(e){super(),R(this,e,Me,Be,z,{label:1,id:2,choices:3,emptyOption:4,disabled:5,value:0})}}function Re(a){let e,t,l,s,n,o,i;const r=a[3].default,c=E(r,a,a[2],null);return{c(){e=p("details"),t=p("summary"),l=p("span"),s=D(a[0]),n=S(),o=p("div"),c&&c.c(),b(l,"class","govuk-details__summary-text"),b(t,"class","govuk-details__summary"),b(o,"class","govuk-details__text"),e.open=a[1],b(e,"class","govuk-details"),b(e,"data-module","govuk-details")},m(u,f){y(u,e,f),g(e,t),g(t,l),g(l,s),g(e,n),g(e,o),c&&c.m(o,null),i=!0},p(u,[f]){(!i||f&1)&&ae(s,u[0]),c&&c.p&&(!i||f&4)&&I(c,r,u,u[2],i?B(r,u[2],f,null):L(u[2]),null),(!i||f&2)&&(e.open=u[1])},i(u){i||(h(c,u),i=!0)},o(u){w(c,u),i=!1},d(u){u&&C(e),c&&c.d(u)}}}function ze(a,e,t){let{$$slots:l={},$$scope:s}=e,{label:n}=e,{open:o=!1}=e;return a.$$set=i=>{"label"in i&&t(0,n=i.label),"open"in i&&t(1,o=i.open),"$$scope"in i&&t(2,s=i.$$scope)},[n,o,s,l]}class He extends M{constructor(e){super(),R(this,e,ze,Re,z,{label:0,open:1})}}const Oe=a=>({}),Q=a=>({}),qe=a=>({}),x=a=>({});function De(a){let e,t,l,s,n,o,i,r,c,u,f;const _=a[3].sidebar,d=E(_,a,a[2],x),m=a[3].main,k=E(m,a,a[2],Q);return{c(){e=p("div"),t=p("aside"),l=p("div"),d&&d.c(),s=S(),n=p("button"),n.textContent="→",i=S(),r=p("main"),k&&k.c(),b(l,"class","sidebar-content content-container svelte-ect12w"),b(n,"type","button"),b(n,"class","sidebar-toggle rounded-rect svelte-ect12w"),b(t,"class",o=J(a[0]?"":"collapsed")+" svelte-ect12w"),b(r,"class","svelte-ect12w"),b(e,"class","overall-layout svelte-ect12w")},m(v,V){y(v,e,V),g(e,t),g(t,l),d&&d.m(l,null),g(t,s),g(t,n),g(e,i),g(e,r),k&&k.m(r,null),c=!0,u||(f=G(n,"click",a[1]),u=!0)},p(v,[V]){d&&d.p&&(!c||V&4)&&I(d,_,v,v[2],c?B(_,v[2],V,qe):L(v[2]),x),(!c||V&1&&o!==(o=J(v[0]?"":"collapsed")+" svelte-ect12w"))&&b(t,"class",o),k&&k.p&&(!c||V&4)&&I(k,m,v,v[2],c?B(m,v[2],V,Oe):L(v[2]),Q)},i(v){c||(h(d,v),h(k,v),c=!0)},o(v){w(d,v),w(k,v),c=!1},d(v){v&&C(e),d&&d.d(v),k&&k.d(v),u=!1,f()}}}function Ge(a,e,t){let{$$slots:l={},$$scope:s}=e,n=!0;function o(){t(0,n=!n)}return a.$$set=i=>{"$$scope"in i&&t(2,s=i.$$scope)},[n,o,s,l]}class et extends M{constructor(e){super(),R(this,e,Ge,De,z,{})}}function ee(a){let e;const t=a[5].default,l=E(t,a,a[4],null);return{c(){l&&l.c()},m(s,n){l&&l.m(s,n),e=!0},p(s,n){l&&l.p&&(!e||n&16)&&I(l,t,s,s[4],e?B(t,s[4],n,null):L(s[4]),null)},i(s){e||(h(l,s),e=!0)},o(s){w(l,s),e=!1},d(s){l&&l.d(s)}}}function Ne(a){let e,t,l=a[1]&&ee(a);return{c(){e=p("div"),l&&l.c(),b(e,"class","map svelte-12dpf1u")},m(s,n){y(s,e,n),l&&l.m(e,null),a[6](e),t=!0},p(s,[n]){s[1]?l?(l.p(s,n),n&2&&h(l,1)):(l=ee(s),l.c(),h(l,1),l.m(e,null)):l&&(N(),w(l,1,1,()=>{l=null}),$())},i(s){t||(h(l),t=!0)},o(s){w(l),t=!1},d(s){s&&C(e),l&&l.d(),a[6](null)}}}function $e(a,e,t){let{$$slots:l={},$$scope:s}=e,{style:n}=e,{startBounds:o=null}=e,i,r,c=!1,u=!window.location.hash;be("setCamera",u),ge(()=>{i=new P.Map({container:r,style:`https://api.maptiler.com/maps/${n}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),i.addControl(new P.ScaleControl({})),i.addControl(new P.NavigationControl({visualizePitch:!0}),"bottom-right"),i.on("load",()=>{t(1,c=!0),u&&o&&i.fitBounds(o,{animate:!1}),ie.set(i)}),new ResizeObserver(()=>{i.resize()}).observe(r)}),he(()=>{i.remove()});function f(_){oe[_?"unshift":"push"](()=>{r=_,t(0,r)})}return a.$$set=_=>{"style"in _&&t(2,n=_.style),"startBounds"in _&&t(3,o=_.startBounds),"$$scope"in _&&t(4,s=_.$$scope)},[r,c,n,o,s,l,f]}class tt extends M{constructor(e){super(),R(this,e,$e,Ne,z,{style:2,startBounds:3})}}const Pe="/atip/critical_entry_mvp/assets/camera_cursor-824d29b6.svg",Te={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue"},lt=10,st=10;function te(a){let e,t,l,s;const n=[je,Fe],o=[];function i(r,c){return r[0]?0:1}return e=i(a),t=o[e]=n[e](a),{c(){t.c(),l=F()},m(r,c){o[e].m(r,c),y(r,l,c),s=!0},p(r,c){let u=e;e=i(r),e===u?o[e].p(r,c):(N(),w(o[u],1,1,()=>{o[u]=null}),$(),t=o[e],t?t.p(r,c):(t=o[e]=n[e](r),t.c()),h(t,1),t.m(l.parentNode,l))},i(r){s||(h(t),s=!0)},o(r){w(t),s=!1},d(r){r&&C(l),o[e].d(r)}}}function Fe(a){let e,t;return e=new re({props:{$$slots:{default:[Ae]},$$scope:{ctx:a}}}),e.$on("click",a[3]),{c(){H(e.$$.fragment)},m(l,s){O(e,l,s),t=!0},p(l,s){const n={};s&512&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function je(a){let e,t;return e=new re({props:{$$slots:{default:[Je]},$$scope:{ctx:a}}}),e.$on("click",a[2]),{c(){H(e.$$.fragment)},m(l,s){O(e,l,s),t=!0},p(l,s){const n={};s&512&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function Ae(a){let e;return{c(){e=D("Disable Street View")},m(t,l){y(t,e,l)},d(t){t&&C(e)}}}function Je(a){let e;return{c(){e=D("Enable Street View")},m(t,l){y(t,e,l)},d(t){t&&C(e)}}}function le(a){let e,t,l,s,n;function o(r){a[6](r)}let i={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return a[4].streetViewImagery!==void 0&&(i.value=a[4].streetViewImagery),e=new pe({props:i}),oe.push(()=>ke(e,"value",o)),s=new He({props:{label:"Help",$$slots:{default:[Ze]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment),l=S(),H(s.$$.fragment)},m(r,c){O(e,r,c),y(r,l,c),O(s,r,c),n=!0},p(r,c){const u={};!t&&c&16&&(t=!0,u.value=r[4].streetViewImagery,ve(()=>t=!1)),e.$set(u);const f={};c&512&&(f.$$scope={dirty:c,ctx:r}),s.$set(f)},i(r){n||(h(e.$$.fragment,r),h(s.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),w(s.$$.fragment,r),n=!1},d(r){r&&C(l),q(e,r),q(s,r)}}}function We(a){let e;return{c(){e=D("Luc Chaissac")},m(t,l){y(t,e,l)},d(t){t&&C(e)}}}function Ze(a){let e,t,l,s,n,o,i,r,c;return r=new we({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){e=p("ul"),t=p("li"),t.innerHTML=`<b>Click</b>
        on the map to open a new tab with a 3rd-party imagery provider`,l=S(),s=p("li"),s.innerHTML=`Press <b>Escape</b>
        to exit this mode`,n=S(),o=p("li"),i=D("Cursor by "),H(r.$$.fragment)},m(u,f){y(u,e,f),g(e,t),g(e,l),g(e,s),g(e,n),g(e,o),g(o,i),O(r,o,null),c=!0},p(u,f){const _={};f&512&&(_.$$scope={dirty:f,ctx:u}),r.$set(_)},i(u){c||(h(r.$$.fragment,u),c=!0)},o(u){w(r.$$.fragment,u),c=!1},d(u){u&&C(e),q(r)}}}function Ue(a){let e,t,l,s=a[1]&&te(a),n=!a[0]&&le(a);return{c(){s&&s.c(),e=S(),n&&n.c(),t=F()},m(o,i){s&&s.m(o,i),y(o,e,i),n&&n.m(o,i),y(o,t,i),l=!0},p(o,[i]){o[1]?s?(s.p(o,i),i&2&&h(s,1)):(s=te(o),s.c(),h(s,1),s.m(e.parentNode,e)):s&&(N(),w(s,1,1,()=>{s=null}),$()),o[0]?n&&(N(),w(n,1,1,()=>{n=null}),$()):n?(n.p(o,i),i&1&&h(n,1)):(n=le(o),n.c(),h(n,1),n.m(t.parentNode,t))},i(o){l||(h(s),h(n),l=!0)},o(o){w(s),w(n),l=!1},d(o){o&&(C(e),C(t)),s&&s.d(o),n&&n.d(o)}}}function Xe(a,e,t){let l,s;W(a,ie,_=>t(8,l=_)),W(a,Z,_=>t(4,s=_));let{displayEnableButton:n}=e,{isInactive:o}=e,i=[];function r(_){if(o)return;let d=_.lngLat.lng,m=_.lngLat.lat;s.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${m},${d}&cbp=11,0,0,0,0`,"_blank"):s.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${m}~${d}&style=x`,"_blank")}function c(){t(0,o=!1),l.on("click",r),l.getCanvas().style.cursor=`url(${Pe}), auto`,i=ye();for(let _ of i)_.setProperty(l,"line-color",Te.streetview)}function u(){t(0,o=!0),l.off("click",r),l.getCanvas().style.cursor="inherit";for(let _ of i)_.returnToDefaultPaintValues(l)}function f(_){a.$$.not_equal(s.streetViewImagery,_)&&(s.streetViewImagery=_,Z.set(s))}return a.$$set=_=>{"displayEnableButton"in _&&t(1,n=_.displayEnableButton),"isInactive"in _&&t(0,o=_.isInactive)},[o,n,c,u,s,r,f]}class nt extends M{constructor(e){super(),R(this,e,Xe,Ue,z,{displayEnableButton:1,isInactive:0,handleMapClickEvent:5,enableStreetView:2,disableStreetView:3})}get handleMapClickEvent(){return this.$$.ctx[5]}get enableStreetView(){return this.$$.ctx[2]}get disableStreetView(){return this.$$.ctx[3]}}export{He as C,et as L,tt as M,nt as S,lt as a,Ke as b,Te as c,Qe as d,xe as e,st as l};
