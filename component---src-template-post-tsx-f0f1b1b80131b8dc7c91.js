(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[161,753],{1589:function(e,t,r){var i=r(9859),n=r(1601),o=r(6733),a=r(7079),s=r(95)("toStringTag"),l=i.Object,c="Arguments"==a(function(){return arguments}());e.exports=n?a:function(e){var t,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=l(e),s))?r:c?a(t):"Object"==(i=a(t))&&o(t.callee)?"Arguments":i}},17:function(e,t,r){var i=r(5968),n=r(2991),o=Math.floor,a=i("".charAt),s=i("".replace),l=i("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,i,u,p){var m=r+e.length,g=i.length,h=d;return void 0!==u&&(u=n(u),h=c),s(p,h,(function(n,s){var c;switch(a(s,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,r);case"'":return l(t,m);case"<":c=u[l(s,1,-1)];break;default:var d=+s;if(0===d)return n;if(d>g){var p=o(d/10);return 0===p?n:p<=g?void 0===i[p-1]?a(s,1):i[p-1]+a(s,1):n}c=i[d-1]}return void 0===c?"":c}))}},8311:function(e,t,r){var i=r(5052),n=r(7079),o=r(95)("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},895:function(e,t,r){"use strict";var i=r(1176);e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1601:function(e,t,r){var i={};i[r(95)("toStringTag")]="z",e.exports="[object z]"===String(i)},3326:function(e,t,r){var i=r(9859),n=r(1589),o=i.String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},1639:function(e,t,r){"use strict";var i=r(3103),n=r(9859),o=r(266),a=r(5968),s=r(8885),l=r(6733),c=r(8311),d=r(3326),u=r(5300),p=r(895),m=r(17),g=r(95),h=r(4231),f=g("replace"),b=RegExp.prototype,x=n.TypeError,v=a(p),w=a("".indexOf),R=a("".replace),y=a("".slice),S=Math.max,C=function(e,t,r){return r>e.length?-1:""===t?r:w(e,t,r)};i({target:"String",proto:!0},{replaceAll:function(e,t){var r,i,n,a,p,g,j,k,A,E=s(this),T=0,U=0,D="";if(null!=e){if((r=c(e))&&(i=d(s("flags"in b?e.flags:v(e))),!~w(i,"g")))throw x("`.replaceAll` does not allow non-global regexes");if(n=u(e,f))return o(n,e,E,t);if(h&&r)return R(d(E),e,t)}for(a=d(E),p=d(e),(g=l(t))||(t=d(t)),j=p.length,k=S(1,j),T=C(a,p,0);-1!==T;)A=g?d(t(p,T,a)):m(p,a,T,[],void 0,t),D+=y(a,U,T)+A,U=T+j,T=C(a,p,T+k);return U<a.length&&(D+=y(a,U)),D}})},5704:function(e,t,r){r(1639)},2177:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=JSON.parse('{"author":"Owen","title":"황교진(Owen) 이력서","titleTemplate":"%s · Owen","placeholder":"/profile.png","siteUrl":"https://bobcost.site/","description":"프론트엔드 개발자 황교진의 이력서 및 블로그","twitterUserName":"Owen","github":"Kyojin-Hwang","secondary":"https://velog.io/@owen1127/posts"}'),n=JSON.parse('{"config":{"name":"황교진","role":"Software Engineer","bio":["웹 프론트엔드에 관심이 많은 <string>소프트웨어 엔지니어</string>","서비스에 <string>필요한 기능과 페이지를 구체적으로 생각 하고 구현</string>","<string>디자인을 완벽히 구현</string>할 수 있는 개발자 ","<string>항상 경우의 수</string>를 고려하는 개발자"],"github":"https://github.com/Kyojin-Hwang","velog":"https://velog.io/@owen1127/posts","email":"rywls4248@gmail.com"},"careers":{"title":"경력","list":[{"name":"인디제이","department":"개발팀","position":"Software Engineer","startDate":"2022.08","endDate":"2024.07","fold":true,"descriptions":["인디제이는 사용자 맞춤 상황,감정 AI 스트리밍 라디오 서비스입니다.","CES 2023,2024 혁신상을 수상 하였으며, AI 솔루션을 통한 외주도 맡고 있습니다."],"projects":[{"name":"플레이어 웹 페이지 개발","descriptions":["인디제이 웹 버전 프론트엔드를 개발 및 유지보수 하였습니다."],"startDate":"2022.08","endDate":"2024.07","which":["Redux를 활용한 사용자 정보 및 음악 관리","API 통신을 통해 AI 음악추천 챗봇 UI 및 UX 개발","반응형 웹 개발","프로모션 웹 및 모바일 웹뷰 페이지 개발"],"techStacks":["React.js","TypeScript","Redux"],"url":"https://player.indj.ai"},{"name":"어드민 개발","descriptions":["인디제이 어드민 페이지를 개발 및 유지보수 하였습니다."],"startDate":"2022.08","endDate":"2024.07","which":["대쉬보드 데이터 시각화(차트) 작업","랜드마크(GPS) CRUD 구현 및 퍼블리싱 작업","음악 CRUD 구현 및 퍼블리싱 작업","푸시알림 전송 및 예약 전송 개발","회사 관련 기사 보도자료 CRUD 구현 및 퍼블리싱 작업","음성광고 CRUD 구현 및 퍼블리싱 작업","DAU, MAU 데이터 시각화(차트) 작업 "],"techStacks":["React","JavaScript","Scss"]},{"name":"회사소개","descriptions":["반응형 웹으로 인디제이 회사소개 페이지 개발"],"startDate":"2024.05","endDate":"2024.06","which":["yarn berry 및 Zero install 세팅","Eslint & Prettier 적용","메인페이지 폭죽 애니메이션 css 구현","Infinite Carousel 구현","문의뱃지 Animation 및 퍼블리싱, 문의 api 연결","전체 UI & UX 개발"],"techStacks":["React","TypeScript","Emotion"],"url":"https://corp.indj.ai"}]},{"name":"인디제이 외주(CSbye)","department":"웹 프론트엔드","position":"Software Engineer","startDate":"2023.02","endDate":"2023.10","fold":true,"descriptions":["게임,소프트웨어 등등 CS, QA, 마케팅, 모니터링을 대신 해주는 서비스이다.","내부상담원을 통한 문의 및 환불 처리를 대신 해주는 작업을하고 일일,주간,월간 보고서를 제공해준다."],"projects":[{"name":"기업,상담원 관리자페이지 개발","descriptions":["기업관리자와 상담원관리자에서 필요한 기능 및 퍼블리싱 작업을 했습니다."],"startDate":"2022.08","endDate":"2024.07","which":["Chart.js 를 활용한 데이터 시각화 작업","Atomic 디자인 패턴을 활용한 컴포넌트 분리 및 재사용성 극대화","Axios instace를 사용하여 반복되는 코드를 개선 하였습니다.","Redux-toolkit 으로 사용자 정보 및 모달 상태를 분리하여 관리","TanStack Query(React Query)를 사용하여 캐싱관리 하여 문의(QnA) 데이터 처리 속도 향상","테이블안에 데이터를 react-export-excel로 엑셀파일로 변환하는 기능 구현","다국어 기능 구현","웹 안에서 유저에게 위치를 알려주기 위하여 BreadCrumbs 기능 구현","tailwind를 사용하여 퍼블리싱 작업"],"techStacks":["React","TypeScript","Redux","TailwindCss"],"url":"https://csbye.com"}]}]},"side":{"title":"사이드","list":[{"title":"이력서 및 블로그 사이트","techStacks":["React"],"url":"https://bobcost.site","descriptions":[{"title":"모노레포 커스터마이징","subTitle":["core에서의 package.json 수정","Seo컴포넌트 meta태그 수정"]},{"title":"GitAction으로 CI/CD 구축","subTitle":["node js.yml 파일 생성이후 github.io page 레포에 연결","main Branch Commit시에만 deploy"]},{"title":"도메인 생성 및 연결","subTitle":["도메인 구매 이후 DNS 설정 및 연결","deploy 할 때 마다 domain 변경방지로 static 파일 CNAME 도메인 추가"]}]}]},"skills":{"title":"기술","list":[{"title":"HTML/CSS","descriptions":[{"title":"Semantic Markup을 최대한 활용하여 구현할 수 있습니다.","subTitle":["HTML이 길어질 경우 Semantic Markup이 더욱 중요해지므로 최대한 활용하려고 노력하고 있습니다."]},{"title":"CSS를 통해서 여러 애니메이션을 구현할 수 있습니다.","subTitle":["Carousel Slide, Hover Animation 등등 필요한 애니메이션이 구현가능합니다."]},{"title":"CSS-in-JS 라이브러리를 사용할 수 있습니다.","subTitle":["Emotion 및 Styled Component를 활용한 프로젝트를 설계 할 수 있고, 구현이 가능합니다."]},{"title":"favicon, SEO 등의 적용 경험이 있습니다.","subTitle":["네이버, 구글등 Robot.txt를 통해 검색되도록 경험이 있습니다."]}]},{"title":"TypeScript","descriptions":[{"title":"TypeScript를 이용한 개발에 익숙합니다.","subTitle":["다양한 프로젝트 경험으로 React 코드 리딩 및 작성이 가능합니다."]}]},{"title":"JavaScript","descriptions":[{"title":"ES2015 이후의 JavaScript 문법에 익숙합니다.","subTitle":["JavaScript ES2015 이상의 문법을 수월하게 작성하거나 해석 할 수 있습니다."]},{"title":"Reduce, Map, Filter와 같은 고차함수를 적극적으로 사용합니다.","subTitle":[]},{"title":"비동기 작업을 하는데 익숙합니다. (promise, async await)","subTitle":[]}]},{"title":"SPA Framework (React)","descriptions":[{"title":"크거나 작은 규모의 웹 페이지를 개발할 수 있습니다.","subTitle":["모바일 웹앱, PC(반응형 웹), 관리자페이지 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]},{"title":"Redux, Zustand와 같은 상태 관리 라이브러리를 사용할 수 있습니다.","subTitle":["상태관리는 큰 규모의 프로젝트에 갈 경우 복잡해져 파일 및 폴더를 잘 정리하며 코드를 최적화 합니다."]},{"title":"Atomic Design으로 컴포넌트 분할을 하거나 프로젝트에 맞게 구조를 작성한 경험이 있습니다.","subTitle":[]},{"title":"axios 라이브러리를 활용하여 비동기 작업을 할 수 있습니다.","subTitle":[]}]},{"title":"DevOps","descriptions":[{"title":"Git Action으로 CI/CD 구축을 경험이 있습니다..","subTitle":["현재 이력서,블로그는 Git Action으로 CI/CD 구축을 통해 자동화 배포가 적용되어 있습니다."]},{"title":"AWS EC2, S3 등의 인프라 요소를 사용해본 경험이 있습니다.","subTitle":["EC2 인스턴스에 연결되어 있던 Nginx를 활용하여 웹페이지를 배포하며, S3를 통한 이미지, 음악 파일등을 저장하며 불러와서 사용했습니다."]},{"title":"Nginx를 통한 웹 서버를 배포한 경험이 있습니다.","subTitle":[]},{"title":"Telegram bot 등의 경험이 있습니다.","subTitle":["깃 커밋,푸쉬 등의 메세지 와 Error 메세지를 확인하는 봇을 만들었습니다."]}]},{"title":"그 외","descriptions":[{"title":"Git을 능숙하게 다룰 수 있습니다.","subTitle":["git flow, github flow 를 회사에서 적용해본 경험이 있습니다."]}]}]},"hobby":{"description":"취미","list":[{"title":"개발 블로깅","url":"https://bobcost.site","descriptions":["평소에도 글을 적는 것을 좋아하고 정리하는 것을 좋아해서","회고록, 개발, 트러블슈팅 등등 현재블로그, velog에 같이 정리하려고 합니다.","위의 제목을 누르면 제 블로그로 가실 수 있습니다!"]},{"title":"헬스","url":null,"descriptions":["헬스로 스트레스를 풀고 있습니다.","유산소 운동으로 좋은 체력을 유지하려고 하고있습니다."]},{"title":"코딩테스트 문제풀이","url":"https://github.com/KyoJin-Hwang/javascript-algorithm/tree/main/프로그래머스/0","descriptions":["알고리즘의 약한부분을 채워주는 느낌으로 풀고있다.","모르던 문제를 찾아보고 생각하면서 힘들게 풀면 성취감이 있다."]},{"title":"웹 탐방 및 만들기","url":null,"descriptions":["인터렉티브한 웹을 구경하며, 애니메이션을 보고 UI & UX를 참고합니다.","따라서 만들어 보고 싶은 것은 만들어 봅니다."]}]},"speaker":{"description":"발표","list":[{"title":"","url":null}]},"activities":{"description":"활동","list":[{"title":"","url":null}]},"lectures":{"description":"강연","list":[{"title":"","url":null}]},"awards":{"description":"수상","list":[{"title":"2022 K-Digital 해커톤 (우수상)","url":"https://okkyojin.notion.site/2022-K-87ebdffa5e584498844b9ef27189ceec"}]}}');function o(){return{profile:i,resume:n}}},9248:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var i=r(2784),n=r(2285),o=r(3919),a=r(8778),s=(0,o.Z)("div",{target:"e1x2ajq20"})("max-width:900px;width:100%;margin:4rem auto;box-sizing:border-box;padding:2rem 2rem;border-top:1px solid ",(function(e){return e.theme.colors.PRIMARY.ACCENT_2}),";&>p{margin-bottom:1.5rem;font-size:1.8rem;",(function(e){var t=e.theme;return(0,a.iv)("color:",t.colors.PRIMARY.FOREGROUND,";")}),";}&>a{border:none!important;outline:none!important;transition:none!important;background:none!important;&:hover{background:none!important;border-color:none!important;}}"),l=r(2322),c=function(){var e=(0,i.useRef)(null),t=(0,i.useState)({status:"pending"}),r=t[0],o=t[1];return(0,n.b6)((function(){var t,r,i;if(!((null!==(t=null===(r=e.current)||void 0===r?void 0:r.children)&&void 0!==t?t:[]).length>0)){var n=document.createElement("script");n.onload=function(){o({status:"success"})},n.onerror=function(){o({status:"failure"})},n.async=!0,n.src="https://utteranc.es/client.js",n.setAttribute("repo","Kyojin-Hwang/Kyojin-Hwang.github.io"),n.setAttribute("issue-term","title"),n.setAttribute("theme","github-light"),n.setAttribute("crossorigin","anonymous"),null===(i=e.current)||void 0===i||i.appendChild(n)}})),(0,l.jsxs)(s,{children:["success"!==r.status&&(0,l.jsx)(n.$j,{size:50}),(0,l.jsx)("div",{ref:e})]})},d=(r(5704),r(4541));var u=(0,o.Z)("section",{target:"e17f2jor1"})({name:"ufexmo",styles:"width:100%;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1rem;}"}),p=(0,o.Z)(u,{target:"e17f2jor0"})("width:calc(100vw - 400px);@media screen and (max-width: 1308px){width:calc(100vw - 408px);}@media screen and (max-width: 1024px){width:calc(100vw - 8px);}",(function(e){var t=e.theme;return(0,a.iv)("p>img{width:100%;}p{color:",t.colors.PRIMARY.ACCENT_8,";font-weight:400;line-height:1.6;letter-spacing:-0.02rem;}p,table,ul,blockquote,ol{font-size:1rem;}table,thead,th,td{border:1px solid;text-align:center;}th{font-weight:bold;}th,td{padding:10px;}center{color:",t.colors.PRIMARY.ACCENT_5,";font-size:0.8rem;font-weight:400;line-height:1.5;letter-spacing:-0.02rem;margin:0.5rem 0 2rem;}iframe+center{margin-top:-1rem;}h1,h2,h3,h4,h5{position:relative;color:",t.colors.PRIMARY.FOREGROUND,";line-height:1.2;scroll-margin-top:60px;letter-spacing:-0.02rem;font-weight:600;background:none;&>a{color:",t.colors.PRIMARY.FOREGROUND,";opacity:0;border:none;position:absolute;top:50%;left:0;transform:translate(-100%, -50%);padding-right:4px;}&:hover>a{color:",t.colors.PRIMARY.FOREGROUND,";background:none;border:none;opacity:1;}}h2:not(:first-of-type),h3:not(:first-of-type),h4:not(:first-of-type){margin-top:3rem;}h1,h2,h3,h4,h5{margin:0 0 1.25rem;}h1,h2{font-size:1.8rem;filter:brightness(1);}h3{font-size:1.4rem;filter:brightness(1.3);}h4{filter:brightness(1.5);font-size:1.1rem;padding-bottom:0.25rem;text-transform:uppercase;}ul,ol{padding-left:1.5rem;box-sizing:border-box;line-height:1.6;& ul{margin-top:8px;}& ul,& ol{margin-bottom:0;}}ul{list-style:disc;}ol{list-style:decimal;}ul li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",t.colors.SUCCESS.DEFAULT,";}}ol li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",t.colors.SUCCESS.DEFAULT,";}}li>a{white-space:inherit;word-wrap:break-word;}li{color:",t.colors.PRIMARY.FOREGROUND,";& code{font-weight:600;color:",t.colors.SUCCESS.DEFAULT,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}iframe{margin-bottom:10px;}div[class*='markdown-wrapper']{font-size:0.9rem;text-size-adjust:none;margin:1rem -1rem;overflow-x:auto;overflow-y:hidden;box-sizing:border-box;background-color:var(--scrollbar-background);padding-left:2rem;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;margin-bottom:2rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}pre{border-radius:0;float:left;margin-bottom:0;margin-top:0;min-width:calc(100% + 1rem);padding:1rem 1rem 1rem 0;-webkit-font-smoothing:subpixel-antialiased;overflow:initial;white-space:pre;font-family:var(--code-font-family);word-wrap:normal;hyphens:none;line-height:1.5;tab-size:2;word-break:normal;word-spacing:normal;&>code{font-weight:600;color:",t.colors.SUCCESS.DEFAULT,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}p>code{font-weight:600;color:",t.colors.SUCCESS.DEFAULT,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}img[class='gatsby-resp-image-image']{box-shadow:none!important;}img[class='gatsby-resp-image-image'][alt]:after{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;background:",t.colors.PRIMARY.BACKGROUND,";font-weight:200;content:'이미지를 표시할 수 없어요. :(';}blockquote{background:",t.colors.PRIMARY.ACCENT_2,";margin:0 -1rem;margin-bottom:2rem;padding:1rem 1rem;border-left:6px solid ",t.colors.SUCCESS.DEFAULT,";&>p{margin-bottom:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}")}),";"),m=function(e){var t=(0,d.useLocation)(),r=(0,i.useRef)(null),n=(0,i.useMemo)((function(){return e.html.replaceAll("<pre",'<div class="markdown-wrapper"><pre').replaceAll("</pre>","</pre></div>")}),[]);return(0,i.useEffect)((function(){var i,n,o=[];Array.from(null!==(i=null===(n=r.current)||void 0===n?void 0:n.getElementsByTagName("*"))&&void 0!==i?i:[]).filter((function(e){var t,r;return Number(null!==(t=null===(r=e.tagName)||void 0===r?void 0:r[1])&&void 0!==t?t:"999")<6})).forEach((function(e){if(!(e.getElementsByTagName("a").length>0)){var t=e.innerHTML.replaceAll(" ","-");o.push(t),e.innerHTML='\n          <a href="#'+t+'" aria-label="'+t+' permalink">\n            <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16" \n            stroke=\'currentColor\'\n            stroke-width=\'1\'\n            stroke-linecap=\'round\'\n            stroke-linejoin=\'round\'\n            fill=\'none\'\n            shape-rendering=\'geometricPrecision\'>\n              <path\n                fill-rule="evenodd" \n                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">\n              </path>\n            </svg>\n          </a>\n          '+e.innerHTML+"\n        ",e.id=t}})),e.setSearch(o),window.onload=function(){setTimeout((function(){var e,r,i=decodeURIComponent(t.hash).substring(1);i&&window.scrollTo(0,null!==(e=null===(r=document.getElementById(i))||void 0===r?void 0:r.getBoundingClientRect().bottom)&&void 0!==e?e:0)}))}}),[]),(0,l.jsx)("div",{children:(0,l.jsx)(p,{ref:r,dangerouslySetInnerHTML:{__html:n}})})},g=r(8447),h=r(5290);var f=(0,o.Z)("header",{target:"ebd5ed87"})({name:"1azakc",styles:"text-align:center"}),b=(0,o.Z)("div",{target:"ebd5ed86"})({name:"1j1kikd",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1.5rem 1rem;}"}),x=(0,o.Z)("div",{target:"ebd5ed85"})({name:"715507",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;@media screen and (max-width: 1024px){flex-direction:column-reverse;align-items:flex-start;justify-content:center;}"}),v=(0,o.Z)("div",{target:"ebd5ed84"})({name:"1u6n871",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start"}),w=(0,o.Z)("div",{target:"ebd5ed83"})({name:"1yvy03y",styles:"display:flex;gap:0.5rem;margin-bottom:1.5rem"}),R=(0,o.Z)("button",{target:"ebd5ed82"})("display:flex;justify-content:center;align-items:center;width:30px;height:30px;outline:none;border:none;border-radius:15px;cursor:pointer;padding:0;",(function(e){var t=e.theme;return(0,a.iv)("background:",t.colors.PRIMARY.FOREGROUND,";color:",t.colors.PRIMARY.BACKGROUND,";")}),";"),y=(0,o.Z)("div",{target:"ebd5ed81"})({name:"1cdt2kf",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;padding:0 1.5rem;&>h1{text-align:left;}"}),S=(0,o.Z)("div",{target:"ebd5ed80"})({name:"1d3w5wq",styles:"width:100%"}),C=function(e){var t=e.title,r=e.tags,i=e.date,o=e.author,a=e.timeToRead,s=e.children,c=(0,h.hK)(i),u=c[0],p=c[1],m=c[2],C=(0,d.useLocation)(),j=(0,n.e1)(),k=u+"년 "+Number(p)+"월 "+Number(m)+"일";return(0,l.jsx)(f,{children:(0,l.jsxs)(b,{children:[(0,l.jsxs)(y,{children:[(0,l.jsx)(n.xv,{as:"h1",size:40,weight:800,children:t}),(0,l.jsx)(n.LZ,{y:1}),r&&(0,l.jsx)(n.W2,{row:!0,wrap:"wrap",gap:.5,children:r.map((function(e){return(0,l.jsxs)(n.Ct,{size:"large",children:["#",e]},e)}))}),(0,l.jsx)(n.LZ,{y:1}),(0,l.jsxs)(x,{children:[(0,l.jsxs)(v,{children:[(0,l.jsxs)(n.xv,{size:16,as:"span",children:["Written by ",(0,l.jsx)(g.Link,{to:"/",children:o})]}),(0,l.jsx)(n.LZ,{y:.25}),(0,l.jsxs)(n.xv,{size:14,as:"span",children:[k," · ",a," min read"]})]}),(0,l.jsx)(w,{children:(0,l.jsx)(n.u,{text:"링크 복사",position:"top",children:(0,l.jsx)(R,{onClick:function(){(0,n.JG)(decodeURIComponent(C.href)),j.success("링크를 복사했습니다.")},children:(0,l.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,l.jsx)("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),(0,l.jsx)("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})})})]})]}),(0,l.jsx)(n.LZ,{y:1}),(0,l.jsx)(S,{children:s})]})})},j=r(4213);var k=(0,o.Z)("ol",{target:"e1k9d3a01"})({name:"1o02nna",styles:"padding-left:1.5rem;box-sizing:border-box;line-height:1.6;list-style:decimal"}),A=(0,o.Z)("li",{target:"e1k9d3a00"})((function(e){var t=e.theme,r=e.timeToRead;return(0,a.iv)("margin-bottom:0.5rem;&::marker{font-weight:600;color:",t.colors.SUCCESS.DEFAULT,";}&::after{content:'- ",r,"분';margin-left:0.2rem;font-size:0.8rem;}&>span{cursor:pointer;border-bottom:2px solid ",t.colors.SUCCESS.DEFAULT,";font-weight:600;text-decoration:none;color:",t.colors.PRIMARY.FOREGROUND,";transition:all 0.1s ease-out;&:hover{background:",t.colors.SUCCESS.DEFAULT,";border-top:2px solid ",t.colors.SUCCESS.DEFAULT,";color:",t.colors.PRIMARY.BACKGROUND,";}}")}),";"),E=function(e){var t=e.name,r=e.posts;return(0,l.jsx)(n.UO,{title:t,card:!0,size:"medium",subtitle:"시리즈의 글 ("+r.length+"개)",children:(0,l.jsx)(n.W2,{children:(0,l.jsx)(k,{children:r.map((function(e){return(0,l.jsx)(A,{timeToRead:e.timeToRead,children:(0,l.jsx)("span",{onClick:function(){return t=e.slug,void(0,g.navigate)(t);var t},children:e.name})},e.name)}))})})})},T=r(2177);var U=(0,o.Z)("div",{target:"e2gy39u7"})({name:"43apwz",styles:"position:fixed;right:0;top:8rem;width:300px;z-index:999;@media screen and (max-width: 1024px){display:none;}"}),D=(0,o.Z)("button",{target:"e2gy39u6"})("position:absolute;width:50px;height:24px;top:10px;right:20px;",(function(e){var t=e.theme;return(0,a.iv)("border:1px solid ",t.colors.PRIMARY.FOREGROUND,";background:",t.colors.SUCCESS.DEFAULT,";color:",t.colors.PRIMARY.FOREGROUND,";")})," cursor:pointer;font-weight:900;border-radius:20px;"),M=((0,o.Z)("i",{target:"e2gy39u5"})(""),(0,o.Z)("div",{target:"e2gy39u4"})("padding:40px 20px 20px;overflow-x:hidden;border-radius:20px;border:2px solid black;overscroll-behavior:contain;",(function(e){var t=e.theme;return(0,a.iv)("background:",t.colors.PRIMARY.ACCENT_1,";color:",t.colors.PRIMARY.BACKGROUND,";")}),";")),O=(0,o.Z)("ol",{target:"e2gy39u3"})({name:"1aivrxm",styles:"display:flex;flex-direction:column;max-height:400px;gap:10px"}),I=(0,o.Z)("li",{target:"e2gy39u2"})((function(e){var t=e.theme;return(0,a.iv)("color:",t.colors.PRIMARY.FOREGROUND,";")}),";"),N=(0,o.Z)("a",{target:"e2gy39u1"})({name:"1gi78py",styles:"display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%"}),L=(0,o.Z)("button",{target:"e2gy39u0"})("position:absolute;width:24px;height:24px;top:10px;right:20px;",(function(e){var t=e.theme;return(0,a.iv)("border:1px solid ",t.colors.PRIMARY.FOREGROUND,";background:",t.colors.PRIMARY.BACKGROUND,";color:",t.colors.PRIMARY.FOREGROUND,";")})," cursor:pointer;font-weight:700;border-radius:20px;"),P=function(e){var t=(0,i.useState)(window.scrollY),r=t[0],n=t[1],o=(0,i.useState)(!1),a=o[0],s=o[1],c=(0,i.useState)(!0),d=c[0],u=c[1],p=(0,i.useCallback)((function(){n(window.scrollY)}),[]);return(0,i.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[p]),(0,i.useEffect)((function(){u(!(r>=682))}),[r]),(0,l.jsx)(U,{children:d?null:a?(0,l.jsxs)(M,{fold:!0,children:[(0,l.jsx)(L,{onClick:function(){return s(!1)},children:"X"}),(0,l.jsx)(O,{fold:!0,children:e.name.map((function(e){var t=e.replace(/<\/?code>/g,"").replace(/-/g," ").replace(/<\/?strong>/g,"");return(0,l.jsx)(I,{children:(0,l.jsx)(N,{href:"#"+e,"aria-label":e,children:t})})}))})]}):(0,l.jsx)(D,{fold:!0,onClick:function(){return s(!0)},children:"Menu"})})},Z=function(e){var t=(0,T.Z)().profile,r=e.data.allMarkdownRemark,n=r.nodes,o=r.group,a=e.data.markdownRemark,s=a.timeToRead,d=a.html,u=e.data.markdownRemark.frontmatter,p=u.title,g=u.date,h=u.image,f=u.tags,b=u.series,x=(0,i.useState)([""]),v=x[0],w=x[1],R=(0,i.useState)(!1),y=R[0],S=R[1],k=(0,i.useCallback)((function(){return n.filter((function(e){return e.frontmatter.series})).filter((function(e){return e.frontmatter.series===b})).map((function(e){return{name:e.frontmatter.title,timeToRead:e.timeToRead,slug:e.fields.slug}}))}),[e.data]);return(0,i.useEffect)((function(){S(!0)}),[v]),(0,l.jsxs)("div",{children:[(0,l.jsx)(j.p,{name:p,image:null==h?void 0:h.publicURL,isPost:!0}),(0,l.jsx)(C,{title:p,date:g,image:null==h?void 0:h.publicURL,tags:f,timeToRead:s,author:t.author,children:b&&o&&(0,l.jsx)(E,{name:b,posts:k()})}),(0,l.jsx)(m,{html:d,setSearch:w}),y&&(0,l.jsx)(P,{name:v}),(0,l.jsx)("section",{id:"comments"}),(0,l.jsx)(c,{})]})}}}]);
//# sourceMappingURL=component---src-template-post-tsx-f0f1b1b80131b8dc7c91.js.map