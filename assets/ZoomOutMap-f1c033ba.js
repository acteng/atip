import{S as D,i as P,s as I,F as fe,g as V,m as W,t as C,l as O,q as Z,al as Q,e as m,Q as de,h as _,aw as me,j as b,k as p,aG as X,w as U,p as v,am as pe,av as _e,ar as ge,aH as be,v as K,u as L,x as ie,b as re,c as ve,o as he,R as z,M as ye,ab as q,f as M,aI as Y,ac as F,ad as G,ae as N,G as J,I as we,L as $,K as x,J as ke,P as Se,O as Ce,N as ee,A as R,T as ce,aa as E,y as Le,n as Oe,aJ as Ie,r as Be,a as Me,ak as De,B as Pe}from"./maplibre_helpers-8febaf33.js";function te(s,e,n){const t=s.slice();return t[8]=e[n][0],t[9]=e[n][1],t}function ne(s){let e;return{c(){e=m("option"),e.__value="",K(e,e.__value)},m(n,t){b(n,e,t)},d(n){n&&v(e)}}}function se(s){let e,n=s[9]+"",t,l;return{c(){e=m("option"),t=L(n),e.__value=l=s[8],K(e,e.__value)},m(a,o){b(a,e,o),p(e,t)},p(a,o){o&8&&n!==(n=a[9]+"")&&ie(t,n),o&8&&l!==(l=a[8])&&(e.__value=l,K(e,e.__value))},d(a){a&&v(e)}}}function Ee(s){let e,n,t,l,a=s[4]&&ne(),o=Q(s[3]),i=[];for(let u=0;u<o.length;u+=1)i[u]=se(te(s,o,u));return{c(){e=m("select"),a&&a.c(),n=de();for(let u=0;u<i.length;u+=1)i[u].c();_(e,"class","govuk-select"),_(e,"id",s[2]),e.disabled=s[5],s[0]===void 0&&me(()=>s[7].call(e))},m(u,c){b(u,e,c),a&&a.m(e,null),p(e,n);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(e,null);X(e,s[0],!0),t||(l=[U(e,"change",s[7]),U(e,"change",s[6])],t=!0)},p(u,c){if(u[4]?a||(a=ne(),a.c(),a.m(e,n)):a&&(a.d(1),a=null),c&8){o=Q(u[3]);let r;for(r=0;r<o.length;r+=1){const d=te(u,o,r);i[r]?i[r].p(d,c):(i[r]=se(d),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}c&4&&_(e,"id",u[2]),c&32&&(e.disabled=u[5]),c&9&&X(e,u[0])},d(u){u&&v(e),a&&a.d(),pe(i,u),t=!1,_e(l)}}}function Te(s){let e,n;return e=new fe({props:{label:s[1],id:s[2],$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){V(e.$$.fragment)},m(t,l){W(e,t,l),n=!0},p(t,[l]){const a={};l&2&&(a.label=t[1]),l&4&&(a.id=t[2]),l&4157&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function je(s,e,n){let{label:t}=e,{id:l}=e,{choices:a}=e,{emptyOption:o=!1}=e,{disabled:i=!1}=e,{value:u}=e;function c(d){ge.call(this,s,d)}function r(){u=be(this),n(0,u),n(3,a)}return s.$$set=d=>{"label"in d&&n(1,t=d.label),"id"in d&&n(2,l=d.id),"choices"in d&&n(3,a=d.choices),"emptyOption"in d&&n(4,o=d.emptyOption),"disabled"in d&&n(5,i=d.disabled),"value"in d&&n(0,u=d.value)},[u,t,l,a,o,i,c,r]}class ze extends D{constructor(e){super(),P(this,e,je,Te,I,{label:1,id:2,choices:3,emptyOption:4,disabled:5,value:0})}}function Re(s){let e,n,t,l;function a(i){s[2](i)}let o={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"]]};return s[0]!==void 0&&(o.value=s[0]),n=new ze({props:o}),re.push(()=>ve(n,"value",a)),n.$on("change",s[1]),{c(){e=m("div"),V(n.$$.fragment),_(e,"class","svelte-1tbnm6i")},m(i,u){b(i,e,u),W(n,e,null),l=!0},p(i,[u]){const c={};!t&&u&1&&(t=!0,c.value=i[0],he(()=>t=!1)),n.$set(c)},i(i){l||(C(n.$$.fragment,i),l=!0)},o(i){O(n.$$.fragment,i),l=!1},d(i){i&&v(e),Z(n)}}}function qe(s,e,n){let{style:t}=e;function l(){let o=new URLSearchParams(window.location.search);o.set("style",t);let i=`${window.location.pathname}?${o.toString()}${window.location.hash}`;window.location.href=i}function a(o){t=o,n(0,t)}return s.$$set=o=>{"style"in o&&n(0,t=o.style)},[t,l,a]}class mt extends D{constructor(e){super(),P(this,e,qe,Re,I,{style:0})}}const j=[];function B(s,e=z){let n;const t=new Set;function l(i){if(I(s,i)&&(s=i,n)){const u=!j.length;for(const c of t)c[1](),j.push(c,s);if(u){for(let c=0;c<j.length;c+=2)j[c][0](j[c+1]);j.length=0}}}function a(i){l(i(s))}function o(i,u=z){const c=[i,u];return t.add(c),t.size===1&&(n=e(l,a)||z),i(s),()=>{t.delete(c),t.size===0&&n&&(n(),n=null)}}return{set:l,update:a,subscribe:o}}function Fe(s){return s=="google"||s=="bing"}function pt(s){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[s]}function _t(s){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[s]}function gt(s){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[s]}const A=B(null),bt=B(null),ue=B(ye()),Ge=B(null),Ne=B(null),Je=B(null),Ve=B(null),We=B(Ze());We.subscribe(s=>window.localStorage.setItem("userSettings",JSON.stringify(s)));const vt=B("edit-attribute"),ht=B(!1);function yt(s){let e=new Set;for(let t of s.features)e.add(t.id);let n=e.size+1;for(;e.has(n);)n++;return n}function wt(s){console.log(`Deleting intervention ${s}`),ue.update(e=>(e.features=e.features.filter(n=>n.id!=s),e)),Ge.set(null),Ne.set(null),Je.set(null),Ve.set(null)}function Ze(){let s={streetViewImagery:"google",avoidDoublingBack:!1};try{let e=JSON.parse(window.localStorage.getItem("userSettings")||"{}");Fe(e.streetViewImagery)&&(s.streetViewImagery=e.streetViewImagery),typeof e.avoidDoublingBack=="boolean"&&(s.avoidDoublingBack=e.avoidDoublingBack)}catch(e){console.log(`Couldn't parse userSettings from local storage: ${e}`)}return s}const Ae=s=>({}),le=s=>({}),He=s=>({}),ae=s=>({});function Ue(s){let e,n,t,l,a,o,i,u,c,r,d;const y=s[3].sidebar,g=q(y,s,s[2],ae),S=s[3].main,w=q(S,s,s[2],le);return{c(){e=m("div"),n=m("aside"),t=m("div"),g&&g.c(),l=M(),a=m("button"),a.textContent="→",i=M(),u=m("main"),w&&w.c(),_(t,"class","sidebar-content content-container svelte-ect12w"),_(a,"type","button"),_(a,"class","sidebar-toggle rounded-rect svelte-ect12w"),_(n,"class",o=Y(s[0]?"":"collapsed")+" svelte-ect12w"),_(u,"class","svelte-ect12w"),_(e,"class","overall-layout svelte-ect12w")},m(f,h){b(f,e,h),p(e,n),p(n,t),g&&g.m(t,null),p(n,l),p(n,a),p(e,i),p(e,u),w&&w.m(u,null),c=!0,r||(d=U(a,"click",s[1]),r=!0)},p(f,[h]){g&&g.p&&(!c||h&4)&&F(g,y,f,f[2],c?N(y,f[2],h,He):G(f[2]),ae),(!c||h&1&&o!==(o=Y(f[0]?"":"collapsed")+" svelte-ect12w"))&&_(n,"class",o),w&&w.p&&(!c||h&4)&&F(w,S,f,f[2],c?N(S,f[2],h,Ae):G(f[2]),le)},i(f){c||(C(g,f),C(w,f),c=!0)},o(f){O(g,f),O(w,f),c=!1},d(f){f&&v(e),g&&g.d(f),w&&w.d(f),r=!1,d()}}}function Ke(s,e,n){let{$$slots:t={},$$scope:l}=e,a=!0;function o(){n(0,a=!a)}return s.$$set=i=>{"$$scope"in i&&n(2,l=i.$$scope)},[a,o,l,t]}class kt extends D{constructor(e){super(),P(this,e,Ke,Ue,I,{})}}const k={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},Qe=10,H=10;let T="interventions";function Xe(s,e,n){let t,l;J(s,A,r=>n(1,t=r)),J(s,ue,r=>n(2,l=r));let{schema:a}=e;we(t,T,l);const o=["match",["get","intervention_type"],"area",k.area,"route",k.route,"crossing",k.crossing,"other",k.other,"white"],i=["match",["get","reference_type",["get","planning"]],"preapp",k.preapp,"outline",k.outline,"reserved matters",k["reserved matters"],"local plan",k["local plan"],"white"],u=["!=","hide_while_editing",!0];return $(t,{id:"interventions-points",source:T,filter:["all",Se,u,["!=","endpoint",!0]],color:o,radius:Qe}),x(t,{id:"interventions-lines",source:T,filter:["all",Ce,u],color:o,width:H}),$(t,{id:"interventions-lines-endpoints",source:T,filter:["==","endpoint",!0],radius:.5*H,opacity:0,strokeColor:k.lineEndpointColor,strokeWidth:2}),ke(t,{id:"interventions-polygons",source:T,filter:["all",ee,u],color:a=="planning"?i:o,opacity:.2}),x(t,{id:"interventions-polygon-outlines",source:T,filter:["all",ee,u],color:a=="planning"?i:o,opacity:.5,width:.7*H}),s.$$set=r=>{"schema"in r&&n(0,a=r.schema)},s.$$.update=()=>{if(s.$$.dirty&6){let r=JSON.parse(JSON.stringify(l)),d=[];for(let y of r.features)if(y.geometry.type=="LineString"&&!y.properties.hide_while_editing)for(let g of[y.geometry.coordinates[0],y.geometry.coordinates[y.geometry.coordinates.length-1]])d.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:g}});r.features=r.features.concat(d),t.getSource(T).setData(r)}},[a,t,l]}class St extends D{constructor(e){super(),P(this,e,Xe,null,I,{schema:0})}}function Ye(s){let e,n,t,l,a,o,i;const u=s[3].default,c=q(u,s,s[2],null);return{c(){e=m("details"),n=m("summary"),t=m("span"),l=L(s[0]),a=M(),o=m("div"),c&&c.c(),_(t,"class","govuk-details__summary-text"),_(n,"class","govuk-details__summary"),_(o,"class","govuk-details__text"),e.open=s[1],_(e,"class","govuk-details"),_(e,"data-module","govuk-details")},m(r,d){b(r,e,d),p(e,n),p(n,t),p(t,l),p(e,a),p(e,o),c&&c.m(o,null),i=!0},p(r,[d]){(!i||d&1)&&ie(l,r[0]),c&&c.p&&(!i||d&4)&&F(c,u,r,r[2],i?N(u,r[2],d,null):G(r[2]),null),(!i||d&2)&&(e.open=r[1])},i(r){i||(C(c,r),i=!0)},o(r){O(c,r),i=!1},d(r){r&&v(e),c&&c.d(r)}}}function $e(s,e,n){let{$$slots:t={},$$scope:l}=e,{label:a}=e,{open:o=!1}=e;return s.$$set=i=>{"label"in i&&n(0,a=i.label),"open"in i&&n(1,o=i.open),"$$scope"in i&&n(2,l=i.$$scope)},[a,o,l,t]}class xe extends D{constructor(e){super(),P(this,e,$e,Ye,I,{label:0,open:1})}}function et(s,e,n){let t;J(s,A,c=>n(2,t=c));let{layers:l}=e,{contents:a}=e,o=new R.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",i),t.on("mouseout",u),ce(()=>{t.off("mousemove",i),t.off("mouseout",u),o.remove()});function i(c){if(!l.every(d=>t.getLayer(d))){o.remove();return}let r=t.queryRenderedFeatures(c.point,{layers:l});r.length>0?o.setLngLat(c.lngLat).setHTML(a(r[0].properties)).addTo(t):o.remove()}function u(){o.remove()}return s.$$set=c=>{"layers"in c&&n(0,l=c.layers),"contents"in c&&n(1,a=c.contents)},[l,a]}class Ct extends D{constructor(e){super(),P(this,e,et,null,I,{layers:0,contents:1})}}function tt(s){let e,n,t,l,a,o,i,u,c,r,d,y,g,S,w;return{c(){e=m("li"),n=m("span"),t=L(`
          Areas`),l=M(),a=m("li"),o=m("span"),i=L(`
          Routes`),u=M(),c=m("li"),r=m("span"),d=L(`
          Crossings`),y=M(),g=m("li"),S=m("span"),w=L(`
          Other`),_(n,"class","svelte-l42ea0"),E(n,"background",k.area),_(o,"class","svelte-l42ea0"),E(o,"background",k.route),_(r,"class","svelte-l42ea0"),E(r,"background",k.crossing),_(S,"class","svelte-l42ea0"),E(S,"background",k.other)},m(f,h){b(f,e,h),p(e,n),p(e,t),b(f,l,h),b(f,a,h),p(a,o),p(a,i),b(f,u,h),b(f,c,h),p(c,r),p(c,d),b(f,y,h),b(f,g,h),p(g,S),p(g,w)},p:z,d(f){f&&(v(e),v(l),v(a),v(u),v(c),v(y),v(g))}}}function nt(s){let e,n,t,l,a,o,i,u,c,r,d,y,g,S,w;return{c(){e=m("li"),n=m("span"),t=L(`
          Preapp`),l=M(),a=m("li"),o=m("span"),i=L(`
          Outline`),u=M(),c=m("li"),r=m("span"),d=L(`
          Reserved matters`),y=M(),g=m("li"),S=m("span"),w=L(`
          Local plan`),_(n,"class","svelte-l42ea0"),E(n,"background",k.preapp),_(o,"class","svelte-l42ea0"),E(o,"background",k.outline),_(r,"class","svelte-l42ea0"),E(r,"background",k["reserved matters"]),_(S,"class","svelte-l42ea0"),E(S,"background",k["local plan"])},m(f,h){b(f,e,h),p(e,n),p(e,t),b(f,l,h),b(f,a,h),p(a,o),p(a,i),b(f,u,h),b(f,c,h),p(c,r),p(c,d),b(f,y,h),b(f,g,h),p(g,S),p(g,w)},p:z,d(f){f&&(v(e),v(l),v(a),v(u),v(c),v(y),v(g))}}}function st(s){let e;function n(a,o){return a[0]=="planning"?nt:tt}let t=n(s),l=t(s);return{c(){e=m("ul"),l.c()},m(a,o){b(a,e,o),l.m(e,null)},p(a,o){t===(t=n(a))&&l?l.p(a,o):(l.d(1),l=t(a),l&&(l.c(),l.m(e,null)))},d(a){a&&v(e),l.d()}}}function lt(s){let e,n,t;return n=new xe({props:{label:"Objects",open:!0,$$slots:{default:[st]},$$scope:{ctx:s}}}),{c(){e=m("div"),V(n.$$.fragment),_(e,"class","svelte-l42ea0")},m(l,a){b(l,e,a),W(n,e,null),t=!0},p(l,[a]){const o={};a&3&&(o.$$scope={dirty:a,ctx:l}),n.$set(o)},i(l){t||(C(n.$$.fragment,l),t=!0)},o(l){O(n.$$.fragment,l),t=!1},d(l){l&&v(e),Z(n)}}}function at(s,e,n){let{schema:t}=e;return s.$$set=l=>{"schema"in l&&n(0,t=l.schema)},[t]}class Lt extends D{constructor(e){super(),P(this,e,at,lt,I,{schema:0})}}function oe(s){let e;const n=s[4].default,t=q(n,s,s[3],null);return{c(){t&&t.c()},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8)&&F(t,n,l,l[3],e?N(n,l[3],a,null):G(l[3]),null)},i(l){e||(C(t,l),e=!0)},o(l){O(t,l),e=!1},d(l){t&&t.d(l)}}}function ot(s){let e,n,t=s[1]&&oe(s);return{c(){e=m("div"),t&&t.c(),_(e,"class","map svelte-12dpf1u")},m(l,a){b(l,e,a),t&&t.m(e,null),s[5](e),n=!0},p(l,[a]){l[1]?t?(t.p(l,a),a&2&&C(t,1)):(t=oe(l),t.c(),C(t,1),t.m(e,null)):t&&(Le(),O(t,1,1,()=>{t=null}),Oe())},i(l){n||(C(t),n=!0)},o(l){O(t),n=!1},d(l){l&&v(e),t&&t.d(),s[5](null)}}}function it(s,e,n){let{$$slots:t={},$$scope:l}=e,{style:a}=e,o,i,u=!1;Ie("setCamera",!window.location.hash),Be(()=>{o=new R.Map({container:i,style:`https://api.maptiler.com/maps/${a}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),o.addControl(new R.ScaleControl({})),o.addControl(new R.NavigationControl({visualizePitch:!0}),"bottom-right"),o.on("load",()=>{n(1,u=!0),A.set(o)}),new ResizeObserver(()=>{o.resize()}).observe(i)}),ce(()=>{o.remove()});function c(r){re[r?"unshift":"push"](()=>{i=r,n(0,i)})}return s.$$set=r=>{"style"in r&&n(2,a=r.style),"$$scope"in r&&n(3,l=r.$$scope)},[i,u,a,l,t,c]}class Ot extends D{constructor(e){super(),P(this,e,it,ot,I,{style:2})}}const rt="/atip/assets/zoom_out_map-b2e1091a.svg";function ct(s){let e,n;return{c(){e=m("img"),De(e.src,n=rt)||_(e,"src",n),_(e,"alt","Zoom to show entire boundary")},m(t,l){b(t,e,l)},p:z,d(t){t&&v(e)}}}function ut(s){let e,n;return e=new Me({props:{title:"Zoom to show entire boundary",$$slots:{default:[ct]},$$scope:{ctx:s}}}),e.$on("click",s[0]),{c(){V(e.$$.fragment)},m(t,l){W(e,t,l),n=!0},p(t,[l]){const a={};l&8&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function ft(s,e,n){let t;J(s,A,o=>n(2,t=o));let{boundaryGeojson:l}=e;function a(){t.fitBounds(Pe(l),{padding:20,animate:!0,duration:500})}return s.$$set=o=>{"boundaryGeojson"in o&&n(1,l=o.boundaryGeojson)},[a,l]}class It extends D{constructor(e){super(),P(this,e,ft,ut,I,{boundaryGeojson:1})}}export{mt as B,xe as C,St as I,kt as L,Ct as M,ze as S,It as Z,Ne as a,Qe as b,k as c,vt as d,_t as e,Ge as f,ue as g,gt as h,ht as i,wt as j,pt as k,H as l,A as m,yt as n,Ve as o,Ot as p,Lt as q,bt as r,Je as s,We as u};
