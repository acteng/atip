import{S as i,i as _,s as c,aF as m,k as d,p as g,t as l,r as f,u as C,O,e as h,b as P,c as $,P as v,Q as b,T as k,d as S}from"./index-b24fadb9.js";const T=n=>({props:n&16}),r=n=>({props:F(n[4])});function q(n){let o,a;const e=n[2].default,t=O(e,n,n[3],r);return{c(){o=h("div"),t&&t.c(),P(o,"class","govuk-prose")},m(s,p){$(s,o,p),t&&t.m(o,null),a=!0},p(s,p){t&&t.p&&(!a||p&24)&&v(t,e,s,s[3],a?k(e,s[3],p,T):b(s[3]),r)},i(s){a||(l(t,s),a=!0)},o(s){f(t,s),a=!1},d(s){s&&S(o),t&&t.d(s)}}}function w(n){let o,a;return o=new m({props:{openOn:n[0],popupClass:n[1],openIfTopMost:!0,$$slots:{default:[q,({features:e})=>({4:e}),({features:e})=>e?16:0]},$$scope:{ctx:n}}}),{c(){d(o.$$.fragment)},m(e,t){g(o,e,t),a=!0},p(e,[t]){const s={};t&1&&(s.openOn=e[0]),t&2&&(s.popupClass=e[1]),t&24&&(s.$$scope={dirty:t,ctx:e}),o.$set(s)},i(e){a||(l(o.$$.fragment,e),a=!0)},o(e){f(o.$$.fragment,e),a=!1},d(e){C(o,e)}}}function F(n){return n?n[0].properties??{}:{}}function I(n,o,a){let{$$slots:e={},$$scope:t}=o,{openOn:s="hover"}=o,{popupClass:p=void 0}=o;return n.$$set=u=>{"openOn"in u&&a(0,s=u.openOn),"popupClass"in u&&a(1,p=u.popupClass),"$$scope"in u&&a(3,t=u.$$scope)},[s,p,e,t]}class Q extends i{constructor(o){super(),_(this,o,I,w,c,{openOn:0,popupClass:1})}}export{Q as P};
