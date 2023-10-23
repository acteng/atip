import{S as K,i as j,s as Q,aL as be,e as M,h as c,j as I,aM as ye,aN as ke,aO as we,t as p,n as S,o as B,k as v,d as H,az as Gt,w as W,aq as Se,b2 as qt,aX as se,F as Ft,g as F,m as O,p as Z,E as Ot,aA as Ee,Z as Ie,aD as Zt,b8 as $e,aB as Dt,b9 as Nt,v as Le,u as $,C as ve,ba as Kt,b as We,c as Ke,l as je,q as Ue,aJ as et,bb as ue,H as G,bc as fe,D as Y,b7 as Ve,bd as jt,_ as he,$ as ge,be as Qt,ai as ht,aH as Jt,aI as Xt,B as gt,r as Yt,bf as xt,aQ as $t,a0 as Ae,bg as el,bh as tl,aW as ll,aP as nl,aK as rl,ar as tt,bi as sl,a as bt,R as il}from"./index-507e02f2.js";const ol=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function al(l){let e,t;const n=l[1].default,r=be(n,l,l[0],null);return{c(){e=M("div"),r&&r.c(),c(e,"class","govuk-button-group")},m(i,s){I(i,e,s),r&&r.m(e,null),t=!0},p(i,[s]){r&&r.p&&(!t||s&1)&&ye(r,n,i,i[0],t?we(n,i[0],s,null):ke(i[0]),null)},i(i){t||(p(r,i),t=!0)},o(i){S(r,i),t=!1},d(i){i&&B(e),r&&r.d(i)}}}function fl(l,e,t){let{$$slots:n={},$$scope:r}=e;return l.$$set=i=>{"$$scope"in i&&t(0,r=i.$$scope)},[r,n]}class bn extends K{constructor(e){super(),j(this,e,fl,al,Q,{})}}function ul(l){let e,t,n;const r=l[3].default,i=be(r,l,l[2],null);return{c(){e=M("fieldset"),t=M("div"),i&&i.c(),c(t,"class",l[0]),c(t,"data-module","govuk-checkboxes"),c(e,"class","govuk-fieldset")},m(s,o){I(s,e,o),v(e,t),i&&i.m(t,null),n=!0},p(s,[o]){i&&i.p&&(!n||o&4)&&ye(i,r,s,s[2],n?we(r,s[2],o,null):ke(s[2]),null)},i(s){n||(p(i,s),n=!0)},o(s){S(i,s),n=!1},d(s){s&&B(e),i&&i.d(s)}}}function cl(l,e,t){let{$$slots:n={},$$scope:r}=e,{small:i=!1}=e,s=i?"govuk-checkboxes--small":"govuk-checkboxes";return l.$$set=o=>{"small"in o&&t(1,i=o.small),"$$scope"in o&&t(2,r=o.$$scope)},[s,i,r,n]}class yn extends K{constructor(e){super(),j(this,e,cl,ul,Q,{small:1})}}const ml=l=>({}),lt=l=>({});function dl(l){let e,t,n,r,i,s,o,f,m;const a=l[5].default,d=be(a,l,l[4],null),_=l[5].right,w=be(_,l,l[4],lt);return{c(){e=M("div"),t=M("input"),n=H(),r=M("label"),d&&d.c(),i=H(),s=M("span"),w&&w.c(),c(t,"type","checkbox"),c(t,"class","govuk-checkboxes__input"),c(t,"id",l[1]),c(r,"class","govuk-label govuk-checkboxes__label"),c(r,"for",l[1]),c(r,"title",l[2]),Gt(s,"float","right"),c(e,"class","govuk-checkboxes__item"),c(e,"style",l[3])},m(y,g){I(y,e,g),v(e,t),t.checked=l[0],v(e,n),v(e,r),d&&d.m(r,null),v(e,i),v(e,s),w&&w.m(s,null),o=!0,f||(m=[W(t,"change",l[7]),W(t,"change",l[6])],f=!0)},p(y,[g]){(!o||g&2)&&c(t,"id",y[1]),g&1&&(t.checked=y[0]),d&&d.p&&(!o||g&16)&&ye(d,a,y,y[4],o?we(a,y[4],g,null):ke(y[4]),null),(!o||g&2)&&c(r,"for",y[1]),(!o||g&4)&&c(r,"title",y[2]),w&&w.p&&(!o||g&16)&&ye(w,_,y,y[4],o?we(_,y[4],g,ml):ke(y[4]),lt)},i(y){o||(p(d,y),p(w,y),o=!0)},o(y){S(d,y),S(w,y),o=!1},d(y){y&&B(e),d&&d.d(y),w&&w.d(y),f=!1,Se(m)}}}function _l(l,e,t){let{$$slots:n={},$$scope:r}=e;const i=qt(n);let{id:s}=e,{checked:o}=e,{hint:f=null}=e,a=i.right!==void 0?"float: none":"";function d(w){se.call(this,l,w)}function _(){o=this.checked,t(0,o)}return l.$$set=w=>{"id"in w&&t(1,s=w.id),"checked"in w&&t(0,o=w.checked),"hint"in w&&t(2,f=w.hint),"$$scope"in w&&t(4,r=w.$$scope)},[o,s,f,a,r,n,d,_]}class kn extends K{constructor(e){super(),j(this,e,_l,dl,Q,{id:1,checked:0,hint:2})}}function nt(l,e,t){const n=l.slice();return n[9]=e[t][0],n[10]=e[t][1],n}function rt(l){let e;return{c(){e=M("option"),e.__value="",Le(e,e.__value)},m(t,n){I(t,e,n)},d(t){t&&B(e)}}}function st(l){let e,t=l[10]+"",n,r;return{c(){e=M("option"),n=$(t),e.__value=r=l[9],Le(e,e.__value)},m(i,s){I(i,e,s),v(e,n)},p(i,s){s&8&&t!==(t=i[10]+"")&&ve(n,t),s&8&&r!==(r=i[9])&&(e.__value=r,Le(e,e.__value))},d(i){i&&B(e)}}}function hl(l){let e,t,n,r,i,s,o;e=new Ot({props:{errorMessage:l[6]}});let f=l[4]&&rt(),m=Ee(l[3]),a=[];for(let d=0;d<m.length;d+=1)a[d]=st(nt(l,m,d));return{c(){F(e.$$.fragment),t=H(),n=M("select"),f&&f.c(),r=Ie();for(let d=0;d<a.length;d+=1)a[d].c();c(n,"class","govuk-select"),c(n,"id",l[2]),n.disabled=l[5],l[0]===void 0&&Zt(()=>l[8].call(n))},m(d,_){O(e,d,_),I(d,t,_),I(d,n,_),f&&f.m(n,null),v(n,r);for(let w=0;w<a.length;w+=1)a[w]&&a[w].m(n,null);$e(n,l[0],!0),i=!0,s||(o=[W(n,"change",l[8]),W(n,"change",l[7])],s=!0)},p(d,_){const w={};if(_&64&&(w.errorMessage=d[6]),e.$set(w),d[4]?f||(f=rt(),f.c(),f.m(n,r)):f&&(f.d(1),f=null),_&8){m=Ee(d[3]);let y;for(y=0;y<m.length;y+=1){const g=nt(d,m,y);a[y]?a[y].p(g,_):(a[y]=st(g),a[y].c(),a[y].m(n,null))}for(;y<a.length;y+=1)a[y].d(1);a.length=m.length}(!i||_&4)&&c(n,"id",d[2]),(!i||_&32)&&(n.disabled=d[5]),_&9&&$e(n,d[0])},i(d){i||(p(e.$$.fragment,d),i=!0)},o(d){S(e.$$.fragment,d),i=!1},d(d){d&&(B(t),B(n)),Z(e,d),f&&f.d(),Dt(a,d),s=!1,Se(o)}}}function gl(l){let e,t;return e=new Ft({props:{label:l[1],id:l[2],$$slots:{default:[hl]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment)},m(n,r){O(e,n,r),t=!0},p(n,[r]){const i={};r&2&&(i.label=n[1]),r&4&&(i.id=n[2]),r&8317&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){Z(e,n)}}}function bl(l,e,t){let{label:n}=e,{id:r}=e,{choices:i}=e,{emptyOption:s=!1}=e,{disabled:o=!1}=e,{errorMessage:f=""}=e,{value:m}=e;function a(_){se.call(this,l,_)}function d(){m=Nt(this),t(0,m),t(3,i)}return l.$$set=_=>{"label"in _&&t(1,n=_.label),"id"in _&&t(2,r=_.id),"choices"in _&&t(3,i=_.choices),"emptyOption"in _&&t(4,s=_.emptyOption),"disabled"in _&&t(5,o=_.disabled),"errorMessage"in _&&t(6,f=_.errorMessage),"value"in _&&t(0,m=_.value)},[m,n,r,i,s,o,f,a,d]}class yl extends K{constructor(e){super(),j(this,e,bl,gl,Q,{label:1,id:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}function kl(l){let e,t,n;function r(s){l[2](s)}let i={label:"Basemap",id:"basemap",choices:Kt(),disabled:l[0]};return l[1]!==void 0&&(i.value=l[1]),e=new yl({props:i}),We.push(()=>Ke(e,"value",r)),{c(){F(e.$$.fragment)},m(s,o){O(e,s,o),n=!0},p(s,[o]){const f={};o&1&&(f.disabled=s[0]),!t&&o&2&&(t=!0,f.value=s[1],je(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function wl(l,e,t){let n;Ue(l,et,s=>t(1,n=s));let{disabled:r=!1}=e;function i(s){n=s,et.set(n)}return l.$$set=s=>{"disabled"in s&&t(0,r=s.disabled)},[r,n,i]}class wn extends K{constructor(e){super(),j(this,e,wl,kl,Q,{disabled:0})}}function vl(l){let e,t,n,r,i,s,o;const f=l[3].default,m=be(f,l,l[2],null);return{c(){e=M("details"),t=M("summary"),n=M("span"),r=$(l[0]),i=H(),s=M("div"),m&&m.c(),c(n,"class","govuk-details__summary-text"),c(t,"class","govuk-details__summary"),c(s,"class","govuk-details__text"),e.open=l[1],c(e,"class","govuk-details"),c(e,"data-module","govuk-details")},m(a,d){I(a,e,d),v(e,t),v(t,n),v(n,r),v(e,i),v(e,s),m&&m.m(s,null),o=!0},p(a,[d]){(!o||d&1)&&ve(r,a[0]),m&&m.p&&(!o||d&4)&&ye(m,f,a,a[2],o?we(f,a[2],d,null):ke(a[2]),null),(!o||d&2)&&(e.open=a[1])},i(a){o||(p(m,a),o=!0)},o(a){S(m,a),o=!1},d(a){a&&B(e),m&&m.d(a)}}}function Ml(l,e,t){let{$$slots:n={},$$scope:r}=e,{label:i}=e,{open:s=!1}=e;return l.$$set=o=>{"label"in o&&t(0,i=o.label),"open"in o&&t(1,s=o.open),"$$scope"in o&&t(2,r=o.$$scope)},[i,s,r,n]}class Tl extends K{constructor(e){super(),j(this,e,Ml,vl,Q,{label:0,open:1})}}function pl(l){let e,t;return{c(){e=ue("svg"),t=ue("path"),c(t,"d","M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"),c(e,"viewBox","0 0 60.006 21.412"),c(e,"width","14"),c(e,"height","20"),c(e,"class","svelte-en2qvf")},m(n,r){I(n,e,r),v(e,t)},p:G,i:G,o:G,d(n){n&&B(e)}}}class Cl extends K{constructor(e){super(),j(this,e,null,pl,Q,{})}}function Ll(l){let e,t;return{c(){e=M("img"),Y(e.src,t=l[3]+"area.svg")||c(e,"src",t),c(e,"alt",l[6]),c(e,"class","svelte-ltkwvy")},m(n,r){I(n,e,r)},p(n,r){r&8&&!Y(e.src,t=n[3]+"area.svg")&&c(e,"src",t),r&64&&c(e,"alt",n[6])},d(n){n&&B(e)}}}function Sl(l){let e,t;return{c(){e=M("img"),Y(e.src,t=l[3]+"poi.svg")||c(e,"src",t),c(e,"alt",l[6]),c(e,"class","svelte-ltkwvy")},m(n,r){I(n,e,r)},p(n,r){r&8&&!Y(e.src,t=n[3]+"poi.svg")&&c(e,"src",t),r&64&&c(e,"alt",n[6])},d(n){n&&B(e)}}}function Il(l){let e,t;return{c(){e=M("img"),Y(e.src,t=l[3]+"postal_code.svg")||c(e,"src",t),c(e,"alt",l[6]),c(e,"class","svelte-ltkwvy")},m(n,r){I(n,e,r)},p(n,r){r&8&&!Y(e.src,t=n[3]+"postal_code.svg")&&c(e,"src",t),r&64&&c(e,"alt",n[6])},d(n){n&&B(e)}}}function Bl(l){let e,t;return{c(){e=M("img"),Y(e.src,t=l[3]+"street.svg")||c(e,"src",t),c(e,"alt",l[6]),c(e,"class","svelte-ltkwvy")},m(n,r){I(n,e,r)},p(n,r){r&8&&!Y(e.src,t=n[3]+"street.svg")&&c(e,"src",t),r&64&&c(e,"alt",n[6])},d(n){n&&B(e)}}}function zl(l){let e,t;return{c(){e=M("img"),Y(e.src,t=l[3]+"road.svg")||c(e,"src",t),c(e,"alt",l[6]),c(e,"class","svelte-ltkwvy")},m(n,r){I(n,e,r)},p(n,r){r&8&&!Y(e.src,t=n[3]+"road.svg")&&c(e,"src",t),r&64&&c(e,"alt",n[6])},d(n){n&&B(e)}}}function Rl(l){let e,t;return{c(){e=M("img"),Y(e.src,t=l[3]+"housenumber.svg")||c(e,"src",t),c(e,"alt",l[6]),c(e,"class","svelte-ltkwvy")},m(n,r){I(n,e,r)},p(n,r){r&8&&!Y(e.src,t=n[3]+"housenumber.svg")&&c(e,"src",t),r&64&&c(e,"alt",n[6])},d(n){n&&B(e)}}}function Pl(l){let e,t,n,r;return{c(){e=M("img"),Y(e.src,t=l[5])||c(e,"src",t),c(e,"alt",l[4]),c(e,"class","svelte-ltkwvy")},m(i,s){I(i,e,s),n||(r=W(e,"error",l[12]),n=!0)},p(i,s){s&32&&!Y(e.src,t=i[5])&&c(e,"src",t),s&16&&c(e,"alt",i[4])},d(i){i&&B(e),n=!1,r()}}}function it(l){let e,t;return{c(){e=M("span"),t=$(l[6]),c(e,"class","secondary svelte-ltkwvy")},m(n,r){I(n,e,r),v(e,t)},p(n,r){r&64&&ve(t,n[6])},d(n){n&&B(e)}}}function Al(l){var ee,q;let e,t,n,r,i,s,o,f,m=l[0].place_name.replace(/,.*/,"")+"",a,d,_=l[2]==="always"||l[2]&&!l[0].address&&((ee=l[0].properties)==null?void 0:ee.kind)!=="road"&&((q=l[0].properties)==null?void 0:q.kind)!=="road_relation"&&!l[0].id.startsWith("address.")&&!l[0].id.startsWith("postal_code.")&&(!l[0].id.startsWith("poi.")||!l[5]),w,y,g=l[0].place_name.replace(/[^,]*,?\s*/,"")+"",R,A,T;function D(C,h){var te,b;return h&1&&(t=null),h&1&&(n=null),h&1&&(r=null),C[5]?Pl:C[0].address?Rl:((te=C[0].properties)==null?void 0:te.kind)==="road"||((b=C[0].properties)==null?void 0:b.kind)==="road_relation"?zl:(t==null&&(t=!!C[0].id.startsWith("address.")),t?Bl:(n==null&&(n=!!C[0].id.startsWith("postal_code.")),n?Il:(r==null&&(r=!!C[0].id.startsWith("poi.")),r?Sl:Ll)))}let N=D(l,-1),k=N(l),L=_&&it(l);return{c(){e=M("li"),k.c(),i=H(),s=M("span"),o=M("span"),f=M("span"),a=$(m),d=H(),L&&L.c(),w=H(),y=M("span"),R=$(g),c(f,"class","primary svelte-ltkwvy"),c(o,"class","svelte-ltkwvy"),c(y,"class","line2 svelte-ltkwvy"),c(s,"class","texts svelte-ltkwvy"),c(e,"tabindex","0"),c(e,"data-selected",l[1]),c(e,"class","svelte-ltkwvy"),fe(e,"selected",l[1])},m(C,h){I(C,e,h),k.m(e,null),v(e,i),v(e,s),v(s,o),v(o,f),v(f,a),v(o,d),L&&L.m(o,null),v(s,w),v(s,y),v(y,R),A||(T=[W(e,"mouseenter",l[10]),W(e,"focus",l[11])],A=!0)},p(C,[h]){var te,b;N===(N=D(C,h))&&k?k.p(C,h):(k.d(1),k=N(C),k&&(k.c(),k.m(e,i))),h&1&&m!==(m=C[0].place_name.replace(/,.*/,"")+"")&&ve(a,m),h&37&&(_=C[2]==="always"||C[2]&&!C[0].address&&((te=C[0].properties)==null?void 0:te.kind)!=="road"&&((b=C[0].properties)==null?void 0:b.kind)!=="road_relation"&&!C[0].id.startsWith("address.")&&!C[0].id.startsWith("postal_code.")&&(!C[0].id.startsWith("poi.")||!C[5])),_?L?L.p(C,h):(L=it(C),L.c(),L.m(o,null)):L&&(L.d(1),L=null),h&1&&g!==(g=C[0].place_name.replace(/[^,]*,?\s*/,"")+"")&&ve(R,g),h&2&&c(e,"data-selected",C[1]),h&2&&fe(e,"selected",C[1])},i:G,o:G,d(C){C&&B(e),k.d(),L&&L.d(),A=!1,Se(T)}}}function El(l,e,t){var A;let n,r,{feature:i}=e,{selected:s=!1}=e,{showPlaceType:o}=e,{missingIconsCache:f}=e,{iconsBaseUrl:m}=e;const a=(A=i.properties)==null?void 0:A.categories;let d,_;function w(T){_&&f.add(_),t(9,n--,n)}function y(T){se.call(this,l,T)}function g(T){se.call(this,l,T)}const R=T=>w(T.currentTarget);return l.$$set=T=>{"feature"in T&&t(0,i=T.feature),"selected"in T&&t(1,s=T.selected),"showPlaceType"in T&&t(2,o=T.showPlaceType),"missingIconsCache"in T&&t(8,f=T.missingIconsCache),"iconsBaseUrl"in T&&t(3,m=T.iconsBaseUrl)},l.$$.update=()=>{var T,D,N,k;if(l.$$.dirty&824)do t(9,n--,n),t(4,d=a==null?void 0:a[n]),t(5,_=d?m+d.replace(/ /g,"_")+".svg":void 0);while(n>-1&&(!_||f.has(_)));l.$$.dirty&1&&t(6,r=i.id.startsWith("poi.")?(D=(T=i.properties)==null?void 0:T.categories)==null?void 0:D.join(", "):((k=(N=i.properties)==null?void 0:N.place_type_name)==null?void 0:k[0])??i.place_type[0])},t(9,n=(a==null?void 0:a.length)??0),[i,s,o,m,d,_,r,w,f,n,y,g,R]}class Ul extends K{constructor(e){super(),j(this,e,El,Al,Q,{feature:0,selected:1,showPlaceType:2,missingIconsCache:8,iconsBaseUrl:3})}}function Vl(l){let e;return{c(){e=M("div"),e.innerHTML='<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>',c(e,"class","svelte-7cmwmc")},m(t,n){I(t,e,n)},p:G,i:G,o:G,d(t){t&&B(e)}}}class Wl extends K{constructor(e){super(),j(this,e,null,Vl,Q,{})}}function Hl(l){let e,t;return{c(){e=ue("svg"),t=ue("path"),c(t,"d","M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"),c(e,"width","14"),c(e,"height","14"),c(e,"viewBox","0 0 15 15"),c(e,"class","svelte-en2qvf")},m(n,r){I(n,e,r),v(e,t)},p:G,i:G,o:G,d(n){n&&B(e)}}}class Gl extends K{constructor(e){super(),j(this,e,null,Hl,Q,{})}}function ql(l){let e,t;return{c(){e=ue("svg"),t=ue("path"),c(t,"d","M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"),c(e,"viewBox","0 0 14 14"),c(e,"width","13"),c(e,"height","13"),c(e,"class","svelte-en2qvf")},m(n,r){I(n,e,r),v(e,t)},p:G,i:G,o:G,d(n){n&&B(e)}}}class yt extends K{constructor(e){super(),j(this,e,null,ql,Q,{})}}function Fl(l){let e,t;return{c(){e=ue("svg"),t=ue("path"),c(t,"d","M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"),c(e,"viewBox","0 0 30 30"),c(e,"fill","none"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","svelte-d2loi5")},m(n,r){I(n,e,r),v(e,t)},p:G,i:G,o:G,d(n){n&&B(e)}}}class kt extends K{constructor(e){super(),j(this,e,null,Fl,Q,{})}}function ot(l,e,t){const n=l.slice();return n[75]=e[t],n[77]=t,n}function at(l){let e,t;return e=new Wl({}),{c(){F(e.$$.fragment)},m(n,r){O(e,n,r),t=!0},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){Z(e,n)}}}function ft(l){let e,t,n,r,i;return t=new Cl({}),{c(){e=M("button"),F(t.$$.fragment),c(e,"type","button"),c(e,"title",l[9]),c(e,"class","svelte-1r7dvt7"),fe(e,"active",l[0])},m(s,o){I(s,e,o),O(t,e,null),n=!0,r||(i=W(e,"click",l[61]),r=!0)},p(s,o){(!n||o[0]&512)&&c(e,"title",s[9]),(!n||o[0]&1)&&fe(e,"active",s[0])},i(s){n||(p(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){s&&B(e),Z(t),r=!1,i()}}}function Ol(l){let e,t=[],n=new Map,r,i,s,o=Ee(l[13]);const f=m=>m[75].id+(m[75].address?","+m[75].address:"");for(let m=0;m<o.length;m+=1){let a=ot(l,o,m),d=f(a);n.set(d,t[m]=ut(d,a))}return{c(){e=M("ul");for(let m=0;m<t.length;m+=1)t[m].c();c(e,"class","svelte-1r7dvt7")},m(m,a){I(m,e,a);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(e,null);r=!0,i||(s=[W(e,"mouseleave",l[65]),W(e,"blur",l[66])],i=!0)},p(m,a){a[0]&8940544&&(o=Ee(m[13]),he(),t=Jt(t,a,f,1,m,o,n,e,Xt,ut,null,ot),ge())},i(m){if(!r){for(let a=0;a<o.length;a+=1)p(t[a]);r=!0}},o(m){for(let a=0;a<t.length;a+=1)S(t[a]);r=!1},d(m){m&&B(e);for(let a=0;a<t.length;a+=1)t[a].d();i=!1,Se(s)}}}function Zl(l){let e,t,n,r,i,s;return t=new kt({}),{c(){e=M("div"),F(t.$$.fragment),n=H(),r=M("div"),i=$(l[7]),c(r,"class","svelte-1r7dvt7"),c(e,"class","no-results svelte-1r7dvt7")},m(o,f){I(o,e,f),O(t,e,null),v(e,n),v(e,r),v(r,i),s=!0},p(o,f){(!s||f[0]&128)&&ve(i,o[7])},i(o){s||(p(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&B(e),Z(t)}}}function Dl(l){let e="",t;return{c(){t=$(e)},m(n,r){I(n,t,r)},p:G,i:G,o:G,d(n){n&&B(t)}}}function Nl(l){let e,t,n,r,i,s,o,f,m,a,d;return t=new kt({}),f=new yt({}),{c(){e=M("div"),F(t.$$.fragment),n=H(),r=M("div"),i=$(l[6]),s=H(),o=M("button"),F(f.$$.fragment),c(r,"class","svelte-1r7dvt7"),c(o,"class","svelte-1r7dvt7"),c(e,"class","error svelte-1r7dvt7")},m(_,w){I(_,e,w),O(t,e,null),v(e,n),v(e,r),v(r,i),v(e,s),v(e,o),O(f,o,null),m=!0,a||(d=W(o,"click",l[62]),a=!0)},p(_,w){(!m||w[0]&64)&&ve(i,_[6])},i(_){m||(p(t.$$.fragment,_),p(f.$$.fragment,_),m=!0)},o(_){S(t.$$.fragment,_),S(f.$$.fragment,_),m=!1},d(_){_&&B(e),Z(t),Z(f),a=!1,d()}}}function ut(l,e){let t,n,r;function i(){return e[63](e[77])}function s(){return e[64](e[75])}return n=new Ul({props:{feature:e[75],showPlaceType:e[10],selected:e[14]===e[77],missingIconsCache:e[19],iconsBaseUrl:e[11]}}),n.$on("mouseenter",i),n.$on("focus",s),{key:l,first:null,c(){t=Ie(),F(n.$$.fragment),this.first=t},m(o,f){I(o,t,f),O(n,o,f),r=!0},p(o,f){e=o;const m={};f[0]&8192&&(m.feature=e[75]),f[0]&1024&&(m.showPlaceType=e[10]),f[0]&24576&&(m.selected=e[14]===e[77]),f[0]&2048&&(m.iconsBaseUrl=e[11]),n.$set(m)},i(o){r||(p(n.$$.fragment,o),r=!0)},o(o){S(n.$$.fragment,o),r=!1},d(o){o&&B(t),Z(n,o)}}}function Kl(l){let e,t,n,r,i,s,o,f,m,a,d,_,w,y,g,R,A,T,D,N;r=new Gl({}),a=new yt({});let k=l[18]&&at(),L=l[5]===!0&&ft(l);const ee=l[53].default,q=be(ee,l,l[52],null),C=[Nl,Dl,Zl,Ol],h=[];function te(b,E){var ie,ce;return b[17]?0:b[15]?((ie=b[13])==null?void 0:ie.length)===0?2:b[15]&&((ce=b[13])!=null&&ce.length)?3:-1:1}return~(g=te(l))&&(R=h[g]=C[g](l)),{c(){e=M("form"),t=M("div"),n=M("button"),F(r.$$.fragment),i=H(),s=M("input"),o=H(),f=M("div"),m=M("button"),F(a.$$.fragment),d=H(),k&&k.c(),_=H(),L&&L.c(),w=H(),q&&q.c(),y=H(),R&&R.c(),c(n,"class","search-button svelte-1r7dvt7"),c(n,"type","button"),c(s,"placeholder",l[8]),c(s,"aria-label",l[8]),c(s,"class","svelte-1r7dvt7"),c(m,"type","button"),c(m,"title",l[3]),c(m,"class","svelte-1r7dvt7"),c(f,"class","clear-button-container svelte-1r7dvt7"),fe(f,"displayable",l[1]!==""),c(t,"class","input-group svelte-1r7dvt7"),c(e,"tabindex","0"),c(e,"class",A=Ve(l[2])+" svelte-1r7dvt7"),fe(e,"can-collapse",l[4]&&l[1]==="")},m(b,E){I(b,e,E),v(e,t),v(t,n),O(r,n,null),v(t,i),v(t,s),l[55](s),Le(s,l[1]),v(t,o),v(t,f),v(f,m),O(a,m,null),v(f,d),k&&k.m(f,null),v(t,_),L&&L.m(t,null),v(t,w),q&&q.m(t,null),v(e,y),~g&&h[g].m(e,null),T=!0,D||(N=[W(n,"click",l[54]),W(s,"input",l[56]),W(s,"focus",l[57]),W(s,"blur",l[58]),W(s,"keydown",l[21]),W(s,"input",l[59]),W(m,"click",l[60]),W(e,"submit",jt(l[20]))],D=!0)},p(b,E){(!T||E[0]&256)&&c(s,"placeholder",b[8]),(!T||E[0]&256)&&c(s,"aria-label",b[8]),E[0]&2&&s.value!==b[1]&&Le(s,b[1]),(!T||E[0]&8)&&c(m,"title",b[3]),b[18]?k?E[0]&262144&&p(k,1):(k=at(),k.c(),p(k,1),k.m(f,null)):k&&(he(),S(k,1,1,()=>{k=null}),ge()),(!T||E[0]&2)&&fe(f,"displayable",b[1]!==""),b[5]===!0?L?(L.p(b,E),E[0]&32&&p(L,1)):(L=ft(b),L.c(),p(L,1),L.m(t,w)):L&&(he(),S(L,1,1,()=>{L=null}),ge()),q&&q.p&&(!T||E[1]&2097152)&&ye(q,ee,b,b[52],T?we(ee,b[52],E,null):ke(b[52]),null);let ie=g;g=te(b),g===ie?~g&&h[g].p(b,E):(R&&(he(),S(h[ie],1,1,()=>{h[ie]=null}),ge()),~g?(R=h[g],R?R.p(b,E):(R=h[g]=C[g](b),R.c()),p(R,1),R.m(e,null)):R=null),(!T||E[0]&4&&A!==(A=Ve(b[2])+" svelte-1r7dvt7"))&&c(e,"class",A),(!T||E[0]&22)&&fe(e,"can-collapse",b[4]&&b[1]==="")},i(b){T||(p(r.$$.fragment,b),p(a.$$.fragment,b),p(k),p(L),p(q,b),p(R),T=!0)},o(b){S(r.$$.fragment,b),S(a.$$.fragment,b),S(k),S(L),S(q,b),S(R),T=!1},d(b){b&&B(e),Z(r),l[55](null),Z(a),k&&k.d(),L&&L.d(),q&&q.d(b),~g&&h[g].d(),D=!1,Se(N)}}}function jl(l,e,t){const n=e[1],r=e[0],i=n-r;return l===n&&t?l:((l-r)%i+i)%i+r}function ct(l){let e=[...l];return e[2]<e[0]&&(e[2]+=360),e}function Ql(l,e,t){let n,{$$slots:r={},$$scope:i}=e,{class:s=void 0}=e,{apiKey:o}=e,{bbox:f=void 0}=e,{clearButtonTitle:m="clear"}=e,{clearOnBlur:a=!1}=e,{collapsed:d=!1}=e,{country:_=void 0}=e,{debounceSearch:w=200}=e,{enableReverse:y=!1}=e,{errorMessage:g="Something went wrong…"}=e,{filter:R=()=>!0}=e,{flyTo:A=!0}=e,{fuzzyMatch:T=!0}=e,{language:D=void 0}=e,{limit:N=void 0}=e,{mapController:k=void 0}=e,{minLength:L=2}=e,{noResultsMessage:ee="Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!"}=e,{placeholder:q="Search"}=e,{proximity:C=void 0}=e,{reverseActive:h=y==="always"}=e,{reverseButtonTitle:te="toggle reverse geocoding"}=e,{searchValue:b=""}=e,{showFullGeometry:E=!0}=e,{showPlaceType:ie="ifNeeded"}=e,{showResultsWhileTyping:ce=!0}=e,{trackProximity:Be=!0}=e,{types:me=void 0}=e,{zoom:ze=16}=e,{maxZoom:Ce=18}=e,{apiUrl:He="https://api.maptiler.com/geocoding"}=e,{fetchParameters:Ge={}}=e,{iconsBaseUrl:Qe="https://cdn.maptiler.com/maptiler-geocoding-control/v0.0.99/icons/"}=e;function wt(){le.focus()}function vt(){le.blur()}function Je(u,V=!0){t(1,b=u),V?(t(14,U=-1),Ye()):(Oe(),setTimeout(()=>{le.focus(),le.select()}))}let Me=!1,P,J,z,Xe="",le,U=-1,ne,Re=[],de,Te,Pe,qe;const Mt=new Set,oe=Qt();ht(()=>{k&&(k.setEventHandler(void 0),k.indicateReverse(!1),k.setSelectedMarker(-1),k.setMarkers(void 0,void 0))});function Ye(u){if(Te&&(clearTimeout(Te),Te=void 0),U>-1&&P)t(49,z=P[U]),t(1,b=z.place_name.replace(/,.*/,"")),t(17,ne=void 0),t(48,J=void 0),t(14,U=-1);else if(b){const V=u||!xe();Fe(b,{exact:!0}).then(()=>{t(48,J=P),t(49,z=void 0),V&&Tt()}).catch(re=>t(17,ne=re))}}function xe(){return/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(b)}async function Fe(u,{byId:V=!1,exact:re=!1}={}){t(17,ne=void 0);const pe=xe(),x=new URLSearchParams;D!=null&&x.set("language",Array.isArray(D)?D.join(","):D),me&&x.set("types",me.join(",")),pe||(f&&x.set("bbox",f.map(ae=>ae.toFixed(6)).join(",")),_&&x.set("country",Array.isArray(_)?_.join(","):_)),V||(C&&x.set("proximity",C.map(ae=>ae.toFixed(6)).join(",")),(re||!ce)&&x.set("autocomplete","false"),x.set("fuzzyMatch",String(T))),N!==void 0&&(!pe||(me==null?void 0:me.length)===1)&&x.set("limit",String(N)),x.set("key",o);const _e=He+"/"+encodeURIComponent(u)+".json?"+x.toString();if(_e===Xe){V?(t(13,P=void 0),t(49,z=Re[0])):t(13,P=Re);return}Xe=_e,de==null||de.abort();const X=new AbortController;t(18,de=X);let De;try{De=await fetch(_e,{signal:X.signal,...Ge}).finally(()=>{X===de&&t(18,de=void 0)})}catch(ae){if(ae&&typeof ae=="object"&&"name"in ae&&ae.name==="AbortError")return;throw new Error}if(!De.ok)throw new Error;const Ne=await De.json();oe("response",{url:_e,featureCollection:Ne}),V?(t(13,P=void 0),t(49,z=Ne.features[0]),Re=[z]):(t(13,P=Ne.features.filter(R)),Re=P,pe&&le.focus())}function Tt(){var re,pe,x,_e;if(!(J!=null&&J.length)||!A)return;const u=[180,90,-180,-90],V=!J.some(X=>!X.matching_text);for(const X of J)(V||!X.matching_text)&&(u[0]=Math.min(u[0],((re=X.bbox)==null?void 0:re[0])??X.center[0]),u[1]=Math.min(u[1],((pe=X.bbox)==null?void 0:pe[1])??X.center[1]),u[2]=Math.max(u[2],((x=X.bbox)==null?void 0:x[2])??X.center[0]),u[3]=Math.max(u[3],((_e=X.bbox)==null?void 0:_e[3])??X.center[1]));k&&J.length>0&&(z&&u[0]===u[2]&&u[1]===u[3]?k.flyTo(z.center,ze):k.fitBounds(ct(u),50,Ce))}function pt(u){t(0,h=y==="always"),Je(jl(u[0],[-180,180],!0).toFixed(6)+","+u[1].toFixed(6))}function Ct(u){if(!P)return;let V=u.key==="ArrowDown"?1:u.key==="ArrowUp"?-1:0;V?(U===-1&&V===-1&&t(14,U=P.length),t(14,U+=V),U>=P.length&&t(14,U=-1),u.preventDefault()):["ArrowLeft","ArrowRight","Home","End"].includes(u.key)&&t(14,U=-1)}function Oe(u=!0){if(t(17,ne=void 0),ce){if(Te&&clearTimeout(Te),b.length<L)return;const V=b;Te=window.setTimeout(()=>{Fe(V).catch(re=>t(17,ne=re))},u?w:0)}else t(13,P=void 0),t(17,ne=void 0)}function Ze(u){t(49,z=u),t(1,b=u.place_name),t(14,U=-1)}const Lt=()=>le.focus();function St(u){We[u?"unshift":"push"](()=>{le=u,t(16,le)})}function It(){b=this.value,t(1,b),t(12,Me),t(27,a)}const Bt=()=>t(12,Me=!0),zt=()=>t(12,Me=!1),Rt=()=>Oe(),Pt=()=>{t(1,b=""),le.focus()},At=()=>t(0,h=!h),Et=()=>t(17,ne=void 0),Ut=u=>t(14,U=u),Vt=u=>Ze(u),Wt=()=>t(14,U=-1),Ht=()=>{};return l.$$set=u=>{"class"in u&&t(2,s=u.class),"apiKey"in u&&t(25,o=u.apiKey),"bbox"in u&&t(26,f=u.bbox),"clearButtonTitle"in u&&t(3,m=u.clearButtonTitle),"clearOnBlur"in u&&t(27,a=u.clearOnBlur),"collapsed"in u&&t(4,d=u.collapsed),"country"in u&&t(28,_=u.country),"debounceSearch"in u&&t(29,w=u.debounceSearch),"enableReverse"in u&&t(5,y=u.enableReverse),"errorMessage"in u&&t(6,g=u.errorMessage),"filter"in u&&t(30,R=u.filter),"flyTo"in u&&t(31,A=u.flyTo),"fuzzyMatch"in u&&t(32,T=u.fuzzyMatch),"language"in u&&t(33,D=u.language),"limit"in u&&t(34,N=u.limit),"mapController"in u&&t(35,k=u.mapController),"minLength"in u&&t(36,L=u.minLength),"noResultsMessage"in u&&t(7,ee=u.noResultsMessage),"placeholder"in u&&t(8,q=u.placeholder),"proximity"in u&&t(24,C=u.proximity),"reverseActive"in u&&t(0,h=u.reverseActive),"reverseButtonTitle"in u&&t(9,te=u.reverseButtonTitle),"searchValue"in u&&t(1,b=u.searchValue),"showFullGeometry"in u&&t(37,E=u.showFullGeometry),"showPlaceType"in u&&t(10,ie=u.showPlaceType),"showResultsWhileTyping"in u&&t(38,ce=u.showResultsWhileTyping),"trackProximity"in u&&t(39,Be=u.trackProximity),"types"in u&&t(40,me=u.types),"zoom"in u&&t(41,ze=u.zoom),"maxZoom"in u&&t(42,Ce=u.maxZoom),"apiUrl"in u&&t(43,He=u.apiUrl),"fetchParameters"in u&&t(44,Ge=u.fetchParameters),"iconsBaseUrl"in u&&t(11,Qe=u.iconsBaseUrl),"$$scope"in u&&t(52,i=u.$$scope)},l.$$.update=()=>{if(l.$$.dirty[1]&256&&(Be||t(24,C=void 0)),l.$$.dirty[0]&134221824&&setTimeout(()=>{t(15,Pe=Me),a&&!Me&&t(1,b="")}),l.$$.dirty[0]&8194|l.$$.dirty[1]&32&&b.length<L&&(t(49,z=void 0),t(13,P=void 0),t(17,ne=void 0),t(48,J=P)),l.$$.dirty[1]&262208&&E&&z&&!z.address&&z.geometry.type==="Point"&&Fe(z.id,{byId:!0}).catch(u=>t(17,ne=u)),l.$$.dirty[1]&789521&&(k&&z&&z.id!==qe&&A&&(!z.bbox||z.bbox[0]===z.bbox[2]&&z.bbox[1]===z.bbox[3]?k.flyTo(z.center,z.id.startsWith("poi.")||z.id.startsWith("address.")?Ce:ze):k.fitBounds(ct(z.bbox),50,Ce),t(13,P=void 0),t(48,J=void 0),t(14,U=-1)),t(50,qe=z==null?void 0:z.id)),l.$$.dirty[0]&8192|l.$$.dirty[1]&131072&&J!==P&&t(48,J=void 0),l.$$.dirty[1]&393232&&k&&k.setMarkers(J,z),l.$$.dirty[0]&2&&t(14,U=-1),l.$$.dirty[0]&40961|l.$$.dirty[1]&272&&k&&k.setEventHandler(u=>{switch(u.type){case"mapClick":h&&pt(u.coordinates);break;case"proximityChange":t(24,C=Be?u.proximity:void 0);break;case"markerClick":{const V=P==null?void 0:P.find(re=>re.id===u.id);V&&Ze(V)}break;case"markerMouseEnter":t(14,U=Pe?(P==null?void 0:P.findIndex(V=>V.id===u.id))??-1:-1);break;case"markerMouseLeave":t(14,U=-1);break}}),l.$$.dirty[0]&16384|l.$$.dirty[1]&16&&(k==null||k.setSelectedMarker(U)),l.$$.dirty[0]&24576&&t(51,n=P==null?void 0:P[U]),l.$$.dirty[0]&2|l.$$.dirty[1]&16){const u=/^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(b);k==null||k.setReverseMarker(u?[Number(u[1]),Number(u[2])]:void 0)}l.$$.dirty[1]&1048576&&oe("select",n),l.$$.dirty[1]&262144&&oe("pick",z),l.$$.dirty[0]&40960&&oe("optionsVisibilityChange",Pe&&!!P),l.$$.dirty[0]&8192&&oe("featuresListed",P),l.$$.dirty[1]&131072&&oe("featuresMarked",J),l.$$.dirty[0]&1&&oe("reverseToggle",h),l.$$.dirty[0]&2&&oe("queryChange",b),l.$$.dirty[0]&1|l.$$.dirty[1]&16&&k&&k.indicateReverse(h)},[h,b,s,m,d,y,g,ee,q,te,ie,Qe,Me,P,U,Pe,le,ne,de,Mt,Ye,Ct,Oe,Ze,C,o,f,a,_,w,R,A,T,D,N,k,L,E,ce,Be,me,ze,Ce,He,Ge,wt,vt,Je,J,z,qe,n,i,r,Lt,St,It,Bt,zt,Rt,Pt,At,Et,Ut,Vt,Wt,Ht]}class Jl extends K{constructor(e){super(),j(this,e,Ql,Kl,Q,{class:2,apiKey:25,bbox:26,clearButtonTitle:3,clearOnBlur:27,collapsed:4,country:28,debounceSearch:29,enableReverse:5,errorMessage:6,filter:30,flyTo:31,fuzzyMatch:32,language:33,limit:34,mapController:35,minLength:36,noResultsMessage:7,placeholder:8,proximity:24,reverseActive:0,reverseButtonTitle:9,searchValue:1,showFullGeometry:37,showPlaceType:10,showResultsWhileTyping:38,trackProximity:39,types:40,zoom:41,maxZoom:42,apiUrl:43,fetchParameters:44,iconsBaseUrl:11,focus:45,blur:46,setQuery:47},null,[-1,-1,-1])}get focus(){return this.$$.ctx[45]}get blur(){return this.$$.ctx[46]}get setQuery(){return this.$$.ctx[47]}}function mt(l){let e,t,n,r;return t=new Jl({props:{mapController:l[1],apiKey:"MZEJTanw3WpxRvt7qDfo",country:"gb"}}),{c(){e=M("div"),F(t.$$.fragment),c(e,"class",n=Ve(l[0])+" svelte-13xba41")},m(i,s){I(i,e,s),O(t,e,null),r=!0},p(i,s){const o={};s&2&&(o.mapController=i[1]),t.$set(o),(!r||s&1&&n!==(n=Ve(i[0])+" svelte-13xba41"))&&c(e,"class",n)},i(i){r||(p(t.$$.fragment,i),r=!0)},o(i){S(t.$$.fragment,i),r=!1},d(i){i&&B(e),Z(t)}}}function Xl(l){let e,t,n=l[1]&&mt(l);return{c(){n&&n.c(),e=Ie()},m(r,i){n&&n.m(r,i),I(r,e,i),t=!0},p(r,[i]){r[1]?n?(n.p(r,i),i&2&&p(n,1)):(n=mt(r),n.c(),p(n,1),n.m(e.parentNode,e)):n&&(he(),S(n,1,1,()=>{n=null}),ge())},i(r){t||(p(n),t=!0)},o(r){S(n),t=!1},d(r){r&&B(e),n&&n.d(r)}}}function Yl(l,e,t){let n;Ue(l,gt,s=>t(2,n=s));let{position:r="top-left"}=e,i;return Yt(()=>{t(1,i=xt(n,$t))}),l.$$set=s=>{"position"in s&&t(0,r=s.position)},[r,i]}class vn extends K{constructor(e){super(),j(this,e,Yl,Xl,Q,{position:0})}}function dt(l){if(!l)throw new Error("coord is required");if(!Array.isArray(l)){if(l.type==="Feature"&&l.geometry!==null&&l.geometry.type==="Point")return l.geometry.coordinates;if(l.type==="Point")return l.coordinates}if(Array.isArray(l)&&l.length>=2&&!Array.isArray(l[0])&&!Array.isArray(l[1]))return l;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Mn(l){if(Array.isArray(l))return l;if(l.type==="Feature"){if(l.geometry!==null)return l.geometry.coordinates}else if(l.coordinates)return l.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Tn(l,e){return l.type==="FeatureCollection"?"FeatureCollection":l.type==="GeometryCollection"?"GeometryCollection":l.type==="Feature"&&l.geometry!==null?l.geometry.type:l.type}function xl(l,e,t){t===void 0&&(t={});var n=dt(l),r=dt(e),i=Ae(r[1]-n[1]),s=Ae(r[0]-n[0]),o=Ae(n[1]),f=Ae(r[1]),m=Math.pow(Math.sin(i/2),2)+Math.pow(Math.sin(s/2),2)*Math.cos(o)*Math.cos(f);return el(2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m)),t.units)}function pn(l,e){return e===void 0&&(e={}),tl(l,function(t,n){var r=n.geometry.coordinates;return t+xl(r[0],r[1],e)},0)}const $l={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},Cn=10,Ln=10;function en(l){let e;const t=l[14].default,n=be(t,l,l[22],null);return{c(){n&&n.c()},m(r,i){n&&n.m(r,i),e=!0},p(r,i){n&&n.p&&(!e||i&4194304)&&ye(n,t,r,r[22],e?we(t,r[22],i,null):ke(r[22]),null)},i(r){e||(p(n,r),e=!0)},o(r){S(n,r),e=!1},d(r){n&&n.d(r)}}}function tn(l){let e,t,n;function r(s){l[15](s)}let i={id:l[1],type:"line",source:l[2],sourceLayer:l[3],beforeId:l[4],beforeLayerType:l[5],paint:l[6],layout:l[7],filter:l[8],minzoom:l[9],maxzoom:l[10],hoverCursor:l[11],manageHoverState:l[12],eventsIfTopMost:l[13],$$slots:{default:[en]},$$scope:{ctx:l}};return l[0]!==void 0&&(i.hovered=l[0]),e=new ll({props:i}),We.push(()=>Ke(e,"hovered",r)),e.$on("click",l[16]),e.$on("dblclick",l[17]),e.$on("contextmenu",l[18]),e.$on("mouseenter",l[19]),e.$on("mousemove",l[20]),e.$on("mouseleave",l[21]),{c(){F(e.$$.fragment)},m(s,o){O(e,s,o),n=!0},p(s,[o]){const f={};o&2&&(f.id=s[1]),o&4&&(f.source=s[2]),o&8&&(f.sourceLayer=s[3]),o&16&&(f.beforeId=s[4]),o&32&&(f.beforeLayerType=s[5]),o&64&&(f.paint=s[6]),o&128&&(f.layout=s[7]),o&256&&(f.filter=s[8]),o&512&&(f.minzoom=s[9]),o&1024&&(f.maxzoom=s[10]),o&2048&&(f.hoverCursor=s[11]),o&4096&&(f.manageHoverState=s[12]),o&8192&&(f.eventsIfTopMost=s[13]),o&4194304&&(f.$$scope={dirty:o,ctx:s}),!t&&o&1&&(t=!0,f.hovered=s[0],je(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function ln(l,e,t){let{$$slots:n={},$$scope:r}=e,{id:i=nl("line")}=e,{source:s=void 0}=e,{sourceLayer:o=void 0}=e,{beforeId:f=void 0}=e,{beforeLayerType:m=void 0}=e,{paint:a}=e,{layout:d=void 0}=e,{filter:_=void 0}=e,{minzoom:w=void 0}=e,{maxzoom:y=void 0}=e,{hoverCursor:g=void 0}=e,{manageHoverState:R=!1}=e,{hovered:A=null}=e,{eventsIfTopMost:T=!1}=e;function D(h){A=h,t(0,A)}function N(h){se.call(this,l,h)}function k(h){se.call(this,l,h)}function L(h){se.call(this,l,h)}function ee(h){se.call(this,l,h)}function q(h){se.call(this,l,h)}function C(h){se.call(this,l,h)}return l.$$set=h=>{"id"in h&&t(1,i=h.id),"source"in h&&t(2,s=h.source),"sourceLayer"in h&&t(3,o=h.sourceLayer),"beforeId"in h&&t(4,f=h.beforeId),"beforeLayerType"in h&&t(5,m=h.beforeLayerType),"paint"in h&&t(6,a=h.paint),"layout"in h&&t(7,d=h.layout),"filter"in h&&t(8,_=h.filter),"minzoom"in h&&t(9,w=h.minzoom),"maxzoom"in h&&t(10,y=h.maxzoom),"hoverCursor"in h&&t(11,g=h.hoverCursor),"manageHoverState"in h&&t(12,R=h.manageHoverState),"hovered"in h&&t(0,A=h.hovered),"eventsIfTopMost"in h&&t(13,T=h.eventsIfTopMost),"$$scope"in h&&t(22,r=h.$$scope)},[A,i,s,o,f,m,a,d,_,w,y,g,R,T,n,D,N,k,L,ee,q,C,r]}class Sn extends K{constructor(e){super(),j(this,e,ln,tn,Q,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}function nn(l){let e;return{c(){e=$("Luc Chaissac")},m(t,n){I(t,e,n)},d(t){t&&B(e)}}}function rn(l){let e,t,n,r,i,s,o,f,m;return f=new rl({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[nn]},$$scope:{ctx:l}}}),{c(){e=M("ul"),t=M("li"),t.innerHTML=`<b>Click</b>
    on the map to open a new tab with a 3rd-party imagery provider`,n=H(),r=M("li"),r.innerHTML=`Press <b>Escape</b>
    to exit this mode`,i=H(),s=M("li"),o=$("Cursor by "),F(f.$$.fragment)},m(a,d){I(a,e,d),v(e,t),v(e,n),v(e,r),v(e,i),v(e,s),v(s,o),O(f,s,null),m=!0},p(a,[d]){const _={};d&1&&(_.$$scope={dirty:d,ctx:a}),f.$set(_)},i(a){m||(p(f.$$.fragment,a),m=!0)},o(a){S(f.$$.fragment,a),m=!1},d(a){a&&B(e),Z(f)}}}class sn extends K{constructor(e){super(),j(this,e,null,rn,Q,{})}}const on="/atip/defra/assets/camera_cursor-824d29b6.svg",{window:an}=ol;function _t(l){let e,t,n,r;const i=[un,fn],s=[];function o(f,m){return f[0]?0:1}return e=o(l),t=s[e]=i[e](l),{c(){t.c(),n=Ie()},m(f,m){s[e].m(f,m),I(f,n,m),r=!0},p(f,m){let a=e;e=o(f),e===a?s[e].p(f,m):(he(),S(s[a],1,1,()=>{s[a]=null}),ge(),t=s[e],t?t.p(f,m):(t=s[e]=i[e](f),t.c()),p(t,1),t.m(n.parentNode,n))},i(f){r||(p(t),r=!0)},o(f){S(t),r=!1},d(f){f&&B(n),s[e].d(f)}}}function fn(l){let e,t;return e=new bt({props:{$$slots:{default:[cn]},$$scope:{ctx:l}}}),e.$on("click",l[6]),{c(){F(e.$$.fragment)},m(n,r){O(e,n,r),t=!0},p(n,r){const i={};r&4096&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){Z(e,n)}}}function un(l){let e,t,n,r,i,s,o;e=new bt({props:{$$slots:{default:[mn]},$$scope:{ctx:l}}}),e.$on("click",l[4]);function f(a){l[5](a)}let m={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return l[2].streetViewImagery!==void 0&&(m.value=l[2].streetViewImagery),n=new il({props:m}),We.push(()=>Ke(n,"value",f)),s=new Tl({props:{label:"Help",$$slots:{default:[dn]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment),t=H(),F(n.$$.fragment),i=H(),F(s.$$.fragment)},m(a,d){O(e,a,d),I(a,t,d),O(n,a,d),I(a,i,d),O(s,a,d),o=!0},p(a,d){const _={};d&4096&&(_.$$scope={dirty:d,ctx:a}),e.$set(_);const w={};!r&&d&4&&(r=!0,w.value=a[2].streetViewImagery,je(()=>r=!1)),n.$set(w);const y={};d&4096&&(y.$$scope={dirty:d,ctx:a}),s.$set(y)},i(a){o||(p(e.$$.fragment,a),p(n.$$.fragment,a),p(s.$$.fragment,a),o=!0)},o(a){S(e.$$.fragment,a),S(n.$$.fragment,a),S(s.$$.fragment,a),o=!1},d(a){a&&(B(t),B(i)),Z(e,a),Z(n,a),Z(s,a)}}}function cn(l){let e;return{c(){e=$("Enable Street View")},m(t,n){I(t,e,n)},d(t){t&&B(e)}}}function mn(l){let e;return{c(){e=$("Disable Street View")},m(t,n){I(t,e,n)},d(t){t&&B(e)}}}function dn(l){let e,t;return e=new sn({}),{c(){F(e.$$.fragment)},m(n,r){O(e,n,r),t=!0},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){Z(e,n)}}}function _n(l){let e,t,n,r,i=l[1]&&_t(l);return{c(){i&&i.c(),e=Ie()},m(s,o){i&&i.m(s,o),I(s,e,o),t=!0,n||(r=W(an,"keydown",l[3]),n=!0)},p(s,[o]){s[1]?i?(i.p(s,o),o&2&&p(i,1)):(i=_t(s),i.c(),p(i,1),i.m(e.parentNode,e)):i&&(he(),S(i,1,1,()=>{i=null}),ge())},i(s){t||(p(i),t=!0)},o(s){S(i),t=!1},d(s){s&&B(e),i&&i.d(s),n=!1,r()}}}function hn(l,e,t){let n,r;Ue(l,tt,g=>t(2,n=g)),Ue(l,gt,g=>t(8,r=g));let{enabled:i}=e,{showControls:s=!0}=e,o=[];function f(){r.on("click",a),r.getCanvas().style.cursor=`url(${on}), auto`,o=sl();for(let g of o)g.setProperty(r,"line-color",$l.streetview)}function m(){r.off("click",a),r.getCanvas().style.cursor="inherit";for(let g of o)g.returnToDefaultPaintValues(r);o=[]}ht(m);function a(g){if(!i)return;let R=g.lngLat.lng,A=g.lngLat.lat;n.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${A},${R}&cbp=11,0,0,0,0`,"_blank"):n.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${A}~${R}&style=x`,"_blank")}function d(g){i&&g.key=="Escape"&&(g.stopPropagation(),t(0,i=!1))}const _=()=>t(0,i=!1);function w(g){l.$$.not_equal(n.streetViewImagery,g)&&(n.streetViewImagery=g,tt.set(n))}const y=()=>t(0,i=!0);return l.$$set=g=>{"enabled"in g&&t(0,i=g.enabled),"showControls"in g&&t(1,s=g.showControls)},l.$$.update=()=>{l.$$.dirty&1&&(i?f():m())},[i,s,n,d,_,w,y]}class In extends K{constructor(e){super(),j(this,e,hn,_n,Q,{enabled:0,showControls:1})}}export{bn as B,Tl as C,vn as G,Sn as L,In as S,Ln as a,$l as b,Cn as c,Mn as d,xl as e,Tn as f,dt as g,yn as h,kn as i,sn as j,wn as k,pn as l,yl as m};
