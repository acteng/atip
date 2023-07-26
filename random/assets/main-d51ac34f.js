import{S as fe,i as pe,s as ce,a as de,F as me,b as z,c as ee,d as he,e as M,f as b,g as T,h as S,j as I,k as p,m as F,t as h,l as v,n as te,o as ne,p as j,q as B,r as ge,u as re,E as $e,v as ae,w as _e,M as be,x as ve,y as oe,z as we,A as ye,B as ke,C as Ae,D as Se}from"./data_getter-49021794.js";import{D as Ee,R as Me,A as Te}from"./About-bd4d7b95.js";function Fe(n){let t;return{c(){t=re("About")},m(e,o){I(e,t,o)},d(e){e&&j(t)}}}function se(n){let t,e;return t=new $e({props:{errorMessage:n[2]}}),{c(){T(t.$$.fragment)},m(o,r){F(t,o,r),e=!0},p(o,r){const c={};r&4&&(c.errorMessage=o[2]),t.$set(c)},i(o){e||(h(t.$$.fragment,o),e=!0)},o(o){v(t.$$.fragment,o),e=!1},d(o){B(t,o)}}}function Be(n){let t,e,o,r,c;return{c(){t=M("input"),e=b(),o=M("datalist"),S(t,"class","govuk-input govuk-input--width-20"),S(t,"id","inputValue"),S(t,"data-testid","transport-authority"),S(t,"list","authorities-list"),S(o,"id","authorities-list")},m(g,d){I(g,t,d),ae(t,n[0]),I(g,e,d),I(g,o,d),n[12](o),r||(c=_e(t,"input",n[11]),r=!0)},p(g,d){d&1&&t.value!==g[0]&&ae(t,g[0])},d(g){g&&(j(t),j(e),j(o)),n[12](null),r=!1,c()}}}function Ie(n){let t;return{c(){t=re("Start")},m(e,o){I(e,t,o)},d(e){e&&j(t)}}}function le(n){let t,e;return t=new be({props:{layers:[D],contents:Le}}),{c(){T(t.$$.fragment)},m(o,r){F(t,o,r),e=!0},p:ve,i(o){e||(h(t.$$.fragment,o),e=!0)},o(o){v(t.$$.fragment,o),e=!1},d(o){B(t,o)}}}function je(n){let t,e,o,r,c,g,d,w,C,m,E,N,J,y,L,O,P,R,q,l,s,$,A,k,_,U,G;c=new de({props:{$$slots:{default:[Fe]},$$scope:{ctx:n}}}),c.$on("click",n[10]);let i=n[2]&&se(n);w=new me({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Be]},$$scope:{ctx:n}}}),m=new Ee({props:{disabled:!n[6],$$slots:{default:[Ie]},$$scope:{ctx:n}}}),m.$on("click",n[9]);function ie(a){n[13](a)}let H={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};n[5]!==void 0&&(H.value=n[5]),y=new Me({props:H}),z.push(()=>ee(y,"value",ie)),y.$on("change",n[7]);let Z=Ce;l=new he({props:{label:"Or upload an ATIP GeoJSON file",loadFile:n[8],id:"load-geojson"}});let u=n[4]&&le();function ue(a){n[14](a)}let K={};return n[1]!==void 0&&(K.open=n[1]),_=new Te({props:K}),z.push(()=>ee(_,"open",ue)),{c(){t=M("div"),e=M("div"),o=M("h1"),o.textContent="Welcome to ATIP v2",r=b(),T(c.$$.fragment),g=b(),i&&i.c(),d=b(),T(w.$$.fragment),C=b(),T(m.$$.fragment),E=b(),N=M("hr"),J=b(),T(y.$$.fragment),O=b(),P=M("hr"),R=b(),q=b(),T(l.$$.fragment),s=b(),$=M("div"),$.innerHTML='<div id="map" class="svelte-lyn11h"></div>',A=b(),u&&u.c(),k=b(),T(_.$$.fragment),S(o,"class","govuk-heading-l"),S(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),S($,"class","govuk-grid-column-one-half"),S(t,"class","govuk-grid-row")},m(a,f){I(a,t,f),p(t,e),p(e,o),p(e,r),F(c,e,null),p(e,g),i&&i.m(e,null),p(e,d),F(w,e,null),p(e,C),F(m,e,null),p(e,E),p(e,N),p(e,J),F(y,e,null),p(e,O),p(e,P),p(e,R),p(e,q),F(l,e,null),p(t,s),p(t,$),p(t,A),u&&u.m(t,null),I(a,k,f),F(_,a,f),G=!0},p(a,[f]){const Q={};f&131072&&(Q.$$scope={dirty:f,ctx:a}),c.$set(Q),a[2]?i?(i.p(a,f),f&4&&h(i,1)):(i=se(a),i.c(),h(i,1),i.m(e,d)):i&&(oe(),v(i,1,1,()=>{i=null}),te());const X={};f&131081&&(X.$$scope={dirty:f,ctx:a}),w.$set(X);const W={};f&64&&(W.disabled=!a[6]),f&131072&&(W.$$scope={dirty:f,ctx:a}),m.$set(W);const Y={};!L&&f&32&&(L=!0,Y.value=a[5],ne(()=>L=!1)),y.$set(Y),a[4]?u?(u.p(a,f),f&16&&h(u,1)):(u=le(),u.c(),h(u,1),u.m(t,null)):u&&(oe(),v(u,1,1,()=>{u=null}),te());const x={};!U&&f&2&&(U=!0,x.open=a[1],ne(()=>U=!1)),_.$set(x)},i(a){G||(h(c.$$.fragment,a),h(i),h(w.$$.fragment,a),h(m.$$.fragment,a),h(y.$$.fragment,a),h(Z),h(l.$$.fragment,a),h(u),h(_.$$.fragment,a),G=!0)},o(a){v(c.$$.fragment,a),v(i),v(w.$$.fragment,a),v(m.$$.fragment,a),v(y.$$.fragment,a),v(Z),v(l.$$.fragment,a),v(u),v(_.$$.fragment,a),G=!1},d(a){a&&(j(t),j(k)),B(c),i&&i.d(),B(w),B(m),B(y),B(l),u&&u.d(),B(_,a)}}}let Ce="",V="boundary",D="boundary-layer";function De(n){if(n.features.length>0){let t=n.features[0].properties;for(let e of["planning","v2","criticals"])if(t&&e in t)return e}return"v1"}function Le(n){return`<p>${n.name}</p>`}function Ne(n,t,e){let o,r=!1,g=new URLSearchParams(window.location.search).get("error")||"",d,w,C=new Set,m=null,E="TA";function N(){m==null||m.setFilter(D,["==",["get","level"],E])}ge(async()=>{we();const l=await ye();for(let k of l.features){let _=document.createElement("option");_.value=k.properties.name,w.appendChild(_),C.add(k.properties.name)}let s=new ke.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"});e(4,m=s),Ae.set(m);let $=null;function A(){$!==null&&s.setFeatureState({source:V,id:$},{hover:!1})}s.on("load",function(){s.fitBounds(Se(l),{padding:20,animate:!1}),s.addSource(V,{type:"geojson",data:l,generateId:!0}),s.addLayer({id:D,source:V,filter:["==",["get","level"],E],type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.4]}}),s.on("mousemove",D,k=>{k.features.length>0&&(A(),$=k.features[0].id,s.setFeatureState({source:V,id:$},{hover:!0}))}),s.on("mouseleave",D,()=>{A(),$=null}),s.on("click",D,function(k){let _=k.features[0].properties.name;window.location.href=`scheme.html?authority=${_}`})})});function J(l){try{let s=JSON.parse(l);if(!s.authority)throw new Error("File doesn't have an authority set; is it an ATIP file?");if(!C.has(s.authority))throw new Error(`Unknown authority ${s.authority}`);let $=s.authority,A=De(s);A!="v1"&&($+=`_${A}`),window.localStorage.setItem($,JSON.stringify(s)),window.location.href=`scheme.html?authority=${s.authority}&schema=${A}`}catch(s){e(2,g=`Couldn't load scheme from a file: ${s}`)}}function y(){window.location.href=`scheme.html?authority=${d}`}const L=()=>e(1,r=!r);function O(){d=this.value,e(0,d)}function P(l){z[l?"unshift":"push"](()=>{w=l,e(3,w)})}function R(l){E=l,e(5,E)}function q(l){r=l,e(1,r)}return n.$$.update=()=>{n.$$.dirty&1&&e(6,o=C.has(d))},[d,r,g,w,m,E,o,N,J,y,L,O,P,R,q]}class Je extends fe{constructor(t){super(),pe(this,t,Ne,je,ce,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Je({target:document.getElementById("app")});
