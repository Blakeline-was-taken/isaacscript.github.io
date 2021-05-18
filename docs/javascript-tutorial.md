---
title: JavaScript/TypeScript Tutorial
---

This page shows off some of the differences between Lua and TypeScript. Below, you can compare Lua code side by side with the equivalent TypeScript code. If you have coded a mod in Lua before, reading through this page will probably be enough to get you started.

<br />

## Level 1 - Basic

<br />

### Comments

```lua
-- This is a single-line comment in Lua

--[[

This is a multi-line comment in Lua.
It's very long.
And wordy.

--]]
```

```typescript
// This is a single-line comment in TypeScript

/*

This is a multi-line comment in TypeScript.
It's very long.
And wordy.

*/
```

<br />

### Semi-Colons

Unlike Lua, TypeScript code should have semi-colons after every line.

```lua
-- Lua code
Isaac.DebugString("hello world")
```

```typescript
// TypeScript code
Isaac.DebugString("hello world");
```

But don't bother typing the semi-colons yourself - just hit `Ctrl + s` and the editor will automatically insert them for you. That's [Prettier](https://prettier.io/) doing its job.

(In fact, you should always hit `Ctrl + s` periodically as you code, so that the code is constantly formatting itself. This frees you from the tedium of aligning things, breaking up long if statements, and so forth. If the file is not auto-formatting itself, then you probably need to add a bracket somewhere so that the code can properly compile.)

<br />

### Colons

Sometimes in Lua, you call functions with a colon, and sometimes you call them with a period. This is kind of annoying.

In TypeScript, you just call everything with a period. Easy.

```lua
-- Lua code
Isaac.DebugString("hello world")
Game():GetPlayer(0):AddMaxHearts(2)
```

```typescript
// TypeScript code
Isaac.DebugString("hello world");
Game().GetPlayer(0).AddMaxHearts(2);
```

<br />

### Variables: `local` --> `const` and `let`

In Lua, you generally type `local` before declaring a variable to stop it from being turned into a global.

In TypeScript, this isn't necessary. There are no globals variables, unless we explicitly create one.

Furthermore, in TypeScript, there are two kinds of variable declarations: `let` and `const`.<br />
(Don't ever use `var`, which is only used in older JavaScript code.)

```lua
-- Lua code
local poop = "poop"
local numFarts = 1
numFarts = numFarts + 1 -- numFarts is now equal to 2
```

```typescript
// TypeScript code
const poop = "poop"; // We use "const" because this value never changes
let numFarts = 1; // We use "let" because we have to modify it later
numFarts = numFarts + 1 // numFarts is now equal to 2
```

<br />

### Functions

```lua
-- Lua code
function getNumPoops() -- This is a global function
  return 2
end

local function getNumFarts() -- This is a local function
  return 3
end
```

```typescript
// TypeScript code
function getNumPoops() { // All functions in TypeScript are local by default
  return 2;
}
```

### Anonymous Functions

For very small functions, it is common to type them anonymously (i.e. without a name).

```lua
-- Lua code
Revelations:AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, function()
  Isaac.DebugString("Arrived on a new floor.")
end);
```

```typescript
// Typescript code
Revelations.AddCallback(ModCallbacks.MC_POST_NEW_LEVEL, () => {
  Isaac.DebugString("Arrived on a new floor.");
});
```

(If this syntax looks confusing, google "JavaScript arrow functions" in order to get more familiar with them. But of course, you don't have to use arrow functions if you don't want to.)

<br />

### `if` Statements and Operators

In TypeScript, you have to put parentheses around the conditions of an `if` statement.

Also, the operators are a bit different:

- `and` --> `&&`
- `or` --> `||`
- `==` --> `===`
- `~=` --> `!==`
- `..` --> `+`

For example:

```lua
-- Lua code
if x == 1 and y ~= 0 then
  -- Do something
end
```

```typescript
// TypeScript code
if (x === 1 && y !== 0) {
  // Do something
}
```

<br />

### `for` Statements for Counting

In Lua, basic `for` loops look like this:

```lua
-- Lua code
for i = 1, 10 do
  -- "i" will iterate upwards from 1 to 10
end
```

In TypeScript, you use the more-standard C-style syntax:

```typescript
// TypeScript code
for (let i = 1; i <= 10; i++) {
  // "i" will iterate upwards from 1 to 10
}
```

In Lua, you count downwards like this:

```lua
-- Lua code
for i = 10, 1, -1 do
  -- "i" will iterate downwards from 10 to 1
end
```

Similarly, in TypeScript, you change the third part of the `for` loop:

```typescript
// TypeScript code
for (let i = 10; i >= 1; i--) {
  // "i" will iterate upwards from 1 to 10
}
```

<br />

### `for` Statements for Arrays

In Lua, the typical way to iterate over an array is with `ipairs`.

```lua
-- Lua code
local gapers = Isaac.FindByType(EntityType.ENTITY_GAPER, -1, -1, false, false)

-- The "i" variable is unused
for i, gaper in ipairs(gapers) do
  gaper:Remove()
end
```

In TypeScript, you have a few different options.

```typescript
// Typescript code
const gapers = Isaac.FindByType(EntityType.ENTITY_GAPER, -1, -1, false, false)

// A "for of" loop is the simplest way to iterate over an array
for (const gaper of gapers) {
  gaper.Remove();
}

// Or, use the "entries" method if you need the array index too
for (const [i, gaper] of gapers.entries()) {
  gaper.Remove();
}

// For experienced coders,
// using the "forEach" method is recommended over a "for of" loop
gapers.forEach((gaper) => {
  gaper.Remove();
})

// Or, change it to use two arguments if you need the array index
gapers.forEach((gaper, i) => {
  gaper.Remove();
})
```

<br />

### `for` Statements for Key/Value Tables

In Lua, the typical way to iterate over a key/value table is with `pairs`.

```lua
-- Lua code
-- Define a table of item prices
-- (we must put "[]" around the item IDs since the table keys are numbers)
local itemPrices = {
  [CollectibleType.COLLECTIBLE_SAD_ONION] = 30,
  [CollectibleType.COLLECTIBLE_INNER_EYE] = 40,
  [CollectibleType.COLLECTIBLE_SPOON_BENDER] = 25,
}

for itemID, price in pairs(itemPrices) do
  -- Do something with "itemID" and "price"
end
```

In TypeScript, you have a few different options.

```typescript
// TypeScript code
// Define an anonymous object containing item prices
// (object keys that are numbers are automatically converted to strings)
const itemPrices = {
  CollectibleType.COLLECTIBLE_SAD_ONION = 15,
  CollectibleType.COLLECTIBLE_INNER_EYE = 15,
  CollectibleType.COLLECTIBLE_SPOON_BENDER = 7,
}

for (const [itemID, price] of itemPrices.entries()) {
  // Do something with "itemID" and "price"
}

// Or, if you just need the item ID, you would use the "keys()" method
for (const itemID of itemPrices.keys()) {
  // Do something with "itemID"
}

// Or, if you just need the price, you would use the "values()" method
for (const price of itemPrices.values()) {
  // Do something with "price"
}
```

<br />

### `nil` --> `null`

```lua
-- Lua code
if entity.SpawnerEntity == nil then
  -- This entity was not spawned by anything in particular
end
```

```typescript
// TypeScript code
if (entity.SpawnerEntity === null) {
  // This entity was not spawned by anything in particular
}
```

<br />

### Assignment Operators and String Concatenation

Lua does not have assignment operators, because it is a terrible language.

```lua
-- Lua code
local numFarts = 1
numFarts = numFarts + 1 -- numFarts is now equal to 2
```

```typescript
// TypeScript code
let numFarts = 1;
numFarts += 1; // numFarts is now equal to 2
```

Also, the way to concatenate strings is different:

```lua
-- Lua code
local poopString = "poop"
poopString = poopString .. " modified" -- poopString is now equal to "poop modified"
```

```typescript
// TypeScript code
let poopString = "poop";
poopString += " modified"; // poopString is now equal to "poop modified"
```

(TypeScript uses the same operator for adding numbers and concatenating strings.)

<br />

### String Conversion

```lua
-- Lua code
local numPoops = 3
local numPoopsString = tostring(numPoops)
```

```typescript
// TypeScript code
const numPoops = 3
const numPoopsString = numPoops.toString()
```

However, in TypeScript, you probably won't need to convert variables like this very often. Most of the time, you can use string templates, which are very convenient.

```lua
-- Lua code
Isaac.DebugString("The current number of poops is: " .. tostring(numPoops))
```

```typescript
// TypeScript code
// String templates are denoted by the ` character
// Variables that are numbers will automatically be converted to strings
Isaac.DebugString(`The current number of poops is: ${numPoops}`)
```

<br />

### TypeScript Type Annotations

The main thing that TypeScript adds to JavaScript is type annotations. Here's a quick example:

```lua
-- Lua code
local function PostPlayerInit(player)
  player:AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false)
end
```

```javascript
// JavaScript code
function PostPlayerInit(player) {
  player.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false);
}
```

```typescript
// TypeScript code
function PostPlayerInit(player: EntityPlayer) {
  player.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false);
}
```

In the TypeScript code snippet, you can see that we marked "player" as the "EntityPlayer" type by using a colon. The "EntityPlayer" type is automatically provided by the `isaac-typescript-definitions` package, and corresponds to the "EntityPlayer" in the official docs. (The `isaac-typescript-definitions` package is automatically imported in any IsaacScript project.)

Once the type has been annotated, your editor will know about all of the legal methods for the "player" variable. You can now tab-complete everything. And if you make a typo on the "AddCollectible" method, the editor will immediately tell us by drawing a squiggly line underneath it.

When coding in TypeScript, you will need to add the type for every function argument. That way, the compiler can catch all of the bugs.

<br />

## Level 2 - Intermediate

<br />

### Splitting Your Code Into Multiple Files: `require()` --> `import`

In Lua, you split your code into multiple files by using `require()`.

```lua
-- main.lua
local PostPlayerInit = require("revelations.postplayerinit")
-- (the text in "require()" must be lowercase in order for mods to work on
-- Linux, even if the files on the file system are not actually lowercase)

local Revelations = RegisterMod("Revelations", 1)
Revelations:AddCallback(ModCallbacks.MC_POST_PLAYER_INIT, PostGameStarted.Main);
```

```lua
-- PostPlayerInit.lua
local PostPlayerInit = {}

function PostPlayerInit:Main(player)
  player:AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false)
end

return PostPlayerInit
```

In TypeScript, this is accomplished with `import`.<br />
(Don't ever use the JavaScript/TypeScript version of `require()`, which is only used in older JavaScript code.)

```typescript
// main.ts
import * as postPlayerInit from './postPlayerInit';
// (we don't have to worry about the lowercase Linux hack since we are bundling
// all of our code into one "main.lua" file)

const Revelations = RegisterMod("Revelations", 1);
Revelations.AddCallback(ModCallbacks.MC_POST_PLAYER_INIT, postPlayerInit.Main);
```

```typescript
// postPlayerInit.ts
export function Main(player: EntityPlayer) {
  player.AddCollectible(CollectibleType.COLLECTIBLE_SAD_ONION, 0, false)
}
```

<br />

### Importing Global Variables

Sometimes, your mod might need to use a global variable exported by someone else's mod. For example, maybe you need to use the `InfinityTrueCoopInterface` global variable from the True Co-op Mod.

<br />

#### Option 1 - Inline Declarations

You can add the global declaration right before the code:

```lua
-- Lua code
if InfinityTrueCoopInterface ~= nil then
  -- The user has the True Co-op mod enabled, so now do something
end
```

```typescript
// TypeScript code
declare const InfinityTrueCoopInterface: null | unknown;
if (InfinityTrueCoopInterface !== null) {
  // The user has the True Co-op mod enabled, so now do something
}
```

<br />

#### Option 2 - A Declaration File

If you need to check for `InfinityTrueCoopInterface !== null` in more than one place in your mod, then option 1 is bad, because you would be [need to repeat yourself before each check](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Instead, make a TypeScript definition file that corresponds to the variable / table.

For example, to declare `InfinityTrueCoopInterface`, starting from the root of your project:
- Create the `src/types` directory.
- Create the `src/types/InfinityTrueCoopInterface.d.ts` file.
- Put the following in it:

```typescript
declare const InfinityTrueCoopInterface: null | unknown;
```

Now, your other TypeScript files will see it as a global variable without you having to do anything else.

<br />

### Importing Complicated Global Variables

First, see the previous section on [importing global variables](#importing-global-variables).

In the True Co-op Mod, the exported global variable of `InfinityTrueCoopInterface` allows other mods to add new characters with the `AddCharacter` method. What if your mod creates a new character and you want to add it to the True Co-op Mod? If you try calling `InfinityTrueCoopInterface.AddCharacter()`, TypeScript will throw and error and say that it doesn't exist.

The solution is to add the `AddCharacter()` method to our definition file. We need to flesh out the `src/types/InfinityTrueCoopInterface.d.ts` file a bit:

```typescript
// The global variable exists and it is a Lua table of type TrueCoop,
// which we will immediately define below
declare const InfinityTrueCoopInterface: TrueCoop;

// We declare a TrueCoop class that has as many methods as we need
// (but for now we will only add one)
declare class TrueCoop() {
  AddCharacter(playerData: TrueCoopPlayerData)
}

// We also have to specify what the True Co-op mod expects to be passed for the
// first argument of the "AddCharacter" method
// This (partially) matches the documentation near the top of the "main.lua"
// file for the True Co-op Mod
interface TrueCoopPlayerData {
  Name: string;
  Type: PlayerType;
  SelectionGfx: string;
  GhostCostume: NullCostumeID;
  MaxHearts: int;
  Hearts: int;
  // etc.
}
```

<br />

### Exporting Global Variables

In Lua, some mods export functionality by using a global variable:

```lua
-- A Lua file in someone else's mod
RevelationsVersion = "2.1" -- "RevelationsVersion" is now a global variable
```

In TypeScript, you just have to declare it beforehand:

```typescript
declare let RevelationsVersion: string;
RevelationsVersion = '2.1'; // "RevelationsVersion" is now a global variable
```

Building on this example, you can also expose both variables and methods:

```typescript
class Exports() {
  IncreaseStrength(amount: int) {
    // [more code here]
  }
}
const exports = new Exports()

declare let RevelationsExports: Exports;
RevelationsExports = exports; // "RevelationsExports" is now a global variable
```

<br />

### Maps

First, see the previous section on [`for` Statements for Key/Value Tables](#for-statements-for-keyvalue-tables). In that section, we defined "itemPrices" as an anonymous object, which is roughly equivalent to a Lua table.

In TypeScript, you typically want to avoid using anonymous objects because they are not very specific. Let's see if we can do better.

In this example, what "itemPrices" *really* represents is a map of specific item IDs to prices. Unlike Lua, TypeScript has a `Map` data type. So, the example would be better written like this:

```typescript
// itemPrices has a type of "Map<CollectibleType, number>",
// which is safer than an object where anything goes
const itemPrices = new Map([
  CollectibleType.COLLECTIBLE_SAD_ONION = 15,
  CollectibleType.COLLECTIBLE_INNER_EYE = 15,
  CollectibleType.COLLECTIBLE_SPOON_BENDER = 7,
])

for (const [itemID, price] of itemPrices.entries()) {
  // Do something with "itemID" and "price"
}
```

With a map, you can use all of the handy methods [shown in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) (listed on the left side). Here's an example of using the `get()` method to emulate checking for a value in a Lua table:

```lua
-- Lua code
local function pickingUpItem(player, pickingUpItemID)
  -- If the player picked up a new item,
  -- subtract the price of that item from their coin amount
  local price = itemPrices[pickingUpItemID]
  if price ~= nil then
    player:AddCoins(price * -1)
  end
end
```

```typescript
// TypeScript code
function pickingUpItem(player: EntityPlayer, pickingUpItemID: number) {
  // If the player picked up a new item,
  // subtract the price of that item from their coin amount
  const price = itemPrices.get(pickingUpItemID)
  if (price !=== undefined) {
    player.AddCoins(price * -1)
  }
}
```

(You could also use `price !== null` instead of `price !== undefined`, which would transpile to the same thing. But comparing to undefined is more correct, since that is how you would write normal TypeScript code.)

<br />

### Enums

First, see the previous section on [Maps](#maps). In that section, we defined "itemPrices" as a map with a type of `Map<CollectibleType, number>`.

Imagine that in our mod, items can only be sold for three different prices:
- 15 coins (normal)
- 30 coins (double)
- 7 coins (on sale)

This means that we can get even more specific with our map definition by using an `enum`. Unlike Lua, TypeScript has a built-in `enum` data type.

```typescript
enum ItemPrice {
  Normal = 15,
  Double = 30,
  Sale = 7,
}

// itemPrices has a type of "Map<CollectibleType, ItemPrice>",
// which is even safer than before!
const itemPrices = new Map([
  CollectibleType.COLLECTIBLE_SAD_ONION = ItemPrice.Normal,
  CollectibleType.COLLECTIBLE_INNER_EYE = ItemPrice.Normal,
  CollectibleType.COLLECTIBLE_SPOON_BENDER = ItemPrice.Sale,
])
```