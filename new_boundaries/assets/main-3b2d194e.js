import{S as $e,i as me,s as de,L as ge,a as ce,E as se,F as he,R as _e,b as K,c as oe,M as be,e as w,d as g,f as ve,g as c,h as y,j as L,k as i,m as h,l as le,t as _,n as b,o as E,p as v,q as we,r as ye,u as O,v as ie,w as Ae,G as Se,x as ke,y as Ce,z as Fe,A as Le,B as Ee,C as Me,D as ue}from"./index-ff0de085.js";import{D as je}from"./DefaultButton-8688c0fa.js";import{A as Be}from"./About-4751edad.js";import{F as Ie,a as Ne}from"./Popup-04cd2e3d.js";import{P as De}from"./Popup-8f081db3.js";function Oe(a){let t;return{c(){t=O("About")},m(e,n){L(e,t,n)},d(e){e&&E(t)}}}function Te(a){let t,e,n,o,r;return{c(){t=w("input"),e=g(),n=w("datalist"),y(t,"class","govuk-input govuk-input--width-20"),y(t,"id","inputValue"),y(t,"data-testid","transport-authority"),y(t,"list","authorities-list"),y(n,"id","authorities-list")},m(l,u){L(l,t,u),ie(t,a[0]),L(l,e,u),L(l,n,u),a[12](n),o||(r=Ae(t,"input",a[11]),o=!0)},p(l,u){u&1&&t.value!==l[0]&&ie(t,l[0])},d(l){l&&(E(t),E(e),E(n)),a[12](null),o=!1,r()}}}function Ge(a){let t;return{c(){t=O("Start")},m(e,n){L(e,t,n)},d(e){e&&E(t)}}}function Je(a){let t,e=a[17].name+"",n,o,r=a[17].level+"",l,u;return{c(){t=w("p"),n=O(e),o=O(" ("),l=O(r),u=O(")")},m(d,f){L(d,t,f),i(t,n),i(t,o),i(t,l),i(t,u)},p(d,f){f&131072&&e!==(e=d[17].name+"")&&ue(n,e),f&131072&&r!==(r=d[17].level+"")&&ue(l,r)},d(d){d&&E(t)}}}function Pe(a){let t,e;return t=new De({props:{$$slots:{default:[Je,({props:n})=>({17:n}),({props:n})=>n?131072:0]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const r={};o&393216&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function Ve(a){let t,e,n,o;return t=new Ne({props:{id:"boundaries",filter:["==",["get","level"],a[1]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Le(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),t.$on("click",Ue),n=new Ee({props:{id:"boundaries-outline",filter:["==",["get","level"],a[1]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){c(t.$$.fragment),e=g(),c(n.$$.fragment)},m(r,l){h(t,r,l),L(r,e,l),h(n,r,l),o=!0},p(r,l){const u={};l&2&&(u.filter=["==",["get","level"],r[1]]),l&262144&&(u.$$scope={dirty:l,ctx:r}),t.$set(u);const d={};l&2&&(d.filter=["==",["get","level"],r[1]]),n.$set(d)},i(r){o||(_(t.$$.fragment,r),_(n.$$.fragment,r),o=!0)},o(r){b(t.$$.fragment,r),b(n.$$.fragment,r),o=!1},d(r){r&&E(e),v(t,r),v(n,r)}}}function Re(a){let t,e;return t=new Se({props:{data:a[2],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const r={};o&4&&(r.data=n[2]),o&262146&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function qe(a){let t,e,n,o,r,l,u,d,f,B,A,M,F,J,S,P,V,R,k,p,$,I,T,C,Q,D,X,q,G,N,z,j,U,H;u=new ge({}),f=new ce({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),f.$on("click",a[10]),A=new se({props:{errorMessage:a[4]}}),F=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Te]},$$scope:{ctx:a}}}),S=new je({props:{disabled:!a[6],$$slots:{default:[Ge]},$$scope:{ctx:a}}}),S.$on("click",a[8]);function fe(s){a[13](s)}let Y={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[1]!==void 0&&(Y.value=a[1]),k=new _e({props:Y}),K.push(()=>oe(k,"value",fe)),C=new se({props:{errorMessage:He}}),D=new Ie({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[7],id:"load-geojson"}}),N=new be({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:a}}});function pe(s){a[14](s)}let Z={};return a[3]!==void 0&&(Z.open=a[3]),j=new Be({props:Z}),K.push(()=>oe(j,"open",pe)),{c(){t=w("div"),e=w("div"),n=w("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=g(),r=w("p"),r.textContent=`App version: ${ve()}`,l=g(),c(u.$$.fragment),d=g(),c(f.$$.fragment),B=g(),c(A.$$.fragment),M=g(),c(F.$$.fragment),J=g(),c(S.$$.fragment),P=g(),V=w("hr"),R=g(),c(k.$$.fragment),$=g(),I=w("hr"),T=g(),c(C.$$.fragment),Q=g(),c(D.$$.fragment),X=g(),q=w("div"),G=w("div"),c(N.$$.fragment),z=g(),c(j.$$.fragment),y(n,"class","govuk-heading-l"),y(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),y(G,"id","map"),y(G,"class","svelte-lyn11h"),y(q,"class","govuk-grid-column-one-half"),y(t,"class","govuk-grid-row")},m(s,m){L(s,t,m),i(t,e),i(e,n),i(e,o),i(e,r),i(e,l),h(u,e,null),i(e,d),h(f,e,null),i(e,B),h(A,e,null),i(e,M),h(F,e,null),i(e,J),h(S,e,null),i(e,P),i(e,V),i(e,R),h(k,e,null),i(e,$),i(e,I),i(e,T),h(C,e,null),i(e,Q),h(D,e,null),i(t,X),i(t,q),i(q,G),h(N,G,null),L(s,z,m),h(j,s,m),H=!0},p(s,[m]){const x={};m&262144&&(x.$$scope={dirty:m,ctx:s}),f.$set(x);const ee={};m&16&&(ee.errorMessage=s[4]),A.$set(ee);const te={};m&262177&&(te.$$scope={dirty:m,ctx:s}),F.$set(te);const W={};m&64&&(W.disabled=!s[6]),m&262144&&(W.$$scope={dirty:m,ctx:s}),S.$set(W);const ne={};!p&&m&2&&(p=!0,ne.value=s[1],le(()=>p=!1)),k.$set(ne);const ae={};m&262150&&(ae.$$scope={dirty:m,ctx:s}),N.$set(ae);const re={};!U&&m&8&&(U=!0,re.open=s[3],le(()=>U=!1)),j.$set(re)},i(s){H||(_(u.$$.fragment,s),_(f.$$.fragment,s),_(A.$$.fragment,s),_(F.$$.fragment,s),_(S.$$.fragment,s),_(k.$$.fragment,s),_(C.$$.fragment,s),_(D.$$.fragment,s),_(N.$$.fragment,s),_(j.$$.fragment,s),H=!0)},o(s){b(u.$$.fragment,s),b(f.$$.fragment,s),b(A.$$.fragment,s),b(F.$$.fragment,s),b(S.$$.fragment,s),b(k.$$.fragment,s),b(C.$$.fragment,s),b(D.$$.fragment,s),b(N.$$.fragment,s),b(j.$$.fragment,s),H=!1},d(s){s&&(E(t),E(z)),v(u),v(f),v(A),v(F),v(S),v(k),v(C),v(D),v(N),v(j,s)}}}let He="";function ze(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["planning","v2"])if(t&&e in t)return e}return"v1"}function Ue(a){window.location.href=`scheme.html?authority=${a.detail.features[0].properties.full_name}`}function We(a,t,e){let n,o;we(a,Me,p=>e(9,o=p));let r={type:"FeatureCollection",features:[]},l=!1,d=new URLSearchParams(window.location.search).get("error")||"",f,B,A=new Set,M="TA";ye(async()=>{ke(),e(2,r=await Ce());for(let p of r.features){let $=document.createElement("option");$.value=p.properties.full_name,$.label=`${p.properties.name} (${p.properties.level})`,B.appendChild($),A.add(p.properties.full_name)}});function F(p){try{let $=JSON.parse(p),I=Fe($,r);if(!I)throw new Error("Can't figure out the authority boundary that fully contains this scheme");if($.authority&&$.authority!=I)throw new Error(`File has authority set to ${$.authority}, but the smallest matching boundary is ${I}`);$.authority=I;let T=$.authority,C=ze($);C!="v1"&&(T+=`_${C}`),window.localStorage.setItem(T,JSON.stringify($)),window.location.href=`scheme.html?authority=${$.authority}&schema=${C}`}catch($){e(4,d=`Couldn't load scheme from a file: ${$}`)}}function J(){window.location.href=`scheme.html?authority=${f}`}const S=()=>e(3,l=!l);function P(){f=this.value,e(0,f)}function V(p){K[p?"unshift":"push"](()=>{B=p,e(5,B)})}function R(p){M=p,e(1,M)}function k(p){l=p,e(3,l)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,n=A.has(f)),a.$$.dirty&514&&(o==null||o.setFilter("boundaries",["==",["get","level"],M])),a.$$.dirty&514&&(o==null||o.setFilter("boundaries-outline",["==",["get","level"],M]))},[f,M,r,l,d,B,n,F,J,o,S,P,V,R,k]}class Ke extends $e{constructor(t){super(),me(this,t,We,qe,de,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Ke({target:document.getElementById("app")});