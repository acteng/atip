import{S as O,i as H,s as z,aZ as be,b as B,c as A,g as v,m as y,l as P,t as $,n as _,q as D,Q as me,C as ge,a_ as we,F as ie,d as C,j as b,p as w,E as le,e as R,h as M,v as q,w as W,aD as he,u as Y,M as ke,a as ve,k as L,aq as ye,r as de,a8 as De,B as Ce,f as $e,L as Se,y as Ie,o as Ee,z as Me,x as oe}from"./index-d3514feb.js";import{e as ae,b as Re,d as Le,L as Te,M as Be,S as Ae}from"./StreetViewController-b6ed1193.js";import{D as Pe}from"./DefaultButton-228222a3.js";import{T as _e,W as je}from"./WarningButton-3e493cfe.js";function Fe(s){let e,n,t;function l(o){s[3](o)}let r={label:"Basemap",id:"basemap",choices:be(),disabled:s[1]};return s[0]!==void 0&&(r.value=s[0]),e=new ae({props:r}),B.push(()=>A(e,"value",l)),e.$on("change",s[2]),{c(){v(e.$$.fragment)},m(o,a){y(e,o,a),t=!0},p(o,[a]){const i={};a&2&&(i.disabled=o[1]),!n&&a&1&&(n=!0,i.value=o[0],P(()=>n=!1)),e.$set(i)},i(o){t||($(e.$$.fragment,o),t=!0)},o(o){_(e.$$.fragment,o),t=!1},d(o){D(e,o)}}}function qe(s,e,n){let t;me(s,ge,i=>n(4,t=i));let{style:l}=e,{disabled:r}=e;async function o(){t.setStyle(await we(l))}function a(i){l=i,n(0,l)}return s.$$set=i=>{"style"in i&&n(0,l=i.style),"disabled"in i&&n(1,r=i.disabled)},[l,r,o,a]}class Ve extends O{constructor(e){super(),H(this,e,qe,Fe,z,{style:0,disabled:1})}}function We(s){let e,n,t,l,r,o;return e=new le({props:{errorMessage:s[1]}}),{c(){v(e.$$.fragment),n=C(),t=R("input"),M(t,"type","text"),M(t,"class","govuk-input"),M(t,"id","locationDescription")},m(a,i){y(e,a,i),b(a,n,i),b(a,t,i),q(t,s[0]),l=!0,r||(o=[W(t,"input",s[5]),W(t,"change",s[3])],r=!0)},p(a,i){const c={};i&2&&(c.errorMessage=a[1]),e.$set(c),i&1&&t.value!==a[0]&&q(t,a[0])},i(a){l||($(e.$$.fragment,a),l=!0)},o(a){_(e.$$.fragment,a),l=!1},d(a){a&&(w(n),w(t)),D(e,a),r=!1,he(o)}}}function Oe(s){let e;return{c(){e=Y("Lookup location description automatically")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function He(s){let e,n,t;function l(o){s[6](o)}let r={id:"lookupLocation",$$slots:{default:[Oe]},$$scope:{ctx:s}};return s[2]!==void 0&&(r.checked=s[2]),e=new Le({props:r}),B.push(()=>A(e,"checked",l)),{c(){v(e.$$.fragment)},m(o,a){y(e,o,a),t=!0},p(o,a){const i={};a&256&&(i.$$scope={dirty:a,ctx:o}),!n&&a&4&&(n=!0,i.checked=o[2],P(()=>n=!1)),e.$set(i)},i(o){t||($(e.$$.fragment,o),t=!0)},o(o){_(e.$$.fragment,o),t=!1},d(o){D(e,o)}}}function ze(s){let e,n,t,l;return e=new ie({props:{label:"Describe this location",id:"locationDescription",$$slots:{default:[We]},$$scope:{ctx:s}}}),t=new Re({props:{small:!0,$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment),n=C(),v(t.$$.fragment)},m(r,o){y(e,r,o),b(r,n,o),y(t,r,o),l=!0},p(r,[o]){const a={};o&259&&(a.$$scope={dirty:o,ctx:r}),e.$set(a);const i={};o&260&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){l||($(e.$$.fragment,r),$(t.$$.fragment,r),l=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),l=!1},d(r){r&&w(n),D(e,r),D(t,r)}}}function Ge(s,e,n){let{locationDescription:t}=e,{locationDescriptionError:l}=e,{pt:r}=e,o=!0;async function a(p){if(!o)return;let h=`https://nominatim.openstreetmap.org/reverse?lat=${p.lat}&lon=${p.lng}&format=json`;try{n(0,t="Loading...");let f=await(await fetch(h)).json();n(0,t=f.address.road??f.display_name)}catch(g){console.log(`Location lookup failed: ${g}`)}}function i(){n(2,o=!1)}function c(){t=this.value,n(0,t)}function d(p){o=p,n(2,o)}return s.$$set=p=>{"locationDescription"in p&&n(0,t=p.locationDescription),"locationDescriptionError"in p&&n(1,l=p.locationDescriptionError),"pt"in p&&n(4,r=p.pt)},s.$$.update=()=>{s.$$.dirty&16&&a(r)},[t,l,o,i,r,c,d]}class Ke extends O{constructor(e){super(),H(this,e,Ge,ze,z,{locationDescription:0,locationDescriptionError:1,pt:4})}}function Ne(s){let e,n,t,l,r,o;return e=new le({props:{errorMessage:s[7]}}),{c(){v(e.$$.fragment),n=C(),t=R("input"),M(t,"type","text"),M(t,"class","govuk-input"),M(t,"id","inspector")},m(a,i){y(e,a,i),b(a,n,i),b(a,t,i),q(t,s[1]),l=!0,r||(o=W(t,"input",s[18]),r=!0)},p(a,i){const c={};i&128&&(c.errorMessage=a[7]),e.$set(c),i&2&&t.value!==a[1]&&q(t,a[1])},i(a){l||($(e.$$.fragment,a),l=!0)},o(a){_(e.$$.fragment,a),l=!1},d(a){a&&(w(n),w(t)),D(e,a),r=!1,o()}}}function Je(s){let e,n,t,l,r,o,a,i;return t=new le({props:{errorMessage:s[8]}}),{c(){e=R("div"),e.textContent="Example: ATF2_WLT_01",n=C(),v(t.$$.fragment),l=C(),r=R("input"),M(e,"class","govuk-hint"),M(r,"type","text"),M(r,"class","govuk-input"),M(r,"id","schemeReference")},m(c,d){b(c,e,d),b(c,n,d),y(t,c,d),b(c,l,d),b(c,r,d),q(r,s[2]),o=!0,a||(i=W(r,"input",s[19]),a=!0)},p(c,d){const p={};d&256&&(p.errorMessage=c[8]),t.$set(p),d&4&&r.value!==c[2]&&q(r,c[2])},i(c){o||($(t.$$.fragment,c),o=!0)},o(c){_(t.$$.fragment,c),o=!1},d(c){c&&(w(e),w(n),w(l),w(r)),D(t,c),a=!1,i()}}}function Qe(s){let e;return{c(){e=Y("Export")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Ue(s){let e;return{c(){e=Y("Keep editing this issue")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Ye(s){let e;return{c(){e=Y("Done! Enter a new critical")},m(n,t){b(n,e,t)},d(n){n&&w(e)}}}function Ze(s){let e,n,t,l,r,o,a,i,c,d,p,h;return o=new _e({props:{label:"The new row has already been copied to your clipboard. If it didn't work, copy from below",value:s[14]}}),c=new ve({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),c.$on("click",s[24]),p=new je({props:{$$slots:{default:[Ye]},$$scope:{ctx:s}}}),p.$on("click",et),{c(){e=R("div"),n=R("p"),n.innerHTML=`Edit <i>Inspectors Log.xlsx</i>
      , add a new row at the bottom of
      <i>Form Input</i>
      , and press
      <i>Control+V</i>
      to paste.`,t=C(),l=R("p"),l.innerHTML="<b>You have to manually fill out the first ID column!</b>",r=C(),v(o.$$.fragment),a=C(),i=R("div"),v(c.$$.fragment),d=C(),v(p.$$.fragment),M(i,"class","govuk-button-group"),M(e,"class","govuk-prose")},m(g,f){b(g,e,f),L(e,n),L(e,t),L(e,l),L(e,r),y(o,e,null),L(e,a),L(e,i),y(c,i,null),L(i,d),y(p,i,null),h=!0},p(g,f){const k={};f&16384&&(k.value=g[14]),o.$set(k);const S={};f&134217728&&(S.$$scope={dirty:f,ctx:g}),c.$set(S);const I={};f&134217728&&(I.$$scope={dirty:f,ctx:g}),p.$set(I)},i(g){h||($(o.$$.fragment,g),$(c.$$.fragment,g),$(p.$$.fragment,g),h=!0)},o(g){_(o.$$.fragment,g),_(c.$$.fragment,g),_(p.$$.fragment,g),h=!1},d(g){g&&w(e),D(o),D(c),D(p)}}}function Xe(s){let e,n,t,l,r,o,a,i,c,d,p,h,g,f,k,S,I,j,T,V,F;e=new ie({props:{label:"Inspector name",id:"inspector",$$slots:{default:[Ne]},$$scope:{ctx:s}}}),t=new ie({props:{label:"Scheme reference",id:"schemeReference",$$slots:{default:[Je]},$$scope:{ctx:s}}});function Z(u){s[20](u)}let G={label:"Current design stage",id:"currentDesignStage",choices:s[15],emptyOption:!0,errorMessage:s[9]};s[3]!==void 0&&(G.value=s[3]),r=new ae({props:G}),B.push(()=>A(r,"value",Z));function X(u){s[21](u)}let K={pt:s[0],locationDescriptionError:s[11]};s[5]!==void 0&&(K.locationDescription=s[5]),i=new Ke({props:K}),B.push(()=>A(i,"locationDescription",X));function x(u){s[22](u)}let N={label:"Critical issue type",id:"criticalIssueType",choices:s[16],emptyOption:!0,errorMessage:s[10]};s[4]!==void 0&&(N.value=s[4]),p=new ae({props:N}),B.push(()=>A(p,"value",x));function ee(u){s[23](u)}let J={label:"Comments or notes",errorMessage:s[12]};s[6]!==void 0&&(J.value=s[6]),f=new _e({props:J}),B.push(()=>A(f,"value",ee)),I=new Pe({props:{$$slots:{default:[Qe]},$$scope:{ctx:s}}}),I.$on("click",s[17]);function E(u){s[25](u)}let Q={title:"Almost done!",displayEscapeButton:!1,canCloseByClickingBackground:!1,$$slots:{default:[Ze]},$$scope:{ctx:s}};return s[13]!==void 0&&(Q.open=s[13]),T=new ke({props:Q}),B.push(()=>A(T,"open",E)),{c(){v(e.$$.fragment),n=C(),v(t.$$.fragment),l=C(),v(r.$$.fragment),a=C(),v(i.$$.fragment),d=C(),v(p.$$.fragment),g=C(),v(f.$$.fragment),S=C(),v(I.$$.fragment),j=C(),v(T.$$.fragment)},m(u,m){y(e,u,m),b(u,n,m),y(t,u,m),b(u,l,m),y(r,u,m),b(u,a,m),y(i,u,m),b(u,d,m),y(p,u,m),b(u,g,m),y(f,u,m),b(u,S,m),y(I,u,m),b(u,j,m),y(T,u,m),F=!0},p(u,[m]){const ue={};m&134217858&&(ue.$$scope={dirty:m,ctx:u}),e.$set(ue);const ce={};m&134217988&&(ce.$$scope={dirty:m,ctx:u}),t.$set(ce);const te={};m&512&&(te.errorMessage=u[9]),!o&&m&8&&(o=!0,te.value=u[3],P(()=>o=!1)),r.$set(te);const U={};m&1&&(U.pt=u[0]),m&2048&&(U.locationDescriptionError=u[11]),!c&&m&32&&(c=!0,U.locationDescription=u[5],P(()=>c=!1)),i.$set(U);const ne={};m&1024&&(ne.errorMessage=u[10]),!h&&m&16&&(h=!0,ne.value=u[4],P(()=>h=!1)),p.$set(ne);const se={};m&4096&&(se.errorMessage=u[12]),!k&&m&64&&(k=!0,se.value=u[6],P(()=>k=!1)),f.$set(se);const fe={};m&134217728&&(fe.$$scope={dirty:m,ctx:u}),I.$set(fe);const re={};m&134242304&&(re.$$scope={dirty:m,ctx:u}),!V&&m&8192&&(V=!0,re.open=u[13],P(()=>V=!1)),T.$set(re)},i(u){F||($(e.$$.fragment,u),$(t.$$.fragment,u),$(r.$$.fragment,u),$(i.$$.fragment,u),$(p.$$.fragment,u),$(f.$$.fragment,u),$(I.$$.fragment,u),$(T.$$.fragment,u),F=!0)},o(u){_(e.$$.fragment,u),_(t.$$.fragment,u),_(r.$$.fragment,u),_(i.$$.fragment,u),_(p.$$.fragment,u),_(f.$$.fragment,u),_(I.$$.fragment,u),_(T.$$.fragment,u),F=!1},d(u){u&&(w(n),w(l),w(a),w(d),w(g),w(S),w(j)),D(e,u),D(t,u),D(r,u),D(i,u),D(p,u),D(f,u),D(I,u),D(T,u)}}}function pe(s){return s.map(e=>[e,e])}function xe(s){let e=25569,t=24*(60*60*1e3);return s.getTime()/t+e}function et(){location.reload()}function tt(s,e,n){let{pt:t}=e,l=window.localStorage.getItem("inspector")??"",r=window.localStorage.getItem("schemeReference")??"",o=window.localStorage.getItem("currentDesignStage")??"",a="",i="",c="",d="",p="",h="",g="",f="",k="",S=!1,I="",j=pe(["Baseline","Feasibility Design","Preliminary Design","Outline Design","Detailed Design","Inspection"]),T=pe(["1 - Conflict at Side Roads","2 - Conflict at Major Junctions / Roundabouts","3 - Collision Alongside or from Behind","4 - Trip Hazard","5 - Kerbside Activity","6A - Risk of Crossing Conflict (Busy Roads)","6B - Risk of Crossing Conflict (Quieter Roads)","7A - Standard of Crossing Facility (Busy Roads)","7B - Standard of Crossing Facility (Junction)","8 - Traffic Speed (>37mph)","9A - Traffic Volume (>10,000vpd)","9B - Traffic Volume (>5% HGVs)","10 - Crossing Speed","11A - Footway Width (Absolute Minimum <1m)","11B - Footway Width (at Pinchpoints)","11C - Footway Width - Poor Pedestrian Comfort","12 - Tram - Insufficient width next to Tram Track","13 - Tram/Rail - Poor Crossing Angle","14 - Major Cycle Surface Defect","15 - Major Pedestrian Surface Defect","16 - Inappropriate Shared Use","17 - Barriers, Steps and/or Dismount signs","18 - Route isn't direct, logical or intuitive to all users","19 - Inappropriate Surface Materials","20 - Inappropriate Lighting","21 - Routes must join other facilities as a network"]);function V(){let E=0,Q=xe(new Date);return[E,l,Q,r,o,a,ye(t.toArray().reverse()).join(", "),i,c].join("	")}function F(){n(7,d=l?"":"Required"),n(8,p=r?"":"Required"),n(9,h=o?"":"Required"),n(10,g=a?"":"Required"),n(11,f=i?"":"Required"),n(12,k=c?"":"Required"),!(d||p||h||g||f||k)&&(n(14,I=V()),navigator.clipboard.writeText(I),n(13,S=!0))}function Z(){l=this.value,n(1,l)}function G(){r=this.value,n(2,r)}function X(E){o=E,n(3,o)}function K(E){i=E,n(5,i)}function x(E){a=E,n(4,a)}function N(E){c=E,n(6,c)}const ee=()=>n(13,S=!1);function J(E){S=E,n(13,S)}return s.$$set=E=>{"pt"in E&&n(0,t=E.pt)},s.$$.update=()=>{s.$$.dirty&2&&window.localStorage.setItem("inspector",l),s.$$.dirty&4&&window.localStorage.setItem("schemeReference",r),s.$$.dirty&8&&window.localStorage.setItem("currentDesignStage",o)},[t,l,r,o,a,i,c,d,p,h,g,f,k,S,I,j,T,F,Z,G,X,K,x,N,ee,J]}class nt extends O{constructor(e){super(),H(this,e,tt,Xe,z,{pt:0})}}function st(s,e,n){let t;me(s,ge,i=>n(3,t=i));let{enableAdding:l}=e,r=null,{markerPosition:o=null}=e;de(()=>{t.on("click",a),t.getCanvas().style.cursor="crosshair"}),De(()=>{r&&r.remove(),t.off("click",a)});function a(i){r||!l||(t.getCanvas().style.cursor="inherit",r=new Ce.Marker({draggable:!0}).setLngLat(i.lngLat).addTo(t),n(0,o=r.getLngLat()),r.on("dragstart",()=>{t.getCanvas().style.cursor="grabbing"}),r.on("dragend",()=>{t.getCanvas().style.cursor="inherit",n(0,o=r.getLngLat())}))}return s.$$set=i=>{"enableAdding"in i&&n(1,l=i.enableAdding),"markerPosition"in i&&n(0,o=i.markerPosition)},[o,l]}class rt extends O{constructor(e){super(),H(this,e,st,null,z,{enableAdding:1,markerPosition:0})}}function ot(s){let e;return{c(){e=R("p"),e.textContent="Click the map to add a critical"},m(n,t){b(n,e,t)},p:oe,i:oe,o:oe,d(n){n&&w(e)}}}function it(s){let e,n;return e=new nt({props:{pt:s[0]}}),{c(){v(e.$$.fragment)},m(t,l){y(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.pt=t[0]),e.$set(r)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function at(s){let e,n,t,l,r,o,a,i,c,d;o=new Se({});const p=[it,ot],h=[];function g(f,k){return f[0]?0:1}return i=g(s),c=h[i]=p[i](s),{c(){e=R("div"),n=R("h1"),n.textContent="Critical issue entry",t=C(),l=R("p"),l.textContent=`App version: ${$e()}`,r=C(),v(o.$$.fragment),a=C(),c.c(),M(e,"slot","sidebar"),M(e,"class","govuk-prose")},m(f,k){b(f,e,k),L(e,n),L(e,t),L(e,l),L(e,r),y(o,e,null),L(e,a),h[i].m(e,null),d=!0},p(f,k){let S=i;i=g(f),i===S?h[i].p(f,k):(Ie(),_(h[S],1,1,()=>{h[S]=null}),Ee(),c=h[i],c?c.p(f,k):(c=h[i]=p[i](f),c.c()),$(c,1),c.m(e,null))},i(f){d||($(o.$$.fragment,f),$(c),d=!0)},o(f){_(o.$$.fragment,f),_(c),d=!1},d(f){f&&w(e),D(o),h[i].d()}}}function lt(s){let e,n,t,l,r,o,a,i,c;function d(f){s[5](f)}let p={enableAdding:s[1]};s[0]!==void 0&&(p.markerPosition=s[0]),e=new rt({props:p}),B.push(()=>A(e,"markerPosition",d)),r=new Ve({props:{style:s[3],disabled:!s[1]}});function h(f){s[7](f)}let g={displayEnableButton:!0};return s[1]!==void 0&&(g.isInactive=s[1]),a=new Ae({props:g}),s[6](a),B.push(()=>A(a,"isInactive",h)),{c(){v(e.$$.fragment),t=C(),l=R("div"),v(r.$$.fragment),o=C(),v(a.$$.fragment),M(l,"class","top-right svelte-nlvvhu")},m(f,k){y(e,f,k),b(f,t,k),b(f,l,k),y(r,l,null),L(l,o),y(a,l,null),c=!0},p(f,k){const S={};k&2&&(S.enableAdding=f[1]),!n&&k&1&&(n=!0,S.markerPosition=f[0],P(()=>n=!1)),e.$set(S);const I={};k&2&&(I.disabled=!f[1]),r.$set(I);const j={};!i&&k&2&&(i=!0,j.isInactive=f[1],P(()=>i=!1)),a.$set(j)},i(f){c||($(e.$$.fragment,f),$(r.$$.fragment,f),$(a.$$.fragment,f),c=!0)},o(f){_(e.$$.fragment,f),_(r.$$.fragment,f),_(a.$$.fragment,f),c=!1},d(f){f&&(w(t),w(l)),D(e,f),D(r),s[6](null),D(a)}}}function ut(s){let e,n,t;return n=new Be({props:{style:s[3],startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[lt]},$$scope:{ctx:s}}}),{c(){e=R("div"),v(n.$$.fragment),M(e,"slot","main")},m(l,r){b(l,e,r),y(n,e,null),t=!0},p(l,r){const o={};r&263&&(o.$$scope={dirty:r,ctx:l}),n.$set(o)},i(l){t||($(n.$$.fragment,l),t=!0)},o(l){_(n.$$.fragment,l),t=!1},d(l){l&&w(e),D(n)}}}function ct(s){let e,n,t,l;return e=new Te({props:{sidebarWidth:"35rem",$$slots:{main:[ut],sidebar:[at]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},m(r,o){y(e,r,o),n=!0,t||(l=W(window,"keydown",s[4]),t=!0)},p(r,[o]){const a={};o&263&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){D(e,r),t=!1,l()}}}function ft(s,e,n){de(()=>{Me()});let t=$e()=="Private (development)"?"Road":"dataviz",l=null,r=!0,o;function a(p){!r&&p.key=="Escape"&&(o.disableStreetView(),p.preventDefault())}function i(p){l=p,n(0,l)}function c(p){B[p?"unshift":"push"](()=>{o=p,n(2,o)})}function d(p){r=p,n(1,r)}return[l,r,o,t,a,i,c,d]}class pt extends O{constructor(e){super(),H(this,e,ft,ct,z,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new pt({target:document.getElementById("app")});
