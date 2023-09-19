import{S as O,i as D,s as N,aK as V,e as k,h as b,j as C,k as h,aL as E,aM as I,aN as B,t as p,n as w,p as y,d as S,N as F,w as z,aD as ne,a$ as ae,b0 as fe,F as ce,g as L,m as R,q as W,E as _e,J,a5 as j,aE as de,b1 as K,K as me,b2 as be,v as G,u as q,I as ie,b3 as Q,y as H,o as P,b4 as ge,r as he,B as T,C as oe,a8 as pe,b as re,Q as U,as as Z,R as ke,c as ve,l as we,aR as Ce,b5 as ye,a as ue}from"./index-07b3a841.js";function Se(n){let e,l,t;const s=n[3].default,a=V(s,n,n[2],null);return{c(){e=k("fieldset"),l=k("div"),a&&a.c(),b(l,"class",n[0]),b(l,"data-module","govuk-checkboxes"),b(e,"class","govuk-fieldset")},m(i,r){C(i,e,r),h(e,l),a&&a.m(l,null),t=!0},p(i,[r]){a&&a.p&&(!t||r&4)&&E(a,s,i,i[2],t?B(s,i[2],r,null):I(i[2]),null)},i(i){t||(p(a,i),t=!0)},o(i){w(a,i),t=!1},d(i){i&&y(e),a&&a.d(i)}}}function Me(n,e,l){let{$$slots:t={},$$scope:s}=e,{small:a=!1}=e,i=a?"govuk-checkboxes--small":"govuk-checkboxes";return n.$$set=r=>{"small"in r&&l(1,a=r.small),"$$scope"in r&&l(2,s=r.$$scope)},[i,a,s,t]}class $e extends O{constructor(e){super(),D(this,e,Me,Se,N,{small:1})}}const Ve=n=>({}),A=n=>({});function Ee(n){let e,l,t,s,a,i,r,o,_;const c=n[5].default,f=V(c,n,n[4],null),u=n[5].right,d=V(u,n,n[4],A);return{c(){e=k("div"),l=k("input"),t=S(),s=k("label"),f&&f.c(),a=S(),i=k("span"),d&&d.c(),b(l,"type","checkbox"),b(l,"class","govuk-checkboxes__input"),b(l,"id",n[1]),b(s,"class","govuk-label govuk-checkboxes__label"),b(s,"for",n[1]),b(s,"title",n[2]),F(i,"float","right"),b(e,"class","govuk-checkboxes__item"),b(e,"style",n[3])},m(m,g){C(m,e,g),h(e,l),l.checked=n[0],h(e,t),h(e,s),f&&f.m(s,null),h(e,a),h(e,i),d&&d.m(i,null),r=!0,o||(_=[z(l,"change",n[7]),z(l,"change",n[6])],o=!0)},p(m,[g]){(!r||g&2)&&b(l,"id",m[1]),g&1&&(l.checked=m[0]),f&&f.p&&(!r||g&16)&&E(f,c,m,m[4],r?B(c,m[4],g,null):I(m[4]),null),(!r||g&2)&&b(s,"for",m[1]),(!r||g&4)&&b(s,"title",m[2]),d&&d.p&&(!r||g&16)&&E(d,u,m,m[4],r?B(u,m[4],g,Ve):I(m[4]),A)},i(m){r||(p(f,m),p(d,m),r=!0)},o(m){w(f,m),w(d,m),r=!1},d(m){m&&y(e),f&&f.d(m),d&&d.d(m),o=!1,ne(_)}}}function Ie(n,e,l){let{$$slots:t={},$$scope:s}=e;const a=fe(t);let{id:i}=e,{checked:r}=e,{hint:o=null}=e,c=a.right!==void 0?"float: none":"";function f(d){ae.call(this,n,d)}function u(){r=this.checked,l(0,r)}return n.$$set=d=>{"id"in d&&l(1,i=d.id),"checked"in d&&l(0,r=d.checked),"hint"in d&&l(2,o=d.hint),"$$scope"in d&&l(4,s=d.$$scope)},[r,i,o,c,s,t,f,u]}class xe extends O{constructor(e){super(),D(this,e,Ie,Ee,N,{id:1,checked:0,hint:2})}}function X(n,e,l){const t=n.slice();return t[9]=e[l][0],t[10]=e[l][1],t}function Y(n){let e;return{c(){e=k("option"),e.__value="",G(e,e.__value)},m(l,t){C(l,e,t)},d(l){l&&y(e)}}}function $(n){let e,l=n[10]+"",t,s;return{c(){e=k("option"),t=q(l),e.__value=s=n[9],G(e,e.__value)},m(a,i){C(a,e,i),h(e,t)},p(a,i){i&8&&l!==(l=a[10]+"")&&ie(t,l),i&8&&s!==(s=a[9])&&(e.__value=s,G(e,e.__value))},d(a){a&&y(e)}}}function Be(n){let e,l,t,s,a,i,r;e=new _e({props:{errorMessage:n[6]}});let o=n[4]&&Y(),_=J(n[3]),c=[];for(let f=0;f<_.length;f+=1)c[f]=$(X(n,_,f));return{c(){L(e.$$.fragment),l=S(),t=k("select"),o&&o.c(),s=j();for(let f=0;f<c.length;f+=1)c[f].c();b(t,"class","govuk-select"),b(t,"id",n[2]),t.disabled=n[5],n[0]===void 0&&de(()=>n[8].call(t))},m(f,u){R(e,f,u),C(f,l,u),C(f,t,u),o&&o.m(t,null),h(t,s);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(t,null);K(t,n[0],!0),a=!0,i||(r=[z(t,"change",n[8]),z(t,"change",n[7])],i=!0)},p(f,u){const d={};if(u&64&&(d.errorMessage=f[6]),e.$set(d),f[4]?o||(o=Y(),o.c(),o.m(t,s)):o&&(o.d(1),o=null),u&8){_=J(f[3]);let m;for(m=0;m<_.length;m+=1){const g=X(f,_,m);c[m]?c[m].p(g,u):(c[m]=$(g),c[m].c(),c[m].m(t,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=_.length}(!a||u&4)&&b(t,"id",f[2]),(!a||u&32)&&(t.disabled=f[5]),u&9&&K(t,f[0])},i(f){a||(p(e.$$.fragment,f),a=!0)},o(f){w(e.$$.fragment,f),a=!1},d(f){f&&(y(l),y(t)),W(e,f),o&&o.d(),me(c,f),i=!1,ne(r)}}}function Le(n){let e,l;return e=new ce({props:{label:n[1],id:n[2],$$slots:{default:[Be]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},m(t,s){R(e,t,s),l=!0},p(t,[s]){const a={};s&2&&(a.label=t[1]),s&4&&(a.id=t[2]),s&8317&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Re(n,e,l){let{label:t}=e,{id:s}=e,{choices:a}=e,{emptyOption:i=!1}=e,{disabled:r=!1}=e,{errorMessage:o=""}=e,{value:_}=e;function c(u){ae.call(this,n,u)}function f(){_=be(this),l(0,_),l(3,a)}return n.$$set=u=>{"label"in u&&l(1,t=u.label),"id"in u&&l(2,s=u.id),"choices"in u&&l(3,a=u.choices),"emptyOption"in u&&l(4,i=u.emptyOption),"disabled"in u&&l(5,r=u.disabled),"errorMessage"in u&&l(6,o=u.errorMessage),"value"in u&&l(0,_=u.value)},[_,t,s,a,i,r,o,c,f]}class et extends O{constructor(e){super(),D(this,e,Re,Le,N,{label:1,id:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}function We(n){let e,l,t,s,a,i,r;const o=n[3].default,_=V(o,n,n[2],null);return{c(){e=k("details"),l=k("summary"),t=k("span"),s=q(n[0]),a=S(),i=k("div"),_&&_.c(),b(t,"class","govuk-details__summary-text"),b(l,"class","govuk-details__summary"),b(i,"class","govuk-details__text"),e.open=n[1],b(e,"class","govuk-details"),b(e,"data-module","govuk-details")},m(c,f){C(c,e,f),h(e,l),h(l,t),h(t,s),h(e,a),h(e,i),_&&_.m(i,null),r=!0},p(c,[f]){(!r||f&1)&&ie(s,c[0]),_&&_.p&&(!r||f&4)&&E(_,o,c,c[2],r?B(o,c[2],f,null):I(c[2]),null),(!r||f&2)&&(e.open=c[1])},i(c){r||(p(_,c),r=!0)},o(c){w(_,c),r=!1},d(c){c&&y(e),_&&_.d(c)}}}function Oe(n,e,l){let{$$slots:t={},$$scope:s}=e,{label:a}=e,{open:i=!1}=e;return n.$$set=r=>{"label"in r&&l(0,a=r.label),"open"in r&&l(1,i=r.open),"$$scope"in r&&l(2,s=r.$$scope)},[a,i,s,t]}class De extends O{constructor(e){super(),D(this,e,Oe,We,N,{label:0,open:1})}}const Ne=n=>({}),x=n=>({}),qe=n=>({}),ee=n=>({});function ze(n){let e,l,t,s,a,i,r,o,_,c,f;const u=n[4].sidebar,d=V(u,n,n[3],ee),m=n[4].main,g=V(m,n,n[3],x);return{c(){e=k("div"),l=k("aside"),t=k("div"),d&&d.c(),s=S(),a=k("button"),a.textContent="→",r=S(),o=k("main"),g&&g.c(),b(t,"class","sidebar-content content-container svelte-1n0etgd"),b(a,"type","button"),b(a,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),b(l,"class",i=Q(n[1]?"":"collapsed")+" svelte-1n0etgd"),F(l,"--sidebarWidth",n[0]),b(o,"class","svelte-1n0etgd"),b(e,"class","overall-layout svelte-1n0etgd")},m(v,M){C(v,e,M),h(e,l),h(l,t),d&&d.m(t,null),h(l,s),h(l,a),h(e,r),h(e,o),g&&g.m(o,null),_=!0,c||(f=z(a,"click",n[2]),c=!0)},p(v,[M]){d&&d.p&&(!_||M&8)&&E(d,u,v,v[3],_?B(u,v[3],M,qe):I(v[3]),ee),(!_||M&2&&i!==(i=Q(v[1]?"":"collapsed")+" svelte-1n0etgd"))&&b(l,"class",i),(!_||M&1)&&F(l,"--sidebarWidth",v[0]),g&&g.p&&(!_||M&8)&&E(g,m,v,v[3],_?B(m,v[3],M,Ne):I(v[3]),x)},i(v){_||(p(d,v),p(g,v),_=!0)},o(v){w(d,v),w(g,v),_=!1},d(v){v&&y(e),d&&d.d(v),g&&g.d(v),c=!1,f()}}}function He(n,e,l){let{$$slots:t={},$$scope:s}=e,{sidebarWidth:a="25rem"}=e,i=!0;function r(){l(1,i=!i)}return n.$$set=o=>{"sidebarWidth"in o&&l(0,a=o.sidebarWidth),"$$scope"in o&&l(3,s=o.$$scope)},[a,i,r,s,t]}class tt extends O{constructor(e){super(),D(this,e,He,ze,N,{sidebarWidth:0})}}function te(n){let e;const l=n[5].default,t=V(l,n,n[4],null);return{c(){t&&t.c()},m(s,a){t&&t.m(s,a),e=!0},p(s,a){t&&t.p&&(!e||a&16)&&E(t,l,s,s[4],e?B(l,s[4],a,null):I(s[4]),null)},i(s){e||(p(t,s),e=!0)},o(s){w(t,s),e=!1},d(s){t&&t.d(s)}}}function Pe(n){let e,l,t=n[1]&&te(n);return{c(){e=k("div"),t&&t.c(),b(e,"class","map svelte-12dpf1u")},m(s,a){C(s,e,a),t&&t.m(e,null),n[6](e),l=!0},p(s,[a]){s[1]?t?(t.p(s,a),a&2&&p(t,1)):(t=te(s),t.c(),p(t,1),t.m(e,null)):t&&(H(),w(t,1,1,()=>{t=null}),P())},i(s){l||(p(t),l=!0)},o(s){w(t),l=!1},d(s){s&&y(e),t&&t.d(),n[6](null)}}}function Te(n,e,l){let{$$slots:t={},$$scope:s}=e,{style:a}=e,{startBounds:i=null}=e,r,o,_=!1,c=!window.location.hash;ge("setCamera",c),he(()=>{r=new T.Map({container:o,style:`https://api.maptiler.com/maps/${a}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),r.addControl(new T.ScaleControl({})),r.addControl(new T.NavigationControl({visualizePitch:!0}),"bottom-right"),r.on("load",()=>{l(1,_=!0),c&&i&&r.fitBounds(i,{animate:!1}),oe.set(r)}),new ResizeObserver(()=>{r.resize()}).observe(o)}),pe(()=>{r.remove()});function f(u){re[u?"unshift":"push"](()=>{o=u,l(0,o)})}return n.$$set=u=>{"style"in u&&l(2,a=u.style),"startBounds"in u&&l(3,i=u.startBounds),"$$scope"in u&&l(4,s=u.$$scope)},[o,_,a,i,s,t,f]}class lt extends O{constructor(e){super(),D(this,e,Te,Pe,N,{style:2,startBounds:3})}}const Fe={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue"},st=10,nt=10,Ge="/atip/browse_about/assets/camera_cursor-824d29b6.svg";function le(n){let e,l,t,s;const a=[Je,je],i=[];function r(o,_){return o[0]?0:1}return e=r(n),l=i[e]=a[e](n),{c(){l.c(),t=j()},m(o,_){i[e].m(o,_),C(o,t,_),s=!0},p(o,_){let c=e;e=r(o),e===c?i[e].p(o,_):(H(),w(i[c],1,1,()=>{i[c]=null}),P(),l=i[e],l?l.p(o,_):(l=i[e]=a[e](o),l.c()),p(l,1),l.m(t.parentNode,t))},i(o){s||(p(l),s=!0)},o(o){w(l),s=!1},d(o){o&&y(t),i[e].d(o)}}}function je(n){let e,l;return e=new ue({props:{$$slots:{default:[Ke]},$$scope:{ctx:n}}}),e.$on("click",n[3]),{c(){L(e.$$.fragment)},m(t,s){R(e,t,s),l=!0},p(t,s){const a={};s&512&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Je(n){let e,l;return e=new ue({props:{$$slots:{default:[Qe]},$$scope:{ctx:n}}}),e.$on("click",n[2]),{c(){L(e.$$.fragment)},m(t,s){R(e,t,s),l=!0},p(t,s){const a={};s&512&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function Ke(n){let e;return{c(){e=q("Disable Street View")},m(l,t){C(l,e,t)},d(l){l&&y(e)}}}function Qe(n){let e;return{c(){e=q("Enable Street View")},m(l,t){C(l,e,t)},d(l){l&&y(e)}}}function se(n){let e,l,t,s,a;function i(o){n[6](o)}let r={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return n[4].streetViewImagery!==void 0&&(r.value=n[4].streetViewImagery),e=new ke({props:r}),re.push(()=>ve(e,"value",i)),s=new De({props:{label:"Help",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),t=S(),L(s.$$.fragment)},m(o,_){R(e,o,_),C(o,t,_),R(s,o,_),a=!0},p(o,_){const c={};!l&&_&16&&(l=!0,c.value=o[4].streetViewImagery,we(()=>l=!1)),e.$set(c);const f={};_&512&&(f.$$scope={dirty:_,ctx:o}),s.$set(f)},i(o){a||(p(e.$$.fragment,o),p(s.$$.fragment,o),a=!0)},o(o){w(e.$$.fragment,o),w(s.$$.fragment,o),a=!1},d(o){o&&y(t),W(e,o),W(s,o)}}}function Ue(n){let e;return{c(){e=q("Luc Chaissac")},m(l,t){C(l,e,t)},d(l){l&&y(e)}}}function Ze(n){let e,l,t,s,a,i,r,o,_;return o=new Ce({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){e=k("ul"),l=k("li"),l.innerHTML=`<b>Click</b>
        on the map to open a new tab with a 3rd-party imagery provider`,t=S(),s=k("li"),s.innerHTML=`Press <b>Escape</b>
        to exit this mode`,a=S(),i=k("li"),r=q("Cursor by "),L(o.$$.fragment)},m(c,f){C(c,e,f),h(e,l),h(e,t),h(e,s),h(e,a),h(e,i),h(i,r),R(o,i,null),_=!0},p(c,f){const u={};f&512&&(u.$$scope={dirty:f,ctx:c}),o.$set(u)},i(c){_||(p(o.$$.fragment,c),_=!0)},o(c){w(o.$$.fragment,c),_=!1},d(c){c&&y(e),W(o)}}}function Ae(n){let e,l,t,s=n[1]&&le(n),a=!n[0]&&se(n);return{c(){s&&s.c(),e=S(),a&&a.c(),l=j()},m(i,r){s&&s.m(i,r),C(i,e,r),a&&a.m(i,r),C(i,l,r),t=!0},p(i,[r]){i[1]?s?(s.p(i,r),r&2&&p(s,1)):(s=le(i),s.c(),p(s,1),s.m(e.parentNode,e)):s&&(H(),w(s,1,1,()=>{s=null}),P()),i[0]?a&&(H(),w(a,1,1,()=>{a=null}),P()):a?(a.p(i,r),r&1&&p(a,1)):(a=se(i),a.c(),p(a,1),a.m(l.parentNode,l))},i(i){t||(p(s),p(a),t=!0)},o(i){w(s),w(a),t=!1},d(i){i&&(y(e),y(l)),s&&s.d(i),a&&a.d(i)}}}function Xe(n,e,l){let t,s;U(n,oe,u=>l(8,t=u)),U(n,Z,u=>l(4,s=u));let{displayEnableButton:a}=e,{isInactive:i}=e,r=[];function o(u){if(i)return;let d=u.lngLat.lng,m=u.lngLat.lat;s.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${m},${d}&cbp=11,0,0,0,0`,"_blank"):s.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${m}~${d}&style=x`,"_blank")}function _(){l(0,i=!1),t.on("click",o),t.getCanvas().style.cursor=`url(${Ge}), auto`,r=ye();for(let u of r)u.setProperty(t,"line-color",Fe.streetview)}function c(){l(0,i=!0),t.off("click",o),t.getCanvas().style.cursor="inherit";for(let u of r)u.returnToDefaultPaintValues(t)}function f(u){n.$$.not_equal(s.streetViewImagery,u)&&(s.streetViewImagery=u,Z.set(s))}return n.$$set=u=>{"displayEnableButton"in u&&l(1,a=u.displayEnableButton),"isInactive"in u&&l(0,i=u.isInactive)},[i,a,_,c,s,o,f]}class at extends O{constructor(e){super(),D(this,e,Xe,Ae,N,{displayEnableButton:1,isInactive:0,handleMapClickEvent:5,enableStreetView:2,disableStreetView:3})}get handleMapClickEvent(){return this.$$.ctx[5]}get enableStreetView(){return this.$$.ctx[2]}get disableStreetView(){return this.$$.ctx[3]}}export{De as C,tt as L,lt as M,at as S,st as a,$e as b,Fe as c,xe as d,et as e,nt as l};
