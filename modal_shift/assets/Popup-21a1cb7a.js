import{S as f,i,s as _,g as c,m,t as u,n as l,p as g,aK as $,e as d,h,j as O,aL as P,aM as v,aN as M,o as S}from"./index-6ed781e3.js";import{P as b}from"./Popup-6ce5b7ed.js";const j=s=>({props:s&8}),p=s=>({props:w(s[3])});function k(s){let n,a;const e=s[1].default,t=$(e,s,s[2],p);return{c(){n=d("div"),t&&t.c(),h(n,"class","govuk-prose")},m(o,r){O(o,n,r),t&&t.m(n,null),a=!0},p(o,r){t&&t.p&&(!a||r&12)&&P(t,e,o,o[2],a?M(e,o[2],r,j):v(o[2]),p)},i(o){a||(u(t,o),a=!0)},o(o){l(t,o),a=!1},d(o){o&&S(n),t&&t.d(o)}}}function q(s){let n,a;return n=new b({props:{openOn:s[0],openIfTopMost:!0,$$slots:{default:[k,({features:e})=>({3:e}),({features:e})=>e?8:0]},$$scope:{ctx:s}}}),{c(){c(n.$$.fragment)},m(e,t){m(n,e,t),a=!0},p(e,[t]){const o={};t&1&&(o.openOn=e[0]),t&12&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){a||(u(n.$$.fragment,e),a=!0)},o(e){l(n.$$.fragment,e),a=!1},d(e){g(n,e)}}}function w(s){return s?s[0].properties??{}:{}}function C(s,n,a){let{$$slots:e={},$$scope:t}=n,{openOn:o="hover"}=n;return s.$$set=r=>{"openOn"in r&&a(0,o=r.openOn),"$$scope"in r&&a(2,t=r.$$scope)},[o,e,t]}class L extends f{constructor(n){super(),i(this,n,C,q,_,{openOn:0})}}export{L as P};
