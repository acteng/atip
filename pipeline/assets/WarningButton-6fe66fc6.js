import{S as h,i as M,s as p,F as j,g as E,m as S,t as b,n as d,p as T,E as q,d as A,e as F,h as m,j as _,v,w as W,o as c,aR as B,Q as g,bd as k,aS as C,aT as Q,aU as R,Z as U,be as w,aX as X}from"./index-46cfca48.js";function Z(l){let e,s,t,a,f,n;return e=new q({props:{errorMessage:l[3]}}),{c(){E(e.$$.fragment),s=A(),t=F("textarea"),m(t,"class","govuk-textarea"),m(t,"id",l[1]),m(t,"rows",l[2])},m(r,o){S(e,r,o),_(r,s,o),_(r,t,o),v(t,l[0]),a=!0,f||(n=W(t,"input",l[4]),f=!0)},p(r,o){const u={};o&8&&(u.errorMessage=r[3]),e.$set(u),(!a||o&2)&&m(t,"id",r[1]),(!a||o&4)&&m(t,"rows",r[2]),o&1&&v(t,r[0])},i(r){a||(b(e.$$.fragment,r),a=!0)},o(r){d(e.$$.fragment,r),a=!1},d(r){r&&(c(s),c(t)),T(e,r),f=!1,n()}}}function z(l){let e,s;return e=new j({props:{label:l[1],id:l[1],$$slots:{default:[Z]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment)},m(t,a){S(e,t,a),s=!0},p(t,[a]){const f={};a&2&&(f.label=t[1]),a&2&&(f.id=t[1]),a&47&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function D(l,e,s){let{label:t}=e,{value:a}=e,{rows:f=5}=e,{errorMessage:n=""}=e;function r(){a=this.value,s(0,a)}return l.$$set=o=>{"label"in o&&s(1,t=o.label),"value"in o&&s(0,a=o.value),"rows"in o&&s(2,f=o.rows),"errorMessage"in o&&s(3,n=o.errorMessage)},[a,t,f,n,r]}class J extends h{constructor(e){super(),M(this,e,D,z,p,{label:1,value:0,rows:2,errorMessage:3})}}function G(l){let e,s,t,a;const f=l[2].default,n=B(f,l,l[1],null);let r=[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},l[0]],o={};for(let u=0;u<r.length;u+=1)o=g(o,r[u]);return{c(){e=F("button"),n&&n.c(),k(e,o)},m(u,i){_(u,e,i),n&&n.m(e,null),e.autofocus&&e.focus(),s=!0,t||(a=W(e,"click",l[3]),t=!0)},p(u,[i]){n&&n.p&&(!s||i&2)&&C(n,f,u,u[1],s?R(f,u[1],i,null):Q(u[1]),null),k(e,o=U(r,[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},i&1&&u[0]]))},i(u){s||(b(n,u),s=!0)},o(u){d(n,u),s=!1},d(u){u&&c(e),n&&n.d(u),t=!1,a()}}}function H(l,e,s){let{$$slots:t={},$$scope:a}=e;function f(n){X.call(this,l,n)}return l.$$set=n=>{s(0,e=g(g({},e),w(n))),"$$scope"in n&&s(1,a=n.$$scope)},e=w(e),[e,a,t,f]}class K extends h{constructor(e){super(),M(this,e,H,G,p,{})}}export{J as T,K as W};
