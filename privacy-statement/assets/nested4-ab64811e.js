import{S as ee,i as te,s as oe,B as ne,g as d,c as q,j as h,h as C,p as Q,k as j,l as E,m as z,n,A as W,t as v,w as le,e as B,o as G,f as A,y as re,q as ae,C as se,r as ue}from"./index-1ec284d8.js";import{e as U,m as V,d as ie}from"./files-cb5fc07a.js";import{B as ce}from"./ButtonGroup-c397374d.js";import{S as fe}from"./SecondaryButton-646c2d2c.js";import{W as me}from"./WarningButton-94c576e7.js";import{H as de}from"./Header-714633b5.js";import"./spread-8a54911c.js";function X(o,e,t){const r=o.slice();return r[6]=e[t][0],r[7]=e[t][1],r}function pe(o){let e;return{c(){e=C(`Download
                `)},m(t,r){E(t,e,r)},d(t){t&&G(e)}}}function ge(o){let e;return{c(){e=C("Delete")},m(t,r){E(t,e,r)},d(t){t&&G(e)}}}function he(o){let e,t,r;function c(){return o[4](o[6])}e=new fe({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),e.$on("click",c);function _(){return o[5](o[6])}return t=new me({props:{$$slots:{default:[ge]},$$scope:{ctx:o}}}),t.$on("click",_),{c(){q(e.$$.fragment),q(t.$$.fragment)},m(a,f){z(e,a,f),z(t,a,f),r=!0},p(a,f){o=a;const p={};f&1024&&(p.$$scope={dirty:f,ctx:o}),e.$set(p);const u={};f&1024&&(u.$$scope={dirty:f,ctx:o}),t.$set(u)},i(a){r||(v(e.$$.fragment,a),v(t.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),B(t.$$.fragment,a),r=!1},d(a){A(e,a),A(t,a)}}}function Z(o){let e,t,r=o[6]+"",c,_,a,f=D(o[7])+"",p,u,w,k,M,b;return k=new ce({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){e=d("tr"),t=d("td"),c=C(r),_=h(),a=d("td"),p=C(f),u=h(),w=d("td"),q(k.$$.fragment),M=h()},m(m,$){E(m,e,$),n(e,t),n(t,c),n(e,_),n(e,a),n(a,p),n(e,u),n(e,w),z(k,w,null),n(e,M),b=!0},p(m,$){(!b||$&1)&&r!==(r=m[6]+"")&&W(c,r),(!b||$&1)&&f!==(f=D(m[7])+"")&&W(p,f);const S={};$&1025&&(S.$$scope={dirty:$,ctx:m}),k.$set(S)},i(m){b||(v(k.$$.fragment,m),b=!0)},o(m){B(k.$$.fragment,m),b=!1},d(m){m&&G(e),A(k)}}}function $e(o){let e,t,r,c,_,a,f,p,u,w,k,M,b,m,$=D(o[1])+"",S,Y,K,H,F,N,P,T,R,J,I,L;t=new de({}),c=new ne({});let y=U(o[0]),s=[];for(let l=0;l<y.length;l+=1)s[l]=Z(X(o,y,l));const x=l=>B(s[l],1,1,()=>{s[l]=null});return{c(){e=d("div"),q(t.$$.fragment),r=h(),q(c.$$.fragment),_=h(),a=d("h1"),a.textContent="Manage local storage",f=h(),p=d("a"),p.textContent="Return to the Scheme Sketcher",u=h(),w=d("p"),w.innerHTML=`All sketch files are stored in your browser&#39;s local storage. There&#39;s a 5MB
    size limit, and you&#39;ve been redirected to this page because the last action
    you took exceeds this limit. You must delete some other files first to
    continue. <b>Before you delete a file, you should download a copy.</b>`,k=h(),M=d("p"),M.innerHTML=`If you see this page frequently or have any problems, please contact
    <a href="mailto:dcarlino@turing.ac.uk">Dustin</a>
    and
    <a href="mailto:Peter.York@activetravelengland.gov.uk">Pete</a>
    for help.`,b=h(),m=d("p"),S=C($),Y=C(" / 5 MB is used right now"),K=h(),H=d("progress"),N=h(),P=d("table"),T=d("table"),R=d("thead"),R.innerHTML='<tr><th>Filename</th> <th>Size</th> <th class="govuk-!-width-one-quarter">Actions</th></tr>',J=h(),I=d("tbody");for(let l=0;l<s.length;l+=1)s[l].c();Q(a,"margin-top","30px"),j(p,"href","choose_area.html"),j(p,"class","govuk-back-link"),H.value=F=100*o[1]/(1024*1024*5),j(H,"max","100"),Q(H,"width","100%"),j(e,"class","govuk-width-container govuk-prose")},m(l,g){E(l,e,g),z(t,e,null),n(e,r),z(c,e,null),n(e,_),n(e,a),n(e,f),n(e,p),n(e,u),n(e,w),n(e,k),n(e,M),n(e,b),n(e,m),n(m,S),n(m,Y),n(e,K),n(e,H),n(e,N),n(e,P),n(P,T),n(T,R),n(T,J),n(T,I);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(I,null);L=!0},p(l,[g]){if((!L||g&2)&&$!==($=D(l[1])+"")&&W(S,$),(!L||g&2&&F!==(F=100*l[1]/(1024*1024*5)))&&(H.value=F),g&13){y=U(l[0]);let i;for(i=0;i<y.length;i+=1){const O=X(l,y,i);s[i]?(s[i].p(O,g),v(s[i],1)):(s[i]=Z(O),s[i].c(),v(s[i],1),s[i].m(I,null))}for(se(),i=y.length;i<s.length;i+=1)x(i);le()}},i(l){if(!L){v(t.$$.fragment,l),v(c.$$.fragment,l);for(let g=0;g<y.length;g+=1)v(s[g]);L=!0}},o(l){B(t.$$.fragment,l),B(c.$$.fragment,l),s=s.filter(Boolean);for(let g=0;g<s.length;g+=1)B(s[g]);L=!1},d(l){l&&G(e),A(t),A(c),re(s,l)}}}function D(o){if(o==0)return"0 bytes";let e=1024,t=["bytes","KB","MB"],r=Math.floor(Math.log(o)/Math.log(e));return parseFloat((o/Math.pow(e,r)).toFixed(1))+" "+t[r]}function _e(o,e,t){let r,c=[];ae(()=>{ue(),t(0,c=V())});function _(u){ie(`${u}.geojson`,window.localStorage.getItem(u))}function a(u){window.confirm(`Really delete ${u}?`)&&(window.localStorage.removeItem(u),t(0,c=V()))}const f=u=>_(u),p=u=>a(u);return o.$$.update=()=>{o.$$.dirty&1&&t(1,r=c.reduce((u,w)=>u+w[1],0))},[c,r,_,a,f,p]}class ke extends ee{constructor(e){super(),te(this,e,_e,$e,oe,{})}}document.body.className+=" js-enabled"+("noModule"in HTMLScriptElement.prototype?" govuk-frontend-supported":"");new ke({target:document.getElementById("app")});
