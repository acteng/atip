import{S as M,i as z,s as A,G,g as p,h as w,j as C,k as y,q as v,a8 as B,l as j,n as _,a1 as E,au as H,z as I,t as g,A as J,e as h,w as X,H as D,I as F,J as K,o as q,a2 as L,c as N,m as O,f as P}from"./stores-65341194.js";import{S as Q}from"./SecondaryButton-8c4e03e1.js";function S(a){let e,s;return e=new Q({props:{$$slots:{default:[R]},$$scope:{ctx:a}}}),e.$on("click",a[5]),{c(){N(e.$$.fragment)},m(l,c){O(e,l,c),s=!0},p(l,c){const u={};c&128&&(u.$$scope={dirty:c,ctx:l}),e.$set(u)},i(l){s||(g(e.$$.fragment,l),s=!0)},o(l){h(e.$$.fragment,l),s=!1},d(l){P(e,l)}}}function R(a){let e;return{c(){e=w("X")},m(s,l){j(s,e,l)},d(s){s&&q(e)}}}function T(a){let e,s,l,c,u,r,d,o,m,k,t=a[2]&&S(a);const b=a[4].default,i=G(b,a,a[7],null);return{c(){e=p("div"),s=p("div"),l=p("div"),c=p("h1"),u=w(a[1]),r=C(),t&&t.c(),d=C(),i&&i.c(),y(c,"class","govuk-heading-l"),v(l,"display","flex"),v(l,"justify-content","space-between"),y(s,"class","content centered-fullscreen svelte-1st8ub0"),y(e,"class","background svelte-1st8ub0"),B(e,"open",a[0]),B(e,"closed",!a[0])},m(n,f){j(n,e,f),_(e,s),_(s,l),_(l,c),_(c,u),_(l,r),t&&t.m(l,null),_(s,d),i&&i.m(s,null),o=!0,m||(k=[E(s,"click",H(U)),E(e,"click",a[6])],m=!0)},p(n,[f]){(!o||f&2)&&I(u,n[1]),n[2]?t?(t.p(n,f),f&4&&g(t,1)):(t=S(n),t.c(),g(t,1),t.m(l,null)):t&&(J(),h(t,1,1,()=>{t=null}),X()),i&&i.p&&(!o||f&128)&&D(i,b,n,n[7],o?K(b,n[7],f,null):F(n[7]),null),(!o||f&1)&&B(e,"open",n[0]),(!o||f&1)&&B(e,"closed",!n[0])},i(n){o||(g(t),g(i,n),o=!0)},o(n){h(t),h(i,n),o=!1},d(n){n&&q(e),t&&t.d(),i&&i.d(n),m=!1,L(k)}}}const U=()=>null;function V(a,e,s){let{$$slots:l={},$$scope:c}=e,{title:u}=e,{open:r=!1}=e,{displayEscapeButton:d=!0}=e,{canCloseByClickingBackground:o=!0}=e;const m=()=>s(0,r=!1),k=()=>{o&&s(0,r=!1)};return a.$$set=t=>{"title"in t&&s(1,u=t.title),"open"in t&&s(0,r=t.open),"displayEscapeButton"in t&&s(2,d=t.displayEscapeButton),"canCloseByClickingBackground"in t&&s(3,o=t.canCloseByClickingBackground),"$$scope"in t&&s(7,c=t.$$scope)},[r,u,d,o,l,m,k,c]}class Z extends M{constructor(e){super(),z(this,e,V,T,A,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}export{Z as M};
