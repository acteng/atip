import{S as $e,i as me,s as de,L as ge,a as ce,E as re,F as he,R as _e,b as Q,c as oe,M as be,e as A,d as g,f as ve,g as c,h as S,j as M,k as i,m as h,l as le,t as _,n as b,o as E,p as v,q as we,r as ye,u as N,v as ie,w as Ae,G as Se,x as ke,y as Ce,z as Fe,A as Le,B as Me,C as Ee,D as ue}from"./index-c1f146c5.js";import{D as je}from"./DefaultButton-89f00248.js";import{A as Be}from"./About-3f618fe7.js";import{F as Ie,a as Ne}from"./Popup-51af25e1.js";import{P as De}from"./Popup-f7910fce.js";function Oe(a){let t;return{c(){t=N("About")},m(e,n){M(e,t,n)},d(e){e&&E(t)}}}function Te(a){let t,e,n,o,s;return{c(){t=A("input"),e=g(),n=A("datalist"),S(t,"class","govuk-input govuk-input--width-20"),S(t,"id","inputValue"),S(t,"data-testid","transport-authority"),S(t,"list","authorities-list"),S(n,"id","authorities-list")},m(l,u){M(l,t,u),ie(t,a[0]),M(l,e,u),M(l,n,u),a[13](n),o||(s=Ae(t,"input",a[12]),o=!0)},p(l,u){u&1&&t.value!==l[0]&&ie(t,l[0])},d(l){l&&(E(t),E(e),E(n)),a[13](null),o=!1,s()}}}function Ge(a){let t;return{c(){t=N("Start")},m(e,n){M(e,t,n)},d(e){e&&E(t)}}}function Je(a){let t,e=a[19].name+"",n,o,s=a[19].level+"",l,u;return{c(){t=A("p"),n=N(e),o=N(" ("),l=N(s),u=N(")")},m(m,p){M(m,t,p),i(t,n),i(t,o),i(t,l),i(t,u)},p(m,p){p&524288&&e!==(e=m[19].name+"")&&ue(n,e),p&524288&&s!==(s=m[19].level+"")&&ue(l,s)},d(m){m&&E(t)}}}function Pe(a){let t,e;return t=new De({props:{$$slots:{default:[Je,({props:n})=>({19:n}),({props:n})=>n?524288:0]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const s={};o&1572864&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function Ve(a){let t,e,n,o;return t=new Ne({props:{id:"boundaries",filter:["==",["get","level"],a[1]],paint:{"fill-color":"rgb(200, 100, 240)","fill-outline-color":"rgb(200, 100, 240)","fill-opacity":Le(0,.5)},manageHoverState:!0,hoverCursor:"pointer",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),t.$on("click",a[8]),n=new Me({props:{id:"boundaries-outline",filter:["==",["get","level"],a[1]],paint:{"line-color":"rgb(200, 100, 240)","line-width":2.5},manageHoverState:!0}}),{c(){c(t.$$.fragment),e=g(),c(n.$$.fragment)},m(s,l){h(t,s,l),M(s,e,l),h(n,s,l),o=!0},p(s,l){const u={};l&2&&(u.filter=["==",["get","level"],s[1]]),l&1048576&&(u.$$scope={dirty:l,ctx:s}),t.$set(u);const m={};l&2&&(m.filter=["==",["get","level"],s[1]]),n.$set(m)},i(s){o||(_(t.$$.fragment,s),_(n.$$.fragment,s),o=!0)},o(s){b(t.$$.fragment,s),b(n.$$.fragment,s),o=!1},d(s){s&&E(e),v(t,s),v(n,s)}}}function Re(a){let t,e;return t=new Se({props:{data:a[2],generateId:!0,$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},m(n,o){h(t,n,o),e=!0},p(n,o){const s={};o&4&&(s.data=n[2]),o&1048578&&(s.$$scope={dirty:o,ctx:n}),t.$set(s)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){v(t,n)}}}function qe(a){let t,e,n,o,s,l,u,m,p,j,y,D,w,J,k,P,V,R,C,O,q,f,d,L,T,F,X,H,G,I,U,B,W,z;u=new ge({}),p=new ce({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),p.$on("click",a[11]),y=new re({props:{errorMessage:a[4]}}),w=new he({props:{label:"Select Transport Authority or Local Authority District",id:"inputValue",$$slots:{default:[Te]},$$scope:{ctx:a}}}),k=new je({props:{disabled:!a[6],$$slots:{default:[Ge]},$$scope:{ctx:a}}}),k.$on("click",a[9]);function fe(r){a[14](r)}let Y={legend:"Or pick from the map",id:"showBoundaries",choices:[["TA","Transport Authorities"],["LAD","Local Authority Districts"]],inlineSmall:!0};a[1]!==void 0&&(Y.value=a[1]),C=new _e({props:Y}),Q.push(()=>oe(C,"value",fe)),L=new re({props:{errorMessage:He}}),F=new Ie({props:{label:"Or upload an ATIP GeoJSON file",loadFile:a[7],id:"load-geojson"}}),I=new be({props:{style:"streets",startBounds:[-5.96,49.89,2.31,55.94],$$slots:{default:[Re]},$$scope:{ctx:a}}});function pe(r){a[15](r)}let Z={};return a[3]!==void 0&&(Z.open=a[3]),B=new Be({props:Z}),Q.push(()=>oe(B,"open",pe)),{c(){t=A("div"),e=A("div"),n=A("h1"),n.textContent="Welcome to ATIP Scheme Sketcher v2",o=g(),s=A("p"),s.textContent=`App version: ${ve()}`,l=g(),c(u.$$.fragment),m=g(),c(p.$$.fragment),j=g(),c(y.$$.fragment),D=g(),c(w.$$.fragment),J=g(),c(k.$$.fragment),P=g(),V=A("hr"),R=g(),c(C.$$.fragment),q=g(),f=A("hr"),d=g(),c(L.$$.fragment),T=g(),c(F.$$.fragment),X=g(),H=A("div"),G=A("div"),c(I.$$.fragment),U=g(),c(B.$$.fragment),S(n,"class","govuk-heading-l"),S(e,"class","govuk-grid-column-one-half left svelte-lyn11h"),S(G,"id","map"),S(G,"class","svelte-lyn11h"),S(H,"class","govuk-grid-column-one-half"),S(t,"class","govuk-grid-row")},m(r,$){M(r,t,$),i(t,e),i(e,n),i(e,o),i(e,s),i(e,l),h(u,e,null),i(e,m),h(p,e,null),i(e,j),h(y,e,null),i(e,D),h(w,e,null),i(e,J),h(k,e,null),i(e,P),i(e,V),i(e,R),h(C,e,null),i(e,q),i(e,f),i(e,d),h(L,e,null),i(e,T),h(F,e,null),i(t,X),i(t,H),i(H,G),h(I,G,null),M(r,U,$),h(B,r,$),z=!0},p(r,[$]){const x={};$&1048576&&(x.$$scope={dirty:$,ctx:r}),p.$set(x);const ee={};$&16&&(ee.errorMessage=r[4]),y.$set(ee);const te={};$&1048609&&(te.$$scope={dirty:$,ctx:r}),w.$set(te);const K={};$&64&&(K.disabled=!r[6]),$&1048576&&(K.$$scope={dirty:$,ctx:r}),k.$set(K);const ne={};!O&&$&2&&(O=!0,ne.value=r[1],le(()=>O=!1)),C.$set(ne);const ae={};$&1048582&&(ae.$$scope={dirty:$,ctx:r}),I.$set(ae);const se={};!W&&$&8&&(W=!0,se.open=r[3],le(()=>W=!1)),B.$set(se)},i(r){z||(_(u.$$.fragment,r),_(p.$$.fragment,r),_(y.$$.fragment,r),_(w.$$.fragment,r),_(k.$$.fragment,r),_(C.$$.fragment,r),_(L.$$.fragment,r),_(F.$$.fragment,r),_(I.$$.fragment,r),_(B.$$.fragment,r),z=!0)},o(r){b(u.$$.fragment,r),b(p.$$.fragment,r),b(y.$$.fragment,r),b(w.$$.fragment,r),b(k.$$.fragment,r),b(C.$$.fragment,r),b(L.$$.fragment,r),b(F.$$.fragment,r),b(I.$$.fragment,r),b(B.$$.fragment,r),z=!1},d(r){r&&(E(t),E(U)),v(u),v(p),v(y),v(w),v(k),v(C),v(L),v(F),v(I),v(B,r)}}}let He="";function ze(a){if(a.features.length>0){let t=a.features[0].properties;for(let e of["planning","v2","atf4"])if(t&&e in t)return e}return"v1"}function Ue(a,t,e){let n,o;we(a,Ee,f=>e(10,o=f));let s={type:"FeatureCollection",features:[]},l=!1;const u=new URLSearchParams(window.location.search);let m=u.get("schema")||"v1",p=u.get("error")||"",j,y,D=new Set,w="TA";ye(async()=>{ke(),e(2,s=await Ce());for(let f of s.features){let d=document.createElement("option");d.value=f.properties.full_name,d.label=`${f.properties.name} (${f.properties.level})`,y.appendChild(d),D.add(f.properties.full_name)}});function J(f){try{let d=JSON.parse(f),L=Fe(d.features,s);if(!L)throw new Error("Can't figure out the authority boundary that fully contains this scheme");d.authority=L;let T=d.authority,F=ze(d);F!="v1"&&(T+=`_${F}`),window.localStorage.setItem(T,JSON.stringify(d)),window.location.href=`scheme.html?authority=${d.authority}&schema=${F}`}catch(d){e(4,p=`Couldn't load scheme from a file: ${d}`)}}function k(f){window.location.href=`scheme.html?authority=${f.detail.features[0].properties.full_name}&schema=${m}`}function P(){window.location.href=`scheme.html?authority=${j}&schema=${m}`}const V=()=>e(3,l=!l);function R(){j=this.value,e(0,j)}function C(f){Q[f?"unshift":"push"](()=>{y=f,e(5,y)})}function O(f){w=f,e(1,w)}function q(f){l=f,e(3,l)}return a.$$.update=()=>{a.$$.dirty&1&&e(6,n=D.has(j)),a.$$.dirty&1026&&(o==null||o.setFilter("boundaries",["==",["get","level"],w])),a.$$.dirty&1026&&(o==null||o.setFilter("boundaries-outline",["==",["get","level"],w]))},[j,w,s,l,p,y,n,J,k,P,o,V,R,C,O,q]}class We extends $e{constructor(t){super(),me(this,t,Ue,qe,de,{})}}document.body.className=document.body.className?document.body.className+" js-enabled":"js-enabled";new We({target:document.getElementById("app")});
