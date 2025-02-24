import{S as me,i as $e,s as ce,e as g,p as ve,a as d,d as T,f as L,q as K,k as M,B as be,r as ge,u as de,c as y,b as Q,g as i,m as A,h as b,j as w,v as we,w as _e,l as S,x as ke,o as ye,t as q,y as Ae,z as I,A as W,C as Se,n as Le,D as Me,E as Ce}from"./index-035bde9f.js";import{e as se,i as ze,c as Fe,a as Ee}from"./files-09914f20.js";import{A as Te,P as He}from"./Popup-7b1db9cf.js";import{D as je}from"./DefaultButton-cdfa3070.js";import{E as oe,R as Be,F as De}from"./Radio-ab92709e.js";import{L as Oe,M as Ge,G as Ie,F as Pe,h as Ne,a as Je}from"./MapLibreMap-a85e9348.js";import"./spread-8a54911c.js";function Re(n){let t,r,l;return{c(){t=g("div"),t.innerHTML=`<a href="index.html"><img src="${ve}" alt="Active Travel England logo" class="svelte-13flgp1"/></a>`,r=d(),l=g("div"),T(t,"class","black-bar svelte-13flgp1"),T(l,"class","green-bar svelte-13flgp1")},m(a,e){L(a,t,e),L(a,r,e),L(a,l,e)},p:K,i:K,o:K,d(a){a&&(M(t),M(r),M(l))}}}class qe extends me{constructor(t){super(),$e(this,t,null,Re,ce,{})}}function ie(n,t,r){const l=n.slice();return l[17]=t[r][0],l[18]=t[r][1],l}function fe(n){let t,r,l;function a(s){n[12](s)}let e={label:"Select Transport Authority or Local Authority District",options:n[1].features.map(n[11])};return n[0]!==void 0&&(e.value=n[0]),t=new Te({props:e}),ge.push(()=>de(t,"value",a)),{c(){y(t.$$.fragment)},m(s,_){A(t,s,_),l=!0},p(s,_){const $={};_&2&&($.options=s[1].features.map(s[11])),!r&&_&1&&(r=!0,$.value=s[0],_e(()=>r=!1)),t.$set($)},i(s){l||(b(t.$$.fragment,s),l=!0)},o(s){w(t.$$.fragment,s),l=!1},d(s){S(t,s)}}}function Ue(n){let t;return{c(){t=q("Start")},m(r,l){L(r,t,l)},d(r){r&&M(t)}}}function ue(n){let t,r,l,a,e,s,_,$,m=se(n[4]),p=[];for(let u=0;u<m.length;u+=1)p[u]=pe(ie(n,m,u));return{c(){t=g("hr"),r=d(),l=g("p"),l.textContent="Or choose an area with existing files",a=d(),e=g("table"),s=g("thead"),s.innerHTML="<tr><th>Area</th> <th>Number of files</th></tr>",_=d(),$=g("tbody");for(let u=0;u<p.length;u+=1)p[u].c()},m(u,c){L(u,t,c),L(u,r,c),L(u,l,c),L(u,a,c),L(u,e,c),i(e,s),i(e,_),i(e,$);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m($,null)},p(u,c){if(c&80){m=se(u[4]);let f;for(f=0;f<m.length;f+=1){const H=ie(u,m,f);p[f]?p[f].p(H,c):(p[f]=pe(H),p[f].c(),p[f].m($,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=m.length}},d(u){u&&(M(t),M(r),M(l),M(a),M(e)),Ae(p,u)}}}function pe(n){let t,r,l,a=I(n[17])+"",e,s,_,$,m=n[18]+"",p,u;return{c(){t=g("tr"),r=g("td"),l=g("a"),e=q(a),_=d(),$=g("td"),p=q(m),u=d(),T(l,"href",s=`files.html?authority=${n[17]}&schema=${n[6]}`)},m(c,f){L(c,t,f),i(t,r),i(r,l),i(l,e),i(t,_),i(t,$),i($,p),i(t,u)},p(c,f){f&16&&a!==(a=I(c[17])+"")&&W(e,a),f&80&&s!==(s=`files.html?authority=${c[17]}&schema=${c[6]}`)&&T(l,"href",s),f&16&&m!==(m=c[18]+"")&&W(p,m)},d(c){c&&M(t)}}}function Ve(n){let t,r=I(n[16].full_name)+"",l;return{c(){t=g("p"),l=q(r)},m(a,e){L(a,t,e),i(t,l)},p(a,e){e&65536&&r!==(r=I(a[16].full_name)+"")&&W(l,r)},d(a){a&&M(t)}}}function Ke(n){let t,r;return t=new He({props:{$$slots:{default:[Ve,({props:l})=>({16:l}),({props:l})=>l?65536:0]},$$scope:{ctx:n}}}),{c(){y(t.$$.fragment)},m(l,a){A(t,l,a),r=!0},p(l,a){const e={};a&2162688&&(e.$$scope={dirty:a,ctx:l}),t.$set(e)},i(l){r||(b(t.$$.fragment,l),r=!0)},o(l){w(t.$$.fragment,l),r=!1},d(l){S(t,l)}}}function Qe(n){let t,r,l,a;return t=new Pe({props:{id:"boundaries",filter:["==",["get","level"],n[3]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Ne(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),t.$on("click",n[8]),l=new Je({props:{id:"boundaries-outline",filter:["==",["get","level"],n[3]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){y(t.$$.fragment),r=d(),y(l.$$.fragment)},m(e,s){A(t,e,s),L(e,r,s),A(l,e,s),a=!0},p(e,s){const _={};s&8&&(_.filter=["==",["get","level"],e[3]]),s&2097152&&(_.$$scope={dirty:s,ctx:e}),t.$set(_);const $={};s&8&&($.filter=["==",["get","level"],e[3]]),l.$set($)},i(e){a||(b(t.$$.fragment,e),b(l.$$.fragment,e),a=!0)},o(e){w(t.$$.fragment,e),w(l.$$.fragment,e),a=!1},d(e){e&&M(r),S(t,e),S(l,e)}}}function We(n){let t,r;return t=new Ie({props:{data:n[1],generateId:!0,$$slots:{default:[Qe]},$$scope:{ctx:n}}}),{c(){y(t.$$.fragment)},m(l,a){A(t,l,a),r=!0},p(l,a){const e={};a&2&&(e.data=l[1]),a&2097160&&(e.$$scope={dirty:a,ctx:l}),t.$set(e)},i(l){r||(b(t.$$.fragment,l),r=!0)},o(l){w(t.$$.fragment,l),r=!1},d(l){S(t,l)}}}function Xe(n){let t,r,l,a,e,s,_,$,m,p,u,c,f,H,z,O,F,P,h,N,E,U,X,Y,Z,j,x,D,ee,te,J,G,B,R;l=new qe({}),s=new be({}),m=new Oe({}),f=new oe({props:{errorMessage:n[7]}});let v=n[1].features.length>0&&fe(n);F=new je({props:{disabled:!n[5],$$slots:{default:[Ue]},$$scope:{ctx:n}}}),F.$on("click",n[9]);function he(o){n[13](o)}let le={label:"Or pick from the map",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};n[3]!==void 0&&(le.value=n[3]),E=new Be({props:le}),ge.push(()=>de(E,"value",he)),j=new oe({props:{errorMessage:n[2]}}),D=new De({props:{label:"Or import a GeoJSON file",onLoad:n[10]}});let k=n[4].length>0&&ue(n);return B=new Ge({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[We]},$$scope:{ctx:n}}}),{c(){t=g("div"),r=g("div"),y(l.$$.fragment),a=d(),e=g("div"),y(s.$$.fragment),_=d(),$=g("div"),y(m.$$.fragment),p=d(),u=g("h1"),u.textContent="Scheme Sketcher",c=d(),y(f.$$.fragment),H=d(),z=g("div"),v&&v.c(),O=d(),y(F.$$.fragment),P=d(),h=g("hr"),N=d(),y(E.$$.fragment),X=d(),Y=g("hr"),Z=d(),y(j.$$.fragment),x=d(),y(D.$$.fragment),ee=d(),k&&k.c(),te=d(),J=g("div"),G=g("div"),y(B.$$.fragment),Q($,"border-bottom","1px solid #b1b4b6"),Q(z,"display","flex"),Q(z,"justify-content","space-between"),T(e,"class","left svelte-zzzis3"),T(r,"class","govuk-grid-column-one-half govuk-prose left-scroll svelte-zzzis3"),T(G,"id","map"),T(G,"class","svelte-zzzis3"),T(J,"class","govuk-grid-column-one-half"),T(t,"class","govuk-grid-row")},m(o,C){L(o,t,C),i(t,r),A(l,r,null),i(r,a),i(r,e),A(s,e,null),i(e,_),i(e,$),A(m,$,null),i(e,p),i(e,u),i(e,c),A(f,e,null),i(e,H),i(e,z),v&&v.m(z,null),i(z,O),A(F,z,null),i(e,P),i(e,h),i(e,N),A(E,e,null),i(e,X),i(e,Y),i(e,Z),A(j,e,null),i(e,x),A(D,e,null),i(e,ee),k&&k.m(e,null),i(t,te),i(t,J),i(J,G),A(B,G,null),R=!0},p(o,[C]){o[1].features.length>0?v?(v.p(o,C),C&2&&b(v,1)):(v=fe(o),v.c(),b(v,1),v.m(z,O)):v&&(Se(),w(v,1,1,()=>{v=null}),we());const V={};C&32&&(V.disabled=!o[5]),C&2097152&&(V.$$scope={dirty:C,ctx:o}),F.$set(V);const re={};!U&&C&8&&(U=!0,re.value=o[3],_e(()=>U=!1)),E.$set(re);const ne={};C&4&&(ne.errorMessage=o[2]),j.$set(ne),o[4].length>0?k?k.p(o,C):(k=ue(o),k.c(),k.m(e,null)):k&&(k.d(1),k=null);const ae={};C&2097162&&(ae.$$scope={dirty:C,ctx:o}),B.$set(ae)},i(o){R||(b(l.$$.fragment,o),b(s.$$.fragment,o),b(m.$$.fragment,o),b(f.$$.fragment,o),b(v),b(F.$$.fragment,o),b(E.$$.fragment,o),b(j.$$.fragment,o),b(D.$$.fragment,o),b(B.$$.fragment,o),R=!0)},o(o){w(l.$$.fragment,o),w(s.$$.fragment,o),w(m.$$.fragment,o),w(f.$$.fragment,o),w(v),w(F.$$.fragment,o),w(E.$$.fragment,o),w(j.$$.fragment,o),w(D.$$.fragment,o),w(B.$$.fragment,o),R=!1},d(o){o&&M(t),S(l),S(s),S(m),S(f),v&&v.d(),S(F),S(E),S(j),S(D),k&&k.d(),S(B)}}}function Ye(n,t,r){let l,a;ke(n,Ce,h=>r(6,a=h));let e={type:"FeatureCollection",features:[]},_=new URLSearchParams(window.location.search).get("error")||"",$="",m,p=new Set,u="TA",c=[];ye(async()=>{Le(),r(1,e=await Me());for(let h of e.features)p.add(h.properties.full_name),ze(h.properties.full_name);r(4,c=Fe())});function f(h){window.location.href=`files.html?authority=${h.detail.features[0].properties.full_name}&schema=${a}`}function H(){window.location.href=`files.html?authority=${m}&schema=${a}`}function z(h,N){try{window.location.href=Ee(h,N,e)}catch(E){r(2,$=`Couldn't import file: ${E}`)}}const O=h=>[h.properties.full_name,I(h.properties.full_name)];function F(h){m=h,r(0,m)}function P(h){u=h,r(3,u)}return n.$$.update=()=>{n.$$.dirty&1&&r(5,l=p.has(m))},[m,e,$,u,c,l,a,_,f,H,z,O,F,P]}class Ze extends me{constructor(t){super(),$e(this,t,Ye,Xe,ce,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new Ze({target:document.getElementById("app")});
