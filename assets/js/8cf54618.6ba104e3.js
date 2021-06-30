(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[786],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1136:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={title:"Publishing to the Workshop"},p=void 0,s={unversionedId:"publishing-to-the-workshop",id:"publishing-to-the-workshop",isDocsHomePage:!1,title:"Publishing to the Workshop",description:'Isaac mods are published to the Steam Workshop, which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe.',source:"@site/docs/publishing-to-the-workshop.md",sourceDirName:".",slug:"/publishing-to-the-workshop",permalink:"/docs/publishing-to-the-workshop",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/publishing-to-the-workshop.md",version:"current",frontMatter:{title:"Publishing to the Workshop"},sidebar:"sidebar",previous:{title:"Updating IsaacScript",permalink:"/docs/updating-isaacscript"},next:{title:"Gotchas",permalink:"/docs/gotchas"}},c=[{value:"<code>metadata.vdf</code>",id:"metadatavdf",children:[]},{value:"<code>.env</code>",id:"env",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Isaac mods are published to the ",(0,a.kt)("a",{parentName:"p",href:"https://steamcommunity.com/app/250900/workshop/"},"Steam Workshop"),', which allows others to easily download them. This is accomplished by running the "ModUploader.exe" tool provided with the game, which is located at ',(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\tools\\ModUploader.exe"),"."),(0,a.kt)("p",null,"However, for large mods, there are often other tasks that need to be performed before pushing the files to the Steam Workshop. ",(0,a.kt)("inlineCode",{parentName:"p"},"isaacscript")," contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," command that may be useful to you. It will perform the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Update all NPM dependencies (e.g. in the "package.json" file)'),(0,a.kt)("li",{parentName:"ul"},'Bump the version in the "src/constants.ts" file (if it exists).',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It looks for a line that looks something like ",(0,a.kt)("inlineCode",{parentName:"li"},'export const VERSION = "v1.0.0";'),"."))),(0,a.kt)("li",{parentName:"ul"},'Bump the version in the "mod/metadata.xml" file.'),(0,a.kt)("li",{parentName:"ul"},'Bump the version in the "mod/version.txt" file.'),(0,a.kt)("li",{parentName:"ul"},"Compile the TypeScript."),(0,a.kt)("li",{parentName:"ul"},'Run the Python script located at "scripts/publish_pre_copy.py" (if it exists).'),(0,a.kt)("li",{parentName:"ul"},'Copy everything from the source mod directory to the destination mod directory (i.e. "project/mod" --\x3e "mods/project").'),(0,a.kt)("li",{parentName:"ul"},'Run the Python script located at "scripts/publish_post_copy.py" (if it exists).'),(0,a.kt)("li",{parentName:"ul"},"Commit all changes in Git and push."),(0,a.kt)("li",{parentName:"ul"},'Run "steamcmd.exe" to automatically publish the new version of the mod to the Steam Workshop.',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The mod must already be published to the Steam Workshop for this to work.")))),(0,a.kt)("p",null,"Furthermore, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx isaacscript publish --help")," to see additional flags that may be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," command."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"metadatavdf"},(0,a.kt)("inlineCode",{parentName:"h3"},"metadata.vdf")),(0,a.kt)("p",null,"In order for ",(0,a.kt)("inlineCode",{parentName:"p"},"steamcmd.exe")," to work, you must create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.vdf")," next to your ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.xml")," that contains the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vdf"},'"workshopitem"\n{\n  "appid" "250900"\n  "publishedfileid" "[your mod ID]"\n  "contentfolder" "C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\[your mod name]"\n}\n')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"env"},(0,a.kt)("inlineCode",{parentName:"h3"},".env")),(0,a.kt)("p",null,"In order for ",(0,a.kt)("inlineCode",{parentName:"p"},"steamcmd.exe")," to work, it needs your Steam username and password. Create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," in the root of your project that contains the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'STEAM_USERNAME="[your username]"\nSTEAM_PASSWORD="[your password]"\n')),(0,a.kt)("p",null,"Make sure that there is an entry for the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),", because you (obviously) don't want to upload this to GitHub/GitLab. (This entry will be there by default for mods created with ",(0,a.kt)("inlineCode",{parentName:"p"},"isaacscript init"),".)"))}m.isMDXComponent=!0}}]);