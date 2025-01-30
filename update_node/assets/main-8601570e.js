import{S as q,i as z,s as J,B as K,e as f,c as h,a,t as S,b as O,d as Q,f as _,m as p,g as o,h as g,j as d,k as b,l as w,o as V,n as R}from"./index-bd549ad5.js";import{D as Y}from"./DefaultButton-132e010b.js";import{F as U}from"./Footer-7a8a1cd4.js";import{H as X,E as Z}from"./Header-f5ea7eaa.js";import"./spread-8a54911c.js";function tt(r){let t;return{c(){t=S("Start sketching")},m(n,l){_(n,t,l)},d(n){n&&b(t)}}}function et(r){let t;return{c(){t=S("Watch a tutorial")},m(n,l){_(n,t,l)},d(n){n&&b(t)}}}function nt(r){let t;return{c(){t=S("Start browsing")},m(n,l){_(n,t,l)},d(n){n&&b(t)}}}function ot(r){let t,n,l,$,E,k,M,y,A,B,L,i,j,v,u,D,F,C,G,H,I,c,T,m,x;return n=new X({}),$=new K({}),i=new Y({props:{$$slots:{default:[tt]},$$scope:{ctx:r}}}),i.$on("click",st),u=new Z({props:{href:"https://www.youtube.com/watch?v=6u2lK8xzQfM",$$slots:{default:[et]},$$scope:{ctx:r}}}),c=new Y({props:{$$slots:{default:[nt]},$$scope:{ctx:r}}}),c.$on("click",at),m=new U({props:{aboutHref:"about.html",privacyHref:"privacy.html",accessibilityHref:"accessibility.html"}}),{c(){t=f("div"),h(n.$$.fragment),l=a(),h($.$$.fragment),E=a(),k=f("h1"),k.textContent="Welcome to Plan Your Active Travel Schemes!",M=a(),y=f("h2"),y.textContent="Sketch Your Scheme:",A=a(),B=f("p"),B.textContent=`Sketch active travel schemes at a high-level. This tool produces GeoJSON
    files that can be shared with others using this tool or imported into other
    GIS software.`,L=a(),h(i.$$.fragment),j=a(),v=f("p"),h(u.$$.fragment),D=S(` explaining the use of the scheme sketcher for all users, including
    guidance for those submitting sketches for ATE review.`),F=a(),C=f("h2"),C.textContent="Browse existing sketches and geographic context:",G=a(),H=f("p"),H.textContent=`View scheme sketches alongside other contextual layers, like bus routes,
    hospital locations, and authority boundaries.`,I=a(),h(c.$$.fragment),T=a(),h(m.$$.fragment),O(k,"margin-top","30px"),Q(t,"class","govuk-width-container govuk-prose")},m(e,s){_(e,t,s),p(n,t,null),o(t,l),p($,t,null),o(t,E),o(t,k),o(t,M),o(t,y),o(t,A),o(t,B),o(t,L),p(i,t,null),o(t,j),o(t,v),p(u,v,null),o(v,D),o(t,F),o(t,C),o(t,G),o(t,H),o(t,I),p(c,t,null),_(e,T,s),p(m,e,s),x=!0},p(e,[s]){const N={};s&1&&(N.$$scope={dirty:s,ctx:e}),i.$set(N);const P={};s&1&&(P.$$scope={dirty:s,ctx:e}),u.$set(P);const W={};s&1&&(W.$$scope={dirty:s,ctx:e}),c.$set(W)},i(e){x||(g(n.$$.fragment,e),g($.$$.fragment,e),g(i.$$.fragment,e),g(u.$$.fragment,e),g(c.$$.fragment,e),g(m.$$.fragment,e),x=!0)},o(e){d(n.$$.fragment,e),d($.$$.fragment,e),d(i.$$.fragment,e),d(u.$$.fragment,e),d(c.$$.fragment,e),d(m.$$.fragment,e),x=!1},d(e){e&&(b(t),b(T)),w(n),w($),w(i),w(u),w(c),w(m,e)}}}function st(){window.location.href="choose_area.html"}function at(){window.location.href="browse.html"}function rt(r){return V(async()=>{R()}),[]}class lt extends q{constructor(t){super(),z(this,t,rt,ot,J,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new lt({target:document.getElementById("app")});
