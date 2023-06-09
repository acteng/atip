import{S as ve,i as Ce,s as Oe,d as z,m as J,n as k,o as C,q,J as me,aq as Be,O as ee,F as Fe,e as h,c as w,t as b,f as K,g as T,h as o,j as _e,l as V,E,ah as we,ai as ye,p as Z,ar as Le,r as Se,w as he,Z as je,G as Ie,K as Ne}from"./FileInput-12524b96.js";import{L as ze,Z as Je,b as qe,I as Ge,B as Me,d as Ee,M as Te,C as Ze}from"./ZoomOutMap-24362c0d.js";function de(n,e,l){const r=n.slice();return r[17]=e[l],r}function $e(n){let e,l;return e=new Ze({props:{label:`${n[17].scheme_reference}: ${n[17].num_features} features`,$$slots:{default:[De]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},m(r,t){J(e,r,t),l=!0},p(r,t){const a={};t&1&&(a.label=`${r[17].scheme_reference}: ${r[17].num_features} features`),t&1048577&&(a.$$scope={dirty:t,ctx:r}),e.$set(a)},i(r){l||(k(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){q(e,r)}}}function De(n){let e,l,r,t=n[17].authority_or_region+"",a,c,$,p,s=n[17].capital_scheme_id+"",d,D,I,G,v=n[17].funding_programme+"",O,A,M,L,B,i,u,y,m,U;function P(){return n[12](n[17])}function Q(){return n[13](n[17])}return{c(){e=h("ul"),l=h("li"),r=b("Authority or region: "),a=b(t),c=w(),$=h("li"),p=b("Capital scheme ID: "),d=b(s),D=w(),I=h("li"),G=b("Funding programme: "),O=b(v),A=w(),M=h("li"),L=h("button"),L.textContent="Show on map",B=w(),i=h("li"),u=h("button"),u.textContent="Edit scheme",y=w(),K(L,"type","button"),K(u,"type","button")},m(j,F){T(j,e,F),o(e,l),o(l,r),o(l,a),o(e,c),o(e,$),o($,p),o($,d),o(e,D),o(e,I),o(I,G),o(I,O),o(e,A),o(e,M),o(M,L),o(e,B),o(e,i),o(i,u),T(j,y,F),m||(U=[V(L,"click",P),V(u,"click",Q)],m=!0)},p(j,F){n=j,F&1&&t!==(t=n[17].authority_or_region+"")&&E(a,t),F&1&&s!==(s=n[17].capital_scheme_id+"")&&E(d,s),F&1&&v!==(v=n[17].funding_programme+"")&&E(O,v)},d(j){j&&Z(e),j&&Z(y),m=!1,Se(U)}}}function ge(n){let e=n[2].has(n[17].scheme_reference),l,r,t=e&&$e(n);return{c(){t&&t.c(),l=je()},m(a,c){t&&t.m(a,c),T(a,l,c),r=!0},p(a,c){c&5&&(e=a[2].has(a[17].scheme_reference)),e?t?(t.p(a,c),c&5&&k(t,1)):(t=$e(a),t.c(),k(t,1),t.m(l.parentNode,l)):t&&(we(),C(t,1,1,()=>{t=null}),ye())},i(a){r||(k(t),r=!0)},o(a){C(t),r=!1},d(a){t&&t.d(a),a&&Z(l)}}}function Ae(n){let e,l,r,t,a,c,$,p,s,d,D,I,G,v,O,A,M,L,B,i,u,y,m,U,P=n[2].size+"",Q,j,F=n[3].route+"",te,se,W=n[3].area+"",re,ae,X=n[3].crossing+"",le,ie,Y=n[3].other+"",ne,fe,ue,x,N,oe,ce;c=new Je({props:{boundaryGeojson:n[4]}}),p=new Fe({props:{label:"Load from GeoJSON",uniqueId:"load_geojson",loadFile:n[6]}});let H=n[0],_=[];for(let f=0;f<H.length;f+=1)_[f]=ge(de(n,H,f));const ke=f=>C(_[f],1,1,()=>{_[f]=null});return{c(){e=h("div"),l=h("button"),l.textContent="Home",r=w(),t=h("h1"),a=b(`Browse schemes
      `),z(c.$$.fragment),$=w(),z(p.$$.fragment),s=w(),d=h("br"),D=w(),I=h("br"),G=w(),v=h("div"),O=h("label"),A=b("Filter by any field: "),M=h("br"),L=w(),B=h("input"),i=w(),u=h("button"),u.textContent="Clear",y=w(),m=h("p"),U=b("Showing "),Q=b(P),j=b(" schemes ("),te=b(F),se=b(" routes, "),re=b(W),ae=b(` areas,
      `),le=b(X),ie=b(" crossings, "),ne=b(Y),fe=b(" other)"),ue=w(),x=h("ul");for(let f=0;f<_.length;f+=1)_[f].c();K(l,"type","button"),K(B,"type","text"),K(u,"type","button"),K(e,"slot","sidebar")},m(f,g){T(f,e,g),o(e,l),o(e,r),o(e,t),o(t,a),J(c,t,null),o(e,$),J(p,e,null),o(e,s),o(e,d),o(e,D),o(e,I),o(e,G),o(e,v),o(v,O),o(O,A),o(O,M),o(O,L),o(O,B),_e(B,n[1]),o(v,i),o(v,u),o(e,y),o(e,m),o(m,U),o(m,Q),o(m,j),o(m,te),o(m,se),o(m,re),o(m,ae),o(m,le),o(m,ie),o(m,ne),o(m,fe),o(e,ue),o(e,x);for(let R=0;R<_.length;R+=1)_[R].m(x,null);N=!0,oe||(ce=[V(l,"click",n[9]),V(B,"input",n[10]),V(u,"click",n[11])],oe=!0)},p(f,g){const R={};if(g&16&&(R.boundaryGeojson=f[4]),c.$set(R),g&2&&B.value!==f[1]&&_e(B,f[1]),(!N||g&4)&&P!==(P=f[2].size+"")&&E(Q,P),(!N||g&8)&&F!==(F=f[3].route+"")&&E(te,F),(!N||g&8)&&W!==(W=f[3].area+"")&&E(re,W),(!N||g&8)&&X!==(X=f[3].crossing+"")&&E(le,X),(!N||g&8)&&Y!==(Y=f[3].other+"")&&E(ne,Y),g&389){H=f[0];let S;for(S=0;S<H.length;S+=1){const pe=de(f,H,S);_[S]?(_[S].p(pe,g),k(_[S],1)):(_[S]=ge(pe),_[S].c(),k(_[S],1),_[S].m(x,null))}for(we(),S=H.length;S<_.length;S+=1)ke(S);ye()}},i(f){if(!N){k(c.$$.fragment,f),k(p.$$.fragment,f);for(let g=0;g<H.length;g+=1)k(_[g]);N=!0}},o(f){C(c.$$.fragment,f),C(p.$$.fragment,f),_=_.filter(Boolean);for(let g=0;g<_.length;g+=1)C(_[g]);N=!1},d(f){f&&Z(e),q(c),q(p),Le(_,f),oe=!1,Se(ce)}}}function He(n){let e,l,r,t,a,c,$,p;return e=new Ge({props:{schema:be}}),r=new Me({props:{style:n[5]}}),a=new Ee({props:{schema:be}}),$=new Te({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Re}}),{c(){z(e.$$.fragment),l=w(),z(r.$$.fragment),t=w(),z(a.$$.fragment),c=w(),z($.$$.fragment)},m(s,d){J(e,s,d),T(s,l,d),J(r,s,d),T(s,t,d),J(a,s,d),T(s,c,d),J($,s,d),p=!0},p:Ie,i(s){p||(k(e.$$.fragment,s),k(r.$$.fragment,s),k(a.$$.fragment,s),k($.$$.fragment,s),p=!0)},o(s){C(e.$$.fragment,s),C(r.$$.fragment,s),C(a.$$.fragment,s),C($.$$.fragment,s),p=!1},d(s){q(e,s),s&&Z(l),q(r,s),s&&Z(t),q(a,s),s&&Z(c),q($,s)}}}function Ke(n){let e,l,r;return l=new qe({props:{style:n[5],$$slots:{default:[He]},$$scope:{ctx:n}}}),{c(){e=h("div"),z(l.$$.fragment),K(e,"slot","main")},m(t,a){T(t,e,a),J(l,e,null),r=!0},p(t,a){const c={};a&1048576&&(c.$$scope={dirty:a,ctx:t}),l.$set(c)},i(t){r||(k(l.$$.fragment,t),r=!0)},o(t){C(l.$$.fragment,t),r=!1},d(t){t&&Z(e),q(l)}}}function Pe(n){let e,l;return e=new ze({props:{$$slots:{main:[Ke],sidebar:[Ae]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},m(r,t){J(e,r,t),l=!0},p(r,[t]){const a={};t&1048607&&(a.$$scope={dirty:t,ctx:r}),e.$set(a)},i(r){l||(k(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){q(e,r)}}}const be="v1";function Re(n){var e="<table>";for(let[l,r]of Object.entries(n))e+=`<tr><td>${l}</td><td>${r}</td></tr>`;return e+="</table>",e}function Ue(n,e,l){let r,t;me(n,ee,i=>l(4,r=i)),me(n,Ne,i=>l(14,t=i));let c=new URLSearchParams(window.location.search).get("style")||"streets",$=[],p="",s=new Set,d={area:0,route:0,crossing:0,other:0};Be(()=>{ee.set(null)});function D(i){try{let u=JSON.parse(i);ee.set(u),I(u),t==null||t.fitBounds(he(u),{padding:20,animate:!1})}catch(u){window.alert(`Couldn't load schemes from a file: ${u}`)}}function I(i){let u={};for(let[y,m]of Object.entries(i.schemes))u[y]={scheme_reference:y,num_features:0,...m};for(let y of i.features)u[y.properties.scheme_reference].num_features++;l(0,$=Object.values(u))}function G(i){let u={type:"FeatureCollection",features:r.features.filter(y=>y.properties.scheme_reference==i.scheme_reference)};t==null||t.fitBounds(he(u),{padding:20,animate:!1})}function v(i){let u={type:"FeatureCollection",features:r.features.filter(m=>m.properties.scheme_reference==i.scheme_reference)},y=i.authority_or_region;window.localStorage.setItem(y,JSON.stringify(u)),window.open(`scheme.html?authority=${i.authority_or_region}`,"_blank")}const O=()=>window.open("index.html");function A(){p=this.value,l(1,p)}const M=()=>l(1,p=""),L=i=>G(i),B=i=>v(i);return n.$$.update=()=>{if(n.$$.dirty&31){if(s.clear(),p){let i=p.toLowerCase();for(let u of r.features)JSON.stringify(u.properties).toLowerCase().includes(i)&&s.add(u.properties.scheme_reference)}else for(let i of $)s.add(i.scheme_reference);ee.update(i=>{if(!i)return null;for(let u of i.features)s.has(u.properties.scheme_reference)?delete u.properties.hide_while_editing:u.properties.hide_while_editing=!0;return i}),l(3,d={area:0,route:0,crossing:0,other:0});for(let i of r==null?void 0:r.features)s.has(i.properties.scheme_reference)&&l(3,d[i.properties.intervention_type]++,d);l(2,s),l(1,p),l(4,r),l(0,$),l(3,d)}},[$,p,s,d,r,c,D,G,v,O,A,M,L,B]}class Qe extends ve{constructor(e){super(),Ce(this,e,Ue,Pe,Oe,{})}}new Qe({target:document.getElementById("app")});
