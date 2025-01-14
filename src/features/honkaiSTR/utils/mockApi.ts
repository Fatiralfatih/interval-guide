import { KeyValueOfObject, TypePost } from "~/utils"
import { HonkaiElements, HonkaiStars, HonkaiType, HonkaiWeapons } from "../types/dataTypes"

const honkaiStars: KeyValueOfObject<HonkaiStars, TypePost> = {
    4: {
        title: '4 Star',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/rarity_4.png'
    },
    5: {
        title: '5 Star',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/rarity_5.png'
    }
}

const honkaiElements: KeyValueOfObject<HonkaiElements, TypePost> = {
    fire: {
        title: 'Fire',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/element_fire.png'
    },
    ice: {
        title: 'Ice',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/element_ice.png',
    },
    imaginary: {
        title: 'Imaginary',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/element_imaginary.png',
    },
    lightning: {
        title: 'Lightning',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/element_lightning.png'
    },
    physical: {
        title: 'Physical',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/element_physical.png',
    },
    quantum: {
        title: 'Quantum',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/element_quantum.png',
    },
    wind: {
        title: 'Wind',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/element_wind.png',
    }
}

const honkaiWeapons: KeyValueOfObject<HonkaiWeapons, TypePost> = {
    abundance: {
        title: 'The Abudance',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/path_the_abundance.png'
    },
    destruction: {
        title: 'The Destruction',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/path_the_destruction.png'
    },
    erudition: {
        title: 'The Erudition',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/path_the_erudition.png',
    },
    harmony: {
        title: 'The Harmony',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/path_the_harmony.png',
    },
    hunt: {
        title: 'The Hunt',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/path_the_hunt.png'
    },
    nihility: {
        title: 'The Nihility',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/path_the_nihility.png',
    },
    preservation: {
        title: 'The Preservation',
        thumbnail: 'https://rerollcdn.com/STARRAIL/Filters/path_the_preservation.png',
    }
}

const honkaiData: HonkaiType[] = [
    {
        id: 1,
        hero: 'Firefly',
        element: honkaiElements.fire,
        isNew: true,
        link: `path-/firefly`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3025.png',
    },
    {
        id: 2,
        hero: 'Jade',
        element: honkaiElements.quantum,
        isNew: true,
        link: `path-/jade`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3026.png',
    },
    {
        id: 3,
        hero: 'acheron',
        element: honkaiElements.lightning,
        link: `path-/acheron`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3017.png',
    },
    {
        id: 4,
        hero: 'argenti',
        element: honkaiElements.physical,
        link: `path-/argenti`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3009.png',
    },
    {
        id: 5,
        hero: 'aventurine',
        element: honkaiElements.imaginary,
        link: `path-/aventurine`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3018.png',
    },
    {
        id: 6,
        hero: 'bailu',
        element: honkaiElements.lightning,
        link: `path-/bailu`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1211.png',
    },
    {
        id: 52,
        hero: 'black swan',
        element: honkaiElements.wind,
        link: `path-/black-swan`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3014.png',
    },
    {
        id: 7,
        hero: 'blade',
        element: honkaiElements.wind,
        link: `path-/blade`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1205.png',
    },
    {
        id: 8,
        hero: 'boothiill',
        element: honkaiElements.physical,
        link: `path-/boothiill`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3020.png',
    },
    {
        id: 53,
        hero: 'bronya',
        element: honkaiElements.wind,
        link: `path-/bronya`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1101.png',
    },
    {
        id: 9,
        hero: 'clara',
        element: honkaiElements.physical,
        link: `path-/clara`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1107.png',
    },
    {
        id: 10,
        hero: 'dan heng - Imbibitor Lunae',
        element: honkaiElements.imaginary,
        link: `path-/dan-heng-imbibitor-lunae`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3002.png',
    },
    {
        id: 11,
        hero: 'Dr. Ratio',
        element: honkaiElements.imaginary,
        link: `path-/dr-ratio`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3012.png',
    },
    {
        id: 12,
        hero: 'Fu Xuan',
        element: honkaiElements.quantum,
        link: `path-/fu-xuan`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3003.png',
    },
    {
        id: 13,
        hero: 'gepard',
        element: honkaiElements.ice,
        link: `path-/gepard`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1104.png',
    },
    {
        id: 14,
        hero: 'himeko',
        element: honkaiElements.fire,
        link: `path-/himeko`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1003.png',
    },
    {
        id: 15,
        hero: 'huohuo',
        element: honkaiElements.wind,
        link: `path-/huohuo`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3008.png',
    },
    {
        id: 16,
        hero: 'jing yuan',
        element: honkaiElements.lightning,
        link: `path-/jing-yuan`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1204.png',
    },
    {
        id: 17,
        hero: 'jingliu',
        element: honkaiElements.ice,
        link: `path-/jingliu`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3005.png',
    },
    {
        id: 18,
        hero: 'kafka',
        element: honkaiElements.lightning,
        link: `path-/kafka`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1005.png',
    },
    {
        id: 19,
        hero: 'luocha',
        element: honkaiElements.imaginary,
        link: `path-/luocha`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1203.png',
    },
    {
        id: 20,
        hero: 'robin',
        element: honkaiElements.physical,
        link: `path-/robin`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3021.png',
    },
    {
        id: 21,
        hero: 'ruan mei',
        element: honkaiElements.ice,
        link: `path-/ruan-mei`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3011.png',
    },
    {
        id: 22,
        hero: 'seele',
        element: honkaiElements.quantum,
        link: `path-/seele`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1102.png',
    },
    {
        id: 23,
        hero: 'silver wolf',
        element: honkaiElements.quantum,
        link: `path-/silver-wolf`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1006.png',
    },
    {
        id: 24,
        hero: 'sparkle',
        element: honkaiElements.quantum,
        link: `path-/sparkle`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3016.png',
    },
    {
        id: 25,
        hero: 'topaz and numby',
        element: honkaiElements.fire,
        link: `path-/topaz-and-numby`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3006.png',
    },
    {
        id: 26,
        hero: 'trailblazer (fire)',
        element: honkaiElements.fire,
        link: `path-/trailblazer-(fire)`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/8003.png',
    },
    {
        id: 27,
        hero: 'trailblazer (imaginary)',
        element: honkaiElements.imaginary,
        link: `path-/trailblazer-(imaginary)`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3022.png',
    },
    {
        id: 28,
        hero: 'trailblazer (physical)',
        element: honkaiElements.physical,
        link: `path-/trailblazer-(physical)`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/8001.png',
    },
    {
        id: 29,
        hero: 'welt',
        element: honkaiElements.imaginary,
        link: `path-/welt`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1004.png',
    },
    {
        id: 30,
        hero: 'yanqing',
        element: honkaiElements.ice,
        link: `path-/yanqing`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1209.png',
    },
    {
        id: 31,
        hero: 'arlan',
        element: honkaiElements.lightning,
        link: `path-/arlan`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1008.png',
    },
    {
        id: 32,
        hero: 'asta',
        element: honkaiElements.fire,
        link: `path-/asta`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1009.png',
    },
    {
        id: 33,
        hero: 'dan heng',
        element: honkaiElements.wind,
        link: `path-/dan-heng`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1002.png',
    },
    {
        id: 34,
        hero: 'gallagher',
        element: honkaiElements.fire,
        link: `path-/gallagher`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3019.png',
    },
    {
        id: 35,
        hero: 'guinaifen',
        element: honkaiElements.fire,
        link: `path-/guinaifen`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3007.png',
    },
    {
        id: 36,
        hero: 'hanya',
        element: honkaiElements.physical,
        link: `path-/hanya`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3010.png',
    },
    {
        id: 37,
        hero: 'herta',
        element: honkaiElements.ice,
        link: `path-/herta`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1013.png',
    },
    {
        id: 38,
        hero: 'hook',
        element: honkaiElements.fire,
        link: `path-/hook`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1109.png',
    },
    {
        id: 39,
        hero: 'luka',
        element: honkaiElements.physical,
        link: `path-/luka`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3000.png',
    },
    {
        id: 40,
        hero: 'lynx',
        element: honkaiElements.quantum,
        link: `path-/lynx`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3004.png',
    },
    {
        id: 41,
        hero: 'march 7th',
        element: honkaiElements.ice,
        link: `path-/march-7th`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1001.png',
    },
    {
        id: 42,
        hero: 'misha',
        element: honkaiElements.ice,
        link: `path-/misha`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3015.png',
    },
    {
        id: 43,
        hero: 'natasha',
        element: honkaiElements.physical,
        link: `path-/natasha`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1105.png',
    },
    {
        id: 44,
        hero: 'pela',
        element: honkaiElements.ice,
        link: `path-/pela`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1106.png',
    },
    {
        id: 45,
        hero: 'qingque',
        element: honkaiElements.quantum,
        link: `path-/qingque`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1201.png',
    },
    {
        id: 46,
        hero: 'sampo',
        element: honkaiElements.wind,
        link: `path-/sampo`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1108.png',
    },
    {
        id: 47,
        hero: 'serval',
        element: honkaiElements.lightning,
        link: `path-/serval`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1103.png',
    },
    {
        id: 48,
        hero: 'shushang',
        element: honkaiElements.physical,
        link: `path-/shushang`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1206.png',
    },
    {
        id: 49,
        hero: 'tingyun',
        element: honkaiElements.lightning,
        link: `path-/tingyun`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1202.png',
    },
    {
        id: 50,
        hero: 'xueyi',
        element: honkaiElements.quantum,
        link: `path-/xueyi`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/3013.png',
    },
    {
        id: 51,
        hero: 'yukong',
        element: honkaiElements.imaginary,
        link: `path-/yukong`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/STARRAIL/Characters/Thumb/1207.png',
    },
]

export {
    honkaiData,
    honkaiElements,
    honkaiStars,
    honkaiWeapons,
}