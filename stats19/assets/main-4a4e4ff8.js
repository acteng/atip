import{S as he,i as _e,s as ve,e as A,l as Ae,a as g,b as E,c as L,n as Y,d as C,A as ye,L as Se,f as ke,E as me,D as Le,R as Ce,g as Z,h as x,F as Me,M as Ee,j as h,k as Te,m as Ie,o as i,p as _,t as p,q as m,r as He,u as ee,v,w as Oe,x as Be,y as J,G as Fe,z as Je,B as Ne,C as je,H as De,I as Ge,J as Pe,K as Re,N as qe,O as Ue,P as ce}from"./index-225e410d.js";import{A as Ve,P as ze}from"./Popup-9bc0f02b.js";import{A as Ke}from"./About-241a51c5.js";function Qe(r){let t,a,n;return{c(){t=A("div"),t.innerHTML=`<img src="${Ae}" alt="Active Travel England logo" class="svelte-13flgp1"/>`,a=g(),n=A("div"),E(t,"class","black-bar svelte-13flgp1"),E(n,"class","green-bar svelte-13flgp1")},m(l,e){L(l,t,e),L(l,a,e),L(l,n,e)},p:Y,i:Y,o:Y,d(l){l&&(C(t),C(a),C(n))}}}class We extends he{constructor(t){super(),_e(this,t,null,Qe,ve,{})}}function Xe(r){let t;return{c(){t=J("About")},m(a,n){L(a,t,n)},d(a){a&&C(t)}}}function ge(r){let t,a,n;function l(o){r[10](o)}let e={label:"Select Transport Authority or Local Authority District",options:r[1].features.map(de)};return r[0]!==void 0&&(e.value=r[0]),t=new Ve({props:e}),Z.push(()=>x(t,"value",l)),{c(){h(t.$$.fragment)},m(o,b){_(t,o,b),n=!0},p(o,b){const f={};b&2&&(f.options=o[1].features.map(de)),!a&&b&1&&(a=!0,f.value=o[0],ee(()=>a=!1)),t.$set(f)},i(o){n||(p(t.$$.fragment,o),n=!0)},o(o){m(t.$$.fragment,o),n=!1},d(o){v(t,o)}}}function Ye(r){let t;return{c(){t=J("Start")},m(a,n){L(a,t,n)},d(a){a&&C(t)}}}function Ze(r){let t,a=r[17].name+"",n,l,e=r[17].level+"",o,b;return{c(){t=A("p"),n=J(a),l=J(" ("),o=J(e),b=J(")")},m(f,c){L(f,t,c),i(t,n),i(t,l),i(t,o),i(t,b)},p(f,c){c&131072&&a!==(a=f[17].name+"")&&ce(n,a),c&131072&&e!==(e=f[17].level+"")&&ce(o,e)},d(f){f&&C(t)}}}function xe(r){let t,a;return t=new ze({props:{$$slots:{default:[Ze,({props:n})=>({17:n}),({props:n})=>n?131072:0]},$$scope:{ctx:r}}}),{c(){h(t.$$.fragment)},m(n,l){_(t,n,l),a=!0},p(n,l){const e={};l&393216&&(e.$$scope={dirty:l,ctx:n}),t.$set(e)},i(n){a||(p(t.$$.fragment,n),a=!0)},o(n){m(t.$$.fragment,n),a=!1},d(n){v(t,n)}}}function et(r){let t,a,n,l;return t=new Pe({props:{id:"boundaries",filter:["==",["get","level"],r[4]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Re(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[xe]},$$scope:{ctx:r}}}),t.$on("click",r[7]),n=new qe({props:{id:"boundaries-outline",filter:["==",["get","level"],r[4]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){h(t.$$.fragment),a=g(),h(n.$$.fragment)},m(e,o){_(t,e,o),L(e,a,o),_(n,e,o),l=!0},p(e,o){const b={};o&16&&(b.filter=["==",["get","level"],e[4]]),o&262144&&(b.$$scope={dirty:o,ctx:e}),t.$set(b);const f={};o&16&&(f.filter=["==",["get","level"],e[4]]),n.$set(f)},i(e){l||(p(t.$$.fragment,e),p(n.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),m(n.$$.fragment,e),l=!1},d(e){e&&C(a),v(t,e),v(n,e)}}}function tt(r){let t,a;return t=new Fe({props:{data:r[1],generateId:!0,$$slots:{default:[et]},$$scope:{ctx:r}}}),{c(){h(t.$$.fragment)},m(n,l){_(t,n,l),a=!0},p(n,l){const e={};l&2&&(e.data=n[1]),l&262160&&(e.$$scope={dirty:l,ctx:n}),t.$set(e)},i(n){a||(p(t.$$.fragment,n),a=!0)},o(n){m(t.$$.fragment,n),a=!1},d(n){v(t,n)}}}function nt(r){let t,a,n,l,e,o,b,f,c,N,T,R,j,q,S,U,k,V,D,u,I,w,G,y,H,te,ne,ae,B,re,F,se,z,P,O,Q,M,W,K;n=new We({}),o=new ye({}),c=new Se({}),S=new ke({props:{$$slots:{default:[Xe]},$$scope:{ctx:r}}}),S.$on("click",r[9]),k=new me({props:{errorMessage:r[3]}});let $=r[1].features.length>0&&ge(r);u=new Le({props:{disabled:!r[5],$$slots:{default:[Ye]},$$scope:{ctx:r}}}),u.$on("click",r[8]);function be(s){r[11](s)}let oe={label:"Or pick from the map",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};r[4]!==void 0&&(oe.value=r[4]),y=new Ce({props:oe}),Z.push(()=>x(y,"value",be)),B=new me({props:{errorMessage:at}}),F=new Me({props:{label:"Or upload an ATIP GeoJSON file",onLoad:r[6]}}),O=new Ee({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[tt]},$$scope:{ctx:r}}});function we(s){r[12](s)}let le={};return r[2]!==void 0&&(le.open=r[2]),M=new Ke({props:le}),Z.push(()=>x(M,"open",we)),{c(){t=A("div"),a=A("div"),h(n.$$.fragment),l=g(),e=A("div"),h(o.$$.fragment),b=g(),f=A("div"),h(c.$$.fragment),N=g(),T=A("p"),T.textContent=`App version: ${Te()}`,R=g(),j=A("h1"),j.textContent="Scheme Sketcher",q=g(),h(S.$$.fragment),U=g(),h(k.$$.fragment),V=g(),$&&$.c(),D=g(),h(u.$$.fragment),I=g(),w=A("hr"),G=g(),h(y.$$.fragment),te=g(),ne=A("hr"),ae=g(),h(B.$$.fragment),re=g(),h(F.$$.fragment),se=g(),z=A("div"),P=A("div"),h(O.$$.fragment),Q=g(),h(M.$$.fragment),Ie(f,"border-bottom","1px solid #b1b4b6"),E(e,"class","left svelte-lyn11h"),E(a,"class","govuk-grid-column-one-half govuk-prose"),E(P,"id","map"),E(P,"class","svelte-lyn11h"),E(z,"class","govuk-grid-column-one-half"),E(t,"class","govuk-grid-row")},m(s,d){L(s,t,d),i(t,a),_(n,a,null),i(a,l),i(a,e),_(o,e,null),i(e,b),i(e,f),_(c,f,null),i(f,N),i(f,T),i(e,R),i(e,j),i(e,q),_(S,e,null),i(e,U),_(k,e,null),i(e,V),$&&$.m(e,null),i(e,D),_(u,e,null),i(e,I),i(e,w),i(e,G),_(y,e,null),i(e,te),i(e,ne),i(e,ae),_(B,e,null),i(e,re),_(F,e,null),i(t,se),i(t,z),i(z,P),_(O,P,null),L(s,Q,d),_(M,s,d),K=!0},p(s,[d]){const ie={};d&262144&&(ie.$$scope={dirty:d,ctx:s}),S.$set(ie);const ue={};d&8&&(ue.errorMessage=s[3]),k.$set(ue),s[1].features.length>0?$?($.p(s,d),d&2&&p($,1)):($=ge(s),$.c(),p($,1),$.m(e,D)):$&&(Je(),m($,1,1,()=>{$=null}),He());const X={};d&32&&(X.disabled=!s[5]),d&262144&&(X.$$scope={dirty:d,ctx:s}),u.$set(X);const fe={};!H&&d&16&&(H=!0,fe.value=s[4],ee(()=>H=!1)),y.$set(fe);const pe={};d&262162&&(pe.$$scope={dirty:d,ctx:s}),O.$set(pe);const $e={};!W&&d&4&&(W=!0,$e.open=s[2],ee(()=>W=!1)),M.$set($e)},i(s){K||(p(n.$$.fragment,s),p(o.$$.fragment,s),p(c.$$.fragment,s),p(S.$$.fragment,s),p(k.$$.fragment,s),p($),p(u.$$.fragment,s),p(y.$$.fragment,s),p(B.$$.fragment,s),p(F.$$.fragment,s),p(O.$$.fragment,s),p(M.$$.fragment,s),K=!0)},o(s){m(n.$$.fragment,s),m(o.$$.fragment,s),m(c.$$.fragment,s),m(S.$$.fragment,s),m(k.$$.fragment,s),m($),m(u.$$.fragment,s),m(y.$$.fragment,s),m(B.$$.fragment,s),m(F.$$.fragment,s),m(O.$$.fragment,s),m(M.$$.fragment,s),K=!1},d(s){s&&(C(t),C(Q)),v(n),v(o),v(c),v(S),v(k),$&&$.d(),v(u),v(y),v(B),v(F),v(O),v(M,s)}}}let at="";const de=r=>[r.properties.full_name,`${r.properties.name} (${r.properties.level})`];function rt(r,t,a){let n,l;Oe(r,Ue,u=>a(13,l=u));let e={type:"FeatureCollection",features:[]},o=!1,f=new URLSearchParams(window.location.search).get("error")||"",c,N=new Set,T="TA";Be(async()=>{Ne(),a(1,e=await je());for(let u of e.features)N.add(u.properties.full_name)});function R(u,I){try{let w=JSON.parse(I),G=De(w.features,e);if(!G)throw new Error("Can't figure out the authority boundary that fully contains this scheme");w.authority=G;let y=w.authority,H=j(w);H!="v1"&&(y+=`_${H}`),Ge(y,JSON.stringify(w)),window.location.href=`scheme.html?authority=${w.authority}&schema=${H}`}catch(w){a(3,f=`Couldn't load scheme from a file: ${w}`)}}function j(u){if(u.features.length>0){let I=u.features[0].properties;for(let w of["pipeline"])if(I&&w in I)return w}return l}function q(u){window.location.href=`scheme.html?authority=${u.detail.features[0].properties.full_name}&schema=${l}`}function S(){window.location.href=`scheme.html?authority=${c}&schema=${l}`}const U=()=>a(2,o=!o);function k(u){c=u,a(0,c)}function V(u){T=u,a(4,T)}function D(u){o=u,a(2,o)}return r.$$.update=()=>{r.$$.dirty&1&&a(5,n=N.has(c))},[c,e,o,f,T,n,R,q,S,U,k,V,D]}class st extends he{constructor(t){super(),_e(this,t,rt,nt,ve,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new st({target:document.getElementById("app")});
