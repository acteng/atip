import{S as z,i as Q,s as Y,F as ie,g as h,d as y,m as k,j as b,t as d,n as _,o as w,p as v,E as ae,e as T,h as R,v as G,w as U,H as be,b as j,c as F,l as q,u as X,aP as we,k as P,aO as he,a as ke,q as ge,ae as ve,r as $e,P as De,b5 as Ce,f as de,aV as ce,L as ye,J as Se,K as Me,M as Ee,y as Le,W as se}from"./index-d279fda0.js";import{f as Re,h as Ie,j as pe,B as Te,G as Pe,k as Be,S as Ae}from"./StreetViewTool-51178e1c.js";import{D as je}from"./DefaultButton-02cd9534.js";import{T as _e,W as Fe}from"./WarningButton-7f78b545.js";import{a as qe,L as We}from"./LineMeasureController-24fdac7c.js";function Ve(o){let e,n,t,l,r,s;return e=new ae({props:{errorMessage:o[1]}}),{c(){h(e.$$.fragment),n=y(),t=T("input"),R(t,"type","text"),R(t,"class","govuk-input"),R(t,"id","locationDescription")},m(i,a){k(e,i,a),b(i,n,a),b(i,t,a),G(t,o[0]),l=!0,r||(s=[U(t,"input",o[5]),U(t,"change",o[3])],r=!0)},p(i,a){const f={};a&2&&(f.errorMessage=i[1]),e.$set(f),a&1&&t.value!==i[0]&&G(t,i[0])},i(i){l||(d(e.$$.fragment,i),l=!0)},o(i){_(e.$$.fragment,i),l=!1},d(i){i&&(w(n),w(t)),v(e,i),r=!1,be(s)}}}function Ge(o){let e;return{c(){e=X("Lookup location description automatically")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function He(o){let e,n,t;function l(s){o[6](s)}let r={id:"lookupLocation",$$slots:{default:[Ge]},$$scope:{ctx:o}};return o[2]!==void 0&&(r.checked=o[2]),e=new Ie({props:r}),j.push(()=>F(e,"checked",l)),{c(){h(e.$$.fragment)},m(s,i){k(e,s,i),t=!0},p(s,i){const a={};i&256&&(a.$$scope={dirty:i,ctx:s}),!n&&i&4&&(n=!0,a.checked=s[2],q(()=>n=!1)),e.$set(a)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){v(e,s)}}}function Oe(o){let e,n,t,l;return e=new ie({props:{label:"Describe this location",id:"locationDescription",$$slots:{default:[Ve]},$$scope:{ctx:o}}}),t=new Re({props:{small:!0,$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment),n=y(),h(t.$$.fragment)},m(r,s){k(e,r,s),b(r,n,s),k(t,r,s),l=!0},p(r,[s]){const i={};s&259&&(i.$$scope={dirty:s,ctx:r}),e.$set(i);const a={};s&260&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){l||(d(e.$$.fragment,r),d(t.$$.fragment,r),l=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),l=!1},d(r){r&&w(n),v(e,r),v(t,r)}}}function Je(o,e,n){let{locationDescription:t}=e,{locationDescriptionError:l}=e,{pt:r}=e,s=!0;async function i(m){if(!s)return;let D=`https://nominatim.openstreetmap.org/reverse?lat=${m.lat}&lon=${m.lng}&format=json`;try{n(0,t="Loading...");let g=await(await fetch(D)).json();n(0,t=g.address.road??g.display_name)}catch(C){console.log(`Location lookup failed: ${C}`)}}function a(){n(2,s=!1)}function f(){t=this.value,n(0,t)}function c(m){s=m,n(2,s)}return o.$$set=m=>{"locationDescription"in m&&n(0,t=m.locationDescription),"locationDescriptionError"in m&&n(1,l=m.locationDescriptionError),"pt"in m&&n(4,r=m.pt)},o.$$.update=()=>{o.$$.dirty&16&&i(r)},[t,l,s,a,r,f,c]}class Ke extends z{constructor(e){super(),Q(this,e,Je,Oe,Y,{locationDescription:0,locationDescriptionError:1,pt:4})}}function Ne(o){let e,n,t,l,r,s;return e=new ae({props:{errorMessage:o[7]}}),{c(){h(e.$$.fragment),n=y(),t=T("input"),R(t,"type","text"),R(t,"class","govuk-input"),R(t,"id","inspector")},m(i,a){k(e,i,a),b(i,n,a),b(i,t,a),G(t,o[1]),l=!0,r||(s=U(t,"input",o[18]),r=!0)},p(i,a){const f={};a&128&&(f.errorMessage=i[7]),e.$set(f),a&2&&t.value!==i[1]&&G(t,i[1])},i(i){l||(d(e.$$.fragment,i),l=!0)},o(i){_(e.$$.fragment,i),l=!1},d(i){i&&(w(n),w(t)),v(e,i),r=!1,s()}}}function Ue(o){let e,n,t,l,r,s,i,a;return t=new ae({props:{errorMessage:o[8]}}),{c(){e=T("div"),e.textContent="Example: ATF2_WLT_01",n=y(),h(t.$$.fragment),l=y(),r=T("input"),R(e,"class","govuk-hint"),R(r,"type","text"),R(r,"class","govuk-input"),R(r,"id","schemeReference")},m(f,c){b(f,e,c),b(f,n,c),k(t,f,c),b(f,l,c),b(f,r,c),G(r,o[2]),s=!0,i||(a=U(r,"input",o[19]),i=!0)},p(f,c){const m={};c&256&&(m.errorMessage=f[8]),t.$set(m),c&4&&r.value!==f[2]&&G(r,f[2])},i(f){s||(d(t.$$.fragment,f),s=!0)},o(f){_(t.$$.fragment,f),s=!1},d(f){f&&(w(e),w(n),w(l),w(r)),v(t,f),i=!1,a()}}}function ze(o){let e;return{c(){e=X("Export")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Qe(o){let e;return{c(){e=X("Keep editing this issue")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Ye(o){let e;return{c(){e=X("Done! Enter a new critical")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Xe(o){let e,n,t,l;return e=new ke({props:{$$slots:{default:[Qe]},$$scope:{ctx:o}}}),e.$on("click",o[24]),t=new Fe({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),t.$on("click",tt),{c(){h(e.$$.fragment),n=y(),h(t.$$.fragment)},m(r,s){k(e,r,s),b(r,n,s),k(t,r,s),l=!0},p(r,s){const i={};s&134217728&&(i.$$scope={dirty:s,ctx:r}),e.$set(i);const a={};s&134217728&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){l||(d(e.$$.fragment,r),d(t.$$.fragment,r),l=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),l=!1},d(r){r&&w(n),v(e,r),v(t,r)}}}function Ze(o){let e,n,t,l,r,s,i,a,f;return s=new _e({props:{label:"The new row has already been copied to your clipboard. If it didn't work, copy from below",value:o[14]}}),a=new Te({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){e=T("div"),n=T("p"),n.innerHTML=`Edit <i>Inspectors Log.xlsx</i>
      , add a new row at the bottom of
      <i>Form Input</i>
      , and press
      <i>Control+V</i>
      to paste.`,t=y(),l=T("p"),l.innerHTML="<b>You have to manually fill out the first ID column!</b>",r=y(),h(s.$$.fragment),i=y(),h(a.$$.fragment),R(e,"class","govuk-prose")},m(c,m){b(c,e,m),P(e,n),P(e,t),P(e,l),P(e,r),k(s,e,null),P(e,i),k(a,e,null),f=!0},p(c,m){const D={};m&16384&&(D.value=c[14]),s.$set(D);const C={};m&134225920&&(C.$$scope={dirty:m,ctx:c}),a.$set(C)},i(c){f||(d(s.$$.fragment,c),d(a.$$.fragment,c),f=!0)},o(c){_(s.$$.fragment,c),_(a.$$.fragment,c),f=!1},d(c){c&&w(e),v(s),v(a)}}}function xe(o){let e,n,t,l,r,s,i,a,f,c,m,D,C,g,L,S,I,A,p,M,B;e=new ie({props:{label:"Inspector name",id:"inspector",$$slots:{default:[Ne]},$$scope:{ctx:o}}}),t=new ie({props:{label:"Scheme reference",id:"schemeReference",$$slots:{default:[Ue]},$$scope:{ctx:o}}});function V(u){o[20](u)}let W={label:"Current design stage",id:"currentDesignStage",choices:o[15],emptyOption:!0,errorMessage:o[9]};o[3]!==void 0&&(W.value=o[3]),r=new pe({props:W}),j.push(()=>F(r,"value",V));function Z(u){o[21](u)}let H={pt:o[0],locationDescriptionError:o[11]};o[5]!==void 0&&(H.locationDescription=o[5]),a=new Ke({props:H}),j.push(()=>F(a,"locationDescription",Z));function x(u){o[22](u)}let O={label:"Critical issue type",id:"criticalIssueType",choices:o[16],emptyOption:!0,errorMessage:o[10]};o[4]!==void 0&&(O.value=o[4]),m=new pe({props:O}),j.push(()=>F(m,"value",x));function ee(u){o[23](u)}let J={label:"Comments or notes",errorMessage:o[12]};o[6]!==void 0&&(J.value=o[6]),g=new _e({props:J}),j.push(()=>F(g,"value",ee)),I=new je({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),I.$on("click",o[17]);function E(u){o[25](u)}let K={title:"Almost done!",displayEscapeButton:!1,canCloseByClickingBackground:!1,$$slots:{default:[Ze]},$$scope:{ctx:o}};return o[13]!==void 0&&(K.open=o[13]),p=new we({props:K}),j.push(()=>F(p,"open",E)),{c(){h(e.$$.fragment),n=y(),h(t.$$.fragment),l=y(),h(r.$$.fragment),i=y(),h(a.$$.fragment),c=y(),h(m.$$.fragment),C=y(),h(g.$$.fragment),S=y(),h(I.$$.fragment),A=y(),h(p.$$.fragment)},m(u,$){k(e,u,$),b(u,n,$),k(t,u,$),b(u,l,$),k(r,u,$),b(u,i,$),k(a,u,$),b(u,c,$),k(m,u,$),b(u,C,$),k(g,u,$),b(u,S,$),k(I,u,$),b(u,A,$),k(p,u,$),B=!0},p(u,[$]){const le={};$&134217858&&(le.$$scope={dirty:$,ctx:u}),e.$set(le);const ue={};$&134217988&&(ue.$$scope={dirty:$,ctx:u}),t.$set(ue);const te={};$&512&&(te.errorMessage=u[9]),!s&&$&8&&(s=!0,te.value=u[3],q(()=>s=!1)),r.$set(te);const N={};$&1&&(N.pt=u[0]),$&2048&&(N.locationDescriptionError=u[11]),!f&&$&32&&(f=!0,N.locationDescription=u[5],q(()=>f=!1)),a.$set(N);const ne={};$&1024&&(ne.errorMessage=u[10]),!D&&$&16&&(D=!0,ne.value=u[4],q(()=>D=!1)),m.$set(ne);const re={};$&4096&&(re.errorMessage=u[12]),!L&&$&64&&(L=!0,re.value=u[6],q(()=>L=!1)),g.$set(re);const fe={};$&134217728&&(fe.$$scope={dirty:$,ctx:u}),I.$set(fe);const oe={};$&134242304&&(oe.$$scope={dirty:$,ctx:u}),!M&&$&8192&&(M=!0,oe.open=u[13],q(()=>M=!1)),p.$set(oe)},i(u){B||(d(e.$$.fragment,u),d(t.$$.fragment,u),d(r.$$.fragment,u),d(a.$$.fragment,u),d(m.$$.fragment,u),d(g.$$.fragment,u),d(I.$$.fragment,u),d(p.$$.fragment,u),B=!0)},o(u){_(e.$$.fragment,u),_(t.$$.fragment,u),_(r.$$.fragment,u),_(a.$$.fragment,u),_(m.$$.fragment,u),_(g.$$.fragment,u),_(I.$$.fragment,u),_(p.$$.fragment,u),B=!1},d(u){u&&(w(n),w(l),w(i),w(c),w(C),w(S),w(A)),v(e,u),v(t,u),v(r,u),v(a,u),v(m,u),v(g,u),v(I,u),v(p,u)}}}function me(o){return o.map(e=>[e,e])}function et(o){let e=25569,t=24*(60*60*1e3);return o.getTime()/t+e}function tt(){location.reload()}function nt(o,e,n){let{pt:t}=e,l=window.localStorage.getItem("inspector")??"",r=window.localStorage.getItem("schemeReference")??"",s=window.localStorage.getItem("currentDesignStage")??"",i="",a="",f="",c="",m="",D="",C="",g="",L="",S=!1,I="",A=me(["Baseline","Feasibility Design","Preliminary Design","Outline Design","Detailed Design","Inspection"]),p=me(["1 - Conflict at Side Roads","2 - Conflict at Major Junctions / Roundabouts","3 - Collision Alongside or from Behind","4 - Trip Hazard","5 - Kerbside Activity","6A - Risk of Crossing Conflict (Busy Roads)","6B - Risk of Crossing Conflict (Quieter Roads)","7A - Standard of Crossing Facility (Busy Roads)","7B - Standard of Crossing Facility (Junction)","8 - Traffic Speed (>37mph)","9A - Traffic Volume (>10,000vpd)","9B - Traffic Volume (>5% HGVs)","10 - Crossing Speed","11A - Footway Width (Absolute Minimum <1m)","11B - Footway Width (at Pinchpoints)","11C - Footway Width - Poor Pedestrian Comfort","12 - Tram - Insufficient width next to Tram Track","13 - Tram/Rail - Poor Crossing Angle","14 - Major Cycle Surface Defect","15 - Major Pedestrian Surface Defect","16 - Inappropriate Shared Use","17 - Barriers, Steps and/or Dismount signs","18 - Route isn't direct, logical or intuitive to all users","19 - Inappropriate Surface Materials","20 - Inappropriate Lighting","21 - Routes must join other facilities as a network"]);function M(){let E=0,K=et(new Date);return[E,l,K,r,s,i,he(t.toArray().reverse()).join(", "),a,f].join("	")}function B(){n(7,c=l?"":"Required"),n(8,m=r?"":"Required"),n(9,D=s?"":"Required"),n(10,C=i?"":"Required"),n(11,g=a?"":"Required"),n(12,L=f?"":"Required"),!(c||m||D||C||g||L)&&(n(14,I=M()),navigator.clipboard.writeText(I),n(13,S=!0))}function V(){l=this.value,n(1,l)}function W(){r=this.value,n(2,r)}function Z(E){s=E,n(3,s)}function H(E){a=E,n(5,a)}function x(E){i=E,n(4,i)}function O(E){f=E,n(6,f)}const ee=()=>n(13,S=!1);function J(E){S=E,n(13,S)}return o.$$set=E=>{"pt"in E&&n(0,t=E.pt)},o.$$.update=()=>{o.$$.dirty&2&&window.localStorage.setItem("inspector",l),o.$$.dirty&4&&window.localStorage.setItem("schemeReference",r),o.$$.dirty&8&&window.localStorage.setItem("currentDesignStage",s)},[t,l,r,s,i,a,f,c,m,D,C,g,L,S,I,A,p,B,V,W,Z,H,x,O,ee,J]}class rt extends z{constructor(e){super(),Q(this,e,nt,xe,Y,{pt:0})}}function ot(o,e,n){let t;ge(o,ve,a=>n(3,t=a));let{enableAdding:l}=e,r=null,{markerPosition:s=null}=e;$e(()=>{t.on("click",i),t.getCanvas().style.cursor="crosshair"}),De(()=>{r&&r.remove(),t.off("click",i)});function i(a){r||!l||(t.getCanvas().style.cursor="inherit",r=new Ce.Marker({draggable:!0}).setLngLat(a.lngLat).addTo(t),n(0,s=r.getLngLat()),r.on("dragstart",()=>{t.getCanvas().style.cursor="grabbing"}),r.on("dragend",()=>{t.getCanvas().style.cursor="inherit",n(0,s=r.getLngLat())}))}return o.$$set=a=>{"enableAdding"in a&&n(1,l=a.enableAdding),"markerPosition"in a&&n(0,s=a.markerPosition)},[s,l]}class st extends z{constructor(e){super(),Q(this,e,ot,null,Y,{enableAdding:1,markerPosition:0})}}function it(o){let e;return{c(){e=T("p"),e.textContent="Click the map to add a critical"},m(n,t){b(n,e,t)},p:se,i:se,o:se,d(n){n&&w(e)}}}function at(o){let e,n;return e=new rt({props:{pt:o[0]}}),{c(){h(e.$$.fragment)},m(t,l){k(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.pt=t[0]),e.$set(r)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function lt(o){let e,n,t,l,r,s,i,a,f,c;s=new ye({});const m=[at,it],D=[];function C(g,L){return g[0]?0:1}return a=C(o),f=D[a]=m[a](o),{c(){e=T("div"),n=T("h1"),n.textContent="Critical issue entry",t=y(),l=T("p"),l.textContent=`App version: ${de()}`,r=y(),h(s.$$.fragment),i=y(),f.c(),R(e,"slot","sidebar"),R(e,"class","govuk-prose")},m(g,L){b(g,e,L),P(e,n),P(e,t),P(e,l),P(e,r),k(s,e,null),P(e,i),D[a].m(e,null),c=!0},p(g,L){let S=a;a=C(g),a===S?D[a].p(g,L):(Se(),_(D[S],1,1,()=>{D[S]=null}),Me(),f=D[a],f?f.p(g,L):(f=D[a]=m[a](g),f.c()),d(f,1),f.m(e,null))},i(g){c||(d(s.$$.fragment,g),d(f),c=!0)},o(g){_(s.$$.fragment,g),_(f),c=!1},d(g){g&&w(e),v(s),D[a].d()}}}function ut(o){let e,n,t,l,r,s,i,a,f,c,m,D,C,g;e=new Pe({});function L(p){o[3](p)}let S={enableAdding:!o[1]};o[0]!==void 0&&(S.markerPosition=o[0]),t=new st({props:S}),j.push(()=>F(t,"markerPosition",L)),i=new Be({props:{disabled:o[1]}});function I(p){o[4](p)}let A={};return o[1]!==void 0&&(A.enabled=o[1]),f=new Ae({props:A}),j.push(()=>F(f,"enabled",I)),C=new We({}),{c(){h(e.$$.fragment),n=y(),h(t.$$.fragment),r=y(),s=T("div"),h(i.$$.fragment),a=y(),h(f.$$.fragment),m=y(),D=T("div"),h(C.$$.fragment),R(s,"class","top-right svelte-nlvvhu")},m(p,M){k(e,p,M),b(p,n,M),k(t,p,M),b(p,r,M),b(p,s,M),k(i,s,null),P(s,a),k(f,s,null),P(s,m),P(s,D),k(C,D,null),g=!0},p(p,M){const B={};M&2&&(B.enableAdding=!p[1]),!l&&M&1&&(l=!0,B.markerPosition=p[0],q(()=>l=!1)),t.$set(B);const V={};M&2&&(V.disabled=p[1]),i.$set(V);const W={};!c&&M&2&&(c=!0,W.enabled=p[1],q(()=>c=!1)),f.$set(W)},i(p){g||(d(e.$$.fragment,p),d(t.$$.fragment,p),d(i.$$.fragment,p),d(f.$$.fragment,p),d(C.$$.fragment,p),g=!0)},o(p){_(e.$$.fragment,p),_(t.$$.fragment,p),_(i.$$.fragment,p),_(f.$$.fragment,p),_(C.$$.fragment,p),g=!1},d(p){p&&(w(n),w(r),w(s)),v(e,p),v(t,p),v(i),v(f),v(C)}}}function ft(o){let e,n,t;return n=new Ee({props:{style:o[2],startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){e=T("div"),h(n.$$.fragment),R(e,"slot","main")},m(l,r){b(l,e,r),k(n,e,null),t=!0},p(l,r){const s={};r&4&&(s.style=l[2]),r&131&&(s.$$scope={dirty:r,ctx:l}),n.$set(s)},i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){_(n.$$.fragment,l),t=!1},d(l){l&&w(e),v(n)}}}function ct(o){let e,n;return e=new qe({props:{sidebarWidth:"35rem",$$slots:{main:[ft],sidebar:[lt]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment)},m(t,l){k(e,t,l),n=!0},p(t,[l]){const r={};l&135&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function pt(o,e,n){let t;ge(o,ce,c=>n(2,t=c)),$e(()=>{Le()});const l=new URLSearchParams(window.location.search);let r=de()=="Private (development)"?"Road":"dataviz";ce.set(l.get("style")||r);let s=null,i=!1;function a(c){s=c,n(0,s)}function f(c){i=c,n(1,i)}return[s,i,t,a,f]}class mt extends z{constructor(e){super(),Q(this,e,pt,ct,Y,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new mt({target:document.getElementById("app")});
