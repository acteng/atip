import{S as b,i as v,s as y,e as C,h as w,aA as A,j as L,I as S,o as T,g as p,m as k,t as m,n as _,p as I,aB as P,$ as V,a0 as W,aC as x,d as R,u as $,k as z,D as ee,aX as oe,b as te,c as ne,l as ae,aQ as re,aM as le,aN as se,aO as ue,aP as ie,aY as d,a as fe,q as ce,C as me,H as _e,O as de,ay as D}from"./index-c522f19c.js";import{C as ge,b as f}from"./StreetViewTool-4db806dd.js";function he(t){let e;return{c(){e=C("span"),w(e,"class","svelte-kzgqtg"),A(e,"background",t[0])},m(n,o){L(n,e,o)},p(n,[o]){o&1&&A(e,"background",n[0])},i:S,o:S,d(n){n&&T(e)}}}function be(t,e,n){let{color:o}=e;return t.$$set=a=>{"color"in a&&n(0,o=a.color)},[o]}class ve extends b{constructor(e){super(),v(this,e,be,he,y,{color:0})}}function E(t,e,n){const o=t.slice();return o[1]=e[n][0],o[2]=e[n][1],o}function N(t){let e,n,o,a=t[1]+"",i,r,u;return n=new ve({props:{color:t[2]}}),{c(){e=C("li"),p(n.$$.fragment),o=R(),i=$(a),r=R()},m(l,c){L(l,e,c),k(n,e,null),z(e,o),z(e,i),z(e,r),u=!0},p(l,c){const g={};c&1&&(g.color=l[2]),n.$set(g),(!u||c&1)&&a!==(a=l[1]+"")&&ee(i,a)},i(l){u||(m(n.$$.fragment,l),u=!0)},o(l){_(n.$$.fragment,l),u=!1},d(l){l&&T(e),I(n)}}}function ye(t){let e,n,o=P(t[0]),a=[];for(let r=0;r<o.length;r+=1)a[r]=N(E(t,o,r));const i=r=>_(a[r],1,1,()=>{a[r]=null});return{c(){e=C("ul");for(let r=0;r<a.length;r+=1)a[r].c()},m(r,u){L(r,e,u);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);n=!0},p(r,u){if(u&1){o=P(r[0]);let l;for(l=0;l<o.length;l+=1){const c=E(r,o,l);a[l]?(a[l].p(c,u),m(a[l],1)):(a[l]=N(c),a[l].c(),m(a[l],1),a[l].m(e,null))}for(V(),l=o.length;l<a.length;l+=1)i(l);W()}},i(r){if(!n){for(let u=0;u<o.length;u+=1)m(a[u]);n=!0}},o(r){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)_(a[u]);n=!1},d(r){r&&T(e),x(a,r)}}}function Ce(t){let e,n;return e=new ge({props:{label:"Legend",$$slots:{default:[ye]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},m(o,a){k(e,o,a),n=!0},p(o,[a]){const i={};a&33&&(i.$$scope={dirty:a,ctx:o}),e.$set(i)},i(o){n||(m(e.$$.fragment,o),n=!0)},o(o){_(e.$$.fragment,o),n=!1},d(o){I(e,o)}}}function Le(t,e,n){let{rows:o}=e;return t.$$set=a=>{"rows"in a&&n(0,o=a.rows)},[o]}class je extends b{constructor(e){super(),v(this,e,Le,Ce,y,{rows:0})}}function Te(t){let e;const n=t[15].default,o=le(n,t,t[23],null);return{c(){o&&o.c()},m(a,i){o&&o.m(a,i),e=!0},p(a,i){o&&o.p&&(!e||i&8388608)&&se(o,n,a,a[23],e?ie(n,a[23],i,null):ue(a[23]),null)},i(a){e||(m(o,a),e=!0)},o(a){_(o,a),e=!1},d(a){o&&o.d(a)}}}function pe(t){let e,n,o;function a(r){t[16](r)}let i={id:t[1],type:"circle",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],applyToClusters:t[9],minzoom:t[10],maxzoom:t[11],hoverCursor:t[12],manageHoverState:t[13],eventsIfTopMost:t[14],$$slots:{default:[Te]},$$scope:{ctx:t}};return t[0]!==void 0&&(i.hovered=t[0]),e=new oe({props:i}),te.push(()=>ne(e,"hovered",a)),e.$on("click",t[17]),e.$on("dblclick",t[18]),e.$on("contextmenu",t[19]),e.$on("mouseenter",t[20]),e.$on("mousemove",t[21]),e.$on("mouseleave",t[22]),{c(){p(e.$$.fragment)},m(r,u){k(e,r,u),o=!0},p(r,[u]){const l={};u&2&&(l.id=r[1]),u&4&&(l.source=r[2]),u&8&&(l.sourceLayer=r[3]),u&16&&(l.beforeId=r[4]),u&32&&(l.beforeLayerType=r[5]),u&64&&(l.paint=r[6]),u&128&&(l.layout=r[7]),u&256&&(l.filter=r[8]),u&512&&(l.applyToClusters=r[9]),u&1024&&(l.minzoom=r[10]),u&2048&&(l.maxzoom=r[11]),u&4096&&(l.hoverCursor=r[12]),u&8192&&(l.manageHoverState=r[13]),u&16384&&(l.eventsIfTopMost=r[14]),u&8388608&&(l.$$scope={dirty:u,ctx:r}),!n&&u&1&&(n=!0,l.hovered=r[0],ae(()=>n=!1)),e.$set(l)},i(r){o||(m(e.$$.fragment,r),o=!0)},o(r){_(e.$$.fragment,r),o=!1},d(r){I(e,r)}}}function ke(t,e,n){let{$$slots:o={},$$scope:a}=e,{id:i=re("circle")}=e,{source:r=void 0}=e,{sourceLayer:u=void 0}=e,{beforeId:l=void 0}=e,{beforeLayerType:c=void 0}=e,{paint:g}=e,{layout:M=void 0}=e,{filter:H=void 0}=e,{applyToClusters:j=void 0}=e,{minzoom:B=void 0}=e,{maxzoom:O=void 0}=e,{hoverCursor:q=void 0}=e,{manageHoverState:G=!1}=e,{hovered:h=null}=e,{eventsIfTopMost:Z=!1}=e;function Q(s){h=s,n(0,h)}function X(s){d.call(this,t,s)}function Y(s){d.call(this,t,s)}function F(s){d.call(this,t,s)}function J(s){d.call(this,t,s)}function K(s){d.call(this,t,s)}function U(s){d.call(this,t,s)}return t.$$set=s=>{"id"in s&&n(1,i=s.id),"source"in s&&n(2,r=s.source),"sourceLayer"in s&&n(3,u=s.sourceLayer),"beforeId"in s&&n(4,l=s.beforeId),"beforeLayerType"in s&&n(5,c=s.beforeLayerType),"paint"in s&&n(6,g=s.paint),"layout"in s&&n(7,M=s.layout),"filter"in s&&n(8,H=s.filter),"applyToClusters"in s&&n(9,j=s.applyToClusters),"minzoom"in s&&n(10,B=s.minzoom),"maxzoom"in s&&n(11,O=s.maxzoom),"hoverCursor"in s&&n(12,q=s.hoverCursor),"manageHoverState"in s&&n(13,G=s.manageHoverState),"hovered"in s&&n(0,h=s.hovered),"eventsIfTopMost"in s&&n(14,Z=s.eventsIfTopMost),"$$scope"in s&&n(23,a=s.$$scope)},[h,i,r,u,l,c,g,M,H,j,B,O,q,G,Z,o,Q,X,Y,F,J,K,U,a]}class Be extends b{constructor(e){super(),v(this,e,ke,pe,y,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14})}}const Ie="/atip/new_boundaries/assets/zoom_out_map-b2e1091a.svg";function ze(t){let e,n;return{c(){e=C("img"),_e(e.src,n=Ie)||w(e,"src",n),w(e,"alt","Zoom to show entire boundary")},m(o,a){L(o,e,a)},p:S,d(o){o&&T(e)}}}function we(t){let e,n;return e=new fe({props:{title:"Zoom to show entire boundary",$$slots:{default:[ze]},$$scope:{ctx:t}}}),e.$on("click",t[0]),{c(){p(e.$$.fragment)},m(o,a){k(e,o,a),n=!0},p(o,[a]){const i={};a&8&&(i.$$scope={dirty:a,ctx:o}),e.$set(i)},i(o){n||(m(e.$$.fragment,o),n=!0)},o(o){_(e.$$.fragment,o),n=!1},d(o){I(e,o)}}}function Se(t,e,n){let o;ce(t,me,r=>n(2,o=r));let{boundaryGeojson:a}=e;function i(){o.fitBounds(de(a),{padding:20,animate:!0,duration:500})}return t.$$set=r=>{"boundaryGeojson"in r&&n(1,a=r.boundaryGeojson)},[i,a]}class Oe extends b{constructor(e){super(),v(this,e,Se,we,y,{boundaryGeojson:1})}}function qe(t){return t=="planning"?D(["get","reference_type",["get","planning"]],{preapp:f.preapp,outline:f.outline,"reserved matters":f["reserved matters"],"local plan":f["local plan"]},"black"):D(["get","intervention_type"],{area:f.area,route:f.route,crossing:f.crossing,other:f.other},"white")}function Ge(t){return t=="planning"?[["Preapp",f.preapp],["Outline",f.outline],["Reserved matters",f["reserved matters"]],["Local plan",f["local plan"]]]:[["Areas",f.area],["Routes",f.route],["Crossings",f.crossing],["Other",f.other]]}export{Be as C,je as L,Oe as Z,ve as a,qe as c,Ge as s};
