import{S as z,i as J,s as Q,F as ie,g as v,d as C,m as D,j as w,t as _,n as b,o as h,p as y,E as ae,e as R,h as M,v as q,w as W,aG as be,b as B,c as P,l as j,u as Y,aB as we,a as he,k as T,ao as ke,q as ge,A as ve,r as de,a2 as De,ba as ye,f as $e,aT as fe,L as Ce,as as Se,at as Ie,M as Ee,y as Me,D as se}from"./index-eeb08b48.js";import{D as Re}from"./DefaultButton-47fae47b.js";import{b as Te,d as Le,e as pe,L as Be,B as Ae,S as Pe}from"./StreetViewController-f07a9af5.js";import{T as _e,W as je}from"./WarningButton-6c126983.js";const Fe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function qe(o){let e,n,t,l,r,s;return e=new ae({props:{errorMessage:o[1]}}),{c(){v(e.$$.fragment),n=C(),t=R("input"),M(t,"type","text"),M(t,"class","govuk-input"),M(t,"id","locationDescription")},m(i,a){D(e,i,a),w(i,n,a),w(i,t,a),q(t,o[0]),l=!0,r||(s=[W(t,"input",o[5]),W(t,"change",o[3])],r=!0)},p(i,a){const c={};a&2&&(c.errorMessage=i[1]),e.$set(c),a&1&&t.value!==i[0]&&q(t,i[0])},i(i){l||(_(e.$$.fragment,i),l=!0)},o(i){b(e.$$.fragment,i),l=!1},d(i){i&&(h(n),h(t)),y(e,i),r=!1,be(s)}}}function Ve(o){let e;return{c(){e=Y("Lookup location description automatically")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function We(o){let e,n,t;function l(s){o[6](s)}let r={id:"lookupLocation",$$slots:{default:[Ve]},$$scope:{ctx:o}};return o[2]!==void 0&&(r.checked=o[2]),e=new Le({props:r}),B.push(()=>P(e,"checked",l)),{c(){v(e.$$.fragment)},m(s,i){D(e,s,i),t=!0},p(s,i){const a={};i&256&&(a.$$scope={dirty:i,ctx:s}),!n&&i&4&&(n=!0,a.checked=s[2],j(()=>n=!1)),e.$set(a)},i(s){t||(_(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){y(e,s)}}}function Oe(o){let e,n,t,l;return e=new ie({props:{label:"Describe this location",id:"locationDescription",$$slots:{default:[qe]},$$scope:{ctx:o}}}),t=new Te({props:{small:!0,$$slots:{default:[We]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment),n=C(),v(t.$$.fragment)},m(r,s){D(e,r,s),w(r,n,s),D(t,r,s),l=!0},p(r,[s]){const i={};s&259&&(i.$$scope={dirty:s,ctx:r}),e.$set(i);const a={};s&260&&(a.$$scope={dirty:s,ctx:r}),t.$set(a)},i(r){l||(_(e.$$.fragment,r),_(t.$$.fragment,r),l=!0)},o(r){b(e.$$.fragment,r),b(t.$$.fragment,r),l=!1},d(r){r&&h(n),y(e,r),y(t,r)}}}function Ge(o,e,n){let{locationDescription:t}=e,{locationDescriptionError:l}=e,{pt:r}=e,s=!0;async function i(p){if(!s)return;let $=`https://nominatim.openstreetmap.org/reverse?lat=${p.lat}&lon=${p.lng}&format=json`;try{n(0,t="Loading...");let f=await(await fetch($)).json();n(0,t=f.address.road??f.display_name)}catch(m){console.log(`Location lookup failed: ${m}`)}}function a(){n(2,s=!1)}function c(){t=this.value,n(0,t)}function d(p){s=p,n(2,s)}return o.$$set=p=>{"locationDescription"in p&&n(0,t=p.locationDescription),"locationDescriptionError"in p&&n(1,l=p.locationDescriptionError),"pt"in p&&n(4,r=p.pt)},o.$$.update=()=>{o.$$.dirty&16&&i(r)},[t,l,s,a,r,c,d]}class He extends z{constructor(e){super(),J(this,e,Ge,Oe,Q,{locationDescription:0,locationDescriptionError:1,pt:4})}}function Ke(o){let e,n,t,l,r,s;return e=new ae({props:{errorMessage:o[7]}}),{c(){v(e.$$.fragment),n=C(),t=R("input"),M(t,"type","text"),M(t,"class","govuk-input"),M(t,"id","inspector")},m(i,a){D(e,i,a),w(i,n,a),w(i,t,a),q(t,o[1]),l=!0,r||(s=W(t,"input",o[18]),r=!0)},p(i,a){const c={};a&128&&(c.errorMessage=i[7]),e.$set(c),a&2&&t.value!==i[1]&&q(t,i[1])},i(i){l||(_(e.$$.fragment,i),l=!0)},o(i){b(e.$$.fragment,i),l=!1},d(i){i&&(h(n),h(t)),y(e,i),r=!1,s()}}}function Ne(o){let e,n,t,l,r,s,i,a;return t=new ae({props:{errorMessage:o[8]}}),{c(){e=R("div"),e.textContent="Example: ATF2_WLT_01",n=C(),v(t.$$.fragment),l=C(),r=R("input"),M(e,"class","govuk-hint"),M(r,"type","text"),M(r,"class","govuk-input"),M(r,"id","schemeReference")},m(c,d){w(c,e,d),w(c,n,d),D(t,c,d),w(c,l,d),w(c,r,d),q(r,o[2]),s=!0,i||(a=W(r,"input",o[19]),i=!0)},p(c,d){const p={};d&256&&(p.errorMessage=c[8]),t.$set(p),d&4&&r.value!==c[2]&&q(r,c[2])},i(c){s||(_(t.$$.fragment,c),s=!0)},o(c){b(t.$$.fragment,c),s=!1},d(c){c&&(h(e),h(n),h(l),h(r)),y(t,c),i=!1,a()}}}function Ue(o){let e;return{c(){e=Y("Export")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function ze(o){let e;return{c(){e=Y("Keep editing this issue")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function Je(o){let e;return{c(){e=Y("Done! Enter a new critical")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function Qe(o){let e,n,t,l,r,s,i,a,c,d,p,$;return s=new _e({props:{label:"The new row has already been copied to your clipboard. If it didn't work, copy from below",value:o[14]}}),c=new he({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),c.$on("click",o[24]),p=new je({props:{$$slots:{default:[Je]},$$scope:{ctx:o}}}),p.$on("click",Ze),{c(){e=R("div"),n=R("p"),n.innerHTML=`Edit <i>Inspectors Log.xlsx</i>
      , add a new row at the bottom of
      <i>Form Input</i>
      , and press
      <i>Control+V</i>
      to paste.`,t=C(),l=R("p"),l.innerHTML="<b>You have to manually fill out the first ID column!</b>",r=C(),v(s.$$.fragment),i=C(),a=R("div"),v(c.$$.fragment),d=C(),v(p.$$.fragment),M(a,"class","govuk-button-group"),M(e,"class","govuk-prose")},m(m,f){w(m,e,f),T(e,n),T(e,t),T(e,l),T(e,r),D(s,e,null),T(e,i),T(e,a),D(c,a,null),T(a,d),D(p,a,null),$=!0},p(m,f){const k={};f&16384&&(k.value=m[14]),s.$set(k);const S={};f&134217728&&(S.$$scope={dirty:f,ctx:m}),c.$set(S);const I={};f&134217728&&(I.$$scope={dirty:f,ctx:m}),p.$set(I)},i(m){$||(_(s.$$.fragment,m),_(c.$$.fragment,m),_(p.$$.fragment,m),$=!0)},o(m){b(s.$$.fragment,m),b(c.$$.fragment,m),b(p.$$.fragment,m),$=!1},d(m){m&&h(e),y(s),y(c),y(p)}}}function Ye(o){let e,n,t,l,r,s,i,a,c,d,p,$,m,f,k,S,I,A,L,V,F;e=new ie({props:{label:"Inspector name",id:"inspector",$$slots:{default:[Ke]},$$scope:{ctx:o}}}),t=new ie({props:{label:"Scheme reference",id:"schemeReference",$$slots:{default:[Ne]},$$scope:{ctx:o}}});function X(u){o[20](u)}let O={label:"Current design stage",id:"currentDesignStage",choices:o[15],emptyOption:!0,errorMessage:o[9]};o[3]!==void 0&&(O.value=o[3]),r=new pe({props:O}),B.push(()=>P(r,"value",X));function Z(u){o[21](u)}let G={pt:o[0],locationDescriptionError:o[11]};o[5]!==void 0&&(G.locationDescription=o[5]),a=new He({props:G}),B.push(()=>P(a,"locationDescription",Z));function x(u){o[22](u)}let H={label:"Critical issue type",id:"criticalIssueType",choices:o[16],emptyOption:!0,errorMessage:o[10]};o[4]!==void 0&&(H.value=o[4]),p=new pe({props:H}),B.push(()=>P(p,"value",x));function ee(u){o[23](u)}let K={label:"Comments or notes",errorMessage:o[12]};o[6]!==void 0&&(K.value=o[6]),f=new _e({props:K}),B.push(()=>P(f,"value",ee)),I=new Re({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),I.$on("click",o[17]);function E(u){o[25](u)}let N={title:"Almost done!",displayEscapeButton:!1,canCloseByClickingBackground:!1,$$slots:{default:[Qe]},$$scope:{ctx:o}};return o[13]!==void 0&&(N.open=o[13]),L=new we({props:N}),B.push(()=>P(L,"open",E)),{c(){v(e.$$.fragment),n=C(),v(t.$$.fragment),l=C(),v(r.$$.fragment),i=C(),v(a.$$.fragment),d=C(),v(p.$$.fragment),m=C(),v(f.$$.fragment),S=C(),v(I.$$.fragment),A=C(),v(L.$$.fragment)},m(u,g){D(e,u,g),w(u,n,g),D(t,u,g),w(u,l,g),D(r,u,g),w(u,i,g),D(a,u,g),w(u,d,g),D(p,u,g),w(u,m,g),D(f,u,g),w(u,S,g),D(I,u,g),w(u,A,g),D(L,u,g),F=!0},p(u,[g]){const le={};g&134217858&&(le.$$scope={dirty:g,ctx:u}),e.$set(le);const ue={};g&134217988&&(ue.$$scope={dirty:g,ctx:u}),t.$set(ue);const te={};g&512&&(te.errorMessage=u[9]),!s&&g&8&&(s=!0,te.value=u[3],j(()=>s=!1)),r.$set(te);const U={};g&1&&(U.pt=u[0]),g&2048&&(U.locationDescriptionError=u[11]),!c&&g&32&&(c=!0,U.locationDescription=u[5],j(()=>c=!1)),a.$set(U);const ne={};g&1024&&(ne.errorMessage=u[10]),!$&&g&16&&($=!0,ne.value=u[4],j(()=>$=!1)),p.$set(ne);const oe={};g&4096&&(oe.errorMessage=u[12]),!k&&g&64&&(k=!0,oe.value=u[6],j(()=>k=!1)),f.$set(oe);const ce={};g&134217728&&(ce.$$scope={dirty:g,ctx:u}),I.$set(ce);const re={};g&134242304&&(re.$$scope={dirty:g,ctx:u}),!V&&g&8192&&(V=!0,re.open=u[13],j(()=>V=!1)),L.$set(re)},i(u){F||(_(e.$$.fragment,u),_(t.$$.fragment,u),_(r.$$.fragment,u),_(a.$$.fragment,u),_(p.$$.fragment,u),_(f.$$.fragment,u),_(I.$$.fragment,u),_(L.$$.fragment,u),F=!0)},o(u){b(e.$$.fragment,u),b(t.$$.fragment,u),b(r.$$.fragment,u),b(a.$$.fragment,u),b(p.$$.fragment,u),b(f.$$.fragment,u),b(I.$$.fragment,u),b(L.$$.fragment,u),F=!1},d(u){u&&(h(n),h(l),h(i),h(d),h(m),h(S),h(A)),y(e,u),y(t,u),y(r,u),y(a,u),y(p,u),y(f,u),y(I,u),y(L,u)}}}function me(o){return o.map(e=>[e,e])}function Xe(o){let e=25569,t=24*(60*60*1e3);return o.getTime()/t+e}function Ze(){location.reload()}function xe(o,e,n){let{pt:t}=e,l=window.localStorage.getItem("inspector")??"",r=window.localStorage.getItem("schemeReference")??"",s=window.localStorage.getItem("currentDesignStage")??"",i="",a="",c="",d="",p="",$="",m="",f="",k="",S=!1,I="",A=me(["Baseline","Feasibility Design","Preliminary Design","Outline Design","Detailed Design","Inspection"]),L=me(["1 - Conflict at Side Roads","2 - Conflict at Major Junctions / Roundabouts","3 - Collision Alongside or from Behind","4 - Trip Hazard","5 - Kerbside Activity","6A - Risk of Crossing Conflict (Busy Roads)","6B - Risk of Crossing Conflict (Quieter Roads)","7A - Standard of Crossing Facility (Busy Roads)","7B - Standard of Crossing Facility (Junction)","8 - Traffic Speed (>37mph)","9A - Traffic Volume (>10,000vpd)","9B - Traffic Volume (>5% HGVs)","10 - Crossing Speed","11A - Footway Width (Absolute Minimum <1m)","11B - Footway Width (at Pinchpoints)","11C - Footway Width - Poor Pedestrian Comfort","12 - Tram - Insufficient width next to Tram Track","13 - Tram/Rail - Poor Crossing Angle","14 - Major Cycle Surface Defect","15 - Major Pedestrian Surface Defect","16 - Inappropriate Shared Use","17 - Barriers, Steps and/or Dismount signs","18 - Route isn't direct, logical or intuitive to all users","19 - Inappropriate Surface Materials","20 - Inappropriate Lighting","21 - Routes must join other facilities as a network"]);function V(){let E=0,N=Xe(new Date);return[E,l,N,r,s,i,ke(t.toArray().reverse()).join(", "),a,c].join("	")}function F(){n(7,d=l?"":"Required"),n(8,p=r?"":"Required"),n(9,$=s?"":"Required"),n(10,m=i?"":"Required"),n(11,f=a?"":"Required"),n(12,k=c?"":"Required"),!(d||p||$||m||f||k)&&(n(14,I=V()),navigator.clipboard.writeText(I),n(13,S=!0))}function X(){l=this.value,n(1,l)}function O(){r=this.value,n(2,r)}function Z(E){s=E,n(3,s)}function G(E){a=E,n(5,a)}function x(E){i=E,n(4,i)}function H(E){c=E,n(6,c)}const ee=()=>n(13,S=!1);function K(E){S=E,n(13,S)}return o.$$set=E=>{"pt"in E&&n(0,t=E.pt)},o.$$.update=()=>{o.$$.dirty&2&&window.localStorage.setItem("inspector",l),o.$$.dirty&4&&window.localStorage.setItem("schemeReference",r),o.$$.dirty&8&&window.localStorage.setItem("currentDesignStage",s)},[t,l,r,s,i,a,c,d,p,$,m,f,k,S,I,A,L,F,X,O,Z,G,x,H,ee,K]}class et extends z{constructor(e){super(),J(this,e,xe,Ye,Q,{pt:0})}}function tt(o,e,n){let t;ge(o,ve,a=>n(3,t=a));let{enableAdding:l}=e,r=null,{markerPosition:s=null}=e;de(()=>{t.on("click",i),t.getCanvas().style.cursor="crosshair"}),De(()=>{r&&r.remove(),t.off("click",i)});function i(a){r||!l||(t.getCanvas().style.cursor="inherit",r=new ye.Marker({draggable:!0}).setLngLat(a.lngLat).addTo(t),n(0,s=r.getLngLat()),r.on("dragstart",()=>{t.getCanvas().style.cursor="grabbing"}),r.on("dragend",()=>{t.getCanvas().style.cursor="inherit",n(0,s=r.getLngLat())}))}return o.$$set=a=>{"enableAdding"in a&&n(1,l=a.enableAdding),"markerPosition"in a&&n(0,s=a.markerPosition)},[s,l]}class nt extends z{constructor(e){super(),J(this,e,tt,null,Q,{enableAdding:1,markerPosition:0})}}const{window:ot}=Fe;function rt(o){let e;return{c(){e=R("p"),e.textContent="Click the map to add a critical"},m(n,t){w(n,e,t)},p:se,i:se,o:se,d(n){n&&h(e)}}}function st(o){let e,n;return e=new et({props:{pt:o[0]}}),{c(){v(e.$$.fragment)},m(t,l){D(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.pt=t[0]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function it(o){let e,n,t,l,r,s,i,a,c,d;s=new Ce({});const p=[st,rt],$=[];function m(f,k){return f[0]?0:1}return a=m(o),c=$[a]=p[a](o),{c(){e=R("div"),n=R("h1"),n.textContent="Critical issue entry",t=C(),l=R("p"),l.textContent=`App version: ${$e()}`,r=C(),v(s.$$.fragment),i=C(),c.c(),M(e,"slot","sidebar"),M(e,"class","govuk-prose")},m(f,k){w(f,e,k),T(e,n),T(e,t),T(e,l),T(e,r),D(s,e,null),T(e,i),$[a].m(e,null),d=!0},p(f,k){let S=a;a=m(f),a===S?$[a].p(f,k):(Se(),b($[S],1,1,()=>{$[S]=null}),Ie(),c=$[a],c?c.p(f,k):(c=$[a]=p[a](f),c.c()),_(c,1),c.m(e,null))},i(f){d||(_(s.$$.fragment,f),_(c),d=!0)},o(f){b(s.$$.fragment,f),b(c),d=!1},d(f){f&&h(e),y(s),$[a].d()}}}function at(o){let e,n,t,l,r,s,i,a,c;function d(f){o[5](f)}let p={enableAdding:o[1]};o[0]!==void 0&&(p.markerPosition=o[0]),e=new nt({props:p}),B.push(()=>P(e,"markerPosition",d)),r=new Ae({props:{disabled:!o[1]}});function $(f){o[7](f)}let m={displayEnableButton:!0};return o[1]!==void 0&&(m.isInactive=o[1]),i=new Pe({props:m}),o[6](i),B.push(()=>P(i,"isInactive",$)),{c(){v(e.$$.fragment),t=C(),l=R("div"),v(r.$$.fragment),s=C(),v(i.$$.fragment),M(l,"class","top-right svelte-nlvvhu")},m(f,k){D(e,f,k),w(f,t,k),w(f,l,k),D(r,l,null),T(l,s),D(i,l,null),c=!0},p(f,k){const S={};k&2&&(S.enableAdding=f[1]),!n&&k&1&&(n=!0,S.markerPosition=f[0],j(()=>n=!1)),e.$set(S);const I={};k&2&&(I.disabled=!f[1]),r.$set(I);const A={};!a&&k&2&&(a=!0,A.isInactive=f[1],j(()=>a=!1)),i.$set(A)},i(f){c||(_(e.$$.fragment,f),_(r.$$.fragment,f),_(i.$$.fragment,f),c=!0)},o(f){b(e.$$.fragment,f),b(r.$$.fragment,f),b(i.$$.fragment,f),c=!1},d(f){f&&(h(t),h(l)),y(e,f),y(r),o[6](null),y(i)}}}function lt(o){let e,n,t;return n=new Ee({props:{style:o[3],startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[at]},$$scope:{ctx:o}}}),{c(){e=R("div"),v(n.$$.fragment),M(e,"slot","main")},m(l,r){w(l,e,r),D(n,e,null),t=!0},p(l,r){const s={};r&8&&(s.style=l[3]),r&1031&&(s.$$scope={dirty:r,ctx:l}),n.$set(s)},i(l){t||(_(n.$$.fragment,l),t=!0)},o(l){b(n.$$.fragment,l),t=!1},d(l){l&&h(e),y(n)}}}function ut(o){let e,n,t,l;return e=new Be({props:{sidebarWidth:"35rem",$$slots:{main:[lt],sidebar:[it]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},m(r,s){D(e,r,s),n=!0,t||(l=W(ot,"keydown",o[4]),t=!0)},p(r,[s]){const i={};s&1039&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){y(e,r),t=!1,l()}}}function ct(o,e,n){let t;ge(o,fe,m=>n(3,t=m)),de(()=>{Me()});const l=new URLSearchParams(window.location.search);let r=$e()=="Private (development)"?"Road":"dataviz";fe.set(l.get("style")||r);let s=null,i=!0,a;function c(m){!i&&m.key=="Escape"&&(a.disableStreetView(),m.preventDefault())}function d(m){s=m,n(0,s)}function p(m){B[m?"unshift":"push"](()=>{a=m,n(2,a)})}function $(m){i=m,n(1,i)}return[s,i,a,t,c,d,p,$]}class ft extends z{constructor(e){super(),J(this,e,ct,ut,Q,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new ft({target:document.getElementById("app")});
