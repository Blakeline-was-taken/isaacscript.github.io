"use strict";(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[201],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(s,".").concat(u)]||h[u]||_[u]||l;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1444:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={title:"Function Signatures (Custom)"},s=void 0,c={unversionedId:"function-signatures-custom",id:"function-signatures-custom",isDocsHomePage:!1,title:"Function Signatures (Custom)",description:"The isaacscript-common package provides access to some custom callbacks, which are listed below.",source:"@site/docs/function-signatures-custom.md",sourceDirName:".",slug:"/function-signatures-custom",permalink:"/docs/function-signatures-custom",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/function-signatures-custom.md",version:"current",frontMatter:{title:"Function Signatures (Custom)"},sidebar:"sidebar",previous:{title:"Function Signatures (Vanilla)",permalink:"/docs/function-signatures"}},p=[{value:"MC_POST_GAME_STARTED_REORDERED",id:"mc_post_game_started_reordered",children:[]},{value:"MC_POST_NEW_LEVEL_REORDERED",id:"mc_post_new_level_reordered",children:[]},{value:"MC_POST_NEW_ROOM_REORDERED",id:"mc_post_new_room_reordered",children:[]},{value:"MC_POST_PLAYER_INIT_REORDERED",id:"mc_post_player_init_reordered",children:[]},{value:"MC_POST_PLAYER_UPDATE_REORDERED",id:"mc_post_player_update_reordered",children:[]},{value:"MC_POST_NEW_ROOM_EARLY",id:"mc_post_new_room_early",children:[]},{value:"MC_PRE_NEW_LEVEL",id:"mc_pre_new_level",children:[]},{value:"MC_POST_PLAYER_INIT_LATE",id:"mc_post_player_init_late",children:[]},{value:"MC_POST_TEAR_INIT_LATE",id:"mc_post_tear_init_late",children:[]},{value:"MC_POST_TEAR_INIT_VERY_LATE",id:"mc_post_tear_init_very_late",children:[]},{value:"MC_POST_FAMILIAR_INIT_LATE",id:"mc_post_familiar_init_late",children:[]},{value:"MC_POST_BOMB_INIT_LATE",id:"mc_post_bomb_init_late",children:[]},{value:"MC_POST_PICKUP_INIT_LATE",id:"mc_post_pickup_init_late",children:[]},{value:"MC_POST_LASER_INIT_LATE",id:"mc_post_laser_init_late",children:[]},{value:"MC_POST_KNIFE_INIT_LATE",id:"mc_post_knife_init_late",children:[]},{value:"MC_POST_PROJECTILE_INIT_LATE",id:"mc_post_projectile_init_late",children:[]},{value:"MC_POST_NPC_INIT_LATE",id:"mc_post_npc_init_late",children:[]},{value:"MC_POST_EFFECT_INIT_LATE",id:"mc_post_effect_init_late",children:[]},{value:"MC_POST_PICKUP_COLLECT",id:"mc_post_pickup_collect",children:[]},{value:"MC_PRE_ITEM_PICKUP",id:"mc_pre_item_pickup",children:[]},{value:"MC_POST_ITEM_PICKUP",id:"mc_post_item_pickup",children:[]},{value:"MC_POST_PLAYER_CHANGE_TYPE",id:"mc_post_player_change_type",children:[]},{value:"MC_POST_PLAYER_CHANGE_HEALTH",id:"mc_post_player_change_health",children:[]},{value:"MC_POST_PLAYER_FATAL_DAMAGE",id:"mc_post_player_fatal_damage",children:[]},{value:"MC_PRE_CUSTOM_REVIVE",id:"mc_pre_custom_revive",children:[]},{value:"MC_POST_CUSTOM_REVIVE",id:"mc_post_custom_revive",children:[]},{value:"MC_POST_FLIP",id:"mc_post_flip",children:[]},{value:"MC_POST_FIRST_FLIP",id:"mc_post_first_flip",children:[]},{value:"MC_POST_ESAU_JR",id:"mc_post_esau_jr",children:[]},{value:"MC_POST_FIRST_ESAU_JR",id:"mc_post_first_esau_jr",children:[]},{value:"MC_POST_TRANSFORMATION",id:"mc_post_transformation",children:[]},{value:"MC_POST_PURCHASE",id:"mc_post_purchase",children:[]},{value:"MC_POST_SACRIFICE",id:"mc_post_sacrifice",children:[]},{value:"MC_POST_CURSED_TELEPORT",id:"mc_post_cursed_teleport",children:[]},{value:"MC_POST_SLOT_INIT",id:"mc_post_slot_init",children:[]},{value:"MC_POST_SLOT_UPDATE",id:"mc_post_slot_update",children:[]},{value:"MC_POST_SLOT_RENDER",id:"mc_post_slot_render",children:[]},{value:"MC_POST_SLOT_DESTROYED",id:"mc_post_slot_destroyed",children:[]},{value:"MC_POST_GRID_ENTITY_INIT",id:"mc_post_grid_entity_init",children:[]},{value:"MC_POST_GRID_ENTITY_UPDATE",id:"mc_post_grid_entity_update",children:[]},{value:"MC_POST_GRID_ENTITY_REMOVE",id:"mc_post_grid_entity_remove",children:[]}],_={toc:p};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://isaacscript.github.io/isaacscript-common/"},(0,l.kt)("inlineCode",{parentName:"a"},"isaacscript-common"))," package provides access to some custom callbacks, which are listed below."),(0,l.kt)("p",null,"In order to use custom callbacks, you must first invoke the ",(0,l.kt)("a",{parentName:"p",href:"https://isaacscript.github.io/isaacscript-common/modules/upgradeMod.html"},(0,l.kt)("inlineCode",{parentName:"a"},"upgradeMod"))," function."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"mc_post_game_started_reordered"},"MC_POST_GAME_STARTED_REORDERED"),(0,l.kt)("p",null,"Similar to the vanilla callback of the same name, but fires in the correct order with respect to the PostNewLevel and the PostNewRoom callbacks:"),(0,l.kt)("p",null,"PostGameStarted --\x3e PostNewLevel --\x3e PostNewRoom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGameStartedReordered(isContinued: boolean): void {}\n")),(0,l.kt)("h3",{id:"mc_post_new_level_reordered"},"MC_POST_NEW_LEVEL_REORDERED"),(0,l.kt)("p",null,"The same as the vanilla callback of the same name, but fires in the correct order with respect to the PostGameStarted and the PostNewRoom callbacks:"),(0,l.kt)("p",null,"PostGameStarted --\x3e PostNewLevel --\x3e PostNewRoom"),(0,l.kt)("p",null,"If some specific cases, mods can change the current level during run initialization (on the 0th frame). However, due to how the callback reordering works, the custom PostNewLevel callback will never fire on the 0th frame. To get around this, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"forceNewLevelCallback()")," function before changing levels to temporarily force the callback to fire."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNewLevelReordered(): void {}\n")),(0,l.kt)("h3",{id:"mc_post_new_room_reordered"},"MC_POST_NEW_ROOM_REORDERED"),(0,l.kt)("p",null,"The same as the vanilla callback of the same name, but fires in the correct order with respect to the PostGameStarted and the PostNewLevel callbacks:"),(0,l.kt)("p",null,"PostGameStarted --\x3e PostNewLevel --\x3e PostNewRoom"),(0,l.kt)("p",null,"If some specific cases, mods can change the current room during run initialization (on the 0th frame). However, due to how the callback reordering works, the custom PostNewRoom callback will never fire on the 0th frame. To get around this, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"forceNewRoomCallback()")," function before changing levels to temporarily force the callback to fire."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNewRoomReordered(): void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_init_reordered"},"MC_POST_PLAYER_INIT_REORDERED"),(0,l.kt)("p",null,"Similar to the vanilla callback of the same name, but fires after the PostGameStarted callback fires (if the player is spawning on the 0th game frame of the run)."),(0,l.kt)("p",null,"This callback is useful for two reasons:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Normally, PostPlayerUpdate fires before PostGameStarted. Since mod variables are often initialized at the beginning of the PostGameStarted callback, this can cause problems."),(0,l.kt)("li",{parentName:"ol"},"Some functions do not work (or crash the game) when called before the PostNewRoom callback. For example, since the level is not generated yet, you will not be able to access any rooms.")),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the player matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerInitReordered(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_update_reordered"},"MC_POST_PLAYER_UPDATE_REORDERED"),(0,l.kt)("p",null,"Similar to the vanilla callback of the same name, but fires after the PostGameStarted callback fires (if the player is being updated on the 0th game frame of the run)."),(0,l.kt)("p",null,"This callback is useful for two reasons:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Normally, PostPlayerUpdate fires before PostGameStarted. Since mod variables are often initialized at the beginning of the PostGameStarted callback, this can cause problems."),(0,l.kt)("li",{parentName:"ol"},"Some functions do not work (or crash the game) when called before the PostNewRoom callback. For example, since the level is not generated yet, you will not be able to access any rooms.")),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the player matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerUpdateReordered(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_new_room_early"},"MC_POST_NEW_ROOM_EARLY"),(0,l.kt)("p",null,"Fires on the first ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_POST_NEW_ROOM")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_PRE_ENTITY_SPAWN")," callback where being in a new room is detected. This is useful because the vanilla ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_POST_NEW_ROOM")," callback fires only after entities in the room have been initialized and updated once, which means that it is possible for entity-related code to run before room-related-initialization has been performed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNewRoomEarly(): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_new_level"},"MC_PRE_NEW_LEVEL"),(0,l.kt)("p",null,"Fires on the ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_POST_RENDER")," frame before the player is taken to a new floor. Only fires when a player jumps into a trapdoor or enters a heaven door (beam of light). Does not fire on the first floor of the run. Does not fire when the player reloads/reseeds the current floor (i.e. Forget Me Now, 5-pip dice room)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preNewLevel(): void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_init_late"},"MC_POST_PLAYER_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_PLAYER_UPDATE frame for each player."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_PLAYER_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the player variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerInitLate(pickup: EntityPickup): void {}\n")),(0,l.kt)("h3",{id:"mc_post_tear_init_late"},"MC_POST_TEAR_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_TEAR_UPDATE frame for each tear."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_TEAR_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the tear variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"TearVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTearInitLate(tear: EntityTear): void {}\n")),(0,l.kt)("h3",{id:"mc_post_tear_init_very_late"},"MC_POST_TEAR_INIT_VERY_LATE"),(0,l.kt)("p",null,"Fires on the second MC_POST_TEAR_UPDATE frame for each tear (i.e. frame 1)."),(0,l.kt)("p",null,"This callback is useful because Incubus tears are not distinguishable until the second frame."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the tear variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"TearVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTearInitVeryLate(tear: EntityTear): void {}\n")),(0,l.kt)("h3",{id:"mc_post_familiar_init_late"},"MC_POST_FAMILIAR_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_FAMILIAR_UPDATE frame for each familiar."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_TEAR_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the familiar variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"FamiliarVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTearInitLate(familiar: EntityFamiliar): void {}\n")),(0,l.kt)("h3",{id:"mc_post_bomb_init_late"},"MC_POST_BOMB_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_BOMB_UPDATE frame for each bomb."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_BOMB_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the bomb variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"BombVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postBombInitLate(bomb: EntityBomb): void {}\n")),(0,l.kt)("h3",{id:"mc_post_pickup_init_late"},"MC_POST_PICKUP_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_PICKUP_UPDATE frame for each pickup."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_PICKUP_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the pickup variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PickupVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPickupInitLate(pickup: EntityPickup): void {}\n")),(0,l.kt)("h3",{id:"mc_post_laser_init_late"},"MC_POST_LASER_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_LASER_UPDATE frame for each laser."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_LASER_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the laser variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"LaserVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postLaserInitLate(laser: EntityLaser): void {}\n")),(0,l.kt)("h3",{id:"mc_post_knife_init_late"},"MC_POST_KNIFE_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_KNIFE_UPDATE frame for each knife."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_KNIFE_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the knife variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"KnifeVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postKnifeInitLate(knife: EntityKnife): void {}\n")),(0,l.kt)("h3",{id:"mc_post_projectile_init_late"},"MC_POST_PROJECTILE_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_PROJECTILE_UPDATE frame for each projectile."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_PROJECTILE_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the projectile variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"ProjectileVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postProjectileInitLate(projectile: EntityProjectile): void {}\n")),(0,l.kt)("h3",{id:"mc_post_npc_init_late"},"MC_POST_NPC_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_NPC_UPDATE frame for each NPC."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_NPC_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the NPC's entity type matches the entity type provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNPCInitLate(npc: EntityNPC): void {}\n")),(0,l.kt)("h3",{id:"mc_post_effect_init_late"},"MC_POST_EFFECT_INIT_LATE"),(0,l.kt)("p",null,"Fires on the first MC_POST_EFFECT_UPDATE frame for each effect."),(0,l.kt)("p",null,"This callback is useful because many attributes cannot be set or retrieved properly in the normal MC_POST_EFFECT_INIT callback."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the effect variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"EffectVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEffectInitLate(npc: EntityEffect): void {}\n")),(0,l.kt)("h3",{id:"mc_post_pickup_collect"},"MC_POST_PICKUP_COLLECT"),(0,l.kt)("p",null,'Fires on the first MC_POST_RENDER frame that a pickup plays the "Collect" animation.'),(0,l.kt)("p",null,"Use this callback to know when a pickup is added to the player's inventory or health."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the pickup variant matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PickupVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPickupCollect(pickup: EntityPickup, player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_item_pickup"},"MC_PRE_ITEM_PICKUP"),(0,l.kt)("p",null,"Fires on the first frame that an item becomes queued (i.e. when Isaac begins to hold the item above his head)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"li"},"ItemType")," provided."),(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional third argument that will make the callback only fire if the ",(0,l.kt)("inlineCode",{parentName:"li"},"CollectibleType")," or the ",(0,l.kt)("inlineCode",{parentName:"li"},"TrinketType")," matches the ID provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preItemPickup(\n  player: EntityPlayer,\n  pickingUpItem: PickingUpItem,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_post_item_pickup"},"MC_POST_ITEM_PICKUP"),(0,l.kt)("p",null,"Fires on the first frame that an item is no longer queued (i.e. when the animation of Isaac holding the item above his head is finished and the item is actually added to the player's inventory)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"li"},"ItemType")," provided."),(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional third argument that will make the callback only fire if the ",(0,l.kt)("inlineCode",{parentName:"li"},"CollectibleType")," or the ",(0,l.kt)("inlineCode",{parentName:"li"},"TrinketType")," matches the ID provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postItemPickup(\n  player: EntityPlayer,\n  pickingUpItem: PickingUpItem,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_change_type"},"MC_POST_PLAYER_CHANGE_TYPE"),(0,l.kt)("p",null,"Fires when a player entity changes its player type (i.e. character). For example, it will fire after using Clicker, after dying with the Judas' Shadow item, etc."),(0,l.kt)("p",null,"Notably, it does not fire after the player uses the Flip item or the Esau Jr. item, because those items cause separate player entities to be created. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_POST_FLIP")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_POST_ESAU_JR")," callbacks to handle those situations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerChangeType(player: EntityPlayer) {}\n")),(0,l.kt)("h3",{id:"mc_post_player_change_health"},"MC_POST_PLAYER_CHANGE_HEALTH"),(0,l.kt)("p",null,"Fires on the MC_POST_UPDATE frame when a player entity gains or loses any health (i.e. hearts)."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerChangeHealth(player: EntityPlayer, healthType: HealthType, amount: int) {}\n")),(0,l.kt)("h3",{id:"mc_post_player_fatal_damage"},"MC_POST_PLAYER_FATAL_DAMAGE"),(0,l.kt)("p",null,"Fires from the MC_ENTITY_TAKE_DMG callback when a player takes fatal damage. Return false to prevent the fatal damage."),(0,l.kt)("p",null,"Note that this function does properly take into account Guppy's Collar, Broken Ankh, and Mysterious Paper. It does not take into account Spirit Shackles, since that isn't a \"real\" revival item. For detecting Spirit Shackles, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"willReviveFromSpiritShackles()")," helper function."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerFatalDamage(player: EntityPlayer) {}\n")),(0,l.kt)("h3",{id:"mc_pre_custom_revive"},"MC_PRE_CUSTOM_REVIVE"),(0,l.kt)("p",null,"Fires from the MC_POST_PLAYER_FATAL_DAMAGE callback. If you want to initiate a custom revival, return an integer that corresponds to the item or type of revival that you are doing. Otherwise, return undefined to continue the fatal damage."),(0,l.kt)("p",null,"This callback is useful because reviving the player after the game things that player should have died will result in the save data for the run getting deleted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preCustomRevive(player: EntityPlayer) {}\n")),(0,l.kt)("h3",{id:"mc_post_custom_revive"},"MC_POST_CUSTOM_REVIVE"),(0,l.kt)("p",null,"Fires from the MC_POST_PLAYER_UPDATE callback after the player has finished the death animation, has teleported to the previous room, and is ready to play the animation for the modded revival item. The ",(0,l.kt)("inlineCode",{parentName:"p"},"revivalType")," will match the value returned from the ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_PRE_CUSTOM_REVIVE")," callback."),(0,l.kt)("p",null,"In this callback, you must play an animation with something along the lines of ",(0,l.kt)("inlineCode",{parentName:"p"},"player.AnimateCollectible(CollectibleTypeCustom.COLLECTIBLE_MY_REVIVAL_ITEM);"),", otherwise the animation for a 1-Up will play."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if the revival type matches the one provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postCustomRevive(player: EntityPlayer, revivalType: int) {}\n")),(0,l.kt)("h3",{id:"mc_post_flip"},"MC_POST_FLIP"),(0,l.kt)("p",null,"Fires after the player has used the Flip item. Unlike the vanilla MC_USE_ITEM callback, this callback will return the player object for the new Lazarus (not the one who used the Flip item)."),(0,l.kt)("p",null,'This callback is useful because there is no way to get access to the "flipped" character entity before the player has actually used the Flip item.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFlip(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_first_flip"},"MC_POST_FIRST_FLIP"),(0,l.kt)("p",null,"Fires after the player has used the Flip item for the first time. Unlike the vanilla MC_USE_ITEM callback, this callback will return the player object for the new Lazarus (not the one who used the Flip item)."),(0,l.kt)("p",null,'This callback is useful because there is no way to get access to the "flipped" character entity before the player has actually used the Flip item.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFirstFlip(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_esau_jr"},"MC_POST_ESAU_JR"),(0,l.kt)("p",null,"Fires one game frame after the player has used the Esau Jr. item. (The player is not updated to the new character until a game frame has passed.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEsauJr(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_first_esau_jr"},"MC_POST_FIRST_ESAU_JR"),(0,l.kt)("p",null,"Fires one game frame after the player has first used the Esau Jr. item. (The player is not updated to the new character until a game frame has passed.)"),(0,l.kt)("p",null,"This callback is useful because there is no way to get access to the Esau Jr. character entity before the player has actually used the Esau Jr. item."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFirstEsauJr(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_transformation"},"MC_POST_TRANSFORMATION"),(0,l.kt)("p",null,"Fires on the frame that a player gains or loses a new transformation."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerForm")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTransformation(player: EntityPlayer, playerForm: PlayerForm, hasForm: boolean): void {}\n")),(0,l.kt)("h3",{id:"mc_post_purchase"},"MC_POST_PURCHASE"),(0,l.kt)("p",null,"Fires on the MC_POST_UPDATE frame that a pickup with a price disappears. The player who purchased it is assumed to be the player that was not holding anything on the previous frame but is holding something now."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"li"},"PickupVariant")," provided."),(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional third argument that will make the callback only fire if it matches the subtype provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPurchase(\n  player: EntityPlayer,\n  pickupVariant: PickupVariant,\n  pickupSubType: int,\n  pickupPrice: int,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_post_sacrifice"},"MC_POST_SACRIFICE"),(0,l.kt)("p",null,"Fires on the frame that a player takes damage from spikes in a Sacrifice Room."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postSacrifice(player: EntityPlayer, numSacrifices: int): void {}\n")),(0,l.kt)("h3",{id:"mc_post_cursed_teleport"},"MC_POST_CURSED_TELEPORT"),(0,l.kt)("p",null,'Fires on the first frame that the "TeleportUp" animation begins playing after a player triggers a Cursed Eye teleport or a Cursed Skull teleport. (Both of these have the same effect in causing Isaac to be teleported to a random room.)'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postCursedTeleport(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_slot_init"},"MC_POST_SLOT_INIT"),(0,l.kt)("p",null,"Fires when a new slot entity is initialized. Specifically, this is either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"in the MC_POST_NEW_ROOM callback (firing every time a room is entered, even if the entity was previously there on a previous room entry)"),(0,l.kt)("li",{parentName:"ul"},"in the MC_POST_UPDATE callback (if the entity appeared midway through the room, like when a Wheel of Fortune card is used)")),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"SlotVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postSlotInit(slot: Entity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_slot_update"},"MC_POST_SLOT_UPDATE"),(0,l.kt)("p",null,"Fires on every MC_POST_UPDATE frame that a slot entity exists."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"SlotVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postSlotUpdate(slot: Entity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_slot_render"},"MC_POST_SLOT_RENDER"),(0,l.kt)("p",null,"Fires on every MC_POST_RENDER frame that a slot entity exists."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"SlotVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postSlotRender(slot: Entity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_slot_destroyed"},"MC_POST_SLOT_DESTROYED"),(0,l.kt)("p",null,"Fires on the first MC_POST_RENDER frame that a slot plays the animation that indicates that it has broken."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"SlotVariant")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postSlotDestroyed(slot: Entity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_grid_entity_init"},"MC_POST_GRID_ENTITY_INIT"),(0,l.kt)("p",null,"Fires when a new grid entity is initialized. Specifically, this is either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"in the MC_POST_NEW_ROOM callback (firing every time a room is entered, even if the entity was previously there on a previous room entry)"),(0,l.kt)("li",{parentName:"ul"},"in the MC_POST_UPDATE callback (if the entity appeared midway through the room, like when the trapdoor appears after defeating It Lives!)")),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"GridEntityType")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGridEntityInit(gridEntity: GridEntity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_grid_entity_update"},"MC_POST_GRID_ENTITY_UPDATE"),(0,l.kt)("p",null,"Fires on every MC_POST_UPDATE frame that a grid entity exists."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"GridEntityType")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGridEntityUpdate(gridEntity: GridEntity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_grid_entity_remove"},"MC_POST_GRID_ENTITY_REMOVE"),(0,l.kt)("p",null,"Fires when a new grid entity is removed. Specifically, this on the MC_POST_UPDATE frame after a grid entity no longer exists (where it did exist a frame ago)."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"GridEntityType")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGridEntityRemove(gridIndex: int, gridEntityType: GridEntityType): void {}\n")))}h.isMDXComponent=!0}}]);