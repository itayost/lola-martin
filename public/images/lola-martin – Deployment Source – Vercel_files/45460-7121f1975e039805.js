
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0cd0e40f-041a-544b-a035-b471cea3140a")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45460],{6601:(e,t,r)=>{"use strict";r.d(t,{A:()=>d,F:()=>c});var i=r(69308),n=r(7836),a=r(918122),s=r(435828),l=r(315032),o=r(621365);function d(e,t){let{data:r,mutate:i,error:n}=(0,o.A)(e,t);return Object.assign(c(r,t),{deployment:r,deploymentError:n,revalidateDeployment:i})}function c(e,t){let{isLoading:r,team:o}=(0,l.F)(),d=(0,i.useMemo)(()=>{if(!e?.id||r)return"";let t=(0,s.SyP)("v10"),i=o?`teamId=${o.id}`:"";return`${t}/${e.id}/builds?${i}`},[e,r,o]);return(0,n.Ay)(d,e=>(0,a.ff)(e,{throwOnHTTPError:!0}),t)}},77153:(e,t,r)=>{"use strict";r.d(t,{i:()=>i});let i=(0,r(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5249 10.8478L11.8727 10.3286L10.8342 9.6329L10.4863 10.1522C9.94904 10.9543 9.0363 11.4802 8.00098 11.4802C6.96759 11.4802 6.05634 10.9563 5.51863 10.1567L5.16986 9.63804L4.13259 10.3356L4.48137 10.8542C5.2414 11.9844 6.53398 12.7302 8.00098 12.7302C9.47073 12.7302 10.7654 11.9816 11.5249 10.8478ZM6.75 6.75C6.75 7.30228 6.30228 7.75 5.75 7.75C5.19772 7.75 4.75 7.30228 4.75 6.75C4.75 6.19772 5.19772 5.75 5.75 5.75C6.30228 5.75 6.75 6.19772 6.75 6.75ZM10.25 7.75C10.8023 7.75 11.25 7.30228 11.25 6.75C11.25 6.19772 10.8023 5.75 10.25 5.75C9.69771 5.75 9.25 6.19772 9.25 6.75C9.25 7.30228 9.69771 7.75 10.25 7.75Z" fill="currentColor"/>')},81178:e=>{e.exports={match:"highlight-text_match__pk5rP"}},120938:(e,t,r)=>{"use strict";r.d(t,{D:()=>N,R:()=>E});var i=r(44880),n=r(69308),a=r(190994),s=r(775714),l=r(716519),o=r(363866),d=r(494800),c=r(497798),u=r(822144),f=r(783804),h=r(559048),p=r(315032),m=r(515864),g=r(214269),x=r(394833),y=r(43295),v=r(169305),j=r(806792),b=r(773536),_=r(797871),C=r(6601),w=r(363127),k=r(608699),L=r(653378),S=r(292772);let N={standard_legacy:{memory:1,cpu:.6,label:"Basic",description:"Cost-effective option for lightweight apps and APIs"},standard:{memory:1.7,cpu:1,label:"Standard",description:"Predictable performance for production workloads"},performance:{memory:3,cpu:1.7,label:"Performance",description:"Increased performance for latency-sensitive applications and SSR workloads"}};function E({projectData:e,isProjectLoading:t,onRevalidateProject:E,resourceConfigState:M,onSetResourceConfigState:P}){let H=(0,n.useRef)(!1),T=(0,m.al)(),{team:V,isTeam:B}=(0,p.F)(),D=V?.billing?.plan||"hobby",{modal:U,open:Z}=(0,b.s)(e),{track:A}=(0,v.uB)(),[R,$]=(0,n.useState)(!1),[F,O]=(0,n.useState)(),{can:z,isLoading:I}=(0,x.Ay)(),{deployment:W,isLoading:J}=(0,_.J)(e?.id),{data:Y,isLoading:K}=(0,C.F)(W??null),q=(0,n.useMemo)(()=>{if(!W||!Y)return!1;for(let e of Y.builds){let t=e.config.vercelConfig?.functions;if(null!=t&&"object"==typeof t){for(let[e,r]of Object.entries(t))if(void 0!==r.memory)return!0}}return!1},[W,Y]);(0,n.useEffect)(()=>{if(void 0===B||H.current)return;let t=V?.billing?.plan??"hobby",r=e?.createdAt&&e.createdAt>15731712e5?"standard_legacy":void 0,i=e?.resourceConfig?.functionDefaultMemoryType?e.resourceConfig.functionDefaultMemoryType:r;B&&"hobby"!==t?P({...e?.resourceConfig,functionDefaultMemoryType:i}):P({...e?.resourceConfig,functionDefaultMemoryType:"standard_legacy"}),H.current=!0},[e,V,B,P]);let G=t||I||J||K,X=z(y.r.Update,y.F.Project),Q=!G&&"hobby"!==D&&X,ee=Q&&M?.functionDefaultMemoryType!==e?.resourceConfig?.functionDefaultMemoryType,et=async()=>{if(e&&M?.functionDefaultMemoryType){$(!0);try{await (0,w.A)(e.id,V?.id,{resourceConfig:{functionDefaultMemoryType:M.functionDefaultMemoryType}}),A(j.p.ProjectSettingsUpdated,{projectId:e.id,teamId:V?.id??"",name:"function-cpu",value:M.functionDefaultMemoryType}),await E(),Z("Updated Function CPU setting successfully.")}catch(e){await Promise.resolve().then(r.bind(r,682282)).then(({errorToString:t})=>{O(t(e))})}finally{$(!1)}}},er=(0,L.m)(e),ei=Object.keys(N),en=er?ei.filter(e=>"standard_legacy"!==e):ei,ea=N.standard_legacy;return(0,i.jsxs)(S.default,{description:"",disabled:!Q,error:F,highlightNote:!G&&!X,note:G?(0,i.jsx)(a.E,{height:32,width:200}):"hobby"===D?(0,i.jsxs)(l.E,{children:["This feature is available on the"," ",(0,i.jsx)(g.Link,{external:!0,href:"/pricing",type:"highlight",children:"Pro plan"})," "]}):X?(0,i.jsxs)(l.E,{children:["Learn more about"," ",(0,i.jsx)(g.Link,{external:!0,href:"/docs/functions/configuring-functions/memory",type:"highlight",children:"Function CPU"})," ","and"," ",(0,i.jsx)(g.Link,{external:!0,href:"/docs/functions/configuring-functions/memory#pricing",type:"highlight",children:"Pricing"})]}):(0,i.jsx)(l.E,{children:"You need additional permissions to manage your project's CPU setting."}),onSave:et,saveDisabled:!ee,saveLoading:R,title:"Function CPU",children:[(0,i.jsxs)(s.B,{gap:2,children:[(0,i.jsxs)(l.E,{lineHeight:20,children:["This controls the maximum amount of CPU utilization your Vercel Functions can use while executing. Standard is optimal for most frontend workloads. You can override this per function using the"," ",(0,i.jsx)(g.Link,{external:!0,href:"/docs/functions/configuring-functions/memory#setting-custom-function-memory-size",type:"highlight",children:(0,i.jsx)("code",{children:"vercel.json"})})," ","file."]}),(0,i.jsx)(l.E,{lineHeight:20,children:"A new Deployment is required for your changes to take effect."})]}),(0,i.jsx)(u.h,{y:.5}),(0,i.jsxs)(s.B,{className:"w-full",direction:"column",gap:4,children:[er&&"hobby"===D?(0,i.jsx)(f.Note,{children:(0,i.jsxs)(l.E,{children:["You currently have"," ",(0,i.jsxs)(c.E,{capitalize:!1,size:"sm",variant:"blue-subtle",children:[ea.cpu," vCPU"]})," ","and"," ",(0,i.jsxs)(c.E,{capitalize:!1,size:"sm",variant:"blue-subtle",children:[ea.memory," GB Memory"]})," ","on the Hobby plan. Upgrade to get faster CPU and more memory."]})}):null,(0,i.jsx)(o.z6,{onChange:e=>{P({...M,functionDefaultMemoryType:e})},value:M?.functionDefaultMemoryType??(0,k.Y)(D,(0,L.m)(e)).cpu,children:(0,i.jsx)(s.B,{gap:T?2:4,children:en.map(e=>{let{memory:t,cpu:r,label:n,description:f}=N[e],p=r<=1;return(0,i.jsx)(a.E,{show:G,children:(0,i.jsx)(d.Z,{className:(0,h.$)("border p-0 pl-4",{"border-solid border-[var(--ds-blue-700)]":M?.functionDefaultMemoryType===e}),gap:2,padding:4,secondary:M?.functionDefaultMemoryType===e,children:(0,i.jsx)(o.z6.Item,{className:"items-center",fullWidth:!0,value:e,children:(0,i.jsxs)(s.B,{className:"p-4 pl-2",direction:"column",justify:"space-between",children:[(0,i.jsxs)(s.B,{direction:T?"column":"row",justify:"flex-start",children:[(0,i.jsx)(l.E,{weight:500,children:n}),(0,i.jsxs)(s.B,{className:(0,h.$)({"mb-1 mt-1":T}),direction:"row",children:[(0,i.jsx)(u.h,{x:+!T}),(0,i.jsxs)(c.E,{className:"w-fit p-2 normal-case",size:"sm",variant:M?.functionDefaultMemoryType===e?"blue-subtle":"gray-subtle",children:[r," vCPU",p?"":"s"]}),(0,i.jsx)(u.h,{x:T?.25:.5}),(0,i.jsxs)(c.E,{className:"w-fit p-2",size:"sm",variant:M?.functionDefaultMemoryType===e?"blue-subtle":"gray-subtle",children:[t," GB Memory"]})]})]}),(0,i.jsx)(l.E,{color:"gray-900",children:f})]})})},e)},e)})})}),!G&&Q&&q?(0,i.jsx)(f.Note,{className:"mt-4 pl-4",fill:!0,type:"warning",children:(0,i.jsxs)(l.E,{className:"p-1 pl-2",color:"inherit",children:["The current production deployment has custom overrides in"," ",(0,i.jsx)(g.Link,{external:!0,href:"/docs/functions/configuring-functions/memory#setting-custom-function-memory-size",type:"highlight",children:(0,i.jsx)("code",{children:"vercel.json"})}),", which takes priority over this setting."]})}):void 0]}),U]})}},169305:(e,t,r)=>{"use strict";let i;r.d(t,{aj:()=>p,uB:()=>u});var n=r(745252),a=r(69308),s=r(782102),l=r(755464),o=r(315032),d=r(517955),c=r(732512);function u(){var e;let t=(0,a.useRef)({}),r=(0,a.useRef)(!1),{user:i,team:n,isLoading:c,isTeam:u}=(0,o.F)(),{utm:h}=(0,d.zB)();r.current=i?.email?.endsWith("@zeit.pub")??!1;let p=(0,s.r)(),m=(0,l.useParams)(),g=(0,l.useSearchParams)();return t.current={projectId:m?.projectId??g?.get("projectId")??(Array.isArray(e=p.query.project)?e[0]:e),userId:i?.uid,teamId:u?n?.id:null,userRole:u?n?.membership?.role:null,billingPlan:u?n?.billing?.plan:i?.billing?.plan,route:p.pathname,utm:h},{isReady:!c,track:(0,a.useRef)((e,i)=>r.current?Promise.resolve():f(e,{...t.current,...i})).current}}let f=async(e,t)=>{let{projectId:r,deploymentId:a,teamId:s,userRole:l,billingPlan:o,userId:d,route:u,utm:f,...h}=t;await (0,c.PU)(c.KK.VercelActivity,{session_id:(i||(i=sessionStorage.getItem("sid")??void 0)||(i=(0,n.A)(),sessionStorage.setItem("sid",i)),i),project_id:r,deployment_id:a,user_id:d,team_id:s,user_role:l,billing_plan:o,origin:window.origin,path:window.location.pathname,referrer:document.referrer||null,vercel_app:"vercel.com",action:e,user_agent:navigator.userAgent,meta:JSON.stringify(h),session_referrer:p(),route:u,page_title:document.title,utm:JSON.stringify(f??{}),query_params:JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search).entries()))})},h="srid";function p(){let e=sessionStorage.getItem(h);return null===e?(sessionStorage.setItem(h,document.referrer||""),document.referrer):e?((0,d.Ze)(e),e):null}},229603:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ClientFlagContext:()=>l,CreatedClientFlagContext:()=>s,useServerFlag:()=>c,useServerFlags:()=>d});var i=r(44880),n=r(69308),a=r(552833);let s=(0,n.createContext)({flags:{}});function l(e){let t=(0,n.useContext)(s),r=(0,n.useMemo)(()=>({flags:{...t.flags,...e.flags}}),[t.flags,e.flags]);return(0,i.jsxs)(s.Provider,{value:r,children:[e.children,(0,i.jsx)(f,{children:(0,i.jsx)(n.Suspense,{fallback:null,children:(0,i.jsx)(u,{flags:Object.fromEntries(Object.entries(e.flags).map(([e,t])=>[e,Promise.resolve(t)]))})})})]})}function o(e,t){return void 0===e?t:e instanceof Promise?(0,n.use)(e)??t:e??t}function d(){return Object.entries((0,n.useContext)(s).flags).reduce((e,[t,r])=>(e[t]=o(r),e),{})}function c(e,t){return o((0,n.useContext)(s).flags[e],t)}function u(e){let t=Object.fromEntries(Object.entries(e.flags).map(([e,t])=>[e,t instanceof Promise?(0,n.use)(t):t]).filter(([e,t])=>void 0!==t));return(0,i.jsx)(a.P,{values:t})}s.displayName="CreatedClientFlagContext";class f extends n.Component{static getDerivedStateFromError(e){return{error:e}}render(){return null!==this.state.error?null:this.props.children}constructor(...e){super(...e),this.state={error:null}}}},280454:(e,t,r)=>{"use strict";r.d(t,{SearchContextHighlighter:()=>l});var i=r(44880),n=r(69308),a=r(807857),s=r(614446);function l({children:e,as:t="span"}){let{search:r}=(0,n.useContext)(s.D);return(0,i.jsx)(a.W,{as:t,search:r,text:[e].flat().join("")})}},292772:(e,t,r)=>{"use strict";r.d(t,{default:()=>y});var i=r(44880),n=r(745772),a=r(651623),s=r(627118),l=r(885516),o=r(376981),d=r(822144),c=r(775714),u=r(720108),f=r(949102),h=r(511334),p=r(280454),m=r(901226),g=r(69625),x=r(347530);function y({title:e,description:t,note:r,error:y,type:v,disabled:j=!1,disabledForBilling:b,disabledWall:_=!0,onSave:C=null,saveLoading:w=!1,saveDisabled:k=!1,saveDisabledMessage:L,highlightNote:S=!1,beta:N=!1,action:E=null,className:M,children:P,headerNote:H}){let T=(0,g._)(j);return(0,i.jsx)("div",{className:M,id:e.toLowerCase().replaceAll(" ","-"),children:(0,i.jsxs)(l.L,{"data-testid":(0,m.g)("project-settings",e),disabled:T&&void 0===b,type:T||b||"error"!==v?"default":"error",children:[(0,i.jsxs)(a.C,{disabled:b,disabledWall:_,children:[(0,i.jsx)(f.Z,{children:(0,i.jsxs)(c.B,{direction:"row",gap:3,style:{flexWrap:"wrap"},children:[(0,i.jsx)("a",{href:`#${e.toLowerCase().replaceAll(" ","-")}`,style:{color:"inherit",textDecoration:"none"},children:(0,i.jsx)(p.SearchContextHighlighter,{children:e})}),N?(0,i.jsx)(x.A,{muted:b}):null,H]})}),(0,i.jsx)(u.V,{children:t}),P]}),(0,i.jsxs)(o.U,{disabled:!1,highlight:b||S,children:[(0,i.jsx)(o.U.Status,{children:y?(0,i.jsx)(s.y,{children:y instanceof Error?y.message:y}):r||null}),(0,i.jsx)(d.h,{x:.5}),!T&&(C||E)?(0,i.jsxs)(o.U.Actions,{children:[C?(0,i.jsx)(h.Tooltip,{text:L,children:(0,i.jsx)(n.Button,{"data-testid":(0,m.g)("project-settings","save"),disabled:T||k,loading:w,onClick:C,size:"small",children:"Save"})}):null,E]}):null]})]})})}},347530:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var i=r(44880),n=r(497798),a=r(745772),s=r(819422),l=r(559048);let o=function({feedback:e,muted:t,size:r,variant:o,className:d}){return(0,i.jsxs)("div",{className:(0,l.$)("flex items-center gap-[var(--geist-space)]",d),children:[(0,i.jsx)(n.E,{className:t?"text-[var(--geist-background)] bg-[var(--accents-3)] border-0 dark:text-[var(--geist-background)] dark:bg-[var(--accents-6)]":"",size:r,variant:t?"gray-subtle":o||"pink",children:"Beta"}),e?(0,i.jsx)(a.Button,{className:"sm:block max-[600px]:hidden",onClick:s.F9,size:"small",type:"tertiary",typeName:"button",children:"Provide feedback"}):null]})}},363127:(e,t,r)=>{"use strict";r.d(t,{A:()=>a,updateProjectSettingsV9:()=>s});var i=r(918122),n=r(435828);async function a(e,t,r){return(0,i.ff)(`${(0,n.DXT)("v5")}/${encodeURIComponent(e)}${t?"?teamId="+t:""}`,{method:"PATCH",body:JSON.stringify(r),throwOnHTTPError:!0})}async function s(e,t,r){return(0,i.ff)(`${(0,n.DXT)("v9")}/${encodeURIComponent(e)}${t?"?teamId="+t:""}`,{method:"PATCH",body:JSON.stringify(r),throwOnHTTPError:!0})}},376981:(e,t,r)=>{"use strict";r.d(t,{U:()=>u});var i=r(44880),n=r(69308),a=r(559048),s=r(901226),l=r(69625),o=r(947257),d=r.n(o),c=r(25733);function u({disabled:e,children:t,className:r,highlight:n}){let o=(0,l._)(e);return(0,i.jsx)(l.I.Provider,{value:o,children:(0,i.jsxs)("footer",{className:(0,a.$)(d().footer,r,{[String(d().disabled)]:o,[String(d().highlight)]:n,"geist-disabled":o}),"data-geist-fieldset-footer":"","data-testid":(0,s.g)("geist","fieldset","footer","status"),"data-version":"v1",children:[(0,i.jsx)(c.d,{}),t]})})}let f=({children:e})=>(0,i.jsx)("div",{"data-geist-fieldset-footer-action":"",children:e});u.Status=({children:e,disabled:t})=>(0,i.jsx)("div",{className:(0,a.$)(d().status,{[String(d().disabled)]:t}),"data-geist-fieldset-footer-status":"",children:e}),u.Actions=({children:e,className:t})=>(0,i.jsx)("div",{className:(0,a.$)(d().actions,t),"data-geist-fieldset-footer-actions":"",children:n.Children.map(e,(e,t)=>e?(0,i.jsx)(f,{children:e},t):null)})},399834:(e,t,r)=>{"use strict";r.d(t,{U:()=>i});let i=(e,t)=>t?`${t}-${e}`:e},439387:(e,t,r)=>{"use strict";r.d(t,{s:()=>a});var i=r(556763),n=r(399834);function a(e,t){let r=Array.isArray(t),a=r?t.map(e=>(0,i.A)(e)).join("|"):(0,i.A)(t);return e.split(RegExp(`(${a})`,"gi")).map((e,i)=>({id:(0,n.U)(i,e),highlighted:r?t.map(e=>e.toLowerCase()).includes(e.toLowerCase()):e.toLowerCase()===t.toLowerCase(),text:e}))}},457535:e=>{e.exports={popover:"feedback_popover___Cd4V",fadeIn:"feedback_fadeIn__UT4bE",fadeOut:"feedback_fadeOut__5VePj",success:"feedback_success__xTsX9",inlineWrapper:"feedback_inlineWrapper__DQQFm",inlineWrapperUpwards:"feedback_inlineWrapperUpwards__ThPVh",inlineWrapperClosed:"feedback_inlineWrapperClosed__v8oY3",inlineTriggerWrapper:"feedback_inlineTriggerWrapper__o7yUx",successWrapper:"feedback_successWrapper__S_D02",appear:"feedback_appear__sOtNN",formWrapper:"feedback_formWrapper__bL7px",textarea:"feedback_textarea__iiRZ8","markdown-mark":"feedback_markdown-mark__tSBBr","markdown-tip":"feedback_markdown-tip__xldJV",actions:"feedback_actions___tqt_",trigger:"feedback_trigger__0zjFw",emojisWrapper:"feedback_emojisWrapper__iwjKS",emoji:"feedback_emoji__VX_rC"}},473189:e=>{e.exports={card:"card_card__FBT7L",rounded:"card_rounded__cmxqS",secondary:"card_secondary___yu8z",border:"card_border__D6H0T",borderBetweenHorizontal:"card_borderBetweenHorizontal__R8j_2",borderBetweenVertical:"card_borderBetweenVertical__vZlVx",shadow:"card_shadow__6kEaO",hoverable:"card_hoverable__Dy1wN"}},494800:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(44880),n=r(559048),a=r(775714),s=r(473189),l=r.n(s);function o({children:e,direction:t="column",className:r,border:s,borderBetween:o,secondary:d,hoverable:c,shadow:u,rounded:f=!0,...h}){return(0,i.jsx)(a.B,{...h,className:(0,n.$)(l().card,{[l().border||""]:s,[l().borderBetweenHorizontal||""]:o&&"row"===t,[l().borderBetweenVertical||""]:o&&"column"===t,[l().secondary||""]:d,[l().hoverable||""]:c,[l().shadow||""]:u,[l().rounded||""]:f},r),direction:t,children:e})}},517955:(e,t,r)=>{"use strict";r.d(t,{FZ:()=>o,Ze:()=>u,k2:()=>s,zB:()=>c});var i=r(69308);let n=new Set(Object.values(function(e){return e.Source="utm_source",e.Medium="utm_medium",e.Campaign="utm_campaign",e.Content="utm_content",e.Term="utm_term",e}({}))),a={utm_source:"",utm_medium:"",utm_campaign:"",utm_content:"",utm_term:""};function s(e){let t=Object.entries(e).filter(([e])=>"string"==typeof e&&n.has(e)).reduce((e,[t,r])=>(e[t]=r,e),{});return{...a,...t}}function l(){let e=d();try{let t=new URL(e).searchParams;return Object.fromEntries(t.entries())}catch{return{}}}function o(){let e=l(),[t,r]=(0,i.useState)();return(0,i.useEffect)(()=>{if(e.gclid){let t=new Date;t.setDate(t.getDate()+90);let i={value:e.gclid,expiration:t};localStorage?.setItem("gclid",JSON.stringify(i)),r(e.gclid)}else{let e=localStorage?.getItem("gclid");if(e){let t=JSON.parse(e);new Date(t.expiration)>new Date&&r(t.value)}}},[e.gclid]),t}function d(){let[e,t]=(0,i.useState)("");return(0,i.useEffect)(()=>{t("localhost"===window.location.hostname?`https://vercel.com/dev-mode${window.location.pathname}${window.location.search}`:window.location.toString())},[]),e}function c(){let e=function(){let e=l();return(0,i.useMemo)(()=>s(e),[e])}(),t=o(),r=d(),n=function(){let[e,t]=(0,i.useState)("undefined"!=typeof document?document.referrer:"");return(0,i.useEffect)(()=>{t(document.referrer)},[]),e}(),{firstReferrer:a}=u(n);return(0,i.useMemo)(()=>({utm:e,gclid:t,url:r,referrer:n,firstReferrer:a}),[e,t,r,n,a])}let u=e=>{if("undefined"==typeof localStorage)return{firstReferrer:""};let t=JSON.parse(localStorage?.getItem("referrers")||'{"firstReferrer": ""}');return""!==t.firstReferrer&&t.firstReferrer||(t.firstReferrer=e,localStorage?.setItem("referrers",JSON.stringify(t))),{firstReferrer:t.firstReferrer}}},608699:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n,l:()=>i});let i={on:{hobby:{duration:60,maxDuration:60,cpu:"standard_legacy"},pro:{duration:90,maxDuration:800,cpu:"standard"},enterprise:{duration:90,maxDuration:800,cpu:"standard"}},off:{hobby:{duration:10,maxDuration:60,cpu:"standard_legacy"},pro:{duration:15,maxDuration:300,cpu:"standard"},enterprise:{duration:15,maxDuration:900,cpu:"standard"}}},n=(e,t)=>{let r=e??"hobby";return t?i.on[r]:i.off[r]}},614446:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});let i=r(69308).createContext({search:"",setSearch:()=>void 0});i.displayName="SettingsSearchContext"},627118:(e,t,r)=>{"use strict";r.d(t,{y:()=>s});var i=r(44880),n=r(947257),a=r.n(n);function s({children:e}){return(0,i.jsx)("span",{className:a().error,"data-geist-fieldset-error":"","data-version":"v1",children:e})}},651623:(e,t,r)=>{"use strict";r.d(t,{C:()=>d});var i=r(44880),n=r(559048),a=r(69625),s=r(947257),l=r.n(s),o=r(25733);function d({disabled:e,disabledWall:t=!0,children:r,noPadding:s,noBottomPadding:d,className:c}){let u=(0,a._)(e);return(0,i.jsx)(a.I.Provider,{value:u,children:(0,i.jsxs)("div",{className:(0,n.$)(l().content,c,{[String(l().disabled)]:u,"geist-disabled":u,[String(l().full)]:s,[String(l().noBottomPadding)]:d}),"data-geist-fieldset-content":"",children:[t?(0,i.jsx)(o.d,{}):null,r]})})}},653378:(e,t,r)=>{"use strict";r.d(t,{m:()=>i});let i=e=>!!e&&(e.resourceConfig?.fluid??!1)},720108:(e,t,r)=>{"use strict";r.d(t,{V:()=>l});var i=r(44880),n=r(901226),a=r(69625),s=r(716519);function l({children:e,...t}){let r=(0,a._)();return(0,i.jsx)(s.E,{className:r?"disabled":"","data-testid":(0,n.g)("geist","fieldset","subtitle"),lineHeight:24,style:{margin:"var(--geist-gap-half) 0"},...t,children:e})}},732512:(e,t,r)=>{"use strict";r.d(t,{KK:()=>i,PU:()=>a});var i=function(e){return e.TemplateClonedSimple="vercel_templates.v0.template_cloned_simple",e.VercelActivity="vercel_app.v0.vercel_activity",e.ContactSalesFormFill="vercel_contact_sales.v0.contact_sales_form_fill",e}({});let n="/api/stream/internal",a=async(e,t)=>{let r=JSON.stringify({topic:e,record:t});return"sendBeacon"in navigator&&navigator.sendBeacon(n,r)?null:fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:r}).catch(()=>null)}},773536:(e,t,r)=>{"use strict";r.d(t,{s:()=>d});var i=r(44880),n=r(69308),a=r(451518),s=r(852937),l=r(590686);let o="save-and-redeploy";function d(e){let t=(0,a.useToasts)(),{data:r}=(0,s.A)({limit:5,projectId:e?.id||"",target:"production"}),{modal:d,open:c}=(0,l.A)(e);return{open:(0,n.useCallback)(e=>{if(r){let n=r.deployments.map(e=>({id:e.uid,...e}));t.removeToastByKey(o),t.success({key:o,text:(0,i.jsx)("span",{className:"hyphens-auto",children:`${e}${e?" ":""}A new deployment is needed for changes to take effect.`}),action:"Redeploy",onAction:()=>{c(n,{redirect:!1,copy:"You are about to create a new Deployment with the latest configuration from your Project Settings."})}})}},[r,c,t]),modal:d}}},807857:(e,t,r)=>{"use strict";r.d(t,{W:()=>o});var i=r(44880),n=r(69308),a=r(439387),s=r(81178),l=r.n(s);let o=(0,n.memo)(function({className:e,text:t,search:r,as:s="div"}){let o=(0,n.useMemo)(()=>{var e,n;let s=(Array.isArray(r)?r:[r]).filter(e=>e.length>1);if(e=t,n=s,0===e.length||e.length>4096||0===n.length)return t;let o=t.split(/(?<temp1><a[^>]*>.*?<\/a>)/),d=0,c=[];for(let e=0;e<o.length;e++){let r=o[e];if(r.startsWith("<a")){d+=1,c.push(r);continue}let n=(0,a.s)(r,s);if(d+n.length>500)return t;d+=n.length;let u=n.map(t=>t.highlighted?(0,i.jsx)("mark",{className:l().match,children:t.text},`${t.id}-${e}`):t.text);c.push(u)}return c.flat()},[t,r]);return(0,i.jsx)(s,{className:e,children:o})});o.displayName="HighlightText"},819422:(e,t,r)=>{"use strict";r.d(t,{Gb:()=>S,F9:()=>L});var i=r(44880),n=r(184999),a=r(69308),s=r(558144),l=r(756183),o=r(559048),d=r(50338),c=r(77153),u=r(688781);let f=(0,u.G)(`<path fill-rule="evenodd" clip-rule="evenodd" d="M4 9V16H5.5V9H4ZM12 9V16H10.5V9H12Z" fill="var(--ds-blue-700)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 9.57941 13.9367 11.0273 13 12.1536V14.2454C14.8289 12.7793 16 10.5264 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 10.5264 1.17107 12.7793 3 14.2454V12.1536C2.06332 11.0273 1.5 9.57941 1.5 8ZM8 14.5C8.51627 14.5 9.01848 14.4398 9.5 14.3261V15.8596C9.01412 15.9518 8.51269 16 8 16C7.48731 16 6.98588 15.9518 6.5 15.8596V14.3261C6.98152 14.4398 7.48373 14.5 8 14.5ZM3.78568 8.36533C4.15863 7.98474 4.67623 7.75 5.25 7.75C5.82377 7.75 6.34137 7.98474 6.71432 8.36533L7.78568 7.31548C7.14222 6.65884 6.24318 6.25 5.25 6.25C4.25682 6.25 3.35778 6.65884 2.71432 7.31548L3.78568 8.36533ZM10.75 7.75C10.1762 7.75 9.65863 7.98474 9.28568 8.36533L8.21432 7.31548C8.85778 6.65884 9.75682 6.25 10.75 6.25C11.7432 6.25 12.6422 6.65884 13.2857 7.31548L12.2143 8.36533C11.8414 7.98474 11.3238 7.75 10.75 7.75ZM6.25 12H9.75C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12Z" fill="currentColor"/>
  `),h=(0,u.G)(`<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.5 8.97498H3.875V9.59998C3.875 11.4747 5.81046 12.8637 7.99817 12.8637C10.1879 12.8637 12.125 11.4832 12.125 9.59998V8.97498H11.5H4.5ZM7.99817 11.6137C6.59406 11.6137 5.63842 10.9482 5.28118 10.225H10.7202C10.3641 10.9504 9.40797 11.6137 7.99817 11.6137Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15295 4.92093L5.375 3.5L4.59705 4.92093L3 5.21885L4.11625 6.39495L3.90717 8L5.375 7.30593L6.84283 8L6.63375 6.39495L7.75 5.21885L6.15295 4.92093ZM11.403 4.92093L10.625 3.5L9.84705 4.92093L8.25 5.21885L9.36625 6.39495L9.15717 8L10.625 7.30593L12.0928 8L11.8837 6.39495L13 5.21885L11.403 4.92093Z" fill="var(--ds-amber-800)"/>`),p=(0,u.G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.75 7.75C6.30228 7.75 6.75 7.30228 6.75 6.75C6.75 6.19772 6.30228 5.75 5.75 5.75C5.19772 5.75 4.75 6.19772 4.75 6.75C4.75 7.30228 5.19772 7.75 5.75 7.75ZM11.25 6.75C11.25 7.30228 10.8023 7.75 10.25 7.75C9.69771 7.75 9.25 7.30228 9.25 6.75C9.25 6.19772 9.69771 5.75 10.25 5.75C10.8023 5.75 11.25 6.19772 11.25 6.75ZM11.5249 11.2622L11.8727 11.7814L10.8342 12.4771L10.4863 11.9578C9.94904 11.1557 9.0363 10.6298 8.00098 10.6298C6.96759 10.6298 6.05634 11.1537 5.51863 11.9533L5.16986 12.4719L4.13259 11.7744L4.48137 11.2558C5.2414 10.1256 6.53398 9.37982 8.00098 9.37982C9.47073 9.37982 10.7654 10.1284 11.5249 11.2622Z" fill="currentColor"/>');var m=r(716519),g=r(745772),x=r(789186),y=r(320350),v=r(457535),j=r.n(v);let b={open:{height:"auto",borderRadius:12},openFixed:{height:243,width:336,borderRadius:12},openFixedError:{height:271,width:336,borderRadius:12},openFixedUpwards:{height:245,width:336,borderRadius:12,y:-200},openFixedUpwardsError:{height:245,width:336,borderRadius:12,y:-100},closed:{height:48,borderRadius:30}},_=new Map([["\uD83E\uDD29","f929"],["\uD83D\uDE42","f600"],["\uD83D\uDE15","f615"],["\uD83D\uDE2D","f62d"]]),C=[(0,i.jsx)(function(){return(0,i.jsx)(h,{})},{},"love-it"),(0,i.jsx)(function(){return(0,i.jsx)(c.i,{})},{},"its-okay"),(0,i.jsx)(function(){return(0,i.jsx)(p,{})},{},"upset-icon"),(0,i.jsx)(function(){return(0,i.jsx)(f,{})},{},"crying-icon")],w=["Love it!","It’s okay","Not great","Hate it"],k="show-feedback",L=()=>{window.scrollTo({top:0,behavior:"smooth"}),document.dispatchEvent(new Event(k))};function S({dryRun:e,label:t,planName:r,showEmail:c,email:u,type:f,siteType:h="front",upwards:p,copy:v,buttonType:L="secondary"}){let[S,N]=(0,a.useState)(null),[E,M]=(0,a.useState)(!1),[P,H]=(0,a.useState)(null),[T,V]=(0,a.useState)(!1),[B,D]=(0,a.useState)(!1),[U,Z]=(0,a.useState)(!1),[A,R]=(0,a.useState)(!1),[$,F]=(0,a.useState)(""),[O,z]=(0,a.useState)(""),I=(0,a.useRef)(null),W=(0,a.useRef)(null),J=e=>"front"===e?{requestUrl:"/api/feedback",baseUrl:"https://vercel.com"}:"flags-sdk-site"===e?{requestUrl:"/api/feedback",baseUrl:"https://flags-sdk.dev"}:{requestUrl:"https://api.nextjs.org/api/feedback",baseUrl:"https://nextjs.org"},Y=(0,a.useCallback)(i=>{if(i?.preventDefault(),e&&(D(!0),V(!1),z("")),!O)return void H("Please enter your feedback");if(!S)return void H("Please select an emoji");if(c&&!$)return void H("Please enter your email");V(!0);let n=S?new Map([..._].map(([e,t])=>[t,e])).get(S)||"":null;if(!n)return;let a=J(h);fetch(a.requestUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:"localhost"===window.location.hostname?`${a.baseUrl}/dev-mode${window.location.pathname}`:window.location.toString(),note:O,email:u||$,emotion:n,plan:r,label:t,ua:`${h} production + ${navigator.userAgent} (${navigator.language||"unknown language"})`})}).then(()=>{D(!0),z(""),F("")}).catch(e=>{e instanceof Error&&H(e.message)}).finally(()=>{V(!1)})},[h,e,$,u,t,r,S,O,c]);(0,a.useEffect)(()=>{U||N(null)},[U]),(0,a.useEffect)(()=>{let e=()=>{Z(!0)};return document.addEventListener(k,e),()=>document.removeEventListener(k,e)},[Z]),(0,a.useEffect)(()=>{let e=null;return E&&!A&&Z(!1),B&&(e=setTimeout(()=>{document.hidden||A?M(!0):(Z(!1),setTimeout(()=>{z(""),F(""),N(null),D(!1)},150))},4e3)),()=>{null!==e&&(clearTimeout(e),e=null)}},[B,Z,U,A,E]);let K=(0,a.useCallback)(e=>{"Enter"===e.key&&e.metaKey&&Y(),"inline"===f&&"Escape"===e.key&&Z(!1)},[Y,f]);(0,a.useEffect)(()=>{function e(e){"Escape"===e.key&&Z(!1)}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]);let q=(0,a.useMemo)(()=>p?P?"openFixedUpwardsError":"openFixedUpwards":P?"openFixedError":"openFixed",[P,p]);return"inline"===f?(0,i.jsx)(x.i,{active:U,additionalConditionals:e=>{let t=e;for(;t;){if(t.hasAttribute("data-feedback-inline"))return!0;t=t.parentElement}return!1},onClick:()=>Z(!1),render:()=>(0,i.jsx)("div",{className:(0,o.$)(j().inlineWrapper,{[String(j().inlineWrapperUpwards)]:p,[String(j().inlineWrapperClosed)]:!U}),"data-feedback-inline":"",children:(0,i.jsxs)(s.P.div,{animate:U?q:"closed",className:j().inlineTriggerWrapper,initial:"closed",transition:{duration:.15,ease:"easeOut"},variants:b,children:[(0,i.jsxs)("div",{className:j().trigger,children:[(0,i.jsx)(m.E,{color:"gray-900",size:14,children:v||"Was this helpful?"}),(0,i.jsx)("span",{className:j().emojisWrapper,children:Array.from(_.values()).map((e,t)=>(0,i.jsx)("button",{"aria-checked":S===e,"aria-label":`Select ${w[t]||""} emoji`,className:j().emoji,onClick:()=>{if(Z(!0),U||setTimeout(()=>{W.current?.focus()},150),S===e){N(null),U&&Z(!1);return}N(e)},role:"radio",type:"button",children:C[t]},e))})]}),(0,i.jsx)(l.N,{children:B?(0,i.jsxs)("div",{className:j().successWrapper,style:{height:"auto",paddingTop:48},children:[(0,i.jsx)(d.a,{className:"checkmark",color:"green-900"}),(0,i.jsx)(m.E,{size:14,children:"Your feedback has been received!"}),(0,i.jsx)(m.E,{size:14,children:"Thank you for your help."})]},"success"):(0,i.jsx)(s.P.div,{exit:{opacity:0,y:-4},onKeyDown:e=>K(e),transition:{duration:.2},children:(0,i.jsxs)("form",{onSubmit:Y,children:[(0,i.jsxs)("div",{className:j().formWrapper,children:[c?(0,i.jsx)(y.Input,{"aria-labelledby":"E-mail",onChange:e=>F(e.target.value),placeholder:"Email Address",ref:I,typeName:"email",value:$}):null,(0,i.jsx)("textarea",{className:j().textarea,id:"feedback-textarea",onChange:e=>z(e.target.value),onFocus:()=>Z(!0),placeholder:"Your feedback...",ref:W,value:O}),(0,i.jsx)(l.N,{children:P?(0,i.jsx)(s.P.div,{animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},initial:{height:0,opacity:0},transition:{duration:.2},children:(0,i.jsx)(m.E,{color:"red-900",style:{display:"block"},children:P})}):null}),(0,i.jsxs)(m.E,{as:"div",className:j()["markdown-tip"],color:"gray-900",size:12,children:[(0,i.jsx)("svg",{fill:"none",height:"14",viewBox:"0 0 22 14",width:"22",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"M19.5 1.25H2.5C1.80964 1.25 1.25 1.80964 1.25 2.5V11.5C1.25 12.1904 1.80964 12.75 2.5 12.75H19.5C20.1904 12.75 20.75 12.1904 20.75 11.5V2.5C20.75 1.80964 20.1904 1.25 19.5 1.25ZM2.5 0C1.11929 0 0 1.11929 0 2.5V11.5C0 12.8807 1.11929 14 2.5 14H19.5C20.8807 14 22 12.8807 22 11.5V2.5C22 1.11929 20.8807 0 19.5 0H2.5ZM3 3.5H4H4.25H4.6899L4.98715 3.82428L7 6.02011L9.01285 3.82428L9.3101 3.5H9.75H10H11V4.5V10.5H9V6.79807L7.73715 8.17572L7 8.97989L6.26285 8.17572L5 6.79807V10.5H3V4.5V3.5ZM15 7V3.5H17V7H19.5L17 9.5L16 10.5L15 9.5L12.5 7H15Z",fill:"var(--ds-gray-700)",fillRule:"evenodd"})}),"supported."]})]}),(0,i.jsx)("div",{className:j().actions,style:{justifyContent:"flex-end"},children:(0,i.jsx)(g.Button,{loading:T,size:"small",typeName:"submit",children:"Send"})})]})},"form")})]})})}):(0,i.jsxs)(n.bL,{onOpenChange:e=>{e&&(D(!1),H(null),M(!1),N(null),W.current?.focus(),I.current?.focus()),Z(e)},open:U,children:[(0,i.jsx)(n.l9,{asChild:!0,children:(0,i.jsx)(g.Button,{size:"small",style:{width:"var(--navbar-secondary-button-width)"},type:L,children:"Feedback"})}),(0,i.jsx)(n.UC,{className:(0,o.$)(j().popover,{[j().success||""]:B}),onKeyDown:e=>K(e),onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),onMouseMove:()=>R(!0),sideOffset:8,children:(0,i.jsx)(l.N,{children:B?(0,i.jsxs)("div",{className:j().successWrapper,children:[(0,i.jsx)(d.a,{className:"checkmark",color:"green-900",size:"2rem"}),(0,i.jsx)(m.E,{size:14,children:"Your feedback has been received!"}),(0,i.jsx)(m.E,{size:14,children:"Thank you for your help."})]},"success"):(0,i.jsx)(s.P.div,{exit:{opacity:0,y:-4},transition:{duration:.2},children:(0,i.jsxs)("form",{onSubmit:Y,children:[(0,i.jsxs)("div",{className:j().formWrapper,children:[c?(0,i.jsx)(y.Input,{"aria-labelledby":"E-mail",onChange:e=>F(e.target.value),placeholder:"Email Address",ref:I,typeName:"email",value:$}):null,(0,i.jsx)("textarea",{className:j().textarea,id:"feedback-textarea",onChange:e=>z(e.target.value),onFocus:()=>Z(!0),placeholder:"Your feedback...",ref:W,value:O}),(0,i.jsx)(l.N,{children:P?(0,i.jsx)(s.P.div,{animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},initial:{height:0,opacity:0},transition:{duration:.2},children:(0,i.jsx)(m.E,{color:"red-900",style:{paddingTop:4,display:"block"},children:P})}):null}),(0,i.jsxs)(m.E,{as:"div",className:j()["markdown-tip"],color:"gray-900",size:12,children:[(0,i.jsx)("svg",{fill:"none",height:"14",viewBox:"0 0 22 14",width:"22",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"M19.5 1.25H2.5C1.80964 1.25 1.25 1.80964 1.25 2.5V11.5C1.25 12.1904 1.80964 12.75 2.5 12.75H19.5C20.1904 12.75 20.75 12.1904 20.75 11.5V2.5C20.75 1.80964 20.1904 1.25 19.5 1.25ZM2.5 0C1.11929 0 0 1.11929 0 2.5V11.5C0 12.8807 1.11929 14 2.5 14H19.5C20.8807 14 22 12.8807 22 11.5V2.5C22 1.11929 20.8807 0 19.5 0H2.5ZM3 3.5H4H4.25H4.6899L4.98715 3.82428L7 6.02011L9.01285 3.82428L9.3101 3.5H9.75H10H11V4.5V10.5H9V6.79807L7.73715 8.17572L7 8.97989L6.26285 8.17572L5 6.79807V10.5H3V4.5V3.5ZM15 7V3.5H17V7H19.5L17 9.5L16 10.5L15 9.5L12.5 7H15Z",fill:"var(--ds-gray-700)",fillRule:"evenodd"})}),"supported."]})]}),(0,i.jsxs)("div",{className:j().actions,children:[(0,i.jsx)("span",{className:j().emojisWrapper,children:Array.from(_.values()).map((e,t)=>(0,i.jsx)("button",{"aria-checked":S===e,"aria-label":`Select ${w[t]||""} emoji`,className:j().emoji,onClick:()=>{if(S===e)return void N(null);N(e)},role:"radio",type:"button",children:C[t]},e))}),(0,i.jsx)(g.Button,{loading:T,size:"small",typeName:"submit",children:"Send"})]})]})},"form")})})]})}},885516:(e,t,r)=>{"use strict";r.d(t,{L:()=>o});var i=r(44880),n=r(559048),a=r(69625),s=r(947257),l=r.n(s);function o({className:e,disabled:t,children:r,hasShadow:s,borderlessTabs:o,type:d,...c}){return(0,i.jsx)("div",{className:(0,n.$)(l().fieldset,e,{[String(l().borderless)]:o,[String(l().shadow)]:s,[String(l().errorBorder)]:"error"===d,[String(l().warningBorder)]:"warning"===d}),...c,"data-geist-fieldset":"","data-version":"v1",children:(0,i.jsx)(a.I.Provider,{value:t??!1,children:r})})}},947257:e=>{e.exports={fieldset:"fieldset_fieldset__IRR_5",shadow:"fieldset_shadow__hdJOh",borderless:"fieldset_borderless__0hIw0",tabsRow:"fieldset_tabsRow__AiN65",content:"fieldset_content__QaWYZ",errorBorder:"fieldset_errorBorder__abpF2",footer:"fieldset_footer__4D6u_",warningBorder:"fieldset_warningBorder__o4aY1",full:"fieldset_full__c7aKx",noBottomPadding:"fieldset_noBottomPadding___PLXj",disabled:"fieldset_disabled__an0lm",highlight:"fieldset_highlight__aj2tk",status:"fieldset_status__PCjpF",actions:"fieldset_actions__01rBJ",action:"fieldset_action__unNYQ",title:"fieldset_title__L0G5l",error:"fieldset_error__yeck5",warning:"fieldset_warning___Zrbf"}},949102:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var i=r(44880),n=r(559048),a=r(23624),s=r.n(a),l=r(716519),o=r(947257),d=r.n(o);function c({id:e,children:t}){return(0,i.jsx)(l.E,{as:"h4",className:(0,n.$)(d().title),id:e?s()(e):void 0,lineHeight:32,size:20,children:t})}}}]);
//# debugId=0cd0e40f-041a-544b-a035-b471cea3140a
