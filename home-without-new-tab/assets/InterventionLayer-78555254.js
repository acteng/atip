import{G as B,s as I,P as ie,S as j,i as z,e as b,f as m,g as y,n as C,V as te,o as O,W as se,p as v,as as ae,u as re,at as R,R as ne,x as T,C as E,D as W,E as G,b as ce,c as M,au as N,h as g,l as P,J as Z,O as ue,w as fe,t as L,Z as oe,_ as V,r as pe,Y as de,a1 as H,X as me,B as _e,a0 as U,d as be,m as ge,q as ye,y as F,L as ve,a7 as A,Q as he,M as we,aa as ke,a9 as Se,a8 as Ce}from"./FileInput-63186022.js";const $=[];function q(o,e=B){let n;const t=new Set;function s(c){if(I(o,c)&&(o=c,n)){const u=!$.length;for(const a of t)a[1](),$.push(a,o);if(u){for(let a=0;a<$.length;a+=2)$[a][0]($[a+1]);$.length=0}}}function l(c){s(c(o))}function i(c,u=B){const a=[c,u];return t.add(a),t.size===1&&(n=e(s)||B),c(o),()=>{t.delete(a),t.size===0&&(n(),n=null)}}return{set:s,update:l,subscribe:i}}function Le(o){return o=="google"||o=="bing"}const J=q(null),st=q(null),le=q(ie()),Be=q(null),Me=q(null),Oe=q(null),Ie=q(null),qe=q(Fe());qe.subscribe(o=>window.localStorage.setItem("userSettings",JSON.stringify(o)));const nt=q("edit-attribute");function ot(o){let e=new Set;for(let t of o.features)e.add(t.id);let n=e.size+1;for(;e.has(n);)n++;return n}function lt(o){console.log(`Deleting intervention ${o}`),le.update(e=>(e.features=e.features.filter(n=>n.id!=o),e)),Be.set(null),Me.set(null),Oe.set(null),Ie.set(null)}function Fe(){let o={streetViewImagery:"google",avoidDoublingBack:!1};try{let e=JSON.parse(window.localStorage.getItem("userSettings")||"{}");Le(e.streetViewImagery)&&(o.streetViewImagery=e.streetViewImagery),typeof e.avoidDoublingBack=="boolean"&&(o.avoidDoublingBack=e.avoidDoublingBack)}catch(e){console.log(`Couldn't parse userSettings from local storage: ${e}`)}return o}function Q(o){let e;const n=o[4].default,t=T(n,o,o[3],null);return{c(){t&&t.c()},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&8)&&E(t,n,s,s[3],e?G(n,s[3],l,null):W(s[3]),null)},i(s){e||(C(t,s),e=!0)},o(s){O(t,s),e=!1},d(s){t&&t.d(s)}}}function je(o){let e,n,t=o[1]&&Q(o);return{c(){e=b("div"),t&&t.c(),m(e,"class","map svelte-12dpf1u")},m(s,l){y(s,e,l),t&&t.m(e,null),o[5](e),n=!0},p(s,[l]){s[1]?t?(t.p(s,l),l&2&&C(t,1)):(t=Q(s),t.c(),C(t,1),t.m(e,null)):t&&(te(),O(t,1,1,()=>{t=null}),se())},i(s){n||(C(t),n=!0)},o(s){O(t),n=!1},d(s){s&&v(e),t&&t.d(),o[5](null)}}}function ze(o,e,n){let{$$slots:t={},$$scope:s}=e,{style:l}=e,i,c,u=!1;ae("setCamera",!window.location.hash),re(()=>{i=new R.Map({container:c,style:`https://api.maptiler.com/maps/${l}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),i.addControl(new R.ScaleControl({})),i.addControl(new R.NavigationControl({visualizePitch:!0}),"bottom-right"),i.on("load",()=>{n(1,u=!0),J.set(i)}),new ResizeObserver(()=>{i.resize()}).observe(c)}),ne(()=>{i.remove()});function a(p){ce[p?"unshift":"push"](()=>{c=p,n(0,c)})}return o.$$set=p=>{"style"in p&&n(2,l=p.style),"$$scope"in p&&n(3,s=p.$$scope)},[c,u,l,s,t,a]}class it extends j{constructor(e){super(),z(this,e,ze,je,I,{style:2})}}const $e=o=>({}),X=o=>({}),De=o=>({}),Y=o=>({});function Pe(o){let e,n,t,s,l,i,c,u,a,p,_;const d=o[3].sidebar,f=T(d,o,o[2],Y),S=o[3].main,w=T(S,o,o[2],X);return{c(){e=b("div"),n=b("aside"),t=b("div"),f&&f.c(),s=M(),l=b("button"),l.textContent="→",c=M(),u=b("main"),w&&w.c(),m(t,"class","sidebar-content content-container svelte-ect12w"),m(l,"type","button"),m(l,"class","sidebar-toggle rounded-rect svelte-ect12w"),m(n,"class",i=N(o[0]?"":"collapsed")+" svelte-ect12w"),m(u,"class","svelte-ect12w"),m(e,"class","overall-layout svelte-ect12w")},m(r,h){y(r,e,h),g(e,n),g(n,t),f&&f.m(t,null),g(n,s),g(n,l),g(e,c),g(e,u),w&&w.m(u,null),a=!0,p||(_=P(l,"click",o[1]),p=!0)},p(r,[h]){f&&f.p&&(!a||h&4)&&E(f,d,r,r[2],a?G(d,r[2],h,De):W(r[2]),Y),(!a||h&1&&i!==(i=N(r[0]?"":"collapsed")+" svelte-ect12w"))&&m(n,"class",i),w&&w.p&&(!a||h&4)&&E(w,S,r,r[2],a?G(S,r[2],h,$e):W(r[2]),X)},i(r){a||(C(f,r),C(w,r),a=!0)},o(r){O(f,r),O(w,r),a=!1},d(r){r&&v(e),f&&f.d(r),w&&w.d(r),p=!1,_()}}}function Re(o,e,n){let{$$slots:t={},$$scope:s}=e,l=!0;function i(){n(0,l=!l)}return o.$$set=c=>{"$$scope"in c&&n(2,s=c.$$scope)},[l,i,s,t]}class at extends j{constructor(e){super(),z(this,e,Re,Pe,I,{})}}const k={area:"#e41a1c",route:"#377eb8",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},Te=10,K=10;function Ee(o,e,n){let t;Z(o,J,a=>n(2,t=a));let{layers:s}=e,{contents:l}=e,i=new R.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",c),t.on("mouseout",u),ne(()=>{t.off("mousemove",c),t.off("mouseout",u),i.remove()});function c(a){if(!s.every(_=>t.getLayer(_))){i.remove();return}let p=t.queryRenderedFeatures(a.point,{layers:s});p.length>0?i.setLngLat(a.lngLat).setHTML(l(p[0].properties)).addTo(t):i.remove()}function u(){i.remove()}return o.$$set=a=>{"layers"in a&&n(0,s=a.layers),"contents"in a&&n(1,l=a.contents)},[s,l]}class rt extends j{constructor(e){super(),z(this,e,Ee,null,I,{layers:0,contents:1})}}function We(o){const e=o-1;return e*e*e+1}function x(o,{delay:e=0,duration:n=400,easing:t=We}={}){const s=getComputedStyle(o),l=+s.opacity,i=parseFloat(s.height),c=parseFloat(s.paddingTop),u=parseFloat(s.paddingBottom),a=parseFloat(s.marginTop),p=parseFloat(s.marginBottom),_=parseFloat(s.borderTopWidth),d=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:t,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*l};height: ${f*i}px;padding-top: ${f*c}px;padding-bottom: ${f*u}px;margin-top: ${f*a}px;margin-bottom: ${f*p}px;border-top-width: ${f*_}px;border-bottom-width: ${f*d}px;`}}const Ge="/atip/home-without-new-tab/assets/zoom_out_map-b2e1091a.svg";function Ze(o){let e,n,t,s,l;return{c(){e=b("button"),n=b("img"),ue(n.src,t=Ge)||m(n,"src",t),m(n,"alt","Zoom to show entire boundary"),m(e,"type","button"),m(e,"title","Zoom to show entire boundary"),m(e,"class","svelte-qzjsqo")},m(i,c){y(i,e,c),g(e,n),s||(l=P(e,"click",o[0]),s=!0)},p:B,i:B,o:B,d(i){i&&v(e),s=!1,l()}}}function Je(o,e,n){let t;Z(o,J,i=>n(2,t=i));let{boundaryGeojson:s}=e;function l(){t.fitBounds(fe(s),{padding:20,animate:!0,duration:500})}return o.$$set=i=>{"boundaryGeojson"in i&&n(1,s=i.boundaryGeojson)},[l,s]}class ct extends j{constructor(e){super(),z(this,e,Je,Ze,I,{boundaryGeojson:1})}}function Ne(o){let e,n,t,s,l,i,c;return{c(){e=b("div"),n=L(`Basemap:
  `),t=b("select"),s=b("option"),s.textContent="Streets",l=b("option"),l.textContent="Satellite",s.__value="streets",s.value=s.__value,l.__value="hybrid",l.value=l.__value,o[0]===void 0&&oe(()=>o[2].call(t)),m(e,"class","svelte-1tbnm6i")},m(u,a){y(u,e,a),g(e,n),g(e,t),g(t,s),g(t,l),V(t,o[0]),i||(c=[P(t,"change",o[2]),P(t,"change",o[1])],i=!0)},p(u,[a]){a&1&&V(t,u[0])},i:B,o:B,d(u){u&&v(e),i=!1,pe(c)}}}function Ve(o,e,n){let{style:t}=e;function s(){let i=new URLSearchParams(window.location.search);i.set("style",t);let c=`${window.location.pathname}?${i.toString()}${window.location.hash}`;window.location.href=c}function l(){t=de(this),n(0,t)}return o.$$set=i=>{"style"in i&&n(0,t=i.style)},[t,s,l]}class ut extends j{constructor(e){super(),z(this,e,Ve,Ne,I,{style:0})}}function ee(o){let e,n,t;const s=o[3].default,l=T(s,o,o[2],null);return{c(){e=b("div"),l&&l.c()},m(i,c){y(i,e,c),l&&l.m(e,null),t=!0},p(i,c){l&&l.p&&(!t||c&4)&&E(l,s,i,i[2],t?G(s,i[2],c,null):W(i[2]),null)},i(i){t||(C(l,i),oe(()=>{n||(n=U(e,x,{duration:100},!0)),n.run(1)}),t=!0)},o(i){O(l,i),n||(n=U(e,x,{duration:100},!1)),n.run(0),t=!1},d(i){i&&v(e),l&&l.d(i),i&&n&&n.end()}}}function He(o){let e,n,t,s,l,i,c,u,a,p,_=o[0]&&ee(o);return{c(){e=b("button"),n=H("svg"),t=H("path"),s=M(),l=L(o[1]),i=M(),_&&_.c(),c=me(),m(t,"d","M9 5l7 7-7 7"),m(n,"style","tran"),m(n,"width","20"),m(n,"height","20"),m(n,"fill","none"),m(n,"stroke-linecap","round"),m(n,"stroke-linejoin","round"),m(n,"stroke-width","2"),m(n,"viewBox","0 0 24 24"),m(n,"stroke","currentColor"),m(n,"class","svelte-una9lq"),m(e,"aria-expanded",o[0]),m(e,"class","svelte-una9lq")},m(d,f){y(d,e,f),g(e,n),g(n,t),g(e,s),g(e,l),y(d,i,f),_&&_.m(d,f),y(d,c,f),u=!0,a||(p=P(e,"click",o[4]),a=!0)},p(d,[f]){(!u||f&2)&&_e(l,d[1]),(!u||f&1)&&m(e,"aria-expanded",d[0]),d[0]?_?(_.p(d,f),f&1&&C(_,1)):(_=ee(d),_.c(),C(_,1),_.m(c.parentNode,c)):_&&(te(),O(_,1,1,()=>{_=null}),se())},i(d){u||(C(_),u=!0)},o(d){O(_),u=!1},d(d){d&&v(e),d&&v(i),_&&_.d(d),d&&v(c),a=!1,p()}}}function Ue(o,e,n){let{$$slots:t={},$$scope:s}=e,{label:l}=e,{open:i=!1}=e;const c=()=>n(0,i=!i);return o.$$set=u=>{"label"in u&&n(1,l=u.label),"open"in u&&n(0,i=u.open),"$$scope"in u&&n(2,s=u.$$scope)},[i,l,s,t,c]}class Ae extends j{constructor(e){super(),z(this,e,Ue,He,I,{label:1,open:0})}}function Qe(o){let e,n,t,s,l,i,c,u,a,p,_,d,f,S,w;return{c(){e=b("li"),n=b("span"),t=L("Areas"),s=M(),l=b("li"),i=b("span"),c=L("Routes"),u=M(),a=b("li"),p=b("span"),_=L("Crossings"),d=M(),f=b("li"),S=b("span"),w=L("Other"),m(n,"class","svelte-l42ea0"),F(n,"background",k.area),m(i,"class","svelte-l42ea0"),F(i,"background",k.route),m(p,"class","svelte-l42ea0"),F(p,"background",k.crossing),m(S,"class","svelte-l42ea0"),F(S,"background",k.other)},m(r,h){y(r,e,h),g(e,n),g(e,t),y(r,s,h),y(r,l,h),g(l,i),g(l,c),y(r,u,h),y(r,a,h),g(a,p),g(a,_),y(r,d,h),y(r,f,h),g(f,S),g(f,w)},p:B,d(r){r&&v(e),r&&v(s),r&&v(l),r&&v(u),r&&v(a),r&&v(d),r&&v(f)}}}function Xe(o){let e,n,t,s,l,i,c,u,a,p,_,d,f,S,w;return{c(){e=b("li"),n=b("span"),t=L("Preapp"),s=M(),l=b("li"),i=b("span"),c=L("Outline"),u=M(),a=b("li"),p=b("span"),_=L("Reserved matters"),d=M(),f=b("li"),S=b("span"),w=L("Local plan"),m(n,"class","svelte-l42ea0"),F(n,"background",k.preapp),m(i,"class","svelte-l42ea0"),F(i,"background",k.outline),m(p,"class","svelte-l42ea0"),F(p,"background",k["reserved matters"]),m(S,"class","svelte-l42ea0"),F(S,"background",k["local plan"])},m(r,h){y(r,e,h),g(e,n),g(e,t),y(r,s,h),y(r,l,h),g(l,i),g(l,c),y(r,u,h),y(r,a,h),g(a,p),g(a,_),y(r,d,h),y(r,f,h),g(f,S),g(f,w)},p:B,d(r){r&&v(e),r&&v(s),r&&v(l),r&&v(u),r&&v(a),r&&v(d),r&&v(f)}}}function Ye(o){let e;function n(l,i){return l[0]=="planning"?Xe:Qe}let t=n(o),s=t(o);return{c(){e=b("ul"),s.c()},m(l,i){y(l,e,i),s.m(e,null)},p(l,i){t===(t=n(l))&&s?s.p(l,i):(s.d(1),s=t(l),s&&(s.c(),s.m(e,null)))},d(l){l&&v(e),s.d()}}}function Ke(o){let e,n,t;return n=new Ae({props:{label:"Objects",open:!0,$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){e=b("div"),be(n.$$.fragment),m(e,"class","svelte-l42ea0")},m(s,l){y(s,e,l),ge(n,e,null),t=!0},p(s,[l]){const i={};l&3&&(i.$$scope={dirty:l,ctx:s}),n.$set(i)},i(s){t||(C(n.$$.fragment,s),t=!0)},o(s){O(n.$$.fragment,s),t=!1},d(s){s&&v(e),ye(n)}}}function xe(o,e,n){let{schema:t}=e;return o.$$set=s=>{"schema"in s&&n(0,t=s.schema)},[t]}class ft extends j{constructor(e){super(),z(this,e,xe,Ke,I,{schema:0})}}let D="interventions";function et(o,e,n){let t,s;Z(o,J,p=>n(1,t=p)),Z(o,le,p=>n(2,s=p));let{schema:l}=e;ve(t,D,s);const i=["match",["get","intervention_type"],"area",k.area,"route",k.route,"crossing",k.crossing,"other",k.other,"white"],c=["match",["get","reference_type",["get","planning"]],"preapp",k.preapp,"outline",k.outline,"reserved matters",k["reserved matters"],"local plan",k["local plan"],"white"],u=["!=","hide_while_editing",!0];return A(t,{id:"interventions-points",source:D,filter:["all",ke,u,["!=","endpoint",!0]],color:i,radius:Te}),he(t,{id:"interventions-lines",source:D,filter:["all",Se,u],color:i,width:K}),A(t,{id:"interventions-lines-endpoints",source:D,filter:["==","endpoint",!0],radius:.5*K,opacity:0,strokeColor:k.lineEndpointColor,strokeWidth:2}),we(t,{id:"interventions-polygons",source:D,filter:["all",Ce,u],color:l=="planning"?c:i,opacity:.5}),o.$$set=p=>{"schema"in p&&n(0,l=p.schema)},o.$$.update=()=>{if(o.$$.dirty&6){let p=JSON.parse(JSON.stringify(s)),_=[];for(let d of p.features)if(d.geometry.type=="LineString"&&!d.properties.hide_while_editing)for(let f of[d.geometry.coordinates[0],d.geometry.coordinates[d.geometry.coordinates.length-1]])_.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:f}});p.features=p.features.concat(_),t.getSource(D).setData(p)}},[l,t,s]}class pt extends j{constructor(e){super(),z(this,e,et,null,I,{schema:0})}}export{ut as B,Ae as C,pt as I,at as L,rt as M,ct as Z,Me as a,Oe as b,k as c,lt as d,Te as e,Be as f,le as g,nt as h,it as i,ft as j,K as l,J as m,ot as n,Ie as o,st as r,x as s,qe as u};
