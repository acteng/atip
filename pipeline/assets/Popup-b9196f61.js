import{S as i,i as _,s as c,g as m,m as g,t as l,n as f,p as d,Z as C,e as h,h as O,j as $,_ as P,$ as v,a0 as S,o as b}from"./index-b89ee623.js";import{P as j}from"./Popup-d834886d.js";const k=n=>({props:n&16}),u=n=>({props:I(n[4])});function q(n){let o,a;const e=n[2].default,t=C(e,n,n[3],u);return{c(){o=h("div"),t&&t.c(),O(o,"class","govuk-prose")},m(s,p){$(s,o,p),t&&t.m(o,null),a=!0},p(s,p){t&&t.p&&(!a||p&24)&&P(t,e,s,s[3],a?S(e,s[3],p,k):v(s[3]),u)},i(s){a||(l(t,s),a=!0)},o(s){f(t,s),a=!1},d(s){s&&b(o),t&&t.d(s)}}}function w(n){let o,a;return o=new j({props:{openOn:n[0],popupClass:n[1],openIfTopMost:!0,$$slots:{default:[q,({features:e})=>({4:e}),({features:e})=>e?16:0]},$$scope:{ctx:n}}}),{c(){m(o.$$.fragment)},m(e,t){g(o,e,t),a=!0},p(e,[t]){const s={};t&1&&(s.openOn=e[0]),t&2&&(s.popupClass=e[1]),t&24&&(s.$$scope={dirty:t,ctx:e}),o.$set(s)},i(e){a||(l(o.$$.fragment,e),a=!0)},o(e){f(o.$$.fragment,e),a=!1},d(e){d(o,e)}}}function I(n){return n?n[0].properties??{}:{}}function M(n,o,a){let{$$slots:e={},$$scope:t}=o,{openOn:s="hover"}=o,{popupClass:p=void 0}=o;return n.$$set=r=>{"openOn"in r&&a(0,s=r.openOn),"popupClass"in r&&a(1,p=r.popupClass),"$$scope"in r&&a(3,t=r.$$scope)},[s,p,e,t]}class z extends i{constructor(o){super(),_(this,o,M,w,c,{openOn:0,popupClass:1})}}export{z as P};