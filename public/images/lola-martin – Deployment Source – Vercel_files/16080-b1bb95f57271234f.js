
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5fe9a271-edd6-50ca-9ec1-96a42afee81d")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16080],{501:e=>{e.exports={switch:"switch_switch__RyZjV",hideBorder:"switch_hideBorder__L6grX",small:"switch_small__Xp4zr",large:"switch_large__XYx5z"}},15093:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});let n=(0,r(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.5V2.5H5.5V5.5H2.5ZM1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2V6C7 6.55228 6.55228 7 6 7H2C1.44772 7 1 6.55228 1 6V2ZM2.5 13.5V10.5H5.5V13.5H2.5ZM1 10C1 9.44772 1.44772 9 2 9H6C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14V10ZM10.5 2.5V5.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V2C15 1.44772 14.5523 1 14 1H10ZM10.5 13.5V10.5H13.5V13.5H10.5ZM9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z" fill="currentColor" />')},44342:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});let n=(0,r(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z" fill="currentColor"/>')},67216:(e,t,r)=>{"use strict";r.d(t,{h:()=>m});var n=r(44880),i=r(69308),s=r(559048),l=r(775714),a=r(609623),o=r.n(a),c=r(716519),d=r(809581),u=r.n(d),h=r(501),p=r.n(h);let m=Object.assign((0,i.forwardRef)(function({className:e,size:t,name:r,children:a,hideBorder:o,checkedColor:c,...d},u){return(0,n.jsx)(l.B,{className:(0,s.$)(e,p().switch,{[String(p().large)]:"large"===t,[String(p().small)]:"small"===t,[String(p().hideBorder)]:o}),direction:"row",...d,ref:u,children:i.Children.map(a,e=>(0,i.cloneElement)(e,{name:r,size:t,checkedColor:c}))})}),{Control:function({className:e,icon:t,label:r,size:l,checked:a,disabled:d,checkedColor:h="var(--ds-gray-100)",innerDivClassName:p,...m}){let f=void 0!==t,g=(0,s.$)(u().control,{[String(u().disabled)]:d,[String(u().checked)]:a,[String(u().large)]:"large"===l,[String(u().small)]:"small"===l,[String(u().text)]:!f,[String(u().icon)]:f}),_=t?(0,n.jsxs)(n.Fragment,{children:[(0,i.cloneElement)(t,{size:"large"===l?20:16}),(0,n.jsx)("span",{className:"geist-sr-only",children:r})]}):r;return"href"in m&&void 0!==m.href?d?(0,n.jsx)(c.E,{as:"span",className:g,style:{"--switch-checked-color":h},children:_}):(0,n.jsx)(o(),{className:g,href:m.href,onClick:m.onClick,prefetch:m.prefetch,scroll:!1,style:{"--switch-checked-color":h},children:_}):(0,n.jsxs)("label",{className:(0,s.$)(u().container,e),"data-disabled":d?"true":"false",children:[(0,n.jsx)("input",{...m,checked:a,className:"geist-sr-only",disabled:d,type:"radio"}),(0,n.jsx)("div",{className:(0,s.$)(g,p),style:{"--switch-checked-color":h},children:_})]})}})},69625:(e,t,r)=>{"use strict";r.d(t,{I:()=>i,_:()=>s});var n=r(69308);let i=(0,n.createContext)(!1);i.displayName="DisabledContext";let s=e=>{let t=(0,n.useContext)(i);return e??t}},157910:(e,t,r)=>{"use strict";r.d(t,{L:()=>s});var n=r(413533),i=r(435828);let s=async({scopeId:e,viewPreference:t,favoritesViewPreference:r,recentsViewPreference:s})=>{e&&(await (0,n.Z)(i.B5,{method:"PATCH",body:{scopeId:e,viewPreference:t,favoritesViewPreference:r,recentsViewPreference:s}}))}},185037:(e,t,r)=>{"use strict";r.d(t,{$:()=>u});var n=r(44880),i=r(69308),s=r(715541),l=r(83803),a=r(677185),o=r(248498),c=r(409857),d=r(540653);function u({children:e,defaultOpen:t=!1,closeOnSelect:r=!0,rotate:u=!1,position:h="bottom-start",enableTypeahead:p=!0,disableInteractOutside:m=!1,onClose:f,onEscapePressed:g}){let _=(0,d.useIsMobile)(),{ref:x,...b}=(0,a.cz)(),{list:y,map:w}=b,v=(0,c.B)("menu-"),C=(0,c.B)("menu-button-"),j=(0,i.useRef)(null),[k,H]=(0,i.useState)(null),[$,S]=(0,i.useState)(null),[E,N]=(0,i.useState)(-1),[L,V]=(0,i.useState)(!1),[z,P]=(0,i.useState)("");(0,i.useEffect)(()=>{t&&j.current&&function e(t){return t===t.ownerDocument.body||"none"!==getComputedStyle(t).getPropertyValue("display")&&(!t.parentElement||e(t.parentElement))}(j.current)&&V(!0)},[]);let{styles:I,attributes:M}=(0,s.E)(L?j.current:null,L?$:null,{placement:h,modifiers:[{name:"arrow",options:{element:k,padding:5}},{name:"offset",options:{offset:[0,10]}}]}),D=(0,i.useCallback)(e=>{V(!1),e===o.Nf.Keyboard&&requestAnimationFrame(()=>j.current?.focus()),f&&f(e)},[V,f]),A=(0,i.useCallback)(e=>{r&&D(e)},[r,D]),R=(0,i.useCallback)((e="forward")=>{N(t=>{let r=-1===t?0:t,n="backward"===e,i=n?-1:y.current.length,s=n?t-1:t+1,l=n?y.current.length:-1;-2===s&&u&&n&&(r=l-1);for(let e=s;n?e>=i:e<=i;n?e--:e++){let s=y.current[e];if(n?e<=i:e>=i)if(u){e=l;continue}else{r=t;break}if(!s?.disabled){r=e;break}}if(!y.current.length)return t;let a=y.current[r];return a?.element.scrollIntoView({block:"nearest"}),r})},[u,y]),T=(0,i.useCallback)(e=>{switch(e.key){case"Escape":g?.(e,x),e.defaultPrevented||D(o.Nf.Keyboard);break;case"ArrowDown":case"ArrowRight":e.preventDefault(),R("forward");break;case"ArrowUp":case"ArrowLeft":e.preventDefault(),R("backward");break;case"Home":N(0);break;case"End":N(y.current.length-1);break;case"Tab":e.preventDefault();break;case"Backspace":P("");break;case"Enter":case" ":{if(-1===E)break;let t=y.current[E],r=t?._internalId||"",n=w.current[r];if(n?.disabled)break;if(n?.isLink&&t?.element){t.element.click(),A(o.Nf.Keyboard);return}if(n?.onClick?.(e),e.defaultPrevented)return;A(o.Nf.Keyboard);break}default:if("string"==typeof e.key&&1===e.key.length){let t=e.key.toLowerCase(),r=x.current?.querySelector("input");r?document.activeElement!==r&&(r.focus(),r.value+=t):P(e=>e+t)}}},[g,x,D,R,y,E,w,A]);return(0,l.$Z)({ref:x,isDisabled:m||!L||_,onInteractOutside(e){j.current?.contains(e.target)||D(o.Nf.Pointer)}}),(0,i.useEffect)(()=>{L&&window.requestAnimationFrame(()=>{x.current?.focus({preventScroll:!0})})},[L,x]),(0,i.useEffect)(()=>{L||(N(-1),P(""))},[L]),(0,i.useEffect)(()=>{if(!z||!p)return;let e=function(e,t,r){if(!r)return null;let n=e.findIndex(e=>{let{value:n,disabled:i}=t[e._internalId];return!!n&&!i&&String(n).toLowerCase().startsWith(r)});return -1!==n?n:null}(y.current,w.current,z);null!=e&&N(e);let t=setTimeout(()=>{P("")},1e3);return()=>{clearTimeout(t)}},[z,y,w,p]),(0,n.jsx)(o.le.Provider,{value:b,children:(0,n.jsx)(o.xu.Provider,{value:{actions:{afterSelect:A,closeAndRestoreFocus:D,handleKey:T,selectFirstNonDisabled:()=>{N(y.current.findIndex(e=>!e.disabled))},setOpen:V,setSelected:N},state:{arrow:H,buttonId:C,buttonRef:j,listRef:x,menuId:v,open:L,popper:S,popperAttributes:M,popperStyles:I,selected:E,typeahead:z}},children:e})})}},227658:(e,t,r)=>{"use strict";r.d(t,{d:()=>n});let n=(0,r(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4C3.19036 4 3.75 3.44036 3.75 2.75C3.75 2.05964 3.19036 1.5 2.5 1.5C1.80964 1.5 1.25 2.05964 1.25 2.75C1.25 3.44036 1.80964 4 2.5 4ZM2.5 9.25C3.19036 9.25 3.75 8.69036 3.75 8C3.75 7.30964 3.19036 6.75 2.5 6.75C1.80964 6.75 1.25 7.30964 1.25 8C1.25 8.69036 1.80964 9.25 2.5 9.25ZM3.75 13.25C3.75 13.9404 3.19036 14.5 2.5 14.5C1.80964 14.5 1.25 13.9404 1.25 13.25C1.25 12.5596 1.80964 12 2.5 12C3.19036 12 3.75 12.5596 3.75 13.25ZM6.75 2H6V3.5H6.75H14.25H15V2H14.25H6.75ZM6.75 7.25H6V8.75H6.75H14.25H15V7.25H14.25H6.75ZM6.75 12.5H6V14H6.75H14.25H15V12.5H14.25H6.75Z" fill="currentColor"/>')},241061:e=>{e.exports={list:"page_list__p_PHs",container:"page_container__EJ_R7",recentsProjectsContainer:"page_recentsProjectsContainer__d5jIH",header:"page_header__7i60T",recentsContainer:"page_recentsContainer__Yfc6g",recentsContent:"page_recentsContent__PAIN3",wideLayout:"page_wideLayout__7eyLG",searchInput:"page_searchInput__y67iQ",projectList:"page_projectList__WIOJF"}},242725:e=>{e.exports={base:"button_base__BjwbK reset_reset__KRyvc",button:"button_button__81573 reset_reset__KRyvc",content:"button_content__1aE1_",flex:"button_flex__fCY56",start:"button_start__P6_gW",grow:"button_grow__X0BT1",flexGrow:"button_flexGrow__YlucR",center:"button_center__nyfP_",loading:"button_loading__7msIA",tertiary:"button_tertiary__rIu0q",shape:"button_shape__K_zQW",rounded:"button_rounded__5toZs",large:"button_large__fuY6E",tiny:"button_tiny__zR8GD",small:"button_small__iQMBm",prefix:"button_prefix__2XlwH",suffix:"button_suffix__ucg7R",invert:"button_invert__YNhnn",shadow:"button_shadow__fnbqq",secondary:"button_secondary__kMMNc",customStyles:"button_customStyles__I_tng",customHoverStyles:"button_customHoverStyles__HzaJq",circle:"button_circle__zYDEK",responsive:"button_responsive__cQLAH"}},248498:(e,t,r)=>{"use strict";r.d(t,{Nf:()=>s,b:()=>a,le:()=>o,xu:()=>l});var n=r(69308),i=r(677185),s=function(e){return e[e.Keyboard=0]="Keyboard",e[e.Pointer=1]="Pointer",e}({});let l=(0,n.createContext)({actions:{selectFirstNonDisabled:()=>{throw Error("Could not find a MenuContext.Provider in the component tree.")},setSelected:()=>{throw Error("Could not find a MenuContext.Provider in the component tree.")},setOpen:()=>{throw Error("Could not find a MenuContext.Provider in the component tree.")},afterSelect:()=>{throw Error("Could not find a MenuContext.Provider in the component tree.")},handleKey:()=>{throw Error("Could not find a MenuContext.Provider in the component tree.")},closeAndRestoreFocus:()=>{throw Error("Could not find a MenuContext.Provider in the component tree.")}},state:{menuId:"",buttonId:"",open:!1,listRef:null,buttonRef:null,selected:-1,typeahead:"",popperAttributes:{},popperStyles:{}}});l.displayName="MenuContext";let a=()=>(0,n.useContext)(l),o=(0,i.Vz)()},316261:(e,t,r)=>{"use strict";r.d(t,{D:()=>p});var n=r(44880),i=r(559048),s=r(677185),l=r(374532),a=r(248498),o=r(715471),c=r.n(o),d=r(33149),u=r(409857),h=r(443938);function p({children:e,disabled:t,onClick:r,value:o,isLink:p,"data-testid":m,innerMenuItemClassName:f,shouldOnClickWhenLink:g,LinkComponent:_=l.N,...x}){let b=(0,u.B)("menu-item-"),{actions:{afterSelect:y,setSelected:w},state:{selected:v}}=(0,a.b)(),{index:C,ref:j}=(0,s.lr)(a.le,{value:o||("string"==typeof e?e:void 0),disabled:t,onClick:r,isLink:p}),k=-1!==C&&v===C;k&&(0,d.V)().then(()=>w(C));let H="string"==typeof e,$=(0,n.jsx)(h.r,{Component:p?_:void 0,...x,"aria-disabled":t||void 0,"aria-labelledby":H?b:void 0,className:(0,i.$)(c().item,f),"data-selected":k?"":void 0,"data-testid":m,onClick:e=>{!t&&((p&&g||!p)&&r?.(e),e.isDefaultPrevented()||y(a.Nf.Pointer))},onPointerMove:t?void 0:()=>w(C),ref:j,children:H?(0,n.jsx)("span",{id:b,children:e}):e});return p?(0,n.jsx)("li",{"data-geist-menu-item":"","data-geist-menu-link":"",role:"none",children:$}):$}},337693:(e,t,r)=>{"use strict";r.d(t,{M:()=>c,s:()=>d});var n=r(44880),i=r(190994),s=r(67216),l=r(15093),a=r(227658),o=r(938603);function c(){return(0,n.jsx)(i.E,{className:"geist-hide-on-tablet",height:40,width:o.uD})}function d(){return(0,n.jsxs)(s.h,{className:"geist-hide-on-tablet",children:[(0,n.jsx)(s.h.Control,{disabled:!0,icon:(0,n.jsx)(l.K,{}),value:"grid"}),(0,n.jsx)(s.h.Control,{disabled:!0,icon:(0,n.jsx)(a.d,{}),value:"list"})]})}},354602:(e,t,r)=>{"use strict";r.d(t,{I:()=>o});var n=r(44880),i=r(559048),s=r(69308),l=r(715471),a=r.n(l);let o=(0,s.forwardRef)(({children:e,width:t=150,height:r,className:s,style:l,variant:o,useNewListHeightBehavior:c,...d},u)=>{let h={...l,width:t};if(c){let e=c.menuItemHeight??40,t=Math.floor(c.maxHeight/e);c.numberOfChildren-t>0&&(h.height=t*e-8)}else h.maxHeight=r;return(0,n.jsx)("ul",{...d,className:(0,i.$)(s,a().menu,{[String(a().loose)]:"loose"===o}),"data-geist-menu":"","data-version":"v1",ref:u,role:"menu",style:h,tabIndex:-1,children:e})});o.displayName="InnerMenu"},363376:(e,t,r)=>{"use strict";r.d(t,{KJ:()=>s,yf:()=>i});let n={large:24,small:16,xSmall:12,mediumSmall:20,default:16},i=16;function s(e){return n[e||"default"]}},374532:(e,t,r)=>{"use strict";r.d(t,{N:()=>p});var n=r(44880),i=r(69308),s=r(609623),l=r.n(s),a=r(559048),o=r(457988),c=r(513184),d=r(44342),u=r(748241),h=r.n(u);let p=(0,i.forwardRef)(({as:e,type:t,variant:r,external:i,icon:s,tab:u,href:p,children:m,className:f,prefetch:g=!0,canPrefetch:_=o.c,prefetchStrategy:x="visible",isDifferentZone:b,...y},w)=>{let v=(0,c.usePrefetchProps)({href:p,isDifferentZone:b,prefetch:g,prefetchStrategy:x}),C=u||i||p&&!_(p)&&!p.startsWith("#"),j=r||t,k=j?h()[j]:"",{underline:H,...$}=y,S=!!i&&!1!==s;if(p&&(b||C)){let{passHref:e,...t}=y;return(0,n.jsxs)("a",{href:p,rel:C?"noopener":void 0,target:C?"_blank":void 0,...t,className:(0,a.$)(h().link,{[String(h().external)]:S,[String(h().alwaysUnderline)]:!!H},k,f),ref:w,children:[m,S?(0,n.jsx)(d.F,{}):null]})}if(!p&&!y.onClick)return(0,n.jsx)("span",{...$,"aria-disabled":!0,className:(0,a.$)(h().disabled,k,f),ref:w,role:"link",tabIndex:-1,children:m});let E=(0,a.$)(h().link,{[String(h().alwaysUnderline)]:!!H},k,f);return p?(0,n.jsx)(l(),{href:e||p,...$,...v,className:E,ref:w,children:m}):(0,n.jsx)("span",{...$,className:E,onKeyDown:e=>{"Enter"===e.key&&$.onClick?.()},ref:w,role:"link",tabIndex:0,children:m})});p.displayName="Link"},397191:e=>{e.exports={wrapper:"spinner_wrapper__zbFtL",spinner:"spinner_spinner__fqUfx",bar:"spinner_bar__VysK5",spin:"spinner_spin__7lZMA"}},413533:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var n=r(967917),i=r(682282),s=r(469808),l=r(387557),a=r(407907),o=r(435828),c=r(537811);c.env.PORT;let d=c.env.VERCEL_URL??"vercel.com",u=`https://${d}`,h=c.env.VERCEL_URL?`https://${c.env.VERCEL_URL}`:void 0,p=c.env.NEXT_PUBLIC_API_URL||h||u;var m=r(918122),f=r(495401),g=r(537811);let _=r.e(32216).then(r.bind(r,32216)),x="true"===g.env.VERCEL_OTEL_FETCH_PROPAGATE,b="true"===g.env.VERCEL_OTEL_FETCH_SERVER_TIMINGS,y=`Vercel/${g.env.VERCEL_PROJECT_ID||"fetchApi"}`,w="network_error",v=(0,a.S)()?w:"A network error has occurred. Please check your connection and try again.";async function C(e,t){let r=Date.now(),{endpoint:n,attributes:i}=await $(e),l=t?.method??"GET";return(0,s.uP)(e=>j(e,n,l,t,r),{name:`app/lib/fetch-api ${l} ${t?.route||n}`,ignoreOrphaned:!0,ignoreClientErrors:t?.ignoreClientErrors,attributes:{"operation.name":`app/lib/fetch-api.${l}`,"resource.name":function(e){let t=e.indexOf("?");return -1===t?e:e.substring(0,t)}(n),...t?.traceAttributes,...i}})}async function j(e,t,r,s,a){let o,c,d=await H(t,s,e),u="object"==typeof s?.body?JSON.stringify(s.body):s?.body,h=(0,m.V)(t,r),p=null;if(e){e.setAttribute("http.request_cache",s?.cache??"default");let t=Date.now()-a;e.setAttribute("exp.prep_time",t)}try{let i=Date.now();c=await fetch(t,{...s,body:u,headers:d,method:r});let l=Date.now()-i;e&&(e.setAttribute("http.response_time",l),(0,m.yq)(c,e,s));let{status:a,headers:g}=c,{type:_}=(0,n.q)(g.get("content-type")??"text/plain"),x=g.get("x-vercel-id");if(b&&e&&c.headers.has("server-timing")){let t=c.headers.get("server-timing")||"";e.setAttribute("http.server_timing",t);let r=function(e){let t={};for(let r of e.split(",")){let e=r.split(";"),n=e[0]?.trim(),i=e.find(e=>e.startsWith("dur=")),s=i?Number.parseFloat(i.trim().substring(4)):void 0;n&&void 0!==s&&(t[`http.server_timing.${n}`]=s)}return t}(t);e.setAttributes(r);let n=r["http.server_timing.terminator_rt"];n&&"number"==typeof n&&e.setAttribute("http.server_timing_overhead",l-n)}if((0,f.p)(c,s?.throwOnHTTPError))if("application/json"===_){let e;try{e=await c.json()}catch(t){e={error:void 0}}let n="code"in e&&"message"in e;s?.wrapErrorsLegacy&&n&&(e.error={code:e.code,message:e.message});let i="object"!=typeof e.error?"Unexpected Error":e.error.message||e.error.code;if(o=(0,m.o)(Error(i),{method:r,endpoint:t,resp:c}),"object"==typeof e.error)for(let t of(o.code=e.error.code,Object.keys(e.error)))"message"!==t&&(o[t]=e.error[t])}else{let e=await c.text(),n=`Unexpected response: ${_}(${e})`;o=(0,m.o)(Error(n),{method:r,endpoint:t,resp:c})}else p=204===a?null:_.startsWith("text/")?await c.text():await c.json();(s?.returnStatus||s?.returnHeaders)&&(p={body:p,status:s.returnStatus?c.status:void 0,headers:s.returnHeaders?c.headers:void 0}),(0,m._i)(h,void 0,a,x)}catch(a){if((0,l.J)(a))throw a;let e=(0,i.normalizeError)(a),n=e instanceof TypeError,s=n?v:e.message;(o=(0,m.o)(Error(s),{method:r,endpoint:t,resp:c,errorCode:n?w:void 0})).name=e.name,e!==o&&(o.cause=e),(0,m._i)(h,o,null,null)}if(o)throw o;return p}let k={set(e,t,r){e.set(t,r)}};async function H(e,t,r){let n=new Headers(t?.headers);if((0,a.S)()){let t=await E(),i=new URL(e).host;if(e.startsWith(t)||"vercel.com"===i||i.endsWith(".vercel.com")){n.set("User-Agent",y);let e=(await (await _).cookies()).toString();e&&n.set("cookie",e);let t=await (await _).headers(),i=t.get("authorization");i&&n.set("authorization",i);let l=t.get("x-vercel-protection-bypass");l&&n.set("x-vercel-protection-bypass",l),x&&(0,s.fC)(r,n,k),b&&n.set("X-Vercel-Debug-Proxy-Timing","1")}}return n.has("Accept")||n.set("Accept","*/*"),"object"!=typeof t?.body||n.has("Content-Type")||n.set("Content-Type","application/json; charset=utf-8"),n}async function $(e){let t=await S(e);return(0,a.S)(),{endpoint:t}}async function S(e){if((0,a.S)()&&e.startsWith("/api/v2/user/authenticate"))return`${o.x5L}/${e.substring(5)}`;let t=(0,a.S)()?await E():g.env.CLIENT_API_BASE||"";return e.startsWith("/api")?`${t}${e}`:e.startsWith("/")?`${t}/api${e}`:e}async function E(){let e=(await (await _).headers()).get("Host");return e?`${e.startsWith("localhost:")?"http":"https"}://${e}`:(console.error("Failed to get the host from the request headers"),p)}},443938:(e,t,r)=>{"use strict";r.d(t,{r:()=>o});var n=r(44880),i=r(559048),s=r(69308),l=r(715471),a=r.n(l);let o=(0,s.forwardRef)(({children:e,suffix:t,prefix:r,className:s,Component:l="li",type:o,"data-testid":c,style:d,...u},h)=>(0,n.jsxs)(l,{...u,className:(0,i.$)(s,a().item,{[String(a().error)]:"error"===o}),"data-geist-menu-item":"","data-testid":c,ref:h,role:"menuitem",style:{...d,"--geist-icon-size":"18px"},tabIndex:-1,children:[r?(0,n.jsx)("span",{"aria-hidden":!0,className:a().prefix,children:r}):null,e,t?(0,n.jsx)("span",{"aria-hidden":!0,className:a().suffix,children:t}):null]}));o.displayName="InnerMenuItem"},448480:e=>{e.exports={formContainer:"dashboard-overview-projects-form-header_formContainer__lnsVx",searchInput:"dashboard-overview-projects-form-header_searchInput__PJIlh"}},503156:(e,t,r)=>{"use strict";r.d(t,{q:()=>i,w:()=>n});let n=(e,t,r)=>e?["geist-themed",`geist-${e}`,t?`geist-${e}-fill`:null,r?`geist-${e}-${r}`:null]:"",i=(e,t,r,n)=>e?["geist-new-themed",`geist-new-${e}`,t?`geist-new-${e}-fill`:null,r?`geist-new-${e}-${r}`:null,"tooltip"===n?"geist-new-tooltip":""]:""},587212:(e,t,r)=>{"use strict";r.d(t,{I:()=>h});var n=r(44880),i=r(559048),s=r(69308),l=r(924745),a=r(745772),o=r(248498),c=r(341931),d=r.n(c),u=r(33149);function h({children:e,showChevron:t,align:r="center",style:c,onClick:h,...p}){let{actions:{setOpen:m,setSelected:f,selectFirstNonDisabled:g,closeAndRestoreFocus:_},state:{buttonId:x,buttonRef:b,menuId:y,open:w,popperAttributes:v,popperStyles:C}}=(0,o.b)();return"string"!==(0,s.useMemo)(()=>typeof s.Children.toArray(e)[0],[e])&&(p["aria-label"]=p["aria-label"]||"Menu",p.svgOnly=!0),(0,n.jsxs)(a.Button,{...p,align:r,"aria-controls":y,"aria-expanded":w,"aria-haspopup":!0,"data-geist-menu-button":"","data-is-open":w,id:x,onClick:e=>{"mouse"!==e.pointerType&&(h?.(e),(0,u.V)().then(()=>{m(e=>!e)}))},onKeyDown:e=>{switch(e.key){case"ArrowDown":case"ArrowUp":case"Enter":case" ":e.preventDefault(),m(!0),g()}},onMouseDown:e=>{"mouse"===e.pointerType&&(h?.(e),f(-1),w?_(o.Nf.Pointer):m(!0))},ref:b,style:{...C.reference,...c},...v.reference,children:[e,t?(0,n.jsx)("span",{className:(0,i.$)(d().iconButton),"data-open":w,children:(0,n.jsx)(l.y,{size:18})}):null]})}},599861:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});let n=(0,r(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z" fill="currentColor"/>')},608863:e=>{e.exports={stack:"stack_stack__iZkUS",padding:"stack_padding__ox8JS",debug:"stack_debug__3bKEB"}},622891:(e,t,r)=>{"use strict";r.d(t,{W:()=>m});var n=r(44880),i=r(344817),s=r(756183),l=r(558144),a=r(559048),o=r(934358),c=r(540653),d=r(248498),u=r(715471),h=r.n(u),p=r(354602);function m({children:e,portalClassName:t,containerRef:r,mobileContainerClassName:u,...m}){let f=(0,c.useIsMobile)(),{actions:{closeAndRestoreFocus:g,handleKey:_},state:{buttonId:x,listRef:b,menuId:y,open:w,popper:v,popperAttributes:C,popperStyles:j}}=(0,d.b)(),k=(0,n.jsx)(p.I,{"aria-labelledby":x,id:y,...m,onKeyDown:_,ref:b,children:e});return f?(0,n.jsx)(o._,{className:u,container:r?.current,onDismiss:()=>{g(d.Nf.Pointer)},show:w,children:k}):(0,n.jsx)(i.Z,{containerRef:r,unstable_skipInitialRender:!0,children:(0,n.jsx)(s.N,{children:w?(0,n.jsx)(l.P.div,{className:(0,a.$)(h().wrapper,t),ref:v,style:j.popper,...C.popper,animate:{opacity:1,transition:{duration:0}},exit:{opacity:0},initial:{opacity:0},transition:{duration:.15,ease:"easeInOut"},children:k}):null})})}},664577:(e,t,r)=>{"use strict";function n(e){return{color:"currentColor"===e?"currentColor":`var(--ds-${e})`}}r.d(t,{ki:()=>n})},688781:(e,t,r)=>{"use strict";r.d(t,{G:()=>u,u:()=>a});var n=r(44880),i=r(69308),s=r(664577),l=r(363376);let a="__ADD_ID__",o=RegExp(a,"g"),c=`0 0 ${l.yf} ${l.yf}`,d={top:"text-top",bottom:"text-bottom",middle:"middle",initial:null},u=(e,t={})=>{let{color:r="currentColor",size:a,width:u,height:h,viewBox:p=c}=t;function m(t){let{size:i,color:o=r,align:c="initial",className:m,width:f,height:g,style:_,iconHtml:x,...b}=t,y=d[c],w=a||l.yf,v=x||e;return(0,n.jsx)("svg",{className:m,dangerouslySetInnerHTML:{__html:v},"data-testid":"geist-icon",height:w,strokeLinejoin:"round",style:{verticalAlign:y||void 0,width:u||f||i,height:h||g||i,...(0,s.ki)(o),..._},viewBox:p,width:w,...b})}return o.test(e)?(0,i.memo)(function(t){let r=(0,i.useId)().replace(/[^a-zA-Z0-9-_]/g,""),s=e.replace(o,r);return(0,n.jsx)(m,{...t,iconHtml:s})}):(0,i.memo)(m);}},691711:e=>{e.exports={wrapper:"text_wrapper__i87JK",truncate:"text_truncate__v5uF6",clamp:"text_clamp__r9W5W",nowrap:"text_nowrap__Libwk",monospace:"text_monospace___Hyeq"}},700911:(e,t,r)=>{"use strict";r.d(t,{N:()=>a});var n=r(44880),i=r(559048),s=r(715471),l=r.n(s);function a({className:e,...t}){return(0,n.jsx)("li",{className:(0,i.$)(l().divider,e),"data-geist-menu-divider":"",role:"separator",...t})}},715471:e=>{e.exports={wrapper:"menu_wrapper__C96DN",menu:"menu_menu__KVqpc","fade-out":"menu_fade-out__J4dkt",item:"menu_item__vQ85a",error:"menu_error__BgkmP",suffix:"menu_suffix__XHkKQ",prefix:"menu_prefix__Qxtq8",divider:"menu_divider__z2172",section:"menu_section__yIFrD",title:"menu_title__QGy4D",loose:"menu_loose__qto1O"}},716519:(e,t,r)=>{"use strict";r.d(t,{E:()=>m});var n=r(44880),i=r(559048),s=r(69308),l=r(691711),a=r.n(l);function o(e,t=16){return`${e/t}rem`}var c=r(719766);let d={48:"3.5rem",40:"3.5rem",32:"2.5rem",24:"2rem",20:"1.5rem",18:"1.5rem",16:"1.5rem",14:"1.25rem",13:"1.125rem",12:"1rem",10:"0.75rem"},u={48:"-0.066875rem",40:"-0.058125rem",32:"-0.049375rem",24:"-0.029375rem",20:"-0.020625rem",18:"initial",16:"initial",14:"initial",13:"initial",12:"initial",10:"initial"},h={48:"700",40:"600",32:"600",24:"600",20:"600",16:"400",14:"400",13:"400",18:"400",12:"400",10:"400"},p={"heading-72":{size:72,lineHeight:72,weight:600,letterSpacing:-4.32},"heading-64":{size:64,lineHeight:64,weight:600,letterSpacing:-3.84},"heading-56":{size:56,lineHeight:56,weight:600,letterSpacing:-3.36},"heading-48":{size:48,lineHeight:56,weight:600,letterSpacing:-2.88},"heading-40":{size:40,lineHeight:48,weight:600,letterSpacing:-2.4},"heading-32":{size:32,lineHeight:40,weight:600,letterSpacing:-1.28},"heading-24":{size:24,lineHeight:32,weight:600,letterSpacing:-.96},"heading-20":{size:20,lineHeight:26,weight:600,letterSpacing:-.4},"heading-16":{size:16,lineHeight:24,weight:600,letterSpacing:-.32},"heading-14":{size:14,lineHeight:20,weight:600,letterSpacing:-.28},"button-16":{size:16,lineHeight:20,weight:500},"button-14":{size:14,lineHeight:20,weight:500},"button-12":{size:12,lineHeight:16,weight:500},"label-20":{size:20,lineHeight:32,weight:400},"label-18":{size:18,lineHeight:20,weight:400},"label-16":{size:16,lineHeight:20,weight:400},"label-14":{size:14,lineHeight:20,weight:400},"label-13":{size:13,lineHeight:16,weight:400},"label-12":{size:12,lineHeight:16,weight:400},"copy-24":{size:24,lineHeight:36,weight:400},"copy-20":{size:20,lineHeight:36,weight:400},"copy-18":{size:18,lineHeight:28,weight:400},"copy-16":{size:16,lineHeight:24,weight:400},"copy-14":{size:14,lineHeight:20,weight:400},"copy-13":{size:13,lineHeight:18,weight:400}},m=(0,s.memo)(function({children:e,as:t="p",size:r=14,lineHeight:s,weight:l,color:m="gray-1000",transform:f,align:g,truncate:_,wrap:x=!0,className:b,style:y,monospace:w=!1,variant:v,ref:C,...j}){let k="inherit"===m?"inherit":`var(--ds-${m})`;return (0,n.jsx)(t,{className:(0,i.$)(a().wrapper,b,{[a().truncate]:!0===_,[a().clamp]:"number"==typeof _,[a().nowrap]:!x,[a().monospace]:w}),"data-version":"v1",ref:C,style:{...("number"==typeof _ && {"--text-clamp":_}),"--text-color":k,...function({size:e,variant:t,lineHeight:r,weight:n}){if(t){if("string"==typeof t){let e=p[t];return{"--text-size":o(e.size),"--text-line-height":o(e.lineHeight),"--text-letter-spacing":`${e.letterSpacing||0}px`,"--text-weight":n??e.weight}}let e=(0,c.Y)(t);return Object.keys(e).reduce((t,r)=>{let i=p[e[r]];return{...t,[`--${r}-text-size`]:o(i.size),[`--${r}-text-line-height`]:o(i.lineHeight),[`--${r}-text-weight`]:n??i.weight,[`--${r}-text-letter-spacing`]:`${i.letterSpacing||0}px`}},{})}if("number"==typeof e)return{"--text-size":o(e),"--text-line-height":r?o(r):d[e],"--text-letter-spacing":u[e],"--text-weight":n||h[e]};let i=(0,c.Y)(e);return Object.keys(i).reduce((e,t)=>{let s=i[t];return{...e,[`--${t}-text-size`]:o(s),[`--${t}-text-line-height`]:r?o(r):d[s],[`--${t}-text-weight`]:n||h[s],[`--${t}-text-letter-spacing`]:u[s]}},{})}({size:r,lineHeight:s,weight:l,variant:v}),...("string"==typeof f && {"--text-transform":f}),...("string"==typeof g && {"--text-align":g}),...y},...j,children:e});})},719766:(e,t,r)=>{"use strict";r.d(t,{A:()=>i,Y:()=>s});let n=["xs","sm","smd","md","lg","xl"];function i(e,t){let r={};if("object"!=typeof t)null!==t&&(r[`--${e}`]=t);else{let i,s=t.sm,l=t.md,a=t.xs,o=t.smd;n.forEach(n=>{let c=t[n];("xs"!==n||a!==s)&&(null!=c&&c!==i||"smd"===n&&o===s&&o!==l)&&(r[`--${n}-${e}`]=c,i=c)})}return r}function s(e){if("object"==typeof e&&null!==e){if(!("sm"in e))throw Error("Failed to restrict responsive prop, an object was passed without an sm key");let t={xs:e.xs||e.sm||null,sm:e.sm||null,smd:e.smd||e.md||e.sm||null,md:e.md||e.smd||e.sm||null,lg:e.lg||e.md||e.sm||null};if(Object.values(t).some(e=>null==e))throw Error("Failed to restrict responsive prop, an invalid value was passed to sm, md or lg");return t}return{xs:e,sm:e,smd:e,md:e,lg:e}}},742935:(e,t,r)=>{"use strict";r.d(t,{px:()=>n});let n=e=>"number"==typeof e?`${e}px`:e},745772:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Button:()=>v,default:()=>C});var n=r(44880),i=r(69308),s=r(559048),l=r(845178),a=r(83803),o=r(508118),c=r(435664),d=r(94684),u=r(835814),h=r(503156),p=r(363376),m=r(69625),f=r(807133),g=r(242725),_=r.n(g);let x="production"!==f.e,b=e=>"object"==typeof e&&null!==e&&"type"in e,y={small:{padding:"6px",height:"32px"},medium:{padding:"10px",height:"40px"},large:{padding:"14px",height:"48px"}},w=(e,t,r)=>{let n=!1,[s,...l]=i.Children.toArray(e);if(s&&!(l.length>=1)&&(b(s)&&("svg"===s.type||"string"!=typeof s.type&&"name"in s.type&&"Icon"===s.type.name)&&(n=!0),n&&(!t||!r["aria-label"])))throw Error("SVG/Icon-only Buttons must include both an `aria-label` and the `svgOnly` prop.")},v=(0,i.forwardRef)(({Component:e="button",typeName:t="submit",className:r,href:f,as:g,target:b,rel:v,disabled:C,loading:k,width:H,type:$,size:S,prefix:E,normalStyle:N,hoverStyle:L,suffix:V,onClick:z,variant:P="invert",shape:I,align:M,children:D,onMouseDown:A,onMouseUp:R,svgOnly:T,shadow:Z,passthroughOnClick:B,passthroughOnMouseEnter:K,touchEventWorkaround:O=!1,role:F,...J},W)=>{let q=(0,m._)(),G=C||k||q,U=(0,h.q)($,!0),X=(0,i.useRef)(null),{focusProps:Y,isFocusVisible:Q}=(0,o.og)(),{hoverProps:ee,isHovered:et}=(0,a.Mk)({isDisabled:G}),{buttonProps:er,isPressed:en}=(0,l.s)({isDisabled:G,target:b,rel:v,elementType:e,onPress:z,onPressStart:A,onPressUp:R},X);x&&w(D,T,J),(0,i.useEffect)(()=>{if(!O)return;function e(e){e.preventDefault()}let t=X.current;return t?.addEventListener("touchstart",e),()=>{t?.removeEventListener("touchstart",e)}},[O]);let ei={...(0,d.v6)({onClick:B,onMouseEnter:K},ee,Y,er)};return (0,n.jsxs)(e,{...ei,...J,as:g,className:"unstyled"===P?(0,s.$)(_().base,r):(0,s.$)(_().base,_().button,r,"secondary"!==$?U:null,{[_().secondary||""]:"secondary"===$,[_().tertiary||""]:"tertiary"===$,[_().shape||""]:"circle"===I||"square"===I,[_().circle||""]:"circle"===I,[_().rounded||""]:"rounded"===I,[_().loading||""]:k,[_().shadow||""]:Z,[_().tiny||""]:"tiny"===S,[_().small||""]:"small"===S,[_().large||""]:"large"===S,[_().responsive||""]:"object"==typeof S&&null!==S,[_().customStyles||""]:!!N,[_().customHoverStyles||""]:!!L},_()[P]),"data-active":C?void 0:j(en),"data-focus":C?void 0:j(Q),"data-geist-button":"","data-hover":C?void 0:j(et),"data-prefix":E||k?"true":"false","data-suffix":V?"true":"false","data-testid":J["data-testid"],"data-version":"v1",href:f,ref:(0,c.P)([X,W]),role:"a"===e?"link":ei.role||F,style:{...J.style,minWidth:H,maxWidth:H,...(N ? {"--custom-bg-color":N.backgroundColor,"--custom-color":N.color,"--custom-border-color":N.borderColor} : {}),...(L ? {"--custom-bg-hover-color":L.backgroundColor,"--custom-hover-color":L.color,"--custom-border-hover-color":L.borderColor} : {}),"--geist-icon-size":"16px",...function(e){if("object"!=typeof e||null===e)return{};let t={sm:e.sm,md:e.md||e.sm,lg:e.lg||e.md||e.sm};return Object.keys(t).reduce((e,r)=>{let n=t[r];return n?{...e,...{[`--${r}-x-padding`]:y[n].padding,[`--${r}-height`]:y[n].height}}:e},{})}(S)},type:t,children:[E||k?(0,n.jsx)("span",{className:_().prefix,children:k?(0,n.jsx)(u.y,{color:"var(--accents-5)",size:(0,p.KJ)(S)}):E}):null,(0,n.jsx)("span",{className:(0,s.$)(_().content,{[_().flex||""]:T,[_().start||""]:"start"===M,[_().grow||""]:"grow"===M,[_().flexGrow||""]:"flex-grow"===M,[_().center||""]:"center"===M}),children:D}),V?(0,n.jsx)("span",{className:_().suffix,children:V}):null]});});v.displayName="Button";let C=v,j=e=>e?"":void 0},748241:e=>{e.exports={link:"link_link__hbWKh",primary:"link_primary__GLS86",disabled:"link_disabled__XCKN4",highlight:"link_highlight__kJZF9",secondary:"link_secondary__F1rqx",blend:"link_blend__JjXMT",underline:"link_underline__i1AXz",alwaysUnderline:"link_alwaysUnderline__J7rlf",external:"link_external__0a5cc"}},773150:(e,t,r)=>{"use strict";r.d(t,{j:()=>l});var n=r(69308),i=r(755464),s=r(157910);function l(e,t){let r=(0,i.useSearchParams)(),l=r?.get("view")==="list"?"list":t??"grid",[a,o]=(0,n.useState)(r?.get("sort")==="name"?"name":"default"),[c,d]=(0,n.useState)(l);(0,n.useEffect)(()=>{r?.has("sort")?o("name"===r.get("sort")?"name":"default"):o("default"),r?.has("view")&&d("list"===r.get("view")?"list":"grid")},[r]);let u=(0,n.useCallback)(t=>{e&&((0,s.L)({scopeId:e,viewPreference:"list"===t?"list":"cards"}),d("list"===t?"list":"grid"))},[e]);return{sort:a,view:c,setSort:o,setView:d,saveViewPreferences:u}}},775714:(e,t,r)=>{"use strict";r.d(t,{B:()=>f});var n=r(44880),i=r(69308),s=r(559048);let l=["sm","md","lg","xl"];function a(e,t){let r={};if("object"!=typeof t)null!==t&&(r[`--${e}`]=t);else{let n;l.forEach(i=>{let s=t[i];null!==s&&s!==n&&(r[`--${i}-${e}`]=s,n=s)})}return r}function o(e){return"number"==typeof e?`${4*e}px`:void 0}function c(e){if("number"==typeof e){let t=o(e);return{sm:t,md:t,lg:t,xl:t}}return{sm:o(e.sm),md:o(e.md),lg:o(e.lg),xl:o(e.xl)}}function d(e){return{sm:e.sm,md:e.md||e.sm,lg:e.lg||e.md||e.sm,xl:e.xl||e.lg||e.md||e.sm}}function u(e,t,r,n){return e===t&&e===r&&e===n?e:e===r&&t===n?`${e} ${t}`:t===n?`${e} ${t} ${r}`:`${e} ${t} ${r} ${n}`}function h(e,t,r,n,i,s,l,a){if(void 0===t&&void 0===r&&void 0===n&&void 0===i&&void 0===s&&void 0===l&&void 0===a)return{[`--${e}`]:"0px"};let o=c(i??n??t??0),h=c(s??r??t??0),p=function(e,t,r,n){let i=d(e),s=d(t),l=d(r),a=d(n);return{sm:u(i.sm||"",s.sm||"",l.sm||"",a.sm||""),md:u(i.md||"",s.md||"",l.md||"",a.md||""),lg:u(i.lg||"",s.lg||"",l.lg||"",a.lg||""),xl:u(i.xl||"",s.xl||"",l.xl||"",a.xl||"")}}(o,h,c(l??n??t??0),c(a??r??t??0)),m=Object.keys(p).reduce((t,r)=>({...t,[`--${r}-${e}`]:p[r]}),{});return m[`--sm-${e}`]===m[`--md-${e}`]&&m[`--md-${e}`]===m[`--lg-${e}`]&&m[`--lg-${e}`]===m[`--xl-${e}`]?{[`--${e}`]:m[`--sm-${e}`]}:m}var p=r(608863),m=r.n(p);let f=(0,i.memo)(function({as:e="div",children:t,padding:r,paddingX:i,paddingY:l,paddingTop:o,paddingRight:c,paddingBottom:d,paddingLeft:u,gap:p,direction:f="column",align:g="stretch",justify:_="flex-start",flex:x="initial",debug:b,style:y,className:w,ref:v,...C}){let j=[r,i,l,o,c,d,u].some(e=>void 0!==e);return(0,n.jsx)(e,{className:(0,s.$)(m().stack,"stack",w,{[m().debug]:b,[m().padding]:j}),"data-testid":C["data-testid"],"data-version":"v1",ref:v,style:{...y,"--stack-flex":x,...a("stack-direction",f),...a("stack-align",g),...a("stack-justify",_),...h("stack-padding",r,i,l,o,c,d,u),...h("stack-gap",p)},...C,children:t})})},807133:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});let n="production"},809581:e=>{e.exports={container:"switch-control_container__lMMXG",control:"switch-control_control__rHZJO",checked:"switch-control_checked__4LRce",large:"switch-control_large__VoD1X",disabled:"switch-control_disabled__PwRGX",icon:"switch-control_icon__Cvu9t",small:"switch-control_small__wA3NR",text:"switch-control_text__cP3ui"}},835814:(e,t,r)=>{"use strict";r.d(t,{y:()=>c});var n=r(44880),i=r(559048),s=r(742935),l=r(397191),a=r.n(l);let o=Array(12).fill(0);function c({color:e,className:t,size:r=20,wrapperClassName:l}){return(0,n.jsx)("div",{className:(0,i.$)(a().wrapper,l),"data-geist-spinner":"","data-version":"v1",style:{"--spinner-size":(0,s.px)(r),"--spinner-color":e},children:(0,n.jsx)("div",{className:(0,i.$)(a().spinner,t),children:o.map((e,t)=>(0,n.jsx)("div",{className:a().bar},`spinner-bar-${t}`))})})}},901226:(e,t,r)=>{"use strict";r.d(t,{c:()=>a,g:()=>o});var n=r(23624),i=r.n(n);let s={},l=e=>{let t=s[e];if(t)return t;let r=i()(e);return s[e]=r,r};function a(e){(window.loadedForTest?window.loadedForTest:window.loadedForTest=new Set).add(e)}let o=function(e,t,...r){return[...e.split("/"),t,...r].filter(Boolean).map(l).join("/")}},928973:(e,t,r)=>{"use strict";r.d(t,{J:()=>n});let n=(0,r(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"/>')},938603:(e,t,r)=>{"use strict";r.d(t,{BC:()=>w,eh:()=>y,lB:()=>v,uD:()=>b});var n=r(44880),i=r(622891),s=r(587212),l=r(185037),a=r(316261),o=r(700911),c=r(775714),d=r(67216),u=r(924745),h=r(599861),p=r(15093),m=r(227658),f=r(928973),g=r(755464),_=r(901226),x=r(773150);let b=180;function y({scopeId:e,initialView:t,onChange:r}){let{sort:d,view:u,setSort:g,setView:y,saveViewPreferences:w}=(0,x.j)(e,t);return(0,n.jsxs)(l.$,{children:[(0,n.jsx)(s.I,{"aria-label":"Sort Projects",className:"geist-show-on-tablet","data-testid":(0,_.g)("button","sort"),svgOnly:!0,type:"tertiary",typeName:"button",variant:"shadow",width:32,children:(0,n.jsx)(h.a,{})}),(0,n.jsxs)(i.W,{width:b,children:[(0,n.jsx)(a.D,{onClick:()=>{g("default"),r({sort:"default"})},suffix:"default"===d?(0,n.jsx)(f.J,{}):null,children:"Sort by activity"}),(0,n.jsx)(a.D,{onClick:()=>{g("name"),r({sort:"name"})},suffix:"name"===d?(0,n.jsx)(f.J,{}):null,children:"Sort by name"}),(0,n.jsx)(o.N,{}),(0,n.jsx)(a.D,{onClick:()=>{y("grid"),w("grid"),r({view:"grid"})},suffix:"grid"===u?(0,n.jsx)(f.J,{}):null,children:(0,n.jsxs)(c.B,{align:"center",as:"span",direction:"row",gap:3,children:[(0,n.jsx)(p.K,{}),(0,n.jsx)("span",{children:"Grid View"})]})}),(0,n.jsx)(a.D,{onClick:()=>{y("list"),w("list"),r({view:"list"})},suffix:"list"===u?(0,n.jsx)(f.J,{}):null,children:(0,n.jsxs)(c.B,{align:"center",as:"span",direction:"row",gap:3,children:[(0,n.jsx)(m.d,{}),(0,n.jsx)("span",{children:"List View"})]})})]})]})}function w({onChange:e}){let{sort:t,setSort:r}=(0,x.j)(),o="Sort by activity";return"name"===t&&(o="Sort by name"),(0,n.jsxs)(l.$,{children:[(0,n.jsx)(s.I,{align:"start",className:"geist-hide-on-tablet","data-testid":(0,_.g)("button","sort"),suffix:(0,n.jsx)(u.y,{}),type:"secondary",typeName:"button",variant:"invert",width:b,children:o}),(0,n.jsxs)(i.W,{width:b,children:[(0,n.jsx)(a.D,{onClick:()=>{r("default"),e({sort:"default"})},suffix:"default"===t?(0,n.jsx)(f.J,{}):null,children:"Sort by activity"}),(0,n.jsx)(a.D,{onClick:()=>{r("name"),e({sort:"name"})},suffix:"name"===t?(0,n.jsx)(f.J,{}):null,children:"Sort by name"})]})]})}function v({name:e,size:t,scopeId:r,initialView:i}){let s=(0,g.usePathname)(),l=(0,g.useSearchParams)(),{view:a,saveViewPreferences:o}=(0,x.j)(r,i),c=e=>{let t=new URLSearchParams(l?.toString()??"");return t.set("view",e),`${s??"/"}?${t.toString()}`};return(0,n.jsxs)(d.h,{className:"geist-hide-on-tablet",name:e,size:t,children:[(0,n.jsx)(d.h.Control,{checked:"grid"===a,href:c("grid"),icon:(0,n.jsx)(p.K,{}),label:"grid",onClick:()=>o("grid")}),(0,n.jsx)(d.h.Control,{checked:"list"===a,href:c("list"),icon:(0,n.jsx)(m.d,{}),label:"list",onClick:()=>o("list")})]})}}}]);
//# debugId=5fe9a271-edd6-50ca-9ec1-96a42afee81d
