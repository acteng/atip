import{S as b,i as v,s as y,e as C,h as w,az as A,j as L,H as S,o as T,g as p,m as k,t as m,n as _,p as z,aA as N,_ as V,$ as Y,aB as x,d as P,u as $,k as I,C as ee,aW as oe,b as te,c as ne,l as ae,aP as re,aL as le,aM as se,aN as ie,aO as ue,aX as d,a as fe,q as ce,B as me,D as _e,N as de,ax as R}from"./index-6c591f57.js";import{C as ge,b as f}from"./StreetViewTool-43f5459d.js";function he(t){let e;return{c(){e=C("span"),w(e,"class","svelte-kzgqtg"),A(e,"background",t[0])},m(n,o){L(n,e,o)},p(n,[o]){o&1&&A(e,"background",n[0])},i:S,o:S,d(n){n&&T(e)}}}function be(t,e,n){let{color:o}=e;return t.$$set=a=>{"color"in a&&n(0,o=a.color)},[o]}class ve extends b{constructor(e){super(),v(this,e,be,he,y,{color:0})}}function D(t,e,n){const o=t.slice();return o[1]=e[n][0],o[2]=e[n][1],o}function E(t){let e,n,o,a=t[1]+"",u,r,i;return n=new ve({props:{color:t[2]}}),{c(){e=C("li"),p(n.$$.fragment),o=P(),u=$(a),r=P()},m(l,c){L(l,e,c),k(n,e,null),I(e,o),I(e,u),I(e,r),i=!0},p(l,c){const g={};c&1&&(g.color=l[2]),n.$set(g),(!i||c&1)&&a!==(a=l[1]+"")&&ee(u,a)},i(l){i||(m(n.$$.fragment,l),i=!0)},o(l){_(n.$$.fragment,l),i=!1},d(l){l&&T(e),z(n)}}}function ye(t){let e,n,o=N(t[0]),a=[];for(let r=0;r<o.length;r+=1)a[r]=E(D(t,o,r));const u=r=>_(a[r],1,1,()=>{a[r]=null});return{c(){e=C("ul");for(let r=0;r<a.length;r+=1)a[r].c()},m(r,i){L(r,e,i);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);n=!0},p(r,i){if(i&1){o=N(r[0]);let l;for(l=0;l<o.length;l+=1){const c=D(r,o,l);a[l]?(a[l].p(c,i),m(a[l],1)):(a[l]=E(c),a[l].c(),m(a[l],1),a[l].m(e,null))}for(V(),l=o.length;l<a.length;l+=1)u(l);Y()}},i(r){if(!n){for(let i=0;i<o.length;i+=1)m(a[i]);n=!0}},o(r){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)_(a[i]);n=!1},d(r){r&&T(e),x(a,r)}}}function Ce(t){let e,n;return e=new ge({props:{label:"Legend",$$slots:{default:[ye]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},m(o,a){k(e,o,a),n=!0},p(o,[a]){const u={};a&33&&(u.$$scope={dirty:a,ctx:o}),e.$set(u)},i(o){n||(m(e.$$.fragment,o),n=!0)},o(o){_(e.$$.fragment,o),n=!1},d(o){z(e,o)}}}function Le(t,e,n){let{rows:o}=e;return t.$$set=a=>{"rows"in a&&n(0,o=a.rows)},[o]}class Be extends b{constructor(e){super(),v(this,e,Le,Ce,y,{rows:0})}}function Te(t){let e;const n=t[15].default,o=le(n,t,t[23],null);return{c(){o&&o.c()},m(a,u){o&&o.m(a,u),e=!0},p(a,u){o&&o.p&&(!e||u&8388608)&&se(o,n,a,a[23],e?ue(n,a[23],u,null):ie(a[23]),null)},i(a){e||(m(o,a),e=!0)},o(a){_(o,a),e=!1},d(a){o&&o.d(a)}}}function pe(t){let e,n,o;function a(r){t[16](r)}let u={id:t[1],type:"circle",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],applyToClusters:t[9],minzoom:t[10],maxzoom:t[11],hoverCursor:t[12],manageHoverState:t[13],eventsIfTopMost:t[14],$$slots:{default:[Te]},$$scope:{ctx:t}};return t[0]!==void 0&&(u.hovered=t[0]),e=new oe({props:u}),te.push(()=>ne(e,"hovered",a)),e.$on("click",t[17]),e.$on("dblclick",t[18]),e.$on("contextmenu",t[19]),e.$on("mouseenter",t[20]),e.$on("mousemove",t[21]),e.$on("mouseleave",t[22]),{c(){p(e.$$.fragment)},m(r,i){k(e,r,i),o=!0},p(r,[i]){const l={};i&2&&(l.id=r[1]),i&4&&(l.source=r[2]),i&8&&(l.sourceLayer=r[3]),i&16&&(l.beforeId=r[4]),i&32&&(l.beforeLayerType=r[5]),i&64&&(l.paint=r[6]),i&128&&(l.layout=r[7]),i&256&&(l.filter=r[8]),i&512&&(l.applyToClusters=r[9]),i&1024&&(l.minzoom=r[10]),i&2048&&(l.maxzoom=r[11]),i&4096&&(l.hoverCursor=r[12]),i&8192&&(l.manageHoverState=r[13]),i&16384&&(l.eventsIfTopMost=r[14]),i&8388608&&(l.$$scope={dirty:i,ctx:r}),!n&&i&1&&(n=!0,l.hovered=r[0],ae(()=>n=!1)),e.$set(l)},i(r){o||(m(e.$$.fragment,r),o=!0)},o(r){_(e.$$.fragment,r),o=!1},d(r){z(e,r)}}}function ke(t,e,n){let{$$slots:o={},$$scope:a}=e,{id:u=re("circle")}=e,{source:r=void 0}=e,{sourceLayer:i=void 0}=e,{beforeId:l=void 0}=e,{beforeLayerType:c=void 0}=e,{paint:g}=e,{layout:M=void 0}=e,{filter:H=void 0}=e,{applyToClusters:B=void 0}=e,{minzoom:j=void 0}=e,{maxzoom:q=void 0}=e,{hoverCursor:G=void 0}=e,{manageHoverState:O=!1}=e,{hovered:h=null}=e,{eventsIfTopMost:Z=!1}=e;function W(s){h=s,n(0,h)}function X(s){d.call(this,t,s)}function F(s){d.call(this,t,s)}function J(s){d.call(this,t,s)}function K(s){d.call(this,t,s)}function Q(s){d.call(this,t,s)}function U(s){d.call(this,t,s)}return t.$$set=s=>{"id"in s&&n(1,u=s.id),"source"in s&&n(2,r=s.source),"sourceLayer"in s&&n(3,i=s.sourceLayer),"beforeId"in s&&n(4,l=s.beforeId),"beforeLayerType"in s&&n(5,c=s.beforeLayerType),"paint"in s&&n(6,g=s.paint),"layout"in s&&n(7,M=s.layout),"filter"in s&&n(8,H=s.filter),"applyToClusters"in s&&n(9,B=s.applyToClusters),"minzoom"in s&&n(10,j=s.minzoom),"maxzoom"in s&&n(11,q=s.maxzoom),"hoverCursor"in s&&n(12,G=s.hoverCursor),"manageHoverState"in s&&n(13,O=s.manageHoverState),"hovered"in s&&n(0,h=s.hovered),"eventsIfTopMost"in s&&n(14,Z=s.eventsIfTopMost),"$$scope"in s&&n(23,a=s.$$scope)},[h,u,r,i,l,c,g,M,H,B,j,q,G,O,Z,o,W,X,F,J,K,Q,U,a]}class je extends b{constructor(e){super(),v(this,e,ke,pe,y,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14})}}const ze="/atip/modal_shift/assets/zoom_out_map-b2e1091a.svg";function Ie(t){let e,n;return{c(){e=C("img"),_e(e.src,n=ze)||w(e,"src",n),w(e,"alt","Zoom to show entire boundary")},m(o,a){L(o,e,a)},p:S,d(o){o&&T(e)}}}function we(t){let e,n;return e=new fe({props:{title:"Zoom to show entire boundary",$$slots:{default:[Ie]},$$scope:{ctx:t}}}),e.$on("click",t[0]),{c(){p(e.$$.fragment)},m(o,a){k(e,o,a),n=!0},p(o,[a]){const u={};a&8&&(u.$$scope={dirty:a,ctx:o}),e.$set(u)},i(o){n||(m(e.$$.fragment,o),n=!0)},o(o){_(e.$$.fragment,o),n=!1},d(o){z(e,o)}}}function Se(t,e,n){let o;ce(t,me,r=>n(2,o=r));let{boundaryGeojson:a}=e;function u(){o.fitBounds(de(a),{padding:20,animate:!0,duration:500})}return t.$$set=r=>{"boundaryGeojson"in r&&n(1,a=r.boundaryGeojson)},[u,a]}class qe extends b{constructor(e){super(),v(this,e,Se,we,y,{boundaryGeojson:1})}}function Ge(t){return t=="planning"?R(["get","reference_type",["get","planning"]],{preapp:f.preapp,outline:f.outline,"reserved matters":f["reserved matters"],"local plan":f["local plan"]},"black"):R(["get","intervention_type"],{area:f.area,route:f.route,crossing:f.crossing,other:f.other},"white")}function Oe(t){return t=="planning"?[["Preapp",f.preapp],["Outline",f.outline],["Reserved matters",f["reserved matters"]],["Local plan",f["local plan"]]]:[["Areas",f.area],["Routes",f.route],["Crossings",f.crossing],["Other",f.other]]}export{je as C,Be as L,qe as Z,ve as a,Ge as c,Oe as s};
