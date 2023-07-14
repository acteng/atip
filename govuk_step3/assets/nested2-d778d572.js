import{S as he,i as ge,s as be,g as F,m as O,t as y,n as S,p as L,C as oe,q as we,P as ye,a as X,d as ke,F as ve,ak as le,e as T,f as C,r as h,a7 as ae,h as U,j as b,k as c,w as D,ac as _e,ad as $e,o as w,al as Se,x as Ce,z as fe,u as ue,v as je,N as Ne,O as Be}from"./maplibre_helpers-ef63e28d.js";import{L as Fe,g as W,Z as Oe,j as Le,I as ze,B as Ie,k as Me,M as Te,m as Je,C as Ee}from"./ZoomOutMap-d2d2d189.js";function ie(r,e,n){const t=r.slice();return t[17]=e[n],t}function Ge(r){let e;return{c(){e=h("Home")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function qe(r){let e;return{c(){e=h("Clear")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Ae(r){let e,n,t,s,l,p;return t=new X({props:{$$slots:{default:[qe]},$$scope:{ctx:r}}}),t.$on("click",r[11]),{c(){e=T("input"),n=C(),F(t.$$.fragment),U(e,"type","text"),U(e,"class","govuk-input govuk-input--width-10"),U(e,"id","filterText")},m(f,m){b(f,e,m),ue(e,r[1]),b(f,n,m),O(t,f,m),s=!0,l||(p=je(e,"input",r[10]),l=!0)},p(f,m){m&2&&e.value!==f[1]&&ue(e,f[1]);const o={};m&1048576&&(o.$$scope={dirty:m,ctx:f}),t.$set(o)},i(f){s||(y(t.$$.fragment,f),s=!0)},o(f){S(t.$$.fragment,f),s=!1},d(f){f&&(w(e),w(n)),L(t,f),l=!1,p()}}}function ce(r){let e,n;return e=new Ee({props:{label:`${r[17].scheme_reference}: ${r[17].num_features} features`,$$slots:{default:[Ze]},$$scope:{ctx:r}}}),{c(){F(e.$$.fragment)},m(t,s){O(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.label=`${t[17].scheme_reference}: ${t[17].num_features} features`),s&1048577&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}function De(r){let e;return{c(){e=h("Show on map")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Pe(r){let e;return{c(){e=h("Edit scheme")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Ze(r){let e,n,t=r[17].authority_or_region+"",s,l,p,f,m=r[17].capital_scheme_id+"",o,g,J,P,j=r[17].funding_programme+"",G,k,M,N,A,z,a,i;function I(){return r[12](r[17])}N=new X({props:{$$slots:{default:[De]},$$scope:{ctx:r}}}),N.$on("click",I);function E(){return r[13](r[17])}return z=new X({props:{$$slots:{default:[Pe]},$$scope:{ctx:r}}}),z.$on("click",E),{c(){e=T("p"),n=h("Authority or region: "),s=h(t),l=C(),p=T("p"),f=h("Capital scheme ID: "),o=h(m),g=C(),J=T("p"),P=h("Funding programme: "),G=h(j),k=C(),M=T("div"),F(N.$$.fragment),A=C(),F(z.$$.fragment),a=C(),U(M,"class","govuk-button-group")},m(_,v){b(_,e,v),c(e,n),c(e,s),b(_,l,v),b(_,p,v),c(p,f),c(p,o),b(_,g,v),b(_,J,v),c(J,P),c(J,G),b(_,k,v),b(_,M,v),O(N,M,null),c(M,A),O(z,M,null),b(_,a,v),i=!0},p(_,v){r=_,(!i||v&1)&&t!==(t=r[17].authority_or_region+"")&&D(s,t),(!i||v&1)&&m!==(m=r[17].capital_scheme_id+"")&&D(o,m),(!i||v&1)&&j!==(j=r[17].funding_programme+"")&&D(G,j);const Z={};v&1048576&&(Z.$$scope={dirty:v,ctx:r}),N.$set(Z);const K={};v&1048576&&(K.$$scope={dirty:v,ctx:r}),z.$set(K)},i(_){i||(y(N.$$.fragment,_),y(z.$$.fragment,_),i=!0)},o(_){S(N.$$.fragment,_),S(z.$$.fragment,_),i=!1},d(_){_&&(w(e),w(l),w(p),w(g),w(J),w(k),w(M),w(a)),L(N),L(z)}}}function me(r){let e=r[2].has(r[17].scheme_reference),n,t,s=e&&ce(r);return{c(){s&&s.c(),n=Ne()},m(l,p){s&&s.m(l,p),b(l,n,p),t=!0},p(l,p){p&5&&(e=l[2].has(l[17].scheme_reference)),e?s?(s.p(l,p),p&5&&y(s,1)):(s=ce(l),s.c(),y(s,1),s.m(n.parentNode,n)):s&&(_e(),S(s,1,1,()=>{s=null}),$e())},i(l){t||(y(s),t=!0)},o(l){S(s),t=!1},d(l){l&&w(n),s&&s.d(l)}}}function He(r){let e,n,t,s,l,p,f,m,o,g,J,P,j,G,k,M,N=r[2].size+"",A,z,a=r[3].route+"",i,I,E=r[3].area+"",_,v,Z=r[3].crossing+"",K,x,Q=r[3].other+"",Y,ee,te,V,q;n=new X({props:{$$slots:{default:[Ge]},$$scope:{ctx:r}}}),n.$on("click",r[9]),f=new Oe({props:{boundaryGeojson:r[4]}}),o=new ke({props:{label:"Load from GeoJSON",id:"load-geojson",loadFile:r[6]}}),j=new ve({props:{label:"Filter by any field",id:"filterText",$$slots:{default:[Ae]},$$scope:{ctx:r}}});let H=le(r[0]),$=[];for(let u=0;u<H.length;u+=1)$[u]=me(ie(r,H,u));const de=u=>S($[u],1,1,()=>{$[u]=null});return{c(){e=T("div"),F(n.$$.fragment),t=C(),s=T("div"),l=T("h1"),l.textContent="Browse schemes",p=C(),F(f.$$.fragment),m=C(),F(o.$$.fragment),g=C(),J=T("br"),P=C(),F(j.$$.fragment),G=C(),k=T("p"),M=h("Showing "),A=h(N),z=h(" schemes ("),i=h(a),I=h(" routes, "),_=h(E),v=h(` areas,
      `),K=h(Z),x=h(" crossings, "),Y=h(Q),ee=h(" other)"),te=C(),V=T("ul");for(let u=0;u<$.length;u+=1)$[u].c();ae(s,"display","flex"),ae(s,"justify-content","space-between"),U(e,"slot","sidebar"),U(e,"class","govuk-prose")},m(u,d){b(u,e,d),O(n,e,null),c(e,t),c(e,s),c(s,l),c(s,p),O(f,s,null),c(e,m),O(o,e,null),c(e,g),c(e,J),c(e,P),O(j,e,null),c(e,G),c(e,k),c(k,M),c(k,A),c(k,z),c(k,i),c(k,I),c(k,_),c(k,v),c(k,K),c(k,x),c(k,Y),c(k,ee),c(e,te),c(e,V);for(let R=0;R<$.length;R+=1)$[R]&&$[R].m(V,null);q=!0},p(u,d){const R={};d&1048576&&(R.$$scope={dirty:d,ctx:u}),n.$set(R);const ne={};d&16&&(ne.boundaryGeojson=u[4]),f.$set(ne);const se={};if(d&1048578&&(se.$$scope={dirty:d,ctx:u}),j.$set(se),(!q||d&4)&&N!==(N=u[2].size+"")&&D(A,N),(!q||d&8)&&a!==(a=u[3].route+"")&&D(i,a),(!q||d&8)&&E!==(E=u[3].area+"")&&D(_,E),(!q||d&8)&&Z!==(Z=u[3].crossing+"")&&D(K,Z),(!q||d&8)&&Q!==(Q=u[3].other+"")&&D(Y,Q),d&389){H=le(u[0]);let B;for(B=0;B<H.length;B+=1){const re=ie(u,H,B);$[B]?($[B].p(re,d),y($[B],1)):($[B]=me(re),$[B].c(),y($[B],1),$[B].m(V,null))}for(_e(),B=H.length;B<$.length;B+=1)de(B);$e()}},i(u){if(!q){y(n.$$.fragment,u),y(f.$$.fragment,u),y(o.$$.fragment,u),y(j.$$.fragment,u);for(let d=0;d<H.length;d+=1)y($[d]);q=!0}},o(u){S(n.$$.fragment,u),S(f.$$.fragment,u),S(o.$$.fragment,u),S(j.$$.fragment,u),$=$.filter(Boolean);for(let d=0;d<$.length;d+=1)S($[d]);q=!1},d(u){u&&w(e),L(n),L(f),L(o),L(j),Se($,u)}}}function Re(r){let e,n,t,s,l,p,f,m;return e=new ze({props:{schema:pe}}),t=new Ie({props:{style:r[5]}}),l=new Me({props:{schema:pe}}),f=new Te({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Qe}}),{c(){F(e.$$.fragment),n=C(),F(t.$$.fragment),s=C(),F(l.$$.fragment),p=C(),F(f.$$.fragment)},m(o,g){O(e,o,g),b(o,n,g),O(t,o,g),b(o,s,g),O(l,o,g),b(o,p,g),O(f,o,g),m=!0},p:Be,i(o){m||(y(e.$$.fragment,o),y(t.$$.fragment,o),y(l.$$.fragment,o),y(f.$$.fragment,o),m=!0)},o(o){S(e.$$.fragment,o),S(t.$$.fragment,o),S(l.$$.fragment,o),S(f.$$.fragment,o),m=!1},d(o){o&&(w(n),w(s),w(p)),L(e,o),L(t,o),L(l,o),L(f,o)}}}function Ue(r){let e,n,t;return n=new Le({props:{style:r[5],$$slots:{default:[Re]},$$scope:{ctx:r}}}),{c(){e=T("div"),F(n.$$.fragment),U(e,"slot","main")},m(s,l){b(s,e,l),O(n,e,null),t=!0},p(s,l){const p={};l&1048576&&(p.$$scope={dirty:l,ctx:s}),n.$set(p)},i(s){t||(y(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){s&&w(e),L(n)}}}function Ke(r){let e,n;return e=new Fe({props:{$$slots:{main:[Ue],sidebar:[He]},$$scope:{ctx:r}}}),{c(){F(e.$$.fragment)},m(t,s){O(e,t,s),n=!0},p(t,[s]){const l={};s&1048607&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){L(e,t)}}}const pe="v1";function Qe(r){var e="<table>";for(let[n,t]of Object.entries(r))e+=`<tr><td>${n}</td><td>${t}</td></tr>`;return e+="</table>",e}function Ve(r,e,n){let t,s;oe(r,W,a=>n(4,t=a)),oe(r,Je,a=>n(14,s=a)),we(()=>{Ce()});let p=new URLSearchParams(window.location.search).get("style")||"streets",f=[],m="",o=new Set,g={area:0,route:0,crossing:0,other:0};ye(()=>{W.set(null)});function J(a){try{let i=JSON.parse(a);W.set(i),P(i),s==null||s.fitBounds(fe(i),{padding:20,animate:!1})}catch(i){window.alert(`Couldn't load schemes from a file: ${i}`)}}function P(a){let i={};for(let[I,E]of Object.entries(a.schemes))i[I]={scheme_reference:I,num_features:0,...E};for(let I of a.features)i[I.properties.scheme_reference].num_features++;n(0,f=Object.values(i))}function j(a){let i={type:"FeatureCollection",features:t.features.filter(I=>I.properties.scheme_reference==a.scheme_reference)};s==null||s.fitBounds(fe(i),{padding:20,animate:!1})}function G(a){let i={type:"FeatureCollection",features:t.features.filter(E=>E.properties.scheme_reference==a.scheme_reference)},I=a.authority_or_region;window.localStorage.setItem(I,JSON.stringify(i)),window.open(`scheme.html?authority=${a.authority_or_region}`,"_blank")}const k=()=>window.open("index.html");function M(){m=this.value,n(1,m)}const N=()=>n(1,m=""),A=a=>j(a),z=a=>G(a);return r.$$.update=()=>{if(r.$$.dirty&31){if(o.clear(),m){let a=m.toLowerCase();for(let i of t.features)JSON.stringify(i.properties).toLowerCase().includes(a)&&o.add(i.properties.scheme_reference)}else for(let a of f)o.add(a.scheme_reference);W.update(a=>{if(!a)return null;for(let i of a.features)o.has(i.properties.scheme_reference)?delete i.properties.hide_while_editing:i.properties.hide_while_editing=!0;return a}),n(3,g={area:0,route:0,crossing:0,other:0});for(let a of t==null?void 0:t.features)o.has(a.properties.scheme_reference)&&n(3,g[a.properties.intervention_type]++,g);n(2,o),n(1,m),n(4,t),n(0,f),n(3,g)}},[f,m,o,g,t,p,J,j,G,k,M,N,A,z]}class We extends he{constructor(e){super(),ge(this,e,Ve,Ke,be,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new We({target:document.getElementById("app")});