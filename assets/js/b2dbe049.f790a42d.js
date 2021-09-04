"use strict";(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[240],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1784:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={title:"Gotchas"},s=void 0,p={unversionedId:"gotchas",id:"gotchas",isDocsHomePage:!1,title:"Gotchas",description:'This page lists several "gotchas" or things that might be weird about IsaacScript.',source:"@site/docs/gotchas.md",sourceDirName:".",slug:"/gotchas",permalink:"/docs/gotchas",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/gotchas.md",version:"current",frontMatter:{title:"Gotchas"},sidebar:"sidebar",previous:{title:"Publishing to the Workshop",permalink:"/docs/publishing-to-the-workshop"},next:{title:"Function Signatures (Vanilla)",permalink:"/docs/function-signatures"}},u=[{value:"Extending Enums --&gt; Custom Enums",id:"extending-enums----custom-enums",children:[]},{value:"<code>int</code> and <code>float</code>",id:"int-and-float",children:[]},{value:"Vector Operators",id:"vector-operators",children:[]},{value:"Using JSON",id:"using-json",children:[]},{value:"Iterating Over Enums",id:"iterating-over-enums",children:[]},{value:"NPM Dependencies",id:"npm-dependencies",children:[]},{value:"Throwing Errors",id:"throwing-errors",children:[]},{value:"No Blank Mod Classes",id:"no-blank-mod-classes",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This page lists several "gotchas" or things that might be weird about IsaacScript.'),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"extending-enums----custom-enums"},"Extending Enums --\x3e Custom Enums"),(0,r.kt)("p",null,"In your Lua mods, you may have extended the game's built-in enums. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- At the top of your Lua mod:\nCollectibleType.COLLECTIBLE_MY_CUSTOM_ITEM = Isaac.GetItemIdByName("My Custom Item")\n\n-- Elsewhere in the code:\nif (\n  player:HasCollectible(CollectibleType.COLLECTIBLE_MY_CUSTOM_ITEM)\n  and player:HasCollectible(CollectibleType.COLLECTIBLE_EPIC_FETUS)\n) then\n  -- Handle the specific synergy with My Custom Item + Epic Fetus\nend\n')),(0,r.kt)("p",null,"In TypeScript, you cannot extend existing enums for safety reasons. Instead, create your own enum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// At the top of your TypeScript mod:\nenum CollectibleTypeCustom {\n  COLLECTIBLE_MY_CUSTOM_ITEM = Isaac.GetItemIdByName("My Custom Item"),\n}\n\n// Elsewhere in the code:\nif (\n  player.HasCollectible(CollectibleTypeCustom.COLLECTIBLE_MY_CUSTOM_ITEM) &&\n  player.HasCollectible(CollectibleType.COLLECTIBLE_EPIC_FETUS)\n) {\n  // Handle the specific synergy with My Custom Item + Epic Fetus\n}\n')),(0,r.kt)("p",null,"Note that you don't have to worry about polluting the global namespace: due to how the transpiler works, your enum will be local to your own project."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"int-and-float"},(0,r.kt)("inlineCode",{parentName:"h3"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"float")),(0,r.kt)("p",null,"In Lua, there is only one type of number. (The programming language doesn't differentiate between integers, floats, etc.)"),(0,r.kt)("p",null,"TypeScript works the same way as Lua. There is only one type of number: ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("p",null,"However, the official Isaac API documentation uses integers and floats. For example, this is the entry for the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityPlayer:AddCollectible()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"AddCollectible (CollectibleType Type, integer Charge, boolean AddConsumables)\n")),(0,r.kt)("p",null,"In order to more closely match the API, the TypeScript API definitions use ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," types. Thus, the above function is declared like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"AddCollectible(collectibleType: int, charge: int, addConsumables: boolean): void;\n")),(0,r.kt)("p",null,"If you want, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"float")," types in your own code too (instead of just using ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", like you would in other typical TypeScript code). But if you do use ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", be aware that they are simply aliases for ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", so they don't provide any actual type safety."),(0,r.kt)("p",null,"In other words, it is possible to do this, so beware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Give the player a Sad Onion\nplayer.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false);\n\n// Find out how many Sad Onions they have\nlet numSadOnions = player.GetCollectibleNum(\n  CollectibleType.COLLECTIBLE_SAD_ONION,\n);\n// numSadOnions is now an "int" with a value of "1"\n\nnumSadOnions += 0.5;\n// numSadOnions is still an "int", but now it has a value of "1.5"\n// This is a bug and TypeScript won\'t catch this for you!\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"vector-operators"},"Vector Operators"),(0,r.kt)("p",null,"In Isaac modding, working with Vectors is common. For example, you might want to double the speed of an enemy projectile. Doing this in Lua is simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Lua code\n-- Double the speed of the projectile\nprojectile.Velocity = projectile.Velocity * 2\n")),(0,r.kt)("p",null,"This code is the actually the same as writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Lua code\n-- Double the speed of the projectile\nprojectile.Velocity = projectile.Velocity:__mul(2)\n")),(0,r.kt)("p",null,"Under the hood, Lua converts the first code snippet to the second code snippet automatically. This is because it understands that ",(0,r.kt)("inlineCode",{parentName:"p"},"__mul")," is a special operator method. Most people write code in the first way instead of the second way, because it is more convenient."),(0,r.kt)("p",null,"In TypeScript, we unfortunately cannot code in the first way due to ",(0,r.kt)("a",{parentName:"p",href:"https://typescripttolua.github.io/docs/advanced/writing-declarations/#operator-overloads"},"limitations in TypeScriptToLua"),". Since operator overloads will not work, we instead call the convenience methods ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mul"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Lua code\nlocal vector = Vector(1, 1) * 5 + 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// TypeScript code\nconst vector = Vector(1, 1).mul(5).add(2);\n")),(0,r.kt)("p",null,"If you are converting Lua code, make sure to account for order of operations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Lua code\nlocal vector = Vector(1, 1) + Vector(3, 3) * 6\n-- (multiplication happens before addition)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// TypeScript code\nlet vector = Vector(3, 3).mul(6).add(Vector(1, 1);\n")),(0,r.kt)("p",null,"Note that if you really need to, you can restore operator overloading for Vectors by creating a ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d"},"branded type")," with something along the lines of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Vector = number & { __intBrand: any };\n")),(0,r.kt)("p",null,"But this is ",(0,r.kt)("strong",{parentName:"p"},"not recommend")," because it destroys type-safety."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"using-json"},"Using JSON"),(0,r.kt)("p",null,'Isaac mods are allowed to write save data to the "save1.dat", "save2.dat", and "save3.dat" files (for save slot 1, save slot 2, and save slot 3, respectively). This is accomplished via the ',(0,r.kt)("inlineCode",{parentName:"p"},"Isaac.SaveModData()")," function."),(0,r.kt)("p",null,"Any non-trivial mod will need to save many different variables. Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"Isaac.SaveModData()")," function takes a string instead of a Lua table, it is standard practice to convert a Lua table to a string using JSON."),(0,r.kt)("p",null,"Handily, Lua functions to accomplish this are provided with the game in the ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\resources\\scripts\\json.lua")," file. All you have to do is require the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Lua code\nlocal json = require("json")\n\n-- Register the mod\nlocal Revelations = RegisterMod("Revelations", 1)\n\n-- Define default values for the save data\nlocal RevelationsSaveData = {\n  currentHP = 3,\n  currentNumFamiliars = 4,\n  currentCharge = 10,\n}\n\nlocal function saveModData()\n  local encodedData = json.encode(RevelationsSaveData)\n  Isaac.SaveModData(Revelations, encodedData)\nend\n')),(0,r.kt)("p",null,"In TypeScript, we can directly call the Lua code in the same way. Note that IsaacScript automatically includes type definitions for the ",(0,r.kt)("inlineCode",{parentName:"p"},"json.lua")," file, so you don't have to worry about that part."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// TypeScript code\nimport * as json from "json";\n\n// Register the mod\nconst Revelations = RegisterMod("Revelations", 1);\n\n// Define default values for the save data\nconst RevelationsSaveData = {\n  currentHP = 3,\n  currentNumFamiliars = 4,\n  currentCharge = 10,\n};\n\nfunction saveModData() {\n  const encodedData = json.encode(RevelationsSaveData);\n  Isaac.SaveModData(Revelations, encodedData);\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"iterating-over-enums"},"Iterating Over Enums"),(0,r.kt)("p",null,"Sometimes, you might want to iterate over an enum. For example, the following Lua code is a pretty good way to detect if the player is pressing any particular button on the keyboard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Lua code\n-- "Keyboard" is an enum provided by the game\nfor keyName, keyCode in pairs(Keyboard) do\n  if Input.IsButtonPressed(keyCode, 0) then\n    Isaac.DebugString("Player pressed: " .. keyName)\n  end\nend\n')),(0,r.kt)("p",null,"In TypeScript, it would be exactly like iterating over any other object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// TypeScript code\n// "Keyboard" is an enum provided by the game\nfor (const [keyName, keyCode] of Object.entries(Keyboard)) {\n  if (Input.IsButtonPressed(keyCode, 0)) {\n    Isaac.DebugString(`Player pressed: ${keyName}`);\n  }\n}\n')),(0,r.kt)("p",null,"One important thing to note about this is that iterating over enums ",(0,r.kt)("strong",{parentName:"p"},"will not happen in order"),". This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.entries()")," (and the other related functions) transpile to use Lua's ",(0,r.kt)("inlineCode",{parentName:"p"},"pairs()")," function, and that is designed to return table entries in a random order. If you need to get the contents of a Lua enum in order, then either sort the keys before you iterate over them, or re-create the data as an array."),(0,r.kt)("p",null,'Furthermore, it is important that in the previous example, we are iterating over a "normal" enum provided by the game. You ',(0,r.kt)("strong",{parentName:"p"},"will not be able to iterate over your own enums")," in this way because of how TypeScriptToLua transpiles them. TypeScriptToLua creates a double mapping of key to value and value to key. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum TestEnum {\n  ONE = 1,\n  TWO = 2,\n  THREE = 3,\n}\n")),(0,r.kt)("p",null,"Will transpile to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local TestEnum = TestEnum or ({})\nTestEnum.ONE = 1\nTestEnum[TestEnum.ONE] = "ONE"\nTestEnum.TWO = 2\nTestEnum[TestEnum.TWO] = "TWO"\nTestEnum.THREE = 3\nTestEnum[TestEnum.THREE] = "THREE"\n')),(0,r.kt)("p",null,"This is a great feature, because you can pretty print what an enum is super easily:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const currentTestValue = TestEnum.TWO\nIsaac.DebugString(`currentTestValue = ${currentTestValue} - ${TestEnum[currentTestValue]}`); // Prints "currentTestValue = 2 (TWO)"\n')),(0,r.kt)("p",null,"However, this means that if you want to iterate over your own enums in a way similar to the previous example, you have to use some type-checking:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'for (const [key, value] of Object.entries(TestEnum)) {\n  if (type(key) !== "string") {\n    // Ignore the reverse mappings created by TypeScriptToLua\n    continue;\n  }\n\n  Isaac.DebugString(`Key: ${key}`);\n  Isaac.DebugString(`Value: ${value}`);\n}\n')),(0,r.kt)("p",null,"Or, simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"getEnumValues"),", which is a provided convenience function from ",(0,r.kt)("inlineCode",{parentName:"p"},"isaacscript-common"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"for (const value of getEnumValues(TestEnum)) {\n  Isaac.DebugString(`Value: ${value}`);\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"npm-dependencies"},"NPM Dependencies"),(0,r.kt)("p",null,"Beware of using run-of-the-mill JavaScript or TypeScript libraries, such as ",(0,r.kt)("a",{parentName:"p",href:"https://underscorejs.org/"},"Underscore"),", as they might not transpile properly to Lua. You're on your own here."),(0,r.kt)("p",null,"On the other hand, if you want to split IsaacScript code between repositories or share a library with others, TypeScriptToLua allows ",(0,r.kt)("a",{parentName:"p",href:"https://typescripttolua.github.io/docs/external-lua-code"},"using and creating npm packages containing .lua files"),". Check out the TypeScriptToLua docs for more details."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"throwing-errors"},"Throwing Errors"),(0,r.kt)("p",null,"Normally, in TypeScript programs, you would handle errors with ",(0,r.kt)("inlineCode",{parentName:"p"},'throw new Error("foo")'),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const player = Isaac.GetPlayer(1); // The type of player is "EntityPlayer | null"\nif (player === null) {\n  throw new Error("Failed to get the player!");\n}\nplayer.AddSoulHearts(1); // The type of player is now "EntityPlayer"\n')),(0,r.kt)("p",null,"However, in Isaac mods, this code won't work. It will error with something along the lines of the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[Foo] Error in \"foo\" call: ...n\\The Binding of Isaac Rebirth/mods/foo/main.lua:100: attempt to index a nil value (global 'debug')")),(0,r.kt)("p",null,"This is because TypeScriptToLua transpiles ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," to a function that uses Lua's ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," library, and Isaac does not normally have access to ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," for sandboxing reasons. But not to worry, because instead we can simply use Lua's ",(0,r.kt)("inlineCode",{parentName:"p"},"error()")," function. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const player = Isaac.GetPlayer(1); // The type of player is "EntityPlayer | null"\nif (player === null) {\n  error("Failed to get the player!");\n}\nplayer.AddSoulHearts(1); // The type of player is now "EntityPlayer"\n')),(0,r.kt)("p",null,"(TypeScript is smart enough to know that ",(0,r.kt)("inlineCode",{parentName:"p"},"error()")," can constrain the type of player in the same way that ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," normally would.)"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"no-blank-mod-classes"},"No Blank Mod Classes"),(0,r.kt)("p",null,"You cannot instantiate a blank mod object/class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// TypeScript code\nconst Revelations = RegisterMod("Revelations", 1); // "Revelations" has the type "Mod"\n\nclass Foo {\n  // We might not want to define a type of "Mod | null",\n  // so what if we use a blank class?\n  modObject = Mod();\n}\nconst foo = new Foo();\n\n// Later on in the code, we can overwrite it\nfoo.modObject = Revelations;\n')),(0,r.kt)("p",null,"Doing this will result in an error in the following TypeScriptToLua boilerplate code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function __TS__New(target, ...)\n    local instance = setmetatable({}, target.prototype) -- Error on this line\n")),(0,r.kt)("p",null,"To fix this problem, do something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// TypeScript code\nconst Revelations = RegisterMod("Revelations", 1); // "Revelations" has the type "Mod"\n\nclass Foo {\n  modObject: Mod | null = null;\n}\nconst foo = new Foo();\n\n// Later on in the code, we can overwrite it\nfoo.modObject = Revelations;\n')))}d.isMDXComponent=!0}}]);