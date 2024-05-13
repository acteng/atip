import{S as $e,i as me,s as ce,L as ge,a as de,E as re,F as he,R as _e,b as Q,c as oe,d as ve,M as be,e as y,f as g,g as we,h as d,j as S,k as E,l as u,m as h,n as le,t as _,o as v,p as F,q as b,r as ye,u as Se,v as J,w as ie,x as Ae,G as ke,y as Le,z as Ce,A as Me,B as Ee,C as Fe,D as Ie,H as Te,I as Be,J as ue}from"./index-bbe15b4b.js";import{D as De,A as Je}from"./About-bb824a16.js";import{P as Oe}from"./Popup-6e2402c8.js";function je(r){let t;return{c(){t=J("About")},m(e,n){E(e,t,n)},d(e){e&&F(t)}}}function Ge(r){let t,e,n,o,a;return{c(){t=y("input"),e=g(),n=y("datalist"),S(t,"class","govuk-input govuk-input--width-20"),S(t,"id","inputValue"),S(t,"data-testid","transport-authority"),S(t,"list","authorities-list"),S(n,"id","authorities-list")},m(l,f){E(l,t,f),ie(t,r[0]),E(l,e,f),E(l,n,f),r[12](n),o||(a=Ae(t,"input",r[11]),o=!0)},p(l,f){f&1&&t.value!==l[0]&&ie(t,l[0])},d(l){l&&(F(t),F(e),F(n)),r[12](null),o=!1,a()}}}function Ne(r){let t;return{c(){t=J("Start")},m(e,n){E(e,t,n)},d(e){e&&F(t)}}}function Pe(r){let t,e=r[19].name+"",n,o,a=r[19].level+"",l,f;return{c(){t=y("p"),n=J(e),o=J(" ("),l=J(a),f=J(")")},m(c,p){E(c,t,p),u(t,n),u(t,o),u(t,l),u(t,f)},p(c,p){p&524288&&e!==(e=c[19].name+"")&&ue(n,e),p&524288&&a!==(a=c[19].level+"")&&ue(l,a)},d(c){c&&F(t)}}}function He(r){let t,e;return t=new Oe({props:{$$slots:{default:[Pe,({props:n})=>({19:n}),({props:n})=>n?524288:0]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&1572864&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){v(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function Ve(r){let t,e,n,o;return t=new Ie({props:{id:"boundaries",filter:["==",["get","level"],r[5]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Te(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[He]},$$scope:{ctx:r}}}),t.$on("click",r[8]),n=new Be({props:{id:"boundaries-outline",filter:["==",["get","level"],r[5]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){d(t.$$.fragment),e=g(),d(n.$$.fragment)},m(a,l){h(t,a,l),E(a,e,l),h(n,a,l),o=!0},p(a,l){const f={};l&32&&(f.filter=["==",["get","level"],a[5]]),l&1048576&&(f.$$scope={dirty:l,ctx:a}),t.$set(f);const c={};l&32&&(c.filter=["==",["get","level"],a[5]]),n.$set(c)},i(a){o||(_(t.$$.fragment,a),_(n.$$.fragment,a),o=!0)},o(a){v(t.$$.fragment,a),v(n.$$.fragment,a),o=!1},d(a){a&&F(e),b(t,a),b(n,a)}}}function Re(r){let t,e;return t=new ke({props:{data:r[1],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&2&&(a.data=n[1]),o&1048608&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){v(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function qe(r){let t,e,n,o,a,l,f,c,p,T,A,D,M,N,k,P,H,V,L,O,R,i,$,w,j,C,X,q,G,B,U,I,W,z;f=new ge({}),p=new de({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),p.$on("click",r[10]),A=new re({props:{errorMessage:r[3]}}),M=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Ge]},$$scope:{ctx:r}}}),k=new De({props:{disabled:!r[6],$$slots:{default:[Ne]},$$scope:{ctx:r}}}),k.$on("click",r[9]);function fe(s){r[13](s)}let Y={legend:"Or pick from the map",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};r[5]!==void 0&&(Y.value=r[5]),L=new _e({props:Y}),Q.push(()=>oe(L,"value",fe)),w=new re({props:{errorMessage:ze}}),C=new ve({props:{label:"Or upload an ATIP GeoJSON file",loadFile:r[7]}}),B=new be({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:r}}});function pe(s){r[14](s)}let Z={};return r[2]!==void 0&&(Z.open=r[2]),I=new Je({props:Z}),Q.push(()=>oe(I,"open",pe)),{c(){t=y("div"),e=y("div"),n=y("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=g(),a=y("p"),a.textContent=`App version: ${we()}`,l=g(),d(f.$$.fragment),c=g(),d(p.$$.fragment),T=g(),d(A.$$.fragment),D=g(),d(M.$$.fragment),N=g(),d(k.$$.fragment),P=g(),H=y("hr"),V=g(),d(L.$$.fragment),R=g(),i=y("hr"),$=g(),d(w.$$.fragment),j=g(),d(C.$$.fragment),X=g(),q=y("div"),G=y("div"),d(B.$$.fragment),U=g(),d(I.$$.fragment),S(n,"class","govuk-heading-l"),S(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),S(G,"id","map"),S(G,"class","svelte-lyn11h"),S(q,"class","govuk-grid-column-one-half"),S(t,"class","govuk-grid-row")},m(s,m){E(s,t,m),u(t,e),u(e,n),u(e,o),u(e,a),u(e,l),h(f,e,null),u(e,c),h(p,e,null),u(e,T),h(A,e,null),u(e,D),h(M,e,null),u(e,N),h(k,e,null),u(e,P),u(e,H),u(e,V),h(L,e,null),u(e,R),u(e,i),u(e,$),h(w,e,null),u(e,j),h(C,e,null),u(t,X),u(t,q),u(q,G),h(B,G,null),E(s,U,m),h(I,s,m),z=!0},p(s,[m]){const x={};m&1048576&&(x.$$scope={dirty:m,ctx:s}),p.$set(x);const ee={};m&8&&(ee.errorMessage=s[3]),A.$set(ee);const te={};m&1048593&&(te.$$scope={dirty:m,ctx:s}),M.$set(te);const K={};m&64&&(K.disabled=!s[6]),m&1048576&&(K.$$scope={dirty:m,ctx:s}),k.$set(K);const ne={};!O&&m&32&&(O=!0,ne.value=s[5],le(()=>O=!1)),L.$set(ne);const ae={};m&1048610&&(ae.$$scope={dirty:m,ctx:s}),B.$set(ae);const se={};!W&&m&4&&(W=!0,se.open=s[2],le(()=>W=!1)),I.$set(se)},i(s){z||(_(f.$$.fragment,s),_(p.$$.fragment,s),_(A.$$.fragment,s),_(M.$$.fragment,s),_(k.$$.fragment,s),_(L.$$.fragment,s),_(w.$$.fragment,s),_(C.$$.fragment,s),_(B.$$.fragment,s),_(I.$$.fragment,s),z=!0)},o(s){v(f.$$.fragment,s),v(p.$$.fragment,s),v(A.$$.fragment,s),v(M.$$.fragment,s),v(k.$$.fragment,s),v(L.$$.fragment,s),v(w.$$.fragment,s),v(C.$$.fragment,s),v(B.$$.fragment,s),v(I.$$.fragment,s),z=!1},d(s){s&&(F(t),F(U)),b(f),b(p),b(A),b(M),b(k),b(L),b(w),b(C),b(B),b(I,s)}}}let ze="";function Ue(r,t,e){let n,o;ye(r,Le,i=>e(15,o=i));let a={type:"FeatureCollection",features:[]},l=!1,c=new URLSearchParams(window.location.search).get("error")||"",p,T,A=new Set,D="TA";Se(async()=>{Ce(),e(1,a=await Me());for(let i of a.features){let $=document.createElement("option");$.value=i.properties.full_name,$.label=`${i.properties.name} (${i.properties.level})`,T.appendChild($),A.add(i.properties.full_name)}});function M(i){try{let $=JSON.parse(i),w=Ee($.features,a);if(!w)throw new Error("Can't figure out the authority boundary that fully contains this scheme");$.authority=w;let j=$.authority,C=N($);C!="v1"&&(j+=`_${C}`),Fe(j,JSON.stringify($)),window.location.href=`scheme.html?authority=${$.authority}&schema=${C}`}catch($){e(3,c=`Couldn't load scheme from a file: ${$}`)}}function N(i){if(i.features.length>0){let $=i.features[0].properties;for(let w of["pipeline"])if($&&w in $)return w}return o}function k(i){window.location.href=`scheme.html?authority=${i.detail.features[0].properties.full_name}&schema=${o}`}function P(){window.location.href=`scheme.html?authority=${p}&schema=${o}`}const H=()=>e(2,l=!l);function V(){p=this.value,e(0,p)}function L(i){Q[i?"unshift":"push"](()=>{T=i,e(4,T)})}function O(i){D=i,e(5,D)}function R(i){l=i,e(2,l)}return r.$$.update=()=>{r.$$.dirty&1&&e(6,n=A.has(p))},[p,a,l,c,T,D,n,M,k,P,H,V,L,O,R]}class We extends $e{constructor(t){super(),me(this,t,Ue,qe,ce,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new We({target:document.getElementById("app")});
