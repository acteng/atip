import{S as q,i as J,s as O,aU as B,e as C,d as v,h as S,bh as F,az as z,j as L,k as w,w as j,aV as K,aW as Q,aX as V,t as b,n as k,o as $,q as se,C as ae,r as oe,be as G,ao as le,G as ue,g as U,m as N,a1 as H,a2 as I,p as W,I as ce,aH as X,a0 as re,aQ as pe,u as E,D as de,K as _e,b as ge,c as me,l as be,T as ke,U as he,B as Le,ar as Y,ab as $e,a as ie,aR as ye}from"./index-827c4830.js";import{C as we,b as Pe,l as Se}from"./StreetViewTool-597918e9.js";const Ce=r=>({}),Z=r=>({}),Me=r=>({}),R=r=>({});function De(r){let e,t,n,o,a,f,u,i,c,_,y;const l=r[4].sidebar,s=B(l,r,r[3],R),p=r[4].main,g=B(p,r,r[3],Z);return{c(){e=C("div"),t=C("aside"),n=C("div"),s&&s.c(),o=v(),a=C("button"),a.textContent="→",u=v(),i=C("main"),g&&g.c(),S(n,"class","sidebar-content content-container svelte-1n0etgd"),S(a,"type","button"),S(a,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),S(t,"class",f=F(r[1]?"":"collapsed")+" svelte-1n0etgd"),z(t,"--sidebarWidth",r[0]),S(i,"class","svelte-1n0etgd"),S(e,"class","overall-layout svelte-1n0etgd")},m(d,h){L(d,e,h),w(e,t),w(t,n),s&&s.m(n,null),w(t,o),w(t,a),w(e,u),w(e,i),g&&g.m(i,null),c=!0,_||(y=j(a,"click",r[2]),_=!0)},p(d,[h]){s&&s.p&&(!c||h&8)&&K(s,l,d,d[3],c?V(l,d[3],h,Me):Q(d[3]),R),(!c||h&2&&f!==(f=F(d[1]?"":"collapsed")+" svelte-1n0etgd"))&&S(t,"class",f),(!c||h&1)&&z(t,"--sidebarWidth",d[0]),g&&g.p&&(!c||h&8)&&K(g,p,d,d[3],c?V(p,d[3],h,Ce):Q(d[3]),Z)},i(d){c||(b(s,d),b(g,d),c=!0)},o(d){k(s,d),k(g,d),c=!1},d(d){d&&$(e),s&&s.d(d),g&&g.d(d),_=!1,y()}}}function ve(r,e,t){let{$$slots:n={},$$scope:o}=e,{sidebarWidth:a="25rem"}=e,f=!0;function u(){t(1,f=!f)}return r.$$set=i=>{"sidebarWidth"in i&&t(0,a=i.sidebarWidth),"$$scope"in i&&t(3,o=i.$$scope)},[a,f,u,o,n]}class Ae extends q{constructor(e){super(),J(this,e,ve,De,O,{sidebarWidth:0})}}function Ue(r,e,t){let n;se(r,ae,u=>t(3,n=u));let o=null,{markerPosition:a}=e,{markerPositionUpdated:f}=e;return oe(()=>{o=new G.Marker({draggable:!0}).setLngLat(a).addTo(n),o.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),o.on("drag",()=>{t(0,a=o.getLngLat()),f()}),o.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),le(()=>{o&&o.remove()}),r.$$set=u=>{"markerPosition"in u&&t(0,a=u.markerPosition),"markerPositionUpdated"in u&&t(1,f=u.markerPositionUpdated)},[a,f]}class Ne extends q{constructor(e){super(),J(this,e,Ue,null,O,{markerPosition:0,markerPositionUpdated:1})}}function x(r,e,t){const n=r.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function We(r){let e,t;return e=new ie({props:{$$slots:{default:[Te]},$$scope:{ctx:r}}}),e.$on("click",r[5]),{c(){U(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const a={};o&524288&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Ee(r){let e,t;return e=new ie({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),e.$on("click",r[4]),{c(){U(e.$$.fragment)},m(n,o){N(e,n,o),t=!0},p(n,o){const a={};o&524288&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Te(r){let e;return{c(){e=E("Disable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function je(r){let e;return{c(){e=E("Enable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function ee(r){var y;let e,t,n,o=[],a=new Map,f,u,i=r[2]&&((y=r[2].properties)==null?void 0:y.length)&&te(r);t=new we({props:{label:"Help",$$slots:{default:[Ge]},$$scope:{ctx:r}}});let c=X(r[1]);const _=l=>l[16].id;for(let l=0;l<c.length;l+=1){let s=x(r,c,l),p=_(s);a.set(p,o[l]=ne(p,s))}return{c(){i&&i.c(),e=v(),U(t.$$.fragment),n=v();for(let l=0;l<o.length;l+=1)o[l].c();f=re()},m(l,s){i&&i.m(l,s),L(l,e,s),N(t,l,s),L(l,n,s);for(let p=0;p<o.length;p+=1)o[p]&&o[p].m(l,s);L(l,f,s),u=!0},p(l,s){var g;l[2]&&((g=l[2].properties)!=null&&g.length)?i?i.p(l,s):(i=te(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null);const p={};s&524288&&(p.$$scope={dirty:s,ctx:l}),t.$set(p),s&258&&(c=X(l[1]),H(),o=pe(o,s,_,1,l,c,a,f.parentNode,ye,ne,f,x),I())},i(l){if(!u){b(t.$$.fragment,l);for(let s=0;s<c.length;s+=1)b(o[s]);u=!0}},o(l){k(t.$$.fragment,l);for(let s=0;s<o.length;s+=1)k(o[s]);u=!1},d(l){l&&($(e),$(n),$(f)),i&&i.d(l),W(t,l);for(let s=0;s<o.length;s+=1)o[s].d(l)}}}function te(r){var f;let e,t,n=((f=r[2].properties)==null?void 0:f.length)+"",o,a;return{c(){e=C("p"),t=E("Length: "),o=E(n),a=E("m")},m(u,i){L(u,e,i),w(e,t),w(e,o),w(e,a)},p(u,i){var c;i&4&&n!==(n=((c=u[2].properties)==null?void 0:c.length)+"")&&de(o,n)},d(u){u&&$(e)}}}function Ge(r){let e;return{c(){e=C("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){L(t,e,n)},p:_e,d(t){t&&$(e)}}}function ne(r,e){let t,n,o,a;function f(i){e[9](i,e[16])}let u={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(u.markerPosition=e[16].lngLat),n=new Ne({props:u}),ge.push(()=>me(n,"markerPosition",f)),{key:r,first:null,c(){t=re(),U(n.$$.fragment),this.first=t},m(i,c){L(i,t,c),N(n,i,c),a=!0},p(i,c){e=i;const _={};!o&&c&2&&(o=!0,_.markerPosition=e[16].lngLat,be(()=>o=!1)),n.$set(_)},i(i){a||(b(n.$$.fragment,i),a=!0)},o(i){k(n.$$.fragment,i),a=!1},d(i){i&&$(t),W(n,i)}}}function He(r){let e,t;const n=[ke("measurement-line"),{paint:{"line-color":Pe.measuringLine,"line-width":5}}];let o={};for(let a=0;a<n.length;a+=1)o=he(o,n[a]);return e=new Le({props:o}),{c(){U(e.$$.fragment)},m(a,f){N(e,a,f),t=!0},p(a,f){const u={};e.$set(u)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Ie(r){let e,t,n,o,a,f,u,i;const c=[Ee,We],_=[];function y(s,p){return s[0]?0:1}e=y(r),t=_[e]=c[e](r);let l=!r[0]&&ee(r);return a=new ue({props:{data:r[3],$$slots:{default:[He]},$$scope:{ctx:r}}}),{c(){t.c(),n=v(),l&&l.c(),o=v(),U(a.$$.fragment)},m(s,p){_[e].m(s,p),L(s,n,p),l&&l.m(s,p),L(s,o,p),N(a,s,p),f=!0,u||(i=[j(window,"keydown",r[6]),j(window,"keyup",r[7])],u=!0)},p(s,[p]){let g=e;e=y(s),e===g?_[e].p(s,p):(H(),k(_[g],1,1,()=>{_[g]=null}),I(),t=_[e],t?t.p(s,p):(t=_[e]=c[e](s),t.c()),b(t,1),t.m(n.parentNode,n)),s[0]?l&&(H(),k(l,1,1,()=>{l=null}),I()):l?(l.p(s,p),p&1&&b(l,1)):(l=ee(s),l.c(),b(l,1),l.m(o.parentNode,o));const d={};p&8&&(d.data=s[3]),p&524288&&(d.$$scope={dirty:p,ctx:s}),a.$set(d)},i(s){f||(b(t),b(l),b(a.$$.fragment,s),f=!0)},o(s){k(t),k(l),k(a.$$.fragment,s),f=!1},d(s){s&&($(n),$(o)),_[e].d(s),l&&l.d(s),W(a,s),u=!1,ce(i)}}}function qe(r,e,t){let n;se(r,ae,m=>t(12,n=m));let o=!0,a=[],f,u=!1,i=0,c=Y();function _(m){o||(u||(a.push({id:i++,lngLat:m.lngLat}),t(1,a),d()),u&&a.length>0&&(y(m.lngLat),d()))}function y(m){let A=new G.LngLat(0,-90).distanceTo(new G.LngLat(0,90)),P;a.forEach(T=>{const D=T.lngLat;A>=m.distanceTo(D)&&(P=D,A=m.distanceTo(D))}),P&&t(1,a=a.filter(T=>{const D=T.lngLat;return D.lng!=(P==null?void 0:P.lng)||D.lat!=(P==null?void 0:P.lat)}))}function l(){t(0,o=!1)}function s(){t(0,o=!0),t(1,a=[]),h()}function p(m){m.key==="Shift"&&(m.stopPropagation(),u=!0),m.key==="Escape"&&(m.stopPropagation(),s())}function g(m){m.key==="Shift"&&(m.stopPropagation(),u=!1)}function d(){if(a.length<2){h();return}const m=a.map(M=>[M.lngLat.lng,M.lngLat.lat]);t(2,f=$e(m,{})),f.properties&&t(2,f.properties.length=(Se(f)*1e3).toFixed(2),f),t(3,c=JSON.parse(JSON.stringify(f)))}function h(){t(2,f=void 0),t(3,c=Y())}oe(()=>{n.on("click",_)}),le(()=>{n.off("click",_)});function fe(m,M){r.$$.not_equal(M.lngLat,m)&&(M.lngLat=m,t(1,a))}return[o,a,f,c,l,s,p,g,d,fe]}class Be extends q{constructor(e){super(),J(this,e,qe,Ie,O,{})}}export{Be as L,Ae as a};
