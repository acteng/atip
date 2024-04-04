import{S as $e,i as me,s as ce,L as ge,a as de,E as se,F as he,R as _e,b as Q,c as oe,M as ve,e as y,d as g,f as be,g as d,h as S,j as E,k as u,m as h,l as le,t as _,n as v,o as F,p as b,q as we,r as ye,u as O,v as ie,w as Se,G as Ae,x as ke,y as Ce,z as Le,A as Me,B as Ee,C as Fe,D as ue}from"./index-44563921.js";import{D as Ie}from"./DefaultButton-133f37d0.js";import{F as Te,a as Be}from"./Popup-cf51bea5.js";import{A as De}from"./About-bc0d7cf4.js";import{P as Oe}from"./Popup-792b73a2.js";function je(s){let t;return{c(){t=O("About")},m(e,n){E(e,t,n)},d(e){e&&F(t)}}}function Ge(s){let t,e,n,o,a;return{c(){t=y("input"),e=g(),n=y("datalist"),S(t,"class","govuk-input govuk-input--width-20"),S(t,"id","inputValue"),S(t,"data-testid","transport-authority"),S(t,"list","authorities-list"),S(n,"id","authorities-list")},m(l,f){E(l,t,f),ie(t,s[0]),E(l,e,f),E(l,n,f),s[12](n),o||(a=Se(t,"input",s[11]),o=!0)},p(l,f){f&1&&t.value!==l[0]&&ie(t,l[0])},d(l){l&&(F(t),F(e),F(n)),s[12](null),o=!1,a()}}}function Je(s){let t;return{c(){t=O("Start")},m(e,n){E(e,t,n)},d(e){e&&F(t)}}}function Ne(s){let t,e=s[19].name+"",n,o,a=s[19].level+"",l,f;return{c(){t=y("p"),n=O(e),o=O(" ("),l=O(a),f=O(")")},m(c,p){E(c,t,p),u(t,n),u(t,o),u(t,l),u(t,f)},p(c,p){p&524288&&e!==(e=c[19].name+"")&&ue(n,e),p&524288&&a!==(a=c[19].level+"")&&ue(l,a)},d(c){c&&F(t)}}}function Pe(s){let t,e;return t=new Oe({props:{$$slots:{default:[Ne,({props:n})=>({19:n}),({props:n})=>n?524288:0]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&1572864&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){v(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function Ve(s){let t,e,n,o;return t=new Be({props:{id:"boundaries",filter:["==",["get","level"],s[5]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Ee(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Pe]},$$scope:{ctx:s}}}),t.$on("click",s[8]),n=new Fe({props:{id:"boundaries-outline",filter:["==",["get","level"],s[5]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){d(t.$$.fragment),e=g(),d(n.$$.fragment)},m(a,l){h(t,a,l),E(a,e,l),h(n,a,l),o=!0},p(a,l){const f={};l&32&&(f.filter=["==",["get","level"],a[5]]),l&1048576&&(f.$$scope={dirty:l,ctx:a}),t.$set(f);const c={};l&32&&(c.filter=["==",["get","level"],a[5]]),n.$set(c)},i(a){o||(_(t.$$.fragment,a),_(n.$$.fragment,a),o=!0)},o(a){v(t.$$.fragment,a),v(n.$$.fragment,a),o=!1},d(a){a&&F(e),b(t,a),b(n,a)}}}function He(s){let t,e;return t=new Ae({props:{data:s[1],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&2&&(a.data=n[1]),o&1048608&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){v(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function Re(s){let t,e,n,o,a,l,f,c,p,T,A,D,M,N,k,P,V,H,C,j,R,i,$,w,G,L,X,q,J,B,U,I,W,z;f=new ge({}),p=new de({props:{$$slots:{default:[je]},$$scope:{ctx:s}}}),p.$on("click",s[10]),A=new se({props:{errorMessage:s[3]}}),M=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Ge]},$$scope:{ctx:s}}}),k=new Ie({props:{disabled:!s[6],$$slots:{default:[Je]},$$scope:{ctx:s}}}),k.$on("click",s[9]);function fe(r){s[13](r)}let Y={legend:"Or pick from the map",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};s[5]!==void 0&&(Y.value=s[5]),C=new _e({props:Y}),Q.push(()=>oe(C,"value",fe)),w=new se({props:{errorMessage:qe}}),L=new Te({props:{label:"Or upload an ATIP GeoJSON file",loadFile:s[7]}}),B=new ve({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[He]},$$scope:{ctx:s}}});function pe(r){s[14](r)}let Z={};return s[2]!==void 0&&(Z.open=s[2]),I=new De({props:Z}),Q.push(()=>oe(I,"open",pe)),{c(){t=y("div"),e=y("div"),n=y("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=g(),a=y("p"),a.textContent=`App version: ${be()}`,l=g(),d(f.$$.fragment),c=g(),d(p.$$.fragment),T=g(),d(A.$$.fragment),D=g(),d(M.$$.fragment),N=g(),d(k.$$.fragment),P=g(),V=y("hr"),H=g(),d(C.$$.fragment),R=g(),i=y("hr"),$=g(),d(w.$$.fragment),G=g(),d(L.$$.fragment),X=g(),q=y("div"),J=y("div"),d(B.$$.fragment),U=g(),d(I.$$.fragment),S(n,"class","govuk-heading-l"),S(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),S(J,"id","map"),S(J,"class","svelte-lyn11h"),S(q,"class","govuk-grid-column-one-half"),S(t,"class","govuk-grid-row")},m(r,m){E(r,t,m),u(t,e),u(e,n),u(e,o),u(e,a),u(e,l),h(f,e,null),u(e,c),h(p,e,null),u(e,T),h(A,e,null),u(e,D),h(M,e,null),u(e,N),h(k,e,null),u(e,P),u(e,V),u(e,H),h(C,e,null),u(e,R),u(e,i),u(e,$),h(w,e,null),u(e,G),h(L,e,null),u(t,X),u(t,q),u(q,J),h(B,J,null),E(r,U,m),h(I,r,m),z=!0},p(r,[m]){const x={};m&1048576&&(x.$$scope={dirty:m,ctx:r}),p.$set(x);const ee={};m&8&&(ee.errorMessage=r[3]),A.$set(ee);const te={};m&1048593&&(te.$$scope={dirty:m,ctx:r}),M.$set(te);const K={};m&64&&(K.disabled=!r[6]),m&1048576&&(K.$$scope={dirty:m,ctx:r}),k.$set(K);const ne={};!j&&m&32&&(j=!0,ne.value=r[5],le(()=>j=!1)),C.$set(ne);const ae={};m&1048610&&(ae.$$scope={dirty:m,ctx:r}),B.$set(ae);const re={};!W&&m&4&&(W=!0,re.open=r[2],le(()=>W=!1)),I.$set(re)},i(r){z||(_(f.$$.fragment,r),_(p.$$.fragment,r),_(A.$$.fragment,r),_(M.$$.fragment,r),_(k.$$.fragment,r),_(C.$$.fragment,r),_(w.$$.fragment,r),_(L.$$.fragment,r),_(B.$$.fragment,r),_(I.$$.fragment,r),z=!0)},o(r){v(f.$$.fragment,r),v(p.$$.fragment,r),v(A.$$.fragment,r),v(M.$$.fragment,r),v(k.$$.fragment,r),v(C.$$.fragment,r),v(w.$$.fragment,r),v(L.$$.fragment,r),v(B.$$.fragment,r),v(I.$$.fragment,r),z=!1},d(r){r&&(F(t),F(U)),b(f),b(p),b(A),b(M),b(k),b(C),b(w),b(L),b(B),b(I,r)}}}let qe="";function ze(s,t,e){let n,o;we(s,ke,i=>e(15,o=i));let a={type:"FeatureCollection",features:[]},l=!1,c=new URLSearchParams(window.location.search).get("error")||"",p,T,A=new Set,D="TA";ye(async()=>{Ce(),e(1,a=await Le());for(let i of a.features){let $=document.createElement("option");$.value=i.properties.full_name,$.label=`${i.properties.name} (${i.properties.level})`,T.appendChild($),A.add(i.properties.full_name)}});function M(i){try{let $=JSON.parse(i),w=Me($.features,a);if(!w)throw new Error("Can't figure out the authority boundary that fully contains this scheme");$.authority=w;let G=$.authority,L=N($);L!="v1"&&(G+=`_${L}`),window.localStorage.setItem(G,JSON.stringify($)),window.location.href=`scheme.html?authority=${$.authority}&schema=${L}`}catch($){e(3,c=`Couldn't load scheme from a file: ${$}`)}}function N(i){if(i.features.length>0){let $=i.features[0].properties;for(let w of["pipeline"])if($&&w in $)return w}return o}function k(i){window.location.href=`scheme.html?authority=${i.detail.features[0].properties.full_name}&schema=${o}`}function P(){window.location.href=`scheme.html?authority=${p}&schema=${o}`}const V=()=>e(2,l=!l);function H(){p=this.value,e(0,p)}function C(i){Q[i?"unshift":"push"](()=>{T=i,e(4,T)})}function j(i){D=i,e(5,D)}function R(i){l=i,e(2,l)}return s.$$.update=()=>{s.$$.dirty&1&&e(6,n=A.has(p))},[p,a,l,c,T,D,n,M,k,P,V,H,C,j,R]}class Ue extends $e{constructor(t){super(),me(this,t,ze,Re,ce,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new Ue({target:document.getElementById("app")});
