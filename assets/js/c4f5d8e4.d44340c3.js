"use strict";(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[195],{8066:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(7462),o=n(7294),r=n(6010),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(7410).default,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=s({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=s({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=s({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?s({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=s({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?s({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),i(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],i=[c];l>-1;){for(;(r=a[l]++)<o[l];){var s=void 0,d=t[l],y=n[l][r];if("string"==typeof y?(d=l>0?d:["plain"],s=y):(d=p(d,y.type),y.alias&&(d=p(d,y.alias)),s=y.content),"string"==typeof s){var g=s.split(u),h=g.length;c.push({types:d,content:g[0]});for(var f=1;f<h;f++)m(c),i.push(c=[]),c.push({types:d,content:g[f]})}else l++,t.push(d),n.push(s),a.push(0),o.push(s.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return m(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),h=g,f=n(5979);var v=n(5999),b="copyButton_eDfN",E="copyButtonCopied_ljy5",k="copyButtonIcons_W9eQ",N="copyButtonIcon_XEyF",T="copyButtonSuccessIcon_i9w9";function Z(e){var t=e.code,n=(0,o.useState)(!1),a=n[0],l=n[1],c=(0,o.useRef)(void 0),i=(0,o.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),a.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),c&&(l.removeAllRanges(),l.addRange(c)),r&&r.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,o.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),o.createElement("button",{type:"button","aria-label":a?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)(b,"clean-btn",a&&E),onClick:i},o.createElement("span",{className:k,"aria-hidden":"true"},o.createElement("svg",{className:N,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:T,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var _="codeBlockContainer_I0IT",B="codeBlockContent_wNvx",w="codeBlockTitle_BvAR",L="codeBlock_jd64",I="codeBlockStandalone_csWH",S="codeBlockLines_mRuA";function x(e){var t,n=e.children,l=e.className,i=void 0===l?"":l,s=e.metastring,u=e.title,m=e.language,p=(0,f.LU)().prism,d=(0,o.useState)(!1),y=d[0],g=d[1];(0,o.useEffect)((function(){g(!0)}),[]);var v=(0,f.bc)(s)||u,b=(0,f.pJ)();if(o.Children.toArray(n).some((function(e){return(0,o.isValidElement)(e)})))return o.createElement(h,(0,a.Z)({},c,{key:String(y),theme:b,code:"",language:"text"}),(function(e){var t=e.className,a=e.style;return o.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,I,"thin-scrollbar",_,i,f.kM.common.codeBlock),style:a},o.createElement("code",{className:S},n))}));var E=Array.isArray(n)?n.join(""):n,k=null!=(t=null!=m?m:(0,f.Vo)(i))?t:p.defaultLanguage,N=(0,f.nZ)(E,s,k),T=N.highlightLines,x=N.code;return o.createElement(h,(0,a.Z)({},c,{key:String(y),theme:b,code:x,language:null!=k?k:"text"}),(function(e){var t,n=e.className,l=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.createElement("div",{className:(0,r.Z)(_,i,(t={},t["language-"+k]=k&&!i.includes("language-"+k),t),f.kM.common.codeBlock)},v&&o.createElement("div",{style:l,className:w},v),o.createElement("div",{className:B,style:l},o.createElement("pre",{tabIndex:0,className:(0,r.Z)(n,L,"thin-scrollbar")},o.createElement("code",{className:S},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return T.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,a.Z)({key:t},u({token:e,key:t})))})),o.createElement("br",null))})))),o.createElement(Z,{code:x})))}))}},9335:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(9960),o=n(4996),r=n(2263),l=n(8066),c=n(2600),i=n(6010),s=n(7294),u=n(7462),m="features_xdhU",p=[{title:"The Entire Isaac API, Strongly Typed",img:"img/items/magic-mushroom.png",description:s.createElement(s.Fragment,null,s.createElement("li",null,"Code fearlessly without having to worry about making a typo."),s.createElement("li",null,"Mouseover functions to see what they do, saving you from opening the docs."))},{title:"Powered by TypeScriptToLua",img:"img/typescript-to-lua.png",description:s.createElement(s.Fragment,null,s.createElement("li",null,"IsaacScript leverages the excellent"," ",s.createElement("a",{href:"https://typescripttolua.github.io/"},"TypeScriptToLua")," ","library."),s.createElement("li",null,"All of your favorite TypeScript features will be automatically transpiled to Lua."))}];function d(e){var t=e.title,n=e.img,a=e.description;return s.createElement("div",{className:(0,i.Z)("col col--6")},s.createElement("div",{className:"text--center"},s.createElement("img",{src:(0,o.Z)(n),style:{height:"7.5em",width:"7.5em"},alt:t})),s.createElement("div",{className:"padding-horiz--md"},s.createElement("h3",{className:"text--center"},t),s.createElement("p",null,a)))}function y(){return s.createElement("section",{className:m},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},p.map((function(e,t){return s.createElement(d,(0,u.Z)({key:t},e))})))))}var g={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function h(){var e=(0,r.Z)().siteConfig;return s.createElement("header",{className:(0,i.Z)("hero hero--primary",g.heroBanner)},s.createElement("div",{className:"container"},s.createElement("img",{src:(0,o.Z)("img/isaacscript-logo.png"),className:"landing-logo"}),s.createElement("h1",{className:"hero__title"},e.title),s.createElement("p",{className:"hero__subtitle"},"Write ",s.createElement("em",null,"Binding of Isaac: Repentance")," mods with TypeScript"),s.createElement("div",{className:g.buttons},s.createElement(a.Z,{className:(0,i.Z)("button button--outline button--secondary button--lg landing-button",g.getStarted),to:(0,o.Z)("docs/features")},"Why should I?"),s.createElement(a.Z,{className:(0,i.Z)("button button--outline button--secondary button--lg landing-button",g.getStarted),to:(0,o.Z)("docs/getting-started")},"Get Started"))))}var f="\nconst entities = Isaac.GetRoomEntities();\nconst deadEntities = entities.filter((entity) => entity.IsDead());\n".trim(),v="\nlocal entities = Isaac.GetRoomEntities()\nlocal deadEntities = {}\nfor _, entity in ipairs(entities) do\n   if entity:IsDead() then\n      table.insert(deadEntities, entity)\n   end\nend\n".trim();function b(){var e={textAlign:"center"};return s.createElement(c.Z,{description:"A framework for coding mods for The Binding of Isaac: Repentance"},s.createElement(h,null),s.createElement("br",null),s.createElement("br",null),s.createElement("main",null,s.createElement("section",{className:"padding-vert--md container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col col--6 "+g.example},s.createElement("h3",{style:e},"TypeScript Input"),s.createElement(l.Z,{className:"typescript"},f)),s.createElement("div",{className:"col col--6 "+g.example},s.createElement("h3",{style:e},"Lua Output"),s.createElement(l.Z,{className:"lua"},v)))),s.createElement(y,null)))}}}]);