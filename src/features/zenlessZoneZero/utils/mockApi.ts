import { KeyValueOfObject, TypePost } from "~/utils"
import { ZenlessElements, ZenlessRoles, ZenlessStars, ZenlessType, ZenlessWeapons } from "../types"

const starsZenless: KeyValueOfObject<ZenlessStars, TypePost> = {
    A: {
        title: 'A',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/a_big.png'
    },
    S: {
        title: 'S',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/s_big.png'
    }
}

const elementsZenless: KeyValueOfObject<ZenlessElements, TypePost> = {
    electric: {
        title: 'electric',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/electric.png'
    },
    ether: {
        title: 'Ether',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/ether.png'
    },
    fire: {
        title: 'fire',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/fire.png'
    },
    ice: {
        title: 'Ice',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/ice.png'
    },
    physical: {
        title: 'Physical',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/physical.png'
    }
}

const weaponsZenless: KeyValueOfObject<ZenlessWeapons, TypePost> = {
    victoria: {
        title: 'victoria housekeeping co',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/victoria_housekeeping_co.png'
    },
    belobog: {
        title: 'belobog heavy industries',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/belobog_heavy_industries.png',
    },
    section: {
        title: 'Section 6',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/section_6.png'
    },
    cunning: {
        title: 'cunning hares',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/cunning_hares.png'
    },
    obols: {
        title: 'OBOLS Squad',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/obols_squad.png'
    }
}

const rolesZenless: KeyValueOfObject<ZenlessRoles, TypePost> = {
    anomaly: {
        title: 'anomaly',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/anomaly.png'
    },
    attack: {
        title: 'attack',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/attack.png'
    },
    defense: {
        title: 'defense',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/defense.png'
    },
    stun: {
        title: 'stun',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/stun.png'
    },
    support: {
        title: 'support',
        thumbnail: 'https://rerollcdn.com/ZZZ/UI/support.png'
    },
}

const zenlessData: ZenlessType[] = [
    {
        id: 1,
        hero: 'ellen',
        element: elementsZenless.ice,
        rarity: 5,
        role: rolesZenless.attack,
        link: `path-/ellen`,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_ellen.png'
    },
    {
        id: 2,
        hero: 'grace',
        role: rolesZenless.anomaly,
        element: elementsZenless.electric,
        link: `path-/grace`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_grace.png'
    },
    {
        id: 3,
        hero: 'koleda',
        role: rolesZenless.stun,
        element: elementsZenless.fire,
        link: `path-/koleda`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_koleda.png'
    },
    {
        id: 4,
        hero: 'lycaon',
        role: rolesZenless.stun,
        element: elementsZenless.ice,
        link: `path-/lycaon`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/lycaon.png'
    },
    {
        id: 5,
        hero: 'nekomata',
        role: rolesZenless.attack,
        element: elementsZenless.physical,
        link: `path-/nekomata`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/nekomata.png'
    },
    {
        id: 6,
        hero: 'rina',
        role: rolesZenless.support,
        element: elementsZenless.electric,
        link: `path-/rina`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/rina.png'
    },
    {
        id: 7,
        hero: 'soldier 11',
        role: rolesZenless.attack,
        element: elementsZenless.fire,
        link: `path-/soldier-11`,
        rarity: 5,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_soldier_11.png'
    },
    {
        id: 8,
        hero: 'anby',
        role: rolesZenless.stun,
        element: elementsZenless.electric,
        link: `path-/anby`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_anby.png'
    },
    {
        id: 9,
        hero: 'anton',
        role: rolesZenless.attack,
        element: elementsZenless.electric,
        link: `path-/anton`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_anton.png'
    },
    {
        id: 10,
        hero: 'ben',
        role: rolesZenless.defense,
        element: elementsZenless.fire,
        link: `path-/ben`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_ben.png'
    },
    {
        id: 11,
        hero: 'billy',
        role: rolesZenless.attack,
        element: elementsZenless.physical,
        link: `path-/billy`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_billy.png'
    },
    {
        id: 12,
        hero: 'corin',
        role: rolesZenless.attack,
        element: elementsZenless.physical,
        link: `path-/corin`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_corin.png'
    },
    {
        id: 13,
        hero: 'lucy',
        role: rolesZenless.support,
        element: elementsZenless.fire,
        link: `path-/lucy`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_lucy.png'
    },
    {
        id: 14,
        hero: 'nicole',
        role: rolesZenless.support,
        element: elementsZenless.ether,
        link: `path-/nicole`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_nicole.png'
    },
    {
        id: 15,
        hero: 'piper',
        role: rolesZenless.anomaly,
        element: elementsZenless.physical,
        link: `path-/piper`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_piper.png'
    },
    {
        id: 16,
        hero: 'soukaku',
        role: rolesZenless.support,
        element: elementsZenless.ice,
        link: `path-/soukaku`,
        rarity: 4,
        thumbnail: 'https://rerollcdn.com/ZZZ/Character/thumb_soukaku.png'
    },
]

export {
    starsZenless,
    elementsZenless,
    weaponsZenless,
    rolesZenless,
    zenlessData
}