import{S,i as j,s as q,aw as F,j as z,o as B,t as v,p as b,u as E,aT as M,y as C,a as O,e as h,b as c,c as m,am as g,an as P,d,z as N,ao as Y,ap as Z,x as D,m as G,B as H,Y as J,Z as K,_ as L,$ as Q}from"./files-23a328ff.js";import{P as R}from"./MapLibreMap-773d4c3b.js";function w(s,e,n){const t=s.slice();return t[0]=e[n][0],t[3]=e[n][1],t}function T(s){let e,n;return{c(){e=h("div"),n=D(s[2]),c(e,"class","govuk-hint")},m(t,l){m(t,e,l),G(e,n)},p(t,l){l&4&&H(n,t[2])},d(t){t&&d(e)}}}function A(s){let e,n,t;return{c(){e=h("option"),e.__value=n=s[0],g(e,e.__value),c(e,"label",t=s[3])},m(l,o){m(l,e,o)},p(l,o){o&2&&n!==(n=l[0])&&(e.__value=n,g(e,e.__value)),o&2&&t!==(t=l[3])&&c(e,"label",t)},d(l){l&&d(e)}}}function U(s){let e,n,t,l,o,_,i=s[2]&&T(s),r=C(s[1]),u=[];for(let a=0;a<r.length;a+=1)u[a]=A(w(s,r,a));return{c(){i&&i.c(),e=O(),n=h("input"),t=O(),l=h("datalist");for(let a=0;a<u.length;a+=1)u[a].c();c(n,"class","govuk-input govuk-input--width-20"),c(n,"id",s[4]),c(n,"list",`${s[4]}-list`),c(l,"id",`${s[4]}-list`)},m(a,p){i&&i.m(a,p),m(a,e,p),m(a,n,p),g(n,s[0]),m(a,t,p),m(a,l,p);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(l,null);o||(_=[P(n,"input",s[6]),P(n,"change",s[5])],o=!0)},p(a,p){if(a[2]?i?i.p(a,p):(i=T(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),p&1&&n.value!==a[0]&&g(n,a[0]),p&2){r=C(a[1]);let f;for(f=0;f<r.length;f+=1){const k=w(a,r,f);u[f]?u[f].p(k,p):(u[f]=A(k),u[f].c(),u[f].m(l,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=r.length}},d(a){a&&(d(e),d(n),d(t),d(l)),i&&i.d(a),N(u,a),o=!1,Y(_)}}}function V(s){let e,n;return e=new F({props:{label:s[3],id:s[4],$$slots:{default:[U]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},m(t,l){B(e,t,l),n=!0},p(t,[l]){const o={};l&8&&(o.label=t[3]),l&519&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function W(s,e,n){let{label:t}=e,{value:l}=e,{options:o}=e,{hint:_=""}=e,i=M();function r(a){Z.call(this,s,a)}function u(){l=this.value,n(0,l)}return s.$$set=a=>{"label"in a&&n(3,t=a.label),"value"in a&&n(0,l=a.value),"options"in a&&n(1,o=a.options),"hint"in a&&n(2,_=a.hint)},[l,o,_,t,i,r,u]}class le extends S{constructor(e){super(),j(this,e,W,V,q,{label:3,value:0,options:1,hint:2})}}const X=s=>({props:s&16}),I=s=>({props:x(s[4])});function $(s){let e,n;const t=s[2].default,l=J(t,s,s[3],I);return{c(){e=h("div"),l&&l.c(),c(e,"class","govuk-prose")},m(o,_){m(o,e,_),l&&l.m(e,null),n=!0},p(o,_){l&&l.p&&(!n||_&24)&&K(l,t,o,o[3],n?Q(t,o[3],_,X):L(o[3]),I)},i(o){n||(v(l,o),n=!0)},o(o){b(l,o),n=!1},d(o){o&&d(e),l&&l.d(o)}}}function y(s){let e,n;return e=new R({props:{openOn:s[0],popupClass:s[1],openIfTopMost:!0,$$slots:{default:[$,({features:t})=>({4:t}),({features:t})=>t?16:0]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},m(t,l){B(e,t,l),n=!0},p(t,[l]){const o={};l&1&&(o.openOn=t[0]),l&2&&(o.popupClass=t[1]),l&24&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function x(s){return s?s[0].properties??{}:{}}function ee(s,e,n){let{$$slots:t={},$$scope:l}=e,{openOn:o="hover"}=e,{popupClass:_=void 0}=e;return s.$$set=i=>{"openOn"in i&&n(0,o=i.openOn),"popupClass"in i&&n(1,_=i.popupClass),"$$scope"in i&&n(3,l=i.$$scope)},[o,_,t,l]}class se extends S{constructor(e){super(),j(this,e,ee,y,q,{openOn:0,popupClass:1})}}export{le as A,se as P};
