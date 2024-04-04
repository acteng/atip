import{S as x,i as $,s as ee,Z as Le,e as p,h as u,j as M,_ as Te,$ as Me,a0 as Se,t as T,n as C,o as S,k as h,d as F,a1 as ze,w as H,J as Ie,b9 as Xt,I as Lt,b0 as Ae,u as se,H as be,F as xt,g as N,m as J,p as Y,E as $t,a9 as De,K as Ue,bf as el,bg as rt,aU as tl,bh as ll,v as Re,ak as nl,ag as et,bi as sl,b as tt,c as Tt,l as Mt,q as Fe,aZ as ot,bj as ue,Y as K,bk as de,ad as X,be as qe,bl as il,N as ge,O as he,a4 as rl,T as St,bm as ol,aa as al,ab as cl,r as ul,bn as fl,a6 as dl,au as at,av as Oe,bo as ml,bp as _l,a_ as gl,aV as ct,bq as hl,a as Ct,R as bl}from"./index-655b5385.js";const yl=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function kl(n){let e,t;const l=n[1].default,s=Le(l,n,n[0],null);return{c(){e=p("div"),s&&s.c(),u(e,"class","govuk-button-group")},m(i,r){M(i,e,r),s&&s.m(e,null),t=!0},p(i,[r]){s&&s.p&&(!t||r&1)&&Te(s,l,i,i[0],t?Se(l,i[0],r,null):Me(i[0]),null)},i(i){t||(T(s,i),t=!0)},o(i){C(s,i),t=!1},d(i){i&&S(e),s&&s.d(i)}}}function wl(n,e,t){let{$$slots:l={},$$scope:s}=e;return n.$$set=i=>{"$$scope"in i&&t(0,s=i.$$scope)},[s,l]}class Zn extends x{constructor(e){super(),$(this,e,wl,kl,ee,{})}}function pl(n){let e,t,l;const s=n[3].default,i=Le(s,n,n[2],null);return{c(){e=p("fieldset"),t=p("div"),i&&i.c(),u(t,"class",n[0]),u(t,"data-module","govuk-checkboxes"),u(e,"class","govuk-fieldset")},m(r,o){M(r,e,o),h(e,t),i&&i.m(t,null),l=!0},p(r,[o]){i&&i.p&&(!l||o&4)&&Te(i,s,r,r[2],l?Se(s,r[2],o,null):Me(r[2]),null)},i(r){l||(T(i,r),l=!0)},o(r){C(i,r),l=!1},d(r){r&&S(e),i&&i.d(r)}}}function vl(n,e,t){let{$$slots:l={},$$scope:s}=e,{small:i=!1}=e,r=i?"govuk-checkboxes--small":"govuk-checkboxes";return n.$$set=o=>{"small"in o&&t(1,i=o.small),"$$scope"in o&&t(2,s=o.$$scope)},[r,i,s,l]}class Wn extends x{constructor(e){super(),$(this,e,vl,pl,ee,{small:1})}}const Ll=n=>({}),ut=n=>({});function Tl(n){let e,t,l,s,i,r,o,f,d;const a=n[5].default,m=Le(a,n,n[4],null),_=n[5].right,b=Le(_,n,n[4],ut);return{c(){e=p("div"),t=p("input"),l=F(),s=p("label"),m&&m.c(),i=F(),r=p("span"),b&&b.c(),u(t,"type","checkbox"),u(t,"class","govuk-checkboxes__input"),u(t,"id",n[3]),u(s,"class","govuk-label govuk-checkboxes__label"),u(s,"for",n[3]),u(s,"title",n[1]),ze(r,"float","right"),u(e,"class","govuk-checkboxes__item"),u(e,"style",n[2])},m(g,w){M(g,e,w),h(e,t),t.checked=n[0],h(e,l),h(e,s),m&&m.m(s,null),h(e,i),h(e,r),b&&b.m(r,null),o=!0,f||(d=[H(t,"change",n[7]),H(t,"change",n[6])],f=!0)},p(g,[w]){w&1&&(t.checked=g[0]),m&&m.p&&(!o||w&16)&&Te(m,a,g,g[4],o?Se(a,g[4],w,null):Me(g[4]),null),(!o||w&2)&&u(s,"title",g[1]),b&&b.p&&(!o||w&16)&&Te(b,_,g,g[4],o?Se(_,g[4],w,Ll):Me(g[4]),ut)},i(g){o||(T(m,g),T(b,g),o=!0)},o(g){C(m,g),C(b,g),o=!1},d(g){g&&S(e),m&&m.d(g),b&&b.d(g),f=!1,Ie(d)}}}function Ml(n,e,t){let{$$slots:l={},$$scope:s}=e;const i=Xt(l);let{checked:r}=e,{hint:o=null}=e,d=i.right!==void 0?"float: none":"",a=Lt();function m(b){Ae.call(this,n,b)}function _(){r=this.checked,t(0,r)}return n.$$set=b=>{"checked"in b&&t(0,r=b.checked),"hint"in b&&t(1,o=b.hint),"$$scope"in b&&t(4,s=b.$$scope)},[r,o,d,a,s,l,m,_]}class Vn extends x{constructor(e){super(),$(this,e,Ml,Tl,ee,{checked:0,hint:1})}}function Sl(n){let e,t,l,s,i,r,o;const f=n[3].default,d=Le(f,n,n[2],null);return{c(){e=p("details"),t=p("summary"),l=p("span"),s=se(n[0]),i=F(),r=p("div"),d&&d.c(),u(l,"class","govuk-details__summary-text"),u(t,"class","govuk-details__summary"),u(r,"class","govuk-details__text"),e.open=n[1],u(e,"class","govuk-details"),u(e,"data-module","govuk-details")},m(a,m){M(a,e,m),h(e,t),h(t,l),h(l,s),h(e,i),h(e,r),d&&d.m(r,null),o=!0},p(a,[m]){(!o||m&1)&&be(s,a[0]),d&&d.p&&(!o||m&4)&&Te(d,f,a,a[2],o?Se(f,a[2],m,null):Me(a[2]),null),(!o||m&2)&&(e.open=a[1])},i(a){o||(T(d,a),o=!0)},o(a){C(d,a),o=!1},d(a){a&&S(e),d&&d.d(a)}}}function Cl(n,e,t){let{$$slots:l={},$$scope:s}=e,{label:i}=e,{open:r=!1}=e;return n.$$set=o=>{"label"in o&&t(0,i=o.label),"open"in o&&t(1,r=o.open),"$$scope"in o&&t(2,s=o.$$scope)},[i,r,s,l]}class Bl extends x{constructor(e){super(),$(this,e,Cl,Sl,ee,{label:0,open:1})}}function ft(n,e,t){const l=n.slice();return l[9]=e[t][0],l[10]=e[t][1],l}function dt(n){let e;return{c(){e=p("option"),e.__value="",Re(e,e.__value)},m(t,l){M(t,e,l)},d(t){t&&S(e)}}}function mt(n){let e,t=n[10]+"",l,s;return{c(){e=p("option"),l=se(t),e.__value=s=n[9],Re(e,e.__value)},m(i,r){M(i,e,r),h(e,l)},p(i,r){r&4&&t!==(t=i[10]+"")&&be(l,t),r&4&&s!==(s=i[9])&&(e.__value=s,Re(e,e.__value))},d(i){i&&S(e)}}}function zl(n){let e,t,l,s,i,r,o;e=new $t({props:{errorMessage:n[5]}});let f=n[3]&&dt(),d=De(n[2]),a=[];for(let m=0;m<d.length;m+=1)a[m]=mt(ft(n,d,m));return{c(){N(e.$$.fragment),t=F(),l=p("select"),f&&f.c(),s=Ue();for(let m=0;m<a.length;m+=1)a[m].c();u(l,"class","govuk-select"),u(l,"id",n[6]),l.disabled=n[4],n[0]===void 0&&el(()=>n[8].call(l))},m(m,_){J(e,m,_),M(m,t,_),M(m,l,_),f&&f.m(l,null),h(l,s);for(let b=0;b<a.length;b+=1)a[b]&&a[b].m(l,null);rt(l,n[0],!0),i=!0,r||(o=[H(l,"change",n[8]),H(l,"change",n[7])],r=!0)},p(m,_){const b={};if(_&32&&(b.errorMessage=m[5]),e.$set(b),m[3]?f||(f=dt(),f.c(),f.m(l,s)):f&&(f.d(1),f=null),_&4){d=De(m[2]);let g;for(g=0;g<d.length;g+=1){const w=ft(m,d,g);a[g]?a[g].p(w,_):(a[g]=mt(w),a[g].c(),a[g].m(l,null))}for(;g<a.length;g+=1)a[g].d(1);a.length=d.length}(!i||_&16)&&(l.disabled=m[4]),_&5&&rt(l,m[0])},i(m){i||(T(e.$$.fragment,m),i=!0)},o(m){C(e.$$.fragment,m),i=!1},d(m){m&&(S(t),S(l)),Y(e,m),f&&f.d(),tl(a,m),r=!1,Ie(o)}}}function Rl(n){let e,t;return e=new xt({props:{label:n[1],id:n[6],$$slots:{default:[zl]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},m(l,s){J(e,l,s),t=!0},p(l,[s]){const i={};s&2&&(i.label=l[1]),s&8253&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Il(n,e,t){let{label:l}=e,{choices:s}=e,{emptyOption:i=!1}=e,{disabled:r=!1}=e,{errorMessage:o=""}=e,{value:f}=e,d=Lt();function a(_){Ae.call(this,n,_)}function m(){f=ll(this),t(0,f),t(2,s)}return n.$$set=_=>{"label"in _&&t(1,l=_.label),"choices"in _&&t(2,s=_.choices),"emptyOption"in _&&t(3,i=_.emptyOption),"disabled"in _&&t(4,r=_.disabled),"errorMessage"in _&&t(5,o=_.errorMessage),"value"in _&&t(0,f=_.value)},[f,l,s,i,r,o,d,a,m]}class Ul extends x{constructor(e){super(),$(this,e,Il,Rl,ee,{label:1,choices:2,emptyOption:3,disabled:4,errorMessage:5,value:0})}}function jn(n){return{id:n,beforeId:El(n)}}function El(n){let e=nl(et);if(!e){console.warn(`getBeforeId(${n}) called before map is ready. Z-ordering may be incorrect.`);return}let t,l=!1;for(let s=_t.length-1;s>=0;s--){let i=_t[s];if(i==n){l=!0;break}e.getLayer(i)&&(t=i)}if(!l)throw new Error(`Layer ID ${n} not defined in layerZorder`);return t}let k=n=>n,Q=n=>n,Pl=n=>n,Zl=n=>n,Wl=n=>n,Vl=n=>n,jl=n=>n,Ol=n=>n;const _t=[Ol("raster-basemap"),k("parliamentary_constituencies"),k("parliamentary_constituencies-outline"),k("wards"),k("wards-outline"),k("combined_authorities"),k("combined_authorities-outline"),k("local_authority_districts"),k("local_authority_districts-outline"),k("local_planning_authorities"),k("local_planning_authorities-outline"),k("census_output_areas"),k("census_output_areas-outline"),k("imd"),k("imd-outline"),k("pollution"),k("road_noise"),k("mrn"),k("srn"),k("bus_routes"),k("trams"),k("national_cycle_network"),k("cycle_paths"),k("pct_commute"),k("pct_school"),k("road_widths"),k("road_speeds"),k("pavement_widths"),k("gradient"),k("gradient_arrows"),k("education"),k("hospitals"),k("sports_spaces"),k("railway_stations"),k("cycle_parking"),k("crossings"),k("vehicle_counts"),k("stats19"),k("bus_stops"),Q("interventions-coverage-polygons-outlines"),Q(k("interventions-polygons")),Q(k("interventions-polygons-outlines")),Q("hover-polygons"),Q("hover-lines"),Q(k("interventions-lines")),Q(k("interventions-lines-endpoints")),Q("hover-points"),Q(k("interventions-points")),k("criticals-clusters"),k("criticals-counts"),k("criticals-points"),Q("edit-polygon-fill"),Q("edit-polygon-lines"),Q("edit-polygon-vertices"),Q("draw-split-route"),Q("route-points"),Q("route-lines"),Q("route-polygons"),Zl("road_label"),jl(Wl(Vl("Road labels"))),Q("boundary"),k(Pl("measurement-line")),Q("georeferenced-image"),k("cover-interactive-layers")];function Al(n){let e,t,l;function s(r){n[2](r)}let i={label:"Basemap",choices:sl(),disabled:n[0]};return n[1]!==void 0&&(i.value=n[1]),e=new Ul({props:i}),tt.push(()=>Tt(e,"value",s)),{c(){N(e.$$.fragment)},m(r,o){J(e,r,o),l=!0},p(r,[o]){const f={};o&1&&(f.disabled=r[0]),!t&&o&2&&(t=!0,f.value=r[1],Mt(()=>t=!1)),e.$set(f)},i(r){l||(T(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){Y(e,r)}}}function Dl(n,e,t){let l;Fe(n,ot,r=>t(1,l=r));let{disabled:s=!1}=e;function i(r){l=r,ot.set(l)}return n.$$set=r=>{"disabled"in r&&t(0,s=r.disabled)},[s,l,i]}class On extends x{constructor(e){super(),$(this,e,Dl,Al,ee,{disabled:0})}}function Fl(n){let e,t;return{c(){e=ue("svg"),t=ue("path"),u(t,"d","M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"),u(e,"viewBox","0 0 14 14"),u(e,"width","13"),u(e,"height","13"),u(e,"class","svelte-en2qvf")},m(l,s){M(l,e,s),h(e,t)},p:K,i:K,o:K,d(l){l&&S(e)}}}class Bt extends x{constructor(e){super(),$(this,e,null,Fl,ee,{})}}function ql(n){let e,t;return{c(){e=ue("svg"),t=ue("path"),u(t,"d","M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"),u(e,"viewBox","0 0 30 30"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","svelte-d2loi5")},m(l,s){M(l,e,s),h(e,t)},p:K,i:K,o:K,d(l){l&&S(e)}}}class zt extends x{constructor(e){super(),$(this,e,null,ql,ee,{})}}function Gl(n){let e,t;return{c(){e=p("img"),X(e.src,t=n[3]+"area.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){M(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"area.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&S(e)}}}function Hl(n){let e,t;return{c(){e=p("img"),X(e.src,t=n[3]+"reverse.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){M(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"reverse.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&S(e)}}}function Kl(n){let e,t;return{c(){e=p("img"),X(e.src,t=n[3]+"poi.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){M(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"poi.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&S(e)}}}function Ql(n){let e,t;return{c(){e=p("img"),X(e.src,t=n[3]+"postal_code.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){M(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"postal_code.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&S(e)}}}function Nl(n){let e,t;return{c(){e=p("img"),X(e.src,t=n[3]+"street.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){M(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"street.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&S(e)}}}function Jl(n){let e,t;return{c(){e=p("img"),X(e.src,t=n[3]+"road.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){M(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"road.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&S(e)}}}function Yl(n){let e,t;return{c(){e=p("img"),X(e.src,t=n[3]+"housenumber.svg")||u(e,"src",t),u(e,"alt",n[6]),u(e,"class","svelte-ltkwvy")},m(l,s){M(l,e,s)},p(l,s){s&8&&!X(e.src,t=l[3]+"housenumber.svg")&&u(e,"src",t),s&64&&u(e,"alt",l[6])},d(l){l&&S(e)}}}function Xl(n){let e,t,l,s;return{c(){e=p("img"),X(e.src,t=n[5])||u(e,"src",t),u(e,"alt",n[4]),u(e,"class","svelte-ltkwvy")},m(i,r){M(i,e,r),l||(s=H(e,"error",n[14]),l=!0)},p(i,r){r&32&&!X(e.src,t=i[5])&&u(e,"src",t),r&16&&u(e,"alt",i[4])},d(i){i&&S(e),l=!1,s()}}}function gt(n){let e,t;return{c(){e=p("span"),t=se(n[6]),u(e,"class","secondary svelte-ltkwvy")},m(l,s){M(l,e,s),h(e,t)},p(l,s){s&64&&be(t,l[6])},d(l){l&&S(e)}}}function xl(n){var W,O;let e,t,l,s,i,r,o,f,d=(n[7]?n[0].place_name:n[0].place_name.replace(/,.*/,""))+"",a,m,_=n[2]==="always"||n[2]&&!n[0].address&&((W=n[0].properties)==null?void 0:W.kind)!=="road"&&((O=n[0].properties)==null?void 0:O.kind)!=="road_relation"&&!n[0].id.startsWith("address.")&&!n[0].id.startsWith("postal_code.")&&(!n[0].id.startsWith("poi.")||!n[5])&&!n[7],b,g,w=(n[7]?"":n[0].place_name.replace(/[^,]*,?\s*/,""))+"",P,Z,le;function V(L,z){var ie,E;return z&1&&(t=null),z&1&&(l=null),z&1&&(s=null),L[5]?Xl:L[0].address?Yl:((ie=L[0].properties)==null?void 0:ie.kind)==="road"||((E=L[0].properties)==null?void 0:E.kind)==="road_relation"?Jl:(t==null&&(t=!!L[0].id.startsWith("address.")),t?Nl:(l==null&&(l=!!L[0].id.startsWith("postal_code.")),l?Ql:(s==null&&(s=!!L[0].id.startsWith("poi.")),s?Kl:L[7]?Hl:Gl)))}let R=V(n,-1),y=R(n),j=_&&gt(n);return{c(){e=p("li"),y.c(),i=F(),r=p("span"),o=p("span"),f=p("span"),a=se(d),m=F(),j&&j.c(),b=F(),g=p("span"),P=se(w),u(f,"class","primary svelte-ltkwvy"),u(o,"class","svelte-ltkwvy"),u(g,"class","line2 svelte-ltkwvy"),u(r,"class","texts svelte-ltkwvy"),u(e,"tabindex","0"),u(e,"data-selected",n[1]),u(e,"class","svelte-ltkwvy"),de(e,"selected",n[1])},m(L,z){M(L,e,z),y.m(e,null),h(e,i),h(e,r),h(r,o),h(o,f),h(f,a),h(o,m),j&&j.m(o,null),h(r,b),h(r,g),h(g,P),Z||(le=[H(e,"mouseenter",n[12]),H(e,"focus",n[13])],Z=!0)},p(L,[z]){var ie,E;R===(R=V(L,z))&&y?y.p(L,z):(y.d(1),y=R(L),y&&(y.c(),y.m(e,i))),z&1&&d!==(d=(L[7]?L[0].place_name:L[0].place_name.replace(/,.*/,""))+"")&&be(a,d),z&37&&(_=L[2]==="always"||L[2]&&!L[0].address&&((ie=L[0].properties)==null?void 0:ie.kind)!=="road"&&((E=L[0].properties)==null?void 0:E.kind)!=="road_relation"&&!L[0].id.startsWith("address.")&&!L[0].id.startsWith("postal_code.")&&(!L[0].id.startsWith("poi.")||!L[5])&&!L[7]),_?j?j.p(L,z):(j=gt(L),j.c(),j.m(o,null)):j&&(j.d(1),j=null),z&1&&w!==(w=(L[7]?"":L[0].place_name.replace(/[^,]*,?\s*/,""))+"")&&be(P,w),z&2&&u(e,"data-selected",L[1]),z&2&&de(e,"selected",L[1])},i:K,o:K,d(L){L&&S(e),y.d(),j&&j.d(),Z=!1,Ie(le)}}}function $l(n,e,t){var V;let l,s,{feature:i}=e,{selected:r=!1}=e,{showPlaceType:o}=e,{missingIconsCache:f}=e,{iconsBaseUrl:d}=e;const a=(V=i.properties)==null?void 0:V.categories;let m,_,b=0,g=i.place_type[0]==="reverse";function w(R){_&&f.add(_),t(10,b++,b)}function P(R){Ae.call(this,n,R)}function Z(R){Ae.call(this,n,R)}const le=R=>w(R.currentTarget);return n.$$set=R=>{"feature"in R&&t(0,i=R.feature),"selected"in R&&t(1,r=R.selected),"showPlaceType"in R&&t(2,o=R.showPlaceType),"missingIconsCache"in R&&t(9,f=R.missingIconsCache),"iconsBaseUrl"in R&&t(3,d=R.iconsBaseUrl)},n.$$.update=()=>{var R,y,j,W;if(n.$$.dirty&3640)do t(11,l--,l),t(4,m=a==null?void 0:a[l]),t(5,_=m?d+m.replace(/ /g,"_")+".svg":void 0);while(l>-1&&(!_||f.has(_)));n.$$.dirty&1&&t(6,s=i.id.startsWith("poi.")?(y=(R=i.properties)==null?void 0:R.categories)==null?void 0:y.join(", "):((W=(j=i.properties)==null?void 0:j.place_type_name)==null?void 0:W[0])??i.place_type[0])},t(11,l=(a==null?void 0:a.length)??0),[i,r,o,d,m,_,s,g,w,f,b,l,P,Z,le]}class en extends x{constructor(e){super(),$(this,e,$l,xl,ee,{feature:0,selected:1,showPlaceType:2,missingIconsCache:9,iconsBaseUrl:3})}}function tn(n){let e;return{c(){e=p("div"),e.innerHTML='<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>',u(e,"class","svelte-7cmwmc")},m(t,l){M(t,e,l)},p:K,i:K,o:K,d(t){t&&S(e)}}}class ln extends x{constructor(e){super(),$(this,e,null,tn,ee,{})}}function nn(n){let e,t;return{c(){e=ue("svg"),t=ue("path"),u(t,"d","M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"),u(e,"viewBox","0 0 60.006 21.412"),u(e,"width","14"),u(e,"height","20"),u(e,"class","svelte-en2qvf")},m(l,s){M(l,e,s),h(e,t)},p:K,i:K,o:K,d(l){l&&S(e)}}}class sn extends x{constructor(e){super(),$(this,e,null,nn,ee,{})}}function rn(n){let e,t,l;return{c(){e=ue("svg"),t=ue("circle"),l=ue("path"),u(t,"cx","4.789"),u(t,"cy","4.787"),u(t,"r","3.85"),ze(t,"stroke-width","1.875"),ze(t,"fill","none"),u(l,"d","M12.063 12.063 7.635 7.635"),ze(l,"stroke-width","1.875"),ze(l,"stroke-linecap","round"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width","13"),u(e,"height","13"),u(e,"viewBox","0 0 13 13"),u(e,"class","svelte-1bpbt60")},m(s,i){M(s,e,i),h(e,t),h(e,l)},p:K,i:K,o:K,d(s){s&&S(e)}}}class on extends x{constructor(e){super(),$(this,e,null,rn,ee,{})}}function an(n,e,t){const l=e[1],s=e[0],i=l-s;return n===l&&t?n:((n-s)%i+i)%i+s}function ht(n){const e=[...n];return e[2]<e[0]&&(e[2]+=360),e}let Be;async function cn(n,e,t){const l=n==null?void 0:n.getCenterAndZoom();for(const s of e??[])if(!(l&&(s.minZoom!=null&&s.minZoom>l[0]||s.maxZoom!=null&&s.maxZoom<l[0]))){if(s.type==="fixed")return s.coordinates.join(",");e:if(s.type==="client-geolocation"){if(Be&&s.cachedLocationExpiry&&Be.time+s.cachedLocationExpiry>Date.now()){if(!Be.coords)break e;return Be.coords}let i;try{return i=await new Promise((r,o)=>{t.signal.addEventListener("abort",()=>{o(Error("aborted"))}),navigator.geolocation.getCurrentPosition(f=>{r([f.coords.longitude,f.coords.latitude].map(d=>d.toFixed(6)).join(","))},f=>{o(f)},s)}),i}catch{}finally{s.cachedLocationExpiry&&(Be={time:Date.now(),coords:i})}if(t.signal.aborted)return}if(s.type==="server-geolocation")return"ip";if(l&&s.type==="map-center")return l[1].toFixed(6)+","+l[2].toFixed(6)}}function bt(n,e,t){const l=n.slice();return l[81]=e[t],l[83]=t,l}function yt(n){let e,t;return e=new ln({}),{c(){N(e.$$.fragment)},m(l,s){J(e,l,s),t=!0},i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function kt(n){let e,t,l,s,i;return t=new sn({}),{c(){e=p("button"),N(t.$$.fragment),u(e,"type","button"),u(e,"title",n[9]),u(e,"class","svelte-zh3kmv"),de(e,"active",n[0])},m(r,o){M(r,e,o),J(t,e,null),l=!0,s||(i=H(e,"click",n[67]),s=!0)},p(r,o){(!l||o[0]&512)&&u(e,"title",r[9]),(!l||o[0]&1)&&de(e,"active",r[0])},i(r){l||(T(t.$$.fragment,r),l=!0)},o(r){C(t.$$.fragment,r),l=!1},d(r){r&&S(e),Y(t),s=!1,i()}}}function un(n){let e,t=[],l=new Map,s,i,r,o=De(n[14]);const f=d=>d[81].id+(d[81].address?","+d[81].address:"");for(let d=0;d<o.length;d+=1){let a=bt(n,o,d),m=f(a);l.set(m,t[d]=wt(m,a))}return{c(){e=p("ul");for(let d=0;d<t.length;d+=1)t[d].c();u(e,"class","svelte-zh3kmv")},m(d,a){M(d,e,a);for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(e,null);s=!0,i||(r=[H(e,"mouseleave",n[71]),H(e,"blur",n[72])],i=!0)},p(d,a){a[0]&17880064&&(o=De(d[14]),ge(),t=al(t,a,f,1,d,o,l,e,cl,wt,null,bt),he())},i(d){if(!s){for(let a=0;a<o.length;a+=1)T(t[a]);s=!0}},o(d){for(let a=0;a<t.length;a+=1)C(t[a]);s=!1},d(d){d&&S(e);for(let a=0;a<t.length;a+=1)t[a].d();i=!1,Ie(r)}}}function fn(n){let e,t,l,s,i,r;return t=new zt({}),{c(){e=p("div"),N(t.$$.fragment),l=F(),s=p("div"),i=se(n[7]),u(s,"class","svelte-zh3kmv"),u(e,"class","no-results svelte-zh3kmv")},m(o,f){M(o,e,f),J(t,e,null),h(e,l),h(e,s),h(s,i),r=!0},p(o,f){(!r||f[0]&128)&&be(i,o[7])},i(o){r||(T(t.$$.fragment,o),r=!0)},o(o){C(t.$$.fragment,o),r=!1},d(o){o&&S(e),Y(t)}}}function dn(n){let e="",t;return{c(){t=se(e)},m(l,s){M(l,t,s)},p:K,i:K,o:K,d(l){l&&S(t)}}}function mn(n){let e,t,l,s,i,r,o,f,d,a,m;return t=new zt({}),f=new Bt({}),{c(){e=p("div"),N(t.$$.fragment),l=F(),s=p("div"),i=se(n[6]),r=F(),o=p("button"),N(f.$$.fragment),u(s,"class","svelte-zh3kmv"),u(o,"class","svelte-zh3kmv"),u(e,"class","error svelte-zh3kmv")},m(_,b){M(_,e,b),J(t,e,null),h(e,l),h(e,s),h(s,i),h(e,r),h(e,o),J(f,o,null),d=!0,a||(m=H(o,"click",n[68]),a=!0)},p(_,b){(!d||b[0]&64)&&be(i,_[6])},i(_){d||(T(t.$$.fragment,_),T(f.$$.fragment,_),d=!0)},o(_){C(t.$$.fragment,_),C(f.$$.fragment,_),d=!1},d(_){_&&S(e),Y(t),Y(f),a=!1,m()}}}function wt(n,e){let t,l,s;function i(){return e[69](e[83])}function r(){return e[70](e[81])}return l=new en({props:{feature:e[81],showPlaceType:e[10],selected:e[15]===e[83],missingIconsCache:e[20],iconsBaseUrl:e[12]}}),l.$on("mouseenter",i),l.$on("focus",r),{key:n,first:null,c(){t=Ue(),N(l.$$.fragment),this.first=t},m(o,f){M(o,t,f),J(l,o,f),s=!0},p(o,f){e=o;const d={};f[0]&16384&&(d.feature=e[81]),f[0]&1024&&(d.showPlaceType=e[10]),f[0]&49152&&(d.selected=e[15]===e[83]),f[0]&4096&&(d.iconsBaseUrl=e[12]),l.$set(d)},i(o){s||(T(l.$$.fragment,o),s=!0)},o(o){C(l.$$.fragment,o),s=!1},d(o){o&&S(t),Y(l,o)}}}function _n(n){let e,t,l,s,i,r,o,f,d,a,m,_,b,g,w,P,Z,le,V,R,y,j=!1;i=new on({}),m=new Bt({});let W=n[19]&&yt(),O=n[5]===!0&&kt(n);const L=n[59].default,z=Le(L,n,n[58],null),ie=[mn,dn,fn,un],E=[];function ye(v,D){var te,ke;return v[18]?0:v[16]?((te=v[14])==null?void 0:te.length)===0?2:v[16]&&((ke=v[14])!=null&&ke.length)?3:-1:1}return~(P=ye(n))&&(Z=E[P]=ie[P](n)),{c(){e=F(),t=p("form"),l=p("div"),s=p("button"),N(i.$$.fragment),r=F(),o=p("input"),f=F(),d=p("div"),a=p("button"),N(m.$$.fragment),_=F(),W&&W.c(),b=F(),O&&O.c(),g=F(),z&&z.c(),w=F(),Z&&Z.c(),u(s,"class","search-button svelte-zh3kmv"),u(s,"type","button"),u(o,"placeholder",n[8]),u(o,"aria-label",n[8]),u(o,"class","svelte-zh3kmv"),u(a,"type","button"),u(a,"title",n[3]),u(a,"class","svelte-zh3kmv"),u(d,"class","clear-button-container svelte-zh3kmv"),de(d,"displayable",n[1]!==""),u(l,"class","input-group svelte-zh3kmv"),u(t,"tabindex","0"),u(t,"class",le=qe(n[2])+" svelte-zh3kmv"),de(t,"can-collapse",n[4]&&n[1]==="")},m(v,D){M(v,e,D),M(v,t,D),h(t,l),h(l,s),J(i,s,null),h(l,r),h(l,o),n[61](o),Re(o,n[1]),h(l,f),h(l,d),h(d,a),J(m,a,null),h(d,_),W&&W.m(d,null),h(l,b),O&&O.m(l,null),h(l,g),z&&z.m(l,null),h(t,w),~P&&E[P].m(t,null),V=!0,R||(y=[H(s,"click",n[60]),H(o,"input",n[62]),H(o,"focus",n[63]),H(o,"blur",n[64]),H(o,"keydown",n[22]),H(o,"input",n[65]),H(a,"click",n[66]),H(t,"submit",il(n[21]))],R=!0)},p(v,D){(!V||D[0]&256)&&u(o,"placeholder",v[8]),(!V||D[0]&256)&&u(o,"aria-label",v[8]),D[0]&2&&o.value!==v[1]&&Re(o,v[1]),(!V||D[0]&8)&&u(a,"title",v[3]),v[19]?W?D[0]&524288&&T(W,1):(W=yt(),W.c(),T(W,1),W.m(d,null)):W&&(ge(),C(W,1,1,()=>{W=null}),he()),(!V||D[0]&2)&&de(d,"displayable",v[1]!==""),v[5]===!0?O?(O.p(v,D),D[0]&32&&T(O,1)):(O=kt(v),O.c(),T(O,1),O.m(l,g)):O&&(ge(),C(O,1,1,()=>{O=null}),he()),z&&z.p&&(!V||D[1]&134217728)&&Te(z,L,v,v[58],V?Se(L,v[58],D,null):Me(v[58]),null);let te=P;P=ye(v),P===te?~P&&E[P].p(v,D):(Z&&(ge(),C(E[te],1,1,()=>{E[te]=null}),he()),~P?(Z=E[P],Z?Z.p(v,D):(Z=E[P]=ie[P](v),Z.c()),T(Z,1),Z.m(t,null)):Z=null),(!V||D[0]&4&&le!==(le=qe(v[2])+" svelte-zh3kmv"))&&u(t,"class",le),(!V||D[0]&22)&&de(t,"can-collapse",v[4]&&v[1]==="")},i(v){V||(T(j),T(i.$$.fragment,v),T(m.$$.fragment,v),T(W),T(O),T(z,v),T(Z),V=!0)},o(v){C(j),C(i.$$.fragment,v),C(m.$$.fragment,v),C(W),C(O),C(z,v),C(Z),V=!1},d(v){v&&(S(e),S(t)),Y(i),n[61](null),Y(m),W&&W.d(),O&&O.d(),z&&z.d(v),~P&&E[P].d(),R=!1,Ie(y)}}}function gn(n,e,t){let l,{$$slots:s={},$$scope:i}=e,{class:r=void 0}=e,{apiKey:o}=e,{bbox:f=void 0}=e,{clearButtonTitle:d="clear"}=e,{clearOnBlur:a=!1}=e,{collapsed:m=!1}=e,{country:_=void 0}=e,{debounceSearch:b=200}=e,{enableReverse:g=!1}=e,{errorMessage:w="Something went wrong…"}=e,{filter:P=()=>!0}=e,{flyTo:Z=!0}=e,{fuzzyMatch:le=!0}=e,{language:V=void 0}=e,{limit:R=void 0}=e,{mapController:y=void 0}=e,{minLength:j=2}=e,{noResultsMessage:W="Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!"}=e,{placeholder:O="Search"}=e,{proximity:L=[{type:"server-geolocation"}]}=e,{reverseActive:z=g==="always"}=e,{reverseButtonTitle:ie="toggle reverse geocoding"}=e,{searchValue:E=""}=e,{showFullGeometry:ye=!0}=e,{showPlaceType:v="ifNeeded"}=e,{showResultsWhileTyping:D=!0}=e,{selectFirst:te=!0}=e,{flyToSelected:ke=!1}=e,{markerOnSelected:Ee=!0}=e,{types:me=void 0}=e,{excludeTypes:Pe=!1}=e,{zoom:Ce=16}=e,{maxZoom:we=18}=e,{apiUrl:Ge="https://api.maptiler.com/geocoding"}=e,{fetchParameters:He={}}=e,{iconsBaseUrl:lt="https://cdn.maptiler.com/maptiler-geocoding-control/v1.2.2/icons/"}=e,{adjustUrlQuery:Ke=c=>{}}=e;function Rt(){re.focus()}function It(){re.blur()}function nt(c,G=!0){t(1,E=c),G?(t(15,A=-1),it()):(Ye(),setTimeout(()=>{re.focus(),re.select()}))}function Ut(){t(14,I=void 0),t(55,B=void 0),t(15,A=-1)}function Et(){t(54,q=[]),t(55,B=void 0)}let pe=!1,I,q,B,st="",re,A=-1,oe,Ze=[],_e,ve,We,Qe;const Pt=new Set,fe=rl();St(()=>{y&&(y.setEventHandler(void 0),y.indicateReverse(!1),y.setSelectedMarker(-1),y.setMarkers(void 0,void 0))});function it(c){if(ve&&(clearTimeout(ve),ve=void 0),A>-1&&I)t(55,B=I[A]),t(1,E=B.place_type[0]==="reverse"?B.place_name:B.place_name.replace(/,.*/,"")),t(18,oe=void 0),t(54,q=void 0),t(15,A=-1);else if(E){const G=c||!Ne(E);Je(E,{exact:!0}).then(()=>{t(54,q=I),t(55,B=void 0),G&&Zt()}).catch(ae=>t(18,oe=ae))}}function Ne(c){try{return ol(c,6)}catch{return!1}}async function Je(c,{byId:G=!1,exact:ae=!1}={}){t(18,oe=void 0),_e==null||_e.abort();const ce=new AbortController;t(19,_e=ce);try{const U=Ne(c),ne=new URLSearchParams;if(V!==void 0&&ne.set("language",Array.isArray(V)?V.join(","):V??""),me&&ne.set("types",me.join(",")),Pe&&ne.set("excludeTypes",String(Pe)),f&&ne.set("bbox",f.map(je=>je.toFixed(6)).join(",")),_&&ne.set("country",Array.isArray(_)?_.join(","):_),!G&&!U){const je=await cn(y,L,ce);je&&ne.set("proximity",je),(ae||!D)&&ne.set("autocomplete","false"),ne.set("fuzzyMatch",String(le))}R!==void 0&&(!U||(me==null?void 0:me.length)===1)&&ne.set("limit",String(R)),ne.set("key",o),Ke(ne);const Ve=Ge+"/"+encodeURIComponent(U?U.decimalLongitude+","+U.decimalLatitude:c)+".json?"+ne.toString();if(Ve===st){G?(t(14,I=void 0),t(55,B=Ze[0])):t(14,I=Ze);return}st=Ve;const xe=await fetch(Ve,{signal:ce.signal,...He});if(!xe.ok)throw new Error(await xe.text());const $e=await xe.json();fe("response",{url:Ve,featureCollection:$e}),G?(t(14,I=void 0),t(55,B=$e.features[0]),Ze=[B]):(t(14,I=$e.features.filter(P)),U&&I.unshift({type:"Feature",properties:{},id:"reverse_"+U.decimalLongitude+"_"+U.decimalLatitude,text:U.decimalLatitude+", "+U.decimalLongitude,place_name:U.decimalLatitude+", "+U.decimalLongitude,place_type:["reverse"],center:[U.decimalLongitude,U.decimalLatitude],bbox:[U.decimalLongitude,U.decimalLatitude,U.decimalLongitude,U.decimalLatitude],geometry:{type:"Point",coordinates:[U.decimalLongitude,U.decimalLatitude]}}),Ze=I,U&&re.focus())}catch(U){if(U&&typeof U=="object"&&"name"in U&&U.name==="AbortError")return;throw U}finally{ce===_e&&t(19,_e=void 0)}}function Zt(){var ae;if(!(q!=null&&q.length)||!Z)return;const c=[180,90,-180,-90],G=!q.some(ce=>!ce.matching_text);for(const ce of q)if(G||!ce.matching_text)for(const U of[0,1,2,3])c[U]=Math[U<2?"min":"max"](c[U],((ae=ce.bbox)==null?void 0:ae[U])??ce.center[U%2]);y&&q.length>0&&(B&&c[0]===c[2]&&c[1]===c[3]?y.flyTo(B.center,Ce):y.fitBounds(ht(c),50,we))}function Wt(c){t(0,z=g==="always"),t(14,I=void 0),t(55,B=void 0),t(15,A=-1),nt(c[1].toFixed(6)+", "+an(c[0],[-180,180],!0).toFixed(6),!1)}function Vt(c){if(!I)return;let G=c.key==="ArrowDown"?1:c.key==="ArrowUp"?-1:0;G&&(A===(te?0:-1)&&G===-1&&t(15,A=I.length),t(15,A+=G),A>=I.length&&t(15,A=-1),A<0&&te&&t(15,A=0),c.preventDefault())}function Ye(c=!0){if(t(18,oe=void 0),D){if(ve&&clearTimeout(ve),E.length<j)return;const G=E;ve=window.setTimeout(()=>{Je(G).catch(ae=>t(18,oe=ae))},c?b:0)}else t(14,I=void 0),t(18,oe=void 0)}function Xe(c){t(55,B=c),t(1,E=c.place_name),t(15,A=-1)}const jt=()=>re.focus();function Ot(c){tt[c?"unshift":"push"](()=>{re=c,t(17,re)})}function At(){E=this.value,t(1,E),t(13,pe),t(27,a)}const Dt=()=>t(13,pe=!0),Ft=()=>t(13,pe=!1),qt=()=>Ye(),Gt=()=>{t(1,E=""),re.focus()},Ht=()=>t(0,z=!z),Kt=()=>t(18,oe=void 0),Qt=c=>t(15,A=c),Nt=c=>Xe(c),Jt=()=>{te||t(15,A=-1)},Yt=()=>{};return n.$$set=c=>{"class"in c&&t(2,r=c.class),"apiKey"in c&&t(25,o=c.apiKey),"bbox"in c&&t(26,f=c.bbox),"clearButtonTitle"in c&&t(3,d=c.clearButtonTitle),"clearOnBlur"in c&&t(27,a=c.clearOnBlur),"collapsed"in c&&t(4,m=c.collapsed),"country"in c&&t(28,_=c.country),"debounceSearch"in c&&t(29,b=c.debounceSearch),"enableReverse"in c&&t(5,g=c.enableReverse),"errorMessage"in c&&t(6,w=c.errorMessage),"filter"in c&&t(30,P=c.filter),"flyTo"in c&&t(31,Z=c.flyTo),"fuzzyMatch"in c&&t(32,le=c.fuzzyMatch),"language"in c&&t(33,V=c.language),"limit"in c&&t(34,R=c.limit),"mapController"in c&&t(35,y=c.mapController),"minLength"in c&&t(36,j=c.minLength),"noResultsMessage"in c&&t(7,W=c.noResultsMessage),"placeholder"in c&&t(8,O=c.placeholder),"proximity"in c&&t(37,L=c.proximity),"reverseActive"in c&&t(0,z=c.reverseActive),"reverseButtonTitle"in c&&t(9,ie=c.reverseButtonTitle),"searchValue"in c&&t(1,E=c.searchValue),"showFullGeometry"in c&&t(38,ye=c.showFullGeometry),"showPlaceType"in c&&t(10,v=c.showPlaceType),"showResultsWhileTyping"in c&&t(39,D=c.showResultsWhileTyping),"selectFirst"in c&&t(11,te=c.selectFirst),"flyToSelected"in c&&t(40,ke=c.flyToSelected),"markerOnSelected"in c&&t(41,Ee=c.markerOnSelected),"types"in c&&t(42,me=c.types),"excludeTypes"in c&&t(43,Pe=c.excludeTypes),"zoom"in c&&t(44,Ce=c.zoom),"maxZoom"in c&&t(45,we=c.maxZoom),"apiUrl"in c&&t(46,Ge=c.apiUrl),"fetchParameters"in c&&t(47,He=c.fetchParameters),"iconsBaseUrl"in c&&t(12,lt=c.iconsBaseUrl),"adjustUrlQuery"in c&&t(48,Ke=c.adjustUrlQuery),"$$scope"in c&&t(58,i=c.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&134225920&&setTimeout(()=>{t(16,We=pe),a&&!pe&&t(1,E="")}),n.$$.dirty[0]&16386|n.$$.dirty[1]&32&&E.length<j&&(t(55,B=void 0),t(14,I=void 0),t(18,oe=void 0),t(54,q=I)),n.$$.dirty[1]&16777344&&ye&&B&&!B.address&&B.geometry.type==="Point"&&B.place_type[0]!=="reverse"&&Je(B.id,{byId:!0}).catch(c=>t(18,oe=c)),n.$$.dirty[1]&50356241&&(y&&B&&B.id!==Qe&&Z&&(!B.bbox||B.bbox[0]===B.bbox[2]&&B.bbox[1]===B.bbox[3]?y.flyTo(B.center,B.id.startsWith("poi.")||B.id.startsWith("address.")?we:Ce):y.fitBounds(ht(B.bbox),50,we),t(14,I=void 0),t(54,q=void 0),t(15,A=-1)),t(56,Qe=B==null?void 0:B.id)),n.$$.dirty[0]&18432&&te&&I!=null&&I.length&&t(15,A=0),n.$$.dirty[0]&2050&&(te||t(15,A=-1)),n.$$.dirty[0]&16384|n.$$.dirty[1]&8388608&&q!==I&&t(54,q=void 0),n.$$.dirty[0]&81921|n.$$.dirty[1]&8388624&&y&&y.setEventHandler(c=>{switch(c.type){case"mapClick":z&&Wt(c.coordinates);break;case"markerClick":{const G=I==null?void 0:I.find(ae=>ae.id===c.id);G&&Xe(G)}break;case"markerMouseEnter":q&&t(15,A=We?(I==null?void 0:I.findIndex(G=>G.id===c.id))??-1:-1);break;case"markerMouseLeave":q&&t(15,A=-1);break}}),n.$$.dirty[0]&49152&&t(57,l=I==null?void 0:I[A]),n.$$.dirty[1]&67133969&&y&&l&&Z&&ke&&y.flyTo(l.center,l.id.startsWith("poi.")||l.id.startsWith("address.")?we:Ce),n.$$.dirty[1]&1040&&(Ee||y==null||y.setMarkers(void 0,void 0)),n.$$.dirty[1]&75498512&&y&&Ee&&!q&&(y.setMarkers(l?[l]:void 0,void 0),y.setSelectedMarker(l?0:-1)),n.$$.dirty[1]&25165840&&y&&y.setMarkers(q,B),n.$$.dirty[0]&32768|n.$$.dirty[1]&8388624&&q&&y&&y.setSelectedMarker(A),n.$$.dirty[0]&2|n.$$.dirty[1]&16&&y){const c=Ne(E);y.setReverseMarker(c?[c.decimalLongitude,c.decimalLatitude]:void 0)}n.$$.dirty[1]&67108864&&fe("select",l),n.$$.dirty[1]&16777216&&fe("pick",B),n.$$.dirty[0]&81920&&fe("optionsVisibilityChange",We&&!!I),n.$$.dirty[0]&16384&&fe("featuresListed",I),n.$$.dirty[1]&8388608&&fe("featuresMarked",q),n.$$.dirty[0]&1&&fe("reverseToggle",z),n.$$.dirty[0]&2&&fe("queryChange",E),n.$$.dirty[0]&1|n.$$.dirty[1]&16&&y&&y.indicateReverse(z)},[z,E,r,d,m,g,w,W,O,ie,v,te,lt,pe,I,A,We,re,oe,_e,Pt,it,Vt,Ye,Xe,o,f,a,_,b,P,Z,le,V,R,y,j,L,ye,D,ke,Ee,me,Pe,Ce,we,Ge,He,Ke,Rt,It,nt,Ut,Et,q,B,Qe,l,i,s,jt,Ot,At,Dt,Ft,qt,Gt,Ht,Kt,Qt,Nt,Jt,Yt]}class hn extends x{constructor(e){super(),$(this,e,gn,_n,ee,{class:2,apiKey:25,bbox:26,clearButtonTitle:3,clearOnBlur:27,collapsed:4,country:28,debounceSearch:29,enableReverse:5,errorMessage:6,filter:30,flyTo:31,fuzzyMatch:32,language:33,limit:34,mapController:35,minLength:36,noResultsMessage:7,placeholder:8,proximity:37,reverseActive:0,reverseButtonTitle:9,searchValue:1,showFullGeometry:38,showPlaceType:10,showResultsWhileTyping:39,selectFirst:11,flyToSelected:40,markerOnSelected:41,types:42,excludeTypes:43,zoom:44,maxZoom:45,apiUrl:46,fetchParameters:47,iconsBaseUrl:12,adjustUrlQuery:48,focus:49,blur:50,setQuery:51,clearList:52,clearMap:53},null,[-1,-1,-1])}get focus(){return this.$$.ctx[49]}get blur(){return this.$$.ctx[50]}get setQuery(){return this.$$.ctx[51]}get clearList(){return this.$$.ctx[52]}get clearMap(){return this.$$.ctx[53]}}function pt(n){let e,t,l,s;return t=new hn({props:{mapController:n[1],apiKey:"MZEJTanw3WpxRvt7qDfo",country:"gb"}}),{c(){e=p("div"),N(t.$$.fragment),u(e,"class",l=qe(n[0])+" svelte-189syb7")},m(i,r){M(i,e,r),J(t,e,null),s=!0},p(i,r){const o={};r&2&&(o.mapController=i[1]),t.$set(o),(!s||r&1&&l!==(l=qe(i[0])+" svelte-189syb7"))&&u(e,"class",l)},i(i){s||(T(t.$$.fragment,i),s=!0)},o(i){C(t.$$.fragment,i),s=!1},d(i){i&&S(e),Y(t)}}}function bn(n){let e,t,l=n[1]&&pt(n);return{c(){l&&l.c(),e=Ue()},m(s,i){l&&l.m(s,i),M(s,e,i),t=!0},p(s,[i]){s[1]?l?(l.p(s,i),i&2&&T(l,1)):(l=pt(s),l.c(),T(l,1),l.m(e.parentNode,e)):l&&(ge(),C(l,1,1,()=>{l=null}),he())},i(s){t||(T(l),t=!0)},o(s){C(l),t=!1},d(s){s&&S(e),l&&l.d(s)}}}function yn(n,e,t){let l;Fe(n,et,r=>t(2,l=r));let{position:s="top-left"}=e,i;return ul(()=>{t(1,i=fl(l,dl))}),n.$$set=r=>{"position"in r&&t(0,s=r.position)},[s,i]}class An extends x{constructor(e){super(),$(this,e,yn,bn,ee,{position:0})}}function kn(n,e,t){t===void 0&&(t={});var l=at(n),s=at(e),i=Oe(s[1]-l[1]),r=Oe(s[0]-l[0]),o=Oe(l[1]),f=Oe(s[1]),d=Math.pow(Math.sin(i/2),2)+Math.pow(Math.sin(r/2),2)*Math.cos(o)*Math.cos(f);return ml(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),t.units)}function Dn(n,e){return e===void 0&&(e={}),_l(n,function(t,l){var s=l.geometry.coordinates;return t+kn(s[0],s[1],e)},0)}const wn={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},Fn=10,qn=10;function Gn(){return pn(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"])}function pn(n){return n[Math.floor(Math.random()*n.length)]}function vn(n){let e;return{c(){e=se("Luc Chaissac")},m(t,l){M(t,e,l)},d(t){t&&S(e)}}}function Ln(n){let e,t,l,s,i,r,o,f,d;return f=new gl({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[vn]},$$scope:{ctx:n}}}),{c(){e=p("ul"),t=p("li"),t.innerHTML=`<b>Click</b>
    on the map to open a new tab with a 3rd-party imagery provider`,l=F(),s=p("li"),s.innerHTML=`Press <b>Escape</b>
    to exit this mode`,i=F(),r=p("li"),o=se("Cursor by "),N(f.$$.fragment)},m(a,m){M(a,e,m),h(e,t),h(e,l),h(e,s),h(e,i),h(e,r),h(r,o),J(f,r,null),d=!0},p(a,[m]){const _={};m&1&&(_.$$scope={dirty:m,ctx:a}),f.$set(_)},i(a){d||(T(f.$$.fragment,a),d=!0)},o(a){C(f.$$.fragment,a),d=!1},d(a){a&&S(e),Y(f)}}}class Tn extends x{constructor(e){super(),$(this,e,null,Ln,ee,{})}}const Mn="/atip/assets/camera_cursor-824d29b6.svg",{window:Sn}=yl;function vt(n){let e,t,l,s;const i=[Bn,Cn],r=[];function o(f,d){return f[0]?0:1}return e=o(n),t=r[e]=i[e](n),{c(){t.c(),l=Ue()},m(f,d){r[e].m(f,d),M(f,l,d),s=!0},p(f,d){let a=e;e=o(f),e===a?r[e].p(f,d):(ge(),C(r[a],1,1,()=>{r[a]=null}),he(),t=r[e],t?t.p(f,d):(t=r[e]=i[e](f),t.c()),T(t,1),t.m(l.parentNode,l))},i(f){s||(T(t),s=!0)},o(f){C(t),s=!1},d(f){f&&S(l),r[e].d(f)}}}function Cn(n){let e,t;return e=new Ct({props:{$$slots:{default:[zn]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){N(e.$$.fragment)},m(l,s){J(e,l,s),t=!0},p(l,s){const i={};s&4096&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Bn(n){let e,t,l,s,i,r,o;e=new Ct({props:{$$slots:{default:[Rn]},$$scope:{ctx:n}}}),e.$on("click",n[4]);function f(a){n[5](a)}let d={legend:"Source",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return n[2].streetViewImagery!==void 0&&(d.value=n[2].streetViewImagery),l=new bl({props:d}),tt.push(()=>Tt(l,"value",f)),r=new Bl({props:{label:"Help",$$slots:{default:[In]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment),t=F(),N(l.$$.fragment),i=F(),N(r.$$.fragment)},m(a,m){J(e,a,m),M(a,t,m),J(l,a,m),M(a,i,m),J(r,a,m),o=!0},p(a,m){const _={};m&4096&&(_.$$scope={dirty:m,ctx:a}),e.$set(_);const b={};!s&&m&4&&(s=!0,b.value=a[2].streetViewImagery,Mt(()=>s=!1)),l.$set(b);const g={};m&4096&&(g.$$scope={dirty:m,ctx:a}),r.$set(g)},i(a){o||(T(e.$$.fragment,a),T(l.$$.fragment,a),T(r.$$.fragment,a),o=!0)},o(a){C(e.$$.fragment,a),C(l.$$.fragment,a),C(r.$$.fragment,a),o=!1},d(a){a&&(S(t),S(i)),Y(e,a),Y(l,a),Y(r,a)}}}function zn(n){let e;return{c(){e=se("Enable Street View")},m(t,l){M(t,e,l)},d(t){t&&S(e)}}}function Rn(n){let e;return{c(){e=se("Disable Street View")},m(t,l){M(t,e,l)},d(t){t&&S(e)}}}function In(n){let e,t;return e=new Tn({}),{c(){N(e.$$.fragment)},m(l,s){J(e,l,s),t=!0},i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Un(n){let e,t,l,s,i=n[1]&&vt(n);return{c(){i&&i.c(),e=Ue()},m(r,o){i&&i.m(r,o),M(r,e,o),t=!0,l||(s=H(Sn,"keydown",n[3]),l=!0)},p(r,[o]){r[1]?i?(i.p(r,o),o&2&&T(i,1)):(i=vt(r),i.c(),T(i,1),i.m(e.parentNode,e)):i&&(ge(),C(i,1,1,()=>{i=null}),he())},i(r){t||(T(i),t=!0)},o(r){C(i),t=!1},d(r){r&&S(e),i&&i.d(r),l=!1,s()}}}function En(n,e,t){let l,s;Fe(n,ct,w=>t(2,l=w)),Fe(n,et,w=>t(8,s=w));let{enabled:i}=e,{showControls:r=!0}=e,o=[];function f(){s.on("click",a),s.getCanvas().style.cursor=`url(${Mn}), auto`,o=hl();for(let w of o)w.setProperty(s,"line-color",wn.streetview)}function d(){if(s){s.off("click",a),s.getCanvas().style.cursor="inherit";for(let w of o)w.returnToDefaultPaintValues(s);o=[]}}St(d);function a(w){if(!i)return;let P=w.lngLat.lng,Z=w.lngLat.lat;l.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${Z},${P}&cbp=11,0,0,0,0`,"_blank"):l.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${Z}~${P}&style=x`,"_blank")}function m(w){i&&w.key=="Escape"&&(w.stopPropagation(),t(0,i=!1))}const _=()=>t(0,i=!1);function b(w){n.$$.not_equal(l.streetViewImagery,w)&&(l.streetViewImagery=w,ct.set(l))}const g=()=>t(0,i=!0);return n.$$set=w=>{"enabled"in w&&t(0,i=w.enabled),"showControls"in w&&t(1,r=w.showControls)},n.$$.update=()=>{n.$$.dirty&1&&(i?f():d())},[i,r,l,m,_,b,g]}class Hn extends x{constructor(e){super(),$(this,e,En,Un,ee,{enabled:0,showControls:1})}}export{Zn as B,Bl as C,An as G,Hn as S,Dn as a,qn as b,Fn as c,wn as d,kn as e,Wn as f,yl as g,Vn as h,Tn as i,Ul as j,On as k,jn as l,Gn as r};
