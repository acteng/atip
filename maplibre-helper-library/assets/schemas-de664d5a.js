import{S as B,i as $,s as M,C as O,e as p,h as _,j as S,k as h,H as E,J as P,K as z,t as k,l as y,p as C,f as j,V as Z,w as D,ay as re,O as ce,aI as pe,F as he,g as G,m as H,q,T as F,a3 as be,az as ve,aJ as Q,U as ue,aK as ke,v as T,u as U,R as K,b as V,c as fe,o as de,x as W,P as ye,au as _e,aL as X,y as me,n as ge,aM as we,r as Se,A as J,B as Y,a6 as Ce,a as Le,Y as A,M as L,_ as Be}from"./MapLibreMap.svelte_svelte_type_style_lang-c000e451.js";function $e(l){let e,n,t;const s=l[3].default,o=O(s,l,l[2],null);return{c(){e=p("fieldset"),n=p("div"),o&&o.c(),_(n,"class",l[0]),_(n,"data-module","govuk-checkboxes"),_(e,"class","govuk-fieldset")},m(i,a){S(i,e,a),h(e,n),o&&o.m(n,null),t=!0},p(i,[a]){o&&o.p&&(!t||a&4)&&E(o,s,i,i[2],t?z(s,i[2],a,null):P(i[2]),null)},i(i){t||(k(o,i),t=!0)},o(i){y(o,i),t=!1},d(i){i&&C(e),o&&o.d(i)}}}function Me(l,e,n){let{$$slots:t={},$$scope:s}=e,{small:o=!1}=e,i=o?"govuk-checkboxes--small":"govuk-checkboxes";return l.$$set=a=>{"small"in a&&n(1,o=a.small),"$$scope"in a&&n(2,s=a.$$scope)},[i,o,s,t]}class ut extends B{constructor(e){super(),$(this,e,Me,$e,M,{small:1})}}const Oe=l=>({}),x=l=>({});function Ee(l){let e,n,t,s,o,i,a,r,u;const c=l[5].default,f=O(c,l,l[4],null),m=l[5].right,d=O(m,l,l[4],x);return{c(){e=p("div"),n=p("input"),t=j(),s=p("label"),f&&f.c(),o=j(),i=p("span"),d&&d.c(),_(n,"type","checkbox"),_(n,"class","govuk-checkboxes__input"),_(n,"id",l[1]),_(s,"class","govuk-label govuk-checkboxes__label"),_(s,"for",l[1]),_(s,"title",l[2]),Z(i,"float","right"),_(e,"class","govuk-checkboxes__item"),_(e,"style",l[3])},m(g,b){S(g,e,b),h(e,n),n.checked=l[0],h(e,t),h(e,s),f&&f.m(s,null),h(e,o),h(e,i),d&&d.m(i,null),a=!0,r||(u=[D(n,"change",l[7]),D(n,"change",l[6])],r=!0)},p(g,[b]){(!a||b&2)&&_(n,"id",g[1]),b&1&&(n.checked=g[0]),f&&f.p&&(!a||b&16)&&E(f,c,g,g[4],a?z(c,g[4],b,null):P(g[4]),null),(!a||b&2)&&_(s,"for",g[1]),(!a||b&4)&&_(s,"title",g[2]),d&&d.p&&(!a||b&16)&&E(d,m,g,g[4],a?z(m,g[4],b,Oe):P(g[4]),x)},i(g){a||(k(f,g),k(d,g),a=!0)},o(g){y(f,g),y(d,g),a=!1},d(g){g&&C(e),f&&f.d(g),d&&d.d(g),r=!1,re(u)}}}function Pe(l,e,n){let{$$slots:t={},$$scope:s}=e;const o=pe(t);let{id:i}=e,{checked:a}=e,{hint:r=null}=e,c=o.right!==void 0?"float: none":"";function f(d){ce.call(this,l,d)}function m(){a=this.checked,n(0,a)}return l.$$set=d=>{"id"in d&&n(1,i=d.id),"checked"in d&&n(0,a=d.checked),"hint"in d&&n(2,r=d.hint),"$$scope"in d&&n(4,s=d.$$scope)},[a,i,r,c,s,t,f,m]}class ft extends B{constructor(e){super(),$(this,e,Pe,Ee,M,{id:1,checked:0,hint:2})}}function ee(l,e,n){const t=l.slice();return t[8]=e[n][0],t[9]=e[n][1],t}function te(l){let e;return{c(){e=p("option"),e.__value="",T(e,e.__value)},m(n,t){S(n,e,t)},d(n){n&&C(e)}}}function ne(l){let e,n=l[9]+"",t,s;return{c(){e=p("option"),t=U(n),e.__value=s=l[8],T(e,e.__value)},m(o,i){S(o,e,i),h(e,t)},p(o,i){i&8&&n!==(n=o[9]+"")&&K(t,n),i&8&&s!==(s=o[8])&&(e.__value=s,T(e,e.__value))},d(o){o&&C(e)}}}function ze(l){let e,n,t,s,o=l[4]&&te(),i=F(l[3]),a=[];for(let r=0;r<i.length;r+=1)a[r]=ne(ee(l,i,r));return{c(){e=p("select"),o&&o.c(),n=be();for(let r=0;r<a.length;r+=1)a[r].c();_(e,"class","govuk-select"),_(e,"id",l[2]),e.disabled=l[5],l[0]===void 0&&ve(()=>l[7].call(e))},m(r,u){S(r,e,u),o&&o.m(e,null),h(e,n);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(e,null);Q(e,l[0],!0),t||(s=[D(e,"change",l[7]),D(e,"change",l[6])],t=!0)},p(r,u){if(r[4]?o||(o=te(),o.c(),o.m(e,n)):o&&(o.d(1),o=null),u&8){i=F(r[3]);let c;for(c=0;c<i.length;c+=1){const f=ee(r,i,c);a[c]?a[c].p(f,u):(a[c]=ne(f),a[c].c(),a[c].m(e,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=i.length}u&4&&_(e,"id",r[2]),u&32&&(e.disabled=r[5]),u&9&&Q(e,r[0])},d(r){r&&C(e),o&&o.d(),ue(a,r),t=!1,re(s)}}}function je(l){let e,n;return e=new he({props:{label:l[1],id:l[2],$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},m(t,s){H(e,t,s),n=!0},p(t,[s]){const o={};s&2&&(o.label=t[1]),s&4&&(o.id=t[2]),s&4157&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Ie(l,e,n){let{label:t}=e,{id:s}=e,{choices:o}=e,{emptyOption:i=!1}=e,{disabled:a=!1}=e,{value:r}=e;function u(f){ce.call(this,l,f)}function c(){r=ke(this),n(0,r),n(3,o)}return l.$$set=f=>{"label"in f&&n(1,t=f.label),"id"in f&&n(2,s=f.id),"choices"in f&&n(3,o=f.choices),"emptyOption"in f&&n(4,i=f.emptyOption),"disabled"in f&&n(5,a=f.disabled),"value"in f&&n(0,r=f.value)},[r,t,s,o,i,a,u,c]}class Re extends B{constructor(e){super(),$(this,e,Ie,je,M,{label:1,id:2,choices:3,emptyOption:4,disabled:5,value:0})}}function De(l){let e,n,t;function s(i){l[2](i)}let o={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"],["dataviz","Dataviz"]]};return l[0]!==void 0&&(o.value=l[0]),e=new Re({props:o}),V.push(()=>fe(e,"value",s)),e.$on("change",l[1]),{c(){G(e.$$.fragment)},m(i,a){H(e,i,a),t=!0},p(i,[a]){const r={};!n&&a&1&&(n=!0,r.value=i[0],de(()=>n=!1)),e.$set(r)},i(i){t||(k(e.$$.fragment,i),t=!0)},o(i){y(e.$$.fragment,i),t=!1},d(i){q(e,i)}}}function Ge(l,e,n){let{style:t}=e;function s(){let i=new URLSearchParams(window.location.search);i.set("style",t);let a=`${window.location.pathname}?${i.toString()}${window.location.hash}`;window.location.href=a}function o(i){t=i,n(0,t)}return l.$$set=i=>{"style"in i&&n(0,t=i.style)},[t,s,o]}class dt extends B{constructor(e){super(),$(this,e,Ge,De,M,{style:0})}}function He(l){let e,n,t,s,o,i,a;const r=l[3].default,u=O(r,l,l[2],null);return{c(){e=p("details"),n=p("summary"),t=p("span"),s=U(l[0]),o=j(),i=p("div"),u&&u.c(),_(t,"class","govuk-details__summary-text"),_(n,"class","govuk-details__summary"),_(i,"class","govuk-details__text"),e.open=l[1],_(e,"class","govuk-details"),_(e,"data-module","govuk-details")},m(c,f){S(c,e,f),h(e,n),h(n,t),h(t,s),h(e,o),h(e,i),u&&u.m(i,null),a=!0},p(c,[f]){(!a||f&1)&&K(s,c[0]),u&&u.p&&(!a||f&4)&&E(u,r,c,c[2],a?z(r,c[2],f,null):P(c[2]),null),(!a||f&2)&&(e.open=c[1])},i(c){a||(k(u,c),a=!0)},o(c){y(u,c),a=!1},d(c){c&&C(e),u&&u.d(c)}}}function qe(l,e,n){let{$$slots:t={},$$scope:s}=e,{label:o}=e,{open:i=!1}=e;return l.$$set=a=>{"label"in a&&n(0,o=a.label),"open"in a&&n(1,i=a.open),"$$scope"in a&&n(2,s=a.$$scope)},[o,i,s,t]}class Fe extends B{constructor(e){super(),$(this,e,qe,He,M,{label:0,open:1})}}function Je(l){let e;return{c(){e=p("span"),_(e,"class","svelte-kzgqtg"),Z(e,"background",l[0])},m(n,t){S(n,e,t)},p(n,[t]){t&1&&Z(e,"background",n[0])},i:W,o:W,d(n){n&&C(e)}}}function Ne(l,e,n){let{color:t}=e;return l.$$set=s=>{"color"in s&&n(0,t=s.color)},[t]}class Ze extends B{constructor(e){super(),$(this,e,Ne,Je,M,{color:0})}}const Te="/atip/maplibre-helper-library/assets/help-d011708a.svg";function We(l){let e,n;const t=l[1].default,s=O(t,l,l[4],null);return{c(){e=p("div"),s&&s.c(),_(e,"class","govuk-prose")},m(o,i){S(o,e,i),s&&s.m(e,null),n=!0},p(o,i){s&&s.p&&(!n||i&16)&&E(s,t,o,o[4],n?z(t,o[4],i,null):P(o[4]),null)},i(o){n||(k(s,o),n=!0)},o(o){y(s,o),n=!1},d(o){o&&C(e),s&&s.d(o)}}}function Ae(l){let e,n,t,s,o,i,a,r,u;function c(m){l[3](m)}let f={title:"Help",$$slots:{default:[We]},$$scope:{ctx:l}};return l[0]!==void 0&&(f.open=l[0]),o=new ye({props:f}),V.push(()=>fe(o,"open",c)),{c(){e=p("button"),n=p("img"),s=j(),G(o.$$.fragment),_e(n.src,t=Te)||_(n,"src",t),_(n,"title","Help"),_(n,"alt","Help"),_(e,"class","svelte-7d9d1l")},m(m,d){S(m,e,d),h(e,n),S(m,s,d),H(o,m,d),a=!0,r||(u=D(e,"click",l[2]),r=!0)},p(m,[d]){const g={};d&16&&(g.$$scope={dirty:d,ctx:m}),!i&&d&1&&(i=!0,g.open=m[0],de(()=>i=!1)),o.$set(g)},i(m){a||(k(o.$$.fragment,m),a=!0)},o(m){y(o.$$.fragment,m),a=!1},d(m){m&&(C(e),C(s)),q(o,m),r=!1,u()}}}function Ue(l,e,n){let{$$slots:t={},$$scope:s}=e,o=!1;const i=()=>n(0,o=!0);function a(r){o=r,n(0,o)}return l.$$set=r=>{"$$scope"in r&&n(4,s=r.$$scope)},[o,t,i,a,s]}class _t extends B{constructor(e){super(),$(this,e,Ue,Ae,M,{})}}const Ke=l=>({}),le=l=>({}),Ve=l=>({}),se=l=>({});function Ye(l){let e,n,t,s,o,i,a,r,u,c,f;const m=l[3].sidebar,d=O(m,l,l[2],se),g=l[3].main,b=O(g,l,l[2],le);return{c(){e=p("div"),n=p("aside"),t=p("div"),d&&d.c(),s=j(),o=p("button"),o.textContent="→",a=j(),r=p("main"),b&&b.c(),_(t,"class","sidebar-content content-container svelte-ect12w"),_(o,"type","button"),_(o,"class","sidebar-toggle rounded-rect svelte-ect12w"),_(n,"class",i=X(l[0]?"":"collapsed")+" svelte-ect12w"),_(r,"class","svelte-ect12w"),_(e,"class","overall-layout svelte-ect12w")},m(v,I){S(v,e,I),h(e,n),h(n,t),d&&d.m(t,null),h(n,s),h(n,o),h(e,a),h(e,r),b&&b.m(r,null),u=!0,c||(f=D(o,"click",l[1]),c=!0)},p(v,[I]){d&&d.p&&(!u||I&4)&&E(d,m,v,v[2],u?z(m,v[2],I,Ve):P(v[2]),se),(!u||I&1&&i!==(i=X(v[0]?"":"collapsed")+" svelte-ect12w"))&&_(n,"class",i),b&&b.p&&(!u||I&4)&&E(b,g,v,v[2],u?z(g,v[2],I,Ke):P(v[2]),le)},i(v){u||(k(d,v),k(b,v),u=!0)},o(v){y(d,v),y(b,v),u=!1},d(v){v&&C(e),d&&d.d(v),b&&b.d(v),c=!1,f()}}}function Qe(l,e,n){let{$$slots:t={},$$scope:s}=e,o=!0;function i(){n(0,o=!o)}return l.$$set=a=>{"$$scope"in a&&n(2,s=a.$$scope)},[o,i,s,t]}class mt extends B{constructor(e){super(),$(this,e,Qe,Ye,M,{})}}function oe(l,e,n){const t=l.slice();return t[1]=e[n][0],t[2]=e[n][1],t}function ie(l){let e,n,t,s=l[1]+"",o,i,a;return n=new Ze({props:{color:l[2]}}),{c(){e=p("li"),G(n.$$.fragment),t=j(),o=U(s),i=j()},m(r,u){S(r,e,u),H(n,e,null),h(e,t),h(e,o),h(e,i),a=!0},p(r,u){const c={};u&1&&(c.color=r[2]),n.$set(c),(!a||u&1)&&s!==(s=r[1]+"")&&K(o,s)},i(r){a||(k(n.$$.fragment,r),a=!0)},o(r){y(n.$$.fragment,r),a=!1},d(r){r&&C(e),q(n)}}}function Xe(l){let e,n,t=F(l[0]),s=[];for(let i=0;i<t.length;i+=1)s[i]=ie(oe(l,t,i));const o=i=>y(s[i],1,1,()=>{s[i]=null});return{c(){e=p("ul");for(let i=0;i<s.length;i+=1)s[i].c()},m(i,a){S(i,e,a);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);n=!0},p(i,a){if(a&1){t=F(i[0]);let r;for(r=0;r<t.length;r+=1){const u=oe(i,t,r);s[r]?(s[r].p(u,a),k(s[r],1)):(s[r]=ie(u),s[r].c(),k(s[r],1),s[r].m(e,null))}for(me(),r=t.length;r<s.length;r+=1)o(r);ge()}},i(i){if(!n){for(let a=0;a<t.length;a+=1)k(s[a]);n=!0}},o(i){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)y(s[a]);n=!1},d(i){i&&C(e),ue(s,i)}}}function xe(l){let e,n;return e=new Fe({props:{label:"Legend",$$slots:{default:[Xe]},$$scope:{ctx:l}}}),{c(){G(e.$$.fragment)},m(t,s){H(e,t,s),n=!0},p(t,[s]){const o={};s&33&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function et(l,e,n){let{rows:t}=e;return l.$$set=s=>{"rows"in s&&n(0,t=s.rows)},[t]}class gt extends B{constructor(e){super(),$(this,e,et,xe,M,{rows:0})}}function ae(l){let e;const n=l[5].default,t=O(n,l,l[4],null);return{c(){t&&t.c()},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&16)&&E(t,n,s,s[4],e?z(n,s[4],o,null):P(s[4]),null)},i(s){e||(k(t,s),e=!0)},o(s){y(t,s),e=!1},d(s){t&&t.d(s)}}}function tt(l){let e,n,t=l[1]&&ae(l);return{c(){e=p("div"),t&&t.c(),_(e,"class","map svelte-12dpf1u")},m(s,o){S(s,e,o),t&&t.m(e,null),l[6](e),n=!0},p(s,[o]){s[1]?t?(t.p(s,o),o&2&&k(t,1)):(t=ae(s),t.c(),k(t,1),t.m(e,null)):t&&(me(),y(t,1,1,()=>{t=null}),ge())},i(s){n||(k(t),n=!0)},o(s){y(t),n=!1},d(s){s&&C(e),t&&t.d(),l[6](null)}}}function nt(l,e,n){let{$$slots:t={},$$scope:s}=e,{style:o}=e,{startBounds:i=null}=e,a,r,u=!1,c=!window.location.hash;we("setCamera",c),Se(()=>{a=new J.Map({container:r,style:`https://api.maptiler.com/maps/${o}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),a.addControl(new J.ScaleControl({})),a.addControl(new J.NavigationControl({visualizePitch:!0}),"bottom-right"),a.on("load",()=>{n(1,u=!0),c&&i&&a.fitBounds(i,{animate:!1}),Y.set(a)}),new ResizeObserver(()=>{a.resize()}).observe(r)}),Ce(()=>{a.remove()});function f(m){V[m?"unshift":"push"](()=>{r=m,n(0,r)})}return l.$$set=m=>{"style"in m&&n(2,o=m.style),"startBounds"in m&&n(3,i=m.startBounds),"$$scope"in m&&n(4,s=m.$$scope)},[r,u,o,i,s,t,f]}class pt extends B{constructor(e){super(),$(this,e,nt,tt,M,{style:2,startBounds:3})}}const lt="/atip/maplibre-helper-library/assets/zoom_out_map-b2e1091a.svg";function st(l){let e,n;return{c(){e=p("img"),_e(e.src,n=lt)||_(e,"src",n),_(e,"alt","Zoom to show entire boundary")},m(t,s){S(t,e,s)},p:W,d(t){t&&C(e)}}}function ot(l){let e,n;return e=new Le({props:{title:"Zoom to show entire boundary",$$slots:{default:[st]},$$scope:{ctx:l}}}),e.$on("click",l[0]),{c(){G(e.$$.fragment)},m(t,s){H(e,t,s),n=!0},p(t,[s]){const o={};s&8&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function it(l,e,n){let t;A(l,Y,i=>n(2,t=i));let{boundaryGeojson:s}=e;function o(){t.fitBounds(L.bbox(s),{padding:20,animate:!0,duration:500})}return l.$$set=i=>{"boundaryGeojson"in i&&n(1,s=i.boundaryGeojson)},[o,s]}class ht extends B{constructor(e){super(),$(this,e,it,ot,M,{boundaryGeojson:1})}}const w={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},at=10,N=10;let R="interventions";function rt(l,e,n){let t,s;A(l,Y,r=>n(1,t=r)),A(l,Be,r=>n(2,s=r));let{colorInterventions:o}=e;L.overwriteSource(t,R,s);const i=["!=","hide_while_editing",!0],a=["!=","endpoint",!0];return L.overwriteCircleLayer(t,{id:"interventions-points",source:R,filter:["all",L.isPoint,i,a],color:o,radius:at}),L.overwriteLineLayer(t,{id:"interventions-lines",source:R,filter:["all",L.isLine,i],color:o,width:N}),L.overwriteCircleLayer(t,{id:"interventions-lines-endpoints",source:R,filter:["==","endpoint",!0],radius:.5*N,opacity:0,strokeColor:w.lineEndpointColor,strokeWidth:2}),L.overwritePolygonLayer(t,{id:"interventions-polygons",source:R,filter:["all",L.isPolygon,i],color:o,opacity:.2}),L.overwriteLineLayer(t,{id:"interventions-polygon-outlines",source:R,filter:["all",L.isPolygon,i],color:o,opacity:.5,width:.7*N}),l.$$set=r=>{"colorInterventions"in r&&n(0,o=r.colorInterventions)},l.$$.update=()=>{if(l.$$.dirty&6){let r=JSON.parse(JSON.stringify(s)),u=[];for(let c of r.features)if(c.geometry.type=="LineString"&&!c.properties.hide_while_editing)for(let f of[c.geometry.coordinates[0],c.geometry.coordinates[c.geometry.coordinates.length-1]])u.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:f}});r.features=r.features.concat(u),t.getSource(R).setData(r)}},[o,t,s]}class bt extends B{constructor(e){super(),$(this,e,rt,null,M,{colorInterventions:0})}}function vt(l){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[l]}function kt(l){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[l]}function yt(l){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[l]}function wt(l){return l=="planning"?L.constructMatchExpression(["get","reference_type",["get","planning"]],{preapp:w.preapp,outline:w.outline,"reserved matters":w["reserved matters"],"local plan":w["local plan"]},"black"):L.constructMatchExpression(["get","intervention_type"],{area:w.area,route:w.route,crossing:w.crossing,other:w.other},"white")}function St(l){return l=="planning"?[["Preapp",w.preapp],["Outline",w.outline],["Reserved matters",w["reserved matters"]],["Local plan",w["local plan"]]]:[["Areas",w.area],["Routes",w.route],["Crossings",w.crossing],["Other",w.other]]}export{dt as B,Fe as C,_t as H,bt as I,mt as L,pt as M,Re as S,ht as Z,at as a,ut as b,w as c,ft as d,yt as e,vt as f,wt as g,gt as h,St as i,Ze as j,N as l,kt as s};
