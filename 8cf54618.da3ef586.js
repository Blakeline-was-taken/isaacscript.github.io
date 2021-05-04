(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{173:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(a,".").concat(d)]||u[d]||h[d]||i;return r?n.a.createElement(m,c(c({ref:t},p),{},{components:r})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var o=r(2),n=(r(0),r(173));const i={title:"Publishing to the Workshop"},a={unversionedId:"publishing-to-the-workshop",id:"publishing-to-the-workshop",isDocsHomePage:!1,title:"Publishing to the Workshop",description:'Isaac mods are published to the Steam Workshop, which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe.',source:"@site/docs/publishing-to-the-workshop.md",slug:"/publishing-to-the-workshop",permalink:"/docs/publishing-to-the-workshop",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/publishing-to-the-workshop.md",version:"current",sidebar:"docs",previous:{title:"JavaScript/TypeScript Tutorial",permalink:"/docs/javascript-tutorial"},next:{title:"Gotchas",permalink:"/docs/gotchas"}},c=[],l={rightToc:c};function p({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,'Isaac mods are published to the Steam Workshop, which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at ',Object(n.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe"),"."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"isaacscript")," contains a ",Object(n.b)("inlineCode",{parentName:"p"},"--publish")," flag that may be useful for releasing a new version of your mod. It will perform the following steps:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Update all NPM dependencies (e.g. in the "package.json" file)'),Object(n.b)("li",{parentName:"ul"},'Bump the version in the "src/constants.ts" file.'),Object(n.b)("li",{parentName:"ul"},'Bump the version in the "mod/metadata.xml" file.'),Object(n.b)("li",{parentName:"ul"},'Bump the version in the "mod/version.txt" file.'),Object(n.b)("li",{parentName:"ul"},"Compile the TypeScript."),Object(n.b)("li",{parentName:"ul"},'Copy everything from the source mod directory to the destination mod directory (i.e. "project/mod" --\x3e "Binding of Isaac: Afterbirth+ Mods/project").'),Object(n.b)("li",{parentName:"ul"},"Commit all changes in Git and push."),Object(n.b)("li",{parentName:"ul"},'Open the "ModUploader.exe" file with a working directory of the destination mod directory.')))}p.isMDXComponent=!0}}]);