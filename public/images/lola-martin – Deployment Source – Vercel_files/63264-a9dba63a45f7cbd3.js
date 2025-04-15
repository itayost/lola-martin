"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d32c1a05-39c4-52cb-b419-40acc51d0ecf")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63264],{263264:(e,t,n)=>{n.r(t),n.d(t,{createFocusTrap:()=>M});var r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],o=r.join(","),a="undefined"==typeof Element,i=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!a&&Element.prototype.getRootNode?function(e){var t;return null==e||null==(t=e.getRootNode)?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},c=function e(t,n){void 0===n&&(n=!0);var r,o=null==t||null==(r=t.getAttribute)?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},l=function(e){var t,n=null==e||null==(t=e.getAttribute)?void 0:t.call(e,"contenteditable");return""===n||"true"===n},s=function(e,t,n){if(c(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&i.call(e,o)&&r.unshift(e),r=r.filter(n)},d=function e(t,n,r){for(var a=[],u=Array.from(t);u.length;){var l=u.shift();if(!c(l,!1))if("SLOT"===l.tagName){var s=l.assignedElements(),d=e(s.length?s:l.children,!0,r);r.flatten?a.push.apply(a,d):a.push({scopeParent:l,candidates:d})}else{i.call(l,o)&&r.filter(l)&&(n||!t.includes(l))&&a.push(l);var f=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),p=!c(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(f&&p){var b=e(!0===f?l.children:f.children,!0,r);r.flatten?a.push.apply(a,b):a.push({scopeParent:l,candidates:b})}else u.unshift.apply(u,l.children)}}return a},f=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},p=function(e){if(!e)throw Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||l(e))&&!f(e)?0:e.tabIndex;},b=function(e,t){var n=p(e);return n<0&&t&&!f(e)?0:n},v=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},m=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},y=function(e){if(!e.name)return!0;var t,n=e.form||u(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=m(t,e.form);return!o||o===e},g=function(e){return h(e)&&"radio"===e.type&&!y(e)},w=function(e){var t,n,r,o,a,i,c,l=e&&u(e),s=null==(t=l)?void 0:t.host,d=!1;if(l&&l!==e)for(d=!!(null!=(n=s)&&null!=(r=n.ownerDocument)&&r.contains(s)||null!=e&&null!=(o=e.ownerDocument)&&o.contains(e));!d&&s;)d=!!(null!=(i=s=null==(a=l=u(s))?void 0:a.host)&&null!=(c=i.ownerDocument)&&c.contains(s));return d},E=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},N=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return E(e)}else{if("function"==typeof r){for(var a=e;e;){var c=e.parentElement,l=u(e);if(c&&!c.shadowRoot&&!0===r(c))return E(e);e=e.assignedSlot?e.assignedSlot:c||l===e.ownerDocument?c:l.host}e=a}if(w(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},O=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!i.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1},S=function(e,t){return!(t.disabled||c(t)||h(t)&&"hidden"===t.type||N(t,e)||"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(e){return"SUMMARY"===e.tagName})||O(t))},T=function(e,t){return!(g(t)||0>p(t))&&!!S(e,t)},D=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!isNaN(t)||!!(t>=0)},F=function e(t){var n=[],r=[];return t.forEach(function(t,o){var a=!!t.scopeParent,i=a?t.scopeParent:t,u=b(i,a),c=a?e(t.candidates):i;0===u?a?n.push.apply(n,c):n.push(i):r.push({documentOrder:o,tabIndex:u,item:t,isScope:a,content:c})}),r.sort(v).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},k=function(e,t){var n;return F((t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:T.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:D}):s(e,t.includeContainer,T.bind(null,t)))},R=function(e,t){var n;return(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:S.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):s(e,t.includeContainer,S.bind(null,t))},C=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==i.call(e,o)&&T(t,e)},I=r.concat("iframe").join(","),A=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==i.call(e,I)&&S(t,e)};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(t){var r,o,a;r=e,o=t,a=n[t],o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=[],L={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}},j=function(e){return setTimeout(e,0)},B=function(e,t){var n=-1;return e.every(function(e,r){return!t(e)||(n=r,!1)}),n},U=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},q=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},M=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=(null==t?void 0:t.trapStack)||x,a=G({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},u=function(e,t,n){return e&&void 0!==e[t]?e[t]:a[n||t]},c=function(e){return i.containerGroups.findIndex(function(t){var n=t.container,r=t.tabbableNodes;return n.contains(e)||r.find(function(t){return t===e})})},l=function(e){var t=a[e];if("function"==typeof t){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var u=t;if("string"==typeof t&&!(u=r.querySelector(t)))throw Error("`".concat(e,"` as selector refers to no known node"));return u},s=function(){var e=l("initialFocus");if(!1===e)return!1;if(void 0===e)if(c(r.activeElement)>=0)e=r.activeElement;else{var t=i.tabbableGroups[0];e=t&&t.firstTabbableNode||l("fallbackFocus")}if(!e)throw Error("Your focus-trap needs to have at least one focusable element");return e},d=function(){if(i.containerGroups=i.containers.map(function(e){var t=k(e,a.tabbableOptions),n=R(e,a.tabbableOptions);return{container:e,tabbableNodes:t,focusableNodes:n,firstTabbableNode:t.length>0?t[0]:null,lastTabbableNode:t.length>0?t[t.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=n.findIndex(function(t){return t===e});if(!(r<0))return t?n.slice(r+1).find(function(e){return C(e,a.tabbableOptions)}):n.slice(0,r).reverse().find(function(e){return C(e,a.tabbableOptions)})}}}),i.tabbableGroups=i.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!l("fallbackFocus"))throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},f=function e(t){if(!1!==t&&t!==r.activeElement){if(!t||!t.focus)return void e(s());t.focus({preventScroll:!!a.preventScroll}),i.mostRecentlyFocusedNode=t,t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select&&t.select()}},p=function(e){var t=l("setReturnFocus",e);return t||!1!==t&&e},b=function(e){var t=q(e);if(!(c(t)>=0)){if(U(a.clickOutsideDeactivates,e))return void n.deactivate({returnFocus:a.returnFocusOnDeactivate&&!A(t,a.tabbableOptions)});U(a.allowOutsideClick,e)||e.preventDefault()}},v=function(e){var t=q(e),n=c(t)>=0;n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),f(i.mostRecentlyFocusedNode||s()))},h=function(e){var t=q(e);d();var n=null;if(i.tabbableGroups.length>0){var r=c(t),o=r>=0?i.containerGroups[r]:void 0;if(r<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var u=B(i.tabbableGroups,function(e){return t===e.firstTabbableNode});if(u<0&&(o.container===t||A(t,a.tabbableOptions)&&!C(t,a.tabbableOptions)&&!o.nextTabbableNode(t,!1))&&(u=r),u>=0){var s=0===u?i.tabbableGroups.length-1:u-1;n=i.tabbableGroups[s].lastTabbableNode}}else{var p=B(i.tabbableGroups,function(e){return t===e.lastTabbableNode});if(p<0&&(o.container===t||A(t,a.tabbableOptions)&&!C(t,a.tabbableOptions)&&!o.nextTabbableNode(t))&&(p=r),p>=0){var b=p===i.tabbableGroups.length-1?0:p+1;n=i.tabbableGroups[b].firstTabbableNode}}}else n=l("fallbackFocus");n&&(e.preventDefault(),f(n))},m=function(e){if(("Escape"===e.key||"Esc"===e.key||27===e.keyCode)&&!1!==U(a.escapeDeactivates,e)){e.preventDefault(),n.deactivate();return}if("Tab"===e.key||9===e.keyCode)return void h(e)},y=function(e){!(c(q(e))>=0||U(a.clickOutsideDeactivates,e))&&(U(a.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation()))},g=function(){if(i.active)return L.activateTrap(o,n),i.delayInitialFocusTimer=a.delayInitialFocus?j(function(){f(s())}):f(s()),r.addEventListener("focusin",v,!0),r.addEventListener("mousedown",b,{capture:!0,passive:!1}),r.addEventListener("touchstart",b,{capture:!0,passive:!1}),r.addEventListener("click",y,{capture:!0,passive:!1}),r.addEventListener("keydown",m,{capture:!0,passive:!1}),n},w=function(){if(i.active)return r.removeEventListener("focusin",v,!0),r.removeEventListener("mousedown",b,!0),r.removeEventListener("touchstart",b,!0),r.removeEventListener("click",y,!0),r.removeEventListener("keydown",m,!0),n};return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this;var t=u(e,"onActivate"),n=u(e,"onPostActivate"),o=u(e,"checkCanFocusTrap");o||d(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,t&&t();var a=function(){o&&d(),g(),n&&n()};return o?o(i.containers.concat()).then(a,a):a(),this},deactivate:function(e){if(!i.active)return this;var t=G({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},e);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,w(),i.active=!1,i.paused=!1,L.deactivateTrap(o,n);var r=u(t,"onDeactivate"),c=u(t,"onPostDeactivate"),l=u(t,"checkCanReturnFocus"),s=u(t,"returnFocus","returnFocusOnDeactivate");r&&r();var d=function(){j(function(){s&&f(p(i.nodeFocusedBeforeActivation)),c&&c()})};return s&&l?l(p(i.nodeFocusedBeforeActivation)).then(d,d):d(),this},pause:function(){return i.paused||!i.active||(i.paused=!0,w()),this},unpause:function(){return i.paused&&i.active&&(i.paused=!1,d(),g()),this},updateContainerElements:function(e){return i.containers=[].concat(e).filter(Boolean).map(function(e){return"string"==typeof e?r.querySelector(e):e}),i.active&&d(),this}}).updateContainerElements(e),n}}}]);
//# debugId=d32c1a05-39c4-52cb-b419-40acc51d0ecf
