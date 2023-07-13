import{S as le,i as se,s as oe,d as T,m as q,p as C,q as J,u as D,D as U,T as ae,F as ie,P as fe,e as v,c as N,t as b,f as P,j as w,k as u,g as K,n as R,Q as te,R as ne,r as y,aj as ue,v as re,z as V,x as E,O as pe,ab as me}from"./maplibre_helpers-cde732e1.js";import{L as ce,g as Z,Z as _e,e as W,t as he,I as $e,B as de,v as ge,M as be,m as we,C as ye}from"./ZoomOutMap-5a8f2e29.js";function X(l,e,r){const n=l.slice();return n[17]=e[r],n}function ke(l){let e,r=l[2].size+"",n,t,s=l[3].route+"",p,d,_=l[3].area+"",o,h,L=l[3].crossing+"",I,k,O=l[3].other+"",S,M;return{c(){e=b("Showing "),n=b(r),t=b(" schemes ("),p=b(s),d=b(" routes, "),o=b(_),h=b(` areas,
      `),I=b(L),k=b(" crossings, "),S=b(O),M=b(" other)")},m(i,c){w(i,e,c),w(i,n,c),w(i,t,c),w(i,p,c),w(i,d,c),w(i,o,c),w(i,h,c),w(i,I,c),w(i,k,c),w(i,S,c),w(i,M,c)},p(i,c){c&4&&r!==(r=i[2].size+"")&&E(n,r),c&8&&s!==(s=i[3].route+"")&&E(p,s),c&8&&_!==(_=i[3].area+"")&&E(o,_),c&8&&L!==(L=i[3].crossing+"")&&E(I,L),c&8&&O!==(O=i[3].other+"")&&E(S,O)},d(i){i&&(y(e),y(n),y(t),y(p),y(d),y(o),y(h),y(I),y(k),y(S),y(M))}}}function Y(l){let e,r;return e=new ye({props:{label:`${l[17].scheme_reference}: ${l[17].num_features} features`,$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){T(e.$$.fragment)},m(n,t){q(e,n,t),r=!0},p(n,t){const s={};t&1&&(s.label=`${n[17].scheme_reference}: ${n[17].num_features} features`),t&1048577&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(C(e.$$.fragment,n),r=!0)},o(n){J(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function ve(l){let e,r,n,t=l[17].authority_or_region+"",s,p,d,_,o=l[17].capital_scheme_id+"",h,L,I,k,O=l[17].funding_programme+"",S,M,i,c,G,a,m,j,B,$;function A(){return l[12](l[17])}function f(){return l[13](l[17])}return{c(){e=v("ul"),r=v("li"),n=b("Authority or region: "),s=b(t),p=N(),d=v("li"),_=b("Capital scheme ID: "),h=b(o),L=N(),I=v("li"),k=b("Funding programme: "),S=b(O),M=N(),i=v("li"),c=v("button"),c.textContent="Show on map",G=N(),a=v("li"),m=v("button"),m.textContent="Edit scheme",j=N(),P(c,"type","button"),P(m,"type","button")},m(g,z){w(g,e,z),u(e,r),u(r,n),u(r,s),u(e,p),u(e,d),u(d,_),u(d,h),u(e,L),u(e,I),u(I,k),u(I,S),u(e,M),u(e,i),u(i,c),u(e,G),u(e,a),u(a,m),w(g,j,z),B||($=[R(c,"click",A),R(m,"click",f)],B=!0)},p(g,z){l=g,z&1&&t!==(t=l[17].authority_or_region+"")&&E(s,t),z&1&&o!==(o=l[17].capital_scheme_id+"")&&E(h,o),z&1&&O!==(O=l[17].funding_programme+"")&&E(S,O)},d(g){g&&(y(e),y(j)),B=!1,re($)}}}function x(l){let e=l[2].has(l[17].scheme_reference),r,n,t=e&&Y(l);return{c(){t&&t.c(),r=pe()},m(s,p){t&&t.m(s,p),w(s,r,p),n=!0},p(s,p){p&5&&(e=s[2].has(s[17].scheme_reference)),e?t?(t.p(s,p),p&5&&C(t,1)):(t=Y(s),t.c(),C(t,1),t.m(r.parentNode,r)):t&&(te(),J(t,1,1,()=>{t=null}),ne())},i(s){n||(C(t),n=!0)},o(s){J(t),n=!1},d(s){s&&y(r),t&&t.d(s)}}}function Se(l){let e,r,n,t,s,p,d,_,o,h,L,I,k,O,S,M,i,c,G,a,m,j;p=new _e({props:{boundaryGeojson:l[4]}}),_=new ie({props:{label:"Load from GeoJSON",uniqueId:"load_geojson",loadFile:l[6]}}),i=new fe({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}});let B=W(l[0]),$=[];for(let f=0;f<B.length;f+=1)$[f]=x(X(l,B,f));const A=f=>J($[f],1,1,()=>{$[f]=null});return{c(){e=v("div"),r=v("button"),r.textContent="Home",n=N(),t=v("h1"),s=b(`Browse schemes
      `),T(p.$$.fragment),d=N(),T(_.$$.fragment),o=N(),h=v("div"),L=v("label"),I=b(`Filter by any field:
        `),k=v("input"),O=N(),S=v("button"),S.textContent="Clear",M=N(),T(i.$$.fragment),c=N(),G=v("ul");for(let f=0;f<$.length;f+=1)$[f].c();P(r,"type","button"),P(k,"type","text"),P(S,"type","button"),P(e,"slot","sidebar")},m(f,g){w(f,e,g),u(e,r),u(e,n),u(e,t),u(t,s),q(p,t,null),u(e,d),q(_,e,null),u(e,o),u(e,h),u(h,L),u(L,I),u(L,k),K(k,l[1]),u(h,O),u(h,S),u(e,M),q(i,e,null),u(e,c),u(e,G);for(let z=0;z<$.length;z+=1)$[z]&&$[z].m(G,null);a=!0,m||(j=[R(r,"click",l[9]),R(k,"input",l[10]),R(S,"click",l[11])],m=!0)},p(f,g){const z={};g&16&&(z.boundaryGeojson=f[4]),p.$set(z),g&2&&k.value!==f[1]&&K(k,f[1]);const H={};if(g&1048588&&(H.$$scope={dirty:g,ctx:f}),i.$set(H),g&389){B=W(f[0]);let F;for(F=0;F<B.length;F+=1){const Q=X(f,B,F);$[F]?($[F].p(Q,g),C($[F],1)):($[F]=x(Q),$[F].c(),C($[F],1),$[F].m(G,null))}for(te(),F=B.length;F<$.length;F+=1)A(F);ne()}},i(f){if(!a){C(p.$$.fragment,f),C(_.$$.fragment,f),C(i.$$.fragment,f);for(let g=0;g<B.length;g+=1)C($[g]);a=!0}},o(f){J(p.$$.fragment,f),J(_.$$.fragment,f),J(i.$$.fragment,f),$=$.filter(Boolean);for(let g=0;g<$.length;g+=1)J($[g]);a=!1},d(f){f&&y(e),D(p),D(_),D(i),ue($,f),m=!1,re(j)}}}function Ce(l){let e,r,n,t,s,p,d,_;return e=new $e({props:{schema:ee}}),n=new de({props:{style:l[5]}}),s=new ge({props:{schema:ee}}),d=new be({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Be}}),{c(){T(e.$$.fragment),r=N(),T(n.$$.fragment),t=N(),T(s.$$.fragment),p=N(),T(d.$$.fragment)},m(o,h){q(e,o,h),w(o,r,h),q(n,o,h),w(o,t,h),q(s,o,h),w(o,p,h),q(d,o,h),_=!0},p:me,i(o){_||(C(e.$$.fragment,o),C(n.$$.fragment,o),C(s.$$.fragment,o),C(d.$$.fragment,o),_=!0)},o(o){J(e.$$.fragment,o),J(n.$$.fragment,o),J(s.$$.fragment,o),J(d.$$.fragment,o),_=!1},d(o){o&&(y(r),y(t),y(p)),D(e,o),D(n,o),D(s,o),D(d,o)}}}function Oe(l){let e,r,n;return r=new he({props:{style:l[5],$$slots:{default:[Ce]},$$scope:{ctx:l}}}),{c(){e=v("div"),T(r.$$.fragment),P(e,"slot","main")},m(t,s){w(t,e,s),q(r,e,null),n=!0},p(t,s){const p={};s&1048576&&(p.$$scope={dirty:s,ctx:t}),r.$set(p)},i(t){n||(C(r.$$.fragment,t),n=!0)},o(t){J(r.$$.fragment,t),n=!1},d(t){t&&y(e),D(r)}}}function je(l){let e,r;return e=new ce({props:{$$slots:{main:[Oe],sidebar:[Se]},$$scope:{ctx:l}}}),{c(){T(e.$$.fragment)},m(n,t){q(e,n,t),r=!0},p(n,[t]){const s={};t&1048607&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(C(e.$$.fragment,n),r=!0)},o(n){J(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}const ee="v1";function Be(l){var e="<table>";for(let[r,n]of Object.entries(l))e+=`<tr><td>${r}</td><td>${n}</td></tr>`;return e+="</table>",e}function Fe(l,e,r){let n,t;U(l,Z,a=>r(4,n=a)),U(l,we,a=>r(14,t=a));let p=new URLSearchParams(window.location.search).get("style")||"streets",d=[],_="",o=new Set,h={area:0,route:0,crossing:0,other:0};ae(()=>{Z.set(null)});function L(a){try{let m=JSON.parse(a);Z.set(m),I(m),t==null||t.fitBounds(V(m),{padding:20,animate:!1})}catch(m){window.alert(`Couldn't load schemes from a file: ${m}`)}}function I(a){let m={};for(let[j,B]of Object.entries(a.schemes))m[j]={scheme_reference:j,num_features:0,...B};for(let j of a.features)m[j.properties.scheme_reference].num_features++;r(0,d=Object.values(m))}function k(a){let m={type:"FeatureCollection",features:n.features.filter(j=>j.properties.scheme_reference==a.scheme_reference)};t==null||t.fitBounds(V(m),{padding:20,animate:!1})}function O(a){let m={type:"FeatureCollection",features:n.features.filter(B=>B.properties.scheme_reference==a.scheme_reference)},j=a.authority_or_region;window.localStorage.setItem(j,JSON.stringify(m)),window.open(`scheme.html?authority=${a.authority_or_region}`,"_blank")}const S=()=>window.open("index.html");function M(){_=this.value,r(1,_)}const i=()=>r(1,_=""),c=a=>k(a),G=a=>O(a);return l.$$.update=()=>{if(l.$$.dirty&31){if(o.clear(),_){let a=_.toLowerCase();for(let m of n.features)JSON.stringify(m.properties).toLowerCase().includes(a)&&o.add(m.properties.scheme_reference)}else for(let a of d)o.add(a.scheme_reference);Z.update(a=>{if(!a)return null;for(let m of a.features)o.has(m.properties.scheme_reference)?delete m.properties.hide_while_editing:m.properties.hide_while_editing=!0;return a}),r(3,h={area:0,route:0,crossing:0,other:0});for(let a of n==null?void 0:n.features)o.has(a.properties.scheme_reference)&&r(3,h[a.properties.intervention_type]++,h);r(2,o),r(1,_),r(4,n),r(0,d),r(3,h)}},[d,_,o,h,n,p,L,k,O,S,M,i,c,G]}class Le extends le{constructor(e){super(),se(this,e,Fe,je,oe,{})}}new Le({target:document.getElementById("app")});
