import{S as O,i as q,s as A,aS as B,e as M,d as v,h as S,bf as F,aA as Q,j as L,k as w,w as j,aT as V,aU as z,aV as K,t as b,n as k,o as $,q as se,C as ae,r as le,bc as G,am as oe,G as ue,g as N,m as U,$ as H,a0 as I,p as W,ax as ce,aH as X,_ as re,aO as pe,u as E,D as _e,I as de,b as ge,c as me,l as be,P as ke,Q as he,B as Le,ap as Y,a9 as $e,a as ie,aP as ye}from"./index-791fb757.js";import{e as we,b as Pe,l as Se}from"./StreetViewTool-d2b6ebcf.js";const Me=r=>({}),Z=r=>({}),Ce=r=>({}),R=r=>({});function De(r){let e,t,n,l,a,f,u,i,c,d,y;const o=r[4].sidebar,s=B(o,r,r[3],R),p=r[4].main,g=B(p,r,r[3],Z);return{c(){e=M("div"),t=M("aside"),n=M("div"),s&&s.c(),l=v(),a=M("button"),a.textContent="→",u=v(),i=M("main"),g&&g.c(),S(n,"class","sidebar-content content-container svelte-1n0etgd"),S(a,"type","button"),S(a,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),S(t,"class",f=F(r[1]?"":"collapsed")+" svelte-1n0etgd"),Q(t,"--sidebarWidth",r[0]),S(i,"class","svelte-1n0etgd"),S(e,"class","overall-layout svelte-1n0etgd")},m(_,h){L(_,e,h),w(e,t),w(t,n),s&&s.m(n,null),w(t,l),w(t,a),w(e,u),w(e,i),g&&g.m(i,null),c=!0,d||(y=j(a,"click",r[2]),d=!0)},p(_,[h]){s&&s.p&&(!c||h&8)&&V(s,o,_,_[3],c?K(o,_[3],h,Ce):z(_[3]),R),(!c||h&2&&f!==(f=F(_[1]?"":"collapsed")+" svelte-1n0etgd"))&&S(t,"class",f),(!c||h&1)&&Q(t,"--sidebarWidth",_[0]),g&&g.p&&(!c||h&8)&&V(g,p,_,_[3],c?K(p,_[3],h,Me):z(_[3]),Z)},i(_){c||(b(s,_),b(g,_),c=!0)},o(_){k(s,_),k(g,_),c=!1},d(_){_&&$(e),s&&s.d(_),g&&g.d(_),d=!1,y()}}}function ve(r,e,t){let{$$slots:n={},$$scope:l}=e,{sidebarWidth:a="25rem"}=e,f=!0;function u(){t(1,f=!f)}return r.$$set=i=>{"sidebarWidth"in i&&t(0,a=i.sidebarWidth),"$$scope"in i&&t(3,l=i.$$scope)},[a,f,u,l,n]}class Je extends O{constructor(e){super(),q(this,e,ve,De,A,{sidebarWidth:0})}}function Ne(r,e,t){let n;se(r,ae,u=>t(3,n=u));let l=null,{markerPosition:a}=e,{markerPositionUpdated:f}=e;return le(()=>{l=new G.Marker({draggable:!0}).setLngLat(a).addTo(n),l.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),l.on("drag",()=>{t(0,a=l.getLngLat()),f()}),l.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),oe(()=>{l&&l.remove()}),r.$$set=u=>{"markerPosition"in u&&t(0,a=u.markerPosition),"markerPositionUpdated"in u&&t(1,f=u.markerPositionUpdated)},[a,f]}class Ue extends O{constructor(e){super(),q(this,e,Ne,null,A,{markerPosition:0,markerPositionUpdated:1})}}function x(r,e,t){const n=r.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function We(r){let e,t;return e=new ie({props:{$$slots:{default:[Te]},$$scope:{ctx:r}}}),e.$on("click",r[5]),{c(){N(e.$$.fragment)},m(n,l){U(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Ee(r){let e,t;return e=new ie({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),e.$on("click",r[4]),{c(){N(e.$$.fragment)},m(n,l){U(e,n,l),t=!0},p(n,l){const a={};l&524288&&(a.$$scope={dirty:l,ctx:n}),e.$set(a)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){W(e,n)}}}function Te(r){let e;return{c(){e=E("Disable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function je(r){let e;return{c(){e=E("Enable Line Measurement Tool")},m(t,n){L(t,e,n)},d(t){t&&$(e)}}}function ee(r){var y;let e,t,n,l=[],a=new Map,f,u,i=r[2]&&((y=r[2].properties)==null?void 0:y.length)&&te(r);t=new we({props:{label:"Help",$$slots:{default:[Ge]},$$scope:{ctx:r}}});let c=X(r[1]);const d=o=>o[16].id;for(let o=0;o<c.length;o+=1){let s=x(r,c,o),p=d(s);a.set(p,l[o]=ne(p,s))}return{c(){i&&i.c(),e=v(),N(t.$$.fragment),n=v();for(let o=0;o<l.length;o+=1)l[o].c();f=re()},m(o,s){i&&i.m(o,s),L(o,e,s),U(t,o,s),L(o,n,s);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(o,s);L(o,f,s),u=!0},p(o,s){var g;o[2]&&((g=o[2].properties)!=null&&g.length)?i?i.p(o,s):(i=te(o),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null);const p={};s&524288&&(p.$$scope={dirty:s,ctx:o}),t.$set(p),s&258&&(c=X(o[1]),H(),l=pe(l,s,d,1,o,c,a,f.parentNode,ye,ne,f,x),I())},i(o){if(!u){b(t.$$.fragment,o);for(let s=0;s<c.length;s+=1)b(l[s]);u=!0}},o(o){k(t.$$.fragment,o);for(let s=0;s<l.length;s+=1)k(l[s]);u=!1},d(o){o&&($(e),$(n),$(f)),i&&i.d(o),W(t,o);for(let s=0;s<l.length;s+=1)l[s].d(o)}}}function te(r){var f;let e,t,n=((f=r[2].properties)==null?void 0:f.length)+"",l,a;return{c(){e=M("p"),t=E("Length: "),l=E(n),a=E("m")},m(u,i){L(u,e,i),w(e,t),w(e,l),w(e,a)},p(u,i){var c;i&4&&n!==(n=((c=u[2].properties)==null?void 0:c.length)+"")&&_e(l,n)},d(u){u&&$(e)}}}function Ge(r){let e;return{c(){e=M("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){L(t,e,n)},p:de,d(t){t&&$(e)}}}function ne(r,e){let t,n,l,a;function f(i){e[9](i,e[16])}let u={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(u.markerPosition=e[16].lngLat),n=new Ue({props:u}),ge.push(()=>me(n,"markerPosition",f)),{key:r,first:null,c(){t=re(),N(n.$$.fragment),this.first=t},m(i,c){L(i,t,c),U(n,i,c),a=!0},p(i,c){e=i;const d={};!l&&c&2&&(l=!0,d.markerPosition=e[16].lngLat,be(()=>l=!1)),n.$set(d)},i(i){a||(b(n.$$.fragment,i),a=!0)},o(i){k(n.$$.fragment,i),a=!1},d(i){i&&$(t),W(n,i)}}}function He(r){let e,t;const n=[ke("measurement-line"),{paint:{"line-color":Pe.measuringLine,"line-width":5}}];let l={};for(let a=0;a<n.length;a+=1)l=he(l,n[a]);return e=new Le({props:l}),{c(){N(e.$$.fragment)},m(a,f){U(e,a,f),t=!0},p(a,f){const u={};e.$set(u)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){W(e,a)}}}function Ie(r){let e,t,n,l,a,f,u,i;const c=[Ee,We],d=[];function y(s,p){return s[0]?0:1}e=y(r),t=d[e]=c[e](r);let o=!r[0]&&ee(r);return a=new ue({props:{data:r[3],$$slots:{default:[He]},$$scope:{ctx:r}}}),{c(){t.c(),n=v(),o&&o.c(),l=v(),N(a.$$.fragment)},m(s,p){d[e].m(s,p),L(s,n,p),o&&o.m(s,p),L(s,l,p),U(a,s,p),f=!0,u||(i=[j(window,"keydown",r[6]),j(window,"keyup",r[7])],u=!0)},p(s,[p]){let g=e;e=y(s),e===g?d[e].p(s,p):(H(),k(d[g],1,1,()=>{d[g]=null}),I(),t=d[e],t?t.p(s,p):(t=d[e]=c[e](s),t.c()),b(t,1),t.m(n.parentNode,n)),s[0]?o&&(H(),k(o,1,1,()=>{o=null}),I()):o?(o.p(s,p),p&1&&b(o,1)):(o=ee(s),o.c(),b(o,1),o.m(l.parentNode,l));const _={};p&8&&(_.data=s[3]),p&524288&&(_.$$scope={dirty:p,ctx:s}),a.$set(_)},i(s){f||(b(t),b(o),b(a.$$.fragment,s),f=!0)},o(s){k(t),k(o),k(a.$$.fragment,s),f=!1},d(s){s&&($(n),$(l)),d[e].d(s),o&&o.d(s),W(a,s),u=!1,ce(i)}}}function Oe(r,e,t){let n;se(r,ae,m=>t(12,n=m));let l=!0,a=[],f,u=!1,i=0,c=Y();function d(m){l||(u||(a.push({id:i++,lngLat:m.lngLat}),t(1,a),_()),u&&a.length>0&&(y(m.lngLat),_()))}function y(m){let J=new G.LngLat(0,-90).distanceTo(new G.LngLat(0,90)),P;a.forEach(T=>{const D=T.lngLat;J>=m.distanceTo(D)&&(P=D,J=m.distanceTo(D))}),P&&t(1,a=a.filter(T=>{const D=T.lngLat;return D.lng!=(P==null?void 0:P.lng)||D.lat!=(P==null?void 0:P.lat)}))}function o(){t(0,l=!1)}function s(){t(0,l=!0),t(1,a=[]),h()}function p(m){m.key==="Shift"&&(m.stopPropagation(),u=!0),m.key==="Escape"&&(m.stopPropagation(),s())}function g(m){m.key==="Shift"&&(m.stopPropagation(),u=!1)}function _(){if(a.length<2){h();return}const m=a.map(C=>[C.lngLat.lng,C.lngLat.lat]);t(2,f=$e(m,{})),f.properties&&t(2,f.properties.length=(Se(f)*1e3).toFixed(2),f),t(3,c=JSON.parse(JSON.stringify(f)))}function h(){t(2,f=void 0),t(3,c=Y())}le(()=>{n.on("click",d)}),oe(()=>{n.off("click",d)});function fe(m,C){r.$$.not_equal(C.lngLat,m)&&(C.lngLat=m,t(1,a))}return[l,a,f,c,o,s,p,g,_,fe]}class Be extends O{constructor(e){super(),q(this,e,Oe,Ie,A,{})}}export{Be as L,Je as a};
