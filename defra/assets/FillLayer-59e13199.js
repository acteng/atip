import{S as F,i as C,s as S,F as U,g as k,m as M,t as v,n as y,p as H,e as B,h as g,j as D,w as G,o as J,b as w,a$ as K,c as P,l as Q,aL as V,aM as W,aN as X,aO as Y,aU as Z,b0 as m}from"./index-0f7038d3.js";function x(n){let e,l,a;return{c(){e=B("input"),e.disabled=n[2],g(e,"class","govuk-file-upload"),g(e,"id",n[1]),g(e,"type","file")},m(i,u){D(i,e,u),n[6](e),l||(a=G(e,"change",n[4]),l=!0)},p(i,u){u&4&&(e.disabled=i[2]),u&2&&g(e,"id",i[1])},d(i){i&&J(e),n[6](null),l=!1,a()}}}function p(n){let e,l;return e=new U({props:{label:n[0],id:n[1],$$slots:{default:[x]},$$scope:{ctx:n}}}),{c(){k(e.$$.fragment)},m(a,i){M(e,a,i),l=!0},p(a,[i]){const u={};i&1&&(u.label=a[0]),i&2&&(u.id=a[1]),i&142&&(u.$$scope={dirty:i,ctx:a}),e.$set(u)},i(a){l||(v(e.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),l=!1},d(a){H(e,a)}}}function $(n,e,l){let{label:a}=e,{id:i}=e,{loadFile:u}=e,{disabled:t=!1}=e,f;function s(r){let d=new FileReader;d.onload=h=>{u(h.target.result)};let c=f.files;d.readAsText(c[0])}function _(r){w[r?"unshift":"push"](()=>{f=r,l(3,f)})}return n.$$set=r=>{"label"in r&&l(0,a=r.label),"id"in r&&l(1,i=r.id),"loadFile"in r&&l(5,u=r.loadFile),"disabled"in r&&l(2,t=r.disabled)},[a,i,t,f,s,u,_]}class ae extends F{constructor(e){super(),C(this,e,$,p,S,{label:0,id:1,loadFile:5,disabled:2})}}function ee(n){let e;const l=n[14].default,a=V(l,n,n[22],null);return{c(){a&&a.c()},m(i,u){a&&a.m(i,u),e=!0},p(i,u){a&&a.p&&(!e||u&4194304)&&W(a,l,i,i[22],e?Y(l,i[22],u,null):X(i[22]),null)},i(i){e||(v(a,i),e=!0)},o(i){y(a,i),e=!1},d(i){a&&a.d(i)}}}function ne(n){let e,l,a;function i(t){n[15](t)}let u={id:n[1],type:"fill",source:n[2],sourceLayer:n[3],beforeId:n[4],beforeLayerType:n[5],paint:n[6],layout:n[7],filter:n[8],minzoom:n[9],maxzoom:n[10],hoverCursor:n[11],manageHoverState:n[12],eventsIfTopMost:n[13],$$slots:{default:[ee]},$$scope:{ctx:n}};return n[0]!==void 0&&(u.hovered=n[0]),e=new K({props:u}),w.push(()=>P(e,"hovered",i)),e.$on("click",n[16]),e.$on("dblclick",n[17]),e.$on("contextmenu",n[18]),e.$on("mouseenter",n[19]),e.$on("mousemove",n[20]),e.$on("mouseleave",n[21]),{c(){k(e.$$.fragment)},m(t,f){M(e,t,f),a=!0},p(t,[f]){const s={};f&2&&(s.id=t[1]),f&4&&(s.source=t[2]),f&8&&(s.sourceLayer=t[3]),f&16&&(s.beforeId=t[4]),f&32&&(s.beforeLayerType=t[5]),f&64&&(s.paint=t[6]),f&128&&(s.layout=t[7]),f&256&&(s.filter=t[8]),f&512&&(s.minzoom=t[9]),f&1024&&(s.maxzoom=t[10]),f&2048&&(s.hoverCursor=t[11]),f&4096&&(s.manageHoverState=t[12]),f&8192&&(s.eventsIfTopMost=t[13]),f&4194304&&(s.$$scope={dirty:f,ctx:t}),!l&&f&1&&(l=!0,s.hovered=t[0],Q(()=>l=!1)),e.$set(s)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){H(e,t)}}}function oe(n,e,l){let{$$slots:a={},$$scope:i}=e,{id:u=Z("fill")}=e,{source:t=void 0}=e,{sourceLayer:f=void 0}=e,{beforeId:s=void 0}=e,{beforeLayerType:_=void 0}=e,{paint:r}=e,{layout:d=void 0}=e,{filter:c=void 0}=e,{minzoom:h=void 0}=e,{maxzoom:I=void 0}=e,{hoverCursor:L=void 0}=e,{manageHoverState:T=!1}=e,{hovered:b=null}=e,{eventsIfTopMost:z=!1}=e;function j(o){b=o,l(0,b)}function q(o){m.call(this,n,o)}function A(o){m.call(this,n,o)}function E(o){m.call(this,n,o)}function N(o){m.call(this,n,o)}function O(o){m.call(this,n,o)}function R(o){m.call(this,n,o)}return n.$$set=o=>{"id"in o&&l(1,u=o.id),"source"in o&&l(2,t=o.source),"sourceLayer"in o&&l(3,f=o.sourceLayer),"beforeId"in o&&l(4,s=o.beforeId),"beforeLayerType"in o&&l(5,_=o.beforeLayerType),"paint"in o&&l(6,r=o.paint),"layout"in o&&l(7,d=o.layout),"filter"in o&&l(8,c=o.filter),"minzoom"in o&&l(9,h=o.minzoom),"maxzoom"in o&&l(10,I=o.maxzoom),"hoverCursor"in o&&l(11,L=o.hoverCursor),"manageHoverState"in o&&l(12,T=o.manageHoverState),"hovered"in o&&l(0,b=o.hovered),"eventsIfTopMost"in o&&l(13,z=o.eventsIfTopMost),"$$scope"in o&&l(22,i=o.$$scope)},[b,u,t,f,s,_,r,d,c,h,I,L,T,z,a,j,q,A,E,N,O,R,i]}class ie extends F{constructor(e){super(),C(this,e,oe,ne,S,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}export{ae as F,ie as a};
