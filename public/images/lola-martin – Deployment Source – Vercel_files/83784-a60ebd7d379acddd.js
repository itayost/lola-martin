
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cb82a276-00a6-5cc5-9cbd-ebfd4d96193b")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83784],{43295:(e,t,n)=>{"use strict";n.d(t,{F:()=>i,r:()=>r});var r=function(e){return e.All="*",e.Create="create",e.Delete="delete",e.Read="read",e.Update="update",e.Write="write",e.List="list",e}({}),i=function(e){return e.AccessGroup="accessGroup",e.AliasProtectionBypass="aliasProtectionBypass",e.ProductionAliasProtectionBypass="productionAliasProtectionBypass",e.AnalyticsSampling="analyticsSampling",e.AuditLog="auditLog",e.BillingAddress="billingAddress",e.BillingInformation="billingInformation",e.BillingInvoice="billingInvoice",e.BillingInvoiceEmailRecipient="billingInvoiceEmailRecipient",e.BillingInvoiceLanguage="billingInvoiceLanguage",e.BillingPurchaseOrder="billingPurchaseOrder",e.BillingTaxId="billingTaxId",e.BillingPlan="billingPlan",e.Blob="blob",e.Budget="budget",e.CodeChecks="codeChecks",e.ConcurrentBuilds="concurrentBuilds",e.ConnectConfiguration="connectConfiguration",e.ConnectConfigurationLink="connectConfigurationLink",e.DataCacheBillingSettings="dataCacheBillingSettings",e.RemoteCaching="remoteCaching",e.Deployment="deployment",e.DeploymentCheck="deploymentCheck",e.DeploymentCheckPreivew="deploymentCheckPreview",e.DeploymentFromProductionBranch="deploymentProductionGit",e.DeploymentPreview="deploymentPreview",e.DeploymentRollback="deploymentRollback",e.Domain="domain",e.DomainPurchase="domainPurchase",e.DomainTransferIn="domainTransferIn",e.DomainMove="domainMove",e.DomainAuthCodes="domainAuthCodes",e.DomainRecord="domainRecord",e.DomainCertificate="domainCertificate",e.Environments="environments",e.SensitiveEnvironmentVariablePolicy="sensitiveEnvironmentVariablePolicy",e.EndpointVerification="endpointVerification",e.IpBlocking="ipBlocking",e.TrustedIps="trustedIps",e.ImageOptimizationNewPrice="imageOptimizationNewPrice",e.Integration="integration",e.IntegrationConfiguration="integrationConfiguration",e.IntegrationConfigurationProjects="integrationConfigurationProjects",e.IntegrationConfigurationRole="integrationConfigurationRole",e.IntegrationConfigurationTransfer="integrationConfigurationTransfer",e.IntegrationResource="integrationResource",e.LogDrains="logDrain",e.LogsPreset="logsPreset",e.Logs="logs",e.Monitoring="Monitoring",e.MonitoringSettings="monitoringSettings",e.MonitoringQuery="monitoringQuery",e.MonitoringChart="monitoringChart",e.NotificationDeploymentFailed="notificationDeploymentFailed",e.NotificationDomainConfiguration="notificationDomainConfiguration",e.NotificationDomainExpire="notificationDomainExpire",e.NotificationDomainMove="notificationDomainMoved",e.NotificationDomainPurchase="notificationDomainPurchase",e.NotificationDomainRenewal="notificationDomainRenewal",e.NotificationDomainTransfer="notificationDomainTransfer",e.NotificationDomainUnverified="notificationDomainUnverified",e.NotificationPaymentFailed="notificationPaymentFailed",e.NotificationUsageAlert="notificationUsageAlert",e.ObservabilityConfiguration="observabilityConfiguration",e.ObservabilityData="observabilityData",e.OptionsAllowlist="optionsAllowlist",e.OAuth2Application="oauth2Application",e.PasswordProtection="passwordProtection",e.PaymentMethod="paymentMethod",e.Postgres="postgres",e.PreviewDeploymentSuffix="previewDeploymentSuffix",e.Project="project",e.ProjectDeploymentExpiration="projectDeploymentExpiration",e.ProjectEnvVars="projectEnvVars",e.ProjectEnvVarsProduction="projectEnvVarsProduction",e.ProjectLink="projectLink",e.ProjectTransferIn="projectTransferIn",e.ProjectTransferOut="projectTransferOut",e.ProjectProductionBranch="projectProductionBranch",e.ProjectMember="projectMember",e.ProjectMonitoring="projectMonitoring",e.ProjectProtectionBypass="projectProtectionBypass",e.ProjectTier="projectTier",e.ProjectFlags="projectFlags",e.SamlConfig="samlConfig",e.SeawallConfig="seawallConfig",e.Secrets="secrets",e.SharedEnvVars="sharedEnvVars",e.SharedEnvVarsProduction="sharedEnvVarsProduction",e.SharedEnvVarConnection="sharedEnvVarConnection",e.SkewProtection="skewProtection",e.Space="space",e.SpaceRun="spaceRun",e.SpeedInsights="analytics",e.SupportCase="supportCase",e.Redis="redis",e.Repository="repository",e.Team="team",e.TeamFellowMembership="teamFellowMembership",e.TeamGitExclusivity="teamGitExclusivity",e.TeamInvite="teamInvite",e.TeamMicrofrontends="teamMicrofrontends",e.TeamOwnMembership="teamOwnMembership",e.Usage="usage",e.UsageCycle="usageCycle",e.User="user",e.VPCPeeringConnection="vpcPeeringConnection",e.WebAnalytics="webAnalytics",e.WebAuthn="webAuthn",e.Webhooks="webhook",e.EdgeConfig="edgeConfig",e.EdgeConfigItem="edgeConfigItem",e.EdgeConfigToken="edgeConfigToken",e.RedisStoreTokenSet="redisStoreTokenSet",e.BlobStoreTokenSet="blobStoreTokenSet",e.PostgresStoreTokenSet="postgresStoreTokenSet",e.IntegrationStoreTokenSet="integrationStoreTokenSet",e.IntegrationResourceReplCommand="integrationResourceReplCommand",e.FlagsExplorerSubscription="flagsExplorerSubscription",e}({})},161925:(e,t,n)=>{"use strict";n.d(t,{ID:()=>a,ZF:()=>l,pd:()=>s,q5:()=>o});var r=n(780012),i=n(435828);let o=e=>{let t=e?.readyState==="CANCELED",n=e?.readyState==="READY",r=e?.readyState==="ERROR";return t||n||r};function a(e){if(!e)return"";let t=e;return (t=t.replace(/^https?:\/\//,"")).startsWith("dpl_")?`${(0,i.SyP)("v13")}/${t}`:`${(0,i.SyP)("v13")}/get${(0,r.l)({url:t})}`;}function l(e,t,n){let i=a(e);return i&&(i.includes("?url")?n?.automaticAliases&&(i+="&withAutomaticAliases=1"):i+=(0,r.l)({teamId:t,withAutomaticAliases:n?.automaticAliases?1:null,...(n?.gitRepo && {withGitRepoInfo:"true"})})),i;}function s(e){return e&&(e.host=e.url,e.isPrivate=e.public),e}},210819:(e,t,n)=>{"use strict";n.d(t,{A:()=>s,n:()=>l});var r=n(780012),i=n(821968),o=n.n(i),a=n(435828);function l(e,{latestDeployments:t=0,activeBranches:n,apiVersion:i,teamId:o,fetchParams:l={}}){return`${i?(0,a.DXT)(i):a.oqN}/${encodeURIComponent(decodeURIComponent(e))}${(0,r.l)({teamId:o,latestDeployments:t,activeBranches:n?1:void 0,...l})}`}function s(e){return o()(e,["crons","env","security"])}},214269:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ButtonLink:()=>c,Link:()=>s});var r=n(44880),i=n(69308),o=n(53190),a=n(374532),l=n(101221);let s=(0,i.forwardRef)(({children:e,...t},n)=>{let{prefetchHref:o}=(0,i.useContext)(l.ui),{zoneOfHref:s,isDifferentZone:c,isLoading:u}=(0,l.wr)(t.href);return(0,r.jsx)(a.N,{...t,"data-zone":c?s??"null":"same",isDifferentZone:c,onMouseOver:!1!==t.prefetch&&c?function(){t.href&&o(t.href)}:void 0,prefetch:t.prefetch??(!u&&void 0),ref:n,suppressHydrationWarning:!0,children:e})});function c({children:e,...t}){let{prefetchHref:n}=(0,i.useContext)(l.ui),{zoneOfHref:a,isDifferentZone:s,isLoading:c}=(0,l.wr)(void 0!==t.href?String(t.href):t.href);return(0,r.jsx)(o.v,{...t,"data-zone":s?a??"null":"same",isDifferentZone:s,onMouseOver:!1!==t.prefetch&&s?function(){t.href&&"string"==typeof t.href&&n(t.href)}:void 0,prefetch:t.prefetch??(!c&&void 0),suppressHydrationWarning:!0,children:e})}s.displayName="MultiZoneLink"},224455:(e,t,n)=>{"use strict";n.d(t,{II:()=>i,Jv:()=>r,LO:()=>o});var r=function(e){return e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.AUTO="auto",e}({});let i={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},o={MOBILE:"mobile",TABLET:"tablet",DESKTOP:"desktop"}},303845:(e,t,n)=>{"use strict";function r(e,t){var n,r;return {...e,...t,ssr:(n=e.ssr,void 0===(r=t?.ssr)?n:!1!==r&&{...("object"==typeof n ? n : void 0),...("object"==typeof r ? r : void 0)})};}n.d(t,{R2:()=>r})},333916:(e,t,n)=>{"use strict";n.d(t,{FlagUsageProvider:()=>l,p:()=>c});var r=n(44880),i=n(69308),o=n(552833);let a=(0,i.createContext)({reportFlag:()=>void 0,removeFlag:()=>void 0});function l({children:e}){let[t,n]=(0,i.useState)([]),l=(0,i.useMemo)(()=>({reportFlag:e=>{n(t=>[...t,e])},removeFlag:e=>{n(t=>t.filter(t=>e!==t))}}),[]);return(0,r.jsxs)(a.Provider,{value:l,children:[e,(0,r.jsx)(i.Suspense,{fallback:null,children:(0,r.jsx)(o.P,{values:t.reduce((e,t)=>(e[t.key]=t.value,e),{})})})]})}a.displayName="FlagContext";let s=()=>(0,i.useContext)(a),c=(e,t)=>{let{reportFlag:n,removeFlag:r}=s();(0,i.useEffect)(()=>{if(void 0===t)return;let i={key:e,value:t};return n(i),()=>{r(i)}},[e,t,n,r])}},370771:(e,t,n)=>{"use strict";n.d(t,{J:()=>l});var r=n(69308),i=n(784107);let o={data:void 0,isLoading:!0},a={data:void 0,isLoading:!1};function l(e,t){if(e)return t?o:a;let[n,l]=(0,r.useState)(t?o:a);return(0,r.useEffect)(()=>{if(!t)return;let e=!0;return t.then(t=>{e&&((0,i.RK)(t)?l({data:void 0,error:t,isLoading:!1}):l({data:t,isLoading:!1}))},()=>{l(a)}),()=>{e=!1}},[t]),t?n:a}},372487:(e,t,n)=>{"use strict";n.d(t,{a:()=>a});var r=n(510414);let i={enabled:!0,disabledReason:void 0},o=e=>({enabled:!1,disabledReason:e});function a(e,t){let{isReady:n,value:a}=(0,r.Yi)();if(!e||!e.billing)return o("other");if("enterprise"===e.billing.plan)return"unbundled"===e.billing.planIteration?t?i:o("no-permission"):o("enterprise-non-unbundled");if("pro"===e.billing.plan){if(n&&a)return"active"===e.billing.status?t?i:o("no-permission"):o("pro-non-active");return o("pro-feature-flag-disabled")}return n&&a?o("hobby-plan"):o("hobby-plan-feature-flag-disabled")}},394833:(e,t,n)=>{"use strict";n.d(t,{p5:()=>h,Ay:()=>m});var r=n(755464),i=n(69308),o=n(7836),a=n(918122),l=n(435828),s=n(43295),c=n(230424),u=n(232465),d=n(512710),f=n(510414);let p=["DEVELOPER","CONTRIBUTOR"],g=new Map([[s.r.All,[s.r.Read,s.r.Create,s.r.Delete,s.r.Update]],[s.r.Write,[s.r.Create,s.r.Delete,s.r.Update]]]);function m(e,t){let{data:n,error:s}=(0,d.A)(),{teams:g,team:m,isReady:v}=(0,u.dA)(),y=(0,c.S)(),{value:b}=function(){let{team:e,isReady:t}=(0,u.dA)(),{isReady:n,value:r}=(0,f.cz)();return e?.billing?.plan==="pro"?{isReady:n&&t,value:!!r}:e?.billing?.plan==="enterprise"?{isReady:!0,value:!0}:{isReady:!0,value:!1}}(),w=e?.teamId?g?.find(t=>t.id===e.teamId):m,{project:C}=(0,r.useParams)()??{},P=e&&"projectIdOrName"in e?e.projectIdOrName:C,R=!w?.membership?.role||b&&p.includes(w.membership.role),j=(0,o.Ay)(()=>{if(!R||!P||e?.teamId&&!P||!e?.teamId&&!y)return null;let t=new URLSearchParams({projectIdOrName:P});return e?.teamId?t.set("teamId",e.teamId):y&&t.set("slug",y),`${l._Y$}?${t.toString()}`},e=>(0,a.ff)(e,{throwOnHTTPError:!0}),t),S=w?.permissions;R&&P&&(S=j.data?.permissions);let A=(0,i.useMemo)(()=>new Map(Object.entries(S||{})),[S]),I=R&&(P||e&&"projectIdOrName"in e)&&!j.error&&void 0===j.data,x=!s&&void 0===n,T=!!n&&(n?.token.type!=="token"||n.token.scopes?.some(e=>"user"===e.type)||!1),E=!e?.teamId&&v&&!w&&!x&&T,k=!!(w?.merge&&!w.merge.finishedAt)&&"candidate"===w.merge.type,D=(0,i.useCallback)((e,t)=>h(A,E,k)(e,t),[E,A,k]),L=!v||I||!w&&x;return(0,i.useMemo)(()=>({can:D,isLoading:L}),[D,L])}let h=(e,t,n)=>(r,i)=>{if(t)return!0;if(n)return!1;let o=g.get(r)||[r];return!!e.has(i)&&o.every(t=>e.get(i)?.includes(t))}},510414:(e,t,n)=>{"use strict";n.d(t,{BM:()=>x,BZ:()=>v,C$:()=>$,Gk:()=>R,J_:()=>V,MX:()=>M,Me:()=>N,P3:()=>b,SG:()=>F,Tn:()=>B,WC:()=>m,Yi:()=>U,_1:()=>A,bC:()=>h,cm:()=>T,cz:()=>L,dC:()=>j,iF:()=>O,ix:()=>S,j4:()=>y,jg:()=>w,lu:()=>D,lv:()=>k,mw:()=>P,nD:()=>C,r2:()=>I,yW:()=>E});var r=n(69308),i=n(458071),o=n.n(i),a=n(586113),l=n.n(a),s=n(646994),c=n(333916),u=n(232465),d=n(230424);let f="vercel:ldTeamFlags:v2",p=o()(()=>{let e=s.U.getItem(f);try{if(e)return JSON.parse(e)}catch(e){return{}}}),g=l()(e=>{s.U.setItem(f,JSON.stringify(e))},1e3),m=e=>{let{team:t,isReady:n,mutate:i,allTeamsSlugToFlagsMap:o}=(0,u.dA)(e),a=(0,r.useMemo)(()=>n?o:p(),[o,n]),l=(0,d.S)(),s=l&&a?.[l]||null,c=n&&t?.slug?o?.[t.slug]:null;return(0,r.useEffect)(()=>{n&&(g(o),p.cache.set(void 0,o))},[o,n]),(0,r.useMemo)(()=>({flags:c??s,isReady:!!c||n&&void 0!==a,team:t,mutate:i}),[a,s,c,i,t,n])},h=(e,t)=>{let{flags:n,isReady:r,team:i,mutate:o}=m(t),a=n?n[e]??null:void 0;return(0,c.p)(e,a),{isReady:r,value:a??null,mutate:()=>o().then(t=>({isReady:r,value:t?.teams?.find(e=>e.id===i?.id)?.flags?.[e]??null}))}},v=()=>h("allow-pro-trials-to-use-analytics-for-free"),y=()=>h("new-monorepo-onboarding"),b=()=>h("monitoring-access-override"),w=()=>h("is-oem-partner"),C=()=>h("support-center"),P=()=>h("open-telemetry-api-scope"),R=()=>h("instant-rollback-hobby-restriction"),j=()=>h("ip-blocking"),S=()=>h("cidr-blocking"),A=()=>h("seawall-config"),I=()=>h("pause-team-projects"),x=()=>h("firewall-log-drains"),T=()=>h("firewall-rate-limiting"),E=()=>h("show-invoice-page-payment"),k=()=>h("runtime-logs-extended-timeline"),D=e=>h("git-exclusivity",e),L=()=>h("project-rbac-access-groups"),M=()=>h("northern-lights-pro-trial-banner"),O=()=>h("allow-nodejs-22"),N=()=>h("audit-log-stream"),B=()=>h("secure-compute-environments"),$=()=>h("rbac-update"),F=()=>h("marketplace-integration-configuration-transfer-to-team"),U=()=>h("ld-on-demand-concurrent-builds-on-pro"),V=()=>h("rolling-releases")},512710:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(918122),i=n(435828),o=n(610341);function a(){return(0,o.l)(`${i.DhI}/current`,e=>(0,r.ff)(e,{throwOnHTTPError:!0}))}},621365:(e,t,n)=>{"use strict";n.d(t,{A:()=>l,i:()=>s});var r=n(7836),i=n(755464),o=n(918122),a=n(161925);function l(e,t,n){let{teamSlug:o}=(0,i.useParams)()??{};return(0,r.Ay)((0,a.ZF)(e,o,n),s,t)}async function s(e){let t=await (0,o.ff)(e,{throwOnHTTPError:!0});return(0,a.pd)(t)}},647018:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(44880),i=n(193242),o=n.n(i);n(864328);var a=n(559048),l=n(69308);let s=Object.keys(n(224455).LO).length,c=Array(s).fill("row"),u=Array(s).fill("column"),d={row:{align:{top:"flex-start",bottom:"flex-end",center:"center",default:"stretch",baseline:"baseline"},justify:{left:"flex-start",right:"flex-end",center:"center",default:"flex-start"}},column:{align:{left:"flex-start",right:"flex-end",center:"center",default:"stretch"},justify:{top:"flex-start",bottom:"flex-end",center:"center",default:"flex-start",baseline:"baseline"}}},f=({row:e,direction:t,left:n,right:i,top:l,bottom:s,hcenter:f,vcenter:p,vbaseline:g,center:m,noWrap:h,wrapper:v,halfGap:y,gap:b,children:w,flex:C=1,inline:P,full:R,classNames:j=[],styleSets:S=null,Component:A="div",className:I,style:x,...T},E)=>{let k,D,L=n?"left":i?"right":f||m?"center":"default",M=l?"top":s?"bottom":p||m?"center":g?"baseline":"default";e?(k=d.row.justify[L],D=d.row.align[M]):(k=d.column.justify[M],D=d.column.align[L]);let O=y?.5:void 0===b?1:b,N=("row"===t?c:"column"===t?u:t)||(e?c:u),B=(0,r.jsxs)(A,{"data-version":"v1",ref:E,style:{...x,"--flex":C,"--justify-content":k,"--align-items":D},...T,className:o().dynamic([["cb494a8d99168a42",[O]]])+" "+(T&&null!=T.className&&T.className||(0,a.$)("geist-container",{"sm-row":"row"===N[0],"md-row":"row"===(N[1]||N[0]),"lg-row":"row"===(N[2]||N[1]||N[0]),nowrap:h,inline:P},...j,I)||""),children:[w,(0,r.jsx)(o(),{id:"cb494a8d99168a42",dynamic:[O],children:`.geist-container.__jsx-style-dynamic-selector>*{--gap-ratio:${O}}`}),S]});return v?(0,r.jsx)("div",{className:(0,a.$)("geist-wrapper",{full:R}),children:B}):B};f.displayName="Container";let p=(0,l.forwardRef)(f)},775433:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});let r=(0,n(688781).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z" fill="currentColor" />')},782102:(e,t,n)=>{"use strict";n.d(t,{r:()=>f});var r=n(647901),i=n(69308),o=n(755464),a=n(930166),l=n(537811);let s={},c="true"===l.env.NEXT_PUBLIC_TESTMODE;function u(e,t,n){let i=t??e;if("string"==typeof i)return i;let o=i,{pathname:a,query:l}=o;if(a||(a=n.pathname),a.includes("[")&&("string"==typeof l&&(l=Object.fromEntries(new URLSearchParams(l))),l)){let e={...l};a=a.replace(/\[[^\]]+]/g,t=>{let n=t.slice(1,-1),r=!1;n.startsWith("...")&&(n=n.substring(3),r=!0);let i=e[n];return(delete e[n],null==i)?"":r?Array.isArray(i)?i.join("/"):String(i):String(Array.isArray(i)?i[0]:i)}),o={...o,query:e}}return(0,r.format)({...o,pathname:a})}var d=n(161920);function f(){let e=(0,d.useRouter)();return e||function(){!(0,a.useIsCompatRouterAllowed)()&&c&&console.warn("WARNING: Disallowed compat router invocation in the /app folder. It should be either removed or allow-list using CompatRouterAllowed. The invocation stack:",(Error().stack??"").split("\n").slice(3).slice(0,10).join("\n"));let e=(0,o.useRouter)(),t=(0,o.usePathname)(),n=(0,o.useParams)(),r=(0,o.useSearchParams)(),[l,d]=(0,i.useReducer)(e=>e+1,0);return(0,i.useMemo)(()=>(function(e,t,n,r,i,o){let a=r?.toString()??"";return{isReady:null!==t,pathname:function(e,t){if(null===e)return null;if(""===e||!t)return e;let n=e;for(let[e,r]of Object.entries(t)){let t,i;if("lang"===e||(Array.isArray(r)?(i=`...${e}`,t=r.join("/")):(i=e,t=r??""),!t))continue;let o=0;for(;-1!==o;)if(-1!==(o=n.indexOf(`/${t}`,o))){let e=o+t.length+1;if(e>=n.length||"/"===n[e]||"?"===n[e]||"#"===n[e]){n=`${n.substring(0,o+1)}[${i}]${n.substring(e)}`;break}o+=t.length+1}}return n}(t,n)??"",get asPath(){let e=`${t??""}${a?`?${a}`:""}`;return i>0&&(e+=window.location.hash),e},get query(){var l=n,c=r;let{lang:e,...t}=l??s,i=null;if(c)for(let e of(i={},c.keys())){let t=c.getAll(e);1===t.length&&void 0!==t[0]?i[e]=t[0]:t.length>0&&(i[e]=t)}return{...i,...t}},push(t,n,r){let i=u(t,n,this);e.push(i,r)},replace(n,r,i){let a=u(n,r,this),l=new URL(a,window.location.href),s=new URL(this.asPath,window.location.href),c=function(e){let t=e.indexOf("#");return -1!==t?e.substring(t):""}(a),d=window.location.hash!==c;l.toString()!==s.toString()&&(l.pathname===t&&(i?.shallow||d)?(window.history.replaceState(void 0,"",a),o(),d&&(i?.scroll??!0)&&function(e){let t=e.replace("#","");if(""===t||"top"===t)return window.scrollTo(0,0);let n=decodeURIComponent(t),r=document.getElementById(n);if(r)return r.scrollIntoView();let i=document.getElementsByName(n)[0];i&&i.scrollIntoView()}(c)):e.replace(a,i))},reload(){e.refresh()},back(){e.back()},forward(){e.forward()},prefetch(t,n,r){let i=u(t,n,this);return e.prefetch(i)}}})(e,t,n,r,l,d),[e,t,n,r,l])}()}},784107:(e,t,n)=>{"use strict";n.d(t,{RK:()=>i,qd:()=>o});var r=n(69308);function i(e){return!!(e&&"object"==typeof e&&"error"in e)}function o(e){if(!e)return;let t=(0,r.use)(e);if(!i(t))return t}},807647:(e,t,n)=>{"use strict";n.d(t,{H1:()=>u,A:()=>y});var r=n(44880),i=n(69308),o=n(559048);let a=(e,t)=>e?["geist-themed",`geist-${e}`,t?`geist-${e}-fill`:null]:null;function l(e=!1,t,n){return e?i.createElement(n,{},t):t}let s=(e,{mark:t,underline:n,strike:r,bold:i,italic:o})=>{let a=e;return a=l(t,a,"mark"),a=l(n,a,"u"),a=l(r,a,"s"),a=l(i,a,"b"),a=l(o,a,"i")};function c(e){let t=({noMargin:t,weight:n,code:i,uppercase:a,capitalize:l,center:s,Component:c=e,children:u,className:d,preset:f,maxWidth:p,style:g,...m})=>(0,r.jsx)(c,{className:(0,o.$)(d,"geist-text",{"geist-text-no-margin":t,"geist-text-mono":i,"geist-text-upper":a,"geist-text-capitalize":l,"geist-text-center":s},f||e,n?`w-${n}`:void 0),style:{maxWidth:p,...g},...m,children:u});return t.displayName="Text_"+e,t}let u=c("h1"),d=c("h2"),f=c("h3"),p=c("h4"),g=c("h5"),m=c("h6"),h=c("p"),v=[u,d,f,p,g,m,h,c("small"),c("span")],y=((e,t={})=>{let{defaultFill:n,hasFill:l}=t;function s({className:t,forwardedRef:i,...s}){let{type:c}=s,u=s.fill||n;!1===l&&(u=n||!1);let d=(0,o.$)(a(c,u),t);return(0,r.jsx)(e,{className:d,...s,ref:i})}let c=(e,t)=>(0,r.jsx)(s,{...e,forwardedRef:t});return c.displayName=e.displayName||e.name,i.forwardRef(c)})(function({Component:e,h1:t,h2:n,h3:i,h4:o,h5:a,h6:l,p:c,small:u,span:d,mark:f,underline:p,strike:g,bold:m,italic:y,children:b,...w}){let C=v[[t,n,i,o,a,l,c,u,d].indexOf(!0)]||h;return(0,r.jsx)(C,{Component:e,...w,children:s(b,{mark:f,underline:p,strike:g,bold:m,italic:y})})},{hasFill:!1})},822144:(e,t,n)=>{"use strict";n.d(t,{h:()=>o});var r=n(44880);n(69308);var i=n(559048);let o=({x:e=1,y:t=1,expand:n,className:o,inline:a,padding:l})=>(0,r.jsx)("span",{"aria-hidden":"true",className:(0,i.$)("geist-spacer",o,{padding:l,inline:a,expand:n}),"data-version":"v1",style:{marginLeft:1!==e?24*e-1:void 0,marginTop:1===t||a?void 0:24*t-1,paddingLeft:l?24*e-1:void 0,paddingTop:l&&!a?24*t-1:void 0}});o.displayName="Spacer"},855011:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});var r=n(924763),i=n(918122),o=n(435828);function a(){return(0,r.A)(o.RWS,e=>(0,i.ff)(e,{throwOnHTTPError:!0}))}},864328:()=>{},868122:(e,t,n)=>{"use strict";n.d(t,{n:()=>i});let r=new Map;function i(e,t,n=500){return(...i)=>{if(!r.get(e))return r.set(e,!0),setTimeout(()=>{r.delete(e)},n),t(...i)}}},930166:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CompatAllowedContext:()=>o,CompatRouterAllowed:()=>l,CompatRouterAllowedWithoutSuspense:()=>s,useIsCompatRouterAllowed:()=>a});var r=n(44880),i=n(69308);let o=(0,i.createContext)(!1);function a(){return(0,i.useContext)(o)}function l({children:e}){return(0,r.jsx)(i.Suspense,{children:(0,r.jsx)(o.Provider,{value:!0,children:e})})}function s({children:e}){return(0,r.jsx)(o.Provider,{value:!0,children:e})}o.displayName="CompatAllowedContext"},953589:(e,t,n)=>{"use strict";n.d(t,{f:()=>u});var r=n(69308),i=n(7836),o=n(977006),a=n(303845),l=n(370771),s=n(868122),c=n(98398);function u(e,t,n){let{isServer:u,config:f,fetcher:p,fallbackSource:g}=(0,o.AM)(!0),m=(0,r.useMemo)(()=>"function"==typeof t?(e,n)=>t(e,n):d,[t]),h=(0,r.useMemo)(()=>e=>{if(u)throw Error("useSWR: swrFetcher is not available on server");return m(e,p)},[u,m,p]),v="object"==typeof t?t:n,{ssr:y,...b}=v??{},w=g(e,m,(0,a.R2)(f,v),!1),{data:C,isLoading:P,error:R}=(0,l.J)(u,w),{cache:j}=(0,i.iX)(),S=!!(e&&j.get(e)),A=(0,i.Ay)(!P||u||S?e:null,h,{...b,suspense:!1,fallback:{[(0,i.WI)(e)]:C},revalidateOnMount:!u&&(b.revalidateOnMount??(!C&&!P))}),{mutate:I,isLoading:x,data:T}=A,E=(0,r.useMemo)(()=>(0,s.n)(e,()=>{(0,c.Yz)(`Client fallback data fetch for ${e}`),I()},2e3),[e,I]);return(0,r.useEffect)(()=>{!R||x||T||E()},[R,E,x,T]),{...A,data:void 0!==A.data?A.data:C,isLoading:A.isLoading&&void 0===A.data||P&&!S||u}}function d(e,t){return t(e)}}}]);
//# debugId=cb82a276-00a6-5cc5-9cbd-ebfd4d96193b
