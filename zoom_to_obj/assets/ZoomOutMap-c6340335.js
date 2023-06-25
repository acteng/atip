import{S as j,i as F,s as q,e as b,t as L,ae as te,f as m,g as v,h as g,af as Z,l as D,L as B,p as y,r as ae,ad as ie,G as re,an as P,c as M,au as V,ao as R,ap as G,aq as W,n as C,o as I,z as J,B as ce,E as H,D as ue,C as fe,J as pe,I as de,H as me,al as U,K as _e,a9 as be,a2 as se,a3 as ne,ai as A,av as E,ab as oe,d as ge,m as ve,q as ye,a1 as z,aw as he,u as we,b as ke,a8 as Se,w as Ce}from"./maplibre_helpers-654ecbda.js";function Le(o){let e,n,t,s,l,a,c;return{c(){e=b("div"),n=L(`Basemap:
  `),t=b("select"),s=b("option"),s.textContent="Streets",l=b("option"),l.textContent="Satellite",s.__value="streets",s.value=s.__value,l.__value="hybrid",l.value=l.__value,o[0]===void 0&&te(()=>o[2].call(t)),m(e,"class","svelte-1tbnm6i")},m(u,i){v(u,e,i),g(e,n),g(e,t),g(t,s),g(t,l),Z(t,o[0]),a||(c=[D(t,"change",o[2]),D(t,"change",o[1])],a=!0)},p(u,[i]){i&1&&Z(t,u[0])},i:B,o:B,d(u){u&&y(e),a=!1,ae(c)}}}function Be(o,e,n){let{style:t}=e;function s(){let a=new URLSearchParams(window.location.search);a.set("style",t);let c=`${window.location.pathname}?${a.toString()}${window.location.hash}`;window.location.href=c}function l(){t=ie(this),n(0,t)}return o.$$set=a=>{"style"in a&&n(0,t=a.style)},[t,s,l]}class st extends j{constructor(e){super(),F(this,e,Be,Le,q,{style:0})}}const T=[];function O(o,e=B){let n;const t=new Set;function s(c){if(q(o,c)&&(o=c,n)){const u=!T.length;for(const i of t)i[1](),T.push(i,o);if(u){for(let i=0;i<T.length;i+=2)T[i][0](T[i+1]);T.length=0}}}function l(c){s(c(o))}function a(c,u=B){const i=[c,u];return t.add(i),t.size===1&&(n=e(s)||B),c(o),()=>{t.delete(i),t.size===0&&(n(),n=null)}}return{set:s,update:l,subscribe:a}}function Me(o){return o=="google"||o=="bing"}const N=O(null),nt=O(null),le=O(re()),Oe=O(null),Ie=O(null),qe=O(null),ze=O(null),je=O(Fe());je.subscribe(o=>window.localStorage.setItem("userSettings",JSON.stringify(o)));const ot=O("edit-attribute"),lt=O(!1);function at(o){let e=new Set;for(let t of o.features)e.add(t.id);let n=e.size+1;for(;e.has(n);)n++;return n}function it(o){console.log(`Deleting intervention ${o}`),le.update(e=>(e.features=e.features.filter(n=>n.id!=o),e)),Oe.set(null),Ie.set(null),qe.set(null),ze.set(null)}function Fe(){let o={streetViewImagery:"google",avoidDoublingBack:!1};try{let e=JSON.parse(window.localStorage.getItem("userSettings")||"{}");Me(e.streetViewImagery)&&(o.streetViewImagery=e.streetViewImagery),typeof e.avoidDoublingBack=="boolean"&&(o.avoidDoublingBack=e.avoidDoublingBack)}catch(e){console.log(`Couldn't parse userSettings from local storage: ${e}`)}return o}const Te=o=>({}),K=o=>({}),$e=o=>({}),Q=o=>({});function De(o){let e,n,t,s,l,a,c,u,i,p,_;const d=o[3].sidebar,f=P(d,o,o[2],Q),S=o[3].main,w=P(S,o,o[2],K);return{c(){e=b("div"),n=b("aside"),t=b("div"),f&&f.c(),s=M(),l=b("button"),l.textContent="→",c=M(),u=b("main"),w&&w.c(),m(t,"class","sidebar-content content-container svelte-ect12w"),m(l,"type","button"),m(l,"class","sidebar-toggle rounded-rect svelte-ect12w"),m(n,"class",a=V(o[0]?"":"collapsed")+" svelte-ect12w"),m(u,"class","svelte-ect12w"),m(e,"class","overall-layout svelte-ect12w")},m(r,h){v(r,e,h),g(e,n),g(n,t),f&&f.m(t,null),g(n,s),g(n,l),g(e,c),g(e,u),w&&w.m(u,null),i=!0,p||(_=D(l,"click",o[1]),p=!0)},p(r,[h]){f&&f.p&&(!i||h&4)&&R(f,d,r,r[2],i?W(d,r[2],h,$e):G(r[2]),Q),(!i||h&1&&a!==(a=V(r[0]?"":"collapsed")+" svelte-ect12w"))&&m(n,"class",a),w&&w.p&&(!i||h&4)&&R(w,S,r,r[2],i?W(S,r[2],h,Te):G(r[2]),K)},i(r){i||(C(f,r),C(w,r),i=!0)},o(r){I(f,r),I(w,r),i=!1},d(r){r&&y(e),f&&f.d(r),w&&w.d(r),p=!1,_()}}}function Ee(o,e,n){let{$$slots:t={},$$scope:s}=e,l=!0;function a(){n(0,l=!l)}return o.$$set=c=>{"$$scope"in c&&n(2,s=c.$$scope)},[l,a,s,t]}class rt extends j{constructor(e){super(),F(this,e,Ee,De,q,{})}}const k={area:"#e41a1c",route:"#377eb8",crossing:"#4daf4a",other:"#984ea3",preapp:"#e41a1c",outline:"#377eb8","reserved matters":"#4daf4a","local plan":"#984ea3",hovering:"black",lineEndpointColor:"black"},Pe=10,X=10;let $="interventions";function Re(o,e,n){let t,s;J(o,N,p=>n(1,t=p)),J(o,le,p=>n(2,s=p));let{schema:l}=e;ce(t,$,s);const a=["match",["get","intervention_type"],"area",k.area,"route",k.route,"crossing",k.crossing,"other",k.other,"white"],c=["match",["get","reference_type",["get","planning"]],"preapp",k.preapp,"outline",k.outline,"reserved matters",k["reserved matters"],"local plan",k["local plan"],"white"],u=["!=","hide_while_editing",!0];return H(t,{id:"interventions-points",source:$,filter:["all",pe,u,["!=","endpoint",!0]],color:a,radius:Pe}),ue(t,{id:"interventions-lines",source:$,filter:["all",de,u],color:a,width:X}),H(t,{id:"interventions-lines-endpoints",source:$,filter:["==","endpoint",!0],radius:.5*X,opacity:0,strokeColor:k.lineEndpointColor,strokeWidth:2}),fe(t,{id:"interventions-polygons",source:$,filter:["all",me,u],color:l=="planning"?c:a,opacity:.5}),o.$$set=p=>{"schema"in p&&n(0,l=p.schema)},o.$$.update=()=>{if(o.$$.dirty&6){let p=JSON.parse(JSON.stringify(s)),_=[];for(let d of p.features)if(d.geometry.type=="LineString"&&!d.properties.hide_while_editing)for(let f of[d.geometry.coordinates[0],d.geometry.coordinates[d.geometry.coordinates.length-1]])_.push({type:"Feature",properties:{endpoint:!0},geometry:{type:"Point",coordinates:f}});p.features=p.features.concat(_),t.getSource($).setData(p)}},[l,t,s]}class ct extends j{constructor(e){super(),F(this,e,Re,null,q,{schema:0})}}function Ge(o){const e=o-1;return e*e*e+1}function Y(o,{delay:e=0,duration:n=400,easing:t=Ge}={}){const s=getComputedStyle(o),l=+s.opacity,a=parseFloat(s.height),c=parseFloat(s.paddingTop),u=parseFloat(s.paddingBottom),i=parseFloat(s.marginTop),p=parseFloat(s.marginBottom),_=parseFloat(s.borderTopWidth),d=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:t,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*l};height: ${f*a}px;padding-top: ${f*c}px;padding-bottom: ${f*u}px;margin-top: ${f*i}px;margin-bottom: ${f*p}px;border-top-width: ${f*_}px;border-bottom-width: ${f*d}px;`}}function x(o){let e,n,t;const s=o[3].default,l=P(s,o,o[2],null);return{c(){e=b("div"),l&&l.c()},m(a,c){v(a,e,c),l&&l.m(e,null),t=!0},p(a,c){l&&l.p&&(!t||c&4)&&R(l,s,a,a[2],t?W(s,a[2],c,null):G(a[2]),null)},i(a){t||(C(l,a),te(()=>{n||(n=A(e,Y,{duration:100},!0)),n.run(1)}),t=!0)},o(a){I(l,a),n||(n=A(e,Y,{duration:100},!1)),n.run(0),t=!1},d(a){a&&y(e),l&&l.d(a),a&&n&&n.end()}}}function We(o){let e,n,t,s,l,a,c,u,i,p,_=o[0]&&x(o);return{c(){e=b("button"),n=U("svg"),t=U("path"),s=M(),l=L(o[1]),a=M(),_&&_.c(),c=_e(),m(t,"d","M9 5l7 7-7 7"),m(n,"style","tran"),m(n,"width","20"),m(n,"height","20"),m(n,"fill","none"),m(n,"stroke-linecap","round"),m(n,"stroke-linejoin","round"),m(n,"stroke-width","2"),m(n,"viewBox","0 0 24 24"),m(n,"stroke","currentColor"),m(n,"class","svelte-una9lq"),m(e,"aria-expanded",o[0]),m(e,"class","svelte-una9lq")},m(d,f){v(d,e,f),g(e,n),g(n,t),g(e,s),g(e,l),v(d,a,f),_&&_.m(d,f),v(d,c,f),u=!0,i||(p=D(e,"click",o[4]),i=!0)},p(d,[f]){(!u||f&2)&&be(l,d[1]),(!u||f&1)&&m(e,"aria-expanded",d[0]),d[0]?_?(_.p(d,f),f&1&&C(_,1)):(_=x(d),_.c(),C(_,1),_.m(c.parentNode,c)):_&&(se(),I(_,1,1,()=>{_=null}),ne())},i(d){u||(C(_),u=!0)},o(d){I(_),u=!1},d(d){d&&y(e),d&&y(a),_&&_.d(d),d&&y(c),i=!1,p()}}}function Je(o,e,n){let{$$slots:t={},$$scope:s}=e,{label:l}=e,{open:a=!1}=e;const c=()=>n(0,a=!a);return o.$$set=u=>{"label"in u&&n(1,l=u.label),"open"in u&&n(0,a=u.open),"$$scope"in u&&n(2,s=u.$$scope)},[a,l,s,t,c]}class Ne extends j{constructor(e){super(),F(this,e,Je,We,q,{label:1,open:0})}}function Ze(o,e,n){let t;J(o,N,i=>n(2,t=i));let{layers:s}=e,{contents:l}=e,a=new E.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});t.on("mousemove",c),t.on("mouseout",u),oe(()=>{t.off("mousemove",c),t.off("mouseout",u),a.remove()});function c(i){if(!s.every(_=>t.getLayer(_))){a.remove();return}let p=t.queryRenderedFeatures(i.point,{layers:s});p.length>0?a.setLngLat(i.lngLat).setHTML(l(p[0].properties)).addTo(t):a.remove()}function u(){a.remove()}return o.$$set=i=>{"layers"in i&&n(0,s=i.layers),"contents"in i&&n(1,l=i.contents)},[s,l]}class ut extends j{constructor(e){super(),F(this,e,Ze,null,q,{layers:0,contents:1})}}function Ve(o){let e,n,t,s,l,a,c,u,i,p,_,d,f,S,w;return{c(){e=b("li"),n=b("span"),t=L("Areas"),s=M(),l=b("li"),a=b("span"),c=L("Routes"),u=M(),i=b("li"),p=b("span"),_=L("Crossings"),d=M(),f=b("li"),S=b("span"),w=L("Other"),m(n,"class","svelte-l42ea0"),z(n,"background",k.area),m(a,"class","svelte-l42ea0"),z(a,"background",k.route),m(p,"class","svelte-l42ea0"),z(p,"background",k.crossing),m(S,"class","svelte-l42ea0"),z(S,"background",k.other)},m(r,h){v(r,e,h),g(e,n),g(e,t),v(r,s,h),v(r,l,h),g(l,a),g(l,c),v(r,u,h),v(r,i,h),g(i,p),g(i,_),v(r,d,h),v(r,f,h),g(f,S),g(f,w)},p:B,d(r){r&&y(e),r&&y(s),r&&y(l),r&&y(u),r&&y(i),r&&y(d),r&&y(f)}}}function He(o){let e,n,t,s,l,a,c,u,i,p,_,d,f,S,w;return{c(){e=b("li"),n=b("span"),t=L("Preapp"),s=M(),l=b("li"),a=b("span"),c=L("Outline"),u=M(),i=b("li"),p=b("span"),_=L("Reserved matters"),d=M(),f=b("li"),S=b("span"),w=L("Local plan"),m(n,"class","svelte-l42ea0"),z(n,"background",k.preapp),m(a,"class","svelte-l42ea0"),z(a,"background",k.outline),m(p,"class","svelte-l42ea0"),z(p,"background",k["reserved matters"]),m(S,"class","svelte-l42ea0"),z(S,"background",k["local plan"])},m(r,h){v(r,e,h),g(e,n),g(e,t),v(r,s,h),v(r,l,h),g(l,a),g(l,c),v(r,u,h),v(r,i,h),g(i,p),g(i,_),v(r,d,h),v(r,f,h),g(f,S),g(f,w)},p:B,d(r){r&&y(e),r&&y(s),r&&y(l),r&&y(u),r&&y(i),r&&y(d),r&&y(f)}}}function Ue(o){let e;function n(l,a){return l[0]=="planning"?He:Ve}let t=n(o),s=t(o);return{c(){e=b("ul"),s.c()},m(l,a){v(l,e,a),s.m(e,null)},p(l,a){t===(t=n(l))&&s?s.p(l,a):(s.d(1),s=t(l),s&&(s.c(),s.m(e,null)))},d(l){l&&y(e),s.d()}}}function Ae(o){let e,n,t;return n=new Ne({props:{label:"Objects",open:!0,$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){e=b("div"),ge(n.$$.fragment),m(e,"class","svelte-l42ea0")},m(s,l){v(s,e,l),ve(n,e,null),t=!0},p(s,[l]){const a={};l&3&&(a.$$scope={dirty:l,ctx:s}),n.$set(a)},i(s){t||(C(n.$$.fragment,s),t=!0)},o(s){I(n.$$.fragment,s),t=!1},d(s){s&&y(e),ye(n)}}}function Ke(o,e,n){let{schema:t}=e;return o.$$set=s=>{"schema"in s&&n(0,t=s.schema)},[t]}class ft extends j{constructor(e){super(),F(this,e,Ke,Ae,q,{schema:0})}}function ee(o){let e;const n=o[4].default,t=P(n,o,o[3],null);return{c(){t&&t.c()},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&8)&&R(t,n,s,s[3],e?W(n,s[3],l,null):G(s[3]),null)},i(s){e||(C(t,s),e=!0)},o(s){I(t,s),e=!1},d(s){t&&t.d(s)}}}function Qe(o){let e,n,t=o[1]&&ee(o);return{c(){e=b("div"),t&&t.c(),m(e,"class","map svelte-12dpf1u")},m(s,l){v(s,e,l),t&&t.m(e,null),o[5](e),n=!0},p(s,[l]){s[1]?t?(t.p(s,l),l&2&&C(t,1)):(t=ee(s),t.c(),C(t,1),t.m(e,null)):t&&(se(),I(t,1,1,()=>{t=null}),ne())},i(s){n||(C(t),n=!0)},o(s){I(t),n=!1},d(s){s&&y(e),t&&t.d(),o[5](null)}}}function Xe(o,e,n){let{$$slots:t={},$$scope:s}=e,{style:l}=e,a,c,u=!1;he("setCamera",!window.location.hash),we(()=>{a=new E.Map({container:c,style:`https://api.maptiler.com/maps/${l}/style.json?key=MZEJTanw3WpxRvt7qDfo`,hash:!0}),a.addControl(new E.ScaleControl({})),a.addControl(new E.NavigationControl({visualizePitch:!0}),"bottom-right"),a.on("load",()=>{n(1,u=!0),N.set(a)}),new ResizeObserver(()=>{a.resize()}).observe(c)}),oe(()=>{a.remove()});function i(p){ke[p?"unshift":"push"](()=>{c=p,n(0,c)})}return o.$$set=p=>{"style"in p&&n(2,l=p.style),"$$scope"in p&&n(3,s=p.$$scope)},[c,u,l,s,t,i]}class pt extends j{constructor(e){super(),F(this,e,Xe,Qe,q,{style:2})}}const Ye="/atip/zoom_to_obj/assets/zoom_out_map-b2e1091a.svg";function xe(o){let e,n,t,s,l;return{c(){e=b("button"),n=b("img"),Se(n.src,t=Ye)||m(n,"src",t),m(n,"alt","Zoom to show entire boundary"),m(e,"type","button"),m(e,"title","Zoom to show entire boundary"),m(e,"class","svelte-qzjsqo")},m(a,c){v(a,e,c),g(e,n),s||(l=D(e,"click",o[0]),s=!0)},p:B,i:B,o:B,d(a){a&&y(e),s=!1,l()}}}function et(o,e,n){let t;J(o,N,a=>n(2,t=a));let{boundaryGeojson:s}=e;function l(){t.fitBounds(Ce(s),{padding:20,animate:!0,duration:500})}return o.$$set=a=>{"boundaryGeojson"in a&&n(1,s=a.boundaryGeojson)},[l,s]}class dt extends j{constructor(e){super(),F(this,e,et,xe,q,{boundaryGeojson:1})}}export{st as B,Ne as C,ct as I,rt as L,ut as M,dt as Z,Ie as a,Pe as b,k as c,ot as d,Y as e,Oe as f,le as g,it as h,lt as i,pt as j,ft as k,X as l,N as m,at as n,ze as o,nt as r,qe as s,je as u};
