
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7efe658c-9648-5cf3-ba29-64ed1035b269")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35998],{18407:(e,t,r)=>{"use strict";r.d(t,{K:()=>c,N:()=>u});var n=r(745252),i=r(469808),s=r(425110);let a=Symbol.for("@vercel/request-context");async function l(e){let t=function(){let e=globalThis[a];return e?.get()}(),r=("function"==typeof e?e():e).catch(e=>{console.error("Error in waitUntil:",e),(0,i.Cp)(e,{attributes:{waitUntil:!0}})});t?t.waitUntil(r):await r}var o=function(e){return e.MonitoringQueryDuplicated="vercel_api.v0.monitoring_query_duplicated",e.MonitoringQueryResultsExported="vercel_api.v0.monitoring_query_results_exported",e.NewFlowConverted="vercel_app.v0.new_flow_converted",e.SpacesPageView="vercel_spaces.v0.page_views",e.LogDrainToggle="vercel_app.v0.log_drain_toggle",e.LogFilterQuery="vercel_app.v0.log_filter_query",e.LogPageVisited="vercel_app.v0.log_page_visited",e.LogPresetRun="vercel_app.v0.log_preset_run",e.LogQueryResultsExported="vercel_app.v0.log_query_results_exported",e.MonitoringQueryRun="vercel_api.v0.monitoring_query_run",e.AnalyticsDataFetched="vercel_api.v0.analytics_data_fetched",e.UpgradeModalOpened="vercel_app.v0.upgrade_modal_opened",e.UpgradeModalAbandoned="vercel_app.v0.upgrade_modal_abandoned",e.UpgradeModalConverted="vercel_app.v0.upgrade_modal_converted",e}(o||{});let c={...s.KK,...o},d={"vercel_api.v0.monitoring_query_duplicated":100149,"vercel_api.v0.monitoring_query_results_exported":100145,"vercel_app.v0.new_flow_converted":100425,"vercel_spaces.v0.page_views":100286,"vercel_app.v0.log_page_visited":100143,"vercel_app.v0.log_filter_query":100151,"vercel_app.v0.log_preset_run":100156,"vercel_app.v0.log_query_results_exported":100182,"vercel_api.v0.analytics_data_fetched":100037,"vercel_api.v0.monitoring_query_run":100319,"vercel_app.v0.log_drain_toggle":100331,"vercel_app.v0.upgrade_modal_opened":100378,"vercel_app.v0.upgrade_modal_abandoned":100376,"vercel_app.v0.upgrade_modal_converted":100377,...s.L9};function u(e,t,r){t.id??=(0,n.A)(),t.event_time??=Date.now(),l((async()=>{try{let n=JSON.stringify({schema_id:d[e],topic:e,record:t}),i=await fetch("https://data.streaming.vercel.sh/v1/produce",{method:"POST",headers:{"Client-Id":r,"Content-Type":"application/json"},body:n});if(!i.ok)throw Error(`Unexpected HTTP response from reporting ${e} event to Snowflake: ${i.status}`)}catch(t){let e=Error("Unexpected error tracking snowflake event");e.cause=t,console.error(e),(0,i.Cp)(e)}})())}},44606:(e,t,r)=>{"use strict";r.d(t,{A:()=>o,j:()=>l});var n=r(169305),i=r(806792),s=r(710501),a=r(48002);let l=(e,t)=>{let r=e.replace(/https?:\/\//,"");return`https://vercel.com/api/toolbar/link/${r}?via=${t.via}${t.isProduction?"&p=1":""}${t.intent?`&i=${t.intent}`:""}${t.passThrough?"&passThrough=1":""}${t.page?`&page=${t.page}`:""}`};function o(e){let{user:t}=(0,s.Jd)(),r=!t||t.limited,o=(0,a.J)(e.deployment),c=e.deployment?.target==="production",d=c&&r,{track:u}=(0,n.uB)();if(!o||c)return{};let p=t=>{if(!("click"===t.type||"auxclick"===t.type||"contextmenu"===t.type||"key"in t&&"Enter"===t.key))return;let r=t.target;if(!(r instanceof HTMLElement))return;let n=r.closest("a"),s=n?.getAttribute("href");if(!n||!s||!s.startsWith("http")||s.startsWith("https://vercel.live/link/")||s.startsWith("https://vercel.com/api/toolbar/link/")){(s?.startsWith("https://vercel.live/link/")||s?.startsWith("https://vercel.com/api/toolbar/link/"))&&console.error(`bad wrap from: ${window.location.href} to: ${s} via: ${e.via}`);return}if("contextmenu"===t.type)return void u(i.p.ToolbarWrappedUrlContextMenuOpened,{via:e.via});let a=new URL(s),o=a.pathname,p=l(a.hostname,{via:e.via,isProduction:c,passThrough:d,page:o}),m=document.createElement("a");Array.from(n.attributes).forEach(e=>{m.setAttribute(e.name,e.value)}),m.href=p,"key"in t?m.dispatchEvent(new window.KeyboardEvent("keydown",{bubbles:t.bubbles,cancelable:t.cancelable,key:t.key,code:t.code,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey})):(m.dispatchEvent(new window.MouseEvent("click",{bubbles:t.bubbles,cancelable:t.cancelable,detail:t.detail,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey,button:t.button,buttons:t.buttons})),t.preventDefault())};return{onClick:p,onKeyDown:p,onAuxClick:p,onContextMenu:p}}},48002:(e,t,r)=>{"use strict";r.d(t,{J:()=>p,P:()=>d});var n=r(69308),i=r(315032),s=r(878734),a=r(944591),l=r(338070),o=r(622507),c=r(621365);function d(e){var t,r;let{account:c,team:d,isLoading:u}=(0,i.F)(),p=c?.enablePreviewFeedback??"default",m=p.includes("-force")||!1,h=function(e){switch(e){case"on":case"default":default:return!0;case"off":return!1}}(p.replace("-force","")),v=(0,s.S7)(),{data:g,isLoading:y}=(0,a.By)(v,{apiVersion:"v13"}),_=g?g.enablePreviewFeedback??!0:h,f=m?h:_,w=e?.branch,C=e?.target,k=!m&&e?g?.name:void 0,{data:{envs:b=[]}={},mutate:j,isLoading:E}=(0,l.A)(k),x=w?b.find(e=>"VERCEL_PREVIEW_FEEDBACK_ENABLED"===e.key&&e.gitBranch===w):void 0,I=C?b.find(e=>"VERCEL_PREVIEW_FEEDBACK_ENABLED"===e.key&&(Array.isArray(e.target)?e.target.includes(C):e.target===C)&&!e.gitBranch):void 0,S=x??I,{decryptEnvVar:A}=(0,o.H)(k?(0,l.k)(k,d?.id):"",j,{projectName:k,teamId:d?.id});(0,n.useEffect)(()=>{S?.decrypted===!1&&A(S)},[S,A]);let D=S?.decrypted===!0?(t=S.value,r=f,("1"===t||"true"===t||void 0)??("0"!==t&&"false"!==t&&void 0)??r):f;return u||!g&&y||E?{value:null,isLoading:!0}:{value:D,isLoading:!1}}let u=new Date("2024-05-24").getTime();function p(e){var t;let r=e&&"previewCommentsEnabled"in e,{data:n}=(0,c.A)(r?void 0:e?.id);return t=r?e:n,!!t?.previewCommentsEnabled&&(null===t.target||"production"===t.target&&!!(t.createdAt>u))}},68572:(e,t,r)=>{"use strict";r.d(t,{r:()=>n});let n=(0,r(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M1.93935 10.5L2.46968 9.96966L7.2929 5.14644C7.68342 4.75592 8.31659 4.75592 8.70711 5.14644L13.5303 9.96966L14.0607 10.5L13 11.5607L12.4697 11.0303L8 6.56065L3.53034 11.0303L3.00001 11.5607L1.93935 10.5Z" fill="currentColor"/>')},86735:(e,t,r)=>{"use strict";function n(e,t){return t?`${e}${t.startsWith("/")?t:`/${t}`}`:e}r.d(t,{d:()=>n})},88203:(e,t,r)=>{"use strict";r.d(t,{_:()=>l,y:()=>a});var n=r(260506),i=r(116989),s=r.n(i);let a={source:"unknown",trialBehavior:"disallow-trial",mode:"smart",forceImmediateUpgrade:!1,forceExpandedReceipt:!1,skipTransferModalOnTeamCreate:!1,skipRedirect:!1,onConversionStart:s(),onConversionSuccess:s(),onConversionError:s(),onAbandon:s(),disabledSteps:[]},l=(0,n.Ay)(()=>a)},254807:(e,t,r)=>{"use strict";r.d(t,{Ds:()=>a,YS:()=>l,mP:()=>o});var n=r(780012),i=r(918122),s=r(435828);function a(e){return l(e.id)}function l(e){return e.startsWith("env")}function o({envVars:e,teamId:t,projectId:r}){return a(e[0])?function({envVars:e,teamId:t}){return(0,i.ff)(`${s.PIy}${(0,n.l)({teamId:t})}`,{body:JSON.stringify({ids:e.map(e=>e.id)}),method:"DELETE",throwOnHTTPError:!0})}({envVars:e,teamId:t}):function({envVars:e,projectId:t,teamId:r}){return Promise.all(e.map(e=>(0,i.ff)(`${(0,s.DXT)("v7")}/${t??""}/env/${e.id}${(0,n.l)({teamId:r})}`,{method:"DELETE",throwOnHTTPError:!0})))}({envVars:e,teamId:t,projectId:r})}},268581:(e,t,r)=>{"use strict";r.d(t,{h:()=>l,u:()=>o});var n=r(7836),i=r(780012),s=r(232465),a=r(918122);function l(){let{team:e,isReady:t}=(0,s.dA)(),r=t?`/api/feature-flags${e?(0,i.l)({teamSlug:e.slug}):""}`:null,{data:l,isLoading:o,error:c}=(0,n.Ay)(r,e=>(0,a.ff)(e));return{data:l,error:c,isLoading:o}}function o(e){let{data:t,error:r,isLoading:n}=l();return{data:t?.[e],error:r,isLoading:n}}},338070:(e,t,r)=>{"use strict";r.d(t,{A:()=>d,k:()=>u});var n=r(7836),i=r(780012),s=r(918122),a=r(435828),l=r(232465),o=r(394833),c=r(43295);function d(e,t,r){let{isReady:i,team:a}=(0,l.dA)(r),{can:d,isLoading:p}=(0,o.Ay)(),m=d(c.r.Read,c.F.ProjectEnvVars),h=e&&i&&!p&&m;return(0,n.Ay)(()=>h?u(e,a?.id):"",e=>(0,s.ff)(e,{throwOnHTTPError:!0}),t)}function u(e,t){return`${(0,a.DXT)("v9")}/${encodeURIComponent(e)}/env${(0,i.l)({teamId:t})}`}},382144:(e,t,r)=>{"use strict";r.d(t,{FW:()=>o,X7:()=>c,yK:()=>l,Dh:()=>d});var n=r(260506),i=r(732618),s=r(640168),a=r(88203);let l=(0,n.Ay)((e,t)=>({isOpen:!1,open:r=>{if(t().isOpen)return void!1;i.zS.addScope("upgrade-modal"),(0,s.hY)({source:r.source,desiredTrialBehavior:r.trialBehavior??a.y.trialBehavior,mode:r.mode??a.y.mode,teamHint:r.teamHint});let n=Object.fromEntries([...Object.keys(a.y),...Object.keys(r)].map(e=>[e,void 0===r[e]?a.y[e]:r[e]]));a._.setState(n,!0),e({isOpen:!0})}})),o=(0,n.Ay)(()=>()=>{i.zS.removeScope("upgrade-modal"),l.setState({isOpen:!1})}),c=()=>l(e=>e.open),d=()=>l(e=>e.isOpen)},499587:(e,t,r)=>{"use strict";r.d(t,{m:()=>$,n:()=>M});var n=r(44880),i=r(69308),s=r(559048),a=r(755464),l=r(511334),o=r(745772),c=r(775714),d=r(214269),u=r(732618),p=r(907448),m=r(315032),h=r(807647),v=r(43295),g=r(394833),y=r(372487),_=r(268581),f=r(749305),w=r(86735),C=r(164198),k=r(355875);let b=new Map;window.addEventListener("storage",e=>{e.key&&(null===e.newValue?b.delete(e.key):b.set(e.key,e.newValue))});class j{constructor(e,t){this.key=e,this.defaultValue=t,this.init()}init(){if(!b.has(this.key))try{b.set(this.key,window.localStorage?.getItem(this.key))}catch(e){}}reset(){this.set(this.defaultValue)}get(){let e=b.get(this.key);if(!e)return this.defaultValue;try{return JSON.parse(e)}catch(e){return this.defaultValue}}set(e){try{let t=JSON.stringify(e);window.localStorage?.setItem(this.key,t),b.set(this.key,t)}catch(e){}}remove(){try{window.localStorage?.removeItem(this.key),b.delete(this.key)}catch(e){}}}var E=r(382144),x=r(44606),I=r(732633),S=r(455480),A=r(822144),D=r(647018),B=r(987437),O=r.n(B);let R=({title:e,message:t,link:r,action:i="Learn More",onDismiss:s})=>(0,n.jsxs)(D.default,{style:{padding:"var(--geist-gap)",width:"100%",height:"100%",position:"absolute"},children:[(0,n.jsx)(h.A,{Component:"span",h5:!0,children:e}),(0,n.jsx)(A.h,{y:1/3}),(0,n.jsx)(D.default,{className:O()["error-message"],children:(0,n.jsx)(S.Scroller,{children:(0,n.jsx)(h.A,{Component:"p",noMargin:!0,small:!0,type:"secondary",children:t})})}),(0,n.jsx)(A.h,{y:2/3}),(0,n.jsxs)(D.default,{row:!0,style:{justifyContent:"center",alignItems:"flex-end"},children:[(0,n.jsx)(o.Button,{onClick:s,size:"small",style:{flex:"1"},type:"secondary",children:"Dismiss"}),r?(0,n.jsx)(A.h,{x:.5}):null,r?(0,n.jsx)(d.ButtonLink,{href:r,size:"small",style:{flex:"1"},children:i}):null]})]}),L=["https://vercel.com/","https://zeit.ink/","https://vercel.link/","https://err.sh/","https://github.com/zeit/","https://github.com/vercel/"],P=({status:e,link:t,buttonText:r})=>!function(e){return"string"==typeof e&&L.some(t=>e.startsWith(t))}(t)?"QUEUED"===e&&t?(0,n.jsx)(d.ButtonLink,{href:t,size:"small",children:r||"Add Concurrent Builds"}):(0,n.jsx)(o.Button,{passthroughOnClick:e=>{e.preventDefault();let t=document.querySelector("[data-status=error]");t&&(t?.dataset.state!=="open"&&t.querySelector("button")?.click(),t.scrollIntoView({behavior:"smooth"}))},type:"secondary",children:"View Logs"}):(0,n.jsx)(d.ButtonLink,{href:t,size:"small",type:"secondary",children:"Learn More"}),T=({title:e,link:t,message:r,buttonText:i,status:s,startBuildNowButton:a})=>(0,n.jsxs)(D.default,{style:{padding:"var(--geist-gap)",width:"100%",height:"100%",position:"absolute"},children:[(0,n.jsx)(h.A,{Component:"span",h5:!0,children:e}),(0,n.jsx)(A.h,{y:1/3}),(0,n.jsx)(D.default,{className:O()["error-message"],children:(0,n.jsx)(S.Scroller,{children:(0,n.jsx)(h.A,{Component:"p",noMargin:!0,small:!0,type:"secondary",children:r||"Your deployment has failed to build successfully. Please check out the logs for more details."})})}),t||a?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.B,{direction:"column",gap:2,children:[t?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(P,{buttonText:i,link:t,status:s})}):(0,n.jsx)(A.h,{y:1/6}),a?(0,n.jsx)(n.Fragment,{children:a}):null]})}):null]});var U=r(540790);let N=new Map([["enterprise-non-unbundled","Contact sales to enable On-Demand Concurrent Builds"],["pro-non-active","Upgrade to Pro to enable On-Demand Concurrent Builds"],["no-permission","Only project admins and team owners can trigger builds on-demand"]]);function M({deploy:e,showError:t,isInConcurrentBuildsQueue:r,isInSystemBuildsQueue:s,compact:a,ctaOverride:o,projectName:u}){let{status:p,errorMessage:f,errorLink:w=""}=e,{data:C}=(0,_.u)("enable-team-deployments-page"),{user:k,team:b}=(0,m.F)(),j=(0,E.X7)(),x=e.target?v.F.Deployment:v.F.DeploymentPreview,{can:S}=(0,g.Ay)(),A=S(v.r.Update,x),[D,B]=(0,i.useState)(null),R="string"==typeof e.id?e.id:void 0,{enabled:L,disabledReason:P}=(0,y.a)(b,A),U=L||P&&N.has(P),M=P?N.get(P):void 0,[$,F]=(0,i.useState)(L),Q=U?(0,n.jsx)(V,{enabled:$,onClick:()=>B(R??null),reasonWhyStartBuildingNowIsDisabled:M}):null,K=new URLSearchParams({content:"I'd like to add extra concurrent builds to my contract."});if(!b)return(0,n.jsx)(h.A,{className:O().statusText,small:!0,type:"secondary",children:"Loading…"});if(k?.email&&K.set("email",k.email),"ERROR"===p)return t?(0,n.jsx)(T,{link:w,message:f||"Your deployment has failed to build successfully. Please check out the logs for more details.",status:p,title:"Build Failed"}):(0,n.jsx)(h.A,{className:O().statusText,small:!0,type:"error",children:"Deployment Failed"});if("FROZEN"===p||"FAILED"===p)return(0,n.jsx)(h.A,{className:O().statusText,small:!0,type:"secondary",children:"No Screenshot Available"});if("NO_PRODUCTION"===p)return(0,n.jsx)(l.Tooltip,{className:O().statusText,delay:!1,text:"To deploy to production, push to the Repository Default branch.",children:(0,n.jsx)(h.A,{small:!0,type:"secondary",children:"No Production Deployment"})});if("CANCELED"===p)return t&&f?(0,n.jsx)(T,{link:w,message:f||"Deployment canceled.",status:p,title:"Build Canceled"}):(0,n.jsx)(h.A,{className:O().statusText,small:!0,type:"secondary",children:"Deployment Canceled"});if("QUEUED"===p&&s)return(0,n.jsx)(h.A,{className:O().statusText,small:!0,type:"secondary",children:"Initializing..."});if("QUEUED"===p||o){let e="Deployments",t=C?(0,n.jsx)(d.Link,{href:`/${b.slug}/~/deployments?status=building%2Cqueued`,underline:!0,children:e}):e;return"pro-concurrent-builds"===o||b.billing?.plan==="pro"&&r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T,{message:(0,n.jsxs)(n.Fragment,{children:["The build will start once your other ",t," have finished. Add"," ",(0,n.jsx)(d.Link,{as:`/${b.slug}/~/settings/billing#concurrent-builds`,href:"/[teamSlug]/~/settings/billing#concurrent-builds",target:"_blank",underline:!0,children:"concurrent build slots"})," ","or use"," ",(0,n.jsx)(d.Link,{as:`/${b.slug}/${encodeURIComponent(u??"")}/settings/build-and-deployment`,href:"/[teamSlug]/[project]/settings/build-and-deployment",target:"_blank",underline:!0,children:"On-Demand Concurrent Builds"})," ","to avoid the queue."]}),startBuildNowButton:Q,status:"QUEUED",title:"Deployment Queued"}),(0,n.jsx)(I.Y,{active:!!D,deploymentId:D,onClose:()=>{B(null)},onSuccess:()=>{F(!1)},projectName:u??null,teamId:b.slug})]}):"enterprise-concurrent-builds"===o||b.billing?.plan==="enterprise"&&r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T,{message:(0,n.jsxs)(c.B,{direction:"column",gap:1,children:[(0,n.jsxs)("div",{children:["The build will start once your other ",t," have finished."]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Link,{href:`/contact/sales?${K.toString()}`,underline:!0,children:"Contact Sales"})," ","to add concurrent build slots or use"," ",(0,n.jsx)(d.Link,{as:`/${b.slug}/${encodeURIComponent(u??"")}/settings/build-and-deployment`,href:"/[teamSlug]/[project]/settings/build-and-deployment",target:"_blank",underline:!0,children:"On-Demand Concurrent Builds"})," ","to avoid the queue."]})]}),startBuildNowButton:Q,status:"QUEUED",title:"Deployment Queued"}),(0,n.jsx)(I.Y,{active:!!D,deploymentId:D,onClose:()=>{B(null)},onSuccess:()=>{F(!1)},projectName:u??null,teamId:b.slug})]}):"hobby-concurrent-builds"===o||b.billing?.plan==="hobby"&&r?(0,n.jsx)(T,{message:(0,n.jsxs)(n.Fragment,{children:["The build will start once your other ",t," have finished."," ",(0,n.jsx)(d.Link,{href:"#",onClick:e=>{e.preventDefault(),j({source:"concurrent-builds-queue"})},underline:!0,children:"Upgrade to Pro"})," ","to purchase more Concurrent Builds and build in parallel"]}),status:"QUEUED",title:"Another build is in progress"}):a?(0,n.jsx)(h.A,{className:O().statusText,small:!0,type:"secondary",children:"Deployment Queued"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T,{message:(0,n.jsxs)(n.Fragment,{children:["The build will start once other"," ",u?(0,n.jsx)(d.Link,{href:`/${b.slug}/${u}/deployments?status=building%2Cqueued`,underline:!0,children:e}):e," ","for this branch have finished."," ",(0,n.jsx)(d.Link,{href:"/docs/builds/build-queues#git-branch-queue",underline:!0,children:"Learn more."})]}),startBuildNowButton:Q,status:"QUEUED",title:"Deployment Queued"}),(0,n.jsx)(I.Y,{active:!!D,deploymentId:D,onClose:()=>{B(null)},onSuccess:()=>{F(!1)},projectName:u??null,teamId:b.slug})]})}return(0,n.jsx)(h.A,{className:O().statusText,small:!0,type:"secondary",children:"Building..."})}function $({deployment:e,ignoreAliasWarning:t=!0,placeholder:r,toolbarVia:l,customHref:o,compact:c,...m}){var h;let{showError:v=!1,link:g=!0,empty:y=!1,noHighlight:_,noBorder:C,noBorderRadius:b,useDeploymentUrl:E=!1,onClick:I}=m,S=null!=(h=e)&&"project"in h?e.project?.name:void 0,A=(0,a.useSearchParams)(),{domain:D}=(0,k.zD)(S),B=D||m.projectDomain||null,[L,P]=function(e){let t=(0,i.useMemo)(()=>e?new j(`show-deployment-warning:${e.uid||e.id}`,!0):null,[e]),[r,n]=(0,i.useState)(()=>{let e=t?.get();return"boolean"!=typeof e||e});return[r,e=>{t?.set(e),n(e)}]}(e),{onClick:N,...$}=(0,x.A)({via:l??"project-screenshot",deployment:g?e:void 0}),V=(0,i.useMemo)(()=>(function(e){if(null!==e){if(null!==e.get("overrideHobbyConcurrentBuildsCta"))return"hobby-concurrent-builds";if(null!==e.get("overrideProConcurrentBuildsCta"))return"pro-concurrent-builds";if(null!==e.get("overrideEnterpriseConcurrentBuildsCta"))return"enterprise-concurrent-builds"}})(A),[A]),Q=(0,i.useMemo)(()=>{if(!e)return y?{status:"NO_PRODUCTION"}:null;let t=E?e.url:F(e,B);return{id:e.uid||e.id,url:t,target:e.target,status:e.state||e.status||e.readyState,errorMessage:e.readyStateReasonExternal||e.errorMessage,errorLink:e.errorLink,aliasWarning:e.aliasWarning}},[E,e,y,B]),K=!t&&L&&Q?.status==="READY"&&Q?.aliasWarning?.code==="deprecated_now_sh",q=Q&&"READY"!==Q.status,H=Q?.status==="ERROR"||e?.aliasError,W=(0,i.useCallback)(()=>(0,n.jsx)(M,{deploy:{...Q,status:"FAILED"},isInConcurrentBuildsQueue:e?.isInConcurrentBuildsQueue,isInSystemBuildsQueue:e?.isInSystemBuildsQueue,projectName:S,showError:v}),[Q,v,S,e?.isInConcurrentBuildsQueue,e?.isInSystemBuildsQueue]),G=(0,i.useMemo)(()=>V?(0,n.jsx)(M,{ctaOverride:V,deploy:Q??{},isInConcurrentBuildsQueue:e?.isInConcurrentBuildsQueue,isInSystemBuildsQueue:e?.isInSystemBuildsQueue,projectName:S,showError:v}):e?.aliasError?(0,n.jsx)(T,{message:e.aliasError.message,status:"ERROR",title:"Domain Error"}):K?(0,n.jsx)(R,{link:Q.aliasWarning.link,message:Q.aliasWarning.message,onDismiss:()=>P(!1),title:"Warning"}):q?(0,n.jsx)(M,{compact:c,deploy:Q,isInConcurrentBuildsQueue:e?.isInConcurrentBuildsQueue,isInSystemBuildsQueue:e?.isInSystemBuildsQueue,projectName:S,showError:v}):g&&e?.url?(0,n.jsx)(d.Link,{"aria-label":"Visit Deployment",href:o||(0,w.d)((0,f.t)(E?e.url:F(e,B)),e.defaultRoute),...$,onClick:t=>{I?.(t),N?.(t),u.zS.track(p.q.DEPLOYMENT_OVERVIEW_CLICKED_SCREENSHOT,{projectId:e.projectId||B?.projectId,deploymentId:e.id,deploymentTarget:e.target})},style:{width:"100%"},tab:!0,children:(0,n.jsx)(U.A,{deployment:Q,onScreenshotFailed:W,placeholder:r,withReachable:!0,...m})}):(0,n.jsx)(U.A,{deployment:Q,onScreenshotFailed:()=>(0,n.jsx)(M,{deploy:{...Q,status:"FAILED"},isInConcurrentBuildsQueue:e?.isInConcurrentBuildsQueue,isInSystemBuildsQueue:e?.isInSystemBuildsQueue,projectName:S,showError:v}),placeholder:r,withReachable:!0,...m}),[V,Q,e,g,B,m,P,q,K,v,E,W,r,S,I]);return(0,n.jsx)("div",{className:(0,s.$)("geist-ratio",O().container,{[O().fallback]:q,[O().secondary]:Q?.status==="CANCELED"||Q?.status==="QUEUED"||Q?.status==="FROZEN"||Q?.status==="FAILED",[O().highlight]:!_,[O().error]:H,[O().warning]:K,[O().noProduction]:Q?.status==="NO_PRODUCTION",[O()["no-border"]]:C,[O()["no-border-radius"]]:b}),style:{"--ratio":"62.5%"},children:G})}function V({onClick:e,enabled:t,reasonWhyStartBuildingNowIsDisabled:r}){return void 0!==r?(0,n.jsx)(l.Tooltip,{position:"right",style:{alignItems:"center",flex:"1",justifyContent:"center",width:"100%"},text:r,children:(0,n.jsx)(o.Button,{disabled:!0,size:"small",style:{alignItems:"center",flex:"1",justifyContent:"center"},children:"Start Building Now"})}):(0,n.jsx)(o.Button,{disabled:!t,onClick:e,size:"small",type:"default",children:"Start Building Now"})}function F(e,t){let r=t?.name||e.url;return!r||(0,C.A)(r)?e.url:r}},540790:(e,t,r)=>{"use strict";r.d(t,{A:()=>w});var n=r(44880),i=r(69308),s=r(190994),a=r(559048),l=r(755464),o=r(442977),c=r(612819),d=r(742935),u=r(457011),p=r(987437),m=r.n(p),h=r(537811);function v(e,t){switch(t.type){case"LIGHT_IMAGE_LOADING":return{...e,lightImage:"pending"};case"LIGHT_IMAGE_SUCCESS":return{...e,lightImage:"success"};case"LIGHT_IMAGE_FAILURE":return{...e,lightImage:"failure"};case"DARK_IMAGE_LOADING":return{...e,darkImage:"pending"};case"DARK_IMAGE_SUCCESS":return{...e,darkImage:"success"};case"DARK_IMAGE_FAILURE":return{...e,darkImage:"failure"};default:return e}}let g={lightImage:"pending",darkImage:"pending"};function y(e,t,r,n){let i=new URL("/api/screenshot","production"!==h.env.VERCEL_ENV&&h.env.VERCEL_URL?`https://${h.env.VERCEL_URL}`:"https://vercel.com");return t?(i.searchParams.set("dark","dark"===e?"1":"0"),i.searchParams.set("deploymentId",t),r&&i.searchParams.set("teamId",r),n&&i.searchParams.set("withStatus","1"),`${i.pathname}${i.search}`):""}function _({srcLight:e,srcDark:t,onLoad:r,onError:i,alt:s}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{alt:s,className:(0,u.cn)("absolute ",m().lightOnly),onError:()=>i("light"),onLoad:()=>r("light"),src:e}),(0,n.jsx)(f,{alt:s,className:(0,u.cn)("absolute",m().darkOnly),onError:()=>i("dark"),onLoad:()=>r("dark"),src:t})]})}function f({src:e,onLoad:t,renderScale:r=3,onError:s,className:l,alt:o}){let d=(0,i.useRef)(null),u=(0,i.useRef)(null),[p,h]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let n=d.current;if(!n)return;u.current||(u.current=new Image);let i=u.current,a=()=>{let e=n.getContext("2d");if(!e)return;let t=n.offsetWidth,s=n.offsetHeight,a=t*r,l=s*r;n.width=a,n.height=l,e.scale(r,r),e.clearRect(0,0,a,l);let o=Math.min(t/i.width,s/i.height),c=t/2-i.width/2*o;e.drawImage(i,c,0,i.width*o,i.height*o)},l=(0,c.getImageProps)({src:e,width:640,height:400,alt:""}).props;if(i.src===l.src)return;i.src=l.src,i.srcset=l.srcSet??"",i.onload=()=>{t(),h(!0),a()},i.onerror=()=>{s()};let o=()=>{a()};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[e,r]),(0,n.jsx)("canvas",{"aria-hidden":"true","aria-label":o,className:(0,a.$)(l,{[m().blurIn]:p}),ref:d,role:"img",style:{width:"100%",height:"100%"}})}let w=i.memo(({deployment:e,placeholder:t,noBorderRadius:r=!1,withReachable:c=!1,withImageWrapper:u=!0,onReady:p,height:h=400,width:f=640,onScreenshotFailed:w=()=>null})=>{let C="string"==typeof e?.url?e.url:"",k="string"==typeof e?.id?e.id:void 0,b=f?{"--width":(0,d.px)(f)}:{},{teamSlug:j=""}=(0,l.useParams)()??{},E=(0,i.useMemo)(()=>y("dark",k,j,c),[k,j,c]),x=(0,i.useMemo)(()=>y("light",k,j,c),[k,j,c]),[I,S]=(0,i.useReducer)(v,g),{resolvedTheme:A}=(0,o.D)(),D=(0,i.useCallback)(e=>{void 0===e?(S({type:"LIGHT_IMAGE_SUCCESS"}),S({type:"DARK_IMAGE_SUCCESS"})):S({type:"dark"===e?"DARK_IMAGE_SUCCESS":"LIGHT_IMAGE_SUCCESS"}),p?.(!0)},[p]),B=(0,i.useCallback)(e=>{E&&x&&(void 0===e?(S({type:"LIGHT_IMAGE_FAILURE"}),S({type:"DARK_IMAGE_FAILURE"}),p?.(!1)):("dark"===e?E:x)&&(S({type:"dark"===e?"DARK_IMAGE_FAILURE":"LIGHT_IMAGE_FAILURE"}),p?.(!1)))},[p,E,x]),O="dark"===A?"failure"===I.darkImage:"failure"===I.lightImage,R=t||("dark"===A?"pending"===I.darkImage:"pending"===I.lightImage);if(O||!R&&!e)return w();let L=(0,n.jsx)(_,{alt:`Preview Screenshot of ${C}`,onError:B,onLoad:D,srcDark:E,srcLight:x});return(0,n.jsx)(s.E,{show:R,squared:r,style:{width:"100%",height:"100%"},children:u?(0,n.jsx)("div",{className:(0,a.$)(m().imageWrapper,{[m()["no-border-radius"]]:r}),style:h?{"--height":(0,d.px)(h),...b}:{},children:L}):L})})},602196:(e,t,r)=>{"use strict";function n(e){return 0===e.trim().length?"Team name is required":/^[ \u00c0-\u017ea-zA-Z0-9_'-]{1,256}$/.test(e.trim())?void 0:"Team names must be composed only of letters, numbers, spaces, underscore or dash, and not be empty.";}function i(e){return e.replaceAll("-","_")}function s(e){return void 0!==e?Math.floor(e):e}r.d(t,{RI:()=>s,Xw:()=>i,xM:()=>n})},622507:(e,t,r)=>{"use strict";r.d(t,{H:()=>m});var n=r(7836),i=r(69308),s=r(780012),a=r(918122),l=r(435828),o=r(683249),c=r(232465),d=r(394833),u=r(43295),p=r(254807);function m(e,t,r){let[m,h]=(0,i.useState)(void 0),{cache:v}=(0,n.iX)(),{data:g}=function(e,t,r,i){let{isReady:m,team:h}=(0,c.dA)(),{can:v,isLoading:g}=(0,d.Ay)(e?{projectIdOrName:e}:void 0),y=v(u.r.Read,u.F.ProjectEnvVars),_=m&&!g&&y&&t&&r!==o.aM.Sensitive,f="";return _&&((0,p.YS)(t)?f=`${l.PIy}/${t}${(0,s.l)({teamId:h?.id})}`:e&&(f=`${(0,l.DXT)("v1")}/${encodeURIComponent(e)}/env/${t}${(0,s.l)({teamId:h?.id})}`)),(0,n.Ay)(f,e=>(0,a.ff)(e,{throwOnHTTPError:!0}),void 0)}(r.projectId||r.projectName,m?.id,m?.type);return(0,i.useEffect)(()=>{if(!m||!g||m.type===o.aM.Sensitive)return;let r=v.get(e)?.data;if(0===r.envs.length)return;let n=[...r.envs],i=n.findIndex(e=>e.id===m.id),s=n[i];g.updatedAt&&s.updatedAt&&!(g.updatedAt<s.updatedAt)&&(n[i]=g,t({envs:n},!1),h(void 0))},[e,v,g,m,t]),{decryptEnvVar:h}}},640168:(e,t,r)=>{"use strict";r.d(t,{BR:()=>o,XJ:()=>c,hY:()=>l});var n=r(732618),i=r(907448),s=r(18407),a=r(602196);let l=e=>{n.zS.track(i.q.UPGRADE_MODAL_OPENED,e),(0,s.N)(s.K.UpgradeModalOpened,{desired_trial_behavior:(0,a.Xw)(e.desiredTrialBehavior),mode:e.mode,source:e.source,team_hint:e.teamHint},"vercel-app")},o=e=>{n.zS.track(i.q.UPGRADE_MODAL_ABANDONED,e),(0,s.N)(s.K.UpgradeModalAbandoned,{desired_trial_behavior:(0,a.Xw)(e.desiredTrialBehavior),mode:e.mode,source:e.source,team_hint:e.teamHint,time_in_modal_ms:(0,a.RI)(e.timeInModalMs)},"vercel-app")},c=e=>{n.zS.track(i.q.UPGRADE_MODAL_CONVERTED,e),(0,s.N)(s.K.UpgradeModalConverted,{mode:e.mode,conversion_type:(0,a.Xw)(e.conversionType),source:e.source,actor_id:e.actorId,team_id:e.teamId,team_created_at:(0,a.RI)(e.teamCreatedAt),prior_plan:(0,a.Xw)(e.priorPlan),new_plan:(0,a.Xw)(e.newPlan),desired_trial_behavior:(0,a.Xw)(e.desiredTrialBehavior),actual_trial_behavior:(0,a.Xw)(e.actualTrialBehavior),cart_total:(0,a.RI)(e.cartTotal),time_in_modal_ms:(0,a.RI)(e.timeInModalMs),new_team_members:(0,a.RI)(e.newTeamMembers),reactivated_team_members:(0,a.RI)(e.reactivatedTeamMembers),existing_team_members:(0,a.RI)(e.existingTeamMembers),speed_insights:(0,a.RI)(e.speedInsights)??0,additional_concurrent_builds:(0,a.RI)(e.additionalConcurrentBuilds)??0,preview_deployment_suffix:e.previewDeploymentSuffix??!1,password_protection:e.passwordProtection??!1,monitoring:e.monitoring??!1},"vercel-app")}},732633:(e,t,r)=>{"use strict";r.d(t,{Y:()=>p});var n=r(44880),i=r(69308),s=r(702575),a=r(775714),l=r(716519),o=r(451518),c=r(918122),d=r(435828),u=r(214269);function p(e){let[t,r]=(0,i.useState)(!1),p=(0,o.useToasts)(),m=(0,i.useCallback)(async()=>{if(!e.deploymentId||!e.teamId)return;r(!0);let t=new URLSearchParams;t.append("teamId",e.teamId);let n=`${(0,d.SyP)("v13")}/${e.deploymentId}/skip-queue?${t.toString()}`;200===(await (0,c.ff)(n,{method:"POST",body:void 0,throwOnHTTPError:!1,returnStatus:!0})).status?(p.success("Deployment will start building now."),e.onSuccess?.()):p.error("Something went wrong"),r(!1),e.onClose()},[e,p]);return(0,n.jsxs)(s.a.Modal,{active:e.active,onClickOutside:e.onClose,width:"500px",children:[(0,n.jsxs)(s.a.Body,{children:[(0,n.jsx)(s.a.Header,{children:(0,n.jsx)(s.a.Title,{children:(0,n.jsx)(a.B,{align:"center",direction:"row",gap:2,children:"Start Building Now"})})}),(0,n.jsxs)(a.B,{align:"center",direction:"column",gap:2,children:[(0,n.jsxs)(l.E,{children:["This will allocate an on-demand concurrent build slot and bypass the regular queue to start your build immediately. On-demand build slots are billed in 10 minute increments."," ",(0,n.jsx)(u.Link,{href:"/docs/deployments/managing-builds#on-demand-concurrent-builds",target:"_blank",variant:"highlight",children:"Learn more."})]}),e.teamId&&e.projectName?(0,n.jsxs)(l.E,{children:["If you frequently need faster builds for this project, consider enabling"," ",(0,n.jsx)(u.Link,{as:`/${e.teamId}/${encodeURIComponent(e.projectName)}/settings/advanced`,href:"/[teamSlug]/[project]/settings/advanced",target:"_blank",variant:"highlight",children:"On-Demand Concurrent Builds"})," ","at the project level."]}):null,(0,n.jsx)(l.E,{children:'By clicking "Confirm" you agree to be charged for on-demand concurrency.'})]})]}),(0,n.jsxs)(s.a.Actions,{children:[(0,n.jsx)(s.a.Action,{loading:!1,onClick:e.onClose,type:"secondary",children:"Close"}),(0,n.jsx)(s.a.Action,{disabled:t,loading:t,onClick:m,children:"Confirm"})]})]})}},749305:(e,t,r)=>{"use strict";function n(e){return`https://${e}`}r.d(t,{t:()=>n})},806792:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});var n=function(e){return e.DeploymentInviteScreenOpened="DeploymentInviteScreenOpened",e.DeploymentInviteSent="DeploymentInviteSent",e.DeploymentShareOpened="DeploymentShareOpened",e.PageView="PageView",e.AddNewMenuItemClicked="AddNewMenuItemClicked",e.RecentsImpression="RecentsImpression",e.RecentsTabClick="RecentsTabClick",e.RecentsEntityClick="RecentsEntityClick",e.UsageSideNavSectionClick="UsageSideNavSectionClick",e.UsageViewPlanClicked="UsageViewPlanClicked",e.UsageViewInvoicesClicked="UsageViewInvoicesClicked",e.UsageManageNotificationsClicked="UsageManageNotificationsClicked",e.UsageTopPathsFilterChange="UsageTopPathsFilterChange",e.UsageOverviewRowClicked="UsageOverviewRowClicked",e.BillingOverviewViewInvoicesClicked="BillingOverviewViewInvoicesClicked",e.BillingOverviewViewUsageClicked="BillingOverviewViewUsageClicked",e.BillingOverviewShowAllClicked="BillingOverviewShowAllClicked",e.DeploymentOverviewConfigClick="DeploymentOverviewConfigClick",e.DeploymentOverviewStatusClick="DeploymentOverviewStatusClick",e.DeploymentOverviewSummaryClick="DeploymentOverviewSummaryClick",e.DeploymentResourcesContextMenu="DeploymentResourcesContextMenu",e.DeploymentResourcesObservabilityClick="DeploymentResourcesObservabilityClick",e.DeploymentResourcesLogsClick="DeploymentResourcesLogsClick",e.DeploymentResourcesAnalyticsClick="DeploymentResourcesAnalyticsClick",e.DeploymentResourcesSpeedInsightsClick="DeploymentResourcesSpeedInsightsClick",e.ProjectOverviewActiveBranchesSearchFocused="ProjectOverviewActiveBranchesSearchFocused",e.ProjectOverviewActiveBranchesDeploymentPreviewClicked="ProjectOverviewActiveBranchesDeploymentPreviewClicked",e.ProjectOverviewActiveBranchesDeploymentBranchClicked="ProjectOverviewActiveBranchesDeploymentBranchClicked",e.ProjectOverviewActiveBranchesDeploymentStatusClicked="ProjectOverviewActiveBranchesDeploymentStatusClicked",e.ProjectOverviewActiveBranchesDeploymentCommentClicked="ProjectOverviewActiveBranchesDeploymentCommentClicked",e.ProjectOverviewActiveBranchesDeploymentOptionsClicked="ProjectOverviewActiveBranchesDeploymentOptionsClicked",e.ProjectOverviewActiveBranchesDeploymentRedeployClicked="ProjectOverviewActiveBranchesDeploymentRedeployClicked",e.ProjectOverviewActiveBranchesDeploymentViewBuildLogsClicked="ProjectOverviewActiveBranchesDeploymentViewBuildLogsClicked",e.ProjectOverviewActiveBranchesDeploymentViewRuntimeLogsClicked="ProjectOverviewActiveBranchesDeploymentViewRuntimeLogsClicked",e.ProjectOverviewActiveBranchesDeploymentViewPullRequestClicked="ProjectOverviewActiveBranchesDeploymentViewPullRequestClicked",e.ProjectOverviewActiveBranchesDeploymentCopyBranchUrlClicked="ProjectOverviewActiveBranchesDeploymentCopyBranchUrlClicked",e.ProjectSettingsUpdated="ProjectSettingsUpdated",e.ToolbarWrappedUrlContextMenuOpened="ToolbarWrappedUrlContextMenuOpened",e.SettingsSearchTyped="SettingsSearchTyped",e.NewProjectSuccessViewed="NewProjectSuccessViewed",e.NewProjectSuccessNavigated="NewProjectSuccessNavigated",e.NewProjectSuccessScreenshotClicked="NewProjectSuccessScreenshotClicked",e.NewProjectSuccessContinueClicked="NewProjectSuccessContinueClicked",e.VercelTutorStep="VercelTutorStep",e}({})},878734:(e,t,r)=>{"use strict";r.d(t,{CR:()=>c,LQ:()=>d,S7:()=>o,ll:()=>u,u:()=>p});var n=r(755464),i=r(232465),s=r(710501),a=r(855011),l=r(355875);let o=()=>{let{project:e}=(0,n.useParams)()||{};return e||""},c=e=>{let{isReady:t,team:r}=(0,i.dA)(),{user:n}=(0,s.Jd)();if(!e)return null;if(t){if(r)return`/${r.slug}/${e.name}`;if(n)return`/${n.username}/${e.name}`}return null},d=e=>{let{data:t}=(0,l.U0)(e,{limit:1});return t?0===t.length:void 0},u=e=>e?.targets?.production,p=e=>{let{data:t}=(0,a.H)();return e&&t?.find(t=>t.slug===(e.framework||null))||null}},987437:e=>{e.exports={container:"screenshot_container__x18ju",lcpPlaceholder:"screenshot_lcpPlaceholder__WqTA3",noProduction:"screenshot_noProduction__Mk_CC",error:"screenshot_error__i8AXj",warning:"screenshot_warning__syxWB",errorHeader:"screenshot_errorHeader__pPCaQ",secondary:"screenshot_secondary__f_pwT",fallback:"screenshot_fallback__QbB2T",highlight:"screenshot_highlight__hf_iT","no-border":"screenshot_no-border__iPysS","no-border-radius":"screenshot_no-border-radius__QP3pR",imageWrapper:"screenshot_imageWrapper__Ab258",statusText:"screenshot_statusText___4BBL",image:"screenshot_image__tfvPx",previewImage:"screenshot_previewImage__V3SeC",blurryLoad:"screenshot_blurryLoad__5ugEd","error-message":"screenshot_error-message__3C2Zu",blurIn:"screenshot_blurIn__rM2UI",darkOnly:"screenshot_darkOnly__xo1sR",lightOnly:"screenshot_lightOnly___Uqqb",skeleton:"screenshot_skeleton__mo_H4"}}}]);
//# debugId=7efe658c-9648-5cf3-ba29-64ed1035b269
