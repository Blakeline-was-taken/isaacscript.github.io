"use strict";(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[728],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Refactoring an Example Mod"},s=void 0,c={unversionedId:"refactoring-mod",id:"refactoring-mod",title:"Refactoring an Example Mod",description:"As your mod grows larger and larger, you will want to stay organized. Splitting up your mod into different files is easy with TypeScript by using import and export. There are many ways to structure a big mod, so think about a hierarchy that makes sense for you.",source:"@site/docs/refactoring-mod.md",sourceDirName:".",slug:"/refactoring-mod",permalink:"/docs/refactoring-mod",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/refactoring-mod.md",tags:[],version:"current",frontMatter:{title:"Refactoring an Example Mod"},sidebar:"sidebar",previous:{title:"Building an Example Mod",permalink:"/docs/example-mod"},next:{title:"Converting Lua Code",permalink:"/docs/converting-lua-code"}},p={},u=[{value:"1) src/main.ts",id:"1-srcmaints",level:2},{value:"2) src/enums/CollectibleTypeCustom.ts",id:"2-srcenumscollectibletypecustomts",level:2},{value:"3) src/callbacks/postUpdate.ts",id:"3-srccallbackspostupdatets",level:2},{value:"4) src/items/greenCandle.ts",id:"4-srcitemsgreencandlets",level:2},{value:"5) Done!",id:"5-done",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As your mod grows larger and larger, you will want to stay organized. Splitting up your mod into different files is easy with TypeScript by using ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),". There are many ways to structure a big mod, so think about a hierarchy that makes sense for you."),(0,o.kt)("p",null,"Let's say that in our example mod, we want to add a few more custom items, so that the mod becomes an item pack. Before we continue to clutter our \"main.ts\" file, let's refactor our code to keep things clean."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"1-srcmaints"},"1) src/main.ts"),(0,o.kt)("p",null,'We don\'t want to have any logic in the "main.ts" file. This purpose of this file is to simply register the mod and glue together all of the callbacks.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { postUpdateInit } from "./callbacks/postUpdate";\n\nconst MOD_NAME = "Green Candle";\n\nexport function main(): void {\n  const mod = RegisterMod(MOD_NAME, 1);\n  registerCallbacks(mod);\n}\n\nfunction registerCallbacks(mod: Mod) {\n  postUpdateInit();\n  // TODO: Add init functions for new callbacks here\n}\n')),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"2-srcenumscollectibletypecustomts"},"2) src/enums/CollectibleTypeCustom.ts"),(0,o.kt)("p",null,"Before, we had a ",(0,o.kt)("inlineCode",{parentName:"p"},"GREEN_CANDLE_COLLECTIBLE_TYPE")," constant at the top of the file. This probably belongs in its own file. Furthermore, instead of having individual variables for every collectible type, we can put them all in a ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectibleTypeCustom")," enum, which helps us stay more organized."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export enum CollectibleTypeCustom {\n  COLLECTIBLE_GREEN_CANDLE = Isaac.GetItemIdByName("Green Candle"),\n}\n')),(0,o.kt)("p",null,'Enums are typically stored in files of the same name in an "enums" subdirectory.'),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"3-srccallbackspostupdatets"},"3) src/callbacks/postUpdate.ts"),(0,o.kt)("p",null,'Each callback can have its own dedicated file in a "callbacks" subdirectory.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { greenCandlePostUpdate } from "../items/greenCandle";\n\nexport function postUpdateInit(mod: Mod): void {\n  mod.AddCallback(ModCallbacks.MC_POST_UPDATE, main);\n}\n\nfunction main() {\n  greenCandlePostUpdate();\n  // TODO: Add code for new items here\n}\n')),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"4-srcitemsgreencandlets"},"4) src/items/greenCandle.ts"),(0,o.kt)("p",null,'Each item can have its own dedicated file in an "items" subdirectory.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { CollectibleTypeCustom } from "../types/CollectibleTypeCustom";\n\n// ModCallbacks.MC_POST_UPDATE (1)\nexport function greenCandlePostUpdate(): void {\n  checkApplyGreenCandleEffect();\n}\n\nexport function checkApplyGreenCandleEffect(): void {\n  for (const player of getPlayers()) {\n    if (player.HasCollectible(GREEN_CANDLE_COLLECTIBLE_TYPE)) {\n      applyGreenCandleEffect(player);\n    }\n  }\n}\n\nfunction applyGreenCandleEffect(player: EntityPlayer) {\n  for (const entity of getEntities()) {\n    if (shouldApplyGreenCandleEffectToEntity(entity)) {\n      entity.AddPoison(EntityRef(player), 100, player.Damage);\n    }\n  }\n}\n\nfunction shouldApplyGreenCandleEffectToEntity(entity: Entity) {\n  return entity.IsVulnerableEnemy() && getRandomInt(1, 500) === 1;\n}\n')),(0,o.kt)("h2",{id:"5-done"},"5) Done!"),(0,o.kt)("p",null,"Now, our project looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"src/\n\u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 callbacks/\n\u2502   \u2514\u2500\u2500 postUpdate.ts\n\u251c\u2500\u2500 items/\n\u2502   \u2514\u2500\u2500 greenCandle.ts\n\u251c\u2500\u2500 enums/\n\u2502   \u2514\u2500\u2500 CollectibleTypeCustom.ts\n")))}m.isMDXComponent=!0}}]);