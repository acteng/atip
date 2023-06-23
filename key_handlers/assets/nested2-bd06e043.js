import{S as ve,i as Ce,s as Le,d as N,m as J,n as S,o as C,q as M,z as me,ab as je,F as Be,e as h,c as w,t as b,f as K,g as D,h as o,j as _e,l as V,a9 as T,a2 as we,a3 as ye,p as E,ac as Fe,r as ke,w as he,K as Oe,L as Ie}from"./maplibre_helpers-654ecbda.js";import{L as ze,g as ee,Z as Ne,j as Je,I as Me,B as qe,k as Ge,M as Te,m as De,C as Ee}from"./ZoomOutMap-33f41920.js";function de(n,e,l){const r=n.slice();return r[17]=e[l],r}function ge(n){let e,l;return e=new Ee({props:{label:`${n[17].scheme_reference}: ${n[17].num_features} features`,$$slots:{default:[Ze]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},m(r,t){J(e,r,t),l=!0},p(r,t){const a={};t&1&&(a.label=`${r[17].scheme_reference}: ${r[17].num_features} features`),t&1048577&&(a.$$scope={dirty:t,ctx:r}),e.$set(a)},i(r){l||(S(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){M(e,r)}}}function Ze(n){let e,l,r,t=n[17].authority_or_region+"",a,c,g,p,s=n[17].capital_scheme_id+"",d,Z,I,q,v=n[17].funding_programme+"",L,A,G,F,j,i,u,y,m,U;function P(){return n[12](n[17])}function Q(){return n[13](n[17])}return{c(){e=h("ul"),l=h("li"),r=b("Authority or region: "),a=b(t),c=w(),g=h("li"),p=b("Capital scheme ID: "),d=b(s),Z=w(),I=h("li"),q=b("Funding programme: "),L=b(v),A=w(),G=h("li"),F=h("button"),F.textContent="Show on map",j=w(),i=h("li"),u=h("button"),u.textContent="Edit scheme",y=w(),K(F,"type","button"),K(u,"type","button")},m(O,B){D(O,e,B),o(e,l),o(l,r),o(l,a),o(e,c),o(e,g),o(g,p),o(g,d),o(e,Z),o(e,I),o(I,q),o(I,L),o(e,A),o(e,G),o(G,F),o(e,j),o(e,i),o(i,u),D(O,y,B),m||(U=[V(F,"click",P),V(u,"click",Q)],m=!0)},p(O,B){n=O,B&1&&t!==(t=n[17].authority_or_region+"")&&T(a,t),B&1&&s!==(s=n[17].capital_scheme_id+"")&&T(d,s),B&1&&v!==(v=n[17].funding_programme+"")&&T(L,v)},d(O){O&&E(e),O&&E(y),m=!1,ke(U)}}}function $e(n){let e=n[2].has(n[17].scheme_reference),l,r,t=e&&ge(n);return{c(){t&&t.c(),l=Oe()},m(a,c){t&&t.m(a,c),D(a,l,c),r=!0},p(a,c){c&5&&(e=a[2].has(a[17].scheme_reference)),e?t?(t.p(a,c),c&5&&S(t,1)):(t=ge(a),t.c(),S(t,1),t.m(l.parentNode,l)):t&&(we(),C(t,1,1,()=>{t=null}),ye())},i(a){r||(S(t),r=!0)},o(a){C(t),r=!1},d(a){t&&t.d(a),a&&E(l)}}}function Ae(n){let e,l,r,t,a,c,g,p,s,d,Z,I,q,v,L,A,G,F,j,i,u,y,m,U,P=n[2].size+"",Q,O,B=n[3].route+"",te,se,W=n[3].area+"",re,ae,X=n[3].crossing+"",le,ie,Y=n[3].other+"",ne,fe,ue,x,z,oe,ce;c=new Ne({props:{boundaryGeojson:n[4]}}),p=new Be({props:{label:"Load from GeoJSON",uniqueId:"load_geojson",loadFile:n[6]}});let H=n[0],_=[];for(let f=0;f<H.length;f+=1)_[f]=$e(de(n,H,f));const Se=f=>C(_[f],1,1,()=>{_[f]=null});return{c(){e=h("div"),l=h("button"),l.textContent="Home",r=w(),t=h("h1"),a=b(`Browse schemes
      `),N(c.$$.fragment),g=w(),N(p.$$.fragment),s=w(),d=h("br"),Z=w(),I=h("br"),q=w(),v=h("div"),L=h("label"),A=b("Filter by any field: "),G=h("br"),F=w(),j=h("input"),i=w(),u=h("button"),u.textContent="Clear",y=w(),m=h("p"),U=b("Showing "),Q=b(P),O=b(" schemes ("),te=b(B),se=b(" routes, "),re=b(W),ae=b(` areas,
      `),le=b(X),ie=b(" crossings, "),ne=b(Y),fe=b(" other)"),ue=w(),x=h("ul");for(let f=0;f<_.length;f+=1)_[f].c();K(l,"type","button"),K(j,"type","text"),K(u,"type","button"),K(e,"slot","sidebar")},m(f,$){D(f,e,$),o(e,l),o(e,r),o(e,t),o(t,a),J(c,t,null),o(e,g),J(p,e,null),o(e,s),o(e,d),o(e,Z),o(e,I),o(e,q),o(e,v),o(v,L),o(L,A),o(L,G),o(L,F),o(L,j),_e(j,n[1]),o(v,i),o(v,u),o(e,y),o(e,m),o(m,U),o(m,Q),o(m,O),o(m,te),o(m,se),o(m,re),o(m,ae),o(m,le),o(m,ie),o(m,ne),o(m,fe),o(e,ue),o(e,x);for(let R=0;R<_.length;R+=1)_[R].m(x,null);z=!0,oe||(ce=[V(l,"click",n[9]),V(j,"input",n[10]),V(u,"click",n[11])],oe=!0)},p(f,$){const R={};if($&16&&(R.boundaryGeojson=f[4]),c.$set(R),$&2&&j.value!==f[1]&&_e(j,f[1]),(!z||$&4)&&P!==(P=f[2].size+"")&&T(Q,P),(!z||$&8)&&B!==(B=f[3].route+"")&&T(te,B),(!z||$&8)&&W!==(W=f[3].area+"")&&T(re,W),(!z||$&8)&&X!==(X=f[3].crossing+"")&&T(le,X),(!z||$&8)&&Y!==(Y=f[3].other+"")&&T(ne,Y),$&389){H=f[0];let k;for(k=0;k<H.length;k+=1){const pe=de(f,H,k);_[k]?(_[k].p(pe,$),S(_[k],1)):(_[k]=$e(pe),_[k].c(),S(_[k],1),_[k].m(x,null))}for(we(),k=H.length;k<_.length;k+=1)Se(k);ye()}},i(f){if(!z){S(c.$$.fragment,f),S(p.$$.fragment,f);for(let $=0;$<H.length;$+=1)S(_[$]);z=!0}},o(f){C(c.$$.fragment,f),C(p.$$.fragment,f),_=_.filter(Boolean);for(let $=0;$<_.length;$+=1)C(_[$]);z=!1},d(f){f&&E(e),M(c),M(p),Fe(_,f),oe=!1,ke(ce)}}}function He(n){let e,l,r,t,a,c,g,p;return e=new Me({props:{schema:be}}),r=new qe({props:{style:n[5]}}),a=new Ge({props:{schema:be}}),g=new Te({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Re}}),{c(){N(e.$$.fragment),l=w(),N(r.$$.fragment),t=w(),N(a.$$.fragment),c=w(),N(g.$$.fragment)},m(s,d){J(e,s,d),D(s,l,d),J(r,s,d),D(s,t,d),J(a,s,d),D(s,c,d),J(g,s,d),p=!0},p:Ie,i(s){p||(S(e.$$.fragment,s),S(r.$$.fragment,s),S(a.$$.fragment,s),S(g.$$.fragment,s),p=!0)},o(s){C(e.$$.fragment,s),C(r.$$.fragment,s),C(a.$$.fragment,s),C(g.$$.fragment,s),p=!1},d(s){M(e,s),s&&E(l),M(r,s),s&&E(t),M(a,s),s&&E(c),M(g,s)}}}function Ke(n){let e,l,r;return l=new Je({props:{style:n[5],$$slots:{default:[He]},$$scope:{ctx:n}}}),{c(){e=h("div"),N(l.$$.fragment),K(e,"slot","main")},m(t,a){D(t,e,a),J(l,e,null),r=!0},p(t,a){const c={};a&1048576&&(c.$$scope={dirty:a,ctx:t}),l.$set(c)},i(t){r||(S(l.$$.fragment,t),r=!0)},o(t){C(l.$$.fragment,t),r=!1},d(t){t&&E(e),M(l)}}}function Pe(n){let e,l;return e=new ze({props:{$$slots:{main:[Ke],sidebar:[Ae]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},m(r,t){J(e,r,t),l=!0},p(r,[t]){const a={};t&1048607&&(a.$$scope={dirty:t,ctx:r}),e.$set(a)},i(r){l||(S(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){M(e,r)}}}const be="v1";function Re(n){var e="<table>";for(let[l,r]of Object.entries(n))e+=`<tr><td>${l}</td><td>${r}</td></tr>`;return e+="</table>",e}function Ue(n,e,l){let r,t;me(n,ee,i=>l(4,r=i)),me(n,De,i=>l(14,t=i));let c=new URLSearchParams(window.location.search).get("style")||"streets",g=[],p="",s=new Set,d={area:0,route:0,crossing:0,other:0};je(()=>{ee.set(null)});function Z(i){try{let u=JSON.parse(i);ee.set(u),I(u),t==null||t.fitBounds(he(u),{padding:20,animate:!1})}catch(u){window.alert(`Couldn't load schemes from a file: ${u}`)}}function I(i){let u={};for(let[y,m]of Object.entries(i.schemes))u[y]={scheme_reference:y,num_features:0,...m};for(let y of i.features)u[y.properties.scheme_reference].num_features++;l(0,g=Object.values(u))}function q(i){let u={type:"FeatureCollection",features:r.features.filter(y=>y.properties.scheme_reference==i.scheme_reference)};t==null||t.fitBounds(he(u),{padding:20,animate:!1})}function v(i){let u={type:"FeatureCollection",features:r.features.filter(m=>m.properties.scheme_reference==i.scheme_reference)},y=i.authority_or_region;window.localStorage.setItem(y,JSON.stringify(u)),window.open(`scheme.html?authority=${i.authority_or_region}`,"_blank")}const L=()=>window.open("index.html");function A(){p=this.value,l(1,p)}const G=()=>l(1,p=""),F=i=>q(i),j=i=>v(i);return n.$$.update=()=>{if(n.$$.dirty&31){if(s.clear(),p){let i=p.toLowerCase();for(let u of r.features)JSON.stringify(u.properties).toLowerCase().includes(i)&&s.add(u.properties.scheme_reference)}else for(let i of g)s.add(i.scheme_reference);ee.update(i=>{if(!i)return null;for(let u of i.features)s.has(u.properties.scheme_reference)?delete u.properties.hide_while_editing:u.properties.hide_while_editing=!0;return i}),l(3,d={area:0,route:0,crossing:0,other:0});for(let i of r==null?void 0:r.features)s.has(i.properties.scheme_reference)&&l(3,d[i.properties.intervention_type]++,d);l(2,s),l(1,p),l(4,r),l(0,g),l(3,d)}},[g,p,s,d,r,c,Z,q,v,L,A,G,F,j]}class Qe extends ve{constructor(e){super(),Ce(this,e,Ue,Pe,Le,{})}}new Qe({target:document.getElementById("app")});
