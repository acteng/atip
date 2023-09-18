import{S as b,i as w,s as S,b as q,c as A,f as k,m as L,k as T,t as d,l as m,p as C,e as $,g,J as G,h as v,w as H,o as y,M as K,d as E,aw as W,j as B,v as Q,aH as U,aI as Y,aJ as x,aK as V,H as N,x as X,n as ee,I as te,r as ne,G as oe,a as se,N as D,A as F,B as re,T as ae,P as ie,Z as O,Y as Z,Q as le,a1 as ce,a0 as ue,$ as z,ao as J}from"./MapLibreMap.svelte_svelte_type_style_lang-4fc049eb.js";import{e as fe,C as pe,a as de,l as j,c}from"./StreetViewController-2ccf444c.js";function ge(r){let e,o,t;function n(s){r[2](s)}let i={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"],["dataviz","Dataviz"]]};return r[0]!==void 0&&(i.value=r[0]),e=new fe({props:i}),q.push(()=>A(e,"value",n)),e.$on("change",r[1]),{c(){k(e.$$.fragment)},m(s,l){L(e,s,l),t=!0},p(s,[l]){const a={};!o&&l&1&&(o=!0,a.value=s[0],T(()=>o=!1)),e.$set(a)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){C(e,s)}}}function me(r,e,o){let{style:t}=e;function n(){let s=new URLSearchParams(window.location.search);s.set("style",t);let l=`${window.location.pathname}?${s.toString()}${window.location.hash}`;window.location.href=l}function i(s){t=s,o(0,t)}return r.$$set=s=>{"style"in s&&o(0,t=s.style)},[t,n,i]}class De extends b{constructor(e){super(),w(this,e,me,ge,S,{style:0})}}function _e(r){let e;return{c(){e=$("span"),g(e,"class","svelte-kzgqtg"),G(e,"background",r[0])},m(o,t){v(o,e,t)},p(o,[t]){t&1&&G(e,"background",o[0])},i:H,o:H,d(o){o&&y(e)}}}function he(r,e,o){let{color:t}=e;return r.$$set=n=>{"color"in n&&o(0,t=n.color)},[t]}class $e extends b{constructor(e){super(),w(this,e,he,_e,S,{color:0})}}const ve="/atip/crossings_fix/assets/help-d011708a.svg";function ye(r){let e,o;const t=r[1].default,n=U(t,r,r[4],null);return{c(){e=$("div"),n&&n.c(),g(e,"class","govuk-prose")},m(i,s){v(i,e,s),n&&n.m(e,null),o=!0},p(i,s){n&&n.p&&(!o||s&16)&&Y(n,t,i,i[4],o?V(t,i[4],s,null):x(i[4]),null)},i(i){o||(d(n,i),o=!0)},o(i){m(n,i),o=!1},d(i){i&&y(e),n&&n.d(i)}}}function be(r){let e,o,t,n,i,s,l,a,f;function p(u){r[3](u)}let I={title:"Help",$$slots:{default:[ye]},$$scope:{ctx:r}};return r[0]!==void 0&&(I.open=r[0]),i=new K({props:I}),q.push(()=>A(i,"open",p)),{c(){e=$("button"),o=$("img"),n=E(),k(i.$$.fragment),W(o.src,t=ve)||g(o,"src",t),g(o,"title","Help"),g(o,"alt","Help"),g(e,"class","svelte-7d9d1l")},m(u,_){v(u,e,_),B(e,o),v(u,n,_),L(i,u,_),l=!0,a||(f=Q(e,"click",r[2]),a=!0)},p(u,[_]){const P={};_&16&&(P.$$scope={dirty:_,ctx:u}),!s&&_&1&&(s=!0,P.open=u[0],T(()=>s=!1)),i.$set(P)},i(u){l||(d(i.$$.fragment,u),l=!0)},o(u){m(i.$$.fragment,u),l=!1},d(u){u&&(y(e),y(n)),C(i,u),a=!1,f()}}}function we(r,e,o){let{$$slots:t={},$$scope:n}=e,i=!1;const s=()=>o(0,i=!0);function l(a){i=a,o(0,i)}return r.$$set=a=>{"$$scope"in a&&o(4,n=a.$$scope)},[i,t,s,l,n]}class Ge extends b{constructor(e){super(),w(this,e,we,be,S,{})}}function M(r,e,o){const t=r.slice();return t[1]=e[o][0],t[2]=e[o][1],t}function R(r){let e,o,t,n=r[1]+"",i,s,l;return o=new $e({props:{color:r[2]}}),{c(){e=$("li"),k(o.$$.fragment),t=E(),i=ne(n),s=E()},m(a,f){v(a,e,f),L(o,e,null),B(e,t),B(e,i),B(e,s),l=!0},p(a,f){const p={};f&1&&(p.color=a[2]),o.$set(p),(!l||f&1)&&n!==(n=a[1]+"")&&oe(i,n)},i(a){l||(d(o.$$.fragment,a),l=!0)},o(a){m(o.$$.fragment,a),l=!1},d(a){a&&y(e),C(o)}}}function Se(r){let e,o,t=N(r[0]),n=[];for(let s=0;s<t.length;s+=1)n[s]=R(M(r,t,s));const i=s=>m(n[s],1,1,()=>{n[s]=null});return{c(){e=$("ul");for(let s=0;s<n.length;s+=1)n[s].c()},m(s,l){v(s,e,l);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);o=!0},p(s,l){if(l&1){t=N(s[0]);let a;for(a=0;a<t.length;a+=1){const f=M(s,t,a);n[a]?(n[a].p(f,l),d(n[a],1)):(n[a]=R(f),n[a].c(),d(n[a],1),n[a].m(e,null))}for(X(),a=t.length;a<n.length;a+=1)i(a);ee()}},i(s){if(!o){for(let l=0;l<t.length;l+=1)d(n[l]);o=!0}},o(s){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)m(n[l]);o=!1},d(s){s&&y(e),te(n,s)}}}function ke(r){let e,o;return e=new pe({props:{label:"Legend",$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){k(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,[n]){const i={};n&33&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(d(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function Le(r,e,o){let{rows:t}=e;return r.$$set=n=>{"rows"in n&&o(0,t=n.rows)},[t]}class Ne extends b{constructor(e){super(),w(this,e,Le,ke,S,{rows:0})}}const Ce="/atip/crossings_fix/assets/zoom_out_map-b2e1091a.svg";function Ie(r){let e,o;return{c(){e=$("img"),W(e.src,o=Ce)||g(e,"src",o),g(e,"alt","Zoom to show entire boundary")},m(t,n){v(t,e,n)},p:H,d(t){t&&y(e)}}}function Be(r){let e,o;return e=new se({props:{title:"Zoom to show entire boundary",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),e.$on("click",r[0]),{c(){k(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,[n]){const i={};n&8&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(d(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function Pe(r,e,o){let t;D(r,F,s=>o(2,t=s));let{boundaryGeojson:n}=e;function i(){t.fitBounds(re(n),{padding:20,animate:!0,duration:500})}return r.$$set=s=>{"boundaryGeojson"in s&&o(1,n=s.boundaryGeojson)},[i,n]}class Oe extends b{constructor(e){super(),w(this,e,Pe,Be,S,{boundaryGeojson:1})}}let h="interventions";function je(r,e,o){let t,n;D(r,F,a=>o(1,t=a)),D(r,ae,a=>o(2,n=a));let{colorInterventions:i}=e;ie(t,h,n);const s=["!=","hide_while_editing",!0];return O(t,{id:"interventions-points",source:h,filter:["all",ce,s,["!=","endpoint",!0]],color:i,radius:de}),Z(t,{id:"interventions-lines",source:h,filter:["all",ue,s],color:i,width:j}),O(t,{id:"interventions-lines-endpoints",source:h,filter:["==","endpoint",!0],radius:.5*j,opacity:0,strokeColor:c.lineEndpointColor,strokeWidth:2}),le(t,{id:"interventions-polygons",source:h,filter:["all",z,s],color:i,opacity:.2}),Z(t,{id:"interventions-polygon-outlines",source:h,filter:["all",z,s],color:i,opacity:.5,width:.7*j}),r.$$set=a=>{"colorInterventions"in a&&o(0,i=a.colorInterventions)},r.$$.update=()=>{if(r.$$.dirty&6){let a=JSON.parse(JSON.stringify(n)),f=[];for(let p of a.features)if(p.geometry.type=="LineString"&&!p.properties.hide_while_editing)for(let I of[p.geometry.coordinates[0],p.geometry.coordinates[p.geometry.coordinates.length-1]])f.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:I}});a.features=a.features.concat(f),t.getSource(h).setData(a)}},[i,t,n]}class Ze extends b{constructor(e){super(),w(this,e,je,null,S,{colorInterventions:0})}}function ze(r){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[r]}function Je(r){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[r]}function Me(r){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[r]}function Re(r){return r=="planning"?J(["get","reference_type",["get","planning"]],{preapp:c.preapp,outline:c.outline,"reserved matters":c["reserved matters"],"local plan":c["local plan"]},"black"):J(["get","intervention_type"],{area:c.area,route:c.route,crossing:c.crossing,other:c.other},"white")}function qe(r){return r=="planning"?[["Preapp",c.preapp],["Outline",c.outline],["Reserved matters",c["reserved matters"]],["Local plan",c["local plan"]]]:[["Areas",c.area],["Routes",c.route],["Crossings",c.crossing],["Other",c.other]]}export{De as B,$e as C,Ge as H,Ze as I,Ne as L,Oe as Z,Me as a,ze as b,Re as c,qe as d,Je as s};
