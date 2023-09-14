import{S as z,i as O,s as H,b as A,c as B,f as w,m as k,k as P,t as $,l as _,p as v,N as me,A as de,F as ie,d as C,h as b,o as h,E as le,e as R,g as M,u as q,v as V,aA as _e,r as Y,M as be,a as he,j as L,an as we,q as ge,a5 as ke,z as ve,x as De,n as ye,y as Ce,w as oe}from"./MapLibreMap.svelte_svelte_type_style_lang-acec8e75.js";import{e as ae,b as Se,d as Ee,L as Ie,M as Me,S as Re}from"./StreetViewController-a1f1637a.js";import{D as Te}from"./DefaultButton-f6842731.js";import{T as $e,W as Le}from"./WarningButton-7d20d715.js";function Ae(r){let e,s,t;function i(o){r[3](o)}let n={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"],["dataviz","Dataviz"]],disabled:r[0]};return r[1]!==void 0&&(n.value=r[1]),e=new ae({props:n}),A.push(()=>B(e,"value",i)),e.$on("change",r[2]),{c(){w(e.$$.fragment)},m(o,a){k(e,o,a),t=!0},p(o,[a]){const l={};a&1&&(l.disabled=o[0]),!s&&a&2&&(s=!0,l.value=o[1],P(()=>s=!1)),e.$set(l)},i(o){t||($(e.$$.fragment,o),t=!0)},o(o){_(e.$$.fragment,o),t=!1},d(o){v(e,o)}}}function Be(r,e,s){let t;me(r,de,l=>s(4,t=l));let{disabled:i}=e,n="dataviz";function o(){t.setStyle(`https://api.maptiler.com/maps/${n}/style.json?key=MZEJTanw3WpxRvt7qDfo`)}function a(l){n=l,s(1,n)}return r.$$set=l=>{"disabled"in l&&s(0,i=l.disabled)},[i,n,o,a]}class Pe extends z{constructor(e){super(),O(this,e,Be,Ae,H,{disabled:0})}}function je(r){let e,s,t,i,n,o;return e=new le({props:{errorMessage:r[1]}}),{c(){w(e.$$.fragment),s=C(),t=R("input"),M(t,"type","text"),M(t,"class","govuk-input"),M(t,"id","locationDescription")},m(a,l){k(e,a,l),b(a,s,l),b(a,t,l),q(t,r[0]),i=!0,n||(o=[V(t,"input",r[5]),V(t,"change",r[3])],n=!0)},p(a,l){const c={};l&2&&(c.errorMessage=a[1]),e.$set(c),l&1&&t.value!==a[0]&&q(t,a[0])},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){_(e.$$.fragment,a),i=!1},d(a){a&&(h(s),h(t)),v(e,a),n=!1,_e(o)}}}function Fe(r){let e;return{c(){e=Y("Lookup location description automatically")},m(s,t){b(s,e,t)},d(s){s&&h(e)}}}function qe(r){let e,s,t;function i(o){r[6](o)}let n={id:"lookupLocation",$$slots:{default:[Fe]},$$scope:{ctx:r}};return r[2]!==void 0&&(n.checked=r[2]),e=new Ee({props:n}),A.push(()=>B(e,"checked",i)),{c(){w(e.$$.fragment)},m(o,a){k(e,o,a),t=!0},p(o,a){const l={};a&256&&(l.$$scope={dirty:a,ctx:o}),!s&&a&4&&(s=!0,l.checked=o[2],P(()=>s=!1)),e.$set(l)},i(o){t||($(e.$$.fragment,o),t=!0)},o(o){_(e.$$.fragment,o),t=!1},d(o){v(e,o)}}}function We(r){let e,s,t,i;return e=new ie({props:{label:"Describe this location",id:"locationDescription",$$slots:{default:[je]},$$scope:{ctx:r}}}),t=new Se({props:{small:!0,$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment),s=C(),w(t.$$.fragment)},m(n,o){k(e,n,o),b(n,s,o),k(t,n,o),i=!0},p(n,[o]){const a={};o&259&&(a.$$scope={dirty:o,ctx:n}),e.$set(a);const l={};o&260&&(l.$$scope={dirty:o,ctx:n}),t.$set(l)},i(n){i||($(e.$$.fragment,n),$(t.$$.fragment,n),i=!0)},o(n){_(e.$$.fragment,n),_(t.$$.fragment,n),i=!1},d(n){n&&h(s),v(e,n),v(t,n)}}}function Ve(r,e,s){let{locationDescription:t}=e,{locationDescriptionError:i}=e,{pt:n}=e,o=!0;async function a(m){if(!o)return;let D=`https://nominatim.openstreetmap.org/reverse?lat=${m.lat}&lon=${m.lng}&format=json`;try{s(0,t="Loading...");let f=await(await fetch(D)).json();s(0,t=f.address.road??f.display_name)}catch(g){console.log(`Location lookup failed: ${g}`)}}function l(){s(2,o=!1)}function c(){t=this.value,s(0,t)}function p(m){o=m,s(2,o)}return r.$$set=m=>{"locationDescription"in m&&s(0,t=m.locationDescription),"locationDescriptionError"in m&&s(1,i=m.locationDescriptionError),"pt"in m&&s(4,n=m.pt)},r.$$.update=()=>{r.$$.dirty&16&&a(n)},[t,i,o,l,n,c,p]}class ze extends z{constructor(e){super(),O(this,e,Ve,We,H,{locationDescription:0,locationDescriptionError:1,pt:4})}}function Oe(r){let e,s,t,i,n,o;return e=new le({props:{errorMessage:r[7]}}),{c(){w(e.$$.fragment),s=C(),t=R("input"),M(t,"type","text"),M(t,"class","govuk-input"),M(t,"id","inspector")},m(a,l){k(e,a,l),b(a,s,l),b(a,t,l),q(t,r[1]),i=!0,n||(o=V(t,"input",r[18]),n=!0)},p(a,l){const c={};l&128&&(c.errorMessage=a[7]),e.$set(c),l&2&&t.value!==a[1]&&q(t,a[1])},i(a){i||($(e.$$.fragment,a),i=!0)},o(a){_(e.$$.fragment,a),i=!1},d(a){a&&(h(s),h(t)),v(e,a),n=!1,o()}}}function He(r){let e,s,t,i,n,o,a,l;return t=new le({props:{errorMessage:r[8]}}),{c(){e=R("div"),e.textContent="Example: ATF2_WLT_01",s=C(),w(t.$$.fragment),i=C(),n=R("input"),M(e,"class","govuk-hint"),M(n,"type","text"),M(n,"class","govuk-input"),M(n,"id","schemeReference")},m(c,p){b(c,e,p),b(c,s,p),k(t,c,p),b(c,i,p),b(c,n,p),q(n,r[2]),o=!0,a||(l=V(n,"input",r[19]),a=!0)},p(c,p){const m={};p&256&&(m.errorMessage=c[8]),t.$set(m),p&4&&n.value!==c[2]&&q(n,c[2])},i(c){o||($(t.$$.fragment,c),o=!0)},o(c){_(t.$$.fragment,c),o=!1},d(c){c&&(h(e),h(s),h(i),h(n)),v(t,c),a=!1,l()}}}function Ne(r){let e;return{c(){e=Y("Export")},m(s,t){b(s,e,t)},d(s){s&&h(e)}}}function Ge(r){let e;return{c(){e=Y("Keep editing this issue")},m(s,t){b(s,e,t)},d(s){s&&h(e)}}}function Je(r){let e;return{c(){e=Y("Done! Enter a new critical")},m(s,t){b(s,e,t)},d(s){s&&h(e)}}}function Ke(r){let e,s,t,i,n,o,a,l,c,p,m,D;return o=new $e({props:{label:"The new row has already been copied to your clipboard. If it didn't work, copy from below",value:r[14]}}),c=new he({props:{$$slots:{default:[Ge]},$$scope:{ctx:r}}}),c.$on("click",r[24]),m=new Le({props:{$$slots:{default:[Je]},$$scope:{ctx:r}}}),m.$on("click",Ye),{c(){e=R("div"),s=R("p"),s.innerHTML=`Edit <i>Inspectors Log.xlsx</i>
      , add a new row at the bottom of
      <i>Form Input</i>
      , and press
      <i>Control+V</i>
      to paste.`,t=C(),i=R("p"),i.innerHTML="<b>You have to manually fill out the first ID column!</b>",n=C(),w(o.$$.fragment),a=C(),l=R("div"),w(c.$$.fragment),p=C(),w(m.$$.fragment),M(l,"class","govuk-button-group"),M(e,"class","govuk-prose")},m(g,f){b(g,e,f),L(e,s),L(e,t),L(e,i),L(e,n),k(o,e,null),L(e,a),L(e,l),k(c,l,null),L(l,p),k(m,l,null),D=!0},p(g,f){const y={};f&16384&&(y.value=g[14]),o.$set(y);const E={};f&134217728&&(E.$$scope={dirty:f,ctx:g}),c.$set(E);const S={};f&134217728&&(S.$$scope={dirty:f,ctx:g}),m.$set(S)},i(g){D||($(o.$$.fragment,g),$(c.$$.fragment,g),$(m.$$.fragment,g),D=!0)},o(g){_(o.$$.fragment,g),_(c.$$.fragment,g),_(m.$$.fragment,g),D=!1},d(g){g&&h(e),v(o),v(c),v(m)}}}function Ue(r){let e,s,t,i,n,o,a,l,c,p,m,D,g,f,y,E,S,j,T,W,F;e=new ie({props:{label:"Inspector name",id:"inspector",$$slots:{default:[Oe]},$$scope:{ctx:r}}}),t=new ie({props:{label:"Scheme reference",id:"schemeReference",$$slots:{default:[He]},$$scope:{ctx:r}}});function Z(u){r[20](u)}let N={label:"Current design stage",id:"currentDesignStage",choices:r[15],emptyOption:!0,errorMessage:r[9]};r[3]!==void 0&&(N.value=r[3]),n=new ae({props:N}),A.push(()=>B(n,"value",Z));function X(u){r[21](u)}let G={pt:r[0],locationDescriptionError:r[11]};r[5]!==void 0&&(G.locationDescription=r[5]),l=new ze({props:G}),A.push(()=>B(l,"locationDescription",X));function x(u){r[22](u)}let J={label:"Critical issue type",id:"criticalIssueType",choices:r[16],emptyOption:!0,errorMessage:r[10]};r[4]!==void 0&&(J.value=r[4]),m=new ae({props:J}),A.push(()=>B(m,"value",x));function ee(u){r[23](u)}let K={label:"Comments or notes",errorMessage:r[12]};r[6]!==void 0&&(K.value=r[6]),f=new $e({props:K}),A.push(()=>B(f,"value",ee)),S=new Te({props:{$$slots:{default:[Ne]},$$scope:{ctx:r}}}),S.$on("click",r[17]);function I(u){r[25](u)}let U={title:"Almost done!",displayEscapeButton:!1,canCloseByClickingBackground:!1,$$slots:{default:[Ke]},$$scope:{ctx:r}};return r[13]!==void 0&&(U.open=r[13]),T=new be({props:U}),A.push(()=>B(T,"open",I)),{c(){w(e.$$.fragment),s=C(),w(t.$$.fragment),i=C(),w(n.$$.fragment),a=C(),w(l.$$.fragment),p=C(),w(m.$$.fragment),g=C(),w(f.$$.fragment),E=C(),w(S.$$.fragment),j=C(),w(T.$$.fragment)},m(u,d){k(e,u,d),b(u,s,d),k(t,u,d),b(u,i,d),k(n,u,d),b(u,a,d),k(l,u,d),b(u,p,d),k(m,u,d),b(u,g,d),k(f,u,d),b(u,E,d),k(S,u,d),b(u,j,d),k(T,u,d),F=!0},p(u,[d]){const ue={};d&134217858&&(ue.$$scope={dirty:d,ctx:u}),e.$set(ue);const ce={};d&134217988&&(ce.$$scope={dirty:d,ctx:u}),t.$set(ce);const te={};d&512&&(te.errorMessage=u[9]),!o&&d&8&&(o=!0,te.value=u[3],P(()=>o=!1)),n.$set(te);const Q={};d&1&&(Q.pt=u[0]),d&2048&&(Q.locationDescriptionError=u[11]),!c&&d&32&&(c=!0,Q.locationDescription=u[5],P(()=>c=!1)),l.$set(Q);const ne={};d&1024&&(ne.errorMessage=u[10]),!D&&d&16&&(D=!0,ne.value=u[4],P(()=>D=!1)),m.$set(ne);const se={};d&4096&&(se.errorMessage=u[12]),!y&&d&64&&(y=!0,se.value=u[6],P(()=>y=!1)),f.$set(se);const fe={};d&134217728&&(fe.$$scope={dirty:d,ctx:u}),S.$set(fe);const re={};d&134242304&&(re.$$scope={dirty:d,ctx:u}),!W&&d&8192&&(W=!0,re.open=u[13],P(()=>W=!1)),T.$set(re)},i(u){F||($(e.$$.fragment,u),$(t.$$.fragment,u),$(n.$$.fragment,u),$(l.$$.fragment,u),$(m.$$.fragment,u),$(f.$$.fragment,u),$(S.$$.fragment,u),$(T.$$.fragment,u),F=!0)},o(u){_(e.$$.fragment,u),_(t.$$.fragment,u),_(n.$$.fragment,u),_(l.$$.fragment,u),_(m.$$.fragment,u),_(f.$$.fragment,u),_(S.$$.fragment,u),_(T.$$.fragment,u),F=!1},d(u){u&&(h(s),h(i),h(a),h(p),h(g),h(E),h(j)),v(e,u),v(t,u),v(n,u),v(l,u),v(m,u),v(f,u),v(S,u),v(T,u)}}}function pe(r){return r.map(e=>[e,e])}function Qe(r){let e=25569,t=24*(60*60*1e3);return r.getTime()/t+e}function Ye(){location.reload()}function Ze(r,e,s){let{pt:t}=e,i=window.localStorage.getItem("inspector")??"",n=window.localStorage.getItem("schemeReference")??"",o=window.localStorage.getItem("currentDesignStage")??"",a="",l="",c="",p="",m="",D="",g="",f="",y="",E=!1,S="",j=pe(["Baseline","Feasibility Design","Preliminary Design","Outline Design","Detailed Design","Inspection"]),T=pe(["1 - Conflict at Side Roads","2 - Conflict at Major Junctions / Roundabouts","3 - Collision Alongside or from Behind","4 - Trip Hazard","5 - Kerbside Activity","6A - Risk of Crossing Conflict (Busy Roads)","6B - Risk of Crossing Conflict (Quieter Roads)","7A - Standard of Crossing Facility (Busy Roads)","7B - Standard of Crossing Facility (Junction)","8 - Traffic Speed (>37mph)","9A - Traffic Volume (>10,000vpd)","9B - Traffic Volume (>5% HGVs)","10 - Crossing Speed","11A - Footway Width (Absolute Minimum <1m)","11B - Footway Width (at Pinchpoints)","11C - Footway Width - Poor Pedestrian Comfort","12 - Tram - Insufficient width next to Tram Track","13 - Tram/Rail - Poor Crossing Angle","14 - Major Cycle Surface Defect","15 - Major Pedestrian Surface Defect","16 - Inappropriate Shared Use","17 - Barriers, Steps and/or Dismount signs","18 - Route isn't direct, logical or intuitive to all users","19 - Inappropriate Surface Materials","20 - Inappropriate Lighting","21 - Routes must join other facilities as a network"]);function W(){let I=0,U=Qe(new Date);return[I,i,U,n,o,a,we(t.toArray().reverse()).join(", "),l,c].join("	")}function F(){s(7,p=i?"":"Required"),s(8,m=n?"":"Required"),s(9,D=o?"":"Required"),s(10,g=a?"":"Required"),s(11,f=l?"":"Required"),s(12,y=c?"":"Required"),!(p||m||D||g||f||y)&&(s(14,S=W()),navigator.clipboard.writeText(S),s(13,E=!0))}function Z(){i=this.value,s(1,i)}function N(){n=this.value,s(2,n)}function X(I){o=I,s(3,o)}function G(I){l=I,s(5,l)}function x(I){a=I,s(4,a)}function J(I){c=I,s(6,c)}const ee=()=>s(13,E=!1);function K(I){E=I,s(13,E)}return r.$$set=I=>{"pt"in I&&s(0,t=I.pt)},r.$$.update=()=>{r.$$.dirty&2&&window.localStorage.setItem("inspector",i),r.$$.dirty&4&&window.localStorage.setItem("schemeReference",n),r.$$.dirty&8&&window.localStorage.setItem("currentDesignStage",o)},[t,i,n,o,a,l,c,p,m,D,g,f,y,E,S,j,T,F,Z,N,X,G,x,J,ee,K]}class Xe extends z{constructor(e){super(),O(this,e,Ze,Ue,H,{pt:0})}}function xe(r,e,s){let t;me(r,de,l=>s(3,t=l));let{enableAdding:i}=e,n=null,{markerPosition:o=null}=e;ge(()=>{t.on("click",a),t.getCanvas().style.cursor="crosshair"}),ke(()=>{n&&n.remove(),t.off("click",a)});function a(l){n||!i||(t.getCanvas().style.cursor="inherit",n=new ve.Marker({draggable:!0}).setLngLat(l.lngLat).addTo(t),s(0,o=n.getLngLat()),n.on("dragstart",()=>{t.getCanvas().style.cursor="grabbing"}),n.on("dragend",()=>{t.getCanvas().style.cursor="inherit",s(0,o=n.getLngLat())}))}return r.$$set=l=>{"enableAdding"in l&&s(1,i=l.enableAdding),"markerPosition"in l&&s(0,o=l.markerPosition)},[o,i]}class et extends z{constructor(e){super(),O(this,e,xe,null,H,{enableAdding:1,markerPosition:0})}}function tt(r){let e;return{c(){e=R("p"),e.textContent="Click the map to add a critical"},m(s,t){b(s,e,t)},p:oe,i:oe,o:oe,d(s){s&&h(e)}}}function nt(r){let e,s;return e=new Xe({props:{pt:r[0]}}),{c(){w(e.$$.fragment)},m(t,i){k(e,t,i),s=!0},p(t,i){const n={};i&1&&(n.pt=t[0]),e.$set(n)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function st(r){let e,s,t,i,n,o;const a=[nt,tt],l=[];function c(p,m){return p[0]?0:1}return i=c(r),n=l[i]=a[i](r),{c(){e=R("div"),s=R("h1"),s.textContent="Critical issue entry",t=C(),n.c(),M(e,"slot","sidebar"),M(e,"class","govuk-prose")},m(p,m){b(p,e,m),L(e,s),L(e,t),l[i].m(e,null),o=!0},p(p,m){let D=i;i=c(p),i===D?l[i].p(p,m):(De(),_(l[D],1,1,()=>{l[D]=null}),ye(),n=l[i],n?n.p(p,m):(n=l[i]=a[i](p),n.c()),$(n,1),n.m(e,null))},i(p){o||($(n),o=!0)},o(p){_(n),o=!1},d(p){p&&h(e),l[i].d()}}}function rt(r){let e,s,t,i,n,o,a,l,c;function p(f){r[4](f)}let m={enableAdding:r[1]};r[0]!==void 0&&(m.markerPosition=r[0]),e=new et({props:m}),A.push(()=>B(e,"markerPosition",p)),n=new Pe({props:{disabled:!r[1]}});function D(f){r[6](f)}let g={displayEnableButton:!0};return r[1]!==void 0&&(g.isInactive=r[1]),a=new Re({props:g}),r[5](a),A.push(()=>B(a,"isInactive",D)),{c(){w(e.$$.fragment),t=C(),i=R("div"),w(n.$$.fragment),o=C(),w(a.$$.fragment),M(i,"class","top-right svelte-nlvvhu")},m(f,y){k(e,f,y),b(f,t,y),b(f,i,y),k(n,i,null),L(i,o),k(a,i,null),c=!0},p(f,y){const E={};y&2&&(E.enableAdding=f[1]),!s&&y&1&&(s=!0,E.markerPosition=f[0],P(()=>s=!1)),e.$set(E);const S={};y&2&&(S.disabled=!f[1]),n.$set(S);const j={};!l&&y&2&&(l=!0,j.isInactive=f[1],P(()=>l=!1)),a.$set(j)},i(f){c||($(e.$$.fragment,f),$(n.$$.fragment,f),$(a.$$.fragment,f),c=!0)},o(f){_(e.$$.fragment,f),_(n.$$.fragment,f),_(a.$$.fragment,f),c=!1},d(f){f&&(h(t),h(i)),v(e,f),v(n),r[5](null),v(a)}}}function ot(r){let e,s,t;return s=new Me({props:{style:"dataviz",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[rt]},$$scope:{ctx:r}}}),{c(){e=R("div"),w(s.$$.fragment),M(e,"slot","main")},m(i,n){b(i,e,n),k(s,e,null),t=!0},p(i,n){const o={};n&135&&(o.$$scope={dirty:n,ctx:i}),s.$set(o)},i(i){t||($(s.$$.fragment,i),t=!0)},o(i){_(s.$$.fragment,i),t=!1},d(i){i&&h(e),v(s)}}}function it(r){let e,s,t,i;return e=new Ie({props:{sidebarWidth:"35rem",$$slots:{main:[ot],sidebar:[st]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},m(n,o){k(e,n,o),s=!0,t||(i=V(window,"keydown",r[3]),t=!0)},p(n,[o]){const a={};o&135&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){s||($(e.$$.fragment,n),s=!0)},o(n){_(e.$$.fragment,n),s=!1},d(n){v(e,n),t=!1,i()}}}function at(r,e,s){ge(()=>{Ce()});let t=null,i=!0,n;function o(p){!i&&p.key=="Escape"&&(n.disableStreetView(),p.preventDefault())}function a(p){t=p,s(0,t)}function l(p){A[p?"unshift":"push"](()=>{n=p,s(2,n)})}function c(p){i=p,s(1,i)}return[t,i,n,o,a,l,c]}class lt extends z{constructor(e){super(),O(this,e,at,it,H,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new lt({target:document.getElementById("app")});
