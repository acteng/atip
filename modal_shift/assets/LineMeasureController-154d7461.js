import{S as q,i as A,s as I,aK as B,e as S,d as v,h as M,b6 as F,az as z,j as L,k as w,w as E,aL as K,aM as Z,aN as Q,t as b,n as k,o as $,q as se,B as ae,r as le,b3 as H,a0 as oe,G as ue,g as D,m as U,_ as T,$ as O,p as W,ar as ce,aA as V,Z as re,aG as _e,u as G,C as de,H as pe,b as ge,c as me,l as be,O as ke,P as he,x as X,ah as Le,a as ie,aH as $e}from"./index-c2996511.js";import{C as ye,b as we,L as Pe,l as Me}from"./StreetViewTool-a5cf0d20.js";const Se=r=>({}),Y=r=>({}),Ce=r=>({}),R=r=>({});function Ne(r){let e,t,n,l,a,f,u,i,c,p,y;const o=r[4].sidebar,s=B(o,r,r[3],R),_=r[4].main,g=B(_,r,r[3],Y);return{c(){e=S("div"),t=S("aside"),n=S("div"),s&&s.c(),l=v(),a=S("button"),a.textContent="→",u=v(),i=S("main"),g&&g.c(),M(n,"class","sidebar-content content-container svelte-1n0etgd"),M(a,"type","button"),M(a,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),M(t,"class",f=F(r[1]?"":"collapsed")+" svelte-1n0etgd"),z(t,"--sidebarWidth",r[0]),M(i,"class","svelte-1n0etgd"),M(e,"class","overall-layout svelte-1n0etgd")},m(d,h){L(d,e,h),w(e,t),w(t,n),s&&s.m(n,null),w(t,l),w(t,a),w(e,u),w(e,i),g&&g.m(i,null),c=!0,p||(y=E(a,"click",r[2]),p=!0)},p(d,[h]){s&&s.p&&(!c||h&8)&&K(s,o,d,d[3],c?Q(o,d[3],h,Ce):Z(d[3]),R),(!c||h&2&&f!==(f=F(d[1]?"":"collapsed")+" svelte-1n0etgd"))&&M(t,"class",f),(!c||h&1)&&z(t,"--sidebarWidth",d[0]),g&&g.p&&(!c||h&8)&&K(g,_,d,d[3],c?Q(_,d[3],h,Se):Z(d[3]),Y)},i(d){c||(b(s,d),b(g,d),c=!0)},o(d){k(s,d),k(g,d),c=!1},d(d){d&&$(e),s&&s.d(d),g&&g.d(d),p=!1,y()}}}function ve(r,e,t){let{$$slots:n={},$$scope:l}=e,{sidebarWidth:a="25rem"}=e,f=!0;function u(){t(1,f=!f)}return r.$$set=i=>{"sidebarWidth"in i&&t(0,a=i.sidebarWidth),"$$scope"in i&&t(3,l=i.$$scope)},[a,f,u,l,n]}class Je extends q{constructor(e){super(),A(this,e,ve,Ne,I,{sidebarWidth:0})}}function De(r,e,t){let n;se(r,ae,u=>t(3,n=u));let l=null,{markerPosition:a}=e,{markerPositionUpdated:f}=e;return le(()=>{l=new H.Marker({draggable:!0}).setLngLat(a).addTo(n),l.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),l.on("drag",()=>{t(0,a=l.getLngLat()),f()}),l.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),oe(()=>{l&&l.remove()}),r.$$set=u=>{"markerPosition"in u&&t(0,a=u.markerPosition),"markerPositionUpdated"in u&&t(1,f=u.markerPositionUpdated)},[a,f]}class Ue extends q{constructor(e){super(),A(this,e,De,null,I,{markerPosition:0,markerPositionUpdated:1})}}function x(r,e,t){const n=r.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function We(r){let e,t;return e=new ie({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),e.$on("click",r[5]),{c(){D(e.$$.fragment)},m(n,l){U(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Ge(r){let e,t;return e=new ie({props:{$$slots:{default:[Ee]},$$scope:{ctx:r}}}),e.$on("click",r[4]),{c(){D(e.$$.fragment)},m(n,l){U(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function je(r){let e;return{c(){e=G("Disable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function Ee(r){let e;return{c(){e=G("Enable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function ee(r){var y;let e,t,n,l=[],a=new Map,f,u,i=r[2]&&((y=r[2].properties)==null?void 0:y.length)&&te(r);t=new ye({props:{label:"Help",$$slots:{default:[He]},$$scope:{ctx:r}}});let c=V(r[1]);const p=o=>o[16].id;for(let o=0;o<c.length;o+=1){let s=x(r,c,o),_=p(s);a.set(_,l[o]=ne(_,s))}return{c(){i&&i.c(),e=v(),D(t.$$.fragment),n=v();for(let o=0;o<l.length;o+=1)l[o].c();f=re()},m(o,s){i&&i.m(o,s),L(o,e,s),U(t,o,s),L(o,n,s);for(let _=0;_<l.length;_+=1)l[_]&&l[_].m(o,s);L(o,f,s),u=!0},p(o,s){var g;o[2]&&((g=o[2].properties)!=null&&g.length)?i?i.p(o,s):(i=te(o),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null);const _={};s&524288&&(_.$$scope={dirty:s,ctx:o}),t.$set(_),s&258&&(c=V(o[1]),T(),l=_e(l,s,p,1,o,c,a,f.parentNode,$e,ne,f,x),O())},i(o){if(!u){b(t.$$.fragment,o);for(let s=0;s<c.length;s+=1)b(l[s]);u=!0}},o(o){k(t.$$.fragment,o);for(let s=0;s<l.length;s+=1)k(l[s]);u=!1},d(o){o&&($(e),$(n),$(f)),i&&i.d(o),W(t,o);for(let s=0;s<l.length;s+=1)l[s].d(o)}}}function te(r){var f;let e,t,n=((f=r[2].properties)==null?void 0:f.length)+"",l,a;return{c(){e=S("p"),t=G("Length: "),l=G(n),a=G("m")},m(u,i){L(u,e,i),w(e,t),w(e,l),w(e,a)},p(u,i){var c;i&4&&n!==(n=((c=u[2].properties)==null?void 0:c.length)+"")&&de(l,n)},d(u){u&&$(e)}}}function He(r){let e;return{c(){e=S("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){L(t,e,n)},p:pe,d(t){t&&$(e)}}}function ne(r,e){let t,n,l,a;function f(i){e[9](i,e[16])}let u={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(u.markerPosition=e[16].lngLat),n=new Ue({props:u}),ge.push(()=>me(n,"markerPosition",f)),{key:r,first:null,c(){t=re(),D(n.$$.fragment),this.first=t},m(i,c){L(i,t,c),U(n,i,c),a=!0},p(i,c){e=i;const p={};!l&&c&2&&(l=!0,p.markerPosition=e[16].lngLat,be(()=>l=!1)),n.$set(p)},i(i){a||(b(n.$$.fragment,i),a=!0)},o(i){k(n.$$.fragment,i),a=!1},d(i){i&&$(t),W(n,i)}}}function Te(r){let e,t;const n=[ke("measurement-line"),{paint:{"line-color":we.measuringLine,"line-width":5}}];let l={};for(let a=0;a<n.length;a+=1)l=he(l,n[a]);return e=new Pe({props:l}),{c(){D(e.$$.fragment)},m(a,f){U(e,a,f),t=!0},p(a,f){const u={};e.$set(u)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Oe(r){let e,t,n,l,a,f,u,i;const c=[Ge,We],p=[];function y(s,_){return s[0]?0:1}e=y(r),t=p[e]=c[e](r);let o=!r[0]&&ee(r);return a=new ue({props:{data:r[3],$$slots:{default:[Te]},$$scope:{ctx:r}}}),{c(){t.c(),n=v(),o&&o.c(),l=v(),D(a.$$.fragment)},m(s,_){p[e].m(s,_),L(s,n,_),o&&o.m(s,_),L(s,l,_),U(a,s,_),f=!0,u||(i=[E(window,"keydown",r[6]),E(window,"keyup",r[7])],u=!0)},p(s,[_]){let g=e;e=y(s),e===g?p[e].p(s,_):(T(),k(p[g],1,1,()=>{p[g]=null}),O(),t=p[e],t?t.p(s,_):(t=p[e]=c[e](s),t.c()),b(t,1),t.m(n.parentNode,n)),s[0]?o&&(T(),k(o,1,1,()=>{o=null}),O()):o?(o.p(s,_),_&1&&b(o,1)):(o=ee(s),o.c(),b(o,1),o.m(l.parentNode,l));const d={};_&8&&(d.data=s[3]),_&524288&&(d.$$scope={dirty:_,ctx:s}),a.$set(d)},i(s){f||(b(t),b(o),b(a.$$.fragment,s),f=!0)},o(s){k(t),k(o),k(a.$$.fragment,s),f=!1},d(s){s&&($(n),$(l)),p[e].d(s),o&&o.d(s),W(a,s),u=!1,ce(i)}}}function qe(r,e,t){let n;se(r,ae,m=>t(12,n=m));let l=!0,a=[],f,u=!1,i=0,c=X();function p(m){l||(u||(a.push({id:i++,lngLat:m.lngLat}),t(1,a),d()),u&&a.length>0&&(y(m.lngLat),d()))}function y(m){let J=new H.LngLat(0,-90).distanceTo(new H.LngLat(0,90)),P;a.forEach(j=>{const N=j.lngLat;J>=m.distanceTo(N)&&(P=N,J=m.distanceTo(N))}),P&&t(1,a=a.filter(j=>{const N=j.lngLat;return N.lng!=(P==null?void 0:P.lng)||N.lat!=(P==null?void 0:P.lat)}))}function o(){t(0,l=!1)}function s(){t(0,l=!0),t(1,a=[]),h()}function _(m){m.key==="Shift"&&(u=!0),m.key==="Escape"&&s()}function g(m){m.key==="Shift"&&(u=!1)}function d(){if(a.length<2){h();return}const m=a.map(C=>[C.lngLat.lng,C.lngLat.lat]);t(2,f=Le(m,{})),f.properties&&t(2,f.properties.length=(Me(f)*1e3).toFixed(2),f),t(3,c=JSON.parse(JSON.stringify(f)))}function h(){t(2,f=void 0),t(3,c=X())}le(()=>{n.on("click",p)}),oe(()=>{n.off("click",p)});function fe(m,C){r.$$.not_equal(C.lngLat,m)&&(C.lngLat=m,t(1,a))}return[l,a,f,c,o,s,_,g,d,fe]}class Be extends q{constructor(e){super(),A(this,e,qe,Oe,I,{})}}export{Be as L,Je as a};
