var Xs=Object.defineProperty;var Js=Object.getOwnPropertyDescriptor;var Lt=(i,e,t,n)=>{for(var o=n>1?void 0:n?Js(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Xs(e,t,o),o};var dn=globalThis,hn=dn.ShadowRoot&&(dn.ShadyCSS===void 0||dn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fn=Symbol(),ii=new WeakMap,Oe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(hn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ii.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ii.set(t,e))}return e}toString(){return this.cssText}},si=i=>new Oe(typeof i=="string"?i:i+"",void 0,Fn),mn=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Oe(t,i,Fn)},ri=(i,e)=>{if(hn)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=dn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},Un=hn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return si(t)})(i):i;var{is:Ys,defineProperty:Qs,getOwnPropertyDescriptor:tr,getOwnPropertyNames:er,getOwnPropertySymbols:nr,getPrototypeOf:or}=Object,pn=globalThis,ai=pn.trustedTypes,ir=ai?ai.emptyScript:"",sr=pn.reactiveElementPolyfillSupport,Ge=(i,e)=>i,Fe={toAttribute(i,e){switch(e){case Boolean:i=i?ir:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},gn=(i,e)=>!Ys(i,e),li={attribute:!0,type:String,converter:Fe,reflect:!1,useDefault:!1,hasChanged:gn};Symbol.metadata??=Symbol("metadata"),pn.litPropertyMetadata??=new WeakMap;var Wt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=li){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Qs(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:s}=tr(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??li}static _$Ei(){if(this.hasOwnProperty(Ge("elementProperties")))return;let e=or(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ge("properties"))){let t=this.properties,n=[...er(t),...nr(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Un(o))}else e!==void 0&&t.push(Un(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ri(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Fe).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Fe;this._$Em=o;let a=r.fromAttribute(t,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){let r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??gn)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[Ge("elementProperties")]=new Map,Wt[Ge("finalized")]=new Map,sr?.({ReactiveElement:Wt}),(pn.reactiveElementVersions??=[]).push("2.1.2");var qn=globalThis,ci=i=>i,fn=qn.trustedTypes,ui=fn?fn.createPolicy("lit-html",{createHTML:i=>i}):void 0,fi="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,yi="?"+Qt,rr=`<${yi}>`,he=document,Ke=()=>he.createComment(""),We=i=>i===null||typeof i!="object"&&typeof i!="function",Xn=Array.isArray,ar=i=>Xn(i)||typeof i?.[Symbol.iterator]=="function",Kn=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,di=/-->/g,hi=/>/g,ue=RegExp(`>|${Kn}(?:([^\\s"'>=/]+)(${Kn}*=${Kn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mi=/'/g,pi=/"/g,bi=/^(?:script|style|textarea|title)$/i,Jn=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),S=Jn(1),y=Jn(2),ya=Jn(3),Nt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),gi=new WeakMap,de=he.createTreeWalker(he,129);function $i(i,e){if(!Xn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ui!==void 0?ui.createHTML(e):e}var lr=(i,e)=>{let t=i.length-1,n=[],o,s=e===2?"<svg>":e===3?"<math>":"",r=Ue;for(let a=0;a<t;a++){let l=i[a],d,u,p=-1,m=0;for(;m<l.length&&(r.lastIndex=m,u=r.exec(l),u!==null);)m=r.lastIndex,r===Ue?u[1]==="!--"?r=di:u[1]!==void 0?r=hi:u[2]!==void 0?(bi.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=ue):u[3]!==void 0&&(r=ue):r===ue?u[0]===">"?(r=o??Ue,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?ue:u[3]==='"'?pi:mi):r===pi||r===mi?r=ue:r===di||r===hi?r=Ue:(r=ue,o=void 0);let g=r===ue&&i[a+1].startsWith("/>")?" ":"";s+=r===Ue?l+rr:p>=0?(n.push(d),l.slice(0,p)+fi+l.slice(p)+Qt+g):l+Qt+(p===-2?a:g)}return[$i(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Be=class i{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0,a=e.length-1,l=this.parts,[d,u]=lr(e,t);if(this.el=i.createElement(d,n),de.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=de.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(fi)){let m=u[r++],g=o.getAttribute(p).split(Qt),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:f[2],strings:g,ctor:f[1]==="."?Bn:f[1]==="?"?jn:f[1]==="@"?Vn:xe}),o.removeAttribute(p)}else p.startsWith(Qt)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(bi.test(o.tagName)){let p=o.textContent.split(Qt),m=p.length-1;if(m>0){o.textContent=fn?fn.emptyScript:"";for(let g=0;g<m;g++)o.append(p[g],Ke()),de.nextNode(),l.push({type:2,index:++s});o.append(p[m],Ke())}}}else if(o.nodeType===8)if(o.data===yi)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(Qt,p+1))!==-1;)l.push({type:7,index:s}),p+=Qt.length-1}s++}}static createElement(e,t){let n=he.createElement("template");return n.innerHTML=e,n}};function ve(i,e,t=i,n){if(e===Nt)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,s=We(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=ve(i,o._$AS(i,e.values),o,n)),e}var Wn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??he).importNode(t,!0);de.currentNode=o;let s=de.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new je(s,s.nextSibling,this,e):l.type===1?d=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(d=new Zn(s,this,e)),this._$AV.push(d),l=n[++a]}r!==l?.index&&(s=de.nextNode(),r++)}return de.currentNode=he,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},je=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ve(this,e,t),We(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Nt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ar(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&We(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Be.createElement($i(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new Wn(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=gi.get(e.strings);return t===void 0&&gi.set(e.strings,t=new Be(e)),t}k(e){Xn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let s of e)o===t.length?t.push(n=new i(this.O(Ke()),this.O(Ke()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ci(e).nextSibling;ci(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,o){let s=this.strings,r=!1;if(s===void 0)e=ve(this,e,t,0),r=!We(e)||e!==this._$AH&&e!==Nt,r&&(this._$AH=e);else{let a=e,l,d;for(e=s[0],l=0;l<s.length-1;l++)d=ve(this,a[n+l],t,l),d===Nt&&(d=this._$AH[l]),r||=!We(d)||d!==this._$AH[l],d===T?e=T:e!==T&&(e+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Bn=class extends xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},jn=class extends xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Vn=class extends xe{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=ve(this,e,t,0)??T)===Nt)return;let n=this._$AH,o=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Zn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}};var cr=qn.litHtmlPolyfillSupport;cr?.(Be,je),(qn.litHtmlVersions??=[]).push("3.3.3");var wi=(i,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let s=t?.renderBefore??null;n._$litPart$=o=new je(e.insertBefore(Ke(),s),s,void 0,t??{})}return o._$AI(i),o};var Yn=globalThis,Pt=class extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nt}};Pt._$litElement$=!0,Pt.finalized=!0,Yn.litElementHydrateSupport?.({LitElement:Pt});var ur=Yn.litElementPolyfillSupport;ur?.({LitElement:Pt});(Yn.litElementVersions??=[]).push("4.2.2");var yn=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};var dr={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:gn},hr=(i=dr,e,t)=>{let{kind:n,metadata:o}=t,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(t.name,i),n==="accessor"){let{name:r}=t;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(n==="setter"){let{name:r}=t;return function(a){let l=this[r];e.call(this,a),this.requestUpdate(r,l,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function _e(i){return(e,t)=>typeof t=="object"?hr(i,e,t):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,e,t)}function me(i){return _e({...i,state:!0,attribute:!1})}var $n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wn=i=>(...e)=>({_$litDirective$:i,values:e}),ke=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var pt=wn(class extends ke{constructor(i){if(super(i),i.type!==$n.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=i.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let o=!!e[n];o===this.st.has(n)||this.nt?.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Nt}});var vi="important",mr=" !"+vi,U=wn(class extends ke{constructor(i){if(super(i),i.type!==$n.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{let n=i[t];return n==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[e]){let{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?t.removeProperty(n):t[n]=null);for(let n in e){let o=e[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(mr);n.includes("-")||s?t.setProperty(n,s?o.slice(0,-11):o,s?vi:""):t[n]=o}}return Nt}});var xi=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],_i=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],ki=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],Qn=385000.49;var q=Math.PI/180,Ht=180/Math.PI,pr=1495978707e-1,Si=6378.14,Ve=-.833,It=-6,Bt=-12,jt=-18,vn=6,qe=-4,Ti=-6,Ze=120*1e3;function Xe(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Se(i){return(i-2451545)/36525}function it(i){let e=i%360;return e<0?e+360:e}function gr(i){let e=Se(i);return 23.439291-.0130042*e-164e-9*e*e+504e-9*e*e*e}function fr(i){let e=i-2451545,t=Se(i),n=280.46061837+360.98564736629*e+387933e-9*t*t-t*t*t/3871e4;return it(n)}function to(i){let e=Se(i),t=it(280.46646+e*(36000.76983+e*3032e-7)),n=it(357.52911+e*(35999.05029-1537e-7*e)),o=Math.sin(n*q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*q)*(.019993-101e-6*e)+Math.sin(3*n*q)*289e-6,s=t+o,r=it(125.04-1934.136*e),a=s-.00569-.00478*Math.sin(r*q),d=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(r*q),u=a*q,p=d*q,m=it(Math.atan2(Math.cos(p)*Math.sin(u),Math.cos(u))*Ht),g=Math.asin(Math.sin(p)*Math.sin(u))*Ht;return{ra:m,dec:g}}function yr(i){let e=Se(i),t=it(280.46646+e*(36000.76983+e*3032e-7)),n=it(357.52911+e*(35999.05029-1537e-7*e)),o=Math.sin(n*q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*q)*(.019993-101e-6*e)+Math.sin(3*n*q)*289e-6,s=it(125.04-1934.136*e);return it(t+o-.00569-.00478*Math.sin(s*q))}function br(i){let e=Xe(i),t=Se(e),n=it(357.52911+t*(35999.05029-1537e-7*t)),o=.016708634-t*(42037e-9+1267e-10*t),s=Math.sin(n*q)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*q)*(.019993-101e-6*t)+Math.sin(3*n*q)*289e-6,r=(n+s)*q;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*pr}function eo(i,e,t,n){let o=it(fr(n)+t),s=it(o-i.ra),r=e*q,a=i.dec*q,l=s*q,d=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(l))*Ht,u=it(Math.atan2(Math.sin(l),Math.cos(l)*Math.sin(r)-Math.tan(a)*Math.cos(r))*Ht+180);return{altitude:d,azimuth:u}}function Je(i,e){let t=Xe(i);return eo(to(t),e.latitude,e.longitude,t).altitude}function xn(i,e){let t=Xe(i);return eo(to(t),e.latitude,e.longitude,t)}function $r(i){let e=i;return{D:it(297.8501921+445267.1114034*e-.0018819*e*e+e*e*e/545868-e*e*e*e/113065e3),M:it(357.5291092+35999.0502909*e-1536e-7*e*e+e*e*e/2449e4),Mp:it(134.9633964+477198.8675055*e+.0087414*e*e+e*e*e/69699-e*e*e*e/14712e3),F:it(93.272095+483202.0175233*e-.0036539*e*e-e*e*e/3526e3+e*e*e*e/86331e4)}}function Ai(i){let e=Se(i),t=it(218.3164477+481267.88123421*e-.0015786*e*e+e*e*e/538841-e*e*e*e/65194e3),n=$r(e),o=t;for(let a of xi){let l=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;o+=a[4]*Math.sin(l*q)}let s=0;for(let a of _i){let l=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;s+=a[4]*Math.sin(l*q)}let r=Qn;for(let a of ki){let l=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;r+=a[4]*Math.cos(l*q)}return{longitude:it(o),latitude:s,distanceKm:r}}function Ci(i,e,t){let n=gr(t)*q,o=i*q,s=e*q,r=it(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*Ht),a=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*Ht;return{ra:r,dec:a}}function te(i,e){let t=Xe(i),n=Ai(t),o=Ci(n.longitude,n.latitude,t),s=eo(o,e.latitude,e.longitude,t),r=Math.asin(Si/n.distanceKm)*Ht,a=s.altitude-r*Math.cos(s.altitude*q);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:n}}function wr(i){return .7275*(Math.asin(Si/i)*Ht)-.5667}var vr=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],xr=29.530588853;function _n(i){let e=Xe(i),t=Ai(e),n=Ci(t.longitude,t.latitude,e),o=to(e),s=yr(e),r=br(i),a=t.distanceKm,l=t.latitude*q,d=Math.acos(Math.min(1,Math.max(-1,Math.cos(l)*Math.cos((t.longitude-s)*q)))),u=Math.atan2(r*Math.sin(d),a-r*Math.cos(d)),p=it(u*Ht),m=(1+Math.cos(u))/2,g=(o.ra-n.ra)*q,f=o.dec*q,$=n.dec*q,_=it(Math.atan2(Math.cos(f)*Math.sin(g),Math.sin(f)*Math.cos($)-Math.cos(f)*Math.sin($)*Math.cos(g))*Ht),R=it(t.longitude-s)/360,w=Math.min(7,Math.floor(R*8+.5)%8),D=R*29.530588853;return{illumination:m,phaseAngle:p,elongation:d*Ht,phaseIndex:w,phaseKey:vr[w],brightLimbAngle:_,moonAgeDays:D,waxing:R<.5,distanceKm:a}}function Me(i,e,t,n,o){let s=[];if(!(e>i))return s;let r=Math.max(2,Math.ceil((e-i)/t)),a=(e-i)/r,l=i,d=n(i)-o;for(let u=1;u<=r;u++){let p=i+u*a,m=n(p)-o;if(d===0)s.push({time:l,rising:m>0});else if(d<0&&m>=0||d>0&&m<=0){let g=l,f=p,$=d;for(let _=0;_<50&&f-g>1;_++){let R=(g+f)/2,w=n(R)-o;w<0&&$<0||w>0&&$>0?(g=R,$=w):f=R}s.push({time:(g+f)/2,rising:m>d})}l=p,d=m}return s}function Mi(i,e,t,n){let o=i.find(s=>s.rising===e&&s.time>=t&&s.time<n);return o?new Date(o.time):null}function no(i,e,t,n=4){let o=e.getTime()-27e5,s=t.getTime()+2700*1e3,r=e.getTime(),a=t.getTime(),l=M=>Je(M,i),d=[],u=Math.max(3e4,Math.round(n*60*1e3));for(let M=r;M<a;M+=u)d.push({time:M,altitude:l(M)});d.push({time:a,altitude:l(a)});let p=-1/0,m=1/0;for(let M of d)M.altitude>p&&(p=M.altitude),M.altitude<m&&(m=M.altitude);let g=[["sunrise","sunset",Ve],["civilDawn","civilDusk",It],["nauticalDawn","nauticalDusk",Bt],["astronomicalDawn","astronomicalDusk",jt]],f={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[M,E,v]of g){let C=Me(o,s,Ze,l,v);f[M]=Mi(C,!0,r,a),f[E]=Mi(C,!1,r,a)}let $=r,_=-1/0,R=120*1e3;for(let M=r;M<=a;M+=R){let E=l(M);E>_&&(_=E,$=M)}let w=Math.max(r,$-R),D=Math.min(a,$+R);for(let M=0;M<40&&D-w>1e3;M++){let E=w+(D-w)/3,v=D-(D-w)/3;l(E)<l(v)?w=E:D=v}f.solarNoon=new Date((w+D)/2);let H="none";return m>Ve?H="polar-day":p<Ve&&(H="polar-night"),{dayStart:e,dayEnd:t,samples:d,maxAltitude:p,minAltitude:m,events:f,polar:H}}function oo(i,e,t,n=48){let o=typeof e=="number"?e:e.getTime();if(!Number.isFinite(o)||!Number.isFinite(t))return null;let s=a=>Je(a,i),r=Me(o,o+n*60*60*1e3,Ze,s,t)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Ei(i,e,t,n,o=48){let s=typeof e=="number"?e:e.getTime();if(!Number.isFinite(s)||!(t<n))return null;let r=m=>Je(m,i),a=s+o*60*60*1e3,l=[...Me(s,a,Ze,r,t),...Me(s,a,Ze,r,n)].sort((m,g)=>m.time-g.time),d=m=>m>=t&&m<=n,u=d(r(s)),p=u?s:null;for(let m of l){let g=d(r(m.time+1e3));if(p===null&&g)p=m.time;else if(p!==null&&!g)return{start:new Date(p),end:new Date(m.time),active:u}}return p===null?null:{start:new Date(p),end:null,active:u}}function _r(i,e,t,n=10){let o=e.getTime(),s=t.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),a=[];for(let u=o;u<s;u+=r)a.push({time:u,altitude:te(u,i).apparentAltitude});a.push({time:s,altitude:te(s,i).apparentAltitude});let l=-1/0,d=1/0;for(let u of a)u.altitude>l&&(l=u.altitude),u.altitude<d&&(d=u.altitude);return{samples:a,maxAltitude:l,minAltitude:d}}function Di(i,e,t,n,o=10){let s=e.getTime(),r=t.getTime(),a=l=>{if(!l)return null;let d=l.getTime();return d>=s&&d<r?d:null};return{profile:_r(i,e,t,o),rise:a(n.previousRise)??a(n.nextRise),set:a(n.previousSet)??a(n.nextSet)}}function Li(i,e){let t=i.getTime(),n=t-1800*60*1e3,o=t+1800*60*1e3,r=Me(n,o,Ze,g=>{let f=te(g,e);return f.altitude-wr(f.distanceKm)},0),a=r.filter(g=>g.rising),l=r.filter(g=>!g.rising),d=a.find(g=>g.time>t)??null,u=[...a].reverse().find(g=>g.time<=t)??null,p=l.find(g=>g.time>t)??null,m=[...l].reverse().find(g=>g.time<=t)??null;return{previousRise:u?new Date(u.time):null,previousSet:m?new Date(m.time):null,nextRise:d?new Date(d.time):null,nextSet:p?new Date(p.time):null}}function Ni(i){return i>0?"day":i>It?"civil":i>Bt?"nautical":i>jt?"astronomical":"night"}function kr(i){return(((_n(i).moonAgeDays/xr-.5)%1+1)%1+.5)%1-.5}function io(i,e){let t=typeof i=="number"?i:i.getTime(),n=typeof e=="number"?e:e.getTime();return n>t?Me(t,n,360*60*1e3,kr,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function Hi(i,e=32){let t=typeof i=="number"?i:i.getTime(),o=io(t,t+e*24*60*60*1e3)[0];if(!o)return null;let s=_n(o).illumination;return s<.98?null:{time:o,illumination:s}}function Ri(i,e,t=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-t*24*60*60*1e3,r=n+t*24*60*60*1e3,a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,d=s,u=s;for(let p=s;p<=r;p+=o){let m=te(p,e).distanceKm;m<a&&(a=m,d=p),m>l&&(l=m,u=p)}return{current:te(n,e).distanceKm,min:a,minTime:new Date(d),max:l,maxTime:new Date(u),mean:Qn}}function kn(i,e,t="sun"){return(t==="sun"?xn(i,e):te(i,e)).azimuth}function k(i,e,t){return Number.isNaN(i)?e:Math.min(t,Math.max(e,i))}function so(i,e,t){return i+(e-i)*t}function c(i,e=0){let t=10**e;return Math.round(i*t)/t}function zi(i){let e=i.trim().replace(/^#/,""),t=e.length===3?e.split("").map(o=>o+o).join(""):e;if(!/^[0-9a-fA-F]{6}$/.test(t))return null;let n=Number.parseInt(t,16);return[n>>16&255,n>>8&255,n&255]}function Mr(i){return`#${i.map(e=>Math.round(k(e,0,255)).toString(16).padStart(2,"0")).join("")}`}function ro(i,e,t){let n=zi(i),o=zi(e);if(!n||!o)return e;let s=k(t,0,1);return Mr([so(n[0],o[0],s),so(n[1],o[1],s),so(n[2],o[2],s)])}function ao(i){return typeof i=="number"&&Number.isFinite(i)}function Ct(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let e=Number(i.replace(",","."));if(Number.isFinite(e))return e}return null}function Pi(i){return i.length===0?"":i.map((e,t)=>`${t===0?"M":"L"}${c(e.x,2)} ${c(e.y,2)}`).join(" ")}function Mn(i,e=.5){if(i.length<3)return Pi(i);let t=[`M${c(i[0].x,2)} ${c(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],a=i[n+2]??r,l=s.x+(r.x-o.x)/6*e*2,d=s.y+(r.y-o.y)/6*e*2,u=r.x-(a.x-s.x)/6*e*2,p=r.y-(a.y-s.y)/6*e*2;t.push(`C${c(l,2)} ${c(d,2)} ${c(u,2)} ${c(p,2)} ${c(r.x,2)} ${c(r.y,2)}`)}return t.join(" ")}function Sn(i,e,t=!1){if(i.length===0)return"";let n=t?Mn(i):Pi(i),o=i[0],s=i[i.length-1];return`${n} L${c(s.x,2)} ${c(e,2)} L${c(o.x,2)} ${c(e,2)} Z`}function Vt(i,e,t){let n=t*Math.PI/180;return{x:i.x-e*Math.sin(n),y:i.y-e*Math.cos(n)}}function Ii(i,e,t){let n=k(t,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${c(i.x-e,2)} ${c(i.y,2)} a${c(e,2)} ${c(e,2)} 0 1 1 ${c(e*2,2)} 0 a${c(e,2)} ${c(e,2)} 0 1 1 ${c(-e*2,2)} 0 Z`;let o=e*(1-2*n),s=1,r=o>0?0:1,a={x:i.x-e,y:i.y},l={x:i.x+e,y:i.y};return`M${c(a.x,2)} ${c(a.y,2)} A${c(e,2)} ${c(e,2)} 0 0 ${s} ${c(l.x,2)} ${c(l.y,2)} A${c(e,2)} ${c(Math.abs(o),4)} 0 0 ${r} ${c(a.x,2)} ${c(a.y,2)} Z`}function Oi(i=new Date){let e=i.getTime();return e+(6e4-e%6e4)+250}var Sr=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Zt(i){let{size:e,illumination:t,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:l}=i,d={x:e/2,y:e/2},u=Math.max(1,e/2-.5),p=Ii(d,u,t),m=r&&e>=26,g=c(-n,2);return y`
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
  `}function lo(i,e,t,n){let o=Vt(i,e,t),s=t*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),l=k(e*.12,4,9),d=k(e*.07,2.5,5),u={x:o.x+r*l,y:o.y+a*l},p={x:o.x-a*d,y:o.y+r*d},m={x:o.x+a*d,y:o.y-r*d};return y`
    <polygon
      points="${c(u.x,2)},${c(u.y,2)} ${c(p.x,2)},${c(p.y,2)} ${c(m.x,2)},${c(m.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var An="sun-moon-card",go="sun-moon-card",Ki="sun-moon-card-editor";function Te(i){return i==="scene"?460:i==="clean"?400:340}var Tr=320,Ar=360;var Cr=24,Er=16,co=4,Dr=12,Lr=36,Ye=[2,12],ee=[320,1200],ne=[260,800];function Ae(i){return i?[Cr,800]:[120,800]}var I={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",scene:"city",show_sun_info:!0,show_moon_info:!0,theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},Wi=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],Bi=400,ji=250,Vi=1200*1e3,fo={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},yo={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},Zi=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],bo=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Rt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon","scene","clean"],scene:["city","mountains","forest","coast","none"],remainingTimeFocus:["sun","next","golden_hour"]},qi=700,Nr=260,$o=16,wo=4,Xi=72,Gi=10,po=56,Hr=84,Rr=96,uo=74,zr=po+8,Pr=12,Ir=10,xt=4,Tn=4,Fi=30,Ui=44,Or=26,Gr=72,vo=96,ho=20,mo=18;function Ji(i,e,t){if(t.minimal_mode){let A=(t.minimal_show_times||t.minimal_show_zenith)&&i>=Lr?Dr:0,N=Math.max(Er,i-2*co-A);return{padding:co,minimalTimesHeight:A,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,e-2*co),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:N,minimal:!0,compact:!1}}let n=t.compact_mode,o=n?Ir:Pr,s=Math.max(40,i-2*o),r=0,a=t.show_footer&&!n?ho+xt:0,l=Fi+xt+Ui+xt+a+(mo+Tn)+uo,d=t.show_header&&!n&&s>=l,u=d?Fi:0;s-=u,d&&(s-=xt,r+=xt);let p=n?Or:Ui,m=t.show_events&&s-(p+xt)-a>=Hr,g=m?p:0;s-=g,m&&(s-=xt,r+=xt);let f=t.show_astronomical_details?vo:Gr,$=!n&&(t.show_sun||t.show_moon)&&s-(f+xt)-a>=Rr,_=$?f:0;s-=_,$&&(s-=xt,r+=xt);let R=t.show_footer&&!n&&m&&s-(ho+xt)>=zr,w=R?ho:0;s-=w,R&&(s-=xt,r+=xt);let D=Math.max(po,s),H=t.show_day_chart&&!n&&m&&D-mo-Tn>=uo,M=H?mo:0;H&&(r+=Tn);let E=Math.max(po,D-M-(H?Tn:0)),v=t.show_sky_view&&!n&&(t.show_sun||t.show_moon),C=v&&e>=qi&&E>=uo,L=Math.max(80,e-2*o),P=C?Math.round(Math.min(Nr,(L-Gi)/3)):0,X=Math.max(120,C?L-Gi-P:L);return{padding:o,showHeader:d,showEvents:m,showDetails:$,showFooter:R,showLegend:H,skyViewSide:C,skyViewInline:!C&&v&&$,skyViewWidth:P,chartWidth:X,gaps:r,headerHeight:u,eventsHeight:g,detailsHeight:_,footerHeight:w,legendHeight:M,chartHeight:E,minimal:!1,minimalTimesHeight:0,compact:n}}function Yi(i,e){return e==="clean"?i>=560?400:460:e==="scene"?i>=712?Math.round(Math.min(560,Math.max(440,i*.6))):520:i>=qi?Ar:Tr}function Cn(){return{type:`custom:${An}`,card_height:340}}var xo={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",sceneNoon:"Solarer Mittag",sceneNoonShort:"Mittag",editorCardStyleScene:"Szene (Himmel mit Silhouette)",editorCardStyleClean:"Minimalistisch",cleanNow:"Jetzt",editorScene:"Szene",editorSceneCity:"Stadt",editorSceneMountains:"Berge",editorSceneForest:"Wald",editorSceneCoast:"K\xFCste",editorSceneNone:"Keine",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorGroupStyle:"Kartenstil & Aussehen",editorGroupLayout:"Gr\xF6\xDFe & Layout",editorGroupContent:"Inhalte",editorGroupCountdown:"Restzeit",editorGroupLocale:"Sprache & Zeit",editorGroupSource:"Entit\xE4ten & Standort",editorSunInfo:"Infofeld Sonnenstand",editorMoonInfo:"Infofeld Mond",editorSwitchCount:"{on} von {total} an",editorOff:"aus",editorDefault:"Standard",editorMoonEntityHint:"Die Mondphase wird berechnet; die Bezeichnung kann aus der Mond-Entit\xE4t (z. B. sensor.moon) \xFCbernommen werden.",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",sceneNoon:"Solar noon",sceneNoonShort:"Noon",editorCardStyleScene:"Scene (sky with silhouette)",editorCardStyleClean:"Minimalist",cleanNow:"Now",editorScene:"Scene",editorSceneCity:"City",editorSceneMountains:"Mountains",editorSceneForest:"Forest",editorSceneCoast:"Coast",editorSceneNone:"None",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorGroupStyle:"Card style & appearance",editorGroupLayout:"Size & layout",editorGroupContent:"Content",editorGroupCountdown:"Countdown",editorGroupLocale:"Language & time",editorGroupSource:"Entities & location",editorSunInfo:"Sun position panel",editorMoonInfo:"Moon panel",editorSwitchCount:"{on} of {total} on",editorOff:"off",editorDefault:"default",editorMoonEntityHint:"The moon phase is computed; its name can be taken from the moon entity (e.g. sensor.moon).",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function lt(i,e,t){let o=(xo[i]??xo.en)[e]??xo.en[e]??String(e);if(t)for(let[s,r]of Object.entries(t))o=o.split(`{${s}}`).join(String(r));return o}function pe(i,e){return((i&&i!=="auto"?i:e)??"").toLowerCase().startsWith("de")?"de":"en"}function es(i,e,t){let n=i;if(n==="auto"&&e&&(e==="12"||e==="am_pm"?n="12":e==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var Qi=new Map;function _o(i,e,t){let n=`${e}|${i}`,o=Qi.get(n);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(e,{timeZone:i,timeZoneName:"long"}).formatToParts(t).find(l=>l.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return Qi.set(n,s),s}var ts=new Map;function Fr(i,e,t){let n=`${i}|${e}|${t}`,o=ts.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}ts.set(n,o)}return o}function rt(i,e){return Fr(e.locale,e.timeZone,e.hour12).format(i)}function Qe(i,e){try{return new Intl.DateTimeFormat(e.locale,{weekday:"short",day:"numeric",month:"short",timeZone:e.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function ko(i,e=0,t="de-DE"){try{return new Intl.NumberFormat(t,{minimumFractionDigits:e,maximumFractionDigits:e}).format(i)}catch{return i.toFixed(e)}}function st(i,e=1,t="de-DE"){return`${ko(i,e,t)}\xB0`}function En(i,e="de-DE"){return`${ko(Math.round(i),0,e)} km`}function ns(i,e){return`${i<0?"\u2212":"+"}${Dn(Math.abs(i),e)}`}function Dn(i,e){let t=Math.max(0,Math.round(i));if(t<60)return e("countdownMinutes",{minutes:String(t)});let n=Math.floor(t/60),o=t%60;return n<24?e("countdownHours",{hours:String(n),minutes:String(o)}):e("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function Ln(i,e){return e(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function Nn(i,e="de-DE"){return`${ko(i*100,0,e)} %`}function Ot(i,e){let t=(i%360+360)%360,n=bo[0],o=1/0;for(let r of bo){let a=Math.abs((t-r.deg+540)%360-180);a<o&&(o=a,n=r)}let s=`dir${n.key}`;return lt(e,s)}function os(i,e,t,n){return{language:i,locale:e,timeZone:t,hour12:n,t:(o,s)=>lt(i,o,s)}}var is="var(--smc-golden-hour, #f2b544)",Ur="var(--smc-blue-hour, #4f6fd6)";function ss(i,e,t){let n=[],o=null;for(let s of i){let r=s.altitude>=e&&s.altitude<=t;r&&o===null&&(o=s.time),!r&&o!==null&&(n.push([o,s.time]),o=null)}return o!==null&&i.length&&n.push([o,i[i.length-1].time]),n}function rs(i,e){if(i.length<=e)return i;let t=i.length/e,n=[];for(let s=0;s<e;s++)n.push(i[Math.floor(s*t)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function Kr(i,e,t,n,o){if(i.length<2)return null;let s=e.sunrise?.getTime(),r=e.sunset?.getTime(),a,l;if(s!==void 0&&r!==void 0&&r>s)a=n(s),l=n(r);else if(t==="polar-day")a=i[0].x,l=i[i.length-1].x;else return null;let d=i.filter(u=>u.x>=a-.5&&u.x<=l+.5);return d.length<2?null:{path:Sn(d,o,!0),cx:(a+l)/2,cy:o,r:Math.max(6,(l-a)/2)}}function Wr(i,e){let t=e?Math.max(i.maxAltitude,e.maxAltitude):i.maxAltitude,n=e?Math.min(i.minAltitude,e.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(t-o)*.1),r=k(t+s,-18,90.5);return[k(Math.max(-28,n-2),-90,r-6),r]}function Mo(i,e,t=2.2){let n=[0,It,Bt,jt],o=[e.day,e.civil,e.nautical,e.astronomical,e.night];if(i>t/2){let s=k(1-i/12,0,1)*.5;return ro(e.day,e.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+t/2,a=n[s]-t/2;if(i>=r)return o[s];if(i>a){let l=(r-i)/t;return ro(o[s],o[s+1],l*l*(3-2*l))}}return o[o.length-1]}function Br(i,e,t,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,a=e+t*(1-r);o.push({offset:r,color:Mo(a,i)})}return o}function jr(i,e,t,n,o,s){let r=i.samples;if(r.length<2)return[];let a=[],l=(u,p)=>{u&&!Number.isNaN(u.getTime())&&a.push({time:u.getTime(),color:p})};l(e.astronomicalDawn,t.astronomical),l(e.nauticalDawn,t.nautical),l(e.civilDawn,t.civil),l(e.sunrise,t.glow),l(e.solarNoon,t.day),l(e.sunset,t.glow),l(e.civilDusk,t.civil),l(e.nauticalDusk,t.nautical),l(e.astronomicalDusk,t.astronomical);let d=[{offset:0,color:Mo(r[0].altitude,t)},...a.map(u=>({offset:k((n(u.time)-o)/s,0,1),color:u.color})),{offset:1,color:Mo(r[r.length-1].altitude,t)}];return d.sort((u,p)=>u.offset-p.offset),d}function So(i){let{profile:e,events:t,now:n,width:o,height:s,palette:r,format:a,showSun:l,showMoon:d,moon:u,moonPath:p,showTwilight:m,twilightLevel:g,animations:f,cardStyle:$,minimal:_,sunMarkerSize:R,uid:w,showAstronomicalLayers:D,currentAltitude:H,countdown:M=null,showGoldenHour:E=!1}=i,v=Math.max(_?60:120,o),C=Math.max(_?12:56,s),L=_?2:4,P=_?2:4,X=_?2:6,G=!_&&C>=112,K=G?k(c(C*.13,1),13,20):0,A=L,N=Math.max(10,v-L-P),x=X,V=Math.max(10,C-X-K),W=x+V,[tt,O]=Wr(e,p?.profile??null),ut=Math.max(1,O-tt),Z=e.dayStart.getTime(),Y=e.dayEnd.getTime(),Mt=Math.max(1,Y-Z),at=b=>A+(b-Z)/Mt*N,ft=b=>W-(k(b,-95,95)-tt)/ut*V,J=ft(0),yt=k(Math.round(N/1.6),60,361),gt=rs(e.samples,yt).map(b=>({x:at(b.time),y:ft(b.altitude)})),j=Br(r,tt,ut),ht=jr(e,t,r,at,A,N),St=`${w}-area`,_t=`${w}-line`,Gt=`${w}-clip`,Ee=`${w}-glow`,nn=`${w}-sky`,fe=`${w}-soft`,bt=`${w}-soft-fade`,Xt=`${w}-foot`,Ft=`${w}-foot-fade`,De=`${w}-side`,Le=`${w}-side-fade`,$t=$==="horizon",re=Sn(gt,$t?c(J,2):W+1,!0),Ne=Mn(gt),z=p?rs(p.profile.samples,k(Math.round(N/2),40,240)).map(b=>({x:at(b.time),y:ft(b.altitude)})):null,ot=z&&!_?Mn(z):null,Ut="var(--smc-moon-line, #cbd5e1)",ye=k(c(C*.013,2),1.1,1.9),He=Sn(gt,x-1,!0),wt=$==="flat"?.6:$t?.3:1,Re=$t?0:c(.15*wt,3),kt=x-1,Pn=W+1,Jt=Math.max(1,Pn-kt),Ls=k(V*.14,_?1.5:6,18),Ns=k(V*.08,_?1:4,12),Hs=k(N*.02,_?2:6,14),Oo=k(c(V*.06,1),_?1.5:4,10),Rs=c(k(Ls/Jt,0,.45),4),Go=c(1-k(Ns/Jt,0,.45),4),be=A-1,on=A+N+1,Fo=c(k(Hs/Math.max(1,on-be),0,.4),4),zs=Math.max(16,N*.16),Ps=k(V*.45,9,46),sn=[];V>=34&&(t.sunrise&&sn.push({id:`${w}-glow-rise`,time:t.sunrise,color:r.glow}),t.sunset&&sn.push({id:`${w}-glow-set`,time:t.sunset,color:r.glow}));let $e=_?null:Kr(gt,t,e.polar,at,J),Uo=`${w}-dome`,dt=a.t,rn=[],ze=b=>{b.time&&!Number.isNaN(b.time.getTime())&&rn.push({secondary:!1,...b})};if(t.sunrise&&ze({key:"sunrise",time:t.sunrise,label:dt("sunrise"),shortLabel:dt("sunriseShort"),kind:"sunrise",altitude:0}),t.sunset&&ze({key:"sunset",time:t.sunset,label:dt("sunset"),shortLabel:dt("sunsetShort"),kind:"sunset",altitude:0}),m&&(t.civilDawn&&ze({key:"civilDawn",time:t.civilDawn,label:dt("civilDawn"),shortLabel:dt("civilDawnShort"),kind:"dawn",altitude:It}),t.civilDusk&&ze({key:"civilDusk",time:t.civilDusk,label:dt("civilDusk"),shortLabel:dt("civilDuskShort"),kind:"dusk",altitude:It}),g==="all"||D)){let b=[["nauticalDawn","dawn","nauticalDawn",Bt],["nauticalDusk","dusk","nauticalDusk",Bt],["astronomicalDawn","dawn","astronomicalDawn",jt],["astronomicalDusk","dusk","astronomicalDusk",jt]];for(let[F,B,et,Q]of b){let mt=t[F];mt&&ze({key:F,time:mt,label:dt(et),shortLabel:dt(et),kind:B,altitude:Q,secondary:!0})}}rn.sort((b,F)=>b.time.getTime()-F.time.getTime());let we=k(c(C*.062,1),7.5,10.5),an=k(c(we+5,1),11,K||15),Ko=b=>b.secondary?2:b.kind==="sunrise"||b.kind==="sunset"?0:1,Is=N<240?3:N<340?4:6,Wo=_?[]:[...rn].sort((b,F)=>Ko(b)-Ko(F)||b.time.getTime()-F.time.getTime()).slice(0,Math.max(2,Is)),Bo=N<260,Os=!Bo&&(Wo.length>3||N<340),jo=4,Gs=Math.max(8,we*1.2),ae=[];for(let b of Wo){let F=Bo?rt(b.time,a):Os?b.shortLabel:b.label,B=F.length*we*.56+8,et=k(at(b.time.getTime()),A+B/2,A+N-B/2),Q=zt=>ae.some(le=>Math.abs(le.x-zt)<(le.width+B)/2+jo),mt=Q(et)?null:et;if(mt===null)for(let zt of ae){let le=(zt.width+B)/2+jo;for(let ce of[zt.x+le,zt.x-le])if(Math.abs(ce-et)<=Gs&&ce-B/2>=A-.5&&ce+B/2<=A+N+.5&&!Q(ce)){mt=ce;break}if(mt!==null)break}mt!==null&&ae.push({x:mt,width:B,text:F,secondary:b.secondary})}ae.sort((b,F)=>b.x-F.x);let vt=k(at(n.getTime()),A,A+N),Fs=r.day,Yt=k(c(C*.16,1),Math.min(2.8,R),R),Vo=k(c(Yt*.22,2),.8,1.4),Kt=k(c(Yt*1.1,1),3.5,7),Zo=(b,F)=>V<=F*2?x+V/2:k(ft(b),x+F,W-F),qo=Zo(H,Yt),Xo=E&&!_?[...ss(e.samples,qe,vn).map(b=>({range:b,kind:"golden",color:is,key:"goldenHour"})),...ss(e.samples,Ti,qe).map(b=>({range:b,kind:"blue",color:Ur,key:"blueHour"}))].map(({range:b,kind:F,color:B,key:et})=>{let Q=k(at(b[0]),A,A+N),mt=k(at(b[1]),A,A+N);return{x:Q,width:mt-Q,kind:F,color:B,title:`${dt(et)} ${rt(new Date(b[0]),a)}\u2013${rt(new Date(b[1]),a)}`}}).filter(b=>b.width>=.5):[],Tt=(()=>{if(_||!M)return null;let b=M.time.getTime();if(!(b>n.getTime()))return null;let B=tt<0&&O>0?ft(0):W-1,et=at(b),Q=k(et,A,A+N);if(Q-vt<2)return null;let mt=M.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":M.body==="twilight"?r.civil:M.body==="golden"?is:r.day;return{y:B,endX:Q,endsInside:et<=A+N,color:mt}})(),In=k(c(C*.016,1),2,3),At=(()=>{if(_||!M?.label)return null;let b=we,F=b+5,B=M.label.length*b*.56+10,et=Math.max(Yt,3)+3,Q=vt+et,mt=Q+B<=A+N?Q:Math.max(A,vt-et-B),zt=G||ae.length===0?x+1:x+an+3;return{x:mt,y:zt,width:B,height:F,fontSize:b}})(),Dt=d&&u&&!_?{altitude:u.altitude,y:Zo(u.altitude,Kt),clamped:u.altitude<tt||u.altitude>O}:null,Us=Dt?Math.abs(Dt.y-qo):Number.POSITIVE_INFINITY,On=Yt+Kt+2,Pe=Dt?Us>=Yt+Kt+1?vt:vt+On+Kt<=A+N?vt+On:Math.max(A+Kt,vt-On):null,Ks=f?"smc-pulse":"",Ws=f?`url(#${Ee})`:"",Gn=[{altitude:0,label:dt("horizon"),key:"horizon"}];D||g==="all"?Gn.push({altitude:It,label:`${dt("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Bt,label:`${dt("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:jt,label:`${dt("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&Gn.push({altitude:It,label:`${dt("refCivil")} (\u22126\xB0)`,key:"civil"});let Bs=!_&&V>=86&&N>=250,js=Gn.filter(b=>(!_||b.key==="horizon")&&b.altitude>tt+.5&&b.altitude<O-.5),Vs=k(c(C*.055,1),7.5,9.5),Ie=t.solarNoon,Jo=!_&&!!Ie&&e.maxAltitude>0&&V>=104&&N>=220&&D,Yo=Jo?`${dt("zenith")} ${rt(Ie,a)} \xB7 ${st(e.maxAltitude,1,a.locale)}`:"",ln=k(c(C*.055,1),7.5,9.5),cn=Yo.length*ln*.56+10,Qo=Ie?k(at(Ie.getTime()),A+cn/2,A+N-cn/2):0,ti=Ie?ft(e.maxAltitude):0,un=ln+5,ei=k(ti-un-4,x,Math.max(x,ti+10)),ni=_?1:N<220?4:N<420?6:8,oi=[];for(let b=1;b<ni;b++)oi.push(A+N*b/ni);return y`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(v,1)} ${c(C,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${dt("title")}"
    >
      <defs>
        <linearGradient id="${St}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(x,1)}" x2="0" y2="${c(W,1)}">
          ${j.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
        </linearGradient>
        <linearGradient id="${_t}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(x,1)}" x2="0" y2="${c(W,1)}">
          ${j.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${ht.length>=2?y`<linearGradient id="${nn}" gradientUnits="userSpaceOnUse"
                x1="${c(A,1)}" y1="0" x2="${c(A+N,1)}" y2="0">
                ${ht.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
              </linearGradient>`:y``}
        ${sn.map(b=>y`<radialGradient id="${b.id}">
              <stop offset="0%" stop-color="${b.color}" stop-opacity="${c(.5*wt,3)}" />
              <stop offset="45%" stop-color="${b.color}" stop-opacity="${c(.2*wt,3)}" />
              <stop offset="100%" stop-color="${b.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${$e?y`<radialGradient id="${Uo}" gradientUnits="userSpaceOnUse"
                cx="${c($e.cx,1)}" cy="${c($e.cy,1)}" r="${c($e.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${c(.3*wt,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${c(.18*wt,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:y``}
        <linearGradient id="${bt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(kt,1)}" x2="0" y2="${c(Pn,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Rs}" stop-color="#ffffff" />
          <stop offset="${Go}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${fe}" maskUnits="userSpaceOnUse"
          x="${c(A-2,1)}" y="${c(kt,1)}"
          width="${c(N+4,1)}" height="${c(Jt,1)}">
          <rect
            x="${c(A-2,1)}" y="${c(kt,1)}"
            width="${c(N+4,1)}" height="${c(Jt,1)}"
            fill="url(#${bt})" />
        </mask>
        <linearGradient id="${Ft}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(kt,1)}" x2="0" y2="${c(Pn,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${Go}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Xt}" maskUnits="userSpaceOnUse"
          x="${c(A-2,1)}" y="${c(kt,1)}"
          width="${c(N+4,1)}" height="${c(Jt,1)}">
          <rect
            x="${c(A-2,1)}" y="${c(kt,1)}"
            width="${c(N+4,1)}" height="${c(Jt,1)}"
            fill="url(#${Ft})" />
        </mask>
        <linearGradient id="${Le}" gradientUnits="userSpaceOnUse"
          x1="${c(be,1)}" y1="0" x2="${c(on,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Fo}" stop-color="#ffffff" />
          <stop offset="${c(1-Fo,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${De}" maskUnits="userSpaceOnUse"
          x="${c(be,1)}" y="${c(kt,1)}"
          width="${c(on-be,1)}" height="${c(Jt,1)}">
          <rect
            x="${c(be,1)}" y="${c(kt,1)}"
            width="${c(on-be,1)}" height="${c(Jt,1)}"
            fill="url(#${Le})" />
        </mask>
        <clipPath id="${Gt}">
          <rect x="${c(A-1,1)}" y="${c(x-2,1)}"
            width="${c(N+2,1)}" height="${c(V+4,1)}"
            rx="${Oo}" ry="${Oo}" />
        </clipPath>
        ${f?y`<filter id="${Ee}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${c(Yt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:y``}
      </defs>

      <g clip-path="url(#${Gt})">
        ${oi.map(b=>y`<line x1="${c(b,1)}" y1="${c(x,1)}" x2="${c(b,1)}" y2="${c(W,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${De})">
        <path d="${re}" fill="url(#${St})" opacity="0.9" mask="url(#${Xt})" />
        <g mask="url(#${fe})">
          ${ht.length>=2&&!$t?y`<path d="${He}" fill="url(#${nn})" opacity="${Re}" />`:y``}
          ${sn.map(b=>{let F=k(at(b.time.getTime()),A,A+N),B=k(J,x,W);return y`<ellipse
                cx="${c(F,1)}" cy="${c(B,1)}"
                rx="${c(zs,1)}" ry="${c(Ps,1)}"
                fill="url(#${b.id})" />`})}
          ${$e&&!$t?y`<path d="${$e.path}" fill="url(#${Uo})" opacity="0.95" />`:y``}
        </g>
        </g>
        ${Xo.length?y`<g class="hour-bands">
                ${Xo.map(b=>y`<g class=${b.kind}>
                    <title>${b.title}</title>
                    <rect
                      x="${c(b.x,1)}" y="${c(x,1)}"
                      width="${c(b.width,1)}" height="${c(V,1)}"
                      fill="${b.color}" opacity="${b.kind==="golden"?.16:.2}" />
                    <rect
                      x="${c(b.x,1)}" y="${c(W-3,1)}"
                      width="${c(b.width,1)}" height="3"
                      fill="${b.color}" opacity="0.85" />
                  </g>`)}
              </g>`:y``}
        ${ot?y`<path
                class="moon-curve"
                data-body="moon"
                d="${ot}"
                fill="none"
                stroke="${Ut}"
                stroke-width="${ye}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${$t?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:y``}
        ${p&&ot?y`<g class="moon-events">
                ${[[p.rise,"moonrise"],[p.set,"moonset"]].filter(b=>b[0]!==null).map(([b,F])=>{let B=k(at(b),A,A+N),et=k(ft(0),x,W),Q=k(c(C*.05,1),4,8);return y`<g>
                      <title>${a.t(F)} ${rt(new Date(b),a)}</title>
                      <line
                        x1="${c(B,1)}"
                        y1="${c(et-Q,1)}"
                        x2="${c(B,1)}"
                        y2="${c(et+Q,1)}"
                        stroke="${Ut}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${c(B,1)}"
                        cy="${c(et,1)}"
                        r="${k(c(C*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${Ut}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:y``}
        <path
          d="${Ne}"
          fill="none"
          stroke="url(#${_t})"
          stroke-width="${k(c(C*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${js.map(b=>{let F=ft(b.altitude),B=b.key==="horizon";return y`<g>
            <line
              x1="${c(A,1)}" y1="${c(F,1)}"
              x2="${c(A+N,1)}" y2="${c(F,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${B&&$t?1.5:B?1:.6}"
              stroke-dasharray="${B&&$t?"999 0":B?"3 3":"2 4"}"
              opacity="${B&&$t?.9:B?.6:$t?.3:.45}"
            />
            ${Bs?y`<text
                    x="${c(A+3,1)}"
                    y="${c(F-2.5,1)}"
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
        ${rn.map(b=>{let F=k(at(b.time.getTime()),A,A+N),B=k(ft(b.altitude),x,W),et=!b.secondary,Q=et?k(c(C*.022,1),1.8,3):1.4,mt="var(--smc-marker-strong, rgba(255,255,255,0.9))",zt="var(--smc-marker-soft, rgba(255,255,255,0.55))",le=b.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":b.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":b.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",ce=et?le:zt,Zs=et?mt:zt,qs=b.kind==="sunrise"||b.kind==="sunset"?y`
                <circle cx="${c(F,1)}" cy="${c(B,1)}" r="${Q+1}"
                  fill="${b.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${c(F-Q*2.6,1)}"
                  y1="${c(b.kind==="sunrise"?B+Q+2:B-Q-2,1)}"
                  x2="${c(F+Q*2.6,1)}"
                  y2="${c(b.kind==="sunrise"?B+Q+2:B-Q-2,1)}"
                  stroke="${mt}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:y`<circle cx="${c(F,1)}" cy="${c(B,1)}" r="${Q}"
                  fill="${Zs}" opacity="0.85" />`;return y`<g>
            <line
              x1="${c(F,1)}" y1="${c(x,1)}"
              x2="${c(F,1)}" y2="${c(W,1)}"
              stroke="${ce}" stroke-width="${et?1:.7}"
              stroke-dasharray="3 3" opacity="${et?.5:.25}" />
            ${qs}
          </g>`})}
      </g>

      ${Tt?y`<g class="countdown-track">
              <title>${M.title}</title>
              <line
                x1="${c(vt,1)}" y1="${c(Tt.y,1)}"
                x2="${c(Tt.endX,1)}" y2="${c(Tt.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${c(In+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${c(vt,1)}" y1="${c(Tt.y,1)}"
                x2="${c(Tt.endX,1)}" y2="${c(Tt.y,1)}"
                stroke="${Tt.color}"
                stroke-width="${In}"
                stroke-linecap="round" />
              ${Tt.endsInside?y`<circle
                      cx="${c(Tt.endX,1)}"
                      cy="${c(Tt.y,1)}"
                      r="${c(In+.8,1)}"
                      fill="${Tt.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:y``}
            </g>`:y``}

      <g class="now-marker">
        <line
          x1="${c(vt,1)}" y1="${c(x,1)}"
          x2="${c(vt,1)}" y2="${c(W,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${k(c(C*.012,2),1,1.8)}"
          opacity="0.85" />
        ${l?y`<g class="now-sun ${Ks}" filter="${Ws}">
                <title>${a.t("chartSunNow",{altitude:st(H,1,a.locale)})}</title>
                <circle
                  cx="${c(vt,1)}"
                  cy="${c(qo,1)}"
                  r="${Yt}"
                  fill="${Fs}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Vo}"
                />
              </g>`:y``}
        ${Dt&&Pe!==null&&u?y`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:st(Dt.altitude,1,a.locale)})}${Dt.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${Pe===vt?y``:y`<line
                        x1="${c(vt,1)}"
                        y1="${c(Dt.y,1)}"
                        x2="${c(Pe,1)}"
                        y2="${c(Dt.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${c(Pe,1)}"
                  cy="${c(Dt.y,1)}"
                  r="${c(Kt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Vo}" />
                <g
                  transform="translate(${c(Pe-Kt,1)} ${c(Dt.y-Kt,1)})"
                  opacity="${Dt.clamped?.6:1}"
                >
                  ${Zt({size:c(Kt*2,1),illumination:u.illumination,brightLimbAngle:u.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${w}-moon-now`})}
                </g>
              </g>`:y``}
      </g>

      ${Jo?y`<g class="zenith-chip">
              <rect
                x="${c(Qo-cn/2,1)}"
                y="${c(ei,1)}"
                width="${c(cn,1)}"
                height="${c(un,1)}"
                rx="${c(un/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${c(Qo,1)}"
                y="${c(ei+un/2+ln*.36,1)}"
                text-anchor="middle"
                font-size="${ln}"
                fill="var(--smc-label-color, #ffffff)"
              >${Yo}</text>
            </g>`:y``}

      ${At?y`<g class="countdown-label">
              <title>${M.title}</title>
              <rect
                x="${c(At.x,1)}"
                y="${c(At.y,1)}"
                width="${c(At.width,1)}"
                height="${c(At.height,1)}"
                rx="${c(At.height/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.9" />
              <text
                x="${c(At.x+At.width/2,1)}"
                y="${c(At.y+At.height/2+At.fontSize*.36,1)}"
                text-anchor="middle"
                font-size="${At.fontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${M.label}</text>
            </g>`:y``}

      ${G?y`<line
              x1="${c(A,1)}" y1="${c(W+.5,1)}"
              x2="${c(A+N,1)}" y2="${c(W+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:y``}

      ${ae.length?y`<g class="event-labels" font-size="${we}">
              ${ae.map(b=>{let F=G?W+2:x;return y`<g>
                  <rect
                    x="${c(b.x-b.width/2,1)}"
                    y="${c(F,1)}"
                    width="${c(b.width,1)}"
                    height="${c(an,1)}"
                    rx="${c(an/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${b.secondary?.6:.88}" />
                  <text
                    x="${c(b.x,1)}"
                    y="${c(F+an/2+we*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${b.secondary?.75:1}"
                  >${b.text}</text>
                </g>`})}
            </g>`:y``}
    </svg>
  `}var Vr=50,Zr=44,as=[[0,"#8f9fd6","#f4a97c"],[12,"#9aaedf","#f7bf8e"],[30,"#a8c4ea","#f6dcb4"],[52,"#b4cdee","#eef0f4"],[66,"#8d9cd8","#d9c3dc"],[78,"#3c4590","#6b6fb4"],[90,"#232a68","#3b428a"],[100,"#1b2159","#323a80"]],qr=[[.13,.55,90,"#f6c2c0",.55],[.3,.42,60,"#fbd9cf",.45],[.58,.3,85,"#ffffff",.55],[.47,.14,50,"#ffffff",.35]];function oe(i){let e=i;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var h=i=>String(c(i,1));function ls(i,e,t,n,o,s,r,a){let l=-6,d=`M${h(l)},${h(n)}`;for(;l<e+6;){let u=10+i()*28,p=o+i()*(s-o),m=t-p,g=i();if(d+=`L${h(l)},${h(m)}`,g<.12?d+=`L${h(l+u/2)},${h(m-u*.45)}L${h(l+u)},${h(m)}`:g<.2?d+=`A${h(u/2)},${h(u*.42)} 0 0 1 ${h(l+u)},${h(m)}`:g<.28?d+=`L${h(l+u*.42)},${h(m)}L${h(l+u/2)},${h(m-p*.55)}L${h(l+u*.58)},${h(m)}L${h(l+u)},${h(m)}`:g<.38?d+=`L${h(l+u*.6)},${h(m)}L${h(l+u*.6)},${h(m-12)}L${h(l+u*.64)},${h(m-12)}L${h(l+u*.64)},${h(m)}L${h(l+u)},${h(m)}`:g<.48?d+=`L${h(l+u*.25)},${h(m)}L${h(l+u*.25)},${h(m-7)}L${h(l+u*.75)},${h(m-7)}L${h(l+u*.75)},${h(m)}L${h(l+u)},${h(m)}`:d+=`L${h(l+u)},${h(m)}`,r>0&&l>e*.7)for(let f=m+5;f<t-4;f+=6)for(let $=l+3;$<l+u-3;$+=5)i()<r&&a.push({x:$,y:f,w:1.8,h:2.4,opacity:.55+i()*.4});if(l+=u,i()<.18){let f=4+i()*10,$=t-o*.4;d+=`L${h(l)},${h($)}L${h(l+f)},${h($)}`,l+=f}}return`${d}L${h(l)},${h(n)}Z`}function cs(i,e,t,n,o,s){let r=Array.from({length:s},(d,u)=>({x:(u+.2+i()*.6)/s*e,h:o*(.45+i()*.55),w:e/s*(.9+i()*.9)})),a=Math.max(40,Math.round(e/6)),l=`M-4,${h(n)}`;for(let d=0;d<=a;d++){let u=-4+(e+8)*d/a,p=o*.12;for(let m of r)p=Math.max(p,m.h*(1-Math.abs(u-m.x)/m.w));p+=(i()-.5)*o*.06,l+=`L${h(u)},${h(t-k(p,2,o))}`}return`${l}L${h(e+4)},${h(n)}Z`}function us(i,e,t,n,o,s){let r=d=>Math.sin(d/e*Math.PI*1.6+.6)*o*.35,a=`M-4,${h(n)}L-4,${h(t-r(-4))}`,l=-4;for(;l<e+4;){let d=o+i()*(s-o),u=t-r(l);if(i()<.72){let p=d*(.42+i()*.12);a+=`L${h(l)},${h(u)}L${h(l+p*.5)},${h(u-d)}L${h(l+p)},${h(u)}`,l+=p*(.55+i()*.25)}else{let p=d*.32;a+=`L${h(l)},${h(u)}L${h(l)},${h(u-d*.35)}A${h(p)},${h(p)} 0 1 1 ${h(l+p*1.6)},${h(u-d*.35)}L${h(l+p*1.6)},${h(u)}`,l+=p*1.6+i()*4}}return`${a}L${h(e+4)},${h(n)}Z`}function Xr(i,e,t,n,o){let s=[];switch(i){case"city":{let r=ls(oe(11),e,t,n,18*o,44*o,0,s),a=e*.8,l=84*o,d=`M${h(a-1.6)},${h(t)}L${h(a-1.6)},${h(t-l)}L${h(a-.6)},${h(t-l)}L${h(a-.6)},${h(t-l-16)}L${h(a+.6)},${h(t-l-16)}L${h(a+.6)},${h(t-l)}L${h(a+1.6)},${h(t-l)}L${h(a+1.6)},${h(t)}ZM${h(a+5.5)},${h(t-l*.72)}A5.5,5.5 0 1 0 ${h(a-5.5)},${h(t-l*.72)}A5.5,5.5 0 1 0 ${h(a+5.5)},${h(t-l*.72)}Z`,u=ls(oe(23),e,t,n,8*o,28*o,.07,s);return{back:`${r}${d}`,front:u,lights:s,waterTop:null}}case"mountains":return{back:cs(oe(5),e,t,n,78*o,6),front:cs(oe(9),e,t+2,n,40*o,9),lights:s,waterTop:null};case"forest":return{back:us(oe(17),e,t-6*o,n,22*o,46*o),front:us(oe(29),e,t+4*o,n,12*o,28*o),lights:s,waterTop:null};case"coast":{let r=t-10*o,a=oe(31),l=`M-4,${h(r)}`;for(let f=0;f<=24;f++){let $=-4+e*.55*f/24,_=Math.sin(f/24*Math.PI)*30*o+a()*4*o;l+=`L${h($)},${h(r-_)}`}l+=`L${h(e*.55)},${h(r)}Z`;let d=e*.72,u=e*.84,p=r-14*o,m=46*o,g=`M${h(d)},${h(r)}Q${h(d+e*.06)},${h(p)} ${h(u-10)},${h(p)}L${h(e+4)},${h(p+2)}L${h(e+4)},${h(r)}ZM${h(u-4.5)},${h(p)}L${h(u-2.8)},${h(p-m)}L${h(u+2.8)},${h(p-m)}L${h(u+4.5)},${h(p)}ZM${h(u-3.6)},${h(p-m)}L${h(u)},${h(p-m-8)}L${h(u+3.6)},${h(p-m)}Z`;return s.push({x:u-1.6,y:p-m-4.5,w:3.2,h:3,opacity:.95}),{back:l,front:g,lights:s,waterTop:r}}default:return null}}var tn=new Map;function Jr(i,e,t,n,o){let s=[i,c(e,0),c(t,0),c(n,0),o].join("|");return tn.has(s)||(tn.size>24&&tn.clear(),tn.set(s,Xr(i,e,t,n,o))),tn.get(s)??null}function ds(i){let{profile:e,events:t,now:n,format:o,scene:s,showSun:r,showMoon:a,moonPath:l,moon:d,currentAltitude:u,animations:p,uid:m}=i,g=o.t,f=Math.max(160,i.width),$=Math.max(140,i.height),_=f<480,R=_?Zr:Vr,w=14,D=$-R-4,H=e.samples,M=e.dayStart.getTime(),E=e.dayEnd.getTime(),v=Math.max(1,E-M),C=z=>(z-M)/v*f,L=a&&l?.profile.samples.length?Math.max(...l.profile.samples.map(z=>z.altitude)):-90,P=Math.max(12,e.maxAltitude+8,L+6),X=-16,G=z=>w+(P-z)/(P-X)*(D-w),K=G(0),A=k(C(n.getTime()),0,f),N=z=>z.map((ot,Ut)=>`${Ut?"L":"M"}${h(C(ot.time))},${h(G(ot.altitude))}`).join(""),x={skyTop:`${m}-sky-top`,skyHor:`${m}-sky-hor`,horFade:`${m}-hor-fade`,horMask:`${m}-hor-mask`,soft:`${m}-soft`,softer:`${m}-softer`,sunGlow:`${m}-sun-glow`,sunCore:`${m}-sun-core`,moonGlow:`${m}-moon-glow`,dayFill:`${m}-day-fill`,dayFade:`${m}-day-fade`,nightFill:`${m}-night-fill`,curve:`${m}-curve`,band:`${m}-band`,horizonLine:`${m}-horizon-line`,back:`${m}-scene-back`,front:`${m}-scene-front`,water:`${m}-water`,above:`${m}-above`,below:`${m}-below`,past:`${m}-past`,future:`${m}-future`},V=oe(7),W=[];for(let z=0;z<(_?45:90);z++){let ot=V()*f,Ut=w+V()*(K-w-6),ye=k((ot/f-.68)/.12,0,1)*(.4+V()*.6),He=.5+V()*.9;ye>.04&&W.push(y`<circle cx="${h(ot)}" cy="${h(Ut)}" r="${c(He,2)}" fill="#fff"
        opacity="${c(ye,2)}" />`)}let tt=Math.min(1,f/740),O=qr.map(([z,ot,Ut,ye,He])=>{let wt=Ut*tt,Re=z*f,kt=w+ot*(K-w);return y`<g opacity="${He}" fill="${ye}" filter="url(#${x.soft})">
      <ellipse cx="${h(Re)}" cy="${h(kt)}" rx="${h(wt)}" ry="${h(wt*.22)}" />
      <ellipse cx="${h(Re-wt*.35)}" cy="${h(kt+3)}" rx="${h(wt*.5)}" ry="${h(wt*.18)}" />
      <ellipse cx="${h(Re+wt*.3)}" cy="${h(kt-4)}" rx="${h(wt*.45)}" ry="${h(wt*.2)}" />
    </g>`}),ut=$-R+8,Y=Jr(s,f,ut,$,_?.8:1),Mt=H.length?N(H):"",at=H[0],ft=H[H.length-1],J=H.length?`${Mt}L${h(C(ft.time))},${h(K)}L${h(C(at.time))},${h(K)}Z`:"",yt=H.length?`${Mt}L${h(C(ft.time))},${h($)}L${h(C(at.time))},${h($)}Z`:"",gt=a&&l?.profile.samples.length?N(l.profile.samples):"",j=[{time:t.sunrise,label:g("sunrise"),short:g("sunriseShort"),dashed:!0},{time:t.solarNoon,label:g("sceneNoon"),short:g("sceneNoonShort"),dashed:!1},{time:t.sunset,label:g("sunset"),short:g("sunsetShort"),dashed:!0}].filter(z=>z.time instanceof Date),ht=_?34:48,St=[20,10,-10].filter(z=>z<P-2&&z>X+2),_t=_?78:92,Gt=k(G(u),w+12,$-R-6),Ee=u>-2,nn=_?30:40,fe=_?11:15,bt=_?9:12,Xt=d?.altitude??0,Ft=k(G(Xt),w+bt+2,$-R-bt-4),De=Xt>0,Le=G(Xt)>$-R-bt-4||G(Xt)<w+bt+2,$t=fe+bt+6,re=r&&Math.abs(Ft-Gt)<fe+bt+4?A+$t+bt<=f?A+$t:A-$t:A,Ne=k(K/$,0,1);return y`
    <svg
      class="scene-chart"
      width="${h(f)}"
      height="${h($)}"
      viewBox="0 0 ${h(f)} ${h($)}"
      role="img"
      aria-label="${g("title")}"
    >
      <defs>
        <linearGradient id="${x.skyTop}" x1="0" x2="1" y1="0" y2="0">
          ${as.map(([z,ot])=>y`<stop offset="${z}%" stop-color="${ot}" />`)}
        </linearGradient>
        <linearGradient id="${x.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${as.map(([z,,ot])=>y`<stop offset="${z}%" stop-color="${ot}" />`)}
        </linearGradient>
        <linearGradient id="${x.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${c(Ne,3)}" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask id="${x.horMask}">
          <rect width="${h(f)}" height="${h($)}" fill="url(#${x.horFade})" />
        </mask>
        <filter id="${x.soft}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="${x.softer}" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="${x.sunGlow}">
          <stop offset="0" stop-color="#ffe9a3" stop-opacity="0.95" />
          <stop offset="0.45" stop-color="#ffd36b" stop-opacity="0.45" />
          <stop offset="1" stop-color="#ffc24a" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="${x.sunCore}" cx="0.4" cy="0.38">
          <stop offset="0" stop-color="#fffbe8" />
          <stop offset="0.6" stop-color="#ffe17a" />
          <stop offset="1" stop-color="#f7b733" />
        </radialGradient>
        <radialGradient id="${x.moonGlow}">
          <stop offset="0" stop-color="#dfe4ff" stop-opacity="0.35" />
          <stop offset="1" stop-color="#dfe4ff" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="${x.dayFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(G(e.maxAltitude))}" y2="${h(K)}">
          <stop offset="0" stop-color="#ffcf5c" stop-opacity="0.95" />
          <stop offset="0.7" stop-color="#ffd27a" stop-opacity="0.8" />
          <stop offset="1" stop-color="#ffe7b8" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient id="${x.dayFade}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(K-4)}" y2="${h(K+36)}">
          <stop offset="0" stop-color="#ffe2a6" stop-opacity="0.75" />
          <stop offset="1" stop-color="#ffe2a6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${x.nightFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(K)}" y2="${h($)}">
          <stop offset="0" stop-color="#a9b4ee" stop-opacity="0" />
          <stop offset="0.22" stop-color="#7f8fe0" stop-opacity="0.45" />
          <stop offset="0.55" stop-color="#4a5ab8" stop-opacity="0.8" />
          <stop offset="1" stop-color="#25307a" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="${x.curve}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(w)}" y2="${h($)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${c(Ne,3)}" stop-color="#f59e0b" />
          <stop offset="${c(Math.min(1,Ne+.001),3)}" stop-color="#b9c3ff" />
          <stop offset="1" stop-color="#b9c3ff" />
        </linearGradient>
        <linearGradient id="${x.band}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" stop-opacity="0" />
          <stop offset="0.45" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" />
        </linearGradient>
        <linearGradient id="${x.horizonLine}" gradientUnits="userSpaceOnUse"
          x1="0" x2="${h(f)}" y1="0" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0.9" />
          <stop offset="0.85" stop-color="#fff" stop-opacity="0.75" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${x.back}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#8a6f9e" />
          <stop offset="0.5" stop-color="#5f6aa8" />
          <stop offset="1" stop-color="#2a3170" />
        </linearGradient>
        <linearGradient id="${x.front}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#6f5a88" />
          <stop offset="0.5" stop-color="#3f4888" />
          <stop offset="1" stop-color="#1c2257" />
        </linearGradient>
        <linearGradient id="${x.water}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#e9a88f" />
          <stop offset="0.45" stop-color="#9fb6e3" />
          <stop offset="0.75" stop-color="#5865a8" />
          <stop offset="1" stop-color="#262d6c" />
        </linearGradient>
        <clipPath id="${x.above}"><rect width="${h(f)}" height="${h(K)}" /></clipPath>
        <clipPath id="${x.below}">
          <rect y="${h(K)}" width="${h(f)}" height="${h($-K)}" />
        </clipPath>
        <clipPath id="${x.past}"><rect width="${h(A)}" height="${h($)}" /></clipPath>
        <clipPath id="${x.future}">
          <rect x="${h(A)}" width="${h(f-A)}" height="${h($)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${h(f)}" height="${h($)}" fill="url(#${x.skyTop})" />
        <rect width="${h(f)}" height="${h($)}" fill="url(#${x.skyHor})"
          mask="url(#${x.horMask})" />
        ${W}
        ${O}
      </g>

      ${r&&J?y`<g class="day-area">
              <path d="${J}" fill="url(#${x.dayFill})" clip-path="url(#${x.above})"
                opacity="0.92" />
              <path d="${yt}" fill="url(#${x.nightFill})" clip-path="url(#${x.below})" />
              <g clip-path="url(#${x.below})">
                <path d="${yt}" fill="url(#${x.dayFade})" filter="url(#${x.softer})" />
              </g>
            </g>`:y``}

      ${Y?y`<g class="silhouette" data-scene="${s}">
              ${Y.waterTop!==null?y`<rect class="water" x="0" y="${h(Y.waterTop)}" width="${h(f)}"
                      height="${h($-Y.waterTop)}" fill="url(#${x.water})" opacity="0.55" />
                    ${[0,1,2,3].map(z=>y`<line x1="${h(f*(.08+z*.21))}"
                        x2="${h(f*(.16+z*.21))}"
                        y1="${h(Y.waterTop+5+z*3)}" y2="${h(Y.waterTop+5+z*3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`)}`:y``}
              <path d="${Y.back}" fill="url(#${x.back})" opacity="0.35" />
              <path d="${Y.front}" fill="url(#${x.front})" opacity="0.6" />
              ${Y.lights.map(z=>y`<rect x="${h(z.x)}" y="${h(z.y)}" width="${z.w}"
                  height="${z.h}" fill="#ffd98a" opacity="${c(z.opacity,2)}" />`)}
            </g>`:y``}

      <line class="horizon" x1="${_t}" x2="${h(f)}" y1="${h(K)}" y2="${h(K)}"
        stroke="url(#${x.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${j.map(z=>{let ot=h(C(z.time.getTime()));return z.dashed?y`<line x1="${ot}" x2="${ot}" y1="0" y2="${h($-R+6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`:y`<line x1="${ot}" x2="${ot}" y1="0" y2="${h($-R+6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`})}
      </g>

      ${gt?y`<path class="moon-curve" d="${gt}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`:y``}

      ${r&&Mt?y`<g class="sun-path">
              <g clip-path="url(#${x.past})">
                <path d="${Mt}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${x.future})">
                <path d="${Mt}" fill="none" stroke="url(#${x.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[t.sunrise,t.sunset].filter(z=>z instanceof Date).map(z=>y`<circle cx="${h(C(z.getTime()))}" cy="${h(K)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${z.getTime()<n.getTime()?2:3.2}" />`)}
            </g>`:y``}

      ${a&&d?y`<g class="now-moon" opacity="${De?1:Le?.5:.7}">
              <title>${g("chartMoonNow",{altitude:st(Xt,1,o.locale)})}${Le?` ${g("chartOutside")}`:""}</title>
              ${De?y`<circle cx="${h(re)}" cy="${h(Ft)}" r="${bt*2.1}"
                      fill="url(#${x.moonGlow})" />`:y``}
              ${re!==A?y`<line x1="${h(A)}" y1="${h(Ft)}" x2="${h(re)}" y2="${h(Ft)}"
                      stroke="rgba(255,255,255,0.7)" stroke-width="0.8" />`:y``}
              <circle cx="${h(re)}" cy="${h(Ft)}" r="${bt+1.2}" fill="none"
                stroke="rgba(255,255,255,0.75)" stroke-width="1.2" />
              <g transform="translate(${h(re-bt)} ${h(Ft-bt)})">
                ${Zt({size:bt*2,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#2b3270",texture:!1,uid:`${m}-now-moon`})}
              </g>
            </g>`:y``}

      ${r?y`<g class="now-sun ${p?"smc-pulse":""}">
              <title>${g("chartSunNow",{altitude:st(u,1,o.locale)})}</title>
              <circle cx="${h(A)}" cy="${h(Gt)}" r="${nn}"
                fill="url(#${x.sunGlow})" opacity="${Ee?1:.35}" />
              <circle cx="${h(A)}" cy="${h(Gt)}" r="${fe}" fill="url(#${x.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${Ee?1:.55}" />
            </g>`:y``}

      <g class="axis">
        <text x="10" y="${h(w+4)}" class="scene-axis">${g("elevation")}</text>
        ${St.map(z=>y`<text x="10" y="${h(G(z)+4)}" class="scene-axis">${z>0?z:`\u2212${-z}`}°</text>
            <line x1="${_?34:40}" x2="${_?40:48}" y1="${h(G(z))}"
              y2="${h(G(z))}" stroke="#fff" opacity="0.8" />`)}
        <text x="10" y="${h(K-5)}" class="scene-axis strong">${g("horizon")}</text>
      </g>

      <rect class="band" x="0" y="${h($-R-18)}" width="${h(f)}"
        height="${h(R+18)}" fill="url(#${x.band})" />
      <g class="event-labels">
        ${j.map(z=>{let ot=h(k(C(z.time.getTime()),ht,f-ht));return y`<text x="${ot}" y="${h($-R+22)}" text-anchor="middle"
              class="scene-time">${rt(z.time,o)}</text>
            <text x="${ot}" y="${h($-R+38)}" text-anchor="middle"
              class="scene-label">${_?z.short:z.label}</text>`})}
      </g>
    </svg>
  `}var nt=i=>String(c(i,1));function hs(i){let{profile:e,events:t,now:n,format:o,showSun:s,showMoon:r,moonPath:a,sunAltitude:l,moonAltitude:d}=i,u=o.t,p=Math.max(160,i.width),m=Math.max(100,i.height),f=p<480?64:92,$=6,_=34,w=m-30-8,D=Math.max(40,p-f-$),H=e.dayStart.getTime(),M=e.dayEnd.getTime(),E=Math.max(1,M-H),v=O=>f+(O-H)/E*D,C=r?a?.profile.samples??[]:[],L=C.reduce((O,ut)=>Math.max(O,ut.altitude),-90),P=Math.max(8,s?e.maxAltitude:-90,L)+4,X=-Math.max(14,P*.85),G=4,K=O=>X+G*Math.log1p(Math.exp((O-X)/G)),A=O=>_+(P-Math.min(P,K(O)))/(P-X)*(w-_),N=A(0),x=v(n.getTime()),V=O=>O.map((ut,Z)=>`${Z?"L":"M"}${nt(v(ut.time))},${nt(A(ut.altitude))}`).join(""),W=[0,6,12,18,24].map(O=>{let ut=f+O/24*D,Z=O===0?"start":O===24?"end":"middle";return y`<text x="${nt(ut+(O===0?-4:O===24?4:0))}" y="${nt(m-8)}" text-anchor="${Z}"
      class="clean-axis">${String(O).padStart(2,"0")}:00</text>`}),tt=[t.sunrise,t.sunset].filter(O=>O instanceof Date);return y`
    <svg
      class="clean-chart"
      width="${nt(p)}"
      height="${nt(m)}"
      viewBox="0 0 ${nt(p)} ${nt(m)}"
      role="img"
      aria-label="${u("title")}"
    >
      <text x="0" y="${nt(N+4)}" class="clean-horizon-label">${u("horizon")}</text>
      <line class="clean-horizon" x1="${f}" x2="${nt(p-$)}" y1="${nt(N)}"
        y2="${nt(N)}" stroke-dasharray="6 6" />
      <line class="clean-now" x1="${nt(x)}" x2="${nt(x)}" y1="${nt(_-8)}" y2="${nt(w)}" />
      <text x="${nt(x)}" y="${nt(_-14)}" text-anchor="middle" class="clean-now-label">${u("cleanNow")}</text>
      ${C.length?y`<path class="clean-moon-path" d="${V(C)}" />`:y``}
      ${s&&e.samples.length?y`<path class="clean-sun-path" d="${V(e.samples)}" />
            ${tt.map(O=>y`<circle class="clean-sun-mark" cx="${nt(v(O.getTime()))}"
                cy="${nt(N)}" r="6" />`)}`:y``}
      ${C.length?y`<circle class="clean-moon-now" cx="${nt(x)}" cy="${nt(A(d))}" r="6">
              <title>${u("chartMoonNow",{altitude:st(d,1,o.locale)})}</title>
            </circle>`:y``}
      ${s?y`<circle class="clean-sun-now" cx="${nt(x)}" cy="${nt(A(l))}" r="7">
              <title>${u("chartSunNow",{altitude:st(l,1,o.locale)})}</title>
            </circle>`:y``}
      ${W}
    </svg>
  `}function To(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Yr(i,e,t){let n=[];for(let o=0;o<e;o++){let s=Math.sqrt(To(i*7.13+o*1.37))*t*.96,r=To(i*3.71+o*2.11)*360,a=Vt({x:0,y:0},s,r),l=To(i*5.19+o*4.53);n.push({x:a.x,y:a.y,r:.35+l*.75,opacity:.16+l*.34})}return n}function Ao(i,e){return k((90-i)/90*e,0,e)}function Co(i){let{width:e,height:t,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:l,palette:d,format:u,animations:p,uid:m,showCardinals:g=!0,seed:f=0}=i,$=Math.max(80,e),_=Math.max(80,t),R=6,w={x:$/2,y:_/2},D=Math.max(10,Math.min($,_)/2-R),H=`${m}-dome`,M=`${m}-dome-clip`,E=[{key:u.t("compassNorth"),azimuth:0},{key:u.t("compassEast"),azimuth:90},{key:u.t("compassSouth"),azimuth:180},{key:u.t("compassWest"),azimuth:270}],v=k(c(D*.17,1),7,11),C=n?n.altitude>0:!1,L=k(c(D*.11,1),4,11),P=n?Vt(w,Ao(n.altitude,D),n.azimuth):null,X=a&&n&&P,G=o?o.altitude>0:!1,K=k(c(D*.24,1),10,22),A=o?Vt(w,Ao(o.altitude,D),o.azimuth):null,N=l&&o&&A&&r,x=g&&D>=42,V=k(c(D*.14,1),6.5,9),W=[{altitude:30,radius:D*(60/90)},{altitude:60,radius:D*(30/90)}],O=(n?.altitude??-90)<-6?Yr(Math.max(1,Math.round(f)),46,D):[],ut=s.filter(Z=>Z.altitude>=-8).map(Z=>Vt(w,Ao(Z.altitude,D),Z.azimuth));return y`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${c($,1)} ${c(_,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${u.t("skyView")}"
    >
      <defs>
        <radialGradient id="${H}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${d.skyTop}" />
          <stop offset="100%" stop-color="${d.skyBottom}" />
        </radialGradient>
        <clipPath id="${M}">
          <circle cx="${c(w.x,1)}" cy="${c(w.y,1)}" r="${c(D,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${c(w.x,1)}" cy="${c(w.y,1)}" r="${c(D,1)}"
        fill="url(#${H})" opacity="0.55" />

      <g clip-path="url(#${M})">
        ${O.length?y`<g class="stars">
                ${O.map(Z=>y`<circle
                      cx="${c(w.x+Z.x,1)}"
                      cy="${c(w.y+Z.y,1)}"
                      r="${c(Z.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${c(Z.opacity,2)}" />`)}
              </g>`:y``}
        ${W.map(Z=>y`<circle
              cx="${c(w.x,1)}" cy="${c(w.y,1)}" r="${c(Z.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${c(w.x-D,1)}" y1="${c(w.y,1)}"
          x2="${c(w.x+D,1)}" y2="${c(w.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${c(w.x,1)}" y1="${c(w.y-D,1)}"
          x2="${c(w.x,1)}" y2="${c(w.y+D,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${ut.length>1?y`<path
                d="M${ut.map(Z=>`${c(Z.x,1)} ${c(Z.y,1)}`).join(" L")}"
                fill="none"
                stroke="${d.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:y``}
      </g>

      <circle
        cx="${c(w.x,1)}" cy="${c(w.y,1)}" r="${c(D,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${x?y`<g
              font-size="${V}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${W.map(Z=>{let Y=Vt(w,Z.radius,45);return y`<text
                  x="${c(Y.x,1)}"
                  y="${c(Y.y+V*.35,1)}"
                >${Z.altitude}°</text>`})}
            </g>`:y``}

      ${g?y`<g font-size="${v}" fill="var(--smc-muted-color)" opacity="0.7">
              ${E.map(Z=>{let Y=Vt(w,D*.87,Z.azimuth);return y`<text
                  x="${c(Y.x,1)}"
                  y="${c(Y.y+v*.35,1)}"
                  text-anchor="middle"
                >${Z.key}</text>`})}
            </g>`:y``}

      ${X&&C&&P?y`<g class="${p?"smc-pulse":""}">
              <circle
                cx="${c(P.x,1)}" cy="${c(P.y,1)}" r="${L}"
                fill="${d.lineDay}" opacity="0.28" />
              <circle
                cx="${c(P.x,1)}" cy="${c(P.y,1)}" r="${c(L*.55,1)}"
                fill="${d.lineDay}" />
            </g>`:y``}
      ${a&&n&&!C?lo(w,D,n.azimuth,d.lineNight):y``}

      ${N&&G&&A&&r?y`<g transform="translate(${c(A.x-K/2,1)} ${c(A.y-K/2,1)})">
              ${Zt({size:K,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:K>=16,uid:`${m}-moon`})}
            </g>`:y``}
      ${l&&o&&!G?lo(w,D,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):y``}
    </svg>
  `}function Eo(i,e,t){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}function Qr(i){if(typeof i!="string")return null;let[e,t]=i.split(".",2);return!e||!t?null:[e,t]}function ms(i,e,t,n,o){typeof i?.callService=="function"&&i.callService(e,t,n,o)}function Do(i,e,t,n,o){if(!n){o?.();return}switch(n.action){case"none":return;case"open-popup":o?.();return;case"more-info":Eo(i,"hass-more-info",{entityId:n.entity??t.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),Eo(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":ms(e,"homeassistant","toggle",{entity_id:n.entity??t.entity});return;case"call-service":case"perform-action":{let s=Qr(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,a=typeof n.target=="object"&&n.target!==null?n.target:void 0;ms(e,s[0],s[1],r,a);return}case"fire-dom-event":Eo(window,"ll-custom",n);return;default:return}}function Lo(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function ps(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${e}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function No(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Hn(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Rn(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var gs="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function Ho(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${gs}
        fill="${e}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function fs(i=16,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${gs}
        fill="${e}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function zn(i=20,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${e}" />
      <g stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function ys(i=18,e="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${e}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${e}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${e}" />
    </svg>
  `}var bs=new Map;function $s(i){let e=bs.get(i);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),bs.set(i,e)),e}function ta(i){try{return $s(i)}catch{return $s("UTC")}}function Ro(i,e){let t=ta(e).formatToParts(i),n={};for(let o of t)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function ws(i,e){let t=Ro(i,e);return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)-Math.floor(i.getTime()/1e3)*1e3}function ea(i,e,t,n=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,e-1,t,n,o,s),l=1440*60*1e3,d=[ws(new Date(a-l),r),ws(new Date(a+l),r)],u=[...new Set(d)].map(m=>a-m).filter(m=>{let g=Ro(new Date(m),r);return g.year===i&&g.month===e&&g.day===t&&g.hour===n&&g.minute===o&&g.second===s}).sort((m,g)=>m-g);if(u.length>0)return new Date(u[0]);let p=Math.min(...d);return new Date(a-p)}function Ce(i,e){let t=Ro(i,e);return ea(t.year,t.month,t.day,0,0,0,e)}function vs(i,e){let t=Ce(i,e);return Ce(new Date(t.getTime()+2160*60*1e3),e)}function Et(i,e){return Math.round(Ce(i,e).getTime()/(1440*60*1e3))}function xs(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function ct(i,e){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:e}function ge(i,e,t){return typeof i=="string"&&e.includes(i)?i:t}function zo(i,e,t,n,o,s=0){let r=Ct(i);if(r===null)return e;let a=k(r,t[0],t[1]);return Math.abs(a-r)>1e-9&&o.push(lt(n,"invalidRange",{value:String(i),min:String(t[0]),max:String(t[1])})),s===0?Math.round(a):c(a,s)}function Po(i,e,t){if(i==null)return null;let n=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=n?.action;if(typeof o!="string"||o.trim()==="")return t.push(lt(e,"invalidAction",{value:String(i)})),null;let s=o.trim();return Wi.includes(s)?{...n,action:s}:(t.push(lt(e,"invalidAction",{value:s})),null)}function Ms(i,e="en"){let t=[],n=[],o=i??{},s=ct(o.minimal_mode,I.minimal_mode),r=Ae(s),a=s||typeof o.card_style!="string"?I.card_height:Te(o.card_style);if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(k(o.card_height,r[0],r[1])),a!==o.card_height&&n.push(lt(e,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")n.push(lt(e,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let g=Ct(o.card_height);g===null?t.push(lt(e,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(k(g,r[0],r[1]))}let l=null,d=null,u=Ct(o.latitude),p=Ct(o.longitude);return u!==null&&(u>=-90&&u<=90?l=u:n.push(lt(e,"invalidNumber",{value:String(o.latitude)}))),p!==null&&(p>=-180&&p<=180?d=p:n.push(lt(e,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():I.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():I.moon_entity,card_height:a,show_sun:ct(o.show_sun,I.show_sun),show_moon:ct(o.show_moon,I.show_moon),show_twilight:ct(o.show_twilight,I.show_twilight),show_astronomical_details:ct(o.show_astronomical_details,I.show_astronomical_details),compact_mode:ct(o.compact_mode,I.compact_mode),minimal_mode:s,minimal_show_times:ct(o.minimal_show_times,I.minimal_show_times),minimal_show_zenith:ct(o.minimal_show_zenith,I.minimal_show_zenith),sun_marker_size:zo(o.sun_marker_size,I.sun_marker_size,Ye,e,n,1),popup_width:zo(o.popup_width,I.popup_width,ee,e,n),popup_height:zo(o.popup_height,I.popup_height,ne,e,n),show_remaining_time:ct(o.show_remaining_time,I.show_remaining_time),remaining_time_focus:ge(o.remaining_time_focus,Rt.remainingTimeFocus,I.remaining_time_focus),show_golden_hour:ct(o.show_golden_hour,I.show_golden_hour),show_countdown_tile:ct(o.show_countdown_tile,I.show_countdown_tile),tap_action:Po(o.tap_action,e,n),hold_action:Po(o.hold_action,e,n),double_tap_action:Po(o.double_tap_action,e,n),card_style:ge(o.card_style,Rt.cardStyle,I.card_style),scene:ge(o.scene,Rt.scene,I.scene),show_sun_info:ct(o.show_sun_info,I.show_sun_info),show_moon_info:ct(o.show_moon_info,I.show_moon_info),theme_mode:ge(o.theme_mode,Rt.themeMode,I.theme_mode),animations:ct(o.animations,I.animations),time_format:ge(o.time_format,Rt.timeFormat,I.time_format),language:ge(o.language,Rt.language,I.language),show_header:ct(o.show_header,I.show_header),show_day_chart:ct(o.show_day_chart,I.show_day_chart),show_sky_view:ct(o.show_sky_view,I.show_sky_view),show_events:ct(o.show_events,I.show_events),show_moon_times:ct(o.show_moon_times,I.show_moon_times),show_footer:ct(o.show_footer,I.show_footer),twilight_level:ge(o.twilight_level,Rt.twilightLevel,I.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:l,longitude:d},errors:t,warnings:n}}function Ss(i,e){let t=Ae(i.minimal_mode);return i.card_height==="auto"?k(Yi(e,i.card_style),t[0],t[1]):k(i.card_height,t[0],t[1])}function na(i,e,t,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},l={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:e,location:o,locationName:"",extras:oa(e,Ts(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:l,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:t,fatal:!0}}function Ts(i){return i==="de"?"de-DE":"en-GB"}function oa(i,e){return{timeZoneLongName:_o(i,e,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function ia(i,e){let t=io(i.getTime()-27648e5,i.getTime()-6e4);if(t.length===0)return!1;let n=t[t.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function sa(i,e,t){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:e,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=Zi[n-1];return lt(t,"folkName",{name:lt(t,o)})}function _s(i,e,t,n){return i?{time:i,azimuth:kn(i,e,"moon"),dayOffset:Et(i,n)-Et(t,n)}:null}function ra(i){if(typeof i!="string"||i.trim()==="")return null;let e=new Date(i);return Number.isNaN(e.getTime())?null:e}var ks=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],aa={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function la(i,e,t){let n=xs(e?.config?.time_zone),o=[],s=ao(e?.config?.latitude)?e.config.latitude:null,r=ao(e?.config?.longitude)?e.config.longitude:null,a=i.latitude??s,l=i.longitude??r,d=pe(i.language,e?.locale?.language??e?.language);if(a===null||l===null)return na(t,n,["missing-location",...o],d);let u={latitude:a,longitude:l},p=i.location_name.trim()!==""?i.location_name.trim():e?.config?.location_name??"",m=Ce(t,n),g=vs(t,n),f=no(u,m,g),$=xn(t,u),_=$.altitude,R=Je(t.getTime()+6e4,u),w=te(t,u),D=_n(t),H=Li(t,u),M=e?.states?.[i.entity];M||o.push("missing-sun-entity");let E={...f.events},v={};if(M?.attributes)for(let[j,ht]of ks){let St=ra(M.attributes[ht]),_t=f.events[j];if(St&&St>=m&&St<g&&(!_t||Math.abs(St.getTime()-_t.getTime())<=Vi)){E[j]=St,v[j]="ha";continue}v[j]=_t?"computed":"none"}else for(let[j]of ks)v[j]=f.events[j]?"computed":"none";for(let j of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])v[j]=f.events[j]?"computed":"none";let C=M?.attributes?Ct(M.attributes.elevation):null,L=M?.attributes?Ct(M.attributes.azimuth):null,P=i.moon_entity?e?.states?.[i.moon_entity]:void 0,X=P&&typeof P.state=="string"?aa[P.state]??null:null,G=i.show_moon?Di(u,m,g,H):null,K=[],A=900*1e3;for(let j=m.getTime();j<=g.getTime();j+=A){let ht=xn(j,u);K.push({altitude:ht.altitude,azimuth:ht.azimuth})}let N=null;E.sunrise&&E.sunset&&(N=(E.sunset.getTime()-E.sunrise.getTime())/6e4);let x=Ce(new Date(m.getTime()-720*60*1e3),n),V=no(u,x,m),W=V.events.sunrise&&V.events.sunset?(V.events.sunset.getTime()-V.events.sunrise.getTime())/6e4:null,tt=N!==null&&W!==null?N-W:null,O=Hi(t),ut=i.twilight_level==="nautical"?Bt:i.twilight_level==="astronomical"?jt:It,Z=j=>j?{time:j.time,rising:j.rising,dayOffset:Et(j.time,n)-Et(t,n)}:null,Y=i.show_sun?Z(oo(u,t,Ve)):null,Mt=i.show_twilight?Z(oo(u,t,ut)):null,at=t.getTime(),J=[H.nextRise,H.nextSet].filter(j=>j instanceof Date&&j.getTime()>at).sort((j,ht)=>j.getTime()-ht.getTime())[0],yt=i.show_moon&&J?{time:J,rising:J.getTime()===H.nextRise?.getTime(),dayOffset:Et(J,n)-Et(t,n)}:null,gt={timeZoneLongName:_o(n,Ts(d),t),previousDaylightMinutes:W,daylightDeltaMinutes:tt,sunBelowHorizon:_<0?Math.abs(_):null,sunriseAzimuth:E.sunrise?kn(E.sunrise,u,"sun"):null,sunsetAzimuth:E.sunset?kn(E.sunset,u,"sun"):null,nextFullMoon:O,nextFullMoonDays:O?Math.round((O.time.getTime()-t.getTime())/(1440*60*1e3)):null,blueMoon:O?ia(O.time,n):!1,moonFolkName:sa(O?.time??null,n,d),moonDistance:Ri(t,u,14),moonRise:_s(H.nextRise??H.previousRise,u,t,n),moonSet:_s(H.nextSet??H.previousSet,u,t,n),nextSunEvent:Y,nextTwilightEvent:Mt,nextMoonEvent:yt,goldenHour:i.show_golden_hour?Ei(u,t,qe,vn):null};return f.polar==="polar-day"&&o.push("polar-day"),f.polar==="polar-night"&&o.push("polar-night"),E.sunrise||o.push("no-sunrise-today"),E.sunset||o.push("no-sunset-today"),!E.civilDawn&&!E.civilDusk&&o.push("no-civil-twilight"),{now:t,timeZone:n,location:u,locationName:p,day:f,sun:{altitude:_,azimuth:$.azimuth,phase:Ni(_),rising:R>_,haElevation:C,haAzimuth:L},moon:{position:w,phase:D,events:H,haPhaseName:X},sunTrack:K,moonPath:G,events:E,eventSources:v,extras:gt,daylightMinutes:N,issues:o,fatal:!1}}var en=new Map;function ca(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight),String(i.show_golden_hour)].join("|")}function ua(i,e){if(!e)return"-";let t=e.states?.[i.entity],n=i.moon_entity?e.states?.[i.moon_entity]:void 0;return[e.config?.time_zone??"",e.config?.latitude??"",e.config?.longitude??"",e.config?.location_name??"",t?.attributes?.next_rising??t?.last_updated??"",t?.attributes?.next_setting??"",t?.attributes?.next_dawn??"",t?.attributes?.next_dusk??"",t?.attributes?.elevation??"",n?.state??""].join("|")}function As(i,e,t){let n=Math.floor(t.getTime()/6e4),o=[ca(i),ua(i,e),n,t.getTimezoneOffset()].join("#"),s=en.get(o);if(s)return s;let r=la(i,e,t);if(en.size>24){let a=en.keys().next().value;a!==void 0&&en.delete(a)}return en.set(o,r),r}var Cs=mn`
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
`,Es=mn`
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
`;function Io(i,e){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}var ie=class extends Pt{constructor(){super(...arguments);this._open=new Set(["style"])}setConfig(t){this._config={...t}}get _language(){return pe(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,n){return lt(this._language,t,n)}_value(t,n){let o=this._config?.[t];return o??n}_update(t){if(!this._config)return;let n={...this._config,...t};for(let[o,s]of Object.entries(t)){let r=I[o];s===r&&o in I&&delete n[o]}this._config=n,Io(this,n)}_group(t,n,o,s){let r=this._open.has(t);return S`
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
    `}render(){if(!this._config)return S``;let t=this._config,n=t.card_height,o=n==="auto"||n===null,s=t.minimal_mode===!0,r=Ae(s),a=s?I.card_height:Te(t.card_style),l=typeof n=="number"?n:a,d=t.latitude===void 0||t.latitude===null,u=t.card_style??"glass",p=(u==="scene"||u==="clean")&&!s,m={glass:this._t("editorCardStyleGlass"),flat:this._t("editorCardStyleFlat"),horizon:this._t("editorCardStyleHorizon"),scene:this._t("editorCardStyleScene"),clean:this._t("editorCardStyleClean")},g={city:this._t("editorSceneCity"),mountains:this._t("editorSceneMountains"),forest:this._t("editorSceneForest"),coast:this._t("editorSceneCoast"),none:this._t("editorSceneNone")},f=v=>this._value(v,I[v]),$=u==="scene"?`${m.scene.split(" (")[0]} \xB7 ${g[t.scene??"city"]}`:(m[u]??u).split(" (")[0],_=[o?this._t("editorCardHeightAuto"):`${l} px`,s?this._t("editorMinimalMode"):null,!s&&t.compact_mode?this._t("editorCompactMode"):null].filter(Boolean).join(" \xB7 "),R=[["show_sun","editorShowSun"],["show_moon","editorShowMoon"],...p?[["show_sun_info","editorSunInfo"],["show_moon_info","editorMoonInfo"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"]]:[["show_twilight","editorShowTwilight"],["show_astronomical_details","editorShowAstronomicalDetails"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"],["show_sky_view","editorShowSkyView"],["show_events","editorShowEvents"],["show_moon_times","editorShowMoonTimes"],["show_golden_hour","editorGoldenHour"],["show_footer","editorShowFooter"]]],w=R.filter(([v])=>f(v)).length,D=this._t("editorSwitchCount",{on:w,total:R.length}),H=f("show_remaining_time")?this._t(t.remaining_time_focus==="next"?"editorRemainingTimeFocusNext":t.remaining_time_focus==="golden_hour"?"editorRemainingTimeFocusGolden":"editorRemainingTimeFocusSun").split(" (")[0]:this._t("editorOff"),M=[t.language==="de"?"Deutsch":t.language==="en"?"English":this._t("editorLanguageAuto"),t.time_format==="12"?this._t("editorTimeFormat12"):t.time_format==="24"?this._t("editorTimeFormat24"):null].filter(Boolean).join(" \xB7 "),E=d?"Home Assistant":`${c(Number(t.latitude),2)}\xB0, ${c(Number(t.longitude??0),2)}\xB0`;return S`
      <div class="card-config">
        ${this._group("style","editorGroupStyle",$,S`
            ${this._select("cardstyle","card_style","editorCardStyle","glass",Rt.cardStyle.map(v=>[v,m[v]]),{patch:v=>this._styleHeight(v)})}
            ${u==="scene"?this._select("scene","scene","editorScene","city",Rt.scene.map(v=>[v,g[v]])):T}
            ${this._select("theme","theme_mode","editorThemeMode","auto",[["auto",this._t("editorThemeAuto")],["light",this._t("editorThemeLight")],["dark",this._t("editorThemeDark")]])}
            ${this._switch("animations","editorAnimations")}
            ${p?T:this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",I.sun_marker_size),min:Ye[0],max:Ye[1],step:.5,digits:1,set:v=>this._update({sun_marker_size:v})})}
          `)}
        ${this._group("layout","editorGroupLayout",_,S`
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
                  @input=${v=>this._update({card_height:Number(v.target.value)})}
                />
                <input
                  id="height-number"
                  type="number"
                  aria-label=${this._t("editorCardHeight")}
                  min="${r[0]}"
                  max="${r[1]}"
                  .value=${String(l)}
                  ?disabled=${o}
                  @change=${v=>{let C=Ct(v.target.value);C!==null&&this._update({card_height:Math.round(k(C,r[0],r[1]))})}}
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
                    @change=${v=>this._update({card_height:v.target.checked?"auto":a})}
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
                  ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",I.popup_width),min:ee[0],max:ee[1],step:20,set:v=>this._update({popup_width:Math.round(v)})})}
                  ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",I.popup_height),min:ne[0],max:ne[1],step:20,set:v=>this._update({popup_height:Math.round(v)})})}`:T}
          `)}
        ${this._group("content","editorGroupContent",D,S`
            ${R.map(([v,C])=>this._switch(v,C))}
            ${this._select("twilight","twilight_level","editorTwilightLevel","civil",[["civil",this._t("editorTwilightCivil")],["nautical",this._t("editorTwilightNautical")],["astronomical",this._t("editorTwilightAstronomical")],["all",this._t("editorTwilightAll")]])}
          `)}
        ${this._group("countdown","editorGroupCountdown",H,S`
            ${this._switch("show_remaining_time","editorRemainingTime")}
            ${this._select("remaining-focus","remaining_time_focus","editorRemainingTimeFocus","sun",[["sun",this._t("editorRemainingTimeFocusSun")],["next",this._t("editorRemainingTimeFocusNext")],...t.show_golden_hour?[["golden_hour",this._t("editorRemainingTimeFocusGolden")]]:[]],{disabled:t.show_remaining_time===!1})}
            ${p?T:this._switch("show_countdown_tile","editorCountdownTile")}
          `)}
        ${this._group("locale","editorGroupLocale",M,S`
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
                  @change=${v=>this._update({entity:v.target.value.trim()})}
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
                  @change=${v=>this._update({moon_entity:v.target.value.trim()})}
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
                    @change=${v=>{if(v.target.checked){let L={...this._config};delete L.latitude,delete L.longitude,this._config=L,Io(this,L)}else this._update({latitude:c(this.hass?.config?.latitude??0,4),longitude:c(this.hass?.config?.longitude??0,4)})}}
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
                  @change=${v=>{let C=Ct(v.target.value);this._update({latitude:C===null?void 0:k(C,-90,90)})}}
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
                  @change=${v=>{let C=Ct(v.target.value);this._update({longitude:C===null?void 0:k(C,-180,180)})}}
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
                  @change=${v=>this._update({location_name:v.target.value})}
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
            @change=${m=>{let g=Ct(m.target.value);g!==null&&u(k(g,r,a))}}
          />
        </div>
      </div>
    `}_styleHeight(t){let n=this._config?.card_height;if(this._config?.minimal_mode===!0)return{};let o=Te(this._config?.card_style),s=Te(t);return s!==o&&(n===void 0||n===o)?{card_height:s}:{}}_warnings(){let t=this._config?.card_height,n=Ae(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<n[0]||t>n[1])?S`<span class="hint">
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
    `}_reset(){let t=Cn();this._config=t,Io(this,t)}};ie.styles=Es,Lt([_e({attribute:!1})],ie.prototype,"hass",2),Lt([me()],ie.prototype,"_config",2),Lt([me()],ie.prototype,"_open",2),ie=Lt([yn(Ki)],ie);var se=12,Ds=17,qt=class extends Pt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=t=>{if(!this._popup)return;if(t.key==="Escape"){t.stopPropagation(),this._closeDetails();return}if(t.key!=="Tab")return;let n=this._popupFocusable(),o=n[0],s=n[n.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?n.indexOf(r):-1;if(a===-1){t.preventDefault(),(t.shiftKey?s:o).focus();return}t.shiftKey&&a===0?(t.preventDefault(),s.focus()):!t.shiftKey&&a===n.length-1&&(t.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let t=this._config?.hold_action;t&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(t,!1)},Bi))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=t=>{if(this._held){this._held=!1;return}let n=t.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},ji)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(t){let n=this._hass;this._hass=t,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=t)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Cn()}setConfig(t){if(!t||typeof t!="object")throw new Error("Invalid configuration");let n=pe(t.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=Ms(t,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let t=this._resolvedHeight();return Math.max(1,Math.round(t/50))}getGridOptions(){let t=this._resolvedHeight();return{rows:Math.max(1,Math.round(t/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(t){super.willUpdate(t);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&t!==this._width&&(this._width=t)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&(this._width=t)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let t=this._language(),n=k(this._config.popup_width,ee[0],ee[1]),o=k(this._config.popup_height,ne[0],ne[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",lt(t,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",lt(t,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let l=this._config,d={...l,latitude:l.latitude??void 0,longitude:l.longitude??void 0,location_name:l.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},u=document.createElement(go);u.hass=this.hass;try{u.setConfig(d)}catch{}this._popupCard=u,r.append(u,a),s.append(r),s.addEventListener("click",p=>{p.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let t=document.activeElement;if(!t)return null;let n=t.shadowRoot?.activeElement;return n instanceof HTMLElement?n:t}_popupFocusable(){if(!this._popup)return[];let t=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&t.push(n);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||t.push(s);return t}_handleMinimalKey(t){if(t.key==="Enter"||t.key===" "){t.preventDefault();let n=t.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(t){this._runAction(this._config?.tap_action??null,!0,t)}_runAction(t,n,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Do(r,this.hass,s,t,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(t){if(t.has("_config")||t.has("_width")||t.has("_tick"))return!0;if(t.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(t=>{let n=t.some(o=>o.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,Oi()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let t=this._config,n=this.hass;if(!n||!t)return"";let o=n.states?.[t.entity],s=t.moon_entity?n.states?.[t.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Ss(this._config,this._width||400):I.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return pe(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let t=this._config;if(!t)return S``;let n=this._width||400,o=this._resolvedHeight(),s=Ji(o,n,t),r=As(t,this.hass,new Date),a=this._language(),l=this._isDark(),d=l?fo:yo;if(r.fatal)return S`
        <ha-card
          class=${pt({"smc-dark":l,"smc-light":!l,"smc-minimal":s.minimal})}
          style=${U({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${ys(18)}</span>
              <span>${lt(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let u=os(a,this._locale(),r.timeZone,es(t.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?S`
        <ha-card
          class=${pt({"smc-dark":l,"smc-light":!l,"smc-minimal":!0})}
          style=${U({height:`${o}px`})}
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
            class=${pt({root:!0,minimal:!0})}
            style=${U({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
          >
            ${this._renderMinimalTimes(r,u,s,t)}
            <div
              class="chart-wrap minimal"
              style=${U({height:`${s.chartHeight}px`})}
            >
              ${So({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style==="scene"||t.card_style==="clean"?"glass":t.card_style,compact:!1,minimal:!0,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:t.card_style==="scene"?this._renderSceneCard(r,u,t,d,l,n,o):t.card_style==="clean"?this._renderCleanCard(r,u,t,l,n,o):S`
      <ha-card
        class=${pt({"smc-dark":l,"smc-light":!l})}
        style=${U({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,u)}
      >
        <div
          class=${pt({root:!0,compact:s.compact})}
          style=${U({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
        >
          ${s.showHeader?this._renderHeader(r,u,d,s):T}

          <div
            class=${pt({body:!0,columns:s.skyViewSide})}
            style=${U({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${t.show_day_chart?S`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${U({height:`${s.chartHeight}px`})}
                  >
                    ${So({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style,compact:s.compact,minimal:!1,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,u,s),showGoldenHour:t.show_golden_hour,moonPath:r.moonPath,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(u,s.legendHeight):T}
                </div>`:T}
            ${s.skyViewSide?S`<div
                  class="sky-column"
                  style=${U({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${Co({width:s.skyViewWidth,height:s.chartHeight,sun:t.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:t.show_sun,showMoon:t.show_moon,palette:d,format:u,animations:t.animations,uid:`${this._uid}-sky`,seed:Et(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,u,s.skyViewWidth,this._countdownRows(s))}
                </div>`:T}
          </div>

          ${s.showEvents?this._renderEvents(r,u,s):T}
          ${s.showDetails?this._renderDetails(r,u,t,s,a,l,n):T}
          ${s.showFooter?this._renderFooter(r,u,t,s):T}
        </div>
      </ha-card>
    `}_renderSceneCard(t,n,o,s,r,a,l){let d=a<480?12:16,u=12,p=Math.max(160,a-2*d),m=o.show_sun&&o.show_sun_info,g=o.show_moon&&o.show_moon_info,f=(m?1:0)+(g?1:0),$=this._infoLayout(p,f,12,330,150),_=$.compact?90:a<480?78:92,R=f===0?0:$.side?_:f*_+(f-1)*10,w=a<480?46:52,D=140,H=o.show_header,M=f>0,E=(C,L)=>l-2*d-(C?w+u:0)-(L?R+u:0);o.show_day_chart&&M&&E(H,!0)<D&&(M=!1),o.show_day_chart&&H&&E(!0,M)<D&&(H=!1);let v=o.show_day_chart?Math.max(D,E(H,M)):0;return S`
      <ha-card
        class=${pt({"smc-dark":r,"smc-light":!r,"smc-scene":!0})}
        style=${U({height:`${l}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,n)}
      >
        <div
          class="root scene-root"
          style=${U({padding:`${d}px`,gap:`${u}px`})}
        >
          ${H?this._renderSceneHeader(t,n,s,a,w):T}
          ${o.show_day_chart?S`<div class="scene-wrap" style=${U({height:`${v}px`})}>
                ${ds({profile:t.day,events:t.events,now:t.now,width:p,height:v,format:n,scene:o.scene,showSun:o.show_sun,showMoon:o.show_moon,moonPath:t.moonPath,moon:o.show_moon?{illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,altitude:t.moon.position.apparentAltitude}:null,currentAltitude:t.sun.altitude,animations:o.animations,uid:`${this._uid}-scene`})}
              </div>`:T}
          ${M?S`<div
                class=${pt({"scene-tiles":!0,stacked:!$.side,single:f===1})}
                style=${U({height:`${R}px`})}
              >
                ${m?this._renderSceneSunTile(t,n,a<480,$.compact,$.itemWidth):T}
                ${g?this._renderSceneMoonTile(t,n,a<480,$.compact,$.itemWidth):T}
              </div>`:T}
        </div>
      </ha-card>
    `}_renderCleanCard(t,n,o,s,r,a){let l=r<480,d=l?14:18,u=Math.max(160,r-2*d-2),p=o.show_sun&&o.show_sun_info,m=o.show_moon&&o.show_moon_info,g=(p?1:0)+(m?1:0),f=this._infoLayout(u,g,37,300,140),$=f.side,_=f.compact?62:l?64:72,R=g===0?0:$?_:g*_+(g-1)*12,w=l?52:60,D=21,H=110,M=o.show_header,E=g>0,v=(tt,O)=>a-2*d-(tt?w:0)-(O?R+D:0);o.show_day_chart&&E&&v(M,!0)<H&&(E=!1),o.show_day_chart&&M&&v(!0,E)<H&&(M=!1);let C=o.show_day_chart?Math.max(H,v(M,E)):0,L=this._primaryCountdown(t,n),P=n.t(this._phaseKey(t)),X=t.locationName?`${t.locationName} \xB7 ${Qe(t.now,n)}`:Qe(t.now,n),G=u<320,K=G?18:l?20:22,A=(G?46:l?54:64)+Math.max(n.t("title").length*K*.56,X.length*(G?13:14)*.53),N=tt=>tt.length*13.5*.58+30,x=u-A-12,W=(L?[{phase:!0,text:L.compact},{phase:!1,text:L.compact},{phase:!0,text:L.duration},{phase:!1,text:L.duration}]:[{phase:!0,text:null},{phase:!1,text:null}]).find(tt=>(tt.phase?N(P)+8:0)+(tt.text?N(tt.text):0)<=x)??{phase:!1,text:null};return S`
      <ha-card
        class=${pt({"smc-dark":s,"smc-light":!s,"smc-clean":!0})}
        style=${U({height:`${a}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,n)}
      >
        <div class="root clean-root" style=${U({padding:`${d}px`})}>
          ${M?S`<div
                class=${pt({"clean-header":!0,tiny:G})}
                style=${U({height:`${w}px`})}
              >
                <div class="clean-head-left">
                  <svg class="clean-logo" width=${G?34:l?40:50}
                    height=${G?27:l?32:40}
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
                    <span class="clean-subtitle">${X}</span>
                  </div>
                </div>
                <div class="clean-chips">
                  ${W.phase?S`<span class="clean-chip phase" title=${P}>${P}</span>`:T}
                  ${L&&W.text?S`<span
                        class="clean-chip countdown-chip"
                        data-body=${L.body}
                        role="img"
                        aria-label=${L.long}
                        title=${L.title}
                        >${W.text}</span
                      >`:T}
                </div>
              </div>`:T}
          ${o.show_day_chart?S`<div class="clean-chart-wrap" style=${U({height:`${C}px`})}>
                ${hs({profile:t.day,events:t.events,now:t.now,width:u,height:C,format:n,showSun:o.show_sun,showMoon:o.show_moon,moonPath:t.moonPath,sunAltitude:t.sun.altitude,moonAltitude:t.moon.position.apparentAltitude})}
              </div>`:T}
          ${E?S`<div class="clean-divider"></div>
                <div
                  class=${pt({"clean-info":!0,stacked:!$,single:g===1})}
                  style=${U({height:`${R}px`})}
                >
                  ${p?this._renderCleanSun(t,n,l,f.compact,f.itemWidth):T}
                  ${p&&m&&$?S`<span class="clean-sep" aria-hidden="true"></span>`:T}
                  ${m?this._renderCleanMoon(t,n,l,f.compact,f.itemWidth):T}
                </div>`:T}
        </div>
      </ha-card>
    `}_infoLayout(t,n,o,s,r){let a=(t-o)/2,l=n===2&&a>=r,d=l?a:t;return{side:l,compact:d<s,itemWidth:d}}_sunTimesText(t,n){let o=s=>s?rt(s,n):"\u2014";return`\u2191 ${o(t.events.sunrise)}  \u2193 ${o(t.events.sunset)}`}_moonPositionTexts(t,n){let o=t.moon.position.apparentAltitude,s=st(o,1,n.locale);return o>=0?[`${s} \xB7 ${Math.round(t.moon.position.azimuth)}\xB0 ${Ot(t.moon.position.azimuth,n.language)}`,s]:[`${st(Math.abs(o),1,n.locale)} ${n.t("belowHorizon")}`,s]}_cleanItem(t,n,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${pt({"clean-item":!0,[t]:!0,compact:n,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??T}
      @keydown=${o?a:T}
    >
      ${r}
    </div>`}_renderCleanSun(t,n,o,s,r){let a=st(t.sun.altitude,1,n.locale),l=`${Math.round(t.sun.azimuth)}\xB0 ${Ot(t.sun.azimuth,n.language)}`,d=s?40:o?50:58,u=r-d-(s?12:16),p=this._fitLabel([`${n.t("azimuth")} ${l}`,l],u,s?12:13.5,.56);return this._cleanItem("sun",s,this._sceneTileAction(this._config.entity),`${n.t("sunAltitude")} ${a}, ${n.t("azimuth")} ${l}`,S`<span class="clean-badge sun" style=${U({width:`${d}px`,height:`${d}px`})}
          >${zn(s?22:o?26:30,"currentColor")}</span
        >
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([n.t("sunAltitude"),n.t("sun")],u,13,.56)??n.t("sun")}</span
          >
          <span class="clean-item-value">${a}</span>
          <span class="clean-item-sub">${p??l}</span>
        </span>`)}_renderCleanMoon(t,n,o,s,r){let a=s?40:o?50:58,l=r-a-(s?12:16),d=s?12:13.5,u=this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],l,d,.56)??this._moonTimesText(t,n,!0),p=t.moon.haPhaseName??t.moon.phase.phaseKey,m=Nn(t.moon.phase.illumination,n.locale),g=`${m} ${n.t("illumination")}`,f=this._fitLabel([g,m],l,s?18:24,.56)??m,$=s?20:o?24:28;return this._cleanItem("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${n.t(p)}, ${g}`,S`<span class="clean-badge moon" style=${U({width:`${a}px`,height:`${a}px`})}>
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
      <div class="scene-header" style=${U({height:`${r}px`})}>
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
            <span class="scene-date">${Qe(t.now,n)}</span>
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
                  style=${U({background:this._phaseColor(t,o)})}
                ></span>
                ${d}
              </span>`}
        </div>
      </div>
    `}_sceneTileAction(t){return!t||!this.hass?.states?.[t]?null:()=>Do(this,this.hass,this._config,{action:"more-info",entity:t},void 0)}_sceneTile(t,n,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${pt({"scene-tile":!0,[t]:!0,compact:n,actionable:!!o})}
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
    </div>`}_renderSceneSunTile(t,n,o,s,r){let a=s?40:o?52:62,l=st(t.sun.altitude,1,n.locale),d=`${Math.round(t.sun.azimuth)}\xB0 ${Ot(t.sun.azimuth,n.language)}`,u=f=>f?rt(f,n):"\u2014",p=`${n.t("sunAltitude")} ${l}, ${n.t("azimuth")} ${d}`,m=r-(s?22:30)-a-(s?10:14),g=S`<span
      class="scene-tile-icon"
      style=${U({width:`${a}px`,height:`${a}px`})}
      >${zn(Math.round(a*.55),"#f5a524")}</span
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
        </span>`)}_renderSceneMoonTile(t,n,o,s,r){let a=s?40:o?52:62,l=t.moon.haPhaseName??t.moon.phase.phaseKey,d=Nn(t.moon.phase.illumination,n.locale),u=`${d} ${n.t("illumination")}`,p=r-(s?22:30)-a-(s?10:14)-(s?0:24),m=s?11.5:12.5,g=this._fitLabel(this._moonPositionTexts(t,n),p,m,.56)??this._moonPositionTexts(t,n)[1],f=this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],p,m,.56)??this._moonTimesText(t,n,!0),$=this._fitLabel([u,d],p,18,.58)??d;return this._sceneTile("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${n.t(l)}, ${u}`,S`<span class="scene-tile-icon moon" style=${U({width:`${a}px`,height:`${a}px`})}
          >${Zt({size:a,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,darkColor:"var(--smc-scene-moon-dark, rgba(92, 102, 160, 0.7))",texture:!s,uid:`${this._uid}-scene-tile-moon`})}</span
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
        </span>`)}_renderHeader(t,n,o,s){let r=t.locationName||n.t("title"),a=t.extras,l=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),d=10.5,u=(M,E=!1)=>M.length*d*.58+20+(E?12:0),m=Math.max(0,l-10-108),g=n.t(this._phaseKey(t)),f=u(g,!0),$=this._primaryCountdown(t,n),_=T,R=!0;if($){let M=u($.compact)+Ds,E=u($.duration)+Ds,v=null;M+f<=m?(v=$.compact,m-=M):E+f<=m?(v=$.duration,m-=E):E<=m&&(v=$.duration,m-=E,R=!1),v!==null&&(_=S`<span
          class="meta-chip countdown-chip"
          data-body=${$.body}
          role="img"
          aria-label=${$.long}
          title=${$.title}
          >${$.icon}<span>${v}</span></span
        >`)}R&&(m-=f);let w=T;if(t.daylightMinutes!==null){let M=Dn(t.daylightMinutes,n.t),E=a.daylightDeltaMinutes===null?"":` ${ns(a.daylightDeltaMinutes,n.t)}`,v=`${n.t("dayLength")} ${M}${E}`,C=u(v);C<=m&&(m-=C,w=S`<span class="meta-chip" title=${n.t("dayLength")}
          >${v}</span
        >`)}let D=T,H=u(a.timeZoneLongName);return H<=m&&(m-=H,D=S`<span class="meta-chip">${a.timeZoneLongName}</span>`),S`
      <div class="header" style=${U({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${Qe(t.now,n)}</span>
        </div>
        <div class="header-meta">
          ${_}${w}${D}
          ${R?S`<span class="phase-chip" title=${g}>
                <span
                  class="phase-dot"
                  style=${U({background:this._phaseColor(t,o)})}
                ></span>
                ${g}
              </span>`:T}
        </div>
      </div>
    `}_countdowns(t,n){let o=this._countdownCache;if(o&&o.model===t&&o.context===n)return[...o.entries];let s=this._computeCountdowns(t,n);return this._countdownCache={model:t,context:n,entries:s},[...s]}_computeCountdowns(t,n){let o=this._config;if(!o?.show_remaining_time)return[];let s=t.now.getTime(),r=[],a=(g,f,$,_,R,w=!1)=>{if(!g)return;let D=(g.time.getTime()-s)/6e4;if(!(D>=0))return;let H=D<1,M=H?n.t("countdownNow"):Dn(D,n.t),E=v=>H?n.t("nowFormat",{event:n.t(v)}):n.t("untilFormat",{event:n.t(v),duration:M});r.push({minutes:D,compact:E($??f),duration:M,time:g.time,rising:g.rising,trailing:w,name:n.t(f),long:E(f),title:`${n.t(f)} ${rt(g.time,n)}${g.dayOffset>0?` (${Ln(g.dayOffset,n.t)})`:""}`,icon:_,body:R})},l=t.extras.nextSunEvent;a(l,l?.rising?"sunrise":"sunset",l?.rising?"sunriseShort":"sunsetShort",l?.rising?Lo(se):No(se),"sun");let d=t.extras.nextTwilightEvent;if(d){let g=this._twilightKeys();a(d,d.rising?g.dawn:g.dusk,d.rising?g.dawnShort:g.duskShort,d.rising?Hn(se):Rn(se),"twilight")}let u=t.extras.nextMoonEvent;a(u,u?.rising?"moonrise":"moonset",u?.rising?"moonriseShort":"moonsetShort",u?.rising?Ho(se):fs(se),"moon");let p=t.extras.goldenHour;if(p){let g=p.active?p.end:p.start;g&&a({time:g,rising:!p.active,dayOffset:this._dayOffset(g,t)},p.active?"goldenHourEnd":"goldenHour",p.active?"goldenHourEndShort":"goldenHourShort",ps(se),"golden")}let m=t.extras.nextFullMoon;return o.show_moon&&m&&a({time:m.time,rising:!0,dayOffset:this._dayOffset(m.time,t)},"fullMoon",null,Ho(se),"moon",!0),r.sort((g,f)=>+!!g.trailing-+!!f.trailing||g.minutes-f.minutes)}_orderedCountdowns(t,n){let o=this._countdowns(t,n),s=this._config?.remaining_time_focus;if(s==="next")return o;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let a of r){let l=o.findIndex(d=>d.body===a&&!d.trailing);l>0&&o.unshift(...o.splice(l,1))}return o}_dayOffset(t,n){return Et(t,n.timeZone)-Et(n.now,n.timeZone)}_primaryCountdown(t,n){return this._orderedCountdowns(t,n).find(o=>!o.trailing)}_chartCountdown(t,n,o){let s=this._primaryCountdown(t,n);return s?{time:s.time,rising:s.rising,body:s.body,label:o.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let t=this._config?.twilight_level;return t==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:t==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(t,n){return S`
      <div class="legend" aria-hidden="true" style=${U({height:`${n}px`})}>
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
    `}_renderSkyReadout(t,n,o,s){let r=this._config,a=[],l=(d,u,p)=>{let m=st(u,1,n.locale),g=`${Math.round(p)}\xB0 ${Ot(p,n.language)}`;return S`<span
        title=${`${n.t("elevation")} ${m} \xB7 ${n.t("azimuth")} ${g}`}
        >${n.t("positionReadout",{body:d,altitude:m,degrees:String(Math.round(p)),direction:Ot(p,n.language)})}</span
      >`};r.show_sun&&a.push(l(n.t("sun"),t.sun.altitude,t.sun.azimuth)),r.show_moon&&a.push(l(n.t("moon"),t.moon.position.apparentAltitude,t.moon.position.azimuth));for(let d of this._orderedCountdowns(t,n).slice(0,s))a.push(S`<span title=${d.title}>${d.long}</span>`);return a.length===0||o<150?T:S`<div class="sky-readout">${a}</div>`}_countdownRows(t){let n=this._config,o=(n.show_sun?1:0)+(n.show_moon?1:0),s=t.chartHeight+t.legendHeight+(t.showLegend?wo:0),r=o*$o+wo,a=s-r-Xi;return Math.max(0,Math.min(3,Math.floor(a/$o)))}_renderFooter(t,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),l=n.t(r),d=t.extras.timeZoneLongName,u=n.t("footerMethod"),p=`${l} \xB7 ${d} \xB7 ${u}`,m=9.5*.55,g=_=>_.length*m<=a,f=g(`${l} \xB7 ${d}`)?`${l} \xB7 ${d}`:l,$=g(`${f} \xB7 ${u}`);return S`
      <div
        class="footer"
        title=${p}
        style=${U({height:`${s.footerHeight}px`})}
      >
        <span class="part">${f}</span>
        ${$?S`<span class="part">${u}</span>`:T}
      </div>
    `}_phaseKey(t){if(t.day.polar==="polar-day")return"phasePolarDay";if(t.day.polar==="polar-night")return"phasePolarNight";switch(t.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(t,n){switch(t.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(t,n,o,s=.7){for(let r of t)if(r&&r.length*o*s<=n)return r;return null}_renderCountdownTile(t,n,o,s,r,a,l){let u=t.body==="sun"&&!t.rising?n.t("tileDaylightLeft"):n.t("tileUntil",{event:t.name}),p=this._fitLabel([u,t.name],r,a),m=this._fitLabel([t.duration],r,l+2)??t.duration;return S`<div
      class=${pt({"event-tile":!0,countdown:!0,rising:t.rising,compact:o})}
      data-body=${t.body}
      style=${U({gridColumn:`span ${s}`})}
      title=${t.title}
      role="img"
      aria-label=${t.long}
    >
      <span class="event-head">
        <span class="event-icon">${t.icon}</span>
        <span class="event-time" style=${U({fontSize:`${l+2}px`})}
          >${m}</span
        >
        ${o&&p?S`<span class="event-label" style=${U({fontSize:`${a}px`})}
              >${p}</span
            >`:T}
      </span>
      ${!o&&p?S`<span class="event-label" style=${U({fontSize:`${a}px`})}
            >${p}</span
          >`:T}
    </div>`}_renderEvents(t,n,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),l=this._config,d=[];if(l.show_twilight&&d.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:t.events.civilDawn,icon:Hn(s?14:16),missingText:n.t("noEvent")}),d.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:t.events.sunrise,icon:Lo(s?14:16),missingText:n.t("noSunrise")}),d.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:t.events.sunset,icon:No(s?14:16),missingText:n.t("noSunset")}),l.show_twilight&&d.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:t.events.civilDusk,icon:Rn(s?14:16),missingText:n.t("noEvent")}),l.twilight_level==="all"||l.show_astronomical_details){let L=[["nauticalDawn",t.events.nauticalDawn,"dawn"],["nauticalDusk",t.events.nauticalDusk,"dusk"],["astronomicalDawn",t.events.astronomicalDawn,"dawn"],["astronomicalDusk",t.events.astronomicalDusk,"dusk"]];for(let[P,X,G]of L)d.push({key:P,kind:G,label:n.t(P),shortLabel:n.t(P),time:X,icon:G==="dawn"?Hn(s?13:15):Rn(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let u=a<300?3:a<420?4:a<560?6:8,p=l.show_countdown_tile?this._primaryCountdown(t,n):void 0,m=p?2:0,g=Math.max(2,u-m),f=L=>L.secondary?2:L.kind==="sunrise"||L.kind==="sunset"?0:1,$=new Set([...d].map((L,P)=>({tile:L,index:P})).sort((L,P)=>f(L.tile)-f(P.tile)||L.index-P.index).slice(0,g).map(L=>L.tile)),_=d.filter(L=>$.has(L)),R=t.now.getTime(),w=_.filter(L=>L.time&&L.time.getTime()>R).sort((L,P)=>L.time.getTime()-P.time.getTime())[0],D=6,H=_.length+m,E=Math.max(40,a-2*r-D*(H-1))/H-10,v=s?E<120?8.5:9:E<92?8.5:9.5,C=E<74?11:E<96?12:12.5;return S`
      <div
        class="events"
        style=${U({gap:`${D}px`,height:`${o.eventsHeight}px`})}
      >
        ${p?this._renderCountdownTile(p,n,s,m,E*m+(m-1)*(D+10),v,C):T}
        ${_.map(L=>{let P=this._fitLabel([L.label,L.shortLabel],E,v),X=L.time?rt(L.time,n):L.missingText,G=this._fitLabel([X,"\u2014"],E,C)??"\u2014";return S`
            <div
              class=${pt({"event-tile":!0,[L.kind]:!0,secondary:!!L.secondary,next:L===w,compact:s})}
              title=${`${L.label}: ${X}`}
            >
              <span class="event-head">
                <span class="event-icon">${L.icon}</span>
                <span
                  class=${pt({"event-time":!0,missing:!L.time})}
                  style=${U({fontSize:`${C}px`})}
                >
                  ${G}
                </span>
                ${s&&P?S`<span
                      class="event-label"
                      style=${U({fontSize:`${v}px`})}
                      >${P}</span
                    >`:T}
              </span>
              ${!s&&P?S`<span
                    class="event-label"
                    style=${U({fontSize:`${v}px`})}
                    >${P}</span
                  >`:T}
            </div>
          `})}
      </div>
    `}_renderDetails(t,n,o,s,r,a,l){let d=t.extras,u=t.moon.haPhaseName??t.moon.phase.phaseKey,p=s.skyViewInline&&l>=430,m=(o.show_sun?1:0)+(o.show_moon?1:0)+(p?1:0),f=Math.max(60,l-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,$=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],f,10.5),_=st(t.sun.altitude,1,n.locale),R=`${Math.round(t.sun.azimuth)}\xB0 ${Ot(t.sun.azimuth,r)}`,w=d.sunBelowHorizon!==null?`${st(d.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,D=this._fitLabel([w?`${w} \xB7 ${R}`:`${n.t("azimuth")} ${R}`,w??R,R],f,9.5),H=d.sunriseAzimuth!==null?`${Math.round(d.sunriseAzimuth)}\xB0 ${Ot(d.sunriseAzimuth,r)}`:null,M=d.sunsetAzimuth!==null?`${Math.round(d.sunsetAzimuth)}\xB0 ${Ot(d.sunsetAzimuth,r)}`:null,E=o.show_astronomical_details&&H&&M?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:H,set:M}),`${Math.round(d.sunriseAzimuth)}\xB0 / ${Math.round(d.sunsetAzimuth)}\xB0`],f,9.5):null,v=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${t.events.solarNoon?rt(t.events.solarNoon,n):"\u2014"} \xB7 ${st(t.day.maxAltitude,1,n.locale)}`,t.events.solarNoon?rt(t.events.solarNoon,n):null],f,9.5):null,C=this._fitLabel([n.t(u),n.t("moon")],f,10.5),L=Nn(t.moon.phase.illumination,n.locale),P=this._fitLabel([`${L} ${n.t("illumination")}`,L],f,13),X=t.moon.position.apparentAltitude,G=st(X,1,n.locale),K=`${Math.round(t.moon.position.azimuth)}\xB0 ${Ot(t.moon.position.azimuth,r)}`,A=`${n.t("elevation")} ${G} \xB7 ${n.t("azimuth")} ${K}`,N=X>=0?[`${n.t("elevation")} ${G} \xB7 ${K}`,`${G} \xB7 ${K}`,G]:[`${st(Math.abs(X),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${K}`,`${st(Math.abs(X),1,n.locale)} ${n.t("belowHorizon")}`,G],x=null,V="";if(d.moonDistance){let{current:J,min:yt,max:gt}=d.moonDistance,j=Math.max(1,gt-yt),ht=J<=yt+j*.2,St=J>=yt+j*.8,_t=En(J,n.locale),Gt=ht?n.t("nearPerigee"):St?n.t("nearApogee"):"";V=`${n.t("moonDistance")}: ${_t} \xB7 ${n.t("distanceRange",{min:En(yt,n.locale),max:En(gt,n.locale)})}`,x=this._fitLabel(Gt?[`${_t} \xB7 ${Gt}`,_t]:[_t],f,9.5)}let W=this._fitLabel(x?N.flatMap(J=>[`${J} \xB7 ${x}`,J]):N,f,9.5),tt=x!==null&&(W?.includes(x)??!1),O=null,ut="";if(o.show_astronomical_details&&d.nextFullMoon){let J=d.nextFullMoonDays??0,yt=J<=0?n.t("dayToday"):n.t("inDays",{days:String(J)}),gt=`${n.t("nextFullMoon")} ${yt}`,j=d.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",ht=`${gt}${j}${d.moonFolkName?` \xB7 ${d.moonFolkName}`:""}`;ut=d.blueMoon?n.t("blueMoonHint"):d.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),O=this._fitLabel([ht,`${gt}${j}`,gt],f,9.5)}let Z=o.show_moon_times?this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],f,9.5):null,Y=[];W&&Y.push({text:W,title:A,position:!0}),Z&&Y.push({text:Z,title:null}),O&&Y.push({text:O,title:ut}),x&&!tt&&Y.push({text:x,title:V});let Mt=Y.slice(0,s.detailsHeight>=vo?3:2),at=tt||Mt.some(J=>J.text===x),ft=x&&!at?V||x:null;return S`
      <div
        class="details"
        style=${U({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?S`
              <div class="detail-tile sun">
                <span class="detail-icon">${zn(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${$?S`<span class="detail-title">${$}</span>`:T}
                  <span class="detail-value">${_}</span>
                  ${D?S`<span class="detail-sub">${D}</span>`:T}
                  ${v?S`<span class="detail-sub">${v}</span>`:T}
                  ${E?S`<span class="detail-sub">${E}</span>`:T}
                </span>
              </div>
            `:T}
        ${o.show_moon?S`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Zt({size:26,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${C?S`<span class="detail-title">${C}</span>`:T}
                  ${P?S`<span class="detail-value">${P}</span>`:T}
                  ${Mt.map(J=>{let yt=[J.title,J.position?ft:null].filter(Boolean).join(" \xB7 ")||null;return S`<span class="detail-sub" title=${yt??T}
                      >${J.text}</span
                    >`})}
                </span>
              </div>
            `:T}
        ${p?S`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${Co({width:56,height:56,sun:o.show_sun?{altitude:t.sun.altitude,azimuth:t.sun.azimuth}:null,moon:o.show_moon?{altitude:t.moon.position.apparentAltitude,azimuth:t.moon.position.azimuth,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,sunTrack:t.sunTrack,moonPhase:t.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?fo:yo,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:Et(t.now,t.timeZone)})}
                </span>
              </div>
            `:T}
      </div>
    `}_moonTimesText(t,n,o){let s=t.extras.moonRise,r=t.extras.moonSet,a=s&&s.dayOffset!==0?` ${Ln(s.dayOffset,n.t)}`:"",l=s?`\u2191 ${rt(s.time,n)}${a}`:"\u2191 \u2014";if(o)return l;let d=r&&r.dayOffset!==0?` ${Ln(r.dayOffset,n.t)}`:"",u=r?`\u2193 ${rt(r.time,n)}${d}`:"\u2193 \u2014";return`${l} \xB7 ${u}`}_renderMinimalTimes(t,n,o,s){if(o.minimalTimesHeight<=0)return T;let r=n.t,a=[];if(s.minimal_show_times&&t.events.sunrise){let d=rt(t.events.sunrise,n);a.push(S`<span class="minimal-time rise" title=${`${r("sunrise")} ${d}`}
          >↑ ${d}</span
        >`)}if(s.minimal_show_zenith&&t.events.solarNoon){let d=rt(t.events.solarNoon,n),u=o.chartWidth<250?d:`${r("zenith")} ${d}`;a.push(S`<span class="minimal-time zenith" title=${`${r("zenith")} ${d}`}
          >${u}</span
        >`)}if(s.minimal_show_times&&t.events.sunset){let d=rt(t.events.sunset,n);a.push(S`<span class="minimal-time set" title=${`${r("sunset")} ${d}`}
          >↓ ${d}</span
        >`)}if(a.length===0)return T;let l=k(c(o.minimalTimesHeight*.78,1),8,12);return S`<div
      class="minimal-times"
      style=${U({height:`${o.minimalTimesHeight}px`,fontSize:`${l}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(t,n){return`${this._minimalTitle(t,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(t,n){let o=[this._ariaLabel(t,n)];o.push(`${n.t("sun")} ${st(t.sun.altitude,0,n.locale)}`);let s=this._primaryCountdown(t,n);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(t,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(t))),t.events.sunrise&&o.push(`${n.t("sunrise")} ${rt(t.events.sunrise,n)}`),t.events.sunset&&o.push(`${n.t("sunset")} ${rt(t.events.sunset,n)}`),o.join(", ")}};qt.styles=Cs,Lt([_e({attribute:!1})],qt.prototype,"hass",1),Lt([me()],qt.prototype,"_config",2),Lt([me()],qt.prototype,"_width",2),Lt([me()],qt.prototype,"_tick",2),qt=Lt([yn(go)],qt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(e=>e.type===`custom:${An}`)||window.customCards.push({type:`custom:${An}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{qt as SunMoonCard};
