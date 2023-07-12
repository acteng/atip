import{S as Ve,i as We,s as Xe,d as K,m as R,n as O,o as z,q as U,z as Ne,M as Ye,F as xe,e as p,c as v,t as h,f as le,j as W,ah as Me,g as T,h as o,ai as me,l as te,ad as P,a5 as Ke,a6 as Re,p as D,af as ye,r as Ue,w as Ae,ag as Je,K as et,L as tt}from"./maplibre_helpers-549cabd3.js";import{L as lt,Z as rt,e as se,t as nt,g as he,I as ot,B as st,v as at,M as it,m as ut,C as ft}from"./ZoomOutMap-6dd22b7d.js";function qe(n,e,t){const l=n.slice();return l[23]=e[t],l}function Ge(n,e,t){const l=n.slice();return l[26]=e[t],l}function Pe(n,e,t){const l=n.slice();return l[26]=e[t],l}function Te(n){let e,t=n[26]+"",l,r;return{c(){e=p("option"),l=h(t),e.__value=r=n[26],W(e,e.__value)},m(a,_){T(a,e,_),o(e,l)},p(a,_){_[0]&128&&t!==(t=a[26]+"")&&P(l,t),_[0]&128&&r!==(r=a[26])&&(e.__value=r,W(e,e.__value))},d(a){a&&D(e)}}}function De(n){let e,t=n[26]+"",l,r;return{c(){e=p("option"),l=h(t),e.__value=r=n[26],W(e,e.__value)},m(a,_){T(a,e,_),o(e,l)},p(a,_){_[0]&256&&t!==(t=a[26]+"")&&P(l,t),_[0]&256&&r!==(r=a[26])&&(e.__value=r,W(e,e.__value))},d(a){a&&D(e)}}}function Ee(n){let e,t;return e=new ft({props:{label:`${n[23].scheme_reference}: ${n[23].num_features} features`,$$slots:{default:[_t]},$$scope:{ctx:n}}}),{c(){K(e.$$.fragment)},m(l,r){R(e,l,r),t=!0},p(l,r){const a={};r[0]&1&&(a.label=`${l[23].scheme_reference}: ${l[23].num_features} features`),r[0]&1|r[1]&1&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function _t(n){let e,t,l,r=n[23].authority_or_region+"",a,_,b,g,u=n[23].capital_scheme_id+"",$,A,C,J,y=n[23].funding_programme+"",q,X,k,j,Y,E,N,Q,F,G;function re(){return n[18](n[23])}function f(){return n[19](n[23])}return{c(){e=p("ul"),t=p("li"),l=h("Authority or region: "),a=h(r),_=v(),b=p("li"),g=h("Capital scheme ID: "),$=h(u),A=v(),C=p("li"),J=h("Funding programme: "),q=h(y),X=v(),k=p("li"),j=p("button"),j.textContent="Show on map",Y=v(),E=p("li"),N=p("button"),N.textContent="Edit scheme",Q=v(),le(j,"type","button"),le(N,"type","button")},m(c,S){T(c,e,S),o(e,t),o(t,l),o(t,a),o(e,_),o(e,b),o(b,g),o(b,$),o(e,A),o(e,C),o(C,J),o(C,q),o(e,X),o(e,k),o(k,j),o(e,Y),o(e,E),o(E,N),T(c,Q,S),F||(G=[te(j,"click",re),te(N,"click",f)],F=!0)},p(c,S){n=c,S[0]&1&&r!==(r=n[23].authority_or_region+"")&&P(a,r),S[0]&1&&u!==(u=n[23].capital_scheme_id+"")&&P($,u),S[0]&1&&y!==(y=n[23].funding_programme+"")&&P(q,y)},d(c){c&&(D(e),D(Q)),F=!1,Ue(G)}}}function Ze(n){let e=n[2].has(n[23].scheme_reference),t,l,r=e&&Ee(n);return{c(){r&&r.c(),t=et()},m(a,_){r&&r.m(a,_),T(a,t,_),l=!0},p(a,_){_[0]&5&&(e=a[2].has(a[23].scheme_reference)),e?r?(r.p(a,_),_[0]&5&&O(r,1)):(r=Ee(a),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(Ke(),z(r,1,1,()=>{r=null}),Re())},i(a){l||(O(r),l=!0)},o(a){z(r),l=!1},d(a){a&&D(t),r&&r.d(a)}}}function ct(n){let e,t,l,r,a,_,b,g,u,$,A,C,J,y,q,X,k,j,Y,E,N,Q,F,G,re,f,c,S,x,M,Z,ke,ae,Se,I,Ce,ie=n[2].size+"",ge,Fe,ue=n[3].route+"",de,Le,fe=n[3].area+"",be,Be,_e=n[3].crossing+"",$e,Oe,ce=n[3].other+"",ve,je,Ie,pe,H,we,ze;_=new rt({props:{boundaryGeojson:n[6]}}),g=new xe({props:{label:"Load from GeoJSON",uniqueId:"load_geojson",loadFile:n[10]}});let ne=se(n[7]),L=[];for(let s=0;s<ne.length;s+=1)L[s]=Te(Pe(n,ne,s));let oe=se(n[8]),B=[];for(let s=0;s<oe.length;s+=1)B[s]=De(Ge(n,oe,s));let ee=se(n[0]),d=[];for(let s=0;s<ee.length;s+=1)d[s]=Ze(qe(n,ee,s));const Qe=s=>z(d[s],1,1,()=>{d[s]=null});return{c(){e=p("div"),t=p("button"),t.textContent="Home",l=v(),r=p("h1"),a=h(`Browse schemes
      `),K(_.$$.fragment),b=v(),K(g.$$.fragment),u=v(),$=p("br"),A=v(),C=p("br"),J=v(),y=p("div"),q=p("label"),X=h(`Filter by authority or region:
        `),k=p("select"),j=p("option");for(let s=0;s<L.length;s+=1)L[s].c();Y=v(),E=p("div"),N=p("label"),Q=h(`Filter by funding programme:
        `),F=p("select"),G=p("option");for(let s=0;s<B.length;s+=1)B[s].c();re=v(),f=p("div"),c=p("label"),S=h("Filter by any field: "),x=p("br"),M=v(),Z=p("input"),ke=v(),ae=p("button"),ae.textContent="Clear",Se=v(),I=p("p"),Ce=h("Showing "),ge=h(ie),Fe=h(" schemes ("),de=h(ue),Le=h(" routes, "),be=h(fe),Be=h(` areas,
      `),$e=h(_e),Oe=h(" crossings, "),ve=h(ce),je=h(" other)"),Ie=v(),pe=p("ul");for(let s=0;s<d.length;s+=1)d[s].c();le(t,"type","button"),j.__value="",W(j,j.__value),n[4]===void 0&&Me(()=>n[14].call(k)),G.__value="",W(G,G.__value),n[5]===void 0&&Me(()=>n[15].call(F)),le(Z,"type","text"),le(ae,"type","button"),le(e,"slot","sidebar")},m(s,m){T(s,e,m),o(e,t),o(e,l),o(e,r),o(r,a),R(_,r,null),o(e,b),R(g,e,null),o(e,u),o(e,$),o(e,A),o(e,C),o(e,J),o(e,y),o(y,q),o(q,X),o(q,k),o(k,j);for(let w=0;w<L.length;w+=1)L[w]&&L[w].m(k,null);me(k,n[4],!0),o(e,Y),o(e,E),o(E,N),o(N,Q),o(N,F),o(F,G);for(let w=0;w<B.length;w+=1)B[w]&&B[w].m(F,null);me(F,n[5],!0),o(e,re),o(e,f),o(f,c),o(c,S),o(c,x),o(c,M),o(c,Z),W(Z,n[1]),o(f,ke),o(f,ae),o(e,Se),o(e,I),o(I,Ce),o(I,ge),o(I,Fe),o(I,de),o(I,Le),o(I,be),o(I,Be),o(I,$e),o(I,Oe),o(I,ve),o(I,je),o(e,Ie),o(e,pe);for(let w=0;w<d.length;w+=1)d[w]&&d[w].m(pe,null);H=!0,we||(ze=[te(t,"click",n[13]),te(k,"change",n[14]),te(F,"change",n[15]),te(Z,"input",n[16]),te(ae,"click",n[17])],we=!0)},p(s,m){const w={};if(m[0]&64&&(w.boundaryGeojson=s[6]),_.$set(w),m[0]&128){ne=se(s[7]);let i;for(i=0;i<ne.length;i+=1){const V=Pe(s,ne,i);L[i]?L[i].p(V,m):(L[i]=Te(V),L[i].c(),L[i].m(k,null))}for(;i<L.length;i+=1)L[i].d(1);L.length=ne.length}if(m[0]&144&&me(k,s[4]),m[0]&256){oe=se(s[8]);let i;for(i=0;i<oe.length;i+=1){const V=Ge(s,oe,i);B[i]?B[i].p(V,m):(B[i]=De(V),B[i].c(),B[i].m(F,null))}for(;i<B.length;i+=1)B[i].d(1);B.length=oe.length}if(m[0]&288&&me(F,s[5]),m[0]&2&&Z.value!==s[1]&&W(Z,s[1]),(!H||m[0]&4)&&ie!==(ie=s[2].size+"")&&P(ge,ie),(!H||m[0]&8)&&ue!==(ue=s[3].route+"")&&P(de,ue),(!H||m[0]&8)&&fe!==(fe=s[3].area+"")&&P(be,fe),(!H||m[0]&8)&&_e!==(_e=s[3].crossing+"")&&P($e,_e),(!H||m[0]&8)&&ce!==(ce=s[3].other+"")&&P(ve,ce),m[0]&6149){ee=se(s[0]);let i;for(i=0;i<ee.length;i+=1){const V=qe(s,ee,i);d[i]?(d[i].p(V,m),O(d[i],1)):(d[i]=Ze(V),d[i].c(),O(d[i],1),d[i].m(pe,null))}for(Ke(),i=ee.length;i<d.length;i+=1)Qe(i);Re()}},i(s){if(!H){O(_.$$.fragment,s),O(g.$$.fragment,s);for(let m=0;m<ee.length;m+=1)O(d[m]);H=!0}},o(s){z(_.$$.fragment,s),z(g.$$.fragment,s),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)z(d[m]);H=!1},d(s){s&&D(e),U(_),U(g),ye(L,s),ye(B,s),ye(d,s),we=!1,Ue(ze)}}}function pt(n){let e,t,l,r,a,_,b,g;return e=new ot({props:{schema:He}}),l=new st({props:{style:n[9]}}),a=new at({props:{schema:He}}),b=new it({props:{layers:["interventions-points","interventions-lines","interventions-polygons"],contents:gt}}),{c(){K(e.$$.fragment),t=v(),K(l.$$.fragment),r=v(),K(a.$$.fragment),_=v(),K(b.$$.fragment)},m(u,$){R(e,u,$),T(u,t,$),R(l,u,$),T(u,r,$),R(a,u,$),T(u,_,$),R(b,u,$),g=!0},p:tt,i(u){g||(O(e.$$.fragment,u),O(l.$$.fragment,u),O(a.$$.fragment,u),O(b.$$.fragment,u),g=!0)},o(u){z(e.$$.fragment,u),z(l.$$.fragment,u),z(a.$$.fragment,u),z(b.$$.fragment,u),g=!1},d(u){u&&(D(t),D(r),D(_)),U(e,u),U(l,u),U(a,u),U(b,u)}}}function mt(n){let e,t,l;return t=new nt({props:{style:n[9],$$slots:{default:[pt]},$$scope:{ctx:n}}}),{c(){e=p("div"),K(t.$$.fragment),le(e,"slot","main")},m(r,a){T(r,e,a),R(t,e,null),l=!0},p(r,a){const _={};a[1]&1&&(_.$$scope={dirty:a,ctx:r}),t.$set(_)},i(r){l||(O(t.$$.fragment,r),l=!0)},o(r){z(t.$$.fragment,r),l=!1},d(r){r&&D(e),U(t)}}}function ht(n){let e,t;return e=new lt({props:{$$slots:{main:[mt],sidebar:[ct]},$$scope:{ctx:n}}}),{c(){K(e.$$.fragment)},m(l,r){R(e,l,r),t=!0},p(l,r){const a={};r[0]&511|r[1]&1&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(O(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}const He="v1";function gt(n){var e="<table>";for(let[t,l]of Object.entries(n))e+=`<tr><td>${t}</td><td>${l}</td></tr>`;return e+="</table>",e}function dt(n,e,t){let l,r;Ne(n,he,f=>t(6,l=f)),Ne(n,ut,f=>t(20,r=f));let _=new URLSearchParams(window.location.search).get("style")||"streets",b=[],g="",u=new Set,$={area:0,route:0,crossing:0,other:0},A=[],C="",J=[],y="";Ye(()=>{he.set(null)});function q(f){try{let c=JSON.parse(f);he.set(c),X(c),r==null||r.fitBounds(Ae(c),{padding:20,animate:!1})}catch(c){window.alert(`Couldn't load schemes from a file: ${c}`)}}function X(f){let c={};for(let[M,Z]of Object.entries(f.schemes))c[M]={scheme_reference:M,num_features:0,...Z};for(let M of f.features)c[M.properties.scheme_reference].num_features++;t(0,b=Object.values(c));let S=new Set,x=new Set;for(let M of b)M.authority_or_region&&S.add(M.authority_or_region),M.funding_programme&&x.add(M.funding_programme);t(7,A=Array.from(S)),A.sort(),t(8,J=Array.from(x)),J.sort()}function k(f){let c={type:"FeatureCollection",features:l.features.filter(S=>S.properties.scheme_reference==f.scheme_reference)};r==null||r.fitBounds(Ae(c),{padding:20,animate:!1})}function j(f){let c={type:"FeatureCollection",features:l.features.filter(x=>x.properties.scheme_reference==f.scheme_reference)},S=f.authority_or_region;window.localStorage.setItem(S,JSON.stringify(c)),window.open(`scheme.html?authority=${f.authority_or_region}`,"_blank")}const Y=()=>window.open("index.html");function E(){C=Je(this),t(4,C),t(7,A)}function N(){y=Je(this),t(5,y),t(8,J)}function Q(){g=this.value,t(1,g)}const F=()=>t(1,g=""),G=f=>k(f),re=f=>j(f);return n.$$.update=()=>{if(n.$$.dirty[0]&127&&l){if(u.clear(),g||C||y){let f=g.toLowerCase();for(let c of l.features)JSON.stringify(c.properties).toLowerCase().includes(f)&&(C&&c.properties.authority_or_region!=C||y&&c.properties.funding_programme!=y||u.add(c.properties.scheme_reference))}else for(let f of b)u.add(f.scheme_reference);he.update(f=>{if(!f)return null;for(let c of f.features)u.has(c.properties.scheme_reference)?delete c.properties.hide_while_editing:c.properties.hide_while_editing=!0;return f}),t(3,$={area:0,route:0,crossing:0,other:0});for(let f of l==null?void 0:l.features)u.has(f.properties.scheme_reference)&&t(3,$[f.properties.intervention_type]++,$);t(2,u),t(6,l),t(1,g),t(4,C),t(5,y),t(0,b),t(3,$)}},[b,g,u,$,C,y,l,A,J,_,q,k,j,Y,E,N,Q,F,G,re]}class bt extends Ve{constructor(e){super(),We(this,e,dt,ht,Xe,{},null,[-1,-1])}}new bt({target:document.getElementById("app")});