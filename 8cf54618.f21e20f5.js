(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=o,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||a;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=(n(0),n(169));const a={title:"Publishing to the Workshop"},i={unversionedId:"publishing-to-the-workshop",id:"publishing-to-the-workshop",isDocsHomePage:!1,title:"Publishing to the Workshop",description:'Isaac mods are published to the Steam Workshop, which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe.',source:"@site/docs/publishing-to-the-workshop.md",slug:"/publishing-to-the-workshop",permalink:"/docs/publishing-to-the-workshop",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/publishing-to-the-workshop.md",version:"current",sidebar:"docs",previous:{title:"Converting Lua Code",permalink:"/docs/converting-lua-code"},next:{title:"Gotchas",permalink:"/docs/gotchas"}},l=[{value:"<code>metadata.vdf</code>",id:"metadatavdf",children:[]},{value:"<code>.env</code>",id:"env",children:[]}],c={rightToc:l};function p({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Isaac mods are published to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://steamcommunity.com/app/250900/workshop/"}),"Steam Workshop"),', which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at ',Object(r.b)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe"),"."),Object(r.b)("p",null,"However, for large mods, there are often other tasks that need to be performed before pushing the files to the Steam Workshop. ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," contains a ",Object(r.b)("inlineCode",{parentName:"p"},"publish")," command that may be useful to you. It will perform the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Update all NPM dependencies (e.g. in the "package.json" file)'),Object(r.b)("li",{parentName:"ul"},'Bump the version in the "src/constants.ts" file (if it exists).',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It looks for a line that looks something like ",Object(r.b)("inlineCode",{parentName:"li"},'export const VERSION = "v1.0.0";'),"."))),Object(r.b)("li",{parentName:"ul"},'Bump the version in the "mod/metadata.xml" file.'),Object(r.b)("li",{parentName:"ul"},'Bump the version in the "mod/version.txt" file.'),Object(r.b)("li",{parentName:"ul"},"Compile the TypeScript."),Object(r.b)("li",{parentName:"ul"},'Run the Python script located at "scripts/publish_pre_copy.py" (if it exists).'),Object(r.b)("li",{parentName:"ul"},'Copy everything from the source mod directory to the destination mod directory (i.e. "project/mod" --\x3e "mods/project").'),Object(r.b)("li",{parentName:"ul"},'Run the Python script located at "scripts/publish_post_copy.py" (if it exists).'),Object(r.b)("li",{parentName:"ul"},"Commit all changes in Git and push."),Object(r.b)("li",{parentName:"ul"},'Run "steamcmd.exe" to automatically publish the new version of the mod to the Steam Workshop.',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The mod must already be published to the Steam Workshop for this to work.")))),Object(r.b)("p",null,"Furthermore, run ",Object(r.b)("inlineCode",{parentName:"p"},"npx isaacscript publish --help")," to see additional flags that may be passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"publish")," command."),Object(r.b)("br",null),Object(r.b)("h3",{id:"metadatavdf"},Object(r.b)("inlineCode",{parentName:"h3"},"metadata.vdf")),Object(r.b)("p",null,"In order for ",Object(r.b)("inlineCode",{parentName:"p"},"steamcmd.exe")," to work, you must create a file called ",Object(r.b)("inlineCode",{parentName:"p"},"metadata.vdf")," next to your ",Object(r.b)("inlineCode",{parentName:"p"},"metadata.xml")," that contains the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vdf"}),'"workshopitem"\n{\n  "appid" "250900"\n  "publishedfileid" "[your mod ID]"\n  "contentfolder" "C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\[your mod name]"\n}\n')),Object(r.b)("br",null),Object(r.b)("h3",{id:"env"},Object(r.b)("inlineCode",{parentName:"h3"},".env")),Object(r.b)("p",null,"In order for ",Object(r.b)("inlineCode",{parentName:"p"},"steamcmd.exe")," to work, it needs your Steam username and password. Create a file called ",Object(r.b)("inlineCode",{parentName:"p"},".env")," in the root of your project that contains the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'STEAM_USERNAME="[your username]"\nSTEAM_PASSWORD="[your password]"\n')),Object(r.b)("p",null,"Make sure that there is an entry for the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file in your ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore"),", because you (obviously) don't want to upload this to GitHub/GitLab. (This entry will be there by default for mods created with ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript init"),".)"))}p.isMDXComponent=!0}}]);