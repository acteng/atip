import{S as F,i as N,s as Q,c as Ce,e as g,r as j,d as k,u as Ae,g as Ie,f as Me,t as m,j as d,k as b,p as c,q as E,aj as we,aB as X,v as a,l as ve,aE as Te,w as Ee,ak as je,al as Pe,B as Se,C as We,H as C,I as A,K as I,D as Le,E as Re,J as Ue}from"./maplibre_helpers-5d84afaa.js";const st="/atip/browse_dropdown_filters/assets/authorities-80e824dc.geojson";function qe(l){let e,t;const n=l[2].default,s=Ce(n,l,l[1],null);return{c(){e=g("a"),s&&s.c(),j(e,"href",l[0]),j(e,"target","_blank"),j(e,"rel","noreferrer")},m(o,i){k(o,e,i),s&&s.m(e,null),t=!0},p(o,[i]){s&&s.p&&(!t||i&2)&&Ae(s,n,o,o[1],t?Me(n,o[1],i,null):Ie(o[1]),null),(!t||i&1)&&j(e,"href",o[0])},i(o){t||(m(s,o),t=!0)},o(o){d(s,o),t=!1},d(o){o&&b(e),s&&s.d(o)}}}function De(l,e,t){let{$$slots:n={},$$scope:s}=e,{href:o}=e;return l.$$set=i=>{"href"in i&&t(0,o=i.href),"$$scope"in i&&t(1,s=i.$$scope)},[o,s,n]}class T extends F{constructor(e){super(),N(this,e,De,qe,Q,{href:0})}}function Be(l){let e,t;return e=new We({props:{$$slots:{default:[Ge]},$$scope:{ctx:l}}}),e.$on("click",l[5]),{c(){C(e.$$.fragment)},m(n,s){A(e,n,s),t=!0},p(n,s){const o={};s&128&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function Ge(l){let e;return{c(){e=c("X")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function He(l){let e,t,n,s,o,i,_,$,w,P,f=l[2]&&Be(l);const M=l[4].default,h=Ce(M,l,l[7],null);return{c(){e=g("div"),t=g("div"),n=g("div"),s=g("h1"),o=c(l[1]),i=E(),f&&f.c(),_=E(),h&&h.c(),j(s,"class","govuk-heading-l"),we(n,"display","flex"),we(n,"justify-content","space-between"),j(t,"class","content centered-fullscreen svelte-stcgp5"),j(e,"class","background svelte-stcgp5"),X(e,"open",l[0]),X(e,"closed",!l[0])},m(u,B){k(u,e,B),a(e,t),a(t,n),a(n,s),a(s,o),a(n,i),f&&f.m(n,null),a(t,_),h&&h.m(t,null),$=!0,w||(P=[ve(t,"click",Te(Je)),ve(e,"click",l[6])],w=!0)},p(u,[B]){(!$||B&2)&&Ee(o,u[1]),u[2]?f?(f.p(u,B),B&4&&m(f,1)):(f=Be(u),f.c(),m(f,1),f.m(n,null)):f&&(je(),d(f,1,1,()=>{f=null}),Pe()),h&&h.p&&(!$||B&128)&&Ae(h,M,u,u[7],$?Me(M,u[7],B,null):Ie(u[7]),null),(!$||B&1)&&X(e,"open",u[0]),(!$||B&1)&&X(e,"closed",!u[0])},i(u){$||(m(f),m(h,u),$=!0)},o(u){d(f),d(h,u),$=!1},d(u){u&&b(e),f&&f.d(),h&&h.d(u),w=!1,Se(P)}}}const Je=()=>null;function Xe(l,e,t){let{$$slots:n={},$$scope:s}=e,{title:o}=e,{open:i=!1}=e,{displayEscapeButton:_=!0}=e,{canCloseByClickingBackground:$=!0}=e;const w=()=>t(0,i=!1),P=()=>{$&&t(0,i=!1)};return l.$$set=f=>{"title"in f&&t(1,o=f.title),"open"in f&&t(0,i=f.open),"displayEscapeButton"in f&&t(2,_=f.displayEscapeButton),"canCloseByClickingBackground"in f&&t(3,$=f.canCloseByClickingBackground),"$$scope"in f&&t(7,s=f.$$scope)},[i,o,_,$,n,w,P,s]}class ze extends F{constructor(e){super(),N(this,e,Xe,He,Q,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}function Ke(l){let e;return{c(){e=c("open source project")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function Oe(l){let e;return{c(){e=c("Dustin Carlino")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function Fe(l){let e;return{c(){e=c("Madison Wang")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function Ne(l){let e;return{c(){e=c("Ben Ritter")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function Qe(l){let e;return{c(){e=c("OpenStreetMap")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function Ve(l){let e;return{c(){e=c("MapLibre")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function Ye(l){let e;return{c(){e=c("GeoRust")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function Ze(l){let e;return{c(){e=c("osm2streets")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function xe(l){let e;return{c(){e=c("Material icons")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function ye(l){let e;return{c(){e=c("start an issue on Github")},m(t,n){k(t,e,n)},d(t){t&&b(e)}}}function et(l){let e,t,n,s,o,i,_,$,w,P,f,M,h,u,B,S,V,z,Y,v,Z,W,x,L,y,R,ee,U,te,q,ne,le,D,se,G,ae,H,oe,re,ie,fe,K,ue,O,J;return s=new T({props:{href:"https://github.com/acteng/atip",$$slots:{default:[Ke]},$$scope:{ctx:l}}}),w=new T({props:{href:"https://www.turing.ac.uk/people/researchers/dustin-carlino",$$slots:{default:[Oe]},$$scope:{ctx:l}}}),u=new T({props:{href:"https://www.linkedin.com/in/madison-wang-841977bb/",$$slots:{default:[Fe]},$$scope:{ctx:l}}}),S=new T({props:{href:"https://github.com/BudgieInWA",$$slots:{default:[Ne]},$$scope:{ctx:l}}}),W=new T({props:{href:"https://www.openstreetmap.org/about",$$slots:{default:[Qe]},$$scope:{ctx:l}}}),L=new T({props:{href:"https://maplibre.org/",$$slots:{default:[Ve]},$$scope:{ctx:l}}}),R=new T({props:{href:"https://georust.org/",$$slots:{default:[Ye]},$$scope:{ctx:l}}}),U=new T({props:{href:"https://github.com/a-b-street/osm2streets",$$slots:{default:[Ze]},$$scope:{ctx:l}}}),q=new T({props:{href:"https://material.io/resources/icons/",$$slots:{default:[xe]},$$scope:{ctx:l}}}),G=new T({props:{href:"https://github.com/acteng/atip/issues/new",$$slots:{default:[ye]},$$scope:{ctx:l}}}),{c(){e=g("div"),t=g("p"),n=c(`ATIP v2 is an
      `),C(s.$$.fragment),o=c(" supported by Active Travel England and developed by:"),i=E(),_=g("ul"),$=g("li"),C(w.$$.fragment),P=c(": lead developer, from The Alan Turing Institute"),f=E(),M=g("li"),h=c(`With UX help from
        `),C(u.$$.fragment),B=c(` and CSS help from
        `),C(S.$$.fragment),V=E(),z=g("li"),z.textContent=`With great thanks to ATIP's various users for feedback, testing, and
        ideas`,Y=E(),v=g("p"),Z=c(`ATIP builds on
      `),C(W.$$.fragment),x=c(`
      contributors,
      `),C(L.$$.fragment),y=c(`,
      `),C(R.$$.fragment),ee=c(`,
      `),C(U.$$.fragment),te=c(`,
      `),C(q.$$.fragment),ne=c(", and other open source projects."),le=E(),D=g("p"),se=c("We want your feedback about ATIP! Please "),C(G.$$.fragment),ae=c(`
      or email
      `),H=g("a"),H.textContent="dcarlino@turing.ac.uk",oe=c("."),re=E(),ie=g("hr"),fe=E(),K=g("h2"),K.textContent="Recent changes",ue=E(),O=g("ul"),O.innerHTML=`<li><b>v2</b> launched on 2 June 2023. Changes: a complete UI rewrite, new draw
        tools, drawing areas snapped to roads, splitting routes, multiple data schemas,
        speed limit layer, lane visualization layer</li> <li><b>v1</b> launched in March 2023</li>`,j(H,"href","mailto: dcarlino@turing.ac.uk"),j(e,"class","govuk-prose")},m(r,p){k(r,e,p),a(e,t),a(t,n),A(s,t,null),a(t,o),a(e,i),a(e,_),a(_,$),A(w,$,null),a($,P),a(_,f),a(_,M),a(M,h),A(u,M,null),a(M,B),A(S,M,null),a(_,V),a(_,z),a(e,Y),a(e,v),a(v,Z),A(W,v,null),a(v,x),A(L,v,null),a(v,y),A(R,v,null),a(v,ee),A(U,v,null),a(v,te),A(q,v,null),a(v,ne),a(e,le),a(e,D),a(D,se),A(G,D,null),a(D,ae),a(D,H),a(D,oe),a(e,re),a(e,ie),a(e,fe),a(e,K),a(e,ue),a(e,O),J=!0},p(r,p){const ce={};p&4&&(ce.$$scope={dirty:p,ctx:r}),s.$set(ce);const $e={};p&4&&($e.$$scope={dirty:p,ctx:r}),w.$set($e);const pe={};p&4&&(pe.$$scope={dirty:p,ctx:r}),u.$set(pe);const _e={};p&4&&(_e.$$scope={dirty:p,ctx:r}),S.$set(_e);const ge={};p&4&&(ge.$$scope={dirty:p,ctx:r}),W.$set(ge);const me={};p&4&&(me.$$scope={dirty:p,ctx:r}),L.$set(me);const de={};p&4&&(de.$$scope={dirty:p,ctx:r}),R.$set(de);const he={};p&4&&(he.$$scope={dirty:p,ctx:r}),U.$set(he);const ke={};p&4&&(ke.$$scope={dirty:p,ctx:r}),q.$set(ke);const be={};p&4&&(be.$$scope={dirty:p,ctx:r}),G.$set(be)},i(r){J||(m(s.$$.fragment,r),m(w.$$.fragment,r),m(u.$$.fragment,r),m(S.$$.fragment,r),m(W.$$.fragment,r),m(L.$$.fragment,r),m(R.$$.fragment,r),m(U.$$.fragment,r),m(q.$$.fragment,r),m(G.$$.fragment,r),J=!0)},o(r){d(s.$$.fragment,r),d(w.$$.fragment,r),d(u.$$.fragment,r),d(S.$$.fragment,r),d(W.$$.fragment,r),d(L.$$.fragment,r),d(R.$$.fragment,r),d(U.$$.fragment,r),d(q.$$.fragment,r),d(G.$$.fragment,r),J=!1},d(r){r&&b(e),I(s),I(w),I(u),I(S),I(W),I(L),I(R),I(U),I(q),I(G)}}}function tt(l){let e,t,n;function s(i){l[1](i)}let o={title:"About the Active Travel Infrastructure Platform",$$slots:{default:[et]},$$scope:{ctx:l}};return l[0]!==void 0&&(o.open=l[0]),e=new ze({props:o}),Le.push(()=>Re(e,"open",s)),{c(){C(e.$$.fragment)},m(i,_){A(e,i,_),n=!0},p(i,[_]){const $={};_&4&&($.$$scope={dirty:_,ctx:i}),!t&&_&1&&(t=!0,$.open=i[0],Ue(()=>t=!1)),e.$set($)},i(i){n||(m(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function nt(l,e,t){let{open:n}=e;function s(o){n=o,t(0,n)}return l.$$set=o=>{"open"in o&&t(0,n=o.open)},[n,s]}class at extends F{constructor(e){super(),N(this,e,nt,tt,Q,{open:0})}}export{at as A,ze as M,st as a};