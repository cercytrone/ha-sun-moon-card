var hs=Object.defineProperty;var ms=Object.getOwnPropertyDescriptor;var mt=(i,t,e,n)=>{for(var o=n>1?void 0:n?ms(t,e):t,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(t,e,o):r(o))||o);return n&&o&&hs(t,e,o),o};var Te=globalThis,Ee=Te.ShadowRoot&&(Te.ShadyCSS===void 0||Te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nn=Symbol(),wi=new WeakMap,ue=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==nn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ee&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=wi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&wi.set(e,t))}return t}toString(){return this.cssText}},xi=i=>new ue(typeof i=="string"?i:i+"",void 0,nn),De=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new ue(e,i,nn)},Mi=(i,t)=>{if(Ee)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=Te.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},on=Ee?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return xi(e)})(i):i;var{is:ps,defineProperty:gs,getOwnPropertyDescriptor:fs,getOwnPropertyNames:bs,getOwnPropertySymbols:ys,getPrototypeOf:vs}=Object,Ce=globalThis,ki=Ce.trustedTypes,$s=ki?ki.emptyScript:"",_s=Ce.reactiveElementPolyfillSupport,de=(i,t)=>i,he={toAttribute(i,t){switch(t){case Boolean:i=i?$s:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ne=(i,t)=>!ps(i,t),Si={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:Ne};Symbol.metadata??=Symbol("metadata"),Ce.litPropertyMetadata??=new WeakMap;var $t=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Si){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&gs(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=fs(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Si}static _$Ei(){if(this.hasOwnProperty(de("elementProperties")))return;let t=vs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(de("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(de("properties"))){let e=this.properties,n=[...bs(e),...ys(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(on(o))}else t!==void 0&&e.push(on(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Mi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:he).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:he;this._$Em=o;let a=r.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let r=this.constructor;if(o===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Ne)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};$t.elementStyles=[],$t.shadowRootOptions={mode:"open"},$t[de("elementProperties")]=new Map,$t[de("finalized")]=new Map,_s?.({ReactiveElement:$t}),(Ce.reactiveElementVersions??=[]).push("2.1.2");var dn=globalThis,Ai=i=>i,Le=dn.trustedTypes,Ti=Le?Le.createPolicy("lit-html",{createHTML:i=>i}):void 0,Hi="$lit$",At=`lit$${Math.random().toFixed(9).slice(2)}$`,Pi="?"+At,ws=`<${Pi}>`,Rt=document,pe=()=>Rt.createComment(""),ge=i=>i===null||typeof i!="object"&&typeof i!="function",hn=Array.isArray,xs=i=>hn(i)||typeof i?.[Symbol.iterator]=="function",sn=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ei=/-->/g,Di=/>/g,Ht=RegExp(`>|${sn}(?:([^\\s"'>=/]+)(${sn}*=${sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ci=/'/g,Ni=/"/g,Ri=/^(?:script|style|textarea|title)$/i,mn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),D=mn(1),f=mn(2),wr=mn(3),ct=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Li=new WeakMap,Pt=Rt.createTreeWalker(Rt,129);function zi(i,t){if(!hn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ti!==void 0?Ti.createHTML(t):t}var Ms=(i,t)=>{let e=i.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",r=me;for(let a=0;a<e;a++){let c=i[a],u,d,h=-1,p=0;for(;p<c.length&&(r.lastIndex=p,d=r.exec(c),d!==null);)p=r.lastIndex,r===me?d[1]==="!--"?r=Ei:d[1]!==void 0?r=Di:d[2]!==void 0?(Ri.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=Ht):d[3]!==void 0&&(r=Ht):r===Ht?d[0]===">"?(r=o??me,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?Ht:d[3]==='"'?Ni:Ci):r===Ni||r===Ci?r=Ht:r===Ei||r===Di?r=me:(r=Ht,o=void 0);let b=r===Ht&&i[a+1].startsWith("/>")?" ":"";s+=r===me?c+ws:h>=0?(n.push(u),c.slice(0,h)+Hi+c.slice(h)+At+b):c+At+(h===-2?a:b)}return[zi(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},fe=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,r=0,a=t.length-1,c=this.parts,[u,d]=Ms(t,e);if(this.el=i.createElement(u,n),Pt.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Pt.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Hi)){let p=d[r++],b=o.getAttribute(h).split(At),v=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:v[2],strings:b,ctor:v[1]==="."?an:v[1]==="?"?ln:v[1]==="@"?cn:Vt}),o.removeAttribute(h)}else h.startsWith(At)&&(c.push({type:6,index:s}),o.removeAttribute(h));if(Ri.test(o.tagName)){let h=o.textContent.split(At),p=h.length-1;if(p>0){o.textContent=Le?Le.emptyScript:"";for(let b=0;b<p;b++)o.append(h[b],pe()),Pt.nextNode(),c.push({type:2,index:++s});o.append(h[p],pe())}}}else if(o.nodeType===8)if(o.data===Pi)c.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(At,h+1))!==-1;)c.push({type:7,index:s}),h+=At.length-1}s++}}static createElement(t,e){let n=Rt.createElement("template");return n.innerHTML=t,n}};function jt(i,t,e=i,n){if(t===ct)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=ge(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=jt(i,o._$AS(i,t.values),o,n)),t}var rn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??Rt).importNode(e,!0);Pt.currentNode=o;let s=Pt.nextNode(),r=0,a=0,c=n[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new be(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new un(s,this,t)),this._$AV.push(u),c=n[++a]}r!==c?.index&&(s=Pt.nextNode(),r++)}return Pt.currentNode=Rt,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},be=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=jt(this,t,e),ge(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==ct&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&ge(this._$AH)?this._$AA.nextSibling.data=t:this.T(Rt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=fe.createElement(zi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new rn(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Li.get(t.strings);return e===void 0&&Li.set(t.strings,e=new fe(t)),e}k(t){hn(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new i(this.O(pe()),this.O(pe()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Ai(t).nextSibling;Ai(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Vt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(t,e=this,n,o){let s=this.strings,r=!1;if(s===void 0)t=jt(this,t,e,0),r=!ge(t)||t!==this._$AH&&t!==ct,r&&(this._$AH=t);else{let a=t,c,u;for(t=s[0],c=0;c<s.length-1;c++)u=jt(this,a[n+c],e,c),u===ct&&(u=this._$AH[c]),r||=!ge(u)||u!==this._$AH[c],u===w?t=w:t!==w&&(t+=(u??"")+s[c+1]),this._$AH[c]=u}r&&!o&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},an=class extends Vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}},ln=class extends Vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}},cn=class extends Vt{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=jt(this,t,e,0)??w)===ct)return;let n=this._$AH,o=t===w&&n!==w||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==w&&(n===w||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},un=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){jt(this,t)}};var ks=dn.litHtmlPolyfillSupport;ks?.(fe,be),(dn.litHtmlVersions??=[]).push("3.3.3");var Ii=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new be(t.insertBefore(pe(),s),s,void 0,e??{})}return o._$AI(i),o};var pn=globalThis,pt=class extends $t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ii(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ct}};pt._$litElement$=!0,pt.finalized=!0,pn.litElementHydrateSupport?.({LitElement:pt});var Ss=pn.litElementPolyfillSupport;Ss?.({LitElement:pt});(pn.litElementVersions??=[]).push("4.2.2");var He=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var As={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:Ne},Ts=(i=As,t,e)=>{let{kind:n,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){let{name:r}=e;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,c,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(n==="setter"){let{name:r}=e;return function(a){let c=this[r];t.call(this,a),this.requestUpdate(r,c,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function Zt(i){return(t,e)=>typeof e=="object"?Ts(i,t,e):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,t,e)}function qt(i){return Zt({...i,state:!0,attribute:!1})}var Re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ze=i=>(...t)=>({_$litDirective$:i,values:t}),Yt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var _t=ze(class extends Yt{constructor(i){if(super(i),i.type!==Re.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return ct}});var Oi="important",Es=" !"+Oi,B=ze(class extends Yt{constructor(i){if(super(i),i.type!==Re.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(Es);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?Oi:""):e[n]=o}}return ct}});var Fi=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Gi=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],Ui=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],gn=385000.49;var P=Math.PI/180,ut=180/Math.PI,Ds=1495978707e-1,Ki=6378.14,fn=-.833,Et=-6,zt=-12,It=-18,Bi=120*1e3;function ye(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Jt(i){return(i-2451545)/36525}function F(i){let t=i%360;return t<0?t+360:t}function Cs(i){let t=Jt(i);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function Ns(i){let t=i-2451545,e=Jt(i),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return F(n)}function bn(i){let t=Jt(i),e=F(280.46646+t*(36000.76983+t*3032e-7)),n=F(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*P)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*P)*(.019993-101e-6*t)+Math.sin(3*n*P)*289e-6,s=e+o,r=F(125.04-1934.136*t),a=s-.00569-.00478*Math.sin(r*P),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*P),d=a*P,h=u*P,p=F(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*ut),b=Math.asin(Math.sin(h)*Math.sin(d))*ut;return{ra:p,dec:b}}function Ls(i){let t=Jt(i),e=F(280.46646+t*(36000.76983+t*3032e-7)),n=F(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*P)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*P)*(.019993-101e-6*t)+Math.sin(3*n*P)*289e-6,s=F(125.04-1934.136*t);return F(e+o-.00569-.00478*Math.sin(s*P))}function Hs(i){let t=ye(i),e=Jt(t),n=F(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*P)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*P)*(.019993-101e-6*e)+Math.sin(3*n*P)*289e-6,r=(n+s)*P;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*Ds}function yn(i,t,e,n){let o=F(Ns(n)+e),s=F(o-i.ra),r=t*P,a=i.dec*P,c=s*P,u=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(c))*ut,d=F(Math.atan2(Math.sin(c),Math.cos(c)*Math.sin(r)-Math.tan(a)*Math.cos(r))*ut+180);return{altitude:u,azimuth:d}}function vn(i,t){let e=ye(i);return yn(bn(e),t.latitude,t.longitude,e).altitude}function Ie(i,t){let e=ye(i);return yn(bn(e),t.latitude,t.longitude,e)}function Ps(i){let t=i;return{D:F(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:F(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:F(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:F(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function ji(i){let t=Jt(i),e=F(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=Ps(t),o=e;for(let a of Fi){let c=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;o+=a[4]*Math.sin(c*P)}let s=0;for(let a of Gi){let c=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;s+=a[4]*Math.sin(c*P)}let r=gn;for(let a of Ui){let c=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;r+=a[4]*Math.cos(c*P)}return{longitude:F(o),latitude:s,distanceKm:r}}function Vi(i,t,e){let n=Cs(e)*P,o=i*P,s=t*P,r=F(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*ut),a=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*ut;return{ra:r,dec:a}}function Tt(i,t){let e=ye(i),n=ji(e),o=Vi(n.longitude,n.latitude,e),s=yn(o,t.latitude,t.longitude,e),r=Math.asin(Ki/n.distanceKm)*ut,a=s.altitude-r*Math.cos(s.altitude*P);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:n}}function Rs(i){return .7275*(Math.asin(Ki/i)*ut)-.5667}var zs=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],Is=29.530588853;function Oe(i){let t=ye(i),e=ji(t),n=Vi(e.longitude,e.latitude,t),o=bn(t),s=Ls(t),r=Hs(i),a=e.distanceKm,c=e.latitude*P,u=Math.acos(Math.min(1,Math.max(-1,Math.cos(c)*Math.cos((e.longitude-s)*P)))),d=Math.atan2(r*Math.sin(u),a-r*Math.cos(u)),h=F(d*ut),p=(1+Math.cos(d))/2,b=(o.ra-n.ra)*P,v=o.dec*P,C=n.dec*P,_=F(Math.atan2(Math.cos(v)*Math.sin(b),Math.sin(v)*Math.cos(C)-Math.cos(v)*Math.sin(C)*Math.cos(b))*ut),A=F(e.longitude-s)/360,g=Math.min(7,Math.floor(A*8+.5)%8),$=A*29.530588853;return{illumination:p,phaseAngle:h,elongation:u*ut,phaseIndex:g,phaseKey:zs[g],brightLimbAngle:_,moonAgeDays:$,waxing:A<.5,distanceKm:a}}function $n(i,t,e,n,o){let s=[];if(!(t>i))return s;let r=Math.max(2,Math.ceil((t-i)/e)),a=(t-i)/r,c=i,u=n(i)-o;for(let d=1;d<=r;d++){let h=i+d*a,p=n(h)-o;if(u===0)s.push({time:c,rising:p>0});else if(u<0&&p>=0||u>0&&p<=0){let b=c,v=h,C=u;for(let _=0;_<50&&v-b>1;_++){let A=(b+v)/2,g=n(A)-o;g<0&&C<0||g>0&&C>0?(b=A,C=g):v=A}s.push({time:(b+v)/2,rising:p>u})}c=h,u=p}return s}function Wi(i,t,e,n){let o=i.find(s=>s.rising===t&&s.time>=e&&s.time<n);return o?new Date(o.time):null}function _n(i,t,e,n=4){let o=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),a=e.getTime(),c=k=>vn(k,i),u=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let k=r;k<a;k+=d)u.push({time:k,altitude:c(k)});u.push({time:a,altitude:c(a)});let h=-1/0,p=1/0;for(let k of u)k.altitude>h&&(h=k.altitude),k.altitude<p&&(p=k.altitude);let b=[["sunrise","sunset",fn],["civilDawn","civilDusk",Et],["nauticalDawn","nauticalDusk",zt],["astronomicalDawn","astronomicalDusk",It]],v={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[k,x,G]of b){let V=$n(o,s,Bi,c,G);v[k]=Wi(V,!0,r,a),v[x]=Wi(V,!1,r,a)}let C=r,_=-1/0,A=120*1e3;for(let k=r;k<=a;k+=A){let x=c(k);x>_&&(_=x,C=k)}let g=Math.max(r,C-A),$=Math.min(a,C+A);for(let k=0;k<40&&$-g>1e3;k++){let x=g+($-g)/3,G=$-($-g)/3;c(x)<c(G)?g=x:$=G}v.solarNoon=new Date((g+$)/2);let N="none";return p>fn?N="polar-day":h<fn&&(N="polar-night"),{dayStart:t,dayEnd:e,samples:u,maxAltitude:h,minAltitude:p,events:v,polar:N}}function Os(i,t,e,n=10){let o=t.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),a=[];for(let d=o;d<s;d+=r)a.push({time:d,altitude:Tt(d,i).apparentAltitude});a.push({time:s,altitude:Tt(s,i).apparentAltitude});let c=-1/0,u=1/0;for(let d of a)d.altitude>c&&(c=d.altitude),d.altitude<u&&(u=d.altitude);return{samples:a,maxAltitude:c,minAltitude:u}}function Zi(i,t,e,n,o=10){let s=t.getTime(),r=e.getTime(),a=c=>{if(!c)return null;let u=c.getTime();return u>=s&&u<r?u:null};return{profile:Os(i,t,e,o),rise:a(n.previousRise)??a(n.nextRise),set:a(n.previousSet)??a(n.nextSet)}}function qi(i,t){let e=i.getTime(),n=e-1800*60*1e3,o=e+1800*60*1e3,r=$n(n,o,Bi,b=>{let v=Tt(b,t);return v.altitude-Rs(v.distanceKm)},0),a=r.filter(b=>b.rising),c=r.filter(b=>!b.rising),u=a.find(b=>b.time>e)??null,d=[...a].reverse().find(b=>b.time<=e)??null,h=c.find(b=>b.time>e)??null,p=[...c].reverse().find(b=>b.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:p?new Date(p.time):null,nextRise:u?new Date(u.time):null,nextSet:h?new Date(h.time):null}}function Yi(i){return i>0?"day":i>Et?"civil":i>zt?"nautical":i>It?"astronomical":"night"}function Fs(i){return(((Oe(i).moonAgeDays/Is-.5)%1+1)%1+.5)%1-.5}function wn(i,t){let e=typeof i=="number"?i:i.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?$n(e,n,360*60*1e3,Fs,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function Ji(i,t=32){let e=typeof i=="number"?i:i.getTime(),o=wn(e,e+t*24*60*60*1e3)[0];if(!o)return null;let s=Oe(o).illumination;return s<.98?null:{time:o,illumination:s}}function Xi(i,t,e=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,a=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,u=s,d=s;for(let h=s;h<=r;h+=o){let p=Tt(h,t).distanceKm;p<a&&(a=p,u=h),p>c&&(c=p,d=h)}return{current:Tt(n,t).distanceKm,min:a,minTime:new Date(u),max:c,maxTime:new Date(d),mean:gn}}function Fe(i,t,e="sun"){return(e==="sun"?Ie(i,t):Tt(i,t)).azimuth}function y(i,t,e){return Number.isNaN(i)?t:Math.min(e,Math.max(t,i))}function xn(i,t,e){return i+(t-i)*e}function l(i,t=0){let e=10**t;return Math.round(i*e)/e}function Qi(i){let t=i.trim().replace(/^#/,""),e=t.length===3?t.split("").map(o=>o+o).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]}function Gs(i){return`#${i.map(t=>Math.round(y(t,0,255)).toString(16).padStart(2,"0")).join("")}`}function Mn(i,t,e){let n=Qi(i),o=Qi(t);if(!n||!o)return t;let s=y(e,0,1);return Gs([xn(n[0],o[0],s),xn(n[1],o[1],s),xn(n[2],o[2],s)])}function kn(i){return typeof i=="number"&&Number.isFinite(i)}function rt(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let t=Number(i.replace(",","."));if(Number.isFinite(t))return t}return null}function to(i){return i.length===0?"":i.map((t,e)=>`${e===0?"M":"L"}${l(t.x,2)} ${l(t.y,2)}`).join(" ")}function Ge(i,t=.5){if(i.length<3)return to(i);let e=[`M${l(i[0].x,2)} ${l(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],a=i[n+2]??r,c=s.x+(r.x-o.x)/6*t*2,u=s.y+(r.y-o.y)/6*t*2,d=r.x-(a.x-s.x)/6*t*2,h=r.y-(a.y-s.y)/6*t*2;e.push(`C${l(c,2)} ${l(u,2)} ${l(d,2)} ${l(h,2)} ${l(r.x,2)} ${l(r.y,2)}`)}return e.join(" ")}function Ue(i,t,e=!1){if(i.length===0)return"";let n=e?Ge(i):to(i),o=i[0],s=i[i.length-1];return`${n} L${l(s.x,2)} ${l(t,2)} L${l(o.x,2)} ${l(t,2)} Z`}function wt(i,t,e){let n=e*Math.PI/180;return{x:i.x-t*Math.sin(n),y:i.y-t*Math.cos(n)}}function eo(i,t,e){let n=y(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${l(i.x-t,2)} ${l(i.y,2)} a${l(t,2)} ${l(t,2)} 0 1 1 ${l(t*2,2)} 0 a${l(t,2)} ${l(t,2)} 0 1 1 ${l(-t*2,2)} 0 Z`;let o=t*(1-2*n),s=1,r=o>0?0:1,a={x:i.x-t,y:i.y},c={x:i.x+t,y:i.y};return`M${l(a.x,2)} ${l(a.y,2)} A${l(t,2)} ${l(t,2)} 0 0 ${s} ${l(c.x,2)} ${l(c.y,2)} A${l(t,2)} ${l(Math.abs(o),4)} 0 0 ${r} ${l(a.x,2)} ${l(a.y,2)} Z`}function no(i=new Date){let t=i.getTime();return t+(6e4-t%6e4)+250}var Us=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Xt(i){let{size:t,illumination:e,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:c}=i,u={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=eo(u,d,e),p=r&&t>=26,b=l(-n,2);return f`
    <svg
      class="moon-disc ${a}"
      width="${l(t,1)}"
      height="${l(t,1)}"
      viewBox="0 0 ${l(t,1)} ${l(t,1)}"
      role="img"
      aria-hidden="true"
    >
      <circle
        cx="${l(u.x,2)}" cy="${l(u.y,2)}" r="${l(d,2)}"
        fill="${s}"
      />
      ${h?f`<g transform="rotate(${b} ${l(u.x,2)} ${l(u.y,2)})">
              <path d="${h}" fill="${o}" />
              ${p?f`<g clip-path="url(#${c}-clip)" opacity="0.16">
                      <clipPath id="${c}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${Us.map(v=>{let C={x:u.x+v.x*d,y:u.y+v.y*d};return f`<circle
                          cx="${l(C.x,2)}" cy="${l(C.y,2)}"
                          r="${l(v.r*d,2)}"
                          fill="#5a6488" />`})}
                    </g>`:f``}
            </g>`:f``}
      <circle
        cx="${l(u.x,2)}" cy="${l(u.y,2)}" r="${l(d,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function Sn(i,t,e,n){let o=wt(i,t,e),s=e*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),c=y(t*.12,4,9),u=y(t*.07,2.5,5),d={x:o.x+r*c,y:o.y+a*c},h={x:o.x-a*u,y:o.y+r*u},p={x:o.x+a*u,y:o.y-r*u};return f`
    <polygon
      points="${l(d.x,2)},${l(d.y,2)} ${l(h.x,2)},${l(h.y,2)} ${l(p.x,2)},${l(p.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var Ke="sun-moon-card",Nn="sun-moon-card",ro="sun-moon-card-editor";var Ln=24,Ws=16,An=4,Ks=12,Bs=36,ve=[2,12],Dt=[320,1200],Ct=[260,800];function Qt(i){return i?[Ln,800]:[120,800]}var T={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null},ao=1200*1e3,Hn={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},Pn={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},lo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],Rn=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Ot={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon"]},co=700,js=260,io=10,Cn=56,Vs=84,Zs=96,Tn=74,qs=Cn+8,Ys=12,Js=10,et=4,We=4,oo=30,so=44,Xs=26,Qs=72,zn=96,En=20,Dn=18;function uo(i,t,e){if(e.minimal_mode){let R=(e.minimal_show_times||e.minimal_show_zenith)&&i>=Bs?Ks:0,O=Math.max(Ws,i-2*An-R);return{padding:An,minimalTimesHeight:R,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,t-2*An),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:O,minimal:!0,compact:!1}}let n=e.compact_mode,o=n?Js:Ys,s=Math.max(40,i-2*o),r=0,a=e.show_footer&&!n?En+et:0,c=oo+et+so+et+a+(Dn+We)+Tn,u=e.show_header&&!n&&s>=c,d=u?oo:0;s-=d,u&&(s-=et,r+=et);let h=n?Xs:so,p=e.show_events&&s-(h+et)-a>=Vs,b=p?h:0;s-=b,p&&(s-=et,r+=et);let v=e.show_astronomical_details?zn:Qs,C=!n&&(e.show_sun||e.show_moon)&&s-(v+et)-a>=Zs,_=C?v:0;s-=_,C&&(s-=et,r+=et);let A=e.show_footer&&!n&&p&&s-(En+et)>=qs,g=A?En:0;s-=g,A&&(s-=et,r+=et);let $=Math.max(Cn,s),N=e.show_day_chart&&!n&&p&&$-Dn-We>=Tn,k=N?Dn:0;N&&(r+=We);let x=Math.max(Cn,$-k-(N?We:0)),G=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),V=G&&t>=co&&x>=Tn,Q=Math.max(80,t-2*o),U=V?Math.round(Math.min(js,(Q-io)/3)):0,it=Math.max(120,V?Q-io-U:Q);return{padding:o,showHeader:u,showEvents:p,showDetails:C,showFooter:A,showLegend:N,skyViewSide:V,skyViewInline:!V&&G&&C,skyViewWidth:U,chartWidth:it,gaps:r,headerHeight:d,eventsHeight:b,detailsHeight:_,footerHeight:g,legendHeight:k,chartHeight:x,minimal:!1,minimalTimesHeight:0,compact:n}}function ho(i){return i>=co?360:320}function Be(){return{type:`custom:${Ke}`,card_height:340}}var In={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function j(i,t,e){let o=(In[i]??In.en)[t]??In.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function Ft(i,t){return((i&&i!=="auto"?i:t)??"").toLowerCase().startsWith("de")?"de":"en"}function go(i,t,e){let n=i;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var mo=new Map;function On(i,t,e){let n=`${t}|${i}`,o=mo.get(n);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(t,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(c=>c.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return mo.set(n,s),s}var po=new Map;function tr(i,t,e){let n=`${i}|${t}|${e}`,o=po.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}po.set(n,o)}return o}function nt(i,t){return tr(t.locale,t.timeZone,t.hour12).format(i)}function fo(i,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function Fn(i,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}catch{return i.toFixed(t)}}function st(i,t=1,e="de-DE"){return`${Fn(i,t,e)}\xB0`}function je(i,t="de-DE"){return`${Fn(Math.round(i),0,t)} km`}function bo(i,t="de-DE"){let e=i<0?"\u2212":"+",n=Math.round(Math.abs(i)),o=Math.floor(n/60),s=n%60,r=t.startsWith("de")?":":"h ",a=t.startsWith("de")?"":"m";return`${e}${o}${r}${String(s).padStart(2,"0")}${a}`}function yo(i){let t=Math.max(0,Math.round(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function Gn(i,t){return t(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function vo(i,t="de-DE"){return`${Fn(i*100,0,t)} %`}function Gt(i,t){let e=(i%360+360)%360,n=Rn[0],o=1/0;for(let r of Rn){let a=Math.abs((e-r.deg+540)%360-180);a<o&&(o=a,n=r)}let s=`dir${n.key}`;return j(t,s)}function $o(i,t,e,n){return{language:i,locale:t,timeZone:e,hour12:n,t:(o,s)=>j(i,o,s)}}function _o(i,t){if(i.length<=t)return i;let e=i.length/t,n=[];for(let s=0;s<t;s++)n.push(i[Math.floor(s*e)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function er(i,t,e,n,o){if(i.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),a,c;if(s!==void 0&&r!==void 0&&r>s)a=n(s),c=n(r);else if(e==="polar-day")a=i[0].x,c=i[i.length-1].x;else return null;let u=i.filter(d=>d.x>=a-.5&&d.x<=c+.5);return u.length<2?null:{path:Ue(u,o,!0),cx:(a+c)/2,cy:o,r:Math.max(6,(c-a)/2)}}function nr(i,t){let e=t?Math.max(i.maxAltitude,t.maxAltitude):i.maxAltitude,n=t?Math.min(i.minAltitude,t.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(e-o)*.1),r=y(e+s,-18,90.5);return[y(Math.max(-28,n-2),-90,r-6),r]}function Un(i,t,e=2.2){let n=[0,Et,zt,It],o=[t.day,t.civil,t.nautical,t.astronomical,t.night];if(i>e/2){let s=y(1-i/12,0,1)*.5;return Mn(t.day,t.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+e/2,a=n[s]-e/2;if(i>=r)return o[s];if(i>a){let c=(r-i)/e;return Mn(o[s],o[s+1],c*c*(3-2*c))}}return o[o.length-1]}function ir(i,t,e,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,a=t+e*(1-r);o.push({offset:r,color:Un(a,i)})}return o}function or(i,t,e,n,o,s){let r=i.samples;if(r.length<2)return[];let a=[],c=(d,h)=>{d&&!Number.isNaN(d.getTime())&&a.push({time:d.getTime(),color:h})};c(t.astronomicalDawn,e.astronomical),c(t.nauticalDawn,e.nautical),c(t.civilDawn,e.civil),c(t.sunrise,e.glow),c(t.solarNoon,e.day),c(t.sunset,e.glow),c(t.civilDusk,e.civil),c(t.nauticalDusk,e.nautical),c(t.astronomicalDusk,e.astronomical);let u=[{offset:0,color:Un(r[0].altitude,e)},...a.map(d=>({offset:y((n(d.time)-o)/s,0,1),color:d.color})),{offset:1,color:Un(r[r.length-1].altitude,e)}];return u.sort((d,h)=>d.offset-h.offset),u}function Wn(i){let{profile:t,events:e,now:n,width:o,height:s,palette:r,format:a,showSun:c,showMoon:u,moon:d,moonPath:h,showTwilight:p,twilightLevel:b,animations:v,cardStyle:C,minimal:_,sunMarkerSize:A,uid:g,showAstronomicalLayers:$,currentAltitude:N}=i,k=Math.max(_?60:120,o),x=Math.max(_?12:56,s),G=_?2:4,V=_?2:4,Q=_?2:6,U=!_&&x>=112,it=U?y(l(x*.13,1),13,20):0,S=G,M=Math.max(10,k-G-V),R=Q,O=Math.max(10,x-Q-it),H=R+O,[Z,tt]=nr(t,h?.profile??null),Mt=Math.max(1,tt-Z),J=t.dayStart.getTime(),gt=t.dayEnd.getTime(),E=Math.max(1,gt-J),I=m=>S+(m-J)/E*M,q=m=>H-(y(m,-95,95)-Z)/Mt*O,ft=q(0),Ve=y(Math.round(M/1.6),60,361),W=_o(t.samples,Ve).map(m=>({x:I(m.time),y:q(m.altitude)})),at=ir(r,Z,Mt),dt=or(t,e,r,I,S,M),kt=`${g}-area`,Wt=`${g}-line`,_e=`${g}-clip`,Nt=`${g}-glow`,ie=`${g}-sky`,Qn=`${g}-soft`,ti=`${g}-soft-fade`,ei=`${g}-foot`,ni=`${g}-foot-fade`,ii=`${g}-side`,oi=`${g}-side-fade`,ht=C==="horizon",Fo=Ue(W,ht?l(ft,2):H+1,!0),Go=Ge(W),si=h?_o(h.profile.samples,y(Math.round(M/2),40,240)).map(m=>({x:I(m.time),y:q(m.altitude)})):null,Ze=si&&!_?Ge(si):null,qe="var(--smc-moon-line, #cbd5e1)",Uo=y(l(x*.013,2),1.1,1.9),Wo=Ue(W,R-1,!0),oe=C==="flat"?.6:ht?.3:1,Ko=ht?0:l(.15*oe,3),bt=R-1,Ye=H+1,St=Math.max(1,Ye-bt),Bo=y(O*.14,_?1.5:6,18),jo=y(O*.08,_?1:4,12),Vo=y(M*.02,_?2:6,14),ri=y(l(O*.06,1),_?1.5:4,10),Zo=l(y(Bo/St,0,.45),4),ai=l(1-y(jo/St,0,.45),4),Kt=S-1,we=S+M+1,li=l(y(Vo/Math.max(1,we-Kt),0,.4),4),qo=Math.max(16,M*.16),Yo=y(O*.45,9,46),xe=[];O>=34&&(e.sunrise&&xe.push({id:`${g}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&xe.push({id:`${g}-glow-set`,time:e.sunset,color:r.glow}));let Bt=_?null:er(W,e,t.polar,I,ft),ci=`${g}-dome`,Y=a.t,se=[],re=m=>{m.time&&!Number.isNaN(m.time.getTime())&&se.push({secondary:!1,...m})};if(e.sunrise&&re({key:"sunrise",time:e.sunrise,label:Y("sunrise"),shortLabel:Y("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&re({key:"sunset",time:e.sunset,label:Y("sunset"),shortLabel:Y("sunsetShort"),kind:"sunset",altitude:0}),p&&(e.civilDawn&&re({key:"civilDawn",time:e.civilDawn,label:Y("civilDawn"),shortLabel:Y("civilDawnShort"),kind:"dawn",altitude:Et}),e.civilDusk&&re({key:"civilDusk",time:e.civilDusk,label:Y("civilDusk"),shortLabel:Y("civilDuskShort"),kind:"dusk",altitude:Et}),b==="all"||$)){let m=[["nauticalDawn","dawn","nauticalDawn",zt],["nauticalDusk","dusk","nauticalDusk",zt],["astronomicalDawn","dawn","astronomicalDawn",It],["astronomicalDusk","dusk","astronomicalDusk",It]];for(let[L,z,K,ot]of m){let ce=e[L];ce&&re({key:L,time:ce,label:Y(K),shortLabel:Y(K),kind:z,altitude:ot,secondary:!0})}}se.sort((m,L)=>m.time.getTime()-L.time.getTime());let Me=y(l(x*.062,1),7.5,10.5),Je=y(l(Me+5,1),11,it||15),Jo=se.filter(m=>!m.secondary),Xo=se.filter(m=>m.secondary),Qo=M<240?3:M<340?4:6,ui=_?[]:[...Jo,...Xo].slice(0,Math.max(2,Qo)).sort((m,L)=>m.time.getTime()-L.time.getTime()),ts=ui.length>3||M<300,Xe=[],Qe=-1/0;for(let m of ui){let L=ts?m.shortLabel:m.label,z=L.length*Me*.56+8,K=I(m.time.getTime());K=y(K,S+z/2,S+M-z/2),K-z/2<Qe+3&&(K=Qe+3+z/2),!(K+z/2>S+M+.5)&&(Qe=K+z/2,Xe.push({x:K,width:z,text:L,secondary:m.secondary}))}let yt=y(I(n.getTime()),S,S+M),es=r.day,Lt=y(l(x*.16,1),Math.min(2.8,A),A),di=y(l(Lt*.22,2),.8,1.4),vt=y(l(Lt*1.1,1),3.5,7),hi=(m,L)=>O<=L*2?R+O/2:y(q(m),R+L,H-L),mi=hi(N,Lt),lt=u&&d&&!_?{altitude:d.altitude,y:hi(d.altitude,vt),clamped:d.altitude<Z||d.altitude>tt}:null,ns=lt?Math.abs(lt.y-mi):Number.POSITIVE_INFINITY,tn=Lt+vt+2,ae=lt?ns>=Lt+vt+1?yt:yt+tn+vt<=S+M?yt+tn:Math.max(S+vt,yt-tn):null,is=v?"smc-pulse":"",os=v?`url(#${Nt})`:"",en=[{altitude:0,label:Y("horizon"),key:"horizon"}];$||b==="all"?en.push({altitude:Et,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:zt,label:`${Y("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:It,label:`${Y("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):p&&en.push({altitude:Et,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"});let ss=!_&&O>=86&&M>=250,rs=en.filter(m=>(!_||m.key==="horizon")&&m.altitude>Z+.5&&m.altitude<tt-.5),as=y(l(x*.055,1),7.5,9.5),le=e.solarNoon,pi=!_&&!!le&&t.maxAltitude>0&&O>=104&&M>=220&&$,gi=pi?`${Y("zenith")} ${nt(le,a)} \xB7 ${st(t.maxAltitude,1,a.locale)}`:"",ke=y(l(x*.055,1),7.5,9.5),Se=gi.length*ke*.56+10,fi=le?y(I(le.getTime()),S+Se/2,S+M-Se/2):0,bi=le?q(t.maxAltitude):0,Ae=ke+5,yi=y(bi-Ae-4,R,Math.max(R,bi+10)),vi=_?1:M<220?4:M<420?6:8,$i=[];for(let m=1;m<vi;m++)$i.push(S+M*m/vi);return f`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(k,1)} ${l(x,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${Y("title")}"
    >
      <defs>
        <linearGradient id="${kt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(R,1)}" x2="0" y2="${l(H,1)}">
          ${at.map(m=>f`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color}" />`)}
        </linearGradient>
        <linearGradient id="${Wt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(R,1)}" x2="0" y2="${l(H,1)}">
          ${at.map(m=>f`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${dt.length>=2?f`<linearGradient id="${ie}" gradientUnits="userSpaceOnUse"
                x1="${l(S,1)}" y1="0" x2="${l(S+M,1)}" y2="0">
                ${dt.map(m=>f`<stop offset="${l(m.offset*100,3)}%" stop-color="${m.color}" />`)}
              </linearGradient>`:f``}
        ${xe.map(m=>f`<radialGradient id="${m.id}">
              <stop offset="0%" stop-color="${m.color}" stop-opacity="${l(.5*oe,3)}" />
              <stop offset="45%" stop-color="${m.color}" stop-opacity="${l(.2*oe,3)}" />
              <stop offset="100%" stop-color="${m.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${Bt?f`<radialGradient id="${ci}" gradientUnits="userSpaceOnUse"
                cx="${l(Bt.cx,1)}" cy="${l(Bt.cy,1)}" r="${l(Bt.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${l(.3*oe,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${l(.18*oe,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:f``}
        <linearGradient id="${ti}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(bt,1)}" x2="0" y2="${l(Ye,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Zo}" stop-color="#ffffff" />
          <stop offset="${ai}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Qn}" maskUnits="userSpaceOnUse"
          x="${l(S-2,1)}" y="${l(bt,1)}"
          width="${l(M+4,1)}" height="${l(St,1)}">
          <rect
            x="${l(S-2,1)}" y="${l(bt,1)}"
            width="${l(M+4,1)}" height="${l(St,1)}"
            fill="url(#${ti})" />
        </mask>
        <linearGradient id="${ni}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(bt,1)}" x2="0" y2="${l(Ye,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${ai}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ei}" maskUnits="userSpaceOnUse"
          x="${l(S-2,1)}" y="${l(bt,1)}"
          width="${l(M+4,1)}" height="${l(St,1)}">
          <rect
            x="${l(S-2,1)}" y="${l(bt,1)}"
            width="${l(M+4,1)}" height="${l(St,1)}"
            fill="url(#${ni})" />
        </mask>
        <linearGradient id="${oi}" gradientUnits="userSpaceOnUse"
          x1="${l(Kt,1)}" y1="0" x2="${l(we,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${li}" stop-color="#ffffff" />
          <stop offset="${l(1-li,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ii}" maskUnits="userSpaceOnUse"
          x="${l(Kt,1)}" y="${l(bt,1)}"
          width="${l(we-Kt,1)}" height="${l(St,1)}">
          <rect
            x="${l(Kt,1)}" y="${l(bt,1)}"
            width="${l(we-Kt,1)}" height="${l(St,1)}"
            fill="url(#${oi})" />
        </mask>
        <clipPath id="${_e}">
          <rect x="${l(S-1,1)}" y="${l(R-2,1)}"
            width="${l(M+2,1)}" height="${l(O+4,1)}"
            rx="${ri}" ry="${ri}" />
        </clipPath>
        ${v?f`<filter id="${Nt}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${l(Lt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:f``}
      </defs>

      <g clip-path="url(#${_e})">
        ${$i.map(m=>f`<line x1="${l(m,1)}" y1="${l(R,1)}" x2="${l(m,1)}" y2="${l(H,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${ii})">
        <path d="${Fo}" fill="url(#${kt})" opacity="0.9" mask="url(#${ei})" />
        <g mask="url(#${Qn})">
          ${dt.length>=2&&!ht?f`<path d="${Wo}" fill="url(#${ie})" opacity="${Ko}" />`:f``}
          ${xe.map(m=>{let L=y(I(m.time.getTime()),S,S+M),z=y(ft,R,H);return f`<ellipse
                cx="${l(L,1)}" cy="${l(z,1)}"
                rx="${l(qo,1)}" ry="${l(Yo,1)}"
                fill="url(#${m.id})" />`})}
          ${Bt&&!ht?f`<path d="${Bt.path}" fill="url(#${ci})" opacity="0.95" />`:f``}
        </g>
        </g>
        ${Ze?f`<path
                class="moon-curve"
                data-body="moon"
                d="${Ze}"
                fill="none"
                stroke="${qe}"
                stroke-width="${Uo}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${ht?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:f``}
        ${h&&Ze?f`<g class="moon-events">
                ${[[h.rise,"moonrise"],[h.set,"moonset"]].filter(m=>m[0]!==null).map(([m,L])=>{let z=y(I(m),S,S+M),K=y(q(0),R,H),ot=y(l(x*.05,1),4,8);return f`<g>
                      <title>${a.t(L)} ${nt(new Date(m),a)}</title>
                      <line
                        x1="${l(z,1)}"
                        y1="${l(K-ot,1)}"
                        x2="${l(z,1)}"
                        y2="${l(K+ot,1)}"
                        stroke="${qe}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${l(z,1)}"
                        cy="${l(K,1)}"
                        r="${y(l(x*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${qe}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:f``}
        <path
          d="${Go}"
          fill="none"
          stroke="url(#${Wt})"
          stroke-width="${y(l(x*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${rs.map(m=>{let L=q(m.altitude),z=m.key==="horizon";return f`<g>
            <line
              x1="${l(S,1)}" y1="${l(L,1)}"
              x2="${l(S+M,1)}" y2="${l(L,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${z&&ht?1.5:z?1:.6}"
              stroke-dasharray="${z&&ht?"999 0":z?"3 3":"2 4"}"
              opacity="${z&&ht?.9:z?.6:ht?.3:.45}"
            />
            ${ss?f`<text
                    x="${l(S+3,1)}"
                    y="${l(L-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${as}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${m.label}</text>`:f``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${se.map(m=>{let L=y(I(m.time.getTime()),S,S+M),z=y(q(m.altitude),R,H),K=!m.secondary,ot=K?y(l(x*.022,1),1.8,3):1.4,ce="var(--smc-marker-strong, rgba(255,255,255,0.9))",_i="var(--smc-marker-soft, rgba(255,255,255,0.55))",ls=m.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":m.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":m.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",cs=K?ls:_i,us=K?ce:_i,ds=m.kind==="sunrise"||m.kind==="sunset"?f`
                <circle cx="${l(L,1)}" cy="${l(z,1)}" r="${ot+1}"
                  fill="${m.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${l(L-ot*2.6,1)}"
                  y1="${l(m.kind==="sunrise"?z+ot+2:z-ot-2,1)}"
                  x2="${l(L+ot*2.6,1)}"
                  y2="${l(m.kind==="sunrise"?z+ot+2:z-ot-2,1)}"
                  stroke="${ce}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:f`<circle cx="${l(L,1)}" cy="${l(z,1)}" r="${ot}"
                  fill="${us}" opacity="0.85" />`;return f`<g>
            <line
              x1="${l(L,1)}" y1="${l(R,1)}"
              x2="${l(L,1)}" y2="${l(H,1)}"
              stroke="${cs}" stroke-width="${K?1:.7}"
              stroke-dasharray="3 3" opacity="${K?.5:.25}" />
            ${ds}
          </g>`})}
      </g>

      <g class="now-marker">
        <line
          x1="${l(yt,1)}" y1="${l(R,1)}"
          x2="${l(yt,1)}" y2="${l(H,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${y(l(x*.012,2),1,1.8)}"
          opacity="0.85" />
        ${c?f`<g class="now-sun ${is}" filter="${os}">
                <title>${a.t("chartSunNow",{altitude:st(N,1,a.locale)})}</title>
                <circle
                  cx="${l(yt,1)}"
                  cy="${l(mi,1)}"
                  r="${Lt}"
                  fill="${es}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${di}"
                />
              </g>`:f``}
        ${lt&&ae!==null&&d?f`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:st(lt.altitude,1,a.locale)})}${lt.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${ae===yt?f``:f`<line
                        x1="${l(yt,1)}"
                        y1="${l(lt.y,1)}"
                        x2="${l(ae,1)}"
                        y2="${l(lt.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${l(ae,1)}"
                  cy="${l(lt.y,1)}"
                  r="${l(vt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${di}" />
                <g
                  transform="translate(${l(ae-vt,1)} ${l(lt.y-vt,1)})"
                  opacity="${lt.clamped?.6:1}"
                >
                  ${Xt({size:l(vt*2,1),illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${g}-moon-now`})}
                </g>
              </g>`:f``}
      </g>

      ${pi?f`<g class="zenith-chip">
              <rect
                x="${l(fi-Se/2,1)}"
                y="${l(yi,1)}"
                width="${l(Se,1)}"
                height="${l(Ae,1)}"
                rx="${l(Ae/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${l(fi,1)}"
                y="${l(yi+Ae/2+ke*.36,1)}"
                text-anchor="middle"
                font-size="${ke}"
                fill="var(--smc-label-color, #ffffff)"
              >${gi}</text>
            </g>`:f``}

      ${U?f`<line
              x1="${l(S,1)}" y1="${l(H+.5,1)}"
              x2="${l(S+M,1)}" y2="${l(H+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:f``}

      ${Xe.length?f`<g class="event-labels" font-size="${Me}">
              ${Xe.map(m=>{let L=U?H+2:R;return f`<g>
                  <rect
                    x="${l(m.x-m.width/2,1)}"
                    y="${l(L,1)}"
                    width="${l(m.width,1)}"
                    height="${l(Je,1)}"
                    rx="${l(Je/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${m.secondary?.6:.88}" />
                  <text
                    x="${l(m.x,1)}"
                    y="${l(L+Je/2+Me*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${m.secondary?.75:1}"
                  >${m.text}</text>
                </g>`})}
            </g>`:f``}
    </svg>
  `}function Kn(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function sr(i,t,e){let n=[];for(let o=0;o<t;o++){let s=Math.sqrt(Kn(i*7.13+o*1.37))*e*.96,r=Kn(i*3.71+o*2.11)*360,a=wt({x:0,y:0},s,r),c=Kn(i*5.19+o*4.53);n.push({x:a.x,y:a.y,r:.35+c*.75,opacity:.16+c*.34})}return n}function Bn(i,t){return y((90-i)/90*t,0,t)}function jn(i){let{width:t,height:e,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:c,palette:u,format:d,animations:h,uid:p,showCardinals:b=!0,seed:v=0}=i,C=Math.max(80,t),_=Math.max(80,e),A=6,g={x:C/2,y:_/2},$=Math.max(10,Math.min(C,_)/2-A),N=`${p}-dome`,k=`${p}-dome-clip`,x=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],G=y(l($*.17,1),7,11),V=n?n.altitude>0:!1,Q=y(l($*.11,1),4,11),U=n?wt(g,Bn(n.altitude,$),n.azimuth):null,it=a&&n&&U,S=o?o.altitude>0:!1,M=y(l($*.24,1),10,22),R=o?wt(g,Bn(o.altitude,$),o.azimuth):null,O=c&&o&&R&&r,H=b&&$>=42,Z=y(l($*.14,1),6.5,9),tt=[{altitude:30,radius:$*(60/90)},{altitude:60,radius:$*(30/90)}],J=(n?.altitude??-90)<-6?sr(Math.max(1,Math.round(v)),46,$):[],gt=s.filter(E=>E.altitude>=-8).map(E=>wt(g,Bn(E.altitude,$),E.azimuth));return f`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(C,1)} ${l(_,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${N}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${u.skyTop}" />
          <stop offset="100%" stop-color="${u.skyBottom}" />
        </radialGradient>
        <clipPath id="${k}">
          <circle cx="${l(g.x,1)}" cy="${l(g.y,1)}" r="${l($,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${l(g.x,1)}" cy="${l(g.y,1)}" r="${l($,1)}"
        fill="url(#${N})" opacity="0.55" />

      <g clip-path="url(#${k})">
        ${J.length?f`<g class="stars">
                ${J.map(E=>f`<circle
                      cx="${l(g.x+E.x,1)}"
                      cy="${l(g.y+E.y,1)}"
                      r="${l(E.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${l(E.opacity,2)}" />`)}
              </g>`:f``}
        ${tt.map(E=>f`<circle
              cx="${l(g.x,1)}" cy="${l(g.y,1)}" r="${l(E.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${l(g.x-$,1)}" y1="${l(g.y,1)}"
          x2="${l(g.x+$,1)}" y2="${l(g.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${l(g.x,1)}" y1="${l(g.y-$,1)}"
          x2="${l(g.x,1)}" y2="${l(g.y+$,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${gt.length>1?f`<path
                d="M${gt.map(E=>`${l(E.x,1)} ${l(E.y,1)}`).join(" L")}"
                fill="none"
                stroke="${u.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:f``}
      </g>

      <circle
        cx="${l(g.x,1)}" cy="${l(g.y,1)}" r="${l($,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${H?f`<g
              font-size="${Z}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${tt.map(E=>{let I=wt(g,E.radius,45);return f`<text
                  x="${l(I.x,1)}"
                  y="${l(I.y+Z*.35,1)}"
                >${E.altitude}°</text>`})}
            </g>`:f``}

      ${b?f`<g font-size="${G}" fill="var(--smc-muted-color)" opacity="0.7">
              ${x.map(E=>{let I=wt(g,$*.87,E.azimuth);return f`<text
                  x="${l(I.x,1)}"
                  y="${l(I.y+G*.35,1)}"
                  text-anchor="middle"
                >${E.key}</text>`})}
            </g>`:f``}

      ${it&&V&&U?f`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${l(U.x,1)}" cy="${l(U.y,1)}" r="${Q}"
                fill="${u.lineDay}" opacity="0.28" />
              <circle
                cx="${l(U.x,1)}" cy="${l(U.y,1)}" r="${l(Q*.55,1)}"
                fill="${u.lineDay}" />
            </g>`:f``}
      ${a&&n&&!V?Sn(g,$,n.azimuth,u.lineNight):f``}

      ${O&&S&&R&&r?f`<g transform="translate(${l(R.x-M/2,1)} ${l(R.y-M/2,1)})">
              ${Xt({size:M,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:M>=16,uid:`${p}-moon`})}
            </g>`:f``}
      ${c&&o&&!S?Sn(g,$,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):f``}
    </svg>
  `}function wo(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function xo(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Vn(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Zn(i=16,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Mo(i=20,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function ko(i=18,t="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var So=new Map;function Ao(i){let t=So.get(i);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),So.set(i,t)),t}function rr(i){try{return Ao(i)}catch{return Ao("UTC")}}function qn(i,t){let e=rr(t).formatToParts(i),n={};for(let o of e)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function To(i,t){let e=qn(i,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function ar(i,t,e,n=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,t-1,e,n,o,s),c=1440*60*1e3,u=[To(new Date(a-c),r),To(new Date(a+c),r)],d=[...new Set(u)].map(p=>a-p).filter(p=>{let b=qn(new Date(p),r);return b.year===i&&b.month===t&&b.day===e&&b.hour===n&&b.minute===o&&b.second===s}).sort((p,b)=>p-b);if(d.length>0)return new Date(d[0]);let h=Math.min(...u);return new Date(a-h)}function te(i,t){let e=qn(i,t);return ar(e.year,e.month,e.day,0,0,0,t)}function Eo(i,t){let e=te(i,t);return te(new Date(e.getTime()+2160*60*1e3),t)}function ee(i,t){return Math.round(te(i,t).getTime()/(1440*60*1e3))}function Do(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function X(i,t){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:t}function $e(i,t,e){return typeof i=="string"&&t.includes(i)?i:e}function Yn(i,t,e,n,o,s=0){let r=rt(i);if(r===null)return t;let a=y(r,e[0],e[1]);return Math.abs(a-r)>1e-9&&o.push(j(n,"invalidRange",{value:String(i),min:String(e[0]),max:String(e[1])})),s===0?Math.round(a):l(a,s)}function Lo(i,t="en"){let e=[],n=[],o=i??{},s=X(o.minimal_mode,T.minimal_mode),r=Qt(s),a=T.card_height;if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(y(o.card_height,r[0],r[1])),a!==o.card_height&&n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let b=rt(o.card_height);b===null?e.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(y(b,r[0],r[1]))}let c=null,u=null,d=rt(o.latitude),h=rt(o.longitude);return d!==null&&(d>=-90&&d<=90?c=d:n.push(j(t,"invalidNumber",{value:String(o.latitude)}))),h!==null&&(h>=-180&&h<=180?u=h:n.push(j(t,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():T.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():T.moon_entity,card_height:a,show_sun:X(o.show_sun,T.show_sun),show_moon:X(o.show_moon,T.show_moon),show_twilight:X(o.show_twilight,T.show_twilight),show_astronomical_details:X(o.show_astronomical_details,T.show_astronomical_details),compact_mode:X(o.compact_mode,T.compact_mode),minimal_mode:s,minimal_show_times:X(o.minimal_show_times,T.minimal_show_times),minimal_show_zenith:X(o.minimal_show_zenith,T.minimal_show_zenith),sun_marker_size:Yn(o.sun_marker_size,T.sun_marker_size,ve,t,n,1),popup_width:Yn(o.popup_width,T.popup_width,Dt,t,n),popup_height:Yn(o.popup_height,T.popup_height,Ct,t,n),card_style:$e(o.card_style,Ot.cardStyle,T.card_style),theme_mode:$e(o.theme_mode,Ot.themeMode,T.theme_mode),animations:X(o.animations,T.animations),time_format:$e(o.time_format,Ot.timeFormat,T.time_format),language:$e(o.language,Ot.language,T.language),show_header:X(o.show_header,T.show_header),show_day_chart:X(o.show_day_chart,T.show_day_chart),show_sky_view:X(o.show_sky_view,T.show_sky_view),show_events:X(o.show_events,T.show_events),show_moon_times:X(o.show_moon_times,T.show_moon_times),show_footer:X(o.show_footer,T.show_footer),twilight_level:$e(o.twilight_level,Ot.twilightLevel,T.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:c,longitude:u},errors:e,warnings:n}}function Ho(i,t){let e=Qt(i.minimal_mode);return i.card_height==="auto"?y(ho(t),e[0],e[1]):y(i.card_height,e[0],e[1])}function lr(i,t,e,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},c={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:t,location:o,locationName:"",extras:cr(t,Po(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:c,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function Po(i){return i==="de"?"de-DE":"en-GB"}function cr(i,t){return{timeZoneLongName:On(i,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null}}function ur(i,t){let e=wn(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function dr(i,t,e){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=lo[n-1];return j(e,"folkName",{name:j(e,o)})}function Co(i,t,e,n){return i?{time:i,azimuth:Fe(i,t,"moon"),dayOffset:ee(i,n)-ee(e,n)}:null}function hr(i){if(typeof i!="string"||i.trim()==="")return null;let t=new Date(i);return Number.isNaN(t.getTime())?null:t}var No=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],mr={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function pr(i,t,e){let n=Do(t?.config?.time_zone),o=[],s=kn(t?.config?.latitude)?t.config.latitude:null,r=kn(t?.config?.longitude)?t.config.longitude:null,a=i.latitude??s,c=i.longitude??r,u=Ft(i.language,t?.locale?.language??t?.language);if(a===null||c===null)return lr(e,n,["missing-location",...o],u);let d={latitude:a,longitude:c},h=i.location_name.trim()!==""?i.location_name.trim():t?.config?.location_name??"",p=te(e,n),b=Eo(e,n),v=_n(d,p,b),C=Ie(e,d),_=C.altitude,A=vn(e.getTime()+6e4,d),g=Tt(e,d),$=Oe(e),N=qi(e,d),k=t?.states?.[i.entity];k||o.push("missing-sun-entity");let x={...v.events},G={};if(k?.attributes)for(let[E,I]of No){let q=hr(k.attributes[I]),ft=v.events[E];if(q&&q>=p&&q<b&&(!ft||Math.abs(q.getTime()-ft.getTime())<=ao)){x[E]=q,G[E]="ha";continue}G[E]=ft?"computed":"none"}else for(let[E]of No)G[E]=v.events[E]?"computed":"none";for(let E of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])G[E]=v.events[E]?"computed":"none";let V=k?.attributes?rt(k.attributes.elevation):null,Q=k?.attributes?rt(k.attributes.azimuth):null,U=i.moon_entity?t?.states?.[i.moon_entity]:void 0,it=U&&typeof U.state=="string"?mr[U.state]??null:null,S=i.show_moon?Zi(d,p,b,N):null,M=[],R=900*1e3;for(let E=p.getTime();E<=b.getTime();E+=R){let I=Ie(E,d);M.push({altitude:I.altitude,azimuth:I.azimuth})}let O=null;x.sunrise&&x.sunset&&(O=(x.sunset.getTime()-x.sunrise.getTime())/6e4);let H=te(new Date(p.getTime()-720*60*1e3),n),Z=_n(d,H,p),tt=Z.events.sunrise&&Z.events.sunset?(Z.events.sunset.getTime()-Z.events.sunrise.getTime())/6e4:null,Mt=O!==null&&tt!==null?O-tt:null,J=Ji(e),gt={timeZoneLongName:On(n,Po(u),e),previousDaylightMinutes:tt,daylightDeltaMinutes:Mt,sunBelowHorizon:_<0?Math.abs(_):null,sunriseAzimuth:x.sunrise?Fe(x.sunrise,d,"sun"):null,sunsetAzimuth:x.sunset?Fe(x.sunset,d,"sun"):null,nextFullMoon:J,nextFullMoonDays:J?Math.round((J.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:J?ur(J.time,n):!1,moonFolkName:dr(J?.time??null,n,u),moonDistance:Xi(e,d,14),moonRise:Co(N.nextRise??N.previousRise,d,e,n),moonSet:Co(N.nextSet??N.previousSet,d,e,n)};return v.polar==="polar-day"&&o.push("polar-day"),v.polar==="polar-night"&&o.push("polar-night"),x.sunrise||o.push("no-sunrise-today"),x.sunset||o.push("no-sunset-today"),!x.civilDawn&&!x.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:v,sun:{altitude:_,azimuth:C.azimuth,phase:Yi(_),rising:A>_,haElevation:V,haAzimuth:Q},moon:{position:g,phase:$,events:N,haPhaseName:it},sunTrack:M,moonPath:S,events:x,eventSources:G,extras:gt,daylightMinutes:O,issues:o,fatal:!1}}var ne=new Map;function gr(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level].join("|")}function fr(i,t){if(!t)return"-";let e=t.states?.[i.entity],n=i.moon_entity?t.states?.[i.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function Ro(i,t,e){let n=Math.floor(e.getTime()/6e4),o=[gr(i),fr(i,t),n,e.getTimezoneOffset()].join("#"),s=ne.get(o);if(s)return s;let r=pr(i,t,e);if(ne.size>24){let a=ne.keys().next().value;a!==void 0&&ne.delete(a)}return ne.set(o,r),r}function zo(){ne.clear()}var Io=De`
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
`,Oo=De`
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
`;function Jn(i,t){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var Ut=class extends pt{setConfig(t){this._config={...t}}get _language(){return Ft(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return j(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,o]of Object.entries(t)){let s=T[n];o===s&&n in T&&delete e[n]}this._config=e,Jn(this,e)}render(){if(!this._config)return D``;let t=this._config.card_height,e=t==="auto"||t===null,n=this._config.minimal_mode===!0,o=Qt(n),s=typeof t=="number"?t:T.card_height,r=this._config.latitude===void 0||this._config.latitude===null;return D`
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
                @change=${a=>{let c=rt(a.target.value);c!==null&&this._update({card_height:Math.round(y(c,o[0],o[1]))})}}
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
                  @change=${a=>this._update({card_height:a.target.checked?"auto":T.card_height})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          ${this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",T.sun_marker_size),min:ve[0],max:ve[1],step:.5,digits:1,set:a=>this._update({sun_marker_size:a})})}

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
          ${n?D`<div class="row">
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
                ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",T.popup_width),min:Dt[0],max:Dt[1],step:20,set:a=>this._update({popup_width:Math.round(a)})})}
                ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",T.popup_height),min:Ct[0],max:Ct[1],step:20,set:a=>this._update({popup_height:Math.round(a)})})}`:w}
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
                .value=${this._value("entity",T.entity)}
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
                .value=${this._value("moon_entity",T.moon_entity)}
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
                  @change=${a=>{if(a.target.checked){let u={...this._config};delete u.latitude,delete u.longitude,this._config=u,Jn(this,u)}else this._update({latitude:l(this.hass?.config?.latitude??0,4),longitude:l(this.hass?.config?.longitude??0,4)})}}
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
                @change=${a=>{let c=rt(a.target.value);this._update({latitude:c===null?void 0:y(c,-90,90)})}}
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
                @change=${a=>{let c=rt(a.target.value);this._update({longitude:c===null?void 0:y(c,-180,180)})}}
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
              ${T.card_height} px, mindestens
              ${n?Ln:120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_numberRow(t){let{id:e,labelKey:n,value:o,min:s,max:r,step:a,digits:c=0,set:u}=t,d=h=>String(c===0?Math.round(h):l(h,c));return D`
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
            @input=${h=>u(Number(h.target.value))}
          />
          <input
            id="${e}-number"
            type="number"
            aria-label=${this._t(n)}
            min=${s}
            max=${r}
            step=${a}
            .value=${d(o)}
            @change=${h=>{let p=rt(h.target.value);p!==null&&u(y(p,s,r))}}
          />
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height,e=Qt(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<e[0]||t>e[1])?D`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:e[0],max:e[1]})}
      </span>`:w}_switch(t,e){let n=T[t];return D`
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
    `}_reset(){let t=Be();this._config=t,Jn(this,t)}};Ut.styles=Oo,mt([Zt({attribute:!1})],Ut.prototype,"hass",2),mt([qt()],Ut.prototype,"_config",2),Ut=mt([He(ro)],Ut);var xt=class extends pt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._popup=null;this._hassSignature="";this._onPopupKeydown=e=>{e.key==="Escape"&&this._popup&&(e.stopPropagation(),this._closeDetails())}}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Be()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=Ft(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=Lo(e,n);if(s.length>0)throw new Error(s[0]);r.length>0&&console.warn(`[sun-moon-card] ${r.join(" ")}`),this._config=o,zo()}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}updated(e){let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),n=y(this._config.popup_width,Dt[0],Dt[1]),o=y(this._config.popup_height,Ct[0],Ct[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",j(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",j(e,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let c=this._config,u={...c,latitude:c.latitude??void 0,longitude:c.longitude??void 0,location_name:c.location_name??void 0,minimal_mode:!1,card_height:o},d=document.createElement(Nn);d.hass=this.hass;try{d.setConfig(u)}catch{}r.append(d,a),s.append(r),s.addEventListener("click",h=>{h.target===s&&this._closeDetails()}),document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_handleMinimalKey(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDetails())}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,no()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let o=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Ho(this._config,this._width||400):T.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return Ft(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return D``;let n=this._width||400,o=this._resolvedHeight(),s=uo(o,n,e),r=Ro(e,this.hass,new Date),a=this._language(),c=this._isDark(),u=c?Hn:Pn;if(r.fatal)return D`
        <ha-card
          class=${_t({"smc-dark":c,"smc-light":!c,"smc-minimal":s.minimal})}
          style=${B({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${ko(18)}</span>
              <span>${j(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=$o(a,this._locale(),r.timeZone,go(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?D`
        <ha-card
          class=${_t({"smc-dark":c,"smc-light":!c,"smc-minimal":!0})}
          style=${B({height:`${o}px`})}
          role="button"
          tabindex="0"
          aria-label=${this._minimalAriaLabel(r,d)}
          @click=${this._openDetails}
          @keydown=${this._handleMinimalKey}
        >
          <div
            class=${_t({root:!0,minimal:!0})}
            style=${B({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
          >
            ${this._renderMinimalTimes(r,d,s,e)}
            <div
              class="chart-wrap minimal"
              style=${B({height:`${s.chartHeight}px`})}
            >
              ${Wn({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:!1,minimal:!0,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:D`
      <ha-card
        class=${_t({"smc-dark":c,"smc-light":!c})}
        style=${B({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${_t({root:!0,compact:s.compact})}
          style=${B({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,u,s):w}

          <div
            class=${_t({body:!0,columns:s.skyViewSide})}
            style=${B({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?D`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${B({height:`${s.chartHeight}px`})}
                  >
                    ${Wn({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):w}
                </div>`:w}
            ${s.skyViewSide?D`<div
                  class="sky-column"
                  style=${B({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${jn({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:u,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:ee(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth)}
                </div>`:w}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):w}
          ${s.showDetails?this._renderDetails(r,d,e,s,a,c,n):w}
          ${s.showFooter?this._renderFooter(r,d,e,s):w}
        </div>
      </ha-card>
    `}_renderHeader(e,n,o,s){let r=e.locationName||n.t("title"),a=e.extras,c=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),u=10.5,d=(g,$=!1)=>g.length*u*.58+20+($?12:0),p=Math.max(0,c-10-108),b=n.t(this._phaseKey(e)),v=d(b,!0);p-=v;let C=w;if(e.daylightMinutes!==null){let g=yo(e.daylightMinutes),$=a.daylightDeltaMinutes===null?"":` ${bo(a.daylightDeltaMinutes,n.locale)}`,N=`${n.t("dayLength")} ${g}${$}`,k=d(N);k<=p&&(p-=k,C=D`<span class="meta-chip" title=${n.t("dayLength")}
          >${N}</span
        >`)}let _=w,A=d(a.timeZoneLongName);return A<=p&&(p-=A,_=D`<span class="meta-chip">${a.timeZoneLongName}</span>`),D`
      <div class="header" style=${B({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${fo(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${C}${_}
          <span class="phase-chip" title=${b}>
            <span
              class="phase-dot"
              style=${B({background:this._phaseColor(e,o)})}
            ></span>
            ${b}
          </span>
        </div>
      </div>
    `}_renderLegend(e,n){return D`
      <div class="legend" aria-hidden="true" style=${B({height:`${n}px`})}>
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
    `}_renderSkyReadout(e,n,o){let s=this._config,r=[],a=(c,u,d)=>{let h=st(u,1,n.locale),p=`${Math.round(d)}\xB0 ${Gt(d,n.language)}`;return D`<span
        title=${`${n.t("elevation")} ${h} \xB7 ${n.t("azimuth")} ${p}`}
        >${n.t("positionReadout",{body:c,altitude:h,degrees:String(Math.round(d)),direction:Gt(d,n.language)})}</span
      >`};return s.show_sun&&r.push(a(n.t("sun"),e.sun.altitude,e.sun.azimuth)),s.show_moon&&r.push(a(n.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth)),r.length===0||o<150?w:D`<div class="sky-readout">${r}</div>`}_renderFooter(e,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil";return D`
      <div class="footer" style=${B({height:`${s.footerHeight}px`})}>
        <span class="part">${n.t(r)} · ${e.extras.timeZoneLongName}</span>
        <span class="part">${n.t("footerMethod")}</span>
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,o,s=.7){for(let r of e)if(r&&r.length*o*s<=n)return r;return null}_renderEvents(e,n,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),c=this._config,u=[];if(c.show_twilight&&u.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:Vn(s?14:16),missingText:n.t("noEvent")}),u.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:wo(s?14:16),missingText:n.t("noSunrise")}),u.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:xo(s?14:16),missingText:n.t("noSunset")}),c.show_twilight&&u.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:Zn(s?14:16),missingText:n.t("noEvent")}),c.twilight_level==="all"||c.show_astronomical_details){let A=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[g,$,N]of A)u.push({key:g,kind:N,label:n.t(g),shortLabel:n.t(g),time:$,icon:N==="dawn"?Vn(s?13:15):Zn(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=a<300?3:a<420?4:a<560?6:8,h=u.slice(0,Math.max(2,d)),p=6,v=Math.max(40,a-2*r-p*(h.length-1))/h.length-10,C=s?v<120?8.5:9:v<92?8.5:9.5,_=v<74?11:v<96?12:12.5;return D`
      <div
        class="events"
        style=${B({gap:`${p}px`,height:`${o.eventsHeight}px`})}
      >
        ${h.map(A=>{let g=this._fitLabel([A.label,A.shortLabel],v,C),$=A.time?nt(A.time,n):A.missingText,N=this._fitLabel([$,"\u2014"],v,_)??"\u2014";return D`
            <div
              class=${_t({"event-tile":!0,[A.kind]:!0,secondary:!!A.secondary,compact:s})}
              title=${`${A.label}: ${$}`}
            >
              <span class="event-head">
                <span class="event-icon">${A.icon}</span>
                <span
                  class=${_t({"event-time":!0,missing:!A.time})}
                  style=${B({fontSize:`${_}px`})}
                >
                  ${N}
                </span>
                ${s&&g?D`<span
                      class="event-label"
                      style=${B({fontSize:`${C}px`})}
                      >${g}</span
                    >`:w}
              </span>
              ${!s&&g?D`<span
                    class="event-label"
                    style=${B({fontSize:`${C}px`})}
                    >${g}</span
                  >`:w}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,o,s,r,a,c){let u=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&c>=430,p=(o.show_sun?1:0)+(o.show_moon?1:0)+(h?1:0),v=Math.max(60,c-2*s.padding-8*Math.max(0,p-1))/Math.max(1,p)-20-26-9,C=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],v,10.5),_=st(e.sun.altitude,1,n.locale),A=`${Math.round(e.sun.azimuth)}\xB0 ${Gt(e.sun.azimuth,r)}`,g=u.sunBelowHorizon!==null?`${st(u.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,$=this._fitLabel([g?`${g} \xB7 ${A}`:`${n.t("azimuth")} ${A}`,g??A,A],v,9.5),N=u.sunriseAzimuth!==null?`${Math.round(u.sunriseAzimuth)}\xB0 ${Gt(u.sunriseAzimuth,r)}`:null,k=u.sunsetAzimuth!==null?`${Math.round(u.sunsetAzimuth)}\xB0 ${Gt(u.sunsetAzimuth,r)}`:null,x=o.show_astronomical_details&&N&&k?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:N,set:k}),`${Math.round(u.sunriseAzimuth)}\xB0 / ${Math.round(u.sunsetAzimuth)}\xB0`],v,9.5):null,G=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?nt(e.events.solarNoon,n):"\u2014"} \xB7 ${st(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?nt(e.events.solarNoon,n):null],v,9.5):null,V=this._fitLabel([n.t(d),n.t("moon")],v,10.5),Q=vo(e.moon.phase.illumination,n.locale),U=this._fitLabel([`${Q} ${n.t("illumination")}`,Q],v,13),it=e.moon.position.apparentAltitude,S=st(it,1,n.locale),M=`${Math.round(e.moon.position.azimuth)}\xB0 ${Gt(e.moon.position.azimuth,r)}`,R=`${n.t("elevation")} ${S} \xB7 ${n.t("azimuth")} ${M}`,O=it>=0?[`${n.t("elevation")} ${S} \xB7 ${M}`,`${S} \xB7 ${M}`,S]:[`${st(Math.abs(it),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${M}`,`${st(Math.abs(it),1,n.locale)} ${n.t("belowHorizon")}`,S],H=null,Z="";if(u.moonDistance){let{current:W,min:at,max:dt}=u.moonDistance,kt=Math.max(1,dt-at),Wt=W<=at+kt*.2,_e=W>=at+kt*.8,Nt=je(W,n.locale),ie=Wt?n.t("nearPerigee"):_e?n.t("nearApogee"):"";Z=`${n.t("moonDistance")}: ${Nt} \xB7 ${n.t("distanceRange",{min:je(at,n.locale),max:je(dt,n.locale)})}`,H=this._fitLabel(ie?[`${Nt} \xB7 ${ie}`,Nt]:[Nt],v,9.5)}let tt=this._fitLabel(H?O.flatMap(W=>[`${W} \xB7 ${H}`,W]):O,v,9.5),Mt=H!==null&&(tt?.includes(H)??!1),J=null,gt="";if(o.show_astronomical_details&&u.nextFullMoon){let W=u.nextFullMoonDays??0,at=W<=0?n.t("dayToday"):n.t("inDays",{days:String(W)}),dt=`${n.t("nextFullMoon")} ${at}`,kt=u.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",Wt=`${dt}${kt}${u.moonFolkName?` \xB7 ${u.moonFolkName}`:""}`;gt=u.blueMoon?n.t("blueMoonHint"):u.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),J=this._fitLabel([Wt,`${dt}${kt}`,dt],v,9.5)}let E=o.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],v,9.5):null,I=[];tt&&I.push({text:tt,title:R,position:!0}),E&&I.push({text:E,title:null}),J&&I.push({text:J,title:gt}),H&&!Mt&&I.push({text:H,title:Z});let q=I.slice(0,s.detailsHeight>=zn?3:2),ft=Mt||q.some(W=>W.text===H),Ve=H&&!ft?Z||H:null;return D`
      <div
        class="details"
        style=${B({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?D`
              <div class="detail-tile sun">
                <span class="detail-icon">${Mo(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${C?D`<span class="detail-title">${C}</span>`:w}
                  <span class="detail-value">${_}</span>
                  ${$?D`<span class="detail-sub">${$}</span>`:w}
                  ${G?D`<span class="detail-sub">${G}</span>`:w}
                  ${x?D`<span class="detail-sub">${x}</span>`:w}
                </span>
              </div>
            `:w}
        ${o.show_moon?D`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Xt({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${V?D`<span class="detail-title">${V}</span>`:w}
                  ${U?D`<span class="detail-value">${U}</span>`:w}
                  ${q.map(W=>{let at=[W.title,W.position?Ve:null].filter(Boolean).join(" \xB7 ")||null;return D`<span class="detail-sub" title=${at??w}
                      >${W.text}</span
                    >`})}
                </span>
              </div>
            `:w}
        ${h?D`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${jn({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?Hn:Pn,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:ee(e.now,e.timeZone)})}
                </span>
              </div>
            `:w}
      </div>
    `}_moonTimesText(e,n,o){let s=e.extras.moonRise,r=e.extras.moonSet,a=s&&s.dayOffset!==0?` ${Gn(s.dayOffset,n.t)}`:"",c=s?`\u2191 ${nt(s.time,n)}${a}`:"\u2191 \u2014";if(o)return c;let u=r&&r.dayOffset!==0?` ${Gn(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${nt(r.time,n)}${u}`:"\u2193 \u2014";return`${c} \xB7 ${d}`}_renderMinimalTimes(e,n,o,s){if(o.minimalTimesHeight<=0)return w;let r=n.t,a=[];if(s.minimal_show_times&&e.events.sunrise){let u=nt(e.events.sunrise,n);a.push(D`<span class="minimal-time rise" title=${`${r("sunrise")} ${u}`}
          >↑ ${u}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let u=nt(e.events.solarNoon,n),d=o.chartWidth<250?u:`${r("zenith")} ${u}`;a.push(D`<span class="minimal-time zenith" title=${`${r("zenith")} ${u}`}
          >${d}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let u=nt(e.events.sunset,n);a.push(D`<span class="minimal-time set" title=${`${r("sunset")} ${u}`}
          >↓ ${u}</span
        >`)}if(a.length===0)return w;let c=y(l(o.minimalTimesHeight*.78,1),8,12);return D`<div
      class="minimal-times"
      style=${B({height:`${o.minimalTimesHeight}px`,fontSize:`${c}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(e,n){let o=[this._ariaLabel(e,n)];return o.push(`${n.t("sun")} ${st(e.sun.altitude,0,n.locale)}`),o.push(n.t("popupOpenHint")),o.join(", ")}_ariaLabel(e,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${n.t("sunrise")} ${nt(e.events.sunrise,n)}`),e.events.sunset&&o.push(`${n.t("sunset")} ${nt(e.events.sunset,n)}`),o.join(", ")}};xt.styles=Io,mt([Zt({attribute:!1})],xt.prototype,"hass",2),mt([qt()],xt.prototype,"_config",2),mt([qt()],xt.prototype,"_width",2),mt([qt()],xt.prototype,"_tick",2),xt=mt([He(Nn)],xt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${Ke}`)||window.customCards.push({type:`custom:${Ke}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{xt as SunMoonCard};
