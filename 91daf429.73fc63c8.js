(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{169:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return d}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(i),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||a;return i?r.a.createElement(d,l(l({ref:t},s),{},{components:i})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},71:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return s}));var n=i(2),r=(i(0),i(169));const a={title:"What is IsaacScript Doing?"},o={unversionedId:"what-is-isaacscript-doing",id:"what-is-isaacscript-doing",isDocsHomePage:!1,title:"What is IsaacScript Doing?",description:"The isaacscript program will run forever, monitoring for changes in your project. In summary, it will:",source:"@site/docs/what-is-isaacscript-doing.md",slug:"/what-is-isaacscript-doing",permalink:"/docs/what-is-isaacscript-doing",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/what-is-isaacscript-doing.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Project Directory Structure",permalink:"/docs/directory-structure"}},l=[{value:"Confirm That Auto-Mod-Reloading Works",id:"confirm-that-auto-mod-reloading-works",children:[]},{value:"Confirm That File Cloning Works",id:"confirm-that-file-cloning-works",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," program will run forever, monitoring for changes in your project. In summary, it will:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"automatically recompile your TypeScript"),Object(r.b)("li",{parentName:"ol"},"automatically copy over any files in the ",Object(r.b)("inlineCode",{parentName:"li"},"mod")," directory"),Object(r.b)("li",{parentName:"ol"},"automatically refresh your mod in-game (with the ",Object(r.b)("inlineCode",{parentName:"li"},"luamod")," console command)")),Object(r.b)("p",null,"As a new user, you might want to confirm that each of these functions is working properly as a way to get familiar with the program."),Object(r.b)("br",null),Object(r.b)("h3",{id:"confirm-that-auto-mod-reloading-works"},"Confirm That Auto-Mod-Reloading Works"),Object(r.b)("p",null,"The moment that you save a TypeScript file, ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," will detect that something has changed, and it will automatically perform the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isaacscript")," will re-compile your TypeScript project using ",Object(r.b)("inlineCode",{parentName:"li"},"tstl"),", the TypeScriptToLua tool."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tstl")," will spit out a file called ",Object(r.b)("inlineCode",{parentName:"li"},"main.lua")," in your project's ",Object(r.b)("inlineCode",{parentName:"li"},"mod")," folder. (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\mod\\main.lua"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isaacscript")," will copy this file to the ",Object(r.b)("inlineCode",{parentName:"li"},"mods")," directory. (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\revelations\\main.lua"),")"),Object(r.b)("li",{parentName:"ul"},"If you have the game open and are in a run, ",Object(r.b)("inlineCode",{parentName:"li"},"isaacscript")," will then send a message to a helper mod called ",Object(r.b)("inlineCode",{parentName:"li"},"isaacscript-watcher"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isaacscript-watcher")," will run the ",Object(r.b)("inlineCode",{parentName:"li"},"luamod")," console command corresponding to your project. (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"luamod revelations"),")"),Object(r.b)("li",{parentName:"ul"},"After the ",Object(r.b)("inlineCode",{parentName:"li"},"luamod")," command is executed, your mod has been reloaded - it is now ready to test!"),Object(r.b)("li",{parentName:"ul"},"If compilation failed for any reason, then you will be able to see the errors on both the ",Object(r.b)("inlineCode",{parentName:"li"},"isaacscript")," console window and in-game. (The ",Object(r.b)("inlineCode",{parentName:"li"},"isaacscript-watcher")," mod will draw it on the screen for you.)")),Object(r.b)("p",null,"Note that ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," will automatically install the ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript-watcher")," helper mod for you, so you don't have to do anything. Just test to see that it works:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Make sure that ",Object(r.b)("inlineCode",{parentName:"li"},"isaacscript")," is running in a shell."),Object(r.b)("li",{parentName:"ol"},"In-game, go into a run."),Object(r.b)("li",{parentName:"ol"},"In VSCode, add something new to your ",Object(r.b)("inlineCode",{parentName:"li"},"main.ts")," file, like:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'print("hello world");\n')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In VSCode, save the file."),Object(r.b)("li",{parentName:"ol"},"In game, you should see text appear on the screen ."),Object(r.b)("li",{parentName:"ol"},"In game, press ",Object(r.b)("code",null,"`"),' to open the console and see if your "hello world" message is printed there.')),Object(r.b)("br",null),Object(r.b)("h3",{id:"confirm-that-file-cloning-works"},"Confirm That File Cloning Works"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," will automatically sync the contents of the ",Object(r.b)("inlineCode",{parentName:"p"},"mod")," directory in your project to the corresponding folder in ",Object(r.b)("inlineCode",{parentName:"p"},"mods"),"."),Object(r.b)("p",null,"For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Say that you have a project directory of: ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\")),Object(r.b)("li",{parentName:"ul"},"Then, inside your project mod folder, you make some new subdirectories: ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\mod\\resources\\gfx\\items\\collectibles\\"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"(This is the directory that you are supposed to put graphics files in for new modded items.)"))),Object(r.b)("li",{parentName:"ul"},"Next, you put a new file in that directory: ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Repositories\\revelations\\mod\\resources\\gfx\\items\\collectibles\\collectibles_new_item.png")),Object(r.b)("li",{parentName:"ul"},"Now, ",Object(r.b)("inlineCode",{parentName:"li"},"isaacscript")," automatically copies the ",Object(r.b)("inlineCode",{parentName:"li"},"collectibles_new_item.png")," file to: ",Object(r.b)("inlineCode",{parentName:"li"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\mods\\revelations\\resources\\gfx\\items\\collectibles\\collectibles_new_item.png"))),Object(r.b)("p",null,"For now, just put something in your mod folder and confirm that ",Object(r.b)("inlineCode",{parentName:"p"},"isaacscript")," copies it over for you."),Object(r.b)("br",null))}s.isMDXComponent=!0}}]);