import{S as G,i as J,s as Q,aW as he,b as L,c as P,g as k,m as v,l as A,t as _,n as b,q as D,N as de,C as ge,aZ as ke,F as ie,d as y,j as w,p as h,E as ae,e as R,h as E,v as F,w as W,aA as ve,u as Y,M as De,a as ye,k as T,am as Ce,r as Se,f as $e,L as Ie,y as _e,o as be,z as Ee,x as re}from"./index-8ed7da87.js";import{e as le,b as Me,d as Re,L as Te,M as Be,S as Le}from"./StreetViewController-d9ea354e.js";import{D as Pe}from"./DefaultButton-65043d9a.js";import{T as we,W as Ae}from"./WarningButton-66cec84e.js";import{P as je}from"./Pin-ea7bdf64.js";function Fe(s){let e,t,n;function a(o){s[3](o)}let r={label:"Basemap",id:"basemap",choices:he(),disabled:s[1]};return s[0]!==void 0&&(r.value=s[0]),e=new le({props:r}),L.push(()=>P(e,"value",a)),e.$on("change",s[2]),{c(){k(e.$$.fragment)},m(o,l){v(e,o,l),n=!0},p(o,[l]){const i={};l&2&&(i.disabled=o[1]),!t&&l&1&&(t=!0,i.value=o[0],A(()=>t=!1)),e.$set(i)},i(o){n||(_(e.$$.fragment,o),n=!0)},o(o){b(e.$$.fragment,o),n=!1},d(o){D(e,o)}}}function qe(s,e,t){let n;de(s,ge,i=>t(4,n=i));let{style:a}=e,{disabled:r}=e;async function o(){n.setStyle(await ke(a))}function l(i){a=i,t(0,a)}return s.$$set=i=>{"style"in i&&t(0,a=i.style),"disabled"in i&&t(1,r=i.disabled)},[a,r,o,l]}class Ve extends G{constructor(e){super(),J(this,e,qe,Fe,Q,{style:0,disabled:1})}}function We(s){let e,t,n,a,r,o;return e=new ae({props:{errorMessage:s[1]}}),{c(){k(e.$$.fragment),t=y(),n=R("input"),E(n,"type","text"),E(n,"class","govuk-input"),E(n,"id","locationDescription")},m(l,i){v(e,l,i),w(l,t,i),w(l,n,i),F(n,s[0]),a=!0,r||(o=[W(n,"input",s[5]),W(n,"change",s[3])],r=!0)},p(l,i){const c={};i&2&&(c.errorMessage=l[1]),e.$set(c),i&1&&n.value!==l[0]&&F(n,l[0])},i(l){a||(_(e.$$.fragment,l),a=!0)},o(l){b(e.$$.fragment,l),a=!1},d(l){l&&(h(t),h(n)),D(e,l),r=!1,ve(o)}}}function Ne(s){let e;return{c(){e=Y("Lookup location description automatically")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function Oe(s){let e,t,n;function a(o){s[6](o)}let r={id:"lookupLocation",$$slots:{default:[Ne]},$$scope:{ctx:s}};return s[2]!==void 0&&(r.checked=s[2]),e=new Re({props:r}),L.push(()=>P(e,"checked",a)),{c(){k(e.$$.fragment)},m(o,l){v(e,o,l),n=!0},p(o,l){const i={};l&256&&(i.$$scope={dirty:l,ctx:o}),!t&&l&4&&(t=!0,i.checked=o[2],A(()=>t=!1)),e.$set(i)},i(o){n||(_(e.$$.fragment,o),n=!0)},o(o){b(e.$$.fragment,o),n=!1},d(o){D(e,o)}}}function He(s){let e,t,n,a;return e=new ie({props:{label:"Describe this location",id:"locationDescription",$$slots:{default:[We]},$$scope:{ctx:s}}}),n=new Me({props:{small:!0,$$slots:{default:[Oe]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=y(),k(n.$$.fragment)},m(r,o){v(e,r,o),w(r,t,o),v(n,r,o),a=!0},p(r,[o]){const l={};o&259&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const i={};o&260&&(i.$$scope={dirty:o,ctx:r}),n.$set(i)},i(r){a||(_(e.$$.fragment,r),_(n.$$.fragment,r),a=!0)},o(r){b(e.$$.fragment,r),b(n.$$.fragment,r),a=!1},d(r){r&&h(t),D(e,r),D(n,r)}}}function ze(s,e,t){let{locationDescription:n}=e,{locationDescriptionError:a}=e,{pt:r}=e,o=!0;async function l(f){if(!o)return;let p=`https://nominatim.openstreetmap.org/reverse?lat=${f.lat}&lon=${f.lng}&format=json`;try{t(0,n="Loading...");let m=await(await fetch(p)).json();t(0,n=m.address.road??m.display_name)}catch(g){console.log(`Location lookup failed: ${g}`)}}function i(){t(2,o=!1)}function c(){n=this.value,t(0,n)}function $(f){o=f,t(2,o)}return s.$$set=f=>{"locationDescription"in f&&t(0,n=f.locationDescription),"locationDescriptionError"in f&&t(1,a=f.locationDescriptionError),"pt"in f&&t(4,r=f.pt)},s.$$.update=()=>{s.$$.dirty&16&&l(r)},[n,a,o,i,r,c,$]}class Ke extends G{constructor(e){super(),J(this,e,ze,He,Q,{locationDescription:0,locationDescriptionError:1,pt:4})}}function Ue(s){let e,t,n,a,r,o;return e=new ae({props:{errorMessage:s[7]}}),{c(){k(e.$$.fragment),t=y(),n=R("input"),E(n,"type","text"),E(n,"class","govuk-input"),E(n,"id","inspector")},m(l,i){v(e,l,i),w(l,t,i),w(l,n,i),F(n,s[1]),a=!0,r||(o=W(n,"input",s[18]),r=!0)},p(l,i){const c={};i&128&&(c.errorMessage=l[7]),e.$set(c),i&2&&n.value!==l[1]&&F(n,l[1])},i(l){a||(_(e.$$.fragment,l),a=!0)},o(l){b(e.$$.fragment,l),a=!1},d(l){l&&(h(t),h(n)),D(e,l),r=!1,o()}}}function Ge(s){let e,t,n,a,r,o,l,i;return n=new ae({props:{errorMessage:s[8]}}),{c(){e=R("div"),e.textContent="Example: ATF2_WLT_01",t=y(),k(n.$$.fragment),a=y(),r=R("input"),E(e,"class","govuk-hint"),E(r,"type","text"),E(r,"class","govuk-input"),E(r,"id","schemeReference")},m(c,$){w(c,e,$),w(c,t,$),v(n,c,$),w(c,a,$),w(c,r,$),F(r,s[2]),o=!0,l||(i=W(r,"input",s[19]),l=!0)},p(c,$){const f={};$&256&&(f.errorMessage=c[8]),n.$set(f),$&4&&r.value!==c[2]&&F(r,c[2])},i(c){o||(_(n.$$.fragment,c),o=!0)},o(c){b(n.$$.fragment,c),o=!1},d(c){c&&(h(e),h(t),h(a),h(r)),D(n,c),l=!1,i()}}}function Je(s){let e;return{c(){e=Y("Export")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function Qe(s){let e;return{c(){e=Y("Keep editing this issue")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function Ye(s){let e;return{c(){e=Y("Done! Enter a new critical")},m(t,n){w(t,e,n)},d(t){t&&h(e)}}}function Ze(s){let e,t,n,a,r,o,l,i,c,$,f,p;return o=new we({props:{label:"The new row has already been copied to your clipboard. If it didn't work, copy from below",value:s[14]}}),c=new ye({props:{$$slots:{default:[Qe]},$$scope:{ctx:s}}}),c.$on("click",s[24]),f=new Ae({props:{$$slots:{default:[Ye]},$$scope:{ctx:s}}}),f.$on("click",et),{c(){e=R("div"),t=R("p"),t.innerHTML=`Edit <i>Inspectors Log.xlsx</i>
      , add a new row at the bottom of
      <i>Form Input</i>
      , and press
      <i>Control+V</i>
      to paste.`,n=y(),a=R("p"),a.innerHTML="<b>You have to manually fill out the first ID column!</b>",r=y(),k(o.$$.fragment),l=y(),i=R("div"),k(c.$$.fragment),$=y(),k(f.$$.fragment),E(i,"class","govuk-button-group"),E(e,"class","govuk-prose")},m(g,m){w(g,e,m),T(e,t),T(e,n),T(e,a),T(e,r),v(o,e,null),T(e,l),T(e,i),v(c,i,null),T(i,$),v(f,i,null),p=!0},p(g,m){const C={};m&16384&&(C.value=g[14]),o.$set(C);const S={};m&134217728&&(S.$$scope={dirty:m,ctx:g}),c.$set(S);const M={};m&134217728&&(M.$$scope={dirty:m,ctx:g}),f.$set(M)},i(g){p||(_(o.$$.fragment,g),_(c.$$.fragment,g),_(f.$$.fragment,g),p=!0)},o(g){b(o.$$.fragment,g),b(c.$$.fragment,g),b(f.$$.fragment,g),p=!1},d(g){g&&h(e),D(o),D(c),D(f)}}}function Xe(s){let e,t,n,a,r,o,l,i,c,$,f,p,g,m,C,S,M,q,B,V,j;e=new ie({props:{label:"Inspector name",id:"inspector",$$slots:{default:[Ue]},$$scope:{ctx:s}}}),n=new ie({props:{label:"Scheme reference",id:"schemeReference",$$slots:{default:[Ge]},$$scope:{ctx:s}}});function Z(u){s[20](u)}let N={label:"Current design stage",id:"currentDesignStage",choices:s[15],emptyOption:!0,errorMessage:s[9]};s[3]!==void 0&&(N.value=s[3]),r=new le({props:N}),L.push(()=>P(r,"value",Z));function X(u){s[21](u)}let O={pt:s[0],locationDescriptionError:s[11]};s[5]!==void 0&&(O.locationDescription=s[5]),i=new Ke({props:O}),L.push(()=>P(i,"locationDescription",X));function x(u){s[22](u)}let H={label:"Critical issue type",id:"criticalIssueType",choices:s[16],emptyOption:!0,errorMessage:s[10]};s[4]!==void 0&&(H.value=s[4]),f=new le({props:H}),L.push(()=>P(f,"value",x));function ee(u){s[23](u)}let z={label:"Comments or notes",errorMessage:s[12]};s[6]!==void 0&&(z.value=s[6]),m=new we({props:z}),L.push(()=>P(m,"value",ee)),M=new Pe({props:{$$slots:{default:[Je]},$$scope:{ctx:s}}}),M.$on("click",s[17]);function I(u){s[25](u)}let K={title:"Almost done!",displayEscapeButton:!1,canCloseByClickingBackground:!1,$$slots:{default:[Ze]},$$scope:{ctx:s}};return s[13]!==void 0&&(K.open=s[13]),B=new De({props:K}),L.push(()=>P(B,"open",I)),{c(){k(e.$$.fragment),t=y(),k(n.$$.fragment),a=y(),k(r.$$.fragment),l=y(),k(i.$$.fragment),$=y(),k(f.$$.fragment),g=y(),k(m.$$.fragment),S=y(),k(M.$$.fragment),q=y(),k(B.$$.fragment)},m(u,d){v(e,u,d),w(u,t,d),v(n,u,d),w(u,a,d),v(r,u,d),w(u,l,d),v(i,u,d),w(u,$,d),v(f,u,d),w(u,g,d),v(m,u,d),w(u,S,d),v(M,u,d),w(u,q,d),v(B,u,d),j=!0},p(u,[d]){const ue={};d&134217858&&(ue.$$scope={dirty:d,ctx:u}),e.$set(ue);const fe={};d&134217988&&(fe.$$scope={dirty:d,ctx:u}),n.$set(fe);const te={};d&512&&(te.errorMessage=u[9]),!o&&d&8&&(o=!0,te.value=u[3],A(()=>o=!1)),r.$set(te);const U={};d&1&&(U.pt=u[0]),d&2048&&(U.locationDescriptionError=u[11]),!c&&d&32&&(c=!0,U.locationDescription=u[5],A(()=>c=!1)),i.$set(U);const ne={};d&1024&&(ne.errorMessage=u[10]),!p&&d&16&&(p=!0,ne.value=u[4],A(()=>p=!1)),f.$set(ne);const se={};d&4096&&(se.errorMessage=u[12]),!C&&d&64&&(C=!0,se.value=u[6],A(()=>C=!1)),m.$set(se);const ce={};d&134217728&&(ce.$$scope={dirty:d,ctx:u}),M.$set(ce);const oe={};d&134242304&&(oe.$$scope={dirty:d,ctx:u}),!V&&d&8192&&(V=!0,oe.open=u[13],A(()=>V=!1)),B.$set(oe)},i(u){j||(_(e.$$.fragment,u),_(n.$$.fragment,u),_(r.$$.fragment,u),_(i.$$.fragment,u),_(f.$$.fragment,u),_(m.$$.fragment,u),_(M.$$.fragment,u),_(B.$$.fragment,u),j=!0)},o(u){b(e.$$.fragment,u),b(n.$$.fragment,u),b(r.$$.fragment,u),b(i.$$.fragment,u),b(f.$$.fragment,u),b(m.$$.fragment,u),b(M.$$.fragment,u),b(B.$$.fragment,u),j=!1},d(u){u&&(h(t),h(a),h(l),h($),h(g),h(S),h(q)),D(e,u),D(n,u),D(r,u),D(i,u),D(f,u),D(m,u),D(M,u),D(B,u)}}}function pe(s){return s.map(e=>[e,e])}function xe(s){let e=25569,n=24*(60*60*1e3);return s.getTime()/n+e}function et(){location.reload()}function tt(s,e,t){let{pt:n}=e,a=window.localStorage.getItem("inspector")??"",r=window.localStorage.getItem("schemeReference")??"",o=window.localStorage.getItem("currentDesignStage")??"",l="",i="",c="",$="",f="",p="",g="",m="",C="",S=!1,M="",q=pe(["Baseline","Feasibility Design","Preliminary Design","Outline Design","Detailed Design","Inspection"]),B=pe(["1 - Conflict at Side Roads","2 - Conflict at Major Junctions / Roundabouts","3 - Collision Alongside or from Behind","4 - Trip Hazard","5 - Kerbside Activity","6A - Risk of Crossing Conflict (Busy Roads)","6B - Risk of Crossing Conflict (Quieter Roads)","7A - Standard of Crossing Facility (Busy Roads)","7B - Standard of Crossing Facility (Junction)","8 - Traffic Speed (>37mph)","9A - Traffic Volume (>10,000vpd)","9B - Traffic Volume (>5% HGVs)","10 - Crossing Speed","11A - Footway Width (Absolute Minimum <1m)","11B - Footway Width (at Pinchpoints)","11C - Footway Width - Poor Pedestrian Comfort","12 - Tram - Insufficient width next to Tram Track","13 - Tram/Rail - Poor Crossing Angle","14 - Major Cycle Surface Defect","15 - Major Pedestrian Surface Defect","16 - Inappropriate Shared Use","17 - Barriers, Steps and/or Dismount signs","18 - Route isn't direct, logical or intuitive to all users","19 - Inappropriate Surface Materials","20 - Inappropriate Lighting","21 - Routes must join other facilities as a network"]);function V(){let I=0,K=xe(new Date);return[I,a,K,r,o,l,Ce(n.toArray().reverse()).join(", "),i,c].join("	")}function j(){t(7,$=a?"":"Required"),t(8,f=r?"":"Required"),t(9,p=o?"":"Required"),t(10,g=l?"":"Required"),t(11,m=i?"":"Required"),t(12,C=c?"":"Required"),!($||f||p||g||m||C)&&(t(14,M=V()),navigator.clipboard.writeText(M),t(13,S=!0))}function Z(){a=this.value,t(1,a)}function N(){r=this.value,t(2,r)}function X(I){o=I,t(3,o)}function O(I){i=I,t(5,i)}function x(I){l=I,t(4,l)}function H(I){c=I,t(6,c)}const ee=()=>t(13,S=!1);function z(I){S=I,t(13,S)}return s.$$set=I=>{"pt"in I&&t(0,n=I.pt)},s.$$.update=()=>{s.$$.dirty&2&&window.localStorage.setItem("inspector",a),s.$$.dirty&4&&window.localStorage.setItem("schemeReference",r),s.$$.dirty&8&&window.localStorage.setItem("currentDesignStage",o)},[n,a,r,o,l,i,c,$,f,p,g,m,C,S,M,q,B,j,Z,N,X,O,x,H,ee,z]}class nt extends G{constructor(e){super(),J(this,e,tt,Xe,Q,{pt:0})}}function st(s){let e;return{c(){e=R("p"),e.textContent="Click the map to add a critical"},m(t,n){w(t,e,n)},p:re,i:re,o:re,d(t){t&&h(e)}}}function ot(s){let e,t;return e=new nt({props:{pt:s[0]}}),{c(){k(e.$$.fragment)},m(n,a){v(e,n,a),t=!0},p(n,a){const r={};a&1&&(r.pt=n[0]),e.$set(r)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function rt(s){let e,t,n,a,r,o,l,i,c,$;o=new Ie({});const f=[ot,st],p=[];function g(m,C){return m[0]?0:1}return i=g(s),c=p[i]=f[i](s),{c(){e=R("div"),t=R("h1"),t.textContent="Critical issue entry",n=y(),a=R("p"),a.textContent=`App version: ${$e()}`,r=y(),k(o.$$.fragment),l=y(),c.c(),E(e,"slot","sidebar"),E(e,"class","govuk-prose")},m(m,C){w(m,e,C),T(e,t),T(e,n),T(e,a),T(e,r),v(o,e,null),T(e,l),p[i].m(e,null),$=!0},p(m,C){let S=i;i=g(m),i===S?p[i].p(m,C):(_e(),b(p[S],1,1,()=>{p[S]=null}),be(),c=p[i],c?c.p(m,C):(c=p[i]=f[i](m),c.c()),_(c,1),c.m(e,null))},i(m){$||(_(o.$$.fragment,m),_(c),$=!0)},o(m){b(o.$$.fragment,m),b(c),$=!1},d(m){m&&h(e),D(o),p[i].d()}}}function me(s){let e,t,n;function a(o){s[5](o)}let r={markerPositionUpdated:ut};return s[0]!==void 0&&(r.markerPosition=s[0]),e=new je({props:r}),L.push(()=>P(e,"markerPosition",a)),{c(){k(e.$$.fragment)},m(o,l){v(e,o,l),n=!0},p(o,l){const i={};!t&&l&1&&(t=!0,i.markerPosition=o[0],A(()=>t=!1)),e.$set(i)},i(o){n||(_(e.$$.fragment,o),n=!0)},o(o){b(e.$$.fragment,o),n=!1},d(o){D(e,o)}}}function it(s){let e,t,n,a,r,o,l,i=s[0]&&me(s);n=new Ve({props:{style:s[3],disabled:!s[1]}});function c(f){s[7](f)}let $={displayEnableButton:!0};return s[1]!==void 0&&($.isInactive=s[1]),r=new Le({props:$}),s[6](r),L.push(()=>P(r,"isInactive",c)),{c(){i&&i.c(),e=y(),t=R("div"),k(n.$$.fragment),a=y(),k(r.$$.fragment),E(t,"class","top-right svelte-nlvvhu")},m(f,p){i&&i.m(f,p),w(f,e,p),w(f,t,p),v(n,t,null),T(t,a),v(r,t,null),l=!0},p(f,p){f[0]?i?(i.p(f,p),p&1&&_(i,1)):(i=me(f),i.c(),_(i,1),i.m(e.parentNode,e)):i&&(_e(),b(i,1,1,()=>{i=null}),be());const g={};p&2&&(g.disabled=!f[1]),n.$set(g);const m={};!o&&p&2&&(o=!0,m.isInactive=f[1],A(()=>o=!1)),r.$set(m)},i(f){l||(_(i),_(n.$$.fragment,f),_(r.$$.fragment,f),l=!0)},o(f){b(i),b(n.$$.fragment,f),b(r.$$.fragment,f),l=!1},d(f){f&&(h(e),h(t)),i&&i.d(f),D(n),s[6](null),D(r)}}}function lt(s){let e,t,n;return t=new Be({props:{style:s[3],startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[it]},$$scope:{ctx:s}}}),{c(){e=R("div"),k(t.$$.fragment),E(e,"slot","main")},m(a,r){w(a,e,r),v(t,e,null),n=!0},p(a,r){const o={};r&519&&(o.$$scope={dirty:r,ctx:a}),t.$set(o)},i(a){n||(_(t.$$.fragment,a),n=!0)},o(a){b(t.$$.fragment,a),n=!1},d(a){a&&h(e),D(t)}}}function at(s){let e,t,n,a;return e=new Te({props:{sidebarWidth:"35rem",$$slots:{main:[lt],sidebar:[rt]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment)},m(r,o){v(e,r,o),t=!0,n||(a=W(window,"keydown",s[4]),n=!0)},p(r,[o]){const l={};o&519&&(l.$$scope={dirty:o,ctx:r}),e.$set(l)},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){b(e.$$.fragment,r),t=!1},d(r){D(e,r),n=!1,a()}}}const ut=()=>{};function ft(s,e,t){let n;de(s,ge,p=>t(8,n=p)),Se(()=>{Ee(),n.on("click",p=>{t(0,r=p.lngLat)})});let a=$e()=="Private (development)"?"Road":"dataviz",r,o=!0,l;function i(p){!o&&p.key=="Escape"&&(l.disableStreetView(),p.preventDefault())}function c(p){r=p,t(0,r)}function $(p){L[p?"unshift":"push"](()=>{l=p,t(2,l)})}function f(p){o=p,t(1,o)}return[r,o,l,a,i,c,$,f]}class ct extends G{constructor(e){super(),J(this,e,ft,at,Q,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new ct({target:document.getElementById("app")});
