function r(l,t){return`sketch/${l}/${t}`}function p(l){let t=`sketch/${l}/`,e=[];for(let o=0;o<window.localStorage.length;o++){let n=window.localStorage.key(o);if(n.startsWith(t)){let i="v1";try{i=c(JSON.parse(window.localStorage.getItem(n)))}catch{}e.push([n.slice(t.length),i])}}return e.sort(),e}function a(l,t){let e=document.createElement("a");e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),e.setAttribute("download",l),document.body.appendChild(e),e.click(),document.body.removeChild(e)}function f(l){let t=[];for(let e=0;e<window.localStorage.length;e++){let o=window.localStorage.key(e);o==l?t.push([o,r(l,"old v1 sketch")]):o==`${l}_pipeline`&&t.push([o,r(l,"old pipeline sketch")])}for(let[e,o]of t){console.log(`Renaming ${e} to ${o}`);let n=window.localStorage.getItem(e);window.localStorage.setItem(o,n),window.localStorage.removeItem(e)}}function s(l,t){let e=JSON.parse(JSON.stringify(t));for(let o of e.features)delete o.properties.hide_while_editing;return e.authority=l,e.origin="atip-v2",e}function h(l,t,e){let o=s(l,e);a(`${l}_${t}.geojson`,JSON.stringify(o,null,"  "))}function c(l){try{let t=Object.values(l.schemes)[0];if(t&&Object.hasOwn(t,"pipeline"))return"pipeline"}catch{}return"v1"}export{a,c as d,h as e,r as g,f as i,p as l,s};
