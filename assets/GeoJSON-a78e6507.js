import{S as Q,i as x,s as G,F as Fe,g as ke,m as Le,t as g,n as L,p as Se,e as Me,h as Y,j as U,w as Ze,o as W,b as Ce,$ as p,as as $,at as ee,aU as re,D as He,ba as Ne,q as w,a3 as Te,aX as K,aZ as ne,a0 as ze,aL as ue,aM as fe,aN as ae,aO as se,c as we,l as De,a$ as E,aW as Pe,aY as Ae}from"./index-499ccaad.js";function Re(i){let e,o,t;return{c(){e=Me("input"),e.disabled=i[2],Y(e,"class","govuk-file-upload"),Y(e,"id",i[1]),Y(e,"type","file")},m(l,n){U(l,e,n),i[6](e),o||(t=Ze(e,"change",i[4]),o=!0)},p(l,n){n&4&&(e.disabled=l[2]),n&2&&Y(e,"id",l[1])},d(l){l&&W(e),i[6](null),o=!1,t()}}}function qe(i){let e,o;return e=new Fe({props:{label:i[0],id:i[1],$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){ke(e.$$.fragment)},m(t,l){Le(e,t,l),o=!0},p(t,[l]){const n={};l&1&&(n.label=t[0]),l&2&&(n.id=t[1]),l&142&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){L(e.$$.fragment,t),o=!1},d(t){Se(e,t)}}}function Ee(i,e,o){let{label:t}=e,{id:l}=e,{loadFile:n}=e,{disabled:f=!1}=e,c;function m(a){let r=new FileReader;r.onload=C=>{n(C.target.result)};let S=c.files;r.readAsText(S[0])}function h(a){Ce[a?"unshift":"push"](()=>{c=a,o(3,c)})}return i.$$set=a=>{"label"in a&&o(0,t=a.label),"id"in a&&o(1,l=a.id),"loadFile"in a&&o(5,n=a.loadFile),"disabled"in a&&o(2,f=a.disabled)},[t,l,f,c,m,n,h]}class Qe extends Q{constructor(e){super(),x(this,e,Ee,qe,G,{label:0,id:1,loadFile:5,disabled:2})}}function he(i){let e;return o=>{if(o)for(let t in o){let l=e==null?void 0:e[t],n=o[t];l!==n&&i(t,n,l)}else if(e)for(let t in e)i(t,void 0,e[t]);e=o}}function Ge(i,...e){let o=[i];for(let t of e)if(t)Array.isArray(t)&&t[0]===i?o.push(...t.slice(1)):o.push(t);else continue;if(o.length!==1)return o.length===2?o[1]:o}function Oe(i){return i===!0?["has","point_count"]:i===!1?["!",["has","point_count"]]:void 0}function xe(i,e){return["case",["boolean",["feature-state","hover"],!1],e,i]}function be(i){let e=i[0],o,t,l=ge(i);return{c(){l.c(),o=p()},m(n,f){l.m(n,f),U(n,o,f),t=!0},p(n,f){f[0]&1&&G(e,e=n[0])?($(),L(l,1,1,ze),ee(),l=ge(n),l.c(),g(l,1),l.m(o.parentNode,o)):l.p(n,f)},i(n){t||(g(l),t=!0)},o(n){L(l),t=!1},d(n){n&&W(o),l.d(n)}}}function ge(i){let e;const o=i[35].default,t=ue(o,i,i[34],null);return{c(){t&&t.c()},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n[1]&8)&&fe(t,o,l,l[34],e?se(o,l[34],n,null):ae(l[34]),null)},i(l){e||(g(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function Ve(i){let e,o,t=i[0]&&be(i);return{c(){t&&t.c(),e=p()},m(l,n){t&&t.m(l,n),U(l,e,n),o=!0},p(l,n){l[0]?t?(t.p(l,n),n[0]&1&&g(t,1)):(t=be(l),t.c(),g(t,1),t.m(e.parentNode,e)):t&&($(),L(t,1,1,()=>{t=null}),ee())},i(l){o||(g(t),o=!0)},o(l){L(t),o=!1},d(l){l&&W(e),t&&t.d(l)}}}function je(i,e,o){let t,l,n,f,c,m,h,a,r,S,C,y,{$$slots:D={},$$scope:z}=e,{id:v=re("layer")}=e,{source:b=void 0}=e,{sourceLayer:I=void 0}=e,{beforeId:d=void 0}=e,{beforeLayerType:F=void 0}=e,{type:O}=e,{paint:P=void 0}=e,{layout:A=void 0}=e,{filter:V=void 0}=e,{applyToClusters:s=void 0}=e,{minzoom:te=void 0}=e,{maxzoom:oe=void 0}=e,{manageHoverState:j=!1}=e,{hovered:R=null}=e,{hoverCursor:B=void 0}=e,{eventsIfTopMost:J=!1}=e;const X=He(),{map:ce,source:me,self:le,minzoom:de,maxzoom:ye,eventTopMost:ie}=Ne();w(i,ce,u=>o(30,r=u)),w(i,me,u=>o(31,S=u)),w(i,le,u=>o(0,a=u)),w(i,de,u=>o(33,y=u)),w(i,ye,u=>o(32,C=u)),Te(()=>{a&&r&&(r==null||r.removeLayer(a))});let T;return i.$$set=u=>{"id"in u&&o(7,v=u.id),"source"in u&&o(8,b=u.source),"sourceLayer"in u&&o(9,I=u.sourceLayer),"beforeId"in u&&o(10,d=u.beforeId),"beforeLayerType"in u&&o(11,F=u.beforeLayerType),"type"in u&&o(12,O=u.type),"paint"in u&&o(13,P=u.paint),"layout"in u&&o(14,A=u.layout),"filter"in u&&o(15,V=u.filter),"applyToClusters"in u&&o(16,s=u.applyToClusters),"minzoom"in u&&o(17,te=u.minzoom),"maxzoom"in u&&o(18,oe=u.maxzoom),"manageHoverState"in u&&o(19,j=u.manageHoverState),"hovered"in u&&o(6,R=u.hovered),"hoverCursor"in u&&o(20,B=u.hoverCursor),"eventsIfTopMost"in u&&o(21,J=u.eventsIfTopMost),"$$scope"in u&&o(34,z=u.$$scope)},i.$$.update=()=>{if(i.$$.dirty[0]&65536&&o(29,t=Oe(s)),i.$$.dirty[0]&536903680&&o(28,l=Ge("all",t,V)),i.$$.dirty[0]&131072|i.$$.dirty[1]&4&&o(24,n=te??y),i.$$.dirty[0]&262144|i.$$.dirty[1]&2&&o(23,f=oe??C),i.$$.dirty[0]&256|i.$$.dirty[1]&1&&o(27,c=b||S),i.$$.dirty[0]&1509457537&&r&&a!==v&&c){let u=function(_){var H,N;if(!a||!r||J&&ie(_)!==a)return;let k=_.features??[],M=(N=(H=k[0])==null?void 0:H.properties)==null?void 0:N.cluster_id,Z={event:_,map:r,clusterId:M,layer:a,source:c,features:k};X(_.type,Z)},q=d;if(!d&&F){let _=r.getStyle().layers,k=typeof F=="function"?F:Z=>Z.type===F,M=_==null?void 0:_.find(k);M&&(q=M.id)}K(le,a=v,a),r.addLayer(ne({id:a,type:O,source:c,"source-layer":I,filter:l,paint:P,layout:A,minzoom:n,maxzoom:f}),q),r.on("click",a,u),r.on("dblclick",a,u),r.on("contextmenu",a,u),r.on("mouseenter",a,_=>{var H,N;if(!a||!r||J&&ie(_)!==a)return;B&&(r.getCanvas().style.cursor=B);let k=_.features??[];o(6,R=k[0]??null);let M=(N=(H=k[0])==null?void 0:H.properties)==null?void 0:N.cluster_id;X("mouseenter",{event:_,map:r,clusterId:M,layer:a,source:c,features:k})}),r.on("mousemove",a,_=>{var H,N,_e;if(J&&ie(_)!==a){o(6,R=null),j&&T!==void 0&&(r==null||r.setFeatureState({source:c,sourceLayer:I,id:T},{hover:!1}),o(22,T=void 0));return}let k=_.features??[],M=(N=(H=k[0])==null?void 0:H.properties)==null?void 0:N.cluster_id,Z=(_e=k[0])==null?void 0:_e.id;Z!==T&&(j&&(T!==void 0&&(r==null||r.setFeatureState({source:c,sourceLayer:I,id:T},{hover:!1})),r==null||r.setFeatureState({source:c,sourceLayer:I,id:Z},{hover:!0})),o(22,T=Z),o(6,R=k[0]??null)),X("mousemove",{event:_,map:r,clusterId:M,layer:a,source:c,features:k})}),r.on("mouseleave",a,_=>{!a||!r||(B&&(r.getCanvas().style.cursor=""),o(6,R=null),j&&T!==void 0&&(r==null||r.setFeatureState({source:c,sourceLayer:I,id:T},{hover:!1}),o(22,T=void 0)),X("mouseleave",{map:r,layer:a,source:c}))})}i.$$.dirty[0]&1073741825&&o(26,m=a?he((u,q)=>r==null?void 0:r.setPaintProperty(a,u,q)):void 0),i.$$.dirty[0]&1073741825&&o(25,h=a?he((u,q)=>r==null?void 0:r.setLayoutProperty(a,u,q)):void 0),i.$$.dirty[0]&67117056&&(m==null||m(P)),i.$$.dirty[0]&33570816&&(h==null||h(A)),i.$$.dirty[0]&1098907649&&a&&(r==null||r.setLayerZoomRange(a,n,f))},[a,ce,me,le,de,ye,R,v,b,I,d,F,O,P,A,V,s,te,oe,j,B,J,T,f,n,h,m,c,l,t,r,S,C,y,z,D]}class Be extends Q{constructor(e){super(),x(this,e,je,Ve,G,{id:7,source:8,sourceLayer:9,beforeId:10,beforeLayerType:11,type:12,paint:13,layout:14,filter:15,applyToClusters:16,minzoom:17,maxzoom:18,manageHoverState:19,hovered:6,hoverCursor:20,eventsIfTopMost:21},null,[-1,-1])}}function Je(i){let e;const o=i[14].default,t=ue(o,i,i[22],null);return{c(){t&&t.c()},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&4194304)&&fe(t,o,l,l[22],e?se(o,l[22],n,null):ae(l[22]),null)},i(l){e||(g(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function Ue(i){let e,o,t;function l(f){i[15](f)}let n={id:i[1],type:"fill",source:i[2],sourceLayer:i[3],beforeId:i[4],beforeLayerType:i[5],paint:i[6],layout:i[7],filter:i[8],minzoom:i[9],maxzoom:i[10],hoverCursor:i[11],manageHoverState:i[12],eventsIfTopMost:i[13],$$slots:{default:[Je]},$$scope:{ctx:i}};return i[0]!==void 0&&(n.hovered=i[0]),e=new Be({props:n}),Ce.push(()=>we(e,"hovered",l)),e.$on("click",i[16]),e.$on("dblclick",i[17]),e.$on("contextmenu",i[18]),e.$on("mouseenter",i[19]),e.$on("mousemove",i[20]),e.$on("mouseleave",i[21]),{c(){ke(e.$$.fragment)},m(f,c){Le(e,f,c),t=!0},p(f,[c]){const m={};c&2&&(m.id=f[1]),c&4&&(m.source=f[2]),c&8&&(m.sourceLayer=f[3]),c&16&&(m.beforeId=f[4]),c&32&&(m.beforeLayerType=f[5]),c&64&&(m.paint=f[6]),c&128&&(m.layout=f[7]),c&256&&(m.filter=f[8]),c&512&&(m.minzoom=f[9]),c&1024&&(m.maxzoom=f[10]),c&2048&&(m.hoverCursor=f[11]),c&4096&&(m.manageHoverState=f[12]),c&8192&&(m.eventsIfTopMost=f[13]),c&4194304&&(m.$$scope={dirty:c,ctx:f}),!o&&c&1&&(o=!0,m.hovered=f[0],De(()=>o=!1)),e.$set(m)},i(f){t||(g(e.$$.fragment,f),t=!0)},o(f){L(e.$$.fragment,f),t=!1},d(f){Se(e,f)}}}function We(i,e,o){let{$$slots:t={},$$scope:l}=e,{id:n=re("fill")}=e,{source:f=void 0}=e,{sourceLayer:c=void 0}=e,{beforeId:m=void 0}=e,{beforeLayerType:h=void 0}=e,{paint:a}=e,{layout:r=void 0}=e,{filter:S=void 0}=e,{minzoom:C=void 0}=e,{maxzoom:y=void 0}=e,{hoverCursor:D=void 0}=e,{manageHoverState:z=!1}=e,{hovered:v=null}=e,{eventsIfTopMost:b=!1}=e;function I(s){v=s,o(0,v)}function d(s){E.call(this,i,s)}function F(s){E.call(this,i,s)}function O(s){E.call(this,i,s)}function P(s){E.call(this,i,s)}function A(s){E.call(this,i,s)}function V(s){E.call(this,i,s)}return i.$$set=s=>{"id"in s&&o(1,n=s.id),"source"in s&&o(2,f=s.source),"sourceLayer"in s&&o(3,c=s.sourceLayer),"beforeId"in s&&o(4,m=s.beforeId),"beforeLayerType"in s&&o(5,h=s.beforeLayerType),"paint"in s&&o(6,a=s.paint),"layout"in s&&o(7,r=s.layout),"filter"in s&&o(8,S=s.filter),"minzoom"in s&&o(9,C=s.minzoom),"maxzoom"in s&&o(10,y=s.maxzoom),"hoverCursor"in s&&o(11,D=s.hoverCursor),"manageHoverState"in s&&o(12,z=s.manageHoverState),"hovered"in s&&o(0,v=s.hovered),"eventsIfTopMost"in s&&o(13,b=s.eventsIfTopMost),"$$scope"in s&&o(22,l=s.$$scope)},[v,n,f,c,m,h,a,r,S,C,y,D,z,b,t,I,d,F,O,P,A,V,l]}class pe extends Q{constructor(e){super(),x(this,e,We,Ue,G,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}function ve(i){let e=i[0],o,t,l=Ie(i);return{c(){l.c(),o=p()},m(n,f){l.m(n,f),U(n,o,f),t=!0},p(n,f){f&1&&G(e,e=n[0])?($(),L(l,1,1,ze),ee(),l=Ie(n),l.c(),g(l,1),l.m(o.parentNode,o)):l.p(n,f)},i(n){t||(g(l),t=!0)},o(n){L(l),t=!1},d(n){n&&W(o),l.d(n)}}}function Ie(i){let e;const o=i[15].default,t=ue(o,i,i[14],null);return{c(){t&&t.c()},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&16384)&&fe(t,o,l,l[14],e?se(o,l[14],n,null):ae(l[14]),null)},i(l){e||(g(t,l),e=!0)},o(l){L(t,l),e=!1},d(l){t&&t.d(l)}}}function Xe(i){let e,o,t=i[0]&&ve(i);return{c(){t&&t.c(),e=p()},m(l,n){t&&t.m(l,n),U(l,e,n),o=!0},p(l,[n]){l[0]?t?(t.p(l,n),n&1&&g(t,1)):(t=ve(l),t.c(),g(t,1),t.m(e.parentNode,e)):t&&($(),L(t,1,1,()=>{t=null}),ee())},i(l){o||(g(t),o=!0)},o(l){L(t),o=!1},d(l){l&&W(e),t&&t.d(l)}}}function Ye(i,e,o){let t,l,n,{$$slots:f={},$$scope:c}=e,{id:m=re("geojson")}=e,{data:h}=e,{generateId:a=!1}=e,{promoteId:r=void 0}=e,{filter:S=void 0}=e,{lineMetrics:C=void 0}=e,{cluster:y=void 0}=e;const{map:D,cluster:z,self:v}=Pe();w(i,D,d=>o(13,t=d)),w(i,z,d=>o(16,n=d)),w(i,v,d=>o(0,l=d));let b,I=!0;return Te(()=>{if(l){let d=l;K(v,l=null,l),o(11,b=void 0),Ae().then(()=>{t!=null&&t.loaded()&&(t==null||t.removeSource(d))})}}),i.$$set=d=>{"id"in d&&o(4,m=d.id),"data"in d&&o(5,h=d.data),"generateId"in d&&o(6,a=d.generateId),"promoteId"in d&&o(7,r=d.promoteId),"filter"in d&&o(8,S=d.filter),"lineMetrics"in d&&o(9,C=d.lineMetrics),"cluster"in d&&o(10,y=d.cluster),"$$scope"in d&&o(14,c=d.$$scope)},i.$$.update=()=>{i.$$.dirty&1024&&K(z,n=y,n),i.$$.dirty&10225&&t&&l!==m&&(l&&t.removeSource(l),K(v,l=m,l),t.addSource(l,ne({type:"geojson",data:h,filter:S,lineMetrics:C,generateId:a,promoteId:r,cluster:!!y,clusterMinPoints:y==null?void 0:y.minPoints,clusterMaxZoom:y==null?void 0:y.maxZoom,clusterRadius:y==null?void 0:y.radius,clusterProperties:y==null?void 0:y.properties})),o(11,b=t.getSource(l)),o(12,I=!0)),i.$$.dirty&6176&&b&&(I?o(12,I=!1):b.setData(h)),i.$$.dirty&3072&&(b==null||b.setClusterOptions(ne({cluster:!!y,clusterMaxZoom:y==null?void 0:y.maxZoom,clusterRadius:y==null?void 0:y.radius})))},[l,D,z,v,m,h,a,r,S,C,y,b,I,t,c,f]}class $e extends Q{constructor(e){super(),x(this,e,Ye,Xe,G,{id:4,data:5,generateId:6,promoteId:7,filter:8,lineMetrics:9,cluster:10})}}export{Qe as F,$e as G,Be as L,pe as a,xe as h};