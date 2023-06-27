import{S as K,i as Q,s as X,F as Y,b as z,a as x,e as p,c as h,t as tt,d as D,f as m,g as O,h as o,j as W,m as G,l as L,k as et,n as R,o as V,p as j,q as Z,r as at,u as nt,v as ot,w as lt}from"./maplibre_helpers-09665bd3.js";import{A as it,a as st}from"./About-f970e1b5.js";function rt(n){let t,r,q,u,g,w,k,y,f,F,C,E,d,l,a,I,b,S,i,A,_,s,c,J,$,N,T,P,M;_=new Y({props:{label:"Upload ATIP GeoJSON file",uniqueId:"load-geojson",loadFile:n[4]}});function H(e){n[9](e)}let U={};return n[1]!==void 0&&(U.open=n[1]),$=new it({props:U}),z.push(()=>x($,"open",H)),{c(){t=p("div"),r=p("h1"),r.textContent="Welcome to ATIP v2",q=h(),u=p("button"),u.textContent="About",g=h(),w=p("p"),w.textContent="Select Transport Authority or Local Authority District:",k=h(),y=p("div"),f=p("input"),F=h(),C=p("datalist"),E=h(),d=p("button"),l=tt("Start"),I=h(),b=p("p"),b.textContent="Or pick a Transport Authority on the map",S=h(),i=p("p"),i.textContent="Or upload an ATIP file:",A=h(),D(_.$$.fragment),s=h(),c=p("div"),J=h(),D($.$$.fragment),m(u,"type","button"),m(u,"class","svelte-ynp6gq"),m(f,"data-testid","transport-authority"),m(f,"list","authorities-list"),m(C,"id","authorities-list"),m(d,"type","button"),d.disabled=a=!n[3],m(d,"class","svelte-ynp6gq"),m(t,"class","left svelte-ynp6gq"),m(c,"id","map"),m(c,"class","svelte-ynp6gq")},m(e,v){O(e,t,v),o(t,r),o(t,q),o(t,u),o(t,g),o(t,w),o(t,k),o(t,y),o(y,f),W(f,n[0]),o(y,F),o(y,C),n[8](C),o(y,E),o(y,d),o(d,l),o(t,I),o(t,b),o(t,S),o(t,i),o(t,A),G(_,t,null),O(e,s,v),O(e,c,v),O(e,J,v),G($,e,v),T=!0,P||(M=[L(u,"click",n[6]),L(f,"input",n[7]),L(d,"click",n[5])],P=!0)},p(e,[v]){v&1&&f.value!==e[0]&&W(f,e[0]),(!T||v&8&&a!==(a=!e[3]))&&(d.disabled=a);const B={};!N&&v&2&&(N=!0,B.open=e[1],et(()=>N=!1)),$.$set(B)},i(e){T||(R(_.$$.fragment,e),R($.$$.fragment,e),T=!0)},o(e){V(_.$$.fragment,e),V($.$$.fragment,e),T=!1},d(e){e&&(j(t),j(s),j(c),j(J)),n[8](null),Z(_),Z($,e),P=!1,at(M)}}}function ut(n){if(n.features.length>0){let t=n.features[0].properties;for(let r of["planning","v2","criticals"])if(t&&r in t)return r}return"v1"}function pt(n,t,r){let q,u=!1,g,w,k=new Set;nt(async()=>{let l="boundary",a="boundary-layer";const b=await(await fetch(st)).text(),S=JSON.parse(b);for(let s of S.features){let c=document.createElement("option");c.value=s.properties.name,w.appendChild(c),k.add(s.properties.name)}S.features=S.features.filter(s=>s.properties.level=="TA");let i=new ot.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"}),A=null;function _(){A!==null&&i.setFeatureState({source:l,id:A},{hover:!1})}i.on("load",function(){i.fitBounds(lt(S),{padding:20,animate:!1}),i.addSource(l,{type:"geojson",data:S,generateId:!0}),i.addLayer({id:a,source:l,type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.4]}}),i.on("mousemove",a,s=>{s.features.length>0&&(_(),A=s.features[0].id,i.setFeatureState({source:l,id:A},{hover:!0}))}),i.on("mouseleave",a,()=>{_(),A=null}),i.on("click",a,function(s){let c=s.features[0].properties.name;window.location.href=`scheme.html?authority=${c}`})})});function y(l){try{let a=JSON.parse(l);if(!a.authority)throw new Error("File doesn't have an authority set; is it an ATIP file?");if(!k.has(a.authority))throw new Error(`Unknown authority ${a.authority}`);let I=a.authority,b=ut(a);b!="v1"&&(I+=`_${b}`),window.localStorage.setItem(I,JSON.stringify(a)),window.location.href=`scheme.html?authority=${a.authority}&schema=${b}`}catch(a){window.alert(`Couldn't load scheme from a file: ${a}`)}}function f(){window.location.href=`scheme.html?authority=${g}`}const F=()=>r(1,u=!u);function C(){g=this.value,r(0,g)}function E(l){z[l?"unshift":"push"](()=>{w=l,r(2,w)})}function d(l){u=l,r(1,u)}return n.$$.update=()=>{n.$$.dirty&1&&r(3,q=k.has(g))},[g,u,w,q,y,f,F,C,E,d]}class ft extends K{constructor(t){super(),Q(this,t,pt,rt,X,{})}}new ft({target:document.getElementById("app")});
