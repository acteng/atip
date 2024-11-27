import{S as we,i as be,s as ke,g as m,c as z,j as w,h as W,p as $e,k,l as E,m as G,n as r,e as F,w as x,t as v,o as N,f as J,x as ve,q as ye,v as Q,A as ee,r as Se,C as Ce,y as Fe,z as Me,B as Ae}from"./stores-844083f6.js";import{i as Ie,l as Z,s as de,d as je,b as Be,g as U,f as te,a as Le,h as Ee,e as ge}from"./files-818dd87e.js";import{A as Ne}from"./AlphaBanner-3adda1e5.js";import{E as Oe,d as He,F as Re,g as ze}from"./index-7a202962.js";import{S as ne}from"./SecondaryButton-b7a5d465.js";import{W as Ge}from"./WarningButton-8fb63176.js";import{c as Je}from"./config-aa2476d9.js";import{H as We}from"./Header-56e1361b.js";import"./spread-8a54911c.js";import"./colors-b9b00b50.js";import"./Modal-794b174d.js";function pe(o,e,t){const l=o.slice();return l[14]=e[t][0],l[15]=e[t][1],l}function Ye(o){let e;return{c(){e=m("p"),e.textContent="No saved files"},m(t,l){E(t,e,l)},p:Q,i:Q,o:Q,d(t){t&&N(e)}}}function qe(o){let e,t,l,_,u,g,S,d=ge(o[1]),n=[];for(let a=0;a<d.length;a+=1)n[a]=_e(pe(o,d,a));const p=a=>F(n[a],1,1,()=>{n[a]=null});return{c(){e=m("h2"),e.textContent="Load existing files",t=w(),l=m("table"),_=m("thead"),_.innerHTML="<tr><th>File name</th> <th>Action</th></tr>",u=w(),g=m("tbody");for(let a=0;a<n.length;a+=1)n[a].c()},m(a,c){E(a,e,c),E(a,t,c),E(a,l,c),r(l,_),r(l,u),r(l,g);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(g,null);S=!0},p(a,c){if(c&626){d=ge(a[1]);let i;for(i=0;i<d.length;i+=1){const y=pe(a,d,i);n[i]?(n[i].p(y,c),v(n[i],1)):(n[i]=_e(y),n[i].c(),v(n[i],1),n[i].m(g,null))}for(ee(),i=d.length;i<n.length;i+=1)p(i);x()}},i(a){if(!S){for(let c=0;c<d.length;c+=1)v(n[c]);S=!0}},o(a){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)F(n[c]);S=!1},d(a){a&&(N(e),N(t),N(l)),Fe(n,a)}}}function De(o){let e;return{c(){e=W("Rename")},m(t,l){E(t,e,l)},d(t){t&&N(e)}}}function Ke(o){let e;return{c(){e=W("Download")},m(t,l){E(t,e,l)},d(t){t&&N(e)}}}function Te(o){let e;return{c(){e=W("Delete")},m(t,l){E(t,e,l)},d(t){t&&N(e)}}}function _e(o){let e,t,l,_=o[14]+"",u,g,S,d,n,p,a,c,i,y,O,L;function s(){return o[10](o[14])}p=new ne({props:{$$slots:{default:[De]},$$scope:{ctx:o}}}),p.$on("click",s);function b(){return o[11](o[14])}c=new ne({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}}),c.$on("click",b);function A(){return o[12](o[14])}return y=new Ge({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),y.$on("click",A),{c(){e=m("tr"),t=m("td"),l=m("a"),u=W(_),S=w(),d=m("td"),n=m("div"),z(p.$$.fragment),a=w(),z(c.$$.fragment),i=w(),z(y.$$.fragment),O=w(),k(l,"href",g=te(o[4],o[14],o[15])),k(n,"class","govuk-button-group"),$e(n,"flex-wrap","nowrap")},m(h,C){E(h,e,C),r(e,t),r(t,l),r(l,u),r(e,S),r(e,d),r(d,n),G(p,n,null),r(n,a),G(c,n,null),r(n,i),G(y,n,null),r(e,O),L=!0},p(h,C){o=h,(!L||C&2)&&_!==(_=o[14]+"")&&Me(u,_),(!L||C&2&&g!==(g=te(o[4],o[14],o[15])))&&k(l,"href",g);const D={};C&262144&&(D.$$scope={dirty:C,ctx:o}),p.$set(D);const K={};C&262144&&(K.$$scope={dirty:C,ctx:o}),c.$set(K);const q={};C&262144&&(q.$$scope={dirty:C,ctx:o}),y.$set(q)},i(h){L||(v(p.$$.fragment,h),v(c.$$.fragment,h),v(y.$$.fragment,h),L=!0)},o(h){F(p.$$.fragment,h),F(c.$$.fragment,h),F(y.$$.fragment,h),L=!1},d(h){h&&N(e),J(p),J(c),J(y)}}}function Ue(o){let e;return{c(){e=W("Create new file")},m(t,l){E(t,e,l)},d(t){t&&N(e)}}}function he(o){let e,t;return e=new Re({props:{label:"Select a .geojson file",onLoad:o[8]}}),{c(){z(e.$$.fragment)},m(l,_){G(e,l,_),t=!0},p:Q,i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){F(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function Pe(o){let e,t,l,_,u,g,S,d,n,p,a,c,i,y,O,L,s,b,A,h,C,D,K,q,oe,I,j,le,M,P,re,H,ae,V,se,Y,ie,T;t=new We({}),_=new Ne({});const ce=[qe,Ye],R=[];function ue(f,B){return f[1].length>0?0:1}I=ue(o),j=R[I]=ce[I](o),H=new ne({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),H.$on("click",o[7]),Y=new Oe({props:{errorMessage:o[2]}});let $=o[0]&&he(o);return{c(){e=m("div"),z(t.$$.fragment),l=w(),z(_.$$.fragment),u=w(),g=m("h1"),g.textContent="Manage my sketches",S=w(),d=m("div"),n=m("div"),p=m("nav"),a=m("ol"),c=m("li"),i=m("a"),y=W("Change area"),L=w(),s=m("li"),s.textContent="Manage files",b=w(),A=m("p"),h=W("You're working on sketches in "),C=m("b"),C.textContent=`${He(o[4])}`,D=W(`
        .`),K=w(),q=m("p"),q.textContent=`On this page you can manage your sketch files. All files are auto-saved
        in your browser's local storage. You can close your browser and continue
        later.`,oe=w(),j.c(),le=w(),M=m("div"),P=m("h2"),P.textContent="Create a new sketch",re=w(),z(H.$$.fragment),ae=w(),V=m("h2"),V.textContent="Import a saved sketch",se=w(),z(Y.$$.fragment),ie=w(),$&&$.c(),$e(g,"margin-top","30px"),k(i,"class","govuk-breadcrumbs__link"),k(i,"href",O=`choose_area.html?scheme=${o[3]}`),k(c,"class","govuk-breadcrumbs__list-item"),k(s,"class","govuk-breadcrumbs__list-item"),k(a,"class","govuk-breadcrumbs__list"),k(p,"class","govuk-breadcrumbs"),k(p,"aria-label","Breadcrumb"),k(n,"class","govuk-grid-column-two-thirds"),k(P,"class","green-bar svelte-1z050ke"),k(M,"class","govuk-grid-column-one-third"),k(d,"class","govuk-grid-row"),k(e,"class","govuk-width-container govuk-prose")},m(f,B){E(f,e,B),G(t,e,null),r(e,l),G(_,e,null),r(e,u),r(e,g),r(e,S),r(e,d),r(d,n),r(n,p),r(p,a),r(a,c),r(c,i),r(i,y),r(a,L),r(a,s),r(n,b),r(n,A),r(A,h),r(A,C),r(A,D),r(n,K),r(n,q),r(n,oe),R[I].m(n,null),r(d,le),r(d,M),r(M,P),r(M,re),G(H,M,null),r(M,ae),r(M,V),r(M,se),G(Y,M,null),r(M,ie),$&&$.m(M,null),T=!0},p(f,[B]){(!T||B&8&&O!==(O=`choose_area.html?scheme=${f[3]}`))&&k(i,"href",O);let X=I;I=ue(f),I===X?R[I].p(f,B):(ee(),F(R[X],1,1,()=>{R[X]=null}),x(),j=R[I],j?j.p(f,B):(j=R[I]=ce[I](f),j.c()),v(j,1),j.m(n,null));const fe={};B&262144&&(fe.$$scope={dirty:B,ctx:f}),H.$set(fe);const me={};B&4&&(me.errorMessage=f[2]),Y.$set(me),f[0]?$?($.p(f,B),B&1&&v($,1)):($=he(f),$.c(),v($,1),$.m(M,null)):$&&(ee(),F($,1,1,()=>{$=null}),x())},i(f){T||(v(t.$$.fragment,f),v(_.$$.fragment,f),v(j),v(H.$$.fragment,f),v(Y.$$.fragment,f),v($),T=!0)},o(f){F(t.$$.fragment,f),F(_.$$.fragment,f),F(j),F(H.$$.fragment,f),F(Y.$$.fragment,f),F($),T=!1},d(f){f&&N(e),J(t),J(_),R[I].d(),J(H),J(Y),$&&$.d()}}}function Qe(o,e,t){let l;ve(o,Ae,s=>t(3,l=s));let u=new URLSearchParams(window.location.search).get("authority")||"missing",g=null;Ie(u);let S=Z(u),d="";ye(async()=>{Se(),t(0,g=await ze()),g.features.some(s=>s.properties.full_name==u)||(window.location.href=`choose_area.html?schema=${l}&error=Authority name not found: ${u}`)});function n(s){let b=window.prompt(`Rename file ${s} to what?`,s);if(b){let A=U(u,s),h=window.localStorage.getItem(A);de(U(u,b),h),window.localStorage.removeItem(A),t(1,S=Z(u))}}function p(s){if(!window.confirm(`Really delete file ${s}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`))return;let b=U(u,s);je(`${u}_${s}.json`,window.localStorage.getItem(b)),window.localStorage.removeItem(b),t(1,S=Z(u))}function a(){let s=window.prompt("What do you want to name your new file?");if(!s)return;let b=Ce(Je);Object.values(b.schemes)[0].scheme_name=s,de(U(u,s),JSON.stringify(Be(u,b))),window.location.href=te(u,s,l)}function c(s,b){try{window.location.href=Le(s,b,g)}catch(A){t(2,d=`Couldn't import file: ${A}`)}}function i(s){let b=JSON.parse(window.localStorage.getItem(U(u,s)));Ee(u,s,b)}return[g,S,d,l,u,n,p,a,c,i,s=>n(s),s=>i(s),s=>p(s)]}class Ve extends we{constructor(e){super(),be(this,e,Qe,Pe,ke,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new Ve({target:document.getElementById("app")});
