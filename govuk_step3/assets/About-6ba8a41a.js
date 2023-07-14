import{S as H,i as J,s as O,ab as Z,an as Y,e as p,ao as Te,j as C,w as z,ac as y,ad as x,ae as ee,ap as Ge,t as v,l as B,p as A,aq as Ie,ar as Le,al as Ee,u as m,f as T,h as k,aB as j,k as f,x as te,R as Pe,am as Xe,au as ze,v as Re,av as Ue,aa as je,aE as He,y as Je,n as Oe,a as Fe,g as I,m as E,q as P,b as Ke,c as Ne,o as Qe}from"./maplibre_helpers-c90a66cd.js";function Ve(n){let e,t,l,i;const u=n[2].default,s=Z(u,n,n[1],null);let c=[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},n[0]],r={};for(let o=0;o<c.length;o+=1)r=Y(r,c[o]);return{c(){e=p("button"),s&&s.c(),Te(e,r)},m(o,d){C(o,e,d),s&&s.m(e,null),e.autofocus&&e.focus(),t=!0,l||(i=z(e,"click",n[3]),l=!0)},p(o,[d]){s&&s.p&&(!t||d&2)&&y(s,u,o,o[1],t?ee(u,o[1],d,null):x(o[1]),null),Te(e,r=Ge(c,[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},d&1&&o[0]]))},i(o){t||(v(s,o),t=!0)},o(o){B(s,o),t=!1},d(o){o&&A(e),s&&s.d(o),l=!1,i()}}}function Ye(n,e,t){let{$$slots:l={},$$scope:i}=e;function u(s){Le.call(this,n,s)}return n.$$set=s=>{t(0,e=Y(Y({},e),Ie(s))),"$$scope"in s&&t(1,i=s.$$scope)},e=Ie(e),[e,i,l,u]}class bt extends H{constructor(e){super(),J(this,e,Ye,Ve,O,{})}}function We(n,e,t){const l=n.slice();return l[8]=e[t][0],l[9]=e[t][1],l}function qe(n){let e,t,l,i,u=!1,s,c,r=n[9]+"",o,d,a,w,b,g;return w=ze(n[7][0]),{c(){e=p("div"),t=p("input"),s=T(),c=p("label"),o=m(r),a=T(),k(t,"class","govuk-radios__input"),k(t,"id",l=n[2]+n[8]),k(t,"type","radio"),t.__value=i=n[8],Re(t,t.__value),k(c,"class","govuk-label govuk-radios__label"),k(c,"for",d=n[2]+n[8]),k(e,"class","govuk-radios__item"),w.p(t)},m(h,S){C(h,e,S),f(e,t),t.checked=t.__value===n[0],f(e,s),f(e,c),f(c,o),f(e,a),b||(g=[z(t,"change",n[6]),z(t,"change",n[5])],b=!0)},p(h,S){S&12&&l!==(l=h[2]+h[8])&&k(t,"id",l),S&8&&i!==(i=h[8])&&(t.__value=i,Re(t,t.__value),u=!0),(u||S&9)&&(t.checked=t.__value===h[0]),S&8&&r!==(r=h[9]+"")&&te(o,r),S&12&&d!==(d=h[2]+h[8])&&k(c,"for",d)},d(h){h&&A(e),w.r(),b=!1,Ue(g)}}}function Ze(n){let e,t,l,i,u,s,c=Ee(n[3]),r=[];for(let o=0;o<c.length;o+=1)r[o]=qe(We(n,c,o));return{c(){e=p("div"),t=p("fieldset"),l=p("legend"),i=m(n[1]),u=T(),s=p("div");for(let o=0;o<r.length;o+=1)r[o].c();k(l,"class","govuk-fieldset__legend"),k(s,"class","govuk-radios"),k(s,"data-module","govuk-radios"),j(s,"govuk-radios--inline",n[4]),j(s,"govuk-radios--small",n[4]),k(t,"class","govuk-fieldset"),k(e,"class","govuk-form-group")},m(o,d){C(o,e,d),f(e,t),f(t,l),f(l,i),f(t,u),f(t,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(s,null)},p(o,[d]){if(d&2&&te(i,o[1]),d&13){c=Ee(o[3]);let a;for(a=0;a<c.length;a+=1){const w=We(o,c,a);r[a]?r[a].p(w,d):(r[a]=qe(w),r[a].c(),r[a].m(s,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=c.length}d&16&&j(s,"govuk-radios--inline",o[4]),d&16&&j(s,"govuk-radios--small",o[4])},i:Pe,o:Pe,d(o){o&&A(e),Xe(r,o)}}}function ye(n,e,t){let{legend:l}=e,{id:i}=e,{choices:u}=e,{inlineSmall:s=!1}=e,{value:c}=e;const r=[[]];function o(a){Le.call(this,n,a)}function d(){c=this.__value,t(0,c)}return n.$$set=a=>{"legend"in a&&t(1,l=a.legend),"id"in a&&t(2,i=a.id),"choices"in a&&t(3,u=a.choices),"inlineSmall"in a&&t(4,s=a.inlineSmall),"value"in a&&t(0,c=a.value)},[c,l,i,u,s,o,d,r]}class vt extends H{constructor(e){super(),J(this,e,ye,Ze,O,{legend:1,id:2,choices:3,inlineSmall:4,value:0})}}const wt="/atip/govuk_step3/assets/authorities-80e824dc.geojson";function xe(n){let e,t;const l=n[2].default,i=Z(l,n,n[1],null);return{c(){e=p("a"),i&&i.c(),k(e,"href",n[0]),k(e,"target","_blank"),k(e,"rel","noreferrer")},m(u,s){C(u,e,s),i&&i.m(e,null),t=!0},p(u,[s]){i&&i.p&&(!t||s&2)&&y(i,l,u,u[1],t?ee(l,u[1],s,null):x(u[1]),null),(!t||s&1)&&k(e,"href",u[0])},i(u){t||(v(i,u),t=!0)},o(u){B(i,u),t=!1},d(u){u&&A(e),i&&i.d(u)}}}function et(n,e,t){let{$$slots:l={},$$scope:i}=e,{href:u}=e;return n.$$set=s=>{"href"in s&&t(0,u=s.href),"$$scope"in s&&t(1,i=s.$$scope)},[u,i,l]}class R extends H{constructor(e){super(),J(this,e,et,xe,O,{href:0})}}function De(n){let e,t;return e=new Fe({props:{$$slots:{default:[tt]},$$scope:{ctx:n}}}),e.$on("click",n[5]),{c(){I(e.$$.fragment)},m(l,i){E(e,l,i),t=!0},p(l,i){const u={};i&128&&(u.$$scope={dirty:i,ctx:l}),e.$set(u)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){B(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function tt(n){let e;return{c(){e=m("X")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function nt(n){let e,t,l,i,u,s,c,r,o,d,a=n[2]&&De(n);const w=n[4].default,b=Z(w,n,n[7],null);return{c(){e=p("div"),t=p("div"),l=p("div"),i=p("h1"),u=m(n[1]),s=T(),a&&a.c(),c=T(),b&&b.c(),k(i,"class","govuk-heading-l"),je(l,"display","flex"),je(l,"justify-content","space-between"),k(t,"class","content centered-fullscreen svelte-stcgp5"),k(e,"class","background svelte-stcgp5"),j(e,"open",n[0]),j(e,"closed",!n[0])},m(g,h){C(g,e,h),f(e,t),f(t,l),f(l,i),f(i,u),f(l,s),a&&a.m(l,null),f(t,c),b&&b.m(t,null),r=!0,o||(d=[z(t,"click",He(lt)),z(e,"click",n[6])],o=!0)},p(g,[h]){(!r||h&2)&&te(u,g[1]),g[2]?a?(a.p(g,h),h&4&&v(a,1)):(a=De(g),a.c(),v(a,1),a.m(l,null)):a&&(Je(),B(a,1,1,()=>{a=null}),Oe()),b&&b.p&&(!r||h&128)&&y(b,w,g,g[7],r?ee(w,g[7],h,null):x(g[7]),null),(!r||h&1)&&j(e,"open",g[0]),(!r||h&1)&&j(e,"closed",!g[0])},i(g){r||(v(a),v(b,g),r=!0)},o(g){B(a),B(b,g),r=!1},d(g){g&&A(e),a&&a.d(),b&&b.d(g),o=!1,Ue(d)}}}const lt=()=>null;function st(n,e,t){let{$$slots:l={},$$scope:i}=e,{title:u}=e,{open:s=!1}=e,{displayEscapeButton:c=!0}=e,{canCloseByClickingBackground:r=!0}=e;const o=()=>t(0,s=!1),d=()=>{r&&t(0,s=!1)};return n.$$set=a=>{"title"in a&&t(1,u=a.title),"open"in a&&t(0,s=a.open),"displayEscapeButton"in a&&t(2,c=a.displayEscapeButton),"canCloseByClickingBackground"in a&&t(3,r=a.canCloseByClickingBackground),"$$scope"in a&&t(7,i=a.$$scope)},[s,u,c,r,l,o,d,i]}class at extends H{constructor(e){super(),J(this,e,st,nt,O,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}function ot(n){let e;return{c(){e=m("open source project")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function it(n){let e;return{c(){e=m("Dustin Carlino")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function ut(n){let e;return{c(){e=m("Madison Wang")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function rt(n){let e;return{c(){e=m("Ben Ritter")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function ft(n){let e;return{c(){e=m("OpenStreetMap")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function ct(n){let e;return{c(){e=m("MapLibre")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function _t(n){let e;return{c(){e=m("GeoRust")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function gt(n){let e;return{c(){e=m("osm2streets")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function dt(n){let e;return{c(){e=m("Material icons")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function mt(n){let e;return{c(){e=m("start an issue on Github")},m(t,l){C(t,e,l)},d(t){t&&A(e)}}}function pt(n){let e,t,l,i,u,s,c,r,o,d,a,w,b,g,h,S,ne,N,le,M,se,W,ae,q,oe,D,ie,L,ue,U,re,fe,G,ce,X,_e,F,ge,de,me,pe,Q,he,V,K;return i=new R({props:{href:"https://github.com/acteng/atip",$$slots:{default:[ot]},$$scope:{ctx:n}}}),o=new R({props:{href:"https://www.turing.ac.uk/people/researchers/dustin-carlino",$$slots:{default:[it]},$$scope:{ctx:n}}}),g=new R({props:{href:"https://www.linkedin.com/in/madison-wang-841977bb/",$$slots:{default:[ut]},$$scope:{ctx:n}}}),S=new R({props:{href:"https://github.com/BudgieInWA",$$slots:{default:[rt]},$$scope:{ctx:n}}}),W=new R({props:{href:"https://www.openstreetmap.org/about",$$slots:{default:[ft]},$$scope:{ctx:n}}}),q=new R({props:{href:"https://maplibre.org/",$$slots:{default:[ct]},$$scope:{ctx:n}}}),D=new R({props:{href:"https://georust.org/",$$slots:{default:[_t]},$$scope:{ctx:n}}}),L=new R({props:{href:"https://github.com/a-b-street/osm2streets",$$slots:{default:[gt]},$$scope:{ctx:n}}}),U=new R({props:{href:"https://material.io/resources/icons/",$$slots:{default:[dt]},$$scope:{ctx:n}}}),X=new R({props:{href:"https://github.com/acteng/atip/issues/new",$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){e=p("div"),t=p("p"),l=m(`ATIP v2 is an
      `),I(i.$$.fragment),u=m(" supported by Active Travel England and developed by:"),s=T(),c=p("ul"),r=p("li"),I(o.$$.fragment),d=m(": lead developer, from The Alan Turing Institute"),a=T(),w=p("li"),b=m(`With UX help from
        `),I(g.$$.fragment),h=m(` and CSS help from
        `),I(S.$$.fragment),ne=T(),N=p("li"),N.textContent=`With great thanks to ATIP's various users for feedback, testing, and
        ideas`,le=T(),M=p("p"),se=m(`ATIP builds on
      `),I(W.$$.fragment),ae=m(`
      contributors,
      `),I(q.$$.fragment),oe=m(`,
      `),I(D.$$.fragment),ie=m(`,
      `),I(L.$$.fragment),ue=m(`,
      `),I(U.$$.fragment),re=m(", and other open source projects."),fe=T(),G=p("p"),ce=m("We want your feedback about ATIP! Please "),I(X.$$.fragment),_e=m(`
      or email
      `),F=p("a"),F.textContent="dcarlino@turing.ac.uk",ge=m("."),de=T(),me=p("hr"),pe=T(),Q=p("h2"),Q.textContent="Recent changes",he=T(),V=p("ul"),V.innerHTML=`<li><b>v2</b> launched on 2 June 2023. Changes: a complete UI rewrite, new draw
        tools, drawing areas snapped to roads, splitting routes, multiple data schemas,
        speed limit layer, lane visualization layer</li> <li><b>v1</b> launched in March 2023</li>`,k(F,"href","mailto: dcarlino@turing.ac.uk"),k(e,"class","govuk-prose")},m(_,$){C(_,e,$),f(e,t),f(t,l),E(i,t,null),f(t,u),f(e,s),f(e,c),f(c,r),E(o,r,null),f(r,d),f(c,a),f(c,w),f(w,b),E(g,w,null),f(w,h),E(S,w,null),f(c,ne),f(c,N),f(e,le),f(e,M),f(M,se),E(W,M,null),f(M,ae),E(q,M,null),f(M,oe),E(D,M,null),f(M,ie),E(L,M,null),f(M,ue),E(U,M,null),f(M,re),f(e,fe),f(e,G),f(G,ce),E(X,G,null),f(G,_e),f(G,F),f(G,ge),f(e,de),f(e,me),f(e,pe),f(e,Q),f(e,he),f(e,V),K=!0},p(_,$){const $e={};$&4&&($e.$$scope={dirty:$,ctx:_}),i.$set($e);const ke={};$&4&&(ke.$$scope={dirty:$,ctx:_}),o.$set(ke);const be={};$&4&&(be.$$scope={dirty:$,ctx:_}),g.$set(be);const ve={};$&4&&(ve.$$scope={dirty:$,ctx:_}),S.$set(ve);const we={};$&4&&(we.$$scope={dirty:$,ctx:_}),W.$set(we);const Be={};$&4&&(Be.$$scope={dirty:$,ctx:_}),q.$set(Be);const Ce={};$&4&&(Ce.$$scope={dirty:$,ctx:_}),D.$set(Ce);const Ae={};$&4&&(Ae.$$scope={dirty:$,ctx:_}),L.$set(Ae);const Se={};$&4&&(Se.$$scope={dirty:$,ctx:_}),U.$set(Se);const Me={};$&4&&(Me.$$scope={dirty:$,ctx:_}),X.$set(Me)},i(_){K||(v(i.$$.fragment,_),v(o.$$.fragment,_),v(g.$$.fragment,_),v(S.$$.fragment,_),v(W.$$.fragment,_),v(q.$$.fragment,_),v(D.$$.fragment,_),v(L.$$.fragment,_),v(U.$$.fragment,_),v(X.$$.fragment,_),K=!0)},o(_){B(i.$$.fragment,_),B(o.$$.fragment,_),B(g.$$.fragment,_),B(S.$$.fragment,_),B(W.$$.fragment,_),B(q.$$.fragment,_),B(D.$$.fragment,_),B(L.$$.fragment,_),B(U.$$.fragment,_),B(X.$$.fragment,_),K=!1},d(_){_&&A(e),P(i),P(o),P(g),P(S),P(W),P(q),P(D),P(L),P(U),P(X)}}}function ht(n){let e,t,l;function i(s){n[1](s)}let u={title:"About the Active Travel Infrastructure Platform",$$slots:{default:[pt]},$$scope:{ctx:n}};return n[0]!==void 0&&(u.open=n[0]),e=new at({props:u}),Ke.push(()=>Ne(e,"open",i)),{c(){I(e.$$.fragment)},m(s,c){E(e,s,c),l=!0},p(s,[c]){const r={};c&4&&(r.$$scope={dirty:c,ctx:s}),!t&&c&1&&(t=!0,r.open=s[0],Qe(()=>t=!1)),e.$set(r)},i(s){l||(v(e.$$.fragment,s),l=!0)},o(s){B(e.$$.fragment,s),l=!1},d(s){P(e,s)}}}function $t(n,e,t){let{open:l}=e;function i(u){l=u,t(0,l)}return n.$$set=u=>{"open"in u&&t(0,l=u.open)},[l,i]}class Bt extends H{constructor(e){super(),J(this,e,$t,ht,O,{open:0})}}export{Bt as A,bt as D,at as M,vt as R,wt as a};
