import{S as E,i as C,s as j,E as ne,l as M,p as J,o as R,g as U,j as I,h as B,k as m,n as h,z as q,c as x,m as $,t as P,e as F,f as ee,a2 as V,b as te,H as ie,I as ae,J as se,K as oe,a9 as S,q as H,y as re,a0 as ue,a1 as N,a3 as fe,a4 as de}from"./stores-9a9b8ad8.js";import{e as W,B as ce}from"./files-d0ec7b68.js";let D;const ge=new Uint8Array(16);function _e(){if(!D&&(D=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!D))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(ge)}const p=[];for(let l=0;l<256;++l)p.push((l+256).toString(16).slice(1));function me(l,e=0){return p[l[e+0]]+p[l[e+1]]+p[l[e+2]]+p[l[e+3]]+"-"+p[l[e+4]]+p[l[e+5]]+"-"+p[l[e+6]]+p[l[e+7]]+"-"+p[l[e+8]]+p[l[e+9]]+"-"+p[l[e+10]]+p[l[e+11]]+p[l[e+12]]+p[l[e+13]]+p[l[e+14]]+p[l[e+15]]}const he=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),z={randomUUID:he};function le(l,e,n){if(z.randomUUID&&!e&&!l)return z.randomUUID();l=l||{};const t=l.random||(l.rng||_e)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=t[i];return e}return me(t)}function G(l){let e,n,t,i;return{c(){e=U("div"),n=U("span"),n.textContent="Error:",t=I(),i=B(l[0]),m(n,"class","govuk-visually-hidden"),m(e,"class","govuk-error-message")},m(a,f){M(a,e,f),h(e,n),h(e,t),h(e,i)},p(a,f){f&1&&q(i,a[0])},d(a){a&&R(e)}}}function be(l){let e,n=l[0]&&G(l);return{c(){n&&n.c(),e=ne()},m(t,i){n&&n.m(t,i),M(t,e,i)},p(t,[i]){t[0]?n?n.p(t,i):(n=G(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:J,o:J,d(t){t&&R(e),n&&n.d(t)}}}function ve(l,e,n){let{errorMessage:t}=e;return l.$$set=i=>{"errorMessage"in i&&n(0,t=i.errorMessage)},[t]}class ke extends E{constructor(e){super(),C(this,e,ve,be,j,{errorMessage:0})}}function pe(l){let e,n,t;return{c(){e=U("input"),e.disabled=l[1],m(e,"class","govuk-file-upload"),m(e,"id",l[4]),m(e,"type","file")},m(i,a){M(i,e,a),l[6](e),n||(t=V(e,"change",l[3]),n=!0)},p(i,a){a&2&&(e.disabled=i[1])},d(i){i&&R(e),l[6](null),n=!1,t()}}}function we(l){let e,n;return e=new Me({props:{label:l[0],id:l[4],$$slots:{default:[pe]},$$scope:{ctx:l}}}),{c(){x(e.$$.fragment)},m(t,i){$(e,t,i),n=!0},p(t,[i]){const a={};i&1&&(a.label=t[0]),i&134&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){ee(e,t)}}}function Ue(l,e,n){let{label:t}=e,{onLoad:i}=e,{disabled:a=!1}=e,f;async function o(g){let b=f.files[0].name,_=await f.files[0].text();i(b,_)}let d=le();function r(g){te[g?"unshift":"push"](()=>{f=g,n(2,f)})}return l.$$set=g=>{"label"in g&&n(0,t=g.label),"onLoad"in g&&n(5,i=g.onLoad),"disabled"in g&&n(1,a=g.disabled)},[t,a,f,o,d,i,r]}class qe extends E{constructor(e){super(),C(this,e,Ue,we,j,{label:0,onLoad:5,disabled:1})}}function ye(l){let e,n,t,i,a;const f=l[3].default,o=ie(f,l,l[2],null);return{c(){e=U("div"),n=U("label"),t=B(l[0]),i=I(),o&&o.c(),m(n,"class","govuk-label govuk-label--s"),m(n,"for",l[1]),m(e,"class","govuk-form-group")},m(d,r){M(d,e,r),h(e,n),h(n,t),h(e,i),o&&o.m(e,null),a=!0},p(d,[r]){(!a||r&1)&&q(t,d[0]),(!a||r&2)&&m(n,"for",d[1]),o&&o.p&&(!a||r&4)&&ae(o,f,d,d[2],a?oe(f,d[2],r,null):se(d[2]),null)},i(d){a||(P(o,d),a=!0)},o(d){F(o,d),a=!1},d(d){d&&R(e),o&&o.d(d)}}}function Le(l,e,n){let{$$slots:t={},$$scope:i}=e,{label:a}=e,{id:f}=e;return l.$$set=o=>{"label"in o&&n(0,a=o.label),"id"in o&&n(1,f=o.id),"$$scope"in o&&n(2,i=o.$$scope)},[a,f,i,t]}class Me extends E{constructor(e){super(),C(this,e,Le,ye,j,{label:0,id:1})}}function K(l,e,n){const t=l.slice();return t[14]=e[n][0],t[15]=e[n][1],t}function O(l){let e,n;return{c(){e=U("legend"),n=B(l[1]),m(e,"class","govuk-fieldset__legend govuk-fieldset__legend--s"),H(e,"margin-right","8px")},m(t,i){M(t,e,i),h(e,n)},p(t,i){i&2&&q(n,t[1])},d(t){t&&R(e)}}}function Q(l){let e,n;return{c(){e=U("legend"),n=B(l[1]),m(e,"class","govuk-fieldset__legend govuk-fieldset__legend--s")},m(t,i){M(t,e,i),h(e,n)},p(t,i){i&2&&q(n,t[1])},d(t){t&&R(e)}}}function X(l){let e,n;return{c(){e=U("div"),n=B(l[2]),m(e,"class","govuk-hint")},m(t,i){M(t,e,i),h(e,n)},p(t,i){i&4&&q(n,t[2])},d(t){t&&R(e)}}}function Y(l){let e,n;return{c(){e=U("legend"),n=B(l[1]),m(e,"class","govuk-fieldset__legend govuk-fieldset__legend--s"),H(e,"margin-right","8px")},m(t,i){M(t,e,i),h(e,n)},p(t,i){i&2&&q(n,t[1])},d(t){t&&R(e)}}}function Z(l){let e,n,t,i,a=!1,f,o,d=l[15]+"",r,g,b,_,v,k;return _=ue(l[13][0]),{c(){e=U("div"),n=U("input"),f=I(),o=U("label"),r=B(d),b=I(),m(n,"class","govuk-radios__input"),m(n,"id",t=l[9]+l[14]),m(n,"type","radio"),n.__value=i=l[14],N(n,n.__value),m(o,"class","govuk-label govuk-radios__label"),m(o,"for",g=l[9]+l[14]),m(e,"class","govuk-radios__item"),_.p(n)},m(c,w){M(c,e,w),h(e,n),n.checked=n.__value===l[0],h(e,f),h(e,o),h(o,r),h(e,b),v||(k=[V(n,"change",l[12]),V(n,"change",l[11])],v=!0)},p(c,w){w&8&&t!==(t=c[9]+c[14])&&m(n,"id",t),w&8&&i!==(i=c[14])&&(n.__value=i,N(n,n.__value),a=!0),(a||w&9)&&(n.checked=n.__value===c[0]),w&8&&d!==(d=c[15]+"")&&q(r,d),w&8&&g!==(g=c[9]+c[14])&&m(o,"for",g)},d(c){c&&R(e),_.r(),v=!1,fe(k)}}}function Re(l){let e,n,t,i,a,f,o,d,r,g,b,_=l[7]&&!l[4]&&O(l),v=!l[7]&&Q(l);f=new ke({props:{errorMessage:l[8]}});let k=l[2]&&X(l),c=l[7]&&l[4]&&Y(l),w=W(l[3]),u=[];for(let s=0;s<w.length;s+=1)u[s]=Z(K(l,w,s));return{c(){e=U("div"),_&&_.c(),n=I(),t=U("div"),i=U("fieldset"),v&&v.c(),a=I(),x(f.$$.fragment),o=I(),k&&k.c(),d=I(),r=U("div"),c&&c.c(),g=I();for(let s=0;s<u.length;s+=1)u[s].c();m(r,"class","govuk-radios svelte-1i6hs1"),m(r,"data-module","govuk-radios"),S(r,"govuk-radios--inline",l[4]),S(r,"govuk-radios--small",l[4]),S(r,"nowrap",l[5]),S(r,"no-bottom-margin",l[6]),m(i,"class","govuk-fieldset"),m(t,"class","govuk-form-group"),H(e,"display","flex")},m(s,y){M(s,e,y),_&&_.m(e,null),h(e,n),h(e,t),h(t,i),v&&v.m(i,null),h(i,a),$(f,i,null),h(i,o),k&&k.m(i,null),h(i,d),h(i,r),c&&c.m(r,null),h(r,g);for(let A=0;A<u.length;A+=1)u[A]&&u[A].m(r,null);b=!0},p(s,[y]){s[7]&&!s[4]?_?_.p(s,y):(_=O(s),_.c(),_.m(e,n)):_&&(_.d(1),_=null),s[7]?v&&(v.d(1),v=null):v?v.p(s,y):(v=Q(s),v.c(),v.m(i,a));const A={};if(y&256&&(A.errorMessage=s[8]),f.$set(A),s[2]?k?k.p(s,y):(k=X(s),k.c(),k.m(i,d)):k&&(k.d(1),k=null),s[7]&&s[4]?c?c.p(s,y):(c=Y(s),c.c(),c.m(r,g)):c&&(c.d(1),c=null),y&521){w=W(s[3]);let L;for(L=0;L<w.length;L+=1){const T=K(s,w,L);u[L]?u[L].p(T,y):(u[L]=Z(T),u[L].c(),u[L].m(r,null))}for(;L<u.length;L+=1)u[L].d(1);u.length=w.length}(!b||y&16)&&S(r,"govuk-radios--inline",s[4]),(!b||y&16)&&S(r,"govuk-radios--small",s[4]),(!b||y&32)&&S(r,"nowrap",s[5]),(!b||y&64)&&S(r,"no-bottom-margin",s[6])},i(s){b||(P(f.$$.fragment,s),b=!0)},o(s){F(f.$$.fragment,s),b=!1},d(s){s&&R(e),_&&_.d(),v&&v.d(),ee(f),k&&k.d(),c&&c.d(),re(u,s)}}}function Ie(l,e,n){let t,{label:i}=e,{hint:a=""}=e,{choices:f}=e,{inlineSmall:o=!1}=e,{nowrap:d=!1}=e,{noBottomMargin:r=!1}=e,{leftLabel:g=!1}=e,{required:b=!1}=e,{value:_}=e,v=le();const k=[[]];function c(u){de.call(this,l,u)}function w(){_=this.__value,n(0,_)}return l.$$set=u=>{"label"in u&&n(1,i=u.label),"hint"in u&&n(2,a=u.hint),"choices"in u&&n(3,f=u.choices),"inlineSmall"in u&&n(4,o=u.inlineSmall),"nowrap"in u&&n(5,d=u.nowrap),"noBottomMargin"in u&&n(6,r=u.noBottomMargin),"leftLabel"in u&&n(7,g=u.leftLabel),"required"in u&&n(10,b=u.required),"value"in u&&n(0,_=u.value)},l.$$.update=()=>{l.$$.dirty&1025&&n(8,t=b&&_==""?"Required":"")},[_,i,a,f,o,d,r,g,t,v,b,c,w,k]}class De extends E{constructor(e){super(),C(this,e,Ie,Re,j,{label:1,hint:2,choices:3,inlineSmall:4,nowrap:5,noBottomMargin:6,leftLabel:7,required:10,value:0})}}const Se="/atip/beta-banner/assets/authorities-7624c8c2.geojson";async function Ee(){let e=await(await fetch(Se)).json();return ce(e)}function Ce(){if(window.location.hostname=="localhost")return"Local development";if(window.location.hostname=="acteng.github.io"){let l=window.location.pathname.split("/");if(l.length==3&&l[0]==""&&l[1]=="atip")return"Public (development)";if(l.length==4&&l[0]==""&&l[1]=="atip")return`Public (dev branch: ${l[2]})`}else if(window.location.hostname.endsWith(".appspot.com"))return"Private (development)";return"Unknown"}async function je(l,e){let n=await fetch(l),t=n.body.getReader(),i=n.headers.get("Content-Length");if(!i)throw new Error(`No Content-Length header from ${l}`);let a=parseInt(i),f=0,o=[];for(;;){let{done:g,value:b}=await t.read();if(g)break;b&&(o.push(b),f+=b.length,e(100*f/a))}let d=new Uint8Array(f),r=0;for(let g of o)d.set(g,r),r+=g.length;return d}function Ve(l){let e=l.split("_");if(e.length==2){if(e[0]=="LAD")return`${e[1]} (LAD)`;if(e[0]=="TA")return`${e[1]} (Transport Authority)`}return l}function Pe(){return"https://atip.uk/layers"}function Fe(){return"https://atip.uk/private_layers"}export{ke as E,qe as F,De as R,Me as a,Fe as b,Ce as c,Ve as d,je as f,Ee as g,Pe as p,le as v};
