var os=Object.defineProperty;var is=Object.getOwnPropertyDescriptor;var mt=(o,t,e,n)=>{for(var i=n>1?void 0:n?is(t,e):t,s=o.length-1,r;s>=0;s--)(r=o[s])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&os(t,e,i),i};var Me=globalThis,Se=Me.ShadowRoot&&(Me.ShadyCSS===void 0||Me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),ho=new WeakMap,ae=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Se&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=ho.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ho.set(e,t))}return t}toString(){return this.cssText}},mo=o=>new ae(typeof o=="string"?o:o+"",void 0,Qe),Ae=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new ae(e,o,Qe)},po=(o,t)=>{if(Se)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=Me.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Xe=Se?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return mo(e)})(o):o;var{is:ss,defineProperty:rs,getOwnPropertyDescriptor:as,getOwnPropertyNames:ls,getOwnPropertySymbols:cs,getPrototypeOf:us}=Object,Te=globalThis,go=Te.trustedTypes,ds=go?go.emptyScript:"",hs=Te.reactiveElementPolyfillSupport,le=(o,t)=>o,ce={toAttribute(o,t){switch(t){case Boolean:o=o?ds:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ee=(o,t)=>!ss(o,t),fo={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:Ee};Symbol.metadata??=Symbol("metadata"),Te.litPropertyMetadata??=new WeakMap;var $t=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=fo){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&rs(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:s}=as(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){let l=i?.call(this);s?.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fo}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;let t=us(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){let e=this.properties,n=[...ls(e),...cs(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Xe(i))}else t!==void 0&&e.push(Xe(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return po(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ce).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ce;this._$Em=i;let l=r.fromAttribute(e,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(t!==void 0){let r=this.constructor;if(i===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Ee)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};$t.elementStyles=[],$t.shadowRootOptions={mode:"open"},$t[le("elementProperties")]=new Map,$t[le("finalized")]=new Map,hs?.({ReactiveElement:$t}),(Te.reactiveElementVersions??=[]).push("2.1.2");var an=globalThis,yo=o=>o,De=an.trustedTypes,bo=De?De.createPolicy("lit-html",{createHTML:o=>o}):void 0,ko="$lit$",Mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Mo="?"+Mt,ms=`<${Mo}>`,Lt=document,de=()=>Lt.createComment(""),he=o=>o===null||typeof o!="object"&&typeof o!="function",ln=Array.isArray,ps=o=>ln(o)||typeof o?.[Symbol.iterator]=="function",tn=`[ 	
\f\r]`,ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vo=/-->/g,$o=/>/g,Ct=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xo=/'/g,wo=/"/g,So=/^(?:script|style|textarea|title)$/i,cn=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),D=cn(1),g=cn(2),ur=cn(3),lt=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),_o=new WeakMap,Nt=Lt.createTreeWalker(Lt,129);function Ao(o,t){if(!ln(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return bo!==void 0?bo.createHTML(t):t}var gs=(o,t)=>{let e=o.length-1,n=[],i,s=t===2?"<svg>":t===3?"<math>":"",r=ue;for(let l=0;l<e;l++){let c=o[l],u,d,h=-1,p=0;for(;p<c.length&&(r.lastIndex=p,d=r.exec(c),d!==null);)p=r.lastIndex,r===ue?d[1]==="!--"?r=vo:d[1]!==void 0?r=$o:d[2]!==void 0?(So.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=Ct):d[3]!==void 0&&(r=Ct):r===Ct?d[0]===">"?(r=i??ue,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?Ct:d[3]==='"'?wo:xo):r===wo||r===xo?r=Ct:r===vo||r===$o?r=ue:(r=Ct,i=void 0);let f=r===Ct&&o[l+1].startsWith("/>")?" ":"";s+=r===ue?c+ms:h>=0?(n.push(u),c.slice(0,h)+ko+c.slice(h)+Mt+f):c+Mt+(h===-2?l:f)}return[Ao(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},me=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,r=0,l=t.length-1,c=this.parts,[u,d]=gs(t,e);if(this.el=o.createElement(u,n),Nt.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Nt.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(ko)){let p=d[r++],f=i.getAttribute(h).split(Mt),b=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:b[2],strings:f,ctor:b[1]==="."?nn:b[1]==="?"?on:b[1]==="@"?sn:Kt}),i.removeAttribute(h)}else h.startsWith(Mt)&&(c.push({type:6,index:s}),i.removeAttribute(h));if(So.test(i.tagName)){let h=i.textContent.split(Mt),p=h.length-1;if(p>0){i.textContent=De?De.emptyScript:"";for(let f=0;f<p;f++)i.append(h[f],de()),Nt.nextNode(),c.push({type:2,index:++s});i.append(h[p],de())}}}else if(i.nodeType===8)if(i.data===Mo)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(Mt,h+1))!==-1;)c.push({type:7,index:s}),h+=Mt.length-1}s++}}static createElement(t,e){let n=Lt.createElement("template");return n.innerHTML=t,n}};function Bt(o,t,e=o,n){if(t===lt)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,s=he(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=Bt(o,i._$AS(o,t.values),i,n)),t}var en=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??Lt).importNode(e,!0);Nt.currentNode=i;let s=Nt.nextNode(),r=0,l=0,c=n[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new pe(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new rn(s,this,t)),this._$AV.push(u),c=n[++l]}r!==c?.index&&(s=Nt.nextNode(),r++)}return Nt.currentNode=Lt,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},pe=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Bt(this,t,e),he(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==lt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ps(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&he(this._$AH)?this._$AA.nextSibling.data=t:this.T(Lt.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=me.createElement(Ao(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new en(i,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=_o.get(t.strings);return e===void 0&&_o.set(t.strings,e=new me(t)),e}k(t){ln(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new o(this.O(de()),this.O(de()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=yo(t).nextSibling;yo(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Kt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(t,e=this,n,i){let s=this.strings,r=!1;if(s===void 0)t=Bt(this,t,e,0),r=!he(t)||t!==this._$AH&&t!==lt,r&&(this._$AH=t);else{let l=t,c,u;for(t=s[0],c=0;c<s.length-1;c++)u=Bt(this,l[n+c],e,c),u===lt&&(u=this._$AH[c]),r||=!he(u)||u!==this._$AH[c],u===A?t=A:t!==A&&(t+=(u??"")+s[c+1]),this._$AH[c]=u}r&&!i&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},nn=class extends Kt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}},on=class extends Kt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}},sn=class extends Kt{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=Bt(this,t,e,0)??A)===lt)return;let n=this._$AH,i=t===A&&n!==A||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==A&&(n===A||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}};var fs=an.litHtmlPolyfillSupport;fs?.(me,pe),(an.litHtmlVersions??=[]).push("3.3.3");var To=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let s=e?.renderBefore??null;n._$litPart$=i=new pe(t.insertBefore(de(),s),s,void 0,e??{})}return i._$AI(o),i};var un=globalThis,pt=class extends $t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=To(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return lt}};pt._$litElement$=!0,pt.finalized=!0,un.litElementHydrateSupport?.({LitElement:pt});var ys=un.litElementPolyfillSupport;ys?.({LitElement:pt});(un.litElementVersions??=[]).push("4.2.2");var Ce=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var bs={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:Ee},vs=(o=bs,t,e)=>{let{kind:n,metadata:i}=e,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(e.name,o),n==="accessor"){let{name:r}=e;return{set(l){let c=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,c,o,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,o,l),l}}}if(n==="setter"){let{name:r}=e;return function(l){let c=this[r];t.call(this,l),this.requestUpdate(r,c,o,!0,l)}}throw Error("Unsupported decorator location: "+n)};function Vt(o){return(t,e)=>typeof e=="object"?vs(o,t,e):((n,i,s)=>{let r=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),r?Object.getOwnPropertyDescriptor(i,s):void 0})(o,t,e)}function jt(o){return Vt({...o,state:!0,attribute:!1})}var Le={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=o=>(...t)=>({_$litDirective$:o,values:t}),qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Ht=He(class extends qt{constructor(o){if(super(o),o.type!==Le.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let e=o.element.classList;for(let n of this.st)n in t||(e.remove(n),this.st.delete(n));for(let n in t){let i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return lt}});var Eo="important",$s=" !"+Eo,Z=He(class extends qt{constructor(o){if(super(o),o.type!==Le.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let n=o[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let i=t[n];if(i!=null){this.ft.add(n);let s=typeof i=="string"&&i.endsWith($s);n.includes("-")||s?e.setProperty(n,s?i.slice(0,-11):i,s?Eo:""):e[n]=i}}return lt}});var Do=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Co=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],No=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],dn=385000.49;var H=Math.PI/180,ct=180/Math.PI,xs=1495978707e-1,Ho=6378.14,hn=-.833,At=-6,Pt=-12,Rt=-18,Po=120*1e3;function ge(o){return(typeof o=="number"?o:o.getTime())/864e5+24405875e-1}function Zt(o){return(o-2451545)/36525}function F(o){let t=o%360;return t<0?t+360:t}function ws(o){let t=Zt(o);return 23.439291-.0130042*t-164e-9*t*t+504e-9*t*t*t}function _s(o){let t=o-2451545,e=Zt(o),n=280.46061837+360.98564736629*t+387933e-9*e*e-e*e*e/3871e4;return F(n)}function mn(o){let t=Zt(o),e=F(280.46646+t*(36000.76983+t*3032e-7)),n=F(357.52911+t*(35999.05029-1537e-7*t)),i=Math.sin(n*H)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*H)*(.019993-101e-6*t)+Math.sin(3*n*H)*289e-6,s=e+i,r=F(125.04-1934.136*t),l=s-.00569-.00478*Math.sin(r*H),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(r*H),d=l*H,h=u*H,p=F(Math.atan2(Math.cos(h)*Math.sin(d),Math.cos(d))*ct),f=Math.asin(Math.sin(h)*Math.sin(d))*ct;return{ra:p,dec:f}}function ks(o){let t=Zt(o),e=F(280.46646+t*(36000.76983+t*3032e-7)),n=F(357.52911+t*(35999.05029-1537e-7*t)),i=Math.sin(n*H)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*n*H)*(.019993-101e-6*t)+Math.sin(3*n*H)*289e-6,s=F(125.04-1934.136*t);return F(e+i-.00569-.00478*Math.sin(s*H))}function Ms(o){let t=ge(o),e=Zt(t),n=F(357.52911+e*(35999.05029-1537e-7*e)),i=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(n*H)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*n*H)*(.019993-101e-6*e)+Math.sin(3*n*H)*289e-6,r=(n+s)*H;return 1.000001018*(1-i*i)/(1+i*Math.cos(r))*xs}function pn(o,t,e,n){let i=F(_s(n)+e),s=F(i-o.ra),r=t*H,l=o.dec*H,c=s*H,u=Math.asin(Math.sin(r)*Math.sin(l)+Math.cos(r)*Math.cos(l)*Math.cos(c))*ct,d=F(Math.atan2(Math.sin(c),Math.cos(c)*Math.sin(r)-Math.tan(l)*Math.cos(r))*ct+180);return{altitude:u,azimuth:d}}function gn(o,t){let e=ge(o);return pn(mn(e),t.latitude,t.longitude,e).altitude}function Pe(o,t){let e=ge(o);return pn(mn(e),t.latitude,t.longitude,e)}function Ss(o){let t=o;return{D:F(297.8501921+445267.1114034*t-.0018819*t*t+t*t*t/545868-t*t*t*t/113065e3),M:F(357.5291092+35999.0502909*t-1536e-7*t*t+t*t*t/2449e4),Mp:F(134.9633964+477198.8675055*t+.0087414*t*t+t*t*t/69699-t*t*t*t/14712e3),F:F(93.272095+483202.0175233*t-.0036539*t*t-t*t*t/3526e3+t*t*t*t/86331e4)}}function Ro(o){let t=Zt(o),e=F(218.3164477+481267.88123421*t-.0015786*t*t+t*t*t/538841-t*t*t*t/65194e3),n=Ss(t),i=e;for(let l of Do){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;i+=l[4]*Math.sin(c*H)}let s=0;for(let l of Co){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;s+=l[4]*Math.sin(c*H)}let r=dn;for(let l of No){let c=l[0]*n.D+l[1]*n.M+l[2]*n.Mp+l[3]*n.F;r+=l[4]*Math.cos(c*H)}return{longitude:F(i),latitude:s,distanceKm:r}}function zo(o,t,e){let n=ws(e)*H,i=o*H,s=t*H,r=F(Math.atan2(Math.sin(i)*Math.cos(n)-Math.tan(s)*Math.sin(n),Math.cos(i))*ct),l=Math.asin(Math.sin(s)*Math.cos(n)+Math.cos(s)*Math.sin(n)*Math.sin(i))*ct;return{ra:r,dec:l}}function St(o,t){let e=ge(o),n=Ro(e),i=zo(n.longitude,n.latitude,e),s=pn(i,t.latitude,t.longitude,e),r=Math.asin(Ho/n.distanceKm)*ct,l=s.altitude-r*Math.cos(s.altitude*H);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:n.distanceKm,parallax:r,apparentAltitude:l,equatorial:i,geocentric:n}}function As(o){return .7275*(Math.asin(Ho/o)*ct)-.5667}var Ts=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],Es=29.530588853;function Re(o){let t=ge(o),e=Ro(t),n=zo(e.longitude,e.latitude,t),i=mn(t),s=ks(t),r=Ms(o),l=e.distanceKm,c=e.latitude*H,u=Math.acos(Math.min(1,Math.max(-1,Math.cos(c)*Math.cos((e.longitude-s)*H)))),d=Math.atan2(r*Math.sin(u),l-r*Math.cos(u)),h=F(d*ct),p=(1+Math.cos(d))/2,f=(i.ra-n.ra)*H,b=i.dec*H,E=n.dec*H,_=F(Math.atan2(Math.cos(b)*Math.sin(f),Math.sin(b)*Math.cos(E)-Math.cos(b)*Math.sin(E)*Math.cos(f))*ct),k=F(e.longitude-s)/360,y=Math.min(7,Math.floor(k*8+.5)%8),$=k*29.530588853;return{illumination:p,phaseAngle:h,elongation:u*ct,phaseIndex:y,phaseKey:Ts[y],brightLimbAngle:_,moonAgeDays:$,waxing:k<.5,distanceKm:l}}function fn(o,t,e,n,i){let s=[];if(!(t>o))return s;let r=Math.max(2,Math.ceil((t-o)/e)),l=(t-o)/r,c=o,u=n(o)-i;for(let d=1;d<=r;d++){let h=o+d*l,p=n(h)-i;if(u===0)s.push({time:c,rising:p>0});else if(u<0&&p>=0||u>0&&p<=0){let f=c,b=h,E=u;for(let _=0;_<50&&b-f>1;_++){let k=(f+b)/2,y=n(k)-i;y<0&&E<0||y>0&&E>0?(f=k,E=y):b=k}s.push({time:(f+b)/2,rising:p>u})}c=h,u=p}return s}function Lo(o,t,e,n){let i=o.find(s=>s.rising===t&&s.time>=e&&s.time<n);return i?new Date(i.time):null}function yn(o,t,e,n=4){let i=t.getTime()-27e5,s=e.getTime()+2700*1e3,r=t.getTime(),l=e.getTime(),c=S=>gn(S,o),u=[],d=Math.max(3e4,Math.round(n*60*1e3));for(let S=r;S<l;S+=d)u.push({time:S,altitude:c(S)});u.push({time:l,altitude:c(l)});let h=-1/0,p=1/0;for(let S of u)S.altitude>h&&(h=S.altitude),S.altitude<p&&(p=S.altitude);let f=[["sunrise","sunset",hn],["civilDawn","civilDusk",At],["nauticalDawn","nauticalDusk",Pt],["astronomicalDawn","astronomicalDusk",Rt]],b={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[S,C,U]of f){let W=fn(i,s,Po,c,U);b[S]=Lo(W,!0,r,l),b[C]=Lo(W,!1,r,l)}let E=r,_=-1/0,k=120*1e3;for(let S=r;S<=l;S+=k){let C=c(S);C>_&&(_=C,E=S)}let y=Math.max(r,E-k),$=Math.min(l,E+k);for(let S=0;S<40&&$-y>1e3;S++){let C=y+($-y)/3,U=$-($-y)/3;c(C)<c(U)?y=C:$=U}b.solarNoon=new Date((y+$)/2);let M="none";return p>hn?M="polar-day":h<hn&&(M="polar-night"),{dayStart:t,dayEnd:e,samples:u,maxAltitude:h,minAltitude:p,events:b,polar:M}}function Ds(o,t,e,n=10){let i=t.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(n*60*1e3)),l=[];for(let d=i;d<s;d+=r)l.push({time:d,altitude:St(d,o).apparentAltitude});l.push({time:s,altitude:St(s,o).apparentAltitude});let c=-1/0,u=1/0;for(let d of l)d.altitude>c&&(c=d.altitude),d.altitude<u&&(u=d.altitude);return{samples:l,maxAltitude:c,minAltitude:u}}function Io(o,t,e,n,i=10){let s=t.getTime(),r=e.getTime(),l=c=>{if(!c)return null;let u=c.getTime();return u>=s&&u<r?u:null};return{profile:Ds(o,t,e,i),rise:l(n.previousRise)??l(n.nextRise),set:l(n.previousSet)??l(n.nextSet)}}function Oo(o,t){let e=o.getTime(),n=e-1800*60*1e3,i=e+1800*60*1e3,r=fn(n,i,Po,f=>{let b=St(f,t);return b.altitude-As(b.distanceKm)},0),l=r.filter(f=>f.rising),c=r.filter(f=>!f.rising),u=l.find(f=>f.time>e)??null,d=[...l].reverse().find(f=>f.time<=e)??null,h=c.find(f=>f.time>e)??null,p=[...c].reverse().find(f=>f.time<=e)??null;return{previousRise:d?new Date(d.time):null,previousSet:p?new Date(p.time):null,nextRise:u?new Date(u.time):null,nextSet:h?new Date(h.time):null}}function Fo(o){return o>0?"day":o>At?"civil":o>Pt?"nautical":o>Rt?"astronomical":"night"}function Cs(o){return(((Re(o).moonAgeDays/Es-.5)%1+1)%1+.5)%1-.5}function bn(o,t){let e=typeof o=="number"?o:o.getTime(),n=typeof t=="number"?t:t.getTime();return n>e?fn(e,n,360*60*1e3,Cs,0).filter(i=>i.rising).map(i=>new Date(i.time)):[]}function Uo(o,t=32){let e=typeof o=="number"?o:o.getTime(),i=bn(e,e+t*24*60*60*1e3)[0];if(!i)return null;let s=Re(i).illumination;return s<.98?null:{time:i,illumination:s}}function Go(o,t,e=14){let n=typeof o=="number"?o:o.getTime(),i=360*60*1e3,s=n-e*24*60*60*1e3,r=n+e*24*60*60*1e3,l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,u=s,d=s;for(let h=s;h<=r;h+=i){let p=St(h,t).distanceKm;p<l&&(l=p,u=h),p>c&&(c=p,d=h)}return{current:St(n,t).distanceKm,min:l,minTime:new Date(u),max:c,maxTime:new Date(d),mean:dn}}function ze(o,t,e="sun"){return(e==="sun"?Pe(o,t):St(o,t)).azimuth}function v(o,t,e){return Number.isNaN(o)?t:Math.min(e,Math.max(t,o))}function vn(o,t,e){return o+(t-o)*e}function a(o,t=0){let e=10**t;return Math.round(o*e)/e}function Wo(o){let t=o.trim().replace(/^#/,""),e=t.length===3?t.split("").map(i=>i+i).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]}function Ns(o){return`#${o.map(t=>Math.round(v(t,0,255)).toString(16).padStart(2,"0")).join("")}`}function $n(o,t,e){let n=Wo(o),i=Wo(t);if(!n||!i)return t;let s=v(e,0,1);return Ns([vn(n[0],i[0],s),vn(n[1],i[1],s),vn(n[2],i[2],s)])}function xn(o){return typeof o=="number"&&Number.isFinite(o)}function gt(o){if(typeof o=="number"&&Number.isFinite(o))return o;if(typeof o=="string"&&o.trim()!==""){let t=Number(o.replace(",","."));if(Number.isFinite(t))return t}return null}function Bo(o){return o.length===0?"":o.map((t,e)=>`${e===0?"M":"L"}${a(t.x,2)} ${a(t.y,2)}`).join(" ")}function Ie(o,t=.5){if(o.length<3)return Bo(o);let e=[`M${a(o[0].x,2)} ${a(o[0].y,2)}`];for(let n=0;n<o.length-1;n++){let i=o[n-1]??o[n],s=o[n],r=o[n+1],l=o[n+2]??r,c=s.x+(r.x-i.x)/6*t*2,u=s.y+(r.y-i.y)/6*t*2,d=r.x-(l.x-s.x)/6*t*2,h=r.y-(l.y-s.y)/6*t*2;e.push(`C${a(c,2)} ${a(u,2)} ${a(d,2)} ${a(h,2)} ${a(r.x,2)} ${a(r.y,2)}`)}return e.join(" ")}function Oe(o,t,e=!1){if(o.length===0)return"";let n=e?Ie(o):Bo(o),i=o[0],s=o[o.length-1];return`${n} L${a(s.x,2)} ${a(t,2)} L${a(i.x,2)} ${a(t,2)} Z`}function xt(o,t,e){let n=e*Math.PI/180;return{x:o.x-t*Math.sin(n),y:o.y-t*Math.cos(n)}}function Ko(o,t,e){let n=v(e,0,1);if(n<=5e-4)return"";if(n>=.9995)return`M${a(o.x-t,2)} ${a(o.y,2)} a${a(t,2)} ${a(t,2)} 0 1 1 ${a(t*2,2)} 0 a${a(t,2)} ${a(t,2)} 0 1 1 ${a(-t*2,2)} 0 Z`;let i=t*(1-2*n),s=1,r=i>0?0:1,l={x:o.x-t,y:o.y},c={x:o.x+t,y:o.y};return`M${a(l.x,2)} ${a(l.y,2)} A${a(t,2)} ${a(t,2)} 0 0 ${s} ${a(c.x,2)} ${a(c.y,2)} A${a(t,2)} ${a(Math.abs(i),4)} 0 0 ${r} ${a(l.x,2)} ${a(l.y,2)} Z`}function Vo(o=new Date){let t=o.getTime();return t+(6e4-t%6e4)+250}var Ls=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Yt(o){let{size:t,illumination:e,brightLimbAngle:n,litColor:i="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:l="",uid:c}=o,u={x:t/2,y:t/2},d=Math.max(1,t/2-.5),h=Ko(u,d,e),p=r&&t>=26,f=a(-n,2);return g`
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
      ${h?g`<g transform="rotate(${f} ${a(u.x,2)} ${a(u.y,2)})">
              <path d="${h}" fill="${i}" />
              ${p?g`<g clip-path="url(#${c}-clip)" opacity="0.16">
                      <clipPath id="${c}-clip">
                        <path d="${h}" />
                      </clipPath>
                      ${Ls.map(b=>{let E={x:u.x+b.x*d,y:u.y+b.y*d};return g`<circle
                          cx="${a(E.x,2)}" cy="${a(E.y,2)}"
                          r="${a(b.r*d,2)}"
                          fill="#5a6488" />`})}
                    </g>`:g``}
            </g>`:g``}
      <circle
        cx="${a(u.x,2)}" cy="${a(u.y,2)}" r="${a(d,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function wn(o,t,e,n){let i=xt(o,t,e),s=e*Math.PI/180,r=-Math.sin(s),l=-Math.cos(s),c=v(t*.12,4,9),u=v(t*.07,2.5,5),d={x:i.x+r*c,y:i.y+l*c},h={x:i.x-l*u,y:i.y+r*u},p={x:i.x+l*u,y:i.y-r*u};return g`
    <polygon
      points="${a(d.x,2)},${a(d.y,2)} ${a(h.x,2)},${a(h.y,2)} ${a(p.x,2)},${a(p.y,2)}"
      fill="${n}"
      opacity="0.55"
    />
  `}var Ue="sun-moon-card",Yo="sun-moon-card",Jo="sun-moon-card-editor";var R=[120,800];var N={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,card_style:"glass",theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null},Qo=1200*1e3,An={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},Tn={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},Xo=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],En=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],zt={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat"]},ti=700,Hs=260,jo=10,Sn=56,Ps=84,Rs=96,_n=74,zs=Sn+8,Is=12,Os=10,et=4,Fe=4,qo=30,Zo=44,Fs=26,Us=72,Dn=96,kn=20,Mn=18;function ei(o,t,e){let n=e.compact_mode,i=n?Os:Is,s=Math.max(40,o-2*i),r=0,l=e.show_footer&&!n?kn+et:0,c=qo+et+Zo+et+l+(Mn+Fe)+_n,u=e.show_header&&!n&&s>=c,d=u?qo:0;s-=d,u&&(s-=et,r+=et);let h=n?Fs:Zo,p=e.show_events&&s-(h+et)-l>=Ps,f=p?h:0;s-=f,p&&(s-=et,r+=et);let b=e.show_astronomical_details?Dn:Us,E=!n&&(e.show_sun||e.show_moon)&&s-(b+et)-l>=Rs,_=E?b:0;s-=_,E&&(s-=et,r+=et);let k=e.show_footer&&!n&&p&&s-(kn+et)>=zs,y=k?kn:0;s-=y,k&&(s-=et,r+=et);let $=Math.max(Sn,s),M=e.show_day_chart&&!n&&p&&$-Mn-Fe>=_n,S=M?Mn:0;M&&(r+=Fe);let C=Math.max(Sn,$-S-(M?Fe:0)),U=e.show_sky_view&&!n&&(e.show_sun||e.show_moon),W=U&&t>=ti&&C>=_n,X=Math.max(80,t-2*i),x=W?Math.round(Math.min(Hs,(X-jo)/3)):0,T=Math.max(120,W?X-jo-x:X);return{padding:i,showHeader:u,showEvents:p,showDetails:E,showFooter:k,showLegend:M,skyViewSide:W,skyViewInline:!W&&U&&E,skyViewWidth:x,chartWidth:T,gaps:r,headerHeight:d,eventsHeight:f,detailsHeight:_,footerHeight:y,legendHeight:S,chartHeight:C,compact:n}}function ni(o){return o>=ti?360:320}function Ge(){return{type:`custom:${Ue}`,card_height:340}}var Cn={de:{title:"Sonne & Mond",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorAppearance:"Darstellung",editorSections:"Bereiche",editorBehaviour:"Verhalten",editorLocation:"Standort",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorAppearance:"Appearance",editorSections:"Sections",editorBehaviour:"Behaviour",editorLocation:"Location",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function Q(o,t,e){let i=(Cn[o]??Cn.en)[t]??Cn.en[t]??String(t);if(e)for(let[s,r]of Object.entries(e))i=i.split(`{${s}}`).join(String(r));return i}function It(o,t){return((o&&o!=="auto"?o:t)??"").toLowerCase().startsWith("de")?"de":"en"}function si(o,t,e){let n=o;if(n==="auto"&&t&&(t==="12"||t==="am_pm"?n="12":t==="24"&&(n="24")),n==="12")return!0;if(n==="24")return!1;try{let i=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return i.hour12??i.hourCycle==="h12"}catch{return!1}}var oi=new Map;function Nn(o,t,e){let n=`${t}|${o}`,i=oi.get(n);if(i)return i;let s=o;try{let l=new Intl.DateTimeFormat(t,{timeZone:o,timeZoneName:"long"}).formatToParts(e).find(c=>c.type==="timeZoneName");l&&l.value.trim()!==""&&(s=l.value)}catch{}return oi.set(n,s),s}var ii=new Map;function Gs(o,t,e){let n=`${o}|${t}|${e}`,i=ii.get(n);if(!i){try{i=new Intl.DateTimeFormat(o,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}catch{i=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:t})}ii.set(n,i)}return i}function ut(o,t){return Gs(t.locale,t.timeZone,t.hour12).format(o)}function ri(o,t){try{return new Intl.DateTimeFormat(t.locale,{weekday:"short",day:"numeric",month:"short",timeZone:t.timeZone}).format(o)}catch{return o.toISOString().slice(0,10)}}function Ln(o,t=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:t,maximumFractionDigits:t}).format(o)}catch{return o.toFixed(t)}}function it(o,t=1,e="de-DE"){return`${Ln(o,t,e)}\xB0`}function We(o,t="de-DE"){return`${Ln(Math.round(o),0,t)} km`}function ai(o,t="de-DE"){let e=o<0?"\u2212":"+",n=Math.round(Math.abs(o)),i=Math.floor(n/60),s=n%60,r=t.startsWith("de")?":":"h ",l=t.startsWith("de")?"":"m";return`${e}${i}${r}${String(s).padStart(2,"0")}${l}`}function li(o){let t=Math.max(0,Math.round(o)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function Hn(o,t){return t(o===0?"dayToday":o===1?"dayTomorrow":"dayFollowing")}function ci(o,t="de-DE"){return`${Ln(o*100,0,t)} %`}function Ot(o,t){let e=(o%360+360)%360,n=En[0],i=1/0;for(let r of En){let l=Math.abs((e-r.deg+540)%360-180);l<i&&(i=l,n=r)}let s=`dir${n.key}`;return Q(t,s)}function ui(o,t,e,n){return{language:o,locale:t,timeZone:e,hour12:n,t:(i,s)=>Q(o,i,s)}}function di(o,t){if(o.length<=t)return o;let e=o.length/t,n=[];for(let s=0;s<t;s++)n.push(o[Math.floor(s*e)]);let i=o[o.length-1];return n[n.length-1]!==i&&n.push(i),n}function Ws(o,t,e,n,i){if(o.length<2)return null;let s=t.sunrise?.getTime(),r=t.sunset?.getTime(),l,c;if(s!==void 0&&r!==void 0&&r>s)l=n(s),c=n(r);else if(e==="polar-day")l=o[0].x,c=o[o.length-1].x;else return null;let u=o.filter(d=>d.x>=l-.5&&d.x<=c+.5);return u.length<2?null:{path:Oe(u,i,!0),cx:(l+c)/2,cy:i,r:Math.max(6,(c-l)/2)}}function Bs(o,t){let e=t?Math.max(o.maxAltitude,t.maxAltitude):o.maxAltitude,n=t?Math.min(o.minAltitude,t.minAltitude):o.minAltitude,i=Math.min(n,-18),s=Math.max(3,(e-i)*.1),r=v(e+s,-18,90.5);return[v(Math.max(-28,n-2),-90,r-6),r]}function Pn(o,t,e=2.2){let n=[0,At,Pt,Rt],i=[t.day,t.civil,t.nautical,t.astronomical,t.night];if(o>e/2){let s=v(1-o/12,0,1)*.5;return $n(t.day,t.glow,s)}for(let s=0;s<n.length;s++){let r=n[s]+e/2,l=n[s]-e/2;if(o>=r)return i[s];if(o>l){let c=(r-o)/e;return $n(i[s],i[s+1],c*c*(3-2*c))}}return i[i.length-1]}function Ks(o,t,e,n=24){let i=[];for(let s=0;s<=n;s++){let r=s/n,l=t+e*(1-r);i.push({offset:r,color:Pn(l,o)})}return i}function Vs(o,t,e,n,i,s){let r=o.samples;if(r.length<2)return[];let l=[],c=(d,h)=>{d&&!Number.isNaN(d.getTime())&&l.push({time:d.getTime(),color:h})};c(t.astronomicalDawn,e.astronomical),c(t.nauticalDawn,e.nautical),c(t.civilDawn,e.civil),c(t.sunrise,e.glow),c(t.solarNoon,e.day),c(t.sunset,e.glow),c(t.civilDusk,e.civil),c(t.nauticalDusk,e.nautical),c(t.astronomicalDusk,e.astronomical);let u=[{offset:0,color:Pn(r[0].altitude,e)},...l.map(d=>({offset:v((n(d.time)-i)/s,0,1),color:d.color})),{offset:1,color:Pn(r[r.length-1].altitude,e)}];return u.sort((d,h)=>d.offset-h.offset),u}function hi(o){let{profile:t,events:e,now:n,width:i,height:s,palette:r,format:l,showSun:c,showMoon:u,moon:d,moonPath:h,showTwilight:p,twilightLevel:f,animations:b,cardStyle:E,uid:_,showAstronomicalLayers:k,currentAltitude:y}=o,$=Math.max(120,i),M=Math.max(56,s),S=4,C=4,U=6,W=M>=112,X=W?v(a(M*.13,1),13,20):0,x=S,T=Math.max(10,$-S-C),P=U,I=Math.max(10,M-U-X),O=P+I,[Y,V]=Bs(t,h?.profile??null),tt=Math.max(1,V-Y),nt=t.dayStart.getTime(),Tt=t.dayEnd.getTime(),J=Math.max(1,Tt-nt),j=m=>x+(m-nt)/J*T,w=m=>O-(v(m,-95,95)-Y)/tt*I,B=w(0),dt=v(Math.round(T/1.6),60,361),ht=di(t.samples,dt).map(m=>({x:j(m.time),y:w(m.altitude)})),ye=Ks(r,Y,tt),K=Vs(t,e,r,j,x,T),rt=`${_}-area`,ft=`${_}-line`,_t=`${_}-clip`,Ut=`${_}-glow`,be=`${_}-sky`,Et=`${_}-soft`,te=`${_}-soft-fade`,Bn=`${_}-foot`,Kn=`${_}-foot-fade`,Vn=`${_}-side`,jn=`${_}-side-fade`,Ci=Oe(ht,O+1,!0),Ni=Ie(ht),qn=h?di(h.profile.samples,v(Math.round(T/2),40,240)).map(m=>({x:j(m.time),y:w(m.altitude)})):null,Be=qn?Ie(qn):null,Ke="var(--smc-moon-line, #cbd5e1)",Li=v(a(M*.013,2),1.1,1.9),Hi=Oe(ht,P-1,!0),ee=E==="flat"?.6:1,Pi=a(.15*ee,3),yt=P-1,Ve=O+1,kt=Math.max(1,Ve-yt),Ri=v(I*.14,6,18),zi=v(I*.08,4,12),Ii=v(T*.02,6,14),Zn=v(a(I*.06,1),4,10),Oi=a(v(Ri/kt,0,.45),4),Yn=a(1-v(zi/kt,0,.45),4),Gt=x-1,ve=x+T+1,Jn=a(v(Ii/Math.max(1,ve-Gt),0,.4),4),Fi=Math.max(16,T*.16),Ui=v(I*.45,9,46),$e=[];I>=34&&(e.sunrise&&$e.push({id:`${_}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&$e.push({id:`${_}-glow-set`,time:e.sunset,color:r.glow}));let Wt=Ws(ht,e,t.polar,j,B),Qn=`${_}-dome`,q=l.t,ne=[],oe=m=>{m.time&&!Number.isNaN(m.time.getTime())&&ne.push({secondary:!1,...m})};if(e.sunrise&&oe({key:"sunrise",time:e.sunrise,label:q("sunrise"),shortLabel:q("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&oe({key:"sunset",time:e.sunset,label:q("sunset"),shortLabel:q("sunsetShort"),kind:"sunset",altitude:0}),p&&(e.civilDawn&&oe({key:"civilDawn",time:e.civilDawn,label:q("civilDawn"),shortLabel:q("civilDawnShort"),kind:"dawn",altitude:At}),e.civilDusk&&oe({key:"civilDusk",time:e.civilDusk,label:q("civilDusk"),shortLabel:q("civilDuskShort"),kind:"dusk",altitude:At}),f==="all"||k)){let m=[["nauticalDawn","dawn","nauticalDawn",Pt],["nauticalDusk","dusk","nauticalDusk",Pt],["astronomicalDawn","dawn","astronomicalDawn",Rt],["astronomicalDusk","dusk","astronomicalDusk",Rt]];for(let[L,z,G,ot]of m){let re=e[L];re&&oe({key:L,time:re,label:q(G),shortLabel:q(G),kind:z,altitude:ot,secondary:!0})}}ne.sort((m,L)=>m.time.getTime()-L.time.getTime());let xe=v(a(M*.062,1),7.5,10.5),je=v(a(xe+5,1),11,X||15),Gi=ne.filter(m=>!m.secondary),Wi=ne.filter(m=>m.secondary),Bi=T<240?3:T<340?4:6,Xn=[...Gi,...Wi].slice(0,Math.max(2,Bi)).sort((m,L)=>m.time.getTime()-L.time.getTime()),Ki=Xn.length>3||T<300,qe=[],Ze=-1/0;for(let m of Xn){let L=Ki?m.shortLabel:m.label,z=L.length*xe*.56+8,G=j(m.time.getTime());G=v(G,x+z/2,x+T-z/2),G-z/2<Ze+3&&(G=Ze+3+z/2),!(G+z/2>x+T+.5)&&(Ze=G+z/2,qe.push({x:G,width:z,text:L,secondary:m.secondary}))}let bt=v(j(n.getTime()),x,x+T),Vi=r.day,Dt=v(a(M*.045,1),3.5,6),to=v(a(Dt*.22,2),.8,1.4),vt=v(a(Dt*1.1,1),3.5,7),eo=(m,L)=>I<=L*2?P+I/2:v(w(m),P+L,O-L),no=eo(y,Dt),at=u&&d?{altitude:d.altitude,y:eo(d.altitude,vt),clamped:d.altitude<Y||d.altitude>V}:null,ji=at?Math.abs(at.y-no):Number.POSITIVE_INFINITY,Ye=Dt+vt+2,ie=at?ji>=Dt+vt+1?bt:bt+Ye+vt<=x+T?bt+Ye:Math.max(x+vt,bt-Ye):null,qi=b?"smc-pulse":"",Zi=b?`url(#${Ut})`:"",Je=[{altitude:0,label:q("horizon"),key:"horizon"}];k||f==="all"?Je.push({altitude:At,label:`${q("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Pt,label:`${q("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Rt,label:`${q("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):p&&Je.push({altitude:At,label:`${q("refCivil")} (\u22126\xB0)`,key:"civil"});let Yi=I>=86&&T>=250,Ji=Je.filter(m=>m.altitude>Y+.5&&m.altitude<V-.5),Qi=v(a(M*.055,1),7.5,9.5),se=e.solarNoon,oo=!!se&&t.maxAltitude>0&&I>=104&&T>=220&&k,io=oo?`${q("zenith")} ${ut(se,l)} \xB7 ${it(t.maxAltitude,1,l.locale)}`:"",we=v(a(M*.055,1),7.5,9.5),_e=io.length*we*.56+10,so=se?v(j(se.getTime()),x+_e/2,x+T-_e/2):0,ro=se?w(t.maxAltitude):0,ke=we+5,ao=v(ro-ke-4,P,Math.max(P,ro+10)),lo=T<220?4:T<420?6:8,co=[];for(let m=1;m<lo;m++)co.push(x+T*m/lo);return g`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${a($,1)} ${a(M,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${q("title")}"
    >
      <defs>
        <linearGradient id="${rt}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(P,1)}" x2="0" y2="${a(O,1)}">
          ${ye.map(m=>g`<stop offset="${a(m.offset*100,3)}%" stop-color="${m.color}" />`)}
        </linearGradient>
        <linearGradient id="${ft}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(P,1)}" x2="0" y2="${a(O,1)}">
          ${ye.map(m=>g`<stop offset="${a(m.offset*100,3)}%" stop-color="${m.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${K.length>=2?g`<linearGradient id="${be}" gradientUnits="userSpaceOnUse"
                x1="${a(x,1)}" y1="0" x2="${a(x+T,1)}" y2="0">
                ${K.map(m=>g`<stop offset="${a(m.offset*100,3)}%" stop-color="${m.color}" />`)}
              </linearGradient>`:g``}
        ${$e.map(m=>g`<radialGradient id="${m.id}">
              <stop offset="0%" stop-color="${m.color}" stop-opacity="${a(.5*ee,3)}" />
              <stop offset="45%" stop-color="${m.color}" stop-opacity="${a(.2*ee,3)}" />
              <stop offset="100%" stop-color="${m.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${Wt?g`<radialGradient id="${Qn}" gradientUnits="userSpaceOnUse"
                cx="${a(Wt.cx,1)}" cy="${a(Wt.cy,1)}" r="${a(Wt.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${a(.3*ee,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${a(.18*ee,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:g``}
        <linearGradient id="${te}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(yt,1)}" x2="0" y2="${a(Ve,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Oi}" stop-color="#ffffff" />
          <stop offset="${Yn}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Et}" maskUnits="userSpaceOnUse"
          x="${a(x-2,1)}" y="${a(yt,1)}"
          width="${a(T+4,1)}" height="${a(kt,1)}">
          <rect
            x="${a(x-2,1)}" y="${a(yt,1)}"
            width="${a(T+4,1)}" height="${a(kt,1)}"
            fill="url(#${te})" />
        </mask>
        <linearGradient id="${Kn}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${a(yt,1)}" x2="0" y2="${a(Ve,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${Yn}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Bn}" maskUnits="userSpaceOnUse"
          x="${a(x-2,1)}" y="${a(yt,1)}"
          width="${a(T+4,1)}" height="${a(kt,1)}">
          <rect
            x="${a(x-2,1)}" y="${a(yt,1)}"
            width="${a(T+4,1)}" height="${a(kt,1)}"
            fill="url(#${Kn})" />
        </mask>
        <linearGradient id="${jn}" gradientUnits="userSpaceOnUse"
          x1="${a(Gt,1)}" y1="0" x2="${a(ve,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Jn}" stop-color="#ffffff" />
          <stop offset="${a(1-Jn,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Vn}" maskUnits="userSpaceOnUse"
          x="${a(Gt,1)}" y="${a(yt,1)}"
          width="${a(ve-Gt,1)}" height="${a(kt,1)}">
          <rect
            x="${a(Gt,1)}" y="${a(yt,1)}"
            width="${a(ve-Gt,1)}" height="${a(kt,1)}"
            fill="url(#${jn})" />
        </mask>
        <clipPath id="${_t}">
          <rect x="${a(x-1,1)}" y="${a(P-2,1)}"
            width="${a(T+2,1)}" height="${a(I+4,1)}"
            rx="${Zn}" ry="${Zn}" />
        </clipPath>
        ${b?g`<filter id="${Ut}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${a(Dt*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:g``}
      </defs>

      <g clip-path="url(#${_t})">
        ${co.map(m=>g`<line x1="${a(m,1)}" y1="${a(P,1)}" x2="${a(m,1)}" y2="${a(O,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${Vn})">
        <path d="${Ci}" fill="url(#${rt})" opacity="0.9" mask="url(#${Bn})" />
        <g mask="url(#${Et})">
          ${K.length>=2?g`<path d="${Hi}" fill="url(#${be})" opacity="${Pi}" />`:g``}
          ${$e.map(m=>{let L=v(j(m.time.getTime()),x,x+T),z=v(B,P,O);return g`<ellipse
                cx="${a(L,1)}" cy="${a(z,1)}"
                rx="${a(Fi,1)}" ry="${a(Ui,1)}"
                fill="url(#${m.id})" />`})}
          ${Wt?g`<path d="${Wt.path}" fill="url(#${Qn})" opacity="0.95" />`:g``}
        </g>
        </g>
        ${Be?g`<path
                class="moon-curve"
                data-body="moon"
                d="${Be}"
                fill="none"
                stroke="${Ke}"
                stroke-width="${Li}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.9"
              >
                <title>${l.t("moonCurve")}</title>
              </path>`:g``}
        ${h&&Be?g`<g class="moon-events">
                ${[[h.rise,"moonrise"],[h.set,"moonset"]].filter(m=>m[0]!==null).map(([m,L])=>{let z=v(j(m),x,x+T),G=v(w(0),P,O),ot=v(a(M*.05,1),4,8);return g`<g>
                      <title>${l.t(L)} ${ut(new Date(m),l)}</title>
                      <line
                        x1="${a(z,1)}"
                        y1="${a(G-ot,1)}"
                        x2="${a(z,1)}"
                        y2="${a(G+ot,1)}"
                        stroke="${Ke}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${a(z,1)}"
                        cy="${a(G,1)}"
                        r="${v(a(M*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${Ke}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:g``}
        <path
          d="${Ni}"
          fill="none"
          stroke="url(#${ft})"
          stroke-width="${v(a(M*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${Ji.map(m=>{let L=w(m.altitude),z=m.key==="horizon";return g`<g>
            <line
              x1="${a(x,1)}" y1="${a(L,1)}"
              x2="${a(x+T,1)}" y2="${a(L,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${z?1:.6}"
              stroke-dasharray="${z?"3 3":"2 4"}"
              opacity="${z?.6:.45}"
            />
            ${Yi?g`<text
                    x="${a(x+3,1)}"
                    y="${a(L-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${Qi}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${m.label}</text>`:g``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${ne.map(m=>{let L=v(j(m.time.getTime()),x,x+T),z=v(w(m.altitude),P,O),G=!m.secondary,ot=G?v(a(M*.022,1),1.8,3):1.4,re="var(--smc-marker-strong, rgba(255,255,255,0.9))",uo="var(--smc-marker-soft, rgba(255,255,255,0.55))",Xi=m.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":m.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":m.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",ts=G?Xi:uo,es=G?re:uo,ns=m.kind==="sunrise"||m.kind==="sunset"?g`
                <circle cx="${a(L,1)}" cy="${a(z,1)}" r="${ot+1}"
                  fill="${m.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${a(L-ot*2.6,1)}"
                  y1="${a(m.kind==="sunrise"?z+ot+2:z-ot-2,1)}"
                  x2="${a(L+ot*2.6,1)}"
                  y2="${a(m.kind==="sunrise"?z+ot+2:z-ot-2,1)}"
                  stroke="${re}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:g`<circle cx="${a(L,1)}" cy="${a(z,1)}" r="${ot}"
                  fill="${es}" opacity="0.85" />`;return g`<g>
            <line
              x1="${a(L,1)}" y1="${a(P,1)}"
              x2="${a(L,1)}" y2="${a(O,1)}"
              stroke="${ts}" stroke-width="${G?1:.7}"
              stroke-dasharray="3 3" opacity="${G?.5:.25}" />
            ${ns}
          </g>`})}
      </g>

      <g class="now-marker">
        <line
          x1="${a(bt,1)}" y1="${a(P,1)}"
          x2="${a(bt,1)}" y2="${a(O,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${v(a(M*.012,2),1,1.8)}"
          opacity="0.85" />
        ${c?g`<g class="now-sun ${qi}" filter="${Zi}">
                <title>${l.t("chartSunNow",{altitude:it(y,1,l.locale)})}</title>
                <circle
                  cx="${a(bt,1)}"
                  cy="${a(no,1)}"
                  r="${Dt}"
                  fill="${Vi}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${to}"
                />
              </g>`:g``}
        ${at&&ie!==null&&d?g`<g class="now-moon">
                <title>${l.t("chartMoonNow",{altitude:it(at.altitude,1,l.locale)})}${at.clamped?` ${l.t("chartOutside")}`:""}</title>
                ${ie===bt?g``:g`<line
                        x1="${a(bt,1)}"
                        y1="${a(at.y,1)}"
                        x2="${a(ie,1)}"
                        y2="${a(at.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${a(ie,1)}"
                  cy="${a(at.y,1)}"
                  r="${a(vt+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${to}" />
                <g
                  transform="translate(${a(ie-vt,1)} ${a(at.y-vt,1)})"
                  opacity="${at.clamped?.6:1}"
                >
                  ${Yt({size:a(vt*2,1),illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${_}-moon-now`})}
                </g>
              </g>`:g``}
      </g>

      ${oo?g`<g class="zenith-chip">
              <rect
                x="${a(so-_e/2,1)}"
                y="${a(ao,1)}"
                width="${a(_e,1)}"
                height="${a(ke,1)}"
                rx="${a(ke/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${a(so,1)}"
                y="${a(ao+ke/2+we*.36,1)}"
                text-anchor="middle"
                font-size="${we}"
                fill="var(--smc-label-color, #ffffff)"
              >${io}</text>
            </g>`:g``}

      ${W?g`<line
              x1="${a(x,1)}" y1="${a(O+.5,1)}"
              x2="${a(x+T,1)}" y2="${a(O+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:g``}

      ${qe.length?g`<g class="event-labels" font-size="${xe}">
              ${qe.map(m=>{let L=W?O+2:P;return g`<g>
                  <rect
                    x="${a(m.x-m.width/2,1)}"
                    y="${a(L,1)}"
                    width="${a(m.width,1)}"
                    height="${a(je,1)}"
                    rx="${a(je/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${m.secondary?.6:.88}" />
                  <text
                    x="${a(m.x,1)}"
                    y="${a(L+je/2+xe*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${m.secondary?.75:1}"
                  >${m.text}</text>
                </g>`})}
            </g>`:g``}
    </svg>
  `}function Rn(o){let t=Math.sin(o*127.1+311.7)*43758.5453;return t-Math.floor(t)}function js(o,t,e){let n=[];for(let i=0;i<t;i++){let s=Math.sqrt(Rn(o*7.13+i*1.37))*e*.96,r=Rn(o*3.71+i*2.11)*360,l=xt({x:0,y:0},s,r),c=Rn(o*5.19+i*4.53);n.push({x:l.x,y:l.y,r:.35+c*.75,opacity:.16+c*.34})}return n}function zn(o,t){return v((90-o)/90*t,0,t)}function In(o){let{width:t,height:e,sun:n,moon:i,sunTrack:s,moonPhase:r,showSun:l,showMoon:c,palette:u,format:d,animations:h,uid:p,showCardinals:f=!0,seed:b=0}=o,E=Math.max(80,t),_=Math.max(80,e),k=6,y={x:E/2,y:_/2},$=Math.max(10,Math.min(E,_)/2-k),M=`${p}-dome`,S=`${p}-dome-clip`,C=[{key:d.t("compassNorth"),azimuth:0},{key:d.t("compassEast"),azimuth:90},{key:d.t("compassSouth"),azimuth:180},{key:d.t("compassWest"),azimuth:270}],U=v(a($*.17,1),7,11),W=n?n.altitude>0:!1,X=v(a($*.11,1),4,11),x=n?xt(y,zn(n.altitude,$),n.azimuth):null,T=l&&n&&x,P=i?i.altitude>0:!1,I=v(a($*.24,1),10,22),O=i?xt(y,zn(i.altitude,$),i.azimuth):null,Y=c&&i&&O&&r,V=f&&$>=42,tt=v(a($*.14,1),6.5,9),nt=[{altitude:30,radius:$*(60/90)},{altitude:60,radius:$*(30/90)}],J=(n?.altitude??-90)<-6?js(Math.max(1,Math.round(b)),46,$):[],j=s.filter(w=>w.altitude>=-8).map(w=>xt(y,zn(w.altitude,$),w.azimuth));return g`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${a(E,1)} ${a(_,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${d.t("skyView")}"
    >
      <defs>
        <radialGradient id="${M}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${u.skyTop}" />
          <stop offset="100%" stop-color="${u.skyBottom}" />
        </radialGradient>
        <clipPath id="${S}">
          <circle cx="${a(y.x,1)}" cy="${a(y.y,1)}" r="${a($,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${a(y.x,1)}" cy="${a(y.y,1)}" r="${a($,1)}"
        fill="url(#${M})" opacity="0.55" />

      <g clip-path="url(#${S})">
        ${J.length?g`<g class="stars">
                ${J.map(w=>g`<circle
                      cx="${a(y.x+w.x,1)}"
                      cy="${a(y.y+w.y,1)}"
                      r="${a(w.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${a(w.opacity,2)}" />`)}
              </g>`:g``}
        ${nt.map(w=>g`<circle
              cx="${a(y.x,1)}" cy="${a(y.y,1)}" r="${a(w.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${a(y.x-$,1)}" y1="${a(y.y,1)}"
          x2="${a(y.x+$,1)}" y2="${a(y.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${a(y.x,1)}" y1="${a(y.y-$,1)}"
          x2="${a(y.x,1)}" y2="${a(y.y+$,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${j.length>1?g`<path
                d="M${j.map(w=>`${a(w.x,1)} ${a(w.y,1)}`).join(" L")}"
                fill="none"
                stroke="${u.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:g``}
      </g>

      <circle
        cx="${a(y.x,1)}" cy="${a(y.y,1)}" r="${a($,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${V?g`<g
              font-size="${tt}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${nt.map(w=>{let B=xt(y,w.radius,45);return g`<text
                  x="${a(B.x,1)}"
                  y="${a(B.y+tt*.35,1)}"
                >${w.altitude}°</text>`})}
            </g>`:g``}

      ${f?g`<g font-size="${U}" fill="var(--smc-muted-color)" opacity="0.7">
              ${C.map(w=>{let B=xt(y,$*.87,w.azimuth);return g`<text
                  x="${a(B.x,1)}"
                  y="${a(B.y+U*.35,1)}"
                  text-anchor="middle"
                >${w.key}</text>`})}
            </g>`:g``}

      ${T&&W&&x?g`<g class="${h?"smc-pulse":""}">
              <circle
                cx="${a(x.x,1)}" cy="${a(x.y,1)}" r="${X}"
                fill="${u.lineDay}" opacity="0.28" />
              <circle
                cx="${a(x.x,1)}" cy="${a(x.y,1)}" r="${a(X*.55,1)}"
                fill="${u.lineDay}" />
            </g>`:g``}
      ${l&&n&&!W?wn(y,$,n.azimuth,u.lineNight):g``}

      ${Y&&P&&O&&r?g`<g transform="translate(${a(O.x-I/2,1)} ${a(O.y-I/2,1)})">
              ${Yt({size:I,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:I>=16,uid:`${p}-moon`})}
            </g>`:g``}
      ${c&&i&&!P?wn(y,$,i.azimuth,"var(--smc-moon-lit, #e6ebf7)"):g``}
    </svg>
  `}function mi(o=16,t="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${t}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function pi(o=16,t="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${t}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${t}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function On(o=16,t="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Fn(o=16,t="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${t}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${t}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function gi(o=20,t="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${t}" />
      <g stroke="${t}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function fi(o=18,t="currentColor"){return g`
    <svg width="${o}" height="${o}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${t}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${t}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${t}" />
    </svg>
  `}var yi=new Map;function bi(o){let t=yi.get(o);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),yi.set(o,t)),t}function qs(o){try{return bi(o)}catch{return bi("UTC")}}function Un(o,t){let e=qs(t).formatToParts(o),n={};for(let i of e)i.type!=="literal"&&(n[i.type]=Number.parseInt(i.value,10));return{year:n.year??1970,month:n.month??1,day:n.day??1,hour:(n.hour??0)%24,minute:n.minute??0,second:n.second??0}}function vi(o,t){let e=Un(o,t);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(o.getTime()/1e3)*1e3}function Zs(o,t,e,n=0,i=0,s=0,r="UTC"){let l=Date.UTC(o,t-1,e,n,i,s),c=1440*60*1e3,u=[vi(new Date(l-c),r),vi(new Date(l+c),r)],d=[...new Set(u)].map(p=>l-p).filter(p=>{let f=Un(new Date(p),r);return f.year===o&&f.month===t&&f.day===e&&f.hour===n&&f.minute===i&&f.second===s}).sort((p,f)=>p-f);if(d.length>0)return new Date(d[0]);let h=Math.min(...u);return new Date(l-h)}function Jt(o,t){let e=Un(o,t);return Zs(e.year,e.month,e.day,0,0,0,t)}function $i(o,t){let e=Jt(o,t);return Jt(new Date(e.getTime()+2160*60*1e3),t)}function Qt(o,t){return Math.round(Jt(o,t).getTime()/(1440*60*1e3))}function xi(o){if(o)try{return new Intl.DateTimeFormat("en-US",{timeZone:o}),o}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function st(o,t){return typeof o=="boolean"?o:o==="true"||o===1?!0:o==="false"||o===0?!1:t}function fe(o,t,e){return typeof o=="string"&&t.includes(o)?o:e}function ki(o,t="en"){let e=[],n=[],i=o??{},s=N.card_height;if(typeof i.card_height=="number"&&Number.isFinite(i.card_height))s=Math.round(v(i.card_height,R[0],R[1])),s!==i.card_height&&n.push(Q(t,"invalidHeight",{value:String(i.card_height),min:R[0],max:R[1]}));else if(i.card_height==="auto"||i.card_height===null)s="auto";else if(typeof i.card_height=="number")n.push(Q(t,"invalidHeight",{value:String(i.card_height),min:R[0],max:R[1]}));else if(i.card_height!==void 0){let h=gt(i.card_height);h===null?e.push(Q(t,"invalidHeight",{value:String(i.card_height),min:R[0],max:R[1]})):s=Math.round(v(h,R[0],R[1]))}let r=null,l=null,c=gt(i.latitude),u=gt(i.longitude);return c!==null&&(c>=-90&&c<=90?r=c:n.push(Q(t,"invalidNumber",{value:String(i.latitude)}))),u!==null&&(u>=-180&&u<=180?l=u:n.push(Q(t,"invalidNumber",{value:String(i.longitude)}))),{config:{type:typeof i.type=="string"?i.type:"custom:sun-moon-card",entity:typeof i.entity=="string"&&i.entity.trim()!==""?i.entity.trim():N.entity,moon_entity:typeof i.moon_entity=="string"&&i.moon_entity.trim()!==""?i.moon_entity.trim():N.moon_entity,card_height:s,show_sun:st(i.show_sun,N.show_sun),show_moon:st(i.show_moon,N.show_moon),show_twilight:st(i.show_twilight,N.show_twilight),show_astronomical_details:st(i.show_astronomical_details,N.show_astronomical_details),compact_mode:st(i.compact_mode,N.compact_mode),card_style:fe(i.card_style,zt.cardStyle,N.card_style),theme_mode:fe(i.theme_mode,zt.themeMode,N.theme_mode),animations:st(i.animations,N.animations),time_format:fe(i.time_format,zt.timeFormat,N.time_format),language:fe(i.language,zt.language,N.language),show_header:st(i.show_header,N.show_header),show_day_chart:st(i.show_day_chart,N.show_day_chart),show_sky_view:st(i.show_sky_view,N.show_sky_view),show_events:st(i.show_events,N.show_events),show_moon_times:st(i.show_moon_times,N.show_moon_times),show_footer:st(i.show_footer,N.show_footer),twilight_level:fe(i.twilight_level,zt.twilightLevel,N.twilight_level),location_name:typeof i.location_name=="string"?i.location_name:"",latitude:r,longitude:l},errors:e,warnings:n}}function Mi(o,t){return o.card_height==="auto"?v(ni(t),R[0],R[1]):v(o.card_height,R[0],R[1])}function Ys(o,t,e,n="de"){let i={latitude:0,longitude:0},s={dayStart:o,dayEnd:new Date(o.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},l={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},c={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:o,timeZone:t,location:i,locationName:"",extras:Js(t,Si(n)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:l,events:c,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function Si(o){return o==="de"?"de-DE":"en-GB"}function Js(o,t){return{timeZoneLongName:Nn(o,t,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null}}function Qs(o,t){let e=bn(o.getTime()-27648e5,o.getTime()-6e4);if(e.length===0)return!1;let n=e[e.length-1],i=s=>new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit"}).format(s);return i(n)===i(o)}function Xs(o,t,e){if(!o)return null;let n=Number(new Intl.DateTimeFormat("en-CA",{timeZone:t,month:"2-digit"}).format(o));if(!Number.isFinite(n)||n<1||n>12)return null;let i=Xo[n-1];return Q(e,"folkName",{name:Q(e,i)})}function wi(o,t,e,n){return o?{time:o,azimuth:ze(o,t,"moon"),dayOffset:Qt(o,n)-Qt(e,n)}:null}function tr(o){if(typeof o!="string"||o.trim()==="")return null;let t=new Date(o);return Number.isNaN(t.getTime())?null:t}var _i=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],er={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function nr(o,t,e){let n=xi(t?.config?.time_zone),i=[],s=xn(t?.config?.latitude)?t.config.latitude:null,r=xn(t?.config?.longitude)?t.config.longitude:null,l=o.latitude??s,c=o.longitude??r,u=It(o.language,t?.locale?.language??t?.language);if(l===null||c===null)return Ys(e,n,["missing-location",...i],u);let d={latitude:l,longitude:c},h=o.location_name.trim()!==""?o.location_name.trim():t?.config?.location_name??"",p=Jt(e,n),f=$i(e,n),b=yn(d,p,f),E=Pe(e,d),_=E.altitude,k=gn(e.getTime()+6e4,d),y=St(e,d),$=Re(e),M=Oo(e,d),S=t?.states?.[o.entity];S||i.push("missing-sun-entity");let C={...b.events},U={};if(S?.attributes)for(let[w,B]of _i){let dt=tr(S.attributes[B]),ht=b.events[w];if(dt&&dt>=p&&dt<f&&(!ht||Math.abs(dt.getTime()-ht.getTime())<=Qo)){C[w]=dt,U[w]="ha";continue}U[w]=ht?"computed":"none"}else for(let[w]of _i)U[w]=b.events[w]?"computed":"none";for(let w of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])U[w]=b.events[w]?"computed":"none";let W=S?.attributes?gt(S.attributes.elevation):null,X=S?.attributes?gt(S.attributes.azimuth):null,x=o.moon_entity?t?.states?.[o.moon_entity]:void 0,T=x&&typeof x.state=="string"?er[x.state]??null:null,P=o.show_moon?Io(d,p,f,M):null,I=[],O=900*1e3;for(let w=p.getTime();w<=f.getTime();w+=O){let B=Pe(w,d);I.push({altitude:B.altitude,azimuth:B.azimuth})}let Y=null;C.sunrise&&C.sunset&&(Y=(C.sunset.getTime()-C.sunrise.getTime())/6e4);let V=Jt(new Date(p.getTime()-720*60*1e3),n),tt=yn(d,V,p),nt=tt.events.sunrise&&tt.events.sunset?(tt.events.sunset.getTime()-tt.events.sunrise.getTime())/6e4:null,Tt=Y!==null&&nt!==null?Y-nt:null,J=Uo(e),j={timeZoneLongName:Nn(n,Si(u),e),previousDaylightMinutes:nt,daylightDeltaMinutes:Tt,sunBelowHorizon:_<0?Math.abs(_):null,sunriseAzimuth:C.sunrise?ze(C.sunrise,d,"sun"):null,sunsetAzimuth:C.sunset?ze(C.sunset,d,"sun"):null,nextFullMoon:J,nextFullMoonDays:J?Math.round((J.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:J?Qs(J.time,n):!1,moonFolkName:Xs(J?.time??null,n,u),moonDistance:Go(e,d,14),moonRise:wi(M.nextRise??M.previousRise,d,e,n),moonSet:wi(M.nextSet??M.previousSet,d,e,n)};return b.polar==="polar-day"&&i.push("polar-day"),b.polar==="polar-night"&&i.push("polar-night"),C.sunrise||i.push("no-sunrise-today"),C.sunset||i.push("no-sunset-today"),!C.civilDawn&&!C.civilDusk&&i.push("no-civil-twilight"),{now:e,timeZone:n,location:d,locationName:h,day:b,sun:{altitude:_,azimuth:E.azimuth,phase:Fo(_),rising:k>_,haElevation:W,haAzimuth:X},moon:{position:y,phase:$,events:M,haPhaseName:T},sunTrack:I,moonPath:P,events:C,eventSources:U,extras:j,daylightMinutes:Y,issues:i,fatal:!1}}var Xt=new Map;function or(o){return[o.entity,o.moon_entity,o.latitude,o.longitude,o.twilight_level].join("|")}function ir(o,t){if(!t)return"-";let e=t.states?.[o.entity],n=o.moon_entity?t.states?.[o.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",n?.state??""].join("|")}function Ai(o,t,e){let n=Math.floor(e.getTime()/6e4),i=[or(o),ir(o,t),n,e.getTimezoneOffset()].join("#"),s=Xt.get(i);if(s)return s;let r=nr(o,t,e);if(Xt.size>24){let l=Xt.keys().next().value;l!==void 0&&Xt.delete(l)}return Xt.set(i,r),r}function Ti(){Xt.clear()}var Ei=Ae`
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
`,Di=Ae`
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
`;function Gn(o,t){o.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}var Ft=class extends pt{setConfig(t){this._config={...t}}get _language(){return It(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(t,e){return Q(this._language,t,e)}_value(t,e){let n=this._config?.[t];return n??e}_update(t){if(!this._config)return;let e={...this._config,...t};for(let[n,i]of Object.entries(t)){let s=N[n];i===s&&n in N&&delete e[n]}this._config=e,Gn(this,e)}render(){if(!this._config)return D``;let t=this._config.card_height,e=t==="auto"||t===null,n=typeof t=="number"?t:N.card_height,i=this._config.latitude===void 0||this._config.latitude===null;return D`
      <div class="card-config">
        <div class="section">
          <div class="section-title">${this._t("editorAppearance")}</div>

          <div class="row">
            <label for="height">${this._t("editorCardHeight")}</label>
            <div class="control height-control">
              <input
                id="height"
                type="range"
                min="${R[0]}"
                max="${R[1]}"
                step="10"
                .value=${String(n)}
                ?disabled=${e}
                @input=${s=>this._update({card_height:Number(s.target.value)})}
              />
              <input
                id="height-number"
                type="number"
                aria-label=${this._t("editorCardHeight")}
                min="${R[0]}"
                max="${R[1]}"
                .value=${String(n)}
                ?disabled=${e}
                @change=${s=>{let r=gt(s.target.value);r!==null&&this._update({card_height:Math.round(v(r,R[0],R[1]))})}}
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
                  @change=${s=>this._update({card_height:s.target.checked?"auto":N.card_height})}
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
                .value=${this._value("entity",N.entity)}
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
                .value=${this._value("moon_entity",N.moon_entity)}
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
                  @change=${s=>{if(s.target.checked){let l={...this._config};delete l.latitude,delete l.longitude,this._config=l,Gn(this,l)}else this._update({latitude:a(this.hass?.config?.latitude??0,4),longitude:a(this.hass?.config?.longitude??0,4)})}}
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
                @change=${s=>{let r=gt(s.target.value);this._update({latitude:r===null?void 0:v(r,-90,90)})}}
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
                @change=${s=>{let r=gt(s.target.value);this._update({longitude:r===null?void 0:v(r,-180,180)})}}
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
              ${this._t("editorCardHeight")}: ${R[0]}–${R[1]} px
              (Standard ${N.card_height} px, mindestens ${120} px)
            </span>
            <button class="link" @click=${()=>this._reset()}>${this._t("editorReset")}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `}_warnings(){let t=this._config?.card_height;return typeof t=="number"&&(t<R[0]||t>R[1])?D`<span class="hint">
        ${this._t("invalidHeight",{value:String(t),min:R[0],max:R[1]})}
      </span>`:A}_switch(t,e){let n=N[t];return D`
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
    `}_reset(){let t=Ge();this._config=t,Gn(this,t)}};Ft.styles=Di,mt([Vt({attribute:!1})],Ft.prototype,"hass",2),mt([jt()],Ft.prototype,"_config",2),Ft=mt([Ce(Jo)],Ft);var wt=class extends pt{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._hassSignature=""}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Ge()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let n=It(e.language,this.hass?.locale?.language),{config:i,errors:s,warnings:r}=ki(e,n);if(s.length>0)throw new Error(s[0]);r.length>0&&console.warn(`[sun-moon-card] ${r.join(" ")}`),this._config=i,Ti()}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}updated(e){let n=this._isDark();this.classList.toggle("smc-dark",n),this.classList.toggle("smc-light",!n),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let n=this._computeHassSignature();return n===this._hassSignature?!1:(this._hassSignature=n,!0)}return!0}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,Vo()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,n=this.hass;if(!n||!e)return"";let i=n.states?.[e.entity],s=e.moon_entity?n.states?.[e.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",n.locale?.language??"",n.locale?.time_format??"",n.selectedTheme?.dark??n.themes?.darkMode??"",i?.attributes?.next_rising??i?.last_updated??"",i?.attributes?.next_setting??"",i?.attributes?.next_dawn??"",i?.attributes?.next_dusk??"",i?.attributes?.elevation??"",i?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?Mi(this._config,this._width||400):N.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return It(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return D``;let n=this._width||400,i=this._resolvedHeight(),s=ei(i,n,e),r=Ai(e,this.hass,new Date),l=this._language(),c=this._isDark(),u=c?An:Tn;if(r.fatal)return D`
        <ha-card
          class=${Ht({"smc-dark":c,"smc-light":!c})}
          style=${Z({height:`${i}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${fi(18)}</span>
              <span>${Q(l,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let d=ui(l,this._locale(),r.timeZone,si(e.time_format,this.hass?.locale?.time_format,this._locale()));return D`
      <ha-card
        class=${Ht({"smc-dark":c,"smc-light":!c})}
        style=${Z({height:`${i}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,d)}
      >
        <div
          class=${Ht({root:!0,compact:s.compact})}
          style=${Z({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":u.day,"--smc-palette-civil":u.civil,"--smc-palette-night":u.night})}
        >
          ${s.showHeader?this._renderHeader(r,d,u,s):A}

          <div
            class=${Ht({body:!0,columns:s.skyViewSide})}
            style=${Z({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?D`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${Z({height:`${s.chartHeight}px`})}
                  >
                    ${hi({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:u,format:d,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(d,s.legendHeight):A}
                </div>`:A}
            ${s.skyViewSide?D`<div
                  class="sky-column"
                  style=${Z({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${In({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:u,format:d,animations:e.animations,uid:`${this._uid}-sky`,seed:Qt(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,d,s.skyViewWidth)}
                </div>`:A}
          </div>

          ${s.showEvents?this._renderEvents(r,d,s):A}
          ${s.showDetails?this._renderDetails(r,d,e,s,l,c,n):A}
          ${s.showFooter?this._renderFooter(r,d,e,s):A}
        </div>
      </ha-card>
    `}_renderHeader(e,n,i,s){let r=e.locationName||n.t("title"),l=e.extras,c=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),u=10.5,d=(y,$=!1)=>y.length*u*.58+20+($?12:0),p=Math.max(0,c-10-108),f=n.t(this._phaseKey(e)),b=d(f,!0);p-=b;let E=A;if(e.daylightMinutes!==null){let y=li(e.daylightMinutes),$=l.daylightDeltaMinutes===null?"":` ${ai(l.daylightDeltaMinutes,n.locale)}`,M=`${n.t("dayLength")} ${y}${$}`,S=d(M);S<=p&&(p-=S,E=D`<span class="meta-chip" title=${n.t("dayLength")}
          >${M}</span
        >`)}let _=A,k=d(l.timeZoneLongName);return k<=p&&(p-=k,_=D`<span class="meta-chip">${l.timeZoneLongName}</span>`),D`
      <div class="header" style=${Z({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${ri(e.now,n)}</span>
        </div>
        <div class="header-meta">
          ${E}${_}
          <span class="phase-chip" title=${f}>
            <span
              class="phase-dot"
              style=${Z({background:this._phaseColor(e,i)})}
            ></span>
            ${f}
          </span>
        </div>
      </div>
    `}_renderLegend(e,n){return D`
      <div class="legend" aria-hidden="true" style=${Z({height:`${n}px`})}>
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
    `}_renderSkyReadout(e,n,i){let s=this._config,r=[],l=(c,u,d)=>{let h=it(u,1,n.locale),p=`${Math.round(d)}\xB0 ${Ot(d,n.language)}`;return D`<span
        title=${`${n.t("elevation")} ${h} \xB7 ${n.t("azimuth")} ${p}`}
        >${n.t("positionReadout",{body:c,altitude:h,degrees:String(Math.round(d)),direction:Ot(d,n.language)})}</span
      >`};return s.show_sun&&r.push(l(n.t("sun"),e.sun.altitude,e.sun.azimuth)),s.show_moon&&r.push(l(n.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth)),r.length===0||i<150?A:D`<div class="sky-readout">${r}</div>`}_renderFooter(e,n,i,s){let r=i.twilight_level==="nautical"?"footerTwilightNautical":i.twilight_level==="astronomical"?"footerTwilightAstronomical":i.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil";return D`
      <div class="footer" style=${Z({height:`${s.footerHeight}px`})}>
        <span class="part">${n.t(r)} · ${e.extras.timeZoneLongName}</span>
        <span class="part">${n.t("footerMethod")}</span>
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,n){switch(e.sun.phase){case"day":return n.day;case"civil":return n.civil;case"nautical":return n.nautical;case"astronomical":return n.astronomical;default:return n.night}}_fitLabel(e,n,i,s=.7){for(let r of e)if(r&&r.length*i*s<=n)return r;return null}_renderEvents(e,n,i){let{compact:s,padding:r}=i,l=i.chartWidth+(i.skyViewSide?i.skyViewWidth+10:0),c=this._config,u=[];if(c.show_twilight&&u.push({key:"civilDawn",kind:"dawn",label:n.t("civilDawn"),shortLabel:n.t("civilDawnShort"),time:e.events.civilDawn,icon:On(s?14:16),missingText:n.t("noEvent")}),u.push({key:"sunrise",kind:"sunrise",label:n.t("sunrise"),shortLabel:n.t("sunriseShort"),time:e.events.sunrise,icon:mi(s?14:16),missingText:n.t("noSunrise")}),u.push({key:"sunset",kind:"sunset",label:n.t("sunset"),shortLabel:n.t("sunsetShort"),time:e.events.sunset,icon:pi(s?14:16),missingText:n.t("noSunset")}),c.show_twilight&&u.push({key:"civilDusk",kind:"dusk",label:n.t("civilDusk"),shortLabel:n.t("civilDuskShort"),time:e.events.civilDusk,icon:Fn(s?14:16),missingText:n.t("noEvent")}),c.twilight_level==="all"||c.show_astronomical_details){let k=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[y,$,M]of k)u.push({key:y,kind:M,label:n.t(y),shortLabel:n.t(y),time:$,icon:M==="dawn"?On(s?13:15):Fn(s?13:15),secondary:!0,missingText:n.t("noEvent")})}let d=l<300?3:l<420?4:l<560?6:8,h=u.slice(0,Math.max(2,d)),p=6,b=Math.max(40,l-2*r-p*(h.length-1))/h.length-10,E=s?b<120?8.5:9:b<92?8.5:9.5,_=b<74?11:b<96?12:12.5;return D`
      <div
        class="events"
        style=${Z({gap:`${p}px`,height:`${i.eventsHeight}px`})}
      >
        ${h.map(k=>{let y=this._fitLabel([k.label,k.shortLabel],b,E),$=k.time?ut(k.time,n):k.missingText,M=this._fitLabel([$,"\u2014"],b,_)??"\u2014";return D`
            <div
              class=${Ht({"event-tile":!0,[k.kind]:!0,secondary:!!k.secondary,compact:s})}
              title=${`${k.label}: ${$}`}
            >
              <span class="event-head">
                <span class="event-icon">${k.icon}</span>
                <span
                  class=${Ht({"event-time":!0,missing:!k.time})}
                  style=${Z({fontSize:`${_}px`})}
                >
                  ${M}
                </span>
                ${s&&y?D`<span
                      class="event-label"
                      style=${Z({fontSize:`${E}px`})}
                      >${y}</span
                    >`:A}
              </span>
              ${!s&&y?D`<span
                    class="event-label"
                    style=${Z({fontSize:`${E}px`})}
                    >${y}</span
                  >`:A}
            </div>
          `})}
      </div>
    `}_renderDetails(e,n,i,s,r,l,c){let u=e.extras,d=e.moon.haPhaseName??e.moon.phase.phaseKey,h=s.skyViewInline&&c>=430,p=(i.show_sun?1:0)+(i.show_moon?1:0)+(h?1:0),b=Math.max(60,c-2*s.padding-8*Math.max(0,p-1))/Math.max(1,p)-20-26-9,E=this._fitLabel([n.t("sunAltitude"),n.t("elevation")],b,10.5),_=it(e.sun.altitude,1,n.locale),k=`${Math.round(e.sun.azimuth)}\xB0 ${Ot(e.sun.azimuth,r)}`,y=u.sunBelowHorizon!==null?`${it(u.sunBelowHorizon,1,n.locale)} ${n.t("belowHorizon")}`:null,$=this._fitLabel([y?`${y} \xB7 ${k}`:`${n.t("azimuth")} ${k}`,y??k,k],b,9.5),M=u.sunriseAzimuth!==null?`${Math.round(u.sunriseAzimuth)}\xB0 ${Ot(u.sunriseAzimuth,r)}`:null,S=u.sunsetAzimuth!==null?`${Math.round(u.sunsetAzimuth)}\xB0 ${Ot(u.sunsetAzimuth,r)}`:null,C=i.show_astronomical_details&&M&&S?this._fitLabel([n.t("sunAzimuthAtEvents",{rise:M,set:S}),`${Math.round(u.sunriseAzimuth)}\xB0 / ${Math.round(u.sunsetAzimuth)}\xB0`],b,9.5):null,U=i.show_astronomical_details?this._fitLabel([`${n.t("solarNoon")} ${e.events.solarNoon?ut(e.events.solarNoon,n):"\u2014"} \xB7 ${it(e.day.maxAltitude,1,n.locale)}`,e.events.solarNoon?ut(e.events.solarNoon,n):null],b,9.5):null,W=this._fitLabel([n.t(d),n.t("moon")],b,10.5),X=ci(e.moon.phase.illumination,n.locale),x=this._fitLabel([`${X} ${n.t("illumination")}`,X],b,13),T=e.moon.position.apparentAltitude,P=it(T,1,n.locale),I=`${Math.round(e.moon.position.azimuth)}\xB0 ${Ot(e.moon.position.azimuth,r)}`,O=`${n.t("elevation")} ${P} \xB7 ${n.t("azimuth")} ${I}`,Y=T>=0?[`${n.t("elevation")} ${P} \xB7 ${I}`,`${P} \xB7 ${I}`,P]:[`${it(Math.abs(T),1,n.locale)} ${n.t("belowHorizon")} \xB7 ${I}`,`${it(Math.abs(T),1,n.locale)} ${n.t("belowHorizon")}`,P],V=null,tt="";if(u.moonDistance){let{current:K,min:rt,max:ft}=u.moonDistance,_t=Math.max(1,ft-rt),Ut=K<=rt+_t*.2,be=K>=rt+_t*.8,Et=We(K,n.locale),te=Ut?n.t("nearPerigee"):be?n.t("nearApogee"):"";tt=`${n.t("moonDistance")}: ${Et} \xB7 ${n.t("distanceRange",{min:We(rt,n.locale),max:We(ft,n.locale)})}`,V=this._fitLabel(te?[`${Et} \xB7 ${te}`,Et]:[Et],b,9.5)}let nt=this._fitLabel(V?Y.flatMap(K=>[`${K} \xB7 ${V}`,K]):Y,b,9.5),Tt=V!==null&&(nt?.includes(V)??!1),J=null,j="";if(i.show_astronomical_details&&u.nextFullMoon){let K=u.nextFullMoonDays??0,rt=K<=0?n.t("dayToday"):n.t("inDays",{days:String(K)}),ft=`${n.t("nextFullMoon")} ${rt}`,_t=u.blueMoon?` \xB7 ${n.t("blueMoon")}`:"",Ut=`${ft}${_t}${u.moonFolkName?` \xB7 ${u.moonFolkName}`:""}`;j=u.blueMoon?n.t("blueMoonHint"):u.moonFolkName?n.t("folkNameHint"):n.t("nextFullMoon"),J=this._fitLabel([Ut,`${ft}${_t}`,ft],b,9.5)}let w=i.show_moon_times?this._fitLabel([this._moonTimesText(e,n,!1),this._moonTimesText(e,n,!0)],b,9.5):null,B=[];nt&&B.push({text:nt,title:O,position:!0}),w&&B.push({text:w,title:null}),J&&B.push({text:J,title:j}),V&&!Tt&&B.push({text:V,title:tt});let dt=B.slice(0,s.detailsHeight>=Dn?3:2),ht=Tt||dt.some(K=>K.text===V),ye=V&&!ht?tt||V:null;return D`
      <div
        class="details"
        style=${Z({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${i.show_sun?D`
              <div class="detail-tile sun">
                <span class="detail-icon">${gi(20,l?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${E?D`<span class="detail-title">${E}</span>`:A}
                  <span class="detail-value">${_}</span>
                  ${$?D`<span class="detail-sub">${$}</span>`:A}
                  ${U?D`<span class="detail-sub">${U}</span>`:A}
                  ${C?D`<span class="detail-sub">${C}</span>`:A}
                </span>
              </div>
            `:A}
        ${i.show_moon?D`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Yt({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${W?D`<span class="detail-title">${W}</span>`:A}
                  ${x?D`<span class="detail-value">${x}</span>`:A}
                  ${dt.map(K=>{let rt=[K.title,K.position?ye:null].filter(Boolean).join(" \xB7 ")||null;return D`<span class="detail-sub" title=${rt??A}
                      >${K.text}</span
                    >`})}
                </span>
              </div>
            `:A}
        ${h?D`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${In({width:56,height:56,sun:i.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:i.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:i.show_sun,showMoon:i.show_moon,palette:l?An:Tn,format:n,animations:i.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:Qt(e.now,e.timeZone)})}
                </span>
              </div>
            `:A}
      </div>
    `}_moonTimesText(e,n,i){let s=e.extras.moonRise,r=e.extras.moonSet,l=s&&s.dayOffset!==0?` ${Hn(s.dayOffset,n.t)}`:"",c=s?`\u2191 ${ut(s.time,n)}${l}`:"\u2191 \u2014";if(i)return c;let u=r&&r.dayOffset!==0?` ${Hn(r.dayOffset,n.t)}`:"",d=r?`\u2193 ${ut(r.time,n)}${u}`:"\u2193 \u2014";return`${c} \xB7 ${d}`}_ariaLabel(e,n){let i=[n.t("title")];return i.push(n.t(this._phaseKey(e))),e.events.sunrise&&i.push(`${n.t("sunrise")} ${ut(e.events.sunrise,n)}`),e.events.sunset&&i.push(`${n.t("sunset")} ${ut(e.events.sunset,n)}`),i.join(", ")}};wt.styles=Ei,mt([Vt({attribute:!1})],wt.prototype,"hass",2),mt([jt()],wt.prototype,"_config",2),mt([jt()],wt.prototype,"_width",2),mt([jt()],wt.prototype,"_tick",2),wt=mt([Ce(Yo)],wt);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(t=>t.type===`custom:${Ue}`)||window.customCards.push({type:`custom:${Ue}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{wt as SunMoonCard};
