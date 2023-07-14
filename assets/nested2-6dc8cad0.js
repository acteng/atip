import{S as we,i as ye,s as ke,H as N,I as B,t as g,j as y,L as F,U as ue,M as ve,a3 as Se,C as Y,G as Ce,F as je,o as ie,e as T,q as j,p as w,am as ce,r as R,d as v,v as i,O as te,J as re,w as H,k as S,y as Me,Q as me,N as Ne,A as pe,l as Be,a2 as Fe,x as Le}from"./maplibre_helpers-09c65b90.js";import{i as Oe}from"./all-cc94300b.js";import{L as Ie,g as X,Z as ze,p as Je,I as Te,B as Ee,q as Ge,M as qe,m as Ae,C as De}from"./ZoomOutMap-bbe13584.js";function _e(s,e,r){const t=s.slice();return t[18]=e[r],t}function He(s){let e;return{c(){e=w("Home")},m(r,t){v(r,e,t)},d(r){r&&S(e)}}}function $e(s){let e,r;return e=new Ne({props:{errorMessage:s[5]}}),{c(){N(e.$$.fragment)},m(t,n){B(e,t,n),r=!0},p(t,n){const o={};n&32&&(o.errorMessage=t[5]),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function Ue(s){let e;return{c(){e=w("Clear")},m(r,t){v(r,e,t)},d(r){r&&S(e)}}}function Ze(s){let e,r,t,n,o,c;return t=new Y({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),t.$on("click",s[12]),{c(){e=T("input"),r=j(),N(t.$$.fragment),R(e,"type","text"),R(e,"class","govuk-input govuk-input--width-10"),R(e,"id","filterText")},m(u,$){v(u,e,$),pe(e,s[1]),v(u,r,$),B(t,u,$),n=!0,o||(c=Be(e,"input",s[11]),o=!0)},p(u,$){$&2&&e.value!==u[1]&&pe(e,u[1]);const l={};$&2097152&&(l.$$scope={dirty:$,ctx:u}),t.$set(l)},i(u){n||(g(t.$$.fragment,u),n=!0)},o(u){y(t.$$.fragment,u),n=!1},d(u){u&&(S(e),S(r)),F(t,u),o=!1,c()}}}function de(s){let e,r;return e=new De({props:{label:`${s[18].scheme_reference}: ${s[18].num_features} features`,$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(t,n){B(e,t,n),r=!0},p(t,n){const o={};n&1&&(o.label=`${t[18].scheme_reference}: ${t[18].num_features} features`),n&2097153&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function Pe(s){let e;return{c(){e=w("Show on map")},m(r,t){v(r,e,t)},d(r){r&&S(e)}}}function Qe(s){let e;return{c(){e=w("Edit scheme")},m(r,t){v(r,e,t)},d(r){r&&S(e)}}}function Re(s){let e,r,t=s[18].authority_or_region+"",n,o,c,u,$=s[18].capital_scheme_id+"",l,p,L,U,E=s[18].funding_programme+"",O,G,h,z,q,I,D,a;function _(){return s[13](s[18])}z=new Y({props:{$$slots:{default:[Pe]},$$scope:{ctx:s}}}),z.$on("click",_);function J(){return s[14](s[18])}return I=new Y({props:{$$slots:{default:[Qe]},$$scope:{ctx:s}}}),I.$on("click",J),{c(){e=T("p"),r=w("Authority or region: "),n=w(t),o=j(),c=T("p"),u=w("Capital scheme ID: "),l=w($),p=j(),L=T("p"),U=w("Funding programme: "),O=w(E),G=j(),h=T("div"),N(z.$$.fragment),q=j(),N(I.$$.fragment),D=j(),R(h,"class","govuk-button-group")},m(m,k){v(m,e,k),i(e,r),i(e,n),v(m,o,k),v(m,c,k),i(c,u),i(c,l),v(m,p,k),v(m,L,k),i(L,U),i(L,O),v(m,G,k),v(m,h,k),B(z,h,null),i(h,q),B(I,h,null),v(m,D,k),a=!0},p(m,k){s=m,(!a||k&1)&&t!==(t=s[18].authority_or_region+"")&&H(n,t),(!a||k&1)&&$!==($=s[18].capital_scheme_id+"")&&H(l,$),(!a||k&1)&&E!==(E=s[18].funding_programme+"")&&H(O,E);const K={};k&2097152&&(K.$$scope={dirty:k,ctx:s}),z.$set(K);const Z={};k&2097152&&(Z.$$scope={dirty:k,ctx:s}),I.$set(Z)},i(m){a||(g(z.$$.fragment,m),g(I.$$.fragment,m),a=!0)},o(m){y(z.$$.fragment,m),y(I.$$.fragment,m),a=!1},d(m){m&&(S(e),S(o),S(c),S(p),S(L),S(G),S(h),S(D)),F(z),F(I)}}}function ge(s){let e=s[2].has(s[18].scheme_reference),r,t,n=e&&de(s);return{c(){n&&n.c(),r=Fe()},m(o,c){n&&n.m(o,c),v(o,r,c),t=!0},p(o,c){c&5&&(e=o[2].has(o[18].scheme_reference)),e?n?(n.p(o,c),c&5&&g(n,1)):(n=de(o),n.c(),g(n,1),n.m(r.parentNode,r)):n&&(te(),y(n,1,1,()=>{n=null}),re())},i(o){t||(g(n),t=!0)},o(o){y(n),t=!1},d(o){o&&S(r),n&&n.d(o)}}}function Ke(s){let e,r,t,n,o,c,u,$,l,p,L,U,E,O,G,h,z,q=s[2].size+"",I,D,a=s[3].route+"",_,J,m=s[3].area+"",k,K,Z=s[3].crossing+"",x,ne,V=s[3].other+"",ee,se,oe,W,A;r=new Y({props:{$$slots:{default:[He]},$$scope:{ctx:s}}}),r.$on("click",s[10]),u=new ze({props:{boundaryGeojson:s[4]}});let C=s[5]&&$e(s);p=new Ce({props:{label:"Load from GeoJSON",id:"load-geojson",loadFile:s[7]}}),O=new je({props:{label:"Filter by any field",id:"filterText",$$slots:{default:[Ze]},$$scope:{ctx:s}}});let P=ie(s[0]),b=[];for(let f=0;f<P.length;f+=1)b[f]=ge(_e(s,P,f));const be=f=>y(b[f],1,1,()=>{b[f]=null});return{c(){e=T("div"),N(r.$$.fragment),t=j(),n=T("div"),o=T("h1"),o.textContent="Browse schemes",c=j(),N(u.$$.fragment),$=j(),C&&C.c(),l=j(),N(p.$$.fragment),L=j(),U=T("br"),E=j(),N(O.$$.fragment),G=j(),h=T("p"),z=w("Showing "),I=w(q),D=w(" schemes ("),_=w(a),J=w(" routes, "),k=w(m),K=w(` areas,
      `),x=w(Z),ne=w(" crossings, "),ee=w(V),se=w(" other)"),oe=j(),W=T("ul");for(let f=0;f<b.length;f+=1)b[f].c();ce(n,"display","flex"),ce(n,"justify-content","space-between"),R(e,"slot","sidebar"),R(e,"class","govuk-prose")},m(f,d){v(f,e,d),B(r,e,null),i(e,t),i(e,n),i(n,o),i(n,c),B(u,n,null),i(e,$),C&&C.m(e,null),i(e,l),B(p,e,null),i(e,L),i(e,U),i(e,E),B(O,e,null),i(e,G),i(e,h),i(h,z),i(h,I),i(h,D),i(h,_),i(h,J),i(h,k),i(h,K),i(h,x),i(h,ne),i(h,ee),i(h,se),i(e,oe),i(e,W);for(let Q=0;Q<b.length;Q+=1)b[Q]&&b[Q].m(W,null);A=!0},p(f,d){const Q={};d&2097152&&(Q.$$scope={dirty:d,ctx:f}),r.$set(Q);const le={};d&16&&(le.boundaryGeojson=f[4]),u.$set(le),f[5]?C?(C.p(f,d),d&32&&g(C,1)):(C=$e(f),C.c(),g(C,1),C.m(e,l)):C&&(te(),y(C,1,1,()=>{C=null}),re());const ae={};if(d&2097154&&(ae.$$scope={dirty:d,ctx:f}),O.$set(ae),(!A||d&4)&&q!==(q=f[2].size+"")&&H(I,q),(!A||d&8)&&a!==(a=f[3].route+"")&&H(_,a),(!A||d&8)&&m!==(m=f[3].area+"")&&H(k,m),(!A||d&8)&&Z!==(Z=f[3].crossing+"")&&H(x,Z),(!A||d&8)&&V!==(V=f[3].other+"")&&H(ee,V),d&773){P=ie(f[0]);let M;for(M=0;M<P.length;M+=1){const fe=_e(f,P,M);b[M]?(b[M].p(fe,d),g(b[M],1)):(b[M]=ge(fe),b[M].c(),g(b[M],1),b[M].m(W,null))}for(te(),M=P.length;M<b.length;M+=1)be(M);re()}},i(f){if(!A){g(r.$$.fragment,f),g(u.$$.fragment,f),g(C),g(p.$$.fragment,f),g(O.$$.fragment,f);for(let d=0;d<P.length;d+=1)g(b[d]);A=!0}},o(f){y(r.$$.fragment,f),y(u.$$.fragment,f),y(C),y(p.$$.fragment,f),y(O.$$.fragment,f),b=b.filter(Boolean);for(let d=0;d<b.length;d+=1)y(b[d]);A=!1},d(f){f&&S(e),F(r),F(u),C&&C.d(),F(p),F(O),Me(b,f)}}}function Ve(s){let e,r,t,n,o,c,u,$;return e=new Te({props:{schema:he}}),t=new Ee({props:{style:s[6]}}),o=new Ge({props:{schema:he}}),u=new qe({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:Ye}}),{c(){N(e.$$.fragment),r=j(),N(t.$$.fragment),n=j(),N(o.$$.fragment),c=j(),N(u.$$.fragment)},m(l,p){B(e,l,p),v(l,r,p),B(t,l,p),v(l,n,p),B(o,l,p),v(l,c,p),B(u,l,p),$=!0},p:Le,i(l){$||(g(e.$$.fragment,l),g(t.$$.fragment,l),g(o.$$.fragment,l),g(u.$$.fragment,l),$=!0)},o(l){y(e.$$.fragment,l),y(t.$$.fragment,l),y(o.$$.fragment,l),y(u.$$.fragment,l),$=!1},d(l){l&&(S(r),S(n),S(c)),F(e,l),F(t,l),F(o,l),F(u,l)}}}function We(s){let e,r,t;return r=new Je({props:{style:s[6],$$slots:{default:[Ve]},$$scope:{ctx:s}}}),{c(){e=T("div"),N(r.$$.fragment),R(e,"slot","main")},m(n,o){v(n,e,o),B(r,e,null),t=!0},p(n,o){const c={};o&2097152&&(c.$$scope={dirty:o,ctx:n}),r.$set(c)},i(n){t||(g(r.$$.fragment,n),t=!0)},o(n){y(r.$$.fragment,n),t=!1},d(n){n&&S(e),F(r)}}}function Xe(s){let e,r;return e=new Ie({props:{$$slots:{main:[We],sidebar:[Ke]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(t,n){B(e,t,n),r=!0},p(t,[n]){const o={};n&2097215&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}const he="v1";function Ye(s){var e="<table>";for(let[r,t]of Object.entries(s))e+=`<tr><td>${r}</td><td>${t}</td></tr>`;return e+="</table>",e}function xe(s,e,r){let t,n;ue(s,X,a=>r(4,t=a)),ue(s,Ae,a=>r(15,n=a)),ve(()=>{Oe()});let c=new URLSearchParams(window.location.search).get("style")||"streets",u="",$=[],l="",p=new Set,L={area:0,route:0,crossing:0,other:0};Se(()=>{X.set(null)});function U(a){try{let _=JSON.parse(a);X.set(_),E(_),r(5,u=""),n==null||n.fitBounds(me(_),{padding:20,animate:!1})}catch(_){r(5,u=`Couldn't load schemes from a file: ${_}`)}}function E(a){let _={};for(let[J,m]of Object.entries(a.schemes))_[J]={scheme_reference:J,num_features:0,...m};for(let J of a.features)_[J.properties.scheme_reference].num_features++;r(0,$=Object.values(_))}function O(a){let _={type:"FeatureCollection",features:t.features.filter(J=>J.properties.scheme_reference==a.scheme_reference)};n==null||n.fitBounds(me(_),{padding:20,animate:!1})}function G(a){let _={type:"FeatureCollection",features:t.features.filter(m=>m.properties.scheme_reference==a.scheme_reference)},J=a.authority_or_region;window.localStorage.setItem(J,JSON.stringify(_)),window.open(`scheme.html?authority=${a.authority_or_region}`,"_blank")}const h=()=>window.open("index.html");function z(){l=this.value,r(1,l)}const q=()=>r(1,l=""),I=a=>O(a),D=a=>G(a);return s.$$.update=()=>{if(s.$$.dirty&31){if(p.clear(),l){let a=l.toLowerCase();for(let _ of t.features)JSON.stringify(_.properties).toLowerCase().includes(a)&&p.add(_.properties.scheme_reference)}else for(let a of $)p.add(a.scheme_reference);X.update(a=>{if(!a)return null;for(let _ of a.features)p.has(_.properties.scheme_reference)?delete _.properties.hide_while_editing:_.properties.hide_while_editing=!0;return a}),r(3,L={area:0,route:0,crossing:0,other:0});for(let a of t==null?void 0:t.features)p.has(a.properties.scheme_reference)&&r(3,L[a.properties.intervention_type]++,L);r(2,p),r(1,l),r(4,t),r(0,$),r(3,L)}},[$,l,p,L,t,u,c,U,O,G,h,z,q,I,D]}class et extends we{constructor(e){super(),ye(this,e,xe,Xe,ke,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new et({target:document.getElementById("app")});
