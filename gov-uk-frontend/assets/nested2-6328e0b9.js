import{S as le,i as se,s as oe,d as q,m as G,t as C,n as J,p as T,y as U,M as ae,F as ie,P as fe,e as v,c as z,r as b,f as P,g as w,h as u,j as Q,l as Z,K as te,L as ne,o as y,ae as ue,a4 as re,v as V,ac as E,J as pe,a5 as me}from"./maplibre_helpers-ac43dd3e.js";import{L as ce,g as A,Z as _e,e as W,q as he,I as $e,B as de,t as ge,M as be,m as we,C as ye}from"./ZoomOutMap-7687775c.js";function X(l,e,r){const n=l.slice();return n[17]=e[r],n}function ke(l){let e,r=l[2].size+"",n,t,s=l[3].route+"",p,d,_=l[3].area+"",o,h,j=l[3].crossing+"",I,k,L=l[3].other+"",S,M;return{c(){e=b("Showing "),n=b(r),t=b(" schemes ("),p=b(s),d=b(" routes, "),o=b(_),h=b(` areas,
      `),I=b(j),k=b(" crossings, "),S=b(L),M=b(" other)")},m(i,c){w(i,e,c),w(i,n,c),w(i,t,c),w(i,p,c),w(i,d,c),w(i,o,c),w(i,h,c),w(i,I,c),w(i,k,c),w(i,S,c),w(i,M,c)},p(i,c){c&4&&r!==(r=i[2].size+"")&&E(n,r),c&8&&s!==(s=i[3].route+"")&&E(p,s),c&8&&_!==(_=i[3].area+"")&&E(o,_),c&8&&j!==(j=i[3].crossing+"")&&E(I,j),c&8&&L!==(L=i[3].other+"")&&E(S,L)},d(i){i&&(y(e),y(n),y(t),y(p),y(d),y(o),y(h),y(I),y(k),y(S),y(M))}}}function Y(l){let e,r;return e=new ye({props:{label:`${l[17].scheme_reference}: ${l[17].num_features} features`,$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},m(n,t){G(e,n,t),r=!0},p(n,t){const s={};t&1&&(s.label=`${n[17].scheme_reference}: ${n[17].num_features} features`),t&1048577&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(C(e.$$.fragment,n),r=!0)},o(n){J(e.$$.fragment,n),r=!1},d(n){T(e,n)}}}function ve(l){let e,r,n,t=l[17].authority_or_region+"",s,p,d,_,o=l[17].capital_scheme_id+"",h,j,I,k,L=l[17].funding_programme+"",S,M,i,c,D,a,m,B,F,$;function H(){return l[12](l[17])}function f(){return l[13](l[17])}return{c(){e=v("ul"),r=v("li"),n=b("Authority or region: "),s=b(t),p=z(),d=v("li"),_=b("Capital scheme ID: "),h=b(o),j=z(),I=v("li"),k=b("Funding programme: "),S=b(L),M=z(),i=v("li"),c=v("button"),c.textContent="Show on map",D=z(),a=v("li"),m=v("button"),m.textContent="Edit scheme",B=z(),P(c,"type","button"),P(m,"type","button")},m(g,N){w(g,e,N),u(e,r),u(r,n),u(r,s),u(e,p),u(e,d),u(d,_),u(d,h),u(e,j),u(e,I),u(I,k),u(I,S),u(e,M),u(e,i),u(i,c),u(e,D),u(e,a),u(a,m),w(g,B,N),F||($=[Z(c,"click",H),Z(m,"click",f)],F=!0)},p(g,N){l=g,N&1&&t!==(t=l[17].authority_or_region+"")&&E(s,t),N&1&&o!==(o=l[17].capital_scheme_id+"")&&E(h,o),N&1&&L!==(L=l[17].funding_programme+"")&&E(S,L)},d(g){g&&(y(e),y(B)),F=!1,re($)}}}function x(l){let e=l[2].has(l[17].scheme_reference),r,n,t=e&&Y(l);return{c(){t&&t.c(),r=pe()},m(s,p){t&&t.m(s,p),w(s,r,p),n=!0},p(s,p){p&5&&(e=s[2].has(s[17].scheme_reference)),e?t?(t.p(s,p),p&5&&C(t,1)):(t=Y(s),t.c(),C(t,1),t.m(r.parentNode,r)):t&&(te(),J(t,1,1,()=>{t=null}),ne())},i(s){n||(C(t),n=!0)},o(s){J(t),n=!1},d(s){s&&y(r),t&&t.d(s)}}}function Se(l){let e,r,n,t,s,p,d,_,o,h,j,I,k,L,S,M,i,c,D,a,m,B;p=new _e({props:{boundaryGeojson:l[4]}}),_=new ie({props:{label:"Load from GeoJSON",uniqueId:"load_geojson",loadFile:l[6]}}),i=new fe({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}});let F=W(l[0]),$=[];for(let f=0;f<F.length;f+=1)$[f]=x(X(l,F,f));const H=f=>J($[f],1,1,()=>{$[f]=null});return{c(){e=v("div"),r=v("button"),r.textContent="Home",n=z(),t=v("h1"),s=b(`Browse schemes
      `),q(p.$$.fragment),d=z(),q(_.$$.fragment),o=z(),h=v("div"),j=v("label"),I=b(`Filter by any field:
        `),k=v("input"),L=z(),S=v("button"),S.textContent="Clear",M=z(),q(i.$$.fragment),c=z(),D=v("ul");for(let f=0;f<$.length;f+=1)$[f].c();P(r,"type","button"),P(k,"type","text"),P(S,"type","button"),P(e,"slot","sidebar")},m(f,g){w(f,e,g),u(e,r),u(e,n),u(e,t),u(t,s),G(p,t,null),u(e,d),G(_,e,null),u(e,o),u(e,h),u(h,j),u(j,I),u(j,k),Q(k,l[1]),u(h,L),u(h,S),u(e,M),G(i,e,null),u(e,c),u(e,D);for(let N=0;N<$.length;N+=1)$[N]&&$[N].m(D,null);a=!0,m||(B=[Z(r,"click",l[9]),Z(k,"input",l[10]),Z(S,"click",l[11])],m=!0)},p(f,g){const N={};g&16&&(N.boundaryGeojson=f[4]),p.$set(N),g&2&&k.value!==f[1]&&Q(k,f[1]);const K={};if(g&1048588&&(K.$$scope={dirty:g,ctx:f}),i.$set(K),g&389){F=W(f[0]);let O;for(O=0;O<F.length;O+=1){const R=X(f,F,O);$[O]?($[O].p(R,g),C($[O],1)):($[O]=x(R),$[O].c(),C($[O],1),$[O].m(D,null))}for(te(),O=F.length;O<$.length;O+=1)H(O);ne()}},i(f){if(!a){C(p.$$.fragment,f),C(_.$$.fragment,f),C(i.$$.fragment,f);for(let g=0;g<F.length;g+=1)C($[g]);a=!0}},o(f){J(p.$$.fragment,f),J(_.$$.fragment,f),J(i.$$.fragment,f),$=$.filter(Boolean);for(let g=0;g<$.length;g+=1)J($[g]);a=!1},d(f){f&&y(e),T(p),T(_),T(i),ue($,f),m=!1,re(B)}}}function Ce(l){let e,r,n,t,s,p,d,_;return e=new $e({props:{schema:ee}}),n=new de({props:{style:l[5]}}),s=new ge({props:{schema:ee}}),d=new be({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Fe}}),{c(){q(e.$$.fragment),r=z(),q(n.$$.fragment),t=z(),q(s.$$.fragment),p=z(),q(d.$$.fragment)},m(o,h){G(e,o,h),w(o,r,h),G(n,o,h),w(o,t,h),G(s,o,h),w(o,p,h),G(d,o,h),_=!0},p:me,i(o){_||(C(e.$$.fragment,o),C(n.$$.fragment,o),C(s.$$.fragment,o),C(d.$$.fragment,o),_=!0)},o(o){J(e.$$.fragment,o),J(n.$$.fragment,o),J(s.$$.fragment,o),J(d.$$.fragment,o),_=!1},d(o){o&&(y(r),y(t),y(p)),T(e,o),T(n,o),T(s,o),T(d,o)}}}function Le(l){let e,r,n;return r=new he({props:{style:l[5],$$slots:{default:[Ce]},$$scope:{ctx:l}}}),{c(){e=v("div"),q(r.$$.fragment),P(e,"slot","main")},m(t,s){w(t,e,s),G(r,e,null),n=!0},p(t,s){const p={};s&1048576&&(p.$$scope={dirty:s,ctx:t}),r.$set(p)},i(t){n||(C(r.$$.fragment,t),n=!0)},o(t){J(r.$$.fragment,t),n=!1},d(t){t&&y(e),T(r)}}}function Be(l){let e,r;return e=new ce({props:{$$slots:{main:[Le],sidebar:[Se]},$$scope:{ctx:l}}}),{c(){q(e.$$.fragment)},m(n,t){G(e,n,t),r=!0},p(n,[t]){const s={};t&1048607&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(C(e.$$.fragment,n),r=!0)},o(n){J(e.$$.fragment,n),r=!1},d(n){T(e,n)}}}const ee="v1";function Fe(l){var e="<table>";for(let[r,n]of Object.entries(l))e+=`<tr><td>${r}</td><td>${n}</td></tr>`;return e+="</table>",e}function Oe(l,e,r){let n,t;U(l,A,a=>r(4,n=a)),U(l,we,a=>r(14,t=a));let p=new URLSearchParams(window.location.search).get("style")||"streets",d=[],_="",o=new Set,h={area:0,route:0,crossing:0,other:0};ae(()=>{A.set(null)});function j(a){try{let m=JSON.parse(a);A.set(m),I(m),t==null||t.fitBounds(V(m),{padding:20,animate:!1})}catch(m){window.alert(`Couldn't load schemes from a file: ${m}`)}}function I(a){let m={};for(let[B,F]of Object.entries(a.schemes))m[B]={scheme_reference:B,num_features:0,...F};for(let B of a.features)m[B.properties.scheme_reference].num_features++;r(0,d=Object.values(m))}function k(a){let m={type:"FeatureCollection",features:n.features.filter(B=>B.properties.scheme_reference==a.scheme_reference)};t==null||t.fitBounds(V(m),{padding:20,animate:!1})}function L(a){let m={type:"FeatureCollection",features:n.features.filter(F=>F.properties.scheme_reference==a.scheme_reference)},B=a.authority_or_region;window.localStorage.setItem(B,JSON.stringify(m)),window.open(`scheme.html?authority=${a.authority_or_region}`,"_blank")}const S=()=>window.open("index.html");function M(){_=this.value,r(1,_)}const i=()=>r(1,_=""),c=a=>k(a),D=a=>L(a);return l.$$.update=()=>{if(l.$$.dirty&31){if(o.clear(),_){let a=_.toLowerCase();for(let m of n.features)JSON.stringify(m.properties).toLowerCase().includes(a)&&o.add(m.properties.scheme_reference)}else for(let a of d)o.add(a.scheme_reference);A.update(a=>{if(!a)return null;for(let m of a.features)o.has(m.properties.scheme_reference)?delete m.properties.hide_while_editing:m.properties.hide_while_editing=!0;return a}),r(3,h={area:0,route:0,crossing:0,other:0});for(let a of n==null?void 0:n.features)o.has(a.properties.scheme_reference)&&r(3,h[a.properties.intervention_type]++,h);r(2,o),r(1,_),r(4,n),r(0,d),r(3,h)}},[d,_,o,h,n,p,j,k,L,S,M,i,c,D]}class je extends le{constructor(e){super(),se(this,e,Oe,Be,oe,{})}}new je({target:document.getElementById("app")});
