import{aa as N,e as _,t as M,b0 as E}from"./index-a714413e.js";function R(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function U(e,t){_(e,1,1,()=>{t.delete(e.key)})}function G(e,t,n,o,l,s,a,A,k,C,w,J){let h=e.length,f=s.length,u=h;const m={};for(;u--;)m[e[u].key]=u;const d=[],p=new Map,y=new Map,O=[];for(u=f;u--;){const i=J(l,s,u),r=n(i);let c=a.get(r);c?o&&O.push(()=>c.p(i,t)):(c=C(r,i),c.c()),p.set(r,d[u]=c),r in m&&y.set(r,Math.abs(u-m[r]))}const b=new Set,v=new Set;function S(i){M(i,1),i.m(A,w),a.set(i.key,i),w=i.first,f--}for(;h&&f;){const i=d[f-1],r=e[h-1],c=i.key,g=r.key;i===r?(w=i.first,h--,f--):p.has(g)?!a.has(c)||b.has(c)?S(i):v.has(g)?h--:y.get(c)>y.get(g)?(v.add(c),S(i)):(b.add(g),h--):(k(r,a),h--)}for(;h--;){const i=e[h];p.has(i.key)||k(i,a)}for(;f;)S(d[f-1]);return N(O),d}function $(e,t){return`sketch/${e}/${t}`}function I(e,t){try{window.localStorage.setItem(e,t)}catch(n){console.log(`Couldn't set local storage for ${e}: ${n}`),window.alert("Your changes couldn't be saved because you've run out of local storage. Please fix this problem on the next page and try again."),window.location.href="local_storage.html"}}function K(e,t,n){return`scheme.html?authority=${e}&schema=${n}&file=${t}`}function Y(e){let t=`sketch/${e}/`,n=[];for(let o=0;o<window.localStorage.length;o++){let l=window.localStorage.key(o);if(l.startsWith(t)){let s="v1";try{s=x(JSON.parse(window.localStorage.getItem(l)))}catch{}n.push([l.slice(t.length),s])}}return n.sort(),n}function q(){let e=new Map;for(let n=0;n<window.localStorage.length;n++){let l=window.localStorage.key(n).split("/");if(l.length==3&&l[0]=="sketch"){let s=l[1],a=e.has(s)?e.get(s):0;e.set(s,a+1)}}let t=[...e.entries()];return t.sort((n,o)=>o[1]-n[1]),t}function P(e,t){let n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),document.body.appendChild(n),n.click(),document.body.removeChild(n)}function B(e){let t=[];for(let n=0;n<window.localStorage.length;n++){let o=window.localStorage.key(n);o==e?t.push([o,$(e,"v1 sketch")]):o==`${e}_pipeline`&&t.push([o,$(e,"pipeline sketch")])}for(let[n,o]of t){console.log(`Renaming ${n} to ${o}`);try{let l=window.localStorage.getItem(n);I(o,l),window.localStorage.removeItem(n)}catch(l){console.error(`Couldn't importOldFiles: ${l}`)}}}function j(e,t){var o;let n=JSON.parse(JSON.stringify(t));for(let l of n.features)(o=l.properties)==null||delete o.hide_while_editing;return n.authority=e,n.origin="atip-v2",n}function D(e,t,n){let o=j(e,n);P(`${e}_${t}.geojson`,JSON.stringify(o,null,"  "))}function x(e){try{let t=Object.values(e.schemes)[0];if(t&&Object.hasOwn(t,"pipeline"))return"pipeline";if(t&&Object.hasOwn(t,"v2"))return"v2"}catch{}return"v1"}function H(e,t,n){let o=JSON.parse(t),l=E(o.features,n);if(!l)throw new Error("Can't figure out the authority boundary that fully contains this scheme");o.authority=l;let s=x(o),a=W(o.authority,e);return I($(o.authority,a),JSON.stringify(j(o.authority,o))),K(o.authority,a,s)}function Q(){let e=[];for(let t=0;t<window.localStorage.length;t++){let n=window.localStorage.key(t);e.push([n,window.localStorage.getItem(n).length])}return e.sort((t,n)=>n[1]-t[1]),e}function W(e,t){let n=F(F(t,".json"),".geojson");return z(n,`${e}_`)}function z(e,t){return e.startsWith(t)?e.slice(t.length):e}function F(e,t){return e.endsWith(t)?e.slice(0,-t.length):e}export{H as a,j as b,q as c,P as d,R as e,K as f,$ as g,D as h,B as i,Y as l,Q as m,U as o,I as s,G as u};
