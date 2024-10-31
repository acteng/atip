import{S as B,i as P,s as U,aB as j,j as y,o as L,t as b,p as v,u as Q,aG as q,I as w,a as k,e as d,b as _,c as g,ay as h,a9 as I,d as m,J as A,az as N,O as T,x as z,m as D,D as F,K as G,L as J,M as K,N as H}from"./index-533b7074.js";import{P as R}from"./MapLibreMap-c14e5d64.js";function O(o,e,t){const n=o.slice();return n[0]=e[t][0],n[3]=e[t][1],n}function C(o){let e,t;return{c(){e=d("div"),t=z(o[2]),_(e,"class","govuk-hint")},m(n,s){g(n,e,s),D(e,t)},p(n,s){s&4&&F(t,n[2])},d(n){n&&m(e)}}}function M(o){let e,t,n;return{c(){e=d("option"),e.__value=t=o[0],h(e,e.__value),_(e,"label",n=o[3])},m(s,l){g(s,e,l)},p(s,l){l&2&&t!==(t=s[0])&&(e.__value=t,h(e,e.__value)),l&2&&n!==(n=s[3])&&_(e,"label",n)},d(s){s&&m(e)}}}function V(o){let e,t,n,s,l,f,r=o[2]&&C(o),p=w(o[1]),u=[];for(let a=0;a<p.length;a+=1)u[a]=M(O(o,p,a));return{c(){r&&r.c(),e=k(),t=d("input"),n=k(),s=d("datalist");for(let a=0;a<u.length;a+=1)u[a].c();_(t,"class","govuk-input govuk-input--width-20"),_(t,"id",o[4]),_(t,"list",`${o[4]}-list`),_(s,"id",`${o[4]}-list`)},m(a,c){r&&r.m(a,c),g(a,e,c),g(a,t,c),h(t,o[0]),g(a,n,c),g(a,s,c);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(s,null);l||(f=[I(t,"input",o[6]),I(t,"change",o[5])],l=!0)},p(a,c){if(a[2]?r?r.p(a,c):(r=C(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),c&1&&t.value!==a[0]&&h(t,a[0]),c&2){p=w(a[1]);let i;for(i=0;i<p.length;i+=1){const S=O(a,p,i);u[i]?u[i].p(S,c):(u[i]=M(S),u[i].c(),u[i].m(s,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=p.length}},d(a){a&&(m(e),m(t),m(n),m(s)),r&&r.d(a),A(u,a),l=!1,N(f)}}}function W(o){let e,t;return e=new j({props:{label:o[3],id:o[4],$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){y(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,[s]){const l={};s&8&&(l.label=n[3]),s&519&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function X(o,e,t){let{label:n}=e,{value:s}=e,{options:l}=e,{hint:f=""}=e,r=q();function p(a){T.call(this,o,a)}function u(){s=this.value,t(0,s)}return o.$$set=a=>{"label"in a&&t(3,n=a.label),"value"in a&&t(0,s=a.value),"options"in a&&t(1,l=a.options),"hint"in a&&t(2,f=a.hint)},[s,l,f,n,r,p,u]}class re extends B{constructor(e){super(),P(this,e,X,W,U,{label:3,value:0,options:1,hint:2})}}const Y=o=>({props:o&16}),E=o=>({props:x(o[4])});function Z(o){let e,t;const n=o[2].default,s=G(n,o,o[3],E);return{c(){e=d("div"),s&&s.c(),_(e,"class","govuk-prose")},m(l,f){g(l,e,f),s&&s.m(e,null),t=!0},p(l,f){s&&s.p&&(!t||f&24)&&J(s,n,l,l[3],t?H(n,l[3],f,Y):K(l[3]),E)},i(l){t||(b(s,l),t=!0)},o(l){v(s,l),t=!1},d(l){l&&m(e),s&&s.d(l)}}}function $(o){let e,t;return e=new R({props:{openOn:o[0],popupClass:o[1],openIfTopMost:!0,$$slots:{default:[Z,({features:n})=>({4:n}),({features:n})=>n?16:0]},$$scope:{ctx:o}}}),{c(){y(e.$$.fragment)},m(n,s){L(e,n,s),t=!0},p(n,[s]){const l={};s&1&&(l.openOn=n[0]),s&2&&(l.popupClass=n[1]),s&24&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function x(o){return o?o[0].properties??{}:{}}function ee(o,e,t){let{$$slots:n={},$$scope:s}=e,{openOn:l="hover"}=e,{popupClass:f=void 0}=e;return o.$$set=r=>{"openOn"in r&&t(0,l=r.openOn),"popupClass"in r&&t(1,f=r.popupClass),"$$scope"in r&&t(3,s=r.$$scope)},[l,f,n,s]}class ue extends B{constructor(e){super(),P(this,e,ee,$,U,{openOn:0,popupClass:1})}}const te="Unable to save because the local storage quota has been exceeded: you may need to clear out your web browser's local storage for this app, or  run in private mode before you can save again. Specific error here: ";function ne(){return{isQuotaError:!1,message:"",storedStrings:[]}}function ie(o,e){try{return window.localStorage.setItem(o,e),ne()}catch(t){return{isQuotaError:!0,message:te+t,storedStrings:oe()}}}function oe(){let o=[];for(let e=0;e<window.localStorage.length;e++){const t=window.localStorage.key(e)||"",n=se(window.localStorage.getItem(t)||"");o.push({key:t,storageUsedInMB:n})}return o=o.sort((e,t)=>t.storageUsedInMB-e.storageUsedInMB),o}function se(o){return o.length/(1024*1024)}export{re as A,ue as P,ie as s};
