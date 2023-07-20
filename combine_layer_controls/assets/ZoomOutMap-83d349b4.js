import{R,s as D,M as fe,S as P,i as E,ab as j,e as p,f as C,h as v,aG as Q,j as h,k as b,w as U,ac as q,ad as F,ae as G,t as L,l as O,p as y,G as J,I as de,L as X,K as Y,J as me,P as _e,O as pe,N as $,u as I,x as ie,F as ge,g as V,m as W,q as Z,al as x,Q as be,aw as ve,aH as ee,am as he,av as ye,ar as we,aI as ke,v as K,A as N,T as re,b as ue,c as Se,o as Le,aa as B,y as Ce,n as Oe,aJ as Ie,r as Me,a as De,ak as Be,B as Pe}from"./maplibre_helpers-f351ca71.js";const z=[];function M(n,e=R){let s;const t=new Set;function l(u){if(D(n,u)&&(n=u,s)){const c=!z.length;for(const a of t)a[1](),z.push(a,n);if(c){for(let a=0;a<z.length;a+=2)z[a][0](z[a+1]);z.length=0}}}function o(u){l(u(n))}function i(u,c=R){const a=[u,c];return t.add(a),t.size===1&&(s=e(l,o)||R),u(n),()=>{t.delete(a),t.size===0&&s&&(s(),s=null)}}return{set:l,update:o,subscribe:i}}function Ee(n){return n=="google"||n=="bing"}function ft(n){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[n]}function dt(n){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[n]}function mt(n){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[n]}const A=M(null),_t=M(null),ce=M(fe()),Te=M(null),ze=M(null),Re=M(null),je=M(null),qe=M(Fe());qe.subscribe(n=>window.localStorage.setItem("userSettings",JSON.stringify(n)));const pt=M("edit-attribute"),gt=M(!1);function bt(n){let e=new Set;for(let t of n.features)e.add(t.id);let s=e.size+1;for(;e.has(s);)s++;return s}function vt(n){console.log(`Deleting intervention ${n}`),ce.update(e=>(e.features=e.features.filter(s=>s.id!=n),e)),Te.set(null),ze.set(null),Re.set(null),je.set(null)}function Fe(){let n={streetViewImagery:"google",avoidDoublingBack:!1};try{let e=JSON.parse(window.localStorage.getItem("userSettings")||"{}");Ee(e.streetViewImagery)&&(n.streetViewImagery=e.streetViewImagery),typeof e.avoidDoublingBack=="boolean"&&(n.avoidDoublingBack=e.avoidDoublingBack)}catch(e){console.log(`Couldn't parse userSettings from local storage: ${e}`)}return n}const Ge=n=>({}),te=n=>({}),Ne=n=>({}),ne=n=>({});function Je(n){let e,s,t,l,o,i,u,c,a,r,m;const k=n[3].sidebar,_=j(k,n,n[2],ne),d=n[3].main,g=j(d,n,n[2],te);return{c(){e=p("div"),s=p("aside"),t=p("div"),_&&_.c(),l=C(),o=p("button"),o.textContent="→",u=C(),c=p("main"),g&&g.c(),v(t,"class","sidebar-content content-container svelte-ect12w"),v(o,"type","button"),v(o,"class","sidebar-toggle rounded-rect svelte-ect12w"),v(s,"class",i=Q(n[0]?"":"collapsed")+" svelte-ect12w"),v(c,"class","svelte-ect12w"),v(e,"class","overall-layout svelte-ect12w")},m(f,w){h(f,e,w),b(e,s),b(s,t),_&&_.m(t,null),b(s,l),b(s,o),b(e,u),b(e,c),g&&g.m(c,null),a=!0,r||(m=U(o,"click",n[1]),r=!0)},p(f,[w]){_&&_.p&&(!a||w&4)&&q(_,k,f,f[2],a?G(k,f[2],w,Ne):F(f[2]),ne),(!a||w&1&&i!==(i=Q(f[0]?"":"collapsed")+" svelte-ect12w"))&&v(s,"class",i),g&&g.p&&(!a||w&4)&&q(g,d,f,f[2],a?G(d,f[2],w,Ge):F(f[2]),te)},i(f){a||(L(_,f),L(g,f),a=!0)},o(f){O(_,f),O(g,f),a=!1},d(f){f&&y(e),_&&_.d(f),g&&g.d(f),r=!1,m()}}}function Ve(n,e,s){let{$$slots:t={},$$scope:l}=e,o=!0;function i(){s(0,o=!o)}return n.$$set=u=>{"$$scope"in u&&s(2,l=u.$$scope)},[o,i,l,t]}class ht extends P{constructor(e){super(),E(this,e,Ve,Je,D,{})}}const S={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},We=10,H=10;let T="interventions";function Ze(n,e,s){let t,l;J(n,A,r=>s(1,t=r)),J(n,ce,r=>s(2,l=r));let{schema:o}=e;de(t,T,l);const i=["match",["get","intervention_type"],"area",S.area,"route",S.route,"crossing",S.crossing,"other",S.other,"white"],u=["match",["get","reference_type",["get","planning"]],"preapp",S.preapp,"outline",S.outline,"reserved matters",S["reserved matters"],"local plan",S["local plan"],"white"],c=["!=","hide_while_editing",!0];return X(t,{id:"interventions-points",source:T,filter:["all",_e,c,["!=","endpoint",!0]],color:i,radius:We}),Y(t,{id:"interventions-lines",source:T,filter:["all",pe,c],color:i,width:H}),X(t,{id:"interventions-lines-endpoints",source:T,filter:["==","endpoint",!0],radius:.5*H,opacity:0,strokeColor:S.lineEndpointColor,strokeWidth:2}),me(t,{id:"interventions-polygons",source:T,filter:["all",$,c],color:o=="planning"?u:i,opacity:.2}),Y(t,{id:"interventions-polygon-outlines",source:T,filter:["all",$,c],color:o=="planning"?u:i,opacity:.5,width:.7*H}),n.$$set=r=>{"schema"in r&&s(0,o=r.schema)},n.$$.update=()=>{if(n.$$.dirty&6){let r=JSON.parse(JSON.stringify(l)),m=[];for(let k of r.features)if(k.geometry.type=="LineString"&&!k.properties.hide_while_editing)for(let _ of[k.geometry.coordinates[0],k.geometry.coordinates[k.geometry.coordinates.length-1]])m.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:_}});r.features=r.features.concat(m),t.getSource(T).setData(r)}},[o,t,l]}class yt extends P{constructor(e){super(),E(this,e,Ze,null,D,{schema:0})}}function Ae(n){let e,s,t,l,o,i,u;const c=n[3].default,a=j(c,n,n[2],null);return{c(){e=p("details"),s=p("summary"),t=p("span"),l=I(n[0]),o=C(),i=p("div"),a&&a.c(),v(t,"class","govuk-details__summary-text"),v(s,"class","govuk-details__summary"),v(i,"class","govuk-details__text"),e.open=n[1],v(e,"class","govuk-details"),v(e,"data-module","govuk-details")},m(r,m){h(r,e,m),b(e,s),b(s,t),b(t,l),b(e,o),b(e,i),a&&a.m(i,null),u=!0},p(r,[m]){(!u||m&1)&&ie(l,r[0]),a&&a.p&&(!u||m&4)&&q(a,c,r,r[2],u?G(c,r[2],m,null):F(r[2]),null),(!u||m&2)&&(e.open=r[1])},i(r){u||(L(a,r),u=!0)},o(r){O(a,r),u=!1},d(r){r&&y(e),a&&a.d(r)}}}function He(n,e,s){let{$$slots:t={},$$scope:l}=e,{label:o}=e,{open:i=!1}=e;return n.$$set=u=>{"label"in u&&s(0,o=u.label),"open"in u&&s(1,i=u.open),"$$scope"in u&&s(2,l=u.$$scope)},[o,i,l,t]}class Ue extends P{constructor(e){super(),E(this,e,He,Ae,D,{label:0,open:1})}}function se(n,e,s){const t=n.slice();return t[8]=e[s][0],t[9]=e[s][1],t}function le(n){let e;return{c(){e=p("option"),e.__value="",K(e,e.__value)},m(s,t){h(s,e,t)},d(s){s&&y(e)}}}function oe(n){let e,s=n[9]+"",t,l;return{c(){e=p("option"),t=I(s),e.__value=l=n[8],K(e,e.__value)},m(o,i){h(o,e,i),b(e,t)},p(o,i){i&8&&s!==(s=o[9]+"")&&ie(t,s),i&8&&l!==(l=o[8])&&(e.__value=l,K(e,e.__value))},d(o){o&&y(e)}}}function Ke(n){let e,s,t,l,o=n[4]&&le(),i=x(n[3]),u=[];for(let c=0;c<i.length;c+=1)u[c]=oe(se(n,i,c));return{c(){e=p("select"),o&&o.c(),s=be();for(let c=0;c<u.length;c+=1)u[c].c();v(e,"class","govuk-select"),v(e,"id",n[2]),e.disabled=n[5],n[0]===void 0&&ve(()=>n[7].call(e))},m(c,a){h(c,e,a),o&&o.m(e,null),b(e,s);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(e,null);ee(e,n[0],!0),t||(l=[U(e,"change",n[7]),U(e,"change",n[6])],t=!0)},p(c,a){if(c[4]?o||(o=le(),o.c(),o.m(e,s)):o&&(o.d(1),o=null),a&8){i=x(c[3]);let r;for(r=0;r<i.length;r+=1){const m=se(c,i,r);u[r]?u[r].p(m,a):(u[r]=oe(m),u[r].c(),u[r].m(e,null))}for(;r<u.length;r+=1)u[r].d(1);u.length=i.length}a&4&&v(e,"id",c[2]),a&32&&(e.disabled=c[5]),a&9&&ee(e,c[0])},d(c){c&&y(e),o&&o.d(),he(u,c),t=!1,ye(l)}}}function Qe(n){let e,s;return e=new ge({props:{label:n[1],id:n[2],$$slots:{default:[Ke]},$$scope:{ctx:n}}}),{c(){V(e.$$.fragment)},m(t,l){W(e,t,l),s=!0},p(t,[l]){const o={};l&2&&(o.label=t[1]),l&4&&(o.id=t[2]),l&4157&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){Z(e,t)}}}function Xe(n,e,s){let{label:t}=e,{id:l}=e,{choices:o}=e,{emptyOption:i=!1}=e,{disabled:u=!1}=e,{value:c}=e;function a(m){we.call(this,n,m)}function r(){c=ke(this),s(0,c),s(3,o)}return n.$$set=m=>{"label"in m&&s(1,t=m.label),"id"in m&&s(2,l=m.id),"choices"in m&&s(3,o=m.choices),"emptyOption"in m&&s(4,i=m.emptyOption),"disabled"in m&&s(5,u=m.disabled),"value"in m&&s(0,c=m.value)},[c,t,l,o,i,u,a,r]}class Ye extends P{constructor(e){super(),E(this,e,Xe,Qe,D,{label:1,id:2,choices:3,emptyOption:4,disabled:5,value:0})}}function $e(n,e,s){let t;J(n,A,a=>s(2,t=a));let{layers:l}=e,{contents:o}=e,i=new N.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",u),t.on("mouseout",c),re(()=>{t.off("mousemove",u),t.off("mouseout",c),i.remove()});function u(a){if(!l.every(m=>t.getLayer(m))){i.remove();return}let r=t.queryRenderedFeatures(a.point,{layers:l});r.length>0?i.setLngLat(a.lngLat).setHTML(o(r[0].properties)).addTo(t):i.remove()}function c(){i.remove()}return n.$$set=a=>{"layers"in a&&s(0,l=a.layers),"contents"in a&&s(1,o=a.contents)},[l,o]}class wt extends P{constructor(e){super(),E(this,e,$e,null,D,{layers:0,contents:1})}}function xe(n){let e,s,t,l,o,i,u,c,a,r,m,k,_,d,g;return{c(){e=p("li"),s=p("span"),t=I(`
          Areas`),l=C(),o=p("li"),i=p("span"),u=I(`
          Routes`),c=C(),a=p("li"),r=p("span"),m=I(`
          Crossings`),k=C(),_=p("li"),d=p("span"),g=I(`
          Other`),v(s,"class","svelte-l42ea0"),B(s,"background",S.area),v(i,"class","svelte-l42ea0"),B(i,"background",S.route),v(r,"class","svelte-l42ea0"),B(r,"background",S.crossing),v(d,"class","svelte-l42ea0"),B(d,"background",S.other)},m(f,w){h(f,e,w),b(e,s),b(e,t),h(f,l,w),h(f,o,w),b(o,i),b(o,u),h(f,c,w),h(f,a,w),b(a,r),b(a,m),h(f,k,w),h(f,_,w),b(_,d),b(_,g)},p:R,d(f){f&&(y(e),y(l),y(o),y(c),y(a),y(k),y(_))}}}function et(n){let e,s,t,l,o,i,u,c,a,r,m,k,_,d,g;return{c(){e=p("li"),s=p("span"),t=I(`
          Preapp`),l=C(),o=p("li"),i=p("span"),u=I(`
          Outline`),c=C(),a=p("li"),r=p("span"),m=I(`
          Reserved matters`),k=C(),_=p("li"),d=p("span"),g=I(`
          Local plan`),v(s,"class","svelte-l42ea0"),B(s,"background",S.preapp),v(i,"class","svelte-l42ea0"),B(i,"background",S.outline),v(r,"class","svelte-l42ea0"),B(r,"background",S["reserved matters"]),v(d,"class","svelte-l42ea0"),B(d,"background",S["local plan"])},m(f,w){h(f,e,w),b(e,s),b(e,t),h(f,l,w),h(f,o,w),b(o,i),b(o,u),h(f,c,w),h(f,a,w),b(a,r),b(a,m),h(f,k,w),h(f,_,w),b(_,d),b(_,g)},p:R,d(f){f&&(y(e),y(l),y(o),y(c),y(a),y(k),y(_))}}}function tt(n){let e,s,t,l,o,i;function u(d,g){return d[1]=="planning"?et:xe}let c=u(n),a=c(n);function r(d){n[4](d)}let m={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"]]};n[0]!==void 0&&(m.value=n[0]),t=new Ye({props:m}),ue.push(()=>Se(t,"value",r)),t.$on("change",n[2]);const k=n[3].default,_=j(k,n,n[5],null);return{c(){e=p("ul"),a.c(),s=C(),V(t.$$.fragment),o=C(),_&&_.c()},m(d,g){h(d,e,g),a.m(e,null),h(d,s,g),W(t,d,g),h(d,o,g),_&&_.m(d,g),i=!0},p(d,g){c===(c=u(d))&&a?a.p(d,g):(a.d(1),a=c(d),a&&(a.c(),a.m(e,null)));const f={};!l&&g&1&&(l=!0,f.value=d[0],Le(()=>l=!1)),t.$set(f),_&&_.p&&(!i||g&32)&&q(_,k,d,d[5],i?G(k,d[5],g,null):F(d[5]),null)},i(d){i||(L(t.$$.fragment,d),L(_,d),i=!0)},o(d){O(t.$$.fragment,d),O(_,d),i=!1},d(d){d&&(y(e),y(s),y(o)),a.d(),Z(t,d),_&&_.d(d)}}}function nt(n){let e,s,t;return s=new Ue({props:{label:"Layers",open:!0,$$slots:{default:[tt]},$$scope:{ctx:n}}}),{c(){e=p("div"),V(s.$$.fragment),v(e,"class","svelte-l42ea0")},m(l,o){h(l,e,o),W(s,e,null),t=!0},p(l,[o]){const i={};o&35&&(i.$$scope={dirty:o,ctx:l}),s.$set(i)},i(l){t||(L(s.$$.fragment,l),t=!0)},o(l){O(s.$$.fragment,l),t=!1},d(l){l&&y(e),Z(s)}}}function st(n,e,s){let{$$slots:t={},$$scope:l}=e,{schema:o}=e,{style:i}=e;function u(){let a=new URLSearchParams(window.location.search);a.set("style",i);let r=`${window.location.pathname}?${a.toString()}${window.location.hash}`;window.location.href=r}function c(a){i=a,s(0,i)}return n.$$set=a=>{"schema"in a&&s(1,o=a.schema),"style"in a&&s(0,i=a.style),"$$scope"in a&&s(5,l=a.$$scope)},[i,o,u,t,c,l]}class kt extends P{constructor(e){super(),E(this,e,st,nt,D,{schema:1,style:0})}}function ae(n){let e;const s=n[4].default,t=j(s,n,n[3],null);return{c(){t&&t.c()},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&8)&&q(t,s,l,l[3],e?G(s,l[3],o,null):F(l[3]),null)},i(l){e||(L(t,l),e=!0)},o(l){O(t,l),e=!1},d(l){t&&t.d(l)}}}function lt(n){let e,s,t=n[1]&&ae(n);return{c(){e=p("div"),t&&t.c(),v(e,"class","map svelte-12dpf1u")},m(l,o){h(l,e,o),t&&t.m(e,null),n[5](e),s=!0},p(l,[o]){l[1]?t?(t.p(l,o),o&2&&L(t,1)):(t=ae(l),t.c(),L(t,1),t.m(e,null)):t&&(Ce(),O(t,1,1,()=>{t=null}),Oe())},i(l){s||(L(t),s=!0)},o(l){O(t),s=!1},d(l){l&&y(e),t&&t.d(),n[5](null)}}}function ot(n,e,s){let{$$slots:t={},$$scope:l}=e,{style:o}=e,i,u,c=!1;Ie("setCamera",!window.location.hash),Me(()=>{i=new N.Map({container:u,style:`https://api.maptiler.com/maps/${o}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),i.addControl(new N.ScaleControl({})),i.addControl(new N.NavigationControl({visualizePitch:!0}),"bottom-right"),i.on("load",()=>{s(1,c=!0),A.set(i)}),new ResizeObserver(()=>{i.resize()}).observe(u)}),re(()=>{i.remove()});function a(r){ue[r?"unshift":"push"](()=>{u=r,s(0,u)})}return n.$$set=r=>{"style"in r&&s(2,o=r.style),"$$scope"in r&&s(3,l=r.$$scope)},[u,c,o,l,t,a]}class St extends P{constructor(e){super(),E(this,e,ot,lt,D,{style:2})}}const at="/atip/combine_layer_controls/assets/zoom_out_map-b2e1091a.svg";function it(n){let e,s;return{c(){e=p("img"),Be(e.src,s=at)||v(e,"src",s),v(e,"alt","Zoom to show entire boundary")},m(t,l){h(t,e,l)},p:R,d(t){t&&y(e)}}}function rt(n){let e,s;return e=new De({props:{title:"Zoom to show entire boundary",$$slots:{default:[it]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){V(e.$$.fragment)},m(t,l){W(e,t,l),s=!0},p(t,[l]){const o={};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){Z(e,t)}}}function ut(n,e,s){let t;J(n,A,i=>s(2,t=i));let{boundaryGeojson:l}=e;function o(){t.fitBounds(Pe(l),{padding:20,animate:!0,duration:500})}return n.$$set=i=>{"boundaryGeojson"in i&&s(1,l=i.boundaryGeojson)},[o,l]}class Lt extends P{constructor(e){super(),E(this,e,ut,rt,D,{boundaryGeojson:1})}}export{Ue as C,yt as I,ht as L,wt as M,Ye as S,Lt as Z,ze as a,We as b,S as c,pt as d,dt as e,Te as f,ce as g,mt as h,gt as i,vt as j,ft as k,H as l,A as m,bt as n,je as o,St as p,kt as q,_t as r,Re as s,qe as u};
