import{S as K,i as V,s as W,J as D,e as w,d as m,f as C,g as b,K as J,L as T,M as U,h as E,j as L,k as S,a as O,b as Y,aa as q,ab as $,aV as Ee,N as ge,c as x,m as ee,l as te,G as Ce,aZ as Se,a_ as ie,y as Le,a$ as Re,t as X,A as re,a9 as I,Z as Fe,aA as Ge,al as le,am as Z,ao as Ae,ar as oe,at as B,au as _e,aq as A,af as z,aR as Be,C as Oe,v as qe}from"./index-46d90933.js";import{v as pe,a as Ne,E as Ze}from"./Radio-f3408d53.js";import{e as ae}from"./files-d6df10c0.js";import{S as ze}from"./SecondaryButton-1a5f9970.js";function De(e){let t,n,r;const i=e[3].default,l=D(i,e,e[2],null);return{c(){t=w("fieldset"),n=w("div"),l&&l.c(),m(n,"class",e[0]),m(n,"data-module","govuk-checkboxes"),m(t,"class","govuk-fieldset")},m(o,u){C(o,t,u),b(t,n),l&&l.m(n,null),r=!0},p(o,[u]){l&&l.p&&(!r||u&4)&&J(l,i,o,o[2],r?U(i,o[2],u,null):T(o[2]),null)},i(o){r||(E(l,o),r=!0)},o(o){L(l,o),r=!1},d(o){o&&S(t),l&&l.d(o)}}}function Je(e,t,n){let{$$slots:r={},$$scope:i}=t,{small:l=!1}=t,o=l?"govuk-checkboxes--small":"govuk-checkboxes";return e.$$set=u=>{"small"in u&&n(1,l=u.small),"$$scope"in u&&n(2,i=u.$$scope)},[o,l,i,r]}class At extends K{constructor(t){super(),V(this,t,Je,De,W,{small:1})}}const Te=e=>({}),se=e=>({});function Ue(e){let t,n,r,i,l,o,u,s,d;const g=e[5].default,f=D(g,e,e[4],null),_=e[5].right,a=D(_,e,e[4],se);return{c(){t=w("div"),n=w("input"),r=O(),i=w("label"),f&&f.c(),l=O(),o=w("span"),a&&a.c(),m(n,"type","checkbox"),m(n,"class","govuk-checkboxes__input"),m(n,"id",e[3]),m(i,"class","govuk-label govuk-checkboxes__label"),m(i,"for",e[3]),m(i,"title",e[1]),Y(o,"float","right"),m(t,"class","govuk-checkboxes__item"),m(t,"style",e[2])},m(h,p){C(h,t,p),b(t,n),n.checked=e[0],b(t,r),b(t,i),f&&f.m(i,null),b(t,l),b(t,o),a&&a.m(o,null),u=!0,s||(d=[q(n,"change",e[7]),q(n,"change",e[6])],s=!0)},p(h,[p]){p&1&&(n.checked=h[0]),f&&f.p&&(!u||p&16)&&J(f,g,h,h[4],u?U(g,h[4],p,null):T(h[4]),null),(!u||p&2)&&m(i,"title",h[1]),a&&a.p&&(!u||p&16)&&J(a,_,h,h[4],u?U(_,h[4],p,Te):T(h[4]),se)},i(h){u||(E(f,h),E(a,h),u=!0)},o(h){L(f,h),L(a,h),u=!1},d(h){h&&S(t),f&&f.d(h),a&&a.d(h),s=!1,$(d)}}}function Ke(e,t,n){let{$$slots:r={},$$scope:i}=t;const l=Ee(r);let{checked:o}=t,{hint:u=null}=t,d=l.right!==void 0?"float: none":"",g=pe();function f(a){ge.call(this,e,a)}function _(){o=this.checked,n(0,o)}return e.$$set=a=>{"checked"in a&&n(0,o=a.checked),"hint"in a&&n(1,u=a.hint),"$$scope"in a&&n(4,i=a.$$scope)},[o,u,d,g,i,r,f,_]}class Bt extends K{constructor(t){super(),V(this,t,Ke,Ue,W,{checked:0,hint:1})}}function ue(e,t,n){const r=e.slice();return r[10]=t[n][0],r[11]=t[n][1],r}function fe(e){let t,n;return{c(){t=w("div"),n=X(e[2]),m(t,"class","govuk-hint")},m(r,i){C(r,t,i),b(t,n)},p(r,i){i&4&&re(n,r[2])},d(r){r&&S(t)}}}function ce(e){let t;return{c(){t=w("option"),t.__value="",I(t,t.__value)},m(n,r){C(n,t,r)},d(n){n&&S(t)}}}function he(e){let t,n=e[11]+"",r,i;return{c(){t=w("option"),r=X(n),t.__value=i=e[10],I(t,t.__value)},m(l,o){C(l,t,o),b(t,r)},p(l,o){o&8&&n!==(n=l[11]+"")&&re(r,n),o&8&&i!==(i=l[10])&&(t.__value=i,I(t,t.__value))},d(l){l&&S(t)}}}function Ve(e){let t,n,r,i,l,o,u,s;t=new Ze({props:{errorMessage:e[6]}});let d=e[2]&&fe(e),g=e[4]&&ce(),f=ae(e[3]),_=[];for(let a=0;a<f.length;a+=1)_[a]=he(ue(e,f,a));return{c(){x(t.$$.fragment),n=O(),d&&d.c(),r=O(),i=w("select"),g&&g.c(),l=Ce();for(let a=0;a<_.length;a+=1)_[a].c();m(i,"class","govuk-select"),m(i,"id",e[7]),i.disabled=e[5],e[0]===void 0&&Se(()=>e[9].call(i))},m(a,h){ee(t,a,h),C(a,n,h),d&&d.m(a,h),C(a,r,h),C(a,i,h),g&&g.m(i,null),b(i,l);for(let p=0;p<_.length;p+=1)_[p]&&_[p].m(i,null);ie(i,e[0],!0),o=!0,u||(s=[q(i,"change",e[9]),q(i,"change",e[8])],u=!0)},p(a,h){const p={};if(h&64&&(p.errorMessage=a[6]),t.$set(p),a[2]?d?d.p(a,h):(d=fe(a),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null),a[4]?g||(g=ce(),g.c(),g.m(i,l)):g&&(g.d(1),g=null),h&8){f=ae(a[3]);let v;for(v=0;v<f.length;v+=1){const P=ue(a,f,v);_[v]?_[v].p(P,h):(_[v]=he(P),_[v].c(),_[v].m(i,null))}for(;v<_.length;v+=1)_[v].d(1);_.length=f.length}(!o||h&32)&&(i.disabled=a[5]),h&9&&ie(i,a[0])},i(a){o||(E(t.$$.fragment,a),o=!0)},o(a){L(t.$$.fragment,a),o=!1},d(a){a&&(S(n),S(r),S(i)),te(t,a),d&&d.d(a),g&&g.d(),Le(_,a),u=!1,$(s)}}}function We(e){let t,n;return t=new Ne({props:{label:e[1],id:e[7],$$slots:{default:[Ve]},$$scope:{ctx:e}}}),{c(){x(t.$$.fragment)},m(r,i){ee(t,r,i),n=!0},p(r,[i]){const l={};i&2&&(l.label=r[1]),i&16509&&(l.$$scope={dirty:i,ctx:r}),t.$set(l)},i(r){n||(E(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function Xe(e,t,n){let{label:r}=t,{hint:i=""}=t,{choices:l}=t,{emptyOption:o=!1}=t,{disabled:u=!1}=t,{errorMessage:s=""}=t,{value:d}=t,g=pe();function f(a){ge.call(this,e,a)}function _(){d=Re(this),n(0,d),n(3,l)}return e.$$set=a=>{"label"in a&&n(1,r=a.label),"hint"in a&&n(2,i=a.hint),"choices"in a&&n(3,l=a.choices),"emptyOption"in a&&n(4,o=a.emptyOption),"disabled"in a&&n(5,u=a.disabled),"errorMessage"in a&&n(6,s=a.errorMessage),"value"in a&&n(0,d=a.value)},[d,r,i,l,o,u,s,g,f,_]}class Ot extends K{constructor(t){super(),V(this,t,Xe,We,W,{label:1,hint:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}let He=Fe(null);function Qe(e,t){return{id:t,beforeId:Ye(e,t)}}function Ye(e,t){let n=Ge(He);if(!n){console.warn(`getBeforeId(${t}) called before map is ready. Z-ordering may be incorrect.`);return}let r,i=!1;for(let l=e.layerZorder.length-1;l>=0;l--){let o=e.layerZorder[l];if(o==t){i=!0;break}n.getLayer(o)&&(r=o)}if(!i)throw new Error(`Layer ID ${t} not defined in layerZorder`);return r}let c=e=>e,k=e=>e,Ie=e=>e,je=e=>e,$e=e=>e,xe=e=>e,et=e=>e,tt=[et("raster-basemap"),c("parliamentary_constituencies"),c("parliamentary_constituencies-outline"),c("wards"),c("wards-outline"),c("combined_authorities"),c("combined_authorities-outline"),c("local_authority_districts"),c("local_authority_districts-outline"),c("local_planning_authorities"),c("local_planning_authorities-outline"),c("census_output_areas"),c("census_output_areas-outline"),c("imd"),c("imd-outline"),c("ruc"),c("ruc-outline"),c("pollution"),c("road_noise"),c("osmm"),c("user_data_polygons"),c("user_data_polygons-outline"),c("mrn"),c("srn"),c("bus_routes"),c("cycle_routes"),c("trams"),c("national_cycle_network"),c("cycle_paths"),c("pct_commute"),c("pct_school"),c("road_widths"),c("road_speeds"),c("pavement_widths"),c("gradient"),c("gradient_arrows"),c("rights_of_way"),c("user_data_lines"),c("education"),c("hospitals"),c("sports_spaces"),c("railway_stations"),c("cycle_parking"),c("crossings-lines"),c("crossings-points"),c("vehicle_counts"),c("stats19"),c("bus_stops"),c("user_data_points"),k("interventions-coverage-polygons-outlines"),k("interventions-polygons"),k("interventions-polygons-outlines"),k("hover-polygons"),c("atf-interventions-polygons"),c("finalInspections-interventions-polygons"),c("lcwip-interventions-polygons"),c("local-interventions-polygons"),c("atf-interventions-polygons-outlines"),c("finalInspections-interventions-polygons-outlines"),c("lcwip-interventions-polygons-outlines"),c("local-interventions-polygons-outlines"),k("hover-lines"),k("interventions-lines"),k("interventions-lines-endpoints"),c("atf-interventions-lines"),c("finalInspections-interventions-lines"),c("lcwip-interventions-lines"),c("local-interventions-lines"),c("atf-interventions-lines-endpoints"),c("finalInspections-interventions-lines-endpoints"),c("lcwip-interventions-lines-endpoints"),c("local-interventions-lines-endpoints"),k("hover-points"),k("interventions-points"),c("atf-interventions-points"),c("finalInspections-interventions-points"),c("lcwip-interventions-points"),c("local-interventions-points"),c("problems"),k("draw-split-route"),Ie("road_label"),xe(je($e("Road labels"))),k("boundary"),c("measurement-line"),k("georeferenced-image"),c("cover-interactive-layers")];function qt(e,t){let n=new Set(e.getStyle().layers.filter(r=>r.type=="line").map(r=>r.id));if(t=="dataviz")return["Road network","Path"].filter(r=>n.has(r));if(t=="hybrid")return["Path","Road","Tunnel"].filter(r=>n.has(r));if(t=="streets"){let r=[];for(let i of["road","bridge","tunnel"])for(let l of["link","minor","minor_construction","motorway","motorway_construction","motorway_link","path_pedestrian","secondary_tertiary","secondary_tertiary_construction","service_track","service_track_construction","street","trunk_primary","trunk_primary_construction","trunk_primary_link"])r.push(`${i}_${l}`);return r.filter(i=>n.has(i))}return t=="uk-openzoomstack-light"?e.getStyle().layers.filter(r=>r["source-layer"]=="roads"&&r.type=="line").map(r=>r.id):t=="openstreetmap"?e.getStyle().layers.filter(r=>r["source-layer"]=="transportation"&&r.type=="line"&&!r.id.endsWith(" outline")).map(r=>r.id):[]}function Nt(e,t,n){let r=["step",e];for(let i=1;i<t.length;i++)r.push(n[i-1]),r.push(t[i]);return r.push(n[n.length-1]),r}function Zt(e){return e<1e3?Math.round(e)+" m":(e/1e3).toFixed(1)+"km"}function zt(e){return Qe({layerZorder:tt},e)}var rt=Object.defineProperty,F=(e,t)=>rt(e,"name",{value:t,configurable:!0});function j(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}F(j,"getCoord");function nt(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}F(nt,"getCoords");function me(e){if(e.length>1&&le(e[0])&&le(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return me(e[0]);throw new Error("coordinates must only contain numbers")}F(me,"containsNumber");function it(e,t,n){if(!t||!n)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+n+": must be a "+t+", given "+e.type)}F(it,"geojsonType");function lt(e,t,n){if(!e)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+n+": must be a "+t+", given "+e.geometry.type)}F(lt,"featureOf");function ot(e,t,n){if(!e)throw new Error("No featureCollection passed");if(!n)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+n+", FeatureCollection required");for(const r of e.features){if(!r||r.type!=="Feature"||!r.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!r.geometry||r.geometry.type!==t)throw new Error("Invalid input to "+n+": must be a "+t+", given "+r.geometry.type)}}F(ot,"collectionOf");function at(e){return e.type==="Feature"?e.geometry:e}F(at,"getGeom");function st(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}F(st,"getType");var ut=Object.defineProperty,ft=(e,t)=>ut(e,"name",{value:t,configurable:!0});function ye(e,t,n={}){var r=j(e),i=j(t),l=Z(i[1]-r[1]),o=Z(i[0]-r[0]),u=Z(r[1]),s=Z(i[1]),d=Math.pow(Math.sin(l/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(u)*Math.cos(s);return Ae(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),n.units)}ft(ye,"distance");var ct=Object.defineProperty,y=(e,t)=>ct(e,"name",{value:t,configurable:!0});function N(e,t,n){if(e!==null)for(var r,i,l,o,u,s,d,g=0,f=0,_,a=e.type,h=a==="FeatureCollection",p=a==="Feature",v=h?e.features.length:1,P=0;P<v;P++){d=h?e.features[P].geometry:p?e.geometry:e,_=d?d.type==="GeometryCollection":!1,u=_?d.geometries.length:1;for(var Q=0;Q<u;Q++){var M=0,G=0;if(o=_?d.geometries[Q]:d,o!==null){s=o.coordinates;var R=o.type;switch(g=n&&(R==="Polygon"||R==="MultiPolygon")?1:0,R){case null:break;case"Point":if(t(s,f,P,M,G)===!1)return!1;f++,M++;break;case"LineString":case"MultiPoint":for(r=0;r<s.length;r++){if(t(s[r],f,P,M,G)===!1)return!1;f++,R==="MultiPoint"&&M++}R==="LineString"&&M++;break;case"Polygon":case"MultiLineString":for(r=0;r<s.length;r++){for(i=0;i<s[r].length-g;i++){if(t(s[r][i],f,P,M,G)===!1)return!1;f++}R==="MultiLineString"&&M++,R==="Polygon"&&G++}R==="Polygon"&&M++;break;case"MultiPolygon":for(r=0;r<s.length;r++){for(G=0,i=0;i<s[r].length;i++){for(l=0;l<s[r][i].length-g;l++){if(t(s[r][i][l],f,P,M,G)===!1)return!1;f++}G++}M++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(N(o.geometries[r],t,n)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}y(N,"coordEach");function ht(e,t,n,r){var i=n;return N(e,function(l,o,u,s,d){o===0&&n===void 0?i=l:i=t(i,l,o,u,s,d)},r),i}y(ht,"coordReduce");function ve(e,t){var n;switch(e.type){case"FeatureCollection":for(n=0;n<e.features.length&&t(e.features[n].properties,n)!==!1;n++);break;case"Feature":t(e.properties,0);break}}y(ve,"propEach");function dt(e,t,n){var r=n;return ve(e,function(i,l){l===0&&n===void 0?r=i:r=t(r,i,l)}),r}y(dt,"propReduce");function be(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var n=0;n<e.features.length&&t(e.features[n],n)!==!1;n++);}y(be,"featureEach");function gt(e,t,n){var r=n;return be(e,function(i,l){l===0&&n===void 0?r=i:r=t(r,i,l)}),r}y(gt,"featureReduce");function _t(e){var t=[];return N(e,function(n){t.push(n)}),t}y(_t,"coordAll");function ne(e,t){var n,r,i,l,o,u,s,d,g,f,_=0,a=e.type==="FeatureCollection",h=e.type==="Feature",p=a?e.features.length:1;for(n=0;n<p;n++){for(u=a?e.features[n].geometry:h?e.geometry:e,d=a?e.features[n].properties:h?e.properties:{},g=a?e.features[n].bbox:h?e.bbox:void 0,f=a?e.features[n].id:h?e.id:void 0,s=u?u.type==="GeometryCollection":!1,o=s?u.geometries.length:1,i=0;i<o;i++){if(l=s?u.geometries[i]:u,l===null){if(t(null,_,d,g,f)===!1)return!1;continue}switch(l.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(l,_,d,g,f)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<l.geometries.length;r++)if(t(l.geometries[r],_,d,g,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}_++}}y(ne,"geomEach");function pt(e,t,n){var r=n;return ne(e,function(i,l,o,u,s){l===0&&n===void 0?r=i:r=t(r,i,l,o,u,s)}),r}y(pt,"geomReduce");function H(e,t){ne(e,function(n,r,i,l,o){var u=n===null?null:n.type;switch(u){case null:case"Point":case"LineString":case"Polygon":return t(oe(n,i,{bbox:l,id:o}),r,0)===!1?!1:void 0}var s;switch(u){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon";break}for(var d=0;d<n.coordinates.length;d++){var g=n.coordinates[d],f={type:s,coordinates:g};if(t(oe(f,i),r,d)===!1)return!1}})}y(H,"flattenEach");function mt(e,t,n){var r=n;return H(e,function(i,l,o){l===0&&o===0&&n===void 0?r=i:r=t(r,i,l,o)}),r}y(mt,"flattenReduce");function we(e,t){H(e,function(n,r,i){var l=0;if(n.geometry){var o=n.geometry.type;if(!(o==="Point"||o==="MultiPoint")){var u,s=0,d=0,g=0;if(N(n,function(f,_,a,h,p){if(u===void 0||r>s||h>d||p>g){u=f,s=r,d=h,g=p,l=0;return}var v=B([u,f],n.properties);if(t(v,r,i,p,l)===!1)return!1;l++,u=f})===!1)return!1}}})}y(we,"segmentEach");function ke(e,t,n){var r=n,i=!1;return we(e,function(l,o,u,s,d){i===!1&&n===void 0?r=l:r=t(r,l,o,u,s,d),i=!0}),r}y(ke,"segmentReduce");function Pe(e,t){if(!e)throw new Error("geojson is required");H(e,function(n,r,i){if(n.geometry!==null){var l=n.geometry.type,o=n.geometry.coordinates;switch(l){case"LineString":if(t(n,r,i,0,0)===!1)return!1;break;case"Polygon":for(var u=0;u<o.length;u++)if(t(B(o[u],n.properties),r,i,u)===!1)return!1;break}}})}y(Pe,"lineEach");function yt(e,t,n){var r=n;return Pe(e,function(i,l,o,u){l===0&&n===void 0?r=i:r=t(r,i,l,o,u)}),r}y(yt,"lineReduce");function vt(e,t){if(t=t||{},!_e(t))throw new Error("options is invalid");var n=t.featureIndex||0,r=t.multiFeatureIndex||0,i=t.geometryIndex||0,l=t.segmentIndex||0,o=t.properties,u;switch(e.type){case"FeatureCollection":n<0&&(n=e.features.length+n),o=o||e.features[n].properties,u=e.features[n].geometry;break;case"Feature":o=o||e.properties,u=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":u=e;break;default:throw new Error("geojson is invalid")}if(u===null)return null;var s=u.coordinates;switch(u.type){case"Point":case"MultiPoint":return null;case"LineString":return l<0&&(l=s.length+l-1),B([s[l],s[l+1]],o,t);case"Polygon":return i<0&&(i=s.length+i),l<0&&(l=s[i].length+l-1),B([s[i][l],s[i][l+1]],o,t);case"MultiLineString":return r<0&&(r=s.length+r),l<0&&(l=s[r].length+l-1),B([s[r][l],s[r][l+1]],o,t);case"MultiPolygon":return r<0&&(r=s.length+r),i<0&&(i=s[r].length+i),l<0&&(l=s[r][i].length-l-1),B([s[r][i][l],s[r][i][l+1]],o,t)}throw new Error("geojson is invalid")}y(vt,"findSegment");function bt(e,t){if(t=t||{},!_e(t))throw new Error("options is invalid");var n=t.featureIndex||0,r=t.multiFeatureIndex||0,i=t.geometryIndex||0,l=t.coordIndex||0,o=t.properties,u;switch(e.type){case"FeatureCollection":n<0&&(n=e.features.length+n),o=o||e.features[n].properties,u=e.features[n].geometry;break;case"Feature":o=o||e.properties,u=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":u=e;break;default:throw new Error("geojson is invalid")}if(u===null)return null;var s=u.coordinates;switch(u.type){case"Point":return A(s,o,t);case"MultiPoint":return r<0&&(r=s.length+r),A(s[r],o,t);case"LineString":return l<0&&(l=s.length+l),A(s[l],o,t);case"Polygon":return i<0&&(i=s.length+i),l<0&&(l=s[i].length+l),A(s[i][l],o,t);case"MultiLineString":return r<0&&(r=s.length+r),l<0&&(l=s[r].length+l),A(s[r][l],o,t);case"MultiPolygon":return r<0&&(r=s.length+r),i<0&&(i=s[r].length+i),l<0&&(l=s[r][i].length-l),A(s[r][i][l],o,t)}throw new Error("geojson is invalid")}y(bt,"findPoint");var wt=Object.defineProperty,kt=(e,t)=>wt(e,"name",{value:t,configurable:!0});function Me(e,t={}){return ke(e,(n,r)=>{const i=r.geometry.coordinates;return n+ye(i[0],i[1],t)},0)}kt(Me,"length");var Dt=Me;const Jt={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},Tt=10,Ut=10;function Kt(){return Pt(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"])}function Pt(e){return e[Math.floor(Math.random()*e.length)]}function de(e){let t,n;return t=new ze({props:{$$slots:{default:[Mt]},$$scope:{ctx:e}}}),t.$on("click",e[5]),{c(){x(t.$$.fragment)},m(r,i){ee(t,r,i),n=!0},p(r,i){const l={};i&128&&(l.$$scope={dirty:i,ctx:r}),t.$set(l)},i(r){n||(E(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function Mt(e){let t;return{c(){t=X("X")},m(n,r){C(n,t,r)},d(n){n&&S(t)}}}function Et(e){let t,n,r,i,l,o,u,s,d,g,f=e[2]&&de(e);const _=e[4].default,a=D(_,e,e[7],null);return{c(){t=w("div"),n=w("div"),r=w("div"),i=w("h1"),l=X(e[1]),o=O(),f&&f.c(),u=O(),a&&a.c(),m(i,"class","govuk-heading-l"),Y(r,"display","flex"),Y(r,"justify-content","space-between"),m(n,"class","content centered-fullscreen svelte-1st8ub0"),m(t,"class","background svelte-1st8ub0"),z(t,"open",e[0]),z(t,"closed",!e[0])},m(h,p){C(h,t,p),b(t,n),b(n,r),b(r,i),b(i,l),b(r,o),f&&f.m(r,null),b(n,u),a&&a.m(n,null),s=!0,d||(g=[q(n,"click",Be(Ct)),q(t,"click",e[6])],d=!0)},p(h,[p]){(!s||p&2)&&re(l,h[1]),h[2]?f?(f.p(h,p),p&4&&E(f,1)):(f=de(h),f.c(),E(f,1),f.m(r,null)):f&&(Oe(),L(f,1,1,()=>{f=null}),qe()),a&&a.p&&(!s||p&128)&&J(a,_,h,h[7],s?U(_,h[7],p,null):T(h[7]),null),(!s||p&1)&&z(t,"open",h[0]),(!s||p&1)&&z(t,"closed",!h[0])},i(h){s||(E(f),E(a,h),s=!0)},o(h){L(f),L(a,h),s=!1},d(h){h&&S(t),f&&f.d(),a&&a.d(h),d=!1,$(g)}}}const Ct=()=>null;function St(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:l}=t,{open:o=!1}=t,{displayEscapeButton:u=!0}=t,{canCloseByClickingBackground:s=!0}=t;const d=()=>n(0,o=!1),g=()=>{s&&n(0,o=!1)};return e.$$set=f=>{"title"in f&&n(1,l=f.title),"open"in f&&n(0,o=f.open),"displayEscapeButton"in f&&n(2,u=f.displayEscapeButton),"canCloseByClickingBackground"in f&&n(3,s=f.canCloseByClickingBackground),"$$scope"in f&&n(7,i=f.$$scope)},[o,l,u,s,r,d,g,i]}class Vt extends K{constructor(t){super(),V(this,t,St,Et,W,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}export{At as C,Vt as M,Ot as S,Bt as a,tt as b,zt as c,Jt as d,Nt as e,Tt as f,qt as g,Ut as h,Qe as l,He as m,Zt as p,Kt as r,Dt as t};
