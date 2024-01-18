import{S as $e,i as me,s as ce,L as de,a as ge,E as re,F as he,R as _e,b as Q,c as oe,M as be,e as y,d,f as ve,g,h as S,j as E,k as u,m as h,l as le,t as _,n as b,o as F,p as v,q as we,r as ye,u as D,v as ie,w as Se,G as Ae,x as ke,y as Ce,z as Le,A as Me,B as Ee,C as Fe,D as ue}from"./index-05fb3000.js";import{D as je}from"./DefaultButton-bc00025b.js";import{A as Be}from"./About-d144dc58.js";import{F as Ie,a as Ne}from"./Popup-c1c9f3b5.js";import{P as De}from"./Popup-3cf0fad9.js";function Oe(r){let t;return{c(){t=D("About")},m(e,n){E(e,t,n)},d(e){e&&F(t)}}}function Te(r){let t,e,n,o,a;return{c(){t=y("input"),e=d(),n=y("datalist"),S(t,"class","govuk-input govuk-input--width-20"),S(t,"id","inputValue"),S(t,"data-testid","transport-authority"),S(t,"list","authorities-list"),S(n,"id","authorities-list")},m(l,f){E(l,t,f),ie(t,r[0]),E(l,e,f),E(l,n,f),r[12](n),o||(a=Se(t,"input",r[11]),o=!0)},p(l,f){f&1&&t.value!==l[0]&&ie(t,l[0])},d(l){l&&(F(t),F(e),F(n)),r[12](null),o=!1,a()}}}function Ge(r){let t;return{c(){t=D("Start")},m(e,n){E(e,t,n)},d(e){e&&F(t)}}}function Je(r){let t,e=r[19].name+"",n,o,a=r[19].level+"",l,f;return{c(){t=y("p"),n=D(e),o=D(" ("),l=D(a),f=D(")")},m(c,p){E(c,t,p),u(t,n),u(t,o),u(t,l),u(t,f)},p(c,p){p&524288&&e!==(e=c[19].name+"")&&ue(n,e),p&524288&&a!==(a=c[19].level+"")&&ue(l,a)},d(c){c&&F(t)}}}function Pe(r){let t,e;return t=new De({props:{$$slots:{default:[Je,({props:n})=>({19:n}),({props:n})=>n?524288:0]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&1572864&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function Ve(r){let t,e,n,o;return t=new Ne({props:{id:"boundaries",filter:["==",["get","level"],r[5]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Ee(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Pe]},$$scope:{ctx:r}}}),t.$on("click",r[8]),n=new Fe({props:{id:"boundaries-outline",filter:["==",["get","level"],r[5]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){g(t.$$.fragment),e=d(),g(n.$$.fragment)},m(a,l){h(t,a,l),E(a,e,l),h(n,a,l),o=!0},p(a,l){const f={};l&32&&(f.filter=["==",["get","level"],a[5]]),l&1048576&&(f.$$scope={dirty:l,ctx:a}),t.$set(f);const c={};l&32&&(c.filter=["==",["get","level"],a[5]]),n.$set(c)},i(a){o||(_(t.$$.fragment,a),_(n.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),b(n.$$.fragment,a),o=!1},d(a){a&&F(e),v(t,a),v(n,a)}}}function Re(r){let t,e;return t=new Ae({props:{data:r[1],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:r}}}),{c(){g(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&2&&(a.data=n[1]),o&1048608&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function qe(r){let t,e,n,o,a,l,f,c,p,B,A,N,M,J,k,P,V,R,C,O,q,i,$,w,T,L,X,H,G,I,U,j,W,z;f=new de({}),p=new ge({props:{$$slots:{default:[Oe]},$$scope:{ctx:r}}}),p.$on("click",r[10]),A=new re({props:{errorMessage:r[3]}}),M=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Te]},$$scope:{ctx:r}}}),k=new je({props:{disabled:!r[6],$$slots:{default:[Ge]},$$scope:{ctx:r}}}),k.$on("click",r[9]);function fe(s){r[13](s)}let Y={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};r[5]!==void 0&&(Y.value=r[5]),C=new _e({props:Y}),Q.push(()=>oe(C,"value",fe)),w=new re({props:{errorMessage:He}}),L=new Ie({props:{label:"Or upload an ATIP GeoJSON file",loadFile:r[7],id:"load-geojson"}}),I=new be({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:r}}});function pe(s){r[14](s)}let Z={};return r[2]!==void 0&&(Z.open=r[2]),j=new Be({props:Z}),Q.push(()=>oe(j,"open",pe)),{c(){t=y("div"),e=y("div"),n=y("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=d(),a=y("p"),a.textContent=`App version: ${ve()}`,l=d(),g(f.$$.fragment),c=d(),g(p.$$.fragment),B=d(),g(A.$$.fragment),N=d(),g(M.$$.fragment),J=d(),g(k.$$.fragment),P=d(),V=y("hr"),R=d(),g(C.$$.fragment),q=d(),i=y("hr"),$=d(),g(w.$$.fragment),T=d(),g(L.$$.fragment),X=d(),H=y("div"),G=y("div"),g(I.$$.fragment),U=d(),g(j.$$.fragment),S(n,"class","govuk-heading-l"),S(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),S(G,"id","map"),S(G,"class","svelte-lyn11h"),S(H,"class","govuk-grid-column-one-half"),S(t,"class","govuk-grid-row")},m(s,m){E(s,t,m),u(t,e),u(e,n),u(e,o),u(e,a),u(e,l),h(f,e,null),u(e,c),h(p,e,null),u(e,B),h(A,e,null),u(e,N),h(M,e,null),u(e,J),h(k,e,null),u(e,P),u(e,V),u(e,R),h(C,e,null),u(e,q),u(e,i),u(e,$),h(w,e,null),u(e,T),h(L,e,null),u(t,X),u(t,H),u(H,G),h(I,G,null),E(s,U,m),h(j,s,m),z=!0},p(s,[m]){const x={};m&1048576&&(x.$$scope={dirty:m,ctx:s}),p.$set(x);const ee={};m&8&&(ee.errorMessage=s[3]),A.$set(ee);const te={};m&1048593&&(te.$$scope={dirty:m,ctx:s}),M.$set(te);const K={};m&64&&(K.disabled=!s[6]),m&1048576&&(K.$$scope={dirty:m,ctx:s}),k.$set(K);const ne={};!O&&m&32&&(O=!0,ne.value=s[5],le(()=>O=!1)),C.$set(ne);const ae={};m&1048610&&(ae.$$scope={dirty:m,ctx:s}),I.$set(ae);const se={};!W&&m&4&&(W=!0,se.open=s[2],le(()=>W=!1)),j.$set(se)},i(s){z||(_(f.$$.fragment,s),_(p.$$.fragment,s),_(A.$$.fragment,s),_(M.$$.fragment,s),_(k.$$.fragment,s),_(C.$$.fragment,s),_(w.$$.fragment,s),_(L.$$.fragment,s),_(I.$$.fragment,s),_(j.$$.fragment,s),z=!0)},o(s){b(f.$$.fragment,s),b(p.$$.fragment,s),b(A.$$.fragment,s),b(M.$$.fragment,s),b(k.$$.fragment,s),b(C.$$.fragment,s),b(w.$$.fragment,s),b(L.$$.fragment,s),b(I.$$.fragment,s),b(j.$$.fragment,s),z=!1},d(s){s&&(F(t),F(U)),v(f),v(p),v(A),v(M),v(k),v(C),v(w),v(L),v(I),v(j,s)}}}let He="";function ze(r,t,e){let n,o;we(r,ke,i=>e(15,o=i));let a={type:"FeatureCollection",features:[]},l=!1,c=new URLSearchParams(window.location.search).get("error")||"",p,B,A=new Set,N="TA";ye(async()=>{Ce(),e(1,a=await Le());for(let i of a.features){let $=document.createElement("option");$.value=i.properties.full_name,$.label=`${i.properties.name} (${i.properties.level})`,B.appendChild($),A.add(i.properties.full_name)}});function M(i){try{let $=JSON.parse(i),w=Me($.features,a);if(!w)throw new Error("Can't figure out the authority boundary that fully contains this scheme");$.authority=w;let T=$.authority,L=J($);L!="v1"&&(T+=`_${L}`),window.localStorage.setItem(T,JSON.stringify($)),window.location.href=`scheme.html?authority=${$.authority}&schema=${L}`}catch($){e(3,c=`Couldn't load scheme from a file: ${$}`)}}function J(i){if(i.features.length>0){let $=i.features[0].properties;for(let w of["pipeline"])if($&&w in $)return w}return o}function k(i){window.location.href=`scheme.html?authority=${i.detail.features[0].properties.full_name}&schema=${o}`}function P(){window.location.href=`scheme.html?authority=${p}&schema=${o}`}const V=()=>e(2,l=!l);function R(){p=this.value,e(0,p)}function C(i){Q[i?"unshift":"push"](()=>{B=i,e(4,B)})}function O(i){N=i,e(5,N)}function q(i){l=i,e(2,l)}return r.$$.update=()=>{r.$$.dirty&1&&e(6,n=A.has(p))},[p,a,l,c,B,N,n,M,k,P,V,R,C,O,q]}class Ue extends $e{constructor(t){super(),me(this,t,ze,qe,ce,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Ue({target:document.getElementById("app")});
