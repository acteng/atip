import{S as h,i as M,s as p,F as U,g as E,m as W,t as b,n as d,p as F,E as j,d as q,e as S,h as _,j as m,w as v,x as T,o as c,aU as A,U as g,be as k,aV as B,aW as C,aX as V,$ as X,bf as w,a_ as z}from"./index-c6c45394.js";function D(l){let e,s,t,a,f,n;return e=new j({props:{errorMessage:l[3]}}),{c(){E(e.$$.fragment),s=q(),t=S("textarea"),_(t,"class","govuk-textarea"),_(t,"id",l[1]),_(t,"rows",l[2])},m(r,o){W(e,r,o),m(r,s,o),m(r,t,o),v(t,l[0]),a=!0,f||(n=T(t,"input",l[4]),f=!0)},p(r,o){const u={};o&8&&(u.errorMessage=r[3]),e.$set(u),(!a||o&2)&&_(t,"id",r[1]),(!a||o&4)&&_(t,"rows",r[2]),o&1&&v(t,r[0])},i(r){a||(b(e.$$.fragment,r),a=!0)},o(r){d(e.$$.fragment,r),a=!1},d(r){r&&(c(s),c(t)),F(e,r),f=!1,n()}}}function G(l){let e,s;return e=new U({props:{label:l[1],id:l[1],$$slots:{default:[D]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment)},m(t,a){W(e,t,a),s=!0},p(t,[a]){const f={};a&2&&(f.label=t[1]),a&2&&(f.id=t[1]),a&47&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function H(l,e,s){let{label:t}=e,{value:a}=e,{rows:f=5}=e,{errorMessage:n=""}=e;function r(){a=this.value,s(0,a)}return l.$$set=o=>{"label"in o&&s(1,t=o.label),"value"in o&&s(0,a=o.value),"rows"in o&&s(2,f=o.rows),"errorMessage"in o&&s(3,n=o.errorMessage)},[a,t,f,n,r]}class L extends h{constructor(e){super(),M(this,e,H,G,p,{label:1,value:0,rows:2,errorMessage:3})}}function I(l){let e,s,t,a;const f=l[2].default,n=A(f,l,l[1],null);let r=[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},l[0]],o={};for(let u=0;u<r.length;u+=1)o=g(o,r[u]);return{c(){e=S("button"),n&&n.c(),k(e,o)},m(u,i){m(u,e,i),n&&n.m(e,null),e.autofocus&&e.focus(),s=!0,t||(a=T(e,"click",l[3]),t=!0)},p(u,[i]){n&&n.p&&(!s||i&2)&&B(n,f,u,u[1],s?V(f,u[1],i,null):C(u[1]),null),k(e,o=X(r,[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},i&1&&u[0]]))},i(u){s||(b(n,u),s=!0)},o(u){d(n,u),s=!1},d(u){u&&c(e),n&&n.d(u),t=!1,a()}}}function J(l,e,s){let{$$slots:t={},$$scope:a}=e;function f(n){z.call(this,l,n)}return l.$$set=n=>{s(0,e=g(g({},e),w(n))),"$$scope"in n&&s(1,a=n.$$scope)},e=w(e),[e,a,t,f]}class N extends h{constructor(e){super(),M(this,e,J,I,p,{})}}export{L as T,N as W};
