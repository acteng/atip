import{S as ee,i as te,s as ne,e as p,c as C,a as g,l as L,b as Q,d as q,f as E,m as T,g as o,z as W,t as v,v as oe,h as M,j as G,k as F,y as ae,o as le,A as re,n as se}from"./stores-05c702cb.js";import{e as U,C as V,d as ue,S as ie}from"./files-52bcec72.js";import{A as ce}from"./AlphaBanner-06bd132d.js";import{B as fe,W as de}from"./WarningButton-21207e97.js";import{H as pe}from"./Header-addc03f2.js";import"./spread-8a54911c.js";function X(n,e,t){const l=n.slice();return l[6]=e[t][0],l[7]=e[t][1],l}function me(n){let e;return{c(){e=L(`Download
                `)},m(t,l){E(t,e,l)},d(t){t&&G(e)}}}function he(n){let e;return{c(){e=L("Delete")},m(t,l){E(t,e,l)},d(t){t&&G(e)}}}function ge(n){let e,t,l;function c(){return n[4](n[6])}e=new ie({props:{$$slots:{default:[me]},$$scope:{ctx:n}}}),e.$on("click",c);function _(){return n[5](n[6])}return t=new de({props:{$$slots:{default:[he]},$$scope:{ctx:n}}}),t.$on("click",_),{c(){C(e.$$.fragment),C(t.$$.fragment)},m(r,f){T(e,r,f),T(t,r,f),l=!0},p(r,f){n=r;const m={};f&1024&&(m.$$scope={dirty:f,ctx:n}),e.$set(m);const u={};f&1024&&(u.$$scope={dirty:f,ctx:n}),t.$set(u)},i(r){l||(v(e.$$.fragment,r),v(t.$$.fragment,r),l=!0)},o(r){M(e.$$.fragment,r),M(t.$$.fragment,r),l=!1},d(r){F(e,r),F(t,r)}}}function Z(n){let e,t,l=n[6]+"",c,_,r,f=D(n[7])+"",m,u,k,b,B,w;return b=new fe({props:{$$slots:{default:[ge]},$$scope:{ctx:n}}}),{c(){e=p("tr"),t=p("td"),c=L(l),_=g(),r=p("td"),m=L(f),u=g(),k=p("td"),C(b.$$.fragment),B=g()},m(d,$){E(d,e,$),o(e,t),o(t,c),o(e,_),o(e,r),o(r,m),o(e,u),o(e,k),T(b,k,null),o(e,B),w=!0},p(d,$){(!w||$&1)&&l!==(l=d[6]+"")&&W(c,l),(!w||$&1)&&f!==(f=D(d[7])+"")&&W(m,f);const S={};$&1025&&(S.$$scope={dirty:$,ctx:d}),b.$set(S)},i(d){w||(v(b.$$.fragment,d),w=!0)},o(d){M(b.$$.fragment,d),w=!1},d(d){d&&G(e),F(b)}}}function $e(n){let e,t,l,c,_,r,f,m,u,k,b,B,w,d,$=D(n[1])+"",S,Y,K,A,I,N,P,z,R,J,j,H;t=new pe({}),c=new ce({});let y=U(n[0]),s=[];for(let a=0;a<y.length;a+=1)s[a]=Z(X(n,y,a));const x=a=>M(s[a],1,1,()=>{s[a]=null});return{c(){e=p("div"),C(t.$$.fragment),l=g(),C(c.$$.fragment),_=g(),r=p("h1"),r.textContent="Manage local storage",f=g(),m=p("a"),m.textContent="Return to the Scheme Sketcher",u=g(),k=p("p"),k.innerHTML=`All sketch files are stored in your browser&#39;s local storage. There&#39;s a 5MB
    size limit, and you&#39;ve been redirected to this page because the last action
    you took exceeds this limit. You must delete some other files first to
    continue. <b>Before you delete a file, you should download a copy.</b>`,b=g(),B=p("p"),B.innerHTML=`If you see this page frequently or have any problems, please contact
    <a href="mailto:dcarlino@turing.ac.uk">Dustin</a>
    and
    <a href="mailto:Peter.York@activetravelengland.gov.uk">Pete</a>
    for help.`,w=g(),d=p("p"),S=L($),Y=L(" / 5 MB is used right now"),K=g(),A=p("progress"),N=g(),P=p("table"),z=p("table"),R=p("thead"),R.innerHTML='<tr><th>Filename</th> <th>Size</th> <th class="govuk-!-width-one-quarter">Actions</th></tr>',J=g(),j=p("tbody");for(let a=0;a<s.length;a+=1)s[a].c();Q(r,"margin-top","30px"),q(m,"href","choose_area.html"),q(m,"class","govuk-back-link"),A.value=I=100*n[1]/(1024*1024*5),q(A,"max","100"),Q(A,"width","100%"),q(e,"class","govuk-width-container govuk-prose")},m(a,h){E(a,e,h),T(t,e,null),o(e,l),T(c,e,null),o(e,_),o(e,r),o(e,f),o(e,m),o(e,u),o(e,k),o(e,b),o(e,B),o(e,w),o(e,d),o(d,S),o(d,Y),o(e,K),o(e,A),o(e,N),o(e,P),o(P,z),o(z,R),o(z,J),o(z,j);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(j,null);H=!0},p(a,[h]){if((!H||h&2)&&$!==($=D(a[1])+"")&&W(S,$),(!H||h&2&&I!==(I=100*a[1]/(1024*1024*5)))&&(A.value=I),h&13){y=U(a[0]);let i;for(i=0;i<y.length;i+=1){const O=X(a,y,i);s[i]?(s[i].p(O,h),v(s[i],1)):(s[i]=Z(O),s[i].c(),v(s[i],1),s[i].m(j,null))}for(re(),i=y.length;i<s.length;i+=1)x(i);oe()}},i(a){if(!H){v(t.$$.fragment,a),v(c.$$.fragment,a);for(let h=0;h<y.length;h+=1)v(s[h]);H=!0}},o(a){M(t.$$.fragment,a),M(c.$$.fragment,a),s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)M(s[h]);H=!1},d(a){a&&G(e),F(t),F(c),ae(s,a)}}}function D(n){if(n==0)return"0 bytes";let e=1024,t=["bytes","KB","MB"],l=Math.floor(Math.log(n)/Math.log(e));return parseFloat((n/Math.pow(e,l)).toFixed(1))+" "+t[l]}function _e(n,e,t){let l,c=[];le(()=>{se(),t(0,c=V())});function _(u){ue(`${u}.geojson`,window.localStorage.getItem(u))}function r(u){window.confirm(`Really delete ${u}?`)&&(window.localStorage.removeItem(u),t(0,c=V()))}const f=u=>_(u),m=u=>r(u);return n.$$.update=()=>{n.$$.dirty&1&&t(1,l=c.reduce((u,k)=>u+k[1],0))},[c,l,_,r,f,m]}class be extends ee{constructor(e){super(),te(this,e,_e,$e,ne,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new be({target:document.getElementById("app")});
