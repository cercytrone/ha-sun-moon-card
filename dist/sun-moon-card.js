var Ts=Object.defineProperty;var As=Object.getOwnPropertyDescriptor;var yt=(i,t,e,n)=>{for(var o=n>1?void 0:n?As(t,e):t,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(t,e,o):r(o))||o);return n&&o&&Ts(t,e,o),o};var Ce=globalThis,Ne=Ce.ShadowRoot&&(Ce.ShadyCSS===void 0||Ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cn=Symbol(),Ni=new WeakMap,he=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==cn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ne&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ni.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ni.set(e,t))}return t}toString(){return this.cssText}},Li=i=>new he(typeof i=="string"?i:i+"",void 0,cn),Le=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new he(e,i,cn)},Hi=(i,t)=>{if(Ne)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=Ce.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},dn=Ne?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Li(e)})(i):i;var{is:Es,defineProperty:Ds,getOwnPropertyDescriptor:Cs,getOwnPropertyNames:Ns,getOwnPropertySymbols:Ls,getPrototypeOf:Hs}=Object,He=globalThis,Ri=He.trustedTypes,Rs=Ri?Ri.emptyScript:"",Ps=He.reactiveElementPolyfillSupport,me=(i,t)=>i,pe={toAttribute(i,t){switch(t){case Boolean:i=i?Rs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Re=(i,t)=>!Es(i,t),Pi={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:Re};Symbol.metadata??=Symbol("metadata"),He.litPropertyMetadata??=new WeakMap;var kt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Ds(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=Cs(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pi}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;let t=Hs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){let e=this.properties,n=[...Ns(e),...Ls(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(dn(o))}else t!==void 0&&e.push(dn(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:pe).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:pe;this._$Em=o;let a=r.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let r=this.constructor;if(o===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Re)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};kt.elementStyles=[],kt.shadowRootOptions={mode:"open"},kt[me("elementProperties")]=new Map,kt[me("finalized")]=new Map,Ps?.({ReactiveElement:kt}),(He.reactiveElementVersions??=[]).push("2.1.2");var bn=globalThis,Ii=i=>i,Pe=bn.trustedTypes,zi=Pe?Pe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Wi="$lit$",Lt=`lit$${Math.random().toFixed(9).slice(2)}$`,Bi="?"+Lt,Is=`<${Bi}>`,Gt=document,fe=()=>Gt.createComment(""),ye=i=>i===null||typeof i!="object"&&typeof i!="function",vn=Array.isArray,zs=i=>vn(i)||typeof i?.[Symbol.iterator]=="function",hn=`[ 	
\f\r]`,ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oi=/-->/g,Fi=/>/g,Ft=RegExp(`>|${hn}(?:([^\\s"'>=/]+)(${hn}*=${hn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ui=/'/g,Gi=/"/g,Vi=/^(?:script|style|textarea|title)$/i,_n=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),D=_n(1),g=_n(2),Or=_n(3),mt=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ki=new WeakMap,Ut=Gt.createTreeWalker(Gt,129);function ji(i,t){if(!vn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return zi!==void 0?zi.createHTML(t):t}var Os=(i,t)=>{let e=i.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",r=ge;for(let a=0;a<e;a++){let u=i[a],c,d,h=-1,m=0;for(;m<u.length&&(r.lastIndex=m,d=r.exec(u),d!==null);)m=r.lastIndex,r===ge?d[1]==="!--"?r=Oi:d[1]!==void 0?r=Fi:d[2]!==void 0?(Vi.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=Ft):d[3]!==void 0&&(r=Ft):r===Ft?d[0]===">"?(r=o??ge,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?Ft:d[3]==='"'?Gi:Ui):r===Gi||r===Ui?r=Ft:r===Oi||r===Fi?r=ge:(r=Ft,o=void 0);let y=r===Ft&&i[a+1].startsWith("/>")?" ":"";s+=r===ge?u+Is:h>=0?(n.push(c),u.slice(0,h)+Wi+u.slice(h)+Lt+y):u+Lt+(h===-2?a:y)}return[ji(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},be=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,r=0,a=t.length-1,u=this.parts,[c,d]=Os(t,e);if(this.el=i.createElement(c,n),Ut.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Ut.nextNode())!==null&&u.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Wi)){let m=d[r++],y=o.getAttribute(h).split(Lt),v=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?pn:v[1]==="?"?gn:v[1]==="@"?fn:qt}),o.removeAttribute(h)}else h.startsWith(Lt)&&(u.push({type:6,index:s}),o.removeAttribute(h));if(Vi.test(o.tagName)){let h=o.textContent.split(Lt),m=h.length-1;if(m>0){o.textContent=Pe?Pe.emptyScript:"";for(let y=0;y<m;y++)o.append(h[y],fe()),Ut.nextNode(),u.push({type:2,index:++s});o.append(h[m],fe())}}}else if(o.nodeType===8)if(o.data===Bi)u.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Lt,h+1))!==-1;)u.push({type:7,index:s}),h+=Lt.length-1}s++}}static createElement(t,e){let n=Gt.createElement("template");return n.innerHTML=t,n}};function Zt(i,t,e=i,n){if(t===mt)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=ye(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=Zt(i,o._$AS(i,t.values),o,n)),t}var mn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??Gt).importNode(e,!0);Ut.currentNode=o;let s=Ut.nextNode(),r=0,a=0,u=n[0];for(;u!==void 0;){if(r===u.index){let c;u.type===2?c=new ve(s,s.nextSibling,this,t):u.type===1?c=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(c=new yn(s,this,t)),this._$AV.push(c),u=n[++a]}r!==u?.index&&(s=Ut.nextNode(),r++)}return Ut.currentNode=Gt,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},ve=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Zt(this,t,e),ye(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==mt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&ye(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=be.createElement(ji(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new mn(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Ki.get(t.strings);return e===void 0&&Ki.set(t.strings,e=new be(t)),e}k(t){vn(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new i(this.O(fe()),this.O(fe()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Ii(t).nextSibling;Ii(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},qt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(t,e=this,n,o){let s=this.strings,r=!1;if(s===void 0)t=Zt(this,t,e,0),r=!ye(t)||t!==this._$AH&&t!==mt,r&&(this._$AH=t);else{let a=t,u,c;for(t=s[0],u=0;u<s.length-1;u++)c=Zt(this,a[n+u],e,u),c===mt&&(c=this._$AH[u]),r||=!ye(c)||c!==this._$AH[u],c===x?t=x:t!==x&&(t+=(c??"")+s[u+1]),this._$AH[u]=c}r&&!o&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},pn=class extends qt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},gn=class extends qt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},fn=class extends qt{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=Zt(this,t,e,0)??x)===mt)return;let n=this._$AH,o=t===x&&n!==x||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==x&&(n===x||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},yn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Zt(this,t)}};var Fs=bn.litHtmlPolyfillSupport;Fs?.(be,ve),(bn.litHtmlVersions??=[]).push("3.3.3");var Zi=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new ve(t.insertBefore(fe(),s),s,void 0,e??{})}return o._$AI(i),o};var wn=globalThis,bt=class extends kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};bt._$litElement$=!0,bt.finalized=!0,wn.litElementHydrateSupport?.({LitElement:bt});var Us=wn.litElementPolyfillSupport;Us?.({LitElement:bt});(wn.litElementVersions??=[]).push("4.2.2");var Ie=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var Gs={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Re},Ks=(i=Gs,t,e)=>{let{kind:n,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){let{name:r}=e;return{set(a){let u=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,u,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(n==="setter"){let{name:r}=e;return function(a){let u=this[r];t.call(this,a),this.requestUpdate(r,u,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function Yt(i){return(t,e)=>typeof e=="object"?Ks(i,t,e):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,t,e)}function Jt(i){return Yt({...i,state:!0,attribute:!1})}var Oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=i=>(...t)=>({_$litDirective$:i,values:t}),Xt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var St=Fe(class extends Xt{constructor(i){if(super(i),i.type!==Oe.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return mt}});var qi="important",Ws=" !"+qi,V=Fe(class extends Xt{constructor(i){if(super(i),i.type!==Oe.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(Ws);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?qi:""):e[n]=o}}return mt}});var Yi=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Ji=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],Xi=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],$n=385000.49;var R=Math.PI/180,pt=180/Math.PI,Bs=1495978707e-1,to=6378.14,_e=-.833,vt=-6,Tt=-12,At=-18,xn=120*1e3;function we(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Qt(i){return(i-2451545)/36525}function K(i){let t=i%360;return t<0?t+360:t}function Vs(i){let t=Qt(i);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function js(i){let t=i-2451545,e=Qt(i),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return K(n)}function Mn(i){let t=Qt(i),e=K(280.46646+t*(36000.76983+t*3032e-7)),n=K(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*R)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*R)*(.019993-101e-6*t)+Math.sin(3*n*R)*289e-6,s=e+o,r=K(125.04-1934.136*t),a=s-.00569-.00478*Math.sin(r*R),c=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*R),d=a*R,h=c*R,m=K(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*pt),y=Math.asin(Math.sin(h)*Math.sin(d))*pt;return{ra:m,dec:y}}function Zs(i){let t=Qt(i),e=K(280.46646+t*(36000.76983+t*3032e-7)),n=K(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*R)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*R)*(.019993-101e-6*t)+Math.sin(3*n*R)*289e-6,s=K(125.04-1934.136*t);return K(e+o-.00569-.00478*Math.sin(s*R))}function qs(i){let t=we(i),e=Qt(t),n=K(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*R)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*R)*(.019993-101e-6*e)+Math.sin(3*n*R)*289e-6,r=(n+s)*R;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*Bs}function kn(i,t,e,n){let o=K(js(n)+e),s=K(o-i.ra),r=t*R,a=i.dec*R,u=s*R,c=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(u))*pt,d=K(Math.atan2(Math.sin(u),Math.cos(u)*Math.sin(r)-Math.tan(a)*Math.cos(r))*pt+180);return{altitude:c,azimuth:d}}function Ue(i,t){let e=we(i);return kn(Mn(e),t.latitude,t.longitude,e).altitude}function Ge(i,t){let e=we(i);return kn(Mn(e),t.latitude,t.longitude,e)}function Ys(i){let t=i;return{D:K(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:K(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:K(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:K(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function eo(i){let t=Qt(i),e=K(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=Ys(t),o=e;for(let a of Yi){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;o+=a[4]*Math.sin(u*R)}let s=0;for(let a of Ji){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;s+=a[4]*Math.sin(u*R)}let r=$n;for(let a of Xi){let u=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;r+=a[4]*Math.cos(u*R)}return{longitude:K(o),latitude:s,distanceKm:r}}function no(i,t,e){let n=Vs(e)*R,o=i*R,s=t*R,r=K(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*pt),a=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*pt;return{ra:r,dec:a}}function Ht(i,t){let e=we(i),n=eo(e),o=no(n.longitude,n.latitude,e),s=kn(o,t.latitude,t.longitude,e),r=Math.asin(to/n.distanceKm)*pt,a=s.altitude-r*Math.cos(s.altitude*R);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:n}}function Js(i){return .7275*(Math.asin(to/i)*pt)-.5667}var Xs=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],Qs=29.530588853;function Ke(i){let t=we(i),e=eo(t),n=no(e.longitude,e.latitude,t),o=Mn(t),s=Zs(t),r=qs(i),a=e.distanceKm,u=e.latitude*R,c=Math.acos(Math.min(1,Math.max(-1,Math.cos(u)*Math.cos((e.longitude-s)*R)))),d=Math.atan2(r*Math.sin(c),a-r*Math.cos(c)),h=K(d*pt),m=(1+Math.cos(d))/2,y=(o.ra-n.ra)*R,v=o.dec*R,M=n.dec*R,_=K(Math.atan2(Math.cos(v)*Math.sin(y),Math.sin(v)*Math.cos(M)-Math.cos(v)*Math.sin(M)*Math.cos(y))*pt),A=K(e.longitude-s)/360,f=Math.min(7,Math.floor(A*8+.5)%8),w=A*29.530588853;return{illumination:m,phaseAngle:h,elongation:c*pt,phaseIndex:f,phaseKey:Xs[f],brightLimbAngle:_,moonAgeDays:w,waxing:A<.5,distanceKm:a}}function We(i,t,e,n,o){let s=[];if(!(t>i))return s;let r=Math.max(2,Math.ceil((t-i)/e)),a=(t-i)/r,u=i,c=n(i)-o;for(let d=1;d<=r;d++){let h=i+d*a,m=n(h)-o;if(c===0)s.push({time:u,rising:m>0});else if(c<0&&m>=0||c>0&&m<=0){let y=u,v=h,M=c;for(let _=0;_<50&&v-y>1;_++){let A=(y+v)/2,f=n(A)-o;f<0&&M<0||f>0&&M>0?(y=A,M=f):v=A}s.push({time:(y+v)/2,rising:m>c})}u=h,c=m}return s}function Qi(i,t,e,n){let o=i.find(s=>s.rising===t&&s.time>=e&&s.time<n);return o?new Date(o.time):null}function Sn(i,t,e,n=4){let o=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),a=e.getTime(),u=k=>Ue(k,i),c=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let k=r;k<a;k+=d)c.push({time:k,altitude:u(k)});c.push({time:a,altitude:u(a)});let h=-1/0,m=1/0;for(let k of c)k.altitude>h&&(h=k.altitude),k.altitude<m&&(m=k.altitude);let y=[["sunrise","sunset",_e],["civilDawn","civilDusk",vt],["nauticalDawn","nauticalDusk",Tt],["astronomicalDawn","astronomicalDusk",At]],v={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[k,$,O]of y){let Z=We(o,s,xn,u,O);v[k]=Qi(Z,!0,r,a),v[$]=Qi(Z,!1,r,a)}let M=r,_=-1/0,A=120*1e3;for(let k=r;k<=a;k+=A){let $=u(k);$>_&&(_=$,M=k)}let f=Math.max(r,M-A),w=Math.min(a,M+A);for(let k=0;k<40&&w-f>1e3;k++){let $=f+(w-f)/3,O=w-(w-f)/3;u($)<u(O)?f=$:w=O}v.solarNoon=new Date((f+w)/2);let C="none";return m>_e?C="polar-day":h<_e&&(C="polar-night"),{dayStart:t,dayEnd:e,samples:c,maxAltitude:h,minAltitude:m,events:v,polar:C}}function Tn(i,t,e,n=48){let o=typeof t=="number"?t:t.getTime();if(!Number.isFinite(o)||!Number.isFinite(e))return null;let s=a=>Ue(a,i),r=We(o,o+n*60*60*1e3,xn,s,e)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function tr(i,t,e,n=10){let o=t.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),a=[];for(let d=o;d<s;d+=r)a.push({time:d,altitude:Ht(d,i).apparentAltitude});a.push({time:s,altitude:Ht(s,i).apparentAltitude});let u=-1/0,c=1/0;for(let d of a)d.altitude>u&&(u=d.altitude),d.altitude<c&&(c=d.altitude);return{samples:a,maxAltitude:u,minAltitude:c}}function io(i,t,e,n,o=10){let s=t.getTime(),r=e.getTime(),a=u=>{if(!u)return null;let c=u.getTime();return c>=s&&c<r?c:null};return{profile:tr(i,t,e,o),rise:a(n.previousRise)??a(n.nextRise),set:a(n.previousSet)??a(n.nextSet)}}function oo(i,t){let e=i.getTime(),n=e-1800*60*1e3,o=e+1800*60*1e3,r=We(n,o,xn,y=>{let v=Ht(y,t);return v.altitude-Js(v.distanceKm)},0),a=r.filter(y=>y.rising),u=r.filter(y=>!y.rising),c=a.find(y=>y.time>e)??null,d=[...a].reverse().find(y=>y.time<=e)??null,h=u.find(y=>y.time>e)??null,m=[...u].reverse().find(y=>y.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:m?new Date(m.time):null,nextRise:c?new Date(c.time):null,nextSet:h?new Date(h.time):null}}function so(i){return i>0?"day":i>vt?"civil":i>Tt?"nautical":i>At?"astronomical":"night"}function er(i){return(((Ke(i).moonAgeDays/Qs-.5)%1+1)%1+.5)%1-.5}function An(i,t){let e=typeof i=="number"?i:i.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?We(e,n,360*60*1e3,er,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function ro(i,t=32){let e=typeof i=="number"?i:i.getTime(),o=An(e,e+t*24*60*60*1e3)[0];if(!o)return null;let s=Ke(o).illumination;return s<.98?null:{time:o,illumination:s}}function ao(i,t,e=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,a=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,c=s,d=s;for(let h=s;h<=r;h+=o){let m=Ht(h,t).distanceKm;m<a&&(a=m,c=h),m>u&&(u=m,d=h)}return{current:Ht(n,t).distanceKm,min:a,minTime:new Date(c),max:u,maxTime:new Date(d),mean:$n}}function Be(i,t,e="sun"){return(e==="sun"?Ge(i,t):Ht(i,t)).azimuth}function b(i,t,e){return Number.isNaN(i)?t:Math.min(e,Math.max(t,i))}function En(i,t,e){return i+(t-i)*e}function l(i,t=0){let e=10**t;return Math.round(i*e)/e}function lo(i){let t=i.trim().replace(/^#/,""),e=t.length===3?t.split("").map(o=>o+o).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]}function nr(i){return`#${i.map(t=>Math.round(b(t,0,255)).toString(16).padStart(2,"0")).join("")}`}function Dn(i,t,e){let n=lo(i),o=lo(t);if(!n||!o)return t;let s=b(e,0,1);return nr([En(n[0],o[0],s),En(n[1],o[1],s),En(n[2],o[2],s)])}function Cn(i){return typeof i=="number"&&Number.isFinite(i)}function ct(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let t=Number(i.replace(",","."));if(Number.isFinite(t))return t}return null}function uo(i){return i.length===0?"":i.map((t,e)=>`${e===0?"M":"L"}${l(t.x,2)} ${l(t.y,2)}`).join(" ")}function Ve(i,t=.5){if(i.length<3)return uo(i);let e=[`M${l(i[0].x,2)} ${l(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],a=i[n+2]??r,u=s.x+(r.x-o.x)/6*t*2,c=s.y+(r.y-o.y)/6*t*2,d=r.x-(a.x-s.x)/6*t*2,h=r.y-(a.y-s.y)/6*t*2;e.push(`C${l(u,2)} ${l(c,2)} ${l(d,2)} ${l(h,2)} ${l(r.x,2)} ${l(r.y,2)}`)}return e.join(" ")}function je(i,t,e=!1){if(i.length===0)return"";let n=e?Ve(i):uo(i),o=i[0],s=i[i.length-1];return`${n} L${l(s.x,2)} ${l(t,2)} L${l(o.x,2)} ${l(t,2)} Z`}function Et(i,t,e){let n=e*Math.PI/180;return{x:i.x-t*Math.sin(n),y:i.y-t*Math.cos(n)}}function co(i,t,e){let n=b(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${l(i.x-t,2)} ${l(i.y,2)} a${l(t,2)} ${l(t,2)} 0 1 1 ${l(t*2,2)} 0 a${l(t,2)} ${l(t,2)} 0 1 1 ${l(-t*2,2)} 0 Z`;let o=t*(1-2*n),s=1,r=o>0?0:1,a={x:i.x-t,y:i.y},u={x:i.x+t,y:i.y};return`M${l(a.x,2)} ${l(a.y,2)} A${l(t,2)} ${l(t,2)} 0 0 ${s} ${l(u.x,2)} ${l(u.y,2)} A${l(t,2)} ${l(Math.abs(o),4)} 0 0 ${r} ${l(a.x,2)} ${l(a.y,2)} Z`}function ho(i=new Date){let t=i.getTime();return t+(6e4-t%6e4)+250}var ir=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function te(i){let{size:t,illumination:e,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:u}=i,c={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=co(c,d,e),m=r&&t>=26,y=l(-n,2);return g`
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
              ${m?g`<g clip-path="url(#${u}-clip)" opacity="0.16">
                      <clipPath id="${u}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${ir.map(v=>{let M={x:c.x+v.x*d,y:c.y+v.y*d};return g`<circle
                          cx="${l(M.x,2)}" cy="${l(M.y,2)}"
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
  `}function Nn(i,t,e,n){let o=Et(i,t,e),s=e*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),u=b(t*.12,4,9),c=b(t*.07,2.5,5),d={x:o.x+r*u,y:o.y+a*u},h={x:o.x-a*c,y:o.y+r*c},m={x:o.x+a*c,y:o.y-r*c};return g`
    <polygon
      points="${l(d.x,2)},${l(d.y,2)} ${l(h.x,2)},${l(h.y,2)} ${l(m.x,2)},${l(m.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var qe="sun-moon-card",zn="sun-moon-card",fo="sun-moon-card-editor";var On=24,or=16,Ln=4,sr=12,rr=36,$e=[2,12],Rt=[320,1200],Pt=[260,800];function ee(i){return i?[On,800]:[120,800]}var E={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun"},yo=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],bo=400,vo=250,_o=1200*1e3,Fn={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},Un={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},wo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],Gn=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],It={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon"],remainingTimeFocus:["sun","next"]},$o=700,ar=260,Kn=16,Wn=4,xo=72,mo=10,In=56,lr=84,ur=96,Hn=74,cr=In+8,dr=12,hr=10,nt=4,Ze=4,po=30,go=44,mr=26,pr=72,Bn=96,Rn=20,Pn=18;function Mo(i,t,e){if(e.minimal_mode){let P=(e.minimal_show_times||e.minimal_show_zenith)&&i>=rr?sr:0,U=Math.max(or,i-2*Ln-P);return{padding:Ln,minimalTimesHeight:P,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,t-2*Ln),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:U,minimal:!0,compact:!1}}let n=e.compact_mode,o=n?hr:dr,s=Math.max(40,i-2*o),r=0,a=e.show_footer&&!n?Rn+nt:0,u=po+nt+go+nt+a+(Pn+Ze)+Hn,c=e.show_header&&!n&&s>=u,d=c?po:0;s-=d,c&&(s-=nt,r+=nt);let h=n?mr:go,m=e.show_events&&s-(h+nt)-a>=lr,y=m?h:0;s-=y,m&&(s-=nt,r+=nt);let v=e.show_astronomical_details?Bn:pr,M=!n&&(e.show_sun||e.show_moon)&&s-(v+nt)-a>=ur,_=M?v:0;s-=_,M&&(s-=nt,r+=nt);let A=e.show_footer&&!n&&m&&s-(Rn+nt)>=cr,f=A?Rn:0;s-=f,A&&(s-=nt,r+=nt);let w=Math.max(In,s),C=e.show_day_chart&&!n&&m&&w-Pn-Ze>=Hn,k=C?Pn:0;C&&(r+=Ze);let $=Math.max(In,w-k-(C?Ze:0)),O=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),Z=O&&t>=$o&&$>=Hn,tt=Math.max(80,t-2*o),W=Z?Math.round(Math.min(ar,(tt-mo)/3)):0,it=Math.max(120,Z?tt-mo-W:tt);return{padding:o,showHeader:c,showEvents:m,showDetails:M,showFooter:A,showLegend:C,skyViewSide:Z,skyViewInline:!Z&&O&&M,skyViewWidth:W,chartWidth:it,gaps:r,headerHeight:d,eventsHeight:y,detailsHeight:_,footerHeight:f,legendHeight:k,chartHeight:$,minimal:!1,minimalTimesHeight:0,compact:n}}function ko(i){return i>=$o?360:320}function Ye(){return{type:`custom:${qe}`,card_height:340}}var Vn={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function j(i,t,e){let o=(Vn[i]??Vn.en)[t]??Vn.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function Kt(i,t){return((i&&i!=="auto"?i:t)??"").toLowerCase().startsWith("de")?"de":"en"}function Ao(i,t,e){let n=i;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var So=new Map;function jn(i,t,e){let n=`${t}|${i}`,o=So.get(n);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(t,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(u=>u.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return So.set(n,s),s}var To=new Map;function gr(i,t,e){let n=`${i}|${t}|${e}`,o=To.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}To.set(n,o)}return o}function Q(i,t){return gr(t.locale,t.timeZone,t.hour12).format(i)}function Eo(i,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function Zn(i,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}catch{return i.toFixed(t)}}function lt(i,t=1,e="de-DE"){return`${Zn(i,t,e)}\xB0`}function Je(i,t="de-DE"){return`${Zn(Math.round(i),0,t)} km`}function Do(i,t="de-DE"){let e=i<0?"\u2212":"+",n=Math.round(Math.abs(i)),o=Math.floor(n/60),s=n%60,r=t.startsWith("de")?":":"h ",a=t.startsWith("de")?"":"m";return`${e}${o}${r}${String(s).padStart(2,"0")}${a}`}function qn(i){let t=Math.max(0,Math.round(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function Co(i,t){let e=Math.max(0,Math.round(i));if(e<60)return t("countdownMinutes",{minutes:String(e)});let n=Math.floor(e/60),o=e%60;return n<24?t("countdownHours",{hours:String(n),minutes:String(o)}):t("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function Xe(i,t){return t(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function No(i,t="de-DE"){return`${Zn(i*100,0,t)} %`}function Wt(i,t){let e=(i%360+360)%360,n=Gn[0],o=1/0;for(let r of Gn){let a=Math.abs((e-r.deg+540)%360-180);a<o&&(o=a,n=r)}let s=`dir${n.key}`;return j(t,s)}function Lo(i,t,e,n){return{language:i,locale:t,timeZone:e,hour12:n,t:(o,s)=>j(i,o,s)}}function Ho(i,t){if(i.length<=t)return i;let e=i.length/t,n=[];for(let s=0;s<t;s++)n.push(i[Math.floor(s*e)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function fr(i,t,e,n,o){if(i.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),a,u;if(s!==void 0&&r!==void 0&&r>s)a=n(s),u=n(r);else if(e==="polar-day")a=i[0].x,u=i[i.length-1].x;else return null;let c=i.filter(d=>d.x>=a-.5&&d.x<=u+.5);return c.length<2?null:{path:je(c,o,!0),cx:(a+u)/2,cy:o,r:Math.max(6,(u-a)/2)}}function yr(i,t){let e=t?Math.max(i.maxAltitude,t.maxAltitude):i.maxAltitude,n=t?Math.min(i.minAltitude,t.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(e-o)*.1),r=b(e+s,-18,90.5);return[b(Math.max(-28,n-2),-90,r-6),r]}function Yn(i,t,e=2.2){let n=[0,vt,Tt,At],o=[t.day,t.civil,t.nautical,t.astronomical,t.night];if(i>e/2){let s=b(1-i/12,0,1)*.5;return Dn(t.day,t.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+e/2,a=n[s]-e/2;if(i>=r)return o[s];if(i>a){let u=(r-i)/e;return Dn(o[s],o[s+1],u*u*(3-2*u))}}return o[o.length-1]}function br(i,t,e,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,a=t+e*(1-r);o.push({offset:r,color:Yn(a,i)})}return o}function vr(i,t,e,n,o,s){let r=i.samples;if(r.length<2)return[];let a=[],u=(d,h)=>{d&&!Number.isNaN(d.getTime())&&a.push({time:d.getTime(),color:h})};u(t.astronomicalDawn,e.astronomical),u(t.nauticalDawn,e.nautical),u(t.civilDawn,e.civil),u(t.sunrise,e.glow),u(t.solarNoon,e.day),u(t.sunset,e.glow),u(t.civilDusk,e.civil),u(t.nauticalDusk,e.nautical),u(t.astronomicalDusk,e.astronomical);let c=[{offset:0,color:Yn(r[0].altitude,e)},...a.map(d=>({offset:b((n(d.time)-o)/s,0,1),color:d.color})),{offset:1,color:Yn(r[r.length-1].altitude,e)}];return c.sort((d,h)=>d.offset-h.offset),c}function Jn(i){let{profile:t,events:e,now:n,width:o,height:s,palette:r,format:a,showSun:u,showMoon:c,moon:d,moonPath:h,showTwilight:m,twilightLevel:y,animations:v,cardStyle:M,minimal:_,sunMarkerSize:A,uid:f,showAstronomicalLayers:w,currentAltitude:C}=i,k=Math.max(_?60:120,o),$=Math.max(_?12:56,s),O=_?2:4,Z=_?2:4,tt=_?2:6,W=!_&&$>=112,it=W?b(l($*.13,1),13,20):0,T=O,S=Math.max(10,k-O-Z),P=tt,U=Math.max(10,$-tt-it),H=P+U,[q,et]=yr(t,h?.profile??null),Ct=Math.max(1,et-q),J=t.dayStart.getTime(),wt=t.dayEnd.getTime(),z=Math.max(1,wt-J),G=p=>T+(p-J)/z*S,ot=p=>H-(b(p,-95,95)-q)/Ct*U,zt=ot(0),Me=b(Math.round(S/1.6),60,361),F=Ho(t.samples,Me).map(p=>({x:G(p.time),y:ot(p.altitude)})),st=br(r,q,Ct),ut=vr(t,e,r,G,T,S),N=`${f}-area`,rt=`${f}-line`,gt=`${f}-clip`,dt=`${f}-glow`,se=`${f}-sky`,ui=`${f}-soft`,ci=`${f}-soft-fade`,di=`${f}-foot`,hi=`${f}-foot-fade`,mi=`${f}-side`,pi=`${f}-side-fade`,ft=M==="horizon",es=je(F,ft?l(zt,2):H+1,!0),ns=Ve(F),gi=h?Ho(h.profile.samples,b(Math.round(S/2),40,240)).map(p=>({x:G(p.time),y:ot(p.altitude)})):null,en=gi&&!_?Ve(gi):null,nn="var(--smc-moon-line, #cbd5e1)",is=b(l($*.013,2),1.1,1.9),os=je(F,P-1,!0),re=M==="flat"?.6:ft?.3:1,ss=ft?0:l(.15*re,3),$t=P-1,on=H+1,Nt=Math.max(1,on-$t),rs=b(U*.14,_?1.5:6,18),as=b(U*.08,_?1:4,12),ls=b(S*.02,_?2:6,14),fi=b(l(U*.06,1),_?1.5:4,10),us=l(b(rs/Nt,0,.45),4),yi=l(1-b(as/Nt,0,.45),4),Vt=T-1,ke=T+S+1,bi=l(b(ls/Math.max(1,ke-Vt),0,.4),4),cs=Math.max(16,S*.16),ds=b(U*.45,9,46),Se=[];U>=34&&(e.sunrise&&Se.push({id:`${f}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&Se.push({id:`${f}-glow-set`,time:e.sunset,color:r.glow}));let jt=_?null:fr(F,e,t.polar,G,zt),vi=`${f}-dome`,Y=a.t,ae=[],le=p=>{p.time&&!Number.isNaN(p.time.getTime())&&ae.push({secondary:!1,...p})};if(e.sunrise&&le({key:"sunrise",time:e.sunrise,label:Y("sunrise"),shortLabel:Y("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&le({key:"sunset",time:e.sunset,label:Y("sunset"),shortLabel:Y("sunsetShort"),kind:"sunset",altitude:0}),m&&(e.civilDawn&&le({key:"civilDawn",time:e.civilDawn,label:Y("civilDawn"),shortLabel:Y("civilDawnShort"),kind:"dawn",altitude:vt}),e.civilDusk&&le({key:"civilDusk",time:e.civilDusk,label:Y("civilDusk"),shortLabel:Y("civilDuskShort"),kind:"dusk",altitude:vt}),y==="all"||w)){let p=[["nauticalDawn","dawn","nauticalDawn",Tt],["nauticalDusk","dusk","nauticalDusk",Tt],["astronomicalDawn","dawn","astronomicalDawn",At],["astronomicalDusk","dusk","astronomicalDusk",At]];for(let[L,I,B,at]of p){let de=e[L];de&&le({key:L,time:de,label:Y(B),shortLabel:Y(B),kind:I,altitude:at,secondary:!0})}}ae.sort((p,L)=>p.time.getTime()-L.time.getTime());let Te=b(l($*.062,1),7.5,10.5),sn=b(l(Te+5,1),11,it||15),hs=ae.filter(p=>!p.secondary),ms=ae.filter(p=>p.secondary),ps=S<240?3:S<340?4:6,_i=_?[]:[...hs,...ms].slice(0,Math.max(2,ps)).sort((p,L)=>p.time.getTime()-L.time.getTime()),gs=_i.length>3||S<300,rn=[],an=-1/0;for(let p of _i){let L=gs?p.shortLabel:p.label,I=L.length*Te*.56+8,B=G(p.time.getTime());B=b(B,T+I/2,T+S-I/2),B-I/2<an+3&&(B=an+3+I/2),!(B+I/2>T+S+.5)&&(an=B+I/2,rn.push({x:B,width:I,text:L,secondary:p.secondary}))}let xt=b(G(n.getTime()),T,T+S),fs=r.day,Ot=b(l($*.16,1),Math.min(2.8,A),A),wi=b(l(Ot*.22,2),.8,1.4),Mt=b(l(Ot*1.1,1),3.5,7),$i=(p,L)=>U<=L*2?P+U/2:b(ot(p),P+L,H-L),xi=$i(C,Ot),ht=c&&d&&!_?{altitude:d.altitude,y:$i(d.altitude,Mt),clamped:d.altitude<q||d.altitude>et}:null,ys=ht?Math.abs(ht.y-xi):Number.POSITIVE_INFINITY,ln=Ot+Mt+2,ue=ht?ys>=Ot+Mt+1?xt:xt+ln+Mt<=T+S?xt+ln:Math.max(T+Mt,xt-ln):null,bs=v?"smc-pulse":"",vs=v?`url(#${dt})`:"",un=[{altitude:0,label:Y("horizon"),key:"horizon"}];w||y==="all"?un.push({altitude:vt,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Tt,label:`${Y("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:At,label:`${Y("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&un.push({altitude:vt,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"});let _s=!_&&U>=86&&S>=250,ws=un.filter(p=>(!_||p.key==="horizon")&&p.altitude>q+.5&&p.altitude<et-.5),$s=b(l($*.055,1),7.5,9.5),ce=e.solarNoon,Mi=!_&&!!ce&&t.maxAltitude>0&&U>=104&&S>=220&&w,ki=Mi?`${Y("zenith")} ${Q(ce,a)} \xB7 ${lt(t.maxAltitude,1,a.locale)}`:"",Ae=b(l($*.055,1),7.5,9.5),Ee=ki.length*Ae*.56+10,Si=ce?b(G(ce.getTime()),T+Ee/2,T+S-Ee/2):0,Ti=ce?ot(t.maxAltitude):0,De=Ae+5,Ai=b(Ti-De-4,P,Math.max(P,Ti+10)),Ei=_?1:S<220?4:S<420?6:8,Di=[];for(let p=1;p<Ei;p++)Di.push(T+S*p/Ei);return g`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(k,1)} ${l($,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${Y("title")}"
    >
      <defs>
        <linearGradient id="${N}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(P,1)}" x2="0" y2="${l(H,1)}">
          ${st.map(p=>g`<stop offset="${l(p.offset*100,3)}%" stop-color="${p.color}" />`)}
        </linearGradient>
        <linearGradient id="${rt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l(P,1)}" x2="0" y2="${l(H,1)}">
          ${st.map(p=>g`<stop offset="${l(p.offset*100,3)}%" stop-color="${p.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${ut.length>=2?g`<linearGradient id="${se}" gradientUnits="userSpaceOnUse"
                x1="${l(T,1)}" y1="0" x2="${l(T+S,1)}" y2="0">
                ${ut.map(p=>g`<stop offset="${l(p.offset*100,3)}%" stop-color="${p.color}" />`)}
              </linearGradient>`:g``}
        ${Se.map(p=>g`<radialGradient id="${p.id}">
              <stop offset="0%" stop-color="${p.color}" stop-opacity="${l(.5*re,3)}" />
              <stop offset="45%" stop-color="${p.color}" stop-opacity="${l(.2*re,3)}" />
              <stop offset="100%" stop-color="${p.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${jt?g`<radialGradient id="${vi}" gradientUnits="userSpaceOnUse"
                cx="${l(jt.cx,1)}" cy="${l(jt.cy,1)}" r="${l(jt.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${l(.3*re,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${l(.18*re,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:g``}
        <linearGradient id="${ci}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l($t,1)}" x2="0" y2="${l(on,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${us}" stop-color="#ffffff" />
          <stop offset="${yi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ui}" maskUnits="userSpaceOnUse"
          x="${l(T-2,1)}" y="${l($t,1)}"
          width="${l(S+4,1)}" height="${l(Nt,1)}">
          <rect
            x="${l(T-2,1)}" y="${l($t,1)}"
            width="${l(S+4,1)}" height="${l(Nt,1)}"
            fill="url(#${ci})" />
        </mask>
        <linearGradient id="${hi}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l($t,1)}" x2="0" y2="${l(on,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${yi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${di}" maskUnits="userSpaceOnUse"
          x="${l(T-2,1)}" y="${l($t,1)}"
          width="${l(S+4,1)}" height="${l(Nt,1)}">
          <rect
            x="${l(T-2,1)}" y="${l($t,1)}"
            width="${l(S+4,1)}" height="${l(Nt,1)}"
            fill="url(#${hi})" />
        </mask>
        <linearGradient id="${pi}" gradientUnits="userSpaceOnUse"
          x1="${l(Vt,1)}" y1="0" x2="${l(ke,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${bi}" stop-color="#ffffff" />
          <stop offset="${l(1-bi,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${mi}" maskUnits="userSpaceOnUse"
          x="${l(Vt,1)}" y="${l($t,1)}"
          width="${l(ke-Vt,1)}" height="${l(Nt,1)}">
          <rect
            x="${l(Vt,1)}" y="${l($t,1)}"
            width="${l(ke-Vt,1)}" height="${l(Nt,1)}"
            fill="url(#${pi})" />
        </mask>
        <clipPath id="${gt}">
          <rect x="${l(T-1,1)}" y="${l(P-2,1)}"
            width="${l(S+2,1)}" height="${l(U+4,1)}"
            rx="${fi}" ry="${fi}" />
        </clipPath>
        ${v?g`<filter id="${dt}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${l(Ot*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:g``}
      </defs>

      <g clip-path="url(#${gt})">
        ${Di.map(p=>g`<line x1="${l(p,1)}" y1="${l(P,1)}" x2="${l(p,1)}" y2="${l(H,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${mi})">
        <path d="${es}" fill="url(#${N})" opacity="0.9" mask="url(#${di})" />
        <g mask="url(#${ui})">
          ${ut.length>=2&&!ft?g`<path d="${os}" fill="url(#${se})" opacity="${ss}" />`:g``}
          ${Se.map(p=>{let L=b(G(p.time.getTime()),T,T+S),I=b(zt,P,H);return g`<ellipse
                cx="${l(L,1)}" cy="${l(I,1)}"
                rx="${l(cs,1)}" ry="${l(ds,1)}"
                fill="url(#${p.id})" />`})}
          ${jt&&!ft?g`<path d="${jt.path}" fill="url(#${vi})" opacity="0.95" />`:g``}
        </g>
        </g>
        ${en?g`<path
                class="moon-curve"
                data-body="moon"
                d="${en}"
                fill="none"
                stroke="${nn}"
                stroke-width="${is}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${ft?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:g``}
        ${h&&en?g`<g class="moon-events">
                ${[[h.rise,"moonrise"],[h.set,"moonset"]].filter(p=>p[0]!==null).map(([p,L])=>{let I=b(G(p),T,T+S),B=b(ot(0),P,H),at=b(l($*.05,1),4,8);return g`<g>
                      <title>${a.t(L)} ${Q(new Date(p),a)}</title>
                      <line
                        x1="${l(I,1)}"
                        y1="${l(B-at,1)}"
                        x2="${l(I,1)}"
                        y2="${l(B+at,1)}"
                        stroke="${nn}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${l(I,1)}"
                        cy="${l(B,1)}"
                        r="${b(l($*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${nn}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:g``}
        <path
          d="${ns}"
          fill="none"
          stroke="url(#${rt})"
          stroke-width="${b(l($*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${ws.map(p=>{let L=ot(p.altitude),I=p.key==="horizon";return g`<g>
            <line
              x1="${l(T,1)}" y1="${l(L,1)}"
              x2="${l(T+S,1)}" y2="${l(L,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${I&&ft?1.5:I?1:.6}"
              stroke-dasharray="${I&&ft?"999 0":I?"3 3":"2 4"}"
              opacity="${I&&ft?.9:I?.6:ft?.3:.45}"
            />
            ${_s?g`<text
                    x="${l(T+3,1)}"
                    y="${l(L-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${$s}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${p.label}</text>`:g``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${ae.map(p=>{let L=b(G(p.time.getTime()),T,T+S),I=b(ot(p.altitude),P,H),B=!p.secondary,at=B?b(l($*.022,1),1.8,3):1.4,de="var(--smc-marker-strong, rgba(255,255,255,0.9))",Ci="var(--smc-marker-soft, rgba(255,255,255,0.55))",xs=p.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":p.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":p.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",Ms=B?xs:Ci,ks=B?de:Ci,Ss=p.kind==="sunrise"||p.kind==="sunset"?g`
                <circle cx="${l(L,1)}" cy="${l(I,1)}" r="${at+1}"
                  fill="${p.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${l(L-at*2.6,1)}"
                  y1="${l(p.kind==="sunrise"?I+at+2:I-at-2,1)}"
                  x2="${l(L+at*2.6,1)}"
                  y2="${l(p.kind==="sunrise"?I+at+2:I-at-2,1)}"
                  stroke="${de}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:g`<circle cx="${l(L,1)}" cy="${l(I,1)}" r="${at}"
                  fill="${ks}" opacity="0.85" />`;return g`<g>
            <line
              x1="${l(L,1)}" y1="${l(P,1)}"
              x2="${l(L,1)}" y2="${l(H,1)}"
              stroke="${Ms}" stroke-width="${B?1:.7}"
              stroke-dasharray="3 3" opacity="${B?.5:.25}" />
            ${Ss}
          </g>`})}
      </g>

      <g class="now-marker">
        <line
          x1="${l(xt,1)}" y1="${l(P,1)}"
          x2="${l(xt,1)}" y2="${l(H,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${b(l($*.012,2),1,1.8)}"
          opacity="0.85" />
        ${u?g`<g class="now-sun ${bs}" filter="${vs}">
                <title>${a.t("chartSunNow",{altitude:lt(C,1,a.locale)})}</title>
                <circle
                  cx="${l(xt,1)}"
                  cy="${l(xi,1)}"
                  r="${Ot}"
                  fill="${fs}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${wi}"
                />
              </g>`:g``}
        ${ht&&ue!==null&&d?g`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:lt(ht.altitude,1,a.locale)})}${ht.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${ue===xt?g``:g`<line
                        x1="${l(xt,1)}"
                        y1="${l(ht.y,1)}"
                        x2="${l(ue,1)}"
                        y2="${l(ht.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${l(ue,1)}"
                  cy="${l(ht.y,1)}"
                  r="${l(Mt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${wi}" />
                <g
                  transform="translate(${l(ue-Mt,1)} ${l(ht.y-Mt,1)})"
                  opacity="${ht.clamped?.6:1}"
                >
                  ${te({size:l(Mt*2,1),illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${f}-moon-now`})}
                </g>
              </g>`:g``}
      </g>

      ${Mi?g`<g class="zenith-chip">
              <rect
                x="${l(Si-Ee/2,1)}"
                y="${l(Ai,1)}"
                width="${l(Ee,1)}"
                height="${l(De,1)}"
                rx="${l(De/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${l(Si,1)}"
                y="${l(Ai+De/2+Ae*.36,1)}"
                text-anchor="middle"
                font-size="${Ae}"
                fill="var(--smc-label-color, #ffffff)"
              >${ki}</text>
            </g>`:g``}

      ${W?g`<line
              x1="${l(T,1)}" y1="${l(H+.5,1)}"
              x2="${l(T+S,1)}" y2="${l(H+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:g``}

      ${rn.length?g`<g class="event-labels" font-size="${Te}">
              ${rn.map(p=>{let L=W?H+2:P;return g`<g>
                  <rect
                    x="${l(p.x-p.width/2,1)}"
                    y="${l(L,1)}"
                    width="${l(p.width,1)}"
                    height="${l(sn,1)}"
                    rx="${l(sn/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${p.secondary?.6:.88}" />
                  <text
                    x="${l(p.x,1)}"
                    y="${l(L+sn/2+Te*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${p.secondary?.75:1}"
                  >${p.text}</text>
                </g>`})}
            </g>`:g``}
    </svg>
  `}function Xn(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function _r(i,t,e){let n=[];for(let o=0;o<t;o++){let s=Math.sqrt(Xn(i*7.13+o*1.37))*e*.96,r=Xn(i*3.71+o*2.11)*360,a=Et({x:0,y:0},s,r),u=Xn(i*5.19+o*4.53);n.push({x:a.x,y:a.y,r:.35+u*.75,opacity:.16+u*.34})}return n}function Qn(i,t){return b((90-i)/90*t,0,t)}function ti(i){let{width:t,height:e,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:u,palette:c,format:d,animations:h,uid:m,showCardinals:y=!0,seed:v=0}=i,M=Math.max(80,t),_=Math.max(80,e),A=6,f={x:M/2,y:_/2},w=Math.max(10,Math.min(M,_)/2-A),C=`${m}-dome`,k=`${m}-dome-clip`,$=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],O=b(l(w*.17,1),7,11),Z=n?n.altitude>0:!1,tt=b(l(w*.11,1),4,11),W=n?Et(f,Qn(n.altitude,w),n.azimuth):null,it=a&&n&&W,T=o?o.altitude>0:!1,S=b(l(w*.24,1),10,22),P=o?Et(f,Qn(o.altitude,w),o.azimuth):null,U=u&&o&&P&&r,H=y&&w>=42,q=b(l(w*.14,1),6.5,9),et=[{altitude:30,radius:w*(60/90)},{altitude:60,radius:w*(30/90)}],J=(n?.altitude??-90)<-6?_r(Math.max(1,Math.round(v)),46,w):[],wt=s.filter(z=>z.altitude>=-8).map(z=>Et(f,Qn(z.altitude,w),z.azimuth));return g`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(M,1)} ${l(_,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${C}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${c.skyTop}" />
          <stop offset="100%" stop-color="${c.skyBottom}" />
        </radialGradient>
        <clipPath id="${k}">
          <circle cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(w,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(w,1)}"
        fill="url(#${C})" opacity="0.55" />

      <g clip-path="url(#${k})">
        ${J.length?g`<g class="stars">
                ${J.map(z=>g`<circle
                      cx="${l(f.x+z.x,1)}"
                      cy="${l(f.y+z.y,1)}"
                      r="${l(z.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${l(z.opacity,2)}" />`)}
              </g>`:g``}
        ${et.map(z=>g`<circle
              cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(z.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${l(f.x-w,1)}" y1="${l(f.y,1)}"
          x2="${l(f.x+w,1)}" y2="${l(f.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${l(f.x,1)}" y1="${l(f.y-w,1)}"
          x2="${l(f.x,1)}" y2="${l(f.y+w,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${wt.length>1?g`<path
                d="M${wt.map(z=>`${l(z.x,1)} ${l(z.y,1)}`).join(" L")}"
                fill="none"
                stroke="${c.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:g``}
      </g>

      <circle
        cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(w,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${H?g`<g
              font-size="${q}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${et.map(z=>{let G=Et(f,z.radius,45);return g`<text
                  x="${l(G.x,1)}"
                  y="${l(G.y+q*.35,1)}"
                >${z.altitude}°</text>`})}
            </g>`:g``}

      ${y?g`<g font-size="${O}" fill="var(--smc-muted-color)" opacity="0.7">
              ${$.map(z=>{let G=Et(f,w*.87,z.azimuth);return g`<text
                  x="${l(G.x,1)}"
                  y="${l(G.y+O*.35,1)}"
                  text-anchor="middle"
                >${z.key}</text>`})}
            </g>`:g``}

      ${it&&Z&&W?g`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${l(W.x,1)}" cy="${l(W.y,1)}" r="${tt}"
                fill="${c.lineDay}" opacity="0.28" />
              <circle
                cx="${l(W.x,1)}" cy="${l(W.y,1)}" r="${l(tt*.55,1)}"
                fill="${c.lineDay}" />
            </g>`:g``}
      ${a&&n&&!Z?Nn(f,w,n.azimuth,c.lineNight):g``}

      ${U&&T&&P&&r?g`<g transform="translate(${l(P.x-S/2,1)} ${l(P.y-S/2,1)})">
              ${te({size:S,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:S>=16,uid:`${m}-moon`})}
            </g>`:g``}
      ${u&&o&&!T?Nn(f,w,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):g``}
    </svg>
  `}function ei(i,t,e){i.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}function wr(i){if(typeof i!="string")return null;let[t,e]=i.split(".",2);return!t||!e?null:[t,e]}function Ro(i,t,e,n,o){typeof i?.callService=="function"&&i.callService(t,e,n,o)}function Po(i,t,e,n,o){if(!n){o?.();return}switch(n.action){case"none":return;case"open-popup":o?.();return;case"more-info":ei(i,"hass-more-info",{entityId:n.entity??e.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),ei(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":Ro(t,"homeassistant","toggle",{entity_id:n.entity??e.entity});return;case"call-service":case"perform-action":{let s=wr(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,a=typeof n.target=="object"&&n.target!==null?n.target:void 0;Ro(t,s[0],s[1],r,a);return}case"fire-dom-event":ei(window,"ll-custom",n);return;default:return}}function ni(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function ii(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Qe(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function tn(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var Io="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function zo(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${Io}
        fill="${t}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function Oo(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${Io}
        fill="${t}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function Fo(i=20,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function Uo(i=18,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var Go=new Map;function Ko(i){let t=Go.get(i);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Go.set(i,t)),t}function $r(i){try{return Ko(i)}catch{return Ko("UTC")}}function oi(i,t){let e=$r(t).formatToParts(i),n={};for(let o of e)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function Wo(i,t){let e=oi(i,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function xr(i,t,e,n=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,t-1,e,n,o,s),u=1440*60*1e3,c=[Wo(new Date(a-u),r),Wo(new Date(a+u),r)],d=[...new Set(c)].map(m=>a-m).filter(m=>{let y=oi(new Date(m),r);return y.year===i&&y.month===t&&y.day===e&&y.hour===n&&y.minute===o&&y.second===s}).sort((m,y)=>m-y);if(d.length>0)return new Date(d[0]);let h=Math.min(...c);return new Date(a-h)}function ne(i,t){let e=oi(i,t);return xr(e.year,e.month,e.day,0,0,0,t)}function Bo(i,t){let e=ne(i,t);return ne(new Date(e.getTime()+2160*60*1e3),t)}function _t(i,t){return Math.round(ne(i,t).getTime()/(1440*60*1e3))}function Vo(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function X(i,t){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:t}function ie(i,t,e){return typeof i=="string"&&t.includes(i)?i:e}function si(i,t,e,n,o,s=0){let r=ct(i);if(r===null)return t;let a=b(r,e[0],e[1]);return Math.abs(a-r)>1e-9&&o.push(j(n,"invalidRange",{value:String(i),min:String(e[0]),max:String(e[1])})),s===0?Math.round(a):l(a,s)}function ri(i,t,e){if(i==null)return null;let n=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=n?.action;if(typeof o!="string"||o.trim()==="")return e.push(j(t,"invalidAction",{value:String(i)})),null;let s=o.trim();return yo.includes(s)?{...n,action:s}:(e.push(j(t,"invalidAction",{value:s})),null)}function qo(i,t="en"){let e=[],n=[],o=i??{},s=X(o.minimal_mode,E.minimal_mode),r=ee(s),a=E.card_height;if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(b(o.card_height,r[0],r[1])),a!==o.card_height&&n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let y=ct(o.card_height);y===null?e.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(b(y,r[0],r[1]))}let u=null,c=null,d=ct(o.latitude),h=ct(o.longitude);return d!==null&&(d>=-90&&d<=90?u=d:n.push(j(t,"invalidNumber",{value:String(o.latitude)}))),h!==null&&(h>=-180&&h<=180?c=h:n.push(j(t,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():E.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():E.moon_entity,card_height:a,show_sun:X(o.show_sun,E.show_sun),show_moon:X(o.show_moon,E.show_moon),show_twilight:X(o.show_twilight,E.show_twilight),show_astronomical_details:X(o.show_astronomical_details,E.show_astronomical_details),compact_mode:X(o.compact_mode,E.compact_mode),minimal_mode:s,minimal_show_times:X(o.minimal_show_times,E.minimal_show_times),minimal_show_zenith:X(o.minimal_show_zenith,E.minimal_show_zenith),sun_marker_size:si(o.sun_marker_size,E.sun_marker_size,$e,t,n,1),popup_width:si(o.popup_width,E.popup_width,Rt,t,n),popup_height:si(o.popup_height,E.popup_height,Pt,t,n),show_remaining_time:X(o.show_remaining_time,E.show_remaining_time),remaining_time_focus:ie(o.remaining_time_focus,It.remainingTimeFocus,E.remaining_time_focus),tap_action:ri(o.tap_action,t,n),hold_action:ri(o.hold_action,t,n),double_tap_action:ri(o.double_tap_action,t,n),card_style:ie(o.card_style,It.cardStyle,E.card_style),theme_mode:ie(o.theme_mode,It.themeMode,E.theme_mode),animations:X(o.animations,E.animations),time_format:ie(o.time_format,It.timeFormat,E.time_format),language:ie(o.language,It.language,E.language),show_header:X(o.show_header,E.show_header),show_day_chart:X(o.show_day_chart,E.show_day_chart),show_sky_view:X(o.show_sky_view,E.show_sky_view),show_events:X(o.show_events,E.show_events),show_moon_times:X(o.show_moon_times,E.show_moon_times),show_footer:X(o.show_footer,E.show_footer),twilight_level:ie(o.twilight_level,It.twilightLevel,E.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:u,longitude:c},errors:e,warnings:n}}function Yo(i,t){let e=ee(i.minimal_mode);return i.card_height==="auto"?b(ko(t),e[0],e[1]):b(i.card_height,e[0],e[1])}function Mr(i,t,e,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},u={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:t,location:o,locationName:"",extras:kr(t,Jo(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:u,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function Jo(i){return i==="de"?"de-DE":"en-GB"}function kr(i,t){return{timeZoneLongName:jn(i,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null}}function Sr(i,t){let e=An(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function Tr(i,t,e){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=wo[n-1];return j(e,"folkName",{name:j(e,o)})}function jo(i,t,e,n){return i?{time:i,azimuth:Be(i,t,"moon"),dayOffset:_t(i,n)-_t(e,n)}:null}function Ar(i){if(typeof i!="string"||i.trim()==="")return null;let t=new Date(i);return Number.isNaN(t.getTime())?null:t}var Zo=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],Er={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function Dr(i,t,e){let n=Vo(t?.config?.time_zone),o=[],s=Cn(t?.config?.latitude)?t.config.latitude:null,r=Cn(t?.config?.longitude)?t.config.longitude:null,a=i.latitude??s,u=i.longitude??r,c=Kt(i.language,t?.locale?.language??t?.language);if(a===null||u===null)return Mr(e,n,["missing-location",...o],c);let d={latitude:a,longitude:u},h=i.location_name.trim()!==""?i.location_name.trim():t?.config?.location_name??"",m=ne(e,n),y=Bo(e,n),v=Sn(d,m,y),M=Ge(e,d),_=M.altitude,A=Ue(e.getTime()+6e4,d),f=Ht(e,d),w=Ke(e),C=oo(e,d),k=t?.states?.[i.entity];k||o.push("missing-sun-entity");let $={...v.events},O={};if(k?.attributes)for(let[N,rt]of Zo){let gt=Ar(k.attributes[rt]),dt=v.events[N];if(gt&&gt>=m&&gt<y&&(!dt||Math.abs(gt.getTime()-dt.getTime())<=_o)){$[N]=gt,O[N]="ha";continue}O[N]=dt?"computed":"none"}else for(let[N]of Zo)O[N]=v.events[N]?"computed":"none";for(let N of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])O[N]=v.events[N]?"computed":"none";let Z=k?.attributes?ct(k.attributes.elevation):null,tt=k?.attributes?ct(k.attributes.azimuth):null,W=i.moon_entity?t?.states?.[i.moon_entity]:void 0,it=W&&typeof W.state=="string"?Er[W.state]??null:null,T=i.show_moon?io(d,m,y,C):null,S=[],P=900*1e3;for(let N=m.getTime();N<=y.getTime();N+=P){let rt=Ge(N,d);S.push({altitude:rt.altitude,azimuth:rt.azimuth})}let U=null;$.sunrise&&$.sunset&&(U=($.sunset.getTime()-$.sunrise.getTime())/6e4);let H=ne(new Date(m.getTime()-720*60*1e3),n),q=Sn(d,H,m),et=q.events.sunrise&&q.events.sunset?(q.events.sunset.getTime()-q.events.sunrise.getTime())/6e4:null,Ct=U!==null&&et!==null?U-et:null,J=ro(e),wt=i.twilight_level==="nautical"?Tt:i.twilight_level==="astronomical"?At:vt,z=N=>N?{time:N.time,rising:N.rising,dayOffset:_t(N.time,n)-_t(e,n)}:null,G=i.show_sun?z(Tn(d,e,_e)):null,ot=i.show_twilight?z(Tn(d,e,wt)):null,zt=e.getTime(),F=[C.nextRise,C.nextSet].filter(N=>N instanceof Date&&N.getTime()>zt).sort((N,rt)=>N.getTime()-rt.getTime())[0],st=i.show_moon&&F?{time:F,rising:F.getTime()===C.nextRise?.getTime(),dayOffset:_t(F,n)-_t(e,n)}:null,ut={timeZoneLongName:jn(n,Jo(c),e),previousDaylightMinutes:et,daylightDeltaMinutes:Ct,sunBelowHorizon:_<0?Math.abs(_):null,sunriseAzimuth:$.sunrise?Be($.sunrise,d,"sun"):null,sunsetAzimuth:$.sunset?Be($.sunset,d,"sun"):null,nextFullMoon:J,nextFullMoonDays:J?Math.round((J.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:J?Sr(J.time,n):!1,moonFolkName:Tr(J?.time??null,n,c),moonDistance:ao(e,d,14),moonRise:jo(C.nextRise??C.previousRise,d,e,n),moonSet:jo(C.nextSet??C.previousSet,d,e,n),nextSunEvent:G,nextTwilightEvent:ot,nextMoonEvent:st};return v.polar==="polar-day"&&o.push("polar-day"),v.polar==="polar-night"&&o.push("polar-night"),$.sunrise||o.push("no-sunrise-today"),$.sunset||o.push("no-sunset-today"),!$.civilDawn&&!$.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:v,sun:{altitude:_,azimuth:M.azimuth,phase:so(_),rising:A>_,haElevation:Z,haAzimuth:tt},moon:{position:f,phase:w,events:C,haPhaseName:it},sunTrack:S,moonPath:T,events:$,eventSources:O,extras:ut,daylightMinutes:U,issues:o,fatal:!1}}var xe=new Map;function Cr(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight)].join("|")}function Nr(i,t){if(!t)return"-";let e=t.states?.[i.entity],n=i.moon_entity?t.states?.[i.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",t.config?.location_name??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function Xo(i,t,e){let n=Math.floor(e.getTime()/6e4),o=[Cr(i),Nr(i,t),n,e.getTimezoneOffset()].join("#"),s=xe.get(o);if(s)return s;let r=Dr(i,t,e);if(xe.size>24){let a=xe.keys().next().value;a!==void 0&&xe.delete(a)}return xe.set(o,r),r}var Qo=Le`
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
`,ts=Le`
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
`;function ai(i,t){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var Bt=class extends bt{setConfig(t){this._config={...t}}get _language(){return Kt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return j(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,o]of Object.entries(t)){let s=E[n];o===s&&n in E&&delete e[n]}this._config=e,ai(this,e)}render(){if(!this._config)return D``;let t=this._config.card_height,e=t==="auto"||t===null,n=this._config.minimal_mode===!0,o=ee(n),s=typeof t=="number"?t:E.card_height,r=this._config.latitude===void 0||this._config.latitude===null;return D`
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
                @change=${a=>{let u=ct(a.target.value);u!==null&&this._update({card_height:Math.round(b(u,o[0],o[1]))})}}
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
                  @change=${a=>this._update({card_height:a.target.checked?"auto":E.card_height})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          ${this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",E.sun_marker_size),min:$e[0],max:$e[1],step:.5,digits:1,set:a=>this._update({sun_marker_size:a})})}

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
                ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",E.popup_width),min:Rt[0],max:Rt[1],step:20,set:a=>this._update({popup_width:Math.round(a)})})}
                ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",E.popup_height),min:Pt[0],max:Pt[1],step:20,set:a=>this._update({popup_height:Math.round(a)})})}`:x}
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
                .value=${this._value("entity",E.entity)}
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
                .value=${this._value("moon_entity",E.moon_entity)}
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
                  @change=${a=>{if(a.target.checked){let c={...this._config};delete c.latitude,delete c.longitude,this._config=c,ai(this,c)}else this._update({latitude:l(this.hass?.config?.latitude??0,4),longitude:l(this.hass?.config?.longitude??0,4)})}}
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
                @change=${a=>{let u=ct(a.target.value);this._update({latitude:u===null?void 0:b(u,-90,90)})}}
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
                @change=${a=>{let u=ct(a.target.value);this._update({longitude:u===null?void 0:b(u,-180,180)})}}
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
              ${E.card_height} px, mindestens
              ${n?On:120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_numberRow(t){let{id:e,labelKey:n,value:o,min:s,max:r,step:a,digits:u=0,set:c}=t,d=h=>String(u===0?Math.round(h):l(h,u));return D`
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
            @change=${h=>{let m=ct(h.target.value);m!==null&&c(b(m,s,r))}}
          />
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height,e=ee(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<e[0]||t>e[1])?D`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:e[0],max:e[1]})}
      </span>`:x}_switch(t,e){let n=E[t];return D`
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
    `}_reset(){let t=Ye();this._config=t,ai(this,t)}};Bt.styles=ts,yt([Yt({attribute:!1})],Bt.prototype,"hass",2),yt([Jt()],Bt.prototype,"_config",2),Bt=yt([Ie(fo)],Bt);var oe=12,Lr=17,Dt=class extends bt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=e=>{if(!this._popup)return;if(e.key==="Escape"){e.stopPropagation(),this._closeDetails();return}if(e.key!=="Tab")return;let n=this._popupFocusable(),o=n[0],s=n[n.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?n.indexOf(r):-1;if(a===-1){e.preventDefault(),(e.shiftKey?s:o).focus();return}e.shiftKey&&a===0?(e.preventDefault(),s.focus()):!e.shiftKey&&a===n.length-1&&(e.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let e=this._config?.hold_action;e&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(e,!1)},bo))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=e=>{if(this._held){this._held=!1;return}let n=e.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},vo)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(e){let n=this._hass;this._hass=e,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=e)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Ye()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=Kt(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=qo(e,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(e){super.willUpdate(e);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),n=b(this._config.popup_width,Rt[0],Rt[1]),o=b(this._config.popup_height,Pt[0],Pt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",j(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",j(e,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let u=this._config,c={...u,latitude:u.latitude??void 0,longitude:u.longitude??void 0,location_name:u.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},d=document.createElement(zn);d.hass=this.hass;try{d.setConfig(c)}catch{}this._popupCard=d,r.append(d,a),s.append(r),s.addEventListener("click",h=>{h.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let e=document.activeElement;if(!e)return null;let n=e.shadowRoot?.activeElement;return n instanceof HTMLElement?n:e}_popupFocusable(){if(!this._popup)return[];let e=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&e.push(n);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||e.push(s);return e}_handleMinimalKey(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();let n=e.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(e){this._runAction(this._config?.tap_action??null,!0,e)}_runAction(e,n,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Po(r,this.hass,s,e,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(e=>{let n=e.some(o=>o.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,ho()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let o=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Yo(this._config,this._width||400):E.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return Kt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return D``;let n=this._width||400,o=this._resolvedHeight(),s=Mo(o,n,e),r=Xo(e,this.hass,new Date),a=this._language(),u=this._isDark(),c=u?Fn:Un;if(r.fatal)return D`
        <ha-card
          class=${St({"smc-dark":u,"smc-light":!u,"smc-minimal":s.minimal})}
          style=${V({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${Uo(18)}</span>
              <span>${j(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=Lo(a,this._locale(),r.timeZone,Ao(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?D`
        <ha-card
          class=${St({"smc-dark":u,"smc-light":!u,"smc-minimal":!0})}
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
            class=${St({root:!0,minimal:!0})}
            style=${V({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":c.day,"--smc-palette-civil":c.civil,"--smc-palette-night":c.night})}
          >
            ${this._renderMinimalTimes(r,d,s,e)}
            <div
              class="chart-wrap minimal"
              style=${V({height:`${s.chartHeight}px`})}
            >
              ${Jn({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:c,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:!1,minimal:!0,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:D`
      <ha-card
        class=${St({"smc-dark":u,"smc-light":!u})}
        style=${V({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${St({root:!0,compact:s.compact})}
          style=${V({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":c.day,"--smc-palette-civil":c.civil,"--smc-palette-night":c.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,c,s):x}

          <div
            class=${St({body:!0,columns:s.skyViewSide})}
            style=${V({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?D`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${V({height:`${s.chartHeight}px`})}
                  >
                    ${Jn({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:c,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):x}
                </div>`:x}
            ${s.skyViewSide?D`<div
                  class="sky-column"
                  style=${V({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${ti({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:c,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:_t(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth,this._countdownRows(s))}
                </div>`:x}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):x}
          ${s.showDetails?this._renderDetails(r,d,e,s,a,u,n):x}
          ${s.showFooter?this._renderFooter(r,d,e,s):x}
        </div>
      </ha-card>
    `}_renderHeader(e,n,o,s){let r=e.locationName||n.t("title"),a=e.extras,u=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),c=10.5,d=(C,k=!1)=>C.length*c*.58+20+(k?12:0),m=Math.max(0,u-10-108),y=n.t(this._phaseKey(e)),v=d(y,!0);m-=v;let M=this._primaryCountdown(e,n),_=x;if(M){let C=d(M.compact)+Lr;C<=m&&(m-=C,_=D`<span
          class="meta-chip countdown-chip"
          data-body=${M.body}
          role="img"
          aria-label=${M.long}
          title=${M.title}
          >${M.icon}<span>${M.compact}</span></span
        >`)}let A=x;if(e.daylightMinutes!==null){let C=qn(e.daylightMinutes),k=a.daylightDeltaMinutes===null?"":` ${Do(a.daylightDeltaMinutes,n.locale)}`,$=`${n.t("dayLength")} ${C}${k}`,O=d($);O<=m&&(m-=O,A=D`<span class="meta-chip" title=${n.t("dayLength")}
          >${$}</span
        >`)}let f=x,w=d(a.timeZoneLongName);return w<=m&&(m-=w,f=D`<span class="meta-chip">${a.timeZoneLongName}</span>`),D`
      <div class="header" style=${V({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${Eo(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${_}${A}${f}
          <span class="phase-chip" title=${y}>
            <span
              class="phase-dot"
              style=${V({background:this._phaseColor(e,o)})}
            ></span>
            ${y}
          </span>
        </div>
      </div>
    `}_countdowns(e,n){if(!this._config?.show_remaining_time)return[];let s=e.now.getTime(),r=[],a=(h,m,y,v,M)=>{if(!h)return;let _=(h.time.getTime()-s)/6e4;_>=0&&r.push({minutes:_,compact:n.t("untilFormat",{event:n.t(y??m),duration:qn(_)}),long:n.t("untilFormat",{event:n.t(m),duration:Co(_,n.t)}),title:`${n.t(m)} ${Q(h.time,n)}${h.dayOffset>0?` (${Xe(h.dayOffset,n.t)})`:""}`,icon:v,body:M})},u=e.extras.nextSunEvent;a(u,u?.rising?"sunrise":"sunset",u?.rising?"sunriseShort":"sunsetShort",u?.rising?ni(oe):ii(oe),"sun");let c=e.extras.nextTwilightEvent;if(c){let h=this._twilightKeys();a(c,c.rising?h.dawn:h.dusk,c.rising?h.dawnShort:h.duskShort,c.rising?Qe(oe):tn(oe),"twilight")}let d=e.extras.nextMoonEvent;return a(d,d?.rising?"moonrise":"moonset",d?.rising?"moonriseShort":"moonsetShort",d?.rising?zo(oe):Oo(oe),"moon"),r.sort((h,m)=>h.minutes-m.minutes)}_orderedCountdowns(e,n){let o=this._countdowns(e,n);if(this._config?.remaining_time_focus==="next")return o;let s=o.findIndex(a=>a.body==="sun");if(s<=0)return o;let[r]=o.splice(s,1);return[r,...o]}_primaryCountdown(e,n){return this._orderedCountdowns(e,n)[0]}_twilightKeys(){let e=this._config?.twilight_level;return e==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:e==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(e,n){return D`
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
    `}_renderSkyReadout(e,n,o,s){let r=this._config,a=[],u=(c,d,h)=>{let m=lt(d,1,n.locale),y=`${Math.round(h)}\xB0 ${Wt(h,n.language)}`;return D`<span
        title=${`${n.t("elevation")} ${m} \xB7 ${n.t("azimuth")} ${y}`}
        >${n.t("positionReadout",{body:c,altitude:m,degrees:String(Math.round(h)),direction:Wt(h,n.language)})}</span
      >`};r.show_sun&&a.push(u(n.t("sun"),e.sun.altitude,e.sun.azimuth)),r.show_moon&&a.push(u(n.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth));for(let c of this._orderedCountdowns(e,n).slice(0,s))a.push(D`<span title=${c.title}>${c.long}</span>`);return a.length===0||o<150?x:D`<div class="sky-readout">${a}</div>`}_countdownRows(e){let n=this._config,o=(n.show_sun?1:0)+(n.show_moon?1:0),s=e.chartHeight+e.legendHeight+(e.showLegend?Wn:0),r=o*Kn+Wn,a=s-r-xo;return Math.max(0,Math.min(3,Math.floor(a/Kn)))}_renderFooter(e,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil";return D`
      <div class="footer" style=${V({height:`${s.footerHeight}px`})}>
        <span class="part">${n.t(r)} · ${e.extras.timeZoneLongName}</span>
        <span class="part">${n.t("footerMethod")}</span>
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,o,s=.7){for(let r of e)if(r&&r.length*o*s<=n)return r;return null}_renderEvents(e,n,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),u=this._config,c=[];if(u.show_twilight&&c.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:Qe(s?14:16),missingText:n.t("noEvent")}),c.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:ni(s?14:16),missingText:n.t("noSunrise")}),c.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:ii(s?14:16),missingText:n.t("noSunset")}),u.show_twilight&&c.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:tn(s?14:16),missingText:n.t("noEvent")}),u.twilight_level==="all"||u.show_astronomical_details){let A=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[f,w,C]of A)c.push({key:f,kind:C,label:n.t(f),shortLabel:n.t(f),time:w,icon:C==="dawn"?Qe(s?13:15):tn(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=a<300?3:a<420?4:a<560?6:8,h=c.slice(0,Math.max(2,d)),m=6,v=Math.max(40,a-2*r-m*(h.length-1))/h.length-10,M=s?v<120?8.5:9:v<92?8.5:9.5,_=v<74?11:v<96?12:12.5;return D`
      <div
        class="events"
        style=${V({gap:`${m}px`,height:`${o.eventsHeight}px`})}
      >
        ${h.map(A=>{let f=this._fitLabel([A.label,A.shortLabel],v,M),w=A.time?Q(A.time,n):A.missingText,C=this._fitLabel([w,"\u2014"],v,_)??"\u2014";return D`
            <div
              class=${St({"event-tile":!0,[A.kind]:!0,secondary:!!A.secondary,compact:s})}
              title=${`${A.label}: ${w}`}
            >
              <span class="event-head">
                <span class="event-icon">${A.icon}</span>
                <span
                  class=${St({"event-time":!0,missing:!A.time})}
                  style=${V({fontSize:`${_}px`})}
                >
                  ${C}
                </span>
                ${s&&f?D`<span
                      class="event-label"
                      style=${V({fontSize:`${M}px`})}
                      >${f}</span
                    >`:x}
              </span>
              ${!s&&f?D`<span
                    class="event-label"
                    style=${V({fontSize:`${M}px`})}
                    >${f}</span
                  >`:x}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,o,s,r,a,u){let c=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&u>=430,m=(o.show_sun?1:0)+(o.show_moon?1:0)+(h?1:0),v=Math.max(60,u-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,M=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],v,10.5),_=lt(e.sun.altitude,1,n.locale),A=`${Math.round(e.sun.azimuth)}\xB0 ${Wt(e.sun.azimuth,r)}`,f=c.sunBelowHorizon!==null?`${lt(c.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,w=this._fitLabel([f?`${f} \xB7 ${A}`:`${n.t("azimuth")} ${A}`,f??A,A],v,9.5),C=c.sunriseAzimuth!==null?`${Math.round(c.sunriseAzimuth)}\xB0 ${Wt(c.sunriseAzimuth,r)}`:null,k=c.sunsetAzimuth!==null?`${Math.round(c.sunsetAzimuth)}\xB0 ${Wt(c.sunsetAzimuth,r)}`:null,$=o.show_astronomical_details&&C&&k?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:C,set:k}),`${Math.round(c.sunriseAzimuth)}\xB0 / ${Math.round(c.sunsetAzimuth)}\xB0`],v,9.5):null,O=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?Q(e.events.solarNoon,n):"\u2014"} \xB7 ${lt(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?Q(e.events.solarNoon,n):null],v,9.5):null,Z=this._fitLabel([n.t(d),n.t("moon")],v,10.5),tt=No(e.moon.phase.illumination,n.locale),W=this._fitLabel([`${tt} ${n.t("illumination")}`,tt],v,13),it=e.moon.position.apparentAltitude,T=lt(it,1,n.locale),S=`${Math.round(e.moon.position.azimuth)}\xB0 ${Wt(e.moon.position.azimuth,r)}`,P=`${n.t("elevation")} ${T} \xB7 ${n.t("azimuth")} ${S}`,U=it>=0?[`${n.t("elevation")} ${T} \xB7 ${S}`,`${T} \xB7 ${S}`,T]:[`${lt(Math.abs(it),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${S}`,`${lt(Math.abs(it),1,n.locale)} ${n.t("belowHorizon")}`,T],H=null,q="";if(c.moonDistance){let{current:F,min:st,max:ut}=c.moonDistance,N=Math.max(1,ut-st),rt=F<=st+N*.2,gt=F>=st+N*.8,dt=Je(F,n.locale),se=rt?n.t("nearPerigee"):gt?n.t("nearApogee"):"";q=`${n.t("moonDistance")}: ${dt} \xB7 ${n.t("distanceRange",{min:Je(st,n.locale),max:Je(ut,n.locale)})}`,H=this._fitLabel(se?[`${dt} \xB7 ${se}`,dt]:[dt],v,9.5)}let et=this._fitLabel(H?U.flatMap(F=>[`${F} \xB7 ${H}`,F]):U,v,9.5),Ct=H!==null&&(et?.includes(H)??!1),J=null,wt="";if(o.show_astronomical_details&&c.nextFullMoon){let F=c.nextFullMoonDays??0,st=F<=0?n.t("dayToday"):n.t("inDays",{days:String(F)}),ut=`${n.t("nextFullMoon")} ${st}`,N=c.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",rt=`${ut}${N}${c.moonFolkName?` \xB7 ${c.moonFolkName}`:""}`;wt=c.blueMoon?n.t("blueMoonHint"):c.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),J=this._fitLabel([rt,`${ut}${N}`,ut],v,9.5)}let z=o.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],v,9.5):null,G=[];et&&G.push({text:et,title:P,position:!0}),z&&G.push({text:z,title:null}),J&&G.push({text:J,title:wt}),H&&!Ct&&G.push({text:H,title:q});let ot=G.slice(0,s.detailsHeight>=Bn?3:2),zt=Ct||ot.some(F=>F.text===H),Me=H&&!zt?q||H:null;return D`
      <div
        class="details"
        style=${V({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?D`
              <div class="detail-tile sun">
                <span class="detail-icon">${Fo(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${M?D`<span class="detail-title">${M}</span>`:x}
                  <span class="detail-value">${_}</span>
                  ${w?D`<span class="detail-sub">${w}</span>`:x}
                  ${O?D`<span class="detail-sub">${O}</span>`:x}
                  ${$?D`<span class="detail-sub">${$}</span>`:x}
                </span>
              </div>
            `:x}
        ${o.show_moon?D`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${te({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${Z?D`<span class="detail-title">${Z}</span>`:x}
                  ${W?D`<span class="detail-value">${W}</span>`:x}
                  ${ot.map(F=>{let st=[F.title,F.position?Me:null].filter(Boolean).join(" \xB7 ")||null;return D`<span class="detail-sub" title=${st??x}
                      >${F.text}</span
                    >`})}
                </span>
              </div>
            `:x}
        ${h?D`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${ti({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?Fn:Un,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:_t(e.now,e.timeZone)})}
                </span>
              </div>
            `:x}
      </div>
    `}_moonTimesText(e,n,o){let s=e.extras.moonRise,r=e.extras.moonSet,a=s&&s.dayOffset!==0?` ${Xe(s.dayOffset,n.t)}`:"",u=s?`\u2191 ${Q(s.time,n)}${a}`:"\u2191 \u2014";if(o)return u;let c=r&&r.dayOffset!==0?` ${Xe(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${Q(r.time,n)}${c}`:"\u2193 \u2014";return`${u} \xB7 ${d}`}_renderMinimalTimes(e,n,o,s){if(o.minimalTimesHeight<=0)return x;let r=n.t,a=[];if(s.minimal_show_times&&e.events.sunrise){let c=Q(e.events.sunrise,n);a.push(D`<span class="minimal-time rise" title=${`${r("sunrise")} ${c}`}
          >↑ ${c}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let c=Q(e.events.solarNoon,n),d=o.chartWidth<250?c:`${r("zenith")} ${c}`;a.push(D`<span class="minimal-time zenith" title=${`${r("zenith")} ${c}`}
          >${d}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let c=Q(e.events.sunset,n);a.push(D`<span class="minimal-time set" title=${`${r("sunset")} ${c}`}
          >↓ ${c}</span
        >`)}if(a.length===0)return x;let u=b(l(o.minimalTimesHeight*.78,1),8,12);return D`<div
      class="minimal-times"
      style=${V({height:`${o.minimalTimesHeight}px`,fontSize:`${u}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(e,n){return`${this._minimalTitle(e,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(e,n){let o=[this._ariaLabel(e,n)];o.push(`${n.t("sun")} ${lt(e.sun.altitude,0,n.locale)}`);let s=this._primaryCountdown(e,n);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(e,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${n.t("sunrise")} ${Q(e.events.sunrise,n)}`),e.events.sunset&&o.push(`${n.t("sunset")} ${Q(e.events.sunset,n)}`),o.join(", ")}};Dt.styles=Qo,yt([Yt({attribute:!1})],Dt.prototype,"hass",1),yt([Jt()],Dt.prototype,"_config",2),yt([Jt()],Dt.prototype,"_width",2),yt([Jt()],Dt.prototype,"_tick",2),Dt=yt([Ie(zn)],Dt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${qe}`)||window.customCards.push({type:`custom:${qe}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Dt as SunMoonCard};
