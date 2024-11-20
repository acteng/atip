import{S as ye,i as Se,s as Le,e as $,p as ze,a as g,d as j,f as L,q as ee,j as M,r as te,u as le,c as k,b as N,g as i,m as y,t as h,h as w,v as Fe,w as ne,k as S,x as Te,o as Ee,l as J,y as je,z as re,A as He,n as Be,B as Oe}from"./stores-c0b87827.js";import{S as De,E as he,R as Ge,F as Ie,e as be,d as R,g as Pe,i as Ne,c as Je,a as Re}from"./files-5a65dd8a.js";import{A as qe,P as Ue}from"./Popup-fa5e8192.js";import{D as Ve}from"./DefaultButton-48ebca32.js";import{A as Ke}from"./About-abbfcf69.js";import{A as Qe,L as We,M as Xe,G as Ye,F as Ze,h as xe,a as et}from"./MapLibreMap-11acff58.js";function tt(r){let e,n,l;return{c(){e=$("div"),e.innerHTML=`<a href="index.html"><img src="${ze}" alt="Active Travel England logo" class="svelte-13flgp1"/></a>`,n=g(),l=$("div"),j(e,"class","black-bar svelte-13flgp1"),j(l,"class","green-bar svelte-13flgp1")},m(a,t){L(a,e,t),L(a,n,t),L(a,l,t)},p:ee,i:ee,o:ee,d(a){a&&(M(e),M(n),M(l))}}}class lt extends ye{constructor(e){super(),Se(this,e,null,tt,Le,{})}}function ve(r,e,n){const l=r.slice();return l[20]=e[n][0],l[21]=e[n][1],l}function nt(r){let e;return{c(){e=J("About")},m(n,l){L(n,e,l)},d(n){n&&M(e)}}}function we(r){let e,n,l;function a(o){r[14](o)}let t={label:"Select Transport Authority or Local Authority District",options:r[1].features.map(r[13])};return r[0]!==void 0&&(t.value=r[0]),e=new qe({props:t}),te.push(()=>le(e,"value",a)),{c(){k(e.$$.fragment)},m(o,b){y(e,o,b),l=!0},p(o,b){const c={};b&2&&(c.options=o[1].features.map(o[13])),!n&&b&1&&(n=!0,c.value=o[0],ne(()=>n=!1)),e.$set(c)},i(o){l||(h(e.$$.fragment,o),l=!0)},o(o){w(e.$$.fragment,o),l=!1},d(o){S(e,o)}}}function rt(r){let e;return{c(){e=J("Start")},m(n,l){L(n,e,l)},d(n){n&&M(e)}}}function Ae(r){let e,n,l,a,t,o,b,c,d=be(r[5]),p=[];for(let u=0;u<d.length;u+=1)p[u]=ke(ve(r,d,u));return{c(){e=$("hr"),n=g(),l=$("p"),l.textContent="Or choose an area with existing files",a=g(),t=$("table"),o=$("thead"),o.innerHTML="<tr><th>Area</th> <th>Number of files</th></tr>",b=g(),c=$("tbody");for(let u=0;u<p.length;u+=1)p[u].c()},m(u,m){L(u,e,m),L(u,n,m),L(u,l,m),L(u,a,m),L(u,t,m),i(t,o),i(t,b),i(t,c);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(c,null)},p(u,m){if(m&160){d=be(u[5]);let f;for(f=0;f<d.length;f+=1){const z=ve(u,d,f);p[f]?p[f].p(z,m):(p[f]=ke(z),p[f].c(),p[f].m(c,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=d.length}},d(u){u&&(M(e),M(n),M(l),M(a),M(t)),je(p,u)}}}function ke(r){let e,n,l,a=R(r[20])+"",t,o,b,c,d=r[21]+"",p,u;return{c(){e=$("tr"),n=$("td"),l=$("a"),t=J(a),b=g(),c=$("td"),p=J(d),u=g(),j(l,"href",o=`files.html?authority=${r[20]}&schema=${r[7]}`)},m(m,f){L(m,e,f),i(e,n),i(n,l),i(l,t),i(e,b),i(e,c),i(c,p),i(e,u)},p(m,f){f&32&&a!==(a=R(m[20])+"")&&re(t,a),f&160&&o!==(o=`files.html?authority=${m[20]}&schema=${m[7]}`)&&j(l,"href",o),f&32&&d!==(d=m[21]+"")&&re(p,d)},d(m){m&&M(e)}}}function st(r){let e,n=R(r[19].full_name)+"",l;return{c(){e=$("p"),l=J(n)},m(a,t){L(a,e,t),i(e,l)},p(a,t){t&524288&&n!==(n=R(a[19].full_name)+"")&&re(l,n)},d(a){a&&M(e)}}}function at(r){let e,n;return e=new Ue({props:{$$slots:{default:[st,({props:l})=>({19:l}),({props:l})=>l?524288:0]},$$scope:{ctx:r}}}),{c(){k(e.$$.fragment)},m(l,a){y(e,l,a),n=!0},p(l,a){const t={};a&17301504&&(t.$$scope={dirty:a,ctx:l}),e.$set(t)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){S(e,l)}}}function ot(r){let e,n,l,a;return e=new Ze({props:{id:"boundaries",filter:["==",["get","level"],r[4]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":xe(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[at]},$$scope:{ctx:r}}}),e.$on("click",r[9]),l=new et({props:{id:"boundaries-outline",filter:["==",["get","level"],r[4]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){k(e.$$.fragment),n=g(),k(l.$$.fragment)},m(t,o){y(e,t,o),L(t,n,o),y(l,t,o),a=!0},p(t,o){const b={};o&16&&(b.filter=["==",["get","level"],t[4]]),o&16777216&&(b.$$scope={dirty:o,ctx:t}),e.$set(b);const c={};o&16&&(c.filter=["==",["get","level"],t[4]]),l.$set(c)},i(t){a||(h(e.$$.fragment,t),h(l.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),w(l.$$.fragment,t),a=!1},d(t){t&&M(n),S(e,t),S(l,t)}}}function it(r){let e,n;return e=new Ye({props:{data:r[1],generateId:!0,$$slots:{default:[ot]},$$scope:{ctx:r}}}),{c(){k(e.$$.fragment)},m(l,a){y(e,l,a),n=!0},p(l,a){const t={};a&2&&(t.data=l[1]),a&16777232&&(t.$$scope={dirty:a,ctx:l}),e.$set(t)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){S(e,l)}}}function ut(r){let e,n,l,a,t,o,b,c,d,p,u,m,f,z,q,H,U,F,I,T,V,_,K,E,X,se,ae,oe,O,ie,G,ue,fe,Q,P,D,Y,B,Z,W;l=new lt({}),o=new Qe({}),d=new We({}),z=new De({props:{$$slots:{default:[nt]},$$scope:{ctx:r}}}),z.$on("click",r[12]),H=new he({props:{errorMessage:r[8]}});let v=r[1].features.length>0&&we(r);T=new Ve({props:{disabled:!r[6],$$slots:{default:[rt]},$$scope:{ctx:r}}}),T.$on("click",r[10]);function Me(s){r[15](s)}let pe={label:"Or pick from the map",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};r[4]!==void 0&&(pe.value=r[4]),E=new Ge({props:pe}),te.push(()=>le(E,"value",Me)),O=new he({props:{errorMessage:r[3]}}),G=new Ie({props:{label:"Or import a GeoJSON file",onLoad:r[11]}});let C=r[5].length>0&&Ae(r);D=new Xe({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[it]},$$scope:{ctx:r}}});function Ce(s){r[16](s)}let me={};return r[2]!==void 0&&(me.open=r[2]),B=new Ke({props:me}),te.push(()=>le(B,"open",Ce)),{c(){e=$("div"),n=$("div"),k(l.$$.fragment),a=g(),t=$("div"),k(o.$$.fragment),b=g(),c=$("div"),k(d.$$.fragment),p=g(),u=$("div"),m=$("h1"),m.textContent="Scheme Sketcher",f=g(),k(z.$$.fragment),q=g(),k(H.$$.fragment),U=g(),F=$("div"),v&&v.c(),I=g(),k(T.$$.fragment),V=g(),_=$("hr"),K=g(),k(E.$$.fragment),se=g(),ae=$("hr"),oe=g(),k(O.$$.fragment),ie=g(),k(G.$$.fragment),ue=g(),C&&C.c(),fe=g(),Q=$("div"),P=$("div"),k(D.$$.fragment),Y=g(),k(B.$$.fragment),N(c,"border-bottom","1px solid #b1b4b6"),N(u,"display","flex"),N(u,"justify-content","space-between"),N(F,"display","flex"),N(F,"justify-content","space-between"),j(t,"class","left svelte-zzzis3"),j(n,"class","govuk-grid-column-one-half govuk-prose left-scroll svelte-zzzis3"),j(P,"id","map"),j(P,"class","svelte-zzzis3"),j(Q,"class","govuk-grid-column-one-half"),j(e,"class","govuk-grid-row")},m(s,A){L(s,e,A),i(e,n),y(l,n,null),i(n,a),i(n,t),y(o,t,null),i(t,b),i(t,c),y(d,c,null),i(t,p),i(t,u),i(u,m),i(u,f),y(z,u,null),i(t,q),y(H,t,null),i(t,U),i(t,F),v&&v.m(F,null),i(F,I),y(T,F,null),i(t,V),i(t,_),i(t,K),y(E,t,null),i(t,se),i(t,ae),i(t,oe),y(O,t,null),i(t,ie),y(G,t,null),i(t,ue),C&&C.m(t,null),i(e,fe),i(e,Q),i(Q,P),y(D,P,null),L(s,Y,A),y(B,s,A),W=!0},p(s,[A]){const $e={};A&16777216&&($e.$$scope={dirty:A,ctx:s}),z.$set($e),s[1].features.length>0?v?(v.p(s,A),A&2&&h(v,1)):(v=we(s),v.c(),h(v,1),v.m(F,I)):v&&(He(),w(v,1,1,()=>{v=null}),Fe());const x={};A&64&&(x.disabled=!s[6]),A&16777216&&(x.$$scope={dirty:A,ctx:s}),T.$set(x);const ce={};!X&&A&16&&(X=!0,ce.value=s[4],ne(()=>X=!1)),E.$set(ce);const ge={};A&8&&(ge.errorMessage=s[3]),O.$set(ge),s[5].length>0?C?C.p(s,A):(C=Ae(s),C.c(),C.m(t,null)):C&&(C.d(1),C=null);const de={};A&16777234&&(de.$$scope={dirty:A,ctx:s}),D.$set(de);const _e={};!Z&&A&4&&(Z=!0,_e.open=s[2],ne(()=>Z=!1)),B.$set(_e)},i(s){W||(h(l.$$.fragment,s),h(o.$$.fragment,s),h(d.$$.fragment,s),h(z.$$.fragment,s),h(H.$$.fragment,s),h(v),h(T.$$.fragment,s),h(E.$$.fragment,s),h(O.$$.fragment,s),h(G.$$.fragment,s),h(D.$$.fragment,s),h(B.$$.fragment,s),W=!0)},o(s){w(l.$$.fragment,s),w(o.$$.fragment,s),w(d.$$.fragment,s),w(z.$$.fragment,s),w(H.$$.fragment,s),w(v),w(T.$$.fragment,s),w(E.$$.fragment,s),w(O.$$.fragment,s),w(G.$$.fragment,s),w(D.$$.fragment,s),w(B.$$.fragment,s),W=!1},d(s){s&&(M(e),M(Y)),S(l),S(o),S(d),S(z),S(H),v&&v.d(),S(T),S(E),S(O),S(G),C&&C.d(),S(D),S(B,s)}}}function ft(r,e,n){let l,a;Te(r,Oe,_=>n(7,a=_));let t={type:"FeatureCollection",features:[]},o=!1,c=new URLSearchParams(window.location.search).get("error")||"",d="",p,u=new Set,m="TA",f=[];Ee(async()=>{Be(),n(1,t=await Pe());for(let _ of t.features)u.add(_.properties.full_name),Ne(_.properties.full_name);n(5,f=Je())});function z(_){window.location.href=`files.html?authority=${_.detail.features[0].properties.full_name}&schema=${a}`}function q(){window.location.href=`files.html?authority=${p}&schema=${a}`}function H(_,K){try{window.location.href=Re(_,K,t)}catch(E){n(3,d=`Couldn't import file: ${E}`)}}const U=()=>n(2,o=!o),F=_=>[_.properties.full_name,R(_.properties.full_name)];function I(_){p=_,n(0,p)}function T(_){m=_,n(4,m)}function V(_){o=_,n(2,o)}return r.$$.update=()=>{r.$$.dirty&1&&n(6,l=u.has(p))},[p,t,o,d,m,f,l,a,c,z,q,H,U,F,I,T,V]}class pt extends ye{constructor(e){super(),Se(this,e,ft,ut,Le,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new pt({target:document.getElementById("app")});
