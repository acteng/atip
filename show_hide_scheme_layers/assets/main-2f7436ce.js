import{S as $e,i as de,s as ce,L as ge,a as he,E as re,F as _e,R as be,b as Q,c as oe,M as ve,e as S,d,f as we,g as c,h as A,j as M,k as u,m as g,l as le,t as h,n as _,o as E,p as b,q as ie,r as ye,u as N,v as ue,w as Se,G as Ae,x as ke,y as Ce,z as Fe,A as Le,B as Me,C as Ee,D as je,H as fe}from"./index-2e9bc29a.js";import{D as Be}from"./DefaultButton-9535f434.js";import{A as Ie}from"./About-d0ed6c33.js";import{F as Ne,a as De}from"./Popup-cc7fddc4.js";import{P as Oe}from"./Popup-d011aa4b.js";function Te(a){let t;return{c(){t=N("About")},m(e,n){M(e,t,n)},d(e){e&&E(t)}}}function Ge(a){let t,e,n,o,s;return{c(){t=S("input"),e=d(),n=S("datalist"),A(t,"class","govuk-input govuk-input--width-20"),A(t,"id","inputValue"),A(t,"data-testid","transport-authority"),A(t,"list","authorities-list"),A(n,"id","authorities-list")},m(l,i){M(l,t,i),ue(t,a[0]),M(l,e,i),M(l,n,i),a[13](n),o||(s=Se(t,"input",a[12]),o=!0)},p(l,i){i&1&&t.value!==l[0]&&ue(t,l[0])},d(l){l&&(E(t),E(e),E(n)),a[13](null),o=!1,s()}}}function Je(a){let t;return{c(){t=N("Start")},m(e,n){M(e,t,n)},d(e){e&&E(t)}}}function Pe(a){let t,e=a[19].name+"",n,o,s=a[19].level+"",l,i;return{c(){t=S("p"),n=N(e),o=N(" ("),l=N(s),i=N(")")},m(v,p){M(v,t,p),u(t,n),u(t,o),u(t,l),u(t,i)},p(v,p){p&524288&&e!==(e=v[19].name+"")&&fe(n,e),p&524288&&s!==(s=v[19].level+"")&&fe(l,s)},d(v){v&&E(t)}}}function Ve(a){let t,e;return t=new Oe({props:{$$slots:{default:[Pe,({props:n})=>({19:n}),({props:n})=>n?524288:0]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){g(t,n,o),e=!0},p(n,o){const s={};o&1572864&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){_(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function He(a){let t,e,n,o;return t=new De({props:{id:"boundaries",filter:["==",["get","level"],a[1]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Ee(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Ve]},$$scope:{ctx:a}}}),t.$on("click",a[8]),n=new je({props:{id:"boundaries-outline",filter:["==",["get","level"],a[1]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){c(t.$$.fragment),e=d(),c(n.$$.fragment)},m(s,l){g(t,s,l),M(s,e,l),g(n,s,l),o=!0},p(s,l){const i={};l&2&&(i.filter=["==",["get","level"],s[1]]),l&1048576&&(i.$$scope={dirty:l,ctx:s}),t.$set(i);const v={};l&2&&(v.filter=["==",["get","level"],s[1]]),n.$set(v)},i(s){o||(h(t.$$.fragment,s),h(n.$$.fragment,s),o=!0)},o(s){_(t.$$.fragment,s),_(n.$$.fragment,s),o=!1},d(s){s&&E(e),b(t,s),b(n,s)}}}function Re(a){let t,e;return t=new Ae({props:{data:a[2],generateId:!0,$$slots:{default:[He]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){g(t,n,o),e=!0},p(n,o){const s={};o&4&&(s.data=n[2]),o&1048578&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){_(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function qe(a){let t,e,n,o,s,l,i,v,p,j,y,D,w,J,k,P,V,H,C,O,R,f,$,L,T,F,X,q,G,I,U,B,W,z;i=new ge({}),p=new he({props:{$$slots:{default:[Te]},$$scope:{ctx:a}}}),p.$on("click",a[11]),y=new re({props:{errorMessage:a[4]}}),w=new _e({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Ge]},$$scope:{ctx:a}}}),k=new Be({props:{disabled:!a[6],$$slots:{default:[Je]},$$scope:{ctx:a}}}),k.$on("click",a[9]);function pe(r){a[14](r)}let Y={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[1]!==void 0&&(Y.value=a[1]),C=new be({props:Y}),Q.push(()=>oe(C,"value",pe)),L=new re({props:{errorMessage:ze}}),F=new Ne({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[7],id:"load-geojson"}}),I=new ve({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:a}}});function me(r){a[15](r)}let Z={};return a[3]!==void 0&&(Z.open=a[3]),B=new Ie({props:Z}),Q.push(()=>oe(B,"open",me)),{c(){t=S("div"),e=S("div"),n=S("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=d(),s=S("p"),s.textContent=`App version: ${we()}`,l=d(),c(i.$$.fragment),v=d(),c(p.$$.fragment),j=d(),c(y.$$.fragment),D=d(),c(w.$$.fragment),J=d(),c(k.$$.fragment),P=d(),V=S("hr"),H=d(),c(C.$$.fragment),R=d(),f=S("hr"),$=d(),c(L.$$.fragment),T=d(),c(F.$$.fragment),X=d(),q=S("div"),G=S("div"),c(I.$$.fragment),U=d(),c(B.$$.fragment),A(n,"class","govuk-heading-l"),A(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),A(G,"id","map"),A(G,"class","svelte-lyn11h"),A(q,"class","govuk-grid-column-one-half"),A(t,"class","govuk-grid-row")},m(r,m){M(r,t,m),u(t,e),u(e,n),u(e,o),u(e,s),u(e,l),g(i,e,null),u(e,v),g(p,e,null),u(e,j),g(y,e,null),u(e,D),g(w,e,null),u(e,J),g(k,e,null),u(e,P),u(e,V),u(e,H),g(C,e,null),u(e,R),u(e,f),u(e,$),g(L,e,null),u(e,T),g(F,e,null),u(t,X),u(t,q),u(q,G),g(I,G,null),M(r,U,m),g(B,r,m),z=!0},p(r,[m]){const x={};m&1048576&&(x.$$scope={dirty:m,ctx:r}),p.$set(x);const ee={};m&16&&(ee.errorMessage=r[4]),y.$set(ee);const te={};m&1048609&&(te.$$scope={dirty:m,ctx:r}),w.$set(te);const K={};m&64&&(K.disabled=!r[6]),m&1048576&&(K.$$scope={dirty:m,ctx:r}),k.$set(K);const ne={};!O&&m&2&&(O=!0,ne.value=r[1],le(()=>O=!1)),C.$set(ne);const ae={};m&1048582&&(ae.$$scope={dirty:m,ctx:r}),I.$set(ae);const se={};!W&&m&8&&(W=!0,se.open=r[3],le(()=>W=!1)),B.$set(se)},i(r){z||(h(i.$$.fragment,r),h(p.$$.fragment,r),h(y.$$.fragment,r),h(w.$$.fragment,r),h(k.$$.fragment,r),h(C.$$.fragment,r),h(L.$$.fragment,r),h(F.$$.fragment,r),h(I.$$.fragment,r),h(B.$$.fragment,r),z=!0)},o(r){_(i.$$.fragment,r),_(p.$$.fragment,r),_(y.$$.fragment,r),_(w.$$.fragment,r),_(k.$$.fragment,r),_(C.$$.fragment,r),_(L.$$.fragment,r),_(F.$$.fragment,r),_(I.$$.fragment,r),_(B.$$.fragment,r),z=!1},d(r){r&&(E(t),E(U)),b(i),b(p),b(y),b(w),b(k),b(C),b(L),b(F),b(I),b(B,r)}}}let ze="";function Ue(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["pipeline"])if(t&&e in t)return e}return"v1"}function We(a,t,e){let n,o,s;ie(a,ke,f=>e(16,o=f)),ie(a,Ce,f=>e(10,s=f));let l={type:"FeatureCollection",features:[]},i=!1,p=new URLSearchParams(window.location.search).get("error")||"",j,y,D=new Set,w="TA";ye(async()=>{Fe(),e(2,l=await Le());for(let f of l.features){let $=document.createElement("option");$.value=f.properties.full_name,$.label=`${f.properties.name} (${f.properties.level})`,y.appendChild($),D.add(f.properties.full_name)}});function J(f){try{let $=JSON.parse(f),L=Me($.features,l);if(!L)throw new Error("Can't figure out the authority boundary that fully contains this scheme");$.authority=L;let T=$.authority,F=Ue($);F!="v1"&&(T+=`_${F}`),window.localStorage.setItem(T,JSON.stringify($)),window.location.href=`scheme.html?authority=${$.authority}&schema=${F}`}catch($){e(4,p=`Couldn't load scheme from a file: ${$}`)}}function k(f){window.location.href=`scheme.html?authority=${f.detail.features[0].properties.full_name}&schema=${o}`}function P(){window.location.href=`scheme.html?authority=${j}&schema=${o}`}const V=()=>e(3,i=!i);function H(){j=this.value,e(0,j)}function C(f){Q[f?"unshift":"push"](()=>{y=f,e(5,y)})}function O(f){w=f,e(1,w)}function R(f){i=f,e(3,i)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,n=D.has(j)),a.$$.dirty&1026&&(s==null||s.setFilter("boundaries",["==",["get","level"],w])),a.$$.dirty&1026&&(s==null||s.setFilter("boundaries-outline",["==",["get","level"],w]))},[j,w,l,i,p,y,n,J,k,P,s,V,H,C,O,R]}class Ke extends $e{constructor(t){super(),de(this,t,We,qe,ce,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Ke({target:document.getElementById("app")});
