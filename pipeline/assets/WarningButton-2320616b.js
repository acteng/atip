import{S as h,i as M,s as p,F as W,g as E,m as j,t as b,n as d,p as F,I as q,E as A,d as B,e as S,h as c,j as m,v,w as T,o as _,Z as C,aj as g,bc as k,_ as I,$ as Z,a0 as z,am as D,bd as w,b0 as G}from"./index-b89ee623.js";function H(l){let e,a,t,r,u,n;return e=new A({props:{errorMessage:l[3]}}),{c(){E(e.$$.fragment),a=B(),t=S("textarea"),c(t,"class","govuk-textarea"),c(t,"id",l[4]),c(t,"rows",l[2])},m(o,f){j(e,o,f),m(o,a,f),m(o,t,f),v(t,l[0]),r=!0,u||(n=T(t,"input",l[5]),u=!0)},p(o,f){const s={};f&8&&(s.errorMessage=o[3]),e.$set(s),(!r||f&4)&&c(t,"rows",o[2]),f&1&&v(t,o[0])},i(o){r||(b(e.$$.fragment,o),r=!0)},o(o){d(e.$$.fragment,o),r=!1},d(o){o&&(_(a),_(t)),F(e,o),u=!1,n()}}}function J(l){let e,a;return e=new W({props:{label:l[1],id:l[4],$$slots:{default:[H]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment)},m(t,r){j(e,t,r),a=!0},p(t,[r]){const u={};r&2&&(u.label=t[1]),r&77&&(u.$$scope={dirty:r,ctx:t}),e.$set(u)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function K(l,e,a){let{label:t}=e,{value:r}=e,{rows:u=5}=e,{errorMessage:n=""}=e,o=q();function f(){r=this.value,a(0,r)}return l.$$set=s=>{"label"in s&&a(1,t=s.label),"value"in s&&a(0,r=s.value),"rows"in s&&a(2,u=s.rows),"errorMessage"in s&&a(3,n=s.errorMessage)},[r,t,u,n,o,f]}class P extends h{constructor(e){super(),M(this,e,K,J,p,{label:1,value:0,rows:2,errorMessage:3})}}function L(l){let e,a,t,r;const u=l[2].default,n=C(u,l,l[1],null);let o=[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},l[0]],f={};for(let s=0;s<o.length;s+=1)f=g(f,o[s]);return{c(){e=S("button"),n&&n.c(),k(e,f)},m(s,i){m(s,e,i),n&&n.m(e,null),e.autofocus&&e.focus(),a=!0,t||(r=T(e,"click",l[3]),t=!0)},p(s,[i]){n&&n.p&&(!a||i&2)&&I(n,u,s,s[1],a?z(u,s[1],i,null):Z(s[1]),null),k(e,f=D(o,[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},i&1&&s[0]]))},i(s){a||(b(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){s&&_(e),n&&n.d(s),t=!1,r()}}}function N(l,e,a){let{$$slots:t={},$$scope:r}=e;function u(n){G.call(this,l,n)}return l.$$set=n=>{a(0,e=g(g({},e),w(n))),"$$scope"in n&&a(1,r=n.$$scope)},e=w(e),[e,r,t,u]}class Q extends h{constructor(e){super(),M(this,e,N,L,p,{})}}export{P as T,Q as W};