import{S as X,i as F,s as Y,G as Le,H as N,e as m,I as Ae,j as k,w as V,J as Ue,K as je,L as Be,N as De,t as T,l as I,p as v,O as Te,P as Re,U as Ie,u as _,f as P,h,aQ as K,k as o,T as We,x as Se,V as Ge,aJ as Je,v as Ce,aK as qe,Q as Ee,b as He,c as Ke,g as S,m as C,o as Oe,q as M,aU as W}from"./data_getter-c7e1a97c.js";function Qe(n){let e,t,l,c;const g=n[2].default,s=Le(g,n,n[1],null);let i=[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},n[0]],u={};for(let a=0;a<i.length;a+=1)u=N(u,i[a]);return{c(){e=m("button"),s&&s.c(),Ae(e,u)},m(a,d){k(a,e,d),s&&s.m(e,null),e.autofocus&&e.focus(),t=!0,l||(c=V(e,"click",n[3]),l=!0)},p(a,[d]){s&&s.p&&(!t||d&2)&&Ue(s,g,a,a[1],t?Be(g,a[1],d,null):je(a[1]),null),Ae(e,u=De(i,[{type:"button"},{class:"govuk-button"},{"data-module":"govuk-button"},d&1&&a[0]]))},i(a){t||(T(s,a),t=!0)},o(a){I(s,a),t=!1},d(a){a&&v(e),s&&s.d(a),l=!1,c()}}}function ze(n,e,t){let{$$slots:l={},$$scope:c}=e;function g(s){Re.call(this,n,s)}return n.$$set=s=>{t(0,e=N(N({},e),Te(s))),"$$scope"in s&&t(1,c=s.$$scope)},e=Te(e),[e,c,l,g]}class ut extends X{constructor(e){super(),F(this,e,ze,Qe,Y,{})}}function Me(n,e,t){const l=n.slice();return l[8]=e[t][0],l[9]=e[t][1],l}function Pe(n){let e,t,l,c,g=!1,s,i,u=n[9]+"",a,d,r,w,q,R;return w=Je(n[7][0]),{c(){e=m("div"),t=m("input"),s=P(),i=m("label"),a=_(u),r=P(),h(t,"class","govuk-radios__input"),h(t,"id",l=n[2]+n[8]),h(t,"type","radio"),t.__value=c=n[8],Ce(t,t.__value),h(i,"class","govuk-label govuk-radios__label"),h(i,"for",d=n[2]+n[8]),h(e,"class","govuk-radios__item"),w.p(t)},m(b,$){k(b,e,$),o(e,t),t.checked=t.__value===n[0],o(e,s),o(e,i),o(i,a),o(e,r),q||(R=[V(t,"change",n[6]),V(t,"change",n[5])],q=!0)},p(b,$){$&12&&l!==(l=b[2]+b[8])&&h(t,"id",l),$&8&&c!==(c=b[8])&&(t.__value=c,Ce(t,t.__value),g=!0),(g||$&9)&&(t.checked=t.__value===b[0]),$&8&&u!==(u=b[9]+"")&&We(a,u),$&12&&d!==(d=b[2]+b[8])&&h(i,"for",d)},d(b){b&&v(e),w.r(),q=!1,qe(R)}}}function Ne(n){let e,t,l,c,g,s,i=Ie(n[3]),u=[];for(let a=0;a<i.length;a+=1)u[a]=Pe(Me(n,i,a));return{c(){e=m("div"),t=m("fieldset"),l=m("legend"),c=_(n[1]),g=P(),s=m("div");for(let a=0;a<u.length;a+=1)u[a].c();h(l,"class","govuk-fieldset__legend"),h(s,"class","govuk-radios"),h(s,"data-module","govuk-radios"),K(s,"govuk-radios--inline",n[4]),K(s,"govuk-radios--small",n[4]),h(t,"class","govuk-fieldset"),h(e,"class","govuk-form-group")},m(a,d){k(a,e,d),o(e,t),o(t,l),o(l,c),o(t,g),o(t,s);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(s,null)},p(a,[d]){if(d&2&&We(c,a[1]),d&13){i=Ie(a[3]);let r;for(r=0;r<i.length;r+=1){const w=Me(a,i,r);u[r]?u[r].p(w,d):(u[r]=Pe(w),u[r].c(),u[r].m(s,null))}for(;r<u.length;r+=1)u[r].d(1);u.length=i.length}d&16&&K(s,"govuk-radios--inline",a[4]),d&16&&K(s,"govuk-radios--small",a[4])},i:Se,o:Se,d(a){a&&v(e),Ge(u,a)}}}function Ve(n,e,t){let{legend:l}=e,{id:c}=e,{choices:g}=e,{inlineSmall:s=!1}=e,{value:i}=e;const u=[[]];function a(r){Re.call(this,n,r)}function d(){i=this.__value,t(0,i)}return n.$$set=r=>{"legend"in r&&t(1,l=r.legend),"id"in r&&t(2,c=r.id),"choices"in r&&t(3,g=r.choices),"inlineSmall"in r&&t(4,s=r.inlineSmall),"value"in r&&t(0,i=r.value)},[i,l,c,g,s,a,d,u]}class rt extends X{constructor(e){super(),F(this,e,Ve,Ne,Y,{legend:1,id:2,choices:3,inlineSmall:4,value:0})}}function Xe(n){let e;return{c(){e=_("open source project")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function Fe(n){let e;return{c(){e=_(`Dustin Carlino
        `)},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function Ye(n){let e;return{c(){e=_("Madison Wang")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function Ze(n){let e;return{c(){e=_("Ben Ritter")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function xe(n){let e;return{c(){e=_("OpenStreetMap")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function ye(n){let e;return{c(){e=_("MapLibre")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function et(n){let e;return{c(){e=_("GeoRust")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function tt(n){let e;return{c(){e=_(`osm2streets
      `)},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function nt(n){let e;return{c(){e=_(`Material icons
      `)},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function lt(n){let e;return{c(){e=_("start an issue on Github")},m(t,l){k(t,e,l)},d(t){t&&v(e)}}}function at(n){let e,t,l,c,g,s,i,u,a,d,r,w,q,R,b,$,Z,O,x,A,y,L,ee,U,te,j,ne,B,le,D,ae,se,G,oe,J,ie,E,ue,re,fe,ce,Q,_e,z,H;return c=new W({props:{href:"https://github.com/acteng/atip",$$slots:{default:[Xe]},$$scope:{ctx:n}}}),a=new W({props:{href:"https://www.turing.ac.uk/people/researchers/dustin-carlino",$$slots:{default:[Fe]},$$scope:{ctx:n}}}),R=new W({props:{href:"https://www.linkedin.com/in/madison-wang-841977bb/",$$slots:{default:[Ye]},$$scope:{ctx:n}}}),$=new W({props:{href:"https://github.com/BudgieInWA",$$slots:{default:[Ze]},$$scope:{ctx:n}}}),L=new W({props:{href:"https://www.openstreetmap.org/about",$$slots:{default:[xe]},$$scope:{ctx:n}}}),U=new W({props:{href:"https://maplibre.org/",$$slots:{default:[ye]},$$scope:{ctx:n}}}),j=new W({props:{href:"https://georust.org/",$$slots:{default:[et]},$$scope:{ctx:n}}}),B=new W({props:{href:"https://github.com/a-b-street/osm2streets",$$slots:{default:[tt]},$$scope:{ctx:n}}}),D=new W({props:{href:"https://material.io/resources/icons/",$$slots:{default:[nt]},$$scope:{ctx:n}}}),J=new W({props:{href:"https://github.com/acteng/atip/issues/new",$$slots:{default:[lt]},$$scope:{ctx:n}}}),{c(){e=m("div"),t=m("p"),l=_(`ATIP v2 is an
      `),S(c.$$.fragment),g=_(" supported by Active Travel England and developed by:"),s=P(),i=m("ul"),u=m("li"),S(a.$$.fragment),d=_(": lead developer, from The Alan Turing Institute"),r=P(),w=m("li"),q=_(`With UX help from
        `),S(R.$$.fragment),b=_(` and CSS help from
        `),S($.$$.fragment),Z=P(),O=m("li"),O.textContent=`With great thanks to ATIP's various users for feedback, testing, and
        ideas`,x=P(),A=m("p"),y=_(`ATIP builds on
      `),S(L.$$.fragment),ee=_(`
      contributors,
      `),S(U.$$.fragment),te=_(`,
      `),S(j.$$.fragment),ne=_(`,
      `),S(B.$$.fragment),le=_(`,
      `),S(D.$$.fragment),ae=_(", and other open source projects."),se=P(),G=m("p"),oe=_("We want your feedback about ATIP! Please "),S(J.$$.fragment),ie=_(`
      or email
      `),E=m("a"),E.textContent="dcarlino@turing.ac.uk",ue=_(`
      .`),re=P(),fe=m("hr"),ce=P(),Q=m("h2"),Q.textContent="Recent changes",_e=P(),z=m("ul"),z.innerHTML=`<li><b>v2</b>
        launched on 2 June 2023. Changes: a complete UI rewrite, new draw tools,
        drawing areas snapped to roads, splitting routes, multiple data schemas,
        speed limit layer, lane visualization layer</li> <li><b>v1</b>
        launched in March 2023</li>`,h(E,"href","mailto: dcarlino@turing.ac.uk"),h(e,"class","govuk-prose")},m(f,p){k(f,e,p),o(e,t),o(t,l),C(c,t,null),o(t,g),o(e,s),o(e,i),o(i,u),C(a,u,null),o(u,d),o(i,r),o(i,w),o(w,q),C(R,w,null),o(w,b),C($,w,null),o(i,Z),o(i,O),o(e,x),o(e,A),o(A,y),C(L,A,null),o(A,ee),C(U,A,null),o(A,te),C(j,A,null),o(A,ne),C(B,A,null),o(A,le),C(D,A,null),o(A,ae),o(e,se),o(e,G),o(G,oe),C(J,G,null),o(G,ie),o(G,E),o(G,ue),o(e,re),o(e,fe),o(e,ce),o(e,Q),o(e,_e),o(e,z),H=!0},p(f,p){const ge={};p&4&&(ge.$$scope={dirty:p,ctx:f}),c.$set(ge);const de={};p&4&&(de.$$scope={dirty:p,ctx:f}),a.$set(de);const pe={};p&4&&(pe.$$scope={dirty:p,ctx:f}),R.$set(pe);const me={};p&4&&(me.$$scope={dirty:p,ctx:f}),$.$set(me);const $e={};p&4&&($e.$$scope={dirty:p,ctx:f}),L.$set($e);const he={};p&4&&(he.$$scope={dirty:p,ctx:f}),U.$set(he);const be={};p&4&&(be.$$scope={dirty:p,ctx:f}),j.$set(be);const ke={};p&4&&(ke.$$scope={dirty:p,ctx:f}),B.$set(ke);const ve={};p&4&&(ve.$$scope={dirty:p,ctx:f}),D.$set(ve);const we={};p&4&&(we.$$scope={dirty:p,ctx:f}),J.$set(we)},i(f){H||(T(c.$$.fragment,f),T(a.$$.fragment,f),T(R.$$.fragment,f),T($.$$.fragment,f),T(L.$$.fragment,f),T(U.$$.fragment,f),T(j.$$.fragment,f),T(B.$$.fragment,f),T(D.$$.fragment,f),T(J.$$.fragment,f),H=!0)},o(f){I(c.$$.fragment,f),I(a.$$.fragment,f),I(R.$$.fragment,f),I($.$$.fragment,f),I(L.$$.fragment,f),I(U.$$.fragment,f),I(j.$$.fragment,f),I(B.$$.fragment,f),I(D.$$.fragment,f),I(J.$$.fragment,f),H=!1},d(f){f&&v(e),M(c),M(a),M(R),M($),M(L),M(U),M(j),M(B),M(D),M(J)}}}function st(n){let e,t,l;function c(s){n[1](s)}let g={title:"About the Active Travel Infrastructure Platform",$$slots:{default:[at]},$$scope:{ctx:n}};return n[0]!==void 0&&(g.open=n[0]),e=new Ee({props:g}),He.push(()=>Ke(e,"open",c)),{c(){S(e.$$.fragment)},m(s,i){C(e,s,i),l=!0},p(s,[i]){const u={};i&4&&(u.$$scope={dirty:i,ctx:s}),!t&&i&1&&(t=!0,u.open=s[0],Oe(()=>t=!1)),e.$set(u)},i(s){l||(T(e.$$.fragment,s),l=!0)},o(s){I(e.$$.fragment,s),l=!1},d(s){M(e,s)}}}function ot(n,e,t){let{open:l}=e;function c(g){l=g,t(0,l)}return n.$$set=g=>{"open"in g&&t(0,l=g.open)},[l,c]}class ft extends X{constructor(e){super(),F(this,e,ot,st,Y,{open:0})}}export{ft as A,ut as D,rt as R};
