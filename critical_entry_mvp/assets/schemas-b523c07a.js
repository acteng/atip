import{S as b,i as w,s as S,b as q,c as A,f as k,m as L,k as J,t as d,l as m,p as C,e as $,g,T as O,h as v,w as D,o as y,d as E,aD as T,j as I,v as Q,D as U,H as Y,I as K,J as V,P as Z,x as X,n as x,Q as ee,r as te,O as ne,a as oe,W as H,A as F,B as re,_ as se,Y as ae,a4 as z,a3 as G,Z as le,a8 as ie,a7 as ce,a6 as M,av as N}from"./layer_helper_utils-01d185c0.js";import{e as ue,C as fe,a as pe,l as j,c}from"./StreetViewController-de46511c.js";import{M as de}from"./InteractiveLayer-5f814b53.js";function ge(s){let e,o,t;function n(r){s[2](r)}let l={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"],["dataviz","Dataviz"]]};return s[0]!==void 0&&(l.value=s[0]),e=new ue({props:l}),q.push(()=>A(e,"value",n)),e.$on("change",s[1]),{c(){k(e.$$.fragment)},m(r,i){L(e,r,i),t=!0},p(r,[i]){const a={};!o&&i&1&&(o=!0,a.value=r[0],J(()=>o=!1)),e.$set(a)},i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){m(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function me(s,e,o){let{style:t}=e;function n(){let r=new URLSearchParams(window.location.search);r.set("style",t);let i=`${window.location.pathname}?${r.toString()}${window.location.hash}`;window.location.href=i}function l(r){t=r,o(0,t)}return s.$$set=r=>{"style"in r&&o(0,t=r.style)},[t,n,l]}class Oe extends b{constructor(e){super(),w(this,e,me,ge,S,{style:0})}}function _e(s){let e;return{c(){e=$("span"),g(e,"class","svelte-kzgqtg"),O(e,"background",s[0])},m(o,t){v(o,e,t)},p(o,[t]){t&1&&O(e,"background",o[0])},i:D,o:D,d(o){o&&y(e)}}}function he(s,e,o){let{color:t}=e;return s.$$set=n=>{"color"in n&&o(0,t=n.color)},[t]}class $e extends b{constructor(e){super(),w(this,e,he,_e,S,{color:0})}}const ve="/atip/critical_entry_mvp/assets/help-d011708a.svg";function ye(s){let e,o;const t=s[1].default,n=U(t,s,s[4],null);return{c(){e=$("div"),n&&n.c(),g(e,"class","govuk-prose")},m(l,r){v(l,e,r),n&&n.m(e,null),o=!0},p(l,r){n&&n.p&&(!o||r&16)&&Y(n,t,l,l[4],o?V(t,l[4],r,null):K(l[4]),null)},i(l){o||(d(n,l),o=!0)},o(l){m(n,l),o=!1},d(l){l&&y(e),n&&n.d(l)}}}function be(s){let e,o,t,n,l,r,i,a,f;function p(u){s[3](u)}let B={title:"Help",$$slots:{default:[ye]},$$scope:{ctx:s}};return s[0]!==void 0&&(B.open=s[0]),l=new de({props:B}),q.push(()=>A(l,"open",p)),{c(){e=$("button"),o=$("img"),n=E(),k(l.$$.fragment),T(o.src,t=ve)||g(o,"src",t),g(o,"title","Help"),g(o,"alt","Help"),g(e,"class","svelte-7d9d1l")},m(u,_){v(u,e,_),I(e,o),v(u,n,_),L(l,u,_),i=!0,a||(f=Q(e,"click",s[2]),a=!0)},p(u,[_]){const P={};_&16&&(P.$$scope={dirty:_,ctx:u}),!r&&_&1&&(r=!0,P.open=u[0],J(()=>r=!1)),l.$set(P)},i(u){i||(d(l.$$.fragment,u),i=!0)},o(u){m(l.$$.fragment,u),i=!1},d(u){u&&(y(e),y(n)),C(l,u),a=!1,f()}}}function we(s,e,o){let{$$slots:t={},$$scope:n}=e,l=!1;const r=()=>o(0,l=!0);function i(a){l=a,o(0,l)}return s.$$set=a=>{"$$scope"in a&&o(4,n=a.$$scope)},[l,t,r,i,n]}class Ze extends b{constructor(e){super(),w(this,e,we,be,S,{})}}function R(s,e,o){const t=s.slice();return t[1]=e[o][0],t[2]=e[o][1],t}function W(s){let e,o,t,n=s[1]+"",l,r,i;return o=new $e({props:{color:s[2]}}),{c(){e=$("li"),k(o.$$.fragment),t=E(),l=te(n),r=E()},m(a,f){v(a,e,f),L(o,e,null),I(e,t),I(e,l),I(e,r),i=!0},p(a,f){const p={};f&1&&(p.color=a[2]),o.$set(p),(!i||f&1)&&n!==(n=a[1]+"")&&ne(l,n)},i(a){i||(d(o.$$.fragment,a),i=!0)},o(a){m(o.$$.fragment,a),i=!1},d(a){a&&y(e),C(o)}}}function Se(s){let e,o,t=Z(s[0]),n=[];for(let r=0;r<t.length;r+=1)n[r]=W(R(s,t,r));const l=r=>m(n[r],1,1,()=>{n[r]=null});return{c(){e=$("ul");for(let r=0;r<n.length;r+=1)n[r].c()},m(r,i){v(r,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);o=!0},p(r,i){if(i&1){t=Z(r[0]);let a;for(a=0;a<t.length;a+=1){const f=R(r,t,a);n[a]?(n[a].p(f,i),d(n[a],1)):(n[a]=W(f),n[a].c(),d(n[a],1),n[a].m(e,null))}for(X(),a=t.length;a<n.length;a+=1)l(a);x()}},i(r){if(!o){for(let i=0;i<t.length;i+=1)d(n[i]);o=!0}},o(r){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)m(n[i]);o=!1},d(r){r&&y(e),ee(n,r)}}}function ke(s){let e,o;return e=new fe({props:{label:"Legend",$$slots:{default:[Se]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,[n]){const l={};n&33&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){o||(d(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function Le(s,e,o){let{rows:t}=e;return s.$$set=n=>{"rows"in n&&o(0,t=n.rows)},[t]}class ze extends b{constructor(e){super(),w(this,e,Le,ke,S,{rows:0})}}const Ce="/atip/critical_entry_mvp/assets/zoom_out_map-b2e1091a.svg";function Be(s){let e,o;return{c(){e=$("img"),T(e.src,o=Ce)||g(e,"src",o),g(e,"alt","Zoom to show entire boundary")},m(t,n){v(t,e,n)},p:D,d(t){t&&y(e)}}}function Ie(s){let e,o;return e=new oe({props:{title:"Zoom to show entire boundary",$$slots:{default:[Be]},$$scope:{ctx:s}}}),e.$on("click",s[0]),{c(){k(e.$$.fragment)},m(t,n){L(e,t,n),o=!0},p(t,[n]){const l={};n&8&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){o||(d(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){C(e,t)}}}function Pe(s,e,o){let t;H(s,F,r=>o(2,t=r));let{boundaryGeojson:n}=e;function l(){t.fitBounds(re(n),{padding:20,animate:!0,duration:500})}return s.$$set=r=>{"boundaryGeojson"in r&&o(1,n=r.boundaryGeojson)},[l,n]}class Ge extends b{constructor(e){super(),w(this,e,Pe,Ie,S,{boundaryGeojson:1})}}let h="interventions";function je(s,e,o){let t,n;H(s,F,a=>o(1,t=a)),H(s,se,a=>o(2,n=a));let{colorInterventions:l}=e;ae(t,h,n);const r=["!=","hide_while_editing",!0];return z(t,{id:"interventions-points",source:h,filter:["all",ie,r,["!=","endpoint",!0]],color:l,radius:pe}),G(t,{id:"interventions-lines",source:h,filter:["all",ce,r],color:l,width:j}),z(t,{id:"interventions-lines-endpoints",source:h,filter:["==","endpoint",!0],radius:.5*j,opacity:0,strokeColor:c.lineEndpointColor,strokeWidth:2}),le(t,{id:"interventions-polygons",source:h,filter:["all",M,r],color:l,opacity:.2}),G(t,{id:"interventions-polygon-outlines",source:h,filter:["all",M,r],color:l,opacity:.5,width:.7*j}),s.$$set=a=>{"colorInterventions"in a&&o(0,l=a.colorInterventions)},s.$$.update=()=>{if(s.$$.dirty&6){let a=JSON.parse(JSON.stringify(n)),f=[];for(let p of a.features)if(p.geometry.type=="LineString"&&!p.properties.hide_while_editing)for(let B of[p.geometry.coordinates[0],p.geometry.coordinates[p.geometry.coordinates.length-1]])f.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:B}});a.features=a.features.concat(f),t.getSource(h).setData(a)}},[l,t,n]}class Me extends b{constructor(e){super(),w(this,e,je,null,S,{colorInterventions:0})}}function Ne(s){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[s]}function Re(s){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[s]}function We(s){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[s]}function qe(s){return s=="planning"?N(["get","reference_type",["get","planning"]],{preapp:c.preapp,outline:c.outline,"reserved matters":c["reserved matters"],"local plan":c["local plan"]},"black"):N(["get","intervention_type"],{area:c.area,route:c.route,crossing:c.crossing,other:c.other},"white")}function Ae(s){return s=="planning"?[["Preapp",c.preapp],["Outline",c.outline],["Reserved matters",c["reserved matters"]],["Local plan",c["local plan"]]]:[["Areas",c.area],["Routes",c.route],["Crossings",c.crossing],["Other",c.other]]}export{Oe as B,$e as C,Ze as H,Me as I,ze as L,Ge as Z,We as a,Ne as b,qe as c,Ae as d,Re as s};
