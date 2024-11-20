import{S as we,i as be,s as ke,e as m,c as z,a as w,l as W,b as $e,d as k,f as E,m as G,g as r,h as F,v as x,t as v,j as N,k as J,x as ve,o as ye,q as Q,A as ee,n as Se,C as Ce,y as Fe,z as Me,B as Ae}from"./stores-f6023255.js";import{S as te,E as Ie,d as je,i as Be,l as Z,F as Le,g as Ee,s as de,b as Ne,f as Oe,h as U,j as ne,a as He,k as Re,e as ge}from"./files-d453ffa3.js";import{A as ze}from"./AlphaBanner-2d48aff5.js";import{W as Ge,c as Je}from"./config-844849b1.js";import{H as We}from"./Header-b0d06ff5.js";import"./colors-732b753b.js";function _e(l,e,t){const o=l.slice();return o[14]=e[t][0],o[15]=e[t][1],o}function Ye(l){let e;return{c(){e=m("p"),e.textContent="No saved files"},m(t,o){E(t,e,o)},p:Q,i:Q,o:Q,d(t){t&&N(e)}}}function qe(l){let e,t,o,h,u,g,S,d=ge(l[1]),n=[];for(let a=0;a<d.length;a+=1)n[a]=he(_e(l,d,a));const _=a=>F(n[a],1,1,()=>{n[a]=null});return{c(){e=m("h2"),e.textContent="Load existing files",t=w(),o=m("table"),h=m("thead"),h.innerHTML="<tr><th>File name</th> <th>Action</th></tr>",u=w(),g=m("tbody");for(let a=0;a<n.length;a+=1)n[a].c()},m(a,c){E(a,e,c),E(a,t,c),E(a,o,c),r(o,h),r(o,u),r(o,g);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(g,null);S=!0},p(a,c){if(c&626){d=ge(a[1]);let i;for(i=0;i<d.length;i+=1){const y=_e(a,d,i);n[i]?(n[i].p(y,c),v(n[i],1)):(n[i]=he(y),n[i].c(),v(n[i],1),n[i].m(g,null))}for(ee(),i=d.length;i<n.length;i+=1)_(i);x()}},i(a){if(!S){for(let c=0;c<d.length;c+=1)v(n[c]);S=!0}},o(a){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)F(n[c]);S=!1},d(a){a&&(N(e),N(t),N(o)),Fe(n,a)}}}function De(l){let e;return{c(){e=W("Rename")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function Ke(l){let e;return{c(){e=W("Download")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function Te(l){let e;return{c(){e=W("Delete")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function he(l){let e,t,o,h=l[14]+"",u,g,S,d,n,_,a,c,i,y,O,L;function s(){return l[10](l[14])}_=new te({props:{$$slots:{default:[De]},$$scope:{ctx:l}}}),_.$on("click",s);function b(){return l[11](l[14])}c=new te({props:{$$slots:{default:[Ke]},$$scope:{ctx:l}}}),c.$on("click",b);function A(){return l[12](l[14])}return y=new Ge({props:{$$slots:{default:[Te]},$$scope:{ctx:l}}}),y.$on("click",A),{c(){e=m("tr"),t=m("td"),o=m("a"),u=W(h),S=w(),d=m("td"),n=m("div"),z(_.$$.fragment),a=w(),z(c.$$.fragment),i=w(),z(y.$$.fragment),O=w(),k(o,"href",g=ne(l[4],l[14],l[15])),k(n,"class","govuk-button-group"),$e(n,"flex-wrap","nowrap")},m(p,C){E(p,e,C),r(e,t),r(t,o),r(o,u),r(e,S),r(e,d),r(d,n),G(_,n,null),r(n,a),G(c,n,null),r(n,i),G(y,n,null),r(e,O),L=!0},p(p,C){l=p,(!L||C&2)&&h!==(h=l[14]+"")&&Me(u,h),(!L||C&2&&g!==(g=ne(l[4],l[14],l[15])))&&k(o,"href",g);const D={};C&262144&&(D.$$scope={dirty:C,ctx:l}),_.$set(D);const K={};C&262144&&(K.$$scope={dirty:C,ctx:l}),c.$set(K);const q={};C&262144&&(q.$$scope={dirty:C,ctx:l}),y.$set(q)},i(p){L||(v(_.$$.fragment,p),v(c.$$.fragment,p),v(y.$$.fragment,p),L=!0)},o(p){F(_.$$.fragment,p),F(c.$$.fragment,p),F(y.$$.fragment,p),L=!1},d(p){p&&N(e),J(_),J(c),J(y)}}}function Ue(l){let e;return{c(){e=W("Create new file")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function pe(l){let e,t;return e=new Le({props:{label:"Select a .geojson file",onLoad:l[8]}}),{c(){z(e.$$.fragment)},m(o,h){G(e,o,h),t=!0},p:Q,i(o){t||(v(e.$$.fragment,o),t=!0)},o(o){F(e.$$.fragment,o),t=!1},d(o){J(e,o)}}}function Pe(l){let e,t,o,h,u,g,S,d,n,_,a,c,i,y,O,L,s,b,A,p,C,D,K,q,le,I,j,oe,M,P,re,H,ae,V,se,Y,ie,T;t=new We({}),h=new ze({});const ce=[qe,Ye],R=[];function ue(f,B){return f[1].length>0?0:1}I=ue(l),j=R[I]=ce[I](l),H=new te({props:{$$slots:{default:[Ue]},$$scope:{ctx:l}}}),H.$on("click",l[7]),Y=new Ie({props:{errorMessage:l[2]}});let $=l[0]&&pe(l);return{c(){e=m("div"),z(t.$$.fragment),o=w(),z(h.$$.fragment),u=w(),g=m("h1"),g.textContent="Manage my sketches",S=w(),d=m("div"),n=m("div"),_=m("nav"),a=m("ol"),c=m("li"),i=m("a"),y=W("Change area"),L=w(),s=m("li"),s.textContent="Manage files",b=w(),A=m("p"),p=W("You're working on sketches in "),C=m("b"),C.textContent=`${je(l[4])}`,D=W(`
        .`),K=w(),q=m("p"),q.textContent=`On this page you can manage your sketch files. All files are auto-saved
        in your browser's local storage. You can close your browser and continue
        later.`,le=w(),j.c(),oe=w(),M=m("div"),P=m("h2"),P.textContent="Create a new sketch",re=w(),z(H.$$.fragment),ae=w(),V=m("h2"),V.textContent="Import a saved sketch",se=w(),z(Y.$$.fragment),ie=w(),$&&$.c(),$e(g,"margin-top","30px"),k(i,"class","govuk-breadcrumbs__link"),k(i,"href",O=`choose_area.html?scheme=${l[3]}`),k(c,"class","govuk-breadcrumbs__list-item"),k(s,"class","govuk-breadcrumbs__list-item"),k(a,"class","govuk-breadcrumbs__list"),k(_,"class","govuk-breadcrumbs"),k(_,"aria-label","Breadcrumb"),k(n,"class","govuk-grid-column-two-thirds"),k(P,"class","green-bar svelte-1z050ke"),k(M,"class","govuk-grid-column-one-third"),k(d,"class","govuk-grid-row"),k(e,"class","govuk-width-container govuk-prose")},m(f,B){E(f,e,B),G(t,e,null),r(e,o),G(h,e,null),r(e,u),r(e,g),r(e,S),r(e,d),r(d,n),r(n,_),r(_,a),r(a,c),r(c,i),r(i,y),r(a,L),r(a,s),r(n,b),r(n,A),r(A,p),r(A,C),r(A,D),r(n,K),r(n,q),r(n,le),R[I].m(n,null),r(d,oe),r(d,M),r(M,P),r(M,re),G(H,M,null),r(M,ae),r(M,V),r(M,se),G(Y,M,null),r(M,ie),$&&$.m(M,null),T=!0},p(f,[B]){(!T||B&8&&O!==(O=`choose_area.html?scheme=${f[3]}`))&&k(i,"href",O);let X=I;I=ue(f),I===X?R[I].p(f,B):(ee(),F(R[X],1,1,()=>{R[X]=null}),x(),j=R[I],j?j.p(f,B):(j=R[I]=ce[I](f),j.c()),v(j,1),j.m(n,null));const fe={};B&262144&&(fe.$$scope={dirty:B,ctx:f}),H.$set(fe);const me={};B&4&&(me.errorMessage=f[2]),Y.$set(me),f[0]?$?($.p(f,B),B&1&&v($,1)):($=pe(f),$.c(),v($,1),$.m(M,null)):$&&(ee(),F($,1,1,()=>{$=null}),x())},i(f){T||(v(t.$$.fragment,f),v(h.$$.fragment,f),v(j),v(H.$$.fragment,f),v(Y.$$.fragment,f),v($),T=!0)},o(f){F(t.$$.fragment,f),F(h.$$.fragment,f),F(j),F(H.$$.fragment,f),F(Y.$$.fragment,f),F($),T=!1},d(f){f&&N(e),J(t),J(h),R[I].d(),J(H),J(Y),$&&$.d()}}}function Qe(l,e,t){let o;ve(l,Ae,s=>t(3,o=s));let u=new URLSearchParams(window.location.search).get("authority")||"missing",g=null;Be(u);let S=Z(u),d="";ye(async()=>{Se(),t(0,g=await Ee()),g.features.some(s=>s.properties.full_name==u)||(window.location.href=`choose_area.html?schema=${o}&error=Authority name not found: ${u}`)});function n(s){let b=window.prompt(`Rename file ${s} to what?`,s);if(b){let A=U(u,s),p=window.localStorage.getItem(A);de(U(u,b),p),window.localStorage.removeItem(A),t(1,S=Z(u))}}function _(s){if(!window.confirm(`Really delete file ${s}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`))return;let b=U(u,s);Ne(`${u}_${s}.json`,window.localStorage.getItem(b)),window.localStorage.removeItem(b),t(1,S=Z(u))}function a(){let s=window.prompt("What do you want to name your new file?");if(!s)return;let b=Ce(Je);Object.values(b.schemes)[0].scheme_name=s,de(U(u,s),JSON.stringify(Oe(u,b))),window.location.href=ne(u,s,o)}function c(s,b){try{window.location.href=He(s,b,g)}catch(A){t(2,d=`Couldn't import file: ${A}`)}}function i(s){let b=JSON.parse(window.localStorage.getItem(U(u,s)));Re(u,s,b)}return[g,S,d,o,u,n,_,a,c,i,s=>n(s),s=>i(s),s=>_(s)]}class Ve extends we{constructor(e){super(),be(this,e,Qe,Pe,ke,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new Ve({target:document.getElementById("app")});
