import{S as ke,i as ve,s as ye,B as Se,e as m,c as N,a as _,t as J,z as Fe,b as be,d as v,f as E,m as O,g as r,j as S,v as te,h as k,k as H,l as R,x as Ce,o as Me,q as V,C as ne,n as Ie,D as je,F as Ae,y as Be,A as Ee,E as He}from"./index-49203533.js";import{i as Le,l as ee,s as pe,d as Ne,b as Oe,g as P,f as oe,a as Re,h as ze,e as _e}from"./files-6182b171.js";import{E as De,F as Ge}from"./Radio-a04af6fe.js";import{F as Je}from"./Footer-dbd20d3e.js";import{S as le}from"./SecondaryButton-f65d1651.js";import{W as We}from"./WarningButton-05102ed0.js";import{c as Ye}from"./config-62aac75e.js";import{H as qe}from"./Header-3d6166b2.js";import"./spread-8a54911c.js";import"./Modal-e24c1d62.js";function he(o,e,t){const l=o.slice();return l[14]=e[t][0],l[15]=e[t][1],l}function Ke(o){let e;return{c(){e=m("p"),e.textContent="No saved files"},m(t,l){E(t,e,l)},p:V,i:V,o:V,d(t){t&&H(e)}}}function Te(o){let e,t,l,h,f,g,F,d=_e(o[1]),n=[];for(let a=0;a<d.length;a+=1)n[a]=$e(he(o,d,a));const p=a=>S(n[a],1,1,()=>{n[a]=null});return{c(){e=m("h2"),e.textContent="Load existing files",t=_(),l=m("table"),h=m("thead"),h.innerHTML="<tr><th>File name</th> <th>Action</th></tr>",f=_(),g=m("tbody");for(let a=0;a<n.length;a+=1)n[a].c()},m(a,u){E(a,e,u),E(a,t,u),E(a,l,u),r(l,h),r(l,f),r(l,g);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(g,null);F=!0},p(a,u){if(u&626){d=_e(a[1]);let i;for(i=0;i<d.length;i+=1){const y=he(a,d,i);n[i]?(n[i].p(y,u),k(n[i],1)):(n[i]=$e(y),n[i].c(),k(n[i],1),n[i].m(g,null))}for(ne(),i=d.length;i<n.length;i+=1)p(i);te()}},i(a){if(!F){for(let u=0;u<d.length;u+=1)k(n[u]);F=!0}},o(a){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)S(n[u]);F=!1},d(a){a&&(H(e),H(t),H(l)),Be(n,a)}}}function Ue(o){let e;return{c(){e=J("Rename")},m(t,l){E(t,e,l)},d(t){t&&H(e)}}}function Pe(o){let e;return{c(){e=J("Download")},m(t,l){E(t,e,l)},d(t){t&&H(e)}}}function Qe(o){let e;return{c(){e=J("Delete")},m(t,l){E(t,e,l)},d(t){t&&H(e)}}}function $e(o){let e,t,l,h=o[14]+"",f,g,F,d,n,p,a,u,i,y,z,L;function s(){return o[10](o[14])}p=new le({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),p.$on("click",s);function b(){return o[11](o[14])}u=new le({props:{$$slots:{default:[Pe]},$$scope:{ctx:o}}}),u.$on("click",b);function j(){return o[12](o[14])}return y=new We({props:{$$slots:{default:[Qe]},$$scope:{ctx:o}}}),y.$on("click",j),{c(){e=m("tr"),t=m("td"),l=m("a"),f=J(h),F=_(),d=m("td"),n=m("div"),N(p.$$.fragment),a=_(),N(u.$$.fragment),i=_(),N(y.$$.fragment),z=_(),v(l,"href",g=oe(o[4],o[14],o[15])),v(n,"class","govuk-button-group"),be(n,"flex-wrap","nowrap")},m($,C){E($,e,C),r(e,t),r(t,l),r(l,f),r(e,F),r(e,d),r(d,n),O(p,n,null),r(n,a),O(u,n,null),r(n,i),O(y,n,null),r(e,z),L=!0},p($,C){o=$,(!L||C&2)&&h!==(h=o[14]+"")&&Ee(f,h),(!L||C&2&&g!==(g=oe(o[4],o[14],o[15])))&&v(l,"href",g);const K={};C&262144&&(K.$$scope={dirty:C,ctx:o}),p.$set(K);const T={};C&262144&&(T.$$scope={dirty:C,ctx:o}),u.$set(T);const Y={};C&262144&&(Y.$$scope={dirty:C,ctx:o}),y.$set(Y)},i($){L||(k(p.$$.fragment,$),k(u.$$.fragment,$),k(y.$$.fragment,$),L=!0)},o($){S(p.$$.fragment,$),S(u.$$.fragment,$),S(y.$$.fragment,$),L=!1},d($){$&&H(e),R(p),R(u),R(y)}}}function Ve(o){let e;return{c(){e=J("Create new file")},m(t,l){E(t,e,l)},d(t){t&&H(e)}}}function we(o){let e,t;return e=new Ge({props:{label:"Select a .geojson file",onLoad:o[8]}}),{c(){N(e.$$.fragment)},m(l,h){O(e,l,h),t=!0},p:V,i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){S(e.$$.fragment,l),t=!1},d(l){R(e,l)}}}function Xe(o){let e,t,l,h,f,g,F,d,n,p,a,u,i,y,z,L,s,b,j,$,C,K,T,Y,re,A,B,ae,M,Q,se,D,ie,X,ce,W,ue,Z,q,U;t=new qe({}),h=new Se({});const fe=[Te,Ke],G=[];function me(c,I){return c[1].length>0?0:1}A=me(o),B=G[A]=fe[A](o),D=new le({props:{$$slots:{default:[Ve]},$$scope:{ctx:o}}}),D.$on("click",o[7]),W=new De({props:{errorMessage:o[2]}});let w=o[0]&&we(o);return q=new Je({props:{aboutHref:"about.html",privacyHref:"privacy.html",accessibilityHref:"accessibility.html"}}),{c(){e=m("div"),N(t.$$.fragment),l=_(),N(h.$$.fragment),f=_(),g=m("h1"),g.textContent="Manage my sketches",F=_(),d=m("div"),n=m("div"),p=m("nav"),a=m("ol"),u=m("li"),i=m("a"),y=J("Change area"),L=_(),s=m("li"),s.textContent="Manage files",b=_(),j=m("p"),$=J("You're working on sketches in "),C=m("b"),C.textContent=`${Fe(o[4])}`,K=J(`
        .`),T=_(),Y=m("p"),Y.textContent=`On this page you can manage your sketch files. All files are auto-saved
        in your browser's local storage. You can close your browser and continue
        later.`,re=_(),B.c(),ae=_(),M=m("div"),Q=m("h2"),Q.textContent="Create a new sketch",se=_(),N(D.$$.fragment),ie=_(),X=m("h2"),X.textContent="Import a saved sketch",ce=_(),N(W.$$.fragment),ue=_(),w&&w.c(),Z=_(),N(q.$$.fragment),be(g,"margin-top","30px"),v(i,"class","govuk-breadcrumbs__link"),v(i,"href",z=`choose_area.html?scheme=${o[3]}`),v(u,"class","govuk-breadcrumbs__list-item"),v(s,"class","govuk-breadcrumbs__list-item"),v(a,"class","govuk-breadcrumbs__list"),v(p,"class","govuk-breadcrumbs"),v(p,"aria-label","Breadcrumb"),v(n,"class","govuk-grid-column-two-thirds"),v(Q,"class","green-bar svelte-1z050ke"),v(M,"class","govuk-grid-column-one-third"),v(d,"class","govuk-grid-row"),v(e,"class","govuk-width-container govuk-prose")},m(c,I){E(c,e,I),O(t,e,null),r(e,l),O(h,e,null),r(e,f),r(e,g),r(e,F),r(e,d),r(d,n),r(n,p),r(p,a),r(a,u),r(u,i),r(i,y),r(a,L),r(a,s),r(n,b),r(n,j),r(j,$),r(j,C),r(j,K),r(n,T),r(n,Y),r(n,re),G[A].m(n,null),r(d,ae),r(d,M),r(M,Q),r(M,se),O(D,M,null),r(M,ie),r(M,X),r(M,ce),O(W,M,null),r(M,ue),w&&w.m(M,null),E(c,Z,I),O(q,c,I),U=!0},p(c,[I]){(!U||I&8&&z!==(z=`choose_area.html?scheme=${c[3]}`))&&v(i,"href",z);let x=A;A=me(c),A===x?G[A].p(c,I):(ne(),S(G[x],1,1,()=>{G[x]=null}),te(),B=G[A],B?B.p(c,I):(B=G[A]=fe[A](c),B.c()),k(B,1),B.m(n,null));const de={};I&262144&&(de.$$scope={dirty:I,ctx:c}),D.$set(de);const ge={};I&4&&(ge.errorMessage=c[2]),W.$set(ge),c[0]?w?(w.p(c,I),I&1&&k(w,1)):(w=we(c),w.c(),k(w,1),w.m(M,null)):w&&(ne(),S(w,1,1,()=>{w=null}),te())},i(c){U||(k(t.$$.fragment,c),k(h.$$.fragment,c),k(B),k(D.$$.fragment,c),k(W.$$.fragment,c),k(w),k(q.$$.fragment,c),U=!0)},o(c){S(t.$$.fragment,c),S(h.$$.fragment,c),S(B),S(D.$$.fragment,c),S(W.$$.fragment,c),S(w),S(q.$$.fragment,c),U=!1},d(c){c&&(H(e),H(Z)),R(t),R(h),G[A].d(),R(D),R(W),w&&w.d(),R(q,c)}}}function Ze(o,e,t){let l;Ce(o,He,s=>t(3,l=s));let f=new URLSearchParams(window.location.search).get("authority")||"missing",g=null;Le(f);let F=ee(f),d="";Me(async()=>{Ie(),t(0,g=await je()),g.features.some(s=>s.properties.full_name==f)||(window.location.href=`choose_area.html?schema=${l}&error=Authority name not found: ${f}`)});function n(s){let b=window.prompt(`Rename file ${s} to what?`,s);if(b){let j=P(f,s),$=window.localStorage.getItem(j);pe(P(f,b),$),window.localStorage.removeItem(j),t(1,F=ee(f))}}function p(s){if(!window.confirm(`Really delete file ${s}? You can't undo this. (If you delete, a copy will still be downloaded to your browser's download folder, in case you make a mistake.)`))return;let b=P(f,s);Ne(`${f}_${s}.json`,window.localStorage.getItem(b)),window.localStorage.removeItem(b),t(1,F=ee(f))}function a(){let s=window.prompt("What do you want to name your new file?");if(!s)return;let b=Ae(Ye);Object.values(b.schemes)[0].scheme_name=s,pe(P(f,s),JSON.stringify(Oe(f,b))),window.location.href=oe(f,s,l)}function u(s,b){try{window.location.href=Re(s,b,g)}catch(j){t(2,d=`Couldn't import file: ${j}`)}}function i(s){let b=JSON.parse(window.localStorage.getItem(P(f,s)));ze(f,s,b)}return[g,F,d,l,f,n,p,a,u,i,s=>n(s),s=>i(s),s=>p(s)]}class xe extends ke{constructor(e){super(),ve(this,e,Ze,Xe,ye,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new xe({target:document.getElementById("app")});
