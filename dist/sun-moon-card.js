var Ls=Object.defineProperty;var Hs=Object.getOwnPropertyDescriptor;var kt=(i,t,e,n)=>{for(var o=n>1?void 0:n?Hs(t,e):t,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(t,e,o):r(o))||o);return n&&o&&Ls(t,e,o),o};var ze=globalThis,Oe=ze.ShadowRoot&&(ze.ShadyCSS===void 0||ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gn=Symbol(),Fi=new WeakMap,ve=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==gn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Oe&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Fi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Fi.set(e,t))}return t}toString(){return this.cssText}},Ui=i=>new ve(typeof i=="string"?i:i+"",void 0,gn),Fe=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new ve(e,i,gn)},Gi=(i,t)=>{if(Oe)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=ze.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},fn=Oe?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Ui(e)})(i):i;var{is:Rs,defineProperty:Ps,getOwnPropertyDescriptor:Is,getOwnPropertyNames:zs,getOwnPropertySymbols:Os,getPrototypeOf:Fs}=Object,Ue=globalThis,Wi=Ue.trustedTypes,Us=Wi?Wi.emptyScript:"",Gs=Ue.reactiveElementPolyfillSupport,_e=(i,t)=>i,we={toAttribute(i,t){switch(t){case Boolean:i=i?Us:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ge=(i,t)=>!Rs(i,t),Ki={attribute:!0,type:String,converter:we,reflect:!1,useDefault:!1,hasChanged:Ge};Symbol.metadata??=Symbol("metadata"),Ue.litPropertyMetadata??=new WeakMap;var Ct=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ki){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Ps(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=Is(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ki}static _$Ei(){if(this.hasOwnProperty(_e("elementProperties")))return;let t=Fs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_e("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_e("properties"))){let e=this.properties,n=[...zs(e),...Os(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(fn(o))}else t!==void 0&&e.push(fn(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:we).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:we;this._$Em=o;let a=r.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let r=this.constructor;if(o===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Ge)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[_e("elementProperties")]=new Map,Ct[_e("finalized")]=new Map,Gs?.({ReactiveElement:Ct}),(Ue.reactiveElementVersions??=[]).push("2.1.2");var xn=globalThis,Bi=i=>i,We=xn.trustedTypes,Vi=We?We.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ji="$lit$",Ot=`lit$${Math.random().toFixed(9).slice(2)}$`,Qi="?"+Ot,Ws=`<${Qi}>`,qt=document,xe=()=>qt.createComment(""),Me=i=>i===null||typeof i!="object"&&typeof i!="function",Mn=Array.isArray,Ks=i=>Mn(i)||typeof i?.[Symbol.iterator]=="function",yn=`[ 	
\f\r]`,$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ji=/-->/g,Zi=/>/g,jt=RegExp(`>|${yn}(?:([^\\s"'>=/]+)(${yn}*=${yn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qi=/'/g,Yi=/"/g,to=/^(?:script|style|textarea|title)$/i,kn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),E=kn(1),g=kn(2),Kr=kn(3),bt=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Xi=new WeakMap,Zt=qt.createTreeWalker(qt,129);function eo(i,t){if(!Mn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vi!==void 0?Vi.createHTML(t):t}var Bs=(i,t)=>{let e=i.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",r=$e;for(let a=0;a<e;a++){let u=i[a],c,d,h=-1,p=0;for(;p<u.length&&(r.lastIndex=p,d=r.exec(u),d!==null);)p=r.lastIndex,r===$e?d[1]==="!--"?r=ji:d[1]!==void 0?r=Zi:d[2]!==void 0?(to.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=jt):d[3]!==void 0&&(r=jt):r===jt?d[0]===">"?(r=o??$e,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?jt:d[3]==='"'?Yi:qi):r===Yi||r===qi?r=jt:r===ji||r===Zi?r=$e:(r=jt,o=void 0);let y=r===jt&&i[a+1].startsWith("/>")?" ":"";s+=r===$e?u+Ws:h>=0?(n.push(c),u.slice(0,h)+Ji+u.slice(h)+Ot+y):u+Ot+(h===-2?a:y)}return[eo(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},ke=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,r=0,a=t.length-1,u=this.parts,[c,d]=Bs(t,e);if(this.el=i.createElement(c,n),Zt.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Zt.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Ji)){let p=d[r++],y=o.getAttribute(h).split(Ot),v=/([.?@])?(.*)/.exec(p);u.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?vn:v[1]==="?"?_n:v[1]==="@"?wn:oe}),o.removeAttribute(h)}else h.startsWith(Ot)&&(u.push({type:6,index:s}),o.removeAttribute(h));if(to.test(o.tagName)){let h=o.textContent.split(Ot),p=h.length-1;if(p>0){o.textContent=We?We.emptyScript:"";for(let y=0;y<p;y++)o.append(h[y],xe()),Zt.nextNode(),u.push({type:2,index:++s});o.append(h[p],xe())}}}else if(o.nodeType===8)if(o.data===Qi)u.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Ot,h+1))!==-1;)u.push({type:7,index:s}),h+=Ot.length-1}s++}}static createElement(t,e){let n=qt.createElement("template");return n.innerHTML=t,n}};function ie(i,t,e=i,n){if(t===bt)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=Me(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=ie(i,o._$AS(i,t.values),o,n)),t}var bn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??qt).importNode(e,!0);Zt.currentNode=o;let s=Zt.nextNode(),r=0,a=0,u=n[0];for(;u!==void 0;){if(r===u.index){let c;u.type===2?c=new Se(s,s.nextSibling,this,t):u.type===1?c=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(c=new $n(s,this,t)),this._$AV.push(c),u=n[++a]}r!==u?.index&&(s=Zt.nextNode(),r++)}return Zt.currentNode=qt,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Se=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ie(this,t,e),Me(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==bt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ks(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==k&&Me(this._$AH)?this._$AA.nextSibling.data=t:this.T(qt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ke.createElement(eo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new bn(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Xi.get(t.strings);return e===void 0&&Xi.set(t.strings,e=new ke(t)),e}k(t){Mn(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new i(this.O(xe()),this.O(xe()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Bi(t).nextSibling;Bi(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(t,e=this,n,o){let s=this.strings,r=!1;if(s===void 0)t=ie(this,t,e,0),r=!Me(t)||t!==this._$AH&&t!==bt,r&&(this._$AH=t);else{let a=t,u,c;for(t=s[0],u=0;u<s.length-1;u++)c=ie(this,a[n+u],e,u),c===bt&&(c=this._$AH[u]),r||=!Me(c)||c!==this._$AH[u],c===k?t=k:t!==k&&(t+=(c??"")+s[u+1]),this._$AH[u]=c}r&&!o&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},vn=class extends oe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}},_n=class extends oe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==k)}},wn=class extends oe{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=ie(this,t,e,0)??k)===bt)return;let n=this._$AH,o=t===k&&n!==k||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==k&&(n===k||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},$n=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ie(this,t)}};var Vs=xn.litHtmlPolyfillSupport;Vs?.(ke,Se),(xn.litHtmlVersions??=[]).push("3.3.3");var no=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new Se(t.insertBefore(xe(),s),s,void 0,e??{})}return o._$AI(i),o};var Sn=globalThis,St=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=no(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bt}};St._$litElement$=!0,St.finalized=!0,Sn.litElementHydrateSupport?.({LitElement:St});var js=Sn.litElementPolyfillSupport;js?.({LitElement:St});(Sn.litElementVersions??=[]).push("4.2.2");var Ke=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var Zs={attribute:!0,type:String,converter:we,reflect:!1,hasChanged:Ge},qs=(i=Zs,t,e)=>{let{kind:n,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){let{name:r}=e;return{set(a){let u=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,u,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(n==="setter"){let{name:r}=e;return function(a){let u=this[r];t.call(this,a),this.requestUpdate(r,u,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function se(i){return(t,e)=>typeof e=="object"?qs(i,t,e):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,t,e)}function re(i){return se({...i,state:!0,attribute:!1})}var Ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},je=i=>(...t)=>({_$litDirective$:i,values:t}),ae=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Nt=je(class extends ae{constructor(i){if(super(i),i.type!==Ve.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return bt}});var io="important",Ys=" !"+io,V=je(class extends ae{constructor(i){if(super(i),i.type!==Ve.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(Ys);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?io:""):e[n]=o}}return bt}});var oo=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],so=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],ro=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],Tn=385000.49;var I=Math.PI/180,vt=180/Math.PI,Xs=1495978707e-1,lo=6378.14,Te=-.833,Tt=-6,Lt=-12,Ht=-18,An=120*1e3;function Ae(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function le(i){return(i-2451545)/36525}function U(i){let t=i%360;return t<0?t+360:t}function Js(i){let t=le(i);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function Qs(i){let t=i-2451545,e=le(i),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return U(n)}function En(i){let t=le(i),e=U(280.46646+t*(36000.76983+t*3032e-7)),n=U(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*I)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*I)*(.019993-101e-6*t)+Math.sin(3*n*I)*289e-6,s=e+o,r=U(125.04-1934.136*t),a=s-.00569-.00478*Math.sin(r*I),c=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*I),d=a*I,h=c*I,p=U(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*vt),y=Math.asin(Math.sin(h)*Math.sin(d))*vt;return{ra:p,dec:y}}function tr(i){let t=le(i),e=U(280.46646+t*(36000.76983+t*3032e-7)),n=U(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*I)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*I)*(.019993-101e-6*t)+Math.sin(3*n*I)*289e-6,s=U(125.04-1934.136*t);return U(e+o-.00569-.00478*Math.sin(s*I))}function er(i){let t=Ae(i),e=le(t),n=U(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*I)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*I)*(.019993-101e-6*e)+Math.sin(3*n*I)*289e-6,r=(n+s)*I;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*Xs}function Dn(i,t,e,n){let o=U(Qs(n)+e),s=U(o-i.ra),r=t*I,a=i.dec*I,u=s*I,c=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(u))*vt,d=U(Math.atan2(Math.sin(u),Math.cos(u)*Math.sin(r)-Math.tan(a)*Math.cos(r))*vt+180);return{altitude:c,azimuth:d}}function Ze(i,t){let e=Ae(i);return Dn(En(e),t.latitude,t.longitude,e).altitude}function qe(i,t){let e=Ae(i);return Dn(En(e),t.latitude,t.longitude,e)}function nr(i){let t=i;return{D:U(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:U(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:U(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:U(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function uo(i){let t=le(i),e=U(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=nr(t),o=e;for(let a of oo){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;o+=a[4]*Math.sin(u*I)}let s=0;for(let a of so){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;s+=a[4]*Math.sin(u*I)}let r=Tn;for(let a of ro){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;r+=a[4]*Math.cos(u*I)}return{longitude:U(o),latitude:s,distanceKm:r}}function co(i,t,e){let n=Js(e)*I,o=i*I,s=t*I,r=U(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*vt),a=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*vt;return{ra:r,dec:a}}function Ft(i,t){let e=Ae(i),n=uo(e),o=co(n.longitude,n.latitude,e),s=Dn(o,t.latitude,t.longitude,e),r=Math.asin(lo/n.distanceKm)*vt,a=s.altitude-r*Math.cos(s.altitude*I);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:n}}function ir(i){return .7275*(Math.asin(lo/i)*vt)-.5667}var or=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],sr=29.530588853;function Ye(i){let t=Ae(i),e=uo(t),n=co(e.longitude,e.latitude,t),o=En(t),s=tr(t),r=er(i),a=e.distanceKm,u=e.latitude*I,c=Math.acos(Math.min(1,Math.max(-1,Math.cos(u)*Math.cos((e.longitude-s)*I)))),d=Math.atan2(r*Math.sin(c),a-r*Math.cos(c)),h=U(d*vt),p=(1+Math.cos(d))/2,y=(o.ra-n.ra)*I,v=o.dec*I,x=n.dec*I,_=U(Math.atan2(Math.cos(v)*Math.sin(y),Math.sin(v)*Math.cos(x)-Math.cos(v)*Math.sin(x)*Math.cos(y))*vt),S=U(e.longitude-s)/360,f=Math.min(7,Math.floor(S*8+.5)%8),M=S*29.530588853;return{illumination:p,phaseAngle:h,elongation:c*vt,phaseIndex:f,phaseKey:or[f],brightLimbAngle:_,moonAgeDays:M,waxing:S<.5,distanceKm:a}}function Xe(i,t,e,n,o){let s=[];if(!(t>i))return s;let r=Math.max(2,Math.ceil((t-i)/e)),a=(t-i)/r,u=i,c=n(i)-o;for(let d=1;d<=r;d++){let h=i+d*a,p=n(h)-o;if(c===0)s.push({time:u,rising:p>0});else if(c<0&&p>=0||c>0&&p<=0){let y=u,v=h,x=c;for(let _=0;_<50&&v-y>1;_++){let S=(y+v)/2,f=n(S)-o;f<0&&x<0||f>0&&x>0?(y=S,x=f):v=S}s.push({time:(y+v)/2,rising:p>c})}u=h,c=p}return s}function ao(i,t,e,n){let o=i.find(s=>s.rising===t&&s.time>=e&&s.time<n);return o?new Date(o.time):null}function Cn(i,t,e,n=4){let o=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),a=e.getTime(),u=w=>Ze(w,i),c=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let w=r;w<a;w+=d)c.push({time:w,altitude:u(w)});c.push({time:a,altitude:u(a)});let h=-1/0,p=1/0;for(let w of c)w.altitude>h&&(h=w.altitude),w.altitude<p&&(p=w.altitude);let y=[["sunrise","sunset",Te],["civilDawn","civilDusk",Tt],["nauticalDawn","nauticalDusk",Lt],["astronomicalDawn","astronomicalDusk",Ht]],v={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[w,C,A]of y){let B=Xe(o,s,An,u,A);v[w]=ao(B,!0,r,a),v[C]=ao(B,!1,r,a)}let x=r,_=-1/0,S=120*1e3;for(let w=r;w<=a;w+=S){let C=u(w);C>_&&(_=C,x=w)}let f=Math.max(r,x-S),M=Math.min(a,x+S);for(let w=0;w<40&&M-f>1e3;w++){let C=f+(M-f)/3,A=M-(M-f)/3;u(C)<u(A)?f=C:M=A}v.solarNoon=new Date((f+M)/2);let L="none";return p>Te?L="polar-day":h<Te&&(L="polar-night"),{dayStart:t,dayEnd:e,samples:c,maxAltitude:h,minAltitude:p,events:v,polar:L}}function Nn(i,t,e,n=48){let o=typeof t=="number"?t:t.getTime();if(!Number.isFinite(o)||!Number.isFinite(e))return null;let s=a=>Ze(a,i),r=Xe(o,o+n*60*60*1e3,An,s,e)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function rr(i,t,e,n=10){let o=t.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),a=[];for(let d=o;d<s;d+=r)a.push({time:d,altitude:Ft(d,i).apparentAltitude});a.push({time:s,altitude:Ft(s,i).apparentAltitude});let u=-1/0,c=1/0;for(let d of a)d.altitude>u&&(u=d.altitude),d.altitude<c&&(c=d.altitude);return{samples:a,maxAltitude:u,minAltitude:c}}function ho(i,t,e,n,o=10){let s=t.getTime(),r=e.getTime(),a=u=>{if(!u)return null;let c=u.getTime();return c>=s&&c<r?c:null};return{profile:rr(i,t,e,o),rise:a(n.previousRise)??a(n.nextRise),set:a(n.previousSet)??a(n.nextSet)}}function mo(i,t){let e=i.getTime(),n=e-1800*60*1e3,o=e+1800*60*1e3,r=Xe(n,o,An,y=>{let v=Ft(y,t);return v.altitude-ir(v.distanceKm)},0),a=r.filter(y=>y.rising),u=r.filter(y=>!y.rising),c=a.find(y=>y.time>e)??null,d=[...a].reverse().find(y=>y.time<=e)??null,h=u.find(y=>y.time>e)??null,p=[...u].reverse().find(y=>y.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:p?new Date(p.time):null,nextRise:c?new Date(c.time):null,nextSet:h?new Date(h.time):null}}function po(i){return i>0?"day":i>Tt?"civil":i>Lt?"nautical":i>Ht?"astronomical":"night"}function ar(i){return(((Ye(i).moonAgeDays/sr-.5)%1+1)%1+.5)%1-.5}function Ln(i,t){let e=typeof i=="number"?i:i.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?Xe(e,n,360*60*1e3,ar,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function go(i,t=32){let e=typeof i=="number"?i:i.getTime(),o=Ln(e,e+t*24*60*60*1e3)[0];if(!o)return null;let s=Ye(o).illumination;return s<.98?null:{time:o,illumination:s}}function fo(i,t,e=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,c=s,d=s;for(let h=s;h<=r;h+=o){let p=Ft(h,t).distanceKm;p<a&&(a=p,c=h),p>u&&(u=p,d=h)}return{current:Ft(n,t).distanceKm,min:a,minTime:new Date(c),max:u,maxTime:new Date(d),mean:Tn}}function Je(i,t,e="sun"){return(e==="sun"?qe(i,t):Ft(i,t)).azimuth}function b(i,t,e){return Number.isNaN(i)?t:Math.min(e,Math.max(t,i))}function Hn(i,t,e){return i+(t-i)*e}function l(i,t=0){let e=10**t;return Math.round(i*e)/e}function yo(i){let t=i.trim().replace(/^#/,""),e=t.length===3?t.split("").map(o=>o+o).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]}function lr(i){return`#${i.map(t=>Math.round(b(t,0,255)).toString(16).padStart(2,"0")).join("")}`}function Rn(i,t,e){let n=yo(i),o=yo(t);if(!n||!o)return t;let s=b(e,0,1);return lr([Hn(n[0],o[0],s),Hn(n[1],o[1],s),Hn(n[2],o[2],s)])}function Pn(i){return typeof i=="number"&&Number.isFinite(i)}function pt(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let t=Number(i.replace(",","."));if(Number.isFinite(t))return t}return null}function bo(i){return i.length===0?"":i.map((t,e)=>`${e===0?"M":"L"}${l(t.x,2)} ${l(t.y,2)}`).join(" ")}function Qe(i,t=.5){if(i.length<3)return bo(i);let e=[`M${l(i[0].x,2)} ${l(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],a=i[n+2]??r,u=s.x+(r.x-o.x)/6*t*2,c=s.y+(r.y-o.y)/6*t*2,d=r.x-(a.x-s.x)/6*t*2,h=r.y-(a.y-s.y)/6*t*2;e.push(`C${l(u,2)} ${l(c,2)} ${l(d,2)} ${l(h,2)} ${l(r.x,2)} ${l(r.y,2)}`)}return e.join(" ")}function tn(i,t,e=!1){if(i.length===0)return"";let n=e?Qe(i):bo(i),o=i[0],s=i[i.length-1];return`${n} L${l(s.x,2)} ${l(t,2)} L${l(o.x,2)} ${l(t,2)} Z`}function Rt(i,t,e){let n=e*Math.PI/180;return{x:i.x-t*Math.sin(n),y:i.y-t*Math.cos(n)}}function vo(i,t,e){let n=b(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${l(i.x-t,2)} ${l(i.y,2)} a${l(t,2)} ${l(t,2)} 0 1 1 ${l(t*2,2)} 0 a${l(t,2)} ${l(t,2)} 0 1 1 ${l(-t*2,2)} 0 Z`;let o=t*(1-2*n),s=1,r=o>0?0:1,a={x:i.x-t,y:i.y},u={x:i.x+t,y:i.y};return`M${l(a.x,2)} ${l(a.y,2)} A${l(t,2)} ${l(t,2)} 0 0 ${s} ${l(u.x,2)} ${l(u.y,2)} A${l(t,2)} ${l(Math.abs(o),4)} 0 0 ${r} ${l(a.x,2)} ${l(a.y,2)} Z`}function _o(i=new Date){let t=i.getTime();return t+(6e4-t%6e4)+250}var ur=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function ue(i){let{size:t,illumination:e,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:u}=i,c={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=vo(c,d,e),p=r&&t>=26,y=l(-n,2);return g`
    <svg
      class="moon-disc ${a}"
      width="${l(t,1)}"
      height="${l(t,1)}"
      viewBox="0 0 ${l(t,1)} ${l(t,1)}"
      role="img"
      aria-hidden="true"
    >
      <circle
        cx="${l(c.x,2)}" cy="${l(c.y,2)}" r="${l(d,2)}"
        fill="${s}"
      />
      ${h?g`<g transform="rotate(${y} ${l(c.x,2)} ${l(c.y,2)})">
              <path d="${h}" fill="${o}" />
              ${p?g`<g clip-path="url(#${u}-clip)" opacity="0.16">
                      <clipPath id="${u}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${ur.map(v=>{let x={x:c.x+v.x*d,y:c.y+v.y*d};return g`<circle
                          cx="${l(x.x,2)}" cy="${l(x.y,2)}"
                          r="${l(v.r*d,2)}"
                          fill="#5a6488" />`})}
                    </g>`:g``}
            </g>`:g``}
      <circle
        cx="${l(c.x,2)}" cy="${l(c.y,2)}" r="${l(d,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function In(i,t,e,n){let o=Rt(i,t,e),s=e*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),u=b(t*.12,4,9),c=b(t*.07,2.5,5),d={x:o.x+r*u,y:o.y+a*u},h={x:o.x-a*c,y:o.y+r*c},p={x:o.x+a*c,y:o.y-r*c};return g`
    <polygon
      points="${l(d.x,2)},${l(d.y,2)} ${l(h.x,2)},${l(h.y,2)} ${l(p.x,2)},${l(p.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var nn="sun-moon-card",Wn="sun-moon-card",Mo="sun-moon-card-editor";var Kn=24,cr=16,zn=4,dr=12,hr=36,Ee=[2,12],Ut=[320,1200],Gt=[260,800];function ce(i){return i?[Kn,800]:[120,800]}var D={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun"},ko=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],So=400,To=250,Ao=1200*1e3,Bn={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},Vn={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},Eo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],jn=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Wt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon"],remainingTimeFocus:["sun","next"]},Do=700,mr=260,Zn=16,qn=4,Co=72,wo=10,Gn=56,pr=84,gr=96,On=74,fr=Gn+8,yr=12,br=10,at=4,en=4,$o=30,xo=44,vr=26,_r=72,Yn=96,Fn=20,Un=18;function No(i,t,e){if(e.minimal_mode){let T=(e.minimal_show_times||e.minimal_show_zenith)&&i>=hr?dr:0,P=Math.max(cr,i-2*zn-T);return{padding:zn,minimalTimesHeight:T,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,t-2*zn),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:P,minimal:!0,compact:!1}}let n=e.compact_mode,o=n?br:yr,s=Math.max(40,i-2*o),r=0,a=e.show_footer&&!n?Fn+at:0,u=$o+at+xo+at+a+(Un+en)+On,c=e.show_header&&!n&&s>=u,d=c?$o:0;s-=d,c&&(s-=at,r+=at);let h=n?vr:xo,p=e.show_events&&s-(h+at)-a>=pr,y=p?h:0;s-=y,p&&(s-=at,r+=at);let v=e.show_astronomical_details?Yn:_r,x=!n&&(e.show_sun||e.show_moon)&&s-(v+at)-a>=gr,_=x?v:0;s-=_,x&&(s-=at,r+=at);let S=e.show_footer&&!n&&p&&s-(Fn+at)>=fr,f=S?Fn:0;s-=f,S&&(s-=at,r+=at);let M=Math.max(Gn,s),L=e.show_day_chart&&!n&&p&&M-Un-en>=On,w=L?Un:0;L&&(r+=en);let C=Math.max(Gn,M-w-(L?en:0)),A=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),B=A&&t>=Do&&C>=On,lt=Math.max(80,t-2*o),Z=B?Math.round(Math.min(mr,(lt-wo)/3)):0,et=Math.max(120,B?lt-wo-Z:lt);return{padding:o,showHeader:c,showEvents:p,showDetails:x,showFooter:S,showLegend:L,skyViewSide:B,skyViewInline:!B&&A&&x,skyViewWidth:Z,chartWidth:et,gaps:r,headerHeight:d,eventsHeight:y,detailsHeight:_,footerHeight:f,legendHeight:w,chartHeight:C,minimal:!1,minimalTimesHeight:0,compact:n}}function Lo(i){return i>=Do?360:320}function on(){return{type:`custom:${nn}`,card_height:340}}var Xn={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function j(i,t,e){let o=(Xn[i]??Xn.en)[t]??Xn.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function Yt(i,t){return((i&&i!=="auto"?i:t)??"").toLowerCase().startsWith("de")?"de":"en"}function Po(i,t,e){let n=i;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var Ho=new Map;function Jn(i,t,e){let n=`${t}|${i}`,o=Ho.get(n);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(t,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(u=>u.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return Ho.set(n,s),s}var Ro=new Map;function wr(i,t,e){let n=`${i}|${t}|${e}`,o=Ro.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}Ro.set(n,o)}return o}function Q(i,t){return wr(t.locale,t.timeZone,t.hour12).format(i)}function Io(i,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function Qn(i,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}catch{return i.toFixed(t)}}function dt(i,t=1,e="de-DE"){return`${Qn(i,t,e)}\xB0`}function sn(i,t="de-DE"){return`${Qn(Math.round(i),0,t)} km`}function zo(i,t="de-DE"){let e=i<0?"\u2212":"+",n=Math.round(Math.abs(i)),o=Math.floor(n/60),s=n%60,r=t.startsWith("de")?":":"h ",a=t.startsWith("de")?"":"m";return`${e}${o}${r}${String(s).padStart(2,"0")}${a}`}function Oo(i){let t=Math.max(0,Math.round(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function ti(i,t){let e=Math.max(0,Math.round(i));if(e<60)return t("countdownMinutes",{minutes:String(e)});let n=Math.floor(e/60),o=e%60;return n<24?t("countdownHours",{hours:String(n),minutes:String(o)}):t("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function rn(i,t){return t(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function Fo(i,t="de-DE"){return`${Qn(i*100,0,t)} %`}function Xt(i,t){let e=(i%360+360)%360,n=jn[0],o=1/0;for(let r of jn){let a=Math.abs((e-r.deg+540)%360-180);a<o&&(o=a,n=r)}let s=`dir${n.key}`;return j(t,s)}function Uo(i,t,e,n){return{language:i,locale:t,timeZone:e,hour12:n,t:(o,s)=>j(i,o,s)}}function Go(i,t){if(i.length<=t)return i;let e=i.length/t,n=[];for(let s=0;s<t;s++)n.push(i[Math.floor(s*e)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function $r(i,t,e,n,o){if(i.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),a,u;if(s!==void 0&&r!==void 0&&r>s)a=n(s),u=n(r);else if(e==="polar-day")a=i[0].x,u=i[i.length-1].x;else return null;let c=i.filter(d=>d.x>=a-.5&&d.x<=u+.5);return c.length<2?null:{path:tn(c,o,!0),cx:(a+u)/2,cy:o,r:Math.max(6,(u-a)/2)}}function xr(i,t){let e=t?Math.max(i.maxAltitude,t.maxAltitude):i.maxAltitude,n=t?Math.min(i.minAltitude,t.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(e-o)*.1),r=b(e+s,-18,90.5);return[b(Math.max(-28,n-2),-90,r-6),r]}function ei(i,t,e=2.2){let n=[0,Tt,Lt,Ht],o=[t.day,t.civil,t.nautical,t.astronomical,t.night];if(i>e/2){let s=b(1-i/12,0,1)*.5;return Rn(t.day,t.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+e/2,a=n[s]-e/2;if(i>=r)return o[s];if(i>a){let u=(r-i)/e;return Rn(o[s],o[s+1],u*u*(3-2*u))}}return o[o.length-1]}function Mr(i,t,e,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,a=t+e*(1-r);o.push({offset:r,color:ei(a,i)})}return o}function kr(i,t,e,n,o,s){let r=i.samples;if(r.length<2)return[];let a=[],u=(d,h)=>{d&&!Number.isNaN(d.getTime())&&a.push({time:d.getTime(),color:h})};u(t.astronomicalDawn,e.astronomical),u(t.nauticalDawn,e.nautical),u(t.civilDawn,e.civil),u(t.sunrise,e.glow),u(t.solarNoon,e.day),u(t.sunset,e.glow),u(t.civilDusk,e.civil),u(t.nauticalDusk,e.nautical),u(t.astronomicalDusk,e.astronomical);let c=[{offset:0,color:ei(r[0].altitude,e)},...a.map(d=>({offset:b((n(d.time)-o)/s,0,1),color:d.color})),{offset:1,color:ei(r[r.length-1].altitude,e)}];return c.sort((d,h)=>d.offset-h.offset),c}function ni(i){let{profile:t,events:e,now:n,width:o,height:s,palette:r,format:a,showSun:u,showMoon:c,moon:d,moonPath:h,showTwilight:p,twilightLevel:y,animations:v,cardStyle:x,minimal:_,sunMarkerSize:S,uid:f,showAstronomicalLayers:M,currentAltitude:L,countdown:w=null}=i,C=Math.max(_?60:120,o),A=Math.max(_?12:56,s),B=_?2:4,lt=_?2:4,Z=_?2:6,et=!_&&A>=112,st=et?b(l(A*.13,1),13,20):0,$=B,T=Math.max(10,C-B-lt),P=Z,F=Math.max(10,A-Z-st),z=P+F,[q,_t]=xr(t,h?.profile??null),X=Math.max(1,_t-q),wt=t.dayStart.getTime(),O=t.dayEnd.getTime(),nt=Math.max(1,O-wt),J=m=>$+(m-wt)/nt*T,ut=m=>z-(b(m,-95,95)-q)/X*F,Qt=ut(0),G=b(Math.round(T/1.6),60,361),it=Go(t.samples,G).map(m=>({x:J(m.time),y:ut(m.altitude)})),gt=Mr(r,q,X),R=kr(t,e,r,J,$,T),ct=`${f}-area`,$t=`${f}-line`,ft=`${f}-clip`,pe=`${f}-glow`,pi=`${f}-sky`,gi=`${f}-soft`,fi=`${f}-soft-fade`,yi=`${f}-foot`,bi=`${f}-foot-fade`,vi=`${f}-side`,_i=`${f}-side-fade`,xt=x==="horizon",cs=tn(it,xt?l(Qt,2):z+1,!0),ds=Qe(it),wi=h?Go(h.profile.samples,b(Math.round(T/2),40,240)).map(m=>({x:J(m.time),y:ut(m.altitude)})):null,un=wi&&!_?Qe(wi):null,cn="var(--smc-moon-line, #cbd5e1)",hs=b(l(A*.013,2),1.1,1.9),ms=tn(it,P-1,!0),ge=x==="flat"?.6:xt?.3:1,ps=xt?0:l(.15*ge,3),Et=P-1,dn=z+1,It=Math.max(1,dn-Et),gs=b(F*.14,_?1.5:6,18),fs=b(F*.08,_?1:4,12),ys=b(T*.02,_?2:6,14),$i=b(l(F*.06,1),_?1.5:4,10),bs=l(b(gs/It,0,.45),4),xi=l(1-b(fs/It,0,.45),4),te=$-1,Ce=$+T+1,Mi=l(b(ys/Math.max(1,Ce-te),0,.4),4),vs=Math.max(16,T*.16),_s=b(F*.45,9,46),Ne=[];F>=34&&(e.sunrise&&Ne.push({id:`${f}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&Ne.push({id:`${f}-glow-set`,time:e.sunset,color:r.glow}));let ee=_?null:$r(it,e,t.polar,J,Qt),ki=`${f}-dome`,Y=a.t,Le=[],fe=m=>{m.time&&!Number.isNaN(m.time.getTime())&&Le.push({secondary:!1,...m})};if(e.sunrise&&fe({key:"sunrise",time:e.sunrise,label:Y("sunrise"),shortLabel:Y("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&fe({key:"sunset",time:e.sunset,label:Y("sunset"),shortLabel:Y("sunsetShort"),kind:"sunset",altitude:0}),p&&(e.civilDawn&&fe({key:"civilDawn",time:e.civilDawn,label:Y("civilDawn"),shortLabel:Y("civilDawnShort"),kind:"dawn",altitude:Tt}),e.civilDusk&&fe({key:"civilDusk",time:e.civilDusk,label:Y("civilDusk"),shortLabel:Y("civilDuskShort"),kind:"dusk",altitude:Tt}),y==="all"||M)){let m=[["nauticalDawn","dawn","nauticalDawn",Lt],["nauticalDusk","dusk","nauticalDusk",Lt],["astronomicalDawn","dawn","astronomicalDawn",Ht],["astronomicalDusk","dusk","astronomicalDusk",Ht]];for(let[N,H,W,K]of m){let ot=e[N];ot&&fe({key:N,time:ot,label:Y(W),shortLabel:Y(W),kind:H,altitude:K,secondary:!0})}}Le.sort((m,N)=>m.time.getTime()-N.time.getTime());let ne=b(l(A*.062,1),7.5,10.5),He=b(l(ne+5,1),11,st||15),Si=m=>m.secondary?2:m.kind==="sunrise"||m.kind==="sunset"?0:1,ws=T<240?3:T<340?4:6,Ti=_?[]:[...Le].sort((m,N)=>Si(m)-Si(N)||m.time.getTime()-N.time.getTime()).slice(0,Math.max(2,ws)),Ai=T<260,$s=!Ai&&(Ti.length>3||T<340),Ei=4,xs=Math.max(8,ne*1.2),Kt=[];for(let m of Ti){let N=Ai?Q(m.time,a):$s?m.shortLabel:m.label,H=N.length*ne*.56+8,W=b(J(m.time.getTime()),$+H/2,$+T-H/2),K=Mt=>Kt.some(Bt=>Math.abs(Bt.x-Mt)<(Bt.width+H)/2+Ei),ot=K(W)?null:W;if(ot===null)for(let Mt of Kt){let Bt=(Mt.width+H)/2+Ei;for(let Vt of[Mt.x+Bt,Mt.x-Bt])if(Math.abs(Vt-W)<=xs&&Vt-H/2>=$-.5&&Vt+H/2<=$+T+.5&&!K(Vt)){ot=Vt;break}if(ot!==null)break}ot!==null&&Kt.push({x:ot,width:H,text:N,secondary:m.secondary})}Kt.sort((m,N)=>m.x-N.x);let rt=b(J(n.getTime()),$,$+T),Ms=r.day,zt=b(l(A*.16,1),Math.min(2.8,S),S),Di=b(l(zt*.22,2),.8,1.4),Dt=b(l(zt*1.1,1),3.5,7),Ci=(m,N)=>F<=N*2?P+F/2:b(ut(m),P+N,z-N),Ni=Ci(L,zt),ht=(()=>{if(_||!w)return null;let m=w.time.getTime();if(!(m>n.getTime()))return null;let H=q<0&&_t>0?ut(0):z-1,W=J(m),K=b(W,$,$+T);if(K-rt<2)return null;let ot=w.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":w.body==="twilight"?r.civil:r.day;return{y:H,endX:K,endsInside:W<=$+T,color:ot}})(),hn=b(l(A*.016,1),2,3),mt=(()=>{if(_||!w?.label)return null;let m=ne,N=m+5,H=w.label.length*m*.56+10,W=Math.max(zt,3)+3,K=rt+W,ot=K+H<=$+T?K:Math.max($,rt-W-H),Mt=et||Kt.length===0?P+1:P+He+3;return{x:ot,y:Mt,width:H,height:N,fontSize:m}})(),yt=c&&d&&!_?{altitude:d.altitude,y:Ci(d.altitude,Dt),clamped:d.altitude<q||d.altitude>_t}:null,ks=yt?Math.abs(yt.y-Ni):Number.POSITIVE_INFINITY,mn=zt+Dt+2,ye=yt?ks>=zt+Dt+1?rt:rt+mn+Dt<=$+T?rt+mn:Math.max($+Dt,rt-mn):null,Ss=v?"smc-pulse":"",Ts=v?`url(#${pe})`:"",pn=[{altitude:0,label:Y("horizon"),key:"horizon"}];M||y==="all"?pn.push({altitude:Tt,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Lt,label:`${Y("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Ht,label:`${Y("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):p&&pn.push({altitude:Tt,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"});let As=!_&&F>=86&&T>=250,Es=pn.filter(m=>(!_||m.key==="horizon")&&m.altitude>q+.5&&m.altitude<_t-.5),Ds=b(l(A*.055,1),7.5,9.5),be=e.solarNoon,Li=!_&&!!be&&t.maxAltitude>0&&F>=104&&T>=220&&M,Hi=Li?`${Y("zenith")} ${Q(be,a)} \xB7 ${dt(t.maxAltitude,1,a.locale)}`:"",Re=b(l(A*.055,1),7.5,9.5),Pe=Hi.length*Re*.56+10,Ri=be?b(J(be.getTime()),$+Pe/2,$+T-Pe/2):0,Pi=be?ut(t.maxAltitude):0,Ie=Re+5,Ii=b(Pi-Ie-4,P,Math.max(P,Pi+10)),zi=_?1:T<220?4:T<420?6:8,Oi=[];for(let m=1;m<zi;m++)Oi.push($+T*m/zi);return g`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(C,1)} ${l(A,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${Y("title")}"
    >
      <defs>
        <linearGradient id="${ct}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(P,1)}" x2="0" y2="${l(z,1)}">
          ${gt.map(m=>g`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color}" />`)}
        </linearGradient>
        <linearGradient id="${$t}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(P,1)}" x2="0" y2="${l(z,1)}">
          ${gt.map(m=>g`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${R.length>=2?g`<linearGradient id="${pi}" gradientUnits="userSpaceOnUse"
                x1="${l($,1)}" y1="0" x2="${l($+T,1)}" y2="0">
                ${R.map(m=>g`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color}" />`)}
              </linearGradient>`:g``}
        ${Ne.map(m=>g`<radialGradient id="${m.id}">
              <stop offset="0%" stop-color="${m.color}" stop-opacity="${l(.5*ge,3)}" />
              <stop offset="45%" stop-color="${m.color}" stop-opacity="${l(.2*ge,3)}" />
              <stop offset="100%" stop-color="${m.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${ee?g`<radialGradient id="${ki}" gradientUnits="userSpaceOnUse"
                cx="${l(ee.cx,1)}" cy="${l(ee.cy,1)}" r="${l(ee.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${l(.3*ge,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${l(.18*ge,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:g``}
        <linearGradient id="${fi}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(Et,1)}" x2="0" y2="${l(dn,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${bs}" stop-color="#ffffff" />
          <stop offset="${xi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${gi}" maskUnits="userSpaceOnUse"
          x="${l($-2,1)}" y="${l(Et,1)}"
          width="${l(T+4,1)}" height="${l(It,1)}">
          <rect
            x="${l($-2,1)}" y="${l(Et,1)}"
            width="${l(T+4,1)}" height="${l(It,1)}"
            fill="url(#${fi})" />
        </mask>
        <linearGradient id="${bi}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(Et,1)}" x2="0" y2="${l(dn,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${xi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${yi}" maskUnits="userSpaceOnUse"
          x="${l($-2,1)}" y="${l(Et,1)}"
          width="${l(T+4,1)}" height="${l(It,1)}">
          <rect
            x="${l($-2,1)}" y="${l(Et,1)}"
            width="${l(T+4,1)}" height="${l(It,1)}"
            fill="url(#${bi})" />
        </mask>
        <linearGradient id="${_i}" gradientUnits="userSpaceOnUse"
          x1="${l(te,1)}" y1="0" x2="${l(Ce,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Mi}" stop-color="#ffffff" />
          <stop offset="${l(1-Mi,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${vi}" maskUnits="userSpaceOnUse"
          x="${l(te,1)}" y="${l(Et,1)}"
          width="${l(Ce-te,1)}" height="${l(It,1)}">
          <rect
            x="${l(te,1)}" y="${l(Et,1)}"
            width="${l(Ce-te,1)}" height="${l(It,1)}"
            fill="url(#${_i})" />
        </mask>
        <clipPath id="${ft}">
          <rect x="${l($-1,1)}" y="${l(P-2,1)}"
            width="${l(T+2,1)}" height="${l(F+4,1)}"
            rx="${$i}" ry="${$i}" />
        </clipPath>
        ${v?g`<filter id="${pe}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${l(zt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:g``}
      </defs>

      <g clip-path="url(#${ft})">
        ${Oi.map(m=>g`<line x1="${l(m,1)}" y1="${l(P,1)}" x2="${l(m,1)}" y2="${l(z,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${vi})">
        <path d="${cs}" fill="url(#${ct})" opacity="0.9" mask="url(#${yi})" />
        <g mask="url(#${gi})">
          ${R.length>=2&&!xt?g`<path d="${ms}" fill="url(#${pi})" opacity="${ps}" />`:g``}
          ${Ne.map(m=>{let N=b(J(m.time.getTime()),$,$+T),H=b(Qt,P,z);return g`<ellipse
                cx="${l(N,1)}" cy="${l(H,1)}"
                rx="${l(vs,1)}" ry="${l(_s,1)}"
                fill="url(#${m.id})" />`})}
          ${ee&&!xt?g`<path d="${ee.path}" fill="url(#${ki})" opacity="0.95" />`:g``}
        </g>
        </g>
        ${un?g`<path
                class="moon-curve"
                data-body="moon"
                d="${un}"
                fill="none"
                stroke="${cn}"
                stroke-width="${hs}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${xt?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:g``}
        ${h&&un?g`<g class="moon-events">
                ${[[h.rise,"moonrise"],[h.set,"moonset"]].filter(m=>m[0]!==null).map(([m,N])=>{let H=b(J(m),$,$+T),W=b(ut(0),P,z),K=b(l(A*.05,1),4,8);return g`<g>
                      <title>${a.t(N)} ${Q(new Date(m),a)}</title>
                      <line
                        x1="${l(H,1)}"
                        y1="${l(W-K,1)}"
                        x2="${l(H,1)}"
                        y2="${l(W+K,1)}"
                        stroke="${cn}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${l(H,1)}"
                        cy="${l(W,1)}"
                        r="${b(l(A*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${cn}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:g``}
        <path
          d="${ds}"
          fill="none"
          stroke="url(#${$t})"
          stroke-width="${b(l(A*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${Es.map(m=>{let N=ut(m.altitude),H=m.key==="horizon";return g`<g>
            <line
              x1="${l($,1)}" y1="${l(N,1)}"
              x2="${l($+T,1)}" y2="${l(N,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${H&&xt?1.5:H?1:.6}"
              stroke-dasharray="${H&&xt?"999 0":H?"3 3":"2 4"}"
              opacity="${H&&xt?.9:H?.6:xt?.3:.45}"
            />
            ${As?g`<text
                    x="${l($+3,1)}"
                    y="${l(N-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${Ds}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${m.label}</text>`:g``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${Le.map(m=>{let N=b(J(m.time.getTime()),$,$+T),H=b(ut(m.altitude),P,z),W=!m.secondary,K=W?b(l(A*.022,1),1.8,3):1.4,ot="var(--smc-marker-strong, rgba(255,255,255,0.9))",Mt="var(--smc-marker-soft, rgba(255,255,255,0.55))",Bt=m.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":m.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":m.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",Vt=W?Bt:Mt,Cs=W?ot:Mt,Ns=m.kind==="sunrise"||m.kind==="sunset"?g`
                <circle cx="${l(N,1)}" cy="${l(H,1)}" r="${K+1}"
                  fill="${m.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${l(N-K*2.6,1)}"
                  y1="${l(m.kind==="sunrise"?H+K+2:H-K-2,1)}"
                  x2="${l(N+K*2.6,1)}"
                  y2="${l(m.kind==="sunrise"?H+K+2:H-K-2,1)}"
                  stroke="${ot}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:g`<circle cx="${l(N,1)}" cy="${l(H,1)}" r="${K}"
                  fill="${Cs}" opacity="0.85" />`;return g`<g>
            <line
              x1="${l(N,1)}" y1="${l(P,1)}"
              x2="${l(N,1)}" y2="${l(z,1)}"
              stroke="${Vt}" stroke-width="${W?1:.7}"
              stroke-dasharray="3 3" opacity="${W?.5:.25}" />
            ${Ns}
          </g>`})}
      </g>

      ${ht?g`<g class="countdown-track">
              <title>${w.title}</title>
              <line
                x1="${l(rt,1)}" y1="${l(ht.y,1)}"
                x2="${l(ht.endX,1)}" y2="${l(ht.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${l(hn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${l(rt,1)}" y1="${l(ht.y,1)}"
                x2="${l(ht.endX,1)}" y2="${l(ht.y,1)}"
                stroke="${ht.color}"
                stroke-width="${hn}"
                stroke-linecap="round" />
              ${ht.endsInside?g`<circle
                      cx="${l(ht.endX,1)}"
                      cy="${l(ht.y,1)}"
                      r="${l(hn+.8,1)}"
                      fill="${ht.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:g``}
            </g>`:g``}

      <g class="now-marker">
        <line
          x1="${l(rt,1)}" y1="${l(P,1)}"
          x2="${l(rt,1)}" y2="${l(z,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${b(l(A*.012,2),1,1.8)}"
          opacity="0.85" />
        ${u?g`<g class="now-sun ${Ss}" filter="${Ts}">
                <title>${a.t("chartSunNow",{altitude:dt(L,1,a.locale)})}</title>
                <circle
                  cx="${l(rt,1)}"
                  cy="${l(Ni,1)}"
                  r="${zt}"
                  fill="${Ms}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Di}"
                />
              </g>`:g``}
        ${yt&&ye!==null&&d?g`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:dt(yt.altitude,1,a.locale)})}${yt.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${ye===rt?g``:g`<line
                        x1="${l(rt,1)}"
                        y1="${l(yt.y,1)}"
                        x2="${l(ye,1)}"
                        y2="${l(yt.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${l(ye,1)}"
                  cy="${l(yt.y,1)}"
                  r="${l(Dt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Di}" />
                <g
                  transform="translate(${l(ye-Dt,1)} ${l(yt.y-Dt,1)})"
                  opacity="${yt.clamped?.6:1}"
                >
                  ${ue({size:l(Dt*2,1),illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${f}-moon-now`})}
                </g>
              </g>`:g``}
      </g>

      ${Li?g`<g class="zenith-chip">
              <rect
                x="${l(Ri-Pe/2,1)}"
                y="${l(Ii,1)}"
                width="${l(Pe,1)}"
                height="${l(Ie,1)}"
                rx="${l(Ie/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${l(Ri,1)}"
                y="${l(Ii+Ie/2+Re*.36,1)}"
                text-anchor="middle"
                font-size="${Re}"
                fill="var(--smc-label-color, #ffffff)"
              >${Hi}</text>
            </g>`:g``}

      ${mt?g`<g class="countdown-label">
              <title>${w.title}</title>
              <rect
                x="${l(mt.x,1)}"
                y="${l(mt.y,1)}"
                width="${l(mt.width,1)}"
                height="${l(mt.height,1)}"
                rx="${l(mt.height/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.9" />
              <text
                x="${l(mt.x+mt.width/2,1)}"
                y="${l(mt.y+mt.height/2+mt.fontSize*.36,1)}"
                text-anchor="middle"
                font-size="${mt.fontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${w.label}</text>
            </g>`:g``}

      ${et?g`<line
              x1="${l($,1)}" y1="${l(z+.5,1)}"
              x2="${l($+T,1)}" y2="${l(z+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:g``}

      ${Kt.length?g`<g class="event-labels" font-size="${ne}">
              ${Kt.map(m=>{let N=et?z+2:P;return g`<g>
                  <rect
                    x="${l(m.x-m.width/2,1)}"
                    y="${l(N,1)}"
                    width="${l(m.width,1)}"
                    height="${l(He,1)}"
                    rx="${l(He/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${m.secondary?.6:.88}" />
                  <text
                    x="${l(m.x,1)}"
                    y="${l(N+He/2+ne*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${m.secondary?.75:1}"
                  >${m.text}</text>
                </g>`})}
            </g>`:g``}
    </svg>
  `}function ii(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Sr(i,t,e){let n=[];for(let o=0;o<t;o++){let s=Math.sqrt(ii(i*7.13+o*1.37))*e*.96,r=ii(i*3.71+o*2.11)*360,a=Rt({x:0,y:0},s,r),u=ii(i*5.19+o*4.53);n.push({x:a.x,y:a.y,r:.35+u*.75,opacity:.16+u*.34})}return n}function oi(i,t){return b((90-i)/90*t,0,t)}function si(i){let{width:t,height:e,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:u,palette:c,format:d,animations:h,uid:p,showCardinals:y=!0,seed:v=0}=i,x=Math.max(80,t),_=Math.max(80,e),S=6,f={x:x/2,y:_/2},M=Math.max(10,Math.min(x,_)/2-S),L=`${p}-dome`,w=`${p}-dome-clip`,C=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],A=b(l(M*.17,1),7,11),B=n?n.altitude>0:!1,lt=b(l(M*.11,1),4,11),Z=n?Rt(f,oi(n.altitude,M),n.azimuth):null,et=a&&n&&Z,st=o?o.altitude>0:!1,$=b(l(M*.24,1),10,22),T=o?Rt(f,oi(o.altitude,M),o.azimuth):null,P=u&&o&&T&&r,F=y&&M>=42,z=b(l(M*.14,1),6.5,9),q=[{altitude:30,radius:M*(60/90)},{altitude:60,radius:M*(30/90)}],X=(n?.altitude??-90)<-6?Sr(Math.max(1,Math.round(v)),46,M):[],wt=s.filter(O=>O.altitude>=-8).map(O=>Rt(f,oi(O.altitude,M),O.azimuth));return g`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(x,1)} ${l(_,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${L}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${c.skyTop}" />
          <stop offset="100%" stop-color="${c.skyBottom}" />
        </radialGradient>
        <clipPath id="${w}">
          <circle cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(M,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(M,1)}"
        fill="url(#${L})" opacity="0.55" />

      <g clip-path="url(#${w})">
        ${X.length?g`<g class="stars">
                ${X.map(O=>g`<circle
                      cx="${l(f.x+O.x,1)}"
                      cy="${l(f.y+O.y,1)}"
                      r="${l(O.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${l(O.opacity,2)}" />`)}
              </g>`:g``}
        ${q.map(O=>g`<circle
              cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(O.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${l(f.x-M,1)}" y1="${l(f.y,1)}"
          x2="${l(f.x+M,1)}" y2="${l(f.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${l(f.x,1)}" y1="${l(f.y-M,1)}"
          x2="${l(f.x,1)}" y2="${l(f.y+M,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${wt.length>1?g`<path
                d="M${wt.map(O=>`${l(O.x,1)} ${l(O.y,1)}`).join(" L")}"
                fill="none"
                stroke="${c.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:g``}
      </g>

      <circle
        cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(M,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${F?g`<g
              font-size="${z}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${q.map(O=>{let nt=Rt(f,O.radius,45);return g`<text
                  x="${l(nt.x,1)}"
                  y="${l(nt.y+z*.35,1)}"
                >${O.altitude}°</text>`})}
            </g>`:g``}

      ${y?g`<g font-size="${A}" fill="var(--smc-muted-color)" opacity="0.7">
              ${C.map(O=>{let nt=Rt(f,M*.87,O.azimuth);return g`<text
                  x="${l(nt.x,1)}"
                  y="${l(nt.y+A*.35,1)}"
                  text-anchor="middle"
                >${O.key}</text>`})}
            </g>`:g``}

      ${et&&B&&Z?g`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${l(Z.x,1)}" cy="${l(Z.y,1)}" r="${lt}"
                fill="${c.lineDay}" opacity="0.28" />
              <circle
                cx="${l(Z.x,1)}" cy="${l(Z.y,1)}" r="${l(lt*.55,1)}"
                fill="${c.lineDay}" />
            </g>`:g``}
      ${a&&n&&!B?In(f,M,n.azimuth,c.lineNight):g``}

      ${P&&st&&T&&r?g`<g transform="translate(${l(T.x-$/2,1)} ${l(T.y-$/2,1)})">
              ${ue({size:$,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:$>=16,uid:`${p}-moon`})}
            </g>`:g``}
      ${u&&o&&!st?In(f,M,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):g``}
    </svg>
  `}function ri(i,t,e){i.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}function Tr(i){if(typeof i!="string")return null;let[t,e]=i.split(".",2);return!t||!e?null:[t,e]}function Wo(i,t,e,n,o){typeof i?.callService=="function"&&i.callService(t,e,n,o)}function Ko(i,t,e,n,o){if(!n){o?.();return}switch(n.action){case"none":return;case"open-popup":o?.();return;case"more-info":ri(i,"hass-more-info",{entityId:n.entity??e.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),ri(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":Wo(t,"homeassistant","toggle",{entity_id:n.entity??e.entity});return;case"call-service":case"perform-action":{let s=Tr(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,a=typeof n.target=="object"&&n.target!==null?n.target:void 0;Wo(t,s[0],s[1],r,a);return}case"fire-dom-event":ri(window,"ll-custom",n);return;default:return}}function ai(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function li(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function an(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function ln(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var Bo="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function Vo(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${Bo}
        fill="${t}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function jo(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${Bo}
        fill="${t}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function Zo(i=20,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function qo(i=18,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var Yo=new Map;function Xo(i){let t=Yo.get(i);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Yo.set(i,t)),t}function Ar(i){try{return Xo(i)}catch{return Xo("UTC")}}function ui(i,t){let e=Ar(t).formatToParts(i),n={};for(let o of e)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function Jo(i,t){let e=ui(i,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function Er(i,t,e,n=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,t-1,e,n,o,s),u=1440*60*1e3,c=[Jo(new Date(a-u),r),Jo(new Date(a+u),r)],d=[...new Set(c)].map(p=>a-p).filter(p=>{let y=ui(new Date(p),r);return y.year===i&&y.month===t&&y.day===e&&y.hour===n&&y.minute===o&&y.second===s}).sort((p,y)=>p-y);if(d.length>0)return new Date(d[0]);let h=Math.min(...c);return new Date(a-h)}function de(i,t){let e=ui(i,t);return Er(e.year,e.month,e.day,0,0,0,t)}function Qo(i,t){let e=de(i,t);return de(new Date(e.getTime()+2160*60*1e3),t)}function At(i,t){return Math.round(de(i,t).getTime()/(1440*60*1e3))}function ts(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function tt(i,t){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:t}function he(i,t,e){return typeof i=="string"&&t.includes(i)?i:e}function ci(i,t,e,n,o,s=0){let r=pt(i);if(r===null)return t;let a=b(r,e[0],e[1]);return Math.abs(a-r)>1e-9&&o.push(j(n,"invalidRange",{value:String(i),min:String(e[0]),max:String(e[1])})),s===0?Math.round(a):l(a,s)}function di(i,t,e){if(i==null)return null;let n=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=n?.action;if(typeof o!="string"||o.trim()==="")return e.push(j(t,"invalidAction",{value:String(i)})),null;let s=o.trim();return ko.includes(s)?{...n,action:s}:(e.push(j(t,"invalidAction",{value:s})),null)}function is(i,t="en"){let e=[],n=[],o=i??{},s=tt(o.minimal_mode,D.minimal_mode),r=ce(s),a=D.card_height;if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(b(o.card_height,r[0],r[1])),a!==o.card_height&&n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let y=pt(o.card_height);y===null?e.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(b(y,r[0],r[1]))}let u=null,c=null,d=pt(o.latitude),h=pt(o.longitude);return d!==null&&(d>=-90&&d<=90?u=d:n.push(j(t,"invalidNumber",{value:String(o.latitude)}))),h!==null&&(h>=-180&&h<=180?c=h:n.push(j(t,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():D.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():D.moon_entity,card_height:a,show_sun:tt(o.show_sun,D.show_sun),show_moon:tt(o.show_moon,D.show_moon),show_twilight:tt(o.show_twilight,D.show_twilight),show_astronomical_details:tt(o.show_astronomical_details,D.show_astronomical_details),compact_mode:tt(o.compact_mode,D.compact_mode),minimal_mode:s,minimal_show_times:tt(o.minimal_show_times,D.minimal_show_times),minimal_show_zenith:tt(o.minimal_show_zenith,D.minimal_show_zenith),sun_marker_size:ci(o.sun_marker_size,D.sun_marker_size,Ee,t,n,1),popup_width:ci(o.popup_width,D.popup_width,Ut,t,n),popup_height:ci(o.popup_height,D.popup_height,Gt,t,n),show_remaining_time:tt(o.show_remaining_time,D.show_remaining_time),remaining_time_focus:he(o.remaining_time_focus,Wt.remainingTimeFocus,D.remaining_time_focus),tap_action:di(o.tap_action,t,n),hold_action:di(o.hold_action,t,n),double_tap_action:di(o.double_tap_action,t,n),card_style:he(o.card_style,Wt.cardStyle,D.card_style),theme_mode:he(o.theme_mode,Wt.themeMode,D.theme_mode),animations:tt(o.animations,D.animations),time_format:he(o.time_format,Wt.timeFormat,D.time_format),language:he(o.language,Wt.language,D.language),show_header:tt(o.show_header,D.show_header),show_day_chart:tt(o.show_day_chart,D.show_day_chart),show_sky_view:tt(o.show_sky_view,D.show_sky_view),show_events:tt(o.show_events,D.show_events),show_moon_times:tt(o.show_moon_times,D.show_moon_times),show_footer:tt(o.show_footer,D.show_footer),twilight_level:he(o.twilight_level,Wt.twilightLevel,D.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:u,longitude:c},errors:e,warnings:n}}function os(i,t){let e=ce(i.minimal_mode);return i.card_height==="auto"?b(Lo(t),e[0],e[1]):b(i.card_height,e[0],e[1])}function Dr(i,t,e,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},u={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:t,location:o,locationName:"",extras:Cr(t,ss(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:u,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function ss(i){return i==="de"?"de-DE":"en-GB"}function Cr(i,t){return{timeZoneLongName:Jn(i,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null}}function Nr(i,t){let e=Ln(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function Lr(i,t,e){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=Eo[n-1];return j(e,"folkName",{name:j(e,o)})}function es(i,t,e,n){return i?{time:i,azimuth:Je(i,t,"moon"),dayOffset:At(i,n)-At(e,n)}:null}function Hr(i){if(typeof i!="string"||i.trim()==="")return null;let t=new Date(i);return Number.isNaN(t.getTime())?null:t}var ns=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],Rr={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function Pr(i,t,e){let n=ts(t?.config?.time_zone),o=[],s=Pn(t?.config?.latitude)?t.config.latitude:null,r=Pn(t?.config?.longitude)?t.config.longitude:null,a=i.latitude??s,u=i.longitude??r,c=Yt(i.language,t?.locale?.language??t?.language);if(a===null||u===null)return Dr(e,n,["missing-location",...o],c);let d={latitude:a,longitude:u},h=i.location_name.trim()!==""?i.location_name.trim():t?.config?.location_name??"",p=de(e,n),y=Qo(e,n),v=Cn(d,p,y),x=qe(e,d),_=x.altitude,S=Ze(e.getTime()+6e4,d),f=Ft(e,d),M=Ye(e),L=mo(e,d),w=t?.states?.[i.entity];w||o.push("missing-sun-entity");let C={...v.events},A={};if(w?.attributes)for(let[R,ct]of ns){let $t=Hr(w.attributes[ct]),ft=v.events[R];if($t&&$t>=p&&$t<y&&(!ft||Math.abs($t.getTime()-ft.getTime())<=Ao)){C[R]=$t,A[R]="ha";continue}A[R]=ft?"computed":"none"}else for(let[R]of ns)A[R]=v.events[R]?"computed":"none";for(let R of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])A[R]=v.events[R]?"computed":"none";let B=w?.attributes?pt(w.attributes.elevation):null,lt=w?.attributes?pt(w.attributes.azimuth):null,Z=i.moon_entity?t?.states?.[i.moon_entity]:void 0,et=Z&&typeof Z.state=="string"?Rr[Z.state]??null:null,st=i.show_moon?ho(d,p,y,L):null,$=[],T=900*1e3;for(let R=p.getTime();R<=y.getTime();R+=T){let ct=qe(R,d);$.push({altitude:ct.altitude,azimuth:ct.azimuth})}let P=null;C.sunrise&&C.sunset&&(P=(C.sunset.getTime()-C.sunrise.getTime())/6e4);let F=de(new Date(p.getTime()-720*60*1e3),n),z=Cn(d,F,p),q=z.events.sunrise&&z.events.sunset?(z.events.sunset.getTime()-z.events.sunrise.getTime())/6e4:null,_t=P!==null&&q!==null?P-q:null,X=go(e),wt=i.twilight_level==="nautical"?Lt:i.twilight_level==="astronomical"?Ht:Tt,O=R=>R?{time:R.time,rising:R.rising,dayOffset:At(R.time,n)-At(e,n)}:null,nt=i.show_sun?O(Nn(d,e,Te)):null,J=i.show_twilight?O(Nn(d,e,wt)):null,ut=e.getTime(),G=[L.nextRise,L.nextSet].filter(R=>R instanceof Date&&R.getTime()>ut).sort((R,ct)=>R.getTime()-ct.getTime())[0],it=i.show_moon&&G?{time:G,rising:G.getTime()===L.nextRise?.getTime(),dayOffset:At(G,n)-At(e,n)}:null,gt={timeZoneLongName:Jn(n,ss(c),e),previousDaylightMinutes:q,daylightDeltaMinutes:_t,sunBelowHorizon:_<0?Math.abs(_):null,sunriseAzimuth:C.sunrise?Je(C.sunrise,d,"sun"):null,sunsetAzimuth:C.sunset?Je(C.sunset,d,"sun"):null,nextFullMoon:X,nextFullMoonDays:X?Math.round((X.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:X?Nr(X.time,n):!1,moonFolkName:Lr(X?.time??null,n,c),moonDistance:fo(e,d,14),moonRise:es(L.nextRise??L.previousRise,d,e,n),moonSet:es(L.nextSet??L.previousSet,d,e,n),nextSunEvent:nt,nextTwilightEvent:J,nextMoonEvent:it};return v.polar==="polar-day"&&o.push("polar-day"),v.polar==="polar-night"&&o.push("polar-night"),C.sunrise||o.push("no-sunrise-today"),C.sunset||o.push("no-sunset-today"),!C.civilDawn&&!C.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:v,sun:{altitude:_,azimuth:x.azimuth,phase:po(_),rising:S>_,haElevation:B,haAzimuth:lt},moon:{position:f,phase:M,events:L,haPhaseName:et},sunTrack:$,moonPath:st,events:C,eventSources:A,extras:gt,daylightMinutes:P,issues:o,fatal:!1}}var De=new Map;function Ir(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight)].join("|")}function zr(i,t){if(!t)return"-";let e=t.states?.[i.entity],n=i.moon_entity?t.states?.[i.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",t.config?.location_name??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function rs(i,t,e){let n=Math.floor(e.getTime()/6e4),o=[Ir(i),zr(i,t),n,e.getTimezoneOffset()].join("#"),s=De.get(o);if(s)return s;let r=Pr(i,t,e);if(De.size>24){let a=De.keys().next().value;a!==void 0&&De.delete(a)}return De.set(o,r),r}var as=Fe`
  :host {
    display: block;

    /* ---- Form ---- */
    --smc-radius: 14px;
    --smc-tile-radius: 12px;
    --smc-chip-radius: 999px;
    --smc-gap: 10px;
    /* Vertikaler Abstand der Bereiche – muss zu ROOT_GAP in const.ts passen. */
    --smc-root-gap: 4px;

    /* ---- Text ---- */
    --smc-font: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, sans-serif;
    /* Grundfarbe: Sekundärfarbe des Themes; ohne Theme ein Grau, das auf
       hellem Grund bereits 4,5:1 Kontrast erreicht. */
    --smc-muted-color: var(--secondary-text-color, var(--primary-text-color, #626b7a));
    /* Kräftigt die Sekundärfarbe in Richtung der Textfarbe, damit auch
       hellere Themes die WCAG-Schwelle von 4,5:1 für Beschriftungen
       erreichen. Browser ohne color-mix() verwenden die Zeile darüber. */
    --smc-muted-color: color-mix(
      in srgb,
      var(--secondary-text-color, #626b7a) 72%,
      var(--primary-text-color, #212121)
    );

    /* ---- Flächen (Standard: Glas) ---- */
    --smc-surface: rgba(255, 255, 255, 0.07);
    --smc-surface-hover: rgba(255, 255, 255, 0.11);
    --smc-surface-border: rgba(255, 255, 255, 0.12);
    --smc-surface-shadow: 0 1px 2px rgba(0, 0, 0, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.07);
    --smc-surface-blur: saturate(140%) blur(10px);

    /* ---- Linien und Marker im Chart ---- */
    --smc-divider: var(--divider-color, rgba(128, 128, 128, 0.25));
    /* Farbe des Hintergrunds der Karte. Beschriftungen im Chart erhalten
       einen Rand in dieser Farbe („Halo“), damit sie auch über den
       Farbverläufen lesbar bleiben. */
    --smc-halo: var(
      --ha-card-background,
      var(--card-background-color, var(--primary-background-color, #10131a))
    );
    /* Kärtchen hinter Beschriftungen im Chart: deckkräftig genug, damit die
       Schrift unabhängig von der Fläche darunter die WCAG-Schwelle hält. */
    --smc-label-bg: rgba(9, 12, 22, 0.78);
    --smc-label-color: #f4f7fd;
    --smc-grid-line: rgba(128, 140, 180, 0.12);
    --smc-horizon-line: rgba(255, 255, 255, 0.5);
    --smc-now-line: rgba(255, 255, 255, 0.78);
    --smc-marker-strong: rgba(255, 255, 255, 0.9);
    --smc-marker-soft: rgba(255, 255, 255, 0.55);
    --smc-sky-ring: rgba(128, 140, 180, 0.25);
    --smc-sky-horizon: rgba(140, 152, 190, 0.5);
    --smc-moon-lit: #f3f6fc;
    --smc-moon-dark: rgba(108, 122, 164, 0.38);
    --smc-moon-outline: rgba(255, 255, 255, 0.18);
    /* Kühler Ton, damit sich die Mondkurve klar von der warmen Sonnenkurve
       abhebt – auch dort, wo beide dicht beieinander liegen. */
    --smc-moon-line: rgba(203, 213, 233, 0.85);

    /* ---- Akzentfarben der Ereignisse ----
       Kräftig genug für Flächen und Symbole; Text bleibt in der
       Theme-Textfarbe, damit die WCAG-Kontrastschwelle sicher eingehalten
       wird. */
    --smc-dawn: #a5b4fc;
    --smc-sunrise: #fbbf24;
    --smc-sunset: #fdba74;
    --smc-dusk: #d8b4fe;
    --smc-accent: var(--primary-color, #4f8cff);
  }

  :host(.smc-light) {
    --smc-halo: var(
      --ha-card-background,
      var(--card-background-color, var(--primary-background-color, #ffffff))
    );
    --smc-label-bg: rgba(255, 255, 255, 0.88);
    --smc-label-color: #1a2233;
    --smc-surface: rgba(255, 255, 255, 0.62);
    --smc-surface-hover: rgba(255, 255, 255, 0.82);
    --smc-surface-border: rgba(15, 23, 42, 0.08);
    --smc-surface-shadow: 0 1px 2px rgba(15, 23, 42, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
    --smc-surface-blur: saturate(130%) blur(10px);
    --smc-grid-line: rgba(40, 48, 70, 0.1);
    --smc-horizon-line: rgba(255, 255, 255, 0.65);
    --smc-now-line: rgba(255, 255, 255, 0.9);
    --smc-sky-ring: rgba(60, 72, 100, 0.22);
    --smc-sky-horizon: rgba(60, 72, 100, 0.35);
    --smc-moon-dark: rgba(80, 92, 130, 0.28);
    --smc-moon-outline: rgba(40, 48, 70, 0.12);
    --smc-moon-line: rgba(74, 88, 124, 0.75);
    --smc-dawn: #4338ca;
    --smc-sunrise: #b45309;
    --smc-sunset: #c2410c;
    --smc-dusk: #7e22ce;
  }

  /* Flache Variante: keine Weichzeichnung, kräftigere Flächen. */
  :host(.smc-flat) {
    --smc-surface: rgba(127, 137, 170, 0.14);
    --smc-surface-hover: rgba(127, 137, 170, 0.2);
    --smc-surface-border: rgba(127, 137, 170, 0.16);
    --smc-surface-shadow: none;
    --smc-surface-blur: none;
  }

  :host(.smc-flat.smc-light) {
    --smc-surface: rgba(60, 72, 100, 0.07);
    --smc-surface-hover: rgba(60, 72, 100, 0.11);
    --smc-surface-border: rgba(60, 72, 100, 0.1);
  }

  ha-card {
    /* Die Block-Darstellung wird hier gesetzt, damit die Karte auch dann
       korrekt dargestellt wird, wenn die Stile von ha-card (die aus dessen
       eigenem Shadow-Root stammen) nicht verfügbar sind – etwa in der
       Entwicklungsansicht ohne Home Assistant. */
    display: block;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    border-radius: var(--ha-card-border-radius, var(--smc-radius));
    background: var(
      --ha-card-background,
      var(--card-background-color, var(--primary-background-color, #fff))
    );
    color: var(--primary-text-color, #212121);
    box-shadow: var(--ha-card-box-shadow, none);
    border: var(--ha-card-border-width, 0) solid var(--ha-card-border-color, transparent);
  }

  .root {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    gap: var(--smc-root-gap);
    font-family: var(--smc-font);
  }

  .root.compact {
    gap: 3px;
  }

  /* ---------- Minimalvariante ---------- */

  /* Der Streifen trägt keine Zahlen, sondern reagiert auf einen Klick: Er
     öffnet die vollständige Karte in einem Overlay. */
  ha-card.smc-minimal {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  ha-card.smc-minimal:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: -2px;
  }

  .root.minimal {
    gap: 0;
  }

  .chart-wrap.minimal {
    flex: 1 1 auto;
    display: block;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }

  /* Zeile mit Auf-/Untergangs- und Zenitzeit über dem Zeitstrahl. */
  .minimal-times {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex: 0 0 auto;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    color: var(--smc-muted-color);
    font-variant-numeric: tabular-nums;
  }

  .minimal-time {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .minimal-time.zenith {
    flex: 1 1 auto;
    text-align: center;
  }

  /* ---------- Kopfzeile ---------- */

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex: 0 0 auto;
    box-sizing: border-box;
    overflow: hidden;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.2;
  }

  .title {
    font-size: 13.5px;
    font-weight: 600;
    letter-spacing: 0.2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .subtitle {
    font-size: 10.5px;
    font-weight: 400;
    color: var(--smc-muted-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-variant-numeric: tabular-nums;
  }

  .header-meta {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .phase-chip,
  .legend-chip,
  .meta-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border-radius: var(--smc-chip-radius);
    font-size: 10.5px;
    font-weight: 500;
    line-height: 1.4;
    white-space: nowrap;
  }

  .phase-chip {
    background: var(--smc-surface);
    border: 1px solid var(--smc-surface-border);
    backdrop-filter: var(--smc-surface-blur);
    -webkit-backdrop-filter: var(--smc-surface-blur);
    color: var(--primary-text-color, #212121);
  }

  .meta-chip {
    background: transparent;
    border: 1px solid var(--smc-surface-border);
    color: var(--smc-muted-color);
    font-variant-numeric: tabular-nums;
  }

  /* Restzeit: Das Symbol nennt den Körper (Sonne, Dämmerung, Mond), der Text
     die Richtung und die Dauer. */
  .countdown-chip {
    gap: 4px;
    padding-left: 7px;
  }

  .countdown-chip svg {
    flex: 0 0 auto;
    display: block;
    opacity: 0.9;
  }

  .phase-dot,
  .legend-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .legend-dot.day {
    background: var(--smc-palette-day, #ffc44d);
  }

  .legend-dot.twilight {
    background: var(--smc-palette-civil, #4f6fb3);
  }

  .legend-dot.night {
    background: var(--smc-palette-night, #12172f);
    border: 1px solid var(--smc-surface-border);
  }

  /* ---------- Inhalt ---------- */

  .body {
    display: flex;
    flex: 0 0 auto;
    box-sizing: border-box;
    min-height: 0;
    min-width: 0;
    gap: var(--smc-gap);
  }

  /* Ab etwa 700 px Kartenbreite: zweispaltiges Raster im Verhältnis 8:4
     (Tagesverlauf : Himmelsansicht) – das entspricht 8 bzw. 4 von 12
     Rasterspalten. Darunter wird gestapelt. Maßgeblich ist die Breite der
     Karte, nicht die des Fensters. */
  .body.columns {
    align-items: stretch;
  }

  .chart-column {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    gap: 4px; /* LEGEND_GAP in const.ts */
    /* 8 von 12 Spalten */
    flex: 2 1 0;
  }

  .chart-wrap {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    display: block;
  }

  .sky-column {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    gap: 4px; /* SKY_READOUT_GAP in const.ts */
    /* 4 von 12 Spalten, höchstens 260 px breit */
    flex: 1 1 0;
    max-width: 260px;
  }

  .sky-wrap {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    min-width: 0;
  }

  svg.day-chart,
  svg.sky-view {
    display: block;
    overflow: visible;
  }

  /* ---------- Legende ---------- */

  .legend {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
    height: 16px; /* LEGEND_HEIGHT in const.ts */
    overflow: hidden;
  }

  .legend-chip {
    background: var(--smc-surface);
    border: 1px solid var(--smc-surface-border);
    backdrop-filter: var(--smc-surface-blur);
    -webkit-backdrop-filter: var(--smc-surface-blur);
    color: var(--smc-muted-color);
    padding: 0 8px;
    font-size: 10px;
    line-height: 15px;
  }

  /* ---------- Himmelsansicht: Ablesung ---------- */

  .sky-readout {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px; /* mit line-height 15px = SKY_READOUT_ROW_HEIGHT in const.ts */
    font-size: 10px;
    color: var(--smc-muted-color);
    font-variant-numeric: tabular-nums;
    text-align: center;
    overflow: hidden;
  }

  .sky-readout .value {
    font-size: 11px;
    font-weight: 600;
    color: var(--primary-text-color, #212121);
  }

  /* ---------- Ereignisleiste ---------- */

  .events {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 6px;
    box-sizing: border-box;
    flex: 0 0 auto;
    overflow: hidden;
  }

  .event-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    padding: 2px 3px;
    border-radius: var(--smc-tile-radius);
    background: var(--smc-surface);
    border: 1px solid var(--smc-surface-border);
    box-shadow: var(--smc-surface-shadow);
    backdrop-filter: var(--smc-surface-blur);
    -webkit-backdrop-filter: var(--smc-surface-blur);
    min-width: 0;
    overflow: hidden;
    transition:
      transform 0.18s ease,
      background 0.18s ease,
      box-shadow 0.18s ease;
  }

  @media (hover: hover) {
    .event-tile:hover,
    .detail-tile:hover {
      transform: translateY(-1px);
      background: var(--smc-surface-hover);
    }
  }

  .event-tile.secondary {
    background: transparent;
    box-shadow: none;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  /* Symbolkachel mit farbig getöntem Grund – je Ereignis eigener Akzent. */
  /* Erste Zeile der Kachel: Symbol und Zeit nebeneinander. Das spart Höhe
     gegenüber einer reinen Spaltenanordnung. */
  .event-head {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 0;
  }

  .event-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--smc-event-color, #888) 20%, transparent);
    border: 1px solid color-mix(in srgb, var(--smc-event-color, #888) 34%, transparent);
    color: var(--smc-event-color, currentColor);
    line-height: 1;
  }

  .event-tile.secondary .event-icon {
    width: 16px;
    height: 16px;
    border-radius: 6px;
  }

  .event-tile.dawn {
    --smc-event-color: var(--smc-dawn);
  }

  .event-tile.sunrise {
    --smc-event-color: var(--smc-sunrise);
  }

  .event-tile.sunset {
    --smc-event-color: var(--smc-sunset);
  }

  .event-tile.dusk {
    --smc-event-color: var(--smc-dusk);
  }

  .event-label {
    font-size: 9.5px;
    line-height: 1.15;
    font-weight: 400;
    color: var(--smc-muted-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .event-time {
    font-size: 13px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    line-height: 1.1;
    white-space: nowrap;
  }

  .event-time.missing {
    font-size: 11px;
    font-weight: 500;
    color: var(--smc-muted-color);
  }

  .event-tile.compact {
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    padding: 3px 6px;
  }

  .event-tile.compact .event-label {
    font-size: 9px;
  }

  .event-tile.compact .event-time {
    font-size: 11.5px;
  }

  /* ---------- Detailzeile ---------- */

  .details {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 8px;
    box-sizing: border-box;
    flex: 0 0 auto;
    overflow: hidden;
    align-items: stretch;
  }

  .detail-tile {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 7px 10px;
    border-radius: var(--smc-tile-radius);
    background: var(--smc-surface);
    border: 1px solid var(--smc-surface-border);
    box-shadow: var(--smc-surface-shadow);
    backdrop-filter: var(--smc-surface-blur);
    -webkit-backdrop-filter: var(--smc-surface-blur);
    min-width: 0;
    overflow: hidden;
    transition:
      transform 0.18s ease,
      background 0.18s ease;
  }

  .detail-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 9px;
    background: color-mix(in srgb, var(--smc-event-color, var(--smc-accent)) 18%, transparent);
    border: 1px solid
      color-mix(in srgb, var(--smc-event-color, var(--smc-accent)) 32%, transparent);
  }

  .detail-tile.sun {
    --smc-event-color: var(--smc-sunrise);
  }

  .detail-tile.moon {
    --smc-event-color: var(--smc-dusk);
  }

  .detail-content {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.3;
    flex: 1 1 auto;
  }

  .detail-title {
    font-size: 10.5px;
    color: var(--smc-muted-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail-value {
    font-size: 13px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail-sub {
    font-size: 9.5px;
    color: var(--smc-muted-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-variant-numeric: tabular-nums;
  }

  .detail-tile.sky-inline {
    padding: 4px;
    justify-content: center;
    align-items: center;
  }

  /* Feste Größe, damit die Himmelsansicht die Zeilenhöhe nicht aufbläht. */
  .sky-inline-wrap {
    display: block;
    width: 52px;
    height: 52px;
    flex: 0 0 auto;
  }

  .sky-inline-wrap svg {
    width: 52px;
    height: 52px;
  }

  /* ---------- Fußzeile ---------- */

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex: 0 0 auto;
    box-sizing: border-box;
    overflow: hidden;
    border-top: 1px solid var(--smc-divider);
    font-size: 9.5px;
    line-height: 1.2;
    color: var(--smc-muted-color);
    font-variant-numeric: tabular-nums;
  }

  .footer .part {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .footer .part:last-child {
    text-align: right;
  }

  /* ---------- Hinweise / Fehler ---------- */

  .message {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    height: 100%;
    box-sizing: border-box;
    font-size: 12.5px;
    color: var(--smc-muted-color);
    line-height: 1.4;
  }

  .message .icon {
    flex: 0 0 auto;
  }

  /* ---------- Animationen ---------- */

  @keyframes smc-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.72;
    }
  }

  .smc-pulse {
    animation: smc-pulse 3.2s ease-in-out infinite;
    transform-origin: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .smc-pulse {
      animation: none;
    }
    .event-tile,
    .detail-tile {
      transition: none;
    }
  }

  @media (max-width: 400px) {
    .event-label {
      font-size: 9px;
    }
    .event-time {
      font-size: 11.5px;
    }
  }
`,ls=Fe`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 8px;
  }

  .section {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .section-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-text-color, #212121);
    opacity: 0.85;
    margin-bottom: 2px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 34px;
  }

  .row label,
  .row .label {
    font-size: 13px;
    color: var(--primary-text-color, #212121);
    flex: 1 1 auto;
    min-width: 0;
  }

  .row .control {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .height-control {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type='number'],
  input[type='text'],
  select {
    width: 148px;
    height: 32px;
    box-sizing: border-box;
    padding: 0 8px;
    border-radius: 6px;
    border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.4));
    background: var(--card-background-color, transparent);
    color: var(--primary-text-color, #212121);
    font-size: 13px;
    font-family: inherit;
  }

  input[type='number'] {
    width: 84px;
    text-align: right;
  }

  input[type='range'] {
    width: 140px;
    accent-color: var(--primary-color, #03a9f4);
  }

  input:disabled {
    opacity: 0.5;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
    flex: 0 0 auto;
  }

  .switch input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
  }

  .switch .slider {
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: var(--divider-color, rgba(128, 128, 128, 0.5));
    transition: background 0.18s ease;
    pointer-events: none;
  }

  .switch .slider::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.18s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .switch input:checked + .slider {
    background: var(--primary-color, #03a9f4);
  }

  .switch input:checked + .slider::before {
    transform: translateX(18px);
  }

  .switch input:focus-visible + .slider {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: 2px;
  }

  .hint {
    font-size: 11.5px;
    color: var(--secondary-text-color, #8a93a8);
    line-height: 1.4;
  }

  .height-preview {
    font-variant-numeric: tabular-nums;
    font-size: 12px;
    color: var(--secondary-text-color, #8a93a8);
    min-width: 62px;
    text-align: right;
  }

  button.link {
    background: none;
    border: none;
    color: var(--primary-color, #03a9f4);
    cursor: pointer;
    font-size: 12px;
    font-family: inherit;
    padding: 0;
    text-decoration: underline;
  }
`;function hi(i,t){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var Jt=class extends St{setConfig(t){this._config={...t}}get _language(){return Yt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return j(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,o]of Object.entries(t)){let s=D[n];o===s&&n in D&&delete e[n]}this._config=e,hi(this,e)}render(){if(!this._config)return E``;let t=this._config.card_height,e=t==="auto"||t===null,n=this._config.minimal_mode===!0,o=ce(n),s=typeof t=="number"?t:D.card_height,r=this._config.latitude===void 0||this._config.latitude===null;return E`
      <div class="card-config">
        <div class="section">
          <div class="section-title">${this._t("editorAppearance")}</div>

          <div class="row">
            <label for="height">${this._t("editorCardHeight")}</label>
            <div class="control height-control">
              <input
                id="height"
                type="range"
                min="${o[0]}"
                max="${o[1]}"
                step="${n?2:10}"
                .value=${String(s)}
                ?disabled=${e}
                @input=${a=>this._update({card_height:Number(a.target.value)})}
              />
              <input
                id="height-number"
                type="number"
                aria-label=${this._t("editorCardHeight")}
                min="${o[0]}"
                max="${o[1]}"
                .value=${String(s)}
                ?disabled=${e}
                @change=${a=>{let u=pt(a.target.value);u!==null&&this._update({card_height:Math.round(b(u,o[0],o[1]))})}}
              />
            </div>
          </div>

          <div class="row">
            <label for="auto">${this._t("editorCardHeightAuto")}</label>
            <div class="control">
              <span class="switch">
                <input
                  id="auto"
                  type="checkbox"
                  .checked=${e}
                  @change=${a=>this._update({card_height:a.target.checked?"auto":D.card_height})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          ${this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",D.sun_marker_size),min:Ee[0],max:Ee[1],step:.5,digits:1,set:a=>this._update({sun_marker_size:a})})}

          <div class="row">
            <label for="theme">${this._t("editorThemeMode")}</label>
            <div class="control">
              <select
                id="theme"
                .value=${this._value("theme_mode","auto")}
                @change=${a=>this._update({theme_mode:a.target.value})}
              >
                <option value="auto">${this._t("editorThemeAuto")}</option>
                <option value="light">${this._t("editorThemeLight")}</option>
                <option value="dark">${this._t("editorThemeDark")}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="cardstyle">${this._t("editorCardStyle")}</label>
            <div class="control">
              <select
                id="cardstyle"
                .value=${this._value("card_style","glass")}
                @change=${a=>this._update({card_style:a.target.value})}
              >
                <option value="glass">${this._t("editorCardStyleGlass")}</option>
                <option value="flat">${this._t("editorCardStyleFlat")}</option>
                <option value="horizon">${this._t("editorCardStyleHorizon")}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="timeformat">${this._t("editorTimeFormat")}</label>
            <div class="control">
              <select
                id="timeformat"
                .value=${this._value("time_format","auto")}
                @change=${a=>this._update({time_format:a.target.value})}
              >
                <option value="auto">${this._t("editorTimeFormatAuto")}</option>
                <option value="24">${this._t("editorTimeFormat24")}</option>
                <option value="12">${this._t("editorTimeFormat12")}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="language">${this._t("editorLanguage")}</label>
            <div class="control">
              <select
                id="language"
                .value=${this._value("language","auto")}
                @change=${a=>this._update({language:a.target.value})}
              >
                <option value="auto">${this._t("editorLanguageAuto")}</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="twilight">${this._t("editorTwilightLevel")}</label>
            <div class="control">
              <select
                id="twilight"
                .value=${this._value("twilight_level","civil")}
                @change=${a=>this._update({twilight_level:a.target.value})}
              >
                <option value="civil">${this._t("editorTwilightCivil")}</option>
                <option value="nautical">${this._t("editorTwilightNautical")}</option>
                <option value="astronomical">${this._t("editorTwilightAstronomical")}</option>
                <option value="all">${this._t("editorTwilightAll")}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="remaining-focus">${this._t("editorRemainingTimeFocus")}</label>
            <div class="control">
              <select
                id="remaining-focus"
                .value=${this._value("remaining_time_focus","sun")}
                ?disabled=${this._config?.show_remaining_time===!1}
                @change=${a=>this._update({remaining_time_focus:a.target.value})}
              >
                <option value="sun">${this._t("editorRemainingTimeFocusSun")}</option>
                <option value="next">${this._t("editorRemainingTimeFocusNext")}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="animations">${this._t("editorAnimations")}</label>
            <div class="control">
              <span class="switch">
                <input
                  id="animations"
                  type="checkbox"
                  .checked=${this._value("animations",!0)}
                  @change=${a=>this._update({animations:a.target.checked})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          <div class="row">
            <label for="compact">${this._t("editorCompactMode")}</label>
            <div class="control">
              <span class="switch">
                <input
                  id="compact"
                  type="checkbox"
                  .checked=${this._value("compact_mode",!1)}
                  @change=${a=>this._update({compact_mode:a.target.checked})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          <div class="row">
            <label for="minimal">${this._t("editorMinimalMode")}</label>
            <div class="control">
              <span class="switch">
                <input
                  id="minimal"
                  type="checkbox"
                  .checked=${this._value("minimal_mode",!1)}
                  @change=${a=>this._update({minimal_mode:a.target.checked})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>
          ${n?E`<div class="row">
                  <span class="hint">${this._t("editorMinimalModeHelp")}</span>
                </div>
                <div class="row">
                  <label for="minimal-times">${this._t("editorMinimalTimes")}</label>
                  <div class="control">
                    <span class="switch">
                      <input
                        id="minimal-times"
                        type="checkbox"
                        .checked=${this._value("minimal_show_times",!0)}
                        @change=${a=>this._update({minimal_show_times:a.target.checked})}
                      />
                      <span class="slider"></span>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <label for="minimal-zenith">${this._t("editorMinimalZenith")}</label>
                  <div class="control">
                    <span class="switch">
                      <input
                        id="minimal-zenith"
                        type="checkbox"
                        .checked=${this._value("minimal_show_zenith",!0)}
                        @change=${a=>this._update({minimal_show_zenith:a.target.checked})}
                      />
                      <span class="slider"></span>
                    </span>
                  </div>
                </div>
                ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",D.popup_width),min:Ut[0],max:Ut[1],step:20,set:a=>this._update({popup_width:Math.round(a)})})}
                ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",D.popup_height),min:Gt[0],max:Gt[1],step:20,set:a=>this._update({popup_height:Math.round(a)})})}`:k}
        </div>

        <div class="section">
          <div class="section-title">${this._t("editorSections")}</div>
          ${this._switch("show_sun","editorShowSun")}
          ${this._switch("show_moon","editorShowMoon")}
          ${this._switch("show_twilight","editorShowTwilight")}
          ${this._switch("show_astronomical_details","editorShowAstronomicalDetails")}
          ${this._switch("show_header","editorShowHeader")}
          ${this._switch("show_day_chart","editorShowDayChart")}
          ${this._switch("show_sky_view","editorShowSkyView")}
          ${this._switch("show_events","editorShowEvents")}
          ${this._switch("show_moon_times","editorShowMoonTimes")}
          ${this._switch("show_remaining_time","editorRemainingTime")}
          ${this._switch("show_footer","editorShowFooter")}
        </div>

        <div class="section">
          <div class="section-title">${this._t("editorBehaviour")}</div>
          <div class="row">
            <label for="entity">${this._t("editorEntity")}</label>
            <div class="control">
              <input
                id="entity"
                type="text"
                .value=${this._value("entity",D.entity)}
                @change=${a=>this._update({entity:a.target.value.trim()})}
              />
            </div>
          </div>
          <div class="row">
            <label for="moonentity">${this._t("editorMoonEntity")}</label>
            <div class="control">
              <input
                id="moonentity"
                type="text"
                .value=${this._value("moon_entity",D.moon_entity)}
                @change=${a=>this._update({moon_entity:a.target.value.trim()})}
              />
            </div>
          </div>
          <div class="hint">
            ${this._t("editorMoonEntity")}: sensor.moon – die Mondphase wird berechnet, die
            Bezeichnung kann aus der Entität übernommen werden.
          </div>
        </div>

        <div class="section">
          <div class="section-title">${this._t("editorLocation")}</div>
          <div class="row">
            <label for="halocation">${this._t("editorUseHaLocation")}</label>
            <div class="control">
              <span class="switch">
                <input
                  id="halocation"
                  type="checkbox"
                  .checked=${r}
                  @change=${a=>{if(a.target.checked){let c={...this._config};delete c.latitude,delete c.longitude,this._config=c,hi(this,c)}else this._update({latitude:l(this.hass?.config?.latitude??0,4),longitude:l(this.hass?.config?.longitude??0,4)})}}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>
          <div class="row">
            <label for="latitude">${this._t("editorLatitude")}</label>
            <div class="control">
              <input
                id="latitude"
                type="number"
                step="0.0001"
                min="-90"
                max="90"
                .value=${String(this._config?.latitude??this.hass?.config?.latitude??"")}
                ?disabled=${r}
                @change=${a=>{let u=pt(a.target.value);this._update({latitude:u===null?void 0:b(u,-90,90)})}}
              />
            </div>
          </div>
          <div class="row">
            <label for="longitude">${this._t("editorLongitude")}</label>
            <div class="control">
              <input
                id="longitude"
                type="number"
                step="0.0001"
                min="-180"
                max="180"
                .value=${String(this._config?.longitude??this.hass?.config?.longitude??"")}
                ?disabled=${r}
                @change=${a=>{let u=pt(a.target.value);this._update({longitude:u===null?void 0:b(u,-180,180)})}}
              />
            </div>
          </div>
          <div class="row">
            <label for="locationname">${this._t("editorLocationName")}</label>
            <div class="control">
              <input
                id="locationname"
                type="text"
                .value=${this._value("location_name","")}
                @change=${a=>this._update({location_name:a.target.value})}
              />
            </div>
          </div>
        </div>

        <div class="section">
          <div class="row">
            <span class="hint">
              ${this._t("editorCardHeight")}: ${o[0]}–${o[1]} px (Standard
              ${D.card_height} px, mindestens
              ${n?Kn:120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_numberRow(t){let{id:e,labelKey:n,value:o,min:s,max:r,step:a,digits:u=0,set:c}=t,d=h=>String(u===0?Math.round(h):l(h,u));return E`
      <div class="row">
        <label for=${e}>${this._t(n)}</label>
        <div class="control height-control">
          <input
            id=${e}
            type="range"
            min=${s}
            max=${r}
            step=${a}
            .value=${d(o)}
            @input=${h=>c(Number(h.target.value))}
          />
          <input
            id="${e}-number"
            type="number"
            aria-label=${this._t(n)}
            min=${s}
            max=${r}
            step=${a}
            .value=${d(o)}
            @change=${h=>{let p=pt(h.target.value);p!==null&&c(b(p,s,r))}}
          />
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height,e=ce(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<e[0]||t>e[1])?E`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:e[0],max:e[1]})}
      </span>`:k}_switch(t,e){let n=D[t];return E`
      <div class="row">
        <label for="${String(t)}">${this._t(e)}</label>
        <div class="control">
          <span class="switch">
            <input
              id="${String(t)}"
              type="checkbox"
              .checked=${this._value(t,n)}
              @change=${o=>this._update({[t]:o.target.checked})}
            />
            <span class="slider"></span>
          </span>
        </div>
      </div>
    `}_reset(){let t=on();this._config=t,hi(this,t)}};Jt.styles=ls,kt([se({attribute:!1})],Jt.prototype,"hass",2),kt([re()],Jt.prototype,"_config",2),Jt=kt([Ke(Mo)],Jt);var me=12,us=17,Pt=class extends St{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=e=>{if(!this._popup)return;if(e.key==="Escape"){e.stopPropagation(),this._closeDetails();return}if(e.key!=="Tab")return;let n=this._popupFocusable(),o=n[0],s=n[n.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?n.indexOf(r):-1;if(a===-1){e.preventDefault(),(e.shiftKey?s:o).focus();return}e.shiftKey&&a===0?(e.preventDefault(),s.focus()):!e.shiftKey&&a===n.length-1&&(e.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let e=this._config?.hold_action;e&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(e,!1)},So))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=e=>{if(this._held){this._held=!1;return}let n=e.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},To)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(e){let n=this._hass;this._hass=e,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=e)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return on()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=Yt(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=is(e,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(e){super.willUpdate(e);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),n=b(this._config.popup_width,Ut[0],Ut[1]),o=b(this._config.popup_height,Gt[0],Gt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",j(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",j(e,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let u=this._config,c={...u,latitude:u.latitude??void 0,longitude:u.longitude??void 0,location_name:u.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},d=document.createElement(Wn);d.hass=this.hass;try{d.setConfig(c)}catch{}this._popupCard=d,r.append(d,a),s.append(r),s.addEventListener("click",h=>{h.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let e=document.activeElement;if(!e)return null;let n=e.shadowRoot?.activeElement;return n instanceof HTMLElement?n:e}_popupFocusable(){if(!this._popup)return[];let e=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&e.push(n);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||e.push(s);return e}_handleMinimalKey(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();let n=e.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(e){this._runAction(this._config?.tap_action??null,!0,e)}_runAction(e,n,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Ko(r,this.hass,s,e,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(e=>{let n=e.some(o=>o.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,_o()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let o=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?os(this._config,this._width||400):D.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return Yt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return E``;let n=this._width||400,o=this._resolvedHeight(),s=No(o,n,e),r=rs(e,this.hass,new Date),a=this._language(),u=this._isDark(),c=u?Bn:Vn;if(r.fatal)return E`
        <ha-card
          class=${Nt({"smc-dark":u,"smc-light":!u,"smc-minimal":s.minimal})}
          style=${V({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${qo(18)}</span>
              <span>${j(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=Uo(a,this._locale(),r.timeZone,Po(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?E`
        <ha-card
          class=${Nt({"smc-dark":u,"smc-light":!u,"smc-minimal":!0})}
          style=${V({height:`${o}px`})}
          role="button"
          tabindex="0"
          aria-label=${this._minimalAriaLabel(r,d)}
          title=${this._minimalTitle(r,d)}
          @pointerdown=${this._onMinimalPointerDown}
          @pointerup=${this._onMinimalPointerUp}
          @pointercancel=${this._onMinimalPointerCancel}
          @click=${this._onMinimalClick}
          @keydown=${this._handleMinimalKey}
        >
          <div
            class=${Nt({root:!0,minimal:!0})}
            style=${V({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":c.day,"--smc-palette-civil":c.civil,"--smc-palette-night":c.night})}
          >
            ${this._renderMinimalTimes(r,d,s,e)}
            <div
              class="chart-wrap minimal"
              style=${V({height:`${s.chartHeight}px`})}
            >
              ${ni({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:c,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:!1,minimal:!0,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:E`
      <ha-card
        class=${Nt({"smc-dark":u,"smc-light":!u})}
        style=${V({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${Nt({root:!0,compact:s.compact})}
          style=${V({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":c.day,"--smc-palette-civil":c.civil,"--smc-palette-night":c.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,c,s):k}

          <div
            class=${Nt({body:!0,columns:s.skyViewSide})}
            style=${V({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?E`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${V({height:`${s.chartHeight}px`})}
                  >
                    ${ni({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:c,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,d,s),moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):k}
                </div>`:k}
            ${s.skyViewSide?E`<div
                  class="sky-column"
                  style=${V({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${si({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:c,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:At(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth,this._countdownRows(s))}
                </div>`:k}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):k}
          ${s.showDetails?this._renderDetails(r,d,e,s,a,u,n):k}
          ${s.showFooter?this._renderFooter(r,d,e,s):k}
        </div>
      </ha-card>
    `}_renderHeader(e,n,o,s){let r=e.locationName||n.t("title"),a=e.extras,u=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),c=10.5,d=(w,C=!1)=>w.length*c*.58+20+(C?12:0),p=Math.max(0,u-10-108),y=n.t(this._phaseKey(e)),v=d(y,!0),x=this._primaryCountdown(e,n),_=k,S=!0;if(x){let w=d(x.compact)+us,C=d(x.duration)+us,A=null;w+v<=p?(A=x.compact,p-=w):C+v<=p?(A=x.duration,p-=C):C<=p&&(A=x.duration,p-=C,S=!1),A!==null&&(_=E`<span
          class="meta-chip countdown-chip"
          data-body=${x.body}
          role="img"
          aria-label=${x.long}
          title=${x.title}
          >${x.icon}<span>${A}</span></span
        >`)}S&&(p-=v);let f=k;if(e.daylightMinutes!==null){let w=Oo(e.daylightMinutes),C=a.daylightDeltaMinutes===null?"":` ${zo(a.daylightDeltaMinutes,n.locale)}`,A=`${n.t("dayLength")} ${w}${C}`,B=d(A);B<=p&&(p-=B,f=E`<span class="meta-chip" title=${n.t("dayLength")}
          >${A}</span
        >`)}let M=k,L=d(a.timeZoneLongName);return L<=p&&(p-=L,M=E`<span class="meta-chip">${a.timeZoneLongName}</span>`),E`
      <div class="header" style=${V({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${Io(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${_}${f}${M}
          ${S?E`<span class="phase-chip" title=${y}>
                <span
                  class="phase-dot"
                  style=${V({background:this._phaseColor(e,o)})}
                ></span>
                ${y}
              </span>`:k}
        </div>
      </div>
    `}_countdowns(e,n){let o=this._countdownCache;if(o&&o.model===e&&o.context===n)return[...o.entries];let s=this._computeCountdowns(e,n);return this._countdownCache={model:e,context:n,entries:s},[...s]}_computeCountdowns(e,n){if(!this._config?.show_remaining_time)return[];let s=e.now.getTime(),r=[],a=(h,p,y,v,x)=>{if(!h)return;let _=(h.time.getTime()-s)/6e4;if(!(_>=0))return;let S=ti(_,n.t);r.push({minutes:_,compact:n.t("untilFormat",{event:n.t(y??p),duration:S}),duration:S,time:h.time,rising:h.rising,long:n.t("untilFormat",{event:n.t(p),duration:ti(_,n.t)}),title:`${n.t(p)} ${Q(h.time,n)}${h.dayOffset>0?` (${rn(h.dayOffset,n.t)})`:""}`,icon:v,body:x})},u=e.extras.nextSunEvent;a(u,u?.rising?"sunrise":"sunset",u?.rising?"sunriseShort":"sunsetShort",u?.rising?ai(me):li(me),"sun");let c=e.extras.nextTwilightEvent;if(c){let h=this._twilightKeys();a(c,c.rising?h.dawn:h.dusk,c.rising?h.dawnShort:h.duskShort,c.rising?an(me):ln(me),"twilight")}let d=e.extras.nextMoonEvent;return a(d,d?.rising?"moonrise":"moonset",d?.rising?"moonriseShort":"moonsetShort",d?.rising?Vo(me):jo(me),"moon"),r.sort((h,p)=>h.minutes-p.minutes)}_orderedCountdowns(e,n){let o=this._countdowns(e,n);if(this._config?.remaining_time_focus==="next")return o;let s=o.findIndex(a=>a.body==="sun");if(s<=0)return o;let[r]=o.splice(s,1);return[r,...o]}_primaryCountdown(e,n){return this._orderedCountdowns(e,n)[0]}_chartCountdown(e,n,o){let s=this._primaryCountdown(e,n);return s?{time:s.time,rising:s.rising,body:s.body,label:o.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let e=this._config?.twilight_level;return e==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:e==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(e,n){return E`
      <div class="legend" aria-hidden="true" style=${V({height:`${n}px`})}>
        <span class="legend-chip"
          ><span class="legend-dot day"></span>${e.t("legendDaylight")}</span
        >
        <span class="legend-chip"
          ><span class="legend-dot twilight"></span>${e.t("legendTwilightShort")}</span
        >
        <span class="legend-chip"
          ><span class="legend-dot night"></span>${e.t("legendNight")}</span
        >
      </div>
    `}_renderSkyReadout(e,n,o,s){let r=this._config,a=[],u=(c,d,h)=>{let p=dt(d,1,n.locale),y=`${Math.round(h)}\xB0 ${Xt(h,n.language)}`;return E`<span
        title=${`${n.t("elevation")} ${p} \xB7 ${n.t("azimuth")} ${y}`}
        >${n.t("positionReadout",{body:c,altitude:p,degrees:String(Math.round(h)),direction:Xt(h,n.language)})}</span
      >`};r.show_sun&&a.push(u(n.t("sun"),e.sun.altitude,e.sun.azimuth)),r.show_moon&&a.push(u(n.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth));for(let c of this._orderedCountdowns(e,n).slice(0,s))a.push(E`<span title=${c.title}>${c.long}</span>`);return a.length===0||o<150?k:E`<div class="sky-readout">${a}</div>`}_countdownRows(e){let n=this._config,o=(n.show_sun?1:0)+(n.show_moon?1:0),s=e.chartHeight+e.legendHeight+(e.showLegend?qn:0),r=o*Zn+qn,a=s-r-Co;return Math.max(0,Math.min(3,Math.floor(a/Zn)))}_renderFooter(e,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),u=n.t(r),c=e.extras.timeZoneLongName,d=n.t("footerMethod"),h=`${u} \xB7 ${c} \xB7 ${d}`,p=9.5*.55,y=_=>_.length*p<=a,v=y(`${u} \xB7 ${c}`)?`${u} \xB7 ${c}`:u,x=y(`${v} \xB7 ${d}`)||a>=520;return E`
      <div
        class="footer"
        title=${h}
        style=${V({height:`${s.footerHeight}px`})}
      >
        <span class="part">${v}</span>
        ${x?E`<span class="part">${d}</span>`:k}
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,o,s=.7){for(let r of e)if(r&&r.length*o*s<=n)return r;return null}_renderEvents(e,n,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),u=this._config,c=[];if(u.show_twilight&&c.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:an(s?14:16),missingText:n.t("noEvent")}),c.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:ai(s?14:16),missingText:n.t("noSunrise")}),c.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:li(s?14:16),missingText:n.t("noSunset")}),u.show_twilight&&c.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:ln(s?14:16),missingText:n.t("noEvent")}),u.twilight_level==="all"||u.show_astronomical_details){let S=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[f,M,L]of S)c.push({key:f,kind:L,label:n.t(f),shortLabel:n.t(f),time:M,icon:L==="dawn"?an(s?13:15):ln(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=a<300?3:a<420?4:a<560?6:8,h=c.slice(0,Math.max(2,d)),p=6,v=Math.max(40,a-2*r-p*(h.length-1))/h.length-10,x=s?v<120?8.5:9:v<92?8.5:9.5,_=v<74?11:v<96?12:12.5;return E`
      <div
        class="events"
        style=${V({gap:`${p}px`,height:`${o.eventsHeight}px`})}
      >
        ${h.map(S=>{let f=this._fitLabel([S.label,S.shortLabel],v,x),M=S.time?Q(S.time,n):S.missingText,L=this._fitLabel([M,"\u2014"],v,_)??"\u2014";return E`
            <div
              class=${Nt({"event-tile":!0,[S.kind]:!0,secondary:!!S.secondary,compact:s})}
              title=${`${S.label}: ${M}`}
            >
              <span class="event-head">
                <span class="event-icon">${S.icon}</span>
                <span
                  class=${Nt({"event-time":!0,missing:!S.time})}
                  style=${V({fontSize:`${_}px`})}
                >
                  ${L}
                </span>
                ${s&&f?E`<span
                      class="event-label"
                      style=${V({fontSize:`${x}px`})}
                      >${f}</span
                    >`:k}
              </span>
              ${!s&&f?E`<span
                    class="event-label"
                    style=${V({fontSize:`${x}px`})}
                    >${f}</span
                  >`:k}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,o,s,r,a,u){let c=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&u>=430,p=(o.show_sun?1:0)+(o.show_moon?1:0)+(h?1:0),v=Math.max(60,u-2*s.padding-8*Math.max(0,p-1))/Math.max(1,p)-20-26-9,x=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],v,10.5),_=dt(e.sun.altitude,1,n.locale),S=`${Math.round(e.sun.azimuth)}\xB0 ${Xt(e.sun.azimuth,r)}`,f=c.sunBelowHorizon!==null?`${dt(c.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,M=this._fitLabel([f?`${f} \xB7 ${S}`:`${n.t("azimuth")} ${S}`,f??S,S],v,9.5),L=c.sunriseAzimuth!==null?`${Math.round(c.sunriseAzimuth)}\xB0 ${Xt(c.sunriseAzimuth,r)}`:null,w=c.sunsetAzimuth!==null?`${Math.round(c.sunsetAzimuth)}\xB0 ${Xt(c.sunsetAzimuth,r)}`:null,C=o.show_astronomical_details&&L&&w?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:L,set:w}),`${Math.round(c.sunriseAzimuth)}\xB0 / ${Math.round(c.sunsetAzimuth)}\xB0`],v,9.5):null,A=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?Q(e.events.solarNoon,n):"\u2014"} \xB7 ${dt(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?Q(e.events.solarNoon,n):null],v,9.5):null,B=this._fitLabel([n.t(d),n.t("moon")],v,10.5),lt=Fo(e.moon.phase.illumination,n.locale),Z=this._fitLabel([`${lt} ${n.t("illumination")}`,lt],v,13),et=e.moon.position.apparentAltitude,st=dt(et,1,n.locale),$=`${Math.round(e.moon.position.azimuth)}\xB0 ${Xt(e.moon.position.azimuth,r)}`,T=`${n.t("elevation")} ${st} \xB7 ${n.t("azimuth")} ${$}`,P=et>=0?[`${n.t("elevation")} ${st} \xB7 ${$}`,`${st} \xB7 ${$}`,st]:[`${dt(Math.abs(et),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${$}`,`${dt(Math.abs(et),1,n.locale)} ${n.t("belowHorizon")}`,st],F=null,z="";if(c.moonDistance){let{current:G,min:it,max:gt}=c.moonDistance,R=Math.max(1,gt-it),ct=G<=it+R*.2,$t=G>=it+R*.8,ft=sn(G,n.locale),pe=ct?n.t("nearPerigee"):$t?n.t("nearApogee"):"";z=`${n.t("moonDistance")}: ${ft} \xB7 ${n.t("distanceRange",{min:sn(it,n.locale),max:sn(gt,n.locale)})}`,F=this._fitLabel(pe?[`${ft} \xB7 ${pe}`,ft]:[ft],v,9.5)}let q=this._fitLabel(F?P.flatMap(G=>[`${G} \xB7 ${F}`,G]):P,v,9.5),_t=F!==null&&(q?.includes(F)??!1),X=null,wt="";if(o.show_astronomical_details&&c.nextFullMoon){let G=c.nextFullMoonDays??0,it=G<=0?n.t("dayToday"):n.t("inDays",{days:String(G)}),gt=`${n.t("nextFullMoon")} ${it}`,R=c.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",ct=`${gt}${R}${c.moonFolkName?` \xB7 ${c.moonFolkName}`:""}`;wt=c.blueMoon?n.t("blueMoonHint"):c.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),X=this._fitLabel([ct,`${gt}${R}`,gt],v,9.5)}let O=o.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],v,9.5):null,nt=[];q&&nt.push({text:q,title:T,position:!0}),O&&nt.push({text:O,title:null}),X&&nt.push({text:X,title:wt}),F&&!_t&&nt.push({text:F,title:z});let J=nt.slice(0,s.detailsHeight>=Yn?3:2),ut=_t||J.some(G=>G.text===F),Qt=F&&!ut?z||F:null;return E`
      <div
        class="details"
        style=${V({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?E`
              <div class="detail-tile sun">
                <span class="detail-icon">${Zo(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${x?E`<span class="detail-title">${x}</span>`:k}
                  <span class="detail-value">${_}</span>
                  ${M?E`<span class="detail-sub">${M}</span>`:k}
                  ${A?E`<span class="detail-sub">${A}</span>`:k}
                  ${C?E`<span class="detail-sub">${C}</span>`:k}
                </span>
              </div>
            `:k}
        ${o.show_moon?E`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${ue({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${B?E`<span class="detail-title">${B}</span>`:k}
                  ${Z?E`<span class="detail-value">${Z}</span>`:k}
                  ${J.map(G=>{let it=[G.title,G.position?Qt:null].filter(Boolean).join(" \xB7 ")||null;return E`<span class="detail-sub" title=${it??k}
                      >${G.text}</span
                    >`})}
                </span>
              </div>
            `:k}
        ${h?E`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${si({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?Bn:Vn,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:At(e.now,e.timeZone)})}
                </span>
              </div>
            `:k}
      </div>
    `}_moonTimesText(e,n,o){let s=e.extras.moonRise,r=e.extras.moonSet,a=s&&s.dayOffset!==0?` ${rn(s.dayOffset,n.t)}`:"",u=s?`\u2191 ${Q(s.time,n)}${a}`:"\u2191 \u2014";if(o)return u;let c=r&&r.dayOffset!==0?` ${rn(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${Q(r.time,n)}${c}`:"\u2193 \u2014";return`${u} \xB7 ${d}`}_renderMinimalTimes(e,n,o,s){if(o.minimalTimesHeight<=0)return k;let r=n.t,a=[];if(s.minimal_show_times&&e.events.sunrise){let c=Q(e.events.sunrise,n);a.push(E`<span class="minimal-time rise" title=${`${r("sunrise")} ${c}`}
          >↑ ${c}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let c=Q(e.events.solarNoon,n),d=o.chartWidth<250?c:`${r("zenith")} ${c}`;a.push(E`<span class="minimal-time zenith" title=${`${r("zenith")} ${c}`}
          >${d}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let c=Q(e.events.sunset,n);a.push(E`<span class="minimal-time set" title=${`${r("sunset")} ${c}`}
          >↓ ${c}</span
        >`)}if(a.length===0)return k;let u=b(l(o.minimalTimesHeight*.78,1),8,12);return E`<div
      class="minimal-times"
      style=${V({height:`${o.minimalTimesHeight}px`,fontSize:`${u}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(e,n){return`${this._minimalTitle(e,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(e,n){let o=[this._ariaLabel(e,n)];o.push(`${n.t("sun")} ${dt(e.sun.altitude,0,n.locale)}`);let s=this._primaryCountdown(e,n);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(e,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${n.t("sunrise")} ${Q(e.events.sunrise,n)}`),e.events.sunset&&o.push(`${n.t("sunset")} ${Q(e.events.sunset,n)}`),o.join(", ")}};Pt.styles=as,kt([se({attribute:!1})],Pt.prototype,"hass",1),kt([re()],Pt.prototype,"_config",2),kt([re()],Pt.prototype,"_width",2),kt([re()],Pt.prototype,"_tick",2),Pt=kt([Ke(Wn)],Pt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${nn}`)||window.customCards.push({type:`custom:${nn}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Pt as SunMoonCard};
