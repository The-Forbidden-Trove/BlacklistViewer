(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{6762:(e,t,r)=>{"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}r.d(t,{g:()=>n})},1414:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(6762),i=r(1684),s=r(2049),a=r(3673),o=r(6486),u=(0,a.forwardRef)(function(e,t){let{defaultLocale:r,href:u,locale:l,localeCookie:c,onClick:d,prefetch:h,unprefixed:f,...p}=e,m=(0,o.Z)(),y=null!=l&&l!==m,v=l||m,g=function(){let[e,t]=(0,a.useState)();return(0,a.useEffect)(()=>{t(window.location.host)},[]),e}(),w=g&&f&&(f.domains[g]===v||!Object.keys(f.domains).includes(g)&&m===r&&!l)?f.pathname:u,b=(0,s.usePathname)();return y&&(h&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),h=!1),a.createElement(i.default,(0,n.g)({ref:t,href:w,hrefLang:y?l:void 0,onClick:function(e){(function(e,t,r,n){if(!e||!(n!==r&&null!=n)||!t)return;let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(t),{name:s,...a}=e;a.path||(a.path=""!==i?i:"/");let o="".concat(s,"=").concat(n,";");for(let[e,t]of Object.entries(a))o+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(o+="="+t),o+=";";document.cookie=o})(c,b,m,l),d&&d(e)},prefetch:h},p))})},5837:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(6762),i=r(2049),s=r(3673),a=r(6486);function o(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function u(e,t){let r;return"string"==typeof e?r=l(t,e):(r={...e},e.pathname&&(r.pathname=l(t,e.pathname))),r}function l(e,t){let r=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),r+=t}r(643);var c=r(1414);let d=(0,s.forwardRef)(function(e,t){let{href:r,locale:l,localeCookie:d,localePrefixMode:h,prefix:f,...p}=e,m=(0,i.usePathname)(),y=(0,a.Z)(),v=l!==y,[g,w]=(0,s.useState)(()=>o(r)&&("never"!==h||v)?u(r,f):r);return(0,s.useEffect)(()=>{m&&w(function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;if(!o(e))return e;let s=n===i||n.startsWith("".concat(i,"/"));return(t!==r||s)&&null!=i?u(e,i):e}(r,l,y,m,f))},[y,r,l,m,f]),s.createElement(c.default,(0,n.g)({ref:t,href:g,locale:l,localeCookie:d},p))});d.displayName="ClientLink"},6486:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(2049),i=r(2905);let s="locale";function a(){let e;let t=(0,n.useParams)();try{e=(0,i.useLocale)()}catch(r){if("string"!=typeof(null==t?void 0:t[s]))throw r;e=t[s]}return e}},7024:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(6762),i=r(3673),s=r(2233);function a(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");return i.createElement(s.IntlProvider,(0,n.g)({locale:t},r))}},8255:e=>{e.exports={style:{fontFamily:"'fontinSmallcaps', 'fontinSmallcaps Fallback'"},className:"__className_d794cb",variable:"__variable_d794cb"}},7254:(e,t,r)=>{"use strict";r.d(t,{Dx:()=>J,aU:()=>et,dk:()=>ee,fC:()=>$,l_:()=>B,x8:()=>er,zt:()=>Y});var n=r(3673),i=r(6332),s=r(8072),a=r(5478),o=r(4103),u=r(32),l=r(6957),c=r(6869),d=r(6451),h=r(9151),f=r(1096),p=r(1091),m=r(8414),y=r(3142),v=r(9004),g="ToastProvider",[w,b,C]=(0,o.B)("Toast"),[x,E]=(0,u.b)("Toast",[C]),[P,T]=x(g),D=e=>{let{__scopeToast:t,label:r="Notification",duration:i=5e3,swipeDirection:s="right",swipeThreshold:a=50,children:o}=e,[u,l]=n.useState(null),[c,d]=n.useState(0),h=n.useRef(!1),f=n.useRef(!1);return r.trim()||console.error("Invalid prop `label` supplied to `".concat(g,"`. Expected non-empty `string`.")),(0,v.jsx)(w.Provider,{scope:t,children:(0,v.jsx)(P,{scope:t,label:r,duration:i,swipeDirection:s,swipeThreshold:a,toastCount:c,viewport:u,onViewportChange:l,onToastAdd:n.useCallback(()=>d(e=>e+1),[]),onToastRemove:n.useCallback(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:f,children:o})})};D.displayName=g;var q="ToastViewport",O=["F8"],R="toast.viewportPause",M="toast.viewportResume",F=n.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:i=O,label:s="Notifications ({hotkey})",...o}=e,u=T(q,r),c=b(r),d=n.useRef(null),f=n.useRef(null),p=n.useRef(null),m=n.useRef(null),y=(0,a.e)(t,m,u.onViewportChange),g=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=u.toastCount>0;n.useEffect(()=>{let e=e=>{var t;0!==i.length&&i.every(t=>e[t]||e.code===t)&&(null===(t=m.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i]),n.useEffect(()=>{let e=d.current,t=m.current;if(C&&e&&t){let r=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(R);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},n=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(M);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||n()},s=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",i),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",s),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",i),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[C,u.isClosePausedRef]);let x=n.useCallback(e=>{let{tabbingDirection:t}=e,r=c().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[c]);return n.useEffect(()=>{let e=m.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,i,s;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(n=f.current)||void 0===n||n.focus();return}let o=x({tabbingDirection:a?"backwards":"forwards"}),u=o.findIndex(e=>e===r);z(o.slice(u+1))?t.preventDefault():a?null===(i=f.current)||void 0===i||i.focus():null===(s=p.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,x]),(0,v.jsxs)(l.I0,{ref:d,role:"region","aria-label":s.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:C?void 0:"none"},children:[C&&(0,v.jsx)(S,{ref:f,onFocusFromOutsideViewport:()=>{z(x({tabbingDirection:"forwards"}))}}),(0,v.jsx)(w.Slot,{scope:r,children:(0,v.jsx)(h.WV.ol,{tabIndex:-1,...o,ref:y})}),C&&(0,v.jsx)(S,{ref:p,onFocusFromOutsideViewport:()=>{z(x({tabbingDirection:"backwards"}))}})]})});F.displayName=q;var A="ToastFocusProxy",S=n.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...i}=e,s=T(A,r);return(0,v.jsx)(y.T,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;(null===(t=s.viewport)||void 0===t?void 0:t.contains(r))||n()}})});S.displayName=A;var k="Toast",j=n.forwardRef((e,t)=>{let{forceMount:r,open:n,defaultOpen:i,onOpenChange:a,...o}=e,[u=!0,l]=(0,p.T)({prop:n,defaultProp:i,onChange:a});return(0,v.jsx)(d.z,{present:r||u,children:(0,v.jsx)(I,{open:u,...o,ref:t,onClose:()=>l(!1),onPause:(0,f.W)(e.onPause),onResume:(0,f.W)(e.onResume),onSwipeStart:(0,s.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,s.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,s.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,s.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),l(!1)})})})});j.displayName=k;var[N,Q]=x(k,{onClose(){}}),I=n.forwardRef((e,t)=>{let{__scopeToast:r,type:o="foreground",duration:u,open:c,onClose:d,onEscapeKeyDown:p,onPause:m,onResume:y,onSwipeStart:g,onSwipeMove:b,onSwipeCancel:C,onSwipeEnd:x,...E}=e,P=T(k,r),[D,q]=n.useState(null),O=(0,a.e)(t,e=>q(e)),F=n.useRef(null),A=n.useRef(null),S=u||P.duration,j=n.useRef(0),Q=n.useRef(S),I=n.useRef(0),{onToastAdd:K,onToastRemove:V}=P,_=(0,f.W)(()=>{var e;(null==D?void 0:D.contains(document.activeElement))&&(null===(e=P.viewport)||void 0===e||e.focus()),d()}),H=n.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(I.current),j.current=new Date().getTime(),I.current=window.setTimeout(_,e))},[_]);n.useEffect(()=>{let e=P.viewport;if(e){let t=()=>{H(Q.current),null==y||y()},r=()=>{let e=new Date().getTime()-j.current;Q.current=Q.current-e,window.clearTimeout(I.current),null==m||m()};return e.addEventListener(R,r),e.addEventListener(M,t),()=>{e.removeEventListener(R,r),e.removeEventListener(M,t)}}},[P.viewport,S,m,y,H]),n.useEffect(()=>{c&&!P.isClosePausedRef.current&&H(S)},[c,S,P.isClosePausedRef,H]),n.useEffect(()=>(K(),()=>V()),[K,V]);let W=n.useMemo(()=>D?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,i=""===t.dataset.radixToastAnnounceExclude;if(!n){if(i){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(D):null,[D]);return P.viewport?(0,v.jsxs)(v.Fragment,{children:[W&&(0,v.jsx)(L,{__scopeToast:r,role:"status","aria-live":"foreground"===o?"assertive":"polite","aria-atomic":!0,children:W}),(0,v.jsx)(N,{scope:r,onClose:_,children:i.createPortal((0,v.jsx)(w.ItemSlot,{scope:r,children:(0,v.jsx)(l.fC,{asChild:!0,onEscapeKeyDown:(0,s.M)(p,()=>{P.isFocusedToastEscapeKeyDownRef.current||_(),P.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,v.jsx)(h.WV.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":P.swipeDirection,...E,ref:O,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,s.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==p||p(e.nativeEvent),e.nativeEvent.defaultPrevented||(P.isFocusedToastEscapeKeyDownRef.current=!0,_()))}),onPointerDown:(0,s.M)(e.onPointerDown,e=>{0===e.button&&(F.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,s.M)(e.onPointerMove,e=>{if(!F.current)return;let t=e.clientX-F.current.x,r=e.clientY-F.current.y,n=!!A.current,i=["left","right"].includes(P.swipeDirection),s=["left","up"].includes(P.swipeDirection)?Math.min:Math.max,a=i?s(0,t):0,o=i?0:s(0,r),u="touch"===e.pointerType?10:2,l={x:a,y:o},c={originalEvent:e,delta:l};n?(A.current=l,X("toast.swipeMove",b,c,{discrete:!1})):U(l,P.swipeDirection,u)?(A.current=l,X("toast.swipeStart",g,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(F.current=null)}),onPointerUp:(0,s.M)(e.onPointerUp,e=>{let t=A.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),A.current=null,F.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};U(t,P.swipeDirection,P.swipeThreshold)?X("toast.swipeEnd",x,n,{discrete:!0}):X("toast.swipeCancel",C,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),P.viewport)})]}):null}),L=e=>{let{__scopeToast:t,children:r,...i}=e,s=T(k,t),[a,o]=n.useState(!1),[u,l]=n.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,f.W)(e);(0,m.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>o(!0)),n.useEffect(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,v.jsx)(c.h,{asChild:!0,children:(0,v.jsx)(y.T,{...i,children:a&&(0,v.jsxs)(v.Fragment,{children:[s.label," ",r]})})})},K=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,v.jsx)(h.WV.div,{...n,ref:t})});K.displayName="ToastTitle";var V=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,v.jsx)(h.WV.div,{...n,ref:t})});V.displayName="ToastDescription";var _="ToastAction",H=n.forwardRef((e,t)=>{let{altText:r,...n}=e;return r.trim()?(0,v.jsx)(G,{altText:r,asChild:!0,children:(0,v.jsx)(Z,{...n,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(_,"`. Expected non-empty `string`.")),null)});H.displayName=_;var W="ToastClose",Z=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e,i=Q(W,r);return(0,v.jsx)(G,{asChild:!0,children:(0,v.jsx)(h.WV.button,{type:"button",...n,ref:t,onClick:(0,s.M)(e.onClick,i.onClose)})})});Z.displayName=W;var G=n.forwardRef((e,t)=>{let{__scopeToast:r,altText:n,...i}=e;return(0,v.jsx)(h.WV.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...i,ref:t})});function X(e,t,r,n){let{discrete:i}=n,s=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&s.addEventListener(e,t,{once:!0}),i?(0,h.jH)(s,a):s.dispatchEvent(a)}var U=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),i=Math.abs(e.y),s=n>i;return"left"===t||"right"===t?s&&n>r:!s&&i>r};function z(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var Y=D,B=F,$=j,J=K,ee=V,et=H,er=Z},8633:(e,t,r)=>{"use strict";r.d(t,{S:()=>v});var n=r(9979),i=r(8401),s=r(2214),a=r(4407),o=class extends a.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let s=t.queryKey,a=t.queryHash??(0,n.Rm)(s,t),o=this.get(a);return o||(o=new i.A({cache:this,queryKey:s,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){s.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=r(9685),l=r(8681),c=class extends u.F{#t;#r;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#r=e.mutationCache,this.#t=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#r.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#r.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){this.#n=(0,l.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#i({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#r.canRun(this)});let t="pending"===this.state.status,r=!this.#n.canStart();try{if(!t){this.#i({type:"pending",variables:e,isPaused:r}),await this.#r.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#i({type:"pending",context:t,variables:e,isPaused:r})}let n=await this.#n.start();return await this.#r.config.onSuccess?.(n,e,this.state.context,this),await this.options.onSuccess?.(n,e,this.state.context),await this.#r.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,e,this.state.context),this.#i({type:"success",data:n}),n}catch(t){try{throw await this.#r.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#r.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#i({type:"error",error:t})}}finally{this.#r.runNext(this)}}#i(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#r.notify({mutation:this,type:"updated",action:e})})}},d=class extends a.l{constructor(e={}){super(),this.config=e,this.#s=new Map,this.#a=Date.now()}#s;#a;build(e,t,r){let n=new c({mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){let t=h(e),r=this.#s.get(t)??[];r.push(e),this.#s.set(t,r),this.notify({type:"added",mutation:e})}remove(e){let t=h(e);if(this.#s.has(t)){let r=this.#s.get(t)?.filter(t=>t!==e);r&&(0===r.length?this.#s.delete(t):this.#s.set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#s.get(h(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#s.get(h(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){s.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#s.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,n.X7)(e,t))}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return s.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.ZT))))}};function h(e){return e.options.scope?.id??String(e.mutationId)}var f=r(5687),p=r(4825);function m(e){return{onFetch:(t,r)=>{let i=t.options,s=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u={pages:[],pageParams:[]},l=0,c=async()=>{let r=!1,c=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?r=!0:t.signal.addEventListener("abort",()=>{r=!0}),t.signal)})},d=(0,n.cG)(t.options,t.fetchOptions),h=async(e,i,s)=>{if(r)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let a={queryKey:t.queryKey,pageParam:i,direction:s?"backward":"forward",meta:t.options.meta};c(a);let o=await d(a),{maxPages:u}=t.options,l=s?n.Ht:n.VX;return{pages:l(e.pages,o,u),pageParams:l(e.pageParams,i,u)}};if(s&&a.length){let e="backward"===s,t={pages:a,pageParams:o},r=(e?function(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}:y)(i,t);u=await h(t,r,e)}else{let t=e??a.length;do{let e=0===l?o[0]??i.initialPageParam:y(i,u);if(l>0&&null==e)break;u=await h(u,e),l++}while(l<t)}return u};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r):t.fetchFn=c}}}function y(e,{pages:t,pageParams:r}){let n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}var v=class{#o;#r;#u;#l;#c;#d;#h;#f;constructor(e={}){this.#o=e.queryCache||new o,this.#r=e.mutationCache||new d,this.#u=e.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#h=f.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#f=p.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#h?.(),this.#h=void 0,this.#f?.(),this.#f=void 0)}isFetching(e){return this.#o.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#r.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),r=this.#o.build(this,t),i=r.state.data;return void 0===i?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime((0,n.KC)(t.staleTime,r))&&this.prefetchQuery(t),Promise.resolve(i))}getQueriesData(e){return this.#o.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let i=this.defaultQueryOptions({queryKey:e}),s=this.#o.get(i.queryHash),a=s?.state.data,o=(0,n.SE)(t,a);if(void 0!==o)return this.#o.build(this,i).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return s.V.batch(()=>this.#o.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state}removeQueries(e){let t=this.#o;s.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#o,n={type:"active",...e};return s.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e,t={}){let r={revert:!0,...t};return Promise.all(s.V.batch(()=>this.#o.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e,t={}){return s.V.batch(()=>{if(this.#o.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")return Promise.resolve();let r={...e,type:e?.refetchType??e?.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e,t={}){let r={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(s.V.batch(()=>this.#o.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#o.build(this,t);return r.isStaleByTime((0,n.KC)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){return e.behavior=m(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}ensureInfiniteQueryData(e){return e.behavior=m(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return p.N.isOnline()?this.#r.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#r}getDefaultOptions(){return this.#u}setDefaultOptions(e){this.#u=e}setQueryDefaults(e,t){this.#l.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#l.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&Object.assign(r,t.defaultOptions)}),r}setMutationDefaults(e,t){this.#c.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#c.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#u.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#u.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#o.clear(),this.#r.clear()}}},4378:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});var n=function(){return null}}}]);