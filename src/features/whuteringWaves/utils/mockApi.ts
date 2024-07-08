import { KeyValueOfObject, TypePost } from "~/utils"
import { WhuteringType, WhuteringTypeElements, WhuteringTypeWeapons } from "../types"

const elementsWhutering: KeyValueOfObject<WhuteringTypeElements, TypePost> = {
    aero: {
        title: 'Aero',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/T_IconElementAero.webp',
    },
    electro: {
        title: 'Electro',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/T_IconElementElectro.webp'
    },
    fusion: {
        title: 'Fusion',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/T_IconElementFusion.webp',
    },
    glacio: {
        title: 'Glacio',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/T_IconElementGlacio.webp'
    },
    havoc: {
        title: 'Havoc',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/T_IconElementHavoc.webp'
    },
    spectro: {
        title: 'Spectro',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/T_IconElementSpectro.webp'
    }
}

const weaponsWhutering: KeyValueOfObject<WhuteringTypeWeapons, TypePost> = {
    broadBlade: {
        title: 'Broad Blade',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/broadblade.webp'
    },
    gauntlets: {
        title: 'gauntlets',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/gauntlets.webp'
    },
    pistols: {
        title: 'Pistols',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/pistols.webp'
    },
    rectifier: {
        title: 'rectifier',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/rectifier.webp'
    },
    sword: {
        title: 'Sword',
        thumbnail: 'https://rerollcdn.com/WW/ww-images/icons/sword.webp'
    }
}

const whuteringData: WhuteringType[] = [
    {
        id: 1,
        hero: 'calcharo',
        element: elementsWhutering.electro,
        link: `path-/calcharo`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/calcharo/thumb.webp',
    },
    {
        id: 2,
        hero: 'changli',
        element: elementsWhutering.fusion,
        link: `path-/changli`,
        rarity: 5,
        isNew: true,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/changli/thumb.webp',
    },
    {
        id: 3,
        hero: 'encore',
        element: elementsWhutering.fusion,
        link: `path-/encore`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/encore/thumb.webp',
    },
    {
        id: 4,
        hero: 'jianxin',
        element: elementsWhutering.aero,
        link: `path-/jianxin`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/jianxin/thumb.webp',
    },
    {
        id: 5,
        hero: 'jinhsi',
        element: elementsWhutering.spectro,
        link: `path-/jinhsi`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/jinhsi/thumb.webp',
    },
    {
        id: 6,
        hero: 'jiyan',
        element: elementsWhutering.aero,
        link: `path-/jiyan`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/jiyan/thumb.webp',
    },
    {
        id: 7,
        hero: 'lingyang',
        element: elementsWhutering.glacio,
        link: `path-/lingyang`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/lingyang/thumb.webp',
    },
    {
        id: 8,
        hero: 'rover (havoc)',
        element: elementsWhutering.havoc,
        link: `path-/rover-(havoc)`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/rover-(havoc)/thumb.webp',
    },
    {
        id: 9,
        hero: 'rover (spectro)',
        element: elementsWhutering.spectro,
        link: `path-/rover-(spectro)`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/rover-(spectro)/thumb.webp',
    },
    {
        id: 10,
        hero: 'verina',
        element: elementsWhutering.spectro,
        link: `path-/verina`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/verina/thumb.webp',
    },
    {
        id: 11,
        hero: 'yinlin',
        element: elementsWhutering.electro,
        link: `path-/yinlin`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/yinlin/thumb.webp',
    },
    {
        id: 12,
        hero: 'aalto',
        element: elementsWhutering.aero,
        link: `path-/aalto`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/aalto/thumb.webp',
    },
    {
        id: 13,
        hero: 'baizhi',
        element: elementsWhutering.glacio,
        link: `path-/baizhi`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/baizhi/thumb.webp',
    },
    {
        id: 14,
        hero: 'chixia',
        element: elementsWhutering.fusion,
        link: `path-/chixia`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/chixia/thumb.webp',
    },
    {
        id: 15,
        hero: 'danjin',
        element: elementsWhutering.havoc,
        link: `path-/danjin`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/danjin/thumb.webp',
    },
    {
        id: 16,
        hero: 'mortefi',
        element: elementsWhutering.fusion,
        link: `path-/mortefi`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/mortefi/thumb.webp',
    },
    {
        id: 17,
        hero: 'sanhua',
        element: elementsWhutering.glacio,
        link: `path-/sanhua`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/sanhua/thumb.webp',
    },
    {
        id: 18,
        hero: 'taoqi',
        element: elementsWhutering.havoc,
        link: `path-/taoqi`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/taoqi/thumb.webp',
    },
    {
        id: 19,
        hero: 'yangyang',
        element: elementsWhutering.aero,
        link: `path-/yangyang`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/yangyang/thumb.webp',
    },
    {
        id: 20,
        hero: 'yuanwu',
        element: elementsWhutering.electro,
        link: `path-/yuanwu`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/WW/ww-images/characters/yuanwu/thumb.webp',
    },
]

export {
    weaponsWhutering,
    elementsWhutering,
    whuteringData
}