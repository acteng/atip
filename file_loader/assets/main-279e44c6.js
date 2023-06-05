import{S as K,i as Q,s as X,F as Y,A as x,b as z,a as tt,e as p,c as h,t as et,d as D,f as m,g as O,h as o,j as W,m as G,l as L,k as nt,n as R,o as V,p as j,q as Z,r as at,u as ot,v as lt,w as st,x as it}from"./authorities-26b98f63.js";function rt(n){let e,r,q,u,g,w,k,y,f,F,C,E,d,l,a,I,b,S,s,A,_,i,c,J,$,N,T,P,M;_=new Y({props:{label:"Upload ATIP GeoJSON file",uniqueId:"load-geojson",loadFile:n[4]}});function H(t){n[9](t)}let U={};return n[1]!==void 0&&(U.open=n[1]),$=new x({props:U}),z.push(()=>tt($,"open",H,n[1])),{c(){e=p("div"),r=p("h1"),r.textContent="Welcome to ATIP v2",q=h(),u=p("button"),u.textContent="About",g=h(),w=p("p"),w.textContent="Select Transport Authority or Local Authority District:",k=h(),y=p("div"),f=p("input"),F=h(),C=p("datalist"),E=h(),d=p("button"),l=et("Start"),I=h(),b=p("p"),b.textContent="Or pick a Transport Authority on the map",S=h(),s=p("p"),s.textContent="Or upload an ATIP file:",A=h(),D(_.$$.fragment),i=h(),c=p("div"),J=h(),D($.$$.fragment),m(u,"type","button"),m(u,"class","svelte-ynp6gq"),m(f,"data-testid","transport-authority"),m(f,"list","authorities-list"),m(C,"id","authorities-list"),m(d,"type","button"),d.disabled=a=!n[3],m(d,"class","svelte-ynp6gq"),m(e,"class","left svelte-ynp6gq"),m(c,"id","map"),m(c,"class","svelte-ynp6gq")},m(t,v){O(t,e,v),o(e,r),o(e,q),o(e,u),o(e,g),o(e,w),o(e,k),o(e,y),o(y,f),W(f,n[0]),o(y,F),o(y,C),n[8](C),o(y,E),o(y,d),o(d,l),o(e,I),o(e,b),o(e,S),o(e,s),o(e,A),G(_,e,null),O(t,i,v),O(t,c,v),O(t,J,v),G($,t,v),T=!0,P||(M=[L(u,"click",n[6]),L(f,"input",n[7]),L(d,"click",n[5])],P=!0)},p(t,[v]){v&1&&f.value!==t[0]&&W(f,t[0]),(!T||v&8&&a!==(a=!t[3]))&&(d.disabled=a);const B={};!N&&v&2&&(N=!0,B.open=t[1],nt(()=>N=!1)),$.$set(B)},i(t){T||(R(_.$$.fragment,t),R($.$$.fragment,t),T=!0)},o(t){V(_.$$.fragment,t),V($.$$.fragment,t),T=!1},d(t){t&&j(e),n[8](null),Z(_),t&&j(i),t&&j(c),t&&j(J),Z($,t),P=!1,at(M)}}}function ut(n){if(n.features.length>0){let e=n.features[0].properties;for(let r of["planning","v2","criticals"])if(e&&r in e)return r}return"v1"}function pt(n,e,r){let q,u=!1,g,w,k=new Set;ot(async()=>{let l="boundary",a="boundary-layer";const b=await(await fetch(lt)).text(),S=JSON.parse(b);for(let i of S.features){let c=document.createElement("option");c.value=i.properties.name,w.appendChild(c),k.add(i.properties.name)}S.features=S.features.filter(i=>i.properties.level=="TA");let s=new st.Map({container:"map",style:"https://api.maptiler.com/maps/streets/style.json?key=MZEJTanw3WpxRvt7qDfo"}),A=null;function _(){A!==null&&s.setFeatureState({source:l,id:A},{hover:!1})}s.on("load",function(){s.fitBounds(it(S),{padding:20,animate:!1}),s.addSource(l,{type:"geojson",data:S,generateId:!0}),s.addLayer({id:a,source:l,type:"fill",paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":["case",["boolean",["feature-state","hover"],!1],.8,.4]}}),s.on("mousemove",a,i=>{i.features.length>0&&(_(),A=i.features[0].id,s.setFeatureState({source:l,id:A},{hover:!0}))}),s.on("mouseleave",a,()=>{_(),A=null}),s.on("click",a,function(i){let c=i.features[0].properties.name;window.location.href=`scheme.html?authority=${c}`})})});function y(l){try{let a=JSON.parse(l);if(!a.authority)throw new Error("File doesn't have an authority set; is it an ATIP file?");if(!k.has(a.authority))throw new Error(`Unknown authority ${a.authority}`);let I=a.authority,b=ut(a);b!="v1"&&(I+=`_${b}`),window.localStorage.setItem(I,JSON.stringify(a)),window.location.href=`scheme.html?authority=${a.authority}&schema=${b}`}catch(a){window.alert(`Couldn't load scheme from a file: ${a}`)}}function f(){window.location.href=`scheme.html?authority=${g}`}const F=()=>r(1,u=!u);function C(){g=this.value,r(0,g)}function E(l){z[l?"unshift":"push"](()=>{w=l,r(2,w)})}function d(l){u=l,r(1,u)}return n.$$.update=()=>{n.$$.dirty&1&&r(3,q=k.has(g))},[g,u,w,q,y,f,F,C,E,d]}class ft extends K{constructor(e){super(),Q(this,e,pt,rt,X,{})}}new ft({target:document.getElementById("app")});
