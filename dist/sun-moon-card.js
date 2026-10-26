var Si=Object.defineProperty;var Ei=Object.getOwnPropertyDescriptor;var J=(i,t,e,n)=>{for(var o=n>1?void 0:n?Ei(t,e):t,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(t,e,o):r(o))||o);return n&&o&&Si(t,e,o),o};var Ut=globalThis,Ft=Ut.ShadowRoot&&(Ut.ShadyCSS===void 0||Ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),Ze=new WeakMap,Et=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ft&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ze.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ze.set(e,t))}return t}toString(){return this.cssText}},Qe=i=>new Et(typeof i=="string"?i:i+"",void 0,se),Gt=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Et(e,i,se)},Ye=(i,t)=>{if(Ft)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=Ut.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},re=Ft?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Qe(e)})(i):i;var{is:Ti,defineProperty:Di,getOwnPropertyDescriptor:Ci,getOwnPropertyNames:Li,getOwnPropertySymbols:Ni,getPrototypeOf:Pi}=Object,Kt=globalThis,Je=Kt.trustedTypes,Ri=Je?Je.emptyScript:"",Hi=Kt.reactiveElementPolyfillSupport,Tt=(i,t)=>i,Dt={toAttribute(i,t){switch(t){case Boolean:i=i?Ri:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},jt=(i,t)=>!Ti(i,t),Xe={attribute:!0,type:String,converter:Dt,reflect:!1,useDefault:!1,hasChanged:jt};Symbol.metadata??=Symbol("metadata"),Kt.litPropertyMetadata??=new WeakMap;var et=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Xe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Di(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=Ci(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let l=o?.call(this);s?.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xe}static _$Ei(){if(this.hasOwnProperty(Tt("elementProperties")))return;let t=Pi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tt("properties"))){let e=this.properties,n=[...Li(e),...Ni(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(re(o))}else t!==void 0&&e.push(re(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ye(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Dt).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Dt;this._$Em=o;let l=r.fromAttribute(e,s.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let r=this.constructor;if(o===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??jt)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:r}=s,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[Tt("elementProperties")]=new Map,et[Tt("finalized")]=new Map,Hi?.({ReactiveElement:et}),(Kt.reactiveElementVersions??=[]).push("2.1.2");var me=globalThis,tn=i=>i,Vt=me.trustedTypes,en=Vt?Vt.createPolicy("lit-html",{createHTML:i=>i}):void 0,ln="$lit$",st=`lit$${Math.random().toFixed(9).slice(2)}$`,cn="?"+st,Ii=`<${cn}>`,ut=document,Lt=()=>ut.createComment(""),Nt=i=>i===null||typeof i!="object"&&typeof i!="function",pe=Array.isArray,zi=i=>pe(i)||typeof i?.[Symbol.iterator]=="function",ae=`[ 	
\f\r]`,Ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nn=/-->/g,on=/>/g,lt=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sn=/'/g,rn=/"/g,un=/^(?:script|style|textarea|title)$/i,ge=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),D=ge(1),y=ge(2),ko=ge(3),B=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),an=new WeakMap,ct=ut.createTreeWalker(ut,129);function hn(i,t){if(!pe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return en!==void 0?en.createHTML(t):t}var Oi=(i,t)=>{let e=i.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",r=Ct;for(let l=0;l<e;l++){let c=i[l],u,m,h=-1,p=0;for(;p<c.length&&(r.lastIndex=p,m=r.exec(c),m!==null);)p=r.lastIndex,r===Ct?m[1]==="!--"?r=nn:m[1]!==void 0?r=on:m[2]!==void 0?(un.test(m[2])&&(o=RegExp("</"+m[2],"g")),r=lt):m[3]!==void 0&&(r=lt):r===lt?m[0]===">"?(r=o??Ct,h=-1):m[1]===void 0?h=-2:(h=r.lastIndex-m[2].length,u=m[1],r=m[3]===void 0?lt:m[3]==='"'?rn:sn):r===rn||r===sn?r=lt:r===nn||r===on?r=Ct:(r=lt,o=void 0);let d=r===lt&&i[l+1].startsWith("/>")?" ":"";s+=r===Ct?c+Ii:h>=0?(n.push(u),c.slice(0,h)+ln+c.slice(h)+st+d):c+st+(h===-2?l:d)}return[hn(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Pt=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,r=0,l=t.length-1,c=this.parts,[u,m]=Oi(t,e);if(this.el=i.createElement(u,n),ct.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=ct.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(ln)){let p=m[r++],d=o.getAttribute(h).split(st),b=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:b[2],strings:d,ctor:b[1]==="."?ce:b[1]==="?"?ue:b[1]==="@"?he:yt}),o.removeAttribute(h)}else h.startsWith(st)&&(c.push({type:6,index:s}),o.removeAttribute(h));if(un.test(o.tagName)){let h=o.textContent.split(st),p=h.length-1;if(p>0){o.textContent=Vt?Vt.emptyScript:"";for(let d=0;d<p;d++)o.append(h[d],Lt()),ct.nextNode(),c.push({type:2,index:++s});o.append(h[p],Lt())}}}else if(o.nodeType===8)if(o.data===cn)c.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(st,h+1))!==-1;)c.push({type:7,index:s}),h+=st.length-1}s++}}static createElement(t,e){let n=ut.createElement("template");return n.innerHTML=t,n}};function ft(i,t,e=i,n){if(t===B)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=Nt(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=ft(i,o._$AS(i,t.values),o,n)),t}var le=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??ut).importNode(e,!0);ct.currentNode=o;let s=ct.nextNode(),r=0,l=0,c=n[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new Rt(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new de(s,this,t)),this._$AV.push(u),c=n[++l]}r!==c?.index&&(s=ct.nextNode(),r++)}return ct.currentNode=ut,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Rt=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ft(this,t,e),Nt(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==B&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zi(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&Nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(ut.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Pt.createElement(hn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new le(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=an.get(t.strings);return e===void 0&&an.set(t.strings,e=new Pt(t)),e}k(t){pe(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new i(this.O(Lt()),this.O(Lt()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=tn(t).nextSibling;tn(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},yt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(t,e=this,n,o){let s=this.strings,r=!1;if(s===void 0)t=ft(this,t,e,0),r=!Nt(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{let l=t,c,u;for(t=s[0],c=0;c<s.length-1;c++)u=ft(this,l[n+c],e,c),u===B&&(u=this._$AH[c]),r||=!Nt(u)||u!==this._$AH[c],u===x?t=x:t!==x&&(t+=(u??"")+s[c+1]),this._$AH[c]=u}r&&!o&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ce=class extends yt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},ue=class extends yt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},he=class extends yt{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=ft(this,t,e,0)??x)===B)return;let n=this._$AH,o=t===x&&n!==x||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==x&&(n===x||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},de=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ft(this,t)}};var Ui=me.litHtmlPolyfillSupport;Ui?.(Pt,Rt),(me.litHtmlVersions??=[]).push("3.3.3");var dn=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new Rt(t.insertBefore(Lt(),s),s,void 0,e??{})}return o._$AI(i),o};var fe=globalThis,X=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dn(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};X._$litElement$=!0,X.finalized=!0,fe.litElementHydrateSupport?.({LitElement:X});var Fi=fe.litElementPolyfillSupport;Fi?.({LitElement:X});(fe.litElementVersions??=[]).push("4.2.2");var Bt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var Gi={attribute:!0,type:String,converter:Dt,reflect:!1,hasChanged:jt},Ki=(i=Gi,t,e)=>{let{kind:n,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),n==="accessor"){let{name:r}=e;return{set(l){let c=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,c,i,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,i,l),l}}}if(n==="setter"){let{name:r}=e;return function(l){let c=this[r];t.call(this,l),this.requestUpdate(r,c,i,!0,l)}}throw Error("Unsupported decorator location: "+n)};function vt(i){return(t,e)=>typeof e=="object"?Ki(i,t,e):((n,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,t,e)}function bt(i){return vt({...i,state:!0,attribute:!1})}var qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zt=i=>(...t)=>({_$litDirective$:i,values:t}),_t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var wt=Zt(class extends _t{constructor(i){if(super(i),i.type!==qt.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=i.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let o=!!t[n];o===this.st.has(n)||this.nt?.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return B}});var mn="important",ji=" !"+mn,W=Zt(class extends _t{constructor(i){if(super(i),i.type!==qt.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let s=typeof o=="string"&&o.endsWith(ji);n.includes("-")||s?e.setProperty(n,s?o.slice(0,-11):o,s?mn:""):e[n]=o}}return B}});var pn=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],gn=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],fn=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],yn=385000.49;var A=Math.PI/180,q=180/Math.PI,Vi=1495978707e-1,bn=6378.14,ye=-.833,ht=-6,dt=-12,mt=-18,_n=120*1e3;function Ht(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function $t(i){return(i-2451545)/36525}function C(i){let t=i%360;return t<0?t+360:t}function Bi(i){let t=$t(i);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function Wi(i){let t=i-2451545,e=$t(i),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return C(n)}function ve(i){let t=$t(i),e=C(280.46646+t*(36000.76983+t*3032e-7)),n=C(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*A)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*A)*(.019993-101e-6*t)+Math.sin(3*n*A)*289e-6,s=e+o,r=C(125.04-1934.136*t),l=s-.00569-.00478*Math.sin(r*A),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*A),m=l*A,h=u*A,p=C(Math.atan2(Math.cos(h)*Math.sin(m),Math.cos(m))*q),d=Math.asin(Math.sin(h)*Math.sin(m))*q;return{ra:p,dec:d}}function qi(i){let t=$t(i),e=C(280.46646+t*(36000.76983+t*3032e-7)),n=C(357.52911+t*(35999.05029-1537e-7*t)),o=Math.sin(n*A)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*A)*(.019993-101e-6*t)+Math.sin(3*n*A)*289e-6,s=C(125.04-1934.136*t);return C(e+o-.00569-.00478*Math.sin(s*A))}function Zi(i){let t=Ht(i),e=$t(t),n=C(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*A)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*A)*(.019993-101e-6*e)+Math.sin(3*n*A)*289e-6,r=(n+s)*A;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*Vi}function be(i,t,e,n){let o=C(Wi(n)+e),s=C(o-i.ra),r=t*A,l=i.dec*A,c=s*A,u=Math.asin(Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(c))*q,m=C(Math.atan2(Math.sin(c),Math.cos(c)*Math.sin(r)-Math.tan(l)*Math.cos(r))*q+180);return{altitude:u,azimuth:m}}function _e(i,t){let e=Ht(i);return be(ve(e),t.latitude,t.longitude,e).altitude}function we(i,t){let e=Ht(i);return be(ve(e),t.latitude,t.longitude,e)}function Qi(i){let t=i;return{D:C(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:C(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:C(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:C(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function wn(i){let t=$t(i),e=C(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=Qi(t),o=e;for(let l of pn){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;o+=l[4]*Math.sin(c*A)}let s=0;for(let l of gn){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;s+=l[4]*Math.sin(c*A)}let r=yn;for(let l of fn){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;r+=l[4]*Math.cos(c*A)}return{longitude:C(o),latitude:s,distanceKm:r}}function $n(i,t,e){let n=Bi(e)*A,o=i*A,s=t*A,r=C(Math.atan2(Math.sin(o)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(o))*q),l=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(o))*q;return{ra:r,dec:l}}function $e(i,t){let e=Ht(i),n=wn(e),o=$n(n.longitude,n.latitude,e),s=be(o,t.latitude,t.longitude,e),r=Math.asin(bn/n.distanceKm)*q,l=s.altitude-r*Math.cos(s.altitude*A);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:l,equatorial:o,geocentric:n}}function Yi(i){return .7275*(Math.asin(bn/i)*q)-.5667}var Ji=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"];function xn(i){let t=Ht(i),e=wn(t),n=$n(e.longitude,e.latitude,t),o=ve(t),s=qi(t),r=Zi(i),l=e.distanceKm,c=e.latitude*A,u=Math.acos(Math.min(1,Math.max(-1,Math.cos(c)*Math.cos((e.longitude-s)*A)))),m=Math.atan2(r*Math.sin(u),l-r*Math.cos(u)),h=C(m*q),p=(1+Math.cos(m))/2,d=(o.ra-n.ra)*A,b=o.dec*A,M=n.dec*A,$=C(Math.atan2(Math.cos(b)*Math.sin(d),Math.sin(b)*Math.cos(M)-Math.cos(b)*Math.sin(M)*Math.cos(d))*q),g=C(e.longitude-s)/360,v=Math.min(7,Math.floor(g*8+.5)%8),R=g*29.530588853;return{illumination:p,phaseAngle:h,elongation:u*q,phaseIndex:v,phaseKey:Ji[v],brightLimbAngle:$,moonAgeDays:R,waxing:g<.5,distanceKm:l}}function Mn(i,t,e,n,o){let s=[];if(!(t>i))return s;let r=Math.max(2,Math.ceil((t-i)/e)),l=(t-i)/r,c=i,u=n(i)-o;for(let m=1;m<=r;m++){let h=i+m*l,p=n(h)-o;if(u===0)s.push({time:c,rising:p>0});else if(u<0&&p>=0||u>0&&p<=0){let d=c,b=h,M=u;for(let $=0;$<50&&b-d>1;$++){let g=(d+b)/2,v=n(g)-o;v<0&&M<0||v>0&&M>0?(d=g,M=v):b=g}s.push({time:(d+b)/2,rising:p>u})}c=h,u=p}return s}function vn(i,t,e,n){let o=i.find(s=>s.rising===t&&s.time>=e&&s.time<n);return o?new Date(o.time):null}function An(i,t,e,n=4){let o=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),l=e.getTime(),c=w=>_e(w,i),u=[],m=Math.max(3e4,Math.round(n*60*1e3));for(let w=r;w<l;w+=m)u.push({time:w,altitude:c(w)});u.push({time:l,altitude:c(l)});let h=-1/0,p=1/0;for(let w of u)w.altitude>h&&(h=w.altitude),w.altitude<p&&(p=w.altitude);let d=[["sunrise","sunset",ye],["civilDawn","civilDusk",ht],["nauticalDawn","nauticalDusk",dt],["astronomicalDawn","astronomicalDusk",mt]],b={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[w,L,S]of d){let T=Mn(o,s,_n,c,S);b[w]=vn(T,!0,r,l),b[L]=vn(T,!1,r,l)}let M=r,$=-1/0,g=120*1e3;for(let w=r;w<=l;w+=g){let L=c(w);L>$&&($=L,M=w)}let v=Math.max(r,M-g),R=Math.min(l,M+g);for(let w=0;w<40&&R-v>1e3;w++){let L=v+(R-v)/3,S=R-(R-v)/3;c(L)<c(S)?v=L:R=S}b.solarNoon=new Date((v+R)/2);let P="none";return p>ye?P="polar-day":h<ye&&(P="polar-night"),{dayStart:t,dayEnd:e,samples:u,maxAltitude:h,minAltitude:p,events:b,polar:P}}function kn(i,t){let e=i.getTime(),n=e-1800*60*1e3,o=e+1800*60*1e3,r=Mn(n,o,_n,d=>{let b=$e(d,t);return b.altitude-Yi(b.distanceKm)},0),l=r.filter(d=>d.rising),c=r.filter(d=>!d.rising),u=l.find(d=>d.time>e)??null,m=[...l].reverse().find(d=>d.time<=e)??null,h=c.find(d=>d.time>e)??null,p=[...c].reverse().find(d=>d.time<=e)??null;return{previousRise:m?new Date(m.time):null,previousSet:p?new Date(p.time):null,nextRise:u?new Date(u.time):null,nextSet:h?new Date(h.time):null}}function Sn(i){return i>0?"day":i>ht?"civil":i>dt?"nautical":i>mt?"astronomical":"night"}function _(i,t,e){return Number.isNaN(i)?t:Math.min(e,Math.max(t,i))}function a(i,t=0){let e=10**t;return Math.round(i*e)/e}function xe(i){return typeof i=="number"&&Number.isFinite(i)}function tt(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let t=Number(i.replace(",","."));if(Number.isFinite(t))return t}return null}function En(i){return i.length===0?"":i.map((t,e)=>`${e===0?"M":"L"}${a(t.x,2)} ${a(t.y,2)}`).join(" ")}function Me(i,t=.5){if(i.length<3)return En(i);let e=[`M${a(i[0].x,2)} ${a(i[0].y,2)}`];for(let n=0;n<i.length-1;n++){let o=i[n-1]??i[n],s=i[n],r=i[n+1],l=i[n+2]??r,c=s.x+(r.x-o.x)/6*t*2,u=s.y+(r.y-o.y)/6*t*2,m=r.x-(l.x-s.x)/6*t*2,h=r.y-(l.y-s.y)/6*t*2;e.push(`C${a(c,2)} ${a(u,2)} ${a(m,2)} ${a(h,2)} ${a(r.x,2)} ${a(r.y,2)}`)}return e.join(" ")}function Tn(i,t,e=!1){if(i.length===0)return"";let n=e?Me(i):En(i),o=i[0],s=i[i.length-1];return`${n} L${a(s.x,2)} ${a(t,2)} L${a(o.x,2)} ${a(t,2)} Z`}function pt(i,t,e){let n=e*Math.PI/180;return{x:i.x-t*Math.sin(n),y:i.y-t*Math.cos(n)}}function Dn(i,t,e){let n=_(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${a(i.x-t,2)} ${a(i.y,2)} a${a(t,2)} ${a(t,2)} 0 1 1 ${a(t*2,2)} 0 a${a(t,2)} ${a(t,2)} 0 1 1 ${a(-t*2,2)} 0 Z`;let o=t*(1-2*n),s=1,r=o>0?0:1,l={x:i.x-t,y:i.y},c={x:i.x+t,y:i.y};return`M${a(l.x,2)} ${a(l.y,2)} A${a(t,2)} ${a(t,2)} 0 0 ${s} ${a(c.x,2)} ${a(c.y,2)} A${a(t,2)} ${a(Math.abs(o),4)} 0 0 ${r} ${a(l.x,2)} ${a(l.y,2)} Z`}function Cn(i=new Date){let t=i.getTime();return t+(6e4-t%6e4)+250}function Xi(i,t){if(i.length<=t)return i;let e=i.length/t,n=[];for(let s=0;s<t;s++)n.push(i[Math.floor(s*e)]);let o=i[i.length-1];return n[n.length-1]!==o&&n.push(o),n}function to(i){let t=i.maxAltitude,e=i.minAltitude,n=Math.min(e,-18),o=Math.max(3,(t-n)*.1),s=_(t+o,-18,90.5);return[_(Math.max(-28,e-2),-90,s-6),s]}function eo(i,t,e,n){let o=[0,ht,dt,mt],s=[i.day,i.civil,i.nautical,i.astronomical,i.night],r=[],l=.006,c=0;for(let h=0;h<o.length;h++){let p=(t(o[h])-e)/n,d=_(p,0,1);if(d<=0){r.push({offset:0,color:s[h+1]}),c=0;continue}if(d>=1){r.push({offset:_(c,0,1),color:s[h]}),r.push({offset:1,color:s[h]}),c=1;break}r.push({offset:_(c,0,1),color:s[h]}),r.push({offset:_(d-l,0,1),color:s[h]}),r.push({offset:_(d+l,0,1),color:s[h+1]}),c=d+l}if(c<1){let h=s[s.length-1];r.push({offset:_(c,0,1),color:h}),r.push({offset:1,color:h})}let u=[],m=-1;for(let h of[...r].sort((p,d)=>p.offset-d.offset)){let p=_(Math.max(h.offset,m),0,1);u.push({offset:p,color:h.color}),m=p}return u}function Ln(i){let{profile:t,events:e,now:n,width:o,height:s,palette:r,format:l,showSun:c,showMoon:u,showTwilight:m,twilightLevel:h,animations:p,uid:d,showAstronomicalLayers:b,currentAltitude:M}=i,$=Math.max(120,o),g=Math.max(56,s),v=4,R=4,P=6,w=g>=112,L=w?_(a(g*.13,1),13,20):0,S=v,T=Math.max(10,$-v-R),N=P,it=Math.max(10,g-P-L),I=N+it,[K,j]=to(t),z=Math.max(1,j-K),Q=t.dayStart.getTime(),O=t.dayEnd.getTime(),ot=Math.max(1,O-Q),zt=f=>S+(f-Q)/ot*T,at=f=>I-(_(f,-95,95)-K)/z*it,mi=_(Math.round(T/1.6),60,361),Ie=Xi(t.samples,mi).map(f=>({x:zt(f.time),y:at(f.altitude)})),ze=eo(r,at,N,it),Oe=`${d}-area`,Ue=`${d}-line`,Fe=`${d}-clip`,Ge=`${d}-glow`,pi=Tn(Ie,I+1,!0),gi=Me(Ie),V=l.t,At=[],kt=f=>{f.time&&!Number.isNaN(f.time.getTime())&&At.push({secondary:!1,...f})};if(e.sunrise&&kt({key:"sunrise",time:e.sunrise,label:V("sunrise"),shortLabel:V("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&kt({key:"sunset",time:e.sunset,label:V("sunset"),shortLabel:V("sunsetShort"),kind:"sunset",altitude:0}),m&&(e.civilDawn&&kt({key:"civilDawn",time:e.civilDawn,label:V("civilDawn"),shortLabel:V("civilDawnShort"),kind:"dawn",altitude:ht}),e.civilDusk&&kt({key:"civilDusk",time:e.civilDusk,label:V("civilDusk"),shortLabel:V("civilDuskShort"),kind:"dusk",altitude:ht}),h==="all"||b)){let f=[["nauticalDawn","dawn","nauticalDawn",dt],["nauticalDusk","dusk","nauticalDusk",dt],["astronomicalDawn","dawn","astronomicalDawn",mt],["astronomicalDusk","dusk","astronomicalDusk",mt]];for(let[H,U,F,Y]of f){let St=e[H];St&&kt({key:H,time:St,label:V(F),shortLabel:V(F),kind:U,altitude:Y,secondary:!0})}}At.sort((f,H)=>f.time.getTime()-H.time.getTime());let Ot=_(a(g*.062,1),7.5,10.5),ee=_(a(Ot+5,1),11,L||15),fi=At.filter(f=>!f.secondary),yi=At.filter(f=>f.secondary),vi=T<240?3:T<340?4:6,Ke=[...fi,...yi].slice(0,Math.max(2,vi)).sort((f,H)=>f.time.getTime()-H.time.getTime()),bi=Ke.length>3||T<300,ne=[],ie=-1/0;for(let f of Ke){let H=bi?f.shortLabel:f.label,U=H.length*Ot*.56+8,F=zt(f.time.getTime());F=_(F,S+U/2,S+T-U/2),F-U/2<ie+3&&(F=ie+3+U/2),!(F+U/2>S+T+.5)&&(ie=F+U/2,ne.push({x:F,width:U,text:H,secondary:f.secondary}))}let oe=_(zt(n.getTime()),S,S+T),_i=_(at(M),N,I),wi=M>0?r.lineDay:r.lineNight,je=_(a(g*.045,1),3.5,6),$i=p?"smc-pulse":"",xi=p?`url(#${Ge})`:"",Ve=at(0),Mi=K<0&&j>0,Ai=b?[{altitude:ht,label:"\u22126\xB0"},{altitude:dt,label:"\u221212\xB0"},{altitude:mt,label:"\u221218\xB0"}].filter(f=>f.altitude>K&&f.altitude<j):[],Be=T<220?4:T<420?6:8,We=[];for(let f=1;f<Be;f++)We.push(S+T*f/Be);return y`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${a($,1)} ${a(g,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${V("title")}"
    >
      <defs>
        <linearGradient id="${Oe}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(N,1)}" x2="0" y2="${a(I,1)}">
          ${ze.map(f=>y`<stop offset="${a(f.offset*100,3)}%" stop-color="${f.color}" />`)}
        </linearGradient>
        <linearGradient id="${Ue}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(N,1)}" x2="0" y2="${a(I,1)}">
          ${ze.map(f=>y`<stop offset="${a(f.offset*100,3)}%" stop-color="${f.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        <clipPath id="${Fe}">
          <rect x="${a(S-1,1)}" y="${a(N-2,1)}"
            width="${a(T+2,1)}" height="${a(it+4,1)}" />
        </clipPath>
        ${p?y`<filter id="${Ge}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${a(je*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:y``}
      </defs>

      <g clip-path="url(#${Fe})">
        ${We.map(f=>y`<line x1="${a(f,1)}" y1="${a(N,1)}" x2="${a(f,1)}" y2="${a(I,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <path d="${pi}" fill="url(#${Oe})" opacity="0.9" />
        <path
          d="${gi}"
          fill="none"
          stroke="url(#${Ue})"
          stroke-width="${_(a(g*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${Mi?y`<line
                x1="${a(S,1)}" y1="${a(Ve,1)}"
                x2="${a(S+T,1)}" y2="${a(Ve,1)}"
                stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
                stroke-width="1"
                stroke-dasharray="3 3"
                opacity="0.6"
              />`:y``}
        ${Ai.map(f=>y`<line
              x1="${a(S,1)}" y1="${a(at(f.altitude),1)}"
              x2="${a(S+T,1)}" y2="${a(at(f.altitude),1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.3))"
              stroke-width="0.6"
              stroke-dasharray="2 4"
              opacity="0.45"
            />`)}
      </g>

      <g class="event-markers">
        ${At.map(f=>{let H=_(zt(f.time.getTime()),S,S+T),U=_(at(f.altitude),N,I),F=!f.secondary,Y=F?_(a(g*.022,1),1.8,3):1.4,St="var(--smc-marker-strong, rgba(255,255,255,0.9))",qe=F?St:"var(--smc-marker-soft, rgba(255,255,255,0.55))",ki=f.kind==="sunrise"||f.kind==="sunset"?y`
                <circle cx="${a(H,1)}" cy="${a(U,1)}" r="${Y+1}"
                  fill="${f.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${a(H-Y*2.6,1)}"
                  y1="${a(f.kind==="sunrise"?U+Y+2:U-Y-2,1)}"
                  x2="${a(H+Y*2.6,1)}"
                  y2="${a(f.kind==="sunrise"?U+Y+2:U-Y-2,1)}"
                  stroke="${St}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:y`<circle cx="${a(H,1)}" cy="${a(U,1)}" r="${Y}"
                  fill="${qe}" opacity="0.85" />`;return y`<g>
            <line
              x1="${a(H,1)}" y1="${a(N,1)}"
              x2="${a(H,1)}" y2="${a(I,1)}"
              stroke="${qe}" stroke-width="${F?1:.7}"
              stroke-dasharray="2 3" opacity="${F?.35:.2}" />
            ${ki}
          </g>`})}
      </g>

      <g class="now-marker">
        <line
          x1="${a(oe,1)}" y1="${a(N,1)}"
          x2="${a(oe,1)}" y2="${a(I,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${_(a(g*.012,2),1,1.8)}"
          opacity="0.85" />
        ${c||u?y`<g class="${$i}" filter="${xi}">
                <circle
                  cx="${a(oe,1)}"
                  cy="${a(_i,1)}"
                  r="${je}"
                  fill="${wi}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="0.8"
                />
              </g>`:y``}
      </g>

      ${w?y`<line
              x1="${a(S,1)}" y1="${a(I+.5,1)}"
              x2="${a(S+T,1)}" y2="${a(I+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:y``}

      ${ne.length?y`<g class="event-labels" font-size="${Ot}">
              ${ne.map(f=>{let H=w?I+2:N;return y`<g>
                  <rect
                    x="${a(f.x-f.width/2,1)}"
                    y="${a(H,1)}"
                    width="${a(f.width,1)}"
                    height="${a(ee,1)}"
                    rx="${a(ee/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${f.secondary?.6:.88}" />
                  <text
                    x="${a(f.x,1)}"
                    y="${a(H+ee/2+Ot*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${f.secondary?.75:1}"
                  >${f.text}</text>
                </g>`})}
            </g>`:y``}
    </svg>
  `}var no=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Qt(i){let{size:t,illumination:e,brightLimbAngle:n,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:l="",uid:c}=i,u={x:t/2,y:t/2},m=Math.max(1,t/2-.5),h=Dn(u,m,e),p=r&&t>=26,d=a(-n,2);return y`
    <svg
      class="moon-disc ${l}"
      width="${a(t,1)}"
      height="${a(t,1)}"
      viewBox="0 0 ${a(t,1)} ${a(t,1)}"
      role="img"
      aria-hidden="true"
    >
      <circle
        cx="${a(u.x,2)}" cy="${a(u.y,2)}" r="${a(m,2)}"
        fill="${s}"
      />
      ${h?y`<g transform="rotate(${d} ${a(u.x,2)} ${a(u.y,2)})">
              <path d="${h}" fill="${o}" />
              ${p?y`<g clip-path="url(#${c}-clip)" opacity="0.16">
                      <clipPath id="${c}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${no.map(b=>{let M={x:u.x+b.x*m,y:u.y+b.y*m};return y`<circle
                          cx="${a(M.x,2)}" cy="${a(M.y,2)}"
                          r="${a(b.r*m,2)}"
                          fill="#5a6488" />`})}
                    </g>`:y``}
            </g>`:y``}
      <circle
        cx="${a(u.x,2)}" cy="${a(u.y,2)}" r="${a(m,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function Ae(i,t,e,n){let o=pt(i,t,e),s=e*Math.PI/180,r=-Math.sin(s),l=-Math.cos(s),c=_(t*.12,4,9),u=_(t*.07,2.5,5),m={x:o.x+r*c,y:o.y+l*c},h={x:o.x-l*u,y:o.y+r*u},p={x:o.x+l*u,y:o.y-r*u};return y`
    <polygon
      points="${a(m.x,2)},${a(m.y,2)} ${a(h.x,2)},${a(h.y,2)} ${a(p.x,2)},${a(p.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}function ke(i,t){return _((90-i)/90*t,0,t)}function Se(i){let{width:t,height:e,sun:n,moon:o,sunTrack:s,moonPhase:r,showSun:l,showMoon:c,palette:u,format:m,animations:h,uid:p,showCardinals:d=!0}=i,b=Math.max(80,t),M=Math.max(80,e),$=6,g={x:b/2,y:M/2},v=Math.max(10,Math.min(b,M)/2-$),R=`${p}-dome`,P=`${p}-dome-clip`,w=[{key:m.t("compassNorth"),azimuth:0},{key:m.t("compassEast"),azimuth:90},{key:m.t("compassSouth"),azimuth:180},{key:m.t("compassWest"),azimuth:270}],L=_(a(v*.17,1),7,11),S=n?n.altitude>0:!1,T=_(a(v*.11,1),4,11),N=n?pt(g,ke(n.altitude,v),n.azimuth):null,it=l&&n&&N,I=o?o.altitude>0:!1,K=_(a(v*.24,1),10,22),j=o?pt(g,ke(o.altitude,v),o.azimuth):null,z=c&&o&&j&&r,Q=s.filter(O=>O.altitude>=-8).map(O=>pt(g,ke(O.altitude,v),O.azimuth));return y`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${a(b,1)} ${a(M,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${m.t("skyView")}"
    >
      <defs>
        <radialGradient id="${R}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${u.skyTop}" />
          <stop offset="100%" stop-color="${u.skyBottom}" />
        </radialGradient>
        <clipPath id="${P}">
          <circle cx="${a(g.x,1)}" cy="${a(g.y,1)}" r="${a(v,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${a(g.x,1)}" cy="${a(g.y,1)}" r="${a(v,1)}"
        fill="url(#${R})" opacity="0.55" />

      <g clip-path="url(#${P})">
        <circle
          cx="${a(g.x,1)}" cy="${a(g.y,1)}" r="${a(v*.667,1)}"
          fill="none"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.28))"
          stroke-width="0.7" stroke-dasharray="2 4" />
        <circle
          cx="${a(g.x,1)}" cy="${a(g.y,1)}" r="${a(v*.333,1)}"
          fill="none"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.2))"
          stroke-width="0.7" stroke-dasharray="2 4" />
        <line
          x1="${a(g.x-v,1)}" y1="${a(g.y,1)}"
          x2="${a(g.x+v,1)}" y2="${a(g.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${a(g.x,1)}" y1="${a(g.y-v,1)}"
          x2="${a(g.x,1)}" y2="${a(g.y+v,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${Q.length>1?y`<path
                d="M${Q.map(O=>`${a(O.x,1)} ${a(O.y,1)}`).join(" L")}"
                fill="none"
                stroke="${u.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:y``}
      </g>

      <circle
        cx="${a(g.x,1)}" cy="${a(g.y,1)}" r="${a(v,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${d?y`<g font-size="${L}" fill="var(--smc-muted-color)" opacity="0.7">
              ${w.map(O=>{let ot=pt(g,v*.87,O.azimuth);return y`<text
                  x="${a(ot.x,1)}"
                  y="${a(ot.y+L*.35,1)}"
                  text-anchor="middle"
                >${O.key}</text>`})}
            </g>`:y``}

      ${it&&S&&N?y`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${a(N.x,1)}" cy="${a(N.y,1)}" r="${T}"
                fill="${u.lineDay}" opacity="0.28" />
              <circle
                cx="${a(N.x,1)}" cy="${a(N.y,1)}" r="${a(T*.55,1)}"
                fill="${u.lineDay}" />
            </g>`:y``}
      ${l&&n&&!S?Ae(g,v,n.azimuth,u.lineNight):y``}

      ${z&&I&&j&&r?y`<g transform="translate(${a(j.x-K/2,1)} ${a(j.y-K/2,1)})">
              ${Qt({size:K,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:K>=16,uid:`${p}-moon`})}
            </g>`:y``}
      ${c&&o&&!I?Ae(g,v,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):y``}
    </svg>
  `}var Yt="sun-moon-card",Hn="sun-moon-card",In="sun-moon-card-editor";var E=[120,800];var k={entity:"sun.sun",moon_entity:"sensor.moon",card_height:260,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null},zn=1200*1e3,Ee={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347"},Te={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef"},De=[{key:"N",deg:0},{key:"NE",deg:45},{key:"E",deg:90},{key:"SE",deg:135},{key:"S",deg:180},{key:"SW",deg:225},{key:"W",deg:270},{key:"NW",deg:315}],xt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"]},On=520,io=56,Nn=84,oo=150,so=12,ro=10,ao=26,Pn=48,lo=36,Rn=66;function Un(i,t,e){let n=e.compact_mode,o=n?ro:so,s=Math.max(40,i-2*o),r=e.show_header&&!n&&s>=150,l=r?ao:0;s-=l;let u=!n&&s-Pn>=Nn?Pn:lo,m=e.show_events&&s-u>=Nn,h=m?u:0;s-=h;let p=!n&&(e.show_sun||e.show_moon)&&s-Rn>=oo,d=p?Rn:0;s-=d;let b=Math.max(io,s),M=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),$=M&&t>=On&&b>=140,g=$?Math.round(Math.min(210,Math.max(150,t*.3))):0;return{padding:o,showHeader:r,showEvents:m,showDetails:p,skyViewSide:$,skyViewInline:!$&&M&&p,skyViewWidth:g,headerHeight:l,eventsHeight:h,detailsHeight:d,chartHeight:b,compact:n}}function Fn(i){return i>=On?300:280}function Jt(){return{type:`custom:${Yt}`,card_height:260}}var Ce={de:{title:"Sonne & Mond",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",zenith:"Zenit",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"Nord",dirNE:"Nordost",dirE:"Ost",dirSE:"S\xFCdost",dirS:"S\xFCd",dirSW:"S\xFCdwest",dirW:"West",dirNW:"Nordwest",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",skyView:"Sky view",belowHorizon:"below the horizon",zenith:"Zenith",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"north",dirNE:"north-east",dirE:"east",dirSE:"south-east",dirS:"south",dirSW:"south-west",dirW:"west",dirNW:"north-west",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function G(i,t,e){let o=(Ce[i]??Ce.en)[t]??Ce.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function It(i,t){return((i&&i!=="auto"?i:t)??"").toLowerCase().startsWith("de")?"de":"en"}function Kn(i,t,e){let n=i;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var Gn=new Map;function co(i,t,e){let n=`${i}|${t}|${e}`,o=Gn.get(n);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}Gn.set(n,o)}return o}function rt(i,t){return co(t.locale,t.timeZone,t.hour12).format(i)}function jn(i,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function Vn(i,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(i)}catch{return i.toFixed(t)}}function Bn(i,t=1,e="de-DE"){return`${Vn(i,t,e)}\xB0`}function Wn(i,t){let e=Math.floor(i/60),n=Math.round(i%60);return t==="de"?`${e} h ${n} min`:`${e} h ${n} min`}function qn(i,t="de-DE"){return`${Vn(i*100,0,t)} %`}function Zn(i,t){let e=(i%360+360)%360,n=De[0],o=1/0;for(let r of De){let l=Math.abs((e-r.deg+540)%360-180);l<o&&(o=l,n=r)}let s=`dir${n.key}`;return G(t,s)}function Qn(i,t,e,n){return{language:i,locale:t,timeZone:e,hour12:n,t:(o,s)=>G(i,o,s)}}function Yn(i=16,t="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function Jn(i=16,t="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Le(i=16,t="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Ne(i=16,t="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Xn(i=20,t="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function ti(i=18,t="currentColor"){return y`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var ei=new Map;function ni(i){let t=ei.get(i);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),ei.set(i,t)),t}function uo(i){try{return ni(i)}catch{return ni("UTC")}}function Pe(i,t){let e=uo(t).formatToParts(i),n={};for(let o of e)o.type!=="literal"&&(n[o.type]=Number.parseInt(o.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function ii(i,t){let e=Pe(i,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function ho(i,t,e,n=0,o=0,s=0,r="UTC"){let l=Date.UTC(i,t-1,e,n,o,s),c=1440*60*1e3,u=[ii(new Date(l-c),r),ii(new Date(l+c),r)],m=[...new Set(u)].map(p=>l-p).filter(p=>{let d=Pe(new Date(p),r);return d.year===i&&d.month===t&&d.day===e&&d.hour===n&&d.minute===o&&d.second===s}).sort((p,d)=>p-d);if(m.length>0)return new Date(m[0]);let h=Math.min(...u);return new Date(l-h)}function Xt(i,t){let e=Pe(i,t);return ho(e.year,e.month,e.day,0,0,0,t)}function oi(i,t){let e=Xt(i,t);return Xt(new Date(e.getTime()+2160*60*1e3),t)}function si(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function Z(i,t){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:t}function te(i,t,e){return typeof i=="string"&&t.includes(i)?i:e}function ai(i,t="en"){let e=[],n=[],o=i??{},s=k.card_height;if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))s=Math.round(_(o.card_height,E[0],E[1])),s!==o.card_height&&n.push(G(t,"invalidHeight",{value:String(o.card_height),min:E[0],max:E[1]}));else if(o.card_height==="auto"||o.card_height===null)s="auto";else if(typeof o.card_height=="number")n.push(G(t,"invalidHeight",{value:String(o.card_height),min:E[0],max:E[1]}));else if(o.card_height!==void 0){let h=tt(o.card_height);h===null?e.push(G(t,"invalidHeight",{value:String(o.card_height),min:E[0],max:E[1]})):s=Math.round(_(h,E[0],E[1]))}let r=null,l=null,c=tt(o.latitude),u=tt(o.longitude);return c!==null&&(c>=-90&&c<=90?r=c:n.push(G(t,"invalidNumber",{value:String(o.latitude)}))),u!==null&&(u>=-180&&u<=180?l=u:n.push(G(t,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():k.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():k.moon_entity,card_height:s,show_sun:Z(o.show_sun,k.show_sun),show_moon:Z(o.show_moon,k.show_moon),show_twilight:Z(o.show_twilight,k.show_twilight),show_astronomical_details:Z(o.show_astronomical_details,k.show_astronomical_details),compact_mode:Z(o.compact_mode,k.compact_mode),theme_mode:te(o.theme_mode,xt.themeMode,k.theme_mode),animations:Z(o.animations,k.animations),time_format:te(o.time_format,xt.timeFormat,k.time_format),language:te(o.language,xt.language,k.language),show_header:Z(o.show_header,k.show_header),show_day_chart:Z(o.show_day_chart,k.show_day_chart),show_sky_view:Z(o.show_sky_view,k.show_sky_view),show_events:Z(o.show_events,k.show_events),show_moon_times:Z(o.show_moon_times,k.show_moon_times),twilight_level:te(o.twilight_level,xt.twilightLevel,k.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:r,longitude:l},errors:e,warnings:n}}function li(i,t){return i.card_height==="auto"?_(Fn(t),E[0],E[1]):_(i.card_height,E[0],E[1])}function mo(i,t,e){let n={latitude:0,longitude:0},o={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"};return{now:i,timeZone:t,location:n,locationName:"",day:o,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:{altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},phase:{illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},events:{previousRise:null,previousSet:null,nextRise:null,nextSet:null},haPhaseName:null},sunTrack:[],events:o.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function po(i){if(typeof i!="string"||i.trim()==="")return null;let t=new Date(i);return Number.isNaN(t.getTime())?null:t}var ri=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],go={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function fo(i,t,e){let n=si(t?.config?.time_zone),o=[],s=xe(t?.config?.latitude)?t.config.latitude:null,r=xe(t?.config?.longitude)?t.config.longitude:null,l=i.latitude??s,c=i.longitude??r;if(l===null||c===null)return mo(e,n,["missing-location",...o]);let u={latitude:l,longitude:c},m=i.location_name.trim()!==""?i.location_name.trim():t?.config?.location_name??"",h=Xt(e,n),p=oi(e,n),d=An(u,h,p),b=we(e,u),M=b.altitude,$=_e(e.getTime()+6e4,u),g=$e(e,u),v=xn(e),R=kn(e,u),P=t?.states?.[i.entity];P||o.push("missing-sun-entity");let w={...d.events},L={};if(P?.attributes)for(let[z,Q]of ri){let O=po(P.attributes[Q]),ot=d.events[z];if(O&&O>=h&&O<p&&(!ot||Math.abs(O.getTime()-ot.getTime())<=zn)){w[z]=O,L[z]="ha";continue}L[z]=ot?"computed":"none"}else for(let[z]of ri)L[z]=d.events[z]?"computed":"none";for(let z of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])L[z]=d.events[z]?"computed":"none";let S=P?.attributes?tt(P.attributes.elevation):null,T=P?.attributes?tt(P.attributes.azimuth):null,N=i.moon_entity?t?.states?.[i.moon_entity]:void 0,it=N&&typeof N.state=="string"?go[N.state]??null:null,I=[],K=900*1e3;for(let z=h.getTime();z<=p.getTime();z+=K){let Q=we(z,u);I.push({altitude:Q.altitude,azimuth:Q.azimuth})}let j=null;return w.sunrise&&w.sunset&&(j=(w.sunset.getTime()-w.sunrise.getTime())/6e4),d.polar==="polar-day"&&o.push("polar-day"),d.polar==="polar-night"&&o.push("polar-night"),w.sunrise||o.push("no-sunrise-today"),w.sunset||o.push("no-sunset-today"),!w.civilDawn&&!w.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:n,location:u,locationName:m,day:d,sun:{altitude:M,azimuth:b.azimuth,phase:Sn(M),rising:$>M,haElevation:S,haAzimuth:T},moon:{position:g,phase:v,events:R,haPhaseName:it},sunTrack:I,events:w,eventSources:L,daylightMinutes:j,issues:o,fatal:!1}}var Mt=new Map;function yo(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level].join("|")}function vo(i,t){if(!t)return"-";let e=t.states?.[i.entity],n=i.moon_entity?t.states?.[i.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function ci(i,t,e){let n=Math.floor(e.getTime()/6e4),o=[yo(i),vo(i,t),n,e.getTimezoneOffset()].join("#"),s=Mt.get(o);if(s)return s;let r=fo(i,t,e);if(Mt.size>24){let l=Mt.keys().next().value;l!==void 0&&Mt.delete(l)}return Mt.set(o,r),r}function ui(){Mt.clear()}var hi=Gt`
  :host {
    display: block;
    --smc-gap: 10px;
    --smc-radius: 12px;
    --smc-muted-color: var(--secondary-text-color, var(--primary-text-color, #8a93a8));
    --smc-divider: var(--divider-color, rgba(128, 128, 128, 0.25));
    --smc-label-bg: rgba(0, 0, 0, 0.34);
    --smc-label-color: #ffffff;
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
    --smc-tile-bg: rgba(127, 137, 170, 0.12);
  }

  :host(.smc-light) {
    --smc-grid-line: rgba(40, 48, 70, 0.1);
    --smc-horizon-line: rgba(255, 255, 255, 0.65);
    --smc-now-line: rgba(255, 255, 255, 0.9);
    --smc-sky-ring: rgba(60, 72, 100, 0.22);
    --smc-sky-horizon: rgba(60, 72, 100, 0.35);
    --smc-moon-dark: rgba(80, 92, 130, 0.28);
    --smc-moon-outline: rgba(40, 48, 70, 0.12);
    --smc-tile-bg: rgba(60, 72, 100, 0.07);
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
    gap: 4px;
  }

  .root.compact {
    gap: 2px;
  }

  /* ---------- Kopfzeile ---------- */

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 0;
    overflow: hidden;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.15;
  }

  .title {
    font-size: 13px;
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
  }

  .phase-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 10.5px;
    font-weight: 500;
    line-height: 1.4;
    background: var(--smc-tile-bg);
    color: var(--primary-text-color, #212121);
    white-space: nowrap;
  }

  .phase-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ---------- Inhalt ---------- */

  .body {
    display: flex;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    gap: var(--smc-gap);
  }

  .chart-wrap {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    display: block;
  }

  .sky-wrap {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
  }

  svg.day-chart,
  svg.sky-view {
    display: block;
    overflow: visible;
  }

  /* ---------- Ereignisleiste ---------- */

  .events {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 6px;
    min-height: 0;
    flex: 0 0 auto;
  }

  .event-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    padding: 4px 2px;
    border-radius: 9px;
    background: var(--smc-tile-bg);
    min-width: 0;
    overflow: hidden;
  }

  .event-tile.secondary {
    background: transparent;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .event-icon {
    display: block;
    line-height: 1;
  }

  .event-label {
    font-size: 9.5px;
    font-weight: 400;
    color: var(--smc-muted-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .event-time {
    font-size: 12.5px;
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
    flex: 0 0 auto;
    min-height: 0;
    align-items: stretch;
  }

  .detail-tile {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 7px 10px;
    border-radius: 10px;
    background: var(--smc-tile-bg);
    min-width: 0;
    overflow: hidden;
  }

  .detail-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .detail-content {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.25;
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
  }

  @media (max-width: 400px) {
    .event-label {
      font-size: 9px;
    }
    .event-time {
      font-size: 11.5px;
    }
  }
`,di=Gt`
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
`;function Re(i,t){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var gt=class extends X{setConfig(t){this._config={...t}}get _language(){return It(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return G(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,o]of Object.entries(t)){let s=k[n];o===s&&n in k&&delete e[n]}this._config=e,Re(this,e)}render(){if(!this._config)return D``;let t=this._config.card_height,e=t==="auto"||t===void 0||t===null,n=typeof t=="number"?t:k.card_height,o=this._config.latitude===void 0||this._config.latitude===null;return D`
      <div class="card-config">
        <div class="section">
          <div class="section-title">${this._t("editorAppearance")}</div>

          <div class="row">
            <label for="height">${this._t("editorCardHeight")}</label>
            <div class="control height-control">
              <input
                id="height"
                type="range"
                min="${E[0]}"
                max="${E[1]}"
                step="10"
                .value=${String(n)}
                ?disabled=${e}
                @input=${s=>this._update({card_height:Number(s.target.value)})}
              />
              <input
                id="height-number"
                type="number"
                aria-label=${this._t("editorCardHeight")}
                min="${E[0]}"
                max="${E[1]}"
                .value=${String(n)}
                ?disabled=${e}
                @change=${s=>{let r=tt(s.target.value);r!==null&&this._update({card_height:Math.round(_(r,E[0],E[1]))})}}
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
                  @change=${s=>this._update({card_height:s.target.checked?"auto":k.card_height})}
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
                @change=${s=>this._update({theme_mode:s.target.value})}
              >
                <option value="auto">${this._t("editorThemeAuto")}</option>
                <option value="light">${this._t("editorThemeLight")}</option>
                <option value="dark">${this._t("editorThemeDark")}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="timeformat">${this._t("editorTimeFormat")}</label>
            <div class="control">
              <select
                id="timeformat"
                .value=${this._value("time_format","auto")}
                @change=${s=>this._update({time_format:s.target.value})}
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
                @change=${s=>this._update({language:s.target.value})}
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
                @change=${s=>this._update({twilight_level:s.target.value})}
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
                  @change=${s=>this._update({animations:s.target.checked})}
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
                  @change=${s=>this._update({compact_mode:s.target.checked})}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>
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
        </div>

        <div class="section">
          <div class="section-title">${this._t("editorBehaviour")}</div>
          <div class="row">
            <label for="entity">${this._t("editorEntity")}</label>
            <div class="control">
              <input
                id="entity"
                type="text"
                .value=${this._value("entity",k.entity)}
                @change=${s=>this._update({entity:s.target.value.trim()})}
              />
            </div>
          </div>
          <div class="row">
            <label for="moonentity">${this._t("editorMoonEntity")}</label>
            <div class="control">
              <input
                id="moonentity"
                type="text"
                .value=${this._value("moon_entity",k.moon_entity)}
                @change=${s=>this._update({moon_entity:s.target.value.trim()})}
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
                  .checked=${o}
                  @change=${s=>{if(s.target.checked){let l={...this._config};delete l.latitude,delete l.longitude,this._config=l,Re(this,l)}else this._update({latitude:a(this.hass?.config?.latitude??0,4),longitude:a(this.hass?.config?.longitude??0,4)})}}
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
                ?disabled=${o}
                @change=${s=>{let r=tt(s.target.value);this._update({latitude:r===null?void 0:_(r,-90,90)})}}
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
                ?disabled=${o}
                @change=${s=>{let r=tt(s.target.value);this._update({longitude:r===null?void 0:_(r,-180,180)})}}
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
                @change=${s=>this._update({location_name:s.target.value})}
              />
            </div>
          </div>
        </div>

        <div class="section">
          <div class="row">
            <span class="hint">
              ${this._t("editorCardHeight")}: ${E[0]}–${E[1]} px
              (Standard ${k.card_height} px, mindestens ${120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height;return typeof t=="number"&&(t<E[0]||t>E[1])?D`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:E[0],max:E[1]})}
      </span>`:x}_switch(t,e){let n=k[t];return D`
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
    `}_reset(){let t=Jt();this._config=t,Re(this,t)}};gt.styles=di,J([vt({attribute:!1})],gt.prototype,"hass",2),J([bt()],gt.prototype,"_config",2),gt=J([Bt(In)],gt);var nt=class extends X{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._hassSignature=""}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Jt()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=It(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=ai(e,n);if(s.length>0)throw new Error(s[0]);r.length>0&&console.warn(`[sun-moon-card] ${r.join(" ")}`),this._config=o,ui()}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}connectedCallback(){super.connectedCallback(),this._startClock(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,Cn()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let o=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?li(this._config,this._width||400):k.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return It(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return D``;let n=this._width||400,o=this._resolvedHeight(),s=Un(o,n,e),r=ci(e,this.hass,new Date),l=this._language(),c=this._isDark(),u=c?Ee:Te;if(r.fatal)return D`
        <ha-card
          class=${wt({"smc-dark":c,"smc-light":!c})}
          style=${W({height:`${o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${ti(18)}</span>
              <span>${G(l,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let m=Qn(l,this._locale(),r.timeZone,Kn(e.time_format,this.hass?.locale?.time_format,this._locale())),h=n-2*s.padding-(s.skyViewSide?s.skyViewWidth+10:0);return D`
      <ha-card
        class=${wt({"smc-dark":c,"smc-light":!c})}
        style=${W({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,m)}
      >
        <div
          class=${wt({root:!0,compact:s.compact})}
          style=${W({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`})}
        >
          ${s.showHeader?this._renderHeader(r,m,u):x}

          <div class="body">
            ${e.show_day_chart?D`<div class="chart-wrap" style=${W({height:`${s.chartHeight}px`})}>
                  ${Ln({profile:r.day,events:r.events,now:r.now,width:Math.max(120,h),height:s.chartHeight,palette:u,format:m,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,compact:s.compact,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude})}
                </div>`:x}
            ${s.skyViewSide?D`<div
                  class="sky-wrap"
                  style=${W({width:`${s.skyViewWidth}px`,height:`${s.chartHeight}px`})}
                >
                  ${Se({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:u,format:m,animations:e.animations,uid:`${this._uid}-sky`})}
                </div>`:x}
          </div>

          ${s.showEvents?this._renderEvents(r,m,n,s.compact,s.padding):x}
          ${s.showDetails?this._renderDetails(r,m,e,s.skyViewInline,l,c,n,s.padding):x}
        </div>
      </ha-card>
    `}_renderHeader(e,n,o){let s=e.locationName||n.t("title");return D`
      <div class="header">
        <div class="header-text">
          <span class="title">${s}</span>
          <span class="subtitle">${jn(e.now,n)}</span>
        </div>
        <span class="phase-chip" title=${n.t(this._phaseKey(e))}>
          <span
            class="phase-dot"
            style=${W({background:this._phaseColor(e,o)})}
          ></span>
          ${n.t(this._phaseKey(e))}
        </span>
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,o){for(let s of e)if(s&&s.length*o*.62<=n)return s;return null}_renderEvents(e,n,o,s,r){let l=this._config,c=[];if(l.show_twilight&&c.push({key:"civilDawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:Le(s?14:16),missingText:n.t("noEvent")}),c.push({key:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:Yn(s?14:16),missingText:n.t("noSunrise")}),c.push({key:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:Jn(s?14:16),missingText:n.t("noSunset")}),l.show_twilight&&c.push({key:"civilDusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:Ne(s?14:16),missingText:n.t("noEvent")}),l.twilight_level==="all"||l.show_astronomical_details){let $=[["nauticalDawn",e.events.nauticalDawn],["nauticalDusk",e.events.nauticalDusk],["astronomicalDawn",e.events.astronomicalDawn],["astronomicalDusk",e.events.astronomicalDusk]];for(let[g,v]of $)c.push({key:g,label:n.t(g),shortLabel:n.t(g),time:v,icon:g.endsWith("Dawn")?Le(s?13:15):Ne(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let u=o<300?3:o<420?4:o<560?6:8,m=c.slice(0,Math.max(2,u)),h=6,d=Math.max(40,o-2*r-h*(m.length-1))/m.length-6,b=s?d<120?8.5:9:d<92?8.5:9.5,M=d<74?11:d<96?12:12.5;return D`
      <div class="events" style=${W({gap:`${h}px`})}>
        ${m.map($=>{let g=this._fitLabel([$.label,$.shortLabel],d,b),v=$.time?rt($.time,n):$.missingText,R=this._fitLabel([v,"\u2014"],d,M)??"\u2014";return D`
            <div
              class=${wt({"event-tile":!0,secondary:!!$.secondary,compact:s})}
              title=${`${$.label}: ${v}`}
            >
              <span class="event-icon">${$.icon}</span>
              ${s&&g?D`<span class="event-label">${g}</span>`:x}
              <span
                class=${wt({"event-time":!0,missing:!$.time})}
                style=${W({fontSize:`${M}px`})}
              >
                ${R}
              </span>
              ${!s&&g?D`<span class="event-label" style=${W({fontSize:`${b}px`})}>${g}</span>`:x}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,o,s,r,l,c,u){let m=e.moon.haPhaseName??e.moon.phase.phaseKey,h=e.moon.events.nextRise??e.moon.events.previousRise,p=e.moon.events.nextSet??e.moon.events.previousSet,d=s&&c>=430,b=(o.show_sun?1:0)+(o.show_moon?1:0)+(d?1:0),$=Math.max(60,c-2*u-8*Math.max(0,b-1))/Math.max(1,b)-20-26-9,g=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],$,10.5),v=o.show_astronomical_details?`${n.t("solarNoon")} ${e.events.solarNoon?rt(e.events.solarNoon,n):"\u2014"}`+(e.daylightMinutes!==null?` \xB7 ${n.t("dayLength")} ${Wn(e.daylightMinutes,r)}`:""):`${a(e.sun.azimuth,0)}\xB0 ${Zn(e.sun.azimuth,r)}`,R=Bn(e.sun.altitude,1,n.locale),P=this._fitLabel([n.t(m),n.t("moon")],$,10.5),w=qn(e.moon.phase.illumination,n.locale),L=this._fitLabel([`${w} ${n.t("illumination")}`,w],$,13),S=o.show_moon_times?this._fitLabel([`\u2191 ${h?rt(h,n):"\u2014"} \xB7 \u2193 ${p?rt(p,n):"\u2014"}`,`\u2191 ${h?rt(h,n):"\u2014"}`],$,9.5):null;return D`
      <div class="details" style=${W({gap:"8px"})}>
        ${o.show_sun?D`
              <div class="detail-tile">
                <span class="detail-icon">${Xn(20,l?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${g?D`<span class="detail-title">${g}</span>`:x}
                  <span class="detail-value">${R}</span>
                  <span class="detail-sub">${v}</span>
                </span>
              </div>
            `:x}
        ${o.show_moon?D`
              <div class="detail-tile">
                <span class="detail-icon">
                  ${Qt({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${P?D`<span class="detail-title">${P}</span>`:x}
                  ${L?D`<span class="detail-value">${L}</span>`:x}
                  ${S?D`<span class="detail-sub">${S}</span>`:x}
                </span>
              </div>
            `:x}
        ${d?D`
              <div class="detail-tile sky-inline">
                ${Se({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:l?Ee:Te,format:n,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1})}
              </div>
            `:x}
      </div>
    `}_ariaLabel(e,n){let o=[n.t("title")];return o.push(n.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${n.t("sunrise")} ${rt(e.events.sunrise,n)}`),e.events.sunset&&o.push(`${n.t("sunset")} ${rt(e.events.sunset,n)}`),o.join(", ")}};nt.styles=hi,J([vt({attribute:!1})],nt.prototype,"hass",2),J([bt()],nt.prototype,"_config",2),J([bt()],nt.prototype,"_width",2),J([bt()],nt.prototype,"_tick",2),nt=J([Bt(Hn)],nt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${Yt}`)||window.customCards.push({type:`custom:${Yt}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{nt as SunMoonCard};
