
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e0994c57-0fbb-5082-adc8-cc2cb032e67a")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69784,96718],{504:(e,t,n)=>{"use strict";n.d(t,{i:()=>r});let r=(0,n(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z" fill="currentColor"/>')},44342:(e,t,n)=>{"use strict";n.d(t,{F:()=>r});let r=(0,n(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z" fill="currentColor"/>')},53190:(e,t,n)=>{"use strict";n.d(t,{v:()=>g});var r=n(44880),i=n(69308),l=n(609623),s=n.n(l),o=n(504),a=n(513184),u=n(457988),c=n(745772),d=n(748241),m=n.n(d);function g({href:e,as:t,tab:n,shallow:i,scroll:l,children:d,prefetch:g=!0,prefetchStrategy:p="visible",icon:f,isDifferentZone:_,...x}){let b=(0,a.usePrefetchProps)({href:e,isDifferentZone:_,prefetch:g,prefetchStrategy:p});return x.disabled||x.loading?(0,r.jsx)(c.Button,{...x,children:d}):"string"==typeof e&&(n||!(0,u.c)(e)||x.download||_)?(0,r.jsxs)(c.Button,{Component:"a",href:x.disabled?void 0:e,rel:n?"noopener":void 0,target:n?"_blank":void 0,...x,children:[d,f?(0,r.jsx)(o.i,{className:m().externalIcon}):null]}):(0,r.jsx)(s(),{as:t,href:e,legacyBehavior:!0,passHref:!!e,prefetch:b.prefetch,scroll:l,shallow:i,children:(0,r.jsx)(h,{Component:"a",onMouseEnter:b.onMouseEnter,rel:n?"noopener":void 0,target:n?"_blank":void 0,...x,children:d})})}let h=(0,i.forwardRef)((e,t)=>{let{children:n,onClick:i,onMouseEnter:l,...s}=e;return(0,r.jsx)(c.Button,{ref:t,...s,passthroughOnClick:i,passthroughOnMouseEnter:l,children:n})});h.displayName="ButtonWrapper"},69625:(e,t,n)=>{"use strict";n.d(t,{I:()=>i,_:()=>l});var r=n(69308);let i=(0,r.createContext)(!1);i.displayName="DisabledContext";let l=e=>{let t=(0,r.useContext)(i);return e??t}},154034:(e,t,n)=>{"use strict";n.d(t,{D:()=>r});let r=(0,n(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z" fill="currentColor"/>')},214269:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ButtonLink:()=>u,Link:()=>a});var r=n(44880),i=n(69308),l=n(53190),s=n(374532),o=n(101221);let a=(0,i.forwardRef)(({children:e,...t},n)=>{let{prefetchHref:l}=(0,i.useContext)(o.ui),{zoneOfHref:a,isDifferentZone:u,isLoading:c}=(0,o.wr)(t.href);return(0,r.jsx)(s.N,{...t,"data-zone":u?a??"null":"same",isDifferentZone:u,onMouseOver:!1!==t.prefetch&&u?function(){t.href&&l(t.href)}:void 0,prefetch:t.prefetch??(!c&&void 0),ref:n,suppressHydrationWarning:!0,children:e})});function u({children:e,...t}){let{prefetchHref:n}=(0,i.useContext)(o.ui),{zoneOfHref:s,isDifferentZone:a,isLoading:u}=(0,o.wr)(void 0!==t.href?String(t.href):t.href);return(0,r.jsx)(l.v,{...t,"data-zone":a?s??"null":"same",isDifferentZone:a,onMouseOver:!1!==t.prefetch&&a?function(){t.href&&"string"==typeof t.href&&n(t.href)}:void 0,prefetch:t.prefetch??(!u&&void 0),suppressHydrationWarning:!0,children:e})}a.displayName="MultiZoneLink"},242725:e=>{e.exports={base:"button_base__BjwbK reset_reset__KRyvc",button:"button_button__81573 reset_reset__KRyvc",content:"button_content__1aE1_",flex:"button_flex__fCY56",start:"button_start__P6_gW",grow:"button_grow__X0BT1",flexGrow:"button_flexGrow__YlucR",center:"button_center__nyfP_",loading:"button_loading__7msIA",tertiary:"button_tertiary__rIu0q",shape:"button_shape__K_zQW",rounded:"button_rounded__5toZs",large:"button_large__fuY6E",tiny:"button_tiny__zR8GD",small:"button_small__iQMBm",prefix:"button_prefix__2XlwH",suffix:"button_suffix__ucg7R",invert:"button_invert__YNhnn",shadow:"button_shadow__fnbqq",secondary:"button_secondary__kMMNc",customStyles:"button_customStyles__I_tng",customHoverStyles:"button_customHoverStyles__HzaJq",circle:"button_circle__zYDEK",responsive:"button_responsive__cQLAH"}},283396:(e,t,n)=>{"use strict";n.d(t,{_:()=>i,l:()=>l});var r=n(69308);let i=(0,r.createContext)({segment:"",setSegment:e=>void 0});function l(){let e=(0,r.useContext)(i);return[e.segment,e.setSegment]}i.displayName="OptimisticSelectedLayoutSegment"},363376:(e,t,n)=>{"use strict";n.d(t,{KJ:()=>l,yf:()=>i});let r={large:24,small:16,xSmall:12,mediumSmall:20,default:16},i=16;function l(e){return r[e||"default"]}},374532:(e,t,n)=>{"use strict";n.d(t,{N:()=>g});var r=n(44880),i=n(69308),l=n(609623),s=n.n(l),o=n(559048),a=n(457988),u=n(513184),c=n(44342),d=n(748241),m=n.n(d);let g=(0,i.forwardRef)(({as:e,type:t,variant:n,external:i,icon:l,tab:d,href:g,children:h,className:p,prefetch:f=!0,canPrefetch:_=a.c,prefetchStrategy:x="visible",isDifferentZone:b,...y},v)=>{let w=(0,u.usePrefetchProps)({href:g,isDifferentZone:b,prefetch:f,prefetchStrategy:x}),k=d||i||g&&!_(g)&&!g.startsWith("#"),$=n||t,H=$?m()[$]:"",{underline:j,...S}=y,C=!!i&&!1!==l;if(g&&(b||k)){let{passHref:e,...t}=y;return(0,r.jsxs)("a",{href:g,rel:k?"noopener":void 0,target:k?"_blank":void 0,...t,className:(0,o.$)(m().link,{[String(m().external)]:C,[String(m().alwaysUnderline)]:!!j},H,p),ref:v,children:[h,C?(0,r.jsx)(c.F,{}):null]})}if(!g&&!y.onClick)return(0,r.jsx)("span",{...S,"aria-disabled":!0,className:(0,o.$)(m().disabled,H,p),ref:v,role:"link",tabIndex:-1,children:h});let L=(0,o.$)(m().link,{[String(m().alwaysUnderline)]:!!j},H,p);return g?(0,r.jsx)(s(),{href:e||g,...S,...w,className:L,ref:v,children:h}):(0,r.jsx)("span",{...S,className:L,onKeyDown:e=>{"Enter"===e.key&&S.onClick?.()},ref:v,role:"link",tabIndex:0,children:h})});g.displayName="Link"},397191:e=>{e.exports={wrapper:"spinner_wrapper__zbFtL",spinner:"spinner_spinner__fqUfx",bar:"spinner_bar__VysK5",spin:"spinner_spin__7lZMA"}},411873:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SubMenuLink:()=>_,SubMenuLinkSkeleton:()=>x});var r=n(44880),i=n(69308),l=n(716519),s=n(901226),o=n(559048),a=n(756183),u=n(758344),c=n(458888),d=n(214269),m=n(495243),g=n(864992),h=n.n(g),p=n(283396);let f={type:"tween",ease:"easeOut",duration:.15};function _({children:e,href:t,activeSegment:n,highlight:g=!1,highlightOnceKey:_,prefetch:x,prefetchStrategy:b}){let[y,v]=(0,i.useState)(!1),[w,k]=(0,p.l)(),$=n&&w?w.startsWith(n):w===n,H="undefined"==typeof document||document.cookie.includes(`tab-${_}=1`);return(0,r.jsxs)(l.E,{as:d.Link,className:(0,o.$)(h().link,{[h().dot]:!!(g&&!H),[h().error]:"error"===g,[h().warning]:"warning"===g}),color:$||y?"gray-1000":"gray-900","data-sub-menu-segment":n,"data-testid":n?(0,s.g)("sub-menu-link",n):void 0,href:t,lineHeight:14,onClick:e=>{(0,m.cX)()&&e.metaKey||e.ctrlKey||(0,c.V)().then(()=>{k(n||""),g&&"undefined"!=typeof document&&_&&(document.cookie=`tab-${_}=1; path=/; max-age=7776000`)})},onPointerEnter:e=>{"mouse"===e.pointerType&&v(!0)},onPointerLeave:e=>{"mouse"===e.pointerType&&v(!1)},prefetch:void 0===x||x,prefetchStrategy:b,type:$?void 0:"secondary",children:[(0,r.jsx)(a.N,{children:y?(0,r.jsx)(u.m.div,{className:h().hover,exit:{opacity:0},initial:{opacity:1},layoutId:"hover",transition:f}):null}),e]})}function x(){return(0,r.jsx)(l.E,{as:"div",className:h().link,lineHeight:14,children:"\xa0"})}},457988:(e,t,n)=>{"use strict";function r(e){let t="string"==typeof e?e:e.pathname;return!(!t||/^https?:\/\/$/.exec(t)||t.includes("*"))&&t.startsWith("/")}n.d(t,{c:()=>r})},458888:(e,t,n)=>{"use strict";function r(){return new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})}n.d(t,{V:()=>r,h:()=>l});let i=new WeakMap;function l(e){if(i.has(e))return i.get(e);let t=(...t)=>{r().then(()=>e(...t))};return i.set(e,t),t}},469784:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SubMenu:()=>v,SubMenuSkeleton:()=>w});var r=n(44880),i=n(559048),l=n(745772),s=n(775714),o=n(428086),a=n(964874),u=n(758344),c=n(325002),d=n(766630),m=n(69308),g=n(755464),h=n(901226),p=n(515864),f=n(154034),_=n(992525),x=n.n(_),b=n(411873),y=n(283396);function v({children:e}){let{translateX:t}=function(){let e=(0,p.al)(),{scrollY:t}=(0,o.L)();return{translateX:(0,d.G)(t,k,[0,36*!e])}}(),n=(0,g.useSelectedLayoutSegments)()?.join("/")||"",[_,b]=(0,m.useState)(n);(0,m.useEffect)(()=>{b(n)},[n]);let v=(0,m.useMemo)(()=>({segment:_,setSegment:b}),[_,b]),{scrollY:w}=(0,o.L)(),[H,j]=(0,m.useState)(!1);return(0,a.L)(w,"change",e=>{e<300&&H?j(!1):e>300&&!H&&j(!0)}),(0,r.jsxs)(s.B,{align:"center",className:x().container,"data-testid":(0,h.g)("navbar","submenu"),direction:"row",children:[(0,r.jsx)(u.m.div,{className:(0,i.$)(x().subMenu),style:{translateX:t},children:(0,r.jsxs)(y._.Provider,{value:v,children:[(0,r.jsx)(c.o,{id:"tabs",children:e}),(0,r.jsx)($,{})]})}),(0,r.jsx)(s.B,{className:`ml-auto pr-6 ${x().scrollToTop}`,style:{opacity:+!!H,pointerEvents:H?"auto":"none"},children:(0,r.jsx)(l.Button,{"aria-label":"Scroll to top",onClick:function(){document.documentElement.scrollTo(0,0)},shape:"circle",size:"small",svgOnly:!0,type:"tertiary",children:(0,r.jsx)(f.D,{color:"gray-900"})})})]})}function w(){return(0,r.jsx)(s.B,{align:"center",className:x().container,"data-testid":(0,h.g)("navbar","submenu"),direction:"row",children:(0,r.jsx)(b.SubMenuLinkSkeleton,{})})}let k=[0,54];function $(){let[e]=(0,y.l)(),t=(0,m.useRef)(null),n=(0,m.useRef)({}),i=(0,m.useCallback)((e,r)=>{n.current[e]=r;let i=t.current;i&&(i.style[e]=r)},[]);return(0,m.useEffect)(()=>{let t=Array.from(document.querySelectorAll("[data-sub-menu-segment]")).find(t=>e.startsWith(t.dataset.subMenuSegment||""));if(!t?.parentElement)return;let n=t.parentElement.getBoundingClientRect(),r=t.getBoundingClientRect(),l=Math.round(r.width),s=r.left-n.left;i("transform",`translateX(${s}px) scaleX(${l/100})`),i("display","block")},[e,i]),(0,r.jsx)("div",{className:x().activeBar,ref:t,style:{...n.current}})}},503156:(e,t,n)=>{"use strict";n.d(t,{q:()=>i,w:()=>r});let r=(e,t,n)=>e?["geist-themed",`geist-${e}`,t?`geist-${e}-fill`:null,n?`geist-${e}-${n}`:null]:"",i=(e,t,n,r)=>e?["geist-new-themed",`geist-new-${e}`,t?`geist-new-${e}-fill`:null,n?`geist-new-${e}-${n}`:null,"tooltip"===r?"geist-new-tooltip":""]:""},513184:(e,t,n)=>{"use strict";n.r(t),n.d(t,{usePrefetchProps:()=>a});var r=n(755464),i=n(440283),l=n(69308),s=n(457988),o=n(537811);function a({prefetch:e,prefetchStrategy:t,isDifferentZone:n,href:a}){let u=(0,r.useRouter)(),c=a&&(0,s.c)(a),d="visible"===t&&!n&&c&&"true"!==o.env.NEXT_PUBLIC_TESTMODE,m=(0,l.useCallback)(()=>{"string"==typeof a&&u.prefetch(a,{kind:i.PrefetchKind.FULL})},[a,u]);return{onMouseEnter:"hover"===t&&c?m:void 0,prefetch:!!d&&e}}},608863:e=>{e.exports={stack:"stack_stack__iZkUS",padding:"stack_padding__ox8JS",debug:"stack_debug__3bKEB"}},664577:(e,t,n)=>{"use strict";function r(e){return{color:"currentColor"===e?"currentColor":`var(--ds-${e})`}}n.d(t,{ki:()=>r})},688781:(e,t,n)=>{"use strict";n.d(t,{G:()=>d,u:()=>o});var r=n(44880),i=n(69308),l=n(664577),s=n(363376);let o="__ADD_ID__",a=RegExp(o,"g"),u=`0 0 ${s.yf} ${s.yf}`,c={top:"text-top",bottom:"text-bottom",middle:"middle",initial:null},d=(e,t={})=>{let{color:n="currentColor",size:o,width:d,height:m,viewBox:g=u}=t;function h(t){let{size:i,color:a=n,align:u="initial",className:h,width:p,height:f,style:_,iconHtml:x,...b}=t,y=c[u],v=o||s.yf,w=x||e;return(0,r.jsx)("svg",{className:h,dangerouslySetInnerHTML:{__html:w},"data-testid":"geist-icon",height:v,strokeLinejoin:"round",style:{verticalAlign:y||void 0,width:d||p||i,height:m||f||i,...(0,l.ki)(a),..._},viewBox:g,width:v,...b})}return a.test(e)?(0,i.memo)(function(t){let n=(0,i.useId)().replace(/[^a-zA-Z0-9-_]/g,""),l=e.replace(a,n);return(0,r.jsx)(h,{...t,iconHtml:l})}):(0,i.memo)(h)}},691711:e=>{e.exports={wrapper:"text_wrapper__i87JK",truncate:"text_truncate__v5uF6",clamp:"text_clamp__r9W5W",nowrap:"text_nowrap__Libwk",monospace:"text_monospace___Hyeq"}},716519:(e,t,n)=>{"use strict";n.d(t,{E:()=>h});var r=n(44880),i=n(559048),l=n(69308),s=n(691711),o=n.n(s);function a(e,t=16){return`${e/t}rem`}var u=n(719766);let c={48:"3.5rem",40:"3.5rem",32:"2.5rem",24:"2rem",20:"1.5rem",18:"1.5rem",16:"1.5rem",14:"1.25rem",13:"1.125rem",12:"1rem",10:"0.75rem"},d={48:"-0.066875rem",40:"-0.058125rem",32:"-0.049375rem",24:"-0.029375rem",20:"-0.020625rem",18:"initial",16:"initial",14:"initial",13:"initial",12:"initial",10:"initial"},m={48:"700",40:"600",32:"600",24:"600",20:"600",16:"400",14:"400",13:"400",18:"400",12:"400",10:"400"},g={"heading-72":{size:72,lineHeight:72,weight:600,letterSpacing:-4.32},"heading-64":{size:64,lineHeight:64,weight:600,letterSpacing:-3.84},"heading-56":{size:56,lineHeight:56,weight:600,letterSpacing:-3.36},"heading-48":{size:48,lineHeight:56,weight:600,letterSpacing:-2.88},"heading-40":{size:40,lineHeight:48,weight:600,letterSpacing:-2.4},"heading-32":{size:32,lineHeight:40,weight:600,letterSpacing:-1.28},"heading-24":{size:24,lineHeight:32,weight:600,letterSpacing:-.96},"heading-20":{size:20,lineHeight:26,weight:600,letterSpacing:-.4},"heading-16":{size:16,lineHeight:24,weight:600,letterSpacing:-.32},"heading-14":{size:14,lineHeight:20,weight:600,letterSpacing:-.28},"button-16":{size:16,lineHeight:20,weight:500},"button-14":{size:14,lineHeight:20,weight:500},"button-12":{size:12,lineHeight:16,weight:500},"label-20":{size:20,lineHeight:32,weight:400},"label-18":{size:18,lineHeight:20,weight:400},"label-16":{size:16,lineHeight:20,weight:400},"label-14":{size:14,lineHeight:20,weight:400},"label-13":{size:13,lineHeight:16,weight:400},"label-12":{size:12,lineHeight:16,weight:400},"copy-24":{size:24,lineHeight:36,weight:400},"copy-20":{size:20,lineHeight:36,weight:400},"copy-18":{size:18,lineHeight:28,weight:400},"copy-16":{size:16,lineHeight:24,weight:400},"copy-14":{size:14,lineHeight:20,weight:400},"copy-13":{size:13,lineHeight:18,weight:400}},h=(0,l.memo)(function({children:e,as:t="p",size:n=14,lineHeight:l,weight:s,color:h="gray-1000",transform:p,align:f,truncate:_,wrap:x=!0,className:b,style:y,monospace:v=!1,variant:w,ref:k,...$}){let H="inherit"===h?"inherit":`var(--ds-${h})`;return(0,r.jsx)(t,{className:(0,i.$)(o().wrapper,b,{[o().truncate]:!0===_,[o().clamp]:"number"==typeof _,[o().nowrap]:!x,[o().monospace]:v}),"data-version":"v1",ref:k,style:{..."number"==typeof _&&{"--text-clamp":_},"--text-color":H,...function({size:e,variant:t,lineHeight:n,weight:r}){if(t){if("string"==typeof t){let e=g[t];return{"--text-size":a(e.size),"--text-line-height":a(e.lineHeight),"--text-letter-spacing":`${e.letterSpacing||0}px`,"--text-weight":r??e.weight}}let e=(0,u.Y)(t);return Object.keys(e).reduce((t,n)=>{let i=g[e[n]];return{...t,[`--${n}-text-size`]:a(i.size),[`--${n}-text-line-height`]:a(i.lineHeight),[`--${n}-text-weight`]:r??i.weight,[`--${n}-text-letter-spacing`]:`${i.letterSpacing||0}px`}},{})}if("number"==typeof e)return{"--text-size":a(e),"--text-line-height":n?a(n):c[e],"--text-letter-spacing":d[e],"--text-weight":r||m[e]};let i=(0,u.Y)(e);return Object.keys(i).reduce((e,t)=>{let l=i[t];return{...e,[`--${t}-text-size`]:a(l),[`--${t}-text-line-height`]:n?a(n):c[l],[`--${t}-text-weight`]:r||m[l],[`--${t}-text-letter-spacing`]:d[l]}},{})}({size:n,lineHeight:l,weight:s,variant:w}),..."string"==typeof p&&{"--text-transform":p},..."string"==typeof f&&{"--text-align":f},...y},...$,children:e})})},719766:(e,t,n)=>{"use strict";n.d(t,{A:()=>i,Y:()=>l});let r=["xs","sm","smd","md","lg","xl"];function i(e,t){let n={};if("object"!=typeof t)null!==t&&(n[`--${e}`]=t);else{let i,l=t.sm,s=t.md,o=t.xs,a=t.smd;r.forEach(r=>{let u=t[r];("xs"!==r||o!==l)&&(null!=u&&u!==i||"smd"===r&&a===l&&a!==s)&&(n[`--${r}-${e}`]=u,i=u)})}return n}function l(e){if("object"==typeof e&&null!==e){if(!("sm"in e))throw Error("Failed to restrict responsive prop, an object was passed without an sm key");let t={xs:e.xs||e.sm||null,sm:e.sm||null,smd:e.smd||e.md||e.sm||null,md:e.md||e.smd||e.sm||null,lg:e.lg||e.md||e.sm||null};if(Object.values(t).some(e=>null==e))throw Error("Failed to restrict responsive prop, an invalid value was passed to sm, md or lg");return t}return{xs:e,sm:e,smd:e,md:e,lg:e}}},742935:(e,t,n)=>{"use strict";n.d(t,{px:()=>r});let r=e=>"number"==typeof e?`${e}px`:e},745772:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Button:()=>w,default:()=>k});var r=n(44880),i=n(69308),l=n(559048),s=n(845178),o=n(83803),a=n(508118),u=n(435664),c=n(94684),d=n(835814),m=n(503156),g=n(363376),h=n(69625),p=n(807133),f=n(242725),_=n.n(f);let x="production"!==p.e,b=e=>"object"==typeof e&&null!==e&&"type"in e,y={small:{padding:"6px",height:"32px"},medium:{padding:"10px",height:"40px"},large:{padding:"14px",height:"48px"}},v=(e,t,n)=>{let r=!1,[l,...s]=i.Children.toArray(e);if(l&&!(s.length>=1)&&(b(l)&&("svg"===l.type||"string"!=typeof l.type&&"name"in l.type&&"Icon"===l.type.name)&&(r=!0),r&&(!t||!n["aria-label"])))throw Error("SVG/Icon-only Buttons must include both an `aria-label` and the `svgOnly` prop.")},w=(0,i.forwardRef)(({Component:e="button",typeName:t="submit",className:n,href:p,as:f,target:b,rel:w,disabled:k,loading:H,width:j,type:S,size:C,prefix:L,normalStyle:z,hoverStyle:N,suffix:E,onClick:M,variant:V="invert",shape:B,align:T,children:K,onMouseDown:P,onMouseUp:R,svgOnly:W,shadow:I,passthroughOnClick:D,passthroughOnMouseEnter:F,touchEventWorkaround:O=!1,role:Z,...A},q)=>{let X=(0,h._)(),G=k||H||X,U=(0,m.q)(S,!0),Y=(0,i.useRef)(null),{focusProps:J,isFocusVisible:Q}=(0,a.og)(),{hoverProps:ee,isHovered:et}=(0,o.Mk)({isDisabled:G}),{buttonProps:en,isPressed:er}=(0,s.s)({isDisabled:G,target:b,rel:w,elementType:e,onPress:M,onPressStart:P,onPressUp:R},Y);x&&v(K,W,A),(0,i.useEffect)(()=>{if(!O)return;function e(e){e.preventDefault()}let t=Y.current;return t?.addEventListener("touchstart",e),()=>{t?.removeEventListener("touchstart",e)}},[O]);let ei={...(0,c.v6)({onClick:D,onMouseEnter:F},ee,J,en)};return(0,r.jsxs)(e,{...ei,...A,as:f,className:"unstyled"===V?(0,l.$)(_().base,n):(0,l.$)(_().base,_().button,n,"secondary"!==S?U:null,{[_().secondary||""]:"secondary"===S,[_().tertiary||""]:"tertiary"===S,[_().shape||""]:"circle"===B||"square"===B,[_().circle||""]:"circle"===B,[_().rounded||""]:"rounded"===B,[_().loading||""]:H,[_().shadow||""]:I,[_().tiny||""]:"tiny"===C,[_().small||""]:"small"===C,[_().large||""]:"large"===C,[_().responsive||""]:"object"==typeof C&&null!==C,[_().customStyles||""]:!!z,[_().customHoverStyles||""]:!!N},_()[V]),"data-active":k?void 0:$(er),"data-focus":k?void 0:$(Q),"data-geist-button":"","data-hover":k?void 0:$(et),"data-prefix":L||H?"true":"false","data-suffix":E?"true":"false","data-testid":A["data-testid"],"data-version":"v1",href:p,ref:(0,u.P)([Y,q]),role:"a"===e?"link":ei.role||Z,style:{...A.style,minWidth:j,maxWidth:j,...z?{"--custom-bg-color":z.backgroundColor,"--custom-color":z.color,"--custom-border-color":z.borderColor}:{},...N?{"--custom-bg-hover-color":N.backgroundColor,"--custom-hover-color":N.color,"--custom-border-hover-color":N.borderColor}:{},"--geist-icon-size":"16px",...function(e){if("object"!=typeof e||null===e)return{};let t={sm:e.sm,md:e.md||e.sm,lg:e.lg||e.md||e.sm};return Object.keys(t).reduce((e,n)=>{let r=t[n];return r?{...e,...{[`--${n}-x-padding`]:y[r].padding,[`--${n}-height`]:y[r].height}}:e},{})}(C)},type:t,children:[L||H?(0,r.jsx)("span",{className:_().prefix,children:H?(0,r.jsx)(d.y,{color:"var(--accents-5)",size:(0,g.KJ)(C)}):L}):null,(0,r.jsx)("span",{className:(0,l.$)(_().content,{[_().flex||""]:W,[_().start||""]:"start"===T,[_().grow||""]:"grow"===T,[_().flexGrow||""]:"flex-grow"===T,[_().center||""]:"center"===T}),children:K}),E?(0,r.jsx)("span",{className:_().suffix,children:E}):null]})});w.displayName="Button";let k=w,$=e=>e?"":void 0},748241:e=>{e.exports={link:"link_link__hbWKh",primary:"link_primary__GLS86",disabled:"link_disabled__XCKN4",highlight:"link_highlight__kJZF9",secondary:"link_secondary__F1rqx",blend:"link_blend__JjXMT",underline:"link_underline__i1AXz",alwaysUnderline:"link_alwaysUnderline__J7rlf",external:"link_external__0a5cc"}},775714:(e,t,n)=>{"use strict";n.d(t,{B:()=>p});var r=n(44880),i=n(69308),l=n(559048);let s=["sm","md","lg","xl"];function o(e,t){let n={};if("object"!=typeof t)null!==t&&(n[`--${e}`]=t);else{let r;s.forEach(i=>{let l=t[i];null!==l&&l!==r&&(n[`--${i}-${e}`]=l,r=l)})}return n}function a(e){return"number"==typeof e?`${4*e}px`:void 0}function u(e){if("number"==typeof e){let t=a(e);return{sm:t,md:t,lg:t,xl:t}}return{sm:a(e.sm),md:a(e.md),lg:a(e.lg),xl:a(e.xl)}}function c(e){return{sm:e.sm,md:e.md||e.sm,lg:e.lg||e.md||e.sm,xl:e.xl||e.lg||e.md||e.sm}}function d(e,t,n,r){return e===t&&e===n&&e===r?e:e===n&&t===r?`${e} ${t}`:t===r?`${e} ${t} ${n}`:`${e} ${t} ${n} ${r}`}function m(e,t,n,r,i,l,s,o){if(void 0===t&&void 0===n&&void 0===r&&void 0===i&&void 0===l&&void 0===s&&void 0===o)return{[`--${e}`]:"0px"};let a=u(i??r??t??0),m=u(l??n??t??0),g=function(e,t,n,r){let i=c(e),l=c(t),s=c(n),o=c(r);return{sm:d(i.sm||"",l.sm||"",s.sm||"",o.sm||""),md:d(i.md||"",l.md||"",s.md||"",o.md||""),lg:d(i.lg||"",l.lg||"",s.lg||"",o.lg||""),xl:d(i.xl||"",l.xl||"",s.xl||"",o.xl||"")}}(a,m,u(s??r??t??0),u(o??n??t??0)),h=Object.keys(g).reduce((t,n)=>({...t,[`--${n}-${e}`]:g[n]}),{});return h[`--sm-${e}`]===h[`--md-${e}`]&&h[`--md-${e}`]===h[`--lg-${e}`]&&h[`--lg-${e}`]===h[`--xl-${e}`]?{[`--${e}`]:h[`--sm-${e}`]}:h}var g=n(608863),h=n.n(g);let p=(0,i.memo)(function({as:e="div",children:t,padding:n,paddingX:i,paddingY:s,paddingTop:a,paddingRight:u,paddingBottom:c,paddingLeft:d,gap:g,direction:p="column",align:f="stretch",justify:_="flex-start",flex:x="initial",debug:b,style:y,className:v,ref:w,...k}){let $=[n,i,s,a,u,c,d].some(e=>void 0!==e);return(0,r.jsx)(e,{className:(0,l.$)(h().stack,"stack",v,{[h().debug]:b,[h().padding]:$}),"data-testid":k["data-testid"],"data-version":"v1",ref:w,style:{...y,"--stack-flex":x,...o("stack-direction",p),...o("stack-align",f),...o("stack-justify",_),...m("stack-padding",n,i,s,a,u,c,d),...m("stack-gap",g)},...k,children:t})})},807133:(e,t,n)=>{"use strict";n.d(t,{e:()=>r});let r="production"},835814:(e,t,n)=>{"use strict";n.d(t,{y:()=>u});var r=n(44880),i=n(559048),l=n(742935),s=n(397191),o=n.n(s);let a=Array(12).fill(0);function u({color:e,className:t,size:n=20,wrapperClassName:s}){return(0,r.jsx)("div",{className:(0,i.$)(o().wrapper,s),"data-geist-spinner":"","data-version":"v1",style:{"--spinner-size":(0,l.px)(n),"--spinner-color":e},children:(0,r.jsx)("div",{className:(0,i.$)(o().spinner,t),children:a.map((e,t)=>(0,r.jsx)("div",{className:o().bar},`spinner-bar-${t}`))})})}},864992:e=>{e.exports={link:"sub-menu-link_link__Cel83",hover:"sub-menu-link_hover__rsxXS",dot:"sub-menu-link_dot__D4R8E",error:"sub-menu-link_error__WF4_5",warning:"sub-menu-link_warning__KYXCm"}},901226:(e,t,n)=>{"use strict";n.d(t,{c:()=>o,g:()=>a});var r=n(23624),i=n.n(r);let l={},s=e=>{let t=l[e];if(t)return t;let n=i()(e);return l[e]=n,n};function o(e){(window.loadedForTest?window.loadedForTest:window.loadedForTest=new Set).add(e)}let a=function(e,t,...n){return[...e.split("/"),t,...n].filter(Boolean).map(s).join("/")}},992525:e=>{e.exports={subMenu:"sub-menu_subMenu__jj8_f",container:"sub-menu_container__eIrZK",activeBar:"sub-menu_activeBar__yg1_K",scrollToTop:"sub-menu_scrollToTop__BTKjS"}}}]);
//# debugId=e0994c57-0fbb-5082-adc8-cc2cb032e67a
