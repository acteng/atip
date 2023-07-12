import{v as pe,q as B,p as $,S as j,i as P,s as F,e as h,t as O,g as ee,h as _e,f as m,j as v,k as y,l as te,n as R,P as I,r as w,A as be,K as ve,aq as W,c as q,av as se,ar as J,as as Z,at as A,D as V,G as we,J as ne,I as le,H as ke,N as Se,M as Ce,L as oe,ao as ie,O as $e,x as Le,a9 as me,aa as ge,al as ae,y as N,Q as he,d as Me,m as Oe,u as Ie,a8 as z,aw as qe,w as Be,b as De,ag as Fe,z as ze}from"./maplibre_helpers-ba9572ec.js";function ft(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function pt(s,e){B(s,1,1,()=>{e.delete(s.key)})}function _t(s,e,n,t,l,o,i,r,c,a,u,g){let f=s.length,p=o.length,b=f;const k={};for(;b--;)k[s[b].key]=b;const d=[],_=new Map,U=new Map,X=[];for(b=p;b--;){const S=g(l,o,b),L=n(S);let M=i.get(L);M?t&&X.push(()=>M.p(S,e)):(M=a(L,S),M.c()),_.set(L,d[b]=M),L in k&&U.set(L,Math.abs(b-k[L]))}const Y=new Set,x=new Set;function K(S){$(S,1),S.m(r,u),i.set(S.key,S),u=S.first,p--}for(;f&&p;){const S=d[p-1],L=s[f-1],M=S.key,G=L.key;S===L?(u=S.first,f--,p--):_.has(G)?!i.has(M)||Y.has(M)?K(S):x.has(G)?f--:U.get(M)>U.get(G)?(x.add(M),K(S)):(Y.add(G),f--):(c(L,i),f--)}for(;f--;){const S=s[f];_.has(S.key)||c(S,i)}for(;p;)K(d[p-1]);return pe(X),d}function je(s){let e,n,t,l,o,i,r;return{c(){e=h("div"),n=O(`Basemap:
  `),t=h("select"),l=h("option"),l.textContent="Streets",o=h("option"),o.textContent="Satellite",l.__value="streets",ee(l,l.__value),o.__value="hybrid",ee(o,o.__value),s[0]===void 0&&_e(()=>s[2].call(t)),m(e,"class","svelte-1tbnm6i")},m(c,a){v(c,e,a),y(e,n),y(e,t),y(t,l),y(t,o),te(t,s[0],!0),i||(r=[R(t,"change",s[2]),R(t,"change",s[1])],i=!0)},p(c,[a]){a&1&&te(t,c[0])},i:I,o:I,d(c){c&&w(e),i=!1,pe(r)}}}function Pe(s,e,n){let{style:t}=e;function l(){let i=new URLSearchParams(window.location.search);i.set("style",t);let r=`${window.location.pathname}?${i.toString()}${window.location.hash}`;window.location.href=r}function o(){t=be(this),n(0,t)}return s.$$set=i=>{"style"in i&&n(0,t=i.style)},[t,l,o]}class mt extends j{constructor(e){super(),P(this,e,Pe,je,F,{style:0})}}const T=[];function D(s,e=I){let n;const t=new Set;function l(r){if(F(s,r)&&(s=r,n)){const c=!T.length;for(const a of t)a[1](),T.push(a,s);if(c){for(let a=0;a<T.length;a+=2)T[a][0](T[a+1]);T.length=0}}}function o(r){l(r(s))}function i(r,c=I){const a=[r,c];return t.add(a),t.size===1&&(n=e(l,o)||I),r(s),()=>{t.delete(a),t.size===0&&n&&(n(),n=null)}}return{set:l,update:o,subscribe:i}}function Ee(s){return s=="google"||s=="bing"}function gt(s){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[s]}const H=D(null),ht=D(null),ye=D(ve()),Te=D(null),Re=D(null),Ge=D(null),Ne=D(null),We=D(Je());We.subscribe(s=>window.localStorage.setItem("userSettings",JSON.stringify(s)));const yt=D("edit-attribute"),bt=D(!1);function vt(s){let e=new Set;for(let t of s.features)e.add(t.id);let n=e.size+1;for(;e.has(n);)n++;return n}function wt(s){console.log(`Deleting intervention ${s}`),ye.update(e=>(e.features=e.features.filter(n=>n.id!=s),e)),Te.set(null),Re.set(null),Ge.set(null),Ne.set(null)}function Je(){let s={streetViewImagery:"google",avoidDoublingBack:!1};try{let e=JSON.parse(window.localStorage.getItem("userSettings")||"{}");Ee(e.streetViewImagery)&&(s.streetViewImagery=e.streetViewImagery),typeof e.avoidDoublingBack=="boolean"&&(s.avoidDoublingBack=e.avoidDoublingBack)}catch(e){console.log(`Couldn't parse userSettings from local storage: ${e}`)}return s}const Ze=s=>({}),re=s=>({}),Ae=s=>({}),ce=s=>({});function Ve(s){let e,n,t,l,o,i,r,c,a,u,g;const f=s[3].sidebar,p=W(f,s,s[2],ce),b=s[3].main,k=W(b,s,s[2],re);return{c(){e=h("div"),n=h("aside"),t=h("div"),p&&p.c(),l=q(),o=h("button"),o.textContent="→",r=q(),c=h("main"),k&&k.c(),m(t,"class","sidebar-content content-container svelte-ect12w"),m(o,"type","button"),m(o,"class","sidebar-toggle rounded-rect svelte-ect12w"),m(n,"class",i=se(s[0]?"":"collapsed")+" svelte-ect12w"),m(c,"class","svelte-ect12w"),m(e,"class","overall-layout svelte-ect12w")},m(d,_){v(d,e,_),y(e,n),y(n,t),p&&p.m(t,null),y(n,l),y(n,o),y(e,r),y(e,c),k&&k.m(c,null),a=!0,u||(g=R(o,"click",s[1]),u=!0)},p(d,[_]){p&&p.p&&(!a||_&4)&&J(p,f,d,d[2],a?A(f,d[2],_,Ae):Z(d[2]),ce),(!a||_&1&&i!==(i=se(d[0]?"":"collapsed")+" svelte-ect12w"))&&m(n,"class",i),k&&k.p&&(!a||_&4)&&J(k,b,d,d[2],a?A(b,d[2],_,Ze):Z(d[2]),re)},i(d){a||($(p,d),$(k,d),a=!0)},o(d){B(p,d),B(k,d),a=!1},d(d){d&&w(e),p&&p.d(d),k&&k.d(d),u=!1,g()}}}function He(s,e,n){let{$$slots:t={},$$scope:l}=e,o=!0;function i(){n(0,o=!o)}return s.$$set=r=>{"$$scope"in r&&n(2,l=r.$$scope)},[o,i,l,t]}class kt extends j{constructor(e){super(),P(this,e,He,Ve,F,{})}}const C={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},Ue=10,Q=10;let E="interventions";function Ke(s,e,n){let t,l;V(s,H,u=>n(1,t=u)),V(s,ye,u=>n(2,l=u));let{schema:o}=e;we(t,E,l);const i=["match",["get","intervention_type"],"area",C.area,"route",C.route,"crossing",C.crossing,"other",C.other,"white"],r=["match",["get","reference_type",["get","planning"]],"preapp",C.preapp,"outline",C.outline,"reserved matters",C["reserved matters"],"local plan",C["local plan"],"white"],c=["!=","hide_while_editing",!0];return ne(t,{id:"interventions-points",source:E,filter:["all",Se,c,["!=","endpoint",!0]],color:i,radius:Ue}),le(t,{id:"interventions-lines",source:E,filter:["all",Ce,c],color:i,width:Q}),ne(t,{id:"interventions-lines-endpoints",source:E,filter:["==","endpoint",!0],radius:.5*Q,opacity:0,strokeColor:C.lineEndpointColor,strokeWidth:2}),ke(t,{id:"interventions-polygons",source:E,filter:["all",oe,c],color:o=="planning"?r:i,opacity:.2}),le(t,{id:"interventions-polygon-outlines",source:E,filter:["all",oe,c],color:o=="planning"?r:i,opacity:.5,width:.7*Q}),s.$$set=u=>{"schema"in u&&n(0,o=u.schema)},s.$$.update=()=>{if(s.$$.dirty&6){let u=JSON.parse(JSON.stringify(l)),g=[];for(let f of u.features)if(f.geometry.type=="LineString"&&!f.properties.hide_while_editing)for(let p of[f.geometry.coordinates[0],f.geometry.coordinates[f.geometry.coordinates.length-1]])g.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:p}});u.features=u.features.concat(g),t.getSource(E).setData(u)}},[o,t,l]}class St extends j{constructor(e){super(),P(this,e,Ke,null,F,{schema:0})}}function Qe(s){const e=s-1;return e*e*e+1}function ue(s,{delay:e=0,duration:n=400,easing:t=Qe,axis:l="y"}={}){const o=getComputedStyle(s),i=+o.opacity,r=l==="y"?"height":"width",c=parseFloat(o[r]),a=l==="y"?["top","bottom"]:["left","right"],u=a.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),g=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),p=parseFloat(o[`margin${u[0]}`]),b=parseFloat(o[`margin${u[1]}`]),k=parseFloat(o[`border${u[0]}Width`]),d=parseFloat(o[`border${u[1]}Width`]);return{delay:e,duration:n,easing:t,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*i};${r}: ${_*c}px;padding-${a[0]}: ${_*g}px;padding-${a[1]}: ${_*f}px;margin-${a[0]}: ${_*p}px;margin-${a[1]}: ${_*b}px;border-${a[0]}-width: ${_*k}px;border-${a[1]}-width: ${_*d}px;`}}function de(s){let e,n,t;const l=s[3].default,o=W(l,s,s[2],null);return{c(){e=h("div"),o&&o.c()},m(i,r){v(i,e,r),o&&o.m(e,null),t=!0},p(i,r){o&&o.p&&(!t||r&4)&&J(o,l,i,i[2],t?A(l,i[2],r,null):Z(i[2]),null)},i(i){t||($(o,i),i&&_e(()=>{t&&(n||(n=ae(e,ue,{duration:100},!0)),n.run(1))}),t=!0)},o(i){B(o,i),i&&(n||(n=ae(e,ue,{duration:100},!1)),n.run(0)),t=!1},d(i){i&&w(e),o&&o.d(i),i&&n&&n.end()}}}function Xe(s){let e,n,t,l,o,i,r,c,a,u,g=s[0]&&de(s);return{c(){e=h("button"),n=ie("svg"),t=ie("path"),l=q(),o=O(s[1]),i=q(),g&&g.c(),r=$e(),m(t,"d","M9 5l7 7-7 7"),m(n,"style","tran"),m(n,"width","20"),m(n,"height","20"),m(n,"fill","none"),m(n,"stroke-linecap","round"),m(n,"stroke-linejoin","round"),m(n,"stroke-width","2"),m(n,"viewBox","0 0 24 24"),m(n,"stroke","currentColor"),m(n,"class","svelte-una9lq"),m(e,"aria-expanded",s[0]),m(e,"class","svelte-una9lq")},m(f,p){v(f,e,p),y(e,n),y(n,t),y(e,l),y(e,o),v(f,i,p),g&&g.m(f,p),v(f,r,p),c=!0,a||(u=R(e,"click",s[4]),a=!0)},p(f,[p]){(!c||p&2)&&Le(o,f[1]),(!c||p&1)&&m(e,"aria-expanded",f[0]),f[0]?g?(g.p(f,p),p&1&&$(g,1)):(g=de(f),g.c(),$(g,1),g.m(r.parentNode,r)):g&&(me(),B(g,1,1,()=>{g=null}),ge())},i(f){c||($(g),c=!0)},o(f){B(g),c=!1},d(f){f&&(w(e),w(i),w(r)),g&&g.d(f),a=!1,u()}}}function Ye(s,e,n){let{$$slots:t={},$$scope:l}=e,{label:o}=e,{open:i=!1}=e;const r=()=>n(0,i=!i);return s.$$set=c=>{"label"in c&&n(1,o=c.label),"open"in c&&n(0,i=c.open),"$$scope"in c&&n(2,l=c.$$scope)},[i,o,l,t,r]}class xe extends j{constructor(e){super(),P(this,e,Ye,Xe,F,{label:1,open:0})}}function et(s,e,n){let t;V(s,H,a=>n(2,t=a));let{layers:l}=e,{contents:o}=e,i=new N.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",r),t.on("mouseout",c),he(()=>{t.off("mousemove",r),t.off("mouseout",c),i.remove()});function r(a){if(!l.every(g=>t.getLayer(g))){i.remove();return}let u=t.queryRenderedFeatures(a.point,{layers:l});u.length>0?i.setLngLat(a.lngLat).setHTML(o(u[0].properties)).addTo(t):i.remove()}function c(){i.remove()}return s.$$set=a=>{"layers"in a&&n(0,l=a.layers),"contents"in a&&n(1,o=a.contents)},[l,o]}class Ct extends j{constructor(e){super(),P(this,e,et,null,F,{layers:0,contents:1})}}function tt(s){let e,n,t,l,o,i,r,c,a,u,g,f,p,b,k;return{c(){e=h("li"),n=h("span"),t=O("Areas"),l=q(),o=h("li"),i=h("span"),r=O("Routes"),c=q(),a=h("li"),u=h("span"),g=O("Crossings"),f=q(),p=h("li"),b=h("span"),k=O("Other"),m(n,"class","svelte-l42ea0"),z(n,"background",C.area),m(i,"class","svelte-l42ea0"),z(i,"background",C.route),m(u,"class","svelte-l42ea0"),z(u,"background",C.crossing),m(b,"class","svelte-l42ea0"),z(b,"background",C.other)},m(d,_){v(d,e,_),y(e,n),y(e,t),v(d,l,_),v(d,o,_),y(o,i),y(o,r),v(d,c,_),v(d,a,_),y(a,u),y(a,g),v(d,f,_),v(d,p,_),y(p,b),y(p,k)},p:I,d(d){d&&(w(e),w(l),w(o),w(c),w(a),w(f),w(p))}}}function st(s){let e,n,t,l,o,i,r,c,a,u,g,f,p,b,k;return{c(){e=h("li"),n=h("span"),t=O("Preapp"),l=q(),o=h("li"),i=h("span"),r=O("Outline"),c=q(),a=h("li"),u=h("span"),g=O("Reserved matters"),f=q(),p=h("li"),b=h("span"),k=O("Local plan"),m(n,"class","svelte-l42ea0"),z(n,"background",C.preapp),m(i,"class","svelte-l42ea0"),z(i,"background",C.outline),m(u,"class","svelte-l42ea0"),z(u,"background",C["reserved matters"]),m(b,"class","svelte-l42ea0"),z(b,"background",C["local plan"])},m(d,_){v(d,e,_),y(e,n),y(e,t),v(d,l,_),v(d,o,_),y(o,i),y(o,r),v(d,c,_),v(d,a,_),y(a,u),y(a,g),v(d,f,_),v(d,p,_),y(p,b),y(p,k)},p:I,d(d){d&&(w(e),w(l),w(o),w(c),w(a),w(f),w(p))}}}function nt(s){let e;function n(o,i){return o[0]=="planning"?st:tt}let t=n(s),l=t(s);return{c(){e=h("ul"),l.c()},m(o,i){v(o,e,i),l.m(e,null)},p(o,i){t===(t=n(o))&&l?l.p(o,i):(l.d(1),l=t(o),l&&(l.c(),l.m(e,null)))},d(o){o&&w(e),l.d()}}}function lt(s){let e,n,t;return n=new xe({props:{label:"Objects",open:!0,$$slots:{default:[nt]},$$scope:{ctx:s}}}),{c(){e=h("div"),Me(n.$$.fragment),m(e,"class","svelte-l42ea0")},m(l,o){v(l,e,o),Oe(n,e,null),t=!0},p(l,[o]){const i={};o&3&&(i.$$scope={dirty:o,ctx:l}),n.$set(i)},i(l){t||($(n.$$.fragment,l),t=!0)},o(l){B(n.$$.fragment,l),t=!1},d(l){l&&w(e),Ie(n)}}}function ot(s,e,n){let{schema:t}=e;return s.$$set=l=>{"schema"in l&&n(0,t=l.schema)},[t]}class $t extends j{constructor(e){super(),P(this,e,ot,lt,F,{schema:0})}}function fe(s){let e;const n=s[4].default,t=W(n,s,s[3],null);return{c(){t&&t.c()},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&8)&&J(t,n,l,l[3],e?A(n,l[3],o,null):Z(l[3]),null)},i(l){e||($(t,l),e=!0)},o(l){B(t,l),e=!1},d(l){t&&t.d(l)}}}function it(s){let e,n,t=s[1]&&fe(s);return{c(){e=h("div"),t&&t.c(),m(e,"class","map svelte-12dpf1u")},m(l,o){v(l,e,o),t&&t.m(e,null),s[5](e),n=!0},p(l,[o]){l[1]?t?(t.p(l,o),o&2&&$(t,1)):(t=fe(l),t.c(),$(t,1),t.m(e,null)):t&&(me(),B(t,1,1,()=>{t=null}),ge())},i(l){n||($(t),n=!0)},o(l){B(t),n=!1},d(l){l&&w(e),t&&t.d(),s[5](null)}}}function at(s,e,n){let{$$slots:t={},$$scope:l}=e,{style:o}=e,i,r,c=!1;qe("setCamera",!window.location.hash),Be(()=>{i=new N.Map({container:r,style:`https://api.maptiler.com/maps/${o}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),i.addControl(new N.ScaleControl({})),i.addControl(new N.NavigationControl({visualizePitch:!0}),"bottom-right"),i.on("load",()=>{n(1,c=!0),H.set(i)}),new ResizeObserver(()=>{i.resize()}).observe(r)}),he(()=>{i.remove()});function a(u){De[u?"unshift":"push"](()=>{r=u,n(0,r)})}return s.$$set=u=>{"style"in u&&n(2,o=u.style),"$$scope"in u&&n(3,l=u.$$scope)},[r,c,o,l,t,a]}class Lt extends j{constructor(e){super(),P(this,e,at,it,F,{style:2})}}const rt="/atip/govuk_step2/assets/zoom_out_map-b2e1091a.svg";function ct(s){let e,n,t,l,o;return{c(){e=h("button"),n=h("img"),Fe(n.src,t=rt)||m(n,"src",t),m(n,"alt","Zoom to show entire boundary"),m(e,"type","button"),m(e,"title","Zoom to show entire boundary"),m(e,"class","svelte-qzjsqo")},m(i,r){v(i,e,r),y(e,n),l||(o=R(e,"click",s[0]),l=!0)},p:I,i:I,o:I,d(i){i&&w(e),l=!1,o()}}}function ut(s,e,n){let t;V(s,H,i=>n(2,t=i));let{boundaryGeojson:l}=e;function o(){t.fitBounds(ze(l),{padding:20,animate:!0,duration:500})}return s.$$set=i=>{"boundaryGeojson"in i&&n(1,l=i.boundaryGeojson)},[o,l]}class Mt extends j{constructor(e){super(),P(this,e,ut,ct,F,{boundaryGeojson:1})}}export{mt as B,xe as C,St as I,kt as L,Ct as M,Mt as Z,Re as a,Ue as b,C as c,yt as d,ft as e,Te as f,ye as g,ue as h,bt as i,_t as j,pt as k,Q as l,H as m,vt as n,Ne as o,wt as p,gt as q,ht as r,Ge as s,Lt as t,We as u,$t as v};
