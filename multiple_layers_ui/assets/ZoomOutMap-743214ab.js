import{S as k,i as M,s as H,be as Q,b as A,c as E,g as j,m as w,l as F,t as c,n as _,p as G,a1 as K,J as N,O as R,P as U,Q as V,bf as f,a as W,q as X,D as Y,e as p,a7 as x,h as S,j as $,a8 as ee,o as oe,ac as ne}from"./index-c7e86b0c.js";function te(n){let e;const t=n[16].default,a=N(t,n,n[24],null);return{c(){a&&a.c()},m(r,s){a&&a.m(r,s),e=!0},p(r,s){a&&a.p&&(!e||s&16777216)&&R(a,t,r,r[24],e?V(t,r[24],s,null):U(r[24]),null)},i(r){e||(c(a,r),e=!0)},o(r){_(a,r),e=!1},d(r){a&&a.d(r)}}}function ae(n){let e,t,a;function r(i){n[17](i)}let s={id:n[1],type:"circle",source:n[2],sourceLayer:n[3],beforeId:n[4],beforeLayerType:n[5],paint:n[6],layout:n[7],filter:n[8],applyToClusters:n[9],minzoom:n[10],maxzoom:n[11],hoverCursor:n[12],manageHoverState:n[13],eventsIfTopMost:n[14],interactive:n[15],$$slots:{default:[te]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.hovered=n[0]),e=new Q({props:s}),A.push(()=>E(e,"hovered",r)),e.$on("click",n[18]),e.$on("dblclick",n[19]),e.$on("contextmenu",n[20]),e.$on("mouseenter",n[21]),e.$on("mousemove",n[22]),e.$on("mouseleave",n[23]),{c(){j(e.$$.fragment)},m(i,l){w(e,i,l),a=!0},p(i,[l]){const u={};l&2&&(u.id=i[1]),l&4&&(u.source=i[2]),l&8&&(u.sourceLayer=i[3]),l&16&&(u.beforeId=i[4]),l&32&&(u.beforeLayerType=i[5]),l&64&&(u.paint=i[6]),l&128&&(u.layout=i[7]),l&256&&(u.filter=i[8]),l&512&&(u.applyToClusters=i[9]),l&1024&&(u.minzoom=i[10]),l&2048&&(u.maxzoom=i[11]),l&4096&&(u.hoverCursor=i[12]),l&8192&&(u.manageHoverState=i[13]),l&16384&&(u.eventsIfTopMost=i[14]),l&32768&&(u.interactive=i[15]),l&16777216&&(u.$$scope={dirty:l,ctx:i}),!t&&l&1&&(t=!0,u.hovered=i[0],F(()=>t=!1)),e.$set(u)},i(i){a||(c(e.$$.fragment,i),a=!0)},o(i){_(e.$$.fragment,i),a=!1},d(i){G(e,i)}}}function ie(n,e,t){let{$$slots:a={},$$scope:r}=e,{id:s=K("circle")}=e,{source:i=void 0}=e,{sourceLayer:l=void 0}=e,{beforeId:u=void 0}=e,{beforeLayerType:d=void 0}=e,{paint:b}=e,{layout:h=void 0}=e,{filter:v=void 0}=e,{applyToClusters:y=void 0}=e,{minzoom:g=void 0}=e,{maxzoom:T=void 0}=e,{hoverCursor:C=void 0}=e,{manageHoverState:L=!1}=e,{hovered:m=null}=e,{eventsIfTopMost:z=!1}=e,{interactive:I=!0}=e;function Z(o){m=o,t(0,m)}function q(o){f.call(this,n,o)}function B(o){f.call(this,n,o)}function O(o){f.call(this,n,o)}function D(o){f.call(this,n,o)}function J(o){f.call(this,n,o)}function P(o){f.call(this,n,o)}return n.$$set=o=>{"id"in o&&t(1,s=o.id),"source"in o&&t(2,i=o.source),"sourceLayer"in o&&t(3,l=o.sourceLayer),"beforeId"in o&&t(4,u=o.beforeId),"beforeLayerType"in o&&t(5,d=o.beforeLayerType),"paint"in o&&t(6,b=o.paint),"layout"in o&&t(7,h=o.layout),"filter"in o&&t(8,v=o.filter),"applyToClusters"in o&&t(9,y=o.applyToClusters),"minzoom"in o&&t(10,g=o.minzoom),"maxzoom"in o&&t(11,T=o.maxzoom),"hoverCursor"in o&&t(12,C=o.hoverCursor),"manageHoverState"in o&&t(13,L=o.manageHoverState),"hovered"in o&&t(0,m=o.hovered),"eventsIfTopMost"in o&&t(14,z=o.eventsIfTopMost),"interactive"in o&&t(15,I=o.interactive),"$$scope"in o&&t(24,r=o.$$scope)},[m,s,i,l,u,d,b,h,v,y,g,T,C,L,z,I,a,Z,q,B,O,D,J,P,r]}class me extends k{constructor(e){super(),M(this,e,ie,ae,H,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14,interactive:15})}}const re="/atip/multiple_layers_ui/assets/zoom_out_map-b2e1091a.svg";function le(n){let e,t;return{c(){e=p("img"),x(e.src,t=re)||S(e,"src",t),S(e,"alt","Zoom to show entire boundary")},m(a,r){$(a,e,r)},p:ee,d(a){a&&oe(e)}}}function ue(n){let e,t;return e=new W({props:{title:"Zoom to show entire boundary",$$slots:{default:[le]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){j(e.$$.fragment)},m(a,r){w(e,a,r),t=!0},p(a,[r]){const s={};r&8&&(s.$$scope={dirty:r,ctx:a}),e.$set(s)},i(a){t||(c(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){G(e,a)}}}function se(n,e,t){let a;X(n,Y,i=>t(2,a=i));let{boundaryGeojson:r}=e;function s(){a.fitBounds(ne(r),{padding:20,animate:!0,duration:500})}return n.$$set=i=>{"boundaryGeojson"in i&&t(1,r=i.boundaryGeojson)},[s,r]}class ce extends k{constructor(e){super(),M(this,e,se,ue,H,{boundaryGeojson:1})}}export{me as C,ce as Z};
