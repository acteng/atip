import{S as h,i as M,s as p,F as W,g as E,m as q,t as b,n as d,p as F,E as j,d as A,e as S,h as m,j as _,w as v,x as T,o as c,J as B,ad as g,bu as k,O as C,P as J,Q as O,aq as P,bv as w,bf as Q}from"./index-c7e86b0c.js";function z(l){let e,s,t,a,f,n;return e=new j({props:{errorMessage:l[3]}}),{c(){E(e.$$.fragment),s=A(),t=S("textarea"),m(t,"class","govuk-textarea"),m(t,"id",l[1]),m(t,"rows",l[2])},m(u,o){q(e,u,o),_(u,s,o),_(u,t,o),v(t,l[0]),a=!0,f||(n=T(t,"input",l[4]),f=!0)},p(u,o){const r={};o&8&&(r.errorMessage=u[3]),e.$set(r),(!a||o&2)&&m(t,"id",u[1]),(!a||o&4)&&m(t,"rows",u[2]),o&1&&v(t,u[0])},i(u){a||(b(e.$$.fragment,u),a=!0)},o(u){d(e.$$.fragment,u),a=!1},d(u){u&&(c(s),c(t)),F(e,u),f=!1,n()}}}function D(l){let e,s;return e=new W({props:{label:l[1],id:l[1],$$slots:{default:[z]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment)},m(t,a){q(e,t,a),s=!0},p(t,[a]){const f={};a&2&&(f.label=t[1]),a&2&&(f.id=t[1]),a&47&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function G(l,e,s){let{label:t}=e,{value:a}=e,{rows:f=5}=e,{errorMessage:n=""}=e;function u(){a=this.value,s(0,a)}return l.$$set=o=>{"label"in o&&s(1,t=o.label),"value"in o&&s(0,a=o.value),"rows"in o&&s(2,f=o.rows),"errorMessage"in o&&s(3,n=o.errorMessage)},[a,t,f,n,u]}class L extends h{constructor(e){super(),M(this,e,G,D,p,{label:1,value:0,rows:2,errorMessage:3})}}function H(l){let e,s,t,a;const f=l[2].default,n=B(f,l,l[1],null);let u=[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},l[0]],o={};for(let r=0;r<u.length;r+=1)o=g(o,u[r]);return{c(){e=S("button"),n&&n.c(),k(e,o)},m(r,i){_(r,e,i),n&&n.m(e,null),e.autofocus&&e.focus(),s=!0,t||(a=T(e,"click",l[3]),t=!0)},p(r,[i]){n&&n.p&&(!s||i&2)&&C(n,f,r,r[1],s?O(f,r[1],i,null):J(r[1]),null),k(e,o=P(u,[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},i&1&&r[0]]))},i(r){s||(b(n,r),s=!0)},o(r){d(n,r),s=!1},d(r){r&&c(e),n&&n.d(r),t=!1,a()}}}function I(l,e,s){let{$$slots:t={},$$scope:a}=e;function f(n){Q.call(this,l,n)}return l.$$set=n=>{s(0,e=g(g({},e),w(n))),"$$scope"in n&&s(1,a=n.$$scope)},e=w(e),[e,a,t,f]}class N extends h{constructor(e){super(),M(this,e,I,H,p,{})}}export{L as T,N as W};
