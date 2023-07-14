import{S as we,i as ve,s as ke,F as ye,H as F,I as O,t as w,j,K as N,o as ee,e as E,$ as Se,r as q,at as Be,d as h,v as $,au as re,l as Ce,k as b,y as je,as as Le,A as Y,p as C,w as Z,Q as oe,L as Ie,a0 as ze,C as te,G as Je,q as L,aj as ae,ak as Fe,al as Oe,N as fe,D as ie,E as ue,J as ce,x as Me}from"./maplibre_helpers-5d84afaa.js";import{i as Te}from"./all-b6f1cdfd.js";import{L as Ee,Z as Ge,C as Ne,j as Pe,g as x,I as De,B as qe,k as He,M as Ze,m as Ke}from"./ZoomOutMap-96dffba9.js";function me(s,e,t){const n=s.slice();return n[6]=e[t][0],n[7]=e[t][1],n}function _e(s){let e;return{c(){e=E("option"),e.__value="",Y(e,e.__value)},m(t,n){h(t,e,n)},d(t){t&&b(e)}}}function pe(s){let e,t=s[7]+"",n,l;return{c(){e=E("option"),n=C(t),e.__value=l=s[6],Y(e,e.__value)},m(r,u){h(r,e,u),$(e,n)},p(r,u){u&8&&t!==(t=r[7]+"")&&Z(n,t),u&8&&l!==(l=r[6])&&(e.__value=l,Y(e,e.__value))},d(r){r&&b(e)}}}function Qe(s){let e,t,n,l,r=s[4]&&_e(),u=ee(s[3]),o=[];for(let f=0;f<u.length;f+=1)o[f]=pe(me(s,u,f));return{c(){e=E("select"),r&&r.c(),t=Se();for(let f=0;f<o.length;f+=1)o[f].c();q(e,"class","govuk-select"),q(e,"id",s[2]),s[0]===void 0&&Be(()=>s[5].call(e))},m(f,a){h(f,e,a),r&&r.m(e,null),$(e,t);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);re(e,s[0],!0),n||(l=Ce(e,"change",s[5]),n=!0)},p(f,a){if(f[4]?r||(r=_e(),r.c(),r.m(e,t)):r&&(r.d(1),r=null),a&8){u=ee(f[3]);let c;for(c=0;c<u.length;c+=1){const v=me(f,u,c);o[c]?o[c].p(v,a):(o[c]=pe(v),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=u.length}a&4&&q(e,"id",f[2]),a&9&&re(e,f[0])},d(f){f&&b(e),r&&r.d(),je(o,f),n=!1,l()}}}function Re(s){let e,t;return e=new ye({props:{label:s[1],id:s[2],$$slots:{default:[Qe]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},m(n,l){O(e,n,l),t=!0},p(n,[l]){const r={};l&2&&(r.label=n[1]),l&4&&(r.id=n[2]),l&1053&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function Ue(s,e,t){let{label:n}=e,{id:l}=e,{choices:r}=e,{emptyOption:u=!0}=e,{value:o}=e;function f(){o=Le(this),t(0,o),t(3,r)}return s.$$set=a=>{"label"in a&&t(1,n=a.label),"id"in a&&t(2,l=a.id),"choices"in a&&t(3,r=a.choices),"emptyOption"in a&&t(4,u=a.emptyOption),"value"in a&&t(0,o=a.value)},[o,n,l,r,u,f]}class $e extends we{constructor(e){super(),ve(this,e,Ue,Re,ke,{label:1,id:2,choices:3,emptyOption:4,value:0})}}function de(s,e,t){const n=s.slice();return n[23]=e[t],n}function Ve(s){let e;return{c(){e=C("Home")},m(t,n){h(t,e,n)},d(t){t&&b(e)}}}function We(s){let e;return{c(){e=C("Clear")},m(t,n){h(t,e,n)},d(t){t&&b(e)}}}function Xe(s){let e,t,n,l,r,u;return n=new te({props:{$$slots:{default:[We]},$$scope:{ctx:s}}}),n.$on("click",s[17]),{c(){e=E("input"),t=L(),F(n.$$.fragment),q(e,"type","text"),q(e,"class","govuk-input govuk-input--width-10"),q(e,"id","filterText")},m(o,f){h(o,e,f),Y(e,s[1]),h(o,t,f),O(n,o,f),l=!0,r||(u=Ce(e,"input",s[16]),r=!0)},p(o,f){f&2&&e.value!==o[1]&&Y(e,o[1]);const a={};f&67108864&&(a.$$scope={dirty:f,ctx:o}),n.$set(a)},i(o){l||(w(n.$$.fragment,o),l=!0)},o(o){j(n.$$.fragment,o),l=!1},d(o){o&&(b(e),b(t)),N(n,o),r=!1,u()}}}function Ye(s){let e,t,n,l,r,u,o,f;function a(i){s[14](i)}let c={label:"Authority or region",id:"filterAuthority",choices:s[7]};s[4]!==void 0&&(c.value=s[4]),e=new $e({props:c}),ie.push(()=>ue(e,"value",a));function v(i){s[15](i)}let I={label:"Funding programme",id:"filterFundingProgramme",choices:s[8]};return s[5]!==void 0&&(I.value=s[5]),l=new $e({props:I}),ie.push(()=>ue(l,"value",v)),o=new ye({props:{label:"Any field",id:"filterText",$$slots:{default:[Xe]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment),n=L(),F(l.$$.fragment),u=L(),F(o.$$.fragment)},m(i,d){O(e,i,d),h(i,n,d),O(l,i,d),h(i,u,d),O(o,i,d),f=!0},p(i,d){const J={};d&128&&(J.choices=i[7]),!t&&d&16&&(t=!0,J.value=i[4],ce(()=>t=!1)),e.$set(J);const A={};d&256&&(A.choices=i[8]),!r&&d&32&&(r=!0,A.value=i[5],ce(()=>r=!1)),l.$set(A);const B={};d&67108866&&(B.$$scope={dirty:d,ctx:i}),o.$set(B)},i(i){f||(w(e.$$.fragment,i),w(l.$$.fragment,i),w(o.$$.fragment,i),f=!0)},o(i){j(e.$$.fragment,i),j(l.$$.fragment,i),j(o.$$.fragment,i),f=!1},d(i){i&&(b(n),b(u)),N(e,i),N(l,i),N(o,i)}}}function ge(s){let e,t;return e=new Ne({props:{label:`${s[23].scheme_reference}: ${s[23].num_features} features`,$$slots:{default:[tt]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},m(n,l){O(e,n,l),t=!0},p(n,l){const r={};l&1&&(r.label=`${n[23].scheme_reference}: ${n[23].num_features} features`),l&67108865&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function xe(s){let e;return{c(){e=C("Show on map")},m(t,n){h(t,e,n)},d(t){t&&b(e)}}}function et(s){let e;return{c(){e=C("Edit scheme")},m(t,n){h(t,e,n)},d(t){t&&b(e)}}}function tt(s){let e,t,n=s[23].authority_or_region+"",l,r,u,o,f=s[23].capital_scheme_id+"",a,c,v,I,i=s[23].funding_programme+"",d,J,A,B,P,M,K,T;function Q(){return s[18](s[23])}B=new te({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),B.$on("click",Q);function W(){return s[19](s[23])}return M=new te({props:{$$slots:{default:[et]},$$scope:{ctx:s}}}),M.$on("click",W),{c(){e=E("p"),t=C("Authority or region: "),l=C(n),r=L(),u=E("p"),o=C("Capital scheme ID: "),a=C(f),c=L(),v=E("p"),I=C("Funding programme: "),d=C(i),J=L(),A=E("div"),F(B.$$.fragment),P=L(),F(M.$$.fragment),K=L(),q(A,"class","govuk-button-group")},m(g,k){h(g,e,k),$(e,t),$(e,l),h(g,r,k),h(g,u,k),$(u,o),$(u,a),h(g,c,k),h(g,v,k),$(v,I),$(v,d),h(g,J,k),h(g,A,k),O(B,A,null),$(A,P),O(M,A,null),h(g,K,k),T=!0},p(g,k){s=g,(!T||k&1)&&n!==(n=s[23].authority_or_region+"")&&Z(l,n),(!T||k&1)&&f!==(f=s[23].capital_scheme_id+"")&&Z(a,f),(!T||k&1)&&i!==(i=s[23].funding_programme+"")&&Z(d,i);const m={};k&67108864&&(m.$$scope={dirty:k,ctx:s}),B.$set(m);const p={};k&67108864&&(p.$$scope={dirty:k,ctx:s}),M.$set(p)},i(g){T||(w(B.$$.fragment,g),w(M.$$.fragment,g),T=!0)},o(g){j(B.$$.fragment,g),j(M.$$.fragment,g),T=!1},d(g){g&&(b(e),b(r),b(u),b(c),b(v),b(J),b(A),b(K)),N(B),N(M)}}}function he(s){let e=s[2].has(s[23].scheme_reference),t,n,l=e&&ge(s);return{c(){l&&l.c(),t=Se()},m(r,u){l&&l.m(r,u),h(r,t,u),n=!0},p(r,u){u&5&&(e=r[2].has(r[23].scheme_reference)),e?l?(l.p(r,u),u&5&&w(l,1)):(l=ge(r),l.c(),w(l,1),l.m(t.parentNode,t)):l&&(Fe(),j(l,1,1,()=>{l=null}),Oe())},i(r){n||(w(l),n=!0)},o(r){j(l),n=!1},d(r){r&&b(t),l&&l.d(r)}}}function nt(s){let e,t,n,l,r,u,o,f,a,c,v,I,i,d,J=s[2].size+"",A,B,P=s[3].route+"",M,K,T=s[3].area+"",Q,W,g=s[3].crossing+"",k,m,p=s[3].other+"",D,R,G,X,H;t=new te({props:{$$slots:{default:[Ve]},$$scope:{ctx:s}}}),t.$on("click",s[13]),o=new Ge({props:{boundaryGeojson:s[6]}}),a=new Je({props:{label:"Load from GeoJSON",id:"load-geojson",loadFile:s[10]}}),v=new Ne({props:{label:"Filters",$$slots:{default:[Ye]},$$scope:{ctx:s}}});let U=ee(s[0]),y=[];for(let _=0;_<U.length;_+=1)y[_]=he(de(s,U,_));const Ae=_=>j(y[_],1,1,()=>{y[_]=null});return{c(){e=E("div"),F(t.$$.fragment),n=L(),l=E("div"),r=E("h1"),r.textContent="Browse schemes",u=L(),F(o.$$.fragment),f=L(),F(a.$$.fragment),c=L(),F(v.$$.fragment),I=L(),i=E("p"),d=C("Showing "),A=C(J),B=C(" schemes ("),M=C(P),K=C(" routes, "),Q=C(T),W=C(` areas,
      `),k=C(g),m=C(" crossings, "),D=C(p),R=C(" other)"),G=L(),X=E("ul");for(let _=0;_<y.length;_+=1)y[_].c();ae(l,"display","flex"),ae(l,"justify-content","space-between"),q(e,"slot","sidebar"),q(e,"class","govuk-prose")},m(_,S){h(_,e,S),O(t,e,null),$(e,n),$(e,l),$(l,r),$(l,u),O(o,l,null),$(e,f),O(a,e,null),$(e,c),O(v,e,null),$(e,I),$(e,i),$(i,d),$(i,A),$(i,B),$(i,M),$(i,K),$(i,Q),$(i,W),$(i,k),$(i,m),$(i,D),$(i,R),$(e,G),$(e,X);for(let V=0;V<y.length;V+=1)y[V]&&y[V].m(X,null);H=!0},p(_,S){const V={};S&67108864&&(V.$$scope={dirty:S,ctx:_}),t.$set(V);const ne={};S&64&&(ne.boundaryGeojson=_[6]),o.$set(ne);const le={};if(S&67109298&&(le.$$scope={dirty:S,ctx:_}),v.$set(le),(!H||S&4)&&J!==(J=_[2].size+"")&&Z(A,J),(!H||S&8)&&P!==(P=_[3].route+"")&&Z(M,P),(!H||S&8)&&T!==(T=_[3].area+"")&&Z(Q,T),(!H||S&8)&&g!==(g=_[3].crossing+"")&&Z(k,g),(!H||S&8)&&p!==(p=_[3].other+"")&&Z(D,p),S&6149){U=ee(_[0]);let z;for(z=0;z<U.length;z+=1){const se=de(_,U,z);y[z]?(y[z].p(se,S),w(y[z],1)):(y[z]=he(se),y[z].c(),w(y[z],1),y[z].m(X,null))}for(Fe(),z=U.length;z<y.length;z+=1)Ae(z);Oe()}},i(_){if(!H){w(t.$$.fragment,_),w(o.$$.fragment,_),w(a.$$.fragment,_),w(v.$$.fragment,_);for(let S=0;S<U.length;S+=1)w(y[S]);H=!0}},o(_){j(t.$$.fragment,_),j(o.$$.fragment,_),j(a.$$.fragment,_),j(v.$$.fragment,_),y=y.filter(Boolean);for(let S=0;S<y.length;S+=1)j(y[S]);H=!1},d(_){_&&b(e),N(t),N(o),N(a),N(v),je(y,_)}}}function lt(s){let e,t,n,l,r,u,o,f;return e=new De({props:{schema:be}}),n=new qe({props:{style:s[9]}}),r=new He({props:{schema:be}}),o=new Ze({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:ot}}),{c(){F(e.$$.fragment),t=L(),F(n.$$.fragment),l=L(),F(r.$$.fragment),u=L(),F(o.$$.fragment)},m(a,c){O(e,a,c),h(a,t,c),O(n,a,c),h(a,l,c),O(r,a,c),h(a,u,c),O(o,a,c),f=!0},p:Me,i(a){f||(w(e.$$.fragment,a),w(n.$$.fragment,a),w(r.$$.fragment,a),w(o.$$.fragment,a),f=!0)},o(a){j(e.$$.fragment,a),j(n.$$.fragment,a),j(r.$$.fragment,a),j(o.$$.fragment,a),f=!1},d(a){a&&(b(t),b(l),b(u)),N(e,a),N(n,a),N(r,a),N(o,a)}}}function st(s){let e,t,n;return t=new Pe({props:{style:s[9],$$slots:{default:[lt]},$$scope:{ctx:s}}}),{c(){e=E("div"),F(t.$$.fragment),q(e,"slot","main")},m(l,r){h(l,e,r),O(t,e,null),n=!0},p(l,r){const u={};r&67108864&&(u.$$scope={dirty:r,ctx:l}),t.$set(u)},i(l){n||(w(t.$$.fragment,l),n=!0)},o(l){j(t.$$.fragment,l),n=!1},d(l){l&&b(e),N(t)}}}function rt(s){let e,t;return e=new Ee({props:{$$slots:{main:[st],sidebar:[nt]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment)},m(n,l){O(e,n,l),t=!0},p(n,[l]){const r={};l&67109375&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}const be="v1";function ot(s){var e="<table>";for(let[t,n]of Object.entries(s))e+=`<tr><td>${t}</td><td>${n}</td></tr>`;return e+="</table>",e}function at(s,e,t){let n,l;oe(s,x,m=>t(6,n=m)),oe(s,Ke,m=>t(20,l=m)),Ie(()=>{Te()});let u=new URLSearchParams(window.location.search).get("style")||"streets",o=[],f="",a=new Set,c={area:0,route:0,crossing:0,other:0},v=[],I="",i=[],d="";ze(()=>{x.set(null)});function J(m){try{let p=JSON.parse(m);x.set(p),A(p),l==null||l.fitBounds(fe(p),{padding:20,animate:!1})}catch(p){window.alert(`Couldn't load schemes from a file: ${p}`)}}function A(m){let p={};for(let[G,X]of Object.entries(m.schemes))p[G]={scheme_reference:G,num_features:0,...X};for(let G of m.features)p[G.properties.scheme_reference].num_features++;t(0,o=Object.values(p));let D=new Set,R=new Set;for(let G of o)G.authority_or_region&&D.add(G.authority_or_region),G.funding_programme&&R.add(G.funding_programme);t(7,v=Array.from(D.entries())),v.sort(),t(8,i=Array.from(R.entries())),i.sort()}function B(m){let p={type:"FeatureCollection",features:n.features.filter(D=>D.properties.scheme_reference==m.scheme_reference)};l==null||l.fitBounds(fe(p),{padding:20,animate:!1})}function P(m){let p={type:"FeatureCollection",features:n.features.filter(R=>R.properties.scheme_reference==m.scheme_reference)},D=m.authority_or_region;window.localStorage.setItem(D,JSON.stringify(p)),window.open(`scheme.html?authority=${m.authority_or_region}`,"_blank")}const M=()=>window.open("index.html");function K(m){I=m,t(4,I)}function T(m){d=m,t(5,d)}function Q(){f=this.value,t(1,f)}const W=()=>t(1,f=""),g=m=>B(m),k=m=>P(m);return s.$$.update=()=>{if(s.$$.dirty&127&&n){if(a.clear(),f||I||d){let m=f.toLowerCase();for(let p of n.features)JSON.stringify(p.properties).toLowerCase().includes(m)&&(I&&p.properties.authority_or_region!=I||d&&p.properties.funding_programme!=d||a.add(p.properties.scheme_reference))}else for(let m of o)a.add(m.scheme_reference);x.update(m=>{if(!m)return null;for(let p of m.features)a.has(p.properties.scheme_reference)?delete p.properties.hide_while_editing:p.properties.hide_while_editing=!0;return m}),t(3,c={area:0,route:0,crossing:0,other:0});for(let m of n==null?void 0:n.features)a.has(m.properties.scheme_reference)&&t(3,c[m.properties.intervention_type]++,c);t(2,a),t(6,n),t(1,f),t(4,I),t(5,d),t(0,o),t(3,c)}},[o,f,a,c,I,d,n,v,i,u,J,B,P,M,K,T,Q,W,g,k]}class ft extends we{constructor(e){super(),ve(this,e,at,rt,ke,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new ft({target:document.getElementById("app")});