"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7722],{7423:(ue,S,m)=>{m.d(S,{Uw:()=>I,fo:()=>$});var d=m(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var v=(()=>{return(r=v||(v={})).Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",v;var r})();class e extends Error{constructor(t,n,i){super(t),this.message=t,this.code=n,this.data=i}}const J=r=>{var t,n,i,l,o;const a=r.CapacitorCustomPlatform||null,s=r.Capacitor||{},f=s.Plugins=s.Plugins||{},c=r.CapacitorPlatforms,Z=(null===(t=null==c?void 0:c.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==a?a.name:(r=>{var t,n;return null!=r&&r.androidBridge?"android":null!==(n=null===(t=null==r?void 0:r.webkit)||void 0===t?void 0:t.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(r)),ce=(null===(n=null==c?void 0:c.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==Z()),fe=(null===(i=null==c?void 0:c.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(g=>{const b=K.get(g);return!!(null!=b&&b.platforms.has(Z())||se(g))}),se=(null===(l=null==c?void 0:c.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(g=>{var b;return null===(b=s.PluginHeaders)||void 0===b?void 0:b.find(k=>k.name===g)}),K=new Map,he=(null===(o=null==c?void 0:c.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((g,b={})=>{const k=K.get(g);if(k)return console.warn(`Capacitor plugin "${g}" already registered. Cannot register plugins twice.`),k.proxy;const A=Z(),H=se(g);let w;const ve=function(){var p=(0,d.Z)(function*(){return!w&&A in b?w=w="function"==typeof b[A]?yield b[A]():b[A]:null!==a&&!w&&"web"in b&&(w=w="function"==typeof b.web?yield b.web():b.web),w});return function(){return p.apply(this,arguments)}}(),N=p=>{let h;const y=(...C)=>{const O=ve().then(P=>{const L=((p,h)=>{var y,C;if(!H){if(p)return null===(C=p[h])||void 0===C?void 0:C.bind(p);throw new e(`"${g}" plugin is not implemented on ${A}`,v.Unimplemented)}{const O=null==H?void 0:H.methods.find(P=>h===P.name);if(O)return"promise"===O.rtype?P=>s.nativePromise(g,h.toString(),P):(P,L)=>s.nativeCallback(g,h.toString(),P,L);if(p)return null===(y=p[h])||void 0===y?void 0:y.bind(p)}})(P,p);if(L){const G=L(...C);return h=null==G?void 0:G.remove,G}throw new e(`"${g}.${p}()" is not implemented on ${A}`,v.Unimplemented)});return"addListener"===p&&(O.remove=(0,d.Z)(function*(){return h()})),O};return y.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(y,"name",{value:p,writable:!1,configurable:!1}),y},le=N("addListener"),ae=N("removeListener"),ye=(p,h)=>{const y=le({eventName:p},h),C=function(){var P=(0,d.Z)(function*(){const L=yield y;ae({eventName:p,callbackId:L},h)});return function(){return P.apply(this,arguments)}}(),O=new Promise(P=>y.then(()=>P({remove:C})));return O.remove=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield C()}),O},X=new Proxy({},{get(p,h){switch(h){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return H?ye:le;case"removeListener":return ae;default:return N(h)}}});return f[g]=X,K.set(g,{name:g,proxy:X,platforms:new Set([...Object.keys(b),...H?[A]:[]])}),X});return s.convertFileSrc||(s.convertFileSrc=g=>g),s.getPlatform=Z,s.handleError=g=>r.console.error(g),s.isNativePlatform=ce,s.isPluginAvailable=fe,s.pluginMethodNoop=(g,b,k)=>Promise.reject(`${k} does not have an implementation of "${b}".`),s.registerPlugin=he,s.Exception=e,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},U=(r=>r.Capacitor=J(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),$=U.registerPlugin;class I{constructor(t){this.listeners={},this.windowListeners={},t&&(console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=t)}addListener(t,n){var i=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n);const o=this.windowListeners[t];o&&!o.registered&&this.addWindowListener(o);const a=function(){var f=(0,d.Z)(function*(){return i.removeListener(t,n)});return function(){return f.apply(this,arguments)}}(),s=Promise.resolve({remove:a});return Object.defineProperty(s,"remove",{value:(f=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield a()}),function(){return f.apply(this,arguments)})}),s;var f}removeAllListeners(){var t=this;return(0,d.Z)(function*(){t.listeners={};for(const n in t.windowListeners)t.removeWindowListener(t.windowListeners[n]);t.windowListeners={}})()}notifyListeners(t,n){const i=this.listeners[t];i&&i.forEach(l=>l(n))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:i=>{this.notifyListeners(n,i)}}}unimplemented(t="not implemented"){return new U.Exception(t,v.Unimplemented)}unavailable(t="not available"){return new U.Exception(t,v.Unavailable)}removeListener(t,n){var i=this;return(0,d.Z)(function*(){const l=i.listeners[t];if(!l)return;const o=l.indexOf(n);i.listeners[t].splice(o,1),i.listeners[t].length||i.removeWindowListener(i.windowListeners[t])})()}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){!t||(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}}const Y=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),B=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class F extends I{getCookies(){return(0,d.Z)(function*(){const t=document.cookie,n={};return t.split(";").forEach(i=>{if(i.length<=0)return;let[l,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");l=B(l).trim(),o=B(o).trim(),n[l]=o}),n})()}setCookie(t){return(0,d.Z)(function*(){try{const n=Y(t.key),i=Y(t.value),l=`; expires=${(t.expires||"").replace("expires=","")}`,o=(t.path||"/").replace("path=",""),a=null!=t.url&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${n}=${i||""}${l}; path=${o}; ${a};`}catch(n){return Promise.reject(n)}})()}deleteCookie(t){return(0,d.Z)(function*(){try{document.cookie=`${t.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,d.Z)(function*(){try{const t=document.cookie.split(";")||[];for(const n of t)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(t){return Promise.reject(t)}})()}clearAllCookies(){var t=this;return(0,d.Z)(function*(){try{yield t.clearCookies()}catch(n){return Promise.reject(n)}})()}}$("CapacitorCookies",{web:()=>new F});const R=function(){var r=(0,d.Z)(function*(t){return new Promise((n,i)=>{const l=new FileReader;l.onload=()=>{const o=l.result;n(o.indexOf(",")>=0?o.split(",")[1]:o)},l.onerror=o=>i(o),l.readAsDataURL(t)})});return function(n){return r.apply(this,arguments)}}();class _ extends I{request(t){return(0,d.Z)(function*(){const n=((r,t={})=>{const n=Object.assign({method:r.method||"GET",headers:r.headers},t),l=((r={})=>{const t=Object.keys(r);return Object.keys(r).map(l=>l.toLocaleLowerCase()).reduce((l,o,a)=>(l[o]=r[t[a]],l),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)n.body=r.data;else if(l.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[a,s]of Object.entries(r.data||{}))o.set(a,s);n.body=o.toString()}else if(l.includes("multipart/form-data")){const o=new FormData;if(r.data instanceof FormData)r.data.forEach((s,f)=>{o.append(f,s)});else for(const s of Object.keys(r.data))o.append(s,r.data[s]);n.body=o;const a=new Headers(n.headers);a.delete("content-type"),n.headers=a}else(l.includes("application/json")||"object"==typeof r.data)&&(n.body=JSON.stringify(r.data));return n})(t,t.webFetchExtra),i=((r,t=!0)=>r?Object.entries(r).reduce((i,l)=>{const[o,a]=l;let s,f;return Array.isArray(a)?(f="",a.forEach(c=>{s=t?encodeURIComponent(c):c,f+=`${o}=${s}&`}),f.slice(0,-1)):(s=t?encodeURIComponent(a):a,f=`${o}=${s}`),`${i}&${f}`},"").substr(1):null)(t.params,t.shouldEncodeUrlParams),l=i?`${t.url}?${i}`:t.url,o=yield fetch(l,n),a=o.headers.get("content-type")||"";let f,c,{responseType:s="text"}=o.ok?t:{};switch(a.includes("application/json")&&(s="json"),s){case"arraybuffer":case"blob":c=yield o.blob(),f=yield R(c);break;case"json":f=yield o.json();break;default:f=yield o.text()}const E={};return o.headers.forEach((Z,q)=>{E[q]=Z}),{data:f,headers:E,status:o.status,url:o.url}})()}get(t){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},t),{method:"GET"}))})()}post(t){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},t),{method:"POST"}))})()}put(t){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},t),{method:"PUT"}))})()}patch(t){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},t),{method:"PATCH"}))})()}delete(t){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},t),{method:"DELETE"}))})()}}$("CapacitorHttp",{web:()=>new _})},7722:(ue,S,m)=>{m.r(S),m.d(S,{HomePageModule:()=>j});var d=m(6895),z=m(433),u=m(5035),x=m(4126),M=m(655);const W=(0,m(7423).fo)("Geolocation",{web:()=>m.e(4561).then(m.bind(m,4561)).then(r=>new r.GeolocationWeb)});var v=m(8407),e=m(8256),D=m(1053),J=m(7330);function te(r,t){1&r&&(e.TgZ(0,"ion-button",8),e._uU(1," Client "),e.qZA())}function U(r,t){1&r&&(e.TgZ(0,"ion-button",8),e._uU(1," Technicien "),e.qZA())}function $(r,t){1&r&&(e.TgZ(0,"ion-button",8),e._uU(1," Admin "),e.qZA())}function ne(r,t){if(1&r&&(e.TgZ(0,"ion-item",6),e.YNc(1,te,2,0,"ion-button",7),e.YNc(2,U,2,0,"ion-button",7),e.YNc(3,$,2,0,"ion-button",7),e.TgZ(4,"ion-label")(5,"b"),e._uU(6),e.qZA(),e._UZ(7,"br"),e._uU(8," entreprise: "),e.TgZ(9,"b"),e._uU(10),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"b"),e._uU(13),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"b"),e._uU(16),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"b"),e._uU(19),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"b"),e._uU(22),e.qZA(),e._UZ(23,"br"),e._uU(24," Mobile : "),e.TgZ(25,"b"),e._uU(26),e.qZA(),e._UZ(27,"br"),e._uU(28," T\xe9l\xe9phone : "),e.TgZ(29,"b"),e._uU(30),e.qZA(),e._UZ(31,"br"),e._uU(32," E-mail : "),e.TgZ(33,"b"),e._uU(34),e.qZA(),e._UZ(35,"br"),e.qZA()()),2&r){const n=t.$implicit;e.xp6(1),e.Q6J("ngIf","1"==n.role),e.xp6(1),e.Q6J("ngIf","2"==n.role),e.xp6(1),e.Q6J("ngIf","3"==n.role),e.xp6(3),e.hij(" id: ",n.id,""),e.xp6(4),e.hij(" ",n.company,""),e.xp6(3),e.lnq(" ",n.salutation," ",n.firstname," ",n.lastname,""),e.xp6(3),e.hij(" ",n.address," "),e.xp6(3),e.AsE(" ",n.cp," ",n.city,""),e.xp6(3),e.AsE(" ",n.state," ",n.country,""),e.xp6(4),e.hij(" ",n.phone_mobile," "),e.xp6(4),e.hij(" ",n.phone_number," "),e.xp6(4),e.hij(" ",n.email," ")}}const re=function(){return["/customers"]},I=function(){return["/techs"]},oe=function(){return["/calendar"]},Y=function(){return["/map"]},B=function(){return["/invoices"]},F=function(){return["/quotes"]};function ie(r,t){1&r&&(e.TgZ(0,"ion-row",9)(1,"ion-col",10)(2,"ion-item",11)(3,"ion-button",12),e._UZ(4,"ion-icon",13),e.qZA(),e.TgZ(5,"p")(6,"b"),e._uU(7," Voir le clients "),e.qZA()()(),e.TgZ(8,"ion-item",11)(9,"ion-button",12),e._UZ(10,"ion-icon",13),e.qZA(),e.TgZ(11,"p")(12,"b"),e._uU(13," Voir les techniciens"),e.qZA()()()(),e.TgZ(14,"ion-col",14)(15,"ion-item",11)(16,"ion-button",15),e._UZ(17,"ion-icon",16),e.qZA(),e.TgZ(18,"p")(19,"b"),e._uU(20,"Planning "),e.qZA()()(),e.TgZ(21,"ion-item",11)(22,"ion-button",15),e._UZ(23,"ion-icon",17),e.qZA(),e.TgZ(24,"p")(25,"b"),e._uU(26,"Carte "),e.qZA()()()(),e.TgZ(27,"ion-col",14)(28,"ion-item",11)(29,"ion-button",18),e._UZ(30,"ion-icon",19),e.qZA(),e.TgZ(31,"p")(32,"b"),e._uU(33," Voir les factures "),e.qZA()()(),e.TgZ(34,"ion-item",11)(35,"ion-button",18),e._UZ(36,"ion-icon",19),e.qZA(),e.TgZ(37,"p")(38,"b"),e._uU(39," Voir les devis "),e.qZA()()()()()),2&r&&(e.xp6(2),e.Q6J("routerLink",e.DdM(6,re)),e.xp6(6),e.Q6J("routerLink",e.DdM(7,I)),e.xp6(7),e.Q6J("routerLink",e.DdM(8,oe)),e.xp6(6),e.Q6J("routerLink",e.DdM(9,Y)),e.xp6(7),e.Q6J("routerLink",e.DdM(10,B)),e.xp6(6),e.Q6J("routerLink",e.DdM(11,F)))}function R(r,t){if(1&r){const n=e.EpF();e.TgZ(0,"ion-row",9)(1,"ion-col",20)(2,"ion-item")(3,"ion-button",21),e.NdJ("click",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.getPosition())}),e._UZ(4,"ion-icon",22),e.TgZ(5,"b"),e._uU(6," Validez votre localisation "),e.qZA()()()()()}}function Q(r,t){1&r&&(e.TgZ(0,"ion-list",23)(1,"ion-col",24),e._UZ(2,"div",25),e.qZA()())}class T{constructor(t,n,i,l,o,a,s,f,c,E,Z,q){Object.defineProperty(this,"navCtrl",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"formBuilder",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"popoverCtrl",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"alertController",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(this,"menu",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(this,"loadingController",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(this,"redditService",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:f}),Object.defineProperty(this,"toastCtrl",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(this,"loadingCtrl",{enumerable:!0,configurable:!0,writable:!0,value:E}),Object.defineProperty(this,"LoadingController",{enumerable:!0,configurable:!0,writable:!0,value:Z}),Object.defineProperty(this,"localStore",{enumerable:!0,configurable:!0,writable:!0,value:q}),Object.defineProperty(this,"map",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lat",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lng",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"location",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"locationButton",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"table",{enumerable:!0,configurable:!0,writable:!0,value:"users"}),Object.defineProperty(this,"iduser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"posts",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"role",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}ngOnInit(){return(0,M.mG)(this,void 0,void 0,function*(){this.iduser=this.localStore.getItem("iduser"),this.role=this.localStore.getItem("role"),this.redditService.postByid(this.table,this.iduser).subscribe(t=>{this.posts=t,console.log(this.posts),null!=t[0].lat||2!=this.role&&3!=this.role?null===t[0].lat||2!=this.role&&3!=this.role?null!==t[0].lat&&1==this.role&&(this.lat=t[0].lat,this.lng=t[0].lng,this.location=!0,setTimeout(()=>{this.leafletMap()},1e3)):(this.lat=t[0].lat,this.lng=t[0].lng,this.location=!0,this.locationButton=!0,setTimeout(()=>{this.leafletMap()},1e3)):(this.locationButton=!0,this.presentAlert())})})}getPosition(){return(0,M.mG)(this,void 0,void 0,function*(){const t=yield this.LoadingController.create({message:"Recherche localisation"});t.present();const n=yield W.getCurrentPosition();console.log("Current position:",n),null!==n.coords.latitude&&(this.lat=n.coords.latitude,this.lng=n.coords.longitude,this.location=!0,this.doSaveUser(),setTimeout(()=>{this.leafletMap()},2e3)),setTimeout(()=>{t.dismiss()},2e3)})}leafletMap(){var t=v.icon({iconUrl:"./assets/icon/marker-icon.png",iconAnchor:[2,32]});this.map=new v.Map("mapId2").setView([this.lat,this.lng],12),v.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{}).addTo(this.map);const n=v.marker([this.lat,this.lng],{icon:t});this.map.addLayer(n)}doSaveUser(){return(0,M.mG)(this,void 0,void 0,function*(){var t={id:this.id,lat:this.lat,lng:this.lng};console.log(t),this.redditService.update(this.table,this.iduser,t).toPromise().then(n=>{console.log(n),setTimeout(()=>(0,M.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({cssClass:"bg-profile",message:"Mise \xe0 jour de la position",duration:3e3,position:"bottom"})).present()}),400)})})}presentAlert(){return(0,M.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Position",subHeader:"",message:"Vous devez validez votre localisation",buttons:[{text:"Ok",cssClass:"primary",handler:n=>{this.getPosition()}},{text:"Annuler",cssClass:"secondary",handler:n=>{console.log("Confirm Cancel: blah")}}]})).present()})}}Object.defineProperty(T,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||T)(e.Y36(u.SH),e.Y36(z.qu),e.Y36(u.Dh),e.Y36(u.Br),e.Y36(u._q),e.Y36(u.HT),e.Y36(D.I),e.Y36(x.F0),e.Y36(u.yF),e.Y36(u.HT),e.Y36(u.HT),e.Y36(J.C))}}),Object.defineProperty(T,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:e.Xpm({type:T,selectors:[["app-home"]],decls:12,vars:4,consts:[["slot","start"],["padding",""],["sizeLg","9","sizeMd","9","sizeXs","12"],["lines","none",4,"ngFor","ngForOf"],["style","padding-top:20px;",4,"ngIf"],["lines","none","style","margin-top: 20px;",4,"ngIf"],["lines","none"],["color","medium","slot","end","size","small","shape","round",4,"ngIf"],["color","medium","slot","end","size","small","shape","round"],[2,"padding-top","20px"],["col-4","","col-md-4","",2,"text-align","center"],[3,"routerLink"],["color","success"],["name","person-outline"],["col-4","","col-md-4","",1,"ion-text-center"],["color","tertiary"],["name","calendar-outline"],["name","map-outline"],["color","warning"],["name","document-outline"],["col-12","","col-md-12","",1,"ion-text-center"],["color","danger",3,"click"],["name","navigate-circle-outline"],["lines","none",2,"margin-top","20px"],["sizeLg","12","sizeMd","12","sizeXs","12"],["id","mapId2",2,"width","100%","height","300px"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button"),e.qZA(),e._UZ(4,"ion-title"),e.qZA()(),e.TgZ(5,"ion-content",1)(6,"ion-grid")(7,"ion-col",2),e.YNc(8,ne,36,16,"ion-item",3),e.qZA(),e.YNc(9,ie,40,12,"ion-row",4),e.YNc(10,R,7,0,"ion-row",4),e.YNc(11,Q,3,0,"ion-list",5),e.qZA()()),2&t&&(e.xp6(8),e.Q6J("ngForOf",n.posts),e.xp6(1),e.Q6J("ngIf",3==n.role),e.xp6(1),e.Q6J("ngIf",n.locationButton),e.xp6(1),e.Q6J("ngIf",n.location))},dependencies:[d.sg,d.O5,u.YG,u.Sm,u.wI,u.W2,u.jY,u.Gu,u.gu,u.Ie,u.Q$,u.q_,u.fG,u.Nd,u.wd,u.sr,u.YI,x.rH],styles:["b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600, #f8f8f8)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color, #ffffff)}#cercle1[_ngcontent-%COMP%]{text-align:center;font-size:25px;color:#009688;padding:auto}#cercle2[_ngcontent-%COMP%]{text-align:center;font-size:25px;color:#00bcd4}#cercle3[_ngcontent-%COMP%]{border:9px solid #E52364;font-size:25px;color:#e52364}#cercle4[_ngcontent-%COMP%]{border:9px solid #ffd31a;font-size:45px;color:#ffd31a}.text-cercle[_ngcontent-%COMP%]{padding:15% 20% 2%;font-weight:700}.text-cercle-subtitle[_ngcontent-%COMP%]{padding:2% 20% 30%;font-size:17px;font-weight:700;color:#fbfbfb}ion-item-divider[_ngcontent-%COMP%]{height:100px;border-top-left-radius:10px;border-top-right-radius:10px;background-color:#d0d0d0}#editslider[_ngcontent-%COMP%]{display:none}#slide-cover[_ngcontent-%COMP%]:hover   \\ #editslider[_ngcontent-%COMP%]{display:inline-block}.showme[_ngcontent-%COMP%]{display:none}.showhim[_ngcontent-%COMP%]:hover   .showme[_ngcontent-%COMP%]{display:block}"]})});const V=[{path:"",component:T}];class _{}Object.defineProperty(_,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||_)}}),Object.defineProperty(_,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:_})}),Object.defineProperty(_,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[x.Bz.forChild(V),x.Bz]})});class j{}Object.defineProperty(j,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||j)}}),Object.defineProperty(j,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:j})}),Object.defineProperty(j,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[d.ez,z.u5,u.Pc,_]})})}}]);