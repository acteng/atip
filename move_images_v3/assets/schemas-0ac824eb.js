import{S as b,i as v,s as y,e as L,h as w,aB as K,j as C,K as S,o as T,g as k,m as I,t as m,n as _,p as z,aJ as R,a2 as N,a3 as x,aK as $,d as A,v as ee,k as p,H as te,aY as ne,b as oe,c as ae,l as re,aZ as le,aU as se,aV as ie,aW as ue,aX as fe,a_ as g,a as ce,q as me,D as _e,J as ge,Q as de,aI as D}from"./index-2f860fce.js";import{e as he,b as f}from"./StreetViewTool-bc345a27.js";function be(n){let e;return{c(){e=L("span"),w(e,"class","svelte-kzgqtg"),K(e,"background",n[0])},m(o,t){C(o,e,t)},p(o,[t]){t&1&&K(e,"background",o[0])},i:S,o:S,d(o){o&&T(e)}}}function ve(n,e,o){let{color:t}=e;return n.$$set=a=>{"color"in a&&o(0,t=a.color)},[t]}class ye extends b{constructor(e){super(),v(this,e,ve,be,y,{color:0})}}function E(n,e,o){const t=n.slice();return t[1]=e[o][0],t[2]=e[o][1],t}function P(n){let e,o,t,a=n[1]+"",u,r,i;return o=new ye({props:{color:n[2]}}),{c(){e=L("li"),k(o.$$.fragment),t=A(),u=ee(a),r=A()},m(l,c){C(l,e,c),I(o,e,null),p(e,t),p(e,u),p(e,r),i=!0},p(l,c){const d={};c&1&&(d.color=l[2]),o.$set(d),(!i||c&1)&&a!==(a=l[1]+"")&&te(u,a)},i(l){i||(m(o.$$.fragment,l),i=!0)},o(l){_(o.$$.fragment,l),i=!1},d(l){l&&T(e),z(o)}}}function Le(n){let e,o,t=R(n[0]),a=[];for(let r=0;r<t.length;r+=1)a[r]=P(E(n,t,r));const u=r=>_(a[r],1,1,()=>{a[r]=null});return{c(){e=L("ul");for(let r=0;r<a.length;r+=1)a[r].c()},m(r,i){C(r,e,i);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);o=!0},p(r,i){if(i&1){t=R(r[0]);let l;for(l=0;l<t.length;l+=1){const c=E(r,t,l);a[l]?(a[l].p(c,i),m(a[l],1)):(a[l]=P(c),a[l].c(),m(a[l],1),a[l].m(e,null))}for(N(),l=t.length;l<a.length;l+=1)u(l);x()}},i(r){if(!o){for(let i=0;i<t.length;i+=1)m(a[i]);o=!0}},o(r){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)_(a[i]);o=!1},d(r){r&&T(e),$(a,r)}}}function Ce(n){let e,o;return e=new he({props:{label:"Legend",$$slots:{default:[Le]},$$scope:{ctx:n}}}),{c(){k(e.$$.fragment)},m(t,a){I(e,t,a),o=!0},p(t,[a]){const u={};a&33&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){_(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}function Te(n,e,o){let{rows:t}=e;return n.$$set=a=>{"rows"in a&&o(0,t=a.rows)},[t]}class Be extends b{constructor(e){super(),v(this,e,Te,Ce,y,{rows:0})}}function ke(n){let e;const o=n[16].default,t=se(o,n,n[24],null);return{c(){t&&t.c()},m(a,u){t&&t.m(a,u),e=!0},p(a,u){t&&t.p&&(!e||u&16777216)&&ie(t,o,a,a[24],e?fe(o,a[24],u,null):ue(a[24]),null)},i(a){e||(m(t,a),e=!0)},o(a){_(t,a),e=!1},d(a){t&&t.d(a)}}}function Ie(n){let e,o,t;function a(r){n[17](r)}let u={id:n[1],type:"circle",source:n[2],sourceLayer:n[3],beforeId:n[4],beforeLayerType:n[5],paint:n[6],layout:n[7],filter:n[8],applyToClusters:n[9],minzoom:n[10],maxzoom:n[11],hoverCursor:n[12],manageHoverState:n[13],eventsIfTopMost:n[14],interactive:n[15],$$slots:{default:[ke]},$$scope:{ctx:n}};return n[0]!==void 0&&(u.hovered=n[0]),e=new ne({props:u}),oe.push(()=>ae(e,"hovered",a)),e.$on("click",n[18]),e.$on("dblclick",n[19]),e.$on("contextmenu",n[20]),e.$on("mouseenter",n[21]),e.$on("mousemove",n[22]),e.$on("mouseleave",n[23]),{c(){k(e.$$.fragment)},m(r,i){I(e,r,i),t=!0},p(r,[i]){const l={};i&2&&(l.id=r[1]),i&4&&(l.source=r[2]),i&8&&(l.sourceLayer=r[3]),i&16&&(l.beforeId=r[4]),i&32&&(l.beforeLayerType=r[5]),i&64&&(l.paint=r[6]),i&128&&(l.layout=r[7]),i&256&&(l.filter=r[8]),i&512&&(l.applyToClusters=r[9]),i&1024&&(l.minzoom=r[10]),i&2048&&(l.maxzoom=r[11]),i&4096&&(l.hoverCursor=r[12]),i&8192&&(l.manageHoverState=r[13]),i&16384&&(l.eventsIfTopMost=r[14]),i&32768&&(l.interactive=r[15]),i&16777216&&(l.$$scope={dirty:i,ctx:r}),!o&&i&1&&(o=!0,l.hovered=r[0],re(()=>o=!1)),e.$set(l)},i(r){t||(m(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function ze(n,e,o){let{$$slots:t={},$$scope:a}=e,{id:u=le("circle")}=e,{source:r=void 0}=e,{sourceLayer:i=void 0}=e,{beforeId:l=void 0}=e,{beforeLayerType:c=void 0}=e,{paint:d}=e,{layout:M=void 0}=e,{filter:H=void 0}=e,{applyToClusters:j=void 0}=e,{minzoom:B=void 0}=e,{maxzoom:Z=void 0}=e,{hoverCursor:q=void 0}=e,{manageHoverState:G=!1}=e,{hovered:h=null}=e,{eventsIfTopMost:O=!1}=e,{interactive:J=!0}=e;function Q(s){h=s,o(0,h)}function U(s){g.call(this,n,s)}function V(s){g.call(this,n,s)}function W(s){g.call(this,n,s)}function X(s){g.call(this,n,s)}function Y(s){g.call(this,n,s)}function F(s){g.call(this,n,s)}return n.$$set=s=>{"id"in s&&o(1,u=s.id),"source"in s&&o(2,r=s.source),"sourceLayer"in s&&o(3,i=s.sourceLayer),"beforeId"in s&&o(4,l=s.beforeId),"beforeLayerType"in s&&o(5,c=s.beforeLayerType),"paint"in s&&o(6,d=s.paint),"layout"in s&&o(7,M=s.layout),"filter"in s&&o(8,H=s.filter),"applyToClusters"in s&&o(9,j=s.applyToClusters),"minzoom"in s&&o(10,B=s.minzoom),"maxzoom"in s&&o(11,Z=s.maxzoom),"hoverCursor"in s&&o(12,q=s.hoverCursor),"manageHoverState"in s&&o(13,G=s.manageHoverState),"hovered"in s&&o(0,h=s.hovered),"eventsIfTopMost"in s&&o(14,O=s.eventsIfTopMost),"interactive"in s&&o(15,J=s.interactive),"$$scope"in s&&o(24,a=s.$$scope)},[h,u,r,i,l,c,d,M,H,j,B,Z,q,G,O,J,t,Q,U,V,W,X,Y,F,a]}class Ze extends b{constructor(e){super(),v(this,e,ze,Ie,y,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14,interactive:15})}}const pe="/atip/move_images_v3/assets/zoom_out_map-b2e1091a.svg";function we(n){let e,o;return{c(){e=L("img"),ge(e.src,o=pe)||w(e,"src",o),w(e,"alt","Zoom to show entire boundary")},m(t,a){C(t,e,a)},p:S,d(t){t&&T(e)}}}function Se(n){let e,o;return e=new ce({props:{title:"Zoom to show entire boundary",$$slots:{default:[we]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){k(e.$$.fragment)},m(t,a){I(e,t,a),o=!0},p(t,[a]){const u={};a&8&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){_(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}function Me(n,e,o){let t;me(n,_e,r=>o(2,t=r));let{boundaryGeojson:a}=e;function u(){t.fitBounds(de(a),{padding:20,animate:!0,duration:500})}return n.$$set=r=>{"boundaryGeojson"in r&&o(1,a=r.boundaryGeojson)},[u,a]}class qe extends b{constructor(e){super(),v(this,e,Me,Se,y,{boundaryGeojson:1})}}function Ge(n){return n=="planning"?D(["get","reference_type",["get","planning"]],{preapp:f.preapp,outline:f.outline,"reserved matters":f["reserved matters"],"local plan":f["local plan"]},"black"):D(["get","intervention_type"],{area:f.area,route:f.route,crossing:f.crossing,other:f.other},"white")}function Oe(n){return n=="planning"?[["Preapp",f.preapp],["Outline",f.outline],["Reserved matters",f["reserved matters"]],["Local plan",f["local plan"]]]:[["Areas",f.area],["Routes",f.route],["Crossings",f.crossing],["Other",f.other]]}export{Ze as C,Be as L,qe as Z,ye as a,Ge as c,Oe as s};
