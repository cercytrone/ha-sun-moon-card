var Qs=Object.defineProperty;var er=Object.getOwnPropertyDescriptor;var He=(i,n,e,t)=>{for(var o=t>1?void 0:t?er(n,e):n,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(t?r(n,e,o):r(o))||o);return t&&o&&Qs(n,e,o),o};var _n=globalThis,vn=_n.ShadowRoot&&(_n.ShadyCSS===void 0||_n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jn=Symbol(),di=new WeakMap,Zt=class{constructor(n,e,t){if(this._$cssResult$=!0,t!==Jn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=e}get styleSheet(){let n=this.o,e=this.t;if(vn&&n===void 0){let t=e!==void 0&&e.length===1;t&&(n=di.get(e)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),t&&di.set(e,n))}return n}toString(){return this.cssText}},hi=i=>new Zt(typeof i=="string"?i:i+"",void 0,Jn),xn=(i,...n)=>{let e=i.length===1?i[0]:n.reduce((t,o,s)=>t+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Zt(e,i,Jn)},mi=(i,n)=>{if(vn)i.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of n){let t=document.createElement("style"),o=_n.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=e.cssText,i.appendChild(t)}},Qn=vn?i=>i:i=>i instanceof CSSStyleSheet?(n=>{let e="";for(let t of n.cssRules)e+=t.cssText;return hi(e)})(i):i;var{is:tr,defineProperty:nr,getOwnPropertyDescriptor:or,getOwnPropertyNames:ir,getOwnPropertySymbols:sr,getPrototypeOf:rr}=Object,kn=globalThis,pi=kn.trustedTypes,ar=pi?pi.emptyScript:"",lr=kn.reactiveElementPolyfillSupport,qt=(i,n)=>i,Xt={toAttribute(i,n){switch(n){case Boolean:i=i?ar:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,n){let e=i;switch(n){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Mn=(i,n)=>!tr(i,n),gi={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:Mn};Symbol.metadata??=Symbol("metadata"),kn.litPropertyMetadata??=new WeakMap;var Ve=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,e=gi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(n,e),!e.noAccessor){let t=Symbol(),o=this.getPropertyDescriptor(n,t,e);o!==void 0&&nr(this.prototype,n,o)}}static getPropertyDescriptor(n,e,t){let{get:o,set:s}=or(this.prototype,n)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(n,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??gi}static _$Ei(){if(this.hasOwnProperty(qt("elementProperties")))return;let n=rr(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qt("properties"))){let e=this.properties,t=[...ir(e),...sr(e)];for(let o of t)this.createProperty(o,e[o])}let n=this[Symbol.metadata];if(n!==null){let e=litPropertyMetadata.get(n);if(e!==void 0)for(let[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let o=this._$Eu(e,t);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let e=[];if(Array.isArray(n)){let t=new Set(n.flat(1/0).reverse());for(let o of t)e.unshift(Qn(o))}else n!==void 0&&e.push(Qn(n));return e}static _$Eu(n,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(n.set(t,this[t]),delete this[t]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mi(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,e,t){this._$AK(n,t)}_$ET(n,e){let t=this.constructor.elementProperties.get(n),o=this.constructor._$Eu(n,t);if(o!==void 0&&t.reflect===!0){let s=(t.converter?.toAttribute!==void 0?t.converter:Xt).toAttribute(e,t.type);this._$Em=n,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(n,e){let t=this.constructor,o=t._$Eh.get(n);if(o!==void 0&&this._$Em!==o){let s=t.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Xt;this._$Em=o;let a=r.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(n,e,t,o=!1,s){if(n!==void 0){let r=this.constructor;if(o===!1&&(s=this[n]),t??=r.getPropertyOptions(n),!((t.hasChanged??Mn)(s,e)||t.useDefault&&t.reflect&&s===this._$Ej?.get(n)&&!this.hasAttribute(r._$Eu(n,t))))return;this.C(n,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,e,{useDefault:t,reflect:o,wrapped:s},r){t&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,r??e??this[n]),s!==!0||r!==void 0)||(this._$AL.has(n)||(this.hasUpdated||t||(e=void 0),this._$AL.set(n,e)),o===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[o,s]of t){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let n=!1,e=this._$AL;try{n=this.shouldUpdate(e),n?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw n=!1,this._$EM(),t}n&&this._$AE(e)}willUpdate(n){}_$AE(n){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(n){}firstUpdated(n){}};Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},Ve[qt("elementProperties")]=new Map,Ve[qt("finalized")]=new Map,lr?.({ReactiveElement:Ve}),(kn.reactiveElementVersions??=[]).push("2.1.2");var ro=globalThis,fi=i=>i,Sn=ro.trustedTypes,bi=Sn?Sn.createPolicy("lit-html",{createHTML:i=>i}):void 0,xi="$lit$",st=`lit$${Math.random().toFixed(9).slice(2)}$`,ki="?"+st,cr=`<${ki}>`,yt=document,Jt=()=>yt.createComment(""),Qt=i=>i===null||typeof i!="object"&&typeof i!="function",ao=Array.isArray,ur=i=>ao(i)||typeof i?.[Symbol.iterator]=="function",eo=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yi=/-->/g,$i=/>/g,ft=RegExp(`>|${eo}(?:([^\\s"'>=/]+)(${eo}*=${eo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wi=/'/g,_i=/"/g,Mi=/^(?:script|style|textarea|title)$/i,lo=i=>(n,...e)=>({_$litType$:i,strings:n,values:e}),S=lo(1),b=lo(2),wa=lo(3),Re=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),vi=new WeakMap,bt=yt.createTreeWalker(yt,129);function Si(i,n){if(!ao(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bi!==void 0?bi.createHTML(n):n}var dr=(i,n)=>{let e=i.length-1,t=[],o,s=n===2?"<svg>":n===3?"<math>":"",r=Yt;for(let a=0;a<e;a++){let l=i[a],d,u,p=-1,m=0;for(;m<l.length&&(r.lastIndex=m,u=r.exec(l),u!==null);)m=r.lastIndex,r===Yt?u[1]==="!--"?r=yi:u[1]!==void 0?r=$i:u[2]!==void 0?(Mi.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=ft):u[3]!==void 0&&(r=ft):r===ft?u[0]===">"?(r=o??Yt,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?ft:u[3]==='"'?_i:wi):r===_i||r===wi?r=ft:r===yi||r===$i?r=Yt:(r=ft,o=void 0);let g=r===ft&&i[a+1].startsWith("/>")?" ":"";s+=r===Yt?l+cr:p>=0?(t.push(d),l.slice(0,p)+xi+l.slice(p)+st+g):l+st+(p===-2?a:g)}return[Si(i,s+(i[e]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),t]},en=class i{constructor({strings:n,_$litType$:e},t){let o;this.parts=[];let s=0,r=0,a=n.length-1,l=this.parts,[d,u]=dr(n,e);if(this.el=i.createElement(d,t),bt.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=bt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(xi)){let m=u[r++],g=o.getAttribute(p).split(st),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:f[2],strings:g,ctor:f[1]==="."?no:f[1]==="?"?oo:f[1]==="@"?io:Nt}),o.removeAttribute(p)}else p.startsWith(st)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(Mi.test(o.tagName)){let p=o.textContent.split(st),m=p.length-1;if(m>0){o.textContent=Sn?Sn.emptyScript:"";for(let g=0;g<m;g++)o.append(p[g],Jt()),bt.nextNode(),l.push({type:2,index:++s});o.append(p[m],Jt())}}}else if(o.nodeType===8)if(o.data===ki)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(st,p+1))!==-1;)l.push({type:7,index:s}),p+=st.length-1}s++}}static createElement(n,e){let t=yt.createElement("template");return t.innerHTML=n,t}};function Lt(i,n,e=i,t){if(n===Re)return n;let o=t!==void 0?e._$Co?.[t]:e._$Cl,s=Qt(n)?void 0:n._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,t)),t!==void 0?(e._$Co??=[])[t]=o:e._$Cl=o),o!==void 0&&(n=Lt(i,o._$AS(i,n.values),o,t)),n}var to=class{constructor(n,e){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:e},parts:t}=this._$AD,o=(n?.creationScope??yt).importNode(e,!0);bt.currentNode=o;let s=bt.nextNode(),r=0,a=0,l=t[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new tn(s,s.nextSibling,this,n):l.type===1?d=new l.ctor(s,l.name,l.strings,this,n):l.type===6&&(d=new so(s,this,n)),this._$AV.push(d),l=t[++a]}r!==l?.index&&(s=bt.nextNode(),r++)}return bt.currentNode=yt,o}p(n){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(n,t,e),e+=t.strings.length-2):t._$AI(n[e])),e++}},tn=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,e,t,o){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=n,this._$AB=e,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,e=this._$AM;return e!==void 0&&n?.nodeType===11&&(n=e.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,e=this){n=Lt(this,n,e),Qt(n)?n===T||n==null||n===""?(this._$AH!==T&&this._$AR(),this._$AH=T):n!==this._$AH&&n!==Re&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):ur(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==T&&Qt(this._$AH)?this._$AA.nextSibling.data=n:this.T(yt.createTextNode(n)),this._$AH=n}$(n){let{values:e,_$litType$:t}=n,o=typeof t=="number"?this._$AC(n):(t.el===void 0&&(t.el=en.createElement(Si(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new to(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(n){let e=vi.get(n.strings);return e===void 0&&vi.set(n.strings,e=new en(n)),e}k(n){ao(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,o=0;for(let s of n)o===e.length?e.push(t=new i(this.O(Jt()),this.O(Jt()),this,this.options)):t=e[o],t._$AI(s),o++;o<e.length&&(this._$AR(t&&t._$AB.nextSibling,o),e.length=o)}_$AR(n=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);n!==this._$AB;){let t=fi(n).nextSibling;fi(n).remove(),n=t}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},Nt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,e,t,o,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=n,this.name=e,this._$AM=o,this.options=s,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=T}_$AI(n,e=this,t,o){let s=this.strings,r=!1;if(s===void 0)n=Lt(this,n,e,0),r=!Qt(n)||n!==this._$AH&&n!==Re,r&&(this._$AH=n);else{let a=n,l,d;for(n=s[0],l=0;l<s.length-1;l++)d=Lt(this,a[t+l],e,l),d===Re&&(d=this._$AH[l]),r||=!Qt(d)||d!==this._$AH[l],d===T?n=T:n!==T&&(n+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(n)}j(n){n===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},no=class extends Nt{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===T?void 0:n}},oo=class extends Nt{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==T)}},io=class extends Nt{constructor(n,e,t,o,s){super(n,e,t,o,s),this.type=5}_$AI(n,e=this){if((n=Lt(this,n,e,0)??T)===Re)return;let t=this._$AH,o=n===T&&t!==T||n.capture!==t.capture||n.once!==t.once||n.passive!==t.passive,s=n!==T&&(t===T||o);o&&this.element.removeEventListener(this.name,this,t),s&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},so=class{constructor(n,e,t){this.element=n,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(n){Lt(this,n)}};var hr=ro.litHtmlPolyfillSupport;hr?.(en,tn),(ro.litHtmlVersions??=[]).push("3.3.3");var Ti=(i,n,e)=>{let t=e?.renderBefore??n,o=t._$litPart$;if(o===void 0){let s=e?.renderBefore??null;t._$litPart$=o=new tn(n.insertBefore(Jt(),s),s,void 0,e??{})}return o._$AI(i),o};var co=globalThis,Ie=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Ti(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}};Ie._$litElement$=!0,Ie.finalized=!0,co.litElementHydrateSupport?.({LitElement:Ie});var mr=co.litElementPolyfillSupport;mr?.({LitElement:Ie});(co.litElementVersions??=[]).push("4.2.2");var Tn=i=>(n,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,n)}):customElements.define(i,n)};var pr={attribute:!0,type:String,converter:Xt,reflect:!1,hasChanged:Mn},gr=(i=pr,n,e)=>{let{kind:t,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),t==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),t==="accessor"){let{name:r}=e;return{set(a){let l=n.get.call(this);n.set.call(this,a),this.requestUpdate(r,l,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(t==="setter"){let{name:r}=e;return function(a){let l=this[r];n.call(this,a),this.requestUpdate(r,l,i,!0,a)}}throw Error("Unsupported decorator location: "+t)};function Ht(i){return(n,e)=>typeof e=="object"?gr(i,n,e):((t,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,t),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,n,e)}function $t(i){return Ht({...i,state:!0,attribute:!1})}var En={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Cn=i=>(...n)=>({_$litDirective$:i,values:n}),Rt=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,t){this._$Ct=n,this._$AM=e,this._$Ci=t}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var fe=Cn(class extends Rt{constructor(i){if(super(i),i.type!==En.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(n=>i[n]).join(" ")+" "}update(i,[n]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in n)n[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(n)}let e=i.element.classList;for(let t of this.st)t in n||(e.remove(t),this.st.delete(t));for(let t in n){let o=!!n[t];o===this.st.has(t)||this.nt?.has(t)||(o?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)))}return Re}});var Ai="important",fr=" !"+Ai,W=Cn(class extends Rt{constructor(i){if(super(i),i.type!==En.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((n,e)=>{let t=i[e];return t==null?n:n+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(i,[n]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let t of this.ft)n[t]==null&&(this.ft.delete(t),t.includes("-")?e.removeProperty(t):e[t]=null);for(let t in n){let o=n[t];if(o!=null){this.ft.add(t);let s=typeof o=="string"&&o.endsWith(fr);t.includes("-")||s?e.setProperty(t,s?o.slice(0,-11):o,s?Ai:""):e[t]=o}}return Re}});var Ei=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Ci=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],Di=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],uo=385000.49;var X=Math.PI/180,ze=180/Math.PI,br=1495978707e-1,Ni=6378.14,nn=-.833,Ge=-6,Ze=-12,qe=-18,Dn=6,sn=-4,Hi=-6,on=120*1e3;function rn(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Pt(i){return(i-2451545)/36525}function ie(i){let n=i%360;return n<0?n+360:n}function yr(i){let n=Pt(i);return 23.439291-.0130042*n-164e-9*n*n+504e-9*n*n*n}function $r(i){let n=i-2451545,e=Pt(i),t=280.46061837+360.98564736629*n+387933e-9*e*e-e*e*e/3871e4;return ie(t)}function ho(i){let n=Pt(i),e=ie(280.46646+n*(36000.76983+n*3032e-7)),t=ie(357.52911+n*(35999.05029-1537e-7*n)),o=Math.sin(t*X)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*t*X)*(.019993-101e-6*n)+Math.sin(3*t*X)*289e-6,s=e+o,r=ie(125.04-1934.136*n),a=s-.00569-.00478*Math.sin(r*X),d=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(r*X),u=a*X,p=d*X,m=ie(Math.atan2(Math.cos(p)*Math.sin(u),Math.cos(u))*ze),g=Math.asin(Math.sin(p)*Math.sin(u))*ze;return{ra:m,dec:g}}function wr(i){let n=Pt(i),e=ie(280.46646+n*(36000.76983+n*3032e-7)),t=ie(357.52911+n*(35999.05029-1537e-7*n)),o=Math.sin(t*X)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*t*X)*(.019993-101e-6*n)+Math.sin(3*t*X)*289e-6,s=ie(125.04-1934.136*n);return ie(e+o-.00569-.00478*Math.sin(s*X))}function _r(i){let n=rn(i),e=Pt(n),t=ie(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(t*X)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*t*X)*(.019993-101e-6*e)+Math.sin(3*t*X)*289e-6,r=(t+s)*X;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*br}function mo(i,n,e,t){let o=ie($r(t)+e),s=ie(o-i.ra),r=n*X,a=i.dec*X,l=s*X,d=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(l))*ze,u=ie(Math.atan2(Math.sin(l),Math.cos(l)*Math.sin(r)-Math.tan(a)*Math.cos(r))*ze+180);return{altitude:d,azimuth:u}}function an(i,n){let e=rn(i);return mo(ho(e),n.latitude,n.longitude,e).altitude}function Ln(i,n){let e=rn(i);return mo(ho(e),n.latitude,n.longitude,e)}function vr(i){let n=i;return{D:ie(297.8501921+445267.1114034*n-.0018819*n*n+n*n*n/545868-n*n*n*n/113065e3),M:ie(357.5291092+35999.0502909*n-1536e-7*n*n+n*n*n/2449e4),Mp:ie(134.9633964+477198.8675055*n+.0087414*n*n+n*n*n/69699-n*n*n*n/14712e3),F:ie(93.272095+483202.0175233*n-.0036539*n*n-n*n*n/3526e3+n*n*n*n/86331e4)}}function Ri(i){let n=Pt(i),e=ie(218.3164477+481267.88123421*n-.0015786*n*n+n*n*n/538841-n*n*n*n/65194e3),t=vr(n),o=e;for(let a of Ei){let l=a[0]*t.D+a[1]*t.M+a[2]*t.Mp+a[3]*t.F;o+=a[4]*Math.sin(l*X)}let s=0;for(let a of Ci){let l=a[0]*t.D+a[1]*t.M+a[2]*t.Mp+a[3]*t.F;s+=a[4]*Math.sin(l*X)}let r=uo;for(let a of Di){let l=a[0]*t.D+a[1]*t.M+a[2]*t.Mp+a[3]*t.F;r+=a[4]*Math.cos(l*X)}return{longitude:ie(o),latitude:s,distanceKm:r}}function zi(i,n,e){let t=yr(e)*X,o=i*X,s=n*X,r=ie(Math.atan2(Math.sin(o)*Math.cos(t)-Math.tan(s)*Math.sin(t),Math.cos(o))*ze),a=Math.asin(Math.sin(s)*Math.cos(t)+Math.cos(s)*Math.sin(t)*Math.sin(o))*ze;return{ra:r,dec:a}}function rt(i,n){let e=rn(i),t=Ri(e),o=zi(t.longitude,t.latitude,e),s=mo(o,n.latitude,n.longitude,e),r=Math.asin(Ni/t.distanceKm)*ze,a=s.altitude-r*Math.cos(s.altitude*X);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:t.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:t}}function xr(i){return .7275*(Math.asin(Ni/i)*ze)-.5667}var kr=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],Mr=29.530588853;function Nn(i){let n=rn(i),e=Ri(n),t=zi(e.longitude,e.latitude,n),o=ho(n),s=wr(n),r=_r(i),a=e.distanceKm,l=e.latitude*X,d=Math.acos(Math.min(1,Math.max(-1,Math.cos(l)*Math.cos((e.longitude-s)*X)))),u=Math.atan2(r*Math.sin(d),a-r*Math.cos(d)),p=ie(u*ze),m=(1+Math.cos(u))/2,g=(o.ra-t.ra)*X,f=o.dec*X,$=t.dec*X,x=ie(Math.atan2(Math.cos(f)*Math.sin(g),Math.sin(f)*Math.cos($)-Math.cos(f)*Math.sin($)*Math.cos(g))*ze),N=ie(e.longitude-s)/360,_=Math.min(7,Math.floor(N*8+.5)%8),D=N*29.530588853;return{illumination:m,phaseAngle:p,elongation:d*ze,phaseIndex:_,phaseKey:kr[_],brightLimbAngle:x,moonAgeDays:D,waxing:N<.5,distanceKm:a}}function zt(i,n,e,t,o){let s=[];if(!(n>i))return s;let r=Math.max(2,Math.ceil((n-i)/e)),a=(n-i)/r,l=i,d=t(i)-o;for(let u=1;u<=r;u++){let p=i+u*a,m=t(p)-o;if(d===0)s.push({time:l,rising:m>0});else if(d<0&&m>=0||d>0&&m<=0){let g=l,f=p,$=d;for(let x=0;x<50&&f-g>1;x++){let N=(g+f)/2,_=t(N)-o;_<0&&$<0||_>0&&$>0?(g=N,$=_):f=N}s.push({time:(g+f)/2,rising:m>d})}l=p,d=m}return s}function Li(i,n,e,t){let o=i.find(s=>s.rising===n&&s.time>=e&&s.time<t);return o?new Date(o.time):null}function po(i,n,e,t=4){let o=n.getTime()-27e5,s=e.getTime()+2700*1e3,r=n.getTime(),a=e.getTime(),l=M=>an(M,i),d=[],u=Math.max(3e4,Math.round(t*60*1e3));for(let M=r;M<a;M+=u)d.push({time:M,altitude:l(M)});d.push({time:a,altitude:l(a)});let p=-1/0,m=1/0;for(let M of d)M.altitude>p&&(p=M.altitude),M.altitude<m&&(m=M.altitude);let g=[["sunrise","sunset",nn],["civilDawn","civilDusk",Ge],["nauticalDawn","nauticalDusk",Ze],["astronomicalDawn","astronomicalDusk",qe]],f={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[M,E,v]of g){let C=zt(o,s,on,l,v);f[M]=Li(C,!0,r,a),f[E]=Li(C,!1,r,a)}let $=r,x=-1/0,N=120*1e3;for(let M=r;M<=a;M+=N){let E=l(M);E>x&&(x=E,$=M)}let _=Math.max(r,$-N),D=Math.min(a,$+N);for(let M=0;M<40&&D-_>1e3;M++){let E=_+(D-_)/3,v=D-(D-_)/3;l(E)<l(v)?_=E:D=v}f.solarNoon=new Date((_+D)/2);let H="none";return m>nn?H="polar-day":p<nn&&(H="polar-night"),{dayStart:n,dayEnd:e,samples:d,maxAltitude:p,minAltitude:m,events:f,polar:H}}function go(i,n,e,t=48){let o=typeof n=="number"?n:n.getTime();if(!Number.isFinite(o)||!Number.isFinite(e))return null;let s=a=>an(a,i),r=zt(o,o+t*60*60*1e3,on,s,e)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Pi(i,n,e,t,o=48){let s=typeof n=="number"?n:n.getTime();if(!Number.isFinite(s)||!(e<t))return null;let r=m=>an(m,i),a=s+o*60*60*1e3,l=[...zt(s,a,on,r,e),...zt(s,a,on,r,t)].sort((m,g)=>m.time-g.time),d=m=>m>=e&&m<=t,u=d(r(s)),p=u?s:null;for(let m of l){let g=d(r(m.time+1e3));if(p===null&&g)p=m.time;else if(p!==null&&!g)return{start:new Date(p),end:new Date(m.time),active:u}}return p===null?null:{start:new Date(p),end:null,active:u}}function Sr(i,n,e,t=10){let o=n.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(t*60*1e3)),a=[];for(let u=o;u<s;u+=r)a.push({time:u,altitude:rt(u,i).apparentAltitude});a.push({time:s,altitude:rt(s,i).apparentAltitude});let l=-1/0,d=1/0;for(let u of a)u.altitude>l&&(l=u.altitude),u.altitude<d&&(d=u.altitude);return{samples:a,maxAltitude:l,minAltitude:d}}function Oi(i,n,e,t,o=10){let s=n.getTime(),r=e.getTime(),a=l=>{if(!l)return null;let d=l.getTime();return d>=s&&d<r?d:null};return{profile:Sr(i,n,e,o),rise:a(t.previousRise)??a(t.nextRise),set:a(t.previousSet)??a(t.nextSet)}}function Ii(i,n){let e=i.getTime(),t=e-1800*60*1e3,o=e+1800*60*1e3,r=zt(t,o,on,g=>{let f=rt(g,n);return f.altitude-xr(f.distanceKm)},0),a=r.filter(g=>g.rising),l=r.filter(g=>!g.rising),d=a.find(g=>g.time>e)??null,u=[...a].reverse().find(g=>g.time<=e)??null,p=l.find(g=>g.time>e)??null,m=[...l].reverse().find(g=>g.time<=e)??null;return{previousRise:u?new Date(u.time):null,previousSet:m?new Date(m.time):null,nextRise:d?new Date(d.time):null,nextSet:p?new Date(p.time):null}}function Gi(i){return i>0?"day":i>Ge?"civil":i>Ze?"nautical":i>qe?"astronomical":"night"}function Tr(i){return(((Nn(i).moonAgeDays/Mr-.5)%1+1)%1+.5)%1-.5}function fo(i,n){let e=typeof i=="number"?i:i.getTime(),t=typeof n=="number"?n:n.getTime();return t>e?zt(e,t,360*60*1e3,Tr,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function Fi(i,n=32){let e=typeof i=="number"?i:i.getTime(),o=fo(e,e+n*24*60*60*1e3)[0];if(!o)return null;let s=Nn(o).illumination;return s<.98?null:{time:o,illumination:s}}function Ui(i,n,e=14){let t=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=t-e*24*60*60*1e3,r=t+e*24*60*60*1e3,a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,d=s,u=s;for(let p=s;p<=r;p+=o){let m=rt(p,n).distanceKm;m<a&&(a=m,d=p),m>l&&(l=m,u=p)}return{current:rt(t,n).distanceKm,min:a,minTime:new Date(d),max:l,maxTime:new Date(u),mean:uo}}function Hn(i,n,e="sun"){return(e==="sun"?Ln(i,n):rt(i,n)).azimuth}function k(i,n,e){return Number.isNaN(i)?n:Math.min(e,Math.max(n,i))}function bo(i,n,e){return i+(n-i)*e}function c(i,n=0){let e=10**n;return Math.round(i*e)/e}function Ki(i){let n=i.trim().replace(/^#/,""),e=n.length===3?n.split("").map(o=>o+o).join(""):n;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let t=Number.parseInt(e,16);return[t>>16&255,t>>8&255,t&255]}function Ar(i){return`#${i.map(n=>Math.round(k(n,0,255)).toString(16).padStart(2,"0")).join("")}`}function yo(i,n,e){let t=Ki(i),o=Ki(n);if(!t||!o)return n;let s=k(e,0,1);return Ar([bo(t[0],o[0],s),bo(t[1],o[1],s),bo(t[2],o[2],s)])}function $o(i){return typeof i=="number"&&Number.isFinite(i)}function Ce(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let n=Number(i.replace(",","."));if(Number.isFinite(n))return n}return null}function Wi(i){return i.length===0?"":i.map((n,e)=>`${e===0?"M":"L"}${c(n.x,2)} ${c(n.y,2)}`).join(" ")}function Rn(i,n=.5){if(i.length<3)return Wi(i);let e=[`M${c(i[0].x,2)} ${c(i[0].y,2)}`];for(let t=0;t<i.length-1;t++){let o=i[t-1]??i[t],s=i[t],r=i[t+1],a=i[t+2]??r,l=s.x+(r.x-o.x)/6*n*2,d=s.y+(r.y-o.y)/6*n*2,u=r.x-(a.x-s.x)/6*n*2,p=r.y-(a.y-s.y)/6*n*2;e.push(`C${c(l,2)} ${c(d,2)} ${c(u,2)} ${c(p,2)} ${c(r.x,2)} ${c(r.y,2)}`)}return e.join(" ")}function zn(i,n,e=!1){if(i.length===0)return"";let t=e?Rn(i):Wi(i),o=i[0],s=i[i.length-1];return`${t} L${c(s.x,2)} ${c(n,2)} L${c(o.x,2)} ${c(n,2)} Z`}function Xe(i,n,e){let t=e*Math.PI/180;return{x:i.x-n*Math.sin(t),y:i.y-n*Math.cos(t)}}function Bi(i,n,e){let t=k(e,0,1);if(t<=5e-4)return"";if(t>=.9995)return`M${c(i.x-n,2)} ${c(i.y,2)} a${c(n,2)} ${c(n,2)} 0 1 1 ${c(n*2,2)} 0 a${c(n,2)} ${c(n,2)} 0 1 1 ${c(-n*2,2)} 0 Z`;let o=n*(1-2*t),s=1,r=o>0?0:1,a={x:i.x-n,y:i.y},l={x:i.x+n,y:i.y};return`M${c(a.x,2)} ${c(a.y,2)} A${c(n,2)} ${c(n,2)} 0 0 ${s} ${c(l.x,2)} ${c(l.y,2)} A${c(n,2)} ${c(Math.abs(o),4)} 0 0 ${r} ${c(a.x,2)} ${c(a.y,2)} Z`}function ji(i=new Date){let n=i.getTime();return n+(6e4-n%6e4)+250}var Er=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Fe(i){let{size:n,illumination:e,brightLimbAngle:t,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:l}=i,d={x:n/2,y:n/2},u=Math.max(1,n/2-.5),p=Bi(d,u,e),m=r&&n>=26,g=c(-t,2);return b`
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
      ${p?b`<g transform="rotate(${g} ${c(d.x,2)} ${c(d.y,2)})">
              <path d="${p}" fill="${o}" />
              ${m?b`<g clip-path="url(#${l}-clip)" opacity="0.16">
                      <clipPath id="${l}-clip">
                        <path d="${p}" />
                      </clipPath>
                      ${Er.map(f=>{let $={x:d.x+f.x*u,y:d.y+f.y*u};return b`<circle
                          cx="${c($.x,2)}" cy="${c($.y,2)}"
                          r="${c(f.r*u,2)}"
                          fill="#5a6488" />`})}
                    </g>`:b``}
            </g>`:b``}
      <circle
        cx="${c(d.x,2)}" cy="${c(d.y,2)}" r="${c(u,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function wo(i,n,e,t){let o=Xe(i,n,e),s=e*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),l=k(n*.12,4,9),d=k(n*.07,2.5,5),u={x:o.x+r*l,y:o.y+a*l},p={x:o.x-a*d,y:o.y+r*d},m={x:o.x+a*d,y:o.y-r*d};return b`
    <polygon
      points="${c(u.x,2)},${c(u.y,2)} ${c(p.x,2)},${c(p.y,2)} ${c(m.x,2)},${c(m.y,2)}"
      fill="${t}"
      opacity="0.55"
    />
  `}var On="sun-moon-card",So="sun-moon-card",Xi="sun-moon-card-editor";function Ot(i){return i==="scene"?460:i==="clean"?400:340}var Cr=320,Dr=360;var Lr=24,Nr=16,_o=4,Hr=12,Rr=36,ln=[2,12],cn=[2,12],at=[320,1200],lt=[260,800];function It(i){return i?[Lr,800]:[120,800]}var P={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,moon_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",scene:"city",show_sun_info:!0,show_moon_info:!0,theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},Yi=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],Ji=400,Qi=250,es=1200*1e3,To={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},Ao={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},ts=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],Eo=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Pe={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon","scene","clean"],scene:["city","mountains","forest","coast","none"],remainingTimeFocus:["sun","next","golden_hour"]},ns=700,zr=260,Co=16,Do=4,os=72,Vi=10,Mo=56,Pr=84,Or=96,vo=74,Ir=Mo+8,Gr=12,Fr=10,_e=4,Pn=4,Zi=30,qi=44,Ur=26,Kr=72,Lo=96,xo=20,ko=18;function is(i,n,e){if(e.minimal_mode){let L=(e.minimal_show_times||e.minimal_show_zenith)&&i>=Rr?Hr:0,w=Math.max(Nr,i-2*_o-L);return{padding:_o,minimalTimesHeight:L,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,n-2*_o),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:w,minimal:!0,compact:!1}}let t=e.compact_mode,o=t?Fr:Gr,s=Math.max(40,i-2*o),r=0,a=e.show_footer&&!t?xo+_e:0,l=Zi+_e+qi+_e+a+(ko+Pn)+vo,d=e.show_header&&!t&&s>=l,u=d?Zi:0;s-=u,d&&(s-=_e,r+=_e);let p=t?Ur:qi,m=e.show_events&&s-(p+_e)-a>=Pr,g=m?p:0;s-=g,m&&(s-=_e,r+=_e);let f=e.show_astronomical_details?Lo:Kr,$=!t&&(e.show_sun||e.show_moon)&&s-(f+_e)-a>=Or,x=$?f:0;s-=x,$&&(s-=_e,r+=_e);let N=e.show_footer&&!t&&m&&s-(xo+_e)>=Ir,_=N?xo:0;s-=_,N&&(s-=_e,r+=_e);let D=Math.max(Mo,s),H=e.show_day_chart&&!t&&m&&D-ko-Pn>=vo,M=H?ko:0;H&&(r+=Pn);let E=Math.max(Mo,D-M-(H?Pn:0)),v=e.show_sky_view&&!t&&(e.show_sun||e.show_moon),C=v&&n>=ns&&E>=vo,A=Math.max(80,n-2*o),G=C?Math.round(Math.min(zr,(A-Vi)/3)):0,q=Math.max(120,C?A-Vi-G:A);return{padding:o,showHeader:d,showEvents:m,showDetails:$,showFooter:N,showLegend:H,skyViewSide:C,skyViewInline:!C&&v&&$,skyViewWidth:G,chartWidth:q,gaps:r,headerHeight:u,eventsHeight:g,detailsHeight:x,footerHeight:_,legendHeight:M,chartHeight:E,minimal:!1,minimalTimesHeight:0,compact:t}}function ss(i,n){return n==="clean"?i>=560?400:460:n==="scene"?i>=712?Math.round(Math.min(560,Math.max(440,i*.6))):520:i>=ns?Dr:Cr}function In(){return{type:`custom:${On}`,card_height:340}}var No={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",sceneNoon:"Solarer Mittag",sceneNoonShort:"Mittag",editorCardStyleScene:"Szene (Himmel mit Silhouette)",editorCardStyleClean:"Minimalistisch",cleanNow:"Jetzt",editorScene:"Szene",editorSceneCity:"Stadt",editorSceneMountains:"Berge",editorSceneForest:"Wald",editorSceneCoast:"K\xFCste",editorSceneNone:"Keine",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorGroupStyle:"Kartenstil & Aussehen",editorGroupLayout:"Gr\xF6\xDFe & Layout",editorGroupContent:"Inhalte",editorGroupCountdown:"Restzeit",editorGroupLocale:"Sprache & Zeit",editorGroupSource:"Entit\xE4ten & Standort",editorSunInfo:"Infofeld Sonnenstand",editorMoonInfo:"Infofeld Mond",editorSwitchCount:"{on} von {total} an",editorOff:"aus",editorDefault:"Standard",editorMoonEntityHint:"Die Mondphase wird berechnet; die Bezeichnung kann aus der Mond-Entit\xE4t (z. B. sensor.moon) \xFCbernommen werden.",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorMoonMarkerSize:"Gr\xF6\xDFe des Mondes (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",sceneNoon:"Solar noon",sceneNoonShort:"Noon",editorCardStyleScene:"Scene (sky with silhouette)",editorCardStyleClean:"Minimalist",cleanNow:"Now",editorScene:"Scene",editorSceneCity:"City",editorSceneMountains:"Mountains",editorSceneForest:"Forest",editorSceneCoast:"Coast",editorSceneNone:"None",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorGroupStyle:"Card style & appearance",editorGroupLayout:"Size & layout",editorGroupContent:"Content",editorGroupCountdown:"Countdown",editorGroupLocale:"Language & time",editorGroupSource:"Entities & location",editorSunInfo:"Sun position panel",editorMoonInfo:"Moon panel",editorSwitchCount:"{on} of {total} on",editorOff:"off",editorDefault:"default",editorMoonEntityHint:"The moon phase is computed; its name can be taken from the moon entity (e.g. sensor.moon).",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorMoonMarkerSize:"Moon marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function ue(i,n,e){let o=(No[i]??No.en)[n]??No.en[n]??String(n);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function wt(i,n){return((i&&i!=="auto"?i:n)??"").toLowerCase().startsWith("de")?"de":"en"}function ls(i,n,e){let t=i;if(t==="auto"&&n&&(n==="12"||n==="am_pm"?t="12":n==="24"&&(t="24")),t==="12")return!0;if(t==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var rs=new Map;function Ho(i,n,e){let t=`${n}|${i}`,o=rs.get(t);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(n,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(l=>l.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return rs.set(t,s),s}var as=new Map;function Wr(i,n,e){let t=`${i}|${n}|${e}`,o=as.get(t);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:n})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:n})}as.set(t,o)}return o}function se(i,n){return Wr(n.locale,n.timeZone,n.hour12).format(i)}function un(i,n){try{return new Intl.DateTimeFormat(n.locale,{weekday:"short",day:"numeric",month:"short",timeZone:n.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function Ro(i,n=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:n,maximumFractionDigits:n}).format(i)}catch{return i.toFixed(n)}}function ne(i,n=1,e="de-DE"){return`${Ro(i,n,e)}\xB0`}function Gn(i,n="de-DE"){return`${Ro(Math.round(i),0,n)} km`}function cs(i,n){return`${i<0?"\u2212":"+"}${Fn(Math.abs(i),n)}`}function Fn(i,n){let e=Math.max(0,Math.round(i));if(e<60)return n("countdownMinutes",{minutes:String(e)});let t=Math.floor(e/60),o=e%60;return t<24?n("countdownHours",{hours:String(t),minutes:String(o)}):n("countdownDays",{days:String(Math.floor(t/24)),hours:String(t%24)})}function Un(i,n){return n(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function Kn(i,n="de-DE"){return`${Ro(i*100,0,n)} %`}function Ue(i,n){let e=(i%360+360)%360,t=Eo[0],o=1/0;for(let r of Eo){let a=Math.abs((e-r.deg+540)%360-180);a<o&&(o=a,t=r)}let s=`dir${t.key}`;return ue(n,s)}function us(i,n,e,t){return{language:i,locale:n,timeZone:e,hour12:t,t:(o,s)=>ue(i,o,s)}}var ds="var(--smc-golden-hour, #f2b544)",Br="var(--smc-blue-hour, #4f6fd6)";function hs(i,n,e){let t=[],o=null;for(let s of i){let r=s.altitude>=n&&s.altitude<=e;r&&o===null&&(o=s.time),!r&&o!==null&&(t.push([o,s.time]),o=null)}return o!==null&&i.length&&t.push([o,i[i.length-1].time]),t}function ms(i,n){if(i.length<=n)return i;let e=i.length/n,t=[];for(let s=0;s<n;s++)t.push(i[Math.floor(s*e)]);let o=i[i.length-1];return t[t.length-1]!==o&&t.push(o),t}function jr(i,n,e,t,o){if(i.length<2)return null;let s=n.sunrise?.getTime(),r=n.sunset?.getTime(),a,l;if(s!==void 0&&r!==void 0&&r>s)a=t(s),l=t(r);else if(e==="polar-day")a=i[0].x,l=i[i.length-1].x;else return null;let d=i.filter(u=>u.x>=a-.5&&u.x<=l+.5);return d.length<2?null:{path:zn(d,o,!0),cx:(a+l)/2,cy:o,r:Math.max(6,(l-a)/2)}}function Vr(i,n){let e=n?Math.max(i.maxAltitude,n.maxAltitude):i.maxAltitude,t=n?Math.min(i.minAltitude,n.minAltitude):i.minAltitude,o=Math.min(t,-18),s=Math.max(3,(e-o)*.1),r=k(e+s,-18,90.5);return[k(Math.max(-28,t-2),-90,r-6),r]}function zo(i,n,e=2.2){let t=[0,Ge,Ze,qe],o=[n.day,n.civil,n.nautical,n.astronomical,n.night];if(i>e/2){let s=k(1-i/12,0,1)*.5;return yo(n.day,n.glow,s)}for(let s=0;s<t.length;s++){let r=t[s]+e/2,a=t[s]-e/2;if(i>=r)return o[s];if(i>a){let l=(r-i)/e;return yo(o[s],o[s+1],l*l*(3-2*l))}}return o[o.length-1]}function Zr(i,n,e,t=24){let o=[];for(let s=0;s<=t;s++){let r=s/t,a=n+e*(1-r);o.push({offset:r,color:zo(a,i)})}return o}function qr(i,n,e,t,o,s){let r=i.samples;if(r.length<2)return[];let a=[],l=(u,p)=>{u&&!Number.isNaN(u.getTime())&&a.push({time:u.getTime(),color:p})};l(n.astronomicalDawn,e.astronomical),l(n.nauticalDawn,e.nautical),l(n.civilDawn,e.civil),l(n.sunrise,e.glow),l(n.solarNoon,e.day),l(n.sunset,e.glow),l(n.civilDusk,e.civil),l(n.nauticalDusk,e.nautical),l(n.astronomicalDusk,e.astronomical);let d=[{offset:0,color:zo(r[0].altitude,e)},...a.map(u=>({offset:k((t(u.time)-o)/s,0,1),color:u.color})),{offset:1,color:zo(r[r.length-1].altitude,e)}];return d.sort((u,p)=>u.offset-p.offset),d}function Po(i){let{profile:n,events:e,now:t,width:o,height:s,palette:r,format:a,showSun:l,showMoon:d,moon:u,moonPath:p,showTwilight:m,twilightLevel:g,animations:f,cardStyle:$,minimal:x,sunMarkerSize:N,uid:_,showAstronomicalLayers:D,currentAltitude:H,countdown:M=null,showGoldenHour:E=!1}=i,v=Math.max(x?60:120,o),C=Math.max(x?12:56,s),A=x?2:4,G=x?2:4,q=x?2:6,z=!x&&C>=112,B=z?k(c(C*.13,1),13,20):0,L=A,w=Math.max(10,v-A-G),I=q,Z=Math.max(10,C-q-B),F=I+Z,[Q,J]=Vr(n,p?.profile??null),ve=Math.max(1,J-Q),U=n.dayStart.getTime(),ee=n.dayEnd.getTime(),Me=Math.max(1,ee-U),re=y=>L+(y-U)/Me*w,me=y=>F-(k(y,-95,95)-Q)/ve*Z,O=me(0),ae=k(Math.round(w/1.6),60,361),ce=ms(n.samples,ae).map(y=>({x:re(y.time),y:me(y.altitude)})),j=Zr(r,Q,ve),be=qr(n,e,r,re,L,w),Se=`${_}-area`,ye=`${_}-line`,Je=`${_}-clip`,mn=`${_}-glow`,Qe=`${_}-sky`,xe=`${_}-soft`,et=`${_}-soft-fade`,Ft=`${_}-foot`,Ut=`${_}-foot-fade`,xt=`${_}-side`,Ke=`${_}-side-fade`,pe=$==="horizon",pn=zn(ce,pe?c(O,2):F+1,!0),Kt=Rn(ce),tt=p?ms(p.profile.samples,k(Math.round(w/2),40,240)).map(y=>({x:re(y.time),y:me(y.altitude)})):null,kt=tt&&!x?Rn(tt):null,We="var(--smc-moon-line, #cbd5e1)",Be=k(c(C*.013,2),1.1,1.9),Mt=zn(ce,I-1,!0),ke=$==="flat"?.6:pe?.3:1,St=pe?0:c(.15*ke,3),Le=I-1,ht=F+1,Te=Math.max(1,ht-Le),Wt=k(Z*.14,x?1.5:6,18),R=k(Z*.08,x?1:4,12),le=k(w*.02,x?2:6,14),nt=k(c(Z*.06,1),x?1.5:4,10),Tt=c(k(Wt/Te,0,.45),4),At=c(1-k(R/Te,0,.45),4),$e=L-1,ot=L+w+1,Et=c(k(le/Math.max(1,ot-$e),0,.4),4),Is=Math.max(16,w*.16),Gs=k(Z*.45,9,46),gn=[];Z>=34&&(e.sunrise&&gn.push({id:`${_}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&gn.push({id:`${_}-glow-set`,time:e.sunset,color:r.glow}));let Ct=x?null:jr(ce,e,n.polar,re,O),qo=`${_}-dome`,he=a.t,fn=[],Bt=y=>{y.time&&!Number.isNaN(y.time.getTime())&&fn.push({secondary:!1,...y})};if(e.sunrise&&Bt({key:"sunrise",time:e.sunrise,label:he("sunrise"),shortLabel:he("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&Bt({key:"sunset",time:e.sunset,label:he("sunset"),shortLabel:he("sunsetShort"),kind:"sunset",altitude:0}),m&&(e.civilDawn&&Bt({key:"civilDawn",time:e.civilDawn,label:he("civilDawn"),shortLabel:he("civilDawnShort"),kind:"dawn",altitude:Ge}),e.civilDusk&&Bt({key:"civilDusk",time:e.civilDusk,label:he("civilDusk"),shortLabel:he("civilDuskShort"),kind:"dusk",altitude:Ge}),g==="all"||D)){let y=[["nauticalDawn","dawn","nauticalDawn",Ze],["nauticalDusk","dusk","nauticalDusk",Ze],["astronomicalDawn","dawn","astronomicalDawn",qe],["astronomicalDusk","dusk","astronomicalDusk",qe]];for(let[K,V,oe,te]of y){let ge=e[K];ge&&Bt({key:K,time:ge,label:he(oe),shortLabel:he(oe),kind:V,altitude:te,secondary:!0})}}fn.sort((y,K)=>y.time.getTime()-K.time.getTime());let Dt=k(c(C*.062,1),7.5,10.5),bn=k(c(Dt+5,1),11,B||15),Xo=y=>y.secondary?2:y.kind==="sunrise"||y.kind==="sunset"?0:1,Fs=w<240?3:w<340?4:6,Yo=x?[]:[...fn].sort((y,K)=>Xo(y)-Xo(K)||y.time.getTime()-K.time.getTime()).slice(0,Math.max(2,Fs)),Jo=w<260,Us=!Jo&&(Yo.length>3||w<340),Qo=4,Ks=Math.max(8,Dt*1.2),mt=[];for(let y of Yo){let K=Jo?se(y.time,a):Us?y.shortLabel:y.label,V=K.length*Dt*.56+8,oe=k(re(y.time.getTime()),L+V/2,L+w-V/2),te=Oe=>mt.some(pt=>Math.abs(pt.x-Oe)<(pt.width+V)/2+Qo),ge=te(oe)?null:oe;if(ge===null)for(let Oe of mt){let pt=(Oe.width+V)/2+Qo;for(let gt of[Oe.x+pt,Oe.x-pt])if(Math.abs(gt-oe)<=Ks&&gt-V/2>=L-.5&&gt+V/2<=L+w+.5&&!te(gt)){ge=gt;break}if(ge!==null)break}ge!==null&&mt.push({x:ge,width:V,text:K,secondary:y.secondary})}mt.sort((y,K)=>y.x-K.x);let we=k(re(t.getTime()),L,L+w),Ws=r.day,it=k(c(C*.16,1),Math.min(2.8,N),N),ei=k(c(it*.22,2),.8,1.4),je=k(c(it*1.1,1),3.5,7),ti=(y,K)=>Z<=K*2?I+Z/2:k(me(y),I+K,F-K),ni=ti(H,it),oi=E&&!x?[...hs(n.samples,sn,Dn).map(y=>({range:y,kind:"golden",color:ds,key:"goldenHour"})),...hs(n.samples,Hi,sn).map(y=>({range:y,kind:"blue",color:Br,key:"blueHour"}))].map(({range:y,kind:K,color:V,key:oe})=>{let te=k(re(y[0]),L,L+w),ge=k(re(y[1]),L,L+w);return{x:te,width:ge-te,kind:K,color:V,title:`${he(oe)} ${se(new Date(y[0]),a)}\u2013${se(new Date(y[1]),a)}`}}).filter(y=>y.width>=.5):[],Ae=(()=>{if(x||!M)return null;let y=M.time.getTime();if(!(y>t.getTime()))return null;let V=Q<0&&J>0?me(0):F-1,oe=re(y),te=k(oe,L,L+w);if(te-we<2)return null;let ge=M.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":M.body==="twilight"?r.civil:M.body==="golden"?ds:r.day;return{y:V,endX:te,endsInside:oe<=L+w,color:ge}})(),qn=k(c(C*.016,1),2,3),Ee=(()=>{if(x||!M?.label)return null;let y=Dt,K=y+5,V=M.label.length*y*.56+10,oe=Math.max(it,3)+3,te=we+oe,ge=te+V<=L+w?te:Math.max(L,we-oe-V),Oe=z||mt.length===0?I+1:I+bn+3;return{x:ge,y:Oe,width:V,height:K,fontSize:y}})(),Ne=d&&u&&!x?{altitude:u.altitude,y:ti(u.altitude,je),clamped:u.altitude<Q||u.altitude>J}:null,Bs=Ne?Math.abs(Ne.y-ni):Number.POSITIVE_INFINITY,Xn=it+je+2,jt=Ne?Bs>=it+je+1?we:we+Xn+je<=L+w?we+Xn:Math.max(L+je,we-Xn):null,js=f?"smc-pulse":"",Vs=f?`url(#${mn})`:"",Yn=[{altitude:0,label:he("horizon"),key:"horizon"}];D||g==="all"?Yn.push({altitude:Ge,label:`${he("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Ze,label:`${he("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:qe,label:`${he("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&Yn.push({altitude:Ge,label:`${he("refCivil")} (\u22126\xB0)`,key:"civil"});let Zs=!x&&Z>=86&&w>=250,qs=Yn.filter(y=>(!x||y.key==="horizon")&&y.altitude>Q+.5&&y.altitude<J-.5),Xs=k(c(C*.055,1),7.5,9.5),Vt=e.solarNoon,ii=!x&&!!Vt&&n.maxAltitude>0&&Z>=104&&w>=220&&D,si=ii?`${he("zenith")} ${se(Vt,a)} \xB7 ${ne(n.maxAltitude,1,a.locale)}`:"",yn=k(c(C*.055,1),7.5,9.5),$n=si.length*yn*.56+10,ri=Vt?k(re(Vt.getTime()),L+$n/2,L+w-$n/2):0,ai=Vt?me(n.maxAltitude):0,wn=yn+5,li=k(ai-wn-4,I,Math.max(I,ai+10)),ci=x?1:w<220?4:w<420?6:8,ui=[];for(let y=1;y<ci;y++)ui.push(L+w*y/ci);return b`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(v,1)} ${c(C,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${he("title")}"
    >
      <defs>
        <linearGradient id="${Se}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(I,1)}" x2="0" y2="${c(F,1)}">
          ${j.map(y=>b`<stop offset="${c(y.offset*100,3)}%" stop-color="${y.color}" />`)}
        </linearGradient>
        <linearGradient id="${ye}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(I,1)}" x2="0" y2="${c(F,1)}">
          ${j.map(y=>b`<stop offset="${c(y.offset*100,3)}%" stop-color="${y.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${be.length>=2?b`<linearGradient id="${Qe}" gradientUnits="userSpaceOnUse"
                x1="${c(L,1)}" y1="0" x2="${c(L+w,1)}" y2="0">
                ${be.map(y=>b`<stop offset="${c(y.offset*100,3)}%" stop-color="${y.color}" />`)}
              </linearGradient>`:b``}
        ${gn.map(y=>b`<radialGradient id="${y.id}">
              <stop offset="0%" stop-color="${y.color}" stop-opacity="${c(.5*ke,3)}" />
              <stop offset="45%" stop-color="${y.color}" stop-opacity="${c(.2*ke,3)}" />
              <stop offset="100%" stop-color="${y.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${Ct?b`<radialGradient id="${qo}" gradientUnits="userSpaceOnUse"
                cx="${c(Ct.cx,1)}" cy="${c(Ct.cy,1)}" r="${c(Ct.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${c(.3*ke,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${c(.18*ke,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:b``}
        <linearGradient id="${et}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(Le,1)}" x2="0" y2="${c(ht,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Tt}" stop-color="#ffffff" />
          <stop offset="${At}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${xe}" maskUnits="userSpaceOnUse"
          x="${c(L-2,1)}" y="${c(Le,1)}"
          width="${c(w+4,1)}" height="${c(Te,1)}">
          <rect
            x="${c(L-2,1)}" y="${c(Le,1)}"
            width="${c(w+4,1)}" height="${c(Te,1)}"
            fill="url(#${et})" />
        </mask>
        <linearGradient id="${Ut}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(Le,1)}" x2="0" y2="${c(ht,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${At}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Ft}" maskUnits="userSpaceOnUse"
          x="${c(L-2,1)}" y="${c(Le,1)}"
          width="${c(w+4,1)}" height="${c(Te,1)}">
          <rect
            x="${c(L-2,1)}" y="${c(Le,1)}"
            width="${c(w+4,1)}" height="${c(Te,1)}"
            fill="url(#${Ut})" />
        </mask>
        <linearGradient id="${Ke}" gradientUnits="userSpaceOnUse"
          x1="${c($e,1)}" y1="0" x2="${c(ot,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Et}" stop-color="#ffffff" />
          <stop offset="${c(1-Et,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${xt}" maskUnits="userSpaceOnUse"
          x="${c($e,1)}" y="${c(Le,1)}"
          width="${c(ot-$e,1)}" height="${c(Te,1)}">
          <rect
            x="${c($e,1)}" y="${c(Le,1)}"
            width="${c(ot-$e,1)}" height="${c(Te,1)}"
            fill="url(#${Ke})" />
        </mask>
        <clipPath id="${Je}">
          <rect x="${c(L-1,1)}" y="${c(I-2,1)}"
            width="${c(w+2,1)}" height="${c(Z+4,1)}"
            rx="${nt}" ry="${nt}" />
        </clipPath>
        ${f?b`<filter id="${mn}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${c(it*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:b``}
      </defs>

      <g clip-path="url(#${Je})">
        ${ui.map(y=>b`<line x1="${c(y,1)}" y1="${c(I,1)}" x2="${c(y,1)}" y2="${c(F,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${xt})">
        <path d="${pn}" fill="url(#${Se})" opacity="0.9" mask="url(#${Ft})" />
        <g mask="url(#${xe})">
          ${be.length>=2&&!pe?b`<path d="${Mt}" fill="url(#${Qe})" opacity="${St}" />`:b``}
          ${gn.map(y=>{let K=k(re(y.time.getTime()),L,L+w),V=k(O,I,F);return b`<ellipse
                cx="${c(K,1)}" cy="${c(V,1)}"
                rx="${c(Is,1)}" ry="${c(Gs,1)}"
                fill="url(#${y.id})" />`})}
          ${Ct&&!pe?b`<path d="${Ct.path}" fill="url(#${qo})" opacity="0.95" />`:b``}
        </g>
        </g>
        ${oi.length?b`<g class="hour-bands">
                ${oi.map(y=>b`<g class=${y.kind}>
                    <title>${y.title}</title>
                    <rect
                      x="${c(y.x,1)}" y="${c(I,1)}"
                      width="${c(y.width,1)}" height="${c(Z,1)}"
                      fill="${y.color}" opacity="${y.kind==="golden"?.16:.2}" />
                    <rect
                      x="${c(y.x,1)}" y="${c(F-3,1)}"
                      width="${c(y.width,1)}" height="3"
                      fill="${y.color}" opacity="0.85" />
                  </g>`)}
              </g>`:b``}
        ${kt?b`<path
                class="moon-curve"
                data-body="moon"
                d="${kt}"
                fill="none"
                stroke="${We}"
                stroke-width="${Be}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${pe?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:b``}
        ${p&&kt?b`<g class="moon-events">
                ${[[p.rise,"moonrise"],[p.set,"moonset"]].filter(y=>y[0]!==null).map(([y,K])=>{let V=k(re(y),L,L+w),oe=k(me(0),I,F),te=k(c(C*.05,1),4,8);return b`<g>
                      <title>${a.t(K)} ${se(new Date(y),a)}</title>
                      <line
                        x1="${c(V,1)}"
                        y1="${c(oe-te,1)}"
                        x2="${c(V,1)}"
                        y2="${c(oe+te,1)}"
                        stroke="${We}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${c(V,1)}"
                        cy="${c(oe,1)}"
                        r="${k(c(C*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${We}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:b``}
        <path
          d="${Kt}"
          fill="none"
          stroke="url(#${ye})"
          stroke-width="${k(c(C*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${qs.map(y=>{let K=me(y.altitude),V=y.key==="horizon";return b`<g>
            <line
              x1="${c(L,1)}" y1="${c(K,1)}"
              x2="${c(L+w,1)}" y2="${c(K,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${V&&pe?1.5:V?1:.6}"
              stroke-dasharray="${V&&pe?"999 0":V?"3 3":"2 4"}"
              opacity="${V&&pe?.9:V?.6:pe?.3:.45}"
            />
            ${Zs?b`<text
                    x="${c(L+3,1)}"
                    y="${c(K-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${Xs}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${y.label}</text>`:b``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${fn.map(y=>{let K=k(re(y.time.getTime()),L,L+w),V=k(me(y.altitude),I,F),oe=!y.secondary,te=oe?k(c(C*.022,1),1.8,3):1.4,ge="var(--smc-marker-strong, rgba(255,255,255,0.9))",Oe="var(--smc-marker-soft, rgba(255,255,255,0.55))",pt=y.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":y.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":y.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",gt=oe?pt:Oe,Ys=oe?ge:Oe,Js=y.kind==="sunrise"||y.kind==="sunset"?b`
                <circle cx="${c(K,1)}" cy="${c(V,1)}" r="${te+1}"
                  fill="${y.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${c(K-te*2.6,1)}"
                  y1="${c(y.kind==="sunrise"?V+te+2:V-te-2,1)}"
                  x2="${c(K+te*2.6,1)}"
                  y2="${c(y.kind==="sunrise"?V+te+2:V-te-2,1)}"
                  stroke="${ge}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:b`<circle cx="${c(K,1)}" cy="${c(V,1)}" r="${te}"
                  fill="${Ys}" opacity="0.85" />`;return b`<g>
            <line
              x1="${c(K,1)}" y1="${c(I,1)}"
              x2="${c(K,1)}" y2="${c(F,1)}"
              stroke="${gt}" stroke-width="${oe?1:.7}"
              stroke-dasharray="3 3" opacity="${oe?.5:.25}" />
            ${Js}
          </g>`})}
      </g>

      ${Ae?b`<g class="countdown-track">
              <title>${M.title}</title>
              <line
                x1="${c(we,1)}" y1="${c(Ae.y,1)}"
                x2="${c(Ae.endX,1)}" y2="${c(Ae.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${c(qn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${c(we,1)}" y1="${c(Ae.y,1)}"
                x2="${c(Ae.endX,1)}" y2="${c(Ae.y,1)}"
                stroke="${Ae.color}"
                stroke-width="${qn}"
                stroke-linecap="round" />
              ${Ae.endsInside?b`<circle
                      cx="${c(Ae.endX,1)}"
                      cy="${c(Ae.y,1)}"
                      r="${c(qn+.8,1)}"
                      fill="${Ae.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:b``}
            </g>`:b``}

      <g class="now-marker">
        <line
          x1="${c(we,1)}" y1="${c(I,1)}"
          x2="${c(we,1)}" y2="${c(F,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${k(c(C*.012,2),1,1.8)}"
          opacity="0.85" />
        ${l?b`<g class="now-sun ${js}" filter="${Vs}">
                <title>${a.t("chartSunNow",{altitude:ne(H,1,a.locale)})}</title>
                <circle
                  cx="${c(we,1)}"
                  cy="${c(ni,1)}"
                  r="${it}"
                  fill="${Ws}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${ei}"
                />
              </g>`:b``}
        ${Ne&&jt!==null&&u?b`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:ne(Ne.altitude,1,a.locale)})}${Ne.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${jt===we?b``:b`<line
                        x1="${c(we,1)}"
                        y1="${c(Ne.y,1)}"
                        x2="${c(jt,1)}"
                        y2="${c(Ne.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${c(jt,1)}"
                  cy="${c(Ne.y,1)}"
                  r="${c(je+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${ei}" />
                <g
                  transform="translate(${c(jt-je,1)} ${c(Ne.y-je,1)})"
                  opacity="${Ne.clamped?.6:1}"
                >
                  ${Fe({size:c(je*2,1),illumination:u.illumination,brightLimbAngle:u.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${_}-moon-now`})}
                </g>
              </g>`:b``}
      </g>

      ${ii?b`<g class="zenith-chip">
              <rect
                x="${c(ri-$n/2,1)}"
                y="${c(li,1)}"
                width="${c($n,1)}"
                height="${c(wn,1)}"
                rx="${c(wn/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${c(ri,1)}"
                y="${c(li+wn/2+yn*.36,1)}"
                text-anchor="middle"
                font-size="${yn}"
                fill="var(--smc-label-color, #ffffff)"
              >${si}</text>
            </g>`:b``}

      ${Ee?b`<g class="countdown-label">
              <title>${M.title}</title>
              <rect
                x="${c(Ee.x,1)}"
                y="${c(Ee.y,1)}"
                width="${c(Ee.width,1)}"
                height="${c(Ee.height,1)}"
                rx="${c(Ee.height/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.9" />
              <text
                x="${c(Ee.x+Ee.width/2,1)}"
                y="${c(Ee.y+Ee.height/2+Ee.fontSize*.36,1)}"
                text-anchor="middle"
                font-size="${Ee.fontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${M.label}</text>
            </g>`:b``}

      ${z?b`<line
              x1="${c(L,1)}" y1="${c(F+.5,1)}"
              x2="${c(L+w,1)}" y2="${c(F+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:b``}

      ${mt.length?b`<g class="event-labels" font-size="${Dt}">
              ${mt.map(y=>{let K=z?F+2:I;return b`<g>
                  <rect
                    x="${c(y.x-y.width/2,1)}"
                    y="${c(K,1)}"
                    width="${c(y.width,1)}"
                    height="${c(bn,1)}"
                    rx="${c(bn/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${y.secondary?.6:.88}" />
                  <text
                    x="${c(y.x,1)}"
                    y="${c(K+bn/2+Dt*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${y.secondary?.75:1}"
                  >${y.text}</text>
                </g>`})}
            </g>`:b``}
    </svg>
  `}var Xr=50,Yr=44,ps=[[0,"#8f9fd6","#f4a97c"],[12,"#9aaedf","#f7bf8e"],[30,"#a8c4ea","#f6dcb4"],[52,"#b4cdee","#eef0f4"],[66,"#8d9cd8","#d9c3dc"],[78,"#3c4590","#6b6fb4"],[90,"#232a68","#3b428a"],[100,"#1b2159","#323a80"]],Jr=[[.13,.55,90,"#f6c2c0",.55],[.3,.42,60,"#fbd9cf",.45],[.58,.3,85,"#ffffff",.55],[.47,.14,50,"#ffffff",.35]];function ct(i){let n=i;return()=>{n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var h=i=>String(c(i,1));function gs(i,n,e,t,o,s,r,a){let l=-6,d=`M${h(l)},${h(t)}`;for(;l<n+6;){let u=10+i()*28,p=o+i()*(s-o),m=e-p,g=i();if(d+=`L${h(l)},${h(m)}`,g<.12?d+=`L${h(l+u/2)},${h(m-u*.45)}L${h(l+u)},${h(m)}`:g<.2?d+=`A${h(u/2)},${h(u*.42)} 0 0 1 ${h(l+u)},${h(m)}`:g<.28?d+=`L${h(l+u*.42)},${h(m)}L${h(l+u/2)},${h(m-p*.55)}L${h(l+u*.58)},${h(m)}L${h(l+u)},${h(m)}`:g<.38?d+=`L${h(l+u*.6)},${h(m)}L${h(l+u*.6)},${h(m-12)}L${h(l+u*.64)},${h(m-12)}L${h(l+u*.64)},${h(m)}L${h(l+u)},${h(m)}`:g<.48?d+=`L${h(l+u*.25)},${h(m)}L${h(l+u*.25)},${h(m-7)}L${h(l+u*.75)},${h(m-7)}L${h(l+u*.75)},${h(m)}L${h(l+u)},${h(m)}`:d+=`L${h(l+u)},${h(m)}`,r>0&&l>n*.7)for(let f=m+5;f<e-4;f+=6)for(let $=l+3;$<l+u-3;$+=5)i()<r&&a.push({x:$,y:f,w:1.8,h:2.4,opacity:.55+i()*.4});if(l+=u,i()<.18){let f=4+i()*10,$=e-o*.4;d+=`L${h(l)},${h($)}L${h(l+f)},${h($)}`,l+=f}}return`${d}L${h(l)},${h(t)}Z`}function fs(i,n,e,t,o,s){let r=Array.from({length:s},(d,u)=>({x:(u+.2+i()*.6)/s*n,h:o*(.45+i()*.55),w:n/s*(.9+i()*.9)})),a=Math.max(40,Math.round(n/6)),l=`M-4,${h(t)}`;for(let d=0;d<=a;d++){let u=-4+(n+8)*d/a,p=o*.12;for(let m of r)p=Math.max(p,m.h*(1-Math.abs(u-m.x)/m.w));p+=(i()-.5)*o*.06,l+=`L${h(u)},${h(e-k(p,2,o))}`}return`${l}L${h(n+4)},${h(t)}Z`}function bs(i,n,e,t,o,s){let r=d=>Math.sin(d/n*Math.PI*1.6+.6)*o*.35,a=`M-4,${h(t)}L-4,${h(e-r(-4))}`,l=-4;for(;l<n+4;){let d=o+i()*(s-o),u=e-r(l);if(i()<.72){let p=d*(.42+i()*.12);a+=`L${h(l)},${h(u)}L${h(l+p*.5)},${h(u-d)}L${h(l+p)},${h(u)}`,l+=p*(.55+i()*.25)}else{let p=d*.32;a+=`L${h(l)},${h(u)}L${h(l)},${h(u-d*.35)}A${h(p)},${h(p)} 0 1 1 ${h(l+p*1.6)},${h(u-d*.35)}L${h(l+p*1.6)},${h(u)}`,l+=p*1.6+i()*4}}return`${a}L${h(n+4)},${h(t)}Z`}function Qr(i,n,e,t,o){let s=[];switch(i){case"city":{let r=gs(ct(11),n,e,t,18*o,44*o,0,s),a=n*.8,l=84*o,d=`M${h(a-1.6)},${h(e)}L${h(a-1.6)},${h(e-l)}L${h(a-.6)},${h(e-l)}L${h(a-.6)},${h(e-l-16)}L${h(a+.6)},${h(e-l-16)}L${h(a+.6)},${h(e-l)}L${h(a+1.6)},${h(e-l)}L${h(a+1.6)},${h(e)}ZM${h(a+5.5)},${h(e-l*.72)}A5.5,5.5 0 1 0 ${h(a-5.5)},${h(e-l*.72)}A5.5,5.5 0 1 0 ${h(a+5.5)},${h(e-l*.72)}Z`,u=gs(ct(23),n,e,t,8*o,28*o,.07,s);return{back:`${r}${d}`,front:u,lights:s,waterTop:null}}case"mountains":return{back:fs(ct(5),n,e,t,78*o,6),front:fs(ct(9),n,e+2,t,40*o,9),lights:s,waterTop:null};case"forest":return{back:bs(ct(17),n,e-6*o,t,22*o,46*o),front:bs(ct(29),n,e+4*o,t,12*o,28*o),lights:s,waterTop:null};case"coast":{let r=e-10*o,a=ct(31),l=`M-4,${h(r)}`;for(let f=0;f<=24;f++){let $=-4+n*.55*f/24,x=Math.sin(f/24*Math.PI)*30*o+a()*4*o;l+=`L${h($)},${h(r-x)}`}l+=`L${h(n*.55)},${h(r)}Z`;let d=n*.72,u=n*.84,p=r-14*o,m=46*o,g=`M${h(d)},${h(r)}Q${h(d+n*.06)},${h(p)} ${h(u-10)},${h(p)}L${h(n+4)},${h(p+2)}L${h(n+4)},${h(r)}ZM${h(u-4.5)},${h(p)}L${h(u-2.8)},${h(p-m)}L${h(u+2.8)},${h(p-m)}L${h(u+4.5)},${h(p)}ZM${h(u-3.6)},${h(p-m)}L${h(u)},${h(p-m-8)}L${h(u+3.6)},${h(p-m)}Z`;return s.push({x:u-1.6,y:p-m-4.5,w:3.2,h:3,opacity:.95}),{back:l,front:g,lights:s,waterTop:r}}default:return null}}var dn=new Map;function ea(i,n,e,t,o){let s=[i,c(n,0),c(e,0),c(t,0),o].join("|");return dn.has(s)||(dn.size>24&&dn.clear(),dn.set(s,Qr(i,n,e,t,o))),dn.get(s)??null}function ys(i){let{profile:n,events:e,now:t,format:o,scene:s,showSun:r,showMoon:a,moonPath:l,moon:d,currentAltitude:u,animations:p,uid:m}=i,g=o.t,f=Math.max(160,i.width),$=Math.max(140,i.height),x=f<480,N=x?Yr:Xr,_=14,D=$-N-4,H=n.samples,M=n.dayStart.getTime(),E=n.dayEnd.getTime(),v=Math.max(1,E-M),C=R=>(R-M)/v*f,A=Math.max(12,n.maxAltitude+8),G=-16,q=R=>_+(A-R)/(A-G)*(D-_),z=q(0),B=k(C(t.getTime()),0,f),L=R=>R.map((le,nt)=>`${nt?"L":"M"}${h(C(le.time))},${h(q(le.altitude))}`).join(""),w={skyTop:`${m}-sky-top`,skyHor:`${m}-sky-hor`,horFade:`${m}-hor-fade`,horMask:`${m}-hor-mask`,soft:`${m}-soft`,softer:`${m}-softer`,sunGlow:`${m}-sun-glow`,sunCore:`${m}-sun-core`,moonGlow:`${m}-moon-glow`,dayFill:`${m}-day-fill`,dayFade:`${m}-day-fade`,nightFill:`${m}-night-fill`,curve:`${m}-curve`,band:`${m}-band`,horizonLine:`${m}-horizon-line`,back:`${m}-scene-back`,front:`${m}-scene-front`,water:`${m}-water`,above:`${m}-above`,below:`${m}-below`,past:`${m}-past`,future:`${m}-future`},I=ct(7),Z=[];for(let R=0;R<(x?45:90);R++){let le=I()*f,nt=_+I()*(z-_-6),Tt=k((le/f-.68)/.12,0,1)*(.4+I()*.6),At=.5+I()*.9;Tt>.04&&Z.push(b`<circle cx="${h(le)}" cy="${h(nt)}" r="${c(At,2)}" fill="#fff"
        opacity="${c(Tt,2)}" />`)}let F=Math.min(1,f/740),Q=Jr.map(([R,le,nt,Tt,At])=>{let $e=nt*F,ot=R*f,Et=_+le*(z-_);return b`<g opacity="${At}" fill="${Tt}" filter="url(#${w.soft})">
      <ellipse cx="${h(ot)}" cy="${h(Et)}" rx="${h($e)}" ry="${h($e*.22)}" />
      <ellipse cx="${h(ot-$e*.35)}" cy="${h(Et+3)}" rx="${h($e*.5)}" ry="${h($e*.18)}" />
      <ellipse cx="${h(ot+$e*.3)}" cy="${h(Et-4)}" rx="${h($e*.45)}" ry="${h($e*.2)}" />
    </g>`}),J=$-N+8,U=ea(s,f,J,$,x?.8:1),ee=H.length?L(H):"",Me=H[0],re=H[H.length-1],me=H.length?`${ee}L${h(C(re.time))},${h(z)}L${h(C(Me.time))},${h(z)}Z`:"",O=H.length?`${ee}L${h(C(re.time))},${h($)}L${h(C(Me.time))},${h($)}Z`:"",ae=a&&l?.profile.samples.length?L(l.profile.samples):"",ce=[{time:e.sunrise,label:g("sunrise"),short:g("sunriseShort"),dashed:!0},{time:e.solarNoon,label:g("sceneNoon"),short:g("sceneNoonShort"),dashed:!1},{time:e.sunset,label:g("sunset"),short:g("sunsetShort"),dashed:!0}].filter(R=>R.time instanceof Date),j=x?34:48,be=[20,10,-10].filter(R=>R<A-2&&R>G+2),Se=x?78:92,ye=k(q(u),_+12,$-N-6),Je=u>-2,mn=x?30:40,Qe=x?11:15,xe=x?9:12,et=d?.altitude??0,Ft=_+xe+2,Ut=$-N-xe-4,xt=q(et),Ke=xt>Ut?"bottom":xt<Ft?"top":null,pe=k(xt,Ft,Ut),pn=et>0,Kt=Qe+xe+6,tt=r&&Math.abs(pe-ye)<Qe+xe+4?B+Kt+xe<=f?B+Kt:B-Kt:B,kt=Ke?`${Ke==="bottom"?"\u25BC":"\u25B2"} ${ne(et,0,o.locale)}`:"",We=x?10.5:11.5,Be=We+8,Mt=Math.round(We+2),ke=kt.length*We*.62+14+Mt+5,St=Ke==="bottom"?$-N-Be-8:_+2,Le=r&&Math.abs(ye-(St+Be/2))<Qe+Be/2+2,ht=Qe+ke/2+6,Te=k(Le?B+ht+ke/2<=f-4?B+ht:B-ht:B,ke/2+4,f-ke/2-4),Wt=k(z/$,0,1);return b`
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
          ${ps.map(([R,le])=>b`<stop offset="${R}%" stop-color="${le}" />`)}
        </linearGradient>
        <linearGradient id="${w.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${ps.map(([R,,le])=>b`<stop offset="${R}%" stop-color="${le}" />`)}
        </linearGradient>
        <linearGradient id="${w.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${c(Wt,3)}" stop-color="#fff" />
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
          x1="0" x2="0" y1="${h(q(n.maxAltitude))}" y2="${h(z)}">
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
          x1="0" x2="0" y1="${h(_)}" y2="${h($)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${c(Wt,3)}" stop-color="#f59e0b" />
          <stop offset="${c(Math.min(1,Wt+.001),3)}" stop-color="#b9c3ff" />
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
        <clipPath id="${w.past}"><rect width="${h(B)}" height="${h($)}" /></clipPath>
        <clipPath id="${w.future}">
          <rect x="${h(B)}" width="${h(f-B)}" height="${h($)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${h(f)}" height="${h($)}" fill="url(#${w.skyTop})" />
        <rect width="${h(f)}" height="${h($)}" fill="url(#${w.skyHor})"
          mask="url(#${w.horMask})" />
        ${Z}
        ${Q}
      </g>

      ${r&&me?b`<g class="day-area">
              <path d="${me}" fill="url(#${w.dayFill})" clip-path="url(#${w.above})"
                opacity="0.92" />
              <path d="${O}" fill="url(#${w.nightFill})" clip-path="url(#${w.below})" />
              <g clip-path="url(#${w.below})">
                <path d="${O}" fill="url(#${w.dayFade})" filter="url(#${w.softer})" />
              </g>
            </g>`:b``}

      ${U?b`<g class="silhouette" data-scene="${s}">
              ${U.waterTop!==null?b`<rect class="water" x="0" y="${h(U.waterTop)}" width="${h(f)}"
                      height="${h($-U.waterTop)}" fill="url(#${w.water})" opacity="0.55" />
                    ${[0,1,2,3].map(R=>b`<line x1="${h(f*(.08+R*.21))}"
                        x2="${h(f*(.16+R*.21))}"
                        y1="${h(U.waterTop+5+R*3)}" y2="${h(U.waterTop+5+R*3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`)}`:b``}
              <path d="${U.back}" fill="url(#${w.back})" opacity="0.35" />
              <path d="${U.front}" fill="url(#${w.front})" opacity="0.6" />
              ${U.lights.map(R=>b`<rect x="${h(R.x)}" y="${h(R.y)}" width="${R.w}"
                  height="${R.h}" fill="#ffd98a" opacity="${c(R.opacity,2)}" />`)}
            </g>`:b``}

      <line class="horizon" x1="${Se}" x2="${h(f)}" y1="${h(z)}" y2="${h(z)}"
        stroke="url(#${w.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${ce.map(R=>{let le=h(C(R.time.getTime()));return R.dashed?b`<line x1="${le}" x2="${le}" y1="0" y2="${h($-N+6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`:b`<line x1="${le}" x2="${le}" y1="0" y2="${h($-N+6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`})}
      </g>

      ${ae?b`<path class="moon-curve" d="${ae}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`:b``}

      ${r&&ee?b`<g class="sun-path">
              <g clip-path="url(#${w.past})">
                <path d="${ee}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${w.future})">
                <path d="${ee}" fill="none" stroke="url(#${w.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[e.sunrise,e.sunset].filter(R=>R instanceof Date).map(R=>b`<circle cx="${h(C(R.getTime()))}" cy="${h(z)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${R.getTime()<t.getTime()?2:3.2}" />`)}
            </g>`:b``}

      ${a&&d&&Ke?b`<g class="moon-edge" data-edge="${Ke}">
              <title>${g("chartMoonNow",{altitude:ne(et,1,o.locale)})} ${g("chartOutside")}</title>
              <rect x="${h(Te-ke/2)}" y="${h(St)}" width="${h(ke)}"
                height="${h(Be)}" rx="${h(Be/2)}" fill="rgba(22, 26, 64, 0.62)"
                stroke="rgba(255,255,255,0.55)" stroke-width="0.8" />
              <g transform="translate(${h(Te-ke/2+5)} ${h(St+(Be-Mt)/2)})">
                ${Fe({size:Mt,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#3a4280",texture:!1,uid:`${m}-edge-moon`})}
              </g>
              <text x="${h(Te+(Mt+5)/2)}"
                y="${h(St+Be/2+We*.36)}"
                text-anchor="middle" font-size="${We}" fill="#f2f4ff">${kt}</text>
            </g>`:b``}

      ${a&&d&&!Ke?b`<g class="now-moon" opacity="${pn?1:.7}">
              <title>${g("chartMoonNow",{altitude:ne(et,1,o.locale)})}</title>
              ${pn?b`<circle cx="${h(tt)}" cy="${h(pe)}" r="${xe*2.1}"
                      fill="url(#${w.moonGlow})" />`:b``}
              ${tt!==B?b`<line x1="${h(B)}" y1="${h(pe)}" x2="${h(tt)}" y2="${h(pe)}"
                      stroke="rgba(255,255,255,0.7)" stroke-width="0.8" />`:b``}
              <circle cx="${h(tt)}" cy="${h(pe)}" r="${xe+1.2}" fill="none"
                stroke="rgba(255,255,255,0.75)" stroke-width="1.2" />
              <g transform="translate(${h(tt-xe)} ${h(pe-xe)})">
                ${Fe({size:xe*2,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#2b3270",texture:!1,uid:`${m}-now-moon`})}
              </g>
            </g>`:b``}

      ${r?b`<g class="now-sun ${p?"smc-pulse":""}">
              <title>${g("chartSunNow",{altitude:ne(u,1,o.locale)})}</title>
              <circle cx="${h(B)}" cy="${h(ye)}" r="${mn}"
                fill="url(#${w.sunGlow})" opacity="${Je?1:.35}" />
              <circle cx="${h(B)}" cy="${h(ye)}" r="${Qe}" fill="url(#${w.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${Je?1:.55}" />
            </g>`:b``}

      <g class="axis">
        <text x="10" y="${h(_+4)}" class="scene-axis">${g("elevation")}</text>
        ${be.map(R=>b`<text x="10" y="${h(q(R)+4)}" class="scene-axis">${R>0?R:`\u2212${-R}`}°</text>
            <line x1="${x?34:40}" x2="${x?40:48}" y1="${h(q(R))}"
              y2="${h(q(R))}" stroke="#fff" opacity="0.8" />`)}
        <text x="10" y="${h(z-5)}" class="scene-axis strong">${g("horizon")}</text>
      </g>

      <rect class="band" x="0" y="${h($-N-18)}" width="${h(f)}"
        height="${h(N+18)}" fill="url(#${w.band})" />
      <g class="event-labels">
        ${ce.map(R=>{let le=h(k(C(R.time.getTime()),j,f-j));return b`<text x="${le}" y="${h($-N+22)}" text-anchor="middle"
              class="scene-time">${se(R.time,o)}</text>
            <text x="${le}" y="${h($-N+38)}" text-anchor="middle"
              class="scene-label">${x?R.short:R.label}</text>`})}
      </g>
    </svg>
  `}var Y=i=>String(c(i,1));function $s(i){let{profile:n,events:e,now:t,format:o,showSun:s,showMoon:r,moonPath:a,sunAltitude:l,moonAltitude:d,sunSize:u,moonSize:p}=i,m=o.t,g=Math.max(160,i.width),f=Math.max(100,i.height),x=g<480?64:92,N=6,_=34,H=f-30-8,M=Math.max(40,g-x-N),E=n.dayStart.getTime(),v=n.dayEnd.getTime(),C=Math.max(1,v-E),A=O=>x+(O-E)/C*M,G=r?a?.profile.samples??[]:[],q=G.reduce((O,ae)=>Math.max(O,ae.altitude),-90),z=Math.max(8,s?n.maxAltitude:-90,q)+4,B=-Math.max(14,z*.85),L=4,w=O=>B+L*Math.log1p(Math.exp((O-B)/L)),I=O=>_+(z-Math.min(z,w(O)))/(z-B)*(H-_),Z=I(0),F=A(t.getTime()),Q=I(l),J=I(d),ve=s&&Math.abs(J-Q)<u+p+2,U=u+p+6,ee=ve?F+U+p<=g-N?F+U:F-U:F,Me=O=>O.map((ae,ce)=>`${ce?"L":"M"}${Y(A(ae.time))},${Y(I(ae.altitude))}`).join(""),re=[0,6,12,18,24].map(O=>{let ae=x+O/24*M,ce=O===0?"start":O===24?"end":"middle";return b`<text x="${Y(ae+(O===0?-4:O===24?4:0))}" y="${Y(f-8)}" text-anchor="${ce}"
      class="clean-axis">${String(O).padStart(2,"0")}:00</text>`}),me=[e.sunrise,e.sunset].filter(O=>O instanceof Date);return b`
    <svg
      class="clean-chart"
      width="${Y(g)}"
      height="${Y(f)}"
      viewBox="0 0 ${Y(g)} ${Y(f)}"
      role="img"
      aria-label="${m("title")}"
    >
      <text x="0" y="${Y(Z+4)}" class="clean-horizon-label">${m("horizon")}</text>
      <line class="clean-horizon" x1="${x}" x2="${Y(g-N)}" y1="${Y(Z)}"
        y2="${Y(Z)}" stroke-dasharray="6 6" />
      <line class="clean-now" x1="${Y(F)}" x2="${Y(F)}" y1="${Y(_-8)}" y2="${Y(H)}" />
      <text x="${Y(F)}" y="${Y(_-14)}" text-anchor="middle" class="clean-now-label">${m("cleanNow")}</text>
      ${G.length?b`<path class="clean-moon-path" d="${Me(G)}" />`:b``}
      ${s&&n.samples.length?b`<path class="clean-sun-path" d="${Me(n.samples)}" />
            ${me.map(O=>b`<circle class="clean-sun-mark" cx="${Y(A(O.getTime()))}"
                cy="${Y(Z)}" r="6" />`)}`:b``}
      ${G.length?b`${ee!==F?b`<line class="clean-moon-link" x1="${Y(F)}" x2="${Y(ee)}"
                    y1="${Y(J)}" y2="${Y(J)}" />`:b``}<circle class="clean-moon-now" cx="${Y(ee)}" cy="${Y(J)}"
              r="${Y(p)}">
              <title>${m("chartMoonNow",{altitude:ne(d,1,o.locale)})}</title>
            </circle>`:b``}
      ${s?b`<circle class="clean-sun-now" cx="${Y(F)}" cy="${Y(Q)}"
              r="${Y(u)}">
              <title>${m("chartSunNow",{altitude:ne(l,1,o.locale)})}</title>
            </circle>`:b``}
      ${re}
    </svg>
  `}function Oo(i){let n=Math.sin(i*127.1+311.7)*43758.5453;return n-Math.floor(n)}function ta(i,n,e){let t=[];for(let o=0;o<n;o++){let s=Math.sqrt(Oo(i*7.13+o*1.37))*e*.96,r=Oo(i*3.71+o*2.11)*360,a=Xe({x:0,y:0},s,r),l=Oo(i*5.19+o*4.53);t.push({x:a.x,y:a.y,r:.35+l*.75,opacity:.16+l*.34})}return t}function Io(i,n){return k((90-i)/90*n,0,n)}function Go(i){let{width:n,height:e,sun:t,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:l,palette:d,format:u,animations:p,uid:m,showCardinals:g=!0,seed:f=0}=i,$=Math.max(80,n),x=Math.max(80,e),N=6,_={x:$/2,y:x/2},D=Math.max(10,Math.min($,x)/2-N),H=`${m}-dome`,M=`${m}-dome-clip`,E=[{key:u.t("compassNorth"),azimuth:0},{key:u.t("compassEast"),azimuth:90},{key:u.t("compassSouth"),azimuth:180},{key:u.t("compassWest"),azimuth:270}],v=k(c(D*.17,1),7,11),C=t?t.altitude>0:!1,A=k(c(D*.11,1),4,11),G=t?Xe(_,Io(t.altitude,D),t.azimuth):null,q=a&&t&&G,z=o?o.altitude>0:!1,B=k(c(D*.24,1),10,22),L=o?Xe(_,Io(o.altitude,D),o.azimuth):null,w=l&&o&&L&&r,I=g&&D>=42,Z=k(c(D*.14,1),6.5,9),F=[{altitude:30,radius:D*(60/90)},{altitude:60,radius:D*(30/90)}],J=(t?.altitude??-90)<-6?ta(Math.max(1,Math.round(f)),46,D):[],ve=s.filter(U=>U.altitude>=-8).map(U=>Xe(_,Io(U.altitude,D),U.azimuth));return b`
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
        <clipPath id="${M}">
          <circle cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(D,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(D,1)}"
        fill="url(#${H})" opacity="0.55" />

      <g clip-path="url(#${M})">
        ${J.length?b`<g class="stars">
                ${J.map(U=>b`<circle
                      cx="${c(_.x+U.x,1)}"
                      cy="${c(_.y+U.y,1)}"
                      r="${c(U.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${c(U.opacity,2)}" />`)}
              </g>`:b``}
        ${F.map(U=>b`<circle
              cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(U.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${c(_.x-D,1)}" y1="${c(_.y,1)}"
          x2="${c(_.x+D,1)}" y2="${c(_.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${c(_.x,1)}" y1="${c(_.y-D,1)}"
          x2="${c(_.x,1)}" y2="${c(_.y+D,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${ve.length>1?b`<path
                d="M${ve.map(U=>`${c(U.x,1)} ${c(U.y,1)}`).join(" L")}"
                fill="none"
                stroke="${d.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:b``}
      </g>

      <circle
        cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(D,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${I?b`<g
              font-size="${Z}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${F.map(U=>{let ee=Xe(_,U.radius,45);return b`<text
                  x="${c(ee.x,1)}"
                  y="${c(ee.y+Z*.35,1)}"
                >${U.altitude}°</text>`})}
            </g>`:b``}

      ${g?b`<g font-size="${v}" fill="var(--smc-muted-color)" opacity="0.7">
              ${E.map(U=>{let ee=Xe(_,D*.87,U.azimuth);return b`<text
                  x="${c(ee.x,1)}"
                  y="${c(ee.y+v*.35,1)}"
                  text-anchor="middle"
                >${U.key}</text>`})}
            </g>`:b``}

      ${q&&C&&G?b`<g class="${p?"smc-pulse":""}">
              <circle
                cx="${c(G.x,1)}" cy="${c(G.y,1)}" r="${A}"
                fill="${d.lineDay}" opacity="0.28" />
              <circle
                cx="${c(G.x,1)}" cy="${c(G.y,1)}" r="${c(A*.55,1)}"
                fill="${d.lineDay}" />
            </g>`:b``}
      ${a&&t&&!C?wo(_,D,t.azimuth,d.lineNight):b``}

      ${w&&z&&L&&r?b`<g transform="translate(${c(L.x-B/2,1)} ${c(L.y-B/2,1)})">
              ${Fe({size:B,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:B>=16,uid:`${m}-moon`})}
            </g>`:b``}
      ${l&&o&&!z?wo(_,D,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):b``}
    </svg>
  `}function Fo(i,n,e){i.dispatchEvent(new CustomEvent(n,{detail:e,bubbles:!0,composed:!0}))}function na(i){if(typeof i!="string")return null;let[n,e]=i.split(".",2);return!n||!e?null:[n,e]}function ws(i,n,e,t,o){typeof i?.callService=="function"&&i.callService(n,e,t,o)}function Uo(i,n,e,t,o){if(!t){o?.();return}switch(t.action){case"none":return;case"open-popup":o?.();return;case"more-info":Fo(i,"hass-more-info",{entityId:t.entity??e.entity});return;case"navigate":{let s=typeof t.navigation_path=="string"?t.navigation_path:"";if(s==="")return;history.pushState(null,"",s),Fo(window,"location-changed",{replace:!1});return}case"url":{let s=typeof t.url_path=="string"?t.url_path:"";if(s==="")return;window.open(s,typeof t.url_target=="string"?t.url_target:"_blank");return}case"toggle":ws(n,"homeassistant","toggle",{entity_id:t.entity??e.entity});return;case"call-service":case"perform-action":{let s=na(t.service??t.perform_action);if(!s)return;let r=typeof t.data=="object"&&t.data!==null?t.data:typeof t.service_data=="object"&&t.service_data!==null?t.service_data:void 0,a=typeof t.target=="object"&&t.target!==null?t.target:void 0;ws(n,s[0],s[1],r,a);return}case"fire-dom-event":Fo(window,"ll-custom",t);return;default:return}}function Ko(i=16,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${n}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function _s(i=16,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${n}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${n}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${n}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function Wo(i=16,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${n}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Wn(i=16,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${n}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Bn(i=16,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${n}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var vs="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function Bo(i=16,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${vs}
        fill="${n}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function xs(i=16,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${vs}
        fill="${n}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function jn(i=20,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${n}" />
      <g stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function ks(i=18,n="currentColor"){return b`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${n}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${n}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${n}" />
    </svg>
  `}var Ms=new Map;function Ss(i){let n=Ms.get(i);return n||(n=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Ms.set(i,n)),n}function oa(i){try{return Ss(i)}catch{return Ss("UTC")}}function jo(i,n){let e=oa(n).formatToParts(i),t={};for(let o of e)o.type!=="literal"&&(t[o.type]=Number.parseInt(o.value,10));return{year:t.year??1970,month:t.month??1,day:t.day??1,hour:(t.hour??0)%24,minute:t.minute??0,second:t.second??0}}function Ts(i,n){let e=jo(i,n);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function ia(i,n,e,t=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,n-1,e,t,o,s),l=1440*60*1e3,d=[Ts(new Date(a-l),r),Ts(new Date(a+l),r)],u=[...new Set(d)].map(m=>a-m).filter(m=>{let g=jo(new Date(m),r);return g.year===i&&g.month===n&&g.day===e&&g.hour===t&&g.minute===o&&g.second===s}).sort((m,g)=>m-g);if(u.length>0)return new Date(u[0]);let p=Math.min(...d);return new Date(a-p)}function Gt(i,n){let e=jo(i,n);return ia(e.year,e.month,e.day,0,0,0,n)}function As(i,n){let e=Gt(i,n);return Gt(new Date(e.getTime()+2160*60*1e3),n)}function De(i,n){return Math.round(Gt(i,n).getTime()/(1440*60*1e3))}function Es(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function de(i,n){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:n}function _t(i,n,e){return typeof i=="string"&&n.includes(i)?i:e}function Vn(i,n,e,t,o,s=0){let r=Ce(i);if(r===null)return n;let a=k(r,e[0],e[1]);return Math.abs(a-r)>1e-9&&o.push(ue(t,"invalidRange",{value:String(i),min:String(e[0]),max:String(e[1])})),s===0?Math.round(a):c(a,s)}function Vo(i,n,e){if(i==null)return null;let t=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=t?.action;if(typeof o!="string"||o.trim()==="")return e.push(ue(n,"invalidAction",{value:String(i)})),null;let s=o.trim();return Yi.includes(s)?{...t,action:s}:(e.push(ue(n,"invalidAction",{value:s})),null)}function Ls(i,n="en"){let e=[],t=[],o=i??{},s=de(o.minimal_mode,P.minimal_mode),r=It(s),a=s||typeof o.card_style!="string"?P.card_height:Ot(o.card_style);if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(k(o.card_height,r[0],r[1])),a!==o.card_height&&t.push(ue(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")t.push(ue(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let g=Ce(o.card_height);g===null?e.push(ue(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(k(g,r[0],r[1]))}let l=null,d=null,u=Ce(o.latitude),p=Ce(o.longitude);return u!==null&&(u>=-90&&u<=90?l=u:t.push(ue(n,"invalidNumber",{value:String(o.latitude)}))),p!==null&&(p>=-180&&p<=180?d=p:t.push(ue(n,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():P.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():P.moon_entity,card_height:a,show_sun:de(o.show_sun,P.show_sun),show_moon:de(o.show_moon,P.show_moon),show_twilight:de(o.show_twilight,P.show_twilight),show_astronomical_details:de(o.show_astronomical_details,P.show_astronomical_details),compact_mode:de(o.compact_mode,P.compact_mode),minimal_mode:s,minimal_show_times:de(o.minimal_show_times,P.minimal_show_times),minimal_show_zenith:de(o.minimal_show_zenith,P.minimal_show_zenith),sun_marker_size:Vn(o.sun_marker_size,P.sun_marker_size,ln,n,t,1),moon_marker_size:Vn(o.moon_marker_size,P.moon_marker_size,cn,n,t,1),popup_width:Vn(o.popup_width,P.popup_width,at,n,t),popup_height:Vn(o.popup_height,P.popup_height,lt,n,t),show_remaining_time:de(o.show_remaining_time,P.show_remaining_time),remaining_time_focus:_t(o.remaining_time_focus,Pe.remainingTimeFocus,P.remaining_time_focus),show_golden_hour:de(o.show_golden_hour,P.show_golden_hour),show_countdown_tile:de(o.show_countdown_tile,P.show_countdown_tile),tap_action:Vo(o.tap_action,n,t),hold_action:Vo(o.hold_action,n,t),double_tap_action:Vo(o.double_tap_action,n,t),card_style:_t(o.card_style,Pe.cardStyle,P.card_style),scene:_t(o.scene,Pe.scene,P.scene),show_sun_info:de(o.show_sun_info,P.show_sun_info),show_moon_info:de(o.show_moon_info,P.show_moon_info),theme_mode:_t(o.theme_mode,Pe.themeMode,P.theme_mode),animations:de(o.animations,P.animations),time_format:_t(o.time_format,Pe.timeFormat,P.time_format),language:_t(o.language,Pe.language,P.language),show_header:de(o.show_header,P.show_header),show_day_chart:de(o.show_day_chart,P.show_day_chart),show_sky_view:de(o.show_sky_view,P.show_sky_view),show_events:de(o.show_events,P.show_events),show_moon_times:de(o.show_moon_times,P.show_moon_times),show_footer:de(o.show_footer,P.show_footer),twilight_level:_t(o.twilight_level,Pe.twilightLevel,P.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:l,longitude:d},errors:e,warnings:t}}function Ns(i,n){let e=It(i.minimal_mode);return i.card_height==="auto"?k(ss(n,i.card_style),e[0],e[1]):k(i.card_height,e[0],e[1])}function sa(i,n,e,t="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},l={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:n,location:o,locationName:"",extras:ra(n,Hs(t)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:l,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function Hs(i){return i==="de"?"de-DE":"en-GB"}function ra(i,n){return{timeZoneLongName:Ho(i,n,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function aa(i,n){let e=fo(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let t=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:n,year:"numeric",month:"2-digit"}).format(s);return o(t)===o(i)}function la(i,n,e){if(!i)return null;let t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:n,month:"2-digit"}).format(i));if(!Number.isFinite(t)||t<1||t>12)return null;let o=ts[t-1];return ue(e,"folkName",{name:ue(e,o)})}function Cs(i,n,e,t){return i?{time:i,azimuth:Hn(i,n,"moon"),dayOffset:De(i,t)-De(e,t)}:null}function ca(i){if(typeof i!="string"||i.trim()==="")return null;let n=new Date(i);return Number.isNaN(n.getTime())?null:n}var Ds=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],ua={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function da(i,n,e){let t=Es(n?.config?.time_zone),o=[],s=$o(n?.config?.latitude)?n.config.latitude:null,r=$o(n?.config?.longitude)?n.config.longitude:null,a=i.latitude??s,l=i.longitude??r,d=wt(i.language,n?.locale?.language??n?.language);if(a===null||l===null)return sa(e,t,["missing-location",...o],d);let u={latitude:a,longitude:l},p=i.location_name.trim()!==""?i.location_name.trim():n?.config?.location_name??"",m=Gt(e,t),g=As(e,t),f=po(u,m,g),$=Ln(e,u),x=$.altitude,N=an(e.getTime()+6e4,u),_=rt(e,u),D=Nn(e),H=Ii(e,u),M=n?.states?.[i.entity];M||o.push("missing-sun-entity");let E={...f.events},v={};if(M?.attributes)for(let[j,be]of Ds){let Se=ca(M.attributes[be]),ye=f.events[j];if(Se&&Se>=m&&Se<g&&(!ye||Math.abs(Se.getTime()-ye.getTime())<=es)){E[j]=Se,v[j]="ha";continue}v[j]=ye?"computed":"none"}else for(let[j]of Ds)v[j]=f.events[j]?"computed":"none";for(let j of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])v[j]=f.events[j]?"computed":"none";let C=M?.attributes?Ce(M.attributes.elevation):null,A=M?.attributes?Ce(M.attributes.azimuth):null,G=i.moon_entity?n?.states?.[i.moon_entity]:void 0,q=G&&typeof G.state=="string"?ua[G.state]??null:null,z=i.show_moon?Oi(u,m,g,H):null,B=[],L=900*1e3;for(let j=m.getTime();j<=g.getTime();j+=L){let be=Ln(j,u);B.push({altitude:be.altitude,azimuth:be.azimuth})}let w=null;E.sunrise&&E.sunset&&(w=(E.sunset.getTime()-E.sunrise.getTime())/6e4);let I=Gt(new Date(m.getTime()-720*60*1e3),t),Z=po(u,I,m),F=Z.events.sunrise&&Z.events.sunset?(Z.events.sunset.getTime()-Z.events.sunrise.getTime())/6e4:null,Q=w!==null&&F!==null?w-F:null,J=Fi(e),ve=i.twilight_level==="nautical"?Ze:i.twilight_level==="astronomical"?qe:Ge,U=j=>j?{time:j.time,rising:j.rising,dayOffset:De(j.time,t)-De(e,t)}:null,ee=i.show_sun?U(go(u,e,nn)):null,Me=i.show_twilight?U(go(u,e,ve)):null,re=e.getTime(),O=[H.nextRise,H.nextSet].filter(j=>j instanceof Date&&j.getTime()>re).sort((j,be)=>j.getTime()-be.getTime())[0],ae=i.show_moon&&O?{time:O,rising:O.getTime()===H.nextRise?.getTime(),dayOffset:De(O,t)-De(e,t)}:null,ce={timeZoneLongName:Ho(t,Hs(d),e),previousDaylightMinutes:F,daylightDeltaMinutes:Q,sunBelowHorizon:x<0?Math.abs(x):null,sunriseAzimuth:E.sunrise?Hn(E.sunrise,u,"sun"):null,sunsetAzimuth:E.sunset?Hn(E.sunset,u,"sun"):null,nextFullMoon:J,nextFullMoonDays:J?Math.round((J.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:J?aa(J.time,t):!1,moonFolkName:la(J?.time??null,t,d),moonDistance:Ui(e,u,14),moonRise:Cs(H.nextRise??H.previousRise,u,e,t),moonSet:Cs(H.nextSet??H.previousSet,u,e,t),nextSunEvent:ee,nextTwilightEvent:Me,nextMoonEvent:ae,goldenHour:i.show_golden_hour?Pi(u,e,sn,Dn):null};return f.polar==="polar-day"&&o.push("polar-day"),f.polar==="polar-night"&&o.push("polar-night"),E.sunrise||o.push("no-sunrise-today"),E.sunset||o.push("no-sunset-today"),!E.civilDawn&&!E.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:t,location:u,locationName:p,day:f,sun:{altitude:x,azimuth:$.azimuth,phase:Gi(x),rising:N>x,haElevation:C,haAzimuth:A},moon:{position:_,phase:D,events:H,haPhaseName:q},sunTrack:B,moonPath:z,events:E,eventSources:v,extras:ce,daylightMinutes:w,issues:o,fatal:!1}}var hn=new Map;function ha(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight),String(i.show_golden_hour)].join("|")}function ma(i,n){if(!n)return"-";let e=n.states?.[i.entity],t=i.moon_entity?n.states?.[i.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",t?.state??""].join("|")}function Rs(i,n,e){let t=Math.floor(e.getTime()/6e4),o=[ha(i),ma(i,n),t,e.getTimezoneOffset()].join("#"),s=hn.get(o);if(s)return s;let r=da(i,n,e);if(hn.size>24){let a=hn.keys().next().value;a!==void 0&&hn.delete(a)}return hn.set(o,r),r}var zs=xn`
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

  .clean-chart .clean-moon-link {
    stroke: var(--smc-clean-moon);
    stroke-width: 1;
    opacity: 0.7;
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
`,Ps=xn`
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
`;function Zo(i,n){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}var ut=class extends Ie{constructor(){super(...arguments);this._open=new Set(["style"])}setConfig(e){this._config={...e}}get _language(){return wt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(e,t){return ue(this._language,e,t)}_value(e,t){let o=this._config?.[e];return o??t}_update(e){if(!this._config)return;let t={...this._config,...e};for(let[o,s]of Object.entries(e)){let r=P[o];s===r&&o in P&&delete t[o]}this._config=t,Zo(this,t)}_group(e,t,o,s){let r=this._open.has(e);return S`
      <details
        class="group"
        data-group=${e}
        ?open=${r}
        @toggle=${a=>{let l=a.target.open;if(l===this._open.has(e))return;let d=new Set(this._open);l?d.add(e):d.delete(e),this._open=d}}
      >
        <summary>
          <span class="group-title">${this._t(t)}</span>
          <span class="group-summary">${o}</span>
          <svg class="group-chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="group-body">${s}</div>
      </details>
    `}_select(e,t,o,s,r,a={}){let l=String(this._config?.[t]??s);return S`
      <div class="row">
        <label for=${e}>${this._t(o)}</label>
        <div class="control">
          <select
            id=${e}
            .value=${l}
            ?disabled=${a.disabled===!0}
            @change=${d=>{let u=d.target.value;this._update({[t]:u,...a.patch?a.patch(u):{}})}}
          >
            ${r.map(([d,u])=>S`<option value=${d} ?selected=${d===l}>${u}</option>`)}
          </select>
        </div>
      </div>
    `}render(){if(!this._config)return S``;let e=this._config,t=e.card_height,o=t==="auto"||t===null,s=e.minimal_mode===!0,r=It(s),a=s?P.card_height:Ot(e.card_style),l=typeof t=="number"?t:a,d=e.latitude===void 0||e.latitude===null,u=e.card_style??"glass",p=(u==="scene"||u==="clean")&&!s,m={glass:this._t("editorCardStyleGlass"),flat:this._t("editorCardStyleFlat"),horizon:this._t("editorCardStyleHorizon"),scene:this._t("editorCardStyleScene"),clean:this._t("editorCardStyleClean")},g={city:this._t("editorSceneCity"),mountains:this._t("editorSceneMountains"),forest:this._t("editorSceneForest"),coast:this._t("editorSceneCoast"),none:this._t("editorSceneNone")},f=v=>this._value(v,P[v]),$=u==="scene"?`${m.scene.split(" (")[0]} \xB7 ${g[e.scene??"city"]}`:(m[u]??u).split(" (")[0],x=[o?this._t("editorCardHeightAuto"):`${l} px`,s?this._t("editorMinimalMode"):null,!s&&e.compact_mode?this._t("editorCompactMode"):null].filter(Boolean).join(" \xB7 "),N=[["show_sun","editorShowSun"],["show_moon","editorShowMoon"],...p?[["show_sun_info","editorSunInfo"],["show_moon_info","editorMoonInfo"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"]]:[["show_twilight","editorShowTwilight"],["show_astronomical_details","editorShowAstronomicalDetails"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"],["show_sky_view","editorShowSkyView"],["show_events","editorShowEvents"],["show_moon_times","editorShowMoonTimes"],["show_golden_hour","editorGoldenHour"],["show_footer","editorShowFooter"]]],_=N.filter(([v])=>f(v)).length,D=this._t("editorSwitchCount",{on:_,total:N.length}),H=f("show_remaining_time")?this._t(e.remaining_time_focus==="next"?"editorRemainingTimeFocusNext":e.remaining_time_focus==="golden_hour"?"editorRemainingTimeFocusGolden":"editorRemainingTimeFocusSun").split(" (")[0]:this._t("editorOff"),M=[e.language==="de"?"Deutsch":e.language==="en"?"English":this._t("editorLanguageAuto"),e.time_format==="12"?this._t("editorTimeFormat12"):e.time_format==="24"?this._t("editorTimeFormat24"):null].filter(Boolean).join(" \xB7 "),E=d?"Home Assistant":`${c(Number(e.latitude),2)}\xB0, ${c(Number(e.longitude??0),2)}\xB0`;return S`
      <div class="card-config">
        ${this._group("style","editorGroupStyle",$,S`
            ${this._select("cardstyle","card_style","editorCardStyle","glass",Pe.cardStyle.map(v=>[v,m[v]]),{patch:v=>this._styleHeight(v)})}
            ${u==="scene"?this._select("scene","scene","editorScene","city",Pe.scene.map(v=>[v,g[v]])):T}
            ${this._select("theme","theme_mode","editorThemeMode","auto",[["auto",this._t("editorThemeAuto")],["light",this._t("editorThemeLight")],["dark",this._t("editorThemeDark")]])}
            ${this._switch("animations","editorAnimations")}
            ${u==="scene"&&!s?T:this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",P.sun_marker_size),min:ln[0],max:ln[1],step:.5,digits:1,set:v=>this._update({sun_marker_size:v})})}
            ${u==="clean"&&!s?this._numberRow({id:"moon-marker",labelKey:"editorMoonMarkerSize",value:this._value("moon_marker_size",P.moon_marker_size),min:cn[0],max:cn[1],step:.5,digits:1,set:v=>this._update({moon_marker_size:v})}):T}
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
                  @change=${v=>{let C=Ce(v.target.value);C!==null&&this._update({card_height:Math.round(k(C,r[0],r[1]))})}}
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
                  ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",P.popup_width),min:at[0],max:at[1],step:20,set:v=>this._update({popup_width:Math.round(v)})})}
                  ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",P.popup_height),min:lt[0],max:lt[1],step:20,set:v=>this._update({popup_height:Math.round(v)})})}`:T}
          `)}
        ${this._group("content","editorGroupContent",D,S`
            ${N.map(([v,C])=>this._switch(v,C))}
            ${this._select("twilight","twilight_level","editorTwilightLevel","civil",[["civil",this._t("editorTwilightCivil")],["nautical",this._t("editorTwilightNautical")],["astronomical",this._t("editorTwilightAstronomical")],["all",this._t("editorTwilightAll")]])}
          `)}
        ${this._group("countdown","editorGroupCountdown",H,S`
            ${this._switch("show_remaining_time","editorRemainingTime")}
            ${this._select("remaining-focus","remaining_time_focus","editorRemainingTimeFocus","sun",[["sun",this._t("editorRemainingTimeFocusSun")],["next",this._t("editorRemainingTimeFocusNext")],...e.show_golden_hour?[["golden_hour",this._t("editorRemainingTimeFocusGolden")]]:[]],{disabled:e.show_remaining_time===!1})}
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
                  .value=${this._value("entity",P.entity)}
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
                  .value=${this._value("moon_entity",P.moon_entity)}
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
                    @change=${v=>{if(v.target.checked){let A={...this._config};delete A.latitude,delete A.longitude,this._config=A,Zo(this,A)}else this._update({latitude:c(this.hass?.config?.latitude??0,4),longitude:c(this.hass?.config?.longitude??0,4)})}}
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
                  .value=${String(e.latitude??this.hass?.config?.latitude??"")}
                  ?disabled=${d}
                  @change=${v=>{let C=Ce(v.target.value);this._update({latitude:C===null?void 0:k(C,-90,90)})}}
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
                  .value=${String(e.longitude??this.hass?.config?.longitude??"")}
                  ?disabled=${d}
                  @change=${v=>{let C=Ce(v.target.value);this._update({longitude:C===null?void 0:k(C,-180,180)})}}
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
    `}_numberRow(e){let{id:t,labelKey:o,value:s,min:r,max:a,step:l,digits:d=0,set:u}=e,p=m=>String(d===0?Math.round(m):c(m,d));return S`
      <div class="row">
        <label for=${t}>${this._t(o)}</label>
        <div class="control height-control">
          <input
            id=${t}
            type="range"
            min=${r}
            max=${a}
            step=${l}
            .value=${p(s)}
            @input=${m=>u(Number(m.target.value))}
          />
          <input
            id="${t}-number"
            type="number"
            aria-label=${this._t(o)}
            min=${r}
            max=${a}
            step=${l}
            .value=${p(s)}
            @change=${m=>{let g=Ce(m.target.value);g!==null&&u(k(g,r,a))}}
          />
        </div>
      </div>
    `}_styleHeight(e){let t=this._config?.card_height;if(this._config?.minimal_mode===!0)return{};let o=Ot(this._config?.card_style),s=Ot(e);return s!==o&&(t===void 0||t===o)?{card_height:s}:{}}_warnings(){let e=this._config?.card_height,t=It(this._config?.minimal_mode===!0);return typeof e=="number"&&(e<t[0]||e>t[1])?S`<span class="hint">
        ${this._t("invalidHeight",{value:String(e),min:t[0],max:t[1]})}
      </span>`:T}_switch(e,t,o=String(e)){let s=P[e];return S`
      <div class="row">
        <label for="${o}">${this._t(t)}</label>
        <div class="control">
          <span class="switch">
            <input
              id="${o}"
              type="checkbox"
              .checked=${this._value(e,s)}
              @change=${r=>this._update({[e]:r.target.checked})}
            />
            <span class="slider"></span>
          </span>
        </div>
      </div>
    `}_reset(){let e=In();this._config=e,Zo(this,e)}};ut.styles=Ps,He([Ht({attribute:!1})],ut.prototype,"hass",2),He([$t()],ut.prototype,"_config",2),He([$t()],ut.prototype,"_open",2),ut=He([Tn(Xi)],ut);var vt=.64,Zn=.6,dt=12,Os=17,Ye=class extends Ie{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=e=>{if(!this._popup)return;if(e.key==="Escape"){e.stopPropagation(),this._closeDetails();return}if(e.key!=="Tab")return;let t=this._popupFocusable(),o=t[0],s=t[t.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?t.indexOf(r):-1;if(a===-1){e.preventDefault(),(e.shiftKey?s:o).focus();return}e.shiftKey&&a===0?(e.preventDefault(),s.focus()):!e.shiftKey&&a===t.length-1&&(e.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let e=this._config?.hold_action;e&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(e,!1)},Ji))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=e=>{if(this._held){this._held=!1;return}let t=e.currentTarget;if(t instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(t);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,t);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(t)},Qi)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(e){let t=this._hass;this._hass=e,this.requestUpdate("hass",t),this._popupCard&&(this._popupCard.hass=e)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return In()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let t=wt(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=Ls(e,t);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(e){super.willUpdate(e);let t=this._isDark();this.classList.toggle("smc-dark",t),this.classList.toggle("smc-light",!t),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),t=k(this._config.popup_width,at[0],at[1]),o=k(this._config.popup_height,lt[0],lt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",ue(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${t}px)`,maxWidth:`${t}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",ue(e,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let l=this._config,d={...l,latitude:l.latitude??void 0,longitude:l.longitude??void 0,location_name:l.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},u=document.createElement(So);u.hass=this.hass;try{u.setConfig(d)}catch{}this._popupCard=u,r.append(u,a),s.append(r),s.addEventListener("click",p=>{p.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let e=document.activeElement;if(!e)return null;let t=e.shadowRoot?.activeElement;return t instanceof HTMLElement?t:e}_popupFocusable(){if(!this._popup)return[];let e=[],t=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");t&&e.push(t);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||e.push(s);return e}_handleMinimalKey(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();let t=e.currentTarget;t instanceof HTMLElement&&this._runTap(t)}}_runTap(e){this._runAction(this._config?.tap_action??null,!0,e)}_runAction(e,t,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Uo(r,this.hass,s,e,t?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let t=this._computeHassSignature();return t===this._hassSignature?!1:(this._hassSignature=t,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(e=>{let t=e.some(o=>o.isIntersecting);t!==this._visible&&(this._visible=t,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,ji()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,t=this.hass;if(!t||!e)return"";let o=t.states?.[e.entity],s=e.moon_entity?t.states?.[e.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",t.config?.location_name??"",t.locale?.language??"",t.language??"",t.locale?.time_format??"",t.selectedTheme?.dark??t.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Ns(this._config,this._width||400):P.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return wt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return S``;let t=this._width||400,o=this._resolvedHeight(),s=is(o,t,e),r=Rs(e,this.hass,new Date),a=this._language(),l=this._isDark(),d=l?To:Ao;if(r.fatal)return S`
        <ha-card
          class=${fe({"smc-dark":l,"smc-light":!l,"smc-minimal":s.minimal})}
          style=${W({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${ks(18)}</span>
              <span>${ue(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let u=us(a,this._locale(),r.timeZone,ls(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?S`
        <ha-card
          class=${fe({"smc-dark":l,"smc-light":!l,"smc-minimal":!0})}
          style=${W({height:`${o}px`})}
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
            class=${fe({root:!0,minimal:!0})}
            style=${W({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
          >
            ${this._renderMinimalTimes(r,u,s,e)}
            <div
              class="chart-wrap minimal"
              style=${W({height:`${s.chartHeight}px`})}
            >
              ${Po({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style==="scene"||e.card_style==="clean"?"glass":e.card_style,compact:!1,minimal:!0,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:e.card_style==="scene"?this._renderSceneCard(r,u,e,d,l,t,o):e.card_style==="clean"?this._renderCleanCard(r,u,e,l,t,o):S`
      <ha-card
        class=${fe({"smc-dark":l,"smc-light":!l})}
        style=${W({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,u)}
      >
        <div
          class=${fe({root:!0,compact:s.compact})}
          style=${W({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
        >
          ${s.showHeader?this._renderHeader(r,u,d,s):T}

          <div
            class=${fe({body:!0,columns:s.skyViewSide})}
            style=${W({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?S`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${W({height:`${s.chartHeight}px`})}
                  >
                    ${Po({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,u,s),showGoldenHour:e.show_golden_hour,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(u,s.legendHeight):T}
                </div>`:T}
            ${s.skyViewSide?S`<div
                  class="sky-column"
                  style=${W({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${Go({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:d,format:u,animations:e.animations,uid:`${this._uid}-sky`,seed:De(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,u,s.skyViewWidth,this._countdownRows(s))}
                </div>`:T}
          </div>

          ${s.showEvents?this._renderEvents(r,u,s):T}
          ${s.showDetails?this._renderDetails(r,u,e,s,a,l,t):T}
          ${s.showFooter?this._renderFooter(r,u,e,s):T}
        </div>
      </ha-card>
    `}_renderSceneCard(e,t,o,s,r,a,l){let d=a<480?12:16,u=12,p=Math.max(160,a-2*d),m=o.show_sun&&o.show_sun_info,g=o.show_moon&&o.show_moon_info,f=(m?1:0)+(g?1:0),$=this._infoLayout(p,f,12,330,150),x=$.compact?90:a<480?78:92,N=f===0?0:$.side?x:f*x+(f-1)*10,_=a<480?46:52,D=140,H=o.show_header,M=f>0,E=(C,A)=>l-2*d-(C?_+u:0)-(A?N+u:0);o.show_day_chart&&M&&E(H,!0)<D&&(M=!1),o.show_day_chart&&H&&E(!0,M)<D&&(H=!1);let v=o.show_day_chart?Math.max(D,E(H,M)):0;return S`
      <ha-card
        class=${fe({"smc-dark":r,"smc-light":!r,"smc-scene":!0})}
        style=${W({height:`${l}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(e,t)}
      >
        <div
          class="root scene-root"
          style=${W({padding:`${d}px`,gap:`${u}px`})}
        >
          ${H?this._renderSceneHeader(e,t,s,a,_):T}
          ${o.show_day_chart?S`<div class="scene-wrap" style=${W({height:`${v}px`})}>
                ${ys({profile:e.day,events:e.events,now:e.now,width:p,height:v,format:t,scene:o.scene,showSun:o.show_sun,showMoon:o.show_moon,moonPath:e.moonPath,moon:o.show_moon?{illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,altitude:e.moon.position.apparentAltitude}:null,currentAltitude:e.sun.altitude,animations:o.animations,uid:`${this._uid}-scene`})}
              </div>`:T}
          ${M?S`<div
                class=${fe({"scene-tiles":!0,stacked:!$.side,single:f===1})}
                style=${W({height:`${N}px`})}
              >
                ${m?this._renderSceneSunTile(e,t,a<480,$.compact,$.itemWidth):T}
                ${g?this._renderSceneMoonTile(e,t,a<480,$.compact,$.itemWidth):T}
              </div>`:T}
        </div>
      </ha-card>
    `}_renderCleanCard(e,t,o,s,r,a){let l=r<480,d=l?14:18,u=Math.max(160,r-2*d-2),p=o.show_sun&&o.show_sun_info,m=o.show_moon&&o.show_moon_info,g=(p?1:0)+(m?1:0),f=this._infoLayout(u,g,37,300,140),$=f.side,x=f.compact?62:l?64:72,N=g===0?0:$?x:g*x+(g-1)*12,_=l?52:60,D=21,H=110,M=o.show_header,E=g>0,v=(Q,J)=>a-2*d-(Q?_:0)-(J?N+D:0);o.show_day_chart&&E&&v(M,!0)<H&&(E=!1),o.show_day_chart&&M&&v(!0,E)<H&&(M=!1);let C=o.show_day_chart?Math.max(H,v(M,E)):0,A=this._primaryCountdown(e,t),G=t.t(this._phaseKey(e)),q=e.locationName?`${e.locationName} \xB7 ${un(e.now,t)}`:un(e.now,t),z=u<320,B=z?18:l?20:22,L=(z?46:l?54:64)+Math.max(t.t("title").length*B*.56,q.length*(z?13:14)*.53),w=Q=>Q.length*13.5*.58+30,I=u-L-12,F=(A?[{phase:!0,text:A.compact},{phase:!1,text:A.compact},{phase:!0,text:A.duration},{phase:!1,text:A.duration}]:[{phase:!0,text:null},{phase:!1,text:null}]).find(Q=>(Q.phase?w(G)+8:0)+(Q.text?w(Q.text):0)<=I)??{phase:!1,text:null};return S`
      <ha-card
        class=${fe({"smc-dark":s,"smc-light":!s,"smc-clean":!0})}
        style=${W({height:`${a}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(e,t)}
      >
        <div class="root clean-root" style=${W({padding:`${d}px`})}>
          ${M?S`<div
                class=${fe({"clean-header":!0,tiny:z})}
                style=${W({height:`${_}px`})}
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
                    <span class="clean-title">${t.t("title")}</span>
                    <span class="clean-subtitle">${q}</span>
                  </div>
                </div>
                <div class="clean-chips">
                  ${F.phase?S`<span class="clean-chip phase" title=${G}>${G}</span>`:T}
                  ${A&&F.text?S`<span
                        class="clean-chip countdown-chip"
                        data-body=${A.body}
                        role="img"
                        aria-label=${A.long}
                        title=${A.title}
                        >${F.text}</span
                      >`:T}
                </div>
              </div>`:T}
          ${o.show_day_chart?S`<div class="clean-chart-wrap" style=${W({height:`${C}px`})}>
                ${$s({profile:e.day,events:e.events,now:e.now,width:u,height:C,format:t,showSun:o.show_sun,showMoon:o.show_moon,moonPath:e.moonPath,sunAltitude:e.sun.altitude,moonAltitude:e.moon.position.apparentAltitude,sunSize:o.sun_marker_size,moonSize:o.moon_marker_size})}
              </div>`:T}
          ${E?S`<div class="clean-divider"></div>
                <div
                  class=${fe({"clean-info":!0,stacked:!$,single:g===1})}
                  style=${W({height:`${N}px`})}
                >
                  ${p?this._renderCleanSun(e,t,l,f.compact,f.itemWidth):T}
                  ${p&&m&&$?S`<span class="clean-sep" aria-hidden="true"></span>`:T}
                  ${m?this._renderCleanMoon(e,t,l,f.compact,f.itemWidth):T}
                </div>`:T}
        </div>
      </ha-card>
    `}_infoLayout(e,t,o,s,r){let a=(e-o)/2,l=t===2&&a>=r,d=l?a:e;return{side:l,compact:d<s,itemWidth:d}}_moonRiseTime(e,t){let o=e.extras.moonRise;return o?`\u2191 ${se(o.time,t)}`:"\u2191 \u2014"}_sunTimesText(e,t){let o=s=>s?se(s,t):"\u2014";return`\u2191 ${o(e.events.sunrise)}  \u2193 ${o(e.events.sunset)}`}_moonPositionTexts(e,t){let o=e.moon.position.apparentAltitude,s=ne(o,1,t.locale);return o>=0?[`${s} \xB7 ${Math.round(e.moon.position.azimuth)}\xB0 ${Ue(e.moon.position.azimuth,t.language)}`,s]:[`${ne(Math.abs(o),1,t.locale)} ${t.t("belowHorizon")}`,s]}_cleanItem(e,t,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${fe({"clean-item":!0,[e]:!0,compact:t,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??T}
      @keydown=${o?a:T}
    >
      ${r}
    </div>`}_renderCleanSun(e,t,o,s,r){let a=ne(e.sun.altitude,1,t.locale),l=`${Math.round(e.sun.azimuth)}\xB0 ${Ue(e.sun.azimuth,t.language)}`,d=s?40:o?50:58,u=r-d-(s?12:16),p=this._fitLabel([`${t.t("azimuth")} ${l}`,l],u,s?12:13.5,vt);return this._cleanItem("sun",s,this._sceneTileAction(this._config.entity),`${t.t("sunAltitude")} ${a}, ${t.t("azimuth")} ${l}`,S`<span class="clean-badge sun" style=${W({width:`${d}px`,height:`${d}px`})}
          >${jn(s?22:o?26:30,"currentColor")}</span
        >
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([t.t("sunAltitude"),t.t("sun")],u,13,Zn)??t.t("sun")}</span
          >
          <span class="clean-item-value">${a}</span>
          <span class="clean-item-sub">${p??l}</span>
        </span>`)}_renderCleanMoon(e,t,o,s,r){let a=s?40:o?50:58,l=r-a-(s?12:16),d=s?12:13.5,u=this._fitLabel([this._moonTimesText(e,t,!1),this._moonTimesText(e,t,!0),this._moonRiseTime(e,t)],l,d,vt)??this._moonRiseTime(e,t),p=e.moon.haPhaseName??e.moon.phase.phaseKey,m=Kn(e.moon.phase.illumination,t.locale),g=`${m} ${t.t("illumination")}`,f=this._fitLabel([g,m],l,s?18:24,vt)??m,$=s?20:o?24:28;return this._cleanItem("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${t.t(p)}, ${g}`,S`<span class="clean-badge moon" style=${W({width:`${a}px`,height:`${a}px`})}>
          <svg width=${$} height=${$} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 3.2a9 9 0 1 0 5.3 13.6A7.4 7.4 0 0 1 15.5 3.2z" fill="currentColor" />
          </svg>
        </span>
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([t.t(p),t.t("moon")],l,13,Zn)??t.t("moon")}</span
          >
          <span class="clean-item-value">${f}</span>
          <span class="clean-item-sub" title=${this._moonTimesText(e,t,!1)}
            >${u}</span
          >
        </span>`)}_renderSceneHeader(e,t,o,s,r){let a=s<480,l=this._primaryCountdown(e,t),d=t.t(this._phaseKey(e));return S`
      <div class="scene-header" style=${W({height:`${r}px`})}>
        <div class="scene-place">
          <svg class="scene-pin" width="20" height="26" viewBox="0 0 22 28" aria-hidden="true">
            <path
              d="M11 1.5C5.8 1.5 1.8 5.5 1.8 10.6c0 6.6 8 15 8.4 15.4.4.4 1.2.4 1.6 0 .4-.4 8.4-8.8 8.4-15.4C20.2 5.5 16.2 1.5 11 1.5z"
              fill="currentColor"
            />
            <circle cx="11" cy="10.5" r="3.6" fill="var(--smc-scene-pin-hole, #fff)" />
          </svg>
          <div class="scene-place-text">
            <span class="scene-title">${e.locationName||t.t("title")}</span>
            <span class="scene-date">${un(e.now,t)}</span>
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
                  style=${W({background:this._phaseColor(e,o)})}
                ></span>
                ${d}
              </span>`}
        </div>
      </div>
    `}_sceneTileAction(e){return!e||!this.hass?.states?.[e]?null:()=>Uo(this,this.hass,this._config,{action:"more-info",entity:e},void 0)}_sceneTile(e,t,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${fe({"scene-tile":!0,[e]:!0,compact:t,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??T}
      @keydown=${o?a:T}
    >
      ${r}
      ${o&&!t?S`<svg class="scene-chevron" width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>`:T}
    </div>`}_renderSceneSunTile(e,t,o,s,r){let a=s?38:o?52:62,l=ne(e.sun.altitude,1,t.locale),d=`${Math.round(e.sun.azimuth)}\xB0 ${Ue(e.sun.azimuth,t.language)}`,u=f=>f?se(f,t):"\u2014",p=`${t.t("sunAltitude")} ${l}, ${t.t("azimuth")} ${d}`,m=r-(s?22:30)-a-(s?8:14),g=S`<span
      class="scene-tile-icon"
      style=${W({width:`${a}px`,height:`${a}px`})}
      >${jn(Math.round(a*.55),"#f5a524")}</span
    >`;if(s){let f=this._fitLabel([this._sunTimesText(e,t)],m,11.5,vt);return this._sceneTile("sun",!0,this._sceneTileAction(this._config.entity),p,S`${g}
          <span class="scene-tile-body">
            <span class="scene-tile-label"
              >${this._fitLabel([t.t("sunAltitude"),t.t("sun")],m,12,Zn)??t.t("sun")}</span
            >
            <span class="scene-tile-value">${l}</span>
            ${f?S`<span class="scene-tile-sub">${d}</span>
                  <span class="scene-tile-sub">${f}</span>`:S`<span class="scene-tile-sub">↑ ${u(e.events.sunrise)}</span>
                  <span class="scene-tile-sub">↓ ${u(e.events.sunset)}</span>`}
          </span>`)}return this._sceneTile("sun",!1,this._sceneTileAction(this._config.entity),p,S`${g}
        <span class="scene-tile-body">
          <span class="scene-tile-label">${t.t("sunAltitude")}</span>
          <span class="scene-tile-value">${l}</span>
          <span class="scene-tile-sub">${t.t("azimuth")} ${d}</span>
        </span>
        <span class="scene-tile-times">
          <span><i aria-hidden="true">▲</i><b>${u(e.events.sunrise)}</b
            ><small>${t.t("sunriseShort")}</small></span
          >
          <span><i aria-hidden="true">▼</i><b>${u(e.events.sunset)}</b
            ><small>${t.t("sunsetShort")}</small></span
          >
        </span>`)}_renderSceneMoonTile(e,t,o,s,r){let a=s?38:o?52:62,l=e.moon.haPhaseName??e.moon.phase.phaseKey,d=Kn(e.moon.phase.illumination,t.locale),u=`${d} ${t.t("illumination")}`,p=r-(s?22:30)-a-(s?8:14)-(s?0:24),m=s?11.5:12.5,g=this._fitLabel(this._moonPositionTexts(e,t),p,m,vt)??this._moonPositionTexts(e,t)[1],f=this._fitLabel([this._moonTimesText(e,t,!1),this._moonTimesText(e,t,!0),this._moonRiseTime(e,t)],p,m,vt)??this._moonRiseTime(e,t),$=this._fitLabel([u,d],p,18,vt)??d;return this._sceneTile("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${t.t(l)}, ${u}`,S`<span class="scene-tile-icon moon" style=${W({width:`${a}px`,height:`${a}px`})}
          >${Fe({size:a,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,darkColor:"var(--smc-scene-moon-dark, rgba(92, 102, 160, 0.7))",texture:!s,uid:`${this._uid}-scene-tile-moon`})}</span
        >
        <span class="scene-tile-body">
          <span class="scene-tile-label"
            >${this._fitLabel([t.t(l),t.t("moon")],p,s?12:12.5,Zn)??t.t("moon")}</span
          >
          <span class="scene-tile-value small">${$}</span>
          <span class="scene-tile-sub">${g}</span>
          <span class="scene-tile-sub" title=${this._moonTimesText(e,t,!1)}
            >${f}</span
          >
        </span>`)}_renderHeader(e,t,o,s){let r=e.locationName||t.t("title"),a=e.extras,l=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),d=10.5,u=(M,E=!1)=>M.length*d*.58+20+(E?12:0),m=Math.max(0,l-10-108),g=t.t(this._phaseKey(e)),f=u(g,!0),$=this._primaryCountdown(e,t),x=T,N=!0;if($){let M=u($.compact)+Os,E=u($.duration)+Os,v=null;M+f<=m?(v=$.compact,m-=M):E+f<=m?(v=$.duration,m-=E):E<=m&&(v=$.duration,m-=E,N=!1),v!==null&&(x=S`<span
          class="meta-chip countdown-chip"
          data-body=${$.body}
          role="img"
          aria-label=${$.long}
          title=${$.title}
          >${$.icon}<span>${v}</span></span
        >`)}N&&(m-=f);let _=T;if(e.daylightMinutes!==null){let M=Fn(e.daylightMinutes,t.t),E=a.daylightDeltaMinutes===null?"":` ${cs(a.daylightDeltaMinutes,t.t)}`,v=`${t.t("dayLength")} ${M}${E}`,C=u(v);C<=m&&(m-=C,_=S`<span class="meta-chip" title=${t.t("dayLength")}
          >${v}</span
        >`)}let D=T,H=u(a.timeZoneLongName);return H<=m&&(m-=H,D=S`<span class="meta-chip">${a.timeZoneLongName}</span>`),S`
      <div class="header" style=${W({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${un(e.now,t)}</span>
        </div>
        <div class="header-meta">
          ${x}${_}${D}
          ${N?S`<span class="phase-chip" title=${g}>
                <span
                  class="phase-dot"
                  style=${W({background:this._phaseColor(e,o)})}
                ></span>
                ${g}
              </span>`:T}
        </div>
      </div>
    `}_countdowns(e,t){let o=this._countdownCache;if(o&&o.model===e&&o.context===t)return[...o.entries];let s=this._computeCountdowns(e,t);return this._countdownCache={model:e,context:t,entries:s},[...s]}_computeCountdowns(e,t){let o=this._config;if(!o?.show_remaining_time)return[];let s=e.now.getTime(),r=[],a=(g,f,$,x,N,_=!1)=>{if(!g)return;let D=(g.time.getTime()-s)/6e4;if(!(D>=0))return;let H=D<1,M=H?t.t("countdownNow"):Fn(D,t.t),E=v=>H?t.t("nowFormat",{event:t.t(v)}):t.t("untilFormat",{event:t.t(v),duration:M});r.push({minutes:D,compact:E($??f),duration:M,time:g.time,rising:g.rising,trailing:_,name:t.t(f),long:E(f),title:`${t.t(f)} ${se(g.time,t)}${g.dayOffset>0?` (${Un(g.dayOffset,t.t)})`:""}`,icon:x,body:N})},l=e.extras.nextSunEvent;a(l,l?.rising?"sunrise":"sunset",l?.rising?"sunriseShort":"sunsetShort",l?.rising?Ko(dt):Wo(dt),"sun");let d=e.extras.nextTwilightEvent;if(d){let g=this._twilightKeys();a(d,d.rising?g.dawn:g.dusk,d.rising?g.dawnShort:g.duskShort,d.rising?Wn(dt):Bn(dt),"twilight")}let u=e.extras.nextMoonEvent;a(u,u?.rising?"moonrise":"moonset",u?.rising?"moonriseShort":"moonsetShort",u?.rising?Bo(dt):xs(dt),"moon");let p=e.extras.goldenHour;if(p){let g=p.active?p.end:p.start;g&&a({time:g,rising:!p.active,dayOffset:this._dayOffset(g,e)},p.active?"goldenHourEnd":"goldenHour",p.active?"goldenHourEndShort":"goldenHourShort",_s(dt),"golden")}let m=e.extras.nextFullMoon;return o.show_moon&&m&&a({time:m.time,rising:!0,dayOffset:this._dayOffset(m.time,e)},"fullMoon",null,Bo(dt),"moon",!0),r.sort((g,f)=>+!!g.trailing-+!!f.trailing||g.minutes-f.minutes)}_orderedCountdowns(e,t){let o=this._countdowns(e,t),s=this._config?.remaining_time_focus;if(s==="next")return o;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let a of r){let l=o.findIndex(d=>d.body===a&&!d.trailing);l>0&&o.unshift(...o.splice(l,1))}return o}_dayOffset(e,t){return De(e,t.timeZone)-De(t.now,t.timeZone)}_primaryCountdown(e,t){return this._orderedCountdowns(e,t).find(o=>!o.trailing)}_chartCountdown(e,t,o){let s=this._primaryCountdown(e,t);return s?{time:s.time,rising:s.rising,body:s.body,label:o.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let e=this._config?.twilight_level;return e==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:e==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(e,t){return S`
      <div class="legend" aria-hidden="true" style=${W({height:`${t}px`})}>
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
    `}_renderSkyReadout(e,t,o,s){let r=this._config,a=[],l=(d,u,p)=>{let m=ne(u,1,t.locale),g=`${Math.round(p)}\xB0 ${Ue(p,t.language)}`;return S`<span
        title=${`${t.t("elevation")} ${m} \xB7 ${t.t("azimuth")} ${g}`}
        >${t.t("positionReadout",{body:d,altitude:m,degrees:String(Math.round(p)),direction:Ue(p,t.language)})}</span
      >`};r.show_sun&&a.push(l(t.t("sun"),e.sun.altitude,e.sun.azimuth)),r.show_moon&&a.push(l(t.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth));for(let d of this._orderedCountdowns(e,t).slice(0,s))a.push(S`<span title=${d.title}>${d.long}</span>`);return a.length===0||o<150?T:S`<div class="sky-readout">${a}</div>`}_countdownRows(e){let t=this._config,o=(t.show_sun?1:0)+(t.show_moon?1:0),s=e.chartHeight+e.legendHeight+(e.showLegend?Do:0),r=o*Co+Do,a=s-r-os;return Math.max(0,Math.min(3,Math.floor(a/Co)))}_renderFooter(e,t,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),l=t.t(r),d=e.extras.timeZoneLongName,u=t.t("footerMethod"),p=`${l} \xB7 ${d} \xB7 ${u}`,m=9.5*.55,g=x=>x.length*m<=a,f=g(`${l} \xB7 ${d}`)?`${l} \xB7 ${d}`:l,$=g(`${f} \xB7 ${u}`);return S`
      <div
        class="footer"
        title=${p}
        style=${W({height:`${s.footerHeight}px`})}
      >
        <span class="part">${f}</span>
        ${$?S`<span class="part">${u}</span>`:T}
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,t){switch(e.sun.phase){case"day":return t.day;case"civil":return t.civil;case"nautical":return t.nautical;case"astronomical":return t.astronomical;default:return t.night}}_fitLabel(e,t,o,s=.7){for(let r of e)if(r&&r.length*o*s<=t)return r;return null}_renderCountdownTile(e,t,o,s,r,a,l){let u=e.body==="sun"&&!e.rising?t.t("tileDaylightLeft"):t.t("tileUntil",{event:e.name}),p=this._fitLabel([u,e.name],r,a),m=this._fitLabel([e.duration],r,l+2)??e.duration;return S`<div
      class=${fe({"event-tile":!0,countdown:!0,rising:e.rising,compact:o})}
      data-body=${e.body}
      style=${W({gridColumn:`span ${s}`})}
      title=${e.title}
      role="img"
      aria-label=${e.long}
    >
      <span class="event-head">
        <span class="event-icon">${e.icon}</span>
        <span class="event-time" style=${W({fontSize:`${l+2}px`})}
          >${m}</span
        >
        ${o&&p?S`<span class="event-label" style=${W({fontSize:`${a}px`})}
              >${p}</span
            >`:T}
      </span>
      ${!o&&p?S`<span class="event-label" style=${W({fontSize:`${a}px`})}
            >${p}</span
          >`:T}
    </div>`}_renderEvents(e,t,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),l=this._config,d=[];if(l.show_twilight&&d.push({key:"civilDawn",kind:"dawn",label:t.t("civilDawn"),shortLabel:t.t("civilDawnShort"),time:e.events.civilDawn,icon:Wn(s?14:16),missingText:t.t("noEvent")}),d.push({key:"sunrise",kind:"sunrise",label:t.t("sunrise"),shortLabel:t.t("sunriseShort"),time:e.events.sunrise,icon:Ko(s?14:16),missingText:t.t("noSunrise")}),d.push({key:"sunset",kind:"sunset",label:t.t("sunset"),shortLabel:t.t("sunsetShort"),time:e.events.sunset,icon:Wo(s?14:16),missingText:t.t("noSunset")}),l.show_twilight&&d.push({key:"civilDusk",kind:"dusk",label:t.t("civilDusk"),shortLabel:t.t("civilDuskShort"),time:e.events.civilDusk,icon:Bn(s?14:16),missingText:t.t("noEvent")}),l.twilight_level==="all"||l.show_astronomical_details){let A=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[G,q,z]of A)d.push({key:G,kind:z,label:t.t(G),shortLabel:t.t(G),time:q,icon:z==="dawn"?Wn(s?13:15):Bn(s?13:15),secondary:!0,missingText:t.t("noEvent")})}let u=a<300?3:a<420?4:a<560?6:8,p=l.show_countdown_tile?this._primaryCountdown(e,t):void 0,m=p?2:0,g=Math.max(2,u-m),f=A=>A.secondary?2:A.kind==="sunrise"||A.kind==="sunset"?0:1,$=new Set([...d].map((A,G)=>({tile:A,index:G})).sort((A,G)=>f(A.tile)-f(G.tile)||A.index-G.index).slice(0,g).map(A=>A.tile)),x=d.filter(A=>$.has(A)),N=e.now.getTime(),_=x.filter(A=>A.time&&A.time.getTime()>N).sort((A,G)=>A.time.getTime()-G.time.getTime())[0],D=6,H=x.length+m,E=Math.max(40,a-2*r-D*(H-1))/H-10,v=s?E<120?8.5:9:E<92?8.5:9.5,C=E<74?11:E<96?12:12.5;return S`
      <div
        class="events"
        style=${W({gap:`${D}px`,height:`${o.eventsHeight}px`})}
      >
        ${p?this._renderCountdownTile(p,t,s,m,E*m+(m-1)*(D+10),v,C):T}
        ${x.map(A=>{let G=this._fitLabel([A.label,A.shortLabel],E,v),q=A.time?se(A.time,t):A.missingText,z=this._fitLabel([q,"\u2014"],E,C)??"\u2014";return S`
            <div
              class=${fe({"event-tile":!0,[A.kind]:!0,secondary:!!A.secondary,next:A===_,compact:s})}
              title=${`${A.label}: ${q}`}
            >
              <span class="event-head">
                <span class="event-icon">${A.icon}</span>
                <span
                  class=${fe({"event-time":!0,missing:!A.time})}
                  style=${W({fontSize:`${C}px`})}
                >
                  ${z}
                </span>
                ${s&&G?S`<span
                      class="event-label"
                      style=${W({fontSize:`${v}px`})}
                      >${G}</span
                    >`:T}
              </span>
              ${!s&&G?S`<span
                    class="event-label"
                    style=${W({fontSize:`${v}px`})}
                    >${G}</span
                  >`:T}
            </div>
          `})}
      </div>
    `}_renderDetails(e,t,o,s,r,a,l){let d=e.extras,u=e.moon.haPhaseName??e.moon.phase.phaseKey,p=s.skyViewInline&&l>=430,m=(o.show_sun?1:0)+(o.show_moon?1:0)+(p?1:0),f=Math.max(60,l-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,$=this._fitLabel([t.t("sunAltitude"),t.t("elevation")],f,10.5),x=ne(e.sun.altitude,1,t.locale),N=`${Math.round(e.sun.azimuth)}\xB0 ${Ue(e.sun.azimuth,r)}`,_=d.sunBelowHorizon!==null?`${ne(d.sunBelowHorizon,1,t.locale)} ${t.t("belowHorizon")}`:null,D=this._fitLabel([_?`${_} \xB7 ${N}`:`${t.t("azimuth")} ${N}`,_??N,N],f,9.5),H=d.sunriseAzimuth!==null?`${Math.round(d.sunriseAzimuth)}\xB0 ${Ue(d.sunriseAzimuth,r)}`:null,M=d.sunsetAzimuth!==null?`${Math.round(d.sunsetAzimuth)}\xB0 ${Ue(d.sunsetAzimuth,r)}`:null,E=o.show_astronomical_details&&H&&M?this._fitLabel([t.t("sunAzimuthAtEvents",{rise:H,set:M}),`${Math.round(d.sunriseAzimuth)}\xB0 / ${Math.round(d.sunsetAzimuth)}\xB0`],f,9.5):null,v=o.show_astronomical_details?this._fitLabel([`${t.t("solarNoon")} ${e.events.solarNoon?se(e.events.solarNoon,t):"\u2014"} \xB7 ${ne(e.day.maxAltitude,1,t.locale)}`,e.events.solarNoon?se(e.events.solarNoon,t):null],f,9.5):null,C=this._fitLabel([t.t(u),t.t("moon")],f,10.5),A=Kn(e.moon.phase.illumination,t.locale),G=this._fitLabel([`${A} ${t.t("illumination")}`,A],f,13),q=e.moon.position.apparentAltitude,z=ne(q,1,t.locale),B=`${Math.round(e.moon.position.azimuth)}\xB0 ${Ue(e.moon.position.azimuth,r)}`,L=`${t.t("elevation")} ${z} \xB7 ${t.t("azimuth")} ${B}`,w=q>=0?[`${t.t("elevation")} ${z} \xB7 ${B}`,`${z} \xB7 ${B}`,z]:[`${ne(Math.abs(q),1,t.locale)} ${t.t("belowHorizon")} \xB7 ${B}`,`${ne(Math.abs(q),1,t.locale)} ${t.t("belowHorizon")}`,z],I=null,Z="";if(d.moonDistance){let{current:O,min:ae,max:ce}=d.moonDistance,j=Math.max(1,ce-ae),be=O<=ae+j*.2,Se=O>=ae+j*.8,ye=Gn(O,t.locale),Je=be?t.t("nearPerigee"):Se?t.t("nearApogee"):"";Z=`${t.t("moonDistance")}: ${ye} \xB7 ${t.t("distanceRange",{min:Gn(ae,t.locale),max:Gn(ce,t.locale)})}`,I=this._fitLabel(Je?[`${ye} \xB7 ${Je}`,ye]:[ye],f,9.5)}let F=this._fitLabel(I?w.flatMap(O=>[`${O} \xB7 ${I}`,O]):w,f,9.5),Q=I!==null&&(F?.includes(I)??!1),J=null,ve="";if(o.show_astronomical_details&&d.nextFullMoon){let O=d.nextFullMoonDays??0,ae=O<=0?t.t("dayToday"):t.t("inDays",{days:String(O)}),ce=`${t.t("nextFullMoon")} ${ae}`,j=d.blueMoon?` \xB7 ${t.t("blueMoon")}`:"",be=`${ce}${j}${d.moonFolkName?` \xB7 ${d.moonFolkName}`:""}`;ve=d.blueMoon?t.t("blueMoonHint"):d.moonFolkName?t.t("folkNameHint"):t.t("nextFullMoon"),J=this._fitLabel([be,`${ce}${j}`,ce],f,9.5)}let U=o.show_moon_times?this._fitLabel([this._moonTimesText(e,t,!1),this._moonTimesText(e,t,!0)],f,9.5):null,ee=[];F&&ee.push({text:F,title:L,position:!0}),U&&ee.push({text:U,title:null}),J&&ee.push({text:J,title:ve}),I&&!Q&&ee.push({text:I,title:Z});let Me=ee.slice(0,s.detailsHeight>=Lo?3:2),re=Q||Me.some(O=>O.text===I),me=I&&!re?Z||I:null;return S`
      <div
        class="details"
        style=${W({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?S`
              <div class="detail-tile sun">
                <span class="detail-icon">${jn(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${$?S`<span class="detail-title">${$}</span>`:T}
                  <span class="detail-value">${x}</span>
                  ${D?S`<span class="detail-sub">${D}</span>`:T}
                  ${v?S`<span class="detail-sub">${v}</span>`:T}
                  ${E?S`<span class="detail-sub">${E}</span>`:T}
                </span>
              </div>
            `:T}
        ${o.show_moon?S`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Fe({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${C?S`<span class="detail-title">${C}</span>`:T}
                  ${G?S`<span class="detail-value">${G}</span>`:T}
                  ${Me.map(O=>{let ae=[O.title,O.position?me:null].filter(Boolean).join(" \xB7 ")||null;return S`<span class="detail-sub" title=${ae??T}
                      >${O.text}</span
                    >`})}
                </span>
              </div>
            `:T}
        ${p?S`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${Go({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?To:Ao,format:t,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:De(e.now,e.timeZone)})}
                </span>
              </div>
            `:T}
      </div>
    `}_moonTimesText(e,t,o){let s=e.extras.moonRise,r=e.extras.moonSet,a=s&&s.dayOffset!==0?` ${Un(s.dayOffset,t.t)}`:"",l=s?`\u2191 ${se(s.time,t)}${a}`:"\u2191 \u2014";if(o)return l;let d=r&&r.dayOffset!==0?` ${Un(r.dayOffset,t.t)}`:"",u=r?`\u2193 ${se(r.time,t)}${d}`:"\u2193 \u2014";return`${l} \xB7 ${u}`}_renderMinimalTimes(e,t,o,s){if(o.minimalTimesHeight<=0)return T;let r=t.t,a=[];if(s.minimal_show_times&&e.events.sunrise){let d=se(e.events.sunrise,t);a.push(S`<span class="minimal-time rise" title=${`${r("sunrise")} ${d}`}
          >↑ ${d}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let d=se(e.events.solarNoon,t),u=o.chartWidth<250?d:`${r("zenith")} ${d}`;a.push(S`<span class="minimal-time zenith" title=${`${r("zenith")} ${d}`}
          >${u}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let d=se(e.events.sunset,t);a.push(S`<span class="minimal-time set" title=${`${r("sunset")} ${d}`}
          >↓ ${d}</span
        >`)}if(a.length===0)return T;let l=k(c(o.minimalTimesHeight*.78,1),8,12);return S`<div
      class="minimal-times"
      style=${W({height:`${o.minimalTimesHeight}px`,fontSize:`${l}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(e,t){return`${this._minimalTitle(e,t)}, ${t.t("popupOpenHint")}`}_minimalTitle(e,t){let o=[this._ariaLabel(e,t)];o.push(`${t.t("sun")} ${ne(e.sun.altitude,0,t.locale)}`);let s=this._primaryCountdown(e,t);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(e,t){let o=[t.t("title")];return o.push(t.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${t.t("sunrise")} ${se(e.events.sunrise,t)}`),e.events.sunset&&o.push(`${t.t("sunset")} ${se(e.events.sunset,t)}`),o.join(", ")}};Ye.styles=zs,He([Ht({attribute:!1})],Ye.prototype,"hass",1),He([$t()],Ye.prototype,"_config",2),He([$t()],Ye.prototype,"_width",2),He([$t()],Ye.prototype,"_tick",2),Ye=He([Tn(So)],Ye);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(n=>n.type===`custom:${On}`)||window.customCards.push({type:`custom:${On}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Ye as SunMoonCard};
