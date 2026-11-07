var Gs=Object.defineProperty;var Us=Object.getOwnPropertyDescriptor;var St=(i,t,e,n)=>{for(var o=n>1?void 0:n?Us(t,e):t,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(t,e,o):r(o))||o);return n&&o&&Gs(t,e,o),o};var Ue=globalThis,We=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vn=Symbol(),Bi=new WeakMap,_e=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==vn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(We&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Bi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Bi.set(e,t))}return t}toString(){return this.cssText}},Vi=i=>new _e(typeof i=="string"?i:i+"",void 0,vn),Ke=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new _e(e,i,vn)},ji=(i,t)=>{if(We)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=Ue.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},_n=We?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Vi(e)})(i):i;var{is:Ws,defineProperty:Ks,getOwnPropertyDescriptor:Bs,getOwnPropertyNames:Vs,getOwnPropertySymbols:js,getPrototypeOf:Zs}=Object,Be=globalThis,Zi=Be.trustedTypes,qs=Zi?Zi.emptyScript:"",Ys=Be.reactiveElementPolyfillSupport,we=(i,t)=>i,$e={toAttribute(i,t){switch(t){case Boolean:i=i?qs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ve=(i,t)=>!Ws(i,t),qi={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:Ve};Symbol.metadata??=Symbol("metadata"),Be.litPropertyMetadata??=new WeakMap;var Nt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Ks(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=Bs(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qi}static _$Ei(){if(this.hasOwnProperty(we("elementProperties")))return;let t=Zs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(we("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(we("properties"))){let e=this.properties,n=[...Vs(e),...js(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(_n(o))}else t!==void 0&&e.push(_n(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ji(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:$e).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:$e;this._$Em=o;let a=r.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let r=this.constructor;if(o===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Ve)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Nt.elementStyles=[],Nt.shadowRootOptions={mode:"open"},Nt[we("elementProperties")]=new Map,Nt[we("finalized")]=new Map,Ys?.({ReactiveElement:Nt}),(Be.reactiveElementVersions??=[]).push("2.1.2");var Tn=globalThis,Yi=i=>i,je=Tn.trustedTypes,Xi=je?je.createPolicy("lit-html",{createHTML:i=>i}):void 0,io="$lit$",Ot=`lit$${Math.random().toFixed(9).slice(2)}$`,oo="?"+Ot,Xs=`<${oo}>`,Yt=document,Me=()=>Yt.createComment(""),ke=i=>i===null||typeof i!="object"&&typeof i!="function",En=Array.isArray,Js=i=>En(i)||typeof i?.[Symbol.iterator]=="function",wn=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ji=/-->/g,Qi=/>/g,Zt=RegExp(`>|${wn}(?:([^\\s"'>=/]+)(${wn}*=${wn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),to=/'/g,eo=/"/g,so=/^(?:script|style|textarea|title)$/i,An=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),E=An(1),f=An(2),Qr=An(3),_t=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),no=new WeakMap,qt=Yt.createTreeWalker(Yt,129);function ro(i,t){if(!En(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xi!==void 0?Xi.createHTML(t):t}var Qs=(i,t)=>{let e=i.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",r=xe;for(let a=0;a<e;a++){let u=i[a],c,d,h=-1,p=0;for(;p<u.length&&(r.lastIndex=p,d=r.exec(u),d!==null);)p=r.lastIndex,r===xe?d[1]==="!--"?r=Ji:d[1]!==void 0?r=Qi:d[2]!==void 0?(so.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=Zt):d[3]!==void 0&&(r=Zt):r===Zt?d[0]===">"?(r=o??xe,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?Zt:d[3]==='"'?eo:to):r===eo||r===to?r=Zt:r===Ji||r===Qi?r=xe:(r=Zt,o=void 0);let g=r===Zt&&i[a+1].startsWith("/>")?" ":"";s+=r===xe?u+Xs:h>=0?(n.push(c),u.slice(0,h)+io+u.slice(h)+Ot+g):u+Ot+(h===-2?a:g)}return[ro(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Se=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,r=0,a=t.length-1,u=this.parts,[c,d]=Qs(t,e);if(this.el=i.createElement(c,n),qt.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=qt.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(io)){let p=d[r++],g=o.getAttribute(h).split(Ot),y=/([.?@])?(.*)/.exec(p);u.push({type:1,index:s,name:y[2],strings:g,ctor:y[1]==="."?xn:y[1]==="?"?Mn:y[1]==="@"?kn:se}),o.removeAttribute(h)}else h.startsWith(Ot)&&(u.push({type:6,index:s}),o.removeAttribute(h));if(so.test(o.tagName)){let h=o.textContent.split(Ot),p=h.length-1;if(p>0){o.textContent=je?je.emptyScript:"";for(let g=0;g<p;g++)o.append(h[g],Me()),qt.nextNode(),u.push({type:2,index:++s});o.append(h[p],Me())}}}else if(o.nodeType===8)if(o.data===oo)u.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Ot,h+1))!==-1;)u.push({type:7,index:s}),h+=Ot.length-1}s++}}static createElement(t,e){let n=Yt.createElement("template");return n.innerHTML=t,n}};function oe(i,t,e=i,n){if(t===_t)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=ke(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=oe(i,o._$AS(i,t.values),o,n)),t}var $n=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??Yt).importNode(e,!0);qt.currentNode=o;let s=qt.nextNode(),r=0,a=0,u=n[0];for(;u!==void 0;){if(r===u.index){let c;u.type===2?c=new Te(s,s.nextSibling,this,t):u.type===1?c=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(c=new Sn(s,this,t)),this._$AV.push(c),u=n[++a]}r!==u?.index&&(s=qt.nextNode(),r++)}return qt.currentNode=Yt,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Te=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=oe(this,t,e),ke(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==_t&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Js(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==M&&ke(this._$AH)?this._$AA.nextSibling.data=t:this.T(Yt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Se.createElement(ro(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new $n(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=no.get(t.strings);return e===void 0&&no.set(t.strings,e=new Se(t)),e}k(t){En(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new i(this.O(Me()),this.O(Me()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Yi(t).nextSibling;Yi(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},se=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(t,e=this,n,o){let s=this.strings,r=!1;if(s===void 0)t=oe(this,t,e,0),r=!ke(t)||t!==this._$AH&&t!==_t,r&&(this._$AH=t);else{let a=t,u,c;for(t=s[0],u=0;u<s.length-1;u++)c=oe(this,a[n+u],e,u),c===_t&&(c=this._$AH[u]),r||=!ke(c)||c!==this._$AH[u],c===M?t=M:t!==M&&(t+=(c??"")+s[u+1]),this._$AH[u]=c}r&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},xn=class extends se{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}},Mn=class extends se{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}},kn=class extends se{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=oe(this,t,e,0)??M)===_t)return;let n=this._$AH,o=t===M&&n!==M||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==M&&(n===M||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Sn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){oe(this,t)}};var tr=Tn.litHtmlPolyfillSupport;tr?.(Se,Te),(Tn.litHtmlVersions??=[]).push("3.3.3");var ao=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new Te(t.insertBefore(Me(),s),s,void 0,e??{})}return o._$AI(i),o};var Dn=globalThis,Tt=class extends Nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ao(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _t}};Tt._$litElement$=!0,Tt.finalized=!0,Dn.litElementHydrateSupport?.({LitElement:Tt});var er=Dn.litElementPolyfillSupport;er?.({LitElement:Tt});(Dn.litElementVersions??=[]).push("4.2.2");var Ze=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var nr={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ve},ir=(i=nr,t,e)=>{let{kind:n,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){let{name:r}=e;return{set(a){let u=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,u,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(n==="setter"){let{name:r}=e;return function(a){let u=this[r];t.call(this,a),this.requestUpdate(r,u,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function re(i){return(t,e)=>typeof e=="object"?ir(i,t,e):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,t,e)}function ae(i){return re({...i,state:!0,attribute:!1})}var Ye={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xe=i=>(...t)=>({_$litDirective$:i,values:t}),le=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Et=Xe(class extends le{constructor(i){if(super(i),i.type!==Ye.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return _t}});var lo="important",or=" !"+lo,j=Xe(class extends le{constructor(i){if(super(i),i.type!==Ye.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(or);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?lo:""):e[n]=o}}return _t}});var uo=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],co=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],ho=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],Cn=385000.49;var F=Math.PI/180,wt=180/Math.PI,sr=1495978707e-1,po=6378.14,Ee=-.833,At=-6,Ht=-12,Lt=-18,Je=6,De=-4,go=-6,Ae=120*1e3;function Ce(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function ce(i){return(i-2451545)/36525}function Z(i){let t=i%360;return t<0?t+360:t}function rr(i){let t=ce(i);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function ar(i){let t=i-2451545,e=ce(i),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return Z(n)}function Nn(i){let t=ce(i),e=Z(280.46646+t*(36000.76983+t*3032e-7)),n=Z(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*F)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*F)*(.019993-101e-6*t)+Math.sin(3*n*F)*289e-6,s=e+o,r=Z(125.04-1934.136*t),a=s-.00569-.00478*Math.sin(r*F),c=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*F),d=a*F,h=c*F,p=Z(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*wt),g=Math.asin(Math.sin(h)*Math.sin(d))*wt;return{ra:p,dec:g}}function lr(i){let t=ce(i),e=Z(280.46646+t*(36000.76983+t*3032e-7)),n=Z(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*F)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*F)*(.019993-101e-6*t)+Math.sin(3*n*F)*289e-6,s=Z(125.04-1934.136*t);return Z(e+o-.00569-.00478*Math.sin(s*F))}function ur(i){let t=Ce(i),e=ce(t),n=Z(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*F)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*F)*(.019993-101e-6*e)+Math.sin(3*n*F)*289e-6,r=(n+s)*F;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*sr}function Hn(i,t,e,n){let o=Z(ar(n)+e),s=Z(o-i.ra),r=t*F,a=i.dec*F,u=s*F,c=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(u))*wt,d=Z(Math.atan2(Math.sin(u),Math.cos(u)*Math.sin(r)-Math.tan(a)*Math.cos(r))*wt+180);return{altitude:c,azimuth:d}}function Ne(i,t){let e=Ce(i);return Hn(Nn(e),t.latitude,t.longitude,e).altitude}function Qe(i,t){let e=Ce(i);return Hn(Nn(e),t.latitude,t.longitude,e)}function cr(i){let t=i;return{D:Z(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:Z(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:Z(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:Z(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function fo(i){let t=ce(i),e=Z(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=cr(t),o=e;for(let a of uo){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;o+=a[4]*Math.sin(u*F)}let s=0;for(let a of co){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;s+=a[4]*Math.sin(u*F)}let r=Cn;for(let a of ho){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;r+=a[4]*Math.cos(u*F)}return{longitude:Z(o),latitude:s,distanceKm:r}}function bo(i,t,e){let n=rr(e)*F,o=i*F,s=t*F,r=Z(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*wt),a=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*wt;return{ra:r,dec:a}}function Ft(i,t){let e=Ce(i),n=fo(e),o=bo(n.longitude,n.latitude,e),s=Hn(o,t.latitude,t.longitude,e),r=Math.asin(po/n.distanceKm)*wt,a=s.altitude-r*Math.cos(s.altitude*F);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:n}}function dr(i){return .7275*(Math.asin(po/i)*wt)-.5667}var hr=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],mr=29.530588853;function tn(i){let t=Ce(i),e=fo(t),n=bo(e.longitude,e.latitude,t),o=Nn(t),s=lr(t),r=ur(i),a=e.distanceKm,u=e.latitude*F,c=Math.acos(Math.min(1,Math.max(-1,Math.cos(u)*Math.cos((e.longitude-s)*F)))),d=Math.atan2(r*Math.sin(c),a-r*Math.cos(c)),h=Z(d*wt),p=(1+Math.cos(d))/2,g=(o.ra-n.ra)*F,y=o.dec*F,T=n.dec*F,w=Z(Math.atan2(Math.cos(y)*Math.sin(g),Math.sin(y)*Math.cos(T)-Math.cos(y)*Math.sin(T)*Math.cos(g))*wt),P=Z(e.longitude-s)/360,v=Math.min(7,Math.floor(P*8+.5)%8),$=P*29.530588853;return{illumination:p,phaseAngle:h,elongation:c*wt,phaseIndex:v,phaseKey:hr[v],brightLimbAngle:w,moonAgeDays:$,waxing:P<.5,distanceKm:a}}function ue(i,t,e,n,o){let s=[];if(!(t>i))return s;let r=Math.max(2,Math.ceil((t-i)/e)),a=(t-i)/r,u=i,c=n(i)-o;for(let d=1;d<=r;d++){let h=i+d*a,p=n(h)-o;if(c===0)s.push({time:u,rising:p>0});else if(c<0&&p>=0||c>0&&p<=0){let g=u,y=h,T=c;for(let w=0;w<50&&y-g>1;w++){let P=(g+y)/2,v=n(P)-o;v<0&&T<0||v>0&&T>0?(g=P,T=v):y=P}s.push({time:(g+y)/2,rising:p>c})}u=h,c=p}return s}function mo(i,t,e,n){let o=i.find(s=>s.rising===t&&s.time>=e&&s.time<n);return o?new Date(o.time):null}function Ln(i,t,e,n=4){let o=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),a=e.getTime(),u=_=>Ne(_,i),c=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let _=r;_<a;_+=d)c.push({time:_,altitude:u(_)});c.push({time:a,altitude:u(a)});let h=-1/0,p=1/0;for(let _ of c)_.altitude>h&&(h=_.altitude),_.altitude<p&&(p=_.altitude);let g=[["sunrise","sunset",Ee],["civilDawn","civilDusk",At],["nauticalDawn","nauticalDusk",Ht],["astronomicalDawn","astronomicalDusk",Lt]],y={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[_,k,C]of g){let H=ue(o,s,Ae,u,C);y[_]=mo(H,!0,r,a),y[k]=mo(H,!1,r,a)}let T=r,w=-1/0,P=120*1e3;for(let _=r;_<=a;_+=P){let k=u(_);k>w&&(w=k,T=_)}let v=Math.max(r,T-P),$=Math.min(a,T+P);for(let _=0;_<40&&$-v>1e3;_++){let k=v+($-v)/3,C=$-($-v)/3;u(k)<u(C)?v=k:$=C}y.solarNoon=new Date((v+$)/2);let R="none";return p>Ee?R="polar-day":h<Ee&&(R="polar-night"),{dayStart:t,dayEnd:e,samples:c,maxAltitude:h,minAltitude:p,events:y,polar:R}}function Rn(i,t,e,n=48){let o=typeof t=="number"?t:t.getTime();if(!Number.isFinite(o)||!Number.isFinite(e))return null;let s=a=>Ne(a,i),r=ue(o,o+n*60*60*1e3,Ae,s,e)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function yo(i,t,e,n,o=48){let s=typeof t=="number"?t:t.getTime();if(!Number.isFinite(s)||!(e<n))return null;let r=p=>Ne(p,i),a=s+o*60*60*1e3,u=[...ue(s,a,Ae,r,e),...ue(s,a,Ae,r,n)].sort((p,g)=>p.time-g.time),c=p=>p>=e&&p<=n,d=c(r(s)),h=d?s:null;for(let p of u){let g=c(r(p.time+1e3));if(h===null&&g)h=p.time;else if(h!==null&&!g)return{start:new Date(h),end:new Date(p.time),active:d}}return h===null?null:{start:new Date(h),end:null,active:d}}function pr(i,t,e,n=10){let o=t.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),a=[];for(let d=o;d<s;d+=r)a.push({time:d,altitude:Ft(d,i).apparentAltitude});a.push({time:s,altitude:Ft(s,i).apparentAltitude});let u=-1/0,c=1/0;for(let d of a)d.altitude>u&&(u=d.altitude),d.altitude<c&&(c=d.altitude);return{samples:a,maxAltitude:u,minAltitude:c}}function vo(i,t,e,n,o=10){let s=t.getTime(),r=e.getTime(),a=u=>{if(!u)return null;let c=u.getTime();return c>=s&&c<r?c:null};return{profile:pr(i,t,e,o),rise:a(n.previousRise)??a(n.nextRise),set:a(n.previousSet)??a(n.nextSet)}}function _o(i,t){let e=i.getTime(),n=e-1800*60*1e3,o=e+1800*60*1e3,r=ue(n,o,Ae,g=>{let y=Ft(g,t);return y.altitude-dr(y.distanceKm)},0),a=r.filter(g=>g.rising),u=r.filter(g=>!g.rising),c=a.find(g=>g.time>e)??null,d=[...a].reverse().find(g=>g.time<=e)??null,h=u.find(g=>g.time>e)??null,p=[...u].reverse().find(g=>g.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:p?new Date(p.time):null,nextRise:c?new Date(c.time):null,nextSet:h?new Date(h.time):null}}function wo(i){return i>0?"day":i>At?"civil":i>Ht?"nautical":i>Lt?"astronomical":"night"}function gr(i){return(((tn(i).moonAgeDays/mr-.5)%1+1)%1+.5)%1-.5}function Pn(i,t){let e=typeof i=="number"?i:i.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?ue(e,n,360*60*1e3,gr,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function $o(i,t=32){let e=typeof i=="number"?i:i.getTime(),o=Pn(e,e+t*24*60*60*1e3)[0];if(!o)return null;let s=tn(o).illumination;return s<.98?null:{time:o,illumination:s}}function xo(i,t,e=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,c=s,d=s;for(let h=s;h<=r;h+=o){let p=Ft(h,t).distanceKm;p<a&&(a=p,c=h),p>u&&(u=p,d=h)}return{current:Ft(n,t).distanceKm,min:a,minTime:new Date(c),max:u,maxTime:new Date(d),mean:Cn}}function en(i,t,e="sun"){return(e==="sun"?Qe(i,t):Ft(i,t)).azimuth}function b(i,t,e){return Number.isNaN(i)?t:Math.min(e,Math.max(t,i))}function zn(i,t,e){return i+(t-i)*e}function l(i,t=0){let e=10**t;return Math.round(i*e)/e}function Mo(i){let t=i.trim().replace(/^#/,""),e=t.length===3?t.split("").map(o=>o+o).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]}function fr(i){return`#${i.map(t=>Math.round(b(t,0,255)).toString(16).padStart(2,"0")).join("")}`}function In(i,t,e){let n=Mo(i),o=Mo(t);if(!n||!o)return t;let s=b(e,0,1);return fr([zn(n[0],o[0],s),zn(n[1],o[1],s),zn(n[2],o[2],s)])}function On(i){return typeof i=="number"&&Number.isFinite(i)}function ft(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let t=Number(i.replace(",","."));if(Number.isFinite(t))return t}return null}function ko(i){return i.length===0?"":i.map((t,e)=>`${e===0?"M":"L"}${l(t.x,2)} ${l(t.y,2)}`).join(" ")}function nn(i,t=.5){if(i.length<3)return ko(i);let e=[`M${l(i[0].x,2)} ${l(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],a=i[n+2]??r,u=s.x+(r.x-o.x)/6*t*2,c=s.y+(r.y-o.y)/6*t*2,d=r.x-(a.x-s.x)/6*t*2,h=r.y-(a.y-s.y)/6*t*2;e.push(`C${l(u,2)} ${l(c,2)} ${l(d,2)} ${l(h,2)} ${l(r.x,2)} ${l(r.y,2)}`)}return e.join(" ")}function on(i,t,e=!1){if(i.length===0)return"";let n=e?nn(i):ko(i),o=i[0],s=i[i.length-1];return`${n} L${l(s.x,2)} ${l(t,2)} L${l(o.x,2)} ${l(t,2)} Z`}function Rt(i,t,e){let n=e*Math.PI/180;return{x:i.x-t*Math.sin(n),y:i.y-t*Math.cos(n)}}function So(i,t,e){let n=b(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${l(i.x-t,2)} ${l(i.y,2)} a${l(t,2)} ${l(t,2)} 0 1 1 ${l(t*2,2)} 0 a${l(t,2)} ${l(t,2)} 0 1 1 ${l(-t*2,2)} 0 Z`;let o=t*(1-2*n),s=1,r=o>0?0:1,a={x:i.x-t,y:i.y},u={x:i.x+t,y:i.y};return`M${l(a.x,2)} ${l(a.y,2)} A${l(t,2)} ${l(t,2)} 0 0 ${s} ${l(u.x,2)} ${l(u.y,2)} A${l(t,2)} ${l(Math.abs(o),4)} 0 0 ${r} ${l(a.x,2)} ${l(a.y,2)} Z`}function To(i=new Date){let t=i.getTime();return t+(6e4-t%6e4)+250}var br=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function de(i){let{size:t,illumination:e,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:u}=i,c={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=So(c,d,e),p=r&&t>=26,g=l(-n,2);return f`
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
      ${h?f`<g transform="rotate(${g} ${l(c.x,2)} ${l(c.y,2)})">
              <path d="${h}" fill="${o}" />
              ${p?f`<g clip-path="url(#${u}-clip)" opacity="0.16">
                      <clipPath id="${u}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${br.map(y=>{let T={x:c.x+y.x*d,y:c.y+y.y*d};return f`<circle
                          cx="${l(T.x,2)}" cy="${l(T.y,2)}"
                          r="${l(y.r*d,2)}"
                          fill="#5a6488" />`})}
                    </g>`:f``}
            </g>`:f``}
      <circle
        cx="${l(c.x,2)}" cy="${l(c.y,2)}" r="${l(d,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function Fn(i,t,e,n){let o=Rt(i,t,e),s=e*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),u=b(t*.12,4,9),c=b(t*.07,2.5,5),d={x:o.x+r*u,y:o.y+a*u},h={x:o.x-a*c,y:o.y+r*c},p={x:o.x+a*c,y:o.y-r*c};return f`
    <polygon
      points="${l(d.x,2)},${l(d.y,2)} ${l(h.x,2)},${l(h.y,2)} ${l(p.x,2)},${l(p.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var rn="sun-moon-card",Vn="sun-moon-card",Co="sun-moon-card-editor";var jn=24,yr=16,Gn=4,vr=12,_r=36,He=[2,12],Gt=[320,1200],Ut=[260,800];function he(i){return i?[jn,800]:[120,800]}var D={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},No=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],Ho=400,Lo=250,Ro=1200*1e3,Zn={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},qn={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},Po=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],Yn=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Wt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon"],remainingTimeFocus:["sun","next","golden_hour"]},zo=700,wr=260,Xn=16,Jn=4,Io=72,Eo=10,Bn=56,$r=84,xr=96,Un=74,Mr=Bn+8,kr=12,Sr=10,lt=4,sn=4,Ao=30,Do=44,Tr=26,Er=72,Qn=96,Wn=20,Kn=18;function Oo(i,t,e){if(e.minimal_mode){let x=(e.minimal_show_times||e.minimal_show_zenith)&&i>=_r?vr:0,S=Math.max(yr,i-2*Gn-x);return{padding:Gn,minimalTimesHeight:x,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,t-2*Gn),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:S,minimal:!0,compact:!1}}let n=e.compact_mode,o=n?Sr:kr,s=Math.max(40,i-2*o),r=0,a=e.show_footer&&!n?Wn+lt:0,u=Ao+lt+Do+lt+a+(Kn+sn)+Un,c=e.show_header&&!n&&s>=u,d=c?Ao:0;s-=d,c&&(s-=lt,r+=lt);let h=n?Tr:Do,p=e.show_events&&s-(h+lt)-a>=$r,g=p?h:0;s-=g,p&&(s-=lt,r+=lt);let y=e.show_astronomical_details?Qn:Er,T=!n&&(e.show_sun||e.show_moon)&&s-(y+lt)-a>=xr,w=T?y:0;s-=w,T&&(s-=lt,r+=lt);let P=e.show_footer&&!n&&p&&s-(Wn+lt)>=Mr,v=P?Wn:0;s-=v,P&&(s-=lt,r+=lt);let $=Math.max(Bn,s),R=e.show_day_chart&&!n&&p&&$-Kn-sn>=Un,_=R?Kn:0;R&&(r+=sn);let k=Math.max(Bn,$-_-(R?sn:0)),C=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),H=C&&t>=zo&&k>=Un,A=Math.max(80,t-2*o),I=H?Math.round(Math.min(wr,(A-Eo)/3)):0,X=Math.max(120,H?A-Eo-I:A);return{padding:o,showHeader:c,showEvents:p,showDetails:T,showFooter:P,showLegend:R,skyViewSide:H,skyViewInline:!H&&C&&T,skyViewWidth:I,chartWidth:X,gaps:r,headerHeight:d,eventsHeight:g,detailsHeight:w,footerHeight:v,legendHeight:_,chartHeight:k,minimal:!1,minimalTimesHeight:0,compact:n}}function Fo(i){return i>=zo?360:320}function an(){return{type:`custom:${rn}`,card_height:340}}var ti={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function Y(i,t,e){let o=(ti[i]??ti.en)[t]??ti.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function Xt(i,t){return((i&&i!=="auto"?i:t)??"").toLowerCase().startsWith("de")?"de":"en"}function Wo(i,t,e){let n=i;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var Go=new Map;function ei(i,t,e){let n=`${t}|${i}`,o=Go.get(n);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(t,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(u=>u.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return Go.set(n,s),s}var Uo=new Map;function Ar(i,t,e){let n=`${i}|${t}|${e}`,o=Uo.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}Uo.set(n,o)}return o}function tt(i,t){return Ar(t.locale,t.timeZone,t.hour12).format(i)}function Ko(i,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function ni(i,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}catch{return i.toFixed(t)}}function ct(i,t=1,e="de-DE"){return`${ni(i,t,e)}\xB0`}function ln(i,t="de-DE"){return`${ni(Math.round(i),0,t)} km`}function Bo(i,t){return`${i<0?"\u2212":"+"}${un(Math.abs(i),t)}`}function un(i,t){let e=Math.max(0,Math.round(i));if(e<60)return t("countdownMinutes",{minutes:String(e)});let n=Math.floor(e/60),o=e%60;return n<24?t("countdownHours",{hours:String(n),minutes:String(o)}):t("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function cn(i,t){return t(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function Vo(i,t="de-DE"){return`${ni(i*100,0,t)} %`}function Jt(i,t){let e=(i%360+360)%360,n=Yn[0],o=1/0;for(let r of Yn){let a=Math.abs((e-r.deg+540)%360-180);a<o&&(o=a,n=r)}let s=`dir${n.key}`;return Y(t,s)}function jo(i,t,e,n){return{language:i,locale:t,timeZone:e,hour12:n,t:(o,s)=>Y(i,o,s)}}var Zo="var(--smc-golden-hour, #f2b544)",Dr="var(--smc-blue-hour, #4f6fd6)";function qo(i,t,e){let n=[],o=null;for(let s of i){let r=s.altitude>=t&&s.altitude<=e;r&&o===null&&(o=s.time),!r&&o!==null&&(n.push([o,s.time]),o=null)}return o!==null&&i.length&&n.push([o,i[i.length-1].time]),n}function Yo(i,t){if(i.length<=t)return i;let e=i.length/t,n=[];for(let s=0;s<t;s++)n.push(i[Math.floor(s*e)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function Cr(i,t,e,n,o){if(i.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),a,u;if(s!==void 0&&r!==void 0&&r>s)a=n(s),u=n(r);else if(e==="polar-day")a=i[0].x,u=i[i.length-1].x;else return null;let c=i.filter(d=>d.x>=a-.5&&d.x<=u+.5);return c.length<2?null:{path:on(c,o,!0),cx:(a+u)/2,cy:o,r:Math.max(6,(u-a)/2)}}function Nr(i,t){let e=t?Math.max(i.maxAltitude,t.maxAltitude):i.maxAltitude,n=t?Math.min(i.minAltitude,t.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(e-o)*.1),r=b(e+s,-18,90.5);return[b(Math.max(-28,n-2),-90,r-6),r]}function ii(i,t,e=2.2){let n=[0,At,Ht,Lt],o=[t.day,t.civil,t.nautical,t.astronomical,t.night];if(i>e/2){let s=b(1-i/12,0,1)*.5;return In(t.day,t.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+e/2,a=n[s]-e/2;if(i>=r)return o[s];if(i>a){let u=(r-i)/e;return In(o[s],o[s+1],u*u*(3-2*u))}}return o[o.length-1]}function Hr(i,t,e,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,a=t+e*(1-r);o.push({offset:r,color:ii(a,i)})}return o}function Lr(i,t,e,n,o,s){let r=i.samples;if(r.length<2)return[];let a=[],u=(d,h)=>{d&&!Number.isNaN(d.getTime())&&a.push({time:d.getTime(),color:h})};u(t.astronomicalDawn,e.astronomical),u(t.nauticalDawn,e.nautical),u(t.civilDawn,e.civil),u(t.sunrise,e.glow),u(t.solarNoon,e.day),u(t.sunset,e.glow),u(t.civilDusk,e.civil),u(t.nauticalDusk,e.nautical),u(t.astronomicalDusk,e.astronomical);let c=[{offset:0,color:ii(r[0].altitude,e)},...a.map(d=>({offset:b((n(d.time)-o)/s,0,1),color:d.color})),{offset:1,color:ii(r[r.length-1].altitude,e)}];return c.sort((d,h)=>d.offset-h.offset),c}function oi(i){let{profile:t,events:e,now:n,width:o,height:s,palette:r,format:a,showSun:u,showMoon:c,moon:d,moonPath:h,showTwilight:p,twilightLevel:g,animations:y,cardStyle:T,minimal:w,sunMarkerSize:P,uid:v,showAstronomicalLayers:$,currentAltitude:R,countdown:_=null,showGoldenHour:k=!1}=i,C=Math.max(w?60:120,o),H=Math.max(w?12:56,s),A=w?2:4,I=w?2:4,X=w?2:6,q=!w&&H>=112,ot=q?b(l(H*.13,1),13,20):0,x=A,S=Math.max(10,C-A-I),z=X,W=Math.max(10,H-X-ot),U=z+W,[dt,J]=Nr(t,h?.profile??null),$t=Math.max(1,J-dt),G=t.dayStart.getTime(),st=t.dayEnd.getTime(),te=Math.max(1,st-G),nt=m=>x+(m-G)/te*S,ht=m=>U-(b(m,-95,95)-dt)/$t*W,B=ht(0),mt=b(Math.round(S/1.6),60,361),ut=Yo(t.samples,mt).map(m=>({x:nt(m.time),y:ht(m.altitude)})),O=Hr(r,dt,$t),rt=Lr(t,e,r,nt,x,S),xt=`${v}-area`,yt=`${v}-line`,ge=`${v}-clip`,bi=`${v}-glow`,yi=`${v}-sky`,vi=`${v}-soft`,_i=`${v}-soft-fade`,wi=`${v}-foot`,$i=`${v}-foot-fade`,xi=`${v}-side`,Mi=`${v}-side-fade`,Mt=T==="horizon",ys=on(ut,Mt?l(B,2):U+1,!0),vs=nn(ut),ki=h?Yo(h.profile.samples,b(Math.round(S/2),40,240)).map(m=>({x:nt(m.time),y:ht(m.altitude)})):null,mn=ki&&!w?nn(ki):null,pn="var(--smc-moon-line, #cbd5e1)",_s=b(l(H*.013,2),1.1,1.9),ws=on(ut,z-1,!0),fe=T==="flat"?.6:Mt?.3:1,$s=Mt?0:l(.15*fe,3),Dt=z-1,gn=U+1,zt=Math.max(1,gn-Dt),xs=b(W*.14,w?1.5:6,18),Ms=b(W*.08,w?1:4,12),ks=b(S*.02,w?2:6,14),Si=b(l(W*.06,1),w?1.5:4,10),Ss=l(b(xs/zt,0,.45),4),Ti=l(1-b(Ms/zt,0,.45),4),ee=x-1,Re=x+S+1,Ei=l(b(ks/Math.max(1,Re-ee),0,.4),4),Ts=Math.max(16,S*.16),Es=b(W*.45,9,46),Pe=[];W>=34&&(e.sunrise&&Pe.push({id:`${v}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&Pe.push({id:`${v}-glow-set`,time:e.sunset,color:r.glow}));let ne=w?null:Cr(ut,e,t.polar,nt,B),Ai=`${v}-dome`,Q=a.t,ze=[],be=m=>{m.time&&!Number.isNaN(m.time.getTime())&&ze.push({secondary:!1,...m})};if(e.sunrise&&be({key:"sunrise",time:e.sunrise,label:Q("sunrise"),shortLabel:Q("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&be({key:"sunset",time:e.sunset,label:Q("sunset"),shortLabel:Q("sunsetShort"),kind:"sunset",altitude:0}),p&&(e.civilDawn&&be({key:"civilDawn",time:e.civilDawn,label:Q("civilDawn"),shortLabel:Q("civilDawnShort"),kind:"dawn",altitude:At}),e.civilDusk&&be({key:"civilDusk",time:e.civilDusk,label:Q("civilDusk"),shortLabel:Q("civilDuskShort"),kind:"dusk",altitude:At}),g==="all"||$)){let m=[["nauticalDawn","dawn","nauticalDawn",Ht],["nauticalDusk","dusk","nauticalDusk",Ht],["astronomicalDawn","dawn","astronomicalDawn",Lt],["astronomicalDusk","dusk","astronomicalDusk",Lt]];for(let[N,L,V,K]of m){let it=e[N];it&&be({key:N,time:it,label:Q(V),shortLabel:Q(V),kind:L,altitude:K,secondary:!0})}}ze.sort((m,N)=>m.time.getTime()-N.time.getTime());let ie=b(l(H*.062,1),7.5,10.5),Ie=b(l(ie+5,1),11,ot||15),Di=m=>m.secondary?2:m.kind==="sunrise"||m.kind==="sunset"?0:1,As=S<240?3:S<340?4:6,Ci=w?[]:[...ze].sort((m,N)=>Di(m)-Di(N)||m.time.getTime()-N.time.getTime()).slice(0,Math.max(2,As)),Ni=S<260,Ds=!Ni&&(Ci.length>3||S<340),Hi=4,Cs=Math.max(8,ie*1.2),Bt=[];for(let m of Ci){let N=Ni?tt(m.time,a):Ds?m.shortLabel:m.label,L=N.length*ie*.56+8,V=b(nt(m.time.getTime()),x+L/2,x+S-L/2),K=kt=>Bt.some(Vt=>Math.abs(Vt.x-kt)<(Vt.width+L)/2+Hi),it=K(V)?null:V;if(it===null)for(let kt of Bt){let Vt=(kt.width+L)/2+Hi;for(let jt of[kt.x+Vt,kt.x-Vt])if(Math.abs(jt-V)<=Cs&&jt-L/2>=x-.5&&jt+L/2<=x+S+.5&&!K(jt)){it=jt;break}if(it!==null)break}it!==null&&Bt.push({x:it,width:L,text:N,secondary:m.secondary})}Bt.sort((m,N)=>m.x-N.x);let at=b(nt(n.getTime()),x,x+S),Ns=r.day,It=b(l(H*.16,1),Math.min(2.8,P),P),Li=b(l(It*.22,2),.8,1.4),Ct=b(l(It*1.1,1),3.5,7),Ri=(m,N)=>W<=N*2?z+W/2:b(ht(m),z+N,U-N),Pi=Ri(R,It),zi=k&&!w?[...qo(t.samples,De,Je).map(m=>({range:m,kind:"golden",color:Zo,key:"goldenHour"})),...qo(t.samples,go,De).map(m=>({range:m,kind:"blue",color:Dr,key:"blueHour"}))].map(({range:m,kind:N,color:L,key:V})=>{let K=b(nt(m[0]),x,x+S),it=b(nt(m[1]),x,x+S);return{x:K,width:it-K,kind:N,color:L,title:`${Q(V)} ${tt(new Date(m[0]),a)}\u2013${tt(new Date(m[1]),a)}`}}).filter(m=>m.width>=.5):[],pt=(()=>{if(w||!_)return null;let m=_.time.getTime();if(!(m>n.getTime()))return null;let L=dt<0&&J>0?ht(0):U-1,V=nt(m),K=b(V,x,x+S);if(K-at<2)return null;let it=_.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":_.body==="twilight"?r.civil:_.body==="golden"?Zo:r.day;return{y:L,endX:K,endsInside:V<=x+S,color:it}})(),fn=b(l(H*.016,1),2,3),gt=(()=>{if(w||!_?.label)return null;let m=ie,N=m+5,L=_.label.length*m*.56+10,V=Math.max(It,3)+3,K=at+V,it=K+L<=x+S?K:Math.max(x,at-V-L),kt=q||Bt.length===0?z+1:z+Ie+3;return{x:it,y:kt,width:L,height:N,fontSize:m}})(),vt=c&&d&&!w?{altitude:d.altitude,y:Ri(d.altitude,Ct),clamped:d.altitude<dt||d.altitude>J}:null,Hs=vt?Math.abs(vt.y-Pi):Number.POSITIVE_INFINITY,bn=It+Ct+2,ye=vt?Hs>=It+Ct+1?at:at+bn+Ct<=x+S?at+bn:Math.max(x+Ct,at-bn):null,Ls=y?"smc-pulse":"",Rs=y?`url(#${bi})`:"",yn=[{altitude:0,label:Q("horizon"),key:"horizon"}];$||g==="all"?yn.push({altitude:At,label:`${Q("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Ht,label:`${Q("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Lt,label:`${Q("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):p&&yn.push({altitude:At,label:`${Q("refCivil")} (\u22126\xB0)`,key:"civil"});let Ps=!w&&W>=86&&S>=250,zs=yn.filter(m=>(!w||m.key==="horizon")&&m.altitude>dt+.5&&m.altitude<J-.5),Is=b(l(H*.055,1),7.5,9.5),ve=e.solarNoon,Ii=!w&&!!ve&&t.maxAltitude>0&&W>=104&&S>=220&&$,Oi=Ii?`${Q("zenith")} ${tt(ve,a)} \xB7 ${ct(t.maxAltitude,1,a.locale)}`:"",Oe=b(l(H*.055,1),7.5,9.5),Fe=Oi.length*Oe*.56+10,Fi=ve?b(nt(ve.getTime()),x+Fe/2,x+S-Fe/2):0,Gi=ve?ht(t.maxAltitude):0,Ge=Oe+5,Ui=b(Gi-Ge-4,z,Math.max(z,Gi+10)),Wi=w?1:S<220?4:S<420?6:8,Ki=[];for(let m=1;m<Wi;m++)Ki.push(x+S*m/Wi);return f`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(C,1)} ${l(H,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${Q("title")}"
    >
      <defs>
        <linearGradient id="${xt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(z,1)}" x2="0" y2="${l(U,1)}">
          ${O.map(m=>f`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color}" />`)}
        </linearGradient>
        <linearGradient id="${yt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(z,1)}" x2="0" y2="${l(U,1)}">
          ${O.map(m=>f`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${rt.length>=2?f`<linearGradient id="${yi}" gradientUnits="userSpaceOnUse"
                x1="${l(x,1)}" y1="0" x2="${l(x+S,1)}" y2="0">
                ${rt.map(m=>f`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color}" />`)}
              </linearGradient>`:f``}
        ${Pe.map(m=>f`<radialGradient id="${m.id}">
              <stop offset="0%" stop-color="${m.color}" stop-opacity="${l(.5*fe,3)}" />
              <stop offset="45%" stop-color="${m.color}" stop-opacity="${l(.2*fe,3)}" />
              <stop offset="100%" stop-color="${m.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${ne?f`<radialGradient id="${Ai}" gradientUnits="userSpaceOnUse"
                cx="${l(ne.cx,1)}" cy="${l(ne.cy,1)}" r="${l(ne.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${l(.3*fe,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${l(.18*fe,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:f``}
        <linearGradient id="${_i}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(Dt,1)}" x2="0" y2="${l(gn,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Ss}" stop-color="#ffffff" />
          <stop offset="${Ti}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${vi}" maskUnits="userSpaceOnUse"
          x="${l(x-2,1)}" y="${l(Dt,1)}"
          width="${l(S+4,1)}" height="${l(zt,1)}">
          <rect
            x="${l(x-2,1)}" y="${l(Dt,1)}"
            width="${l(S+4,1)}" height="${l(zt,1)}"
            fill="url(#${_i})" />
        </mask>
        <linearGradient id="${$i}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(Dt,1)}" x2="0" y2="${l(gn,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${Ti}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${wi}" maskUnits="userSpaceOnUse"
          x="${l(x-2,1)}" y="${l(Dt,1)}"
          width="${l(S+4,1)}" height="${l(zt,1)}">
          <rect
            x="${l(x-2,1)}" y="${l(Dt,1)}"
            width="${l(S+4,1)}" height="${l(zt,1)}"
            fill="url(#${$i})" />
        </mask>
        <linearGradient id="${Mi}" gradientUnits="userSpaceOnUse"
          x1="${l(ee,1)}" y1="0" x2="${l(Re,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Ei}" stop-color="#ffffff" />
          <stop offset="${l(1-Ei,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${xi}" maskUnits="userSpaceOnUse"
          x="${l(ee,1)}" y="${l(Dt,1)}"
          width="${l(Re-ee,1)}" height="${l(zt,1)}">
          <rect
            x="${l(ee,1)}" y="${l(Dt,1)}"
            width="${l(Re-ee,1)}" height="${l(zt,1)}"
            fill="url(#${Mi})" />
        </mask>
        <clipPath id="${ge}">
          <rect x="${l(x-1,1)}" y="${l(z-2,1)}"
            width="${l(S+2,1)}" height="${l(W+4,1)}"
            rx="${Si}" ry="${Si}" />
        </clipPath>
        ${y?f`<filter id="${bi}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${l(It*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:f``}
      </defs>

      <g clip-path="url(#${ge})">
        ${Ki.map(m=>f`<line x1="${l(m,1)}" y1="${l(z,1)}" x2="${l(m,1)}" y2="${l(U,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${xi})">
        <path d="${ys}" fill="url(#${xt})" opacity="0.9" mask="url(#${wi})" />
        <g mask="url(#${vi})">
          ${rt.length>=2&&!Mt?f`<path d="${ws}" fill="url(#${yi})" opacity="${$s}" />`:f``}
          ${Pe.map(m=>{let N=b(nt(m.time.getTime()),x,x+S),L=b(B,z,U);return f`<ellipse
                cx="${l(N,1)}" cy="${l(L,1)}"
                rx="${l(Ts,1)}" ry="${l(Es,1)}"
                fill="url(#${m.id})" />`})}
          ${ne&&!Mt?f`<path d="${ne.path}" fill="url(#${Ai})" opacity="0.95" />`:f``}
        </g>
        </g>
        ${zi.length?f`<g class="hour-bands">
                ${zi.map(m=>f`<g class=${m.kind}>
                    <title>${m.title}</title>
                    <rect
                      x="${l(m.x,1)}" y="${l(z,1)}"
                      width="${l(m.width,1)}" height="${l(W,1)}"
                      fill="${m.color}" opacity="${m.kind==="golden"?.16:.2}" />
                    <rect
                      x="${l(m.x,1)}" y="${l(U-3,1)}"
                      width="${l(m.width,1)}" height="3"
                      fill="${m.color}" opacity="0.85" />
                  </g>`)}
              </g>`:f``}
        ${mn?f`<path
                class="moon-curve"
                data-body="moon"
                d="${mn}"
                fill="none"
                stroke="${pn}"
                stroke-width="${_s}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${Mt?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:f``}
        ${h&&mn?f`<g class="moon-events">
                ${[[h.rise,"moonrise"],[h.set,"moonset"]].filter(m=>m[0]!==null).map(([m,N])=>{let L=b(nt(m),x,x+S),V=b(ht(0),z,U),K=b(l(H*.05,1),4,8);return f`<g>
                      <title>${a.t(N)} ${tt(new Date(m),a)}</title>
                      <line
                        x1="${l(L,1)}"
                        y1="${l(V-K,1)}"
                        x2="${l(L,1)}"
                        y2="${l(V+K,1)}"
                        stroke="${pn}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${l(L,1)}"
                        cy="${l(V,1)}"
                        r="${b(l(H*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${pn}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:f``}
        <path
          d="${vs}"
          fill="none"
          stroke="url(#${yt})"
          stroke-width="${b(l(H*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${zs.map(m=>{let N=ht(m.altitude),L=m.key==="horizon";return f`<g>
            <line
              x1="${l(x,1)}" y1="${l(N,1)}"
              x2="${l(x+S,1)}" y2="${l(N,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${L&&Mt?1.5:L?1:.6}"
              stroke-dasharray="${L&&Mt?"999 0":L?"3 3":"2 4"}"
              opacity="${L&&Mt?.9:L?.6:Mt?.3:.45}"
            />
            ${Ps?f`<text
                    x="${l(x+3,1)}"
                    y="${l(N-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${Is}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${m.label}</text>`:f``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${ze.map(m=>{let N=b(nt(m.time.getTime()),x,x+S),L=b(ht(m.altitude),z,U),V=!m.secondary,K=V?b(l(H*.022,1),1.8,3):1.4,it="var(--smc-marker-strong, rgba(255,255,255,0.9))",kt="var(--smc-marker-soft, rgba(255,255,255,0.55))",Vt=m.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":m.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":m.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",jt=V?Vt:kt,Os=V?it:kt,Fs=m.kind==="sunrise"||m.kind==="sunset"?f`
                <circle cx="${l(N,1)}" cy="${l(L,1)}" r="${K+1}"
                  fill="${m.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${l(N-K*2.6,1)}"
                  y1="${l(m.kind==="sunrise"?L+K+2:L-K-2,1)}"
                  x2="${l(N+K*2.6,1)}"
                  y2="${l(m.kind==="sunrise"?L+K+2:L-K-2,1)}"
                  stroke="${it}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:f`<circle cx="${l(N,1)}" cy="${l(L,1)}" r="${K}"
                  fill="${Os}" opacity="0.85" />`;return f`<g>
            <line
              x1="${l(N,1)}" y1="${l(z,1)}"
              x2="${l(N,1)}" y2="${l(U,1)}"
              stroke="${jt}" stroke-width="${V?1:.7}"
              stroke-dasharray="3 3" opacity="${V?.5:.25}" />
            ${Fs}
          </g>`})}
      </g>

      ${pt?f`<g class="countdown-track">
              <title>${_.title}</title>
              <line
                x1="${l(at,1)}" y1="${l(pt.y,1)}"
                x2="${l(pt.endX,1)}" y2="${l(pt.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${l(fn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${l(at,1)}" y1="${l(pt.y,1)}"
                x2="${l(pt.endX,1)}" y2="${l(pt.y,1)}"
                stroke="${pt.color}"
                stroke-width="${fn}"
                stroke-linecap="round" />
              ${pt.endsInside?f`<circle
                      cx="${l(pt.endX,1)}"
                      cy="${l(pt.y,1)}"
                      r="${l(fn+.8,1)}"
                      fill="${pt.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:f``}
            </g>`:f``}

      <g class="now-marker">
        <line
          x1="${l(at,1)}" y1="${l(z,1)}"
          x2="${l(at,1)}" y2="${l(U,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${b(l(H*.012,2),1,1.8)}"
          opacity="0.85" />
        ${u?f`<g class="now-sun ${Ls}" filter="${Rs}">
                <title>${a.t("chartSunNow",{altitude:ct(R,1,a.locale)})}</title>
                <circle
                  cx="${l(at,1)}"
                  cy="${l(Pi,1)}"
                  r="${It}"
                  fill="${Ns}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Li}"
                />
              </g>`:f``}
        ${vt&&ye!==null&&d?f`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:ct(vt.altitude,1,a.locale)})}${vt.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${ye===at?f``:f`<line
                        x1="${l(at,1)}"
                        y1="${l(vt.y,1)}"
                        x2="${l(ye,1)}"
                        y2="${l(vt.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${l(ye,1)}"
                  cy="${l(vt.y,1)}"
                  r="${l(Ct+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Li}" />
                <g
                  transform="translate(${l(ye-Ct,1)} ${l(vt.y-Ct,1)})"
                  opacity="${vt.clamped?.6:1}"
                >
                  ${de({size:l(Ct*2,1),illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${v}-moon-now`})}
                </g>
              </g>`:f``}
      </g>

      ${Ii?f`<g class="zenith-chip">
              <rect
                x="${l(Fi-Fe/2,1)}"
                y="${l(Ui,1)}"
                width="${l(Fe,1)}"
                height="${l(Ge,1)}"
                rx="${l(Ge/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${l(Fi,1)}"
                y="${l(Ui+Ge/2+Oe*.36,1)}"
                text-anchor="middle"
                font-size="${Oe}"
                fill="var(--smc-label-color, #ffffff)"
              >${Oi}</text>
            </g>`:f``}

      ${gt?f`<g class="countdown-label">
              <title>${_.title}</title>
              <rect
                x="${l(gt.x,1)}"
                y="${l(gt.y,1)}"
                width="${l(gt.width,1)}"
                height="${l(gt.height,1)}"
                rx="${l(gt.height/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.9" />
              <text
                x="${l(gt.x+gt.width/2,1)}"
                y="${l(gt.y+gt.height/2+gt.fontSize*.36,1)}"
                text-anchor="middle"
                font-size="${gt.fontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${_.label}</text>
            </g>`:f``}

      ${q?f`<line
              x1="${l(x,1)}" y1="${l(U+.5,1)}"
              x2="${l(x+S,1)}" y2="${l(U+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:f``}

      ${Bt.length?f`<g class="event-labels" font-size="${ie}">
              ${Bt.map(m=>{let N=q?U+2:z;return f`<g>
                  <rect
                    x="${l(m.x-m.width/2,1)}"
                    y="${l(N,1)}"
                    width="${l(m.width,1)}"
                    height="${l(Ie,1)}"
                    rx="${l(Ie/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${m.secondary?.6:.88}" />
                  <text
                    x="${l(m.x,1)}"
                    y="${l(N+Ie/2+ie*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${m.secondary?.75:1}"
                  >${m.text}</text>
                </g>`})}
            </g>`:f``}
    </svg>
  `}function si(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Rr(i,t,e){let n=[];for(let o=0;o<t;o++){let s=Math.sqrt(si(i*7.13+o*1.37))*e*.96,r=si(i*3.71+o*2.11)*360,a=Rt({x:0,y:0},s,r),u=si(i*5.19+o*4.53);n.push({x:a.x,y:a.y,r:.35+u*.75,opacity:.16+u*.34})}return n}function ri(i,t){return b((90-i)/90*t,0,t)}function ai(i){let{width:t,height:e,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:u,palette:c,format:d,animations:h,uid:p,showCardinals:g=!0,seed:y=0}=i,T=Math.max(80,t),w=Math.max(80,e),P=6,v={x:T/2,y:w/2},$=Math.max(10,Math.min(T,w)/2-P),R=`${p}-dome`,_=`${p}-dome-clip`,k=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],C=b(l($*.17,1),7,11),H=n?n.altitude>0:!1,A=b(l($*.11,1),4,11),I=n?Rt(v,ri(n.altitude,$),n.azimuth):null,X=a&&n&&I,q=o?o.altitude>0:!1,ot=b(l($*.24,1),10,22),x=o?Rt(v,ri(o.altitude,$),o.azimuth):null,S=u&&o&&x&&r,z=g&&$>=42,W=b(l($*.14,1),6.5,9),U=[{altitude:30,radius:$*(60/90)},{altitude:60,radius:$*(30/90)}],J=(n?.altitude??-90)<-6?Rr(Math.max(1,Math.round(y)),46,$):[],$t=s.filter(G=>G.altitude>=-8).map(G=>Rt(v,ri(G.altitude,$),G.azimuth));return f`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(T,1)} ${l(w,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${R}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${c.skyTop}" />
          <stop offset="100%" stop-color="${c.skyBottom}" />
        </radialGradient>
        <clipPath id="${_}">
          <circle cx="${l(v.x,1)}" cy="${l(v.y,1)}" r="${l($,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${l(v.x,1)}" cy="${l(v.y,1)}" r="${l($,1)}"
        fill="url(#${R})" opacity="0.55" />

      <g clip-path="url(#${_})">
        ${J.length?f`<g class="stars">
                ${J.map(G=>f`<circle
                      cx="${l(v.x+G.x,1)}"
                      cy="${l(v.y+G.y,1)}"
                      r="${l(G.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${l(G.opacity,2)}" />`)}
              </g>`:f``}
        ${U.map(G=>f`<circle
              cx="${l(v.x,1)}" cy="${l(v.y,1)}" r="${l(G.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${l(v.x-$,1)}" y1="${l(v.y,1)}"
          x2="${l(v.x+$,1)}" y2="${l(v.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${l(v.x,1)}" y1="${l(v.y-$,1)}"
          x2="${l(v.x,1)}" y2="${l(v.y+$,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${$t.length>1?f`<path
                d="M${$t.map(G=>`${l(G.x,1)} ${l(G.y,1)}`).join(" L")}"
                fill="none"
                stroke="${c.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:f``}
      </g>

      <circle
        cx="${l(v.x,1)}" cy="${l(v.y,1)}" r="${l($,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${z?f`<g
              font-size="${W}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${U.map(G=>{let st=Rt(v,G.radius,45);return f`<text
                  x="${l(st.x,1)}"
                  y="${l(st.y+W*.35,1)}"
                >${G.altitude}°</text>`})}
            </g>`:f``}

      ${g?f`<g font-size="${C}" fill="var(--smc-muted-color)" opacity="0.7">
              ${k.map(G=>{let st=Rt(v,$*.87,G.azimuth);return f`<text
                  x="${l(st.x,1)}"
                  y="${l(st.y+C*.35,1)}"
                  text-anchor="middle"
                >${G.key}</text>`})}
            </g>`:f``}

      ${X&&H&&I?f`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${l(I.x,1)}" cy="${l(I.y,1)}" r="${A}"
                fill="${c.lineDay}" opacity="0.28" />
              <circle
                cx="${l(I.x,1)}" cy="${l(I.y,1)}" r="${l(A*.55,1)}"
                fill="${c.lineDay}" />
            </g>`:f``}
      ${a&&n&&!H?Fn(v,$,n.azimuth,c.lineNight):f``}

      ${S&&q&&x&&r?f`<g transform="translate(${l(x.x-ot/2,1)} ${l(x.y-ot/2,1)})">
              ${de({size:ot,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:ot>=16,uid:`${p}-moon`})}
            </g>`:f``}
      ${u&&o&&!q?Fn(v,$,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):f``}
    </svg>
  `}function li(i,t,e){i.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}function Pr(i){if(typeof i!="string")return null;let[t,e]=i.split(".",2);return!t||!e?null:[t,e]}function Xo(i,t,e,n,o){typeof i?.callService=="function"&&i.callService(t,e,n,o)}function Jo(i,t,e,n,o){if(!n){o?.();return}switch(n.action){case"none":return;case"open-popup":o?.();return;case"more-info":li(i,"hass-more-info",{entityId:n.entity??e.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),li(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":Xo(t,"homeassistant","toggle",{entity_id:n.entity??e.entity});return;case"call-service":case"perform-action":{let s=Pr(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,a=typeof n.target=="object"&&n.target!==null?n.target:void 0;Xo(t,s[0],s[1],r,a);return}case"fire-dom-event":li(window,"ll-custom",n);return;default:return}}function ui(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function Qo(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${t}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${t}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${t}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function ci(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function dn(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function hn(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var ts="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function di(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ts}
        fill="${t}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function es(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ts}
        fill="${t}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function ns(i=20,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function is(i=18,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var os=new Map;function ss(i){let t=os.get(i);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),os.set(i,t)),t}function zr(i){try{return ss(i)}catch{return ss("UTC")}}function hi(i,t){let e=zr(t).formatToParts(i),n={};for(let o of e)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function rs(i,t){let e=hi(i,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function Ir(i,t,e,n=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,t-1,e,n,o,s),u=1440*60*1e3,c=[rs(new Date(a-u),r),rs(new Date(a+u),r)],d=[...new Set(c)].map(p=>a-p).filter(p=>{let g=hi(new Date(p),r);return g.year===i&&g.month===t&&g.day===e&&g.hour===n&&g.minute===o&&g.second===s}).sort((p,g)=>p-g);if(d.length>0)return new Date(d[0]);let h=Math.min(...c);return new Date(a-h)}function me(i,t){let e=hi(i,t);return Ir(e.year,e.month,e.day,0,0,0,t)}function as(i,t){let e=me(i,t);return me(new Date(e.getTime()+2160*60*1e3),t)}function bt(i,t){return Math.round(me(i,t).getTime()/(1440*60*1e3))}function ls(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function et(i,t){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:t}function pe(i,t,e){return typeof i=="string"&&t.includes(i)?i:e}function mi(i,t,e,n,o,s=0){let r=ft(i);if(r===null)return t;let a=b(r,e[0],e[1]);return Math.abs(a-r)>1e-9&&o.push(Y(n,"invalidRange",{value:String(i),min:String(e[0]),max:String(e[1])})),s===0?Math.round(a):l(a,s)}function pi(i,t,e){if(i==null)return null;let n=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=n?.action;if(typeof o!="string"||o.trim()==="")return e.push(Y(t,"invalidAction",{value:String(i)})),null;let s=o.trim();return No.includes(s)?{...n,action:s}:(e.push(Y(t,"invalidAction",{value:s})),null)}function ds(i,t="en"){let e=[],n=[],o=i??{},s=et(o.minimal_mode,D.minimal_mode),r=he(s),a=D.card_height;if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(b(o.card_height,r[0],r[1])),a!==o.card_height&&n.push(Y(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")n.push(Y(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let g=ft(o.card_height);g===null?e.push(Y(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(b(g,r[0],r[1]))}let u=null,c=null,d=ft(o.latitude),h=ft(o.longitude);return d!==null&&(d>=-90&&d<=90?u=d:n.push(Y(t,"invalidNumber",{value:String(o.latitude)}))),h!==null&&(h>=-180&&h<=180?c=h:n.push(Y(t,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():D.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():D.moon_entity,card_height:a,show_sun:et(o.show_sun,D.show_sun),show_moon:et(o.show_moon,D.show_moon),show_twilight:et(o.show_twilight,D.show_twilight),show_astronomical_details:et(o.show_astronomical_details,D.show_astronomical_details),compact_mode:et(o.compact_mode,D.compact_mode),minimal_mode:s,minimal_show_times:et(o.minimal_show_times,D.minimal_show_times),minimal_show_zenith:et(o.minimal_show_zenith,D.minimal_show_zenith),sun_marker_size:mi(o.sun_marker_size,D.sun_marker_size,He,t,n,1),popup_width:mi(o.popup_width,D.popup_width,Gt,t,n),popup_height:mi(o.popup_height,D.popup_height,Ut,t,n),show_remaining_time:et(o.show_remaining_time,D.show_remaining_time),remaining_time_focus:pe(o.remaining_time_focus,Wt.remainingTimeFocus,D.remaining_time_focus),show_golden_hour:et(o.show_golden_hour,D.show_golden_hour),show_countdown_tile:et(o.show_countdown_tile,D.show_countdown_tile),tap_action:pi(o.tap_action,t,n),hold_action:pi(o.hold_action,t,n),double_tap_action:pi(o.double_tap_action,t,n),card_style:pe(o.card_style,Wt.cardStyle,D.card_style),theme_mode:pe(o.theme_mode,Wt.themeMode,D.theme_mode),animations:et(o.animations,D.animations),time_format:pe(o.time_format,Wt.timeFormat,D.time_format),language:pe(o.language,Wt.language,D.language),show_header:et(o.show_header,D.show_header),show_day_chart:et(o.show_day_chart,D.show_day_chart),show_sky_view:et(o.show_sky_view,D.show_sky_view),show_events:et(o.show_events,D.show_events),show_moon_times:et(o.show_moon_times,D.show_moon_times),show_footer:et(o.show_footer,D.show_footer),twilight_level:pe(o.twilight_level,Wt.twilightLevel,D.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:u,longitude:c},errors:e,warnings:n}}function hs(i,t){let e=he(i.minimal_mode);return i.card_height==="auto"?b(Fo(t),e[0],e[1]):b(i.card_height,e[0],e[1])}function Or(i,t,e,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},u={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:t,location:o,locationName:"",extras:Fr(t,ms(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:u,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function ms(i){return i==="de"?"de-DE":"en-GB"}function Fr(i,t){return{timeZoneLongName:ei(i,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function Gr(i,t){let e=Pn(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function Ur(i,t,e){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=Po[n-1];return Y(e,"folkName",{name:Y(e,o)})}function us(i,t,e,n){return i?{time:i,azimuth:en(i,t,"moon"),dayOffset:bt(i,n)-bt(e,n)}:null}function Wr(i){if(typeof i!="string"||i.trim()==="")return null;let t=new Date(i);return Number.isNaN(t.getTime())?null:t}var cs=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],Kr={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function Br(i,t,e){let n=ls(t?.config?.time_zone),o=[],s=On(t?.config?.latitude)?t.config.latitude:null,r=On(t?.config?.longitude)?t.config.longitude:null,a=i.latitude??s,u=i.longitude??r,c=Xt(i.language,t?.locale?.language??t?.language);if(a===null||u===null)return Or(e,n,["missing-location",...o],c);let d={latitude:a,longitude:u},h=i.location_name.trim()!==""?i.location_name.trim():t?.config?.location_name??"",p=me(e,n),g=as(e,n),y=Ln(d,p,g),T=Qe(e,d),w=T.altitude,P=Ne(e.getTime()+6e4,d),v=Ft(e,d),$=tn(e),R=_o(e,d),_=t?.states?.[i.entity];_||o.push("missing-sun-entity");let k={...y.events},C={};if(_?.attributes)for(let[O,rt]of cs){let xt=Wr(_.attributes[rt]),yt=y.events[O];if(xt&&xt>=p&&xt<g&&(!yt||Math.abs(xt.getTime()-yt.getTime())<=Ro)){k[O]=xt,C[O]="ha";continue}C[O]=yt?"computed":"none"}else for(let[O]of cs)C[O]=y.events[O]?"computed":"none";for(let O of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])C[O]=y.events[O]?"computed":"none";let H=_?.attributes?ft(_.attributes.elevation):null,A=_?.attributes?ft(_.attributes.azimuth):null,I=i.moon_entity?t?.states?.[i.moon_entity]:void 0,X=I&&typeof I.state=="string"?Kr[I.state]??null:null,q=i.show_moon?vo(d,p,g,R):null,ot=[],x=900*1e3;for(let O=p.getTime();O<=g.getTime();O+=x){let rt=Qe(O,d);ot.push({altitude:rt.altitude,azimuth:rt.azimuth})}let S=null;k.sunrise&&k.sunset&&(S=(k.sunset.getTime()-k.sunrise.getTime())/6e4);let z=me(new Date(p.getTime()-720*60*1e3),n),W=Ln(d,z,p),U=W.events.sunrise&&W.events.sunset?(W.events.sunset.getTime()-W.events.sunrise.getTime())/6e4:null,dt=S!==null&&U!==null?S-U:null,J=$o(e),$t=i.twilight_level==="nautical"?Ht:i.twilight_level==="astronomical"?Lt:At,G=O=>O?{time:O.time,rising:O.rising,dayOffset:bt(O.time,n)-bt(e,n)}:null,st=i.show_sun?G(Rn(d,e,Ee)):null,te=i.show_twilight?G(Rn(d,e,$t)):null,nt=e.getTime(),B=[R.nextRise,R.nextSet].filter(O=>O instanceof Date&&O.getTime()>nt).sort((O,rt)=>O.getTime()-rt.getTime())[0],mt=i.show_moon&&B?{time:B,rising:B.getTime()===R.nextRise?.getTime(),dayOffset:bt(B,n)-bt(e,n)}:null,ut={timeZoneLongName:ei(n,ms(c),e),previousDaylightMinutes:U,daylightDeltaMinutes:dt,sunBelowHorizon:w<0?Math.abs(w):null,sunriseAzimuth:k.sunrise?en(k.sunrise,d,"sun"):null,sunsetAzimuth:k.sunset?en(k.sunset,d,"sun"):null,nextFullMoon:J,nextFullMoonDays:J?Math.round((J.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:J?Gr(J.time,n):!1,moonFolkName:Ur(J?.time??null,n,c),moonDistance:xo(e,d,14),moonRise:us(R.nextRise??R.previousRise,d,e,n),moonSet:us(R.nextSet??R.previousSet,d,e,n),nextSunEvent:st,nextTwilightEvent:te,nextMoonEvent:mt,goldenHour:i.show_golden_hour?yo(d,e,De,Je):null};return y.polar==="polar-day"&&o.push("polar-day"),y.polar==="polar-night"&&o.push("polar-night"),k.sunrise||o.push("no-sunrise-today"),k.sunset||o.push("no-sunset-today"),!k.civilDawn&&!k.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:y,sun:{altitude:w,azimuth:T.azimuth,phase:wo(w),rising:P>w,haElevation:H,haAzimuth:A},moon:{position:v,phase:$,events:R,haPhaseName:X},sunTrack:ot,moonPath:q,events:k,eventSources:C,extras:ut,daylightMinutes:S,issues:o,fatal:!1}}var Le=new Map;function Vr(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight),String(i.show_golden_hour)].join("|")}function jr(i,t){if(!t)return"-";let e=t.states?.[i.entity],n=i.moon_entity?t.states?.[i.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",t.config?.location_name??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function ps(i,t,e){let n=Math.floor(e.getTime()/6e4),o=[Vr(i),jr(i,t),n,e.getTimezoneOffset()].join("#"),s=Le.get(o);if(s)return s;let r=Br(i,t,e);if(Le.size>24){let a=Le.keys().next().value;a!==void 0&&Le.delete(a)}return Le.set(o,r),r}var gs=Ke`
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

  /* Die nächste anstehende Zeit des Tages: Rahmen in der Akzentfarbe. */
  .event-tile.next {
    border-color: color-mix(in srgb, var(--smc-event-color, #888) 70%, transparent);
    box-shadow:
      var(--smc-surface-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--smc-event-color, #888) 45%, transparent);
  }

  /* Restzeit-Kachel: Akzent nach Körper. */
  .event-tile.countdown {
    --smc-event-color: var(--smc-sunset);
    background: color-mix(in srgb, var(--smc-event-color) 12%, var(--smc-surface));
    border-color: color-mix(in srgb, var(--smc-event-color) 45%, transparent);
  }

  .event-tile.countdown.rising {
    --smc-event-color: var(--smc-sunrise);
  }

  .event-tile.countdown[data-body='twilight'] {
    --smc-event-color: var(--smc-dusk);
  }

  .event-tile.countdown[data-body='moon'] {
    --smc-event-color: var(--smc-moon-lit, #c9d3ea);
  }

  .event-tile.countdown[data-body='golden'] {
    --smc-event-color: var(--smc-golden-hour, #f2b544);
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
`,fs=Ke`
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
`;function gi(i,t){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var Qt=class extends Tt{setConfig(t){this._config={...t}}get _language(){return Xt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return Y(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,o]of Object.entries(t)){let s=D[n];o===s&&n in D&&delete e[n]}this._config=e,gi(this,e)}render(){if(!this._config)return E``;let t=this._config.card_height,e=t==="auto"||t===null,n=this._config.minimal_mode===!0,o=he(n),s=typeof t=="number"?t:D.card_height,r=this._config.latitude===void 0||this._config.latitude===null;return E`
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
                @change=${a=>{let u=ft(a.target.value);u!==null&&this._update({card_height:Math.round(b(u,o[0],o[1]))})}}
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

          ${this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",D.sun_marker_size),min:He[0],max:He[1],step:.5,digits:1,set:a=>this._update({sun_marker_size:a})})}

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
                ${this._config?.show_golden_hour?E`<option value="golden_hour">
                      ${this._t("editorRemainingTimeFocusGolden")}
                    </option>`:M}
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
                ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",D.popup_width),min:Gt[0],max:Gt[1],step:20,set:a=>this._update({popup_width:Math.round(a)})})}
                ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",D.popup_height),min:Ut[0],max:Ut[1],step:20,set:a=>this._update({popup_height:Math.round(a)})})}`:M}
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
          ${this._switch("show_countdown_tile","editorCountdownTile")}
          ${this._switch("show_golden_hour","editorGoldenHour")}
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
                  @change=${a=>{if(a.target.checked){let c={...this._config};delete c.latitude,delete c.longitude,this._config=c,gi(this,c)}else this._update({latitude:l(this.hass?.config?.latitude??0,4),longitude:l(this.hass?.config?.longitude??0,4)})}}
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
                @change=${a=>{let u=ft(a.target.value);this._update({latitude:u===null?void 0:b(u,-90,90)})}}
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
                @change=${a=>{let u=ft(a.target.value);this._update({longitude:u===null?void 0:b(u,-180,180)})}}
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
              ${n?jn:120} px)
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
            @change=${h=>{let p=ft(h.target.value);p!==null&&c(b(p,s,r))}}
          />
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height,e=he(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<e[0]||t>e[1])?E`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:e[0],max:e[1]})}
      </span>`:M}_switch(t,e){let n=D[t];return E`
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
    `}_reset(){let t=an();this._config=t,gi(this,t)}};Qt.styles=fs,St([re({attribute:!1})],Qt.prototype,"hass",2),St([ae()],Qt.prototype,"_config",2),Qt=St([Ze(Co)],Qt);var Kt=12,bs=17,Pt=class extends Tt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=e=>{if(!this._popup)return;if(e.key==="Escape"){e.stopPropagation(),this._closeDetails();return}if(e.key!=="Tab")return;let n=this._popupFocusable(),o=n[0],s=n[n.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?n.indexOf(r):-1;if(a===-1){e.preventDefault(),(e.shiftKey?s:o).focus();return}e.shiftKey&&a===0?(e.preventDefault(),s.focus()):!e.shiftKey&&a===n.length-1&&(e.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let e=this._config?.hold_action;e&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(e,!1)},Ho))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=e=>{if(this._held){this._held=!1;return}let n=e.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},Lo)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(e){let n=this._hass;this._hass=e,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=e)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return an()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=Xt(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=ds(e,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(e){super.willUpdate(e);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),n=b(this._config.popup_width,Gt[0],Gt[1]),o=b(this._config.popup_height,Ut[0],Ut[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",Y(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",Y(e,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let u=this._config,c={...u,latitude:u.latitude??void 0,longitude:u.longitude??void 0,location_name:u.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},d=document.createElement(Vn);d.hass=this.hass;try{d.setConfig(c)}catch{}this._popupCard=d,r.append(d,a),s.append(r),s.addEventListener("click",h=>{h.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let e=document.activeElement;if(!e)return null;let n=e.shadowRoot?.activeElement;return n instanceof HTMLElement?n:e}_popupFocusable(){if(!this._popup)return[];let e=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&e.push(n);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||e.push(s);return e}_handleMinimalKey(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();let n=e.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(e){this._runAction(this._config?.tap_action??null,!0,e)}_runAction(e,n,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Jo(r,this.hass,s,e,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(e=>{let n=e.some(o=>o.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,To()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let o=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?hs(this._config,this._width||400):D.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return Xt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return E``;let n=this._width||400,o=this._resolvedHeight(),s=Oo(o,n,e),r=ps(e,this.hass,new Date),a=this._language(),u=this._isDark(),c=u?Zn:qn;if(r.fatal)return E`
        <ha-card
          class=${Et({"smc-dark":u,"smc-light":!u,"smc-minimal":s.minimal})}
          style=${j({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${is(18)}</span>
              <span>${Y(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=jo(a,this._locale(),r.timeZone,Wo(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?E`
        <ha-card
          class=${Et({"smc-dark":u,"smc-light":!u,"smc-minimal":!0})}
          style=${j({height:`${o}px`})}
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
            class=${Et({root:!0,minimal:!0})}
            style=${j({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":c.day,"--smc-palette-civil":c.civil,"--smc-palette-night":c.night})}
          >
            ${this._renderMinimalTimes(r,d,s,e)}
            <div
              class="chart-wrap minimal"
              style=${j({height:`${s.chartHeight}px`})}
            >
              ${oi({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:c,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:!1,minimal:!0,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:E`
      <ha-card
        class=${Et({"smc-dark":u,"smc-light":!u})}
        style=${j({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${Et({root:!0,compact:s.compact})}
          style=${j({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":c.day,"--smc-palette-civil":c.civil,"--smc-palette-night":c.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,c,s):M}

          <div
            class=${Et({body:!0,columns:s.skyViewSide})}
            style=${j({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?E`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${j({height:`${s.chartHeight}px`})}
                  >
                    ${oi({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:c,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,d,s),showGoldenHour:e.show_golden_hour,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):M}
                </div>`:M}
            ${s.skyViewSide?E`<div
                  class="sky-column"
                  style=${j({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${ai({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:c,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:bt(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth,this._countdownRows(s))}
                </div>`:M}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):M}
          ${s.showDetails?this._renderDetails(r,d,e,s,a,u,n):M}
          ${s.showFooter?this._renderFooter(r,d,e,s):M}
        </div>
      </ha-card>
    `}_renderHeader(e,n,o,s){let r=e.locationName||n.t("title"),a=e.extras,u=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),c=10.5,d=(_,k=!1)=>_.length*c*.58+20+(k?12:0),p=Math.max(0,u-10-108),g=n.t(this._phaseKey(e)),y=d(g,!0),T=this._primaryCountdown(e,n),w=M,P=!0;if(T){let _=d(T.compact)+bs,k=d(T.duration)+bs,C=null;_+y<=p?(C=T.compact,p-=_):k+y<=p?(C=T.duration,p-=k):k<=p&&(C=T.duration,p-=k,P=!1),C!==null&&(w=E`<span
          class="meta-chip countdown-chip"
          data-body=${T.body}
          role="img"
          aria-label=${T.long}
          title=${T.title}
          >${T.icon}<span>${C}</span></span
        >`)}P&&(p-=y);let v=M;if(e.daylightMinutes!==null){let _=un(e.daylightMinutes,n.t),k=a.daylightDeltaMinutes===null?"":` ${Bo(a.daylightDeltaMinutes,n.t)}`,C=`${n.t("dayLength")} ${_}${k}`,H=d(C);H<=p&&(p-=H,v=E`<span class="meta-chip" title=${n.t("dayLength")}
          >${C}</span
        >`)}let $=M,R=d(a.timeZoneLongName);return R<=p&&(p-=R,$=E`<span class="meta-chip">${a.timeZoneLongName}</span>`),E`
      <div class="header" style=${j({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${Ko(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${w}${v}${$}
          ${P?E`<span class="phase-chip" title=${g}>
                <span
                  class="phase-dot"
                  style=${j({background:this._phaseColor(e,o)})}
                ></span>
                ${g}
              </span>`:M}
        </div>
      </div>
    `}_countdowns(e,n){let o=this._countdownCache;if(o&&o.model===e&&o.context===n)return[...o.entries];let s=this._computeCountdowns(e,n);return this._countdownCache={model:e,context:n,entries:s},[...s]}_computeCountdowns(e,n){let o=this._config;if(!o?.show_remaining_time)return[];let s=e.now.getTime(),r=[],a=(g,y,T,w,P,v=!1)=>{if(!g)return;let $=(g.time.getTime()-s)/6e4;if(!($>=0))return;let R=$<1,_=R?n.t("countdownNow"):un($,n.t),k=C=>R?n.t("nowFormat",{event:n.t(C)}):n.t("untilFormat",{event:n.t(C),duration:_});r.push({minutes:$,compact:k(T??y),duration:_,time:g.time,rising:g.rising,trailing:v,name:n.t(y),long:k(y),title:`${n.t(y)} ${tt(g.time,n)}${g.dayOffset>0?` (${cn(g.dayOffset,n.t)})`:""}`,icon:w,body:P})},u=e.extras.nextSunEvent;a(u,u?.rising?"sunrise":"sunset",u?.rising?"sunriseShort":"sunsetShort",u?.rising?ui(Kt):ci(Kt),"sun");let c=e.extras.nextTwilightEvent;if(c){let g=this._twilightKeys();a(c,c.rising?g.dawn:g.dusk,c.rising?g.dawnShort:g.duskShort,c.rising?dn(Kt):hn(Kt),"twilight")}let d=e.extras.nextMoonEvent;a(d,d?.rising?"moonrise":"moonset",d?.rising?"moonriseShort":"moonsetShort",d?.rising?di(Kt):es(Kt),"moon");let h=e.extras.goldenHour;if(h){let g=h.active?h.end:h.start;g&&a({time:g,rising:!h.active,dayOffset:this._dayOffset(g,e)},h.active?"goldenHourEnd":"goldenHour",h.active?"goldenHourEndShort":"goldenHourShort",Qo(Kt),"golden")}let p=e.extras.nextFullMoon;return o.show_moon&&p&&a({time:p.time,rising:!0,dayOffset:this._dayOffset(p.time,e)},"fullMoon",null,di(Kt),"moon",!0),r.sort((g,y)=>+!!g.trailing-+!!y.trailing||g.minutes-y.minutes)}_orderedCountdowns(e,n){let o=this._countdowns(e,n),s=this._config?.remaining_time_focus;if(s==="next")return o;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let a of r){let u=o.findIndex(c=>c.body===a&&!c.trailing);u>0&&o.unshift(...o.splice(u,1))}return o}_dayOffset(e,n){return bt(e,n.timeZone)-bt(n.now,n.timeZone)}_primaryCountdown(e,n){return this._orderedCountdowns(e,n).find(o=>!o.trailing)}_chartCountdown(e,n,o){let s=this._primaryCountdown(e,n);return s?{time:s.time,rising:s.rising,body:s.body,label:o.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let e=this._config?.twilight_level;return e==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:e==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(e,n){return E`
      <div class="legend" aria-hidden="true" style=${j({height:`${n}px`})}>
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
    `}_renderSkyReadout(e,n,o,s){let r=this._config,a=[],u=(c,d,h)=>{let p=ct(d,1,n.locale),g=`${Math.round(h)}\xB0 ${Jt(h,n.language)}`;return E`<span
        title=${`${n.t("elevation")} ${p} \xB7 ${n.t("azimuth")} ${g}`}
        >${n.t("positionReadout",{body:c,altitude:p,degrees:String(Math.round(h)),direction:Jt(h,n.language)})}</span
      >`};r.show_sun&&a.push(u(n.t("sun"),e.sun.altitude,e.sun.azimuth)),r.show_moon&&a.push(u(n.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth));for(let c of this._orderedCountdowns(e,n).slice(0,s))a.push(E`<span title=${c.title}>${c.long}</span>`);return a.length===0||o<150?M:E`<div class="sky-readout">${a}</div>`}_countdownRows(e){let n=this._config,o=(n.show_sun?1:0)+(n.show_moon?1:0),s=e.chartHeight+e.legendHeight+(e.showLegend?Jn:0),r=o*Xn+Jn,a=s-r-Io;return Math.max(0,Math.min(3,Math.floor(a/Xn)))}_renderFooter(e,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),u=n.t(r),c=e.extras.timeZoneLongName,d=n.t("footerMethod"),h=`${u} \xB7 ${c} \xB7 ${d}`,p=9.5*.55,g=w=>w.length*p<=a,y=g(`${u} \xB7 ${c}`)?`${u} \xB7 ${c}`:u,T=g(`${y} \xB7 ${d}`);return E`
      <div
        class="footer"
        title=${h}
        style=${j({height:`${s.footerHeight}px`})}
      >
        <span class="part">${y}</span>
        ${T?E`<span class="part">${d}</span>`:M}
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,o,s=.7){for(let r of e)if(r&&r.length*o*s<=n)return r;return null}_renderCountdownTile(e,n,o,s,r,a,u){let d=e.body==="sun"&&!e.rising?n.t("tileDaylightLeft"):n.t("tileUntil",{event:e.name}),h=this._fitLabel([d,e.name],r,a),p=this._fitLabel([e.duration],r,u+2)??e.duration;return E`<div
      class=${Et({"event-tile":!0,countdown:!0,rising:e.rising,compact:o})}
      data-body=${e.body}
      style=${j({gridColumn:`span ${s}`})}
      title=${e.title}
      role="img"
      aria-label=${e.long}
    >
      <span class="event-head">
        <span class="event-icon">${e.icon}</span>
        <span class="event-time" style=${j({fontSize:`${u+2}px`})}
          >${p}</span
        >
        ${o&&h?E`<span class="event-label" style=${j({fontSize:`${a}px`})}
              >${h}</span
            >`:M}
      </span>
      ${!o&&h?E`<span class="event-label" style=${j({fontSize:`${a}px`})}
            >${h}</span
          >`:M}
    </div>`}_renderEvents(e,n,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),u=this._config,c=[];if(u.show_twilight&&c.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:dn(s?14:16),missingText:n.t("noEvent")}),c.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:ui(s?14:16),missingText:n.t("noSunrise")}),c.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:ci(s?14:16),missingText:n.t("noSunset")}),u.show_twilight&&c.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:hn(s?14:16),missingText:n.t("noEvent")}),u.twilight_level==="all"||u.show_astronomical_details){let A=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[I,X,q]of A)c.push({key:I,kind:q,label:n.t(I),shortLabel:n.t(I),time:X,icon:q==="dawn"?dn(s?13:15):hn(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=a<300?3:a<420?4:a<560?6:8,h=u.show_countdown_tile?this._primaryCountdown(e,n):void 0,p=h?2:0,g=Math.max(2,d-p),y=A=>A.secondary?2:A.kind==="sunrise"||A.kind==="sunset"?0:1,T=new Set([...c].map((A,I)=>({tile:A,index:I})).sort((A,I)=>y(A.tile)-y(I.tile)||A.index-I.index).slice(0,g).map(A=>A.tile)),w=c.filter(A=>T.has(A)),P=e.now.getTime(),v=w.filter(A=>A.time&&A.time.getTime()>P).sort((A,I)=>A.time.getTime()-I.time.getTime())[0],$=6,R=w.length+p,k=Math.max(40,a-2*r-$*(R-1))/R-10,C=s?k<120?8.5:9:k<92?8.5:9.5,H=k<74?11:k<96?12:12.5;return E`
      <div
        class="events"
        style=${j({gap:`${$}px`,height:`${o.eventsHeight}px`})}
      >
        ${h?this._renderCountdownTile(h,n,s,p,k*p+(p-1)*($+10),C,H):M}
        ${w.map(A=>{let I=this._fitLabel([A.label,A.shortLabel],k,C),X=A.time?tt(A.time,n):A.missingText,q=this._fitLabel([X,"\u2014"],k,H)??"\u2014";return E`
            <div
              class=${Et({"event-tile":!0,[A.kind]:!0,secondary:!!A.secondary,next:A===v,compact:s})}
              title=${`${A.label}: ${X}`}
            >
              <span class="event-head">
                <span class="event-icon">${A.icon}</span>
                <span
                  class=${Et({"event-time":!0,missing:!A.time})}
                  style=${j({fontSize:`${H}px`})}
                >
                  ${q}
                </span>
                ${s&&I?E`<span
                      class="event-label"
                      style=${j({fontSize:`${C}px`})}
                      >${I}</span
                    >`:M}
              </span>
              ${!s&&I?E`<span
                    class="event-label"
                    style=${j({fontSize:`${C}px`})}
                    >${I}</span
                  >`:M}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,o,s,r,a,u){let c=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&u>=430,p=(o.show_sun?1:0)+(o.show_moon?1:0)+(h?1:0),y=Math.max(60,u-2*s.padding-8*Math.max(0,p-1))/Math.max(1,p)-20-26-9,T=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],y,10.5),w=ct(e.sun.altitude,1,n.locale),P=`${Math.round(e.sun.azimuth)}\xB0 ${Jt(e.sun.azimuth,r)}`,v=c.sunBelowHorizon!==null?`${ct(c.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,$=this._fitLabel([v?`${v} \xB7 ${P}`:`${n.t("azimuth")} ${P}`,v??P,P],y,9.5),R=c.sunriseAzimuth!==null?`${Math.round(c.sunriseAzimuth)}\xB0 ${Jt(c.sunriseAzimuth,r)}`:null,_=c.sunsetAzimuth!==null?`${Math.round(c.sunsetAzimuth)}\xB0 ${Jt(c.sunsetAzimuth,r)}`:null,k=o.show_astronomical_details&&R&&_?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:R,set:_}),`${Math.round(c.sunriseAzimuth)}\xB0 / ${Math.round(c.sunsetAzimuth)}\xB0`],y,9.5):null,C=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?tt(e.events.solarNoon,n):"\u2014"} \xB7 ${ct(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?tt(e.events.solarNoon,n):null],y,9.5):null,H=this._fitLabel([n.t(d),n.t("moon")],y,10.5),A=Vo(e.moon.phase.illumination,n.locale),I=this._fitLabel([`${A} ${n.t("illumination")}`,A],y,13),X=e.moon.position.apparentAltitude,q=ct(X,1,n.locale),ot=`${Math.round(e.moon.position.azimuth)}\xB0 ${Jt(e.moon.position.azimuth,r)}`,x=`${n.t("elevation")} ${q} \xB7 ${n.t("azimuth")} ${ot}`,S=X>=0?[`${n.t("elevation")} ${q} \xB7 ${ot}`,`${q} \xB7 ${ot}`,q]:[`${ct(Math.abs(X),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${ot}`,`${ct(Math.abs(X),1,n.locale)} ${n.t("belowHorizon")}`,q],z=null,W="";if(c.moonDistance){let{current:B,min:mt,max:ut}=c.moonDistance,O=Math.max(1,ut-mt),rt=B<=mt+O*.2,xt=B>=mt+O*.8,yt=ln(B,n.locale),ge=rt?n.t("nearPerigee"):xt?n.t("nearApogee"):"";W=`${n.t("moonDistance")}: ${yt} \xB7 ${n.t("distanceRange",{min:ln(mt,n.locale),max:ln(ut,n.locale)})}`,z=this._fitLabel(ge?[`${yt} \xB7 ${ge}`,yt]:[yt],y,9.5)}let U=this._fitLabel(z?S.flatMap(B=>[`${B} \xB7 ${z}`,B]):S,y,9.5),dt=z!==null&&(U?.includes(z)??!1),J=null,$t="";if(o.show_astronomical_details&&c.nextFullMoon){let B=c.nextFullMoonDays??0,mt=B<=0?n.t("dayToday"):n.t("inDays",{days:String(B)}),ut=`${n.t("nextFullMoon")} ${mt}`,O=c.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",rt=`${ut}${O}${c.moonFolkName?` \xB7 ${c.moonFolkName}`:""}`;$t=c.blueMoon?n.t("blueMoonHint"):c.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),J=this._fitLabel([rt,`${ut}${O}`,ut],y,9.5)}let G=o.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],y,9.5):null,st=[];U&&st.push({text:U,title:x,position:!0}),G&&st.push({text:G,title:null}),J&&st.push({text:J,title:$t}),z&&!dt&&st.push({text:z,title:W});let te=st.slice(0,s.detailsHeight>=Qn?3:2),nt=dt||te.some(B=>B.text===z),ht=z&&!nt?W||z:null;return E`
      <div
        class="details"
        style=${j({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?E`
              <div class="detail-tile sun">
                <span class="detail-icon">${ns(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${T?E`<span class="detail-title">${T}</span>`:M}
                  <span class="detail-value">${w}</span>
                  ${$?E`<span class="detail-sub">${$}</span>`:M}
                  ${C?E`<span class="detail-sub">${C}</span>`:M}
                  ${k?E`<span class="detail-sub">${k}</span>`:M}
                </span>
              </div>
            `:M}
        ${o.show_moon?E`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${de({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${H?E`<span class="detail-title">${H}</span>`:M}
                  ${I?E`<span class="detail-value">${I}</span>`:M}
                  ${te.map(B=>{let mt=[B.title,B.position?ht:null].filter(Boolean).join(" \xB7 ")||null;return E`<span class="detail-sub" title=${mt??M}
                      >${B.text}</span
                    >`})}
                </span>
              </div>
            `:M}
        ${h?E`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${ai({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?Zn:qn,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:bt(e.now,e.timeZone)})}
                </span>
              </div>
            `:M}
      </div>
    `}_moonTimesText(e,n,o){let s=e.extras.moonRise,r=e.extras.moonSet,a=s&&s.dayOffset!==0?` ${cn(s.dayOffset,n.t)}`:"",u=s?`\u2191 ${tt(s.time,n)}${a}`:"\u2191 \u2014";if(o)return u;let c=r&&r.dayOffset!==0?` ${cn(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${tt(r.time,n)}${c}`:"\u2193 \u2014";return`${u} \xB7 ${d}`}_renderMinimalTimes(e,n,o,s){if(o.minimalTimesHeight<=0)return M;let r=n.t,a=[];if(s.minimal_show_times&&e.events.sunrise){let c=tt(e.events.sunrise,n);a.push(E`<span class="minimal-time rise" title=${`${r("sunrise")} ${c}`}
          >↑ ${c}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let c=tt(e.events.solarNoon,n),d=o.chartWidth<250?c:`${r("zenith")} ${c}`;a.push(E`<span class="minimal-time zenith" title=${`${r("zenith")} ${c}`}
          >${d}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let c=tt(e.events.sunset,n);a.push(E`<span class="minimal-time set" title=${`${r("sunset")} ${c}`}
          >↓ ${c}</span
        >`)}if(a.length===0)return M;let u=b(l(o.minimalTimesHeight*.78,1),8,12);return E`<div
      class="minimal-times"
      style=${j({height:`${o.minimalTimesHeight}px`,fontSize:`${u}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(e,n){return`${this._minimalTitle(e,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(e,n){let o=[this._ariaLabel(e,n)];o.push(`${n.t("sun")} ${ct(e.sun.altitude,0,n.locale)}`);let s=this._primaryCountdown(e,n);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(e,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${n.t("sunrise")} ${tt(e.events.sunrise,n)}`),e.events.sunset&&o.push(`${n.t("sunset")} ${tt(e.events.sunset,n)}`),o.join(", ")}};Pt.styles=gs,St([re({attribute:!1})],Pt.prototype,"hass",1),St([ae()],Pt.prototype,"_config",2),St([ae()],Pt.prototype,"_width",2),St([ae()],Pt.prototype,"_tick",2),Pt=St([Ze(Vn)],Pt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${rn}`)||window.customCards.push({type:`custom:${rn}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Pt as SunMoonCard};
