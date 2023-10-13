import{S as j,i as q,s as O,q as H,B as J,r as te,b7 as G,a5 as ne,G as fe,d as V,g as w,j as d,m as h,w as K,a2 as N,n as g,a3 as D,t as m,o as b,p as L,aG as ce,aD as R,a1 as B,aK as ue,e as v,u as S,k as y,C as pe,H as _e,b as re,c as le,l as se,O as me,P as ge,x as W,ae as de,a as T,aL as be,aB as z,R as $e,aN as ke,ba as we}from"./index-502a69ed.js";import{j as oe,c as ae,L as he,b as Le}from"./LineLayer-e3964c18.js";function ye(i,e,t){let n;H(i,J,c=>t(3,n=c));let r=null,{markerPosition:l}=e,{markerPositionUpdated:a}=e;return te(()=>{r=new G.Marker({draggable:!0}).setLngLat(l).addTo(n),r.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),r.on("drag",()=>{t(0,l=r.getLngLat()),a()}),r.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),ne(()=>{r&&r.remove()}),i.$$set=c=>{"markerPosition"in c&&t(0,l=c.markerPosition),"markerPositionUpdated"in c&&t(1,a=c.markerPositionUpdated)},[l,a]}class Se extends j{constructor(e){super(),q(this,e,ye,null,O,{markerPosition:0,markerPositionUpdated:1})}}function Q(i,e,t){const n=i.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function Pe(i){let e,t;return e=new T({props:{$$slots:{default:[Ve]},$$scope:{ctx:i}}}),e.$on("click",i[5]),{c(){w(e.$$.fragment)},m(n,r){h(e,n,r),t=!0},p(n,r){const l={};r&524288&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Ce(i){let e,t;return e=new T({props:{$$slots:{default:[Me]},$$scope:{ctx:i}}}),e.$on("click",i[4]),{c(){w(e.$$.fragment)},m(n,r){h(e,n,r),t=!0},p(n,r){const l={};r&524288&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Ve(i){let e;return{c(){e=S("Disable Line Measurement Tool")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function Me(i){let e;return{c(){e=S("Enable Line Measurement Tool")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function X(i){var $;let e,t,n,r=[],l=new Map,a,c,s=i[2]&&(($=i[2].properties)==null?void 0:$.length)&&Y(i);t=new oe({props:{label:"Help",$$slots:{default:[Ee]},$$scope:{ctx:i}}});let u=R(i[1]);const p=o=>o[16].id;for(let o=0;o<u.length;o+=1){let f=Q(i,u,o),_=p(f);l.set(_,r[o]=Z(_,f))}return{c(){s&&s.c(),e=V(),w(t.$$.fragment),n=V();for(let o=0;o<r.length;o+=1)r[o].c();a=B()},m(o,f){s&&s.m(o,f),d(o,e,f),h(t,o,f),d(o,n,f);for(let _=0;_<r.length;_+=1)r[_]&&r[_].m(o,f);d(o,a,f),c=!0},p(o,f){var P;o[2]&&((P=o[2].properties)!=null&&P.length)?s?s.p(o,f):(s=Y(o),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null);const _={};f&524288&&(_.$$scope={dirty:f,ctx:o}),t.$set(_),f&258&&(u=R(o[1]),N(),r=ue(r,f,p,1,o,u,l,a.parentNode,be,Z,a,Q),D())},i(o){if(!c){m(t.$$.fragment,o);for(let f=0;f<u.length;f+=1)m(r[f]);c=!0}},o(o){g(t.$$.fragment,o);for(let f=0;f<r.length;f+=1)g(r[f]);c=!1},d(o){o&&(b(e),b(n),b(a)),s&&s.d(o),L(t,o);for(let f=0;f<r.length;f+=1)r[f].d(o)}}}function Y(i){var a;let e,t,n=((a=i[2].properties)==null?void 0:a.length)+"",r,l;return{c(){e=v("p"),t=S("Length: "),r=S(n),l=S("m")},m(c,s){d(c,e,s),y(e,t),y(e,r),y(e,l)},p(c,s){var u;s&4&&n!==(n=((u=c[2].properties)==null?void 0:u.length)+"")&&pe(r,n)},d(c){c&&b(e)}}}function Ee(i){let e;return{c(){e=v("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){d(t,e,n)},p:_e,d(t){t&&b(e)}}}function Z(i,e){let t,n,r,l;function a(s){e[9](s,e[16])}let c={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(c.markerPosition=e[16].lngLat),n=new Se({props:c}),re.push(()=>le(n,"markerPosition",a)),{key:i,first:null,c(){t=B(),w(n.$$.fragment),this.first=t},m(s,u){d(s,t,u),h(n,s,u),l=!0},p(s,u){e=s;const p={};!r&&u&2&&(r=!0,p.markerPosition=e[16].lngLat,se(()=>r=!1)),n.$set(p)},i(s){l||(m(n.$$.fragment,s),l=!0)},o(s){g(n.$$.fragment,s),l=!1},d(s){s&&b(t),L(n,s)}}}function Ie(i){let e,t;const n=[me("measurement-line"),{paint:{"line-color":ae.measuringLine,"line-width":5}}];let r={};for(let l=0;l<n.length;l+=1)r=ge(r,n[l]);return e=new he({props:r}),{c(){w(e.$$.fragment)},m(l,a){h(e,l,a),t=!0},p(l,a){const c={};e.$set(c)},i(l){t||(m(e.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function ve(i){let e,t,n,r,l,a,c,s;const u=[Ce,Pe],p=[];function $(f,_){return f[0]?0:1}e=$(i),t=p[e]=u[e](i);let o=!i[0]&&X(i);return l=new fe({props:{data:i[3],$$slots:{default:[Ie]},$$scope:{ctx:i}}}),{c(){t.c(),n=V(),o&&o.c(),r=V(),w(l.$$.fragment)},m(f,_){p[e].m(f,_),d(f,n,_),o&&o.m(f,_),d(f,r,_),h(l,f,_),a=!0,c||(s=[K(window,"keydown",i[6]),K(window,"keyup",i[7])],c=!0)},p(f,[_]){let P=e;e=$(f),e===P?p[e].p(f,_):(N(),g(p[P],1,1,()=>{p[P]=null}),D(),t=p[e],t?t.p(f,_):(t=p[e]=u[e](f),t.c()),m(t,1),t.m(n.parentNode,n)),f[0]?o&&(N(),g(o,1,1,()=>{o=null}),D()):o?(o.p(f,_),_&1&&m(o,1)):(o=X(f),o.c(),m(o,1),o.m(r.parentNode,r));const M={};_&8&&(M.data=f[3]),_&524288&&(M.$$scope={dirty:_,ctx:f}),l.$set(M)},i(f){a||(m(t),m(o),m(l.$$.fragment,f),a=!0)},o(f){g(t),g(o),g(l.$$.fragment,f),a=!1},d(f){f&&(b(n),b(r)),p[e].d(f),o&&o.d(f),L(l,f),c=!1,ce(s)}}}function Ne(i,e,t){let n;H(i,J,k=>t(12,n=k));let r=!0,l=[],a,c=!1,s=0,u=W();function p(k){r||(c||(l.push({id:s++,lngLat:k.lngLat}),t(1,l),M()),c&&l.length>0&&($(k.lngLat),M()))}function $(k){let F=new G.LngLat(0,-90).distanceTo(new G.LngLat(0,90)),C;l.forEach(U=>{const I=U.lngLat;F>=k.distanceTo(I)&&(C=I,F=k.distanceTo(I))}),C&&t(1,l=l.filter(U=>{const I=U.lngLat;return I.lng!=(C==null?void 0:C.lng)||I.lat!=(C==null?void 0:C.lat)}))}function o(){t(0,r=!1)}function f(){t(0,r=!0),t(1,l=[]),A()}function _(k){k.key==="Shift"&&(c=!0),k.key==="Escape"&&f()}function P(k){k.key==="Shift"&&(c=!1)}function M(){if(l.length<2){A();return}const k=l.map(E=>[E.lngLat.lng,E.lngLat.lat]);t(2,a=de(k,{})),a.properties&&t(2,a.properties.length=(Le(a)*1e3).toFixed(2),a),t(3,u=JSON.parse(JSON.stringify(a)))}function A(){t(2,a=void 0),t(3,u=W())}te(()=>{n.on("click",p)}),ne(()=>{n.off("click",p)});function ie(k,E){i.$$.not_equal(E.lngLat,k)&&(E.lngLat=k,t(1,l))}return[r,l,a,u,o,f,_,P,M,ie]}class Fe extends j{constructor(e){super(),q(this,e,Ne,ve,O,{})}}const De="/atip/modal_shift/assets/camera_cursor-824d29b6.svg";function x(i){let e,t,n,r;const l=[Be,He],a=[];function c(s,u){return s[0]?0:1}return e=c(i),t=a[e]=l[e](i),{c(){t.c(),n=B()},m(s,u){a[e].m(s,u),d(s,n,u),r=!0},p(s,u){let p=e;e=c(s),e===p?a[e].p(s,u):(N(),g(a[p],1,1,()=>{a[p]=null}),D(),t=a[e],t?t.p(s,u):(t=a[e]=l[e](s),t.c()),m(t,1),t.m(n.parentNode,n))},i(s){r||(m(t),r=!0)},o(s){g(t),r=!1},d(s){s&&b(n),a[e].d(s)}}}function He(i){let e,t;return e=new T({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),e.$on("click",i[3]),{c(){w(e.$$.fragment)},m(n,r){h(e,n,r),t=!0},p(n,r){const l={};r&512&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Be(i){let e,t;return e=new T({props:{$$slots:{default:[Ue]},$$scope:{ctx:i}}}),e.$on("click",i[2]),{c(){w(e.$$.fragment)},m(n,r){h(e,n,r),t=!0},p(n,r){const l={};r&512&&(l.$$scope={dirty:r,ctx:n}),e.$set(l)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){L(e,n)}}}function Te(i){let e;return{c(){e=S("Disable Street View")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function Ue(i){let e;return{c(){e=S("Enable Street View")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function ee(i){let e,t,n,r,l;function a(s){i[6](s)}let c={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return i[4].streetViewImagery!==void 0&&(c.value=i[4].streetViewImagery),e=new $e({props:c}),re.push(()=>le(e,"value",a)),r=new oe({props:{label:"Help",$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){w(e.$$.fragment),n=V(),w(r.$$.fragment)},m(s,u){h(e,s,u),d(s,n,u),h(r,s,u),l=!0},p(s,u){const p={};!t&&u&16&&(t=!0,p.value=s[4].streetViewImagery,se(()=>t=!1)),e.$set(p);const $={};u&512&&($.$$scope={dirty:u,ctx:s}),r.$set($)},i(s){l||(m(e.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){g(e.$$.fragment,s),g(r.$$.fragment,s),l=!1},d(s){s&&b(n),L(e,s),L(r,s)}}}function Ge(i){let e;return{c(){e=S("Luc Chaissac")},m(t,n){d(t,e,n)},d(t){t&&b(e)}}}function je(i){let e,t,n,r,l,a,c,s,u;return s=new ke({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){e=v("ul"),t=v("li"),t.innerHTML=`<b>Click</b>
        on the map to open a new tab with a 3rd-party imagery provider`,n=V(),r=v("li"),r.innerHTML=`Press <b>Escape</b>
        to exit this mode`,l=V(),a=v("li"),c=S("Cursor by "),w(s.$$.fragment)},m(p,$){d(p,e,$),y(e,t),y(e,n),y(e,r),y(e,l),y(e,a),y(a,c),h(s,a,null),u=!0},p(p,$){const o={};$&512&&(o.$$scope={dirty:$,ctx:p}),s.$set(o)},i(p){u||(m(s.$$.fragment,p),u=!0)},o(p){g(s.$$.fragment,p),u=!1},d(p){p&&b(e),L(s)}}}function qe(i){let e,t,n,r=i[1]&&x(i),l=!i[0]&&ee(i);return{c(){r&&r.c(),e=V(),l&&l.c(),t=B()},m(a,c){r&&r.m(a,c),d(a,e,c),l&&l.m(a,c),d(a,t,c),n=!0},p(a,[c]){a[1]?r?(r.p(a,c),c&2&&m(r,1)):(r=x(a),r.c(),m(r,1),r.m(e.parentNode,e)):r&&(N(),g(r,1,1,()=>{r=null}),D()),a[0]?l&&(N(),g(l,1,1,()=>{l=null}),D()):l?(l.p(a,c),c&1&&m(l,1)):(l=ee(a),l.c(),m(l,1),l.m(t.parentNode,t))},i(a){n||(m(r),m(l),n=!0)},o(a){g(r),g(l),n=!1},d(a){a&&(b(e),b(t)),r&&r.d(a),l&&l.d(a)}}}function Oe(i,e,t){let n,r;H(i,J,o=>t(8,n=o)),H(i,z,o=>t(4,r=o));let{displayEnableButton:l}=e,{isInactive:a}=e,c=[];function s(o){if(a)return;let f=o.lngLat.lng,_=o.lngLat.lat;r.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${_},${f}&cbp=11,0,0,0,0`,"_blank"):r.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${_}~${f}&style=x`,"_blank")}function u(){t(0,a=!1),n.on("click",s),n.getCanvas().style.cursor=`url(${De}), auto`,c=we();for(let o of c)o.setProperty(n,"line-color",ae.streetview)}function p(){t(0,a=!0),n.off("click",s),n.getCanvas().style.cursor="inherit";for(let o of c)o.returnToDefaultPaintValues(n)}function $(o){i.$$.not_equal(r.streetViewImagery,o)&&(r.streetViewImagery=o,z.set(r))}return i.$$set=o=>{"displayEnableButton"in o&&t(1,l=o.displayEnableButton),"isInactive"in o&&t(0,a=o.isInactive)},[a,l,u,p,r,s,$]}class Ke extends j{constructor(e){super(),q(this,e,Oe,qe,O,{displayEnableButton:1,isInactive:0,handleMapClickEvent:5,enableStreetView:2,disableStreetView:3})}get handleMapClickEvent(){return this.$$.ctx[5]}get enableStreetView(){return this.$$.ctx[2]}get disableStreetView(){return this.$$.ctx[3]}}export{Fe as L,Ke as S};
