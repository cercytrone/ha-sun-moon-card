var Ys=Object.defineProperty;var Qs=Object.getOwnPropertyDescriptor;var Lt=(i,n,t,e)=>{for(var o=e>1?void 0:e?Qs(n,t):n,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(e?r(n,t,o):r(o))||o);return e&&o&&Ys(n,t,o),o};var hn=globalThis,mn=hn.ShadowRoot&&(hn.ShadyCSS===void 0||hn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kn=Symbol(),ri=new WeakMap,Fe=class{constructor(n,t,e){if(this._$cssResult$=!0,e!==Kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=t}get styleSheet(){let n=this.o,t=this.t;if(mn&&n===void 0){let e=t!==void 0&&t.length===1;e&&(n=ri.get(t)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),e&&ri.set(t,n))}return n}toString(){return this.cssText}},ai=i=>new Fe(typeof i=="string"?i:i+"",void 0,Kn),pn=(i,...n)=>{let t=i.length===1?i[0]:n.reduce((e,o,s)=>e+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Fe(t,i,Kn)},li=(i,n)=>{if(mn)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of n){let e=document.createElement("style"),o=hn.litNonce;o!==void 0&&e.setAttribute("nonce",o),e.textContent=t.cssText,i.appendChild(e)}},Wn=mn?i=>i:i=>i instanceof CSSStyleSheet?(n=>{let t="";for(let e of n.cssRules)t+=e.cssText;return ai(t)})(i):i;var{is:tr,defineProperty:er,getOwnPropertyDescriptor:nr,getOwnPropertyNames:or,getOwnPropertySymbols:ir,getPrototypeOf:sr}=Object,gn=globalThis,ci=gn.trustedTypes,rr=ci?ci.emptyScript:"",ar=gn.reactiveElementPolyfillSupport,Ge=(i,n)=>i,Ue={toAttribute(i,n){switch(n){case Boolean:i=i?rr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,n){let t=i;switch(n){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},fn=(i,n)=>!tr(i,n),ui={attribute:!0,type:String,converter:Ue,reflect:!1,useDefault:!1,hasChanged:fn};Symbol.metadata??=Symbol("metadata"),gn.litPropertyMetadata??=new WeakMap;var Wt=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,t=ui){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(n,t),!t.noAccessor){let e=Symbol(),o=this.getPropertyDescriptor(n,e,t);o!==void 0&&er(this.prototype,n,o)}}static getPropertyDescriptor(n,t,e){let{get:o,set:s}=nr(this.prototype,n)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(n,a,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??ui}static _$Ei(){if(this.hasOwnProperty(Ge("elementProperties")))return;let n=sr(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ge("properties"))){let t=this.properties,e=[...or(t),...ir(t)];for(let o of e)this.createProperty(o,t[o])}let n=this[Symbol.metadata];if(n!==null){let t=litPropertyMetadata.get(n);if(t!==void 0)for(let[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let o=this._$Eu(t,e);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let t=[];if(Array.isArray(n)){let e=new Set(n.flat(1/0).reverse());for(let o of e)t.unshift(Wn(o))}else n!==void 0&&t.push(Wn(n));return t}static _$Eu(n,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(n.set(e,this[e]),delete this[e]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return li(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,t,e){this._$AK(n,e)}_$ET(n,t){let e=this.constructor.elementProperties.get(n),o=this.constructor._$Eu(n,e);if(o!==void 0&&e.reflect===!0){let s=(e.converter?.toAttribute!==void 0?e.converter:Ue).toAttribute(t,e.type);this._$Em=n,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(n,t){let e=this.constructor,o=e._$Eh.get(n);if(o!==void 0&&this._$Em!==o){let s=e.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ue;this._$Em=o;let a=r.fromAttribute(t,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(n,t,e,o=!1,s){if(n!==void 0){let r=this.constructor;if(o===!1&&(s=this[n]),e??=r.getPropertyOptions(n),!((e.hasChanged??fn)(s,t)||e.useDefault&&e.reflect&&s===this._$Ej?.get(n)&&!this.hasAttribute(r._$Eu(n,e))))return;this.C(n,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,t,{useDefault:e,reflect:o,wrapped:s},r){e&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,r??t??this[n]),s!==!0||r!==void 0)||(this._$AL.has(n)||(this.hasUpdated||e||(t=void 0),this._$AL.set(n,t)),o===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[o,s]of e){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let n=!1,t=this._$AL;try{n=this.shouldUpdate(t),n?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(e){throw n=!1,this._$EM(),e}n&&this._$AE(t)}willUpdate(n){}_$AE(n){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(n){}firstUpdated(n){}};Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[Ge("elementProperties")]=new Map,Wt[Ge("finalized")]=new Map,ar?.({ReactiveElement:Wt}),(gn.reactiveElementVersions??=[]).push("2.1.2");var Jn=globalThis,di=i=>i,yn=Jn.trustedTypes,hi=yn?yn.createPolicy("lit-html",{createHTML:i=>i}):void 0,bi="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,$i="?"+Qt,lr=`<${$i}>`,he=document,We=()=>he.createComment(""),Be=i=>i===null||typeof i!="object"&&typeof i!="function",Yn=Array.isArray,cr=i=>Yn(i)||typeof i?.[Symbol.iterator]=="function",Bn=`[ 	
\f\r]`,Ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mi=/-->/g,pi=/>/g,ue=RegExp(`>|${Bn}(?:([^\\s"'>=/]+)(${Bn}*=${Bn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gi=/'/g,fi=/"/g,wi=/^(?:script|style|textarea|title)$/i,Qn=i=>(n,...t)=>({_$litType$:i,strings:n,values:t}),k=Qn(1),y=Qn(2),$a=Qn(3),Nt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),yi=new WeakMap,de=he.createTreeWalker(he,129);function vi(i,n){if(!Yn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return hi!==void 0?hi.createHTML(n):n}var ur=(i,n)=>{let t=i.length-1,e=[],o,s=n===2?"<svg>":n===3?"<math>":"",r=Ke;for(let a=0;a<t;a++){let l=i[a],d,u,p=-1,m=0;for(;m<l.length&&(r.lastIndex=m,u=r.exec(l),u!==null);)m=r.lastIndex,r===Ke?u[1]==="!--"?r=mi:u[1]!==void 0?r=pi:u[2]!==void 0?(wi.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=ue):u[3]!==void 0&&(r=ue):r===ue?u[0]===">"?(r=o??Ke,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?ue:u[3]==='"'?fi:gi):r===fi||r===gi?r=ue:r===mi||r===pi?r=Ke:(r=ue,o=void 0);let g=r===ue&&i[a+1].startsWith("/>")?" ":"";s+=r===Ke?l+lr:p>=0?(e.push(d),l.slice(0,p)+bi+l.slice(p)+Qt+g):l+Qt+(p===-2?a:g)}return[vi(i,s+(i[t]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),e]},je=class i{constructor({strings:n,_$litType$:t},e){let o;this.parts=[];let s=0,r=0,a=n.length-1,l=this.parts,[d,u]=ur(n,t);if(this.el=i.createElement(d,e),de.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=de.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(bi)){let m=u[r++],g=o.getAttribute(p).split(Qt),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:f[2],strings:g,ctor:f[1]==="."?Vn:f[1]==="?"?Zn:f[1]==="@"?qn:xe}),o.removeAttribute(p)}else p.startsWith(Qt)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(wi.test(o.tagName)){let p=o.textContent.split(Qt),m=p.length-1;if(m>0){o.textContent=yn?yn.emptyScript:"";for(let g=0;g<m;g++)o.append(p[g],We()),de.nextNode(),l.push({type:2,index:++s});o.append(p[m],We())}}}else if(o.nodeType===8)if(o.data===$i)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(Qt,p+1))!==-1;)l.push({type:7,index:s}),p+=Qt.length-1}s++}}static createElement(n,t){let e=he.createElement("template");return e.innerHTML=n,e}};function _e(i,n,t=i,e){if(n===Nt)return n;let o=e!==void 0?t._$Co?.[e]:t._$Cl,s=Be(n)?void 0:n._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,e)),e!==void 0?(t._$Co??=[])[e]=o:t._$Cl=o),o!==void 0&&(n=_e(i,o._$AS(i,n.values),o,e)),n}var jn=class{constructor(n,t){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:t},parts:e}=this._$AD,o=(n?.creationScope??he).importNode(t,!0);de.currentNode=o;let s=de.nextNode(),r=0,a=0,l=e[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new Ve(s,s.nextSibling,this,n):l.type===1?d=new l.ctor(s,l.name,l.strings,this,n):l.type===6&&(d=new Xn(s,this,n)),this._$AV.push(d),l=e[++a]}r!==l?.index&&(s=de.nextNode(),r++)}return de.currentNode=he,o}p(n){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(n,e,t),t+=e.strings.length-2):e._$AI(n[t])),t++}},Ve=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,t,e,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=n,this._$AB=t,this._$AM=e,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,t=this._$AM;return t!==void 0&&n?.nodeType===11&&(n=t.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,t=this){n=_e(this,n,t),Be(n)?n===T||n==null||n===""?(this._$AH!==T&&this._$AR(),this._$AH=T):n!==this._$AH&&n!==Nt&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):cr(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==T&&Be(this._$AH)?this._$AA.nextSibling.data=n:this.T(he.createTextNode(n)),this._$AH=n}$(n){let{values:t,_$litType$:e}=n,o=typeof e=="number"?this._$AC(n):(e.el===void 0&&(e.el=je.createElement(vi(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===o)this._$AH.p(t);else{let s=new jn(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(n){let t=yi.get(n.strings);return t===void 0&&yi.set(n.strings,t=new je(n)),t}k(n){Yn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,o=0;for(let s of n)o===t.length?t.push(e=new i(this.O(We()),this.O(We()),this,this.options)):e=t[o],e._$AI(s),o++;o<t.length&&(this._$AR(e&&e._$AB.nextSibling,o),t.length=o)}_$AR(n=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);n!==this._$AB;){let e=di(n).nextSibling;di(n).remove(),n=e}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,t,e,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=n,this.name=t,this._$AM=o,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=T}_$AI(n,t=this,e,o){let s=this.strings,r=!1;if(s===void 0)n=_e(this,n,t,0),r=!Be(n)||n!==this._$AH&&n!==Nt,r&&(this._$AH=n);else{let a=n,l,d;for(n=s[0],l=0;l<s.length-1;l++)d=_e(this,a[e+l],t,l),d===Nt&&(d=this._$AH[l]),r||=!Be(d)||d!==this._$AH[l],d===T?n=T:n!==T&&(n+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(n)}j(n){n===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},Vn=class extends xe{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===T?void 0:n}},Zn=class extends xe{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==T)}},qn=class extends xe{constructor(n,t,e,o,s){super(n,t,e,o,s),this.type=5}_$AI(n,t=this){if((n=_e(this,n,t,0)??T)===Nt)return;let e=this._$AH,o=n===T&&e!==T||n.capture!==e.capture||n.once!==e.once||n.passive!==e.passive,s=n!==T&&(e===T||o);o&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},Xn=class{constructor(n,t,e){this.element=n,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(n){_e(this,n)}};var dr=Jn.litHtmlPolyfillSupport;dr?.(je,Ve),(Jn.litHtmlVersions??=[]).push("3.3.3");var _i=(i,n,t)=>{let e=t?.renderBefore??n,o=e._$litPart$;if(o===void 0){let s=t?.renderBefore??null;e._$litPart$=o=new Ve(n.insertBefore(We(),s),s,void 0,t??{})}return o._$AI(i),o};var to=globalThis,Pt=class extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=_i(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nt}};Pt._$litElement$=!0,Pt.finalized=!0,to.litElementHydrateSupport?.({LitElement:Pt});var hr=to.litElementPolyfillSupport;hr?.({LitElement:Pt});(to.litElementVersions??=[]).push("4.2.2");var bn=i=>(n,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,n)}):customElements.define(i,n)};var mr={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:fn},pr=(i=mr,n,t)=>{let{kind:e,metadata:o}=t,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),e==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(t.name,i),e==="accessor"){let{name:r}=t;return{set(a){let l=n.get.call(this);n.set.call(this,a),this.requestUpdate(r,l,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(e==="setter"){let{name:r}=t;return function(a){let l=this[r];n.call(this,a),this.requestUpdate(r,l,i,!0,a)}}throw Error("Unsupported decorator location: "+e)};function ke(i){return(n,t)=>typeof t=="object"?pr(i,n,t):((e,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,e),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,n,t)}function me(i){return ke({...i,state:!0,attribute:!1})}var wn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vn=i=>(...n)=>({_$litDirective$:i,values:n}),Me=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,t,e){this._$Ct=n,this._$AM=t,this._$Ci=e}_$AS(n,t){return this.update(n,t)}update(n,t){return this.render(...t)}};var pt=vn(class extends Me{constructor(i){if(super(i),i.type!==wn.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(n=>i[n]).join(" ")+" "}update(i,[n]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(let e in n)n[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(n)}let t=i.element.classList;for(let e of this.st)e in n||(t.remove(e),this.st.delete(e));for(let e in n){let o=!!n[e];o===this.st.has(e)||this.nt?.has(e)||(o?(t.add(e),this.st.add(e)):(t.remove(e),this.st.delete(e)))}return Nt}});var xi="important",gr=" !"+xi,U=vn(class extends Me{constructor(i){if(super(i),i.type!==wn.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((n,t)=>{let e=i[t];return e==null?n:n+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(i,[n]){let{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let e of this.ft)n[e]==null&&(this.ft.delete(e),e.includes("-")?t.removeProperty(e):t[e]=null);for(let e in n){let o=n[e];if(o!=null){this.ft.add(e);let s=typeof o=="string"&&o.endsWith(gr);e.includes("-")||s?t.setProperty(e,s?o.slice(0,-11):o,s?xi:""):t[e]=o}}return Nt}});var ki=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Mi=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],Si=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],eo=385000.49;var q=Math.PI/180,Ht=180/Math.PI,fr=1495978707e-1,Ai=6378.14,Ze=-.833,Ot=-6,Bt=-12,jt=-18,_n=6,Xe=-4,Ci=-6,qe=120*1e3;function Je(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Te(i){return(i-2451545)/36525}function it(i){let n=i%360;return n<0?n+360:n}function yr(i){let n=Te(i);return 23.439291-.0130042*n-164e-9*n*n+504e-9*n*n*n}function br(i){let n=i-2451545,t=Te(i),e=280.46061837+360.98564736629*n+387933e-9*t*t-t*t*t/3871e4;return it(e)}function no(i){let n=Te(i),t=it(280.46646+n*(36000.76983+n*3032e-7)),e=it(357.52911+n*(35999.05029-1537e-7*n)),o=Math.sin(e*q)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*e*q)*(.019993-101e-6*n)+Math.sin(3*e*q)*289e-6,s=t+o,r=it(125.04-1934.136*n),a=s-.00569-.00478*Math.sin(r*q),d=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(r*q),u=a*q,p=d*q,m=it(Math.atan2(Math.cos(p)*Math.sin(u),Math.cos(u))*Ht),g=Math.asin(Math.sin(p)*Math.sin(u))*Ht;return{ra:m,dec:g}}function $r(i){let n=Te(i),t=it(280.46646+n*(36000.76983+n*3032e-7)),e=it(357.52911+n*(35999.05029-1537e-7*n)),o=Math.sin(e*q)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*e*q)*(.019993-101e-6*n)+Math.sin(3*e*q)*289e-6,s=it(125.04-1934.136*n);return it(t+o-.00569-.00478*Math.sin(s*q))}function wr(i){let n=Je(i),t=Te(n),e=it(357.52911+t*(35999.05029-1537e-7*t)),o=.016708634-t*(42037e-9+1267e-10*t),s=Math.sin(e*q)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*e*q)*(.019993-101e-6*t)+Math.sin(3*e*q)*289e-6,r=(e+s)*q;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*fr}function oo(i,n,t,e){let o=it(br(e)+t),s=it(o-i.ra),r=n*q,a=i.dec*q,l=s*q,d=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(l))*Ht,u=it(Math.atan2(Math.sin(l),Math.cos(l)*Math.sin(r)-Math.tan(a)*Math.cos(r))*Ht+180);return{altitude:d,azimuth:u}}function Ye(i,n){let t=Je(i);return oo(no(t),n.latitude,n.longitude,t).altitude}function xn(i,n){let t=Je(i);return oo(no(t),n.latitude,n.longitude,t)}function vr(i){let n=i;return{D:it(297.8501921+445267.1114034*n-.0018819*n*n+n*n*n/545868-n*n*n*n/113065e3),M:it(357.5291092+35999.0502909*n-1536e-7*n*n+n*n*n/2449e4),Mp:it(134.9633964+477198.8675055*n+.0087414*n*n+n*n*n/69699-n*n*n*n/14712e3),F:it(93.272095+483202.0175233*n-.0036539*n*n-n*n*n/3526e3+n*n*n*n/86331e4)}}function Ei(i){let n=Te(i),t=it(218.3164477+481267.88123421*n-.0015786*n*n+n*n*n/538841-n*n*n*n/65194e3),e=vr(n),o=t;for(let a of ki){let l=a[0]*e.D+a[1]*e.M+a[2]*e.Mp+a[3]*e.F;o+=a[4]*Math.sin(l*q)}let s=0;for(let a of Mi){let l=a[0]*e.D+a[1]*e.M+a[2]*e.Mp+a[3]*e.F;s+=a[4]*Math.sin(l*q)}let r=eo;for(let a of Si){let l=a[0]*e.D+a[1]*e.M+a[2]*e.Mp+a[3]*e.F;r+=a[4]*Math.cos(l*q)}return{longitude:it(o),latitude:s,distanceKm:r}}function Di(i,n,t){let e=yr(t)*q,o=i*q,s=n*q,r=it(Math.atan2(Math.sin(o)*Math.cos(e)-Math.tan(s)*Math.sin(e),Math.cos(o))*Ht),a=Math.asin(Math.sin(s)*Math.cos(e)+Math.cos(s)*Math.sin(e)*Math.sin(o))*Ht;return{ra:r,dec:a}}function te(i,n){let t=Je(i),e=Ei(t),o=Di(e.longitude,e.latitude,t),s=oo(o,n.latitude,n.longitude,t),r=Math.asin(Ai/e.distanceKm)*Ht,a=s.altitude-r*Math.cos(s.altitude*q);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:e.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:e}}function _r(i){return .7275*(Math.asin(Ai/i)*Ht)-.5667}var xr=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],kr=29.530588853;function kn(i){let n=Je(i),t=Ei(n),e=Di(t.longitude,t.latitude,n),o=no(n),s=$r(n),r=wr(i),a=t.distanceKm,l=t.latitude*q,d=Math.acos(Math.min(1,Math.max(-1,Math.cos(l)*Math.cos((t.longitude-s)*q)))),u=Math.atan2(r*Math.sin(d),a-r*Math.cos(d)),p=it(u*Ht),m=(1+Math.cos(u))/2,g=(o.ra-e.ra)*q,f=o.dec*q,$=e.dec*q,x=it(Math.atan2(Math.cos(f)*Math.sin(g),Math.sin(f)*Math.cos($)-Math.cos(f)*Math.sin($)*Math.cos(g))*Ht),R=it(t.longitude-s)/360,w=Math.min(7,Math.floor(R*8+.5)%8),D=R*29.530588853;return{illumination:m,phaseAngle:p,elongation:d*Ht,phaseIndex:w,phaseKey:xr[w],brightLimbAngle:x,moonAgeDays:D,waxing:R<.5,distanceKm:a}}function Se(i,n,t,e,o){let s=[];if(!(n>i))return s;let r=Math.max(2,Math.ceil((n-i)/t)),a=(n-i)/r,l=i,d=e(i)-o;for(let u=1;u<=r;u++){let p=i+u*a,m=e(p)-o;if(d===0)s.push({time:l,rising:m>0});else if(d<0&&m>=0||d>0&&m<=0){let g=l,f=p,$=d;for(let x=0;x<50&&f-g>1;x++){let R=(g+f)/2,w=e(R)-o;w<0&&$<0||w>0&&$>0?(g=R,$=w):f=R}s.push({time:(g+f)/2,rising:m>d})}l=p,d=m}return s}function Ti(i,n,t,e){let o=i.find(s=>s.rising===n&&s.time>=t&&s.time<e);return o?new Date(o.time):null}function io(i,n,t,e=4){let o=n.getTime()-27e5,s=t.getTime()+2700*1e3,r=n.getTime(),a=t.getTime(),l=S=>Ye(S,i),d=[],u=Math.max(3e4,Math.round(e*60*1e3));for(let S=r;S<a;S+=u)d.push({time:S,altitude:l(S)});d.push({time:a,altitude:l(a)});let p=-1/0,m=1/0;for(let S of d)S.altitude>p&&(p=S.altitude),S.altitude<m&&(m=S.altitude);let g=[["sunrise","sunset",Ze],["civilDawn","civilDusk",Ot],["nauticalDawn","nauticalDusk",Bt],["astronomicalDawn","astronomicalDusk",jt]],f={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[S,E,v]of g){let C=Se(o,s,qe,l,v);f[S]=Ti(C,!0,r,a),f[E]=Ti(C,!1,r,a)}let $=r,x=-1/0,R=120*1e3;for(let S=r;S<=a;S+=R){let E=l(S);E>x&&(x=E,$=S)}let w=Math.max(r,$-R),D=Math.min(a,$+R);for(let S=0;S<40&&D-w>1e3;S++){let E=w+(D-w)/3,v=D-(D-w)/3;l(E)<l(v)?w=E:D=v}f.solarNoon=new Date((w+D)/2);let H="none";return m>Ze?H="polar-day":p<Ze&&(H="polar-night"),{dayStart:n,dayEnd:t,samples:d,maxAltitude:p,minAltitude:m,events:f,polar:H}}function so(i,n,t,e=48){let o=typeof n=="number"?n:n.getTime();if(!Number.isFinite(o)||!Number.isFinite(t))return null;let s=a=>Ye(a,i),r=Se(o,o+e*60*60*1e3,qe,s,t)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Li(i,n,t,e,o=48){let s=typeof n=="number"?n:n.getTime();if(!Number.isFinite(s)||!(t<e))return null;let r=m=>Ye(m,i),a=s+o*60*60*1e3,l=[...Se(s,a,qe,r,t),...Se(s,a,qe,r,e)].sort((m,g)=>m.time-g.time),d=m=>m>=t&&m<=e,u=d(r(s)),p=u?s:null;for(let m of l){let g=d(r(m.time+1e3));if(p===null&&g)p=m.time;else if(p!==null&&!g)return{start:new Date(p),end:new Date(m.time),active:u}}return p===null?null:{start:new Date(p),end:null,active:u}}function Mr(i,n,t,e=10){let o=n.getTime(),s=t.getTime(),r=Math.max(6e4,Math.round(e*60*1e3)),a=[];for(let u=o;u<s;u+=r)a.push({time:u,altitude:te(u,i).apparentAltitude});a.push({time:s,altitude:te(s,i).apparentAltitude});let l=-1/0,d=1/0;for(let u of a)u.altitude>l&&(l=u.altitude),u.altitude<d&&(d=u.altitude);return{samples:a,maxAltitude:l,minAltitude:d}}function Ni(i,n,t,e,o=10){let s=n.getTime(),r=t.getTime(),a=l=>{if(!l)return null;let d=l.getTime();return d>=s&&d<r?d:null};return{profile:Mr(i,n,t,o),rise:a(e.previousRise)??a(e.nextRise),set:a(e.previousSet)??a(e.nextSet)}}function Hi(i,n){let t=i.getTime(),e=t-1800*60*1e3,o=t+1800*60*1e3,r=Se(e,o,qe,g=>{let f=te(g,n);return f.altitude-_r(f.distanceKm)},0),a=r.filter(g=>g.rising),l=r.filter(g=>!g.rising),d=a.find(g=>g.time>t)??null,u=[...a].reverse().find(g=>g.time<=t)??null,p=l.find(g=>g.time>t)??null,m=[...l].reverse().find(g=>g.time<=t)??null;return{previousRise:u?new Date(u.time):null,previousSet:m?new Date(m.time):null,nextRise:d?new Date(d.time):null,nextSet:p?new Date(p.time):null}}function Ri(i){return i>0?"day":i>Ot?"civil":i>Bt?"nautical":i>jt?"astronomical":"night"}function Sr(i){return(((kn(i).moonAgeDays/kr-.5)%1+1)%1+.5)%1-.5}function ro(i,n){let t=typeof i=="number"?i:i.getTime(),e=typeof n=="number"?n:n.getTime();return e>t?Se(t,e,360*60*1e3,Sr,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function zi(i,n=32){let t=typeof i=="number"?i:i.getTime(),o=ro(t,t+n*24*60*60*1e3)[0];if(!o)return null;let s=kn(o).illumination;return s<.98?null:{time:o,illumination:s}}function Pi(i,n,t=14){let e=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=e-t*24*60*60*1e3,r=e+t*24*60*60*1e3,a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,d=s,u=s;for(let p=s;p<=r;p+=o){let m=te(p,n).distanceKm;m<a&&(a=m,d=p),m>l&&(l=m,u=p)}return{current:te(e,n).distanceKm,min:a,minTime:new Date(d),max:l,maxTime:new Date(u),mean:eo}}function Mn(i,n,t="sun"){return(t==="sun"?xn(i,n):te(i,n)).azimuth}function M(i,n,t){return Number.isNaN(i)?n:Math.min(t,Math.max(n,i))}function ao(i,n,t){return i+(n-i)*t}function c(i,n=0){let t=10**n;return Math.round(i*t)/t}function Oi(i){let n=i.trim().replace(/^#/,""),t=n.length===3?n.split("").map(o=>o+o).join(""):n;if(!/^[0-9a-fA-F]{6}$/.test(t))return null;let e=Number.parseInt(t,16);return[e>>16&255,e>>8&255,e&255]}function Tr(i){return`#${i.map(n=>Math.round(M(n,0,255)).toString(16).padStart(2,"0")).join("")}`}function lo(i,n,t){let e=Oi(i),o=Oi(n);if(!e||!o)return n;let s=M(t,0,1);return Tr([ao(e[0],o[0],s),ao(e[1],o[1],s),ao(e[2],o[2],s)])}function co(i){return typeof i=="number"&&Number.isFinite(i)}function Ct(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let n=Number(i.replace(",","."));if(Number.isFinite(n))return n}return null}function Ii(i){return i.length===0?"":i.map((n,t)=>`${t===0?"M":"L"}${c(n.x,2)} ${c(n.y,2)}`).join(" ")}function Sn(i,n=.5){if(i.length<3)return Ii(i);let t=[`M${c(i[0].x,2)} ${c(i[0].y,2)}`];for(let e=0;e<i.length-1;e++){let o=i[e-1]??i[e],s=i[e],r=i[e+1],a=i[e+2]??r,l=s.x+(r.x-o.x)/6*n*2,d=s.y+(r.y-o.y)/6*n*2,u=r.x-(a.x-s.x)/6*n*2,p=r.y-(a.y-s.y)/6*n*2;t.push(`C${c(l,2)} ${c(d,2)} ${c(u,2)} ${c(p,2)} ${c(r.x,2)} ${c(r.y,2)}`)}return t.join(" ")}function Tn(i,n,t=!1){if(i.length===0)return"";let e=t?Sn(i):Ii(i),o=i[0],s=i[i.length-1];return`${e} L${c(s.x,2)} ${c(n,2)} L${c(o.x,2)} ${c(n,2)} Z`}function Vt(i,n,t){let e=t*Math.PI/180;return{x:i.x-n*Math.sin(e),y:i.y-n*Math.cos(e)}}function Fi(i,n,t){let e=M(t,0,1);if(e<=5e-4)return"";if(e>=.9995)return`M${c(i.x-n,2)} ${c(i.y,2)} a${c(n,2)} ${c(n,2)} 0 1 1 ${c(n*2,2)} 0 a${c(n,2)} ${c(n,2)} 0 1 1 ${c(-n*2,2)} 0 Z`;let o=n*(1-2*e),s=1,r=o>0?0:1,a={x:i.x-n,y:i.y},l={x:i.x+n,y:i.y};return`M${c(a.x,2)} ${c(a.y,2)} A${c(n,2)} ${c(n,2)} 0 0 ${s} ${c(l.x,2)} ${c(l.y,2)} A${c(n,2)} ${c(Math.abs(o),4)} 0 0 ${r} ${c(a.x,2)} ${c(a.y,2)} Z`}function Gi(i=new Date){let n=i.getTime();return n+(6e4-n%6e4)+250}var Ar=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Zt(i){let{size:n,illumination:t,brightLimbAngle:e,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:l}=i,d={x:n/2,y:n/2},u=Math.max(1,n/2-.5),p=Fi(d,u,t),m=r&&n>=26,g=c(-e,2);return y`
    <svg
      class="moon-disc ${a}"
      width="${c(n,1)}"
      height="${c(n,1)}"
      viewBox="0 0 ${c(n,1)} ${c(n,1)}"
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
                      ${Ar.map(f=>{let $={x:d.x+f.x*u,y:d.y+f.y*u};return y`<circle
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
  `}function uo(i,n,t,e){let o=Vt(i,n,t),s=t*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),l=M(n*.12,4,9),d=M(n*.07,2.5,5),u={x:o.x+r*l,y:o.y+a*l},p={x:o.x-a*d,y:o.y+r*d},m={x:o.x+a*d,y:o.y-r*d};return y`
    <polygon
      points="${c(u.x,2)},${c(u.y,2)} ${c(p.x,2)},${c(p.y,2)} ${c(m.x,2)},${c(m.y,2)}"
      fill="${e}"
      opacity="0.55"
    />
  `}var Cn="sun-moon-card",yo="sun-moon-card",Bi="sun-moon-card-editor";function Ae(i){return i==="scene"?460:i==="clean"?400:340}var Cr=320,Er=360;var Dr=24,Lr=16,ho=4,Nr=12,Hr=36,Qe=[2,12],ee=[320,1200],ne=[260,800];function Ce(i){return i?[Dr,800]:[120,800]}var O={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",scene:"city",show_sun_info:!0,show_moon_info:!0,theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},ji=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],Vi=400,Zi=250,qi=1200*1e3,bo={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},$o={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},Xi=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],wo=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Rt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon","scene","clean"],scene:["city","mountains","forest","coast","none"],remainingTimeFocus:["sun","next","golden_hour"]},Ji=700,Rr=260,vo=16,_o=4,Yi=72,Ui=10,fo=56,zr=84,Pr=96,mo=74,Or=fo+8,Ir=12,Fr=10,_t=4,An=4,Ki=30,Wi=44,Gr=26,Ur=72,xo=96,po=20,go=18;function Qi(i,n,t){if(t.minimal_mode){let A=(t.minimal_show_times||t.minimal_show_zenith)&&i>=Hr?Nr:0,N=Math.max(Lr,i-2*ho-A);return{padding:ho,minimalTimesHeight:A,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,n-2*ho),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:N,minimal:!0,compact:!1}}let e=t.compact_mode,o=e?Fr:Ir,s=Math.max(40,i-2*o),r=0,a=t.show_footer&&!e?po+_t:0,l=Ki+_t+Wi+_t+a+(go+An)+mo,d=t.show_header&&!e&&s>=l,u=d?Ki:0;s-=u,d&&(s-=_t,r+=_t);let p=e?Gr:Wi,m=t.show_events&&s-(p+_t)-a>=zr,g=m?p:0;s-=g,m&&(s-=_t,r+=_t);let f=t.show_astronomical_details?xo:Ur,$=!e&&(t.show_sun||t.show_moon)&&s-(f+_t)-a>=Pr,x=$?f:0;s-=x,$&&(s-=_t,r+=_t);let R=t.show_footer&&!e&&m&&s-(po+_t)>=Or,w=R?po:0;s-=w,R&&(s-=_t,r+=_t);let D=Math.max(fo,s),H=t.show_day_chart&&!e&&m&&D-go-An>=mo,S=H?go:0;H&&(r+=An);let E=Math.max(fo,D-S-(H?An:0)),v=t.show_sky_view&&!e&&(t.show_sun||t.show_moon),C=v&&n>=Ji&&E>=mo,L=Math.max(80,n-2*o),P=C?Math.round(Math.min(Rr,(L-Ui)/3)):0,X=Math.max(120,C?L-Ui-P:L);return{padding:o,showHeader:d,showEvents:m,showDetails:$,showFooter:R,showLegend:H,skyViewSide:C,skyViewInline:!C&&v&&$,skyViewWidth:P,chartWidth:X,gaps:r,headerHeight:u,eventsHeight:g,detailsHeight:x,footerHeight:w,legendHeight:S,chartHeight:E,minimal:!1,minimalTimesHeight:0,compact:e}}function ts(i,n){return n==="clean"?i>=560?400:460:n==="scene"?i>=712?Math.round(Math.min(560,Math.max(440,i*.6))):520:i>=Ji?Er:Cr}function En(){return{type:`custom:${Cn}`,card_height:340}}var ko={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",sceneNoon:"Solarer Mittag",sceneNoonShort:"Mittag",editorCardStyleScene:"Szene (Himmel mit Silhouette)",editorCardStyleClean:"Minimalistisch",cleanNow:"Jetzt",editorScene:"Szene",editorSceneCity:"Stadt",editorSceneMountains:"Berge",editorSceneForest:"Wald",editorSceneCoast:"K\xFCste",editorSceneNone:"Keine",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorGroupStyle:"Kartenstil & Aussehen",editorGroupLayout:"Gr\xF6\xDFe & Layout",editorGroupContent:"Inhalte",editorGroupCountdown:"Restzeit",editorGroupLocale:"Sprache & Zeit",editorGroupSource:"Entit\xE4ten & Standort",editorSunInfo:"Infofeld Sonnenstand",editorMoonInfo:"Infofeld Mond",editorSwitchCount:"{on} von {total} an",editorOff:"aus",editorDefault:"Standard",editorMoonEntityHint:"Die Mondphase wird berechnet; die Bezeichnung kann aus der Mond-Entit\xE4t (z. B. sensor.moon) \xFCbernommen werden.",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",sceneNoon:"Solar noon",sceneNoonShort:"Noon",editorCardStyleScene:"Scene (sky with silhouette)",editorCardStyleClean:"Minimalist",cleanNow:"Now",editorScene:"Scene",editorSceneCity:"City",editorSceneMountains:"Mountains",editorSceneForest:"Forest",editorSceneCoast:"Coast",editorSceneNone:"None",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorGroupStyle:"Card style & appearance",editorGroupLayout:"Size & layout",editorGroupContent:"Content",editorGroupCountdown:"Countdown",editorGroupLocale:"Language & time",editorGroupSource:"Entities & location",editorSunInfo:"Sun position panel",editorMoonInfo:"Moon panel",editorSwitchCount:"{on} of {total} on",editorOff:"off",editorDefault:"default",editorMoonEntityHint:"The moon phase is computed; its name can be taken from the moon entity (e.g. sensor.moon).",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function lt(i,n,t){let o=(ko[i]??ko.en)[n]??ko.en[n]??String(n);if(t)for(let[s,r]of Object.entries(t))o=o.split(`{${s}}`).join(String(r));return o}function pe(i,n){return((i&&i!=="auto"?i:n)??"").toLowerCase().startsWith("de")?"de":"en"}function os(i,n,t){let e=i;if(e==="auto"&&n&&(n==="12"||n==="am_pm"?e="12":n==="24"&&(e="24")),e==="12")return!0;if(e==="24")return!1;try{let o=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var es=new Map;function Mo(i,n,t){let e=`${n}|${i}`,o=es.get(e);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(n,{timeZone:i,timeZoneName:"long"}).formatToParts(t).find(l=>l.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return es.set(e,s),s}var ns=new Map;function Kr(i,n,t){let e=`${i}|${n}|${t}`,o=ns.get(e);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:n})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:n})}ns.set(e,o)}return o}function st(i,n){return Kr(n.locale,n.timeZone,n.hour12).format(i)}function tn(i,n){try{return new Intl.DateTimeFormat(n.locale,{weekday:"short",day:"numeric",month:"short",timeZone:n.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function So(i,n=0,t="de-DE"){try{return new Intl.NumberFormat(t,{minimumFractionDigits:n,maximumFractionDigits:n}).format(i)}catch{return i.toFixed(n)}}function rt(i,n=1,t="de-DE"){return`${So(i,n,t)}\xB0`}function Dn(i,n="de-DE"){return`${So(Math.round(i),0,n)} km`}function is(i,n){return`${i<0?"\u2212":"+"}${Ln(Math.abs(i),n)}`}function Ln(i,n){let t=Math.max(0,Math.round(i));if(t<60)return n("countdownMinutes",{minutes:String(t)});let e=Math.floor(t/60),o=t%60;return e<24?n("countdownHours",{hours:String(e),minutes:String(o)}):n("countdownDays",{days:String(Math.floor(e/24)),hours:String(e%24)})}function Nn(i,n){return n(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function Hn(i,n="de-DE"){return`${So(i*100,0,n)} %`}function It(i,n){let t=(i%360+360)%360,e=wo[0],o=1/0;for(let r of wo){let a=Math.abs((t-r.deg+540)%360-180);a<o&&(o=a,e=r)}let s=`dir${e.key}`;return lt(n,s)}function ss(i,n,t,e){return{language:i,locale:n,timeZone:t,hour12:e,t:(o,s)=>lt(i,o,s)}}var rs="var(--smc-golden-hour, #f2b544)",Wr="var(--smc-blue-hour, #4f6fd6)";function as(i,n,t){let e=[],o=null;for(let s of i){let r=s.altitude>=n&&s.altitude<=t;r&&o===null&&(o=s.time),!r&&o!==null&&(e.push([o,s.time]),o=null)}return o!==null&&i.length&&e.push([o,i[i.length-1].time]),e}function ls(i,n){if(i.length<=n)return i;let t=i.length/n,e=[];for(let s=0;s<n;s++)e.push(i[Math.floor(s*t)]);let o=i[i.length-1];return e[e.length-1]!==o&&e.push(o),e}function Br(i,n,t,e,o){if(i.length<2)return null;let s=n.sunrise?.getTime(),r=n.sunset?.getTime(),a,l;if(s!==void 0&&r!==void 0&&r>s)a=e(s),l=e(r);else if(t==="polar-day")a=i[0].x,l=i[i.length-1].x;else return null;let d=i.filter(u=>u.x>=a-.5&&u.x<=l+.5);return d.length<2?null:{path:Tn(d,o,!0),cx:(a+l)/2,cy:o,r:Math.max(6,(l-a)/2)}}function jr(i,n){let t=n?Math.max(i.maxAltitude,n.maxAltitude):i.maxAltitude,e=n?Math.min(i.minAltitude,n.minAltitude):i.minAltitude,o=Math.min(e,-18),s=Math.max(3,(t-o)*.1),r=M(t+s,-18,90.5);return[M(Math.max(-28,e-2),-90,r-6),r]}function To(i,n,t=2.2){let e=[0,Ot,Bt,jt],o=[n.day,n.civil,n.nautical,n.astronomical,n.night];if(i>t/2){let s=M(1-i/12,0,1)*.5;return lo(n.day,n.glow,s)}for(let s=0;s<e.length;s++){let r=e[s]+t/2,a=e[s]-t/2;if(i>=r)return o[s];if(i>a){let l=(r-i)/t;return lo(o[s],o[s+1],l*l*(3-2*l))}}return o[o.length-1]}function Vr(i,n,t,e=24){let o=[];for(let s=0;s<=e;s++){let r=s/e,a=n+t*(1-r);o.push({offset:r,color:To(a,i)})}return o}function Zr(i,n,t,e,o,s){let r=i.samples;if(r.length<2)return[];let a=[],l=(u,p)=>{u&&!Number.isNaN(u.getTime())&&a.push({time:u.getTime(),color:p})};l(n.astronomicalDawn,t.astronomical),l(n.nauticalDawn,t.nautical),l(n.civilDawn,t.civil),l(n.sunrise,t.glow),l(n.solarNoon,t.day),l(n.sunset,t.glow),l(n.civilDusk,t.civil),l(n.nauticalDusk,t.nautical),l(n.astronomicalDusk,t.astronomical);let d=[{offset:0,color:To(r[0].altitude,t)},...a.map(u=>({offset:M((e(u.time)-o)/s,0,1),color:u.color})),{offset:1,color:To(r[r.length-1].altitude,t)}];return d.sort((u,p)=>u.offset-p.offset),d}function Ao(i){let{profile:n,events:t,now:e,width:o,height:s,palette:r,format:a,showSun:l,showMoon:d,moon:u,moonPath:p,showTwilight:m,twilightLevel:g,animations:f,cardStyle:$,minimal:x,sunMarkerSize:R,uid:w,showAstronomicalLayers:D,currentAltitude:H,countdown:S=null,showGoldenHour:E=!1}=i,v=Math.max(x?60:120,o),C=Math.max(x?12:56,s),L=x?2:4,P=x?2:4,X=x?2:6,F=!x&&C>=112,K=F?M(c(C*.13,1),13,20):0,A=L,N=Math.max(10,v-L-P),_=X,V=Math.max(10,C-X-K),W=_+V,[tt,I]=jr(n,p?.profile??null),ut=Math.max(1,I-tt),Z=n.dayStart.getTime(),Y=n.dayEnd.getTime(),Mt=Math.max(1,Y-Z),at=b=>A+(b-Z)/Mt*N,ft=b=>W-(M(b,-95,95)-tt)/ut*V,J=ft(0),yt=M(Math.round(N/1.6),60,361),gt=ls(n.samples,yt).map(b=>({x:at(b.time),y:ft(b.altitude)})),j=Vr(r,tt,ut),ht=Zr(n,t,r,at,A,N),St=`${w}-area`,xt=`${w}-line`,Ft=`${w}-clip`,De=`${w}-glow`,on=`${w}-sky`,ye=`${w}-soft`,bt=`${w}-soft-fade`,Xt=`${w}-foot`,Gt=`${w}-foot-fade`,Le=`${w}-side`,Ne=`${w}-side-fade`,$t=$==="horizon",re=Tn(gt,$t?c(J,2):W+1,!0),He=Sn(gt),z=p?ls(p.profile.samples,M(Math.round(N/2),40,240)).map(b=>({x:at(b.time),y:ft(b.altitude)})):null,ot=z&&!x?Sn(z):null,Ut="var(--smc-moon-line, #cbd5e1)",be=M(c(C*.013,2),1.1,1.9),Re=Tn(gt,_-1,!0),wt=$==="flat"?.6:$t?.3:1,ze=$t?0:c(.15*wt,3),kt=_-1,In=W+1,Jt=Math.max(1,In-kt),Hs=M(V*.14,x?1.5:6,18),Rs=M(V*.08,x?1:4,12),zs=M(N*.02,x?2:6,14),Go=M(c(V*.06,1),x?1.5:4,10),Ps=c(M(Hs/Jt,0,.45),4),Uo=c(1-M(Rs/Jt,0,.45),4),$e=A-1,sn=A+N+1,Ko=c(M(zs/Math.max(1,sn-$e),0,.4),4),Os=Math.max(16,N*.16),Is=M(V*.45,9,46),rn=[];V>=34&&(t.sunrise&&rn.push({id:`${w}-glow-rise`,time:t.sunrise,color:r.glow}),t.sunset&&rn.push({id:`${w}-glow-set`,time:t.sunset,color:r.glow}));let we=x?null:Br(gt,t,n.polar,at,J),Wo=`${w}-dome`,dt=a.t,an=[],Pe=b=>{b.time&&!Number.isNaN(b.time.getTime())&&an.push({secondary:!1,...b})};if(t.sunrise&&Pe({key:"sunrise",time:t.sunrise,label:dt("sunrise"),shortLabel:dt("sunriseShort"),kind:"sunrise",altitude:0}),t.sunset&&Pe({key:"sunset",time:t.sunset,label:dt("sunset"),shortLabel:dt("sunsetShort"),kind:"sunset",altitude:0}),m&&(t.civilDawn&&Pe({key:"civilDawn",time:t.civilDawn,label:dt("civilDawn"),shortLabel:dt("civilDawnShort"),kind:"dawn",altitude:Ot}),t.civilDusk&&Pe({key:"civilDusk",time:t.civilDusk,label:dt("civilDusk"),shortLabel:dt("civilDuskShort"),kind:"dusk",altitude:Ot}),g==="all"||D)){let b=[["nauticalDawn","dawn","nauticalDawn",Bt],["nauticalDusk","dusk","nauticalDusk",Bt],["astronomicalDawn","dawn","astronomicalDawn",jt],["astronomicalDusk","dusk","astronomicalDusk",jt]];for(let[G,B,et,Q]of b){let mt=t[G];mt&&Pe({key:G,time:mt,label:dt(et),shortLabel:dt(et),kind:B,altitude:Q,secondary:!0})}}an.sort((b,G)=>b.time.getTime()-G.time.getTime());let ve=M(c(C*.062,1),7.5,10.5),ln=M(c(ve+5,1),11,K||15),Bo=b=>b.secondary?2:b.kind==="sunrise"||b.kind==="sunset"?0:1,Fs=N<240?3:N<340?4:6,jo=x?[]:[...an].sort((b,G)=>Bo(b)-Bo(G)||b.time.getTime()-G.time.getTime()).slice(0,Math.max(2,Fs)),Vo=N<260,Gs=!Vo&&(jo.length>3||N<340),Zo=4,Us=Math.max(8,ve*1.2),ae=[];for(let b of jo){let G=Vo?st(b.time,a):Gs?b.shortLabel:b.label,B=G.length*ve*.56+8,et=M(at(b.time.getTime()),A+B/2,A+N-B/2),Q=zt=>ae.some(le=>Math.abs(le.x-zt)<(le.width+B)/2+Zo),mt=Q(et)?null:et;if(mt===null)for(let zt of ae){let le=(zt.width+B)/2+Zo;for(let ce of[zt.x+le,zt.x-le])if(Math.abs(ce-et)<=Us&&ce-B/2>=A-.5&&ce+B/2<=A+N+.5&&!Q(ce)){mt=ce;break}if(mt!==null)break}mt!==null&&ae.push({x:mt,width:B,text:G,secondary:b.secondary})}ae.sort((b,G)=>b.x-G.x);let vt=M(at(e.getTime()),A,A+N),Ks=r.day,Yt=M(c(C*.16,1),Math.min(2.8,R),R),qo=M(c(Yt*.22,2),.8,1.4),Kt=M(c(Yt*1.1,1),3.5,7),Xo=(b,G)=>V<=G*2?_+V/2:M(ft(b),_+G,W-G),Jo=Xo(H,Yt),Yo=E&&!x?[...as(n.samples,Xe,_n).map(b=>({range:b,kind:"golden",color:rs,key:"goldenHour"})),...as(n.samples,Ci,Xe).map(b=>({range:b,kind:"blue",color:Wr,key:"blueHour"}))].map(({range:b,kind:G,color:B,key:et})=>{let Q=M(at(b[0]),A,A+N),mt=M(at(b[1]),A,A+N);return{x:Q,width:mt-Q,kind:G,color:B,title:`${dt(et)} ${st(new Date(b[0]),a)}\u2013${st(new Date(b[1]),a)}`}}).filter(b=>b.width>=.5):[],Tt=(()=>{if(x||!S)return null;let b=S.time.getTime();if(!(b>e.getTime()))return null;let B=tt<0&&I>0?ft(0):W-1,et=at(b),Q=M(et,A,A+N);if(Q-vt<2)return null;let mt=S.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":S.body==="twilight"?r.civil:S.body==="golden"?rs:r.day;return{y:B,endX:Q,endsInside:et<=A+N,color:mt}})(),Fn=M(c(C*.016,1),2,3),At=(()=>{if(x||!S?.label)return null;let b=ve,G=b+5,B=S.label.length*b*.56+10,et=Math.max(Yt,3)+3,Q=vt+et,mt=Q+B<=A+N?Q:Math.max(A,vt-et-B),zt=F||ae.length===0?_+1:_+ln+3;return{x:mt,y:zt,width:B,height:G,fontSize:b}})(),Dt=d&&u&&!x?{altitude:u.altitude,y:Xo(u.altitude,Kt),clamped:u.altitude<tt||u.altitude>I}:null,Ws=Dt?Math.abs(Dt.y-Jo):Number.POSITIVE_INFINITY,Gn=Yt+Kt+2,Oe=Dt?Ws>=Yt+Kt+1?vt:vt+Gn+Kt<=A+N?vt+Gn:Math.max(A+Kt,vt-Gn):null,Bs=f?"smc-pulse":"",js=f?`url(#${De})`:"",Un=[{altitude:0,label:dt("horizon"),key:"horizon"}];D||g==="all"?Un.push({altitude:Ot,label:`${dt("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Bt,label:`${dt("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:jt,label:`${dt("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&Un.push({altitude:Ot,label:`${dt("refCivil")} (\u22126\xB0)`,key:"civil"});let Vs=!x&&V>=86&&N>=250,Zs=Un.filter(b=>(!x||b.key==="horizon")&&b.altitude>tt+.5&&b.altitude<I-.5),qs=M(c(C*.055,1),7.5,9.5),Ie=t.solarNoon,Qo=!x&&!!Ie&&n.maxAltitude>0&&V>=104&&N>=220&&D,ti=Qo?`${dt("zenith")} ${st(Ie,a)} \xB7 ${rt(n.maxAltitude,1,a.locale)}`:"",cn=M(c(C*.055,1),7.5,9.5),un=ti.length*cn*.56+10,ei=Ie?M(at(Ie.getTime()),A+un/2,A+N-un/2):0,ni=Ie?ft(n.maxAltitude):0,dn=cn+5,oi=M(ni-dn-4,_,Math.max(_,ni+10)),ii=x?1:N<220?4:N<420?6:8,si=[];for(let b=1;b<ii;b++)si.push(A+N*b/ii);return y`
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
          x1="0" y1="${c(_,1)}" x2="0" y2="${c(W,1)}">
          ${j.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
        </linearGradient>
        <linearGradient id="${xt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(_,1)}" x2="0" y2="${c(W,1)}">
          ${j.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${ht.length>=2?y`<linearGradient id="${on}" gradientUnits="userSpaceOnUse"
                x1="${c(A,1)}" y1="0" x2="${c(A+N,1)}" y2="0">
                ${ht.map(b=>y`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
              </linearGradient>`:y``}
        ${rn.map(b=>y`<radialGradient id="${b.id}">
              <stop offset="0%" stop-color="${b.color}" stop-opacity="${c(.5*wt,3)}" />
              <stop offset="45%" stop-color="${b.color}" stop-opacity="${c(.2*wt,3)}" />
              <stop offset="100%" stop-color="${b.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${we?y`<radialGradient id="${Wo}" gradientUnits="userSpaceOnUse"
                cx="${c(we.cx,1)}" cy="${c(we.cy,1)}" r="${c(we.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${c(.3*wt,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${c(.18*wt,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:y``}
        <linearGradient id="${bt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(kt,1)}" x2="0" y2="${c(In,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Ps}" stop-color="#ffffff" />
          <stop offset="${Uo}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ye}" maskUnits="userSpaceOnUse"
          x="${c(A-2,1)}" y="${c(kt,1)}"
          width="${c(N+4,1)}" height="${c(Jt,1)}">
          <rect
            x="${c(A-2,1)}" y="${c(kt,1)}"
            width="${c(N+4,1)}" height="${c(Jt,1)}"
            fill="url(#${bt})" />
        </mask>
        <linearGradient id="${Gt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(kt,1)}" x2="0" y2="${c(In,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${Uo}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Xt}" maskUnits="userSpaceOnUse"
          x="${c(A-2,1)}" y="${c(kt,1)}"
          width="${c(N+4,1)}" height="${c(Jt,1)}">
          <rect
            x="${c(A-2,1)}" y="${c(kt,1)}"
            width="${c(N+4,1)}" height="${c(Jt,1)}"
            fill="url(#${Gt})" />
        </mask>
        <linearGradient id="${Ne}" gradientUnits="userSpaceOnUse"
          x1="${c($e,1)}" y1="0" x2="${c(sn,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Ko}" stop-color="#ffffff" />
          <stop offset="${c(1-Ko,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Le}" maskUnits="userSpaceOnUse"
          x="${c($e,1)}" y="${c(kt,1)}"
          width="${c(sn-$e,1)}" height="${c(Jt,1)}">
          <rect
            x="${c($e,1)}" y="${c(kt,1)}"
            width="${c(sn-$e,1)}" height="${c(Jt,1)}"
            fill="url(#${Ne})" />
        </mask>
        <clipPath id="${Ft}">
          <rect x="${c(A-1,1)}" y="${c(_-2,1)}"
            width="${c(N+2,1)}" height="${c(V+4,1)}"
            rx="${Go}" ry="${Go}" />
        </clipPath>
        ${f?y`<filter id="${De}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${c(Yt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:y``}
      </defs>

      <g clip-path="url(#${Ft})">
        ${si.map(b=>y`<line x1="${c(b,1)}" y1="${c(_,1)}" x2="${c(b,1)}" y2="${c(W,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${Le})">
        <path d="${re}" fill="url(#${St})" opacity="0.9" mask="url(#${Xt})" />
        <g mask="url(#${ye})">
          ${ht.length>=2&&!$t?y`<path d="${Re}" fill="url(#${on})" opacity="${ze}" />`:y``}
          ${rn.map(b=>{let G=M(at(b.time.getTime()),A,A+N),B=M(J,_,W);return y`<ellipse
                cx="${c(G,1)}" cy="${c(B,1)}"
                rx="${c(Os,1)}" ry="${c(Is,1)}"
                fill="url(#${b.id})" />`})}
          ${we&&!$t?y`<path d="${we.path}" fill="url(#${Wo})" opacity="0.95" />`:y``}
        </g>
        </g>
        ${Yo.length?y`<g class="hour-bands">
                ${Yo.map(b=>y`<g class=${b.kind}>
                    <title>${b.title}</title>
                    <rect
                      x="${c(b.x,1)}" y="${c(_,1)}"
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
                stroke-width="${be}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${$t?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:y``}
        ${p&&ot?y`<g class="moon-events">
                ${[[p.rise,"moonrise"],[p.set,"moonset"]].filter(b=>b[0]!==null).map(([b,G])=>{let B=M(at(b),A,A+N),et=M(ft(0),_,W),Q=M(c(C*.05,1),4,8);return y`<g>
                      <title>${a.t(G)} ${st(new Date(b),a)}</title>
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
                        r="${M(c(C*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${Ut}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:y``}
        <path
          d="${He}"
          fill="none"
          stroke="url(#${xt})"
          stroke-width="${M(c(C*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${Zs.map(b=>{let G=ft(b.altitude),B=b.key==="horizon";return y`<g>
            <line
              x1="${c(A,1)}" y1="${c(G,1)}"
              x2="${c(A+N,1)}" y2="${c(G,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${B&&$t?1.5:B?1:.6}"
              stroke-dasharray="${B&&$t?"999 0":B?"3 3":"2 4"}"
              opacity="${B&&$t?.9:B?.6:$t?.3:.45}"
            />
            ${Vs?y`<text
                    x="${c(A+3,1)}"
                    y="${c(G-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${qs}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${b.label}</text>`:y``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${an.map(b=>{let G=M(at(b.time.getTime()),A,A+N),B=M(ft(b.altitude),_,W),et=!b.secondary,Q=et?M(c(C*.022,1),1.8,3):1.4,mt="var(--smc-marker-strong, rgba(255,255,255,0.9))",zt="var(--smc-marker-soft, rgba(255,255,255,0.55))",le=b.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":b.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":b.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",ce=et?le:zt,Xs=et?mt:zt,Js=b.kind==="sunrise"||b.kind==="sunset"?y`
                <circle cx="${c(G,1)}" cy="${c(B,1)}" r="${Q+1}"
                  fill="${b.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${c(G-Q*2.6,1)}"
                  y1="${c(b.kind==="sunrise"?B+Q+2:B-Q-2,1)}"
                  x2="${c(G+Q*2.6,1)}"
                  y2="${c(b.kind==="sunrise"?B+Q+2:B-Q-2,1)}"
                  stroke="${mt}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:y`<circle cx="${c(G,1)}" cy="${c(B,1)}" r="${Q}"
                  fill="${Xs}" opacity="0.85" />`;return y`<g>
            <line
              x1="${c(G,1)}" y1="${c(_,1)}"
              x2="${c(G,1)}" y2="${c(W,1)}"
              stroke="${ce}" stroke-width="${et?1:.7}"
              stroke-dasharray="3 3" opacity="${et?.5:.25}" />
            ${Js}
          </g>`})}
      </g>

      ${Tt?y`<g class="countdown-track">
              <title>${S.title}</title>
              <line
                x1="${c(vt,1)}" y1="${c(Tt.y,1)}"
                x2="${c(Tt.endX,1)}" y2="${c(Tt.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${c(Fn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${c(vt,1)}" y1="${c(Tt.y,1)}"
                x2="${c(Tt.endX,1)}" y2="${c(Tt.y,1)}"
                stroke="${Tt.color}"
                stroke-width="${Fn}"
                stroke-linecap="round" />
              ${Tt.endsInside?y`<circle
                      cx="${c(Tt.endX,1)}"
                      cy="${c(Tt.y,1)}"
                      r="${c(Fn+.8,1)}"
                      fill="${Tt.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:y``}
            </g>`:y``}

      <g class="now-marker">
        <line
          x1="${c(vt,1)}" y1="${c(_,1)}"
          x2="${c(vt,1)}" y2="${c(W,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${M(c(C*.012,2),1,1.8)}"
          opacity="0.85" />
        ${l?y`<g class="now-sun ${Bs}" filter="${js}">
                <title>${a.t("chartSunNow",{altitude:rt(H,1,a.locale)})}</title>
                <circle
                  cx="${c(vt,1)}"
                  cy="${c(Jo,1)}"
                  r="${Yt}"
                  fill="${Ks}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${qo}"
                />
              </g>`:y``}
        ${Dt&&Oe!==null&&u?y`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:rt(Dt.altitude,1,a.locale)})}${Dt.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${Oe===vt?y``:y`<line
                        x1="${c(vt,1)}"
                        y1="${c(Dt.y,1)}"
                        x2="${c(Oe,1)}"
                        y2="${c(Dt.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${c(Oe,1)}"
                  cy="${c(Dt.y,1)}"
                  r="${c(Kt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${qo}" />
                <g
                  transform="translate(${c(Oe-Kt,1)} ${c(Dt.y-Kt,1)})"
                  opacity="${Dt.clamped?.6:1}"
                >
                  ${Zt({size:c(Kt*2,1),illumination:u.illumination,brightLimbAngle:u.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${w}-moon-now`})}
                </g>
              </g>`:y``}
      </g>

      ${Qo?y`<g class="zenith-chip">
              <rect
                x="${c(ei-un/2,1)}"
                y="${c(oi,1)}"
                width="${c(un,1)}"
                height="${c(dn,1)}"
                rx="${c(dn/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${c(ei,1)}"
                y="${c(oi+dn/2+cn*.36,1)}"
                text-anchor="middle"
                font-size="${cn}"
                fill="var(--smc-label-color, #ffffff)"
              >${ti}</text>
            </g>`:y``}

      ${At?y`<g class="countdown-label">
              <title>${S.title}</title>
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
              >${S.label}</text>
            </g>`:y``}

      ${F?y`<line
              x1="${c(A,1)}" y1="${c(W+.5,1)}"
              x2="${c(A+N,1)}" y2="${c(W+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:y``}

      ${ae.length?y`<g class="event-labels" font-size="${ve}">
              ${ae.map(b=>{let G=F?W+2:_;return y`<g>
                  <rect
                    x="${c(b.x-b.width/2,1)}"
                    y="${c(G,1)}"
                    width="${c(b.width,1)}"
                    height="${c(ln,1)}"
                    rx="${c(ln/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${b.secondary?.6:.88}" />
                  <text
                    x="${c(b.x,1)}"
                    y="${c(G+ln/2+ve*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${b.secondary?.75:1}"
                  >${b.text}</text>
                </g>`})}
            </g>`:y``}
    </svg>
  `}var qr=50,Xr=44,cs=[[0,"#8f9fd6","#f4a97c"],[12,"#9aaedf","#f7bf8e"],[30,"#a8c4ea","#f6dcb4"],[52,"#b4cdee","#eef0f4"],[66,"#8d9cd8","#d9c3dc"],[78,"#3c4590","#6b6fb4"],[90,"#232a68","#3b428a"],[100,"#1b2159","#323a80"]],Jr=[[.13,.55,90,"#f6c2c0",.55],[.3,.42,60,"#fbd9cf",.45],[.58,.3,85,"#ffffff",.55],[.47,.14,50,"#ffffff",.35]];function oe(i){let n=i;return()=>{n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var h=i=>String(c(i,1));function us(i,n,t,e,o,s,r,a){let l=-6,d=`M${h(l)},${h(e)}`;for(;l<n+6;){let u=10+i()*28,p=o+i()*(s-o),m=t-p,g=i();if(d+=`L${h(l)},${h(m)}`,g<.12?d+=`L${h(l+u/2)},${h(m-u*.45)}L${h(l+u)},${h(m)}`:g<.2?d+=`A${h(u/2)},${h(u*.42)} 0 0 1 ${h(l+u)},${h(m)}`:g<.28?d+=`L${h(l+u*.42)},${h(m)}L${h(l+u/2)},${h(m-p*.55)}L${h(l+u*.58)},${h(m)}L${h(l+u)},${h(m)}`:g<.38?d+=`L${h(l+u*.6)},${h(m)}L${h(l+u*.6)},${h(m-12)}L${h(l+u*.64)},${h(m-12)}L${h(l+u*.64)},${h(m)}L${h(l+u)},${h(m)}`:g<.48?d+=`L${h(l+u*.25)},${h(m)}L${h(l+u*.25)},${h(m-7)}L${h(l+u*.75)},${h(m-7)}L${h(l+u*.75)},${h(m)}L${h(l+u)},${h(m)}`:d+=`L${h(l+u)},${h(m)}`,r>0&&l>n*.7)for(let f=m+5;f<t-4;f+=6)for(let $=l+3;$<l+u-3;$+=5)i()<r&&a.push({x:$,y:f,w:1.8,h:2.4,opacity:.55+i()*.4});if(l+=u,i()<.18){let f=4+i()*10,$=t-o*.4;d+=`L${h(l)},${h($)}L${h(l+f)},${h($)}`,l+=f}}return`${d}L${h(l)},${h(e)}Z`}function ds(i,n,t,e,o,s){let r=Array.from({length:s},(d,u)=>({x:(u+.2+i()*.6)/s*n,h:o*(.45+i()*.55),w:n/s*(.9+i()*.9)})),a=Math.max(40,Math.round(n/6)),l=`M-4,${h(e)}`;for(let d=0;d<=a;d++){let u=-4+(n+8)*d/a,p=o*.12;for(let m of r)p=Math.max(p,m.h*(1-Math.abs(u-m.x)/m.w));p+=(i()-.5)*o*.06,l+=`L${h(u)},${h(t-M(p,2,o))}`}return`${l}L${h(n+4)},${h(e)}Z`}function hs(i,n,t,e,o,s){let r=d=>Math.sin(d/n*Math.PI*1.6+.6)*o*.35,a=`M-4,${h(e)}L-4,${h(t-r(-4))}`,l=-4;for(;l<n+4;){let d=o+i()*(s-o),u=t-r(l);if(i()<.72){let p=d*(.42+i()*.12);a+=`L${h(l)},${h(u)}L${h(l+p*.5)},${h(u-d)}L${h(l+p)},${h(u)}`,l+=p*(.55+i()*.25)}else{let p=d*.32;a+=`L${h(l)},${h(u)}L${h(l)},${h(u-d*.35)}A${h(p)},${h(p)} 0 1 1 ${h(l+p*1.6)},${h(u-d*.35)}L${h(l+p*1.6)},${h(u)}`,l+=p*1.6+i()*4}}return`${a}L${h(n+4)},${h(e)}Z`}function Yr(i,n,t,e,o){let s=[];switch(i){case"city":{let r=us(oe(11),n,t,e,18*o,44*o,0,s),a=n*.8,l=84*o,d=`M${h(a-1.6)},${h(t)}L${h(a-1.6)},${h(t-l)}L${h(a-.6)},${h(t-l)}L${h(a-.6)},${h(t-l-16)}L${h(a+.6)},${h(t-l-16)}L${h(a+.6)},${h(t-l)}L${h(a+1.6)},${h(t-l)}L${h(a+1.6)},${h(t)}ZM${h(a+5.5)},${h(t-l*.72)}A5.5,5.5 0 1 0 ${h(a-5.5)},${h(t-l*.72)}A5.5,5.5 0 1 0 ${h(a+5.5)},${h(t-l*.72)}Z`,u=us(oe(23),n,t,e,8*o,28*o,.07,s);return{back:`${r}${d}`,front:u,lights:s,waterTop:null}}case"mountains":return{back:ds(oe(5),n,t,e,78*o,6),front:ds(oe(9),n,t+2,e,40*o,9),lights:s,waterTop:null};case"forest":return{back:hs(oe(17),n,t-6*o,e,22*o,46*o),front:hs(oe(29),n,t+4*o,e,12*o,28*o),lights:s,waterTop:null};case"coast":{let r=t-10*o,a=oe(31),l=`M-4,${h(r)}`;for(let f=0;f<=24;f++){let $=-4+n*.55*f/24,x=Math.sin(f/24*Math.PI)*30*o+a()*4*o;l+=`L${h($)},${h(r-x)}`}l+=`L${h(n*.55)},${h(r)}Z`;let d=n*.72,u=n*.84,p=r-14*o,m=46*o,g=`M${h(d)},${h(r)}Q${h(d+n*.06)},${h(p)} ${h(u-10)},${h(p)}L${h(n+4)},${h(p+2)}L${h(n+4)},${h(r)}ZM${h(u-4.5)},${h(p)}L${h(u-2.8)},${h(p-m)}L${h(u+2.8)},${h(p-m)}L${h(u+4.5)},${h(p)}ZM${h(u-3.6)},${h(p-m)}L${h(u)},${h(p-m-8)}L${h(u+3.6)},${h(p-m)}Z`;return s.push({x:u-1.6,y:p-m-4.5,w:3.2,h:3,opacity:.95}),{back:l,front:g,lights:s,waterTop:r}}default:return null}}var en=new Map;function Qr(i,n,t,e,o){let s=[i,c(n,0),c(t,0),c(e,0),o].join("|");return en.has(s)||(en.size>24&&en.clear(),en.set(s,Yr(i,n,t,e,o))),en.get(s)??null}function ms(i){let{profile:n,events:t,now:e,format:o,scene:s,showSun:r,showMoon:a,moonPath:l,moon:d,currentAltitude:u,animations:p,uid:m}=i,g=o.t,f=Math.max(160,i.width),$=Math.max(140,i.height),x=f<480,R=x?Xr:qr,w=14,D=$-R-4,H=n.samples,S=n.dayStart.getTime(),E=n.dayEnd.getTime(),v=Math.max(1,E-S),C=z=>(z-S)/v*f,L=a&&l?.profile.samples.length?Math.max(...l.profile.samples.map(z=>z.altitude)):-90,P=Math.max(12,n.maxAltitude+8,L+6),X=-16,F=z=>w+(P-z)/(P-X)*(D-w),K=F(0),A=M(C(e.getTime()),0,f),N=z=>z.map((ot,Ut)=>`${Ut?"L":"M"}${h(C(ot.time))},${h(F(ot.altitude))}`).join(""),_={skyTop:`${m}-sky-top`,skyHor:`${m}-sky-hor`,horFade:`${m}-hor-fade`,horMask:`${m}-hor-mask`,soft:`${m}-soft`,softer:`${m}-softer`,sunGlow:`${m}-sun-glow`,sunCore:`${m}-sun-core`,moonGlow:`${m}-moon-glow`,dayFill:`${m}-day-fill`,dayFade:`${m}-day-fade`,nightFill:`${m}-night-fill`,curve:`${m}-curve`,band:`${m}-band`,horizonLine:`${m}-horizon-line`,back:`${m}-scene-back`,front:`${m}-scene-front`,water:`${m}-water`,above:`${m}-above`,below:`${m}-below`,past:`${m}-past`,future:`${m}-future`},V=oe(7),W=[];for(let z=0;z<(x?45:90);z++){let ot=V()*f,Ut=w+V()*(K-w-6),be=M((ot/f-.68)/.12,0,1)*(.4+V()*.6),Re=.5+V()*.9;be>.04&&W.push(y`<circle cx="${h(ot)}" cy="${h(Ut)}" r="${c(Re,2)}" fill="#fff"
        opacity="${c(be,2)}" />`)}let tt=Math.min(1,f/740),I=Jr.map(([z,ot,Ut,be,Re])=>{let wt=Ut*tt,ze=z*f,kt=w+ot*(K-w);return y`<g opacity="${Re}" fill="${be}" filter="url(#${_.soft})">
      <ellipse cx="${h(ze)}" cy="${h(kt)}" rx="${h(wt)}" ry="${h(wt*.22)}" />
      <ellipse cx="${h(ze-wt*.35)}" cy="${h(kt+3)}" rx="${h(wt*.5)}" ry="${h(wt*.18)}" />
      <ellipse cx="${h(ze+wt*.3)}" cy="${h(kt-4)}" rx="${h(wt*.45)}" ry="${h(wt*.2)}" />
    </g>`}),ut=$-R+8,Y=Qr(s,f,ut,$,x?.8:1),Mt=H.length?N(H):"",at=H[0],ft=H[H.length-1],J=H.length?`${Mt}L${h(C(ft.time))},${h(K)}L${h(C(at.time))},${h(K)}Z`:"",yt=H.length?`${Mt}L${h(C(ft.time))},${h($)}L${h(C(at.time))},${h($)}Z`:"",gt=a&&l?.profile.samples.length?N(l.profile.samples):"",j=[{time:t.sunrise,label:g("sunrise"),short:g("sunriseShort"),dashed:!0},{time:t.solarNoon,label:g("sceneNoon"),short:g("sceneNoonShort"),dashed:!1},{time:t.sunset,label:g("sunset"),short:g("sunsetShort"),dashed:!0}].filter(z=>z.time instanceof Date),ht=x?34:48,St=[20,10,-10].filter(z=>z<P-2&&z>X+2),xt=x?78:92,Ft=M(F(u),w+12,$-R-6),De=u>-2,on=x?30:40,ye=x?11:15,bt=x?9:12,Xt=d?.altitude??0,Gt=M(F(Xt),w+bt+2,$-R-bt-4),Le=Xt>0,Ne=F(Xt)>$-R-bt-4||F(Xt)<w+bt+2,$t=ye+bt+6,re=r&&Math.abs(Gt-Ft)<ye+bt+4?A+$t+bt<=f?A+$t:A-$t:A,He=M(K/$,0,1);return y`
    <svg
      class="scene-chart"
      width="${h(f)}"
      height="${h($)}"
      viewBox="0 0 ${h(f)} ${h($)}"
      role="img"
      aria-label="${g("title")}"
    >
      <defs>
        <linearGradient id="${_.skyTop}" x1="0" x2="1" y1="0" y2="0">
          ${cs.map(([z,ot])=>y`<stop offset="${z}%" stop-color="${ot}" />`)}
        </linearGradient>
        <linearGradient id="${_.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${cs.map(([z,,ot])=>y`<stop offset="${z}%" stop-color="${ot}" />`)}
        </linearGradient>
        <linearGradient id="${_.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${c(He,3)}" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask id="${_.horMask}">
          <rect width="${h(f)}" height="${h($)}" fill="url(#${_.horFade})" />
        </mask>
        <filter id="${_.soft}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="${_.softer}" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="${_.sunGlow}">
          <stop offset="0" stop-color="#ffe9a3" stop-opacity="0.95" />
          <stop offset="0.45" stop-color="#ffd36b" stop-opacity="0.45" />
          <stop offset="1" stop-color="#ffc24a" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="${_.sunCore}" cx="0.4" cy="0.38">
          <stop offset="0" stop-color="#fffbe8" />
          <stop offset="0.6" stop-color="#ffe17a" />
          <stop offset="1" stop-color="#f7b733" />
        </radialGradient>
        <radialGradient id="${_.moonGlow}">
          <stop offset="0" stop-color="#dfe4ff" stop-opacity="0.35" />
          <stop offset="1" stop-color="#dfe4ff" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="${_.dayFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(F(n.maxAltitude))}" y2="${h(K)}">
          <stop offset="0" stop-color="#ffcf5c" stop-opacity="0.95" />
          <stop offset="0.7" stop-color="#ffd27a" stop-opacity="0.8" />
          <stop offset="1" stop-color="#ffe7b8" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient id="${_.dayFade}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(K-4)}" y2="${h(K+36)}">
          <stop offset="0" stop-color="#ffe2a6" stop-opacity="0.75" />
          <stop offset="1" stop-color="#ffe2a6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${_.nightFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(K)}" y2="${h($)}">
          <stop offset="0" stop-color="#a9b4ee" stop-opacity="0" />
          <stop offset="0.22" stop-color="#7f8fe0" stop-opacity="0.45" />
          <stop offset="0.55" stop-color="#4a5ab8" stop-opacity="0.8" />
          <stop offset="1" stop-color="#25307a" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="${_.curve}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(w)}" y2="${h($)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${c(He,3)}" stop-color="#f59e0b" />
          <stop offset="${c(Math.min(1,He+.001),3)}" stop-color="#b9c3ff" />
          <stop offset="1" stop-color="#b9c3ff" />
        </linearGradient>
        <linearGradient id="${_.band}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" stop-opacity="0" />
          <stop offset="0.45" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" />
        </linearGradient>
        <linearGradient id="${_.horizonLine}" gradientUnits="userSpaceOnUse"
          x1="0" x2="${h(f)}" y1="0" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0.9" />
          <stop offset="0.85" stop-color="#fff" stop-opacity="0.75" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${_.back}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#8a6f9e" />
          <stop offset="0.5" stop-color="#5f6aa8" />
          <stop offset="1" stop-color="#2a3170" />
        </linearGradient>
        <linearGradient id="${_.front}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#6f5a88" />
          <stop offset="0.5" stop-color="#3f4888" />
          <stop offset="1" stop-color="#1c2257" />
        </linearGradient>
        <linearGradient id="${_.water}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#e9a88f" />
          <stop offset="0.45" stop-color="#9fb6e3" />
          <stop offset="0.75" stop-color="#5865a8" />
          <stop offset="1" stop-color="#262d6c" />
        </linearGradient>
        <clipPath id="${_.above}"><rect width="${h(f)}" height="${h(K)}" /></clipPath>
        <clipPath id="${_.below}">
          <rect y="${h(K)}" width="${h(f)}" height="${h($-K)}" />
        </clipPath>
        <clipPath id="${_.past}"><rect width="${h(A)}" height="${h($)}" /></clipPath>
        <clipPath id="${_.future}">
          <rect x="${h(A)}" width="${h(f-A)}" height="${h($)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${h(f)}" height="${h($)}" fill="url(#${_.skyTop})" />
        <rect width="${h(f)}" height="${h($)}" fill="url(#${_.skyHor})"
          mask="url(#${_.horMask})" />
        ${W}
        ${I}
      </g>

      ${r&&J?y`<g class="day-area">
              <path d="${J}" fill="url(#${_.dayFill})" clip-path="url(#${_.above})"
                opacity="0.92" />
              <path d="${yt}" fill="url(#${_.nightFill})" clip-path="url(#${_.below})" />
              <g clip-path="url(#${_.below})">
                <path d="${yt}" fill="url(#${_.dayFade})" filter="url(#${_.softer})" />
              </g>
            </g>`:y``}

      ${Y?y`<g class="silhouette" data-scene="${s}">
              ${Y.waterTop!==null?y`<rect class="water" x="0" y="${h(Y.waterTop)}" width="${h(f)}"
                      height="${h($-Y.waterTop)}" fill="url(#${_.water})" opacity="0.55" />
                    ${[0,1,2,3].map(z=>y`<line x1="${h(f*(.08+z*.21))}"
                        x2="${h(f*(.16+z*.21))}"
                        y1="${h(Y.waterTop+5+z*3)}" y2="${h(Y.waterTop+5+z*3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`)}`:y``}
              <path d="${Y.back}" fill="url(#${_.back})" opacity="0.35" />
              <path d="${Y.front}" fill="url(#${_.front})" opacity="0.6" />
              ${Y.lights.map(z=>y`<rect x="${h(z.x)}" y="${h(z.y)}" width="${z.w}"
                  height="${z.h}" fill="#ffd98a" opacity="${c(z.opacity,2)}" />`)}
            </g>`:y``}

      <line class="horizon" x1="${xt}" x2="${h(f)}" y1="${h(K)}" y2="${h(K)}"
        stroke="url(#${_.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${j.map(z=>{let ot=h(C(z.time.getTime()));return z.dashed?y`<line x1="${ot}" x2="${ot}" y1="0" y2="${h($-R+6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`:y`<line x1="${ot}" x2="${ot}" y1="0" y2="${h($-R+6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`})}
      </g>

      ${gt?y`<path class="moon-curve" d="${gt}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`:y``}

      ${r&&Mt?y`<g class="sun-path">
              <g clip-path="url(#${_.past})">
                <path d="${Mt}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${_.future})">
                <path d="${Mt}" fill="none" stroke="url(#${_.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[t.sunrise,t.sunset].filter(z=>z instanceof Date).map(z=>y`<circle cx="${h(C(z.getTime()))}" cy="${h(K)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${z.getTime()<e.getTime()?2:3.2}" />`)}
            </g>`:y``}

      ${a&&d?y`<g class="now-moon" opacity="${Le?1:Ne?.5:.7}">
              <title>${g("chartMoonNow",{altitude:rt(Xt,1,o.locale)})}${Ne?` ${g("chartOutside")}`:""}</title>
              ${Le?y`<circle cx="${h(re)}" cy="${h(Gt)}" r="${bt*2.1}"
                      fill="url(#${_.moonGlow})" />`:y``}
              ${re!==A?y`<line x1="${h(A)}" y1="${h(Gt)}" x2="${h(re)}" y2="${h(Gt)}"
                      stroke="rgba(255,255,255,0.7)" stroke-width="0.8" />`:y``}
              <circle cx="${h(re)}" cy="${h(Gt)}" r="${bt+1.2}" fill="none"
                stroke="rgba(255,255,255,0.75)" stroke-width="1.2" />
              <g transform="translate(${h(re-bt)} ${h(Gt-bt)})">
                ${Zt({size:bt*2,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#2b3270",texture:!1,uid:`${m}-now-moon`})}
              </g>
            </g>`:y``}

      ${r?y`<g class="now-sun ${p?"smc-pulse":""}">
              <title>${g("chartSunNow",{altitude:rt(u,1,o.locale)})}</title>
              <circle cx="${h(A)}" cy="${h(Ft)}" r="${on}"
                fill="url(#${_.sunGlow})" opacity="${De?1:.35}" />
              <circle cx="${h(A)}" cy="${h(Ft)}" r="${ye}" fill="url(#${_.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${De?1:.55}" />
            </g>`:y``}

      <g class="axis">
        <text x="10" y="${h(w+4)}" class="scene-axis">${g("elevation")}</text>
        ${St.map(z=>y`<text x="10" y="${h(F(z)+4)}" class="scene-axis">${z>0?z:`\u2212${-z}`}°</text>
            <line x1="${x?34:40}" x2="${x?40:48}" y1="${h(F(z))}"
              y2="${h(F(z))}" stroke="#fff" opacity="0.8" />`)}
        <text x="10" y="${h(K-5)}" class="scene-axis strong">${g("horizon")}</text>
      </g>

      <rect class="band" x="0" y="${h($-R-18)}" width="${h(f)}"
        height="${h(R+18)}" fill="url(#${_.band})" />
      <g class="event-labels">
        ${j.map(z=>{let ot=h(M(C(z.time.getTime()),ht,f-ht));return y`<text x="${ot}" y="${h($-R+22)}" text-anchor="middle"
              class="scene-time">${st(z.time,o)}</text>
            <text x="${ot}" y="${h($-R+38)}" text-anchor="middle"
              class="scene-label">${x?z.short:z.label}</text>`})}
      </g>
    </svg>
  `}var nt=i=>String(c(i,1));function ps(i){let{profile:n,events:t,now:e,format:o,showSun:s,showMoon:r,moonPath:a,sunAltitude:l,moonAltitude:d}=i,u=o.t,p=Math.max(160,i.width),m=Math.max(100,i.height),f=p<480?64:92,$=6,x=34,w=m-30-8,D=Math.max(40,p-f-$),H=n.dayStart.getTime(),S=n.dayEnd.getTime(),E=Math.max(1,S-H),v=I=>f+(I-H)/E*D,C=r?a?.profile.samples??[]:[],L=C.reduce((I,ut)=>Math.max(I,ut.altitude),-90),P=Math.max(8,s?n.maxAltitude:-90,L)+4,X=-Math.max(14,P*.85),F=4,K=I=>X+F*Math.log1p(Math.exp((I-X)/F)),A=I=>x+(P-Math.min(P,K(I)))/(P-X)*(w-x),N=A(0),_=v(e.getTime()),V=I=>I.map((ut,Z)=>`${Z?"L":"M"}${nt(v(ut.time))},${nt(A(ut.altitude))}`).join(""),W=[0,6,12,18,24].map(I=>{let ut=f+I/24*D,Z=I===0?"start":I===24?"end":"middle";return y`<text x="${nt(ut+(I===0?-4:I===24?4:0))}" y="${nt(m-8)}" text-anchor="${Z}"
      class="clean-axis">${String(I).padStart(2,"0")}:00</text>`}),tt=[t.sunrise,t.sunset].filter(I=>I instanceof Date);return y`
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
      <line class="clean-now" x1="${nt(_)}" x2="${nt(_)}" y1="${nt(x-8)}" y2="${nt(w)}" />
      <text x="${nt(_)}" y="${nt(x-14)}" text-anchor="middle" class="clean-now-label">${u("cleanNow")}</text>
      ${C.length?y`<path class="clean-moon-path" d="${V(C)}" />`:y``}
      ${s&&n.samples.length?y`<path class="clean-sun-path" d="${V(n.samples)}" />
            ${tt.map(I=>y`<circle class="clean-sun-mark" cx="${nt(v(I.getTime()))}"
                cy="${nt(N)}" r="6" />`)}`:y``}
      ${C.length?y`<circle class="clean-moon-now" cx="${nt(_)}" cy="${nt(A(d))}" r="6">
              <title>${u("chartMoonNow",{altitude:rt(d,1,o.locale)})}</title>
            </circle>`:y``}
      ${s?y`<circle class="clean-sun-now" cx="${nt(_)}" cy="${nt(A(l))}" r="7">
              <title>${u("chartSunNow",{altitude:rt(l,1,o.locale)})}</title>
            </circle>`:y``}
      ${W}
    </svg>
  `}function Co(i){let n=Math.sin(i*127.1+311.7)*43758.5453;return n-Math.floor(n)}function ta(i,n,t){let e=[];for(let o=0;o<n;o++){let s=Math.sqrt(Co(i*7.13+o*1.37))*t*.96,r=Co(i*3.71+o*2.11)*360,a=Vt({x:0,y:0},s,r),l=Co(i*5.19+o*4.53);e.push({x:a.x,y:a.y,r:.35+l*.75,opacity:.16+l*.34})}return e}function Eo(i,n){return M((90-i)/90*n,0,n)}function Do(i){let{width:n,height:t,sun:e,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:l,palette:d,format:u,animations:p,uid:m,showCardinals:g=!0,seed:f=0}=i,$=Math.max(80,n),x=Math.max(80,t),R=6,w={x:$/2,y:x/2},D=Math.max(10,Math.min($,x)/2-R),H=`${m}-dome`,S=`${m}-dome-clip`,E=[{key:u.t("compassNorth"),azimuth:0},{key:u.t("compassEast"),azimuth:90},{key:u.t("compassSouth"),azimuth:180},{key:u.t("compassWest"),azimuth:270}],v=M(c(D*.17,1),7,11),C=e?e.altitude>0:!1,L=M(c(D*.11,1),4,11),P=e?Vt(w,Eo(e.altitude,D),e.azimuth):null,X=a&&e&&P,F=o?o.altitude>0:!1,K=M(c(D*.24,1),10,22),A=o?Vt(w,Eo(o.altitude,D),o.azimuth):null,N=l&&o&&A&&r,_=g&&D>=42,V=M(c(D*.14,1),6.5,9),W=[{altitude:30,radius:D*(60/90)},{altitude:60,radius:D*(30/90)}],I=(e?.altitude??-90)<-6?ta(Math.max(1,Math.round(f)),46,D):[],ut=s.filter(Z=>Z.altitude>=-8).map(Z=>Vt(w,Eo(Z.altitude,D),Z.azimuth));return y`
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
        <radialGradient id="${H}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${d.skyTop}" />
          <stop offset="100%" stop-color="${d.skyBottom}" />
        </radialGradient>
        <clipPath id="${S}">
          <circle cx="${c(w.x,1)}" cy="${c(w.y,1)}" r="${c(D,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${c(w.x,1)}" cy="${c(w.y,1)}" r="${c(D,1)}"
        fill="url(#${H})" opacity="0.55" />

      <g clip-path="url(#${S})">
        ${I.length?y`<g class="stars">
                ${I.map(Z=>y`<circle
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

      ${_?y`<g
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
      ${a&&e&&!C?uo(w,D,e.azimuth,d.lineNight):y``}

      ${N&&F&&A&&r?y`<g transform="translate(${c(A.x-K/2,1)} ${c(A.y-K/2,1)})">
              ${Zt({size:K,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:K>=16,uid:`${m}-moon`})}
            </g>`:y``}
      ${l&&o&&!F?uo(w,D,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):y``}
    </svg>
  `}function Lo(i,n,t){i.dispatchEvent(new CustomEvent(n,{detail:t,bubbles:!0,composed:!0}))}function ea(i){if(typeof i!="string")return null;let[n,t]=i.split(".",2);return!n||!t?null:[n,t]}function gs(i,n,t,e,o){typeof i?.callService=="function"&&i.callService(n,t,e,o)}function No(i,n,t,e,o){if(!e){o?.();return}switch(e.action){case"none":return;case"open-popup":o?.();return;case"more-info":Lo(i,"hass-more-info",{entityId:e.entity??t.entity});return;case"navigate":{let s=typeof e.navigation_path=="string"?e.navigation_path:"";if(s==="")return;history.pushState(null,"",s),Lo(window,"location-changed",{replace:!1});return}case"url":{let s=typeof e.url_path=="string"?e.url_path:"";if(s==="")return;window.open(s,typeof e.url_target=="string"?e.url_target:"_blank");return}case"toggle":gs(n,"homeassistant","toggle",{entity_id:e.entity??t.entity});return;case"call-service":case"perform-action":{let s=ea(e.service??e.perform_action);if(!s)return;let r=typeof e.data=="object"&&e.data!==null?e.data:typeof e.service_data=="object"&&e.service_data!==null?e.service_data:void 0,a=typeof e.target=="object"&&e.target!==null?e.target:void 0;gs(n,s[0],s[1],r,a);return}case"fire-dom-event":Lo(window,"ll-custom",e);return;default:return}}function Ho(i=16,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${n}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function fs(i=16,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${n}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${n}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${n}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function Ro(i=16,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${n}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Rn(i=16,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${n}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function zn(i=16,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${n}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var ys="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function zo(i=16,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ys}
        fill="${n}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function bs(i=16,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ys}
        fill="${n}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function Pn(i=20,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${n}" />
      <g stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function $s(i=18,n="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${n}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${n}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${n}" />
    </svg>
  `}var ws=new Map;function vs(i){let n=ws.get(i);return n||(n=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),ws.set(i,n)),n}function na(i){try{return vs(i)}catch{return vs("UTC")}}function Po(i,n){let t=na(n).formatToParts(i),e={};for(let o of t)o.type!=="literal"&&(e[o.type]=Number.parseInt(o.value,10));return{year:e.year??1970,month:e.month??1,day:e.day??1,hour:(e.hour??0)%24,minute:e.minute??0,second:e.second??0}}function _s(i,n){let t=Po(i,n);return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)-Math.floor(i.getTime()/1e3)*1e3}function oa(i,n,t,e=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,n-1,t,e,o,s),l=1440*60*1e3,d=[_s(new Date(a-l),r),_s(new Date(a+l),r)],u=[...new Set(d)].map(m=>a-m).filter(m=>{let g=Po(new Date(m),r);return g.year===i&&g.month===n&&g.day===t&&g.hour===e&&g.minute===o&&g.second===s}).sort((m,g)=>m-g);if(u.length>0)return new Date(u[0]);let p=Math.min(...d);return new Date(a-p)}function Ee(i,n){let t=Po(i,n);return oa(t.year,t.month,t.day,0,0,0,n)}function xs(i,n){let t=Ee(i,n);return Ee(new Date(t.getTime()+2160*60*1e3),n)}function Et(i,n){return Math.round(Ee(i,n).getTime()/(1440*60*1e3))}function ks(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function ct(i,n){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:n}function ge(i,n,t){return typeof i=="string"&&n.includes(i)?i:t}function Oo(i,n,t,e,o,s=0){let r=Ct(i);if(r===null)return n;let a=M(r,t[0],t[1]);return Math.abs(a-r)>1e-9&&o.push(lt(e,"invalidRange",{value:String(i),min:String(t[0]),max:String(t[1])})),s===0?Math.round(a):c(a,s)}function Io(i,n,t){if(i==null)return null;let e=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=e?.action;if(typeof o!="string"||o.trim()==="")return t.push(lt(n,"invalidAction",{value:String(i)})),null;let s=o.trim();return ji.includes(s)?{...e,action:s}:(t.push(lt(n,"invalidAction",{value:s})),null)}function Ts(i,n="en"){let t=[],e=[],o=i??{},s=ct(o.minimal_mode,O.minimal_mode),r=Ce(s),a=s||typeof o.card_style!="string"?O.card_height:Ae(o.card_style);if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(M(o.card_height,r[0],r[1])),a!==o.card_height&&e.push(lt(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")e.push(lt(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let g=Ct(o.card_height);g===null?t.push(lt(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(M(g,r[0],r[1]))}let l=null,d=null,u=Ct(o.latitude),p=Ct(o.longitude);return u!==null&&(u>=-90&&u<=90?l=u:e.push(lt(n,"invalidNumber",{value:String(o.latitude)}))),p!==null&&(p>=-180&&p<=180?d=p:e.push(lt(n,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():O.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():O.moon_entity,card_height:a,show_sun:ct(o.show_sun,O.show_sun),show_moon:ct(o.show_moon,O.show_moon),show_twilight:ct(o.show_twilight,O.show_twilight),show_astronomical_details:ct(o.show_astronomical_details,O.show_astronomical_details),compact_mode:ct(o.compact_mode,O.compact_mode),minimal_mode:s,minimal_show_times:ct(o.minimal_show_times,O.minimal_show_times),minimal_show_zenith:ct(o.minimal_show_zenith,O.minimal_show_zenith),sun_marker_size:Oo(o.sun_marker_size,O.sun_marker_size,Qe,n,e,1),popup_width:Oo(o.popup_width,O.popup_width,ee,n,e),popup_height:Oo(o.popup_height,O.popup_height,ne,n,e),show_remaining_time:ct(o.show_remaining_time,O.show_remaining_time),remaining_time_focus:ge(o.remaining_time_focus,Rt.remainingTimeFocus,O.remaining_time_focus),show_golden_hour:ct(o.show_golden_hour,O.show_golden_hour),show_countdown_tile:ct(o.show_countdown_tile,O.show_countdown_tile),tap_action:Io(o.tap_action,n,e),hold_action:Io(o.hold_action,n,e),double_tap_action:Io(o.double_tap_action,n,e),card_style:ge(o.card_style,Rt.cardStyle,O.card_style),scene:ge(o.scene,Rt.scene,O.scene),show_sun_info:ct(o.show_sun_info,O.show_sun_info),show_moon_info:ct(o.show_moon_info,O.show_moon_info),theme_mode:ge(o.theme_mode,Rt.themeMode,O.theme_mode),animations:ct(o.animations,O.animations),time_format:ge(o.time_format,Rt.timeFormat,O.time_format),language:ge(o.language,Rt.language,O.language),show_header:ct(o.show_header,O.show_header),show_day_chart:ct(o.show_day_chart,O.show_day_chart),show_sky_view:ct(o.show_sky_view,O.show_sky_view),show_events:ct(o.show_events,O.show_events),show_moon_times:ct(o.show_moon_times,O.show_moon_times),show_footer:ct(o.show_footer,O.show_footer),twilight_level:ge(o.twilight_level,Rt.twilightLevel,O.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:l,longitude:d},errors:t,warnings:e}}function As(i,n){let t=Ce(i.minimal_mode);return i.card_height==="auto"?M(ts(n,i.card_style),t[0],t[1]):M(i.card_height,t[0],t[1])}function ia(i,n,t,e="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},l={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:n,location:o,locationName:"",extras:sa(n,Cs(e)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:l,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:t,fatal:!0}}function Cs(i){return i==="de"?"de-DE":"en-GB"}function sa(i,n){return{timeZoneLongName:Mo(i,n,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function ra(i,n){let t=ro(i.getTime()-27648e5,i.getTime()-6e4);if(t.length===0)return!1;let e=t[t.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:n,year:"numeric",month:"2-digit"}).format(s);return o(e)===o(i)}function aa(i,n,t){if(!i)return null;let e=Number(new Intl.DateTimeFormat("en-CA",{timeZone:n,month:"2-digit"}).format(i));if(!Number.isFinite(e)||e<1||e>12)return null;let o=Xi[e-1];return lt(t,"folkName",{name:lt(t,o)})}function Ms(i,n,t,e){return i?{time:i,azimuth:Mn(i,n,"moon"),dayOffset:Et(i,e)-Et(t,e)}:null}function la(i){if(typeof i!="string"||i.trim()==="")return null;let n=new Date(i);return Number.isNaN(n.getTime())?null:n}var Ss=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],ca={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function ua(i,n,t){let e=ks(n?.config?.time_zone),o=[],s=co(n?.config?.latitude)?n.config.latitude:null,r=co(n?.config?.longitude)?n.config.longitude:null,a=i.latitude??s,l=i.longitude??r,d=pe(i.language,n?.locale?.language??n?.language);if(a===null||l===null)return ia(t,e,["missing-location",...o],d);let u={latitude:a,longitude:l},p=i.location_name.trim()!==""?i.location_name.trim():n?.config?.location_name??"",m=Ee(t,e),g=xs(t,e),f=io(u,m,g),$=xn(t,u),x=$.altitude,R=Ye(t.getTime()+6e4,u),w=te(t,u),D=kn(t),H=Hi(t,u),S=n?.states?.[i.entity];S||o.push("missing-sun-entity");let E={...f.events},v={};if(S?.attributes)for(let[j,ht]of Ss){let St=la(S.attributes[ht]),xt=f.events[j];if(St&&St>=m&&St<g&&(!xt||Math.abs(St.getTime()-xt.getTime())<=qi)){E[j]=St,v[j]="ha";continue}v[j]=xt?"computed":"none"}else for(let[j]of Ss)v[j]=f.events[j]?"computed":"none";for(let j of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])v[j]=f.events[j]?"computed":"none";let C=S?.attributes?Ct(S.attributes.elevation):null,L=S?.attributes?Ct(S.attributes.azimuth):null,P=i.moon_entity?n?.states?.[i.moon_entity]:void 0,X=P&&typeof P.state=="string"?ca[P.state]??null:null,F=i.show_moon?Ni(u,m,g,H):null,K=[],A=900*1e3;for(let j=m.getTime();j<=g.getTime();j+=A){let ht=xn(j,u);K.push({altitude:ht.altitude,azimuth:ht.azimuth})}let N=null;E.sunrise&&E.sunset&&(N=(E.sunset.getTime()-E.sunrise.getTime())/6e4);let _=Ee(new Date(m.getTime()-720*60*1e3),e),V=io(u,_,m),W=V.events.sunrise&&V.events.sunset?(V.events.sunset.getTime()-V.events.sunrise.getTime())/6e4:null,tt=N!==null&&W!==null?N-W:null,I=zi(t),ut=i.twilight_level==="nautical"?Bt:i.twilight_level==="astronomical"?jt:Ot,Z=j=>j?{time:j.time,rising:j.rising,dayOffset:Et(j.time,e)-Et(t,e)}:null,Y=i.show_sun?Z(so(u,t,Ze)):null,Mt=i.show_twilight?Z(so(u,t,ut)):null,at=t.getTime(),J=[H.nextRise,H.nextSet].filter(j=>j instanceof Date&&j.getTime()>at).sort((j,ht)=>j.getTime()-ht.getTime())[0],yt=i.show_moon&&J?{time:J,rising:J.getTime()===H.nextRise?.getTime(),dayOffset:Et(J,e)-Et(t,e)}:null,gt={timeZoneLongName:Mo(e,Cs(d),t),previousDaylightMinutes:W,daylightDeltaMinutes:tt,sunBelowHorizon:x<0?Math.abs(x):null,sunriseAzimuth:E.sunrise?Mn(E.sunrise,u,"sun"):null,sunsetAzimuth:E.sunset?Mn(E.sunset,u,"sun"):null,nextFullMoon:I,nextFullMoonDays:I?Math.round((I.time.getTime()-t.getTime())/(1440*60*1e3)):null,blueMoon:I?ra(I.time,e):!1,moonFolkName:aa(I?.time??null,e,d),moonDistance:Pi(t,u,14),moonRise:Ms(H.nextRise??H.previousRise,u,t,e),moonSet:Ms(H.nextSet??H.previousSet,u,t,e),nextSunEvent:Y,nextTwilightEvent:Mt,nextMoonEvent:yt,goldenHour:i.show_golden_hour?Li(u,t,Xe,_n):null};return f.polar==="polar-day"&&o.push("polar-day"),f.polar==="polar-night"&&o.push("polar-night"),E.sunrise||o.push("no-sunrise-today"),E.sunset||o.push("no-sunset-today"),!E.civilDawn&&!E.civilDusk&&o.push("no-civil-twilight"),{now:t,timeZone:e,location:u,locationName:p,day:f,sun:{altitude:x,azimuth:$.azimuth,phase:Ri(x),rising:R>x,haElevation:C,haAzimuth:L},moon:{position:w,phase:D,events:H,haPhaseName:X},sunTrack:K,moonPath:F,events:E,eventSources:v,extras:gt,daylightMinutes:N,issues:o,fatal:!1}}var nn=new Map;function da(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight),String(i.show_golden_hour)].join("|")}function ha(i,n){if(!n)return"-";let t=n.states?.[i.entity],e=i.moon_entity?n.states?.[i.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",t?.attributes?.next_rising??t?.last_updated??"",t?.attributes?.next_setting??"",t?.attributes?.next_dawn??"",t?.attributes?.next_dusk??"",t?.attributes?.elevation??"",e?.state??""].join("|")}function Es(i,n,t){let e=Math.floor(t.getTime()/6e4),o=[da(i),ha(i,n),e,t.getTimezoneOffset()].join("#"),s=nn.get(o);if(s)return s;let r=ua(i,n,t);if(nn.size>24){let a=nn.keys().next().value;a!==void 0&&nn.delete(a)}return nn.set(o,r),r}var Ds=pn`
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
    gap: 8px;
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
`,Ls=pn`
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
`;function Fo(i,n){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}var ie=class extends Pt{constructor(){super(...arguments);this._open=new Set(["style"])}setConfig(t){this._config={...t}}get _language(){return pe(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return lt(this._language,t,e)}_value(t,e){let o=this._config?.[t];return o??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[o,s]of Object.entries(t)){let r=O[o];s===r&&o in O&&delete e[o]}this._config=e,Fo(this,e)}_group(t,e,o,s){let r=this._open.has(t);return k`
      <details
        class="group"
        data-group=${t}
        ?open=${r}
        @toggle=${a=>{let l=a.target.open;if(l===this._open.has(t))return;let d=new Set(this._open);l?d.add(t):d.delete(t),this._open=d}}
      >
        <summary>
          <span class="group-title">${this._t(e)}</span>
          <span class="group-summary">${o}</span>
          <svg class="group-chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="group-body">${s}</div>
      </details>
    `}_select(t,e,o,s,r,a={}){let l=String(this._config?.[e]??s);return k`
      <div class="row">
        <label for=${t}>${this._t(o)}</label>
        <div class="control">
          <select
            id=${t}
            .value=${l}
            ?disabled=${a.disabled===!0}
            @change=${d=>{let u=d.target.value;this._update({[e]:u,...a.patch?a.patch(u):{}})}}
          >
            ${r.map(([d,u])=>k`<option value=${d} ?selected=${d===l}>${u}</option>`)}
          </select>
        </div>
      </div>
    `}render(){if(!this._config)return k``;let t=this._config,e=t.card_height,o=e==="auto"||e===null,s=t.minimal_mode===!0,r=Ce(s),a=s?O.card_height:Ae(t.card_style),l=typeof e=="number"?e:a,d=t.latitude===void 0||t.latitude===null,u=t.card_style??"glass",p=(u==="scene"||u==="clean")&&!s,m={glass:this._t("editorCardStyleGlass"),flat:this._t("editorCardStyleFlat"),horizon:this._t("editorCardStyleHorizon"),scene:this._t("editorCardStyleScene"),clean:this._t("editorCardStyleClean")},g={city:this._t("editorSceneCity"),mountains:this._t("editorSceneMountains"),forest:this._t("editorSceneForest"),coast:this._t("editorSceneCoast"),none:this._t("editorSceneNone")},f=v=>this._value(v,O[v]),$=u==="scene"?`${m.scene.split(" (")[0]} \xB7 ${g[t.scene??"city"]}`:(m[u]??u).split(" (")[0],x=[o?this._t("editorCardHeightAuto"):`${l} px`,s?this._t("editorMinimalMode"):null,!s&&t.compact_mode?this._t("editorCompactMode"):null].filter(Boolean).join(" \xB7 "),R=[["show_sun","editorShowSun"],["show_moon","editorShowMoon"],...p?[["show_sun_info","editorSunInfo"],["show_moon_info","editorMoonInfo"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"]]:[["show_twilight","editorShowTwilight"],["show_astronomical_details","editorShowAstronomicalDetails"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"],["show_sky_view","editorShowSkyView"],["show_events","editorShowEvents"],["show_moon_times","editorShowMoonTimes"],["show_golden_hour","editorGoldenHour"],["show_footer","editorShowFooter"]]],w=R.filter(([v])=>f(v)).length,D=this._t("editorSwitchCount",{on:w,total:R.length}),H=f("show_remaining_time")?this._t(t.remaining_time_focus==="next"?"editorRemainingTimeFocusNext":t.remaining_time_focus==="golden_hour"?"editorRemainingTimeFocusGolden":"editorRemainingTimeFocusSun").split(" (")[0]:this._t("editorOff"),S=[t.language==="de"?"Deutsch":t.language==="en"?"English":this._t("editorLanguageAuto"),t.time_format==="12"?this._t("editorTimeFormat12"):t.time_format==="24"?this._t("editorTimeFormat24"):null].filter(Boolean).join(" \xB7 "),E=d?"Home Assistant":`${c(Number(t.latitude),2)}\xB0, ${c(Number(t.longitude??0),2)}\xB0`;return k`
      <div class="card-config">
        ${this._group("style","editorGroupStyle",$,k`
            ${this._select("cardstyle","card_style","editorCardStyle","glass",Rt.cardStyle.map(v=>[v,m[v]]),{patch:v=>this._styleHeight(v)})}
            ${u==="scene"?this._select("scene","scene","editorScene","city",Rt.scene.map(v=>[v,g[v]])):T}
            ${this._select("theme","theme_mode","editorThemeMode","auto",[["auto",this._t("editorThemeAuto")],["light",this._t("editorThemeLight")],["dark",this._t("editorThemeDark")]])}
            ${this._switch("animations","editorAnimations")}
            ${p?T:this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",O.sun_marker_size),min:Qe[0],max:Qe[1],step:.5,digits:1,set:v=>this._update({sun_marker_size:v})})}
          `)}
        ${this._group("layout","editorGroupLayout",x,k`
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
                  @change=${v=>{let C=Ct(v.target.value);C!==null&&this._update({card_height:Math.round(M(C,r[0],r[1]))})}}
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
            ${s?k`<div class="hint">${this._t("editorMinimalModeHelp")}</div>
                  ${this._switch("minimal_show_times","editorMinimalTimes","minimal-times")}
                  ${this._switch("minimal_show_zenith","editorMinimalZenith","minimal-zenith")}
                  ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",O.popup_width),min:ee[0],max:ee[1],step:20,set:v=>this._update({popup_width:Math.round(v)})})}
                  ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",O.popup_height),min:ne[0],max:ne[1],step:20,set:v=>this._update({popup_height:Math.round(v)})})}`:T}
          `)}
        ${this._group("content","editorGroupContent",D,k`
            ${R.map(([v,C])=>this._switch(v,C))}
            ${this._select("twilight","twilight_level","editorTwilightLevel","civil",[["civil",this._t("editorTwilightCivil")],["nautical",this._t("editorTwilightNautical")],["astronomical",this._t("editorTwilightAstronomical")],["all",this._t("editorTwilightAll")]])}
          `)}
        ${this._group("countdown","editorGroupCountdown",H,k`
            ${this._switch("show_remaining_time","editorRemainingTime")}
            ${this._select("remaining-focus","remaining_time_focus","editorRemainingTimeFocus","sun",[["sun",this._t("editorRemainingTimeFocusSun")],["next",this._t("editorRemainingTimeFocusNext")],...t.show_golden_hour?[["golden_hour",this._t("editorRemainingTimeFocusGolden")]]:[]],{disabled:t.show_remaining_time===!1})}
            ${p?T:this._switch("show_countdown_tile","editorCountdownTile")}
          `)}
        ${this._group("locale","editorGroupLocale",S,k`
            ${this._select("language","language","editorLanguage","auto",[["auto",this._t("editorLanguageAuto")],["de","Deutsch"],["en","English"]])}
            ${this._select("timeformat","time_format","editorTimeFormat","auto",[["auto",this._t("editorTimeFormatAuto")],["24",this._t("editorTimeFormat24")],["12",this._t("editorTimeFormat12")]])}
          `)}
        ${this._group("source","editorGroupSource",E,k`
            <div class="row">
              <label for="entity">${this._t("editorEntity")}</label>
              <div class="control">
                <input
                  id="entity"
                  type="text"
                  .value=${this._value("entity",O.entity)}
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
                  .value=${this._value("moon_entity",O.moon_entity)}
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
                    @change=${v=>{if(v.target.checked){let L={...this._config};delete L.latitude,delete L.longitude,this._config=L,Fo(this,L)}else this._update({latitude:c(this.hass?.config?.latitude??0,4),longitude:c(this.hass?.config?.longitude??0,4)})}}
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
                  @change=${v=>{let C=Ct(v.target.value);this._update({latitude:C===null?void 0:M(C,-90,90)})}}
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
                  @change=${v=>{let C=Ct(v.target.value);this._update({longitude:C===null?void 0:M(C,-180,180)})}}
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
    `}_numberRow(t){let{id:e,labelKey:o,value:s,min:r,max:a,step:l,digits:d=0,set:u}=t,p=m=>String(d===0?Math.round(m):c(m,d));return k`
      <div class="row">
        <label for=${e}>${this._t(o)}</label>
        <div class="control height-control">
          <input
            id=${e}
            type="range"
            min=${r}
            max=${a}
            step=${l}
            .value=${p(s)}
            @input=${m=>u(Number(m.target.value))}
          />
          <input
            id="${e}-number"
            type="number"
            aria-label=${this._t(o)}
            min=${r}
            max=${a}
            step=${l}
            .value=${p(s)}
            @change=${m=>{let g=Ct(m.target.value);g!==null&&u(M(g,r,a))}}
          />
        </div>
      </div>
    `}_styleHeight(t){let e=this._config?.card_height;if(this._config?.minimal_mode===!0)return{};let o=Ae(this._config?.card_style),s=Ae(t);return s!==o&&(e===void 0||e===o)?{card_height:s}:{}}_warnings(){let t=this._config?.card_height,e=Ce(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<e[0]||t>e[1])?k`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:e[0],max:e[1]})}
      </span>`:T}_switch(t,e,o=String(t)){let s=O[t];return k`
      <div class="row">
        <label for="${o}">${this._t(e)}</label>
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
    `}_reset(){let t=En();this._config=t,Fo(this,t)}};ie.styles=Ls,Lt([ke({attribute:!1})],ie.prototype,"hass",2),Lt([me()],ie.prototype,"_config",2),Lt([me()],ie.prototype,"_open",2),ie=Lt([bn(Bi)],ie);var fe=.64,On=.6,se=12,Ns=17,qt=class extends Pt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=t=>{if(!this._popup)return;if(t.key==="Escape"){t.stopPropagation(),this._closeDetails();return}if(t.key!=="Tab")return;let e=this._popupFocusable(),o=e[0],s=e[e.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?e.indexOf(r):-1;if(a===-1){t.preventDefault(),(t.shiftKey?s:o).focus();return}t.shiftKey&&a===0?(t.preventDefault(),s.focus()):!t.shiftKey&&a===e.length-1&&(t.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let t=this._config?.hold_action;t&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(t,!1)},Vi))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=t=>{if(this._held){this._held=!1;return}let e=t.currentTarget;if(e instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(e);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,e);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(e)},Zi)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(t){let e=this._hass;this._hass=t,this.requestUpdate("hass",e),this._popupCard&&(this._popupCard.hass=t)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return En()}setConfig(t){if(!t||typeof t!="object")throw new Error("Invalid configuration");let e=pe(t.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=Ts(t,e);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let t=this._resolvedHeight();return Math.max(1,Math.round(t/50))}getGridOptions(){let t=this._resolvedHeight();return{rows:Math.max(1,Math.round(t/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(t){super.willUpdate(t);let e=this._isDark();this.classList.toggle("smc-dark",e),this.classList.toggle("smc-light",!e),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&t!==this._width&&(this._width=t)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&(this._width=t)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let t=this._language(),e=M(this._config.popup_width,ee[0],ee[1]),o=M(this._config.popup_height,ne[0],ne[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",lt(t,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${e}px)`,maxWidth:`${e}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",lt(t,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let l=this._config,d={...l,latitude:l.latitude??void 0,longitude:l.longitude??void 0,location_name:l.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},u=document.createElement(yo);u.hass=this.hass;try{u.setConfig(d)}catch{}this._popupCard=u,r.append(u,a),s.append(r),s.addEventListener("click",p=>{p.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let t=document.activeElement;if(!t)return null;let e=t.shadowRoot?.activeElement;return e instanceof HTMLElement?e:t}_popupFocusable(){if(!this._popup)return[];let t=[],e=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");e&&t.push(e);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||t.push(s);return t}_handleMinimalKey(t){if(t.key==="Enter"||t.key===" "){t.preventDefault();let e=t.currentTarget;e instanceof HTMLElement&&this._runTap(e)}}_runTap(t){this._runAction(this._config?.tap_action??null,!0,t)}_runAction(t,e,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;No(r,this.hass,s,t,e?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(t){if(t.has("_config")||t.has("_width")||t.has("_tick"))return!0;if(t.has("hass")){let e=this._computeHassSignature();return e===this._hassSignature?!1:(this._hassSignature=e,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(t=>{let e=t.some(o=>o.isIntersecting);e!==this._visible&&(this._visible=e,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,Gi()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let t=this._config,e=this.hass;if(!e||!t)return"";let o=e.states?.[t.entity],s=t.moon_entity?e.states?.[t.moon_entity]:void 0;return[e.config?.time_zone??"",e.config?.latitude??"",e.config?.longitude??"",e.config?.location_name??"",e.locale?.language??"",e.language??"",e.locale?.time_format??"",e.selectedTheme?.dark??e.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?As(this._config,this._width||400):O.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return pe(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let t=this._config;if(!t)return k``;let e=this._width||400,o=this._resolvedHeight(),s=Qi(o,e,t),r=Es(t,this.hass,new Date),a=this._language(),l=this._isDark(),d=l?bo:$o;if(r.fatal)return k`
        <ha-card
          class=${pt({"smc-dark":l,"smc-light":!l,"smc-minimal":s.minimal})}
          style=${U({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${$s(18)}</span>
              <span>${lt(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let u=ss(a,this._locale(),r.timeZone,os(t.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?k`
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
              ${Ao({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style==="scene"||t.card_style==="clean"?"glass":t.card_style,compact:!1,minimal:!0,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:t.card_style==="scene"?this._renderSceneCard(r,u,t,d,l,e,o):t.card_style==="clean"?this._renderCleanCard(r,u,t,l,e,o):k`
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
            ${t.show_day_chart?k`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${U({height:`${s.chartHeight}px`})}
                  >
                    ${Ao({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style,compact:s.compact,minimal:!1,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,u,s),showGoldenHour:t.show_golden_hour,moonPath:r.moonPath,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(u,s.legendHeight):T}
                </div>`:T}
            ${s.skyViewSide?k`<div
                  class="sky-column"
                  style=${U({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${Do({width:s.skyViewWidth,height:s.chartHeight,sun:t.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:t.show_sun,showMoon:t.show_moon,palette:d,format:u,animations:t.animations,uid:`${this._uid}-sky`,seed:Et(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,u,s.skyViewWidth,this._countdownRows(s))}
                </div>`:T}
          </div>

          ${s.showEvents?this._renderEvents(r,u,s):T}
          ${s.showDetails?this._renderDetails(r,u,t,s,a,l,e):T}
          ${s.showFooter?this._renderFooter(r,u,t,s):T}
        </div>
      </ha-card>
    `}_renderSceneCard(t,e,o,s,r,a,l){let d=a<480?12:16,u=12,p=Math.max(160,a-2*d),m=o.show_sun&&o.show_sun_info,g=o.show_moon&&o.show_moon_info,f=(m?1:0)+(g?1:0),$=this._infoLayout(p,f,12,330,150),x=$.compact?90:a<480?78:92,R=f===0?0:$.side?x:f*x+(f-1)*10,w=a<480?46:52,D=140,H=o.show_header,S=f>0,E=(C,L)=>l-2*d-(C?w+u:0)-(L?R+u:0);o.show_day_chart&&S&&E(H,!0)<D&&(S=!1),o.show_day_chart&&H&&E(!0,S)<D&&(H=!1);let v=o.show_day_chart?Math.max(D,E(H,S)):0;return k`
      <ha-card
        class=${pt({"smc-dark":r,"smc-light":!r,"smc-scene":!0})}
        style=${U({height:`${l}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,e)}
      >
        <div
          class="root scene-root"
          style=${U({padding:`${d}px`,gap:`${u}px`})}
        >
          ${H?this._renderSceneHeader(t,e,s,a,w):T}
          ${o.show_day_chart?k`<div class="scene-wrap" style=${U({height:`${v}px`})}>
                ${ms({profile:t.day,events:t.events,now:t.now,width:p,height:v,format:e,scene:o.scene,showSun:o.show_sun,showMoon:o.show_moon,moonPath:t.moonPath,moon:o.show_moon?{illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,altitude:t.moon.position.apparentAltitude}:null,currentAltitude:t.sun.altitude,animations:o.animations,uid:`${this._uid}-scene`})}
              </div>`:T}
          ${S?k`<div
                class=${pt({"scene-tiles":!0,stacked:!$.side,single:f===1})}
                style=${U({height:`${R}px`})}
              >
                ${m?this._renderSceneSunTile(t,e,a<480,$.compact,$.itemWidth):T}
                ${g?this._renderSceneMoonTile(t,e,a<480,$.compact,$.itemWidth):T}
              </div>`:T}
        </div>
      </ha-card>
    `}_renderCleanCard(t,e,o,s,r,a){let l=r<480,d=l?14:18,u=Math.max(160,r-2*d-2),p=o.show_sun&&o.show_sun_info,m=o.show_moon&&o.show_moon_info,g=(p?1:0)+(m?1:0),f=this._infoLayout(u,g,37,300,140),$=f.side,x=f.compact?62:l?64:72,R=g===0?0:$?x:g*x+(g-1)*12,w=l?52:60,D=21,H=110,S=o.show_header,E=g>0,v=(tt,I)=>a-2*d-(tt?w:0)-(I?R+D:0);o.show_day_chart&&E&&v(S,!0)<H&&(E=!1),o.show_day_chart&&S&&v(!0,E)<H&&(S=!1);let C=o.show_day_chart?Math.max(H,v(S,E)):0,L=this._primaryCountdown(t,e),P=e.t(this._phaseKey(t)),X=t.locationName?`${t.locationName} \xB7 ${tn(t.now,e)}`:tn(t.now,e),F=u<320,K=F?18:l?20:22,A=(F?46:l?54:64)+Math.max(e.t("title").length*K*.56,X.length*(F?13:14)*.53),N=tt=>tt.length*13.5*.58+30,_=u-A-12,W=(L?[{phase:!0,text:L.compact},{phase:!1,text:L.compact},{phase:!0,text:L.duration},{phase:!1,text:L.duration}]:[{phase:!0,text:null},{phase:!1,text:null}]).find(tt=>(tt.phase?N(P)+8:0)+(tt.text?N(tt.text):0)<=_)??{phase:!1,text:null};return k`
      <ha-card
        class=${pt({"smc-dark":s,"smc-light":!s,"smc-clean":!0})}
        style=${U({height:`${a}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,e)}
      >
        <div class="root clean-root" style=${U({padding:`${d}px`})}>
          ${S?k`<div
                class=${pt({"clean-header":!0,tiny:F})}
                style=${U({height:`${w}px`})}
              >
                <div class="clean-head-left">
                  <svg class="clean-logo" width=${F?34:l?40:50}
                    height=${F?27:l?32:40}
                    viewBox="0 0 50 40" aria-hidden="true">
                    <g stroke="currentColor" stroke-width="3" stroke-linecap="round">
                      <line x1="4" y1="35" x2="46" y2="35" /><line x1="25" y1="3" x2="25" y2="9" />
                      <line x1="10" y1="10" x2="14" y2="14" /><line x1="40" y1="10" x2="36" y2="14" />
                      <line x1="3" y1="25" x2="9" y2="25" /><line x1="41" y1="25" x2="47" y2="25" />
                    </g>
                    <path d="M12 30a13 13 0 0 1 26 0z" fill="currentColor" />
                  </svg>
                  <div class="clean-head-text">
                    <span class="clean-title">${e.t("title")}</span>
                    <span class="clean-subtitle">${X}</span>
                  </div>
                </div>
                <div class="clean-chips">
                  ${W.phase?k`<span class="clean-chip phase" title=${P}>${P}</span>`:T}
                  ${L&&W.text?k`<span
                        class="clean-chip countdown-chip"
                        data-body=${L.body}
                        role="img"
                        aria-label=${L.long}
                        title=${L.title}
                        >${W.text}</span
                      >`:T}
                </div>
              </div>`:T}
          ${o.show_day_chart?k`<div class="clean-chart-wrap" style=${U({height:`${C}px`})}>
                ${ps({profile:t.day,events:t.events,now:t.now,width:u,height:C,format:e,showSun:o.show_sun,showMoon:o.show_moon,moonPath:t.moonPath,sunAltitude:t.sun.altitude,moonAltitude:t.moon.position.apparentAltitude})}
              </div>`:T}
          ${E?k`<div class="clean-divider"></div>
                <div
                  class=${pt({"clean-info":!0,stacked:!$,single:g===1})}
                  style=${U({height:`${R}px`})}
                >
                  ${p?this._renderCleanSun(t,e,l,f.compact,f.itemWidth):T}
                  ${p&&m&&$?k`<span class="clean-sep" aria-hidden="true"></span>`:T}
                  ${m?this._renderCleanMoon(t,e,l,f.compact,f.itemWidth):T}
                </div>`:T}
        </div>
      </ha-card>
    `}_infoLayout(t,e,o,s,r){let a=(t-o)/2,l=e===2&&a>=r,d=l?a:t;return{side:l,compact:d<s,itemWidth:d}}_moonRiseTime(t,e){let o=t.extras.moonRise;return o?`\u2191 ${st(o.time,e)}`:"\u2191 \u2014"}_sunTimesText(t,e){let o=s=>s?st(s,e):"\u2014";return`\u2191 ${o(t.events.sunrise)}  \u2193 ${o(t.events.sunset)}`}_moonPositionTexts(t,e){let o=t.moon.position.apparentAltitude,s=rt(o,1,e.locale);return o>=0?[`${s} \xB7 ${Math.round(t.moon.position.azimuth)}\xB0 ${It(t.moon.position.azimuth,e.language)}`,s]:[`${rt(Math.abs(o),1,e.locale)} ${e.t("belowHorizon")}`,s]}_cleanItem(t,e,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return k`<div
      class=${pt({"clean-item":!0,[t]:!0,compact:e,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??T}
      @keydown=${o?a:T}
    >
      ${r}
    </div>`}_renderCleanSun(t,e,o,s,r){let a=rt(t.sun.altitude,1,e.locale),l=`${Math.round(t.sun.azimuth)}\xB0 ${It(t.sun.azimuth,e.language)}`,d=s?40:o?50:58,u=r-d-(s?12:16),p=this._fitLabel([`${e.t("azimuth")} ${l}`,l],u,s?12:13.5,fe);return this._cleanItem("sun",s,this._sceneTileAction(this._config.entity),`${e.t("sunAltitude")} ${a}, ${e.t("azimuth")} ${l}`,k`<span class="clean-badge sun" style=${U({width:`${d}px`,height:`${d}px`})}
          >${Pn(s?22:o?26:30,"currentColor")}</span
        >
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([e.t("sunAltitude"),e.t("sun")],u,13,On)??e.t("sun")}</span
          >
          <span class="clean-item-value">${a}</span>
          <span class="clean-item-sub">${p??l}</span>
        </span>`)}_renderCleanMoon(t,e,o,s,r){let a=s?40:o?50:58,l=r-a-(s?12:16),d=s?12:13.5,u=this._fitLabel([this._moonTimesText(t,e,!1),this._moonTimesText(t,e,!0),this._moonRiseTime(t,e)],l,d,fe)??this._moonRiseTime(t,e),p=t.moon.haPhaseName??t.moon.phase.phaseKey,m=Hn(t.moon.phase.illumination,e.locale),g=`${m} ${e.t("illumination")}`,f=this._fitLabel([g,m],l,s?18:24,fe)??m,$=s?20:o?24:28;return this._cleanItem("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${e.t(p)}, ${g}`,k`<span class="clean-badge moon" style=${U({width:`${a}px`,height:`${a}px`})}>
          <svg width=${$} height=${$} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 3.2a9 9 0 1 0 5.3 13.6A7.4 7.4 0 0 1 15.5 3.2z" fill="currentColor" />
          </svg>
        </span>
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([e.t(p),e.t("moon")],l,13,On)??e.t("moon")}</span
          >
          <span class="clean-item-value">${f}</span>
          <span class="clean-item-sub" title=${this._moonTimesText(t,e,!1)}
            >${u}</span
          >
        </span>`)}_renderSceneHeader(t,e,o,s,r){let a=s<480,l=this._primaryCountdown(t,e),d=e.t(this._phaseKey(t));return k`
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
            <span class="scene-title">${t.locationName||e.t("title")}</span>
            <span class="scene-date">${tn(t.now,e)}</span>
          </div>
        </div>
        <div class="scene-chips">
          ${l?k`<span
                class="scene-chip countdown-chip"
                data-body=${l.body}
                role="img"
                aria-label=${l.long}
                title=${l.title}
                >${l.icon}<span>${a?l.duration:l.compact}</span></span
              >`:T}
          ${a&&l?T:k`<span class="scene-chip phase" title=${d}>
                <span
                  class="scene-dot"
                  style=${U({background:this._phaseColor(t,o)})}
                ></span>
                ${d}
              </span>`}
        </div>
      </div>
    `}_sceneTileAction(t){return!t||!this.hass?.states?.[t]?null:()=>No(this,this.hass,this._config,{action:"more-info",entity:t},void 0)}_sceneTile(t,e,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return k`<div
      class=${pt({"scene-tile":!0,[t]:!0,compact:e,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??T}
      @keydown=${o?a:T}
    >
      ${r}
      ${o&&!e?k`<svg class="scene-chevron" width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>`:T}
    </div>`}_renderSceneSunTile(t,e,o,s,r){let a=s?38:o?52:62,l=rt(t.sun.altitude,1,e.locale),d=`${Math.round(t.sun.azimuth)}\xB0 ${It(t.sun.azimuth,e.language)}`,u=f=>f?st(f,e):"\u2014",p=`${e.t("sunAltitude")} ${l}, ${e.t("azimuth")} ${d}`,m=r-(s?22:30)-a-(s?8:14),g=k`<span
      class="scene-tile-icon"
      style=${U({width:`${a}px`,height:`${a}px`})}
      >${Pn(Math.round(a*.55),"#f5a524")}</span
    >`;if(s){let f=this._fitLabel([this._sunTimesText(t,e)],m,11.5,fe);return this._sceneTile("sun",!0,this._sceneTileAction(this._config.entity),p,k`${g}
          <span class="scene-tile-body">
            <span class="scene-tile-label"
              >${this._fitLabel([e.t("sunAltitude"),e.t("sun")],m,12,On)??e.t("sun")}</span
            >
            <span class="scene-tile-value">${l}</span>
            ${f?k`<span class="scene-tile-sub">${d}</span>
                  <span class="scene-tile-sub">${f}</span>`:k`<span class="scene-tile-sub">↑ ${u(t.events.sunrise)}</span>
                  <span class="scene-tile-sub">↓ ${u(t.events.sunset)}</span>`}
          </span>`)}return this._sceneTile("sun",!1,this._sceneTileAction(this._config.entity),p,k`${g}
        <span class="scene-tile-body">
          <span class="scene-tile-label">${e.t("sunAltitude")}</span>
          <span class="scene-tile-value">${l}</span>
          <span class="scene-tile-sub">${e.t("azimuth")} ${d}</span>
        </span>
        <span class="scene-tile-times">
          <span><i aria-hidden="true">▲</i><b>${u(t.events.sunrise)}</b
            ><small>${e.t("sunriseShort")}</small></span
          >
          <span><i aria-hidden="true">▼</i><b>${u(t.events.sunset)}</b
            ><small>${e.t("sunsetShort")}</small></span
          >
        </span>`)}_renderSceneMoonTile(t,e,o,s,r){let a=s?38:o?52:62,l=t.moon.haPhaseName??t.moon.phase.phaseKey,d=Hn(t.moon.phase.illumination,e.locale),u=`${d} ${e.t("illumination")}`,p=r-(s?22:30)-a-(s?8:14)-(s?0:24),m=s?11.5:12.5,g=this._fitLabel(this._moonPositionTexts(t,e),p,m,fe)??this._moonPositionTexts(t,e)[1],f=this._fitLabel([this._moonTimesText(t,e,!1),this._moonTimesText(t,e,!0),this._moonRiseTime(t,e)],p,m,fe)??this._moonRiseTime(t,e),$=this._fitLabel([u,d],p,18,fe)??d;return this._sceneTile("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${e.t(l)}, ${u}`,k`<span class="scene-tile-icon moon" style=${U({width:`${a}px`,height:`${a}px`})}
          >${Zt({size:a,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,darkColor:"var(--smc-scene-moon-dark, rgba(92, 102, 160, 0.7))",texture:!s,uid:`${this._uid}-scene-tile-moon`})}</span
        >
        <span class="scene-tile-body">
          <span class="scene-tile-label"
            >${this._fitLabel([e.t(l),e.t("moon")],p,s?12:12.5,On)??e.t("moon")}</span
          >
          <span class="scene-tile-value small">${$}</span>
          <span class="scene-tile-sub">${g}</span>
          <span class="scene-tile-sub" title=${this._moonTimesText(t,e,!1)}
            >${f}</span
          >
        </span>`)}_renderHeader(t,e,o,s){let r=t.locationName||e.t("title"),a=t.extras,l=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),d=10.5,u=(S,E=!1)=>S.length*d*.58+20+(E?12:0),m=Math.max(0,l-10-108),g=e.t(this._phaseKey(t)),f=u(g,!0),$=this._primaryCountdown(t,e),x=T,R=!0;if($){let S=u($.compact)+Ns,E=u($.duration)+Ns,v=null;S+f<=m?(v=$.compact,m-=S):E+f<=m?(v=$.duration,m-=E):E<=m&&(v=$.duration,m-=E,R=!1),v!==null&&(x=k`<span
          class="meta-chip countdown-chip"
          data-body=${$.body}
          role="img"
          aria-label=${$.long}
          title=${$.title}
          >${$.icon}<span>${v}</span></span
        >`)}R&&(m-=f);let w=T;if(t.daylightMinutes!==null){let S=Ln(t.daylightMinutes,e.t),E=a.daylightDeltaMinutes===null?"":` ${is(a.daylightDeltaMinutes,e.t)}`,v=`${e.t("dayLength")} ${S}${E}`,C=u(v);C<=m&&(m-=C,w=k`<span class="meta-chip" title=${e.t("dayLength")}
          >${v}</span
        >`)}let D=T,H=u(a.timeZoneLongName);return H<=m&&(m-=H,D=k`<span class="meta-chip">${a.timeZoneLongName}</span>`),k`
      <div class="header" style=${U({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${tn(t.now,e)}</span>
        </div>
        <div class="header-meta">
          ${x}${w}${D}
          ${R?k`<span class="phase-chip" title=${g}>
                <span
                  class="phase-dot"
                  style=${U({background:this._phaseColor(t,o)})}
                ></span>
                ${g}
              </span>`:T}
        </div>
      </div>
    `}_countdowns(t,e){let o=this._countdownCache;if(o&&o.model===t&&o.context===e)return[...o.entries];let s=this._computeCountdowns(t,e);return this._countdownCache={model:t,context:e,entries:s},[...s]}_computeCountdowns(t,e){let o=this._config;if(!o?.show_remaining_time)return[];let s=t.now.getTime(),r=[],a=(g,f,$,x,R,w=!1)=>{if(!g)return;let D=(g.time.getTime()-s)/6e4;if(!(D>=0))return;let H=D<1,S=H?e.t("countdownNow"):Ln(D,e.t),E=v=>H?e.t("nowFormat",{event:e.t(v)}):e.t("untilFormat",{event:e.t(v),duration:S});r.push({minutes:D,compact:E($??f),duration:S,time:g.time,rising:g.rising,trailing:w,name:e.t(f),long:E(f),title:`${e.t(f)} ${st(g.time,e)}${g.dayOffset>0?` (${Nn(g.dayOffset,e.t)})`:""}`,icon:x,body:R})},l=t.extras.nextSunEvent;a(l,l?.rising?"sunrise":"sunset",l?.rising?"sunriseShort":"sunsetShort",l?.rising?Ho(se):Ro(se),"sun");let d=t.extras.nextTwilightEvent;if(d){let g=this._twilightKeys();a(d,d.rising?g.dawn:g.dusk,d.rising?g.dawnShort:g.duskShort,d.rising?Rn(se):zn(se),"twilight")}let u=t.extras.nextMoonEvent;a(u,u?.rising?"moonrise":"moonset",u?.rising?"moonriseShort":"moonsetShort",u?.rising?zo(se):bs(se),"moon");let p=t.extras.goldenHour;if(p){let g=p.active?p.end:p.start;g&&a({time:g,rising:!p.active,dayOffset:this._dayOffset(g,t)},p.active?"goldenHourEnd":"goldenHour",p.active?"goldenHourEndShort":"goldenHourShort",fs(se),"golden")}let m=t.extras.nextFullMoon;return o.show_moon&&m&&a({time:m.time,rising:!0,dayOffset:this._dayOffset(m.time,t)},"fullMoon",null,zo(se),"moon",!0),r.sort((g,f)=>+!!g.trailing-+!!f.trailing||g.minutes-f.minutes)}_orderedCountdowns(t,e){let o=this._countdowns(t,e),s=this._config?.remaining_time_focus;if(s==="next")return o;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let a of r){let l=o.findIndex(d=>d.body===a&&!d.trailing);l>0&&o.unshift(...o.splice(l,1))}return o}_dayOffset(t,e){return Et(t,e.timeZone)-Et(e.now,e.timeZone)}_primaryCountdown(t,e){return this._orderedCountdowns(t,e).find(o=>!o.trailing)}_chartCountdown(t,e,o){let s=this._primaryCountdown(t,e);return s?{time:s.time,rising:s.rising,body:s.body,label:o.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let t=this._config?.twilight_level;return t==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:t==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(t,e){return k`
      <div class="legend" aria-hidden="true" style=${U({height:`${e}px`})}>
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
    `}_renderSkyReadout(t,e,o,s){let r=this._config,a=[],l=(d,u,p)=>{let m=rt(u,1,e.locale),g=`${Math.round(p)}\xB0 ${It(p,e.language)}`;return k`<span
        title=${`${e.t("elevation")} ${m} \xB7 ${e.t("azimuth")} ${g}`}
        >${e.t("positionReadout",{body:d,altitude:m,degrees:String(Math.round(p)),direction:It(p,e.language)})}</span
      >`};r.show_sun&&a.push(l(e.t("sun"),t.sun.altitude,t.sun.azimuth)),r.show_moon&&a.push(l(e.t("moon"),t.moon.position.apparentAltitude,t.moon.position.azimuth));for(let d of this._orderedCountdowns(t,e).slice(0,s))a.push(k`<span title=${d.title}>${d.long}</span>`);return a.length===0||o<150?T:k`<div class="sky-readout">${a}</div>`}_countdownRows(t){let e=this._config,o=(e.show_sun?1:0)+(e.show_moon?1:0),s=t.chartHeight+t.legendHeight+(t.showLegend?_o:0),r=o*vo+_o,a=s-r-Yi;return Math.max(0,Math.min(3,Math.floor(a/vo)))}_renderFooter(t,e,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),l=e.t(r),d=t.extras.timeZoneLongName,u=e.t("footerMethod"),p=`${l} \xB7 ${d} \xB7 ${u}`,m=9.5*.55,g=x=>x.length*m<=a,f=g(`${l} \xB7 ${d}`)?`${l} \xB7 ${d}`:l,$=g(`${f} \xB7 ${u}`);return k`
      <div
        class="footer"
        title=${p}
        style=${U({height:`${s.footerHeight}px`})}
      >
        <span class="part">${f}</span>
        ${$?k`<span class="part">${u}</span>`:T}
      </div>
    `}_phaseKey(t){if(t.day.polar==="polar-day")return"phasePolarDay";if(t.day.polar==="polar-night")return"phasePolarNight";switch(t.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(t,e){switch(t.sun.phase){case"day":return e.day;case"civil":return e.civil;case"nautical":return e.nautical;case"astronomical":return e.astronomical;default:return e.night}}_fitLabel(t,e,o,s=.7){for(let r of t)if(r&&r.length*o*s<=e)return r;return null}_renderCountdownTile(t,e,o,s,r,a,l){let u=t.body==="sun"&&!t.rising?e.t("tileDaylightLeft"):e.t("tileUntil",{event:t.name}),p=this._fitLabel([u,t.name],r,a),m=this._fitLabel([t.duration],r,l+2)??t.duration;return k`<div
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
        ${o&&p?k`<span class="event-label" style=${U({fontSize:`${a}px`})}
              >${p}</span
            >`:T}
      </span>
      ${!o&&p?k`<span class="event-label" style=${U({fontSize:`${a}px`})}
            >${p}</span
          >`:T}
    </div>`}_renderEvents(t,e,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),l=this._config,d=[];if(l.show_twilight&&d.push({key:"civilDawn",kind:"dawn",label:e.t("civilDawn"),shortLabel:e.t("civilDawnShort"),time:t.events.civilDawn,icon:Rn(s?14:16),missingText:e.t("noEvent")}),d.push({key:"sunrise",kind:"sunrise",label:e.t("sunrise"),shortLabel:e.t("sunriseShort"),time:t.events.sunrise,icon:Ho(s?14:16),missingText:e.t("noSunrise")}),d.push({key:"sunset",kind:"sunset",label:e.t("sunset"),shortLabel:e.t("sunsetShort"),time:t.events.sunset,icon:Ro(s?14:16),missingText:e.t("noSunset")}),l.show_twilight&&d.push({key:"civilDusk",kind:"dusk",label:e.t("civilDusk"),shortLabel:e.t("civilDuskShort"),time:t.events.civilDusk,icon:zn(s?14:16),missingText:e.t("noEvent")}),l.twilight_level==="all"||l.show_astronomical_details){let L=[["nauticalDawn",t.events.nauticalDawn,"dawn"],["nauticalDusk",t.events.nauticalDusk,"dusk"],["astronomicalDawn",t.events.astronomicalDawn,"dawn"],["astronomicalDusk",t.events.astronomicalDusk,"dusk"]];for(let[P,X,F]of L)d.push({key:P,kind:F,label:e.t(P),shortLabel:e.t(P),time:X,icon:F==="dawn"?Rn(s?13:15):zn(s?13:15),secondary:!0,missingText:e.t("noEvent")})}let u=a<300?3:a<420?4:a<560?6:8,p=l.show_countdown_tile?this._primaryCountdown(t,e):void 0,m=p?2:0,g=Math.max(2,u-m),f=L=>L.secondary?2:L.kind==="sunrise"||L.kind==="sunset"?0:1,$=new Set([...d].map((L,P)=>({tile:L,index:P})).sort((L,P)=>f(L.tile)-f(P.tile)||L.index-P.index).slice(0,g).map(L=>L.tile)),x=d.filter(L=>$.has(L)),R=t.now.getTime(),w=x.filter(L=>L.time&&L.time.getTime()>R).sort((L,P)=>L.time.getTime()-P.time.getTime())[0],D=6,H=x.length+m,E=Math.max(40,a-2*r-D*(H-1))/H-10,v=s?E<120?8.5:9:E<92?8.5:9.5,C=E<74?11:E<96?12:12.5;return k`
      <div
        class="events"
        style=${U({gap:`${D}px`,height:`${o.eventsHeight}px`})}
      >
        ${p?this._renderCountdownTile(p,e,s,m,E*m+(m-1)*(D+10),v,C):T}
        ${x.map(L=>{let P=this._fitLabel([L.label,L.shortLabel],E,v),X=L.time?st(L.time,e):L.missingText,F=this._fitLabel([X,"\u2014"],E,C)??"\u2014";return k`
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
                  ${F}
                </span>
                ${s&&P?k`<span
                      class="event-label"
                      style=${U({fontSize:`${v}px`})}
                      >${P}</span
                    >`:T}
              </span>
              ${!s&&P?k`<span
                    class="event-label"
                    style=${U({fontSize:`${v}px`})}
                    >${P}</span
                  >`:T}
            </div>
          `})}
      </div>
    `}_renderDetails(t,e,o,s,r,a,l){let d=t.extras,u=t.moon.haPhaseName??t.moon.phase.phaseKey,p=s.skyViewInline&&l>=430,m=(o.show_sun?1:0)+(o.show_moon?1:0)+(p?1:0),f=Math.max(60,l-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,$=this._fitLabel([e.t("sunAltitude"),e.t("elevation")],f,10.5),x=rt(t.sun.altitude,1,e.locale),R=`${Math.round(t.sun.azimuth)}\xB0 ${It(t.sun.azimuth,r)}`,w=d.sunBelowHorizon!==null?`${rt(d.sunBelowHorizon,1,e.locale)} ${e.t("belowHorizon")}`:null,D=this._fitLabel([w?`${w} \xB7 ${R}`:`${e.t("azimuth")} ${R}`,w??R,R],f,9.5),H=d.sunriseAzimuth!==null?`${Math.round(d.sunriseAzimuth)}\xB0 ${It(d.sunriseAzimuth,r)}`:null,S=d.sunsetAzimuth!==null?`${Math.round(d.sunsetAzimuth)}\xB0 ${It(d.sunsetAzimuth,r)}`:null,E=o.show_astronomical_details&&H&&S?this._fitLabel([e.t("sunAzimuthAtEvents",{rise:H,set:S}),`${Math.round(d.sunriseAzimuth)}\xB0 / ${Math.round(d.sunsetAzimuth)}\xB0`],f,9.5):null,v=o.show_astronomical_details?this._fitLabel([`${e.t("solarNoon")} ${t.events.solarNoon?st(t.events.solarNoon,e):"\u2014"} \xB7 ${rt(t.day.maxAltitude,1,e.locale)}`,t.events.solarNoon?st(t.events.solarNoon,e):null],f,9.5):null,C=this._fitLabel([e.t(u),e.t("moon")],f,10.5),L=Hn(t.moon.phase.illumination,e.locale),P=this._fitLabel([`${L} ${e.t("illumination")}`,L],f,13),X=t.moon.position.apparentAltitude,F=rt(X,1,e.locale),K=`${Math.round(t.moon.position.azimuth)}\xB0 ${It(t.moon.position.azimuth,r)}`,A=`${e.t("elevation")} ${F} \xB7 ${e.t("azimuth")} ${K}`,N=X>=0?[`${e.t("elevation")} ${F} \xB7 ${K}`,`${F} \xB7 ${K}`,F]:[`${rt(Math.abs(X),1,e.locale)} ${e.t("belowHorizon")} \xB7 ${K}`,`${rt(Math.abs(X),1,e.locale)} ${e.t("belowHorizon")}`,F],_=null,V="";if(d.moonDistance){let{current:J,min:yt,max:gt}=d.moonDistance,j=Math.max(1,gt-yt),ht=J<=yt+j*.2,St=J>=yt+j*.8,xt=Dn(J,e.locale),Ft=ht?e.t("nearPerigee"):St?e.t("nearApogee"):"";V=`${e.t("moonDistance")}: ${xt} \xB7 ${e.t("distanceRange",{min:Dn(yt,e.locale),max:Dn(gt,e.locale)})}`,_=this._fitLabel(Ft?[`${xt} \xB7 ${Ft}`,xt]:[xt],f,9.5)}let W=this._fitLabel(_?N.flatMap(J=>[`${J} \xB7 ${_}`,J]):N,f,9.5),tt=_!==null&&(W?.includes(_)??!1),I=null,ut="";if(o.show_astronomical_details&&d.nextFullMoon){let J=d.nextFullMoonDays??0,yt=J<=0?e.t("dayToday"):e.t("inDays",{days:String(J)}),gt=`${e.t("nextFullMoon")} ${yt}`,j=d.blueMoon?` \xB7 ${e.t("blueMoon")}`:"",ht=`${gt}${j}${d.moonFolkName?` \xB7 ${d.moonFolkName}`:""}`;ut=d.blueMoon?e.t("blueMoonHint"):d.moonFolkName?e.t("folkNameHint"):e.t("nextFullMoon"),I=this._fitLabel([ht,`${gt}${j}`,gt],f,9.5)}let Z=o.show_moon_times?this._fitLabel([this._moonTimesText(t,e,!1),this._moonTimesText(t,e,!0)],f,9.5):null,Y=[];W&&Y.push({text:W,title:A,position:!0}),Z&&Y.push({text:Z,title:null}),I&&Y.push({text:I,title:ut}),_&&!tt&&Y.push({text:_,title:V});let Mt=Y.slice(0,s.detailsHeight>=xo?3:2),at=tt||Mt.some(J=>J.text===_),ft=_&&!at?V||_:null;return k`
      <div
        class="details"
        style=${U({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?k`
              <div class="detail-tile sun">
                <span class="detail-icon">${Pn(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${$?k`<span class="detail-title">${$}</span>`:T}
                  <span class="detail-value">${x}</span>
                  ${D?k`<span class="detail-sub">${D}</span>`:T}
                  ${v?k`<span class="detail-sub">${v}</span>`:T}
                  ${E?k`<span class="detail-sub">${E}</span>`:T}
                </span>
              </div>
            `:T}
        ${o.show_moon?k`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Zt({size:26,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${C?k`<span class="detail-title">${C}</span>`:T}
                  ${P?k`<span class="detail-value">${P}</span>`:T}
                  ${Mt.map(J=>{let yt=[J.title,J.position?ft:null].filter(Boolean).join(" \xB7 ")||null;return k`<span class="detail-sub" title=${yt??T}
                      >${J.text}</span
                    >`})}
                </span>
              </div>
            `:T}
        ${p?k`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${Do({width:56,height:56,sun:o.show_sun?{altitude:t.sun.altitude,azimuth:t.sun.azimuth}:null,moon:o.show_moon?{altitude:t.moon.position.apparentAltitude,azimuth:t.moon.position.azimuth,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,sunTrack:t.sunTrack,moonPhase:t.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?bo:$o,format:e,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:Et(t.now,t.timeZone)})}
                </span>
              </div>
            `:T}
      </div>
    `}_moonTimesText(t,e,o){let s=t.extras.moonRise,r=t.extras.moonSet,a=s&&s.dayOffset!==0?` ${Nn(s.dayOffset,e.t)}`:"",l=s?`\u2191 ${st(s.time,e)}${a}`:"\u2191 \u2014";if(o)return l;let d=r&&r.dayOffset!==0?` ${Nn(r.dayOffset,e.t)}`:"",u=r?`\u2193 ${st(r.time,e)}${d}`:"\u2193 \u2014";return`${l} \xB7 ${u}`}_renderMinimalTimes(t,e,o,s){if(o.minimalTimesHeight<=0)return T;let r=e.t,a=[];if(s.minimal_show_times&&t.events.sunrise){let d=st(t.events.sunrise,e);a.push(k`<span class="minimal-time rise" title=${`${r("sunrise")} ${d}`}
          >↑ ${d}</span
        >`)}if(s.minimal_show_zenith&&t.events.solarNoon){let d=st(t.events.solarNoon,e),u=o.chartWidth<250?d:`${r("zenith")} ${d}`;a.push(k`<span class="minimal-time zenith" title=${`${r("zenith")} ${d}`}
          >${u}</span
        >`)}if(s.minimal_show_times&&t.events.sunset){let d=st(t.events.sunset,e);a.push(k`<span class="minimal-time set" title=${`${r("sunset")} ${d}`}
          >↓ ${d}</span
        >`)}if(a.length===0)return T;let l=M(c(o.minimalTimesHeight*.78,1),8,12);return k`<div
      class="minimal-times"
      style=${U({height:`${o.minimalTimesHeight}px`,fontSize:`${l}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(t,e){return`${this._minimalTitle(t,e)}, ${e.t("popupOpenHint")}`}_minimalTitle(t,e){let o=[this._ariaLabel(t,e)];o.push(`${e.t("sun")} ${rt(t.sun.altitude,0,e.locale)}`);let s=this._primaryCountdown(t,e);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(t,e){let o=[e.t("title")];return o.push(e.t(this._phaseKey(t))),t.events.sunrise&&o.push(`${e.t("sunrise")} ${st(t.events.sunrise,e)}`),t.events.sunset&&o.push(`${e.t("sunset")} ${st(t.events.sunset,e)}`),o.join(", ")}};qt.styles=Ds,Lt([ke({attribute:!1})],qt.prototype,"hass",1),Lt([me()],qt.prototype,"_config",2),Lt([me()],qt.prototype,"_width",2),Lt([me()],qt.prototype,"_tick",2),qt=Lt([bn(yo)],qt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(n=>n.type===`custom:${Cn}`)||window.customCards.push({type:`custom:${Cn}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{qt as SunMoonCard};
