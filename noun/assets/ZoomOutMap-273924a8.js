import{S as j,i as P,s as B,e as d,p as C,A as J,at as oe,r as _,d as v,v as p,au as A,l as Z,x as O,k as b,B as ae,as as ie,X as re,c as q,q as $,aF as H,u as N,g as R,f as F,t as I,j as D,Q as G,T as ce,W as U,V as K,U as ue,_ as fe,Z as de,Y as Q,w as pe,M as E,a0 as ee,H as te,I as se,K as ne,aj as M,ak as me,al as _e,aG as ge,L as ve,D as be,C as ye,ar as he,N as we}from"./maplibre_helpers-5d84afaa.js";function ke(n){let e,l,t,s,o,a,c;return{c(){e=d("div"),l=C(`Basemap:
  `),t=d("select"),s=d("option"),s.textContent="Streets",o=d("option"),o.textContent="Satellite",s.__value="streets",J(s,s.__value),o.__value="hybrid",J(o,o.__value),n[0]===void 0&&oe(()=>n[2].call(t)),_(e,"class","svelte-1tbnm6i")},m(f,i){v(f,e,i),p(e,l),p(e,t),p(t,s),p(t,o),A(t,n[0],!0),a||(c=[Z(t,"change",n[2]),Z(t,"change",n[1])],a=!0)},p(f,[i]){i&1&&A(t,f[0])},i:O,o:O,d(f){f&&b(e),a=!1,ae(c)}}}function Se(n,e,l){let{style:t}=e;function s(){let a=new URLSearchParams(window.location.search);a.set("style",t);let c=`${window.location.pathname}?${a.toString()}${window.location.hash}`;window.location.href=c}function o(){t=ie(this),l(0,t)}return n.$$set=a=>{"style"in a&&l(0,t=a.style)},[t,s,o]}class xe extends j{constructor(e){super(),P(this,e,Se,ke,B,{style:0})}}const z=[];function L(n,e=O){let l;const t=new Set;function s(c){if(B(n,c)&&(n=c,l)){const f=!z.length;for(const i of t)i[1](),z.push(i,n);if(f){for(let i=0;i<z.length;i+=2)z[i][0](z[i+1]);z.length=0}}}function o(c){s(c(n))}function a(c,f=O){const i=[c,f];return t.add(i),t.size===1&&(l=e(s,o)||O),c(n),()=>{t.delete(i),t.size===0&&l&&(l(),l=null)}}return{set:s,update:o,subscribe:a}}function Ce(n){return n=="google"||n=="bing"}function et(n){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[n]}function tt(n){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[n]}function st(n){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[n]}const V=L(null),nt=L(null),le=L(re()),Le=L(null),$e=L(null),Ie=L(null),Be=L(null),Me=L(Oe());Me.subscribe(n=>window.localStorage.setItem("userSettings",JSON.stringify(n)));const lt=L("edit-attribute"),ot=L(!1);function at(n){let e=new Set;for(let t of n.features)e.add(t.id);let l=e.size+1;for(;e.has(l);)l++;return l}function it(n){console.log(`Deleting intervention ${n}`),le.update(e=>(e.features=e.features.filter(l=>l.id!=n),e)),Le.set(null),$e.set(null),Ie.set(null),Be.set(null)}function Oe(){let n={streetViewImagery:"google",avoidDoublingBack:!1};try{let e=JSON.parse(window.localStorage.getItem("userSettings")||"{}");Ce(e.streetViewImagery)&&(n.streetViewImagery=e.streetViewImagery),typeof e.avoidDoublingBack=="boolean"&&(n.avoidDoublingBack=e.avoidDoublingBack)}catch(e){console.log(`Couldn't parse userSettings from local storage: ${e}`)}return n}const De=n=>({}),X=n=>({}),je=n=>({}),Y=n=>({});function Pe(n){let e,l,t,s,o,a,c,f,i,r,y;const h=n[3].sidebar,m=q(h,n,n[2],Y),S=n[3].main,w=q(S,n,n[2],X);return{c(){e=d("div"),l=d("aside"),t=d("div"),m&&m.c(),s=$(),o=d("button"),o.textContent="→",c=$(),f=d("main"),w&&w.c(),_(t,"class","sidebar-content content-container svelte-ect12w"),_(o,"type","button"),_(o,"class","sidebar-toggle rounded-rect svelte-ect12w"),_(l,"class",a=H(n[0]?"":"collapsed")+" svelte-ect12w"),_(f,"class","svelte-ect12w"),_(e,"class","overall-layout svelte-ect12w")},m(u,g){v(u,e,g),p(e,l),p(l,t),m&&m.m(t,null),p(l,s),p(l,o),p(e,c),p(e,f),w&&w.m(f,null),i=!0,r||(y=Z(o,"click",n[1]),r=!0)},p(u,[g]){m&&m.p&&(!i||g&4)&&N(m,h,u,u[2],i?F(h,u[2],g,je):R(u[2]),Y),(!i||g&1&&a!==(a=H(u[0]?"":"collapsed")+" svelte-ect12w"))&&_(l,"class",a),w&&w.p&&(!i||g&4)&&N(w,S,u,u[2],i?F(S,u[2],g,De):R(u[2]),X)},i(u){i||(I(m,u),I(w,u),i=!0)},o(u){D(m,u),D(w,u),i=!1},d(u){u&&b(e),m&&m.d(u),w&&w.d(u),r=!1,y()}}}function Te(n,e,l){let{$$slots:t={},$$scope:s}=e,o=!0;function a(){l(0,o=!o)}return n.$$set=c=>{"$$scope"in c&&l(2,s=c.$$scope)},[o,a,s,t]}class rt extends j{constructor(e){super(),P(this,e,Te,Pe,B,{})}}const k={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},ze=10,W=10;let T="interventions";function Ee(n,e,l){let t,s;G(n,V,r=>l(1,t=r)),G(n,le,r=>l(2,s=r));let{schema:o}=e;ce(t,T,s);const a=["match",["get","intervention_type"],"area",k.area,"route",k.route,"crossing",k.crossing,"other",k.other,"white"],c=["match",["get","reference_type",["get","planning"]],"preapp",k.preapp,"outline",k.outline,"reserved matters",k["reserved matters"],"local plan",k["local plan"],"white"],f=["!=","hide_while_editing",!0];return U(t,{id:"interventions-points",source:T,filter:["all",fe,f,["!=","endpoint",!0]],color:a,radius:ze}),K(t,{id:"interventions-lines",source:T,filter:["all",de,f],color:a,width:W}),U(t,{id:"interventions-lines-endpoints",source:T,filter:["==","endpoint",!0],radius:.5*W,opacity:0,strokeColor:k.lineEndpointColor,strokeWidth:2}),ue(t,{id:"interventions-polygons",source:T,filter:["all",Q,f],color:o=="planning"?c:a,opacity:.2}),K(t,{id:"interventions-polygon-outlines",source:T,filter:["all",Q,f],color:o=="planning"?c:a,opacity:.5,width:.7*W}),n.$$set=r=>{"schema"in r&&l(0,o=r.schema)},n.$$.update=()=>{if(n.$$.dirty&6){let r=JSON.parse(JSON.stringify(s)),y=[];for(let h of r.features)if(h.geometry.type=="LineString"&&!h.properties.hide_while_editing)for(let m of[h.geometry.coordinates[0],h.geometry.coordinates[h.geometry.coordinates.length-1]])y.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:m}});r.features=r.features.concat(y),t.getSource(T).setData(r)}},[o,t,s]}class ct extends j{constructor(e){super(),P(this,e,Ee,null,B,{schema:0})}}function qe(n){let e,l,t,s,o,a,c;const f=n[3].default,i=q(f,n,n[2],null);return{c(){e=d("details"),l=d("summary"),t=d("span"),s=C(n[0]),o=$(),a=d("div"),i&&i.c(),_(t,"class","govuk-details__summary-text"),_(l,"class","govuk-details__summary"),_(a,"class","govuk-details__text"),e.open=n[1],_(e,"class","govuk-details"),_(e,"data-module","govuk-details")},m(r,y){v(r,e,y),p(e,l),p(l,t),p(t,s),p(e,o),p(e,a),i&&i.m(a,null),c=!0},p(r,[y]){(!c||y&1)&&pe(s,r[0]),i&&i.p&&(!c||y&4)&&N(i,f,r,r[2],c?F(f,r[2],y,null):R(r[2]),null),(!c||y&2)&&(e.open=r[1])},i(r){c||(I(i,r),c=!0)},o(r){D(i,r),c=!1},d(r){r&&b(e),i&&i.d(r)}}}function Ne(n,e,l){let{$$slots:t={},$$scope:s}=e,{label:o}=e,{open:a=!1}=e;return n.$$set=c=>{"label"in c&&l(0,o=c.label),"open"in c&&l(1,a=c.open),"$$scope"in c&&l(2,s=c.$$scope)},[o,a,s,t]}class Re extends j{constructor(e){super(),P(this,e,Ne,qe,B,{label:0,open:1})}}function Fe(n,e,l){let t;G(n,V,i=>l(2,t=i));let{layers:s}=e,{contents:o}=e,a=new E.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",c),t.on("mouseout",f),ee(()=>{t.off("mousemove",c),t.off("mouseout",f),a.remove()});function c(i){if(!s.every(y=>t.getLayer(y))){a.remove();return}let r=t.queryRenderedFeatures(i.point,{layers:s});r.length>0?a.setLngLat(i.lngLat).setHTML(o(r[0].properties)).addTo(t):a.remove()}function f(){a.remove()}return n.$$set=i=>{"layers"in i&&l(0,s=i.layers),"contents"in i&&l(1,o=i.contents)},[s,o]}class ut extends j{constructor(e){super(),P(this,e,Fe,null,B,{layers:0,contents:1})}}function Ge(n){let e,l,t,s,o,a,c,f,i,r,y,h,m,S,w;return{c(){e=d("li"),l=d("span"),t=C("Areas"),s=$(),o=d("li"),a=d("span"),c=C("Routes"),f=$(),i=d("li"),r=d("span"),y=C("Crossings"),h=$(),m=d("li"),S=d("span"),w=C("Other"),_(l,"class","svelte-l42ea0"),M(l,"background",k.area),_(a,"class","svelte-l42ea0"),M(a,"background",k.route),_(r,"class","svelte-l42ea0"),M(r,"background",k.crossing),_(S,"class","svelte-l42ea0"),M(S,"background",k.other)},m(u,g){v(u,e,g),p(e,l),p(e,t),v(u,s,g),v(u,o,g),p(o,a),p(o,c),v(u,f,g),v(u,i,g),p(i,r),p(i,y),v(u,h,g),v(u,m,g),p(m,S),p(m,w)},p:O,d(u){u&&(b(e),b(s),b(o),b(f),b(i),b(h),b(m))}}}function Ve(n){let e,l,t,s,o,a,c,f,i,r,y,h,m,S,w;return{c(){e=d("li"),l=d("span"),t=C("Preapp"),s=$(),o=d("li"),a=d("span"),c=C("Outline"),f=$(),i=d("li"),r=d("span"),y=C("Reserved matters"),h=$(),m=d("li"),S=d("span"),w=C("Local plan"),_(l,"class","svelte-l42ea0"),M(l,"background",k.preapp),_(a,"class","svelte-l42ea0"),M(a,"background",k.outline),_(r,"class","svelte-l42ea0"),M(r,"background",k["reserved matters"]),_(S,"class","svelte-l42ea0"),M(S,"background",k["local plan"])},m(u,g){v(u,e,g),p(e,l),p(e,t),v(u,s,g),v(u,o,g),p(o,a),p(o,c),v(u,f,g),v(u,i,g),p(i,r),p(i,y),v(u,h,g),v(u,m,g),p(m,S),p(m,w)},p:O,d(u){u&&(b(e),b(s),b(o),b(f),b(i),b(h),b(m))}}}function We(n){let e;function l(o,a){return o[0]=="planning"?Ve:Ge}let t=l(n),s=t(n);return{c(){e=d("ul"),s.c()},m(o,a){v(o,e,a),s.m(e,null)},p(o,a){t===(t=l(o))&&s?s.p(o,a):(s.d(1),s=t(o),s&&(s.c(),s.m(e,null)))},d(o){o&&b(e),s.d()}}}function Ze(n){let e,l,t;return l=new Re({props:{label:"Objects",open:!0,$$slots:{default:[We]},$$scope:{ctx:n}}}),{c(){e=d("div"),te(l.$$.fragment),_(e,"class","svelte-l42ea0")},m(s,o){v(s,e,o),se(l,e,null),t=!0},p(s,[o]){const a={};o&3&&(a.$$scope={dirty:o,ctx:s}),l.$set(a)},i(s){t||(I(l.$$.fragment,s),t=!0)},o(s){D(l.$$.fragment,s),t=!1},d(s){s&&b(e),ne(l)}}}function Je(n,e,l){let{schema:t}=e;return n.$$set=s=>{"schema"in s&&l(0,t=s.schema)},[t]}class ft extends j{constructor(e){super(),P(this,e,Je,Ze,B,{schema:0})}}function x(n){let e;const l=n[4].default,t=q(l,n,n[3],null);return{c(){t&&t.c()},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&8)&&N(t,l,s,s[3],e?F(l,s[3],o,null):R(s[3]),null)},i(s){e||(I(t,s),e=!0)},o(s){D(t,s),e=!1},d(s){t&&t.d(s)}}}function Ae(n){let e,l,t=n[1]&&x(n);return{c(){e=d("div"),t&&t.c(),_(e,"class","map svelte-12dpf1u")},m(s,o){v(s,e,o),t&&t.m(e,null),n[5](e),l=!0},p(s,[o]){s[1]?t?(t.p(s,o),o&2&&I(t,1)):(t=x(s),t.c(),I(t,1),t.m(e,null)):t&&(me(),D(t,1,1,()=>{t=null}),_e())},i(s){l||(I(t),l=!0)},o(s){D(t),l=!1},d(s){s&&b(e),t&&t.d(),n[5](null)}}}function He(n,e,l){let{$$slots:t={},$$scope:s}=e,{style:o}=e,a,c,f=!1;ge("setCamera",!window.location.hash),ve(()=>{a=new E.Map({container:c,style:`https://api.maptiler.com/maps/${o}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),a.addControl(new E.ScaleControl({})),a.addControl(new E.NavigationControl({visualizePitch:!0}),"bottom-right"),a.on("load",()=>{l(1,f=!0),V.set(a)}),new ResizeObserver(()=>{a.resize()}).observe(c)}),ee(()=>{a.remove()});function i(r){be[r?"unshift":"push"](()=>{c=r,l(0,c)})}return n.$$set=r=>{"style"in r&&l(2,o=r.style),"$$scope"in r&&l(3,s=r.$$scope)},[c,f,o,s,t,i]}class dt extends j{constructor(e){super(),P(this,e,He,Ae,B,{style:2})}}const Ue="/atip/noun/assets/zoom_out_map-b2e1091a.svg";function Ke(n){let e,l;return{c(){e=d("img"),he(e.src,l=Ue)||_(e,"src",l),_(e,"alt","Zoom to show entire boundary")},m(t,s){v(t,e,s)},p:O,d(t){t&&b(e)}}}function Qe(n){let e,l;return e=new ye({props:{title:"Zoom to show entire boundary",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){te(e.$$.fragment)},m(t,s){se(e,t,s),l=!0},p(t,[s]){const o={};s&8&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){ne(e,t)}}}function Xe(n,e,l){let t;G(n,V,a=>l(2,t=a));let{boundaryGeojson:s}=e;function o(){t.fitBounds(we(s),{padding:20,animate:!0,duration:500})}return n.$$set=a=>{"boundaryGeojson"in a&&l(1,s=a.boundaryGeojson)},[o,s]}class pt extends j{constructor(e){super(),P(this,e,Xe,Qe,B,{boundaryGeojson:1})}}export{xe as B,Re as C,ct as I,rt as L,ut as M,pt as Z,$e as a,ze as b,k as c,lt as d,tt as e,Le as f,le as g,st as h,ot as i,it as j,et as k,W as l,V as m,at as n,Be as o,dt as p,ft as q,nt as r,Ie as s,Me as u};