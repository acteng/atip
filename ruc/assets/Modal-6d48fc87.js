import{S as q,i as A,s as J,J as K,g as k,h as w,j as y,k as b,p as v,ag as B,l as M,n as _,a9 as E,aR as L,A as R,t as m,C as X,e as h,w as z,K as D,L as F,M as G,o as j,aa as H,c as I,m as N,f as O}from"./index-8b0eed14.js";import{S as P}from"./SecondaryButton-5ddf2edf.js";function S(a){let e,s;return e=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:a}}}),e.$on("click",a[5]),{c(){I(e.$$.fragment)},m(l,c){N(e,l,c),s=!0},p(l,c){const u={};c&128&&(u.$$scope={dirty:c,ctx:l}),e.$set(u)},i(l){s||(m(e.$$.fragment,l),s=!0)},o(l){h(e.$$.fragment,l),s=!1},d(l){O(e,l)}}}function Q(a){let e;return{c(){e=w("X")},m(s,l){M(s,e,l)},d(s){s&&j(e)}}}function T(a){let e,s,l,c,u,r,d,o,g,p,t=a[2]&&S(a);const C=a[4].default,i=K(C,a,a[7],null);return{c(){e=k("div"),s=k("div"),l=k("div"),c=k("h1"),u=w(a[1]),r=y(),t&&t.c(),d=y(),i&&i.c(),b(c,"class","govuk-heading-l"),v(l,"display","flex"),v(l,"justify-content","space-between"),b(s,"class","content centered-fullscreen svelte-1st8ub0"),b(e,"class","background svelte-1st8ub0"),B(e,"open",a[0]),B(e,"closed",!a[0])},m(n,f){M(n,e,f),_(e,s),_(s,l),_(l,c),_(c,u),_(l,r),t&&t.m(l,null),_(s,d),i&&i.m(s,null),o=!0,g||(p=[E(s,"click",L(U)),E(e,"click",a[6])],g=!0)},p(n,[f]){(!o||f&2)&&R(u,n[1]),n[2]?t?(t.p(n,f),f&4&&m(t,1)):(t=S(n),t.c(),m(t,1),t.m(l,null)):t&&(X(),h(t,1,1,()=>{t=null}),z()),i&&i.p&&(!o||f&128)&&D(i,C,n,n[7],o?G(C,n[7],f,null):F(n[7]),null),(!o||f&1)&&B(e,"open",n[0]),(!o||f&1)&&B(e,"closed",!n[0])},i(n){o||(m(t),m(i,n),o=!0)},o(n){h(t),h(i,n),o=!1},d(n){n&&j(e),t&&t.d(),i&&i.d(n),g=!1,H(p)}}}const U=()=>null;function V(a,e,s){let{$$slots:l={},$$scope:c}=e,{title:u}=e,{open:r=!1}=e,{displayEscapeButton:d=!0}=e,{canCloseByClickingBackground:o=!0}=e;const g=()=>s(0,r=!1),p=()=>{o&&s(0,r=!1)};return a.$$set=t=>{"title"in t&&s(1,u=t.title),"open"in t&&s(0,r=t.open),"displayEscapeButton"in t&&s(2,d=t.displayEscapeButton),"canCloseByClickingBackground"in t&&s(3,o=t.canCloseByClickingBackground),"$$scope"in t&&s(7,c=t.$$scope)},[r,u,d,o,l,g,p,c]}class Z extends q{constructor(e){super(),A(this,e,V,T,J,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}export{Z as M};
