import{S as J,i as O,s as q,J as F,e as M,d as v,h as S,bl as Z,K as B,j as L,k as w,x as G,O as K,P as Q,Q as z,t as b,n as k,o as $,q as se,D as ae,u as le,bi as T,a8 as oe,G as ue,g as N,m as U,a6 as H,a7 as I,p as W,I as ce,aS as V,a5 as ie,aZ as pe,v as E,H as _e,Z as de,b as ge,c as me,l as be,a2 as ke,a3 as he,C as Le,aD as X,ao as $e,a as re,a_ as ye}from"./index-fa6b01da.js";import{e as we,b as Pe,l as Se}from"./StreetViewTool-00973426.js";const Me=i=>({}),Y=i=>({}),Ce=i=>({}),R=i=>({});function De(i){let e,t,n,l,a,f,u,r,c,d,y;const o=i[4].sidebar,s=F(o,i,i[3],R),p=i[4].main,g=F(p,i,i[3],Y);return{c(){e=M("div"),t=M("aside"),n=M("div"),s&&s.c(),l=v(),a=M("button"),a.textContent="→",u=v(),r=M("main"),g&&g.c(),S(n,"class","sidebar-content content-container svelte-1n0etgd"),S(a,"type","button"),S(a,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),S(t,"class",f=Z(i[1]?"":"collapsed")+" svelte-1n0etgd"),B(t,"--sidebarWidth",i[0]),S(r,"class","svelte-1n0etgd"),S(e,"class","overall-layout svelte-1n0etgd")},m(_,h){L(_,e,h),w(e,t),w(t,n),s&&s.m(n,null),w(t,l),w(t,a),w(e,u),w(e,r),g&&g.m(r,null),c=!0,d||(y=G(a,"click",i[2]),d=!0)},p(_,[h]){s&&s.p&&(!c||h&8)&&K(s,o,_,_[3],c?z(o,_[3],h,Ce):Q(_[3]),R),(!c||h&2&&f!==(f=Z(_[1]?"":"collapsed")+" svelte-1n0etgd"))&&S(t,"class",f),(!c||h&1)&&B(t,"--sidebarWidth",_[0]),g&&g.p&&(!c||h&8)&&K(g,p,_,_[3],c?z(p,_[3],h,Me):Q(_[3]),Y)},i(_){c||(b(s,_),b(g,_),c=!0)},o(_){k(s,_),k(g,_),c=!1},d(_){_&&$(e),s&&s.d(_),g&&g.d(_),d=!1,y()}}}function ve(i,e,t){let{$$slots:n={},$$scope:l}=e,{sidebarWidth:a="25rem"}=e,f=!0;function u(){t(1,f=!f)}return i.$$set=r=>{"sidebarWidth"in r&&t(0,a=r.sidebarWidth),"$$scope"in r&&t(3,l=r.$$scope)},[a,f,u,l,n]}class Ae extends J{constructor(e){super(),O(this,e,ve,De,q,{sidebarWidth:0})}}function Ne(i,e,t){let n;se(i,ae,u=>t(3,n=u));let l=null,{markerPosition:a}=e,{markerPositionUpdated:f}=e;return le(()=>{l=new T.Marker({draggable:!0}).setLngLat(a).addTo(n),l.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),l.on("drag",()=>{t(0,a=l.getLngLat()),f()}),l.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),oe(()=>{l&&l.remove()}),i.$$set=u=>{"markerPosition"in u&&t(0,a=u.markerPosition),"markerPositionUpdated"in u&&t(1,f=u.markerPositionUpdated)},[a,f]}class Ue extends J{constructor(e){super(),O(this,e,Ne,null,q,{markerPosition:0,markerPositionUpdated:1})}}function x(i,e,t){const n=i.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function We(i){let e,t;return e=new re({props:{$$slots:{default:[je]},$$scope:{ctx:i}}}),e.$on("click",i[5]),{c(){N(e.$$.fragment)},m(n,l){U(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Ee(i){let e,t;return e=new re({props:{$$slots:{default:[Ge]},$$scope:{ctx:i}}}),e.$on("click",i[4]),{c(){N(e.$$.fragment)},m(n,l){U(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function je(i){let e;return{c(){e=E("Disable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function Ge(i){let e;return{c(){e=E("Enable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function ee(i){var y;let e,t,n,l=[],a=new Map,f,u,r=i[2]&&((y=i[2].properties)==null?void 0:y.length)&&te(i);t=new we({props:{label:"Help",$$slots:{default:[Te]},$$scope:{ctx:i}}});let c=V(i[1]);const d=o=>o[16].id;for(let o=0;o<c.length;o+=1){let s=x(i,c,o),p=d(s);a.set(p,l[o]=ne(p,s))}return{c(){r&&r.c(),e=v(),N(t.$$.fragment),n=v();for(let o=0;o<l.length;o+=1)l[o].c();f=ie()},m(o,s){r&&r.m(o,s),L(o,e,s),U(t,o,s),L(o,n,s);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(o,s);L(o,f,s),u=!0},p(o,s){var g;o[2]&&((g=o[2].properties)!=null&&g.length)?r?r.p(o,s):(r=te(o),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null);const p={};s&524288&&(p.$$scope={dirty:s,ctx:o}),t.$set(p),s&258&&(c=V(o[1]),H(),l=pe(l,s,d,1,o,c,a,f.parentNode,ye,ne,f,x),I())},i(o){if(!u){b(t.$$.fragment,o);for(let s=0;s<c.length;s+=1)b(l[s]);u=!0}},o(o){k(t.$$.fragment,o);for(let s=0;s<l.length;s+=1)k(l[s]);u=!1},d(o){o&&($(e),$(n),$(f)),r&&r.d(o),W(t,o);for(let s=0;s<l.length;s+=1)l[s].d(o)}}}function te(i){var f;let e,t,n=((f=i[2].properties)==null?void 0:f.length)+"",l,a;return{c(){e=M("p"),t=E("Length: "),l=E(n),a=E("m")},m(u,r){L(u,e,r),w(e,t),w(e,l),w(e,a)},p(u,r){var c;r&4&&n!==(n=((c=u[2].properties)==null?void 0:c.length)+"")&&_e(l,n)},d(u){u&&$(e)}}}function Te(i){let e;return{c(){e=M("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){L(t,e,n)},p:de,d(t){t&&$(e)}}}function ne(i,e){let t,n,l,a;function f(r){e[9](r,e[16])}let u={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(u.markerPosition=e[16].lngLat),n=new Ue({props:u}),ge.push(()=>me(n,"markerPosition",f)),{key:i,first:null,c(){t=ie(),N(n.$$.fragment),this.first=t},m(r,c){L(r,t,c),U(n,r,c),a=!0},p(r,c){e=r;const d={};!l&&c&2&&(l=!0,d.markerPosition=e[16].lngLat,be(()=>l=!1)),n.$set(d)},i(r){a||(b(n.$$.fragment,r),a=!0)},o(r){k(n.$$.fragment,r),a=!1},d(r){r&&$(t),W(n,r)}}}function He(i){let e,t;const n=[ke("measurement-line"),{paint:{"line-color":Pe.measuringLine,"line-width":5}}];let l={};for(let a=0;a<n.length;a+=1)l=he(l,n[a]);return e=new Le({props:l}),{c(){N(e.$$.fragment)},m(a,f){U(e,a,f),t=!0},p(a,f){const u={};e.$set(u)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Ie(i){let e,t,n,l,a,f,u,r;const c=[Ee,We],d=[];function y(s,p){return s[0]?0:1}e=y(i),t=d[e]=c[e](i);let o=!i[0]&&ee(i);return a=new ue({props:{data:i[3],$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){t.c(),n=v(),o&&o.c(),l=v(),N(a.$$.fragment)},m(s,p){d[e].m(s,p),L(s,n,p),o&&o.m(s,p),L(s,l,p),U(a,s,p),f=!0,u||(r=[G(window,"keydown",i[6]),G(window,"keyup",i[7])],u=!0)},p(s,[p]){let g=e;e=y(s),e===g?d[e].p(s,p):(H(),k(d[g],1,1,()=>{d[g]=null}),I(),t=d[e],t?t.p(s,p):(t=d[e]=c[e](s),t.c()),b(t,1),t.m(n.parentNode,n)),s[0]?o&&(H(),k(o,1,1,()=>{o=null}),I()):o?(o.p(s,p),p&1&&b(o,1)):(o=ee(s),o.c(),b(o,1),o.m(l.parentNode,l));const _={};p&8&&(_.data=s[3]),p&524288&&(_.$$scope={dirty:p,ctx:s}),a.$set(_)},i(s){f||(b(t),b(o),b(a.$$.fragment,s),f=!0)},o(s){k(t),k(o),k(a.$$.fragment,s),f=!1},d(s){s&&($(n),$(l)),d[e].d(s),o&&o.d(s),W(a,s),u=!1,ce(r)}}}function Je(i,e,t){let n;se(i,ae,m=>t(12,n=m));let l=!0,a=[],f,u=!1,r=0,c=X();function d(m){l||(u||(a.push({id:r++,lngLat:m.lngLat}),t(1,a),_()),u&&a.length>0&&(y(m.lngLat),_()))}function y(m){let A=new T.LngLat(0,-90).distanceTo(new T.LngLat(0,90)),P;a.forEach(j=>{const D=j.lngLat;A>=m.distanceTo(D)&&(P=D,A=m.distanceTo(D))}),P&&t(1,a=a.filter(j=>{const D=j.lngLat;return D.lng!=(P==null?void 0:P.lng)||D.lat!=(P==null?void 0:P.lat)}))}function o(){t(0,l=!1)}function s(){t(0,l=!0),t(1,a=[]),h()}function p(m){m.key==="Shift"&&(m.stopPropagation(),u=!0),m.key==="Escape"&&(m.stopPropagation(),s())}function g(m){m.key==="Shift"&&(m.stopPropagation(),u=!1)}function _(){if(a.length<2){h();return}const m=a.map(C=>[C.lngLat.lng,C.lngLat.lat]);t(2,f=$e(m,{})),f.properties&&t(2,f.properties.length=(Se(f)*1e3).toFixed(2),f),t(3,c=JSON.parse(JSON.stringify(f)))}function h(){t(2,f=void 0),t(3,c=X())}le(()=>{n.on("click",d)}),oe(()=>{n.off("click",d)});function fe(m,C){i.$$.not_equal(C.lngLat,m)&&(C.lngLat=m,t(1,a))}return[l,a,f,c,o,s,p,g,_,fe]}class Fe extends J{constructor(e){super(),O(this,e,Je,Ie,q,{})}}export{Fe as L,Ae as a};
