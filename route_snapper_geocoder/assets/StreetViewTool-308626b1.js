import{S as F,i as K,s as N,J as we,e as v,h as c,j as C,O as ve,P as pe,Q as Me,t as p,n as S,o as L,k as w,d as q,K as Zt,x as W,I as Le,bi as Dt,b6 as ze,F as Ot,g as D,m as O,p as j,E as jt,a3 as Ve,Y as Be,a$ as Gt,bo as Ye,aQ as Ht,bp as Ft,w as Ce,v as $,H as he,bq as Kt,b as Fe,c as mt,l as _t,q as Ee,b3 as xe,br as fe,a8 as A,bs as ae,a7 as Y,bn as We,bt as Nt,Z as _e,_ as ge,U as Qt,a0 as gt,a4 as Jt,a5 as Xt,D as ht,u as Yt,bu as xt,X as $t,ao as $e,ap as Ue,bv as el,bw as tl,b4 as ll,aR as et,bx as nl,a as bt,R as sl}from"./index-d5f9d9f5.js";const rl=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function il(n){let e,t;const l=n[1].default,s=we(l,n,n[0],null);return{c(){e=v("div"),s&&s.c(),c(e,"class","govuk-button-group")},m(r,i){C(r,e,i),s&&s.m(e,null),t=!0},p(r,[i]){s&&s.p&&(!t||i&1)&&ve(s,l,r,r[0],t?Me(l,r[0],i,null):pe(r[0]),null)},i(r){t||(p(s,r),t=!0)},o(r){S(s,r),t=!1},d(r){r&&L(e),s&&s.d(r)}}}function ol(n,e,t){let{$$slots:l={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,l]}class dn extends F{constructor(e){super(),K(this,e,ol,il,N,{})}}function al(n){let e,t,l;const s=n[3].default,r=we(s,n,n[2],null);return{c(){e=v("fieldset"),t=v("div"),r&&r.c(),c(t,"class",n[0]),c(t,"data-module","govuk-checkboxes"),c(e,"class","govuk-fieldset")},m(i,o){C(i,e,o),w(e,t),r&&r.m(t,null),l=!0},p(i,[o]){r&&r.p&&(!l||o&4)&&ve(r,s,i,i[2],l?Me(s,i[2],o,null):pe(i[2]),null)},i(i){l||(p(r,i),l=!0)},o(i){S(r,i),l=!1},d(i){i&&L(e),r&&r.d(i)}}}function fl(n,e,t){let{$$slots:l={},$$scope:s}=e,{small:r=!1}=e,i=r?"govuk-checkboxes--small":"govuk-checkboxes";return n.$$set=o=>{"small"in o&&t(1,r=o.small),"$$scope"in o&&t(2,s=o.$$scope)},[i,r,s,l]}class mn extends F{constructor(e){super(),K(this,e,fl,al,N,{small:1})}}const cl=n=>({}),tt=n=>({});function ul(n){let e,t,l,s,r,i,o,u,d;const a=n[5].default,m=we(a,n,n[4],null),_=n[5].right,y=we(_,n,n[4],tt);return{c(){e=v("div"),t=v("input"),l=q(),s=v("label"),m&&m.c(),r=q(),i=v("span"),y&&y.c(),c(t,"type","checkbox"),c(t,"class","govuk-checkboxes__input"),c(t,"id",n[1]),c(s,"class","govuk-label govuk-checkboxes__label"),c(s,"for",n[1]),c(s,"title",n[2]),Zt(i,"float","right"),c(e,"class","govuk-checkboxes__item"),c(e,"style",n[3])},m(b,h){C(b,e,h),w(e,t),t.checked=n[0],w(e,l),w(e,s),m&&m.m(s,null),w(e,r),w(e,i),y&&y.m(i,null),o=!0,u||(d=[W(t,"change",n[7]),W(t,"change",n[6])],u=!0)},p(b,[h]){(!o||h&2)&&c(t,"id",b[1]),h&1&&(t.checked=b[0]),m&&m.p&&(!o||h&16)&&ve(m,a,b,b[4],o?Me(a,b[4],h,null):pe(b[4]),null),(!o||h&2)&&c(s,"for",b[1]),(!o||h&4)&&c(s,"title",b[2]),y&&y.p&&(!o||h&16)&&ve(y,_,b,b[4],o?Me(_,b[4],h,cl):pe(b[4]),tt)},i(b){o||(p(m,b),p(y,b),o=!0)},o(b){S(m,b),S(y,b),o=!1},d(b){b&&L(e),m&&m.d(b),y&&y.d(b),u=!1,Le(d)}}}function dl(n,e,t){let{$$slots:l={},$$scope:s}=e;const r=Dt(l);let{id:i}=e,{checked:o}=e,{hint:u=null}=e,a=r.right!==void 0?"float: none":"";function m(y){ze.call(this,n,y)}function _(){o=this.checked,t(0,o)}return n.$$set=y=>{"id"in y&&t(1,i=y.id),"checked"in y&&t(0,o=y.checked),"hint"in y&&t(2,u=y.hint),"$$scope"in y&&t(4,s=y.$$scope)},[o,i,u,a,s,l,m,_]}class _n extends F{constructor(e){super(),K(this,e,dl,ul,N,{id:1,checked:0,hint:2})}}function lt(n,e,t){const l=n.slice();return l[9]=e[t][0],l[10]=e[t][1],l}function nt(n){let e;return{c(){e=v("option"),e.__value="",Ce(e,e.__value)},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function st(n){let e,t=n[10]+"",l,s;return{c(){e=v("option"),l=$(t),e.__value=s=n[9],Ce(e,e.__value)},m(r,i){C(r,e,i),w(e,l)},p(r,i){i&8&&t!==(t=r[10]+"")&&he(l,t),i&8&&s!==(s=r[9])&&(e.__value=s,Ce(e,e.__value))},d(r){r&&L(e)}}}function ml(n){let e,t,l,s,r,i,o;e=new jt({props:{errorMessage:n[6]}});let u=n[4]&&nt(),d=Ve(n[3]),a=[];for(let m=0;m<d.length;m+=1)a[m]=st(lt(n,d,m));return{c(){D(e.$$.fragment),t=q(),l=v("select"),u&&u.c(),s=Be();for(let m=0;m<a.length;m+=1)a[m].c();c(l,"class","govuk-select"),c(l,"id",n[2]),l.disabled=n[5],n[0]===void 0&&Gt(()=>n[8].call(l))},m(m,_){O(e,m,_),C(m,t,_),C(m,l,_),u&&u.m(l,null),w(l,s);for(let y=0;y<a.length;y+=1)a[y]&&a[y].m(l,null);Ye(l,n[0],!0),r=!0,i||(o=[W(l,"change",n[8]),W(l,"change",n[7])],i=!0)},p(m,_){const y={};if(_&64&&(y.errorMessage=m[6]),e.$set(y),m[4]?u||(u=nt(),u.c(),u.m(l,s)):u&&(u.d(1),u=null),_&8){d=Ve(m[3]);let b;for(b=0;b<d.length;b+=1){const h=lt(m,d,b);a[b]?a[b].p(h,_):(a[b]=st(h),a[b].c(),a[b].m(l,null))}for(;b<a.length;b+=1)a[b].d(1);a.length=d.length}(!r||_&4)&&c(l,"id",m[2]),(!r||_&32)&&(l.disabled=m[5]),_&9&&Ye(l,m[0])},i(m){r||(p(e.$$.fragment,m),r=!0)},o(m){S(e.$$.fragment,m),r=!1},d(m){m&&(L(t),L(l)),j(e,m),u&&u.d(),Ht(a,m),i=!1,Le(o)}}}function _l(n){let e,t;return e=new Ot({props:{label:n[1],id:n[2],$$slots:{default:[ml]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment)},m(l,s){O(e,l,s),t=!0},p(l,[s]){const r={};s&2&&(r.label=l[1]),s&4&&(r.id=l[2]),s&8317&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function gl(n,e,t){let{label:l}=e,{id:s}=e,{choices:r}=e,{emptyOption:i=!1}=e,{disabled:o=!1}=e,{errorMessage:u=""}=e,{value:d}=e;function a(_){ze.call(this,n,_)}function m(){d=Ft(this),t(0,d),t(3,r)}return n.$$set=_=>{"label"in _&&t(1,l=_.label),"id"in _&&t(2,s=_.id),"choices"in _&&t(3,r=_.choices),"emptyOption"in _&&t(4,i=_.emptyOption),"disabled"in _&&t(5,o=_.disabled),"errorMessage"in _&&t(6,u=_.errorMessage),"value"in _&&t(0,d=_.value)},[d,l,s,r,i,o,u,a,m]}class hl extends F{constructor(e){super(),K(this,e,gl,_l,N,{label:1,id:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}function bl(n){let e,t,l;function s(i){n[2](i)}let r={label:"Basemap",id:"basemap",choices:Kt(),disabled:n[0]};return n[1]!==void 0&&(r.value=n[1]),e=new hl({props:r}),Fe.push(()=>mt(e,"value",s)),{c(){D(e.$$.fragment)},m(i,o){O(e,i,o),l=!0},p(i,[o]){const u={};o&1&&(u.disabled=i[0]),!t&&o&2&&(t=!0,u.value=i[1],_t(()=>t=!1)),e.$set(u)},i(i){l||(p(e.$$.fragment,i),l=!0)},o(i){S(e.$$.fragment,i),l=!1},d(i){j(e,i)}}}function kl(n,e,t){let l;Ee(n,xe,i=>t(1,l=i));let{disabled:s=!1}=e;function r(i){l=i,xe.set(l)}return n.$$set=i=>{"disabled"in i&&t(0,s=i.disabled)},[s,l,r]}class gn extends F{constructor(e){super(),K(this,e,kl,bl,N,{disabled:0})}}function yl(n){let e,t,l,s,r,i,o;const u=n[3].default,d=we(u,n,n[2],null);return{c(){e=v("details"),t=v("summary"),l=v("span"),s=$(n[0]),r=q(),i=v("div"),d&&d.c(),c(l,"class","govuk-details__summary-text"),c(t,"class","govuk-details__summary"),c(i,"class","govuk-details__text"),e.open=n[1],c(e,"class","govuk-details"),c(e,"data-module","govuk-details")},m(a,m){C(a,e,m),w(e,t),w(t,l),w(l,s),w(e,r),w(e,i),d&&d.m(i,null),o=!0},p(a,[m]){(!o||m&1)&&he(s,a[0]),d&&d.p&&(!o||m&4)&&ve(d,u,a,a[2],o?Me(u,a[2],m,null):pe(a[2]),null),(!o||m&2)&&(e.open=a[1])},i(a){o||(p(d,a),o=!0)},o(a){S(d,a),o=!1},d(a){a&&L(e),d&&d.d(a)}}}function wl(n,e,t){let{$$slots:l={},$$scope:s}=e,{label:r}=e,{open:i=!1}=e;return n.$$set=o=>{"label"in o&&t(0,r=o.label),"open"in o&&t(1,i=o.open),"$$scope"in o&&t(2,s=o.$$scope)},[r,i,s,l]}class vl extends F{constructor(e){super(),K(this,e,wl,yl,N,{label:0,open:1})}}function pl(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"),c(e,"viewBox","0 0 60.006 21.412"),c(e,"width","14"),c(e,"height","20"),c(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class Ml extends F{constructor(e){super(),K(this,e,null,pl,N,{})}}function Tl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"area.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"area.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Cl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"poi.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"poi.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Ll(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"postal_code.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"postal_code.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Bl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"street.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"street.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Sl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"road.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"road.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Rl(n){let e,t;return{c(){e=v("img"),Y(e.src,t=n[3]+"housenumber.svg")||c(e,"src",t),c(e,"alt",n[6]),c(e,"class","svelte-ltkwvy")},m(l,s){C(l,e,s)},p(l,s){s&8&&!Y(e.src,t=l[3]+"housenumber.svg")&&c(e,"src",t),s&64&&c(e,"alt",l[6])},d(l){l&&L(e)}}}function Il(n){let e,t,l,s;return{c(){e=v("img"),Y(e.src,t=n[5])||c(e,"src",t),c(e,"alt",n[4]),c(e,"class","svelte-ltkwvy")},m(r,i){C(r,e,i),l||(s=W(e,"error",n[12]),l=!0)},p(r,i){i&32&&!Y(e.src,t=r[5])&&c(e,"src",t),i&16&&c(e,"alt",r[4])},d(r){r&&L(e),l=!1,s()}}}function rt(n){let e,t;return{c(){e=v("span"),t=$(n[6]),c(e,"class","secondary svelte-ltkwvy")},m(l,s){C(l,e,s),w(e,t)},p(l,s){s&64&&he(t,l[6])},d(l){l&&L(e)}}}function Pl(n){var se,G;let e,t,l,s,r,i,o,u,d=n[0].place_name.replace(/,.*/,"")+"",a,m,_=n[2]==="always"||n[2]&&!n[0].address&&((se=n[0].properties)==null?void 0:se.kind)!=="road"&&((G=n[0].properties)==null?void 0:G.kind)!=="road_relation"&&!n[0].id.startsWith("address.")&&!n[0].id.startsWith("postal_code.")&&(!n[0].id.startsWith("poi.")||!n[5]),y,b,h=n[0].place_name.replace(/[^,]*,?\s*/,"")+"",U,Z,M;function H(T,R){var ee,g;return R&1&&(t=null),R&1&&(l=null),R&1&&(s=null),T[5]?Il:T[0].address?Rl:((ee=T[0].properties)==null?void 0:ee.kind)==="road"||((g=T[0].properties)==null?void 0:g.kind)==="road_relation"?Sl:(t==null&&(t=!!T[0].id.startsWith("address.")),t?Bl:(l==null&&(l=!!T[0].id.startsWith("postal_code.")),l?Ll:(s==null&&(s=!!T[0].id.startsWith("poi.")),s?Cl:Tl)))}let Q=H(n,-1),k=Q(n),B=_&&rt(n);return{c(){e=v("li"),k.c(),r=q(),i=v("span"),o=v("span"),u=v("span"),a=$(d),m=q(),B&&B.c(),y=q(),b=v("span"),U=$(h),c(u,"class","primary svelte-ltkwvy"),c(o,"class","svelte-ltkwvy"),c(b,"class","line2 svelte-ltkwvy"),c(i,"class","texts svelte-ltkwvy"),c(e,"tabindex","0"),c(e,"data-selected",n[1]),c(e,"class","svelte-ltkwvy"),ae(e,"selected",n[1])},m(T,R){C(T,e,R),k.m(e,null),w(e,r),w(e,i),w(i,o),w(o,u),w(u,a),w(o,m),B&&B.m(o,null),w(i,y),w(i,b),w(b,U),Z||(M=[W(e,"mouseenter",n[10]),W(e,"focus",n[11])],Z=!0)},p(T,[R]){var ee,g;Q===(Q=H(T,R))&&k?k.p(T,R):(k.d(1),k=Q(T),k&&(k.c(),k.m(e,r))),R&1&&d!==(d=T[0].place_name.replace(/,.*/,"")+"")&&he(a,d),R&37&&(_=T[2]==="always"||T[2]&&!T[0].address&&((ee=T[0].properties)==null?void 0:ee.kind)!=="road"&&((g=T[0].properties)==null?void 0:g.kind)!=="road_relation"&&!T[0].id.startsWith("address.")&&!T[0].id.startsWith("postal_code.")&&(!T[0].id.startsWith("poi.")||!T[5])),_?B?B.p(T,R):(B=rt(T),B.c(),B.m(o,null)):B&&(B.d(1),B=null),R&1&&h!==(h=T[0].place_name.replace(/[^,]*,?\s*/,"")+"")&&he(U,h),R&2&&c(e,"data-selected",T[1]),R&2&&ae(e,"selected",T[1])},i:A,o:A,d(T){T&&L(e),k.d(),B&&B.d(),Z=!1,Le(M)}}}function Ul(n,e,t){var Z;let l,s,{feature:r}=e,{selected:i=!1}=e,{showPlaceType:o}=e,{missingIconsCache:u}=e,{iconsBaseUrl:d}=e;const a=(Z=r.properties)==null?void 0:Z.categories;let m,_;function y(M){_&&u.add(_),t(9,l--,l)}function b(M){ze.call(this,n,M)}function h(M){ze.call(this,n,M)}const U=M=>y(M.currentTarget);return n.$$set=M=>{"feature"in M&&t(0,r=M.feature),"selected"in M&&t(1,i=M.selected),"showPlaceType"in M&&t(2,o=M.showPlaceType),"missingIconsCache"in M&&t(8,u=M.missingIconsCache),"iconsBaseUrl"in M&&t(3,d=M.iconsBaseUrl)},n.$$.update=()=>{var M,H,Q,k;if(n.$$.dirty&824)do t(9,l--,l),t(4,m=a==null?void 0:a[l]),t(5,_=m?d+m.replace(/ /g,"_")+".svg":void 0);while(l>-1&&(!_||u.has(_)));n.$$.dirty&1&&t(6,s=r.id.startsWith("poi.")?(H=(M=r.properties)==null?void 0:M.categories)==null?void 0:H.join(", "):((k=(Q=r.properties)==null?void 0:Q.place_type_name)==null?void 0:k[0])??r.place_type[0])},t(9,l=(a==null?void 0:a.length)??0),[r,i,o,d,m,_,s,y,u,l,b,h,U]}class zl extends F{constructor(e){super(),K(this,e,Ul,Pl,N,{feature:0,selected:1,showPlaceType:2,missingIconsCache:8,iconsBaseUrl:3})}}function Vl(n){let e;return{c(){e=v("div"),e.innerHTML='<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>',c(e,"class","svelte-7cmwmc")},m(t,l){C(t,e,l)},p:A,i:A,o:A,d(t){t&&L(e)}}}class El extends F{constructor(e){super(),K(this,e,null,Vl,N,{})}}function Wl(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"),c(e,"width","14"),c(e,"height","14"),c(e,"viewBox","0 0 15 15"),c(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class ql extends F{constructor(e){super(),K(this,e,null,Wl,N,{})}}function Al(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"),c(e,"viewBox","0 0 14 14"),c(e,"width","13"),c(e,"height","13"),c(e,"class","svelte-en2qvf")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class kt extends F{constructor(e){super(),K(this,e,null,Al,N,{})}}function Zl(n){let e,t;return{c(){e=fe("svg"),t=fe("path"),c(t,"d","M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"),c(e,"viewBox","0 0 30 30"),c(e,"fill","none"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","svelte-d2loi5")},m(l,s){C(l,e,s),w(e,t)},p:A,i:A,o:A,d(l){l&&L(e)}}}class yt extends F{constructor(e){super(),K(this,e,null,Zl,N,{})}}function it(n,e,t){const l=n.slice();return l[75]=e[t],l[77]=t,l}function ot(n){let e,t;return e=new El({}),{c(){D(e.$$.fragment)},m(l,s){O(e,l,s),t=!0},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function at(n){let e,t,l,s,r;return t=new Ml({}),{c(){e=v("button"),D(t.$$.fragment),c(e,"type","button"),c(e,"title",n[9]),c(e,"class","svelte-1r7dvt7"),ae(e,"active",n[0])},m(i,o){C(i,e,o),O(t,e,null),l=!0,s||(r=W(e,"click",n[61]),s=!0)},p(i,o){(!l||o[0]&512)&&c(e,"title",i[9]),(!l||o[0]&1)&&ae(e,"active",i[0])},i(i){l||(p(t.$$.fragment,i),l=!0)},o(i){S(t.$$.fragment,i),l=!1},d(i){i&&L(e),j(t),s=!1,r()}}}function Dl(n){let e,t=[],l=new Map,s,r,i,o=Ve(n[13]);const u=d=>d[75].id+(d[75].address?","+d[75].address:"");for(let d=0;d<o.length;d+=1){let a=it(n,o,d),m=u(a);l.set(m,t[d]=ft(m,a))}return{c(){e=v("ul");for(let d=0;d<t.length;d+=1)t[d].c();c(e,"class","svelte-1r7dvt7")},m(d,a){C(d,e,a);for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(e,null);s=!0,r||(i=[W(e,"mouseleave",n[65]),W(e,"blur",n[66])],r=!0)},p(d,a){a[0]&8940544&&(o=Ve(d[13]),_e(),t=Jt(t,a,u,1,d,o,l,e,Xt,ft,null,it),ge())},i(d){if(!s){for(let a=0;a<o.length;a+=1)p(t[a]);s=!0}},o(d){for(let a=0;a<t.length;a+=1)S(t[a]);s=!1},d(d){d&&L(e);for(let a=0;a<t.length;a+=1)t[a].d();r=!1,Le(i)}}}function Ol(n){let e,t,l,s,r,i;return t=new yt({}),{c(){e=v("div"),D(t.$$.fragment),l=q(),s=v("div"),r=$(n[7]),c(s,"class","svelte-1r7dvt7"),c(e,"class","no-results svelte-1r7dvt7")},m(o,u){C(o,e,u),O(t,e,null),w(e,l),w(e,s),w(s,r),i=!0},p(o,u){(!i||u[0]&128)&&he(r,o[7])},i(o){i||(p(t.$$.fragment,o),i=!0)},o(o){S(t.$$.fragment,o),i=!1},d(o){o&&L(e),j(t)}}}function jl(n){let e="",t;return{c(){t=$(e)},m(l,s){C(l,t,s)},p:A,i:A,o:A,d(l){l&&L(t)}}}function Gl(n){let e,t,l,s,r,i,o,u,d,a,m;return t=new yt({}),u=new kt({}),{c(){e=v("div"),D(t.$$.fragment),l=q(),s=v("div"),r=$(n[6]),i=q(),o=v("button"),D(u.$$.fragment),c(s,"class","svelte-1r7dvt7"),c(o,"class","svelte-1r7dvt7"),c(e,"class","error svelte-1r7dvt7")},m(_,y){C(_,e,y),O(t,e,null),w(e,l),w(e,s),w(s,r),w(e,i),w(e,o),O(u,o,null),d=!0,a||(m=W(o,"click",n[62]),a=!0)},p(_,y){(!d||y[0]&64)&&he(r,_[6])},i(_){d||(p(t.$$.fragment,_),p(u.$$.fragment,_),d=!0)},o(_){S(t.$$.fragment,_),S(u.$$.fragment,_),d=!1},d(_){_&&L(e),j(t),j(u),a=!1,m()}}}function ft(n,e){let t,l,s;function r(){return e[63](e[77])}function i(){return e[64](e[75])}return l=new zl({props:{feature:e[75],showPlaceType:e[10],selected:e[14]===e[77],missingIconsCache:e[19],iconsBaseUrl:e[11]}}),l.$on("mouseenter",r),l.$on("focus",i),{key:n,first:null,c(){t=Be(),D(l.$$.fragment),this.first=t},m(o,u){C(o,t,u),O(l,o,u),s=!0},p(o,u){e=o;const d={};u[0]&8192&&(d.feature=e[75]),u[0]&1024&&(d.showPlaceType=e[10]),u[0]&24576&&(d.selected=e[14]===e[77]),u[0]&2048&&(d.iconsBaseUrl=e[11]),l.$set(d)},i(o){s||(p(l.$$.fragment,o),s=!0)},o(o){S(l.$$.fragment,o),s=!1},d(o){o&&L(t),j(l,o)}}}function Hl(n){let e,t,l,s,r,i,o,u,d,a,m,_,y,b,h,U,Z,M,H,Q;s=new ql({}),a=new kt({});let k=n[18]&&ot(),B=n[5]===!0&&at(n);const se=n[53].default,G=we(se,n,n[52],null),T=[Gl,jl,Ol,Dl],R=[];function ee(g,z){var re,ce;return g[17]?0:g[15]?((re=g[13])==null?void 0:re.length)===0?2:g[15]&&((ce=g[13])!=null&&ce.length)?3:-1:1}return~(h=ee(n))&&(U=R[h]=T[h](n)),{c(){e=v("form"),t=v("div"),l=v("button"),D(s.$$.fragment),r=q(),i=v("input"),o=q(),u=v("div"),d=v("button"),D(a.$$.fragment),m=q(),k&&k.c(),_=q(),B&&B.c(),y=q(),G&&G.c(),b=q(),U&&U.c(),c(l,"class","search-button svelte-1r7dvt7"),c(l,"type","button"),c(i,"placeholder",n[8]),c(i,"aria-label",n[8]),c(i,"class","svelte-1r7dvt7"),c(d,"type","button"),c(d,"title",n[3]),c(d,"class","svelte-1r7dvt7"),c(u,"class","clear-button-container svelte-1r7dvt7"),ae(u,"displayable",n[1]!==""),c(t,"class","input-group svelte-1r7dvt7"),c(e,"tabindex","0"),c(e,"class",Z=We(n[2])+" svelte-1r7dvt7"),ae(e,"can-collapse",n[4]&&n[1]==="")},m(g,z){C(g,e,z),w(e,t),w(t,l),O(s,l,null),w(t,r),w(t,i),n[55](i),Ce(i,n[1]),w(t,o),w(t,u),w(u,d),O(a,d,null),w(u,m),k&&k.m(u,null),w(t,_),B&&B.m(t,null),w(t,y),G&&G.m(t,null),w(e,b),~h&&R[h].m(e,null),M=!0,H||(Q=[W(l,"click",n[54]),W(i,"input",n[56]),W(i,"focus",n[57]),W(i,"blur",n[58]),W(i,"keydown",n[21]),W(i,"input",n[59]),W(d,"click",n[60]),W(e,"submit",Nt(n[20]))],H=!0)},p(g,z){(!M||z[0]&256)&&c(i,"placeholder",g[8]),(!M||z[0]&256)&&c(i,"aria-label",g[8]),z[0]&2&&i.value!==g[1]&&Ce(i,g[1]),(!M||z[0]&8)&&c(d,"title",g[3]),g[18]?k?z[0]&262144&&p(k,1):(k=ot(),k.c(),p(k,1),k.m(u,null)):k&&(_e(),S(k,1,1,()=>{k=null}),ge()),(!M||z[0]&2)&&ae(u,"displayable",g[1]!==""),g[5]===!0?B?(B.p(g,z),z[0]&32&&p(B,1)):(B=at(g),B.c(),p(B,1),B.m(t,y)):B&&(_e(),S(B,1,1,()=>{B=null}),ge()),G&&G.p&&(!M||z[1]&2097152)&&ve(G,se,g,g[52],M?Me(se,g[52],z,null):pe(g[52]),null);let re=h;h=ee(g),h===re?~h&&R[h].p(g,z):(U&&(_e(),S(R[re],1,1,()=>{R[re]=null}),ge()),~h?(U=R[h],U?U.p(g,z):(U=R[h]=T[h](g),U.c()),p(U,1),U.m(e,null)):U=null),(!M||z[0]&4&&Z!==(Z=We(g[2])+" svelte-1r7dvt7"))&&c(e,"class",Z),(!M||z[0]&22)&&ae(e,"can-collapse",g[4]&&g[1]==="")},i(g){M||(p(s.$$.fragment,g),p(a.$$.fragment,g),p(k),p(B),p(G,g),p(U),M=!0)},o(g){S(s.$$.fragment,g),S(a.$$.fragment,g),S(k),S(B),S(G,g),S(U),M=!1},d(g){g&&L(e),j(s),n[55](null),j(a),k&&k.d(),B&&B.d(),G&&G.d(g),~h&&R[h].d(),H=!1,Le(Q)}}}function Fl(n,e,t){const l=e[1],s=e[0],r=l-s;return n===l&&t?n:((n-s)%r+r)%r+s}function ct(n){let e=[...n];return e[2]<e[0]&&(e[2]+=360),e}function Kl(n,e,t){let l,{$$slots:s={},$$scope:r}=e,{class:i=void 0}=e,{apiKey:o}=e,{bbox:u=void 0}=e,{clearButtonTitle:d="clear"}=e,{clearOnBlur:a=!1}=e,{collapsed:m=!1}=e,{country:_=void 0}=e,{debounceSearch:y=200}=e,{enableReverse:b=!1}=e,{errorMessage:h="Something went wrong…"}=e,{filter:U=()=>!0}=e,{flyTo:Z=!0}=e,{fuzzyMatch:M=!0}=e,{language:H=void 0}=e,{limit:Q=void 0}=e,{mapController:k=void 0}=e,{minLength:B=2}=e,{noResultsMessage:se="Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!"}=e,{placeholder:G="Search"}=e,{proximity:T=void 0}=e,{reverseActive:R=b==="always"}=e,{reverseButtonTitle:ee="toggle reverse geocoding"}=e,{searchValue:g=""}=e,{showFullGeometry:z=!0}=e,{showPlaceType:re="ifNeeded"}=e,{showResultsWhileTyping:ce=!0}=e,{trackProximity:Se=!0}=e,{types:ue=void 0}=e,{zoom:Re=16}=e,{maxZoom:Te=18}=e,{apiUrl:qe="https://api.maptiler.com/geocoding"}=e,{fetchParameters:Ae={}}=e,{iconsBaseUrl:Ke="https://cdn.maptiler.com/maptiler-geocoding-control/v0.0.99/icons/"}=e;function wt(){te.focus()}function vt(){te.blur()}function Ne(f,E=!0){t(1,g=f),E?(t(14,V=-1),Je()):(Oe(),setTimeout(()=>{te.focus(),te.select()}))}let be=!1,P,J,I,Qe="",te,V=-1,le,Ie=[],de,ke,Pe,Ze;const pt=new Set,ie=Qt();gt(()=>{k&&(k.setEventHandler(void 0),k.indicateReverse(!1),k.setSelectedMarker(-1),k.setMarkers(void 0,void 0))});function Je(f){if(ke&&(clearTimeout(ke),ke=void 0),V>-1&&P)t(49,I=P[V]),t(1,g=I.place_name.replace(/,.*/,"")),t(17,le=void 0),t(48,J=void 0),t(14,V=-1);else if(g){const E=f||!Xe();De(g,{exact:!0}).then(()=>{t(48,J=P),t(49,I=void 0),E&&Mt()}).catch(ne=>t(17,le=ne))}}function Xe(){return/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(g)}async function De(f,{byId:E=!1,exact:ne=!1}={}){t(17,le=void 0);const ye=Xe(),x=new URLSearchParams;H!=null&&x.set("language",Array.isArray(H)?H.join(","):H),ue&&x.set("types",ue.join(",")),ye||(u&&x.set("bbox",u.map(oe=>oe.toFixed(6)).join(",")),_&&x.set("country",Array.isArray(_)?_.join(","):_)),E||(T&&x.set("proximity",T.map(oe=>oe.toFixed(6)).join(",")),(ne||!ce)&&x.set("autocomplete","false"),x.set("fuzzyMatch",String(M))),Q!==void 0&&(!ye||(ue==null?void 0:ue.length)===1)&&x.set("limit",String(Q)),x.set("key",o);const me=qe+"/"+encodeURIComponent(f)+".json?"+x.toString();if(me===Qe){E?(t(13,P=void 0),t(49,I=Ie[0])):t(13,P=Ie);return}Qe=me,de==null||de.abort();const X=new AbortController;t(18,de=X);let Ge;try{Ge=await fetch(me,{signal:X.signal,...Ae}).finally(()=>{X===de&&t(18,de=void 0)})}catch(oe){if(oe&&typeof oe=="object"&&"name"in oe&&oe.name==="AbortError")return;throw new Error}if(!Ge.ok)throw new Error;const He=await Ge.json();ie("response",{url:me,featureCollection:He}),E?(t(13,P=void 0),t(49,I=He.features[0]),Ie=[I]):(t(13,P=He.features.filter(U)),Ie=P,ye&&te.focus())}function Mt(){var ne,ye,x,me;if(!(J!=null&&J.length)||!Z)return;const f=[180,90,-180,-90],E=!J.some(X=>!X.matching_text);for(const X of J)(E||!X.matching_text)&&(f[0]=Math.min(f[0],((ne=X.bbox)==null?void 0:ne[0])??X.center[0]),f[1]=Math.min(f[1],((ye=X.bbox)==null?void 0:ye[1])??X.center[1]),f[2]=Math.max(f[2],((x=X.bbox)==null?void 0:x[2])??X.center[0]),f[3]=Math.max(f[3],((me=X.bbox)==null?void 0:me[3])??X.center[1]));k&&J.length>0&&(I&&f[0]===f[2]&&f[1]===f[3]?k.flyTo(I.center,Re):k.fitBounds(ct(f),50,Te))}function Tt(f){t(0,R=b==="always"),Ne(Fl(f[0],[-180,180],!0).toFixed(6)+","+f[1].toFixed(6))}function Ct(f){if(!P)return;let E=f.key==="ArrowDown"?1:f.key==="ArrowUp"?-1:0;E?(V===-1&&E===-1&&t(14,V=P.length),t(14,V+=E),V>=P.length&&t(14,V=-1),f.preventDefault()):["ArrowLeft","ArrowRight","Home","End"].includes(f.key)&&t(14,V=-1)}function Oe(f=!0){if(t(17,le=void 0),ce){if(ke&&clearTimeout(ke),g.length<B)return;const E=g;ke=window.setTimeout(()=>{De(E).catch(ne=>t(17,le=ne))},f?y:0)}else t(13,P=void 0),t(17,le=void 0)}function je(f){t(49,I=f),t(1,g=f.place_name),t(14,V=-1)}const Lt=()=>te.focus();function Bt(f){Fe[f?"unshift":"push"](()=>{te=f,t(16,te)})}function St(){g=this.value,t(1,g),t(12,be),t(27,a)}const Rt=()=>t(12,be=!0),It=()=>t(12,be=!1),Pt=()=>Oe(),Ut=()=>{t(1,g=""),te.focus()},zt=()=>t(0,R=!R),Vt=()=>t(17,le=void 0),Et=f=>t(14,V=f),Wt=f=>je(f),qt=()=>t(14,V=-1),At=()=>{};return n.$$set=f=>{"class"in f&&t(2,i=f.class),"apiKey"in f&&t(25,o=f.apiKey),"bbox"in f&&t(26,u=f.bbox),"clearButtonTitle"in f&&t(3,d=f.clearButtonTitle),"clearOnBlur"in f&&t(27,a=f.clearOnBlur),"collapsed"in f&&t(4,m=f.collapsed),"country"in f&&t(28,_=f.country),"debounceSearch"in f&&t(29,y=f.debounceSearch),"enableReverse"in f&&t(5,b=f.enableReverse),"errorMessage"in f&&t(6,h=f.errorMessage),"filter"in f&&t(30,U=f.filter),"flyTo"in f&&t(31,Z=f.flyTo),"fuzzyMatch"in f&&t(32,M=f.fuzzyMatch),"language"in f&&t(33,H=f.language),"limit"in f&&t(34,Q=f.limit),"mapController"in f&&t(35,k=f.mapController),"minLength"in f&&t(36,B=f.minLength),"noResultsMessage"in f&&t(7,se=f.noResultsMessage),"placeholder"in f&&t(8,G=f.placeholder),"proximity"in f&&t(24,T=f.proximity),"reverseActive"in f&&t(0,R=f.reverseActive),"reverseButtonTitle"in f&&t(9,ee=f.reverseButtonTitle),"searchValue"in f&&t(1,g=f.searchValue),"showFullGeometry"in f&&t(37,z=f.showFullGeometry),"showPlaceType"in f&&t(10,re=f.showPlaceType),"showResultsWhileTyping"in f&&t(38,ce=f.showResultsWhileTyping),"trackProximity"in f&&t(39,Se=f.trackProximity),"types"in f&&t(40,ue=f.types),"zoom"in f&&t(41,Re=f.zoom),"maxZoom"in f&&t(42,Te=f.maxZoom),"apiUrl"in f&&t(43,qe=f.apiUrl),"fetchParameters"in f&&t(44,Ae=f.fetchParameters),"iconsBaseUrl"in f&&t(11,Ke=f.iconsBaseUrl),"$$scope"in f&&t(52,r=f.$$scope)},n.$$.update=()=>{if(n.$$.dirty[1]&256&&(Se||t(24,T=void 0)),n.$$.dirty[0]&134221824&&setTimeout(()=>{t(15,Pe=be),a&&!be&&t(1,g="")}),n.$$.dirty[0]&8194|n.$$.dirty[1]&32&&g.length<B&&(t(49,I=void 0),t(13,P=void 0),t(17,le=void 0),t(48,J=P)),n.$$.dirty[1]&262208&&z&&I&&!I.address&&I.geometry.type==="Point"&&De(I.id,{byId:!0}).catch(f=>t(17,le=f)),n.$$.dirty[1]&789521&&(k&&I&&I.id!==Ze&&Z&&(!I.bbox||I.bbox[0]===I.bbox[2]&&I.bbox[1]===I.bbox[3]?k.flyTo(I.center,I.id.startsWith("poi.")||I.id.startsWith("address.")?Te:Re):k.fitBounds(ct(I.bbox),50,Te),t(13,P=void 0),t(48,J=void 0),t(14,V=-1)),t(50,Ze=I==null?void 0:I.id)),n.$$.dirty[0]&8192|n.$$.dirty[1]&131072&&J!==P&&t(48,J=void 0),n.$$.dirty[1]&393232&&k&&k.setMarkers(J,I),n.$$.dirty[0]&2&&t(14,V=-1),n.$$.dirty[0]&40961|n.$$.dirty[1]&272&&k&&k.setEventHandler(f=>{switch(f.type){case"mapClick":R&&Tt(f.coordinates);break;case"proximityChange":t(24,T=Se?f.proximity:void 0);break;case"markerClick":{const E=P==null?void 0:P.find(ne=>ne.id===f.id);E&&je(E)}break;case"markerMouseEnter":t(14,V=Pe?(P==null?void 0:P.findIndex(E=>E.id===f.id))??-1:-1);break;case"markerMouseLeave":t(14,V=-1);break}}),n.$$.dirty[0]&16384|n.$$.dirty[1]&16&&(k==null||k.setSelectedMarker(V)),n.$$.dirty[0]&24576&&t(51,l=P==null?void 0:P[V]),n.$$.dirty[0]&2|n.$$.dirty[1]&16){const f=/^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(g);k==null||k.setReverseMarker(f?[Number(f[1]),Number(f[2])]:void 0)}n.$$.dirty[1]&1048576&&ie("select",l),n.$$.dirty[1]&262144&&ie("pick",I),n.$$.dirty[0]&40960&&ie("optionsVisibilityChange",Pe&&!!P),n.$$.dirty[0]&8192&&ie("featuresListed",P),n.$$.dirty[1]&131072&&ie("featuresMarked",J),n.$$.dirty[0]&1&&ie("reverseToggle",R),n.$$.dirty[0]&2&&ie("queryChange",g),n.$$.dirty[0]&1|n.$$.dirty[1]&16&&k&&k.indicateReverse(R)},[R,g,i,d,m,b,h,se,G,ee,re,Ke,be,P,V,Pe,te,le,de,pt,Je,Ct,Oe,je,T,o,u,a,_,y,U,Z,M,H,Q,k,B,z,ce,Se,ue,Re,Te,qe,Ae,wt,vt,Ne,J,I,Ze,l,r,s,Lt,Bt,St,Rt,It,Pt,Ut,zt,Vt,Et,Wt,qt,At]}class Nl extends F{constructor(e){super(),K(this,e,Kl,Hl,N,{class:2,apiKey:25,bbox:26,clearButtonTitle:3,clearOnBlur:27,collapsed:4,country:28,debounceSearch:29,enableReverse:5,errorMessage:6,filter:30,flyTo:31,fuzzyMatch:32,language:33,limit:34,mapController:35,minLength:36,noResultsMessage:7,placeholder:8,proximity:24,reverseActive:0,reverseButtonTitle:9,searchValue:1,showFullGeometry:37,showPlaceType:10,showResultsWhileTyping:38,trackProximity:39,types:40,zoom:41,maxZoom:42,apiUrl:43,fetchParameters:44,iconsBaseUrl:11,focus:45,blur:46,setQuery:47},null,[-1,-1,-1])}get focus(){return this.$$.ctx[45]}get blur(){return this.$$.ctx[46]}get setQuery(){return this.$$.ctx[47]}}function ut(n){let e,t,l,s;return t=new Nl({props:{mapController:n[1],apiKey:"MZEJTanw3WpxRvt7qDfo",country:"gb"}}),{c(){e=v("div"),D(t.$$.fragment),c(e,"class",l=We(n[0])+" svelte-189syb7")},m(r,i){C(r,e,i),O(t,e,null),s=!0},p(r,i){const o={};i&2&&(o.mapController=r[1]),t.$set(o),(!s||i&1&&l!==(l=We(r[0])+" svelte-189syb7"))&&c(e,"class",l)},i(r){s||(p(t.$$.fragment,r),s=!0)},o(r){S(t.$$.fragment,r),s=!1},d(r){r&&L(e),j(t)}}}function Ql(n){let e,t,l=n[1]&&ut(n);return{c(){l&&l.c(),e=Be()},m(s,r){l&&l.m(s,r),C(s,e,r),t=!0},p(s,[r]){s[1]?l?(l.p(s,r),r&2&&p(l,1)):(l=ut(s),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(_e(),S(l,1,1,()=>{l=null}),ge())},i(s){t||(p(l),t=!0)},o(s){S(l),t=!1},d(s){s&&L(e),l&&l.d(s)}}}function Jl(n,e,t){let l;Ee(n,ht,i=>t(2,l=i));let{position:s="top-left"}=e,r;return Yt(()=>{t(1,r=xt(l,$t))}),n.$$set=i=>{"position"in i&&t(0,s=i.position)},[s,r]}class hn extends F{constructor(e){super(),K(this,e,Jl,Ql,N,{position:0})}}function Xl(n,e,t){t===void 0&&(t={});var l=$e(n),s=$e(e),r=Ue(s[1]-l[1]),i=Ue(s[0]-l[0]),o=Ue(l[1]),u=Ue(s[1]),d=Math.pow(Math.sin(r/2),2)+Math.pow(Math.sin(i/2),2)*Math.cos(o)*Math.cos(u);return el(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),t.units)}function bn(n,e){return e===void 0&&(e={}),tl(n,function(t,l){var s=l.geometry.coordinates;return t+Xl(s[0],s[1],e)},0)}const Yl={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},kn=10,yn=10;function xl(n){let e;return{c(){e=$("Luc Chaissac")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function $l(n){let e,t,l,s,r,i,o,u,d;return u=new ll({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[xl]},$$scope:{ctx:n}}}),{c(){e=v("ul"),t=v("li"),t.innerHTML=`<b>Click</b>
    on the map to open a new tab with a 3rd-party imagery provider`,l=q(),s=v("li"),s.innerHTML=`Press <b>Escape</b>
    to exit this mode`,r=q(),i=v("li"),o=$("Cursor by "),D(u.$$.fragment)},m(a,m){C(a,e,m),w(e,t),w(e,l),w(e,s),w(e,r),w(e,i),w(i,o),O(u,i,null),d=!0},p(a,[m]){const _={};m&1&&(_.$$scope={dirty:m,ctx:a}),u.$set(_)},i(a){d||(p(u.$$.fragment,a),d=!0)},o(a){S(u.$$.fragment,a),d=!1},d(a){a&&L(e),j(u)}}}class en extends F{constructor(e){super(),K(this,e,null,$l,N,{})}}const tn="/atip/route_snapper_geocoder/assets/camera_cursor-824d29b6.svg",{window:ln}=rl;function dt(n){let e,t,l,s;const r=[sn,nn],i=[];function o(u,d){return u[0]?0:1}return e=o(n),t=i[e]=r[e](n),{c(){t.c(),l=Be()},m(u,d){i[e].m(u,d),C(u,l,d),s=!0},p(u,d){let a=e;e=o(u),e===a?i[e].p(u,d):(_e(),S(i[a],1,1,()=>{i[a]=null}),ge(),t=i[e],t?t.p(u,d):(t=i[e]=r[e](u),t.c()),p(t,1),t.m(l.parentNode,l))},i(u){s||(p(t),s=!0)},o(u){S(t),s=!1},d(u){u&&L(l),i[e].d(u)}}}function nn(n){let e,t;return e=new bt({props:{$$slots:{default:[rn]},$$scope:{ctx:n}}}),e.$on("click",n[6]),{c(){D(e.$$.fragment)},m(l,s){O(e,l,s),t=!0},p(l,s){const r={};s&4096&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function sn(n){let e,t,l,s,r,i,o;e=new bt({props:{$$slots:{default:[on]},$$scope:{ctx:n}}}),e.$on("click",n[4]);function u(a){n[5](a)}let d={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return n[2].streetViewImagery!==void 0&&(d.value=n[2].streetViewImagery),l=new sl({props:d}),Fe.push(()=>mt(l,"value",u)),i=new vl({props:{label:"Help",$$slots:{default:[an]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment),t=q(),D(l.$$.fragment),r=q(),D(i.$$.fragment)},m(a,m){O(e,a,m),C(a,t,m),O(l,a,m),C(a,r,m),O(i,a,m),o=!0},p(a,m){const _={};m&4096&&(_.$$scope={dirty:m,ctx:a}),e.$set(_);const y={};!s&&m&4&&(s=!0,y.value=a[2].streetViewImagery,_t(()=>s=!1)),l.$set(y);const b={};m&4096&&(b.$$scope={dirty:m,ctx:a}),i.$set(b)},i(a){o||(p(e.$$.fragment,a),p(l.$$.fragment,a),p(i.$$.fragment,a),o=!0)},o(a){S(e.$$.fragment,a),S(l.$$.fragment,a),S(i.$$.fragment,a),o=!1},d(a){a&&(L(t),L(r)),j(e,a),j(l,a),j(i,a)}}}function rn(n){let e;return{c(){e=$("Enable Street View")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function on(n){let e;return{c(){e=$("Disable Street View")},m(t,l){C(t,e,l)},d(t){t&&L(e)}}}function an(n){let e,t;return e=new en({}),{c(){D(e.$$.fragment)},m(l,s){O(e,l,s),t=!0},i(l){t||(p(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function fn(n){let e,t,l,s,r=n[1]&&dt(n);return{c(){r&&r.c(),e=Be()},m(i,o){r&&r.m(i,o),C(i,e,o),t=!0,l||(s=W(ln,"keydown",n[3]),l=!0)},p(i,[o]){i[1]?r?(r.p(i,o),o&2&&p(r,1)):(r=dt(i),r.c(),p(r,1),r.m(e.parentNode,e)):r&&(_e(),S(r,1,1,()=>{r=null}),ge())},i(i){t||(p(r),t=!0)},o(i){S(r),t=!1},d(i){i&&L(e),r&&r.d(i),l=!1,s()}}}function cn(n,e,t){let l,s;Ee(n,et,h=>t(2,l=h)),Ee(n,ht,h=>t(8,s=h));let{enabled:r}=e,{showControls:i=!0}=e,o=[];function u(){s.on("click",a),s.getCanvas().style.cursor=`url(${tn}), auto`,o=nl();for(let h of o)h.setProperty(s,"line-color",Yl.streetview)}function d(){s.off("click",a),s.getCanvas().style.cursor="inherit";for(let h of o)h.returnToDefaultPaintValues(s);o=[]}gt(d);function a(h){if(!r)return;let U=h.lngLat.lng,Z=h.lngLat.lat;l.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${Z},${U}&cbp=11,0,0,0,0`,"_blank"):l.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${Z}~${U}&style=x`,"_blank")}function m(h){r&&h.key=="Escape"&&(h.stopPropagation(),t(0,r=!1))}const _=()=>t(0,r=!1);function y(h){n.$$.not_equal(l.streetViewImagery,h)&&(l.streetViewImagery=h,et.set(l))}const b=()=>t(0,r=!0);return n.$$set=h=>{"enabled"in h&&t(0,r=h.enabled),"showControls"in h&&t(1,i=h.showControls)},n.$$.update=()=>{n.$$.dirty&1&&(r?u():d())},[r,i,l,m,_,y,b]}class wn extends F{constructor(e){super(),K(this,e,cn,fn,N,{enabled:0,showControls:1})}}export{dn as B,_n as C,hn as G,hl as S,yn as a,Yl as b,kn as c,Xl as d,vl as e,mn as f,rl as g,wn as h,en as i,gn as j,bn as l};
