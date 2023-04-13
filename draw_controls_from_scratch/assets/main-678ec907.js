import{S as z,i as G,s as H,A as K,b as V,a as Q,e as i,c as p,t as X,d as Y,f as d,g as $,h as n,j as U,m as x,l as W,k as tt,n as et,o as nt,p as B,q as at,r as ot,u as st,v as lt,w as it}from"./authorities-b2ca77f0.js";function rt(s){let t,f,A,r,b,y,S,E,j,T,I,k,L,o,l,D,g,m,a,h,v,u,w,F,C,J,_,M,q,O,N;function Z(e){s[8](e)}let P={};return s[1]!==void 0&&(P.open=s[1]),_=new K({props:P}),V.push(()=>Q(_,"open",Z,s[1])),{c(){t=i("div"),f=i("h1"),f.textContent="Welcome to ATIP v1",A=p(),r=i("button"),r.textContent="About",b=p(),y=i("br"),S=p(),E=i("br"),j=p(),T=i("br"),I=p(),k=i("p"),k.textContent="Select Transport Authority or Local Authority District:",L=p(),o=i("div"),l=i("input"),D=p(),g=i("datalist"),m=p(),a=i("button"),h=X("Start"),u=p(),w=i("p"),w.textContent="Or pick a Transport Authority on the map",F=p(),C=i("div"),J=p(),Y(_.$$.fragment),d(r,"type","button"),d(r,"class","svelte-ynp6gq"),d(l,"data-testid","transport-authority"),d(l,"list","authorities-list"),d(g,"id","authorities-list"),d(a,"type","button"),a.disabled=v=!s[3],d(a,"class","svelte-ynp6gq"),d(t,"class","left svelte-ynp6gq"),d(C,"id","map"),d(C,"class","svelte-ynp6gq")},m(e,c){$(e,t,c),n(t,f),n(t,A),n(t,r),n(t,b),n(t,y),n(t,S),n(t,E),n(t,j),n(t,T),n(t,I),n(t,k),n(t,L),n(t,o),n(o,l),U(l,s[0]),n(o,D),n(o,g),s[7](g),n(o,m),n(o,a),n(a,h),n(t,u),n(t,w),$(e,F,c),$(e,C,c),$(e,J,c),x(_,e,c),q=!0,O||(N=[W(r,"click",s[5]),W(l,"input",s[6]),W(a,"click",s[4])],O=!0)},p(e,[c]){c&1&&l.value!==e[0]&&U(l,e[0]),(!q||c&8&&v!==(v=!e[3]))&&(a.disabled=v);const R={};!M&&c&2&&(M=!0,R.open=e[1],tt(()=>M=!1)),_.$set(R)},i(e){q||(et(_.$$.fragment,e),q=!0)},o(e){nt(_.$$.fragment,e),q=!1},d(e){e&&B(t),s[7](null),e&&B(F),e&&B(C),e&&B(J),at(_,e),O=!1,ot(N)}}}function ut(s,t,f){let A,r=!1,b,y,S=new Set;async function E(){let o="boundary",l="boundary-layer";const g=await(await fetch(st)).text(),m=JSON.parse(g);for(let u of m.features){let w=document.createElement("option");w.value=u.properties.name,y.appendChild(w),S.add(u.properties.name)}m.features=m.features.filter(u=>u.properties.level=="TA");let a=new lt.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"}),h=null;function v(){h!==null&&a.setFeatureState({source:o,id:h},{hover:!1})}a.on("load",function(){a.fitBounds(it(m),{padding:20,animate:!1}),a.addSource(o,{type:"geojson",data:m,generateId:!0}),a.addLayer({id:l,source:o,type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.4]}}),a.on("mousemove",l,u=>{u.features.length>0&&(v(),h=u.features[0].id,a.setFeatureState({source:o,id:h},{hover:!0}))}),a.on("mouseleave",l,()=>{v(),h=null}),a.on("click",l,function(u){window.location.href=`scheme.html?authority=${u.features[0].properties.name}`})})}E();function j(){window.location.href=`scheme.html?authority=${b}`}const T=()=>f(1,r=!r);function I(){b=this.value,f(0,b)}function k(o){V[o?"unshift":"push"](()=>{y=o,f(2,y)})}function L(o){r=o,f(1,r)}return s.$$.update=()=>{s.$$.dirty&1&&f(3,A=S.has(b))},[b,r,y,A,j,T,I,k,L]}class pt extends z{constructor(t){super(),G(this,t,ut,rt,H,{})}}new pt({target:document.getElementById("app")});
