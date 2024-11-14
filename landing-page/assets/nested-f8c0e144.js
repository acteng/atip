import{S as we,i as be,s as ke,H as ve,e as m,c as G,a as w,l as Y,b as $e,d as k,f as E,m as J,g as a,h as C,p as x,t as v,j as N,k as W,q as ye,o as Se,r as Q,u as ee,n as Fe,v as Ce,w as Me,x as Ie,y as je}from"./stores-dc1f9b6e.js";import{S as te,E as Ae,d as Le,i as Be,l as Z,F as Ee,g as Ne,s as de,a as Oe,b as He,c as U,e as ne,f as Re,h as Ge,j as ge}from"./files-0dda6c35.js";import{A as Je}from"./AlphaBanner-e82affa8.js";import{W as We,c as Ye}from"./config-433a3b58.js";function _e(l,e,t){const o=l.slice();return o[14]=e[t][0],o[15]=e[t][1],o}function qe(l){let e;return{c(){e=m("p"),e.textContent="No saved files"},m(t,o){E(t,e,o)},p:Q,i:Q,o:Q,d(t){t&&N(e)}}}function ze(l){let e,t,o,h,u,g,S,d=ge(l[1]),n=[];for(let r=0;r<d.length;r+=1)n[r]=he(_e(l,d,r));const _=r=>C(n[r],1,1,()=>{n[r]=null});return{c(){e=m("h2"),e.textContent="Load existing files",t=w(),o=m("table"),h=m("thead"),h.innerHTML="<tr><th>File name</th> <th>Action</th></tr>",u=w(),g=m("tbody");for(let r=0;r<n.length;r+=1)n[r].c()},m(r,c){E(r,e,c),E(r,t,c),E(r,o,c),a(o,h),a(o,u),a(o,g);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(g,null);S=!0},p(r,c){if(c&626){d=ge(r[1]);let i;for(i=0;i<d.length;i+=1){const y=_e(r,d,i);n[i]?(n[i].p(y,c),v(n[i],1)):(n[i]=he(y),n[i].c(),v(n[i],1),n[i].m(g,null))}for(ee(),i=d.length;i<n.length;i+=1)_(i);x()}},i(r){if(!S){for(let c=0;c<d.length;c+=1)v(n[c]);S=!0}},o(r){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)C(n[c]);S=!1},d(r){r&&(N(e),N(t),N(o)),Me(n,r)}}}function De(l){let e;return{c(){e=Y("Rename")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function Ke(l){let e;return{c(){e=Y("Download")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function Te(l){let e;return{c(){e=Y("Delete")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function he(l){let e,t,o,h=l[14]+"",u,g,S,d,n,_,r,c,i,y,O,B;function s(){return l[10](l[14])}_=new te({props:{$$slots:{default:[De]},$$scope:{ctx:l}}}),_.$on("click",s);function b(){return l[11](l[14])}c=new te({props:{$$slots:{default:[Ke]},$$scope:{ctx:l}}}),c.$on("click",b);function I(){return l[12](l[14])}return y=new We({props:{$$slots:{default:[Te]},$$scope:{ctx:l}}}),y.$on("click",I),{c(){e=m("tr"),t=m("td"),o=m("a"),u=Y(h),S=w(),d=m("td"),n=m("div"),G(_.$$.fragment),r=w(),G(c.$$.fragment),i=w(),G(y.$$.fragment),O=w(),k(o,"href",g=ne(l[4],l[14],l[15])),k(n,"class","govuk-button-group"),$e(n,"flex-wrap","nowrap")},m(p,F){E(p,e,F),a(e,t),a(t,o),a(o,u),a(e,S),a(e,d),a(d,n),J(_,n,null),a(n,r),J(c,n,null),a(n,i),J(y,n,null),a(e,O),B=!0},p(p,F){l=p,(!B||F&2)&&h!==(h=l[14]+"")&&Ie(u,h),(!B||F&2&&g!==(g=ne(l[4],l[14],l[15])))&&k(o,"href",g);const D={};F&262144&&(D.$$scope={dirty:F,ctx:l}),_.$set(D);const K={};F&262144&&(K.$$scope={dirty:F,ctx:l}),c.$set(K);const z={};F&262144&&(z.$$scope={dirty:F,ctx:l}),y.$set(z)},i(p){B||(v(_.$$.fragment,p),v(c.$$.fragment,p),v(y.$$.fragment,p),B=!0)},o(p){C(_.$$.fragment,p),C(c.$$.fragment,p),C(y.$$.fragment,p),B=!1},d(p){p&&N(e),W(_),W(c),W(y)}}}function Ue(l){let e;return{c(){e=Y("Create new file")},m(t,o){E(t,e,o)},d(t){t&&N(e)}}}function pe(l){let e,t;return e=new Ee({props:{label:"Select a .geojson file",onLoad:l[8]}}),{c(){G(e.$$.fragment)},m(o,h){J(e,o,h),t=!0},p:Q,i(o){t||(v(e.$$.fragment,o),t=!0)},o(o){C(e.$$.fragment,o),t=!1},d(o){W(e,o)}}}function Pe(l){let e,t,o,h,u,g,S,d,n,_,r,c,i,y,O,B,s,b,I,p,F,D,K,z,le,j,A,oe,M,P,ae,H,re,V,se,q,ie,T;t=new ve({}),h=new Je({});const ce=[ze,qe],R=[];function ue(f,L){return f[1].length>0?0:1}j=ue(l),A=R[j]=ce[j](l),H=new te({props:{$$slots:{default:[Ue]},$$scope:{ctx:l}}}),H.$on("click",l[7]),q=new Ae({props:{errorMessage:l[2]}});let $=l[0]&&pe(l);return{c(){e=m("div"),G(t.$$.fragment),o=w(),G(h.$$.fragment),u=w(),g=m("h1"),g.textContent="Manage my sketches",S=w(),d=m("div"),n=m("div"),_=m("nav"),r=m("ol"),c=m("li"),i=m("a"),y=Y("Change area"),B=w(),s=m("li"),s.textContent="Manage files",b=w(),I=m("p"),p=Y("You're working on sketches in "),F=m("b"),F.textContent=`${Le(l[4])}`,D=Y(`
        .`),K=w(),z=m("p"),z.textContent=`On this page you can manage your sketch files. All files are auto-saved
        in your browser's local storage. You can close your browser and continue
        later.`,le=w(),A.c(),oe=w(),M=m("div"),P=m("h2"),P.textContent="Create a new sketch",ae=w(),G(H.$$.fragment),re=w(),V=m("h2"),V.textContent="Import a saved sketch",se=w(),G(q.$$.fragment),ie=w(),$&&$.c(),$e(g,"margin-top","30px"),k(i,"class","govuk-breadcrumbs__link"),k(i,"href",O=`choose_area.html?scheme=${l[3]}`),k(c,"class","govuk-breadcrumbs__list-item"),k(s,"class","govuk-breadcrumbs__list-item"),k(r,"class","govuk-breadcrumbs__list"),k(_,"class","govuk-breadcrumbs"),k(_,"aria-label","Breadcrumb"),k(n,"class","govuk-grid-column-two-thirds"),k(P,"class","green-bar svelte-1z050ke"),k(M,"class","govuk-grid-column-one-third"),k(d,"class","govuk-grid-row"),k(e,"class","govuk-width-container govuk-prose")},m(f,L){E(f,e,L),J(t,e,null),a(e,o),J(h,e,null),a(e,u),a(e,g),a(e,S),a(e,d),a(d,n),a(n,_),a(_,r),a(r,c),a(c,i),a(i,y),a(r,B),a(r,s),a(n,b),a(n,I),a(I,p),a(I,F),a(I,D),a(n,K),a(n,z),a(n,le),R[j].m(n,null),a(d,oe),a(d,M),a(M,P),a(M,ae),J(H,M,null),a(M,re),a(M,V),a(M,se),J(q,M,null),a(M,ie),$&&$.m(M,null),T=!0},p(f,[L]){(!T||L&8&&O!==(O=`choose_area.html?scheme=${f[3]}`))&&k(i,"href",O);let X=j;j=ue(f),j===X?R[j].p(f,L):(ee(),C(R[X],1,1,()=>{R[X]=null}),x(),A=R[j],A?A.p(f,L):(A=R[j]=ce[j](f),A.c()),v(A,1),A.m(n,null));const fe={};L&262144&&(fe.$$scope={dirty:L,ctx:f}),H.$set(fe);const me={};L&4&&(me.errorMessage=f[2]),q.$set(me),f[0]?$?($.p(f,L),L&1&&v($,1)):($=pe(f),$.c(),v($,1),$.m(M,null)):$&&(ee(),C($,1,1,()=>{$=null}),x())},i(f){T||(v(t.$$.fragment,f),v(h.$$.fragment,f),v(A),v(H.$$.fragment,f),v(q.$$.fragment,f),v($),T=!0)},o(f){C(t.$$.fragment,f),C(h.$$.fragment,f),C(A),C(H.$$.fragment,f),C(q.$$.fragment,f),C($),T=!1},d(f){f&&N(e),W(t),W(h),R[j].d(),W(H),W(q),$&&$.d()}}}function Qe(l,e,t){let o;ye(l,je,s=>t(3,o=s));let u=new URLSearchParams(window.location.search).get("authority")||"missing",g=null;Be(u);let S=Z(u),d="";Se(async()=>{Fe(),t(0,g=await Ne()),g.features.some(s=>s.properties.full_name==u)||(window.location.href=`choose_area.html?schema=${o}&error=Authority name not found: ${u}`)});function n(s){let b=window.prompt(`Rename file ${s} to what?`,s);if(b){let I=U(u,s),p=window.localStorage.getItem(I);de(U(u,b),p),window.localStorage.removeItem(I),t(1,S=Z(u))}}function _(s){if(!window.confirm(`Really delete file ${s}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`))return;let b=U(u,s);Oe(`${u}_${s}.json`,window.localStorage.getItem(b)),window.localStorage.removeItem(b),t(1,S=Z(u))}function r(){let s=window.prompt("What do you want to name your new file?");if(!s)return;let b=Ce(Ye);Object.values(b.schemes)[0].scheme_name=s,de(U(u,s),JSON.stringify(He(u,b))),window.location.href=ne(u,s,o)}function c(s,b){try{window.location.href=Re(s,b,g)}catch(I){t(2,d=`Couldn't import file: ${I}`)}}function i(s){let b=JSON.parse(window.localStorage.getItem(U(u,s)));Ge(u,s,b)}return[g,S,d,o,u,n,_,r,c,i,s=>n(s),s=>i(s),s=>_(s)]}class Ve extends we{constructor(e){super(),be(this,e,Qe,Pe,ke,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new Ve({target:document.getElementById("app")});
