import{S as F,i as K,s as N,aT as we,e as v,h as c,j as C,aU as ve,aV as pe,aW as Me,t as p,n as S,o as L,k as w,d as q,aB as Zt,x as E,ay as Le,ba as Dt,aZ as Ue,F as jt,g as D,m as j,p as G,E as Gt,aI as Ve,$ as Be,aL as Ht,bh as Ye,aJ as Ot,bi as Ft,w as Ce,v as $,H as he,bj as Kt,b as Fe,c as mt,l as _t,q as We,aR as xe,bk as fe,J as A,bl as ae,I as Y,bg as Ee,bm as Nt,a0 as _e,a1 as ge,bn as Qt,an as gt,aP as Jt,aQ as Xt,D as ht,u as Yt,bo as xt,b2 as $t,a2 as $e,a3 as ze,bp as el,bq as tl,aS as ll,az as et,br as nl,a as bt,R as sl}from"./index-70c29b30.js";const il=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function rl(n){let e,t;const l=n[1].default,s=we(l,n,n[0],null);return{c(){e=v("div"),s&&s.c(),c(e,"class","govuk-button-group")},m(i,r){C(i,e,r),s&&s.m(e,null),t=!0},p(i,[r]){s&&s.p&&(!t||r&1)&&ve(s,l,i,i[0],t?Me(l,i[0],r,null):pe(i[0]),null)},i(i){t||(p(s,i),t=!0)},o(i){S(s,i),t=!1},d(i){i&&L(e),s&&s.d(i)}}}function ol(n,e,t){let{$$slots:l={},$$scope:s}=e;return n.$$set=i=>{"$$scope"in i&&t(0,s=i.$$scope)},[s,l]}class dn extends F{constructor(e){super(),K(this,e,ol,rl,N,{})}}function al(n){let e,t,l;const s=n[3].default,i=we(s,n,n[2],null);return{c(){e=v("fieldset"),t=v("div"),i&&i.c(),c(t,"class",n[0]),c(t,"data-module","govuk-checkboxes"),c(e,"class","govuk-fieldset")},m(r,o){C(r,e,o),w(e,t),i&&i.m(t,null),l=!0},p(r,[o]){i&&i.p&&(!l||o&4)&&ve(i,s,r,r[2],l?Me(s,r[2],o,null):pe(r[2]),null)},i(r){l||(p(i,r),l=!0)},o(r){S(i,r),l=!1},d(r){r&&L(e),i&&i.d(r)}}}function fl(n,e,t){let{$$slots:l={},$$scope:s}=e,{small:i=!1}=e,r=i?"govuk-checkboxes--small":"govuk-checkboxes";return n.$$set=o=>{"small"in o&&t(1,i=o.small),"$$scope"in o&&t(2,s=o.$$scope)},[r,i,s,l]}class mn extends F{constructor(e){super(),K(this,e,fl,al,N,{small:1})}}const cl=n=>({}),tt=n=>({});function ul(n){let e,t,l,s,i,r,o,u,d;const a=n[5].default,m=we(a,n,n[4],null),_=n[5].right,y=we(_,n,n[4],tt);return{c(){e=v("div"),t=v("input"),l=q(),s=v("label"),m&&m.c(),i=q(),r=v("span"),y&&y.c(),c(t,"type","checkbox"),c(t,"class","govuk-checkboxes__input"),c(t,"id",n[1]),c(s,"class","govuk-label govuk-checkboxes__label"),c(s,"for",n[1]),c(s,"title",n[2]),Zt(r,"float","right"),c(e,"class","govuk-checkboxes__item"),c(e,"style",n[3])},m(b,h){C(b,e,h),w(e,t),t.checked=n[0],w(e,l),w(e,s),m&&m.m(s,null),w(e,i),w(e,r),y&&y.m(r,null),o=!0,u||(d=[E(t,"change",n[7]),E(t,"change",n[6])],u=!0)},p(b,[h]){(!o||h&2)&&c(t,"id",b[1]),h&1&&(t.checked=b[0]),m&&m.p&&(!o||h&16)&&ve(m,a,b,b[4],o?Me(a,b[4],h,null):pe(b[4]),null),(!o||h&2)&&c(s,"for",b[1]),(!o||h&4)&&c(s,"title",b[2]),y&&y.p&&(!o||h&16)&&ve(y,_,b,b[4],o?Me(_,b[4],h,cl):pe(b[4]),tt)},i(b){o||(p(m,b),p(y,b),o=!0)},o(b){S(m,b),S(y,b),o=!1},d(b){b&&L(e),m&&m.d(b),y&&y.d(b),u=!1,Le(d)}}}function dl(n,e,t){let{$$slots:l={},$$scope:s}=e;const i=Dt(l);let{id:r}=e,{checked:o}=e,{hint:u=null}=e,a=i.right!==void 0?"float: none":"";function m(y){Ue.call(this,n,y)}function _(){o=this.checked,t(0,o)}return n.$$set=y=>{"id"in y&&t(1,r=y.id),"checked"in y&&t(0,o=y.checked),"hint"in y&&t(2,u=y.hint),"$$scope"in y&&t(4,s=y.$$scope)},[o,r,u,a,s,l,m,_]}class _n extends F{constructor(e){super(),K(this,e,dl,ul,N,{id:1,checked:0,hint:2})}}function lt(n,e,t){const l=n.slice();return l[9]=e[t][0],l[10]=e[t][1],l}function nt(n){let e;return{c(){e=v("option"),e.__value="",Ce(e,e.__value)},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function st(n){let e,t=n[10]+"",l,s;return{c(){e=v("option"),l=$(t),e.__value=s=n[9],Ce(e,e.__value)},m(i,r){C(i,e,r),w(e,l)},p(i,r){r&8&&t!==(t=i[10]+"")&&he(l,t),r&8&&s!==(s=i[9])&&(e.__value=s,Ce(e,e.__value))},d(i){i&&L(e)}}}function ml(n){let e,t,l,s,i,r,o;e=new Gt({props:{errorMessage:n[6]}});let u=n[4]&&nt(),d=Ve(n[3]),a=[];for(let m=0;m<d.length;m+=1)a[m]=st(lt(n,d,m));return{c(){D(e.$$.fragment),t=q(),l=v("select"),u&&u.c(),s=Be();for(let m=0;m<a.length;m+=1)a[m].c();c(l,"class","govuk-select"),c(l,"id",n[2]),l.disabled=n[5],n[0]===void 0&&Ht(()=>n[8].call(l))},m(m,_){j(e,m,_),C(m,t,_),C(m,l,_),u&&u.m(l,null),w(l,s);for(let y=0;y<a.length;y+=1)a[y]&&a[y].m(l,null);Ye(l,n[0],!0),i=!0,r||(o=[E(l,"change",n[8]),E(l,"change",n[7])],r=!0)},p(m,_){const y={};if(_&64&&(y.errorMessage=m[6]),e.$set(y),m[4]?u||(u=nt(),u.c(),u.m(l,s)):u&&(u.d(1),u=null),_&8){d=Ve(m[3]);let b;for(b=0;b<d.length;b+=1){const h=lt(m,d,b);a[b]?a[b].p(h,_):(a[b]=st(h),a[b].c(),a[b].m(l,null))}for(;b<a.length;b+=1)a[b].d(1);a.length=d.length}(!i||_&4)&&c(l,"id",m[2]),(!i||_&32)&&(l.disabled=m[5]),_&9&&Ye(l,m[0])},i(m){i||(p(e.$$.fragment,m),i=!0)},o(m){S(e.$$.fragment,m),i=!1},d(m){m&&(L(t),L(l)),G(e,m),u&&u.d(),Ot(a,m),r=!1,Le(o)}}}function _l(n){let e,t;return e=new jt({props:{label:n[1],id:n[2],$$slots:{default:[ml]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p(l,[s]){const i={};s&2&&(i.label=l[1]),s&4&&(i.id=l[2]),s&8317&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function gl(n,e,t){let{label:l}=e,{id:s}=e,{choices:i}=e,{emptyOption:r=!1}=e,{disabled:o=!1}=e,{errorMessage:u=""}=e,{value:d}=e;function a(_){Ue.call(this,n,_)}function m(){d=Ft(this),t(0,d),t(3,i)}return n.$$set=_=>{"label"in _&&t(1,l=_.label),"id"in _&&t(2,s=_.id),"choices"in _&&t(3,i=_.choices),"emptyOption"in _&&t(4,r=_.emptyOption),"disabled"in _&&t(5,o=_.disabled),"errorMessage"in _&&t(6,u=_.errorMessage),"value"in _&&t(0,d=_.value)},[d,l,s,i,r,o,u,a,m]}class hl extends F{constructor(e){super(),K(this,e,gl,_l,N,{label:1,id:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}function bl(n){let e,t,l;function s(r){n[2](r)}let i={label:"Basemap",id:"basemap",choices:Kt(),disabled:n[0]};return n[1]!==void 0&&(i.value=n[1]),e=new hl({props:i}),Fe.push(()=>mt(e,"value",s)),{c(){D(e.$$.fragment)},m(r,o){j(e,r,o),l=!0},p(r,[o]){const u={};o&1&&(u.disabled=r[0]),!t&&o&2&&(t=!0,u.value=r[1],_t(()=>t=!1)),e.$set(u)},i(r){l||(p(e.$$.fragment,r),l=!0)},o(r){S(e.$$.fragment,r),l=!1},d(r){G(e,r)}}}function kl(n,e,t){let l;We(n,xe,r=>t(1,l=r));let{disabled:s=!1}=e;function i(r){l=r,xe.set(l)}return n.$$set=r=>{"disabled"in r&&t(0,s=r.disabled)},[s,l,i]}class gn extends F{constructor(e){super(),K(this,e,kl,bl,N,{disabled:0})}}function yl(n){let e,t,l,s,i,r,o;const u=n[3].default,d=we(u,n,n[2],null);return{c(){e=v("details"),t=v("summary"),l=v("span"),s=$(n[0]),i=q(),r=v("div"),d&&d.c(),c(l,"class","govuk-details__summary-text"),c(t,"class","govuk-details__summary"),c(r,"class","govuk-details__text"),e.open=n[1],c(e,"class","govuk-details"),c(e,"data-module","govuk-details")},m(a,m){C(a,e,m),w(e,t),w(t,l),w(l,s),w(e,i),w(e,r),d&&d.m(r,null),o=!0},p(a,[m]){(!o||m&1)&&he(s,a[0]),d&&d.p&&(!o||m&4)&&ve(d,u,a,a[2],o?Me(u,a[2],m,null):pe(a[2]),null),(!o||m&2)&&(e.open=a[1])},i(a){o||(p(d,a),o=!0)},o(a){S(d,a),o=!1},d(a){a&&L(e),d&&d.d(a)}}}function wl(n,e,t){let{$$slots:l={},$$scope:s}=e,{label:i}=e,{open:r=!1}=e;return n.$$set=o=>{"label"in o&&t(0,i=o.label),"open"in o&&t(1,r=o.open),"$$scope"in o&&t(2,s=o.$$scope)},[i,r,s,l]}class vl extends F{constructor(e){super(),K(this,e,wl,yl,N,{label:0,open:1})}}function pl(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"),c(e,"viewBox","0 0 60.006 21.412"),c(e,"width","14"),c(e,"height","20"),c(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class Ml extends F{constructor(e){super(),K(this,e,null,pl,N,{})}}function Tl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"area.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"area.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Cl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"poi.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"poi.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Ll(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"postal_code.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"postal_code.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Bl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"street.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"street.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Sl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"road.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"road.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Rl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"housenumber.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"housenumber.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Il(n){let e,t,l,s;return{c(){e=v("img"),Y(e.src,t=n[5])||c(e,"src",t),c(e,"alt",n[4]),c(e,"class","svelte-ltkwvy")},m(i,r){C(i,e,r),l||(s=E(e,"error",n[12]),l=!0)},p(i,r){r&32&&!Y(e.src,t=i[5])&&c(e,"src",t),r&16&&c(e,"alt",i[4])},d(i){i&&L(e),l=!1,s()}}}function it(n){let e,t;return{c(){e=v("span"),t=$(n[6]),c(e,"class","secondary svelte-ltkwvy")},m(l,s){C(l,e,s),w(e,t)},p(l,s){s&64&&he(t,l[6])},d(l){l&&L(e)}}}function Pl(n){var se,H;let e,t,l,s,i,r,o,u,d=n[0].place_name.replace(/,.*/,"")+"",a,m,_=n[2]==="always"||n[2]&&!n[0].address&&((se=n[0].properties)==null?void 0:se.kind)!=="road"&&((H=n[0].properties)==null?void 0:H.kind)!=="road_relation"&&!n[0].id.startsWith("address.")&&!n[0].id.startsWith("postal_code.")&&(!n[0].id.startsWith("poi.")||!n[5]),y,b,h=n[0].place_name.replace(/[^,]*,?\s*/,"")+"",z,Z,M;function O(T,R){var ee,g;return R&1&&(t=null),R&1&&(l=null),R&1&&(s=null),T[5]?Il:T[0].address?Rl:((ee=T[0].properties)==null?void 0:ee.kind)==="road"||((g=T[0].properties)==null?void 0:g.kind)==="road_relation"?Sl:(t==null&&(t=!!T[0].id.startsWith("address.")),t?Bl:(l==null&&(l=!!T[0].id.startsWith("postal_code.")),l?Ll:(s==null&&(s=!!T[0].id.startsWith("poi.")),s?Cl:Tl)))}let Q=O(n,-1),k=Q(n),B=_&&it(n);return{c(){e=v("li"),k.c(),i=q(),r=v("span"),o=v("span"),u=v("span"),a=$(d),m=q(),B&&B.c(),y=q(),b=v("span"),z=$(h),c(u,"class","primary svelte-ltkwvy"),c(o,"class","svelte-ltkwvy"),c(b,"class","line2 svelte-ltkwvy"),c(r,"class","texts svelte-ltkwvy"),c(e,"tabindex","0"),c(e,"data-selected",n[1]),c(e,"class","svelte-ltkwvy"),ae(e,"selected",n[1])},m(T,R){C(T,e,R),k.m(e,null),w(e,i),w(e,r),w(r,o),w(o,u),w(u,a),w(o,m),B&&B.m(o,null),w(r,y),w(r,b),w(b,z),Z||(M=[E(e,"mouseenter",n[10]),E(e,"focus",n[11])],Z=!0)},p(T,[R]){var ee,g;Q===(Q=O(T,R))&&k?k.p(T,R):(k.d(1),k=Q(T),k&&(k.c(),k.m(e,i))),R&1&&d!==(d=T[0].place_name.replace(/,.*/,"")+"")&&he(a,d),R&37&&(_=T[2]==="always"||T[2]&&!T[0].address&&((ee=T[0].properties)==null?void 0:ee.kind)!=="road"&&((g=T[0].properties)==null?void 0:g.kind)!=="road_relation"&&!T[0].id.startsWith("address.")&&!T[0].id.startsWith("postal_code.")&&(!T[0].id.startsWith("poi.")||!T[5])),_?B?B.p(T,R):(B=it(T),B.c(),B.m(o,null)):B&&(B.d(1),B=null),R&1&&h!==(h=T[0].place_name.replace(/[^,]*,?\s*/,"")+"")&&he(z,h),R&2&&c(e,"data-selected",T[1]),R&2&&ae(e,"selected",T[1])},i:A,o:A,d(T){T&&L(e),k.d(),B&&B.d(),Z=!1,Le(M)}}}function zl(n,e,t){var Z;let l,s,{feature:i}=e,{selected:r=!1}=e,{showPlaceType:o}=e,{missingIconsCache:u}=e,{iconsBaseUrl:d}=e;const a=(Z=i.properties)==null?void 0:Z.categories;let m,_;function y(M){_&&u.add(_),t(9,l--,l)}function b(M){Ue.call(this,n,M)}function h(M){Ue.call(this,n,M)}const z=M=>y(M.currentTarget);return n.$$set=M=>{"feature"in M&&t(0,i=M.feature),"selected"in M&&t(1,r=M.selected),"showPlaceType"in M&&t(2,o=M.showPlaceType),"missingIconsCache"in M&&t(8,u=M.missingIconsCache),"iconsBaseUrl"in M&&t(3,d=M.iconsBaseUrl)},n.$$.update=()=>{var M,O,Q,k;if(n.$$.dirty&824)do t(9,l--,l),t(4,m=a==null?void 0:a[l]),t(5,_=m?d+m.replace(/ /g,"_")+".svg":void 0);while(l>-1&&(!_||u.has(_)));n.$$.dirty&1&&t(6,s=i.id.startsWith("poi.")?(O=(M=i.properties)==null?void 0:M.categories)==null?void 0:O.join(", "):((k=(Q=i.properties)==null?void 0:Q.place_type_name)==null?void 0:k[0])??i.place_type[0])},t(9,l=(a==null?void 0:a.length)??0),[i,r,o,d,m,_,s,y,u,l,b,h,z]}class Ul extends F{constructor(e){super(),K(this,e,zl,Pl,N,{feature:0,selected:1,showPlaceType:2,missingIconsCache:8,iconsBaseUrl:3})}}function Vl(n){let e;return{c(){e=v("div"),e.innerHTML='<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>',c(e,"class","svelte-7cmwmc")},m(t,l){C(t,e,l)},p:A,i:A,o:A,d(t){t&&L(e)}}}class Wl extends F{constructor(e){super(),K(this,e,null,Vl,N,{})}}function El(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"),c(e,"width","14"),c(e,"height","14"),c(e,"viewBox","0 0 15 15"),c(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class ql extends F{constructor(e){super(),K(this,e,null,El,N,{})}}function Al(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"),c(e,"viewBox","0 0 14 14"),c(e,"width","13"),c(e,"height","13"),c(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class kt extends F{constructor(e){super(),K(this,e,null,Al,N,{})}}function Zl(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"),c(e,"viewBox","0 0 30 30"),c(e,"fill","none"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","svelte-d2loi5")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class yt extends F{constructor(e){super(),K(this,e,null,Zl,N,{})}}function rt(n,e,t){const l=n.slice();return l[75]=e[t],l[77]=t,l}function ot(n){let e,t;return e=new Wl({}),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function at(n){let e,t,l,s,i;return t=new Ml({}),{c(){e=v("button"),D(t.$$.fragment),c(e,"type","button"),c(e,"title",n[9]),c(e,"class","svelte-1r7dvt7"),ae(e,"active",n[0])},m(r,o){C(r,e,o),j(t,e,null),l=!0,s||(i=E(e,"click",n[61]),s=!0)},p(r,o){(!l||o[0]&512)&&c(e,"title",r[9]),(!l||o[0]&1)&&ae(e,"active",r[0])},i(r){l||(p(t.$$.fragment,r),l=!0)},o(r){S(t.$$.fragment,r),l=!1},d(r){r&&L(e),G(t),s=!1,i()}}}function Dl(n){let e,t=[],l=new Map,s,i,r,o=Ve(n[13]);const u=d=>d[75].id+(d[75].address?","+d[75].address:"");for(let d=0;d<o.length;d+=1){let a=rt(n,o,d),m=u(a);l.set(m,t[d]=ft(m,a))}return{c(){e=v("ul");for(let d=0;d<t.length;d+=1)t[d].c();c(e,"class","svelte-1r7dvt7")},m(d,a){C(d,e,a);for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(e,null);s=!0,i||(r=[E(e,"mouseleave",n[65]),E(e,"blur",n[66])],i=!0)},p(d,a){a[0]&8940544&&(o=Ve(d[13]),_e(),t=Jt(t,a,u,1,d,o,l,e,Xt,ft,null,rt),ge())},i(d){if(!s){for(let a=0;a<o.length;a+=1)p(t[a]);s=!0}},o(d){for(let a=0;a<t.length;a+=1)S(t[a]);s=!1},d(d){d&&L(e);for(let a=0;a<t.length;a+=1)t[a].d();i=!1,Le(r)}}}function jl(n){let e,t,l,s,i,r;return t=new yt({}),{c(){e=v("div"),D(t.$$.fragment),l=q(),s=v("div"),i=$(n[7]),c(s,"class","svelte-1r7dvt7"),c(e,"class","no-results svelte-1r7dvt7")},m(o,u){C(o,e,u),j(t,e,null),w(e,l),w(e,s),w(s,i),r=!0},p(o,u){(!r||u[0]&128)&&he(i,o[7])},i(o){r||(p(t.$$.fragment,o),r=!0)},o(o){S(t.$$.fragment,o),r=!1},d(o){o&&L(e),G(t)}}}function Gl(n){let e="",t;return{c(){t=$(e)},m(l,s){C(l,t,s)},p:A,i:A,o:A,d(l){l&&L(t)}}}function Hl(n){let e,t,l,s,i,r,o,u,d,a,m;return t=new yt({}),u=new kt({}),{c(){e=v("div"),D(t.$$.fragment),l=q(),s=v("div"),i=$(n[6]),r=q(),o=v("button"),D(u.$$.fragment),c(s,"class","svelte-1r7dvt7"),c(o,"class","svelte-1r7dvt7"),c(e,"class","error svelte-1r7dvt7")},m(_,y){C(_,e,y),j(t,e,null),w(e,l),w(e,s),w(s,i),w(e,r),w(e,o),j(u,o,null),d=!0,a||(m=E(o,"click",n[62]),a=!0)},p(_,y){(!d||y[0]&64)&&he(i,_[6])},i(_){d||(p(t.$$.fragment,_),p(u.$$.fragment,_),d=!0)},o(_){S(t.$$.fragment,_),S(u.$$.fragment,_),d=!1},d(_){_&&L(e),G(t),G(u),a=!1,m()}}}function ft(n,e){let t,l,s;function i(){return e[63](e[77])}function r(){return e[64](e[75])}return l=new Ul({props:{feature:e[75],showPlaceType:e[10],selected:e[14]===e[77],missingIconsCache:e[19],iconsBaseUrl:e[11]}}),l.$on("mouseenter",i),l.$on("focus",r),{key:n,first:null,c(){t=Be(),D(l.$$.fragment),this.first=t},m(o,u){C(o,t,u),j(l,o,u),s=!0},p(o,u){e=o;const d={};u[0]&8192&&(d.feature=e[75]),u[0]&1024&&(d.showPlaceType=e[10]),u[0]&24576&&(d.selected=e[14]===e[77]),u[0]&2048&&(d.iconsBaseUrl=e[11]),l.$set(d)},i(o){s||(p(l.$$.fragment,o),s=!0)},o(o){S(l.$$.fragment,o),s=!1},d(o){o&&L(t),G(l,o)}}}function Ol(n){let e,t,l,s,i,r,o,u,d,a,m,_,y,b,h,z,Z,M,O,Q;s=new ql({}),a=new kt({});let k=n[18]&&ot(),B=n[5]===!0&&at(n);const se=n[53].default,H=we(se,n,n[52],null),T=[Hl,Gl,jl,Dl],R=[];function ee(g,U){var ie,ce;return g[17]?0:g[15]?((ie=g[13])==null?void 0:ie.length)===0?2:g[15]&&((ce=g[13])!=null&&ce.length)?3:-1:1}return~(h=ee(n))&&(z=R[h]=T[h](n)),{c(){e=v("form"),t=v("div"),l=v("button"),D(s.$$.fragment),i=q(),r=v("input"),o=q(),u=v("div"),d=v("button"),D(a.$$.fragment),m=q(),k&&k.c(),_=q(),B&&B.c(),y=q(),H&&H.c(),b=q(),z&&z.c(),c(l,"class","search-button svelte-1r7dvt7"),c(l,"type","button"),c(r,"placeholder",n[8]),c(r,"aria-label",n[8]),c(r,"class","svelte-1r7dvt7"),c(d,"type","button"),c(d,"title",n[3]),c(d,"class","svelte-1r7dvt7"),c(u,"class","clear-button-container svelte-1r7dvt7"),ae(u,"displayable",n[1]!==""),c(t,"class","input-group svelte-1r7dvt7"),c(e,"tabindex","0"),c(e,"class",Z=Ee(n[2])+" svelte-1r7dvt7"),ae(e,"can-collapse",n[4]&&n[1]==="")},m(g,U){C(g,e,U),w(e,t),w(t,l),j(s,l,null),w(t,i),w(t,r),n[55](r),Ce(r,n[1]),w(t,o),w(t,u),w(u,d),j(a,d,null),w(u,m),k&&k.m(u,null),w(t,_),B&&B.m(t,null),w(t,y),H&&H.m(t,null),w(e,b),~h&&R[h].m(e,null),M=!0,O||(Q=[E(l,"click",n[54]),E(r,"input",n[56]),E(r,"focus",n[57]),E(r,"blur",n[58]),E(r,"keydown",n[21]),E(r,"input",n[59]),E(d,"click",n[60]),E(e,"submit",Nt(n[20]))],O=!0)},p(g,U){(!M||U[0]&256)&&c(r,"placeholder",g[8]),(!M||U[0]&256)&&c(r,"aria-label",g[8]),U[0]&2&&r.value!==g[1]&&Ce(r,g[1]),(!M||U[0]&8)&&c(d,"title",g[3]),g[18]?k?U[0]&262144&&p(k,1):(k=ot(),k.c(),p(k,1),k.m(u,null)):k&&(_e(),S(k,1,1,()=>{k=null}),ge()),(!M||U[0]&2)&&ae(u,"displayable",g[1]!==""),g[5]===!0?B?(B.p(g,U),U[0]&32&&p(B,1)):(B=at(g),B.c(),p(B,1),B.m(t,y)):B&&(_e(),S(B,1,1,()=>{B=null}),ge()),H&&H.p&&(!M||U[1]&2097152)&&ve(H,se,g,g[52],M?Me(se,g[52],U,null):pe(g[52]),null);let ie=h;h=ee(g),h===ie?~h&&R[h].p(g,U):(z&&(_e(),S(R[ie],1,1,()=>{R[ie]=null}),ge()),~h?(z=R[h],z?z.p(g,U):(z=R[h]=T[h](g),z.c()),p(z,1),z.m(e,null)):z=null),(!M||U[0]&4&&Z!==(Z=Ee(g[2])+" svelte-1r7dvt7"))&&c(e,"class",Z),(!M||U[0]&22)&&ae(e,"can-collapse",g[4]&&g[1]==="")},i(g){M||(p(s.$$.fragment,g),p(a.$$.fragment,g),p(k),p(B),p(H,g),p(z),M=!0)},o(g){S(s.$$.fragment,g),S(a.$$.fragment,g),S(k),S(B),S(H,g),S(z),M=!1},d(g){g&&L(e),G(s),n[55](null),G(a),k&&k.d(),B&&B.d(),H&&H.d(g),~h&&R[h].d(),O=!1,Le(Q)}}}function Fl(n,e,t){const l=e[1],s=e[0],i=l-s;return n===l&&t?n:((n-s)%i+i)%i+s}function ct(n){let e=[...n];return e[2]<e[0]&&(e[2]+=360),e}function Kl(n,e,t){let l,{$$slots:s={},$$scope:i}=e,{class:r=void 0}=e,{apiKey:o}=e,{bbox:u=void 0}=e,{clearButtonTitle:d="clear"}=e,{clearOnBlur:a=!1}=e,{collapsed:m=!1}=e,{country:_=void 0}=e,{debounceSearch:y=200}=e,{enableReverse:b=!1}=e,{errorMessage:h="Something went wrong…"}=e,{filter:z=()=>!0}=e,{flyTo:Z=!0}=e,{fuzzyMatch:M=!0}=e,{language:O=void 0}=e,{limit:Q=void 0}=e,{mapController:k=void 0}=e,{minLength:B=2}=e,{noResultsMessage:se="Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!"}=e,{placeholder:H="Search"}=e,{proximity:T=void 0}=e,{reverseActive:R=b==="always"}=e,{reverseButtonTitle:ee="toggle reverse geocoding"}=e,{searchValue:g=""}=e,{showFullGeometry:U=!0}=e,{showPlaceType:ie="ifNeeded"}=e,{showResultsWhileTyping:ce=!0}=e,{trackProximity:Se=!0}=e,{types:ue=void 0}=e,{zoom:Re=16}=e,{maxZoom:Te=18}=e,{apiUrl:qe="https://api.maptiler.com/geocoding"}=e,{fetchParameters:Ae={}}=e,{iconsBaseUrl:Ke="https://cdn.maptiler.com/maptiler-geocoding-control/v0.0.99/icons/"}=e;function wt(){te.focus()}function vt(){te.blur()}function Ne(f,W=!0){t(1,g=f),W?(t(14,V=-1),Je()):(je(),setTimeout(()=>{te.focus(),te.select()}))}let be=!1,P,J,I,Qe="",te,V=-1,le,Ie=[],de,ke,Pe,Ze;const pt=new Set,re=Qt();gt(()=>{k&&(k.setEventHandler(void 0),k.indicateReverse(!1),k.setSelectedMarker(-1),k.setMarkers(void 0,void 0))});function Je(f){if(ke&&(clearTimeout(ke),ke=void 0),V>-1&&P)t(49,I=P[V]),t(1,g=I.place_name.replace(/,.*/,"")),t(17,le=void 0),t(48,J=void 0),t(14,V=-1);else if(g){const W=f||!Xe();De(g,{exact:!0}).then(()=>{t(48,J=P),t(49,I=void 0),W&&Mt()}).catch(ne=>t(17,le=ne))}}function Xe(){return/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(g)}async function De(f,{byId:W=!1,exact:ne=!1}={}){t(17,le=void 0);const ye=Xe(),x=new URLSearchParams;O!=null&&x.set("language",Array.isArray(O)?O.join(","):O),ue&&x.set("types",ue.join(",")),ye||(u&&x.set("bbox",u.map(oe=>oe.toFixed(6)).join(",")),_&&x.set("country",Array.isArray(_)?_.join(","):_)),W||(T&&x.set("proximity",T.map(oe=>oe.toFixed(6)).join(",")),(ne||!ce)&&x.set("autocomplete","false"),x.set("fuzzyMatch",String(M))),Q!==void 0&&(!ye||(ue==null?void 0:ue.length)===1)&&x.set("limit",String(Q)),x.set("key",o);const me=qe+"/"+encodeURIComponent(f)+".json?"+x.toString();if(me===Qe){W?(t(13,P=void 0),t(49,I=Ie[0])):t(13,P=Ie);return}Qe=me,de==null||de.abort();const X=new AbortController;t(18,de=X);let He;try{He=await fetch(me,{signal:X.signal,...Ae}).finally(()=>{X===de&&t(18,de=void 0)})}catch(oe){if(oe&&typeof oe=="object"&&"name"in oe&&oe.name==="AbortError")return;throw new Error}if(!He.ok)throw new Error;const Oe=await He.json();re("response",{url:me,featureCollection:Oe}),W?(t(13,P=void 0),t(49,I=Oe.features[0]),Ie=[I]):(t(13,P=Oe.features.filter(z)),Ie=P,ye&&te.focus())}function Mt(){var ne,ye,x,me;if(!(J!=null&&J.length)||!Z)return;const f=[180,90,-180,-90],W=!J.some(X=>!X.matching_text);for(const X of J)(W||!X.matching_text)&&(f[0]=Math.min(f[0],((ne=X.bbox)==null?void 0:ne[0])??X.center[0]),f[1]=Math.min(f[1],((ye=X.bbox)==null?void 0:ye[1])??X.center[1]),f[2]=Math.max(f[2],((x=X.bbox)==null?void 0:x[2])??X.center[0]),f[3]=Math.max(f[3],((me=X.bbox)==null?void 0:me[3])??X.center[1]));k&&J.length>0&&(I&&f[0]===f[2]&&f[1]===f[3]?k.flyTo(I.center,Re):k.fitBounds(ct(f),50,Te))}function Tt(f){t(0,R=b==="always"),Ne(Fl(f[0],[-180,180],!0).toFixed(6)+","+f[1].toFixed(6))}function Ct(f){if(!P)return;let W=f.key==="ArrowDown"?1:f.key==="ArrowUp"?-1:0;W?(V===-1&&W===-1&&t(14,V=P.length),t(14,V+=W),V>=P.length&&t(14,V=-1),f.preventDefault()):["ArrowLeft","ArrowRight","Home","End"].includes(f.key)&&t(14,V=-1)}function je(f=!0){if(t(17,le=void 0),ce){if(ke&&clearTimeout(ke),g.length<B)return;const W=g;ke=window.setTimeout(()=>{De(W).catch(ne=>t(17,le=ne))},f?y:0)}else t(13,P=void 0),t(17,le=void 0)}function Ge(f){t(49,I=f),t(1,g=f.place_name),t(14,V=-1)}const Lt=()=>te.focus();function Bt(f){Fe[f?"unshift":"push"](()=>{te=f,t(16,te)})}function St(){g=this.value,t(1,g),t(12,be),t(27,a)}const Rt=()=>t(12,be=!0),It=()=>t(12,be=!1),Pt=()=>je(),zt=()=>{t(1,g=""),te.focus()},Ut=()=>t(0,R=!R),Vt=()=>t(17,le=void 0),Wt=f=>t(14,V=f),Et=f=>Ge(f),qt=()=>t(14,V=-1),At=()=>{};return n.$$set=f=>{"class"in f&&t(2,r=f.class),"apiKey"in f&&t(25,o=f.apiKey),"bbox"in f&&t(26,u=f.bbox),"clearButtonTitle"in f&&t(3,d=f.clearButtonTitle),"clearOnBlur"in f&&t(27,a=f.clearOnBlur),"collapsed"in f&&t(4,m=f.collapsed),"country"in f&&t(28,_=f.country),"debounceSearch"in f&&t(29,y=f.debounceSearch),"enableReverse"in f&&t(5,b=f.enableReverse),"errorMessage"in f&&t(6,h=f.errorMessage),"filter"in f&&t(30,z=f.filter),"flyTo"in f&&t(31,Z=f.flyTo),"fuzzyMatch"in f&&t(32,M=f.fuzzyMatch),"language"in f&&t(33,O=f.language),"limit"in f&&t(34,Q=f.limit),"mapController"in f&&t(35,k=f.mapController),"minLength"in f&&t(36,B=f.minLength),"noResultsMessage"in f&&t(7,se=f.noResultsMessage),"placeholder"in f&&t(8,H=f.placeholder),"proximity"in f&&t(24,T=f.proximity),"reverseActive"in f&&t(0,R=f.reverseActive),"reverseButtonTitle"in f&&t(9,ee=f.reverseButtonTitle),"searchValue"in f&&t(1,g=f.searchValue),"showFullGeometry"in f&&t(37,U=f.showFullGeometry),"showPlaceType"in f&&t(10,ie=f.showPlaceType),"showResultsWhileTyping"in f&&t(38,ce=f.showResultsWhileTyping),"trackProximity"in f&&t(39,Se=f.trackProximity),"types"in f&&t(40,ue=f.types),"zoom"in f&&t(41,Re=f.zoom),"maxZoom"in f&&t(42,Te=f.maxZoom),"apiUrl"in f&&t(43,qe=f.apiUrl),"fetchParameters"in f&&t(44,Ae=f.fetchParameters),"iconsBaseUrl"in f&&t(11,Ke=f.iconsBaseUrl),"$$scope"in f&&t(52,i=f.$$scope)},n.$$.update=()=>{if(n.$$.dirty[1]&256&&(Se||t(24,T=void 0)),n.$$.dirty[0]&134221824&&setTimeout(()=>{t(15,Pe=be),a&&!be&&t(1,g="")}),n.$$.dirty[0]&8194|n.$$.dirty[1]&32&&g.length<B&&(t(49,I=void 0),t(13,P=void 0),t(17,le=void 0),t(48,J=P)),n.$$.dirty[1]&262208&&U&&I&&!I.address&&I.geometry.type==="Point"&&De(I.id,{byId:!0}).catch(f=>t(17,le=f)),n.$$.dirty[1]&789521&&(k&&I&&I.id!==Ze&&Z&&(!I.bbox||I.bbox[0]===I.bbox[2]&&I.bbox[1]===I.bbox[3]?k.flyTo(I.center,I.id.startsWith("poi.")||I.id.startsWith("address.")?Te:Re):k.fitBounds(ct(I.bbox),50,Te),t(13,P=void 0),t(48,J=void 0),t(14,V=-1)),t(50,Ze=I==null?void 0:I.id)),n.$$.dirty[0]&8192|n.$$.dirty[1]&131072&&J!==P&&t(48,J=void 0),n.$$.dirty[1]&393232&&k&&k.setMarkers(J,I),n.$$.dirty[0]&2&&t(14,V=-1),n.$$.dirty[0]&40961|n.$$.dirty[1]&272&&k&&k.setEventHandler(f=>{switch(f.type){case"mapClick":R&&Tt(f.coordinates);break;case"proximityChange":t(24,T=Se?f.proximity:void 0);break;case"markerClick":{const W=P==null?void 0:P.find(ne=>ne.id===f.id);W&&Ge(W)}break;case"markerMouseEnter":t(14,V=Pe?(P==null?void 0:P.findIndex(W=>W.id===f.id))??-1:-1);break;case"markerMouseLeave":t(14,V=-1);break}}),n.$$.dirty[0]&16384|n.$$.dirty[1]&16&&(k==null||k.setSelectedMarker(V)),n.$$.dirty[0]&24576&&t(51,l=P==null?void 0:P[V]),n.$$.dirty[0]&2|n.$$.dirty[1]&16){const f=/^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(g);k==null||k.setReverseMarker(f?[Number(f[1]),Number(f[2])]:void 0)}n.$$.dirty[1]&1048576&&re("select",l),n.$$.dirty[1]&262144&&re("pick",I),n.$$.dirty[0]&40960&&re("optionsVisibilityChange",Pe&&!!P),n.$$.dirty[0]&8192&&re("featuresListed",P),n.$$.dirty[1]&131072&&re("featuresMarked",J),n.$$.dirty[0]&1&&re("reverseToggle",R),n.$$.dirty[0]&2&&re("queryChange",g),n.$$.dirty[0]&1|n.$$.dirty[1]&16&&k&&k.indicateReverse(R)},[R,g,r,d,m,b,h,se,H,ee,ie,Ke,be,P,V,Pe,te,le,de,pt,Je,Ct,je,Ge,T,o,u,a,_,y,z,Z,M,O,Q,k,B,U,ce,Se,ue,Re,Te,qe,Ae,wt,vt,Ne,J,I,Ze,l,i,s,Lt,Bt,St,Rt,It,Pt,zt,Ut,Vt,Wt,Et,qt,At]}class Nl extends F{constructor(e){super(),K(this,e,Kl,Ol,N,{class:2,apiKey:25,bbox:26,clearButtonTitle:3,clearOnBlur:27,collapsed:4,country:28,debounceSearch:29,enableReverse:5,errorMessage:6,filter:30,flyTo:31,fuzzyMatch:32,language:33,limit:34,mapController:35,minLength:36,noResultsMessage:7,placeholder:8,proximity:24,reverseActive:0,reverseButtonTitle:9,searchValue:1,showFullGeometry:37,showPlaceType:10,showResultsWhileTyping:38,trackProximity:39,types:40,zoom:41,maxZoom:42,apiUrl:43,fetchParameters:44,iconsBaseUrl:11,focus:45,blur:46,setQuery:47},null,[-1,-1,-1])}get focus(){return this.$$.ctx[45]}get blur(){return this.$$.ctx[46]}get setQuery(){return this.$$.ctx[47]}}function ut(n){let e,t,l,s;return t=new Nl({props:{mapController:n[1],apiKey:"MZEJTanw3WpxRvt7qDfo",country:"gb"}}),{c(){e=v("div"),D(t.$$.fragment),c(e,"class",l=Ee(n[0])+" svelte-13xba41")},m(i,r){C(i,e,r),j(t,e,null),s=!0},p(i,r){const o={};r&2&&(o.mapController=i[1]),t.$set(o),(!s||r&1&&l!==(l=Ee(i[0])+" svelte-13xba41"))&&c(e,"class",l)},i(i){s||(p(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){i&&L(e),G(t)}}}function Ql(n){let e,t,l=n[1]&&ut(n);return{c(){l&&l.c(),e=Be()},m(s,i){l&&l.m(s,i),C(s,e,i),t=!0},p(s,[i]){s[1]?l?(l.p(s,i),i&2&&p(l,1)):(l=ut(s),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(_e(),S(l,1,1,()=>{l=null}),ge())},i(s){t||(p(l),t=!0)},o(s){S(l),t=!1},d(s){s&&L(e),l&&l.d(s)}}}function Jl(n,e,t){let l;We(n,ht,r=>t(2,l=r));let{position:s="top-left"}=e,i;return Yt(()=>{t(1,i=xt(l,$t))}),n.$$set=r=>{"position"in r&&t(0,s=r.position)},[s,i]}class hn extends F{constructor(e){super(),K(this,e,Jl,Ql,N,{position:0})}}function Xl(n,e,t){t===void 0&&(t={});var l=$e(n),s=$e(e),i=ze(s[1]-l[1]),r=ze(s[0]-l[0]),o=ze(l[1]),u=ze(s[1]),d=Math.pow(Math.sin(i/2),2)+Math.pow(Math.sin(r/2),2)*Math.cos(o)*Math.cos(u);return el(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),t.units)}function bn(n,e){return e===void 0&&(e={}),tl(n,function(t,l){var s=l.geometry.coordinates;return t+Xl(s[0],s[1],e)},0)}const Yl={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},kn=10,yn=10;function xl(n){let e;return{c(){e=$("Luc Chaissac")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function $l(n){let e,t,l,s,i,r,o,u,d;return u=new ll({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[xl]},$$scope:{ctx:n}}}),{c(){e=v("ul"),t=v("li"),t.innerHTML=`<b>Click</b>
    on the map to open a new tab with a 3rd-party imagery provider`,l=q(),s=v("li"),s.innerHTML=`Press <b>Escape</b>
    to exit this mode`,i=q(),r=v("li"),o=$("Cursor by "),D(u.$$.fragment)},m(a,m){C(a,e,m),w(e,t),w(e,l),w(e,s),w(e,i),w(e,r),w(r,o),j(u,r,null),d=!0},p(a,[m]){const _={};m&1&&(_.$$scope={dirty:m,ctx:a}),u.$set(_)},i(a){d||(p(u.$$.fragment,a),d=!0)},o(a){S(u.$$.fragment,a),d=!1},d(a){a&&L(e),G(u)}}}class en extends F{constructor(e){super(),K(this,e,null,$l,N,{})}}const tn="/atip/pipeline_form_updates/assets/camera_cursor-824d29b6.svg",{window:ln}=il;function dt(n){let e,t,l,s;const i=[sn,nn],r=[];function o(u,d){return u[0]?0:1}return e=o(n),t=r[e]=i[e](n),{c(){t.c(),l=Be()},m(u,d){r[e].m(u,d),C(u,l,d),s=!0},p(u,d){let a=e;e=o(u),e===a?r[e].p(u,d):(_e(),S(r[a],1,1,()=>{r[a]=null}),ge(),t=r[e],t?t.p(u,d):(t=r[e]=i[e](u),t.c()),p(t,1),t.m(l.parentNode,l))},i(u){s||(p(t),s=!0)},o(u){S(t),s=!1},d(u){u&&L(l),r[e].d(u)}}}function nn(n){let e,t;return e=new bt({props:{$$slots:{default:[rn]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},p(l,s){const i={};s&4096&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function sn(n){let e,t,l,s,i,r,o;e=new bt({props:{$$slots:{default:[on]},$$scope:{ctx:n}}}),e.$on("click",n[4]);function u(a){n[5](a)}let d={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return n[2].streetViewImagery!==void 0&&(d.value=n[2].streetViewImagery),l=new sl({props:d}),Fe.push(()=>mt(l,"value",u)),r=new vl({props:{label:"Help",$$slots:{default:[an]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment),t=q(),D(l.$$.fragment),i=q(),D(r.$$.fragment)},m(a,m){j(e,a,m),C(a,t,m),j(l,a,m),C(a,i,m),j(r,a,m),o=!0},p(a,m){const _={};m&4096&&(_.$$scope={dirty:m,ctx:a}),e.$set(_);const y={};!s&&m&4&&(s=!0,y.value=a[2].streetViewImagery,_t(()=>s=!1)),l.$set(y);const b={};m&4096&&(b.$$scope={dirty:m,ctx:a}),r.$set(b)},i(a){o||(p(e.$$.fragment,a),p(l.$$.fragment,a),p(r.$$.fragment,a),o=!0)},o(a){S(e.$$.fragment,a),S(l.$$.fragment,a),S(r.$$.fragment,a),o=!1},d(a){a&&(L(t),L(i)),G(e,a),G(l,a),G(r,a)}}}function rn(n){let e;return{c(){e=$("Enable Street View")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function on(n){let e;return{c(){e=$("Disable Street View")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function an(n){let e,t;return e=new en({}),{c(){D(e.$$.fragment)},m(l,s){j(e,l,s),t=!0},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function fn(n){let e,t,l,s,i=n[1]&&dt(n);return{c(){i&&i.c(),e=Be()},m(r,o){i&&i.m(r,o),C(r,e,o),t=!0,l||(s=E(ln,"keydown",n[3]),l=!0)},p(r,[o]){r[1]?i?(i.p(r,o),o&2&&p(i,1)):(i=dt(r),i.c(),p(i,1),i.m(e.parentNode,e)):i&&(_e(),S(i,1,1,()=>{i=null}),ge())},i(r){t||(p(i),t=!0)},o(r){S(i),t=!1},d(r){r&&L(e),i&&i.d(r),l=!1,s()}}}function cn(n,e,t){let l,s;We(n,et,h=>t(2,l=h)),We(n,ht,h=>t(8,s=h));let{enabled:i}=e,{showControls:r=!0}=e,o=[];function u(){s.on("click",a),s.getCanvas().style.cursor=`url(${tn}), auto`,o=nl();for(let h of o)h.setProperty(s,"line-color",Yl.streetview)}function d(){s.off("click",a),s.getCanvas().style.cursor="inherit";for(let h of o)h.returnToDefaultPaintValues(s);o=[]}gt(d);function a(h){if(!i)return;let z=h.lngLat.lng,Z=h.lngLat.lat;l.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${Z},${z}&cbp=11,0,0,0,0`,"_blank"):l.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${Z}~${z}&style=x`,"_blank")}function m(h){i&&h.key=="Escape"&&(h.stopPropagation(),t(0,i=!1))}const _=()=>t(0,i=!1);function y(h){n.$$.not_equal(l.streetViewImagery,h)&&(l.streetViewImagery=h,et.set(l))}const b=()=>t(0,i=!0);return n.$$set=h=>{"enabled"in h&&t(0,i=h.enabled),"showControls"in h&&t(1,r=h.showControls)},n.$$.update=()=>{n.$$.dirty&1&&(i?u():d())},[i,r,l,m,_,y,b]}class wn extends F{constructor(e){super(),K(this,e,cn,fn,N,{enabled:0,showControls:1})}}export{dn as B,_n as C,hn as G,hl as S,yn as a,Yl as b,kn as c,Xl as d,vl as e,mn as f,wn as g,en as h,gn as i,bn as l};
