"use strict";(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[728],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8978:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Refactoring an Example Mod"},l=void 0,c={unversionedId:"refactoring-mod",id:"refactoring-mod",isDocsHomePage:!1,title:"Refactoring an Example Mod",description:"As your mod grows larger and larger, you will want to stay organized. Splitting up your mod into different files is easy with TypeScript by using import and export. There are many ways to structure a big mod, so think about a hierarchy that makes sense for you.",source:"@site/docs/refactoring-mod.md",sourceDirName:".",slug:"/refactoring-mod",permalink:"/docs/refactoring-mod",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/refactoring-mod.md",version:"current",frontMatter:{title:"Refactoring an Example Mod"},sidebar:"sidebar",previous:{title:"Building an Example Mod",permalink:"/docs/example-mod"},next:{title:"Converting Lua Code",permalink:"/docs/converting-lua-code"}},p=[{value:"1) src/main.ts",id:"1-srcmaints",children:[]},{value:"2) src/constants.ts",id:"2-srcconstantsts",children:[]},{value:"3) src/callbacks/postUpdate.ts",id:"3-srccallbackspostupdatets",children:[]},{value:"4) src/items/greenCandle.ts",id:"4-srcitemsgreencandlets",children:[]},{value:"5) Done!",id:"5-done",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As your mod grows larger and larger, you will want to stay organized. Splitting up your mod into different files is easy with TypeScript by using ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),". There are many ways to structure a big mod, so think about a hierarchy that makes sense for you."),(0,o.kt)("p",null,"Let's say that in our example mod, we want to add a few more custom items, so that the mod becomes an item pack. Before we continue to clutter our \"main.ts\" file, let's refactor our code to keep things clean."),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"1-srcmaints"},"1) src/main.ts"),(0,o.kt)("p",null,'We don\'t want to have any logic in the "main.ts" file. This purpose of this file is to simply register the mod and glue together all of the callbacks.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Define imports\nimport * as postUpdate from "./callbacks/postUpdate";\n\n// Register the mod\n// (which will make it show up in the list of mods on the mod screen in the main menu)\nconst greenCandle = RegisterMod("greenCandle", 1);\n\n// Register callbacks\ngreenCandle.AddCallback(ModCallbacks.MC_POST_UPDATE, postUpdate.main);\n// TODO - Add code for new callbacks here\n\n// Print an initialization message to the "log.txt" file\nIsaac.DebugString("The Green Candle mod is initialized.");\n')),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"2-srcconstantsts"},"2) src/constants.ts"),(0,o.kt)("p",null,"Before, we had a ",(0,o.kt)("inlineCode",{parentName:"p"},"greenCandleItemID"),' variable. This is a constant and will never change, so it belongs in its own "constants.ts" file. Furthermore, instead of having individual variables for every item ID, we can put them all in a "CollectibleTypeCustom" enum, which helps us stay more organized.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export enum CollectibleTypeCustom {\n  COLLECTIBLE_GREEN_CANDLE = Isaac.GetItemIdByName("Green Candle"),\n}\n')),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"3-srccallbackspostupdatets"},"3) src/callbacks/postUpdate.ts"),(0,o.kt)("p",null,'Each callback can have its own dedicated file in the "callbacks" directory. Here\'s the code for "postUpdate.ts":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import * as greenCandle from "../items/greenCandle";\n\nexport function main(): void {\n  greenCandle.checkApplyEffect();\n  // TODO - Add code for new items here\n}\n')),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"4-srcitemsgreencandlets"},"4) src/items/greenCandle.ts"),(0,o.kt)("p",null,'Each item can have its own dedicated file in the "items" directory.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { CollectibleTypeCustom } from "../constants";\n\nexport function checkApplyEffect(): void {\n  const game = Game();\n  const numPlayers = game.GetNumPlayers();\n  for (let i = 0; i < numPlayers; i++) {\n    const player = Isaac.GetPlayer(i);\n    if (\n      player !== undefined &&\n      player.HasCollectible(CollectibleTypeCustom.COLLECTIBLE_GREEN_CANDLE)\n    ) {\n      applyEffect(player);\n    }\n  }\n}\n\nfunction applyEffect(player: EntityPlayer) {\n  for (const entity of Isaac.GetRoomEntities()) {\n    if (shouldApplyEffectToEntity(entity)) {\n      entity.AddPoison(EntityRef(player), 100, player.Damage);\n    }\n  }\n}\n\nfunction shouldApplyEffectToEntity(entity: Entity) {\n  // "math.random(500)" generates a random number between 1 and 500\n  // This is a 1 / 500 chance, or 0.2%\n  return entity.IsVulnerableEnemy() && math.random(500) === 1;\n}\n')),(0,o.kt)("h2",{id:"5-done"},"5) Done!"),(0,o.kt)("p",null,"Now, our project looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"src/\n\u251c\u2500\u2500 main.ts\n\u251c\u2500\u2500 constants.ts\n\u251c\u2500\u2500 callbacks/\n\u2502   \u2514\u2500\u2500 postUpdate.ts\n\u2514\u2500\u2500 items/\n    \u2514\u2500\u2500 greenCandle.ts\n")))}u.isMDXComponent=!0}}]);