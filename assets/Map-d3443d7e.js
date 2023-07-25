import{S as y,i as k,s as w,C as E,e as m,h as d,j as C,k as h,H as j,I as P,J as z,t as p,l as v,p as S,f as T,w as Z,F as re,g as D,m as N,q as H,O as X,aa as ce,aJ as ue,aX as A,Q as fe,aI as de,M as _e,aY as me,v as I,u as le,x as oe,b as ae,c as he,o as ge,R as Q,P as J,aZ as U,W as q,X as G,A as R,ad as ie,a as pe,T as be,B as ve,$ as ye,Z as ke,a5 as Y,a4 as K,_ as we,a9 as Ce,a8 as Se,a7 as V,y as Le,n as Me,a_ as Oe,r as Be}from"./stores-a3f37a6d.js";function Ee(s){let e,n,t;const o=s[3].default,l=E(o,s,s[2],null);return{c(){e=m("fieldset"),n=m("div"),l&&l.c(),d(n,"class",s[0]),d(n,"data-module","govuk-checkboxes"),d(e,"class","govuk-fieldset")},m(a,r){C(a,e,r),h(e,n),l&&l.m(n,null),t=!0},p(a,[r]){l&&l.p&&(!t||r&4)&&j(l,o,a,a[2],t?z(o,a[2],r,null):P(a[2]),null)},i(a){t||(p(l,a),t=!0)},o(a){v(l,a),t=!1},d(a){a&&S(e),l&&l.d(a)}}}function je(s,e,n){let{$$slots:t={},$$scope:o}=e,{small:l=!1}=e,a=l?"govuk-checkboxes--small":"govuk-checkboxes";return s.$$set=r=>{"small"in r&&n(1,l=r.small),"$$scope"in r&&n(2,o=r.$$scope)},[a,l,o,t]}class st extends y{constructor(e){super(),k(this,e,je,Ee,w,{small:1})}}function Pe(s){let e,n,t,o,l,a,r;const u=s[4].default,c=E(u,s,s[3],null);return{c(){e=m("div"),n=m("input"),t=T(),o=m("label"),c&&c.c(),d(n,"type","checkbox"),d(n,"class","govuk-checkboxes__input"),d(n,"id",s[1]),d(o,"class","govuk-label govuk-checkboxes__label"),d(o,"for",s[1]),d(o,"title",s[2]),d(e,"class","govuk-checkboxes__item")},m(i,f){C(i,e,f),h(e,n),n.checked=s[0],h(e,t),h(e,o),c&&c.m(o,null),l=!0,a||(r=Z(n,"change",s[5]),a=!0)},p(i,[f]){(!l||f&2)&&d(n,"id",i[1]),f&1&&(n.checked=i[0]),c&&c.p&&(!l||f&8)&&j(c,u,i,i[3],l?z(u,i[3],f,null):P(i[3]),null),(!l||f&2)&&d(o,"for",i[1]),(!l||f&4)&&d(o,"title",i[2])},i(i){l||(p(c,i),l=!0)},o(i){v(c,i),l=!1},d(i){i&&S(e),c&&c.d(i),a=!1,r()}}}function ze(s,e,n){let{$$slots:t={},$$scope:o}=e,{id:l}=e,{checked:a}=e,{hint:r}=e;function u(){a=this.checked,n(0,a)}return s.$$set=c=>{"id"in c&&n(1,l=c.id),"checked"in c&&n(0,a=c.checked),"hint"in c&&n(2,r=c.hint),"$$scope"in c&&n(3,o=c.$$scope)},[a,l,r,o,t,u]}class lt extends y{constructor(e){super(),k(this,e,ze,Pe,w,{id:1,checked:0,hint:2})}}function $(s,e,n){const t=s.slice();return t[8]=e[n][0],t[9]=e[n][1],t}function x(s){let e;return{c(){e=m("option"),e.__value="",I(e,e.__value)},m(n,t){C(n,e,t)},d(n){n&&S(e)}}}function ee(s){let e,n=s[9]+"",t,o;return{c(){e=m("option"),t=le(n),e.__value=o=s[8],I(e,e.__value)},m(l,a){C(l,e,a),h(e,t)},p(l,a){a&8&&n!==(n=l[9]+"")&&oe(t,n),a&8&&o!==(o=l[8])&&(e.__value=o,I(e,e.__value))},d(l){l&&S(e)}}}function Re(s){let e,n,t,o,l=s[4]&&x(),a=X(s[3]),r=[];for(let u=0;u<a.length;u+=1)r[u]=ee($(s,a,u));return{c(){e=m("select"),l&&l.c(),n=ce();for(let u=0;u<r.length;u+=1)r[u].c();d(e,"class","govuk-select"),d(e,"id",s[2]),e.disabled=s[5],s[0]===void 0&&ue(()=>s[7].call(e))},m(u,c){C(u,e,c),l&&l.m(e,null),h(e,n);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);A(e,s[0],!0),t||(o=[Z(e,"change",s[7]),Z(e,"change",s[6])],t=!0)},p(u,c){if(u[4]?l||(l=x(),l.c(),l.m(e,n)):l&&(l.d(1),l=null),c&8){a=X(u[3]);let i;for(i=0;i<a.length;i+=1){const f=$(u,a,i);r[i]?r[i].p(f,c):(r[i]=ee(f),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=a.length}c&4&&d(e,"id",u[2]),c&32&&(e.disabled=u[5]),c&9&&A(e,u[0])},d(u){u&&S(e),l&&l.d(),fe(r,u),t=!1,de(o)}}}function Te(s){let e,n;return e=new re({props:{label:s[1],id:s[2],$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){D(e.$$.fragment)},m(t,o){N(e,t,o),n=!0},p(t,[o]){const l={};o&2&&(l.label=t[1]),o&4&&(l.id=t[2]),o&4157&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Ze(s,e,n){let{label:t}=e,{id:o}=e,{choices:l}=e,{emptyOption:a=!1}=e,{disabled:r=!1}=e,{value:u}=e;function c(f){_e.call(this,s,f)}function i(){u=me(this),n(0,u),n(3,l)}return s.$$set=f=>{"label"in f&&n(1,t=f.label),"id"in f&&n(2,o=f.id),"choices"in f&&n(3,l=f.choices),"emptyOption"in f&&n(4,a=f.emptyOption),"disabled"in f&&n(5,r=f.disabled),"value"in f&&n(0,u=f.value)},[u,t,o,l,a,r,c,i]}class qe extends y{constructor(e){super(),k(this,e,Ze,Te,w,{label:1,id:2,choices:3,emptyOption:4,disabled:5,value:0})}}function Ge(s){let e,n,t;function o(a){s[2](a)}let l={label:"Basemap",id:"basemap",choices:[["streets","Streets"],["hybrid","Satellite"]]};return s[0]!==void 0&&(l.value=s[0]),e=new qe({props:l}),ae.push(()=>he(e,"value",o)),e.$on("change",s[1]),{c(){D(e.$$.fragment)},m(a,r){N(e,a,r),t=!0},p(a,[r]){const u={};!n&&r&1&&(n=!0,u.value=a[0],ge(()=>n=!1)),e.$set(u)},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){H(e,a)}}}function We(s,e,n){let{style:t}=e;function o(){let a=new URLSearchParams(window.location.search);a.set("style",t);let r=`${window.location.pathname}?${a.toString()}${window.location.hash}`;window.location.href=r}function l(a){t=a,n(0,t)}return s.$$set=a=>{"style"in a&&n(0,t=a.style)},[t,o,l]}class ot extends y{constructor(e){super(),k(this,e,We,Ge,w,{style:0})}}function Fe(s){let e,n,t,o,l,a,r;const u=s[3].default,c=E(u,s,s[2],null);return{c(){e=m("details"),n=m("summary"),t=m("span"),o=le(s[0]),l=T(),a=m("div"),c&&c.c(),d(t,"class","govuk-details__summary-text"),d(n,"class","govuk-details__summary"),d(a,"class","govuk-details__text"),e.open=s[1],d(e,"class","govuk-details"),d(e,"data-module","govuk-details")},m(i,f){C(i,e,f),h(e,n),h(n,t),h(t,o),h(e,l),h(e,a),c&&c.m(a,null),r=!0},p(i,[f]){(!r||f&1)&&oe(o,i[0]),c&&c.p&&(!r||f&4)&&j(c,u,i,i[2],r?z(u,i[2],f,null):P(i[2]),null),(!r||f&2)&&(e.open=i[1])},i(i){r||(p(c,i),r=!0)},o(i){v(c,i),r=!1},d(i){i&&S(e),c&&c.d(i)}}}function Ie(s,e,n){let{$$slots:t={},$$scope:o}=e,{label:l}=e,{open:a=!1}=e;return s.$$set=r=>{"label"in r&&n(0,l=r.label),"open"in r&&n(1,a=r.open),"$$scope"in r&&n(2,o=r.$$scope)},[l,a,o,t]}class at extends y{constructor(e){super(),k(this,e,Ie,Fe,w,{label:0,open:1})}}function Je(s){let e;return{c(){e=m("span"),d(e,"class","svelte-kzgqtg"),Q(e,"background",s[0])},m(n,t){C(n,e,t)},p(n,[t]){t&1&&Q(e,"background",n[0])},i:J,o:J,d(n){n&&S(e)}}}function De(s,e,n){let{color:t}=e;return s.$$set=o=>{"color"in o&&n(0,t=o.color)},[t]}class it extends y{constructor(e){super(),k(this,e,De,Je,w,{color:0})}}const Ne=s=>({}),te=s=>({}),He=s=>({}),ne=s=>({});function Xe(s){let e,n,t,o,l,a,r,u,c,i,f;const L=s[3].sidebar,g=E(L,s,s[2],ne),W=s[3].main,b=E(W,s,s[2],te);return{c(){e=m("div"),n=m("aside"),t=m("div"),g&&g.c(),o=T(),l=m("button"),l.textContent="→",r=T(),u=m("main"),b&&b.c(),d(t,"class","sidebar-content content-container svelte-ect12w"),d(l,"type","button"),d(l,"class","sidebar-toggle rounded-rect svelte-ect12w"),d(n,"class",a=U(s[0]?"":"collapsed")+" svelte-ect12w"),d(u,"class","svelte-ect12w"),d(e,"class","overall-layout svelte-ect12w")},m(_,O){C(_,e,O),h(e,n),h(n,t),g&&g.m(t,null),h(n,o),h(n,l),h(e,r),h(e,u),b&&b.m(u,null),c=!0,i||(f=Z(l,"click",s[1]),i=!0)},p(_,[O]){g&&g.p&&(!c||O&4)&&j(g,L,_,_[2],c?z(L,_[2],O,He):P(_[2]),ne),(!c||O&1&&a!==(a=U(_[0]?"":"collapsed")+" svelte-ect12w"))&&d(n,"class",a),b&&b.p&&(!c||O&4)&&j(b,W,_,_[2],c?z(W,_[2],O,Ne):P(_[2]),te)},i(_){c||(p(g,_),p(b,_),c=!0)},o(_){v(g,_),v(b,_),c=!1},d(_){_&&S(e),g&&g.d(_),b&&b.d(_),i=!1,f()}}}function Ae(s,e,n){let{$$slots:t={},$$scope:o}=e,l=!0;function a(){n(0,l=!l)}return s.$$set=r=>{"$$scope"in r&&n(2,o=r.$$scope)},[l,a,o,t]}class rt extends y{constructor(e){super(),k(this,e,Ae,Xe,w,{})}}function Qe(s,e,n){let t;q(s,G,c=>n(2,t=c));let{layers:o}=e,{contents:l}=e,a=new R.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",r),t.on("mouseout",u),ie(()=>{t.off("mousemove",r),t.off("mouseout",u),a.remove()});function r(c){if(!o.every(f=>t.getLayer(f))){a.remove();return}let i=t.queryRenderedFeatures(c.point,{layers:o});i.length>0?a.setLngLat(c.lngLat).setHTML(l(i[0].properties)).addTo(t):a.remove()}function u(){a.remove()}return s.$$set=c=>{"layers"in c&&n(0,o=c.layers),"contents"in c&&n(1,l=c.contents)},[o,l]}class ct extends y{constructor(e){super(),k(this,e,Qe,null,w,{layers:0,contents:1})}}const Ue="/atip/assets/zoom_out_map-b2e1091a.svg";function Ye(s){let e,n;return{c(){e=m("img"),be(e.src,n=Ue)||d(e,"src",n),d(e,"alt","Zoom to show entire boundary")},m(t,o){C(t,e,o)},p:J,d(t){t&&S(e)}}}function Ke(s){let e,n;return e=new pe({props:{title:"Zoom to show entire boundary",$$slots:{default:[Ye]},$$scope:{ctx:s}}}),e.$on("click",s[0]),{c(){D(e.$$.fragment)},m(t,o){N(e,t,o),n=!0},p(t,[o]){const l={};o&8&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function Ve(s,e,n){let t;q(s,G,a=>n(2,t=a));let{boundaryGeojson:o}=e;function l(){t.fitBounds(ve(o),{padding:20,animate:!0,duration:500})}return s.$$set=a=>{"boundaryGeojson"in a&&n(1,o=a.boundaryGeojson)},[l,o]}class ut extends y{constructor(e){super(),k(this,e,Ve,Ke,w,{boundaryGeojson:1})}}const M={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},$e=10,F=10;let B="interventions";function xe(s,e,n){let t,o;q(s,G,i=>n(1,t=i)),q(s,ye,i=>n(2,o=i));let{schema:l}=e;ke(t,B,o);const a=["match",["get","intervention_type"],"area",M.area,"route",M.route,"crossing",M.crossing,"other",M.other,"white"],r=["match",["get","reference_type",["get","planning"]],"preapp",M.preapp,"outline",M.outline,"reserved matters",M["reserved matters"],"local plan",M["local plan"],"white"],u=["!=","hide_while_editing",!0];return Y(t,{id:"interventions-points",source:B,filter:["all",Ce,u,["!=","endpoint",!0]],color:a,radius:$e}),K(t,{id:"interventions-lines",source:B,filter:["all",Se,u],color:a,width:F}),Y(t,{id:"interventions-lines-endpoints",source:B,filter:["==","endpoint",!0],radius:.5*F,opacity:0,strokeColor:M.lineEndpointColor,strokeWidth:2}),we(t,{id:"interventions-polygons",source:B,filter:["all",V,u],color:l=="planning"?r:a,opacity:.2}),K(t,{id:"interventions-polygon-outlines",source:B,filter:["all",V,u],color:l=="planning"?r:a,opacity:.5,width:.7*F}),s.$$set=i=>{"schema"in i&&n(0,l=i.schema)},s.$$.update=()=>{if(s.$$.dirty&6){let i=JSON.parse(JSON.stringify(o)),f=[];for(let L of i.features)if(L.geometry.type=="LineString"&&!L.properties.hide_while_editing)for(let g of[L.geometry.coordinates[0],L.geometry.coordinates[L.geometry.coordinates.length-1]])f.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:g}});i.features=i.features.concat(f),t.getSource(B).setData(i)}},[l,t,o]}class ft extends y{constructor(e){super(),k(this,e,xe,null,w,{schema:0})}}function se(s){let e;const n=s[4].default,t=E(n,s,s[3],null);return{c(){t&&t.c()},m(o,l){t&&t.m(o,l),e=!0},p(o,l){t&&t.p&&(!e||l&8)&&j(t,n,o,o[3],e?z(n,o[3],l,null):P(o[3]),null)},i(o){e||(p(t,o),e=!0)},o(o){v(t,o),e=!1},d(o){t&&t.d(o)}}}function et(s){let e,n,t=s[1]&&se(s);return{c(){e=m("div"),t&&t.c(),d(e,"class","map svelte-12dpf1u")},m(o,l){C(o,e,l),t&&t.m(e,null),s[5](e),n=!0},p(o,[l]){o[1]?t?(t.p(o,l),l&2&&p(t,1)):(t=se(o),t.c(),p(t,1),t.m(e,null)):t&&(Le(),v(t,1,1,()=>{t=null}),Me())},i(o){n||(p(t),n=!0)},o(o){v(t),n=!1},d(o){o&&S(e),t&&t.d(),s[5](null)}}}function tt(s,e,n){let{$$slots:t={},$$scope:o}=e,{style:l}=e,a,r,u=!1;Oe("setCamera",!window.location.hash),Be(()=>{a=new R.Map({container:r,style:`https://api.maptiler.com/maps/${l}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),a.addControl(new R.ScaleControl({})),a.addControl(new R.NavigationControl({visualizePitch:!0}),"bottom-right"),a.on("load",()=>{n(1,u=!0),G.set(a)}),new ResizeObserver(()=>{a.resize()}).observe(r)}),ie(()=>{a.remove()});function c(i){ae[i?"unshift":"push"](()=>{r=i,n(0,r)})}return s.$$set=i=>{"style"in i&&n(2,l=i.style),"$$scope"in i&&n(3,o=i.$$scope)},[r,u,l,o,t,c]}class dt extends y{constructor(e){super(),k(this,e,tt,et,w,{style:2})}}export{ot as B,at as C,ft as I,rt as L,ct as M,qe as S,ut as Z,$e as a,st as b,M as c,lt as d,it as e,dt as f,F as l};
