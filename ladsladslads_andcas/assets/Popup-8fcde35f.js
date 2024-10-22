import{S as I,i as S,s as j,X as M,j as E,p as F,t as v,q as b,v as G,Y as N,am as C,a as O,e as h,b as c,c as m,Z as g,_ as P,d,av as Q,$ as U,W as V,y as W,o as X,P as Y,aG as Z,Q as z,T as B,U as D,V as H}from"./index-5904f677.js";function w(s,e,n){const t=s.slice();return t[0]=e[n][0],t[3]=e[n][1],t}function T(s){let e,n;return{c(){e=h("div"),n=W(s[2]),c(e,"class","govuk-hint")},m(t,l){m(t,e,l),X(e,n)},p(t,l){l&4&&Y(n,t[2])},d(t){t&&d(e)}}}function q(s){let e,n,t;return{c(){e=h("option"),e.__value=n=s[0],g(e,e.__value),c(e,"label",t=s[3])},m(l,o){m(l,e,o)},p(l,o){o&2&&n!==(n=l[0])&&(e.__value=n,g(e,e.__value)),o&2&&t!==(t=l[3])&&c(e,"label",t)},d(l){l&&d(e)}}}function J(s){let e,n,t,l,o,_,i=s[2]&&T(s),r=C(s[1]),u=[];for(let a=0;a<r.length;a+=1)u[a]=q(w(s,r,a));return{c(){i&&i.c(),e=O(),n=h("input"),t=O(),l=h("datalist");for(let a=0;a<u.length;a+=1)u[a].c();c(n,"class","govuk-input govuk-input--width-20"),c(n,"id",s[4]),c(n,"list",`${s[4]}-list`),c(l,"id",`${s[4]}-list`)},m(a,p){i&&i.m(a,p),m(a,e,p),m(a,n,p),g(n,s[0]),m(a,t,p),m(a,l,p);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(l,null);o||(_=[P(n,"input",s[6]),P(n,"change",s[5])],o=!0)},p(a,p){if(a[2]?i?i.p(a,p):(i=T(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),p&1&&n.value!==a[0]&&g(n,a[0]),p&2){r=C(a[1]);let f;for(f=0;f<r.length;f+=1){const k=w(a,r,f);u[f]?u[f].p(k,p):(u[f]=q(k),u[f].c(),u[f].m(l,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=r.length}},d(a){a&&(d(e),d(n),d(t),d(l)),i&&i.d(a),Q(u,a),o=!1,U(_)}}}function K(s){let e,n;return e=new M({props:{label:s[3],id:s[4],$$slots:{default:[J]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},m(t,l){F(e,t,l),n=!0},p(t,[l]){const o={};l&8&&(o.label=t[3]),l&519&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function L(s,e,n){let{label:t}=e,{value:l}=e,{options:o}=e,{hint:_=""}=e,i=N();function r(a){V.call(this,s,a)}function u(){l=this.value,n(0,l)}return s.$$set=a=>{"label"in a&&n(3,t=a.label),"value"in a&&n(0,l=a.value),"options"in a&&n(1,o=a.options),"hint"in a&&n(2,_=a.hint)},[l,o,_,t,i,r,u]}class ne extends I{constructor(e){super(),S(this,e,L,K,j,{label:3,value:0,options:1,hint:2})}}const R=s=>({props:s&16}),A=s=>({props:x(s[4])});function $(s){let e,n;const t=s[2].default,l=z(t,s,s[3],A);return{c(){e=h("div"),l&&l.c(),c(e,"class","govuk-prose")},m(o,_){m(o,e,_),l&&l.m(e,null),n=!0},p(o,_){l&&l.p&&(!n||_&24)&&B(l,t,o,o[3],n?H(t,o[3],_,R):D(o[3]),A)},i(o){n||(v(l,o),n=!0)},o(o){b(l,o),n=!1},d(o){o&&d(e),l&&l.d(o)}}}function y(s){let e,n;return e=new Z({props:{openOn:s[0],popupClass:s[1],openIfTopMost:!0,$$slots:{default:[$,({features:t})=>({4:t}),({features:t})=>t?16:0]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},m(t,l){F(e,t,l),n=!0},p(t,[l]){const o={};l&1&&(o.openOn=t[0]),l&2&&(o.popupClass=t[1]),l&24&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function x(s){return s?s[0].properties??{}:{}}function ee(s,e,n){let{$$slots:t={},$$scope:l}=e,{openOn:o="hover"}=e,{popupClass:_=void 0}=e;return s.$$set=i=>{"openOn"in i&&n(0,o=i.openOn),"popupClass"in i&&n(1,_=i.popupClass),"$$scope"in i&&n(3,l=i.$$scope)},[o,_,t,l]}class le extends I{constructor(e){super(),S(this,e,ee,y,j,{openOn:0,popupClass:1})}}export{ne as A,le as P};
