import{S as f,i as m,s as _,F as c,f as g,m as w,t as b,l as d,p as h,e as v,g as r,h as p,u as i,v as F,o as S}from"./layer_helper_utils-3f0de19d.js";function T(l){let e,n,a;return{c(){e=v("textarea"),r(e,"class","govuk-textarea"),r(e,"id",l[1]),r(e,"rows",l[2])},m(t,s){p(t,e,s),i(e,l[0]),n||(a=F(e,"input",l[3]),n=!0)},p(t,s){s&2&&r(e,"id",t[1]),s&4&&r(e,"rows",t[2]),s&1&&i(e,t[0])},d(t){t&&S(e),n=!1,a()}}}function k(l){let e,n;return e=new c({props:{label:l[1],id:l[1],$$slots:{default:[T]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment)},m(a,t){w(e,a,t),n=!0},p(a,[t]){const s={};t&2&&(s.label=a[1]),t&2&&(s.id=a[1]),t&23&&(s.$$scope={dirty:t,ctx:a}),e.$set(s)},i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){d(e.$$.fragment,a),n=!1},d(a){h(e,a)}}}function q(l,e,n){let{label:a}=e,{value:t}=e,{rows:s=5}=e;function u(){t=this.value,n(0,t)}return l.$$set=o=>{"label"in o&&n(1,a=o.label),"value"in o&&n(0,t=o.value),"rows"in o&&n(2,s=o.rows)},[t,a,s,u]}class C extends f{constructor(e){super(),m(this,e,q,k,_,{label:1,value:0,rows:2})}}export{C as T};
