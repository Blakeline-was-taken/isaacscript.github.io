(window.webpackJsonp=window.webpackJsonp||[]).push([[10,27],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(169),o=n(194),l=n(21),i=n(248),s=n(2),u=n(197),m=n(201),d=n(352),p=n(345),b=n(349),f=n(350),h=n(351),y=n(348),g=n(208),O=n(266),E=n(61),v=n.n(E);const k=(e,t)=>"link"===e.type?Object(d.a)(e.href,t):"category"===e.type&&e.items.some((e=>k(e,t)));function j({item:e,onItemClick:t,collapsible:n,activePath:c,...o}){const{items:l,label:i}=e,m=k(e,c),d=function(e){const t=Object(a.useRef)(e);return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[p,b]=Object(a.useState)((()=>!!n&&(!m&&e.collapsed)));Object(a.useEffect)((()=>{m&&!d&&p&&b(!1)}),[m,d,p]);const f=Object(a.useCallback)((e=>{e.preventDefault(),b((e=>!e))}),[b]);return 0===l.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":p}),key:i},r.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&m,[v.a.menuLinkText]:!n}),onClick:n?f:void 0,href:n?"#!":void 0},o),i),r.a.createElement("ul",{className:"menu__list"},l.map((e=>r.a.createElement(C,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:n,activePath:c})))))}function w({item:e,onItemClick:t,activePath:n,collapsible:a,...c}){const{href:o,label:l}=e,i=k(e,n);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(g.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":i}),to:o},Object(O.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),l))}function C(e){switch(e.item.type){case"category":return r.a.createElement(j,e);case"link":default:return r.a.createElement(w,e)}}var N=function({path:e,sidebar:t,sidebarCollapsible:n=!0}){const[c,l]=Object(a.useState)(!1),{navbar:{title:i,hideOnScroll:d}}=Object(m.a)(),{isClient:O}=Object(o.a)(),{logoLink:E,logoLinkProps:k,logoImageUrl:j,logoAlt:w}=Object(h.a)(),{isAnnouncementBarClosed:N}=Object(p.a)(),{scrollY:_}=Object(y.a)();Object(b.a)(c);const P=Object(f.a)();return Object(a.useEffect)((()=>{P===f.b.desktop&&l(!1)}),[P]),r.a.createElement("div",{className:Object(u.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:d})},d&&r.a.createElement(g.a,Object(s.a)({tabIndex:-1,className:v.a.sidebarLogo,to:E},k),null!=j&&r.a.createElement("img",{key:O,src:j,alt:w}),null!=i&&r.a.createElement("strong",null,i)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",v.a.menu,{"menu--show":c,[v.a.menuWithAnnouncementBar]:!N&&0===_})},r.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{l(!c)}},c?r.a.createElement("span",{className:Object(u.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(C,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),l(!1)},collapsible:n,activePath:e}))))))},_=n(305),P=(n(62),n(63)),I=n.n(P);var x=e=>function({id:t,...n}){const{navbar:{hideOnScroll:a}}=Object(m.a)();return t?r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[I.a.enhancedAnchor]:!a}),id:t}),n.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):r.a.createElement(e,n)},T=n(64),M=n.n(T);var B={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(_.a,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(g.a,e),pre:e=>r.a.createElement("div",Object(s.a)({className:M.a.mdxCodeBlock},e)),h1:x("h1"),h2:x("h2"),h3:x("h3"),h4:x("h4"),h5:x("h5"),h6:x("h6")},L=n(344),S=n(251),R=n(65),U=n.n(R),D=n(353);function A({currentDocRoute:e,versionMetadata:t,children:n}){var a,l;const{siteConfig:s,isClient:u}=Object(o.a)(),{pluginId:m,permalinkToSidebar:d,docsSidebars:p,version:b}=t,f=d[e.path],h=p[f];return r.a.createElement(i.a,{key:u,searchMetadatas:{version:b,tag:Object(D.b)(m,b)}},r.a.createElement("div",{className:U.a.docPage},h&&r.a.createElement("div",{className:U.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{key:f,sidebar:h,path:e.path,sidebarCollapsible:null===(a=null===(l=s.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===a||a})),r.a.createElement("main",{className:U.a.docMainContainer},r.a.createElement(c.a,{components:B},n))))}t.default=function(e){const{route:{routes:t},versionMetadata:n,location:a}=e,c=t.find((e=>Object(S.matchPath)(a.pathname,e)));return c?r.a.createElement(A,{currentDocRoute:c,versionMetadata:n},Object(l.a)(t)):r.a.createElement(L.default,e)}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,b=m["".concat(o,".").concat(p)]||m[p]||d[p]||c;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n(268),r=n.n(a);function c(){if(window.location.hash.startsWith("#src=")){const e=window.location.hash.replace("#src=","").trim();return decodeURIComponent(e)}if(window.location.hash.startsWith("#code/")){const e=window.location.hash.replace("#code/","").trim();return r.a.decompressFromEncodedURIComponent(e)||""}return"// Declare exposed API\ntype Vector = [number, number, number];\n\ndeclare function findUnitsInRadius(this: void, center: Vector, radius: number): Unit[];\ndeclare interface Unit {\n    isEnemy(other: Unit): boolean;\n    kill(): void;\n}\n\n\n// Use declared API in code\nfunction onAbilityCast(this: void, caster: Unit, targetLocation: Vector) {\n    const units = findUnitsInRadius(targetLocation, 500);\n    const enemies = units.filter(unit => caster.isEnemy(unit));\n\n    for (const enemy of enemies) {\n        enemy.kill();\n    }\n}\n"}function o(e){const t="code/"+r.a.compressToEncodedURIComponent(e);window.history.replaceState({},"","#"+t)}function l(e){return"/play/#code/"+r.a.compressToEncodedURIComponent(e)}},305:function(e,t,n){"use strict";var a=n(2),r=n(208),c=n(194),o=n(237),l=n(303),i=n.n(l),s=n(354),u=n.n(s),m=n(355),d=n.n(m),p=n(419),b=n(356),f=n(0),h=n.n(f),y=n(252),g=n(306),O=n.n(g);t.a=({children:e,className:t,metastring:n=""})=>{const{siteConfig:{themeConfig:{prism:l={}}}}=Object(c.a)(),{prismTheme:s,mounted:m}=function(e){const[t,n]=Object(f.useState)(!1);Object(f.useEffect)((()=>{n(!0)}),[]);const{isDarkTheme:a}=Object(o.a)(),r=e.theme||b.a,c=e.darkTheme||r;return{prismTheme:a?c:r,mounted:t}}(l),{showCopied:g,handleCopyCode:E,target:v,button:k}=function(){const e=Object(f.useRef)(null),t=Object(f.useRef)(null),[n,a]=Object(f.useState)(!1);return Object(f.useEffect)((()=>{let n;return t.current&&(n=new u.a(t.current,{target:()=>e.current})),()=>{n&&n.destroy()}}),[t.current,e.current]),{showCopied:n,handleCopyCode:()=>{window.getSelection().empty(),a(!0),setTimeout((()=>a(!1)),2e3)},target:e,button:t}}(),j=e.trim(),[,w]=n.match(/title=(.+)( |$)/)||[],[,C]=n.match(/{([\d,-]+)}/)||[],N=null!=C?d.a.parse(C).filter((e=>e>0)):[];let _=t&&t.replace(/language-/,"");!_&&l.defaultLanguage&&(_=l.defaultLanguage);const P="ts"===_||"typescript"===_;return h.a.createElement(p.a,Object(a.a)({},p.b,{key:m,theme:s,code:j,language:_}),(({className:e,style:t,tokens:n,getLineProps:c,getTokenProps:o})=>h.a.createElement(h.a.Fragment,null,w&&h.a.createElement("div",{className:O.a.title},w),h.a.createElement("pre",{className:i()(e,O.a.codeBlock,w&&O.a.hasTitle)},h.a.createElement("button",{ref:k,type:"button","aria-label":"Copy code to clipboard",className:O.a.copyButton,onClick:E},g?"Copied":"Copy"),P&&h.a.createElement(r.a,{"aria-label":"Open code on playground",className:O.a.playgroundButton,to:Object(y.b)(j),target:"_blank"},"Playground"),h.a.createElement("code",{ref:v,className:O.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=c({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),h.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>h.a.createElement("span",Object(a.a)({key:t},o({token:e,key:t}))))))})))))))}},306:function(e,t,n){e.exports={codeBlock:"codeBlock_222H",hasTitle:"hasTitle_1PmY",title:"title_1twf",codeBlockLines:"codeBlockLines_3zpG",copyButton:"copyButton_ujp3",playgroundButton:"playgroundButton_3DKR"}},344:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(248);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);