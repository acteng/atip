import{S as M,i as S,s as k,e as F,h as J,aq as K,j as O,H as U,o as N,g as w,m as A,t as g,n as d,p as H,aC as Q,at as ie,au as ue,aD as se,d as V,u as fe,k as j,B as ce,b as x,c as $,l as ee,aU as ne,aL as te,aM as oe,aN as re,aO as ae,a$ as h,a as me,q as he,A as ge,G as de,N as _e,ar as W,a6 as q,b8 as ve,b9 as ye}from"./index-612ae6f8.js";import{C as be,c as m}from"./StreetViewController-6df6439a.js";import{L as le}from"./GeoJSON-b4af7ad4.js";function Le(n){let e;return{c(){e=F("span"),J(e,"class","svelte-kzgqtg"),K(e,"background",n[0])},m(t,o){O(t,e,o)},p(t,[o]){o&1&&K(e,"background",t[0])},i:U,o:U,d(t){t&&N(e)}}}function Te(n,e,t){let{color:o}=e;return n.$$set=r=>{"color"in r&&t(0,o=r.color)},[o]}class Ce extends M{constructor(e){super(),S(this,e,Te,Le,k,{color:0})}}function X(n,e,t){const o=n.slice();return o[1]=e[t][0],o[2]=e[t][1],o}function Y(n){let e,t,o,r=n[1]+"",f,a,i;return t=new Ce({props:{color:n[2]}}),{c(){e=F("li"),w(t.$$.fragment),o=V(),f=fe(r),a=V()},m(l,c){O(l,e,c),A(t,e,null),j(e,o),j(e,f),j(e,a),i=!0},p(l,c){const _={};c&1&&(_.color=l[2]),t.$set(_),(!i||c&1)&&r!==(r=l[1]+"")&&ce(f,r)},i(l){i||(g(t.$$.fragment,l),i=!0)},o(l){d(t.$$.fragment,l),i=!1},d(l){l&&N(e),H(t)}}}function ze(n){let e,t,o=Q(n[0]),r=[];for(let a=0;a<o.length;a+=1)r[a]=Y(X(n,o,a));const f=a=>d(r[a],1,1,()=>{r[a]=null});return{c(){e=F("ul");for(let a=0;a<r.length;a+=1)r[a].c()},m(a,i){O(a,e,i);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(a,i){if(i&1){o=Q(a[0]);let l;for(l=0;l<o.length;l+=1){const c=X(a,o,l);r[l]?(r[l].p(c,i),g(r[l],1)):(r[l]=Y(c),r[l].c(),g(r[l],1),r[l].m(e,null))}for(ie(),l=o.length;l<r.length;l+=1)f(l);ue()}},i(a){if(!t){for(let i=0;i<o.length;i+=1)g(r[i]);t=!0}},o(a){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)d(r[i]);t=!1},d(a){a&&N(e),se(r,a)}}}function Ie(n){let e,t;return e=new be({props:{label:"Legend",$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){w(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},p(o,[r]){const f={};r&33&&(f.$$scope={dirty:r,ctx:o}),e.$set(f)},i(o){t||(g(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){H(e,o)}}}function Me(n,e,t){let{rows:o}=e;return n.$$set=r=>{"rows"in r&&t(0,o=r.rows)},[o]}class Re extends M{constructor(e){super(),S(this,e,Me,Ie,k,{rows:0})}}function Se(n){let e;const t=n[15].default,o=te(t,n,n[23],null);return{c(){o&&o.c()},m(r,f){o&&o.m(r,f),e=!0},p(r,f){o&&o.p&&(!e||f&8388608)&&oe(o,t,r,r[23],e?ae(t,r[23],f,null):re(r[23]),null)},i(r){e||(g(o,r),e=!0)},o(r){d(o,r),e=!1},d(r){o&&o.d(r)}}}function ke(n){let e,t,o;function r(a){n[16](a)}let f={id:n[1],type:"circle",source:n[2],sourceLayer:n[3],beforeId:n[4],beforeLayerType:n[5],paint:n[6],layout:n[7],filter:n[8],applyToClusters:n[9],minzoom:n[10],maxzoom:n[11],hoverCursor:n[12],manageHoverState:n[13],eventsIfTopMost:n[14],$$slots:{default:[Se]},$$scope:{ctx:n}};return n[0]!==void 0&&(f.hovered=n[0]),e=new le({props:f}),x.push(()=>$(e,"hovered",r)),e.$on("click",n[17]),e.$on("dblclick",n[18]),e.$on("contextmenu",n[19]),e.$on("mouseenter",n[20]),e.$on("mousemove",n[21]),e.$on("mouseleave",n[22]),{c(){w(e.$$.fragment)},m(a,i){A(e,a,i),o=!0},p(a,[i]){const l={};i&2&&(l.id=a[1]),i&4&&(l.source=a[2]),i&8&&(l.sourceLayer=a[3]),i&16&&(l.beforeId=a[4]),i&32&&(l.beforeLayerType=a[5]),i&64&&(l.paint=a[6]),i&128&&(l.layout=a[7]),i&256&&(l.filter=a[8]),i&512&&(l.applyToClusters=a[9]),i&1024&&(l.minzoom=a[10]),i&2048&&(l.maxzoom=a[11]),i&4096&&(l.hoverCursor=a[12]),i&8192&&(l.manageHoverState=a[13]),i&16384&&(l.eventsIfTopMost=a[14]),i&8388608&&(l.$$scope={dirty:i,ctx:a}),!t&&i&1&&(t=!0,l.hovered=a[0],ee(()=>t=!1)),e.$set(l)},i(a){o||(g(e.$$.fragment,a),o=!0)},o(a){d(e.$$.fragment,a),o=!1},d(a){H(e,a)}}}function we(n,e,t){let{$$slots:o={},$$scope:r}=e,{id:f=ne("circle")}=e,{source:a=void 0}=e,{sourceLayer:i=void 0}=e,{beforeId:l=void 0}=e,{beforeLayerType:c=void 0}=e,{paint:_}=e,{layout:b=void 0}=e,{filter:L=void 0}=e,{applyToClusters:T=void 0}=e,{minzoom:C=void 0}=e,{maxzoom:z=void 0}=e,{hoverCursor:I=void 0}=e,{manageHoverState:v=!1}=e,{hovered:y=null}=e,{eventsIfTopMost:G=!1}=e;function P(s){y=s,t(0,y)}function B(s){h.call(this,n,s)}function E(s){h.call(this,n,s)}function D(s){h.call(this,n,s)}function R(s){h.call(this,n,s)}function Z(s){h.call(this,n,s)}function u(s){h.call(this,n,s)}return n.$$set=s=>{"id"in s&&t(1,f=s.id),"source"in s&&t(2,a=s.source),"sourceLayer"in s&&t(3,i=s.sourceLayer),"beforeId"in s&&t(4,l=s.beforeId),"beforeLayerType"in s&&t(5,c=s.beforeLayerType),"paint"in s&&t(6,_=s.paint),"layout"in s&&t(7,b=s.layout),"filter"in s&&t(8,L=s.filter),"applyToClusters"in s&&t(9,T=s.applyToClusters),"minzoom"in s&&t(10,C=s.minzoom),"maxzoom"in s&&t(11,z=s.maxzoom),"hoverCursor"in s&&t(12,I=s.hoverCursor),"manageHoverState"in s&&t(13,v=s.manageHoverState),"hovered"in s&&t(0,y=s.hovered),"eventsIfTopMost"in s&&t(14,G=s.eventsIfTopMost),"$$scope"in s&&t(23,r=s.$$scope)},[y,f,a,i,l,c,_,b,L,T,C,z,I,v,G,o,P,B,E,D,R,Z,u,r]}class Ze extends M{constructor(e){super(),S(this,e,we,ke,k,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14})}}function Ae(n){let e;const t=n[14].default,o=te(t,n,n[22],null);return{c(){o&&o.c()},m(r,f){o&&o.m(r,f),e=!0},p(r,f){o&&o.p&&(!e||f&4194304)&&oe(o,t,r,r[22],e?ae(t,r[22],f,null):re(r[22]),null)},i(r){e||(g(o,r),e=!0)},o(r){d(o,r),e=!1},d(r){o&&o.d(r)}}}function He(n){let e,t,o;function r(a){n[15](a)}let f={id:n[1],type:"line",source:n[2],sourceLayer:n[3],beforeId:n[4],beforeLayerType:n[5],paint:n[6],layout:n[7],filter:n[8],minzoom:n[9],maxzoom:n[10],hoverCursor:n[11],manageHoverState:n[12],eventsIfTopMost:n[13],$$slots:{default:[Ae]},$$scope:{ctx:n}};return n[0]!==void 0&&(f.hovered=n[0]),e=new le({props:f}),x.push(()=>$(e,"hovered",r)),e.$on("click",n[16]),e.$on("dblclick",n[17]),e.$on("contextmenu",n[18]),e.$on("mouseenter",n[19]),e.$on("mousemove",n[20]),e.$on("mouseleave",n[21]),{c(){w(e.$$.fragment)},m(a,i){A(e,a,i),o=!0},p(a,[i]){const l={};i&2&&(l.id=a[1]),i&4&&(l.source=a[2]),i&8&&(l.sourceLayer=a[3]),i&16&&(l.beforeId=a[4]),i&32&&(l.beforeLayerType=a[5]),i&64&&(l.paint=a[6]),i&128&&(l.layout=a[7]),i&256&&(l.filter=a[8]),i&512&&(l.minzoom=a[9]),i&1024&&(l.maxzoom=a[10]),i&2048&&(l.hoverCursor=a[11]),i&4096&&(l.manageHoverState=a[12]),i&8192&&(l.eventsIfTopMost=a[13]),i&4194304&&(l.$$scope={dirty:i,ctx:a}),!t&&i&1&&(t=!0,l.hovered=a[0],ee(()=>t=!1)),e.$set(l)},i(a){o||(g(e.$$.fragment,a),o=!0)},o(a){d(e.$$.fragment,a),o=!1},d(a){H(e,a)}}}function Ge(n,e,t){let{$$slots:o={},$$scope:r}=e,{id:f=ne("line")}=e,{source:a=void 0}=e,{sourceLayer:i=void 0}=e,{beforeId:l=void 0}=e,{beforeLayerType:c=void 0}=e,{paint:_}=e,{layout:b=void 0}=e,{filter:L=void 0}=e,{minzoom:T=void 0}=e,{maxzoom:C=void 0}=e,{hoverCursor:z=void 0}=e,{manageHoverState:I=!1}=e,{hovered:v=null}=e,{eventsIfTopMost:y=!1}=e;function G(u){v=u,t(0,v)}function P(u){h.call(this,n,u)}function B(u){h.call(this,n,u)}function E(u){h.call(this,n,u)}function D(u){h.call(this,n,u)}function R(u){h.call(this,n,u)}function Z(u){h.call(this,n,u)}return n.$$set=u=>{"id"in u&&t(1,f=u.id),"source"in u&&t(2,a=u.source),"sourceLayer"in u&&t(3,i=u.sourceLayer),"beforeId"in u&&t(4,l=u.beforeId),"beforeLayerType"in u&&t(5,c=u.beforeLayerType),"paint"in u&&t(6,_=u.paint),"layout"in u&&t(7,b=u.layout),"filter"in u&&t(8,L=u.filter),"minzoom"in u&&t(9,T=u.minzoom),"maxzoom"in u&&t(10,C=u.maxzoom),"hoverCursor"in u&&t(11,z=u.hoverCursor),"manageHoverState"in u&&t(12,I=u.manageHoverState),"hovered"in u&&t(0,v=u.hovered),"eventsIfTopMost"in u&&t(13,y=u.eventsIfTopMost),"$$scope"in u&&t(22,r=u.$$scope)},[v,f,a,i,l,c,_,b,L,T,C,z,I,y,o,G,P,B,E,D,R,Z,r]}class je extends M{constructor(e){super(),S(this,e,Ge,He,k,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}const qe="/atip/custom_gj/assets/zoom_out_map-b2e1091a.svg";function Fe(n){let e,t;return{c(){e=F("img"),de(e.src,t=qe)||J(e,"src",t),J(e,"alt","Zoom to show entire boundary")},m(o,r){O(o,e,r)},p:U,d(o){o&&N(e)}}}function Oe(n){let e,t;return e=new me({props:{title:"Zoom to show entire boundary",$$slots:{default:[Fe]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){w(e.$$.fragment)},m(o,r){A(e,o,r),t=!0},p(o,[r]){const f={};r&8&&(f.$$scope={dirty:r,ctx:o}),e.$set(f)},i(o){t||(g(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){H(e,o)}}}function Ne(n,e,t){let o;he(n,ge,a=>t(2,o=a));let{boundaryGeojson:r}=e;function f(){o.fitBounds(_e(r),{padding:20,animate:!0,duration:500})}return n.$$set=a=>{"boundaryGeojson"in a&&t(1,r=a.boundaryGeojson)},[f,r]}class Je extends M{constructor(e){super(),S(this,e,Ne,Oe,k,{boundaryGeojson:1})}}function Ue(n){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",atf4:"ATF4 Scheme"}[n]}function Ke(n){return{v1:"an intervention",v2:"an intervention",planning:"a development",atf4:"an intervention"}[n]}function Qe(n){return{v1:"interventions",v2:"interventions",planning:"developments",atf4:"interventions"}[n]}function Ve(n){return n=="planning"?W(["get","reference_type",["get","planning"]],{preapp:m.preapp,outline:m.outline,"reserved matters":m["reserved matters"],"local plan":m["local plan"]},"black"):W(["get","intervention_type"],{area:m.area,route:m.route,crossing:m.crossing,other:m.other},"white")}function We(n){return n=="planning"?[["Preapp",m.preapp],["Outline",m.outline],["Reserved matters",m["reserved matters"]],["Local plan",m["local plan"]]]:[["Areas",m.area],["Routes",m.route],["Crossings",m.crossing],["Other",m.other]]}function p(n){if(!n)throw new Error("coord is required");if(!Array.isArray(n)){if(n.type==="Feature"&&n.geometry!==null&&n.geometry.type==="Point")return n.geometry.coordinates;if(n.type==="Point")return n.coordinates}if(Array.isArray(n)&&n.length>=2&&!Array.isArray(n[0])&&!Array.isArray(n[1]))return n;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Xe(n){if(Array.isArray(n))return n;if(n.type==="Feature"){if(n.geometry!==null)return n.geometry.coordinates}else if(n.coordinates)return n.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ye(n,e){return n.type==="FeatureCollection"?"FeatureCollection":n.type==="GeometryCollection"?"GeometryCollection":n.type==="Feature"&&n.geometry!==null?n.geometry.type:n.type}function Pe(n,e,t){t===void 0&&(t={});var o=p(n),r=p(e),f=q(r[1]-o[1]),a=q(r[0]-o[0]),i=q(o[1]),l=q(r[1]),c=Math.pow(Math.sin(f/2),2)+Math.pow(Math.sin(a/2),2)*Math.cos(i)*Math.cos(l);return ve(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),t.units)}function pe(n,e){return e===void 0&&(e={}),ye(n,function(t,o){var r=o.geometry.coordinates;return t+Pe(r[0],r[1],e)},0)}export{Ze as C,je as L,Je as Z,Xe as a,Ye as b,Re as c,Pe as d,We as e,Qe as f,p as g,Ue as h,Ve as i,Ce as j,pe as l,Ke as s};
