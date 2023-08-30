import{S as ke,i as we,s as ve,G as Ae,H as E,e as g,J as de,j as h,w as xe,K as Te,L as Ie,M as Me,N as Ce,t as _,l as d,p as b,O as he,P as Pe,Q as je,b as Se,c as We,g as k,m as w,o as Ge,q as v,aV as A,u,f as T,h as be,k as o}from"./layer_helper_utils-fabfd9b8.js";function Le(n){let e,t,s,f;const c=n[2].default,l=Ae(c,n,n[1],null);let $=[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},n[0]],p={};for(let r=0;r<$.length;r+=1)p=E(p,$[r]);return{c(){e=g("button"),l&&l.c(),de(e,p)},m(r,x){h(r,e,x),l&&l.m(e,null),e.autofocus&&e.focus(),t=!0,s||(f=xe(e,"click",n[3]),s=!0)},p(r,[x]){l&&l.p&&(!t||x&2)&&Te(l,c,r,r[1],t?Me(c,r[1],x,null):Ie(r[1]),null),de(e,p=Ce($,[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},x&1&&r[0]]))},i(r){t||(_(l,r),t=!0)},o(r){d(l,r),t=!1},d(r){r&&b(e),l&&l.d(r),s=!1,f()}}}function Be(n,e,t){let{$$slots:s={},$$scope:f}=e;function c(l){Pe.call(this,n,l)}return n.$$set=l=>{t(0,e=E(E({},e),he(l))),"$$scope"in l&&t(1,f=l.$$scope)},e=he(e),[e,f,s,c]}class Ye extends ke{constructor(e){super(),we(this,e,Be,Le,ve,{})}}const De="/atip/critical-input/assets/authorities-80e824dc.geojson";async function Ze(){return await(await fetch(De)).json()}function Je(n){let e;return{c(){e=u("open source project")},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function Re(n){let e;return{c(){e=u(`Dustin Carlino
        `)},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function Ue(n){let e;return{c(){e=u("Madison Wang")},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function qe(n){let e;return{c(){e=u("Ben Ritter")},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function Ee(n){let e;return{c(){e=u("OpenStreetMap")},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function He(n){let e;return{c(){e=u("MapLibre")},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function Oe(n){let e;return{c(){e=u("GeoRust")},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function ze(n){let e;return{c(){e=u(`osm2streets
      `)},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function Ke(n){let e;return{c(){e=u(`Material icons
      `)},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function Ne(n){let e;return{c(){e=u("start an issue on Github")},m(t,s){h(t,e,s)},d(t){t&&b(e)}}}function Qe(n){let e,t,s,f,c,l,$,p,r,x,H,B,O,I,z,M,K,R,N,m,Q,C,V,P,X,j,F,S,Y,W,Z,y,G,ee,L,te,D,ne,se,ae,le,U,oe,q,J;return f=new A({props:{href:"https://github.com/acteng/atip",$$slots:{default:[Je]},$$scope:{ctx:n}}}),r=new A({props:{href:"https://www.turing.ac.uk/people/researchers/dustin-carlino",$$slots:{default:[Re]},$$scope:{ctx:n}}}),I=new A({props:{href:"https://www.linkedin.com/in/madison-wang-841977bb/",$$slots:{default:[Ue]},$$scope:{ctx:n}}}),M=new A({props:{href:"https://github.com/BudgieInWA",$$slots:{default:[qe]},$$scope:{ctx:n}}}),C=new A({props:{href:"https://www.openstreetmap.org/about",$$slots:{default:[Ee]},$$scope:{ctx:n}}}),P=new A({props:{href:"https://maplibre.org/",$$slots:{default:[He]},$$scope:{ctx:n}}}),j=new A({props:{href:"https://georust.org/",$$slots:{default:[Oe]},$$scope:{ctx:n}}}),S=new A({props:{href:"https://github.com/a-b-street/osm2streets",$$slots:{default:[ze]},$$scope:{ctx:n}}}),W=new A({props:{href:"https://material.io/resources/icons/",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),L=new A({props:{href:"https://github.com/acteng/atip/issues/new",$$slots:{default:[Ne]},$$scope:{ctx:n}}}),{c(){e=g("div"),t=g("p"),s=u(`ATIP v2 is an
      `),k(f.$$.fragment),c=u(" supported by Active Travel England and developed by:"),l=T(),$=g("ul"),p=g("li"),k(r.$$.fragment),x=u(": lead developer, from The Alan Turing Institute"),H=T(),B=g("li"),O=u(`With UX help from
        `),k(I.$$.fragment),z=u(` and CSS help from
        `),k(M.$$.fragment),K=T(),R=g("li"),R.textContent=`With great thanks to ATIP's various users for feedback, testing, and
        ideas`,N=T(),m=g("p"),Q=u(`ATIP builds on
      `),k(C.$$.fragment),V=u(`
      contributors,
      `),k(P.$$.fragment),X=u(`,
      `),k(j.$$.fragment),F=u(`,
      `),k(S.$$.fragment),Y=u(`,
      `),k(W.$$.fragment),Z=u(", and other open source projects."),y=T(),G=g("p"),ee=u("We want your feedback about ATIP! Please "),k(L.$$.fragment),te=u(`
      or email
      `),D=g("a"),D.textContent="dcarlino@turing.ac.uk",ne=u(`
      .`),se=T(),ae=g("hr"),le=T(),U=g("h2"),U.textContent="Recent changes",oe=T(),q=g("ul"),q.innerHTML=`<li><b>v2</b>
        launched on 2 June 2023. Changes: a complete UI rewrite, new draw tools,
        drawing areas snapped to roads, splitting routes, multiple data schemas,
        speed limit layer, lane visualization layer</li> <li><b>v1</b>
        launched in March 2023</li>`,be(D,"href","mailto: dcarlino@turing.ac.uk"),be(e,"class","govuk-prose")},m(a,i){h(a,e,i),o(e,t),o(t,s),w(f,t,null),o(t,c),o(e,l),o(e,$),o($,p),w(r,p,null),o(p,x),o($,H),o($,B),o(B,O),w(I,B,null),o(B,z),w(M,B,null),o($,K),o($,R),o(e,N),o(e,m),o(m,Q),w(C,m,null),o(m,V),w(P,m,null),o(m,X),w(j,m,null),o(m,F),w(S,m,null),o(m,Y),w(W,m,null),o(m,Z),o(e,y),o(e,G),o(G,ee),w(L,G,null),o(G,te),o(G,D),o(G,ne),o(e,se),o(e,ae),o(e,le),o(e,U),o(e,oe),o(e,q),J=!0},p(a,i){const re={};i&4&&(re.$$scope={dirty:i,ctx:a}),f.$set(re);const ue={};i&4&&(ue.$$scope={dirty:i,ctx:a}),r.$set(ue);const ie={};i&4&&(ie.$$scope={dirty:i,ctx:a}),I.$set(ie);const fe={};i&4&&(fe.$$scope={dirty:i,ctx:a}),M.$set(fe);const $e={};i&4&&($e.$$scope={dirty:i,ctx:a}),C.$set($e);const ce={};i&4&&(ce.$$scope={dirty:i,ctx:a}),P.$set(ce);const pe={};i&4&&(pe.$$scope={dirty:i,ctx:a}),j.$set(pe);const me={};i&4&&(me.$$scope={dirty:i,ctx:a}),S.$set(me);const ge={};i&4&&(ge.$$scope={dirty:i,ctx:a}),W.$set(ge);const _e={};i&4&&(_e.$$scope={dirty:i,ctx:a}),L.$set(_e)},i(a){J||(_(f.$$.fragment,a),_(r.$$.fragment,a),_(I.$$.fragment,a),_(M.$$.fragment,a),_(C.$$.fragment,a),_(P.$$.fragment,a),_(j.$$.fragment,a),_(S.$$.fragment,a),_(W.$$.fragment,a),_(L.$$.fragment,a),J=!0)},o(a){d(f.$$.fragment,a),d(r.$$.fragment,a),d(I.$$.fragment,a),d(M.$$.fragment,a),d(C.$$.fragment,a),d(P.$$.fragment,a),d(j.$$.fragment,a),d(S.$$.fragment,a),d(W.$$.fragment,a),d(L.$$.fragment,a),J=!1},d(a){a&&b(e),v(f),v(r),v(I),v(M),v(C),v(P),v(j),v(S),v(W),v(L)}}}function Ve(n){let e,t,s;function f(l){n[1](l)}let c={title:"About the Active Travel Infrastructure Platform",$$slots:{default:[Qe]},$$scope:{ctx:n}};return n[0]!==void 0&&(c.open=n[0]),e=new je({props:c}),Se.push(()=>We(e,"open",f)),{c(){k(e.$$.fragment)},m(l,$){w(e,l,$),s=!0},p(l,[$]){const p={};$&4&&(p.$$scope={dirty:$,ctx:l}),!t&&$&1&&(t=!0,p.open=l[0],Ge(()=>t=!1)),e.$set(p)},i(l){s||(_(e.$$.fragment,l),s=!0)},o(l){d(e.$$.fragment,l),s=!1},d(l){v(e,l)}}}function Xe(n,e,t){let{open:s}=e;function f(c){s=c,t(0,s)}return n.$$set=c=>{"open"in c&&t(0,s=c.open)},[s,f]}class ye extends ke{constructor(e){super(),we(this,e,Xe,Ve,ve,{open:0})}}export{ye as A,Ye as D,Ze as g};
