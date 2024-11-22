import{S as T,i as j,s as q,c as z,m as D,t as v,h as b,k as E,a as C,e as h,d as c,f as m,a2 as g,a3 as O,j as d,y as F,a4 as G,a5 as H,l as J,g as M,z as N,G as B,H as K,I as L,J as Q}from"./stores-7d21e4f0.js";import{o as R,D as U,e as P}from"./files-29db54cd.js";import{P as V}from"./MapLibreMap-ffec9b0b.js";function w(s,e,l){const t=s.slice();return t[0]=e[l][0],t[3]=e[l][1],t}function I(s){let e,l;return{c(){e=h("div"),l=J(s[2]),c(e,"class","govuk-hint")},m(t,n){m(t,e,n),M(e,l)},p(t,n){n&4&&N(l,t[2])},d(t){t&&d(e)}}}function A(s){let e,l,t;return{c(){e=h("option"),e.__value=l=s[0],g(e,e.__value),c(e,"label",t=s[3])},m(n,o){m(n,e,o)},p(n,o){o&2&&l!==(l=n[0])&&(e.__value=l,g(e,e.__value)),o&2&&t!==(t=n[3])&&c(e,"label",t)},d(n){n&&d(e)}}}function W(s){let e,l,t,n,o,r,i=s[2]&&I(s),p=P(s[1]),u=[];for(let a=0;a<p.length;a+=1)u[a]=A(w(s,p,a));return{c(){i&&i.c(),e=C(),l=h("input"),t=C(),n=h("datalist");for(let a=0;a<u.length;a+=1)u[a].c();c(l,"class","govuk-input govuk-input--width-20"),c(l,"id",s[4]),c(l,"list",`${s[4]}-list`),c(n,"id",`${s[4]}-list`)},m(a,_){i&&i.m(a,_),m(a,e,_),m(a,l,_),g(l,s[0]),m(a,t,_),m(a,n,_);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(n,null);o||(r=[O(l,"input",s[6]),O(l,"change",s[5])],o=!0)},p(a,_){if(a[2]?i?i.p(a,_):(i=I(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),_&1&&l.value!==a[0]&&g(l,a[0]),_&2){p=P(a[1]);let f;for(f=0;f<p.length;f+=1){const k=w(a,p,f);u[f]?u[f].p(k,_):(u[f]=A(k),u[f].c(),u[f].m(n,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=p.length}},d(a){a&&(d(e),d(l),d(t),d(n)),i&&i.d(a),F(u,a),o=!1,G(r)}}}function X(s){let e,l;return e=new R({props:{label:s[3],id:s[4],$$slots:{default:[W]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},m(t,n){D(e,t,n),l=!0},p(t,[n]){const o={};n&8&&(o.label=t[3]),n&519&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function Y(s,e,l){let{label:t}=e,{value:n}=e,{options:o}=e,{hint:r=""}=e,i=U();function p(a){H.call(this,s,a)}function u(){n=this.value,l(0,n)}return s.$$set=a=>{"label"in a&&l(3,t=a.label),"value"in a&&l(0,n=a.value),"options"in a&&l(1,o=a.options),"hint"in a&&l(2,r=a.hint)},[n,o,r,t,i,p,u]}class se extends T{constructor(e){super(),j(this,e,Y,X,q,{label:3,value:0,options:1,hint:2})}}const Z=s=>({props:s&16}),S=s=>({props:x(s[4])});function y(s){let e,l;const t=s[2].default,n=B(t,s,s[3],S);return{c(){e=h("div"),n&&n.c(),c(e,"class","govuk-prose")},m(o,r){m(o,e,r),n&&n.m(e,null),l=!0},p(o,r){n&&n.p&&(!l||r&24)&&K(n,t,o,o[3],l?Q(t,o[3],r,Z):L(o[3]),S)},i(o){l||(v(n,o),l=!0)},o(o){b(n,o),l=!1},d(o){o&&d(e),n&&n.d(o)}}}function $(s){let e,l;return e=new V({props:{openOn:s[0],popupClass:s[1],openIfTopMost:!0,$$slots:{default:[y,({features:t})=>({4:t}),({features:t})=>t?16:0]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},m(t,n){D(e,t,n),l=!0},p(t,[n]){const o={};n&1&&(o.openOn=t[0]),n&2&&(o.popupClass=t[1]),n&24&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function x(s){return s?s[0].properties??{}:{}}function ee(s,e,l){let{$$slots:t={},$$scope:n}=e,{openOn:o="hover"}=e,{popupClass:r=void 0}=e;return s.$$set=i=>{"openOn"in i&&l(0,o=i.openOn),"popupClass"in i&&l(1,r=i.popupClass),"$$scope"in i&&l(3,n=i.$$scope)},[o,r,t,n]}class oe extends T{constructor(e){super(),j(this,e,ee,$,q,{openOn:0,popupClass:1})}}export{se as A,oe as P};
