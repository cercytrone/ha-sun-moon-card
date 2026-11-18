var Xs=Object.defineProperty;var Js=Object.getOwnPropertyDescriptor;var Ct=(i,e,t,n)=>{for(var o=n>1?void 0:n?Js(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Xs(e,t,o),o};var ln=globalThis,cn=ln.ShadowRoot&&(ln.ShadyCSS===void 0||ln.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,In=Symbol(),ei=new WeakMap,Re=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==In)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(cn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ei.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ei.set(t,e))}return e}toString(){return this.cssText}},ni=i=>new Re(typeof i=="string"?i:i+"",void 0,In),un=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Re(t,i,In)},oi=(i,e)=>{if(cn)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=ln.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},On=cn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ni(t)})(i):i;var{is:Ys,defineProperty:Qs,getOwnPropertyDescriptor:tr,getOwnPropertyNames:er,getOwnPropertySymbols:nr,getPrototypeOf:or}=Object,dn=globalThis,ii=dn.trustedTypes,ir=ii?ii.emptyScript:"",sr=dn.reactiveElementPolyfillSupport,ze=(i,e)=>i,Pe={toAttribute(i,e){switch(e){case Boolean:i=i?ir:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},hn=(i,e)=>!Ys(i,e),si={attribute:!0,type:String,converter:Pe,reflect:!1,useDefault:!1,hasChanged:hn};Symbol.metadata??=Symbol("metadata"),dn.litPropertyMetadata??=new WeakMap;var Gt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=si){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Qs(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=tr(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??si}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;let e=or(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){let t=this.properties,n=[...er(t),...nr(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(On(o))}else e!==void 0&&t.push(On(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Pe).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Pe;this._$Em=o;let a=r.fromAttribute(t,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??hn)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Gt.elementStyles=[],Gt.shadowRootOptions={mode:"open"},Gt[ze("elementProperties")]=new Map,Gt[ze("finalized")]=new Map,sr?.({ReactiveElement:Gt}),(dn.reactiveElementVersions??=[]).push("2.1.2");var jn=globalThis,ri=i=>i,mn=jn.trustedTypes,ai=mn?mn.createPolicy("lit-html",{createHTML:i=>i}):void 0,mi="$lit$",qt=`lit$${Math.random().toFixed(9).slice(2)}$`,pi="?"+qt,rr=`<${pi}>`,ue=document,Oe=()=>ue.createComment(""),Ge=i=>i===null||typeof i!="object"&&typeof i!="function",Vn=Array.isArray,ar=i=>Vn(i)||typeof i?.[Symbol.iterator]=="function",Gn=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,li=/-->/g,ci=/>/g,le=RegExp(`>|${Gn}(?:([^\\s"'>=/]+)(${Gn}*=${Gn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ui=/'/g,di=/"/g,gi=/^(?:script|style|textarea|title)$/i,Zn=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),S=Zn(1),y=Zn(2),ya=Zn(3),Et=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),hi=new WeakMap,ce=ue.createTreeWalker(ue,129);function fi(i,e){if(!Vn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ai!==void 0?ai.createHTML(e):e}var lr=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=Ie;for(let a=0;a<t;a++){let l=i[a],d,u,p=-1,m=0;for(;m<l.length&&(r.lastIndex=m,u=r.exec(l),u!==null);)m=r.lastIndex,r===Ie?u[1]==="!--"?r=li:u[1]!==void 0?r=ci:u[2]!==void 0?(gi.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=le):u[3]!==void 0&&(r=le):r===le?u[0]===">"?(r=o??Ie,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?le:u[3]==='"'?di:ui):r===di||r===ui?r=le:r===li||r===ci?r=Ie:(r=le,o=void 0);let g=r===le&&i[a+1].startsWith("/>")?" ":"";s+=r===Ie?l+rr:p>=0?(n.push(d),l.slice(0,p)+mi+l.slice(p)+qt+g):l+qt+(p===-2?a:g)}return[fi(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Fe=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,a=e.length-1,l=this.parts,[d,u]=lr(e,t);if(this.el=i.createElement(d,n),ce.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ce.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(mi)){let m=u[r++],g=o.getAttribute(p).split(qt),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:f[2],strings:g,ctor:f[1]==="."?Un:f[1]==="?"?Kn:f[1]==="@"?Wn:we}),o.removeAttribute(p)}else p.startsWith(qt)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(gi.test(o.tagName)){let p=o.textContent.split(qt),m=p.length-1;if(m>0){o.textContent=mn?mn.emptyScript:"";for(let g=0;g<m;g++)o.append(p[g],Oe()),ce.nextNode(),l.push({type:2,index:++s});o.append(p[m],Oe())}}}else if(o.nodeType===8)if(o.data===pi)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(qt,p+1))!==-1;)l.push({type:7,index:s}),p+=qt.length-1}s++}}static createElement(e,t){let n=ue.createElement("template");return n.innerHTML=e,n}};function $e(i,e,t=i,n){if(e===Et)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=Ge(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=$e(i,o._$AS(i,e.values),o,n)),e}var Fn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??ue).importNode(t,!0);ce.currentNode=o;let s=ce.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new Ue(s,s.nextSibling,this,e):l.type===1?d=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(d=new Bn(s,this,e)),this._$AV.push(d),l=n[++a]}r!==l?.index&&(s=ce.nextNode(),r++)}return ce.currentNode=ue,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Ue=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$e(this,e,t),Ge(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ar(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(ue.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Fe.createElement(fi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new Fn(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=hi.get(e.strings);return t===void 0&&hi.set(e.strings,t=new Fe(e)),t}k(e){Vn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O(Oe()),this.O(Oe()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ri(e).nextSibling;ri(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},we=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=$e(this,e,t,0),r=!Ge(e)||e!==this._$AH&&e!==Et,r&&(this._$AH=e);else{let a=e,l,d;for(e=s[0],l=0;l<s.length-1;l++)d=$e(this,a[n+l],t,l),d===Et&&(d=this._$AH[l]),r||=!Ge(d)||d!==this._$AH[l],d===T?e=T:e!==T&&(e+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Un=class extends we{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Kn=class extends we{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Wn=class extends we{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=$e(this,e,t,0)??T)===Et)return;let n=this._$AH,o=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Bn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$e(this,e)}};var cr=jn.litHtmlPolyfillSupport;cr?.(Fe,Ue),(jn.litHtmlVersions??=[]).push("3.3.3");var yi=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new Ue(e.insertBefore(Oe(),s),s,void 0,t??{})}return o._$AI(i),o};var qn=globalThis,Ht=class extends Gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Et}};Ht._$litElement$=!0,Ht.finalized=!0,qn.litElementHydrateSupport?.({LitElement:Ht});var ur=qn.litElementPolyfillSupport;ur?.({LitElement:Ht});(qn.litElementVersions??=[]).push("4.2.2");var pn=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};var dr={attribute:!0,type:String,converter:Pe,reflect:!1,hasChanged:hn},hr=(i=dr,e,t)=>{let{kind:n,metadata:o}=t,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(t.name,i),n==="accessor"){let{name:r}=t;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(n==="setter"){let{name:r}=t;return function(a){let l=this[r];e.call(this,a),this.requestUpdate(r,l,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function ve(i){return(e,t)=>typeof t=="object"?hr(i,e,t):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,e,t)}function de(i){return ve({...i,state:!0,attribute:!1})}var fn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yn=i=>(...e)=>({_$litDirective$:i,values:e}),_e=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var mt=yn(class extends _e{constructor(i){if(super(i),i.type!==fn.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=i.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let o=!!e[n];o===this.st.has(n)||this.nt?.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Et}});var bi="important",mr=" !"+bi,K=yn(class extends _e{constructor(i){if(super(i),i.type!==fn.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{let n=i[t];return n==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[e]){let{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?t.removeProperty(n):t[n]=null);for(let n in e){let o=e[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(mr);n.includes("-")||s?t.setProperty(n,s?o.slice(0,-11):o,s?bi:""):t[n]=o}}return Et}});var $i=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],wi=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],vi=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],Xn=385000.49;var q=Math.PI/180,Dt=180/Math.PI,pr=1495978707e-1,xi=6378.14,Ke=-.833,Rt=-6,Ft=-12,Ut=-18,bn=6,Be=-4,ki=-6,We=120*1e3;function je(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function ke(i){return(i-2451545)/36525}function nt(i){let e=i%360;return e<0?e+360:e}function gr(i){let e=ke(i);return 23.439291-.0130042*e-164e-9*e*e+504e-9*e*e*e}function fr(i){let e=i-2451545,t=ke(i),n=280.46061837+360.98564736629*e+387933e-9*t*t-t*t*t/3871e4;return nt(n)}function Jn(i){let e=ke(i),t=nt(280.46646+e*(36000.76983+e*3032e-7)),n=nt(357.52911+e*(35999.05029-1537e-7*e)),o=Math.sin(n*q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*q)*(.019993-101e-6*e)+Math.sin(3*n*q)*289e-6,s=t+o,r=nt(125.04-1934.136*e),a=s-.00569-.00478*Math.sin(r*q),d=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(r*q),u=a*q,p=d*q,m=nt(Math.atan2(Math.cos(p)*Math.sin(u),Math.cos(u))*Dt),g=Math.asin(Math.sin(p)*Math.sin(u))*Dt;return{ra:m,dec:g}}function yr(i){let e=ke(i),t=nt(280.46646+e*(36000.76983+e*3032e-7)),n=nt(357.52911+e*(35999.05029-1537e-7*e)),o=Math.sin(n*q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*q)*(.019993-101e-6*e)+Math.sin(3*n*q)*289e-6,s=nt(125.04-1934.136*e);return nt(t+o-.00569-.00478*Math.sin(s*q))}function br(i){let e=je(i),t=ke(e),n=nt(357.52911+t*(35999.05029-1537e-7*t)),o=.016708634-t*(42037e-9+1267e-10*t),s=Math.sin(n*q)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*q)*(.019993-101e-6*t)+Math.sin(3*n*q)*289e-6,r=(n+s)*q;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*pr}function Yn(i,e,t,n){let o=nt(fr(n)+t),s=nt(o-i.ra),r=e*q,a=i.dec*q,l=s*q,d=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(l))*Dt,u=nt(Math.atan2(Math.sin(l),Math.cos(l)*Math.sin(r)-Math.tan(a)*Math.cos(r))*Dt+180);return{altitude:d,azimuth:u}}function Ve(i,e){let t=je(i);return Yn(Jn(t),e.latitude,e.longitude,t).altitude}function $n(i,e){let t=je(i);return Yn(Jn(t),e.latitude,e.longitude,t)}function $r(i){let e=i;return{D:nt(297.8501921+445267.1114034*e-.0018819*e*e+e*e*e/545868-e*e*e*e/113065e3),M:nt(357.5291092+35999.0502909*e-1536e-7*e*e+e*e*e/2449e4),Mp:nt(134.9633964+477198.8675055*e+.0087414*e*e+e*e*e/69699-e*e*e*e/14712e3),F:nt(93.272095+483202.0175233*e-.0036539*e*e-e*e*e/3526e3+e*e*e*e/86331e4)}}function Mi(i){let e=ke(i),t=nt(218.3164477+481267.88123421*e-.0015786*e*e+e*e*e/538841-e*e*e*e/65194e3),n=$r(e),o=t;for(let a of $i){let l=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;o+=a[4]*Math.sin(l*q)}let s=0;for(let a of wi){let l=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;s+=a[4]*Math.sin(l*q)}let r=Xn;for(let a of vi){let l=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;r+=a[4]*Math.cos(l*q)}return{longitude:nt(o),latitude:s,distanceKm:r}}function Si(i,e,t){let n=gr(t)*q,o=i*q,s=e*q,r=nt(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*Dt),a=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*Dt;return{ra:r,dec:a}}function Xt(i,e){let t=je(i),n=Mi(t),o=Si(n.longitude,n.latitude,t),s=Yn(o,e.latitude,e.longitude,t),r=Math.asin(xi/n.distanceKm)*Dt,a=s.altitude-r*Math.cos(s.altitude*q);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:n}}function wr(i){return .7275*(Math.asin(xi/i)*Dt)-.5667}var vr=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],_r=29.530588853;function wn(i){let e=je(i),t=Mi(e),n=Si(t.longitude,t.latitude,e),o=Jn(e),s=yr(e),r=br(i),a=t.distanceKm,l=t.latitude*q,d=Math.acos(Math.min(1,Math.max(-1,Math.cos(l)*Math.cos((t.longitude-s)*q)))),u=Math.atan2(r*Math.sin(d),a-r*Math.cos(d)),p=nt(u*Dt),m=(1+Math.cos(u))/2,g=(o.ra-n.ra)*q,f=o.dec*q,$=n.dec*q,x=nt(Math.atan2(Math.cos(f)*Math.sin(g),Math.sin(f)*Math.cos($)-Math.cos(f)*Math.sin($)*Math.cos(g))*Dt),H=nt(t.longitude-s)/360,v=Math.min(7,Math.floor(H*8+.5)%8),D=H*29.530588853;return{illumination:m,phaseAngle:p,elongation:d*Dt,phaseIndex:v,phaseKey:vr[v],brightLimbAngle:x,moonAgeDays:D,waxing:H<.5,distanceKm:a}}function xe(i,e,t,n,o){let s=[];if(!(e>i))return s;let r=Math.max(2,Math.ceil((e-i)/t)),a=(e-i)/r,l=i,d=n(i)-o;for(let u=1;u<=r;u++){let p=i+u*a,m=n(p)-o;if(d===0)s.push({time:l,rising:m>0});else if(d<0&&m>=0||d>0&&m<=0){let g=l,f=p,$=d;for(let x=0;x<50&&f-g>1;x++){let H=(g+f)/2,v=n(H)-o;v<0&&$<0||v>0&&$>0?(g=H,$=v):f=H}s.push({time:(g+f)/2,rising:m>d})}l=p,d=m}return s}function _i(i,e,t,n){let o=i.find(s=>s.rising===e&&s.time>=t&&s.time<n);return o?new Date(o.time):null}function Qn(i,e,t,n=4){let o=e.getTime()-27e5,s=t.getTime()+2700*1e3,r=e.getTime(),a=t.getTime(),l=k=>Ve(k,i),d=[],u=Math.max(3e4,Math.round(n*60*1e3));for(let k=r;k<a;k+=u)d.push({time:k,altitude:l(k)});d.push({time:a,altitude:l(a)});let p=-1/0,m=1/0;for(let k of d)k.altitude>p&&(p=k.altitude),k.altitude<m&&(m=k.altitude);let g=[["sunrise","sunset",Ke],["civilDawn","civilDusk",Rt],["nauticalDawn","nauticalDusk",Ft],["astronomicalDawn","astronomicalDusk",Ut]],f={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[k,E,_]of g){let A=xe(o,s,We,l,_);f[k]=_i(A,!0,r,a),f[E]=_i(A,!1,r,a)}let $=r,x=-1/0,H=120*1e3;for(let k=r;k<=a;k+=H){let E=l(k);E>x&&(x=E,$=k)}let v=Math.max(r,$-H),D=Math.min(a,$+H);for(let k=0;k<40&&D-v>1e3;k++){let E=v+(D-v)/3,_=D-(D-v)/3;l(E)<l(_)?v=E:D=_}f.solarNoon=new Date((v+D)/2);let N="none";return m>Ke?N="polar-day":p<Ke&&(N="polar-night"),{dayStart:e,dayEnd:t,samples:d,maxAltitude:p,minAltitude:m,events:f,polar:N}}function to(i,e,t,n=48){let o=typeof e=="number"?e:e.getTime();if(!Number.isFinite(o)||!Number.isFinite(t))return null;let s=a=>Ve(a,i),r=xe(o,o+n*60*60*1e3,We,s,t)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Ti(i,e,t,n,o=48){let s=typeof e=="number"?e:e.getTime();if(!Number.isFinite(s)||!(t<n))return null;let r=m=>Ve(m,i),a=s+o*60*60*1e3,l=[...xe(s,a,We,r,t),...xe(s,a,We,r,n)].sort((m,g)=>m.time-g.time),d=m=>m>=t&&m<=n,u=d(r(s)),p=u?s:null;for(let m of l){let g=d(r(m.time+1e3));if(p===null&&g)p=m.time;else if(p!==null&&!g)return{start:new Date(p),end:new Date(m.time),active:u}}return p===null?null:{start:new Date(p),end:null,active:u}}function xr(i,e,t,n=10){let o=e.getTime(),s=t.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),a=[];for(let u=o;u<s;u+=r)a.push({time:u,altitude:Xt(u,i).apparentAltitude});a.push({time:s,altitude:Xt(s,i).apparentAltitude});let l=-1/0,d=1/0;for(let u of a)u.altitude>l&&(l=u.altitude),u.altitude<d&&(d=u.altitude);return{samples:a,maxAltitude:l,minAltitude:d}}function Ai(i,e,t,n,o=10){let s=e.getTime(),r=t.getTime(),a=l=>{if(!l)return null;let d=l.getTime();return d>=s&&d<r?d:null};return{profile:xr(i,e,t,o),rise:a(n.previousRise)??a(n.nextRise),set:a(n.previousSet)??a(n.nextSet)}}function Ci(i,e){let t=i.getTime(),n=t-1800*60*1e3,o=t+1800*60*1e3,r=xe(n,o,We,g=>{let f=Xt(g,e);return f.altitude-wr(f.distanceKm)},0),a=r.filter(g=>g.rising),l=r.filter(g=>!g.rising),d=a.find(g=>g.time>t)??null,u=[...a].reverse().find(g=>g.time<=t)??null,p=l.find(g=>g.time>t)??null,m=[...l].reverse().find(g=>g.time<=t)??null;return{previousRise:u?new Date(u.time):null,previousSet:m?new Date(m.time):null,nextRise:d?new Date(d.time):null,nextSet:p?new Date(p.time):null}}function Ei(i){return i>0?"day":i>Rt?"civil":i>Ft?"nautical":i>Ut?"astronomical":"night"}function kr(i){return(((wn(i).moonAgeDays/_r-.5)%1+1)%1+.5)%1-.5}function eo(i,e){let t=typeof i=="number"?i:i.getTime(),n=typeof e=="number"?e:e.getTime();return n>t?xe(t,n,360*60*1e3,kr,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function Di(i,e=32){let t=typeof i=="number"?i:i.getTime(),o=eo(t,t+e*24*60*60*1e3)[0];if(!o)return null;let s=wn(o).illumination;return s<.98?null:{time:o,illumination:s}}function Li(i,e,t=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-t*24*60*60*1e3,r=n+t*24*60*60*1e3,a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,d=s,u=s;for(let p=s;p<=r;p+=o){let m=Xt(p,e).distanceKm;m<a&&(a=m,d=p),m>l&&(l=m,u=p)}return{current:Xt(n,e).distanceKm,min:a,minTime:new Date(d),max:l,maxTime:new Date(u),mean:Xn}}function vn(i,e,t="sun"){return(t==="sun"?$n(i,e):Xt(i,e)).azimuth}function M(i,e,t){return Number.isNaN(i)?e:Math.min(t,Math.max(e,i))}function no(i,e,t){return i+(e-i)*t}function c(i,e=0){let t=10**e;return Math.round(i*t)/t}function Ni(i){let e=i.trim().replace(/^#/,""),t=e.length===3?e.split("").map(o=>o+o).join(""):e;if(!/^[0-9a-fA-F]{6}$/.test(t))return null;let n=Number.parseInt(t,16);return[n>>16&255,n>>8&255,n&255]}function Mr(i){return`#${i.map(e=>Math.round(M(e,0,255)).toString(16).padStart(2,"0")).join("")}`}function oo(i,e,t){let n=Ni(i),o=Ni(e);if(!n||!o)return e;let s=M(t,0,1);return Mr([no(n[0],o[0],s),no(n[1],o[1],s),no(n[2],o[2],s)])}function io(i){return typeof i=="number"&&Number.isFinite(i)}function Mt(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let e=Number(i.replace(",","."));if(Number.isFinite(e))return e}return null}function Hi(i){return i.length===0?"":i.map((e,t)=>`${t===0?"M":"L"}${c(e.x,2)} ${c(e.y,2)}`).join(" ")}function _n(i,e=.5){if(i.length<3)return Hi(i);let t=[`M${c(i[0].x,2)} ${c(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],a=i[n+2]??r,l=s.x+(r.x-o.x)/6*e*2,d=s.y+(r.y-o.y)/6*e*2,u=r.x-(a.x-s.x)/6*e*2,p=r.y-(a.y-s.y)/6*e*2;t.push(`C${c(l,2)} ${c(d,2)} ${c(u,2)} ${c(p,2)} ${c(r.x,2)} ${c(r.y,2)}`)}return t.join(" ")}function xn(i,e,t=!1){if(i.length===0)return"";let n=t?_n(i):Hi(i),o=i[0],s=i[i.length-1];return`${n} L${c(s.x,2)} ${c(e,2)} L${c(o.x,2)} ${c(e,2)} Z`}function Kt(i,e,t){let n=t*Math.PI/180;return{x:i.x-e*Math.sin(n),y:i.y-e*Math.cos(n)}}function Ri(i,e,t){let n=M(t,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${c(i.x-e,2)} ${c(i.y,2)} a${c(e,2)} ${c(e,2)} 0 1 1 ${c(e*2,2)} 0 a${c(e,2)} ${c(e,2)} 0 1 1 ${c(-e*2,2)} 0 Z`;let o=e*(1-2*n),s=1,r=o>0?0:1,a={x:i.x-e,y:i.y},l={x:i.x+e,y:i.y};return`M${c(a.x,2)} ${c(a.y,2)} A${c(e,2)} ${c(e,2)} 0 0 ${s} ${c(l.x,2)} ${c(l.y,2)} A${c(e,2)} ${c(Math.abs(o),4)} 0 0 ${r} ${c(a.x,2)} ${c(a.y,2)} Z`}function zi(i=new Date){let e=i.getTime();return e+(6e4-e%6e4)+250}var Sr=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Wt(i){let{size:e,illumination:t,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:l}=i,d={x:e/2,y:e/2},u=Math.max(1,e/2-.5),p=Ri(d,u,t),m=r&&e>=26,g=c(-n,2);return y`
    <svg
      class="moon-disc ${a}"
      width="${c(e,1)}"
      height="${c(e,1)}"
      viewBox="0 0 ${c(e,1)} ${c(e,1)}"
      role="img"
      aria-hidden="true"
    >
      <circle
        cx="${c(d.x,2)}" cy="${c(d.y,2)}" r="${c(u,2)}"
        fill="${s}"
      />
      ${p?y`<g transform="rotate(${g} ${c(d.x,2)} ${c(d.y,2)})">
              <path d="${p}" fill="${o}" />
              ${m?y`<g clip-path="url(#${l}-clip)" opacity="0.16">
                      <clipPath id="${l}-clip">
                        <path d="${p}" />
                      </clipPath>
                      ${Sr.map(f=>{let $={x:d.x+f.x*u,y:d.y+f.y*u};return y`<circle
                          cx="${c($.x,2)}" cy="${c($.y,2)}"
                          r="${c(f.r*u,2)}"
                          fill="#5a6488" />`})}
                    </g>`:y``}
            </g>`:y``}
      <circle
        cx="${c(d.x,2)}" cy="${c(d.y,2)}" r="${c(u,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function so(i,e,t,n){let o=Kt(i,e,t),s=t*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),l=M(e*.12,4,9),d=M(e*.07,2.5,5),u={x:o.x+r*l,y:o.y+a*l},p={x:o.x-a*d,y:o.y+r*d},m={x:o.x+a*d,y:o.y-r*d};return y`
    <polygon
      points="${c(u.x,2)},${c(u.y,2)} ${c(p.x,2)},${c(p.y,2)} ${c(m.x,2)},${c(m.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var Mn="sun-moon-card",ho="sun-moon-card",Gi="sun-moon-card-editor";function Me(i){return i==="scene"?460:i==="clean"?400:340}var Tr=320,Ar=360;var Cr=24,Er=16,ro=4,Dr=12,Lr=36,Ze=[2,12],Jt=[320,1200],Yt=[260,800];function Se(i){return i?[Cr,800]:[120,800]}var I={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",scene:"city",show_sun_info:!0,show_moon_info:!0,theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},Fi=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],Ui=400,Ki=250,Wi=1200*1e3,mo={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},po={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},Bi=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],go=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Lt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon","scene","clean"],scene:["city","mountains","forest","coast","none"],remainingTimeFocus:["sun","next","golden_hour"]},ji=700,Nr=260,fo=16,yo=4,Vi=72,Pi=10,uo=56,Hr=84,Rr=96,ao=74,zr=uo+8,Pr=12,Ir=10,vt=4,kn=4,Ii=30,Oi=44,Or=26,Gr=72,bo=96,lo=20,co=18;function Zi(i,e,t){if(t.minimal_mode){let L=(t.minimal_show_times||t.minimal_show_zenith)&&i>=Lr?Dr:0,w=Math.max(Er,i-2*ro-L);return{padding:ro,minimalTimesHeight:L,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,e-2*ro),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:w,minimal:!0,compact:!1}}let n=t.compact_mode,o=n?Ir:Pr,s=Math.max(40,i-2*o),r=0,a=t.show_footer&&!n?lo+vt:0,l=Ii+vt+Oi+vt+a+(co+kn)+ao,d=t.show_header&&!n&&s>=l,u=d?Ii:0;s-=u,d&&(s-=vt,r+=vt);let p=n?Or:Oi,m=t.show_events&&s-(p+vt)-a>=Hr,g=m?p:0;s-=g,m&&(s-=vt,r+=vt);let f=t.show_astronomical_details?bo:Gr,$=!n&&(t.show_sun||t.show_moon)&&s-(f+vt)-a>=Rr,x=$?f:0;s-=x,$&&(s-=vt,r+=vt);let H=t.show_footer&&!n&&m&&s-(lo+vt)>=zr,v=H?lo:0;s-=v,H&&(s-=vt,r+=vt);let D=Math.max(uo,s),N=t.show_day_chart&&!n&&m&&D-co-kn>=ao,k=N?co:0;N&&(r+=kn);let E=Math.max(uo,D-k-(N?kn:0)),_=t.show_sky_view&&!n&&(t.show_sun||t.show_moon),A=_&&e>=ji&&E>=ao,C=Math.max(80,e-2*o),O=A?Math.round(Math.min(Nr,(C-Pi)/3)):0,V=Math.max(120,A?C-Pi-O:C);return{padding:o,showHeader:d,showEvents:m,showDetails:$,showFooter:H,showLegend:N,skyViewSide:A,skyViewInline:!A&&_&&$,skyViewWidth:O,chartWidth:V,gaps:r,headerHeight:u,eventsHeight:g,detailsHeight:x,footerHeight:v,legendHeight:k,chartHeight:E,minimal:!1,minimalTimesHeight:0,compact:n}}function qi(i,e){return e==="clean"?i>=560?400:460:e==="scene"?i>=712?Math.round(Math.min(560,Math.max(440,i*.6))):520:i>=ji?Ar:Tr}function Sn(){return{type:`custom:${Mn}`,card_height:340}}var $o={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",sceneNoon:"Solarer Mittag",sceneNoonShort:"Mittag",editorCardStyleScene:"Szene (Himmel mit Silhouette)",editorCardStyleClean:"Minimalistisch",cleanNow:"Jetzt",editorScene:"Szene",editorSceneCity:"Stadt",editorSceneMountains:"Berge",editorSceneForest:"Wald",editorSceneCoast:"K\xFCste",editorSceneNone:"Keine",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorGroupStyle:"Kartenstil & Aussehen",editorGroupLayout:"Gr\xF6\xDFe & Layout",editorGroupContent:"Inhalte",editorGroupCountdown:"Restzeit",editorGroupLocale:"Sprache & Zeit",editorGroupSource:"Entit\xE4ten & Standort",editorSunInfo:"Infofeld Sonnenstand",editorMoonInfo:"Infofeld Mond",editorSwitchCount:"{on} von {total} an",editorOff:"aus",editorDefault:"Standard",editorMoonEntityHint:"Die Mondphase wird berechnet; die Bezeichnung kann aus der Mond-Entit\xE4t (z. B. sensor.moon) \xFCbernommen werden.",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",sceneNoon:"Solar noon",sceneNoonShort:"Noon",editorCardStyleScene:"Scene (sky with silhouette)",editorCardStyleClean:"Minimalist",cleanNow:"Now",editorScene:"Scene",editorSceneCity:"City",editorSceneMountains:"Mountains",editorSceneForest:"Forest",editorSceneCoast:"Coast",editorSceneNone:"None",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorGroupStyle:"Card style & appearance",editorGroupLayout:"Size & layout",editorGroupContent:"Content",editorGroupCountdown:"Countdown",editorGroupLocale:"Language & time",editorGroupSource:"Entities & location",editorSunInfo:"Sun position panel",editorMoonInfo:"Moon panel",editorSwitchCount:"{on} of {total} on",editorOff:"off",editorDefault:"default",editorMoonEntityHint:"The moon phase is computed; its name can be taken from the moon entity (e.g. sensor.moon).",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function lt(i,e,t){let o=($o[i]??$o.en)[e]??$o.en[e]??String(e);if(t)for(let[s,r]of Object.entries(t))o=o.split(`{${s}}`).join(String(r));return o}function he(i,e){return((i&&i!=="auto"?i:e)??"").toLowerCase().startsWith("de")?"de":"en"}function Yi(i,e,t){let n=i;if(n==="auto"&&e&&(e==="12"||e==="am_pm"?n="12":e==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var Xi=new Map;function wo(i,e,t){let n=`${e}|${i}`,o=Xi.get(n);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(e,{timeZone:i,timeZoneName:"long"}).formatToParts(t).find(l=>l.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return Xi.set(n,s),s}var Ji=new Map;function Fr(i,e,t){let n=`${i}|${e}|${t}`,o=Ji.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}Ji.set(n,o)}return o}function st(i,e){return Fr(e.locale,e.timeZone,e.hour12).format(i)}function qe(i,e){try{return new Intl.DateTimeFormat(e.locale,{weekday:"short",day:"numeric",month:"short",timeZone:e.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function vo(i,e=0,t="de-DE"){try{return new Intl.NumberFormat(t,{minimumFractionDigits:e,maximumFractionDigits:e}).format(i)}catch{return i.toFixed(e)}}function rt(i,e=1,t="de-DE"){return`${vo(i,e,t)}\xB0`}function Tn(i,e="de-DE"){return`${vo(Math.round(i),0,e)} km`}function Qi(i,e){return`${i<0?"\u2212":"+"}${An(Math.abs(i),e)}`}function An(i,e){let t=Math.max(0,Math.round(i));if(t<60)return e("countdownMinutes",{minutes:String(t)});let n=Math.floor(t/60),o=t%60;return n<24?e("countdownHours",{hours:String(n),minutes:String(o)}):e("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function Cn(i,e){return e(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function En(i,e="de-DE"){return`${vo(i*100,0,e)} %`}function zt(i,e){let t=(i%360+360)%360,n=go[0],o=1/0;for(let r of go){let a=Math.abs((t-r.deg+540)%360-180);a<o&&(o=a,n=r)}let s=`dir${n.key}`;return lt(e,s)}function ts(i,e,t,n){return{language:i,locale:e,timeZone:t,hour12:n,t:(o,s)=>lt(i,o,s)}}var es="var(--smc-golden-hour, #f2b544)",Ur="var(--smc-blue-hour, #4f6fd6)";function ns(i,e,t){let n=[],o=null;for(let s of i){let r=s.altitude>=e&&s.altitude<=t;r&&o===null&&(o=s.time),!r&&o!==null&&(n.push([o,s.time]),o=null)}return o!==null&&i.length&&n.push([o,i[i.length-1].time]),n}function os(i,e){if(i.length<=e)return i;let t=i.length/e,n=[];for(let s=0;s<e;s++)n.push(i[Math.floor(s*t)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function Kr(i,e,t,n,o){if(i.length<2)return null;let s=e.sunrise?.getTime(),r=e.sunset?.getTime(),a,l;if(s!==void 0&&r!==void 0&&r>s)a=n(s),l=n(r);else if(t==="polar-day")a=i[0].x,l=i[i.length-1].x;else return null;let d=i.filter(u=>u.x>=a-.5&&u.x<=l+.5);return d.length<2?null:{path:xn(d,o,!0),cx:(a+l)/2,cy:o,r:Math.max(6,(l-a)/2)}}function Wr(i,e){let t=e?Math.max(i.maxAltitude,e.maxAltitude):i.maxAltitude,n=e?Math.min(i.minAltitude,e.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(t-o)*.1),r=M(t+s,-18,90.5);return[M(Math.max(-28,n-2),-90,r-6),r]}function _o(i,e,t=2.2){let n=[0,Rt,Ft,Ut],o=[e.day,e.civil,e.nautical,e.astronomical,e.night];if(i>t/2){let s=M(1-i/12,0,1)*.5;return oo(e.day,e.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+t/2,a=n[s]-t/2;if(i>=r)return o[s];if(i>a){let l=(r-i)/t;return oo(o[s],o[s+1],l*l*(3-2*l))}}return o[o.length-1]}function Br(i,e,t,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,a=e+t*(1-r);o.push({offset:r,color:_o(a,i)})}return o}function jr(i,e,t,n,o,s){let r=i.samples;if(r.length<2)return[];let a=[],l=(u,p)=>{u&&!Number.isNaN(u.getTime())&&a.push({time:u.getTime(),color:p})};l(e.astronomicalDawn,t.astronomical),l(e.nauticalDawn,t.nautical),l(e.civilDawn,t.civil),l(e.sunrise,t.glow),l(e.solarNoon,t.day),l(e.sunset,t.glow),l(e.civilDusk,t.civil),l(e.nauticalDusk,t.nautical),l(e.astronomicalDusk,t.astronomical);let d=[{offset:0,color:_o(r[0].altitude,t)},...a.map(u=>({offset:M((n(u.time)-o)/s,0,1),color:u.color})),{offset:1,color:_o(r[r.length-1].altitude,t)}];return d.sort((u,p)=>u.offset-p.offset),d}function xo(i){let{profile:e,events:t,now:n,width:o,height:s,palette:r,format:a,showSun:l,showMoon:d,moon:u,moonPath:p,showTwilight:m,twilightLevel:g,animations:f,cardStyle:$,minimal:x,sunMarkerSize:H,uid:v,showAstronomicalLayers:D,currentAltitude:N,countdown:k=null,showGoldenHour:E=!1}=i,_=Math.max(x?60:120,o),A=Math.max(x?12:56,s),C=x?2:4,O=x?2:4,V=x?2:6,z=!x&&A>=112,J=z?M(c(A*.13,1),13,20):0,L=C,w=Math.max(10,_-C-O),P=V,Z=Math.max(10,A-V-J),B=P+Z,[Q,G]=Wr(e,p?.profile??null),ut=Math.max(1,G-Q),F=e.dayStart.getTime(),ot=e.dayEnd.getTime(),Pt=Math.max(1,ot-F),at=b=>L+(b-F)/Pt*w,yt=b=>B-(M(b,-95,95)-Q)/ut*Z,X=yt(0),bt=M(Math.round(w/1.6),60,361),pt=os(e.samples,bt).map(b=>({x:at(b.time),y:yt(b.altitude)})),j=Br(r,Q,ut),gt=jr(e,t,r,at,L,w),_t=`${v}-area`,$t=`${v}-line`,jt=`${v}-clip`,Ye=`${v}-glow`,Qe=`${v}-sky`,ne=`${v}-soft`,Ae=`${v}-soft-fade`,Ce=`${v}-foot`,pe=`${v}-foot-fade`,R=`${v}-side`,it=`${v}-side-fade`,ft=$==="horizon",ge=xn(pt,ft?c(X,2):B+1,!0),Ee=_n(pt),Tt=p?os(p.profile.samples,M(Math.round(w/2),40,240)).map(b=>({x:at(b.time),y:yt(b.altitude)})):null,oe=Tt&&!x?_n(Tt):null,ie="var(--smc-moon-line, #cbd5e1)",Cs=M(c(A*.013,2),1.1,1.9),Es=xn(pt,P-1,!0),De=$==="flat"?.6:ft?.3:1,Ds=ft?0:c(.15*De,3),It=P-1,Hn=B+1,Vt=Math.max(1,Hn-It),Ls=M(Z*.14,x?1.5:6,18),Ns=M(Z*.08,x?1:4,12),Hs=M(w*.02,x?2:6,14),zo=M(c(Z*.06,1),x?1.5:4,10),Rs=c(M(Ls/Vt,0,.45),4),Po=c(1-M(Ns/Vt,0,.45),4),fe=L-1,tn=L+w+1,Io=c(M(Hs/Math.max(1,tn-fe),0,.4),4),zs=Math.max(16,w*.16),Ps=M(Z*.45,9,46),en=[];Z>=34&&(t.sunrise&&en.push({id:`${v}-glow-rise`,time:t.sunrise,color:r.glow}),t.sunset&&en.push({id:`${v}-glow-set`,time:t.sunset,color:r.glow}));let ye=x?null:Kr(pt,t,e.polar,at,X),Oo=`${v}-dome`,dt=a.t,nn=[],Le=b=>{b.time&&!Number.isNaN(b.time.getTime())&&nn.push({secondary:!1,...b})};if(t.sunrise&&Le({key:"sunrise",time:t.sunrise,label:dt("sunrise"),shortLabel:dt("sunriseShort"),kind:"sunrise",altitude:0}),t.sunset&&Le({key:"sunset",time:t.sunset,label:dt("sunset"),shortLabel:dt("sunsetShort"),kind:"sunset",altitude:0}),m&&(t.civilDawn&&Le({key:"civilDawn",time:t.civilDawn,label:dt("civilDawn"),shortLabel:dt("civilDawnShort"),kind:"dawn",altitude:Rt}),t.civilDusk&&Le({key:"civilDusk",time:t.civilDusk,label:dt("civilDusk"),shortLabel:dt("civilDuskShort"),kind:"dusk",altitude:Rt}),g==="all"||D)){let b=[["nauticalDawn","dawn","nauticalDawn",Ft],["nauticalDusk","dusk","nauticalDusk",Ft],["astronomicalDawn","dawn","astronomicalDawn",Ut],["astronomicalDusk","dusk","astronomicalDusk",Ut]];for(let[U,W,tt,Y]of b){let ht=t[U];ht&&Le({key:U,time:ht,label:dt(tt),shortLabel:dt(tt),kind:W,altitude:Y,secondary:!0})}}nn.sort((b,U)=>b.time.getTime()-U.time.getTime());let be=M(c(A*.062,1),7.5,10.5),on=M(c(be+5,1),11,J||15),Go=b=>b.secondary?2:b.kind==="sunrise"||b.kind==="sunset"?0:1,Is=w<240?3:w<340?4:6,Fo=x?[]:[...nn].sort((b,U)=>Go(b)-Go(U)||b.time.getTime()-U.time.getTime()).slice(0,Math.max(2,Is)),Uo=w<260,Os=!Uo&&(Fo.length>3||w<340),Ko=4,Gs=Math.max(8,be*1.2),se=[];for(let b of Fo){let U=Uo?st(b.time,a):Os?b.shortLabel:b.label,W=U.length*be*.56+8,tt=M(at(b.time.getTime()),L+W/2,L+w-W/2),Y=Nt=>se.some(re=>Math.abs(re.x-Nt)<(re.width+W)/2+Ko),ht=Y(tt)?null:tt;if(ht===null)for(let Nt of se){let re=(Nt.width+W)/2+Ko;for(let ae of[Nt.x+re,Nt.x-re])if(Math.abs(ae-tt)<=Gs&&ae-W/2>=L-.5&&ae+W/2<=L+w+.5&&!Y(ae)){ht=ae;break}if(ht!==null)break}ht!==null&&se.push({x:ht,width:W,text:U,secondary:b.secondary})}se.sort((b,U)=>b.x-U.x);let wt=M(at(n.getTime()),L,L+w),Fs=r.day,Zt=M(c(A*.16,1),Math.min(2.8,H),H),Wo=M(c(Zt*.22,2),.8,1.4),Ot=M(c(Zt*1.1,1),3.5,7),Bo=(b,U)=>Z<=U*2?P+Z/2:M(yt(b),P+U,B-U),jo=Bo(N,Zt),Vo=E&&!x?[...ns(e.samples,Be,bn).map(b=>({range:b,kind:"golden",color:es,key:"goldenHour"})),...ns(e.samples,ki,Be).map(b=>({range:b,kind:"blue",color:Ur,key:"blueHour"}))].map(({range:b,kind:U,color:W,key:tt})=>{let Y=M(at(b[0]),L,L+w),ht=M(at(b[1]),L,L+w);return{x:Y,width:ht-Y,kind:U,color:W,title:`${dt(tt)} ${st(new Date(b[0]),a)}\u2013${st(new Date(b[1]),a)}`}}).filter(b=>b.width>=.5):[],xt=(()=>{if(x||!k)return null;let b=k.time.getTime();if(!(b>n.getTime()))return null;let W=Q<0&&G>0?yt(0):B-1,tt=at(b),Y=M(tt,L,L+w);if(Y-wt<2)return null;let ht=k.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":k.body==="twilight"?r.civil:k.body==="golden"?es:r.day;return{y:W,endX:Y,endsInside:tt<=L+w,color:ht}})(),Rn=M(c(A*.016,1),2,3),kt=(()=>{if(x||!k?.label)return null;let b=be,U=b+5,W=k.label.length*b*.56+10,tt=Math.max(Zt,3)+3,Y=wt+tt,ht=Y+W<=L+w?Y:Math.max(L,wt-tt-W),Nt=z||se.length===0?P+1:P+on+3;return{x:ht,y:Nt,width:W,height:U,fontSize:b}})(),At=d&&u&&!x?{altitude:u.altitude,y:Bo(u.altitude,Ot),clamped:u.altitude<Q||u.altitude>G}:null,Us=At?Math.abs(At.y-jo):Number.POSITIVE_INFINITY,zn=Zt+Ot+2,Ne=At?Us>=Zt+Ot+1?wt:wt+zn+Ot<=L+w?wt+zn:Math.max(L+Ot,wt-zn):null,Ks=f?"smc-pulse":"",Ws=f?`url(#${Ye})`:"",Pn=[{altitude:0,label:dt("horizon"),key:"horizon"}];D||g==="all"?Pn.push({altitude:Rt,label:`${dt("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Ft,label:`${dt("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Ut,label:`${dt("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&Pn.push({altitude:Rt,label:`${dt("refCivil")} (\u22126\xB0)`,key:"civil"});let Bs=!x&&Z>=86&&w>=250,js=Pn.filter(b=>(!x||b.key==="horizon")&&b.altitude>Q+.5&&b.altitude<G-.5),Vs=M(c(A*.055,1),7.5,9.5),He=t.solarNoon,Zo=!x&&!!He&&e.maxAltitude>0&&Z>=104&&w>=220&&D,qo=Zo?`${dt("zenith")} ${st(He,a)} \xB7 ${rt(e.maxAltitude,1,a.locale)}`:"",sn=M(c(A*.055,1),7.5,9.5),rn=qo.length*sn*.56+10,Xo=He?M(at(He.getTime()),L+rn/2,L+w-rn/2):0,Jo=He?yt(e.maxAltitude):0,an=sn+5,Yo=M(Jo-an-4,P,Math.max(P,Jo+10)),Qo=x?1:w<220?4:w<420?6:8,ti=[];for(let b=1;b<Qo;b++)ti.push(L+w*b/Qo);return y`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(_,1)} ${c(A,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${dt("title")}"
    >
      <defs>
        <linearGradient id="${_t}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(P,1)}" x2="0" y2="${c(B,1)}">
          ${j.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
        </linearGradient>
        <linearGradient id="${$t}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(P,1)}" x2="0" y2="${c(B,1)}">
          ${j.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${gt.length>=2?y`<linearGradient id="${Qe}" gradientUnits="userSpaceOnUse"
                x1="${c(L,1)}" y1="0" x2="${c(L+w,1)}" y2="0">
                ${gt.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
              </linearGradient>`:y``}
        ${en.map(b=>y`<radialGradient id="${b.id}">
              <stop offset="0%" stop-color="${b.color}" stop-opacity="${c(.5*De,3)}" />
              <stop offset="45%" stop-color="${b.color}" stop-opacity="${c(.2*De,3)}" />
              <stop offset="100%" stop-color="${b.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${ye?y`<radialGradient id="${Oo}" gradientUnits="userSpaceOnUse"
                cx="${c(ye.cx,1)}" cy="${c(ye.cy,1)}" r="${c(ye.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${c(.3*De,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${c(.18*De,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:y``}
        <linearGradient id="${Ae}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(It,1)}" x2="0" y2="${c(Hn,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Rs}" stop-color="#ffffff" />
          <stop offset="${Po}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ne}" maskUnits="userSpaceOnUse"
          x="${c(L-2,1)}" y="${c(It,1)}"
          width="${c(w+4,1)}" height="${c(Vt,1)}">
          <rect
            x="${c(L-2,1)}" y="${c(It,1)}"
            width="${c(w+4,1)}" height="${c(Vt,1)}"
            fill="url(#${Ae})" />
        </mask>
        <linearGradient id="${pe}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(It,1)}" x2="0" y2="${c(Hn,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${Po}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Ce}" maskUnits="userSpaceOnUse"
          x="${c(L-2,1)}" y="${c(It,1)}"
          width="${c(w+4,1)}" height="${c(Vt,1)}">
          <rect
            x="${c(L-2,1)}" y="${c(It,1)}"
            width="${c(w+4,1)}" height="${c(Vt,1)}"
            fill="url(#${pe})" />
        </mask>
        <linearGradient id="${it}" gradientUnits="userSpaceOnUse"
          x1="${c(fe,1)}" y1="0" x2="${c(tn,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Io}" stop-color="#ffffff" />
          <stop offset="${c(1-Io,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${R}" maskUnits="userSpaceOnUse"
          x="${c(fe,1)}" y="${c(It,1)}"
          width="${c(tn-fe,1)}" height="${c(Vt,1)}">
          <rect
            x="${c(fe,1)}" y="${c(It,1)}"
            width="${c(tn-fe,1)}" height="${c(Vt,1)}"
            fill="url(#${it})" />
        </mask>
        <clipPath id="${jt}">
          <rect x="${c(L-1,1)}" y="${c(P-2,1)}"
            width="${c(w+2,1)}" height="${c(Z+4,1)}"
            rx="${zo}" ry="${zo}" />
        </clipPath>
        ${f?y`<filter id="${Ye}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${c(Zt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:y``}
      </defs>

      <g clip-path="url(#${jt})">
        ${ti.map(b=>y`<line x1="${c(b,1)}" y1="${c(P,1)}" x2="${c(b,1)}" y2="${c(B,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${R})">
        <path d="${ge}" fill="url(#${_t})" opacity="0.9" mask="url(#${Ce})" />
        <g mask="url(#${ne})">
          ${gt.length>=2&&!ft?y`<path d="${Es}" fill="url(#${Qe})" opacity="${Ds}" />`:y``}
          ${en.map(b=>{let U=M(at(b.time.getTime()),L,L+w),W=M(X,P,B);return y`<ellipse
                cx="${c(U,1)}" cy="${c(W,1)}"
                rx="${c(zs,1)}" ry="${c(Ps,1)}"
                fill="url(#${b.id})" />`})}
          ${ye&&!ft?y`<path d="${ye.path}" fill="url(#${Oo})" opacity="0.95" />`:y``}
        </g>
        </g>
        ${Vo.length?y`<g class="hour-bands">
                ${Vo.map(b=>y`<g class=${b.kind}>
                    <title>${b.title}</title>
                    <rect
                      x="${c(b.x,1)}" y="${c(P,1)}"
                      width="${c(b.width,1)}" height="${c(Z,1)}"
                      fill="${b.color}" opacity="${b.kind==="golden"?.16:.2}" />
                    <rect
                      x="${c(b.x,1)}" y="${c(B-3,1)}"
                      width="${c(b.width,1)}" height="3"
                      fill="${b.color}" opacity="0.85" />
                  </g>`)}
              </g>`:y``}
        ${oe?y`<path
                class="moon-curve"
                data-body="moon"
                d="${oe}"
                fill="none"
                stroke="${ie}"
                stroke-width="${Cs}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${ft?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:y``}
        ${p&&oe?y`<g class="moon-events">
                ${[[p.rise,"moonrise"],[p.set,"moonset"]].filter(b=>b[0]!==null).map(([b,U])=>{let W=M(at(b),L,L+w),tt=M(yt(0),P,B),Y=M(c(A*.05,1),4,8);return y`<g>
                      <title>${a.t(U)} ${st(new Date(b),a)}</title>
                      <line
                        x1="${c(W,1)}"
                        y1="${c(tt-Y,1)}"
                        x2="${c(W,1)}"
                        y2="${c(tt+Y,1)}"
                        stroke="${ie}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${c(W,1)}"
                        cy="${c(tt,1)}"
                        r="${M(c(A*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${ie}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:y``}
        <path
          d="${Ee}"
          fill="none"
          stroke="url(#${$t})"
          stroke-width="${M(c(A*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${js.map(b=>{let U=yt(b.altitude),W=b.key==="horizon";return y`<g>
            <line
              x1="${c(L,1)}" y1="${c(U,1)}"
              x2="${c(L+w,1)}" y2="${c(U,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${W&&ft?1.5:W?1:.6}"
              stroke-dasharray="${W&&ft?"999 0":W?"3 3":"2 4"}"
              opacity="${W&&ft?.9:W?.6:ft?.3:.45}"
            />
            ${Bs?y`<text
                    x="${c(L+3,1)}"
                    y="${c(U-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${Vs}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${b.label}</text>`:y``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${nn.map(b=>{let U=M(at(b.time.getTime()),L,L+w),W=M(yt(b.altitude),P,B),tt=!b.secondary,Y=tt?M(c(A*.022,1),1.8,3):1.4,ht="var(--smc-marker-strong, rgba(255,255,255,0.9))",Nt="var(--smc-marker-soft, rgba(255,255,255,0.55))",re=b.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":b.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":b.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",ae=tt?re:Nt,Zs=tt?ht:Nt,qs=b.kind==="sunrise"||b.kind==="sunset"?y`
                <circle cx="${c(U,1)}" cy="${c(W,1)}" r="${Y+1}"
                  fill="${b.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${c(U-Y*2.6,1)}"
                  y1="${c(b.kind==="sunrise"?W+Y+2:W-Y-2,1)}"
                  x2="${c(U+Y*2.6,1)}"
                  y2="${c(b.kind==="sunrise"?W+Y+2:W-Y-2,1)}"
                  stroke="${ht}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:y`<circle cx="${c(U,1)}" cy="${c(W,1)}" r="${Y}"
                  fill="${Zs}" opacity="0.85" />`;return y`<g>
            <line
              x1="${c(U,1)}" y1="${c(P,1)}"
              x2="${c(U,1)}" y2="${c(B,1)}"
              stroke="${ae}" stroke-width="${tt?1:.7}"
              stroke-dasharray="3 3" opacity="${tt?.5:.25}" />
            ${qs}
          </g>`})}
      </g>

      ${xt?y`<g class="countdown-track">
              <title>${k.title}</title>
              <line
                x1="${c(wt,1)}" y1="${c(xt.y,1)}"
                x2="${c(xt.endX,1)}" y2="${c(xt.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${c(Rn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${c(wt,1)}" y1="${c(xt.y,1)}"
                x2="${c(xt.endX,1)}" y2="${c(xt.y,1)}"
                stroke="${xt.color}"
                stroke-width="${Rn}"
                stroke-linecap="round" />
              ${xt.endsInside?y`<circle
                      cx="${c(xt.endX,1)}"
                      cy="${c(xt.y,1)}"
                      r="${c(Rn+.8,1)}"
                      fill="${xt.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:y``}
            </g>`:y``}

      <g class="now-marker">
        <line
          x1="${c(wt,1)}" y1="${c(P,1)}"
          x2="${c(wt,1)}" y2="${c(B,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${M(c(A*.012,2),1,1.8)}"
          opacity="0.85" />
        ${l?y`<g class="now-sun ${Ks}" filter="${Ws}">
                <title>${a.t("chartSunNow",{altitude:rt(N,1,a.locale)})}</title>
                <circle
                  cx="${c(wt,1)}"
                  cy="${c(jo,1)}"
                  r="${Zt}"
                  fill="${Fs}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Wo}"
                />
              </g>`:y``}
        ${At&&Ne!==null&&u?y`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:rt(At.altitude,1,a.locale)})}${At.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${Ne===wt?y``:y`<line
                        x1="${c(wt,1)}"
                        y1="${c(At.y,1)}"
                        x2="${c(Ne,1)}"
                        y2="${c(At.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${c(Ne,1)}"
                  cy="${c(At.y,1)}"
                  r="${c(Ot+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Wo}" />
                <g
                  transform="translate(${c(Ne-Ot,1)} ${c(At.y-Ot,1)})"
                  opacity="${At.clamped?.6:1}"
                >
                  ${Wt({size:c(Ot*2,1),illumination:u.illumination,brightLimbAngle:u.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${v}-moon-now`})}
                </g>
              </g>`:y``}
      </g>

      ${Zo?y`<g class="zenith-chip">
              <rect
                x="${c(Xo-rn/2,1)}"
                y="${c(Yo,1)}"
                width="${c(rn,1)}"
                height="${c(an,1)}"
                rx="${c(an/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${c(Xo,1)}"
                y="${c(Yo+an/2+sn*.36,1)}"
                text-anchor="middle"
                font-size="${sn}"
                fill="var(--smc-label-color, #ffffff)"
              >${qo}</text>
            </g>`:y``}

      ${kt?y`<g class="countdown-label">
              <title>${k.title}</title>
              <rect
                x="${c(kt.x,1)}"
                y="${c(kt.y,1)}"
                width="${c(kt.width,1)}"
                height="${c(kt.height,1)}"
                rx="${c(kt.height/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.9" />
              <text
                x="${c(kt.x+kt.width/2,1)}"
                y="${c(kt.y+kt.height/2+kt.fontSize*.36,1)}"
                text-anchor="middle"
                font-size="${kt.fontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${k.label}</text>
            </g>`:y``}

      ${z?y`<line
              x1="${c(L,1)}" y1="${c(B+.5,1)}"
              x2="${c(L+w,1)}" y2="${c(B+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:y``}

      ${se.length?y`<g class="event-labels" font-size="${be}">
              ${se.map(b=>{let U=z?B+2:P;return y`<g>
                  <rect
                    x="${c(b.x-b.width/2,1)}"
                    y="${c(U,1)}"
                    width="${c(b.width,1)}"
                    height="${c(on,1)}"
                    rx="${c(on/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${b.secondary?.6:.88}" />
                  <text
                    x="${c(b.x,1)}"
                    y="${c(U+on/2+be*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${b.secondary?.75:1}"
                  >${b.text}</text>
                </g>`})}
            </g>`:y``}
    </svg>
  `}var Vr=50,Zr=44,is=[[0,"#8f9fd6","#f4a97c"],[12,"#9aaedf","#f7bf8e"],[30,"#a8c4ea","#f6dcb4"],[52,"#b4cdee","#eef0f4"],[66,"#8d9cd8","#d9c3dc"],[78,"#3c4590","#6b6fb4"],[90,"#232a68","#3b428a"],[100,"#1b2159","#323a80"]],qr=[[.13,.55,90,"#f6c2c0",.55],[.3,.42,60,"#fbd9cf",.45],[.58,.3,85,"#ffffff",.55],[.47,.14,50,"#ffffff",.35]];function Qt(i){let e=i;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var h=i=>String(c(i,1));function ss(i,e,t,n,o,s,r,a){let l=-6,d=`M${h(l)},${h(n)}`;for(;l<e+6;){let u=10+i()*28,p=o+i()*(s-o),m=t-p,g=i();if(d+=`L${h(l)},${h(m)}`,g<.12?d+=`L${h(l+u/2)},${h(m-u*.45)}L${h(l+u)},${h(m)}`:g<.2?d+=`A${h(u/2)},${h(u*.42)} 0 0 1 ${h(l+u)},${h(m)}`:g<.28?d+=`L${h(l+u*.42)},${h(m)}L${h(l+u/2)},${h(m-p*.55)}L${h(l+u*.58)},${h(m)}L${h(l+u)},${h(m)}`:g<.38?d+=`L${h(l+u*.6)},${h(m)}L${h(l+u*.6)},${h(m-12)}L${h(l+u*.64)},${h(m-12)}L${h(l+u*.64)},${h(m)}L${h(l+u)},${h(m)}`:g<.48?d+=`L${h(l+u*.25)},${h(m)}L${h(l+u*.25)},${h(m-7)}L${h(l+u*.75)},${h(m-7)}L${h(l+u*.75)},${h(m)}L${h(l+u)},${h(m)}`:d+=`L${h(l+u)},${h(m)}`,r>0&&l>e*.7)for(let f=m+5;f<t-4;f+=6)for(let $=l+3;$<l+u-3;$+=5)i()<r&&a.push({x:$,y:f,w:1.8,h:2.4,opacity:.55+i()*.4});if(l+=u,i()<.18){let f=4+i()*10,$=t-o*.4;d+=`L${h(l)},${h($)}L${h(l+f)},${h($)}`,l+=f}}return`${d}L${h(l)},${h(n)}Z`}function rs(i,e,t,n,o,s){let r=Array.from({length:s},(d,u)=>({x:(u+.2+i()*.6)/s*e,h:o*(.45+i()*.55),w:e/s*(.9+i()*.9)})),a=Math.max(40,Math.round(e/6)),l=`M-4,${h(n)}`;for(let d=0;d<=a;d++){let u=-4+(e+8)*d/a,p=o*.12;for(let m of r)p=Math.max(p,m.h*(1-Math.abs(u-m.x)/m.w));p+=(i()-.5)*o*.06,l+=`L${h(u)},${h(t-M(p,2,o))}`}return`${l}L${h(e+4)},${h(n)}Z`}function as(i,e,t,n,o,s){let r=d=>Math.sin(d/e*Math.PI*1.6+.6)*o*.35,a=`M-4,${h(n)}L-4,${h(t-r(-4))}`,l=-4;for(;l<e+4;){let d=o+i()*(s-o),u=t-r(l);if(i()<.72){let p=d*(.42+i()*.12);a+=`L${h(l)},${h(u)}L${h(l+p*.5)},${h(u-d)}L${h(l+p)},${h(u)}`,l+=p*(.55+i()*.25)}else{let p=d*.32;a+=`L${h(l)},${h(u)}L${h(l)},${h(u-d*.35)}A${h(p)},${h(p)} 0 1 1 ${h(l+p*1.6)},${h(u-d*.35)}L${h(l+p*1.6)},${h(u)}`,l+=p*1.6+i()*4}}return`${a}L${h(e+4)},${h(n)}Z`}function Xr(i,e,t,n,o){let s=[];switch(i){case"city":{let r=ss(Qt(11),e,t,n,18*o,44*o,0,s),a=e*.8,l=84*o,d=`M${h(a-1.6)},${h(t)}L${h(a-1.6)},${h(t-l)}L${h(a-.6)},${h(t-l)}L${h(a-.6)},${h(t-l-16)}L${h(a+.6)},${h(t-l-16)}L${h(a+.6)},${h(t-l)}L${h(a+1.6)},${h(t-l)}L${h(a+1.6)},${h(t)}ZM${h(a+5.5)},${h(t-l*.72)}A5.5,5.5 0 1 0 ${h(a-5.5)},${h(t-l*.72)}A5.5,5.5 0 1 0 ${h(a+5.5)},${h(t-l*.72)}Z`,u=ss(Qt(23),e,t,n,8*o,28*o,.07,s);return{back:`${r}${d}`,front:u,lights:s,waterTop:null}}case"mountains":return{back:rs(Qt(5),e,t,n,78*o,6),front:rs(Qt(9),e,t+2,n,40*o,9),lights:s,waterTop:null};case"forest":return{back:as(Qt(17),e,t-6*o,n,22*o,46*o),front:as(Qt(29),e,t+4*o,n,12*o,28*o),lights:s,waterTop:null};case"coast":{let r=t-10*o,a=Qt(31),l=`M-4,${h(r)}`;for(let f=0;f<=24;f++){let $=-4+e*.55*f/24,x=Math.sin(f/24*Math.PI)*30*o+a()*4*o;l+=`L${h($)},${h(r-x)}`}l+=`L${h(e*.55)},${h(r)}Z`;let d=e*.72,u=e*.84,p=r-14*o,m=46*o,g=`M${h(d)},${h(r)}Q${h(d+e*.06)},${h(p)} ${h(u-10)},${h(p)}L${h(e+4)},${h(p+2)}L${h(e+4)},${h(r)}ZM${h(u-4.5)},${h(p)}L${h(u-2.8)},${h(p-m)}L${h(u+2.8)},${h(p-m)}L${h(u+4.5)},${h(p)}ZM${h(u-3.6)},${h(p-m)}L${h(u)},${h(p-m-8)}L${h(u+3.6)},${h(p-m)}Z`;return s.push({x:u-1.6,y:p-m-4.5,w:3.2,h:3,opacity:.95}),{back:l,front:g,lights:s,waterTop:r}}default:return null}}var Xe=new Map;function Jr(i,e,t,n,o){let s=[i,c(e,0),c(t,0),c(n,0),o].join("|");return Xe.has(s)||(Xe.size>24&&Xe.clear(),Xe.set(s,Xr(i,e,t,n,o))),Xe.get(s)??null}function ls(i){let{profile:e,events:t,now:n,format:o,scene:s,showSun:r,showMoon:a,moonPath:l,moon:d,currentAltitude:u,animations:p,uid:m}=i,g=o.t,f=Math.max(160,i.width),$=Math.max(140,i.height),x=f<480,H=x?Zr:Vr,v=14,D=$-H-4,N=e.samples,k=e.dayStart.getTime(),E=e.dayEnd.getTime(),_=Math.max(1,E-k),A=R=>(R-k)/_*f,C=Math.max(12,e.maxAltitude+8),O=-16,V=R=>v+(C-R)/(C-O)*(D-v),z=V(0),J=M(A(n.getTime()),0,f),L=R=>R.map((it,ft)=>`${ft?"L":"M"}${h(A(it.time))},${h(V(it.altitude))}`).join(""),w={skyTop:`${m}-sky-top`,skyHor:`${m}-sky-hor`,horFade:`${m}-hor-fade`,horMask:`${m}-hor-mask`,soft:`${m}-soft`,softer:`${m}-softer`,sunGlow:`${m}-sun-glow`,sunCore:`${m}-sun-core`,moonGlow:`${m}-moon-glow`,dayFill:`${m}-day-fill`,dayFade:`${m}-day-fade`,nightFill:`${m}-night-fill`,curve:`${m}-curve`,band:`${m}-band`,horizonLine:`${m}-horizon-line`,back:`${m}-scene-back`,front:`${m}-scene-front`,water:`${m}-water`,above:`${m}-above`,below:`${m}-below`,past:`${m}-past`,future:`${m}-future`},P=Qt(7),Z=[];for(let R=0;R<(x?45:90);R++){let it=P()*f,ft=v+P()*(z-v-6),ge=M((it/f-.68)/.12,0,1)*(.4+P()*.6),Ee=.5+P()*.9;ge>.04&&Z.push(y`<circle cx="${h(it)}" cy="${h(ft)}" r="${c(Ee,2)}" fill="#fff"
        opacity="${c(ge,2)}" />`)}let B=Math.min(1,f/740),Q=qr.map(([R,it,ft,ge,Ee])=>{let Tt=ft*B,oe=R*f,ie=v+it*(z-v);return y`<g opacity="${Ee}" fill="${ge}" filter="url(#${w.soft})">
      <ellipse cx="${h(oe)}" cy="${h(ie)}" rx="${h(Tt)}" ry="${h(Tt*.22)}" />
      <ellipse cx="${h(oe-Tt*.35)}" cy="${h(ie+3)}" rx="${h(Tt*.5)}" ry="${h(Tt*.18)}" />
      <ellipse cx="${h(oe+Tt*.3)}" cy="${h(ie-4)}" rx="${h(Tt*.45)}" ry="${h(Tt*.2)}" />
    </g>`}),G=$-H+8,F=Jr(s,f,G,$,x?.8:1),ot=N.length?L(N):"",Pt=N[0],at=N[N.length-1],yt=N.length?`${ot}L${h(A(at.time))},${h(z)}L${h(A(Pt.time))},${h(z)}Z`:"",X=N.length?`${ot}L${h(A(at.time))},${h($)}L${h(A(Pt.time))},${h($)}Z`:"",bt=a&&l?.profile.samples.length?L(l.profile.samples):"",pt=[{time:t.sunrise,label:g("sunrise"),short:g("sunriseShort"),dashed:!0},{time:t.solarNoon,label:g("sceneNoon"),short:g("sceneNoonShort"),dashed:!1},{time:t.sunset,label:g("sunset"),short:g("sunsetShort"),dashed:!0}].filter(R=>R.time instanceof Date),j=x?34:48,gt=[20,10,-10].filter(R=>R<C-2&&R>O+2),_t=x?78:92,$t=M(V(u),v+12,$-H-6),jt=u>-2,Ye=x?30:40,Qe=x?11:15,ne=x?10:14,Ae=f-(x?44:62),Ce=v+(x?26:34),pe=M(z/$,0,1);return y`
    <svg
      class="scene-chart"
      width="${h(f)}"
      height="${h($)}"
      viewBox="0 0 ${h(f)} ${h($)}"
      role="img"
      aria-label="${g("title")}"
    >
      <defs>
        <linearGradient id="${w.skyTop}" x1="0" x2="1" y1="0" y2="0">
          ${is.map(([R,it])=>y`<stop offset="${R}%" stop-color="${it}" />`)}
        </linearGradient>
        <linearGradient id="${w.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${is.map(([R,,it])=>y`<stop offset="${R}%" stop-color="${it}" />`)}
        </linearGradient>
        <linearGradient id="${w.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${c(pe,3)}" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask id="${w.horMask}">
          <rect width="${h(f)}" height="${h($)}" fill="url(#${w.horFade})" />
        </mask>
        <filter id="${w.soft}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="${w.softer}" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="${w.sunGlow}">
          <stop offset="0" stop-color="#ffe9a3" stop-opacity="0.95" />
          <stop offset="0.45" stop-color="#ffd36b" stop-opacity="0.45" />
          <stop offset="1" stop-color="#ffc24a" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="${w.sunCore}" cx="0.4" cy="0.38">
          <stop offset="0" stop-color="#fffbe8" />
          <stop offset="0.6" stop-color="#ffe17a" />
          <stop offset="1" stop-color="#f7b733" />
        </radialGradient>
        <radialGradient id="${w.moonGlow}">
          <stop offset="0" stop-color="#dfe4ff" stop-opacity="0.35" />
          <stop offset="1" stop-color="#dfe4ff" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="${w.dayFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(V(e.maxAltitude))}" y2="${h(z)}">
          <stop offset="0" stop-color="#ffcf5c" stop-opacity="0.95" />
          <stop offset="0.7" stop-color="#ffd27a" stop-opacity="0.8" />
          <stop offset="1" stop-color="#ffe7b8" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient id="${w.dayFade}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(z-4)}" y2="${h(z+36)}">
          <stop offset="0" stop-color="#ffe2a6" stop-opacity="0.75" />
          <stop offset="1" stop-color="#ffe2a6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${w.nightFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(z)}" y2="${h($)}">
          <stop offset="0" stop-color="#a9b4ee" stop-opacity="0" />
          <stop offset="0.22" stop-color="#7f8fe0" stop-opacity="0.45" />
          <stop offset="0.55" stop-color="#4a5ab8" stop-opacity="0.8" />
          <stop offset="1" stop-color="#25307a" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="${w.curve}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(v)}" y2="${h($)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${c(pe,3)}" stop-color="#f59e0b" />
          <stop offset="${c(Math.min(1,pe+.001),3)}" stop-color="#b9c3ff" />
          <stop offset="1" stop-color="#b9c3ff" />
        </linearGradient>
        <linearGradient id="${w.band}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" stop-opacity="0" />
          <stop offset="0.45" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" />
        </linearGradient>
        <linearGradient id="${w.horizonLine}" gradientUnits="userSpaceOnUse"
          x1="0" x2="${h(f)}" y1="0" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0.9" />
          <stop offset="0.85" stop-color="#fff" stop-opacity="0.75" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${w.back}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#8a6f9e" />
          <stop offset="0.5" stop-color="#5f6aa8" />
          <stop offset="1" stop-color="#2a3170" />
        </linearGradient>
        <linearGradient id="${w.front}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#6f5a88" />
          <stop offset="0.5" stop-color="#3f4888" />
          <stop offset="1" stop-color="#1c2257" />
        </linearGradient>
        <linearGradient id="${w.water}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#e9a88f" />
          <stop offset="0.45" stop-color="#9fb6e3" />
          <stop offset="0.75" stop-color="#5865a8" />
          <stop offset="1" stop-color="#262d6c" />
        </linearGradient>
        <clipPath id="${w.above}"><rect width="${h(f)}" height="${h(z)}" /></clipPath>
        <clipPath id="${w.below}">
          <rect y="${h(z)}" width="${h(f)}" height="${h($-z)}" />
        </clipPath>
        <clipPath id="${w.past}"><rect width="${h(J)}" height="${h($)}" /></clipPath>
        <clipPath id="${w.future}">
          <rect x="${h(J)}" width="${h(f-J)}" height="${h($)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${h(f)}" height="${h($)}" fill="url(#${w.skyTop})" />
        <rect width="${h(f)}" height="${h($)}" fill="url(#${w.skyHor})"
          mask="url(#${w.horMask})" />
        ${Z}
        ${Q}
      </g>

      ${r&&yt?y`<g class="day-area">
              <path d="${yt}" fill="url(#${w.dayFill})" clip-path="url(#${w.above})"
                opacity="0.92" />
              <path d="${X}" fill="url(#${w.nightFill})" clip-path="url(#${w.below})" />
              <g clip-path="url(#${w.below})">
                <path d="${X}" fill="url(#${w.dayFade})" filter="url(#${w.softer})" />
              </g>
            </g>`:y``}

      ${F?y`<g class="silhouette" data-scene="${s}">
              ${F.waterTop!==null?y`<rect class="water" x="0" y="${h(F.waterTop)}" width="${h(f)}"
                      height="${h($-F.waterTop)}" fill="url(#${w.water})" opacity="0.55" />
                    ${[0,1,2,3].map(R=>y`<line x1="${h(f*(.08+R*.21))}"
                        x2="${h(f*(.16+R*.21))}"
                        y1="${h(F.waterTop+5+R*3)}" y2="${h(F.waterTop+5+R*3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`)}`:y``}
              <path d="${F.back}" fill="url(#${w.back})" opacity="0.35" />
              <path d="${F.front}" fill="url(#${w.front})" opacity="0.6" />
              ${F.lights.map(R=>y`<rect x="${h(R.x)}" y="${h(R.y)}" width="${R.w}"
                  height="${R.h}" fill="#ffd98a" opacity="${c(R.opacity,2)}" />`)}
            </g>`:y``}

      <line class="horizon" x1="${_t}" x2="${h(f)}" y1="${h(z)}" y2="${h(z)}"
        stroke="url(#${w.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${pt.map(R=>{let it=h(A(R.time.getTime()));return R.dashed?y`<line x1="${it}" x2="${it}" y1="0" y2="${h($-H+6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`:y`<line x1="${it}" x2="${it}" y1="0" y2="${h($-H+6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`})}
      </g>

      ${bt?y`<path class="moon-curve" d="${bt}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`:y``}

      ${r&&ot?y`<g class="sun-path">
              <g clip-path="url(#${w.past})">
                <path d="${ot}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${w.future})">
                <path d="${ot}" fill="none" stroke="url(#${w.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[t.sunrise,t.sunset].filter(R=>R instanceof Date).map(R=>y`<circle cx="${h(A(R.getTime()))}" cy="${h(z)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${R.getTime()<n.getTime()?2:3.2}" />`)}
            </g>`:y``}

      ${a&&d?y`<g class="night-moon">
              <circle cx="${h(Ae)}" cy="${h(Ce)}" r="${ne*2.1}"
                fill="url(#${w.moonGlow})" />
              <g transform="translate(${h(Ae-ne)} ${h(Ce-ne)})">
                ${Wt({size:ne*2,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#2b3270",texture:!1,uid:`${m}-night-moon`})}
              </g>
            </g>`:y``}

      ${r?y`<g class="now-sun ${p?"smc-pulse":""}">
              <title>${g("chartSunNow",{altitude:rt(u,1,o.locale)})}</title>
              <circle cx="${h(J)}" cy="${h($t)}" r="${Ye}"
                fill="url(#${w.sunGlow})" opacity="${jt?1:.35}" />
              <circle cx="${h(J)}" cy="${h($t)}" r="${Qe}" fill="url(#${w.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${jt?1:.55}" />
            </g>`:y``}

      <g class="axis">
        <text x="10" y="${h(v+4)}" class="scene-axis">${g("elevation")}</text>
        ${gt.map(R=>y`<text x="10" y="${h(V(R)+4)}" class="scene-axis">${R>0?R:`\u2212${-R}`}°</text>
            <line x1="${x?34:40}" x2="${x?40:48}" y1="${h(V(R))}"
              y2="${h(V(R))}" stroke="#fff" opacity="0.8" />`)}
        <text x="10" y="${h(z-5)}" class="scene-axis strong">${g("horizon")}</text>
      </g>

      <rect class="band" x="0" y="${h($-H-18)}" width="${h(f)}"
        height="${h(H+18)}" fill="url(#${w.band})" />
      <g class="event-labels">
        ${pt.map(R=>{let it=h(M(A(R.time.getTime()),j,f-j));return y`<text x="${it}" y="${h($-H+22)}" text-anchor="middle"
              class="scene-time">${st(R.time,o)}</text>
            <text x="${it}" y="${h($-H+38)}" text-anchor="middle"
              class="scene-label">${x?R.short:R.label}</text>`})}
      </g>
    </svg>
  `}var et=i=>String(c(i,1));function cs(i){let{profile:e,events:t,now:n,format:o,showSun:s,showMoon:r,moonPath:a,sunAltitude:l,moonAltitude:d}=i,u=o.t,p=Math.max(160,i.width),m=Math.max(100,i.height),f=p<480?64:92,$=6,x=34,v=m-30-8,D=Math.max(40,p-f-$),N=e.dayStart.getTime(),k=e.dayEnd.getTime(),E=Math.max(1,k-N),_=G=>f+(G-N)/E*D,A=r?a?.profile.samples??[]:[],C=A.reduce((G,ut)=>Math.max(G,ut.altitude),-90),O=Math.max(8,s?e.maxAltitude:-90,C)+4,V=-Math.max(14,O*.85),z=4,J=G=>V+z*Math.log1p(Math.exp((G-V)/z)),L=G=>x+(O-Math.min(O,J(G)))/(O-V)*(v-x),w=L(0),P=_(n.getTime()),Z=G=>G.map((ut,F)=>`${F?"L":"M"}${et(_(ut.time))},${et(L(ut.altitude))}`).join(""),B=[0,6,12,18,24].map(G=>{let ut=f+G/24*D,F=G===0?"start":G===24?"end":"middle";return y`<text x="${et(ut+(G===0?-4:G===24?4:0))}" y="${et(m-8)}" text-anchor="${F}"
      class="clean-axis">${String(G).padStart(2,"0")}:00</text>`}),Q=[t.sunrise,t.sunset].filter(G=>G instanceof Date);return y`
    <svg
      class="clean-chart"
      width="${et(p)}"
      height="${et(m)}"
      viewBox="0 0 ${et(p)} ${et(m)}"
      role="img"
      aria-label="${u("title")}"
    >
      <text x="0" y="${et(w+4)}" class="clean-horizon-label">${u("horizon")}</text>
      <line class="clean-horizon" x1="${f}" x2="${et(p-$)}" y1="${et(w)}"
        y2="${et(w)}" stroke-dasharray="6 6" />
      <line class="clean-now" x1="${et(P)}" x2="${et(P)}" y1="${et(x-8)}" y2="${et(v)}" />
      <text x="${et(P)}" y="${et(x-14)}" text-anchor="middle" class="clean-now-label">${u("cleanNow")}</text>
      ${A.length?y`<path class="clean-moon-path" d="${Z(A)}" />`:y``}
      ${s&&e.samples.length?y`<path class="clean-sun-path" d="${Z(e.samples)}" />
            ${Q.map(G=>y`<circle class="clean-sun-mark" cx="${et(_(G.getTime()))}"
                cy="${et(w)}" r="6" />`)}`:y``}
      ${A.length?y`<circle class="clean-moon-now" cx="${et(P)}" cy="${et(L(d))}" r="6">
              <title>${u("chartMoonNow",{altitude:rt(d,1,o.locale)})}</title>
            </circle>`:y``}
      ${s?y`<circle class="clean-sun-now" cx="${et(P)}" cy="${et(L(l))}" r="7">
              <title>${u("chartSunNow",{altitude:rt(l,1,o.locale)})}</title>
            </circle>`:y``}
      ${B}
    </svg>
  `}function ko(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Yr(i,e,t){let n=[];for(let o=0;o<e;o++){let s=Math.sqrt(ko(i*7.13+o*1.37))*t*.96,r=ko(i*3.71+o*2.11)*360,a=Kt({x:0,y:0},s,r),l=ko(i*5.19+o*4.53);n.push({x:a.x,y:a.y,r:.35+l*.75,opacity:.16+l*.34})}return n}function Mo(i,e){return M((90-i)/90*e,0,e)}function So(i){let{width:e,height:t,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:l,palette:d,format:u,animations:p,uid:m,showCardinals:g=!0,seed:f=0}=i,$=Math.max(80,e),x=Math.max(80,t),H=6,v={x:$/2,y:x/2},D=Math.max(10,Math.min($,x)/2-H),N=`${m}-dome`,k=`${m}-dome-clip`,E=[{key:u.t("compassNorth"),azimuth:0},{key:u.t("compassEast"),azimuth:90},{key:u.t("compassSouth"),azimuth:180},{key:u.t("compassWest"),azimuth:270}],_=M(c(D*.17,1),7,11),A=n?n.altitude>0:!1,C=M(c(D*.11,1),4,11),O=n?Kt(v,Mo(n.altitude,D),n.azimuth):null,V=a&&n&&O,z=o?o.altitude>0:!1,J=M(c(D*.24,1),10,22),L=o?Kt(v,Mo(o.altitude,D),o.azimuth):null,w=l&&o&&L&&r,P=g&&D>=42,Z=M(c(D*.14,1),6.5,9),B=[{altitude:30,radius:D*(60/90)},{altitude:60,radius:D*(30/90)}],G=(n?.altitude??-90)<-6?Yr(Math.max(1,Math.round(f)),46,D):[],ut=s.filter(F=>F.altitude>=-8).map(F=>Kt(v,Mo(F.altitude,D),F.azimuth));return y`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${c($,1)} ${c(x,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${u.t("skyView")}"
    >
      <defs>
        <radialGradient id="${N}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${d.skyTop}" />
          <stop offset="100%" stop-color="${d.skyBottom}" />
        </radialGradient>
        <clipPath id="${k}">
          <circle cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(D,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(D,1)}"
        fill="url(#${N})" opacity="0.55" />

      <g clip-path="url(#${k})">
        ${G.length?y`<g class="stars">
                ${G.map(F=>y`<circle
                      cx="${c(v.x+F.x,1)}"
                      cy="${c(v.y+F.y,1)}"
                      r="${c(F.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${c(F.opacity,2)}" />`)}
              </g>`:y``}
        ${B.map(F=>y`<circle
              cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(F.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${c(v.x-D,1)}" y1="${c(v.y,1)}"
          x2="${c(v.x+D,1)}" y2="${c(v.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${c(v.x,1)}" y1="${c(v.y-D,1)}"
          x2="${c(v.x,1)}" y2="${c(v.y+D,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${ut.length>1?y`<path
                d="M${ut.map(F=>`${c(F.x,1)} ${c(F.y,1)}`).join(" L")}"
                fill="none"
                stroke="${d.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:y``}
      </g>

      <circle
        cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(D,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${P?y`<g
              font-size="${Z}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${B.map(F=>{let ot=Kt(v,F.radius,45);return y`<text
                  x="${c(ot.x,1)}"
                  y="${c(ot.y+Z*.35,1)}"
                >${F.altitude}°</text>`})}
            </g>`:y``}

      ${g?y`<g font-size="${_}" fill="var(--smc-muted-color)" opacity="0.7">
              ${E.map(F=>{let ot=Kt(v,D*.87,F.azimuth);return y`<text
                  x="${c(ot.x,1)}"
                  y="${c(ot.y+_*.35,1)}"
                  text-anchor="middle"
                >${F.key}</text>`})}
            </g>`:y``}

      ${V&&A&&O?y`<g class="${p?"smc-pulse":""}">
              <circle
                cx="${c(O.x,1)}" cy="${c(O.y,1)}" r="${C}"
                fill="${d.lineDay}" opacity="0.28" />
              <circle
                cx="${c(O.x,1)}" cy="${c(O.y,1)}" r="${c(C*.55,1)}"
                fill="${d.lineDay}" />
            </g>`:y``}
      ${a&&n&&!A?so(v,D,n.azimuth,d.lineNight):y``}

      ${w&&z&&L&&r?y`<g transform="translate(${c(L.x-J/2,1)} ${c(L.y-J/2,1)})">
              ${Wt({size:J,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:J>=16,uid:`${m}-moon`})}
            </g>`:y``}
      ${l&&o&&!z?so(v,D,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):y``}
    </svg>
  `}function To(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}function Qr(i){if(typeof i!="string")return null;let[e,t]=i.split(".",2);return!e||!t?null:[e,t]}function us(i,e,t,n,o){typeof i?.callService=="function"&&i.callService(e,t,n,o)}function Ao(i,e,t,n,o){if(!n){o?.();return}switch(n.action){case"none":return;case"open-popup":o?.();return;case"more-info":To(i,"hass-more-info",{entityId:n.entity??t.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),To(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":us(e,"homeassistant","toggle",{entity_id:n.entity??t.entity});return;case"call-service":case"perform-action":{let s=Qr(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,a=typeof n.target=="object"&&n.target!==null?n.target:void 0;us(e,s[0],s[1],r,a);return}case"fire-dom-event":To(window,"ll-custom",n);return;default:return}}function Co(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function ds(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${e}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function Eo(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Dn(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Ln(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var hs="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function Do(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${hs}
        fill="${e}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function ms(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${hs}
        fill="${e}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function Nn(i=20,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${e}" />
      <g stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function ps(i=18,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${e}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${e}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${e}" />
    </svg>
  `}var gs=new Map;function fs(i){let e=gs.get(i);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),gs.set(i,e)),e}function ta(i){try{return fs(i)}catch{return fs("UTC")}}function Lo(i,e){let t=ta(e).formatToParts(i),n={};for(let o of t)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function ys(i,e){let t=Lo(i,e);return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)-Math.floor(i.getTime()/1e3)*1e3}function ea(i,e,t,n=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,e-1,t,n,o,s),l=1440*60*1e3,d=[ys(new Date(a-l),r),ys(new Date(a+l),r)],u=[...new Set(d)].map(m=>a-m).filter(m=>{let g=Lo(new Date(m),r);return g.year===i&&g.month===e&&g.day===t&&g.hour===n&&g.minute===o&&g.second===s}).sort((m,g)=>m-g);if(u.length>0)return new Date(u[0]);let p=Math.min(...d);return new Date(a-p)}function Te(i,e){let t=Lo(i,e);return ea(t.year,t.month,t.day,0,0,0,e)}function bs(i,e){let t=Te(i,e);return Te(new Date(t.getTime()+2160*60*1e3),e)}function St(i,e){return Math.round(Te(i,e).getTime()/(1440*60*1e3))}function $s(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function ct(i,e){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:e}function me(i,e,t){return typeof i=="string"&&e.includes(i)?i:t}function No(i,e,t,n,o,s=0){let r=Mt(i);if(r===null)return e;let a=M(r,t[0],t[1]);return Math.abs(a-r)>1e-9&&o.push(lt(n,"invalidRange",{value:String(i),min:String(t[0]),max:String(t[1])})),s===0?Math.round(a):c(a,s)}function Ho(i,e,t){if(i==null)return null;let n=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=n?.action;if(typeof o!="string"||o.trim()==="")return t.push(lt(e,"invalidAction",{value:String(i)})),null;let s=o.trim();return Fi.includes(s)?{...n,action:s}:(t.push(lt(e,"invalidAction",{value:s})),null)}function _s(i,e="en"){let t=[],n=[],o=i??{},s=ct(o.minimal_mode,I.minimal_mode),r=Se(s),a=s||typeof o.card_style!="string"?I.card_height:Me(o.card_style);if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(M(o.card_height,r[0],r[1])),a!==o.card_height&&n.push(lt(e,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")n.push(lt(e,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let g=Mt(o.card_height);g===null?t.push(lt(e,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(M(g,r[0],r[1]))}let l=null,d=null,u=Mt(o.latitude),p=Mt(o.longitude);return u!==null&&(u>=-90&&u<=90?l=u:n.push(lt(e,"invalidNumber",{value:String(o.latitude)}))),p!==null&&(p>=-180&&p<=180?d=p:n.push(lt(e,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():I.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():I.moon_entity,card_height:a,show_sun:ct(o.show_sun,I.show_sun),show_moon:ct(o.show_moon,I.show_moon),show_twilight:ct(o.show_twilight,I.show_twilight),show_astronomical_details:ct(o.show_astronomical_details,I.show_astronomical_details),compact_mode:ct(o.compact_mode,I.compact_mode),minimal_mode:s,minimal_show_times:ct(o.minimal_show_times,I.minimal_show_times),minimal_show_zenith:ct(o.minimal_show_zenith,I.minimal_show_zenith),sun_marker_size:No(o.sun_marker_size,I.sun_marker_size,Ze,e,n,1),popup_width:No(o.popup_width,I.popup_width,Jt,e,n),popup_height:No(o.popup_height,I.popup_height,Yt,e,n),show_remaining_time:ct(o.show_remaining_time,I.show_remaining_time),remaining_time_focus:me(o.remaining_time_focus,Lt.remainingTimeFocus,I.remaining_time_focus),show_golden_hour:ct(o.show_golden_hour,I.show_golden_hour),show_countdown_tile:ct(o.show_countdown_tile,I.show_countdown_tile),tap_action:Ho(o.tap_action,e,n),hold_action:Ho(o.hold_action,e,n),double_tap_action:Ho(o.double_tap_action,e,n),card_style:me(o.card_style,Lt.cardStyle,I.card_style),scene:me(o.scene,Lt.scene,I.scene),show_sun_info:ct(o.show_sun_info,I.show_sun_info),show_moon_info:ct(o.show_moon_info,I.show_moon_info),theme_mode:me(o.theme_mode,Lt.themeMode,I.theme_mode),animations:ct(o.animations,I.animations),time_format:me(o.time_format,Lt.timeFormat,I.time_format),language:me(o.language,Lt.language,I.language),show_header:ct(o.show_header,I.show_header),show_day_chart:ct(o.show_day_chart,I.show_day_chart),show_sky_view:ct(o.show_sky_view,I.show_sky_view),show_events:ct(o.show_events,I.show_events),show_moon_times:ct(o.show_moon_times,I.show_moon_times),show_footer:ct(o.show_footer,I.show_footer),twilight_level:me(o.twilight_level,Lt.twilightLevel,I.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:l,longitude:d},errors:t,warnings:n}}function xs(i,e){let t=Se(i.minimal_mode);return i.card_height==="auto"?M(qi(e,i.card_style),t[0],t[1]):M(i.card_height,t[0],t[1])}function na(i,e,t,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},l={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:e,location:o,locationName:"",extras:oa(e,ks(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:l,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:t,fatal:!0}}function ks(i){return i==="de"?"de-DE":"en-GB"}function oa(i,e){return{timeZoneLongName:wo(i,e,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function ia(i,e){let t=eo(i.getTime()-27648e5,i.getTime()-6e4);if(t.length===0)return!1;let n=t[t.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function sa(i,e,t){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:e,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=Bi[n-1];return lt(t,"folkName",{name:lt(t,o)})}function ws(i,e,t,n){return i?{time:i,azimuth:vn(i,e,"moon"),dayOffset:St(i,n)-St(t,n)}:null}function ra(i){if(typeof i!="string"||i.trim()==="")return null;let e=new Date(i);return Number.isNaN(e.getTime())?null:e}var vs=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],aa={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function la(i,e,t){let n=$s(e?.config?.time_zone),o=[],s=io(e?.config?.latitude)?e.config.latitude:null,r=io(e?.config?.longitude)?e.config.longitude:null,a=i.latitude??s,l=i.longitude??r,d=he(i.language,e?.locale?.language??e?.language);if(a===null||l===null)return na(t,n,["missing-location",...o],d);let u={latitude:a,longitude:l},p=i.location_name.trim()!==""?i.location_name.trim():e?.config?.location_name??"",m=Te(t,n),g=bs(t,n),f=Qn(u,m,g),$=$n(t,u),x=$.altitude,H=Ve(t.getTime()+6e4,u),v=Xt(t,u),D=wn(t),N=Ci(t,u),k=e?.states?.[i.entity];k||o.push("missing-sun-entity");let E={...f.events},_={};if(k?.attributes)for(let[j,gt]of vs){let _t=ra(k.attributes[gt]),$t=f.events[j];if(_t&&_t>=m&&_t<g&&(!$t||Math.abs(_t.getTime()-$t.getTime())<=Wi)){E[j]=_t,_[j]="ha";continue}_[j]=$t?"computed":"none"}else for(let[j]of vs)_[j]=f.events[j]?"computed":"none";for(let j of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])_[j]=f.events[j]?"computed":"none";let A=k?.attributes?Mt(k.attributes.elevation):null,C=k?.attributes?Mt(k.attributes.azimuth):null,O=i.moon_entity?e?.states?.[i.moon_entity]:void 0,V=O&&typeof O.state=="string"?aa[O.state]??null:null,z=i.show_moon?Ai(u,m,g,N):null,J=[],L=900*1e3;for(let j=m.getTime();j<=g.getTime();j+=L){let gt=$n(j,u);J.push({altitude:gt.altitude,azimuth:gt.azimuth})}let w=null;E.sunrise&&E.sunset&&(w=(E.sunset.getTime()-E.sunrise.getTime())/6e4);let P=Te(new Date(m.getTime()-720*60*1e3),n),Z=Qn(u,P,m),B=Z.events.sunrise&&Z.events.sunset?(Z.events.sunset.getTime()-Z.events.sunrise.getTime())/6e4:null,Q=w!==null&&B!==null?w-B:null,G=Di(t),ut=i.twilight_level==="nautical"?Ft:i.twilight_level==="astronomical"?Ut:Rt,F=j=>j?{time:j.time,rising:j.rising,dayOffset:St(j.time,n)-St(t,n)}:null,ot=i.show_sun?F(to(u,t,Ke)):null,Pt=i.show_twilight?F(to(u,t,ut)):null,at=t.getTime(),X=[N.nextRise,N.nextSet].filter(j=>j instanceof Date&&j.getTime()>at).sort((j,gt)=>j.getTime()-gt.getTime())[0],bt=i.show_moon&&X?{time:X,rising:X.getTime()===N.nextRise?.getTime(),dayOffset:St(X,n)-St(t,n)}:null,pt={timeZoneLongName:wo(n,ks(d),t),previousDaylightMinutes:B,daylightDeltaMinutes:Q,sunBelowHorizon:x<0?Math.abs(x):null,sunriseAzimuth:E.sunrise?vn(E.sunrise,u,"sun"):null,sunsetAzimuth:E.sunset?vn(E.sunset,u,"sun"):null,nextFullMoon:G,nextFullMoonDays:G?Math.round((G.time.getTime()-t.getTime())/(1440*60*1e3)):null,blueMoon:G?ia(G.time,n):!1,moonFolkName:sa(G?.time??null,n,d),moonDistance:Li(t,u,14),moonRise:ws(N.nextRise??N.previousRise,u,t,n),moonSet:ws(N.nextSet??N.previousSet,u,t,n),nextSunEvent:ot,nextTwilightEvent:Pt,nextMoonEvent:bt,goldenHour:i.show_golden_hour?Ti(u,t,Be,bn):null};return f.polar==="polar-day"&&o.push("polar-day"),f.polar==="polar-night"&&o.push("polar-night"),E.sunrise||o.push("no-sunrise-today"),E.sunset||o.push("no-sunset-today"),!E.civilDawn&&!E.civilDusk&&o.push("no-civil-twilight"),{now:t,timeZone:n,location:u,locationName:p,day:f,sun:{altitude:x,azimuth:$.azimuth,phase:Ei(x),rising:H>x,haElevation:A,haAzimuth:C},moon:{position:v,phase:D,events:N,haPhaseName:V},sunTrack:J,moonPath:z,events:E,eventSources:_,extras:pt,daylightMinutes:w,issues:o,fatal:!1}}var Je=new Map;function ca(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight),String(i.show_golden_hour)].join("|")}function ua(i,e){if(!e)return"-";let t=e.states?.[i.entity],n=i.moon_entity?e.states?.[i.moon_entity]:void 0;return[e.config?.time_zone??"",e.config?.latitude??"",e.config?.longitude??"",e.config?.location_name??"",t?.attributes?.next_rising??t?.last_updated??"",t?.attributes?.next_setting??"",t?.attributes?.next_dawn??"",t?.attributes?.next_dusk??"",t?.attributes?.elevation??"",n?.state??""].join("|")}function Ms(i,e,t){let n=Math.floor(t.getTime()/6e4),o=[ca(i),ua(i,e),n,t.getTimezoneOffset()].join("#"),s=Je.get(o);if(s)return s;let r=la(i,e,t);if(Je.size>24){let a=Je.keys().next().value;a!==void 0&&Je.delete(a)}return Je.set(o,r),r}var Ss=un`
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
    /* Kartenstil „scene“ */
    --smc-scene-band: rgba(16, 20, 40, 0.88);
    --smc-scene-text: #eef1fb;
    --smc-scene-muted: #b4bcd8;
    --smc-scene-sun-a: rgba(255, 196, 92, 0.12);
    --smc-scene-sun-b: rgba(255, 196, 92, 0.05);
    --smc-scene-sun-border: rgba(255, 196, 92, 0.22);
    --smc-scene-moon-a: rgba(150, 160, 255, 0.13);
    --smc-scene-moon-b: rgba(150, 160, 255, 0.05);
    --smc-scene-moon-border: rgba(150, 160, 255, 0.22);
    --smc-scene-chip-bg: rgba(255, 255, 255, 0.06);
    --smc-scene-chip-border: rgba(255, 255, 255, 0.12);
    --smc-scene-pin-hole: #1a1f33;
  }

  :host(.smc-light) {
    --smc-scene-band: rgba(244, 246, 252, 0.94);
    --smc-scene-text: #1b2240;
    --smc-scene-muted: #4c5573;
    --smc-scene-sun-a: #fff7ea;
    --smc-scene-sun-b: #fffbf4;
    --smc-scene-sun-border: rgba(242, 178, 80, 0.28);
    --smc-scene-moon-a: #eef0fc;
    --smc-scene-moon-b: #f6f7fe;
    --smc-scene-moon-border: rgba(120, 130, 210, 0.25);
    --smc-scene-chip-bg: rgba(255, 255, 255, 0.9);
    --smc-scene-chip-border: rgba(120, 135, 180, 0.22);
    --smc-scene-pin-hole: #ffffff;
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

  /* ---------- Kartenstil „scene“ ---------- */

  .scene-root {
    gap: 12px;
  }

  .scene-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex: 0 0 auto;
    min-width: 0;
  }

  .scene-place {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  .scene-pin {
    flex: 0 0 auto;
    color: var(--smc-muted-color);
  }

  .scene-place-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .scene-title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.05;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .scene-date {
    font-size: 13px;
    color: var(--smc-muted-color);
    margin-top: 3px;
    white-space: nowrap;
  }

  .scene-chips {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }

  .scene-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 13px;
    border-radius: 999px;
    background: var(--smc-scene-chip-bg);
    border: 1px solid var(--smc-scene-chip-border);
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
  }

  .scene-chip svg {
    width: 16px;
    height: 16px;
    color: #f5a524;
  }

  .scene-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .scene-wrap {
    flex: 0 0 auto;
    border-radius: 16px;
    overflow: hidden;
    line-height: 0;
  }

  .scene-chart .scene-axis {
    font-size: 11.5px;
    fill: #fff;
    opacity: 0.95;
    paint-order: stroke;
    stroke: rgba(70, 60, 120, 0.45);
    stroke-width: 3px;
    stroke-linejoin: round;
  }

  .scene-chart .scene-axis.strong {
    font-weight: 600;
  }

  .scene-chart .scene-time {
    font-size: 13.5px;
    font-weight: 700;
    fill: var(--smc-scene-text);
  }

  .scene-chart .scene-label {
    font-size: 12px;
    fill: var(--smc-scene-muted);
  }

  .scene-tiles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    flex: 0 0 auto;
  }

  .scene-tiles.stacked {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .scene-tile {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 14px 10px 14px;
    border-radius: 16px;
    min-width: 0;
    overflow: hidden;
    box-sizing: border-box;
    outline: none;
  }

  .scene-tile.sun {
    background: linear-gradient(135deg, var(--smc-scene-sun-a), var(--smc-scene-sun-b));
    border: 1px solid var(--smc-scene-sun-border);
  }

  .scene-tile.moon {
    background: linear-gradient(135deg, var(--smc-scene-moon-a), var(--smc-scene-moon-b));
    border: 1px solid var(--smc-scene-moon-border);
  }

  .scene-tile.actionable {
    cursor: pointer;
  }

  .scene-tile.actionable:focus-visible {
    box-shadow: 0 0 0 2px var(--smc-accent);
  }

  .scene-tile-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 236, 170, 0.95), rgba(255, 214, 120, 0.3));
  }

  .scene-tile-icon.moon {
    background: none;
  }

  .scene-tile-body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 0;
    line-height: 1.2;
  }

  .scene-tile-body > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .scene-tile-label,
  .scene-tile-sub {
    font-size: 12.5px;
    color: var(--smc-muted-color);
  }

  .scene-tile-value {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .scene-tile-value.small {
    font-size: 18px;
  }

  .scene-tile-times {
    display: grid;
    gap: 4px;
    flex: 0 0 auto;
  }

  .scene-tile-times > span {
    display: grid;
    grid-template-columns: 14px auto;
    column-gap: 5px;
    align-items: baseline;
    line-height: 1.1;
  }

  .scene-tile-times i {
    font-style: normal;
    font-size: 10px;
    color: var(--smc-muted-color);
  }

  .scene-tile-times b {
    font-size: 14.5px;
    font-weight: 600;
  }

  .scene-tile-times small {
    grid-column: 2;
    font-size: 11px;
    color: var(--smc-muted-color);
  }

  /* Kompakte Kacheln: kleinere Symbole und Schrift, damit beide auch auf
     schmalen Karten nebeneinander passen. */
  .scene-tile.compact {
    gap: 10px;
    padding: 8px 10px;
  }

  .scene-tile.compact .scene-tile-label {
    font-size: 12px;
  }

  .scene-tile.compact .scene-tile-value {
    font-size: 19px;
  }

  .scene-tile.compact .scene-tile-value.small {
    font-size: 16px;
  }

  .scene-tile.compact .scene-tile-sub {
    font-size: 11.5px;
  }

  .scene-chevron {
    flex: 0 0 auto;
    color: var(--smc-muted-color);
    opacity: 0.8;
  }

  /* ---------- Kartenstil „clean“ ---------- */

  ha-card.smc-clean {
    --smc-clean-text: var(--primary-text-color, #1c1f26);
    --smc-clean-muted: var(--secondary-text-color, #5f6573);
    --smc-clean-divider: var(--divider-color, rgba(128, 128, 128, 0.25));
    --smc-clean-chip: var(--secondary-background-color, rgba(128, 128, 128, 0.12));
    --smc-clean-sun: #f59e0b;
    --smc-clean-moon: #7e65b8;
    --smc-clean-sun-soft: rgba(245, 158, 11, 0.18);
    --smc-clean-moon-soft: rgba(126, 101, 184, 0.14);
    color: var(--smc-clean-text);
  }

  ha-card.smc-clean.smc-dark {
    --smc-clean-sun: #f7ad2e;
    --smc-clean-moon: #a08ad8;
    --smc-clean-sun-soft: rgba(247, 173, 46, 0.16);
    --smc-clean-moon-soft: rgba(160, 138, 216, 0.18);
  }

  .clean-root {
    gap: 0;
  }

  .clean-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    flex: 0 0 auto;
    min-width: 0;
  }

  .clean-head-left {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
  }

  .clean-logo {
    flex: 0 0 auto;
    color: var(--smc-clean-sun);
  }

  .clean-head-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .clean-title {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.15;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .clean-header.tiny .clean-head-left {
    gap: 10px;
  }

  .clean-header.tiny .clean-title {
    font-size: 18px;
  }

  .clean-header.tiny .clean-subtitle {
    font-size: 13px;
  }

  .clean-subtitle {
    font-size: 14px;
    color: var(--smc-clean-muted);
    margin-top: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .clean-chips {
    display: flex;
    gap: 8px;
    flex: 0 0 auto;
  }

  .clean-chip {
    padding: 7px 14px;
    border-radius: 999px;
    background: var(--smc-clean-chip);
    font-size: 13.5px;
    font-weight: 500;
    white-space: nowrap;
  }

  .clean-chart-wrap {
    flex: 0 0 auto;
    line-height: 0;
  }

  .clean-chart .clean-axis {
    font-size: 12px;
    fill: var(--smc-clean-muted);
  }

  .clean-chart .clean-horizon-label {
    font-size: 13.5px;
    fill: var(--smc-clean-muted);
  }

  .clean-chart .clean-now-label {
    font-size: 12.5px;
    fill: var(--smc-clean-muted);
  }

  .clean-chart .clean-horizon {
    stroke: var(--smc-clean-divider);
    stroke-width: 1.2;
  }

  .clean-chart .clean-now {
    stroke: var(--smc-clean-muted);
    stroke-width: 1;
    opacity: 0.7;
  }

  .clean-chart .clean-sun-path,
  .clean-chart .clean-moon-path {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .clean-chart .clean-sun-path {
    stroke: var(--smc-clean-sun);
    stroke-width: 2.4;
  }

  .clean-chart .clean-moon-path {
    stroke: var(--smc-clean-moon);
    stroke-width: 2.2;
  }

  .clean-chart .clean-sun-mark,
  .clean-chart .clean-sun-now {
    fill: var(--smc-clean-sun);
  }

  .clean-chart .clean-moon-now {
    fill: var(--smc-clean-moon);
  }

  .clean-chart .clean-sun-now,
  .clean-chart .clean-moon-now {
    stroke: var(--ha-card-background, var(--card-background-color, #fff));
    stroke-width: 2;
  }

  .clean-divider {
    flex: 0 0 auto;
    height: 1px;
    margin: 6px 0 14px;
    background: var(--smc-clean-divider);
  }

  .clean-info {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 18px;
    align-items: center;
    flex: 0 0 auto;
  }

  .clean-info.single,
  .clean-info.stacked {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .clean-sep {
    align-self: stretch;
    background: var(--smc-clean-divider);
  }

  .clean-item {
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
    border-radius: 12px;
    outline: none;
  }

  .clean-item.actionable {
    cursor: pointer;
  }

  .clean-item.actionable:focus-visible {
    box-shadow: 0 0 0 2px var(--smc-accent);
  }

  .clean-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    border-radius: 50%;
  }

  .clean-badge.sun {
    background: var(--smc-clean-sun-soft);
    color: var(--smc-clean-sun);
  }

  .clean-badge.moon {
    background: var(--smc-clean-moon-soft);
    color: var(--smc-clean-moon);
  }

  .clean-item-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.2;
  }

  .clean-item-text > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .clean-item.compact {
    gap: 12px;
  }

  .clean-item.compact .clean-item-label {
    font-size: 12.5px;
  }

  .clean-item.compact .clean-item-value {
    font-size: 18px;
  }

  .clean-item.compact .clean-item-sub {
    font-size: 12px;
  }

  .clean-item-label {
    font-size: 13.5px;
    opacity: 0.85;
  }

  .clean-item-value {
    font-size: 24px;
    font-weight: 500;
  }

  .clean-item-sub {
    font-size: 13.5px;
    color: var(--smc-clean-muted);
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
`,Ts=un`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 8px;
  }

  /* Ausklappbare Bereiche: gleich aufgebaut, mit Zusammenfassung im Kopf. */
  details.group {
    border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.3));
    border-radius: 12px;
    background: var(--card-background-color, transparent);
    overflow: hidden;
  }

  details.group > summary {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    cursor: pointer;
    list-style: none;
    user-select: none;
  }

  details.group > summary::-webkit-details-marker {
    display: none;
  }

  details.group > summary:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: -2px;
    border-radius: 12px;
  }

  .group-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color, #212121);
    flex: 0 0 auto;
  }

  .group-summary {
    flex: 1 1 auto;
    min-width: 0;
    text-align: right;
    font-size: 12.5px;
    color: var(--secondary-text-color, #8a93a8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .group-chevron {
    flex: 0 0 auto;
    color: var(--secondary-text-color, #8a93a8);
    transition: transform 0.18s ease;
  }

  details.group[open] > summary .group-chevron {
    transform: rotate(180deg);
  }

  details.group[open] > summary .group-summary {
    visibility: hidden;
  }

  details.group[open] > summary {
    border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.2));
  }

  .group-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px 14px 14px;
  }

  .editor-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 4px;
  }

  .editor-footer button.link {
    margin-left: auto;
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

  /* Auswahlfelder wachsen mit, damit längere Bezeichnungen lesbar bleiben. */
  select {
    width: auto;
    min-width: 148px;
    max-width: 230px;
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
`;function Ro(i,e){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}var te=class extends Ht{constructor(){super(...arguments);this._open=new Set(["style"])}setConfig(t){this._config={...t}}get _language(){return he(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,n){return lt(this._language,t,n)}_value(t,n){let o=this._config?.[t];return o??n}_update(t){if(!this._config)return;let n={...this._config,...t};for(let[o,s]of Object.entries(t)){let r=I[o];s===r&&o in I&&delete n[o]}this._config=n,Ro(this,n)}_group(t,n,o,s){let r=this._open.has(t);return S`
      <details
        class="group"
        data-group=${t}
        ?open=${r}
        @toggle=${a=>{let l=a.target.open;if(l===this._open.has(t))return;let d=new Set(this._open);l?d.add(t):d.delete(t),this._open=d}}
      >
        <summary>
          <span class="group-title">${this._t(n)}</span>
          <span class="group-summary">${o}</span>
          <svg class="group-chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="group-body">${s}</div>
      </details>
    `}_select(t,n,o,s,r,a={}){let l=String(this._config?.[n]??s);return S`
      <div class="row">
        <label for=${t}>${this._t(o)}</label>
        <div class="control">
          <select
            id=${t}
            .value=${l}
            ?disabled=${a.disabled===!0}
            @change=${d=>{let u=d.target.value;this._update({[n]:u,...a.patch?a.patch(u):{}})}}
          >
            ${r.map(([d,u])=>S`<option value=${d} ?selected=${d===l}>${u}</option>`)}
          </select>
        </div>
      </div>
    `}render(){if(!this._config)return S``;let t=this._config,n=t.card_height,o=n==="auto"||n===null,s=t.minimal_mode===!0,r=Se(s),a=s?I.card_height:Me(t.card_style),l=typeof n=="number"?n:a,d=t.latitude===void 0||t.latitude===null,u=t.card_style??"glass",p=(u==="scene"||u==="clean")&&!s,m={glass:this._t("editorCardStyleGlass"),flat:this._t("editorCardStyleFlat"),horizon:this._t("editorCardStyleHorizon"),scene:this._t("editorCardStyleScene"),clean:this._t("editorCardStyleClean")},g={city:this._t("editorSceneCity"),mountains:this._t("editorSceneMountains"),forest:this._t("editorSceneForest"),coast:this._t("editorSceneCoast"),none:this._t("editorSceneNone")},f=_=>this._value(_,I[_]),$=u==="scene"?`${m.scene.split(" (")[0]} \xB7 ${g[t.scene??"city"]}`:(m[u]??u).split(" (")[0],x=[o?this._t("editorCardHeightAuto"):`${l} px`,s?this._t("editorMinimalMode"):null,!s&&t.compact_mode?this._t("editorCompactMode"):null].filter(Boolean).join(" \xB7 "),H=[["show_sun","editorShowSun"],["show_moon","editorShowMoon"],...p?[["show_sun_info","editorSunInfo"],["show_moon_info","editorMoonInfo"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"]]:[["show_twilight","editorShowTwilight"],["show_astronomical_details","editorShowAstronomicalDetails"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"],["show_sky_view","editorShowSkyView"],["show_events","editorShowEvents"],["show_moon_times","editorShowMoonTimes"],["show_golden_hour","editorGoldenHour"],["show_footer","editorShowFooter"]]],v=H.filter(([_])=>f(_)).length,D=this._t("editorSwitchCount",{on:v,total:H.length}),N=f("show_remaining_time")?this._t(t.remaining_time_focus==="next"?"editorRemainingTimeFocusNext":t.remaining_time_focus==="golden_hour"?"editorRemainingTimeFocusGolden":"editorRemainingTimeFocusSun").split(" (")[0]:this._t("editorOff"),k=[t.language==="de"?"Deutsch":t.language==="en"?"English":this._t("editorLanguageAuto"),t.time_format==="12"?this._t("editorTimeFormat12"):t.time_format==="24"?this._t("editorTimeFormat24"):null].filter(Boolean).join(" \xB7 "),E=d?"Home Assistant":`${c(Number(t.latitude),2)}\xB0, ${c(Number(t.longitude??0),2)}\xB0`;return S`
      <div class="card-config">
        ${this._group("style","editorGroupStyle",$,S`
            ${this._select("cardstyle","card_style","editorCardStyle","glass",Lt.cardStyle.map(_=>[_,m[_]]),{patch:_=>this._styleHeight(_)})}
            ${u==="scene"?this._select("scene","scene","editorScene","city",Lt.scene.map(_=>[_,g[_]])):T}
            ${this._select("theme","theme_mode","editorThemeMode","auto",[["auto",this._t("editorThemeAuto")],["light",this._t("editorThemeLight")],["dark",this._t("editorThemeDark")]])}
            ${this._switch("animations","editorAnimations")}
            ${p?T:this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",I.sun_marker_size),min:Ze[0],max:Ze[1],step:.5,digits:1,set:_=>this._update({sun_marker_size:_})})}
          `)}
        ${this._group("layout","editorGroupLayout",x,S`
            <div class="row">
              <label for="height">${this._t("editorCardHeight")}</label>
              <div class="control height-control">
                <input
                  id="height"
                  type="range"
                  min="${r[0]}"
                  max="${r[1]}"
                  step="${s?2:10}"
                  .value=${String(l)}
                  ?disabled=${o}
                  @input=${_=>this._update({card_height:Number(_.target.value)})}
                />
                <input
                  id="height-number"
                  type="number"
                  aria-label=${this._t("editorCardHeight")}
                  min="${r[0]}"
                  max="${r[1]}"
                  .value=${String(l)}
                  ?disabled=${o}
                  @change=${_=>{let A=Mt(_.target.value);A!==null&&this._update({card_height:Math.round(M(A,r[0],r[1]))})}}
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
                    .checked=${o}
                    @change=${_=>this._update({card_height:_.target.checked?"auto":a})}
                  />
                  <span class="slider"></span>
                </span>
              </div>
            </div>
            <div class="hint">
              ${r[0]}–${r[1]} px · ${this._t("editorDefault")}
              ${a} px
            </div>
            ${p?T:this._switch("compact_mode","editorCompactMode","compact")}
            ${this._switch("minimal_mode","editorMinimalMode","minimal")}
            ${s?S`<div class="hint">${this._t("editorMinimalModeHelp")}</div>
                  ${this._switch("minimal_show_times","editorMinimalTimes","minimal-times")}
                  ${this._switch("minimal_show_zenith","editorMinimalZenith","minimal-zenith")}
                  ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",I.popup_width),min:Jt[0],max:Jt[1],step:20,set:_=>this._update({popup_width:Math.round(_)})})}
                  ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",I.popup_height),min:Yt[0],max:Yt[1],step:20,set:_=>this._update({popup_height:Math.round(_)})})}`:T}
          `)}
        ${this._group("content","editorGroupContent",D,S`
            ${H.map(([_,A])=>this._switch(_,A))}
            ${this._select("twilight","twilight_level","editorTwilightLevel","civil",[["civil",this._t("editorTwilightCivil")],["nautical",this._t("editorTwilightNautical")],["astronomical",this._t("editorTwilightAstronomical")],["all",this._t("editorTwilightAll")]])}
          `)}
        ${this._group("countdown","editorGroupCountdown",N,S`
            ${this._switch("show_remaining_time","editorRemainingTime")}
            ${this._select("remaining-focus","remaining_time_focus","editorRemainingTimeFocus","sun",[["sun",this._t("editorRemainingTimeFocusSun")],["next",this._t("editorRemainingTimeFocusNext")],...t.show_golden_hour?[["golden_hour",this._t("editorRemainingTimeFocusGolden")]]:[]],{disabled:t.show_remaining_time===!1})}
            ${p?T:this._switch("show_countdown_tile","editorCountdownTile")}
          `)}
        ${this._group("locale","editorGroupLocale",k,S`
            ${this._select("language","language","editorLanguage","auto",[["auto",this._t("editorLanguageAuto")],["de","Deutsch"],["en","English"]])}
            ${this._select("timeformat","time_format","editorTimeFormat","auto",[["auto",this._t("editorTimeFormatAuto")],["24",this._t("editorTimeFormat24")],["12",this._t("editorTimeFormat12")]])}
          `)}
        ${this._group("source","editorGroupSource",E,S`
            <div class="row">
              <label for="entity">${this._t("editorEntity")}</label>
              <div class="control">
                <input
                  id="entity"
                  type="text"
                  .value=${this._value("entity",I.entity)}
                  @change=${_=>this._update({entity:_.target.value.trim()})}
                />
              </div>
            </div>
            <div class="row">
              <label for="moonentity">${this._t("editorMoonEntity")}</label>
              <div class="control">
                <input
                  id="moonentity"
                  type="text"
                  .value=${this._value("moon_entity",I.moon_entity)}
                  @change=${_=>this._update({moon_entity:_.target.value.trim()})}
                />
              </div>
            </div>
            <div class="hint">${this._t("editorMoonEntityHint")}</div>
            <div class="row">
              <label for="halocation">${this._t("editorUseHaLocation")}</label>
              <div class="control">
                <span class="switch">
                  <input
                    id="halocation"
                    type="checkbox"
                    .checked=${d}
                    @change=${_=>{if(_.target.checked){let C={...this._config};delete C.latitude,delete C.longitude,this._config=C,Ro(this,C)}else this._update({latitude:c(this.hass?.config?.latitude??0,4),longitude:c(this.hass?.config?.longitude??0,4)})}}
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
                  .value=${String(t.latitude??this.hass?.config?.latitude??"")}
                  ?disabled=${d}
                  @change=${_=>{let A=Mt(_.target.value);this._update({latitude:A===null?void 0:M(A,-90,90)})}}
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
                  .value=${String(t.longitude??this.hass?.config?.longitude??"")}
                  ?disabled=${d}
                  @change=${_=>{let A=Mt(_.target.value);this._update({longitude:A===null?void 0:M(A,-180,180)})}}
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
                  @change=${_=>this._update({location_name:_.target.value})}
                />
              </div>
            </div>
          `)}

        <div class="editor-footer">
          ${this._warnings()}
          <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
        </div>
      </div>
    `}_numberRow(t){let{id:n,labelKey:o,value:s,min:r,max:a,step:l,digits:d=0,set:u}=t,p=m=>String(d===0?Math.round(m):c(m,d));return S`
      <div class="row">
        <label for=${n}>${this._t(o)}</label>
        <div class="control height-control">
          <input
            id=${n}
            type="range"
            min=${r}
            max=${a}
            step=${l}
            .value=${p(s)}
            @input=${m=>u(Number(m.target.value))}
          />
          <input
            id="${n}-number"
            type="number"
            aria-label=${this._t(o)}
            min=${r}
            max=${a}
            step=${l}
            .value=${p(s)}
            @change=${m=>{let g=Mt(m.target.value);g!==null&&u(M(g,r,a))}}
          />
        </div>
      </div>
    `}_styleHeight(t){let n=this._config?.card_height;if(this._config?.minimal_mode===!0)return{};let o=Me(this._config?.card_style),s=Me(t);return s!==o&&(n===void 0||n===o)?{card_height:s}:{}}_warnings(){let t=this._config?.card_height,n=Se(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<n[0]||t>n[1])?S`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:n[0],max:n[1]})}
      </span>`:T}_switch(t,n,o=String(t)){let s=I[t];return S`
      <div class="row">
        <label for="${o}">${this._t(n)}</label>
        <div class="control">
          <span class="switch">
            <input
              id="${o}"
              type="checkbox"
              .checked=${this._value(t,s)}
              @change=${r=>this._update({[t]:r.target.checked})}
            />
            <span class="slider"></span>
          </span>
        </div>
      </div>
    `}_reset(){let t=Sn();this._config=t,Ro(this,t)}};te.styles=Ts,Ct([ve({attribute:!1})],te.prototype,"hass",2),Ct([de()],te.prototype,"_config",2),Ct([de()],te.prototype,"_open",2),te=Ct([pn(Gi)],te);var ee=12,As=17,Bt=class extends Ht{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=t=>{if(!this._popup)return;if(t.key==="Escape"){t.stopPropagation(),this._closeDetails();return}if(t.key!=="Tab")return;let n=this._popupFocusable(),o=n[0],s=n[n.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?n.indexOf(r):-1;if(a===-1){t.preventDefault(),(t.shiftKey?s:o).focus();return}t.shiftKey&&a===0?(t.preventDefault(),s.focus()):!t.shiftKey&&a===n.length-1&&(t.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let t=this._config?.hold_action;t&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(t,!1)},Ui))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=t=>{if(this._held){this._held=!1;return}let n=t.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},Ki)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(t){let n=this._hass;this._hass=t,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=t)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Sn()}setConfig(t){if(!t||typeof t!="object")throw new Error("Invalid configuration");let n=he(t.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=_s(t,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let t=this._resolvedHeight();return Math.max(1,Math.round(t/50))}getGridOptions(){let t=this._resolvedHeight();return{rows:Math.max(1,Math.round(t/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(t){super.willUpdate(t);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&t!==this._width&&(this._width=t)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&(this._width=t)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let t=this._language(),n=M(this._config.popup_width,Jt[0],Jt[1]),o=M(this._config.popup_height,Yt[0],Yt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",lt(t,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",lt(t,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let l=this._config,d={...l,latitude:l.latitude??void 0,longitude:l.longitude??void 0,location_name:l.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},u=document.createElement(ho);u.hass=this.hass;try{u.setConfig(d)}catch{}this._popupCard=u,r.append(u,a),s.append(r),s.addEventListener("click",p=>{p.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let t=document.activeElement;if(!t)return null;let n=t.shadowRoot?.activeElement;return n instanceof HTMLElement?n:t}_popupFocusable(){if(!this._popup)return[];let t=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&t.push(n);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||t.push(s);return t}_handleMinimalKey(t){if(t.key==="Enter"||t.key===" "){t.preventDefault();let n=t.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(t){this._runAction(this._config?.tap_action??null,!0,t)}_runAction(t,n,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Ao(r,this.hass,s,t,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(t){if(t.has("_config")||t.has("_width")||t.has("_tick"))return!0;if(t.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(t=>{let n=t.some(o=>o.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,zi()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let t=this._config,n=this.hass;if(!n||!t)return"";let o=n.states?.[t.entity],s=t.moon_entity?n.states?.[t.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?xs(this._config,this._width||400):I.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return he(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let t=this._config;if(!t)return S``;let n=this._width||400,o=this._resolvedHeight(),s=Zi(o,n,t),r=Ms(t,this.hass,new Date),a=this._language(),l=this._isDark(),d=l?mo:po;if(r.fatal)return S`
        <ha-card
          class=${mt({"smc-dark":l,"smc-light":!l,"smc-minimal":s.minimal})}
          style=${K({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${ps(18)}</span>
              <span>${lt(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let u=ts(a,this._locale(),r.timeZone,Yi(t.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?S`
        <ha-card
          class=${mt({"smc-dark":l,"smc-light":!l,"smc-minimal":!0})}
          style=${K({height:`${o}px`})}
          role="button"
          tabindex="0"
          aria-label=${this._minimalAriaLabel(r,u)}
          title=${this._minimalTitle(r,u)}
          @pointerdown=${this._onMinimalPointerDown}
          @pointerup=${this._onMinimalPointerUp}
          @pointercancel=${this._onMinimalPointerCancel}
          @click=${this._onMinimalClick}
          @keydown=${this._handleMinimalKey}
        >
          <div
            class=${mt({root:!0,minimal:!0})}
            style=${K({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
          >
            ${this._renderMinimalTimes(r,u,s,t)}
            <div
              class="chart-wrap minimal"
              style=${K({height:`${s.chartHeight}px`})}
            >
              ${xo({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style==="scene"||t.card_style==="clean"?"glass":t.card_style,compact:!1,minimal:!0,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:t.card_style==="scene"?this._renderSceneCard(r,u,t,d,l,n,o):t.card_style==="clean"?this._renderCleanCard(r,u,t,l,n,o):S`
      <ha-card
        class=${mt({"smc-dark":l,"smc-light":!l})}
        style=${K({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,u)}
      >
        <div
          class=${mt({root:!0,compact:s.compact})}
          style=${K({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
        >
          ${s.showHeader?this._renderHeader(r,u,d,s):T}

          <div
            class=${mt({body:!0,columns:s.skyViewSide})}
            style=${K({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${t.show_day_chart?S`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${K({height:`${s.chartHeight}px`})}
                  >
                    ${xo({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style,compact:s.compact,minimal:!1,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,u,s),showGoldenHour:t.show_golden_hour,moonPath:r.moonPath,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(u,s.legendHeight):T}
                </div>`:T}
            ${s.skyViewSide?S`<div
                  class="sky-column"
                  style=${K({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${So({width:s.skyViewWidth,height:s.chartHeight,sun:t.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:t.show_sun,showMoon:t.show_moon,palette:d,format:u,animations:t.animations,uid:`${this._uid}-sky`,seed:St(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,u,s.skyViewWidth,this._countdownRows(s))}
                </div>`:T}
          </div>

          ${s.showEvents?this._renderEvents(r,u,s):T}
          ${s.showDetails?this._renderDetails(r,u,t,s,a,l,n):T}
          ${s.showFooter?this._renderFooter(r,u,t,s):T}
        </div>
      </ha-card>
    `}_renderSceneCard(t,n,o,s,r,a,l){let d=a<480?12:16,u=12,p=Math.max(160,a-2*d),m=o.show_sun&&o.show_sun_info,g=o.show_moon&&o.show_moon_info,f=(m?1:0)+(g?1:0),$=this._infoLayout(p,f,12,330,150),x=$.compact?90:a<480?78:92,H=f===0?0:$.side?x:f*x+(f-1)*10,v=a<480?46:52,D=140,N=o.show_header,k=f>0,E=(A,C)=>l-2*d-(A?v+u:0)-(C?H+u:0);o.show_day_chart&&k&&E(N,!0)<D&&(k=!1),o.show_day_chart&&N&&E(!0,k)<D&&(N=!1);let _=o.show_day_chart?Math.max(D,E(N,k)):0;return S`
      <ha-card
        class=${mt({"smc-dark":r,"smc-light":!r,"smc-scene":!0})}
        style=${K({height:`${l}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,n)}
      >
        <div
          class="root scene-root"
          style=${K({padding:`${d}px`,gap:`${u}px`})}
        >
          ${N?this._renderSceneHeader(t,n,s,a,v):T}
          ${o.show_day_chart?S`<div class="scene-wrap" style=${K({height:`${_}px`})}>
                ${ls({profile:t.day,events:t.events,now:t.now,width:p,height:_,format:n,scene:o.scene,showSun:o.show_sun,showMoon:o.show_moon,moonPath:t.moonPath,moon:o.show_moon?{illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,currentAltitude:t.sun.altitude,animations:o.animations,uid:`${this._uid}-scene`})}
              </div>`:T}
          ${k?S`<div
                class=${mt({"scene-tiles":!0,stacked:!$.side,single:f===1})}
                style=${K({height:`${H}px`})}
              >
                ${m?this._renderSceneSunTile(t,n,a<480,$.compact,$.itemWidth):T}
                ${g?this._renderSceneMoonTile(t,n,a<480,$.compact,$.itemWidth):T}
              </div>`:T}
        </div>
      </ha-card>
    `}_renderCleanCard(t,n,o,s,r,a){let l=r<480,d=l?14:18,u=Math.max(160,r-2*d-2),p=o.show_sun&&o.show_sun_info,m=o.show_moon&&o.show_moon_info,g=(p?1:0)+(m?1:0),f=this._infoLayout(u,g,37,300,140),$=f.side,x=f.compact?62:l?64:72,H=g===0?0:$?x:g*x+(g-1)*12,v=l?52:60,D=21,N=110,k=o.show_header,E=g>0,_=(Q,G)=>a-2*d-(Q?v:0)-(G?H+D:0);o.show_day_chart&&E&&_(k,!0)<N&&(E=!1),o.show_day_chart&&k&&_(!0,E)<N&&(k=!1);let A=o.show_day_chart?Math.max(N,_(k,E)):0,C=this._primaryCountdown(t,n),O=n.t(this._phaseKey(t)),V=t.locationName?`${t.locationName} \xB7 ${qe(t.now,n)}`:qe(t.now,n),z=u<320,J=z?18:l?20:22,L=(z?46:l?54:64)+Math.max(n.t("title").length*J*.56,V.length*(z?13:14)*.53),w=Q=>Q.length*13.5*.58+30,P=u-L-12,B=(C?[{phase:!0,text:C.compact},{phase:!1,text:C.compact},{phase:!0,text:C.duration},{phase:!1,text:C.duration}]:[{phase:!0,text:null},{phase:!1,text:null}]).find(Q=>(Q.phase?w(O)+8:0)+(Q.text?w(Q.text):0)<=P)??{phase:!1,text:null};return S`
      <ha-card
        class=${mt({"smc-dark":s,"smc-light":!s,"smc-clean":!0})}
        style=${K({height:`${a}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,n)}
      >
        <div class="root clean-root" style=${K({padding:`${d}px`})}>
          ${k?S`<div
                class=${mt({"clean-header":!0,tiny:z})}
                style=${K({height:`${v}px`})}
              >
                <div class="clean-head-left">
                  <svg class="clean-logo" width=${z?34:l?40:50}
                    height=${z?27:l?32:40}
                    viewBox="0 0 50 40" aria-hidden="true">
                    <g stroke="currentColor" stroke-width="3" stroke-linecap="round">
                      <line x1="4" y1="35" x2="46" y2="35" /><line x1="25" y1="3" x2="25" y2="9" />
                      <line x1="10" y1="10" x2="14" y2="14" /><line x1="40" y1="10" x2="36" y2="14" />
                      <line x1="3" y1="25" x2="9" y2="25" /><line x1="41" y1="25" x2="47" y2="25" />
                    </g>
                    <path d="M12 30a13 13 0 0 1 26 0z" fill="currentColor" />
                  </svg>
                  <div class="clean-head-text">
                    <span class="clean-title">${n.t("title")}</span>
                    <span class="clean-subtitle">${V}</span>
                  </div>
                </div>
                <div class="clean-chips">
                  ${B.phase?S`<span class="clean-chip phase" title=${O}>${O}</span>`:T}
                  ${C&&B.text?S`<span
                        class="clean-chip countdown-chip"
                        data-body=${C.body}
                        role="img"
                        aria-label=${C.long}
                        title=${C.title}
                        >${B.text}</span
                      >`:T}
                </div>
              </div>`:T}
          ${o.show_day_chart?S`<div class="clean-chart-wrap" style=${K({height:`${A}px`})}>
                ${cs({profile:t.day,events:t.events,now:t.now,width:u,height:A,format:n,showSun:o.show_sun,showMoon:o.show_moon,moonPath:t.moonPath,sunAltitude:t.sun.altitude,moonAltitude:t.moon.position.apparentAltitude})}
              </div>`:T}
          ${E?S`<div class="clean-divider"></div>
                <div
                  class=${mt({"clean-info":!0,stacked:!$,single:g===1})}
                  style=${K({height:`${H}px`})}
                >
                  ${p?this._renderCleanSun(t,n,l,f.compact,f.itemWidth):T}
                  ${p&&m&&$?S`<span class="clean-sep" aria-hidden="true"></span>`:T}
                  ${m?this._renderCleanMoon(t,n,l,f.compact,f.itemWidth):T}
                </div>`:T}
        </div>
      </ha-card>
    `}_infoLayout(t,n,o,s,r){let a=(t-o)/2,l=n===2&&a>=r,d=l?a:t;return{side:l,compact:d<s,itemWidth:d}}_sunTimesText(t,n){let o=s=>s?st(s,n):"\u2014";return`\u2191 ${o(t.events.sunrise)}  \u2193 ${o(t.events.sunset)}`}_moonPositionTexts(t,n){let o=t.moon.position.apparentAltitude,s=rt(o,1,n.locale);return o>=0?[`${s} \xB7 ${Math.round(t.moon.position.azimuth)}\xB0 ${zt(t.moon.position.azimuth,n.language)}`,s]:[`${rt(Math.abs(o),1,n.locale)} ${n.t("belowHorizon")}`,s]}_cleanItem(t,n,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${mt({"clean-item":!0,[t]:!0,compact:n,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??T}
      @keydown=${o?a:T}
    >
      ${r}
    </div>`}_renderCleanSun(t,n,o,s,r){let a=rt(t.sun.altitude,1,n.locale),l=`${Math.round(t.sun.azimuth)}\xB0 ${zt(t.sun.azimuth,n.language)}`,d=s?40:o?50:58,u=r-d-(s?12:16),p=this._fitLabel([`${n.t("azimuth")} ${l}`,l],u,s?12:13.5,.56);return this._cleanItem("sun",s,this._sceneTileAction(this._config.entity),`${n.t("sunAltitude")} ${a}, ${n.t("azimuth")} ${l}`,S`<span class="clean-badge sun" style=${K({width:`${d}px`,height:`${d}px`})}
          >${Nn(s?22:o?26:30,"currentColor")}</span
        >
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([n.t("sunAltitude"),n.t("sun")],u,13,.56)??n.t("sun")}</span
          >
          <span class="clean-item-value">${a}</span>
          <span class="clean-item-sub">${p??l}</span>
        </span>`)}_renderCleanMoon(t,n,o,s,r){let a=s?40:o?50:58,l=r-a-(s?12:16),d=s?12:13.5,u=this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],l,d,.56)??this._moonTimesText(t,n,!0),p=t.moon.haPhaseName??t.moon.phase.phaseKey,m=En(t.moon.phase.illumination,n.locale),g=`${m} ${n.t("illumination")}`,f=this._fitLabel([g,m],l,s?18:24,.56)??m,$=s?20:o?24:28;return this._cleanItem("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${n.t(p)}, ${g}`,S`<span class="clean-badge moon" style=${K({width:`${a}px`,height:`${a}px`})}>
          <svg width=${$} height=${$} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 3.2a9 9 0 1 0 5.3 13.6A7.4 7.4 0 0 1 15.5 3.2z" fill="currentColor" />
          </svg>
        </span>
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([n.t(p),n.t("moon")],l,13,.56)??n.t("moon")}</span
          >
          <span class="clean-item-value">${f}</span>
          <span class="clean-item-sub" title=${this._moonTimesText(t,n,!1)}
            >${u}</span
          >
        </span>`)}_renderSceneHeader(t,n,o,s,r){let a=s<480,l=this._primaryCountdown(t,n),d=n.t(this._phaseKey(t));return S`
      <div class="scene-header" style=${K({height:`${r}px`})}>
        <div class="scene-place">
          <svg class="scene-pin" width="20" height="26" viewBox="0 0 22 28" aria-hidden="true">
            <path
              d="M11 1.5C5.8 1.5 1.8 5.5 1.8 10.6c0 6.6 8 15 8.4 15.4.4.4 1.2.4 1.6 0 .4-.4 8.4-8.8 8.4-15.4C20.2 5.5 16.2 1.5 11 1.5z"
              fill="currentColor"
            />
            <circle cx="11" cy="10.5" r="3.6" fill="var(--smc-scene-pin-hole, #fff)" />
          </svg>
          <div class="scene-place-text">
            <span class="scene-title">${t.locationName||n.t("title")}</span>
            <span class="scene-date">${qe(t.now,n)}</span>
          </div>
        </div>
        <div class="scene-chips">
          ${l?S`<span
                class="scene-chip countdown-chip"
                data-body=${l.body}
                role="img"
                aria-label=${l.long}
                title=${l.title}
                >${l.icon}<span>${a?l.duration:l.compact}</span></span
              >`:T}
          ${a&&l?T:S`<span class="scene-chip phase" title=${d}>
                <span
                  class="scene-dot"
                  style=${K({background:this._phaseColor(t,o)})}
                ></span>
                ${d}
              </span>`}
        </div>
      </div>
    `}_sceneTileAction(t){return!t||!this.hass?.states?.[t]?null:()=>Ao(this,this.hass,this._config,{action:"more-info",entity:t},void 0)}_sceneTile(t,n,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${mt({"scene-tile":!0,[t]:!0,compact:n,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??T}
      @keydown=${o?a:T}
    >
      ${r}
      ${o&&!n?S`<svg class="scene-chevron" width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>`:T}
    </div>`}_renderSceneSunTile(t,n,o,s,r){let a=s?40:o?52:62,l=rt(t.sun.altitude,1,n.locale),d=`${Math.round(t.sun.azimuth)}\xB0 ${zt(t.sun.azimuth,n.language)}`,u=f=>f?st(f,n):"\u2014",p=`${n.t("sunAltitude")} ${l}, ${n.t("azimuth")} ${d}`,m=r-(s?22:30)-a-(s?10:14),g=S`<span
      class="scene-tile-icon"
      style=${K({width:`${a}px`,height:`${a}px`})}
      >${Nn(Math.round(a*.55),"#f5a524")}</span
    >`;return s?this._sceneTile("sun",!0,this._sceneTileAction(this._config.entity),p,S`${g}
          <span class="scene-tile-body">
            <span class="scene-tile-label"
              >${this._fitLabel([n.t("sunAltitude"),n.t("sun")],m,12,.56)??n.t("sun")}</span
            >
            <span class="scene-tile-value">${l}</span>
            <span class="scene-tile-sub">${d}</span>
            <span class="scene-tile-sub">${this._sunTimesText(t,n)}</span>
          </span>`):this._sceneTile("sun",!1,this._sceneTileAction(this._config.entity),p,S`${g}
        <span class="scene-tile-body">
          <span class="scene-tile-label">${n.t("sunAltitude")}</span>
          <span class="scene-tile-value">${l}</span>
          <span class="scene-tile-sub">${n.t("azimuth")} ${d}</span>
        </span>
        <span class="scene-tile-times">
          <span><i aria-hidden="true">▲</i><b>${u(t.events.sunrise)}</b
            ><small>${n.t("sunriseShort")}</small></span
          >
          <span><i aria-hidden="true">▼</i><b>${u(t.events.sunset)}</b
            ><small>${n.t("sunsetShort")}</small></span
          >
        </span>`)}_renderSceneMoonTile(t,n,o,s,r){let a=s?40:o?52:62,l=t.moon.haPhaseName??t.moon.phase.phaseKey,d=En(t.moon.phase.illumination,n.locale),u=`${d} ${n.t("illumination")}`,p=r-(s?22:30)-a-(s?10:14)-(s?0:24),m=s?11.5:12.5,g=this._fitLabel(this._moonPositionTexts(t,n),p,m,.56)??this._moonPositionTexts(t,n)[1],f=this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],p,m,.56)??this._moonTimesText(t,n,!0),$=this._fitLabel([u,d],p,18,.58)??d;return this._sceneTile("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${n.t(l)}, ${u}`,S`<span class="scene-tile-icon moon" style=${K({width:`${a}px`,height:`${a}px`})}
          >${Wt({size:a,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,darkColor:"var(--smc-scene-moon-dark, rgba(92, 102, 160, 0.7))",texture:!s,uid:`${this._uid}-scene-tile-moon`})}</span
        >
        <span class="scene-tile-body">
          <span class="scene-tile-label"
            >${this._fitLabel([n.t(l),n.t("moon")],p,s?12:12.5,.56)??n.t("moon")}</span
          >
          <span class="scene-tile-value small">${$}</span>
          <span class="scene-tile-sub">${g}</span>
          <span class="scene-tile-sub" title=${this._moonTimesText(t,n,!1)}
            >${f}</span
          >
        </span>`)}_renderHeader(t,n,o,s){let r=t.locationName||n.t("title"),a=t.extras,l=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),d=10.5,u=(k,E=!1)=>k.length*d*.58+20+(E?12:0),m=Math.max(0,l-10-108),g=n.t(this._phaseKey(t)),f=u(g,!0),$=this._primaryCountdown(t,n),x=T,H=!0;if($){let k=u($.compact)+As,E=u($.duration)+As,_=null;k+f<=m?(_=$.compact,m-=k):E+f<=m?(_=$.duration,m-=E):E<=m&&(_=$.duration,m-=E,H=!1),_!==null&&(x=S`<span
          class="meta-chip countdown-chip"
          data-body=${$.body}
          role="img"
          aria-label=${$.long}
          title=${$.title}
          >${$.icon}<span>${_}</span></span
        >`)}H&&(m-=f);let v=T;if(t.daylightMinutes!==null){let k=An(t.daylightMinutes,n.t),E=a.daylightDeltaMinutes===null?"":` ${Qi(a.daylightDeltaMinutes,n.t)}`,_=`${n.t("dayLength")} ${k}${E}`,A=u(_);A<=m&&(m-=A,v=S`<span class="meta-chip" title=${n.t("dayLength")}
          >${_}</span
        >`)}let D=T,N=u(a.timeZoneLongName);return N<=m&&(m-=N,D=S`<span class="meta-chip">${a.timeZoneLongName}</span>`),S`
      <div class="header" style=${K({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${qe(t.now,n)}</span>
        </div>
        <div class="header-meta">
          ${x}${v}${D}
          ${H?S`<span class="phase-chip" title=${g}>
                <span
                  class="phase-dot"
                  style=${K({background:this._phaseColor(t,o)})}
                ></span>
                ${g}
              </span>`:T}
        </div>
      </div>
    `}_countdowns(t,n){let o=this._countdownCache;if(o&&o.model===t&&o.context===n)return[...o.entries];let s=this._computeCountdowns(t,n);return this._countdownCache={model:t,context:n,entries:s},[...s]}_computeCountdowns(t,n){let o=this._config;if(!o?.show_remaining_time)return[];let s=t.now.getTime(),r=[],a=(g,f,$,x,H,v=!1)=>{if(!g)return;let D=(g.time.getTime()-s)/6e4;if(!(D>=0))return;let N=D<1,k=N?n.t("countdownNow"):An(D,n.t),E=_=>N?n.t("nowFormat",{event:n.t(_)}):n.t("untilFormat",{event:n.t(_),duration:k});r.push({minutes:D,compact:E($??f),duration:k,time:g.time,rising:g.rising,trailing:v,name:n.t(f),long:E(f),title:`${n.t(f)} ${st(g.time,n)}${g.dayOffset>0?` (${Cn(g.dayOffset,n.t)})`:""}`,icon:x,body:H})},l=t.extras.nextSunEvent;a(l,l?.rising?"sunrise":"sunset",l?.rising?"sunriseShort":"sunsetShort",l?.rising?Co(ee):Eo(ee),"sun");let d=t.extras.nextTwilightEvent;if(d){let g=this._twilightKeys();a(d,d.rising?g.dawn:g.dusk,d.rising?g.dawnShort:g.duskShort,d.rising?Dn(ee):Ln(ee),"twilight")}let u=t.extras.nextMoonEvent;a(u,u?.rising?"moonrise":"moonset",u?.rising?"moonriseShort":"moonsetShort",u?.rising?Do(ee):ms(ee),"moon");let p=t.extras.goldenHour;if(p){let g=p.active?p.end:p.start;g&&a({time:g,rising:!p.active,dayOffset:this._dayOffset(g,t)},p.active?"goldenHourEnd":"goldenHour",p.active?"goldenHourEndShort":"goldenHourShort",ds(ee),"golden")}let m=t.extras.nextFullMoon;return o.show_moon&&m&&a({time:m.time,rising:!0,dayOffset:this._dayOffset(m.time,t)},"fullMoon",null,Do(ee),"moon",!0),r.sort((g,f)=>+!!g.trailing-+!!f.trailing||g.minutes-f.minutes)}_orderedCountdowns(t,n){let o=this._countdowns(t,n),s=this._config?.remaining_time_focus;if(s==="next")return o;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let a of r){let l=o.findIndex(d=>d.body===a&&!d.trailing);l>0&&o.unshift(...o.splice(l,1))}return o}_dayOffset(t,n){return St(t,n.timeZone)-St(n.now,n.timeZone)}_primaryCountdown(t,n){return this._orderedCountdowns(t,n).find(o=>!o.trailing)}_chartCountdown(t,n,o){let s=this._primaryCountdown(t,n);return s?{time:s.time,rising:s.rising,body:s.body,label:o.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let t=this._config?.twilight_level;return t==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:t==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(t,n){return S`
      <div class="legend" aria-hidden="true" style=${K({height:`${n}px`})}>
        <span class="legend-chip"
          ><span class="legend-dot day"></span>${t.t("legendDaylight")}</span
        >
        <span class="legend-chip"
          ><span class="legend-dot twilight"></span>${t.t("legendTwilightShort")}</span
        >
        <span class="legend-chip"
          ><span class="legend-dot night"></span>${t.t("legendNight")}</span
        >
      </div>
    `}_renderSkyReadout(t,n,o,s){let r=this._config,a=[],l=(d,u,p)=>{let m=rt(u,1,n.locale),g=`${Math.round(p)}\xB0 ${zt(p,n.language)}`;return S`<span
        title=${`${n.t("elevation")} ${m} \xB7 ${n.t("azimuth")} ${g}`}
        >${n.t("positionReadout",{body:d,altitude:m,degrees:String(Math.round(p)),direction:zt(p,n.language)})}</span
      >`};r.show_sun&&a.push(l(n.t("sun"),t.sun.altitude,t.sun.azimuth)),r.show_moon&&a.push(l(n.t("moon"),t.moon.position.apparentAltitude,t.moon.position.azimuth));for(let d of this._orderedCountdowns(t,n).slice(0,s))a.push(S`<span title=${d.title}>${d.long}</span>`);return a.length===0||o<150?T:S`<div class="sky-readout">${a}</div>`}_countdownRows(t){let n=this._config,o=(n.show_sun?1:0)+(n.show_moon?1:0),s=t.chartHeight+t.legendHeight+(t.showLegend?yo:0),r=o*fo+yo,a=s-r-Vi;return Math.max(0,Math.min(3,Math.floor(a/fo)))}_renderFooter(t,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),l=n.t(r),d=t.extras.timeZoneLongName,u=n.t("footerMethod"),p=`${l} \xB7 ${d} \xB7 ${u}`,m=9.5*.55,g=x=>x.length*m<=a,f=g(`${l} \xB7 ${d}`)?`${l} \xB7 ${d}`:l,$=g(`${f} \xB7 ${u}`);return S`
      <div
        class="footer"
        title=${p}
        style=${K({height:`${s.footerHeight}px`})}
      >
        <span class="part">${f}</span>
        ${$?S`<span class="part">${u}</span>`:T}
      </div>
    `}_phaseKey(t){if(t.day.polar==="polar-day")return"phasePolarDay";if(t.day.polar==="polar-night")return"phasePolarNight";switch(t.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(t,n){switch(t.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(t,n,o,s=.7){for(let r of t)if(r&&r.length*o*s<=n)return r;return null}_renderCountdownTile(t,n,o,s,r,a,l){let u=t.body==="sun"&&!t.rising?n.t("tileDaylightLeft"):n.t("tileUntil",{event:t.name}),p=this._fitLabel([u,t.name],r,a),m=this._fitLabel([t.duration],r,l+2)??t.duration;return S`<div
      class=${mt({"event-tile":!0,countdown:!0,rising:t.rising,compact:o})}
      data-body=${t.body}
      style=${K({gridColumn:`span ${s}`})}
      title=${t.title}
      role="img"
      aria-label=${t.long}
    >
      <span class="event-head">
        <span class="event-icon">${t.icon}</span>
        <span class="event-time" style=${K({fontSize:`${l+2}px`})}
          >${m}</span
        >
        ${o&&p?S`<span class="event-label" style=${K({fontSize:`${a}px`})}
              >${p}</span
            >`:T}
      </span>
      ${!o&&p?S`<span class="event-label" style=${K({fontSize:`${a}px`})}
            >${p}</span
          >`:T}
    </div>`}_renderEvents(t,n,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),l=this._config,d=[];if(l.show_twilight&&d.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:t.events.civilDawn,icon:Dn(s?14:16),missingText:n.t("noEvent")}),d.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:t.events.sunrise,icon:Co(s?14:16),missingText:n.t("noSunrise")}),d.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:t.events.sunset,icon:Eo(s?14:16),missingText:n.t("noSunset")}),l.show_twilight&&d.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:t.events.civilDusk,icon:Ln(s?14:16),missingText:n.t("noEvent")}),l.twilight_level==="all"||l.show_astronomical_details){let C=[["nauticalDawn",t.events.nauticalDawn,"dawn"],["nauticalDusk",t.events.nauticalDusk,"dusk"],["astronomicalDawn",t.events.astronomicalDawn,"dawn"],["astronomicalDusk",t.events.astronomicalDusk,"dusk"]];for(let[O,V,z]of C)d.push({key:O,kind:z,label:n.t(O),shortLabel:n.t(O),time:V,icon:z==="dawn"?Dn(s?13:15):Ln(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let u=a<300?3:a<420?4:a<560?6:8,p=l.show_countdown_tile?this._primaryCountdown(t,n):void 0,m=p?2:0,g=Math.max(2,u-m),f=C=>C.secondary?2:C.kind==="sunrise"||C.kind==="sunset"?0:1,$=new Set([...d].map((C,O)=>({tile:C,index:O})).sort((C,O)=>f(C.tile)-f(O.tile)||C.index-O.index).slice(0,g).map(C=>C.tile)),x=d.filter(C=>$.has(C)),H=t.now.getTime(),v=x.filter(C=>C.time&&C.time.getTime()>H).sort((C,O)=>C.time.getTime()-O.time.getTime())[0],D=6,N=x.length+m,E=Math.max(40,a-2*r-D*(N-1))/N-10,_=s?E<120?8.5:9:E<92?8.5:9.5,A=E<74?11:E<96?12:12.5;return S`
      <div
        class="events"
        style=${K({gap:`${D}px`,height:`${o.eventsHeight}px`})}
      >
        ${p?this._renderCountdownTile(p,n,s,m,E*m+(m-1)*(D+10),_,A):T}
        ${x.map(C=>{let O=this._fitLabel([C.label,C.shortLabel],E,_),V=C.time?st(C.time,n):C.missingText,z=this._fitLabel([V,"\u2014"],E,A)??"\u2014";return S`
            <div
              class=${mt({"event-tile":!0,[C.kind]:!0,secondary:!!C.secondary,next:C===v,compact:s})}
              title=${`${C.label}: ${V}`}
            >
              <span class="event-head">
                <span class="event-icon">${C.icon}</span>
                <span
                  class=${mt({"event-time":!0,missing:!C.time})}
                  style=${K({fontSize:`${A}px`})}
                >
                  ${z}
                </span>
                ${s&&O?S`<span
                      class="event-label"
                      style=${K({fontSize:`${_}px`})}
                      >${O}</span
                    >`:T}
              </span>
              ${!s&&O?S`<span
                    class="event-label"
                    style=${K({fontSize:`${_}px`})}
                    >${O}</span
                  >`:T}
            </div>
          `})}
      </div>
    `}_renderDetails(t,n,o,s,r,a,l){let d=t.extras,u=t.moon.haPhaseName??t.moon.phase.phaseKey,p=s.skyViewInline&&l>=430,m=(o.show_sun?1:0)+(o.show_moon?1:0)+(p?1:0),f=Math.max(60,l-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,$=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],f,10.5),x=rt(t.sun.altitude,1,n.locale),H=`${Math.round(t.sun.azimuth)}\xB0 ${zt(t.sun.azimuth,r)}`,v=d.sunBelowHorizon!==null?`${rt(d.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,D=this._fitLabel([v?`${v} \xB7 ${H}`:`${n.t("azimuth")} ${H}`,v??H,H],f,9.5),N=d.sunriseAzimuth!==null?`${Math.round(d.sunriseAzimuth)}\xB0 ${zt(d.sunriseAzimuth,r)}`:null,k=d.sunsetAzimuth!==null?`${Math.round(d.sunsetAzimuth)}\xB0 ${zt(d.sunsetAzimuth,r)}`:null,E=o.show_astronomical_details&&N&&k?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:N,set:k}),`${Math.round(d.sunriseAzimuth)}\xB0 / ${Math.round(d.sunsetAzimuth)}\xB0`],f,9.5):null,_=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${t.events.solarNoon?st(t.events.solarNoon,n):"\u2014"} \xB7 ${rt(t.day.maxAltitude,1,n.locale)}`,t.events.solarNoon?st(t.events.solarNoon,n):null],f,9.5):null,A=this._fitLabel([n.t(u),n.t("moon")],f,10.5),C=En(t.moon.phase.illumination,n.locale),O=this._fitLabel([`${C} ${n.t("illumination")}`,C],f,13),V=t.moon.position.apparentAltitude,z=rt(V,1,n.locale),J=`${Math.round(t.moon.position.azimuth)}\xB0 ${zt(t.moon.position.azimuth,r)}`,L=`${n.t("elevation")} ${z} \xB7 ${n.t("azimuth")} ${J}`,w=V>=0?[`${n.t("elevation")} ${z} \xB7 ${J}`,`${z} \xB7 ${J}`,z]:[`${rt(Math.abs(V),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${J}`,`${rt(Math.abs(V),1,n.locale)} ${n.t("belowHorizon")}`,z],P=null,Z="";if(d.moonDistance){let{current:X,min:bt,max:pt}=d.moonDistance,j=Math.max(1,pt-bt),gt=X<=bt+j*.2,_t=X>=bt+j*.8,$t=Tn(X,n.locale),jt=gt?n.t("nearPerigee"):_t?n.t("nearApogee"):"";Z=`${n.t("moonDistance")}: ${$t} \xB7 ${n.t("distanceRange",{min:Tn(bt,n.locale),max:Tn(pt,n.locale)})}`,P=this._fitLabel(jt?[`${$t} \xB7 ${jt}`,$t]:[$t],f,9.5)}let B=this._fitLabel(P?w.flatMap(X=>[`${X} \xB7 ${P}`,X]):w,f,9.5),Q=P!==null&&(B?.includes(P)??!1),G=null,ut="";if(o.show_astronomical_details&&d.nextFullMoon){let X=d.nextFullMoonDays??0,bt=X<=0?n.t("dayToday"):n.t("inDays",{days:String(X)}),pt=`${n.t("nextFullMoon")} ${bt}`,j=d.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",gt=`${pt}${j}${d.moonFolkName?` \xB7 ${d.moonFolkName}`:""}`;ut=d.blueMoon?n.t("blueMoonHint"):d.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),G=this._fitLabel([gt,`${pt}${j}`,pt],f,9.5)}let F=o.show_moon_times?this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],f,9.5):null,ot=[];B&&ot.push({text:B,title:L,position:!0}),F&&ot.push({text:F,title:null}),G&&ot.push({text:G,title:ut}),P&&!Q&&ot.push({text:P,title:Z});let Pt=ot.slice(0,s.detailsHeight>=bo?3:2),at=Q||Pt.some(X=>X.text===P),yt=P&&!at?Z||P:null;return S`
      <div
        class="details"
        style=${K({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?S`
              <div class="detail-tile sun">
                <span class="detail-icon">${Nn(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${$?S`<span class="detail-title">${$}</span>`:T}
                  <span class="detail-value">${x}</span>
                  ${D?S`<span class="detail-sub">${D}</span>`:T}
                  ${_?S`<span class="detail-sub">${_}</span>`:T}
                  ${E?S`<span class="detail-sub">${E}</span>`:T}
                </span>
              </div>
            `:T}
        ${o.show_moon?S`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Wt({size:26,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${A?S`<span class="detail-title">${A}</span>`:T}
                  ${O?S`<span class="detail-value">${O}</span>`:T}
                  ${Pt.map(X=>{let bt=[X.title,X.position?yt:null].filter(Boolean).join(" \xB7 ")||null;return S`<span class="detail-sub" title=${bt??T}
                      >${X.text}</span
                    >`})}
                </span>
              </div>
            `:T}
        ${p?S`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${So({width:56,height:56,sun:o.show_sun?{altitude:t.sun.altitude,azimuth:t.sun.azimuth}:null,moon:o.show_moon?{altitude:t.moon.position.apparentAltitude,azimuth:t.moon.position.azimuth,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,sunTrack:t.sunTrack,moonPhase:t.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?mo:po,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:St(t.now,t.timeZone)})}
                </span>
              </div>
            `:T}
      </div>
    `}_moonTimesText(t,n,o){let s=t.extras.moonRise,r=t.extras.moonSet,a=s&&s.dayOffset!==0?` ${Cn(s.dayOffset,n.t)}`:"",l=s?`\u2191 ${st(s.time,n)}${a}`:"\u2191 \u2014";if(o)return l;let d=r&&r.dayOffset!==0?` ${Cn(r.dayOffset,n.t)}`:"",u=r?`\u2193 ${st(r.time,n)}${d}`:"\u2193 \u2014";return`${l} \xB7 ${u}`}_renderMinimalTimes(t,n,o,s){if(o.minimalTimesHeight<=0)return T;let r=n.t,a=[];if(s.minimal_show_times&&t.events.sunrise){let d=st(t.events.sunrise,n);a.push(S`<span class="minimal-time rise" title=${`${r("sunrise")} ${d}`}
          >↑ ${d}</span
        >`)}if(s.minimal_show_zenith&&t.events.solarNoon){let d=st(t.events.solarNoon,n),u=o.chartWidth<250?d:`${r("zenith")} ${d}`;a.push(S`<span class="minimal-time zenith" title=${`${r("zenith")} ${d}`}
          >${u}</span
        >`)}if(s.minimal_show_times&&t.events.sunset){let d=st(t.events.sunset,n);a.push(S`<span class="minimal-time set" title=${`${r("sunset")} ${d}`}
          >↓ ${d}</span
        >`)}if(a.length===0)return T;let l=M(c(o.minimalTimesHeight*.78,1),8,12);return S`<div
      class="minimal-times"
      style=${K({height:`${o.minimalTimesHeight}px`,fontSize:`${l}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(t,n){return`${this._minimalTitle(t,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(t,n){let o=[this._ariaLabel(t,n)];o.push(`${n.t("sun")} ${rt(t.sun.altitude,0,n.locale)}`);let s=this._primaryCountdown(t,n);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(t,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(t))),t.events.sunrise&&o.push(`${n.t("sunrise")} ${st(t.events.sunrise,n)}`),t.events.sunset&&o.push(`${n.t("sunset")} ${st(t.events.sunset,n)}`),o.join(", ")}};Bt.styles=Ss,Ct([ve({attribute:!1})],Bt.prototype,"hass",1),Ct([de()],Bt.prototype,"_config",2),Ct([de()],Bt.prototype,"_width",2),Ct([de()],Bt.prototype,"_tick",2),Bt=Ct([pn(ho)],Bt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(e=>e.type===`custom:${Mn}`)||window.customCards.push({type:`custom:${Mn}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Bt as SunMoonCard};
