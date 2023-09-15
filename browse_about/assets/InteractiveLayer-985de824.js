import{S as k,i as w,s as M,F as I,f as E,m as H,t as S,l as T,p as q,e as D,g as b,h as O,v as A,o as B,b as G,O as _,B as P,aU as R,G as U,A as W,q as j,a6 as z}from"./index-36214108.js";function J(a){let e,i,t;return{c(){e=D("input"),e.disabled=a[2],b(e,"class","govuk-file-upload"),b(e,"id",a[1]),b(e,"type","file")},m(l,r){O(l,e,r),a[6](e),i||(t=A(e,"change",a[4]),i=!0)},p(l,r){r&4&&(e.disabled=l[2]),r&2&&b(e,"id",l[1])},d(l){l&&B(e),a[6](null),i=!1,t()}}}function K(a){let e,i;return e=new I({props:{label:a[0],id:a[1],$$slots:{default:[J]},$$scope:{ctx:a}}}),{c(){E(e.$$.fragment)},m(t,l){H(e,t,l),i=!0},p(t,[l]){const r={};l&1&&(r.label=t[0]),l&2&&(r.id=t[1]),l&142&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){i||(S(e.$$.fragment,t),i=!0)},o(t){T(e.$$.fragment,t),i=!1},d(t){q(e,t)}}}function N(a,e,i){let{label:t}=e,{id:l}=e,{loadFile:r}=e,{disabled:s=!1}=e,f;function d(o){let u=new FileReader;u.onload=h=>{r(h.target.result)};let m=f.files;u.readAsText(m[0])}function g(o){G[o?"unshift":"push"](()=>{f=o,i(3,f)})}return a.$$set=o=>{"label"in o&&i(0,t=o.label),"id"in o&&i(1,l=o.id),"loadFile"in o&&i(5,r=o.loadFile),"disabled"in o&&i(2,s=o.disabled)},[t,l,s,f,d,r,g]}class X extends k{constructor(e){super(),w(this,e,N,K,M,{label:0,id:1,loadFile:5,disabled:2})}}function Q(a,e,i){let t,l;_(a,P,n=>i(6,t=n)),_(a,R,n=>i(7,l=n));const r=U();let{layer:s}=e,{clickable:f}=e,{tooltip:d=null}=e,{show:g=!0}=e,{ignoreHigherLayers:o=[]}=e,{hoveredFeature:u=null}=e,m=new W.Popup({closeButton:!1,closeOnClick:!1,maxWidth:"none"});j(()=>{t.on("mousemove",s,h),t.on("mouseleave",s,y),f&&t.on("click",s,v)}),z(()=>{t.off("mousemove",s,h),t.off("mouseleave",s,y),f&&t.off("click",s,v),L(),m.remove()});function h(n){if(!l)return;let c=n.features??[];if(c.length!=0){if(c[0].id||console.log(`Features in the ${s} layer don't have IDs; InteractiveLayer won't work`),F(n)){y();return}if((u==null?void 0:u.id)!=c[0].id){if(L(),i(0,u=c[0]),t.setFeatureState(u,{hover:!0}),d){let C=`<div class="govuk-prose">${d(u)}</div>`;m.setLngLat(n.lngLat).setHTML(C).addTo(t)}f&&(t.getCanvas().style.cursor="pointer")}else d&&m.setLngLat(n.lngLat)}}function y(){l&&(L(),i(0,u=null),m.remove(),f&&(t.getCanvas().style.cursor="inherit"))}function L(){u&&t.setFeatureState(u,{hover:!1})}function v(n){if(!l)return;let c=n.features??[];if(c.length>0){if(F(n))return;r("click",c[0])}}function F(n){for(let c of t.queryRenderedFeatures(n.point)){if(c.layer.id==s)return!1;if(!o.includes(c.layer.id))return!0}return!1}return a.$$set=n=>{"layer"in n&&i(1,s=n.layer),"clickable"in n&&i(2,f=n.clickable),"tooltip"in n&&i(3,d=n.tooltip),"show"in n&&i(4,g=n.show),"ignoreHigherLayers"in n&&i(5,o=n.ignoreHigherLayers),"hoveredFeature"in n&&i(0,u=n.hoveredFeature)},a.$$.update=()=>{a.$$.dirty&82&&t.getLayer(s)&&t.setLayoutProperty(s,"visibility",g?"visible":"none")},[u,s,f,d,g,o,t]}class Y extends k{constructor(e){super(),w(this,e,Q,null,M,{layer:1,clickable:2,tooltip:3,show:4,ignoreHigherLayers:5,hoveredFeature:0})}}export{X as F,Y as I};
