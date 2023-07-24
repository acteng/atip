import{S as G,i as J,s as W,g as U,f as O,e as Z,u as A,m as D,j as M,k as C,x as R,t as w,l as T,p as E,q as k,W as ne,$ as re,r as Le,b as le,c as fe,F as yt,o as ue,a as pe,h as q,v as Ne,w as wt,X as Ue,aV as bt,_ as Tt,P as Qe,B as Xe,aW as Ie,ad as Ye,d as St,O as Ve,R as je,y as me,n as ge,Q as Lt,z as Ut,a6 as Dt,aN as kt,E as Mt,aa as Et}from"./stores-bea337ab.js";import{C as De,S as Ze,d as Ct,M as et,g as Bt,L as zt,Z as At,e as Ot,I as Pt,f as Nt,B as It,b as Vt}from"./Map-4532affb.js";function jt(t){let e=new Map;for(let[r,n]of Object.entries(t.schemes))e.set(r,{scheme_reference:r,num_features:0,authority_or_region:n.authority_or_region,capital_scheme_id:n.capital_scheme_id,funding_programme:n.funding_programme});for(let r of t.features)e.get(r.properties.scheme_reference).num_features++,delete r.properties.id,delete r.properties.authority_or_region,delete r.properties.capital_scheme_id,delete r.properties.funding_programme,delete r.properties.valid,delete r.properties.centroid_lon,delete r.properties.centroid_lat;return e}function Zt(t){let e;return{c(){e=A("Clear")},m(r,n){M(r,e,n)},d(r){r&&E(e)}}}function Ht(t){let e,r,n,s,o,a;return n=new pe({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){e=Z("input"),r=O(),U(n.$$.fragment),q(e,"type","text"),q(e,"class","govuk-input govuk-input--width-10"),q(e,"id","filterText")},m(l,i){M(l,e,i),Ne(e,t[0]),M(l,r,i),D(n,l,i),s=!0,o||(a=wt(e,"input",t[10]),o=!0)},p(l,i){i&1&&e.value!==l[0]&&Ne(e,l[0]);const c={};i&16384&&(c.$$scope={dirty:i,ctx:l}),n.$set(c)},i(l){s||(w(n.$$.fragment,l),s=!0)},o(l){T(n.$$.fragment,l),s=!1},d(l){l&&(E(e),E(r)),k(n,l),o=!1,a()}}}function Ft(t){let e,r,n,s,o,a,l,i;function c(p){t[8](p)}let f={label:"Authority or region",id:"filterAuthority",choices:t[4],emptyOption:!0};t[2]!==void 0&&(f.value=t[2]),e=new Ze({props:f}),le.push(()=>fe(e,"value",c));function u(p){t[9](p)}let _={label:"Funding programme",id:"filterFundingProgramme",choices:t[5],emptyOption:!0};return t[3]!==void 0&&(_.value=t[3]),s=new Ze({props:_}),le.push(()=>fe(s,"value",u)),l=new yt({props:{label:"Intervention name or description",id:"filterText",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),n=O(),U(s.$$.fragment),a=O(),U(l.$$.fragment)},m(p,v){D(e,p,v),M(p,n,v),D(s,p,v),M(p,a,v),D(l,p,v),i=!0},p(p,v){const $={};v&16&&($.choices=p[4]),!r&&v&4&&(r=!0,$.value=p[2],ue(()=>r=!1)),e.$set($);const y={};v&32&&(y.choices=p[5]),!o&&v&8&&(o=!0,y.value=p[3],ue(()=>o=!1)),s.$set(y);const m={};v&16385&&(m.$$scope={dirty:v,ctx:p}),l.$set(m)},i(p){i||(w(e.$$.fragment,p),w(s.$$.fragment,p),w(l.$$.fragment,p),i=!0)},o(p){T(e.$$.fragment,p),T(s.$$.fragment,p),T(l.$$.fragment,p),i=!1},d(p){p&&(E(n),E(a)),k(e,p),k(s,p),k(l,p)}}}function xt(t){let e,r,n,s,o=t[1].size+"",a,l,i=t[6].route+"",c,f,u=t[6].area+"",_,p,v=t[6].crossing+"",$,y,m=t[6].other+"",h,B,d;return e=new De({props:{label:"Filters",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),r=O(),n=Z("p"),s=A("Showing "),a=A(o),l=A(" schemes ("),c=A(i),f=A(" routes, "),_=A(u),p=A(` areas,
  `),$=A(v),y=A(" crossings, "),h=A(m),B=A(" other)")},m(g,b){D(e,g,b),M(g,r,b),M(g,n,b),C(n,s),C(n,a),C(n,l),C(n,c),C(n,f),C(n,_),C(n,p),C(n,$),C(n,y),C(n,h),C(n,B),d=!0},p(g,[b]){const z={};b&16445&&(z.$$scope={dirty:b,ctx:g}),e.$set(z),(!d||b&2)&&o!==(o=g[1].size+"")&&R(a,o),(!d||b&64)&&i!==(i=g[6].route+"")&&R(c,i),(!d||b&64)&&u!==(u=g[6].area+"")&&R(_,u),(!d||b&64)&&v!==(v=g[6].crossing+"")&&R($,v),(!d||b&64)&&m!==(m=g[6].other+"")&&R(h,m)},i(g){d||(w(e.$$.fragment,g),d=!0)},o(g){T(e.$$.fragment,g),d=!1},d(g){g&&(E(r),E(n)),k(e,g)}}}function Kt(t,e,r){let n;ne(t,re,m=>r(12,n=m));let{schemes:s}=e,{schemesToBeShown:o=new Set}=e,{filterText:a=""}=e,l=[],i="",c=[],f="",u={area:0,route:0,crossing:0,other:0};Le(()=>{let m=new Set,h=new Set;for(let B of s.values())B.authority_or_region&&m.add(B.authority_or_region),B.funding_programme&&h.add(B.funding_programme);r(4,l=Array.from(m.entries())),l.sort(),r(5,c=Array.from(h.entries())),c.sort()});function _(m,h,B){let d=m.toLowerCase(),g=z=>{var S,j;if(d&&!((S=z.properties.name)!=null&&S.toLowerCase().includes(d))&&!((j=z.properties.description)!=null&&j.toLowerCase().includes(d)))return!1;if(h||B){let P=s.get(z.properties.scheme_reference);if(h&&P.authority_or_region!=h||B&&P.funding_programme!=B)return!1}return!0};r(1,o=new Set(n.features.filter(g).map(z=>z.properties.scheme_reference))),r(6,u={area:0,route:0,crossing:0,other:0});let b=z=>{var S,j;return!(!o.has(z.properties.scheme_reference)||d&&!((S=z.properties.name)!=null&&S.toLowerCase().includes(d))&&!((j=z.properties.description)!=null&&j.toLowerCase().includes(d)))};re.update(z=>{for(let S of z.features)b(S)?(delete S.properties.hide_while_editing,r(6,u[S.properties.intervention_type]++,u)):S.properties.hide_while_editing=!0;return z}),r(6,u)}function p(m){i=m,r(2,i)}function v(m){f=m,r(3,f)}function $(){a=this.value,r(0,a)}const y=()=>r(0,a="");return t.$$set=m=>{"schemes"in m&&r(7,s=m.schemes),"schemesToBeShown"in m&&r(1,o=m.schemesToBeShown),"filterText"in m&&r(0,a=m.filterText)},t.$$.update=()=>{t.$$.dirty&13&&_(a,i,f)},[a,o,i,f,l,c,u,s,p,v,$,y]}class Rt extends G{constructor(e){super(),J(this,e,Kt,xt,W,{schemes:7,schemesToBeShown:1,filterText:0})}}function qt(t){let e,r,n,s;return e=new Bt({props:{color:t[2]}}),{c(){U(e.$$.fragment),r=O(),n=A(t[1])},m(o,a){D(e,o,a),M(o,r,a),M(o,n,a),s=!0},p(o,a){const l={};a&4&&(l.color=o[2]),e.$set(l),(!s||a&2)&&R(n,o[1])},i(o){s||(w(e.$$.fragment,o),s=!0)},o(o){T(e.$$.fragment,o),s=!1},d(o){o&&(E(r),E(n)),k(e,o)}}}function Gt(t){let e,r,n,s,o;function a(i){t[8](i)}let l={id:t[0],hint:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}};return t[4]!==void 0&&(l.checked=t[4]),e=new Ct({props:l}),le.push(()=>fe(e,"checked",a)),s=new et({props:{layers:[t[0]],contents:t[5]}}),{c(){U(e.$$.fragment),n=O(),U(s.$$.fragment)},m(i,c){D(e,i,c),M(i,n,c),D(s,i,c),o=!0},p(i,[c]){const f={};c&1&&(f.id=i[0]),c&8&&(f.hint=i[3]),c&518&&(f.$$scope={dirty:c,ctx:i}),!r&&c&16&&(r=!0,f.checked=i[4],ue(()=>r=!1)),e.$set(f);const u={};c&1&&(u.layers=[i[0]]),s.$set(u)},i(i){o||(w(e.$$.fragment,i),w(s.$$.fragment,i),o=!0)},o(i){T(e.$$.fragment,i),T(s.$$.fragment,i),o=!1},d(i){i&&E(n),k(e,i),k(s,i)}}}function Jt(t,e,r){let n;ne(t,Ue,_=>r(7,n=_));let{name:s}=e,{singularNoun:o}=e,{pluralNoun:a}=e,{color:l}=e,{hint:i}=e;bt(n,s,`https://atip.uk/layers/v1/${s}.pmtiles`),Tt(n,{id:s,source:s,sourceLayer:s,color:l,opacity:.8});let c=!0;function f(_){return`<div class="govuk-prose"><p>${_.name??`Unnamed ${o}`}</p></div>`}function u(_){c=_,r(4,c)}return t.$$set=_=>{"name"in _&&r(0,s=_.name),"singularNoun"in _&&r(6,o=_.singularNoun),"pluralNoun"in _&&r(1,a=_.pluralNoun),"color"in _&&r(2,l=_.color),"hint"in _&&r(3,i=_.hint)},t.$$.update=()=>{t.$$.dirty&145&&n.getLayer(s)&&n.setLayoutProperty(s,"visibility",c?"visible":"none")},[s,a,l,i,c,f,o,n,u]}class tt extends G{constructor(e){super(),J(this,e,Jt,Gt,W,{name:0,singularNoun:6,pluralNoun:1,color:2,hint:3})}}function Wt(t){let e,r;return e=new tt({props:{name:"hospitals",singularNoun:"hospital",pluralNoun:"Hospitals",color:"blue",hint:"Hospital data from OpenStreetMap. Doesn't include outpatient clinics or individual doctor's offices."}}),{c(){U(e.$$.fragment)},m(n,s){D(e,n,s),r=!0},p:Qe,i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){T(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}class Qt extends G{constructor(e){super(),J(this,e,null,Wt,W,{})}}function Xt(t){let e;return{c(){e=A("Show on map")},m(r,n){M(r,e,n)},d(r){r&&E(e)}}}function Yt(t){let e;return{c(){e=A("Edit scheme")},m(r,n){M(r,e,n)},d(r){r&&E(e)}}}function er(t){let e,r,n=t[0].authority_or_region+"",s,o,a,l,i=t[0].capital_scheme_id+"",c,f,u,_,p=t[0].funding_programme+"",v,$,y,m,h,B,d;return m=new pe({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),m.$on("click",t[1]),B=new pe({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),B.$on("click",t[2]),{c(){e=Z("p"),r=A("Authority or region: "),s=A(n),o=O(),a=Z("p"),l=A("Capital scheme ID: "),c=A(i),f=O(),u=Z("p"),_=A("Funding programme: "),v=A(p),$=O(),y=Z("div"),U(m.$$.fragment),h=O(),U(B.$$.fragment),q(y,"class","govuk-button-group")},m(g,b){M(g,e,b),C(e,r),C(e,s),M(g,o,b),M(g,a,b),C(a,l),C(a,c),M(g,f,b),M(g,u,b),C(u,_),C(u,v),M(g,$,b),M(g,y,b),D(m,y,null),C(y,h),D(B,y,null),d=!0},p(g,b){(!d||b&1)&&n!==(n=g[0].authority_or_region+"")&&R(s,n),(!d||b&1)&&i!==(i=g[0].capital_scheme_id+"")&&R(c,i),(!d||b&1)&&p!==(p=g[0].funding_programme+"")&&R(v,p);const z={};b&32&&(z.$$scope={dirty:b,ctx:g}),m.$set(z);const S={};b&32&&(S.$$scope={dirty:b,ctx:g}),B.$set(S)},i(g){d||(w(m.$$.fragment,g),w(B.$$.fragment,g),d=!0)},o(g){T(m.$$.fragment,g),T(B.$$.fragment,g),d=!1},d(g){g&&(E(e),E(o),E(a),E(f),E(u),E($),E(y)),k(m),k(B)}}}function tr(t){let e,r;return e=new De({props:{label:`${t[0].scheme_reference}: ${t[0].num_features} features`,$$slots:{default:[er]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(n,s){D(e,n,s),r=!0},p(n,[s]){const o={};s&1&&(o.label=`${n[0].scheme_reference}: ${n[0].num_features} features`),s&33&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){T(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}function rr(t,e,r){let n,s;ne(t,re,i=>r(3,n=i)),ne(t,Ue,i=>r(4,s=i));let{scheme:o}=e;function a(){let i={type:"FeatureCollection",features:n.features.filter(c=>c.properties.scheme_reference==o.scheme_reference)};s==null||s.fitBounds(Xe(i),{padding:20,animate:!1})}function l(){let i={type:"FeatureCollection",features:n.features.filter(f=>f.properties.scheme_reference==o.scheme_reference)},c=o.authority_or_region;window.localStorage.setItem(c,JSON.stringify(i)),window.open(`scheme.html?authority=${o.authority_or_region}`,"_blank")}return t.$$set=i=>{"scheme"in i&&r(0,o=i.scheme)},[o,a,l]}class nr extends G{constructor(e){super(),J(this,e,rr,tr,W,{scheme:0})}}function sr(t){let e,r;return e=new tt({props:{name:"schools",singularNoun:"school",pluralNoun:"Schools",color:"red",hint:"Primary and secondary schools, from OpenStreetMap."}}),{c(){U(e.$$.fragment)},m(n,s){D(e,n,s),r=!0},p:Qe,i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){T(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}class or extends G{constructor(e){super(),J(this,e,null,sr,W,{})}}var N=(t,e,r)=>new Promise((n,s)=>{var o=i=>{try{l(r.next(i))}catch(c){s(c)}},a=i=>{try{l(r.throw(i))}catch(c){s(c)}},l=i=>i.done?n(i.value):Promise.resolve(i.value).then(o,a);l((r=r.apply(t,e)).next())}),V=Uint8Array,ee=Uint16Array,ir=Int32Array,rt=new V([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nt=new V([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ar=new V([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),st=function(t,e){for(var r=new ee(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var s=new ir(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)s[o]=o-r[n]<<5|n;return{b:r,r:s}},ot=st(rt,2),it=ot.b,lr=ot.r;it[28]=258,lr[258]=28;var fr=st(nt,0),ur=fr.b,Te=new ee(32768);for(L=0;L<32768;++L)K=(L&43690)>>1|(L&21845)<<1,K=(K&52428)>>2|(K&13107)<<2,K=(K&61680)>>4|(K&3855)<<4,Te[L]=((K&65280)>>8|(K&255)<<8)>>1;var K,L,ae=function(t,e,r){for(var n=t.length,s=0,o=new ee(e);s<n;++s)t[s]&&++o[t[s]-1];var a=new ee(e);for(s=1;s<e;++s)a[s]=a[s-1]+o[s-1]<<1;var l;if(r){l=new ee(1<<e);var i=15-e;for(s=0;s<n;++s)if(t[s])for(var c=s<<4|t[s],f=e-t[s],u=a[t[s]-1]++<<f,_=u|(1<<f)-1;u<=_;++u)l[Te[u]>>i]=c}else for(l=new ee(n),s=0;s<n;++s)t[s]&&(l[s]=Te[a[t[s]-1]++]>>15-t[s]);return l},ce=new V(288);for(L=0;L<144;++L)ce[L]=8;var L;for(L=144;L<256;++L)ce[L]=9;var L;for(L=256;L<280;++L)ce[L]=7;var L;for(L=280;L<288;++L)ce[L]=8;var L,at=new V(32);for(L=0;L<32;++L)at[L]=5;var L,cr=ae(ce,9,1),hr=ae(at,5,1),we=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},F=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},be=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},mr=function(t){return(t+7)/8|0},gr=function(t,e,r){(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length);var n=new V(r-e);return n.set(t.subarray(e,r)),n},pr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(t,e,r){var n=new Error(e||pr[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,I),!r)throw n;return n},ke=function(t,e,r,n){var s=t.length,o=n?n.length:0;if(!s||e.f&&!e.l)return r||new V(0);var a=!r||e.i!=2,l=e.i;r||(r=new V(s*3));var i=function(Ae){var Oe=r.length;if(Ae>Oe){var Pe=new V(Math.max(Oe*2,Ae));Pe.set(r),r=Pe}},c=e.f||0,f=e.p||0,u=e.b||0,_=e.l,p=e.d,v=e.m,$=e.n,y=s*8;do{if(!_){c=F(t,f,1);var m=F(t,f+1,3);if(f+=3,m)if(m==1)_=cr,p=hr,v=9,$=5;else if(m==2){var g=F(t,f,31)+257,b=F(t,f+10,15)+4,z=g+F(t,f+5,31)+1;f+=14;for(var S=new V(z),j=new V(19),P=0;P<b;++P)j[ar[P]]=F(t,f+P*3,7);f+=b*3;for(var Me=we(j),pt=(1<<Me)-1,dt=ae(j,Me,1),P=0;P<z;){var Ee=dt[F(t,f,pt)];f+=Ee&15;var h=Ee>>4;if(h<16)S[P++]=h;else{var Q=0,he=0;for(h==16?(he=3+F(t,f,3),f+=2,Q=S[P-1]):h==17?(he=3+F(t,f,7),f+=3):h==18&&(he=11+F(t,f,127),f+=7);he--;)S[P++]=Q}}var Ce=S.subarray(0,g),H=S.subarray(g);v=we(Ce),$=we(H),_=ae(Ce,v,1),p=ae(H,$,1)}else I(1);else{var h=mr(f)+4,B=t[h-4]|t[h-3]<<8,d=h+B;if(d>s){l&&I(0);break}a&&i(u+B),r.set(t.subarray(h,d),u),e.b=u+=B,e.p=f=d*8,e.f=c;continue}if(f>y){l&&I(0);break}}a&&i(u+131072);for(var _t=(1<<v)-1,$t=(1<<$)-1,_e=f;;_e=f){var Q=_[be(t,f)&_t],X=Q>>4;if(f+=Q&15,f>y){l&&I(0);break}if(Q||I(2),X<256)r[u++]=X;else if(X==256){_e=f,_=null;break}else{var Be=X-254;if(X>264){var P=X-257,se=rt[P];Be=F(t,f,(1<<se)-1)+it[P],f+=se}var $e=p[be(t,f)&$t],ve=$e>>4;$e||I(3),f+=$e&15;var H=ur[ve];if(ve>3){var se=nt[ve];H+=be(t,f)&(1<<se)-1,f+=se}if(f>y){l&&I(0);break}a&&i(u+131072);var ye=u+Be;if(u<H){var ze=o-H,vt=Math.min(H,ye);for(ze+u<0&&I(3);u<vt;++u)r[u]=n[ze+u]}for(;u<ye;u+=4)r[u]=r[u-H],r[u+1]=r[u+1-H],r[u+2]=r[u+2-H],r[u+3]=r[u+3-H];u=ye}}e.l=_,e.p=_e,e.b=u,e.f=c,_&&(c=1,e.m=v,e.d=p,e.n=$)}while(!c);return u==r.length?r:gr(r,0,u)},dr=new V(0),_r=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&I(6,"invalid gzip data");var e=t[3],r=10;e&4&&(r+=(t[10]|t[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!t[r++]);return r+(e&2)},$r=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},vr=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&I(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&I(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function yr(t,e){return ke(t,{i:2},e&&e.out,e&&e.dictionary)}function wr(t,e){var r=_r(t);return r+8>t.length&&I(6,"invalid gzip data"),ke(t.subarray(r,-8),{i:2},e&&e.out||new V($r(t)),e&&e.dictionary)}function br(t,e){return ke(t.subarray(vr(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Se(t,e){return t[0]==31&&t[1]==139&&t[2]==8?wr(t,e):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?yr(t,e):br(t,e)}var Tr=typeof TextDecoder<"u"&&new TextDecoder,Sr=0;try{Tr.decode(dr,{stream:!0}),Sr=1}catch{}var lt=(t,e)=>t*Math.pow(2,e),oe=(t,e)=>Math.floor(t/Math.pow(2,e)),de=(t,e)=>lt(t.getUint16(e+1,!0),8)+t.getUint8(e),ft=(t,e)=>lt(t.getUint32(e+2,!0),16)+t.getUint16(e,!0),Lr=(t,e,r,n,s)=>{if(t!=n.getUint8(s))return t-n.getUint8(s);const o=de(n,s+1);if(e!=o)return e-o;const a=de(n,s+4);return r!=a?r-a:0},Ur=(t,e,r,n)=>{const s=ut(t,e|128,r,n);return s?{z:e,x:r,y:n,offset:s[0],length:s[1],is_dir:!0}:null},He=(t,e,r,n)=>{const s=ut(t,e,r,n);return s?{z:e,x:r,y:n,offset:s[0],length:s[1],is_dir:!1}:null},ut=(t,e,r,n)=>{let s=0,o=t.byteLength/17-1;for(;s<=o;){const a=o+s>>1,l=Lr(e,r,n,t,a*17);if(l>0)s=a+1;else if(l<0)o=a-1;else return[ft(t,a*17+7),t.getUint32(a*17+13,!0)]}return null},Dr=(t,e)=>t.is_dir&&!e.is_dir?1:!t.is_dir&&e.is_dir?-1:t.z!==e.z?t.z-e.z:t.x!==e.x?t.x-e.x:t.y-e.y,ct=(t,e)=>{const r=t.getUint8(e*17);return{z:r&127,x:de(t,e*17+1),y:de(t,e*17+4),offset:ft(t,e*17+7),length:t.getUint32(e*17+13,!0),is_dir:r>>7===1}},Fe=t=>{const e=[],r=new DataView(t);for(let n=0;n<r.byteLength/17;n++)e.push(ct(r,n));return kr(e)},kr=t=>{t.sort(Dr);const e=new ArrayBuffer(17*t.length),r=new Uint8Array(e);for(let n=0;n<t.length;n++){const s=t[n];let o=s.z;s.is_dir&&(o=o|128),r[n*17]=o,r[n*17+1]=s.x&255,r[n*17+2]=s.x>>8&255,r[n*17+3]=s.x>>16&255,r[n*17+4]=s.y&255,r[n*17+5]=s.y>>8&255,r[n*17+6]=s.y>>16&255,r[n*17+7]=s.offset&255,r[n*17+8]=oe(s.offset,8)&255,r[n*17+9]=oe(s.offset,16)&255,r[n*17+10]=oe(s.offset,24)&255,r[n*17+11]=oe(s.offset,32)&255,r[n*17+12]=oe(s.offset,48)&255,r[n*17+13]=s.length&255,r[n*17+14]=s.length>>8&255,r[n*17+15]=s.length>>16&255,r[n*17+16]=s.length>>24&255}return e},Mr=(t,e)=>{if(t.byteLength<17)return null;const r=t.byteLength/17,n=ct(t,r-1);if(n.is_dir){const s=n.z,o=e.z-s,a=Math.trunc(e.x/(1<<o)),l=Math.trunc(e.y/(1<<o));return{z:s,x:a,y:l}}return null};function Er(t){return N(this,null,function*(){const e=yield t.getBytes(0,512e3),r=new DataView(e.data),n=r.getUint32(4,!0),s=r.getUint16(8,!0),o=new TextDecoder("utf-8"),a=JSON.parse(o.decode(new DataView(e.data,10,n)));let l=0;a.compression==="gzip"&&(l=2);let i=0;"minzoom"in a&&(i=+a.minzoom);let c=0;"maxzoom"in a&&(c=+a.maxzoom);let f=0,u=0,_=0,p=-180,v=-85,$=180,y=85;if(a.bounds){const h=a.bounds.split(",");p=+h[0],v=+h[1],$=+h[2],y=+h[3]}if(a.center){const h=a.center.split(",");f=+h[0],u=+h[1],_=+h[2]}return{specVersion:r.getUint16(2,!0),rootDirectoryOffset:10+n,rootDirectoryLength:s*17,jsonMetadataOffset:10,jsonMetadataLength:n,leafDirectoryOffset:0,leafDirectoryLength:void 0,tileDataOffset:0,tileDataLength:void 0,numAddressedTiles:0,numTileEntries:0,numTileContents:0,clustered:!1,internalCompression:1,tileCompression:l,tileType:1,minZoom:i,maxZoom:c,minLon:p,minLat:v,maxLon:$,maxLat:y,centerZoom:_,centerLon:f,centerLat:u,etag:e.etag}})}function Cr(t,e,r,n,s,o,a){return N(this,null,function*(){let l=yield r.getArrayBuffer(e,t.rootDirectoryOffset,t.rootDirectoryLength,t);t.specVersion===1&&(l=Fe(l));const i=He(new DataView(l),n,s,o);if(i){let u=(yield e.getBytes(i.offset,i.length,a)).data;const _=new DataView(u);return _.getUint8(0)==31&&_.getUint8(1)==139&&(u=Se(new Uint8Array(u))),{data:u}}const c=Mr(new DataView(l),{z:n,x:s,y:o});if(c){const f=Ur(new DataView(l),c.z,c.x,c.y);if(f){let u=yield r.getArrayBuffer(e,f.offset,f.length,t);t.specVersion===1&&(u=Fe(u));const _=He(new DataView(u),n,s,o);if(_){let v=(yield e.getBytes(_.offset,_.length,a)).data;const $=new DataView(v);return $.getUint8(0)==31&&$.getUint8(1)==139&&(v=Se(new Uint8Array(v))),{data:v}}}}})}var ht={getHeader:Er,getZxy:Cr},Br=class{constructor(){this.tile=(t,e)=>{if(t.type=="json"){const r=t.url.substr(10);let n=this.tiles.get(r);return n||(n=new xe(r),this.tiles.set(r,n)),n.getHeader().then(s=>{const o={tiles:[t.url+"/{z}/{x}/{y}"],minzoom:s.minZoom,maxzoom:s.maxZoom,bounds:[s.minLon,s.minLat,s.maxLon,s.maxLat]};e(null,o,null,null)}).catch(s=>{e(s,null,null,null)}),{cancel:()=>{}}}else{const r=new RegExp(/pmtiles:\/\/(.+)\/(\d+)\/(\d+)\/(\d+)/),n=t.url.match(r);if(!n)throw new Error("Invalid PMTiles protocol URL");const s=n[1];let o=this.tiles.get(s);o||(o=new xe(s),this.tiles.set(s,o));const a=n[2],l=n[3],i=n[4],c=new AbortController,f=c.signal;let u=()=>{c.abort()};return o.getHeader().then(_=>{o.getZxy(+a,+l,+i,f).then(p=>{p?e(null,new Uint8Array(p.data),p.cacheControl,p.expires):_.tileType==1?e(null,new Uint8Array,null,null):e(null,null,null,null)}).catch(p=>{p.name!=="AbortError"&&e(p,null,null,null)})}),{cancel:u}}},this.tiles=new Map}add(t){this.tiles.set(t.source.getKey(),t)}get(t){return this.tiles.get(t)}};function Y(t,e){return(e>>>0)*4294967296+(t>>>0)}function zr(t,e){const r=e.buf;let n,s;if(s=r[e.pos++],n=(s&112)>>4,s<128||(s=r[e.pos++],n|=(s&127)<<3,s<128)||(s=r[e.pos++],n|=(s&127)<<10,s<128)||(s=r[e.pos++],n|=(s&127)<<17,s<128)||(s=r[e.pos++],n|=(s&127)<<24,s<128)||(s=r[e.pos++],n|=(s&1)<<31,s<128))return Y(t,n);throw new Error("Expected varint not more than 10 bytes")}function ie(t){const e=t.buf;let r,n;return n=e[t.pos++],r=n&127,n<128||(n=e[t.pos++],r|=(n&127)<<7,n<128)||(n=e[t.pos++],r|=(n&127)<<14,n<128)||(n=e[t.pos++],r|=(n&127)<<21,n<128)?r:(n=e[t.pos],r|=(n&15)<<28,zr(r,t))}function Ar(t,e,r,n){if(n==0){r==1&&(e[0]=t-1-e[0],e[1]=t-1-e[1]);const s=e[0];e[0]=e[1],e[1]=s}}var Or=[0,1,5,21,85,341,1365,5461,21845,87381,349525,1398101,5592405,22369621,89478485,357913941,1431655765,5726623061,22906492245,91625968981,366503875925,1466015503701,5864062014805,23456248059221,93824992236885,375299968947541,0x5555555555555];function Pr(t,e,r){if(t>26)throw Error("Tile zoom level exceeds max safe number limit (26)");if(e>Math.pow(2,t)-1||r>Math.pow(2,t)-1)throw Error("tile x/y outside zoom level bounds");const n=Or[t],s=Math.pow(2,t);let o=0,a=0,l=0;const i=[e,r];let c=s/2;for(;c>0;)o=(i[0]&c)>0?1:0,a=(i[1]&c)>0?1:0,l+=c*c*(3*o^a),Ar(c,i,o,a),c=c/2;return n+l}function mt(t,e){return N(this,null,function*(){if(e===1||e===0)return t;if(e===2){if(typeof globalThis.DecompressionStream>"u")return Se(new Uint8Array(t));{let n=new Response(t).body.pipeThrough(new globalThis.DecompressionStream("gzip"));return new Response(n).arrayBuffer()}}else throw Error("Compression method not supported")})}var Nr=127;function Ir(t,e){let r=0,n=t.length-1;for(;r<=n;){const s=n+r>>1,o=e-t[s].tileId;if(o>0)r=s+1;else if(o<0)n=s-1;else return t[s]}return n>=0&&(t[n].runLength===0||e-t[n].tileId<t[n].runLength)?t[n]:null}var Vr=class{constructor(t){this.url=t}getKey(){return this.url}getBytes(t,e,r){return N(this,null,function*(){let n;r||(n=new AbortController,r=n.signal);let s=yield fetch(this.url,{signal:r,headers:{Range:"bytes="+t+"-"+(t+e-1)}});if(s.status===416&&t===0){const l=s.headers.get("Content-Range");if(!l||!l.startsWith("bytes */"))throw Error("Missing content-length on 416 response");const i=+l.substr(8);s=yield fetch(this.url,{signal:r,headers:{Range:"bytes=0-"+(i-1)}})}if(s.status>=300)throw Error("Bad response code: "+s.status);const o=s.headers.get("Content-Length");if(s.status===200&&(!o||+o>e))throw n&&n.abort(),Error("Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving.");return{data:yield s.arrayBuffer(),etag:s.headers.get("ETag")||void 0,cacheControl:s.headers.get("Cache-Control")||void 0,expires:s.headers.get("Expires")||void 0}})}};function x(t,e){const r=t.getUint32(e+4,!0),n=t.getUint32(e+0,!0);return r*Math.pow(2,32)+n}function jr(t,e){const r=new DataView(t),n=r.getUint8(7);if(n>3)throw Error(`Archive is spec version ${n} but this library supports up to spec version 3`);return{specVersion:n,rootDirectoryOffset:x(r,8),rootDirectoryLength:x(r,16),jsonMetadataOffset:x(r,24),jsonMetadataLength:x(r,32),leafDirectoryOffset:x(r,40),leafDirectoryLength:x(r,48),tileDataOffset:x(r,56),tileDataLength:x(r,64),numAddressedTiles:x(r,72),numTileEntries:x(r,80),numTileContents:x(r,88),clustered:r.getUint8(96)===1,internalCompression:r.getUint8(97),tileCompression:r.getUint8(98),tileType:r.getUint8(99),minZoom:r.getUint8(100),maxZoom:r.getUint8(101),minLon:r.getInt32(102,!0)/1e7,minLat:r.getInt32(106,!0)/1e7,maxLon:r.getInt32(110,!0)/1e7,maxLat:r.getInt32(114,!0)/1e7,centerZoom:r.getUint8(118),centerLon:r.getInt32(119,!0)/1e7,centerLat:r.getInt32(123,!0)/1e7,etag:e}}function gt(t){const e={buf:new Uint8Array(t),pos:0},r=ie(e),n=[];let s=0;for(let o=0;o<r;o++){const a=ie(e);n.push({tileId:s+a,offset:0,length:0,runLength:1}),s+=a}for(let o=0;o<r;o++)n[o].runLength=ie(e);for(let o=0;o<r;o++)n[o].length=ie(e);for(let o=0;o<r;o++){const a=ie(e);a===0&&o>0?n[o].offset=n[o-1].offset+n[o-1].length:n[o].offset=a-1}return n}function Zr(t){const e=new DataView(t);return e.getUint16(2,!0)===2?(console.warn("PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),2):e.getUint16(2,!0)===1?(console.warn("PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),1):3}var te=class extends Error{};function Hr(t,e,r,n){return N(this,null,function*(){const s=yield t.getBytes(0,16384);if(new DataView(s.data).getUint16(0,!0)!==19792)throw new Error("Wrong magic number for PMTiles archive");if(Zr(s.data)<3)return[yield ht.getHeader(t)];const a=s.data.slice(0,Nr);let l=s.etag;n&&s.etag!=n&&(console.warn("ETag conflict detected; your HTTP server might not support content-based ETag headers. ETags disabled for "+t.getKey()),l=void 0);const i=jr(a,l);if(r){const c=s.data.slice(i.rootDirectoryOffset,i.rootDirectoryOffset+i.rootDirectoryLength),f=t.getKey()+"|"+(i.etag||"")+"|"+i.rootDirectoryOffset+"|"+i.rootDirectoryLength,u=gt(yield e(c,i.internalCompression));return[i,[f,u.length,u]]}return[i,void 0]})}function Fr(t,e,r,n,s){return N(this,null,function*(){const o=yield t.getBytes(r,n);if(s.etag&&s.etag!==o.etag)throw new te(o.etag);const a=yield e(o.data,s.internalCompression),l=gt(a);if(l.length===0)throw new Error("Empty directory is invalid");return l})}var xr=class{constructor(t=100,e=!0,r=mt){this.cache=new Map,this.maxCacheEntries=t,this.counter=1,this.prefetch=e,this.decompress=r}getHeader(t,e){return N(this,null,function*(){const r=t.getKey();if(this.cache.has(r))return this.cache.get(r).lastUsed=this.counter++,yield this.cache.get(r).data;const n=new Promise((s,o)=>{Hr(t,this.decompress,this.prefetch,e).then(a=>{a[1]&&this.cache.set(a[1][0],{lastUsed:this.counter++,data:Promise.resolve(a[1][2])}),s(a[0]),this.prune()}).catch(a=>{o(a)})});return this.cache.set(r,{lastUsed:this.counter++,data:n}),n})}getDirectory(t,e,r,n){return N(this,null,function*(){const s=t.getKey()+"|"+(n.etag||"")+"|"+e+"|"+r;if(this.cache.has(s))return this.cache.get(s).lastUsed=this.counter++,yield this.cache.get(s).data;const o=new Promise((a,l)=>{Fr(t,this.decompress,e,r,n).then(i=>{a(i),this.prune()}).catch(i=>{l(i)})});return this.cache.set(s,{lastUsed:this.counter++,data:o}),o})}getArrayBuffer(t,e,r,n){return N(this,null,function*(){const s=t.getKey()+"|"+(n.etag||"")+"|"+e+"|"+r;if(this.cache.has(s))return this.cache.get(s).lastUsed=this.counter++,yield this.cache.get(s).data;const o=new Promise((a,l)=>{t.getBytes(e,r).then(i=>{if(n.etag&&n.etag!==i.etag)throw new te(i.etag);a(i.data),this.cache.has(s),this.prune()}).catch(i=>{l(i)})});return this.cache.set(s,{lastUsed:this.counter++,data:o}),o})}prune(){if(this.cache.size>=this.maxCacheEntries){let t=1/0,e;this.cache.forEach((r,n)=>{r.lastUsed<t&&(t=r.lastUsed,e=n)}),e&&this.cache.delete(e)}}invalidate(t,e){return N(this,null,function*(){this.cache.delete(t.getKey()),yield this.getHeader(t,e)})}},xe=class{constructor(t,e,r){typeof t=="string"?this.source=new Vr(t):this.source=t,r?this.decompress=r:this.decompress=mt,e?this.cache=e:this.cache=new xr}getHeader(){return N(this,null,function*(){return yield this.cache.getHeader(this.source)})}getZxyAttempt(t,e,r,n){return N(this,null,function*(){const s=Pr(t,e,r),o=yield this.cache.getHeader(this.source);if(o.specVersion<3)return ht.getZxy(o,this.source,this.cache,t,e,r,n);if(t<o.minZoom||t>o.maxZoom)return;let a=o.rootDirectoryOffset,l=o.rootDirectoryLength;for(let i=0;i<=3;i++){const c=yield this.cache.getDirectory(this.source,a,l,o),f=Ir(c,s);if(f)if(f.runLength>0){const u=yield this.source.getBytes(o.tileDataOffset+f.offset,f.length,n);if(o.etag&&o.etag!==u.etag)throw new te(u.etag);return{data:yield this.decompress(u.data,o.tileCompression),cacheControl:u.cacheControl,expires:u.expires}}else a=o.leafDirectoryOffset+f.offset,l=f.length;else return}throw Error("Maximum directory depth exceeded")})}getZxy(t,e,r,n){return N(this,null,function*(){try{return yield this.getZxyAttempt(t,e,r,n)}catch(s){if(s instanceof te)return this.cache.invalidate(this.source,s.message),yield this.getZxyAttempt(t,e,r,n);throw s}})}getMetadataAttempt(){return N(this,null,function*(){const t=yield this.cache.getHeader(this.source),e=yield this.source.getBytes(t.jsonMetadataOffset,t.jsonMetadataLength);if(t.etag&&t.etag!==e.etag)throw new te(e.etag);const r=yield this.decompress(e.data,t.internalCompression),n=new TextDecoder("utf-8");return JSON.parse(n.decode(r))})}getMetadata(){return N(this,null,function*(){try{return yield this.getMetadataAttempt()}catch(t){if(t instanceof te)return this.cache.invalidate(this.source,t.message),yield this.getMetadataAttempt();throw t}})}};function Kr(t){return Le(()=>{let e=new Br;Ie.addProtocol("pmtiles",e.tile)}),Ye(()=>{Ie.removeProtocol("pmtiles")}),[]}class Rr extends G{constructor(e){super(),J(this,e,Kr,null,W,{})}}function Ke(t,e,r){const n=t.slice();return n[14]=e[r],n}function qr(t){let e;return{c(){e=A("Home")},m(r,n){M(r,e,n)},d(r){r&&E(e)}}}function Re(t){let e,r;return e=new Mt({props:{errorMessage:t[0]}}),{c(){U(e.$$.fragment)},m(n,s){D(e,n,s),r=!0},p(n,s){const o={};s&1&&(o.errorMessage=n[0]),e.$set(o)},i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){T(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}function qe(t){let e,r,n,s;function o(i){t[9](i)}function a(i){t[10](i)}let l={schemes:t[1]};return t[2]!==void 0&&(l.schemesToBeShown=t[2]),t[3]!==void 0&&(l.filterText=t[3]),e=new Rt({props:l}),le.push(()=>fe(e,"schemesToBeShown",o)),le.push(()=>fe(e,"filterText",a)),{c(){U(e.$$.fragment)},m(i,c){D(e,i,c),s=!0},p(i,c){const f={};c&2&&(f.schemes=i[1]),!r&&c&4&&(r=!0,f.schemesToBeShown=i[2],ue(()=>r=!1)),!n&&c&8&&(n=!0,f.filterText=i[3],ue(()=>n=!1)),e.$set(f)},i(i){s||(w(e.$$.fragment,i),s=!0)},o(i){T(e.$$.fragment,i),s=!1},d(i){k(e,i)}}}function Ge(t){let e,r;return e=new nr({props:{scheme:t[14]}}),{c(){U(e.$$.fragment)},m(n,s){D(e,n,s),r=!0},p(n,s){const o={};s&2&&(o.scheme=n[14]),e.$set(o)},i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){T(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}function Je(t){let e=t[2].has(t[14].scheme_reference),r,n,s=e&&Ge(t);return{c(){s&&s.c(),r=Et()},m(o,a){s&&s.m(o,a),M(o,r,a),n=!0},p(o,a){a&6&&(e=o[2].has(o[14].scheme_reference)),e?s?(s.p(o,a),a&6&&w(s,1)):(s=Ge(o),s.c(),w(s,1),s.m(r.parentNode,r)):s&&(me(),T(s,1,1,()=>{s=null}),ge())},i(o){n||(w(s),n=!0)},o(o){T(s),n=!1},d(o){o&&E(r),s&&s.d(o)}}}function Gr(t){let e,r,n,s,o,a,l,i,c,f,u,_,p,v;r=new pe({props:{$$slots:{default:[qr]},$$scope:{ctx:t}}}),r.$on("click",t[8]),l=new At({props:{boundaryGeojson:t[4]}});let $=t[0]&&Re(t);f=new St({props:{label:"Load from GeoJSON",id:"load-geojson",loadFile:t[6]}});let y=t[1].size>0&&qe(t),m=Ve(t[1].values()),h=[];for(let d=0;d<m.length;d+=1)h[d]=Je(Ke(t,m,d));const B=d=>T(h[d],1,1,()=>{h[d]=null});return{c(){e=Z("div"),U(r.$$.fragment),n=O(),s=Z("div"),o=Z("h1"),o.textContent="Browse schemes",a=O(),U(l.$$.fragment),i=O(),$&&$.c(),c=O(),U(f.$$.fragment),u=O(),y&&y.c(),_=O(),p=Z("ul");for(let d=0;d<h.length;d+=1)h[d].c();je(s,"display","flex"),je(s,"justify-content","space-between"),q(e,"slot","sidebar"),q(e,"class","govuk-prose")},m(d,g){M(d,e,g),D(r,e,null),C(e,n),C(e,s),C(s,o),C(s,a),D(l,s,null),C(e,i),$&&$.m(e,null),C(e,c),D(f,e,null),C(e,u),y&&y.m(e,null),C(e,_),C(e,p);for(let b=0;b<h.length;b+=1)h[b]&&h[b].m(p,null);v=!0},p(d,g){const b={};g&131072&&(b.$$scope={dirty:g,ctx:d}),r.$set(b);const z={};if(g&16&&(z.boundaryGeojson=d[4]),l.$set(z),d[0]?$?($.p(d,g),g&1&&w($,1)):($=Re(d),$.c(),w($,1),$.m(e,c)):$&&(me(),T($,1,1,()=>{$=null}),ge()),d[1].size>0?y?(y.p(d,g),g&2&&w(y,1)):(y=qe(d),y.c(),w(y,1),y.m(e,_)):y&&(me(),T(y,1,1,()=>{y=null}),ge()),g&6){m=Ve(d[1].values());let S;for(S=0;S<m.length;S+=1){const j=Ke(d,m,S);h[S]?(h[S].p(j,g),w(h[S],1)):(h[S]=Je(j),h[S].c(),w(h[S],1),h[S].m(p,null))}for(me(),S=m.length;S<h.length;S+=1)B(S);ge()}},i(d){if(!v){w(r.$$.fragment,d),w(l.$$.fragment,d),w($),w(f.$$.fragment,d),w(y);for(let g=0;g<m.length;g+=1)w(h[g]);v=!0}},o(d){T(r.$$.fragment,d),T(l.$$.fragment,d),T($),T(f.$$.fragment,d),T(y),h=h.filter(Boolean);for(let g=0;g<h.length;g+=1)T(h[g]);v=!1},d(d){d&&E(e),k(r),k(l),$&&$.d(),k(f),y&&y.d(),Lt(h,d)}}}function Jr(t){let e,r,n,s;return e=new or({}),n=new Qt({}),{c(){U(e.$$.fragment),r=O(),U(n.$$.fragment)},m(o,a){D(e,o,a),M(o,r,a),D(n,o,a),s=!0},i(o){s||(w(e.$$.fragment,o),w(n.$$.fragment,o),s=!0)},o(o){T(e.$$.fragment,o),T(n.$$.fragment,o),s=!1},d(o){o&&E(r),k(e,o),k(n,o)}}}function Wr(t){let e,r,n,s;return e=new It({props:{style:t[5]}}),n=new Vt({props:{small:!0,$$slots:{default:[Jr]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),r=O(),U(n.$$.fragment)},m(o,a){D(e,o,a),M(o,r,a),D(n,o,a),s=!0},p(o,a){const l={};a&131072&&(l.$$scope={dirty:a,ctx:o}),n.$set(l)},i(o){s||(w(e.$$.fragment,o),w(n.$$.fragment,o),s=!0)},o(o){T(e.$$.fragment,o),T(n.$$.fragment,o),s=!1},d(o){o&&E(r),k(e,o),k(n,o)}}}function Qr(t){let e,r,n,s,o,a,l,i,c;return e=new Pt({props:{schema:We}}),n=new Nt({props:{schema:We}}),o=new et({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:t[7]}}),i=new De({props:{label:"Layers",open:!0,$$slots:{default:[Wr]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment),r=O(),U(n.$$.fragment),s=O(),U(o.$$.fragment),a=O(),l=Z("div"),U(i.$$.fragment),q(l,"class","top-right svelte-nlvvhu")},m(f,u){D(e,f,u),M(f,r,u),D(n,f,u),M(f,s,u),D(o,f,u),M(f,a,u),M(f,l,u),D(i,l,null),c=!0},p(f,u){const _={};u&131072&&(_.$$scope={dirty:u,ctx:f}),i.$set(_)},i(f){c||(w(e.$$.fragment,f),w(n.$$.fragment,f),w(o.$$.fragment,f),w(i.$$.fragment,f),c=!0)},o(f){T(e.$$.fragment,f),T(n.$$.fragment,f),T(o.$$.fragment,f),T(i.$$.fragment,f),c=!1},d(f){f&&(E(r),E(s),E(a),E(l)),k(e,f),k(n,f),k(o,f),k(i)}}}function Xr(t){let e,r,n,s,o;return r=new Rr({}),s=new Ot({props:{style:t[5],$$slots:{default:[Qr]},$$scope:{ctx:t}}}),{c(){e=Z("div"),U(r.$$.fragment),n=O(),U(s.$$.fragment),q(e,"slot","main")},m(a,l){M(a,e,l),D(r,e,null),C(e,n),D(s,e,null),o=!0},p(a,l){const i={};l&131072&&(i.$$scope={dirty:l,ctx:a}),s.$set(i)},i(a){o||(w(r.$$.fragment,a),w(s.$$.fragment,a),o=!0)},o(a){T(r.$$.fragment,a),T(s.$$.fragment,a),o=!1},d(a){a&&E(e),k(r),k(s)}}}function Yr(t){let e,r;return e=new zt({props:{$$slots:{main:[Xr],sidebar:[Gr]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(n,s){D(e,n,s),r=!0},p(n,[s]){const o={};s&131103&&(o.$$scope={dirty:s,ctx:n}),e.$set(o)},i(n){r||(w(e.$$.fragment,n),r=!0)},o(n){T(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}const We="v1";function en(t,e,r){let n,s;ne(t,Ue,m=>r(11,n=m)),ne(t,re,m=>r(4,s=m)),Le(()=>{Ut()});let a=new URLSearchParams(window.location.search).get("style")||"streets",l="",i=new Map,c=new Set,f="";Ye(()=>{re.set(Dt())});function u(m){try{let h=JSON.parse(m);r(1,i=jt(h)),re.set(h),r(0,l=""),n==null||n.fitBounds(Xe(h),{padding:20,animate:!1})}catch(h){r(0,l=`Couldn't load schemes from a file: ${h}`)}}function _(m){var h='<div class="govuk-prose" style="max-width: 30vw;">';return h+=`<h2>${p(m.name)} (${m.intervention_type})</h2>`,h+=`<p>Scheme reference: ${m.scheme_reference}</p>`,m.length_meters&&(h+=`<p>Length: ${kt(m.length_meters)}</p>`),m.description&&(h+=`<p>${p(m.description)}</p>`),h}function p(m){return f?m.replace(new RegExp(f,"gi"),h=>`<mark>${h}</mark>`):m}const v=()=>window.open("index.html");function $(m){c=m,r(2,c)}function y(m){f=m,r(3,f)}return[l,i,c,f,s,a,u,_,v,$,y]}class tn extends G{constructor(e){super(),J(this,e,en,Yr,W,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new tn({target:document.getElementById("app")});
