import{S as U,i as x,s as G,F as Fe,g as ke,m as Le,t as v,n as L,p as Se,e as Me,h as Y,j as O,w as Ze,o as W,b as Ce,$ as p,ar as $,as as ee,aV as re,ba as He,bb as Ne,q as w,a2 as Te,aX as Q,aZ as ne,D as ze,aK as ue,aL as fe,aM as ae,aN as se,c as we,l as De,a$ as E,aW as Pe,aY as Ae}from"./index-9eaa0064.js";function Re(i){let t,o,e;return{c(){t=Me("input"),t.disabled=i[2],Y(t,"class","govuk-file-upload"),Y(t,"id",i[1]),Y(t,"type","file")},m(l,n){O(l,t,n),i[6](t),o||(e=Ze(t,"change",i[4]),o=!0)},p(l,n){n&4&&(t.disabled=l[2]),n&2&&Y(t,"id",l[1])},d(l){l&&W(t),i[6](null),o=!1,e()}}}function Ve(i){let t,o;return t=new Fe({props:{label:i[0],id:i[1],$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){ke(t.$$.fragment)},m(e,l){Le(t,e,l),o=!0},p(e,[l]){const n={};l&1&&(n.label=e[0]),l&2&&(n.id=e[1]),l&142&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){o||(v(t.$$.fragment,e),o=!0)},o(e){L(t.$$.fragment,e),o=!1},d(e){Se(t,e)}}}function qe(i,t,o){let{label:e}=t,{id:l}=t,{loadFile:n}=t,{disabled:f=!1}=t,c;function d(a){let r=new FileReader;r.onload=C=>{n(C.target.result)};let S=c.files;r.readAsText(S[0])}function b(a){Ce[a?"unshift":"push"](()=>{c=a,o(3,c)})}return i.$$set=a=>{"label"in a&&o(0,e=a.label),"id"in a&&o(1,l=a.id),"loadFile"in a&&o(5,n=a.loadFile),"disabled"in a&&o(2,f=a.disabled)},[e,l,f,c,d,n,b]}class Ue extends U{constructor(t){super(),x(this,t,qe,Ve,G,{label:0,id:1,loadFile:5,disabled:2})}}function he(i){let t;return o=>{if(o)for(let e in o){let l=t==null?void 0:t[e],n=o[e];l!==n&&i(e,n,l)}else if(t)for(let e in t)i(e,void 0,t[e]);t=o}}function Ee(i,...t){let o=[i];for(let e of t)if(e)Array.isArray(e)&&e[0]===i?o.push(...e.slice(1)):o.push(e);else continue;if(o.length!==1)return o.length===2?o[1]:o}function Ge(i){return i===!0?["has","point_count"]:i===!1?["!",["has","point_count"]]:void 0}function xe(i,t){return["case",["boolean",["feature-state","hover"],!1],t,i]}function be(i){let t=i[0],o,e,l=ge(i);return{c(){l.c(),o=p()},m(n,f){l.m(n,f),O(n,o,f),e=!0},p(n,f){f[0]&1&&G(t,t=n[0])?($(),L(l,1,1,ze),ee(),l=ge(n),l.c(),v(l,1),l.m(o.parentNode,o)):l.p(n,f)},i(n){e||(v(l),e=!0)},o(n){L(l),e=!1},d(n){n&&W(o),l.d(n)}}}function ge(i){let t;const o=i[35].default,e=ue(o,i,i[34],null);return{c(){e&&e.c()},m(l,n){e&&e.m(l,n),t=!0},p(l,n){e&&e.p&&(!t||n[1]&8)&&fe(e,o,l,l[34],t?se(o,l[34],n,null):ae(l[34]),null)},i(l){t||(v(e,l),t=!0)},o(l){L(e,l),t=!1},d(l){e&&e.d(l)}}}function je(i){let t,o,e=i[0]&&be(i);return{c(){e&&e.c(),t=p()},m(l,n){e&&e.m(l,n),O(l,t,n),o=!0},p(l,n){l[0]?e?(e.p(l,n),n[0]&1&&v(e,1)):(e=be(l),e.c(),v(e,1),e.m(t.parentNode,t)):e&&($(),L(e,1,1,()=>{e=null}),ee())},i(l){o||(v(e),o=!0)},o(l){L(e),o=!1},d(l){l&&W(t),e&&e.d(l)}}}function Be(i,t,o){let e,l,n,f,c,d,b,a,r,S,C,y,{$$slots:D={},$$scope:z}=t,{id:I=re("layer")}=t,{source:h=void 0}=t,{sourceLayer:k=void 0}=t,{beforeId:m=void 0}=t,{beforeLayerType:F=void 0}=t,{type:j}=t,{paint:P=void 0}=t,{layout:A=void 0}=t,{filter:B=void 0}=t,{applyToClusters:s=void 0}=t,{minzoom:te=void 0}=t,{maxzoom:oe=void 0}=t,{manageHoverState:J=!1}=t,{hovered:R=null}=t,{hoverCursor:V=void 0}=t,{eventsIfTopMost:K=!1}=t;const X=He(),{map:ce,source:de,self:le,minzoom:me,maxzoom:ye,eventTopMost:ie}=Ne();w(i,ce,u=>o(30,r=u)),w(i,de,u=>o(31,S=u)),w(i,le,u=>o(0,a=u)),w(i,me,u=>o(33,y=u)),w(i,ye,u=>o(32,C=u)),Te(()=>{a&&r&&(r==null||r.removeLayer(a))});let T;return i.$$set=u=>{"id"in u&&o(7,I=u.id),"source"in u&&o(8,h=u.source),"sourceLayer"in u&&o(9,k=u.sourceLayer),"beforeId"in u&&o(10,m=u.beforeId),"beforeLayerType"in u&&o(11,F=u.beforeLayerType),"type"in u&&o(12,j=u.type),"paint"in u&&o(13,P=u.paint),"layout"in u&&o(14,A=u.layout),"filter"in u&&o(15,B=u.filter),"applyToClusters"in u&&o(16,s=u.applyToClusters),"minzoom"in u&&o(17,te=u.minzoom),"maxzoom"in u&&o(18,oe=u.maxzoom),"manageHoverState"in u&&o(19,J=u.manageHoverState),"hovered"in u&&o(6,R=u.hovered),"hoverCursor"in u&&o(20,V=u.hoverCursor),"eventsIfTopMost"in u&&o(21,K=u.eventsIfTopMost),"$$scope"in u&&o(34,z=u.$$scope)},i.$$.update=()=>{if(i.$$.dirty[0]&65536&&o(29,e=Ge(s)),i.$$.dirty[0]&536903680&&o(28,l=Ee("all",e,B)),i.$$.dirty[0]&131072|i.$$.dirty[1]&4&&o(24,n=te??y),i.$$.dirty[0]&262144|i.$$.dirty[1]&2&&o(23,f=oe??C),i.$$.dirty[0]&256|i.$$.dirty[1]&1&&o(27,c=h||S),i.$$.dirty[0]&1509457537&&r&&a!==I&&c){let u=function(_){var H,N;if(!a||!r||K&&ie(_)!==a)return;let g=_.features??[],M=(N=(H=g[0])==null?void 0:H.properties)==null?void 0:N.cluster_id,Z={event:_,map:r,clusterId:M,layer:a,source:c,features:g};X(_.type,Z)},q=m;if(!m&&F){let _=r.getStyle().layers,g=typeof F=="function"?F:Z=>Z.type===F,M=_==null?void 0:_.find(g);M&&(q=M.id)}Q(le,a=I,a),r.addLayer(ne({id:a,type:j,source:c,"source-layer":k,filter:l,paint:P,layout:A,minzoom:n,maxzoom:f}),q),r.on("click",a,u),r.on("dblclick",a,u),r.on("contextmenu",a,u),r.on("mouseenter",a,_=>{var H,N;if(!a||!r||K&&ie(_)!==a)return;V&&(r.getCanvas().style.cursor=V);let g=_.features??[];o(6,R=g[0]??null);let M=(N=(H=g[0])==null?void 0:H.properties)==null?void 0:N.cluster_id;X("mouseenter",{event:_,map:r,clusterId:M,layer:a,source:c,features:g})}),r.on("mousemove",a,_=>{var H,N,_e;if(K&&ie(_)!==a){o(6,R=null),J&&T!==void 0&&(r==null||r.setFeatureState({source:c,sourceLayer:k,id:T},{hover:!1}),o(22,T=void 0));return}r.getCanvas().style.cursor=V;let g=_.features??[],M=(N=(H=g[0])==null?void 0:H.properties)==null?void 0:N.cluster_id,Z=(_e=g[0])==null?void 0:_e.id;Z!==T&&(J&&(T!==void 0&&(r==null||r.setFeatureState({source:c,id:T,sourceLayer:k},{hover:!1})),r==null||r.setFeatureState({source:c,id:Z,sourceLayer:k},{hover:!0})),o(22,T=Z),o(6,R=g[0]??null)),X("mousemove",{event:_,map:r,clusterId:M,layer:a,source:c,features:g})}),r.on("mouseleave",a,_=>{if(!(!a||!r)){if(V&&(r.getCanvas().style.cursor=""),o(6,R=null),J&&T!==void 0){const g={source:c,id:T,sourceLayer:k};r==null||r.setFeatureState(g,{hover:!1}),o(22,T=void 0)}X("mouseleave",{map:r,layer:a,source:c})}})}i.$$.dirty[0]&1073741825&&o(26,d=a?he((u,q)=>r==null?void 0:r.setPaintProperty(a,u,q)):void 0),i.$$.dirty[0]&1073741825&&o(25,b=a?he((u,q)=>r==null?void 0:r.setLayoutProperty(a,u,q)):void 0),i.$$.dirty[0]&67117056&&(d==null||d(P)),i.$$.dirty[0]&33570816&&(b==null||b(A)),i.$$.dirty[0]&1098907649&&a&&(r==null||r.setLayerZoomRange(a,n,f))},[a,ce,de,le,me,ye,R,I,h,k,m,F,j,P,A,B,s,te,oe,J,V,K,T,f,n,b,d,c,l,e,r,S,C,y,z,D]}class Je extends U{constructor(t){super(),x(this,t,Be,je,G,{id:7,source:8,sourceLayer:9,beforeId:10,beforeLayerType:11,type:12,paint:13,layout:14,filter:15,applyToClusters:16,minzoom:17,maxzoom:18,manageHoverState:19,hovered:6,hoverCursor:20,eventsIfTopMost:21},null,[-1,-1])}}function Ke(i){let t;const o=i[14].default,e=ue(o,i,i[22],null);return{c(){e&&e.c()},m(l,n){e&&e.m(l,n),t=!0},p(l,n){e&&e.p&&(!t||n&4194304)&&fe(e,o,l,l[22],t?se(o,l[22],n,null):ae(l[22]),null)},i(l){t||(v(e,l),t=!0)},o(l){L(e,l),t=!1},d(l){e&&e.d(l)}}}function Oe(i){let t,o,e;function l(f){i[15](f)}let n={id:i[1],type:"fill",source:i[2],sourceLayer:i[3],beforeId:i[4],beforeLayerType:i[5],paint:i[6],layout:i[7],filter:i[8],minzoom:i[9],maxzoom:i[10],hoverCursor:i[11],manageHoverState:i[12],eventsIfTopMost:i[13],$$slots:{default:[Ke]},$$scope:{ctx:i}};return i[0]!==void 0&&(n.hovered=i[0]),t=new Je({props:n}),Ce.push(()=>we(t,"hovered",l)),t.$on("click",i[16]),t.$on("dblclick",i[17]),t.$on("contextmenu",i[18]),t.$on("mouseenter",i[19]),t.$on("mousemove",i[20]),t.$on("mouseleave",i[21]),{c(){ke(t.$$.fragment)},m(f,c){Le(t,f,c),e=!0},p(f,[c]){const d={};c&2&&(d.id=f[1]),c&4&&(d.source=f[2]),c&8&&(d.sourceLayer=f[3]),c&16&&(d.beforeId=f[4]),c&32&&(d.beforeLayerType=f[5]),c&64&&(d.paint=f[6]),c&128&&(d.layout=f[7]),c&256&&(d.filter=f[8]),c&512&&(d.minzoom=f[9]),c&1024&&(d.maxzoom=f[10]),c&2048&&(d.hoverCursor=f[11]),c&4096&&(d.manageHoverState=f[12]),c&8192&&(d.eventsIfTopMost=f[13]),c&4194304&&(d.$$scope={dirty:c,ctx:f}),!o&&c&1&&(o=!0,d.hovered=f[0],De(()=>o=!1)),t.$set(d)},i(f){e||(v(t.$$.fragment,f),e=!0)},o(f){L(t.$$.fragment,f),e=!1},d(f){Se(t,f)}}}function We(i,t,o){let{$$slots:e={},$$scope:l}=t,{id:n=re("fill")}=t,{source:f=void 0}=t,{sourceLayer:c=void 0}=t,{beforeId:d=void 0}=t,{beforeLayerType:b=void 0}=t,{paint:a}=t,{layout:r=void 0}=t,{filter:S=void 0}=t,{minzoom:C=void 0}=t,{maxzoom:y=void 0}=t,{hoverCursor:D=void 0}=t,{manageHoverState:z=!1}=t,{hovered:I=null}=t,{eventsIfTopMost:h=!1}=t;function k(s){I=s,o(0,I)}function m(s){E.call(this,i,s)}function F(s){E.call(this,i,s)}function j(s){E.call(this,i,s)}function P(s){E.call(this,i,s)}function A(s){E.call(this,i,s)}function B(s){E.call(this,i,s)}return i.$$set=s=>{"id"in s&&o(1,n=s.id),"source"in s&&o(2,f=s.source),"sourceLayer"in s&&o(3,c=s.sourceLayer),"beforeId"in s&&o(4,d=s.beforeId),"beforeLayerType"in s&&o(5,b=s.beforeLayerType),"paint"in s&&o(6,a=s.paint),"layout"in s&&o(7,r=s.layout),"filter"in s&&o(8,S=s.filter),"minzoom"in s&&o(9,C=s.minzoom),"maxzoom"in s&&o(10,y=s.maxzoom),"hoverCursor"in s&&o(11,D=s.hoverCursor),"manageHoverState"in s&&o(12,z=s.manageHoverState),"hovered"in s&&o(0,I=s.hovered),"eventsIfTopMost"in s&&o(13,h=s.eventsIfTopMost),"$$scope"in s&&o(22,l=s.$$scope)},[I,n,f,c,d,b,a,r,S,C,y,D,z,h,e,k,m,F,j,P,A,B,l]}class pe extends U{constructor(t){super(),x(this,t,We,Oe,G,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}function ve(i){let t=i[0],o,e,l=Ie(i);return{c(){l.c(),o=p()},m(n,f){l.m(n,f),O(n,o,f),e=!0},p(n,f){f&1&&G(t,t=n[0])?($(),L(l,1,1,ze),ee(),l=Ie(n),l.c(),v(l,1),l.m(o.parentNode,o)):l.p(n,f)},i(n){e||(v(l),e=!0)},o(n){L(l),e=!1},d(n){n&&W(o),l.d(n)}}}function Ie(i){let t;const o=i[15].default,e=ue(o,i,i[14],null);return{c(){e&&e.c()},m(l,n){e&&e.m(l,n),t=!0},p(l,n){e&&e.p&&(!t||n&16384)&&fe(e,o,l,l[14],t?se(o,l[14],n,null):ae(l[14]),null)},i(l){t||(v(e,l),t=!0)},o(l){L(e,l),t=!1},d(l){e&&e.d(l)}}}function Xe(i){let t,o,e=i[0]&&ve(i);return{c(){e&&e.c(),t=p()},m(l,n){e&&e.m(l,n),O(l,t,n),o=!0},p(l,[n]){l[0]?e?(e.p(l,n),n&1&&v(e,1)):(e=ve(l),e.c(),v(e,1),e.m(t.parentNode,t)):e&&($(),L(e,1,1,()=>{e=null}),ee())},i(l){o||(v(e),o=!0)},o(l){L(e),o=!1},d(l){l&&W(t),e&&e.d(l)}}}function Ye(i,t,o){let e,l,n,{$$slots:f={},$$scope:c}=t,{id:d=re("geojson")}=t,{data:b}=t,{generateId:a=!1}=t,{promoteId:r=void 0}=t,{filter:S=void 0}=t,{lineMetrics:C=void 0}=t,{cluster:y=void 0}=t;const{map:D,cluster:z,self:I}=Pe();w(i,D,m=>o(13,e=m)),w(i,z,m=>o(16,n=m)),w(i,I,m=>o(0,l=m));let h,k=!0;return Te(()=>{if(l){let m=l;Q(I,l=null,l),o(11,h=void 0),Ae().then(()=>{e!=null&&e.loaded()&&(e==null||e.removeSource(m))})}}),i.$$set=m=>{"id"in m&&o(4,d=m.id),"data"in m&&o(5,b=m.data),"generateId"in m&&o(6,a=m.generateId),"promoteId"in m&&o(7,r=m.promoteId),"filter"in m&&o(8,S=m.filter),"lineMetrics"in m&&o(9,C=m.lineMetrics),"cluster"in m&&o(10,y=m.cluster),"$$scope"in m&&o(14,c=m.$$scope)},i.$$.update=()=>{i.$$.dirty&1024&&Q(z,n=y,n),i.$$.dirty&10225&&e&&l!==d&&(l&&e.removeSource(l),Q(I,l=d,l),e.addSource(l,ne({type:"geojson",data:b,filter:S,lineMetrics:C,generateId:a,promoteId:r,cluster:!!y,clusterMinPoints:y==null?void 0:y.minPoints,clusterMaxZoom:y==null?void 0:y.maxZoom,clusterRadius:y==null?void 0:y.radius,clusterProperties:y==null?void 0:y.properties})),o(11,h=e.getSource(l)),o(12,k=!0)),i.$$.dirty&8208&&(e==null||e.on("style.load",()=>{o(11,h=e==null?void 0:e.getSource(d))})),i.$$.dirty&6176&&h&&(k?o(12,k=!1):h.setData(b)),i.$$.dirty&3072&&(h==null||h.setClusterOptions(ne({cluster:!!y,clusterMaxZoom:y==null?void 0:y.maxZoom,clusterRadius:y==null?void 0:y.radius})))},[l,D,z,I,d,b,a,r,S,C,y,h,k,e,c,f]}class $e extends U{constructor(t){super(),x(this,t,Ye,Xe,G,{id:4,data:5,generateId:6,promoteId:7,filter:8,lineMetrics:9,cluster:10})}}export{Ue as F,$e as G,Je as L,pe as a,xe as h};
