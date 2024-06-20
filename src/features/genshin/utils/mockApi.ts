import { GenshinData } from "../types/dataTypes"

const materials = {
    justice: {
        title: 'Justice',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Justice.png'
    },
    everamber: {
        title: 'Everamber',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Everamber.png',
    },
    lumitoile: {
        title: 'Lumitoile',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Lumitoile.png'
    },
    transoceanicPearl: {
        title: 'Transoceanic Pearl',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Transoceanic_Pearl.png'
    },
    fontemerUnihorn: {
        title: 'Fontemer Unihorn',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Fontemer_Unihorn.png'
    }
}

const genshinData: GenshinData[] = [
    {
        id: 1,
        hero: 'clorinde',
        element: 'electro',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Clorinde.png',
    },
    {
        id: 2,
        hero: 'Shetos',
        element: 'electro',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sethos.png'
    },
    {
        id: 3,
        hero: 'Albedo',
        element: 'geo',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Albedo.png',
    },
    {
        id: 4,
        hero: 'Alhaitam',
        element: 'dendro',
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Alhaitham.png'
    },
    {
        id: 5,
        hero: 'Aloy',
        element: 'cyro',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Aloy.png'
    },
    {
        id: 6,
        hero: 'Arlecchino',
        element: 'pyro',
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Arlecchino.png',
    }
]

export { genshinData, materials }

// clorinde
// weapons: {
//     type: 'sword',
//     bestWeapons: [
//         { title: 'Absolution', thumbnail: '' },
//         { title: 'Haran Geppaku Futsu', thumbnail: '' },
//         { title: 'Mistsplitter Reforged', thumbnail: '' },
//         { title: 'Finale of the Deep R5', thumbnail: '' },
//         { title: 'The Black Sword', thumbnail: '' },
//     ],
//     rarity: [3, 4, 5],
// },
// artefaks: {
//     bestArterfaks: [
//         'Fragment of Harmonic Whimsy',
//         'Thundering Fury',
//         "Gladiator's Finale",
//     ]
// },
// materials: [materials.justice, materials.everamber],
// stasts: {
//     sands: 'ATK%',
//     circlet: 'CRIT Rate / CRIT DMG',
//     goblet: 'Electro DMG',
//     subsStat: 'CRIT Rate / CRIT DMG > ATK% > Elemental Mastery'
// },
// talents: {
//     title: 'Oath of Hunting Shadows',
//     normalAttack: 'Performs up to 5 rapid strikes.',
//     chargedAttack: 'Consumes a certain amount of Stamina and fires Suppressing Shots in a fan pattern with her pistolet.',
//     pluginAttack: 'Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
//     elementalSkill: {
//         title: "Hunter's Vigil",
//         description: `Preparing her pistolet, she enters the "Night Vigil" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into "Swift Hunt" pistolet attacks, and the DMG dealt is converted into Electro DMG that cannot be overridden by infusions, and she will be unable to use Charged Attacks. Using her Elemental Skill will transform it into "Impale the Night": Perform a lunging attack, dealing Electro DMG. The DMG done through the aforementioned method is considered Normal Attack DMG.

//         Swift Hunt
//         When her Bond of Life is equal to or greater than 100% of her max HP: Performs a pistolet shot.
//         When her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.

//         Impale the Night
//         The current percentage value of Clorinde's Bond of Life determines its effect:
//         When the Bond of Life value is 0%, perform a normal lunging strike;
//         When the Bond of Life value is less than 100% of her max HP, Clorinde is healed based on the Bond of Life value, and the AoE of the lunging attack and the DMG dealt is increased;
//         When the value of the Bond of Life is equal to or greater than 100% of her max HP, use Impale the Night: Pact. The healing multiplier is increased, and the AoE and DMG dealt by the lunge is increased even further.

//         In addition, when Clorinde is in the Night Vigil state, healing effects other than Impale the Night will not take effect and will instead be converted into a Bond of Life that is a percentage of the healing that would have been received.

//         Clorinde will exit the "Night Vigil" state when she leaves the field.

//         Arkhe: Ousia
//         Periodically, when Clorinde's Swift Hunt shots strike opponents, she will summon a Surging Blade at the position hit that deals Ousia-aligned Electro DMG.
//         `,
//     },
//     elementalBurst: {
//         title: 'Last Lightfall',
//         description: 'Grants herself a Bond of Life based upon her own max HP before swiftly evading and striking with saber and sidearm as one, dealing AoE Electro DMG.'
//     }
// },
// passives: {
//     ascend1: {
//         title: 'Dark-Shattering Flame',
//         description: `After a nearby party member triggers an Electro-related reaction against an opponent, Electro DMG dealt by Clorinde's Normal Attacks and Last Lightfall will be increased by 20% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. The Maximum DMG increase achievable this way for the above attacks is 1,800.`
//     },
//     ascend4: {
//         title: 'Lawful Remuneration',
//         description: `If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.
//         Additionally, Hunter's Vigil's Night Vigil state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%.`
//     },
//     passive: {
//         title: "Night Vigil's Harvest",
//         description: 'Displays the location of nearby resources unique to Fontaine on the mini-map.'
//     }
// },
// constelations: {
//     constelation1: {
//         title: "From This Day, I Pass the Candle's Shadow-Veil",
//         description: `While Hunter's Vigil's Night Vigil state is active, when Electro DMG from Clorinde's Normal Attacks hit opponents, they will trigger 2 coordinated attacks from a Nightvigil Shade summoned near the hit opponent, each dealing 30% of Clorinde's ATK as Electro DMG.
//         This effect can occur once every 1.2s. DMG dealt this way is considered Normal Attack DMG.`
//     },
//     constelation2: {
//         title: 'Now, As We Face the Perils of the Long Night',
//         description: `Enhance the Passive Talent "Dark-Shattering Flame": After a nearby party member triggers an Electro-related reaction against an opponent, Electro DMG dealt by Clorinde's Normal Attacks and Last Lightfall will be increased by 30% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. When you have 3 stacks, Clorinde's interruption resistance will be increased. The Maximum DMG increase achievable this way for the above attacks is 2,700.
//         You must first unlock the Passive Talent "Dark-Shattering Flame.`
//     },
//     constelation3: {
//         title: "I Pledge to Remember the Oath of Daylight",
//         description: "Increases the Level of Hunter's Vigil by 3. Maximum upgrade level is 15."
//     },
//     constelation4: {
//         title: 'To Enshrine Tears, Life, and Love',
//         description: "When Last Lightfall deals DMG to opponent(s), DMG dealt is increased based on Clorinde's Bond of Life percentage. Every 1% of her current Bond of Life will increase Last Lightfall DMG by 2%. The maximum Last Lightfall DMG increase achievable this way is 200%."
//     },
//     constelation5: {
//         title: "Holding Dawn's Coming as My Votive",
//         description: "Increases the Level of Last Lightfall by 3. Maximum upgrade level is 15."
//     },
//     constelation6: {
//         title: "And So Shall I Never Despair",
//         description: `For 12s after Hunter's Vigil is used, Clorinde's CRIT Rate will be increased by 10%, and her CRIT DMG by 70%.
//         Additionally, while Night Vigil is active, a Glimbright Shade will appear under specific circumstances, executing an attack that deals 200% of Clorinde's ATK as Electro DMG. DMG dealt this way is considered Normal Attack DMG.
//         The Glimbright Shade will appear under the following circumstances:
//         When Clorinde is about to be hit by an attack.
//         When Clorinde uses Impale the Night: Pact.
//         1 Glimbright Shade can be summoned in the aforementioned ways every 1s. 6 Shades can be summoned per single Night Vigil duration.
//         In addition, while Night Vigil is active, the DMG Clorinde receives is decreased by 80% and her interruption resistance is increased. This effect will disappear after the Night Vigil state ends or 1s after she summons 6 Glimbright Shades.`
//     }
// }