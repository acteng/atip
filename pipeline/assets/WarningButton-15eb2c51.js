import{S as h,i as M,s as p,F as Z,g as E,m as F,t as b,n as d,p as S,H as j,E as q,d as A,e as T,h as _,j as c,v,w as W,o as m,Y as B,ai as g,b7 as k,Z as C,_ as H,$ as Y,al as z,b8 as w,aZ as D}from"./index-b3a5107f.js";function G(l){let e,a,t,r,u,n;return e=new q({props:{errorMessage:l[3]}}),{c(){E(e.$$.fragment),a=A(),t=T("textarea"),_(t,"class","govuk-textarea"),_(t,"id",l[4]),_(t,"rows",l[2])},m(o,i){F(e,o,i),c(o,a,i),c(o,t,i),v(t,l[0]),r=!0,u||(n=W(t,"input",l[5]),u=!0)},p(o,i){const s={};i&8&&(s.errorMessage=o[3]),e.$set(s),(!r||i&4)&&_(t,"rows",o[2]),i&1&&v(t,o[0])},i(o){r||(b(e.$$.fragment,o),r=!0)},o(o){d(e.$$.fragment,o),r=!1},d(o){o&&(m(a),m(t)),S(e,o),u=!1,n()}}}function I(l){let e,a;return e=new Z({props:{label:l[1],id:l[4],$$slots:{default:[G]},$$scope:{ctx:l}}}),{c(){E(e.$$.fragment)},m(t,r){F(e,t,r),a=!0},p(t,[r]){const u={};r&2&&(u.label=t[1]),r&77&&(u.$$scope={dirty:r,ctx:t}),e.$set(u)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){S(e,t)}}}function J(l,e,a){let{label:t}=e,{value:r}=e,{rows:u=5}=e,{errorMessage:n=""}=e,o=j();function i(){r=this.value,a(0,r)}return l.$$set=s=>{"label"in s&&a(1,t=s.label),"value"in s&&a(0,r=s.value),"rows"in s&&a(2,u=s.rows),"errorMessage"in s&&a(3,n=s.errorMessage)},[r,t,u,n,o,i]}class O extends h{constructor(e){super(),M(this,e,J,I,p,{label:1,value:0,rows:2,errorMessage:3})}}function K(l){let e,a,t,r;const u=l[2].default,n=B(u,l,l[1],null);let o=[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},l[0]],i={};for(let s=0;s<o.length;s+=1)i=g(i,o[s]);return{c(){e=T("button"),n&&n.c(),k(e,i)},m(s,f){c(s,e,f),n&&n.m(e,null),e.autofocus&&e.focus(),a=!0,t||(r=W(e,"click",l[3]),t=!0)},p(s,[f]){n&&n.p&&(!a||f&2)&&C(n,u,s,s[1],a?Y(u,s[1],f,null):H(s[1]),null),k(e,i=z(o,[{type:"button"},{class:"govuk-button govuk-button--warning"},{"data-module":"govuk-button"},f&1&&s[0]]))},i(s){a||(b(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){s&&m(e),n&&n.d(s),t=!1,r()}}}function L(l,e,a){let{$$slots:t={},$$scope:r}=e;function u(n){D.call(this,l,n)}return l.$$set=n=>{a(0,e=g(g({},e),w(n))),"$$scope"in n&&a(1,r=n.$$scope)},e=w(e),[e,r,t,u]}class P extends h{constructor(e){super(),M(this,e,L,K,p,{})}}export{O as T,P as W};
