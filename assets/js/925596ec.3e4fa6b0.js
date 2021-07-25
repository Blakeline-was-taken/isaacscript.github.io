(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[668],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7703:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],c={title:"Updating IsaacScript"},p=void 0,s={unversionedId:"updating-isaacscript",id:"updating-isaacscript",isDocsHomePage:!1,title:"Updating IsaacScript",description:"IsaacScript is occasionally updated with new TypeScript definitions, new linting rules, and so forth. However, these new updates are not automatically pushed to your mod.",source:"@site/docs/updating-isaacscript.md",sourceDirName:".",slug:"/updating-isaacscript",permalink:"/docs/updating-isaacscript",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/updating-isaacscript.md",version:"current",frontMatter:{title:"Updating IsaacScript"},sidebar:"sidebar",previous:{title:"Converting Lua Code",permalink:"/docs/converting-lua-code"},next:{title:"Publishing to the Workshop",permalink:"/docs/publishing-to-the-workshop"}},u=[],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"IsaacScript is occasionally updated with new TypeScript definitions, new linting rules, and so forth. However, these new updates are not automatically pushed to your mod."),(0,i.kt)("p",null,"In a TypeScript project, you can see your project dependencies by looking at the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. By default, a new IsaacScript mod depends on just one thing: ",(0,i.kt)("inlineCode",{parentName:"p"},"isaacscript"),". You can see the specific version inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.netwoven.com/2017/03/21/how-to-update-node-js-modules-to-latest-versions/"},"This page")," explains how to update your project dependencies to the latest version."),(0,i.kt)("p",null,"In short, to automatically update the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx npm-check-updates --upgrade --packageFile package.json\n")),(0,i.kt)("p",null,"Then, install the new modules with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("p",null,"For reference, the latest version of IsaacScript can always be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/isaacscript"},"on the NPM page"),"."))}d.isMDXComponent=!0}}]);