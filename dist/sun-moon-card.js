var Qs=Object.defineProperty;var er=Object.getOwnPropertyDescriptor;var He=(i,n,e,t)=>{for(var o=t>1?void 0:t?er(n,e):n,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(t?r(n,e,o):r(o))||o);return t&&o&&Qs(n,e,o),o};var Mn=globalThis,kn=Mn.ShadowRoot&&(Mn.ShadyCSS===void 0||Mn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eo=Symbol(),pi=new WeakMap,Yt=class{constructor(n,e,t){if(this._$cssResult$=!0,t!==eo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=e}get styleSheet(){let n=this.o,e=this.t;if(kn&&n===void 0){let t=e!==void 0&&e.length===1;t&&(n=pi.get(e)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),t&&pi.set(e,n))}return n}toString(){return this.cssText}},gi=i=>new Yt(typeof i=="string"?i:i+"",void 0,eo),Sn=(i,...n)=>{let e=i.length===1?i[0]:n.reduce((t,o,s)=>t+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Yt(e,i,eo)},fi=(i,n)=>{if(kn)i.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of n){let t=document.createElement("style"),o=Mn.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=e.cssText,i.appendChild(t)}},to=kn?i=>i:i=>i instanceof CSSStyleSheet?(n=>{let e="";for(let t of n.cssRules)e+=t.cssText;return gi(e)})(i):i;var{is:tr,defineProperty:nr,getOwnPropertyDescriptor:or,getOwnPropertyNames:ir,getOwnPropertySymbols:sr,getPrototypeOf:rr}=Object,Tn=globalThis,bi=Tn.trustedTypes,ar=bi?bi.emptyScript:"",lr=Tn.reactiveElementPolyfillSupport,Jt=(i,n)=>i,Qt={toAttribute(i,n){switch(n){case Boolean:i=i?ar:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,n){let e=i;switch(n){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},An=(i,n)=>!tr(i,n),yi={attribute:!0,type:String,converter:Qt,reflect:!1,useDefault:!1,hasChanged:An};Symbol.metadata??=Symbol("metadata"),Tn.litPropertyMetadata??=new WeakMap;var je=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,e=yi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(n,e),!e.noAccessor){let t=Symbol(),o=this.getPropertyDescriptor(n,t,e);o!==void 0&&nr(this.prototype,n,o)}}static getPropertyDescriptor(n,e,t){let{get:o,set:s}=or(this.prototype,n)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let a=o?.call(this);s?.call(this,r),this.requestUpdate(n,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??yi}static _$Ei(){if(this.hasOwnProperty(Jt("elementProperties")))return;let n=rr(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jt("properties"))){let e=this.properties,t=[...ir(e),...sr(e)];for(let o of t)this.createProperty(o,e[o])}let n=this[Symbol.metadata];if(n!==null){let e=litPropertyMetadata.get(n);if(e!==void 0)for(let[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let o=this._$Eu(e,t);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){let e=[];if(Array.isArray(n)){let t=new Set(n.flat(1/0).reverse());for(let o of t)e.unshift(to(o))}else n!==void 0&&e.push(to(n));return e}static _$Eu(n,e){let t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){let n=new Map,e=this.constructor.elementProperties;for(let t of e.keys())this.hasOwnProperty(t)&&(n.set(t,this[t]),delete this[t]);n.size>0&&(this._$Ep=n)}createRenderRoot(){let n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fi(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,e,t){this._$AK(n,t)}_$ET(n,e){let t=this.constructor.elementProperties.get(n),o=this.constructor._$Eu(n,t);if(o!==void 0&&t.reflect===!0){let s=(t.converter?.toAttribute!==void 0?t.converter:Qt).toAttribute(e,t.type);this._$Em=n,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(n,e){let t=this.constructor,o=t._$Eh.get(n);if(o!==void 0&&this._$Em!==o){let s=t.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Qt;this._$Em=o;let a=r.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(n,e,t,o=!1,s){if(n!==void 0){let r=this.constructor;if(o===!1&&(s=this[n]),t??=r.getPropertyOptions(n),!((t.hasChanged??An)(s,e)||t.useDefault&&t.reflect&&s===this._$Ej?.get(n)&&!this.hasAttribute(r._$Eu(n,t))))return;this.C(n,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,e,{useDefault:t,reflect:o,wrapped:s},r){t&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,r??e??this[n]),s!==!0||r!==void 0)||(this._$AL.has(n)||(this.hasUpdated||t||(e=void 0),this._$AL.set(n,e)),o===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[o,s]of t){let{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let n=!1,e=this._$AL;try{n=this.shouldUpdate(e),n?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(t){throw n=!1,this._$EM(),t}n&&this._$AE(e)}willUpdate(n){}_$AE(n){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(n){}firstUpdated(n){}};je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[Jt("elementProperties")]=new Map,je[Jt("finalized")]=new Map,lr?.({ReactiveElement:je}),(Tn.reactiveElementVersions??=[]).push("2.1.2");var lo=globalThis,$i=i=>i,En=lo.trustedTypes,_i=En?En.createPolicy("lit-html",{createHTML:i=>i}):void 0,Si="$lit$",st=`lit$${Math.random().toFixed(9).slice(2)}$`,Ti="?"+st,cr=`<${Ti}>`,vt=document,tn=()=>vt.createComment(""),nn=i=>i===null||typeof i!="object"&&typeof i!="function",co=Array.isArray,ur=i=>co(i)||typeof i?.[Symbol.iterator]=="function",no=`[ 	
\f\r]`,en=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wi=/-->/g,vi=/>/g,_t=RegExp(`>|${no}(?:([^\\s"'>=/]+)(${no}*=${no}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xi=/'/g,Mi=/"/g,Ai=/^(?:script|style|textarea|title)$/i,uo=i=>(n,...e)=>({_$litType$:i,strings:n,values:e}),S=uo(1),f=uo(2),_a=uo(3),Re=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),ki=new WeakMap,wt=vt.createTreeWalker(vt,129);function Ei(i,n){if(!co(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return _i!==void 0?_i.createHTML(n):n}var dr=(i,n)=>{let e=i.length-1,t=[],o,s=n===2?"<svg>":n===3?"<math>":"",r=en;for(let a=0;a<e;a++){let l=i[a],d,u,p=-1,m=0;for(;m<l.length&&(r.lastIndex=m,u=r.exec(l),u!==null);)m=r.lastIndex,r===en?u[1]==="!--"?r=wi:u[1]!==void 0?r=vi:u[2]!==void 0?(Ai.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=_t):u[3]!==void 0&&(r=_t):r===_t?u[0]===">"?(r=o??en,p=-1):u[1]===void 0?p=-2:(p=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?_t:u[3]==='"'?Mi:xi):r===Mi||r===xi?r=_t:r===wi||r===vi?r=en:(r=_t,o=void 0);let g=r===_t&&i[a+1].startsWith("/>")?" ":"";s+=r===en?l+cr:p>=0?(t.push(d),l.slice(0,p)+Si+l.slice(p)+st+g):l+st+(p===-2?a:g)}return[Ei(i,s+(i[e]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),t]},on=class i{constructor({strings:n,_$litType$:e},t){let o;this.parts=[];let s=0,r=0,a=n.length-1,l=this.parts,[d,u]=dr(n,e);if(this.el=i.createElement(d,t),wt.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=wt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(Si)){let m=u[r++],g=o.getAttribute(p).split(st),b=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?io:b[1]==="?"?so:b[1]==="@"?ro:Ct}),o.removeAttribute(p)}else p.startsWith(st)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(Ai.test(o.tagName)){let p=o.textContent.split(st),m=p.length-1;if(m>0){o.textContent=En?En.emptyScript:"";for(let g=0;g<m;g++)o.append(p[g],tn()),wt.nextNode(),l.push({type:2,index:++s});o.append(p[m],tn())}}}else if(o.nodeType===8)if(o.data===Ti)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(st,p+1))!==-1;)l.push({type:7,index:s}),p+=st.length-1}s++}}static createElement(n,e){let t=vt.createElement("template");return t.innerHTML=n,t}};function Et(i,n,e=i,t){if(n===Re)return n;let o=t!==void 0?e._$Co?.[t]:e._$Cl,s=nn(n)?void 0:n._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,t)),t!==void 0?(e._$Co??=[])[t]=o:e._$Cl=o),o!==void 0&&(n=Et(i,o._$AS(i,n.values),o,t)),n}var oo=class{constructor(n,e){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){let{el:{content:e},parts:t}=this._$AD,o=(n?.creationScope??vt).importNode(e,!0);wt.currentNode=o;let s=wt.nextNode(),r=0,a=0,l=t[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new sn(s,s.nextSibling,this,n):l.type===1?d=new l.ctor(s,l.name,l.strings,this,n):l.type===6&&(d=new ao(s,this,n)),this._$AV.push(d),l=t[++a]}r!==l?.index&&(s=wt.nextNode(),r++)}return wt.currentNode=vt,o}p(n){let e=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(n,t,e),e+=t.strings.length-2):t._$AI(n[e])),e++}},sn=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,e,t,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=n,this._$AB=e,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode,e=this._$AM;return e!==void 0&&n?.nodeType===11&&(n=e.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,e=this){n=Et(this,n,e),nn(n)?n===E||n==null||n===""?(this._$AH!==E&&this._$AR(),this._$AH=E):n!==this._$AH&&n!==Re&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):ur(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==E&&nn(this._$AH)?this._$AA.nextSibling.data=n:this.T(vt.createTextNode(n)),this._$AH=n}$(n){let{values:e,_$litType$:t}=n,o=typeof t=="number"?this._$AC(n):(t.el===void 0&&(t.el=on.createElement(Ei(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new oo(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(n){let e=ki.get(n.strings);return e===void 0&&ki.set(n.strings,e=new on(n)),e}k(n){co(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,t,o=0;for(let s of n)o===e.length?e.push(t=new i(this.O(tn()),this.O(tn()),this,this.options)):t=e[o],t._$AI(s),o++;o<e.length&&(this._$AR(t&&t._$AB.nextSibling,o),e.length=o)}_$AR(n=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);n!==this._$AB;){let t=$i(n).nextSibling;$i(n).remove(),n=t}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}},Ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,e,t,o,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=n,this.name=e,this._$AM=o,this.options=s,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=E}_$AI(n,e=this,t,o){let s=this.strings,r=!1;if(s===void 0)n=Et(this,n,e,0),r=!nn(n)||n!==this._$AH&&n!==Re,r&&(this._$AH=n);else{let a=n,l,d;for(n=s[0],l=0;l<s.length-1;l++)d=Et(this,a[t+l],e,l),d===Re&&(d=this._$AH[l]),r||=!nn(d)||d!==this._$AH[l],d===E?n=E:n!==E&&(n+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(n)}j(n){n===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}},io=class extends Ct{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===E?void 0:n}},so=class extends Ct{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==E)}},ro=class extends Ct{constructor(n,e,t,o,s){super(n,e,t,o,s),this.type=5}_$AI(n,e=this){if((n=Et(this,n,e,0)??E)===Re)return;let t=this._$AH,o=n===E&&t!==E||n.capture!==t.capture||n.once!==t.once||n.passive!==t.passive,s=n!==E&&(t===E||o);o&&this.element.removeEventListener(this.name,this,t),s&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}},ao=class{constructor(n,e,t){this.element=n,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(n){Et(this,n)}};var hr=lo.litHtmlPolyfillSupport;hr?.(on,sn),(lo.litHtmlVersions??=[]).push("3.3.3");var Ci=(i,n,e)=>{let t=e?.renderBefore??n,o=t._$litPart$;if(o===void 0){let s=e?.renderBefore??null;t._$litPart$=o=new sn(n.insertBefore(tn(),s),s,void 0,e??{})}return o._$AI(i),o};var ho=globalThis,Fe=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Ci(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}};Fe._$litElement$=!0,Fe.finalized=!0,ho.litElementHydrateSupport?.({LitElement:Fe});var mr=ho.litElementPolyfillSupport;mr?.({LitElement:Fe});(ho.litElementVersions??=[]).push("4.2.2");var Cn=i=>(n,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,n)}):customElements.define(i,n)};var pr={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:An},gr=(i=pr,n,e)=>{let{kind:t,metadata:o}=e,s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),t==="setter"&&((i=Object.create(i)).wrapped=!0),s.set(e.name,i),t==="accessor"){let{name:r}=e;return{set(a){let l=n.get.call(this);n.set.call(this,a),this.requestUpdate(r,l,i,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(t==="setter"){let{name:r}=e;return function(a){let l=this[r];n.call(this,a),this.requestUpdate(r,l,i,!0,a)}}throw Error("Unsupported decorator location: "+t)};function Dt(i){return(n,e)=>typeof e=="object"?gr(i,n,e):((t,o,s)=>{let r=o.hasOwnProperty(s);return o.constructor.createProperty(s,t),r?Object.getOwnPropertyDescriptor(o,s):void 0})(i,n,e)}function xt(i){return Dt({...i,state:!0,attribute:!1})}var Ln={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Nn=i=>(...n)=>({_$litDirective$:i,values:n}),Lt=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,e,t){this._$Ct=n,this._$AM=e,this._$Ci=t}_$AS(n,e){return this.update(n,e)}update(n,e){return this.render(...e)}};var ye=Nn(class extends Lt{constructor(i){if(super(i),i.type!==Ln.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(n=>i[n]).join(" ")+" "}update(i,[n]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in n)n[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(n)}let e=i.element.classList;for(let t of this.st)t in n||(e.remove(t),this.st.delete(t));for(let t in n){let o=!!n[t];o===this.st.has(t)||this.nt?.has(t)||(o?(e.add(t),this.st.add(t)):(e.remove(t),this.st.delete(t)))}return Re}});var Di="important",fr=" !"+Di,K=Nn(class extends Lt{constructor(i){if(super(i),i.type!==Ln.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((n,e)=>{let t=i[e];return t==null?n:n+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(i,[n]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let t of this.ft)n[t]==null&&(this.ft.delete(t),t.includes("-")?e.removeProperty(t):e[t]=null);for(let t in n){let o=n[t];if(o!=null){this.ft.add(t);let s=typeof o=="string"&&o.endsWith(fr);t.includes("-")||s?e.setProperty(t,s?o.slice(0,-11):o,s?Di:""):e[t]=o}}return Re}});var Li=[[0,0,1,0,6.288789],[2,0,-1,0,1.274034],[2,0,0,0,.658313],[0,0,2,0,.213621],[0,1,0,0,-.185045],[0,0,0,2,-.11438],[2,0,-2,0,.058801],[2,-1,-1,0,.057052],[2,0,1,0,.053323],[2,-1,0,0,.045747],[0,1,-1,0,-.040917],[1,0,0,0,-.03472],[0,1,1,0,-.030375],[2,0,0,-2,.015326],[0,0,1,2,-.012535],[0,0,1,-2,.010984],[4,0,-1,0,.010674],[0,0,3,0,.010036],[4,0,-2,0,.008549],[2,1,-1,0,-.007886],[2,1,0,0,-.006765],[1,0,-1,0,-.005166],[1,1,0,0,.00495],[2,-1,1,0,.004035],[2,0,2,0,.003994],[4,0,0,0,.003859],[2,0,-3,0,.003668],[0,1,-2,0,-.002689],[2,0,-1,2,-.002599],[2,-1,-2,0,.002396],[1,0,1,0,-.002347],[2,-2,0,0,.002235],[0,1,2,0,-.002118],[2,2,-1,-1,-.001871],[2,-2,-1,0,.002053],[2,0,1,-2,-.001753],[0,2,0,0,-.001753],[2,0,0,2,-.001594],[4,-1,-1,0,.001214],[0,0,2,2,-.001106]],Ni=[[0,0,0,1,5.129327],[0,0,1,1,.280666],[0,0,1,-1,.277757],[2,0,0,-1,.173245],[2,0,-1,1,.055426],[2,0,-1,-1,.04629],[2,0,0,1,.032587],[0,0,2,1,.017204],[2,0,1,-1,.009267],[0,0,2,-1,.008785],[2,-1,0,-1,.008216],[2,0,-2,-1,.004332],[2,0,1,1,.0042],[2,1,0,-1,-.003312],[2,-1,-1,1,.002465],[2,-1,0,1,.00221],[2,-1,-1,-1,.002068],[0,1,-1,-1,-.001859],[4,0,-1,-1,.001831],[0,1,0,1,-.001802],[0,0,0,3,-.001752],[0,1,-1,1,-.00157],[1,0,0,1,-.001499],[0,1,1,1,-.001472]],Hi=[[0,0,1,0,-20905.375327],[2,0,-1,0,-3699.12841],[2,0,0,0,-2955.997749],[0,0,2,0,-569.950385],[2,0,-2,0,246.243544],[2,-1,0,0,-204.552044],[2,0,1,0,-170.733561],[2,-1,-1,0,-152.113661],[0,1,-1,0,-129.592159],[1,0,0,0,108.761096],[0,1,1,0,104.749015],[0,0,1,-2,79.421761],[0,1,0,0,48.881156],[4,0,-1,0,-34.774658],[2,1,0,0,30.794417],[2,1,-1,0,24.217654],[0,0,3,0,-23.211076],[4,0,-2,0,-21.685795]],mo=385000.49;var q=Math.PI/180,ze=180/Math.PI,br=1495978707e-1,zi=6378.14,rn=-.833,Ge=-6,Ve=-12,Ze=-18,Hn=6,ln=-4,Pi=-6,an=120*1e3;function cn(i){return(typeof i=="number"?i:i.getTime())/864e5+24405875e-1}function Ht(i){return(i-2451545)/36525}function ie(i){let n=i%360;return n<0?n+360:n}function yr(i){let n=Ht(i);return 23.439291-.0130042*n-164e-9*n*n+504e-9*n*n*n}function $r(i){let n=i-2451545,e=Ht(i),t=280.46061837+360.98564736629*n+387933e-9*e*e-e*e*e/3871e4;return ie(t)}function po(i){let n=Ht(i),e=ie(280.46646+n*(36000.76983+n*3032e-7)),t=ie(357.52911+n*(35999.05029-1537e-7*n)),o=Math.sin(t*q)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*t*q)*(.019993-101e-6*n)+Math.sin(3*t*q)*289e-6,s=e+o,r=ie(125.04-1934.136*n),a=s-.00569-.00478*Math.sin(r*q),d=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(r*q),u=a*q,p=d*q,m=ie(Math.atan2(Math.cos(p)*Math.sin(u),Math.cos(u))*ze),g=Math.asin(Math.sin(p)*Math.sin(u))*ze;return{ra:m,dec:g}}function _r(i){let n=Ht(i),e=ie(280.46646+n*(36000.76983+n*3032e-7)),t=ie(357.52911+n*(35999.05029-1537e-7*n)),o=Math.sin(t*q)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*t*q)*(.019993-101e-6*n)+Math.sin(3*t*q)*289e-6,s=ie(125.04-1934.136*n);return ie(e+o-.00569-.00478*Math.sin(s*q))}function wr(i){let n=cn(i),e=Ht(n),t=ie(357.52911+e*(35999.05029-1537e-7*e)),o=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(t*q)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*t*q)*(.019993-101e-6*e)+Math.sin(3*t*q)*289e-6,r=(t+s)*q;return 1.000001018*(1-o*o)/(1+o*Math.cos(r))*br}function go(i,n,e,t){let o=ie($r(t)+e),s=ie(o-i.ra),r=n*q,a=i.dec*q,l=s*q,d=Math.asin(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(l))*ze,u=ie(Math.atan2(Math.sin(l),Math.cos(l)*Math.sin(r)-Math.tan(a)*Math.cos(r))*ze+180);return{altitude:d,azimuth:u}}function un(i,n){let e=cn(i);return go(po(e),n.latitude,n.longitude,e).altitude}function Rn(i,n){let e=cn(i);return go(po(e),n.latitude,n.longitude,e)}function vr(i){let n=i;return{D:ie(297.8501921+445267.1114034*n-.0018819*n*n+n*n*n/545868-n*n*n*n/113065e3),M:ie(357.5291092+35999.0502909*n-1536e-7*n*n+n*n*n/2449e4),Mp:ie(134.9633964+477198.8675055*n+.0087414*n*n+n*n*n/69699-n*n*n*n/14712e3),F:ie(93.272095+483202.0175233*n-.0036539*n*n-n*n*n/3526e3+n*n*n*n/86331e4)}}function Oi(i){let n=Ht(i),e=ie(218.3164477+481267.88123421*n-.0015786*n*n+n*n*n/538841-n*n*n*n/65194e3),t=vr(n),o=e;for(let a of Li){let l=a[0]*t.D+a[1]*t.M+a[2]*t.Mp+a[3]*t.F;o+=a[4]*Math.sin(l*q)}let s=0;for(let a of Ni){let l=a[0]*t.D+a[1]*t.M+a[2]*t.Mp+a[3]*t.F;s+=a[4]*Math.sin(l*q)}let r=mo;for(let a of Hi){let l=a[0]*t.D+a[1]*t.M+a[2]*t.Mp+a[3]*t.F;r+=a[4]*Math.cos(l*q)}return{longitude:ie(o),latitude:s,distanceKm:r}}function Ii(i,n,e){let t=yr(e)*q,o=i*q,s=n*q,r=ie(Math.atan2(Math.sin(o)*Math.cos(t)-Math.tan(s)*Math.sin(t),Math.cos(o))*ze),a=Math.asin(Math.sin(s)*Math.cos(t)+Math.cos(s)*Math.sin(t)*Math.sin(o))*ze;return{ra:r,dec:a}}function rt(i,n){let e=cn(i),t=Oi(e),o=Ii(t.longitude,t.latitude,e),s=go(o,n.latitude,n.longitude,e),r=Math.asin(zi/t.distanceKm)*ze,a=s.altitude-r*Math.cos(s.altitude*q);return{altitude:s.altitude,azimuth:s.azimuth,distanceKm:t.distanceKm,parallax:r,apparentAltitude:a,equatorial:o,geocentric:t}}function xr(i){return .7275*(Math.asin(zi/i)*ze)-.5667}var Mr=["newMoon","waxingCrescent","firstQuarter","waxingGibbous","fullMoon","waningGibbous","lastQuarter","waningCrescent"],kr=29.530588853;function zn(i){let n=cn(i),e=Oi(n),t=Ii(e.longitude,e.latitude,n),o=po(n),s=_r(n),r=wr(i),a=e.distanceKm,l=e.latitude*q,d=Math.acos(Math.min(1,Math.max(-1,Math.cos(l)*Math.cos((e.longitude-s)*q)))),u=Math.atan2(r*Math.sin(d),a-r*Math.cos(d)),p=ie(u*ze),m=(1+Math.cos(u))/2,g=(o.ra-t.ra)*q,b=o.dec*q,$=t.dec*q,w=ie(Math.atan2(Math.cos(b)*Math.sin(g),Math.sin(b)*Math.cos($)-Math.cos(b)*Math.sin($)*Math.cos(g))*ze),N=ie(e.longitude-s)/360,_=Math.min(7,Math.floor(N*8+.5)%8),M=N*29.530588853;return{illumination:m,phaseAngle:p,elongation:d*ze,phaseIndex:_,phaseKey:Mr[_],brightLimbAngle:w,moonAgeDays:M,waxing:N<.5,distanceKm:a}}function Nt(i,n,e,t,o){let s=[];if(!(n>i))return s;let r=Math.max(2,Math.ceil((n-i)/e)),a=(n-i)/r,l=i,d=t(i)-o;for(let u=1;u<=r;u++){let p=i+u*a,m=t(p)-o;if(d===0)s.push({time:l,rising:m>0});else if(d<0&&m>=0||d>0&&m<=0){let g=l,b=p,$=d;for(let w=0;w<50&&b-g>1;w++){let N=(g+b)/2,_=t(N)-o;_<0&&$<0||_>0&&$>0?(g=N,$=_):b=N}s.push({time:(g+b)/2,rising:m>d})}l=p,d=m}return s}function Ri(i,n,e,t){let o=i.find(s=>s.rising===n&&s.time>=e&&s.time<t);return o?new Date(o.time):null}function fo(i,n,e,t=4){let o=n.getTime()-27e5,s=e.getTime()+2700*1e3,r=n.getTime(),a=e.getTime(),l=x=>un(x,i),d=[],u=Math.max(3e4,Math.round(t*60*1e3));for(let x=r;x<a;x+=u)d.push({time:x,altitude:l(x)});d.push({time:a,altitude:l(a)});let p=-1/0,m=1/0;for(let x of d)x.altitude>p&&(p=x.altitude),x.altitude<m&&(m=x.altitude);let g=[["sunrise","sunset",rn],["civilDawn","civilDusk",Ge],["nauticalDawn","nauticalDusk",Ve],["astronomicalDawn","astronomicalDusk",Ze]],b={civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null};for(let[x,D,v]of g){let H=Nt(o,s,an,l,v);b[x]=Ri(H,!0,r,a),b[D]=Ri(H,!1,r,a)}let $=r,w=-1/0,N=120*1e3;for(let x=r;x<=a;x+=N){let D=l(x);D>w&&(w=D,$=x)}let _=Math.max(r,$-N),M=Math.min(a,$+N);for(let x=0;x<40&&M-_>1e3;x++){let D=_+(M-_)/3,v=M-(M-_)/3;l(D)<l(v)?_=D:M=v}b.solarNoon=new Date((_+M)/2);let R="none";return m>rn?R="polar-day":p<rn&&(R="polar-night"),{dayStart:n,dayEnd:e,samples:d,maxAltitude:p,minAltitude:m,events:b,polar:R}}function bo(i,n,e,t=48){let o=typeof n=="number"?n:n.getTime();if(!Number.isFinite(o)||!Number.isFinite(e))return null;let s=a=>un(a,i),r=Nt(o,o+t*60*60*1e3,an,s,e)[0];return r?{time:new Date(r.time),rising:r.rising}:null}function Fi(i,n,e,t,o=48){let s=typeof n=="number"?n:n.getTime();if(!Number.isFinite(s)||!(e<t))return null;let r=m=>un(m,i),a=s+o*60*60*1e3,l=[...Nt(s,a,an,r,e),...Nt(s,a,an,r,t)].sort((m,g)=>m.time-g.time),d=m=>m>=e&&m<=t,u=d(r(s)),p=u?s:null;for(let m of l){let g=d(r(m.time+1e3));if(p===null&&g)p=m.time;else if(p!==null&&!g)return{start:new Date(p),end:new Date(m.time),active:u}}return p===null?null:{start:new Date(p),end:null,active:u}}function Sr(i,n,e,t=10){let o=n.getTime(),s=e.getTime(),r=Math.max(6e4,Math.round(t*60*1e3)),a=[];for(let u=o;u<s;u+=r)a.push({time:u,altitude:rt(u,i).apparentAltitude});a.push({time:s,altitude:rt(s,i).apparentAltitude});let l=-1/0,d=1/0;for(let u of a)u.altitude>l&&(l=u.altitude),u.altitude<d&&(d=u.altitude);return{samples:a,maxAltitude:l,minAltitude:d}}function Gi(i,n,e,t,o=10){let s=n.getTime(),r=e.getTime(),a=l=>{if(!l)return null;let d=l.getTime();return d>=s&&d<r?d:null};return{profile:Sr(i,n,e,o),rise:a(t.previousRise)??a(t.nextRise),set:a(t.previousSet)??a(t.nextSet)}}function Ui(i,n){let e=i.getTime(),t=e-1800*60*1e3,o=e+1800*60*1e3,r=Nt(t,o,an,g=>{let b=rt(g,n);return b.altitude-xr(b.distanceKm)},0),a=r.filter(g=>g.rising),l=r.filter(g=>!g.rising),d=a.find(g=>g.time>e)??null,u=[...a].reverse().find(g=>g.time<=e)??null,p=l.find(g=>g.time>e)??null,m=[...l].reverse().find(g=>g.time<=e)??null;return{previousRise:u?new Date(u.time):null,previousSet:m?new Date(m.time):null,nextRise:d?new Date(d.time):null,nextSet:p?new Date(p.time):null}}function Ki(i){return i>0?"day":i>Ge?"civil":i>Ve?"nautical":i>Ze?"astronomical":"night"}function Tr(i){return(((zn(i).moonAgeDays/kr-.5)%1+1)%1+.5)%1-.5}function yo(i,n){let e=typeof i=="number"?i:i.getTime(),t=typeof n=="number"?n:n.getTime();return t>e?Nt(e,t,360*60*1e3,Tr,0).filter(o=>o.rising).map(o=>new Date(o.time)):[]}function Wi(i,n=32){let e=typeof i=="number"?i:i.getTime(),o=yo(e,e+n*24*60*60*1e3)[0];if(!o)return null;let s=zn(o).illumination;return s<.98?null:{time:o,illumination:s}}function Bi(i,n,e=14){let t=typeof i=="number"?i:i.getTime(),o=360*60*1e3,s=t-e*24*60*60*1e3,r=t+e*24*60*60*1e3,a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,d=s,u=s;for(let p=s;p<=r;p+=o){let m=rt(p,n).distanceKm;m<a&&(a=m,d=p),m>l&&(l=m,u=p)}return{current:rt(t,n).distanceKm,min:a,minTime:new Date(d),max:l,maxTime:new Date(u),mean:mo}}function Pn(i,n,e="sun"){return(e==="sun"?Rn(i,n):rt(i,n)).azimuth}function k(i,n,e){return Number.isNaN(i)?n:Math.min(e,Math.max(n,i))}function $o(i,n,e){return i+(n-i)*e}function c(i,n=0){let e=10**n;return Math.round(i*e)/e}function ji(i){let n=i.trim().replace(/^#/,""),e=n.length===3?n.split("").map(o=>o+o).join(""):n;if(!/^[0-9a-fA-F]{6}$/.test(e))return null;let t=Number.parseInt(e,16);return[t>>16&255,t>>8&255,t&255]}function Ar(i){return`#${i.map(n=>Math.round(k(n,0,255)).toString(16).padStart(2,"0")).join("")}`}function _o(i,n,e){let t=ji(i),o=ji(n);if(!t||!o)return n;let s=k(e,0,1);return Ar([$o(t[0],o[0],s),$o(t[1],o[1],s),$o(t[2],o[2],s)])}function wo(i){return typeof i=="number"&&Number.isFinite(i)}function Ee(i){if(typeof i=="number"&&Number.isFinite(i))return i;if(typeof i=="string"&&i.trim()!==""){let n=Number(i.replace(",","."));if(Number.isFinite(n))return n}return null}function Vi(i){return i.length===0?"":i.map((n,e)=>`${e===0?"M":"L"}${c(n.x,2)} ${c(n.y,2)}`).join(" ")}function On(i,n=.5){if(i.length<3)return Vi(i);let e=[`M${c(i[0].x,2)} ${c(i[0].y,2)}`];for(let t=0;t<i.length-1;t++){let o=i[t-1]??i[t],s=i[t],r=i[t+1],a=i[t+2]??r,l=s.x+(r.x-o.x)/6*n*2,d=s.y+(r.y-o.y)/6*n*2,u=r.x-(a.x-s.x)/6*n*2,p=r.y-(a.y-s.y)/6*n*2;e.push(`C${c(l,2)} ${c(d,2)} ${c(u,2)} ${c(p,2)} ${c(r.x,2)} ${c(r.y,2)}`)}return e.join(" ")}function In(i,n,e=!1){if(i.length===0)return"";let t=e?On(i):Vi(i),o=i[0],s=i[i.length-1];return`${t} L${c(s.x,2)} ${c(n,2)} L${c(o.x,2)} ${c(n,2)} Z`}function qe(i,n,e){let t=e*Math.PI/180;return{x:i.x-n*Math.sin(t),y:i.y-n*Math.cos(t)}}function Zi(i,n,e){let t=k(e,0,1);if(t<=5e-4)return"";if(t>=.9995)return`M${c(i.x-n,2)} ${c(i.y,2)} a${c(n,2)} ${c(n,2)} 0 1 1 ${c(n*2,2)} 0 a${c(n,2)} ${c(n,2)} 0 1 1 ${c(-n*2,2)} 0 Z`;let o=n*(1-2*t),s=1,r=o>0?0:1,a={x:i.x-n,y:i.y},l={x:i.x+n,y:i.y};return`M${c(a.x,2)} ${c(a.y,2)} A${c(n,2)} ${c(n,2)} 0 0 ${s} ${c(l.x,2)} ${c(l.y,2)} A${c(n,2)} ${c(Math.abs(o),4)} 0 0 ${r} ${c(a.x,2)} ${c(a.y,2)} Z`}function qi(i=new Date){let n=i.getTime();return n+(6e4-n%6e4)+250}var Er=[{x:-.28,y:-.32,r:.17},{x:.3,y:-.1,r:.13},{x:-.1,y:.3,r:.2},{x:.26,y:.34,r:.1}];function Ue(i){let{size:n,illumination:e,brightLimbAngle:t,litColor:o="var(--smc-moon-lit, #f4f6fb)",darkColor:s="var(--smc-moon-dark, rgba(120,132,168,0.35))",texture:r=!0,className:a="",uid:l}=i,d={x:n/2,y:n/2},u=Math.max(1,n/2-.5),p=Zi(d,u,e),m=r&&n>=26,g=c(-t,2);return f`
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
      ${p?f`<g transform="rotate(${g} ${c(d.x,2)} ${c(d.y,2)})">
              <path d="${p}" fill="${o}" />
              ${m?f`<g clip-path="url(#${l}-clip)" opacity="0.16">
                      <clipPath id="${l}-clip">
                        <path d="${p}" />
                      </clipPath>
                      ${Er.map(b=>{let $={x:d.x+b.x*u,y:d.y+b.y*u};return f`<circle
                          cx="${c($.x,2)}" cy="${c($.y,2)}"
                          r="${c(b.r*u,2)}"
                          fill="#5a6488" />`})}
                    </g>`:f``}
            </g>`:f``}
      <circle
        cx="${c(d.x,2)}" cy="${c(d.y,2)}" r="${c(u,2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `}function vo(i,n,e,t){let o=qe(i,n,e),s=e*Math.PI/180,r=-Math.sin(s),a=-Math.cos(s),l=k(n*.12,4,9),d=k(n*.07,2.5,5),u={x:o.x+r*l,y:o.y+a*l},p={x:o.x-a*d,y:o.y+r*d},m={x:o.x+a*d,y:o.y-r*d};return f`
    <polygon
      points="${c(u.x,2)},${c(u.y,2)} ${c(p.x,2)},${c(p.y,2)} ${c(m.x,2)},${c(m.y,2)}"
      fill="${t}"
      opacity="0.55"
    />
  `}var Gn="sun-moon-card",Ao="sun-moon-card",Qi="sun-moon-card-editor";function Rt(i){return i==="scene"?460:i==="clean"?400:340}var Cr=320,Dr=360;var Lr=24,Nr=16,xo=4,Hr=12,Rr=36,dn=[2,12],hn=[2,12],at=[320,1200],lt=[260,800];function zt(i){return i?[Lr,800]:[120,800]}var P={entity:"sun.sun",moon_entity:"sensor.moon",card_height:340,show_sun:!0,show_moon:!0,show_twilight:!0,show_astronomical_details:!1,compact_mode:!1,minimal_mode:!1,minimal_show_times:!0,minimal_show_zenith:!0,sun_marker_size:6,moon_marker_size:6,popup_width:720,popup_height:460,card_style:"glass",scene:"city",show_sun_info:!0,show_moon_info:!0,scene_full_moon_path:!1,theme_mode:"auto",animations:!0,time_format:"auto",language:"auto",show_header:!0,show_day_chart:!0,show_sky_view:!0,show_events:!0,show_moon_times:!0,show_footer:!0,twilight_level:"civil",location_name:"",latitude:null,longitude:null,tap_action:null,hold_action:null,double_tap_action:null,show_remaining_time:!0,remaining_time_focus:"sun",show_golden_hour:!1,show_countdown_tile:!1},es=["none","more-info","navigate","url","call-service","perform-action","toggle","fire-dom-event","open-popup"],ts=400,ns=250,os=1200*1e3,Eo={day:"#ffc44d",civil:"#4f6fb3",nautical:"#33417a",astronomical:"#222a52",night:"#12172f",lineDay:"#ffe9a8",lineNight:"#8fa3d8",skyTop:"#0d1230",skyBottom:"#1b2347",glow:"#ff9f5a"},Co={day:"#ffc247",civil:"#7d97d4",nautical:"#57699f",astronomical:"#3d4a75",night:"#293355",lineDay:"#fff3c4",lineNight:"#cdd8f0",skyTop:"#eef2fb",skyBottom:"#cfd9ef",glow:"#ffb26b"},is=["folkJan","folkFeb","folkMar","folkApr","folkMay","folkJun","folkJul","folkAug","folkSep","folkOct","folkNov","folkDec"],Do=[{key:"N",deg:0},{key:"NNE",deg:22.5},{key:"NE",deg:45},{key:"ENE",deg:67.5},{key:"E",deg:90},{key:"ESE",deg:112.5},{key:"SE",deg:135},{key:"SSE",deg:157.5},{key:"S",deg:180},{key:"SSW",deg:202.5},{key:"SW",deg:225},{key:"WSW",deg:247.5},{key:"W",deg:270},{key:"WNW",deg:292.5},{key:"NW",deg:315},{key:"NNW",deg:337.5}],Pe={themeMode:["auto","light","dark"],timeFormat:["auto","12","24"],language:["auto","de","en"],twilightLevel:["civil","nautical","astronomical","all"],cardStyle:["glass","flat","horizon","scene","clean"],scene:["city","mountains","forest","coast","none"],remainingTimeFocus:["sun","next","golden_hour"]},ss=700,zr=260,Lo=16,No=4,rs=72,Xi=10,To=56,Pr=84,Or=96,Mo=74,Ir=To+8,Fr=12,Gr=10,ve=4,Fn=4,Yi=30,Ji=44,Ur=26,Kr=72,Ho=96,ko=20,So=18;function as(i,n,e){if(e.minimal_mode){let C=(e.minimal_show_times||e.minimal_show_zenith)&&i>=Rr?Hr:0,L=Math.max(Nr,i-2*xo-C);return{padding:xo,minimalTimesHeight:C,showHeader:!1,showEvents:!1,showDetails:!1,showFooter:!1,showLegend:!1,skyViewSide:!1,skyViewInline:!1,skyViewWidth:0,chartWidth:Math.max(40,n-2*xo),gaps:0,headerHeight:0,eventsHeight:0,detailsHeight:0,footerHeight:0,legendHeight:0,chartHeight:L,minimal:!0,compact:!1}}let t=e.compact_mode,o=t?Gr:Fr,s=Math.max(40,i-2*o),r=0,a=e.show_footer&&!t?ko+ve:0,l=Yi+ve+Ji+ve+a+(So+Fn)+Mo,d=e.show_header&&!t&&s>=l,u=d?Yi:0;s-=u,d&&(s-=ve,r+=ve);let p=t?Ur:Ji,m=e.show_events&&s-(p+ve)-a>=Pr,g=m?p:0;s-=g,m&&(s-=ve,r+=ve);let b=e.show_astronomical_details?Ho:Kr,$=!t&&(e.show_sun||e.show_moon)&&s-(b+ve)-a>=Or,w=$?b:0;s-=w,$&&(s-=ve,r+=ve);let N=e.show_footer&&!t&&m&&s-(ko+ve)>=Ir,_=N?ko:0;s-=_,N&&(s-=ve,r+=ve);let M=Math.max(To,s),R=e.show_day_chart&&!t&&m&&M-So-Fn>=Mo,x=R?So:0;R&&(r+=Fn);let D=Math.max(To,M-x-(R?Fn:0)),v=e.show_sky_view&&!t&&(e.show_sun||e.show_moon),H=v&&n>=ss&&D>=Mo,T=Math.max(80,n-2*o),F=H?Math.round(Math.min(zr,(T-Xi)/3)):0,Y=Math.max(120,H?T-Xi-F:T);return{padding:o,showHeader:d,showEvents:m,showDetails:$,showFooter:N,showLegend:R,skyViewSide:H,skyViewInline:!H&&v&&$,skyViewWidth:F,chartWidth:Y,gaps:r,headerHeight:u,eventsHeight:g,detailsHeight:w,footerHeight:_,legendHeight:x,chartHeight:D,minimal:!1,minimalTimesHeight:0,compact:t}}function ls(i,n){return n==="clean"?i>=560?400:460:n==="scene"?i>=712?Math.round(Math.min(560,Math.max(440,i*.6))):520:i>=ss?Dr:Cr}function Un(){return{type:`custom:${Gn}`,card_height:340}}var Ro={de:{title:"Sonne & Mond",popupClose:"Schlie\xDFen",popupOpenHint:"Zum \xD6ffnen der vollst\xE4ndigen Karte dr\xFCcken.",loading:"Berechne\u2026",noData:"Keine Daten verf\xFCgbar",missingLocation:"Kein Standort verf\xFCgbar. Bitte Breiten- und L\xE4ngengrad in der Karte konfigurieren.",missingSunEntity:"Entit\xE4t {entity} nicht gefunden \u2013 Berechnung erfolgt lokal.",invalidHeight:'Ung\xFCltige Kartenh\xF6he {value}. Erlaubt: {min}\u2013{max} Pixel oder "auto".',invalidNumber:"Ung\xFCltiger Zahlenwert: {value}",invalidRange:"Wert {value} liegt au\xDFerhalb von {min}\u2013{max} und wurde angepasst.",invalidAction:"Aktion \u201E{value}\u201C wird nicht unterst\xFCtzt und wurde verworfen.",phaseDay:"Tag",phaseCivil:"B\xFCrgerliche D\xE4mmerung",phaseNautical:"Nautische D\xE4mmerung",phaseAstronomical:"Astronomische D\xE4mmerung",phaseNight:"Nacht",phasePolarDay:"Polartag",phasePolarNight:"Polarnacht",civilDawn:"Morgend\xE4mmerung",civilDawnShort:"D\xE4mmerung",sunrise:"Sonnenaufgang",sunriseShort:"Aufgang",solarNoon:"Kulmination",sunset:"Sonnenuntergang",sunsetShort:"Untergang",civilDusk:"Abendd\xE4mmerung",civilDuskShort:"D\xE4mmerung",nauticalDawn:"Naut. Morgend\xE4mmerung",nauticalDusk:"Naut. Abendd\xE4mmerung",astronomicalDawn:"Astron. Morgend\xE4mmerung",astronomicalDusk:"Astron. Abendd\xE4mmerung",twilight:"D\xE4mmerung",daylight:"Tageslicht",night:"Nacht",dayLength:"Tagesl\xE4nge",noEvent:"\u2014",noSunrise:"kein Aufgang",noSunset:"kein Untergang",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"jetzt",nowFormat:"{event} jetzt",goldenHour:"Goldene Stunde",goldenHourShort:"Gold. Stunde",goldenHourEnd:"Ende der Goldenen Stunde",goldenHourEndShort:"Gold. Std. Ende",blueHour:"Blaue Stunde",tileDaylightLeft:"Tageslicht noch",tileUntil:"bis {event}",sun:"Sonne",sunAltitude:"Sonnenstand",elevation:"H\xF6he",azimuth:"Azimut",rising:"steigend",setting:"fallend",moon:"Mond",moonPhase:"Mondphase",illumination:"beleuchtet",moonrise:"Mondaufgang",moonriseShort:"Aufgang",moonset:"Monduntergang",moonsetShort:"Untergang",nextMoonrise:"n\xE4chster Aufgang",nextMoonset:"n\xE4chster Untergang",moonDistance:"Entfernung",moonAltitude:"Mondstand",moonAge:"Mondalter",moonDays:"{days} Tage",newMoon:"Neumond",waxingCrescent:"Zunehmende Sichel",firstQuarter:"Erstes Viertel",waxingGibbous:"Zunehmender Mond",fullMoon:"Vollmond",waningGibbous:"Abnehmender Mond",lastQuarter:"Letztes Viertel",waningCrescent:"Abnehmende Sichel",skyView:"Himmelsansicht",belowHorizon:"unter dem Horizont",chartSunNow:"Sonne jetzt: {altitude}",moonCurve:"Mond \u2013 H\xF6henverlauf \xFCber den Tag",chartMoonNow:"Mond jetzt: {altitude}",chartOutside:"(au\xDFerhalb des dargestellten Bereichs)",zenith:"Zenit",horizon:"Horizont",sceneNoon:"Solarer Mittag",sceneNoonShort:"Mittag",editorCardStyleScene:"Szene (Himmel mit Silhouette)",editorCardStyleClean:"Minimalistisch",cleanNow:"Jetzt",editorScene:"Szene",editorSceneCity:"Stadt",editorSceneMountains:"Berge",editorSceneForest:"Wald",editorSceneCoast:"K\xFCste",editorSceneNone:"Keine",refCivil:"B\xFCrgerlich",refNautical:"Nautisch",refAstronomical:"Astronomisch",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",legendDaylight:"Tag",legendTwilightShort:"D\xE4mmerung",legendNight:"Nacht",dayLengthDelta:"Tagesl\xE4nge {length} ({delta})",nextFullMoon:"N\xE4chster Vollmond",inDays:"in {days} Tagen",dayToday:"heute",dayTomorrow:"morgen",dayFollowing:"Folgetag",blueMoon:"Blue Moon",blueMoonHint:"zweiter Vollmond im Kalendermonat",folkJan:"Wolfsmond",folkFeb:"Schneemond",folkMar:"Wurmmond",folkApr:"Keimmond",folkMay:"Bl\xFCtenmond",folkJun:"Erdbeermond",folkJul:"Hirschmond",folkAug:"Getreidemond",folkSep:"Erntemond",folkOct:"J\xE4germond",folkNov:"Bibermond",folkDec:"Frostmond",sunAzimuthAtEvents:"Auf-/Untergang {rise} / {set}",folkName:"{name} (Volksname)",folkNameHint:"\xDCberlieferter Monatsname, keine astronomische Bezeichnung",perigee:"Erdn\xE4he",apogee:"Erdferne",nearPerigee:"nahe Erdn\xE4he",nearApogee:"nahe Erdferne",distanceRange:"{min} \u2013 {max}",footerTwilightCivil:"B\xFCrgerliche D\xE4mmerung (\u22126\xB0)",footerTwilightNautical:"Nautische D\xE4mmerung (\u221212\xB0)",footerTwilightAstronomical:"Astronomische D\xE4mmerung (\u221218\xB0)",footerTwilightAll:"Alle D\xE4mmerungsebenen",footerMethod:"Berechnung lokal: Sonne nach Meeus/NOAA, Mond ELP2000 (abgek\xFCrzte Reihe)",compassNorth:"N",compassEast:"O",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNO",dirNE:"NO",dirENE:"ONO",dirE:"O",dirESE:"OSO",dirSE:"SO",dirSSE:"SSO",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"Die Sonne geht heute nicht unter (Polartag).",hintPolarNight:"Die Sonne geht heute nicht auf (Polarnacht).",hintNoCivilTwilight:"Keine b\xFCrgerliche D\xE4mmerung \u2013 die Sonne bleibt unter \u22126\xB0.",hintNoData:"F\xFCr diesen Standort liegen keine g\xFCltigen astronomischen Daten vor.",editorGroupStyle:"Kartenstil & Aussehen",editorGroupLayout:"Gr\xF6\xDFe & Layout",editorGroupContent:"Inhalte",editorGroupCountdown:"Restzeit",editorGroupLocale:"Sprache & Zeit",editorGroupSource:"Entit\xE4ten & Standort",editorSunInfo:"Infofeld Sonnenstand",editorMoonInfo:"Infofeld Mond",editorFullMoonPath:"Mondbahn vollst\xE4ndig zeigen",editorSwitchCount:"{on} von {total} an",editorOff:"aus",editorDefault:"Standard",editorMoonEntityHint:"Die Mondphase wird berechnet; die Bezeichnung kann aus der Mond-Entit\xE4t (z. B. sensor.moon) \xFCbernommen werden.",editorCardHeight:"Kartenh\xF6he (px)",editorCardHeightAuto:"Automatische H\xF6he",editorShowSun:"Sonne anzeigen",editorShowMoon:"Mond anzeigen",editorShowTwilight:"D\xE4mmerung anzeigen",editorShowAstronomicalDetails:"Astronomische Details",editorCompactMode:"Kompakte Darstellung",editorCardStyle:"Kartenstil",editorCardStyleGlass:"Glas",editorCardStyleFlat:"Flach",editorCardStyleHorizon:"Horizont",editorMinimalMode:"Minimalvariante (nur Zeitstrahl)",editorMinimalModeHelp:"Zeigt ausschlie\xDFlich den Zeitstrahl. Die Kartenh\xF6he darf dann bis auf 24 Pixel sinken; ein Klick \xF6ffnet die vollst\xE4ndige Karte. Die Zeile mit Auf-/Untergangs- und Zenitzeit braucht 36 Pixel.",editorSunMarkerSize:"Gr\xF6\xDFe der Sonne (px)",editorMoonMarkerSize:"Gr\xF6\xDFe des Mondes (px)",editorPopupWidth:"Breite des Overlays (px)",editorPopupHeight:"H\xF6he des Overlays (px)",editorMinimalTimes:"Minimalvariante: Auf-/Untergangszeit",editorMinimalZenith:"Minimalvariante: Zenitzeit",editorThemeMode:"Farbschema",editorThemeAuto:"Automatisch (Theme)",editorThemeLight:"Hell",editorThemeDark:"Dunkel",editorAnimations:"Animationen",editorTimeFormat:"Zeitformat",editorTimeFormatAuto:"Automatisch",editorTimeFormat12:"12 Stunden",editorTimeFormat24:"24 Stunden",editorLanguage:"Sprache",editorLanguageAuto:"Automatisch",editorShowHeader:"Kopfzeile",editorShowDayChart:"Tagesverlauf",editorShowSkyView:"Himmelsansicht",editorShowEvents:"Zeitenleiste",editorShowMoonTimes:"Mondauf-/Untergang",editorRemainingTime:"Restzeit bis Auf-/Untergang",editorRemainingTimeFocus:"Restzeit in der Kopfzeile",editorRemainingTimeFocusSun:"Sonnenauf-/-untergang",editorRemainingTimeFocusNext:"N\xE4chstes Ereignis (Sonne, D\xE4mmerung, Mond)",editorRemainingTimeFocusGolden:"Goldene Stunde",editorGoldenHour:"Goldene & Blaue Stunde",editorCountdownTile:"Restzeit-Kachel",editorShowFooter:"Fu\xDFzeile",editorTwilightLevel:"D\xE4mmerungsgrenze",editorTwilightCivil:"B\xFCrgerlich (\u22126\xB0)",editorTwilightNautical:"Nautisch (\u221212\xB0)",editorTwilightAstronomical:"Astronomisch (\u221218\xB0)",editorTwilightAll:"Alle Ebenen",editorEntity:"Sonnen-Entit\xE4t",editorMoonEntity:"Mond-Entit\xE4t (optional)",editorLocationName:"Anzeigename des Standorts",editorLatitude:"Breitengrad",editorLongitude:"L\xE4ngengrad",editorUseHaLocation:"Standort aus Home Assistant \xFCbernehmen",editorReset:"Zur\xFCcksetzen"},en:{title:"Sun & Moon",popupClose:"Close",popupOpenHint:"Press to open the full card.",loading:"Calculating\u2026",noData:"No data available",missingLocation:"No location available. Please configure latitude and longitude in the card.",missingSunEntity:"Entity {entity} not found \u2013 using local calculations.",invalidHeight:'Invalid card height {value}. Allowed: {min}\u2013{max} pixels or "auto".',invalidNumber:"Invalid number: {value}",invalidRange:"Value {value} is outside {min}\u2013{max} and was adjusted.",invalidAction:"Action \u201C{value}\u201D is not supported and was ignored.",phaseDay:"Daylight",phaseCivil:"Civil twilight",phaseNautical:"Nautical twilight",phaseAstronomical:"Astronomical twilight",phaseNight:"Night",phasePolarDay:"Polar day",phasePolarNight:"Polar night",civilDawn:"Morning twilight",civilDawnShort:"Dawn",sunrise:"Sunrise",sunriseShort:"Sunrise",solarNoon:"Solar noon",sunset:"Sunset",sunsetShort:"Sunset",civilDusk:"Evening twilight",civilDuskShort:"Dusk",nauticalDawn:"Nautical dawn",nauticalDusk:"Nautical dusk",astronomicalDawn:"Astronomical dawn",astronomicalDusk:"Astronomical dusk",twilight:"Twilight",daylight:"Daylight",night:"Night",dayLength:"Day length",noEvent:"\u2014",noSunrise:"no sunrise",noSunset:"no sunset",untilFormat:"{event} in {duration}",countdownMinutes:"{minutes} min",countdownHours:"{hours} h {minutes} min",countdownDays:"{days} d {hours} h",countdownNow:"now",nowFormat:"{event} now",goldenHour:"Golden hour",goldenHourShort:"Golden hour",goldenHourEnd:"End of golden hour",goldenHourEndShort:"Golden hr ends",blueHour:"Blue hour",tileDaylightLeft:"Daylight left",tileUntil:"until {event}",sun:"Sun",sunAltitude:"Solar elevation",elevation:"Elevation",azimuth:"Azimuth",rising:"rising",setting:"setting",moon:"Moon",moonPhase:"Moon phase",illumination:"illuminated",moonrise:"Moonrise",moonriseShort:"Moonrise",moonset:"Moonset",moonsetShort:"Moonset",nextMoonrise:"next rise",nextMoonset:"next set",moonDistance:"Distance",moonAltitude:"Lunar elevation",moonAge:"Moon age",moonDays:"{days} days",newMoon:"New moon",waxingCrescent:"Waxing crescent",firstQuarter:"First quarter",waxingGibbous:"Waxing gibbous",fullMoon:"Full moon",waningGibbous:"Waning gibbous",lastQuarter:"Last quarter",waningCrescent:"Waning crescent",legendDaylight:"Day",legendTwilightShort:"Twilight",legendNight:"Night",nextFullMoon:"Next full moon",inDays:"in {days} days",dayToday:"today",dayTomorrow:"tomorrow",dayFollowing:"following day",blueMoon:"Blue Moon",blueMoonHint:"second full moon of the calendar month",folkJan:"Wolf Moon",folkFeb:"Snow Moon",folkMar:"Worm Moon",folkApr:"Pink Moon",folkMay:"Flower Moon",folkJun:"Strawberry Moon",folkJul:"Buck Moon",folkAug:"Sturgeon Moon",folkSep:"Harvest Moon",folkOct:"Hunter's Moon",folkNov:"Beaver Moon",folkDec:"Cold Moon",sunAzimuthAtEvents:"Rise/set {rise} / {set}",folkName:"{name} (folk name)",folkNameHint:"Traditional month name, not an astronomical term",perigee:"perigee",apogee:"apogee",nearPerigee:"near perigee",nearApogee:"near apogee",distanceRange:"{min} \u2013 {max}",dayLengthDelta:"Day length {length} ({delta})",footerTwilightCivil:"Civil twilight (\u22126\xB0)",footerTwilightNautical:"Nautical twilight (\u221212\xB0)",footerTwilightAstronomical:"Astronomical twilight (\u221218\xB0)",footerTwilightAll:"All twilight levels",footerMethod:"Computed locally: sun after Meeus/NOAA, moon ELP2000 (truncated series)",skyView:"Sky view",belowHorizon:"below the horizon",chartSunNow:"Sun now: {altitude}",moonCurve:"Moon \u2013 elevation over the day",chartMoonNow:"Moon now: {altitude}",chartOutside:"(outside the plotted range)",zenith:"Zenith",horizon:"Horizon",sceneNoon:"Solar noon",sceneNoonShort:"Noon",editorCardStyleScene:"Scene (sky with silhouette)",editorCardStyleClean:"Minimalist",cleanNow:"Now",editorScene:"Scene",editorSceneCity:"City",editorSceneMountains:"Mountains",editorSceneForest:"Forest",editorSceneCoast:"Coast",editorSceneNone:"None",refCivil:"Civil",refNautical:"Nautical",refAstronomical:"Astronomical",positionReadout:"{body}: {altitude} \xB7 {degrees}\xB0 {direction}",compassNorth:"N",compassEast:"E",compassSouth:"S",compassWest:"W",dirN:"N",dirNNE:"NNE",dirNE:"NE",dirENE:"ENE",dirE:"E",dirESE:"ESE",dirSE:"SE",dirSSE:"SSE",dirS:"S",dirSSW:"SSW",dirSW:"SW",dirWSW:"WSW",dirW:"W",dirWNW:"WNW",dirNW:"NW",dirNNW:"NNW",hintPolarDay:"The sun does not set today (polar day).",hintPolarNight:"The sun does not rise today (polar night).",hintNoCivilTwilight:"No civil twilight \u2013 the sun stays below \u22126\xB0.",hintNoData:"No valid astronomical data available for this location.",editorGroupStyle:"Card style & appearance",editorGroupLayout:"Size & layout",editorGroupContent:"Content",editorGroupCountdown:"Countdown",editorGroupLocale:"Language & time",editorGroupSource:"Entities & location",editorSunInfo:"Sun position panel",editorMoonInfo:"Moon panel",editorFullMoonPath:"Show full moon path",editorSwitchCount:"{on} of {total} on",editorOff:"off",editorDefault:"default",editorMoonEntityHint:"The moon phase is computed; its name can be taken from the moon entity (e.g. sensor.moon).",editorCardHeight:"Card height (px)",editorCardHeightAuto:"Automatic height",editorShowSun:"Show sun",editorShowMoon:"Show moon",editorShowTwilight:"Show twilight",editorShowAstronomicalDetails:"Astronomical details",editorCompactMode:"Compact layout",editorCardStyle:"Card style",editorCardStyleGlass:"Glass",editorCardStyleFlat:"Flat",editorCardStyleHorizon:"Horizon",editorMinimalMode:"Minimal variant (timeline only)",editorMinimalModeHelp:"Shows the timeline only. The card height may then go down to 24 pixels; a click opens the full card. The row with sunrise/sunset and zenith time needs 36 pixels.",editorSunMarkerSize:"Sun marker size (px)",editorMoonMarkerSize:"Moon marker size (px)",editorPopupWidth:"Overlay width (px)",editorPopupHeight:"Overlay height (px)",editorMinimalTimes:"Minimal variant: sunrise/sunset time",editorMinimalZenith:"Minimal variant: zenith time",editorThemeMode:"Colour scheme",editorThemeAuto:"Automatic (theme)",editorThemeLight:"Light",editorThemeDark:"Dark",editorAnimations:"Animations",editorTimeFormat:"Time format",editorTimeFormatAuto:"Automatic",editorTimeFormat12:"12 hours",editorTimeFormat24:"24 hours",editorLanguage:"Language",editorLanguageAuto:"Automatic",editorShowHeader:"Header",editorShowDayChart:"Day chart",editorShowSkyView:"Sky view",editorShowEvents:"Event bar",editorShowMoonTimes:"Moonrise / moonset",editorRemainingTime:"Time until rise/set",editorRemainingTimeFocus:"Countdown in the header",editorRemainingTimeFocusSun:"Sunrise/sunset",editorRemainingTimeFocusNext:"Next event (sun, twilight, moon)",editorRemainingTimeFocusGolden:"Golden hour",editorGoldenHour:"Golden & blue hour",editorCountdownTile:"Countdown tile",editorShowFooter:"Footer",editorTwilightLevel:"Twilight limit",editorTwilightCivil:"Civil (\u22126\xB0)",editorTwilightNautical:"Nautical (\u221212\xB0)",editorTwilightAstronomical:"Astronomical (\u221218\xB0)",editorTwilightAll:"All levels",editorEntity:"Sun entity",editorMoonEntity:"Moon entity (optional)",editorLocationName:"Location display name",editorLatitude:"Latitude",editorLongitude:"Longitude",editorUseHaLocation:"Use location from Home Assistant",editorReset:"Reset"}};function de(i,n,e){let o=(Ro[i]??Ro.en)[n]??Ro.en[n]??String(n);if(e)for(let[s,r]of Object.entries(e))o=o.split(`{${s}}`).join(String(r));return o}function Mt(i,n){return((i&&i!=="auto"?i:n)??"").toLowerCase().startsWith("de")?"de":"en"}function ds(i,n,e){let t=i;if(t==="auto"&&n&&(n==="12"||n==="am_pm"?t="12":n==="24"&&(t="24")),t==="12")return!0;if(t==="24")return!1;try{let o=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).resolvedOptions();return o.hour12??o.hourCycle==="h12"}catch{return!1}}var cs=new Map;function zo(i,n,e){let t=`${n}|${i}`,o=cs.get(t);if(o)return o;let s=i;try{let a=new Intl.DateTimeFormat(n,{timeZone:i,timeZoneName:"long"}).formatToParts(e).find(l=>l.type==="timeZoneName");a&&a.value.trim()!==""&&(s=a.value)}catch{}return cs.set(t,s),s}var us=new Map;function Wr(i,n,e){let t=`${i}|${n}|${e}`,o=us.get(t);if(!o){try{o=new Intl.DateTimeFormat(i,{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:n})}catch{o=new Intl.DateTimeFormat("en-GB",{hour:e?"numeric":"2-digit",minute:"2-digit",hour12:e,timeZone:n})}us.set(t,o)}return o}function se(i,n){return Wr(n.locale,n.timeZone,n.hour12).format(i)}function mn(i,n){try{return new Intl.DateTimeFormat(n.locale,{weekday:"short",day:"numeric",month:"short",timeZone:n.timeZone}).format(i)}catch{return i.toISOString().slice(0,10)}}function Po(i,n=0,e="de-DE"){try{return new Intl.NumberFormat(e,{minimumFractionDigits:n,maximumFractionDigits:n}).format(i)}catch{return i.toFixed(n)}}function ne(i,n=1,e="de-DE"){return`${Po(i,n,e)}\xB0`}function Kn(i,n="de-DE"){return`${Po(Math.round(i),0,n)} km`}function hs(i,n){return`${i<0?"\u2212":"+"}${Wn(Math.abs(i),n)}`}function Wn(i,n){let e=Math.max(0,Math.round(i));if(e<60)return n("countdownMinutes",{minutes:String(e)});let t=Math.floor(e/60),o=e%60;return t<24?n("countdownHours",{hours:String(t),minutes:String(o)}):n("countdownDays",{days:String(Math.floor(t/24)),hours:String(t%24)})}function Bn(i,n){return n(i===0?"dayToday":i===1?"dayTomorrow":"dayFollowing")}function jn(i,n="de-DE"){return`${Po(i*100,0,n)} %`}function Ke(i,n){let e=(i%360+360)%360,t=Do[0],o=1/0;for(let r of Do){let a=Math.abs((e-r.deg+540)%360-180);a<o&&(o=a,t=r)}let s=`dir${t.key}`;return de(n,s)}function ms(i,n,e,t){return{language:i,locale:n,timeZone:e,hour12:t,t:(o,s)=>de(i,o,s)}}var ps="var(--smc-golden-hour, #f2b544)",Br="var(--smc-blue-hour, #4f6fd6)";function gs(i,n,e){let t=[],o=null;for(let s of i){let r=s.altitude>=n&&s.altitude<=e;r&&o===null&&(o=s.time),!r&&o!==null&&(t.push([o,s.time]),o=null)}return o!==null&&i.length&&t.push([o,i[i.length-1].time]),t}function fs(i,n){if(i.length<=n)return i;let e=i.length/n,t=[];for(let s=0;s<n;s++)t.push(i[Math.floor(s*e)]);let o=i[i.length-1];return t[t.length-1]!==o&&t.push(o),t}function jr(i,n,e,t,o){if(i.length<2)return null;let s=n.sunrise?.getTime(),r=n.sunset?.getTime(),a,l;if(s!==void 0&&r!==void 0&&r>s)a=t(s),l=t(r);else if(e==="polar-day")a=i[0].x,l=i[i.length-1].x;else return null;let d=i.filter(u=>u.x>=a-.5&&u.x<=l+.5);return d.length<2?null:{path:In(d,o,!0),cx:(a+l)/2,cy:o,r:Math.max(6,(l-a)/2)}}function Vr(i,n){let e=n?Math.max(i.maxAltitude,n.maxAltitude):i.maxAltitude,t=n?Math.min(i.minAltitude,n.minAltitude):i.minAltitude,o=Math.min(t,-18),s=Math.max(3,(e-o)*.1),r=k(e+s,-18,90.5);return[k(Math.max(-28,t-2),-90,r-6),r]}function Oo(i,n,e=2.2){let t=[0,Ge,Ve,Ze],o=[n.day,n.civil,n.nautical,n.astronomical,n.night];if(i>e/2){let s=k(1-i/12,0,1)*.5;return _o(n.day,n.glow,s)}for(let s=0;s<t.length;s++){let r=t[s]+e/2,a=t[s]-e/2;if(i>=r)return o[s];if(i>a){let l=(r-i)/e;return _o(o[s],o[s+1],l*l*(3-2*l))}}return o[o.length-1]}function Zr(i,n,e,t=24){let o=[];for(let s=0;s<=t;s++){let r=s/t,a=n+e*(1-r);o.push({offset:r,color:Oo(a,i)})}return o}function qr(i,n,e,t,o,s){let r=i.samples;if(r.length<2)return[];let a=[],l=(u,p)=>{u&&!Number.isNaN(u.getTime())&&a.push({time:u.getTime(),color:p})};l(n.astronomicalDawn,e.astronomical),l(n.nauticalDawn,e.nautical),l(n.civilDawn,e.civil),l(n.sunrise,e.glow),l(n.solarNoon,e.day),l(n.sunset,e.glow),l(n.civilDusk,e.civil),l(n.nauticalDusk,e.nautical),l(n.astronomicalDusk,e.astronomical);let d=[{offset:0,color:Oo(r[0].altitude,e)},...a.map(u=>({offset:k((t(u.time)-o)/s,0,1),color:u.color})),{offset:1,color:Oo(r[r.length-1].altitude,e)}];return d.sort((u,p)=>u.offset-p.offset),d}function Io(i){let{profile:n,events:e,now:t,width:o,height:s,palette:r,format:a,showSun:l,showMoon:d,moon:u,moonPath:p,showTwilight:m,twilightLevel:g,animations:b,cardStyle:$,minimal:w,sunMarkerSize:N,uid:_,showAstronomicalLayers:M,currentAltitude:R,countdown:x=null,showGoldenHour:D=!1}=i,v=Math.max(w?60:120,o),H=Math.max(w?12:56,s),T=w?2:4,F=w?2:4,Y=w?2:6,j=!w&&H>=112,Z=j?k(c(H*.13,1),13,20):0,C=T,L=Math.max(10,v-T-F),G=Y,A=Math.max(10,H-Y-Z),O=G+A,[Q,J]=Vr(n,p?.profile??null),$e=Math.max(1,J-Q),V=n.dayStart.getTime(),ce=n.dayEnd.getTime(),he=Math.max(1,ce-V),ee=y=>C+(y-V)/he*L,pe=y=>O-(k(y,-95,95)-Q)/$e*A,I=pe(0),re=k(Math.round(L/1.6),60,361),ue=fs(n.samples,re).map(y=>({x:ee(y.time),y:pe(y.altitude)})),W=Zr(r,Q,$e),ge=qr(n,e,r,ee,C,L),xe=`${_}-area`,Me=`${_}-line`,mt=`${_}-clip`,pt=`${_}-glow`,It=`${_}-sky`,fn=`${_}-soft`,Ye=`${_}-soft-fade`,ke=`${_}-foot`,Je=`${_}-foot-fade`,Ft=`${_}-side`,Gt=`${_}-side-fade`,_e=$==="horizon",Qe=In(ue,_e?c(I,2):O+1,!0),et=On(ue),Ut=p?fs(p.profile.samples,k(Math.round(L/2),40,240)).map(y=>({x:ee(y.time),y:pe(y.altitude)})):null,gt=Ut&&!w?On(Ut):null,We="var(--smc-moon-line, #cbd5e1)",bn=k(c(H*.013,2),1.1,1.9),ft=In(ue,G-1,!0),Se=$==="flat"?.6:_e?.3:1,St=_e?0:c(.15*Se,3),fe=G-1,tt=O+1,Oe=Math.max(1,tt-fe),Kt=k(A*.14,w?1.5:6,18),Wt=k(A*.08,w?1:4,12),Bt=k(L*.02,w?2:6,14),z=k(c(A*.06,1),w?1.5:4,10),ae=c(k(Kt/Oe,0,.45),4),nt=c(1-k(Wt/Oe,0,.45),4),De=C-1,ot=C+L+1,Le=c(k(Bt/Math.max(1,ot-De),0,.4),4),jt=Math.max(16,L*.16),Vt=k(A*.45,9,46),yn=[];A>=34&&(e.sunrise&&yn.push({id:`${_}-glow-rise`,time:e.sunrise,color:r.glow}),e.sunset&&yn.push({id:`${_}-glow-set`,time:e.sunset,color:r.glow}));let Tt=w?null:jr(ue,e,n.polar,ee,I),Jo=`${_}-dome`,me=a.t,$n=[],Zt=y=>{y.time&&!Number.isNaN(y.time.getTime())&&$n.push({secondary:!1,...y})};if(e.sunrise&&Zt({key:"sunrise",time:e.sunrise,label:me("sunrise"),shortLabel:me("sunriseShort"),kind:"sunrise",altitude:0}),e.sunset&&Zt({key:"sunset",time:e.sunset,label:me("sunset"),shortLabel:me("sunsetShort"),kind:"sunset",altitude:0}),m&&(e.civilDawn&&Zt({key:"civilDawn",time:e.civilDawn,label:me("civilDawn"),shortLabel:me("civilDawnShort"),kind:"dawn",altitude:Ge}),e.civilDusk&&Zt({key:"civilDusk",time:e.civilDusk,label:me("civilDusk"),shortLabel:me("civilDuskShort"),kind:"dusk",altitude:Ge}),g==="all"||M)){let y=[["nauticalDawn","dawn","nauticalDawn",Ve],["nauticalDusk","dusk","nauticalDusk",Ve],["astronomicalDawn","dawn","astronomicalDawn",Ze],["astronomicalDusk","dusk","astronomicalDusk",Ze]];for(let[U,B,oe,te]of y){let be=e[U];be&&Zt({key:U,time:be,label:me(oe),shortLabel:me(oe),kind:B,altitude:te,secondary:!0})}}$n.sort((y,U)=>y.time.getTime()-U.time.getTime());let At=k(c(H*.062,1),7.5,10.5),_n=k(c(At+5,1),11,Z||15),Qo=y=>y.secondary?2:y.kind==="sunrise"||y.kind==="sunset"?0:1,Gs=L<240?3:L<340?4:6,ei=w?[]:[...$n].sort((y,U)=>Qo(y)-Qo(U)||y.time.getTime()-U.time.getTime()).slice(0,Math.max(2,Gs)),ti=L<260,Us=!ti&&(ei.length>3||L<340),ni=4,Ks=Math.max(8,At*1.2),bt=[];for(let y of ei){let U=ti?se(y.time,a):Us?y.shortLabel:y.label,B=U.length*At*.56+8,oe=k(ee(y.time.getTime()),C+B/2,C+L-B/2),te=Ie=>bt.some(yt=>Math.abs(yt.x-Ie)<(yt.width+B)/2+ni),be=te(oe)?null:oe;if(be===null)for(let Ie of bt){let yt=(Ie.width+B)/2+ni;for(let $t of[Ie.x+yt,Ie.x-yt])if(Math.abs($t-oe)<=Ks&&$t-B/2>=C-.5&&$t+B/2<=C+L+.5&&!te($t)){be=$t;break}if(be!==null)break}be!==null&&bt.push({x:be,width:B,text:U,secondary:y.secondary})}bt.sort((y,U)=>y.x-U.x);let we=k(ee(t.getTime()),C,C+L),Ws=r.day,it=k(c(H*.16,1),Math.min(2.8,N),N),oi=k(c(it*.22,2),.8,1.4),Be=k(c(it*1.1,1),3.5,7),ii=(y,U)=>A<=U*2?G+A/2:k(pe(y),G+U,O-U),si=ii(R,it),ri=D&&!w?[...gs(n.samples,ln,Hn).map(y=>({range:y,kind:"golden",color:ps,key:"goldenHour"})),...gs(n.samples,Pi,ln).map(y=>({range:y,kind:"blue",color:Br,key:"blueHour"}))].map(({range:y,kind:U,color:B,key:oe})=>{let te=k(ee(y[0]),C,C+L),be=k(ee(y[1]),C,C+L);return{x:te,width:be-te,kind:U,color:B,title:`${me(oe)} ${se(new Date(y[0]),a)}\u2013${se(new Date(y[1]),a)}`}}).filter(y=>y.width>=.5):[],Te=(()=>{if(w||!x)return null;let y=x.time.getTime();if(!(y>t.getTime()))return null;let B=Q<0&&J>0?pe(0):O-1,oe=ee(y),te=k(oe,C,C+L);if(te-we<2)return null;let be=x.body==="moon"?"var(--smc-moon-lit, #f2f5fc)":x.body==="twilight"?r.civil:x.body==="golden"?ps:r.day;return{y:B,endX:te,endsInside:oe<=C+L,color:be}})(),Yn=k(c(H*.016,1),2,3),Ae=(()=>{if(w||!x?.label)return null;let y=At,U=y+5,B=x.label.length*y*.56+10,oe=Math.max(it,3)+3,te=we+oe,be=te+B<=C+L?te:Math.max(C,we-oe-B),Ie=j||bt.length===0?G+1:G+_n+3;return{x:be,y:Ie,width:B,height:U,fontSize:y}})(),Ne=d&&u&&!w?{altitude:u.altitude,y:ii(u.altitude,Be),clamped:u.altitude<Q||u.altitude>J}:null,Bs=Ne?Math.abs(Ne.y-si):Number.POSITIVE_INFINITY,Jn=it+Be+2,qt=Ne?Bs>=it+Be+1?we:we+Jn+Be<=C+L?we+Jn:Math.max(C+Be,we-Jn):null,js=b?"smc-pulse":"",Vs=b?`url(#${pt})`:"",Qn=[{altitude:0,label:me("horizon"),key:"horizon"}];M||g==="all"?Qn.push({altitude:Ge,label:`${me("refCivil")} (\u22126\xB0)`,key:"civil"},{altitude:Ve,label:`${me("refNautical")} (\u221212\xB0)`,key:"nautical"},{altitude:Ze,label:`${me("refAstronomical")} (\u221218\xB0)`,key:"astronomical"}):m&&Qn.push({altitude:Ge,label:`${me("refCivil")} (\u22126\xB0)`,key:"civil"});let Zs=!w&&A>=86&&L>=250,qs=Qn.filter(y=>(!w||y.key==="horizon")&&y.altitude>Q+.5&&y.altitude<J-.5),Xs=k(c(H*.055,1),7.5,9.5),Xt=e.solarNoon,ai=!w&&!!Xt&&n.maxAltitude>0&&A>=104&&L>=220&&M,li=ai?`${me("zenith")} ${se(Xt,a)} \xB7 ${ne(n.maxAltitude,1,a.locale)}`:"",wn=k(c(H*.055,1),7.5,9.5),vn=li.length*wn*.56+10,ci=Xt?k(ee(Xt.getTime()),C+vn/2,C+L-vn/2):0,ui=Xt?pe(n.maxAltitude):0,xn=wn+5,di=k(ui-xn-4,G,Math.max(G,ui+10)),hi=w?1:L<220?4:L<420?6:8,mi=[];for(let y=1;y<hi;y++)mi.push(C+L*y/hi);return f`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${c(v,1)} ${c(H,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${me("title")}"
    >
      <defs>
        <linearGradient id="${xe}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(G,1)}" x2="0" y2="${c(O,1)}">
          ${W.map(y=>f`<stop offset="${c(y.offset*100,3)}%" stop-color="${y.color}" />`)}
        </linearGradient>
        <linearGradient id="${Me}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(G,1)}" x2="0" y2="${c(O,1)}">
          ${W.map(y=>f`<stop offset="${c(y.offset*100,3)}%" stop-color="${y.color===r.day?r.lineDay:r.lineNight}" />`)}
        </linearGradient>
        ${ge.length>=2?f`<linearGradient id="${It}" gradientUnits="userSpaceOnUse"
                x1="${c(C,1)}" y1="0" x2="${c(C+L,1)}" y2="0">
                ${ge.map(y=>f`<stop offset="${c(y.offset*100,3)}%" stop-color="${y.color}" />`)}
              </linearGradient>`:f``}
        ${yn.map(y=>f`<radialGradient id="${y.id}">
              <stop offset="0%" stop-color="${y.color}" stop-opacity="${c(.5*Se,3)}" />
              <stop offset="45%" stop-color="${y.color}" stop-opacity="${c(.2*Se,3)}" />
              <stop offset="100%" stop-color="${y.color}" stop-opacity="0" />
            </radialGradient>`)}
        ${Tt?f`<radialGradient id="${Jo}" gradientUnits="userSpaceOnUse"
                cx="${c(Tt.cx,1)}" cy="${c(Tt.cy,1)}" r="${c(Tt.r,1)}">
                <stop offset="0%" stop-color="${r.glow}" stop-opacity="${c(.3*Se,3)}" />
                <stop offset="45%" stop-color="${r.day}" stop-opacity="${c(.18*Se,3)}" />
                <stop offset="100%" stop-color="${r.day}" stop-opacity="0" />
              </radialGradient>`:f``}
        <linearGradient id="${Ye}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(fe,1)}" x2="0" y2="${c(tt,1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${ae}" stop-color="#ffffff" />
          <stop offset="${nt}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${fn}" maskUnits="userSpaceOnUse"
          x="${c(C-2,1)}" y="${c(fe,1)}"
          width="${c(L+4,1)}" height="${c(Oe,1)}">
          <rect
            x="${c(C-2,1)}" y="${c(fe,1)}"
            width="${c(L+4,1)}" height="${c(Oe,1)}"
            fill="url(#${Ye})" />
        </mask>
        <linearGradient id="${Je}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${c(fe,1)}" x2="0" y2="${c(tt,1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${nt}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${ke}" maskUnits="userSpaceOnUse"
          x="${c(C-2,1)}" y="${c(fe,1)}"
          width="${c(L+4,1)}" height="${c(Oe,1)}">
          <rect
            x="${c(C-2,1)}" y="${c(fe,1)}"
            width="${c(L+4,1)}" height="${c(Oe,1)}"
            fill="url(#${Je})" />
        </mask>
        <linearGradient id="${Gt}" gradientUnits="userSpaceOnUse"
          x1="${c(De,1)}" y1="0" x2="${c(ot,1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${Le}" stop-color="#ffffff" />
          <stop offset="${c(1-Le,4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${Ft}" maskUnits="userSpaceOnUse"
          x="${c(De,1)}" y="${c(fe,1)}"
          width="${c(ot-De,1)}" height="${c(Oe,1)}">
          <rect
            x="${c(De,1)}" y="${c(fe,1)}"
            width="${c(ot-De,1)}" height="${c(Oe,1)}"
            fill="url(#${Gt})" />
        </mask>
        <clipPath id="${mt}">
          <rect x="${c(C-1,1)}" y="${c(G-2,1)}"
            width="${c(L+2,1)}" height="${c(A+4,1)}"
            rx="${z}" ry="${z}" />
        </clipPath>
        ${b?f`<filter id="${pt}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${c(it*.7,2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`:f``}
      </defs>

      <g clip-path="url(#${mt})">
        ${mi.map(y=>f`<line x1="${c(y,1)}" y1="${c(G,1)}" x2="${c(y,1)}" y2="${c(O,1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`)}
        <g mask="url(#${Ft})">
        <path d="${Qe}" fill="url(#${xe})" opacity="0.9" mask="url(#${ke})" />
        <g mask="url(#${fn})">
          ${ge.length>=2&&!_e?f`<path d="${ft}" fill="url(#${It})" opacity="${St}" />`:f``}
          ${yn.map(y=>{let U=k(ee(y.time.getTime()),C,C+L),B=k(I,G,O);return f`<ellipse
                cx="${c(U,1)}" cy="${c(B,1)}"
                rx="${c(jt,1)}" ry="${c(Vt,1)}"
                fill="url(#${y.id})" />`})}
          ${Tt&&!_e?f`<path d="${Tt.path}" fill="url(#${Jo})" opacity="0.95" />`:f``}
        </g>
        </g>
        ${ri.length?f`<g class="hour-bands">
                ${ri.map(y=>f`<g class=${y.kind}>
                    <title>${y.title}</title>
                    <rect
                      x="${c(y.x,1)}" y="${c(G,1)}"
                      width="${c(y.width,1)}" height="${c(A,1)}"
                      fill="${y.color}" opacity="${y.kind==="golden"?.16:.2}" />
                    <rect
                      x="${c(y.x,1)}" y="${c(O-3,1)}"
                      width="${c(y.width,1)}" height="3"
                      fill="${y.color}" opacity="0.85" />
                  </g>`)}
              </g>`:f``}
        ${gt?f`<path
                class="moon-curve"
                data-body="moon"
                d="${gt}"
                fill="none"
                stroke="${We}"
                stroke-width="${bn}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="${_e?.5:.9}"
              >
                <title>${a.t("moonCurve")}</title>
              </path>`:f``}
        ${p&&gt?f`<g class="moon-events">
                ${[[p.rise,"moonrise"],[p.set,"moonset"]].filter(y=>y[0]!==null).map(([y,U])=>{let B=k(ee(y),C,C+L),oe=k(pe(0),G,O),te=k(c(H*.05,1),4,8);return f`<g>
                      <title>${a.t(U)} ${se(new Date(y),a)}</title>
                      <line
                        x1="${c(B,1)}"
                        y1="${c(oe-te,1)}"
                        x2="${c(B,1)}"
                        y2="${c(oe+te,1)}"
                        stroke="${We}"
                        stroke-width="1"
                        stroke-linecap="round"
                        opacity="0.55" />
                      <circle
                        cx="${c(B,1)}"
                        cy="${c(oe,1)}"
                        r="${k(c(H*.022,1),1.8,3)}"
                        fill="none"
                        stroke="${We}"
                        stroke-width="1.3" />
                    </g>`})}
              </g>`:f``}
        <path
          d="${et}"
          fill="none"
          stroke="url(#${Me})"
          stroke-width="${k(c(H*.017,2),1.4,2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${qs.map(y=>{let U=pe(y.altitude),B=y.key==="horizon";return f`<g>
            <line
              x1="${c(C,1)}" y1="${c(U,1)}"
              x2="${c(C+L,1)}" y2="${c(U,1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${B&&_e?1.5:B?1:.6}"
              stroke-dasharray="${B&&_e?"999 0":B?"3 3":"2 4"}"
              opacity="${B&&_e?.9:B?.6:_e?.3:.45}"
            />
            ${Zs?f`<text
                    x="${c(C+3,1)}"
                    y="${c(U-2.5,1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${Xs}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${y.label}</text>`:f``}
          </g>`})}
      </g>

      <g class="event-markers">
        ${$n.map(y=>{let U=k(ee(y.time.getTime()),C,C+L),B=k(pe(y.altitude),G,O),oe=!y.secondary,te=oe?k(c(H*.022,1),1.8,3):1.4,be="var(--smc-marker-strong, rgba(255,255,255,0.9))",Ie="var(--smc-marker-soft, rgba(255,255,255,0.55))",yt=y.kind==="dawn"?"var(--smc-dawn, #a5b4fc)":y.kind==="sunrise"?"var(--smc-sunrise, #fbbf24)":y.kind==="sunset"?"var(--smc-sunset, #fdba74)":"var(--smc-dusk, #d8b4fe)",$t=oe?yt:Ie,Ys=oe?be:Ie,Js=y.kind==="sunrise"||y.kind==="sunset"?f`
                <circle cx="${c(U,1)}" cy="${c(B,1)}" r="${te+1}"
                  fill="${y.kind==="sunrise"?r.lineDay:r.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${c(U-te*2.6,1)}"
                  y1="${c(y.kind==="sunrise"?B+te+2:B-te-2,1)}"
                  x2="${c(U+te*2.6,1)}"
                  y2="${c(y.kind==="sunrise"?B+te+2:B-te-2,1)}"
                  stroke="${be}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `:f`<circle cx="${c(U,1)}" cy="${c(B,1)}" r="${te}"
                  fill="${Ys}" opacity="0.85" />`;return f`<g>
            <line
              x1="${c(U,1)}" y1="${c(G,1)}"
              x2="${c(U,1)}" y2="${c(O,1)}"
              stroke="${$t}" stroke-width="${oe?1:.7}"
              stroke-dasharray="3 3" opacity="${oe?.5:.25}" />
            ${Js}
          </g>`})}
      </g>

      ${Te?f`<g class="countdown-track">
              <title>${x.title}</title>
              <line
                x1="${c(we,1)}" y1="${c(Te.y,1)}"
                x2="${c(Te.endX,1)}" y2="${c(Te.y,1)}"
                stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                stroke-width="${c(Yn+2,1)}"
                stroke-linecap="round"
                opacity="0.8" />
              <line
                x1="${c(we,1)}" y1="${c(Te.y,1)}"
                x2="${c(Te.endX,1)}" y2="${c(Te.y,1)}"
                stroke="${Te.color}"
                stroke-width="${Yn}"
                stroke-linecap="round" />
              ${Te.endsInside?f`<circle
                      cx="${c(Te.endX,1)}"
                      cy="${c(Te.y,1)}"
                      r="${c(Yn+.8,1)}"
                      fill="${Te.color}"
                      stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                      stroke-width="0.8" />`:f``}
            </g>`:f``}

      <g class="now-marker">
        <line
          x1="${c(we,1)}" y1="${c(G,1)}"
          x2="${c(we,1)}" y2="${c(O,1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${k(c(H*.012,2),1,1.8)}"
          opacity="0.85" />
        ${l?f`<g class="now-sun ${js}" filter="${Vs}">
                <title>${a.t("chartSunNow",{altitude:ne(R,1,a.locale)})}</title>
                <circle
                  cx="${c(we,1)}"
                  cy="${c(si,1)}"
                  r="${it}"
                  fill="${Ws}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${oi}"
                />
              </g>`:f``}
        ${Ne&&qt!==null&&u?f`<g class="now-moon">
                <title>${a.t("chartMoonNow",{altitude:ne(Ne.altitude,1,a.locale)})}${Ne.clamped?` ${a.t("chartOutside")}`:""}</title>
                ${qt===we?f``:f`<line
                        x1="${c(we,1)}"
                        y1="${c(Ne.y,1)}"
                        x2="${c(qt,1)}"
                        y2="${c(Ne.y,1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`}
                <circle
                  cx="${c(qt,1)}"
                  cy="${c(Ne.y,1)}"
                  r="${c(Be+.6,1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${oi}" />
                <g
                  transform="translate(${c(qt-Be,1)} ${c(Ne.y-Be,1)})"
                  opacity="${Ne.clamped?.6:1}"
                >
                  ${Ue({size:c(Be*2,1),illumination:u.illumination,brightLimbAngle:u.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:!1,uid:`${_}-moon-now`})}
                </g>
              </g>`:f``}
      </g>

      ${ai?f`<g class="zenith-chip">
              <rect
                x="${c(ci-vn/2,1)}"
                y="${c(di,1)}"
                width="${c(vn,1)}"
                height="${c(xn,1)}"
                rx="${c(xn/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${c(ci,1)}"
                y="${c(di+xn/2+wn*.36,1)}"
                text-anchor="middle"
                font-size="${wn}"
                fill="var(--smc-label-color, #ffffff)"
              >${li}</text>
            </g>`:f``}

      ${Ae?f`<g class="countdown-label">
              <title>${x.title}</title>
              <rect
                x="${c(Ae.x,1)}"
                y="${c(Ae.y,1)}"
                width="${c(Ae.width,1)}"
                height="${c(Ae.height,1)}"
                rx="${c(Ae.height/2.6,1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.9" />
              <text
                x="${c(Ae.x+Ae.width/2,1)}"
                y="${c(Ae.y+Ae.height/2+Ae.fontSize*.36,1)}"
                text-anchor="middle"
                font-size="${Ae.fontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${x.label}</text>
            </g>`:f``}

      ${j?f`<line
              x1="${c(C,1)}" y1="${c(O+.5,1)}"
              x2="${c(C+L,1)}" y2="${c(O+.5,1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`:f``}

      ${bt.length?f`<g class="event-labels" font-size="${At}">
              ${bt.map(y=>{let U=j?O+2:G;return f`<g>
                  <rect
                    x="${c(y.x-y.width/2,1)}"
                    y="${c(U,1)}"
                    width="${c(y.width,1)}"
                    height="${c(_n,1)}"
                    rx="${c(_n/2.6,1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${y.secondary?.6:.88}" />
                  <text
                    x="${c(y.x,1)}"
                    y="${c(U+_n/2+At*.36,1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${y.secondary?.75:1}"
                  >${y.text}</text>
                </g>`})}
            </g>`:f``}
    </svg>
  `}var Xr=50,Yr=44,bs=[[0,"#8f9fd6","#f4a97c"],[12,"#9aaedf","#f7bf8e"],[30,"#a8c4ea","#f6dcb4"],[52,"#b4cdee","#eef0f4"],[66,"#8d9cd8","#d9c3dc"],[78,"#3c4590","#6b6fb4"],[90,"#232a68","#3b428a"],[100,"#1b2159","#323a80"]],Jr=[[.13,.55,90,"#f6c2c0",.55],[.3,.42,60,"#fbd9cf",.45],[.58,.3,85,"#ffffff",.55],[.47,.14,50,"#ffffff",.35]];function ct(i){let n=i;return()=>{n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var h=i=>String(c(i,1));function ys(i,n,e,t,o,s,r,a){let l=-6,d=`M${h(l)},${h(t)}`;for(;l<n+6;){let u=10+i()*28,p=o+i()*(s-o),m=e-p,g=i();if(d+=`L${h(l)},${h(m)}`,g<.12?d+=`L${h(l+u/2)},${h(m-u*.45)}L${h(l+u)},${h(m)}`:g<.2?d+=`A${h(u/2)},${h(u*.42)} 0 0 1 ${h(l+u)},${h(m)}`:g<.28?d+=`L${h(l+u*.42)},${h(m)}L${h(l+u/2)},${h(m-p*.55)}L${h(l+u*.58)},${h(m)}L${h(l+u)},${h(m)}`:g<.38?d+=`L${h(l+u*.6)},${h(m)}L${h(l+u*.6)},${h(m-12)}L${h(l+u*.64)},${h(m-12)}L${h(l+u*.64)},${h(m)}L${h(l+u)},${h(m)}`:g<.48?d+=`L${h(l+u*.25)},${h(m)}L${h(l+u*.25)},${h(m-7)}L${h(l+u*.75)},${h(m-7)}L${h(l+u*.75)},${h(m)}L${h(l+u)},${h(m)}`:d+=`L${h(l+u)},${h(m)}`,r>0&&l>n*.7)for(let b=m+5;b<e-4;b+=6)for(let $=l+3;$<l+u-3;$+=5)i()<r&&a.push({x:$,y:b,w:1.8,h:2.4,opacity:.55+i()*.4});if(l+=u,i()<.18){let b=4+i()*10,$=e-o*.4;d+=`L${h(l)},${h($)}L${h(l+b)},${h($)}`,l+=b}}return`${d}L${h(l)},${h(t)}Z`}function $s(i,n,e,t,o,s){let r=Array.from({length:s},(d,u)=>({x:(u+.2+i()*.6)/s*n,h:o*(.45+i()*.55),w:n/s*(.9+i()*.9)})),a=Math.max(40,Math.round(n/6)),l=`M-4,${h(t)}`;for(let d=0;d<=a;d++){let u=-4+(n+8)*d/a,p=o*.12;for(let m of r)p=Math.max(p,m.h*(1-Math.abs(u-m.x)/m.w));p+=(i()-.5)*o*.06,l+=`L${h(u)},${h(e-k(p,2,o))}`}return`${l}L${h(n+4)},${h(t)}Z`}function _s(i,n,e,t,o,s){let r=d=>Math.sin(d/n*Math.PI*1.6+.6)*o*.35,a=`M-4,${h(t)}L-4,${h(e-r(-4))}`,l=-4;for(;l<n+4;){let d=o+i()*(s-o),u=e-r(l);if(i()<.72){let p=d*(.42+i()*.12);a+=`L${h(l)},${h(u)}L${h(l+p*.5)},${h(u-d)}L${h(l+p)},${h(u)}`,l+=p*(.55+i()*.25)}else{let p=d*.32;a+=`L${h(l)},${h(u)}L${h(l)},${h(u-d*.35)}A${h(p)},${h(p)} 0 1 1 ${h(l+p*1.6)},${h(u-d*.35)}L${h(l+p*1.6)},${h(u)}`,l+=p*1.6+i()*4}}return`${a}L${h(n+4)},${h(t)}Z`}function Qr(i,n,e,t,o){let s=[];switch(i){case"city":{let r=ys(ct(11),n,e,t,18*o,44*o,0,s),a=n*.8,l=84*o,d=`M${h(a-1.6)},${h(e)}L${h(a-1.6)},${h(e-l)}L${h(a-.6)},${h(e-l)}L${h(a-.6)},${h(e-l-16)}L${h(a+.6)},${h(e-l-16)}L${h(a+.6)},${h(e-l)}L${h(a+1.6)},${h(e-l)}L${h(a+1.6)},${h(e)}ZM${h(a+5.5)},${h(e-l*.72)}A5.5,5.5 0 1 0 ${h(a-5.5)},${h(e-l*.72)}A5.5,5.5 0 1 0 ${h(a+5.5)},${h(e-l*.72)}Z`,u=ys(ct(23),n,e,t,8*o,28*o,.07,s);return{back:`${r}${d}`,front:u,lights:s,waterTop:null}}case"mountains":return{back:$s(ct(5),n,e,t,78*o,6),front:$s(ct(9),n,e+2,t,40*o,9),lights:s,waterTop:null};case"forest":return{back:_s(ct(17),n,e-6*o,t,22*o,46*o),front:_s(ct(29),n,e+4*o,t,12*o,28*o),lights:s,waterTop:null};case"coast":{let r=e-10*o,a=ct(31),l=`M-4,${h(r)}`;for(let b=0;b<=24;b++){let $=-4+n*.55*b/24,w=Math.sin(b/24*Math.PI)*30*o+a()*4*o;l+=`L${h($)},${h(r-w)}`}l+=`L${h(n*.55)},${h(r)}Z`;let d=n*.72,u=n*.84,p=r-14*o,m=46*o,g=`M${h(d)},${h(r)}Q${h(d+n*.06)},${h(p)} ${h(u-10)},${h(p)}L${h(n+4)},${h(p+2)}L${h(n+4)},${h(r)}ZM${h(u-4.5)},${h(p)}L${h(u-2.8)},${h(p-m)}L${h(u+2.8)},${h(p-m)}L${h(u+4.5)},${h(p)}ZM${h(u-3.6)},${h(p-m)}L${h(u)},${h(p-m-8)}L${h(u+3.6)},${h(p-m)}Z`;return s.push({x:u-1.6,y:p-m-4.5,w:3.2,h:3,opacity:.95}),{back:l,front:g,lights:s,waterTop:r}}default:return null}}var pn=new Map;function ea(i,n,e,t,o){let s=[i,c(n,0),c(e,0),c(t,0),o].join("|");return pn.has(s)||(pn.size>24&&pn.clear(),pn.set(s,Qr(i,n,e,t,o))),pn.get(s)??null}function ws(i){let{profile:n,events:e,now:t,format:o,scene:s,showSun:r,showMoon:a,moonPath:l,moon:d,currentAltitude:u,animations:p,uid:m,fullMoonPath:g=!1}=i,b=o.t,$=Math.max(160,i.width),w=Math.max(140,i.height),N=$<480,_=N?Yr:Xr,M=14,R=w-_-4,x=n.samples,D=n.dayStart.getTime(),v=n.dayEnd.getTime(),H=Math.max(1,v-D),T=z=>(z-D)/H*$,F=g&&a&&l?.profile.samples.length?Math.max(...l.profile.samples.map(z=>z.altitude)):-90,Y=Math.max(12,n.maxAltitude+8,F+6),j=-16,Z=z=>M+(Y-z)/(Y-j)*(R-M),C=Z(0),L=k(T(t.getTime()),0,$),G=z=>z.map((ae,nt)=>`${nt?"L":"M"}${h(T(ae.time))},${h(Z(ae.altitude))}`).join(""),A={skyTop:`${m}-sky-top`,skyHor:`${m}-sky-hor`,horFade:`${m}-hor-fade`,horMask:`${m}-hor-mask`,soft:`${m}-soft`,softer:`${m}-softer`,sunGlow:`${m}-sun-glow`,sunCore:`${m}-sun-core`,moonGlow:`${m}-moon-glow`,dayFill:`${m}-day-fill`,dayFade:`${m}-day-fade`,nightFill:`${m}-night-fill`,curve:`${m}-curve`,band:`${m}-band`,horizonLine:`${m}-horizon-line`,back:`${m}-scene-back`,front:`${m}-scene-front`,water:`${m}-water`,above:`${m}-above`,below:`${m}-below`,past:`${m}-past`,future:`${m}-future`},O=ct(7),Q=[];for(let z=0;z<(N?45:90);z++){let ae=O()*$,nt=M+O()*(C-M-6),De=k((ae/$-.68)/.12,0,1)*(.4+O()*.6),ot=.5+O()*.9;De>.04&&Q.push(f`<circle cx="${h(ae)}" cy="${h(nt)}" r="${c(ot,2)}" fill="#fff"
        opacity="${c(De,2)}" />`)}let J=Math.min(1,$/740),$e=Jr.map(([z,ae,nt,De,ot])=>{let Le=nt*J,jt=z*$,Vt=M+ae*(C-M);return f`<g opacity="${ot}" fill="${De}" filter="url(#${A.soft})">
      <ellipse cx="${h(jt)}" cy="${h(Vt)}" rx="${h(Le)}" ry="${h(Le*.22)}" />
      <ellipse cx="${h(jt-Le*.35)}" cy="${h(Vt+3)}" rx="${h(Le*.5)}" ry="${h(Le*.18)}" />
      <ellipse cx="${h(jt+Le*.3)}" cy="${h(Vt-4)}" rx="${h(Le*.45)}" ry="${h(Le*.2)}" />
    </g>`}),V=w-_+8,he=ea(s,$,V,w,N?.8:1),ee=x.length?G(x):"",pe=x[0],I=x[x.length-1],re=x.length?`${ee}L${h(T(I.time))},${h(C)}L${h(T(pe.time))},${h(C)}Z`:"",ue=x.length?`${ee}L${h(T(I.time))},${h(w)}L${h(T(pe.time))},${h(w)}Z`:"",W=a&&l?.profile.samples.length?G(l.profile.samples):"",ge=[{time:e.sunrise,label:b("sunrise"),short:b("sunriseShort"),dashed:!0},{time:e.solarNoon,label:b("sceneNoon"),short:b("sceneNoonShort"),dashed:!1},{time:e.sunset,label:b("sunset"),short:b("sunsetShort"),dashed:!0}].filter(z=>z.time instanceof Date),xe=N?34:48,Me=[20,10,-10].filter(z=>z<Y-2&&z>j+2),mt=N?78:92,pt=k(Z(u),M+12,w-_-6),It=u>-2,fn=N?30:40,Ye=N?11:15,ke=N?9:12,Je=d?.altitude??0,Ft=M+ke+2,Gt=w-_-ke-4,_e=Z(Je),Qe=_e>Gt?"bottom":_e<Ft?"top":null,et=k(_e,Ft,Gt),Ut=Je>0,gt=Ye+ke+6,We=r&&Math.abs(et-pt)<Ye+ke+4?L+gt+ke<=$?L+gt:L-gt:L,bn=Qe?`${Qe==="bottom"?"\u25BC":"\u25B2"} ${ne(Je,0,o.locale)}`:"",ft=N?10.5:11.5,Se=ft+8,St=Math.round(ft+2),fe=bn.length*ft*.62+14+St+5,tt=Qe==="bottom"?w-_-Se-8:M+2,Oe=r&&Math.abs(pt-(tt+Se/2))<Ye+Se/2+2,Kt=Ye+fe/2+6,Wt=k(Oe?L+Kt+fe/2<=$-4?L+Kt:L-Kt:L,fe/2+4,$-fe/2-4),Bt=k(C/w,0,1);return f`
    <svg
      class="scene-chart"
      width="${h($)}"
      height="${h(w)}"
      viewBox="0 0 ${h($)} ${h(w)}"
      role="img"
      aria-label="${b("title")}"
    >
      <defs>
        <linearGradient id="${A.skyTop}" x1="0" x2="1" y1="0" y2="0">
          ${bs.map(([z,ae])=>f`<stop offset="${z}%" stop-color="${ae}" />`)}
        </linearGradient>
        <linearGradient id="${A.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${bs.map(([z,,ae])=>f`<stop offset="${z}%" stop-color="${ae}" />`)}
        </linearGradient>
        <linearGradient id="${A.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${c(Bt,3)}" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask id="${A.horMask}">
          <rect width="${h($)}" height="${h(w)}" fill="url(#${A.horFade})" />
        </mask>
        <filter id="${A.soft}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="${A.softer}" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="${A.sunGlow}">
          <stop offset="0" stop-color="#ffe9a3" stop-opacity="0.95" />
          <stop offset="0.45" stop-color="#ffd36b" stop-opacity="0.45" />
          <stop offset="1" stop-color="#ffc24a" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="${A.sunCore}" cx="0.4" cy="0.38">
          <stop offset="0" stop-color="#fffbe8" />
          <stop offset="0.6" stop-color="#ffe17a" />
          <stop offset="1" stop-color="#f7b733" />
        </radialGradient>
        <radialGradient id="${A.moonGlow}">
          <stop offset="0" stop-color="#dfe4ff" stop-opacity="0.35" />
          <stop offset="1" stop-color="#dfe4ff" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="${A.dayFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(Z(n.maxAltitude))}" y2="${h(C)}">
          <stop offset="0" stop-color="#ffcf5c" stop-opacity="0.95" />
          <stop offset="0.7" stop-color="#ffd27a" stop-opacity="0.8" />
          <stop offset="1" stop-color="#ffe7b8" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient id="${A.dayFade}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(C-4)}" y2="${h(C+36)}">
          <stop offset="0" stop-color="#ffe2a6" stop-opacity="0.75" />
          <stop offset="1" stop-color="#ffe2a6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${A.nightFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(C)}" y2="${h(w)}">
          <stop offset="0" stop-color="#a9b4ee" stop-opacity="0" />
          <stop offset="0.22" stop-color="#7f8fe0" stop-opacity="0.45" />
          <stop offset="0.55" stop-color="#4a5ab8" stop-opacity="0.8" />
          <stop offset="1" stop-color="#25307a" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="${A.curve}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${h(M)}" y2="${h(w)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${c(Bt,3)}" stop-color="#f59e0b" />
          <stop offset="${c(Math.min(1,Bt+.001),3)}" stop-color="#b9c3ff" />
          <stop offset="1" stop-color="#b9c3ff" />
        </linearGradient>
        <linearGradient id="${A.band}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" stop-opacity="0" />
          <stop offset="0.45" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" />
        </linearGradient>
        <linearGradient id="${A.horizonLine}" gradientUnits="userSpaceOnUse"
          x1="0" x2="${h($)}" y1="0" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0.9" />
          <stop offset="0.85" stop-color="#fff" stop-opacity="0.75" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${A.back}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#8a6f9e" />
          <stop offset="0.5" stop-color="#5f6aa8" />
          <stop offset="1" stop-color="#2a3170" />
        </linearGradient>
        <linearGradient id="${A.front}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#6f5a88" />
          <stop offset="0.5" stop-color="#3f4888" />
          <stop offset="1" stop-color="#1c2257" />
        </linearGradient>
        <linearGradient id="${A.water}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#e9a88f" />
          <stop offset="0.45" stop-color="#9fb6e3" />
          <stop offset="0.75" stop-color="#5865a8" />
          <stop offset="1" stop-color="#262d6c" />
        </linearGradient>
        <clipPath id="${A.above}"><rect width="${h($)}" height="${h(C)}" /></clipPath>
        <clipPath id="${A.below}">
          <rect y="${h(C)}" width="${h($)}" height="${h(w-C)}" />
        </clipPath>
        <clipPath id="${A.past}"><rect width="${h(L)}" height="${h(w)}" /></clipPath>
        <clipPath id="${A.future}">
          <rect x="${h(L)}" width="${h($-L)}" height="${h(w)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${h($)}" height="${h(w)}" fill="url(#${A.skyTop})" />
        <rect width="${h($)}" height="${h(w)}" fill="url(#${A.skyHor})"
          mask="url(#${A.horMask})" />
        ${Q}
        ${$e}
      </g>

      ${r&&re?f`<g class="day-area">
              <path d="${re}" fill="url(#${A.dayFill})" clip-path="url(#${A.above})"
                opacity="0.92" />
              <path d="${ue}" fill="url(#${A.nightFill})" clip-path="url(#${A.below})" />
              <g clip-path="url(#${A.below})">
                <path d="${ue}" fill="url(#${A.dayFade})" filter="url(#${A.softer})" />
              </g>
            </g>`:f``}

      ${he?f`<g class="silhouette" data-scene="${s}">
              ${he.waterTop!==null?f`<rect class="water" x="0" y="${h(he.waterTop)}" width="${h($)}"
                      height="${h(w-he.waterTop)}" fill="url(#${A.water})" opacity="0.55" />
                    ${[0,1,2,3].map(z=>f`<line x1="${h($*(.08+z*.21))}"
                        x2="${h($*(.16+z*.21))}"
                        y1="${h(he.waterTop+5+z*3)}" y2="${h(he.waterTop+5+z*3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`)}`:f``}
              <path d="${he.back}" fill="url(#${A.back})" opacity="0.35" />
              <path d="${he.front}" fill="url(#${A.front})" opacity="0.6" />
              ${he.lights.map(z=>f`<rect x="${h(z.x)}" y="${h(z.y)}" width="${z.w}"
                  height="${z.h}" fill="#ffd98a" opacity="${c(z.opacity,2)}" />`)}
            </g>`:f``}

      <line class="horizon" x1="${mt}" x2="${h($)}" y1="${h(C)}" y2="${h(C)}"
        stroke="url(#${A.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${ge.map(z=>{let ae=h(T(z.time.getTime()));return z.dashed?f`<line x1="${ae}" x2="${ae}" y1="0" y2="${h(w-_+6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`:f`<line x1="${ae}" x2="${ae}" y1="0" y2="${h(w-_+6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`})}
      </g>

      ${W?f`<path class="moon-curve" d="${W}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`:f``}

      ${r&&ee?f`<g class="sun-path">
              <g clip-path="url(#${A.past})">
                <path d="${ee}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${A.future})">
                <path d="${ee}" fill="none" stroke="url(#${A.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[e.sunrise,e.sunset].filter(z=>z instanceof Date).map(z=>f`<circle cx="${h(T(z.getTime()))}" cy="${h(C)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${z.getTime()<t.getTime()?2:3.2}" />`)}
            </g>`:f``}

      ${a&&d&&Qe?f`<g class="moon-edge" data-edge="${Qe}">
              <title>${b("chartMoonNow",{altitude:ne(Je,1,o.locale)})} ${b("chartOutside")}</title>
              <rect x="${h(Wt-fe/2)}" y="${h(tt)}" width="${h(fe)}"
                height="${h(Se)}" rx="${h(Se/2)}" fill="rgba(22, 26, 64, 0.62)"
                stroke="rgba(255,255,255,0.55)" stroke-width="0.8" />
              <g transform="translate(${h(Wt-fe/2+5)} ${h(tt+(Se-St)/2)})">
                ${Ue({size:St,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#3a4280",texture:!1,uid:`${m}-edge-moon`})}
              </g>
              <text x="${h(Wt+(St+5)/2)}"
                y="${h(tt+Se/2+ft*.36)}"
                text-anchor="middle" font-size="${ft}" fill="#f2f4ff">${bn}</text>
            </g>`:f``}

      ${a&&d&&!Qe?f`<g class="now-moon" opacity="${Ut?1:.7}">
              <title>${b("chartMoonNow",{altitude:ne(Je,1,o.locale)})}</title>
              ${Ut?f`<circle cx="${h(We)}" cy="${h(et)}" r="${ke*2.1}"
                      fill="url(#${A.moonGlow})" />`:f``}
              ${We!==L?f`<line x1="${h(L)}" y1="${h(et)}" x2="${h(We)}" y2="${h(et)}"
                      stroke="rgba(255,255,255,0.7)" stroke-width="0.8" />`:f``}
              <circle cx="${h(We)}" cy="${h(et)}" r="${ke+1.2}" fill="none"
                stroke="rgba(255,255,255,0.75)" stroke-width="1.2" />
              <g transform="translate(${h(We-ke)} ${h(et-ke)})">
                ${Ue({size:ke*2,illumination:d.illumination,brightLimbAngle:d.brightLimbAngle,litColor:"#f7f8ff",darkColor:"#2b3270",texture:!1,uid:`${m}-now-moon`})}
              </g>
            </g>`:f``}

      ${r?f`<g class="now-sun ${p?"smc-pulse":""}">
              <title>${b("chartSunNow",{altitude:ne(u,1,o.locale)})}</title>
              <circle cx="${h(L)}" cy="${h(pt)}" r="${fn}"
                fill="url(#${A.sunGlow})" opacity="${It?1:.35}" />
              <circle cx="${h(L)}" cy="${h(pt)}" r="${Ye}" fill="url(#${A.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${It?1:.55}" />
            </g>`:f``}

      <g class="axis">
        <text x="10" y="${h(M+4)}" class="scene-axis">${b("elevation")}</text>
        ${Me.map(z=>f`<text x="10" y="${h(Z(z)+4)}" class="scene-axis">${z>0?z:`\u2212${-z}`}°</text>
            <line x1="${N?34:40}" x2="${N?40:48}" y1="${h(Z(z))}"
              y2="${h(Z(z))}" stroke="#fff" opacity="0.8" />`)}
        <text x="10" y="${h(C-5)}" class="scene-axis strong">${b("horizon")}</text>
      </g>

      <rect class="band" x="0" y="${h(w-_-18)}" width="${h($)}"
        height="${h(_+18)}" fill="url(#${A.band})" />
      <g class="event-labels">
        ${ge.map(z=>{let ae=h(k(T(z.time.getTime()),xe,$-xe));return f`<text x="${ae}" y="${h(w-_+22)}" text-anchor="middle"
              class="scene-time">${se(z.time,o)}</text>
            <text x="${ae}" y="${h(w-_+38)}" text-anchor="middle"
              class="scene-label">${N?z.short:z.label}</text>`})}
      </g>
    </svg>
  `}var X=i=>String(c(i,1));function vs(i){let{profile:n,events:e,now:t,format:o,showSun:s,showMoon:r,moonPath:a,sunAltitude:l,moonAltitude:d,sunSize:u,moonSize:p}=i,m=o.t,g=Math.max(160,i.width),b=Math.max(100,i.height),w=g<480?64:92,N=6,_=34,R=b-30-8,x=Math.max(40,g-w-N),D=n.dayStart.getTime(),v=n.dayEnd.getTime(),H=Math.max(1,v-D),T=I=>w+(I-D)/H*x,F=r?a?.profile.samples??[]:[],Y=F.reduce((I,re)=>Math.max(I,re.altitude),-90),j=Math.max(8,s?n.maxAltitude:-90,Y)+4,Z=-Math.max(14,j*.85),C=4,L=I=>Z+C*Math.log1p(Math.exp((I-Z)/C)),G=I=>_+(j-Math.min(j,L(I)))/(j-Z)*(R-_),A=G(0),O=T(t.getTime()),Q=G(l),J=G(d),$e=s&&Math.abs(J-Q)<u+p+2,V=u+p+6,ce=$e?O+V+p<=g-N?O+V:O-V:O,he=I=>I.map((re,ue)=>`${ue?"L":"M"}${X(T(re.time))},${X(G(re.altitude))}`).join(""),ee=[0,6,12,18,24].map(I=>{let re=w+I/24*x,ue=I===0?"start":I===24?"end":"middle";return f`<text x="${X(re+(I===0?-4:I===24?4:0))}" y="${X(b-8)}" text-anchor="${ue}"
      class="clean-axis">${String(I).padStart(2,"0")}:00</text>`}),pe=[e.sunrise,e.sunset].filter(I=>I instanceof Date);return f`
    <svg
      class="clean-chart"
      width="${X(g)}"
      height="${X(b)}"
      viewBox="0 0 ${X(g)} ${X(b)}"
      role="img"
      aria-label="${m("title")}"
    >
      <text x="0" y="${X(A+4)}" class="clean-horizon-label">${m("horizon")}</text>
      <line class="clean-horizon" x1="${w}" x2="${X(g-N)}" y1="${X(A)}"
        y2="${X(A)}" stroke-dasharray="6 6" />
      <line class="clean-now" x1="${X(O)}" x2="${X(O)}" y1="${X(_-8)}" y2="${X(R)}" />
      <text x="${X(O)}" y="${X(_-14)}" text-anchor="middle" class="clean-now-label">${m("cleanNow")}</text>
      ${F.length?f`<path class="clean-moon-path" d="${he(F)}" />`:f``}
      ${s&&n.samples.length?f`<path class="clean-sun-path" d="${he(n.samples)}" />
            ${pe.map(I=>f`<circle class="clean-sun-mark" cx="${X(T(I.getTime()))}"
                cy="${X(A)}" r="6" />`)}`:f``}
      ${F.length?f`${ce!==O?f`<line class="clean-moon-link" x1="${X(O)}" x2="${X(ce)}"
                    y1="${X(J)}" y2="${X(J)}" />`:f``}<circle class="clean-moon-now" cx="${X(ce)}" cy="${X(J)}"
              r="${X(p)}">
              <title>${m("chartMoonNow",{altitude:ne(d,1,o.locale)})}</title>
            </circle>`:f``}
      ${s?f`<circle class="clean-sun-now" cx="${X(O)}" cy="${X(Q)}"
              r="${X(u)}">
              <title>${m("chartSunNow",{altitude:ne(l,1,o.locale)})}</title>
            </circle>`:f``}
      ${ee}
    </svg>
  `}function Fo(i){let n=Math.sin(i*127.1+311.7)*43758.5453;return n-Math.floor(n)}function ta(i,n,e){let t=[];for(let o=0;o<n;o++){let s=Math.sqrt(Fo(i*7.13+o*1.37))*e*.96,r=Fo(i*3.71+o*2.11)*360,a=qe({x:0,y:0},s,r),l=Fo(i*5.19+o*4.53);t.push({x:a.x,y:a.y,r:.35+l*.75,opacity:.16+l*.34})}return t}function Go(i,n){return k((90-i)/90*n,0,n)}function Uo(i){let{width:n,height:e,sun:t,moon:o,sunTrack:s,moonPhase:r,showSun:a,showMoon:l,palette:d,format:u,animations:p,uid:m,showCardinals:g=!0,seed:b=0}=i,$=Math.max(80,n),w=Math.max(80,e),N=6,_={x:$/2,y:w/2},M=Math.max(10,Math.min($,w)/2-N),R=`${m}-dome`,x=`${m}-dome-clip`,D=[{key:u.t("compassNorth"),azimuth:0},{key:u.t("compassEast"),azimuth:90},{key:u.t("compassSouth"),azimuth:180},{key:u.t("compassWest"),azimuth:270}],v=k(c(M*.17,1),7,11),H=t?t.altitude>0:!1,T=k(c(M*.11,1),4,11),F=t?qe(_,Go(t.altitude,M),t.azimuth):null,Y=a&&t&&F,j=o?o.altitude>0:!1,Z=k(c(M*.24,1),10,22),C=o?qe(_,Go(o.altitude,M),o.azimuth):null,L=l&&o&&C&&r,G=g&&M>=42,A=k(c(M*.14,1),6.5,9),O=[{altitude:30,radius:M*(60/90)},{altitude:60,radius:M*(30/90)}],J=(t?.altitude??-90)<-6?ta(Math.max(1,Math.round(b)),46,M):[],$e=s.filter(V=>V.altitude>=-8).map(V=>qe(_,Go(V.altitude,M),V.azimuth));return f`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${c($,1)} ${c(w,1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${u.t("skyView")}"
    >
      <defs>
        <radialGradient id="${R}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${d.skyTop}" />
          <stop offset="100%" stop-color="${d.skyBottom}" />
        </radialGradient>
        <clipPath id="${x}">
          <circle cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(M,1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(M,1)}"
        fill="url(#${R})" opacity="0.55" />

      <g clip-path="url(#${x})">
        ${J.length?f`<g class="stars">
                ${J.map(V=>f`<circle
                      cx="${c(_.x+V.x,1)}"
                      cy="${c(_.y+V.y,1)}"
                      r="${c(V.r,2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${c(V.opacity,2)}" />`)}
              </g>`:f``}
        ${O.map(V=>f`<circle
              cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(V.radius,1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`)}
        <line
          x1="${c(_.x-M,1)}" y1="${c(_.y,1)}"
          x2="${c(_.x+M,1)}" y2="${c(_.y,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${c(_.x,1)}" y1="${c(_.y-M,1)}"
          x2="${c(_.x,1)}" y2="${c(_.y+M,1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${$e.length>1?f`<path
                d="M${$e.map(V=>`${c(V.x,1)} ${c(V.y,1)}`).join(" L")}"
                fill="none"
                stroke="${d.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`:f``}
      </g>

      <circle
        cx="${c(_.x,1)}" cy="${c(_.y,1)}" r="${c(M,1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${G?f`<g
              font-size="${A}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${O.map(V=>{let ce=qe(_,V.radius,45);return f`<text
                  x="${c(ce.x,1)}"
                  y="${c(ce.y+A*.35,1)}"
                >${V.altitude}°</text>`})}
            </g>`:f``}

      ${g?f`<g font-size="${v}" fill="var(--smc-muted-color)" opacity="0.7">
              ${D.map(V=>{let ce=qe(_,M*.87,V.azimuth);return f`<text
                  x="${c(ce.x,1)}"
                  y="${c(ce.y+v*.35,1)}"
                  text-anchor="middle"
                >${V.key}</text>`})}
            </g>`:f``}

      ${Y&&H&&F?f`<g class="${p?"smc-pulse":""}">
              <circle
                cx="${c(F.x,1)}" cy="${c(F.y,1)}" r="${T}"
                fill="${d.lineDay}" opacity="0.28" />
              <circle
                cx="${c(F.x,1)}" cy="${c(F.y,1)}" r="${c(T*.55,1)}"
                fill="${d.lineDay}" />
            </g>`:f``}
      ${a&&t&&!H?vo(_,M,t.azimuth,d.lineNight):f``}

      ${L&&j&&C&&r?f`<g transform="translate(${c(C.x-Z/2,1)} ${c(C.y-Z/2,1)})">
              ${Ue({size:Z,illumination:r.illumination,brightLimbAngle:r.brightLimbAngle,litColor:"var(--smc-moon-lit, #f2f5fc)",darkColor:"var(--smc-moon-dark, rgba(110,124,164,0.45))",texture:Z>=16,uid:`${m}-moon`})}
            </g>`:f``}
      ${l&&o&&!j?vo(_,M,o.azimuth,"var(--smc-moon-lit, #e6ebf7)"):f``}
    </svg>
  `}function Ko(i,n,e){i.dispatchEvent(new CustomEvent(n,{detail:e,bubbles:!0,composed:!0}))}function na(i){if(typeof i!="string")return null;let[n,e]=i.split(".",2);return!n||!e?null:[n,e]}function xs(i,n,e,t,o){typeof i?.callService=="function"&&i.callService(n,e,t,o)}function Wo(i,n,e,t,o){if(!t){o?.();return}switch(t.action){case"none":return;case"open-popup":o?.();return;case"more-info":Ko(i,"hass-more-info",{entityId:t.entity??e.entity});return;case"navigate":{let s=typeof t.navigation_path=="string"?t.navigation_path:"";if(s==="")return;history.pushState(null,"",s),Ko(window,"location-changed",{replace:!1});return}case"url":{let s=typeof t.url_path=="string"?t.url_path:"";if(s==="")return;window.open(s,typeof t.url_target=="string"?t.url_target:"_blank");return}case"toggle":xs(n,"homeassistant","toggle",{entity_id:t.entity??e.entity});return;case"call-service":case"perform-action":{let s=na(t.service??t.perform_action);if(!s)return;let r=typeof t.data=="object"&&t.data!==null?t.data:typeof t.service_data=="object"&&t.service_data!==null?t.service_data:void 0,a=typeof t.target=="object"&&t.target!==null?t.target:void 0;xs(n,s[0],s[1],r,a);return}case"fire-dom-event":Ko(window,"ll-custom",t);return;default:return}}function Bo(i=16,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${n}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `}function Ms(i=16,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17h18" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <circle cx="12" cy="14" r="3.4" stroke="${n}" stroke-width="1.6" />
      <path d="M12 6.5v2.2M5.8 9.2l1.6 1.4M18.2 9.2l-1.6 1.4M3.6 13.2h2.2M18.2 13.2h2.2"
        stroke="${n}" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
      <path d="M7 20.5h10" stroke="${n}" stroke-width="1.4" stroke-linecap="round" opacity="0.45" />
    </svg>
  `}function jo(i=16,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${n}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `}function Vn(i=16,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${n}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function Zn(i=16,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${n}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${n}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}var ks="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M13.6 5a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Z";function Vo(i=16,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ks}
        fill="${n}"
        fill-rule="evenodd"
        transform="translate(5.6 7.2) scale(0.53)"
        opacity="0.95"
      />
      <path d="M12 2.6v2.4M12 2.6l-1.8 1.6M12 2.6l1.8 1.6" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
    </svg>
  `}function Ss(i=16,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16" stroke="${n}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path
        d=${ks}
        fill="${n}"
        fill-rule="evenodd"
        transform="translate(6.6 11.1) scale(0.45)"
        opacity="0.95"
      />
      <path d="M12 20.6v1.8M9.9 22.4h4.2" stroke="${n}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.7" />
    </svg>
  `}function qn(i=20,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${n}" />
      <g stroke="${n}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `}function Ts(i=18,n="currentColor"){return f`
    <svg width="${i}" height="${i}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${n}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${n}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${n}" />
    </svg>
  `}var As=new Map;function Es(i){let n=As.get(i);return n||(n=new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),As.set(i,n)),n}function oa(i){try{return Es(i)}catch{return Es("UTC")}}function Zo(i,n){let e=oa(n).formatToParts(i),t={};for(let o of e)o.type!=="literal"&&(t[o.type]=Number.parseInt(o.value,10));return{year:t.year??1970,month:t.month??1,day:t.day??1,hour:(t.hour??0)%24,minute:t.minute??0,second:t.second??0}}function Cs(i,n){let e=Zo(i,n);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(i.getTime()/1e3)*1e3}function ia(i,n,e,t=0,o=0,s=0,r="UTC"){let a=Date.UTC(i,n-1,e,t,o,s),l=1440*60*1e3,d=[Cs(new Date(a-l),r),Cs(new Date(a+l),r)],u=[...new Set(d)].map(m=>a-m).filter(m=>{let g=Zo(new Date(m),r);return g.year===i&&g.month===n&&g.day===e&&g.hour===t&&g.minute===o&&g.second===s}).sort((m,g)=>m-g);if(u.length>0)return new Date(u[0]);let p=Math.min(...d);return new Date(a-p)}function Pt(i,n){let e=Zo(i,n);return ia(e.year,e.month,e.day,0,0,0,n)}function Ds(i,n){let e=Pt(i,n);return Pt(new Date(e.getTime()+2160*60*1e3),n)}function Ce(i,n){return Math.round(Pt(i,n).getTime()/(1440*60*1e3))}function Ls(i){if(i)try{return new Intl.DateTimeFormat("en-US",{timeZone:i}),i}catch{}return Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}function le(i,n){return typeof i=="boolean"?i:i==="true"||i===1?!0:i==="false"||i===0?!1:n}function kt(i,n,e){return typeof i=="string"&&n.includes(i)?i:e}function Xn(i,n,e,t,o,s=0){let r=Ee(i);if(r===null)return n;let a=k(r,e[0],e[1]);return Math.abs(a-r)>1e-9&&o.push(de(t,"invalidRange",{value:String(i),min:String(e[0]),max:String(e[1])})),s===0?Math.round(a):c(a,s)}function qo(i,n,e){if(i==null)return null;let t=typeof i=="object"&&!Array.isArray(i)?i:void 0,o=t?.action;if(typeof o!="string"||o.trim()==="")return e.push(de(n,"invalidAction",{value:String(i)})),null;let s=o.trim();return es.includes(s)?{...t,action:s}:(e.push(de(n,"invalidAction",{value:s})),null)}function Rs(i,n="en"){let e=[],t=[],o=i??{},s=le(o.minimal_mode,P.minimal_mode),r=zt(s),a=s||typeof o.card_style!="string"?P.card_height:Rt(o.card_style);if(typeof o.card_height=="number"&&Number.isFinite(o.card_height))a=Math.round(k(o.card_height,r[0],r[1])),a!==o.card_height&&t.push(de(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height==="auto"||o.card_height===null)a="auto";else if(typeof o.card_height=="number")t.push(de(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]}));else if(o.card_height!==void 0){let g=Ee(o.card_height);g===null?e.push(de(n,"invalidHeight",{value:String(o.card_height),min:r[0],max:r[1]})):a=Math.round(k(g,r[0],r[1]))}let l=null,d=null,u=Ee(o.latitude),p=Ee(o.longitude);return u!==null&&(u>=-90&&u<=90?l=u:t.push(de(n,"invalidNumber",{value:String(o.latitude)}))),p!==null&&(p>=-180&&p<=180?d=p:t.push(de(n,"invalidNumber",{value:String(o.longitude)}))),{config:{type:typeof o.type=="string"?o.type:"custom:sun-moon-card",entity:typeof o.entity=="string"&&o.entity.trim()!==""?o.entity.trim():P.entity,moon_entity:typeof o.moon_entity=="string"&&o.moon_entity.trim()!==""?o.moon_entity.trim():P.moon_entity,card_height:a,show_sun:le(o.show_sun,P.show_sun),show_moon:le(o.show_moon,P.show_moon),show_twilight:le(o.show_twilight,P.show_twilight),show_astronomical_details:le(o.show_astronomical_details,P.show_astronomical_details),compact_mode:le(o.compact_mode,P.compact_mode),minimal_mode:s,minimal_show_times:le(o.minimal_show_times,P.minimal_show_times),minimal_show_zenith:le(o.minimal_show_zenith,P.minimal_show_zenith),sun_marker_size:Xn(o.sun_marker_size,P.sun_marker_size,dn,n,t,1),moon_marker_size:Xn(o.moon_marker_size,P.moon_marker_size,hn,n,t,1),popup_width:Xn(o.popup_width,P.popup_width,at,n,t),popup_height:Xn(o.popup_height,P.popup_height,lt,n,t),show_remaining_time:le(o.show_remaining_time,P.show_remaining_time),remaining_time_focus:kt(o.remaining_time_focus,Pe.remainingTimeFocus,P.remaining_time_focus),show_golden_hour:le(o.show_golden_hour,P.show_golden_hour),show_countdown_tile:le(o.show_countdown_tile,P.show_countdown_tile),tap_action:qo(o.tap_action,n,t),hold_action:qo(o.hold_action,n,t),double_tap_action:qo(o.double_tap_action,n,t),card_style:kt(o.card_style,Pe.cardStyle,P.card_style),scene:kt(o.scene,Pe.scene,P.scene),show_sun_info:le(o.show_sun_info,P.show_sun_info),show_moon_info:le(o.show_moon_info,P.show_moon_info),scene_full_moon_path:le(o.scene_full_moon_path,P.scene_full_moon_path),theme_mode:kt(o.theme_mode,Pe.themeMode,P.theme_mode),animations:le(o.animations,P.animations),time_format:kt(o.time_format,Pe.timeFormat,P.time_format),language:kt(o.language,Pe.language,P.language),show_header:le(o.show_header,P.show_header),show_day_chart:le(o.show_day_chart,P.show_day_chart),show_sky_view:le(o.show_sky_view,P.show_sky_view),show_events:le(o.show_events,P.show_events),show_moon_times:le(o.show_moon_times,P.show_moon_times),show_footer:le(o.show_footer,P.show_footer),twilight_level:kt(o.twilight_level,Pe.twilightLevel,P.twilight_level),location_name:typeof o.location_name=="string"?o.location_name:"",latitude:l,longitude:d},errors:e,warnings:t}}function zs(i,n){let e=zt(i.minimal_mode);return i.card_height==="auto"?k(ls(n,i.card_style),e[0],e[1]):k(i.card_height,e[0],e[1])}function sa(i,n,e,t="de"){let o={latitude:0,longitude:0},s={dayStart:i,dayEnd:new Date(i.getTime()+1440*60*1e3),samples:[],maxAltitude:0,minAltitude:0,events:{civilDawn:null,sunrise:null,solarNoon:null,sunset:null,civilDusk:null,nauticalDawn:null,nauticalDusk:null,astronomicalDawn:null,astronomicalDusk:null},polar:"none"},r={altitude:0,azimuth:0,distanceKm:0,parallax:0,apparentAltitude:0,equatorial:{ra:0,dec:0},geocentric:{longitude:0,latitude:0,distanceKm:0}},a={illumination:0,phaseAngle:0,elongation:0,phaseIndex:0,phaseKey:"newMoon",brightLimbAngle:0,moonAgeDays:0,waxing:!0,distanceKm:0},l={previousRise:null,previousSet:null,nextRise:null,nextSet:null};return{now:i,timeZone:n,location:o,locationName:"",extras:ra(n,Ps(t)),day:s,sun:{altitude:0,azimuth:0,phase:"night",rising:!1,haElevation:null,haAzimuth:null},moon:{position:r,phase:a,events:l,haPhaseName:null},sunTrack:[],moonPath:null,events:s.events,eventSources:{},daylightMinutes:null,issues:e,fatal:!0}}function Ps(i){return i==="de"?"de-DE":"en-GB"}function ra(i,n){return{timeZoneLongName:zo(i,n,new Date),previousDaylightMinutes:null,daylightDeltaMinutes:null,sunBelowHorizon:null,sunriseAzimuth:null,sunsetAzimuth:null,nextFullMoon:null,nextFullMoonDays:null,blueMoon:!1,moonFolkName:null,moonDistance:null,moonRise:null,moonSet:null,nextSunEvent:null,nextTwilightEvent:null,nextMoonEvent:null,goldenHour:null}}function aa(i,n){let e=yo(i.getTime()-27648e5,i.getTime()-6e4);if(e.length===0)return!1;let t=e[e.length-1],o=s=>new Intl.DateTimeFormat("en-CA",{timeZone:n,year:"numeric",month:"2-digit"}).format(s);return o(t)===o(i)}function la(i,n,e){if(!i)return null;let t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:n,month:"2-digit"}).format(i));if(!Number.isFinite(t)||t<1||t>12)return null;let o=is[t-1];return de(e,"folkName",{name:de(e,o)})}function Ns(i,n,e,t){return i?{time:i,azimuth:Pn(i,n,"moon"),dayOffset:Ce(i,t)-Ce(e,t)}:null}function ca(i){if(typeof i!="string"||i.trim()==="")return null;let n=new Date(i);return Number.isNaN(n.getTime())?null:n}var Hs=[["sunrise","next_rising"],["sunset","next_setting"],["civilDawn","next_dawn"],["civilDusk","next_dusk"]],ua={new_moon:"newMoon",waxing_crescent:"waxingCrescent",first_quarter:"firstQuarter",waxing_gibbous:"waxingGibbous",full_moon:"fullMoon",waning_gibbous:"waningGibbous",last_quarter:"lastQuarter",waning_crescent:"waningCrescent"};function da(i,n,e){let t=Ls(n?.config?.time_zone),o=[],s=wo(n?.config?.latitude)?n.config.latitude:null,r=wo(n?.config?.longitude)?n.config.longitude:null,a=i.latitude??s,l=i.longitude??r,d=Mt(i.language,n?.locale?.language??n?.language);if(a===null||l===null)return sa(e,t,["missing-location",...o],d);let u={latitude:a,longitude:l},p=i.location_name.trim()!==""?i.location_name.trim():n?.config?.location_name??"",m=Pt(e,t),g=Ds(e,t),b=fo(u,m,g),$=Rn(e,u),w=$.altitude,N=un(e.getTime()+6e4,u),_=rt(e,u),M=zn(e),R=Ui(e,u),x=n?.states?.[i.entity];x||o.push("missing-sun-entity");let D={...b.events},v={};if(x?.attributes)for(let[W,ge]of Hs){let xe=ca(x.attributes[ge]),Me=b.events[W];if(xe&&xe>=m&&xe<g&&(!Me||Math.abs(xe.getTime()-Me.getTime())<=os)){D[W]=xe,v[W]="ha";continue}v[W]=Me?"computed":"none"}else for(let[W]of Hs)v[W]=b.events[W]?"computed":"none";for(let W of["nauticalDawn","nauticalDusk","astronomicalDawn","astronomicalDusk","solarNoon"])v[W]=b.events[W]?"computed":"none";let H=x?.attributes?Ee(x.attributes.elevation):null,T=x?.attributes?Ee(x.attributes.azimuth):null,F=i.moon_entity?n?.states?.[i.moon_entity]:void 0,Y=F&&typeof F.state=="string"?ua[F.state]??null:null,j=i.show_moon?Gi(u,m,g,R):null,Z=[],C=900*1e3;for(let W=m.getTime();W<=g.getTime();W+=C){let ge=Rn(W,u);Z.push({altitude:ge.altitude,azimuth:ge.azimuth})}let L=null;D.sunrise&&D.sunset&&(L=(D.sunset.getTime()-D.sunrise.getTime())/6e4);let G=Pt(new Date(m.getTime()-720*60*1e3),t),A=fo(u,G,m),O=A.events.sunrise&&A.events.sunset?(A.events.sunset.getTime()-A.events.sunrise.getTime())/6e4:null,Q=L!==null&&O!==null?L-O:null,J=Wi(e),$e=i.twilight_level==="nautical"?Ve:i.twilight_level==="astronomical"?Ze:Ge,V=W=>W?{time:W.time,rising:W.rising,dayOffset:Ce(W.time,t)-Ce(e,t)}:null,ce=i.show_sun?V(bo(u,e,rn)):null,he=i.show_twilight?V(bo(u,e,$e)):null,ee=e.getTime(),I=[R.nextRise,R.nextSet].filter(W=>W instanceof Date&&W.getTime()>ee).sort((W,ge)=>W.getTime()-ge.getTime())[0],re=i.show_moon&&I?{time:I,rising:I.getTime()===R.nextRise?.getTime(),dayOffset:Ce(I,t)-Ce(e,t)}:null,ue={timeZoneLongName:zo(t,Ps(d),e),previousDaylightMinutes:O,daylightDeltaMinutes:Q,sunBelowHorizon:w<0?Math.abs(w):null,sunriseAzimuth:D.sunrise?Pn(D.sunrise,u,"sun"):null,sunsetAzimuth:D.sunset?Pn(D.sunset,u,"sun"):null,nextFullMoon:J,nextFullMoonDays:J?Math.round((J.time.getTime()-e.getTime())/(1440*60*1e3)):null,blueMoon:J?aa(J.time,t):!1,moonFolkName:la(J?.time??null,t,d),moonDistance:Bi(e,u,14),moonRise:Ns(R.nextRise??R.previousRise,u,e,t),moonSet:Ns(R.nextSet??R.previousSet,u,e,t),nextSunEvent:ce,nextTwilightEvent:he,nextMoonEvent:re,goldenHour:i.show_golden_hour?Fi(u,e,ln,Hn):null};return b.polar==="polar-day"&&o.push("polar-day"),b.polar==="polar-night"&&o.push("polar-night"),D.sunrise||o.push("no-sunrise-today"),D.sunset||o.push("no-sunset-today"),!D.civilDawn&&!D.civilDusk&&o.push("no-civil-twilight"),{now:e,timeZone:t,location:u,locationName:p,day:b,sun:{altitude:w,azimuth:$.azimuth,phase:Ki(w),rising:N>w,haElevation:H,haAzimuth:T},moon:{position:_,phase:M,events:R,haPhaseName:Y},sunTrack:Z,moonPath:j,events:D,eventSources:v,extras:ue,daylightMinutes:L,issues:o,fatal:!1}}var gn=new Map;function ha(i){return[i.entity,i.moon_entity,i.latitude,i.longitude,i.twilight_level,i.language,i.location_name,String(i.show_sun),String(i.show_moon),String(i.show_twilight),String(i.show_golden_hour)].join("|")}function ma(i,n){if(!n)return"-";let e=n.states?.[i.entity],t=i.moon_entity?n.states?.[i.moon_entity]:void 0;return[n.config?.time_zone??"",n.config?.latitude??"",n.config?.longitude??"",n.config?.location_name??"",e?.attributes?.next_rising??e?.last_updated??"",e?.attributes?.next_setting??"",e?.attributes?.next_dawn??"",e?.attributes?.next_dusk??"",e?.attributes?.elevation??"",t?.state??""].join("|")}function Os(i,n,e){let t=Math.floor(e.getTime()/6e4),o=[ha(i),ma(i,n),t,e.getTimezoneOffset()].join("#"),s=gn.get(o);if(s)return s;let r=da(i,n,e);if(gn.size>24){let a=gn.keys().next().value;a!==void 0&&gn.delete(a)}return gn.set(o,r),r}var Is=Sn`
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
    flex: 1 1 auto;
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
`,Fs=Sn`
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
`;function Xo(i,n){i.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}var ut=class extends Fe{constructor(){super(...arguments);this._open=new Set(["style"])}setConfig(e){this._config={...e}}get _language(){return Mt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_t(e,t){return de(this._language,e,t)}_value(e,t){let o=this._config?.[e];return o??t}_update(e){if(!this._config)return;let t={...this._config,...e};for(let[o,s]of Object.entries(e)){let r=P[o];s===r&&o in P&&delete t[o]}this._config=t,Xo(this,t)}_group(e,t,o,s){let r=this._open.has(e);return S`
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
    `}render(){if(!this._config)return S``;let e=this._config,t=e.card_height,o=t==="auto"||t===null,s=e.minimal_mode===!0,r=zt(s),a=s?P.card_height:Rt(e.card_style),l=typeof t=="number"?t:a,d=e.latitude===void 0||e.latitude===null,u=e.card_style??"glass",p=(u==="scene"||u==="clean")&&!s,m={glass:this._t("editorCardStyleGlass"),flat:this._t("editorCardStyleFlat"),horizon:this._t("editorCardStyleHorizon"),scene:this._t("editorCardStyleScene"),clean:this._t("editorCardStyleClean")},g={city:this._t("editorSceneCity"),mountains:this._t("editorSceneMountains"),forest:this._t("editorSceneForest"),coast:this._t("editorSceneCoast"),none:this._t("editorSceneNone")},b=v=>this._value(v,P[v]),$=u==="scene"?`${m.scene.split(" (")[0]} \xB7 ${g[e.scene??"city"]}`:(m[u]??u).split(" (")[0],w=[o?this._t("editorCardHeightAuto"):`${l} px`,s?this._t("editorMinimalMode"):null,!s&&e.compact_mode?this._t("editorCompactMode"):null].filter(Boolean).join(" \xB7 "),N=[["show_sun","editorShowSun"],["show_moon","editorShowMoon"],...p?[["show_sun_info","editorSunInfo"],["show_moon_info","editorMoonInfo"],...u==="scene"?[["scene_full_moon_path","editorFullMoonPath"]]:[],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"]]:[["show_twilight","editorShowTwilight"],["show_astronomical_details","editorShowAstronomicalDetails"],["show_header","editorShowHeader"],["show_day_chart","editorShowDayChart"],["show_sky_view","editorShowSkyView"],["show_events","editorShowEvents"],["show_moon_times","editorShowMoonTimes"],["show_golden_hour","editorGoldenHour"],["show_footer","editorShowFooter"]]],_=N.filter(([v])=>b(v)).length,M=this._t("editorSwitchCount",{on:_,total:N.length}),R=b("show_remaining_time")?this._t(e.remaining_time_focus==="next"?"editorRemainingTimeFocusNext":e.remaining_time_focus==="golden_hour"?"editorRemainingTimeFocusGolden":"editorRemainingTimeFocusSun").split(" (")[0]:this._t("editorOff"),x=[e.language==="de"?"Deutsch":e.language==="en"?"English":this._t("editorLanguageAuto"),e.time_format==="12"?this._t("editorTimeFormat12"):e.time_format==="24"?this._t("editorTimeFormat24"):null].filter(Boolean).join(" \xB7 "),D=d?"Home Assistant":`${c(Number(e.latitude),2)}\xB0, ${c(Number(e.longitude??0),2)}\xB0`;return S`
      <div class="card-config">
        ${this._group("style","editorGroupStyle",$,S`
            ${this._select("cardstyle","card_style","editorCardStyle","glass",Pe.cardStyle.map(v=>[v,m[v]]),{patch:v=>this._styleHeight(v)})}
            ${u==="scene"?this._select("scene","scene","editorScene","city",Pe.scene.map(v=>[v,g[v]])):E}
            ${this._select("theme","theme_mode","editorThemeMode","auto",[["auto",this._t("editorThemeAuto")],["light",this._t("editorThemeLight")],["dark",this._t("editorThemeDark")]])}
            ${this._switch("animations","editorAnimations")}
            ${u==="scene"&&!s?E:this._numberRow({id:"sun-marker",labelKey:"editorSunMarkerSize",value:this._value("sun_marker_size",P.sun_marker_size),min:dn[0],max:dn[1],step:.5,digits:1,set:v=>this._update({sun_marker_size:v})})}
            ${u==="clean"&&!s?this._numberRow({id:"moon-marker",labelKey:"editorMoonMarkerSize",value:this._value("moon_marker_size",P.moon_marker_size),min:hn[0],max:hn[1],step:.5,digits:1,set:v=>this._update({moon_marker_size:v})}):E}
          `)}
        ${this._group("layout","editorGroupLayout",w,S`
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
                  @change=${v=>{let H=Ee(v.target.value);H!==null&&this._update({card_height:Math.round(k(H,r[0],r[1]))})}}
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
            ${p?E:this._switch("compact_mode","editorCompactMode","compact")}
            ${this._switch("minimal_mode","editorMinimalMode","minimal")}
            ${s?S`<div class="hint">${this._t("editorMinimalModeHelp")}</div>
                  ${this._switch("minimal_show_times","editorMinimalTimes","minimal-times")}
                  ${this._switch("minimal_show_zenith","editorMinimalZenith","minimal-zenith")}
                  ${this._numberRow({id:"popup-width",labelKey:"editorPopupWidth",value:this._value("popup_width",P.popup_width),min:at[0],max:at[1],step:20,set:v=>this._update({popup_width:Math.round(v)})})}
                  ${this._numberRow({id:"popup-height",labelKey:"editorPopupHeight",value:this._value("popup_height",P.popup_height),min:lt[0],max:lt[1],step:20,set:v=>this._update({popup_height:Math.round(v)})})}`:E}
          `)}
        ${this._group("content","editorGroupContent",M,S`
            ${N.map(([v,H])=>this._switch(v,H))}
            ${this._select("twilight","twilight_level","editorTwilightLevel","civil",[["civil",this._t("editorTwilightCivil")],["nautical",this._t("editorTwilightNautical")],["astronomical",this._t("editorTwilightAstronomical")],["all",this._t("editorTwilightAll")]])}
          `)}
        ${this._group("countdown","editorGroupCountdown",R,S`
            ${this._switch("show_remaining_time","editorRemainingTime")}
            ${this._select("remaining-focus","remaining_time_focus","editorRemainingTimeFocus","sun",[["sun",this._t("editorRemainingTimeFocusSun")],["next",this._t("editorRemainingTimeFocusNext")],...e.show_golden_hour?[["golden_hour",this._t("editorRemainingTimeFocusGolden")]]:[]],{disabled:e.show_remaining_time===!1})}
            ${p?E:this._switch("show_countdown_tile","editorCountdownTile")}
          `)}
        ${this._group("locale","editorGroupLocale",x,S`
            ${this._select("language","language","editorLanguage","auto",[["auto",this._t("editorLanguageAuto")],["de","Deutsch"],["en","English"]])}
            ${this._select("timeformat","time_format","editorTimeFormat","auto",[["auto",this._t("editorTimeFormatAuto")],["24",this._t("editorTimeFormat24")],["12",this._t("editorTimeFormat12")]])}
          `)}
        ${this._group("source","editorGroupSource",D,S`
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
                    @change=${v=>{if(v.target.checked){let T={...this._config};delete T.latitude,delete T.longitude,this._config=T,Xo(this,T)}else this._update({latitude:c(this.hass?.config?.latitude??0,4),longitude:c(this.hass?.config?.longitude??0,4)})}}
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
                  @change=${v=>{let H=Ee(v.target.value);this._update({latitude:H===null?void 0:k(H,-90,90)})}}
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
                  @change=${v=>{let H=Ee(v.target.value);this._update({longitude:H===null?void 0:k(H,-180,180)})}}
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
            @change=${m=>{let g=Ee(m.target.value);g!==null&&u(k(g,r,a))}}
          />
        </div>
      </div>
    `}_styleHeight(e){let t=this._config?.card_height;if(this._config?.minimal_mode===!0)return{};let o=Rt(this._config?.card_style),s=Rt(e);return s!==o&&(t===void 0||t===o)?{card_height:s}:{}}_warnings(){let e=this._config?.card_height,t=zt(this._config?.minimal_mode===!0);return typeof e=="number"&&(e<t[0]||e>t[1])?S`<span class="hint">
        ${this._t("invalidHeight",{value:String(e),min:t[0],max:t[1]})}
      </span>`:E}_switch(e,t,o=String(e)){let s=P[e];return S`
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
    `}_reset(){let e=Un();this._config=e,Xo(this,e)}};ut.styles=Fs,He([Dt({attribute:!1})],ut.prototype,"hass",2),He([xt()],ut.prototype,"_config",2),He([xt()],ut.prototype,"_open",2),ut=He([Cn(Qi)],ut);var dt=.64,Ot=.6,ht=12,Yo=17,Xe=class extends Fe{constructor(){super(...arguments);this._width=0;this._tick=0;this._uid=`smc-${Math.random().toString(36).slice(2,9)}`;this._countdownCache=null;this._popup=null;this._popupCard=null;this._previousOverflow="";this._visible=!0;this._hassSignature="";this._warned="";this._tapCount=0;this._held=!1;this._onPopupKeydown=e=>{if(!this._popup)return;if(e.key==="Escape"){e.stopPropagation(),this._closeDetails();return}if(e.key!=="Tab")return;let t=this._popupFocusable(),o=t[0],s=t[t.length-1];if(!o||!s)return;let r=this._activeElement(),a=r?t.indexOf(r):-1;if(a===-1){e.preventDefault(),(e.shiftKey?s:o).focus();return}e.shiftKey&&a===0?(e.preventDefault(),s.focus()):!e.shiftKey&&a===t.length-1&&(e.preventDefault(),o.focus())};this._onMinimalPointerDown=()=>{this._clearHoldTimer();let e=this._config?.hold_action;e&&(this._holdTimer=setTimeout(()=>{this._holdTimer=void 0,this._held=!0,this._runAction(e,!1)},ts))};this._onMinimalPointerUp=()=>{this._clearHoldTimer()};this._onMinimalPointerCancel=()=>{this._clearHoldTimer()};this._onMinimalClick=e=>{if(this._held){this._held=!1;return}let t=e.currentTarget;if(t instanceof HTMLElement){if(!this._config?.double_tap_action){this._runTap(t);return}if(this._tapCount+=1,this._clearTapTimer(),this._tapCount>=2){this._tapCount=0,this._runAction(this._config.double_tap_action,!1,t);return}this._tapTimer=setTimeout(()=>{this._tapTimer=void 0,this._tapCount=0,this._runTap(t)},ns)}};this._onVisibilityChange=()=>{this._syncClock()}}set hass(e){let t=this._hass;this._hass=e,this.requestUpdate("hass",t),this._popupCard&&(this._popupCard.hass=e)}get hass(){return this._hass}static getConfigElement(){return document.createElement("sun-moon-card-editor")}static getStubConfig(){return Un()}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let t=Mt(e.language,this.hass?.locale?.language),{config:o,errors:s,warnings:r}=Rs(e,t);if(s.length>0)throw new Error(s[0]);if(r.length>0){let a=r.join(" ");a!==this._warned&&(this._warned=a,console.warn(`[sun-moon-card] ${a}`))}this._config=o}getCardSize(){let e=this._resolvedHeight();return Math.max(1,Math.round(e/50))}getGridOptions(){let e=this._resolvedHeight();return{rows:Math.max(1,Math.round(e/56)),min_rows:this._config?.minimal_mode===!0?1:Math.max(1,Math.round(120/56)),columns:6,min_columns:4}}willUpdate(e){super.willUpdate(e);let t=this._isDark();this.classList.toggle("smc-dark",t),this.classList.toggle("smc-light",!t),this.classList.toggle("smc-flat",this._config?.card_style==="flat"),this.classList.toggle("smc-glass",this._config?.card_style!=="flat")}connectedCallback(){super.connectedCallback(),this._startClock(),this._watchVisibility(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&e!==this._width&&(this._width=e)}),this._resizeObserver.observe(this)),requestAnimationFrame(()=>{let e=Math.round(this.getBoundingClientRect().width);e>0&&(this._width=e)})}disconnectedCallback(){super.disconnectedCallback(),this._stopClock(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._visibilityObserver?.disconnect(),this._visibilityObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearHoldTimer(),this._clearTapTimer(),this._closeDetails()}_openDetails(){if(!this._config||!this.hass||this._popup)return;let e=this._language(),t=k(this._config.popup_width,at[0],at[1]),o=k(this._config.popup_height,lt[0],lt[1]),s=document.createElement("div");s.className="smc-popup",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",de(e,"title")),Object.assign(s.style,{position:"fixed",top:"0",right:"0",bottom:"0",left:"0",zIndex:"9999",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",boxSizing:"border-box",background:"rgba(0, 0, 0, 0.6)"});let r=document.createElement("div");Object.assign(r.style,{position:"relative",width:`min(92vw, ${t}px)`,maxWidth:`${t}px`,maxHeight:"92vh",overflow:"auto",borderRadius:"12px",boxShadow:"0 12px 32px rgba(0, 0, 0, 0.45)"});let a=document.createElement("button");a.type="button",a.setAttribute("aria-label",de(e,"popupClose")),a.textContent="\u2715",Object.assign(a.style,{position:"absolute",top:"8px",right:"8px",zIndex:"1",width:"30px",height:"30px",padding:"0",borderRadius:"50%",border:"1px solid rgba(128, 128, 128, 0.4)",background:"var(--card-background-color, #202124)",color:"var(--primary-text-color, #ffffff)",font:"15px/1 system-ui, sans-serif",cursor:"pointer"}),a.addEventListener("click",()=>this._closeDetails());let l=this._config,d={...l,latitude:l.latitude??void 0,longitude:l.longitude??void 0,location_name:l.location_name??void 0,minimal_mode:!1,card_height:o,tap_action:void 0,hold_action:void 0,double_tap_action:void 0},u=document.createElement(Ao);u.hass=this.hass;try{u.setConfig(d)}catch{}this._popupCard=u,r.append(u,a),s.append(r),s.addEventListener("click",p=>{p.target===s&&this._closeDetails()}),this._previousOverflow=document.body.style.overflow,document.body.style.overflow="hidden",document.body.append(s),document.addEventListener("keydown",this._onPopupKeydown,!0),this._popup=s,a.focus()}_closeDetails(){if(!this._popup)return;this._popup.remove(),this._popup=null,this._popupCard=null,document.body.style.overflow=this._previousOverflow,document.removeEventListener("keydown",this._onPopupKeydown,!0),this.renderRoot?.querySelector?.("ha-card")?.focus()}_activeElement(){let e=document.activeElement;if(!e)return null;let t=e.shadowRoot?.activeElement;return t instanceof HTMLElement?t:e}_popupFocusable(){if(!this._popup)return[];let e=[],t=this._popupCard?.shadowRoot?.querySelector("ha-card[tabindex]");t&&e.push(t);let o='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';for(let s of this._popup.querySelectorAll(o))s.hasAttribute("disabled")||e.push(s);return e}_handleMinimalKey(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();let t=e.currentTarget;t instanceof HTMLElement&&this._runTap(t)}}_runTap(e){this._runAction(this._config?.tap_action??null,!0,e)}_runAction(e,t,o){let s=this._config;if(!s)return;let r=o??this.renderRoot?.querySelector("ha-card")??this;Wo(r,this.hass,s,e,t?()=>this._openDetails():void 0)}_clearHoldTimer(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=void 0)}shouldUpdate(e){if(e.has("_config")||e.has("_width")||e.has("_tick"))return!0;if(e.has("hass")){let t=this._computeHassSignature();return t===this._hassSignature?!1:(this._hassSignature=t,!0)}return!0}_watchVisibility(){typeof IntersectionObserver<"u"&&(this._visibilityObserver=new IntersectionObserver(e=>{let t=e.some(o=>o.isIntersecting);t!==this._visible&&(this._visible=t,this._syncClock())}),this._visibilityObserver.observe(this)),document.addEventListener("visibilitychange",this._onVisibilityChange)}_syncClock(){this._stopClock(),!(!this._visible||document.hidden)&&(this._tick+=1,this._startClock())}_startClock(){this._stopClock(),this._timer=setTimeout(()=>{this._tick+=1,this._startClock()},Math.max(1e3,qi()-Date.now()))}_stopClock(){this._timer&&(clearTimeout(this._timer),this._timer=void 0)}_computeHassSignature(){let e=this._config,t=this.hass;if(!t||!e)return"";let o=t.states?.[e.entity],s=e.moon_entity?t.states?.[e.moon_entity]:void 0;return[t.config?.time_zone??"",t.config?.latitude??"",t.config?.longitude??"",t.config?.location_name??"",t.locale?.language??"",t.language??"",t.locale?.time_format??"",t.selectedTheme?.dark??t.themes?.darkMode??"",o?.attributes?.next_rising??o?.last_updated??"",o?.attributes?.next_setting??"",o?.attributes?.next_dawn??"",o?.attributes?.next_dusk??"",o?.attributes?.elevation??"",o?.attributes?.azimuth??"",s?.state??""].join("|")}_resolvedHeight(){return this._config?zs(this._config,this._width||400):P.card_height}_isDark(){return this._config?this._config.theme_mode==="dark"?!0:this._config.theme_mode==="light"?!1:!!(this.hass?.selectedTheme?.dark??this.hass?.themes?.darkMode??!1):!1}_language(){return Mt(this._config?.language,this.hass?.locale?.language??this.hass?.language)}_locale(){return this.hass?.locale?.language??this.hass?.language??this._language()}render(){let e=this._config;if(!e)return S``;let t=this._width||400,o=this._resolvedHeight(),s=as(o,t,e),r=Os(e,this.hass,new Date),a=this._language(),l=this._isDark(),d=l?Eo:Co;if(r.fatal)return S`
        <ha-card
          class=${ye({"smc-dark":l,"smc-light":!l,"smc-minimal":s.minimal})}
          style=${K({height:`${s.minimal?Math.max(o,56):o}px`})}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${Ts(18)}</span>
              <span>${de(a,"missingLocation")}</span>
            </div>
          </div>
        </ha-card>
      `;let u=ms(a,this._locale(),r.timeZone,ds(e.time_format,this.hass?.locale?.time_format,this._locale()));return s.minimal?S`
        <ha-card
          class=${ye({"smc-dark":l,"smc-light":!l,"smc-minimal":!0})}
          style=${K({height:`${o}px`})}
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
            class=${ye({root:!0,minimal:!0})}
            style=${K({padding:`${s.padding}px`,gap:"0px","--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
          >
            ${this._renderMinimalTimes(r,u,s,e)}
            <div
              class="chart-wrap minimal"
              style=${K({height:`${s.chartHeight}px`})}
            >
              ${Io({profile:r.day,events:r.events,now:r.now,width:Math.max(60,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style==="scene"||e.card_style==="clean"?"glass":e.card_style,compact:!1,minimal:!0,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,moonPath:null,moon:null})}
            </div>
          </div>
        </ha-card>
      `:e.card_style==="scene"?this._renderSceneCard(r,u,e,d,l,t,o):e.card_style==="clean"?this._renderCleanCard(r,u,e,l,t,o):S`
      <ha-card
        class=${ye({"smc-dark":l,"smc-light":!l})}
        style=${K({height:`${o}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(r,u)}
      >
        <div
          class=${ye({root:!0,compact:s.compact})}
          style=${K({padding:`${s.padding}px`,gap:`${s.compact?3:6}px`,"--smc-palette-day":d.day,"--smc-palette-civil":d.civil,"--smc-palette-night":d.night})}
        >
          ${s.showHeader?this._renderHeader(r,u,d,s):E}

          <div
            class=${ye({body:!0,columns:s.skyViewSide})}
            style=${K({height:`${s.chartHeight+s.legendHeight+(s.showLegend?4:0)}px`})}
          >
            ${e.show_day_chart?S`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${K({height:`${s.chartHeight}px`})}
                  >
                    ${Io({profile:r.day,events:r.events,now:r.now,width:Math.max(120,s.chartWidth),height:s.chartHeight,palette:d,format:u,showSun:e.show_sun,showMoon:e.show_moon,showTwilight:e.show_twilight,twilightLevel:e.twilight_level,animations:e.animations,cardStyle:e.card_style,compact:s.compact,minimal:!1,sunMarkerSize:e.sun_marker_size,uid:`${this._uid}-chart`,showAstronomicalLayers:e.show_astronomical_details,currentAltitude:r.sun.altitude,countdown:this._chartCountdown(r,u,s),showGoldenHour:e.show_golden_hour,moonPath:r.moonPath,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null})}
                  </div>
                  ${s.showLegend?this._renderLegend(u,s.legendHeight):E}
                </div>`:E}
            ${s.skyViewSide?S`<div
                  class="sky-column"
                  style=${K({width:`${s.skyViewWidth}px`})}
                >
                  <div class="sky-wrap">
                    ${Uo({width:s.skyViewWidth,height:s.chartHeight,sun:e.show_sun?{altitude:r.sun.altitude,azimuth:r.sun.azimuth}:null,moon:e.show_moon?{altitude:r.moon.position.apparentAltitude,azimuth:r.moon.position.azimuth,illumination:r.moon.phase.illumination,brightLimbAngle:r.moon.phase.brightLimbAngle}:null,sunTrack:r.sunTrack,moonPhase:r.moon.phase,showSun:e.show_sun,showMoon:e.show_moon,palette:d,format:u,animations:e.animations,uid:`${this._uid}-sky`,seed:Ce(r.now,r.timeZone)})}
                  </div>
                  ${this._renderSkyReadout(r,u,s.skyViewWidth,this._countdownRows(s))}
                </div>`:E}
          </div>

          ${s.showEvents?this._renderEvents(r,u,s):E}
          ${s.showDetails?this._renderDetails(r,u,e,s,a,l,t):E}
          ${s.showFooter?this._renderFooter(r,u,e,s):E}
        </div>
      </ha-card>
    `}_renderSceneCard(e,t,o,s,r,a,l){let d=a<480?12:16,u=12,p=Math.max(160,a-2*d),m=o.show_sun&&o.show_sun_info,g=o.show_moon&&o.show_moon_info,b=(m?1:0)+(g?1:0),$=this._infoLayout(p,b,12,330,150),w=$.compact?90:a<480?78:92,N=b===0?0:$.side?w:b*w+(b-1)*10,_=a<480?46:52,M=140,R=o.show_header,x=b>0,D=(H,T)=>l-2*d-(H?_+u:0)-(T?N+u:0);o.show_day_chart&&x&&D(R,!0)<M&&(x=!1),o.show_day_chart&&R&&D(!0,x)<M&&(R=!1);let v=o.show_day_chart?Math.max(M,D(R,x)):0;return S`
      <ha-card
        class=${ye({"smc-dark":r,"smc-light":!r,"smc-scene":!0})}
        style=${K({height:`${l}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(e,t)}
      >
        <div
          class="root scene-root"
          style=${K({padding:`${d}px`,gap:`${u}px`})}
        >
          ${R?this._renderSceneHeader(e,t,s,a,_):E}
          ${o.show_day_chart?S`<div class="scene-wrap" style=${K({height:`${v}px`})}>
                ${ws({profile:e.day,events:e.events,now:e.now,width:p,height:v,format:t,scene:o.scene,showSun:o.show_sun,showMoon:o.show_moon,moonPath:e.moonPath,fullMoonPath:o.scene_full_moon_path,moon:o.show_moon?{illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,altitude:e.moon.position.apparentAltitude}:null,currentAltitude:e.sun.altitude,animations:o.animations,uid:`${this._uid}-scene`})}
              </div>`:E}
          ${x?S`<div
                class=${ye({"scene-tiles":!0,stacked:!$.side,single:b===1})}
                style=${K({height:`${N}px`})}
              >
                ${m?this._renderSceneSunTile(e,t,a<480,$.compact,$.itemWidth):E}
                ${g?this._renderSceneMoonTile(e,t,a<480,$.compact,$.itemWidth):E}
              </div>`:E}
        </div>
      </ha-card>
    `}_renderCleanCard(e,t,o,s,r,a){let l=r<480,d=l?14:18,u=Math.max(160,r-2*d-2),p=o.show_sun&&o.show_sun_info,m=o.show_moon&&o.show_moon_info,g=(p?1:0)+(m?1:0),b=this._infoLayout(u,g,37,300,140),$=b.side,w=b.compact?62:l?64:72,N=g===0?0:$?w:g*w+(g-1)*12,_=l?52:60,M=21,R=110,x=o.show_header,D=g>0,v=(Q,J)=>a-2*d-(Q?_:0)-(J?N+M:0);o.show_day_chart&&D&&v(x,!0)<R&&(D=!1),o.show_day_chart&&x&&v(!0,D)<R&&(x=!1);let H=o.show_day_chart?Math.max(R,v(x,D)):0,T=this._primaryCountdown(e,t),F=t.t(this._phaseKey(e)),Y=e.locationName?`${e.locationName} \xB7 ${mn(e.now,t)}`:mn(e.now,t),j=u<320,Z=j?18:l?20:22,C=(j?46:l?54:64)+Math.max(t.t("title").length*Z*.56,Y.length*(j?13:14)*.53),L=Q=>Q.length*13.5*.58+30,G=u-C-12,O=(T?[{phase:!0,text:T.compact},{phase:!1,text:T.compact},{phase:!0,text:T.duration},{phase:!1,text:T.duration}]:[{phase:!0,text:null},{phase:!1,text:null}]).find(Q=>(Q.phase?L(F)+8:0)+(Q.text?L(Q.text):0)<=G)??{phase:!1,text:null};return S`
      <ha-card
        class=${ye({"smc-dark":s,"smc-light":!s,"smc-clean":!0})}
        style=${K({height:`${a}px`})}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(e,t)}
      >
        <div class="root clean-root" style=${K({padding:`${d}px`})}>
          ${x?S`<div
                class=${ye({"clean-header":!0,tiny:j})}
                style=${K({height:`${_}px`})}
              >
                <div class="clean-head-left">
                  <svg class="clean-logo" width=${j?34:l?40:50}
                    height=${j?27:l?32:40}
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
                    <span class="clean-subtitle">${Y}</span>
                  </div>
                </div>
                <div class="clean-chips">
                  ${O.phase?S`<span class="clean-chip phase" title=${F}>${F}</span>`:E}
                  ${T&&O.text?S`<span
                        class="clean-chip countdown-chip"
                        data-body=${T.body}
                        role="img"
                        aria-label=${T.long}
                        title=${T.title}
                        >${O.text}</span
                      >`:E}
                </div>
              </div>`:E}
          ${o.show_day_chart?S`<div class="clean-chart-wrap" style=${K({height:`${H}px`})}>
                ${vs({profile:e.day,events:e.events,now:e.now,width:u,height:H,format:t,showSun:o.show_sun,showMoon:o.show_moon,moonPath:e.moonPath,sunAltitude:e.sun.altitude,moonAltitude:e.moon.position.apparentAltitude,sunSize:o.sun_marker_size,moonSize:o.moon_marker_size})}
              </div>`:E}
          ${D?S`<div class="clean-divider"></div>
                <div
                  class=${ye({"clean-info":!0,stacked:!$,single:g===1})}
                  style=${K({height:`${N}px`})}
                >
                  ${p?this._renderCleanSun(e,t,l,b.compact,b.itemWidth):E}
                  ${p&&m&&$?S`<span class="clean-sep" aria-hidden="true"></span>`:E}
                  ${m?this._renderCleanMoon(e,t,l,b.compact,b.itemWidth):E}
                </div>`:E}
        </div>
      </ha-card>
    `}_infoLayout(e,t,o,s,r){let a=(e-o)/2,l=t===2&&a>=r,d=l?a:e;return{side:l,compact:d<s,itemWidth:d}}_moonRiseTime(e,t){let o=e.extras.moonRise;return o?`\u2191 ${se(o.time,t)}`:"\u2191 \u2014"}_sunTimesText(e,t){let o=s=>s?se(s,t):"\u2014";return`\u2191 ${o(e.events.sunrise)}  \u2193 ${o(e.events.sunset)}`}_moonPositionTexts(e,t){let o=e.moon.position.apparentAltitude,s=ne(o,1,t.locale);return o>=0?[`${s} \xB7 ${Math.round(e.moon.position.azimuth)}\xB0 ${Ke(e.moon.position.azimuth,t.language)}`,s]:[`${ne(Math.abs(o),1,t.locale)} ${t.t("belowHorizon")}`,s]}_cleanItem(e,t,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${ye({"clean-item":!0,[e]:!0,compact:t,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??E}
      @keydown=${o?a:E}
    >
      ${r}
    </div>`}_renderCleanSun(e,t,o,s,r){let a=ne(e.sun.altitude,1,t.locale),l=`${Math.round(e.sun.azimuth)}\xB0 ${Ke(e.sun.azimuth,t.language)}`,d=s?40:o?50:58,u=r-d-(s?12:16),p=this._fitLabel([`${t.t("azimuth")} ${l}`,l],u,s?12:13.5,dt);return this._cleanItem("sun",s,this._sceneTileAction(this._config.entity),`${t.t("sunAltitude")} ${a}, ${t.t("azimuth")} ${l}`,S`<span class="clean-badge sun" style=${K({width:`${d}px`,height:`${d}px`})}
          >${qn(s?22:o?26:30,"currentColor")}</span
        >
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([t.t("sunAltitude"),t.t("sun")],u,13,Ot)??t.t("sun")}</span
          >
          <span class="clean-item-value">${a}</span>
          <span class="clean-item-sub">${p??l}</span>
        </span>`)}_renderCleanMoon(e,t,o,s,r){let a=s?40:o?50:58,l=r-a-(s?12:16),d=s?12:13.5,u=this._fitLabel([this._moonTimesText(e,t,!1),this._moonTimesText(e,t,!0),this._moonRiseTime(e,t)],l,d,dt)??this._moonRiseTime(e,t),p=e.moon.haPhaseName??e.moon.phase.phaseKey,m=jn(e.moon.phase.illumination,t.locale),g=`${m} ${t.t("illumination")}`,b=this._fitLabel([g,m],l,s?18:24,dt)??m,$=s?20:o?24:28;return this._cleanItem("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${t.t(p)}, ${g}`,S`<span class="clean-badge moon" style=${K({width:`${a}px`,height:`${a}px`})}>
          <svg width=${$} height=${$} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 3.2a9 9 0 1 0 5.3 13.6A7.4 7.4 0 0 1 15.5 3.2z" fill="currentColor" />
          </svg>
        </span>
        <span class="clean-item-text">
          <span class="clean-item-label"
            >${this._fitLabel([t.t(p),t.t("moon")],l,13,Ot)??t.t("moon")}</span
          >
          <span class="clean-item-value">${b}</span>
          <span class="clean-item-sub" title=${this._moonTimesText(e,t,!1)}
            >${u}</span
          >
        </span>`)}_renderSceneHeader(e,t,o,s,r){let a=this._primaryCountdown(e,t),l=t.t(this._phaseKey(e)),d=e.locationName||t.t("title"),u=mn(e.now,t),p=s<480?12:16,m=s-2*p,g=30+Math.max(d.length*24*Ot,u.length*13*dt),b=(M,R)=>M.length*13*Ot+28+R,$=m-g-12,w=b(l,17)+8,_=(a?[{phase:!0,text:a.compact},{phase:!1,text:a.compact},{phase:!0,text:a.duration},{phase:!1,text:a.duration},{phase:!1,text:null}]:[{phase:!0,text:null},{phase:!1,text:null}]).find(M=>(M.phase?w:0)+(M.text?b(M.text,Yo+6):0)<=$)??{phase:!1,text:null};return S`
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
            <span class="scene-title">${d}</span>
            <span class="scene-date">${u}</span>
          </div>
        </div>
        <div class="scene-chips">
          ${a&&_.text?S`<span
                class="scene-chip countdown-chip"
                data-body=${a.body}
                role="img"
                aria-label=${a.long}
                title=${a.title}
                >${a.icon}<span>${_.text}</span></span
              >`:E}
          ${_.phase?S`<span class="scene-chip phase" title=${l}>
                <span
                  class="scene-dot"
                  style=${K({background:this._phaseColor(e,o)})}
                ></span>
                ${l}
              </span>`:E}
        </div>
      </div>
    `}_sceneTileAction(e){return!e||!this.hass?.states?.[e]?null:()=>Wo(this,this.hass,this._config,{action:"more-info",entity:e},void 0)}_sceneTile(e,t,o,s,r){let a=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o?.())};return S`<div
      class=${ye({"scene-tile":!0,[e]:!0,compact:t,actionable:!!o})}
      role=${o?"button":"group"}
      tabindex=${o?"0":"-1"}
      aria-label=${s}
      @click=${o??E}
      @keydown=${o?a:E}
    >
      ${r}
      ${o&&!t?S`<svg class="scene-chevron" width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
            <path d="M2 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>`:E}
    </div>`}_renderSceneSunTile(e,t,o,s,r){let a=s?38:o?52:62,l=ne(e.sun.altitude,1,t.locale),d=`${Math.round(e.sun.azimuth)}\xB0 ${Ke(e.sun.azimuth,t.language)}`,u=b=>b?se(b,t):"\u2014",p=`${t.t("sunAltitude")} ${l}, ${t.t("azimuth")} ${d}`,m=r-(s?22:30)-a-(s?8:14),g=S`<span
      class="scene-tile-icon"
      style=${K({width:`${a}px`,height:`${a}px`})}
      >${qn(Math.round(a*.55),"#f5a524")}</span
    >`;if(s){let b=this._fitLabel([this._sunTimesText(e,t)],m,11.5,dt);return this._sceneTile("sun",!0,this._sceneTileAction(this._config.entity),p,S`${g}
          <span class="scene-tile-body">
            <span class="scene-tile-label"
              >${this._fitLabel([t.t("sunAltitude"),t.t("sun")],m,12,Ot)??t.t("sun")}</span
            >
            <span class="scene-tile-value">${l}</span>
            ${b?S`<span class="scene-tile-sub">${d}</span>
                  <span class="scene-tile-sub">${b}</span>`:S`<span class="scene-tile-sub">↑ ${u(e.events.sunrise)}</span>
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
        </span>`)}_renderSceneMoonTile(e,t,o,s,r){let a=s?38:o?52:62,l=e.moon.haPhaseName??e.moon.phase.phaseKey,d=jn(e.moon.phase.illumination,t.locale),u=`${d} ${t.t("illumination")}`,p=r-(s?22:30)-a-(s?8:14)-(s?0:24),m=s?11.5:12.5,g=this._fitLabel(this._moonPositionTexts(e,t),p,m,dt)??this._moonPositionTexts(e,t)[1],b=this._fitLabel([this._moonTimesText(e,t,!1),this._moonTimesText(e,t,!0),this._moonRiseTime(e,t)],p,m,dt)??this._moonRiseTime(e,t),$=this._fitLabel([u,d],p,18,dt)??d;return this._sceneTile("moon",s,this._sceneTileAction(this._config.moon_entity||null),`${t.t(l)}, ${u}`,S`<span class="scene-tile-icon moon" style=${K({width:`${a}px`,height:`${a}px`})}
          >${Ue({size:a,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,darkColor:"var(--smc-scene-moon-dark, rgba(92, 102, 160, 0.7))",texture:!s,uid:`${this._uid}-scene-tile-moon`})}</span
        >
        <span class="scene-tile-body">
          <span class="scene-tile-label"
            >${this._fitLabel([t.t(l),t.t("moon")],p,s?12:12.5,Ot)??t.t("moon")}</span
          >
          <span class="scene-tile-value small">${$}</span>
          <span class="scene-tile-sub">${g}</span>
          <span class="scene-tile-sub" title=${this._moonTimesText(e,t,!1)}
            >${b}</span
          >
        </span>`)}_renderHeader(e,t,o,s){let r=e.locationName||t.t("title"),a=e.extras,l=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),d=10.5,u=(x,D=!1)=>x.length*d*.58+20+(D?12:0),m=Math.max(0,l-10-108),g=t.t(this._phaseKey(e)),b=u(g,!0),$=this._primaryCountdown(e,t),w=E,N=!0;if($){let x=u($.compact)+Yo,D=u($.duration)+Yo,v=null;x+b<=m?(v=$.compact,m-=x):D+b<=m?(v=$.duration,m-=D):D<=m&&(v=$.duration,m-=D,N=!1),v!==null&&(w=S`<span
          class="meta-chip countdown-chip"
          data-body=${$.body}
          role="img"
          aria-label=${$.long}
          title=${$.title}
          >${$.icon}<span>${v}</span></span
        >`)}N&&(m-=b);let _=E;if(e.daylightMinutes!==null){let x=Wn(e.daylightMinutes,t.t),D=a.daylightDeltaMinutes===null?"":` ${hs(a.daylightDeltaMinutes,t.t)}`,v=`${t.t("dayLength")} ${x}${D}`,H=u(v);H<=m&&(m-=H,_=S`<span class="meta-chip" title=${t.t("dayLength")}
          >${v}</span
        >`)}let M=E,R=u(a.timeZoneLongName);return R<=m&&(m-=R,M=S`<span class="meta-chip">${a.timeZoneLongName}</span>`),S`
      <div class="header" style=${K({height:`${s.headerHeight}px`})}>
        <div class="header-text">
          <span class="title">${r}</span>
          <span class="subtitle">${mn(e.now,t)}</span>
        </div>
        <div class="header-meta">
          ${w}${_}${M}
          ${N?S`<span class="phase-chip" title=${g}>
                <span
                  class="phase-dot"
                  style=${K({background:this._phaseColor(e,o)})}
                ></span>
                ${g}
              </span>`:E}
        </div>
      </div>
    `}_countdowns(e,t){let o=this._countdownCache;if(o&&o.model===e&&o.context===t)return[...o.entries];let s=this._computeCountdowns(e,t);return this._countdownCache={model:e,context:t,entries:s},[...s]}_computeCountdowns(e,t){let o=this._config;if(!o?.show_remaining_time)return[];let s=e.now.getTime(),r=[],a=(g,b,$,w,N,_=!1)=>{if(!g)return;let M=(g.time.getTime()-s)/6e4;if(!(M>=0))return;let R=M<1,x=R?t.t("countdownNow"):Wn(M,t.t),D=v=>R?t.t("nowFormat",{event:t.t(v)}):t.t("untilFormat",{event:t.t(v),duration:x});r.push({minutes:M,compact:D($??b),duration:x,time:g.time,rising:g.rising,trailing:_,name:t.t(b),long:D(b),title:`${t.t(b)} ${se(g.time,t)}${g.dayOffset>0?` (${Bn(g.dayOffset,t.t)})`:""}`,icon:w,body:N})},l=e.extras.nextSunEvent;a(l,l?.rising?"sunrise":"sunset",l?.rising?"sunriseShort":"sunsetShort",l?.rising?Bo(ht):jo(ht),"sun");let d=e.extras.nextTwilightEvent;if(d){let g=this._twilightKeys();a(d,d.rising?g.dawn:g.dusk,d.rising?g.dawnShort:g.duskShort,d.rising?Vn(ht):Zn(ht),"twilight")}let u=e.extras.nextMoonEvent;a(u,u?.rising?"moonrise":"moonset",u?.rising?"moonriseShort":"moonsetShort",u?.rising?Vo(ht):Ss(ht),"moon");let p=e.extras.goldenHour;if(p){let g=p.active?p.end:p.start;g&&a({time:g,rising:!p.active,dayOffset:this._dayOffset(g,e)},p.active?"goldenHourEnd":"goldenHour",p.active?"goldenHourEndShort":"goldenHourShort",Ms(ht),"golden")}let m=e.extras.nextFullMoon;return o.show_moon&&m&&a({time:m.time,rising:!0,dayOffset:this._dayOffset(m.time,e)},"fullMoon",null,Vo(ht),"moon",!0),r.sort((g,b)=>+!!g.trailing-+!!b.trailing||g.minutes-b.minutes)}_orderedCountdowns(e,t){let o=this._countdowns(e,t),s=this._config?.remaining_time_focus;if(s==="next")return o;let r=s==="golden_hour"?["sun","golden"]:["sun"];for(let a of r){let l=o.findIndex(d=>d.body===a&&!d.trailing);l>0&&o.unshift(...o.splice(l,1))}return o}_dayOffset(e,t){return Ce(e,t.timeZone)-Ce(t.now,t.timeZone)}_primaryCountdown(e,t){return this._orderedCountdowns(e,t).find(o=>!o.trailing)}_chartCountdown(e,t,o){let s=this._primaryCountdown(e,t);return s?{time:s.time,rising:s.rising,body:s.body,label:o.showHeader?null:`${s.rising?"\u2191":"\u2193"} ${s.duration}`,title:s.long}:null}_twilightKeys(){let e=this._config?.twilight_level;return e==="nautical"?{dawn:"nauticalDawn",dusk:"nauticalDusk",dawnShort:null,duskShort:null}:e==="astronomical"?{dawn:"astronomicalDawn",dusk:"astronomicalDusk",dawnShort:null,duskShort:null}:{dawn:"civilDawn",dusk:"civilDusk",dawnShort:"civilDawnShort",duskShort:"civilDuskShort"}}_renderLegend(e,t){return S`
      <div class="legend" aria-hidden="true" style=${K({height:`${t}px`})}>
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
    `}_renderSkyReadout(e,t,o,s){let r=this._config,a=[],l=(d,u,p)=>{let m=ne(u,1,t.locale),g=`${Math.round(p)}\xB0 ${Ke(p,t.language)}`;return S`<span
        title=${`${t.t("elevation")} ${m} \xB7 ${t.t("azimuth")} ${g}`}
        >${t.t("positionReadout",{body:d,altitude:m,degrees:String(Math.round(p)),direction:Ke(p,t.language)})}</span
      >`};r.show_sun&&a.push(l(t.t("sun"),e.sun.altitude,e.sun.azimuth)),r.show_moon&&a.push(l(t.t("moon"),e.moon.position.apparentAltitude,e.moon.position.azimuth));for(let d of this._orderedCountdowns(e,t).slice(0,s))a.push(S`<span title=${d.title}>${d.long}</span>`);return a.length===0||o<150?E:S`<div class="sky-readout">${a}</div>`}_countdownRows(e){let t=this._config,o=(t.show_sun?1:0)+(t.show_moon?1:0),s=e.chartHeight+e.legendHeight+(e.showLegend?No:0),r=o*Lo+No,a=s-r-rs;return Math.max(0,Math.min(3,Math.floor(a/Lo)))}_renderFooter(e,t,o,s){let r=o.twilight_level==="nautical"?"footerTwilightNautical":o.twilight_level==="astronomical"?"footerTwilightAstronomical":o.twilight_level==="all"?"footerTwilightAll":"footerTwilightCivil",a=s.chartWidth+(s.skyViewSide?s.skyViewWidth+10:0),l=t.t(r),d=e.extras.timeZoneLongName,u=t.t("footerMethod"),p=`${l} \xB7 ${d} \xB7 ${u}`,m=9.5*.55,g=w=>w.length*m<=a,b=g(`${l} \xB7 ${d}`)?`${l} \xB7 ${d}`:l,$=g(`${b} \xB7 ${u}`);return S`
      <div
        class="footer"
        title=${p}
        style=${K({height:`${s.footerHeight}px`})}
      >
        <span class="part">${b}</span>
        ${$?S`<span class="part">${u}</span>`:E}
      </div>
    `}_phaseKey(e){if(e.day.polar==="polar-day")return"phasePolarDay";if(e.day.polar==="polar-night")return"phasePolarNight";switch(e.sun.phase){case"day":return"phaseDay";case"civil":return"phaseCivil";case"nautical":return"phaseNautical";case"astronomical":return"phaseAstronomical";default:return"phaseNight"}}_phaseColor(e,t){switch(e.sun.phase){case"day":return t.day;case"civil":return t.civil;case"nautical":return t.nautical;case"astronomical":return t.astronomical;default:return t.night}}_fitLabel(e,t,o,s=.7){for(let r of e)if(r&&r.length*o*s<=t)return r;return null}_renderCountdownTile(e,t,o,s,r,a,l){let u=e.body==="sun"&&!e.rising?t.t("tileDaylightLeft"):t.t("tileUntil",{event:e.name}),p=this._fitLabel([u,e.name],r,a),m=this._fitLabel([e.duration],r,l+2)??e.duration;return S`<div
      class=${ye({"event-tile":!0,countdown:!0,rising:e.rising,compact:o})}
      data-body=${e.body}
      style=${K({gridColumn:`span ${s}`})}
      title=${e.title}
      role="img"
      aria-label=${e.long}
    >
      <span class="event-head">
        <span class="event-icon">${e.icon}</span>
        <span class="event-time" style=${K({fontSize:`${l+2}px`})}
          >${m}</span
        >
        ${o&&p?S`<span class="event-label" style=${K({fontSize:`${a}px`})}
              >${p}</span
            >`:E}
      </span>
      ${!o&&p?S`<span class="event-label" style=${K({fontSize:`${a}px`})}
            >${p}</span
          >`:E}
    </div>`}_renderEvents(e,t,o){let{compact:s,padding:r}=o,a=o.chartWidth+(o.skyViewSide?o.skyViewWidth+10:0),l=this._config,d=[];if(l.show_twilight&&d.push({key:"civilDawn",kind:"dawn",label:t.t("civilDawn"),shortLabel:t.t("civilDawnShort"),time:e.events.civilDawn,icon:Vn(s?14:16),missingText:t.t("noEvent")}),d.push({key:"sunrise",kind:"sunrise",label:t.t("sunrise"),shortLabel:t.t("sunriseShort"),time:e.events.sunrise,icon:Bo(s?14:16),missingText:t.t("noSunrise")}),d.push({key:"sunset",kind:"sunset",label:t.t("sunset"),shortLabel:t.t("sunsetShort"),time:e.events.sunset,icon:jo(s?14:16),missingText:t.t("noSunset")}),l.show_twilight&&d.push({key:"civilDusk",kind:"dusk",label:t.t("civilDusk"),shortLabel:t.t("civilDuskShort"),time:e.events.civilDusk,icon:Zn(s?14:16),missingText:t.t("noEvent")}),l.twilight_level==="all"||l.show_astronomical_details){let T=[["nauticalDawn",e.events.nauticalDawn,"dawn"],["nauticalDusk",e.events.nauticalDusk,"dusk"],["astronomicalDawn",e.events.astronomicalDawn,"dawn"],["astronomicalDusk",e.events.astronomicalDusk,"dusk"]];for(let[F,Y,j]of T)d.push({key:F,kind:j,label:t.t(F),shortLabel:t.t(F),time:Y,icon:j==="dawn"?Vn(s?13:15):Zn(s?13:15),secondary:!0,missingText:t.t("noEvent")})}let u=a<300?3:a<420?4:a<560?6:8,p=l.show_countdown_tile?this._primaryCountdown(e,t):void 0,m=p?2:0,g=Math.max(2,u-m),b=T=>T.secondary?2:T.kind==="sunrise"||T.kind==="sunset"?0:1,$=new Set([...d].map((T,F)=>({tile:T,index:F})).sort((T,F)=>b(T.tile)-b(F.tile)||T.index-F.index).slice(0,g).map(T=>T.tile)),w=d.filter(T=>$.has(T)),N=e.now.getTime(),_=w.filter(T=>T.time&&T.time.getTime()>N).sort((T,F)=>T.time.getTime()-F.time.getTime())[0],M=6,R=w.length+m,D=Math.max(40,a-2*r-M*(R-1))/R-10,v=s?D<120?8.5:9:D<92?8.5:9.5,H=D<74?11:D<96?12:12.5;return S`
      <div
        class="events"
        style=${K({gap:`${M}px`,height:`${o.eventsHeight}px`})}
      >
        ${p?this._renderCountdownTile(p,t,s,m,D*m+(m-1)*(M+10),v,H):E}
        ${w.map(T=>{let F=this._fitLabel([T.label,T.shortLabel],D,v),Y=T.time?se(T.time,t):T.missingText,j=this._fitLabel([Y,"\u2014"],D,H)??"\u2014";return S`
            <div
              class=${ye({"event-tile":!0,[T.kind]:!0,secondary:!!T.secondary,next:T===_,compact:s})}
              title=${`${T.label}: ${Y}`}
            >
              <span class="event-head">
                <span class="event-icon">${T.icon}</span>
                <span
                  class=${ye({"event-time":!0,missing:!T.time})}
                  style=${K({fontSize:`${H}px`})}
                >
                  ${j}
                </span>
                ${s&&F?S`<span
                      class="event-label"
                      style=${K({fontSize:`${v}px`})}
                      >${F}</span
                    >`:E}
              </span>
              ${!s&&F?S`<span
                    class="event-label"
                    style=${K({fontSize:`${v}px`})}
                    >${F}</span
                  >`:E}
            </div>
          `})}
      </div>
    `}_renderDetails(e,t,o,s,r,a,l){let d=e.extras,u=e.moon.haPhaseName??e.moon.phase.phaseKey,p=s.skyViewInline&&l>=430,m=(o.show_sun?1:0)+(o.show_moon?1:0)+(p?1:0),b=Math.max(60,l-2*s.padding-8*Math.max(0,m-1))/Math.max(1,m)-20-26-9,$=this._fitLabel([t.t("sunAltitude"),t.t("elevation")],b,10.5),w=ne(e.sun.altitude,1,t.locale),N=`${Math.round(e.sun.azimuth)}\xB0 ${Ke(e.sun.azimuth,r)}`,_=d.sunBelowHorizon!==null?`${ne(d.sunBelowHorizon,1,t.locale)} ${t.t("belowHorizon")}`:null,M=this._fitLabel([_?`${_} \xB7 ${N}`:`${t.t("azimuth")} ${N}`,_??N,N],b,9.5),R=d.sunriseAzimuth!==null?`${Math.round(d.sunriseAzimuth)}\xB0 ${Ke(d.sunriseAzimuth,r)}`:null,x=d.sunsetAzimuth!==null?`${Math.round(d.sunsetAzimuth)}\xB0 ${Ke(d.sunsetAzimuth,r)}`:null,D=o.show_astronomical_details&&R&&x?this._fitLabel([t.t("sunAzimuthAtEvents",{rise:R,set:x}),`${Math.round(d.sunriseAzimuth)}\xB0 / ${Math.round(d.sunsetAzimuth)}\xB0`],b,9.5):null,v=o.show_astronomical_details?this._fitLabel([`${t.t("solarNoon")} ${e.events.solarNoon?se(e.events.solarNoon,t):"\u2014"} \xB7 ${ne(e.day.maxAltitude,1,t.locale)}`,e.events.solarNoon?se(e.events.solarNoon,t):null],b,9.5):null,H=this._fitLabel([t.t(u),t.t("moon")],b,10.5),T=jn(e.moon.phase.illumination,t.locale),F=this._fitLabel([`${T} ${t.t("illumination")}`,T],b,13),Y=e.moon.position.apparentAltitude,j=ne(Y,1,t.locale),Z=`${Math.round(e.moon.position.azimuth)}\xB0 ${Ke(e.moon.position.azimuth,r)}`,C=`${t.t("elevation")} ${j} \xB7 ${t.t("azimuth")} ${Z}`,L=Y>=0?[`${t.t("elevation")} ${j} \xB7 ${Z}`,`${j} \xB7 ${Z}`,j]:[`${ne(Math.abs(Y),1,t.locale)} ${t.t("belowHorizon")} \xB7 ${Z}`,`${ne(Math.abs(Y),1,t.locale)} ${t.t("belowHorizon")}`,j],G=null,A="";if(d.moonDistance){let{current:I,min:re,max:ue}=d.moonDistance,W=Math.max(1,ue-re),ge=I<=re+W*.2,xe=I>=re+W*.8,Me=Kn(I,t.locale),mt=ge?t.t("nearPerigee"):xe?t.t("nearApogee"):"";A=`${t.t("moonDistance")}: ${Me} \xB7 ${t.t("distanceRange",{min:Kn(re,t.locale),max:Kn(ue,t.locale)})}`,G=this._fitLabel(mt?[`${Me} \xB7 ${mt}`,Me]:[Me],b,9.5)}let O=this._fitLabel(G?L.flatMap(I=>[`${I} \xB7 ${G}`,I]):L,b,9.5),Q=G!==null&&(O?.includes(G)??!1),J=null,$e="";if(o.show_astronomical_details&&d.nextFullMoon){let I=d.nextFullMoonDays??0,re=I<=0?t.t("dayToday"):t.t("inDays",{days:String(I)}),ue=`${t.t("nextFullMoon")} ${re}`,W=d.blueMoon?` \xB7 ${t.t("blueMoon")}`:"",ge=`${ue}${W}${d.moonFolkName?` \xB7 ${d.moonFolkName}`:""}`;$e=d.blueMoon?t.t("blueMoonHint"):d.moonFolkName?t.t("folkNameHint"):t.t("nextFullMoon"),J=this._fitLabel([ge,`${ue}${W}`,ue],b,9.5)}let V=o.show_moon_times?this._fitLabel([this._moonTimesText(e,t,!1),this._moonTimesText(e,t,!0)],b,9.5):null,ce=[];O&&ce.push({text:O,title:C,position:!0}),V&&ce.push({text:V,title:null}),J&&ce.push({text:J,title:$e}),G&&!Q&&ce.push({text:G,title:A});let he=ce.slice(0,s.detailsHeight>=Ho?3:2),ee=Q||he.some(I=>I.text===G),pe=G&&!ee?A||G:null;return S`
      <div
        class="details"
        style=${K({gap:"8px",height:`${s.detailsHeight}px`})}
      >
        ${o.show_sun?S`
              <div class="detail-tile sun">
                <span class="detail-icon">${qn(20,a?"#ffd166":"#f5a524")}</span>
                <span class="detail-content">
                  ${$?S`<span class="detail-title">${$}</span>`:E}
                  <span class="detail-value">${w}</span>
                  ${M?S`<span class="detail-sub">${M}</span>`:E}
                  ${v?S`<span class="detail-sub">${v}</span>`:E}
                  ${D?S`<span class="detail-sub">${D}</span>`:E}
                </span>
              </div>
            `:E}
        ${o.show_moon?S`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${Ue({size:26,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle,uid:`${this._uid}-moon-detail`})}
                </span>
                <span class="detail-content">
                  ${H?S`<span class="detail-title">${H}</span>`:E}
                  ${F?S`<span class="detail-value">${F}</span>`:E}
                  ${he.map(I=>{let re=[I.title,I.position?pe:null].filter(Boolean).join(" \xB7 ")||null;return S`<span class="detail-sub" title=${re??E}
                      >${I.text}</span
                    >`})}
                </span>
              </div>
            `:E}
        ${p?S`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${Uo({width:56,height:56,sun:o.show_sun?{altitude:e.sun.altitude,azimuth:e.sun.azimuth}:null,moon:o.show_moon?{altitude:e.moon.position.apparentAltitude,azimuth:e.moon.position.azimuth,illumination:e.moon.phase.illumination,brightLimbAngle:e.moon.phase.brightLimbAngle}:null,sunTrack:e.sunTrack,moonPhase:e.moon.phase,showSun:o.show_sun,showMoon:o.show_moon,palette:a?Eo:Co,format:t,animations:o.animations,uid:`${this._uid}-sky-inline`,showCardinals:!1,seed:Ce(e.now,e.timeZone)})}
                </span>
              </div>
            `:E}
      </div>
    `}_moonTimesText(e,t,o){let s=e.extras.moonRise,r=e.extras.moonSet,a=s&&s.dayOffset!==0?` ${Bn(s.dayOffset,t.t)}`:"",l=s?`\u2191 ${se(s.time,t)}${a}`:"\u2191 \u2014";if(o)return l;let d=r&&r.dayOffset!==0?` ${Bn(r.dayOffset,t.t)}`:"",u=r?`\u2193 ${se(r.time,t)}${d}`:"\u2193 \u2014";return`${l} \xB7 ${u}`}_renderMinimalTimes(e,t,o,s){if(o.minimalTimesHeight<=0)return E;let r=t.t,a=[];if(s.minimal_show_times&&e.events.sunrise){let d=se(e.events.sunrise,t);a.push(S`<span class="minimal-time rise" title=${`${r("sunrise")} ${d}`}
          >↑ ${d}</span
        >`)}if(s.minimal_show_zenith&&e.events.solarNoon){let d=se(e.events.solarNoon,t),u=o.chartWidth<250?d:`${r("zenith")} ${d}`;a.push(S`<span class="minimal-time zenith" title=${`${r("zenith")} ${d}`}
          >${u}</span
        >`)}if(s.minimal_show_times&&e.events.sunset){let d=se(e.events.sunset,t);a.push(S`<span class="minimal-time set" title=${`${r("sunset")} ${d}`}
          >↓ ${d}</span
        >`)}if(a.length===0)return E;let l=k(c(o.minimalTimesHeight*.78,1),8,12);return S`<div
      class="minimal-times"
      style=${K({height:`${o.minimalTimesHeight}px`,fontSize:`${l}px`,lineHeight:`${o.minimalTimesHeight}px`})}
    >
      ${a}
    </div>`}_minimalAriaLabel(e,t){return`${this._minimalTitle(e,t)}, ${t.t("popupOpenHint")}`}_minimalTitle(e,t){let o=[this._ariaLabel(e,t)];o.push(`${t.t("sun")} ${ne(e.sun.altitude,0,t.locale)}`);let s=this._primaryCountdown(e,t);return s&&o.push(s.long),o.join(" \xB7 ")}_ariaLabel(e,t){let o=[t.t("title")];return o.push(t.t(this._phaseKey(e))),e.events.sunrise&&o.push(`${t.t("sunrise")} ${se(e.events.sunrise,t)}`),e.events.sunset&&o.push(`${t.t("sunset")} ${se(e.events.sunset,t)}`),o.join(", ")}};Xe.styles=Is,He([Dt({attribute:!1})],Xe.prototype,"hass",1),He([xt()],Xe.prototype,"_config",2),He([xt()],Xe.prototype,"_width",2),He([xt()],Xe.prototype,"_tick",2),Xe=He([Cn(Ao)],Xe);typeof window<"u"&&(window.customCards=window.customCards||[],window.customCards.some(n=>n.type===`custom:${Gn}`)||window.customCards.push({type:`custom:${Gn}`,name:"Sun & Moon Card",description:"Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, D\xE4mmerungsphasen sowie Mondphase und Mondstand.",preview:!0,documentationURL:"https://github.com/cercytrone/ha-sun-moon-card"}));export{Xe as SunMoonCard};
