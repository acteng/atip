import{S,i as T,s as j,c as q,m as E,t as v,e as b,f as F,j as C,g as h,k as c,l as m,a8 as g,a9 as O,o as d,y as J,aa as K,ab as L,h as N,n as z,A as B,J as D,K as G,L as H,M as Q}from"./index-569d372d.js";import{e as P}from"./files-0b4405d4.js";import{a as R,v as U}from"./Radio-f2cb38a4.js";import{P as V}from"./MapLibreMap-08e2ab29.js";function w(s,e,n){const t=s.slice();return t[0]=e[n][0],t[3]=e[n][1],t}function A(s){let e,n;return{c(){e=h("div"),n=N(s[2]),c(e,"class","govuk-hint")},m(t,l){m(t,e,l),z(e,n)},p(t,l){l&4&&B(n,t[2])},d(t){t&&d(e)}}}function I(s){let e,n,t;return{c(){e=h("option"),e.__value=n=s[0],g(e,e.__value),c(e,"label",t=s[3])},m(l,o){m(l,e,o)},p(l,o){o&2&&n!==(n=l[0])&&(e.__value=n,g(e,e.__value)),o&2&&t!==(t=l[3])&&c(e,"label",t)},d(l){l&&d(e)}}}function W(s){let e,n,t,l,o,r,i=s[2]&&A(s),_=P(s[1]),u=[];for(let a=0;a<_.length;a+=1)u[a]=I(w(s,_,a));return{c(){i&&i.c(),e=C(),n=h("input"),t=C(),l=h("datalist");for(let a=0;a<u.length;a+=1)u[a].c();c(n,"class","govuk-input govuk-input--width-20"),c(n,"id",s[4]),c(n,"list",`${s[4]}-list`),c(l,"id",`${s[4]}-list`)},m(a,p){i&&i.m(a,p),m(a,e,p),m(a,n,p),g(n,s[0]),m(a,t,p),m(a,l,p);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(l,null);o||(r=[O(n,"input",s[6]),O(n,"change",s[5])],o=!0)},p(a,p){if(a[2]?i?i.p(a,p):(i=A(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),p&1&&n.value!==a[0]&&g(n,a[0]),p&2){_=P(a[1]);let f;for(f=0;f<_.length;f+=1){const k=w(a,_,f);u[f]?u[f].p(k,p):(u[f]=I(k),u[f].c(),u[f].m(l,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=_.length}},d(a){a&&(d(e),d(n),d(t),d(l)),i&&i.d(a),J(u,a),o=!1,K(r)}}}function X(s){let e,n;return e=new R({props:{label:s[3],id:s[4],$$slots:{default:[W]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment)},m(t,l){E(e,t,l),n=!0},p(t,[l]){const o={};l&8&&(o.label=t[3]),l&519&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Y(s,e,n){let{label:t}=e,{value:l}=e,{options:o}=e,{hint:r=""}=e,i=U();function _(a){L.call(this,s,a)}function u(){l=this.value,n(0,l)}return s.$$set=a=>{"label"in a&&n(3,t=a.label),"value"in a&&n(0,l=a.value),"options"in a&&n(1,o=a.options),"hint"in a&&n(2,r=a.hint)},[l,o,r,t,i,_,u]}class oe extends S{constructor(e){super(),T(this,e,Y,X,j,{label:3,value:0,options:1,hint:2})}}const Z=s=>({props:s&16}),M=s=>({props:x(s[4])});function y(s){let e,n;const t=s[2].default,l=D(t,s,s[3],M);return{c(){e=h("div"),l&&l.c(),c(e,"class","govuk-prose")},m(o,r){m(o,e,r),l&&l.m(e,null),n=!0},p(o,r){l&&l.p&&(!n||r&24)&&G(l,t,o,o[3],n?Q(t,o[3],r,Z):H(o[3]),M)},i(o){n||(v(l,o),n=!0)},o(o){b(l,o),n=!1},d(o){o&&d(e),l&&l.d(o)}}}function $(s){let e,n;return e=new V({props:{openOn:s[0],popupClass:s[1],openIfTopMost:!0,$$slots:{default:[y,({features:t})=>({4:t}),({features:t})=>t?16:0]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment)},m(t,l){E(e,t,l),n=!0},p(t,[l]){const o={};l&1&&(o.openOn=t[0]),l&2&&(o.popupClass=t[1]),l&24&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function x(s){return s?s[0].properties??{}:{}}function ee(s,e,n){let{$$slots:t={},$$scope:l}=e,{openOn:o="hover"}=e,{popupClass:r=void 0}=e;return s.$$set=i=>{"openOn"in i&&n(0,o=i.openOn),"popupClass"in i&&n(1,r=i.popupClass),"$$scope"in i&&n(3,l=i.$$scope)},[o,r,t,l]}class ae extends S{constructor(e){super(),T(this,e,ee,$,j,{openOn:0,popupClass:1})}}export{oe as A,ae as P};
