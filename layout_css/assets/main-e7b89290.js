import{S as N,i as P,s as R,A as U,b as O,a as V,e as f,c as A,t as Z,d as z,f as c,g as E,h as o,j as M,m as G,l as B,k as H,n as K,o as Q,p as I,q as X,r as Y,u as x,v as tt,w as et}from"./authorities-78ceba66.js";function nt(n){let e,m,k,l,g,w,C,h,u,T,S,j,p,i,b,L,q,_,a,y,r,s,d,$,D;function W(t){n[8](t)}let F={};return n[1]!==void 0&&(F.open=n[1]),r=new U({props:F}),O.push(()=>V(r,"open",W,n[1])),{c(){e=f("div"),m=f("h1"),m.textContent="Welcome to ATIP v1",k=A(),l=f("button"),l.textContent="About",g=A(),w=f("p"),w.textContent="Select Transport Authority or Local Authority District:",C=A(),h=f("div"),u=f("input"),T=A(),S=f("datalist"),j=A(),p=f("button"),i=Z("Start"),L=A(),q=f("p"),q.textContent="Or pick a Transport Authority on the map",_=A(),a=f("div"),y=A(),z(r.$$.fragment),c(l,"type","button"),c(l,"class","svelte-ynp6gq"),c(u,"data-testid","transport-authority"),c(u,"list","authorities-list"),c(S,"id","authorities-list"),c(p,"type","button"),p.disabled=b=!n[3],c(p,"class","svelte-ynp6gq"),c(e,"class","left svelte-ynp6gq"),c(a,"id","map"),c(a,"class","svelte-ynp6gq")},m(t,v){E(t,e,v),o(e,m),o(e,k),o(e,l),o(e,g),o(e,w),o(e,C),o(e,h),o(h,u),M(u,n[0]),o(h,T),o(h,S),n[7](S),o(h,j),o(h,p),o(p,i),o(e,L),o(e,q),E(t,_,v),E(t,a,v),E(t,y,v),G(r,t,v),d=!0,$||(D=[B(l,"click",n[5]),B(u,"input",n[6]),B(p,"click",n[4])],$=!0)},p(t,[v]){v&1&&u.value!==t[0]&&M(u,t[0]),(!d||v&8&&b!==(b=!t[3]))&&(p.disabled=b);const J={};!s&&v&2&&(s=!0,J.open=t[1],H(()=>s=!1)),r.$set(J)},i(t){d||(K(r.$$.fragment,t),d=!0)},o(t){Q(r.$$.fragment,t),d=!1},d(t){t&&I(e),n[7](null),t&&I(_),t&&I(a),t&&I(y),X(r,t),$=!1,Y(D)}}}function at(n,e,m){let k,l=!1,g,w,C=new Set;async function h(){let i="boundary",b="boundary-layer";const q=await(await fetch(x)).text(),_=JSON.parse(q);for(let s of _.features){let d=document.createElement("option");d.value=s.properties.name,w.appendChild(d),C.add(s.properties.name)}_.features=_.features.filter(s=>s.properties.level=="TA");let a=new tt.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"}),y=null;function r(){y!==null&&a.setFeatureState({source:i,id:y},{hover:!1})}a.on("load",function(){a.fitBounds(et(_),{padding:20,animate:!1}),a.addSource(i,{type:"geojson",data:_,generateId:!0}),a.addLayer({id:b,source:i,type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.4]}}),a.on("mousemove",b,s=>{s.features.length>0&&(r(),y=s.features[0].id,a.setFeatureState({source:i,id:y},{hover:!0}))}),a.on("mouseleave",b,()=>{r(),y=null}),a.on("click",b,function(s){let d=s.features[0].properties.name;window.location.href=`scheme.html?authority=${d}`})})}h();function u(){window.location.href=`scheme.html?authority=${g}`}const T=()=>m(1,l=!l);function S(){g=this.value,m(0,g)}function j(i){O[i?"unshift":"push"](()=>{w=i,m(2,w)})}function p(i){l=i,m(1,l)}return n.$$.update=()=>{n.$$.dirty&1&&m(3,k=C.has(g))},[g,l,w,k,u,T,S,j,p]}class ot extends N{constructor(e){super(),P(this,e,at,nt,R,{})}}new ot({target:document.getElementById("app")});
