var ls=Object.defineProperty;var cs=Object.getOwnPropertyDescriptor;var dt=(i,t,e,n)=>{for(var o=n>1?void 0:n?cs(t,e):t,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(t,e,o):r(o))||o);return n&&o&&ls(t,e,o),o};var Se=globalThis,Ae=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),bi=new WeakMap,ce=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ae&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=bi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&bi.set(e,t))}return t}toString(){return this.cssText}},vi=i=>new ce(typeof i=="string"?i:i+"",void 0,Qe),Te=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new ce(e,i,Qe)},$i=(i,t)=>{if(Ae)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=Se.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},tn=Ae?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return vi(e)})(i):i;var{is:us,defineProperty:ds,getOwnPropertyDescriptor:hs,getOwnPropertyNames:ms,getOwnPropertySymbols:ps,getPrototypeOf:gs}=Object,Ee=globalThis,wi=Ee.trustedTypes,fs=wi?wi.emptyScript:"",ys=Ee.reactiveElementPolyfillSupport,ue=(i,t)=>i,de={toAttribute(i,t){switch(t){case Boolean:i=i?fs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},De=(i,t)=>!us(i,t),xi={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),Ee.litPropertyMetadata??=new WeakMap;var vt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=xi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&ds(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=hs(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let l=o?.call(this);s?.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xi}static _$Ei(){if(this.hasOwnProperty(ue("elementProperties")))return;let t=gs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ue("properties"))){let e=this.properties,n=[...ms(e),...ps(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(tn(o))}else t!==void 0&&e.push(tn(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $i(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:de).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:de;this._$Em=o;let l=r.fromAttribute(e,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let r=this.constructor;if(o===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??De)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},vt[ue("elementProperties")]=new Map,vt[ue("finalized")]=new Map,ys?.({ReactiveElement:vt}),(Ee.reactiveElementVersions??=[]).push("2.1.2");var ln=globalThis,_i=i=>i,Ce=ln.trustedTypes,Mi=Ce?Ce.createPolicy("lit-html",{createHTML:i=>i}):void 0,Di="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,Ci="?"+St,bs=`<${Ci}>`,Ht=document,me=()=>Ht.createComment(""),pe=i=>i===null||typeof i!="object"&&typeof i!="function",cn=Array.isArray,vs=i=>cn(i)||typeof i?.[Symbol.iterator]=="function",en=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ki=/-->/g,Si=/>/g,Nt=RegExp(`>|${en}(?:([^\\s"'>=/]+)(${en}*=${en}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ai=/'/g,Ti=/"/g,Ni=/^(?:script|style|textarea|title)$/i,un=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),T=un(1),g=un(2),br=un(3),lt=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Ei=new WeakMap,Lt=Ht.createTreeWalker(Ht,129);function Li(i,t){if(!cn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mi!==void 0?Mi.createHTML(t):t}var $s=(i,t)=>{let e=i.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",r=he;for(let l=0;l<e;l++){let c=i[l],u,d,h=-1,p=0;for(;p<c.length&&(r.lastIndex=p,d=r.exec(c),d!==null);)p=r.lastIndex,r===he?d[1]==="!--"?r=ki:d[1]!==void 0?r=Si:d[2]!==void 0?(Ni.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=Nt):d[3]!==void 0&&(r=Nt):r===Nt?d[0]===">"?(r=o??he,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?Nt:d[3]==='"'?Ti:Ai):r===Ti||r===Ai?r=Nt:r===ki||r===Si?r=he:(r=Nt,o=void 0);let f=r===Nt&&i[l+1].startsWith("/>")?" ":"";s+=r===he?c+bs:h>=0?(n.push(u),c.slice(0,h)+Di+c.slice(h)+St+f):c+St+(h===-2?l:f)}return[Li(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},ge=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,r=0,l=t.length-1,c=this.parts,[u,d]=$s(t,e);if(this.el=i.createElement(u,n),Lt.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Lt.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Di)){let p=d[r++],f=o.getAttribute(h).split(St),v=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:v[2],strings:f,ctor:v[1]==="."?on:v[1]==="?"?sn:v[1]==="@"?rn:jt}),o.removeAttribute(h)}else h.startsWith(St)&&(c.push({type:6,index:s}),o.removeAttribute(h));if(Ni.test(o.tagName)){let h=o.textContent.split(St),p=h.length-1;if(p>0){o.textContent=Ce?Ce.emptyScript:"";for(let f=0;f<p;f++)o.append(h[f],me()),Lt.nextNode(),c.push({type:2,index:++s});o.append(h[p],me())}}}else if(o.nodeType===8)if(o.data===Ci)c.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(St,h+1))!==-1;)c.push({type:7,index:s}),h+=St.length-1}s++}}static createElement(t,e){let n=Ht.createElement("template");return n.innerHTML=t,n}};function Bt(i,t,e=i,n){if(t===lt)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=pe(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=Bt(i,o._$AS(i,t.values),o,n)),t}var nn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??Ht).importNode(e,!0);Lt.currentNode=o;let s=Lt.nextNode(),r=0,l=0,c=n[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new fe(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new an(s,this,t)),this._$AV.push(u),c=n[++l]}r!==c?.index&&(s=Lt.nextNode(),r++)}return Lt.currentNode=Ht,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},fe=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Bt(this,t,e),pe(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==lt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==k&&pe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ht.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ge.createElement(Li(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new nn(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Ei.get(t.strings);return e===void 0&&Ei.set(t.strings,e=new ge(t)),e}k(t){cn(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new i(this.O(me()),this.O(me()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=_i(t).nextSibling;_i(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},jt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(t,e=this,n,o){let s=this.strings,r=!1;if(s===void 0)t=Bt(this,t,e,0),r=!pe(t)||t!==this._$AH&&t!==lt,r&&(this._$AH=t);else{let l=t,c,u;for(t=s[0],c=0;c<s.length-1;c++)u=Bt(this,l[n+c],e,c),u===lt&&(u=this._$AH[c]),r||=!pe(u)||u!==this._$AH[c],u===k?t=k:t!==k&&(t+=(u??"")+s[c+1]),this._$AH[c]=u}r&&!o&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},on=class extends jt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}},sn=class extends jt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==k)}},rn=class extends jt{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=Bt(this,t,e,0)??k)===lt)return;let n=this._$AH,o=t===k&&n!==k||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==k&&(n===k||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},an=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}};var ws=ln.litHtmlPolyfillSupport;ws?.(ge,fe),(ln.litHtmlVersions??=[]).push("3.3.3");var Hi=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new fe(t.insertBefore(me(),s),s,void 0,e??{})}return o._$AI(i),o};var dn=globalThis,ht=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return lt}};ht._$litElement$=!0,ht.finalized=!0,dn.litElementHydrateSupport?.({LitElement:ht});var xs=dn.litElementPolyfillSupport;xs?.({LitElement:ht});(dn.litElementVersions??=[]).push("4.2.2");var Ne=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var _s={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:De},Ms=(i=_s,t,e)=>{let{kind:n,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){let{name:r}=e;return{set(l){let c=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,c,i,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,i,l),l}}}if(n==="setter"){let{name:r}=e;return function(l){let c=this[r];t.call(this,l),this.requestUpdate(r,c,i,!0,l)}}throw Error("Unsupported decorator location: "+n)};function Vt(i){return(t,e)=>typeof e=="object"?Ms(i,t,e):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,t,e)}function Zt(i){return Vt({...i,state:!0,attribute:!1})}var He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pe=i=>(...t)=>({_$litDirective$:i,values:t}),qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var $t=Pe(class extends qt{constructor(i){if(super(i),i.type!==He.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return lt}});var Pi="important",ks=" !"+Pi,K=Pe(class extends qt{constructor(i){if(super(i),i.type!==He.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(ks);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?Pi:""):e[n]=o}}return lt}});var Ri=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],zi=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],Ii=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],hn=385000.49;var P=Math.PI/180,ct=180/Math.PI,Ss=1495978707e-1,Fi=6378.14,mn=-.833,Tt=-6,Pt=-12,Rt=-18,Ui=120*1e3;function ye(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Yt(i){return(i-2451545)/36525}function F(i){let t=i%360;return t<0?t+360:t}function As(i){let t=Yt(i);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function Ts(i){let t=i-2451545,e=Yt(i),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return F(n)}function pn(i){let t=Yt(i),e=F(280.46646+t*(36000.76983+t*3032e-7)),n=F(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*P)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*P)*(.019993-101e-6*t)+Math.sin(3*n*P)*289e-6,s=e+o,r=F(125.04-1934.136*t),l=s-.00569-.00478*Math.sin(r*P),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*P),d=l*P,h=u*P,p=F(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*ct),f=Math.asin(Math.sin(h)*Math.sin(d))*ct;return{ra:p,dec:f}}function Es(i){let t=Yt(i),e=F(280.46646+t*(36000.76983+t*3032e-7)),n=F(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*P)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*P)*(.019993-101e-6*t)+Math.sin(3*n*P)*289e-6,s=F(125.04-1934.136*t);return F(e+o-.00569-.00478*Math.sin(s*P))}function Ds(i){let t=ye(i),e=Yt(t),n=F(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*P)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*P)*(.019993-101e-6*e)+Math.sin(3*n*P)*289e-6,r=(n+s)*P;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*Ss}function gn(i,t,e,n){let o=F(Ts(n)+e),s=F(o-i.ra),r=t*P,l=i.dec*P,c=s*P,u=Math.asin(Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(c))*ct,d=F(Math.atan2(Math.sin(c),Math.cos(c)*Math.sin(r)-Math.tan(l)*Math.cos(r))*ct+180);return{altitude:u,azimuth:d}}function fn(i,t){let e=ye(i);return gn(pn(e),t.latitude,t.longitude,e).altitude}function Re(i,t){let e=ye(i);return gn(pn(e),t.latitude,t.longitude,e)}function Cs(i){let t=i;return{D:F(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:F(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:F(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:F(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function Gi(i){let t=Yt(i),e=F(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=Cs(t),o=e;for(let l of Ri){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;o+=l[4]*Math.sin(c*P)}let s=0;for(let l of zi){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;s+=l[4]*Math.sin(c*P)}let r=hn;for(let l of Ii){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;r+=l[4]*Math.cos(c*P)}return{longitude:F(o),latitude:s,distanceKm:r}}function Wi(i,t,e){let n=As(e)*P,o=i*P,s=t*P,r=F(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*ct),l=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*ct;return{ra:r,dec:l}}function At(i,t){let e=ye(i),n=Gi(e),o=Wi(n.longitude,n.latitude,e),s=gn(o,t.latitude,t.longitude,e),r=Math.asin(Fi/n.distanceKm)*ct,l=s.altitude-r*Math.cos(s.altitude*P);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:l,equatorial:o,geocentric:n}}function Ns(i){return .7275*(Math.asin(Fi/i)*ct)-.5667}var Ls=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],Hs=29.530588853;function ze(i){let t=ye(i),e=Gi(t),n=Wi(e.longitude,e.latitude,t),o=pn(t),s=Es(t),r=Ds(i),l=e.distanceKm,c=e.latitude*P,u=Math.acos(Math.min(1,Math.max(-1,Math.cos(c)*Math.cos((e.longitude-s)*P)))),d=Math.atan2(r*Math.sin(u),l-r*Math.cos(u)),h=F(d*ct),p=(1+Math.cos(d))/2,f=(o.ra-n.ra)*P,v=o.dec*P,E=n.dec*P,M=F(Math.atan2(Math.cos(v)*Math.sin(f),Math.sin(v)*Math.cos(E)-Math.cos(v)*Math.sin(E)*Math.cos(f))*ct),w=F(e.longitude-s)/360,b=Math.min(7,Math.floor(w*8+.5)%8),x=w*29.530588853;return{illumination:p,phaseAngle:h,elongation:u*ct,phaseIndex:b,phaseKey:Ls[b],brightLimbAngle:M,moonAgeDays:x,waxing:w<.5,distanceKm:l}}function yn(i,t,e,n,o){let s=[];if(!(t>i))return s;let r=Math.max(2,Math.ceil((t-i)/e)),l=(t-i)/r,c=i,u=n(i)-o;for(let d=1;d<=r;d++){let h=i+d*l,p=n(h)-o;if(u===0)s.push({time:c,rising:p>0});else if(u<0&&p>=0||u>0&&p<=0){let f=c,v=h,E=u;for(let M=0;M<50&&v-f>1;M++){let w=(f+v)/2,b=n(w)-o;b<0&&E<0||b>0&&E>0?(f=w,E=b):v=w}s.push({time:(f+v)/2,rising:p>u})}c=h,u=p}return s}function Oi(i,t,e,n){let o=i.find(s=>s.rising===t&&s.time>=e&&s.time<n);return o?new Date(o.time):null}function bn(i,t,e,n=4){let o=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),l=e.getTime(),c=$=>fn($,i),u=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let $=r;$<l;$+=d)u.push({time:$,altitude:c($)});u.push({time:l,altitude:c(l)});let h=-1/0,p=1/0;for(let $ of u)$.altitude>h&&(h=$.altitude),$.altitude<p&&(p=$.altitude);let f=[["sunrise","sunset",mn],["civilDawn","civilDusk",Tt],["nauticalDawn","nauticalDusk",Pt],["astronomicalDawn","astronomicalDusk",Rt]],v={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[$,C,U]of f){let j=yn(o,s,Ui,c,U);v[$]=Oi(j,!0,r,l),v[C]=Oi(j,!1,r,l)}let E=r,M=-1/0,w=120*1e3;for(let $=r;$<=l;$+=w){let C=c($);C>M&&(M=C,E=$)}let b=Math.max(r,E-w),x=Math.min(l,E+w);for(let $=0;$<40&&x-b>1e3;$++){let C=b+(x-b)/3,U=x-(x-b)/3;c(C)<c(U)?b=C:x=U}v.solarNoon=new Date((b+x)/2);let N="none";return p>mn?N="polar-day":h<mn&&(N="polar-night"),{dayStart:t,dayEnd:e,samples:u,maxAltitude:h,minAltitude:p,events:v,polar:N}}function Ps(i,t,e,n=10){let o=t.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),l=[];for(let d=o;d<s;d+=r)l.push({time:d,altitude:At(d,i).apparentAltitude});l.push({time:s,altitude:At(s,i).apparentAltitude});let c=-1/0,u=1/0;for(let d of l)d.altitude>c&&(c=d.altitude),d.altitude<u&&(u=d.altitude);return{samples:l,maxAltitude:c,minAltitude:u}}function Ki(i,t,e,n,o=10){let s=t.getTime(),r=e.getTime(),l=c=>{if(!c)return null;let u=c.getTime();return u>=s&&u<r?u:null};return{profile:Ps(i,t,e,o),rise:l(n.previousRise)??l(n.nextRise),set:l(n.previousSet)??l(n.nextSet)}}function Bi(i,t){let e=i.getTime(),n=e-1800*60*1e3,o=e+1800*60*1e3,r=yn(n,o,Ui,f=>{let v=At(f,t);return v.altitude-Ns(v.distanceKm)},0),l=r.filter(f=>f.rising),c=r.filter(f=>!f.rising),u=l.find(f=>f.time>e)??null,d=[...l].reverse().find(f=>f.time<=e)??null,h=c.find(f=>f.time>e)??null,p=[...c].reverse().find(f=>f.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:p?new Date(p.time):null,nextRise:u?new Date(u.time):null,nextSet:h?new Date(h.time):null}}function ji(i){return i>0?"day":i>Tt?"civil":i>Pt?"nautical":i>Rt?"astronomical":"night"}function Rs(i){return(((ze(i).moonAgeDays/Hs-.5)%1+1)%1+.5)%1-.5}function vn(i,t){let e=typeof i=="number"?i:i.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?yn(e,n,360*60*1e3,Rs,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function Vi(i,t=32){let e=typeof i=="number"?i:i.getTime(),o=vn(e,e+t*24*60*60*1e3)[0];if(!o)return null;let s=ze(o).illumination;return s<.98?null:{time:o,illumination:s}}function Zi(i,t,e=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,u=s,d=s;for(let h=s;h<=r;h+=o){let p=At(h,t).distanceKm;p<l&&(l=p,u=h),p>c&&(c=p,d=h)}return{current:At(n,t).distanceKm,min:l,minTime:new Date(u),max:c,maxTime:new Date(d),mean:hn}}function Ie(i,t,e="sun"){return(e==="sun"?Re(i,t):At(i,t)).azimuth}function y(i,t,e){return Number.isNaN(i)?t:Math.min(e,Math.max(t,i))}function $n(i,t,e){return i+(t-i)*e}function a(i,t=0){let e=10**t;return Math.round(i*e)/e}function qi(i){let t=i.trim().replace(/^#/,""),e=t.length===3?t.split("").map(o=>o+o).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]}function zs(i){return`#${i.map(t=>Math.round(y(t,0,255)).toString(16).padStart(2,"0")).join("")}`}function wn(i,t,e){let n=qi(i),o=qi(t);if(!n||!o)return t;let s=y(e,0,1);return zs([$n(n[0],o[0],s),$n(n[1],o[1],s),$n(n[2],o[2],s)])}function xn(i){return typeof i=="number"&&Number.isFinite(i)}function mt(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let t=Number(i.replace(",","."));if(Number.isFinite(t))return t}return null}function Yi(i){return i.length===0?"":i.map((t,e)=>`${e===0?"M":"L"}${a(t.x,2)} ${a(t.y,2)}`).join(" ")}function Oe(i,t=.5){if(i.length<3)return Yi(i);let e=[`M${a(i[0].x,2)} ${a(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],l=i[n+2]??r,c=s.x+(r.x-o.x)/6*t*2,u=s.y+(r.y-o.y)/6*t*2,d=r.x-(l.x-s.x)/6*t*2,h=r.y-(l.y-s.y)/6*t*2;e.push(`C${a(c,2)} ${a(u,2)} ${a(d,2)} ${a(h,2)} ${a(r.x,2)} ${a(r.y,2)}`)}return e.join(" ")}function Fe(i,t,e=!1){if(i.length===0)return"";let n=e?Oe(i):Yi(i),o=i[0],s=i[i.length-1];return`${n} L${a(s.x,2)} ${a(t,2)} L${a(o.x,2)} ${a(t,2)} Z`}function wt(i,t,e){let n=e*Math.PI/180;return{x:i.x-t*Math.sin(n),y:i.y-t*Math.cos(n)}}function Ji(i,t,e){let n=y(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${a(i.x-t,2)} ${a(i.y,2)} a${a(t,2)} ${a(t,2)} 0 1 1 ${a(t*2,2)} 0 a${a(t,2)} ${a(t,2)} 0 1 1 ${a(-t*2,2)} 0 Z`;let o=t*(1-2*n),s=1,r=o>0?0:1,l={x:i.x-t,y:i.y},c={x:i.x+t,y:i.y};return`M${a(l.x,2)} ${a(l.y,2)} A${a(t,2)} ${a(t,2)} 0 0 ${s} ${a(c.x,2)} ${a(c.y,2)} A${a(t,2)} ${a(Math.abs(o),4)} 0 0 ${r} ${a(l.x,2)} ${a(l.y,2)} Z`}function Xi(i=new Date){let t=i.getTime();return t+(6e4-t%6e4)+250}var Is=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Jt(i){let{size:t,illumination:e,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:l="",uid:c}=i,u={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=Ji(u,d,e),p=r&&t>=26,f=a(-n,2);return g`
    <svg
      class="moon-disc ${l}"
      width="${a(t,1)}"
      height="${a(t,1)}"
      viewBox="0 0 ${a(t,1)} ${a(t,1)}"
      role="img"
      aria-hidden="true"
    >
      <circle
        cx="${a(u.x,2)}" cy="${a(u.y,2)}" r="${a(d,2)}"
        fill="${s}"
      />
      ${h?g`<g transform="rotate(${f} ${a(u.x,2)} ${a(u.y,2)})">
              <path d="${h}" fill="${o}" />
              ${p?g`<g clip-path="url(#${c}-clip)" opacity="0.16">
                      <clipPath id="${c}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${Is.map(v=>{let E={x:u.x+v.x*d,y:u.y+v.y*d};return g`<circle
                          cx="${a(E.x,2)}" cy="${a(E.y,2)}"
                          r="${a(v.r*d,2)}"
                          fill="#5a6488" />`})}
                    </g>`:g``}
            </g>`:g``}
      <circle
        cx="${a(u.x,2)}" cy="${a(u.y,2)}" r="${a(d,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function _n(i,t,e,n){let o=wt(i,t,e),s=e*Math.PI/180,r=-Math.sin(s),l=-Math.cos(s),c=y(t*.12,4,9),u=y(t*.07,2.5,5),d={x:o.x+r*c,y:o.y+l*c},h={x:o.x-l*u,y:o.y+r*u},p={x:o.x+l*u,y:o.y-r*u};return g`
    <polygon
      points="${a(d.x,2)},${a(d.y,2)} ${a(h.x,2)},${a(h.y,2)} ${a(p.x,2)},${a(p.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var Ge="sun-moon-card",En="sun-moon-card",no="sun-moon-card-editor";var Dn=24,Os=16,Mn=4,Fs=12,Us=36,Cn=[260,520];function Xt(i){return i?[Dn,800]:[120,800]}var D={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null},io=1200*1e3,Nn={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},Ln={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},oo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],Hn=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],zt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon"]},so=700,Gs=260,Qi=10,Tn=56,Ws=84,Ks=96,kn=74,Bs=Tn+8,js=12,Vs=10,tt=4,Ue=4,to=30,eo=44,Zs=26,qs=72,Pn=96,Sn=20,An=18;function ro(i,t,e){if(e.minimal_mode){let O=(e.minimal_show_times||e.minimal_show_zenith)&&i>=Us?Fs:0,z=Math.max(Os,i-2*Mn-O);return{padding:Mn,minimalTimesHeight:O,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,t-2*Mn),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:z,minimal:!0,compact:!1}}let n=e.compact_mode,o=n?Vs:js,s=Math.max(40,i-2*o),r=0,l=e.show_footer&&!n?Sn+tt:0,c=to+tt+eo+tt+l+(An+Ue)+kn,u=e.show_header&&!n&&s>=c,d=u?to:0;s-=d,u&&(s-=tt,r+=tt);let h=n?Zs:eo,p=e.show_events&&s-(h+tt)-l>=Ws,f=p?h:0;s-=f,p&&(s-=tt,r+=tt);let v=e.show_astronomical_details?Pn:qs,E=!n&&(e.show_sun||e.show_moon)&&s-(v+tt)-l>=Ks,M=E?v:0;s-=M,E&&(s-=tt,r+=tt);let w=e.show_footer&&!n&&p&&s-(Sn+tt)>=Bs,b=w?Sn:0;s-=b,w&&(s-=tt,r+=tt);let x=Math.max(Tn,s),N=e.show_day_chart&&!n&&p&&x-An-Ue>=kn,$=N?An:0;N&&(r+=Ue);let C=Math.max(Tn,x-$-(N?Ue:0)),U=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),j=U&&t>=so&&C>=kn,Y=Math.max(80,t-2*o),B=j?Math.round(Math.min(Gs,(Y-Qi)/3)):0,S=Math.max(120,j?Y-Qi-B:Y);return{padding:o,showHeader:u,showEvents:p,showDetails:E,showFooter:w,showLegend:N,skyViewSide:j,skyViewInline:!j&&U&&E,skyViewWidth:B,chartWidth:S,gaps:r,headerHeight:d,eventsHeight:f,detailsHeight:M,footerHeight:b,legendHeight:$,chartHeight:C,minimal:!1,minimalTimesHeight:0,compact:n}}function ao(i){return i>=so?360:320}function We(){return{type:`custom:${Ge}`,card_height:340}}var Rn={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function q(i,t,e){let o=(Rn[i]??Rn.en)[t]??Rn.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function It(i,t){return((i&&i!=="auto"?i:t)??"").toLowerCase().startsWith("de")?"de":"en"}function uo(i,t,e){let n=i;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var lo=new Map;function zn(i,t,e){let n=`${t}|${i}`,o=lo.get(n);if(o)return o;let s=i;try{let l=new Intl.DateTimeFormat(t,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(c=>c.type==="timeZoneName");l&&l.value.trim()!==""&&(s=l.value)}catch{}return lo.set(n,s),s}var co=new Map;function Ys(i,t,e){let n=`${i}|${t}|${e}`,o=co.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}co.set(n,o)}return o}function et(i,t){return Ys(t.locale,t.timeZone,t.hour12).format(i)}function ho(i,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function In(i,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}catch{return i.toFixed(t)}}function ot(i,t=1,e="de-DE"){return`${In(i,t,e)}\xB0`}function Ke(i,t="de-DE"){return`${In(Math.round(i),0,t)} km`}function mo(i,t="de-DE"){let e=i<0?"\u2212":"+",n=Math.round(Math.abs(i)),o=Math.floor(n/60),s=n%60,r=t.startsWith("de")?":":"h ",l=t.startsWith("de")?"":"m";return`${e}${o}${r}${String(s).padStart(2,"0")}${l}`}function po(i){let t=Math.max(0,Math.round(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function On(i,t){return t(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function go(i,t="de-DE"){return`${In(i*100,0,t)} %`}function Ot(i,t){let e=(i%360+360)%360,n=Hn[0],o=1/0;for(let r of Hn){let l=Math.abs((e-r.deg+540)%360-180);l<o&&(o=l,n=r)}let s=`dir${n.key}`;return q(t,s)}function fo(i,t,e,n){return{language:i,locale:t,timeZone:e,hour12:n,t:(o,s)=>q(i,o,s)}}function yo(i,t){if(i.length<=t)return i;let e=i.length/t,n=[];for(let s=0;s<t;s++)n.push(i[Math.floor(s*e)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function Js(i,t,e,n,o){if(i.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),l,c;if(s!==void 0&&r!==void 0&&r>s)l=n(s),c=n(r);else if(e==="polar-day")l=i[0].x,c=i[i.length-1].x;else return null;let u=i.filter(d=>d.x>=l-.5&&d.x<=c+.5);return u.length<2?null:{path:Fe(u,o,!0),cx:(l+c)/2,cy:o,r:Math.max(6,(c-l)/2)}}function Xs(i,t){let e=t?Math.max(i.maxAltitude,t.maxAltitude):i.maxAltitude,n=t?Math.min(i.minAltitude,t.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(e-o)*.1),r=y(e+s,-18,90.5);return[y(Math.max(-28,n-2),-90,r-6),r]}function Fn(i,t,e=2.2){let n=[0,Tt,Pt,Rt],o=[t.day,t.civil,t.nautical,t.astronomical,t.night];if(i>e/2){let s=y(1-i/12,0,1)*.5;return wn(t.day,t.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+e/2,l=n[s]-e/2;if(i>=r)return o[s];if(i>l){let c=(r-i)/e;return wn(o[s],o[s+1],c*c*(3-2*c))}}return o[o.length-1]}function Qs(i,t,e,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,l=t+e*(1-r);o.push({offset:r,color:Fn(l,i)})}return o}function tr(i,t,e,n,o,s){let r=i.samples;if(r.length<2)return[];let l=[],c=(d,h)=>{d&&!Number.isNaN(d.getTime())&&l.push({time:d.getTime(),color:h})};c(t.astronomicalDawn,e.astronomical),c(t.nauticalDawn,e.nautical),c(t.civilDawn,e.civil),c(t.sunrise,e.glow),c(t.solarNoon,e.day),c(t.sunset,e.glow),c(t.civilDusk,e.civil),c(t.nauticalDusk,e.nautical),c(t.astronomicalDusk,e.astronomical);let u=[{offset:0,color:Fn(r[0].altitude,e)},...l.map(d=>({offset:y((n(d.time)-o)/s,0,1),color:d.color})),{offset:1,color:Fn(r[r.length-1].altitude,e)}];return u.sort((d,h)=>d.offset-h.offset),u}function Un(i){let{profile:t,events:e,now:n,width:o,height:s,palette:r,format:l,showSun:c,showMoon:u,moon:d,moonPath:h,showTwilight:p,twilightLevel:f,animations:v,cardStyle:E,minimal:M,uid:w,showAstronomicalLayers:b,currentAltitude:x}=i,N=Math.max(M?60:120,o),$=Math.max(M?12:56,s),C=M?2:4,U=M?2:4,j=M?2:6,Y=!M&&$>=112,B=Y?y(a($*.13,1),13,20):0,S=C,A=Math.max(10,N-C-U),L=j,O=Math.max(10,$-j-B),z=L+O,[G,J]=Xs(t,h?.profile??null),nt=Math.max(1,J-G),_t=t.dayStart.getTime(),X=t.dayEnd.getTime(),pt=Math.max(1,X-_t),_=m=>S+(m-_t)/pt*A,I=m=>z-(y(m,-95,95)-G)/nt*O,st=I(0),Et=y(Math.round(A/1.6),60,361),Ut=yo(t.samples,Et).map(m=>({x:_(m.time),y:I(m.altitude)})),V=Qs(r,G,nt),rt=tr(t,e,r,_,S,A),gt=`${w}-area`,Mt=`${w}-line`,Gt=`${w}-clip`,ve=`${w}-glow`,Dt=`${w}-sky`,ne=`${w}-soft`,Yn=`${w}-soft-fade`,Jn=`${w}-foot`,Xn=`${w}-foot-fade`,Qn=`${w}-side`,ti=`${w}-side-fade`,ut=E==="horizon",Ro=Fe(Ut,ut?a(st,2):z+1,!0),zo=Oe(Ut),ei=h?yo(h.profile.samples,y(Math.round(A/2),40,240)).map(m=>({x:_(m.time),y:I(m.altitude)})):null,Be=ei&&!M?Oe(ei):null,je="var(--smc-moon-line, #cbd5e1)",Io=y(a($*.013,2),1.1,1.9),Oo=Fe(Ut,L-1,!0),ie=E==="flat"?.6:ut?.3:1,Fo=ut?0:a(.15*ie,3),ft=L-1,Ve=z+1,kt=Math.max(1,Ve-ft),Uo=y(O*.14,M?1.5:6,18),Go=y(O*.08,M?1:4,12),Wo=y(A*.02,M?2:6,14),ni=y(a(O*.06,1),M?1.5:4,10),Ko=a(y(Uo/kt,0,.45),4),ii=a(1-y(Go/kt,0,.45),4),Wt=S-1,$e=S+A+1,oi=a(y(Wo/Math.max(1,$e-Wt),0,.4),4),Bo=Math.max(16,A*.16),jo=y(O*.45,9,46),we=[];O>=34&&(e.sunrise&&we.push({id:`${w}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&we.push({id:`${w}-glow-set`,time:e.sunset,color:r.glow}));let Kt=M?null:Js(Ut,e,t.polar,_,st),si=`${w}-dome`,Z=l.t,oe=[],se=m=>{m.time&&!Number.isNaN(m.time.getTime())&&oe.push({secondary:!1,...m})};if(e.sunrise&&se({key:"sunrise",time:e.sunrise,label:Z("sunrise"),shortLabel:Z("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&se({key:"sunset",time:e.sunset,label:Z("sunset"),shortLabel:Z("sunsetShort"),kind:"sunset",altitude:0}),p&&(e.civilDawn&&se({key:"civilDawn",time:e.civilDawn,label:Z("civilDawn"),shortLabel:Z("civilDawnShort"),kind:"dawn",altitude:Tt}),e.civilDusk&&se({key:"civilDusk",time:e.civilDusk,label:Z("civilDusk"),shortLabel:Z("civilDuskShort"),kind:"dusk",altitude:Tt}),f==="all"||b)){let m=[["nauticalDawn","dawn","nauticalDawn",Pt],["nauticalDusk","dusk","nauticalDusk",Pt],["astronomicalDawn","dawn","astronomicalDawn",Rt],["astronomicalDusk","dusk","astronomicalDusk",Rt]];for(let[H,R,W,it]of m){let le=e[H];le&&se({key:H,time:le,label:Z(W),shortLabel:Z(W),kind:R,altitude:it,secondary:!0})}}oe.sort((m,H)=>m.time.getTime()-H.time.getTime());let xe=y(a($*.062,1),7.5,10.5),Ze=y(a(xe+5,1),11,B||15),Vo=oe.filter(m=>!m.secondary),Zo=oe.filter(m=>m.secondary),qo=A<240?3:A<340?4:6,ri=M?[]:[...Vo,...Zo].slice(0,Math.max(2,qo)).sort((m,H)=>m.time.getTime()-H.time.getTime()),Yo=ri.length>3||A<300,qe=[],Ye=-1/0;for(let m of ri){let H=Yo?m.shortLabel:m.label,R=H.length*xe*.56+8,W=_(m.time.getTime());W=y(W,S+R/2,S+A-R/2),W-R/2<Ye+3&&(W=Ye+3+R/2),!(W+R/2>S+A+.5)&&(Ye=W+R/2,qe.push({x:W,width:R,text:H,secondary:m.secondary}))}let yt=y(_(n.getTime()),S,S+A),Jo=r.day,Ct=M?y(a($*.16,1),2.8,6):y(a($*.045,1),3.5,6),ai=y(a(Ct*.22,2),.8,1.4),bt=y(a(Ct*1.1,1),3.5,7),li=(m,H)=>O<=H*2?L+O/2:y(I(m),L+H,z-H),ci=li(x,Ct),at=u&&d&&!M?{altitude:d.altitude,y:li(d.altitude,bt),clamped:d.altitude<G||d.altitude>J}:null,Xo=at?Math.abs(at.y-ci):Number.POSITIVE_INFINITY,Je=Ct+bt+2,re=at?Xo>=Ct+bt+1?yt:yt+Je+bt<=S+A?yt+Je:Math.max(S+bt,yt-Je):null,Qo=v?"smc-pulse":"",ts=v?`url(#${ve})`:"",Xe=[{altitude:0,label:Z("horizon"),key:"horizon"}];b||f==="all"?Xe.push({altitude:Tt,label:`${Z("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Pt,label:`${Z("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Rt,label:`${Z("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):p&&Xe.push({altitude:Tt,label:`${Z("refCivil")} (\u22126\xB0)`,key:"civil"});let es=!M&&O>=86&&A>=250,ns=Xe.filter(m=>(!M||m.key==="horizon")&&m.altitude>G+.5&&m.altitude<J-.5),is=y(a($*.055,1),7.5,9.5),ae=e.solarNoon,ui=!M&&!!ae&&t.maxAltitude>0&&O>=104&&A>=220&&b,di=ui?`${Z("zenith")} ${et(ae,l)} \xB7 ${ot(t.maxAltitude,1,l.locale)}`:"",_e=y(a($*.055,1),7.5,9.5),Me=di.length*_e*.56+10,hi=ae?y(_(ae.getTime()),S+Me/2,S+A-Me/2):0,mi=ae?I(t.maxAltitude):0,ke=_e+5,pi=y(mi-ke-4,L,Math.max(L,mi+10)),gi=M?1:A<220?4:A<420?6:8,fi=[];for(let m=1;m<gi;m++)fi.push(S+A*m/gi);return g`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${a(N,1)} ${a($,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${Z("title")}"
    >
      <defs>
        <linearGradient id="${gt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(L,1)}" x2="0" y2="${a(z,1)}">
          ${V.map(m=>g`<stop offset="${a(m.offset*100,3)}%" stop-color="${m.color}" />`)}
        </linearGradient>
        <linearGradient id="${Mt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(L,1)}" x2="0" y2="${a(z,1)}">
          ${V.map(m=>g`<stop offset="${a(m.offset*100,3)}%" stop-color="${m.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${rt.length>=2?g`<linearGradient id="${Dt}" gradientUnits="userSpaceOnUse"
                x1="${a(S,1)}" y1="0" x2="${a(S+A,1)}" y2="0">
                ${rt.map(m=>g`<stop offset="${a(m.offset*100,3)}%" stop-color="${m.color}" />`)}
              </linearGradient>`:g``}
        ${we.map(m=>g`<radialGradient id="${m.id}">
              <stop offset="0%" stop-color="${m.color}" stop-opacity="${a(.5*ie,3)}" />
              <stop offset="45%" stop-color="${m.color}" stop-opacity="${a(.2*ie,3)}" />
              <stop offset="100%" stop-color="${m.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${Kt?g`<radialGradient id="${si}" gradientUnits="userSpaceOnUse"
                cx="${a(Kt.cx,1)}" cy="${a(Kt.cy,1)}" r="${a(Kt.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${a(.3*ie,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${a(.18*ie,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:g``}
        <linearGradient id="${Yn}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(ft,1)}" x2="0" y2="${a(Ve,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Ko}" stop-color="#ffffff" />
          <stop offset="${ii}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ne}" maskUnits="userSpaceOnUse"
          x="${a(S-2,1)}" y="${a(ft,1)}"
          width="${a(A+4,1)}" height="${a(kt,1)}">
          <rect
            x="${a(S-2,1)}" y="${a(ft,1)}"
            width="${a(A+4,1)}" height="${a(kt,1)}"
            fill="url(#${Yn})" />
        </mask>
        <linearGradient id="${Xn}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(ft,1)}" x2="0" y2="${a(Ve,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${ii}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Jn}" maskUnits="userSpaceOnUse"
          x="${a(S-2,1)}" y="${a(ft,1)}"
          width="${a(A+4,1)}" height="${a(kt,1)}">
          <rect
            x="${a(S-2,1)}" y="${a(ft,1)}"
            width="${a(A+4,1)}" height="${a(kt,1)}"
            fill="url(#${Xn})" />
        </mask>
        <linearGradient id="${ti}" gradientUnits="userSpaceOnUse"
          x1="${a(Wt,1)}" y1="0" x2="${a($e,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${oi}" stop-color="#ffffff" />
          <stop offset="${a(1-oi,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Qn}" maskUnits="userSpaceOnUse"
          x="${a(Wt,1)}" y="${a(ft,1)}"
          width="${a($e-Wt,1)}" height="${a(kt,1)}">
          <rect
            x="${a(Wt,1)}" y="${a(ft,1)}"
            width="${a($e-Wt,1)}" height="${a(kt,1)}"
            fill="url(#${ti})" />
        </mask>
        <clipPath id="${Gt}">
          <rect x="${a(S-1,1)}" y="${a(L-2,1)}"
            width="${a(A+2,1)}" height="${a(O+4,1)}"
            rx="${ni}" ry="${ni}" />
        </clipPath>
        ${v?g`<filter id="${ve}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${a(Ct*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:g``}
      </defs>

      <g clip-path="url(#${Gt})">
        ${fi.map(m=>g`<line x1="${a(m,1)}" y1="${a(L,1)}" x2="${a(m,1)}" y2="${a(z,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${Qn})">
        <path d="${Ro}" fill="url(#${gt})" opacity="0.9" mask="url(#${Jn})" />
        <g mask="url(#${ne})">
          ${rt.length>=2&&!ut?g`<path d="${Oo}" fill="url(#${Dt})" opacity="${Fo}" />`:g``}
          ${we.map(m=>{let H=y(_(m.time.getTime()),S,S+A),R=y(st,L,z);return g`<ellipse
                cx="${a(H,1)}" cy="${a(R,1)}"
                rx="${a(Bo,1)}" ry="${a(jo,1)}"
                fill="url(#${m.id})" />`})}
          ${Kt&&!ut?g`<path d="${Kt.path}" fill="url(#${si})" opacity="0.95" />`:g``}
        </g>
        </g>
        ${Be?g`<path
                class="moon-curve"
                data-body="moon"
                d="${Be}"
                fill="none"
                stroke="${je}"
                stroke-width="${Io}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${ut?.5:.9}"
              >
                <title>${l.t("moonCurve")}</title>
              </path>`:g``}
        ${h&&Be?g`<g class="moon-events">
                ${[[h.rise,"moonrise"],[h.set,"moonset"]].filter(m=>m[0]!==null).map(([m,H])=>{let R=y(_(m),S,S+A),W=y(I(0),L,z),it=y(a($*.05,1),4,8);return g`<g>
                      <title>${l.t(H)} ${et(new Date(m),l)}</title>
                      <line
                        x1="${a(R,1)}"
                        y1="${a(W-it,1)}"
                        x2="${a(R,1)}"
                        y2="${a(W+it,1)}"
                        stroke="${je}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${a(R,1)}"
                        cy="${a(W,1)}"
                        r="${y(a($*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${je}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:g``}
        <path
          d="${zo}"
          fill="none"
          stroke="url(#${Mt})"
          stroke-width="${y(a($*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${ns.map(m=>{let H=I(m.altitude),R=m.key==="horizon";return g`<g>
            <line
              x1="${a(S,1)}" y1="${a(H,1)}"
              x2="${a(S+A,1)}" y2="${a(H,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${R&&ut?1.5:R?1:.6}"
              stroke-dasharray="${R&&ut?"999 0":R?"3 3":"2 4"}"
              opacity="${R&&ut?.9:R?.6:ut?.3:.45}"
            />
            ${es?g`<text
                    x="${a(S+3,1)}"
                    y="${a(H-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${is}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${m.label}</text>`:g``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${oe.map(m=>{let H=y(_(m.time.getTime()),S,S+A),R=y(I(m.altitude),L,z),W=!m.secondary,it=W?y(a($*.022,1),1.8,3):1.4,le="var(--smc-marker-strong, rgba(255,255,255,0.9))",yi="var(--smc-marker-soft, rgba(255,255,255,0.55))",os=m.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":m.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":m.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",ss=W?os:yi,rs=W?le:yi,as=m.kind==="sunrise"||m.kind==="sunset"?g`
                <circle cx="${a(H,1)}" cy="${a(R,1)}" r="${it+1}"
                  fill="${m.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${a(H-it*2.6,1)}"
                  y1="${a(m.kind==="sunrise"?R+it+2:R-it-2,1)}"
                  x2="${a(H+it*2.6,1)}"
                  y2="${a(m.kind==="sunrise"?R+it+2:R-it-2,1)}"
                  stroke="${le}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:g`<circle cx="${a(H,1)}" cy="${a(R,1)}" r="${it}"
                  fill="${rs}" opacity="0.85" />`;return g`<g>
            <line
              x1="${a(H,1)}" y1="${a(L,1)}"
              x2="${a(H,1)}" y2="${a(z,1)}"
              stroke="${ss}" stroke-width="${W?1:.7}"
              stroke-dasharray="3 3" opacity="${W?.5:.25}" />
            ${as}
          </g>`})}
      </g>

      <g class="now-marker">
        <line
          x1="${a(yt,1)}" y1="${a(L,1)}"
          x2="${a(yt,1)}" y2="${a(z,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${y(a($*.012,2),1,1.8)}"
          opacity="0.85" />
        ${c?g`<g class="now-sun ${Qo}" filter="${ts}">
                <title>${l.t("chartSunNow",{altitude:ot(x,1,l.locale)})}</title>
                <circle
                  cx="${a(yt,1)}"
                  cy="${a(ci,1)}"
                  r="${Ct}"
                  fill="${Jo}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${ai}"
                />
              </g>`:g``}
        ${at&&re!==null&&d?g`<g class="now-moon">
                <title>${l.t("chartMoonNow",{altitude:ot(at.altitude,1,l.locale)})}${at.clamped?` ${l.t("chartOutside")}`:""}</title>
                ${re===yt?g``:g`<line
                        x1="${a(yt,1)}"
                        y1="${a(at.y,1)}"
                        x2="${a(re,1)}"
                        y2="${a(at.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${a(re,1)}"
                  cy="${a(at.y,1)}"
                  r="${a(bt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${ai}" />
                <g
                  transform="translate(${a(re-bt,1)} ${a(at.y-bt,1)})"
                  opacity="${at.clamped?.6:1}"
                >
                  ${Jt({size:a(bt*2,1),illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${w}-moon-now`})}
                </g>
              </g>`:g``}
      </g>

      ${ui?g`<g class="zenith-chip">
              <rect
                x="${a(hi-Me/2,1)}"
                y="${a(pi,1)}"
                width="${a(Me,1)}"
                height="${a(ke,1)}"
                rx="${a(ke/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${a(hi,1)}"
                y="${a(pi+ke/2+_e*.36,1)}"
                text-anchor="middle"
                font-size="${_e}"
                fill="var(--smc-label-color, #ffffff)"
              >${di}</text>
            </g>`:g``}

      ${Y?g`<line
              x1="${a(S,1)}" y1="${a(z+.5,1)}"
              x2="${a(S+A,1)}" y2="${a(z+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:g``}

      ${qe.length?g`<g class="event-labels" font-size="${xe}">
              ${qe.map(m=>{let H=Y?z+2:L;return g`<g>
                  <rect
                    x="${a(m.x-m.width/2,1)}"
                    y="${a(H,1)}"
                    width="${a(m.width,1)}"
                    height="${a(Ze,1)}"
                    rx="${a(Ze/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${m.secondary?.6:.88}" />
                  <text
                    x="${a(m.x,1)}"
                    y="${a(H+Ze/2+xe*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${m.secondary?.75:1}"
                  >${m.text}</text>
                </g>`})}
            </g>`:g``}
    </svg>
  `}function Gn(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function er(i,t,e){let n=[];for(let o=0;o<t;o++){let s=Math.sqrt(Gn(i*7.13+o*1.37))*e*.96,r=Gn(i*3.71+o*2.11)*360,l=wt({x:0,y:0},s,r),c=Gn(i*5.19+o*4.53);n.push({x:l.x,y:l.y,r:.35+c*.75,opacity:.16+c*.34})}return n}function Wn(i,t){return y((90-i)/90*t,0,t)}function Kn(i){let{width:t,height:e,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:l,showMoon:c,palette:u,format:d,animations:h,uid:p,showCardinals:f=!0,seed:v=0}=i,E=Math.max(80,t),M=Math.max(80,e),w=6,b={x:E/2,y:M/2},x=Math.max(10,Math.min(E,M)/2-w),N=`${p}-dome`,$=`${p}-dome-clip`,C=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],U=y(a(x*.17,1),7,11),j=n?n.altitude>0:!1,Y=y(a(x*.11,1),4,11),B=n?wt(b,Wn(n.altitude,x),n.azimuth):null,S=l&&n&&B,A=o?o.altitude>0:!1,L=y(a(x*.24,1),10,22),O=o?wt(b,Wn(o.altitude,x),o.azimuth):null,z=c&&o&&O&&r,G=f&&x>=42,J=y(a(x*.14,1),6.5,9),nt=[{altitude:30,radius:x*(60/90)},{altitude:60,radius:x*(30/90)}],X=(n?.altitude??-90)<-6?er(Math.max(1,Math.round(v)),46,x):[],pt=s.filter(_=>_.altitude>=-8).map(_=>wt(b,Wn(_.altitude,x),_.azimuth));return g`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${a(E,1)} ${a(M,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${N}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${u.skyTop}" />
          <stop offset="100%" stop-color="${u.skyBottom}" />
        </radialGradient>
        <clipPath id="${$}">
          <circle cx="${a(b.x,1)}" cy="${a(b.y,1)}" r="${a(x,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${a(b.x,1)}" cy="${a(b.y,1)}" r="${a(x,1)}"
        fill="url(#${N})" opacity="0.55" />

      <g clip-path="url(#${$})">
        ${X.length?g`<g class="stars">
                ${X.map(_=>g`<circle
                      cx="${a(b.x+_.x,1)}"
                      cy="${a(b.y+_.y,1)}"
                      r="${a(_.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${a(_.opacity,2)}" />`)}
              </g>`:g``}
        ${nt.map(_=>g`<circle
              cx="${a(b.x,1)}" cy="${a(b.y,1)}" r="${a(_.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${a(b.x-x,1)}" y1="${a(b.y,1)}"
          x2="${a(b.x+x,1)}" y2="${a(b.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${a(b.x,1)}" y1="${a(b.y-x,1)}"
          x2="${a(b.x,1)}" y2="${a(b.y+x,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${pt.length>1?g`<path
                d="M${pt.map(_=>`${a(_.x,1)} ${a(_.y,1)}`).join(" L")}"
                fill="none"
                stroke="${u.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:g``}
      </g>

      <circle
        cx="${a(b.x,1)}" cy="${a(b.y,1)}" r="${a(x,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${G?g`<g
              font-size="${J}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${nt.map(_=>{let I=wt(b,_.radius,45);return g`<text
                  x="${a(I.x,1)}"
                  y="${a(I.y+J*.35,1)}"
                >${_.altitude}°</text>`})}
            </g>`:g``}

      ${f?g`<g font-size="${U}" fill="var(--smc-muted-color)" opacity="0.7">
              ${C.map(_=>{let I=wt(b,x*.87,_.azimuth);return g`<text
                  x="${a(I.x,1)}"
                  y="${a(I.y+U*.35,1)}"
                  text-anchor="middle"
                >${_.key}</text>`})}
            </g>`:g``}

      ${S&&j&&B?g`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${a(B.x,1)}" cy="${a(B.y,1)}" r="${Y}"
                fill="${u.lineDay}" opacity="0.28" />
              <circle
                cx="${a(B.x,1)}" cy="${a(B.y,1)}" r="${a(Y*.55,1)}"
                fill="${u.lineDay}" />
            </g>`:g``}
      ${l&&n&&!j?_n(b,x,n.azimuth,u.lineNight):g``}

      ${z&&A&&O&&r?g`<g transform="translate(${a(O.x-L/2,1)} ${a(O.y-L/2,1)})">
              ${Jt({size:L,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:L>=16,uid:`${p}-moon`})}
            </g>`:g``}
      ${c&&o&&!A?_n(b,x,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):g``}
    </svg>
  `}function bo(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function vo(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Bn(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function jn(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function $o(i=20,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function wo(i=18,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var xo=new Map;function _o(i){let t=xo.get(i);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),xo.set(i,t)),t}function nr(i){try{return _o(i)}catch{return _o("UTC")}}function Vn(i,t){let e=nr(t).formatToParts(i),n={};for(let o of e)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function Mo(i,t){let e=Vn(i,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function ir(i,t,e,n=0,o=0,s=0,r="UTC"){let l=Date.UTC(i,t-1,e,n,o,s),c=1440*60*1e3,u=[Mo(new Date(l-c),r),Mo(new Date(l+c),r)],d=[...new Set(u)].map(p=>l-p).filter(p=>{let f=Vn(new Date(p),r);return f.year===i&&f.month===t&&f.day===e&&f.hour===n&&f.minute===o&&f.second===s}).sort((p,f)=>p-f);if(d.length>0)return new Date(d[0]);let h=Math.min(...u);return new Date(l-h)}function Qt(i,t){let e=Vn(i,t);return ir(e.year,e.month,e.day,0,0,0,t)}function ko(i,t){let e=Qt(i,t);return Qt(new Date(e.getTime()+2160*60*1e3),t)}function te(i,t){return Math.round(Qt(i,t).getTime()/(1440*60*1e3))}function So(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function Q(i,t){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:t}function be(i,t,e){return typeof i=="string"&&t.includes(i)?i:e}function Eo(i,t="en"){let e=[],n=[],o=i??{},s=Q(o.minimal_mode,D.minimal_mode),r=Xt(s),l=D.card_height;if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))l=Math.round(y(o.card_height,r[0],r[1])),l!==o.card_height&&n.push(q(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)l="auto";else if(typeof o.card_height=="number")n.push(q(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let f=mt(o.card_height);f===null?e.push(q(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):l=Math.round(y(f,r[0],r[1]))}let c=null,u=null,d=mt(o.latitude),h=mt(o.longitude);return d!==null&&(d>=-90&&d<=90?c=d:n.push(q(t,"invalidNumber",{value:String(o.latitude)}))),h!==null&&(h>=-180&&h<=180?u=h:n.push(q(t,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():D.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():D.moon_entity,card_height:l,show_sun:Q(o.show_sun,D.show_sun),show_moon:Q(o.show_moon,D.show_moon),show_twilight:Q(o.show_twilight,D.show_twilight),show_astronomical_details:Q(o.show_astronomical_details,D.show_astronomical_details),compact_mode:Q(o.compact_mode,D.compact_mode),minimal_mode:s,minimal_show_times:Q(o.minimal_show_times,D.minimal_show_times),minimal_show_zenith:Q(o.minimal_show_zenith,D.minimal_show_zenith),card_style:be(o.card_style,zt.cardStyle,D.card_style),theme_mode:be(o.theme_mode,zt.themeMode,D.theme_mode),animations:Q(o.animations,D.animations),time_format:be(o.time_format,zt.timeFormat,D.time_format),language:be(o.language,zt.language,D.language),show_header:Q(o.show_header,D.show_header),show_day_chart:Q(o.show_day_chart,D.show_day_chart),show_sky_view:Q(o.show_sky_view,D.show_sky_view),show_events:Q(o.show_events,D.show_events),show_moon_times:Q(o.show_moon_times,D.show_moon_times),show_footer:Q(o.show_footer,D.show_footer),twilight_level:be(o.twilight_level,zt.twilightLevel,D.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:c,longitude:u},errors:e,warnings:n}}function Do(i,t){let e=Xt(i.minimal_mode);return i.card_height==="auto"?y(ao(t),e[0],e[1]):y(i.card_height,e[0],e[1])}function or(i,t,e,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},l={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},c={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:t,location:o,locationName:"",extras:sr(t,Co(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:l,events:c,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function Co(i){return i==="de"?"de-DE":"en-GB"}function sr(i,t){return{timeZoneLongName:zn(i,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null}}function rr(i,t){let e=vn(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function ar(i,t,e){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=oo[n-1];return q(e,"folkName",{name:q(e,o)})}function Ao(i,t,e,n){return i?{time:i,azimuth:Ie(i,t,"moon"),dayOffset:te(i,n)-te(e,n)}:null}function lr(i){if(typeof i!="string"||i.trim()==="")return null;let t=new Date(i);return Number.isNaN(t.getTime())?null:t}var To=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],cr={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function ur(i,t,e){let n=So(t?.config?.time_zone),o=[],s=xn(t?.config?.latitude)?t.config.latitude:null,r=xn(t?.config?.longitude)?t.config.longitude:null,l=i.latitude??s,c=i.longitude??r,u=It(i.language,t?.locale?.language??t?.language);if(l===null||c===null)return or(e,n,["missing-location",...o],u);let d={latitude:l,longitude:c},h=i.location_name.trim()!==""?i.location_name.trim():t?.config?.location_name??"",p=Qt(e,n),f=ko(e,n),v=bn(d,p,f),E=Re(e,d),M=E.altitude,w=fn(e.getTime()+6e4,d),b=At(e,d),x=ze(e),N=Bi(e,d),$=t?.states?.[i.entity];$||o.push("missing-sun-entity");let C={...v.events},U={};if($?.attributes)for(let[_,I]of To){let st=lr($.attributes[I]),Et=v.events[_];if(st&&st>=p&&st<f&&(!Et||Math.abs(st.getTime()-Et.getTime())<=io)){C[_]=st,U[_]="ha";continue}U[_]=Et?"computed":"none"}else for(let[_]of To)U[_]=v.events[_]?"computed":"none";for(let _ of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])U[_]=v.events[_]?"computed":"none";let j=$?.attributes?mt($.attributes.elevation):null,Y=$?.attributes?mt($.attributes.azimuth):null,B=i.moon_entity?t?.states?.[i.moon_entity]:void 0,S=B&&typeof B.state=="string"?cr[B.state]??null:null,A=i.show_moon?Ki(d,p,f,N):null,L=[],O=900*1e3;for(let _=p.getTime();_<=f.getTime();_+=O){let I=Re(_,d);L.push({altitude:I.altitude,azimuth:I.azimuth})}let z=null;C.sunrise&&C.sunset&&(z=(C.sunset.getTime()-C.sunrise.getTime())/6e4);let G=Qt(new Date(p.getTime()-720*60*1e3),n),J=bn(d,G,p),nt=J.events.sunrise&&J.events.sunset?(J.events.sunset.getTime()-J.events.sunrise.getTime())/6e4:null,_t=z!==null&&nt!==null?z-nt:null,X=Vi(e),pt={timeZoneLongName:zn(n,Co(u),e),previousDaylightMinutes:nt,daylightDeltaMinutes:_t,sunBelowHorizon:M<0?Math.abs(M):null,sunriseAzimuth:C.sunrise?Ie(C.sunrise,d,"sun"):null,sunsetAzimuth:C.sunset?Ie(C.sunset,d,"sun"):null,nextFullMoon:X,nextFullMoonDays:X?Math.round((X.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:X?rr(X.time,n):!1,moonFolkName:ar(X?.time??null,n,u),moonDistance:Zi(e,d,14),moonRise:Ao(N.nextRise??N.previousRise,d,e,n),moonSet:Ao(N.nextSet??N.previousSet,d,e,n)};return v.polar==="polar-day"&&o.push("polar-day"),v.polar==="polar-night"&&o.push("polar-night"),C.sunrise||o.push("no-sunrise-today"),C.sunset||o.push("no-sunset-today"),!C.civilDawn&&!C.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:v,sun:{altitude:M,azimuth:E.azimuth,phase:ji(M),rising:w>M,haElevation:j,haAzimuth:Y},moon:{position:b,phase:x,events:N,haPhaseName:S},sunTrack:L,moonPath:A,events:C,eventSources:U,extras:pt,daylightMinutes:z,issues:o,fatal:!1}}var ee=new Map;function dr(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level].join("|")}function hr(i,t){if(!t)return"-";let e=t.states?.[i.entity],n=i.moon_entity?t.states?.[i.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function No(i,t,e){let n=Math.floor(e.getTime()/6e4),o=[dr(i),hr(i,t),n,e.getTimezoneOffset()].join("#"),s=ee.get(o);if(s)return s;let r=ur(i,t,e);if(ee.size>24){let l=ee.keys().next().value;l!==void 0&&ee.delete(l)}return ee.set(o,r),r}function Lo(){ee.clear()}var Ho=Te`
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
    gap: 4px;
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
    gap: 1px;
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
`,Po=Te`
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
`;function Zn(i,t){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var Ft=class extends ht{setConfig(t){this._config={...t}}get _language(){return It(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return q(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,o]of Object.entries(t)){let s=D[n];o===s&&n in D&&delete e[n]}this._config=e,Zn(this,e)}render(){if(!this._config)return T``;let t=this._config.card_height,e=t==="auto"||t===null,n=this._config.minimal_mode===!0,o=Xt(n),s=typeof t=="number"?t:D.card_height,r=this._config.latitude===void 0||this._config.latitude===null;return T`
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
                @input=${l=>this._update({card_height:Number(l.target.value)})}
              />
              <input
                id="height-number"
                type="number"
                aria-label=${this._t("editorCardHeight")}
                min="${o[0]}"
                max="${o[1]}"
                .value=${String(s)}
                ?disabled=${e}
                @change=${l=>{let c=mt(l.target.value);c!==null&&this._update({card_height:Math.round(y(c,o[0],o[1]))})}}
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
                  @change=${l=>this._update({card_height:l.target.checked?"auto":D.card_height})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          <div class="row">
            <label for="theme">${this._t("editorThemeMode")}</label>
            <div class="control">
              <select
                id="theme"
                .value=${this._value("theme_mode","auto")}
                @change=${l=>this._update({theme_mode:l.target.value})}
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
                @change=${l=>this._update({card_style:l.target.value})}
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
                @change=${l=>this._update({time_format:l.target.value})}
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
                @change=${l=>this._update({language:l.target.value})}
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
                @change=${l=>this._update({twilight_level:l.target.value})}
              >
                <option value="civil">${this._t("editorTwilightCivil")}</option>
                <option value="nautical">${this._t("editorTwilightNautical")}</option>
                <option value="astronomical">${this._t("editorTwilightAstronomical")}</option>
                <option value="all">${this._t("editorTwilightAll")}</option>
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
                  @change=${l=>this._update({animations:l.target.checked})}
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
                  @change=${l=>this._update({compact_mode:l.target.checked})}
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
                  @change=${l=>this._update({minimal_mode:l.target.checked})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>
          ${n?T`<div class="row">
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
                        @change=${l=>this._update({minimal_show_times:l.target.checked})}
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
                        @change=${l=>this._update({minimal_show_zenith:l.target.checked})}
                      />
                      <span class="slider"></span>
                    </span>
                  </div>
                </div>`:k}
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
                @change=${l=>this._update({entity:l.target.value.trim()})}
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
                @change=${l=>this._update({moon_entity:l.target.value.trim()})}
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
                  @change=${l=>{if(l.target.checked){let u={...this._config};delete u.latitude,delete u.longitude,this._config=u,Zn(this,u)}else this._update({latitude:a(this.hass?.config?.latitude??0,4),longitude:a(this.hass?.config?.longitude??0,4)})}}
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
                @change=${l=>{let c=mt(l.target.value);this._update({latitude:c===null?void 0:y(c,-90,90)})}}
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
                @change=${l=>{let c=mt(l.target.value);this._update({longitude:c===null?void 0:y(c,-180,180)})}}
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
                @change=${l=>this._update({location_name:l.target.value})}
              />
            </div>
          </div>
        </div>

        <div class="section">
          <div class="row">
            <span class="hint">
              ${this._t("editorCardHeight")}: ${o[0]}–${o[1]} px (Standard
              ${D.card_height} px, mindestens
              ${n?Dn:120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height,e=Xt(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<e[0]||t>e[1])?T`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:e[0],max:e[1]})}
      </span>`:k}_switch(t,e){let n=D[t];return T`
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
    `}_reset(){let t=We();this._config=t,Zn(this,t)}};Ft.styles=Po,dt([Vt({attribute:!1})],Ft.prototype,"hass",2),dt([Zt()],Ft.prototype,"_config",2),Ft=dt([Ne(no)],Ft);var xt=class extends ht{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._popup=null;this._hassSignature="";this._onPopupKeydown=e=>{e.key==="Escape"&&this._popup&&(e.stopPropagation(),this._closeDetails())}}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return We()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=It(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=Eo(e,n);if(s.length>0)throw new Error(s[0]);r.length>0&&console.warn(`[sun-moon-card] ${r.join(" ")}`),this._config=o,Lo()}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}updated(e){let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),n=typeof this._config.card_height=="number"?this._config.card_height:0,o=y(n||D.card_height,Cn[0],Cn[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",q(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:"min(92vw, 620px)",maxWidth:"620px",maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let l=document.createElement("button");l.type="button",l.setAttribute("aria-label",q(e,"popupClose")),l.textContent="\u2715",Object.assign(l.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),l.addEventListener("click",()=>this._closeDetails());let c=this._config,u={...c,latitude:c.latitude??void 0,longitude:c.longitude??void 0,location_name:c.location_name??void 0,minimal_mode:!1,card_height:o},d=document.createElement(En);d.hass=this.hass;try{d.setConfig(u)}catch{}r.append(d,l),s.append(r),s.addEventListener("click",h=>{h.target===s&&this._closeDetails()}),document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,l.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_handleMinimalKey(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDetails())}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,Xi()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let o=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Do(this._config,this._width||400):D.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return It(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return T``;let n=this._width||400,o=this._resolvedHeight(),s=ro(o,n,e),r=No(e,this.hass,new Date),l=this._language(),c=this._isDark(),u=c?Nn:Ln;if(r.fatal)return T`
        <ha-card
          class=${$t({"smc-dark":c,"smc-light":!c,"smc-minimal":s.minimal})}
          style=${K({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${wo(18)}</span>
              <span>${q(l,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=fo(l,this._locale(),r.timeZone,uo(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?T`
        <ha-card
          class=${$t({"smc-dark":c,"smc-light":!c,"smc-minimal":!0})}
          style=${K({height:`${o}px`})}
          role="button"
          tabindex="0"
          aria-label=${this._minimalAriaLabel(r,d)}
          @click=${this._openDetails}
          @keydown=${this._handleMinimalKey}
        >
          <div
            class=${$t({root:!0,minimal:!0})}
            style=${K({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
          >
            ${this._renderMinimalTimes(r,d,s,e)}
            <div
              class="chart-wrap minimal"
              style=${K({height:`${s.chartHeight}px`})}
            >
              ${Un({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:!1,minimal:!0,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:T`
      <ha-card
        class=${$t({"smc-dark":c,"smc-light":!c})}
        style=${K({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${$t({root:!0,compact:s.compact})}
          style=${K({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,u,s):k}

          <div
            class=${$t({body:!0,columns:s.skyViewSide})}
            style=${K({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?T`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${K({height:`${s.chartHeight}px`})}
                  >
                    ${Un({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):k}
                </div>`:k}
            ${s.skyViewSide?T`<div
                  class="sky-column"
                  style=${K({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${Kn({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:u,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:te(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth)}
                </div>`:k}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):k}
          ${s.showDetails?this._renderDetails(r,d,e,s,l,c,n):k}
          ${s.showFooter?this._renderFooter(r,d,e,s):k}
        </div>
      </ha-card>
    `}_renderHeader(e,n,o,s){let r=e.locationName||n.t("title"),l=e.extras,c=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),u=10.5,d=(b,x=!1)=>b.length*u*.58+20+(x?12:0),p=Math.max(0,c-10-108),f=n.t(this._phaseKey(e)),v=d(f,!0);p-=v;let E=k;if(e.daylightMinutes!==null){let b=po(e.daylightMinutes),x=l.daylightDeltaMinutes===null?"":` ${mo(l.daylightDeltaMinutes,n.locale)}`,N=`${n.t("dayLength")} ${b}${x}`,$=d(N);$<=p&&(p-=$,E=T`<span class="meta-chip" title=${n.t("dayLength")}
          >${N}</span
        >`)}let M=k,w=d(l.timeZoneLongName);return w<=p&&(p-=w,M=T`<span class="meta-chip">${l.timeZoneLongName}</span>`),T`
      <div class="header" style=${K({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${ho(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${E}${M}
          <span class="phase-chip" title=${f}>
            <span
              class="phase-dot"
              style=${K({background:this._phaseColor(e,o)})}
            ></span>
            ${f}
          </span>
        </div>
      </div>
    `}_renderLegend(e,n){return T`
      <div class="legend" aria-hidden="true" style=${K({height:`${n}px`})}>
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
    `}_renderSkyReadout(e,n,o){let s=this._config,r=[],l=(c,u,d)=>{let h=ot(u,1,n.locale),p=`${Math.round(d)}\xB0 ${Ot(d,n.language)}`;return T`<span
        title=${`${n.t("elevation")} ${h} \xB7 ${n.t("azimuth")} ${p}`}
        >${n.t("positionReadout",{body:c,altitude:h,degrees:String(Math.round(d)),direction:Ot(d,n.language)})}</span
      >`};return s.show_sun&&r.push(l(n.t("sun"),e.sun.altitude,e.sun.azimuth)),s.show_moon&&r.push(l(n.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth)),r.length===0||o<150?k:T`<div class="sky-readout">${r}</div>`}_renderFooter(e,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil";return T`
      <div class="footer" style=${K({height:`${s.footerHeight}px`})}>
        <span class="part">${n.t(r)} · ${e.extras.timeZoneLongName}</span>
        <span class="part">${n.t("footerMethod")}</span>
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,o,s=.7){for(let r of e)if(r&&r.length*o*s<=n)return r;return null}_renderEvents(e,n,o){let{compact:s,padding:r}=o,l=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),c=this._config,u=[];if(c.show_twilight&&u.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:Bn(s?14:16),missingText:n.t("noEvent")}),u.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:bo(s?14:16),missingText:n.t("noSunrise")}),u.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:vo(s?14:16),missingText:n.t("noSunset")}),c.show_twilight&&u.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:jn(s?14:16),missingText:n.t("noEvent")}),c.twilight_level==="all"||c.show_astronomical_details){let w=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[b,x,N]of w)u.push({key:b,kind:N,label:n.t(b),shortLabel:n.t(b),time:x,icon:N==="dawn"?Bn(s?13:15):jn(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=l<300?3:l<420?4:l<560?6:8,h=u.slice(0,Math.max(2,d)),p=6,v=Math.max(40,l-2*r-p*(h.length-1))/h.length-10,E=s?v<120?8.5:9:v<92?8.5:9.5,M=v<74?11:v<96?12:12.5;return T`
      <div
        class="events"
        style=${K({gap:`${p}px`,height:`${o.eventsHeight}px`})}
      >
        ${h.map(w=>{let b=this._fitLabel([w.label,w.shortLabel],v,E),x=w.time?et(w.time,n):w.missingText,N=this._fitLabel([x,"\u2014"],v,M)??"\u2014";return T`
            <div
              class=${$t({"event-tile":!0,[w.kind]:!0,secondary:!!w.secondary,compact:s})}
              title=${`${w.label}: ${x}`}
            >
              <span class="event-head">
                <span class="event-icon">${w.icon}</span>
                <span
                  class=${$t({"event-time":!0,missing:!w.time})}
                  style=${K({fontSize:`${M}px`})}
                >
                  ${N}
                </span>
                ${s&&b?T`<span
                      class="event-label"
                      style=${K({fontSize:`${E}px`})}
                      >${b}</span
                    >`:k}
              </span>
              ${!s&&b?T`<span
                    class="event-label"
                    style=${K({fontSize:`${E}px`})}
                    >${b}</span
                  >`:k}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,o,s,r,l,c){let u=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&c>=430,p=(o.show_sun?1:0)+(o.show_moon?1:0)+(h?1:0),v=Math.max(60,c-2*s.padding-8*Math.max(0,p-1))/Math.max(1,p)-20-26-9,E=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],v,10.5),M=ot(e.sun.altitude,1,n.locale),w=`${Math.round(e.sun.azimuth)}\xB0 ${Ot(e.sun.azimuth,r)}`,b=u.sunBelowHorizon!==null?`${ot(u.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,x=this._fitLabel([b?`${b} \xB7 ${w}`:`${n.t("azimuth")} ${w}`,b??w,w],v,9.5),N=u.sunriseAzimuth!==null?`${Math.round(u.sunriseAzimuth)}\xB0 ${Ot(u.sunriseAzimuth,r)}`:null,$=u.sunsetAzimuth!==null?`${Math.round(u.sunsetAzimuth)}\xB0 ${Ot(u.sunsetAzimuth,r)}`:null,C=o.show_astronomical_details&&N&&$?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:N,set:$}),`${Math.round(u.sunriseAzimuth)}\xB0 / ${Math.round(u.sunsetAzimuth)}\xB0`],v,9.5):null,U=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?et(e.events.solarNoon,n):"\u2014"} \xB7 ${ot(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?et(e.events.solarNoon,n):null],v,9.5):null,j=this._fitLabel([n.t(d),n.t("moon")],v,10.5),Y=go(e.moon.phase.illumination,n.locale),B=this._fitLabel([`${Y} ${n.t("illumination")}`,Y],v,13),S=e.moon.position.apparentAltitude,A=ot(S,1,n.locale),L=`${Math.round(e.moon.position.azimuth)}\xB0 ${Ot(e.moon.position.azimuth,r)}`,O=`${n.t("elevation")} ${A} \xB7 ${n.t("azimuth")} ${L}`,z=S>=0?[`${n.t("elevation")} ${A} \xB7 ${L}`,`${A} \xB7 ${L}`,A]:[`${ot(Math.abs(S),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${L}`,`${ot(Math.abs(S),1,n.locale)} ${n.t("belowHorizon")}`,A],G=null,J="";if(u.moonDistance){let{current:V,min:rt,max:gt}=u.moonDistance,Mt=Math.max(1,gt-rt),Gt=V<=rt+Mt*.2,ve=V>=rt+Mt*.8,Dt=Ke(V,n.locale),ne=Gt?n.t("nearPerigee"):ve?n.t("nearApogee"):"";J=`${n.t("moonDistance")}: ${Dt} \xB7 ${n.t("distanceRange",{min:Ke(rt,n.locale),max:Ke(gt,n.locale)})}`,G=this._fitLabel(ne?[`${Dt} \xB7 ${ne}`,Dt]:[Dt],v,9.5)}let nt=this._fitLabel(G?z.flatMap(V=>[`${V} \xB7 ${G}`,V]):z,v,9.5),_t=G!==null&&(nt?.includes(G)??!1),X=null,pt="";if(o.show_astronomical_details&&u.nextFullMoon){let V=u.nextFullMoonDays??0,rt=V<=0?n.t("dayToday"):n.t("inDays",{days:String(V)}),gt=`${n.t("nextFullMoon")} ${rt}`,Mt=u.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",Gt=`${gt}${Mt}${u.moonFolkName?` \xB7 ${u.moonFolkName}`:""}`;pt=u.blueMoon?n.t("blueMoonHint"):u.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),X=this._fitLabel([Gt,`${gt}${Mt}`,gt],v,9.5)}let _=o.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],v,9.5):null,I=[];nt&&I.push({text:nt,title:O,position:!0}),_&&I.push({text:_,title:null}),X&&I.push({text:X,title:pt}),G&&!_t&&I.push({text:G,title:J});let st=I.slice(0,s.detailsHeight>=Pn?3:2),Et=_t||st.some(V=>V.text===G),Ut=G&&!Et?J||G:null;return T`
      <div
        class="details"
        style=${K({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?T`
              <div class="detail-tile sun">
                <span class="detail-icon">${$o(20,l?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${E?T`<span class="detail-title">${E}</span>`:k}
                  <span class="detail-value">${M}</span>
                  ${x?T`<span class="detail-sub">${x}</span>`:k}
                  ${U?T`<span class="detail-sub">${U}</span>`:k}
                  ${C?T`<span class="detail-sub">${C}</span>`:k}
                </span>
              </div>
            `:k}
        ${o.show_moon?T`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Jt({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${j?T`<span class="detail-title">${j}</span>`:k}
                  ${B?T`<span class="detail-value">${B}</span>`:k}
                  ${st.map(V=>{let rt=[V.title,V.position?Ut:null].filter(Boolean).join(" \xB7 ")||null;return T`<span class="detail-sub" title=${rt??k}
                      >${V.text}</span
                    >`})}
                </span>
              </div>
            `:k}
        ${h?T`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${Kn({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:l?Nn:Ln,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:te(e.now,e.timeZone)})}
                </span>
              </div>
            `:k}
      </div>
    `}_moonTimesText(e,n,o){let s=e.extras.moonRise,r=e.extras.moonSet,l=s&&s.dayOffset!==0?` ${On(s.dayOffset,n.t)}`:"",c=s?`\u2191 ${et(s.time,n)}${l}`:"\u2191 \u2014";if(o)return c;let u=r&&r.dayOffset!==0?` ${On(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${et(r.time,n)}${u}`:"\u2193 \u2014";return`${c} \xB7 ${d}`}_renderMinimalTimes(e,n,o,s){if(o.minimalTimesHeight<=0)return k;let r=n.t,l=[];if(s.minimal_show_times&&e.events.sunrise){let u=et(e.events.sunrise,n);l.push(T`<span class="minimal-time rise" title=${`${r("sunrise")} ${u}`}
          >↑ ${u}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let u=et(e.events.solarNoon,n),d=o.chartWidth<250?u:`${r("zenith")} ${u}`;l.push(T`<span class="minimal-time zenith" title=${`${r("zenith")} ${u}`}
          >${d}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let u=et(e.events.sunset,n);l.push(T`<span class="minimal-time set" title=${`${r("sunset")} ${u}`}
          >↓ ${u}</span
        >`)}if(l.length===0)return k;let c=y(a(o.minimalTimesHeight*.78,1),8,12);return T`<div
      class="minimal-times"
      style=${K({height:`${o.minimalTimesHeight}px`,fontSize:`${c}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${l}
    </div>`}_minimalAriaLabel(e,n){let o=[this._ariaLabel(e,n)];return o.push(`${n.t("sun")} ${ot(e.sun.altitude,0,n.locale)}`),o.push(n.t("popupOpenHint")),o.join(", ")}_ariaLabel(e,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${n.t("sunrise")} ${et(e.events.sunrise,n)}`),e.events.sunset&&o.push(`${n.t("sunset")} ${et(e.events.sunset,n)}`),o.join(", ")}};xt.styles=Ho,dt([Vt({attribute:!1})],xt.prototype,"hass",2),dt([Zt()],xt.prototype,"_config",2),dt([Zt()],xt.prototype,"_width",2),dt([Zt()],xt.prototype,"_tick",2),xt=dt([Ne(En)],xt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${Ge}`)||window.customCards.push({type:`custom:${Ge}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{xt as SunMoonCard};
