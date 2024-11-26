import{S as ee,i as te,s as oe,B as ne,g as m,c as T,j as h,h as z,p as Q,k as j,l as E,m as q,n,z as W,t as v,w as le,e as B,o as G,f as A,y as ae,q as re,A as se,r as ue}from"./stores-39ac87b4.js";import{e as U,C as V,d as ie}from"./files-efdc529e.js";import{B as ce,W as fe}from"./WarningButton-829d3d87.js";import{S as de}from"./SecondaryButton-e284e6f4.js";import{H as me}from"./Header-dfabc026.js";import"./spread-8a54911c.js";function X(o,e,t){const a=o.slice();return a[6]=e[t][0],a[7]=e[t][1],a}function pe(o){let e;return{c(){e=z(`Download
                `)},m(t,a){E(t,e,a)},d(t){t&&G(e)}}}function ge(o){let e;return{c(){e=z("Delete")},m(t,a){E(t,e,a)},d(t){t&&G(e)}}}function he(o){let e,t,a;function c(){return o[4](o[6])}e=new de({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),e.$on("click",c);function _(){return o[5](o[6])}return t=new fe({props:{$$slots:{default:[ge]},$$scope:{ctx:o}}}),t.$on("click",_),{c(){T(e.$$.fragment),T(t.$$.fragment)},m(r,f){q(e,r,f),q(t,r,f),a=!0},p(r,f){o=r;const p={};f&1024&&(p.$$scope={dirty:f,ctx:o}),e.$set(p);const u={};f&1024&&(u.$$scope={dirty:f,ctx:o}),t.$set(u)},i(r){a||(v(e.$$.fragment,r),v(t.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),B(t.$$.fragment,r),a=!1},d(r){A(e,r),A(t,r)}}}function Z(o){let e,t,a=o[6]+"",c,_,r,f=D(o[7])+"",p,u,w,k,M,b;return k=new ce({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){e=m("tr"),t=m("td"),c=z(a),_=h(),r=m("td"),p=z(f),u=h(),w=m("td"),T(k.$$.fragment),M=h()},m(d,$){E(d,e,$),n(e,t),n(t,c),n(e,_),n(e,r),n(r,p),n(e,u),n(e,w),q(k,w,null),n(e,M),b=!0},p(d,$){(!b||$&1)&&a!==(a=d[6]+"")&&W(c,a),(!b||$&1)&&f!==(f=D(d[7])+"")&&W(p,f);const S={};$&1025&&(S.$$scope={dirty:$,ctx:d}),k.$set(S)},i(d){b||(v(k.$$.fragment,d),b=!0)},o(d){B(k.$$.fragment,d),b=!1},d(d){d&&G(e),A(k)}}}function $e(o){let e,t,a,c,_,r,f,p,u,w,k,M,b,d,$=D(o[1])+"",S,Y,K,H,F,N,P,C,R,J,I,L;t=new me({}),c=new ne({});let y=U(o[0]),s=[];for(let l=0;l<y.length;l+=1)s[l]=Z(X(o,y,l));const x=l=>B(s[l],1,1,()=>{s[l]=null});return{c(){e=m("div"),T(t.$$.fragment),a=h(),T(c.$$.fragment),_=h(),r=m("h1"),r.textContent="Manage local storage",f=h(),p=m("a"),p.textContent="Return to the Scheme Sketcher",u=h(),w=m("p"),w.innerHTML=`All sketch files are stored in your browser&#39;s local storage. There&#39;s a 5MB
    size limit, and you&#39;ve been redirected to this page because the last action
    you took exceeds this limit. You must delete some other files first to
    continue. <b>Before you delete a file, you should download a copy.</b>`,k=h(),M=m("p"),M.innerHTML=`If you see this page frequently or have any problems, please contact
    <a href="mailto:dcarlino@turing.ac.uk">Dustin</a>
    and
    <a href="mailto:Peter.York@activetravelengland.gov.uk">Pete</a>
    for help.`,b=h(),d=m("p"),S=z($),Y=z(" / 5 MB is used right now"),K=h(),H=m("progress"),N=h(),P=m("table"),C=m("table"),R=m("thead"),R.innerHTML='<tr><th>Filename</th> <th>Size</th> <th class="govuk-!-width-one-quarter">Actions</th></tr>',J=h(),I=m("tbody");for(let l=0;l<s.length;l+=1)s[l].c();Q(r,"margin-top","30px"),j(p,"href","choose_area.html"),j(p,"class","govuk-back-link"),H.value=F=100*o[1]/(1024*1024*5),j(H,"max","100"),Q(H,"width","100%"),j(e,"class","govuk-width-container govuk-prose")},m(l,g){E(l,e,g),q(t,e,null),n(e,a),q(c,e,null),n(e,_),n(e,r),n(e,f),n(e,p),n(e,u),n(e,w),n(e,k),n(e,M),n(e,b),n(e,d),n(d,S),n(d,Y),n(e,K),n(e,H),n(e,N),n(e,P),n(P,C),n(C,R),n(C,J),n(C,I);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(I,null);L=!0},p(l,[g]){if((!L||g&2)&&$!==($=D(l[1])+"")&&W(S,$),(!L||g&2&&F!==(F=100*l[1]/(1024*1024*5)))&&(H.value=F),g&13){y=U(l[0]);let i;for(i=0;i<y.length;i+=1){const O=X(l,y,i);s[i]?(s[i].p(O,g),v(s[i],1)):(s[i]=Z(O),s[i].c(),v(s[i],1),s[i].m(I,null))}for(se(),i=y.length;i<s.length;i+=1)x(i);le()}},i(l){if(!L){v(t.$$.fragment,l),v(c.$$.fragment,l);for(let g=0;g<y.length;g+=1)v(s[g]);L=!0}},o(l){B(t.$$.fragment,l),B(c.$$.fragment,l),s=s.filter(Boolean);for(let g=0;g<s.length;g+=1)B(s[g]);L=!1},d(l){l&&G(e),A(t),A(c),ae(s,l)}}}function D(o){if(o==0)return"0 bytes";let e=1024,t=["bytes","KB","MB"],a=Math.floor(Math.log(o)/Math.log(e));return parseFloat((o/Math.pow(e,a)).toFixed(1))+" "+t[a]}function _e(o,e,t){let a,c=[];re(()=>{ue(),t(0,c=V())});function _(u){ie(`${u}.geojson`,window.localStorage.getItem(u))}function r(u){window.confirm(`Really delete ${u}?`)&&(window.localStorage.removeItem(u),t(0,c=V()))}const f=u=>_(u),p=u=>r(u);return o.$$.update=()=>{o.$$.dirty&1&&t(1,a=c.reduce((u,w)=>u+w[1],0))},[c,a,_,r,f,p]}class ke extends ee{constructor(e){super(),te(this,e,_e,$e,oe,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new ke({target:document.getElementById("app")});
