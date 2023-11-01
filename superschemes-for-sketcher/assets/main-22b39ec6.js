import{S as $e,i as me,s as de,L as ge,a as ce,E as re,F as he,R as _e,b as K,c as oe,M as be,e as w,d as g,f as ve,g as c,h as y,j as L,k as i,m as h,l as le,t as _,n as b,o as M,p as v,q as we,r as ye,u as D,v as ie,w as Ae,G as Se,x as ke,y as Ce,z as Fe,A as Le,B as Me,C as Ee,D as ue}from"./index-499eedcb.js";import{D as je}from"./DefaultButton-e78438bc.js";import{A as Be}from"./About-079d3668.js";import{F as Ie,a as Ne}from"./Popup-27f2aee2.js";import{P as De}from"./Popup-bfc3a507.js";function Oe(a){let t;return{c(){t=D("About")},m(e,n){L(e,t,n)},d(e){e&&M(t)}}}function Te(a){let t,e,n,o,s;return{c(){t=w("input"),e=g(),n=w("datalist"),y(t,"class","govuk-input govuk-input--width-20"),y(t,"id","inputValue"),y(t,"data-testid","transport-authority"),y(t,"list","authorities-list"),y(n,"id","authorities-list")},m(l,u){L(l,t,u),ie(t,a[0]),L(l,e,u),L(l,n,u),a[12](n),o||(s=Ae(t,"input",a[11]),o=!0)},p(l,u){u&1&&t.value!==l[0]&&ie(t,l[0])},d(l){l&&(M(t),M(e),M(n)),a[12](null),o=!1,s()}}}function Ge(a){let t;return{c(){t=D("Start")},m(e,n){L(e,t,n)},d(e){e&&M(t)}}}function Je(a){let t,e=a[17].name+"",n,o,s=a[17].level+"",l,u;return{c(){t=w("p"),n=D(e),o=D(" ("),l=D(s),u=D(")")},m(m,f){L(m,t,f),i(t,n),i(t,o),i(t,l),i(t,u)},p(m,f){f&131072&&e!==(e=m[17].name+"")&&ue(n,e),f&131072&&s!==(s=m[17].level+"")&&ue(l,s)},d(m){m&&M(t)}}}function Pe(a){let t,e;return t=new De({props:{$$slots:{default:[Je,({props:n})=>({17:n}),({props:n})=>n?131072:0]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const s={};o&393216&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function Ve(a){let t,e,n,o;return t=new Ne({props:{id:"boundaries",filter:["==",["get","level"],a[1]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Le(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),t.$on("click",Ue),n=new Me({props:{id:"boundaries-outline",filter:["==",["get","level"],a[1]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){c(t.$$.fragment),e=g(),c(n.$$.fragment)},m(s,l){h(t,s,l),L(s,e,l),h(n,s,l),o=!0},p(s,l){const u={};l&2&&(u.filter=["==",["get","level"],s[1]]),l&262144&&(u.$$scope={dirty:l,ctx:s}),t.$set(u);const m={};l&2&&(m.filter=["==",["get","level"],s[1]]),n.$set(m)},i(s){o||(_(t.$$.fragment,s),_(n.$$.fragment,s),o=!0)},o(s){b(t.$$.fragment,s),b(n.$$.fragment,s),o=!1},d(s){s&&M(e),v(t,s),v(n,s)}}}function Re(a){let t,e;return t=new Se({props:{data:a[2],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const s={};o&4&&(s.data=n[2]),o&262146&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function qe(a){let t,e,n,o,s,l,u,m,f,B,A,E,F,J,S,P,V,R,k,p,d,O,T,C,Q,N,X,q,G,I,z,j,U,H;u=new ge({}),f=new ce({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),f.$on("click",a[10]),A=new re({props:{errorMessage:a[4]}}),F=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Te]},$$scope:{ctx:a}}}),S=new je({props:{disabled:!a[6],$$slots:{default:[Ge]},$$scope:{ctx:a}}}),S.$on("click",a[8]);function fe(r){a[13](r)}let Y={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[1]!==void 0&&(Y.value=a[1]),k=new _e({props:Y}),K.push(()=>oe(k,"value",fe)),C=new re({props:{errorMessage:He}}),N=new Ie({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[7],id:"load-geojson"}}),I=new be({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:a}}});function pe(r){a[14](r)}let Z={};return a[3]!==void 0&&(Z.open=a[3]),j=new Be({props:Z}),K.push(()=>oe(j,"open",pe)),{c(){t=w("div"),e=w("div"),n=w("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=g(),s=w("p"),s.textContent=`App version: ${ve()}`,l=g(),c(u.$$.fragment),m=g(),c(f.$$.fragment),B=g(),c(A.$$.fragment),E=g(),c(F.$$.fragment),J=g(),c(S.$$.fragment),P=g(),V=w("hr"),R=g(),c(k.$$.fragment),d=g(),O=w("hr"),T=g(),c(C.$$.fragment),Q=g(),c(N.$$.fragment),X=g(),q=w("div"),G=w("div"),c(I.$$.fragment),z=g(),c(j.$$.fragment),y(n,"class","govuk-heading-l"),y(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),y(G,"id","map"),y(G,"class","svelte-lyn11h"),y(q,"class","govuk-grid-column-one-half"),y(t,"class","govuk-grid-row")},m(r,$){L(r,t,$),i(t,e),i(e,n),i(e,o),i(e,s),i(e,l),h(u,e,null),i(e,m),h(f,e,null),i(e,B),h(A,e,null),i(e,E),h(F,e,null),i(e,J),h(S,e,null),i(e,P),i(e,V),i(e,R),h(k,e,null),i(e,d),i(e,O),i(e,T),h(C,e,null),i(e,Q),h(N,e,null),i(t,X),i(t,q),i(q,G),h(I,G,null),L(r,z,$),h(j,r,$),H=!0},p(r,[$]){const x={};$&262144&&(x.$$scope={dirty:$,ctx:r}),f.$set(x);const ee={};$&16&&(ee.errorMessage=r[4]),A.$set(ee);const te={};$&262177&&(te.$$scope={dirty:$,ctx:r}),F.$set(te);const W={};$&64&&(W.disabled=!r[6]),$&262144&&(W.$$scope={dirty:$,ctx:r}),S.$set(W);const ne={};!p&&$&2&&(p=!0,ne.value=r[1],le(()=>p=!1)),k.$set(ne);const ae={};$&262150&&(ae.$$scope={dirty:$,ctx:r}),I.$set(ae);const se={};!U&&$&8&&(U=!0,se.open=r[3],le(()=>U=!1)),j.$set(se)},i(r){H||(_(u.$$.fragment,r),_(f.$$.fragment,r),_(A.$$.fragment,r),_(F.$$.fragment,r),_(S.$$.fragment,r),_(k.$$.fragment,r),_(C.$$.fragment,r),_(N.$$.fragment,r),_(I.$$.fragment,r),_(j.$$.fragment,r),H=!0)},o(r){b(u.$$.fragment,r),b(f.$$.fragment,r),b(A.$$.fragment,r),b(F.$$.fragment,r),b(S.$$.fragment,r),b(k.$$.fragment,r),b(C.$$.fragment,r),b(N.$$.fragment,r),b(I.$$.fragment,r),b(j.$$.fragment,r),H=!1},d(r){r&&(M(t),M(z)),v(u),v(f),v(A),v(F),v(S),v(k),v(C),v(N),v(I),v(j,r)}}}let He="";function ze(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["planning","v2"])if(t&&e in t)return e}return"v1"}function Ue(a){window.location.href=`scheme.html?authority=${a.detail.features[0].properties.full_name}`}function We(a,t,e){let n,o;we(a,Ee,p=>e(9,o=p));let s={type:"FeatureCollection",features:[]},l=!1,m=new URLSearchParams(window.location.search).get("error")||"",f,B,A=new Set,E="TA";ye(async()=>{ke(),e(2,s=await Ce());for(let p of s.features){let d=document.createElement("option");d.value=p.properties.full_name,d.label=`${p.properties.name} (${p.properties.level})`,B.appendChild(d),A.add(p.properties.full_name)}});function F(p){try{let d=JSON.parse(p),O=Fe(d.features,s);if(!O)throw new Error("Can't figure out the authority boundary that fully contains this scheme");d.authority=O;let T=d.authority,C=ze(d);C!="v1"&&(T+=`_${C}`),window.localStorage.setItem(T,JSON.stringify(d)),window.location.href=`scheme.html?authority=${d.authority}&schema=${C}`}catch(d){e(4,m=`Couldn't load scheme from a file: ${d}`)}}function J(){window.location.href=`scheme.html?authority=${f}`}const S=()=>e(3,l=!l);function P(){f=this.value,e(0,f)}function V(p){K[p?"unshift":"push"](()=>{B=p,e(5,B)})}function R(p){E=p,e(1,E)}function k(p){l=p,e(3,l)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,n=A.has(f)),a.$$.dirty&514&&(o==null||o.setFilter("boundaries",["==",["get","level"],E])),a.$$.dirty&514&&(o==null||o.setFilter("boundaries-outline",["==",["get","level"],E]))},[f,E,s,l,m,B,n,F,J,o,S,P,V,R,k]}class Ke extends $e{constructor(t){super(),me(this,t,We,qe,de,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Ke({target:document.getElementById("app")});