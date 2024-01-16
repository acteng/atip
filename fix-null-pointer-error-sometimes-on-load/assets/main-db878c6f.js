import{S as $e,i as me,s as ce,L as de,a as ge,E as re,F as he,R as _e,b as Q,c as oe,M as be,e as w,d,f as ve,g,h as y,j as M,k as i,m as h,l as le,t as _,n as b,o as E,p as v,q as we,r as ye,u as O,v as ie,w as Se,G as Ae,x as ke,y as Ce,z as Le,A as Me,B as Ee,C as Fe,D as ue}from"./index-f70a1a32.js";import{D as je}from"./DefaultButton-e0d3d77a.js";import{A as Be}from"./About-eba611bb.js";import{F as Ie,a as Ne}from"./Popup-189bea65.js";import{P as De}from"./Popup-7aecccc8.js";function Oe(a){let t;return{c(){t=O("About")},m(e,n){M(e,t,n)},d(e){e&&E(t)}}}function Te(a){let t,e,n,l,s;return{c(){t=w("input"),e=d(),n=w("datalist"),y(t,"class","govuk-input govuk-input--width-20"),y(t,"id","inputValue"),y(t,"data-testid","transport-authority"),y(t,"list","authorities-list"),y(n,"id","authorities-list")},m(o,u){M(o,t,u),ie(t,a[0]),M(o,e,u),M(o,n,u),a[12](n),l||(s=Se(t,"input",a[11]),l=!0)},p(o,u){u&1&&t.value!==o[0]&&ie(t,o[0])},d(o){o&&(E(t),E(e),E(n)),a[12](null),l=!1,s()}}}function Ge(a){let t;return{c(){t=O("Start")},m(e,n){M(e,t,n)},d(e){e&&E(t)}}}function Je(a){let t,e=a[18].name+"",n,l,s=a[18].level+"",o,u;return{c(){t=w("p"),n=O(e),l=O(" ("),o=O(s),u=O(")")},m(m,p){M(m,t,p),i(t,n),i(t,l),i(t,o),i(t,u)},p(m,p){p&262144&&e!==(e=m[18].name+"")&&ue(n,e),p&262144&&s!==(s=m[18].level+"")&&ue(o,s)},d(m){m&&E(t)}}}function Pe(a){let t,e;return t=new De({props:{$$slots:{default:[Je,({props:n})=>({18:n}),({props:n})=>n?262144:0]},$$scope:{ctx:a}}}),{c(){g(t.$$.fragment)},m(n,l){h(t,n,l),e=!0},p(n,l){const s={};l&786432&&(s.$$scope={dirty:l,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function Ve(a){let t,e,n,l;return t=new Ne({props:{id:"boundaries",filter:["==",["get","level"],a[5]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Ee(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),t.$on("click",a[8]),n=new Fe({props:{id:"boundaries-outline",filter:["==",["get","level"],a[5]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){g(t.$$.fragment),e=d(),g(n.$$.fragment)},m(s,o){h(t,s,o),M(s,e,o),h(n,s,o),l=!0},p(s,o){const u={};o&32&&(u.filter=["==",["get","level"],s[5]]),o&524288&&(u.$$scope={dirty:o,ctx:s}),t.$set(u);const m={};o&32&&(m.filter=["==",["get","level"],s[5]]),n.$set(m)},i(s){l||(_(t.$$.fragment,s),_(n.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),b(n.$$.fragment,s),l=!1},d(s){s&&E(e),v(t,s),v(n,s)}}}function Re(a){let t,e;return t=new Ae({props:{data:a[1],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){g(t.$$.fragment)},m(n,l){h(t,n,l),e=!0},p(n,l){const s={};l&2&&(s.data=n[1]),l&524320&&(s.$$scope={dirty:l,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function qe(a){let t,e,n,l,s,o,u,m,p,j,S,I,C,P,A,V,R,q,k,T,f,c,G,L,N,D,X,H,J,B,U,F,W,z;u=new de({}),p=new ge({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),p.$on("click",a[10]),S=new re({props:{errorMessage:a[3]}}),C=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Te]},$$scope:{ctx:a}}}),A=new je({props:{disabled:!a[6],$$slots:{default:[Ge]},$$scope:{ctx:a}}}),A.$on("click",a[9]);function fe(r){a[13](r)}let Y={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[5]!==void 0&&(Y.value=a[5]),k=new _e({props:Y}),Q.push(()=>oe(k,"value",fe)),L=new re({props:{errorMessage:He}}),D=new Ie({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[7],id:"load-geojson"}}),B=new be({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:a}}});function pe(r){a[14](r)}let Z={};return a[2]!==void 0&&(Z.open=a[2]),F=new Be({props:Z}),Q.push(()=>oe(F,"open",pe)),{c(){t=w("div"),e=w("div"),n=w("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",l=d(),s=w("p"),s.textContent=`App version: ${ve()}`,o=d(),g(u.$$.fragment),m=d(),g(p.$$.fragment),j=d(),g(S.$$.fragment),I=d(),g(C.$$.fragment),P=d(),g(A.$$.fragment),V=d(),R=w("hr"),q=d(),g(k.$$.fragment),f=d(),c=w("hr"),G=d(),g(L.$$.fragment),N=d(),g(D.$$.fragment),X=d(),H=w("div"),J=w("div"),g(B.$$.fragment),U=d(),g(F.$$.fragment),y(n,"class","govuk-heading-l"),y(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),y(J,"id","map"),y(J,"class","svelte-lyn11h"),y(H,"class","govuk-grid-column-one-half"),y(t,"class","govuk-grid-row")},m(r,$){M(r,t,$),i(t,e),i(e,n),i(e,l),i(e,s),i(e,o),h(u,e,null),i(e,m),h(p,e,null),i(e,j),h(S,e,null),i(e,I),h(C,e,null),i(e,P),h(A,e,null),i(e,V),i(e,R),i(e,q),h(k,e,null),i(e,f),i(e,c),i(e,G),h(L,e,null),i(e,N),h(D,e,null),i(t,X),i(t,H),i(H,J),h(B,J,null),M(r,U,$),h(F,r,$),z=!0},p(r,[$]){const x={};$&524288&&(x.$$scope={dirty:$,ctx:r}),p.$set(x);const ee={};$&8&&(ee.errorMessage=r[3]),S.$set(ee);const te={};$&524305&&(te.$$scope={dirty:$,ctx:r}),C.$set(te);const K={};$&64&&(K.disabled=!r[6]),$&524288&&(K.$$scope={dirty:$,ctx:r}),A.$set(K);const ne={};!T&&$&32&&(T=!0,ne.value=r[5],le(()=>T=!1)),k.$set(ne);const ae={};$&524322&&(ae.$$scope={dirty:$,ctx:r}),B.$set(ae);const se={};!W&&$&4&&(W=!0,se.open=r[2],le(()=>W=!1)),F.$set(se)},i(r){z||(_(u.$$.fragment,r),_(p.$$.fragment,r),_(S.$$.fragment,r),_(C.$$.fragment,r),_(A.$$.fragment,r),_(k.$$.fragment,r),_(L.$$.fragment,r),_(D.$$.fragment,r),_(B.$$.fragment,r),_(F.$$.fragment,r),z=!0)},o(r){b(u.$$.fragment,r),b(p.$$.fragment,r),b(S.$$.fragment,r),b(C.$$.fragment,r),b(A.$$.fragment,r),b(k.$$.fragment,r),b(L.$$.fragment,r),b(D.$$.fragment,r),b(B.$$.fragment,r),b(F.$$.fragment,r),z=!1},d(r){r&&(E(t),E(U)),v(u),v(p),v(S),v(C),v(A),v(k),v(L),v(D),v(B),v(F,r)}}}let He="";function ze(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["pipeline"])if(t&&e in t)return e}return"v1"}function Ue(a,t,e){let n,l;we(a,ke,f=>e(15,l=f));let s={type:"FeatureCollection",features:[]},o=!1,m=new URLSearchParams(window.location.search).get("error")||"",p,j,S=new Set,I="TA";ye(async()=>{Ce(),e(1,s=await Le());for(let f of s.features){let c=document.createElement("option");c.value=f.properties.full_name,c.label=`${f.properties.name} (${f.properties.level})`,j.appendChild(c),S.add(f.properties.full_name)}});function C(f){try{let c=JSON.parse(f),G=Me(c.features,s);if(!G)throw new Error("Can't figure out the authority boundary that fully contains this scheme");c.authority=G;let L=c.authority,N=ze(c);N!="v1"&&(L+=`_${N}`),window.localStorage.setItem(L,JSON.stringify(c)),window.location.href=`scheme.html?authority=${c.authority}&schema=${N}`}catch(c){e(3,m=`Couldn't load scheme from a file: ${c}`)}}function P(f){window.location.href=`scheme.html?authority=${f.detail.features[0].properties.full_name}&schema=${l}`}function A(){window.location.href=`scheme.html?authority=${p}&schema=${l}`}const V=()=>e(2,o=!o);function R(){p=this.value,e(0,p)}function q(f){Q[f?"unshift":"push"](()=>{j=f,e(4,j)})}function k(f){I=f,e(5,I)}function T(f){o=f,e(2,o)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,n=S.has(p))},[p,s,o,m,j,I,n,C,P,A,V,R,q,k,T]}class We extends $e{constructor(t){super(),me(this,t,Ue,qe,ce,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new We({target:document.getElementById("app")});
