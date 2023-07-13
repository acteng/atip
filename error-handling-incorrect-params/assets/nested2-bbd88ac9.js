import{S as he,i as ge,s as be,H as F,I as L,q as y,r as S,L as O,T as oe,M as we,a2 as ye,C as X,G as ke,F as ve,x as le,e as z,a as C,t as h,al as ae,b as U,c as b,d as c,f as D,N as _e,J as $e,g as w,y as Se,P as fe,A as ue,l as Ce,a1 as je,n as Ne}from"./maplibre_helpers-350d1756.js";import{i as Be}from"./all-3f19c173.js";import{L as Fe,g as W,Z as Le,j as Oe,I as Ie,B as Me,k as Te,M as ze,m as Je,C as Ge}from"./ZoomOutMap-73f6f3d0.js";function ie(s,e,n){const t=s.slice();return t[17]=e[n],t}function Ae(s){let e;return{c(){e=h("Home")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Ee(s){let e;return{c(){e=h("Clear")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function qe(s){let e,n,t,r,l,p;return t=new X({props:{$$slots:{default:[Ee]},$$scope:{ctx:s}}}),t.$on("click",s[11]),{c(){e=z("input"),n=C(),F(t.$$.fragment),U(e,"type","text"),U(e,"class","govuk-input govuk-input--width-10"),U(e,"id","filterText")},m(f,m){b(f,e,m),ue(e,s[1]),b(f,n,m),L(t,f,m),r=!0,l||(p=Ce(e,"input",s[10]),l=!0)},p(f,m){m&2&&e.value!==f[1]&&ue(e,f[1]);const o={};m&1048576&&(o.$$scope={dirty:m,ctx:f}),t.$set(o)},i(f){r||(y(t.$$.fragment,f),r=!0)},o(f){S(t.$$.fragment,f),r=!1},d(f){f&&(w(e),w(n)),O(t,f),l=!1,p()}}}function ce(s){let e,n;return e=new Ge({props:{label:`${s[17].scheme_reference}: ${s[17].num_features} features`,$$slots:{default:[Pe]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,r){const l={};r&1&&(l.label=`${t[17].scheme_reference}: ${t[17].num_features} features`),r&1048577&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function De(s){let e;return{c(){e=h("Show on map")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function He(s){let e;return{c(){e=h("Edit scheme")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Pe(s){let e,n,t=s[17].authority_or_region+"",r,l,p,f,m=s[17].capital_scheme_id+"",o,g,J,H,j=s[17].funding_programme+"",A,k,T,N,q,I,a,i;function M(){return s[12](s[17])}N=new X({props:{$$slots:{default:[De]},$$scope:{ctx:s}}}),N.$on("click",M);function G(){return s[13](s[17])}return I=new X({props:{$$slots:{default:[He]},$$scope:{ctx:s}}}),I.$on("click",G),{c(){e=z("p"),n=h("Authority or region: "),r=h(t),l=C(),p=z("p"),f=h("Capital scheme ID: "),o=h(m),g=C(),J=z("p"),H=h("Funding programme: "),A=h(j),k=C(),T=z("div"),F(N.$$.fragment),q=C(),F(I.$$.fragment),a=C(),U(T,"class","govuk-button-group")},m(_,v){b(_,e,v),c(e,n),c(e,r),b(_,l,v),b(_,p,v),c(p,f),c(p,o),b(_,g,v),b(_,J,v),c(J,H),c(J,A),b(_,k,v),b(_,T,v),L(N,T,null),c(T,q),L(I,T,null),b(_,a,v),i=!0},p(_,v){s=_,(!i||v&1)&&t!==(t=s[17].authority_or_region+"")&&D(r,t),(!i||v&1)&&m!==(m=s[17].capital_scheme_id+"")&&D(o,m),(!i||v&1)&&j!==(j=s[17].funding_programme+"")&&D(A,j);const P={};v&1048576&&(P.$$scope={dirty:v,ctx:s}),N.$set(P);const K={};v&1048576&&(K.$$scope={dirty:v,ctx:s}),I.$set(K)},i(_){i||(y(N.$$.fragment,_),y(I.$$.fragment,_),i=!0)},o(_){S(N.$$.fragment,_),S(I.$$.fragment,_),i=!1},d(_){_&&(w(e),w(l),w(p),w(g),w(J),w(k),w(T),w(a)),O(N),O(I)}}}function me(s){let e=s[2].has(s[17].scheme_reference),n,t,r=e&&ce(s);return{c(){r&&r.c(),n=je()},m(l,p){r&&r.m(l,p),b(l,n,p),t=!0},p(l,p){p&5&&(e=l[2].has(l[17].scheme_reference)),e?r?(r.p(l,p),p&5&&y(r,1)):(r=ce(l),r.c(),y(r,1),r.m(n.parentNode,n)):r&&(_e(),S(r,1,1,()=>{r=null}),$e())},i(l){t||(y(r),t=!0)},o(l){S(r),t=!1},d(l){l&&w(n),r&&r.d(l)}}}function Ze(s){let e,n,t,r,l,p,f,m,o,g,J,H,j,A,k,T,N=s[2].size+"",q,I,a=s[3].route+"",i,M,G=s[3].area+"",_,v,P=s[3].crossing+"",K,x,Q=s[3].other+"",Y,ee,te,V,E;n=new X({props:{$$slots:{default:[Ae]},$$scope:{ctx:s}}}),n.$on("click",s[9]),f=new Le({props:{boundaryGeojson:s[4]}}),o=new ke({props:{label:"Load from GeoJSON",id:"load-geojson",loadFile:s[6]}}),j=new ve({props:{label:"Filter by any field",id:"filterText",$$slots:{default:[qe]},$$scope:{ctx:s}}});let Z=le(s[0]),$=[];for(let u=0;u<Z.length;u+=1)$[u]=me(ie(s,Z,u));const de=u=>S($[u],1,1,()=>{$[u]=null});return{c(){e=z("div"),F(n.$$.fragment),t=C(),r=z("div"),l=z("h1"),l.textContent="Browse schemes",p=C(),F(f.$$.fragment),m=C(),F(o.$$.fragment),g=C(),J=z("br"),H=C(),F(j.$$.fragment),A=C(),k=z("p"),T=h("Showing "),q=h(N),I=h(" schemes ("),i=h(a),M=h(" routes, "),_=h(G),v=h(` areas,
      `),K=h(P),x=h(" crossings, "),Y=h(Q),ee=h(" other)"),te=C(),V=z("ul");for(let u=0;u<$.length;u+=1)$[u].c();ae(r,"display","flex"),ae(r,"justify-content","space-between"),U(e,"slot","sidebar"),U(e,"class","govuk-prose")},m(u,d){b(u,e,d),L(n,e,null),c(e,t),c(e,r),c(r,l),c(r,p),L(f,r,null),c(e,m),L(o,e,null),c(e,g),c(e,J),c(e,H),L(j,e,null),c(e,A),c(e,k),c(k,T),c(k,q),c(k,I),c(k,i),c(k,M),c(k,_),c(k,v),c(k,K),c(k,x),c(k,Y),c(k,ee),c(e,te),c(e,V);for(let R=0;R<$.length;R+=1)$[R]&&$[R].m(V,null);E=!0},p(u,d){const R={};d&1048576&&(R.$$scope={dirty:d,ctx:u}),n.$set(R);const ne={};d&16&&(ne.boundaryGeojson=u[4]),f.$set(ne);const re={};if(d&1048578&&(re.$$scope={dirty:d,ctx:u}),j.$set(re),(!E||d&4)&&N!==(N=u[2].size+"")&&D(q,N),(!E||d&8)&&a!==(a=u[3].route+"")&&D(i,a),(!E||d&8)&&G!==(G=u[3].area+"")&&D(_,G),(!E||d&8)&&P!==(P=u[3].crossing+"")&&D(K,P),(!E||d&8)&&Q!==(Q=u[3].other+"")&&D(Y,Q),d&389){Z=le(u[0]);let B;for(B=0;B<Z.length;B+=1){const se=ie(u,Z,B);$[B]?($[B].p(se,d),y($[B],1)):($[B]=me(se),$[B].c(),y($[B],1),$[B].m(V,null))}for(_e(),B=Z.length;B<$.length;B+=1)de(B);$e()}},i(u){if(!E){y(n.$$.fragment,u),y(f.$$.fragment,u),y(o.$$.fragment,u),y(j.$$.fragment,u);for(let d=0;d<Z.length;d+=1)y($[d]);E=!0}},o(u){S(n.$$.fragment,u),S(f.$$.fragment,u),S(o.$$.fragment,u),S(j.$$.fragment,u),$=$.filter(Boolean);for(let d=0;d<$.length;d+=1)S($[d]);E=!1},d(u){u&&w(e),O(n),O(f),O(o),O(j),Se($,u)}}}function Re(s){let e,n,t,r,l,p,f,m;return e=new Ie({props:{schema:pe}}),t=new Me({props:{style:s[5]}}),l=new Te({props:{schema:pe}}),f=new ze({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Qe}}),{c(){F(e.$$.fragment),n=C(),F(t.$$.fragment),r=C(),F(l.$$.fragment),p=C(),F(f.$$.fragment)},m(o,g){L(e,o,g),b(o,n,g),L(t,o,g),b(o,r,g),L(l,o,g),b(o,p,g),L(f,o,g),m=!0},p:Ne,i(o){m||(y(e.$$.fragment,o),y(t.$$.fragment,o),y(l.$$.fragment,o),y(f.$$.fragment,o),m=!0)},o(o){S(e.$$.fragment,o),S(t.$$.fragment,o),S(l.$$.fragment,o),S(f.$$.fragment,o),m=!1},d(o){o&&(w(n),w(r),w(p)),O(e,o),O(t,o),O(l,o),O(f,o)}}}function Ue(s){let e,n,t;return n=new Oe({props:{style:s[5],$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){e=z("div"),F(n.$$.fragment),U(e,"slot","main")},m(r,l){b(r,e,l),L(n,e,null),t=!0},p(r,l){const p={};l&1048576&&(p.$$scope={dirty:l,ctx:r}),n.$set(p)},i(r){t||(y(n.$$.fragment,r),t=!0)},o(r){S(n.$$.fragment,r),t=!1},d(r){r&&w(e),O(n)}}}function Ke(s){let e,n;return e=new Fe({props:{$$slots:{main:[Ue],sidebar:[Ze]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,[r]){const l={};r&1048607&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}const pe="v1";function Qe(s){var e="<table>";for(let[n,t]of Object.entries(s))e+=`<tr><td>${n}</td><td>${t}</td></tr>`;return e+="</table>",e}function Ve(s,e,n){let t,r;oe(s,W,a=>n(4,t=a)),oe(s,Je,a=>n(14,r=a)),we(()=>{Be()});let p=new URLSearchParams(window.location.search).get("style")||"streets",f=[],m="",o=new Set,g={area:0,route:0,crossing:0,other:0};ye(()=>{W.set(null)});function J(a){try{let i=JSON.parse(a);W.set(i),H(i),r==null||r.fitBounds(fe(i),{padding:20,animate:!1})}catch(i){window.alert(`Couldn't load schemes from a file: ${i}`)}}function H(a){let i={};for(let[M,G]of Object.entries(a.schemes))i[M]={scheme_reference:M,num_features:0,...G};for(let M of a.features)i[M.properties.scheme_reference].num_features++;n(0,f=Object.values(i))}function j(a){let i={type:"FeatureCollection",features:t.features.filter(M=>M.properties.scheme_reference==a.scheme_reference)};r==null||r.fitBounds(fe(i),{padding:20,animate:!1})}function A(a){let i={type:"FeatureCollection",features:t.features.filter(G=>G.properties.scheme_reference==a.scheme_reference)},M=a.authority_or_region;window.localStorage.setItem(M,JSON.stringify(i)),window.open(`scheme.html?authority=${a.authority_or_region}`,"_blank")}const k=()=>window.open("index.html");function T(){m=this.value,n(1,m)}const N=()=>n(1,m=""),q=a=>j(a),I=a=>A(a);return s.$$.update=()=>{if(s.$$.dirty&31){if(o.clear(),m){let a=m.toLowerCase();for(let i of t.features)JSON.stringify(i.properties).toLowerCase().includes(a)&&o.add(i.properties.scheme_reference)}else for(let a of f)o.add(a.scheme_reference);W.update(a=>{if(!a)return null;for(let i of a.features)o.has(i.properties.scheme_reference)?delete i.properties.hide_while_editing:i.properties.hide_while_editing=!0;return a}),n(3,g={area:0,route:0,crossing:0,other:0});for(let a of t==null?void 0:t.features)o.has(a.properties.scheme_reference)&&n(3,g[a.properties.intervention_type]++,g);n(2,o),n(1,m),n(4,t),n(0,f),n(3,g)}},[f,m,o,g,t,p,J,j,A,k,T,N,q,I]}class We extends he{constructor(e){super(),ge(this,e,Ve,Ke,be,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new We({target:document.getElementById("app")});
