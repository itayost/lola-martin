"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8366ea67-e7b8-5562-ae59-4dee4f860468")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8118],{83803:(e,t,n)=>{n.d(t,{$Z:()=>Q,K7:()=>V,ME:()=>X,Mk:()=>z,Rb:()=>_,dD:()=>f,de:()=>ee,iQ:()=>w,pP:()=>W});var r=n(94684),o=n(69308);function i(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}i({},"Pressable",()=>T),i({},"usePress",()=>f);let u="default",s="",a=new WeakMap;function l(e){(0,r.un)()?("default"===u&&(s=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),u="disabled"):e&&(a.set(e,e.style.userSelect),e.style.userSelect="none")}function c(e){if((0,r.un)())"disabled"===u&&(u="restoring",setTimeout(()=>{(0,r.vg)(()=>{"restoring"===u&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=s||""),s="",u="default")})},300));else if(e&&a.has(e)){let t=a.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),a.delete(e)}}function d(e){return 0===e.mozInputSource&&!!e.isTrusted||0===e.detail&&!e.pointerType}let p=o.createContext(null);function f(e){let{onPress:t,onPressChange:n,onPressStart:i,onPressEnd:u,onPressUp:s,isDisabled:a,isPressed:f,preventFocusOnPress:T,shouldCancelOnPointerExit:P,allowTextSelectionOnPress:w,ref:K,...L}=function(e){let t=(0,o.useContext)(p);if(t){let{register:n,...o}=t;e=(0,r.v6)(o,e),n()}return(0,r.wt)(t,e.ref),e}(e),F=(0,o.useRef)(null);F.current={onPress:t,onPressChange:n,onPressStart:i,onPressEnd:u,onPressUp:s,isDisabled:a,shouldCancelOnPointerExit:P};let[S,C]=(0,o.useState)(!1),M=(0,o.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:N,removeAllGlobalListeners:D}=(0,r.A5)(),k=(0,o.useMemo)(()=>{let e=M.current,t=(t,n)=>{let{onPressStart:r,onPressChange:o,isDisabled:i}=F.current;i||e.didFirePressStart||(r&&r({type:"pressstart",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),o&&o(!0),e.didFirePressStart=!0,C(!0))},n=(t,n,r=!0)=>{let{onPressEnd:o,onPressChange:i,onPress:u,isDisabled:s}=F.current;e.didFirePressStart&&(e.ignoreClickAfterPress=!0,e.didFirePressStart=!1,o&&o({type:"pressend",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),i&&i(!1),C(!1),u&&r&&!s&&u({type:"press",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}))},o=(e,t)=>{let{onPressUp:n,isDisabled:r}=F.current;!r&&n&&n({type:"pressup",pointerType:t,target:e.currentTarget,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})},i=t=>{e.isPressed&&(e.isOverTarget&&n(y(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,D(),w||c(e.target))},u={onKeyDown(n){v(n.nativeEvent)&&n.currentTarget.contains(n.target)&&(E(n.target)&&n.preventDefault(),n.stopPropagation(),e.isPressed||n.repeat||(e.target=n.currentTarget,e.isPressed=!0,t(n,"keyboard"),N(document,"keyup",s,!1)))},onKeyUp(t){v(t.nativeEvent)&&!t.repeat&&t.currentTarget.contains(t.target)&&o(y(e.target,t),"keyboard")},onClick(i){(!i||i.currentTarget.contains(i.target))&&i&&0===i.button&&(i.stopPropagation(),a&&i.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&("virtual"===e.pointerType||d(i.nativeEvent))&&(a||T||(0,r.eC)(i.currentTarget),t(i,"virtual"),o(i,"virtual"),n(i,"virtual")),e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1)}},s=t=>{if(e.isPressed&&v(t)){E(t.target)&&t.preventDefault(),t.stopPropagation(),e.isPressed=!1;let r=t.target;n(y(e.target,t),"keyboard",e.target.contains(r)),D(),(e.target.contains(r)&&g(e.target)||"link"===e.target.getAttribute("role"))&&e.target.click()}};if("undefined"!=typeof PointerEvent){u.onPointerDown=n=>{if(0===n.button&&n.currentTarget.contains(n.target)){var o;if(0===(o=n.nativeEvent).width&&0===o.height||1===o.width&&1===o.height&&0===o.pressure&&0===o.detail){e.pointerType="virtual";return}h(n.currentTarget)&&n.preventDefault(),e.pointerType=n.pointerType,n.stopPropagation(),e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=n.pointerId,e.target=n.currentTarget,a||T||(0,r.eC)(n.currentTarget),w||l(e.target),t(n,e.pointerType),N(document,"pointermove",s,!1),N(document,"pointerup",d,!1),N(document,"pointercancel",p,!1))}},u.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(h(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},u.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&b(t,t.currentTarget)&&o(t,e.pointerType||t.pointerType)};let s=r=>{r.pointerId===e.activePointerId&&(b(r,e.target)?e.isOverTarget||(e.isOverTarget=!0,t(y(e.target,r),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(y(e.target,r),e.pointerType,!1),F.current.shouldCancelOnPointerExit&&i(r)))},d=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(b(t,e.target)?n(y(e.target,t),e.pointerType):e.isOverTarget&&n(y(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,D(),w||c(e.target))},p=e=>{i(e)};u.onDragStart=e=>{e.currentTarget.contains(e.target)&&i(e)}}else{u.onMouseDown=n=>{0===n.button&&n.currentTarget.contains(n.target)&&(h(n.currentTarget)&&n.preventDefault(),n.stopPropagation(),e.ignoreEmulatedMouseEvents||(e.isPressed=!0,e.isOverTarget=!0,e.target=n.currentTarget,e.pointerType=d(n.nativeEvent)?"virtual":"mouse",a||T||(0,r.eC)(n.currentTarget),t(n,e.pointerType),N(document,"mouseup",s,!1)))},u.onMouseEnter=n=>{n.currentTarget.contains(n.target)&&(n.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,t(n,e.pointerType)))},u.onMouseLeave=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,n(t,e.pointerType,!1),F.current.shouldCancelOnPointerExit&&i(t)))},u.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||o(t,e.pointerType))};let s=t=>{if(0===t.button){if(e.isPressed=!1,D(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}b(t,e.target)?n(y(e.target,t),e.pointerType):e.isOverTarget&&n(y(e.target,t),e.pointerType,!1),e.isOverTarget=!1}};u.onTouchStart=n=>{if(!n.currentTarget.contains(n.target))return;n.stopPropagation();let o=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(n.nativeEvent);o&&(e.activePointerId=o.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=n.currentTarget,e.pointerType="touch",a||T||(0,r.eC)(n.currentTarget),w||l(e.target),t(n,e.pointerType),N(window,"scroll",p,!0))},u.onTouchMove=r=>{if(!r.currentTarget.contains(r.target)||(r.stopPropagation(),!e.isPressed))return;let o=m(r.nativeEvent,e.activePointerId);o&&b(o,r.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,t(r,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(r,e.pointerType,!1),F.current.shouldCancelOnPointerExit&&i(r))},u.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target)||(t.stopPropagation(),!e.isPressed))return;let r=m(t.nativeEvent,e.activePointerId);r&&b(r,t.currentTarget)?(o(t,e.pointerType),n(t,e.pointerType)):e.isOverTarget&&n(t,e.pointerType,!1),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,w||c(e.target),D()},u.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&i(t))};let p=t=>{e.isPressed&&t.target.contains(e.target)&&i({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};u.onDragStart=e=>{e.currentTarget.contains(e.target)&&i(e)}}return u},[N,a,T,D,w]);return(0,o.useEffect)(()=>()=>{w||c(M.current.target)},[w]),{isPressed:f||S,pressProps:(0,r.v6)(L,k)}}function g(e){return"A"===e.tagName&&e.hasAttribute("href")}function v(e){let{key:t,code:n,target:r}=e,{tagName:o,isContentEditable:i}=r,u=r.getAttribute("role");return("Enter"===t||" "===t||"Spacebar"===t||"Space"===n)&&"INPUT"!==o&&"TEXTAREA"!==o&&!0!==i&&(!g(r)||"button"===u&&"Enter"!==t)&&("link"!==u||"Enter"===t)}function m(e,t){let n=e.changedTouches;for(let e=0;e<n.length;e++){let r=n[e];if(r.identifier===t)return r}return null}function y(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function b(e,t){let n,r,o=t.getBoundingClientRect(),i=(n=e.width/2||e.radiusX||0,r=e.height/2||e.radiusY||0,{top:e.clientY-r,right:e.clientX+n,bottom:e.clientY+r,left:e.clientX-n});return!(o.left>i.right)&&!(i.left>o.right)&&!(o.top>i.bottom)&&!(i.top>o.bottom)}function h(e){return!e.draggable}function E(e){return"INPUT"!==e.tagName&&"BUTTON"!==e.tagName||"submit"!==e.type}p.displayName="PressResponderContext";let T=o.forwardRef(({children:e,...t},n)=>{let i=(0,o.useRef)();n=null!=n?n:i;let{pressProps:u}=f({...t,ref:n}),s=o.Children.only(e);return o.cloneElement(s,{ref:n,...(0,r.v6)(s.props,u)})});i({},"PressResponder",()=>P);let P=o.forwardRef(({children:e,...t},n)=>{let i=(0,o.useRef)(!1),u=(0,o.useContext)(p),s=(0,r.v6)(u||{},{...t,ref:n||(null==u?void 0:u.ref),register(){i.current=!0,u&&u.register()}});return(0,r.wt)(u,n),(0,o.useEffect)(()=>{i.current||console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.")},[]),o.createElement(p.Provider,{value:s},e)});function w(e){let t,n;return e.isDisabled?{focusProps:{}}:((e.onFocus||e.onFocusChange)&&(t=t=>{t.target===t.currentTarget&&(e.onFocus&&e.onFocus(t),e.onFocusChange&&e.onFocusChange(!0))}),(e.onBlur||e.onFocusChange)&&(n=t=>{t.target===t.currentTarget&&(e.onBlur&&e.onBlur(t),e.onFocusChange&&e.onFocusChange(!1))}),{focusProps:{onFocus:t,onBlur:n}})}i({},"useFocus",()=>w);var K={};i(K,"isFocusVisible",()=>W),i(K,"getInteractionModality",()=>X),i(K,"setInteractionModality",()=>Y),i(K,"useInteractionModality",()=>H),i(K,"useFocusVisible",()=>U),i(K,"useFocusVisibleListener",()=>V);let L=null,F=new Set,S=!1,C=!1,M=!1,N={Tab:!0,Escape:!0};function D(e,t){for(let n of F)n(e,t)}function k(e){C=!0,e.metaKey||!(0,r.cX)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(L="keyboard",D("keyboard",e))}function x(e){L="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(C=!0,D("pointer",e))}function O(e){d(e)&&(C=!0,L="virtual")}function I(e){e.target!==window&&e.target!==document&&(C||M||(L="virtual",D("virtual",e)),C=!1,M=!1)}function R(){C=!1,M=!0}function A(){if("undefined"==typeof window||S)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){C=!0,e.apply(this,arguments)},document.addEventListener("keydown",k,!0),document.addEventListener("keyup",k,!0),document.addEventListener("click",O,!0),window.addEventListener("focus",I,!0),window.addEventListener("blur",R,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",x,!0),document.addEventListener("pointermove",x,!0),document.addEventListener("pointerup",x,!0)):(document.addEventListener("mousedown",x,!0),document.addEventListener("mousemove",x,!0),document.addEventListener("mouseup",x,!0)),S=!0}function W(){return"pointer"!==L}function X(){return L}function Y(e){L=e,D(e,null)}function H(){A();let[e,t]=(0,o.useState)(L);return(0,o.useEffect)(()=>{let e=()=>{t(L)};return F.add(e),()=>{F.delete(e)}},[]),e}function U(e={}){let{isTextInput:t,autoFocus:n}=e,[r,i]=(0,o.useState)(n||W());return V(e=>{i(e)},[t],{isTextInput:t}),{isFocusVisible:r}}function V(e,t,n){A(),(0,o.useEffect)(()=>{let t=(t,r)=>{var o;o=null==n?void 0:n.isTextInput,o&&"keyboard"===t&&r instanceof KeyboardEvent&&!N[r.key]||e(W())};return F.add(t),()=>{F.delete(t)}},t)}function _(e){let t=(0,o.useRef)({isFocusWithin:!1}).current;return e.isDisabled?{focusWithinProps:{}}:{focusWithinProps:{onFocus:n=>{t.isFocusWithin||(e.onFocusWithin&&e.onFocusWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!0),t.isFocusWithin=!0)},onBlur:n=>{t.isFocusWithin&&!n.currentTarget.contains(n.relatedTarget)&&(e.onBlurWithin&&e.onBlurWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!1),t.isFocusWithin=!1)}}}}"undefined"!=typeof document&&("loading"!==document.readyState?A():document.addEventListener("DOMContentLoaded",A)),i({},"useFocusWithin",()=>_),i({},"useHover",()=>z);let B=!1,G=0;function j(){B=!0,setTimeout(()=>{B=!1},50)}function $(e){"touch"===e.pointerType&&j()}function q(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",$):document.addEventListener("touchend",j),G++,()=>{--G>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",$):document.removeEventListener("touchend",j))}}function z(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[u,s]=(0,o.useState)(!1),a=(0,o.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,o.useEffect)(q,[]);let{hoverProps:l,triggerHoverEnd:c}=(0,o.useMemo)(()=>{let e=(e,r)=>{if(a.pointerType=r,i||"touch"===r||a.isHovered||!e.currentTarget.contains(e.target))return;a.isHovered=!0;let o=e.currentTarget;a.target=o,t&&t({type:"hoverstart",target:o,pointerType:r}),n&&n(!0),s(!0)},o=(e,t)=>{if(a.pointerType="",a.target=null,"touch"===t||!a.isHovered)return;a.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),s(!1)},u={};return"undefined"!=typeof PointerEvent?(u.onPointerEnter=t=>{B&&"mouse"===t.pointerType||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,e.pointerType)}):(u.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},u.onMouseEnter=t=>{a.ignoreEmulatedMouseEvents||B||e(t,"mouse"),a.ignoreEmulatedMouseEvents=!1},u.onMouseLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,"mouse")}),{hoverProps:u,triggerHoverEnd:o}},[t,n,r,i,a]);return(0,o.useEffect)(()=>{i&&c({currentTarget:a.target},a.pointerType)},[i]),{hoverProps:l,isHovered:u}}function Q(e){let{ref:t,onInteractOutside:n,isDisabled:r,onInteractOutsideStart:i}=e,u=(0,o.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1,onInteractOutside:n,onInteractOutsideStart:i}).current;u.onInteractOutside=n,u.onInteractOutsideStart=i,(0,o.useEffect)(()=>{if(r)return;let e=e=>{J(e,t)&&u.onInteractOutside&&(u.onInteractOutsideStart&&u.onInteractOutsideStart(e),u.isPointerDown=!0)};if("undefined"!=typeof PointerEvent){let n=e=>{u.isPointerDown&&u.onInteractOutside&&J(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))};return document.addEventListener("pointerdown",e,!0),document.addEventListener("pointerup",n,!0),()=>{document.removeEventListener("pointerdown",e,!0),document.removeEventListener("pointerup",n,!0)}}{let n=e=>{u.ignoreEmulatedMouseEvents?u.ignoreEmulatedMouseEvents=!1:u.isPointerDown&&u.onInteractOutside&&J(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))},r=e=>{u.ignoreEmulatedMouseEvents=!0,u.onInteractOutside&&u.isPointerDown&&J(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))};return document.addEventListener("mousedown",e,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",r,!0),()=>{document.removeEventListener("mousedown",e,!0),document.removeEventListener("mouseup",n,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("touchend",r,!0)}}},[t,u,r])}function J(e,t){if(e.button>0)return!1;if(e.target){let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target))return!1}return t.current&&!t.current.contains(e.target)}function Z(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&n.stopPropagation()}}function ee(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Z(e.onKeyDown),onKeyUp:Z(e.onKeyUp)}}}function et(e){let{onMoveStart:t,onMove:n,onMoveEnd:i}=e,u=(0,o.useRef)({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:s,removeGlobalListener:a}=(0,r.A5)();return{moveProps:(0,o.useMemo)(()=>{let e={},r=()=>{l(),u.current.didMove=!1},o=(e,r,o,i)=>{(0!==o||0!==i)&&(u.current.didMove||(u.current.didMove=!0,null==t||t({type:"movestart",pointerType:r,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})),n({type:"move",pointerType:r,deltaX:o,deltaY:i,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey}))},d=(e,t)=>{c(),u.current.didMove&&(null==i||i({type:"moveend",pointerType:t,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey}))};if("undefined"==typeof PointerEvent){let t=e=>{0===e.button&&(o(e,"mouse",e.pageX-u.current.lastPosition.pageX,e.pageY-u.current.lastPosition.pageY),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY})},n=e=>{0===e.button&&(d(e,"mouse"),a(window,"mousemove",t,!1),a(window,"mouseup",n,!1))};e.onMouseDown=e=>{0===e.button&&(r(),e.stopPropagation(),e.preventDefault(),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY},s(window,"mousemove",t,!1),s(window,"mouseup",n,!1))};let i=e=>{let t=[...e.changedTouches].findIndex(({identifier:e})=>e===u.current.id);if(t>=0){let{pageX:n,pageY:r}=e.changedTouches[t];o(e,"touch",n-u.current.lastPosition.pageX,r-u.current.lastPosition.pageY),u.current.lastPosition={pageX:n,pageY:r}}},l=e=>{[...e.changedTouches].findIndex(({identifier:e})=>e===u.current.id)>=0&&(d(e,"touch"),u.current.id=null,a(window,"touchmove",i),a(window,"touchend",l),a(window,"touchcancel",l))};e.onTouchStart=e=>{if(0===e.changedTouches.length||null!=u.current.id)return;let{pageX:t,pageY:n,identifier:o}=e.changedTouches[0];r(),e.stopPropagation(),e.preventDefault(),u.current.lastPosition={pageX:t,pageY:n},u.current.id=o,s(window,"touchmove",i,!1),s(window,"touchend",l,!1),s(window,"touchcancel",l,!1)}}else{let t=e=>{if(e.pointerId===u.current.id){let t=e.pointerType||"mouse";o(e,t,e.pageX-u.current.lastPosition.pageX,e.pageY-u.current.lastPosition.pageY),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY}}},n=e=>{if(e.pointerId===u.current.id){let r=e.pointerType||"mouse";d(e,r),u.current.id=null,a(window,"pointermove",t,!1),a(window,"pointerup",n,!1),a(window,"pointercancel",n,!1)}};e.onPointerDown=e=>{0===e.button&&null==u.current.id&&(r(),e.stopPropagation(),e.preventDefault(),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY},u.current.id=e.pointerId,s(window,"pointermove",t,!1),s(window,"pointerup",n,!1),s(window,"pointercancel",n,!1))}}let p=(e,t,n)=>{r(),o(e,"keyboard",t,n),d(e,"keyboard")};return e.onKeyDown=e=>{switch(e.key){case"Left":case"ArrowLeft":e.preventDefault(),e.stopPropagation(),p(e,-1,0);break;case"Right":case"ArrowRight":e.preventDefault(),e.stopPropagation(),p(e,1,0);break;case"Up":case"ArrowUp":e.preventDefault(),e.stopPropagation(),p(e,0,-1);break;case"Down":case"ArrowDown":e.preventDefault(),e.stopPropagation(),p(e,0,1)}},e},[u,t,n,i,s,a])}}function en(e,t){let{onScroll:n,isDisabled:i}=e,u=(0,o.useCallback)(e=>{!e.ctrlKey&&(e.preventDefault(),e.stopPropagation(),n&&n({deltaX:e.deltaX,deltaY:e.deltaY}))},[n]);(0,r._q)(t,"wheel",i?null:u)}function er(e){let{isDisabled:t,onLongPressStart:n,onLongPressEnd:i,onLongPress:u,threshold:s=500,accessibilityDescription:a}=e,l=(0,o.useRef)(null),{addGlobalListener:c,removeGlobalListener:d}=(0,r.A5)(),{pressProps:p}=f({isDisabled:t,onPressStart(e){if(("mouse"===e.pointerType||"touch"===e.pointerType)&&(n&&n({...e,type:"longpressstart"}),l.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),u&&u({...e,type:"longpress"}),l.current=null},s),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};c(e.target,"contextmenu",t,{once:!0}),c(window,"pointerup",()=>{setTimeout(()=>{d(e.target,"contextmenu",t)},30)},{once:!0})}},onPressEnd(e){l.current&&clearTimeout(l.current),i&&("mouse"===e.pointerType||"touch"===e.pointerType)&&i({...e,type:"longpressend"})}}),g=(0,r.I8)(u&&!t?a:null);return{longPressProps:(0,r.v6)(p,g)}}i({},"useInteractOutside",()=>Q),i({},"useKeyboard",()=>ee),i({},"useMove",()=>et),i({},"useScrollWheel",()=>en),i({},"useLongPress",()=>er)},94684:(e,t,n)=>{n.d(t,{cy:()=>d,$X:()=>m,eC:()=>y,lg:()=>O,un:()=>x,cX:()=>k,v6:()=>p,vg:()=>P,I8:()=>N,_q:()=>I,A5:()=>w,Bi:()=>c,b0:()=>K,Nf:()=>a,wt:()=>F,w5:()=>L});var r=n(69308);let o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o),u=!!("undefined"!=typeof window&&window.document&&window.document.createElement);var s=n(559048);let a="undefined"!=typeof window?r.useLayoutEffect:()=>{},l=new Map;function c(e){let t,[n,s]=(0,r.useState)(e),c=(0,r.useRef)(null),d=((t=(0,r.useContext)(i))!==o||u||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)(()=>n||`react-aria${t.prefix}-${++t.current}`,[n])),p=(0,r.useCallback)(e=>{c.current=e},[]);return l.set(d,p),a(()=>()=>{l.delete(d)},[d]),(0,r.useEffect)(()=>{let e=c.current;e&&(c.current=null,s(e))}),d}function d(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function p(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=d(n,o):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof o?t[e]=(0,s.A)(n,o):"id"===e&&n&&o?t.id=function(e,t){if(e===t)return e;let n=l.get(e);if(n)return n(t),t;let r=l.get(t);return r?(r(e),e):t}(n,o):t[e]=void 0!==o?o:n}}return t}let f=new Set(["id"]),g=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),v=/^(data-.*)$/;function m(e,t={}){let{labelable:n,propNames:r}=t,o={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(f.has(t)||n&&g.has(t)||(null==r?void 0:r.has(t))||v.test(t))&&(o[t]=e[t]);return o}function y(e){if(function(){if(null==b){b=!1;try{document.createElement("div").focus({get preventScroll(){return b=!0,!0}})}catch(e){}}return b}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let b=null,h=new Map,E=new Set;function T(){if("undefined"==typeof window)return;let e=t=>{let n=h.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),h.delete(t.target)),0===h.size)){for(let e of E)e();E.clear()}};document.body.addEventListener("transitionrun",t=>{let n=h.get(t.target);n||(n=new Set,h.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}function P(e){requestAnimationFrame(()=>{0===h.size?e():E.add(e)})}function w(){let e=(0,r.useRef)(new Map),t=(0,r.useCallback)((t,n,r,o)=>{let i=(null==o?void 0:o.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:i,options:o}),t.addEventListener(n,r,o)},[]),n=(0,r.useCallback)((t,n,r,o)=>{var i;let u=(null==(i=e.current.get(r))?void 0:i.fn)||r;t.removeEventListener(n,u,o),e.current.delete(r)},[]),o=(0,r.useCallback)(()=>{e.current.forEach((e,t)=>{n(e.eventTarget,e.type,t,e.options)})},[n]);return(0,r.useEffect)(()=>o,[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}function K(e,t){let{id:n,"aria-label":r,"aria-labelledby":o}=e;return n=c(n),o&&r?o=[...new Set([...o.trim().split(/\s+/),n])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),r||o||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":o};}function L(e,t){let n=(0,r.useRef)(!0);(0,r.useEffect)(()=>{n.current?n.current=!1:e()},t)}function F(e,t){a(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}},[e,t])}"undefined"!=typeof document&&("loading"!==document.readyState?T():document.addEventListener("DOMContentLoaded",T));let S="undefined"!=typeof window&&window.visualViewport,C=0,M=new Map;function N(e){let[t,n]=(0,r.useState)(void 0);return a(()=>{if(!e)return;let t=M.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${C++}`;n(r);let o=document.createElement("div");o.id=r,o.style.display="none",o.textContent=e,document.body.appendChild(o),t={refCount:0,element:o},M.set(e,t)}return t.refCount++,()=>{0==--t.refCount&&(t.element.remove(),M.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function D(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null==(t=window.navigator.userAgentData)?void 0:t.platform)||window.navigator.platform)}function k(){return D(/^Mac/i);}function x(){return D(/^iPhone/i)||D(/^iPad/i)||k()&&navigator.maxTouchPoints>1;}function O(){return k()||x()}function I(e,t,n,o){let i=(0,r.useRef)(n);i.current=n;let u=null==n;(0,r.useEffect)(()=>{if(u)return;let n=e.current,r=e=>i.current.call(this,e);return n.addEventListener(t,r,o),()=>{n.removeEventListener(t,r,o)}},[e,t,o,u])}},508118:(e,t,n)=>{n.d(t,{Wc:()=>k,og:()=>S});var r=n(69308),o=n(94684),i=n(83803),u=n(559048);function s(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var a={};function l(e){if("virtual"===(0,i.ME)()){let t=document.activeElement;(0,o.vg)(()=>{document.activeElement===t&&document.contains(e)&&(0,o.eC)(e)})}else(0,o.eC)(e)}s(a,"FocusScope",()=>f),s(a,"useFocusManager",()=>g),s(a,"getFocusableTreeWalker",()=>K),s(a,"createFocusManager",()=>L),s({},"focusSafely",()=>l);let c=r.createContext(null),d=null,p=new Map;function f(e){var t,n,i;let u,s,{children:a,contain:l,restoreFocus:f,autoFocus:g}=e,v=(0,r.useRef)(),m=(0,r.useRef)(),y=(0,r.useRef)([]),L=(0,r.useContext)(c),F=null==L?void 0:L.scopeRef;(0,o.Nf)(()=>{let e=v.current.nextSibling,t=[];for(;e&&e!==m.current;)t.push(e),e=e.nextSibling;y.current=t},[a,F]),(0,o.Nf)(()=>(p.set(y,F),()=>{(y===d||T(y,d))&&(!F||p.has(F))&&(d=F),p.delete(y)}),[y,F]),t=y,n=l,u=(0,r.useRef)(),s=(0,r.useRef)(null),(0,o.Nf)(()=>{let e=t.current;if(!n)return;let r=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||t!==d)return;let n=document.activeElement,r=t.current;if(!h(n,r))return;let o=K(b(r),{tabbable:!0},r);o.currentNode=n;let i=e.shiftKey?o.previousNode():o.nextNode();i||(o.currentNode=e.shiftKey?r[r.length-1].nextElementSibling:r[0].previousElementSibling,i=e.shiftKey?o.previousNode():o.nextNode()),e.preventDefault(),i&&P(i,!0)},o=e=>{!d||T(d,t)?(d=t,u.current=e.target):t!==d||E(e.target,t)?t===d&&(u.current=e.target):u.current?u.current.focus():d&&w(d.current)},i=e=>{s.current=requestAnimationFrame(()=>{t!==d||E(document.activeElement,t)||(d=t,u.current=e.target,u.current.focus())})};return document.addEventListener("keydown",r,!1),document.addEventListener("focusin",o,!1),e.forEach(e=>e.addEventListener("focusin",o,!1)),e.forEach(e=>e.addEventListener("focusout",i,!1)),()=>{document.removeEventListener("keydown",r,!1),document.removeEventListener("focusin",o,!1),e.forEach(e=>e.removeEventListener("focusin",o,!1)),e.forEach(e=>e.removeEventListener("focusout",i,!1))}},[t,n]),(0,r.useEffect)(()=>()=>cancelAnimationFrame(s.current),[s]),function(e,t,n){let i=(0,r.useRef)("undefined"!=typeof document?document.activeElement:null);(0,o.Nf)(()=>{let r=i.current;if(!t)return;let o=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey)return;let n=document.activeElement;if(!h(n,e.current))return;let o=K(document.body,{tabbable:!0});o.currentNode=n;let i=t.shiftKey?o.previousNode():o.nextNode();if(document.body.contains(r)&&r!==document.body||(r=null),(!i||!h(i,e.current))&&r){o.currentNode=r;do i=t.shiftKey?o.previousNode():o.nextNode();while(h(i,e.current));t.preventDefault(),t.stopPropagation(),i?P(i,!0):function(e){for(let t of p.keys())if(h(e,t.current))return!0;return!1}(r)?P(r,!0):n.blur()}};return n||document.addEventListener("keydown",o,!0),()=>{n||document.removeEventListener("keydown",o,!0),t&&r&&h(document.activeElement,e.current)&&requestAnimationFrame(()=>{document.body.contains(r)&&P(r)})}},[e,t,n])}(y,f,l),function(e,t){let n=r.useRef(t);(0,r.useEffect)(()=>{n.current&&(d=e,h(document.activeElement,d.current)||w(e.current)),n.current=!1},[])}(y,g);let S=(i=y,{focusNext(e={}){let t=i.current,{from:n,tabbable:r,wrap:o}=e,u=n||document.activeElement,s=t[0].previousElementSibling,a=K(b(t),{tabbable:r},t);a.currentNode=h(u,t)?u:s;let l=a.nextNode();return!l&&o&&(a.currentNode=s,l=a.nextNode()),l&&P(l,!0),l},focusPrevious(e={}){let t=i.current,{from:n,tabbable:r,wrap:o}=e,u=n||document.activeElement,s=t[t.length-1].nextElementSibling,a=K(b(t),{tabbable:r},t);a.currentNode=h(u,t)?u:s;let l=a.previousNode();return!l&&o&&(a.currentNode=s,l=a.previousNode()),l&&P(l,!0),l},focusFirst(e={}){let t=i.current,{tabbable:n}=e,r=K(b(t),{tabbable:n},t);r.currentNode=t[0].previousElementSibling;let o=r.nextNode();return o&&P(o,!0),o},focusLast(e={}){let t=i.current,{tabbable:n}=e,r=K(b(t),{tabbable:n},t);r.currentNode=t[t.length-1].nextElementSibling;let o=r.previousNode();return o&&P(o,!0),o}});return r.createElement(c.Provider,{value:{scopeRef:y,focusManager:S}},r.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:v}),a,r.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:m}))}function g(){var e;return null==(e=(0,r.useContext)(c))?void 0:e.focusManager}let v=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],m=v.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";v.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let y=v.join(':not([hidden]):not([tabindex="-1"]),');function b(e){return e[0].parentElement}function h(e,t){return t.some(t=>t.contains(e))}function E(e,t){for(let n of p.keys())if((n===t||T(t,n))&&h(e,n.current))return!0;return!1}function T(e,t){let n=p.get(t);return!!n&&(n===e||T(e,n))}function P(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{l(e)}catch(e){}}function w(e){let t=e[0].previousElementSibling,n=K(b(e),{tabbable:!0},e);n.currentNode=t,P(n.nextNode())}function K(e,t,n){let r=(null==t?void 0:t.tabbable)?y:m,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t||null==(o=t.from)?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:o}=t(e);r="none"!==n&&"hidden"!==o&&"collapse"!==o}return r}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||h(e,n))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}function L(e){return{focusNext(t={}){let n=e.current,{from:r,tabbable:o,wrap:i}=t,u=r||document.activeElement,s=K(n,{tabbable:o});n.contains(u)&&(s.currentNode=u);let a=s.nextNode();return!a&&i&&(s.currentNode=n,a=s.nextNode()),a&&P(a,!0),a},focusPrevious(t={}){let n=e.current,{from:r,tabbable:o,wrap:i}=t,u=r||document.activeElement,s=K(n,{tabbable:o});if(n.contains(u))s.currentNode=u;else{let e=F(s);return e&&P(e,!0),e}let a=s.previousNode();return!a&&i&&(s.currentNode=n,a=F(s)),a&&P(a,!0),a},focusFirst(t={}){let n=e.current,{tabbable:r}=t,o=K(n,{tabbable:r}).nextNode();return o&&P(o,!0),o},focusLast(t={}){let n=e.current,{tabbable:r}=t,o=F(K(n,{tabbable:r}));return o&&P(o,!0),o}}}function F(e){let t,n;do(n=e.lastChild())&&(t=n);while(n);return t}function S(e={}){let{autoFocus:t=!1,isTextInput:n,within:o}=e,u=(0,r.useRef)({isFocused:!1,isFocusVisible:t||(0,i.pP)()}).current,[s,a]=(0,r.useState)(!1),[l,c]=(0,r.useState)(()=>u.isFocused&&u.isFocusVisible),d=()=>c(u.isFocused&&u.isFocusVisible),p=e=>{u.isFocused=e,a(e),d()};(0,i.K7)(e=>{u.isFocusVisible=e,d()},[],{isTextInput:n});let{focusProps:f}=(0,i.iQ)({isDisabled:o,onFocusChange:p}),{focusWithinProps:g}=(0,i.Rb)({isDisabled:!o,onFocusWithinChange:p});return{isFocused:s,isFocusVisible:u.isFocused&&l,focusProps:o?g:f}}function C(e){let{children:t,focusClass:n,focusRingClass:i}=e,{isFocused:s,isFocusVisible:a,focusProps:l}=S(e),c=r.Children.only(t);return r.cloneElement(c,(0,o.v6)(c.props,{...l,className:(0,u.A)({[n||""]:s,[i||""]:a})}))}s({},"FocusRing",()=>C),s({},"useFocusRing",()=>S);var M={};s(M,"FocusableProvider",()=>D),s(M,"useFocusable",()=>k);let N=r.createContext(null),D=r.forwardRef(function(e,t){let{children:n,...o}=e,i={...o,ref:t};return r.createElement(N.Provider,{value:i},n)});function k(e,t){let{focusProps:n}=(0,i.iQ)(e),{keyboardProps:u}=(0,i.de)(e),s=(0,o.v6)(n,u),a=function(e){let t=(0,r.useContext)(N)||{};(0,o.wt)(t,e);let{ref:n,...i}=t;return i}(t),l=e.isDisabled?{}:a,c=(0,r.useRef)(e.autoFocus);return(0,r.useEffect)(()=>{c.current&&t.current&&t.current.focus(),c.current=!1},[]),{focusableProps:(0,o.v6)({...s,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},l)}}},559048:(e,t,n)=>{function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{$:()=>r,A:()=>o});let o=r}}]);
//# debugId=8366ea67-e7b8-5562-ae59-4dee4f860468
