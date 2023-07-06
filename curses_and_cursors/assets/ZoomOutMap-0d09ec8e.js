import{r as de,o as q,n as $,S as D,i as E,s as z,e as b,t as O,j as x,af as fe,f as m,g as v,h as y,ag as ee,l as G,L as I,p as w,ae as be,G as ye,ao as J,c as B,at as te,ap as N,aq as Z,ar as V,z as H,B as he,E as se,D as ve,C as we,J as ke,I as Se,H as Ce,am as ne,K as $e,ab as Le,a3 as pe,a4 as _e,aj as le,au as W,M as me,d as Me,m as Oe,q as Ie,a2 as F,av as Be,u as qe,b as je,aa as ze,w as Fe}from"./maplibre_helpers-bcbba33e.js";function ft(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function pt(s,e){q(s,1,1,()=>{e.delete(s.key)})}function _t(s,e,n,t,l,o,a,r,c,i,u,g){let f=s.length,p=o.length,h=f;const k={};for(;h--;)k[s[h].key]=h;const d=[],_=new Map,A=new Map,Q=[];for(h=p;h--;){const S=g(l,o,h),L=n(S);let M=a.get(L);M?t&&Q.push(()=>M.p(S,e)):(M=i(L,S),M.c()),_.set(L,d[h]=M),L in k&&A.set(L,Math.abs(h-k[L]))}const X=new Set,Y=new Set;function K(S){$(S,1),S.m(r,u),a.set(S.key,S),u=S.first,p--}for(;f&&p;){const S=d[p-1],L=s[f-1],M=S.key,T=L.key;S===L?(u=S.first,f--,p--):_.has(T)?!a.has(M)||X.has(M)?K(S):Y.has(T)?f--:A.get(M)>A.get(T)?(Y.add(M),K(S)):(X.add(T),f--):(c(L,a),f--)}for(;f--;){const S=s[f];_.has(S.key)||c(S,a)}for(;p;)K(d[p-1]);return de(Q),d}function De(s){let e,n,t,l,o,a,r;return{c(){e=b("div"),n=O(`Basemap:
  `),t=b("select"),l=b("option"),l.textContent="Streets",o=b("option"),o.textContent="Satellite",l.__value="streets",x(l,l.__value),o.__value="hybrid",x(o,o.__value),s[0]===void 0&&fe(()=>s[2].call(t)),m(e,"class","svelte-1tbnm6i")},m(c,i){v(c,e,i),y(e,n),y(e,t),y(t,l),y(t,o),ee(t,s[0],!0),a||(r=[G(t,"change",s[2]),G(t,"change",s[1])],a=!0)},p(c,[i]){i&1&&ee(t,c[0])},i:I,o:I,d(c){c&&w(e),a=!1,de(r)}}}function Ee(s,e,n){let{style:t}=e;function l(){let a=new URLSearchParams(window.location.search);a.set("style",t);let r=`${window.location.pathname}?${a.toString()}${window.location.hash}`;window.location.href=r}function o(){t=be(this),n(0,t)}return s.$$set=a=>{"style"in a&&n(0,t=a.style)},[t,l,o]}class mt extends D{constructor(e){super(),E(this,e,Ee,De,z,{style:0})}}const P=[];function j(s,e=I){let n;const t=new Set;function l(r){if(z(s,r)&&(s=r,n)){const c=!P.length;for(const i of t)i[1](),P.push(i,s);if(c){for(let i=0;i<P.length;i+=2)P[i][0](P[i+1]);P.length=0}}}function o(r){l(r(s))}function a(r,c=I){const i=[r,c];return t.add(i),t.size===1&&(n=e(l,o)||I),r(s),()=>{t.delete(i),t.size===0&&n&&(n(),n=null)}}return{set:l,update:o,subscribe:a}}function Pe(s){return s=="google"||s=="bing"}const U=j(null),gt=j(null),ge=j(ye()),Re=j(null),Ge=j(null),Te=j(null),We=j(null),Je=j(Ne());Je.subscribe(s=>window.localStorage.setItem("userSettings",JSON.stringify(s)));const bt=j("edit-attribute"),yt=j(!1);function ht(s){let e=new Set;for(let t of s.features)e.add(t.id);let n=e.size+1;for(;e.has(n);)n++;return n}function vt(s){console.log(`Deleting intervention ${s}`),ge.update(e=>(e.features=e.features.filter(n=>n.id!=s),e)),Re.set(null),Ge.set(null),Te.set(null),We.set(null)}function Ne(){let s={streetViewImagery:"google",avoidDoublingBack:!1};try{let e=JSON.parse(window.localStorage.getItem("userSettings")||"{}");Pe(e.streetViewImagery)&&(s.streetViewImagery=e.streetViewImagery),typeof e.avoidDoublingBack=="boolean"&&(s.avoidDoublingBack=e.avoidDoublingBack)}catch(e){console.log(`Couldn't parse userSettings from local storage: ${e}`)}return s}const Ze=s=>({}),oe=s=>({}),Ve=s=>({}),ae=s=>({});function He(s){let e,n,t,l,o,a,r,c,i,u,g;const f=s[3].sidebar,p=J(f,s,s[2],ae),h=s[3].main,k=J(h,s,s[2],oe);return{c(){e=b("div"),n=b("aside"),t=b("div"),p&&p.c(),l=B(),o=b("button"),o.textContent="→",r=B(),c=b("main"),k&&k.c(),m(t,"class","sidebar-content content-container svelte-ect12w"),m(o,"type","button"),m(o,"class","sidebar-toggle rounded-rect svelte-ect12w"),m(n,"class",a=te(s[0]?"":"collapsed")+" svelte-ect12w"),m(c,"class","svelte-ect12w"),m(e,"class","overall-layout svelte-ect12w")},m(d,_){v(d,e,_),y(e,n),y(n,t),p&&p.m(t,null),y(n,l),y(n,o),y(e,r),y(e,c),k&&k.m(c,null),i=!0,u||(g=G(o,"click",s[1]),u=!0)},p(d,[_]){p&&p.p&&(!i||_&4)&&N(p,f,d,d[2],i?V(f,d[2],_,Ve):Z(d[2]),ae),(!i||_&1&&a!==(a=te(d[0]?"":"collapsed")+" svelte-ect12w"))&&m(n,"class",a),k&&k.p&&(!i||_&4)&&N(k,h,d,d[2],i?V(h,d[2],_,Ze):Z(d[2]),oe)},i(d){i||($(p,d),$(k,d),i=!0)},o(d){q(p,d),q(k,d),i=!1},d(d){d&&w(e),p&&p.d(d),k&&k.d(d),u=!1,g()}}}function Ue(s,e,n){let{$$slots:t={},$$scope:l}=e,o=!0;function a(){n(0,o=!o)}return s.$$set=r=>{"$$scope"in r&&n(2,l=r.$$scope)},[o,a,l,t]}class wt extends D{constructor(e){super(),E(this,e,Ue,He,z,{})}}const C={area:"#e41a1c",route:"#377eb8",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},Ae=10,ie=10;let R="interventions";function Ke(s,e,n){let t,l;H(s,U,u=>n(1,t=u)),H(s,ge,u=>n(2,l=u));let{schema:o}=e;he(t,R,l);const a=["match",["get","intervention_type"],"area",C.area,"route",C.route,"crossing",C.crossing,"other",C.other,"white"],r=["match",["get","reference_type",["get","planning"]],"preapp",C.preapp,"outline",C.outline,"reserved matters",C["reserved matters"],"local plan",C["local plan"],"white"],c=["!=","hide_while_editing",!0];return se(t,{id:"interventions-points",source:R,filter:["all",ke,c,["!=","endpoint",!0]],color:a,radius:Ae}),ve(t,{id:"interventions-lines",source:R,filter:["all",Se,c],color:a,width:ie}),se(t,{id:"interventions-lines-endpoints",source:R,filter:["==","endpoint",!0],radius:.5*ie,opacity:0,strokeColor:C.lineEndpointColor,strokeWidth:2}),we(t,{id:"interventions-polygons",source:R,filter:["all",Ce,c],color:o=="planning"?r:a,opacity:.5}),s.$$set=u=>{"schema"in u&&n(0,o=u.schema)},s.$$.update=()=>{if(s.$$.dirty&6){let u=JSON.parse(JSON.stringify(l)),g=[];for(let f of u.features)if(f.geometry.type=="LineString"&&!f.properties.hide_while_editing)for(let p of[f.geometry.coordinates[0],f.geometry.coordinates[f.geometry.coordinates.length-1]])g.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:p}});u.features=u.features.concat(g),t.getSource(R).setData(u)}},[o,t,l]}class kt extends D{constructor(e){super(),E(this,e,Ke,null,z,{schema:0})}}function Qe(s){const e=s-1;return e*e*e+1}function re(s,{delay:e=0,duration:n=400,easing:t=Qe,axis:l="y"}={}){const o=getComputedStyle(s),a=+o.opacity,r=l==="y"?"height":"width",c=parseFloat(o[r]),i=l==="y"?["top","bottom"]:["left","right"],u=i.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),g=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),p=parseFloat(o[`margin${u[0]}`]),h=parseFloat(o[`margin${u[1]}`]),k=parseFloat(o[`border${u[0]}Width`]),d=parseFloat(o[`border${u[1]}Width`]);return{delay:e,duration:n,easing:t,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*a};${r}: ${_*c}px;padding-${i[0]}: ${_*g}px;padding-${i[1]}: ${_*f}px;margin-${i[0]}: ${_*p}px;margin-${i[1]}: ${_*h}px;border-${i[0]}-width: ${_*k}px;border-${i[1]}-width: ${_*d}px;`}}function ce(s){let e,n,t;const l=s[3].default,o=J(l,s,s[2],null);return{c(){e=b("div"),o&&o.c()},m(a,r){v(a,e,r),o&&o.m(e,null),t=!0},p(a,r){o&&o.p&&(!t||r&4)&&N(o,l,a,a[2],t?V(l,a[2],r,null):Z(a[2]),null)},i(a){t||($(o,a),a&&fe(()=>{t&&(n||(n=le(e,re,{duration:100},!0)),n.run(1))}),t=!0)},o(a){q(o,a),a&&(n||(n=le(e,re,{duration:100},!1)),n.run(0)),t=!1},d(a){a&&w(e),o&&o.d(a),a&&n&&n.end()}}}function Xe(s){let e,n,t,l,o,a,r,c,i,u,g=s[0]&&ce(s);return{c(){e=b("button"),n=ne("svg"),t=ne("path"),l=B(),o=O(s[1]),a=B(),g&&g.c(),r=$e(),m(t,"d","M9 5l7 7-7 7"),m(n,"style","tran"),m(n,"width","20"),m(n,"height","20"),m(n,"fill","none"),m(n,"stroke-linecap","round"),m(n,"stroke-linejoin","round"),m(n,"stroke-width","2"),m(n,"viewBox","0 0 24 24"),m(n,"stroke","currentColor"),m(n,"class","svelte-una9lq"),m(e,"aria-expanded",s[0]),m(e,"class","svelte-una9lq")},m(f,p){v(f,e,p),y(e,n),y(n,t),y(e,l),y(e,o),v(f,a,p),g&&g.m(f,p),v(f,r,p),c=!0,i||(u=G(e,"click",s[4]),i=!0)},p(f,[p]){(!c||p&2)&&Le(o,f[1]),(!c||p&1)&&m(e,"aria-expanded",f[0]),f[0]?g?(g.p(f,p),p&1&&$(g,1)):(g=ce(f),g.c(),$(g,1),g.m(r.parentNode,r)):g&&(pe(),q(g,1,1,()=>{g=null}),_e())},i(f){c||($(g),c=!0)},o(f){q(g),c=!1},d(f){f&&(w(e),w(a),w(r)),g&&g.d(f),i=!1,u()}}}function Ye(s,e,n){let{$$slots:t={},$$scope:l}=e,{label:o}=e,{open:a=!1}=e;const r=()=>n(0,a=!a);return s.$$set=c=>{"label"in c&&n(1,o=c.label),"open"in c&&n(0,a=c.open),"$$scope"in c&&n(2,l=c.$$scope)},[a,o,l,t,r]}class xe extends D{constructor(e){super(),E(this,e,Ye,Xe,z,{label:1,open:0})}}function et(s,e,n){let t;H(s,U,i=>n(2,t=i));let{layers:l}=e,{contents:o}=e,a=new W.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",r),t.on("mouseout",c),me(()=>{t.off("mousemove",r),t.off("mouseout",c),a.remove()});function r(i){if(!l.every(g=>t.getLayer(g))){a.remove();return}let u=t.queryRenderedFeatures(i.point,{layers:l});u.length>0?a.setLngLat(i.lngLat).setHTML(o(u[0].properties)).addTo(t):a.remove()}function c(){a.remove()}return s.$$set=i=>{"layers"in i&&n(0,l=i.layers),"contents"in i&&n(1,o=i.contents)},[l,o]}class St extends D{constructor(e){super(),E(this,e,et,null,z,{layers:0,contents:1})}}function tt(s){let e,n,t,l,o,a,r,c,i,u,g,f,p,h,k;return{c(){e=b("li"),n=b("span"),t=O("Areas"),l=B(),o=b("li"),a=b("span"),r=O("Routes"),c=B(),i=b("li"),u=b("span"),g=O("Crossings"),f=B(),p=b("li"),h=b("span"),k=O("Other"),m(n,"class","svelte-l42ea0"),F(n,"background",C.area),m(a,"class","svelte-l42ea0"),F(a,"background",C.route),m(u,"class","svelte-l42ea0"),F(u,"background",C.crossing),m(h,"class","svelte-l42ea0"),F(h,"background",C.other)},m(d,_){v(d,e,_),y(e,n),y(e,t),v(d,l,_),v(d,o,_),y(o,a),y(o,r),v(d,c,_),v(d,i,_),y(i,u),y(i,g),v(d,f,_),v(d,p,_),y(p,h),y(p,k)},p:I,d(d){d&&(w(e),w(l),w(o),w(c),w(i),w(f),w(p))}}}function st(s){let e,n,t,l,o,a,r,c,i,u,g,f,p,h,k;return{c(){e=b("li"),n=b("span"),t=O("Preapp"),l=B(),o=b("li"),a=b("span"),r=O("Outline"),c=B(),i=b("li"),u=b("span"),g=O("Reserved matters"),f=B(),p=b("li"),h=b("span"),k=O("Local plan"),m(n,"class","svelte-l42ea0"),F(n,"background",C.preapp),m(a,"class","svelte-l42ea0"),F(a,"background",C.outline),m(u,"class","svelte-l42ea0"),F(u,"background",C["reserved matters"]),m(h,"class","svelte-l42ea0"),F(h,"background",C["local plan"])},m(d,_){v(d,e,_),y(e,n),y(e,t),v(d,l,_),v(d,o,_),y(o,a),y(o,r),v(d,c,_),v(d,i,_),y(i,u),y(i,g),v(d,f,_),v(d,p,_),y(p,h),y(p,k)},p:I,d(d){d&&(w(e),w(l),w(o),w(c),w(i),w(f),w(p))}}}function nt(s){let e;function n(o,a){return o[0]=="planning"?st:tt}let t=n(s),l=t(s);return{c(){e=b("ul"),l.c()},m(o,a){v(o,e,a),l.m(e,null)},p(o,a){t===(t=n(o))&&l?l.p(o,a):(l.d(1),l=t(o),l&&(l.c(),l.m(e,null)))},d(o){o&&w(e),l.d()}}}function lt(s){let e,n,t;return n=new xe({props:{label:"Objects",open:!0,$$slots:{default:[nt]},$$scope:{ctx:s}}}),{c(){e=b("div"),Me(n.$$.fragment),m(e,"class","svelte-l42ea0")},m(l,o){v(l,e,o),Oe(n,e,null),t=!0},p(l,[o]){const a={};o&3&&(a.$$scope={dirty:o,ctx:l}),n.$set(a)},i(l){t||($(n.$$.fragment,l),t=!0)},o(l){q(n.$$.fragment,l),t=!1},d(l){l&&w(e),Ie(n)}}}function ot(s,e,n){let{schema:t}=e;return s.$$set=l=>{"schema"in l&&n(0,t=l.schema)},[t]}class Ct extends D{constructor(e){super(),E(this,e,ot,lt,z,{schema:0})}}function ue(s){let e;const n=s[4].default,t=J(n,s,s[3],null);return{c(){t&&t.c()},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&8)&&N(t,n,l,l[3],e?V(n,l[3],o,null):Z(l[3]),null)},i(l){e||($(t,l),e=!0)},o(l){q(t,l),e=!1},d(l){t&&t.d(l)}}}function at(s){let e,n,t=s[1]&&ue(s);return{c(){e=b("div"),t&&t.c(),m(e,"class","map svelte-12dpf1u")},m(l,o){v(l,e,o),t&&t.m(e,null),s[5](e),n=!0},p(l,[o]){l[1]?t?(t.p(l,o),o&2&&$(t,1)):(t=ue(l),t.c(),$(t,1),t.m(e,null)):t&&(pe(),q(t,1,1,()=>{t=null}),_e())},i(l){n||($(t),n=!0)},o(l){q(t),n=!1},d(l){l&&w(e),t&&t.d(),s[5](null)}}}function it(s,e,n){let{$$slots:t={},$$scope:l}=e,{style:o}=e,a,r,c=!1;Be("setCamera",!window.location.hash),qe(()=>{a=new W.Map({container:r,style:`https://api.maptiler.com/maps/${o}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),a.addControl(new W.ScaleControl({})),a.addControl(new W.NavigationControl({visualizePitch:!0}),"bottom-right"),a.on("load",()=>{n(1,c=!0),U.set(a)}),new ResizeObserver(()=>{a.resize()}).observe(r)}),me(()=>{a.remove()});function i(u){je[u?"unshift":"push"](()=>{r=u,n(0,r)})}return s.$$set=u=>{"style"in u&&n(2,o=u.style),"$$scope"in u&&n(3,l=u.$$scope)},[r,c,o,l,t,i]}class $t extends D{constructor(e){super(),E(this,e,it,at,z,{style:2})}}const rt="/atip/curses_and_cursors/assets/zoom_out_map-b2e1091a.svg";function ct(s){let e,n,t,l,o;return{c(){e=b("button"),n=b("img"),ze(n.src,t=rt)||m(n,"src",t),m(n,"alt","Zoom to show entire boundary"),m(e,"type","button"),m(e,"title","Zoom to show entire boundary"),m(e,"class","svelte-qzjsqo")},m(a,r){v(a,e,r),y(e,n),l||(o=G(e,"click",s[0]),l=!0)},p:I,i:I,o:I,d(a){a&&w(e),l=!1,o()}}}function ut(s,e,n){let t;H(s,U,a=>n(2,t=a));let{boundaryGeojson:l}=e;function o(){t.fitBounds(Fe(l),{padding:20,animate:!0,duration:500})}return s.$$set=a=>{"boundaryGeojson"in a&&n(1,l=a.boundaryGeojson)},[o,l]}class Lt extends D{constructor(e){super(),E(this,e,ut,ct,z,{boundaryGeojson:1})}}export{mt as B,xe as C,kt as I,wt as L,St as M,Lt as Z,Ge as a,Ae as b,C as c,bt as d,ft as e,Re as f,ge as g,re as h,yt as i,_t as j,pt as k,ie as l,U as m,ht as n,We as o,vt as p,$t as q,gt as r,Te as s,Ct as t,Je as u};
