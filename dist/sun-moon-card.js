var Ys=Object.defineProperty;var Qs=Object.getOwnPropertyDescriptor;var Lt=(o,e,t,n)=>{for(var i=n>1?void 0:n?Qs(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(e,t,i):r(i))||i);return n&&i&&Ys(e,t,i),i};var ln=globalThis,cn=ln.ShadowRoot&&(ln.ShadyCSS===void 0||ln.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,In=Symbol(),no=new WeakMap,Re=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==In)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(cn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=no.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&no.set(t,e))}return e}toString(){return this.cssText}},io=o=>new Re(typeof o=="string"?o:o+"",void 0,In),un=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new Re(t,o,In)},oo=(o,e)=>{if(cn)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=ln.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},On=cn?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return io(t)})(o):o;var{is:tr,defineProperty:er,getOwnPropertyDescriptor:nr,getOwnPropertyNames:ir,getOwnPropertySymbols:or,getPrototypeOf:sr}=Object,dn=globalThis,so=dn.trustedTypes,rr=so?so.emptyScript:"",ar=dn.reactiveElementPolyfillSupport,Pe=(o,e)=>o,ze={toAttribute(o,e){switch(e){case Boolean:o=o?rr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},hn=(o,e)=>!tr(o,e),ro={attribute:!0,type:String,converter:ze,reflect:!1,useDefault:!1,hasChanged:hn};Symbol.metadata??=Symbol("metadata"),dn.litPropertyMetadata??=new WeakMap;var Ot=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ro){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&er(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:s}=nr(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let l=i?.call(this);s?.call(this,r),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ro}static _$Ei(){if(this.hasOwnProperty(Pe("elementProperties")))return;let e=sr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe("properties"))){let t=this.properties,n=[...ir(t),...or(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(On(i))}else e!==void 0&&t.push(On(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ze).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ze;this._$Em=i;let l=r.fromAttribute(t,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){if(e!==void 0){let r=this.constructor;if(i===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??hn)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ot.elementStyles=[],Ot.shadowRootOptions={mode:"open"},Ot[Pe("elementProperties")]=new Map,Ot[Pe("finalized")]=new Map,ar?.({ReactiveElement:Ot}),(dn.reactiveElementVersions??=[]).push("2.1.2");var jn=globalThis,ao=o=>o,mn=jn.trustedTypes,lo=mn?mn.createPolicy("lit-html",{createHTML:o=>o}):void 0,go="$lit$",qt=`lit$${Math.random().toFixed(9).slice(2)}$`,fo="?"+qt,lr=`<${fo}>`,ce=document,Oe=()=>ce.createComment(""),Fe=o=>o===null||typeof o!="object"&&typeof o!="function",Vn=Array.isArray,cr=o=>Vn(o)||typeof o?.[Symbol.iterator]=="function",Fn=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,co=/-->/g,uo=/>/g,ae=RegExp(`>|${Fn}(?:([^\\s"'>=/]+)(${Fn}*=${Fn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ho=/'/g,mo=/"/g,$o=/^(?:script|style|textarea|title)$/i,Zn=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),E=Zn(1),g=Zn(2),$a=Zn(3),Et=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),po=new WeakMap,le=ce.createTreeWalker(ce,129);function bo(o,e){if(!Vn(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return lo!==void 0?lo.createHTML(e):e}var ur=(o,e)=>{let t=o.length-1,n=[],i,s=e===2?"<svg>":e===3?"<math>":"",r=Ie;for(let l=0;l<t;l++){let a=o[l],d,u,p=-1,m=0;for(;m<a.length&&(r.lastIndex=m,u=r.exec(a),u!==null);)m=r.lastIndex,r===Ie?u[1]==="!--"?r=co:u[1]!==void 0?r=uo:u[2]!==void 0?($o.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=ae):u[3]!==void 0&&(r=ae):r===ae?u[0]===">"?(r=i??Ie,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?ae:u[3]==='"'?mo:ho):r===mo||r===ho?r=ae:r===co||r===uo?r=Ie:(r=ae,i=void 0);let f=r===ae&&o[l+1].startsWith("/>")?" ":"";s+=r===Ie?a+lr:p>=0?(n.push(d),a.slice(0,p)+go+a.slice(p)+qt+f):a+qt+(p===-2?l:f)}return[bo(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ge=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,r=0,l=e.length-1,a=this.parts,[d,u]=ur(e,t);if(this.el=o.createElement(d,n),le.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=le.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(go)){let m=u[r++],f=i.getAttribute(p).split(qt),$=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:$[2],strings:f,ctor:$[1]==="."?Un:$[1]==="?"?Kn:$[1]==="@"?Wn:ye}),i.removeAttribute(p)}else p.startsWith(qt)&&(a.push({type:6,index:s}),i.removeAttribute(p));if($o.test(i.tagName)){let p=i.textContent.split(qt),m=p.length-1;if(m>0){i.textContent=mn?mn.emptyScript:"";for(let f=0;f<m;f++)i.append(p[f],Oe()),le.nextNode(),a.push({type:2,index:++s});i.append(p[m],Oe())}}}else if(i.nodeType===8)if(i.data===fo)a.push({type:2,index:s});else{let p=-1;for(;(p=i.data.indexOf(qt,p+1))!==-1;)a.push({type:7,index:s}),p+=qt.length-1}s++}}static createElement(e,t){let n=ce.createElement("template");return n.innerHTML=e,n}};function be(o,e,t=o,n){if(e===Et)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,s=Fe(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=be(o,i._$AS(o,e.values),i,n)),e}var Gn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??ce).importNode(t,!0);le.currentNode=i;let s=le.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new Ue(s,s.nextSibling,this,e):a.type===1?d=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(d=new Bn(s,this,e)),this._$AV.push(d),a=n[++l]}r!==a?.index&&(s=le.nextNode(),r++)}return le.currentNode=ce,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Ue=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=be(this,e,t),Fe(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ge.createElement(bo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new Gn(i,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=po.get(e.strings);return t===void 0&&po.set(e.strings,t=new Ge(e)),t}k(e){Vn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let s of e)i===t.length?t.push(n=new o(this.O(Oe()),this.O(Oe()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ao(e).nextSibling;ao(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ye=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,i){let s=this.strings,r=!1;if(s===void 0)e=be(this,e,t,0),r=!Fe(e)||e!==this._$AH&&e!==Et,r&&(this._$AH=e);else{let l=e,a,d;for(e=s[0],a=0;a<s.length-1;a++)d=be(this,l[n+a],t,a),d===Et&&(d=this._$AH[a]),r||=!Fe(d)||d!==this._$AH[a],d===k?e=k:e!==k&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!i&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Un=class extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Kn=class extends ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Wn=class extends ye{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=be(this,e,t,0)??k)===Et)return;let n=this._$AH,i=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==k&&(n===k||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Bn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){be(this,e)}};var dr=jn.litHtmlPolyfillSupport;dr?.(Ge,Ue),(jn.litHtmlVersions??=[]).push("3.3.3");var yo=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let s=t?.renderBefore??null;n._$litPart$=i=new Ue(e.insertBefore(Oe(),s),s,void 0,t??{})}return i._$AI(o),i};var qn=globalThis,Nt=class extends Ot{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Et}};Nt._$litElement$=!0,Nt.finalized=!0,qn.litElementHydrateSupport?.({LitElement:Nt});var hr=qn.litElementPolyfillSupport;hr?.({LitElement:Nt});(qn.litElementVersions??=[]).push("4.2.2");var pn=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};var mr={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:hn},pr=(o=mr,e,t)=>{let{kind:n,metadata:i}=t,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(t.name,o),n==="accessor"){let{name:r}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,o,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,o,l),l}}}if(n==="setter"){let{name:r}=t;return function(l){let a=this[r];e.call(this,l),this.requestUpdate(r,a,o,!0,l)}}throw Error("Unsupported decorator location: "+n)};function ve(o){return(e,t)=>typeof t=="object"?pr(o,e,t):((n,i,s)=>{let r=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(i,s):void 0})(o,e,t)}function we(o){return ve({...o,state:!0,attribute:!1})}var fn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$n=o=>(...e)=>({_$litDirective$:o,values:e}),_e=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var ft=$n(class extends _e{constructor(o){if(super(o),o.type!==fn.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=o.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let i=!!e[n];i===this.st.has(n)||this.nt?.has(n)||(i?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Et}});var vo="important",gr=" !"+vo,K=$n(class extends _e{constructor(o){if(super(o),o.type!==fn.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let n=o[t];return n==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?t.removeProperty(n):t[n]=null);for(let n in e){let i=e[n];if(i!=null){this.ft.add(n);let s=typeof i=="string"&&i.endsWith(gr);n.includes("-")||s?t.setProperty(n,s?i.slice(0,-11):i,s?vo:""):t[n]=i}}return Et}});var wo=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],_o=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],xo=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],Xn=385000.49;var q=Math.PI/180,Ct=180/Math.PI,fr=1495978707e-1,Mo=6378.14,Ke=-.833,Ht=-6,Ft=-12,Gt=-18,bn=6,Be=-4,So=-6,We=120*1e3;function je(o){return(typeof o=="number"?o:o.getTime())/864e5+24405875e-1}function ke(o){return(o-2451545)/36525}function et(o){let e=o%360;return e<0?e+360:e}function $r(o){let e=ke(o);return 23.439291-.0130042*e-164e-9*e*e+504e-9*e*e*e}function br(o){let e=o-2451545,t=ke(o),n=280.46061837+360.98564736629*e+387933e-9*t*t-t*t*t/3871e4;return et(n)}function Jn(o){let e=ke(o),t=et(280.46646+e*(36000.76983+e*3032e-7)),n=et(357.52911+e*(35999.05029-1537e-7*e)),i=Math.sin(n*q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*q)*(.019993-101e-6*e)+Math.sin(3*n*q)*289e-6,s=t+i,r=et(125.04-1934.136*e),l=s-.00569-.00478*Math.sin(r*q),d=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(r*q),u=l*q,p=d*q,m=et(Math.atan2(Math.cos(p)*Math.sin(u),Math.cos(u))*Ct),f=Math.asin(Math.sin(p)*Math.sin(u))*Ct;return{ra:m,dec:f}}function yr(o){let e=ke(o),t=et(280.46646+e*(36000.76983+e*3032e-7)),n=et(357.52911+e*(35999.05029-1537e-7*e)),i=Math.sin(n*q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*q)*(.019993-101e-6*e)+Math.sin(3*n*q)*289e-6,s=et(125.04-1934.136*e);return et(t+i-.00569-.00478*Math.sin(s*q))}function vr(o){let e=je(o),t=ke(e),n=et(357.52911+t*(35999.05029-1537e-7*t)),i=.016708634-t*(42037e-9+1267e-10*t),s=Math.sin(n*q)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*q)*(.019993-101e-6*t)+Math.sin(3*n*q)*289e-6,r=(n+s)*q;return 1.000001018*(1-i*i)/(1+i*Math.cos(r))*fr}function Yn(o,e,t,n){let i=et(br(n)+t),s=et(i-o.ra),r=e*q,l=o.dec*q,a=s*q,d=Math.asin(Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(a))*Ct,u=et(Math.atan2(Math.sin(a),Math.cos(a)*Math.sin(r)-Math.tan(l)*Math.cos(r))*Ct+180);return{altitude:d,azimuth:u}}function Ve(o,e){let t=je(o);return Yn(Jn(t),e.latitude,e.longitude,t).altitude}function yn(o,e){let t=je(o);return Yn(Jn(t),e.latitude,e.longitude,t)}function wr(o){let e=o;return{D:et(297.8501921+445267.1114034*e-.0018819*e*e+e*e*e/545868-e*e*e*e/113065e3),M:et(357.5291092+35999.0502909*e-1536e-7*e*e+e*e*e/2449e4),Mp:et(134.9633964+477198.8675055*e+.0087414*e*e+e*e*e/69699-e*e*e*e/14712e3),F:et(93.272095+483202.0175233*e-.0036539*e*e-e*e*e/3526e3+e*e*e*e/86331e4)}}function To(o){let e=ke(o),t=et(218.3164477+481267.88123421*e-.0015786*e*e+e*e*e/538841-e*e*e*e/65194e3),n=wr(e),i=t;for(let l of wo){let a=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;i+=l[4]*Math.sin(a*q)}let s=0;for(let l of _o){let a=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;s+=l[4]*Math.sin(a*q)}let r=Xn;for(let l of xo){let a=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;r+=l[4]*Math.cos(a*q)}return{longitude:et(i),latitude:s,distanceKm:r}}function Ao(o,e,t){let n=$r(t)*q,i=o*q,s=e*q,r=et(Math.atan2(Math.sin(i)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(i))*Ct),l=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(i))*Ct;return{ra:r,dec:l}}function Xt(o,e){let t=je(o),n=To(t),i=Ao(n.longitude,n.latitude,t),s=Yn(i,e.latitude,e.longitude,t),r=Math.asin(Mo/n.distanceKm)*Ct,l=s.altitude-r*Math.cos(s.altitude*q);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:l,equatorial:i,geocentric:n}}function _r(o){return .7275*(Math.asin(Mo/o)*Ct)-.5667}var xr=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],kr=29.530588853;function vn(o){let e=je(o),t=To(e),n=Ao(t.longitude,t.latitude,e),i=Jn(e),s=yr(e),r=vr(o),l=t.distanceKm,a=t.latitude*q,d=Math.acos(Math.min(1,Math.max(-1,Math.cos(a)*Math.cos((t.longitude-s)*q)))),u=Math.atan2(r*Math.sin(d),l-r*Math.cos(d)),p=et(u*Ct),m=(1+Math.cos(u))/2,f=(i.ra-n.ra)*q,$=i.dec*q,w=n.dec*q,_=et(Math.atan2(Math.cos($)*Math.sin(f),Math.sin($)*Math.cos(w)-Math.cos($)*Math.sin(w)*Math.cos(f))*Ct),L=et(t.longitude-s)/360,v=Math.min(7,Math.floor(L*8+.5)%8),M=L*29.530588853;return{illumination:m,phaseAngle:p,elongation:d*Ct,phaseIndex:v,phaseKey:xr[v],brightLimbAngle:_,moonAgeDays:M,waxing:L<.5,distanceKm:l}}function xe(o,e,t,n,i){let s=[];if(!(e>o))return s;let r=Math.max(2,Math.ceil((e-o)/t)),l=(e-o)/r,a=o,d=n(o)-i;for(let u=1;u<=r;u++){let p=o+u*l,m=n(p)-i;if(d===0)s.push({time:a,rising:m>0});else if(d<0&&m>=0||d>0&&m<=0){let f=a,$=p,w=d;for(let _=0;_<50&&$-f>1;_++){let L=(f+$)/2,v=n(L)-i;v<0&&w<0||v>0&&w>0?(f=L,w=v):$=L}s.push({time:(f+$)/2,rising:m>d})}a=p,d=m}return s}function ko(o,e,t,n){let i=o.find(s=>s.rising===e&&s.time>=t&&s.time<n);return i?new Date(i.time):null}function Qn(o,e,t,n=4){let i=e.getTime()-27e5,s=t.getTime()+2700*1e3,r=e.getTime(),l=t.getTime(),a=S=>Ve(S,o),d=[],u=Math.max(3e4,Math.round(n*60*1e3));for(let S=r;S<l;S+=u)d.push({time:S,altitude:a(S)});d.push({time:l,altitude:a(l)});let p=-1/0,m=1/0;for(let S of d)S.altitude>p&&(p=S.altitude),S.altitude<m&&(m=S.altitude);let f=[["sunrise","sunset",Ke],["civilDawn","civilDusk",Ht],["nauticalDawn","nauticalDusk",Ft],["astronomicalDawn","astronomicalDusk",Gt]],$={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[S,T,R]of f){let C=xe(i,s,We,a,R);$[S]=ko(C,!0,r,l),$[T]=ko(C,!1,r,l)}let w=r,_=-1/0,L=120*1e3;for(let S=r;S<=l;S+=L){let T=a(S);T>_&&(_=T,w=S)}let v=Math.max(r,w-L),M=Math.min(l,w+L);for(let S=0;S<40&&M-v>1e3;S++){let T=v+(M-v)/3,R=M-(M-v)/3;a(T)<a(R)?v=T:M=R}$.solarNoon=new Date((v+M)/2);let D="none";return m>Ke?D="polar-day":p<Ke&&(D="polar-night"),{dayStart:e,dayEnd:t,samples:d,maxAltitude:p,minAltitude:m,events:$,polar:D}}function ti(o,e,t,n=48){let i=typeof e=="number"?e:e.getTime();if(!Number.isFinite(i)||!Number.isFinite(t))return null;let s=l=>Ve(l,o),r=xe(i,i+n*60*60*1e3,We,s,t)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Eo(o,e,t,n,i=48){let s=typeof e=="number"?e:e.getTime();if(!Number.isFinite(s)||!(t<n))return null;let r=m=>Ve(m,o),l=s+i*60*60*1e3,a=[...xe(s,l,We,r,t),...xe(s,l,We,r,n)].sort((m,f)=>m.time-f.time),d=m=>m>=t&&m<=n,u=d(r(s)),p=u?s:null;for(let m of a){let f=d(r(m.time+1e3));if(p===null&&f)p=m.time;else if(p!==null&&!f)return{start:new Date(p),end:new Date(m.time),active:u}}return p===null?null:{start:new Date(p),end:null,active:u}}function Mr(o,e,t,n=10){let i=e.getTime(),s=t.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),l=[];for(let u=i;u<s;u+=r)l.push({time:u,altitude:Xt(u,o).apparentAltitude});l.push({time:s,altitude:Xt(s,o).apparentAltitude});let a=-1/0,d=1/0;for(let u of l)u.altitude>a&&(a=u.altitude),u.altitude<d&&(d=u.altitude);return{samples:l,maxAltitude:a,minAltitude:d}}function Co(o,e,t,n,i=10){let s=e.getTime(),r=t.getTime(),l=a=>{if(!a)return null;let d=a.getTime();return d>=s&&d<r?d:null};return{profile:Mr(o,e,t,i),rise:l(n.previousRise)??l(n.nextRise),set:l(n.previousSet)??l(n.nextSet)}}function Do(o,e){let t=o.getTime(),n=t-1800*60*1e3,i=t+1800*60*1e3,r=xe(n,i,We,f=>{let $=Xt(f,e);return $.altitude-_r($.distanceKm)},0),l=r.filter(f=>f.rising),a=r.filter(f=>!f.rising),d=l.find(f=>f.time>t)??null,u=[...l].reverse().find(f=>f.time<=t)??null,p=a.find(f=>f.time>t)??null,m=[...a].reverse().find(f=>f.time<=t)??null;return{previousRise:u?new Date(u.time):null,previousSet:m?new Date(m.time):null,nextRise:d?new Date(d.time):null,nextSet:p?new Date(p.time):null}}function Lo(o){return o>0?"day":o>Ht?"civil":o>Ft?"nautical":o>Gt?"astronomical":"night"}function Sr(o){return(((vn(o).moonAgeDays/kr-.5)%1+1)%1+.5)%1-.5}function ei(o,e){let t=typeof o=="number"?o:o.getTime(),n=typeof e=="number"?e:e.getTime();return n>t?xe(t,n,360*60*1e3,Sr,0).filter(i=>i.rising).map(i=>new Date(i.time)):[]}function No(o,e=32){let t=typeof o=="number"?o:o.getTime(),i=ei(t,t+e*24*60*60*1e3)[0];if(!i)return null;let s=vn(i).illumination;return s<.98?null:{time:i,illumination:s}}function Ho(o,e,t=14){let n=typeof o=="number"?o:o.getTime(),i=360*60*1e3,s=n-t*24*60*60*1e3,r=n+t*24*60*60*1e3,l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,d=s,u=s;for(let p=s;p<=r;p+=i){let m=Xt(p,e).distanceKm;m<l&&(l=m,d=p),m>a&&(a=m,u=p)}return{current:Xt(n,e).distanceKm,min:l,minTime:new Date(d),max:a,maxTime:new Date(u),mean:Xn}}function wn(o,e,t="sun"){return(t==="sun"?yn(o,e):Xt(o,e)).azimuth}function x(o,e,t){return Number.isNaN(o)?e:Math.min(t,Math.max(e,o))}function ni(o,e,t){return o+(e-o)*t}function c(o,e=0){let t=10**e;return Math.round(o*t)/t}function Ro(o){let e=o.trim().replace(/^#/,""),t=e.length===3?e.split("").map(i=>i+i).join(""):e;if(!/^[0-9a-fA-F]{6}$/.test(t))return null;let n=Number.parseInt(t,16);return[n>>16&255,n>>8&255,n&255]}function Tr(o){return`#${o.map(e=>Math.round(x(e,0,255)).toString(16).padStart(2,"0")).join("")}`}function ii(o,e,t){let n=Ro(o),i=Ro(e);if(!n||!i)return e;let s=x(t,0,1);return Tr([ni(n[0],i[0],s),ni(n[1],i[1],s),ni(n[2],i[2],s)])}function oi(o){return typeof o=="number"&&Number.isFinite(o)}function Mt(o){if(typeof o=="number"&&Number.isFinite(o))return o;if(typeof o=="string"&&o.trim()!==""){let e=Number(o.replace(",","."));if(Number.isFinite(e))return e}return null}function Po(o){return o.length===0?"":o.map((e,t)=>`${t===0?"M":"L"}${c(e.x,2)} ${c(e.y,2)}`).join(" ")}function _n(o,e=.5){if(o.length<3)return Po(o);let t=[`M${c(o[0].x,2)} ${c(o[0].y,2)}`];for(let n=0;n<o.length-1;n++){let i=o[n-1]??o[n],s=o[n],r=o[n+1],l=o[n+2]??r,a=s.x+(r.x-i.x)/6*e*2,d=s.y+(r.y-i.y)/6*e*2,u=r.x-(l.x-s.x)/6*e*2,p=r.y-(l.y-s.y)/6*e*2;t.push(`C${c(a,2)} ${c(d,2)} ${c(u,2)} ${c(p,2)} ${c(r.x,2)} ${c(r.y,2)}`)}return t.join(" ")}function xn(o,e,t=!1){if(o.length===0)return"";let n=t?_n(o):Po(o),i=o[0],s=o[o.length-1];return`${n} L${c(s.x,2)} ${c(e,2)} L${c(i.x,2)} ${c(e,2)} Z`}function Ut(o,e,t){let n=t*Math.PI/180;return{x:o.x-e*Math.sin(n),y:o.y-e*Math.cos(n)}}function zo(o,e,t){let n=x(t,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${c(o.x-e,2)} ${c(o.y,2)} a${c(e,2)} ${c(e,2)} 0 1 1 ${c(e*2,2)} 0 a${c(e,2)} ${c(e,2)} 0 1 1 ${c(-e*2,2)} 0 Z`;let i=e*(1-2*n),s=1,r=i>0?0:1,l={x:o.x-e,y:o.y},a={x:o.x+e,y:o.y};return`M${c(l.x,2)} ${c(l.y,2)} A${c(e,2)} ${c(e,2)} 0 0 ${s} ${c(a.x,2)} ${c(a.y,2)} A${c(e,2)} ${c(Math.abs(i),4)} 0 0 ${r} ${c(l.x,2)} ${c(l.y,2)} Z`}function Io(o=new Date){let e=o.getTime();return e+(6e4-e%6e4)+250}var Ar=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Kt(o){let{size:e,illumination:t,brightLimbAngle:n,litColor:i="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:l="",uid:a}=o,d={x:e/2,y:e/2},u=Math.max(1,e/2-.5),p=zo(d,u,t),m=r&&e>=26,f=c(-n,2);return g`
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
      ${p?g`<g transform="rotate(${f} ${c(d.x,2)} ${c(d.y,2)})">
              <path d="${p}" fill="${i}" />
              ${m?g`<g clip-path="url(#${a}-clip)" opacity="0.16">
                      <clipPath id="${a}-clip">
                        <path d="${p}" />
                      </clipPath>
                      ${Ar.map($=>{let w={x:d.x+$.x*u,y:d.y+$.y*u};return g`<circle
                          cx="${c(w.x,2)}" cy="${c(w.y,2)}"
                          r="${c($.r*u,2)}"
                          fill="#5a6488" />`})}
                    </g>`:g``}
            </g>`:g``}
      <circle
        cx="${c(d.x,2)}" cy="${c(d.y,2)}" r="${c(u,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function si(o,e,t,n){let i=Ut(o,e,t),s=t*Math.PI/180,r=-Math.sin(s),l=-Math.cos(s),a=x(e*.12,4,9),d=x(e*.07,2.5,5),u={x:i.x+r*a,y:i.y+l*a},p={x:i.x-l*d,y:i.y+r*d},m={x:i.x+l*d,y:i.y-r*d};return g`
    <polygon
      points="${c(u.x,2)},${c(u.y,2)} ${c(p.x,2)},${c(p.y,2)} ${c(m.x,2)},${c(m.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var Mn="sun-moon-card",di="sun-moon-card",Uo="sun-moon-card-editor";function Me(o){return o==="scene"?460:o==="clean"?400:340}var Er=320,Cr=360;var hi=24,Dr=16,ri=4,Lr=12,Nr=36,Ze=[2,12],Jt=[320,1200],Yt=[260,800];function Se(o){return o?[hi,800]:[120,800]}var I={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",scene:"city",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},Ko=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],Wo=400,Bo=250,jo=1200*1e3,mi={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},pi={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},Vo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],gi=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Wt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon","scene","clean"],scene:["city","mountains","forest","coast","none"],remainingTimeFocus:["sun","next","golden_hour"]},Zo=700,Hr=260,fi=16,$i=4,qo=72,Oo=10,ui=56,Rr=84,Pr=96,ai=74,zr=ui+8,Ir=12,Or=10,wt=4,kn=4,Fo=30,Go=44,Fr=26,Gr=72,bi=96,li=20,ci=18;function Xo(o,e,t){if(t.minimal_mode){let A=(t.minimal_show_times||t.minimal_show_zenith)&&o>=Nr?Lr:0,y=Math.max(Dr,o-2*ri-A);return{padding:ri,minimalTimesHeight:A,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,e-2*ri),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:y,minimal:!0,compact:!1}}let n=t.compact_mode,i=n?Or:Ir,s=Math.max(40,o-2*i),r=0,l=t.show_footer&&!n?li+wt:0,a=Fo+wt+Go+wt+l+(ci+kn)+ai,d=t.show_header&&!n&&s>=a,u=d?Fo:0;s-=u,d&&(s-=wt,r+=wt);let p=n?Fr:Go,m=t.show_events&&s-(p+wt)-l>=Rr,f=m?p:0;s-=f,m&&(s-=wt,r+=wt);let $=t.show_astronomical_details?bi:Gr,w=!n&&(t.show_sun||t.show_moon)&&s-($+wt)-l>=Pr,_=w?$:0;s-=_,w&&(s-=wt,r+=wt);let L=t.show_footer&&!n&&m&&s-(li+wt)>=zr,v=L?li:0;s-=v,L&&(s-=wt,r+=wt);let M=Math.max(ui,s),D=t.show_day_chart&&!n&&m&&M-ci-kn>=ai,S=D?ci:0;D&&(r+=kn);let T=Math.max(ui,M-S-(D?kn:0)),R=t.show_sky_view&&!n&&(t.show_sun||t.show_moon),C=R&&e>=Zo&&T>=ai,N=Math.max(80,e-2*i),z=C?Math.round(Math.min(Hr,(N-Oo)/3)):0,j=Math.max(120,C?N-Oo-z:N);return{padding:i,showHeader:d,showEvents:m,showDetails:w,showFooter:L,showLegend:D,skyViewSide:C,skyViewInline:!C&&R&&w,skyViewWidth:z,chartWidth:j,gaps:r,headerHeight:u,eventsHeight:f,detailsHeight:_,footerHeight:v,legendHeight:S,chartHeight:T,minimal:!1,minimalTimesHeight:0,compact:n}}function Jo(o,e){return e==="clean"?o>=560?400:460:e==="scene"?o>=712?Math.round(Math.min(560,Math.max(440,o*.6))):520:o>=Zo?Cr:Er}function Sn(){return{type:`custom:${Mn}`,card_height:340}}var yi={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",sceneNoon:"Solarer Mittag",sceneNoonShort:"Mittag",editorCardStyleScene:"Szene (Himmel mit Silhouette)",editorCardStyleClean:"Minimalistisch",cleanNow:"Jetzt",editorScene:"Szene",editorSceneCity:"Stadt",editorSceneMountains:"Berge",editorSceneForest:"Wald",editorSceneCoast:"K\xFCste",editorSceneNone:"Keine",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",sceneNoon:"Solar noon",sceneNoonShort:"Noon",editorCardStyleScene:"Scene (sky with silhouette)",editorCardStyleClean:"Minimalist",cleanNow:"Now",editorScene:"Scene",editorSceneCity:"City",editorSceneMountains:"Mountains",editorSceneForest:"Forest",editorSceneCoast:"Coast",editorSceneNone:"None",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function at(o,e,t){let i=(yi[o]??yi.en)[e]??yi.en[e]??String(e);if(t)for(let[s,r]of Object.entries(t))i=i.split(`{${s}}`).join(String(r));return i}function ue(o,e){return((o&&o!=="auto"?o:e)??"").toLowerCase().startsWith("de")?"de":"en"}function ts(o,e,t){let n=o;if(n==="auto"&&e&&(e==="12"||e==="am_pm"?n="12":e==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let i=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return i.hour12??i.hourCycle==="h12"}catch{return!1}}var Yo=new Map;function vi(o,e,t){let n=`${e}|${o}`,i=Yo.get(n);if(i)return i;let s=o;try{let l=new Intl.DateTimeFormat(e,{timeZone:o,timeZoneName:"long"}).formatToParts(t).find(a=>a.type==="timeZoneName");l&&l.value.trim()!==""&&(s=l.value)}catch{}return Yo.set(n,s),s}var Qo=new Map;function Ur(o,e,t){let n=`${o}|${e}|${t}`,i=Qo.get(n);if(!i){try{i=new Intl.DateTimeFormat(o,{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}catch{i=new Intl.DateTimeFormat("en-GB",{hour:t?"numeric":"2-digit",minute:"2-digit",hour12:t,timeZone:e})}Qo.set(n,i)}return i}function st(o,e){return Ur(e.locale,e.timeZone,e.hour12).format(o)}function qe(o,e){try{return new Intl.DateTimeFormat(e.locale,{weekday:"short",day:"numeric",month:"short",timeZone:e.timeZone}).format(o)}catch{return o.toISOString().slice(0,10)}}function wi(o,e=0,t="de-DE"){try{return new Intl.NumberFormat(t,{minimumFractionDigits:e,maximumFractionDigits:e}).format(o)}catch{return o.toFixed(e)}}function ot(o,e=1,t="de-DE"){return`${wi(o,e,t)}\xB0`}function Tn(o,e="de-DE"){return`${wi(Math.round(o),0,e)} km`}function es(o,e){return`${o<0?"\u2212":"+"}${An(Math.abs(o),e)}`}function An(o,e){let t=Math.max(0,Math.round(o));if(t<60)return e("countdownMinutes",{minutes:String(t)});let n=Math.floor(t/60),i=t%60;return n<24?e("countdownHours",{hours:String(n),minutes:String(i)}):e("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function En(o,e){return e(o===0?"dayToday":o===1?"dayTomorrow":"dayFollowing")}function Cn(o,e="de-DE"){return`${wi(o*100,0,e)} %`}function Rt(o,e){let t=(o%360+360)%360,n=gi[0],i=1/0;for(let r of gi){let l=Math.abs((t-r.deg+540)%360-180);l<i&&(i=l,n=r)}let s=`dir${n.key}`;return at(e,s)}function ns(o,e,t,n){return{language:o,locale:e,timeZone:t,hour12:n,t:(i,s)=>at(o,i,s)}}var is="var(--smc-golden-hour, #f2b544)",Kr="var(--smc-blue-hour, #4f6fd6)";function os(o,e,t){let n=[],i=null;for(let s of o){let r=s.altitude>=e&&s.altitude<=t;r&&i===null&&(i=s.time),!r&&i!==null&&(n.push([i,s.time]),i=null)}return i!==null&&o.length&&n.push([i,o[o.length-1].time]),n}function ss(o,e){if(o.length<=e)return o;let t=o.length/e,n=[];for(let s=0;s<e;s++)n.push(o[Math.floor(s*t)]);let i=o[o.length-1];return n[n.length-1]!==i&&n.push(i),n}function Wr(o,e,t,n,i){if(o.length<2)return null;let s=e.sunrise?.getTime(),r=e.sunset?.getTime(),l,a;if(s!==void 0&&r!==void 0&&r>s)l=n(s),a=n(r);else if(t==="polar-day")l=o[0].x,a=o[o.length-1].x;else return null;let d=o.filter(u=>u.x>=l-.5&&u.x<=a+.5);return d.length<2?null:{path:xn(d,i,!0),cx:(l+a)/2,cy:i,r:Math.max(6,(a-l)/2)}}function Br(o,e){let t=e?Math.max(o.maxAltitude,e.maxAltitude):o.maxAltitude,n=e?Math.min(o.minAltitude,e.minAltitude):o.minAltitude,i=Math.min(n,-18),s=Math.max(3,(t-i)*.1),r=x(t+s,-18,90.5);return[x(Math.max(-28,n-2),-90,r-6),r]}function _i(o,e,t=2.2){let n=[0,Ht,Ft,Gt],i=[e.day,e.civil,e.nautical,e.astronomical,e.night];if(o>t/2){let s=x(1-o/12,0,1)*.5;return ii(e.day,e.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+t/2,l=n[s]-t/2;if(o>=r)return i[s];if(o>l){let a=(r-o)/t;return ii(i[s],i[s+1],a*a*(3-2*a))}}return i[i.length-1]}function jr(o,e,t,n=24){let i=[];for(let s=0;s<=n;s++){let r=s/n,l=e+t*(1-r);i.push({offset:r,color:_i(l,o)})}return i}function Vr(o,e,t,n,i,s){let r=o.samples;if(r.length<2)return[];let l=[],a=(u,p)=>{u&&!Number.isNaN(u.getTime())&&l.push({time:u.getTime(),color:p})};a(e.astronomicalDawn,t.astronomical),a(e.nauticalDawn,t.nautical),a(e.civilDawn,t.civil),a(e.sunrise,t.glow),a(e.solarNoon,t.day),a(e.sunset,t.glow),a(e.civilDusk,t.civil),a(e.nauticalDusk,t.nautical),a(e.astronomicalDusk,t.astronomical);let d=[{offset:0,color:_i(r[0].altitude,t)},...l.map(u=>({offset:x((n(u.time)-i)/s,0,1),color:u.color})),{offset:1,color:_i(r[r.length-1].altitude,t)}];return d.sort((u,p)=>u.offset-p.offset),d}function xi(o){let{profile:e,events:t,now:n,width:i,height:s,palette:r,format:l,showSun:a,showMoon:d,moon:u,moonPath:p,showTwilight:m,twilightLevel:f,animations:$,cardStyle:w,minimal:_,sunMarkerSize:L,uid:v,showAstronomicalLayers:M,currentAltitude:D,countdown:S=null,showGoldenHour:T=!1}=o,R=Math.max(_?60:120,i),C=Math.max(_?12:56,s),N=_?2:4,z=_?2:4,j=_?2:6,F=!_&&C>=112,X=F?x(c(C*.13,1),13,20):0,A=N,y=Math.max(10,R-N-z),P=j,Z=Math.max(10,C-j-X),V=P+Z,[ht,G]=Br(e,p?.profile??null),lt=Math.max(1,G-ht),O=e.dayStart.getTime(),nt=e.dayEnd.getTime(),Pt=Math.max(1,nt-O),rt=b=>A+(b-O)/Pt*y,$t=b=>V-(x(b,-95,95)-ht)/lt*Z,J=$t(0),bt=x(Math.round(y/1.6),60,361),mt=ss(e.samples,bt).map(b=>({x:rt(b.time),y:$t(b.altitude)})),B=jr(r,ht,lt),pt=Vr(e,t,r,rt,A,y),_t=`${v}-area`,yt=`${v}-line`,jt=`${v}-clip`,Ye=`${v}-glow`,Qe=`${v}-sky`,ee=`${v}-soft`,Ae=`${v}-soft-fade`,Ee=`${v}-foot`,me=`${v}-foot-fade`,H=`${v}-side`,it=`${v}-side-fade`,gt=w==="horizon",pe=xn(mt,gt?c(J,2):V+1,!0),Ce=_n(mt),Tt=p?ss(p.profile.samples,x(Math.round(y/2),40,240)).map(b=>({x:rt(b.time),y:$t(b.altitude)})):null,ne=Tt&&!_?_n(Tt):null,ie="var(--smc-moon-line, #cbd5e1)",Ds=x(c(C*.013,2),1.1,1.9),Ls=xn(mt,P-1,!0),De=w==="flat"?.6:gt?.3:1,Ns=gt?0:c(.15*De,3),zt=P-1,Hn=V+1,Vt=Math.max(1,Hn-zt),Hs=x(Z*.14,_?1.5:6,18),Rs=x(Z*.08,_?1:4,12),Ps=x(y*.02,_?2:6,14),zi=x(c(Z*.06,1),_?1.5:4,10),zs=c(x(Hs/Vt,0,.45),4),Ii=c(1-x(Rs/Vt,0,.45),4),ge=A-1,tn=A+y+1,Oi=c(x(Ps/Math.max(1,tn-ge),0,.4),4),Is=Math.max(16,y*.16),Os=x(Z*.45,9,46),en=[];Z>=34&&(t.sunrise&&en.push({id:`${v}-glow-rise`,time:t.sunrise,color:r.glow}),t.sunset&&en.push({id:`${v}-glow-set`,time:t.sunset,color:r.glow}));let fe=_?null:Wr(mt,t,e.polar,rt,J),Fi=`${v}-dome`,ct=l.t,nn=[],Le=b=>{b.time&&!Number.isNaN(b.time.getTime())&&nn.push({secondary:!1,...b})};if(t.sunrise&&Le({key:"sunrise",time:t.sunrise,label:ct("sunrise"),shortLabel:ct("sunriseShort"),kind:"sunrise",altitude:0}),t.sunset&&Le({key:"sunset",time:t.sunset,label:ct("sunset"),shortLabel:ct("sunsetShort"),kind:"sunset",altitude:0}),m&&(t.civilDawn&&Le({key:"civilDawn",time:t.civilDawn,label:ct("civilDawn"),shortLabel:ct("civilDawnShort"),kind:"dawn",altitude:Ht}),t.civilDusk&&Le({key:"civilDusk",time:t.civilDusk,label:ct("civilDusk"),shortLabel:ct("civilDuskShort"),kind:"dusk",altitude:Ht}),f==="all"||M)){let b=[["nauticalDawn","dawn","nauticalDawn",Ft],["nauticalDusk","dusk","nauticalDusk",Ft],["astronomicalDawn","dawn","astronomicalDawn",Gt],["astronomicalDusk","dusk","astronomicalDusk",Gt]];for(let[U,W,Q,Y]of b){let dt=t[U];dt&&Le({key:U,time:dt,label:ct(Q),shortLabel:ct(Q),kind:W,altitude:Y,secondary:!0})}}nn.sort((b,U)=>b.time.getTime()-U.time.getTime());let $e=x(c(C*.062,1),7.5,10.5),on=x(c($e+5,1),11,X||15),Gi=b=>b.secondary?2:b.kind==="sunrise"||b.kind==="sunset"?0:1,Fs=y<240?3:y<340?4:6,Ui=_?[]:[...nn].sort((b,U)=>Gi(b)-Gi(U)||b.time.getTime()-U.time.getTime()).slice(0,Math.max(2,Fs)),Ki=y<260,Gs=!Ki&&(Ui.length>3||y<340),Wi=4,Us=Math.max(8,$e*1.2),oe=[];for(let b of Ui){let U=Ki?st(b.time,l):Gs?b.shortLabel:b.label,W=U.length*$e*.56+8,Q=x(rt(b.time.getTime()),A+W/2,A+y-W/2),Y=Dt=>oe.some(se=>Math.abs(se.x-Dt)<(se.width+W)/2+Wi),dt=Y(Q)?null:Q;if(dt===null)for(let Dt of oe){let se=(Dt.width+W)/2+Wi;for(let re of[Dt.x+se,Dt.x-se])if(Math.abs(re-Q)<=Us&&re-W/2>=A-.5&&re+W/2<=A+y+.5&&!Y(re)){dt=re;break}if(dt!==null)break}dt!==null&&oe.push({x:dt,width:W,text:U,secondary:b.secondary})}oe.sort((b,U)=>b.x-U.x);let vt=x(rt(n.getTime()),A,A+y),Ks=r.day,Zt=x(c(C*.16,1),Math.min(2.8,L),L),Bi=x(c(Zt*.22,2),.8,1.4),It=x(c(Zt*1.1,1),3.5,7),ji=(b,U)=>Z<=U*2?P+Z/2:x($t(b),P+U,V-U),Vi=ji(D,Zt),Zi=T&&!_?[...os(e.samples,Be,bn).map(b=>({range:b,kind:"golden",color:is,key:"goldenHour"})),...os(e.samples,So,Be).map(b=>({range:b,kind:"blue",color:Kr,key:"blueHour"}))].map(({range:b,kind:U,color:W,key:Q})=>{let Y=x(rt(b[0]),A,A+y),dt=x(rt(b[1]),A,A+y);return{x:Y,width:dt-Y,kind:U,color:W,title:`${ct(Q)} ${st(new Date(b[0]),l)}\u2013${st(new Date(b[1]),l)}`}}).filter(b=>b.width>=.5):[],xt=(()=>{if(_||!S)return null;let b=S.time.getTime();if(!(b>n.getTime()))return null;let W=ht<0&&G>0?$t(0):V-1,Q=rt(b),Y=x(Q,A,A+y);if(Y-vt<2)return null;let dt=S.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":S.body==="twilight"?r.civil:S.body==="golden"?is:r.day;return{y:W,endX:Y,endsInside:Q<=A+y,color:dt}})(),Rn=x(c(C*.016,1),2,3),kt=(()=>{if(_||!S?.label)return null;let b=$e,U=b+5,W=S.label.length*b*.56+10,Q=Math.max(Zt,3)+3,Y=vt+Q,dt=Y+W<=A+y?Y:Math.max(A,vt-Q-W),Dt=F||oe.length===0?P+1:P+on+3;return{x:dt,y:Dt,width:W,height:U,fontSize:b}})(),At=d&&u&&!_?{altitude:u.altitude,y:ji(u.altitude,It),clamped:u.altitude<ht||u.altitude>G}:null,Ws=At?Math.abs(At.y-Vi):Number.POSITIVE_INFINITY,Pn=Zt+It+2,Ne=At?Ws>=Zt+It+1?vt:vt+Pn+It<=A+y?vt+Pn:Math.max(A+It,vt-Pn):null,Bs=$?"smc-pulse":"",js=$?`url(#${Ye})`:"",zn=[{altitude:0,label:ct("horizon"),key:"horizon"}];M||f==="all"?zn.push({altitude:Ht,label:`${ct("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Ft,label:`${ct("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Gt,label:`${ct("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&zn.push({altitude:Ht,label:`${ct("refCivil")} (\u22126\xB0)`,key:"civil"});let Vs=!_&&Z>=86&&y>=250,Zs=zn.filter(b=>(!_||b.key==="horizon")&&b.altitude>ht+.5&&b.altitude<G-.5),qs=x(c(C*.055,1),7.5,9.5),He=t.solarNoon,qi=!_&&!!He&&e.maxAltitude>0&&Z>=104&&y>=220&&M,Xi=qi?`${ct("zenith")} ${st(He,l)} \xB7 ${ot(e.maxAltitude,1,l.locale)}`:"",sn=x(c(C*.055,1),7.5,9.5),rn=Xi.length*sn*.56+10,Ji=He?x(rt(He.getTime()),A+rn/2,A+y-rn/2):0,Yi=He?$t(e.maxAltitude):0,an=sn+5,Qi=x(Yi-an-4,P,Math.max(P,Yi+10)),to=_?1:y<220?4:y<420?6:8,eo=[];for(let b=1;b<to;b++)eo.push(A+y*b/to);return g`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(R,1)} ${c(C,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${ct("title")}"
    >
      <defs>
        <linearGradient id="${_t}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(P,1)}" x2="0" y2="${c(V,1)}">
          ${B.map(b=>g`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
        </linearGradient>
        <linearGradient id="${yt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(P,1)}" x2="0" y2="${c(V,1)}">
          ${B.map(b=>g`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${pt.length>=2?g`<linearGradient id="${Qe}" gradientUnits="userSpaceOnUse"
                x1="${c(A,1)}" y1="0" x2="${c(A+y,1)}" y2="0">
                ${pt.map(b=>g`<stop offset="${c(b.offset*100,3)}%" stop-color="${b.color}" />`)}
              </linearGradient>`:g``}
        ${en.map(b=>g`<radialGradient id="${b.id}">
              <stop offset="0%" stop-color="${b.color}" stop-opacity="${c(.5*De,3)}" />
              <stop offset="45%" stop-color="${b.color}" stop-opacity="${c(.2*De,3)}" />
              <stop offset="100%" stop-color="${b.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${fe?g`<radialGradient id="${Fi}" gradientUnits="userSpaceOnUse"
                cx="${c(fe.cx,1)}" cy="${c(fe.cy,1)}" r="${c(fe.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${c(.3*De,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${c(.18*De,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:g``}
        <linearGradient id="${Ae}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(zt,1)}" x2="0" y2="${c(Hn,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${zs}" stop-color="#ffffff" />
          <stop offset="${Ii}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ee}" maskUnits="userSpaceOnUse"
          x="${c(A-2,1)}" y="${c(zt,1)}"
          width="${c(y+4,1)}" height="${c(Vt,1)}">
          <rect
            x="${c(A-2,1)}" y="${c(zt,1)}"
            width="${c(y+4,1)}" height="${c(Vt,1)}"
            fill="url(#${Ae})" />
        </mask>
        <linearGradient id="${me}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(zt,1)}" x2="0" y2="${c(Hn,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${Ii}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Ee}" maskUnits="userSpaceOnUse"
          x="${c(A-2,1)}" y="${c(zt,1)}"
          width="${c(y+4,1)}" height="${c(Vt,1)}">
          <rect
            x="${c(A-2,1)}" y="${c(zt,1)}"
            width="${c(y+4,1)}" height="${c(Vt,1)}"
            fill="url(#${me})" />
        </mask>
        <linearGradient id="${it}" gradientUnits="userSpaceOnUse"
          x1="${c(ge,1)}" y1="0" x2="${c(tn,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Oi}" stop-color="#ffffff" />
          <stop offset="${c(1-Oi,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${H}" maskUnits="userSpaceOnUse"
          x="${c(ge,1)}" y="${c(zt,1)}"
          width="${c(tn-ge,1)}" height="${c(Vt,1)}">
          <rect
            x="${c(ge,1)}" y="${c(zt,1)}"
            width="${c(tn-ge,1)}" height="${c(Vt,1)}"
            fill="url(#${it})" />
        </mask>
        <clipPath id="${jt}">
          <rect x="${c(A-1,1)}" y="${c(P-2,1)}"
            width="${c(y+2,1)}" height="${c(Z+4,1)}"
            rx="${zi}" ry="${zi}" />
        </clipPath>
        ${$?g`<filter id="${Ye}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${c(Zt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:g``}
      </defs>

      <g clip-path="url(#${jt})">
        ${eo.map(b=>g`<line x1="${c(b,1)}" y1="${c(P,1)}" x2="${c(b,1)}" y2="${c(V,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${H})">
        <path d="${pe}" fill="url(#${_t})" opacity="0.9" mask="url(#${Ee})" />
        <g mask="url(#${ee})">
          ${pt.length>=2&&!gt?g`<path d="${Ls}" fill="url(#${Qe})" opacity="${Ns}" />`:g``}
          ${en.map(b=>{let U=x(rt(b.time.getTime()),A,A+y),W=x(J,P,V);return g`<ellipse
                cx="${c(U,1)}" cy="${c(W,1)}"
                rx="${c(Is,1)}" ry="${c(Os,1)}"
                fill="url(#${b.id})" />`})}
          ${fe&&!gt?g`<path d="${fe.path}" fill="url(#${Fi})" opacity="0.95" />`:g``}
        </g>
        </g>
        ${Zi.length?g`<g class="hour-bands">
                ${Zi.map(b=>g`<g class=${b.kind}>
                    <title>${b.title}</title>
                    <rect
                      x="${c(b.x,1)}" y="${c(P,1)}"
                      width="${c(b.width,1)}" height="${c(Z,1)}"
                      fill="${b.color}" opacity="${b.kind==="golden"?.16:.2}" />
                    <rect
                      x="${c(b.x,1)}" y="${c(V-3,1)}"
                      width="${c(b.width,1)}" height="3"
                      fill="${b.color}" opacity="0.85" />
                  </g>`)}
              </g>`:g``}
        ${ne?g`<path
                class="moon-curve"
                data-body="moon"
                d="${ne}"
                fill="none"
                stroke="${ie}"
                stroke-width="${Ds}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${gt?.5:.9}"
              >
                <title>${l.t("moonCurve")}</title>
              </path>`:g``}
        ${p&&ne?g`<g class="moon-events">
                ${[[p.rise,"moonrise"],[p.set,"moonset"]].filter(b=>b[0]!==null).map(([b,U])=>{let W=x(rt(b),A,A+y),Q=x($t(0),P,V),Y=x(c(C*.05,1),4,8);return g`<g>
                      <title>${l.t(U)} ${st(new Date(b),l)}</title>
                      <line
                        x1="${c(W,1)}"
                        y1="${c(Q-Y,1)}"
                        x2="${c(W,1)}"
                        y2="${c(Q+Y,1)}"
                        stroke="${ie}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${c(W,1)}"
                        cy="${c(Q,1)}"
                        r="${x(c(C*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${ie}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:g``}
        <path
          d="${Ce}"
          fill="none"
          stroke="url(#${yt})"
          stroke-width="${x(c(C*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${Zs.map(b=>{let U=$t(b.altitude),W=b.key==="horizon";return g`<g>
            <line
              x1="${c(A,1)}" y1="${c(U,1)}"
              x2="${c(A+y,1)}" y2="${c(U,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${W&&gt?1.5:W?1:.6}"
              stroke-dasharray="${W&&gt?"999 0":W?"3 3":"2 4"}"
              opacity="${W&&gt?.9:W?.6:gt?.3:.45}"
            />
            ${Vs?g`<text
                    x="${c(A+3,1)}"
                    y="${c(U-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${qs}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${b.label}</text>`:g``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${nn.map(b=>{let U=x(rt(b.time.getTime()),A,A+y),W=x($t(b.altitude),P,V),Q=!b.secondary,Y=Q?x(c(C*.022,1),1.8,3):1.4,dt="var(--smc-marker-strong, rgba(255,255,255,0.9))",Dt="var(--smc-marker-soft, rgba(255,255,255,0.55))",se=b.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":b.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":b.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",re=Q?se:Dt,Xs=Q?dt:Dt,Js=b.kind==="sunrise"||b.kind==="sunset"?g`
                <circle cx="${c(U,1)}" cy="${c(W,1)}" r="${Y+1}"
                  fill="${b.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${c(U-Y*2.6,1)}"
                  y1="${c(b.kind==="sunrise"?W+Y+2:W-Y-2,1)}"
                  x2="${c(U+Y*2.6,1)}"
                  y2="${c(b.kind==="sunrise"?W+Y+2:W-Y-2,1)}"
                  stroke="${dt}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:g`<circle cx="${c(U,1)}" cy="${c(W,1)}" r="${Y}"
                  fill="${Xs}" opacity="0.85" />`;return g`<g>
            <line
              x1="${c(U,1)}" y1="${c(P,1)}"
              x2="${c(U,1)}" y2="${c(V,1)}"
              stroke="${re}" stroke-width="${Q?1:.7}"
              stroke-dasharray="3 3" opacity="${Q?.5:.25}" />
            ${Js}
          </g>`})}
      </g>

      ${xt?g`<g class="countdown-track">
              <title>${S.title}</title>
              <line
                x1="${c(vt,1)}" y1="${c(xt.y,1)}"
                x2="${c(xt.endX,1)}" y2="${c(xt.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${c(Rn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${c(vt,1)}" y1="${c(xt.y,1)}"
                x2="${c(xt.endX,1)}" y2="${c(xt.y,1)}"
                stroke="${xt.color}"
                stroke-width="${Rn}"
                stroke-linecap="round" />
              ${xt.endsInside?g`<circle
                      cx="${c(xt.endX,1)}"
                      cy="${c(xt.y,1)}"
                      r="${c(Rn+.8,1)}"
                      fill="${xt.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:g``}
            </g>`:g``}

      <g class="now-marker">
        <line
          x1="${c(vt,1)}" y1="${c(P,1)}"
          x2="${c(vt,1)}" y2="${c(V,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${x(c(C*.012,2),1,1.8)}"
          opacity="0.85" />
        ${a?g`<g class="now-sun ${Bs}" filter="${js}">
                <title>${l.t("chartSunNow",{altitude:ot(D,1,l.locale)})}</title>
                <circle
                  cx="${c(vt,1)}"
                  cy="${c(Vi,1)}"
                  r="${Zt}"
                  fill="${Ks}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Bi}"
                />
              </g>`:g``}
        ${At&&Ne!==null&&u?g`<g class="now-moon">
                <title>${l.t("chartMoonNow",{altitude:ot(At.altitude,1,l.locale)})}${At.clamped?` ${l.t("chartOutside")}`:""}</title>
                ${Ne===vt?g``:g`<line
                        x1="${c(vt,1)}"
                        y1="${c(At.y,1)}"
                        x2="${c(Ne,1)}"
                        y2="${c(At.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${c(Ne,1)}"
                  cy="${c(At.y,1)}"
                  r="${c(It+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${Bi}" />
                <g
                  transform="translate(${c(Ne-It,1)} ${c(At.y-It,1)})"
                  opacity="${At.clamped?.6:1}"
                >
                  ${Kt({size:c(It*2,1),illumination:u.illumination,brightLimbAngle:u.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${v}-moon-now`})}
                </g>
              </g>`:g``}
      </g>

      ${qi?g`<g class="zenith-chip">
              <rect
                x="${c(Ji-rn/2,1)}"
                y="${c(Qi,1)}"
                width="${c(rn,1)}"
                height="${c(an,1)}"
                rx="${c(an/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${c(Ji,1)}"
                y="${c(Qi+an/2+sn*.36,1)}"
                text-anchor="middle"
                font-size="${sn}"
                fill="var(--smc-label-color, #ffffff)"
              >${Xi}</text>
            </g>`:g``}

      ${kt?g`<g class="countdown-label">
              <title>${S.title}</title>
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
              >${S.label}</text>
            </g>`:g``}

      ${F?g`<line
              x1="${c(A,1)}" y1="${c(V+.5,1)}"
              x2="${c(A+y,1)}" y2="${c(V+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:g``}

      ${oe.length?g`<g class="event-labels" font-size="${$e}">
              ${oe.map(b=>{let U=F?V+2:P;return g`<g>
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
                    y="${c(U+on/2+$e*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${b.secondary?.75:1}"
                  >${b.text}</text>
                </g>`})}
            </g>`:g``}
    </svg>
  `}var Zr=50,qr=44,rs=[[0,"#8f9fd6","#f4a97c"],[12,"#9aaedf","#f7bf8e"],[30,"#a8c4ea","#f6dcb4"],[52,"#b4cdee","#eef0f4"],[66,"#8d9cd8","#d9c3dc"],[78,"#3c4590","#6b6fb4"],[90,"#232a68","#3b428a"],[100,"#1b2159","#323a80"]],Xr=[[.13,.55,90,"#f6c2c0",.55],[.3,.42,60,"#fbd9cf",.45],[.58,.3,85,"#ffffff",.55],[.47,.14,50,"#ffffff",.35]];function Qt(o){let e=o;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var h=o=>String(c(o,1));function as(o,e,t,n,i,s,r,l){let a=-6,d=`M${h(a)},${h(n)}`;for(;a<e+6;){let u=10+o()*28,p=i+o()*(s-i),m=t-p,f=o();if(d+=`L${h(a)},${h(m)}`,f<.12?d+=`L${h(a+u/2)},${h(m-u*.45)}L${h(a+u)},${h(m)}`:f<.2?d+=`A${h(u/2)},${h(u*.42)} 0 0 1 ${h(a+u)},${h(m)}`:f<.28?d+=`L${h(a+u*.42)},${h(m)}L${h(a+u/2)},${h(m-p*.55)}L${h(a+u*.58)},${h(m)}L${h(a+u)},${h(m)}`:f<.38?d+=`L${h(a+u*.6)},${h(m)}L${h(a+u*.6)},${h(m-12)}L${h(a+u*.64)},${h(m-12)}L${h(a+u*.64)},${h(m)}L${h(a+u)},${h(m)}`:f<.48?d+=`L${h(a+u*.25)},${h(m)}L${h(a+u*.25)},${h(m-7)}L${h(a+u*.75)},${h(m-7)}L${h(a+u*.75)},${h(m)}L${h(a+u)},${h(m)}`:d+=`L${h(a+u)},${h(m)}`,r>0&&a>e*.7)for(let $=m+5;$<t-4;$+=6)for(let w=a+3;w<a+u-3;w+=5)o()<r&&l.push({x:w,y:$,w:1.8,h:2.4,opacity:.55+o()*.4});if(a+=u,o()<.18){let $=4+o()*10,w=t-i*.4;d+=`L${h(a)},${h(w)}L${h(a+$)},${h(w)}`,a+=$}}return`${d}L${h(a)},${h(n)}Z`}function ls(o,e,t,n,i,s){let r=Array.from({length:s},(d,u)=>({x:(u+.2+o()*.6)/s*e,h:i*(.45+o()*.55),w:e/s*(.9+o()*.9)})),l=Math.max(40,Math.round(e/6)),a=`M-4,${h(n)}`;for(let d=0;d<=l;d++){let u=-4+(e+8)*d/l,p=i*.12;for(let m of r)p=Math.max(p,m.h*(1-Math.abs(u-m.x)/m.w));p+=(o()-.5)*i*.06,a+=`L${h(u)},${h(t-x(p,2,i))}`}return`${a}L${h(e+4)},${h(n)}Z`}function cs(o,e,t,n,i,s){let r=d=>Math.sin(d/e*Math.PI*1.6+.6)*i*.35,l=`M-4,${h(n)}L-4,${h(t-r(-4))}`,a=-4;for(;a<e+4;){let d=i+o()*(s-i),u=t-r(a);if(o()<.72){let p=d*(.42+o()*.12);l+=`L${h(a)},${h(u)}L${h(a+p*.5)},${h(u-d)}L${h(a+p)},${h(u)}`,a+=p*(.55+o()*.25)}else{let p=d*.32;l+=`L${h(a)},${h(u)}L${h(a)},${h(u-d*.35)}A${h(p)},${h(p)} 0 1 1 ${h(a+p*1.6)},${h(u-d*.35)}L${h(a+p*1.6)},${h(u)}`,a+=p*1.6+o()*4}}return`${l}L${h(e+4)},${h(n)}Z`}function Jr(o,e,t,n,i){let s=[];switch(o){case"city":{let r=as(Qt(11),e,t,n,18*i,44*i,0,s),l=e*.8,a=84*i,d=`M${h(l-1.6)},${h(t)}L${h(l-1.6)},${h(t-a)}L${h(l-.6)},${h(t-a)}L${h(l-.6)},${h(t-a-16)}L${h(l+.6)},${h(t-a-16)}L${h(l+.6)},${h(t-a)}L${h(l+1.6)},${h(t-a)}L${h(l+1.6)},${h(t)}ZM${h(l+5.5)},${h(t-a*.72)}A5.5,5.5 0 1 0 ${h(l-5.5)},${h(t-a*.72)}A5.5,5.5 0 1 0 ${h(l+5.5)},${h(t-a*.72)}Z`,u=as(Qt(23),e,t,n,8*i,28*i,.07,s);return{back:`${r}${d}`,front:u,lights:s,waterTop:null}}case"mountains":return{back:ls(Qt(5),e,t,n,78*i,6),front:ls(Qt(9),e,t+2,n,40*i,9),lights:s,waterTop:null};case"forest":return{back:cs(Qt(17),e,t-6*i,n,22*i,46*i),front:cs(Qt(29),e,t+4*i,n,12*i,28*i),lights:s,waterTop:null};case"coast":{let r=t-10*i,l=Qt(31),a=`M-4,${h(r)}`;for(let $=0;$<=24;$++){let w=-4+e*.55*$/24,_=Math.sin($/24*Math.PI)*30*i+l()*4*i;a+=`L${h(w)},${h(r-_)}`}a+=`L${h(e*.55)},${h(r)}Z`;let d=e*.72,u=e*.84,p=r-14*i,m=46*i,f=`M${h(d)},${h(r)}Q${h(d+e*.06)},${h(p)} ${h(u-10)},${h(p)}L${h(e+4)},${h(p+2)}L${h(e+4)},${h(r)}ZM${h(u-4.5)},${h(p)}L${h(u-2.8)},${h(p-m)}L${h(u+2.8)},${h(p-m)}L${h(u+4.5)},${h(p)}ZM${h(u-3.6)},${h(p-m)}L${h(u)},${h(p-m-8)}L${h(u+3.6)},${h(p-m)}Z`;return s.push({x:u-1.6,y:p-m-4.5,w:3.2,h:3,opacity:.95}),{back:a,front:f,lights:s,waterTop:r}}default:return null}}var Xe=new Map;function Yr(o,e,t,n,i){let s=[o,c(e,0),c(t,0),c(n,0),i].join("|");return Xe.has(s)||(Xe.size>24&&Xe.clear(),Xe.set(s,Jr(o,e,t,n,i))),Xe.get(s)??null}function us(o){let{profile:e,events:t,now:n,format:i,scene:s,showSun:r,showMoon:l,moonPath:a,moon:d,currentAltitude:u,animations:p,uid:m}=o,f=i.t,$=Math.max(160,o.width),w=Math.max(140,o.height),_=$<480,L=_?qr:Zr,v=14,M=w-L-4,D=e.samples,S=e.dayStart.getTime(),T=e.dayEnd.getTime(),R=Math.max(1,T-S),C=H=>(H-S)/R*$,N=Math.max(12,e.maxAltitude+8),z=-16,j=H=>v+(N-H)/(N-z)*(M-v),F=j(0),X=x(C(n.getTime()),0,$),A=H=>H.map((it,gt)=>`${gt?"L":"M"}${h(C(it.time))},${h(j(it.altitude))}`).join(""),y={skyTop:`${m}-sky-top`,skyHor:`${m}-sky-hor`,horFade:`${m}-hor-fade`,horMask:`${m}-hor-mask`,soft:`${m}-soft`,softer:`${m}-softer`,sunGlow:`${m}-sun-glow`,sunCore:`${m}-sun-core`,moonGlow:`${m}-moon-glow`,dayFill:`${m}-day-fill`,dayFade:`${m}-day-fade`,nightFill:`${m}-night-fill`,curve:`${m}-curve`,band:`${m}-band`,horizonLine:`${m}-horizon-line`,back:`${m}-scene-back`,front:`${m}-scene-front`,water:`${m}-water`,above:`${m}-above`,below:`${m}-below`,past:`${m}-past`,future:`${m}-future`},P=Qt(7),Z=[];for(let H=0;H<(_?45:90);H++){let it=P()*$,gt=v+P()*(F-v-6),pe=x((it/$-.68)/.12,0,1)*(.4+P()*.6),Ce=.5+P()*.9;pe>.04&&Z.push(g`<circle cx="${h(it)}" cy="${h(gt)}" r="${c(Ce,2)}" fill="#fff"
        opacity="${c(pe,2)}" />`)}let V=Math.min(1,$/740),ht=Xr.map(([H,it,gt,pe,Ce])=>{let Tt=gt*V,ne=H*$,ie=v+it*(F-v);return g`<g opacity="${Ce}" fill="${pe}" filter="url(#${y.soft})">
      <ellipse cx="${h(ne)}" cy="${h(ie)}" rx="${h(Tt)}" ry="${h(Tt*.22)}" />
      <ellipse cx="${h(ne-Tt*.35)}" cy="${h(ie+3)}" rx="${h(Tt*.5)}" ry="${h(Tt*.18)}" />
      <ellipse cx="${h(ne+Tt*.3)}" cy="${h(ie-4)}" rx="${h(Tt*.45)}" ry="${h(Tt*.2)}" />
    </g>`}),G=w-L+8,O=Yr(s,$,G,w,_?.8:1),nt=D.length?A(D):"",Pt=D[0],rt=D[D.length-1],$t=D.length?`${nt}L${h(C(rt.time))},${h(F)}L${h(C(Pt.time))},${h(F)}Z`:"",J=D.length?`${nt}L${h(C(rt.time))},${h(w)}L${h(C(Pt.time))},${h(w)}Z`:"",bt=l&&a?.profile.samples.length?A(a.profile.samples):"",mt=[{time:t.sunrise,label:f("sunrise"),short:f("sunriseShort"),dashed:!0},{time:t.solarNoon,label:f("sceneNoon"),short:f("sceneNoonShort"),dashed:!1},{time:t.sunset,label:f("sunset"),short:f("sunsetShort"),dashed:!0}].filter(H=>H.time instanceof Date),B=_?34:48,pt=[20,10,-10].filter(H=>H<N-2&&H>z+2),_t=_?78:92,yt=x(j(u),v+12,w-L-6),jt=u>-2,Ye=_?30:40,Qe=_?11:15,ee=_?10:14,Ae=$-(_?44:62),Ee=v+(_?26:34),me=x(F/w,0,1);return g`
    <svg
      class="scene-chart"
      width="${h($)}"
      height="${h(w)}"
      viewBox="0 0 ${h($)} ${h(w)}"
      role="img"
      aria-label="${f("title")}"
    >
      <defs>
        <linearGradient id="${y.skyTop}" x1="0" x2="1" y1="0" y2="0">
          ${rs.map(([H,it])=>g`<stop offset="${H}%" stop-color="${it}" />`)}
        </linearGradient>
        <linearGradient id="${y.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${rs.map(([H,,it])=>g`<stop offset="${H}%" stop-color="${it}" />`)}
        </linearGradient>
        <linearGradient id="${y.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${c(me,3)}" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask id="${y.horMask}">
          <rect width="${h($)}" height="${h(w)}" fill="url(#${y.horFade})" />
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
          x1="0" x2="0" y1="${h(j(e.maxAltitude))}" y2="${h(F)}">
          <stop offset="0" stop-color="#ffcf5c" stop-opacity="0.95" />
          <stop offset="0.7" stop-color="#ffd27a" stop-opacity="0.8" />
          <stop offset="1" stop-color="#ffe7b8" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient id="${y.dayFade}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(F-4)}" y2="${h(F+36)}">
          <stop offset="0" stop-color="#ffe2a6" stop-opacity="0.75" />
          <stop offset="1" stop-color="#ffe2a6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${y.nightFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(F)}" y2="${h(w)}">
          <stop offset="0" stop-color="#a9b4ee" stop-opacity="0" />
          <stop offset="0.22" stop-color="#7f8fe0" stop-opacity="0.45" />
          <stop offset="0.55" stop-color="#4a5ab8" stop-opacity="0.8" />
          <stop offset="1" stop-color="#25307a" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="${y.curve}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(v)}" y2="${h(w)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${c(me,3)}" stop-color="#f59e0b" />
          <stop offset="${c(Math.min(1,me+.001),3)}" stop-color="#b9c3ff" />
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
        <clipPath id="${y.above}"><rect width="${h($)}" height="${h(F)}" /></clipPath>
        <clipPath id="${y.below}">
          <rect y="${h(F)}" width="${h($)}" height="${h(w-F)}" />
        </clipPath>
        <clipPath id="${y.past}"><rect width="${h(X)}" height="${h(w)}" /></clipPath>
        <clipPath id="${y.future}">
          <rect x="${h(X)}" width="${h($-X)}" height="${h(w)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${h($)}" height="${h(w)}" fill="url(#${y.skyTop})" />
        <rect width="${h($)}" height="${h(w)}" fill="url(#${y.skyHor})"
          mask="url(#${y.horMask})" />
        ${Z}
        ${ht}
      </g>

      ${r&&$t?g`<g class="day-area">
              <path d="${$t}" fill="url(#${y.dayFill})" clip-path="url(#${y.above})"
                opacity="0.92" />
              <path d="${J}" fill="url(#${y.nightFill})" clip-path="url(#${y.below})" />
              <g clip-path="url(#${y.below})">
                <path d="${J}" fill="url(#${y.dayFade})" filter="url(#${y.softer})" />
              </g>
            </g>`:g``}

      ${O?g`<g class="silhouette" data-scene="${s}">
              ${O.waterTop!==null?g`<rect class="water" x="0" y="${h(O.waterTop)}" width="${h($)}"
                      height="${h(w-O.waterTop)}" fill="url(#${y.water})" opacity="0.55" />
                    ${[0,1,2,3].map(H=>g`<line x1="${h($*(.08+H*.21))}"
                        x2="${h($*(.16+H*.21))}"
                        y1="${h(O.waterTop+5+H*3)}" y2="${h(O.waterTop+5+H*3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`)}`:g``}
              <path d="${O.back}" fill="url(#${y.back})" opacity="0.35" />
              <path d="${O.front}" fill="url(#${y.front})" opacity="0.6" />
              ${O.lights.map(H=>g`<rect x="${h(H.x)}" y="${h(H.y)}" width="${H.w}"
                  height="${H.h}" fill="#ffd98a" opacity="${c(H.opacity,2)}" />`)}
            </g>`:g``}

      <line class="horizon" x1="${_t}" x2="${h($)}" y1="${h(F)}" y2="${h(F)}"
        stroke="url(#${y.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${mt.map(H=>{let it=h(C(H.time.getTime()));return H.dashed?g`<line x1="${it}" x2="${it}" y1="0" y2="${h(w-L+6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`:g`<line x1="${it}" x2="${it}" y1="0" y2="${h(w-L+6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`})}
      </g>

      ${bt?g`<path class="moon-curve" d="${bt}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`:g``}

      ${r&&nt?g`<g class="sun-path">
              <g clip-path="url(#${y.past})">
                <path d="${nt}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${y.future})">
                <path d="${nt}" fill="none" stroke="url(#${y.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[t.sunrise,t.sunset].filter(H=>H instanceof Date).map(H=>g`<circle cx="${h(C(H.getTime()))}" cy="${h(F)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${H.getTime()<n.getTime()?2:3.2}" />`)}
            </g>`:g``}

      ${l&&d?g`<g class="night-moon">
              <circle cx="${h(Ae)}" cy="${h(Ee)}" r="${ee*2.1}"
                fill="url(#${y.moonGlow})" />
              <g transform="translate(${h(Ae-ee)} ${h(Ee-ee)})">
                ${Kt({size:ee*2,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#2b3270",texture:!1,uid:`${m}-night-moon`})}
              </g>
            </g>`:g``}

      ${r?g`<g class="now-sun ${p?"smc-pulse":""}">
              <title>${f("chartSunNow",{altitude:ot(u,1,i.locale)})}</title>
              <circle cx="${h(X)}" cy="${h(yt)}" r="${Ye}"
                fill="url(#${y.sunGlow})" opacity="${jt?1:.35}" />
              <circle cx="${h(X)}" cy="${h(yt)}" r="${Qe}" fill="url(#${y.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${jt?1:.55}" />
            </g>`:g``}

      <g class="axis">
        <text x="10" y="${h(v+4)}" class="scene-axis">${f("elevation")}</text>
        ${pt.map(H=>g`<text x="10" y="${h(j(H)+4)}" class="scene-axis">${H>0?H:`\u2212${-H}`}°</text>
            <line x1="${_?34:40}" x2="${_?40:48}" y1="${h(j(H))}"
              y2="${h(j(H))}" stroke="#fff" opacity="0.8" />`)}
        <text x="10" y="${h(F-5)}" class="scene-axis strong">${f("horizon")}</text>
      </g>

      <rect class="band" x="0" y="${h(w-L-18)}" width="${h($)}"
        height="${h(L+18)}" fill="url(#${y.band})" />
      <g class="event-labels">
        ${mt.map(H=>{let it=h(x(C(H.time.getTime()),B,$-B));return g`<text x="${it}" y="${h(w-L+22)}" text-anchor="middle"
              class="scene-time">${st(H.time,i)}</text>
            <text x="${it}" y="${h(w-L+38)}" text-anchor="middle"
              class="scene-label">${_?H.short:H.label}</text>`})}
      </g>
    </svg>
  `}var tt=o=>String(c(o,1));function ds(o){let{profile:e,events:t,now:n,format:i,showSun:s,showMoon:r,moonPath:l,sunAltitude:a,moonAltitude:d}=o,u=i.t,p=Math.max(160,o.width),m=Math.max(100,o.height),$=p<480?64:92,w=6,_=34,v=m-30-8,M=Math.max(40,p-$-w),D=e.dayStart.getTime(),S=e.dayEnd.getTime(),T=Math.max(1,S-D),R=G=>$+(G-D)/T*M,C=r?l?.profile.samples??[]:[],N=C.reduce((G,lt)=>Math.max(G,lt.altitude),-90),z=Math.max(8,s?e.maxAltitude:-90,N)+4,j=-Math.max(14,z*.85),F=4,X=G=>j+F*Math.log1p(Math.exp((G-j)/F)),A=G=>_+(z-Math.min(z,X(G)))/(z-j)*(v-_),y=A(0),P=R(n.getTime()),Z=G=>G.map((lt,O)=>`${O?"L":"M"}${tt(R(lt.time))},${tt(A(lt.altitude))}`).join(""),V=[0,6,12,18,24].map(G=>{let lt=$+G/24*M,O=G===0?"start":G===24?"end":"middle";return g`<text x="${tt(lt+(G===0?-4:G===24?4:0))}" y="${tt(m-8)}" text-anchor="${O}"
      class="clean-axis">${String(G).padStart(2,"0")}:00</text>`}),ht=[t.sunrise,t.sunset].filter(G=>G instanceof Date);return g`
    <svg
      class="clean-chart"
      width="${tt(p)}"
      height="${tt(m)}"
      viewBox="0 0 ${tt(p)} ${tt(m)}"
      role="img"
      aria-label="${u("title")}"
    >
      <text x="0" y="${tt(y+4)}" class="clean-horizon-label">${u("horizon")}</text>
      <line class="clean-horizon" x1="${$}" x2="${tt(p-w)}" y1="${tt(y)}"
        y2="${tt(y)}" stroke-dasharray="6 6" />
      <line class="clean-now" x1="${tt(P)}" x2="${tt(P)}" y1="${tt(_-8)}" y2="${tt(v)}" />
      <text x="${tt(P)}" y="${tt(_-14)}" text-anchor="middle" class="clean-now-label">${u("cleanNow")}</text>
      ${C.length?g`<path class="clean-moon-path" d="${Z(C)}" />`:g``}
      ${s&&e.samples.length?g`<path class="clean-sun-path" d="${Z(e.samples)}" />
            ${ht.map(G=>g`<circle class="clean-sun-mark" cx="${tt(R(G.getTime()))}"
                cy="${tt(y)}" r="6" />`)}`:g``}
      ${C.length?g`<circle class="clean-moon-now" cx="${tt(P)}" cy="${tt(A(d))}" r="6">
              <title>${u("chartMoonNow",{altitude:ot(d,1,i.locale)})}</title>
            </circle>`:g``}
      ${s?g`<circle class="clean-sun-now" cx="${tt(P)}" cy="${tt(A(a))}" r="7">
              <title>${u("chartSunNow",{altitude:ot(a,1,i.locale)})}</title>
            </circle>`:g``}
      ${V}
    </svg>
  `}function ki(o){let e=Math.sin(o*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Qr(o,e,t){let n=[];for(let i=0;i<e;i++){let s=Math.sqrt(ki(o*7.13+i*1.37))*t*.96,r=ki(o*3.71+i*2.11)*360,l=Ut({x:0,y:0},s,r),a=ki(o*5.19+i*4.53);n.push({x:l.x,y:l.y,r:.35+a*.75,opacity:.16+a*.34})}return n}function Mi(o,e){return x((90-o)/90*e,0,e)}function Si(o){let{width:e,height:t,sun:n,moon:i,sunTrack:s,moonPhase:r,showSun:l,showMoon:a,palette:d,format:u,animations:p,uid:m,showCardinals:f=!0,seed:$=0}=o,w=Math.max(80,e),_=Math.max(80,t),L=6,v={x:w/2,y:_/2},M=Math.max(10,Math.min(w,_)/2-L),D=`${m}-dome`,S=`${m}-dome-clip`,T=[{key:u.t("compassNorth"),azimuth:0},{key:u.t("compassEast"),azimuth:90},{key:u.t("compassSouth"),azimuth:180},{key:u.t("compassWest"),azimuth:270}],R=x(c(M*.17,1),7,11),C=n?n.altitude>0:!1,N=x(c(M*.11,1),4,11),z=n?Ut(v,Mi(n.altitude,M),n.azimuth):null,j=l&&n&&z,F=i?i.altitude>0:!1,X=x(c(M*.24,1),10,22),A=i?Ut(v,Mi(i.altitude,M),i.azimuth):null,y=a&&i&&A&&r,P=f&&M>=42,Z=x(c(M*.14,1),6.5,9),V=[{altitude:30,radius:M*(60/90)},{altitude:60,radius:M*(30/90)}],G=(n?.altitude??-90)<-6?Qr(Math.max(1,Math.round($)),46,M):[],lt=s.filter(O=>O.altitude>=-8).map(O=>Ut(v,Mi(O.altitude,M),O.azimuth));return g`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(w,1)} ${c(_,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${u.t("skyView")}"
    >
      <defs>
        <radialGradient id="${D}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${d.skyTop}" />
          <stop offset="100%" stop-color="${d.skyBottom}" />
        </radialGradient>
        <clipPath id="${S}">
          <circle cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(M,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(M,1)}"
        fill="url(#${D})" opacity="0.55" />

      <g clip-path="url(#${S})">
        ${G.length?g`<g class="stars">
                ${G.map(O=>g`<circle
                      cx="${c(v.x+O.x,1)}"
                      cy="${c(v.y+O.y,1)}"
                      r="${c(O.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${c(O.opacity,2)}" />`)}
              </g>`:g``}
        ${V.map(O=>g`<circle
              cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(O.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${c(v.x-M,1)}" y1="${c(v.y,1)}"
          x2="${c(v.x+M,1)}" y2="${c(v.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${c(v.x,1)}" y1="${c(v.y-M,1)}"
          x2="${c(v.x,1)}" y2="${c(v.y+M,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${lt.length>1?g`<path
                d="M${lt.map(O=>`${c(O.x,1)} ${c(O.y,1)}`).join(" L")}"
                fill="none"
                stroke="${d.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:g``}
      </g>

      <circle
        cx="${c(v.x,1)}" cy="${c(v.y,1)}" r="${c(M,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${P?g`<g
              font-size="${Z}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${V.map(O=>{let nt=Ut(v,O.radius,45);return g`<text
                  x="${c(nt.x,1)}"
                  y="${c(nt.y+Z*.35,1)}"
                >${O.altitude}°</text>`})}
            </g>`:g``}

      ${f?g`<g font-size="${R}" fill="var(--smc-muted-color)" opacity="0.7">
              ${T.map(O=>{let nt=Ut(v,M*.87,O.azimuth);return g`<text
                  x="${c(nt.x,1)}"
                  y="${c(nt.y+R*.35,1)}"
                  text-anchor="middle"
                >${O.key}</text>`})}
            </g>`:g``}

      ${j&&C&&z?g`<g class="${p?"smc-pulse":""}">
              <circle
                cx="${c(z.x,1)}" cy="${c(z.y,1)}" r="${N}"
                fill="${d.lineDay}" opacity="0.28" />
              <circle
                cx="${c(z.x,1)}" cy="${c(z.y,1)}" r="${c(N*.55,1)}"
                fill="${d.lineDay}" />
            </g>`:g``}
      ${l&&n&&!C?si(v,M,n.azimuth,d.lineNight):g``}

      ${y&&F&&A&&r?g`<g transform="translate(${c(A.x-X/2,1)} ${c(A.y-X/2,1)})">
              ${Kt({size:X,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:X>=16,uid:`${m}-moon`})}
            </g>`:g``}
      ${a&&i&&!F?si(v,M,i.azimuth,"var(--smc-moon-lit, #e6ebf7)"):g``}
    </svg>
  `}function Ti(o,e,t){o.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}function ta(o){if(typeof o!="string")return null;let[e,t]=o.split(".",2);return!e||!t?null:[e,t]}function hs(o,e,t,n,i){typeof o?.callService=="function"&&o.callService(e,t,n,i)}function Ai(o,e,t,n,i){if(!n){i?.();return}switch(n.action){case"none":return;case"open-popup":i?.();return;case"more-info":Ti(o,"hass-more-info",{entityId:n.entity??t.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),Ti(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":hs(e,"homeassistant","toggle",{entity_id:n.entity??t.entity});return;case"call-service":case"perform-action":{let s=ta(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,l=typeof n.target=="object"&&n.target!==null?n.target:void 0;hs(e,s[0],s[1],r,l);return}case"fire-dom-event":Ti(window,"ll-custom",n);return;default:return}}function Ei(o=16,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function ms(o=16,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${e}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${e}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function Ci(o=16,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${e}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Dn(o=16,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Ln(o=16,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${e}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${e}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var ps="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function Di(o=16,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ps}
        fill="${e}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function gs(o=16,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${e}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ps}
        fill="${e}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${e}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function Nn(o=20,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${e}" />
      <g stroke="${e}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function fs(o=18,e="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${e}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${e}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${e}" />
    </svg>
  `}var $s=new Map;function bs(o){let e=$s.get(o);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),$s.set(o,e)),e}function ea(o){try{return bs(o)}catch{return bs("UTC")}}function Li(o,e){let t=ea(e).formatToParts(o),n={};for(let i of t)i.type!=="literal"&&(n[i.type]=Number.parseInt(i.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function ys(o,e){let t=Li(o,e);return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)-Math.floor(o.getTime()/1e3)*1e3}function na(o,e,t,n=0,i=0,s=0,r="UTC"){let l=Date.UTC(o,e-1,t,n,i,s),a=1440*60*1e3,d=[ys(new Date(l-a),r),ys(new Date(l+a),r)],u=[...new Set(d)].map(m=>l-m).filter(m=>{let f=Li(new Date(m),r);return f.year===o&&f.month===e&&f.day===t&&f.hour===n&&f.minute===i&&f.second===s}).sort((m,f)=>m-f);if(u.length>0)return new Date(u[0]);let p=Math.min(...d);return new Date(l-p)}function Te(o,e){let t=Li(o,e);return na(t.year,t.month,t.day,0,0,0,e)}function vs(o,e){let t=Te(o,e);return Te(new Date(t.getTime()+2160*60*1e3),e)}function St(o,e){return Math.round(Te(o,e).getTime()/(1440*60*1e3))}function ws(o){if(o)try{return new Intl.DateTimeFormat("en-US",{timeZone:o}),o}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function ut(o,e){return typeof o=="boolean"?o:o==="true"||o===1?!0:o==="false"||o===0?!1:e}function de(o,e,t){return typeof o=="string"&&e.includes(o)?o:t}function Ni(o,e,t,n,i,s=0){let r=Mt(o);if(r===null)return e;let l=x(r,t[0],t[1]);return Math.abs(l-r)>1e-9&&i.push(at(n,"invalidRange",{value:String(o),min:String(t[0]),max:String(t[1])})),s===0?Math.round(l):c(l,s)}function Hi(o,e,t){if(o==null)return null;let n=typeof o=="object"&&!Array.isArray(o)?o:void 0,i=n?.action;if(typeof i!="string"||i.trim()==="")return t.push(at(e,"invalidAction",{value:String(o)})),null;let s=i.trim();return Ko.includes(s)?{...n,action:s}:(t.push(at(e,"invalidAction",{value:s})),null)}function ks(o,e="en"){let t=[],n=[],i=o??{},s=ut(i.minimal_mode,I.minimal_mode),r=Se(s),l=s||typeof i.card_style!="string"?I.card_height:Me(i.card_style);if(typeof i.card_height=="number"&&Number.isFinite(i.card_height))l=Math.round(x(i.card_height,r[0],r[1])),l!==i.card_height&&n.push(at(e,"invalidHeight",{value:String(i.card_height),min:r[0],max:r[1]}));else if(i.card_height==="auto"||i.card_height===null)l="auto";else if(typeof i.card_height=="number")n.push(at(e,"invalidHeight",{value:String(i.card_height),min:r[0],max:r[1]}));else if(i.card_height!==void 0){let f=Mt(i.card_height);f===null?t.push(at(e,"invalidHeight",{value:String(i.card_height),min:r[0],max:r[1]})):l=Math.round(x(f,r[0],r[1]))}let a=null,d=null,u=Mt(i.latitude),p=Mt(i.longitude);return u!==null&&(u>=-90&&u<=90?a=u:n.push(at(e,"invalidNumber",{value:String(i.latitude)}))),p!==null&&(p>=-180&&p<=180?d=p:n.push(at(e,"invalidNumber",{value:String(i.longitude)}))),{config:{type:typeof i.type=="string"?i.type:"custom:sun-moon-card",entity:typeof i.entity=="string"&&i.entity.trim()!==""?i.entity.trim():I.entity,moon_entity:typeof i.moon_entity=="string"&&i.moon_entity.trim()!==""?i.moon_entity.trim():I.moon_entity,card_height:l,show_sun:ut(i.show_sun,I.show_sun),show_moon:ut(i.show_moon,I.show_moon),show_twilight:ut(i.show_twilight,I.show_twilight),show_astronomical_details:ut(i.show_astronomical_details,I.show_astronomical_details),compact_mode:ut(i.compact_mode,I.compact_mode),minimal_mode:s,minimal_show_times:ut(i.minimal_show_times,I.minimal_show_times),minimal_show_zenith:ut(i.minimal_show_zenith,I.minimal_show_zenith),sun_marker_size:Ni(i.sun_marker_size,I.sun_marker_size,Ze,e,n,1),popup_width:Ni(i.popup_width,I.popup_width,Jt,e,n),popup_height:Ni(i.popup_height,I.popup_height,Yt,e,n),show_remaining_time:ut(i.show_remaining_time,I.show_remaining_time),remaining_time_focus:de(i.remaining_time_focus,Wt.remainingTimeFocus,I.remaining_time_focus),show_golden_hour:ut(i.show_golden_hour,I.show_golden_hour),show_countdown_tile:ut(i.show_countdown_tile,I.show_countdown_tile),tap_action:Hi(i.tap_action,e,n),hold_action:Hi(i.hold_action,e,n),double_tap_action:Hi(i.double_tap_action,e,n),card_style:de(i.card_style,Wt.cardStyle,I.card_style),scene:de(i.scene,Wt.scene,I.scene),theme_mode:de(i.theme_mode,Wt.themeMode,I.theme_mode),animations:ut(i.animations,I.animations),time_format:de(i.time_format,Wt.timeFormat,I.time_format),language:de(i.language,Wt.language,I.language),show_header:ut(i.show_header,I.show_header),show_day_chart:ut(i.show_day_chart,I.show_day_chart),show_sky_view:ut(i.show_sky_view,I.show_sky_view),show_events:ut(i.show_events,I.show_events),show_moon_times:ut(i.show_moon_times,I.show_moon_times),show_footer:ut(i.show_footer,I.show_footer),twilight_level:de(i.twilight_level,Wt.twilightLevel,I.twilight_level),location_name:typeof i.location_name=="string"?i.location_name:"",latitude:a,longitude:d},errors:t,warnings:n}}function Ms(o,e){let t=Se(o.minimal_mode);return o.card_height==="auto"?x(Jo(e,o.card_style),t[0],t[1]):x(o.card_height,t[0],t[1])}function ia(o,e,t,n="de"){let i={latitude:0,longitude:0},s={dayStart:o,dayEnd:new Date(o.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},l={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},a={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:o,timeZone:e,location:i,locationName:"",extras:oa(e,Ss(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:l,events:a,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:t,fatal:!0}}function Ss(o){return o==="de"?"de-DE":"en-GB"}function oa(o,e){return{timeZoneLongName:vi(o,e,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function sa(o,e){let t=ei(o.getTime()-27648e5,o.getTime()-6e4);if(t.length===0)return!1;let n=t[t.length-1],i=s=>new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit"}).format(s);return i(n)===i(o)}function ra(o,e,t){if(!o)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:e,month:"2-digit"}).format(o));if(!Number.isFinite(n)||n<1||n>12)return null;let i=Vo[n-1];return at(t,"folkName",{name:at(t,i)})}function _s(o,e,t,n){return o?{time:o,azimuth:wn(o,e,"moon"),dayOffset:St(o,n)-St(t,n)}:null}function aa(o){if(typeof o!="string"||o.trim()==="")return null;let e=new Date(o);return Number.isNaN(e.getTime())?null:e}var xs=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],la={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function ca(o,e,t){let n=ws(e?.config?.time_zone),i=[],s=oi(e?.config?.latitude)?e.config.latitude:null,r=oi(e?.config?.longitude)?e.config.longitude:null,l=o.latitude??s,a=o.longitude??r,d=ue(o.language,e?.locale?.language??e?.language);if(l===null||a===null)return ia(t,n,["missing-location",...i],d);let u={latitude:l,longitude:a},p=o.location_name.trim()!==""?o.location_name.trim():e?.config?.location_name??"",m=Te(t,n),f=vs(t,n),$=Qn(u,m,f),w=yn(t,u),_=w.altitude,L=Ve(t.getTime()+6e4,u),v=Xt(t,u),M=vn(t),D=Do(t,u),S=e?.states?.[o.entity];S||i.push("missing-sun-entity");let T={...$.events},R={};if(S?.attributes)for(let[B,pt]of xs){let _t=aa(S.attributes[pt]),yt=$.events[B];if(_t&&_t>=m&&_t<f&&(!yt||Math.abs(_t.getTime()-yt.getTime())<=jo)){T[B]=_t,R[B]="ha";continue}R[B]=yt?"computed":"none"}else for(let[B]of xs)R[B]=$.events[B]?"computed":"none";for(let B of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])R[B]=$.events[B]?"computed":"none";let C=S?.attributes?Mt(S.attributes.elevation):null,N=S?.attributes?Mt(S.attributes.azimuth):null,z=o.moon_entity?e?.states?.[o.moon_entity]:void 0,j=z&&typeof z.state=="string"?la[z.state]??null:null,F=o.show_moon?Co(u,m,f,D):null,X=[],A=900*1e3;for(let B=m.getTime();B<=f.getTime();B+=A){let pt=yn(B,u);X.push({altitude:pt.altitude,azimuth:pt.azimuth})}let y=null;T.sunrise&&T.sunset&&(y=(T.sunset.getTime()-T.sunrise.getTime())/6e4);let P=Te(new Date(m.getTime()-720*60*1e3),n),Z=Qn(u,P,m),V=Z.events.sunrise&&Z.events.sunset?(Z.events.sunset.getTime()-Z.events.sunrise.getTime())/6e4:null,ht=y!==null&&V!==null?y-V:null,G=No(t),lt=o.twilight_level==="nautical"?Ft:o.twilight_level==="astronomical"?Gt:Ht,O=B=>B?{time:B.time,rising:B.rising,dayOffset:St(B.time,n)-St(t,n)}:null,nt=o.show_sun?O(ti(u,t,Ke)):null,Pt=o.show_twilight?O(ti(u,t,lt)):null,rt=t.getTime(),J=[D.nextRise,D.nextSet].filter(B=>B instanceof Date&&B.getTime()>rt).sort((B,pt)=>B.getTime()-pt.getTime())[0],bt=o.show_moon&&J?{time:J,rising:J.getTime()===D.nextRise?.getTime(),dayOffset:St(J,n)-St(t,n)}:null,mt={timeZoneLongName:vi(n,Ss(d),t),previousDaylightMinutes:V,daylightDeltaMinutes:ht,sunBelowHorizon:_<0?Math.abs(_):null,sunriseAzimuth:T.sunrise?wn(T.sunrise,u,"sun"):null,sunsetAzimuth:T.sunset?wn(T.sunset,u,"sun"):null,nextFullMoon:G,nextFullMoonDays:G?Math.round((G.time.getTime()-t.getTime())/(1440*60*1e3)):null,blueMoon:G?sa(G.time,n):!1,moonFolkName:ra(G?.time??null,n,d),moonDistance:Ho(t,u,14),moonRise:_s(D.nextRise??D.previousRise,u,t,n),moonSet:_s(D.nextSet??D.previousSet,u,t,n),nextSunEvent:nt,nextTwilightEvent:Pt,nextMoonEvent:bt,goldenHour:o.show_golden_hour?Eo(u,t,Be,bn):null};return $.polar==="polar-day"&&i.push("polar-day"),$.polar==="polar-night"&&i.push("polar-night"),T.sunrise||i.push("no-sunrise-today"),T.sunset||i.push("no-sunset-today"),!T.civilDawn&&!T.civilDusk&&i.push("no-civil-twilight"),{now:t,timeZone:n,location:u,locationName:p,day:$,sun:{altitude:_,azimuth:w.azimuth,phase:Lo(_),rising:L>_,haElevation:C,haAzimuth:N},moon:{position:v,phase:M,events:D,haPhaseName:j},sunTrack:X,moonPath:F,events:T,eventSources:R,extras:mt,daylightMinutes:y,issues:i,fatal:!1}}var Je=new Map;function ua(o){return[o.entity,o.moon_entity,o.latitude,o.longitude,o.twilight_level,o.language,o.location_name,String(o.show_sun),String(o.show_moon),String(o.show_twilight),String(o.show_golden_hour)].join("|")}function da(o,e){if(!e)return"-";let t=e.states?.[o.entity],n=o.moon_entity?e.states?.[o.moon_entity]:void 0;return[e.config?.time_zone??"",e.config?.latitude??"",e.config?.longitude??"",e.config?.location_name??"",t?.attributes?.next_rising??t?.last_updated??"",t?.attributes?.next_setting??"",t?.attributes?.next_dawn??"",t?.attributes?.next_dusk??"",t?.attributes?.elevation??"",n?.state??""].join("|")}function Ts(o,e,t){let n=Math.floor(t.getTime()/6e4),i=[ua(o),da(o,e),n,t.getTimezoneOffset()].join("#"),s=Je.get(i);if(s)return s;let r=ca(o,e,t);if(Je.size>24){let l=Je.keys().next().value;l!==void 0&&Je.delete(l)}return Je.set(i,r),r}var As=un`
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
`,Es=un`
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
`;function Ri(o,e){o.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}var he=class extends Nt{setConfig(e){this._config={...e}}get _language(){return ue(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(e,t){return at(this._language,e,t)}_value(e,t){let n=this._config?.[e];return n??t}_update(e){if(!this._config)return;let t={...this._config,...e};for(let[n,i]of Object.entries(e)){let s=I[n];i===s&&n in I&&delete t[n]}this._config=t,Ri(this,t)}render(){if(!this._config)return E``;let e=this._config.card_height,t=e==="auto"||e===null,n=this._config.minimal_mode===!0,i=Se(n),s=n?I.card_height:Me(this._config.card_style),r=typeof e=="number"?e:s,l=this._config.latitude===void 0||this._config.latitude===null;return E`
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
                @change=${a=>{let d=Mt(a.target.value);d!==null&&this._update({card_height:Math.round(x(d,i[0],i[1]))})}}
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

          ${this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",I.sun_marker_size),min:Ze[0],max:Ze[1],step:.5,digits:1,set:a=>this._update({sun_marker_size:a})})}

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
                @change=${a=>this._update({card_style:a.target.value,...this._styleHeight(a.target.value)})}
              >
                <option value="glass">${this._t("editorCardStyleGlass")}</option>
                <option value="flat">${this._t("editorCardStyleFlat")}</option>
                <option value="horizon">${this._t("editorCardStyleHorizon")}</option>
                <option value="scene">${this._t("editorCardStyleScene")}</option>
                <option value="clean">${this._t("editorCardStyleClean")}</option>
              </select>
            </div>
          </div>

          ${this._config?.card_style==="scene"?E`<div class="row">
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
              </div>`:k}

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
                    </option>`:k}
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
                ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",I.popup_width),min:Jt[0],max:Jt[1],step:20,set:a=>this._update({popup_width:Math.round(a)})})}
                ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",I.popup_height),min:Yt[0],max:Yt[1],step:20,set:a=>this._update({popup_height:Math.round(a)})})}`:k}
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
                .value=${this._value("entity",I.entity)}
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
                .value=${this._value("moon_entity",I.moon_entity)}
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
                  @change=${a=>{if(a.target.checked){let u={...this._config};delete u.latitude,delete u.longitude,this._config=u,Ri(this,u)}else this._update({latitude:c(this.hass?.config?.latitude??0,4),longitude:c(this.hass?.config?.longitude??0,4)})}}
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
                @change=${a=>{let d=Mt(a.target.value);this._update({latitude:d===null?void 0:x(d,-90,90)})}}
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
                @change=${a=>{let d=Mt(a.target.value);this._update({longitude:d===null?void 0:x(d,-180,180)})}}
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
              ${I.card_height} px, mindestens
              ${n?hi:120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_numberRow(e){let{id:t,labelKey:n,value:i,min:s,max:r,step:l,digits:a=0,set:d}=e,u=p=>String(a===0?Math.round(p):c(p,a));return E`
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
            @change=${p=>{let m=Mt(p.target.value);m!==null&&d(x(m,s,r))}}
          />
        </div>
      </div>
    `}_styleHeight(e){let t=this._config?.card_height;if(this._config?.minimal_mode===!0)return{};let n=Me(this._config?.card_style),i=Me(e);return i!==n&&(t===void 0||t===n)?{card_height:i}:{}}_warnings(){let e=this._config?.card_height,t=Se(this._config?.minimal_mode===!0);return typeof e=="number"&&(e<t[0]||e>t[1])?E`<span class="hint">
        ${this._t("invalidHeight",{value:String(e),min:t[0],max:t[1]})}
      </span>`:k}_switch(e,t){let n=I[e];return E`
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
    `}_reset(){let e=Sn();this._config=e,Ri(this,e)}};he.styles=Es,Lt([ve({attribute:!1})],he.prototype,"hass",2),Lt([we()],he.prototype,"_config",2),he=Lt([pn(Uo)],he);var te=12,Cs=17,Bt=class extends Nt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=t=>{if(!this._popup)return;if(t.key==="Escape"){t.stopPropagation(),this._closeDetails();return}if(t.key!=="Tab")return;let n=this._popupFocusable(),i=n[0],s=n[n.length-1];if(!i||!s)return;let r=this._activeElement(),l=r?n.indexOf(r):-1;if(l===-1){t.preventDefault(),(t.shiftKey?s:i).focus();return}t.shiftKey&&l===0?(t.preventDefault(),s.focus()):!t.shiftKey&&l===n.length-1&&(t.preventDefault(),i.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let t=this._config?.hold_action;t&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(t,!1)},Wo))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=t=>{if(this._held){this._held=!1;return}let n=t.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},Bo)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(t){let n=this._hass;this._hass=t,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=t)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Sn()}setConfig(t){if(!t||typeof t!="object")throw new Error("Invalid configuration");let n=ue(t.language,this.hass?.locale?.language),{config:i,errors:s,warnings:r}=ks(t,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let l=r.join(" ");l!==this._warned&&(this._warned=l,console.warn(`[sun-moon-card] ${l}`))}this._config=i}getCardSize(){let t=this._resolvedHeight();return Math.max(1,Math.round(t/50))}getGridOptions(){let t=this._resolvedHeight();return{rows:Math.max(1,Math.round(t/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(t){super.willUpdate(t);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&t!==this._width&&(this._width=t)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let t=Math.round(this.getBoundingClientRect().width);t>0&&(this._width=t)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let t=this._language(),n=x(this._config.popup_width,Jt[0],Jt[1]),i=x(this._config.popup_height,Yt[0],Yt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",at(t,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let l=document.createElement("button");l.type="button",l.setAttribute("aria-label",at(t,"popupClose")),l.textContent="\u2715",Object.assign(l.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),l.addEventListener("click",()=>this._closeDetails());let a=this._config,d={...a,latitude:a.latitude??void 0,longitude:a.longitude??void 0,location_name:a.location_name??void 0,minimal_mode:!1,card_height:i,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},u=document.createElement(di);u.hass=this.hass;try{u.setConfig(d)}catch{}this._popupCard=u,r.append(u,l),s.append(r),s.addEventListener("click",p=>{p.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,l.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let t=document.activeElement;if(!t)return null;let n=t.shadowRoot?.activeElement;return n instanceof HTMLElement?n:t}_popupFocusable(){if(!this._popup)return[];let t=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&t.push(n);let i='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(i))s.hasAttribute("disabled")||t.push(s);return t}_handleMinimalKey(t){if(t.key==="Enter"||t.key===" "){t.preventDefault();let n=t.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(t){this._runAction(this._config?.tap_action??null,!0,t)}_runAction(t,n,i){let s=this._config;if(!s)return;let r=i??this.renderRoot?.querySelector("ha-card")??this;Ai(r,this.hass,s,t,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(t){if(t.has("_config")||t.has("_width")||t.has("_tick"))return!0;if(t.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(t=>{let n=t.some(i=>i.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,Io()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let t=this._config,n=this.hass;if(!n||!t)return"";let i=n.states?.[t.entity],s=t.moon_entity?n.states?.[t.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",i?.attributes?.next_rising??i?.last_updated??"",i?.attributes?.next_setting??"",i?.attributes?.next_dawn??"",i?.attributes?.next_dusk??"",i?.attributes?.elevation??"",i?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Ms(this._config,this._width||400):I.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return ue(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let t=this._config;if(!t)return E``;let n=this._width||400,i=this._resolvedHeight(),s=Xo(i,n,t),r=Ts(t,this.hass,new Date),l=this._language(),a=this._isDark(),d=a?mi:pi;if(r.fatal)return E`
        <ha-card
          class=${ft({"smc-dark":a,"smc-light":!a,"smc-minimal":s.minimal})}
          style=${K({height:`${s.minimal?Math.max(i,56):i}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${fs(18)}</span>
              <span>${at(l,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let u=ns(l,this._locale(),r.timeZone,ts(t.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?E`
        <ha-card
          class=${ft({"smc-dark":a,"smc-light":!a,"smc-minimal":!0})}
          style=${K({height:`${i}px`})}
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
            class=${ft({root:!0,minimal:!0})}
            style=${K({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
          >
            ${this._renderMinimalTimes(r,u,s,t)}
            <div
              class="chart-wrap minimal"
              style=${K({height:`${s.chartHeight}px`})}
            >
              ${xi({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style==="scene"||t.card_style==="clean"?"glass":t.card_style,compact:!1,minimal:!0,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:t.card_style==="scene"?this._renderSceneCard(r,u,t,d,a,n,i):t.card_style==="clean"?this._renderCleanCard(r,u,t,a,n,i):E`
      <ha-card
        class=${ft({"smc-dark":a,"smc-light":!a})}
        style=${K({height:`${i}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,u)}
      >
        <div
          class=${ft({root:!0,compact:s.compact})}
          style=${K({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
        >
          ${s.showHeader?this._renderHeader(r,u,d,s):k}

          <div
            class=${ft({body:!0,columns:s.skyViewSide})}
            style=${K({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${t.show_day_chart?E`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${K({height:`${s.chartHeight}px`})}
                  >
                    ${xi({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:t.show_sun,showMoon:t.show_moon,showTwilight:t.show_twilight,twilightLevel:t.twilight_level,animations:t.animations,cardStyle:t.card_style,compact:s.compact,minimal:!1,sunMarkerSize:t.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:t.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,u,s),showGoldenHour:t.show_golden_hour,moonPath:r.moonPath,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(u,s.legendHeight):k}
                </div>`:k}
            ${s.skyViewSide?E`<div
                  class="sky-column"
                  style=${K({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${Si({width:s.skyViewWidth,height:s.chartHeight,sun:t.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:t.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:t.show_sun,showMoon:t.show_moon,palette:d,format:u,animations:t.animations,uid:`${this._uid}-sky`,seed:St(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,u,s.skyViewWidth,this._countdownRows(s))}
                </div>`:k}
          </div>

          ${s.showEvents?this._renderEvents(r,u,s):k}
          ${s.showDetails?this._renderDetails(r,u,t,s,l,a,n):k}
          ${s.showFooter?this._renderFooter(r,u,t,s):k}
        </div>
      </ha-card>
    `}_renderSceneCard(t,n,i,s,r,l,a){let d=l<480?12:16,u=12,p=Math.max(160,l-2*d),m=p>=680,f=l<480?78:92,$=(i.show_sun?1:0)+(i.show_moon?1:0),w=$===0?0:m?f:$*f+($-1)*10,_=l<480?46:52,L=140,v=i.show_header,M=$>0,D=(T,R)=>a-2*d-(T?_+u:0)-(R?w+u:0);i.show_day_chart&&M&&D(v,!0)<L&&(M=!1),i.show_day_chart&&v&&D(!0,M)<L&&(v=!1);let S=i.show_day_chart?Math.max(L,D(v,M)):0;return E`
      <ha-card
        class=${ft({"smc-dark":r,"smc-light":!r,"smc-scene":!0})}
        style=${K({height:`${a}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,n)}
      >
        <div
          class="root scene-root"
          style=${K({padding:`${d}px`,gap:`${u}px`})}
        >
          ${v?this._renderSceneHeader(t,n,s,l,_):k}
          ${i.show_day_chart?E`<div class="scene-wrap" style=${K({height:`${S}px`})}>
                ${us({profile:t.day,events:t.events,now:t.now,width:p,height:S,format:n,scene:i.scene,showSun:i.show_sun,showMoon:i.show_moon,moonPath:t.moonPath,moon:i.show_moon?{illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,currentAltitude:t.sun.altitude,animations:i.animations,uid:`${this._uid}-scene`})}
              </div>`:k}
          ${M?E`<div
                class=${ft({"scene-tiles":!0,stacked:!m})}
                style=${K({height:`${w}px`})}
              >
                ${i.show_sun?this._renderSceneSunTile(t,n,l<480):k}
                ${i.show_moon?this._renderSceneMoonTile(t,n,l<480):k}
              </div>`:k}
        </div>
      </ha-card>
    `}_renderCleanCard(t,n,i,s,r,l){let a=r<480,d=a?14:18,u=Math.max(160,r-2*d-2),p=u>=520,m=(i.show_sun?1:0)+(i.show_moon?1:0),f=a?64:72,$=m===0?0:p?f:m*f+(m-1)*12,w=a?52:60,_=21,L=110,v=i.show_header,M=m>0,D=(A,y)=>l-2*d-(A?w:0)-(y?$+_:0);i.show_day_chart&&M&&D(v,!0)<L&&(M=!1),i.show_day_chart&&v&&D(!0,M)<L&&(v=!1);let S=i.show_day_chart?Math.max(L,D(v,M)):0,T=this._primaryCountdown(t,n),R=n.t(this._phaseKey(t)),C=t.locationName?`${t.locationName} \xB7 ${qe(t.now,n)}`:qe(t.now,n),N=(a?54:64)+Math.max(n.t("title").length*(a?20:22)*.56,C.length*14*.53),z=A=>A.length*13.5*.58+30,j=u-N-12,X=(T?[{phase:!0,text:T.compact},{phase:!1,text:T.compact},{phase:!0,text:T.duration},{phase:!1,text:T.duration}]:[{phase:!0,text:null},{phase:!1,text:null}]).find(A=>(A.phase?z(R)+8:0)+(A.text?z(A.text):0)<=j)??{phase:!1,text:T?T.duration:null};return E`
      <ha-card
        class=${ft({"smc-dark":s,"smc-light":!s,"smc-clean":!0})}
        style=${K({height:`${l}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(t,n)}
      >
        <div class="root clean-root" style=${K({padding:`${d}px`})}>
          ${v?E`<div class="clean-header" style=${K({height:`${w}px`})}>
                <div class="clean-head-left">
                  <svg class="clean-logo" width=${a?40:50} height=${a?32:40}
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
                    <span class="clean-subtitle">${C}</span>
                  </div>
                </div>
                <div class="clean-chips">
                  ${X.phase?E`<span class="clean-chip phase" title=${R}>${R}</span>`:k}
                  ${T&&X.text?E`<span
                        class="clean-chip countdown-chip"
                        data-body=${T.body}
                        role="img"
                        aria-label=${T.long}
                        title=${T.title}
                        >${X.text}</span
                      >`:k}
                </div>
              </div>`:k}
          ${i.show_day_chart?E`<div class="clean-chart-wrap" style=${K({height:`${S}px`})}>
                ${ds({profile:t.day,events:t.events,now:t.now,width:u,height:S,format:n,showSun:i.show_sun,showMoon:i.show_moon,moonPath:t.moonPath,sunAltitude:t.sun.altitude,moonAltitude:t.moon.position.apparentAltitude})}
              </div>`:k}
          ${M?E`<div class="clean-divider"></div>
                <div
                  class=${ft({"clean-info":!0,stacked:!p,single:m===1})}
                  style=${K({height:`${$}px`})}
                >
                  ${i.show_sun?this._renderCleanSun(t,n,a):k}
                  ${i.show_sun&&i.show_moon&&p?E`<span class="clean-sep" aria-hidden="true"></span>`:k}
                  ${i.show_moon?this._renderCleanMoon(t,n,a,(p&&m===2?(u-37)/2:u)-(a?66:74)):k}
                </div>`:k}
        </div>
      </ha-card>
    `}_cleanItem(t,n,i,s){let r=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),n?.())};return E`<div
      class=${ft({"clean-item":!0,[t]:!0,actionable:!!n})}
      role=${n?"button":"group"}
      tabindex=${n?"0":"-1"}
      aria-label=${i}
      @click=${n??k}
      @keydown=${n?r:k}
    >
      ${s}
    </div>`}_renderCleanSun(t,n,i){let s=ot(t.sun.altitude,1,n.locale),r=`${Math.round(t.sun.azimuth)}\xB0 ${Rt(t.sun.azimuth,n.language)}`,l=i?50:58;return this._cleanItem("sun",this._sceneTileAction(this._config.entity),`${n.t("sunAltitude")} ${s}, ${n.t("azimuth")} ${r}`,E`<span class="clean-badge sun" style=${K({width:`${l}px`,height:`${l}px`})}
          >${Nn(i?26:30,"currentColor")}</span
        >
        <span class="clean-item-text">
          <span class="clean-item-label">${n.t("sunAltitude")}</span>
          <span class="clean-item-value">${s}</span>
          <span class="clean-item-sub">${n.t("azimuth")} ${r}</span>
        </span>`)}_renderCleanMoon(t,n,i,s){let r=this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],s,13.5,.56)??this._moonTimesText(t,n,!0),l=t.moon.haPhaseName??t.moon.phase.phaseKey,a=`${Cn(t.moon.phase.illumination,n.locale)} ${n.t("illumination")}`,d=i?50:58;return this._cleanItem("moon",this._sceneTileAction(this._config.moon_entity||null),`${n.t(l)}, ${a}`,E`<span class="clean-badge moon" style=${K({width:`${d}px`,height:`${d}px`})}>
          <svg width=${i?24:28} height=${i?24:28} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 3.2a9 9 0 1 0 5.3 13.6A7.4 7.4 0 0 1 15.5 3.2z" fill="currentColor" />
          </svg>
        </span>
        <span class="clean-item-text">
          <span class="clean-item-label">${n.t(l)}</span>
          <span class="clean-item-value">${a}</span>
          <span class="clean-item-sub" title=${this._moonTimesText(t,n,!1)}
            >${r}</span
          >
        </span>`)}_renderSceneHeader(t,n,i,s,r){let l=s<480,a=this._primaryCountdown(t,n),d=n.t(this._phaseKey(t));return E`
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
          ${a?E`<span
                class="scene-chip countdown-chip"
                data-body=${a.body}
                role="img"
                aria-label=${a.long}
                title=${a.title}
                >${a.icon}<span>${l?a.duration:a.compact}</span></span
              >`:k}
          ${l&&a?k:E`<span class="scene-chip phase" title=${d}>
                <span
                  class="scene-dot"
                  style=${K({background:this._phaseColor(t,i)})}
                ></span>
                ${d}
              </span>`}
        </div>
      </div>
    `}_sceneTileAction(t){return!t||!this.hass?.states?.[t]?null:()=>Ai(this,this.hass,this._config,{action:"more-info",entity:t},void 0)}_sceneTile(t,n,i,s){let r=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),n?.())};return E`<div
      class=${ft({"scene-tile":!0,[t]:!0,actionable:!!n})}
      role=${n?"button":"group"}
      tabindex=${n?"0":"-1"}
      aria-label=${i}
      @click=${n??k}
      @keydown=${n?r:k}
    >
      ${s}
      ${n?E`<svg class="scene-chevron" width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>`:k}
    </div>`}_renderSceneSunTile(t,n,i){let s=i?52:62,r=ot(t.sun.altitude,1,n.locale),l=`${Math.round(t.sun.azimuth)}\xB0 ${Rt(t.sun.azimuth,n.language)}`,a=u=>u?st(u,n):"\u2014",d=`${n.t("sunAltitude")} ${r}, ${n.t("azimuth")} ${l}`;return this._sceneTile("sun",this._sceneTileAction(this._config.entity),d,E`<span class="scene-tile-icon" style=${K({width:`${s}px`,height:`${s}px`})}
          >${Nn(Math.round(s*.55),"#f5a524")}</span
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
        </span>`)}_renderSceneMoonTile(t,n,i){let s=i?52:62,r=t.moon.haPhaseName??t.moon.phase.phaseKey,l=Cn(t.moon.phase.illumination,n.locale),a=t.moon.position.apparentAltitude,d=a>=0?`${ot(a,1,n.locale)} \xB7 ${Math.round(t.moon.position.azimuth)}\xB0 ${Rt(t.moon.position.azimuth,n.language)}`:`${ot(Math.abs(a),1,n.locale)} ${n.t("belowHorizon")}`,u=`${l} ${n.t("illumination")}`;return this._sceneTile("moon",this._sceneTileAction(this._config.moon_entity||null),`${n.t(r)}, ${u}`,E`<span class="scene-tile-icon moon" style=${K({width:`${s}px`,height:`${s}px`})}
          >${Kt({size:s,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,darkColor:"var(--smc-scene-moon-dark, rgba(92, 102, 160, 0.7))",uid:`${this._uid}-scene-tile-moon`})}</span
        >
        <span class="scene-tile-body">
          <span class="scene-tile-label">${n.t(r)}</span>
          <span class="scene-tile-value small">${u}</span>
          <span class="scene-tile-sub">${d}</span>
          <span class="scene-tile-sub">${this._moonTimesText(t,n,!1)}</span>
        </span>`)}_renderHeader(t,n,i,s){let r=t.locationName||n.t("title"),l=t.extras,a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),d=10.5,u=(S,T=!1)=>S.length*d*.58+20+(T?12:0),m=Math.max(0,a-10-108),f=n.t(this._phaseKey(t)),$=u(f,!0),w=this._primaryCountdown(t,n),_=k,L=!0;if(w){let S=u(w.compact)+Cs,T=u(w.duration)+Cs,R=null;S+$<=m?(R=w.compact,m-=S):T+$<=m?(R=w.duration,m-=T):T<=m&&(R=w.duration,m-=T,L=!1),R!==null&&(_=E`<span
          class="meta-chip countdown-chip"
          data-body=${w.body}
          role="img"
          aria-label=${w.long}
          title=${w.title}
          >${w.icon}<span>${R}</span></span
        >`)}L&&(m-=$);let v=k;if(t.daylightMinutes!==null){let S=An(t.daylightMinutes,n.t),T=l.daylightDeltaMinutes===null?"":` ${es(l.daylightDeltaMinutes,n.t)}`,R=`${n.t("dayLength")} ${S}${T}`,C=u(R);C<=m&&(m-=C,v=E`<span class="meta-chip" title=${n.t("dayLength")}
          >${R}</span
        >`)}let M=k,D=u(l.timeZoneLongName);return D<=m&&(m-=D,M=E`<span class="meta-chip">${l.timeZoneLongName}</span>`),E`
      <div class="header" style=${K({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${qe(t.now,n)}</span>
        </div>
        <div class="header-meta">
          ${_}${v}${M}
          ${L?E`<span class="phase-chip" title=${f}>
                <span
                  class="phase-dot"
                  style=${K({background:this._phaseColor(t,i)})}
                ></span>
                ${f}
              </span>`:k}
        </div>
      </div>
    `}_countdowns(t,n){let i=this._countdownCache;if(i&&i.model===t&&i.context===n)return[...i.entries];let s=this._computeCountdowns(t,n);return this._countdownCache={model:t,context:n,entries:s},[...s]}_computeCountdowns(t,n){let i=this._config;if(!i?.show_remaining_time)return[];let s=t.now.getTime(),r=[],l=(f,$,w,_,L,v=!1)=>{if(!f)return;let M=(f.time.getTime()-s)/6e4;if(!(M>=0))return;let D=M<1,S=D?n.t("countdownNow"):An(M,n.t),T=R=>D?n.t("nowFormat",{event:n.t(R)}):n.t("untilFormat",{event:n.t(R),duration:S});r.push({minutes:M,compact:T(w??$),duration:S,time:f.time,rising:f.rising,trailing:v,name:n.t($),long:T($),title:`${n.t($)} ${st(f.time,n)}${f.dayOffset>0?` (${En(f.dayOffset,n.t)})`:""}`,icon:_,body:L})},a=t.extras.nextSunEvent;l(a,a?.rising?"sunrise":"sunset",a?.rising?"sunriseShort":"sunsetShort",a?.rising?Ei(te):Ci(te),"sun");let d=t.extras.nextTwilightEvent;if(d){let f=this._twilightKeys();l(d,d.rising?f.dawn:f.dusk,d.rising?f.dawnShort:f.duskShort,d.rising?Dn(te):Ln(te),"twilight")}let u=t.extras.nextMoonEvent;l(u,u?.rising?"moonrise":"moonset",u?.rising?"moonriseShort":"moonsetShort",u?.rising?Di(te):gs(te),"moon");let p=t.extras.goldenHour;if(p){let f=p.active?p.end:p.start;f&&l({time:f,rising:!p.active,dayOffset:this._dayOffset(f,t)},p.active?"goldenHourEnd":"goldenHour",p.active?"goldenHourEndShort":"goldenHourShort",ms(te),"golden")}let m=t.extras.nextFullMoon;return i.show_moon&&m&&l({time:m.time,rising:!0,dayOffset:this._dayOffset(m.time,t)},"fullMoon",null,Di(te),"moon",!0),r.sort((f,$)=>+!!f.trailing-+!!$.trailing||f.minutes-$.minutes)}_orderedCountdowns(t,n){let i=this._countdowns(t,n),s=this._config?.remaining_time_focus;if(s==="next")return i;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let l of r){let a=i.findIndex(d=>d.body===l&&!d.trailing);a>0&&i.unshift(...i.splice(a,1))}return i}_dayOffset(t,n){return St(t,n.timeZone)-St(n.now,n.timeZone)}_primaryCountdown(t,n){return this._orderedCountdowns(t,n).find(i=>!i.trailing)}_chartCountdown(t,n,i){let s=this._primaryCountdown(t,n);return s?{time:s.time,rising:s.rising,body:s.body,label:i.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let t=this._config?.twilight_level;return t==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:t==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(t,n){return E`
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
    `}_renderSkyReadout(t,n,i,s){let r=this._config,l=[],a=(d,u,p)=>{let m=ot(u,1,n.locale),f=`${Math.round(p)}\xB0 ${Rt(p,n.language)}`;return E`<span
        title=${`${n.t("elevation")} ${m} \xB7 ${n.t("azimuth")} ${f}`}
        >${n.t("positionReadout",{body:d,altitude:m,degrees:String(Math.round(p)),direction:Rt(p,n.language)})}</span
      >`};r.show_sun&&l.push(a(n.t("sun"),t.sun.altitude,t.sun.azimuth)),r.show_moon&&l.push(a(n.t("moon"),t.moon.position.apparentAltitude,t.moon.position.azimuth));for(let d of this._orderedCountdowns(t,n).slice(0,s))l.push(E`<span title=${d.title}>${d.long}</span>`);return l.length===0||i<150?k:E`<div class="sky-readout">${l}</div>`}_countdownRows(t){let n=this._config,i=(n.show_sun?1:0)+(n.show_moon?1:0),s=t.chartHeight+t.legendHeight+(t.showLegend?$i:0),r=i*fi+$i,l=s-r-qo;return Math.max(0,Math.min(3,Math.floor(l/fi)))}_renderFooter(t,n,i,s){let r=i.twilight_level==="nautical"?"footerTwilightNautical":i.twilight_level==="astronomical"?"footerTwilightAstronomical":i.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",l=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),a=n.t(r),d=t.extras.timeZoneLongName,u=n.t("footerMethod"),p=`${a} \xB7 ${d} \xB7 ${u}`,m=9.5*.55,f=_=>_.length*m<=l,$=f(`${a} \xB7 ${d}`)?`${a} \xB7 ${d}`:a,w=f(`${$} \xB7 ${u}`);return E`
      <div
        class="footer"
        title=${p}
        style=${K({height:`${s.footerHeight}px`})}
      >
        <span class="part">${$}</span>
        ${w?E`<span class="part">${u}</span>`:k}
      </div>
    `}_phaseKey(t){if(t.day.polar==="polar-day")return"phasePolarDay";if(t.day.polar==="polar-night")return"phasePolarNight";switch(t.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(t,n){switch(t.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(t,n,i,s=.7){for(let r of t)if(r&&r.length*i*s<=n)return r;return null}_renderCountdownTile(t,n,i,s,r,l,a){let u=t.body==="sun"&&!t.rising?n.t("tileDaylightLeft"):n.t("tileUntil",{event:t.name}),p=this._fitLabel([u,t.name],r,l),m=this._fitLabel([t.duration],r,a+2)??t.duration;return E`<div
      class=${ft({"event-tile":!0,countdown:!0,rising:t.rising,compact:i})}
      data-body=${t.body}
      style=${K({gridColumn:`span ${s}`})}
      title=${t.title}
      role="img"
      aria-label=${t.long}
    >
      <span class="event-head">
        <span class="event-icon">${t.icon}</span>
        <span class="event-time" style=${K({fontSize:`${a+2}px`})}
          >${m}</span
        >
        ${i&&p?E`<span class="event-label" style=${K({fontSize:`${l}px`})}
              >${p}</span
            >`:k}
      </span>
      ${!i&&p?E`<span class="event-label" style=${K({fontSize:`${l}px`})}
            >${p}</span
          >`:k}
    </div>`}_renderEvents(t,n,i){let{compact:s,padding:r}=i,l=i.chartWidth+(i.skyViewSide?i.skyViewWidth+10:0),a=this._config,d=[];if(a.show_twilight&&d.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:t.events.civilDawn,icon:Dn(s?14:16),missingText:n.t("noEvent")}),d.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:t.events.sunrise,icon:Ei(s?14:16),missingText:n.t("noSunrise")}),d.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:t.events.sunset,icon:Ci(s?14:16),missingText:n.t("noSunset")}),a.show_twilight&&d.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:t.events.civilDusk,icon:Ln(s?14:16),missingText:n.t("noEvent")}),a.twilight_level==="all"||a.show_astronomical_details){let N=[["nauticalDawn",t.events.nauticalDawn,"dawn"],["nauticalDusk",t.events.nauticalDusk,"dusk"],["astronomicalDawn",t.events.astronomicalDawn,"dawn"],["astronomicalDusk",t.events.astronomicalDusk,"dusk"]];for(let[z,j,F]of N)d.push({key:z,kind:F,label:n.t(z),shortLabel:n.t(z),time:j,icon:F==="dawn"?Dn(s?13:15):Ln(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let u=l<300?3:l<420?4:l<560?6:8,p=a.show_countdown_tile?this._primaryCountdown(t,n):void 0,m=p?2:0,f=Math.max(2,u-m),$=N=>N.secondary?2:N.kind==="sunrise"||N.kind==="sunset"?0:1,w=new Set([...d].map((N,z)=>({tile:N,index:z})).sort((N,z)=>$(N.tile)-$(z.tile)||N.index-z.index).slice(0,f).map(N=>N.tile)),_=d.filter(N=>w.has(N)),L=t.now.getTime(),v=_.filter(N=>N.time&&N.time.getTime()>L).sort((N,z)=>N.time.getTime()-z.time.getTime())[0],M=6,D=_.length+m,T=Math.max(40,l-2*r-M*(D-1))/D-10,R=s?T<120?8.5:9:T<92?8.5:9.5,C=T<74?11:T<96?12:12.5;return E`
      <div
        class="events"
        style=${K({gap:`${M}px`,height:`${i.eventsHeight}px`})}
      >
        ${p?this._renderCountdownTile(p,n,s,m,T*m+(m-1)*(M+10),R,C):k}
        ${_.map(N=>{let z=this._fitLabel([N.label,N.shortLabel],T,R),j=N.time?st(N.time,n):N.missingText,F=this._fitLabel([j,"\u2014"],T,C)??"\u2014";return E`
            <div
              class=${ft({"event-tile":!0,[N.kind]:!0,secondary:!!N.secondary,next:N===v,compact:s})}
              title=${`${N.label}: ${j}`}
            >
              <span class="event-head">
                <span class="event-icon">${N.icon}</span>
                <span
                  class=${ft({"event-time":!0,missing:!N.time})}
                  style=${K({fontSize:`${C}px`})}
                >
                  ${F}
                </span>
                ${s&&z?E`<span
                      class="event-label"
                      style=${K({fontSize:`${R}px`})}
                      >${z}</span
                    >`:k}
              </span>
              ${!s&&z?E`<span
                    class="event-label"
                    style=${K({fontSize:`${R}px`})}
                    >${z}</span
                  >`:k}
            </div>
          `})}
      </div>
    `}_renderDetails(t,n,i,s,r,l,a){let d=t.extras,u=t.moon.haPhaseName??t.moon.phase.phaseKey,p=s.skyViewInline&&a>=430,m=(i.show_sun?1:0)+(i.show_moon?1:0)+(p?1:0),$=Math.max(60,a-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,w=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],$,10.5),_=ot(t.sun.altitude,1,n.locale),L=`${Math.round(t.sun.azimuth)}\xB0 ${Rt(t.sun.azimuth,r)}`,v=d.sunBelowHorizon!==null?`${ot(d.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,M=this._fitLabel([v?`${v} \xB7 ${L}`:`${n.t("azimuth")} ${L}`,v??L,L],$,9.5),D=d.sunriseAzimuth!==null?`${Math.round(d.sunriseAzimuth)}\xB0 ${Rt(d.sunriseAzimuth,r)}`:null,S=d.sunsetAzimuth!==null?`${Math.round(d.sunsetAzimuth)}\xB0 ${Rt(d.sunsetAzimuth,r)}`:null,T=i.show_astronomical_details&&D&&S?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:D,set:S}),`${Math.round(d.sunriseAzimuth)}\xB0 / ${Math.round(d.sunsetAzimuth)}\xB0`],$,9.5):null,R=i.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${t.events.solarNoon?st(t.events.solarNoon,n):"\u2014"} \xB7 ${ot(t.day.maxAltitude,1,n.locale)}`,t.events.solarNoon?st(t.events.solarNoon,n):null],$,9.5):null,C=this._fitLabel([n.t(u),n.t("moon")],$,10.5),N=Cn(t.moon.phase.illumination,n.locale),z=this._fitLabel([`${N} ${n.t("illumination")}`,N],$,13),j=t.moon.position.apparentAltitude,F=ot(j,1,n.locale),X=`${Math.round(t.moon.position.azimuth)}\xB0 ${Rt(t.moon.position.azimuth,r)}`,A=`${n.t("elevation")} ${F} \xB7 ${n.t("azimuth")} ${X}`,y=j>=0?[`${n.t("elevation")} ${F} \xB7 ${X}`,`${F} \xB7 ${X}`,F]:[`${ot(Math.abs(j),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${X}`,`${ot(Math.abs(j),1,n.locale)} ${n.t("belowHorizon")}`,F],P=null,Z="";if(d.moonDistance){let{current:J,min:bt,max:mt}=d.moonDistance,B=Math.max(1,mt-bt),pt=J<=bt+B*.2,_t=J>=bt+B*.8,yt=Tn(J,n.locale),jt=pt?n.t("nearPerigee"):_t?n.t("nearApogee"):"";Z=`${n.t("moonDistance")}: ${yt} \xB7 ${n.t("distanceRange",{min:Tn(bt,n.locale),max:Tn(mt,n.locale)})}`,P=this._fitLabel(jt?[`${yt} \xB7 ${jt}`,yt]:[yt],$,9.5)}let V=this._fitLabel(P?y.flatMap(J=>[`${J} \xB7 ${P}`,J]):y,$,9.5),ht=P!==null&&(V?.includes(P)??!1),G=null,lt="";if(i.show_astronomical_details&&d.nextFullMoon){let J=d.nextFullMoonDays??0,bt=J<=0?n.t("dayToday"):n.t("inDays",{days:String(J)}),mt=`${n.t("nextFullMoon")} ${bt}`,B=d.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",pt=`${mt}${B}${d.moonFolkName?` \xB7 ${d.moonFolkName}`:""}`;lt=d.blueMoon?n.t("blueMoonHint"):d.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),G=this._fitLabel([pt,`${mt}${B}`,mt],$,9.5)}let O=i.show_moon_times?this._fitLabel([this._moonTimesText(t,n,!1),this._moonTimesText(t,n,!0)],$,9.5):null,nt=[];V&&nt.push({text:V,title:A,position:!0}),O&&nt.push({text:O,title:null}),G&&nt.push({text:G,title:lt}),P&&!ht&&nt.push({text:P,title:Z});let Pt=nt.slice(0,s.detailsHeight>=bi?3:2),rt=ht||Pt.some(J=>J.text===P),$t=P&&!rt?Z||P:null;return E`
      <div
        class="details"
        style=${K({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${i.show_sun?E`
              <div class="detail-tile sun">
                <span class="detail-icon">${Nn(20,l?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${w?E`<span class="detail-title">${w}</span>`:k}
                  <span class="detail-value">${_}</span>
                  ${M?E`<span class="detail-sub">${M}</span>`:k}
                  ${R?E`<span class="detail-sub">${R}</span>`:k}
                  ${T?E`<span class="detail-sub">${T}</span>`:k}
                </span>
              </div>
            `:k}
        ${i.show_moon?E`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Kt({size:26,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${C?E`<span class="detail-title">${C}</span>`:k}
                  ${z?E`<span class="detail-value">${z}</span>`:k}
                  ${Pt.map(J=>{let bt=[J.title,J.position?$t:null].filter(Boolean).join(" \xB7 ")||null;return E`<span class="detail-sub" title=${bt??k}
                      >${J.text}</span
                    >`})}
                </span>
              </div>
            `:k}
        ${p?E`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${Si({width:56,height:56,sun:i.show_sun?{altitude:t.sun.altitude,azimuth:t.sun.azimuth}:null,moon:i.show_moon?{altitude:t.moon.position.apparentAltitude,azimuth:t.moon.position.azimuth,illumination:t.moon.phase.illumination,brightLimbAngle:t.moon.phase.brightLimbAngle}:null,sunTrack:t.sunTrack,moonPhase:t.moon.phase,showSun:i.show_sun,showMoon:i.show_moon,palette:l?mi:pi,format:n,animations:i.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:St(t.now,t.timeZone)})}
                </span>
              </div>
            `:k}
      </div>
    `}_moonTimesText(t,n,i){let s=t.extras.moonRise,r=t.extras.moonSet,l=s&&s.dayOffset!==0?` ${En(s.dayOffset,n.t)}`:"",a=s?`\u2191 ${st(s.time,n)}${l}`:"\u2191 \u2014";if(i)return a;let d=r&&r.dayOffset!==0?` ${En(r.dayOffset,n.t)}`:"",u=r?`\u2193 ${st(r.time,n)}${d}`:"\u2193 \u2014";return`${a} \xB7 ${u}`}_renderMinimalTimes(t,n,i,s){if(i.minimalTimesHeight<=0)return k;let r=n.t,l=[];if(s.minimal_show_times&&t.events.sunrise){let d=st(t.events.sunrise,n);l.push(E`<span class="minimal-time rise" title=${`${r("sunrise")} ${d}`}
          >↑ ${d}</span
        >`)}if(s.minimal_show_zenith&&t.events.solarNoon){let d=st(t.events.solarNoon,n),u=i.chartWidth<250?d:`${r("zenith")} ${d}`;l.push(E`<span class="minimal-time zenith" title=${`${r("zenith")} ${d}`}
          >${u}</span
        >`)}if(s.minimal_show_times&&t.events.sunset){let d=st(t.events.sunset,n);l.push(E`<span class="minimal-time set" title=${`${r("sunset")} ${d}`}
          >↓ ${d}</span
        >`)}if(l.length===0)return k;let a=x(c(i.minimalTimesHeight*.78,1),8,12);return E`<div
      class="minimal-times"
      style=${K({height:`${i.minimalTimesHeight}px`,fontSize:`${a}px`,lineHeight:`${i.minimalTimesHeight}px`})}
    >
      ${l}
    </div>`}_minimalAriaLabel(t,n){return`${this._minimalTitle(t,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(t,n){let i=[this._ariaLabel(t,n)];i.push(`${n.t("sun")} ${ot(t.sun.altitude,0,n.locale)}`);let s=this._primaryCountdown(t,n);return s&&i.push(s.long),i.join(" \xB7 ")}_ariaLabel(t,n){let i=[n.t("title")];return i.push(n.t(this._phaseKey(t))),t.events.sunrise&&i.push(`${n.t("sunrise")} ${st(t.events.sunrise,n)}`),t.events.sunset&&i.push(`${n.t("sunset")} ${st(t.events.sunset,n)}`),i.join(", ")}};Bt.styles=As,Lt([ve({attribute:!1})],Bt.prototype,"hass",1),Lt([we()],Bt.prototype,"_config",2),Lt([we()],Bt.prototype,"_width",2),Lt([we()],Bt.prototype,"_tick",2),Bt=Lt([pn(di)],Bt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(e=>e.type===`custom:${Mn}`)||window.customCards.push({type:`custom:${Mn}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Bt as SunMoonCard};
