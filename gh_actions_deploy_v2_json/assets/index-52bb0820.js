import{S as m,i as h,s as y,aW as Z,b as j,c as J,g as v,m as $,l as W,t as g,n as d,q as w,e as b,h as A,an as E,j as S,x as P,p as C,ax as G,y as z,o as Y,ay as Q,d as I,u as U,k as L,I as X,a as H,N as M,C as T,av as K,D as V,T as ee,P as te,Z as x,Y as F,Q as ne,a1 as re,a0 as ae,$ as O,ao as q,a7 as _,aX as oe,aY as se}from"./index-a25fddef.js";import{e as ie,C as le,a as ce,l as k,c}from"./StreetViewController-f2e250a1.js";function ue(t){let e,a,n;function r(o){t[2](o)}let i={label:"Basemap",id:"basemap",choices:Z()};return t[0]!==void 0&&(i.value=t[0]),e=new ie({props:i}),j.push(()=>J(e,"value",r)),e.$on("change",t[1]),{c(){v(e.$$.fragment)},m(o,l){$(e,o,l),n=!0},p(o,[l]){const s={};!a&&l&1&&(a=!0,s.value=o[0],W(()=>a=!1)),e.$set(s)},i(o){n||(g(e.$$.fragment,o),n=!0)},o(o){d(e.$$.fragment,o),n=!1},d(o){w(e,o)}}}function fe(t,e,a){let{style:n}=e;function r(){let o=new URLSearchParams(window.location.search);o.set("style",n);let l=`${window.location.pathname}?${o.toString()}${window.location.hash}`;window.location.href=l}function i(o){n=o,a(0,n)}return t.$$set=o=>{"style"in o&&a(0,n=o.style)},[n,r,i]}class ke extends m{constructor(e){super(),h(this,e,fe,ue,y,{style:0})}}function pe(t){let e;return{c(){e=b("span"),A(e,"class","svelte-kzgqtg"),E(e,"background",t[0])},m(a,n){S(a,e,n)},p(a,[n]){n&1&&E(e,"background",a[0])},i:P,o:P,d(a){a&&C(e)}}}function ge(t,e,a){let{color:n}=e;return t.$$set=r=>{"color"in r&&a(0,n=r.color)},[n]}class de extends m{constructor(e){super(),h(this,e,ge,pe,y,{color:0})}}function B(t,e,a){const n=t.slice();return n[1]=e[a][0],n[2]=e[a][1],n}function N(t){let e,a,n,r=t[1]+"",i,o,l;return a=new de({props:{color:t[2]}}),{c(){e=b("li"),v(a.$$.fragment),n=I(),i=U(r),o=I()},m(s,u){S(s,e,u),$(a,e,null),L(e,n),L(e,i),L(e,o),l=!0},p(s,u){const f={};u&1&&(f.color=s[2]),a.$set(f),(!l||u&1)&&r!==(r=s[1]+"")&&X(i,r)},i(s){l||(g(a.$$.fragment,s),l=!0)},o(s){d(a.$$.fragment,s),l=!1},d(s){s&&C(e),w(a)}}}function me(t){let e,a,n=G(t[0]),r=[];for(let o=0;o<n.length;o+=1)r[o]=N(B(t,n,o));const i=o=>d(r[o],1,1,()=>{r[o]=null});return{c(){e=b("ul");for(let o=0;o<r.length;o+=1)r[o].c()},m(o,l){S(o,e,l);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);a=!0},p(o,l){if(l&1){n=G(o[0]);let s;for(s=0;s<n.length;s+=1){const u=B(o,n,s);r[s]?(r[s].p(u,l),g(r[s],1)):(r[s]=N(u),r[s].c(),g(r[s],1),r[s].m(e,null))}for(z(),s=n.length;s<r.length;s+=1)i(s);Y()}},i(o){if(!a){for(let l=0;l<n.length;l+=1)g(r[l]);a=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)d(r[l]);a=!1},d(o){o&&C(e),Q(r,o)}}}function he(t){let e,a;return e=new le({props:{label:"Legend",$$slots:{default:[me]},$$scope:{ctx:t}}}),{c(){v(e.$$.fragment)},m(n,r){$(e,n,r),a=!0},p(n,[r]){const i={};r&33&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){a||(g(e.$$.fragment,n),a=!0)},o(n){d(e.$$.fragment,n),a=!1},d(n){w(e,n)}}}function ye(t,e,a){let{rows:n}=e;return t.$$set=r=>{"rows"in r&&a(0,n=r.rows)},[n]}class Ae extends m{constructor(e){super(),h(this,e,ye,he,y,{rows:0})}}const _e="/atip/gh_actions_deploy_v2_json/assets/zoom_out_map-b2e1091a.svg";function ve(t){let e,a;return{c(){e=b("img"),K(e.src,a=_e)||A(e,"src",a),A(e,"alt","Zoom to show entire boundary")},m(n,r){S(n,e,r)},p:P,d(n){n&&C(e)}}}function $e(t){let e,a;return e=new H({props:{title:"Zoom to show entire boundary",$$slots:{default:[ve]},$$scope:{ctx:t}}}),e.$on("click",t[0]),{c(){v(e.$$.fragment)},m(n,r){$(e,n,r),a=!0},p(n,[r]){const i={};r&8&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){a||(g(e.$$.fragment,n),a=!0)},o(n){d(e.$$.fragment,n),a=!1},d(n){w(e,n)}}}function we(t,e,a){let n;M(t,T,o=>a(2,n=o));let{boundaryGeojson:r}=e;function i(){n.fitBounds(V(r),{padding:20,animate:!0,duration:500})}return t.$$set=o=>{"boundaryGeojson"in o&&a(1,r=o.boundaryGeojson)},[i,r]}class Pe extends m{constructor(e){super(),h(this,e,we,$e,y,{boundaryGeojson:1})}}let p="interventions";function be(t,e,a){let n,r;M(t,T,s=>a(1,n=s)),M(t,ee,s=>a(2,r=s));let{colorInterventions:i}=e;te(n,p,r);const o=["!=","hide_while_editing",!0];return x(n,{id:"interventions-points",source:p,filter:["all",re,o,["!=","endpoint",!0]],color:i,radius:ce}),F(n,{id:"interventions-lines",source:p,filter:["all",ae,o],color:i,width:k}),x(n,{id:"interventions-lines-endpoints",source:p,filter:["==","endpoint",!0],radius:.5*k,opacity:0,strokeColor:c.lineEndpointColor,strokeWidth:2}),ne(n,{id:"interventions-polygons",source:p,filter:["all",O,o],color:i,opacity:.2}),F(n,{id:"interventions-polygon-outlines",source:p,filter:["all",O,o],color:i,opacity:.5,width:.7*k}),t.$$set=s=>{"colorInterventions"in s&&a(0,i=s.colorInterventions)},t.$$.update=()=>{if(t.$$.dirty&6){let s=JSON.parse(JSON.stringify(r)),u=[];for(let f of s.features)if(f.geometry.type=="LineString"&&!f.properties.hide_while_editing)for(let D of[f.geometry.coordinates[0],f.geometry.coordinates[f.geometry.coordinates.length-1]])u.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:D}});s.features=s.features.concat(u),n.getSource(p).setData(s)}},[i,n,r]}class Me extends m{constructor(e){super(),h(this,e,be,null,y,{colorInterventions:0})}}function Ee(t){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[t]}function Ge(t){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[t]}function Ie(t){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[t]}function xe(t){return t=="planning"?q(["get","reference_type",["get","planning"]],{preapp:c.preapp,outline:c.outline,"reserved matters":c["reserved matters"],"local plan":c["local plan"]},"black"):q(["get","intervention_type"],{area:c.area,route:c.route,crossing:c.crossing,other:c.other},"white")}function Fe(t){return t=="planning"?[["Preapp",c.preapp],["Outline",c.outline],["Reserved matters",c["reserved matters"]],["Local plan",c["local plan"]]]:[["Areas",c.area],["Routes",c.route],["Crossings",c.crossing],["Other",c.other]]}function R(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Oe(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function qe(t,e){return t.type==="FeatureCollection"?"FeatureCollection":t.type==="GeometryCollection"?"GeometryCollection":t.type==="Feature"&&t.geometry!==null?t.geometry.type:t.type}function Se(t,e,a){a===void 0&&(a={});var n=R(t),r=R(e),i=_(r[1]-n[1]),o=_(r[0]-n[0]),l=_(n[1]),s=_(r[1]),u=Math.pow(Math.sin(i/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(s);return oe(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),a.units)}function Be(t,e){return e===void 0&&(e={}),se(t,function(a,n){var r=n.geometry.coordinates;return a+Se(r[0],r[1],e)},0)}export{ke as B,de as C,Me as I,Ae as L,Pe as Z,Oe as a,qe as b,Ie as c,Se as d,Ee as e,xe as f,R as g,Fe as h,Be as l,Ge as s};
