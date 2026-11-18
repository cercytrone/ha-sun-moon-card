var Xs=Object.defineProperty;var Js=Object.getOwnPropertyDescriptor;var Dt=(o,e,t,n)=>{for(var i=n>1?void 0:n?Js(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&Xs(e,t,i),i};var rn=globalThis,an=rn.ShadowRoot&&(rn.ShadyCSS===void 0||rn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hn=Symbol(),eo=new WeakMap,Ne=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(an&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=eo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&eo.set(t,e))}return e}toString(){return this.cssText}},no=o=>new Ne(typeof o=="string"?o:o+"",void 0,Hn),ln=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new Ne(t,o,Hn)},io=(o,e)=>{if(an)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=rn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},Rn=an?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return no(t)})(o):o;var{is:Ys,defineProperty:Qs,getOwnPropertyDescriptor:tr,getOwnPropertyNames:er,getOwnPropertySymbols:nr,getPrototypeOf:ir}=Object,cn=globalThis,oo=cn.trustedTypes,or=oo?oo.emptyScript:"",sr=cn.reactiveElementPolyfillSupport,He=(o,e)=>o,Re={toAttribute(o,e){switch(e){case Boolean:o=o?or:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},un=(o,e)=>!Ys(o,e),so={attribute:!0,type:String,converter:Re,reflect:!1,useDefault:!1,hasChanged:un};Symbol.metadata??=Symbol("metadata"),cn.litPropertyMetadata??=new WeakMap;var zt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=so){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Qs(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:s}=tr(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let l=i?.call(this);s?.call(this,r),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??so}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;let e=ir(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){let t=this.properties,n=[...er(t),...nr(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Rn(i))}else e!==void 0&&t.push(Rn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return io(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Re).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Re;this._$Em=i;let l=r.fromAttribute(t,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){if(e!==void 0){let r=this.constructor;if(i===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??un)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};zt.elementStyles=[],zt.shadowRootOptions={mode:"open"},zt[He("elementProperties")]=new Map,zt[He("finalized")]=new Map,sr?.({ReactiveElement:zt}),(cn.reactiveElementVersions??=[]).push("2.1.2");var Un=globalThis,ro=o=>o,dn=Un.trustedTypes,ao=dn?dn.createPolicy("lit-html",{createHTML:o=>o}):void 0,po="$lit$",Zt=`lit$${Math.random().toFixed(9).slice(2)}$`,go="?"+Zt,rr=`<${go}>`,le=document,ze=()=>le.createComment(""),Ie=o=>o===null||typeof o!="object"&&typeof o!="function",Kn=Array.isArray,ar=o=>Kn(o)||typeof o?.[Symbol.iterator]=="function",Pn=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lo=/-->/g,co=/>/g,re=RegExp(`>|${Pn}(?:([^\\s"'>=/]+)(${Pn}*=${Pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uo=/'/g,ho=/"/g,fo=/^(?:script|style|textarea|title)$/i,Wn=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),T=Wn(1),b=Wn(2),ma=Wn(3),Et=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),mo=new WeakMap,ae=le.createTreeWalker(le,129);function bo(o,e){if(!Kn(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ao!==void 0?ao.createHTML(e):e}var lr=(o,e)=>{let t=o.length-1,n=[],i,s=e===2?"<svg>":e===3?"<math>":"",r=Pe;for(let l=0;l<t;l++){let a=o[l],d,u,p=-1,m=0;for(;m<a.length&&(r.lastIndex=m,u=r.exec(a),u!==null);)m=r.lastIndex,r===Pe?u[1]==="!--"?r=lo:u[1]!==void 0?r=co:u[2]!==void 0?(fo.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=re):u[3]!==void 0&&(r=re):r===re?u[0]===">"?(r=i??Pe,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?re:u[3]==='"'?ho:uo):r===ho||r===uo?r=re:r===lo||r===co?r=Pe:(r=re,i=void 0);let g=r===re&&o[l+1].startsWith("/>")?" ":"";s+=r===Pe?a+rr:p>=0?(n.push(d),a.slice(0,p)+po+a.slice(p)+Zt+g):a+Zt+(p===-2?l:g)}return[bo(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Oe=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,r=0,l=e.length-1,a=this.parts,[d,u]=lr(e,t);if(this.el=o.createElement(d,n),ae.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ae.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(po)){let m=u[r++],g=i.getAttribute(p).split(Zt),$=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:$[2],strings:g,ctor:$[1]==="."?In:$[1]==="?"?On:$[1]==="@"?Gn:$e}),i.removeAttribute(p)}else p.startsWith(Zt)&&(a.push({type:6,index:s}),i.removeAttribute(p));if(fo.test(i.tagName)){let p=i.textContent.split(Zt),m=p.length-1;if(m>0){i.textContent=dn?dn.emptyScript:"";for(let g=0;g<m;g++)i.append(p[g],ze()),ae.nextNode(),a.push({type:2,index:++s});i.append(p[m],ze())}}}else if(i.nodeType===8)if(i.data===go)a.push({type:2,index:s});else{let p=-1;for(;(p=i.data.indexOf(Zt,p+1))!==-1;)a.push({type:7,index:s}),p+=Zt.length-1}s++}}static createElement(e,t){let n=le.createElement("template");return n.innerHTML=e,n}};function be(o,e,t=o,n){if(e===Et)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,s=Ie(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=be(o,i._$AS(o,e.values),i,n)),e}var zn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??le).importNode(t,!0);ae.currentNode=i;let s=ae.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new Ge(s,s.nextSibling,this,e):a.type===1?d=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(d=new Fn(s,this,e)),this._$AV.push(d),a=n[++l]}r!==a?.index&&(s=ae.nextNode(),r++)}return ae.currentNode=le,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Ge=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=be(this,e,t),Ie(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ar(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&Ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(le.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Oe.createElement(bo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new zn(i,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=mo.get(e.strings);return t===void 0&&mo.set(e.strings,t=new Oe(e)),t}k(e){Kn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let s of e)i===t.length?t.push(n=new o(this.O(ze()),this.O(ze()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ro(e).nextSibling;ro(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},$e=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,i){let s=this.strings,r=!1;if(s===void 0)e=be(this,e,t,0),r=!Ie(e)||e!==this._$AH&&e!==Et,r&&(this._$AH=e);else{let l=e,a,d;for(e=s[0],a=0;a<s.length-1;a++)d=be(this,l[n+a],t,a),d===Et&&(d=this._$AH[a]),r||=!Ie(d)||d!==this._$AH[a],d===M?e=M:e!==M&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!i&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},In=class extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},On=class extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Gn=class extends $e{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=be(this,e,t,0)??M)===Et)return;let n=this._$AH,i=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==M&&(n===M||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Fn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){be(this,e)}};var cr=Un.litHtmlPolyfillSupport;cr?.(Oe,Ge),(Un.litHtmlVersions??=[]).push("3.3.3");var $o=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let s=t?.renderBefore??null;n._$litPart$=i=new Ge(e.insertBefore(ze(),s),s,void 0,t??{})}return i._$AI(o),i};var Bn=globalThis,Lt=class extends zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$o(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Et}};Lt._$litElement$=!0,Lt.finalized=!0,Bn.litElementHydrateSupport?.({LitElement:Lt});var ur=Bn.litElementPolyfillSupport;ur?.({LitElement:Lt});(Bn.litElementVersions??=[]).push("4.2.2");var hn=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};var dr={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:un},hr=(o=dr,e,t)=>{let{kind:n,metadata:i}=t,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(t.name,o),n==="accessor"){let{name:r}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,o,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,o,l),l}}}if(n==="setter"){let{name:r}=t;return function(l){let a=this[r];e.call(this,l),this.requestUpdate(r,a,o,!0,l)}}throw Error("Unsupported decorator location: "+n)};function ye(o){return(e,t)=>typeof t=="object"?hr(o,e,t):((n,i,s)=>{let r=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(i,s):void 0})(o,e,t)}function ve(o){return ye({...o,state:!0,attribute:!1})}var pn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gn=o=>(...e)=>({_$litDirective$:o,values:e}),_e=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var yt=gn(class extends _e{constructor(o){if(super(o),o.type!==pn.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=o.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let i=!!e[n];i===this.st.has(n)||this.nt?.has(n)||(i?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Et}});var yo="important",mr=" !"+yo,W=gn(class extends _e{constructor(o){if(super(o),o.type!==pn.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let n=o[t];return n==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?t.removeProperty(n):t[n]=null);for(let n in e){let i=e[n];if(i!=null){this.ft.add(n);let s=typeof i=="string"&&i.endsWith(mr);n.includes("-")||s?t.setProperty(n,s?i.slice(0,-11):i,s?yo:""):t[n]=i}}return Et}});var vo=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],_o=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],wo=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],jn=385000.49;var j=Math.PI/180,At=180/Math.PI,pr=1495978707e-1,ko=6378.14,Fe=-.833,Nt=-6,It=-12,Ot=-18,fn=6,Ke=-4,Mo=-6,Ue=120*1e3;function We(o){return(typeof o=="number"?o:o.getTime())/864e5+24405875e-1}function xe(o){return(o-2451545)/36525}function Y(o){let e=o%360;return e<0?e+360:e}function gr(o){let e=xe(o);return 23.439291-.0130042*e-164e-9*e*e+504e-9*e*e*e}function fr(o){let e=o-2451545,t=xe(o),n=280.46061837+360.98564736629*e+387933e-9*t*t-t*t*t/3871e4;return Y(n)}function Vn(o){let e=xe(o),t=Y(280.46646+e*(36000.76983+e*3032e-7)),n=Y(357.52911+e*(35999.05029-1537e-7*e)),i=Math.sin(n*j)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*j)*(.019993-101e-6*e)+Math.sin(3*n*j)*289e-6,s=t+i,r=Y(125.04-1934.136*e),l=s-.00569-.00478*Math.sin(r*j),d=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(r*j),u=l*j,p=d*j,m=Y(Math.atan2(Math.cos(p)*Math.sin(u),Math.cos(u))*At),g=Math.asin(Math.sin(p)*Math.sin(u))*At;return{ra:m,dec:g}}function br(o){let e=xe(o),t=Y(280.46646+e*(36000.76983+e*3032e-7)),n=Y(357.52911+e*(35999.05029-1537e-7*e)),i=Math.sin(n*j)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*j)*(.019993-101e-6*e)+Math.sin(3*n*j)*289e-6,s=Y(125.04-1934.136*e);return Y(t+i-.00569-.00478*Math.sin(s*j))}function $r(o){let e=We(o),t=xe(e),n=Y(357.52911+t*(35999.05029-1537e-7*t)),i=.016708634-t*(42037e-9+1267e-10*t),s=Math.sin(n*j)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*j)*(.019993-101e-6*t)+Math.sin(3*n*j)*289e-6,r=(n+s)*j;return 1.000001018*(1-i*i)/(1+i*Math.cos(r))*pr}function Zn(o,e,t,n){let i=Y(fr(n)+t),s=Y(i-o.ra),r=e*j,l=o.dec*j,a=s*j,d=Math.asin(Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(a))*At,u=Y(Math.atan2(Math.sin(a),Math.cos(a)*Math.sin(r)-Math.tan(l)*Math.cos(r))*At+180);return{altitude:d,azimuth:u}}function Be(o,e){let t=We(o);return Zn(Vn(t),e.latitude,e.longitude,t).altitude}function bn(o,e){let t=We(o);return Zn(Vn(t),e.latitude,e.longitude,t)}function yr(o){let e=o;return{D:Y(297.8501921+445267.1114034*e-.0018819*e*e+e*e*e/545868-e*e*e*e/113065e3),M:Y(357.5291092+35999.0502909*e-1536e-7*e*e+e*e*e/2449e4),Mp:Y(134.9633964+477198.8675055*e+.0087414*e*e+e*e*e/69699-e*e*e*e/14712e3),F:Y(93.272095+483202.0175233*e-.0036539*e*e-e*e*e/3526e3+e*e*e*e/86331e4)}}function So(o){let e=xe(o),t=Y(218.3164477+481267.88123421*e-.0015786*e*e+e*e*e/538841-e*e*e*e/65194e3),n=yr(e),i=t;for(let l of vo){let a=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;i+=l[4]*Math.sin(a*j)}let s=0;for(let l of _o){let a=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;s+=l[4]*Math.sin(a*j)}let r=jn;for(let l of wo){let a=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;r+=l[4]*Math.cos(a*j)}return{longitude:Y(i),latitude:s,distanceKm:r}}function To(o,e,t){let n=gr(t)*j,i=o*j,s=e*j,r=Y(Math.atan2(Math.sin(i)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(i))*At),l=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(i))*At;return{ra:r,dec:l}}function qt(o,e){let t=We(o),n=So(t),i=To(n.longitude,n.latitude,t),s=Zn(i,e.latitude,e.longitude,t),r=Math.asin(ko/n.distanceKm)*At,l=s.altitude-r*Math.cos(s.altitude*j);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:l,equatorial:i,geocentric:n}}function vr(o){return .7275*(Math.asin(ko/o)*At)-.5667}var _r=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],wr=29.530588853;function $n(o){let e=We(o),t=So(e),n=To(t.longitude,t.latitude,e),i=Vn(e),s=br(e),r=$r(o),l=t.distanceKm,a=t.latitude*j,d=Math.acos(Math.min(1,Math.max(-1,Math.cos(a)*Math.cos((t.longitude-s)*j)))),u=Math.atan2(r*Math.sin(d),l-r*Math.cos(d)),p=Y(u*At),m=(1+Math.cos(u))/2,g=(i.ra-n.ra)*j,$=i.dec*j,_=n.dec*j,x=Y(Math.atan2(Math.cos($)*Math.sin(g),Math.sin($)*Math.cos(_)-Math.cos($)*Math.sin(_)*Math.cos(g))*At),L=Y(t.longitude-s)/360,v=Math.min(7,Math.floor(L*8+.5)%8),S=L*29.530588853;return{illumination:m,phaseAngle:p,elongation:d*At,phaseIndex:v,phaseKey:_r[v],brightLimbAngle:x,moonAgeDays:S,waxing:L<.5,distanceKm:l}}function we(o,e,t,n,i){let s=[];if(!(e>o))return s;let r=Math.max(2,Math.ceil((e-o)/t)),l=(e-o)/r,a=o,d=n(o)-i;for(let u=1;u<=r;u++){let p=o+u*l,m=n(p)-i;if(d===0)s.push({time:a,rising:m>0});else if(d<0&&m>=0||d>0&&m<=0){let g=a,$=p,_=d;for(let x=0;x<50&&$-g>1;x++){let L=(g+$)/2,v=n(L)-i;v<0&&_<0||v>0&&_>0?(g=L,_=v):$=L}s.push({time:(g+$)/2,rising:m>d})}a=p,d=m}return s}function xo(o,e,t,n){let i=o.find(s=>s.rising===e&&s.time>=t&&s.time<n);return i?new Date(i.time):null}function qn(o,e,t,n=4){let i=e.getTime()-27e5,s=t.getTime()+2700*1e3,r=e.getTime(),l=t.getTime(),a=k=>Be(k,o),d=[],u=Math.max(3e4,Math.round(n*60*1e3));for(let k=r;k<l;k+=u)d.push({time:k,altitude:a(k)});d.push({time:l,altitude:a(l)});let p=-1/0,m=1/0;for(let k of d)k.altitude>p&&(p=k.altitude),k.altitude<m&&(m=k.altitude);let g=[["sunrise","sunset",Fe],["civilDawn","civilDusk",Nt],["nauticalDawn","nauticalDusk",It],["astronomicalDawn","astronomicalDusk",Ot]],$={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[k,A,P]of g){let H=we(i,s,Ue,a,P);$[k]=xo(H,!0,r,l),$[A]=xo(H,!1,r,l)}let _=r,x=-1/0,L=120*1e3;for(let k=r;k<=l;k+=L){let A=a(k);A>x&&(x=A,_=k)}let v=Math.max(r,_-L),S=Math.min(l,_+L);for(let k=0;k<40&&S-v>1e3;k++){let A=v+(S-v)/3,P=S-(S-v)/3;a(A)<a(P)?v=A:S=P}$.solarNoon=new Date((v+S)/2);let N="none";return m>Fe?N="polar-day":p<Fe&&(N="polar-night"),{dayStart:e,dayEnd:t,samples:d,maxAltitude:p,minAltitude:m,events:$,polar:N}}function Xn(o,e,t,n=48){let i=typeof e=="number"?e:e.getTime();if(!Number.isFinite(i)||!Number.isFinite(t))return null;let s=l=>Be(l,o),r=we(i,i+n*60*60*1e3,Ue,s,t)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Eo(o,e,t,n,i=48){let s=typeof e=="number"?e:e.getTime();if(!Number.isFinite(s)||!(t<n))return null;let r=m=>Be(m,o),l=s+i*60*60*1e3,a=[...we(s,l,Ue,r,t),...we(s,l,Ue,r,n)].sort((m,g)=>m.time-g.time),d=m=>m>=t&&m<=n,u=d(r(s)),p=u?s:null;for(let m of a){let g=d(r(m.time+1e3));if(p===null&&g)p=m.time;else if(p!==null&&!g)return{start:new Date(p),end:new Date(m.time),active:u}}return p===null?null:{start:new Date(p),end:null,active:u}}function xr(o,e,t,n=10){let i=e.getTime(),s=t.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),l=[];for(let u=i;u<s;u+=r)l.push({time:u,altitude:qt(u,o).apparentAltitude});l.push({time:s,altitude:qt(s,o).apparentAltitude});let a=-1/0,d=1/0;for(let u of l)u.altitude>a&&(a=u.altitude),u.altitude<d&&(d=u.altitude);return{samples:l,maxAltitude:a,minAltitude:d}}function Ao(o,e,t,n,i=10){let s=e.getTime(),r=t.getTime(),l=a=>{if(!a)return null;let d=a.getTime();return d>=s&&d<r?d:null};return{profile:xr(o,e,t,i),rise:l(n.previousRise)??l(n.nextRise),set:l(n.previousSet)??l(n.nextSet)}}function Co(o,e){let t=o.getTime(),n=t-1800*60*1e3,i=t+1800*60*1e3,r=we(n,i,Ue,g=>{let $=qt(g,e);return $.altitude-vr($.distanceKm)},0),l=r.filter(g=>g.rising),a=r.filter(g=>!g.rising),d=l.find(g=>g.time>t)??null,u=[...l].reverse().find(g=>g.time<=t)??null,p=a.find(g=>g.time>t)??null,m=[...a].reverse().find(g=>g.time<=t)??null;return{previousRise:u?new Date(u.time):null,previousSet:m?new Date(m.time):null,nextRise:d?new Date(d.time):null,nextSet:p?new Date(p.time):null}}function Do(o){return o>0?"day":o>Nt?"civil":o>It?"nautical":o>Ot?"astronomical":"night"}function kr(o){return((($n(o).moonAgeDays/wr-.5)%1+1)%1+.5)%1-.5}function Jn(o,e){let t=typeof o=="number"?o:o.getTime(),n=typeof e=="number"?e:e.getTime();return n>t?we(t,n,360*60*1e3,kr,0).filter(i=>i.rising).map(i=>new Date(i.time)):[]}function Lo(o,e=32){let t=typeof o=="number"?o:o.getTime(),i=Jn(t,t+e*24*60*60*1e3)[0];if(!i)return null;let s=$n(i).illumination;return s<.98?null:{time:i,illumination:s}}function No(o,e,t=14){let n=typeof o=="number"?o:o.getTime(),i=360*60*1e3,s=n-t*24*60*60*1e3,r=n+t*24*60*60*1e3,l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,d=s,u=s;for(let p=s;p<=r;p+=i){let m=qt(p,e).distanceKm;m<l&&(l=m,d=p),m>a&&(a=m,u=p)}return{current:qt(n,e).distanceKm,min:l,minTime:new Date(d),max:a,maxTime:new Date(u),mean:jn}}function yn(o,e,t="sun"){return(t==="sun"?bn(o,e):qt(o,e)).azimuth}function w(o,e,t){return Number.isNaN(o)?e:Math.min(t,Math.max(e,o))}function Yn(o,e,t){return o+(e-o)*t}function c(o,e=0){let t=10**e;return Math.round(o*t)/t}function Ho(o){let e=o.trim().replace(/^#/,""),t=e.length===3?e.split("").map(i=>i+i).join(""):e;if(!/^[0-9a-fA-F]{6}$/.test(t))return null;let n=Number.parseInt(t,16);return[n>>16&255,n>>8&255,n&255]}function Mr(o){return`#${o.map(e=>Math.round(w(e,0,255)).toString(16).padStart(2,"0")).join("")}`}function Qn(o,e,t){let n=Ho(o),i=Ho(e);if(!n||!i)return e;let s=w(t,0,1);return Mr([Yn(n[0],i[0],s),Yn(n[1],i[1],s),Yn(n[2],i[2],s)])}function ti(o){return typeof o=="number"&&Number.isFinite(o)}function xt(o){if(typeof o=="number"&&Number.isFinite(o))return o;if(typeof o=="string"&&o.trim()!==""){let e=Number(o.replace(",","."));if(Number.isFinite(e))return e}return null}function Ro(o){return o.length===0?"":o.map((e,t)=>`${t===0?"M":"L"}${c(e.x,2)} ${c(e.y,2)}`).join(" ")}function vn(o,e=.5){if(o.length<3)return Ro(o);let t=[`M${c(o[0].x,2)} ${c(o[0].y,2)}`];for(let n=0;n<o.length-1;n++){let i=o[n-1]??o[n],s=o[n],r=o[n+1],l=o[n+2]??r,a=s.x+(r.x-i.x)/6*e*2,d=s.y+(r.y-i.y)/6*e*2,u=r.x-(l.x-s.x)/6*e*2,p=r.y-(l.y-s.y)/6*e*2;t.push(`C${c(a,2)} ${c(d,2)} ${c(u,2)} ${c(p,2)} ${c(r.x,2)} ${c(r.y,2)}`)}return t.join(" ")}function _n(o,e,t=!1){if(o.length===0)return"";let n=t?vn(o):Ro(o),i=o[0],s=o[o.length-1];return`${n} L${c(s.x,2)} ${c(e,2)} L${c(i.x,2)} ${c(e,2)} Z`}function Gt(o,e,t){let n=t*Math.PI/180;return{x:o.x-e*Math.sin(n),y:o.y-e*Math.cos(n)}}function Po(o,e,t){let n=w(t,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${c(o.x-e,2)} ${c(o.y,2)} a${c(e,2)} ${c(e,2)} 0 1 1 ${c(e*2,2)} 0 a${c(e,2)} ${c(e,2)} 0 1 1 ${c(-e*2,2)} 0 Z`;let i=e*(1-2*n),s=1,r=i>0?0:1,l={x:o.x-e,y:o.y},a={x:o.x+e,y:o.y};return`M${c(l.x,2)} ${c(l.y,2)} A${c(e,2)} ${c(e,2)} 0 0 ${s} ${c(a.x,2)} ${c(a.y,2)} A${c(e,2)} ${c(Math.abs(i),4)} 0 0 ${r} ${c(l.x,2)} ${c(l.y,2)} Z`}function zo(o=new Date){let e=o.getTime();return e+(6e4-e%6e4)+250}var Sr=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Ft(o){let{size:e,illumination:t,brightLimbAngle:n,litColor:i="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:l="",uid:a}=o,d={x:e/2,y:e/2},u=Math.max(1,e/2-.5),p=Po(d,u,t),m=r&&e>=26,g=c(-n,2);return b`
    <svg
      class="moon-disc ${l}"
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
      ${p?b`<g transform="rotate(${g} ${c(d.x,2)} ${c(d.y,2)})">
              <path d="${p}" fill="${i}" />
              ${m?b`<g clip-path="url(#${a}-clip)" opacity="0.16">
                      <clipPath id="${a}-clip">
                        <path d="${p}" />
                      </clipPath>
                      ${Sr.map($=>{let _={x:d.x+$.x*u,y:d.y+$.y*u};return b`<circle
                          cx="${c(_.x,2)}" cy="${c(_.y,2)}"
                          r="${c($.r*u,2)}"
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
  `}function ei(o,e,t,n){let i=Gt(o,e,t),s=t*Math.PI/180,r=-Math.sin(s),l=-Math.cos(s),a=w(e*.12,4,9),d=w(e*.07,2.5,5),u={x:i.x+r*a,y:i.y+l*a},p={x:i.x-l*d,y:i.y+r*d},m={x:i.x+l*d,y:i.y-r*d};return b`
    <polygon
      points="${c(u.x,2)},${c(u.y,2)} ${c(p.x,2)},${c(p.y,2)} ${c(m.x,2)},${c(m.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var xn="sun-moon-card",ai="sun-moon-card",Fo="sun-moon-card-editor";var li=24,Tr=16,ni=4,Er=12,Ar=36,je=[2,12],Xt=[320,1200],Jt=[260,800];function ke(o){return o?[li,800]:[120,800]}var R={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",scene:"city",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},Uo=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],Ko=400,Wo=250,Bo=1200*1e3,ci={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},ui={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},jo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],di=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Ut={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon","scene"],scene:["city","mountains","forest","coast","none"],remainingTimeFocus:["sun","next","golden_hour"]},Vo=700,Cr=260,hi=16,mi=4,Zo=72,Io=10,ri=56,Dr=84,Lr=96,ii=74,Nr=ri+8,Hr=12,Rr=10,$t=4,wn=4,Oo=30,Go=44,Pr=26,zr=72,pi=96,oi=20,si=18;function qo(o,e,t){if(t.minimal_mode){let E=(t.minimal_show_times||t.minimal_show_zenith)&&o>=Ar?Er:0,y=Math.max(Tr,o-2*ni-E);return{padding:ni,minimalTimesHeight:E,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,e-2*ni),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:y,minimal:!0,compact:!1}}let n=t.compact_mode,i=n?Rr:Hr,s=Math.max(40,o-2*i),r=0,l=t.show_footer&&!n?oi+$t:0,a=Oo+$t+Go+$t+l+(si+wn)+ii,d=t.show_header&&!n&&s>=a,u=d?Oo:0;s-=u,d&&(s-=$t,r+=$t);let p=n?Pr:Go,m=t.show_events&&s-(p+$t)-l>=Dr,g=m?p:0;s-=g,m&&(s-=$t,r+=$t);let $=t.show_astronomical_details?pi:zr,_=!n&&(t.show_sun||t.show_moon)&&s-($+$t)-l>=Lr,x=_?$:0;s-=x,_&&(s-=$t,r+=$t);let L=t.show_footer&&!n&&m&&s-(oi+$t)>=Nr,v=L?oi:0;s-=v,L&&(s-=$t,r+=$t);let S=Math.max(ri,s),N=t.show_day_chart&&!n&&m&&S-si-wn>=ii,k=N?si:0;N&&(r+=wn);let A=Math.max(ri,S-k-(N?wn:0)),P=t.show_sky_view&&!n&&(t.show_sun||t.show_moon),H=P&&e>=Vo&&A>=ii,D=Math.max(80,e-2*i),F=H?Math.round(Math.min(Cr,(D-Io)/3)):0,q=Math.max(120,H?D-Io-F:D);return{padding:i,showHeader:d,showEvents:m,showDetails:_,showFooter:L,showLegend:N,skyViewSide:H,skyViewInline:!H&&P&&_,skyViewWidth:F,chartWidth:q,gaps:r,headerHeight:u,eventsHeight:g,detailsHeight:x,footerHeight:v,legendHeight:k,chartHeight:A,minimal:!1,minimalTimesHeight:0,compact:n}}function Xo(o,e){return e==="scene"?o>=712?Math.round(Math.min(560,Math.max(440,o*.6))):520:o>=Vo?360:320}function kn(){return{type:`custom:${xn}`,card_height:340}}var gi={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",sceneNoon:"Solarer Mittag",sceneNoonShort:"Mittag",editorCardStyleScene:"Szene (Himmel mit Silhouette)",editorScene:"Szene",editorSceneCity:"Stadt",editorSceneMountains:"Berge",editorSceneForest:"Wald",editorSceneCoast:"K\xFCste",editorSceneNone:"Keine",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",sceneNoon:"Solar noon",sceneNoonShort:"Noon",editorCardStyleScene:"Scene (sky with silhouette)",editorScene:"Scene",editorSceneCity:"City",editorSceneMountains:"Mountains",editorSceneForest:"Forest",editorSceneCoast:"Coast",editorSceneNone:"None",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function st(o,e,t){let i=(gi[o]??gi.en)[e]??gi.en[e]??String(e);if(t)for(let[s,r]of Object.entries(t))i=i.split(`{${s}}`).join(String(r));return i}function ce(o,e){return((o&&o!=="auto"?o:e)??"").toLowerCase().startsWith("de")?"de":"en"}function Qo(o,e,t){let n=o;if(n==="auto"&&e&&(e==="12"||e==="am_pm"?n="12":e==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let i=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return i.hour12??i.hourCycle==="h12"}catch{return!1}}var Jo=new Map;function fi(o,e,t){let n=`${e}|${o}`,i=Jo.get(n);if(i)return i;let s=o;try{let l=new Intl.DateTimeFormat(e,{timeZone:o,timeZoneName:"long"}).formatToParts(t).find(a=>a.type==="timeZoneName");l&&l.value.trim()!==""&&(s=l.value)}catch{}return Jo.set(n,s),s}var Yo=new Map;function Ir(o,e,t){let n=`${o}|${e}|${t}`,i=Yo.get(n);if(!i){try{i=new Intl.DateTimeFormat(o,{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}catch{i=new Intl.DateTimeFormat("en-GB",{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}Yo.set(n,i)}return i}function nt(o,e){return Ir(e.locale,e.timeZone,e.hour12).format(o)}function bi(o,e){try{return new Intl.DateTimeFormat(e.locale,{weekday:"short",day:"numeric",month:"short",timeZone:e.timeZone}).format(o)}catch{return o.toISOString().slice(0,10)}}function $i(o,e=0,t="de-DE"){try{return new Intl.NumberFormat(t,{minimumFractionDigits:e,maximumFractionDigits:e}).format(o)}catch{return o.toFixed(e)}}function at(o,e=1,t="de-DE"){return`${$i(o,e,t)}\xB0`}function Mn(o,e="de-DE"){return`${$i(Math.round(o),0,e)} km`}function ts(o,e){return`${o<0?"\u2212":"+"}${Sn(Math.abs(o),e)}`}function Sn(o,e){let t=Math.max(0,Math.round(o));if(t<60)return e("countdownMinutes",{minutes:String(t)});let n=Math.floor(t/60),i=t%60;return n<24?e("countdownHours",{hours:String(n),minutes:String(i)}):e("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function Tn(o,e){return e(o===0?"dayToday":o===1?"dayTomorrow":"dayFollowing")}function yi(o,e="de-DE"){return`${$i(o*100,0,e)} %`}function Kt(o,e){let t=(o%360+360)%360,n=di[0],i=1/0;for(let r of di){let l=Math.abs((t-r.deg+540)%360-180);l<i&&(i=l,n=r)}let s=`dir${n.key}`;return st(e,s)}function es(o,e,t,n){return{language:o,locale:e,timeZone:t,hour12:n,t:(i,s)=>st(o,i,s)}}var ns="var(--smc-golden-hour, #f2b544)",Or="var(--smc-blue-hour, #4f6fd6)";function is(o,e,t){let n=[],i=null;for(let s of o){let r=s.altitude>=e&&s.altitude<=t;r&&i===null&&(i=s.time),!r&&i!==null&&(n.push([i,s.time]),i=null)}return i!==null&&o.length&&n.push([i,o[o.length-1].time]),n}function os(o,e){if(o.length<=e)return o;let t=o.length/e,n=[];for(let s=0;s<e;s++)n.push(o[Math.floor(s*t)]);let i=o[o.length-1];return n[n.length-1]!==i&&n.push(i),n}function Gr(o,e,t,n,i){if(o.length<2)return null;let s=e.sunrise?.getTime(),r=e.sunset?.getTime(),l,a;if(s!==void 0&&r!==void 0&&r>s)l=n(s),a=n(r);else if(t==="polar-day")l=o[0].x,a=o[o.length-1].x;else return null;let d=o.filter(u=>u.x>=l-.5&&u.x<=a+.5);return d.length<2?null:{path:_n(d,i,!0),cx:(l+a)/2,cy:i,r:Math.max(6,(a-l)/2)}}function Fr(o,e){let t=e?Math.max(o.maxAltitude,e.maxAltitude):o.maxAltitude,n=e?Math.min(o.minAltitude,e.minAltitude):o.minAltitude,i=Math.min(n,-18),s=Math.max(3,(t-i)*.1),r=w(t+s,-18,90.5);return[w(Math.max(-28,n-2),-90,r-6),r]}function vi(o,e,t=2.2){let n=[0,Nt,It,Ot],i=[e.day,e.civil,e.nautical,e.astronomical,e.night];if(o>t/2){let s=w(1-o/12,0,1)*.5;return Qn(e.day,e.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+t/2,l=n[s]-t/2;if(o>=r)return i[s];if(o>l){let a=(r-o)/t;return Qn(i[s],i[s+1],a*a*(3-2*a))}}return i[i.length-1]}function Ur(o,e,t,n=24){let i=[];for(let s=0;s<=n;s++){let r=s/n,l=e+t*(1-r);i.push({offset:r,color:vi(l,o)})}return i}function Kr(o,e,t,n,i,s){let r=o.samples;if(r.length<2)return[];let l=[],a=(u,p)=>{u&&!Number.isNaN(u.getTime())&&l.push({time:u.getTime(),color:p})};a(e.astronomicalDawn,t.astronomical),a(e.nauticalDawn,t.nautical),a(e.civilDawn,t.civil),a(e.sunrise,t.glow),a(e.solarNoon,t.day),a(e.sunset,t.glow),a(e.civilDusk,t.civil),a(e.nauticalDusk,t.nautical),a(e.astronomicalDusk,t.astronomical);let d=[{offset:0,color:vi(r[0].altitude,t)},...l.map(u=>({offset:w((n(u.time)-i)/s,0,1),color:u.color})),{offset:1,color:vi(r[r.length-1].altitude,t)}];return d.sort((u,p)=>u.offset-p.offset),d}function _i(o){let{profile:e,events:t,now:n,width:i,height:s,palette:r,format:l,showSun:a,showMoon:d,moon:u,moonPath:p,showTwilight:m,twilightLevel:g,animations:$,cardStyle:_,minimal:x,sunMarkerSize:L,uid:v,showAstronomicalLayers:S,currentAltitude:N,countdown:k=null,showGoldenHour:A=!1}=o,P=Math.max(x?60:120,i),H=Math.max(x?12:56,s),D=x?2:4,F=x?2:4,q=x?2:6,G=!x&&H>=112,Q=G?w(c(H*.13,1),13,20):0,E=D,y=Math.max(10,P-D-F),z=q,V=Math.max(10,H-q-Q),B=z+V,[gt,it]=Fr(e,p?.profile??null),Mt=Math.max(1,it-gt),I=e.dayStart.getTime(),et=e.dayEnd.getTime(),Ht=Math.max(1,et-I),ot=f=>E+(f-I)/Ht*y,mt=f=>B-(w(f,-95,95)-gt)/Mt*V,Z=mt(0),pt=w(Math.round(y/1.6),60,361),ut=os(e.samples,pt).map(f=>({x:ot(f.time),y:mt(f.altitude)})),K=Ur(r,gt,Mt),dt=Kr(e,t,r,ot,E,y),vt=`${v}-area`,ft=`${v}-line`,Bt=`${v}-clip`,Xe=`${v}-glow`,Je=`${v}-sky`,te=`${v}-soft`,Se=`${v}-soft-fade`,Te=`${v}-foot`,he=`${v}-foot-fade`,C=`${v}-side`,tt=`${v}-side-fade`,ht=_==="horizon",me=_n(ut,ht?c(Z,2):B+1,!0),Ee=vn(ut),St=p?os(p.profile.samples,w(Math.round(y/2),40,240)).map(f=>({x:ot(f.time),y:mt(f.altitude)})):null,ee=St&&!x?vn(St):null,ne="var(--smc-moon-line, #cbd5e1)",As=w(c(H*.013,2),1.1,1.9),Cs=_n(ut,z-1,!0),Ae=_==="flat"?.6:ht?.3:1,Ds=ht?0:c(.15*Ae,3),Rt=z-1,Cn=B+1,jt=Math.max(1,Cn-Rt),Ls=w(V*.14,x?1.5:6,18),Ns=w(V*.08,x?1:4,12),Hs=w(y*.02,x?2:6,14),Pi=w(c(V*.06,1),x?1.5:4,10),Rs=c(w(Ls/jt,0,.45),4),zi=c(1-w(Ns/jt,0,.45),4),pe=E-1,Ye=E+y+1,Ii=c(w(Hs/Math.max(1,Ye-pe),0,.4),4),Ps=Math.max(16,y*.16),zs=w(V*.45,9,46),Qe=[];V>=34&&(t.sunrise&&Qe.push({id:`${v}-glow-rise`,time:t.sunrise,color:r.glow}),t.sunset&&Qe.push({id:`${v}-glow-set`,time:t.sunset,color:r.glow}));let ge=x?null:Gr(ut,t,e.polar,ot,Z),Oi=`${v}-dome`,rt=l.t,tn=[],Ce=f=>{f.time&&!Number.isNaN(f.time.getTime())&&tn.push({secondary:!1,...f})};if(t.sunrise&&Ce({key:"sunrise",time:t.sunrise,label:rt("sunrise"),shortLabel:rt("sunriseShort"),kind:"sunrise",altitude:0}),t.sunset&&Ce({key:"sunset",time:t.sunset,label:rt("sunset"),shortLabel:rt("sunsetShort"),kind:"sunset",altitude:0}),m&&(t.civilDawn&&Ce({key:"civilDawn",time:t.civilDawn,label:rt("civilDawn"),shortLabel:rt("civilDawnShort"),kind:"dawn",altitude:Nt}),t.civilDusk&&Ce({key:"civilDusk",time:t.civilDusk,label:rt("civilDusk"),shortLabel:rt("civilDuskShort"),kind:"dusk",altitude:Nt}),g==="all"||S)){let f=[["nauticalDawn","dawn","nauticalDawn",It],["nauticalDusk","dusk","nauticalDusk",It],["astronomicalDawn","dawn","astronomicalDawn",Ot],["astronomicalDusk","dusk","astronomicalDusk",Ot]];for(let[O,U,J,X]of f){let ct=t[O];ct&&Ce({key:O,time:ct,label:rt(J),shortLabel:rt(J),kind:U,altitude:X,secondary:!0})}}tn.sort((f,O)=>f.time.getTime()-O.time.getTime());let fe=w(c(H*.062,1),7.5,10.5),en=w(c(fe+5,1),11,Q||15),Gi=f=>f.secondary?2:f.kind==="sunrise"||f.kind==="sunset"?0:1,Is=y<240?3:y<340?4:6,Fi=x?[]:[...tn].sort((f,O)=>Gi(f)-Gi(O)||f.time.getTime()-O.time.getTime()).slice(0,Math.max(2,Is)),Ui=y<260,Os=!Ui&&(Fi.length>3||y<340),Ki=4,Gs=Math.max(8,fe*1.2),ie=[];for(let f of Fi){let O=Ui?nt(f.time,l):Os?f.shortLabel:f.label,U=O.length*fe*.56+8,J=w(ot(f.time.getTime()),E+U/2,E+y-U/2),X=Ct=>ie.some(oe=>Math.abs(oe.x-Ct)<(oe.width+U)/2+Ki),ct=X(J)?null:J;if(ct===null)for(let Ct of ie){let oe=(Ct.width+U)/2+Ki;for(let se of[Ct.x+oe,Ct.x-oe])if(Math.abs(se-J)<=Gs&&se-U/2>=E-.5&&se+U/2<=E+y+.5&&!X(se)){ct=se;break}if(ct!==null)break}ct!==null&&ie.push({x:ct,width:U,text:O,secondary:f.secondary})}ie.sort((f,O)=>f.x-O.x);let bt=w(ot(n.getTime()),E,E+y),Fs=r.day,Vt=w(c(H*.16,1),Math.min(2.8,L),L),Wi=w(c(Vt*.22,2),.8,1.4),Pt=w(c(Vt*1.1,1),3.5,7),Bi=(f,O)=>V<=O*2?z+V/2:w(mt(f),z+O,B-O),ji=Bi(N,Vt),Vi=A&&!x?[...is(e.samples,Ke,fn).map(f=>({range:f,kind:"golden",color:ns,key:"goldenHour"})),...is(e.samples,Mo,Ke).map(f=>({range:f,kind:"blue",color:Or,key:"blueHour"}))].map(({range:f,kind:O,color:U,key:J})=>{let X=w(ot(f[0]),E,E+y),ct=w(ot(f[1]),E,E+y);return{x:X,width:ct-X,kind:O,color:U,title:`${rt(J)} ${nt(new Date(f[0]),l)}\u2013${nt(new Date(f[1]),l)}`}}).filter(f=>f.width>=.5):[],_t=(()=>{if(x||!k)return null;let f=k.time.getTime();if(!(f>n.getTime()))return null;let U=gt<0&&it>0?mt(0):B-1,J=ot(f),X=w(J,E,E+y);if(X-bt<2)return null;let ct=k.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":k.body==="twilight"?r.civil:k.body==="golden"?ns:r.day;return{y:U,endX:X,endsInside:J<=E+y,color:ct}})(),Dn=w(c(H*.016,1),2,3),wt=(()=>{if(x||!k?.label)return null;let f=fe,O=f+5,U=k.label.length*f*.56+10,J=Math.max(Vt,3)+3,X=bt+J,ct=X+U<=E+y?X:Math.max(E,bt-J-U),Ct=G||ie.length===0?z+1:z+en+3;return{x:ct,y:Ct,width:U,height:O,fontSize:f}})(),Tt=d&&u&&!x?{altitude:u.altitude,y:Bi(u.altitude,Pt),clamped:u.altitude<gt||u.altitude>it}:null,Us=Tt?Math.abs(Tt.y-ji):Number.POSITIVE_INFINITY,Ln=Vt+Pt+2,De=Tt?Us>=Vt+Pt+1?bt:bt+Ln+Pt<=E+y?bt+Ln:Math.max(E+Pt,bt-Ln):null,Ks=$?"smc-pulse":"",Ws=$?`url(#${Xe})`:"",Nn=[{altitude:0,label:rt("horizon"),key:"horizon"}];S||g==="all"?Nn.push({altitude:Nt,label:`${rt("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:It,label:`${rt("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Ot,label:`${rt("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&Nn.push({altitude:Nt,label:`${rt("refCivil")} (\u22126\xB0)`,key:"civil"});let Bs=!x&&V>=86&&y>=250,js=Nn.filter(f=>(!x||f.key==="horizon")&&f.altitude>gt+.5&&f.altitude<it-.5),Vs=w(c(H*.055,1),7.5,9.5),Le=t.solarNoon,Zi=!x&&!!Le&&e.maxAltitude>0&&V>=104&&y>=220&&S,qi=Zi?`${rt("zenith")} ${nt(Le,l)} \xB7 ${at(e.maxAltitude,1,l.locale)}`:"",nn=w(c(H*.055,1),7.5,9.5),on=qi.length*nn*.56+10,Xi=Le?w(ot(Le.getTime()),E+on/2,E+y-on/2):0,Ji=Le?mt(e.maxAltitude):0,sn=nn+5,Yi=w(Ji-sn-4,z,Math.max(z,Ji+10)),Qi=x?1:y<220?4:y<420?6:8,to=[];for(let f=1;f<Qi;f++)to.push(E+y*f/Qi);return b`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(P,1)} ${c(H,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${rt("title")}"
    >
      <defs>
        <linearGradient id="${vt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(z,1)}" x2="0" y2="${c(B,1)}">
          ${K.map(f=>b`<stop offset="${c(f.offset*100,3)}%" stop-color="${f.color}" />`)}
        </linearGradient>
        <linearGradient id="${ft}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(z,1)}" x2="0" y2="${c(B,1)}">
          ${K.map(f=>b`<stop offset="${c(f.offset*100,3)}%" stop-color="${f.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${dt.length>=2?b`<linearGradient id="${Je}" gradientUnits="userSpaceOnUse"
                x1="${c(E,1)}" y1="0" x2="${c(E+y,1)}" y2="0">
                ${dt.map(f=>b`<stop offset="${c(f.offset*100,3)}%" stop-color="${f.color}" />`)}
              </linearGradient>`:b``}
        ${Qe.map(f=>b`<radialGradient id="${f.id}">
              <stop offset="0%" stop-color="${f.color}" stop-opacity="${c(.5*Ae,3)}" />
              <stop offset="45%" stop-color="${f.color}" stop-opacity="${c(.2*Ae,3)}" />
              <stop offset="100%" stop-color="${f.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${ge?b`<radialGradient id="${Oi}" gradientUnits="userSpaceOnUse"
                cx="${c(ge.cx,1)}" cy="${c(ge.cy,1)}" r="${c(ge.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${c(.3*Ae,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${c(.18*Ae,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:b``}
        <linearGradient id="${Se}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(Rt,1)}" x2="0" y2="${c(Cn,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Rs}" stop-color="#ffffff" />
          <stop offset="${zi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${te}" maskUnits="userSpaceOnUse"
          x="${c(E-2,1)}" y="${c(Rt,1)}"
          width="${c(y+4,1)}" height="${c(jt,1)}">
          <rect
            x="${c(E-2,1)}" y="${c(Rt,1)}"
            width="${c(y+4,1)}" height="${c(jt,1)}"
            fill="url(#${Se})" />
        </mask>
        <linearGradient id="${he}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(Rt,1)}" x2="0" y2="${c(Cn,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${zi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Te}" maskUnits="userSpaceOnUse"
          x="${c(E-2,1)}" y="${c(Rt,1)}"
          width="${c(y+4,1)}" height="${c(jt,1)}">
          <rect
            x="${c(E-2,1)}" y="${c(Rt,1)}"
            width="${c(y+4,1)}" height="${c(jt,1)}"
            fill="url(#${he})" />
        </mask>
        <linearGradient id="${tt}" gradientUnits="userSpaceOnUse"
          x1="${c(pe,1)}" y1="0" x2="${c(Ye,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Ii}" stop-color="#ffffff" />
          <stop offset="${c(1-Ii,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${C}" maskUnits="userSpaceOnUse"
          x="${c(pe,1)}" y="${c(Rt,1)}"
          width="${c(Ye-pe,1)}" height="${c(jt,1)}">
          <rect
            x="${c(pe,1)}" y="${c(Rt,1)}"
            width="${c(Ye-pe,1)}" height="${c(jt,1)}"
            fill="url(#${tt})" />
        </mask>
        <clipPath id="${Bt}">
          <rect x="${c(E-1,1)}" y="${c(z-2,1)}"
            width="${c(y+2,1)}" height="${c(V+4,1)}"
            rx="${Pi}" ry="${Pi}" />
        </clipPath>
        ${$?b`<filter id="${Xe}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${c(Vt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:b``}
      </defs>

      <g clip-path="url(#${Bt})">
        ${to.map(f=>b`<line x1="${c(f,1)}" y1="${c(z,1)}" x2="${c(f,1)}" y2="${c(B,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${C})">
        <path d="${me}" fill="url(#${vt})" opacity="0.9" mask="url(#${Te})" />
        <g mask="url(#${te})">
          ${dt.length>=2&&!ht?b`<path d="${Cs}" fill="url(#${Je})" opacity="${Ds}" />`:b``}
          ${Qe.map(f=>{let O=w(ot(f.time.getTime()),E,E+y),U=w(Z,z,B);return b`<ellipse
                cx="${c(O,1)}" cy="${c(U,1)}"
                rx="${c(Ps,1)}" ry="${c(zs,1)}"
                fill="url(#${f.id})" />`})}
          ${ge&&!ht?b`<path d="${ge.path}" fill="url(#${Oi})" opacity="0.95" />`:b``}
        </g>
        </g>
        ${Vi.length?b`<g class="hour-bands">
                ${Vi.map(f=>b`<g class=${f.kind}>
                    <title>${f.title}</title>
                    <rect
                      x="${c(f.x,1)}" y="${c(z,1)}"
                      width="${c(f.width,1)}" height="${c(V,1)}"
                      fill="${f.color}" opacity="${f.kind==="golden"?.16:.2}" />
                    <rect
                      x="${c(f.x,1)}" y="${c(B-3,1)}"
                      width="${c(f.width,1)}" height="3"
                      fill="${f.color}" opacity="0.85" />
                  </g>`)}
              </g>`:b``}
        ${ee?b`<path
                class="moon-curve"
                data-body="moon"
                d="${ee}"
                fill="none"
                stroke="${ne}"
                stroke-width="${As}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${ht?.5:.9}"
              >
                <title>${l.t("moonCurve")}</title>
              </path>`:b``}
        ${p&&ee?b`<g class="moon-events">
                ${[[p.rise,"moonrise"],[p.set,"moonset"]].filter(f=>f[0]!==null).map(([f,O])=>{let U=w(ot(f),E,E+y),J=w(mt(0),z,B),X=w(c(H*.05,1),4,8);return b`<g>
                      <title>${l.t(O)} ${nt(new Date(f),l)}</title>
                      <line
                        x1="${c(U,1)}"
                        y1="${c(J-X,1)}"
                        x2="${c(U,1)}"
                        y2="${c(J+X,1)}"
                        stroke="${ne}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${c(U,1)}"
                        cy="${c(J,1)}"
                        r="${w(c(H*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${ne}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:b``}
        <path
          d="${Ee}"
          fill="none"
          stroke="url(#${ft})"
          stroke-width="${w(c(H*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${js.map(f=>{let O=mt(f.altitude),U=f.key==="horizon";return b`<g>
            <line
              x1="${c(E,1)}" y1="${c(O,1)}"
              x2="${c(E+y,1)}" y2="${c(O,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${U&&ht?1.5:U?1:.6}"
              stroke-dasharray="${U&&ht?"999 0":U?"3 3":"2 4"}"
              opacity="${U&&ht?.9:U?.6:ht?.3:.45}"
            />
            ${Bs?b`<text
                    x="${c(E+3,1)}"
                    y="${c(O-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${Vs}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${f.label}</text>`:b``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${tn.map(f=>{let O=w(ot(f.time.getTime()),E,E+y),U=w(mt(f.altitude),z,B),J=!f.secondary,X=J?w(c(H*.022,1),1.8,3):1.4,ct="var(--smc-marker-strong, rgba(255,255,255,0.9))",Ct="var(--smc-marker-soft, rgba(255,255,255,0.55))",oe=f.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":f.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":f.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",se=J?oe:Ct,Zs=J?ct:Ct,qs=f.kind==="sunrise"||f.kind==="sunset"?b`
                <circle cx="${c(O,1)}" cy="${c(U,1)}" r="${X+1}"
                  fill="${f.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${c(O-X*2.6,1)}"
                  y1="${c(f.kind==="sunrise"?U+X+2:U-X-2,1)}"
                  x2="${c(O+X*2.6,1)}"
                  y2="${c(f.kind==="sunrise"?U+X+2:U-X-2,1)}"
                  stroke="${ct}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:b`<circle cx="${c(O,1)}" cy="${c(U,1)}" r="${X}"
                  fill="${Zs}" opacity="0.85" />`;return b`<g>
            <line
              x1="${c(O,1)}" y1="${c(z,1)}"
              x2="${c(O,1)}" y2="${c(B,1)}"
              stroke="${se}" stroke-width="${J?1:.7}"
              stroke-dasharray="3 3" opacity="${J?.5:.25}" />
            ${qs}
          </g>`})}
      </g>

      ${_t?b`<g class="countdown-track">
              <title>${k.title}</title>
              <line
                x1="${c(bt,1)}" y1="${c(_t.y,1)}"
                x2="${c(_t.endX,1)}" y2="${c(_t.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${c(Dn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${c(bt,1)}" y1="${c(_t.y,1)}"
                x2="${c(_t.endX,1)}" y2="${c(_t.y,1)}"
                stroke="${_t.color}"
                stroke-width="${Dn}"
                stroke-linecap="round" />
              ${_t.endsInside?b`<circle
                      cx="${c(_t.endX,1)}"
                      cy="${c(_t.y,1)}"
                      r="${c(Dn+.8,1)}"
                      fill="${_t.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:b``}
            </g>`:b``}

      <g class="now-marker">
        <line
          x1="${c(bt,1)}" y1="${c(z,1)}"
          x2="${c(bt,1)}" y2="${c(B,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${w(c(H*.012,2),1,1.8)}"
          opacity="0.85" />
        ${a?b`<g class="now-sun ${Ks}" filter="${Ws}">
                <title>${l.t("chartSunNow",{altitude:at(N,1,l.locale)})}</title>
                <circle
                  cx="${c(bt,1)}"
                  cy="${c(ji,1)}"
                  r="${Vt}"
                  fill="${Fs}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Wi}"
                />
              </g>`:b``}
        ${Tt&&De!==null&&u?b`<g class="now-moon">
                <title>${l.t("chartMoonNow",{altitude:at(Tt.altitude,1,l.locale)})}${Tt.clamped?` ${l.t("chartOutside")}`:""}</title>
                ${De===bt?b``:b`<line
                        x1="${c(bt,1)}"
                        y1="${c(Tt.y,1)}"
                        x2="${c(De,1)}"
                        y2="${c(Tt.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${c(De,1)}"
                  cy="${c(Tt.y,1)}"
                  r="${c(Pt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Wi}" />
                <g
                  transform="translate(${c(De-Pt,1)} ${c(Tt.y-Pt,1)})"
                  opacity="${Tt.clamped?.6:1}"
                >
                  ${Ft({size:c(Pt*2,1),illumination:u.illumination,brightLimbAngle:u.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${v}-moon-now`})}
                </g>
              </g>`:b``}
      </g>

      ${Zi?b`<g class="zenith-chip">
              <rect
                x="${c(Xi-on/2,1)}"
                y="${c(Yi,1)}"
                width="${c(on,1)}"
                height="${c(sn,1)}"
                rx="${c(sn/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${c(Xi,1)}"
                y="${c(Yi+sn/2+nn*.36,1)}"
                text-anchor="middle"
                font-size="${nn}"
                fill="var(--smc-label-color, #ffffff)"
              >${qi}</text>
            </g>`:b``}

      ${wt?b`<g class="countdown-label">
              <title>${k.title}</title>
              <rect
                x="${c(wt.x,1)}"
                y="${c(wt.y,1)}"
                width="${c(wt.width,1)}"
                height="${c(wt.height,1)}"
                rx="${c(wt.height/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.9" />
              <text
                x="${c(wt.x+wt.width/2,1)}"
                y="${c(wt.y+wt.height/2+wt.fontSize*.36,1)}"
                text-anchor="middle"
                font-size="${wt.fontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${k.label}</text>
            </g>`:b``}

      ${G?b`<line
              x1="${c(E,1)}" y1="${c(B+.5,1)}"
              x2="${c(E+y,1)}" y2="${c(B+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:b``}

      ${ie.length?b`<g class="event-labels" font-size="${fe}">
              ${ie.map(f=>{let O=G?B+2:z;return b`<g>
                  <rect
                    x="${c(f.x-f.width/2,1)}"
                    y="${c(O,1)}"
                    width="${c(f.width,1)}"
                    height="${c(en,1)}"
                    rx="${c(en/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${f.secondary?.6:.88}" />
                  <text
                    x="${c(f.x,1)}"
                    y="${c(O+en/2+fe*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${f.secondary?.75:1}"
                  >${f.text}</text>
                </g>`})}
            </g>`:b``}
    </svg>
  `}var Wr=50,Br=44,ss=[[0,"#8f9fd6","#f4a97c"],[12,"#9aaedf","#f7bf8e"],[30,"#a8c4ea","#f6dcb4"],[52,"#b4cdee","#eef0f4"],[66,"#8d9cd8","#d9c3dc"],[78,"#3c4590","#6b6fb4"],[90,"#232a68","#3b428a"],[100,"#1b2159","#323a80"]],jr=[[.13,.55,90,"#f6c2c0",.55],[.3,.42,60,"#fbd9cf",.45],[.58,.3,85,"#ffffff",.55],[.47,.14,50,"#ffffff",.35]];function Yt(o){let e=o;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var h=o=>String(c(o,1));function rs(o,e,t,n,i,s,r,l){let a=-6,d=`M${h(a)},${h(n)}`;for(;a<e+6;){let u=10+o()*28,p=i+o()*(s-i),m=t-p,g=o();if(d+=`L${h(a)},${h(m)}`,g<.12?d+=`L${h(a+u/2)},${h(m-u*.45)}L${h(a+u)},${h(m)}`:g<.2?d+=`A${h(u/2)},${h(u*.42)} 0 0 1 ${h(a+u)},${h(m)}`:g<.28?d+=`L${h(a+u*.42)},${h(m)}L${h(a+u/2)},${h(m-p*.55)}L${h(a+u*.58)},${h(m)}L${h(a+u)},${h(m)}`:g<.38?d+=`L${h(a+u*.6)},${h(m)}L${h(a+u*.6)},${h(m-12)}L${h(a+u*.64)},${h(m-12)}L${h(a+u*.64)},${h(m)}L${h(a+u)},${h(m)}`:g<.48?d+=`L${h(a+u*.25)},${h(m)}L${h(a+u*.25)},${h(m-7)}L${h(a+u*.75)},${h(m-7)}L${h(a+u*.75)},${h(m)}L${h(a+u)},${h(m)}`:d+=`L${h(a+u)},${h(m)}`,r>0&&a>e*.7)for(let $=m+5;$<t-4;$+=6)for(let _=a+3;_<a+u-3;_+=5)o()<r&&l.push({x:_,y:$,w:1.8,h:2.4,opacity:.55+o()*.4});if(a+=u,o()<.18){let $=4+o()*10,_=t-i*.4;d+=`L${h(a)},${h(_)}L${h(a+$)},${h(_)}`,a+=$}}return`${d}L${h(a)},${h(n)}Z`}function as(o,e,t,n,i,s){let r=Array.from({length:s},(d,u)=>({x:(u+.2+o()*.6)/s*e,h:i*(.45+o()*.55),w:e/s*(.9+o()*.9)})),l=Math.max(40,Math.round(e/6)),a=`M-4,${h(n)}`;for(let d=0;d<=l;d++){let u=-4+(e+8)*d/l,p=i*.12;for(let m of r)p=Math.max(p,m.h*(1-Math.abs(u-m.x)/m.w));p+=(o()-.5)*i*.06,a+=`L${h(u)},${h(t-w(p,2,i))}`}return`${a}L${h(e+4)},${h(n)}Z`}function ls(o,e,t,n,i,s){let r=d=>Math.sin(d/e*Math.PI*1.6+.6)*i*.35,l=`M-4,${h(n)}L-4,${h(t-r(-4))}`,a=-4;for(;a<e+4;){let d=i+o()*(s-i),u=t-r(a);if(o()<.72){let p=d*(.42+o()*.12);l+=`L${h(a)},${h(u)}L${h(a+p*.5)},${h(u-d)}L${h(a+p)},${h(u)}`,a+=p*(.55+o()*.25)}else{let p=d*.32;l+=`L${h(a)},${h(u)}L${h(a)},${h(u-d*.35)}A${h(p)},${h(p)} 0 1 1 ${h(a+p*1.6)},${h(u-d*.35)}L${h(a+p*1.6)},${h(u)}`,a+=p*1.6+o()*4}}return`${l}L${h(e+4)},${h(n)}Z`}function Vr(o,e,t,n,i){let s=[];switch(o){case"city":{let r=rs(Yt(11),e,t,n,18*i,44*i,0,s),l=e*.8,a=84*i,d=`M${h(l-1.6)},${h(t)}L${h(l-1.6)},${h(t-a)}L${h(l-.6)},${h(t-a)}L${h(l-.6)},${h(t-a-16)}L${h(l+.6)},${h(t-a-16)}L${h(l+.6)},${h(t-a)}L${h(l+1.6)},${h(t-a)}L${h(l+1.6)},${h(t)}ZM${h(l+5.5)},${h(t-a*.72)}A5.5,5.5 0 1 0 ${h(l-5.5)},${h(t-a*.72)}A5.5,5.5 0 1 0 ${h(l+5.5)},${h(t-a*.72)}Z`,u=rs(Yt(23),e,t,n,8*i,28*i,.07,s);return{back:`${r}${d}`,front:u,lights:s,waterTop:null}}case"mountains":return{back:as(Yt(5),e,t,n,78*i,6),front:as(Yt(9),e,t+2,n,40*i,9),lights:s,waterTop:null};case"forest":return{back:ls(Yt(17),e,t-6*i,n,22*i,46*i),front:ls(Yt(29),e,t+4*i,n,12*i,28*i),lights:s,waterTop:null};case"coast":{let r=t-10*i,l=Yt(31),a=`M-4,${h(r)}`;for(let $=0;$<=24;$++){let _=-4+e*.55*$/24,x=Math.sin($/24*Math.PI)*30*i+l()*4*i;a+=`L${h(_)},${h(r-x)}`}a+=`L${h(e*.55)},${h(r)}Z`;let d=e*.72,u=e*.84,p=r-14*i,m=46*i,g=`M${h(d)},${h(r)}Q${h(d+e*.06)},${h(p)} ${h(u-10)},${h(p)}L${h(e+4)},${h(p+2)}L${h(e+4)},${h(r)}ZM${h(u-4.5)},${h(p)}L${h(u-2.8)},${h(p-m)}L${h(u+2.8)},${h(p-m)}L${h(u+4.5)},${h(p)}ZM${h(u-3.6)},${h(p-m)}L${h(u)},${h(p-m-8)}L${h(u+3.6)},${h(p-m)}Z`;return s.push({x:u-1.6,y:p-m-4.5,w:3.2,h:3,opacity:.95}),{back:a,front:g,lights:s,waterTop:r}}default:return null}}var Ve=new Map;function Zr(o,e,t,n,i){let s=[o,c(e,0),c(t,0),c(n,0),i].join("|");return Ve.has(s)||(Ve.size>24&&Ve.clear(),Ve.set(s,Vr(o,e,t,n,i))),Ve.get(s)??null}function cs(o){let{profile:e,events:t,now:n,format:i,scene:s,showSun:r,showMoon:l,moonPath:a,moon:d,currentAltitude:u,animations:p,uid:m}=o,g=i.t,$=Math.max(160,o.width),_=Math.max(140,o.height),x=$<480,L=x?Br:Wr,v=14,S=_-L-4,N=e.samples,k=e.dayStart.getTime(),A=e.dayEnd.getTime(),P=Math.max(1,A-k),H=C=>(C-k)/P*$,D=Math.max(12,e.maxAltitude+8),F=-16,q=C=>v+(D-C)/(D-F)*(S-v),G=q(0),Q=w(H(n.getTime()),0,$),E=C=>C.map((tt,ht)=>`${ht?"L":"M"}${h(H(tt.time))},${h(q(tt.altitude))}`).join(""),y={skyTop:`${m}-sky-top`,skyHor:`${m}-sky-hor`,horFade:`${m}-hor-fade`,horMask:`${m}-hor-mask`,soft:`${m}-soft`,softer:`${m}-softer`,sunGlow:`${m}-sun-glow`,sunCore:`${m}-sun-core`,moonGlow:`${m}-moon-glow`,dayFill:`${m}-day-fill`,dayFade:`${m}-day-fade`,nightFill:`${m}-night-fill`,curve:`${m}-curve`,band:`${m}-band`,horizonLine:`${m}-horizon-line`,back:`${m}-scene-back`,front:`${m}-scene-front`,water:`${m}-water`,above:`${m}-above`,below:`${m}-below`,past:`${m}-past`,future:`${m}-future`},z=Yt(7),V=[];for(let C=0;C<(x?45:90);C++){let tt=z()*$,ht=v+z()*(G-v-6),me=w((tt/$-.68)/.12,0,1)*(.4+z()*.6),Ee=.5+z()*.9;me>.04&&V.push(b`<circle cx="${h(tt)}" cy="${h(ht)}" r="${c(Ee,2)}" fill="#fff"
        opacity="${c(me,2)}" />`)}let B=Math.min(1,$/740),gt=jr.map(([C,tt,ht,me,Ee])=>{let St=ht*B,ee=C*$,ne=v+tt*(G-v);return b`<g opacity="${Ee}" fill="${me}" filter="url(#${y.soft})">
      <ellipse cx="${h(ee)}" cy="${h(ne)}" rx="${h(St)}" ry="${h(St*.22)}" />
      <ellipse cx="${h(ee-St*.35)}" cy="${h(ne+3)}" rx="${h(St*.5)}" ry="${h(St*.18)}" />
      <ellipse cx="${h(ee+St*.3)}" cy="${h(ne-4)}" rx="${h(St*.45)}" ry="${h(St*.2)}" />
    </g>`}),it=_-L+8,I=Zr(s,$,it,_,x?.8:1),et=N.length?E(N):"",Ht=N[0],ot=N[N.length-1],mt=N.length?`${et}L${h(H(ot.time))},${h(G)}L${h(H(Ht.time))},${h(G)}Z`:"",Z=N.length?`${et}L${h(H(ot.time))},${h(_)}L${h(H(Ht.time))},${h(_)}Z`:"",pt=l&&a?.profile.samples.length?E(a.profile.samples):"",ut=[{time:t.sunrise,label:g("sunrise"),short:g("sunriseShort"),dashed:!0},{time:t.solarNoon,label:g("sceneNoon"),short:g("sceneNoonShort"),dashed:!1},{time:t.sunset,label:g("sunset"),short:g("sunsetShort"),dashed:!0}].filter(C=>C.time instanceof Date),K=x?34:48,dt=[20,10,-10].filter(C=>C<D-2&&C>F+2),vt=x?78:92,ft=w(q(u),v+12,_-L-6),Bt=u>-2,Xe=x?30:40,Je=x?11:15,te=x?10:14,Se=$-(x?44:62),Te=v+(x?26:34),he=w(G/_,0,1);return b`
    <svg
      class="scene-chart"
      width="${h($)}"
      height="${h(_)}"
      viewBox="0 0 ${h($)} ${h(_)}"
      role="img"
      aria-label="${g("title")}"
    >
      <defs>
        <linearGradient id="${y.skyTop}" x1="0" x2="1" y1="0" y2="0">
          ${ss.map(([C,tt])=>b`<stop offset="${C}%" stop-color="${tt}" />`)}
        </linearGradient>
        <linearGradient id="${y.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${ss.map(([C,,tt])=>b`<stop offset="${C}%" stop-color="${tt}" />`)}
        </linearGradient>
        <linearGradient id="${y.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${c(he,3)}" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask id="${y.horMask}">
          <rect width="${h($)}" height="${h(_)}" fill="url(#${y.horFade})" />
        </mask>
        <filter id="${y.soft}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="${y.softer}" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="${y.sunGlow}">
          <stop offset="0" stop-color="#ffe9a3" stop-opacity="0.95" />
          <stop offset="0.45" stop-color="#ffd36b" stop-opacity="0.45" />
          <stop offset="1" stop-color="#ffc24a" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="${y.sunCore}" cx="0.4" cy="0.38">
          <stop offset="0" stop-color="#fffbe8" />
          <stop offset="0.6" stop-color="#ffe17a" />
          <stop offset="1" stop-color="#f7b733" />
        </radialGradient>
        <radialGradient id="${y.moonGlow}">
          <stop offset="0" stop-color="#dfe4ff" stop-opacity="0.35" />
          <stop offset="1" stop-color="#dfe4ff" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="${y.dayFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(q(e.maxAltitude))}" y2="${h(G)}">
          <stop offset="0" stop-color="#ffcf5c" stop-opacity="0.95" />
          <stop offset="0.7" stop-color="#ffd27a" stop-opacity="0.8" />
          <stop offset="1" stop-color="#ffe7b8" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient id="${y.dayFade}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(G-4)}" y2="${h(G+36)}">
          <stop offset="0" stop-color="#ffe2a6" stop-opacity="0.75" />
          <stop offset="1" stop-color="#ffe2a6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${y.nightFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(G)}" y2="${h(_)}">
          <stop offset="0" stop-color="#a9b4ee" stop-opacity="0" />
          <stop offset="0.22" stop-color="#7f8fe0" stop-opacity="0.45" />
          <stop offset="0.55" stop-color="#4a5ab8" stop-opacity="0.8" />
          <stop offset="1" stop-color="#25307a" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="${y.curve}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(v)}" y2="${h(_)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${c(he,3)}" stop-color="#f59e0b" />
          <stop offset="${c(Math.min(1,he+.001),3)}" stop-color="#b9c3ff" />
          <stop offset="1" stop-color="#b9c3ff" />
        </linearGradient>
        <linearGradient id="${y.band}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" stop-opacity="0" />
          <stop offset="0.45" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" />
        </linearGradient>
        <linearGradient id="${y.horizonLine}" gradientUnits="userSpaceOnUse"
          x1="0" x2="${h($)}" y1="0" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0.9" />
          <stop offset="0.85" stop-color="#fff" stop-opacity="0.75" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${y.back}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#8a6f9e" />
          <stop offset="0.5" stop-color="#5f6aa8" />
          <stop offset="1" stop-color="#2a3170" />
        </linearGradient>
        <linearGradient id="${y.front}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#6f5a88" />
          <stop offset="0.5" stop-color="#3f4888" />
          <stop offset="1" stop-color="#1c2257" />
        </linearGradient>
        <linearGradient id="${y.water}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#e9a88f" />
          <stop offset="0.45" stop-color="#9fb6e3" />
          <stop offset="0.75" stop-color="#5865a8" />
          <stop offset="1" stop-color="#262d6c" />
        </linearGradient>
        <clipPath id="${y.above}"><rect width="${h($)}" height="${h(G)}" /></clipPath>
        <clipPath id="${y.below}">
          <rect y="${h(G)}" width="${h($)}" height="${h(_-G)}" />
        </clipPath>
        <clipPath id="${y.past}"><rect width="${h(Q)}" height="${h(_)}" /></clipPath>
        <clipPath id="${y.future}">
          <rect x="${h(Q)}" width="${h($-Q)}" height="${h(_)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${h($)}" height="${h(_)}" fill="url(#${y.skyTop})" />
        <rect width="${h($)}" height="${h(_)}" fill="url(#${y.skyHor})"
          mask="url(#${y.horMask})" />
        ${V}
        ${gt}
      </g>

      ${r&&mt?b`<g class="day-area">
              <path d="${mt}" fill="url(#${y.dayFill})" clip-path="url(#${y.above})"
                opacity="0.92" />
              <path d="${Z}" fill="url(#${y.nightFill})" clip-path="url(#${y.below})" />
              <g clip-path="url(#${y.below})">
                <path d="${Z}" fill="url(#${y.dayFade})" filter="url(#${y.softer})" />
              </g>
            </g>`:b``}

      ${I?b`<g class="silhouette" data-scene="${s}">
              ${I.waterTop!==null?b`<rect class="water" x="0" y="${h(I.waterTop)}" width="${h($)}"
                      height="${h(_-I.waterTop)}" fill="url(#${y.water})" opacity="0.55" />
                    ${[0,1,2,3].map(C=>b`<line x1="${h($*(.08+C*.21))}"
                        x2="${h($*(.16+C*.21))}"
                        y1="${h(I.waterTop+5+C*3)}" y2="${h(I.waterTop+5+C*3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`)}`:b``}
              <path d="${I.back}" fill="url(#${y.back})" opacity="0.35" />
              <path d="${I.front}" fill="url(#${y.front})" opacity="0.6" />
              ${I.lights.map(C=>b`<rect x="${h(C.x)}" y="${h(C.y)}" width="${C.w}"
                  height="${C.h}" fill="#ffd98a" opacity="${c(C.opacity,2)}" />`)}
            </g>`:b``}

      <line class="horizon" x1="${vt}" x2="${h($)}" y1="${h(G)}" y2="${h(G)}"
        stroke="url(#${y.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${ut.map(C=>{let tt=h(H(C.time.getTime()));return C.dashed?b`<line x1="${tt}" x2="${tt}" y1="0" y2="${h(_-L+6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`:b`<line x1="${tt}" x2="${tt}" y1="0" y2="${h(_-L+6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`})}
      </g>

      ${pt?b`<path class="moon-curve" d="${pt}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`:b``}

      ${r&&et?b`<g class="sun-path">
              <g clip-path="url(#${y.past})">
                <path d="${et}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${y.future})">
                <path d="${et}" fill="none" stroke="url(#${y.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[t.sunrise,t.sunset].filter(C=>C instanceof Date).map(C=>b`<circle cx="${h(H(C.getTime()))}" cy="${h(G)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${C.getTime()<n.getTime()?2:3.2}" />`)}
            </g>`:b``}

      ${l&&d?b`<g class="night-moon">
              <circle cx="${h(Se)}" cy="${h(Te)}" r="${te*2.1}"
                fill="url(#${y.moonGlow})" />
              <g transform="translate(${h(Se-te)} ${h(Te-te)})">
                ${Ft({size:te*2,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#2b3270",texture:!1,uid:`${m}-night-moon`})}
              </g>
            </g>`:b``}

      ${r?b`<g class="now-sun ${p?"smc-pulse":""}">
              <title>${g("chartSunNow",{altitude:at(u,1,i.locale)})}</title>
              <circle cx="${h(Q)}" cy="${h(ft)}" r="${Xe}"
                fill="url(#${y.sunGlow})" opacity="${Bt?1:.35}" />
              <circle cx="${h(Q)}" cy="${h(ft)}" r="${Je}" fill="url(#${y.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${Bt?1:.55}" />
            </g>`:b``}

      <g class="axis">
        <text x="10" y="${h(v+4)}" class="scene-axis">${g("elevation")}</text>
        ${dt.map(C=>b`<text x="10" y="${h(q(C)+4)}" class="scene-axis">${C>0?C:`\u2212${-C}`}°</text>
            <line x1="${x?34:40}" x2="${x?40:48}" y1="${h(q(C))}"
              y2="${h(q(C))}" stroke="#fff" opacity="0.8" />`)}
        <text x="10" y="${h(G-5)}" class="scene-axis strong">${g("horizon")}</text>
      </g>

      <rect class="band" x="0" y="${h(_-L-18)}" width="${h($)}"
        height="${h(L+18)}" fill="url(#${y.band})" />
      <g class="event-labels">
        ${ut.map(C=>{let tt=h(w(H(C.time.getTime()),K,$-K));return b`<text x="${tt}" y="${h(_-L+22)}" text-anchor="middle"
              class="scene-time">${nt(C.time,i)}</text>
            <text x="${tt}" y="${h(_-L+38)}" text-anchor="middle"
              class="scene-label">${x?C.short:C.label}</text>`})}
      </g>
    </svg>
  `}function wi(o){let e=Math.sin(o*127.1+311.7)*43758.5453;return e-Math.floor(e)}function qr(o,e,t){let n=[];for(let i=0;i<e;i++){let s=Math.sqrt(wi(o*7.13+i*1.37))*t*.96,r=wi(o*3.71+i*2.11)*360,l=Gt({x:0,y:0},s,r),a=wi(o*5.19+i*4.53);n.push({x:l.x,y:l.y,r:.35+a*.75,opacity:.16+a*.34})}return n}function xi(o,e){return w((90-o)/90*e,0,e)}function ki(o){let{width:e,height:t,sun:n,moon:i,sunTrack:s,moonPhase:r,showSun:l,showMoon:a,palette:d,format:u,animations:p,uid:m,showCardinals:g=!0,seed:$=0}=o,_=Math.max(80,e),x=Math.max(80,t),L=6,v={x:_/2,y:x/2},S=Math.max(10,Math.min(_,x)/2-L),N=`${m}-dome`,k=`${m}-dome-clip`,A=[{key:u.t("compassNorth"),azimuth:0},{key:u.t("compassEast"),azimuth:90},{key:u.t("compassSouth"),azimuth:180},{key:u.t("compassWest"),azimuth:270}],P=w(c(S*.17,1),7,11),H=n?n.altitude>0:!1,D=w(c(S*.11,1),4,11),F=n?Gt(v,xi(n.altitude,S),n.azimuth):null,q=l&&n&&F,G=i?i.altitude>0:!1,Q=w(c(S*.24,1),10,22),E=i?Gt(v,xi(i.altitude,S),i.azimuth):null,y=a&&i&&E&&r,z=g&&S>=42,V=w(c(S*.14,1),6.5,9),B=[{altitude:30,radius:S*(60/90)},{altitude:60,radius:S*(30/90)}],it=(n?.altitude??-90)<-6?qr(Math.max(1,Math.round($)),46,S):[],Mt=s.filter(I=>I.altitude>=-8).map(I=>Gt(v,xi(I.altitude,S),I.azimuth));return b`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(_,1)} ${c(x,1)}"
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
          <circle cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(S,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(S,1)}"
        fill="url(#${N})" opacity="0.55" />

      <g clip-path="url(#${k})">
        ${it.length?b`<g class="stars">
                ${it.map(I=>b`<circle
                      cx="${c(v.x+I.x,1)}"
                      cy="${c(v.y+I.y,1)}"
                      r="${c(I.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${c(I.opacity,2)}" />`)}
              </g>`:b``}
        ${B.map(I=>b`<circle
              cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(I.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${c(v.x-S,1)}" y1="${c(v.y,1)}"
          x2="${c(v.x+S,1)}" y2="${c(v.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${c(v.x,1)}" y1="${c(v.y-S,1)}"
          x2="${c(v.x,1)}" y2="${c(v.y+S,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${Mt.length>1?b`<path
                d="M${Mt.map(I=>`${c(I.x,1)} ${c(I.y,1)}`).join(" L")}"
                fill="none"
                stroke="${d.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:b``}
      </g>

      <circle
        cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(S,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${z?b`<g
              font-size="${V}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${B.map(I=>{let et=Gt(v,I.radius,45);return b`<text
                  x="${c(et.x,1)}"
                  y="${c(et.y+V*.35,1)}"
                >${I.altitude}°</text>`})}
            </g>`:b``}

      ${g?b`<g font-size="${P}" fill="var(--smc-muted-color)" opacity="0.7">
              ${A.map(I=>{let et=Gt(v,S*.87,I.azimuth);return b`<text
                  x="${c(et.x,1)}"
                  y="${c(et.y+P*.35,1)}"
                  text-anchor="middle"
                >${I.key}</text>`})}
            </g>`:b``}

      ${q&&H&&F?b`<g class="${p?"smc-pulse":""}">
              <circle
                cx="${c(F.x,1)}" cy="${c(F.y,1)}" r="${D}"
                fill="${d.lineDay}" opacity="0.28" />
              <circle
                cx="${c(F.x,1)}" cy="${c(F.y,1)}" r="${c(D*.55,1)}"
                fill="${d.lineDay}" />
            </g>`:b``}
      ${l&&n&&!H?ei(v,S,n.azimuth,d.lineNight):b``}

      ${y&&G&&E&&r?b`<g transform="translate(${c(E.x-Q/2,1)} ${c(E.y-Q/2,1)})">
              ${Ft({size:Q,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:Q>=16,uid:`${m}-moon`})}
            </g>`:b``}
      ${a&&i&&!G?ei(v,S,i.azimuth,"var(--smc-moon-lit, #e6ebf7)"):b``}
    </svg>
  `}function Mi(o,e,t){o.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}function Xr(o){if(typeof o!="string")return null;let[e,t]=o.split(".",2);return!e||!t?null:[e,t]}function us(o,e,t,n,i){typeof o?.callService=="function"&&o.callService(e,t,n,i)}function Si(o,e,t,n,i){if(!n){i?.();return}switch(n.action){case"none":return;case"open-popup":i?.();return;case"more-info":Mi(o,"hass-more-info",{entityId:n.entity??t.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),Mi(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":us(e,"homeassistant","toggle",{entity_id:n.entity??t.entity});return;case"call-service":case"perform-action":{let s=Xr(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,l=typeof n.target=="object"&&n.target!==null?n.target:void 0;us(e,s[0],s[1],r,l);return}case"fire-dom-event":Mi(window,"ll-custom",n);return;default:return}}function Ti(o=16,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function ds(o=16,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${e}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function Ei(o=16,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function En(o=16,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function An(o=16,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var hs="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function Ai(o=16,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  `}function ms(o=16,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  `}function Ci(o=20,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${e}" />
      <g stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function ps(o=18,e="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${e}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${e}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${e}" />
    </svg>
  `}var gs=new Map;function fs(o){let e=gs.get(o);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),gs.set(o,e)),e}function Jr(o){try{return fs(o)}catch{return fs("UTC")}}function Di(o,e){let t=Jr(e).formatToParts(o),n={};for(let i of t)i.type!=="literal"&&(n[i.type]=Number.parseInt(i.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function bs(o,e){let t=Di(o,e);return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)-Math.floor(o.getTime()/1e3)*1e3}function Yr(o,e,t,n=0,i=0,s=0,r="UTC"){let l=Date.UTC(o,e-1,t,n,i,s),a=1440*60*1e3,d=[bs(new Date(l-a),r),bs(new Date(l+a),r)],u=[...new Set(d)].map(m=>l-m).filter(m=>{let g=Di(new Date(m),r);return g.year===o&&g.month===e&&g.day===t&&g.hour===n&&g.minute===i&&g.second===s}).sort((m,g)=>m-g);if(u.length>0)return new Date(u[0]);let p=Math.min(...d);return new Date(l-p)}function Me(o,e){let t=Di(o,e);return Yr(t.year,t.month,t.day,0,0,0,e)}function $s(o,e){let t=Me(o,e);return Me(new Date(t.getTime()+2160*60*1e3),e)}function kt(o,e){return Math.round(Me(o,e).getTime()/(1440*60*1e3))}function ys(o){if(o)try{return new Intl.DateTimeFormat("en-US",{timeZone:o}),o}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function lt(o,e){return typeof o=="boolean"?o:o==="true"||o===1?!0:o==="false"||o===0?!1:e}function ue(o,e,t){return typeof o=="string"&&e.includes(o)?o:t}function Li(o,e,t,n,i,s=0){let r=xt(o);if(r===null)return e;let l=w(r,t[0],t[1]);return Math.abs(l-r)>1e-9&&i.push(st(n,"invalidRange",{value:String(o),min:String(t[0]),max:String(t[1])})),s===0?Math.round(l):c(l,s)}function Ni(o,e,t){if(o==null)return null;let n=typeof o=="object"&&!Array.isArray(o)?o:void 0,i=n?.action;if(typeof i!="string"||i.trim()==="")return t.push(st(e,"invalidAction",{value:String(o)})),null;let s=i.trim();return Uo.includes(s)?{...n,action:s}:(t.push(st(e,"invalidAction",{value:s})),null)}function ws(o,e="en"){let t=[],n=[],i=o??{},s=lt(i.minimal_mode,R.minimal_mode),r=ke(s),l=i.card_style==="scene"&&!s?460:R.card_height;if(typeof i.card_height=="number"&&Number.isFinite(i.card_height))l=Math.round(w(i.card_height,r[0],r[1])),l!==i.card_height&&n.push(st(e,"invalidHeight",{value:String(i.card_height),min:r[0],max:r[1]}));else if(i.card_height==="auto"||i.card_height===null)l="auto";else if(typeof i.card_height=="number")n.push(st(e,"invalidHeight",{value:String(i.card_height),min:r[0],max:r[1]}));else if(i.card_height!==void 0){let g=xt(i.card_height);g===null?t.push(st(e,"invalidHeight",{value:String(i.card_height),min:r[0],max:r[1]})):l=Math.round(w(g,r[0],r[1]))}let a=null,d=null,u=xt(i.latitude),p=xt(i.longitude);return u!==null&&(u>=-90&&u<=90?a=u:n.push(st(e,"invalidNumber",{value:String(i.latitude)}))),p!==null&&(p>=-180&&p<=180?d=p:n.push(st(e,"invalidNumber",{value:String(i.longitude)}))),{config:{type:typeof i.type=="string"?i.type:"custom:sun-moon-card",entity:typeof i.entity=="string"&&i.entity.trim()!==""?i.entity.trim():R.entity,moon_entity:typeof i.moon_entity=="string"&&i.moon_entity.trim()!==""?i.moon_entity.trim():R.moon_entity,card_height:l,show_sun:lt(i.show_sun,R.show_sun),show_moon:lt(i.show_moon,R.show_moon),show_twilight:lt(i.show_twilight,R.show_twilight),show_astronomical_details:lt(i.show_astronomical_details,R.show_astronomical_details),compact_mode:lt(i.compact_mode,R.compact_mode),minimal_mode:s,minimal_show_times:lt(i.minimal_show_times,R.minimal_show_times),minimal_show_zenith:lt(i.minimal_show_zenith,R.minimal_show_zenith),sun_marker_size:Li(i.sun_marker_size,R.sun_marker_size,je,e,n,1),popup_width:Li(i.popup_width,R.popup_width,Xt,e,n),popup_height:Li(i.popup_height,R.popup_height,Jt,e,n),show_remaining_time:lt(i.show_remaining_time,R.show_remaining_time),remaining_time_focus:ue(i.remaining_time_focus,Ut.remainingTimeFocus,R.remaining_time_focus),show_golden_hour:lt(i.show_golden_hour,R.show_golden_hour),show_countdown_tile:lt(i.show_countdown_tile,R.show_countdown_tile),tap_action:Ni(i.tap_action,e,n),hold_action:Ni(i.hold_action,e,n),double_tap_action:Ni(i.double_tap_action,e,n),card_style:ue(i.card_style,Ut.cardStyle,R.card_style),scene:ue(i.scene,Ut.scene,R.scene),theme_mode:ue(i.theme_mode,Ut.themeMode,R.theme_mode),animations:lt(i.animations,R.animations),time_format:ue(i.time_format,Ut.timeFormat,R.time_format),language:ue(i.language,Ut.language,R.language),show_header:lt(i.show_header,R.show_header),show_day_chart:lt(i.show_day_chart,R.show_day_chart),show_sky_view:lt(i.show_sky_view,R.show_sky_view),show_events:lt(i.show_events,R.show_events),show_moon_times:lt(i.show_moon_times,R.show_moon_times),show_footer:lt(i.show_footer,R.show_footer),twilight_level:ue(i.twilight_level,Ut.twilightLevel,R.twilight_level),location_name:typeof i.location_name=="string"?i.location_name:"",latitude:a,longitude:d},errors:t,warnings:n}}function xs(o,e){let t=ke(o.minimal_mode);return o.card_height==="auto"?w(Xo(e,o.card_style),t[0],t[1]):w(o.card_height,t[0],t[1])}function Qr(o,e,t,n="de"){let i={latitude:0,longitude:0},s={dayStart:o,dayEnd:new Date(o.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},l={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},a={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:o,timeZone:e,location:i,locationName:"",extras:ta(e,ks(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:l,events:a,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:t,fatal:!0}}function ks(o){return o==="de"?"de-DE":"en-GB"}function ta(o,e){return{timeZoneLongName:fi(o,e,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function ea(o,e){let t=Jn(o.getTime()-27648e5,o.getTime()-6e4);if(t.length===0)return!1;let n=t[t.length-1],i=s=>new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit"}).format(s);return i(n)===i(o)}function na(o,e,t){if(!o)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:e,month:"2-digit"}).format(o));if(!Number.isFinite(n)||n<1||n>12)return null;let i=jo[n-1];return st(t,"folkName",{name:st(t,i)})}function vs(o,e,t,n){return o?{time:o,azimuth:yn(o,e,"moon"),dayOffset:kt(o,n)-kt(t,n)}:null}function ia(o){if(typeof o!="string"||o.trim()==="")return null;let e=new Date(o);return Number.isNaN(e.getTime())?null:e}var _s=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],oa={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function sa(o,e,t){let n=ys(e?.config?.time_zone),i=[],s=ti(e?.config?.latitude)?e.config.latitude:null,r=ti(e?.config?.longitude)?e.config.longitude:null,l=o.latitude??s,a=o.longitude??r,d=ce(o.language,e?.locale?.language??e?.language);if(l===null||a===null)return Qr(t,n,["missing-location",...i],d);let u={latitude:l,longitude:a},p=o.location_name.trim()!==""?o.location_name.trim():e?.config?.location_name??"",m=Me(t,n),g=$s(t,n),$=qn(u,m,g),_=bn(t,u),x=_.altitude,L=Be(t.getTime()+6e4,u),v=qt(t,u),S=$n(t),N=Co(t,u),k=e?.states?.[o.entity];k||i.push("missing-sun-entity");let A={...$.events},P={};if(k?.attributes)for(let[K,dt]of _s){let vt=ia(k.attributes[dt]),ft=$.events[K];if(vt&&vt>=m&&vt<g&&(!ft||Math.abs(vt.getTime()-ft.getTime())<=Bo)){A[K]=vt,P[K]="ha";continue}P[K]=ft?"computed":"none"}else for(let[K]of _s)P[K]=$.events[K]?"computed":"none";for(let K of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])P[K]=$.events[K]?"computed":"none";let H=k?.attributes?xt(k.attributes.elevation):null,D=k?.attributes?xt(k.attributes.azimuth):null,F=o.moon_entity?e?.states?.[o.moon_entity]:void 0,q=F&&typeof F.state=="string"?oa[F.state]??null:null,G=o.show_moon?Ao(u,m,g,N):null,Q=[],E=900*1e3;for(let K=m.getTime();K<=g.getTime();K+=E){let dt=bn(K,u);Q.push({altitude:dt.altitude,azimuth:dt.azimuth})}let y=null;A.sunrise&&A.sunset&&(y=(A.sunset.getTime()-A.sunrise.getTime())/6e4);let z=Me(new Date(m.getTime()-720*60*1e3),n),V=qn(u,z,m),B=V.events.sunrise&&V.events.sunset?(V.events.sunset.getTime()-V.events.sunrise.getTime())/6e4:null,gt=y!==null&&B!==null?y-B:null,it=Lo(t),Mt=o.twilight_level==="nautical"?It:o.twilight_level==="astronomical"?Ot:Nt,I=K=>K?{time:K.time,rising:K.rising,dayOffset:kt(K.time,n)-kt(t,n)}:null,et=o.show_sun?I(Xn(u,t,Fe)):null,Ht=o.show_twilight?I(Xn(u,t,Mt)):null,ot=t.getTime(),Z=[N.nextRise,N.nextSet].filter(K=>K instanceof Date&&K.getTime()>ot).sort((K,dt)=>K.getTime()-dt.getTime())[0],pt=o.show_moon&&Z?{time:Z,rising:Z.getTime()===N.nextRise?.getTime(),dayOffset:kt(Z,n)-kt(t,n)}:null,ut={timeZoneLongName:fi(n,ks(d),t),previousDaylightMinutes:B,daylightDeltaMinutes:gt,sunBelowHorizon:x<0?Math.abs(x):null,sunriseAzimuth:A.sunrise?yn(A.sunrise,u,"sun"):null,sunsetAzimuth:A.sunset?yn(A.sunset,u,"sun"):null,nextFullMoon:it,nextFullMoonDays:it?Math.round((it.time.getTime()-t.getTime())/(1440*60*1e3)):null,blueMoon:it?ea(it.time,n):!1,moonFolkName:na(it?.time??null,n,d),moonDistance:No(t,u,14),moonRise:vs(N.nextRise??N.previousRise,u,t,n),moonSet:vs(N.nextSet??N.previousSet,u,t,n),nextSunEvent:et,nextTwilightEvent:Ht,nextMoonEvent:pt,goldenHour:o.show_golden_hour?Eo(u,t,Ke,fn):null};return $.polar==="polar-day"&&i.push("polar-day"),$.polar==="polar-night"&&i.push("polar-night"),A.sunrise||i.push("no-sunrise-today"),A.sunset||i.push("no-sunset-today"),!A.civilDawn&&!A.civilDusk&&i.push("no-civil-twilight"),{now:t,timeZone:n,location:u,locationName:p,day:$,sun:{altitude:x,azimuth:_.azimuth,phase:Do(x),rising:L>x,haElevation:H,haAzimuth:D},moon:{position:v,phase:S,events:N,haPhaseName:q},sunTrack:Q,moonPath:G,events:A,eventSources:P,extras:ut,daylightMinutes:y,issues:i,fatal:!1}}var Ze=new Map;function ra(o){return[o.entity,o.moon_entity,o.latitude,o.longitude,o.twilight_level,o.language,o.location_name,String(o.show_sun),String(o.show_moon),String(o.show_twilight),String(o.show_golden_hour)].join("|")}function aa(o,e){if(!e)return"-";let t=e.states?.[o.entity],n=o.moon_entity?e.states?.[o.moon_entity]:void 0;return[e.config?.time_zone??"",e.config?.latitude??"",e.config?.longitude??"",e.config?.location_name??"",t?.attributes?.next_rising??t?.last_updated??"",t?.attributes?.next_setting??"",t?.attributes?.next_dawn??"",t?.attributes?.next_dusk??"",t?.attributes?.elevation??"",n?.state??""].join("|")}function Ms(o,e,t){let n=Math.floor(t.getTime()/6e4),i=[ra(o),aa(o,e),n,t.getTimezoneOffset()].join("#"),s=Ze.get(i);if(s)return s;let r=sa(o,e,t);if(Ze.size>24){let l=Ze.keys().next().value;l!==void 0&&Ze.delete(l)}return Ze.set(i,r),r}var Ss=ln`
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

  .scene-chevron {
    flex: 0 0 auto;
    color: var(--smc-muted-color);
    opacity: 0.8;
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
`,Ts=ln`
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
`;function Hi(o,e){o.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}var de=class extends Lt{setConfig(e){this._config={...e}}get _language(){return ce(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(e,t){return st(this._language,e,t)}_value(e,t){let n=this._config?.[e];return n??t}_update(e){if(!this._config)return;let t={...this._config,...e};for(let[n,i]of Object.entries(e)){let s=R[n];i===s&&n in R&&delete t[n]}this._config=t,Hi(this,t)}render(){if(!this._config)return T``;let e=this._config.card_height,t=e==="auto"||e===null,n=this._config.minimal_mode===!0,i=ke(n),s=this._config.card_style==="scene"&&!n?460:R.card_height,r=typeof e=="number"?e:s,l=this._config.latitude===void 0||this._config.latitude===null;return T`
      <div class="card-config">
        <div class="section">
          <div class="section-title">${this._t("editorAppearance")}</div>

          <div class="row">
            <label for="height">${this._t("editorCardHeight")}</label>
            <div class="control height-control">
              <input
                id="height"
                type="range"
                min="${i[0]}"
                max="${i[1]}"
                step="${n?2:10}"
                .value=${String(r)}
                ?disabled=${t}
                @input=${a=>this._update({card_height:Number(a.target.value)})}
              />
              <input
                id="height-number"
                type="number"
                aria-label=${this._t("editorCardHeight")}
                min="${i[0]}"
                max="${i[1]}"
                .value=${String(r)}
                ?disabled=${t}
                @change=${a=>{let d=xt(a.target.value);d!==null&&this._update({card_height:Math.round(w(d,i[0],i[1]))})}}
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
                  .checked=${t}
                  @change=${a=>this._update({card_height:a.target.checked?"auto":s})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          ${this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",R.sun_marker_size),min:je[0],max:je[1],step:.5,digits:1,set:a=>this._update({sun_marker_size:a})})}

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
                @change=${a=>this._update({card_style:a.target.value,...this._sceneHeight(a.target.value)})}
              >
                <option value="glass">${this._t("editorCardStyleGlass")}</option>
                <option value="flat">${this._t("editorCardStyleFlat")}</option>
                <option value="horizon">${this._t("editorCardStyleHorizon")}</option>
                <option value="scene">${this._t("editorCardStyleScene")}</option>
              </select>
            </div>
          </div>

          ${this._config?.card_style==="scene"?T`<div class="row">
                <label for="scene">${this._t("editorScene")}</label>
                <div class="control">
                  <select
                    id="scene"
                    .value=${this._value("scene","city")}
                    @change=${a=>this._update({scene:a.target.value})}
                  >
                    <option value="city">${this._t("editorSceneCity")}</option>
                    <option value="mountains">${this._t("editorSceneMountains")}</option>
                    <option value="forest">${this._t("editorSceneForest")}</option>
                    <option value="coast">${this._t("editorSceneCoast")}</option>
                    <option value="none">${this._t("editorSceneNone")}</option>
                  </select>
                </div>
              </div>`:M}

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
                ${this._config?.show_golden_hour?T`<option value="golden_hour">
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
                ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",R.popup_width),min:Xt[0],max:Xt[1],step:20,set:a=>this._update({popup_width:Math.round(a)})})}
                ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",R.popup_height),min:Jt[0],max:Jt[1],step:20,set:a=>this._update({popup_height:Math.round(a)})})}`:M}
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
                .value=${this._value("entity",R.entity)}
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
                .value=${this._value("moon_entity",R.moon_entity)}
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
                  .checked=${l}
                  @change=${a=>{if(a.target.checked){let u={...this._config};delete u.latitude,delete u.longitude,this._config=u,Hi(this,u)}else this._update({latitude:c(this.hass?.config?.latitude??0,4),longitude:c(this.hass?.config?.longitude??0,4)})}}
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
                ?disabled=${l}
                @change=${a=>{let d=xt(a.target.value);this._update({latitude:d===null?void 0:w(d,-90,90)})}}
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
                ?disabled=${l}
                @change=${a=>{let d=xt(a.target.value);this._update({longitude:d===null?void 0:w(d,-180,180)})}}
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
              ${this._t("editorCardHeight")}: ${i[0]}–${i[1]} px (Standard
              ${R.card_height} px, mindestens
              ${n?li:120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_numberRow(e){let{id:t,labelKey:n,value:i,min:s,max:r,step:l,digits:a=0,set:d}=e,u=p=>String(a===0?Math.round(p):c(p,a));return T`
      <div class="row">
        <label for=${t}>${this._t(n)}</label>
        <div class="control height-control">
          <input
            id=${t}
            type="range"
            min=${s}
            max=${r}
            step=${l}
            .value=${u(i)}
            @input=${p=>d(Number(p.target.value))}
          />
          <input
            id="${t}-number"
            type="number"
            aria-label=${this._t(n)}
            min=${s}
            max=${r}
            step=${l}
            .value=${u(i)}
            @change=${p=>{let m=xt(p.target.value);m!==null&&d(w(m,s,r))}}
          />
        </div>
      </div>
    `}_sceneHeight(e){let t=this._config?.card_height;return this._config?.minimal_mode===!0?{}:e==="scene"&&(t===void 0||t===R.card_height)?{card_height:460}:e!=="scene"&&t===460?{card_height:R.card_height}:{}}_warnings(){let e=this._config?.card_height,t=ke(this._config?.minimal_mode===!0);return typeof e=="number"&&(e<t[0]||e>t[1])?T`<span class="hint">
        ${this._t("invalidHeight",{value:String(e),min:t[0],max:t[1]})}
      </span>`:M}_switch(e,t){let n=R[e];return T`
      <div class="row">
        <label for="${String(e)}">${this._t(t)}</label>
        <div class="control">
          <span class="switch">
            <input
              id="${String(e)}"
              type="checkbox"
              .checked=${this._value(e,n)}
              @change=${i=>this._update({[e]:i.target.checked})}
            />
            <span class="slider"></span>
          </span>
        </div>
      </div>
    `}_reset(){let e=kn();this._config=e,Hi(this,e)}};de.styles=Ts,Dt([ye({attribute:!1})],de.prototype,"hass",2),Dt([ve()],de.prototype,"_config",2),de=Dt([hn(Fo)],de);var Qt=12,Es=17,Wt=class extends Lt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=t=>{if(!this._popup)return;if(t.key==="Escape"){t.stopPropagation(),this._closeDetails();return}if(t.key!=="Tab")return;let n=this._popupFocusable(),i=n[0],s=n[n.length-1];if(!i||!s)return;let r=this._activeElement(),l=r?n.indexOf(r):-1;if(l===-1){t.preventDefault(),(t.shiftKey?s:i).focus();return}t.shiftKey&&l===0?(t.preventDefault(),s.focus()):!t.shiftKey&&l===n.length-1&&(t.preventDefault(),i.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let t=this._config?.hold_action;t&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(t,!1)},Ko))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=t=>{if(this._held){this._held=!1;return}let n=t.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},Wo)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(t){let n=this._hass;this._hass=t,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=t)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return kn()}setConfig(t){if(!t||typeof t!="object")throw new Error("Invalid configuration");let n=ce(t.language,this.hass?.locale?.language),{config:i,errors:s,warnings:r}=ws(t,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let l=r.join(" ");l!==this._warned&&(this._warned=l,console.warn(`[sun-moon-card] ${l}`))}this._config=i}getCardSize(){let t=this._resolvedHeight();return Math.max(1,Math.round(t/50))}getGridOptions(){let t=this._resolvedHeight();return{rows:Math.max(1,Math.round(t/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(t){super.willUpdate(t);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&t!==this._width&&(this._width=t)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&(this._width=t)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let t=this._language(),n=w(this._config.popup_width,Xt[0],Xt[1]),i=w(this._config.popup_height,Jt[0],Jt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",st(t,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let l=document.createElement("button");l.type="button",l.setAttribute("aria-label",st(t,"popupClose")),l.textContent="\u2715",Object.assign(l.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),l.addEventListener("click",()=>this._closeDetails());let a=this._config,d={...a,latitude:a.latitude??void 0,longitude:a.longitude??void 0,location_name:a.location_name??void 0,minimal_mode:!1,card_height:i,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},u=document.createElement(ai);u.hass=this.hass;try{u.setConfig(d)}catch{}this._popupCard=u,r.append(u,l),s.append(r),s.addEventListener("click",p=>{p.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,l.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let t=document.activeElement;if(!t)return null;let n=t.shadowRoot?.activeElement;return n instanceof HTMLElement?n:t}_popupFocusable(){if(!this._popup)return[];let t=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&t.push(n);let i='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(i))s.hasAttribute("disabled")||t.push(s);return t}_handleMinimalKey(t){if(t.key==="Enter"||t.key===" "){t.preventDefault();let n=t.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(t){this._runAction(this._config?.tap_action??null,!0,t)}_runAction(t,n,i){let s=this._config;if(!s)return;let r=i??this.renderRoot?.querySelector("ha-card")??this;Si(r,this.hass,s,t,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(t){if(t.has("_config")||t.has("_width")||t.has("_tick"))return!0;if(t.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(t=>{let n=t.some(i=>i.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,zo()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let t=this._config,n=this.hass;if(!n||!t)return"";let i=n.states?.[t.entity],s=t.moon_entity?n.states?.[t.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",i?.attributes?.next_rising??i?.last_updated??"",i?.attributes?.next_setting??"",i?.attributes?.next_dawn??"",i?.attributes?.next_dusk??"",i?.attributes?.elevation??"",i?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?xs(this._config,this._width||400):R.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return ce(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let t=this._config;if(!t)return T``;let n=this._width||400,i=this._resolvedHeight(),s=qo(i,n,t),r=Ms(t,this.hass,new Date),l=this._language(),a=this._isDark(),d=a?ci:ui;if(r.fatal)return T`
        <ha-card
          class=${yt({"smc-dark":a,"smc-light":!a,"smc-minimal":s.minimal})}
          style=${W({height:`${s.minimal?Math.max(i,56):i}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${ps(18)}</span>
              <span>${st(l,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let u=es(l,this._locale(),r.timeZone,Qo(t.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?T`
        <ha-card
          class=${yt({"smc-dark":a,"smc-light":!a,"smc-minimal":!0})}
          style=${W({height:`${i}px`})}
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
            class=${yt({root:!0,minimal:!0})}
            style=${W({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
          >
            ${this._renderMinimalTimes(r,u,s,t)}
            <div
              class="chart-wrap minimal"
              style=${W({height:`${s.chartHeight}px`})}
            >
              ${_i({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style==="scene"?"glass":t.card_style,compact:!1,minimal:!0,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:t.card_style==="scene"?this._renderSceneCard(r,u,t,d,a,n,i):T`
      <ha-card
        class=${yt({"smc-dark":a,"smc-light":!a})}
        style=${W({height:`${i}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,u)}
      >
        <div
          class=${yt({root:!0,compact:s.compact})}
          style=${W({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
        >
          ${s.showHeader?this._renderHeader(r,u,d,s):M}

          <div
            class=${yt({body:!0,columns:s.skyViewSide})}
            style=${W({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${t.show_day_chart?T`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${W({height:`${s.chartHeight}px`})}
                  >
                    ${_i({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style,compact:s.compact,minimal:!1,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,u,s),showGoldenHour:t.show_golden_hour,moonPath:r.moonPath,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(u,s.legendHeight):M}
                </div>`:M}
            ${s.skyViewSide?T`<div
                  class="sky-column"
                  style=${W({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${ki({width:s.skyViewWidth,height:s.chartHeight,sun:t.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:t.show_sun,showMoon:t.show_moon,palette:d,format:u,animations:t.animations,uid:`${this._uid}-sky`,seed:kt(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,u,s.skyViewWidth,this._countdownRows(s))}
                </div>`:M}
          </div>

          ${s.showEvents?this._renderEvents(r,u,s):M}
          ${s.showDetails?this._renderDetails(r,u,t,s,l,a,n):M}
          ${s.showFooter?this._renderFooter(r,u,t,s):M}
        </div>
      </ha-card>
    `}_renderSceneCard(t,n,i,s,r,l,a){let d=l<480?12:16,u=12,p=Math.max(160,l-2*d),m=p>=680,g=l<480?78:92,$=(i.show_sun?1:0)+(i.show_moon?1:0),_=$===0?0:m?g:$*g+($-1)*10,x=l<480?46:52,L=140,v=i.show_header,S=$>0,N=(A,P)=>a-2*d-(A?x+u:0)-(P?_+u:0);i.show_day_chart&&S&&N(v,!0)<L&&(S=!1),i.show_day_chart&&v&&N(!0,S)<L&&(v=!1);let k=i.show_day_chart?Math.max(L,N(v,S)):0;return T`
      <ha-card
        class=${yt({"smc-dark":r,"smc-light":!r,"smc-scene":!0})}
        style=${W({height:`${a}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,n)}
      >
        <div
          class="root scene-root"
          style=${W({padding:`${d}px`,gap:`${u}px`})}
        >
          ${v?this._renderSceneHeader(t,n,s,l,x):M}
          ${i.show_day_chart?T`<div class="scene-wrap" style=${W({height:`${k}px`})}>
                ${cs({profile:t.day,events:t.events,now:t.now,width:p,height:k,format:n,scene:i.scene,showSun:i.show_sun,showMoon:i.show_moon,moonPath:t.moonPath,moon:i.show_moon?{illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,currentAltitude:t.sun.altitude,animations:i.animations,uid:`${this._uid}-scene`})}
              </div>`:M}
          ${S?T`<div
                class=${yt({"scene-tiles":!0,stacked:!m})}
                style=${W({height:`${_}px`})}
              >
                ${i.show_sun?this._renderSceneSunTile(t,n,l<480):M}
                ${i.show_moon?this._renderSceneMoonTile(t,n,l<480):M}
              </div>`:M}
        </div>
      </ha-card>
    `}_renderSceneHeader(t,n,i,s,r){let l=s<480,a=this._primaryCountdown(t,n),d=n.t(this._phaseKey(t));return T`
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
            <span class="scene-title">${t.locationName||n.t("title")}</span>
            <span class="scene-date">${bi(t.now,n)}</span>
          </div>
        </div>
        <div class="scene-chips">
          ${a?T`<span
                class="scene-chip countdown-chip"
                data-body=${a.body}
                role="img"
                aria-label=${a.long}
                title=${a.title}
                >${a.icon}<span>${l?a.duration:a.compact}</span></span
              >`:M}
          ${l&&a?M:T`<span class="scene-chip phase" title=${d}>
                <span
                  class="scene-dot"
                  style=${W({background:this._phaseColor(t,i)})}
                ></span>
                ${d}
              </span>`}
        </div>
      </div>
    `}_sceneTileAction(t){return!t||!this.hass?.states?.[t]?null:()=>Si(this,this.hass,this._config,{action:"more-info",entity:t},void 0)}_sceneTile(t,n,i,s){let r=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),n?.())};return T`<div
      class=${yt({"scene-tile":!0,[t]:!0,actionable:!!n})}
      role=${n?"button":"group"}
      tabindex=${n?"0":"-1"}
      aria-label=${i}
      @click=${n??M}
      @keydown=${n?r:M}
    >
      ${s}
      ${n?T`<svg class="scene-chevron" width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>`:M}
    </div>`}_renderSceneSunTile(t,n,i){let s=i?52:62,r=at(t.sun.altitude,1,n.locale),l=`${Math.round(t.sun.azimuth)}\xB0 ${Kt(t.sun.azimuth,n.language)}`,a=u=>u?nt(u,n):"\u2014",d=`${n.t("sunAltitude")} ${r}, ${n.t("azimuth")} ${l}`;return this._sceneTile("sun",this._sceneTileAction(this._config.entity),d,T`<span class="scene-tile-icon" style=${W({width:`${s}px`,height:`${s}px`})}
          >${Ci(Math.round(s*.55),"#f5a524")}</span
        >
        <span class="scene-tile-body">
          <span class="scene-tile-label">${n.t("sunAltitude")}</span>
          <span class="scene-tile-value">${r}</span>
          <span class="scene-tile-sub">${n.t("azimuth")} ${l}</span>
        </span>
        <span class="scene-tile-times">
          <span><i aria-hidden="true">▲</i><b>${a(t.events.sunrise)}</b
            ><small>${n.t("sunriseShort")}</small></span
          >
          <span><i aria-hidden="true">▼</i><b>${a(t.events.sunset)}</b
            ><small>${n.t("sunsetShort")}</small></span
          >
        </span>`)}_renderSceneMoonTile(t,n,i){let s=i?52:62,r=t.moon.haPhaseName??t.moon.phase.phaseKey,l=yi(t.moon.phase.illumination,n.locale),a=t.moon.position.apparentAltitude,d=a>=0?`${at(a,1,n.locale)} \xB7 ${Math.round(t.moon.position.azimuth)}\xB0 ${Kt(t.moon.position.azimuth,n.language)}`:`${at(Math.abs(a),1,n.locale)} ${n.t("belowHorizon")}`,u=`${l} ${n.t("illumination")}`;return this._sceneTile("moon",this._sceneTileAction(this._config.moon_entity||null),`${n.t(r)}, ${u}`,T`<span class="scene-tile-icon moon" style=${W({width:`${s}px`,height:`${s}px`})}
          >${Ft({size:s,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,darkColor:"var(--smc-scene-moon-dark, rgba(92, 102, 160, 0.7))",uid:`${this._uid}-scene-tile-moon`})}</span
        >
        <span class="scene-tile-body">
          <span class="scene-tile-label">${n.t(r)}</span>
          <span class="scene-tile-value small">${u}</span>
          <span class="scene-tile-sub">${d}</span>
          <span class="scene-tile-sub">${this._moonTimesText(t,n,!1)}</span>
        </span>`)}_renderHeader(t,n,i,s){let r=t.locationName||n.t("title"),l=t.extras,a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),d=10.5,u=(k,A=!1)=>k.length*d*.58+20+(A?12:0),m=Math.max(0,a-10-108),g=n.t(this._phaseKey(t)),$=u(g,!0),_=this._primaryCountdown(t,n),x=M,L=!0;if(_){let k=u(_.compact)+Es,A=u(_.duration)+Es,P=null;k+$<=m?(P=_.compact,m-=k):A+$<=m?(P=_.duration,m-=A):A<=m&&(P=_.duration,m-=A,L=!1),P!==null&&(x=T`<span
          class="meta-chip countdown-chip"
          data-body=${_.body}
          role="img"
          aria-label=${_.long}
          title=${_.title}
          >${_.icon}<span>${P}</span></span
        >`)}L&&(m-=$);let v=M;if(t.daylightMinutes!==null){let k=Sn(t.daylightMinutes,n.t),A=l.daylightDeltaMinutes===null?"":` ${ts(l.daylightDeltaMinutes,n.t)}`,P=`${n.t("dayLength")} ${k}${A}`,H=u(P);H<=m&&(m-=H,v=T`<span class="meta-chip" title=${n.t("dayLength")}
          >${P}</span
        >`)}let S=M,N=u(l.timeZoneLongName);return N<=m&&(m-=N,S=T`<span class="meta-chip">${l.timeZoneLongName}</span>`),T`
      <div class="header" style=${W({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${bi(t.now,n)}</span>
        </div>
        <div class="header-meta">
          ${x}${v}${S}
          ${L?T`<span class="phase-chip" title=${g}>
                <span
                  class="phase-dot"
                  style=${W({background:this._phaseColor(t,i)})}
                ></span>
                ${g}
              </span>`:M}
        </div>
      </div>
    `}_countdowns(t,n){let i=this._countdownCache;if(i&&i.model===t&&i.context===n)return[...i.entries];let s=this._computeCountdowns(t,n);return this._countdownCache={model:t,context:n,entries:s},[...s]}_computeCountdowns(t,n){let i=this._config;if(!i?.show_remaining_time)return[];let s=t.now.getTime(),r=[],l=(g,$,_,x,L,v=!1)=>{if(!g)return;let S=(g.time.getTime()-s)/6e4;if(!(S>=0))return;let N=S<1,k=N?n.t("countdownNow"):Sn(S,n.t),A=P=>N?n.t("nowFormat",{event:n.t(P)}):n.t("untilFormat",{event:n.t(P),duration:k});r.push({minutes:S,compact:A(_??$),duration:k,time:g.time,rising:g.rising,trailing:v,name:n.t($),long:A($),title:`${n.t($)} ${nt(g.time,n)}${g.dayOffset>0?` (${Tn(g.dayOffset,n.t)})`:""}`,icon:x,body:L})},a=t.extras.nextSunEvent;l(a,a?.rising?"sunrise":"sunset",a?.rising?"sunriseShort":"sunsetShort",a?.rising?Ti(Qt):Ei(Qt),"sun");let d=t.extras.nextTwilightEvent;if(d){let g=this._twilightKeys();l(d,d.rising?g.dawn:g.dusk,d.rising?g.dawnShort:g.duskShort,d.rising?En(Qt):An(Qt),"twilight")}let u=t.extras.nextMoonEvent;l(u,u?.rising?"moonrise":"moonset",u?.rising?"moonriseShort":"moonsetShort",u?.rising?Ai(Qt):ms(Qt),"moon");let p=t.extras.goldenHour;if(p){let g=p.active?p.end:p.start;g&&l({time:g,rising:!p.active,dayOffset:this._dayOffset(g,t)},p.active?"goldenHourEnd":"goldenHour",p.active?"goldenHourEndShort":"goldenHourShort",ds(Qt),"golden")}let m=t.extras.nextFullMoon;return i.show_moon&&m&&l({time:m.time,rising:!0,dayOffset:this._dayOffset(m.time,t)},"fullMoon",null,Ai(Qt),"moon",!0),r.sort((g,$)=>+!!g.trailing-+!!$.trailing||g.minutes-$.minutes)}_orderedCountdowns(t,n){let i=this._countdowns(t,n),s=this._config?.remaining_time_focus;if(s==="next")return i;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let l of r){let a=i.findIndex(d=>d.body===l&&!d.trailing);a>0&&i.unshift(...i.splice(a,1))}return i}_dayOffset(t,n){return kt(t,n.timeZone)-kt(n.now,n.timeZone)}_primaryCountdown(t,n){return this._orderedCountdowns(t,n).find(i=>!i.trailing)}_chartCountdown(t,n,i){let s=this._primaryCountdown(t,n);return s?{time:s.time,rising:s.rising,body:s.body,label:i.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let t=this._config?.twilight_level;return t==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:t==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(t,n){return T`
      <div class="legend" aria-hidden="true" style=${W({height:`${n}px`})}>
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
    `}_renderSkyReadout(t,n,i,s){let r=this._config,l=[],a=(d,u,p)=>{let m=at(u,1,n.locale),g=`${Math.round(p)}\xB0 ${Kt(p,n.language)}`;return T`<span
        title=${`${n.t("elevation")} ${m} \xB7 ${n.t("azimuth")} ${g}`}
        >${n.t("positionReadout",{body:d,altitude:m,degrees:String(Math.round(p)),direction:Kt(p,n.language)})}</span
      >`};r.show_sun&&l.push(a(n.t("sun"),t.sun.altitude,t.sun.azimuth)),r.show_moon&&l.push(a(n.t("moon"),t.moon.position.apparentAltitude,t.moon.position.azimuth));for(let d of this._orderedCountdowns(t,n).slice(0,s))l.push(T`<span title=${d.title}>${d.long}</span>`);return l.length===0||i<150?M:T`<div class="sky-readout">${l}</div>`}_countdownRows(t){let n=this._config,i=(n.show_sun?1:0)+(n.show_moon?1:0),s=t.chartHeight+t.legendHeight+(t.showLegend?mi:0),r=i*hi+mi,l=s-r-Zo;return Math.max(0,Math.min(3,Math.floor(l/hi)))}_renderFooter(t,n,i,s){let r=i.twilight_level==="nautical"?"footerTwilightNautical":i.twilight_level==="astronomical"?"footerTwilightAstronomical":i.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",l=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),a=n.t(r),d=t.extras.timeZoneLongName,u=n.t("footerMethod"),p=`${a} \xB7 ${d} \xB7 ${u}`,m=9.5*.55,g=x=>x.length*m<=l,$=g(`${a} \xB7 ${d}`)?`${a} \xB7 ${d}`:a,_=g(`${$} \xB7 ${u}`);return T`
      <div
        class="footer"
        title=${p}
        style=${W({height:`${s.footerHeight}px`})}
      >
        <span class="part">${$}</span>
        ${_?T`<span class="part">${u}</span>`:M}
      </div>
    `}_phaseKey(t){if(t.day.polar==="polar-day")return"phasePolarDay";if(t.day.polar==="polar-night")return"phasePolarNight";switch(t.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(t,n){switch(t.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(t,n,i,s=.7){for(let r of t)if(r&&r.length*i*s<=n)return r;return null}_renderCountdownTile(t,n,i,s,r,l,a){let u=t.body==="sun"&&!t.rising?n.t("tileDaylightLeft"):n.t("tileUntil",{event:t.name}),p=this._fitLabel([u,t.name],r,l),m=this._fitLabel([t.duration],r,a+2)??t.duration;return T`<div
      class=${yt({"event-tile":!0,countdown:!0,rising:t.rising,compact:i})}
      data-body=${t.body}
      style=${W({gridColumn:`span ${s}`})}
      title=${t.title}
      role="img"
      aria-label=${t.long}
    >
      <span class="event-head">
        <span class="event-icon">${t.icon}</span>
        <span class="event-time" style=${W({fontSize:`${a+2}px`})}
          >${m}</span
        >
        ${i&&p?T`<span class="event-label" style=${W({fontSize:`${l}px`})}
              >${p}</span
            >`:M}
      </span>
      ${!i&&p?T`<span class="event-label" style=${W({fontSize:`${l}px`})}
            >${p}</span
          >`:M}
    </div>`}_renderEvents(t,n,i){let{compact:s,padding:r}=i,l=i.chartWidth+(i.skyViewSide?i.skyViewWidth+10:0),a=this._config,d=[];if(a.show_twilight&&d.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:t.events.civilDawn,icon:En(s?14:16),missingText:n.t("noEvent")}),d.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:t.events.sunrise,icon:Ti(s?14:16),missingText:n.t("noSunrise")}),d.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:t.events.sunset,icon:Ei(s?14:16),missingText:n.t("noSunset")}),a.show_twilight&&d.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:t.events.civilDusk,icon:An(s?14:16),missingText:n.t("noEvent")}),a.twilight_level==="all"||a.show_astronomical_details){let D=[["nauticalDawn",t.events.nauticalDawn,"dawn"],["nauticalDusk",t.events.nauticalDusk,"dusk"],["astronomicalDawn",t.events.astronomicalDawn,"dawn"],["astronomicalDusk",t.events.astronomicalDusk,"dusk"]];for(let[F,q,G]of D)d.push({key:F,kind:G,label:n.t(F),shortLabel:n.t(F),time:q,icon:G==="dawn"?En(s?13:15):An(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let u=l<300?3:l<420?4:l<560?6:8,p=a.show_countdown_tile?this._primaryCountdown(t,n):void 0,m=p?2:0,g=Math.max(2,u-m),$=D=>D.secondary?2:D.kind==="sunrise"||D.kind==="sunset"?0:1,_=new Set([...d].map((D,F)=>({tile:D,index:F})).sort((D,F)=>$(D.tile)-$(F.tile)||D.index-F.index).slice(0,g).map(D=>D.tile)),x=d.filter(D=>_.has(D)),L=t.now.getTime(),v=x.filter(D=>D.time&&D.time.getTime()>L).sort((D,F)=>D.time.getTime()-F.time.getTime())[0],S=6,N=x.length+m,A=Math.max(40,l-2*r-S*(N-1))/N-10,P=s?A<120?8.5:9:A<92?8.5:9.5,H=A<74?11:A<96?12:12.5;return T`
      <div
        class="events"
        style=${W({gap:`${S}px`,height:`${i.eventsHeight}px`})}
      >
        ${p?this._renderCountdownTile(p,n,s,m,A*m+(m-1)*(S+10),P,H):M}
        ${x.map(D=>{let F=this._fitLabel([D.label,D.shortLabel],A,P),q=D.time?nt(D.time,n):D.missingText,G=this._fitLabel([q,"\u2014"],A,H)??"\u2014";return T`
            <div
              class=${yt({"event-tile":!0,[D.kind]:!0,secondary:!!D.secondary,next:D===v,compact:s})}
              title=${`${D.label}: ${q}`}
            >
              <span class="event-head">
                <span class="event-icon">${D.icon}</span>
                <span
                  class=${yt({"event-time":!0,missing:!D.time})}
                  style=${W({fontSize:`${H}px`})}
                >
                  ${G}
                </span>
                ${s&&F?T`<span
                      class="event-label"
                      style=${W({fontSize:`${P}px`})}
                      >${F}</span
                    >`:M}
              </span>
              ${!s&&F?T`<span
                    class="event-label"
                    style=${W({fontSize:`${P}px`})}
                    >${F}</span
                  >`:M}
            </div>
          `})}
      </div>
    `}_renderDetails(t,n,i,s,r,l,a){let d=t.extras,u=t.moon.haPhaseName??t.moon.phase.phaseKey,p=s.skyViewInline&&a>=430,m=(i.show_sun?1:0)+(i.show_moon?1:0)+(p?1:0),$=Math.max(60,a-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,_=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],$,10.5),x=at(t.sun.altitude,1,n.locale),L=`${Math.round(t.sun.azimuth)}\xB0 ${Kt(t.sun.azimuth,r)}`,v=d.sunBelowHorizon!==null?`${at(d.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,S=this._fitLabel([v?`${v} \xB7 ${L}`:`${n.t("azimuth")} ${L}`,v??L,L],$,9.5),N=d.sunriseAzimuth!==null?`${Math.round(d.sunriseAzimuth)}\xB0 ${Kt(d.sunriseAzimuth,r)}`:null,k=d.sunsetAzimuth!==null?`${Math.round(d.sunsetAzimuth)}\xB0 ${Kt(d.sunsetAzimuth,r)}`:null,A=i.show_astronomical_details&&N&&k?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:N,set:k}),`${Math.round(d.sunriseAzimuth)}\xB0 / ${Math.round(d.sunsetAzimuth)}\xB0`],$,9.5):null,P=i.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${t.events.solarNoon?nt(t.events.solarNoon,n):"\u2014"} \xB7 ${at(t.day.maxAltitude,1,n.locale)}`,t.events.solarNoon?nt(t.events.solarNoon,n):null],$,9.5):null,H=this._fitLabel([n.t(u),n.t("moon")],$,10.5),D=yi(t.moon.phase.illumination,n.locale),F=this._fitLabel([`${D} ${n.t("illumination")}`,D],$,13),q=t.moon.position.apparentAltitude,G=at(q,1,n.locale),Q=`${Math.round(t.moon.position.azimuth)}\xB0 ${Kt(t.moon.position.azimuth,r)}`,E=`${n.t("elevation")} ${G} \xB7 ${n.t("azimuth")} ${Q}`,y=q>=0?[`${n.t("elevation")} ${G} \xB7 ${Q}`,`${G} \xB7 ${Q}`,G]:[`${at(Math.abs(q),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${Q}`,`${at(Math.abs(q),1,n.locale)} ${n.t("belowHorizon")}`,G],z=null,V="";if(d.moonDistance){let{current:Z,min:pt,max:ut}=d.moonDistance,K=Math.max(1,ut-pt),dt=Z<=pt+K*.2,vt=Z>=pt+K*.8,ft=Mn(Z,n.locale),Bt=dt?n.t("nearPerigee"):vt?n.t("nearApogee"):"";V=`${n.t("moonDistance")}: ${ft} \xB7 ${n.t("distanceRange",{min:Mn(pt,n.locale),max:Mn(ut,n.locale)})}`,z=this._fitLabel(Bt?[`${ft} \xB7 ${Bt}`,ft]:[ft],$,9.5)}let B=this._fitLabel(z?y.flatMap(Z=>[`${Z} \xB7 ${z}`,Z]):y,$,9.5),gt=z!==null&&(B?.includes(z)??!1),it=null,Mt="";if(i.show_astronomical_details&&d.nextFullMoon){let Z=d.nextFullMoonDays??0,pt=Z<=0?n.t("dayToday"):n.t("inDays",{days:String(Z)}),ut=`${n.t("nextFullMoon")} ${pt}`,K=d.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",dt=`${ut}${K}${d.moonFolkName?` \xB7 ${d.moonFolkName}`:""}`;Mt=d.blueMoon?n.t("blueMoonHint"):d.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),it=this._fitLabel([dt,`${ut}${K}`,ut],$,9.5)}let I=i.show_moon_times?this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],$,9.5):null,et=[];B&&et.push({text:B,title:E,position:!0}),I&&et.push({text:I,title:null}),it&&et.push({text:it,title:Mt}),z&&!gt&&et.push({text:z,title:V});let Ht=et.slice(0,s.detailsHeight>=pi?3:2),ot=gt||Ht.some(Z=>Z.text===z),mt=z&&!ot?V||z:null;return T`
      <div
        class="details"
        style=${W({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${i.show_sun?T`
              <div class="detail-tile sun">
                <span class="detail-icon">${Ci(20,l?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${_?T`<span class="detail-title">${_}</span>`:M}
                  <span class="detail-value">${x}</span>
                  ${S?T`<span class="detail-sub">${S}</span>`:M}
                  ${P?T`<span class="detail-sub">${P}</span>`:M}
                  ${A?T`<span class="detail-sub">${A}</span>`:M}
                </span>
              </div>
            `:M}
        ${i.show_moon?T`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Ft({size:26,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${H?T`<span class="detail-title">${H}</span>`:M}
                  ${F?T`<span class="detail-value">${F}</span>`:M}
                  ${Ht.map(Z=>{let pt=[Z.title,Z.position?mt:null].filter(Boolean).join(" \xB7 ")||null;return T`<span class="detail-sub" title=${pt??M}
                      >${Z.text}</span
                    >`})}
                </span>
              </div>
            `:M}
        ${p?T`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${ki({width:56,height:56,sun:i.show_sun?{altitude:t.sun.altitude,azimuth:t.sun.azimuth}:null,moon:i.show_moon?{altitude:t.moon.position.apparentAltitude,azimuth:t.moon.position.azimuth,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,sunTrack:t.sunTrack,moonPhase:t.moon.phase,showSun:i.show_sun,showMoon:i.show_moon,palette:l?ci:ui,format:n,animations:i.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:kt(t.now,t.timeZone)})}
                </span>
              </div>
            `:M}
      </div>
    `}_moonTimesText(t,n,i){let s=t.extras.moonRise,r=t.extras.moonSet,l=s&&s.dayOffset!==0?` ${Tn(s.dayOffset,n.t)}`:"",a=s?`\u2191 ${nt(s.time,n)}${l}`:"\u2191 \u2014";if(i)return a;let d=r&&r.dayOffset!==0?` ${Tn(r.dayOffset,n.t)}`:"",u=r?`\u2193 ${nt(r.time,n)}${d}`:"\u2193 \u2014";return`${a} \xB7 ${u}`}_renderMinimalTimes(t,n,i,s){if(i.minimalTimesHeight<=0)return M;let r=n.t,l=[];if(s.minimal_show_times&&t.events.sunrise){let d=nt(t.events.sunrise,n);l.push(T`<span class="minimal-time rise" title=${`${r("sunrise")} ${d}`}
          >↑ ${d}</span
        >`)}if(s.minimal_show_zenith&&t.events.solarNoon){let d=nt(t.events.solarNoon,n),u=i.chartWidth<250?d:`${r("zenith")} ${d}`;l.push(T`<span class="minimal-time zenith" title=${`${r("zenith")} ${d}`}
          >${u}</span
        >`)}if(s.minimal_show_times&&t.events.sunset){let d=nt(t.events.sunset,n);l.push(T`<span class="minimal-time set" title=${`${r("sunset")} ${d}`}
          >↓ ${d}</span
        >`)}if(l.length===0)return M;let a=w(c(i.minimalTimesHeight*.78,1),8,12);return T`<div
      class="minimal-times"
      style=${W({height:`${i.minimalTimesHeight}px`,fontSize:`${a}px`,lineHeight:`${i.minimalTimesHeight}px`})}
    >
      ${l}
    </div>`}_minimalAriaLabel(t,n){return`${this._minimalTitle(t,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(t,n){let i=[this._ariaLabel(t,n)];i.push(`${n.t("sun")} ${at(t.sun.altitude,0,n.locale)}`);let s=this._primaryCountdown(t,n);return s&&i.push(s.long),i.join(" \xB7 ")}_ariaLabel(t,n){let i=[n.t("title")];return i.push(n.t(this._phaseKey(t))),t.events.sunrise&&i.push(`${n.t("sunrise")} ${nt(t.events.sunrise,n)}`),t.events.sunset&&i.push(`${n.t("sunset")} ${nt(t.events.sunset,n)}`),i.join(", ")}};Wt.styles=Ss,Dt([ye({attribute:!1})],Wt.prototype,"hass",1),Dt([ve()],Wt.prototype,"_config",2),Dt([ve()],Wt.prototype,"_width",2),Dt([ve()],Wt.prototype,"_tick",2),Wt=Dt([hn(ai)],Wt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(e=>e.type===`custom:${xn}`)||window.customCards.push({type:`custom:${xn}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Wt as SunMoonCard};
