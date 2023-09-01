import{S as V,i as E,s as B,C as M,e as $,f as _,g as k,h as b,G as R,H as D,I as N,t as g,k as h,n as w,c as S,P as O,u as z,aE as ue,K as fe,aT as pe,b as W,a as Z,d as C,m as L,j as F,o as I,q as H,M as re,v as A,aA as ie,N as K,w as G,l as T,O as de,T as j,z as U,A as me,X as _e,V as ge,a1 as X,a0 as Q,W as he,a5 as be,a4 as $e,a3 as Y,as as x,a6 as ae,at as ee,aU as ve}from"./layer_helper_utils-391e6b00.js";import{S as ke}from"./MapLibreMap-9b6c918a.js";import{M as we,S as J,R as ye,a as Se}from"./InteractiveLayer-f2507dad.js";function Ce(o){let e,t,l;const n=o[3].default,r=M(n,o,o[2],null);return{c(){e=$("fieldset"),t=$("div"),r&&r.c(),_(t,"class",o[0]),_(t,"data-module","govuk-checkboxes"),_(e,"class","govuk-fieldset")},m(s,a){k(s,e,a),b(e,t),r&&r.m(t,null),l=!0},p(s,[a]){r&&r.p&&(!l||a&4)&&R(r,n,s,s[2],l?N(n,s[2],a,null):D(s[2]),null)},i(s){l||(g(r,s),l=!0)},o(s){h(r,s),l=!1},d(s){s&&w(e),r&&r.d(s)}}}function Le(o,e,t){let{$$slots:l={},$$scope:n}=e,{small:r=!1}=e,s=r?"govuk-checkboxes--small":"govuk-checkboxes";return o.$$set=a=>{"small"in a&&t(1,r=a.small),"$$scope"in a&&t(2,n=a.$$scope)},[s,r,n,l]}class at extends V{constructor(e){super(),E(this,e,Le,Ce,B,{small:1})}}const Ie=o=>({}),te=o=>({});function Ve(o){let e,t,l,n,r,s,a,i,c;const u=o[5].default,p=M(u,o,o[4],null),f=o[5].right,d=M(f,o,o[4],te);return{c(){e=$("div"),t=$("input"),l=S(),n=$("label"),p&&p.c(),r=S(),s=$("span"),d&&d.c(),_(t,"type","checkbox"),_(t,"class","govuk-checkboxes__input"),_(t,"id",o[1]),_(n,"class","govuk-label govuk-checkboxes__label"),_(n,"for",o[1]),_(n,"title",o[2]),O(s,"float","right"),_(e,"class","govuk-checkboxes__item"),_(e,"style",o[3])},m(m,y){k(m,e,y),b(e,t),t.checked=o[0],b(e,l),b(e,n),p&&p.m(n,null),b(e,r),b(e,s),d&&d.m(s,null),a=!0,i||(c=[z(t,"change",o[7]),z(t,"change",o[6])],i=!0)},p(m,[y]){(!a||y&2)&&_(t,"id",m[1]),y&1&&(t.checked=m[0]),p&&p.p&&(!a||y&16)&&R(p,u,m,m[4],a?N(u,m[4],y,null):D(m[4]),null),(!a||y&2)&&_(n,"for",m[1]),(!a||y&4)&&_(n,"title",m[2]),d&&d.p&&(!a||y&16)&&R(d,f,m,m[4],a?N(f,m[4],y,Ie):D(m[4]),te)},i(m){a||(g(p,m),g(d,m),a=!0)},o(m){h(p,m),h(d,m),a=!1},d(m){m&&w(e),p&&p.d(m),d&&d.d(m),i=!1,ue(c)}}}function Ee(o,e,t){let{$$slots:l={},$$scope:n}=e;const r=pe(l);let{id:s}=e,{checked:a}=e,{hint:i=null}=e,u=r.right!==void 0?"float: none":"";function p(d){fe.call(this,o,d)}function f(){a=this.checked,t(0,a)}return o.$$set=d=>{"id"in d&&t(1,s=d.id),"checked"in d&&t(0,a=d.checked),"hint"in d&&t(2,i=d.hint),"$$scope"in d&&t(4,n=d.$$scope)},[a,s,i,u,n,l,p,f]}class ct extends V{constructor(e){super(),E(this,e,Ee,Ve,B,{id:1,checked:0,hint:2})}}function Be(o){let e,t,l;function n(s){o[2](s)}let r={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"],["dataviz","Dataviz"]]};return o[0]!==void 0&&(r.value=o[0]),e=new ke({props:r}),W.push(()=>Z(e,"value",n)),e.$on("change",o[1]),{c(){C(e.$$.fragment)},m(s,a){L(e,s,a),l=!0},p(s,[a]){const i={};!t&&a&1&&(t=!0,i.value=s[0],F(()=>t=!1)),e.$set(i)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){I(e,s)}}}function Pe(o,e,t){let{style:l}=e;function n(){let s=new URLSearchParams(window.location.search);s.set("style",l);let a=`${window.location.pathname}?${s.toString()}${window.location.hash}`;window.location.href=a}function r(s){l=s,t(0,l)}return o.$$set=s=>{"style"in s&&t(0,l=s.style)},[l,n,r]}class ut extends V{constructor(e){super(),E(this,e,Pe,Be,B,{style:0})}}function He(o){let e,t,l,n,r,s,a;const i=o[3].default,c=M(i,o,o[2],null);return{c(){e=$("details"),t=$("summary"),l=$("span"),n=H(o[0]),r=S(),s=$("div"),c&&c.c(),_(l,"class","govuk-details__summary-text"),_(t,"class","govuk-details__summary"),_(s,"class","govuk-details__text"),e.open=o[1],_(e,"class","govuk-details"),_(e,"data-module","govuk-details")},m(u,p){k(u,e,p),b(e,t),b(t,l),b(l,n),b(e,r),b(e,s),c&&c.m(s,null),a=!0},p(u,[p]){(!a||p&1)&&re(n,u[0]),c&&c.p&&(!a||p&4)&&R(c,i,u,u[2],a?N(i,u[2],p,null):D(u[2]),null),(!a||p&2)&&(e.open=u[1])},i(u){a||(g(c,u),a=!0)},o(u){h(c,u),a=!1},d(u){u&&w(e),c&&c.d(u)}}}function Me(o,e,t){let{$$slots:l={},$$scope:n}=e,{label:r}=e,{open:s=!1}=e;return o.$$set=a=>{"label"in a&&t(0,r=a.label),"open"in a&&t(1,s=a.open),"$$scope"in a&&t(2,n=a.$$scope)},[r,s,n,l]}class ce extends V{constructor(e){super(),E(this,e,Me,He,B,{label:0,open:1})}}function Re(o){let e;return{c(){e=$("span"),_(e,"class","svelte-kzgqtg"),O(e,"background",o[0])},m(t,l){k(t,e,l)},p(t,[l]){l&1&&O(e,"background",t[0])},i:A,o:A,d(t){t&&w(e)}}}function De(o,e,t){let{color:l}=e;return o.$$set=n=>{"color"in n&&t(0,l=n.color)},[l]}class Ne extends V{constructor(e){super(),E(this,e,De,Re,B,{color:0})}}const je="/atip/critical_entry_mvp/assets/help-d011708a.svg";function Ge(o){let e,t;const l=o[1].default,n=M(l,o,o[4],null);return{c(){e=$("div"),n&&n.c(),_(e,"class","govuk-prose")},m(r,s){k(r,e,s),n&&n.m(e,null),t=!0},p(r,s){n&&n.p&&(!t||s&16)&&R(n,l,r,r[4],t?N(l,r[4],s,null):D(r[4]),null)},i(r){t||(g(n,r),t=!0)},o(r){h(n,r),t=!1},d(r){r&&w(e),n&&n.d(r)}}}function Te(o){let e,t,l,n,r,s,a,i,c;function u(f){o[3](f)}let p={title:"Help",$$slots:{default:[Ge]},$$scope:{ctx:o}};return o[0]!==void 0&&(p.open=o[0]),r=new we({props:p}),W.push(()=>Z(r,"open",u)),{c(){e=$("button"),t=$("img"),n=S(),C(r.$$.fragment),ie(t.src,l=je)||_(t,"src",l),_(t,"title","Help"),_(t,"alt","Help"),_(e,"class","svelte-7d9d1l")},m(f,d){k(f,e,d),b(e,t),k(f,n,d),L(r,f,d),a=!0,i||(c=z(e,"click",o[2]),i=!0)},p(f,[d]){const m={};d&16&&(m.$$scope={dirty:d,ctx:f}),!s&&d&1&&(s=!0,m.open=f[0],F(()=>s=!1)),r.$set(m)},i(f){a||(g(r.$$.fragment,f),a=!0)},o(f){h(r.$$.fragment,f),a=!1},d(f){f&&(w(e),w(n)),I(r,f),i=!1,c()}}}function qe(o,e,t){let{$$slots:l={},$$scope:n}=e,r=!1;const s=()=>t(0,r=!0);function a(i){r=i,t(0,r)}return o.$$set=i=>{"$$scope"in i&&t(4,n=i.$$scope)},[r,l,s,a,n]}class ft extends V{constructor(e){super(),E(this,e,qe,Te,B,{})}}function ne(o,e,t){const l=o.slice();return l[1]=e[t][0],l[2]=e[t][1],l}function le(o){let e,t,l,n=o[1]+"",r,s,a;return t=new Ne({props:{color:o[2]}}),{c(){e=$("li"),C(t.$$.fragment),l=S(),r=H(n),s=S()},m(i,c){k(i,e,c),L(t,e,null),b(e,l),b(e,r),b(e,s),a=!0},p(i,c){const u={};c&1&&(u.color=i[2]),t.$set(u),(!a||c&1)&&n!==(n=i[1]+"")&&re(r,n)},i(i){a||(g(t.$$.fragment,i),a=!0)},o(i){h(t.$$.fragment,i),a=!1},d(i){i&&w(e),I(t)}}}function Oe(o){let e,t,l=K(o[0]),n=[];for(let s=0;s<l.length;s+=1)n[s]=le(ne(o,l,s));const r=s=>h(n[s],1,1,()=>{n[s]=null});return{c(){e=$("ul");for(let s=0;s<n.length;s+=1)n[s].c()},m(s,a){k(s,e,a);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null);t=!0},p(s,a){if(a&1){l=K(s[0]);let i;for(i=0;i<l.length;i+=1){const c=ne(s,l,i);n[i]?(n[i].p(c,a),g(n[i],1)):(n[i]=le(c),n[i].c(),g(n[i],1),n[i].m(e,null))}for(G(),i=l.length;i<n.length;i+=1)r(i);T()}},i(s){if(!t){for(let a=0;a<l.length;a+=1)g(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)h(n[a]);t=!1},d(s){s&&w(e),de(n,s)}}}function ze(o){let e,t;return e=new ce({props:{label:"Legend",$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},m(l,n){L(e,l,n),t=!0},p(l,[n]){const r={};n&33&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function Ae(o,e,t){let{rows:l}=e;return o.$$set=n=>{"rows"in n&&t(0,l=n.rows)},[l]}class pt extends V{constructor(e){super(),E(this,e,Ae,ze,B,{rows:0})}}const We="/atip/critical_entry_mvp/assets/zoom_out_map-b2e1091a.svg";function Ze(o){let e,t;return{c(){e=$("img"),ie(e.src,t=We)||_(e,"src",t),_(e,"alt","Zoom to show entire boundary")},m(l,n){k(l,e,n)},p:A,d(l){l&&w(e)}}}function Fe(o){let e,t;return e=new J({props:{title:"Zoom to show entire boundary",$$slots:{default:[Ze]},$$scope:{ctx:o}}}),e.$on("click",o[0]),{c(){C(e.$$.fragment)},m(l,n){L(e,l,n),t=!0},p(l,[n]){const r={};n&8&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function Ue(o,e,t){let l;j(o,U,s=>t(2,l=s));let{boundaryGeojson:n}=e;function r(){l.fitBounds(me(n),{padding:20,animate:!0,duration:500})}return o.$$set=s=>{"boundaryGeojson"in s&&t(1,n=s.boundaryGeojson)},[r,n]}class dt extends V{constructor(e){super(),E(this,e,Ue,Fe,B,{boundaryGeojson:1})}}const v={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue"},Je=10,q=10;let P="interventions";function Ke(o,e,t){let l,n;j(o,U,i=>t(1,l=i)),j(o,_e,i=>t(2,n=i));let{colorInterventions:r}=e;ge(l,P,n);const s=["!=","hide_while_editing",!0];return X(l,{id:"interventions-points",source:P,filter:["all",be,s,["!=","endpoint",!0]],color:r,radius:Je}),Q(l,{id:"interventions-lines",source:P,filter:["all",$e,s],color:r,width:q}),X(l,{id:"interventions-lines-endpoints",source:P,filter:["==","endpoint",!0],radius:.5*q,opacity:0,strokeColor:v.lineEndpointColor,strokeWidth:2}),he(l,{id:"interventions-polygons",source:P,filter:["all",Y,s],color:r,opacity:.2}),Q(l,{id:"interventions-polygon-outlines",source:P,filter:["all",Y,s],color:r,opacity:.5,width:.7*q}),o.$$set=i=>{"colorInterventions"in i&&t(0,r=i.colorInterventions)},o.$$.update=()=>{if(o.$$.dirty&6){let i=JSON.parse(JSON.stringify(n)),c=[];for(let u of i.features)if(u.geometry.type=="LineString"&&!u.properties.hide_while_editing)for(let p of[u.geometry.coordinates[0],u.geometry.coordinates[u.geometry.coordinates.length-1]])c.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:p}});i.features=i.features.concat(c),l.getSource(P).setData(i)}},[r,l,n]}class mt extends V{constructor(e){super(),E(this,e,Ke,null,B,{colorInterventions:0})}}function _t(o){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[o]}function gt(o){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[o]}function ht(o){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[o]}function bt(o){return o=="planning"?x(["get","reference_type",["get","planning"]],{preapp:v.preapp,outline:v.outline,"reserved matters":v["reserved matters"],"local plan":v["local plan"]},"black"):x(["get","intervention_type"],{area:v.area,route:v.route,crossing:v.crossing,other:v.other},"white")}function $t(o){return o=="planning"?[["Preapp",v.preapp],["Outline",v.outline],["Reserved matters",v["reserved matters"]],["Local plan",v["local plan"]]]:[["Areas",v.area],["Routes",v.route],["Crossings",v.crossing],["Other",v.other]]}const Xe="/atip/critical_entry_mvp/assets/camera_cursor-824d29b6.svg";function se(o){let e,t,l,n;const r=[Ye,Qe],s=[];function a(i,c){return i[0]?0:1}return e=a(o),t=s[e]=r[e](o),{c(){t.c(),l=ae()},m(i,c){s[e].m(i,c),k(i,l,c),n=!0},p(i,c){let u=e;e=a(i),e===u?s[e].p(i,c):(G(),h(s[u],1,1,()=>{s[u]=null}),T(),t=s[e],t?t.p(i,c):(t=s[e]=r[e](i),t.c()),g(t,1),t.m(l.parentNode,l))},i(i){n||(g(t),n=!0)},o(i){h(t),n=!1},d(i){i&&w(l),s[e].d(i)}}}function Qe(o){let e,t;return e=new J({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),e.$on("click",o[3]),{c(){C(e.$$.fragment)},m(l,n){L(e,l,n),t=!0},p(l,n){const r={};n&512&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function Ye(o){let e,t;return e=new J({props:{$$slots:{default:[et]},$$scope:{ctx:o}}}),e.$on("click",o[2]),{c(){C(e.$$.fragment)},m(l,n){L(e,l,n),t=!0},p(l,n){const r={};n&512&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){I(e,l)}}}function xe(o){let e;return{c(){e=H("Disable Street View")},m(t,l){k(t,e,l)},d(t){t&&w(e)}}}function et(o){let e;return{c(){e=H("Enable Street View")},m(t,l){k(t,e,l)},d(t){t&&w(e)}}}function oe(o){let e,t,l,n,r;function s(i){o[6](i)}let a={legend:"Source",id:"streetViewImagery",choices:[["google","Google Street View"],["bing","Bing Streetside"]]};return o[4].streetViewImagery!==void 0&&(a.value=o[4].streetViewImagery),e=new ye({props:a}),W.push(()=>Z(e,"value",s)),n=new ce({props:{label:"Help",$$slots:{default:[nt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),l=S(),C(n.$$.fragment)},m(i,c){L(e,i,c),k(i,l,c),L(n,i,c),r=!0},p(i,c){const u={};!t&&c&16&&(t=!0,u.value=i[4].streetViewImagery,F(()=>t=!1)),e.$set(u);const p={};c&512&&(p.$$scope={dirty:c,ctx:i}),n.$set(p)},i(i){r||(g(e.$$.fragment,i),g(n.$$.fragment,i),r=!0)},o(i){h(e.$$.fragment,i),h(n.$$.fragment,i),r=!1},d(i){i&&w(l),I(e,i),I(n,i)}}}function tt(o){let e;return{c(){e=H("Luc Chaissac")},m(t,l){k(t,e,l)},d(t){t&&w(e)}}}function nt(o){let e,t,l,n,r,s,a,i,c;return i=new Se({props:{href:"https://icon-icons.com/icon/screenshot-cursor-camera/100181",$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){e=$("ul"),t=$("li"),t.innerHTML=`<b>Click</b>
        on the map to open a new tab with a 3rd-party imagery provider`,l=S(),n=$("li"),n.innerHTML=`Press <b>Escape</b>
        to exit this mode`,r=S(),s=$("li"),a=H("Cursor by "),C(i.$$.fragment)},m(u,p){k(u,e,p),b(e,t),b(e,l),b(e,n),b(e,r),b(e,s),b(s,a),L(i,s,null),c=!0},p(u,p){const f={};p&512&&(f.$$scope={dirty:p,ctx:u}),i.$set(f)},i(u){c||(g(i.$$.fragment,u),c=!0)},o(u){h(i.$$.fragment,u),c=!1},d(u){u&&w(e),I(i)}}}function lt(o){let e,t,l,n=o[1]&&se(o),r=!o[0]&&oe(o);return{c(){n&&n.c(),e=S(),r&&r.c(),t=ae()},m(s,a){n&&n.m(s,a),k(s,e,a),r&&r.m(s,a),k(s,t,a),l=!0},p(s,[a]){s[1]?n?(n.p(s,a),a&2&&g(n,1)):(n=se(s),n.c(),g(n,1),n.m(e.parentNode,e)):n&&(G(),h(n,1,1,()=>{n=null}),T()),s[0]?r&&(G(),h(r,1,1,()=>{r=null}),T()):r?(r.p(s,a),a&1&&g(r,1)):(r=oe(s),r.c(),g(r,1),r.m(t.parentNode,t))},i(s){l||(g(n),g(r),l=!0)},o(s){h(n),h(r),l=!1},d(s){s&&(w(e),w(t)),n&&n.d(s),r&&r.d(s)}}}function st(o,e,t){let l,n;j(o,U,f=>t(7,l=f)),j(o,ee,f=>t(4,n=f));let{displayEnableButton:r}=e,{isInactive:s}=e,a=ve();function i(f){if(s)return;let d=f.lngLat.lng,m=f.lngLat.lat;n.streetViewImagery=="google"?window.open(`http://maps.google.com/maps?q=&layer=c&cbll=${m},${d}&cbp=11,0,0,0,0`,"_blank"):n.streetViewImagery=="bing"&&window.open(`https://www.bing.com/maps?cp=${m}~${d}&style=x`,"_blank")}function c(){t(0,s=!1),l.on("click",i),l.getCanvas().style.cursor=`url(${Xe}), auto`;for(let f of a)f.setProperty(l,"line-color",v.streetview)}function u(){t(0,s=!0),l.off("click",i),l.getCanvas().style.cursor="inherit";for(let f of a)f.returnToDefaultPaintValues(l)}function p(f){o.$$.not_equal(n.streetViewImagery,f)&&(n.streetViewImagery=f,ee.set(n))}return o.$$set=f=>{"displayEnableButton"in f&&t(1,r=f.displayEnableButton),"isInactive"in f&&t(0,s=f.isInactive)},[s,r,c,u,n,i,p]}class vt extends V{constructor(e){super(),E(this,e,st,lt,B,{displayEnableButton:1,isInactive:0,handleMapClickEvent:5,enableStreetView:2,disableStreetView:3})}get handleMapClickEvent(){return this.$$.ctx[5]}get enableStreetView(){return this.$$.ctx[2]}get disableStreetView(){return this.$$.ctx[3]}}export{ut as B,ce as C,ft as H,mt as I,pt as L,vt as S,dt as Z,Je as a,at as b,v as c,ct as d,ht as e,_t as f,bt as g,$t as h,Ne as i,q as l,gt as s};
