import{S as i,i as _,s as c,ao as m,h as g,m as d,t as r,o as f,q as C,O,e as h,j as $,k as v,T as P,U as k,V as q,p as S}from"./index-a645d2e8.js";const T=n=>({props:n&16}),l=n=>({props:w(n[4])});function b(n){let o,a;const e=n[2].default,t=O(e,n,n[3],l);return{c(){o=h("div"),t&&t.c(),$(o,"class","govuk-prose")},m(s,p){v(s,o,p),t&&t.m(o,null),a=!0},p(s,p){t&&t.p&&(!a||p&24)&&P(t,e,s,s[3],a?q(e,s[3],p,T):k(s[3]),l)},i(s){a||(r(t,s),a=!0)},o(s){f(t,s),a=!1},d(s){s&&S(o),t&&t.d(s)}}}function j(n){let o,a;return o=new m({props:{openOn:n[0],popupClass:n[1],openIfTopMost:!0,$$slots:{default:[b,({features:e})=>({4:e}),({features:e})=>e?16:0]},$$scope:{ctx:n}}}),{c(){g(o.$$.fragment)},m(e,t){d(o,e,t),a=!0},p(e,[t]){const s={};t&1&&(s.openOn=e[0]),t&2&&(s.popupClass=e[1]),t&24&&(s.$$scope={dirty:t,ctx:e}),o.$set(s)},i(e){a||(r(o.$$.fragment,e),a=!0)},o(e){f(o.$$.fragment,e),a=!1},d(e){C(o,e)}}}function w(n){return n?n[0].properties??{}:{}}function I(n,o,a){let{$$slots:e={},$$scope:t}=o,{openOn:s="hover"}=o,{popupClass:p=void 0}=o;return n.$$set=u=>{"openOn"in u&&a(0,s=u.openOn),"popupClass"in u&&a(1,p=u.popupClass),"$$scope"in u&&a(3,t=u.$$scope)},[s,p,e,t]}class U extends i{constructor(o){super(),_(this,o,I,j,c,{openOn:0,popupClass:1})}}export{U as P};
