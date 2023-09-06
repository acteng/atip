import{S as ue,i as fe,s as pe,a as me,E as ee,F as de,R as ce,b as U,c as te,e as I,d as c,f as k,g as E,h as B,j as f,m as A,k as ne,t as h,l as v,n as ge,o as C,p as S,q as $e,r as re,u as ae,v as he,w as _e,x as be,y as ve,z as we,A as ye,B as ke,C as Ae}from"./MapLibreMap.svelte_svelte_type_style_lang-88b30ac6.js";import{D as Se}from"./DefaultButton-39a630e3.js";import{F as Ee,I as Te}from"./InteractiveLayer-78f1bbf9.js";import{A as Ie,g as Me}from"./About-3b268862.js";function Be(a){let t;return{c(){t=re("About")},m(e,o){B(e,t,o)},d(e){e&&C(t)}}}function Ce(a){let t,e,o,p,g;return{c(){t=I("input"),e=c(),o=I("datalist"),E(t,"class","govuk-input govuk-input--width-20"),E(t,"id","inputValue"),E(t,"data-testid","transport-authority"),E(t,"list","authorities-list"),E(o,"id","authorities-list")},m(m,s){B(m,t,s),ae(t,a[0]),B(m,e,s),B(m,o,s),a[12](o),p||(g=he(t,"input",a[11]),p=!0)},p(m,s){s&1&&t.value!==m[0]&&ae(t,m[0])},d(m){m&&(C(t),C(e),C(o)),a[12](null),p=!1,g()}}}function Fe(a){let t;return{c(){t=re("Start")},m(e,o){B(e,t,o)},d(e){e&&C(t)}}}function oe(a){let t,e;return t=new Te({props:{layer:W,clickable:!0,tooltip:Je}}),t.$on("click",Ne),{c(){k(t.$$.fragment)},m(o,p){A(t,o,p),e=!0},p:_e,i(o){e||(h(t.$$.fragment,o),e=!0)},o(o){v(t.$$.fragment,o),e=!1},d(o){S(t,o)}}}function Le(a){let t,e,o,p,g,m,s,M,_,w,d,L,j,D,b,F,N,J,O,r,l,$,y,P,z,q,T,G,R;g=new me({props:{$$slots:{default:[Be]},$$scope:{ctx:a}}}),g.$on("click",a[10]),s=new ee({props:{errorMessage:a[2]}}),_=new de({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Ce]},$$scope:{ctx:a}}}),d=new Se({props:{disabled:!a[6],$$slots:{default:[Fe]},$$scope:{ctx:a}}}),d.$on("click",a[9]);function le(n){a[13](n)}let H={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[5]!==void 0&&(H.value=a[5]),b=new ce({props:H}),U.push(()=>te(b,"value",le)),b.$on("change",a[7]),r=new ee({props:{errorMessage:je}}),$=new Ee({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[8],id:"load-geojson"}});let i=a[4]&&oe();function ie(n){a[14](n)}let Z={};return a[1]!==void 0&&(Z.open=a[1]),T=new Ie({props:Z}),U.push(()=>te(T,"open",ie)),{c(){t=I("div"),e=I("div"),o=I("h1"),o.textContent="Welcome to ATIP v2",p=c(),k(g.$$.fragment),m=c(),k(s.$$.fragment),M=c(),k(_.$$.fragment),w=c(),k(d.$$.fragment),L=c(),j=I("hr"),D=c(),k(b.$$.fragment),N=c(),J=I("hr"),O=c(),k(r.$$.fragment),l=c(),k($.$$.fragment),y=c(),P=I("div"),P.innerHTML='<div id="map" class="svelte-lyn11h"></div>',z=c(),i&&i.c(),q=c(),k(T.$$.fragment),E(o,"class","govuk-heading-l"),E(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),E(P,"class","govuk-grid-column-one-half"),E(t,"class","govuk-grid-row")},m(n,u){B(n,t,u),f(t,e),f(e,o),f(e,p),A(g,e,null),f(e,m),A(s,e,null),f(e,M),A(_,e,null),f(e,w),A(d,e,null),f(e,L),f(e,j),f(e,D),A(b,e,null),f(e,N),f(e,J),f(e,O),A(r,e,null),f(e,l),A($,e,null),f(t,y),f(t,P),f(t,z),i&&i.m(t,null),B(n,q,u),A(T,n,u),R=!0},p(n,[u]){const K={};u&131072&&(K.$$scope={dirty:u,ctx:n}),g.$set(K);const Q={};u&4&&(Q.errorMessage=n[2]),s.$set(Q);const X={};u&131081&&(X.$$scope={dirty:u,ctx:n}),_.$set(X);const V={};u&64&&(V.disabled=!n[6]),u&131072&&(V.$$scope={dirty:u,ctx:n}),d.$set(V);const Y={};!F&&u&32&&(F=!0,Y.value=n[5],ne(()=>F=!1)),b.$set(Y),n[4]?i?(i.p(n,u),u&16&&h(i,1)):(i=oe(),i.c(),h(i,1),i.m(t,null)):i&&(be(),v(i,1,1,()=>{i=null}),ge());const x={};!G&&u&2&&(G=!0,x.open=n[1],ne(()=>G=!1)),T.$set(x)},i(n){R||(h(g.$$.fragment,n),h(s.$$.fragment,n),h(_.$$.fragment,n),h(d.$$.fragment,n),h(b.$$.fragment,n),h(r.$$.fragment,n),h($.$$.fragment,n),h(i),h(T.$$.fragment,n),R=!0)},o(n){v(g.$$.fragment,n),v(s.$$.fragment,n),v(_.$$.fragment,n),v(d.$$.fragment,n),v(b.$$.fragment,n),v(r.$$.fragment,n),v($.$$.fragment,n),v(i),v(T.$$.fragment,n),R=!1},d(n){n&&(C(t),C(q)),S(g),S(s),S(_),S(d),S(b),S(r),S($),i&&i.d(),S(T,n)}}}let je="",se="boundary",W="boundary-layer";function De(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["planning","v2","criticals"])if(t&&e in t)return e}return"v1"}function Ne(a){window.location.href=`scheme.html?authority=${a.detail.properties.name}`}function Je(a){return`<p>${a.properties.name}</p>`}function Oe(a,t,e){let o,p=!1,m=new URLSearchParams(window.location.search).get("error")||"",s,M,_=new Set,w=null,d="TA";function L(){w==null||w.setFilter(W,["==",["get","level"],d])}$e(async()=>{ve();const r=await Me();for(let $ of r.features){let y=document.createElement("option");y.value=$.properties.name,M.appendChild(y),_.add($.properties.name)}let l=new we.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"});e(4,w=l),ye.set(w),l.on("load",function(){l.fitBounds(ke(r),{padding:20,animate:!1}),l.addSource(se,{type:"geojson",data:r,generateId:!0}),l.addLayer({id:W,source:se,filter:["==",["get","level"],d],type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Ae(.8,.4)}})})});function j(r){try{let l=JSON.parse(r);if(!l.authority)throw new Error("File doesn't have an authority set; is it an ATIP file?");if(!_.has(l.authority))throw new Error(`Unknown authority ${l.authority}`);let $=l.authority,y=De(l);y!="v1"&&($+=`_${y}`),window.localStorage.setItem($,JSON.stringify(l)),window.location.href=`scheme.html?authority=${l.authority}&schema=${y}`}catch(l){e(2,m=`Couldn't load scheme from a file: ${l}`)}}function D(){window.location.href=`scheme.html?authority=${s}`}const b=()=>e(1,p=!p);function F(){s=this.value,e(0,s)}function N(r){U[r?"unshift":"push"](()=>{M=r,e(3,M)})}function J(r){d=r,e(5,d)}function O(r){p=r,e(1,p)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,o=_.has(s))},[s,p,m,M,w,d,o,L,j,D,b,F,N,J,O]}class Pe extends ue{constructor(t){super(),fe(this,t,Oe,Le,pe,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Pe({target:document.getElementById("app")});
