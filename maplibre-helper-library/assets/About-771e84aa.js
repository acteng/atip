import{S as Q,i as V,s as Y,C as Ge,D as X,e as m,G as Ae,j as k,w as F,H as We,J as De,K as Le,L as Ue,t as T,l as C,p as v,N as Te,O as Re,T as Ce,u as _,f as P,h,aC as O,k as o,R as je,x as Se,U as Be,ax as Je,v as Ie,ay as qe,P as Ee,b as He,c as Oe,g as S,m as I,o as ze,q as M,aG as j}from"./MapLibreMap.svelte_svelte_type_style_lang-c000e451.js";function Ke(n){let e,t,l,c;const g=n[2].default,s=Ge(g,n,n[1],null);let i=[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},n[0]],r={};for(let a=0;a<i.length;a+=1)r=X(r,i[a]);return{c(){e=m("button"),s&&s.c(),Ae(e,r)},m(a,d){k(a,e,d),s&&s.m(e,null),e.autofocus&&e.focus(),t=!0,l||(c=F(e,"click",n[3]),l=!0)},p(a,[d]){s&&s.p&&(!t||d&2)&&We(s,g,a,a[1],t?Le(g,a[1],d,null):De(a[1]),null),Ae(e,r=Ue(i,[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},d&1&&a[0]]))},i(a){t||(T(s,a),t=!0)},o(a){C(s,a),t=!1},d(a){a&&v(e),s&&s.d(a),l=!1,c()}}}function Ne(n,e,t){let{$$slots:l={},$$scope:c}=e;function g(s){Re.call(this,n,s)}return n.$$set=s=>{t(0,e=X(X({},e),Te(s))),"$$scope"in s&&t(1,c=s.$$scope)},e=Te(e),[e,c,l,g]}class ut extends Q{constructor(e){super(),V(this,e,Ne,Ke,Y,{})}}function Me(n,e,t){const l=n.slice();return l[8]=e[t][0],l[9]=e[t][1],l}function Pe(n){let e,t,l,c,g=!1,s,i,r=n[9]+"",a,d,u,w,q,R;return w=Je(n[7][0]),{c(){e=m("div"),t=m("input"),s=P(),i=m("label"),a=_(r),u=P(),h(t,"class","govuk-radios__input"),h(t,"id",l=n[2]+n[8]),h(t,"type","radio"),t.__value=c=n[8],Ie(t,t.__value),h(i,"class","govuk-label govuk-radios__label"),h(i,"for",d=n[2]+n[8]),h(e,"class","govuk-radios__item"),w.p(t)},m(b,$){k(b,e,$),o(e,t),t.checked=t.__value===n[0],o(e,s),o(e,i),o(i,a),o(e,u),q||(R=[F(t,"change",n[6]),F(t,"change",n[5])],q=!0)},p(b,$){$&12&&l!==(l=b[2]+b[8])&&h(t,"id",l),$&8&&c!==(c=b[8])&&(t.__value=c,Ie(t,t.__value),g=!0),(g||$&9)&&(t.checked=t.__value===b[0]),$&8&&r!==(r=b[9]+"")&&je(a,r),$&12&&d!==(d=b[2]+b[8])&&h(i,"for",d)},d(b){b&&v(e),w.r(),q=!1,qe(R)}}}function Xe(n){let e,t,l,c,g,s,i=Ce(n[3]),r=[];for(let a=0;a<i.length;a+=1)r[a]=Pe(Me(n,i,a));return{c(){e=m("div"),t=m("fieldset"),l=m("legend"),c=_(n[1]),g=P(),s=m("div");for(let a=0;a<r.length;a+=1)r[a].c();h(l,"class","govuk-fieldset__legend"),h(s,"class","govuk-radios"),h(s,"data-module","govuk-radios"),O(s,"govuk-radios--inline",n[4]),O(s,"govuk-radios--small",n[4]),h(t,"class","govuk-fieldset"),h(e,"class","govuk-form-group")},m(a,d){k(a,e,d),o(e,t),o(t,l),o(l,c),o(t,g),o(t,s);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,null)},p(a,[d]){if(d&2&&je(c,a[1]),d&13){i=Ce(a[3]);let u;for(u=0;u<i.length;u+=1){const w=Me(a,i,u);r[u]?r[u].p(w,d):(r[u]=Pe(w),r[u].c(),r[u].m(s,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=i.length}d&16&&O(s,"govuk-radios--inline",a[4]),d&16&&O(s,"govuk-radios--small",a[4])},i:Se,o:Se,d(a){a&&v(e),Be(r,a)}}}function Fe(n,e,t){let{legend:l}=e,{id:c}=e,{choices:g}=e,{inlineSmall:s=!1}=e,{value:i}=e;const r=[[]];function a(u){Re.call(this,n,u)}function d(){i=this.__value,t(0,i)}return n.$$set=u=>{"legend"in u&&t(1,l=u.legend),"id"in u&&t(2,c=u.id),"choices"in u&&t(3,g=u.choices),"inlineSmall"in u&&t(4,s=u.inlineSmall),"value"in u&&t(0,i=u.value)},[i,l,c,g,s,a,d,r]}class ft extends Q{constructor(e){super(),V(this,e,Fe,Xe,Y,{legend:1,id:2,choices:3,inlineSmall:4,value:0})}}const Qe="/atip/maplibre-helper-library/assets/authorities-80e824dc.geojson";async function ct(){return await(await fetch(Qe)).json()}function Ve(n){let e;return{c(){e=_("open source project")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function Ye(n){let e;return{c(){e=_(`Dustin Carlino
        `)},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function Ze(n){let e;return{c(){e=_("Madison Wang")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function xe(n){let e;return{c(){e=_("Ben Ritter")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function ye(n){let e;return{c(){e=_("OpenStreetMap")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function et(n){let e;return{c(){e=_("MapLibre")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function tt(n){let e;return{c(){e=_("GeoRust")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function nt(n){let e;return{c(){e=_(`osm2streets
      `)},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function lt(n){let e;return{c(){e=_(`Material icons
      `)},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function at(n){let e;return{c(){e=_("start an issue on Github")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function st(n){let e,t,l,c,g,s,i,r,a,d,u,w,q,R,b,$,Z,z,x,A,y,G,ee,W,te,D,ne,L,le,U,ae,se,B,oe,J,ie,E,re,ue,fe,ce,K,_e,N,H;return c=new j({props:{href:"https://github.com/acteng/atip",$$slots:{default:[Ve]},$$scope:{ctx:n}}}),a=new j({props:{href:"https://www.turing.ac.uk/people/researchers/dustin-carlino",$$slots:{default:[Ye]},$$scope:{ctx:n}}}),R=new j({props:{href:"https://www.linkedin.com/in/madison-wang-841977bb/",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),$=new j({props:{href:"https://github.com/BudgieInWA",$$slots:{default:[xe]},$$scope:{ctx:n}}}),G=new j({props:{href:"https://www.openstreetmap.org/about",$$slots:{default:[ye]},$$scope:{ctx:n}}}),W=new j({props:{href:"https://maplibre.org/",$$slots:{default:[et]},$$scope:{ctx:n}}}),D=new j({props:{href:"https://georust.org/",$$slots:{default:[tt]},$$scope:{ctx:n}}}),L=new j({props:{href:"https://github.com/a-b-street/osm2streets",$$slots:{default:[nt]},$$scope:{ctx:n}}}),U=new j({props:{href:"https://material.io/resources/icons/",$$slots:{default:[lt]},$$scope:{ctx:n}}}),J=new j({props:{href:"https://github.com/acteng/atip/issues/new",$$slots:{default:[at]},$$scope:{ctx:n}}}),{c(){e=m("div"),t=m("p"),l=_(`ATIP v2 is an
      `),S(c.$$.fragment),g=_(" supported by Active Travel England and developed by:"),s=P(),i=m("ul"),r=m("li"),S(a.$$.fragment),d=_(": lead developer, from The Alan Turing Institute"),u=P(),w=m("li"),q=_(`With UX help from
        `),S(R.$$.fragment),b=_(` and CSS help from
        `),S($.$$.fragment),Z=P(),z=m("li"),z.textContent=`With great thanks to ATIP's various users for feedback, testing, and
        ideas`,x=P(),A=m("p"),y=_(`ATIP builds on
      `),S(G.$$.fragment),ee=_(`
      contributors,
      `),S(W.$$.fragment),te=_(`,
      `),S(D.$$.fragment),ne=_(`,
      `),S(L.$$.fragment),le=_(`,
      `),S(U.$$.fragment),ae=_(", and other open source projects."),se=P(),B=m("p"),oe=_("We want your feedback about ATIP! Please "),S(J.$$.fragment),ie=_(`
      or email
      `),E=m("a"),E.textContent="dcarlino@turing.ac.uk",re=_(`
      .`),ue=P(),fe=m("hr"),ce=P(),K=m("h2"),K.textContent="Recent changes",_e=P(),N=m("ul"),N.innerHTML=`<li><b>v2</b>
        launched on 2 June 2023. Changes: a complete UI rewrite, new draw tools,
        drawing areas snapped to roads, splitting routes, multiple data schemas,
        speed limit layer, lane visualization layer</li> <li><b>v1</b>
        launched in March 2023</li>`,h(E,"href","mailto: dcarlino@turing.ac.uk"),h(e,"class","govuk-prose")},m(f,p){k(f,e,p),o(e,t),o(t,l),I(c,t,null),o(t,g),o(e,s),o(e,i),o(i,r),I(a,r,null),o(r,d),o(i,u),o(i,w),o(w,q),I(R,w,null),o(w,b),I($,w,null),o(i,Z),o(i,z),o(e,x),o(e,A),o(A,y),I(G,A,null),o(A,ee),I(W,A,null),o(A,te),I(D,A,null),o(A,ne),I(L,A,null),o(A,le),I(U,A,null),o(A,ae),o(e,se),o(e,B),o(B,oe),I(J,B,null),o(B,ie),o(B,E),o(B,re),o(e,ue),o(e,fe),o(e,ce),o(e,K),o(e,_e),o(e,N),H=!0},p(f,p){const ge={};p&4&&(ge.$$scope={dirty:p,ctx:f}),c.$set(ge);const de={};p&4&&(de.$$scope={dirty:p,ctx:f}),a.$set(de);const pe={};p&4&&(pe.$$scope={dirty:p,ctx:f}),R.$set(pe);const me={};p&4&&(me.$$scope={dirty:p,ctx:f}),$.$set(me);const $e={};p&4&&($e.$$scope={dirty:p,ctx:f}),G.$set($e);const he={};p&4&&(he.$$scope={dirty:p,ctx:f}),W.$set(he);const be={};p&4&&(be.$$scope={dirty:p,ctx:f}),D.$set(be);const ke={};p&4&&(ke.$$scope={dirty:p,ctx:f}),L.$set(ke);const ve={};p&4&&(ve.$$scope={dirty:p,ctx:f}),U.$set(ve);const we={};p&4&&(we.$$scope={dirty:p,ctx:f}),J.$set(we)},i(f){H||(T(c.$$.fragment,f),T(a.$$.fragment,f),T(R.$$.fragment,f),T($.$$.fragment,f),T(G.$$.fragment,f),T(W.$$.fragment,f),T(D.$$.fragment,f),T(L.$$.fragment,f),T(U.$$.fragment,f),T(J.$$.fragment,f),H=!0)},o(f){C(c.$$.fragment,f),C(a.$$.fragment,f),C(R.$$.fragment,f),C($.$$.fragment,f),C(G.$$.fragment,f),C(W.$$.fragment,f),C(D.$$.fragment,f),C(L.$$.fragment,f),C(U.$$.fragment,f),C(J.$$.fragment,f),H=!1},d(f){f&&v(e),M(c),M(a),M(R),M($),M(G),M(W),M(D),M(L),M(U),M(J)}}}function ot(n){let e,t,l;function c(s){n[1](s)}let g={title:"About the Active Travel Infrastructure Platform",$$slots:{default:[st]},$$scope:{ctx:n}};return n[0]!==void 0&&(g.open=n[0]),e=new Ee({props:g}),He.push(()=>Oe(e,"open",c)),{c(){S(e.$$.fragment)},m(s,i){I(e,s,i),l=!0},p(s,[i]){const r={};i&4&&(r.$$scope={dirty:i,ctx:s}),!t&&i&1&&(t=!0,r.open=s[0],ze(()=>t=!1)),e.$set(r)},i(s){l||(T(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){M(e,s)}}}function it(n,e,t){let{open:l}=e;function c(g){l=g,t(0,l)}return n.$$set=g=>{"open"in g&&t(0,l=g.open)},[l,c]}class _t extends Q{constructor(e){super(),V(this,e,it,ot,Y,{open:0})}}export{_t as A,ut as D,ft as R,ct as g};
