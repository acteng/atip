import{S as J,i as q,s as O,X as B,e as C,d as v,h as S,b8 as F,$ as K,j as L,k as w,w as G,Y as X,Z as Y,_ as Z,t as b,n as k,o as $,q as se,ae,r as le,b5 as T,P as oe,G as ue,g as N,m as W,J as H,K as I,p as U,H as ce,a7 as z,I as re,a8 as pe,u as E,D as de,W as _e,b as ge,c as me,l as be,ah as ke,C as he,as as Q,aB as Le,a as ie,a9 as $e}from"./index-afaf626e.js";import{C as ye,l as we,d as Pe,a as Se}from"./StreetViewTool-b31feabc.js";const Ce=r=>({}),V=r=>({}),Me=r=>({}),R=r=>({});function De(r){let e,t,n,l,a,f,u,i,c,_,y;const o=r[4].sidebar,s=B(o,r,r[3],R),p=r[4].main,g=B(p,r,r[3],V);return{c(){e=C("div"),t=C("aside"),n=C("div"),s&&s.c(),l=v(),a=C("button"),a.textContent="→",u=v(),i=C("main"),g&&g.c(),S(n,"class","sidebar-content content-container svelte-1n0etgd"),S(a,"type","button"),S(a,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),S(t,"class",f=F(r[1]?"":"collapsed")+" svelte-1n0etgd"),K(t,"--sidebarWidth",r[0]),S(i,"class","svelte-1n0etgd"),S(e,"class","overall-layout svelte-1n0etgd")},m(d,h){L(d,e,h),w(e,t),w(t,n),s&&s.m(n,null),w(t,l),w(t,a),w(e,u),w(e,i),g&&g.m(i,null),c=!0,_||(y=G(a,"click",r[2]),_=!0)},p(d,[h]){s&&s.p&&(!c||h&8)&&X(s,o,d,d[3],c?Z(o,d[3],h,Me):Y(d[3]),R),(!c||h&2&&f!==(f=F(d[1]?"":"collapsed")+" svelte-1n0etgd"))&&S(t,"class",f),(!c||h&1)&&K(t,"--sidebarWidth",d[0]),g&&g.p&&(!c||h&8)&&X(g,p,d,d[3],c?Z(p,d[3],h,Ce):Y(d[3]),V)},i(d){c||(b(s,d),b(g,d),c=!0)},o(d){k(s,d),k(g,d),c=!1},d(d){d&&$(e),s&&s.d(d),g&&g.d(d),_=!1,y()}}}function ve(r,e,t){let{$$slots:n={},$$scope:l}=e,{sidebarWidth:a="25rem"}=e,f=!0;function u(){t(1,f=!f)}return r.$$set=i=>{"sidebarWidth"in i&&t(0,a=i.sidebarWidth),"$$scope"in i&&t(3,l=i.$$scope)},[a,f,u,l,n]}class Ae extends J{constructor(e){super(),q(this,e,ve,De,O,{sidebarWidth:0})}}function Ne(r,e,t){let n;se(r,ae,u=>t(3,n=u));let l=null,{markerPosition:a}=e,{markerPositionUpdated:f}=e;return le(()=>{l=new T.Marker({draggable:!0}).setLngLat(a).addTo(n),l.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),l.on("drag",()=>{t(0,a=l.getLngLat()),f()}),l.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),oe(()=>{l&&l.remove()}),r.$$set=u=>{"markerPosition"in u&&t(0,a=u.markerPosition),"markerPositionUpdated"in u&&t(1,f=u.markerPositionUpdated)},[a,f]}class We extends J{constructor(e){super(),q(this,e,Ne,null,O,{markerPosition:0,markerPositionUpdated:1})}}function x(r,e,t){const n=r.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function Ue(r){let e,t;return e=new ie({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),e.$on("click",r[5]),{c(){N(e.$$.fragment)},m(n,l){W(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){U(e,n)}}}function Ee(r){let e,t;return e=new ie({props:{$$slots:{default:[Ge]},$$scope:{ctx:r}}}),e.$on("click",r[4]),{c(){N(e.$$.fragment)},m(n,l){W(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){U(e,n)}}}function je(r){let e;return{c(){e=E("Disable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function Ge(r){let e;return{c(){e=E("Enable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function ee(r){var y;let e,t,n,l=[],a=new Map,f,u,i=r[2]&&((y=r[2].properties)==null?void 0:y.length)&&te(r);t=new ye({props:{label:"Help",$$slots:{default:[Te]},$$scope:{ctx:r}}});let c=z(r[1]);const _=o=>o[16].id;for(let o=0;o<c.length;o+=1){let s=x(r,c,o),p=_(s);a.set(p,l[o]=ne(p,s))}return{c(){i&&i.c(),e=v(),N(t.$$.fragment),n=v();for(let o=0;o<l.length;o+=1)l[o].c();f=re()},m(o,s){i&&i.m(o,s),L(o,e,s),W(t,o,s),L(o,n,s);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(o,s);L(o,f,s),u=!0},p(o,s){var g;o[2]&&((g=o[2].properties)!=null&&g.length)?i?i.p(o,s):(i=te(o),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null);const p={};s&524288&&(p.$$scope={dirty:s,ctx:o}),t.$set(p),s&258&&(c=z(o[1]),H(),l=pe(l,s,_,1,o,c,a,f.parentNode,$e,ne,f,x),I())},i(o){if(!u){b(t.$$.fragment,o);for(let s=0;s<c.length;s+=1)b(l[s]);u=!0}},o(o){k(t.$$.fragment,o);for(let s=0;s<l.length;s+=1)k(l[s]);u=!1},d(o){o&&($(e),$(n),$(f)),i&&i.d(o),U(t,o);for(let s=0;s<l.length;s+=1)l[s].d(o)}}}function te(r){var f;let e,t,n=((f=r[2].properties)==null?void 0:f.length)+"",l,a;return{c(){e=C("p"),t=E("Length: "),l=E(n),a=E("m")},m(u,i){L(u,e,i),w(e,t),w(e,l),w(e,a)},p(u,i){var c;i&4&&n!==(n=((c=u[2].properties)==null?void 0:c.length)+"")&&de(l,n)},d(u){u&&$(e)}}}function Te(r){let e;return{c(){e=C("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){L(t,e,n)},p:_e,d(t){t&&$(e)}}}function ne(r,e){let t,n,l,a;function f(i){e[9](i,e[16])}let u={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(u.markerPosition=e[16].lngLat),n=new We({props:u}),ge.push(()=>me(n,"markerPosition",f)),{key:r,first:null,c(){t=re(),N(n.$$.fragment),this.first=t},m(i,c){L(i,t,c),W(n,i,c),a=!0},p(i,c){e=i;const _={};!l&&c&2&&(l=!0,_.markerPosition=e[16].lngLat,be(()=>l=!1)),n.$set(_)},i(i){a||(b(n.$$.fragment,i),a=!0)},o(i){k(n.$$.fragment,i),a=!1},d(i){i&&$(t),U(n,i)}}}function He(r){let e,t;const n=[we("measurement-line"),{paint:{"line-color":Pe.measuringLine,"line-width":5}}];let l={};for(let a=0;a<n.length;a+=1)l=ke(l,n[a]);return e=new he({props:l}),{c(){N(e.$$.fragment)},m(a,f){W(e,a,f),t=!0},p(a,f){const u={};e.$set(u)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){U(e,a)}}}function Ie(r){let e,t,n,l,a,f,u,i;const c=[Ee,Ue],_=[];function y(s,p){return s[0]?0:1}e=y(r),t=_[e]=c[e](r);let o=!r[0]&&ee(r);return a=new ue({props:{data:r[3],$$slots:{default:[He]},$$scope:{ctx:r}}}),{c(){t.c(),n=v(),o&&o.c(),l=v(),N(a.$$.fragment)},m(s,p){_[e].m(s,p),L(s,n,p),o&&o.m(s,p),L(s,l,p),W(a,s,p),f=!0,u||(i=[G(window,"keydown",r[6]),G(window,"keyup",r[7])],u=!0)},p(s,[p]){let g=e;e=y(s),e===g?_[e].p(s,p):(H(),k(_[g],1,1,()=>{_[g]=null}),I(),t=_[e],t?t.p(s,p):(t=_[e]=c[e](s),t.c()),b(t,1),t.m(n.parentNode,n)),s[0]?o&&(H(),k(o,1,1,()=>{o=null}),I()):o?(o.p(s,p),p&1&&b(o,1)):(o=ee(s),o.c(),b(o,1),o.m(l.parentNode,l));const d={};p&8&&(d.data=s[3]),p&524288&&(d.$$scope={dirty:p,ctx:s}),a.$set(d)},i(s){f||(b(t),b(o),b(a.$$.fragment,s),f=!0)},o(s){k(t),k(o),k(a.$$.fragment,s),f=!1},d(s){s&&($(n),$(l)),_[e].d(s),o&&o.d(s),U(a,s),u=!1,ce(i)}}}function Je(r,e,t){let n;se(r,ae,m=>t(12,n=m));let l=!0,a=[],f,u=!1,i=0,c=Q();function _(m){l||(u||(a.push({id:i++,lngLat:m.lngLat}),t(1,a),d()),u&&a.length>0&&(y(m.lngLat),d()))}function y(m){let A=new T.LngLat(0,-90).distanceTo(new T.LngLat(0,90)),P;a.forEach(j=>{const D=j.lngLat;A>=m.distanceTo(D)&&(P=D,A=m.distanceTo(D))}),P&&t(1,a=a.filter(j=>{const D=j.lngLat;return D.lng!=(P==null?void 0:P.lng)||D.lat!=(P==null?void 0:P.lat)}))}function o(){t(0,l=!1)}function s(){t(0,l=!0),t(1,a=[]),h()}function p(m){m.key==="Shift"&&(m.stopPropagation(),u=!0),m.key==="Escape"&&(m.stopPropagation(),s())}function g(m){m.key==="Shift"&&(m.stopPropagation(),u=!1)}function d(){if(a.length<2){h();return}const m=a.map(M=>[M.lngLat.lng,M.lngLat.lat]);t(2,f=Le(m,{})),f.properties&&t(2,f.properties.length=(Se(f)*1e3).toFixed(2),f),t(3,c=JSON.parse(JSON.stringify(f)))}function h(){t(2,f=void 0),t(3,c=Q())}le(()=>{n.on("click",_)}),oe(()=>{n.off("click",_)});function fe(m,M){r.$$.not_equal(M.lngLat,m)&&(M.lngLat=m,t(1,a))}return[l,a,f,c,o,s,p,g,d,fe]}class Be extends J{constructor(e){super(),q(this,e,Je,Ie,O,{})}}export{Be as L,Ae as a};
