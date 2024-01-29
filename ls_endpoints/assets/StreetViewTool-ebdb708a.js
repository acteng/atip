import{S as F,i as K,s as N,X as we,e as v,h as u,j as C,Y as ve,Z as pe,_ as Me,t as p,n as S,o as L,k as w,d as Z,$ as Dt,w as U,H as Le,b3 as jt,aY as We,F as Gt,g as D,m as j,p as G,E as Ht,a7 as ze,I as Be,b9 as Ot,ba as xe,aQ as Ft,bb as Kt,v as Ce,u as $,D as he,ai as Nt,ae as Fe,bc as Qt,b as Ke,c as gt,l as ht,q as Ee,aV as $e,bd as ce,W as A,be as ae,ab as X,b8 as Ue,bf as Jt,J as _e,K as ge,a2 as Yt,P as bt,a8 as Xt,a9 as xt,r as $t,bg as el,a4 as tl,at as et,au as Ve,bh as ll,bi as nl,aW as sl,aR as tt,bj as il,a as yt,R as rl}from"./index-f51ca7a5.js";const ol=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function al(n){let e,t;const l=n[1].default,s=we(l,n,n[0],null);return{c(){e=v("div"),s&&s.c(),u(e,"class","govuk-button-group")},m(i,r){C(i,e,r),s&&s.m(e,null),t=!0},p(i,[r]){s&&s.p&&(!t||r&1)&&ve(s,l,i,i[0],t?Me(l,i[0],r,null):pe(i[0]),null)},i(i){t||(p(s,i),t=!0)},o(i){S(s,i),t=!1},d(i){i&&L(e),s&&s.d(i)}}}function cl(n,e,t){let{$$slots:l={},$$scope:s}=e;return n.$$set=i=>{"$$scope"in i&&t(0,s=i.$$scope)},[s,l]}class hn extends F{constructor(e){super(),K(this,e,cl,al,N,{})}}function ul(n){let e,t,l;const s=n[3].default,i=we(s,n,n[2],null);return{c(){e=v("fieldset"),t=v("div"),i&&i.c(),u(t,"class",n[0]),u(t,"data-module","govuk-checkboxes"),u(e,"class","govuk-fieldset")},m(r,o){C(r,e,o),w(e,t),i&&i.m(t,null),l=!0},p(r,[o]){i&&i.p&&(!l||o&4)&&ve(i,s,r,r[2],l?Me(s,r[2],o,null):pe(r[2]),null)},i(r){l||(p(i,r),l=!0)},o(r){S(i,r),l=!1},d(r){r&&L(e),i&&i.d(r)}}}function fl(n,e,t){let{$$slots:l={},$$scope:s}=e,{small:i=!1}=e,r=i?"govuk-checkboxes--small":"govuk-checkboxes";return n.$$set=o=>{"small"in o&&t(1,i=o.small),"$$scope"in o&&t(2,s=o.$$scope)},[r,i,s,l]}class bn extends F{constructor(e){super(),K(this,e,fl,ul,N,{small:1})}}const dl=n=>({}),lt=n=>({});function ml(n){let e,t,l,s,i,r,o,f,d;const a=n[5].default,m=we(a,n,n[4],null),_=n[5].right,k=we(_,n,n[4],lt);return{c(){e=v("div"),t=v("input"),l=Z(),s=v("label"),m&&m.c(),i=Z(),r=v("span"),k&&k.c(),u(t,"type","checkbox"),u(t,"class","govuk-checkboxes__input"),u(t,"id",n[1]),u(s,"class","govuk-label govuk-checkboxes__label"),u(s,"for",n[1]),u(s,"title",n[2]),Dt(r,"float","right"),u(e,"class","govuk-checkboxes__item"),u(e,"style",n[3])},m(b,h){C(b,e,h),w(e,t),t.checked=n[0],w(e,l),w(e,s),m&&m.m(s,null),w(e,i),w(e,r),k&&k.m(r,null),o=!0,f||(d=[U(t,"change",n[7]),U(t,"change",n[6])],f=!0)},p(b,[h]){(!o||h&2)&&u(t,"id",b[1]),h&1&&(t.checked=b[0]),m&&m.p&&(!o||h&16)&&ve(m,a,b,b[4],o?Me(a,b[4],h,null):pe(b[4]),null),(!o||h&2)&&u(s,"for",b[1]),(!o||h&4)&&u(s,"title",b[2]),k&&k.p&&(!o||h&16)&&ve(k,_,b,b[4],o?Me(_,b[4],h,dl):pe(b[4]),lt)},i(b){o||(p(m,b),p(k,b),o=!0)},o(b){S(m,b),S(k,b),o=!1},d(b){b&&L(e),m&&m.d(b),k&&k.d(b),f=!1,Le(d)}}}function _l(n,e,t){let{$$slots:l={},$$scope:s}=e;const i=jt(l);let{id:r}=e,{checked:o}=e,{hint:f=null}=e,a=i.right!==void 0?"float: none":"";function m(k){We.call(this,n,k)}function _(){o=this.checked,t(0,o)}return n.$$set=k=>{"id"in k&&t(1,r=k.id),"checked"in k&&t(0,o=k.checked),"hint"in k&&t(2,f=k.hint),"$$scope"in k&&t(4,s=k.$$scope)},[o,r,f,a,s,l,m,_]}class yn extends F{constructor(e){super(),K(this,e,_l,ml,N,{id:1,checked:0,hint:2})}}function nt(n,e,t){const l=n.slice();return l[9]=e[t][0],l[10]=e[t][1],l}function st(n){let e;return{c(){e=v("option"),e.__value="",Ce(e,e.__value)},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function it(n){let e,t=n[10]+"",l,s;return{c(){e=v("option"),l=$(t),e.__value=s=n[9],Ce(e,e.__value)},m(i,r){C(i,e,r),w(e,l)},p(i,r){r&8&&t!==(t=i[10]+"")&&he(l,t),r&8&&s!==(s=i[9])&&(e.__value=s,Ce(e,e.__value))},d(i){i&&L(e)}}}function gl(n){let e,t,l,s,i,r,o;e=new Ht({props:{errorMessage:n[6]}});let f=n[4]&&st(),d=ze(n[3]),a=[];for(let m=0;m<d.length;m+=1)a[m]=it(nt(n,d,m));return{c(){D(e.$$.fragment),t=Z(),l=v("select"),f&&f.c(),s=Be();for(let m=0;m<a.length;m+=1)a[m].c();u(l,"class","govuk-select"),u(l,"id",n[2]),l.disabled=n[5],n[0]===void 0&&Ot(()=>n[8].call(l))},m(m,_){j(e,m,_),C(m,t,_),C(m,l,_),f&&f.m(l,null),w(l,s);for(let k=0;k<a.length;k+=1)a[k]&&a[k].m(l,null);xe(l,n[0],!0),i=!0,r||(o=[U(l,"change",n[8]),U(l,"change",n[7])],r=!0)},p(m,_){const k={};if(_&64&&(k.errorMessage=m[6]),e.$set(k),m[4]?f||(f=st(),f.c(),f.m(l,s)):f&&(f.d(1),f=null),_&8){d=ze(m[3]);let b;for(b=0;b<d.length;b+=1){const h=nt(m,d,b);a[b]?a[b].p(h,_):(a[b]=it(h),a[b].c(),a[b].m(l,null))}for(;b<a.length;b+=1)a[b].d(1);a.length=d.length}(!i||_&4)&&u(l,"id",m[2]),(!i||_&32)&&(l.disabled=m[5]),_&9&&xe(l,m[0])},i(m){i||(p(e.$$.fragment,m),i=!0)},o(m){S(e.$$.fragment,m),i=!1},d(m){m&&(L(t),L(l)),G(e,m),f&&f.d(),Ft(a,m),r=!1,Le(o)}}}function hl(n){let e,t;return e=new Gt({props:{label:n[1],id:n[2],$$slots:{default:[gl]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p(l,[s]){const i={};s&2&&(i.label=l[1]),s&4&&(i.id=l[2]),s&8317&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function bl(n,e,t){let{label:l}=e,{id:s}=e,{choices:i}=e,{emptyOption:r=!1}=e,{disabled:o=!1}=e,{errorMessage:f=""}=e,{value:d}=e;function a(_){We.call(this,n,_)}function m(){d=Kt(this),t(0,d),t(3,i)}return n.$$set=_=>{"label"in _&&t(1,l=_.label),"id"in _&&t(2,s=_.id),"choices"in _&&t(3,i=_.choices),"emptyOption"in _&&t(4,r=_.emptyOption),"disabled"in _&&t(5,o=_.disabled),"errorMessage"in _&&t(6,f=_.errorMessage),"value"in _&&t(0,d=_.value)},[d,l,s,i,r,o,f,a,m]}class yl extends F{constructor(e){super(),K(this,e,bl,hl,N,{label:1,id:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}function kn(n){return{id:n,beforeId:kl(n)}}function kl(n){let e=Nt(Fe);if(!e){console.warn(`getBeforeId(${n}) called before map is ready. Z-ordering may be incorrect.`);return}let t,l=!1;for(let s=rt.length-1;s>=0;s--){let i=rt[s];if(i==n){l=!0;break}e.getLayer(i)&&(t=i)}if(!l)throw new Error(`Layer ID ${n} not defined in layerZorder`);return t}const rt=["parliamentary_constituencies","parliamentary_constituencies-outline","wards","wards-outline","combined_authorities","combined_authorities-outline","local_authority_districts","local_authority_districts-outline","local_planning_authorities","local_planning_authorities-outline","census_output_areas","census_output_areas-outline","imd","imd-outline","pollution","mrn","bus_routes","national_cycle_network","cycle_paths","pct_commute","pct_school","road_widths","road_speeds","pavement_widths","schools","hospitals","sports_spaces","railway_stations","cycle_parking","crossings","vehicle_counts","stats19","interventions-coverage-polygons-outlines","interventions-polygons","interventions-polygons-outlines","hover-polygons","hover-lines","interventions-lines","interventions-lines-endpoints","hover-points","interventions-points","criticals-clusters","criticals-counts","criticals-points","edit-polygon-fill","edit-polygon-lines","edit-polygon-vertices","draw-split-route","draw-street-view","route-points","route-lines","route-polygons","road_label","Road labels","boundary","measurement-line","georeferenced-image","cover-interactive-layers"];function wl(n){let e,t,l;function s(r){n[2](r)}let i={label:"Basemap",id:"basemap",choices:Qt(),disabled:n[0]};return n[1]!==void 0&&(i.value=n[1]),e=new yl({props:i}),Ke.push(()=>gt(e,"value",s)),{c(){D(e.$$.fragment)},m(r,o){j(e,r,o),l=!0},p(r,[o]){const f={};o&1&&(f.disabled=r[0]),!t&&o&2&&(t=!0,f.value=r[1],ht(()=>t=!1)),e.$set(f)},i(r){l||(p(e.$$.fragment,r),l=!0)},o(r){S(e.$$.fragment,r),l=!1},d(r){G(e,r)}}}function vl(n,e,t){let l;Ee(n,$e,r=>t(1,l=r));let{disabled:s=!1}=e;function i(r){l=r,$e.set(l)}return n.$$set=r=>{"disabled"in r&&t(0,s=r.disabled)},[s,l,i]}class wn extends F{constructor(e){super(),K(this,e,vl,wl,N,{disabled:0})}}function pl(n){let e,t,l,s,i,r,o;const f=n[3].default,d=we(f,n,n[2],null);return{c(){e=v("details"),t=v("summary"),l=v("span"),s=$(n[0]),i=Z(),r=v("div"),d&&d.c(),u(l,"class","govuk-details__summary-text"),u(t,"class","govuk-details__summary"),u(r,"class","govuk-details__text"),e.open=n[1],u(e,"class","govuk-details"),u(e,"data-module","govuk-details")},m(a,m){C(a,e,m),w(e,t),w(t,l),w(l,s),w(e,i),w(e,r),d&&d.m(r,null),o=!0},p(a,[m]){(!o||m&1)&&he(s,a[0]),d&&d.p&&(!o||m&4)&&ve(d,f,a,a[2],o?Me(f,a[2],m,null):pe(a[2]),null),(!o||m&2)&&(e.open=a[1])},i(a){o||(p(d,a),o=!0)},o(a){S(d,a),o=!1},d(a){a&&L(e),d&&d.d(a)}}}function Ml(n,e,t){let{$$slots:l={},$$scope:s}=e,{label:i}=e,{open:r=!1}=e;return n.$$set=o=>{"label"in o&&t(0,i=o.label),"open"in o&&t(1,r=o.open),"$$scope"in o&&t(2,s=o.$$scope)},[i,r,s,l]}class Tl extends F{constructor(e){super(),K(this,e,Ml,pl,N,{label:0,open:1})}}function Cl(n){let e,t;return{c(){e=ce("svg"),t=ce("path"),u(t,"d","M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"),u(e,"viewBox","0 0 60.006 21.412"),u(e,"width","14"),u(e,"height","20"),u(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class Ll extends F{constructor(e){super(),K(this,e,null,Cl,N,{})}}function Bl(n){let e,t;return{c(){e=v("img"),X(e.src,t=n[3]+"area.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"area.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&L(e)}}}function Sl(n){let e,t;return{c(){e=v("img"),X(e.src,t=n[3]+"poi.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"poi.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&L(e)}}}function Rl(n){let e,t;return{c(){e=v("img"),X(e.src,t=n[3]+"postal_code.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"postal_code.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&L(e)}}}function Il(n){let e,t;return{c(){e=v("img"),X(e.src,t=n[3]+"street.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"street.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&L(e)}}}function Pl(n){let e,t;return{c(){e=v("img"),X(e.src,t=n[3]+"road.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"road.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&L(e)}}}function Vl(n){let e,t;return{c(){e=v("img"),X(e.src,t=n[3]+"housenumber.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"housenumber.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&L(e)}}}function Wl(n){let e,t,l,s;return{c(){e=v("img"),X(e.src,t=n[5])||u(e,"src",t),u(e,"alt",n[4]),u(e,"class","svelte-ltkwvy")},m(i,r){C(i,e,r),l||(s=U(e,"error",n[12]),l=!0)},p(i,r){r&32&&!X(e.src,t=i[5])&&u(e,"src",t),r&16&&u(e,"alt",i[4])},d(i){i&&L(e),l=!1,s()}}}function ot(n){let e,t;return{c(){e=v("span"),t=$(n[6]),u(e,"class","secondary svelte-ltkwvy")},m(l,s){C(l,e,s),w(e,t)},p(l,s){s&64&&he(t,l[6])},d(l){l&&L(e)}}}function zl(n){var se,H;let e,t,l,s,i,r,o,f,d=n[0].place_name.replace(/,.*/,"")+"",a,m,_=n[2]==="always"||n[2]&&!n[0].address&&((se=n[0].properties)==null?void 0:se.kind)!=="road"&&((H=n[0].properties)==null?void 0:H.kind)!=="road_relation"&&!n[0].id.startsWith("address.")&&!n[0].id.startsWith("postal_code.")&&(!n[0].id.startsWith("poi.")||!n[5]),k,b,h=n[0].place_name.replace(/[^,]*,?\s*/,"")+"",V,q,M;function O(T,R){var ee,g;return R&1&&(t=null),R&1&&(l=null),R&1&&(s=null),T[5]?Wl:T[0].address?Vl:((ee=T[0].properties)==null?void 0:ee.kind)==="road"||((g=T[0].properties)==null?void 0:g.kind)==="road_relation"?Pl:(t==null&&(t=!!T[0].id.startsWith("address.")),t?Il:(l==null&&(l=!!T[0].id.startsWith("postal_code.")),l?Rl:(s==null&&(s=!!T[0].id.startsWith("poi.")),s?Sl:Bl)))}let Q=O(n,-1),y=Q(n),B=_&&ot(n);return{c(){e=v("li"),y.c(),i=Z(),r=v("span"),o=v("span"),f=v("span"),a=$(d),m=Z(),B&&B.c(),k=Z(),b=v("span"),V=$(h),u(f,"class","primary svelte-ltkwvy"),u(o,"class","svelte-ltkwvy"),u(b,"class","line2 svelte-ltkwvy"),u(r,"class","texts svelte-ltkwvy"),u(e,"tabindex","0"),u(e,"data-selected",n[1]),u(e,"class","svelte-ltkwvy"),ae(e,"selected",n[1])},m(T,R){C(T,e,R),y.m(e,null),w(e,i),w(e,r),w(r,o),w(o,f),w(f,a),w(o,m),B&&B.m(o,null),w(r,k),w(r,b),w(b,V),q||(M=[U(e,"mouseenter",n[10]),U(e,"focus",n[11])],q=!0)},p(T,[R]){var ee,g;Q===(Q=O(T,R))&&y?y.p(T,R):(y.d(1),y=Q(T),y&&(y.c(),y.m(e,i))),R&1&&d!==(d=T[0].place_name.replace(/,.*/,"")+"")&&he(a,d),R&37&&(_=T[2]==="always"||T[2]&&!T[0].address&&((ee=T[0].properties)==null?void 0:ee.kind)!=="road"&&((g=T[0].properties)==null?void 0:g.kind)!=="road_relation"&&!T[0].id.startsWith("address.")&&!T[0].id.startsWith("postal_code.")&&(!T[0].id.startsWith("poi.")||!T[5])),_?B?B.p(T,R):(B=ot(T),B.c(),B.m(o,null)):B&&(B.d(1),B=null),R&1&&h!==(h=T[0].place_name.replace(/[^,]*,?\s*/,"")+"")&&he(V,h),R&2&&u(e,"data-selected",T[1]),R&2&&ae(e,"selected",T[1])},i:A,o:A,d(T){T&&L(e),y.d(),B&&B.d(),q=!1,Le(M)}}}function El(n,e,t){var q;let l,s,{feature:i}=e,{selected:r=!1}=e,{showPlaceType:o}=e,{missingIconsCache:f}=e,{iconsBaseUrl:d}=e;const a=(q=i.properties)==null?void 0:q.categories;let m,_;function k(M){_&&f.add(_),t(9,l--,l)}function b(M){We.call(this,n,M)}function h(M){We.call(this,n,M)}const V=M=>k(M.currentTarget);return n.$$set=M=>{"feature"in M&&t(0,i=M.feature),"selected"in M&&t(1,r=M.selected),"showPlaceType"in M&&t(2,o=M.showPlaceType),"missingIconsCache"in M&&t(8,f=M.missingIconsCache),"iconsBaseUrl"in M&&t(3,d=M.iconsBaseUrl)},n.$$.update=()=>{var M,O,Q,y;if(n.$$.dirty&824)do t(9,l--,l),t(4,m=a==null?void 0:a[l]),t(5,_=m?d+m.replace(/ /g,"_")+".svg":void 0);while(l>-1&&(!_||f.has(_)));n.$$.dirty&1&&t(6,s=i.id.startsWith("poi.")?(O=(M=i.properties)==null?void 0:M.categories)==null?void 0:O.join(", "):((y=(Q=i.properties)==null?void 0:Q.place_type_name)==null?void 0:y[0])??i.place_type[0])},t(9,l=(a==null?void 0:a.length)??0),[i,r,o,d,m,_,s,k,f,l,b,h,V]}class Ul extends F{constructor(e){super(),K(this,e,El,zl,N,{feature:0,selected:1,showPlaceType:2,missingIconsCache:8,iconsBaseUrl:3})}}function Zl(n){let e;return{c(){e=v("div"),e.innerHTML='<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>',u(e,"class","svelte-7cmwmc")},m(t,l){C(t,e,l)},p:A,i:A,o:A,d(t){t&&L(e)}}}class Al extends F{constructor(e){super(),K(this,e,null,Zl,N,{})}}function ql(n){let e,t;return{c(){e=ce("svg"),t=ce("path"),u(t,"d","M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"),u(e,"width","14"),u(e,"height","14"),u(e,"viewBox","0 0 15 15"),u(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class Dl extends F{constructor(e){super(),K(this,e,null,ql,N,{})}}function jl(n){let e,t;return{c(){e=ce("svg"),t=ce("path"),u(t,"d","M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"),u(e,"viewBox","0 0 14 14"),u(e,"width","13"),u(e,"height","13"),u(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class kt extends F{constructor(e){super(),K(this,e,null,jl,N,{})}}function Gl(n){let e,t;return{c(){e=ce("svg"),t=ce("path"),u(t,"d","M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"),u(e,"viewBox","0 0 30 30"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","svelte-d2loi5")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class wt extends F{constructor(e){super(),K(this,e,null,Gl,N,{})}}function at(n,e,t){const l=n.slice();return l[75]=e[t],l[77]=t,l}function ct(n){let e,t;return e=new Al({}),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function ut(n){let e,t,l,s,i;return t=new Ll({}),{c(){e=v("button"),D(t.$$.fragment),u(e,"type","button"),u(e,"title",n[9]),u(e,"class","svelte-1r7dvt7"),ae(e,"active",n[0])},m(r,o){C(r,e,o),j(t,e,null),l=!0,s||(i=U(e,"click",n[61]),s=!0)},p(r,o){(!l||o[0]&512)&&u(e,"title",r[9]),(!l||o[0]&1)&&ae(e,"active",r[0])},i(r){l||(p(t.$$.fragment,r),l=!0)},o(r){S(t.$$.fragment,r),l=!1},d(r){r&&L(e),G(t),s=!1,i()}}}function Hl(n){let e,t=[],l=new Map,s,i,r,o=ze(n[13]);const f=d=>d[75].id+(d[75].address?","+d[75].address:"");for(let d=0;d<o.length;d+=1){let a=at(n,o,d),m=f(a);l.set(m,t[d]=ft(m,a))}return{c(){e=v("ul");for(let d=0;d<t.length;d+=1)t[d].c();u(e,"class","svelte-1r7dvt7")},m(d,a){C(d,e,a);for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(e,null);s=!0,i||(r=[U(e,"mouseleave",n[65]),U(e,"blur",n[66])],i=!0)},p(d,a){a[0]&8940544&&(o=ze(d[13]),_e(),t=Xt(t,a,f,1,d,o,l,e,xt,ft,null,at),ge())},i(d){if(!s){for(let a=0;a<o.length;a+=1)p(t[a]);s=!0}},o(d){for(let a=0;a<t.length;a+=1)S(t[a]);s=!1},d(d){d&&L(e);for(let a=0;a<t.length;a+=1)t[a].d();i=!1,Le(r)}}}function Ol(n){let e,t,l,s,i,r;return t=new wt({}),{c(){e=v("div"),D(t.$$.fragment),l=Z(),s=v("div"),i=$(n[7]),u(s,"class","svelte-1r7dvt7"),u(e,"class","no-results svelte-1r7dvt7")},m(o,f){C(o,e,f),j(t,e,null),w(e,l),w(e,s),w(s,i),r=!0},p(o,f){(!r||f[0]&128)&&he(i,o[7])},i(o){r||(p(t.$$.fragment,o),r=!0)},o(o){S(t.$$.fragment,o),r=!1},d(o){o&&L(e),G(t)}}}function Fl(n){let e="",t;return{c(){t=$(e)},m(l,s){C(l,t,s)},p:A,i:A,o:A,d(l){l&&L(t)}}}function Kl(n){let e,t,l,s,i,r,o,f,d,a,m;return t=new wt({}),f=new kt({}),{c(){e=v("div"),D(t.$$.fragment),l=Z(),s=v("div"),i=$(n[6]),r=Z(),o=v("button"),D(f.$$.fragment),u(s,"class","svelte-1r7dvt7"),u(o,"class","svelte-1r7dvt7"),u(e,"class","error svelte-1r7dvt7")},m(_,k){C(_,e,k),j(t,e,null),w(e,l),w(e,s),w(s,i),w(e,r),w(e,o),j(f,o,null),d=!0,a||(m=U(o,"click",n[62]),a=!0)},p(_,k){(!d||k[0]&64)&&he(i,_[6])},i(_){d||(p(t.$$.fragment,_),p(f.$$.fragment,_),d=!0)},o(_){S(t.$$.fragment,_),S(f.$$.fragment,_),d=!1},d(_){_&&L(e),G(t),G(f),a=!1,m()}}}function ft(n,e){let t,l,s;function i(){return e[63](e[77])}function r(){return e[64](e[75])}return l=new Ul({props:{feature:e[75],showPlaceType:e[10],selected:e[14]===e[77],missingIconsCache:e[19],iconsBaseUrl:e[11]}}),l.$on("mouseenter",i),l.$on("focus",r),{key:n,first:null,c(){t=Be(),D(l.$$.fragment),this.first=t},m(o,f){C(o,t,f),j(l,o,f),s=!0},p(o,f){e=o;const d={};f[0]&8192&&(d.feature=e[75]),f[0]&1024&&(d.showPlaceType=e[10]),f[0]&24576&&(d.selected=e[14]===e[77]),f[0]&2048&&(d.iconsBaseUrl=e[11]),l.$set(d)},i(o){s||(p(l.$$.fragment,o),s=!0)},o(o){S(l.$$.fragment,o),s=!1},d(o){o&&L(t),G(l,o)}}}function Nl(n){let e,t,l,s,i,r,o,f,d,a,m,_,k,b,h,V,q,M,O,Q;s=new Dl({}),a=new kt({});let y=n[18]&&ct(),B=n[5]===!0&&ut(n);const se=n[53].default,H=we(se,n,n[52],null),T=[Kl,Fl,Ol,Hl],R=[];function ee(g,W){var ie,ue;return g[17]?0:g[15]?((ie=g[13])==null?void 0:ie.length)===0?2:g[15]&&((ue=g[13])!=null&&ue.length)?3:-1:1}return~(h=ee(n))&&(V=R[h]=T[h](n)),{c(){e=v("form"),t=v("div"),l=v("button"),D(s.$$.fragment),i=Z(),r=v("input"),o=Z(),f=v("div"),d=v("button"),D(a.$$.fragment),m=Z(),y&&y.c(),_=Z(),B&&B.c(),k=Z(),H&&H.c(),b=Z(),V&&V.c(),u(l,"class","search-button svelte-1r7dvt7"),u(l,"type","button"),u(r,"placeholder",n[8]),u(r,"aria-label",n[8]),u(r,"class","svelte-1r7dvt7"),u(d,"type","button"),u(d,"title",n[3]),u(d,"class","svelte-1r7dvt7"),u(f,"class","clear-button-container svelte-1r7dvt7"),ae(f,"displayable",n[1]!==""),u(t,"class","input-group svelte-1r7dvt7"),u(e,"tabindex","0"),u(e,"class",q=Ue(n[2])+" svelte-1r7dvt7"),ae(e,"can-collapse",n[4]&&n[1]==="")},m(g,W){C(g,e,W),w(e,t),w(t,l),j(s,l,null),w(t,i),w(t,r),n[55](r),Ce(r,n[1]),w(t,o),w(t,f),w(f,d),j(a,d,null),w(f,m),y&&y.m(f,null),w(t,_),B&&B.m(t,null),w(t,k),H&&H.m(t,null),w(e,b),~h&&R[h].m(e,null),M=!0,O||(Q=[U(l,"click",n[54]),U(r,"input",n[56]),U(r,"focus",n[57]),U(r,"blur",n[58]),U(r,"keydown",n[21]),U(r,"input",n[59]),U(d,"click",n[60]),U(e,"submit",Jt(n[20]))],O=!0)},p(g,W){(!M||W[0]&256)&&u(r,"placeholder",g[8]),(!M||W[0]&256)&&u(r,"aria-label",g[8]),W[0]&2&&r.value!==g[1]&&Ce(r,g[1]),(!M||W[0]&8)&&u(d,"title",g[3]),g[18]?y?W[0]&262144&&p(y,1):(y=ct(),y.c(),p(y,1),y.m(f,null)):y&&(_e(),S(y,1,1,()=>{y=null}),ge()),(!M||W[0]&2)&&ae(f,"displayable",g[1]!==""),g[5]===!0?B?(B.p(g,W),W[0]&32&&p(B,1)):(B=ut(g),B.c(),p(B,1),B.m(t,k)):B&&(_e(),S(B,1,1,()=>{B=null}),ge()),H&&H.p&&(!M||W[1]&2097152)&&ve(H,se,g,g[52],M?Me(se,g[52],W,null):pe(g[52]),null);let ie=h;h=ee(g),h===ie?~h&&R[h].p(g,W):(V&&(_e(),S(R[ie],1,1,()=>{R[ie]=null}),ge()),~h?(V=R[h],V?V.p(g,W):(V=R[h]=T[h](g),V.c()),p(V,1),V.m(e,null)):V=null),(!M||W[0]&4&&q!==(q=Ue(g[2])+" svelte-1r7dvt7"))&&u(e,"class",q),(!M||W[0]&22)&&ae(e,"can-collapse",g[4]&&g[1]==="")},i(g){M||(p(s.$$.fragment,g),p(a.$$.fragment,g),p(y),p(B),p(H,g),p(V),M=!0)},o(g){S(s.$$.fragment,g),S(a.$$.fragment,g),S(y),S(B),S(H,g),S(V),M=!1},d(g){g&&L(e),G(s),n[55](null),G(a),y&&y.d(),B&&B.d(),H&&H.d(g),~h&&R[h].d(),O=!1,Le(Q)}}}function Ql(n,e,t){const l=e[1],s=e[0],i=l-s;return n===l&&t?n:((n-s)%i+i)%i+s}function dt(n){let e=[...n];return e[2]<e[0]&&(e[2]+=360),e}function Jl(n,e,t){let l,{$$slots:s={},$$scope:i}=e,{class:r=void 0}=e,{apiKey:o}=e,{bbox:f=void 0}=e,{clearButtonTitle:d="clear"}=e,{clearOnBlur:a=!1}=e,{collapsed:m=!1}=e,{country:_=void 0}=e,{debounceSearch:k=200}=e,{enableReverse:b=!1}=e,{errorMessage:h="Something went wrong…"}=e,{filter:V=()=>!0}=e,{flyTo:q=!0}=e,{fuzzyMatch:M=!0}=e,{language:O=void 0}=e,{limit:Q=void 0}=e,{mapController:y=void 0}=e,{minLength:B=2}=e,{noResultsMessage:se="Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!"}=e,{placeholder:H="Search"}=e,{proximity:T=void 0}=e,{reverseActive:R=b==="always"}=e,{reverseButtonTitle:ee="toggle reverse geocoding"}=e,{searchValue:g=""}=e,{showFullGeometry:W=!0}=e,{showPlaceType:ie="ifNeeded"}=e,{showResultsWhileTyping:ue=!0}=e,{trackProximity:Se=!0}=e,{types:fe=void 0}=e,{zoom:Re=16}=e,{maxZoom:Te=18}=e,{apiUrl:Ze="https://api.maptiler.com/geocoding"}=e,{fetchParameters:Ae={}}=e,{iconsBaseUrl:Ne="https://cdn.maptiler.com/maptiler-geocoding-control/v0.0.99/icons/"}=e;function vt(){te.focus()}function pt(){te.blur()}function Qe(c,E=!0){t(1,g=c),E?(t(14,z=-1),Ye()):(je(),setTimeout(()=>{te.focus(),te.select()}))}let be=!1,P,J,I,Je="",te,z=-1,le,Ie=[],de,ye,Pe,qe;const Mt=new Set,re=Yt();bt(()=>{y&&(y.setEventHandler(void 0),y.indicateReverse(!1),y.setSelectedMarker(-1),y.setMarkers(void 0,void 0))});function Ye(c){if(ye&&(clearTimeout(ye),ye=void 0),z>-1&&P)t(49,I=P[z]),t(1,g=I.place_name.replace(/,.*/,"")),t(17,le=void 0),t(48,J=void 0),t(14,z=-1);else if(g){const E=c||!Xe();De(g,{exact:!0}).then(()=>{t(48,J=P),t(49,I=void 0),E&&Tt()}).catch(ne=>t(17,le=ne))}}function Xe(){return/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(g)}async function De(c,{byId:E=!1,exact:ne=!1}={}){t(17,le=void 0);const ke=Xe(),x=new URLSearchParams;O!=null&&x.set("language",Array.isArray(O)?O.join(","):O),fe&&x.set("types",fe.join(",")),ke||(f&&x.set("bbox",f.map(oe=>oe.toFixed(6)).join(",")),_&&x.set("country",Array.isArray(_)?_.join(","):_)),E||(T&&x.set("proximity",T.map(oe=>oe.toFixed(6)).join(",")),(ne||!ue)&&x.set("autocomplete","false"),x.set("fuzzyMatch",String(M))),Q!==void 0&&(!ke||(fe==null?void 0:fe.length)===1)&&x.set("limit",String(Q)),x.set("key",o);const me=Ze+"/"+encodeURIComponent(c)+".json?"+x.toString();if(me===Je){E?(t(13,P=void 0),t(49,I=Ie[0])):t(13,P=Ie);return}Je=me,de==null||de.abort();const Y=new AbortController;t(18,de=Y);let He;try{He=await fetch(me,{signal:Y.signal,...Ae}).finally(()=>{Y===de&&t(18,de=void 0)})}catch(oe){if(oe&&typeof oe=="object"&&"name"in oe&&oe.name==="AbortError")return;throw new Error}if(!He.ok)throw new Error;const Oe=await He.json();re("response",{url:me,featureCollection:Oe}),E?(t(13,P=void 0),t(49,I=Oe.features[0]),Ie=[I]):(t(13,P=Oe.features.filter(V)),Ie=P,ke&&te.focus())}function Tt(){var ne,ke,x,me;if(!(J!=null&&J.length)||!q)return;const c=[180,90,-180,-90],E=!J.some(Y=>!Y.matching_text);for(const Y of J)(E||!Y.matching_text)&&(c[0]=Math.min(c[0],((ne=Y.bbox)==null?void 0:ne[0])??Y.center[0]),c[1]=Math.min(c[1],((ke=Y.bbox)==null?void 0:ke[1])??Y.center[1]),c[2]=Math.max(c[2],((x=Y.bbox)==null?void 0:x[2])??Y.center[0]),c[3]=Math.max(c[3],((me=Y.bbox)==null?void 0:me[3])??Y.center[1]));y&&J.length>0&&(I&&c[0]===c[2]&&c[1]===c[3]?y.flyTo(I.center,Re):y.fitBounds(dt(c),50,Te))}function Ct(c){t(0,R=b==="always"),Qe(Ql(c[0],[-180,180],!0).toFixed(6)+","+c[1].toFixed(6))}function Lt(c){if(!P)return;let E=c.key==="ArrowDown"?1:c.key==="ArrowUp"?-1:0;E?(z===-1&&E===-1&&t(14,z=P.length),t(14,z+=E),z>=P.length&&t(14,z=-1),c.preventDefault()):["ArrowLeft","ArrowRight","Home","End"].includes(c.key)&&t(14,z=-1)}function je(c=!0){if(t(17,le=void 0),ue){if(ye&&clearTimeout(ye),g.length<B)return;const E=g;ye=window.setTimeout(()=>{De(E).catch(ne=>t(17,le=ne))},c?k:0)}else t(13,P=void 0),t(17,le=void 0)}function Ge(c){t(49,I=c),t(1,g=c.place_name),t(14,z=-1)}const Bt=()=>te.focus();function St(c){Ke[c?"unshift":"push"](()=>{te=c,t(16,te)})}function Rt(){g=this.value,t(1,g),t(12,be),t(27,a)}const It=()=>t(12,be=!0),Pt=()=>t(12,be=!1),Vt=()=>je(),Wt=()=>{t(1,g=""),te.focus()},zt=()=>t(0,R=!R),Et=()=>t(17,le=void 0),Ut=c=>t(14,z=c),Zt=c=>Ge(c),At=()=>t(14,z=-1),qt=()=>{};return n.$$set=c=>{"class"in c&&t(2,r=c.class),"apiKey"in c&&t(25,o=c.apiKey),"bbox"in c&&t(26,f=c.bbox),"clearButtonTitle"in c&&t(3,d=c.clearButtonTitle),"clearOnBlur"in c&&t(27,a=c.clearOnBlur),"collapsed"in c&&t(4,m=c.collapsed),"country"in c&&t(28,_=c.country),"debounceSearch"in c&&t(29,k=c.debounceSearch),"enableReverse"in c&&t(5,b=c.enableReverse),"errorMessage"in c&&t(6,h=c.errorMessage),"filter"in c&&t(30,V=c.filter),"flyTo"in c&&t(31,q=c.flyTo),"fuzzyMatch"in c&&t(32,M=c.fuzzyMatch),"language"in c&&t(33,O=c.language),"limit"in c&&t(34,Q=c.limit),"mapController"in c&&t(35,y=c.mapController),"minLength"in c&&t(36,B=c.minLength),"noResultsMessage"in c&&t(7,se=c.noResultsMessage),"placeholder"in c&&t(8,H=c.placeholder),"proximity"in c&&t(24,T=c.proximity),"reverseActive"in c&&t(0,R=c.reverseActive),"reverseButtonTitle"in c&&t(9,ee=c.reverseButtonTitle),"searchValue"in c&&t(1,g=c.searchValue),"showFullGeometry"in c&&t(37,W=c.showFullGeometry),"showPlaceType"in c&&t(10,ie=c.showPlaceType),"showResultsWhileTyping"in c&&t(38,ue=c.showResultsWhileTyping),"trackProximity"in c&&t(39,Se=c.trackProximity),"types"in c&&t(40,fe=c.types),"zoom"in c&&t(41,Re=c.zoom),"maxZoom"in c&&t(42,Te=c.maxZoom),"apiUrl"in c&&t(43,Ze=c.apiUrl),"fetchParameters"in c&&t(44,Ae=c.fetchParameters),"iconsBaseUrl"in c&&t(11,Ne=c.iconsBaseUrl),"$$scope"in c&&t(52,i=c.$$scope)},n.$$.update=()=>{if(n.$$.dirty[1]&256&&(Se||t(24,T=void 0)),n.$$.dirty[0]&134221824&&setTimeout(()=>{t(15,Pe=be),a&&!be&&t(1,g="")}),n.$$.dirty[0]&8194|n.$$.dirty[1]&32&&g.length<B&&(t(49,I=void 0),t(13,P=void 0),t(17,le=void 0),t(48,J=P)),n.$$.dirty[1]&262208&&W&&I&&!I.address&&I.geometry.type==="Point"&&De(I.id,{byId:!0}).catch(c=>t(17,le=c)),n.$$.dirty[1]&789521&&(y&&I&&I.id!==qe&&q&&(!I.bbox||I.bbox[0]===I.bbox[2]&&I.bbox[1]===I.bbox[3]?y.flyTo(I.center,I.id.startsWith("poi.")||I.id.startsWith("address.")?Te:Re):y.fitBounds(dt(I.bbox),50,Te),t(13,P=void 0),t(48,J=void 0),t(14,z=-1)),t(50,qe=I==null?void 0:I.id)),n.$$.dirty[0]&8192|n.$$.dirty[1]&131072&&J!==P&&t(48,J=void 0),n.$$.dirty[1]&393232&&y&&y.setMarkers(J,I),n.$$.dirty[0]&2&&t(14,z=-1),n.$$.dirty[0]&40961|n.$$.dirty[1]&272&&y&&y.setEventHandler(c=>{switch(c.type){case"mapClick":R&&Ct(c.coordinates);break;case"proximityChange":t(24,T=Se?c.proximity:void 0);break;case"markerClick":{const E=P==null?void 0:P.find(ne=>ne.id===c.id);E&&Ge(E)}break;case"markerMouseEnter":t(14,z=Pe?(P==null?void 0:P.findIndex(E=>E.id===c.id))??-1:-1);break;case"markerMouseLeave":t(14,z=-1);break}}),n.$$.dirty[0]&16384|n.$$.dirty[1]&16&&(y==null||y.setSelectedMarker(z)),n.$$.dirty[0]&24576&&t(51,l=P==null?void 0:P[z]),n.$$.dirty[0]&2|n.$$.dirty[1]&16){const c=/^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(g);y==null||y.setReverseMarker(c?[Number(c[1]),Number(c[2])]:void 0)}n.$$.dirty[1]&1048576&&re("select",l),n.$$.dirty[1]&262144&&re("pick",I),n.$$.dirty[0]&40960&&re("optionsVisibilityChange",Pe&&!!P),n.$$.dirty[0]&8192&&re("featuresListed",P),n.$$.dirty[1]&131072&&re("featuresMarked",J),n.$$.dirty[0]&1&&re("reverseToggle",R),n.$$.dirty[0]&2&&re("queryChange",g),n.$$.dirty[0]&1|n.$$.dirty[1]&16&&y&&y.indicateReverse(R)},[R,g,r,d,m,b,h,se,H,ee,ie,Ne,be,P,z,Pe,te,le,de,Mt,Ye,Lt,je,Ge,T,o,f,a,_,k,V,q,M,O,Q,y,B,W,ue,Se,fe,Re,Te,Ze,Ae,vt,pt,Qe,J,I,qe,l,i,s,Bt,St,Rt,It,Pt,Vt,Wt,zt,Et,Ut,Zt,At,qt]}class Yl extends F{constructor(e){super(),K(this,e,Jl,Nl,N,{class:2,apiKey:25,bbox:26,clearButtonTitle:3,clearOnBlur:27,collapsed:4,country:28,debounceSearch:29,enableReverse:5,errorMessage:6,filter:30,flyTo:31,fuzzyMatch:32,language:33,limit:34,mapController:35,minLength:36,noResultsMessage:7,placeholder:8,proximity:24,reverseActive:0,reverseButtonTitle:9,searchValue:1,showFullGeometry:37,showPlaceType:10,showResultsWhileTyping:38,trackProximity:39,types:40,zoom:41,maxZoom:42,apiUrl:43,fetchParameters:44,iconsBaseUrl:11,focus:45,blur:46,setQuery:47},null,[-1,-1,-1])}get focus(){return this.$$.ctx[45]}get blur(){return this.$$.ctx[46]}get setQuery(){return this.$$.ctx[47]}}function mt(n){let e,t,l,s;return t=new Yl({props:{mapController:n[1],apiKey:"MZEJTanw3WpxRvt7qDfo",country:"gb"}}),{c(){e=v("div"),D(t.$$.fragment),u(e,"class",l=Ue(n[0])+" svelte-189syb7")},m(i,r){C(i,e,r),j(t,e,null),s=!0},p(i,r){const o={};r&2&&(o.mapController=i[1]),t.$set(o),(!s||r&1&&l!==(l=Ue(i[0])+" svelte-189syb7"))&&u(e,"class",l)},i(i){s||(p(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){i&&L(e),G(t)}}}function Xl(n){let e,t,l=n[1]&&mt(n);return{c(){l&&l.c(),e=Be()},m(s,i){l&&l.m(s,i),C(s,e,i),t=!0},p(s,[i]){s[1]?l?(l.p(s,i),i&2&&p(l,1)):(l=mt(s),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(_e(),S(l,1,1,()=>{l=null}),ge())},i(s){t||(p(l),t=!0)},o(s){S(l),t=!1},d(s){s&&L(e),l&&l.d(s)}}}function xl(n,e,t){let l;Ee(n,Fe,r=>t(2,l=r));let{position:s="top-left"}=e,i;return $t(()=>{t(1,i=el(l,tl))}),n.$$set=r=>{"position"in r&&t(0,s=r.position)},[s,i]}class vn extends F{constructor(e){super(),K(this,e,xl,Xl,N,{position:0})}}function $l(n,e,t){t===void 0&&(t={});var l=et(n),s=et(e),i=Ve(s[1]-l[1]),r=Ve(s[0]-l[0]),o=Ve(l[1]),f=Ve(s[1]),d=Math.pow(Math.sin(i/2),2)+Math.pow(Math.sin(r/2),2)*Math.cos(o)*Math.cos(f);return ll(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),t.units)}function pn(n,e){return e===void 0&&(e={}),nl(n,function(t,l){var s=l.geometry.coordinates;return t+$l(s[0],s[1],e)},0)}const en={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},Mn=10,Tn=10;function Cn(){return tn(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"])}function tn(n){return n[Math.floor(Math.random()*n.length)]}function ln(n){let e;return{c(){e=$("Luc Chaissac")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function nn(n){let e,t,l,s,i,r,o,f,d;return f=new sl({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[ln]},$$scope:{ctx:n}}}),{c(){e=v("ul"),t=v("li"),t.innerHTML=`<b>Click</b>
    on the map to open a new tab with a 3rd-party imagery provider`,l=Z(),s=v("li"),s.innerHTML=`Press <b>Escape</b>
    to exit this mode`,i=Z(),r=v("li"),o=$("Cursor by "),D(f.$$.fragment)},m(a,m){C(a,e,m),w(e,t),w(e,l),w(e,s),w(e,i),w(e,r),w(r,o),j(f,r,null),d=!0},p(a,[m]){const _={};m&1&&(_.$$scope={dirty:m,ctx:a}),f.$set(_)},i(a){d||(p(f.$$.fragment,a),d=!0)},o(a){S(f.$$.fragment,a),d=!1},d(a){a&&L(e),G(f)}}}class sn extends F{constructor(e){super(),K(this,e,null,nn,N,{})}}const rn="/atip/ls_endpoints/assets/camera_cursor-824d29b6.svg",{window:on}=ol;function _t(n){let e,t,l,s;const i=[cn,an],r=[];function o(f,d){return f[0]?0:1}return e=o(n),t=r[e]=i[e](n),{c(){t.c(),l=Be()},m(f,d){r[e].m(f,d),C(f,l,d),s=!0},p(f,d){let a=e;e=o(f),e===a?r[e].p(f,d):(_e(),S(r[a],1,1,()=>{r[a]=null}),ge(),t=r[e],t?t.p(f,d):(t=r[e]=i[e](f),t.c()),p(t,1),t.m(l.parentNode,l))},i(f){s||(p(t),s=!0)},o(f){S(t),s=!1},d(f){f&&L(l),r[e].d(f)}}}function an(n){let e,t;return e=new yt({props:{$$slots:{default:[un]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p(l,s){const i={};s&4096&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function cn(n){let e,t,l,s,i,r,o;e=new yt({props:{$$slots:{default:[fn]},$$scope:{ctx:n}}}),e.$on("click",n[4]);function f(a){n[5](a)}let d={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return n[2].streetViewImagery!==void 0&&(d.value=n[2].streetViewImagery),l=new rl({props:d}),Ke.push(()=>gt(l,"value",f)),r=new Tl({props:{label:"Help",$$slots:{default:[dn]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment),t=Z(),D(l.$$.fragment),i=Z(),D(r.$$.fragment)},m(a,m){j(e,a,m),C(a,t,m),j(l,a,m),C(a,i,m),j(r,a,m),o=!0},p(a,m){const _={};m&4096&&(_.$$scope={dirty:m,ctx:a}),e.$set(_);const k={};!s&&m&4&&(s=!0,k.value=a[2].streetViewImagery,ht(()=>s=!1)),l.$set(k);const b={};m&4096&&(b.$$scope={dirty:m,ctx:a}),r.$set(b)},i(a){o||(p(e.$$.fragment,a),p(l.$$.fragment,a),p(r.$$.fragment,a),o=!0)},o(a){S(e.$$.fragment,a),S(l.$$.fragment,a),S(r.$$.fragment,a),o=!1},d(a){a&&(L(t),L(i)),G(e,a),G(l,a),G(r,a)}}}function un(n){let e;return{c(){e=$("Enable Street View")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function fn(n){let e;return{c(){e=$("Disable Street View")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function dn(n){let e,t;return e=new sn({}),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function mn(n){let e,t,l,s,i=n[1]&&_t(n);return{c(){i&&i.c(),e=Be()},m(r,o){i&&i.m(r,o),C(r,e,o),t=!0,l||(s=U(on,"keydown",n[3]),l=!0)},p(r,[o]){r[1]?i?(i.p(r,o),o&2&&p(i,1)):(i=_t(r),i.c(),p(i,1),i.m(e.parentNode,e)):i&&(_e(),S(i,1,1,()=>{i=null}),ge())},i(r){t||(p(i),t=!0)},o(r){S(i),t=!1},d(r){r&&L(e),i&&i.d(r),l=!1,s()}}}function _n(n,e,t){let l,s;Ee(n,tt,h=>t(2,l=h)),Ee(n,Fe,h=>t(8,s=h));let{enabled:i}=e,{showControls:r=!0}=e,o=[];function f(){s.on("click",a),s.getCanvas().style.cursor=`url(${rn}), auto`,o=il();for(let h of o)h.setProperty(s,"line-color",en.streetview)}function d(){if(s){s.off("click",a),s.getCanvas().style.cursor="inherit";for(let h of o)h.returnToDefaultPaintValues(s);o=[]}}bt(d);function a(h){if(!i)return;let V=h.lngLat.lng,q=h.lngLat.lat;l.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${q},${V}&cbp=11,0,0,0,0`,"_blank"):l.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${q}~${V}&style=x`,"_blank")}function m(h){i&&h.key=="Escape"&&(h.stopPropagation(),t(0,i=!1))}const _=()=>t(0,i=!1);function k(h){n.$$.not_equal(l.streetViewImagery,h)&&(l.streetViewImagery=h,tt.set(l))}const b=()=>t(0,i=!0);return n.$$set=h=>{"enabled"in h&&t(0,i=h.enabled),"showControls"in h&&t(1,r=h.showControls)},n.$$.update=()=>{n.$$.dirty&1&&(i?f():d())},[i,r,l,m,_,k,b]}class Ln extends F{constructor(e){super(),K(this,e,_n,mn,N,{enabled:0,showControls:1})}}export{hn as B,Tl as C,vn as G,Ln as S,pn as a,Tn as b,Mn as c,en as d,$l as e,bn as f,ol as g,yn as h,sn as i,yl as j,wn as k,kn as l,Cn as r};
