(self.webpackChunkisaacscript_github_io=self.webpackChunkisaacscript_github_io||[]).push([[58],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),_=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=_(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=_(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var _=2;_<l;_++)r[_]=n[_];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2986:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return _},toc:function(){return p},default:function(){return d}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),r=["components"],o={title:"Function Signatures"},c=void 0,_={unversionedId:"function-signatures",id:"function-signatures",isDocsHomePage:!1,title:"Function Signatures",description:"For reference, this is a handy list of all possible callback functions.",source:"@site/docs/function-signatures.md",sourceDirName:".",slug:"/function-signatures",permalink:"/docs/function-signatures",editUrl:"https://github.com/IsaacScript/isaacscript.github.io/edit/main/docs/function-signatures.md",version:"current",frontMatter:{title:"Function Signatures"},sidebar:"sidebar",previous:{title:"Gotchas",permalink:"/docs/gotchas"}},p=[{value:"Vanilla Callbacks",id:"vanilla-callbacks",children:[{value:"MC_NPC_UPDATE (0)",id:"mc_npc_update-0",children:[]},{value:"MC_POST_UPDATE (1)",id:"mc_post_update-1",children:[]},{value:"MC_POST_RENDER (2)",id:"mc_post_render-2",children:[]},{value:"MC_USE_ITEM (3)",id:"mc_use_item-3",children:[]},{value:"MC_POST_PEFFECT_UPDATE (4)",id:"mc_post_peffect_update-4",children:[]},{value:"MC_USE_CARD (5)",id:"mc_use_card-5",children:[]},{value:"MC_FAMILIAR_UPDATE (6)",id:"mc_familiar_update-6",children:[]},{value:"MC_FAMILIAR_INIT (7)",id:"mc_familiar_init-7",children:[]},{value:"MC_EVALUATE_CACHE (8)",id:"mc_evaluate_cache-8",children:[]},{value:"MC_POST_PLAYER_INIT (9)",id:"mc_post_player_init-9",children:[]},{value:"MC_USE_PILL (10)",id:"mc_use_pill-10",children:[]},{value:"MC_ENTITY_TAKE_DMG (11)",id:"mc_entity_take_dmg-11",children:[]},{value:"MC_POST_CURSE_EVAL (12)",id:"mc_post_curse_eval-12",children:[]},{value:"MC_INPUT_ACTION (13)",id:"mc_input_action-13",children:[]},{value:"MC_POST_GAME_STARTED (14)",id:"mc_post_game_started-14",children:[]},{value:"MC_POST_GAME_END (15)",id:"mc_post_game_end-15",children:[]},{value:"MC_PRE_GAME_EXIT (16)",id:"mc_pre_game_exit-16",children:[]},{value:"MC_POST_NEW_LEVEL (17)",id:"mc_post_new_level-17",children:[]},{value:"MC_POST_NEW_ROOM (18)",id:"mc_post_new_room-18",children:[]},{value:"MC_GET_CARD (20)",id:"mc_get_card-20",children:[]},{value:"MC_GET_SHADER_PARAMS (21)",id:"mc_get_shader_params-21",children:[]},{value:"MC_EXECUTE_CMD (22)",id:"mc_execute_cmd-22",children:[]},{value:"MC_PRE_USE_ITEM (23)",id:"mc_pre_use_item-23",children:[]},{value:"MC_PRE_ENTITY_SPAWN (24)",id:"mc_pre_entity_spawn-24",children:[]},{value:"MC_POST_FAMILIAR_RENDER (25)",id:"mc_post_familiar_render-25",children:[]},{value:"MC_PRE_FAMILIAR_COLLISION (26)",id:"mc_pre_familiar_collision-26",children:[]},{value:"MC_POST_NPC_INIT (27)",id:"mc_post_npc_init-27",children:[]},{value:"MC_POST_NPC_RENDER (28)",id:"mc_post_npc_render-28",children:[]},{value:"MC_POST_NPC_DEATH (29)",id:"mc_post_npc_death-29",children:[]},{value:"MC_PRE_NPC_COLLISION (30)",id:"mc_pre_npc_collision-30",children:[]},{value:"MC_POST_PLAYER_UPDATE (31)",id:"mc_post_player_update-31",children:[]},{value:"MC_POST_PLAYER_RENDER (32)",id:"mc_post_player_render-32",children:[]},{value:"MC_PRE_PLAYER_COLLISION (33)",id:"mc_pre_player_collision-33",children:[]},{value:"MC_POST_PICKUP_INIT (34)",id:"mc_post_pickup_init-34",children:[]},{value:"MC_POST_PICKUP_UPDATE (35)",id:"mc_post_pickup_update-35",children:[]},{value:"MC_POST_PICKUP_RENDER (36)",id:"mc_post_pickup_render-36",children:[]},{value:"MC_POST_PICKUP_SELECTION (37)",id:"mc_post_pickup_selection-37",children:[]},{value:"MC_PRE_PICKUP_COLLISION (38)",id:"mc_pre_pickup_collision-38",children:[]},{value:"MC_POST_TEAR_INIT (39)",id:"mc_post_tear_init-39",children:[]},{value:"MC_POST_TEAR_UPDATE (40)",id:"mc_post_tear_update-40",children:[]},{value:"MC_POST_TEAR_RENDER (41)",id:"mc_post_tear_render-41",children:[]},{value:"MC_PRE_TEAR_COLLISION (42)",id:"mc_pre_tear_collision-42",children:[]},{value:"MC_POST_PROJECTILE_INIT (43)",id:"mc_post_projectile_init-43",children:[]},{value:"MC_POST_PROJECTILE_UPDATE (44)",id:"mc_post_projectile_update-44",children:[]},{value:"MC_POST_PROJECTILE_RENDER (45)",id:"mc_post_projectile_render-45",children:[]},{value:"MC_PRE_PROJECTILE_COLLISION (46)",id:"mc_pre_projectile_collision-46",children:[]},{value:"MC_POST_LASER_INIT (47)",id:"mc_post_laser_init-47",children:[]},{value:"MC_POST_LASER_UPDATE (48)",id:"mc_post_laser_update-48",children:[]},{value:"MC_POST_LASER_RENDER (49)",id:"mc_post_laser_render-49",children:[]},{value:"MC_POST_KNIFE_INIT (50)",id:"mc_post_knife_init-50",children:[]},{value:"MC_POST_KNIFE_UPDATE (51)",id:"mc_post_knife_update-51",children:[]},{value:"MC_POST_KNIFE_RENDER (52)",id:"mc_post_knife_render-52",children:[]},{value:"MC_PRE_KNIFE_COLLISION (53)",id:"mc_pre_knife_collision-53",children:[]},{value:"MC_POST_EFFECT_INIT (54)",id:"mc_post_effect_init-54",children:[]},{value:"MC_POST_EFFECT_UPDATE (55)",id:"mc_post_effect_update-55",children:[]},{value:"MC_POST_EFFECT_RENDER (56)",id:"mc_post_effect_render-56",children:[]},{value:"MC_POST_BOMB_INIT (57)",id:"mc_post_bomb_init-57",children:[]},{value:"MC_POST_BOMB_UPDATE (58)",id:"mc_post_bomb_update-58",children:[]},{value:"MC_POST_BOMB_RENDER (59)",id:"mc_post_bomb_render-59",children:[]},{value:"MC_PRE_BOMB_COLLISION (60)",id:"mc_pre_bomb_collision-60",children:[]},{value:"MC_POST_FIRE_TEAR (61)",id:"mc_post_fire_tear-61",children:[]},{value:"MC_PRE_GET_COLLECTIBLE (62)",id:"mc_pre_get_collectible-62",children:[]},{value:"MC_POST_GET_COLLECTIBLE (63)",id:"mc_post_get_collectible-63",children:[]},{value:"MC_GET_PILL_COLOR (64)",id:"mc_get_pill_color-64",children:[]},{value:"MC_GET_PILL_EFFECT (65)",id:"mc_get_pill_effect-65",children:[]},{value:"MC_GET_TRINKET (66)",id:"mc_get_trinket-66",children:[]},{value:"MC_POST_ENTITY_REMOVE (67)",id:"mc_post_entity_remove-67",children:[]},{value:"MC_POST_ENTITY_KILL (68)",id:"mc_post_entity_kill-68",children:[]},{value:"MC_PRE_NPC_UPDATE (69)",id:"mc_pre_npc_update-69",children:[]},{value:"MC_PRE_SPAWN_CLEAN_AWARD (70)",id:"mc_pre_spawn_clean_award-70",children:[]},{value:"MC_PRE_ROOM_ENTITY_SPAWN (71)",id:"mc_pre_room_entity_spawn-71",children:[]}]},{value:"Custom Callbacks",id:"custom-callbacks",children:[{value:"MC_POST_GAME_STARTED_REORDERED",id:"mc_post_game_started_reordered",children:[]},{value:"MC_POST_NEW_LEVEL_REORDERED",id:"mc_post_new_level_reordered",children:[]},{value:"MC_POST_NEW_ROOM_REORDERED",id:"mc_post_new_room_reordered",children:[]},{value:"MC_PRE_ITEM_PICKUP",id:"mc_pre_item_pickup",children:[]},{value:"MC_POST_ITEM_PICKUP",id:"mc_post_item_pickup",children:[]},{value:"MC_POST_PLAYER_CHANGE_TYPE",id:"mc_post_player_change_type",children:[]},{value:"MC_POST_FLIP",id:"mc_post_flip",children:[]},{value:"MC_POST_FIRST_FLIP",id:"mc_post_first_flip",children:[]},{value:"MC_POST_ESAU_JR",id:"mc_post_esau_jr",children:[]},{value:"MC_POST_FIRST_ESAU_JR",id:"mc_post_first_esau_jr",children:[]},{value:"MC_POST_TRANSFORMATION",id:"mc_post_transformation",children:[]},{value:"MC_POST_SACRIFICE",id:"mc_post_sacrifice",children:[]},{value:"MC_POST_CURSED_TELEPORT",id:"mc_post_cursed_teleport",children:[]},{value:"MC_POST_GRID_ENTITY_INIT",id:"mc_post_grid_entity_init",children:[]},{value:"MC_POST_GRID_ENTITY_UPDATE",id:"mc_post_grid_entity_update",children:[]},{value:"MC_POST_GRID_ENTITY_REMOVE",id:"mc_post_grid_entity_remove",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For reference, this is a handy list of all possible callback functions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#vanilla-callbacks"},"Vanilla Callbacks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-callbacks"},"Custom Callbacks"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"vanilla-callbacks"},"Vanilla Callbacks"),(0,l.kt)("h3",{id:"mc_npc_update-0"},"MC_NPC_UPDATE (0)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function NPCUpdate(npc: EntityNPC): void {}\n")),(0,l.kt)("h3",{id:"mc_post_update-1"},"MC_POST_UPDATE (1)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postUpdate(): void {}\n")),(0,l.kt)("h3",{id:"mc_post_render-2"},"MC_POST_RENDER (2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postRender(): void {}\n")),(0,l.kt)("h3",{id:"mc_use_item-3"},"MC_USE_ITEM (3)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function useItem(\n  collectibleType: CollectibleType | int,\n  rng: RNG,\n  player: EntityPlayer,\n  useFlags: int,\n  activeSlot: int,\n  customVarData: int,\n): boolean | { Discharge: boolean; Remove: boolean; ShowAnim: boolean } | void;\n")),(0,l.kt)("h3",{id:"mc_post_peffect_update-4"},"MC_POST_PEFFECT_UPDATE (4)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPEffectUpdate(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_use_card-5"},"MC_USE_CARD (5)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function useCard(card: Card | int, player: EntityPlayer, useFlags: int): void {}\n")),(0,l.kt)("h3",{id:"mc_familiar_update-6"},"MC_FAMILIAR_UPDATE (6)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function familiarUpdate(familiar: EntityFamiliar): void {}\n")),(0,l.kt)("h3",{id:"mc_familiar_init-7"},"MC_FAMILIAR_INIT (7)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function familiarInit(familiar: EntityFamiliar): void {}\n")),(0,l.kt)("h3",{id:"mc_evaluate_cache-8"},"MC_EVALUATE_CACHE (8)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function evaluateCache(player: EntityPlayer, cacheFlag: CacheFlag): void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_init-9"},"MC_POST_PLAYER_INIT (9)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerInit(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_use_pill-10"},"MC_USE_PILL (10)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function usePill(\n  pillEffect: PillEffect | int,\n  player: EntityPlayer,\n  useFlags: int,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_entity_take_dmg-11"},"MC_ENTITY_TAKE_DMG (11)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function entityTakeDmg(\n  tookDamage: Entity,\n  damageAmount: float,\n  damageFlags: DamageFlag,\n  damageSource: EntityRef,\n  damageCountdownFrames: int,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_curse_eval-12"},"MC_POST_CURSE_EVAL (12)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postCurseEval(curses: LevelCurse | int): LevelCurse | int | void {}\n")),(0,l.kt)("h3",{id:"mc_input_action-13"},"MC_INPUT_ACTION (13)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function inputAction(\n  entity: Entity | null,\n  inputHook: InputHook,\n  buttonAction: ButtonAction,\n): boolean | float | void {}\n")),(0,l.kt)("h3",{id:"mc_post_game_started-14"},"MC_POST_GAME_STARTED (14)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGameStarted(isContinued: boolean): void {}\n")),(0,l.kt)("h3",{id:"mc_post_game_end-15"},"MC_POST_GAME_END (15)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGameEnd(isGameOver: boolean): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_game_exit-16"},"MC_PRE_GAME_EXIT (16)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preGameExit(shouldSave: boolean): void {}\n")),(0,l.kt)("h3",{id:"mc_post_new_level-17"},"MC_POST_NEW_LEVEL (17)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNewLevel(): void {}\n")),(0,l.kt)("h3",{id:"mc_post_new_room-18"},"MC_POST_NEW_ROOM (18)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNewRoom(): void {}\n")),(0,l.kt)("h3",{id:"mc_get_card-20"},"MC_GET_CARD (20)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function getCard(\n  rng: RNG,\n  card: Card | int,\n  includePlayingCards: boolean,\n  includeRunes: boolean,\n  onlyRunes: boolean,\n): Card | int | void {}\n")),(0,l.kt)("h3",{id:"mc_get_shader_params-21"},"MC_GET_SHADER_PARAMS (21)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function getShaderParams(shaderName: string): Record<string, unknown> {}\n")),(0,l.kt)("h3",{id:"mc_execute_cmd-22"},"MC_EXECUTE_CMD (22)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function executeCmd(command: string, parameters: string): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_use_item-23"},"MC_PRE_USE_ITEM (23)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preUseItem(\n  collectibleType: CollectibleType | int,\n  rng: RNG,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_pre_entity_spawn-24"},"MC_PRE_ENTITY_SPAWN (24)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preEntitySpawn(\n  entityType: EntityType | int,\n  variant: int,\n  subType: int,\n  position: Vector,\n  velocity: Vector,\n  spawner: Entity,\n  initSeed: int,\n): [EntityType | int, int, int, int] | void {}\n")),(0,l.kt)("h3",{id:"mc_post_familiar_render-25"},"MC_POST_FAMILIAR_RENDER (25)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFamiliarRender(\n  entityFamiliar: EntityFamiliar,\n  renderOffset: Vector,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_familiar_collision-26"},"MC_PRE_FAMILIAR_COLLISION (26)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preFamiliarCollision(\n  familiar: EntityFamiliar,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_npc_init-27"},"MC_POST_NPC_INIT (27)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNPCInit(npc: EntityNPC): void {}\n")),(0,l.kt)("h3",{id:"mc_post_npc_render-28"},"MC_POST_NPC_RENDER (28)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNPCRender(npc: EntityNPC, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_post_npc_death-29"},"MC_POST_NPC_DEATH (29)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNPCDeath(npc: EntityNPC): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_npc_collision-30"},"MC_PRE_NPC_COLLISION (30)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preNPCCollision(\n  npc: EntityNPC,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_update-31"},"MC_POST_PLAYER_UPDATE (31)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerUpdate(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_render-32"},"MC_POST_PLAYER_RENDER (32)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerRender(player: EntityPlayer, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_player_collision-33"},"MC_PRE_PLAYER_COLLISION (33)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function prePlayerCollision(\n  player: EntityPlayer,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_pickup_init-34"},"MC_POST_PICKUP_INIT (34)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPickupInit(pickup: EntityPickup): void {}\n")),(0,l.kt)("h3",{id:"mc_post_pickup_update-35"},"MC_POST_PICKUP_UPDATE (35)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPickupUpdate(pickup: EntityPickup): void {}\n")),(0,l.kt)("h3",{id:"mc_post_pickup_render-36"},"MC_POST_PICKUP_RENDER (36)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPickupRender(pickup: EntityPickup, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_post_pickup_selection-37"},"MC_POST_PICKUP_SELECTION (37)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPickupSelection(\n  pickup: EntityPickup,\n  variant: PickupVariant | int,\n  subType: int,\n): [PickupVariant | int, int] | void {}\n")),(0,l.kt)("h3",{id:"mc_pre_pickup_collision-38"},"MC_PRE_PICKUP_COLLISION (38)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function prePickupCollision(\n  pickup: EntityPickup,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_tear_init-39"},"MC_POST_TEAR_INIT (39)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTearInit(tear: EntityTear): void {}\n")),(0,l.kt)("h3",{id:"mc_post_tear_update-40"},"MC_POST_TEAR_UPDATE (40)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTearUpdate(tear: EntityTear): void {}\n")),(0,l.kt)("h3",{id:"mc_post_tear_render-41"},"MC_POST_TEAR_RENDER (41)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTearRender(tear: EntityTear, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_tear_collision-42"},"MC_PRE_TEAR_COLLISION (42)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preTearCollision(\n  tear: EntityTear,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_projectile_init-43"},"MC_POST_PROJECTILE_INIT (43)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postProjectileInit(projectile: EntityProjectile): void {}\n")),(0,l.kt)("h3",{id:"mc_post_projectile_update-44"},"MC_POST_PROJECTILE_UPDATE (44)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postProjectileUpdate(projectile: EntityProjectile): void {}\n")),(0,l.kt)("h3",{id:"mc_post_projectile_render-45"},"MC_POST_PROJECTILE_RENDER (45)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postProjectileRender(\n  projectile: EntityProjectile,\n  renderOffset: Vector,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_projectile_collision-46"},"MC_PRE_PROJECTILE_COLLISION (46)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preProjectileCollision(\n  projectile: EntityProjectile,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_laser_init-47"},"MC_POST_LASER_INIT (47)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postLaserInit(laser: EntityLaser): void {}\n")),(0,l.kt)("h3",{id:"mc_post_laser_update-48"},"MC_POST_LASER_UPDATE (48)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postLaserUpdate(laser: EntityLaser): void {}\n")),(0,l.kt)("h3",{id:"mc_post_laser_render-49"},"MC_POST_LASER_RENDER (49)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postLaserRender(laser: EntityLaser, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_post_knife_init-50"},"MC_POST_KNIFE_INIT (50)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postKnifeInit(knife: EntityKnife): void {}\n")),(0,l.kt)("h3",{id:"mc_post_knife_update-51"},"MC_POST_KNIFE_UPDATE (51)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postKnifeUpdate(knife: EntityKnife): void {}\n")),(0,l.kt)("h3",{id:"mc_post_knife_render-52"},"MC_POST_KNIFE_RENDER (52)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postKnifeRender(knife: EntityKnife, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_knife_collision-53"},"MC_PRE_KNIFE_COLLISION (53)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preKnifeCollision(\n  knife: EntityKnife,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_effect_init-54"},"MC_POST_EFFECT_INIT (54)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEffectInit(effect: EntityEffect): void {}\n")),(0,l.kt)("h3",{id:"mc_post_effect_update-55"},"MC_POST_EFFECT_UPDATE (55)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEffectUpdate(effect: EntityEffect): void {}\n")),(0,l.kt)("h3",{id:"mc_post_effect_render-56"},"MC_POST_EFFECT_RENDER (56)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEffectRender(effect: EntityEffect, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_post_bomb_init-57"},"MC_POST_BOMB_INIT (57)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postBombInit(bomb: EntityBomb): void {}\n")),(0,l.kt)("h3",{id:"mc_post_bomb_update-58"},"MC_POST_BOMB_UPDATE (58)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postBombUpdate(bomb: EntityBomb): void {}\n")),(0,l.kt)("h3",{id:"mc_post_bomb_render-59"},"MC_POST_BOMB_RENDER (59)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postBombRender(bomb: EntityBomb, renderOffset: Vector): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_bomb_collision-60"},"MC_PRE_BOMB_COLLISION (60)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preBombCollision(\n  bomb: EntityBomb,\n  collider: Entity,\n  low: boolean,\n): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_post_fire_tear-61"},"MC_POST_FIRE_TEAR (61)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFireTear(tear: EntityTear): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_get_collectible-62"},"MC_PRE_GET_COLLECTIBLE (62)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preGetCollectible(\n  itemPoolType: ItemPoolType,\n  decrease: boolean,\n  seed: int,\n): CollectibleType | int | void {}\n")),(0,l.kt)("h3",{id:"mc_post_get_collectible-63"},"MC_POST_GET_COLLECTIBLE (63)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGetCollectible(\n  collectibleType: CollectibleType | int,\n  itemPoolType: ItemPoolType,\n  decrease: boolean,\n  seed: int,\n): CollectibleType | int | void {}\n")),(0,l.kt)("h3",{id:"mc_get_pill_color-64"},"MC_GET_PILL_COLOR (64)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function getPillColor(seed: int): PillColor | int | void {}\n")),(0,l.kt)("h3",{id:"mc_get_pill_effect-65"},"MC_GET_PILL_EFFECT (65)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function getPillEffect(\n  pillEffect: PillEffect | int,\n  pillColor: PillColor | int,\n): PillEffect | int | void {}\n")),(0,l.kt)("h3",{id:"mc_get_trinket-66"},"MC_GET_TRINKET (66)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function getTrinket(\n  trinketType: TrinketType | int,\n  rng: RNG,\n): TrinketType | int | void {}\n")),(0,l.kt)("h3",{id:"mc_post_entity_remove-67"},"MC_POST_ENTITY_REMOVE (67)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEntityRemove(entity: Entity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_entity_kill-68"},"MC_POST_ENTITY_KILL (68)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEntityKill(entity: Entity): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_npc_update-69"},"MC_PRE_NPC_UPDATE (69)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preNPCUpdate(entity: Entity): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_pre_spawn_clean_award-70"},"MC_PRE_SPAWN_CLEAN_AWARD (70)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preSpawnClearAward(rng: RNG, spawnPosition: Vector): boolean | void {}\n")),(0,l.kt)("h3",{id:"mc_pre_room_entity_spawn-71"},"MC_PRE_ROOM_ENTITY_SPAWN (71)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preRoomEntitySpawn(\n  entityType: EntityType | int,\n  variant: int,\n  subType: int,\n  gridIndex: int,\n  seed: int,\n): [EntityType | int, int, int] | void {}\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"custom-callbacks"},"Custom Callbacks"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://isaacscript.github.io/isaacscript-common/"},(0,l.kt)("inlineCode",{parentName:"a"},"isaacscript-common"))," package provides access to some custom callbacks, which are listed below."),(0,l.kt)("p",null,"In order to use custom callbacks, you must first invoke the ",(0,l.kt)("a",{parentName:"p",href:"https://isaacscript.github.io/isaacscript-common/modules/callbacks_upgradeMod.html#upgradeMod"},(0,l.kt)("inlineCode",{parentName:"a"},"upgradeMod"))," function."),(0,l.kt)("h3",{id:"mc_post_game_started_reordered"},"MC_POST_GAME_STARTED_REORDERED"),(0,l.kt)("p",null,"Similar to the vanilla callback of the same name, but fires in the correct order with respect to the PostNewLevel and the PostNewRoom callbacks:"),(0,l.kt)("p",null,"PostGameStarted --\x3e PostNewLevel --\x3e PostNewRoom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGameStarted(isContinued: boolean): void {}\n")),(0,l.kt)("h3",{id:"mc_post_new_level_reordered"},"MC_POST_NEW_LEVEL_REORDERED"),(0,l.kt)("p",null,"Similar to the vanilla callback of the same name, but fires in the correct order with respect to the PostNewLevel and the PostNewRoom callbacks:"),(0,l.kt)("p",null,"PostGameStarted --\x3e PostNewLevel --\x3e PostNewRoom"),(0,l.kt)("p",null,"If some specific cases, mods can change the current level during run initialization (on the 0th frame). However, due to how the callback reordering works, the custom PostNewLevel callback will never fire on the 0th frame. To get around this, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"forceNewLevelCallback()")," function before changing levels to temporarily force the callback to fire."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNewLevel(): void {}\n")),(0,l.kt)("h3",{id:"mc_post_new_room_reordered"},"MC_POST_NEW_ROOM_REORDERED"),(0,l.kt)("p",null,"Similar to the vanilla callback of the same name, but fires in the correct order with respect to the PostNewLevel and the PostNewRoom callbacks:"),(0,l.kt)("p",null,"PostGameStarted --\x3e PostNewLevel --\x3e PostNewRoom"),(0,l.kt)("p",null,"If some specific cases, mods can change the current room during run initialization (on the 0th frame). However, due to how the callback reordering works, the custom PostNewRoom callback will never fire on the 0th frame. To get around this, call the ",(0,l.kt)("inlineCode",{parentName:"p"},"forceNewRoomCallback()")," function before changing levels to temporarily force the callback to fire."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postNewRoom(): void {}\n")),(0,l.kt)("h3",{id:"mc_pre_item_pickup"},"MC_PRE_ITEM_PICKUP"),(0,l.kt)("p",null,"Fires on the first frame that an item becomes queued (i.e. when Isaac begins to hold the item above his head)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"li"},"ItemType")," provided."),(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional third argument that will make the callback only fire if the ",(0,l.kt)("inlineCode",{parentName:"li"},"CollectibleType")," or the ",(0,l.kt)("inlineCode",{parentName:"li"},"TrinketType")," matches the ID provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function preItemPickup(\n  player: EntityPlayer,\n  pickingUpItem: PickingUpItem,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_post_item_pickup"},"MC_POST_ITEM_PICKUP"),(0,l.kt)("p",null,"Fires on the first frame that an item is no longer queued (i.e. when the animation of Isaac holding the item above his head is finished and the item is actually added to the player's inventory)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"li"},"ItemType")," provided."),(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional third argument that will make the callback only fire if the ",(0,l.kt)("inlineCode",{parentName:"li"},"CollectibleType")," or the ",(0,l.kt)("inlineCode",{parentName:"li"},"TrinketType")," matches the ID provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postItemPickup(\n  player: EntityPlayer,\n  pickingUpItem: PickingUpItem,\n): void {}\n")),(0,l.kt)("h3",{id:"mc_post_player_change_type"},"MC_POST_PLAYER_CHANGE_TYPE"),(0,l.kt)("p",null,"Fires when a player entity changes its player type (i.e. character). For example, it will fire after using Clicker, after dying with the Judas' Shadow item, etc."),(0,l.kt)("p",null,"Notably, it does not fire after the player uses the Flip item or the Esau Jr. item, because those items cause separate player entities to be created. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_POST_FLIP")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"MC_POST_ESAU_JR")," callbacks to handle those situations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postPlayerChangeType(player: EntityPlayer) {}\n")),(0,l.kt)("h3",{id:"mc_post_flip"},"MC_POST_FLIP"),(0,l.kt)("p",null,"Fires after the player has used the Flip item."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFlip(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_first_flip"},"MC_POST_FIRST_FLIP"),(0,l.kt)("p",null,"Fires after the player has used the Flip item for the first time."),(0,l.kt)("p",null,'This callback is useful because there is no way to get access to the "flipped" character entity before the player has actually used the Flip item.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFirstFlip(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_esau_jr"},"MC_POST_ESAU_JR"),(0,l.kt)("p",null,"Fires one game frame after the player has used the Esau Jr. item. (The player is not updated to the new character until a game frame has passed.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postEsauJr(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_first_esau_jr"},"MC_POST_FIRST_ESAU_JR"),(0,l.kt)("p",null,"Fires one game frame after the player has first used the Esau Jr. item. (The player is not updated to the new character until a game frame has passed.)"),(0,l.kt)("p",null,"This callback is useful because there is no way to get access to the Esau Jr. character entity before the player has actually used the Esau Jr. item."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postFirstEsauJr(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_transformation"},"MC_POST_TRANSFORMATION"),(0,l.kt)("p",null,"Fires on the frame that a player gains or loses a new transformation."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"li"},"PlayerForm")," provided.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postTransformation(player: EntityPlayer, playerForm: PlayerForm, hasForm: boolean): void {}\n")),(0,l.kt)("h3",{id:"mc_post_sacrifice"},"MC_POST_SACRIFICE"),(0,l.kt)("p",null,"Fires on the frame that a player takes damage from spikes in a Sacrifice Room."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postSacrifice(player: EntityPlayer, numSacrifices: int): void {}\n")),(0,l.kt)("h3",{id:"mc_post_cursed_teleport"},"MC_POST_CURSED_TELEPORT"),(0,l.kt)("p",null,'Fires on the first frame that the "TeleportUp" animation begins playing after a player triggers a Cursed Eye teleport or a Cursed Skull teleport. (Both of these have the same effect in causing Isaac to be teleported to a random room.)'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postCursedTeleport(player: EntityPlayer): void {}\n")),(0,l.kt)("h3",{id:"mc_post_grid_entity_init"},"MC_POST_GRID_ENTITY_INIT"),(0,l.kt)("p",null,"Fires when a new grid entity is initialized. Specifically, this is either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"in the MC_POST_NEW_ROOM callback (firing every time a room is entered, even if the grid entity was previously there on a previous room entry)"),(0,l.kt)("li",{parentName:"ul"},"in the MC_POST_UPDATE callback (if the grid entity has only appeared midway through the room, like when the trapdoor appears after defeating It Lives!)")),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"GridEntityType")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGridEntityInit(gridEntity: GridEntity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_grid_entity_update"},"MC_POST_GRID_ENTITY_UPDATE"),(0,l.kt)("p",null,"Fires on every MC_POST_UPDATE frame that a grid entity exists."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"GridEntityType")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGridEntityUpdate(gridEntity: GridEntity): void {}\n")),(0,l.kt)("h3",{id:"mc_post_grid_entity_remove"},"MC_POST_GRID_ENTITY_REMOVE"),(0,l.kt)("p",null,"Fires on the MC_POST_UPDATE frame after a grid entity no longer exists (where it did exist a frame ago)."),(0,l.kt)("p",null,"When registering the callback, takes an optional second argument that will make the callback only fire if it matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"GridEntityType")," provided."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function postGridEntityRemove(gridIndex: int, gridEntityType: GridEntityType): void {}\n")))}d.isMDXComponent=!0}}]);