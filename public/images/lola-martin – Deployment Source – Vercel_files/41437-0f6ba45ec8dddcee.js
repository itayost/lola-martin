
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="53220daf-8271-5632-9da7-3d775600ea0f")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41437],{772182:function(i,e,n){var r;!function(o,t){"use strict";var a="function",s="undefined",b="object",u="string",w="model",l="name",d="type",c="vendor",m="version",f="architecture",p="console",g="mobile",h="tablet",v="smarttv",x="wearable",k="embedded",y="Amazon",S="Apple",_="ASUS",O="BlackBerry",A="Browser",T="Chrome",C="Firefox",E="Google",M="Huawei",U="Microsoft",N="Motorola",P="Opera",z="Samsung",I="Sony",q="Xiaomi",j="Zebra",B="Facebook",W=function(i,e){var n={};for(var r in i)e[r]&&e[r].length%2==0?n[r]=e[r].concat(i[r]):n[r]=i[r];return n},R=function(i){for(var e={},n=0;n<i.length;n++)e[i[n].toUpperCase()]=i[n];return e},V=function(i,e){return typeof i===u&&-1!==D(e).indexOf(D(i))},D=function(i){return i.toLowerCase()},F=function(i,e){if(typeof i===u)return i=i.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof e===s?i:i.substring(0,255);},L=function(i,e){for(var n,r,o,s,u,w,l=0;l<e.length&&!u;){var d=e[l],c=e[l+1];for(n=r=0;n<d.length&&!u;)if(u=d[n++].exec(i))for(o=0;o<c.length;o++)w=u[++r],typeof(s=c[o])===b&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,w):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=w?w.replace(s[1],s[2]):void 0:this[s[0]]=w?s[1].call(this,w,s[2]):void 0:4===s.length&&(this[s[0]]=w?s[3].call(this,w.replace(s[1],s[2])):t):this[s]=w||t;l+=2}},G=function(i,e){for(var n in e)if(typeof e[n]===b&&e[n].length>0){for(var r=0;r<e[n].length;r++)if(V(e[n][r],i))return"?"===n?t:n}else if(V(e[n],i))return"?"===n?t:n;return i},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,m],[/opios[\/ ]+([\w\.]+)/i],[m,[l,P+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[l,P]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[l,"UC"+A]],[/\bqbcore\/([\w\.]+)/i],[m,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure "+A],m],[/\bfocus\/([\w\.]+)/i],[m,[l,C+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[l,P+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[l,P+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[l,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[m,[l,C]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 "+A]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 "+A],m],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,B],m],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[l,T+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,T+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[l,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,m],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[m,[l,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[m,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[m,G,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[l,C+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[l,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,D]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",D]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,D]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[w,[c,z],[d,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[w,[c,z],[d,g]],[/\((ip(?:hone|od)[\w ]*);/i],[w,[c,S],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[w,[c,S],[d,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[w,[c,M],[d,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[w,[c,M],[d,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[w,/_/g," "],[c,q],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[w,/_/g," "],[c,q],[d,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[w,[c,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[w,[c,"Vivo"],[d,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[w,[c,"Realme"],[d,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[w,[c,N],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[w,[c,N],[d,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[w,[c,"LG"],[d,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[w,[c,"LG"],[d,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[w,[c,"Lenovo"],[d,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[w,/_/g," "],[c,"Nokia"],[d,g]],[/(pixel c)\b/i],[w,[c,E],[d,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[w,[c,E],[d,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[w,[c,I],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[w,"Xperia Tablet"],[c,I],[d,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[w,[c,"OnePlus"],[d,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[w,[c,y],[d,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[w,/(.+)/g,"Fire Phone $1"],[c,y],[d,g]],[/(playbook);[-\w\),; ]+(rim)/i],[w,c,[d,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[w,[c,O],[d,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[w,[c,_],[d,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[w,[c,_],[d,g]],[/(nexus 9)/i],[w,[c,"HTC"],[d,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[c,[w,/_/g," "],[d,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[w,[c,"Acer"],[d,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[w,[c,"Meizu"],[d,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[w,[c,"Sharp"],[d,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[c,w,[d,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[c,w,[d,h]],[/(surface duo)/i],[w,[c,U],[d,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[w,[c,"Fairphone"],[d,g]],[/(u304aa)/i],[w,[c,"AT&T"],[d,g]],[/\bsie-(\w*)/i],[w,[c,"Siemens"],[d,g]],[/\b(rct\w+) b/i],[w,[c,"RCA"],[d,h]],[/\b(venue[\d ]{2,7}) b/i],[w,[c,"Dell"],[d,h]],[/\b(q(?:mv|ta)\w+) b/i],[w,[c,"Verizon"],[d,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[w,[c,"Barnes & Noble"],[d,h]],[/\b(tm\d{3}\w+) b/i],[w,[c,"NuVision"],[d,h]],[/\b(k88) b/i],[w,[c,"ZTE"],[d,h]],[/\b(nx\d{3}j) b/i],[w,[c,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i],[w,[c,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i],[w,[c,"Swiss"],[d,h]],[/\b((zeki)?tb.*\b) b/i],[w,[c,"Zeki"],[d,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[c,"Dragon Touch"],w,[d,h]],[/\b(ns-?\w{0,9}) b/i],[w,[c,"Insignia"],[d,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[w,[c,"NextBook"],[d,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[c,"Voice"],w,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[c,"LvTel"],w,[d,g]],[/\b(ph-1) /i],[w,[c,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[w,[c,"Envizen"],[d,h]],[/\b(trio[-\w\. ]+) b/i],[w,[c,"MachSpeed"],[d,h]],[/\btu_(1491) b/i],[w,[c,"Rotor"],[d,h]],[/(shield[\w ]+) b/i],[w,[c,"Nvidia"],[d,h]],[/(sprint) (\w+)/i],[c,w,[d,g]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[c,U],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[w,[c,j],[d,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[w,[c,j],[d,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[c,w,[d,p]],[/droid.+; (shield) bui/i],[w,[c,"Nvidia"],[d,p]],[/(playstation [345portablevi]+)/i],[w,[c,I],[d,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[w,[c,U],[d,p]],[/smart-tv.+(samsung)/i],[c,[d,v]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[c,z],[d,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[c,"LG"],[d,v]],[/(apple) ?tv/i],[c,[w,S+" TV"],[d,v]],[/crkey/i],[[w,T+"cast"],[c,E],[d,v]],[/droid.+aft(\w)( bui|\))/i],[w,[c,y],[d,v]],[/\(dtv[\);].+(aquos)/i],[w,[c,"Sharp"],[d,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[c,F],[w,F],[d,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,v]],[/((pebble))app/i],[c,w,[d,x]],[/droid.+; (glass) \d/i],[w,[c,E],[d,x]],[/droid.+; (wt63?0{2,3})\)/i],[w,[c,j],[d,x]],[/(quest( 2)?)/i],[w,[c,B],[d,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[c,[d,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[w,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[w,[d,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,h]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i],[w,[c,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[m,G,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[m,G,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[m,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,m],[/\(bb(10);/i],[m,[l,O]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[l,C+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[l,T+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[l,"Chromium OS"],m],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,m],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,m]]},H=function(i,e){if(typeof i===b&&(e=i,i=t),!(this instanceof H))return new H(i,e).getResult();var n=i||(typeof o!==s&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),r=e?W($,e):$;return this.getBrowser=function(){var i,e={};return e[l]=t,e[m]=t,L.call(e,n,r.browser),e.major=typeof(i=e.version)===u?i.replace(/[^\d\.]/g,"").split(".")[0]:t,e;},this.getCPU=function(){var i={};return i[f]=t,L.call(i,n,r.cpu),i},this.getDevice=function(){var i={};return i[c]=t,i[w]=t,i[d]=t,L.call(i,n,r.device),i},this.getEngine=function(){var i={};return i[l]=t,i[m]=t,L.call(i,n,r.engine),i},this.getOS=function(){var i={};return i[l]=t,i[m]=t,L.call(i,n,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(i){return n=typeof i===u&&i.length>255?F(i,255):i,this},this.setUA(n),this;};H.VERSION="1.0.2",H.BROWSER=R([l,m,"major"]),H.CPU=R([f]),H.DEVICE=R([w,c,d,p,g,v,h,x,k]),H.ENGINE=H.OS=R([l,m]),typeof e!==s?(i.exports&&(e=i.exports=H),e.UAParser=H):n.amdO?t===(r=(function(){return H}).call(e,n,e,i))||(i.exports=r):typeof o!==s&&(o.UAParser=H);var Y=typeof o!==s&&(o.jQuery||o.Zepto);if(Y&&!Y.ua){var X=new H;Y.ua=X.getResult(),Y.ua.get=function(){return X.getUA()},Y.ua.set=function(i){X.setUA(i);var e=X.getResult();for(var n in e)Y.ua[n]=e[n]}}}("object"==typeof window?window:this)},941437:(i,e,n)=>{"use strict";var r=(function(i){i&&"object"==typeof i&&"default"in i&&i.default}(n(69308)),n(772182)),o=new r,t=o.getBrowser(),a=o.getCPU(),s=o.getDevice(),b=o.getEngine(),u=o.getOS(),w=o.getUA(),l=function(i){if(!i)return void console.error("No userAgent string was provided");var e=new r(i);return{UA:e,browser:e.getBrowser(),cpu:e.getCPU(),device:e.getDevice(),engine:e.getEngine(),os:e.getOS(),ua:e.getUA(),setUserAgent:function(i){return e.setUA(i)}}},d=Object.freeze({ClientUAInstance:o,browser:t,cpu:a,device:s,engine:b,os:u,ua:w,setUa:function(i){return o.setUA(i)},parseUserAgent:l});function c(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})),n.push.apply(n,r)}return n}var m={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},f={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},p={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},g={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},h=function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return i||e},v=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},x=function(i){var e=v();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)},k=function(i){return i.type===m.Mobile},y=function(i){return i.type===m.Tablet},S=function(i){var e=i.type;return e===m.Mobile||e===m.Tablet},_=function(i){return i.type===m.SmartTv},O=function(i){return i.type===m.Browser},A=function(i){return i.type===m.Wearable},T=function(i){return i.type===m.Console},C=function(i){return i.type===m.Embedded},E=function(i){return h(i.vendor)},M=function(i){return h(i.model)},U=function(i){return h(i.type,"browser")},N=function(i){return i.name===p.Android},P=function(i){return i.name===p.Windows},z=function(i){return i.name===p.MAC_OS},I=function(i){return i.name===p.WindowsPhone},q=function(i){return i.name===p.IOS},j=function(i){return h(i.version)},B=function(i){return h(i.name)},W=function(i){return i.name===f.Chrome},R=function(i){return i.name===f.Firefox},V=function(i){return i.name===f.Chromium},D=function(i){return i.name===f.Edge},F=function(i){return i.name===f.Yandex},L=function(i){var e=i.name;return e===f.Safari||e===f.MobileSafari},G=function(i){return i.name===f.MobileSafari},Z=function(i){return i.name===f.Opera},$=function(i){var e=i.name;return e===f.InternetExplorer||e===f.Ie},H=function(i){return i.name===f.MIUI},Y=function(i){return i.name===f.SamsungBrowser},X=function(i){return h(i.version)},K=function(i){return h(i.major)},Q=function(i){return h(i.name)},J=function(i){return h(i.name)},ii=function(i){return h(i.version)},ie=function(){var i=v(),e=i&&i.userAgent&&i.userAgent.toLowerCase();return "string"==typeof e&&/electron/.test(e);},ir=function(i){return"string"==typeof i&&-1!==i.indexOf("Edg/")},io=function(){var i=v();return i&&(/iPad|iPhone|iPod/.test(i.platform)||"MacIntel"===i.platform&&i.maxTouchPoints>1)&&!window.MSStream;},it=function(){return x("iPad")},ia=function(){return x("iPhone")},is=function(){return x("iPod")},ib=function(i){return h(i)};_(s),T(s),A(s),C(s),G(t)||it(),V(t);var iu=S(s)||it(),iw=(k(s),y(s)||it(),O(s),O(s)),il=(N(u),I(u),q(u)||it(),W(t),R(t));L(t),Z(t),$(t),j(u),B(u),X(t),K(t),Q(t),E(s),M(s),J(b),ii(b),ib(w),D(t)||ir(w),F(t),U(s),io(),it(),ia(),is(),ie(),ir(w),D(t)&&ir(w),P(u),z(u),H(t),Y(t);e.xl=iw,e.gm=il,e.Fr=iu}}]);
//# debugId=53220daf-8271-5632-9da7-3d775600ea0f
