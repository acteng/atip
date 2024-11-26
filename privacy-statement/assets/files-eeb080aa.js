import{a2 as qe,e as Ne,t as Re}from"./stores-f3d96dd6.js";function Ot(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ct(e,t){Ne(e,1,1,()=>{t.delete(e.key)})}function Ft(e,t,r,n,o,i,a,s,l,u,f,c){let h=e.length,g=i.length,y=h;const w={};for(;y--;)w[e[y].key]=y;const E=[],d=new Map,A=new Map,p=[];for(y=g;y--;){const P=c(o,i,y),O=r(P);let C=a.get(O);C?n&&p.push(()=>C.p(P,t)):(C=u(O,P),C.c()),d.set(O,E[y]=C),O in w&&A.set(O,Math.abs(y-w[O]))}const v=new Set,m=new Set;function K(P){Re(P,1),P.m(s,f),a.set(P.key,P),f=P.first,g--}for(;h&&g;){const P=E[g-1],O=e[h-1],C=P.key,J=O.key;P===O?(f=P.first,h--,g--):d.has(J)?!a.has(C)||v.has(C)?K(P):m.has(J)?h--:A.get(C)>A.get(J)?(m.add(C),K(P)):(v.add(J),h--):(l(O,a),h--)}for(;h--;){const P=e[h];d.has(P.key)||l(P,a)}for(;g;)K(E[g-1]);return qe(p),E}var M=63710088e-1,te={centimeters:M*100,centimetres:M*100,degrees:360/(2*Math.PI),feet:M*3.28084,inches:M*39.37,kilometers:M/1e3,kilometres:M/1e3,meters:M,metres:M,miles:M/1609.344,millimeters:M*1e3,millimetres:M*1e3,nauticalmiles:M/1852,radians:1,yards:M*1.0936};function q(e,t,r={}){const n={type:"Feature"};return(r.id===0||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=t||{},n.geometry=e,n}function L(e,t,r={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!F(e[0])||!F(e[1]))throw new Error("coordinates must contain numbers");return q({type:"Point",coordinates:e},t,r)}function _t(e,t,r={}){for(const o of e){if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");if(o[o.length-1].length!==o[0].length)throw new Error("First and last Position are not equivalent.");for(let i=0;i<o[o.length-1].length;i++)if(o[o.length-1][i]!==o[0][i])throw new Error("First and last Position are not equivalent.")}return q({type:"Polygon",coordinates:e},t,r)}function G(e,t,r={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return q({type:"LineString",coordinates:e},t,r)}function $t(e,t={}){const r={type:"FeatureCollection"};return t.id&&(r.id=t.id),t.bbox&&(r.bbox=t.bbox),r.features=e,r}function kt(e,t,r={}){return q({type:"MultiPolygon",coordinates:e},t,r)}function Lt(e,t="kilometers"){const r=te[t];if(!r)throw new Error(t+" units is invalid");return e*r}function Gt(e,t="kilometers"){const r=te[t];if(!r)throw new Error(t+" units is invalid");return e/r}function qt(e){return e%(2*Math.PI)*180/Math.PI}function Nt(e){return e%360*Math.PI/180}function F(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function re(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}var Be=Object.defineProperty,b=(e,t)=>Be(e,"name",{value:t,configurable:!0});function B(e,t,r){if(e!==null)for(var n,o,i,a,s,l,u,f=0,c=0,h,g=e.type,y=g==="FeatureCollection",w=g==="Feature",E=y?e.features.length:1,d=0;d<E;d++){u=y?e.features[d].geometry:w?e.geometry:e,h=u?u.type==="GeometryCollection":!1,s=h?u.geometries.length:1;for(var A=0;A<s;A++){var p=0,v=0;if(a=h?u.geometries[A]:u,a!==null){l=a.coordinates;var m=a.type;switch(f=r&&(m==="Polygon"||m==="MultiPolygon")?1:0,m){case null:break;case"Point":if(t(l,c,d,p,v)===!1)return!1;c++,p++;break;case"LineString":case"MultiPoint":for(n=0;n<l.length;n++){if(t(l[n],c,d,p,v)===!1)return!1;c++,m==="MultiPoint"&&p++}m==="LineString"&&p++;break;case"Polygon":case"MultiLineString":for(n=0;n<l.length;n++){for(o=0;o<l[n].length-f;o++){if(t(l[n][o],c,d,p,v)===!1)return!1;c++}m==="MultiLineString"&&p++,m==="Polygon"&&v++}m==="Polygon"&&p++;break;case"MultiPolygon":for(n=0;n<l.length;n++){for(v=0,o=0;o<l[n].length;o++){for(i=0;i<l[n][o].length-f;i++){if(t(l[n][o][i],c,d,p,v)===!1)return!1;c++}v++}p++}break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(B(a.geometries[n],t,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}b(B,"coordEach");function Ie(e,t,r,n){var o=r;return B(e,function(i,a,s,l,u){a===0&&r===void 0?o=i:o=t(o,i,a,s,l,u)},n),o}b(Ie,"coordReduce");function ne(e,t){var r;switch(e.type){case"FeatureCollection":for(r=0;r<e.features.length&&t(e.features[r].properties,r)!==!1;r++);break;case"Feature":t(e.properties,0);break}}b(ne,"propEach");function Je(e,t,r){var n=r;return ne(e,function(o,i){i===0&&r===void 0?n=o:n=t(n,o,i)}),n}b(Je,"propReduce");function ie(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var r=0;r<e.features.length&&t(e.features[r],r)!==!1;r++);}b(ie,"featureEach");function Te(e,t,r){var n=r;return ie(e,function(o,i){i===0&&r===void 0?n=o:n=t(n,o,i)}),n}b(Te,"featureReduce");function Ve(e){var t=[];return B(e,function(r){t.push(r)}),t}b(Ve,"coordAll");function H(e,t){var r,n,o,i,a,s,l,u,f,c,h=0,g=e.type==="FeatureCollection",y=e.type==="Feature",w=g?e.features.length:1;for(r=0;r<w;r++){for(s=g?e.features[r].geometry:y?e.geometry:e,u=g?e.features[r].properties:y?e.properties:{},f=g?e.features[r].bbox:y?e.bbox:void 0,c=g?e.features[r].id:y?e.id:void 0,l=s?s.type==="GeometryCollection":!1,a=l?s.geometries.length:1,o=0;o<a;o++){if(i=l?s.geometries[o]:s,i===null){if(t(null,h,u,f,c)===!1)return!1;continue}switch(i.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(i,h,u,f,c)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<i.geometries.length;n++)if(t(i.geometries[n],h,u,f,c)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}h++}}b(H,"geomEach");function oe(e,t,r){var n=r;return H(e,function(o,i,a,s,l){i===0&&r===void 0?n=o:n=t(n,o,i,a,s,l)}),n}b(oe,"geomReduce");function V(e,t){H(e,function(r,n,o,i,a){var s=r===null?null:r.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return t(q(r,o,{bbox:i,id:a}),n,0)===!1?!1:void 0}var l;switch(s){case"MultiPoint":l="Point";break;case"MultiLineString":l="LineString";break;case"MultiPolygon":l="Polygon";break}for(var u=0;u<r.coordinates.length;u++){var f=r.coordinates[u],c={type:l,coordinates:f};if(t(q(c,o),n,u)===!1)return!1}})}b(V,"flattenEach");function Ue(e,t,r){var n=r;return V(e,function(o,i,a){i===0&&a===0&&r===void 0?n=o:n=t(n,o,i,a)}),n}b(Ue,"flattenReduce");function ae(e,t){V(e,function(r,n,o){var i=0;if(r.geometry){var a=r.geometry.type;if(!(a==="Point"||a==="MultiPoint")){var s,l=0,u=0,f=0;if(B(r,function(c,h,g,y,w){if(s===void 0||n>l||y>u||w>f){s=c,l=n,u=y,f=w,i=0;return}var E=G([s,c],r.properties);if(t(E,n,o,w,i)===!1)return!1;i++,s=c})===!1)return!1}}})}b(ae,"segmentEach");function ze(e,t,r){var n=r,o=!1;return ae(e,function(i,a,s,l,u){o===!1&&r===void 0?n=i:n=t(n,i,a,s,l,u),o=!0}),n}b(ze,"segmentReduce");function le(e,t){if(!e)throw new Error("geojson is required");V(e,function(r,n,o){if(r.geometry!==null){var i=r.geometry.type,a=r.geometry.coordinates;switch(i){case"LineString":if(t(r,n,o,0,0)===!1)return!1;break;case"Polygon":for(var s=0;s<a.length;s++)if(t(G(a[s],r.properties),n,o,s)===!1)return!1;break}}})}b(le,"lineEach");function Ke(e,t,r){var n=r;return le(e,function(o,i,a,s){i===0&&r===void 0?n=o:n=t(n,o,i,a,s)}),n}b(Ke,"lineReduce");function Xe(e,t){if(t=t||{},!re(t))throw new Error("options is invalid");var r=t.featureIndex||0,n=t.multiFeatureIndex||0,o=t.geometryIndex||0,i=t.segmentIndex||0,a=t.properties,s;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),a=a||e.features[r].properties,s=e.features[r].geometry;break;case"Feature":a=a||e.properties,s=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":s=e;break;default:throw new Error("geojson is invalid")}if(s===null)return null;var l=s.coordinates;switch(s.type){case"Point":case"MultiPoint":return null;case"LineString":return i<0&&(i=l.length+i-1),G([l[i],l[i+1]],a,t);case"Polygon":return o<0&&(o=l.length+o),i<0&&(i=l[o].length+i-1),G([l[o][i],l[o][i+1]],a,t);case"MultiLineString":return n<0&&(n=l.length+n),i<0&&(i=l[n].length+i-1),G([l[n][i],l[n][i+1]],a,t);case"MultiPolygon":return n<0&&(n=l.length+n),o<0&&(o=l[n].length+o),i<0&&(i=l[n][o].length-i-1),G([l[n][o][i],l[n][o][i+1]],a,t)}throw new Error("geojson is invalid")}b(Xe,"findSegment");function Ye(e,t){if(t=t||{},!re(t))throw new Error("options is invalid");var r=t.featureIndex||0,n=t.multiFeatureIndex||0,o=t.geometryIndex||0,i=t.coordIndex||0,a=t.properties,s;switch(e.type){case"FeatureCollection":r<0&&(r=e.features.length+r),a=a||e.features[r].properties,s=e.features[r].geometry;break;case"Feature":a=a||e.properties,s=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":s=e;break;default:throw new Error("geojson is invalid")}if(s===null)return null;var l=s.coordinates;switch(s.type){case"Point":return L(l,a,t);case"MultiPoint":return n<0&&(n=l.length+n),L(l[n],a,t);case"LineString":return i<0&&(i=l.length+i),L(l[i],a,t);case"Polygon":return o<0&&(o=l.length+o),i<0&&(i=l[o].length+i),L(l[o][i],a,t);case"MultiLineString":return n<0&&(n=l.length+n),i<0&&(i=l[n].length+i),L(l[n][i],a,t);case"MultiPolygon":return n<0&&(n=l.length+n),o<0&&(o=l[n].length+o),i<0&&(i=l[n][o].length-i),L(l[n][o][i],a,t)}throw new Error("geojson is invalid")}b(Ye,"findPoint");var De=Object.defineProperty,U=(e,t)=>De(e,"name",{value:t,configurable:!0});function se(e){return oe(e,(t,r)=>t+ue(r),0)}U(se,"area");function ue(e){let t=0,r;switch(e.type){case"Polygon":return Y(e.coordinates);case"MultiPolygon":for(r=0;r<e.coordinates.length;r++)t+=Y(e.coordinates[r]);return t;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}U(ue,"calculateArea");function Y(e){let t=0;if(e&&e.length>0){t+=Math.abs(D(e[0]));for(let r=1;r<e.length;r++)t-=Math.abs(D(e[r]))}return t}U(Y,"polygonArea");var We=M*M/2,X=Math.PI/180;function D(e){const t=e.length;if(t<=2)return 0;let r=0,n=0;for(;n<t;){const o=e[n],i=e[n+1===t?0:n+1],a=e[n+2>=t?(n+2)%t:n+2],s=o[0]*X,l=i[1]*X,u=a[0]*X;r+=(u-s)*Math.sin(l),n++}return r*We}U(D,"ringArea");var x=se;function fe(e,t,r){if(e!==null)for(var n,o,i,a,s,l,u,f=0,c=0,h,g=e.type,y=g==="FeatureCollection",w=g==="Feature",E=y?e.features.length:1,d=0;d<E;d++){u=y?e.features[d].geometry:w?e.geometry:e,h=u?u.type==="GeometryCollection":!1,s=h?u.geometries.length:1;for(var A=0;A<s;A++){var p=0,v=0;if(a=h?u.geometries[A]:u,a!==null){l=a.coordinates;var m=a.type;switch(f=r&&(m==="Polygon"||m==="MultiPolygon")?1:0,m){case null:break;case"Point":if(t(l,c,d,p,v)===!1)return!1;c++,p++;break;case"LineString":case"MultiPoint":for(n=0;n<l.length;n++){if(t(l[n],c,d,p,v)===!1)return!1;c++,m==="MultiPoint"&&p++}m==="LineString"&&p++;break;case"Polygon":case"MultiLineString":for(n=0;n<l.length;n++){for(o=0;o<l[n].length-f;o++){if(t(l[n][o],c,d,p,v)===!1)return!1;c++}m==="MultiLineString"&&p++,m==="Polygon"&&v++}m==="Polygon"&&p++;break;case"MultiPolygon":for(n=0;n<l.length;n++){for(v=0,o=0;o<l[n].length;o++){for(i=0;i<l[n][o].length-f;i++){if(t(l[n][o][i],c,d,p,v)===!1)return!1;c++}v++}p++}break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(fe(a.geometries[n],t,r)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function N(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const r=[1/0,1/0,-1/0,-1/0];return fe(e,n=>{r[0]>n[0]&&(r[0]=n[0]),r[1]>n[1]&&(r[1]=n[1]),r[2]<n[0]&&(r[2]=n[0]),r[3]<n[1]&&(r[3]=n[1])}),r}var He=N;const Rt=Object.freeze(Object.defineProperty({__proto__:null,bbox:N,default:He},Symbol.toStringTag,{value:"Module"}));function Qe(e,t){var r=0,n=0,o=0,i=0,a=0,s=0,l=0,u=0,f=null,c=null,h=e[0],g=e[1],y=t.length;for(r;r<y;r++){n=0;var w=t[r].length-1,E=t[r];if(f=E[0],f[0]!==E[w][0]&&f[1]!==E[w][1])throw new Error("First and last coordinates in a ring must be the same");for(a=f[0]-h,s=f[1]-g,n;n<w;n++){if(c=E[n+1],u=c[1]-g,s<0&&u<0||s>0&&u>0){f=c,s=u,a=f[0]-h;continue}if(l=c[0]-e[0],u>0&&s<=0){if(i=a*u-l*s,i>0)o=o+1;else if(i===0)return 0}else if(s>0&&u<=0){if(i=a*u-l*s,i<0)o=o+1;else if(i===0)return 0}else if(u===0&&s<0){if(i=a*u-l*s,i===0)return 0}else if(s===0&&u<0){if(i=a*u-l*s,i===0)return 0}else if(s===0&&u===0){if(l<=0&&a>=0)return 0;if(a<=0&&l>=0)return 0}f=c,s=u,a=l}}return o%2!==0}var Ze=Object.defineProperty,_=(e,t)=>Ze(e,"name",{value:t,configurable:!0});function ce(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}_(ce,"getCoord");function xe(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}_(xe,"getCoords");function ye(e){if(e.length>1&&F(e[0])&&F(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return ye(e[0]);throw new Error("coordinates must only contain numbers")}_(ye,"containsNumber");function je(e,t,r){if(!t||!r)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.type)}_(je,"geojsonType");function et(e,t,r){if(!e)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.geometry.type)}_(et,"featureOf");function tt(e,t,r){if(!e)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+n.geometry.type)}}_(tt,"collectionOf");function ge(e){return e.type==="Feature"?e.geometry:e}_(ge,"getGeom");function rt(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}_(rt,"getType");var nt=Object.defineProperty,he=(e,t)=>nt(e,"name",{value:t,configurable:!0});function I(e,t,r={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const n=ce(e),o=ge(t),i=o.type,a=t.bbox;let s=o.coordinates;if(a&&pe(n,a)===!1)return!1;i==="Polygon"&&(s=[s]);let l=!1;for(var u=0;u<s.length;++u){const f=Qe(n,s[u]);if(f===0)return!r.ignoreBoundary;f&&(l=!0)}return l}he(I,"booleanPointInPolygon");function pe(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}he(pe,"inBBox");var it=Object.defineProperty,$=(e,t)=>it(e,"name",{value:t,configurable:!0});function we(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}$(we,"getCoord");function me(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}$(me,"getCoords");function de(e){if(e.length>1&&F(e[0])&&F(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return de(e[0]);throw new Error("coordinates must only contain numbers")}$(de,"containsNumber");function ot(e,t,r){if(!t||!r)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.type)}$(ot,"geojsonType");function at(e,t,r){if(!e)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.geometry.type)}$(at,"featureOf");function lt(e,t,r){if(!e)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+n.geometry.type)}}$(lt,"collectionOf");function st(e){return e.type==="Feature"?e.geometry:e}$(st,"getGeom");function ut(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}$(ut,"getType");var ft=Object.defineProperty,ve=(e,t)=>ft(e,"name",{value:t,configurable:!0});function R(e,t,r={}){const n=we(e),o=me(t);for(let i=0;i<o.length-1;i++){let a=!1;if(r.ignoreEndVertices&&(i===0&&(a="start"),i===o.length-2&&(a="end"),i===0&&i+1===o.length-1&&(a="both")),Pe(o[i],o[i+1],n,a,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}ve(R,"booleanPointOnLine");function Pe(e,t,r,n,o){const i=r[0],a=r[1],s=e[0],l=e[1],u=t[0],f=t[1],c=r[0]-s,h=r[1]-l,g=u-s,y=f-l,w=c*y-h*g;if(o!==null){if(Math.abs(w)>o)return!1}else if(w!==0)return!1;if(n){if(n==="start")return Math.abs(g)>=Math.abs(y)?g>0?s<i&&i<=u:u<=i&&i<s:y>0?l<a&&a<=f:f<=a&&a<l;if(n==="end")return Math.abs(g)>=Math.abs(y)?g>0?s<=i&&i<u:u<i&&i<=s:y>0?l<=a&&a<f:f<a&&a<=l;if(n==="both")return Math.abs(g)>=Math.abs(y)?g>0?s<i&&i<u:u<i&&i<s:y>0?l<a&&a<f:f<a&&a<l}else return Math.abs(g)>=Math.abs(y)?g>0?s<=i&&i<=u:u<=i&&i<=s:y>0?l<=a&&a<=f:f<=a&&a<=l;return!1}ve(Pe,"isPointOnLineSegment");var ct=Object.defineProperty,k=(e,t)=>ct(e,"name",{value:t,configurable:!0});function yt(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}k(yt,"getCoord");function gt(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}k(gt,"getCoords");function be(e){if(e.length>1&&F(e[0])&&F(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return be(e[0]);throw new Error("coordinates must only contain numbers")}k(be,"containsNumber");function ht(e,t,r){if(!t||!r)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.type)}k(ht,"geojsonType");function pt(e,t,r){if(!e)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.geometry.type)}k(pt,"featureOf");function wt(e,t,r){if(!e)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of e.features){if(!n||n.type!=="Feature"||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+n.geometry.type)}}k(wt,"collectionOf");function T(e){return e.type==="Feature"?e.geometry:e}k(T,"getGeom");function mt(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}k(mt,"getType");var dt=Object.defineProperty,S=(e,t)=>dt(e,"name",{value:t,configurable:!0});function Ee(e,t){const r=T(e),n=T(t),o=r.type,i=n.type,a=r.coordinates,s=n.coordinates;switch(o){case"Point":switch(i){case"Point":return z(a,s);default:throw new Error("feature2 "+i+" geometry not supported")}case"MultiPoint":switch(i){case"Point":return Se(r,n);case"MultiPoint":return Ae(r,n);default:throw new Error("feature2 "+i+" geometry not supported")}case"LineString":switch(i){case"Point":return R(n,r,{ignoreEndVertices:!0});case"LineString":return Fe(r,n);case"MultiPoint":return Oe(r,n);default:throw new Error("feature2 "+i+" geometry not supported")}case"Polygon":switch(i){case"Point":return I(n,r,{ignoreBoundary:!0});case"LineString":return _e(r,n);case"Polygon":return Q(r,n);case"MultiPoint":return Ce(r,n);default:throw new Error("feature2 "+i+" geometry not supported")}case"MultiPolygon":switch(i){case"Polygon":return Me(r,n);default:throw new Error("feature2 "+i+" geometry not supported")}default:throw new Error("feature1 "+o+" geometry not supported")}}S(Ee,"booleanContains");function Me(e,t){return e.coordinates.some(r=>Q({type:"Polygon",coordinates:r},t))}S(Me,"isPolygonInMultiPolygon");function Se(e,t){let r,n=!1;for(r=0;r<e.coordinates.length;r++)if(z(e.coordinates[r],t.coordinates)){n=!0;break}return n}S(Se,"isPointInMultiPoint");function Ae(e,t){for(const r of t.coordinates){let n=!1;for(const o of e.coordinates)if(z(r,o)){n=!0;break}if(!n)return!1}return!0}S(Ae,"isMultiPointInMultiPoint");function Oe(e,t){let r=!1;for(const n of t.coordinates)if(R(n,e,{ignoreEndVertices:!0})&&(r=!0),!R(n,e))return!1;return!!r}S(Oe,"isMultiPointOnLine");function Ce(e,t){for(const r of t.coordinates)if(!I(r,e,{ignoreBoundary:!0}))return!1;return!0}S(Ce,"isMultiPointInPoly");function Fe(e,t){let r=!1;for(const n of t.coordinates)if(R({type:"Point",coordinates:n},e,{ignoreEndVertices:!0})&&(r=!0),!R({type:"Point",coordinates:n},e,{ignoreEndVertices:!1}))return!1;return r}S(Fe,"isLineOnLine");function _e(e,t){let r=!1,n=0;const o=N(e),i=N(t);if(!Z(o,i))return!1;for(n;n<t.coordinates.length-1;n++){const a=$e(t.coordinates[n],t.coordinates[n+1]);if(I({type:"Point",coordinates:a},e,{ignoreBoundary:!0})){r=!0;break}}return r}S(_e,"isLineInPoly");function Q(e,t){if(e.type==="Feature"&&e.geometry===null||t.type==="Feature"&&t.geometry===null)return!1;const r=N(e),n=N(t);if(!Z(r,n))return!1;const o=T(t).coordinates;for(const i of o)for(const a of i)if(!I(a,e))return!1;return!0}S(Q,"isPolyInPoly");function Z(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}S(Z,"doBBoxOverlap");function z(e,t){return e[0]===t[0]&&e[1]===t[1]}S(z,"compareCoords");function $e(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}S($e,"getMidpoint");var j=Ee;function Bt(e){for(let t of e.features)t.properties.full_name=`${t.properties.level}_${t.properties.name}`;return e.features.sort((t,r)=>x(t)-x(r)),e}function vt(e,t){let r=t.features.find(n=>Pt(e,n));return r?r.properties.full_name:null}function Pt(e,t){let r=t.geometry;r.type=="MultiPolygon"&&(r={type:"Polygon",coordinates:r.coordinates[0]});for(let n of e)if(n.geometry.type=="MultiLineString"){for(let o of n.geometry.coordinates)if(!j(r,{type:"LineString",coordinates:o}))return!1}else if(!j(r,n))return!1;return!0}function W(e,t){return`sketch/${e}/${t}`}function ke(e,t){try{window.localStorage.setItem(e,t)}catch(r){console.log(`Couldn't set local storage for ${e}: ${r}`),window.alert("Your changes couldn't be saved because you've run out of local storage. Please fix this problem on the next page and try again."),window.location.href="local_storage.html"}}function bt(e,t,r){return`scheme.html?authority=${e}&schema=${r}&file=${t}`}function It(e){let t=`sketch/${e}/`,r=[];for(let n=0;n<window.localStorage.length;n++){let o=window.localStorage.key(n);if(o.startsWith(t)){let i="v1";try{i=Ge(JSON.parse(window.localStorage.getItem(o)))}catch{}r.push([o.slice(t.length),i])}}return r.sort(),r}function Jt(){let e=new Map;for(let r=0;r<window.localStorage.length;r++){let o=window.localStorage.key(r).split("/");if(o.length==3&&o[0]=="sketch"){let i=o[1],a=e.has(i)?e.get(i):0;e.set(i,a+1)}}let t=[...e.entries()];return t.sort((r,n)=>n[1]-r[1]),t}function Et(e,t){let r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),r.setAttribute("download",e),document.body.appendChild(r),r.click(),document.body.removeChild(r)}function Tt(e){let t=[];for(let r=0;r<window.localStorage.length;r++){let n=window.localStorage.key(r);n==e?t.push([n,W(e,"v1 sketch")]):n==`${e}_pipeline`&&t.push([n,W(e,"pipeline sketch")])}for(let[r,n]of t){console.log(`Renaming ${r} to ${n}`);try{let o=window.localStorage.getItem(r);ke(n,o),window.localStorage.removeItem(r)}catch(o){console.error(`Couldn't importOldFiles: ${o}`)}}}function Le(e,t){var n;let r=JSON.parse(JSON.stringify(t));for(let o of r.features)(n=o.properties)==null||delete n.hide_while_editing;return r.authority=e,r.origin="atip-v2",r}function Vt(e,t,r){let n=Le(e,r);Et(`${e}_${t}.geojson`,JSON.stringify(n,null,"  "))}function Ge(e){try{let t=Object.values(e.schemes)[0];if(t&&Object.hasOwn(t,"pipeline"))return"pipeline";if(t&&Object.hasOwn(t,"v2"))return"v2"}catch{}return"v1"}function Ut(e,t,r){let n=JSON.parse(t),o=vt(n.features,r);if(!o)throw new Error("Can't figure out the authority boundary that fully contains this scheme");n.authority=o;let i=Ge(n),a=Mt(n.authority,e);return ke(W(n.authority,a),JSON.stringify(Le(n.authority,n))),bt(n.authority,a,i)}function zt(){let e=[];for(let t=0;t<window.localStorage.length;t++){let r=window.localStorage.key(t);e.push([r,window.localStorage.getItem(r).length])}return e.sort((t,r)=>r[1]-t[1]),e}function Mt(e,t){let r=ee(ee(t,".json"),".geojson");return St(r,`${e}_`)}function St(e,t){return e.startsWith(t)?e.slice(t.length):e}function ee(e,t){return e.endsWith(t)?e.slice(0,-t.length):e}export{He as A,Bt as B,zt as C,Ut as a,Le as b,Jt as c,Et as d,Ot as e,bt as f,W as g,Vt as h,Tt as i,Rt as j,F as k,It as l,kt as m,Nt as n,Lt as o,_t as p,Gt as q,qt as r,ke as s,L as t,q as u,$t as v,G as w,re as x,Ft as y,Ct as z};