(()=>{var Se=Object.defineProperty;var Ie=(r,e,t)=>e in r?Se(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>Ie(r,typeof e!="symbol"?e+"":e,t);var m={baseURL:"https://acakelin.github.io/",bypass:[],caches:{font:{max_age:2592e3,origins:[],strategy:"cache-first"},image:{max_age:2592e3,origins:[],strategy:"cache-first"},script:{max_age:2592e3,origins:[],strategy:"cache-first"},style:{max_age:2592e3,origins:[],strategy:"cache-first"}},debug:!1,langs:["en","zh-hans"],offline_image:"/images/pwa/offline.png",precaches:["/en/offline/","/zh-hans/offline/","/js/hb.0bc491c8ceb3a60ac933c3d66e1958eb0ab9cd3765feea57bf27c1444dde69c8.js","/images/pwa/offline.png"]};try{self["workbox:core:7.2.0"]&&_()}catch(r){}var Re=(r,...e)=>{let t=r;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};var ie=Re;var l=class extends Error{constructor(t,o){let s=ie(t,o);super(s);c(this,"details");this.name=t,this.details=o}};var z=r=>new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),"");try{self["workbox:cacheable-response:7.2.0"]&&_()}catch(r){}var I=class{constructor(e={}){c(this,"_statuses");c(this,"_headers");this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(o=>e.headers.get(o)===this._headers[o])),t}};var x=class{constructor(e){c(this,"_cacheableResponse");c(this,"cacheWillUpdate",async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null);this._cacheableResponse=new I(e)}};function A(r){r.then(()=>{})}var E=(r,e)=>e.some(t=>r instanceof t);var ce,ue;function ke(){return ce||(ce=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pe(){return ue||(ue=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Z=new WeakMap,X=new WeakMap,k=new WeakMap;function ve(r){let e=new Promise((t,o)=>{let s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",n)},a=()=>{t(f(r.result)),s()},n=()=>{o(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",n)});return k.set(e,r),e}function Ce(r){if(Z.has(r))return;let e=new Promise((t,o)=>{let s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",n),r.removeEventListener("abort",n)},a=()=>{t(),s()},n=()=>{o(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",n),r.addEventListener("abort",n)});Z.set(r,e)}var ee={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Z.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return f(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function U(r){ee=r(ee)}function _e(r){return Pe().includes(r)?function(...e){return r.apply(R(this),e),f(this.request)}:function(...e){return f(r.apply(R(this),e))}}function Oe(r){return typeof r=="function"?_e(r):(r instanceof IDBTransaction&&Ce(r),E(r,ke())?new Proxy(r,ee):r)}function f(r){if(r instanceof IDBRequest)return ve(r);if(X.has(r))return X.get(r);let e=Oe(r);return e!==r&&(X.set(r,e),k.set(e,r)),e}var R=r=>k.get(r);function le(r,e,{blocked:t,upgrade:o,blocking:s,terminated:a}={}){let n=indexedDB.open(r,e),i=f(n);return o&&n.addEventListener("upgradeneeded",u=>{o(f(n.result),u.oldVersion,u.newVersion,f(n.transaction),u)}),t&&n.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),i.then(u=>{a&&u.addEventListener("close",()=>a()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),i}function de(r,{blocked:e}={}){let t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",o=>e(o.oldVersion,o)),f(t).then(()=>{})}var Me=["get","getKey","getAll","getAllKeys","count"],qe=["put","add","delete","clear"],te=new Map;function me(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(te.get(e))return te.get(e);let t=e.replace(/FromIndex$/,""),o=e!==t,s=qe.includes(t);if(!(t in(o?IDBIndex:IDBObjectStore).prototype)||!(s||Me.includes(t)))return;let a=async function(n,...i){let u=this.transaction(n,s?"readwrite":"readonly"),d=u.store;return o&&(d=d.index(i.shift())),(await Promise.all([d[t](...i),s&&u.done]))[0]};return te.set(e,a),a}U(r=>({...r,get:(e,t,o)=>me(e,t)||r.get(e,t,o),has:(e,t)=>!!me(e,t)||r.has(e,t)}));var Ve=["continue","continuePrimaryKey","advance"],pe={},re=new WeakMap,ge=new WeakMap,Ke={get(r,e){if(!Ve.includes(e))return r[e];let t=pe[e];return t||(t=pe[e]=function(...o){re.set(this,ge.get(this)[e](...o))}),t}};async function*Le(...r){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...r)),!e)return;e=e;let t=new Proxy(e,Ke);for(ge.set(t,e),k.set(t,R(e));e;)yield t,e=await(re.get(t)||e.continue()),re.delete(t)}function he(r,e){return e===Symbol.asyncIterator&&E(r,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&E(r,[IDBIndex,IDBObjectStore])}U(r=>({...r,get(e,t,o){return he(e,t)?Le:r.get(e,t,o)},has(e,t){return he(e,t)||r.has(e,t)}}));try{self["workbox:expiration:7.2.0"]&&_()}catch(r){}var $e="workbox-expiration",P="cache-entries",fe=r=>{let e=new URL(r,location.href);return e.hash="",e.href},H=class{constructor(e){c(this,"_cacheName");c(this,"_db",null);this._cacheName=e}_upgradeDb(e){let t=e.createObjectStore(P,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&de(this._cacheName)}async setTimestamp(e,t){e=fe(e);let o={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(P,"readwrite",{durability:"relaxed"});await a.store.put(o),await a.done}async getTimestamp(e){let o=await(await this.getDb()).get(P,this._getId(e));return o==null?void 0:o.timestamp}async expireEntries(e,t){let o=await this.getDb(),s=await o.transaction(P).store.index("timestamp").openCursor(null,"prev"),a=[],n=0;for(;s;){let u=s.value;u.cacheName===this._cacheName&&(e&&u.timestamp<e||t&&n>=t?a.push(s.value):n++),s=await s.continue()}let i=[];for(let u of a)await o.delete(P,u.id),i.push(u.url);return i}_getId(e){return this._cacheName+"|"+fe(e)}async getDb(){return this._db||(this._db=await le($e,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}};var v=class{constructor(e,t={}){c(this,"_isRunning",!1);c(this,"_rerunRequested",!1);c(this,"_maxEntries");c(this,"_maxAgeSeconds");c(this,"_matchOptions");c(this,"_cacheName");c(this,"_timestampModel");this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new H(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;let e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),o=await self.caches.open(this._cacheName);for(let s of t)await o.delete(s,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,A(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){let t=await this._timestampModel.getTimestamp(e),o=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<o:!0}else return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}};var N={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},oe=r=>[N.prefix,r,N.suffix].filter(e=>e&&e.length>0).join("-"),Ae=r=>{for(let e of Object.keys(N))r(e)},W={updateDetails:r=>{Ae(e=>{typeof r[e]=="string"&&(N[e]=r[e])})},getGoogleAnalyticsName:r=>r||oe(N.googleAnalytics),getPrecacheName:r=>r||oe(N.precache),getPrefix:()=>N.prefix,getRuntimeName:r=>r||oe(N.runtime),getSuffix:()=>N.suffix};var F=new Set;function ye(r){F.add(r)}var C=class{constructor(e={}){c(this,"_config");c(this,"_maxAgeSeconds");c(this,"_cacheExpirations");c(this,"cachedResponseWillBeUsed",async({event:e,request:t,cacheName:o,cachedResponse:s})=>{if(!s)return null;let a=this._isResponseDateFresh(s),n=this._getCacheExpiration(o);A(n.expireEntries());let i=n.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(u){}return a?s:null});c(this,"cacheDidUpdate",async({cacheName:e,request:t})=>{let o=this._getCacheExpiration(e);await o.updateTimestamp(t.url),await o.expireEntries()});this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&ye(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===W.getRuntimeName())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new v(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;let t=this._getDateHeaderTimestamp(e);if(t===null)return!0;let o=Date.now();return t>=o-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;let t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(let[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}};try{self["workbox:routing:7.2.0"]&&_()}catch(r){}var j="GET";var D=r=>r&&typeof r=="object"?r:{handle:r};var y=class{constructor(e,t,o=j){c(this,"handler");c(this,"match");c(this,"method");c(this,"catchHandler");this.handler=D(t),this.match=e,this.method=o}setCatchHandler(e){this.catchHandler=D(e)}};var O=class extends y{constructor(e,t,o){let s=({url:a})=>{let n=e.exec(a.href);if(n&&!(a.origin!==location.origin&&n.index!==0))return n.slice(1)};super(s,t,o)}};var M=class{constructor(){c(this,"_routes");c(this,"_defaultHandlerMap");c(this,"_catchHandler");this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,o=this.handleRequest({request:t,event:e});o&&e.respondWith(o)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){let{payload:t}=e.data,o=Promise.all(t.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);let a=new Request(...s);return this.handleRequest({request:a,event:e})}));e.waitUntil(o),e.ports&&e.ports[0]&&o.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let o=new URL(e.url,location.href);if(!o.protocol.startsWith("http"))return;let s=o.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:o}),i=n&&n.handler,u=[],d=e.method;if(!i&&this._defaultHandlerMap.has(d)&&(i=this._defaultHandlerMap.get(d)),!i)return;let h;try{h=i.handle({url:o,request:e,event:t,params:a})}catch(S){h=Promise.reject(S)}let g=n&&n.catchHandler;return h instanceof Promise&&(this._catchHandler||g)&&(h=h.catch(async S=>{if(g)try{return await g.handle({url:o,request:e,event:t,params:a})}catch(ae){ae instanceof Error&&(S=ae)}if(this._catchHandler)return this._catchHandler.handle({url:o,request:e,event:t});throw S})),h}findMatchingRoute({url:e,sameOrigin:t,request:o,event:s}){let a=this._routes.get(o.method)||[];for(let n of a){let i,u=n.match({url:e,sameOrigin:t,request:o,event:s});if(u)return i=u,(Array.isArray(i)&&i.length===0||u.constructor===Object&&Object.keys(u).length===0||typeof u=="boolean")&&(i=void 0),{route:n,params:i}}return{}}setDefaultHandler(e,t=j){this._defaultHandlerMap.set(t,D(e))}setCatchHandler(e){this._catchHandler=D(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}};var q,V=()=>(q||(q=new M,q.addFetchListener(),q.addCacheListener()),q);function b(r,e,t){let o;if(typeof r=="string"){let a=new URL(r,location.href),n=({url:i})=>i.href===a.href;o=new y(n,e,t)}else if(r instanceof RegExp)o=new O(r,e,t);else if(typeof r=="function")o=new y(r,e,t);else if(r instanceof y)o=r;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return V().registerRoute(o),o}function se(r){V().setCatchHandler(r)}function Ne(r,e){let t=new URL(r);for(let o of e)t.searchParams.delete(o);return t.href}async function xe(r,e,t,o){let s=Ne(e.url,t);if(e.url===s)return r.match(e,o);let a={...o,ignoreSearch:!0},n=await r.keys(e,a);for(let i of n){let u=Ne(i.url,t);if(s===u)return r.match(i,o)}}var G=class{constructor(){c(this,"promise");c(this,"resolve");c(this,"reject");this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};async function De(){for(let r of F)await r()}function Q(r){return new Promise(e=>setTimeout(e,r))}try{self["workbox:strategies:7.2.0"]&&_()}catch(r){}function J(r){return typeof r=="string"?new Request(r):r}var K=class{constructor(e,t){c(this,"request");c(this,"url");c(this,"event");c(this,"params");c(this,"_cacheKeys",{});c(this,"_strategy");c(this,"_extendLifetimePromises");c(this,"_handlerDeferred");c(this,"_plugins");c(this,"_pluginStateMap");Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new G,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(let o of this._plugins)this._pluginStateMap.set(o,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,o=J(e);if(o.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){let n=await t.preloadResponse;if(n)return n}let s=this.hasCallback("fetchDidFail")?o.clone():null;try{for(let n of this.iterateCallbacks("requestWillFetch"))o=await n({request:o.clone(),event:t})}catch(n){if(n instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:n.message})}let a=o.clone();try{let n;n=await fetch(o,o.mode==="navigate"?void 0:this._strategy.fetchOptions);for(let i of this.iterateCallbacks("fetchDidSucceed"))n=await i({event:t,request:a,response:n});return n}catch(n){throw s&&await this.runCallbacks("fetchDidFail",{error:n,event:t,originalRequest:s.clone(),request:a.clone()}),n}}async fetchAndCachePut(e){let t=await this.fetch(e),o=t.clone();return this.waitUntil(this.cachePut(e,o)),t}async cacheMatch(e){let t=J(e),o,{cacheName:s,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i={...a,cacheName:s};o=await caches.match(n,i);for(let u of this.iterateCallbacks("cachedResponseWillBeUsed"))o=await u({cacheName:s,matchOptions:a,cachedResponse:o,request:n,event:this.event})||void 0;return o}async cachePut(e,t){let o=J(e);await Q(0);let s=await this.getCacheKey(o,"write");if(!t)throw new l("cache-put-with-no-response",{url:z(s.url)});let a=await this._ensureResponseSafeToCache(t);if(!a)return!1;let{cacheName:n,matchOptions:i}=this._strategy,u=await self.caches.open(n),d=this.hasCallback("cacheDidUpdate"),h=d?await xe(u,s.clone(),["__WB_REVISION__"],i):null;try{await u.put(s,d?a.clone():a)}catch(g){if(g instanceof Error)throw g.name==="QuotaExceededError"&&await De(),g}for(let g of this.iterateCallbacks("cacheDidUpdate"))await g({cacheName:n,oldResponse:h,newResponse:a.clone(),request:s,event:this.event});return!0}async getCacheKey(e,t){let o=`${e.url} | ${t}`;if(!this._cacheKeys[o]){let s=e;for(let a of this.iterateCallbacks("cacheKeyWillBeUsed"))s=J(await a({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[o]=s}return this._cacheKeys[o]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let o of this.iterateCallbacks(e))await o(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if(typeof t[e]=="function"){let o=this._pluginStateMap.get(t);yield a=>{let n={...a,state:o};return t[e](n)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,o=!1;for(let s of this.iterateCallbacks("cacheWillUpdate"))if(t=await s({request:this.request,response:t,event:this.event})||void 0,o=!0,!t)break;return o||t&&t.status!==200&&(t=void 0),t}};var p=class{constructor(e={}){c(this,"cacheName");c(this,"plugins");c(this,"fetchOptions");c(this,"matchOptions");this.cacheName=W.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,o=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new K(this,{event:t,request:o,params:s}),n=this._getResponse(a,o,t),i=this._awaitComplete(n,a,o,t);return[n,i]}async _getResponse(e,t,o){await e.runCallbacks("handlerWillStart",{event:o,request:t});let s;try{if(s=await this._handle(t,e),!s||s.type==="error")throw new l("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(let n of e.iterateCallbacks("handlerDidError"))if(s=await n({error:a,event:o,request:t}),s)break}if(!s)throw a}for(let a of e.iterateCallbacks("handlerWillRespond"))s=await a({event:o,request:t,response:s});return s}async _awaitComplete(e,t,o,s){let a,n;try{a=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:s,request:o,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(n=i)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:o,response:a,error:n}),t.destroy(),n)throw n}};var L=class extends p{async _handle(e,t){let o=[],s=await t.cacheMatch(e),a;if(!s)try{s=await t.fetchAndCachePut(e)}catch(n){n instanceof Error&&(a=n)}if(!s)throw new l("no-response",{url:e.url,error:a});return s}};var Y={cacheWillUpdate:async({response:r})=>r.status===200||r.status===0?r:null};var T=class extends p{constructor(t={}){super(t);c(this,"_networkTimeoutSeconds");this.plugins.some(o=>"cacheWillUpdate"in o)||this.plugins.unshift(Y),this._networkTimeoutSeconds=t.networkTimeoutSeconds||0}async _handle(t,o){let s=[],a=[],n;if(this._networkTimeoutSeconds){let{id:d,promise:h}=this._getTimeoutPromise({request:t,logs:s,handler:o});n=d,a.push(h)}let i=this._getNetworkPromise({timeoutId:n,request:t,logs:s,handler:o});a.push(i);let u=await o.waitUntil((async()=>await o.waitUntil(Promise.race(a))||await i)());if(!u)throw new l("no-response",{url:t.url});return u}_getTimeoutPromise({request:t,logs:o,handler:s}){let a;return{promise:new Promise(i=>{a=setTimeout(async()=>{i(await s.cacheMatch(t))},this._networkTimeoutSeconds*1e3)}),id:a}}async _getNetworkPromise({timeoutId:t,request:o,logs:s,handler:a}){let n,i;try{i=await a.fetchAndCachePut(o)}catch(u){u instanceof Error&&(n=u)}return t&&clearTimeout(t),(n||!i)&&(i=await a.cacheMatch(o)),i}};var w=class extends p{constructor(t={}){super(t);c(this,"_networkTimeoutSeconds");this._networkTimeoutSeconds=t.networkTimeoutSeconds||0}async _handle(t,o){let s,a;try{let n=[o.fetch(t)];if(this._networkTimeoutSeconds){let i=Q(this._networkTimeoutSeconds*1e3);n.push(i)}if(a=await Promise.race(n),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(n){n instanceof Error&&(s=n)}if(!a)throw new l("no-response",{url:t.url,error:s});return a}};var $=class extends p{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(Y)}async _handle(e,t){let o=[],s=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(s);let a=await t.cacheMatch(e),n;if(!a)try{a=await s}catch(i){i instanceof Error&&(n=i)}if(!a)throw new l("no-response",{url:e.url,error:n});return a}};self.__WB_DISABLE_DEV_LOGS=!m.debug;var B=(...r)=>{self.__WB_DISABLE_DEV_LOGS||console.debug("[pwa]",...r)},ne="hugo-pwa-",we=ne+"fallbacks",Be=m.precaches.filter(r=>r.indexOf("__h_pp_l1")!==0);B("precaches",Be);B("bypass",m.bypass);b(({request:r})=>r.mode==="navigate",new T({cacheName:ne+"pages",plugins:[new x({statuses:[200]})]}));var be=["font","image","script","style"],Ue=r=>!!(m.bypass&&m.bypass.includes(r.href));m.bypass&&b(({request:r,sameOrigin:e,url:t})=>Ue(t)?!!e:!1,new w);var Te;for(let r in be){let e=be[r],t=m.caches[e],o=t.origins?t.origins.map(i=>i.replace(/\/$/,"")):[],s=ne+e+"s",a=null,n=[new x({statuses:[0,200]}),new C({maxAgeSeconds:(Te=t.max_age)!=null?Te:60*60*24*30})];switch(t.strategy){case"network-first":a=new T({cacheName:s,plugins:n});break;case"cache-first":a=new L({cacheName:s,plugins:n});break;case"stale-while-revalidate":a=new $({cacheName:s,plugins:n});break;default:throw new Error(`invalid strategy for kind "${e}": `+t.strategy)}b(({request:i,sameOrigin:u,url:d})=>i.destination!==e?!1:u||o&&o.includes(d.origin.replace(/\/$/,""))?!0:(B(`${d} will not be cached.`),!1),a)}b(()=>!0,new w);self.addEventListener("install",r=>{r.waitUntil(self.caches.open(we).then(e=>e.addAll(Be)))});var He=async r=>{B("catch handler",r.request);let e=r.request.destination,t=r.request.url,o=await self.caches.open(we),s=await o.match(t);if(s)return s;if(e==="document"){let a,n="",i;if(t.indexOf(m.baseURL)===0?i=t.replace(m.baseURL,"").split("/",1):i=new URL(t).pathname.replace(/^\//,"").split("/",1),i.length>0&&m.langs.includes(i[0])){n=i[0];let d=`${m.baseURL}${n}/offline/`;if(B("loading multilingual offline page",d),a=await o.match(d),a)return a}let u=`${m.baseURL}offline/`;return B("loading the fallback offline page",u),await o.match(u)||Response.error()}else if(e==="image"&&m.offline_image)return await o.match(m.offline_image)||Response.error();return Response.error()};se(He);})();
