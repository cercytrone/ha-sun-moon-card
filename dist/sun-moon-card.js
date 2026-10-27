var ui=Object.defineProperty;var di=Object.getOwnPropertyDescriptor;var rt=(o,t,e,n)=>{for(var i=n>1?void 0:n?di(t,e):t,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&ui(t,e,i),i};var oe=globalThis,ie=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),Dn=new WeakMap,Gt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ie&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Dn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Dn.set(e,t))}return t}toString(){return this.cssText}},Cn=o=>new Gt(typeof o=="string"?o:o+"",void 0,Se),se=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new Gt(e,o,Se)},Nn=(o,t)=>{if(ie)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=oe.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Ae=ie?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Cn(e)})(o):o;var{is:hi,defineProperty:mi,getOwnPropertyDescriptor:pi,getOwnPropertyNames:gi,getOwnPropertySymbols:fi,getPrototypeOf:yi}=Object,re=globalThis,Ln=re.trustedTypes,bi=Ln?Ln.emptyScript:"",vi=re.reactiveElementPolyfillSupport,Wt=(o,t)=>o,Kt={toAttribute(o,t){switch(t){case Boolean:o=o?bi:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ae=(o,t)=>!hi(o,t),Hn={attribute:!0,type:String,converter:Kt,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;var dt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Hn){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&mi(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:s}=pi(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){let l=i?.call(this);s?.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Hn}static _$Ei(){if(this.hasOwnProperty(Wt("elementProperties")))return;let t=yi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Wt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wt("properties"))){let e=this.properties,n=[...gi(e),...fi(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Ae(i))}else t!==void 0&&e.push(Ae(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Kt).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Kt;this._$Em=i;let l=r.fromAttribute(e,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(t!==void 0){let r=this.constructor;if(i===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??ae)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},dt[Wt("elementProperties")]=new Map,dt[Wt("finalized")]=new Map,vi?.({ReactiveElement:dt}),(re.reactiveElementVersions??=[]).push("2.1.2");var He=globalThis,Rn=o=>o,le=He.trustedTypes,Pn=le?le.createPolicy("lit-html",{createHTML:o=>o}):void 0,Gn="$lit$",pt=`lit$${Math.random().toFixed(9).slice(2)}$`,Wn="?"+pt,xi=`<${Wn}>`,bt=document,Vt=()=>bt.createComment(""),jt=o=>o===null||typeof o!="object"&&typeof o!="function",Re=Array.isArray,wi=o=>Re(o)||typeof o?.[Symbol.iterator]=="function",Te=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zn=/-->/g,In=/>/g,ft=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),On=/'/g,Fn=/"/g,Kn=/^(?:script|style|textarea|title)$/i,Pe=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),S=Pe(1),b=Pe(2),ys=Pe(3),nt=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Un=new WeakMap,yt=bt.createTreeWalker(bt,129);function Bn(o,t){if(!Re(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pn!==void 0?Pn.createHTML(t):t}var $i=(o,t)=>{let e=o.length-1,n=[],i,s=t===2?"<svg>":t===3?"<math>":"",r=Bt;for(let l=0;l<e;l++){let c=o[l],u,d,h=-1,m=0;for(;m<c.length&&(r.lastIndex=m,d=r.exec(c),d!==null);)m=r.lastIndex,r===Bt?d[1]==="!--"?r=zn:d[1]!==void 0?r=In:d[2]!==void 0?(Kn.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=ft):d[3]!==void 0&&(r=ft):r===ft?d[0]===">"?(r=i??Bt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?ft:d[3]==='"'?Fn:On):r===Fn||r===On?r=ft:r===zn||r===In?r=Bt:(r=ft,i=void 0);let p=r===ft&&o[l+1].startsWith("/>")?" ":"";s+=r===Bt?c+xi:h>=0?(n.push(u),c.slice(0,h)+Gn+c.slice(h)+pt+p):c+pt+(h===-2?l:p)}return[Bn(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},qt=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,r=0,l=t.length-1,c=this.parts,[u,d]=$i(t,e);if(this.el=o.createElement(u,n),yt.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=yt.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Gn)){let m=d[r++],p=i.getAttribute(h).split(pt),y=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:y[2],strings:p,ctor:y[1]==="."?De:y[1]==="?"?Ce:y[1]==="@"?Ne:Tt}),i.removeAttribute(h)}else h.startsWith(pt)&&(c.push({type:6,index:s}),i.removeAttribute(h));if(Kn.test(i.tagName)){let h=i.textContent.split(pt),m=h.length-1;if(m>0){i.textContent=le?le.emptyScript:"";for(let p=0;p<m;p++)i.append(h[p],Vt()),yt.nextNode(),c.push({type:2,index:++s});i.append(h[m],Vt())}}}else if(i.nodeType===8)if(i.data===Wn)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(pt,h+1))!==-1;)c.push({type:7,index:s}),h+=pt.length-1}s++}}static createElement(t,e){let n=bt.createElement("template");return n.innerHTML=t,n}};function At(o,t,e=o,n){if(t===nt)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,s=jt(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=At(o,i._$AS(o,t.values),i,n)),t}var Ee=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??bt).importNode(e,!0);yt.currentNode=i;let s=yt.nextNode(),r=0,l=0,c=n[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new Zt(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Le(s,this,t)),this._$AV.push(u),c=n[++l]}r!==c?.index&&(s=yt.nextNode(),r++)}return yt.currentNode=bt,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Zt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=At(this,t,e),jt(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==nt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wi(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&jt(this._$AH)?this._$AA.nextSibling.data=t:this.T(bt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=qt.createElement(Bn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new Ee(i,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Un.get(t.strings);return e===void 0&&Un.set(t.strings,e=new qt(t)),e}k(t){Re(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new o(this.O(Vt()),this.O(Vt()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Rn(t).nextSibling;Rn(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(t,e=this,n,i){let s=this.strings,r=!1;if(s===void 0)t=At(this,t,e,0),r=!jt(t)||t!==this._$AH&&t!==nt,r&&(this._$AH=t);else{let l=t,c,u;for(t=s[0],c=0;c<s.length-1;c++)u=At(this,l[n+c],e,c),u===nt&&(u=this._$AH[c]),r||=!jt(u)||u!==this._$AH[c],u===_?t=_:t!==_&&(t+=(u??"")+s[c+1]),this._$AH[c]=u}r&&!i&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},De=class extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},Ce=class extends Tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},Ne=class extends Tt{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=At(this,t,e,0)??_)===nt)return;let n=this._$AH,i=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Le=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}};var _i=He.litHtmlPolyfillSupport;_i?.(qt,Zt),(He.litHtmlVersions??=[]).push("3.3.3");var Vn=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let s=e?.renderBefore??null;n._$litPart$=i=new Zt(t.insertBefore(Vt(),s),s,void 0,e??{})}return i._$AI(o),i};var ze=globalThis,at=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vn(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};at._$litElement$=!0,at.finalized=!0,ze.litElementHydrateSupport?.({LitElement:at});var ki=ze.litElementPolyfillSupport;ki?.({LitElement:at});(ze.litElementVersions??=[]).push("4.2.2");var ce=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var Mi={attribute:!0,type:String,converter:Kt,reflect:!1,hasChanged:ae},Si=(o=Mi,t,e)=>{let{kind:n,metadata:i}=e,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(e.name,o),n==="accessor"){let{name:r}=e;return{set(l){let c=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,c,o,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,o,l),l}}}if(n==="setter"){let{name:r}=e;return function(l){let c=this[r];t.call(this,l),this.requestUpdate(r,c,o,!0,l)}}throw Error("Unsupported decorator location: "+n)};function Et(o){return(t,e)=>typeof e=="object"?Si(o,t,e):((n,i,s)=>{let r=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(i,s):void 0})(o,t,e)}function Dt(o){return Et({...o,state:!0,attribute:!1})}var de={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},he=o=>(...t)=>({_$litDirective$:o,values:t}),Ct=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var vt=he(class extends Ct{constructor(o){if(super(o),o.type!==de.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=o.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return nt}});var jn="important",Ai=" !"+jn,j=he(class extends Ct{constructor(o){if(super(o),o.type!==de.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let n=o[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let i=t[n];if(i!=null){this.ft.add(n);let s=typeof i=="string"&&i.endsWith(Ai);n.includes("-")||s?e.setProperty(n,s?i.slice(0,-11):i,s?jn:""):e[n]=i}}return nt}});var qn=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Zn=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],Yn=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],Ie=385000.49;var L=Math.PI/180,ot=180/Math.PI,Ti=1495978707e-1,Qn=6378.14,Oe=-.833,gt=-6,xt=-12,wt=-18,Xn=120*1e3;function Yt(o){return(typeof o=="number"?o:o.getTime())/864e5+24405875e-1}function Lt(o){return(o-2451545)/36525}function I(o){let t=o%360;return t<0?t+360:t}function Ei(o){let t=Lt(o);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function Di(o){let t=o-2451545,e=Lt(o),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return I(n)}function Fe(o){let t=Lt(o),e=I(280.46646+t*(36000.76983+t*3032e-7)),n=I(357.52911+t*(35999.05029-1537e-7*t)),i=Math.sin(n*L)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*L)*(.019993-101e-6*t)+Math.sin(3*n*L)*289e-6,s=e+i,r=I(125.04-1934.136*t),l=s-.00569-.00478*Math.sin(r*L),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*L),d=l*L,h=u*L,m=I(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*ot),p=Math.asin(Math.sin(h)*Math.sin(d))*ot;return{ra:m,dec:p}}function Ci(o){let t=Lt(o),e=I(280.46646+t*(36000.76983+t*3032e-7)),n=I(357.52911+t*(35999.05029-1537e-7*t)),i=Math.sin(n*L)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*L)*(.019993-101e-6*t)+Math.sin(3*n*L)*289e-6,s=I(125.04-1934.136*t);return I(e+i-.00569-.00478*Math.sin(s*L))}function Ni(o){let t=Yt(o),e=Lt(t),n=I(357.52911+e*(35999.05029-1537e-7*e)),i=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*L)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*L)*(.019993-101e-6*e)+Math.sin(3*n*L)*289e-6,r=(n+s)*L;return 1.000001018*(1-i*i)/(1+i*Math.cos(r))*Ti}function Ue(o,t,e,n){let i=I(Di(n)+e),s=I(i-o.ra),r=t*L,l=o.dec*L,c=s*L,u=Math.asin(Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(c))*ot,d=I(Math.atan2(Math.sin(c),Math.cos(c)*Math.sin(r)-Math.tan(l)*Math.cos(r))*ot+180);return{altitude:u,azimuth:d}}function Ge(o,t){let e=Yt(o);return Ue(Fe(e),t.latitude,t.longitude,e).altitude}function me(o,t){let e=Yt(o);return Ue(Fe(e),t.latitude,t.longitude,e)}function Li(o){let t=o;return{D:I(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:I(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:I(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:I(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function to(o){let t=Lt(o),e=I(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=Li(t),i=e;for(let l of qn){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;i+=l[4]*Math.sin(c*L)}let s=0;for(let l of Zn){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;s+=l[4]*Math.sin(c*L)}let r=Ie;for(let l of Yn){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;r+=l[4]*Math.cos(c*L)}return{longitude:I(i),latitude:s,distanceKm:r}}function eo(o,t,e){let n=Ei(e)*L,i=o*L,s=t*L,r=I(Math.atan2(Math.sin(i)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(i))*ot),l=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(i))*ot;return{ra:r,dec:l}}function Nt(o,t){let e=Yt(o),n=to(e),i=eo(n.longitude,n.latitude,e),s=Ue(i,t.latitude,t.longitude,e),r=Math.asin(Qn/n.distanceKm)*ot,l=s.altitude-r*Math.cos(s.altitude*L);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:l,equatorial:i,geocentric:n}}function Hi(o){return .7275*(Math.asin(Qn/o)*ot)-.5667}var Ri=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],Pi=29.530588853;function pe(o){let t=Yt(o),e=to(t),n=eo(e.longitude,e.latitude,t),i=Fe(t),s=Ci(t),r=Ni(o),l=e.distanceKm,c=e.latitude*L,u=Math.acos(Math.min(1,Math.max(-1,Math.cos(c)*Math.cos((e.longitude-s)*L)))),d=Math.atan2(r*Math.sin(u),l-r*Math.cos(u)),h=I(d*ot),m=(1+Math.cos(d))/2,p=(i.ra-n.ra)*L,y=i.dec*L,k=n.dec*L,C=I(Math.atan2(Math.cos(y)*Math.sin(p),Math.sin(y)*Math.cos(k)-Math.cos(y)*Math.sin(k)*Math.cos(p))*ot),v=I(e.longitude-s)/360,f=Math.min(7,Math.floor(v*8+.5)%8),x=v*29.530588853;return{illumination:m,phaseAngle:h,elongation:u*ot,phaseIndex:f,phaseKey:Ri[f],brightLimbAngle:C,moonAgeDays:x,waxing:v<.5,distanceKm:l}}function We(o,t,e,n,i){let s=[];if(!(t>o))return s;let r=Math.max(2,Math.ceil((t-o)/e)),l=(t-o)/r,c=o,u=n(o)-i;for(let d=1;d<=r;d++){let h=o+d*l,m=n(h)-i;if(u===0)s.push({time:c,rising:m>0});else if(u<0&&m>=0||u>0&&m<=0){let p=c,y=h,k=u;for(let C=0;C<50&&y-p>1;C++){let v=(p+y)/2,f=n(v)-i;f<0&&k<0||f>0&&k>0?(p=v,k=f):y=v}s.push({time:(p+y)/2,rising:m>u})}c=h,u=m}return s}function Jn(o,t,e,n){let i=o.find(s=>s.rising===t&&s.time>=e&&s.time<n);return i?new Date(i.time):null}function Ke(o,t,e,n=4){let i=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),l=e.getTime(),c=$=>Ge($,o),u=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let $=r;$<l;$+=d)u.push({time:$,altitude:c($)});u.push({time:l,altitude:c(l)});let h=-1/0,m=1/0;for(let $ of u)$.altitude>h&&(h=$.altitude),$.altitude<m&&(m=$.altitude);let p=[["sunrise","sunset",Oe],["civilDawn","civilDusk",gt],["nauticalDawn","nauticalDusk",xt],["astronomicalDawn","astronomicalDusk",wt]],y={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[$,E,M]of p){let A=We(i,s,Xn,c,M);y[$]=Jn(A,!0,r,l),y[E]=Jn(A,!1,r,l)}let k=r,C=-1/0,v=120*1e3;for(let $=r;$<=l;$+=v){let E=c($);E>C&&(C=E,k=$)}let f=Math.max(r,k-v),x=Math.min(l,k+v);for(let $=0;$<40&&x-f>1e3;$++){let E=f+(x-f)/3,M=x-(x-f)/3;c(E)<c(M)?f=E:x=M}y.solarNoon=new Date((f+x)/2);let N="none";return m>Oe?N="polar-day":h<Oe&&(N="polar-night"),{dayStart:t,dayEnd:e,samples:u,maxAltitude:h,minAltitude:m,events:y,polar:N}}function no(o,t){let e=o.getTime(),n=e-1800*60*1e3,i=e+1800*60*1e3,r=We(n,i,Xn,p=>{let y=Nt(p,t);return y.altitude-Hi(y.distanceKm)},0),l=r.filter(p=>p.rising),c=r.filter(p=>!p.rising),u=l.find(p=>p.time>e)??null,d=[...l].reverse().find(p=>p.time<=e)??null,h=c.find(p=>p.time>e)??null,m=[...c].reverse().find(p=>p.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:m?new Date(m.time):null,nextRise:u?new Date(u.time):null,nextSet:h?new Date(h.time):null}}function oo(o){return o>0?"day":o>gt?"civil":o>xt?"nautical":o>wt?"astronomical":"night"}function zi(o){return(((pe(o).moonAgeDays/Pi-.5)%1+1)%1+.5)%1-.5}function Be(o,t){let e=typeof o=="number"?o:o.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?We(e,n,360*60*1e3,zi,0).filter(i=>i.rising).map(i=>new Date(i.time)):[]}function io(o,t=32){let e=typeof o=="number"?o:o.getTime(),i=Be(e,e+t*24*60*60*1e3)[0];if(!i)return null;let s=pe(i).illumination;return s<.98?null:{time:i,illumination:s}}function so(o,t,e=14){let n=typeof o=="number"?o:o.getTime(),i=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,u=s,d=s;for(let h=s;h<=r;h+=i){let m=Nt(h,t).distanceKm;m<l&&(l=m,u=h),m>c&&(c=m,d=h)}return{current:Nt(n,t).distanceKm,min:l,minTime:new Date(u),max:c,maxTime:new Date(d),mean:Ie}}function ge(o,t,e="sun"){return(e==="sun"?me(o,t):Nt(o,t)).azimuth}var ye="sun-moon-card",co="sun-moon-card",uo="sun-moon-card-editor";var H=[120,800];var D={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null},ho=1200*1e3,Ye={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347"},Je={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef"},mo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],Qe=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],$t={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat"]},po=700,Ii=260,ro=10,Ze=56,Oi=84,Fi=96,Ve=74,Ui=Ze+8,Gi=12,Wi=10,Q=4,fe=4,ao=30,lo=44,Ki=26,Bi=72,Vi=96,je=20,qe=18;function go(o,t,e){let n=e.compact_mode,i=n?Wi:Gi,s=Math.max(40,o-2*i),r=0,l=e.show_footer&&!n?je+Q:0,c=ao+Q+lo+Q+l+(qe+fe)+Ve,u=e.show_header&&!n&&s>=c,d=u?ao:0;s-=d,u&&(s-=Q,r+=Q);let h=n?Ki:lo,m=e.show_events&&s-(h+Q)-l>=Oi,p=m?h:0;s-=p,m&&(s-=Q,r+=Q);let y=e.show_astronomical_details?Vi:Bi,k=!n&&(e.show_sun||e.show_moon)&&s-(y+Q)-l>=Fi,C=k?y:0;s-=C,k&&(s-=Q,r+=Q);let v=e.show_footer&&!n&&m&&s-(je+Q)>=Ui,f=v?je:0;s-=f,v&&(s-=Q,r+=Q);let x=Math.max(Ze,s),N=e.show_day_chart&&!n&&m&&x-qe-fe>=Ve,$=N?qe:0;N&&(r+=fe);let E=Math.max(Ze,x-$-(N?fe:0)),M=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),A=M&&t>=po&&E>=Ve,R=Math.max(80,t-2*i),P=A?Math.round(Math.min(Ii,(R-ro)/3)):0,O=Math.max(120,A?R-ro-P:R);return{padding:i,showHeader:u,showEvents:m,showDetails:k,showFooter:v,showLegend:N,skyViewSide:A,skyViewInline:!A&&M&&k,skyViewWidth:P,chartWidth:O,gaps:r,headerHeight:d,eventsHeight:p,detailsHeight:C,footerHeight:f,legendHeight:$,chartHeight:E,compact:n}}function fo(o){return o>=po?360:320}function be(){return{type:`custom:${ye}`,card_height:340}}var Xe={de:{title:"Sonne & Mond",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",azimuthReadout:"{body}: {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max} km",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max} km",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",azimuthReadout:"{body}: {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function Y(o,t,e){let i=(Xe[o]??Xe.en)[t]??Xe.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))i=i.split(`{${s}}`).join(String(r));return i}function _t(o,t){return((o&&o!=="auto"?o:t)??"").toLowerCase().startsWith("de")?"de":"en"}function vo(o,t,e){let n=o;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let i=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return i.hour12??i.hourCycle==="h12"}catch{return!1}}var yo=new Map;function tn(o,t,e){let n=`${t}|${o}`,i=yo.get(n);if(i)return i;let s=o;try{let l=new Intl.DateTimeFormat(t,{timeZone:o,timeZoneName:"long"}).formatToParts(e).find(c=>c.type==="timeZoneName");l&&l.value.trim()!==""&&(s=l.value)}catch{}return yo.set(n,s),s}var bo=new Map;function ji(o,t,e){let n=`${o}|${t}|${e}`,i=bo.get(n);if(!i){try{i=new Intl.DateTimeFormat(o,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{i=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}bo.set(n,i)}return i}function lt(o,t){return ji(t.locale,t.timeZone,t.hour12).format(o)}function xo(o,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(o)}catch{return o.toISOString().slice(0,10)}}function en(o,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(o)}catch{return o.toFixed(t)}}function Ht(o,t=1,e="de-DE"){return`${en(o,t,e)}\xB0`}function ve(o,t="de-DE"){return`${en(Math.round(o),0,t)} km`}function wo(o,t="de-DE"){let e=o<0?"\u2212":"+",n=Math.round(Math.abs(o)),i=Math.floor(n/60),s=n%60,r=t.startsWith("de")?":":"h ",l=t.startsWith("de")?"":"m";return`${e}${i}${r}${String(s).padStart(2,"0")}${l}`}function $o(o){let t=Math.max(0,Math.round(o)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function nn(o,t){return t(o===0?"dayToday":o===1?"dayTomorrow":"dayFollowing")}function _o(o,t="de-DE"){return`${en(o*100,0,t)} %`}function Jt(o,t){let e=(o%360+360)%360,n=Qe[0],i=1/0;for(let r of Qe){let l=Math.abs((e-r.deg+540)%360-180);l<i&&(i=l,n=r)}let s=`dir${n.key}`;return Y(t,s)}function ko(o,t,e,n){return{language:o,locale:t,timeZone:e,hour12:n,t:(i,s)=>Y(o,i,s)}}function w(o,t,e){return Number.isNaN(o)?t:Math.min(e,Math.max(t,o))}function a(o,t=0){let e=10**t;return Math.round(o*e)/e}function on(o){return typeof o=="number"&&Number.isFinite(o)}function ct(o){if(typeof o=="number"&&Number.isFinite(o))return o;if(typeof o=="string"&&o.trim()!==""){let t=Number(o.replace(",","."));if(Number.isFinite(t))return t}return null}function Mo(o){return o.length===0?"":o.map((t,e)=>`${e===0?"M":"L"}${a(t.x,2)} ${a(t.y,2)}`).join(" ")}function sn(o,t=.5){if(o.length<3)return Mo(o);let e=[`M${a(o[0].x,2)} ${a(o[0].y,2)}`];for(let n=0;n<o.length-1;n++){let i=o[n-1]??o[n],s=o[n],r=o[n+1],l=o[n+2]??r,c=s.x+(r.x-i.x)/6*t*2,u=s.y+(r.y-i.y)/6*t*2,d=r.x-(l.x-s.x)/6*t*2,h=r.y-(l.y-s.y)/6*t*2;e.push(`C${a(c,2)} ${a(u,2)} ${a(d,2)} ${a(h,2)} ${a(r.x,2)} ${a(r.y,2)}`)}return e.join(" ")}function rn(o,t,e=!1){if(o.length===0)return"";let n=e?sn(o):Mo(o),i=o[0],s=o[o.length-1];return`${n} L${a(s.x,2)} ${a(t,2)} L${a(i.x,2)} ${a(t,2)} Z`}function ht(o,t,e){let n=e*Math.PI/180;return{x:o.x-t*Math.sin(n),y:o.y-t*Math.cos(n)}}function So(o,t,e){let n=w(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${a(o.x-t,2)} ${a(o.y,2)} a${a(t,2)} ${a(t,2)} 0 1 1 ${a(t*2,2)} 0 a${a(t,2)} ${a(t,2)} 0 1 1 ${a(-t*2,2)} 0 Z`;let i=t*(1-2*n),s=1,r=i>0?0:1,l={x:o.x-t,y:o.y},c={x:o.x+t,y:o.y};return`M${a(l.x,2)} ${a(l.y,2)} A${a(t,2)} ${a(t,2)} 0 0 ${s} ${a(c.x,2)} ${a(c.y,2)} A${a(t,2)} ${a(Math.abs(i),4)} 0 0 ${r} ${a(l.x,2)} ${a(l.y,2)} Z`}function Ao(o=new Date){let t=o.getTime();return t+(6e4-t%6e4)+250}function qi(o,t){if(o.length<=t)return o;let e=o.length/t,n=[];for(let s=0;s<t;s++)n.push(o[Math.floor(s*e)]);let i=o[o.length-1];return n[n.length-1]!==i&&n.push(i),n}function Zi(o,t,e,n,i){if(o.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),l,c;if(s!==void 0&&r!==void 0&&r>s)l=n(s),c=n(r);else if(e==="polar-day")l=o[0].x,c=o[o.length-1].x;else return null;let u=o.filter(d=>d.x>=l-.5&&d.x<=c+.5);return u.length<2?null:{path:rn(u,i,!0),cx:(l+c)/2,cy:i,r:Math.max(6,(c-l)/2)}}function Yi(o){let t=o.maxAltitude,e=o.minAltitude,n=Math.min(e,-18),i=Math.max(3,(t-n)*.1),s=w(t+i,-18,90.5);return[w(Math.max(-28,e-2),-90,s-6),s]}function Ji(o,t,e,n){let i=[0,gt,xt,wt],s=[o.day,o.civil,o.nautical,o.astronomical,o.night],r=[],l=.006,c=0;for(let h=0;h<i.length;h++){let m=(t(i[h])-e)/n,p=w(m,0,1);if(p<=0){r.push({offset:0,color:s[h+1]}),c=0;continue}if(p>=1){r.push({offset:w(c,0,1),color:s[h]}),r.push({offset:1,color:s[h]}),c=1;break}r.push({offset:w(c,0,1),color:s[h]}),r.push({offset:w(p-l,0,1),color:s[h]}),r.push({offset:w(p+l,0,1),color:s[h+1]}),c=p+l}if(c<1){let h=s[s.length-1];r.push({offset:w(c,0,1),color:h}),r.push({offset:1,color:h})}let u=[],d=-1;for(let h of[...r].sort((m,p)=>m.offset-p.offset)){let m=w(Math.max(h.offset,d),0,1);u.push({offset:m,color:h.color}),d=m}return u}function To(o){let{profile:t,events:e,now:n,width:i,height:s,palette:r,format:l,showSun:c,showMoon:u,showTwilight:d,twilightLevel:h,animations:m,uid:p,showAstronomicalLayers:y,currentAltitude:k}=o,C=Math.max(120,i),v=Math.max(56,s),f=4,x=4,N=6,$=v>=112,E=$?w(a(v*.13,1),13,20):0,M=f,A=Math.max(10,C-f-x),R=N,P=Math.max(10,v-N-E),O=R+P,[X,tt]=Yi(t),J=Math.max(1,tt-X),ut=t.dayStart.getTime(),q=t.dayEnd.getTime(),Z=Math.max(1,q-ut),W=g=>M+(g-ut)/Z*A,F=g=>O-(w(g,-95,95)-X)/J*P,it=F(0),U=w(Math.round(A/1.6),60,361),T=qi(t.samples,U).map(g=>({x:W(g.time),y:F(g.altitude)})),K=Ji(r,F,R,P),Mt=`${p}-area`,fn=`${p}-line`,yn=`${p}-clip`,bn=`${p}-glow`,jo=rn(T,O+1,!0),qo=sn(T),St=Zi(T,e,t.polar,W,it),vn=`${p}-dome`,B=l.t,It=[],Ot=g=>{g.time&&!Number.isNaN(g.time.getTime())&&It.push({secondary:!1,...g})};if(e.sunrise&&Ot({key:"sunrise",time:e.sunrise,label:B("sunrise"),shortLabel:B("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&Ot({key:"sunset",time:e.sunset,label:B("sunset"),shortLabel:B("sunsetShort"),kind:"sunset",altitude:0}),d&&(e.civilDawn&&Ot({key:"civilDawn",time:e.civilDawn,label:B("civilDawn"),shortLabel:B("civilDawnShort"),kind:"dawn",altitude:gt}),e.civilDusk&&Ot({key:"civilDusk",time:e.civilDusk,label:B("civilDusk"),shortLabel:B("civilDuskShort"),kind:"dusk",altitude:gt}),h==="all"||y)){let g=[["nauticalDawn","dawn","nauticalDawn",xt],["nauticalDusk","dusk","nauticalDusk",xt],["astronomicalDawn","dawn","astronomicalDawn",wt],["astronomicalDusk","dusk","astronomicalDusk",wt]];for(let[z,G,V,st]of g){let Ut=e[z];Ut&&Ot({key:z,time:Ut,label:B(V),shortLabel:B(V),kind:G,altitude:st,secondary:!0})}}It.sort((g,z)=>g.time.getTime()-z.time.getTime());let Xt=w(a(v*.062,1),7.5,10.5),we=w(a(Xt+5,1),11,E||15),Zo=It.filter(g=>!g.secondary),Yo=It.filter(g=>g.secondary),Jo=A<240?3:A<340?4:6,xn=[...Zo,...Yo].slice(0,Math.max(2,Jo)).sort((g,z)=>g.time.getTime()-z.time.getTime()),Qo=xn.length>3||A<300,$e=[],_e=-1/0;for(let g of xn){let z=Qo?g.shortLabel:g.label,G=z.length*Xt*.56+8,V=W(g.time.getTime());V=w(V,M+G/2,M+A-G/2),V-G/2<_e+3&&(V=_e+3+G/2),!(V+G/2>M+A+.5)&&(_e=V+G/2,$e.push({x:V,width:G,text:z,secondary:g.secondary}))}let ke=w(W(n.getTime()),M,M+A),Xo=w(F(k),R,O),ti=k>0?r.lineDay:r.lineNight,wn=w(a(v*.045,1),3.5,6),ei=m?"smc-pulse":"",ni=m?`url(#${bn})`:"",Me=[{altitude:0,label:B("horizon"),key:"horizon"}];y||h==="all"?Me.push({altitude:gt,label:`${B("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:xt,label:`${B("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:wt,label:`${B("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):d&&Me.push({altitude:gt,label:`${B("refCivil")} (\u22126\xB0)`,key:"civil"});let oi=P>=86&&A>=250,ii=Me.filter(g=>g.altitude>X+.5&&g.altitude<tt-.5),si=w(a(v*.055,1),7.5,9.5),Ft=e.solarNoon,$n=!!Ft&&t.maxAltitude>0&&P>=104&&A>=220&&y,_n=$n?`${B("zenith")} ${lt(Ft,l)} \xB7 ${Ht(t.maxAltitude,1,l.locale)}`:"",te=w(a(v*.055,1),7.5,9.5),ee=_n.length*te*.56+10,kn=Ft?w(W(Ft.getTime()),M+ee/2,M+A-ee/2):0,Mn=Ft?F(t.maxAltitude):0,ne=te+5,Sn=w(Mn-ne-4,R,Math.max(R,Mn+10)),An=A<220?4:A<420?6:8,Tn=[];for(let g=1;g<An;g++)Tn.push(M+A*g/An);return b`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${a(C,1)} ${a(v,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${B("title")}"
    >
      <defs>
        <linearGradient id="${Mt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(R,1)}" x2="0" y2="${a(O,1)}">
          ${K.map(g=>b`<stop offset="${a(g.offset*100,3)}%" stop-color="${g.color}" />`)}
        </linearGradient>
        <linearGradient id="${fn}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(R,1)}" x2="0" y2="${a(O,1)}">
          ${K.map(g=>b`<stop offset="${a(g.offset*100,3)}%" stop-color="${g.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${St?b`<radialGradient id="${vn}" gradientUnits="userSpaceOnUse"
                cx="${a(St.cx,1)}" cy="${a(St.cy,1)}" r="${a(St.r,1)}">
                <stop offset="0%" stop-color="${r.day}" stop-opacity="0.34" />
                <stop offset="55%" stop-color="${r.day}" stop-opacity="0.15" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:b``}
        <clipPath id="${yn}">
          <rect x="${a(M-1,1)}" y="${a(R-2,1)}"
            width="${a(A+2,1)}" height="${a(P+4,1)}" />
        </clipPath>
        ${m?b`<filter id="${bn}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${a(wn*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:b``}
      </defs>

      <g clip-path="url(#${yn})">
        ${Tn.map(g=>b`<line x1="${a(g,1)}" y1="${a(R,1)}" x2="${a(g,1)}" y2="${a(O,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <path d="${jo}" fill="url(#${Mt})" opacity="0.9" />
        ${St?b`<path d="${St.path}" fill="url(#${vn})" opacity="0.95" />`:b``}
        <path
          d="${qo}"
          fill="none"
          stroke="url(#${fn})"
          stroke-width="${w(a(v*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${ii.map(g=>{let z=F(g.altitude),G=g.key==="horizon";return b`<g>
            <line
              x1="${a(M,1)}" y1="${a(z,1)}"
              x2="${a(M+A,1)}" y2="${a(z,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${G?1:.6}"
              stroke-dasharray="${G?"3 3":"2 4"}"
              opacity="${G?.6:.45}"
            />
            ${oi?b`<text
                    x="${a(M+3,1)}"
                    y="${a(z-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${si}"
                    opacity="0.85"
                  >${g.label}</text>`:b``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${It.map(g=>{let z=w(W(g.time.getTime()),M,M+A),G=w(F(g.altitude),R,O),V=!g.secondary,st=V?w(a(v*.022,1),1.8,3):1.4,Ut="var(--smc-marker-strong, rgba(255,255,255,0.9))",En="var(--smc-marker-soft, rgba(255,255,255,0.55))",ri=g.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":g.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":g.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",ai=V?ri:En,li=V?Ut:En,ci=g.kind==="sunrise"||g.kind==="sunset"?b`
                <circle cx="${a(z,1)}" cy="${a(G,1)}" r="${st+1}"
                  fill="${g.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${a(z-st*2.6,1)}"
                  y1="${a(g.kind==="sunrise"?G+st+2:G-st-2,1)}"
                  x2="${a(z+st*2.6,1)}"
                  y2="${a(g.kind==="sunrise"?G+st+2:G-st-2,1)}"
                  stroke="${Ut}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:b`<circle cx="${a(z,1)}" cy="${a(G,1)}" r="${st}"
                  fill="${li}" opacity="0.85" />`;return b`<g>
            <line
              x1="${a(z,1)}" y1="${a(R,1)}"
              x2="${a(z,1)}" y2="${a(O,1)}"
              stroke="${ai}" stroke-width="${V?1:.7}"
              stroke-dasharray="3 3" opacity="${V?.5:.25}" />
            ${ci}
          </g>`})}
      </g>

      <g class="now-marker">
        <line
          x1="${a(ke,1)}" y1="${a(R,1)}"
          x2="${a(ke,1)}" y2="${a(O,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${w(a(v*.012,2),1,1.8)}"
          opacity="0.85" />
        ${c||u?b`<g class="${ei}" filter="${ni}">
                <circle
                  cx="${a(ke,1)}"
                  cy="${a(Xo,1)}"
                  r="${wn}"
                  fill="${ti}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="0.8"
                />
              </g>`:b``}
      </g>

      ${$n?b`<g class="zenith-chip">
              <rect
                x="${a(kn-ee/2,1)}"
                y="${a(Sn,1)}"
                width="${a(ee,1)}"
                height="${a(ne,1)}"
                rx="${a(ne/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${a(kn,1)}"
                y="${a(Sn+ne/2+te*.36,1)}"
                text-anchor="middle"
                font-size="${te}"
                fill="var(--smc-label-color, #ffffff)"
              >${_n}</text>
            </g>`:b``}

      ${$?b`<line
              x1="${a(M,1)}" y1="${a(O+.5,1)}"
              x2="${a(M+A,1)}" y2="${a(O+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:b``}

      ${$e.length?b`<g class="event-labels" font-size="${Xt}">
              ${$e.map(g=>{let z=$?O+2:R;return b`<g>
                  <rect
                    x="${a(g.x-g.width/2,1)}"
                    y="${a(z,1)}"
                    width="${a(g.width,1)}"
                    height="${a(we,1)}"
                    rx="${a(we/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${g.secondary?.6:.88}" />
                  <text
                    x="${a(g.x,1)}"
                    y="${a(z+we/2+Xt*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${g.secondary?.75:1}"
                  >${g.text}</text>
                </g>`})}
            </g>`:b``}
    </svg>
  `}var Qi=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function xe(o){let{size:t,illumination:e,brightLimbAngle:n,litColor:i="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:l="",uid:c}=o,u={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=So(u,d,e),m=r&&t>=26,p=a(-n,2);return b`
    <svg
      class="moon-disc ${l}"
      width="${a(t,1)}"
      height="${a(t,1)}"
      viewBox="0 0 ${a(t,1)} ${a(t,1)}"
      role="img"
      aria-hidden="true"
    >
      <circle
        cx="${a(u.x,2)}" cy="${a(u.y,2)}" r="${a(d,2)}"
        fill="${s}"
      />
      ${h?b`<g transform="rotate(${p} ${a(u.x,2)} ${a(u.y,2)})">
              <path d="${h}" fill="${i}" />
              ${m?b`<g clip-path="url(#${c}-clip)" opacity="0.16">
                      <clipPath id="${c}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${Qi.map(y=>{let k={x:u.x+y.x*d,y:u.y+y.y*d};return b`<circle
                          cx="${a(k.x,2)}" cy="${a(k.y,2)}"
                          r="${a(y.r*d,2)}"
                          fill="#5a6488" />`})}
                    </g>`:b``}
            </g>`:b``}
      <circle
        cx="${a(u.x,2)}" cy="${a(u.y,2)}" r="${a(d,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function an(o,t,e,n){let i=ht(o,t,e),s=e*Math.PI/180,r=-Math.sin(s),l=-Math.cos(s),c=w(t*.12,4,9),u=w(t*.07,2.5,5),d={x:i.x+r*c,y:i.y+l*c},h={x:i.x-l*u,y:i.y+r*u},m={x:i.x+l*u,y:i.y-r*u};return b`
    <polygon
      points="${a(d.x,2)},${a(d.y,2)} ${a(h.x,2)},${a(h.y,2)} ${a(m.x,2)},${a(m.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}function ln(o){let t=Math.sin(o*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Xi(o,t,e){let n=[];for(let i=0;i<t;i++){let s=Math.sqrt(ln(o*7.13+i*1.37))*e*.96,r=ln(o*3.71+i*2.11)*360,l=ht({x:0,y:0},s,r),c=ln(o*5.19+i*4.53);n.push({x:l.x,y:l.y,r:.35+c*.75,opacity:.16+c*.34})}return n}function cn(o,t){return w((90-o)/90*t,0,t)}function un(o){let{width:t,height:e,sun:n,moon:i,sunTrack:s,moonPhase:r,showSun:l,showMoon:c,palette:u,format:d,animations:h,uid:m,showCardinals:p=!0,seed:y=0}=o,k=Math.max(80,t),C=Math.max(80,e),v=6,f={x:k/2,y:C/2},x=Math.max(10,Math.min(k,C)/2-v),N=`${m}-dome`,$=`${m}-dome-clip`,E=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],M=w(a(x*.17,1),7,11),A=n?n.altitude>0:!1,R=w(a(x*.11,1),4,11),P=n?ht(f,cn(n.altitude,x),n.azimuth):null,O=l&&n&&P,X=i?i.altitude>0:!1,tt=w(a(x*.24,1),10,22),J=i?ht(f,cn(i.altitude,x),i.azimuth):null,ut=c&&i&&J&&r,q=p&&x>=42,Z=w(a(x*.14,1),6.5,9),W=[{altitude:30,radius:x*(60/90)},{altitude:60,radius:x*(30/90)}],it=(n?.altitude??-90)<-6?Xi(Math.max(1,Math.round(y)),46,x):[],U=s.filter(T=>T.altitude>=-8).map(T=>ht(f,cn(T.altitude,x),T.azimuth));return b`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${a(k,1)} ${a(C,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${N}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${u.skyTop}" />
          <stop offset="100%" stop-color="${u.skyBottom}" />
        </radialGradient>
        <clipPath id="${$}">
          <circle cx="${a(f.x,1)}" cy="${a(f.y,1)}" r="${a(x,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${a(f.x,1)}" cy="${a(f.y,1)}" r="${a(x,1)}"
        fill="url(#${N})" opacity="0.55" />

      <g clip-path="url(#${$})">
        ${it.length?b`<g class="stars">
                ${it.map(T=>b`<circle
                      cx="${a(f.x+T.x,1)}"
                      cy="${a(f.y+T.y,1)}"
                      r="${a(T.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${a(T.opacity,2)}" />`)}
              </g>`:b``}
        ${W.map(T=>b`<circle
              cx="${a(f.x,1)}" cy="${a(f.y,1)}" r="${a(T.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${a(f.x-x,1)}" y1="${a(f.y,1)}"
          x2="${a(f.x+x,1)}" y2="${a(f.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${a(f.x,1)}" y1="${a(f.y-x,1)}"
          x2="${a(f.x,1)}" y2="${a(f.y+x,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${U.length>1?b`<path
                d="M${U.map(T=>`${a(T.x,1)} ${a(T.y,1)}`).join(" L")}"
                fill="none"
                stroke="${u.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:b``}
      </g>

      <circle
        cx="${a(f.x,1)}" cy="${a(f.y,1)}" r="${a(x,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${q?b`<g
              font-size="${Z}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${W.map(T=>{let K=ht(f,T.radius,45);return b`<text
                  x="${a(K.x,1)}"
                  y="${a(K.y+Z*.35,1)}"
                >${T.altitude}°</text>`})}
            </g>`:b``}

      ${p?b`<g font-size="${M}" fill="var(--smc-muted-color)" opacity="0.7">
              ${E.map(T=>{let K=ht(f,x*.87,T.azimuth);return b`<text
                  x="${a(K.x,1)}"
                  y="${a(K.y+M*.35,1)}"
                  text-anchor="middle"
                >${T.key}</text>`})}
            </g>`:b``}

      ${O&&A&&P?b`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${a(P.x,1)}" cy="${a(P.y,1)}" r="${R}"
                fill="${u.lineDay}" opacity="0.28" />
              <circle
                cx="${a(P.x,1)}" cy="${a(P.y,1)}" r="${a(R*.55,1)}"
                fill="${u.lineDay}" />
            </g>`:b``}
      ${l&&n&&!A?an(f,x,n.azimuth,u.lineNight):b``}

      ${ut&&X&&J&&r?b`<g transform="translate(${a(J.x-tt/2,1)} ${a(J.y-tt/2,1)})">
              ${xe({size:tt,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:tt>=16,uid:`${m}-moon`})}
            </g>`:b``}
      ${c&&i&&!X?an(f,x,i.azimuth,"var(--smc-moon-lit, #e6ebf7)"):b``}
    </svg>
  `}function Eo(o=16,t="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function Do(o=16,t="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function dn(o=16,t="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function hn(o=16,t="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Co(o=20,t="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function No(o=18,t="currentColor"){return b`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var Lo=new Map;function Ho(o){let t=Lo.get(o);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Lo.set(o,t)),t}function ts(o){try{return Ho(o)}catch{return Ho("UTC")}}function mn(o,t){let e=ts(t).formatToParts(o),n={};for(let i of e)i.type!=="literal"&&(n[i.type]=Number.parseInt(i.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function Ro(o,t){let e=mn(o,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(o.getTime()/1e3)*1e3}function es(o,t,e,n=0,i=0,s=0,r="UTC"){let l=Date.UTC(o,t-1,e,n,i,s),c=1440*60*1e3,u=[Ro(new Date(l-c),r),Ro(new Date(l+c),r)],d=[...new Set(u)].map(m=>l-m).filter(m=>{let p=mn(new Date(m),r);return p.year===o&&p.month===t&&p.day===e&&p.hour===n&&p.minute===i&&p.second===s}).sort((m,p)=>m-p);if(d.length>0)return new Date(d[0]);let h=Math.min(...u);return new Date(l-h)}function Rt(o,t){let e=mn(o,t);return es(e.year,e.month,e.day,0,0,0,t)}function Po(o,t){let e=Rt(o,t);return Rt(new Date(e.getTime()+2160*60*1e3),t)}function Pt(o,t){return Math.round(Rt(o,t).getTime()/(1440*60*1e3))}function zo(o){if(o)try{return new Intl.DateTimeFormat("en-US",{timeZone:o}),o}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function et(o,t){return typeof o=="boolean"?o:o==="true"||o===1?!0:o==="false"||o===0?!1:t}function Qt(o,t,e){return typeof o=="string"&&t.includes(o)?o:e}function Fo(o,t="en"){let e=[],n=[],i=o??{},s=D.card_height;if(typeof i.card_height=="number"&&Number.isFinite(i.card_height))s=Math.round(w(i.card_height,H[0],H[1])),s!==i.card_height&&n.push(Y(t,"invalidHeight",{value:String(i.card_height),min:H[0],max:H[1]}));else if(i.card_height==="auto"||i.card_height===null)s="auto";else if(typeof i.card_height=="number")n.push(Y(t,"invalidHeight",{value:String(i.card_height),min:H[0],max:H[1]}));else if(i.card_height!==void 0){let h=ct(i.card_height);h===null?e.push(Y(t,"invalidHeight",{value:String(i.card_height),min:H[0],max:H[1]})):s=Math.round(w(h,H[0],H[1]))}let r=null,l=null,c=ct(i.latitude),u=ct(i.longitude);return c!==null&&(c>=-90&&c<=90?r=c:n.push(Y(t,"invalidNumber",{value:String(i.latitude)}))),u!==null&&(u>=-180&&u<=180?l=u:n.push(Y(t,"invalidNumber",{value:String(i.longitude)}))),{config:{type:typeof i.type=="string"?i.type:"custom:sun-moon-card",entity:typeof i.entity=="string"&&i.entity.trim()!==""?i.entity.trim():D.entity,moon_entity:typeof i.moon_entity=="string"&&i.moon_entity.trim()!==""?i.moon_entity.trim():D.moon_entity,card_height:s,show_sun:et(i.show_sun,D.show_sun),show_moon:et(i.show_moon,D.show_moon),show_twilight:et(i.show_twilight,D.show_twilight),show_astronomical_details:et(i.show_astronomical_details,D.show_astronomical_details),compact_mode:et(i.compact_mode,D.compact_mode),card_style:Qt(i.card_style,$t.cardStyle,D.card_style),theme_mode:Qt(i.theme_mode,$t.themeMode,D.theme_mode),animations:et(i.animations,D.animations),time_format:Qt(i.time_format,$t.timeFormat,D.time_format),language:Qt(i.language,$t.language,D.language),show_header:et(i.show_header,D.show_header),show_day_chart:et(i.show_day_chart,D.show_day_chart),show_sky_view:et(i.show_sky_view,D.show_sky_view),show_events:et(i.show_events,D.show_events),show_moon_times:et(i.show_moon_times,D.show_moon_times),show_footer:et(i.show_footer,D.show_footer),twilight_level:Qt(i.twilight_level,$t.twilightLevel,D.twilight_level),location_name:typeof i.location_name=="string"?i.location_name:"",latitude:r,longitude:l},errors:e,warnings:n}}function Uo(o,t){return o.card_height==="auto"?w(fo(t),H[0],H[1]):w(o.card_height,H[0],H[1])}function ns(o,t,e,n="de"){let i={latitude:0,longitude:0},s={dayStart:o,dayEnd:new Date(o.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},l={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},c={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:o,timeZone:t,location:i,locationName:"",extras:os(t,Go(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:l,events:c,haPhaseName:null},sunTrack:[],events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function Go(o){return o==="de"?"de-DE":"en-GB"}function os(o,t){return{timeZoneLongName:tn(o,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null}}function is(o,t){let e=Be(o.getTime()-27648e5,o.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],i=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return i(n)===i(o)}function ss(o,t,e){if(!o)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(o));if(!Number.isFinite(n)||n<1||n>12)return null;let i=mo[n-1];return Y(e,"folkName",{name:Y(e,i)})}function Io(o,t,e,n){return o?{time:o,azimuth:ge(o,t,"moon"),dayOffset:Pt(o,n)-Pt(e,n)}:null}function rs(o){if(typeof o!="string"||o.trim()==="")return null;let t=new Date(o);return Number.isNaN(t.getTime())?null:t}var Oo=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],as={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function ls(o,t,e){let n=zo(t?.config?.time_zone),i=[],s=on(t?.config?.latitude)?t.config.latitude:null,r=on(t?.config?.longitude)?t.config.longitude:null,l=o.latitude??s,c=o.longitude??r,u=_t(o.language,t?.locale?.language??t?.language);if(l===null||c===null)return ns(e,n,["missing-location",...i],u);let d={latitude:l,longitude:c},h=o.location_name.trim()!==""?o.location_name.trim():t?.config?.location_name??"",m=Rt(e,n),p=Po(e,n),y=Ke(d,m,p),k=me(e,d),C=k.altitude,v=Ge(e.getTime()+6e4,d),f=Nt(e,d),x=pe(e),N=no(e,d),$=t?.states?.[o.entity];$||i.push("missing-sun-entity");let E={...y.events},M={};if($?.attributes)for(let[U,T]of Oo){let K=rs($.attributes[T]),Mt=y.events[U];if(K&&K>=m&&K<p&&(!Mt||Math.abs(K.getTime()-Mt.getTime())<=ho)){E[U]=K,M[U]="ha";continue}M[U]=Mt?"computed":"none"}else for(let[U]of Oo)M[U]=y.events[U]?"computed":"none";for(let U of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])M[U]=y.events[U]?"computed":"none";let A=$?.attributes?ct($.attributes.elevation):null,R=$?.attributes?ct($.attributes.azimuth):null,P=o.moon_entity?t?.states?.[o.moon_entity]:void 0,O=P&&typeof P.state=="string"?as[P.state]??null:null,X=[],tt=900*1e3;for(let U=m.getTime();U<=p.getTime();U+=tt){let T=me(U,d);X.push({altitude:T.altitude,azimuth:T.azimuth})}let J=null;E.sunrise&&E.sunset&&(J=(E.sunset.getTime()-E.sunrise.getTime())/6e4);let ut=Rt(new Date(m.getTime()-720*60*1e3),n),q=Ke(d,ut,m),Z=q.events.sunrise&&q.events.sunset?(q.events.sunset.getTime()-q.events.sunrise.getTime())/6e4:null,W=J!==null&&Z!==null?J-Z:null,F=io(e),it={timeZoneLongName:tn(n,Go(u),e),previousDaylightMinutes:Z,daylightDeltaMinutes:W,sunBelowHorizon:C<0?Math.abs(C):null,sunriseAzimuth:E.sunrise?ge(E.sunrise,d,"sun"):null,sunsetAzimuth:E.sunset?ge(E.sunset,d,"sun"):null,nextFullMoon:F,nextFullMoonDays:F?Math.round((F.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:F?is(F.time,n):!1,moonFolkName:ss(F?.time??null,n,u),moonDistance:so(e,d,14),moonRise:Io(N.nextRise??N.previousRise,d,e,n),moonSet:Io(N.nextSet??N.previousSet,d,e,n)};return y.polar==="polar-day"&&i.push("polar-day"),y.polar==="polar-night"&&i.push("polar-night"),E.sunrise||i.push("no-sunrise-today"),E.sunset||i.push("no-sunset-today"),!E.civilDawn&&!E.civilDusk&&i.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:y,sun:{altitude:C,azimuth:k.azimuth,phase:oo(C),rising:v>C,haElevation:A,haAzimuth:R},moon:{position:f,phase:x,events:N,haPhaseName:O},sunTrack:X,events:E,eventSources:M,extras:it,daylightMinutes:J,issues:i,fatal:!1}}var zt=new Map;function cs(o){return[o.entity,o.moon_entity,o.latitude,o.longitude,o.twilight_level].join("|")}function us(o,t){if(!t)return"-";let e=t.states?.[o.entity],n=o.moon_entity?t.states?.[o.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function Wo(o,t,e){let n=Math.floor(e.getTime()/6e4),i=[cs(o),us(o,t),n,e.getTimezoneOffset()].join("#"),s=zt.get(i);if(s)return s;let r=ls(o,t,e);if(zt.size>24){let l=zt.keys().next().value;l!==void 0&&zt.delete(l)}return zt.set(i,r),r}function Ko(){zt.clear()}var Bo=se`
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
`,Vo=se`
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
`;function pn(o,t){o.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var kt=class extends at{setConfig(t){this._config={...t}}get _language(){return _t(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return Y(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,i]of Object.entries(t)){let s=D[n];i===s&&n in D&&delete e[n]}this._config=e,pn(this,e)}render(){if(!this._config)return S``;let t=this._config.card_height,e=t==="auto"||t===void 0||t===null,n=typeof t=="number"?t:D.card_height,i=this._config.latitude===void 0||this._config.latitude===null;return S`
      <div class="card-config">
        <div class="section">
          <div class="section-title">${this._t("editorAppearance")}</div>

          <div class="row">
            <label for="height">${this._t("editorCardHeight")}</label>
            <div class="control height-control">
              <input
                id="height"
                type="range"
                min="${H[0]}"
                max="${H[1]}"
                step="10"
                .value=${String(n)}
                ?disabled=${e}
                @input=${s=>this._update({card_height:Number(s.target.value)})}
              />
              <input
                id="height-number"
                type="number"
                aria-label=${this._t("editorCardHeight")}
                min="${H[0]}"
                max="${H[1]}"
                .value=${String(n)}
                ?disabled=${e}
                @change=${s=>{let r=ct(s.target.value);r!==null&&this._update({card_height:Math.round(w(r,H[0],H[1]))})}}
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
                  @change=${s=>this._update({card_height:s.target.checked?"auto":D.card_height})}
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
            <label for="cardstyle">${this._t("editorCardStyle")}</label>
            <div class="control">
              <select
                id="cardstyle"
                .value=${this._value("card_style","glass")}
                @change=${s=>this._update({card_style:s.target.value})}
              >
                <option value="glass">${this._t("editorCardStyleGlass")}</option>
                <option value="flat">${this._t("editorCardStyleFlat")}</option>
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
                .value=${this._value("entity",D.entity)}
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
                .value=${this._value("moon_entity",D.moon_entity)}
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
                  .checked=${i}
                  @change=${s=>{if(s.target.checked){let l={...this._config};delete l.latitude,delete l.longitude,this._config=l,pn(this,l)}else this._update({latitude:a(this.hass?.config?.latitude??0,4),longitude:a(this.hass?.config?.longitude??0,4)})}}
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
                ?disabled=${i}
                @change=${s=>{let r=ct(s.target.value);this._update({latitude:r===null?void 0:w(r,-90,90)})}}
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
                ?disabled=${i}
                @change=${s=>{let r=ct(s.target.value);this._update({longitude:r===null?void 0:w(r,-180,180)})}}
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
              ${this._t("editorCardHeight")}: ${H[0]}–${H[1]} px
              (Standard ${D.card_height} px, mindestens ${120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height;return typeof t=="number"&&(t<H[0]||t>H[1])?S`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:H[0],max:H[1]})}
      </span>`:_}_switch(t,e){let n=D[t];return S`
      <div class="row">
        <label for="${String(t)}">${this._t(e)}</label>
        <div class="control">
          <span class="switch">
            <input
              id="${String(t)}"
              type="checkbox"
              .checked=${this._value(t,n)}
              @change=${i=>this._update({[t]:i.target.checked})}
            />
            <span class="slider"></span>
          </span>
        </div>
      </div>
    `}_reset(){let t=be();this._config=t,pn(this,t)}};kt.styles=Vo,rt([Et({attribute:!1})],kt.prototype,"hass",2),rt([Dt()],kt.prototype,"_config",2),kt=rt([ce(uo)],kt);var mt=class extends at{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._hassSignature=""}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return be()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=_t(e.language,this.hass?.locale?.language),{config:i,errors:s,warnings:r}=Fo(e,n);if(s.length>0)throw new Error(s[0]);r.length>0&&console.warn(`[sun-moon-card] ${r.join(" ")}`),this._config=i,Ko()}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}updated(e){let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,Ao()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let i=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",i?.attributes?.next_rising??i?.last_updated??"",i?.attributes?.next_setting??"",i?.attributes?.next_dawn??"",i?.attributes?.next_dusk??"",i?.attributes?.elevation??"",i?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Uo(this._config,this._width||400):D.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return _t(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return S``;let n=this._width||400,i=this._resolvedHeight(),s=go(i,n,e),r=Wo(e,this.hass,new Date),l=this._language(),c=this._isDark(),u=c?Ye:Je;if(r.fatal)return S`
        <ha-card
          class=${vt({"smc-dark":c,"smc-light":!c})}
          style=${j({height:`${i}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${No(18)}</span>
              <span>${Y(l,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=ko(l,this._locale(),r.timeZone,vo(e.time_format,this.hass?.locale?.time_format,this._locale()));return S`
      <ha-card
        class=${vt({"smc-dark":c,"smc-light":!c})}
        style=${j({height:`${i}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${vt({root:!0,compact:s.compact})}
          style=${j({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,u,s):_}

          <div
            class=${vt({body:!0,columns:s.skyViewSide})}
            style=${j({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?S`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${j({height:`${s.chartHeight}px`})}
                  >
                    ${To({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,compact:s.compact,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):_}
                </div>`:_}
            ${s.skyViewSide?S`<div
                  class="sky-column"
                  style=${j({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${un({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:u,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:Pt(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth)}
                </div>`:_}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):_}
          ${s.showDetails?this._renderDetails(r,d,e,s,l,c,n):_}
          ${s.showFooter?this._renderFooter(r,d,e,s):_}
        </div>
      </ha-card>
    `}_renderHeader(e,n,i,s){let r=e.locationName||n.t("title"),l=e.extras,c=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),u=10.5,d=(f,x=!1)=>f.length*u*.58+20+(x?12:0),m=Math.max(0,c-10-108),p=n.t(this._phaseKey(e)),y=d(p,!0);m-=y;let k=_;if(e.daylightMinutes!==null){let f=$o(e.daylightMinutes),x=l.daylightDeltaMinutes===null?"":` ${wo(l.daylightDeltaMinutes,n.locale)}`,N=`${n.t("dayLength")} ${f}${x}`,$=d(N);$<=m&&(m-=$,k=S`<span class="meta-chip" title=${n.t("dayLength")}
          >${N}</span
        >`)}let C=_,v=d(l.timeZoneLongName);return v<=m&&(m-=v,C=S`<span class="meta-chip">${l.timeZoneLongName}</span>`),S`
      <div class="header" style=${j({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${xo(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${k}${C}
          <span class="phase-chip" title=${p}>
            <span
              class="phase-dot"
              style=${j({background:this._phaseColor(e,i)})}
            ></span>
            ${p}
          </span>
        </div>
      </div>
    `}_renderLegend(e,n){return S`
      <div class="legend" aria-hidden="true" style=${j({height:`${n}px`})}>
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
    `}_renderSkyReadout(e,n,i){let s=this._config,r=[],l=(c,u)=>S`<span
        >${n.t("azimuthReadout",{body:c,degrees:String(Math.round(u)),direction:Jt(u,n.language)})}</span
      >`;return s.show_sun&&r.push(l(n.t("sun"),e.sun.azimuth)),s.show_moon&&r.push(l(n.t("moon"),e.moon.position.azimuth)),r.length===0||i<150?_:S`<div class="sky-readout">${r}</div>`}_renderFooter(e,n,i,s){let r=i.twilight_level==="nautical"?"footerTwilightNautical":i.twilight_level==="astronomical"?"footerTwilightAstronomical":i.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil";return S`
      <div class="footer" style=${j({height:`${s.footerHeight}px`})}>
        <span class="part">${n.t(r)} · ${e.extras.timeZoneLongName}</span>
        <span class="part">${n.t("footerMethod")}</span>
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,i,s=.7){for(let r of e)if(r&&r.length*i*s<=n)return r;return null}_renderEvents(e,n,i){let{compact:s,padding:r}=i,l=i.chartWidth+(i.skyViewSide?i.skyViewWidth+10:0),c=this._config,u=[];if(c.show_twilight&&u.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:dn(s?14:16),missingText:n.t("noEvent")}),u.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:Eo(s?14:16),missingText:n.t("noSunrise")}),u.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:Do(s?14:16),missingText:n.t("noSunset")}),c.show_twilight&&u.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:hn(s?14:16),missingText:n.t("noEvent")}),c.twilight_level==="all"||c.show_astronomical_details){let v=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[f,x,N]of v)u.push({key:f,kind:N,label:n.t(f),shortLabel:n.t(f),time:x,icon:N==="dawn"?dn(s?13:15):hn(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=l<300?3:l<420?4:l<560?6:8,h=u.slice(0,Math.max(2,d)),m=6,y=Math.max(40,l-2*r-m*(h.length-1))/h.length-10,k=s?y<120?8.5:9:y<92?8.5:9.5,C=y<74?11:y<96?12:12.5;return S`
      <div
        class="events"
        style=${j({gap:`${m}px`,height:`${i.eventsHeight}px`})}
      >
        ${h.map(v=>{let f=this._fitLabel([v.label,v.shortLabel],y,k),x=v.time?lt(v.time,n):v.missingText,N=this._fitLabel([x,"\u2014"],y,C)??"\u2014";return S`
            <div
              class=${vt({"event-tile":!0,[v.kind]:!0,secondary:!!v.secondary,compact:s})}
              title=${`${v.label}: ${x}`}
            >
              <span class="event-head">
                <span class="event-icon">${v.icon}</span>
                <span
                  class=${vt({"event-time":!0,missing:!v.time})}
                  style=${j({fontSize:`${C}px`})}
                >
                  ${N}
                </span>
                ${s&&f?S`<span
                      class="event-label"
                      style=${j({fontSize:`${k}px`})}
                      >${f}</span
                    >`:_}
              </span>
              ${!s&&f?S`<span
                    class="event-label"
                    style=${j({fontSize:`${k}px`})}
                    >${f}</span
                  >`:_}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,i,s,r,l,c){let u=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&c>=430,m=(i.show_sun?1:0)+(i.show_moon?1:0)+(h?1:0),y=Math.max(60,c-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,k=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],y,10.5),C=Ht(e.sun.altitude,1,n.locale),v=`${Math.round(e.sun.azimuth)}\xB0 ${Jt(e.sun.azimuth,r)}`,f=u.sunBelowHorizon!==null?`${Ht(u.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:`${n.t("azimuth")} ${v}`,x=this._fitLabel([f,v],y,9.5),N=u.sunriseAzimuth!==null?`${Math.round(u.sunriseAzimuth)}\xB0 ${Jt(u.sunriseAzimuth,r)}`:null,$=u.sunsetAzimuth!==null?`${Math.round(u.sunsetAzimuth)}\xB0 ${Jt(u.sunsetAzimuth,r)}`:null,E=i.show_astronomical_details&&N&&$?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:N,set:$}),`${Math.round(u.sunriseAzimuth)}\xB0 / ${Math.round(u.sunsetAzimuth)}\xB0`],y,9.5):null,M=i.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?lt(e.events.solarNoon,n):"\u2014"} \xB7 ${Ht(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?lt(e.events.solarNoon,n):null],y,9.5):null,A=this._fitLabel([n.t(d),n.t("moon")],y,10.5),R=_o(e.moon.phase.illumination,n.locale),P=this._fitLabel([`${R} ${n.t("illumination")}`,R],y,13),O=null,X="";if(u.moonDistance){let{current:q,min:Z,max:W}=u.moonDistance,F=Math.max(1,W-Z),it=q<=Z+F*.2,U=q>=Z+F*.8,T=ve(q,n.locale),K=it?n.t("nearPerigee"):U?n.t("nearApogee"):"";X=`${n.t("moonDistance")}: ${T} \xB7 ${n.t("distanceRange",{min:ve(Z,n.locale),max:ve(W,n.locale)})}`,O=this._fitLabel(K?[`${T} \xB7 ${K}`,T]:[T],y,9.5)}let tt=null,J="";if(i.show_astronomical_details&&u.nextFullMoon){let q=u.nextFullMoonDays??0,Z=q<=0?n.t("dayToday"):n.t("inDays",{days:String(q)}),W=`${n.t("nextFullMoon")} ${Z}`,F=u.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",it=`${W}${F}${u.moonFolkName?` \xB7 ${u.moonFolkName}`:""}`;J=u.blueMoon?n.t("blueMoonHint"):u.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),tt=this._fitLabel([it,`${W}${F}`,W],y,9.5)}let ut=i.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],y,9.5):null;return S`
      <div
        class="details"
        style=${j({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${i.show_sun?S`
              <div class="detail-tile sun">
                <span class="detail-icon">${Co(20,l?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${k?S`<span class="detail-title">${k}</span>`:_}
                  <span class="detail-value">${C}</span>
                  ${x?S`<span class="detail-sub">${x}</span>`:_}
                  ${M?S`<span class="detail-sub">${M}</span>`:_}
                  ${E?S`<span class="detail-sub">${E}</span>`:_}
                </span>
              </div>
            `:_}
        ${i.show_moon?S`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${xe({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${A?S`<span class="detail-title">${A}</span>`:_}
                  ${P?S`<span class="detail-value">${P}</span>`:_}
                  ${O?S`<span class="detail-sub" title=${X}>${O}</span>`:_}
                  ${tt?S`<span class="detail-sub" title=${J}>${tt}</span>`:_}
                  ${ut?S`<span class="detail-sub">${ut}</span>`:_}
                </span>
              </div>
            `:_}
        ${h?S`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${un({width:56,height:56,sun:i.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:i.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:i.show_sun,showMoon:i.show_moon,palette:l?Ye:Je,format:n,animations:i.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:Pt(e.now,e.timeZone)})}
                </span>
              </div>
            `:_}
      </div>
    `}_moonTimesText(e,n,i){let s=e.extras.moonRise,r=e.extras.moonSet,l=s&&s.dayOffset!==0?` ${nn(s.dayOffset,n.t)}`:"",c=s?`\u2191 ${lt(s.time,n)}${l}`:"\u2191 \u2014";if(i)return c;let u=r&&r.dayOffset!==0?` ${nn(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${lt(r.time,n)}${u}`:"\u2193 \u2014";return`${c} \xB7 ${d}`}_ariaLabel(e,n){let i=[n.t("title")];return i.push(n.t(this._phaseKey(e))),e.events.sunrise&&i.push(`${n.t("sunrise")} ${lt(e.events.sunrise,n)}`),e.events.sunset&&i.push(`${n.t("sunset")} ${lt(e.events.sunset,n)}`),i.join(", ")}};mt.styles=Bo,rt([Et({attribute:!1})],mt.prototype,"hass",2),rt([Dt()],mt.prototype,"_config",2),rt([Dt()],mt.prototype,"_width",2),rt([Dt()],mt.prototype,"_tick",2),mt=rt([ce(co)],mt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${ye}`)||window.customCards.push({type:`custom:${ye}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{mt as SunMoonCard};
