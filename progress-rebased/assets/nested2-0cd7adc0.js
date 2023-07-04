import{S as Ce,i as Le,s as Be,d as N,m as M,n as S,o as C,q,z as me,M as Fe,F as Oe,e as h,c as w,t as b,f as P,g as D,h as o,j as _e,l as V,ab as T,a3 as ye,a4 as ke,p as E,ad as je,r as Se,w as he,K as Ie,L as ze}from"./maplibre_helpers-a5c59e15.js";import{L as Ne,g as ee,Z as Me,e as de,q as qe,I as Je,B as Ge,t as Te,M as De,m as Ee,C as Ze}from"./ZoomOutMap-ce4ada31.js";function ge(n,e,l){const r=n.slice();return r[17]=e[l],r}function $e(n){let e,l;return e=new Ze({props:{label:`${n[17].scheme_reference}: ${n[17].num_features} features`,$$slots:{default:[Ae]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},m(r,t){M(e,r,t),l=!0},p(r,t){const s={};t&1&&(s.label=`${r[17].scheme_reference}: ${r[17].num_features} features`),t&1048577&&(s.$$scope={dirty:t,ctx:r}),e.$set(s)},i(r){l||(S(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){q(e,r)}}}function Ae(n){let e,l,r,t=n[17].authority_or_region+"",s,c,g,p,a=n[17].capital_scheme_id+"",d,Z,j,J,v=n[17].funding_programme+"",L,A,G,O,B,i,f,y,_,U;function R(){return n[12](n[17])}function Q(){return n[13](n[17])}return{c(){e=h("ul"),l=h("li"),r=b("Authority or region: "),s=b(t),c=w(),g=h("li"),p=b("Capital scheme ID: "),d=b(a),Z=w(),j=h("li"),J=b("Funding programme: "),L=b(v),A=w(),G=h("li"),O=h("button"),O.textContent="Show on map",B=w(),i=h("li"),f=h("button"),f.textContent="Edit scheme",y=w(),P(O,"type","button"),P(f,"type","button")},m(I,F){D(I,e,F),o(e,l),o(l,r),o(l,s),o(e,c),o(e,g),o(g,p),o(g,d),o(e,Z),o(e,j),o(j,J),o(j,L),o(e,A),o(e,G),o(G,O),o(e,B),o(e,i),o(i,f),D(I,y,F),_||(U=[V(O,"click",R),V(f,"click",Q)],_=!0)},p(I,F){n=I,F&1&&t!==(t=n[17].authority_or_region+"")&&T(s,t),F&1&&a!==(a=n[17].capital_scheme_id+"")&&T(d,a),F&1&&v!==(v=n[17].funding_programme+"")&&T(L,v)},d(I){I&&(E(e),E(y)),_=!1,Se(U)}}}function be(n){let e=n[2].has(n[17].scheme_reference),l,r,t=e&&$e(n);return{c(){t&&t.c(),l=Ie()},m(s,c){t&&t.m(s,c),D(s,l,c),r=!0},p(s,c){c&5&&(e=s[2].has(s[17].scheme_reference)),e?t?(t.p(s,c),c&5&&S(t,1)):(t=$e(s),t.c(),S(t,1),t.m(l.parentNode,l)):t&&(ye(),C(t,1,1,()=>{t=null}),ke())},i(s){r||(S(t),r=!0)},o(s){C(t),r=!1},d(s){s&&E(l),t&&t.d(s)}}}function He(n){let e,l,r,t,s,c,g,p,a,d,Z,j,J,v,L,A,G,O,B,i,f,y,_,U,R=n[2].size+"",Q,I,F=n[3].route+"",te,se,W=n[3].area+"",re,ae,X=n[3].crossing+"",le,ie,Y=n[3].other+"",ne,ue,fe,x,z,oe,ce;c=new Me({props:{boundaryGeojson:n[4]}}),p=new Oe({props:{label:"Load from GeoJSON",uniqueId:"load_geojson",loadFile:n[6]}});let H=de(n[0]),m=[];for(let u=0;u<H.length;u+=1)m[u]=be(ge(n,H,u));const ve=u=>C(m[u],1,1,()=>{m[u]=null});return{c(){e=h("div"),l=h("button"),l.textContent="Home",r=w(),t=h("h1"),s=b(`Browse schemes
      `),N(c.$$.fragment),g=w(),N(p.$$.fragment),a=w(),d=h("br"),Z=w(),j=h("br"),J=w(),v=h("div"),L=h("label"),A=b("Filter by any field: "),G=h("br"),O=w(),B=h("input"),i=w(),f=h("button"),f.textContent="Clear",y=w(),_=h("p"),U=b("Showing "),Q=b(R),I=b(" schemes ("),te=b(F),se=b(" routes, "),re=b(W),ae=b(` areas,
      `),le=b(X),ie=b(" crossings, "),ne=b(Y),ue=b(" other)"),fe=w(),x=h("ul");for(let u=0;u<m.length;u+=1)m[u].c();P(l,"type","button"),P(B,"type","text"),P(f,"type","button"),P(e,"slot","sidebar")},m(u,$){D(u,e,$),o(e,l),o(e,r),o(e,t),o(t,s),M(c,t,null),o(e,g),M(p,e,null),o(e,a),o(e,d),o(e,Z),o(e,j),o(e,J),o(e,v),o(v,L),o(L,A),o(L,G),o(L,O),o(L,B),_e(B,n[1]),o(v,i),o(v,f),o(e,y),o(e,_),o(_,U),o(_,Q),o(_,I),o(_,te),o(_,se),o(_,re),o(_,ae),o(_,le),o(_,ie),o(_,ne),o(_,ue),o(e,fe),o(e,x);for(let K=0;K<m.length;K+=1)m[K]&&m[K].m(x,null);z=!0,oe||(ce=[V(l,"click",n[9]),V(B,"input",n[10]),V(f,"click",n[11])],oe=!0)},p(u,$){const K={};if($&16&&(K.boundaryGeojson=u[4]),c.$set(K),$&2&&B.value!==u[1]&&_e(B,u[1]),(!z||$&4)&&R!==(R=u[2].size+"")&&T(Q,R),(!z||$&8)&&F!==(F=u[3].route+"")&&T(te,F),(!z||$&8)&&W!==(W=u[3].area+"")&&T(re,W),(!z||$&8)&&X!==(X=u[3].crossing+"")&&T(le,X),(!z||$&8)&&Y!==(Y=u[3].other+"")&&T(ne,Y),$&389){H=de(u[0]);let k;for(k=0;k<H.length;k+=1){const pe=ge(u,H,k);m[k]?(m[k].p(pe,$),S(m[k],1)):(m[k]=be(pe),m[k].c(),S(m[k],1),m[k].m(x,null))}for(ye(),k=H.length;k<m.length;k+=1)ve(k);ke()}},i(u){if(!z){S(c.$$.fragment,u),S(p.$$.fragment,u);for(let $=0;$<H.length;$+=1)S(m[$]);z=!0}},o(u){C(c.$$.fragment,u),C(p.$$.fragment,u),m=m.filter(Boolean);for(let $=0;$<m.length;$+=1)C(m[$]);z=!1},d(u){u&&E(e),q(c),q(p),je(m,u),oe=!1,Se(ce)}}}function Ke(n){let e,l,r,t,s,c,g,p;return e=new Je({props:{schema:we}}),r=new Ge({props:{style:n[5]}}),s=new Te({props:{schema:we}}),g=new De({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Ue}}),{c(){N(e.$$.fragment),l=w(),N(r.$$.fragment),t=w(),N(s.$$.fragment),c=w(),N(g.$$.fragment)},m(a,d){M(e,a,d),D(a,l,d),M(r,a,d),D(a,t,d),M(s,a,d),D(a,c,d),M(g,a,d),p=!0},p:ze,i(a){p||(S(e.$$.fragment,a),S(r.$$.fragment,a),S(s.$$.fragment,a),S(g.$$.fragment,a),p=!0)},o(a){C(e.$$.fragment,a),C(r.$$.fragment,a),C(s.$$.fragment,a),C(g.$$.fragment,a),p=!1},d(a){a&&(E(l),E(t),E(c)),q(e,a),q(r,a),q(s,a),q(g,a)}}}function Pe(n){let e,l,r;return l=new qe({props:{style:n[5],$$slots:{default:[Ke]},$$scope:{ctx:n}}}),{c(){e=h("div"),N(l.$$.fragment),P(e,"slot","main")},m(t,s){D(t,e,s),M(l,e,null),r=!0},p(t,s){const c={};s&1048576&&(c.$$scope={dirty:s,ctx:t}),l.$set(c)},i(t){r||(S(l.$$.fragment,t),r=!0)},o(t){C(l.$$.fragment,t),r=!1},d(t){t&&E(e),q(l)}}}function Re(n){let e,l;return e=new Ne({props:{$$slots:{main:[Pe],sidebar:[He]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},m(r,t){M(e,r,t),l=!0},p(r,[t]){const s={};t&1048607&&(s.$$scope={dirty:t,ctx:r}),e.$set(s)},i(r){l||(S(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){q(e,r)}}}const we="v1";function Ue(n){var e="<table>";for(let[l,r]of Object.entries(n))e+=`<tr><td>${l}</td><td>${r}</td></tr>`;return e+="</table>",e}function Qe(n,e,l){let r,t;me(n,ee,i=>l(4,r=i)),me(n,Ee,i=>l(14,t=i));let c=new URLSearchParams(window.location.search).get("style")||"streets",g=[],p="",a=new Set,d={area:0,route:0,crossing:0,other:0};Fe(()=>{ee.set(null)});function Z(i){try{let f=JSON.parse(i);ee.set(f),j(f),t==null||t.fitBounds(he(f),{padding:20,animate:!1})}catch(f){window.alert(`Couldn't load schemes from a file: ${f}`)}}function j(i){let f={};for(let[y,_]of Object.entries(i.schemes))f[y]={scheme_reference:y,num_features:0,..._};for(let y of i.features)f[y.properties.scheme_reference].num_features++;l(0,g=Object.values(f))}function J(i){let f={type:"FeatureCollection",features:r.features.filter(y=>y.properties.scheme_reference==i.scheme_reference)};t==null||t.fitBounds(he(f),{padding:20,animate:!1})}function v(i){let f={type:"FeatureCollection",features:r.features.filter(_=>_.properties.scheme_reference==i.scheme_reference)},y=i.authority_or_region;window.localStorage.setItem(y,JSON.stringify(f)),window.open(`scheme.html?authority=${i.authority_or_region}`,"_blank")}const L=()=>window.open("index.html");function A(){p=this.value,l(1,p)}const G=()=>l(1,p=""),O=i=>J(i),B=i=>v(i);return n.$$.update=()=>{if(n.$$.dirty&31){if(a.clear(),p){let i=p.toLowerCase();for(let f of r.features)JSON.stringify(f.properties).toLowerCase().includes(i)&&a.add(f.properties.scheme_reference)}else for(let i of g)a.add(i.scheme_reference);ee.update(i=>{if(!i)return null;for(let f of i.features)a.has(f.properties.scheme_reference)?delete f.properties.hide_while_editing:f.properties.hide_while_editing=!0;return i}),l(3,d={area:0,route:0,crossing:0,other:0});for(let i of r==null?void 0:r.features)a.has(i.properties.scheme_reference)&&l(3,d[i.properties.intervention_type]++,d);l(2,a),l(1,p),l(4,r),l(0,g),l(3,d)}},[g,p,a,d,r,c,Z,J,v,L,A,G,O,B]}class Ve extends Ce{constructor(e){super(),Le(this,e,Qe,Re,Be,{})}}new Ve({target:document.getElementById("app")});