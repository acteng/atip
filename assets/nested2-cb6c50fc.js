import{S as H,i as Q,s as K,g as C,f as z,e as A,u as j,m as M,j as k,k as v,x as I,t as b,l as S,p as B,q as F,G as J,r as le,b as R,c as U,F as ue,o as Z,a as D,h as E,v as W,w as ce,B as ae,T as me,d as pe,al as X,aa as Y,y as q,n as P,am as _e,z as $e,M as ge,aA as he,E as de,Q as we,R as be}from"./maplibre_helpers-8febaf33.js";import{C as ie,g as G,S as x,m as fe,L as Se,Z as ve,p as ye,I as ke,B as Be,q as Te,M as je}from"./ZoomOutMap-f1c033ba.js";function Ce(r){let e=new Map;for(let[s,t]of Object.entries(r.schemes))e.set(s,{scheme_reference:s,num_features:0,authority_or_region:t.authority_or_region,capital_scheme_id:t.capital_scheme_id,funding_programme:t.funding_programme});for(let s of r.features)e.get(s.properties.scheme_reference).num_features++,delete s.properties.id,delete s.properties.authority_or_region,delete s.properties.capital_scheme_id,delete s.properties.funding_programme,delete s.properties.valid,delete s.properties.centroid_lon,delete s.properties.centroid_lat;return e}function Me(r){let e;return{c(){e=j("Clear")},m(s,t){k(s,e,t)},d(s){s&&B(e)}}}function Fe(r){let e,s,t,n,o,i;return t=new D({props:{$$slots:{default:[Me]},$$scope:{ctx:r}}}),t.$on("click",r[11]),{c(){e=A("input"),s=z(),C(t.$$.fragment),E(e,"type","text"),E(e,"class","govuk-input govuk-input--width-10"),E(e,"id","filterText")},m(a,u){k(a,e,u),W(e,r[1]),k(a,s,u),M(t,a,u),n=!0,o||(i=ce(e,"input",r[10]),o=!0)},p(a,u){u&2&&e.value!==a[1]&&W(e,a[1]);const c={};u&16384&&(c.$$scope={dirty:u,ctx:a}),t.$set(c)},i(a){n||(b(t.$$.fragment,a),n=!0)},o(a){S(t.$$.fragment,a),n=!1},d(a){a&&(B(e),B(s)),F(t,a),o=!1,i()}}}function Le(r){let e,s,t,n,o,i,a,u;function c(m){r[8](m)}let w={label:"Authority or region",id:"filterAuthority",choices:r[4],emptyOption:!0};r[2]!==void 0&&(w.value=r[2]),e=new x({props:w}),R.push(()=>U(e,"value",c));function y(m){r[9](m)}let N={label:"Funding programme",id:"filterFundingProgramme",choices:r[5],emptyOption:!0};return r[3]!==void 0&&(N.value=r[3]),n=new x({props:N}),R.push(()=>U(n,"value",y)),a=new ue({props:{label:"Any field",id:"filterText",$$slots:{default:[Fe]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),t=z(),C(n.$$.fragment),i=z(),C(a.$$.fragment)},m(m,p){M(e,m,p),k(m,t,p),M(n,m,p),k(m,i,p),M(a,m,p),u=!0},p(m,p){const _={};p&16&&(_.choices=m[4]),!s&&p&4&&(s=!0,_.value=m[2],Z(()=>s=!1)),e.$set(_);const d={};p&32&&(d.choices=m[5]),!o&&p&8&&(o=!0,d.value=m[3],Z(()=>o=!1)),n.$set(d);const g={};p&16386&&(g.$$scope={dirty:p,ctx:m}),a.$set(g)},i(m){u||(b(e.$$.fragment,m),b(n.$$.fragment,m),b(a.$$.fragment,m),u=!0)},o(m){S(e.$$.fragment,m),S(n.$$.fragment,m),S(a.$$.fragment,m),u=!1},d(m){m&&(B(t),B(i)),F(e,m),F(n,m),F(a,m)}}}function Ne(r){let e,s,t,n,o=r[0].size+"",i,a,u=r[6].route+"",c,w,y=r[6].area+"",N,m,p=r[6].crossing+"",_,d,g=r[6].other+"",h,T,f;return e=new ie({props:{label:"Filters",$$slots:{default:[Le]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),s=z(),t=A("p"),n=j("Showing "),i=j(o),a=j(" schemes ("),c=j(u),w=j(" routes, "),N=j(y),m=j(` areas,
  `),_=j(p),d=j(" crossings, "),h=j(g),T=j(" other)")},m(l,$){M(e,l,$),k(l,s,$),k(l,t,$),v(t,n),v(t,i),v(t,a),v(t,c),v(t,w),v(t,N),v(t,m),v(t,_),v(t,d),v(t,h),v(t,T),f=!0},p(l,[$]){const O={};$&16446&&(O.$$scope={dirty:$,ctx:l}),e.$set(O),(!f||$&1)&&o!==(o=l[0].size+"")&&I(i,o),(!f||$&64)&&u!==(u=l[6].route+"")&&I(c,u),(!f||$&64)&&y!==(y=l[6].area+"")&&I(N,y),(!f||$&64)&&p!==(p=l[6].crossing+"")&&I(_,p),(!f||$&64)&&g!==(g=l[6].other+"")&&I(h,g)},i(l){f||(b(e.$$.fragment,l),f=!0)},o(l){S(e.$$.fragment,l),f=!1},d(l){l&&(B(s),B(t)),F(e,l)}}}function ze(r,e,s){let t;J(r,G,g=>s(12,t=g));let{schemes:n}=e,{schemesToBeShown:o=new Set}=e,i="",a=[],u="",c=[],w="",y={area:0,route:0,crossing:0,other:0};le(()=>{let g=new Set,h=new Set;for(let T of n.values())T.authority_or_region&&g.add(T.authority_or_region),T.funding_programme&&h.add(T.funding_programme);s(4,a=Array.from(g.entries())),a.sort(),s(5,c=Array.from(h.entries())),c.sort()});function N(g,h,T){let f=g.toLowerCase(),l=$=>{if(f&&!JSON.stringify($.properties).toLowerCase().includes(f))return!1;if(h||T){let O=n.get($.properties.scheme_reference);if(h&&O.authority_or_region!=h||T&&O.funding_programme!=T)return!1}return!0};s(0,o=new Set(t.features.filter(l).map($=>$.properties.scheme_reference))),s(6,y={area:0,route:0,crossing:0,other:0}),G.update($=>{for(let O of $.features)o.has(O.properties.scheme_reference)?(delete O.properties.hide_while_editing,s(6,y[O.properties.intervention_type]++,y)):O.properties.hide_while_editing=!0;return $}),s(6,y)}function m(g){u=g,s(2,u)}function p(g){w=g,s(3,w)}function _(){i=this.value,s(1,i)}const d=()=>s(1,i="");return r.$$set=g=>{"schemes"in g&&s(7,n=g.schemes),"schemesToBeShown"in g&&s(0,o=g.schemesToBeShown)},r.$$.update=()=>{r.$$.dirty&14&&N(i,u,w)},[o,i,u,w,a,c,y,n,m,p,_,d]}class Oe extends H{constructor(e){super(),Q(this,e,ze,Ne,K,{schemes:7,schemesToBeShown:0})}}function Ae(r){let e;return{c(){e=j("Show on map")},m(s,t){k(s,e,t)},d(s){s&&B(e)}}}function Ie(r){let e;return{c(){e=j("Edit scheme")},m(s,t){k(s,e,t)},d(s){s&&B(e)}}}function Ee(r){let e,s,t=r[0].authority_or_region+"",n,o,i,a,u=r[0].capital_scheme_id+"",c,w,y,N,m=r[0].funding_programme+"",p,_,d,g,h,T,f;return g=new D({props:{$$slots:{default:[Ae]},$$scope:{ctx:r}}}),g.$on("click",r[1]),T=new D({props:{$$slots:{default:[Ie]},$$scope:{ctx:r}}}),T.$on("click",r[2]),{c(){e=A("p"),s=j("Authority or region: "),n=j(t),o=z(),i=A("p"),a=j("Capital scheme ID: "),c=j(u),w=z(),y=A("p"),N=j("Funding programme: "),p=j(m),_=z(),d=A("div"),C(g.$$.fragment),h=z(),C(T.$$.fragment),E(d,"class","govuk-button-group")},m(l,$){k(l,e,$),v(e,s),v(e,n),k(l,o,$),k(l,i,$),v(i,a),v(i,c),k(l,w,$),k(l,y,$),v(y,N),v(y,p),k(l,_,$),k(l,d,$),M(g,d,null),v(d,h),M(T,d,null),f=!0},p(l,$){(!f||$&1)&&t!==(t=l[0].authority_or_region+"")&&I(n,t),(!f||$&1)&&u!==(u=l[0].capital_scheme_id+"")&&I(c,u),(!f||$&1)&&m!==(m=l[0].funding_programme+"")&&I(p,m);const O={};$&32&&(O.$$scope={dirty:$,ctx:l}),g.$set(O);const L={};$&32&&(L.$$scope={dirty:$,ctx:l}),T.$set(L)},i(l){f||(b(g.$$.fragment,l),b(T.$$.fragment,l),f=!0)},o(l){S(g.$$.fragment,l),S(T.$$.fragment,l),f=!1},d(l){l&&(B(e),B(o),B(i),B(w),B(y),B(_),B(d)),F(g),F(T)}}}function Ge(r){let e,s;return e=new ie({props:{label:`${r[0].scheme_reference}: ${r[0].num_features} features`,$$slots:{default:[Ee]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},m(t,n){M(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.label=`${t[0].scheme_reference}: ${t[0].num_features} features`),n&33&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Je(r,e,s){let t,n;J(r,G,u=>s(3,t=u)),J(r,fe,u=>s(4,n=u));let{scheme:o}=e;function i(){let u={type:"FeatureCollection",features:t.features.filter(c=>c.properties.scheme_reference==o.scheme_reference)};n==null||n.fitBounds(ae(u),{padding:20,animate:!1})}function a(){let u={type:"FeatureCollection",features:t.features.filter(w=>w.properties.scheme_reference==o.scheme_reference)},c=o.authority_or_region;window.localStorage.setItem(c,JSON.stringify(u)),window.open(`scheme.html?authority=${o.authority_or_region}`,"_blank")}return r.$$set=u=>{"scheme"in u&&s(0,o=u.scheme)},[o,i,a]}class qe extends H{constructor(e){super(),Q(this,e,Je,Ge,K,{scheme:0})}}function ee(r,e,s){const t=r.slice();return t[11]=e[s],t}function Pe(r){let e;return{c(){e=j("Home")},m(s,t){k(s,e,t)},d(s){s&&B(e)}}}function te(r){let e,s;return e=new de({props:{errorMessage:r[0]}}),{c(){C(e.$$.fragment)},m(t,n){M(e,t,n),s=!0},p(t,n){const o={};n&1&&(o.errorMessage=t[0]),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function se(r){let e,s,t;function n(i){r[8](i)}let o={schemes:r[1]};return r[2]!==void 0&&(o.schemesToBeShown=r[2]),e=new Oe({props:o}),R.push(()=>U(e,"schemesToBeShown",n)),{c(){C(e.$$.fragment)},m(i,a){M(e,i,a),t=!0},p(i,a){const u={};a&2&&(u.schemes=i[1]),!s&&a&4&&(s=!0,u.schemesToBeShown=i[2],Z(()=>s=!1)),e.$set(u)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){S(e.$$.fragment,i),t=!1},d(i){F(e,i)}}}function ne(r){let e,s;return e=new qe({props:{scheme:r[11]}}),{c(){C(e.$$.fragment)},m(t,n){M(e,t,n),s=!0},p(t,n){const o={};n&2&&(o.scheme=t[11]),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function re(r){let e=r[2].has(r[11].scheme_reference),s,t,n=e&&ne(r);return{c(){n&&n.c(),s=we()},m(o,i){n&&n.m(o,i),k(o,s,i),t=!0},p(o,i){i&6&&(e=o[2].has(o[11].scheme_reference)),e?n?(n.p(o,i),i&6&&b(n,1)):(n=ne(o),n.c(),b(n,1),n.m(s.parentNode,s)):n&&(q(),S(n,1,1,()=>{n=null}),P())},i(o){t||(b(n),t=!0)},o(o){S(n),t=!1},d(o){o&&B(s),n&&n.d(o)}}}function De(r){let e,s,t,n,o,i,a,u,c,w,y,N,m,p;s=new D({props:{$$slots:{default:[Pe]},$$scope:{ctx:r}}}),s.$on("click",r[7]),a=new ve({props:{boundaryGeojson:r[3]}});let _=r[0]&&te(r);w=new pe({props:{label:"Load from GeoJSON",id:"load-geojson",loadFile:r[5]}});let d=r[1].size>0&&se(r),g=X(r[1].values()),h=[];for(let f=0;f<g.length;f+=1)h[f]=re(ee(r,g,f));const T=f=>S(h[f],1,1,()=>{h[f]=null});return{c(){e=A("div"),C(s.$$.fragment),t=z(),n=A("div"),o=A("h1"),o.textContent="Browse schemes",i=z(),C(a.$$.fragment),u=z(),_&&_.c(),c=z(),C(w.$$.fragment),y=z(),d&&d.c(),N=z(),m=A("ul");for(let f=0;f<h.length;f+=1)h[f].c();Y(n,"display","flex"),Y(n,"justify-content","space-between"),E(e,"slot","sidebar"),E(e,"class","govuk-prose")},m(f,l){k(f,e,l),M(s,e,null),v(e,t),v(e,n),v(n,o),v(n,i),M(a,n,null),v(e,u),_&&_.m(e,null),v(e,c),M(w,e,null),v(e,y),d&&d.m(e,null),v(e,N),v(e,m);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(m,null);p=!0},p(f,l){const $={};l&16384&&($.$$scope={dirty:l,ctx:f}),s.$set($);const O={};if(l&8&&(O.boundaryGeojson=f[3]),a.$set(O),f[0]?_?(_.p(f,l),l&1&&b(_,1)):(_=te(f),_.c(),b(_,1),_.m(e,c)):_&&(q(),S(_,1,1,()=>{_=null}),P()),f[1].size>0?d?(d.p(f,l),l&2&&b(d,1)):(d=se(f),d.c(),b(d,1),d.m(e,N)):d&&(q(),S(d,1,1,()=>{d=null}),P()),l&6){g=X(f[1].values());let L;for(L=0;L<g.length;L+=1){const V=ee(f,g,L);h[L]?(h[L].p(V,l),b(h[L],1)):(h[L]=re(V),h[L].c(),b(h[L],1),h[L].m(m,null))}for(q(),L=g.length;L<h.length;L+=1)T(L);P()}},i(f){if(!p){b(s.$$.fragment,f),b(a.$$.fragment,f),b(_),b(w.$$.fragment,f),b(d);for(let l=0;l<g.length;l+=1)b(h[l]);p=!0}},o(f){S(s.$$.fragment,f),S(a.$$.fragment,f),S(_),S(w.$$.fragment,f),S(d),h=h.filter(Boolean);for(let l=0;l<h.length;l+=1)S(h[l]);p=!1},d(f){f&&B(e),F(s),F(a),_&&_.d(),F(w),d&&d.d(),_e(h,f)}}}function Re(r){let e,s,t,n,o,i,a,u;return e=new ke({props:{schema:oe}}),t=new Be({props:{style:r[4]}}),o=new Te({props:{schema:oe}}),a=new je({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:r[6]}}),{c(){C(e.$$.fragment),s=z(),C(t.$$.fragment),n=z(),C(o.$$.fragment),i=z(),C(a.$$.fragment)},m(c,w){M(e,c,w),k(c,s,w),M(t,c,w),k(c,n,w),M(o,c,w),k(c,i,w),M(a,c,w),u=!0},p:be,i(c){u||(b(e.$$.fragment,c),b(t.$$.fragment,c),b(o.$$.fragment,c),b(a.$$.fragment,c),u=!0)},o(c){S(e.$$.fragment,c),S(t.$$.fragment,c),S(o.$$.fragment,c),S(a.$$.fragment,c),u=!1},d(c){c&&(B(s),B(n),B(i)),F(e,c),F(t,c),F(o,c),F(a,c)}}}function Ue(r){let e,s,t;return s=new ye({props:{style:r[4],$$slots:{default:[Re]},$$scope:{ctx:r}}}),{c(){e=A("div"),C(s.$$.fragment),E(e,"slot","main")},m(n,o){k(n,e,o),M(s,e,null),t=!0},p(n,o){const i={};o&16384&&(i.$$scope={dirty:o,ctx:n}),s.$set(i)},i(n){t||(b(s.$$.fragment,n),t=!0)},o(n){S(s.$$.fragment,n),t=!1},d(n){n&&B(e),F(s)}}}function Ze(r){let e,s;return e=new Se({props:{$$slots:{main:[Ue],sidebar:[De]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},m(t,n){M(e,t,n),s=!0},p(t,[n]){const o={};n&16399&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}const oe="v1";function He(r,e,s){let t,n;J(r,fe,p=>s(9,t=p)),J(r,G,p=>s(3,n=p)),le(()=>{$e()});let i=new URLSearchParams(window.location.search).get("style")||"streets",a="",u=new Map,c=new Set;me(()=>{G.set(ge())});function w(p){try{let _=JSON.parse(p);s(1,u=Ce(_)),G.set(_),s(0,a=""),t==null||t.fitBounds(ae(_),{padding:20,animate:!1})}catch(_){s(0,a=`Couldn't load schemes from a file: ${_}`)}}function y(p){var _='<div class="govuk-prose" style="max-width: 30vw;">';return _+=`<h2>${p.name} (${p.intervention_type})</h2>`,_+=`<p>Scheme reference: ${p.scheme_reference}</p>`,p.length_meters&&(_+=`<p>Length: ${he(p.length_meters)}</p>`),p.description&&(_+=`<p>${p.description}</p>`),_}const N=()=>window.open("index.html");function m(p){c=p,s(2,c)}return[a,u,c,n,i,w,y,N,m]}class Qe extends H{constructor(e){super(),Q(this,e,He,Ze,K,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new Qe({target:document.getElementById("app")});
