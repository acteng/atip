import{S as i,i as _,s as c,g as m,m as g,t as l,n as f,p as d,X as C,e as h,h as O,j as P,Y as $,Z as v,_ as S,o as b}from"./index-755c6143.js";import{P as j}from"./Popup-891e5b8a.js";const k=n=>({props:n&16}),u=n=>({props:I(n[4])});function q(n){let o,p;const e=n[2].default,t=C(e,n,n[3],u);return{c(){o=h("div"),t&&t.c(),O(o,"class","govuk-prose")},m(s,a){P(s,o,a),t&&t.m(o,null),p=!0},p(s,a){t&&t.p&&(!p||a&24)&&$(t,e,s,s[3],p?S(e,s[3],a,k):v(s[3]),u)},i(s){p||(l(t,s),p=!0)},o(s){f(t,s),p=!1},d(s){s&&b(o),t&&t.d(s)}}}function w(n){let o,p;return o=new j({props:{openOn:n[0],popupClass:n[1],openIfTopMost:!0,$$slots:{default:[q,({features:e})=>({4:e}),({features:e})=>e?16:0]},$$scope:{ctx:n}}}),{c(){m(o.$$.fragment)},m(e,t){g(o,e,t),p=!0},p(e,[t]){const s={};t&1&&(s.openOn=e[0]),t&2&&(s.popupClass=e[1]),t&24&&(s.$$scope={dirty:t,ctx:e}),o.$set(s)},i(e){p||(l(o.$$.fragment,e),p=!0)},o(e){f(o.$$.fragment,e),p=!1},d(e){d(o,e)}}}function I(n){return n?n[0].properties??{}:{}}function M(n,o,p){let{$$slots:e={},$$scope:t}=o,{openOn:s="hover"}=o,{popupClass:a=void 0}=o;return n.$$set=r=>{"openOn"in r&&p(0,s=r.openOn),"popupClass"in r&&p(1,a=r.popupClass),"$$scope"in r&&p(3,t=r.$$scope)},[s,a,e,t]}class Y extends i{constructor(o){super(),_(this,o,M,w,c,{openOn:0,popupClass:1})}}export{Y as P};
