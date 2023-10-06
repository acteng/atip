import{S as L,i as B,s as $,aK as R,e as v,h as g,j as S,k as h,aL as W,aM as q,aN as H,t as k,n as w,o as y,d as C,ao as O,w as N,aE as se,b5 as ce,a_ as ne,F as fe,g as E,m as M,p as I,E as _e,aB as A,$ as j,aF as de,bd as K,aC as me,be as ge,v as D,u as F,B as ae,bf as be,b as ie,c as oe,l as re,q as P,aR as U,bg as z,ar as T,as as G,A as he,aq as J,R as pe,aS as ke,bh as ve,a as ue}from"./index-2f230b37.js";function we(s){let e,t,l;const a=s[3].default,i=R(a,s,s[2],null);return{c(){e=v("fieldset"),t=v("div"),i&&i.c(),g(t,"class",s[0]),g(t,"data-module","govuk-checkboxes"),g(e,"class","govuk-fieldset")},m(n,r){S(n,e,r),h(e,t),i&&i.m(t,null),l=!0},p(n,[r]){i&&i.p&&(!l||r&4)&&W(i,a,n,n[2],l?H(a,n[2],r,null):q(n[2]),null)},i(n){l||(k(i,n),l=!0)},o(n){w(i,n),l=!1},d(n){n&&y(e),i&&i.d(n)}}}function Se(s,e,t){let{$$slots:l={},$$scope:a}=e,{small:i=!1}=e,n=i?"govuk-checkboxes--small":"govuk-checkboxes";return s.$$set=r=>{"small"in r&&t(1,i=r.small),"$$scope"in r&&t(2,a=r.$$scope)},[n,i,a,l]}class Xe extends L{constructor(e){super(),B(this,e,Se,we,$,{small:1})}}const ye=s=>({}),Q=s=>({});function Ce(s){let e,t,l,a,i,n,r,o,f;const c=s[5].default,u=R(c,s,s[4],null),_=s[5].right,d=R(_,s,s[4],Q);return{c(){e=v("div"),t=v("input"),l=C(),a=v("label"),u&&u.c(),i=C(),n=v("span"),d&&d.c(),g(t,"type","checkbox"),g(t,"class","govuk-checkboxes__input"),g(t,"id",s[1]),g(a,"class","govuk-label govuk-checkboxes__label"),g(a,"for",s[1]),g(a,"title",s[2]),O(n,"float","right"),g(e,"class","govuk-checkboxes__item"),g(e,"style",s[3])},m(m,b){S(m,e,b),h(e,t),t.checked=s[0],h(e,l),h(e,a),u&&u.m(a,null),h(e,i),h(e,n),d&&d.m(n,null),r=!0,o||(f=[N(t,"change",s[7]),N(t,"change",s[6])],o=!0)},p(m,[b]){(!r||b&2)&&g(t,"id",m[1]),b&1&&(t.checked=m[0]),u&&u.p&&(!r||b&16)&&W(u,c,m,m[4],r?H(c,m[4],b,null):q(m[4]),null),(!r||b&2)&&g(a,"for",m[1]),(!r||b&4)&&g(a,"title",m[2]),d&&d.p&&(!r||b&16)&&W(d,_,m,m[4],r?H(_,m[4],b,ye):q(m[4]),Q)},i(m){r||(k(u,m),k(d,m),r=!0)},o(m){w(u,m),w(d,m),r=!1},d(m){m&&y(e),u&&u.d(m),d&&d.d(m),o=!1,se(f)}}}function Ve(s,e,t){let{$$slots:l={},$$scope:a}=e;const i=ce(l);let{id:n}=e,{checked:r}=e,{hint:o=null}=e,c=i.right!==void 0?"float: none":"";function u(d){ne.call(this,s,d)}function _(){r=this.checked,t(0,r)}return s.$$set=d=>{"id"in d&&t(1,n=d.id),"checked"in d&&t(0,r=d.checked),"hint"in d&&t(2,o=d.hint),"$$scope"in d&&t(4,a=d.$$scope)},[r,n,o,c,a,l,u,_]}class Ye extends L{constructor(e){super(),B(this,e,Ve,Ce,$,{id:1,checked:0,hint:2})}}function X(s,e,t){const l=s.slice();return l[9]=e[t][0],l[10]=e[t][1],l}function Y(s){let e;return{c(){e=v("option"),e.__value="",D(e,e.__value)},m(t,l){S(t,e,l)},d(t){t&&y(e)}}}function Z(s){let e,t=s[10]+"",l,a;return{c(){e=v("option"),l=F(t),e.__value=a=s[9],D(e,e.__value)},m(i,n){S(i,e,n),h(e,l)},p(i,n){n&8&&t!==(t=i[10]+"")&&ae(l,t),n&8&&a!==(a=i[9])&&(e.__value=a,D(e,e.__value))},d(i){i&&y(e)}}}function Ee(s){let e,t,l,a,i,n,r;e=new _e({props:{errorMessage:s[6]}});let o=s[4]&&Y(),f=A(s[3]),c=[];for(let u=0;u<f.length;u+=1)c[u]=Z(X(s,f,u));return{c(){E(e.$$.fragment),t=C(),l=v("select"),o&&o.c(),a=j();for(let u=0;u<c.length;u+=1)c[u].c();g(l,"class","govuk-select"),g(l,"id",s[2]),l.disabled=s[5],s[0]===void 0&&de(()=>s[8].call(l))},m(u,_){M(e,u,_),S(u,t,_),S(u,l,_),o&&o.m(l,null),h(l,a);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(l,null);K(l,s[0],!0),i=!0,n||(r=[N(l,"change",s[8]),N(l,"change",s[7])],n=!0)},p(u,_){const d={};if(_&64&&(d.errorMessage=u[6]),e.$set(d),u[4]?o||(o=Y(),o.c(),o.m(l,a)):o&&(o.d(1),o=null),_&8){f=A(u[3]);let m;for(m=0;m<f.length;m+=1){const b=X(u,f,m);c[m]?c[m].p(b,_):(c[m]=Z(b),c[m].c(),c[m].m(l,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=f.length}(!i||_&4)&&g(l,"id",u[2]),(!i||_&32)&&(l.disabled=u[5]),_&9&&K(l,u[0])},i(u){i||(k(e.$$.fragment,u),i=!0)},o(u){w(e.$$.fragment,u),i=!1},d(u){u&&(y(t),y(l)),I(e,u),o&&o.d(),me(c,u),n=!1,se(r)}}}function Me(s){let e,t;return e=new fe({props:{label:s[1],id:s[2],$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},m(l,a){M(e,l,a),t=!0},p(l,[a]){const i={};a&2&&(i.label=l[1]),a&4&&(i.id=l[2]),a&8317&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function Ie(s,e,t){let{label:l}=e,{id:a}=e,{choices:i}=e,{emptyOption:n=!1}=e,{disabled:r=!1}=e,{errorMessage:o=""}=e,{value:f}=e;function c(_){ne.call(this,s,_)}function u(){f=ge(this),t(0,f),t(3,i)}return s.$$set=_=>{"label"in _&&t(1,l=_.label),"id"in _&&t(2,a=_.id),"choices"in _&&t(3,i=_.choices),"emptyOption"in _&&t(4,n=_.emptyOption),"disabled"in _&&t(5,r=_.disabled),"errorMessage"in _&&t(6,o=_.errorMessage),"value"in _&&t(0,f=_.value)},[f,l,a,i,n,r,o,c,u]}class Le extends L{constructor(e){super(),B(this,e,Ie,Me,$,{label:1,id:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}function Be(s){let e,t,l;function a(n){s[2](n)}let i={label:"Basemap",id:"basemap",choices:be(),disabled:s[0]};return s[1]!==void 0&&(i.value=s[1]),e=new Le({props:i}),ie.push(()=>oe(e,"value",a)),{c(){E(e.$$.fragment)},m(n,r){M(e,n,r),l=!0},p(n,[r]){const o={};r&1&&(o.disabled=n[0]),!t&&r&2&&(t=!0,o.value=n[1],re(()=>t=!1)),e.$set(o)},i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){w(e.$$.fragment,n),l=!1},d(n){I(e,n)}}}function $e(s,e,t){let l;P(s,U,n=>t(1,l=n));let{disabled:a=!1}=e;function i(n){l=n,U.set(l)}return s.$$set=n=>{"disabled"in n&&t(0,a=n.disabled)},[a,l,i]}class Ze extends L{constructor(e){super(),B(this,e,$e,Be,$,{disabled:0})}}function Re(s){let e,t,l,a,i,n,r;const o=s[3].default,f=R(o,s,s[2],null);return{c(){e=v("details"),t=v("summary"),l=v("span"),a=F(s[0]),i=C(),n=v("div"),f&&f.c(),g(l,"class","govuk-details__summary-text"),g(t,"class","govuk-details__summary"),g(n,"class","govuk-details__text"),e.open=s[1],g(e,"class","govuk-details"),g(e,"data-module","govuk-details")},m(c,u){S(c,e,u),h(e,t),h(t,l),h(l,a),h(e,i),h(e,n),f&&f.m(n,null),r=!0},p(c,[u]){(!r||u&1)&&ae(a,c[0]),f&&f.p&&(!r||u&4)&&W(f,o,c,c[2],r?H(o,c[2],u,null):q(c[2]),null),(!r||u&2)&&(e.open=c[1])},i(c){r||(k(f,c),r=!0)},o(c){w(f,c),r=!1},d(c){c&&y(e),f&&f.d(c)}}}function We(s,e,t){let{$$slots:l={},$$scope:a}=e,{label:i}=e,{open:n=!1}=e;return s.$$set=r=>{"label"in r&&t(0,i=r.label),"open"in r&&t(1,n=r.open),"$$scope"in r&&t(2,a=r.$$scope)},[i,n,a,l]}class qe extends L{constructor(e){super(),B(this,e,We,Re,$,{label:0,open:1})}}const He=s=>({}),x=s=>({}),Fe=s=>({}),ee=s=>({});function Ne(s){let e,t,l,a,i,n,r,o,f,c,u;const _=s[4].sidebar,d=R(_,s,s[3],ee),m=s[4].main,b=R(m,s,s[3],x);return{c(){e=v("div"),t=v("aside"),l=v("div"),d&&d.c(),a=C(),i=v("button"),i.textContent="→",r=C(),o=v("main"),b&&b.c(),g(l,"class","sidebar-content content-container svelte-1n0etgd"),g(i,"type","button"),g(i,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),g(t,"class",n=z(s[1]?"":"collapsed")+" svelte-1n0etgd"),O(t,"--sidebarWidth",s[0]),g(o,"class","svelte-1n0etgd"),g(e,"class","overall-layout svelte-1n0etgd")},m(p,V){S(p,e,V),h(e,t),h(t,l),d&&d.m(l,null),h(t,a),h(t,i),h(e,r),h(e,o),b&&b.m(o,null),f=!0,c||(u=N(i,"click",s[2]),c=!0)},p(p,[V]){d&&d.p&&(!f||V&8)&&W(d,_,p,p[3],f?H(_,p[3],V,Fe):q(p[3]),ee),(!f||V&2&&n!==(n=z(p[1]?"":"collapsed")+" svelte-1n0etgd"))&&g(t,"class",n),(!f||V&1)&&O(t,"--sidebarWidth",p[0]),b&&b.p&&(!f||V&8)&&W(b,m,p,p[3],f?H(m,p[3],V,He):q(p[3]),x)},i(p){f||(k(d,p),k(b,p),f=!0)},o(p){w(d,p),w(b,p),f=!1},d(p){p&&y(e),d&&d.d(p),b&&b.d(p),c=!1,u()}}}function Oe(s,e,t){let{$$slots:l={},$$scope:a}=e,{sidebarWidth:i="25rem"}=e,n=!0;function r(){t(1,n=!n)}return s.$$set=o=>{"sidebarWidth"in o&&t(0,i=o.sidebarWidth),"$$scope"in o&&t(3,a=o.$$scope)},[i,n,r,a,l]}class xe extends L{constructor(e){super(),B(this,e,Oe,Ne,$,{sidebarWidth:0})}}const De={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},et=10,tt=10,Pe="/atip/merge_edit_v2/assets/camera_cursor-824d29b6.svg";function te(s){let e,t,l,a;const i=[Ge,Te],n=[];function r(o,f){return o[0]?0:1}return e=r(s),t=n[e]=i[e](s),{c(){t.c(),l=j()},m(o,f){n[e].m(o,f),S(o,l,f),a=!0},p(o,f){let c=e;e=r(o),e===c?n[e].p(o,f):(T(),w(n[c],1,1,()=>{n[c]=null}),G(),t=n[e],t?t.p(o,f):(t=n[e]=i[e](o),t.c()),k(t,1),t.m(l.parentNode,l))},i(o){a||(k(t),a=!0)},o(o){w(t),a=!1},d(o){o&&y(l),n[e].d(o)}}}function Te(s){let e,t;return e=new ue({props:{$$slots:{default:[je]},$$scope:{ctx:s}}}),e.$on("click",s[3]),{c(){E(e.$$.fragment)},m(l,a){M(e,l,a),t=!0},p(l,a){const i={};a&512&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function Ge(s){let e,t;return e=new ue({props:{$$slots:{default:[Ae]},$$scope:{ctx:s}}}),e.$on("click",s[2]),{c(){E(e.$$.fragment)},m(l,a){M(e,l,a),t=!0},p(l,a){const i={};a&512&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function je(s){let e;return{c(){e=F("Disable Street View")},m(t,l){S(t,e,l)},d(t){t&&y(e)}}}function Ae(s){let e;return{c(){e=F("Enable Street View")},m(t,l){S(t,e,l)},d(t){t&&y(e)}}}function le(s){let e,t,l,a,i;function n(o){s[6](o)}let r={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return s[4].streetViewImagery!==void 0&&(r.value=s[4].streetViewImagery),e=new pe({props:r}),ie.push(()=>oe(e,"value",n)),a=new qe({props:{label:"Help",$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment),l=C(),E(a.$$.fragment)},m(o,f){M(e,o,f),S(o,l,f),M(a,o,f),i=!0},p(o,f){const c={};!t&&f&16&&(t=!0,c.value=o[4].streetViewImagery,re(()=>t=!1)),e.$set(c);const u={};f&512&&(u.$$scope={dirty:f,ctx:o}),a.$set(u)},i(o){i||(k(e.$$.fragment,o),k(a.$$.fragment,o),i=!0)},o(o){w(e.$$.fragment,o),w(a.$$.fragment,o),i=!1},d(o){o&&y(l),I(e,o),I(a,o)}}}function Ke(s){let e;return{c(){e=F("Luc Chaissac")},m(t,l){S(t,e,l)},d(t){t&&y(e)}}}function Ue(s){let e,t,l,a,i,n,r,o,f;return o=new ke({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[Ke]},$$scope:{ctx:s}}}),{c(){e=v("ul"),t=v("li"),t.innerHTML=`<b>Click</b>
        on the map to open a new tab with a 3rd-party imagery provider`,l=C(),a=v("li"),a.innerHTML=`Press <b>Escape</b>
        to exit this mode`,i=C(),n=v("li"),r=F("Cursor by "),E(o.$$.fragment)},m(c,u){S(c,e,u),h(e,t),h(e,l),h(e,a),h(e,i),h(e,n),h(n,r),M(o,n,null),f=!0},p(c,u){const _={};u&512&&(_.$$scope={dirty:u,ctx:c}),o.$set(_)},i(c){f||(k(o.$$.fragment,c),f=!0)},o(c){w(o.$$.fragment,c),f=!1},d(c){c&&y(e),I(o)}}}function ze(s){let e,t,l,a=s[1]&&te(s),i=!s[0]&&le(s);return{c(){a&&a.c(),e=C(),i&&i.c(),t=j()},m(n,r){a&&a.m(n,r),S(n,e,r),i&&i.m(n,r),S(n,t,r),l=!0},p(n,[r]){n[1]?a?(a.p(n,r),r&2&&k(a,1)):(a=te(n),a.c(),k(a,1),a.m(e.parentNode,e)):a&&(T(),w(a,1,1,()=>{a=null}),G()),n[0]?i&&(T(),w(i,1,1,()=>{i=null}),G()):i?(i.p(n,r),r&1&&k(i,1)):(i=le(n),i.c(),k(i,1),i.m(t.parentNode,t))},i(n){l||(k(a),k(i),l=!0)},o(n){w(a),w(i),l=!1},d(n){n&&(y(e),y(t)),a&&a.d(n),i&&i.d(n)}}}function Je(s,e,t){let l,a;P(s,he,_=>t(8,l=_)),P(s,J,_=>t(4,a=_));let{displayEnableButton:i}=e,{isInactive:n}=e,r=[];function o(_){if(n)return;let d=_.lngLat.lng,m=_.lngLat.lat;a.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${m},${d}&cbp=11,0,0,0,0`,"_blank"):a.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${m}~${d}&style=x`,"_blank")}function f(){t(0,n=!1),l.on("click",o),l.getCanvas().style.cursor=`url(${Pe}), auto`,r=ve();for(let _ of r)_.setProperty(l,"line-color",De.streetview)}function c(){t(0,n=!0),l.off("click",o),l.getCanvas().style.cursor="inherit";for(let _ of r)_.returnToDefaultPaintValues(l)}function u(_){s.$$.not_equal(a.streetViewImagery,_)&&(a.streetViewImagery=_,J.set(a))}return s.$$set=_=>{"displayEnableButton"in _&&t(1,i=_.displayEnableButton),"isInactive"in _&&t(0,n=_.isInactive)},[n,i,f,c,a,o,u]}class lt extends L{constructor(e){super(),B(this,e,Je,ze,$,{displayEnableButton:1,isInactive:0,handleMapClickEvent:5,enableStreetView:2,disableStreetView:3})}get handleMapClickEvent(){return this.$$.ctx[5]}get enableStreetView(){return this.$$.ctx[2]}get disableStreetView(){return this.$$.ctx[3]}}export{Ze as B,qe as C,xe as L,lt as S,et as a,Xe as b,De as c,Ye as d,Le as e,tt as l};
