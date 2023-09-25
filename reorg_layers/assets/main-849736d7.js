import{S as de,i as ce,s as ge,L as $e,a as he,E as oe,F as _e,R as be,b as z,c as re,e as E,d as p,f as ve,g as v,h as I,j as B,k as r,m as w,l as se,t as g,n as h,o as we,p as F,q as y,r as ye,u as fe,v as le,w as ke,x as Ae,y as Se,z as Ee,A as Ie,B as Le,C as Te,D as Ce,G as Me}from"./index-d3514feb.js";import{D as Be}from"./DefaultButton-228222a3.js";import{A as Fe}from"./About-86696276.js";import{F as je,I as De}from"./InteractiveLayer-c2026567.js";function Ne(a){let t;return{c(){t=fe("About")},m(e,o){B(e,t,o)},d(e){e&&F(t)}}}function Je(a){let t,e,o,m,C;return{c(){t=E("input"),e=p(),o=E("datalist"),I(t,"class","govuk-input govuk-input--width-20"),I(t,"id","inputValue"),I(t,"data-testid","transport-authority"),I(t,"list","authorities-list"),I(o,"id","authorities-list")},m(d,s){B(d,t,s),le(t,a[0]),B(d,e,s),B(d,o,s),a[12](o),m||(C=ke(t,"input",a[11]),m=!0)},p(d,s){s&1&&t.value!==d[0]&&le(t,d[0])},d(d){d&&(F(t),F(e),F(o)),a[12](null),m=!1,C()}}}function Oe(a){let t;return{c(){t=fe("Start")},m(e,o){B(e,t,o)},d(e){e&&F(t)}}}function ie(a){let t,e;return t=new De({props:{layer:H,clickable:!0,tooltip:qe}}),t.$on("click",Ve),{c(){v(t.$$.fragment)},m(o,m){w(t,o,m),e=!0},p:Ae,i(o){e||(g(t.$$.fragment,o),e=!0)},o(o){h(t.$$.fragment,o),e=!1},d(o){y(t,o)}}}function Ge(a){let t,e,o,m,C,d,s,M,$,k,c,N,A,J,b,O,G,P,_,u,l,L,S,j,Z,D,K,R,Q,q,T,U,V;s=new $e({}),$=new he({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),$.$on("click",a[10]),c=new oe({props:{errorMessage:a[2]}}),A=new _e({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Je]},$$scope:{ctx:a}}}),b=new Be({props:{disabled:!a[6],$$slots:{default:[Oe]},$$scope:{ctx:a}}}),b.$on("click",a[9]);function pe(n){a[13](n)}let X={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[5]!==void 0&&(X.value=a[5]),_=new be({props:X}),z.push(()=>re(_,"value",pe)),_.$on("change",a[7]),j=new oe({props:{errorMessage:Pe}}),D=new je({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[8],id:"load-geojson"}});let i=a[4]&&ie();function me(n){a[14](n)}let Y={};return a[1]!==void 0&&(Y.open=a[1]),T=new Fe({props:Y}),z.push(()=>re(T,"open",me)),{c(){t=E("div"),e=E("div"),o=E("h1"),o.textContent="Welcome to ATIP v2",m=p(),C=E("p"),C.textContent=`App version: ${ve()}`,d=p(),v(s.$$.fragment),M=p(),v($.$$.fragment),k=p(),v(c.$$.fragment),N=p(),v(A.$$.fragment),J=p(),v(b.$$.fragment),O=p(),G=E("hr"),P=p(),v(_.$$.fragment),l=p(),L=E("hr"),S=p(),v(j.$$.fragment),Z=p(),v(D.$$.fragment),K=p(),R=E("div"),R.innerHTML='<div id="map" class="svelte-lyn11h"></div>',Q=p(),i&&i.c(),q=p(),v(T.$$.fragment),I(o,"class","govuk-heading-l"),I(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),I(R,"class","govuk-grid-column-one-half"),I(t,"class","govuk-grid-row")},m(n,f){B(n,t,f),r(t,e),r(e,o),r(e,m),r(e,C),r(e,d),w(s,e,null),r(e,M),w($,e,null),r(e,k),w(c,e,null),r(e,N),w(A,e,null),r(e,J),w(b,e,null),r(e,O),r(e,G),r(e,P),w(_,e,null),r(e,l),r(e,L),r(e,S),w(j,e,null),r(e,Z),w(D,e,null),r(t,K),r(t,R),r(t,Q),i&&i.m(t,null),B(n,q,f),w(T,n,f),V=!0},p(n,[f]){const x={};f&131072&&(x.$$scope={dirty:f,ctx:n}),$.$set(x);const ee={};f&4&&(ee.errorMessage=n[2]),c.$set(ee);const te={};f&131081&&(te.$$scope={dirty:f,ctx:n}),A.$set(te);const W={};f&64&&(W.disabled=!n[6]),f&131072&&(W.$$scope={dirty:f,ctx:n}),b.$set(W);const ne={};!u&&f&32&&(u=!0,ne.value=n[5],se(()=>u=!1)),_.$set(ne),n[4]?i?(i.p(n,f),f&16&&g(i,1)):(i=ie(),i.c(),g(i,1),i.m(t,null)):i&&(Se(),h(i,1,1,()=>{i=null}),we());const ae={};!U&&f&2&&(U=!0,ae.open=n[1],se(()=>U=!1)),T.$set(ae)},i(n){V||(g(s.$$.fragment,n),g($.$$.fragment,n),g(c.$$.fragment,n),g(A.$$.fragment,n),g(b.$$.fragment,n),g(_.$$.fragment,n),g(j.$$.fragment,n),g(D.$$.fragment,n),g(i),g(T.$$.fragment,n),V=!0)},o(n){h(s.$$.fragment,n),h($.$$.fragment,n),h(c.$$.fragment,n),h(A.$$.fragment,n),h(b.$$.fragment,n),h(_.$$.fragment,n),h(j.$$.fragment,n),h(D.$$.fragment,n),h(i),h(T.$$.fragment,n),V=!1},d(n){n&&(F(t),F(q)),y(s),y($),y(c),y(A),y(b),y(_),y(j),y(D),i&&i.d(),y(T,n)}}}let Pe="",ue="boundary",H="boundary-layer";function Re(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["planning","v2","criticals"])if(t&&e in t)return e}return"v1"}function Ve(a){window.location.href=`scheme.html?authority=${a.detail.properties.name}`}function qe(a){return`<p>${a.properties.name}</p>`}function Ue(a,t,e){let o,m=!1,d=new URLSearchParams(window.location.search).get("error")||"",s,M,$=new Set,k=null,c="TA";function N(){k==null||k.setFilter(H,["==",["get","level"],c])}ye(async()=>{Ee();const u=await Ie();for(let L of u.features){let S=document.createElement("option");S.value=L.properties.name,M.appendChild(S),$.add(L.properties.name)}let l=new Le.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"});e(4,k=l),Te.set(k),l.on("load",function(){l.fitBounds(Ce(u),{padding:20,animate:!1}),l.addSource(ue,{type:"geojson",data:u,generateId:!0}),l.addLayer({id:H,source:ue,filter:["==",["get","level"],c],type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Me(.8,.4)}})})});function A(u){try{let l=JSON.parse(u);if(!l.authority)throw new Error("File doesn't have an authority set; is it an ATIP file?");if(!$.has(l.authority))throw new Error(`Unknown authority ${l.authority}`);let L=l.authority,S=Re(l);S!="v1"&&(L+=`_${S}`),window.localStorage.setItem(L,JSON.stringify(l)),window.location.href=`scheme.html?authority=${l.authority}&schema=${S}`}catch(l){e(2,d=`Couldn't load scheme from a file: ${l}`)}}function J(){window.location.href=`scheme.html?authority=${s}`}const b=()=>e(1,m=!m);function O(){s=this.value,e(0,s)}function G(u){z[u?"unshift":"push"](()=>{M=u,e(3,M)})}function P(u){c=u,e(5,c)}function _(u){m=u,e(1,m)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,o=$.has(s))},[s,m,d,M,k,c,o,N,A,J,b,O,G,P,_]}class We extends de{constructor(t){super(),ce(this,t,Ue,Ge,ge,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new We({target:document.getElementById("app")});
