import{S as C,i as $,s as L,G as E,e as p,h as _,j as y,k as g,J as P,K as j,L as z,t as b,l as k,p as S,f as B,w as R,F as he,g as I,m as M,q as Z,U as q,ac as be,aL as ve,aX as V,V as fe,aK as ke,P as we,aY as ye,v as N,u as T,T as A,b as K,c as de,o as _e,W as Q,x as W,Q as Se,aG as me,aZ as X,y as pe,n as ge,a as Ce,Z as J,C as U,D as $e,a1 as Le,$ as Oe,a7 as Y,a6 as x,a0 as Ee,ab as Pe,aa as je,a9 as ee,ay as te,a_ as ze,r as Be,B as F,af as De}from"./data_getter-9d58b4c1.js";function Ge(s){let e,n,t;const l=s[3].default,o=E(l,s,s[2],null);return{c(){e=p("fieldset"),n=p("div"),o&&o.c(),_(n,"class",s[0]),_(n,"data-module","govuk-checkboxes"),_(e,"class","govuk-fieldset")},m(a,r){y(a,e,r),g(e,n),o&&o.m(n,null),t=!0},p(a,[r]){o&&o.p&&(!t||r&4)&&P(o,l,a,a[2],t?z(l,a[2],r,null):j(a[2]),null)},i(a){t||(b(o,a),t=!0)},o(a){k(o,a),t=!1},d(a){a&&S(e),o&&o.d(a)}}}function Ie(s,e,n){let{$$slots:t={},$$scope:l}=e,{small:o=!1}=e,a=o?"govuk-checkboxes--small":"govuk-checkboxes";return s.$$set=r=>{"small"in r&&n(1,o=r.small),"$$scope"in r&&n(2,l=r.$$scope)},[a,o,l,t]}class ht extends C{constructor(e){super(),$(this,e,Ie,Ge,L,{small:1})}}const Me=s=>({}),ne=s=>({});function Ze(s){let e,n,t,l,o,a,r,i;const u=s[4].default,c=E(u,s,s[3],null),d=s[4].right,m=E(d,s,s[3],ne);return{c(){e=p("div"),n=p("input"),t=B(),l=p("label"),c&&c.c(),o=B(),m&&m.c(),_(n,"type","checkbox"),_(n,"class","govuk-checkboxes__input"),_(n,"id",s[1]),_(l,"class","govuk-label govuk-checkboxes__label"),_(l,"for",s[1]),_(l,"title",s[2]),_(e,"class","govuk-checkboxes__item")},m(f,v){y(f,e,v),g(e,n),n.checked=s[0],g(e,t),g(e,l),c&&c.m(l,null),g(e,o),m&&m.m(e,null),a=!0,r||(i=R(n,"change",s[5]),r=!0)},p(f,[v]){(!a||v&2)&&_(n,"id",f[1]),v&1&&(n.checked=f[0]),c&&c.p&&(!a||v&8)&&P(c,u,f,f[3],a?z(u,f[3],v,null):j(f[3]),null),(!a||v&2)&&_(l,"for",f[1]),(!a||v&4)&&_(l,"title",f[2]),m&&m.p&&(!a||v&8)&&P(m,d,f,f[3],a?z(d,f[3],v,Me):j(f[3]),ne)},i(f){a||(b(c,f),b(m,f),a=!0)},o(f){k(c,f),k(m,f),a=!1},d(f){f&&S(e),c&&c.d(f),m&&m.d(f),r=!1,i()}}}function Re(s,e,n){let{$$slots:t={},$$scope:l}=e,{id:o}=e,{checked:a}=e,{hint:r=null}=e;function i(){a=this.checked,n(0,a)}return s.$$set=u=>{"id"in u&&n(1,o=u.id),"checked"in u&&n(0,a=u.checked),"hint"in u&&n(2,r=u.hint),"$$scope"in u&&n(3,l=u.$$scope)},[a,o,r,l,t,i]}class bt extends C{constructor(e){super(),$(this,e,Re,Ze,L,{id:1,checked:0,hint:2})}}function le(s,e,n){const t=s.slice();return t[8]=e[n][0],t[9]=e[n][1],t}function se(s){let e;return{c(){e=p("option"),e.__value="",N(e,e.__value)},m(n,t){y(n,e,t)},d(n){n&&S(e)}}}function oe(s){let e,n=s[9]+"",t,l;return{c(){e=p("option"),t=T(n),e.__value=l=s[8],N(e,e.__value)},m(o,a){y(o,e,a),g(e,t)},p(o,a){a&8&&n!==(n=o[9]+"")&&A(t,n),a&8&&l!==(l=o[8])&&(e.__value=l,N(e,e.__value))},d(o){o&&S(e)}}}function qe(s){let e,n,t,l,o=s[4]&&se(),a=q(s[3]),r=[];for(let i=0;i<a.length;i+=1)r[i]=oe(le(s,a,i));return{c(){e=p("select"),o&&o.c(),n=be();for(let i=0;i<r.length;i+=1)r[i].c();_(e,"class","govuk-select"),_(e,"id",s[2]),e.disabled=s[5],s[0]===void 0&&ve(()=>s[7].call(e))},m(i,u){y(i,e,u),o&&o.m(e,null),g(e,n);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);V(e,s[0],!0),t||(l=[R(e,"change",s[7]),R(e,"change",s[6])],t=!0)},p(i,u){if(i[4]?o||(o=se(),o.c(),o.m(e,n)):o&&(o.d(1),o=null),u&8){a=q(i[3]);let c;for(c=0;c<a.length;c+=1){const d=le(i,a,c);r[c]?r[c].p(d,u):(r[c]=oe(d),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=a.length}u&4&&_(e,"id",i[2]),u&32&&(e.disabled=i[5]),u&9&&V(e,i[0])},d(i){i&&S(e),o&&o.d(),fe(r,i),t=!1,ke(l)}}}function Fe(s){let e,n;return e=new he({props:{label:s[1],id:s[2],$$slots:{default:[qe]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},m(t,l){M(e,t,l),n=!0},p(t,[l]){const o={};l&2&&(o.label=t[1]),l&4&&(o.id=t[2]),l&4157&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function He(s,e,n){let{label:t}=e,{id:l}=e,{choices:o}=e,{emptyOption:a=!1}=e,{disabled:r=!1}=e,{value:i}=e;function u(d){we.call(this,s,d)}function c(){i=ye(this),n(0,i),n(3,o)}return s.$$set=d=>{"label"in d&&n(1,t=d.label),"id"in d&&n(2,l=d.id),"choices"in d&&n(3,o=d.choices),"emptyOption"in d&&n(4,a=d.emptyOption),"disabled"in d&&n(5,r=d.disabled),"value"in d&&n(0,i=d.value)},[i,t,l,o,a,r,u,c]}class Ne extends C{constructor(e){super(),$(this,e,He,Fe,L,{label:1,id:2,choices:3,emptyOption:4,disabled:5,value:0})}}function We(s){let e,n,t;function l(a){s[2](a)}let o={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"],["dataviz","Dataviz"]]};return s[0]!==void 0&&(o.value=s[0]),e=new Ne({props:o}),K.push(()=>de(e,"value",l)),e.$on("change",s[1]),{c(){I(e.$$.fragment)},m(a,r){M(e,a,r),t=!0},p(a,[r]){const i={};!n&&r&1&&(n=!0,i.value=a[0],_e(()=>n=!1)),e.$set(i)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){Z(e,a)}}}function Je(s,e,n){let{style:t}=e;function l(){let a=new URLSearchParams(window.location.search);a.set("style",t);let r=`${window.location.pathname}?${a.toString()}${window.location.hash}`;window.location.href=r}function o(a){t=a,n(0,t)}return s.$$set=a=>{"style"in a&&n(0,t=a.style)},[t,l,o]}class vt extends C{constructor(e){super(),$(this,e,Je,We,L,{style:0})}}function Te(s){let e,n,t,l,o,a,r;const i=s[3].default,u=E(i,s,s[2],null);return{c(){e=p("details"),n=p("summary"),t=p("span"),l=T(s[0]),o=B(),a=p("div"),u&&u.c(),_(t,"class","govuk-details__summary-text"),_(n,"class","govuk-details__summary"),_(a,"class","govuk-details__text"),e.open=s[1],_(e,"class","govuk-details"),_(e,"data-module","govuk-details")},m(c,d){y(c,e,d),g(e,n),g(n,t),g(t,l),g(e,o),g(e,a),u&&u.m(a,null),r=!0},p(c,[d]){(!r||d&1)&&A(l,c[0]),u&&u.p&&(!r||d&4)&&P(u,i,c,c[2],r?z(i,c[2],d,null):j(c[2]),null),(!r||d&2)&&(e.open=c[1])},i(c){r||(b(u,c),r=!0)},o(c){k(u,c),r=!1},d(c){c&&S(e),u&&u.d(c)}}}function Ae(s,e,n){let{$$slots:t={},$$scope:l}=e,{label:o}=e,{open:a=!1}=e;return s.$$set=r=>{"label"in r&&n(0,o=r.label),"open"in r&&n(1,a=r.open),"$$scope"in r&&n(2,l=r.$$scope)},[o,a,l,t]}class Ke extends C{constructor(e){super(),$(this,e,Ae,Te,L,{label:0,open:1})}}function Ue(s){let e;return{c(){e=p("span"),_(e,"class","svelte-kzgqtg"),Q(e,"background",s[0])},m(n,t){y(n,e,t)},p(n,[t]){t&1&&Q(e,"background",n[0])},i:W,o:W,d(n){n&&S(e)}}}function Ve(s,e,n){let{color:t}=e;return s.$$set=l=>{"color"in l&&n(0,t=l.color)},[t]}class Qe extends C{constructor(e){super(),$(this,e,Ve,Ue,L,{color:0})}}const Xe="/atip/browse-page-renames/assets/help-d011708a.svg";function Ye(s){let e,n;const t=s[1].default,l=E(t,s,s[4],null);return{c(){e=p("div"),l&&l.c(),_(e,"class","govuk-prose")},m(o,a){y(o,e,a),l&&l.m(e,null),n=!0},p(o,a){l&&l.p&&(!n||a&16)&&P(l,t,o,o[4],n?z(t,o[4],a,null):j(o[4]),null)},i(o){n||(b(l,o),n=!0)},o(o){k(l,o),n=!1},d(o){o&&S(e),l&&l.d(o)}}}function xe(s){let e,n,t,l,o,a,r,i,u;function c(m){s[3](m)}let d={title:"Help",$$slots:{default:[Ye]},$$scope:{ctx:s}};return s[0]!==void 0&&(d.open=s[0]),o=new Se({props:d}),K.push(()=>de(o,"open",c)),{c(){e=p("button"),n=p("img"),l=B(),I(o.$$.fragment),me(n.src,t=Xe)||_(n,"src",t),_(n,"title","Help"),_(n,"alt","Help")},m(m,f){y(m,e,f),g(e,n),y(m,l,f),M(o,m,f),r=!0,i||(u=R(e,"click",s[2]),i=!0)},p(m,[f]){const v={};f&16&&(v.$$scope={dirty:f,ctx:m}),!a&&f&1&&(a=!0,v.open=m[0],_e(()=>a=!1)),o.$set(v)},i(m){r||(b(o.$$.fragment,m),r=!0)},o(m){k(o.$$.fragment,m),r=!1},d(m){m&&(S(e),S(l)),Z(o,m),i=!1,u()}}}function et(s,e,n){let{$$slots:t={},$$scope:l}=e,o=!1;const a=()=>n(0,o=!0);function r(i){o=i,n(0,o)}return s.$$set=i=>{"$$scope"in i&&n(4,l=i.$$scope)},[o,t,a,r,l]}class kt extends C{constructor(e){super(),$(this,e,et,xe,L,{})}}const tt=s=>({}),ae=s=>({}),nt=s=>({}),ie=s=>({});function lt(s){let e,n,t,l,o,a,r,i,u,c,d;const m=s[3].sidebar,f=E(m,s,s[2],ie),v=s[3].main,O=E(v,s,s[2],ae);return{c(){e=p("div"),n=p("aside"),t=p("div"),f&&f.c(),l=B(),o=p("button"),o.textContent="→",r=B(),i=p("main"),O&&O.c(),_(t,"class","sidebar-content content-container svelte-ect12w"),_(o,"type","button"),_(o,"class","sidebar-toggle rounded-rect svelte-ect12w"),_(n,"class",a=X(s[0]?"":"collapsed")+" svelte-ect12w"),_(i,"class","svelte-ect12w"),_(e,"class","overall-layout svelte-ect12w")},m(h,D){y(h,e,D),g(e,n),g(n,t),f&&f.m(t,null),g(n,l),g(n,o),g(e,r),g(e,i),O&&O.m(i,null),u=!0,c||(d=R(o,"click",s[1]),c=!0)},p(h,[D]){f&&f.p&&(!u||D&4)&&P(f,m,h,h[2],u?z(m,h[2],D,nt):j(h[2]),ie),(!u||D&1&&a!==(a=X(h[0]?"":"collapsed")+" svelte-ect12w"))&&_(n,"class",a),O&&O.p&&(!u||D&4)&&P(O,v,h,h[2],u?z(v,h[2],D,tt):j(h[2]),ae)},i(h){u||(b(f,h),b(O,h),u=!0)},o(h){k(f,h),k(O,h),u=!1},d(h){h&&S(e),f&&f.d(h),O&&O.d(h),c=!1,d()}}}function st(s,e,n){let{$$slots:t={},$$scope:l}=e,o=!0;function a(){n(0,o=!o)}return s.$$set=r=>{"$$scope"in r&&n(2,l=r.$$scope)},[o,a,l,t]}class wt extends C{constructor(e){super(),$(this,e,st,lt,L,{})}}function re(s,e,n){const t=s.slice();return t[1]=e[n][0],t[2]=e[n][1],t}function ce(s){let e,n,t,l=s[1]+"",o,a,r;return n=new Qe({props:{color:s[2]}}),{c(){e=p("li"),I(n.$$.fragment),t=B(),o=T(l),a=B()},m(i,u){y(i,e,u),M(n,e,null),g(e,t),g(e,o),g(e,a),r=!0},p(i,u){const c={};u&1&&(c.color=i[2]),n.$set(c),(!r||u&1)&&l!==(l=i[1]+"")&&A(o,l)},i(i){r||(b(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&S(e),Z(n)}}}function ot(s){let e,n,t=q(s[0]),l=[];for(let a=0;a<t.length;a+=1)l[a]=ce(re(s,t,a));const o=a=>k(l[a],1,1,()=>{l[a]=null});return{c(){e=p("ul");for(let a=0;a<l.length;a+=1)l[a].c()},m(a,r){y(a,e,r);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);n=!0},p(a,r){if(r&1){t=q(a[0]);let i;for(i=0;i<t.length;i+=1){const u=re(a,t,i);l[i]?(l[i].p(u,r),b(l[i],1)):(l[i]=ce(u),l[i].c(),b(l[i],1),l[i].m(e,null))}for(pe(),i=t.length;i<l.length;i+=1)o(i);ge()}},i(a){if(!n){for(let r=0;r<t.length;r+=1)b(l[r]);n=!0}},o(a){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)k(l[r]);n=!1},d(a){a&&S(e),fe(l,a)}}}function at(s){let e,n;return e=new Ke({props:{label:"Legend",$$slots:{default:[ot]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},m(t,l){M(e,t,l),n=!0},p(t,[l]){const o={};l&33&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function it(s,e,n){let{rows:t}=e;return s.$$set=l=>{"rows"in l&&n(0,t=l.rows)},[t]}class yt extends C{constructor(e){super(),$(this,e,it,at,L,{rows:0})}}const rt="/atip/browse-page-renames/assets/zoom_out_map-b2e1091a.svg";function ct(s){let e,n;return{c(){e=p("img"),me(e.src,n=rt)||_(e,"src",n),_(e,"alt","Zoom to show entire boundary")},m(t,l){y(t,e,l)},p:W,d(t){t&&S(e)}}}function ut(s){let e,n;return e=new Ce({props:{title:"Zoom to show entire boundary",$$slots:{default:[ct]},$$scope:{ctx:s}}}),e.$on("click",s[0]),{c(){I(e.$$.fragment)},m(t,l){M(e,t,l),n=!0},p(t,[l]){const o={};l&8&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function ft(s,e,n){let t;J(s,U,a=>n(2,t=a));let{boundaryGeojson:l}=e;function o(){t.fitBounds($e(l),{padding:20,animate:!0,duration:500})}return s.$$set=a=>{"boundaryGeojson"in a&&n(1,l=a.boundaryGeojson)},[o,l]}class St extends C{constructor(e){super(),$(this,e,ft,ut,L,{boundaryGeojson:1})}}const w={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},dt=10,H=10;let G="interventions";function _t(s,e,n){let t,l;J(s,U,i=>n(1,t=i)),J(s,Le,i=>n(2,l=i));let{colorInterventions:o}=e;Oe(t,G,l);const a=["!=","hide_while_editing",!0];return Y(t,{id:"interventions-points",source:G,filter:["all",Pe,a,["!=","endpoint",!0]],color:o,radius:dt}),x(t,{id:"interventions-lines",source:G,filter:["all",je,a],color:o,width:H}),Y(t,{id:"interventions-lines-endpoints",source:G,filter:["==","endpoint",!0],radius:.5*H,opacity:0,strokeColor:w.lineEndpointColor,strokeWidth:2}),Ee(t,{id:"interventions-polygons",source:G,filter:["all",ee,a],color:o,opacity:.2}),x(t,{id:"interventions-polygon-outlines",source:G,filter:["all",ee,a],color:o,opacity:.5,width:.7*H}),s.$$set=i=>{"colorInterventions"in i&&n(0,o=i.colorInterventions)},s.$$.update=()=>{if(s.$$.dirty&6){let i=JSON.parse(JSON.stringify(l)),u=[];for(let c of i.features)if(c.geometry.type=="LineString"&&!c.properties.hide_while_editing)for(let d of[c.geometry.coordinates[0],c.geometry.coordinates[c.geometry.coordinates.length-1]])u.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:d}});i.features=i.features.concat(u),t.getSource(G).setData(i)}},[o,t,l]}class Ct extends C{constructor(e){super(),$(this,e,_t,null,L,{colorInterventions:0})}}function $t(s){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[s]}function Lt(s){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[s]}function Ot(s){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[s]}function Et(s){return s=="planning"?te(["get","reference_type",["get","planning"]],{preapp:w.preapp,outline:w.outline,"reserved matters":w["reserved matters"],"local plan":w["local plan"]},"black"):te(["get","intervention_type"],{area:w.area,route:w.route,crossing:w.crossing,other:w.other},"white")}function Pt(s){return s=="planning"?[["Preapp",w.preapp],["Outline",w.outline],["Reserved matters",w["reserved matters"]],["Local plan",w["local plan"]]]:[["Areas",w.area],["Routes",w.route],["Crossings",w.crossing],["Other",w.other]]}function ue(s){let e;const n=s[4].default,t=E(n,s,s[3],null);return{c(){t&&t.c()},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&8)&&P(t,n,l,l[3],e?z(n,l[3],o,null):j(l[3]),null)},i(l){e||(b(t,l),e=!0)},o(l){k(t,l),e=!1},d(l){t&&t.d(l)}}}function mt(s){let e,n,t=s[1]&&ue(s);return{c(){e=p("div"),t&&t.c(),_(e,"class","map svelte-12dpf1u")},m(l,o){y(l,e,o),t&&t.m(e,null),s[5](e),n=!0},p(l,[o]){l[1]?t?(t.p(l,o),o&2&&b(t,1)):(t=ue(l),t.c(),b(t,1),t.m(e,null)):t&&(pe(),k(t,1,1,()=>{t=null}),ge())},i(l){n||(b(t),n=!0)},o(l){k(t),n=!1},d(l){l&&S(e),t&&t.d(),s[5](null)}}}function pt(s,e,n){let{$$slots:t={},$$scope:l}=e,{style:o}=e,a,r,i=!1;ze("setCamera",!window.location.hash),Be(()=>{a=new F.Map({container:r,style:`https://api.maptiler.com/maps/${o}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),a.addControl(new F.ScaleControl({})),a.addControl(new F.NavigationControl({visualizePitch:!0}),"bottom-right"),a.on("load",()=>{n(1,i=!0),U.set(a)}),new ResizeObserver(()=>{a.resize()}).observe(r)}),De(()=>{a.remove()});function u(c){K[c?"unshift":"push"](()=>{r=c,n(0,r)})}return s.$$set=c=>{"style"in c&&n(2,o=c.style),"$$scope"in c&&n(3,l=c.$$scope)},[r,i,o,l,t,u]}class jt extends C{constructor(e){super(),$(this,e,pt,mt,L,{style:2})}}export{vt as B,Ke as C,kt as H,Ct as I,wt as L,jt as M,Ne as S,St as Z,dt as a,ht as b,w as c,bt as d,Ot as e,$t as f,Et as g,yt as h,Pt as i,Qe as j,H as l,Lt as s};
