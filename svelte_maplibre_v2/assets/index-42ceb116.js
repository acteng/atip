import{S as J,i as j,s as N,j as ce,p as ge,ap as we,q as V,D as $,y as K,n as Q,t as U,v as g,w as L,z as W,az as He,G as ee,x as te,aA as Be,k as Fe,A as Je,r as _e,N as je,a1 as me,b as Ve,c as q,e as Ee,aT as se,aJ as oe,aK as ne,aL as re,aM as le,g as be,h as Le,u as Ie,aX as I,f as Ke,m as Xe,ax as Qe,J as Ue,aq as Ae,a5 as fe,b0 as We,b1 as Ye}from"./index-c3a200ef.js";import{C as xe,g as ie,h as pe,e as ve,u as $e,c as k}from"./StreetViewController-265a8389.js";function et(t){let e;return{c(){e=ce("span"),ge(e,"class","svelte-kzgqtg"),we(e,"background",t[0])},m(n,o){V(n,e,o)},p(n,[o]){o&1&&we(e,"background",n[0])},i:$,o:$,d(n){n&&K(e)}}}function tt(t,e,n){let{color:o}=e;return t.$$set=r=>{"color"in r&&n(0,o=r.color)},[o]}class ot extends J{constructor(e){super(),j(this,e,tt,et,N,{color:0})}}function Ze(t,e,n){const o=t.slice();return o[1]=e[n][0],o[2]=e[n][1],o}function Ne(t){let e,n,o,r=t[1]+"",u,l,a;return n=new ot({props:{color:t[2]}}),{c(){e=ce("li"),Q(n.$$.fragment),o=Fe(),u=Je(r),l=Fe()},m(i,_){V(i,e,_),U(n,e,null),_e(e,o),_e(e,u),_e(e,l),a=!0},p(i,_){const d={};_&1&&(d.color=i[2]),n.$set(d),(!a||_&1)&&r!==(r=i[1]+"")&&je(u,r)},i(i){a||(g(n.$$.fragment,i),a=!0)},o(i){L(n.$$.fragment,i),a=!1},d(i){i&&K(e),W(n)}}}function nt(t){let e,n,o=He(t[0]),r=[];for(let l=0;l<o.length;l+=1)r[l]=Ne(Ze(t,o,l));const u=l=>L(r[l],1,1,()=>{r[l]=null});return{c(){e=ce("ul");for(let l=0;l<r.length;l+=1)r[l].c()},m(l,a){V(l,e,a);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);n=!0},p(l,a){if(a&1){o=He(l[0]);let i;for(i=0;i<o.length;i+=1){const _=Ze(l,o,i);r[i]?(r[i].p(_,a),g(r[i],1)):(r[i]=Ne(_),r[i].c(),g(r[i],1),r[i].m(e,null))}for(ee(),i=o.length;i<r.length;i+=1)u(i);te()}},i(l){if(!n){for(let a=0;a<o.length;a+=1)g(r[a]);n=!0}},o(l){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)L(r[a]);n=!1},d(l){l&&K(e),Be(r,l)}}}function rt(t){let e,n;return e=new xe({props:{label:"Legend",$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){Q(e.$$.fragment)},m(o,r){U(e,o,r),n=!0},p(o,[r]){const u={};r&33&&(u.$$scope={dirty:r,ctx:o}),e.$set(u)},i(o){n||(g(e.$$.fragment,o),n=!0)},o(o){L(e.$$.fragment,o),n=!1},d(o){W(e,o)}}}function lt(t,e,n){let{rows:o}=e;return t.$$set=r=>{"rows"in r&&n(0,o=r.rows)},[o]}class Ht extends J{constructor(e){super(),j(this,e,lt,rt,N,{rows:0})}}function Ge(t){let e;return n=>{if(n)for(let o in n){let r=e==null?void 0:e[o],u=n[o];r!==u&&t(o,u,r)}else if(e)for(let o in e)t(o,void 0,e[o]);e=n}}function it(t,...e){let n=[t];for(let o of e)if(o)Array.isArray(o)&&o[0]===t?n.push(...o.slice(1)):n.push(o);else continue;if(n.length!==1)return n.length===2?n[1]:n}function ut(t){return t===!0?["has","point_count"]:t===!1?["!",["has","point_count"]]:void 0}function Ft(t,e){return["case",["boolean",["feature-state","hover"],!1],e,t]}function Pe(t){let e=t[0],n,o,r=qe(t);return{c(){r.c(),n=me()},m(u,l){r.m(u,l),V(u,n,l),o=!0},p(u,l){l[0]&1&&N(e,e=u[0])?(ee(),L(r,1,1,$),te(),r=qe(u),r.c(),g(r,1),r.m(n.parentNode,n)):r.p(u,l)},i(u){o||(g(r),o=!0)},o(u){L(r),o=!1},d(u){u&&K(n),r.d(u)}}}function qe(t){let e;const n=t[35].default,o=oe(n,t,t[34],null);return{c(){o&&o.c()},m(r,u){o&&o.m(r,u),e=!0},p(r,u){o&&o.p&&(!e||u[1]&8)&&ne(o,n,r,r[34],e?le(n,r[34],u,null):re(r[34]),null)},i(r){e||(g(o,r),e=!0)},o(r){L(o,r),e=!1},d(r){o&&o.d(r)}}}function at(t){let e,n,o=t[0]&&Pe(t);return{c(){o&&o.c(),e=me()},m(r,u){o&&o.m(r,u),V(r,e,u),n=!0},p(r,u){r[0]?o?(o.p(r,u),u[0]&1&&g(o,1)):(o=Pe(r),o.c(),g(o,1),o.m(e.parentNode,e)):o&&(ee(),L(o,1,1,()=>{o=null}),te())},i(r){n||(g(o),n=!0)},o(r){L(o),n=!1},d(r){r&&K(e),o&&o.d(r)}}}function ft(t,e,n){let o,r,u,l,a,i,_,d,s,C,z,h,{$$slots:H={},$$scope:S}=e,{id:b=ie("layer")}=e,{source:v=void 0}=e,{sourceLayer:M=void 0}=e,{beforeId:y=void 0}=e,{beforeLayerType:w=void 0}=e,{type:G}=e,{paint:A=void 0}=e,{layout:Z=void 0}=e,{filter:P=void 0}=e,{applyToClusters:f=void 0}=e,{minzoom:m=void 0}=e,{maxzoom:de=void 0}=e,{manageHoverState:ue=!1}=e,{hovered:Y=null}=e,{hoverCursor:x=void 0}=e,{eventsIfTopMost:p=!1}=e;const ae=Ve(),{map:Ce,source:ze,self:ye,minzoom:ke,maxzoom:Se,eventTopMost:he}=pe();q(t,Ce,c=>n(30,s=c)),q(t,ze,c=>n(31,C=c)),q(t,ye,c=>n(0,d=c)),q(t,ke,c=>n(33,h=c)),q(t,Se,c=>n(32,z=c)),Ee(()=>{d&&s&&(s==null||s.removeLayer(d))});let D;return t.$$set=c=>{"id"in c&&n(7,b=c.id),"source"in c&&n(8,v=c.source),"sourceLayer"in c&&n(9,M=c.sourceLayer),"beforeId"in c&&n(10,y=c.beforeId),"beforeLayerType"in c&&n(11,w=c.beforeLayerType),"type"in c&&n(12,G=c.type),"paint"in c&&n(13,A=c.paint),"layout"in c&&n(14,Z=c.layout),"filter"in c&&n(15,P=c.filter),"applyToClusters"in c&&n(16,f=c.applyToClusters),"minzoom"in c&&n(17,m=c.minzoom),"maxzoom"in c&&n(18,de=c.maxzoom),"manageHoverState"in c&&n(19,ue=c.manageHoverState),"hovered"in c&&n(6,Y=c.hovered),"hoverCursor"in c&&n(20,x=c.hoverCursor),"eventsIfTopMost"in c&&n(21,p=c.eventsIfTopMost),"$$scope"in c&&n(34,S=c.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&65536&&n(29,o=ut(f)),t.$$.dirty[0]&536903680&&n(28,r=it("all",o,P)),t.$$.dirty[0]&131072|t.$$.dirty[1]&4&&n(24,u=m??h),t.$$.dirty[0]&262144|t.$$.dirty[1]&2&&n(23,l=de??z),t.$$.dirty[0]&256|t.$$.dirty[1]&1&&n(27,a=v||C),t.$$.dirty[0]&1509457537&&s&&d!==b&&a){let c=function(T){var E,B;if(!d||!s||p&&he(T)!==d)return;let F=T.features??[],O=(B=(E=F[0])==null?void 0:E.properties)==null?void 0:B.cluster_id,R={event:T,map:s,clusterId:O,layer:d,source:a,features:F};ae(T.type,R)},X=y;if(!y&&w){let T=s.getStyle().layers,F=typeof w=="function"?w:R=>R.type===w,O=T==null?void 0:T.find(F);O&&(X=O.id)}se(ye,d=b,d),s.addLayer(ve({id:d,type:G,source:a,"source-layer":M,filter:r,paint:A,layout:Z,minzoom:u,maxzoom:l}),X),s.on("click",d,c),s.on("dblclick",d,c),s.on("contextmenu",d,c),s.on("mouseenter",d,T=>{var E,B;if(!d||!s||p&&he(T)!==d)return;x&&(s.getCanvas().style.cursor=x);let F=T.features??[];n(6,Y=F[0]??null);let O=(B=(E=F[0])==null?void 0:E.properties)==null?void 0:B.cluster_id;ae("mouseenter",{event:T,map:s,clusterId:O,layer:d,source:a,features:F})}),s.on("mousemove",d,T=>{var E,B,Me;if(p&&he(T)!==d)return;let F=T.features??[],O=(B=(E=F[0])==null?void 0:E.properties)==null?void 0:B.cluster_id,R=(Me=F[0])==null?void 0:Me.id;R!==D&&(ue&&(D!==void 0&&(s==null||s.setFeatureState({source:a,id:D},{hover:!1})),s==null||s.setFeatureState({source:a,id:R},{hover:!0})),n(22,D=R),n(6,Y=F[0]??null)),ae("mousemove",{event:T,map:s,clusterId:O,layer:d,source:a,features:F})}),s.on("mouseleave",d,T=>{!d||!s||(x&&(s.getCanvas().style.cursor=""),n(6,Y=null),ue&&D!==void 0&&(s==null||s.setFeatureState({source:a,id:D},{hover:!1}),n(22,D=void 0)),ae("mouseleave",{map:s,layer:d,source:a}))})}t.$$.dirty[0]&1073741825&&n(26,i=d?Ge((c,X)=>s==null?void 0:s.setPaintProperty(d,c,X)):void 0),t.$$.dirty[0]&1073741825&&n(25,_=d?Ge((c,X)=>s==null?void 0:s.setLayoutProperty(d,c,X)):void 0),t.$$.dirty[0]&67117056&&(i==null||i(A)),t.$$.dirty[0]&33570816&&(_==null||_(Z)),t.$$.dirty[0]&1098907649&&d&&(s==null||s.setLayerZoomRange(d,u,l))},[d,Ce,ze,ye,ke,Se,Y,b,v,M,y,w,G,A,Z,P,f,m,de,ue,x,p,D,l,u,_,i,a,r,o,s,C,z,h,S,H]}class Te extends J{constructor(e){super(),j(this,e,ft,at,N,{id:7,source:8,sourceLayer:9,beforeId:10,beforeLayerType:11,type:12,paint:13,layout:14,filter:15,applyToClusters:16,minzoom:17,maxzoom:18,manageHoverState:19,hovered:6,hoverCursor:20,eventsIfTopMost:21},null,[-1,-1])}}function st(t){let e;const n=t[15].default,o=oe(n,t,t[23],null);return{c(){o&&o.c()},m(r,u){o&&o.m(r,u),e=!0},p(r,u){o&&o.p&&(!e||u&8388608)&&ne(o,n,r,r[23],e?le(n,r[23],u,null):re(r[23]),null)},i(r){e||(g(o,r),e=!0)},o(r){L(o,r),e=!1},d(r){o&&o.d(r)}}}function ct(t){let e,n,o;function r(l){t[16](l)}let u={id:t[1],type:"circle",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],applyToClusters:t[9],minzoom:t[10],maxzoom:t[11],hoverCursor:t[12],manageHoverState:t[13],eventsIfTopMost:t[14],$$slots:{default:[st]},$$scope:{ctx:t}};return t[0]!==void 0&&(u.hovered=t[0]),e=new Te({props:u}),be.push(()=>Le(e,"hovered",r)),e.$on("click",t[17]),e.$on("dblclick",t[18]),e.$on("contextmenu",t[19]),e.$on("mouseenter",t[20]),e.$on("mousemove",t[21]),e.$on("mouseleave",t[22]),{c(){Q(e.$$.fragment)},m(l,a){U(e,l,a),o=!0},p(l,[a]){const i={};a&2&&(i.id=l[1]),a&4&&(i.source=l[2]),a&8&&(i.sourceLayer=l[3]),a&16&&(i.beforeId=l[4]),a&32&&(i.beforeLayerType=l[5]),a&64&&(i.paint=l[6]),a&128&&(i.layout=l[7]),a&256&&(i.filter=l[8]),a&512&&(i.applyToClusters=l[9]),a&1024&&(i.minzoom=l[10]),a&2048&&(i.maxzoom=l[11]),a&4096&&(i.hoverCursor=l[12]),a&8192&&(i.manageHoverState=l[13]),a&16384&&(i.eventsIfTopMost=l[14]),a&8388608&&(i.$$scope={dirty:a,ctx:l}),!n&&a&1&&(n=!0,i.hovered=l[0],Ie(()=>n=!1)),e.$set(i)},i(l){o||(g(e.$$.fragment,l),o=!0)},o(l){L(e.$$.fragment,l),o=!1},d(l){W(e,l)}}}function mt(t,e,n){let{$$slots:o={},$$scope:r}=e,{id:u=ie("circle")}=e,{source:l=void 0}=e,{sourceLayer:a=void 0}=e,{beforeId:i=void 0}=e,{beforeLayerType:_=void 0}=e,{paint:d}=e,{layout:s=void 0}=e,{filter:C=void 0}=e,{applyToClusters:z=void 0}=e,{minzoom:h=void 0}=e,{maxzoom:H=void 0}=e,{hoverCursor:S=void 0}=e,{manageHoverState:b=!1}=e,{hovered:v=null}=e,{eventsIfTopMost:M=!1}=e;function y(m){v=m,n(0,v)}function w(m){I.call(this,t,m)}function G(m){I.call(this,t,m)}function A(m){I.call(this,t,m)}function Z(m){I.call(this,t,m)}function P(m){I.call(this,t,m)}function f(m){I.call(this,t,m)}return t.$$set=m=>{"id"in m&&n(1,u=m.id),"source"in m&&n(2,l=m.source),"sourceLayer"in m&&n(3,a=m.sourceLayer),"beforeId"in m&&n(4,i=m.beforeId),"beforeLayerType"in m&&n(5,_=m.beforeLayerType),"paint"in m&&n(6,d=m.paint),"layout"in m&&n(7,s=m.layout),"filter"in m&&n(8,C=m.filter),"applyToClusters"in m&&n(9,z=m.applyToClusters),"minzoom"in m&&n(10,h=m.minzoom),"maxzoom"in m&&n(11,H=m.maxzoom),"hoverCursor"in m&&n(12,S=m.hoverCursor),"manageHoverState"in m&&n(13,b=m.manageHoverState),"hovered"in m&&n(0,v=m.hovered),"eventsIfTopMost"in m&&n(14,M=m.eventsIfTopMost),"$$scope"in m&&n(23,r=m.$$scope)},[v,u,l,a,i,_,d,s,C,z,h,H,S,b,M,o,y,w,G,A,Z,P,f,r]}class At extends J{constructor(e){super(),j(this,e,mt,ct,N,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,applyToClusters:9,minzoom:10,maxzoom:11,hoverCursor:12,manageHoverState:13,hovered:0,eventsIfTopMost:14})}}function dt(t){let e;const n=t[14].default,o=oe(n,t,t[22],null);return{c(){o&&o.c()},m(r,u){o&&o.m(r,u),e=!0},p(r,u){o&&o.p&&(!e||u&4194304)&&ne(o,n,r,r[22],e?le(n,r[22],u,null):re(r[22]),null)},i(r){e||(g(o,r),e=!0)},o(r){L(o,r),e=!1},d(r){o&&o.d(r)}}}function yt(t){let e,n,o;function r(l){t[15](l)}let u={id:t[1],type:"fill",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],minzoom:t[9],maxzoom:t[10],hoverCursor:t[11],manageHoverState:t[12],eventsIfTopMost:t[13],$$slots:{default:[dt]},$$scope:{ctx:t}};return t[0]!==void 0&&(u.hovered=t[0]),e=new Te({props:u}),be.push(()=>Le(e,"hovered",r)),e.$on("click",t[16]),e.$on("dblclick",t[17]),e.$on("contextmenu",t[18]),e.$on("mouseenter",t[19]),e.$on("mousemove",t[20]),e.$on("mouseleave",t[21]),{c(){Q(e.$$.fragment)},m(l,a){U(e,l,a),o=!0},p(l,[a]){const i={};a&2&&(i.id=l[1]),a&4&&(i.source=l[2]),a&8&&(i.sourceLayer=l[3]),a&16&&(i.beforeId=l[4]),a&32&&(i.beforeLayerType=l[5]),a&64&&(i.paint=l[6]),a&128&&(i.layout=l[7]),a&256&&(i.filter=l[8]),a&512&&(i.minzoom=l[9]),a&1024&&(i.maxzoom=l[10]),a&2048&&(i.hoverCursor=l[11]),a&4096&&(i.manageHoverState=l[12]),a&8192&&(i.eventsIfTopMost=l[13]),a&4194304&&(i.$$scope={dirty:a,ctx:l}),!n&&a&1&&(n=!0,i.hovered=l[0],Ie(()=>n=!1)),e.$set(i)},i(l){o||(g(e.$$.fragment,l),o=!0)},o(l){L(e.$$.fragment,l),o=!1},d(l){W(e,l)}}}function ht(t,e,n){let{$$slots:o={},$$scope:r}=e,{id:u=ie("fill")}=e,{source:l=void 0}=e,{sourceLayer:a=void 0}=e,{beforeId:i=void 0}=e,{beforeLayerType:_=void 0}=e,{paint:d}=e,{layout:s=void 0}=e,{filter:C=void 0}=e,{minzoom:z=void 0}=e,{maxzoom:h=void 0}=e,{hoverCursor:H=void 0}=e,{manageHoverState:S=!1}=e,{hovered:b=null}=e,{eventsIfTopMost:v=!1}=e;function M(f){b=f,n(0,b)}function y(f){I.call(this,t,f)}function w(f){I.call(this,t,f)}function G(f){I.call(this,t,f)}function A(f){I.call(this,t,f)}function Z(f){I.call(this,t,f)}function P(f){I.call(this,t,f)}return t.$$set=f=>{"id"in f&&n(1,u=f.id),"source"in f&&n(2,l=f.source),"sourceLayer"in f&&n(3,a=f.sourceLayer),"beforeId"in f&&n(4,i=f.beforeId),"beforeLayerType"in f&&n(5,_=f.beforeLayerType),"paint"in f&&n(6,d=f.paint),"layout"in f&&n(7,s=f.layout),"filter"in f&&n(8,C=f.filter),"minzoom"in f&&n(9,z=f.minzoom),"maxzoom"in f&&n(10,h=f.maxzoom),"hoverCursor"in f&&n(11,H=f.hoverCursor),"manageHoverState"in f&&n(12,S=f.manageHoverState),"hovered"in f&&n(0,b=f.hovered),"eventsIfTopMost"in f&&n(13,v=f.eventsIfTopMost),"$$scope"in f&&n(22,r=f.$$scope)},[b,u,l,a,i,_,d,s,C,z,h,H,S,v,o,M,y,w,G,A,Z,P,r]}class Zt extends J{constructor(e){super(),j(this,e,ht,yt,N,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}function De(t){let e=t[0],n,o,r=Oe(t);return{c(){r.c(),n=me()},m(u,l){r.m(u,l),V(u,n,l),o=!0},p(u,l){l&1&&N(e,e=u[0])?(ee(),L(r,1,1,$),te(),r=Oe(u),r.c(),g(r,1),r.m(n.parentNode,n)):r.p(u,l)},i(u){o||(g(r),o=!0)},o(u){L(r),o=!1},d(u){u&&K(n),r.d(u)}}}function Oe(t){let e;const n=t[15].default,o=oe(n,t,t[14],null);return{c(){o&&o.c()},m(r,u){o&&o.m(r,u),e=!0},p(r,u){o&&o.p&&(!e||u&16384)&&ne(o,n,r,r[14],e?le(n,r[14],u,null):re(r[14]),null)},i(r){e||(g(o,r),e=!0)},o(r){L(o,r),e=!1},d(r){o&&o.d(r)}}}function _t(t){let e,n,o=t[0]&&De(t);return{c(){o&&o.c(),e=me()},m(r,u){o&&o.m(r,u),V(r,e,u),n=!0},p(r,[u]){r[0]?o?(o.p(r,u),u&1&&g(o,1)):(o=De(r),o.c(),g(o,1),o.m(e.parentNode,e)):o&&(ee(),L(o,1,1,()=>{o=null}),te())},i(r){n||(g(o),n=!0)},o(r){L(o),n=!1},d(r){r&&K(e),o&&o.d(r)}}}function gt(t,e){if(t.getSource(e)){let n=[];for(let o of t.getStyle().layers)"source"in o&&o.source==e&&n.push(o.id);for(let o of n)console.log(`had to remove ${o} first`),t.removeLayer(o);t.removeSource(e)}}function vt(t,e,n){let o,r,u,{$$slots:l={},$$scope:a}=e,{id:i=ie("geojson")}=e,{data:_}=e,{generateId:d=!1}=e,{promoteId:s=void 0}=e,{filter:C=void 0}=e,{lineMetrics:z=void 0}=e,{cluster:h=void 0}=e;const{map:H,cluster:S,self:b}=$e();q(t,H,y=>n(13,o=y)),q(t,S,y=>n(16,u=y)),q(t,b,y=>n(0,r=y));let v,M=!0;return Ee(()=>{if(console.log("gj source getting torn down"),r){let y=r;if(console.log(`... will be removing ${y}`),se(b,r=null,r),n(11,v=void 0),o!=null&&o.loaded()){console.log(`... actually removed ${y}`),gt(o,y);let w=o.getSource(y);console.log(`its gone, right? ${w}`)}}}),t.$$set=y=>{"id"in y&&n(4,i=y.id),"data"in y&&n(5,_=y.data),"generateId"in y&&n(6,d=y.generateId),"promoteId"in y&&n(7,s=y.promoteId),"filter"in y&&n(8,C=y.filter),"lineMetrics"in y&&n(9,z=y.lineMetrics),"cluster"in y&&n(10,h=y.cluster),"$$scope"in y&&n(14,a=y.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&se(S,u=h,u),t.$$.dirty&10225&&o&&r!==i&&(console.log(`$source is ${r}, id is ${i}`),r&&(console.log(`removing existing $source ${r}`),o.removeSource(r)),se(b,r=i,r),console.log(`just set $source to ${i}. adding source now.`),o.addSource(r,ve({type:"geojson",data:_,filter:C,lineMetrics:z,generateId:d,promoteId:s,cluster:!!h,clusterMinPoints:h==null?void 0:h.minPoints,clusterMaxZoom:h==null?void 0:h.maxZoom,clusterRadius:h==null?void 0:h.radius,clusterProperties:h==null?void 0:h.properties})),n(11,v=o.getSource(r)),n(12,M=!0)),t.$$.dirty&6176&&v&&(M?n(12,M=!1):v.setData(_)),t.$$.dirty&3072&&(v==null||v.setClusterOptions(ve({cluster:!!h,clusterMaxZoom:h==null?void 0:h.maxZoom,clusterRadius:h==null?void 0:h.radius})))},[r,H,S,b,i,_,d,s,C,z,h,v,M,o,a,l]}class Nt extends J{constructor(e){super(),j(this,e,vt,_t,N,{id:4,data:5,generateId:6,promoteId:7,filter:8,lineMetrics:9,cluster:10})}}function bt(t){let e;const n=t[14].default,o=oe(n,t,t[22],null);return{c(){o&&o.c()},m(r,u){o&&o.m(r,u),e=!0},p(r,u){o&&o.p&&(!e||u&4194304)&&ne(o,n,r,r[22],e?le(n,r[22],u,null):re(r[22]),null)},i(r){e||(g(o,r),e=!0)},o(r){L(o,r),e=!1},d(r){o&&o.d(r)}}}function Lt(t){let e,n,o;function r(l){t[15](l)}let u={id:t[1],type:"line",source:t[2],sourceLayer:t[3],beforeId:t[4],beforeLayerType:t[5],paint:t[6],layout:t[7],filter:t[8],minzoom:t[9],maxzoom:t[10],hoverCursor:t[11],manageHoverState:t[12],eventsIfTopMost:t[13],$$slots:{default:[bt]},$$scope:{ctx:t}};return t[0]!==void 0&&(u.hovered=t[0]),e=new Te({props:u}),be.push(()=>Le(e,"hovered",r)),e.$on("click",t[16]),e.$on("dblclick",t[17]),e.$on("contextmenu",t[18]),e.$on("mouseenter",t[19]),e.$on("mousemove",t[20]),e.$on("mouseleave",t[21]),{c(){Q(e.$$.fragment)},m(l,a){U(e,l,a),o=!0},p(l,[a]){const i={};a&2&&(i.id=l[1]),a&4&&(i.source=l[2]),a&8&&(i.sourceLayer=l[3]),a&16&&(i.beforeId=l[4]),a&32&&(i.beforeLayerType=l[5]),a&64&&(i.paint=l[6]),a&128&&(i.layout=l[7]),a&256&&(i.filter=l[8]),a&512&&(i.minzoom=l[9]),a&1024&&(i.maxzoom=l[10]),a&2048&&(i.hoverCursor=l[11]),a&4096&&(i.manageHoverState=l[12]),a&8192&&(i.eventsIfTopMost=l[13]),a&4194304&&(i.$$scope={dirty:a,ctx:l}),!n&&a&1&&(n=!0,i.hovered=l[0],Ie(()=>n=!1)),e.$set(i)},i(l){o||(g(e.$$.fragment,l),o=!0)},o(l){L(e.$$.fragment,l),o=!1},d(l){W(e,l)}}}function It(t,e,n){let{$$slots:o={},$$scope:r}=e,{id:u=ie("line")}=e,{source:l=void 0}=e,{sourceLayer:a=void 0}=e,{beforeId:i=void 0}=e,{beforeLayerType:_=void 0}=e,{paint:d}=e,{layout:s=void 0}=e,{filter:C=void 0}=e,{minzoom:z=void 0}=e,{maxzoom:h=void 0}=e,{hoverCursor:H=void 0}=e,{manageHoverState:S=!1}=e,{hovered:b=null}=e,{eventsIfTopMost:v=!1}=e;function M(f){b=f,n(0,b)}function y(f){I.call(this,t,f)}function w(f){I.call(this,t,f)}function G(f){I.call(this,t,f)}function A(f){I.call(this,t,f)}function Z(f){I.call(this,t,f)}function P(f){I.call(this,t,f)}return t.$$set=f=>{"id"in f&&n(1,u=f.id),"source"in f&&n(2,l=f.source),"sourceLayer"in f&&n(3,a=f.sourceLayer),"beforeId"in f&&n(4,i=f.beforeId),"beforeLayerType"in f&&n(5,_=f.beforeLayerType),"paint"in f&&n(6,d=f.paint),"layout"in f&&n(7,s=f.layout),"filter"in f&&n(8,C=f.filter),"minzoom"in f&&n(9,z=f.minzoom),"maxzoom"in f&&n(10,h=f.maxzoom),"hoverCursor"in f&&n(11,H=f.hoverCursor),"manageHoverState"in f&&n(12,S=f.manageHoverState),"hovered"in f&&n(0,b=f.hovered),"eventsIfTopMost"in f&&n(13,v=f.eventsIfTopMost),"$$scope"in f&&n(22,r=f.$$scope)},[b,u,l,a,i,_,d,s,C,z,h,H,S,v,o,M,y,w,G,A,Z,P,r]}class Gt extends J{constructor(e){super(),j(this,e,It,Lt,N,{id:1,source:2,sourceLayer:3,beforeId:4,beforeLayerType:5,paint:6,layout:7,filter:8,minzoom:9,maxzoom:10,hoverCursor:11,manageHoverState:12,hovered:0,eventsIfTopMost:13})}}const Tt="/atip/svelte_maplibre_v2/assets/zoom_out_map-b2e1091a.svg";function Ct(t){let e,n;return{c(){e=ce("img"),Qe(e.src,n=Tt)||ge(e,"src",n),ge(e,"alt","Zoom to show entire boundary")},m(o,r){V(o,e,r)},p:$,d(o){o&&K(e)}}}function zt(t){let e,n;return e=new Ke({props:{title:"Zoom to show entire boundary",$$slots:{default:[Ct]},$$scope:{ctx:t}}}),e.$on("click",t[0]),{c(){Q(e.$$.fragment)},m(o,r){U(e,o,r),n=!0},p(o,[r]){const u={};r&8&&(u.$$scope={dirty:r,ctx:o}),e.$set(u)},i(o){n||(g(e.$$.fragment,o),n=!0)},o(o){L(e.$$.fragment,o),n=!1},d(o){W(e,o)}}}function kt(t,e,n){let o;q(t,Xe,l=>n(2,o=l));let{boundaryGeojson:r}=e;function u(){o.fitBounds(Ue(r),{padding:20,animate:!0,duration:500})}return t.$$set=l=>{"boundaryGeojson"in l&&n(1,r=l.boundaryGeojson)},[u,r]}class Pt extends J{constructor(e){super(),j(this,e,kt,zt,N,{boundaryGeojson:1})}}function qt(t){return{v1:"Scheme Design",v2:"Experimental Scheme Design",planning:"Development Planning",criticals:"Critical Issues",atf4:"ATF4 Scheme"}[t]}function Dt(t){return{v1:"an intervention",v2:"an intervention",planning:"a development",criticals:"a critical issue",atf4:"an intervention"}[t]}function Ot(t){return{v1:"interventions",v2:"interventions",planning:"developments",criticals:"critical issues",atf4:"interventions"}[t]}function Rt(t){return t=="planning"?Ae(["get","reference_type",["get","planning"]],{preapp:k.preapp,outline:k.outline,"reserved matters":k["reserved matters"],"local plan":k["local plan"]},"black"):Ae(["get","intervention_type"],{area:k.area,route:k.route,crossing:k.crossing,other:k.other},"white")}function Et(t){return t=="planning"?[["Preapp",k.preapp],["Outline",k.outline],["Reserved matters",k["reserved matters"]],["Local plan",k["local plan"]]]:[["Areas",k.area],["Routes",k.route],["Crossings",k.crossing],["Other",k.other]]}function Re(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return t.geometry.coordinates;if(t.type==="Point")return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Bt(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Jt(t,e){return t.type==="FeatureCollection"?"FeatureCollection":t.type==="GeometryCollection"?"GeometryCollection":t.type==="Feature"&&t.geometry!==null?t.geometry.type:t.type}function St(t,e,n){n===void 0&&(n={});var o=Re(t),r=Re(e),u=fe(r[1]-o[1]),l=fe(r[0]-o[0]),a=fe(o[1]),i=fe(r[1]),_=Math.pow(Math.sin(u/2),2)+Math.pow(Math.sin(l/2),2)*Math.cos(a)*Math.cos(i);return We(2*Math.atan2(Math.sqrt(_),Math.sqrt(1-_)),n.units)}function jt(t,e){return e===void 0&&(e={}),Ye(t,function(n,o){var r=o.geometry.coordinates;return n+St(r[0],r[1],e)},0)}export{At as C,Zt as F,Nt as G,Gt as L,Pt as Z,Bt as a,Jt as b,Ot as c,St as d,qt as e,Rt as f,Re as g,Ht as h,Et as i,Te as j,Ft as k,jt as l,ot as m,Dt as s};
