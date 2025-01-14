import{S as K,i as V,s as X,J as D,e as w,d as p,f as C,g as b,K as J,L as T,M as U,h as E,j as L,k as S,a as O,b as Y,aa as q,ab as $,aV as Ee,N as ge,c as x,m as ee,l as te,G as Ce,aZ as Se,a_ as ie,y as Le,a$ as Re,t as H,A as re,a9 as I,Z as Fe,aA as Ge,al as le,am as Z,ao as Ae,ar as ae,at as B,au as _e,aq as A,ag as z,aR as Be,C as Oe,v as qe}from"./index-d46e9385.js";import{v as me,a as Ne,E as Ze}from"./Radio-d124c611.js";import{e as oe}from"./files-5cab43b5.js";import{S as ze}from"./SecondaryButton-6ca3f89a.js";function De(e){let t,n,r;const i=e[3].default,l=D(i,e,e[2],null);return{c(){t=w("fieldset"),n=w("div"),l&&l.c(),p(n,"class",e[0]),p(n,"data-module","govuk-checkboxes"),p(t,"class","govuk-fieldset")},m(a,u){C(a,t,u),b(t,n),l&&l.m(n,null),r=!0},p(a,[u]){l&&l.p&&(!r||u&4)&&J(l,i,a,a[2],r?U(i,a[2],u,null):T(a[2]),null)},i(a){r||(E(l,a),r=!0)},o(a){L(l,a),r=!1},d(a){a&&S(t),l&&l.d(a)}}}function Je(e,t,n){let{$$slots:r={},$$scope:i}=t,{small:l=!1}=t,a=l?"govuk-checkboxes--small":"govuk-checkboxes";return e.$$set=u=>{"small"in u&&n(1,l=u.small),"$$scope"in u&&n(2,i=u.$$scope)},[a,l,i,r]}class At extends K{constructor(t){super(),V(this,t,Je,De,X,{small:1})}}const Te=e=>({}),se=e=>({});function Ue(e){let t,n,r,i,l,a,u,s,d;const g=e[5].default,f=D(g,e,e[4],null),_=e[5].right,o=D(_,e,e[4],se);return{c(){t=w("div"),n=w("input"),r=O(),i=w("label"),f&&f.c(),l=O(),a=w("span"),o&&o.c(),p(n,"type","checkbox"),p(n,"class","govuk-checkboxes__input"),p(n,"id",e[3]),p(i,"class","govuk-label govuk-checkboxes__label"),p(i,"for",e[3]),p(i,"title",e[1]),Y(a,"float","right"),p(t,"class","govuk-checkboxes__item"),p(t,"style",e[2])},m(c,m){C(c,t,m),b(t,n),n.checked=e[0],b(t,r),b(t,i),f&&f.m(i,null),b(t,l),b(t,a),o&&o.m(a,null),u=!0,s||(d=[q(n,"change",e[7]),q(n,"change",e[6])],s=!0)},p(c,[m]){m&1&&(n.checked=c[0]),f&&f.p&&(!u||m&16)&&J(f,g,c,c[4],u?U(g,c[4],m,null):T(c[4]),null),(!u||m&2)&&p(i,"title",c[1]),o&&o.p&&(!u||m&16)&&J(o,_,c,c[4],u?U(_,c[4],m,Te):T(c[4]),se)},i(c){u||(E(f,c),E(o,c),u=!0)},o(c){L(f,c),L(o,c),u=!1},d(c){c&&S(t),f&&f.d(c),o&&o.d(c),s=!1,$(d)}}}function Ke(e,t,n){let{$$slots:r={},$$scope:i}=t;const l=Ee(r);let{checked:a}=t,{hint:u=null}=t,d=l.right!==void 0?"float: none":"",g=me();function f(o){ge.call(this,e,o)}function _(){a=this.checked,n(0,a)}return e.$$set=o=>{"checked"in o&&n(0,a=o.checked),"hint"in o&&n(1,u=o.hint),"$$scope"in o&&n(4,i=o.$$scope)},[a,u,d,g,i,r,f,_]}class Bt extends K{constructor(t){super(),V(this,t,Ke,Ue,X,{checked:0,hint:1})}}function ue(e,t,n){const r=e.slice();return r[10]=t[n][0],r[11]=t[n][1],r}function fe(e){let t,n;return{c(){t=w("div"),n=H(e[2]),p(t,"class","govuk-hint")},m(r,i){C(r,t,i),b(t,n)},p(r,i){i&4&&re(n,r[2])},d(r){r&&S(t)}}}function ce(e){let t;return{c(){t=w("option"),t.__value="",I(t,t.__value)},m(n,r){C(n,t,r)},d(n){n&&S(t)}}}function he(e){let t,n=e[11]+"",r,i;return{c(){t=w("option"),r=H(n),t.__value=i=e[10],I(t,t.__value)},m(l,a){C(l,t,a),b(t,r)},p(l,a){a&8&&n!==(n=l[11]+"")&&re(r,n),a&8&&i!==(i=l[10])&&(t.__value=i,I(t,t.__value))},d(l){l&&S(t)}}}function Ve(e){let t,n,r,i,l,a,u,s;t=new Ze({props:{errorMessage:e[6]}});let d=e[2]&&fe(e),g=e[4]&&ce(),f=oe(e[3]),_=[];for(let o=0;o<f.length;o+=1)_[o]=he(ue(e,f,o));return{c(){x(t.$$.fragment),n=O(),d&&d.c(),r=O(),i=w("select"),g&&g.c(),l=Ce();for(let o=0;o<_.length;o+=1)_[o].c();p(i,"class","govuk-select"),p(i,"id",e[7]),i.disabled=e[5],e[0]===void 0&&Se(()=>e[9].call(i))},m(o,c){ee(t,o,c),C(o,n,c),d&&d.m(o,c),C(o,r,c),C(o,i,c),g&&g.m(i,null),b(i,l);for(let m=0;m<_.length;m+=1)_[m]&&_[m].m(i,null);ie(i,e[0],!0),a=!0,u||(s=[q(i,"change",e[9]),q(i,"change",e[8])],u=!0)},p(o,c){const m={};if(c&64&&(m.errorMessage=o[6]),t.$set(m),o[2]?d?d.p(o,c):(d=fe(o),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null),o[4]?g||(g=ce(),g.c(),g.m(i,l)):g&&(g.d(1),g=null),c&8){f=oe(o[3]);let v;for(v=0;v<f.length;v+=1){const P=ue(o,f,v);_[v]?_[v].p(P,c):(_[v]=he(P),_[v].c(),_[v].m(i,null))}for(;v<_.length;v+=1)_[v].d(1);_.length=f.length}(!a||c&32)&&(i.disabled=o[5]),c&9&&ie(i,o[0])},i(o){a||(E(t.$$.fragment,o),a=!0)},o(o){L(t.$$.fragment,o),a=!1},d(o){o&&(S(n),S(r),S(i)),te(t,o),d&&d.d(o),g&&g.d(),Le(_,o),u=!1,$(s)}}}function Xe(e){let t,n;return t=new Ne({props:{label:e[1],id:e[7],$$slots:{default:[Ve]},$$scope:{ctx:e}}}),{c(){x(t.$$.fragment)},m(r,i){ee(t,r,i),n=!0},p(r,[i]){const l={};i&2&&(l.label=r[1]),i&16509&&(l.$$scope={dirty:i,ctx:r}),t.$set(l)},i(r){n||(E(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function He(e,t,n){let{label:r}=t,{hint:i=""}=t,{choices:l}=t,{emptyOption:a=!1}=t,{disabled:u=!1}=t,{errorMessage:s=""}=t,{value:d}=t,g=me();function f(o){ge.call(this,e,o)}function _(){d=Re(this),n(0,d),n(3,l)}return e.$$set=o=>{"label"in o&&n(1,r=o.label),"hint"in o&&n(2,i=o.hint),"choices"in o&&n(3,l=o.choices),"emptyOption"in o&&n(4,a=o.emptyOption),"disabled"in o&&n(5,u=o.disabled),"errorMessage"in o&&n(6,s=o.errorMessage),"value"in o&&n(0,d=o.value)},[d,r,i,l,a,u,s,g,f,_]}class Ot extends K{constructor(t){super(),V(this,t,He,Xe,X,{label:1,hint:2,choices:3,emptyOption:4,disabled:5,errorMessage:6,value:0})}}let Qe=Fe(null);function We(e,t){return{id:t,beforeId:Ye(e,t)}}function Ye(e,t){let n=Ge(Qe);if(!n){console.warn(`getBeforeId(${t}) called before map is ready. Z-ordering may be incorrect.`);return}let r,i=!1;for(let l=e.layerZorder.length-1;l>=0;l--){let a=e.layerZorder[l];if(a==t){i=!0;break}n.getLayer(a)&&(r=a)}if(!i)throw new Error(`Layer ID ${t} not defined in layerZorder`);return r}let h=e=>e,k=e=>e,Ie=e=>e,je=e=>e,$e=e=>e,xe=e=>e,et=e=>e,tt=[et("raster-basemap"),h("parliamentary_constituencies"),h("parliamentary_constituencies-outline"),h("wards"),h("wards-outline"),h("combined_authorities"),h("combined_authorities-outline"),h("local_authority_districts"),h("local_authority_districts-outline"),h("local_planning_authorities"),h("local_planning_authorities-outline"),h("census_output_areas"),h("census_output_areas-outline"),h("imd"),h("imd-outline"),h("ruc"),h("ruc-outline"),h("pollution"),h("road_noise"),h("user_data_polygons"),h("user_data_polygons-outline"),h("mrn"),h("srn"),h("bus_routes"),h("trams"),h("national_cycle_network"),h("cycle_paths"),h("pct_commute"),h("pct_school"),h("road_widths"),h("road_speeds"),h("pavement_widths"),h("gradient"),h("gradient_arrows"),h("rights_of_way"),h("user_data_lines"),h("education"),h("hospitals"),h("sports_spaces"),h("railway_stations"),h("cycle_parking"),h("crossings-lines"),h("crossings-points"),h("vehicle_counts"),h("stats19"),h("bus_stops"),h("user_data_points"),k("interventions-coverage-polygons-outlines"),k("interventions-polygons"),k("interventions-polygons-outlines"),k("hover-polygons"),h("atf-interventions-polygons"),h("lcwip-interventions-polygons"),h("local-interventions-polygons"),h("atf-interventions-polygons-outlines"),h("lcwip-interventions-polygons-outlines"),h("local-interventions-polygons-outlines"),k("hover-lines"),k("interventions-lines"),k("interventions-lines-endpoints"),h("atf-interventions-lines"),h("lcwip-interventions-lines"),h("local-interventions-lines"),h("atf-interventions-lines-endpoints"),h("lcwip-interventions-lines-endpoints"),h("local-interventions-lines-endpoints"),k("hover-points"),k("interventions-points"),h("atf-interventions-points"),h("lcwip-interventions-points"),h("local-interventions-points"),h("problems"),k("draw-split-route"),Ie("road_label"),xe(je($e("Road labels"))),k("boundary"),h("measurement-line"),k("georeferenced-image"),h("cover-interactive-layers")];function qt(e,t){let n=new Set(e.getStyle().layers.filter(r=>r.type=="line").map(r=>r.id));if(t=="dataviz")return["Road network","Path"].filter(r=>n.has(r));if(t=="hybrid")return["Path","Road","Tunnel"].filter(r=>n.has(r));if(t=="streets"){let r=[];for(let i of["road","bridge","tunnel"])for(let l of["link","minor","minor_construction","motorway","motorway_construction","motorway_link","path_pedestrian","secondary_tertiary","secondary_tertiary_construction","service_track","service_track_construction","street","trunk_primary","trunk_primary_construction","trunk_primary_link"])r.push(`${i}_${l}`);return r.filter(i=>n.has(i))}return t=="uk-openzoomstack-light"?e.getStyle().layers.filter(r=>r["source-layer"]=="roads"&&r.type=="line").map(r=>r.id):[]}function Nt(e,t,n){let r=["step",e];for(let i=1;i<t.length;i++)r.push(n[i-1]),r.push(t[i]);return r.push(n[n.length-1]),r}function Zt(e){return e<1e3?Math.round(e)+" m":(e/1e3).toFixed(1)+"km"}function zt(e){return We({layerZorder:tt},e)}var rt=Object.defineProperty,F=(e,t)=>rt(e,"name",{value:t,configurable:!0});function j(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}F(j,"getCoord");function nt(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}F(nt,"getCoords");function pe(e){if(e.length>1&&le(e[0])&&le(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return pe(e[0]);throw new Error("coordinates must only contain numbers")}F(pe,"containsNumber");function it(e,t,n){if(!t||!n)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+n+": must be a "+t+", given "+e.type)}F(it,"geojsonType");function lt(e,t,n){if(!e)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!e||e.type!=="Feature"||!e.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+n+": must be a "+t+", given "+e.geometry.type)}F(lt,"featureOf");function at(e,t,n){if(!e)throw new Error("No featureCollection passed");if(!n)throw new Error(".collectionOf() requires a name");if(!e||e.type!=="FeatureCollection")throw new Error("Invalid input to "+n+", FeatureCollection required");for(const r of e.features){if(!r||r.type!=="Feature"||!r.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!r.geometry||r.geometry.type!==t)throw new Error("Invalid input to "+n+": must be a "+t+", given "+r.geometry.type)}}F(at,"collectionOf");function ot(e){return e.type==="Feature"?e.geometry:e}F(ot,"getGeom");function st(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}F(st,"getType");var ut=Object.defineProperty,ft=(e,t)=>ut(e,"name",{value:t,configurable:!0});function ye(e,t,n={}){var r=j(e),i=j(t),l=Z(i[1]-r[1]),a=Z(i[0]-r[0]),u=Z(r[1]),s=Z(i[1]),d=Math.pow(Math.sin(l/2),2)+Math.pow(Math.sin(a/2),2)*Math.cos(u)*Math.cos(s);return Ae(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),n.units)}ft(ye,"distance");var ct=Object.defineProperty,y=(e,t)=>ct(e,"name",{value:t,configurable:!0});function N(e,t,n){if(e!==null)for(var r,i,l,a,u,s,d,g=0,f=0,_,o=e.type,c=o==="FeatureCollection",m=o==="Feature",v=c?e.features.length:1,P=0;P<v;P++){d=c?e.features[P].geometry:m?e.geometry:e,_=d?d.type==="GeometryCollection":!1,u=_?d.geometries.length:1;for(var W=0;W<u;W++){var M=0,G=0;if(a=_?d.geometries[W]:d,a!==null){s=a.coordinates;var R=a.type;switch(g=n&&(R==="Polygon"||R==="MultiPolygon")?1:0,R){case null:break;case"Point":if(t(s,f,P,M,G)===!1)return!1;f++,M++;break;case"LineString":case"MultiPoint":for(r=0;r<s.length;r++){if(t(s[r],f,P,M,G)===!1)return!1;f++,R==="MultiPoint"&&M++}R==="LineString"&&M++;break;case"Polygon":case"MultiLineString":for(r=0;r<s.length;r++){for(i=0;i<s[r].length-g;i++){if(t(s[r][i],f,P,M,G)===!1)return!1;f++}R==="MultiLineString"&&M++,R==="Polygon"&&G++}R==="Polygon"&&M++;break;case"MultiPolygon":for(r=0;r<s.length;r++){for(G=0,i=0;i<s[r].length;i++){for(l=0;l<s[r][i].length-g;l++){if(t(s[r][i][l],f,P,M,G)===!1)return!1;f++}G++}M++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(N(a.geometries[r],t,n)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}y(N,"coordEach");function ht(e,t,n,r){var i=n;return N(e,function(l,a,u,s,d){a===0&&n===void 0?i=l:i=t(i,l,a,u,s,d)},r),i}y(ht,"coordReduce");function ve(e,t){var n;switch(e.type){case"FeatureCollection":for(n=0;n<e.features.length&&t(e.features[n].properties,n)!==!1;n++);break;case"Feature":t(e.properties,0);break}}y(ve,"propEach");function dt(e,t,n){var r=n;return ve(e,function(i,l){l===0&&n===void 0?r=i:r=t(r,i,l)}),r}y(dt,"propReduce");function be(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var n=0;n<e.features.length&&t(e.features[n],n)!==!1;n++);}y(be,"featureEach");function gt(e,t,n){var r=n;return be(e,function(i,l){l===0&&n===void 0?r=i:r=t(r,i,l)}),r}y(gt,"featureReduce");function _t(e){var t=[];return N(e,function(n){t.push(n)}),t}y(_t,"coordAll");function ne(e,t){var n,r,i,l,a,u,s,d,g,f,_=0,o=e.type==="FeatureCollection",c=e.type==="Feature",m=o?e.features.length:1;for(n=0;n<m;n++){for(u=o?e.features[n].geometry:c?e.geometry:e,d=o?e.features[n].properties:c?e.properties:{},g=o?e.features[n].bbox:c?e.bbox:void 0,f=o?e.features[n].id:c?e.id:void 0,s=u?u.type==="GeometryCollection":!1,a=s?u.geometries.length:1,i=0;i<a;i++){if(l=s?u.geometries[i]:u,l===null){if(t(null,_,d,g,f)===!1)return!1;continue}switch(l.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(l,_,d,g,f)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<l.geometries.length;r++)if(t(l.geometries[r],_,d,g,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}_++}}y(ne,"geomEach");function mt(e,t,n){var r=n;return ne(e,function(i,l,a,u,s){l===0&&n===void 0?r=i:r=t(r,i,l,a,u,s)}),r}y(mt,"geomReduce");function Q(e,t){ne(e,function(n,r,i,l,a){var u=n===null?null:n.type;switch(u){case null:case"Point":case"LineString":case"Polygon":return t(ae(n,i,{bbox:l,id:a}),r,0)===!1?!1:void 0}var s;switch(u){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon";break}for(var d=0;d<n.coordinates.length;d++){var g=n.coordinates[d],f={type:s,coordinates:g};if(t(ae(f,i),r,d)===!1)return!1}})}y(Q,"flattenEach");function pt(e,t,n){var r=n;return Q(e,function(i,l,a){l===0&&a===0&&n===void 0?r=i:r=t(r,i,l,a)}),r}y(pt,"flattenReduce");function we(e,t){Q(e,function(n,r,i){var l=0;if(n.geometry){var a=n.geometry.type;if(!(a==="Point"||a==="MultiPoint")){var u,s=0,d=0,g=0;if(N(n,function(f,_,o,c,m){if(u===void 0||r>s||c>d||m>g){u=f,s=r,d=c,g=m,l=0;return}var v=B([u,f],n.properties);if(t(v,r,i,m,l)===!1)return!1;l++,u=f})===!1)return!1}}})}y(we,"segmentEach");function ke(e,t,n){var r=n,i=!1;return we(e,function(l,a,u,s,d){i===!1&&n===void 0?r=l:r=t(r,l,a,u,s,d),i=!0}),r}y(ke,"segmentReduce");function Pe(e,t){if(!e)throw new Error("geojson is required");Q(e,function(n,r,i){if(n.geometry!==null){var l=n.geometry.type,a=n.geometry.coordinates;switch(l){case"LineString":if(t(n,r,i,0,0)===!1)return!1;break;case"Polygon":for(var u=0;u<a.length;u++)if(t(B(a[u],n.properties),r,i,u)===!1)return!1;break}}})}y(Pe,"lineEach");function yt(e,t,n){var r=n;return Pe(e,function(i,l,a,u){l===0&&n===void 0?r=i:r=t(r,i,l,a,u)}),r}y(yt,"lineReduce");function vt(e,t){if(t=t||{},!_e(t))throw new Error("options is invalid");var n=t.featureIndex||0,r=t.multiFeatureIndex||0,i=t.geometryIndex||0,l=t.segmentIndex||0,a=t.properties,u;switch(e.type){case"FeatureCollection":n<0&&(n=e.features.length+n),a=a||e.features[n].properties,u=e.features[n].geometry;break;case"Feature":a=a||e.properties,u=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":u=e;break;default:throw new Error("geojson is invalid")}if(u===null)return null;var s=u.coordinates;switch(u.type){case"Point":case"MultiPoint":return null;case"LineString":return l<0&&(l=s.length+l-1),B([s[l],s[l+1]],a,t);case"Polygon":return i<0&&(i=s.length+i),l<0&&(l=s[i].length+l-1),B([s[i][l],s[i][l+1]],a,t);case"MultiLineString":return r<0&&(r=s.length+r),l<0&&(l=s[r].length+l-1),B([s[r][l],s[r][l+1]],a,t);case"MultiPolygon":return r<0&&(r=s.length+r),i<0&&(i=s[r].length+i),l<0&&(l=s[r][i].length-l-1),B([s[r][i][l],s[r][i][l+1]],a,t)}throw new Error("geojson is invalid")}y(vt,"findSegment");function bt(e,t){if(t=t||{},!_e(t))throw new Error("options is invalid");var n=t.featureIndex||0,r=t.multiFeatureIndex||0,i=t.geometryIndex||0,l=t.coordIndex||0,a=t.properties,u;switch(e.type){case"FeatureCollection":n<0&&(n=e.features.length+n),a=a||e.features[n].properties,u=e.features[n].geometry;break;case"Feature":a=a||e.properties,u=e.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":u=e;break;default:throw new Error("geojson is invalid")}if(u===null)return null;var s=u.coordinates;switch(u.type){case"Point":return A(s,a,t);case"MultiPoint":return r<0&&(r=s.length+r),A(s[r],a,t);case"LineString":return l<0&&(l=s.length+l),A(s[l],a,t);case"Polygon":return i<0&&(i=s.length+i),l<0&&(l=s[i].length+l),A(s[i][l],a,t);case"MultiLineString":return r<0&&(r=s.length+r),l<0&&(l=s[r].length+l),A(s[r][l],a,t);case"MultiPolygon":return r<0&&(r=s.length+r),i<0&&(i=s[r].length+i),l<0&&(l=s[r][i].length-l),A(s[r][i][l],a,t)}throw new Error("geojson is invalid")}y(bt,"findPoint");var wt=Object.defineProperty,kt=(e,t)=>wt(e,"name",{value:t,configurable:!0});function Me(e,t={}){return ke(e,(n,r)=>{const i=r.geometry.coordinates;return n+ye(i[0],i[1],t)},0)}kt(Me,"length");var Dt=Me;const Jt={area:"#D94324",route:"#555F5E",crossing:"#4daf4a",other:"#984ea3",hovering:"black",lineEndpointColor:"black",streetview:"blue",measuringLine:"cyan"},Tt=10,Ut=10;function Kt(){return Pt(["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"])}function Pt(e){return e[Math.floor(Math.random()*e.length)]}function de(e){let t,n;return t=new ze({props:{$$slots:{default:[Mt]},$$scope:{ctx:e}}}),t.$on("click",e[5]),{c(){x(t.$$.fragment)},m(r,i){ee(t,r,i),n=!0},p(r,i){const l={};i&128&&(l.$$scope={dirty:i,ctx:r}),t.$set(l)},i(r){n||(E(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function Mt(e){let t;return{c(){t=H("X")},m(n,r){C(n,t,r)},d(n){n&&S(t)}}}function Et(e){let t,n,r,i,l,a,u,s,d,g,f=e[2]&&de(e);const _=e[4].default,o=D(_,e,e[7],null);return{c(){t=w("div"),n=w("div"),r=w("div"),i=w("h1"),l=H(e[1]),a=O(),f&&f.c(),u=O(),o&&o.c(),p(i,"class","govuk-heading-l"),Y(r,"display","flex"),Y(r,"justify-content","space-between"),p(n,"class","content centered-fullscreen svelte-1st8ub0"),p(t,"class","background svelte-1st8ub0"),z(t,"open",e[0]),z(t,"closed",!e[0])},m(c,m){C(c,t,m),b(t,n),b(n,r),b(r,i),b(i,l),b(r,a),f&&f.m(r,null),b(n,u),o&&o.m(n,null),s=!0,d||(g=[q(n,"click",Be(Ct)),q(t,"click",e[6])],d=!0)},p(c,[m]){(!s||m&2)&&re(l,c[1]),c[2]?f?(f.p(c,m),m&4&&E(f,1)):(f=de(c),f.c(),E(f,1),f.m(r,null)):f&&(Oe(),L(f,1,1,()=>{f=null}),qe()),o&&o.p&&(!s||m&128)&&J(o,_,c,c[7],s?U(_,c[7],m,null):T(c[7]),null),(!s||m&1)&&z(t,"open",c[0]),(!s||m&1)&&z(t,"closed",!c[0])},i(c){s||(E(f),E(o,c),s=!0)},o(c){L(f),L(o,c),s=!1},d(c){c&&S(t),f&&f.d(),o&&o.d(c),d=!1,$(g)}}}const Ct=()=>null;function St(e,t,n){let{$$slots:r={},$$scope:i}=t,{title:l}=t,{open:a=!1}=t,{displayEscapeButton:u=!0}=t,{canCloseByClickingBackground:s=!0}=t;const d=()=>n(0,a=!1),g=()=>{s&&n(0,a=!1)};return e.$$set=f=>{"title"in f&&n(1,l=f.title),"open"in f&&n(0,a=f.open),"displayEscapeButton"in f&&n(2,u=f.displayEscapeButton),"canCloseByClickingBackground"in f&&n(3,s=f.canCloseByClickingBackground),"$$scope"in f&&n(7,i=f.$$scope)},[a,l,u,s,r,d,g,i]}class Vt extends K{constructor(t){super(),V(this,t,St,Et,X,{title:1,open:0,displayEscapeButton:2,canCloseByClickingBackground:3})}}export{At as C,Vt as M,Ot as S,Bt as a,tt as b,zt as c,Jt as d,Nt as e,Tt as f,qt as g,Ut as h,We as l,Qe as m,Zt as p,Kt as r,Dt as t};
