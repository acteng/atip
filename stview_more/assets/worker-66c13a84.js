var Ae=Object.defineProperty;var Re=(h,w,E)=>w in h?Ae(h,w,{enumerable:!0,configurable:!0,writable:!0,value:E}):h[w]=E;var te=(h,w,E)=>(Re(h,typeof w!="symbol"?w+"":w,E),E);(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const h=Symbol("Comlink.proxy"),w=Symbol("Comlink.endpoint"),E=Symbol("Comlink.releaseProxy"),D=Symbol("Comlink.finalizer"),v=Symbol("Comlink.thrown"),G=e=>typeof e=="object"&&e!==null||typeof e=="function",ne={canHandle:e=>G(e)&&e[h],serialize(e){const{port1:t,port2:n}=new MessageChannel;return z(e,t),[n,[n]]},deserialize(e){return e.start(),se(e)}},re={canHandle:e=>G(e)&&v in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},J=new Map([["proxy",ne],["throw",re]]);function oe(e,t){for(const n of e)if(t===n||n==="*"||n instanceof RegExp&&n.test(t))return!0;return!1}function z(e,t=globalThis,n=["*"]){t.addEventListener("message",function r(o){if(!o||!o.data)return;if(!oe(n,o.origin)){console.warn(`Invalid origin '${o.origin}' for comlink proxy`);return}const{id:c,type:s,path:_}=Object.assign({path:[]},o.data),f=(o.data.argumentList||[]).map(S);let u;try{const l=_.slice(0,-1).reduce((d,j)=>d[j],e),m=_.reduce((d,j)=>d[j],e);switch(s){case"GET":u=m;break;case"SET":l[_.slice(-1)[0]]=S(o.data.value),u=!0;break;case"APPLY":u=m.apply(l,f);break;case"CONSTRUCT":{const d=new m(...f);u=ue(d)}break;case"ENDPOINT":{const{port1:d,port2:j}=new MessageChannel;z(e,j),u=fe(d,[d])}break;case"RELEASE":u=void 0;break;default:return}}catch(l){u={value:l,[v]:0}}Promise.resolve(u).catch(l=>({value:l,[v]:0})).then(l=>{const[m,d]=W(l);t.postMessage(Object.assign(Object.assign({},m),{id:c}),d),s==="RELEASE"&&(t.removeEventListener("message",r),Y(t),D in e&&typeof e[D]=="function"&&e[D]())}).catch(l=>{const[m,d]=W({value:new TypeError("Unserializable return value"),[v]:0});t.postMessage(Object.assign(Object.assign({},m),{id:c}),d)})}),t.start&&t.start()}function ie(e){return e.constructor.name==="MessagePort"}function Y(e){ie(e)&&e.close()}function se(e,t){return B(e,[],t)}function P(e){if(e)throw new Error("Proxy has been released and is not useable")}function X(e){return R(e,{type:"RELEASE"}).then(()=>{Y(e)})}const C=new WeakMap,N="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(C.get(e)||0)-1;C.set(e,t),t===0&&X(e)});function ae(e,t){const n=(C.get(t)||0)+1;C.set(t,n),N&&N.register(e,t,e)}function ce(e){N&&N.unregister(e)}function B(e,t=[],n=function(){}){let r=!1;const o=new Proxy(n,{get(c,s){if(P(r),s===E)return()=>{ce(o),X(e),r=!0};if(s==="then"){if(t.length===0)return{then:()=>o};const _=R(e,{type:"GET",path:t.map(f=>f.toString())}).then(S);return _.then.bind(_)}return B(e,[...t,s])},set(c,s,_){P(r);const[f,u]=W(_);return R(e,{type:"SET",path:[...t,s].map(l=>l.toString()),value:f},u).then(S)},apply(c,s,_){P(r);const f=t[t.length-1];if(f===w)return R(e,{type:"ENDPOINT"}).then(S);if(f==="bind")return B(e,t.slice(0,-1));const[u,l]=K(_);return R(e,{type:"APPLY",path:t.map(m=>m.toString()),argumentList:u},l).then(S)},construct(c,s){P(r);const[_,f]=K(s);return R(e,{type:"CONSTRUCT",path:t.map(u=>u.toString()),argumentList:_},f).then(S)}});return ae(o,e),o}function _e(e){return Array.prototype.concat.apply([],e)}function K(e){const t=e.map(W);return[t.map(n=>n[0]),_e(t.map(n=>n[1]))]}const Q=new WeakMap;function fe(e,t){return Q.set(e,t),e}function ue(e){return Object.assign(e,{[h]:!0})}function W(e){for(const[t,n]of J)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},Q.get(e)||[]]}function S(e){switch(e.type){case"HANDLER":return J.get(e.name).deserialize(e.value);case"RAW":return e.value}}function R(e,t,n){return new Promise(r=>{const o=le();e.addEventListener("message",function c(s){!s.data||!s.data.id||s.data.id!==o||(e.removeEventListener("message",c),r(s.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)})}function le(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}let a;const y=new Array(128).fill(void 0);y.push(void 0,null,!0,!1);function i(e){return y[e]}let L=y.length;function ge(e){e<132||(y[e]=L,L=e)}function k(e){const t=i(e);return ge(e),t}let A=0,x=null;function M(){return(x===null||x.byteLength===0)&&(x=new Uint8Array(a.memory.buffer)),x}const U=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},be=typeof U.encodeInto=="function"?function(e,t){return U.encodeInto(e,t)}:function(e,t){const n=U.encode(e);return t.set(n),{read:e.length,written:n.length}};function $(e,t,n){if(n===void 0){const _=U.encode(e),f=t(_.length)>>>0;return M().subarray(f,f+_.length).set(_),A=_.length,f}let r=e.length,o=t(r)>>>0;const c=M();let s=0;for(;s<r;s++){const _=e.charCodeAt(s);if(_>127)break;c[o+s]=_}if(s!==r){s!==0&&(e=e.slice(s)),o=n(o,r,r=s+e.length*3)>>>0;const _=M().subarray(o+s,o+r),f=be(e,_);s+=f.written}return A=s,o}function O(e){return e==null}let T=null;function g(){return(T===null||T.byteLength===0)&&(T=new Int32Array(a.memory.buffer)),T}const Z=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Z.decode();function p(e,t){return e=e>>>0,Z.decode(M().subarray(e,e+t))}function b(e){L===y.length&&y.push(y.length+1);const t=L;return L=y[t],y[t]=e,t}let F=null;function de(){return(F===null||F.byteLength===0)&&(F=new Float64Array(a.memory.buffer)),F}let I=null;function we(){return(I===null||I.byteLength===0)&&(I=new BigInt64Array(a.memory.buffer)),I}function H(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const o=e.description;return o==null?"Symbol":`Symbol(${o})`}if(t=="function"){const o=e.name;return typeof o=="string"&&o.length>0?`Function(${o})`:"Function"}if(Array.isArray(e)){const o=e.length;let c="[";o>0&&(c+=H(e[0]));for(let s=1;s<o;s++)c+=", "+H(e[s]);return c+="]",c}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(n.length>1)r=n[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}function ye(e,t){const n=t(e.length*1)>>>0;return M().set(e,n/1),A=e.length,n}function V(e,t){try{return e.apply(this,t)}catch(n){a.__wbindgen_exn_store(b(n))}}let me=class q{static __wrap(t){t=t>>>0;const n=Object.create(q.prototype);return n.__wbg_ptr=t,n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();a.__wbg_routeinfo_free(t)}constructor(t){try{const c=a.__wbindgen_add_to_stack_pointer(-16),s=ye(t,a.__wbindgen_malloc),_=A;a.routeinfo_new(c,s,_);var n=g()[c/4+0],r=g()[c/4+1],o=g()[c/4+2];if(o)throw k(r);return q.__wrap(n)}finally{a.__wbindgen_add_to_stack_pointer(16)}}nameForRoute(t){let n,r;try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.routeinfo_nameForRoute(l,this.__wbg_ptr,b(t));var o=g()[l/4+0],c=g()[l/4+1],s=g()[l/4+2],_=g()[l/4+3],f=o,u=c;if(_)throw f=0,u=0,k(s);return n=f,r=u,p(f,u)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,r)}}speedLimitForRoute(t){let n,r;try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.routeinfo_speedLimitForRoute(l,this.__wbg_ptr,b(t));var o=g()[l/4+0],c=g()[l/4+1],s=g()[l/4+2],_=g()[l/4+3],f=o,u=c;if(_)throw f=0,u=0,k(s);return n=f,r=u,p(f,u)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,r)}}allSpeedLimits(){let t,n;try{const u=a.__wbindgen_add_to_stack_pointer(-16);a.routeinfo_allSpeedLimits(u,this.__wbg_ptr);var r=g()[u/4+0],o=g()[u/4+1],c=g()[u/4+2],s=g()[u/4+3],_=r,f=o;if(s)throw _=0,f=0,k(c);return t=_,n=f,p(_,f)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,n)}}renderLaneDetailsForRoute(t){let n,r;try{const l=a.__wbindgen_add_to_stack_pointer(-16);a.routeinfo_renderLaneDetailsForRoute(l,this.__wbg_ptr,b(t));var o=g()[l/4+0],c=g()[l/4+1],s=g()[l/4+2],_=g()[l/4+3],f=o,u=c;if(_)throw f=0,u=0,k(s);return n=f,r=u,p(f,u)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(n,r)}}};async function he(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function pe(){const e={};return e.wbg={},e.wbg.__wbindgen_object_drop_ref=function(t){k(t)},e.wbg.__wbindgen_string_get=function(t,n){const r=i(n),o=typeof r=="string"?r:void 0;var c=O(o)?0:$(o,a.__wbindgen_malloc,a.__wbindgen_realloc),s=A;g()[t/4+1]=s,g()[t/4+0]=c},e.wbg.__wbindgen_error_new=function(t,n){const r=new Error(p(t,n));return b(r)},e.wbg.__wbindgen_boolean_get=function(t){const n=i(t);return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_is_bigint=function(t){return typeof i(t)=="bigint"},e.wbg.__wbindgen_bigint_from_i64=function(t){return b(t)},e.wbg.__wbindgen_jsval_eq=function(t,n){return i(t)===i(n)},e.wbg.__wbindgen_number_get=function(t,n){const r=i(n),o=typeof r=="number"?r:void 0;de()[t/8+1]=O(o)?0:o,g()[t/4+0]=!O(o)},e.wbg.__wbindgen_is_object=function(t){const n=i(t);return typeof n=="object"&&n!==null},e.wbg.__wbindgen_in=function(t,n){return i(t)in i(n)},e.wbg.__wbindgen_bigint_from_u64=function(t){const n=BigInt.asUintN(64,t);return b(n)},e.wbg.__wbindgen_is_undefined=function(t){return i(t)===void 0},e.wbg.__wbindgen_string_new=function(t,n){const r=p(t,n);return b(r)},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return i(t)==i(n)},e.wbg.__wbindgen_object_clone_ref=function(t){const n=i(t);return b(n)},e.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(t,n){const r=i(t)[i(n)];return b(r)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return b(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=i(n).stack,o=$(r,a.__wbindgen_malloc,a.__wbindgen_realloc),c=A;g()[t/4+1]=c,g()[t/4+0]=o},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){let r,o;try{r=t,o=n,console.error(p(t,n))}finally{a.__wbindgen_free(r,o)}},e.wbg.__wbg_debug_917e579618ee56f5=function(t){console.debug(i(t))},e.wbg.__wbg_error_ea7597dedb63d9a4=function(t){console.error(i(t))},e.wbg.__wbg_info_fc2a17f38101c41c=function(t){console.info(i(t))},e.wbg.__wbg_log_003c998d6df63565=function(t){console.log(i(t))},e.wbg.__wbg_warn_ebfcadd0780df93a=function(t){console.warn(i(t))},e.wbg.__wbg_get_e52aaca45f37b337=function(t,n){const r=i(t)[n>>>0];return b(r)},e.wbg.__wbg_length_070e3265c186df02=function(t){return i(t).length},e.wbg.__wbindgen_is_function=function(t){return typeof i(t)=="function"},e.wbg.__wbg_next_3975dcca26737a22=function(t){const n=i(t).next;return b(n)},e.wbg.__wbg_next_5a9700550e162aa3=function(){return V(function(t){const n=i(t).next();return b(n)},arguments)},e.wbg.__wbg_done_a184612220756243=function(t){return i(t).done},e.wbg.__wbg_value_6cc144c1d9645dd5=function(t){const n=i(t).value;return b(n)},e.wbg.__wbg_iterator_c1677479667ea090=function(){return b(Symbol.iterator)},e.wbg.__wbg_get_363c3b466fe4896b=function(){return V(function(t,n){const r=Reflect.get(i(t),i(n));return b(r)},arguments)},e.wbg.__wbg_call_f96b398515635514=function(){return V(function(t,n){const r=i(t).call(i(n));return b(r)},arguments)},e.wbg.__wbg_isArray_07d89ced8fb14171=function(t){return Array.isArray(i(t))},e.wbg.__wbg_instanceof_ArrayBuffer_de688b806c28ff28=function(t){let n;try{n=i(t)instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_isSafeInteger_fcdf4c4f25c86778=function(t){return Number.isSafeInteger(i(t))},e.wbg.__wbg_entries_c3e06bf0354f5d20=function(t){const n=Object.entries(i(t));return b(n)},e.wbg.__wbg_buffer_fcbfb6d88b2732e9=function(t){const n=i(t).buffer;return b(n)},e.wbg.__wbg_new_bc5d9aad3f9ac80e=function(t){const n=new Uint8Array(i(t));return b(n)},e.wbg.__wbg_set_4b3aa8445ac1e91c=function(t,n,r){i(t).set(i(n),r>>>0)},e.wbg.__wbg_length_d9c4ded7e708c6a1=function(t){return i(t).length},e.wbg.__wbg_instanceof_Uint8Array_4733577ba827276b=function(t){let n;try{n=i(t)instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbindgen_bigint_get_as_i64=function(t,n){const r=i(n),o=typeof r=="bigint"?r:void 0;we()[t/8+1]=O(o)?BigInt(0):o,g()[t/4+0]=!O(o)},e.wbg.__wbindgen_debug_string=function(t,n){const r=H(i(n)),o=$(r,a.__wbindgen_malloc,a.__wbindgen_realloc),c=A;g()[t/4+1]=c,g()[t/4+0]=o},e.wbg.__wbindgen_throw=function(t,n){throw new Error(p(t,n))},e.wbg.__wbindgen_memory=function(){const t=a.memory;return b(t)},e}function Ee(e,t){return a=e.exports,ee.__wbindgen_wasm_module=t,I=null,F=null,T=null,x=null,a}async function ee(e){if(a!==void 0)return a;typeof e>"u"&&(e="/atip/stview_more/assets/route_info_bg.wasm");const t=pe();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await he(await e,t);return Ee(n,r)}class Se{constructor(){te(this,"inner");this.inner=null}async loadFile(t){await ee(),console.log(`Grabbing A/B Street map model data from ${t}`);let r=await(await fetch(t)).arrayBuffer();this.inner=new me(new Uint8Array(r)),console.log("RouteInfo is ready!")}nameForRoute(t){if(!this.inner)throw new Error("Still loading route info, please retry after a few seconds");return this.inner.nameForRoute(t)}speedLimitForRoute(t){if(!this.inner)throw new Error("Still loading route info, please retry after a few seconds");return this.inner.speedLimitForRoute(t)}allSpeedLimits(){if(!this.inner)throw new Error("Still loading route info, please retry after a few seconds");return this.inner.allSpeedLimits()}renderLaneDetailsForRoute(t){if(!this.inner)throw new Error("Still loading route info, please retry after a few seconds");return JSON.parse(this.inner.renderLaneDetailsForRoute(t))}}z(Se)})();
