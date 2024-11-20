import{S as I,i as L,s as N,e as f,c as h,a as r,b as P,d as q,f as x,m as p,g as o,t as d,h as g,j as S,k as _,o as J,l as G,n as O}from"./stores-c0b87827.js";import{A as V}from"./AlphaBanner-0c768fe2.js";import{D as E}from"./DefaultButton-48ebca32.js";import{H as W}from"./Header-99335c16.js";function Y(l){let t;return{c(){t=G("Start")},m(n,i){x(n,t,i)},d(n){n&&S(t)}}}function z(l){let t;return{c(){t=G("Start")},m(n,i){x(n,t,i)},d(n){n&&S(t)}}}function F(l){let t,n,i,c,C,m,y,w,B,k,T,a,A,b,H,v,M,s,$;return n=new W({}),c=new V({}),a=new E({props:{$$slots:{default:[Y]},$$scope:{ctx:l}}}),a.$on("click",K),s=new E({props:{$$slots:{default:[z]},$$scope:{ctx:l}}}),s.$on("click",Q),{c(){t=f("div"),h(n.$$.fragment),i=r(),h(c.$$.fragment),C=r(),m=f("h1"),m.textContent="Welcome to Plan.activetravelengland.gov.uk!",y=r(),w=f("h2"),w.textContent="Sketch Your Scheme:",B=r(),k=f("p"),k.textContent=`Sketch active travel schemes at a high-level. This tool produces GeoJSON
    files that can be shared with others using this tool or imported into other
    GIS software.`,T=r(),h(a.$$.fragment),A=r(),b=f("h2"),b.textContent="Browse existing sketches and geographic context:",H=r(),v=f("p"),v.textContent=`View scheme sketches alongside other contextual layers, like bus routes,
    hospital locations, and authority boundaries.`,M=r(),h(s.$$.fragment),P(m,"margin-top","30px"),q(t,"class","govuk-width-container govuk-prose")},m(e,u){x(e,t,u),p(n,t,null),o(t,i),p(c,t,null),o(t,C),o(t,m),o(t,y),o(t,w),o(t,B),o(t,k),o(t,T),p(a,t,null),o(t,A),o(t,b),o(t,H),o(t,v),o(t,M),p(s,t,null),$=!0},p(e,[u]){const j={};u&1&&(j.$$scope={dirty:u,ctx:e}),a.$set(j);const D={};u&1&&(D.$$scope={dirty:u,ctx:e}),s.$set(D)},i(e){$||(d(n.$$.fragment,e),d(c.$$.fragment,e),d(a.$$.fragment,e),d(s.$$.fragment,e),$=!0)},o(e){g(n.$$.fragment,e),g(c.$$.fragment,e),g(a.$$.fragment,e),g(s.$$.fragment,e),$=!1},d(e){e&&S(t),_(n),_(c),_(a),_(s)}}}function K(){window.location.href="choose_area.html"}function Q(){window.location.href="browse.html"}function R(l){return J(async()=>{O()}),[]}class U extends I{constructor(t){super(),L(this,t,R,F,N,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new U({target:document.getElementById("app")});
