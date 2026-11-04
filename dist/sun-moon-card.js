var xs=Object.defineProperty;var Ms=Object.getOwnPropertyDescriptor;var bt=(i,t,e,n)=>{for(var o=n>1?void 0:n?Ms(t,e):t,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(t,e,o):r(o))||o);return n&&o&&xs(t,e,o),o};var De=globalThis,Ce=De.ShadowRoot&&(De.ShadyCSS===void 0||De.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,an=Symbol(),Ei=new WeakMap,ue=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==an)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ce&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ei.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ei.set(e,t))}return t}toString(){return this.cssText}},Di=i=>new ue(typeof i=="string"?i:i+"",void 0,an),Ne=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new ue(e,i,an)},Ci=(i,t)=>{if(Ce)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=De.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},ln=Ce?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Di(e)})(i):i;var{is:ks,defineProperty:Ss,getOwnPropertyDescriptor:Ts,getOwnPropertyNames:As,getOwnPropertySymbols:Es,getPrototypeOf:Ds}=Object,Le=globalThis,Ni=Le.trustedTypes,Cs=Ni?Ni.emptyScript:"",Ns=Le.reactiveElementPolyfillSupport,de=(i,t)=>i,he={toAttribute(i,t){switch(t){case Boolean:i=i?Cs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},He=(i,t)=>!ks(i,t),Li={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:He};Symbol.metadata??=Symbol("metadata"),Le.litPropertyMetadata??=new WeakMap;var kt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Li){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Ss(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=Ts(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Li}static _$Ei(){if(this.hasOwnProperty(de("elementProperties")))return;let t=Ds(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(de("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(de("properties"))){let e=this.properties,n=[...As(e),...Es(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(ln(o))}else t!==void 0&&e.push(ln(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ci(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:he).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:he;this._$Em=o;let a=r.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let r=this.constructor;if(o===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??He)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};kt.elementStyles=[],kt.shadowRootOptions={mode:"open"},kt[de("elementProperties")]=new Map,kt[de("finalized")]=new Map,Ns?.({ReactiveElement:kt}),(Le.reactiveElementVersions??=[]).push("2.1.2");var gn=globalThis,Hi=i=>i,Re=gn.trustedTypes,Ri=Re?Re.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ui="$lit$",Lt=`lit$${Math.random().toFixed(9).slice(2)}$`,Gi="?"+Lt,Ls=`<${Gi}>`,Ut=document,pe=()=>Ut.createComment(""),ge=i=>i===null||typeof i!="object"&&typeof i!="function",fn=Array.isArray,Hs=i=>fn(i)||typeof i?.[Symbol.iterator]=="function",cn=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pi=/-->/g,Ii=/>/g,Ot=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zi=/'/g,Oi=/"/g,Ki=/^(?:script|style|textarea|title)$/i,bn=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),A=bn(1),g=bn(2),Hr=bn(3),mt=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Fi=new WeakMap,Ft=Ut.createTreeWalker(Ut,129);function Wi(i,t){if(!fn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ri!==void 0?Ri.createHTML(t):t}var Rs=(i,t)=>{let e=i.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",r=me;for(let a=0;a<e;a++){let c=i[a],u,d,h=-1,m=0;for(;m<c.length&&(r.lastIndex=m,d=r.exec(c),d!==null);)m=r.lastIndex,r===me?d[1]==="!--"?r=Pi:d[1]!==void 0?r=Ii:d[2]!==void 0?(Ki.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=Ot):d[3]!==void 0&&(r=Ot):r===Ot?d[0]===">"?(r=o??me,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?Ot:d[3]==='"'?Oi:zi):r===Oi||r===zi?r=Ot:r===Pi||r===Ii?r=me:(r=Ot,o=void 0);let b=r===Ot&&i[a+1].startsWith("/>")?" ":"";s+=r===me?c+Ls:h>=0?(n.push(u),c.slice(0,h)+Ui+c.slice(h)+Lt+b):c+Lt+(h===-2?a:b)}return[Wi(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},fe=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,r=0,a=t.length-1,c=this.parts,[u,d]=Rs(t,e);if(this.el=i.createElement(u,n),Ft.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=Ft.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Ui)){let m=d[r++],b=o.getAttribute(h).split(Lt),v=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:v[2],strings:b,ctor:v[1]==="."?dn:v[1]==="?"?hn:v[1]==="@"?mn:qt}),o.removeAttribute(h)}else h.startsWith(Lt)&&(c.push({type:6,index:s}),o.removeAttribute(h));if(Ki.test(o.tagName)){let h=o.textContent.split(Lt),m=h.length-1;if(m>0){o.textContent=Re?Re.emptyScript:"";for(let b=0;b<m;b++)o.append(h[b],pe()),Ft.nextNode(),c.push({type:2,index:++s});o.append(h[m],pe())}}}else if(o.nodeType===8)if(o.data===Gi)c.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(Lt,h+1))!==-1;)c.push({type:7,index:s}),h+=Lt.length-1}s++}}static createElement(t,e){let n=Ut.createElement("template");return n.innerHTML=t,n}};function Zt(i,t,e=i,n){if(t===mt)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=ge(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=Zt(i,o._$AS(i,t.values),o,n)),t}var un=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??Ut).importNode(e,!0);Ft.currentNode=o;let s=Ft.nextNode(),r=0,a=0,c=n[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new be(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new pn(s,this,t)),this._$AV.push(u),c=n[++a]}r!==c?.index&&(s=Ft.nextNode(),r++)}return Ft.currentNode=Ut,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},be=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Zt(this,t,e),ge(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==mt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Hs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&ge(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ut.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=fe.createElement(Wi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new un(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Fi.get(t.strings);return e===void 0&&Fi.set(t.strings,e=new fe(t)),e}k(t){fn(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new i(this.O(pe()),this.O(pe()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Hi(t).nextSibling;Hi(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},qt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(t,e=this,n,o){let s=this.strings,r=!1;if(s===void 0)t=Zt(this,t,e,0),r=!ge(t)||t!==this._$AH&&t!==mt,r&&(this._$AH=t);else{let a=t,c,u;for(t=s[0],c=0;c<s.length-1;c++)u=Zt(this,a[n+c],e,c),u===mt&&(u=this._$AH[c]),r||=!ge(u)||u!==this._$AH[c],u===x?t=x:t!==x&&(t+=(u??"")+s[c+1]),this._$AH[c]=u}r&&!o&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},dn=class extends qt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},hn=class extends qt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},mn=class extends qt{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=Zt(this,t,e,0)??x)===mt)return;let n=this._$AH,o=t===x&&n!==x||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==x&&(n===x||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},pn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Zt(this,t)}};var Ps=gn.litHtmlPolyfillSupport;Ps?.(fe,be),(gn.litHtmlVersions??=[]).push("3.3.3");var Bi=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new be(t.insertBefore(pe(),s),s,void 0,e??{})}return o._$AI(i),o};var yn=globalThis,yt=class extends kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};yt._$litElement$=!0,yt.finalized=!0,yn.litElementHydrateSupport?.({LitElement:yt});var Is=yn.litElementPolyfillSupport;Is?.({LitElement:yt});(yn.litElementVersions??=[]).push("4.2.2");var Pe=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var zs={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:He},Os=(i=zs,t,e)=>{let{kind:n,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){let{name:r}=e;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,c,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(n==="setter"){let{name:r}=e;return function(a){let c=this[r];t.call(this,a),this.requestUpdate(r,c,i,!0,a)}}throw Error("Unsupported decorator location: "+n)};function Yt(i){return(t,e)=>typeof e=="object"?Os(i,t,e):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,t,e)}function Jt(i){return Yt({...i,state:!0,attribute:!1})}var ze={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oe=i=>(...t)=>({_$litDirective$:i,values:t}),Xt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var St=Oe(class extends Xt{constructor(i){if(super(i),i.type!==ze.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return mt}});var Vi="important",Fs=" !"+Vi,V=Oe(class extends Xt{constructor(i){if(super(i),i.type!==ze.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(Fs);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?Vi:""):e[n]=o}}return mt}});var ji=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Zi=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],qi=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],vn=385000.49;var R=Math.PI/180,pt=180/Math.PI,Us=1495978707e-1,Ji=6378.14,ye=-.833,vt=-6,Tt=-12,At=-18,_n=120*1e3;function ve(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Qt(i){return(i-2451545)/36525}function K(i){let t=i%360;return t<0?t+360:t}function Gs(i){let t=Qt(i);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function Ks(i){let t=i-2451545,e=Qt(i),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return K(n)}function wn(i){let t=Qt(i),e=K(280.46646+t*(36000.76983+t*3032e-7)),n=K(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*R)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*R)*(.019993-101e-6*t)+Math.sin(3*n*R)*289e-6,s=e+o,r=K(125.04-1934.136*t),a=s-.00569-.00478*Math.sin(r*R),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*R),d=a*R,h=u*R,m=K(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*pt),b=Math.asin(Math.sin(h)*Math.sin(d))*pt;return{ra:m,dec:b}}function Ws(i){let t=Qt(i),e=K(280.46646+t*(36000.76983+t*3032e-7)),n=K(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*R)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*R)*(.019993-101e-6*t)+Math.sin(3*n*R)*289e-6,s=K(125.04-1934.136*t);return K(e+o-.00569-.00478*Math.sin(s*R))}function Bs(i){let t=ve(i),e=Qt(t),n=K(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*R)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*R)*(.019993-101e-6*e)+Math.sin(3*n*R)*289e-6,r=(n+s)*R;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*Us}function $n(i,t,e,n){let o=K(Ks(n)+e),s=K(o-i.ra),r=t*R,a=i.dec*R,c=s*R,u=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(c))*pt,d=K(Math.atan2(Math.sin(c),Math.cos(c)*Math.sin(r)-Math.tan(a)*Math.cos(r))*pt+180);return{altitude:u,azimuth:d}}function Fe(i,t){let e=ve(i);return $n(wn(e),t.latitude,t.longitude,e).altitude}function Ue(i,t){let e=ve(i);return $n(wn(e),t.latitude,t.longitude,e)}function Vs(i){let t=i;return{D:K(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:K(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:K(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:K(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function Xi(i){let t=Qt(i),e=K(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=Vs(t),o=e;for(let a of ji){let c=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;o+=a[4]*Math.sin(c*R)}let s=0;for(let a of Zi){let c=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;s+=a[4]*Math.sin(c*R)}let r=vn;for(let a of qi){let c=a[0]*n.D+a[1]*n.M+a[2]*n.Mp+a[3]*n.F;r+=a[4]*Math.cos(c*R)}return{longitude:K(o),latitude:s,distanceKm:r}}function Qi(i,t,e){let n=Gs(e)*R,o=i*R,s=t*R,r=K(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*pt),a=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*pt;return{ra:r,dec:a}}function Ht(i,t){let e=ve(i),n=Xi(e),o=Qi(n.longitude,n.latitude,e),s=$n(o,t.latitude,t.longitude,e),r=Math.asin(Ji/n.distanceKm)*pt,a=s.altitude-r*Math.cos(s.altitude*R);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:n}}function js(i){return .7275*(Math.asin(Ji/i)*pt)-.5667}var Zs=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],qs=29.530588853;function Ge(i){let t=ve(i),e=Xi(t),n=Qi(e.longitude,e.latitude,t),o=wn(t),s=Ws(t),r=Bs(i),a=e.distanceKm,c=e.latitude*R,u=Math.acos(Math.min(1,Math.max(-1,Math.cos(c)*Math.cos((e.longitude-s)*R)))),d=Math.atan2(r*Math.sin(u),a-r*Math.cos(u)),h=K(d*pt),m=(1+Math.cos(d))/2,b=(o.ra-n.ra)*R,v=o.dec*R,D=n.dec*R,$=K(Math.atan2(Math.cos(v)*Math.sin(b),Math.sin(v)*Math.cos(D)-Math.cos(v)*Math.sin(D)*Math.cos(b))*pt),T=K(e.longitude-s)/360,f=Math.min(7,Math.floor(T*8+.5)%8),_=T*29.530588853;return{illumination:m,phaseAngle:h,elongation:u*pt,phaseIndex:f,phaseKey:Zs[f],brightLimbAngle:$,moonAgeDays:_,waxing:T<.5,distanceKm:a}}function Ke(i,t,e,n,o){let s=[];if(!(t>i))return s;let r=Math.max(2,Math.ceil((t-i)/e)),a=(t-i)/r,c=i,u=n(i)-o;for(let d=1;d<=r;d++){let h=i+d*a,m=n(h)-o;if(u===0)s.push({time:c,rising:m>0});else if(u<0&&m>=0||u>0&&m<=0){let b=c,v=h,D=u;for(let $=0;$<50&&v-b>1;$++){let T=(b+v)/2,f=n(T)-o;f<0&&D<0||f>0&&D>0?(b=T,D=f):v=T}s.push({time:(b+v)/2,rising:m>u})}c=h,u=m}return s}function Yi(i,t,e,n){let o=i.find(s=>s.rising===t&&s.time>=e&&s.time<n);return o?new Date(o.time):null}function xn(i,t,e,n=4){let o=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),a=e.getTime(),c=M=>Fe(M,i),u=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let M=r;M<a;M+=d)u.push({time:M,altitude:c(M)});u.push({time:a,altitude:c(a)});let h=-1/0,m=1/0;for(let M of u)M.altitude>h&&(h=M.altitude),M.altitude<m&&(m=M.altitude);let b=[["sunrise","sunset",ye],["civilDawn","civilDusk",vt],["nauticalDawn","nauticalDusk",Tt],["astronomicalDawn","astronomicalDusk",At]],v={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[M,w,O]of b){let Z=Ke(o,s,_n,c,O);v[M]=Yi(Z,!0,r,a),v[w]=Yi(Z,!1,r,a)}let D=r,$=-1/0,T=120*1e3;for(let M=r;M<=a;M+=T){let w=c(M);w>$&&($=w,D=M)}let f=Math.max(r,D-T),_=Math.min(a,D+T);for(let M=0;M<40&&_-f>1e3;M++){let w=f+(_-f)/3,O=_-(_-f)/3;c(w)<c(O)?f=w:_=O}v.solarNoon=new Date((f+_)/2);let C="none";return m>ye?C="polar-day":h<ye&&(C="polar-night"),{dayStart:t,dayEnd:e,samples:u,maxAltitude:h,minAltitude:m,events:v,polar:C}}function Mn(i,t,e,n=48){let o=typeof t=="number"?t:t.getTime();if(!Number.isFinite(o)||!Number.isFinite(e))return null;let s=a=>Fe(a,i),r=Ke(o,o+n*60*60*1e3,_n,s,e)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Ys(i,t,e,n=10){let o=t.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),a=[];for(let d=o;d<s;d+=r)a.push({time:d,altitude:Ht(d,i).apparentAltitude});a.push({time:s,altitude:Ht(s,i).apparentAltitude});let c=-1/0,u=1/0;for(let d of a)d.altitude>c&&(c=d.altitude),d.altitude<u&&(u=d.altitude);return{samples:a,maxAltitude:c,minAltitude:u}}function to(i,t,e,n,o=10){let s=t.getTime(),r=e.getTime(),a=c=>{if(!c)return null;let u=c.getTime();return u>=s&&u<r?u:null};return{profile:Ys(i,t,e,o),rise:a(n.previousRise)??a(n.nextRise),set:a(n.previousSet)??a(n.nextSet)}}function eo(i,t){let e=i.getTime(),n=e-1800*60*1e3,o=e+1800*60*1e3,r=Ke(n,o,_n,b=>{let v=Ht(b,t);return v.altitude-js(v.distanceKm)},0),a=r.filter(b=>b.rising),c=r.filter(b=>!b.rising),u=a.find(b=>b.time>e)??null,d=[...a].reverse().find(b=>b.time<=e)??null,h=c.find(b=>b.time>e)??null,m=[...c].reverse().find(b=>b.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:m?new Date(m.time):null,nextRise:u?new Date(u.time):null,nextSet:h?new Date(h.time):null}}function no(i){return i>0?"day":i>vt?"civil":i>Tt?"nautical":i>At?"astronomical":"night"}function Js(i){return(((Ge(i).moonAgeDays/qs-.5)%1+1)%1+.5)%1-.5}function kn(i,t){let e=typeof i=="number"?i:i.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?Ke(e,n,360*60*1e3,Js,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function io(i,t=32){let e=typeof i=="number"?i:i.getTime(),o=kn(e,e+t*24*60*60*1e3)[0];if(!o)return null;let s=Ge(o).illumination;return s<.98?null:{time:o,illumination:s}}function oo(i,t,e=14){let n=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,a=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,u=s,d=s;for(let h=s;h<=r;h+=o){let m=Ht(h,t).distanceKm;m<a&&(a=m,u=h),m>c&&(c=m,d=h)}return{current:Ht(n,t).distanceKm,min:a,minTime:new Date(u),max:c,maxTime:new Date(d),mean:vn}}function We(i,t,e="sun"){return(e==="sun"?Ue(i,t):Ht(i,t)).azimuth}function y(i,t,e){return Number.isNaN(i)?t:Math.min(e,Math.max(t,i))}function Sn(i,t,e){return i+(t-i)*e}function l(i,t=0){let e=10**t;return Math.round(i*e)/e}function so(i){let t=i.trim().replace(/^#/,""),e=t.length===3?t.split("").map(o=>o+o).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]}function Xs(i){return`#${i.map(t=>Math.round(y(t,0,255)).toString(16).padStart(2,"0")).join("")}`}function Tn(i,t,e){let n=so(i),o=so(t);if(!n||!o)return t;let s=y(e,0,1);return Xs([Sn(n[0],o[0],s),Sn(n[1],o[1],s),Sn(n[2],o[2],s)])}function An(i){return typeof i=="number"&&Number.isFinite(i)}function ut(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let t=Number(i.replace(",","."));if(Number.isFinite(t))return t}return null}function ro(i){return i.length===0?"":i.map((t,e)=>`${e===0?"M":"L"}${l(t.x,2)} ${l(t.y,2)}`).join(" ")}function Be(i,t=.5){if(i.length<3)return ro(i);let e=[`M${l(i[0].x,2)} ${l(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],a=i[n+2]??r,c=s.x+(r.x-o.x)/6*t*2,u=s.y+(r.y-o.y)/6*t*2,d=r.x-(a.x-s.x)/6*t*2,h=r.y-(a.y-s.y)/6*t*2;e.push(`C${l(c,2)} ${l(u,2)} ${l(d,2)} ${l(h,2)} ${l(r.x,2)} ${l(r.y,2)}`)}return e.join(" ")}function Ve(i,t,e=!1){if(i.length===0)return"";let n=e?Be(i):ro(i),o=i[0],s=i[i.length-1];return`${n} L${l(s.x,2)} ${l(t,2)} L${l(o.x,2)} ${l(t,2)} Z`}function Et(i,t,e){let n=e*Math.PI/180;return{x:i.x-t*Math.sin(n),y:i.y-t*Math.cos(n)}}function ao(i,t,e){let n=y(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${l(i.x-t,2)} ${l(i.y,2)} a${l(t,2)} ${l(t,2)} 0 1 1 ${l(t*2,2)} 0 a${l(t,2)} ${l(t,2)} 0 1 1 ${l(-t*2,2)} 0 Z`;let o=t*(1-2*n),s=1,r=o>0?0:1,a={x:i.x-t,y:i.y},c={x:i.x+t,y:i.y};return`M${l(a.x,2)} ${l(a.y,2)} A${l(t,2)} ${l(t,2)} 0 0 ${s} ${l(c.x,2)} ${l(c.y,2)} A${l(t,2)} ${l(Math.abs(o),4)} 0 0 ${r} ${l(a.x,2)} ${l(a.y,2)} Z`}function lo(i=new Date){let t=i.getTime();return t+(6e4-t%6e4)+250}var Qs=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function te(i){let{size:t,illumination:e,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:c}=i,u={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=ao(u,d,e),m=r&&t>=26,b=l(-n,2);return g`
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
      ${h?g`<g transform="rotate(${b} ${l(u.x,2)} ${l(u.y,2)})">
              <path d="${h}" fill="${o}" />
              ${m?g`<g clip-path="url(#${c}-clip)" opacity="0.16">
                      <clipPath id="${c}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${Qs.map(v=>{let D={x:u.x+v.x*d,y:u.y+v.y*d};return g`<circle
                          cx="${l(D.x,2)}" cy="${l(D.y,2)}"
                          r="${l(v.r*d,2)}"
                          fill="#5a6488" />`})}
                    </g>`:g``}
            </g>`:g``}
      <circle
        cx="${l(u.x,2)}" cy="${l(u.y,2)}" r="${l(d,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function En(i,t,e,n){let o=Et(i,t,e),s=e*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),c=y(t*.12,4,9),u=y(t*.07,2.5,5),d={x:o.x+r*c,y:o.y+a*c},h={x:o.x-a*u,y:o.y+r*u},m={x:o.x+a*u,y:o.y-r*u};return g`
    <polygon
      points="${l(d.x,2)},${l(d.y,2)} ${l(h.x,2)},${l(h.y,2)} ${l(m.x,2)},${l(m.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var Ze="sun-moon-card",Rn="sun-moon-card",mo="sun-moon-card-editor";var Pn=24,tr=16,Dn=4,er=12,nr=36,_e=[2,12],Rt=[320,1200],Pt=[260,800];function ee(i){return i?[Pn,800]:[120,800]}var E={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0},po=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],go=400,fo=250,bo=1200*1e3,In={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},zn={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},yo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],On=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Gt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon"]},vo=700,ir=260,Fn=16,Un=4,_o=72,co=10,Hn=56,or=84,sr=96,Cn=74,rr=Hn+8,ar=12,lr=10,nt=4,je=4,uo=30,ho=44,cr=26,ur=72,Gn=96,Nn=20,Ln=18;function wo(i,t,e){if(e.minimal_mode){let P=(e.minimal_show_times||e.minimal_show_zenith)&&i>=nr?er:0,U=Math.max(tr,i-2*Dn-P);return{padding:Dn,minimalTimesHeight:P,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,t-2*Dn),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:U,minimal:!0,compact:!1}}let n=e.compact_mode,o=n?lr:ar,s=Math.max(40,i-2*o),r=0,a=e.show_footer&&!n?Nn+nt:0,c=uo+nt+ho+nt+a+(Ln+je)+Cn,u=e.show_header&&!n&&s>=c,d=u?uo:0;s-=d,u&&(s-=nt,r+=nt);let h=n?cr:ho,m=e.show_events&&s-(h+nt)-a>=or,b=m?h:0;s-=b,m&&(s-=nt,r+=nt);let v=e.show_astronomical_details?Gn:ur,D=!n&&(e.show_sun||e.show_moon)&&s-(v+nt)-a>=sr,$=D?v:0;s-=$,D&&(s-=nt,r+=nt);let T=e.show_footer&&!n&&m&&s-(Nn+nt)>=rr,f=T?Nn:0;s-=f,T&&(s-=nt,r+=nt);let _=Math.max(Hn,s),C=e.show_day_chart&&!n&&m&&_-Ln-je>=Cn,M=C?Ln:0;C&&(r+=je);let w=Math.max(Hn,_-M-(C?je:0)),O=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),Z=O&&t>=vo&&w>=Cn,tt=Math.max(80,t-2*o),W=Z?Math.round(Math.min(ir,(tt-co)/3)):0,it=Math.max(120,Z?tt-co-W:tt);return{padding:o,showHeader:u,showEvents:m,showDetails:D,showFooter:T,showLegend:C,skyViewSide:Z,skyViewInline:!Z&&O&&D,skyViewWidth:W,chartWidth:it,gaps:r,headerHeight:d,eventsHeight:b,detailsHeight:$,footerHeight:f,legendHeight:M,chartHeight:w,minimal:!1,minimalTimesHeight:0,compact:n}}function $o(i){return i>=vo?360:320}function qe(){return{type:`custom:${Ze}`,card_height:340}}var Kn={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function j(i,t,e){let o=(Kn[i]??Kn.en)[t]??Kn.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function Kt(i,t){return((i&&i!=="auto"?i:t)??"").toLowerCase().startsWith("de")?"de":"en"}function ko(i,t,e){let n=i;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var xo=new Map;function Wn(i,t,e){let n=`${t}|${i}`,o=xo.get(n);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(t,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(c=>c.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return xo.set(n,s),s}var Mo=new Map;function dr(i,t,e){let n=`${i}|${t}|${e}`,o=Mo.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}Mo.set(n,o)}return o}function Q(i,t){return dr(t.locale,t.timeZone,t.hour12).format(i)}function So(i,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function Bn(i,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}catch{return i.toFixed(t)}}function lt(i,t=1,e="de-DE"){return`${Bn(i,t,e)}\xB0`}function Ye(i,t="de-DE"){return`${Bn(Math.round(i),0,t)} km`}function To(i,t="de-DE"){let e=i<0?"\u2212":"+",n=Math.round(Math.abs(i)),o=Math.floor(n/60),s=n%60,r=t.startsWith("de")?":":"h ",a=t.startsWith("de")?"":"m";return`${e}${o}${r}${String(s).padStart(2,"0")}${a}`}function Vn(i){let t=Math.max(0,Math.round(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function Ao(i,t){let e=Math.max(0,Math.round(i));if(e<60)return t("countdownMinutes",{minutes:String(e)});let n=Math.floor(e/60),o=e%60;return n<24?t("countdownHours",{hours:String(n),minutes:String(o)}):t("countdownDays",{days:String(Math.floor(n/24)),hours:String(n%24)})}function Je(i,t){return t(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function Eo(i,t="de-DE"){return`${Bn(i*100,0,t)} %`}function Wt(i,t){let e=(i%360+360)%360,n=On[0],o=1/0;for(let r of On){let a=Math.abs((e-r.deg+540)%360-180);a<o&&(o=a,n=r)}let s=`dir${n.key}`;return j(t,s)}function Do(i,t,e,n){return{language:i,locale:t,timeZone:e,hour12:n,t:(o,s)=>j(i,o,s)}}function Co(i,t){if(i.length<=t)return i;let e=i.length/t,n=[];for(let s=0;s<t;s++)n.push(i[Math.floor(s*e)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function hr(i,t,e,n,o){if(i.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),a,c;if(s!==void 0&&r!==void 0&&r>s)a=n(s),c=n(r);else if(e==="polar-day")a=i[0].x,c=i[i.length-1].x;else return null;let u=i.filter(d=>d.x>=a-.5&&d.x<=c+.5);return u.length<2?null:{path:Ve(u,o,!0),cx:(a+c)/2,cy:o,r:Math.max(6,(c-a)/2)}}function mr(i,t){let e=t?Math.max(i.maxAltitude,t.maxAltitude):i.maxAltitude,n=t?Math.min(i.minAltitude,t.minAltitude):i.minAltitude,o=Math.min(n,-18),s=Math.max(3,(e-o)*.1),r=y(e+s,-18,90.5);return[y(Math.max(-28,n-2),-90,r-6),r]}function jn(i,t,e=2.2){let n=[0,vt,Tt,At],o=[t.day,t.civil,t.nautical,t.astronomical,t.night];if(i>e/2){let s=y(1-i/12,0,1)*.5;return Tn(t.day,t.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+e/2,a=n[s]-e/2;if(i>=r)return o[s];if(i>a){let c=(r-i)/e;return Tn(o[s],o[s+1],c*c*(3-2*c))}}return o[o.length-1]}function pr(i,t,e,n=24){let o=[];for(let s=0;s<=n;s++){let r=s/n,a=t+e*(1-r);o.push({offset:r,color:jn(a,i)})}return o}function gr(i,t,e,n,o,s){let r=i.samples;if(r.length<2)return[];let a=[],c=(d,h)=>{d&&!Number.isNaN(d.getTime())&&a.push({time:d.getTime(),color:h})};c(t.astronomicalDawn,e.astronomical),c(t.nauticalDawn,e.nautical),c(t.civilDawn,e.civil),c(t.sunrise,e.glow),c(t.solarNoon,e.day),c(t.sunset,e.glow),c(t.civilDusk,e.civil),c(t.nauticalDusk,e.nautical),c(t.astronomicalDusk,e.astronomical);let u=[{offset:0,color:jn(r[0].altitude,e)},...a.map(d=>({offset:y((n(d.time)-o)/s,0,1),color:d.color})),{offset:1,color:jn(r[r.length-1].altitude,e)}];return u.sort((d,h)=>d.offset-h.offset),u}function Zn(i){let{profile:t,events:e,now:n,width:o,height:s,palette:r,format:a,showSun:c,showMoon:u,moon:d,moonPath:h,showTwilight:m,twilightLevel:b,animations:v,cardStyle:D,minimal:$,sunMarkerSize:T,uid:f,showAstronomicalLayers:_,currentAltitude:C}=i,M=Math.max($?60:120,o),w=Math.max($?12:56,s),O=$?2:4,Z=$?2:4,tt=$?2:6,W=!$&&w>=112,it=W?y(l(w*.13,1),13,20):0,S=O,k=Math.max(10,M-O-Z),P=tt,U=Math.max(10,w-tt-it),H=P+U,[q,et]=mr(t,h?.profile??null),Ct=Math.max(1,et-q),J=t.dayStart.getTime(),wt=t.dayEnd.getTime(),z=Math.max(1,wt-J),G=p=>S+(p-J)/z*k,ot=p=>H-(y(p,-95,95)-q)/Ct*U,It=ot(0),xe=y(Math.round(k/1.6),60,361),F=Co(t.samples,xe).map(p=>({x:G(p.time),y:ot(p.altitude)})),st=pr(r,q,Ct),ct=gr(t,e,r,G,S,k),N=`${f}-area`,rt=`${f}-line`,gt=`${f}-clip`,dt=`${f}-glow`,ie=`${f}-sky`,ri=`${f}-soft`,ai=`${f}-soft-fade`,li=`${f}-foot`,ci=`${f}-foot-fade`,ui=`${f}-side`,di=`${f}-side-fade`,ft=D==="horizon",Jo=Ve(F,ft?l(It,2):H+1,!0),Xo=Be(F),hi=h?Co(h.profile.samples,y(Math.round(k/2),40,240)).map(p=>({x:G(p.time),y:ot(p.altitude)})):null,Xe=hi&&!$?Be(hi):null,Qe="var(--smc-moon-line, #cbd5e1)",Qo=y(l(w*.013,2),1.1,1.9),ts=Ve(F,P-1,!0),oe=D==="flat"?.6:ft?.3:1,es=ft?0:l(.15*oe,3),$t=P-1,tn=H+1,Nt=Math.max(1,tn-$t),ns=y(U*.14,$?1.5:6,18),is=y(U*.08,$?1:4,12),os=y(k*.02,$?2:6,14),mi=y(l(U*.06,1),$?1.5:4,10),ss=l(y(ns/Nt,0,.45),4),pi=l(1-y(is/Nt,0,.45),4),Vt=S-1,Me=S+k+1,gi=l(y(os/Math.max(1,Me-Vt),0,.4),4),rs=Math.max(16,k*.16),as=y(U*.45,9,46),ke=[];U>=34&&(e.sunrise&&ke.push({id:`${f}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&ke.push({id:`${f}-glow-set`,time:e.sunset,color:r.glow}));let jt=$?null:hr(F,e,t.polar,G,It),fi=`${f}-dome`,Y=a.t,se=[],re=p=>{p.time&&!Number.isNaN(p.time.getTime())&&se.push({secondary:!1,...p})};if(e.sunrise&&re({key:"sunrise",time:e.sunrise,label:Y("sunrise"),shortLabel:Y("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&re({key:"sunset",time:e.sunset,label:Y("sunset"),shortLabel:Y("sunsetShort"),kind:"sunset",altitude:0}),m&&(e.civilDawn&&re({key:"civilDawn",time:e.civilDawn,label:Y("civilDawn"),shortLabel:Y("civilDawnShort"),kind:"dawn",altitude:vt}),e.civilDusk&&re({key:"civilDusk",time:e.civilDusk,label:Y("civilDusk"),shortLabel:Y("civilDuskShort"),kind:"dusk",altitude:vt}),b==="all"||_)){let p=[["nauticalDawn","dawn","nauticalDawn",Tt],["nauticalDusk","dusk","nauticalDusk",Tt],["astronomicalDawn","dawn","astronomicalDawn",At],["astronomicalDusk","dusk","astronomicalDusk",At]];for(let[L,I,B,at]of p){let ce=e[L];ce&&re({key:L,time:ce,label:Y(B),shortLabel:Y(B),kind:I,altitude:at,secondary:!0})}}se.sort((p,L)=>p.time.getTime()-L.time.getTime());let Se=y(l(w*.062,1),7.5,10.5),en=y(l(Se+5,1),11,it||15),ls=se.filter(p=>!p.secondary),cs=se.filter(p=>p.secondary),us=k<240?3:k<340?4:6,bi=$?[]:[...ls,...cs].slice(0,Math.max(2,us)).sort((p,L)=>p.time.getTime()-L.time.getTime()),ds=bi.length>3||k<300,nn=[],on=-1/0;for(let p of bi){let L=ds?p.shortLabel:p.label,I=L.length*Se*.56+8,B=G(p.time.getTime());B=y(B,S+I/2,S+k-I/2),B-I/2<on+3&&(B=on+3+I/2),!(B+I/2>S+k+.5)&&(on=B+I/2,nn.push({x:B,width:I,text:L,secondary:p.secondary}))}let xt=y(G(n.getTime()),S,S+k),hs=r.day,zt=y(l(w*.16,1),Math.min(2.8,T),T),yi=y(l(zt*.22,2),.8,1.4),Mt=y(l(zt*1.1,1),3.5,7),vi=(p,L)=>U<=L*2?P+U/2:y(ot(p),P+L,H-L),_i=vi(C,zt),ht=u&&d&&!$?{altitude:d.altitude,y:vi(d.altitude,Mt),clamped:d.altitude<q||d.altitude>et}:null,ms=ht?Math.abs(ht.y-_i):Number.POSITIVE_INFINITY,sn=zt+Mt+2,ae=ht?ms>=zt+Mt+1?xt:xt+sn+Mt<=S+k?xt+sn:Math.max(S+Mt,xt-sn):null,ps=v?"smc-pulse":"",gs=v?`url(#${dt})`:"",rn=[{altitude:0,label:Y("horizon"),key:"horizon"}];_||b==="all"?rn.push({altitude:vt,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Tt,label:`${Y("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:At,label:`${Y("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&rn.push({altitude:vt,label:`${Y("refCivil")} (\u22126\xB0)`,key:"civil"});let fs=!$&&U>=86&&k>=250,bs=rn.filter(p=>(!$||p.key==="horizon")&&p.altitude>q+.5&&p.altitude<et-.5),ys=y(l(w*.055,1),7.5,9.5),le=e.solarNoon,wi=!$&&!!le&&t.maxAltitude>0&&U>=104&&k>=220&&_,$i=wi?`${Y("zenith")} ${Q(le,a)} \xB7 ${lt(t.maxAltitude,1,a.locale)}`:"",Te=y(l(w*.055,1),7.5,9.5),Ae=$i.length*Te*.56+10,xi=le?y(G(le.getTime()),S+Ae/2,S+k-Ae/2):0,Mi=le?ot(t.maxAltitude):0,Ee=Te+5,ki=y(Mi-Ee-4,P,Math.max(P,Mi+10)),Si=$?1:k<220?4:k<420?6:8,Ti=[];for(let p=1;p<Si;p++)Ti.push(S+k*p/Si);return g`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(M,1)} ${l(w,1)}"
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
        ${ct.length>=2?g`<linearGradient id="${ie}" gradientUnits="userSpaceOnUse"
                x1="${l(S,1)}" y1="0" x2="${l(S+k,1)}" y2="0">
                ${ct.map(p=>g`<stop offset="${l(p.offset*100,3)}%" stop-color="${p.color}" />`)}
              </linearGradient>`:g``}
        ${ke.map(p=>g`<radialGradient id="${p.id}">
              <stop offset="0%" stop-color="${p.color}" stop-opacity="${l(.5*oe,3)}" />
              <stop offset="45%" stop-color="${p.color}" stop-opacity="${l(.2*oe,3)}" />
              <stop offset="100%" stop-color="${p.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${jt?g`<radialGradient id="${fi}" gradientUnits="userSpaceOnUse"
                cx="${l(jt.cx,1)}" cy="${l(jt.cy,1)}" r="${l(jt.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${l(.3*oe,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${l(.18*oe,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:g``}
        <linearGradient id="${ai}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l($t,1)}" x2="0" y2="${l(tn,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${ss}" stop-color="#ffffff" />
          <stop offset="${pi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ri}" maskUnits="userSpaceOnUse"
          x="${l(S-2,1)}" y="${l($t,1)}"
          width="${l(k+4,1)}" height="${l(Nt,1)}">
          <rect
            x="${l(S-2,1)}" y="${l($t,1)}"
            width="${l(k+4,1)}" height="${l(Nt,1)}"
            fill="url(#${ai})" />
        </mask>
        <linearGradient id="${ci}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${l($t,1)}" x2="0" y2="${l(tn,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${pi}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${li}" maskUnits="userSpaceOnUse"
          x="${l(S-2,1)}" y="${l($t,1)}"
          width="${l(k+4,1)}" height="${l(Nt,1)}">
          <rect
            x="${l(S-2,1)}" y="${l($t,1)}"
            width="${l(k+4,1)}" height="${l(Nt,1)}"
            fill="url(#${ci})" />
        </mask>
        <linearGradient id="${di}" gradientUnits="userSpaceOnUse"
          x1="${l(Vt,1)}" y1="0" x2="${l(Me,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${gi}" stop-color="#ffffff" />
          <stop offset="${l(1-gi,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ui}" maskUnits="userSpaceOnUse"
          x="${l(Vt,1)}" y="${l($t,1)}"
          width="${l(Me-Vt,1)}" height="${l(Nt,1)}">
          <rect
            x="${l(Vt,1)}" y="${l($t,1)}"
            width="${l(Me-Vt,1)}" height="${l(Nt,1)}"
            fill="url(#${di})" />
        </mask>
        <clipPath id="${gt}">
          <rect x="${l(S-1,1)}" y="${l(P-2,1)}"
            width="${l(k+2,1)}" height="${l(U+4,1)}"
            rx="${mi}" ry="${mi}" />
        </clipPath>
        ${v?g`<filter id="${dt}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${l(zt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:g``}
      </defs>

      <g clip-path="url(#${gt})">
        ${Ti.map(p=>g`<line x1="${l(p,1)}" y1="${l(P,1)}" x2="${l(p,1)}" y2="${l(H,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${ui})">
        <path d="${Jo}" fill="url(#${N})" opacity="0.9" mask="url(#${li})" />
        <g mask="url(#${ri})">
          ${ct.length>=2&&!ft?g`<path d="${ts}" fill="url(#${ie})" opacity="${es}" />`:g``}
          ${ke.map(p=>{let L=y(G(p.time.getTime()),S,S+k),I=y(It,P,H);return g`<ellipse
                cx="${l(L,1)}" cy="${l(I,1)}"
                rx="${l(rs,1)}" ry="${l(as,1)}"
                fill="url(#${p.id})" />`})}
          ${jt&&!ft?g`<path d="${jt.path}" fill="url(#${fi})" opacity="0.95" />`:g``}
        </g>
        </g>
        ${Xe?g`<path
                class="moon-curve"
                data-body="moon"
                d="${Xe}"
                fill="none"
                stroke="${Qe}"
                stroke-width="${Qo}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${ft?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:g``}
        ${h&&Xe?g`<g class="moon-events">
                ${[[h.rise,"moonrise"],[h.set,"moonset"]].filter(p=>p[0]!==null).map(([p,L])=>{let I=y(G(p),S,S+k),B=y(ot(0),P,H),at=y(l(w*.05,1),4,8);return g`<g>
                      <title>${a.t(L)} ${Q(new Date(p),a)}</title>
                      <line
                        x1="${l(I,1)}"
                        y1="${l(B-at,1)}"
                        x2="${l(I,1)}"
                        y2="${l(B+at,1)}"
                        stroke="${Qe}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${l(I,1)}"
                        cy="${l(B,1)}"
                        r="${y(l(w*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${Qe}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:g``}
        <path
          d="${Xo}"
          fill="none"
          stroke="url(#${rt})"
          stroke-width="${y(l(w*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${bs.map(p=>{let L=ot(p.altitude),I=p.key==="horizon";return g`<g>
            <line
              x1="${l(S,1)}" y1="${l(L,1)}"
              x2="${l(S+k,1)}" y2="${l(L,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${I&&ft?1.5:I?1:.6}"
              stroke-dasharray="${I&&ft?"999 0":I?"3 3":"2 4"}"
              opacity="${I&&ft?.9:I?.6:ft?.3:.45}"
            />
            ${fs?g`<text
                    x="${l(S+3,1)}"
                    y="${l(L-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${ys}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${p.label}</text>`:g``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${se.map(p=>{let L=y(G(p.time.getTime()),S,S+k),I=y(ot(p.altitude),P,H),B=!p.secondary,at=B?y(l(w*.022,1),1.8,3):1.4,ce="var(--smc-marker-strong, rgba(255,255,255,0.9))",Ai="var(--smc-marker-soft, rgba(255,255,255,0.55))",vs=p.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":p.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":p.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",_s=B?vs:Ai,ws=B?ce:Ai,$s=p.kind==="sunrise"||p.kind==="sunset"?g`
                <circle cx="${l(L,1)}" cy="${l(I,1)}" r="${at+1}"
                  fill="${p.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${l(L-at*2.6,1)}"
                  y1="${l(p.kind==="sunrise"?I+at+2:I-at-2,1)}"
                  x2="${l(L+at*2.6,1)}"
                  y2="${l(p.kind==="sunrise"?I+at+2:I-at-2,1)}"
                  stroke="${ce}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:g`<circle cx="${l(L,1)}" cy="${l(I,1)}" r="${at}"
                  fill="${ws}" opacity="0.85" />`;return g`<g>
            <line
              x1="${l(L,1)}" y1="${l(P,1)}"
              x2="${l(L,1)}" y2="${l(H,1)}"
              stroke="${_s}" stroke-width="${B?1:.7}"
              stroke-dasharray="3 3" opacity="${B?.5:.25}" />
            ${$s}
          </g>`})}
      </g>

      <g class="now-marker">
        <line
          x1="${l(xt,1)}" y1="${l(P,1)}"
          x2="${l(xt,1)}" y2="${l(H,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${y(l(w*.012,2),1,1.8)}"
          opacity="0.85" />
        ${c?g`<g class="now-sun ${ps}" filter="${gs}">
                <title>${a.t("chartSunNow",{altitude:lt(C,1,a.locale)})}</title>
                <circle
                  cx="${l(xt,1)}"
                  cy="${l(_i,1)}"
                  r="${zt}"
                  fill="${hs}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${yi}"
                />
              </g>`:g``}
        ${ht&&ae!==null&&d?g`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:lt(ht.altitude,1,a.locale)})}${ht.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${ae===xt?g``:g`<line
                        x1="${l(xt,1)}"
                        y1="${l(ht.y,1)}"
                        x2="${l(ae,1)}"
                        y2="${l(ht.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${l(ae,1)}"
                  cy="${l(ht.y,1)}"
                  r="${l(Mt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${yi}" />
                <g
                  transform="translate(${l(ae-Mt,1)} ${l(ht.y-Mt,1)})"
                  opacity="${ht.clamped?.6:1}"
                >
                  ${te({size:l(Mt*2,1),illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${f}-moon-now`})}
                </g>
              </g>`:g``}
      </g>

      ${wi?g`<g class="zenith-chip">
              <rect
                x="${l(xi-Ae/2,1)}"
                y="${l(ki,1)}"
                width="${l(Ae,1)}"
                height="${l(Ee,1)}"
                rx="${l(Ee/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${l(xi,1)}"
                y="${l(ki+Ee/2+Te*.36,1)}"
                text-anchor="middle"
                font-size="${Te}"
                fill="var(--smc-label-color, #ffffff)"
              >${$i}</text>
            </g>`:g``}

      ${W?g`<line
              x1="${l(S,1)}" y1="${l(H+.5,1)}"
              x2="${l(S+k,1)}" y2="${l(H+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:g``}

      ${nn.length?g`<g class="event-labels" font-size="${Se}">
              ${nn.map(p=>{let L=W?H+2:P;return g`<g>
                  <rect
                    x="${l(p.x-p.width/2,1)}"
                    y="${l(L,1)}"
                    width="${l(p.width,1)}"
                    height="${l(en,1)}"
                    rx="${l(en/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${p.secondary?.6:.88}" />
                  <text
                    x="${l(p.x,1)}"
                    y="${l(L+en/2+Se*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${p.secondary?.75:1}"
                  >${p.text}</text>
                </g>`})}
            </g>`:g``}
    </svg>
  `}function qn(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function fr(i,t,e){let n=[];for(let o=0;o<t;o++){let s=Math.sqrt(qn(i*7.13+o*1.37))*e*.96,r=qn(i*3.71+o*2.11)*360,a=Et({x:0,y:0},s,r),c=qn(i*5.19+o*4.53);n.push({x:a.x,y:a.y,r:.35+c*.75,opacity:.16+c*.34})}return n}function Yn(i,t){return y((90-i)/90*t,0,t)}function Jn(i){let{width:t,height:e,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:c,palette:u,format:d,animations:h,uid:m,showCardinals:b=!0,seed:v=0}=i,D=Math.max(80,t),$=Math.max(80,e),T=6,f={x:D/2,y:$/2},_=Math.max(10,Math.min(D,$)/2-T),C=`${m}-dome`,M=`${m}-dome-clip`,w=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],O=y(l(_*.17,1),7,11),Z=n?n.altitude>0:!1,tt=y(l(_*.11,1),4,11),W=n?Et(f,Yn(n.altitude,_),n.azimuth):null,it=a&&n&&W,S=o?o.altitude>0:!1,k=y(l(_*.24,1),10,22),P=o?Et(f,Yn(o.altitude,_),o.azimuth):null,U=c&&o&&P&&r,H=b&&_>=42,q=y(l(_*.14,1),6.5,9),et=[{altitude:30,radius:_*(60/90)},{altitude:60,radius:_*(30/90)}],J=(n?.altitude??-90)<-6?fr(Math.max(1,Math.round(v)),46,_):[],wt=s.filter(z=>z.altitude>=-8).map(z=>Et(f,Yn(z.altitude,_),z.azimuth));return g`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${l(D,1)} ${l($,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${C}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${u.skyTop}" />
          <stop offset="100%" stop-color="${u.skyBottom}" />
        </radialGradient>
        <clipPath id="${M}">
          <circle cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(_,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(_,1)}"
        fill="url(#${C})" opacity="0.55" />

      <g clip-path="url(#${M})">
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
          x1="${l(f.x-_,1)}" y1="${l(f.y,1)}"
          x2="${l(f.x+_,1)}" y2="${l(f.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${l(f.x,1)}" y1="${l(f.y-_,1)}"
          x2="${l(f.x,1)}" y2="${l(f.y+_,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${wt.length>1?g`<path
                d="M${wt.map(z=>`${l(z.x,1)} ${l(z.y,1)}`).join(" L")}"
                fill="none"
                stroke="${u.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:g``}
      </g>

      <circle
        cx="${l(f.x,1)}" cy="${l(f.y,1)}" r="${l(_,1)}"
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

      ${b?g`<g font-size="${O}" fill="var(--smc-muted-color)" opacity="0.7">
              ${w.map(z=>{let G=Et(f,_*.87,z.azimuth);return g`<text
                  x="${l(G.x,1)}"
                  y="${l(G.y+O*.35,1)}"
                  text-anchor="middle"
                >${z.key}</text>`})}
            </g>`:g``}

      ${it&&Z&&W?g`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${l(W.x,1)}" cy="${l(W.y,1)}" r="${tt}"
                fill="${u.lineDay}" opacity="0.28" />
              <circle
                cx="${l(W.x,1)}" cy="${l(W.y,1)}" r="${l(tt*.55,1)}"
                fill="${u.lineDay}" />
            </g>`:g``}
      ${a&&n&&!Z?En(f,_,n.azimuth,u.lineNight):g``}

      ${U&&S&&P&&r?g`<g transform="translate(${l(P.x-k/2,1)} ${l(P.y-k/2,1)})">
              ${te({size:k,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:k>=16,uid:`${m}-moon`})}
            </g>`:g``}
      ${c&&o&&!S?En(f,_,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):g``}
    </svg>
  `}function Xn(i,t,e){i.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}function br(i){if(typeof i!="string")return null;let[t,e]=i.split(".",2);return!t||!e?null:[t,e]}function No(i,t,e,n,o){typeof i?.callService=="function"&&i.callService(t,e,n,o)}function Lo(i,t,e,n,o){if(!n){o?.();return}switch(n.action){case"none":return;case"open-popup":o?.();return;case"more-info":Xn(i,"hass-more-info",{entityId:n.entity??e.entity});return;case"navigate":{let s=typeof n.navigation_path=="string"?n.navigation_path:"";if(s==="")return;history.pushState(null,"",s),Xn(window,"location-changed",{replace:!1});return}case"url":{let s=typeof n.url_path=="string"?n.url_path:"";if(s==="")return;window.open(s,typeof n.url_target=="string"?n.url_target:"_blank");return}case"toggle":No(t,"homeassistant","toggle",{entity_id:n.entity??e.entity});return;case"call-service":case"perform-action":{let s=br(n.service??n.perform_action);if(!s)return;let r=typeof n.data=="object"&&n.data!==null?n.data:typeof n.service_data=="object"&&n.service_data!==null?n.service_data:void 0,a=typeof n.target=="object"&&n.target!==null?n.target:void 0;No(t,s[0],s[1],r,a);return}case"fire-dom-event":Xn(window,"ll-custom",n);return;default:return}}function Ho(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function Ro(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Qn(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function ti(i=16,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Po(i=20,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function Io(i=18,t="currentColor"){return g`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var zo=new Map;function Oo(i){let t=zo.get(i);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),zo.set(i,t)),t}function yr(i){try{return Oo(i)}catch{return Oo("UTC")}}function ei(i,t){let e=yr(t).formatToParts(i),n={};for(let o of e)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function Fo(i,t){let e=ei(i,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function vr(i,t,e,n=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,t-1,e,n,o,s),c=1440*60*1e3,u=[Fo(new Date(a-c),r),Fo(new Date(a+c),r)],d=[...new Set(u)].map(m=>a-m).filter(m=>{let b=ei(new Date(m),r);return b.year===i&&b.month===t&&b.day===e&&b.hour===n&&b.minute===o&&b.second===s}).sort((m,b)=>m-b);if(d.length>0)return new Date(d[0]);let h=Math.min(...u);return new Date(a-h)}function ne(i,t){let e=ei(i,t);return vr(e.year,e.month,e.day,0,0,0,t)}function Uo(i,t){let e=ne(i,t);return ne(new Date(e.getTime()+2160*60*1e3),t)}function _t(i,t){return Math.round(ne(i,t).getTime()/(1440*60*1e3))}function Go(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function X(i,t){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:t}function we(i,t,e){return typeof i=="string"&&t.includes(i)?i:e}function ni(i,t,e,n,o,s=0){let r=ut(i);if(r===null)return t;let a=y(r,e[0],e[1]);return Math.abs(a-r)>1e-9&&o.push(j(n,"invalidRange",{value:String(i),min:String(e[0]),max:String(e[1])})),s===0?Math.round(a):l(a,s)}function ii(i,t,e){if(i==null)return null;let n=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=n?.action;if(typeof o!="string"||o.trim()==="")return e.push(j(t,"invalidAction",{value:String(i)})),null;let s=o.trim();return po.includes(s)?{...n,action:s}:(e.push(j(t,"invalidAction",{value:s})),null)}function Bo(i,t="en"){let e=[],n=[],o=i??{},s=X(o.minimal_mode,E.minimal_mode),r=ee(s),a=E.card_height;if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(y(o.card_height,r[0],r[1])),a!==o.card_height&&n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")n.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let b=ut(o.card_height);b===null?e.push(j(t,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(y(b,r[0],r[1]))}let c=null,u=null,d=ut(o.latitude),h=ut(o.longitude);return d!==null&&(d>=-90&&d<=90?c=d:n.push(j(t,"invalidNumber",{value:String(o.latitude)}))),h!==null&&(h>=-180&&h<=180?u=h:n.push(j(t,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():E.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():E.moon_entity,card_height:a,show_sun:X(o.show_sun,E.show_sun),show_moon:X(o.show_moon,E.show_moon),show_twilight:X(o.show_twilight,E.show_twilight),show_astronomical_details:X(o.show_astronomical_details,E.show_astronomical_details),compact_mode:X(o.compact_mode,E.compact_mode),minimal_mode:s,minimal_show_times:X(o.minimal_show_times,E.minimal_show_times),minimal_show_zenith:X(o.minimal_show_zenith,E.minimal_show_zenith),sun_marker_size:ni(o.sun_marker_size,E.sun_marker_size,_e,t,n,1),popup_width:ni(o.popup_width,E.popup_width,Rt,t,n),popup_height:ni(o.popup_height,E.popup_height,Pt,t,n),show_remaining_time:X(o.show_remaining_time,E.show_remaining_time),tap_action:ii(o.tap_action,t,n),hold_action:ii(o.hold_action,t,n),double_tap_action:ii(o.double_tap_action,t,n),card_style:we(o.card_style,Gt.cardStyle,E.card_style),theme_mode:we(o.theme_mode,Gt.themeMode,E.theme_mode),animations:X(o.animations,E.animations),time_format:we(o.time_format,Gt.timeFormat,E.time_format),language:we(o.language,Gt.language,E.language),show_header:X(o.show_header,E.show_header),show_day_chart:X(o.show_day_chart,E.show_day_chart),show_sky_view:X(o.show_sky_view,E.show_sky_view),show_events:X(o.show_events,E.show_events),show_moon_times:X(o.show_moon_times,E.show_moon_times),show_footer:X(o.show_footer,E.show_footer),twilight_level:we(o.twilight_level,Gt.twilightLevel,E.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:c,longitude:u},errors:e,warnings:n}}function Vo(i,t){let e=ee(i.minimal_mode);return i.card_height==="auto"?y($o(t),e[0],e[1]):y(i.card_height,e[0],e[1])}function _r(i,t,e,n="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},c={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:t,location:o,locationName:"",extras:wr(t,jo(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:c,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function jo(i){return i==="de"?"de-DE":"en-GB"}function wr(i,t){return{timeZoneLongName:Wn(i,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null}}function $r(i,t){let e=kn(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return o(n)===o(i)}function xr(i,t,e){if(!i)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(i));if(!Number.isFinite(n)||n<1||n>12)return null;let o=yo[n-1];return j(e,"folkName",{name:j(e,o)})}function Ko(i,t,e,n){return i?{time:i,azimuth:We(i,t,"moon"),dayOffset:_t(i,n)-_t(e,n)}:null}function Mr(i){if(typeof i!="string"||i.trim()==="")return null;let t=new Date(i);return Number.isNaN(t.getTime())?null:t}var Wo=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],kr={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function Sr(i,t,e){let n=Go(t?.config?.time_zone),o=[],s=An(t?.config?.latitude)?t.config.latitude:null,r=An(t?.config?.longitude)?t.config.longitude:null,a=i.latitude??s,c=i.longitude??r,u=Kt(i.language,t?.locale?.language??t?.language);if(a===null||c===null)return _r(e,n,["missing-location",...o],u);let d={latitude:a,longitude:c},h=i.location_name.trim()!==""?i.location_name.trim():t?.config?.location_name??"",m=ne(e,n),b=Uo(e,n),v=xn(d,m,b),D=Ue(e,d),$=D.altitude,T=Fe(e.getTime()+6e4,d),f=Ht(e,d),_=Ge(e),C=eo(e,d),M=t?.states?.[i.entity];M||o.push("missing-sun-entity");let w={...v.events},O={};if(M?.attributes)for(let[N,rt]of Wo){let gt=Mr(M.attributes[rt]),dt=v.events[N];if(gt&&gt>=m&&gt<b&&(!dt||Math.abs(gt.getTime()-dt.getTime())<=bo)){w[N]=gt,O[N]="ha";continue}O[N]=dt?"computed":"none"}else for(let[N]of Wo)O[N]=v.events[N]?"computed":"none";for(let N of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])O[N]=v.events[N]?"computed":"none";let Z=M?.attributes?ut(M.attributes.elevation):null,tt=M?.attributes?ut(M.attributes.azimuth):null,W=i.moon_entity?t?.states?.[i.moon_entity]:void 0,it=W&&typeof W.state=="string"?kr[W.state]??null:null,S=i.show_moon?to(d,m,b,C):null,k=[],P=900*1e3;for(let N=m.getTime();N<=b.getTime();N+=P){let rt=Ue(N,d);k.push({altitude:rt.altitude,azimuth:rt.azimuth})}let U=null;w.sunrise&&w.sunset&&(U=(w.sunset.getTime()-w.sunrise.getTime())/6e4);let H=ne(new Date(m.getTime()-720*60*1e3),n),q=xn(d,H,m),et=q.events.sunrise&&q.events.sunset?(q.events.sunset.getTime()-q.events.sunrise.getTime())/6e4:null,Ct=U!==null&&et!==null?U-et:null,J=io(e),wt=i.twilight_level==="nautical"?Tt:i.twilight_level==="astronomical"?At:vt,z=N=>N?{time:N.time,rising:N.rising,dayOffset:_t(N.time,n)-_t(e,n)}:null,G=i.show_sun?z(Mn(d,e,ye)):null,ot=i.show_twilight?z(Mn(d,e,wt)):null,It=e.getTime(),F=[C.nextRise,C.nextSet].filter(N=>N instanceof Date&&N.getTime()>It).sort((N,rt)=>N.getTime()-rt.getTime())[0],st=i.show_moon&&F?{time:F,rising:F.getTime()===C.nextRise?.getTime(),dayOffset:_t(F,n)-_t(e,n)}:null,ct={timeZoneLongName:Wn(n,jo(u),e),previousDaylightMinutes:et,daylightDeltaMinutes:Ct,sunBelowHorizon:$<0?Math.abs($):null,sunriseAzimuth:w.sunrise?We(w.sunrise,d,"sun"):null,sunsetAzimuth:w.sunset?We(w.sunset,d,"sun"):null,nextFullMoon:J,nextFullMoonDays:J?Math.round((J.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:J?$r(J.time,n):!1,moonFolkName:xr(J?.time??null,n,u),moonDistance:oo(e,d,14),moonRise:Ko(C.nextRise??C.previousRise,d,e,n),moonSet:Ko(C.nextSet??C.previousSet,d,e,n),nextSunEvent:G,nextTwilightEvent:ot,nextMoonEvent:st};return v.polar==="polar-day"&&o.push("polar-day"),v.polar==="polar-night"&&o.push("polar-night"),w.sunrise||o.push("no-sunrise-today"),w.sunset||o.push("no-sunset-today"),!w.civilDawn&&!w.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:v,sun:{altitude:$,azimuth:D.azimuth,phase:no($),rising:T>$,haElevation:Z,haAzimuth:tt},moon:{position:f,phase:_,events:C,haPhaseName:it},sunTrack:k,moonPath:S,events:w,eventSources:O,extras:ct,daylightMinutes:U,issues:o,fatal:!1}}var $e=new Map;function Tr(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight)].join("|")}function Ar(i,t){if(!t)return"-";let e=t.states?.[i.entity],n=i.moon_entity?t.states?.[i.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",t.config?.location_name??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function Zo(i,t,e){let n=Math.floor(e.getTime()/6e4),o=[Tr(i),Ar(i,t),n,e.getTimezoneOffset()].join("#"),s=$e.get(o);if(s)return s;let r=Sr(i,t,e);if($e.size>24){let a=$e.keys().next().value;a!==void 0&&$e.delete(a)}return $e.set(o,r),r}var qo=Ne`
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
`,Yo=Ne`
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
`;function oi(i,t){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var Bt=class extends yt{setConfig(t){this._config={...t}}get _language(){return Kt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return j(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,o]of Object.entries(t)){let s=E[n];o===s&&n in E&&delete e[n]}this._config=e,oi(this,e)}render(){if(!this._config)return A``;let t=this._config.card_height,e=t==="auto"||t===null,n=this._config.minimal_mode===!0,o=ee(n),s=typeof t=="number"?t:E.card_height,r=this._config.latitude===void 0||this._config.latitude===null;return A`
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
                @change=${a=>{let c=ut(a.target.value);c!==null&&this._update({card_height:Math.round(y(c,o[0],o[1]))})}}
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

          ${this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",E.sun_marker_size),min:_e[0],max:_e[1],step:.5,digits:1,set:a=>this._update({sun_marker_size:a})})}

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
          ${n?A`<div class="row">
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
                  @change=${a=>{if(a.target.checked){let u={...this._config};delete u.latitude,delete u.longitude,this._config=u,oi(this,u)}else this._update({latitude:l(this.hass?.config?.latitude??0,4),longitude:l(this.hass?.config?.longitude??0,4)})}}
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
                @change=${a=>{let c=ut(a.target.value);this._update({latitude:c===null?void 0:y(c,-90,90)})}}
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
                @change=${a=>{let c=ut(a.target.value);this._update({longitude:c===null?void 0:y(c,-180,180)})}}
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
              ${n?Pn:120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_numberRow(t){let{id:e,labelKey:n,value:o,min:s,max:r,step:a,digits:c=0,set:u}=t,d=h=>String(c===0?Math.round(h):l(h,c));return A`
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
            @change=${h=>{let m=ut(h.target.value);m!==null&&u(y(m,s,r))}}
          />
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height,e=ee(this._config?.minimal_mode===!0);return typeof t=="number"&&(t<e[0]||t>e[1])?A`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:e[0],max:e[1]})}
      </span>`:x}_switch(t,e){let n=E[t];return A`
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
    `}_reset(){let t=qe();this._config=t,oi(this,t)}};Bt.styles=Yo,bt([Yt({attribute:!1})],Bt.prototype,"hass",2),bt([Jt()],Bt.prototype,"_config",2),Bt=bt([Pe(mo)],Bt);var Dt=class extends yt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=e=>{if(!this._popup)return;if(e.key==="Escape"){e.stopPropagation(),this._closeDetails();return}if(e.key!=="Tab")return;let n=this._popupFocusable(),o=n[0],s=n[n.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?n.indexOf(r):-1;if(a===-1){e.preventDefault(),(e.shiftKey?s:o).focus();return}e.shiftKey&&a===0?(e.preventDefault(),s.focus()):!e.shiftKey&&a===n.length-1&&(e.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let e=this._config?.hold_action;e&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(e,!1)},go))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=e=>{if(this._held){this._held=!1;return}let n=e.currentTarget;if(n instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(n);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,n);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(n)},fo)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(e){let n=this._hass;this._hass=e,this.requestUpdate("hass",n),this._popupCard&&(this._popupCard.hass=e)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return qe()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=Kt(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=Bo(e,n);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(e){super.willUpdate(e);let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),n=y(this._config.popup_width,Rt[0],Rt[1]),o=y(this._config.popup_height,Pt[0],Pt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",j(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${n}px)`,maxWidth:`${n}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",j(e,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let c=this._config,u={...c,latitude:c.latitude??void 0,longitude:c.longitude??void 0,location_name:c.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},d=document.createElement(Rn);d.hass=this.hass;try{d.setConfig(u)}catch{}this._popupCard=d,r.append(d,a),s.append(r),s.addEventListener("click",h=>{h.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let e=document.activeElement;if(!e)return null;let n=e.shadowRoot?.activeElement;return n instanceof HTMLElement?n:e}_popupFocusable(){if(!this._popup)return[];let e=[],n=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");n&&e.push(n);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||e.push(s);return e}_handleMinimalKey(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();let n=e.currentTarget;n instanceof HTMLElement&&this._runTap(n)}}_runTap(e){this._runAction(this._config?.tap_action??null,!0,e)}_runAction(e,n,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Lo(r,this.hass,s,e,n?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(e=>{let n=e.some(o=>o.isIntersecting);n!==this._visible&&(this._visible=n,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,lo()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let o=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Vo(this._config,this._width||400):E.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return Kt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return A``;let n=this._width||400,o=this._resolvedHeight(),s=wo(o,n,e),r=Zo(e,this.hass,new Date),a=this._language(),c=this._isDark(),u=c?In:zn;if(r.fatal)return A`
        <ha-card
          class=${St({"smc-dark":c,"smc-light":!c,"smc-minimal":s.minimal})}
          style=${V({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${Io(18)}</span>
              <span>${j(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=Do(a,this._locale(),r.timeZone,ko(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?A`
        <ha-card
          class=${St({"smc-dark":c,"smc-light":!c,"smc-minimal":!0})}
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
            style=${V({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
          >
            ${this._renderMinimalTimes(r,d,s,e)}
            <div
              class="chart-wrap minimal"
              style=${V({height:`${s.chartHeight}px`})}
            >
              ${Zn({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:!1,minimal:!0,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:A`
      <ha-card
        class=${St({"smc-dark":c,"smc-light":!c})}
        style=${V({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${St({root:!0,compact:s.compact})}
          style=${V({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,u,s):x}

          <div
            class=${St({body:!0,columns:s.skyViewSide})}
            style=${V({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?A`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${V({height:`${s.chartHeight}px`})}
                  >
                    ${Zn({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):x}
                </div>`:x}
            ${s.skyViewSide?A`<div
                  class="sky-column"
                  style=${V({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${Jn({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:u,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:_t(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth,this._countdownRows(s))}
                </div>`:x}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):x}
          ${s.showDetails?this._renderDetails(r,d,e,s,a,c,n):x}
          ${s.showFooter?this._renderFooter(r,d,e,s):x}
        </div>
      </ha-card>
    `}_renderHeader(e,n,o,s){let r=e.locationName||n.t("title"),a=e.extras,c=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),u=10.5,d=(C,M=!1)=>C.length*u*.58+20+(M?12:0),m=Math.max(0,c-10-108),b=n.t(this._phaseKey(e)),v=d(b,!0);m-=v;let D=this._countdowns(e,n)[0],$=x;if(D){let C=d(D.compact);C<=m&&(m-=C,$=A`<span class="meta-chip" title=${D.title}
          >${D.compact}</span
        >`)}let T=x;if(e.daylightMinutes!==null){let C=Vn(e.daylightMinutes),M=a.daylightDeltaMinutes===null?"":` ${To(a.daylightDeltaMinutes,n.locale)}`,w=`${n.t("dayLength")} ${C}${M}`,O=d(w);O<=m&&(m-=O,T=A`<span class="meta-chip" title=${n.t("dayLength")}
          >${w}</span
        >`)}let f=x,_=d(a.timeZoneLongName);return _<=m&&(m-=_,f=A`<span class="meta-chip">${a.timeZoneLongName}</span>`),A`
      <div class="header" style=${V({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${So(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${$}${T}${f}
          <span class="phase-chip" title=${b}>
            <span
              class="phase-dot"
              style=${V({background:this._phaseColor(e,o)})}
            ></span>
            ${b}
          </span>
        </div>
      </div>
    `}_countdowns(e,n){if(!this._config?.show_remaining_time)return[];let s=e.now.getTime(),r=[],a=(h,m,b)=>{if(!h)return;let v=(h.time.getTime()-s)/6e4;v>=0&&r.push({minutes:v,compact:n.t("untilFormat",{event:n.t(b??m),duration:Vn(v)}),long:n.t("untilFormat",{event:n.t(m),duration:Ao(v,n.t)}),title:`${n.t(m)} ${Q(h.time,n)}${h.dayOffset>0?` (${Je(h.dayOffset,n.t)})`:""}`})},c=e.extras.nextSunEvent;a(c,c?.rising?"sunrise":"sunset",c?.rising?"sunriseShort":"sunsetShort");let u=e.extras.nextTwilightEvent;if(u){let h=this._twilightKeys();a(u,u.rising?h.dawn:h.dusk,u.rising?h.dawnShort:h.duskShort)}let d=e.extras.nextMoonEvent;return a(d,d?.rising?"moonrise":"moonset",d?.rising?"moonriseShort":"moonsetShort"),r.sort((h,m)=>h.minutes-m.minutes)}_twilightKeys(){let e=this._config?.twilight_level;return e==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:e==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(e,n){return A`
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
    `}_renderSkyReadout(e,n,o,s){let r=this._config,a=[],c=(u,d,h)=>{let m=lt(d,1,n.locale),b=`${Math.round(h)}\xB0 ${Wt(h,n.language)}`;return A`<span
        title=${`${n.t("elevation")} ${m} \xB7 ${n.t("azimuth")} ${b}`}
        >${n.t("positionReadout",{body:u,altitude:m,degrees:String(Math.round(h)),direction:Wt(h,n.language)})}</span
      >`};r.show_sun&&a.push(c(n.t("sun"),e.sun.altitude,e.sun.azimuth)),r.show_moon&&a.push(c(n.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth));for(let u of this._countdowns(e,n).slice(0,s))a.push(A`<span title=${u.title}>${u.long}</span>`);return a.length===0||o<150?x:A`<div class="sky-readout">${a}</div>`}_countdownRows(e){let n=this._config,o=(n.show_sun?1:0)+(n.show_moon?1:0),s=e.chartHeight+e.legendHeight+(e.showLegend?Un:0),r=o*Fn+Un,a=s-r-_o;return Math.max(0,Math.min(3,Math.floor(a/Fn)))}_renderFooter(e,n,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil";return A`
      <div class="footer" style=${V({height:`${s.footerHeight}px`})}>
        <span class="part">${n.t(r)} · ${e.extras.timeZoneLongName}</span>
        <span class="part">${n.t("footerMethod")}</span>
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,o,s=.7){for(let r of e)if(r&&r.length*o*s<=n)return r;return null}_renderEvents(e,n,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),c=this._config,u=[];if(c.show_twilight&&u.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:Qn(s?14:16),missingText:n.t("noEvent")}),u.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:Ho(s?14:16),missingText:n.t("noSunrise")}),u.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:Ro(s?14:16),missingText:n.t("noSunset")}),c.show_twilight&&u.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:ti(s?14:16),missingText:n.t("noEvent")}),c.twilight_level==="all"||c.show_astronomical_details){let T=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[f,_,C]of T)u.push({key:f,kind:C,label:n.t(f),shortLabel:n.t(f),time:_,icon:C==="dawn"?Qn(s?13:15):ti(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=a<300?3:a<420?4:a<560?6:8,h=u.slice(0,Math.max(2,d)),m=6,v=Math.max(40,a-2*r-m*(h.length-1))/h.length-10,D=s?v<120?8.5:9:v<92?8.5:9.5,$=v<74?11:v<96?12:12.5;return A`
      <div
        class="events"
        style=${V({gap:`${m}px`,height:`${o.eventsHeight}px`})}
      >
        ${h.map(T=>{let f=this._fitLabel([T.label,T.shortLabel],v,D),_=T.time?Q(T.time,n):T.missingText,C=this._fitLabel([_,"\u2014"],v,$)??"\u2014";return A`
            <div
              class=${St({"event-tile":!0,[T.kind]:!0,secondary:!!T.secondary,compact:s})}
              title=${`${T.label}: ${_}`}
            >
              <span class="event-head">
                <span class="event-icon">${T.icon}</span>
                <span
                  class=${St({"event-time":!0,missing:!T.time})}
                  style=${V({fontSize:`${$}px`})}
                >
                  ${C}
                </span>
                ${s&&f?A`<span
                      class="event-label"
                      style=${V({fontSize:`${D}px`})}
                      >${f}</span
                    >`:x}
              </span>
              ${!s&&f?A`<span
                    class="event-label"
                    style=${V({fontSize:`${D}px`})}
                    >${f}</span
                  >`:x}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,o,s,r,a,c){let u=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&c>=430,m=(o.show_sun?1:0)+(o.show_moon?1:0)+(h?1:0),v=Math.max(60,c-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,D=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],v,10.5),$=lt(e.sun.altitude,1,n.locale),T=`${Math.round(e.sun.azimuth)}\xB0 ${Wt(e.sun.azimuth,r)}`,f=u.sunBelowHorizon!==null?`${lt(u.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,_=this._fitLabel([f?`${f} \xB7 ${T}`:`${n.t("azimuth")} ${T}`,f??T,T],v,9.5),C=u.sunriseAzimuth!==null?`${Math.round(u.sunriseAzimuth)}\xB0 ${Wt(u.sunriseAzimuth,r)}`:null,M=u.sunsetAzimuth!==null?`${Math.round(u.sunsetAzimuth)}\xB0 ${Wt(u.sunsetAzimuth,r)}`:null,w=o.show_astronomical_details&&C&&M?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:C,set:M}),`${Math.round(u.sunriseAzimuth)}\xB0 / ${Math.round(u.sunsetAzimuth)}\xB0`],v,9.5):null,O=o.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?Q(e.events.solarNoon,n):"\u2014"} \xB7 ${lt(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?Q(e.events.solarNoon,n):null],v,9.5):null,Z=this._fitLabel([n.t(d),n.t("moon")],v,10.5),tt=Eo(e.moon.phase.illumination,n.locale),W=this._fitLabel([`${tt} ${n.t("illumination")}`,tt],v,13),it=e.moon.position.apparentAltitude,S=lt(it,1,n.locale),k=`${Math.round(e.moon.position.azimuth)}\xB0 ${Wt(e.moon.position.azimuth,r)}`,P=`${n.t("elevation")} ${S} \xB7 ${n.t("azimuth")} ${k}`,U=it>=0?[`${n.t("elevation")} ${S} \xB7 ${k}`,`${S} \xB7 ${k}`,S]:[`${lt(Math.abs(it),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${k}`,`${lt(Math.abs(it),1,n.locale)} ${n.t("belowHorizon")}`,S],H=null,q="";if(u.moonDistance){let{current:F,min:st,max:ct}=u.moonDistance,N=Math.max(1,ct-st),rt=F<=st+N*.2,gt=F>=st+N*.8,dt=Ye(F,n.locale),ie=rt?n.t("nearPerigee"):gt?n.t("nearApogee"):"";q=`${n.t("moonDistance")}: ${dt} \xB7 ${n.t("distanceRange",{min:Ye(st,n.locale),max:Ye(ct,n.locale)})}`,H=this._fitLabel(ie?[`${dt} \xB7 ${ie}`,dt]:[dt],v,9.5)}let et=this._fitLabel(H?U.flatMap(F=>[`${F} \xB7 ${H}`,F]):U,v,9.5),Ct=H!==null&&(et?.includes(H)??!1),J=null,wt="";if(o.show_astronomical_details&&u.nextFullMoon){let F=u.nextFullMoonDays??0,st=F<=0?n.t("dayToday"):n.t("inDays",{days:String(F)}),ct=`${n.t("nextFullMoon")} ${st}`,N=u.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",rt=`${ct}${N}${u.moonFolkName?` \xB7 ${u.moonFolkName}`:""}`;wt=u.blueMoon?n.t("blueMoonHint"):u.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),J=this._fitLabel([rt,`${ct}${N}`,ct],v,9.5)}let z=o.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],v,9.5):null,G=[];et&&G.push({text:et,title:P,position:!0}),z&&G.push({text:z,title:null}),J&&G.push({text:J,title:wt}),H&&!Ct&&G.push({text:H,title:q});let ot=G.slice(0,s.detailsHeight>=Gn?3:2),It=Ct||ot.some(F=>F.text===H),xe=H&&!It?q||H:null;return A`
      <div
        class="details"
        style=${V({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?A`
              <div class="detail-tile sun">
                <span class="detail-icon">${Po(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${D?A`<span class="detail-title">${D}</span>`:x}
                  <span class="detail-value">${$}</span>
                  ${_?A`<span class="detail-sub">${_}</span>`:x}
                  ${O?A`<span class="detail-sub">${O}</span>`:x}
                  ${w?A`<span class="detail-sub">${w}</span>`:x}
                </span>
              </div>
            `:x}
        ${o.show_moon?A`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${te({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${Z?A`<span class="detail-title">${Z}</span>`:x}
                  ${W?A`<span class="detail-value">${W}</span>`:x}
                  ${ot.map(F=>{let st=[F.title,F.position?xe:null].filter(Boolean).join(" \xB7 ")||null;return A`<span class="detail-sub" title=${st??x}
                      >${F.text}</span
                    >`})}
                </span>
              </div>
            `:x}
        ${h?A`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${Jn({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?In:zn,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:_t(e.now,e.timeZone)})}
                </span>
              </div>
            `:x}
      </div>
    `}_moonTimesText(e,n,o){let s=e.extras.moonRise,r=e.extras.moonSet,a=s&&s.dayOffset!==0?` ${Je(s.dayOffset,n.t)}`:"",c=s?`\u2191 ${Q(s.time,n)}${a}`:"\u2191 \u2014";if(o)return c;let u=r&&r.dayOffset!==0?` ${Je(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${Q(r.time,n)}${u}`:"\u2193 \u2014";return`${c} \xB7 ${d}`}_renderMinimalTimes(e,n,o,s){if(o.minimalTimesHeight<=0)return x;let r=n.t,a=[];if(s.minimal_show_times&&e.events.sunrise){let u=Q(e.events.sunrise,n);a.push(A`<span class="minimal-time rise" title=${`${r("sunrise")} ${u}`}
          >↑ ${u}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let u=Q(e.events.solarNoon,n),d=o.chartWidth<250?u:`${r("zenith")} ${u}`;a.push(A`<span class="minimal-time zenith" title=${`${r("zenith")} ${u}`}
          >${d}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let u=Q(e.events.sunset,n);a.push(A`<span class="minimal-time set" title=${`${r("sunset")} ${u}`}
          >↓ ${u}</span
        >`)}if(a.length===0)return x;let c=y(l(o.minimalTimesHeight*.78,1),8,12);return A`<div
      class="minimal-times"
      style=${V({height:`${o.minimalTimesHeight}px`,fontSize:`${c}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(e,n){return`${this._minimalTitle(e,n)}, ${n.t("popupOpenHint")}`}_minimalTitle(e,n){let o=[this._ariaLabel(e,n)];o.push(`${n.t("sun")} ${lt(e.sun.altitude,0,n.locale)}`);let s=this._countdowns(e,n)[0];return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(e,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${n.t("sunrise")} ${Q(e.events.sunrise,n)}`),e.events.sunset&&o.push(`${n.t("sunset")} ${Q(e.events.sunset,n)}`),o.join(", ")}};Dt.styles=qo,bt([Yt({attribute:!1})],Dt.prototype,"hass",1),bt([Jt()],Dt.prototype,"_config",2),bt([Jt()],Dt.prototype,"_width",2),bt([Jt()],Dt.prototype,"_tick",2),Dt=bt([Pe(Rn)],Dt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${Ze}`)||window.customCards.push({type:`custom:${Ze}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Dt as SunMoonCard};
