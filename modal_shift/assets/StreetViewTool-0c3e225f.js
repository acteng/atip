import{S as G,i as j,s as q,aL as Z,e as I,d as V,h as M,b7 as z,aA as Q,j as w,k as C,w as U,aM as X,aN as Y,aO as x,t as b,n as $,o as h,q as E,B as J,r as fe,b4 as A,a0 as F,G as me,g as L,m as S,_ as T,$ as W,p as P,ar as be,aB as ee,Z as K,aH as $e,u as D,C as ke,H as we,b as ce,c as ue,l as pe,O as he,P as ye,x as te,ah as Le,a as O,aI as Se,aw as ne,ax as Pe,R as Ce}from"./index-ce2abb51.js";import{C as _e,b as de,L as ve,l as Ve,i as Me,h as Ie,S as De}from"./camera_cursor-72ea7a93.js";const Ne=l=>({}),se=l=>({}),He=l=>({}),re=l=>({});function Ue(l){let e,t,n,s,r,c,p,f,_,i,g;const a=l[4].sidebar,o=Z(a,l,l[3],re),u=l[4].main,m=Z(u,l,l[3],se);return{c(){e=I("div"),t=I("aside"),n=I("div"),o&&o.c(),s=V(),r=I("button"),r.textContent="→",p=V(),f=I("main"),m&&m.c(),M(n,"class","sidebar-content content-container svelte-1n0etgd"),M(r,"type","button"),M(r,"class","sidebar-toggle rounded-rect svelte-1n0etgd"),M(t,"class",c=z(l[1]?"":"collapsed")+" svelte-1n0etgd"),Q(t,"--sidebarWidth",l[0]),M(f,"class","svelte-1n0etgd"),M(e,"class","overall-layout svelte-1n0etgd")},m(d,y){w(d,e,y),C(e,t),C(t,n),o&&o.m(n,null),C(t,s),C(t,r),C(e,p),C(e,f),m&&m.m(f,null),_=!0,i||(g=U(r,"click",l[2]),i=!0)},p(d,[y]){o&&o.p&&(!_||y&8)&&X(o,a,d,d[3],_?x(a,d[3],y,He):Y(d[3]),re),(!_||y&2&&c!==(c=z(d[1]?"":"collapsed")+" svelte-1n0etgd"))&&M(t,"class",c),(!_||y&1)&&Q(t,"--sidebarWidth",d[0]),m&&m.p&&(!_||y&8)&&X(m,u,d,d[3],_?x(u,d[3],y,Ne):Y(d[3]),se)},i(d){_||(b(o,d),b(m,d),_=!0)},o(d){$(o,d),$(m,d),_=!1},d(d){d&&h(e),o&&o.d(d),m&&m.d(d),i=!1,g()}}}function Ee(l,e,t){let{$$slots:n={},$$scope:s}=e,{sidebarWidth:r="25rem"}=e,c=!0;function p(){t(1,c=!c)}return l.$$set=f=>{"sidebarWidth"in f&&t(0,r=f.sidebarWidth),"$$scope"in f&&t(3,s=f.$$scope)},[r,c,p,s,n]}class nt extends G{constructor(e){super(),j(this,e,Ee,Ue,q,{sidebarWidth:0})}}function Te(l,e,t){let n;E(l,J,p=>t(3,n=p));let s=null,{markerPosition:r}=e,{markerPositionUpdated:c}=e;return fe(()=>{s=new A.Marker({draggable:!0}).setLngLat(r).addTo(n),s.on("dragstart",()=>{n.getCanvas().style.cursor="grabbing"}),s.on("drag",()=>{t(0,r=s.getLngLat()),c()}),s.on("dragend",()=>{n.getCanvas().style.cursor="inherit"})}),F(()=>{s&&s.remove()}),l.$$set=p=>{"markerPosition"in p&&t(0,r=p.markerPosition),"markerPositionUpdated"in p&&t(1,c=p.markerPositionUpdated)},[r,c]}class We extends G{constructor(e){super(),j(this,e,Te,null,q,{markerPosition:0,markerPositionUpdated:1})}}function le(l,e,t){const n=l.slice();return n[16]=e[t],n[17]=e,n[18]=t,n}function Ge(l){let e,t;return e=new O({props:{$$slots:{default:[qe]},$$scope:{ctx:l}}}),e.$on("click",l[5]),{c(){L(e.$$.fragment)},m(n,s){S(e,n,s),t=!0},p(n,s){const r={};s&524288&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function je(l){let e,t;return e=new O({props:{$$slots:{default:[Oe]},$$scope:{ctx:l}}}),e.$on("click",l[4]),{c(){L(e.$$.fragment)},m(n,s){S(e,n,s),t=!0},p(n,s){const r={};s&524288&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function qe(l){let e;return{c(){e=D("Disable Line Measurement Tool")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function Oe(l){let e;return{c(){e=D("Enable Line Measurement Tool")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function oe(l){var g;let e,t,n,s=[],r=new Map,c,p,f=l[2]&&((g=l[2].properties)==null?void 0:g.length)&&ae(l);t=new _e({props:{label:"Help",$$slots:{default:[Be]},$$scope:{ctx:l}}});let _=ee(l[1]);const i=a=>a[16].id;for(let a=0;a<_.length;a+=1){let o=le(l,_,a),u=i(o);r.set(u,s[a]=ie(u,o))}return{c(){f&&f.c(),e=V(),L(t.$$.fragment),n=V();for(let a=0;a<s.length;a+=1)s[a].c();c=K()},m(a,o){f&&f.m(a,o),w(a,e,o),S(t,a,o),w(a,n,o);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(a,o);w(a,c,o),p=!0},p(a,o){var m;a[2]&&((m=a[2].properties)!=null&&m.length)?f?f.p(a,o):(f=ae(a),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null);const u={};o&524288&&(u.$$scope={dirty:o,ctx:a}),t.$set(u),o&258&&(_=ee(a[1]),T(),s=$e(s,o,i,1,a,_,r,c.parentNode,Se,ie,c,le),W())},i(a){if(!p){b(t.$$.fragment,a);for(let o=0;o<_.length;o+=1)b(s[o]);p=!0}},o(a){$(t.$$.fragment,a);for(let o=0;o<s.length;o+=1)$(s[o]);p=!1},d(a){a&&(h(e),h(n),h(c)),f&&f.d(a),P(t,a);for(let o=0;o<s.length;o+=1)s[o].d(a)}}}function ae(l){var c;let e,t,n=((c=l[2].properties)==null?void 0:c.length)+"",s,r;return{c(){e=I("p"),t=D("Length: "),s=D(n),r=D("m")},m(p,f){w(p,e,f),C(e,t),C(e,s),C(e,r)},p(p,f){var _;f&4&&n!==(n=((_=p[2].properties)==null?void 0:_.length)+"")&&ke(s,n)},d(p){p&&h(e)}}}function Be(l){let e;return{c(){e=I("ul"),e.innerHTML=`<li><b>Click</b>
        on the map to place a new waypoint</li> <li><b>Click and Drag</b>
        an existing waypoint to move it</li> <li><b>Hold shift and click on</b>
        an existing waypoint to delete it</li> <li>Press <b>Escape</b>
        to exit this mode</li>`},m(t,n){w(t,e,n)},p:we,d(t){t&&h(e)}}}function ie(l,e){let t,n,s,r;function c(f){e[9](f,e[16])}let p={markerPositionUpdated:e[8]};return e[16].lngLat!==void 0&&(p.markerPosition=e[16].lngLat),n=new We({props:p}),ce.push(()=>ue(n,"markerPosition",c)),{key:l,first:null,c(){t=K(),L(n.$$.fragment),this.first=t},m(f,_){w(f,t,_),S(n,f,_),r=!0},p(f,_){e=f;const i={};!s&&_&2&&(s=!0,i.markerPosition=e[16].lngLat,pe(()=>s=!1)),n.$set(i)},i(f){r||(b(n.$$.fragment,f),r=!0)},o(f){$(n.$$.fragment,f),r=!1},d(f){f&&h(t),P(n,f)}}}function Ae(l){let e,t;const n=[he("measurement-line"),{paint:{"line-color":de.measuringLine,"line-width":5}}];let s={};for(let r=0;r<n.length;r+=1)s=ye(s,n[r]);return e=new ve({props:s}),{c(){L(e.$$.fragment)},m(r,c){S(e,r,c),t=!0},p(r,c){const p={};e.$set(p)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){P(e,r)}}}function Je(l){let e,t,n,s,r,c,p,f;const _=[je,Ge],i=[];function g(o,u){return o[0]?0:1}e=g(l),t=i[e]=_[e](l);let a=!l[0]&&oe(l);return r=new me({props:{data:l[3],$$slots:{default:[Ae]},$$scope:{ctx:l}}}),{c(){t.c(),n=V(),a&&a.c(),s=V(),L(r.$$.fragment)},m(o,u){i[e].m(o,u),w(o,n,u),a&&a.m(o,u),w(o,s,u),S(r,o,u),c=!0,p||(f=[U(window,"keydown",l[6]),U(window,"keyup",l[7])],p=!0)},p(o,[u]){let m=e;e=g(o),e===m?i[e].p(o,u):(T(),$(i[m],1,1,()=>{i[m]=null}),W(),t=i[e],t?t.p(o,u):(t=i[e]=_[e](o),t.c()),b(t,1),t.m(n.parentNode,n)),o[0]?a&&(T(),$(a,1,1,()=>{a=null}),W()):a?(a.p(o,u),u&1&&b(a,1)):(a=oe(o),a.c(),b(a,1),a.m(s.parentNode,s));const d={};u&8&&(d.data=o[3]),u&524288&&(d.$$scope={dirty:u,ctx:o}),r.$set(d)},i(o){c||(b(t),b(a),b(r.$$.fragment,o),c=!0)},o(o){$(t),$(a),$(r.$$.fragment,o),c=!1},d(o){o&&(h(n),h(s)),i[e].d(o),a&&a.d(o),P(r,o),p=!1,be(f)}}}function Fe(l,e,t){let n;E(l,J,k=>t(12,n=k));let s=!0,r=[],c,p=!1,f=0,_=te();function i(k){s||(p||(r.push({id:f++,lngLat:k.lngLat}),t(1,r),d()),p&&r.length>0&&(g(k.lngLat),d()))}function g(k){let R=new A.LngLat(0,-90).distanceTo(new A.LngLat(0,90)),v;r.forEach(B=>{const H=B.lngLat;R>=k.distanceTo(H)&&(v=H,R=k.distanceTo(H))}),v&&t(1,r=r.filter(B=>{const H=B.lngLat;return H.lng!=(v==null?void 0:v.lng)||H.lat!=(v==null?void 0:v.lat)}))}function a(){t(0,s=!1)}function o(){t(0,s=!0),t(1,r=[]),y()}function u(k){k.key==="Shift"&&(p=!0),k.key==="Escape"&&o()}function m(k){k.key==="Shift"&&(p=!1)}function d(){if(r.length<2){y();return}const k=r.map(N=>[N.lngLat.lng,N.lngLat.lat]);t(2,c=Le(k,{})),c.properties&&t(2,c.properties.length=(Ve(c)*1e3).toFixed(2),c),t(3,_=JSON.parse(JSON.stringify(c)))}function y(){t(2,c=void 0),t(3,_=te())}fe(()=>{n.on("click",i)}),F(()=>{n.off("click",i)});function ge(k,N){l.$$.not_equal(N.lngLat,k)&&(N.lngLat=k,t(1,r))}return[s,r,c,_,a,o,u,m,d,ge]}class st extends G{constructor(e){super(),j(this,e,Fe,Je,q,{})}}const{window:Ke}=Me;function Re(l){let e,t;return e=new O({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),e.$on("click",l[5]),{c(){L(e.$$.fragment)},m(n,s){S(e,n,s),t=!0},p(n,s){const r={};s&2048&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ze(l){let e,t,n,s,r,c,p;e=new O({props:{$$slots:{default:[Qe]},$$scope:{ctx:l}}}),e.$on("click",l[3]);function f(i){l[4](i)}let _={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return l[1].streetViewImagery!==void 0&&(_.value=l[1].streetViewImagery),n=new Ce({props:_}),ce.push(()=>ue(n,"value",f)),c=new _e({props:{label:"Help",$$slots:{default:[Xe]},$$scope:{ctx:l}}}),{c(){L(e.$$.fragment),t=V(),L(n.$$.fragment),r=V(),L(c.$$.fragment)},m(i,g){S(e,i,g),w(i,t,g),S(n,i,g),w(i,r,g),S(c,i,g),p=!0},p(i,g){const a={};g&2048&&(a.$$scope={dirty:g,ctx:i}),e.$set(a);const o={};!s&&g&2&&(s=!0,o.value=i[1].streetViewImagery,pe(()=>s=!1)),n.$set(o);const u={};g&2048&&(u.$$scope={dirty:g,ctx:i}),c.$set(u)},i(i){p||(b(e.$$.fragment,i),b(n.$$.fragment,i),b(c.$$.fragment,i),p=!0)},o(i){$(e.$$.fragment,i),$(n.$$.fragment,i),$(c.$$.fragment,i),p=!1},d(i){i&&(h(t),h(r)),P(e,i),P(n,i),P(c,i)}}}function ze(l){let e;return{c(){e=D("Enable Street View")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function Qe(l){let e;return{c(){e=D("Disable Street View")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function Xe(l){let e,t;return e=new De({}),{c(){L(e.$$.fragment)},m(n,s){S(e,n,s),t=!0},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function Ye(l){let e,t,n,s,r,c;const p=[Ze,Re],f=[];function _(i,g){return i[0]?0:1}return e=_(l),t=f[e]=p[e](l),{c(){t.c(),n=K()},m(i,g){f[e].m(i,g),w(i,n,g),s=!0,r||(c=U(Ke,"keydown",l[2]),r=!0)},p(i,[g]){let a=e;e=_(i),e===a?f[e].p(i,g):(T(),$(f[a],1,1,()=>{f[a]=null}),W(),t=f[e],t?t.p(i,g):(t=f[e]=p[e](i),t.c()),b(t,1),t.m(n.parentNode,n))},i(i){s||(b(t),s=!0)},o(i){$(t),s=!1},d(i){i&&h(n),f[e].d(i),r=!1,c()}}}function xe(l,e,t){let n,s;E(l,ne,u=>t(1,n=u)),E(l,J,u=>t(7,s=u));let{enabled:r}=e,c=[];function p(){s.on("click",_),s.getCanvas().style.cursor=`url(${Ie}), auto`,c=Pe();for(let u of c)u.setProperty(s,"line-color",de.streetview)}function f(){s.off("click",_),s.getCanvas().style.cursor="inherit";for(let u of c)u.returnToDefaultPaintValues(s);c=[]}F(f);function _(u){if(!r)return;let m=u.lngLat.lng,d=u.lngLat.lat;n.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${d},${m}&cbp=11,0,0,0,0`,"_blank"):n.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${d}~${m}&style=x`,"_blank")}function i(u){r&&u.key=="Escape"&&t(0,r=!1)}const g=()=>t(0,r=!1);function a(u){l.$$.not_equal(n.streetViewImagery,u)&&(n.streetViewImagery=u,ne.set(n))}const o=()=>t(0,r=!0);return l.$$set=u=>{"enabled"in u&&t(0,r=u.enabled)},l.$$.update=()=>{l.$$.dirty&1&&(r?p():f())},[r,n,i,g,a,o]}class rt extends G{constructor(e){super(),j(this,e,xe,Ye,q,{enabled:0})}}export{st as L,rt as S,nt as a};
