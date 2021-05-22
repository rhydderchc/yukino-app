import{d as e,c as n,w as s,p as t,a,o,b as l,e as r,F as i,r as d,f as c,t as u,g as p,h as g,i as h}from"./vendor.3b6fd992.js";var m=e({mounted(){document.addEventListener("scroll",(()=>{const e=document.getElementById("nav");document.body.scrollTop>600||document.documentElement.scrollTop>600?null==e||e.classList.add("active"):null==e||e.classList.remove("active")}))}});const f=s();t("data-v-667e940e");const x={class:"fixed top-0 left-0 right-0 bg-white shadow-md",id:"nav"},b=l("div",{class:"flex flex-row justify-around items-center gap-4 py-3"},[l("div",null,[l("img",{class:"w-10",src:"/yukino-app/icon.png",alt:"Logo"})]),l("div",{class:"flex flex-row justify-center items-center gap-2"},[l("a",{class:"\n                        bg-indigo-500\n                        hover:bg-indigo-600\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:"#download"},[l("i",{class:"fas fa-save mr-1"}),r(" Download")]),l("a",{class:"\n                        bg-black\n                        hover:bg-gray-800\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:"https://github.com/zyrouge/yukino-app/",target:"_blank"},[l("span",{class:"mr-1"},[l("i",{class:"fab fa-github"})]),r(" GitHub")])])],-1);a();const y=f(((e,s,t,a,l,r)=>(o(),n("div",x,[b]))));m.render=y,m.__scopeId="data-v-667e940e";var w=e({name:"App",components:{NavBar:m},data:()=>({screenshots:["https://github.com/zyrouge/yukino-app/raw/next/screenshots/home.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/search.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/anime.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/episodes.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/sources.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/player.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/manga.png"],features:["Supports ad-free anime streaming","In-built manga reader","Handful of sources (4Anime, GogoAnime, Mangafox, ...)","Open-sourced under MIT license","Catchy but clean UI","Optimized for performance","Light and dark mode","Discord RPC"],releases:{web:"https://github.com/zyrouge/yukino-app/releases",all:"https://api.github.com/repos/zyrouge/yukino-app/releases"},downloads:[],isOpenedIndex:0}),mounted(){this.getReleases()},methods:{async getReleases(){try{const e=await fetch(this.releases.all).then((e=>e.json()));e.filter((e=>!e.draft)).sort(((e,n)=>new Date(e.updated_at).getTime()-new Date(n.updated_at).getTime())).forEach((e=>{const n=e.tag_name,s=e.assets.find((e=>e.browser_download_url.endsWith(".exe"))),t=e.assets.find((e=>e.browser_download_url.endsWith(".AppImage")));if(n){const e={version:n,platforms:{}};s&&(e.platforms.windows={url:s.browser_download_url,size:s.size}),t&&(e.platforms.linux={url:t.browser_download_url,size:t.size}),this.downloads.push(e)}}))}catch(e){console.error(e)}},setOpened(e){if(this.isOpenedIndex===e)return this.isOpenedIndex=null;this.isOpenedIndex=e},getMb:e=>(e/1e6).toFixed(2),getIcon(e){switch(e){case"windows":return"fab fa-windows";case"linux":return"fab fa-linux";default:return""}}}});const v=c('<article class="font-sans text-white"><div class="bg-indigo-500 text-center px-10 md:px-20 py-20 md:py-40"><div class="text-5xl md:text-7xl font-bold">Yukino</div><p class="mt-8"> Stream anime or read manga ad-free from multiple sources. </p><div class="\n                        mt-8\n                        flex flex-col\n                        md:flex-row\n                        justify-center\n                        items-center\n                        gap-2\n                    "><a class="\n                            bg-white\n                            hover:bg-gray-200\n                            text-black\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        " href="#download"><span class="mr-1"><i class="fas fa-save"></i></span> Download</a><a class="\n                            bg-black\n                            hover:bg-gray-800\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                            mt-2\n                            md:mt-0\n                        " href="https://github.com/zyrouge/yukino-app/" target="_blank"><span class="mr-1"><i class="fab fa-github"></i></span> GitHub</a></div></div></article>',1),k={class:"text-gray-700 text-center mx-8 md:mx-20 my-16"},z=l("p",{class:"text-lg"},[r(" The project's name "),l("strong",null,"Yukino"),r(" means "),l("strong",null,"Snow"),r(" named after the character "),l("strong",null,"Yukino Yukinoshita"),r(" from the anime "),l("strong",null,"Yahari Ore no Seishun Love Comedy wa Machigatteiru"),r(". ")],-1),_=l("p",{class:"mt-10 text-red-500 font-bold"}," We do not support piracy or run/serve any illegal or copyrighted contents, everything is acquired from third-party sources. ",-1),I=l("hr",{class:"my-10"},null,-1),O=l("h1",{class:"text-2xl font-bold"},"Features",-1),M={class:"mt-4 list-inside list-disc"},j=l("hr",{class:"my-10"},null,-1),T=l("h1",{class:"text-2xl font-bold"},"Preview",-1),L={class:"flex flex-col justify-center items-center"},D=l("hr",{class:"my-10"},null,-1),C=l("h1",{class:"text-2xl font-bold",id:"download"},"Download",-1),Y={class:"mt-4"},H={class:"mr-1.5 text-xs"},S={key:0,class:"fas fa-angle-double-down"},A={key:1,class:"fas fa-angle-double-right"},B={key:0,class:"\n                            flex flex-col\n                            lg:flex-row\n                            justify-center\n                            items-center\n                            gap-3\n                            mt-2\n                        "},E={class:"mr-1"},F=r(" Download for "),G={class:"capitalize"},P={class:"text-xs opacity-75"},R={class:"mt-4"},W=l("hr",{class:"my-10"},null,-1),N=l("div",null,[l("h1",{class:"text-2xl font-bold"},"Contributing"),l("p",{class:"mt-4"},[r(" Please read the "),l("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:"https://github.com/zyrouge/yukino-app/#readme",target:"_blank"},"readme"),r(" for information about contributing! ")])],-1),q=l("div",{class:"bg-indigo-500 text-center text-white px-10 py-10"},[l("p",null,[l("strong",null,"Yukino"),r(" is licensed under "),l("strong",null,"MIT"),r(". ")]),l("p",{class:"mt-1"},[r(" Made with "),l("i",{class:"fas fa-heart"}),r(" by "),l("a",{class:"font-bold",href:"https://zyrouge.is-a.dev",target:"_blank"},"Zyrouge"),r(". ")])],-1);w.render=function(e,s,t,a,c,h){const m=g("NavBar");return o(),n("main",null,[l(m),v,l("div",k,[z,_,I,l("div",null,[O,l("ul",M,[(o(!0),n(i,null,d(e.features,(e=>(o(),n("li",null,[l("span",{class:"-ml-1.5",innerHTML:e},null,8,["innerHTML"])])))),256))])]),j,l("div",null,[T,l("div",L,[(o(!0),n(i,null,d(e.screenshots,((e,s)=>(o(),n("img",{class:"mt-4 rounded w-full md:w-5/6",src:e,alt:`Screenshot ${s}`},null,8,["src","alt"])))),256))])]),D,l("div",null,[C,(o(!0),n(i,null,d(e.downloads,((s,t)=>(o(),n("div",Y,[l("p",{class:"font-bold cursor-pointer",onClick:n=>e.setOpened(t)},[l("span",H,[e.isOpenedIndex===t?(o(),n("i",S)):(o(),n("i",A))]),r(u(s.version),1)],8,["onClick"]),e.isOpenedIndex===t?(o(),n("div",B,[(o(!0),n(i,null,d(Object.entries(s.platforms),(([s,t])=>(o(),n("a",{class:"\n                                bg-indigo-500\n                                hover:bg-indigo-600\n                                text-white\n                                px-5\n                                py-2\n                                rounded-lg\n                                shadow-lg\n                                transition\n                                duration-300\n                            ",href:t.url,target:"_blank"},[l("p",null,[l("span",E,[l("i",{class:e.getIcon(s)},null,2)]),F,l("span",G,u(s),1)]),l("p",P,u(e.getMb(t.size))+" MB ",1)],8,["href"])))),256))])):p("",!0)])))),256)),l("p",R,[l("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:e.releases.web,target:"_blank"},"View all releases",8,["href"])])]),W,N]),q])};h(w).mount("#app");