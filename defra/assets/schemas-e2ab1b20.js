import{S as v,i as b,s as y,e as p,h as S,ap as O,j as C,H as w,o as L,g as T,m as k,t as m,n as g,p as z,aC as Z,as as X,at as Y,aD as x,d as P,u as $,k as I,C as ee,a$ as ne,b as te,c as oe,l as ae,aU as re,aL as le,aM as se,aN as ie,aO as ue,b0 as d,a as ce,q as fe,B as me,D as ge,N as de,aq as A}from"./index-0f7038d3.js";import{C as _e,c}from"./StreetViewController-fbcfe1fa.js";function he(n){let e;return{c(){e=p("span"),S(e,"class","svelte-kzgqtg"),O(e,"background",n[0])},m(o,t){C(o,e,t)},p(o,[t]){t&1&&O(e,"background",o[0])},i:w,o:w,d(o){o&&L(e)}}}function ve(n,e,o){let{color:t}=e;return n.$$set=a=>{"color"in a&&o(0,t=a.color)},[t]}class be extends v{constructor(e){super(),b(this,e,ve,he,y,{color:0})}}function E(n,e,o){const t=n.slice();return t[1]=e[o][0],t[2]=e[o][1],t}function R(n){let e,o,t,a=n[1]+"",u,r,i;return o=new be({props:{color:n[2]}}),{c(){e=p("li"),T(o.$$.fragment),t=P(),u=$(a),r=P()},m(l,f){C(l,e,f),k(o,e,null),I(e,t),I(e,u),I(e,r),i=!0},p(l,f){const _={};f&1&&(_.color=l[2]),o.$set(_),(!i||f&1)&&a!==(a=l[1]+"")&&ee(u,a)},i(l){i||(m(o.$$.fragment,l),i=!0)},o(l){g(o.$$.fragment,l),i=!1},d(l){l&&L(e),z(o)}}}function ye(n){let e,o,t=Z(n[0]),a=[];for(let r=0;r<t.length;r+=1)a[r]=R(E(n,t,r));const u=r=>g(a[r],1,1,()=>{a[r]=null});return{c(){e=p("ul");for(let r=0;r<a.length;r+=1)a[r].c()},m(r,i){C(r,e,i);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(e,null);o=!0},p(r,i){if(i&1){t=Z(r[0]);let l;for(l=0;l<t.length;l+=1){const f=E(r,t,l);a[l]?(a[l].p(f,i),m(a[l],1)):(a[l]=R(f),a[l].c(),m(a[l],1),a[l].m(e,null))}for(X(),l=t.length;l<a.length;l+=1)u(l);Y()}},i(r){if(!o){for(let i=0;i<t.length;i+=1)m(a[i]);o=!0}},o(r){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)g(a[i]);o=!1},d(r){r&&L(e),x(a,r)}}}function pe(n){let e,o;return e=new _e({props:{label:"Legend",$$slots:{default:[ye]},$$scope:{ctx:n}}}),{c(){T(e.$$.fragment)},m(t,a){k(e,t,a),o=!0},p(t,[a]){const u={};a&33&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}function Ce(n,e,o){let{rows:t}=e;return n.$$set=a=>{"rows"in a&&o(0,t=a.rows)},[t]}class je extends v{constructor(e){super(),b(this,e,Ce,pe,y,{rows:0})}}function Le(n){let e;const o=n[15].default,t=le(o,n,n[23],null);return{c(){t&&t.c()},m(a,u){t&&t.m(a,u),e=!0},p(a,u){t&&t.p&&(!e||u&8388608)&&se(t,o,a,a[23],e?ue(o,a[23],u,null):ie(a[23]),null)},i(a){e||(m(t,a),e=!0)},o(a){g(t,a),e=!1},d(a){t&&t.d(a)}}}function Te(n){let e,o,t;function a(r){n[16](r)}let u={id:n[1],type:"circle",source:n[2],sourceLayer:n[3],beforeId:n[4],beforeLayerType:n[5],paint:n[6],layout:n[7],filter:n[8],applyToClusters:n[9],minzoom:n[10],maxzoom:n[11],hoverCursor:n[12],manageHoverState:n[13],eventsIfTopMost:n[14],$$slots:{default:[Le]},$$scope:{ctx:n}};return n[0]!==void 0&&(u.hovered=n[0]),e=new ne({props:u}),te.push(()=>oe(e,"hovered",a)),e.$on("click",n[17]),e.$on("dblclick",n[18]),e.$on("contextmenu",n[19]),e.$on("mouseenter",n[20]),e.$on("mousemove",n[21]),e.$on("mouseleave",n[22]),{c(){T(e.$$.fragment)},m(r,i){k(e,r,i),t=!0},p(r,[i]){const l={};i&2&&(l.id=r[1]),i&4&&(l.source=r[2]),i&8&&(l.sourceLayer=r[3]),i&16&&(l.beforeId=r[4]),i&32&&(l.beforeLayerType=r[5]),i&64&&(l.paint=r[6]),i&128&&(l.layout=r[7]),i&256&&(l.filter=r[8]),i&512&&(l.applyToClusters=r[9]),i&1024&&(l.minzoom=r[10]),i&2048&&(l.maxzoom=r[11]),i&4096&&(l.hoverCursor=r[12]),i&8192&&(l.manageHoverState=r[13]),i&16384&&(l.eventsIfTopMost=r[14]),i&8388608&&(l.$$scope={dirty:i,ctx:r}),!o&&i&1&&(o=!0,l.hovered=r[0],ae(()=>o=!1)),e.$set(l)},i(r){t||(m(e.$$.fragment,r),t=!0)},o(r){g(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function ke(n,e,o){let{$$slots:t={},$$scope:a}=e,{id:u=re("circle")}=e,{source:r=void 0}=e,{sourceLayer:i=void 0}=e,{beforeId:l=void 0}=e,{beforeLayerType:f=void 0}=e,{paint:_}=e,{layout:M=void 0}=e,{filter:H=void 0}=e,{applyToClusters:j=void 0}=e,{minzoom:q=void 0}=e,{maxzoom:B=void 0}=e,{hoverCursor:D=void 0}=e,{manageHoverState:G=!1}=e,{hovered:h=null}=e,{eventsIfTopMost:N=!1}=e;function F(s){h=s,o(0,h)}function U(s){d.call(this,n,s)}function J(s){d.call(this,n,s)}function K(s){d.call(this,n,s)}function Q(s){d.call(this,n,s)}function V(s){d.call(this,n,s)}function W(s){d.call(this,n,s)}return n.$$set=s=>{"id"in s&&o(1,u=s.id),"source"in s&&o(2,r=s.source),"sourceLayer"in s&&o(3,i=s.sourceLayer),"beforeId"in s&&o(4,l=s.beforeId),"beforeLayerType"in s&&o(5,f=s.beforeLayerType),"paint"in s&&o(6,_=s.paint),"layout"in s&&o(7,M=s.layout),"filter"in s&&o(8,H=s.filter),"applyToClusters"in s&&o(9,j=s.applyToClusters),"minzoom"in s&&o(10,q=s.minzoom),"maxzoom"in s&&o(11,B=s.maxzoom),"hoverCursor"in s&&o(12,D=s.hoverCursor),"manageHoverState"in s&&o(13,G=s.manageHoverState),"hovered"in s&&o(0,h=s.hovered),"eventsIfTopMost"in s&&o(14,N=s.eventsIfTopMost),"$$scope"in s&&o(23,a=s.$$scope)},[h,u,r,i,l,f,_,M,H,j,q,B,D,G,N,t,F,U,J,K,Q,V,W,a]}class qe extends v{constructor(e){super(),b(this,e,ke,Te,y,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14})}}const ze="/atip/defra/assets/zoom_out_map-b2e1091a.svg";function Ie(n){let e,o;return{c(){e=p("img"),ge(e.src,o=ze)||S(e,"src",o),S(e,"alt","Zoom to show entire boundary")},m(t,a){C(t,e,a)},p:w,d(t){t&&L(e)}}}function Se(n){let e,o;return e=new ce({props:{title:"Zoom to show entire boundary",$$slots:{default:[Ie]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){T(e.$$.fragment)},m(t,a){k(e,t,a),o=!0},p(t,[a]){const u={};a&8&&(u.$$scope={dirty:a,ctx:t}),e.$set(u)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){z(e,t)}}}function we(n,e,o){let t;fe(n,me,r=>o(2,t=r));let{boundaryGeojson:a}=e;function u(){t.fitBounds(de(a),{padding:20,animate:!0,duration:500})}return n.$$set=r=>{"boundaryGeojson"in r&&o(1,a=r.boundaryGeojson)},[u,a]}class Be extends v{constructor(e){super(),b(this,e,we,Se,y,{boundaryGeojson:1})}}function De(n){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",atf4:"ATF4 Scheme"}[n]}function Ge(n){return{v1:"an intervention",v2:"an intervention",planning:"a development",atf4:"an intervention"}[n]}function Ne(n){return{v1:"interventions",v2:"interventions",planning:"developments",atf4:"interventions"}[n]}function Oe(n){return n=="planning"?A(["get","reference_type",["get","planning"]],{preapp:c.preapp,outline:c.outline,"reserved matters":c["reserved matters"],"local plan":c["local plan"]},"black"):A(["get","intervention_type"],{area:c.area,route:c.route,crossing:c.crossing,other:c.other},"white")}function Ze(n){return n=="planning"?[["Preapp",c.preapp],["Outline",c.outline],["Reserved matters",c["reserved matters"]],["Local plan",c["local plan"]]]:[["Areas",c.area],["Routes",c.route],["Crossings",c.crossing],["Other",c.other]]}export{qe as C,je as L,Be as Z,Ze as a,Ne as b,De as c,Oe as d,be as e,Ge as s};