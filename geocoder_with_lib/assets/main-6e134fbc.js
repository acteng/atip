import{S as pe,i as $e,s as me,L as de,a as ce,E as oe,F as ge,R as he,b as W,c as re,M as _e,e as v,d as m,f as be,g as c,h as y,j as F,k as l,m as g,l as le,t as h,n as _,o as M,p as b,q as we,r as ve,u as K,v as ie,w as ye,x as Ae,y as Se,z as ke,A as Ee,B as Fe}from"./index-9eaa0064.js";import{D as Me}from"./DefaultButton-116dd859.js";import{A as Ce}from"./About-35c8c63e.js";import{F as Le,G as je,a as Ie,h as Be}from"./GeoJSON-1dae2c72.js";import{P as Ne}from"./Popup-6add7fd2.js";function Te(a){let t;return{c(){t=K("About")},m(e,n){F(e,t,n)},d(e){e&&M(t)}}}function Ge(a){let t,e,n,o,r;return{c(){t=v("input"),e=m(),n=v("datalist"),y(t,"class","govuk-input govuk-input--width-20"),y(t,"id","inputValue"),y(t,"data-testid","transport-authority"),y(t,"list","authorities-list"),y(n,"id","authorities-list")},m(i,d){F(i,t,d),ie(t,a[0]),F(i,e,d),F(i,n,d),a[12](n),o||(r=ye(t,"input",a[11]),o=!0)},p(i,d){d&1&&t.value!==i[0]&&ie(t,i[0])},d(i){i&&(M(t),M(e),M(n)),a[12](null),o=!1,r()}}}function Oe(a){let t;return{c(){t=K("Start")},m(e,n){F(e,t,n)},d(e){e&&M(t)}}}function Pe(a){let t,e=a[17].name+"",n;return{c(){t=v("p"),n=K(e)},m(o,r){F(o,t,r),l(t,n)},p(o,r){r&131072&&e!==(e=o[17].name+"")&&Fe(n,e)},d(o){o&&M(t)}}}function De(a){let t,e;return t=new Ne({props:{$$slots:{default:[Pe,({props:n})=>({17:n}),({props:n})=>n?131072:0]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){g(t,n,o),e=!0},p(n,o){const r={};o&393216&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){_(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function Je(a){let t,e;return t=new Ie({props:{id:"boundaries",filter:["==",["get","level"],a[1]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Be(.4,.8)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[De]},$$scope:{ctx:a}}}),t.$on("click",ze),{c(){c(t.$$.fragment)},m(n,o){g(t,n,o),e=!0},p(n,o){const r={};o&2&&(r.filter=["==",["get","level"],n[1]]),o&262144&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){_(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function Ve(a){let t,e;return t=new je({props:{data:a[2],generateId:!0,$$slots:{default:[Je]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){g(t,n,o),e=!0},p(n,o){const r={};o&4&&(r.data=n[2]),o&262146&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||(h(t.$$.fragment,n),e=!0)},o(n){_(t.$$.fragment,n),e=!1},d(n){b(t,n)}}}function Re(a){let t,e,n,o,r,i,d,T,$,C,w,L,k,P,A,D,J,V,S,u,p,G,I,B,Q,N,X,R,O,j,U,E,z,q;d=new de({}),$=new ce({props:{$$slots:{default:[Te]},$$scope:{ctx:a}}}),$.$on("click",a[10]),w=new oe({props:{errorMessage:a[4]}}),k=new ge({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Ge]},$$scope:{ctx:a}}}),A=new Me({props:{disabled:!a[6],$$slots:{default:[Oe]},$$scope:{ctx:a}}}),A.$on("click",a[8]);function ue(s){a[13](s)}let Y={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[1]!==void 0&&(Y.value=a[1]),S=new he({props:Y}),W.push(()=>re(S,"value",ue)),B=new oe({props:{errorMessage:qe}}),N=new Le({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[7],id:"load-geojson"}}),j=new _e({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Ve]},$$scope:{ctx:a}}});function fe(s){a[14](s)}let Z={};return a[3]!==void 0&&(Z.open=a[3]),E=new Ce({props:Z}),W.push(()=>re(E,"open",fe)),{c(){t=v("div"),e=v("div"),n=v("h1"),n.textContent="Welcome to ATIP v2",o=m(),r=v("p"),r.textContent=`App version: ${be()}`,i=m(),c(d.$$.fragment),T=m(),c($.$$.fragment),C=m(),c(w.$$.fragment),L=m(),c(k.$$.fragment),P=m(),c(A.$$.fragment),D=m(),J=v("hr"),V=m(),c(S.$$.fragment),p=m(),G=v("hr"),I=m(),c(B.$$.fragment),Q=m(),c(N.$$.fragment),X=m(),R=v("div"),O=v("div"),c(j.$$.fragment),U=m(),c(E.$$.fragment),y(n,"class","govuk-heading-l"),y(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),y(O,"id","map"),y(O,"class","svelte-lyn11h"),y(R,"class","govuk-grid-column-one-half"),y(t,"class","govuk-grid-row")},m(s,f){F(s,t,f),l(t,e),l(e,n),l(e,o),l(e,r),l(e,i),g(d,e,null),l(e,T),g($,e,null),l(e,C),g(w,e,null),l(e,L),g(k,e,null),l(e,P),g(A,e,null),l(e,D),l(e,J),l(e,V),g(S,e,null),l(e,p),l(e,G),l(e,I),g(B,e,null),l(e,Q),g(N,e,null),l(t,X),l(t,R),l(R,O),g(j,O,null),F(s,U,f),g(E,s,f),q=!0},p(s,[f]){const x={};f&262144&&(x.$$scope={dirty:f,ctx:s}),$.$set(x);const ee={};f&16&&(ee.errorMessage=s[4]),w.$set(ee);const te={};f&262177&&(te.$$scope={dirty:f,ctx:s}),k.$set(te);const H={};f&64&&(H.disabled=!s[6]),f&262144&&(H.$$scope={dirty:f,ctx:s}),A.$set(H);const ne={};!u&&f&2&&(u=!0,ne.value=s[1],le(()=>u=!1)),S.$set(ne);const ae={};f&262150&&(ae.$$scope={dirty:f,ctx:s}),j.$set(ae);const se={};!z&&f&8&&(z=!0,se.open=s[3],le(()=>z=!1)),E.$set(se)},i(s){q||(h(d.$$.fragment,s),h($.$$.fragment,s),h(w.$$.fragment,s),h(k.$$.fragment,s),h(A.$$.fragment,s),h(S.$$.fragment,s),h(B.$$.fragment,s),h(N.$$.fragment,s),h(j.$$.fragment,s),h(E.$$.fragment,s),q=!0)},o(s){_(d.$$.fragment,s),_($.$$.fragment,s),_(w.$$.fragment,s),_(k.$$.fragment,s),_(A.$$.fragment,s),_(S.$$.fragment,s),_(B.$$.fragment,s),_(N.$$.fragment,s),_(j.$$.fragment,s),_(E.$$.fragment,s),q=!1},d(s){s&&(M(t),M(U)),b(d),b($),b(w),b(k),b(A),b(S),b(B),b(N),b(j),b(E,s)}}}let qe="";function Ue(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["planning","v2"])if(t&&e in t)return e}return"v1"}function ze(a){window.location.href=`scheme.html?authority=${a.detail.features[0].properties.name}`}function He(a,t,e){let n,o;we(a,Ee,u=>e(9,o=u));let r=Ae(),i=!1,T=new URLSearchParams(window.location.search).get("error")||"",$,C,w=new Set,L="TA";ve(async()=>{Se(),e(2,r=await ke());for(let u of r.features){let p=document.createElement("option");p.value=u.properties.name,C.appendChild(p),w.add(u.properties.name)}});function k(u){try{let p=JSON.parse(u);if(!p.authority)throw new Error("File doesn't have an authority set; is it an ATIP file?");if(!w.has(p.authority))throw new Error(`Unknown authority ${p.authority}`);let G=p.authority,I=Ue(p);I!="v1"&&(G+=`_${I}`),window.localStorage.setItem(G,JSON.stringify(p)),window.location.href=`scheme.html?authority=${p.authority}&schema=${I}`}catch(p){e(4,T=`Couldn't load scheme from a file: ${p}`)}}function P(){window.location.href=`scheme.html?authority=${$}`}const A=()=>e(3,i=!i);function D(){$=this.value,e(0,$)}function J(u){W[u?"unshift":"push"](()=>{C=u,e(5,C)})}function V(u){L=u,e(1,L)}function S(u){i=u,e(3,i)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,n=w.has($)),a.$$.dirty&514&&(o==null||o.setFilter("boundaries",["==",["get","level"],L]))},[$,L,r,i,T,C,n,k,P,o,A,D,J,V,S]}class We extends pe{constructor(t){super(),$e(this,t,He,Re,me,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new We({target:document.getElementById("app")});
