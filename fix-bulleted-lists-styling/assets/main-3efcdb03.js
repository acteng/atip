import{S as $e,i as me,s as ce,L as ge,a as de,E as re,F as he,R as _e,b as X,c as oe,d as be,M as ve,e as y,f as g,g as we,h as d,j as S,k as E,l as i,m as h,n as le,t as _,o as b,p as I,q as v,r as ye,u as Se,v as O,w as ie,x as Ae,G as ke,y as Le,z as Ce,A as Me,B as Ee,C as Ie,D as Fe,H as Te,I as Be,J as ue}from"./index-f7355876.js";import{D as De,A as Je}from"./About-1454a145.js";import{P as Oe}from"./Popup-92c50e64.js";function je(r){let t;return{c(){t=O("About")},m(e,n){E(e,t,n)},d(e){e&&I(t)}}}function Ge(r){let t,e,n,o,a;return{c(){t=y("input"),e=g(),n=y("datalist"),S(t,"class","govuk-input govuk-input--width-20"),S(t,"id","inputValue"),S(t,"data-testid","transport-authority"),S(t,"list","authorities-list"),S(n,"id","authorities-list")},m(l,f){E(l,t,f),ie(t,r[0]),E(l,e,f),E(l,n,f),r[12](n),o||(a=Ae(t,"input",r[11]),o=!0)},p(l,f){f&1&&t.value!==l[0]&&ie(t,l[0])},d(l){l&&(I(t),I(e),I(n)),r[12](null),o=!1,a()}}}function Ne(r){let t;return{c(){t=O("Start")},m(e,n){E(e,t,n)},d(e){e&&I(t)}}}function Pe(r){let t,e=r[19].name+"",n,o,a=r[19].level+"",l,f;return{c(){t=y("p"),n=O(e),o=O(" ("),l=O(a),f=O(")")},m(c,p){E(c,t,p),i(t,n),i(t,o),i(t,l),i(t,f)},p(c,p){p&524288&&e!==(e=c[19].name+"")&&ue(n,e),p&524288&&a!==(a=c[19].level+"")&&ue(l,a)},d(c){c&&I(t)}}}function He(r){let t,e;return t=new Oe({props:{$$slots:{default:[Pe,({props:n})=>({19:n}),({props:n})=>n?524288:0]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&1572864&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function Ve(r){let t,e,n,o;return t=new Ie({props:{id:"boundaries",filter:["==",["get","level"],r[5]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Fe(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[He]},$$scope:{ctx:r}}}),t.$on("click",r[8]),n=new Te({props:{id:"boundaries-outline",filter:["==",["get","level"],r[5]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){d(t.$$.fragment),e=g(),d(n.$$.fragment)},m(a,l){h(t,a,l),E(a,e,l),h(n,a,l),o=!0},p(a,l){const f={};l&32&&(f.filter=["==",["get","level"],a[5]]),l&1048576&&(f.$$scope={dirty:l,ctx:a}),t.$set(f);const c={};l&32&&(c.filter=["==",["get","level"],a[5]]),n.$set(c)},i(a){o||(_(t.$$.fragment,a),_(n.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),b(n.$$.fragment,a),o=!1},d(a){a&&I(e),v(t,a),v(n,a)}}}function Re(r){let t,e;return t=new ke({props:{data:r[1],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const a={};o&2&&(a.data=n[1]),o&1048608&&(a.$$scope={dirty:o,ctx:n}),t.$set(a)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function qe(r){let t,e,n,o,a,l,f,c,p,T,A,D,C,P,k,H,V,R,L,j,q,u,w,$,G,M,J,z,N,B,W,F,K,U;f=new ge({}),p=new de({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),p.$on("click",r[10]),A=new re({props:{errorMessage:r[3]}}),C=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Ge]},$$scope:{ctx:r}}}),k=new De({props:{disabled:!r[6],$$slots:{default:[Ne]},$$scope:{ctx:r}}}),k.$on("click",r[9]);function fe(s){r[13](s)}let Y={label:"Or pick from the map",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};r[5]!==void 0&&(Y.value=r[5]),L=new _e({props:Y}),X.push(()=>oe(L,"value",fe)),$=new re({props:{errorMessage:ze}}),M=new be({props:{label:"Or upload an ATIP GeoJSON file",onLoad:r[7]}}),B=new ve({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:r}}});function pe(s){r[14](s)}let Z={};return r[2]!==void 0&&(Z.open=r[2]),F=new Je({props:Z}),X.push(()=>oe(F,"open",pe)),{c(){t=y("div"),e=y("div"),n=y("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=g(),a=y("p"),a.textContent=`App version: ${we()}`,l=g(),d(f.$$.fragment),c=g(),d(p.$$.fragment),T=g(),d(A.$$.fragment),D=g(),d(C.$$.fragment),P=g(),d(k.$$.fragment),H=g(),V=y("hr"),R=g(),d(L.$$.fragment),q=g(),u=y("hr"),w=g(),d($.$$.fragment),G=g(),d(M.$$.fragment),J=g(),z=y("div"),N=y("div"),d(B.$$.fragment),W=g(),d(F.$$.fragment),S(n,"class","govuk-heading-l"),S(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),S(N,"id","map"),S(N,"class","svelte-lyn11h"),S(z,"class","govuk-grid-column-one-half"),S(t,"class","govuk-grid-row")},m(s,m){E(s,t,m),i(t,e),i(e,n),i(e,o),i(e,a),i(e,l),h(f,e,null),i(e,c),h(p,e,null),i(e,T),h(A,e,null),i(e,D),h(C,e,null),i(e,P),h(k,e,null),i(e,H),i(e,V),i(e,R),h(L,e,null),i(e,q),i(e,u),i(e,w),h($,e,null),i(e,G),h(M,e,null),i(t,J),i(t,z),i(z,N),h(B,N,null),E(s,W,m),h(F,s,m),U=!0},p(s,[m]){const x={};m&1048576&&(x.$$scope={dirty:m,ctx:s}),p.$set(x);const ee={};m&8&&(ee.errorMessage=s[3]),A.$set(ee);const te={};m&1048593&&(te.$$scope={dirty:m,ctx:s}),C.$set(te);const Q={};m&64&&(Q.disabled=!s[6]),m&1048576&&(Q.$$scope={dirty:m,ctx:s}),k.$set(Q);const ne={};!j&&m&32&&(j=!0,ne.value=s[5],le(()=>j=!1)),L.$set(ne);const ae={};m&1048610&&(ae.$$scope={dirty:m,ctx:s}),B.$set(ae);const se={};!K&&m&4&&(K=!0,se.open=s[2],le(()=>K=!1)),F.$set(se)},i(s){U||(_(f.$$.fragment,s),_(p.$$.fragment,s),_(A.$$.fragment,s),_(C.$$.fragment,s),_(k.$$.fragment,s),_(L.$$.fragment,s),_($.$$.fragment,s),_(M.$$.fragment,s),_(B.$$.fragment,s),_(F.$$.fragment,s),U=!0)},o(s){b(f.$$.fragment,s),b(p.$$.fragment,s),b(A.$$.fragment,s),b(C.$$.fragment,s),b(k.$$.fragment,s),b(L.$$.fragment,s),b($.$$.fragment,s),b(M.$$.fragment,s),b(B.$$.fragment,s),b(F.$$.fragment,s),U=!1},d(s){s&&(I(t),I(W)),v(f),v(p),v(A),v(C),v(k),v(L),v($),v(M),v(B),v(F,s)}}}let ze="";function Ue(r,t,e){let n,o;ye(r,Be,u=>e(15,o=u));let a={type:"FeatureCollection",features:[]},l=!1,c=new URLSearchParams(window.location.search).get("error")||"",p,T,A=new Set,D="TA";Se(async()=>{Le(),e(1,a=await Ce());for(let u of a.features){let w=document.createElement("option");w.value=u.properties.full_name,w.label=`${u.properties.name} (${u.properties.level})`,T.appendChild(w),A.add(u.properties.full_name)}});function C(u,w){try{let $=JSON.parse(w),G=Me($.features,a);if(!G)throw new Error("Can't figure out the authority boundary that fully contains this scheme");$.authority=G;let M=$.authority,J=P($);J!="v1"&&(M+=`_${J}`),Ee(M,JSON.stringify($)),window.location.href=`scheme.html?authority=${$.authority}&schema=${J}`}catch($){e(3,c=`Couldn't load scheme from a file: ${$}`)}}function P(u){if(u.features.length>0){let w=u.features[0].properties;for(let $ of["pipeline"])if(w&&$ in w)return $}return o}function k(u){window.location.href=`scheme.html?authority=${u.detail.features[0].properties.full_name}&schema=${o}`}function H(){window.location.href=`scheme.html?authority=${p}&schema=${o}`}const V=()=>e(2,l=!l);function R(){p=this.value,e(0,p)}function L(u){X[u?"unshift":"push"](()=>{T=u,e(4,T)})}function j(u){D=u,e(5,D)}function q(u){l=u,e(2,l)}return r.$$.update=()=>{r.$$.dirty&1&&e(6,n=A.has(p))},[p,a,l,c,T,D,n,C,k,H,V,R,L,j,q]}class We extends $e{constructor(t){super(),me(this,t,Ue,qe,ce,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new We({target:document.getElementById("app")});
