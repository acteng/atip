import{S as F,i as K,s as N,ap as Z,at as Y,e as g,au as Te,g as m,l as O,aq as y,ar as x,as as ee,t as b,n as w,o as h,av as Ie,aw as Pe,f as I,r as d,c as P,a3 as je,ao as J,h as r,ax as Se,ac as We,a4 as Le,a5 as Re,b as Ue,a as qe,d as A,m as M,k as Ge,p as T}from"./maplibre_helpers-ac43dd3e.js";function Xe(n,e){const t={},l={},a={$$scope:1};let o=n.length;for(;o--;){const s=n[o],c=e[o];if(c){for(const i in s)i in c||(l[i]=1);for(const i in c)a[i]||(t[i]=c[i],a[i]=1);n[o]=c}else for(const i in s)a[i]=1}for(const s in l)s in t||(t[s]=void 0);return t}const it="/atip/gov-uk-frontend/assets/authorities-80e824dc.geojson";function ze(n){let e,t,l,a;const o=n[2].default,s=Z(o,n,n[1],null);let c=[{type:"button"},{class:"govuk-button"},n[0]],i={};for(let f=0;f<c.length;f+=1)i=Y(i,c[f]);return{c(){e=g("button"),s&&s.c(),Te(e,i)},m(f,v){m(f,e,v),s&&s.m(e,null),e.autofocus&&e.focus(),t=!0,l||(a=O(e,"click",n[3]),l=!0)},p(f,[v]){s&&s.p&&(!t||v&2)&&y(s,o,f,f[1],t?ee(o,f[1],v,null):x(f[1]),null),Te(e,i=Xe(c,[{type:"button"},{class:"govuk-button"},v&1&&f[0]]))},i(f){t||(b(s,f),t=!0)},o(f){w(s,f),t=!1},d(f){f&&h(e),s&&s.d(f),l=!1,a()}}}function De(n,e,t){let{$$slots:l={},$$scope:a}=e;function o(s){Pe.call(this,n,s)}return n.$$set=s=>{t(0,e=Y(Y({},e),Ie(s))),"$$scope"in s&&t(1,a=s.$$scope)},e=Ie(e),[e,a,l,o]}class ut extends F{constructor(e){super(),K(this,e,De,ze,N,{})}}function He(n){let e,t;const l=n[2].default,a=Z(l,n,n[1],null);return{c(){e=g("a"),a&&a.c(),I(e,"href",n[0]),I(e,"target","_blank"),I(e,"rel","noreferrer")},m(o,s){m(o,e,s),a&&a.m(e,null),t=!0},p(o,[s]){a&&a.p&&(!t||s&2)&&y(a,l,o,o[1],t?ee(l,o[1],s,null):x(o[1]),null),(!t||s&1)&&I(e,"href",o[0])},i(o){t||(b(a,o),t=!0)},o(o){w(a,o),t=!1},d(o){o&&h(e),a&&a.d(o)}}}function Je(n,e,t){let{$$slots:l={},$$scope:a}=e,{href:o}=e;return n.$$set=s=>{"href"in s&&t(0,o=s.href),"$$scope"in s&&t(1,a=s.$$scope)},[o,a,l]}class E extends F{constructor(e){super(),K(this,e,Je,He,N,{href:0})}}function Ee(n){let e,t,l;return{c(){e=g("button"),e.textContent="X",I(e,"class","govuk-button--secondary svelte-xtjo4w")},m(a,o){m(a,e,o),t||(l=O(e,"click",n[6]),t=!0)},p:Re,d(a){a&&h(e),t=!1,l()}}}function Oe(n){let e,t,l,a,o,s,c,i,f,v,p=n[2]&&Ee(n);const j=n[5].default,k=Z(j,n,n[4],null);return{c(){e=g("div"),t=g("div"),l=g("div"),a=g("h1"),o=d(n[1]),s=P(),p&&p.c(),c=P(),k&&k.c(),I(a,"class","govuk-heading-s"),je(l,"display","flex"),je(l,"justify-content","space-between"),I(t,"class","content centered-fullscreen svelte-xtjo4w"),I(e,"class","background svelte-xtjo4w"),J(e,"open",n[0]),J(e,"closed",!n[0])},m($,C){m($,e,C),r(e,t),r(t,l),r(l,a),r(a,o),r(l,s),p&&p.m(l,null),r(t,c),k&&k.m(t,null),i=!0,f||(v=[O(t,"click",Se(Fe)),O(e,"click",n[7])],f=!0)},p($,[C]){(!i||C&2)&&We(o,$[1]),$[2]?p?p.p($,C):(p=Ee($),p.c(),p.m(l,null)):p&&(p.d(1),p=null),k&&k.p&&(!i||C&16)&&y(k,j,$,$[4],i?ee(j,$[4],C,null):x($[4]),null),(!i||C&1)&&J(e,"open",$[0]),(!i||C&1)&&J(e,"closed",!$[0])},i($){i||(b(k,$),i=!0)},o($){w(k,$),i=!1},d($){$&&h(e),p&&p.d(),k&&k.d($),f=!1,Le(v)}}}const Fe=()=>null;function Ke(n,e,t){let{$$slots:l={},$$scope:a}=e,{title:o}=e,{open:s=!1}=e,{displayEscapeButton:c=!0}=e,{canCloseByClickingBackground:i=!0}=e;const f=()=>t(0,s=!1),v=()=>{i&&t(0,s=!1)};return n.$$set=p=>{"title"in p&&t(1,o=p.title),"open"in p&&t(0,s=p.open),"displayEscapeButton"in p&&t(2,c=p.displayEscapeButton),"canCloseByClickingBackground"in p&&t(3,i=p.canCloseByClickingBackground),"$$scope"in p&&t(4,a=p.$$scope)},[s,o,c,i,a,l,f,v]}class Ne extends F{constructor(e){super(),K(this,e,Ke,Oe,N,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}function Qe(n){let e;return{c(){e=d("open source project")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function Ve(n){let e;return{c(){e=d("Dustin Carlino")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function Ye(n){let e;return{c(){e=d("Madison Wang")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function Ze(n){let e;return{c(){e=d("Ben Ritter")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function ye(n){let e;return{c(){e=d("OpenStreetMap")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function xe(n){let e;return{c(){e=d("MapLibre")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function et(n){let e;return{c(){e=d("GeoRust")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function tt(n){let e;return{c(){e=d("osm2streets")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function nt(n){let e;return{c(){e=d("Material icons")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function lt(n){let e;return{c(){e=d("start an issue on Github")},m(t,l){m(t,e,l)},d(t){t&&h(e)}}}function st(n){let e,t,l,a,o,s,c,i,f,v,p,j,k,$,C,S,te,Q,ne,B,le,W,se,L,ae,R,oe,U,re,q,ie,ue,G,fe,X,ce,z,pe,$e,de,_e,D,ge,V,H;return a=new E({props:{href:"https://github.com/acteng/atip",$$slots:{default:[Qe]},$$scope:{ctx:n}}}),f=new E({props:{href:"https://www.turing.ac.uk/people/researchers/dustin-carlino",$$slots:{default:[Ve]},$$scope:{ctx:n}}}),$=new E({props:{href:"https://www.linkedin.com/in/madison-wang-841977bb/",$$slots:{default:[Ye]},$$scope:{ctx:n}}}),S=new E({props:{href:"https://github.com/BudgieInWA",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),W=new E({props:{href:"https://www.openstreetmap.org/about",$$slots:{default:[ye]},$$scope:{ctx:n}}}),L=new E({props:{href:"https://maplibre.org/",$$slots:{default:[xe]},$$scope:{ctx:n}}}),R=new E({props:{href:"https://georust.org/",$$slots:{default:[et]},$$scope:{ctx:n}}}),U=new E({props:{href:"https://github.com/a-b-street/osm2streets",$$slots:{default:[tt]},$$scope:{ctx:n}}}),q=new E({props:{href:"https://material.io/resources/icons/",$$slots:{default:[nt]},$$scope:{ctx:n}}}),X=new E({props:{href:"https://github.com/acteng/atip/issues/new",$$slots:{default:[lt]},$$scope:{ctx:n}}}),{c(){e=g("div"),t=g("p"),l=d(`ATIP v2 is an
      `),A(a.$$.fragment),o=d(" supported by Active Travel England and developed by:"),s=P(),c=g("ul"),i=g("li"),A(f.$$.fragment),v=d(": lead developer, from The Alan Turing Institute"),p=P(),j=g("li"),k=d(`With UX help from
        `),A($.$$.fragment),C=d(` and CSS help from
        `),A(S.$$.fragment),te=P(),Q=g("li"),Q.textContent=`With great thanks to ATIP's various users for feedback, testing, and
        ideas`,ne=P(),B=g("p"),le=d(`ATIP builds on
      `),A(W.$$.fragment),se=d(`
      contributors,
      `),A(L.$$.fragment),ae=d(`,
      `),A(R.$$.fragment),oe=d(`,
      `),A(U.$$.fragment),re=d(`,
      `),A(q.$$.fragment),ie=d(", and other open source projects."),ue=P(),G=g("p"),fe=d("We want your feedback about ATIP! Please "),A(X.$$.fragment),ce=d(`
      or email
      `),z=g("a"),z.textContent="dcarlino@turing.ac.uk",pe=d("."),$e=P(),de=g("hr"),_e=P(),D=g("h2"),D.textContent="Recent changes",ge=P(),V=g("ul"),V.innerHTML=`<li><b>v2</b> launched on 2 June 2023. Changes: a complete UI rewrite, new draw
        tools, drawing areas snapped to roads, splitting routes, multiple data schemas,
        speed limit layer, lane visualization layer</li> <li><b>v1</b> launched in March 2023</li>`,I(z,"href","mailto: dcarlino@turing.ac.uk"),I(D,"class","govuk-heading-s"),I(e,"class","govuk-label")},m(u,_){m(u,e,_),r(e,t),r(t,l),M(a,t,null),r(t,o),r(e,s),r(e,c),r(c,i),M(f,i,null),r(i,v),r(c,p),r(c,j),r(j,k),M($,j,null),r(j,C),M(S,j,null),r(c,te),r(c,Q),r(e,ne),r(e,B),r(B,le),M(W,B,null),r(B,se),M(L,B,null),r(B,ae),M(R,B,null),r(B,oe),M(U,B,null),r(B,re),M(q,B,null),r(B,ie),r(e,ue),r(e,G),r(G,fe),M(X,G,null),r(G,ce),r(G,z),r(G,pe),r(e,$e),r(e,de),r(e,_e),r(e,D),r(e,ge),r(e,V),H=!0},p(u,_){const me={};_&4&&(me.$$scope={dirty:_,ctx:u}),a.$set(me);const he={};_&4&&(he.$$scope={dirty:_,ctx:u}),f.$set(he);const ke={};_&4&&(ke.$$scope={dirty:_,ctx:u}),$.$set(ke);const be={};_&4&&(be.$$scope={dirty:_,ctx:u}),S.$set(be);const we={};_&4&&(we.$$scope={dirty:_,ctx:u}),W.$set(we);const ve={};_&4&&(ve.$$scope={dirty:_,ctx:u}),L.$set(ve);const Be={};_&4&&(Be.$$scope={dirty:_,ctx:u}),R.$set(Be);const Ce={};_&4&&(Ce.$$scope={dirty:_,ctx:u}),U.$set(Ce);const Ae={};_&4&&(Ae.$$scope={dirty:_,ctx:u}),q.$set(Ae);const Me={};_&4&&(Me.$$scope={dirty:_,ctx:u}),X.$set(Me)},i(u){H||(b(a.$$.fragment,u),b(f.$$.fragment,u),b($.$$.fragment,u),b(S.$$.fragment,u),b(W.$$.fragment,u),b(L.$$.fragment,u),b(R.$$.fragment,u),b(U.$$.fragment,u),b(q.$$.fragment,u),b(X.$$.fragment,u),H=!0)},o(u){w(a.$$.fragment,u),w(f.$$.fragment,u),w($.$$.fragment,u),w(S.$$.fragment,u),w(W.$$.fragment,u),w(L.$$.fragment,u),w(R.$$.fragment,u),w(U.$$.fragment,u),w(q.$$.fragment,u),w(X.$$.fragment,u),H=!1},d(u){u&&h(e),T(a),T(f),T($),T(S),T(W),T(L),T(R),T(U),T(q),T(X)}}}function at(n){let e,t,l;function a(s){n[1](s)}let o={title:"About the Active Travel Infrastructure Platform",$$slots:{default:[st]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.open=n[0]),e=new Ne({props:o}),Ue.push(()=>qe(e,"open",a)),{c(){A(e.$$.fragment)},m(s,c){M(e,s,c),l=!0},p(s,[c]){const i={};c&4&&(i.$$scope={dirty:c,ctx:s}),!t&&c&1&&(t=!0,i.open=s[0],Ge(()=>t=!1)),e.$set(i)},i(s){l||(b(e.$$.fragment,s),l=!0)},o(s){w(e.$$.fragment,s),l=!1},d(s){T(e,s)}}}function ot(n,e,t){let{open:l}=e;function a(o){l=o,t(0,l)}return n.$$set=o=>{"open"in o&&t(0,l=o.open)},[l,a]}class ft extends F{constructor(e){super(),K(this,e,ot,at,N,{open:0})}}export{ft as A,ut as B,Ne as M,it as a};
