import{S as fe,i as pe,s as ce,a as de,F as me,b as U,c as x,d as he,e as E,f as $,g as T,h as k,j as C,k as p,m as I,t as h,l as _,n as ee,o as te,p as L,q as B,r as ge,u as le,E as $e,v as ne,w as _e,I as be,x as ve,y as ae,z as we,A as ye,B as ke,C as Ae,D as Se,G as Ee}from"./data_getter-1915396d.js";import{D as Te,R as Ie,A as Be}from"./About-cb0c3bb6.js";function Ce(n){let t;return{c(){t=le("About")},m(e,o){C(e,t,o)},d(e){e&&L(t)}}}function oe(n){let t,e;return t=new $e({props:{errorMessage:n[2]}}),{c(){T(t.$$.fragment)},m(o,r){I(t,o,r),e=!0},p(o,r){const c={};r&4&&(c.errorMessage=o[2]),t.$set(c)},i(o){e||(h(t.$$.fragment,o),e=!0)},o(o){_(t.$$.fragment,o),e=!1},d(o){B(t,o)}}}function Le(n){let t,e,o,r,c;return{c(){t=E("input"),e=$(),o=E("datalist"),k(t,"class","govuk-input govuk-input--width-20"),k(t,"id","inputValue"),k(t,"data-testid","transport-authority"),k(t,"list","authorities-list"),k(o,"id","authorities-list")},m(g,d){C(g,t,d),ne(t,n[0]),C(g,e,d),C(g,o,d),n[12](o),r||(c=_e(t,"input",n[11]),r=!0)},p(g,d){d&1&&t.value!==g[0]&&ne(t,g[0])},d(g){g&&(L(t),L(e),L(o)),n[12](null),r=!1,c()}}}function Me(n){let t;return{c(){t=le("Start")},m(e,o){C(e,t,o)},d(e){e&&L(t)}}}function se(n){let t,e;return t=new be({props:{layer:W,tooltip:Je}}),t.$on("click",Ne),{c(){T(t.$$.fragment)},m(o,r){I(t,o,r),e=!0},p:ve,i(o){e||(h(t.$$.fragment,o),e=!0)},o(o){_(t.$$.fragment,o),e=!1},d(o){B(t,o)}}}function je(n){let t,e,o,r,c,g,d,b,M,m,A,D,F,v,j,N,J,O,G,s,l,w,y,R,S,q,P;c=new de({props:{$$slots:{default:[Ce]},$$scope:{ctx:n}}}),c.$on("click",n[10]);let i=n[2]&&oe(n);b=new me({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Le]},$$scope:{ctx:n}}}),m=new Te({props:{disabled:!n[6],$$slots:{default:[Me]},$$scope:{ctx:n}}}),m.$on("click",n[9]);function ie(a){n[13](a)}let z={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};n[5]!==void 0&&(z.value=n[5]),v=new Ie({props:z}),U.push(()=>x(v,"value",ie)),v.$on("change",n[7]);let H=De;s=new he({props:{label:"Or upload an ATIP GeoJSON file",loadFile:n[8],id:"load-geojson"}});let u=n[4]&&se();function ue(a){n[14](a)}let Z={};return n[1]!==void 0&&(Z.open=n[1]),S=new Be({props:Z}),U.push(()=>x(S,"open",ue)),{c(){t=E("div"),e=E("div"),o=E("h1"),o.textContent="Welcome to ATIP v2",r=$(),T(c.$$.fragment),g=$(),i&&i.c(),d=$(),T(b.$$.fragment),M=$(),T(m.$$.fragment),A=$(),D=E("hr"),F=$(),T(v.$$.fragment),N=$(),J=E("hr"),O=$(),G=$(),T(s.$$.fragment),l=$(),w=E("div"),w.innerHTML='<div id="map" class="svelte-lyn11h"></div>',y=$(),u&&u.c(),R=$(),T(S.$$.fragment),k(o,"class","govuk-heading-l"),k(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),k(w,"class","govuk-grid-column-one-half"),k(t,"class","govuk-grid-row")},m(a,f){C(a,t,f),p(t,e),p(e,o),p(e,r),I(c,e,null),p(e,g),i&&i.m(e,null),p(e,d),I(b,e,null),p(e,M),I(m,e,null),p(e,A),p(e,D),p(e,F),I(v,e,null),p(e,N),p(e,J),p(e,O),p(e,G),I(s,e,null),p(t,l),p(t,w),p(t,y),u&&u.m(t,null),C(a,R,f),I(S,a,f),P=!0},p(a,[f]){const K={};f&131072&&(K.$$scope={dirty:f,ctx:a}),c.$set(K),a[2]?i?(i.p(a,f),f&4&&h(i,1)):(i=oe(a),i.c(),h(i,1),i.m(e,d)):i&&(ae(),_(i,1,1,()=>{i=null}),ee());const Q={};f&131081&&(Q.$$scope={dirty:f,ctx:a}),b.$set(Q);const V={};f&64&&(V.disabled=!a[6]),f&131072&&(V.$$scope={dirty:f,ctx:a}),m.$set(V);const X={};!j&&f&32&&(j=!0,X.value=a[5],te(()=>j=!1)),v.$set(X),a[4]?u?(u.p(a,f),f&16&&h(u,1)):(u=se(),u.c(),h(u,1),u.m(t,null)):u&&(ae(),_(u,1,1,()=>{u=null}),ee());const Y={};!q&&f&2&&(q=!0,Y.open=a[1],te(()=>q=!1)),S.$set(Y)},i(a){P||(h(c.$$.fragment,a),h(i),h(b.$$.fragment,a),h(m.$$.fragment,a),h(v.$$.fragment,a),h(H),h(s.$$.fragment,a),h(u),h(S.$$.fragment,a),P=!0)},o(a){_(c.$$.fragment,a),_(i),_(b.$$.fragment,a),_(m.$$.fragment,a),_(v.$$.fragment,a),_(H),_(s.$$.fragment,a),_(u),_(S.$$.fragment,a),P=!1},d(a){a&&(L(t),L(R)),B(c),i&&i.d(),B(b),B(m),B(v),B(s),u&&u.d(),B(S,a)}}}let De="",re="boundary",W="boundary-layer";function Fe(n){if(n.features.length>0){let t=n.features[0].properties;for(let e of["planning","v2","criticals"])if(t&&e in t)return e}return"v1"}function Ne(n){window.location.href=`scheme.html?authority=${n.detail.properties.name}`}function Je(n){return`<p>${n.properties.name}</p>`}function Oe(n,t,e){let o,r=!1,g=new URLSearchParams(window.location.search).get("error")||"",d,b,M=new Set,m=null,A="TA";function D(){m==null||m.setFilter(W,["==",["get","level"],A])}ge(async()=>{we();const s=await ye();for(let w of s.features){let y=document.createElement("option");y.value=w.properties.name,b.appendChild(y),M.add(w.properties.name)}let l=new ke.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"});e(4,m=l),Ae.set(m),l.on("load",function(){l.fitBounds(Se(s),{padding:20,animate:!1}),l.addSource(re,{type:"geojson",data:s,generateId:!0}),l.addLayer({id:W,source:re,filter:["==",["get","level"],A],type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Ee(.8,.4)}})})});function F(s){try{let l=JSON.parse(s);if(!l.authority)throw new Error("File doesn't have an authority set; is it an ATIP file?");if(!M.has(l.authority))throw new Error(`Unknown authority ${l.authority}`);let w=l.authority,y=Fe(l);y!="v1"&&(w+=`_${y}`),window.localStorage.setItem(w,JSON.stringify(l)),window.location.href=`scheme.html?authority=${l.authority}&schema=${y}`}catch(l){e(2,g=`Couldn't load scheme from a file: ${l}`)}}function v(){window.location.href=`scheme.html?authority=${d}`}const j=()=>e(1,r=!r);function N(){d=this.value,e(0,d)}function J(s){U[s?"unshift":"push"](()=>{b=s,e(3,b)})}function O(s){A=s,e(5,A)}function G(s){r=s,e(1,r)}return n.$$.update=()=>{n.$$.dirty&1&&e(6,o=M.has(d))},[d,r,g,b,m,A,o,D,F,v,j,N,J,O,G]}class Ge extends fe{constructor(t){super(),pe(this,t,Oe,je,ce,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Ge({target:document.getElementById("app")});
