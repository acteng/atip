import{S as J,i as O,s as q,J as F,e as M,d as D,h as S,bj as B,K,j as L,k as w,x as G,O as Q,P as Y,Q as Z,t as b,n as k,o as $,q as se,D as ae,u as oe,bg as T,a0 as le,G as ue,g as N,m as U,Z as H,_ as I,p as W,I as ce,a3 as z,Y as re,a4 as pe,v as j,H as de,a8 as _e,b as ge,c as me,l as be,ad as ke,C as he,ao as V,ay as Le,a as ie,a5 as $e}from"./index-15adce66.js";import{f as ye,l as we,d as Pe,a as Se}from"./StreetViewTool-aff042f0.js";const Me=r=>({}),X=r=>({}),Ce=r=>({}),R=r=>({});function ve(r){let e,t,n,o,a,f,u,i,c,_,y;const l=r[4].sidebar,s=F(l,r,r[3],R),p=r[4].main,g=F(p,r,r[3],X);return{c(){e=M("div"),t=M("aside"),n=M("div"),s&&s.c(),o=D(),a=M("button"),a.textContent="→",u=D(),i=M("main"),g&&g.c(),S(n,"class","sidebar-content content-container svelte-1n0etgd"),S(a,"type","button"),S(a,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),S(t,"class",f=B(r[1]?"":"collapsed")+" svelte-1n0etgd"),K(t,"--sidebarWidth",r[0]),S(i,"class","svelte-1n0etgd"),S(e,"class","overall-layout svelte-1n0etgd")},m(d,h){L(d,e,h),w(e,t),w(t,n),s&&s.m(n,null),w(t,o),w(t,a),w(e,u),w(e,i),g&&g.m(i,null),c=!0,_||(y=G(a,"click",r[2]),_=!0)},p(d,[h]){s&&s.p&&(!c||h&8)&&Q(s,l,d,d[3],c?Z(l,d[3],h,Ce):Y(d[3]),R),(!c||h&2&&f!==(f=B(d[1]?"":"collapsed")+" svelte-1n0etgd"))&&S(t,"class",f),(!c||h&1)&&K(t,"--sidebarWidth",d[0]),g&&g.p&&(!c||h&8)&&Q(g,p,d,d[3],c?Z(p,d[3],h,Me):Y(d[3]),X)},i(d){c||(b(s,d),b(g,d),c=!0)},o(d){k(s,d),k(g,d),c=!1},d(d){d&&$(e),s&&s.d(d),g&&g.d(d),_=!1,y()}}}function De(r,e,t){let{$$slots:n={},$$scope:o}=e,{sidebarWidth:a="25rem"}=e,f=!0;function u(){t(1,f=!f)}return r.$$set=i=>{"sidebarWidth"in i&&t(0,a=i.sidebarWidth),"$$scope"in i&&t(3,o=i.$$scope)},[a,f,u,o,n]}class Ae extends J{constructor(e){super(),O(this,e,De,ve,q,{sidebarWidth:0})}}function Ne(r,e,t){let n;se(r,ae,u=>t(3,n=u));let o=null,{markerPosition:a}=e,{markerPositionUpdated:f}=e;return oe(()=>{o=new T.Marker({draggable:!0}).setLngLat(a).addTo(n),o.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),o.on("drag",()=>{t(0,a=o.getLngLat()),f()}),o.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),le(()=>{o&&o.remove()}),r.$$set=u=>{"markerPosition"in u&&t(0,a=u.markerPosition),"markerPositionUpdated"in u&&t(1,f=u.markerPositionUpdated)},[a,f]}class Ue extends J{constructor(e){super(),O(this,e,Ne,null,q,{markerPosition:0,markerPositionUpdated:1})}}function x(r,e,t){const n=r.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function We(r){let e,t;return e=new ie({props:{$$slots:{default:[Ee]},$$scope:{ctx:r}}}),e.$on("click",r[5]),{c(){N(e.$$.fragment)},m(n,o){U(e,n,o),t=!0},p(n,o){const a={};o&524288&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function je(r){let e,t;return e=new ie({props:{$$slots:{default:[Ge]},$$scope:{ctx:r}}}),e.$on("click",r[4]),{c(){N(e.$$.fragment)},m(n,o){U(e,n,o),t=!0},p(n,o){const a={};o&524288&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Ee(r){let e;return{c(){e=j("Disable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function Ge(r){let e;return{c(){e=j("Enable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function ee(r){var y;let e,t,n,o=[],a=new Map,f,u,i=r[2]&&((y=r[2].properties)==null?void 0:y.length)&&te(r);t=new ye({props:{label:"Help",$$slots:{default:[Te]},$$scope:{ctx:r}}});let c=z(r[1]);const _=l=>l[16].id;for(let l=0;l<c.length;l+=1){let s=x(r,c,l),p=_(s);a.set(p,o[l]=ne(p,s))}return{c(){i&&i.c(),e=D(),N(t.$$.fragment),n=D();for(let l=0;l<o.length;l+=1)o[l].c();f=re()},m(l,s){i&&i.m(l,s),L(l,e,s),U(t,l,s),L(l,n,s);for(let p=0;p<o.length;p+=1)o[p]&&o[p].m(l,s);L(l,f,s),u=!0},p(l,s){var g;l[2]&&((g=l[2].properties)!=null&&g.length)?i?i.p(l,s):(i=te(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null);const p={};s&524288&&(p.$$scope={dirty:s,ctx:l}),t.$set(p),s&258&&(c=z(l[1]),H(),o=pe(o,s,_,1,l,c,a,f.parentNode,$e,ne,f,x),I())},i(l){if(!u){b(t.$$.fragment,l);for(let s=0;s<c.length;s+=1)b(o[s]);u=!0}},o(l){k(t.$$.fragment,l);for(let s=0;s<o.length;s+=1)k(o[s]);u=!1},d(l){l&&($(e),$(n),$(f)),i&&i.d(l),W(t,l);for(let s=0;s<o.length;s+=1)o[s].d(l)}}}function te(r){var f;let e,t,n=((f=r[2].properties)==null?void 0:f.length)+"",o,a;return{c(){e=M("p"),t=j("Length: "),o=j(n),a=j("m")},m(u,i){L(u,e,i),w(e,t),w(e,o),w(e,a)},p(u,i){var c;i&4&&n!==(n=((c=u[2].properties)==null?void 0:c.length)+"")&&de(o,n)},d(u){u&&$(e)}}}function Te(r){let e;return{c(){e=M("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){L(t,e,n)},p:_e,d(t){t&&$(e)}}}function ne(r,e){let t,n,o,a;function f(i){e[9](i,e[16])}let u={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(u.markerPosition=e[16].lngLat),n=new Ue({props:u}),ge.push(()=>me(n,"markerPosition",f)),{key:r,first:null,c(){t=re(),N(n.$$.fragment),this.first=t},m(i,c){L(i,t,c),U(n,i,c),a=!0},p(i,c){e=i;const _={};!o&&c&2&&(o=!0,_.markerPosition=e[16].lngLat,be(()=>o=!1)),n.$set(_)},i(i){a||(b(n.$$.fragment,i),a=!0)},o(i){k(n.$$.fragment,i),a=!1},d(i){i&&$(t),W(n,i)}}}function He(r){let e,t;const n=[we("measurement-line"),{paint:{"line-color":Pe.measuringLine,"line-width":5}}];let o={};for(let a=0;a<n.length;a+=1)o=ke(o,n[a]);return e=new he({props:o}),{c(){N(e.$$.fragment)},m(a,f){U(e,a,f),t=!0},p(a,f){const u={};e.$set(u)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Ie(r){let e,t,n,o,a,f,u,i;const c=[je,We],_=[];function y(s,p){return s[0]?0:1}e=y(r),t=_[e]=c[e](r);let l=!r[0]&&ee(r);return a=new ue({props:{data:r[3],$$slots:{default:[He]},$$scope:{ctx:r}}}),{c(){t.c(),n=D(),l&&l.c(),o=D(),N(a.$$.fragment)},m(s,p){_[e].m(s,p),L(s,n,p),l&&l.m(s,p),L(s,o,p),U(a,s,p),f=!0,u||(i=[G(window,"keydown",r[6]),G(window,"keyup",r[7])],u=!0)},p(s,[p]){let g=e;e=y(s),e===g?_[e].p(s,p):(H(),k(_[g],1,1,()=>{_[g]=null}),I(),t=_[e],t?t.p(s,p):(t=_[e]=c[e](s),t.c()),b(t,1),t.m(n.parentNode,n)),s[0]?l&&(H(),k(l,1,1,()=>{l=null}),I()):l?(l.p(s,p),p&1&&b(l,1)):(l=ee(s),l.c(),b(l,1),l.m(o.parentNode,o));const d={};p&8&&(d.data=s[3]),p&524288&&(d.$$scope={dirty:p,ctx:s}),a.$set(d)},i(s){f||(b(t),b(l),b(a.$$.fragment,s),f=!0)},o(s){k(t),k(l),k(a.$$.fragment,s),f=!1},d(s){s&&($(n),$(o)),_[e].d(s),l&&l.d(s),W(a,s),u=!1,ce(i)}}}function Je(r,e,t){let n;se(r,ae,m=>t(12,n=m));let o=!0,a=[],f,u=!1,i=0,c=V();function _(m){o||(u||(a.push({id:i++,lngLat:m.lngLat}),t(1,a),d()),u&&a.length>0&&(y(m.lngLat),d()))}function y(m){let A=new T.LngLat(0,-90).distanceTo(new T.LngLat(0,90)),P;a.forEach(E=>{const v=E.lngLat;A>=m.distanceTo(v)&&(P=v,A=m.distanceTo(v))}),P&&t(1,a=a.filter(E=>{const v=E.lngLat;return v.lng!=(P==null?void 0:P.lng)||v.lat!=(P==null?void 0:P.lat)}))}function l(){t(0,o=!1)}function s(){t(0,o=!0),t(1,a=[]),h()}function p(m){m.key==="Shift"&&(m.stopPropagation(),u=!0),m.key==="Escape"&&(m.stopPropagation(),s())}function g(m){m.key==="Shift"&&(m.stopPropagation(),u=!1)}function d(){if(a.length<2){h();return}const m=a.map(C=>[C.lngLat.lng,C.lngLat.lat]);t(2,f=Le(m,{})),f.properties&&t(2,f.properties.length=(Se(f)*1e3).toFixed(2),f),t(3,c=JSON.parse(JSON.stringify(f)))}function h(){t(2,f=void 0),t(3,c=V())}oe(()=>{n.on("click",_)}),le(()=>{n.off("click",_)});function fe(m,C){r.$$.not_equal(C.lngLat,m)&&(C.lngLat=m,t(1,a))}return[o,a,f,c,l,s,p,g,d,fe]}class Fe extends J{constructor(e){super(),O(this,e,Je,Ie,q,{})}}export{Fe as L,Ae as a};
