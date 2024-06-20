import {
    RarityTypes,
    TypePost,
    WeaponsGeneral
} from "~/utils"

type GenshinElements = 'anemo' | 'cyro' | 'electro' | 'dendro' | 'geo' | 'hydro' | 'pyro'

type GenshinWeapons = 'bow' | 'catalyst' | 'claymore' | 'polearn' | 'sword'

type GenshinRole = 'subDps' | 'support' | 'mainDps' | 'healer'

type GenshinStats = {
    sands: string,
    goblet: string,
    circlet: string,
    subsStat: string
}

interface Artefaks extends TypePost {
    rarity: RarityTypes;
    twoPieceBonus: string;
    fourPieceBonus: string;
}

type GenshinData = {
    id: number,
    hero: string,
    thumbnail: string,
    element: GenshinElements,
    role?: GenshinRole | GenshinRole[],
    // weapons?: WeaponsGeneral<GenshinWeapons>,
    // artefaks?: Artefaks,
    // materials?: TypePost,
    // stasts?: GenshinStats
    // talents?: {
    //     basedSkill: {
    //         title: string
    //         normalAttack: string
    //         chargedAttack: string
    //         pluginAttack: string
    //         thumbnail: string
    //     }
    //     elementalSkill: TypePost
    //     elementalBurst: TypePost
    // },
    // passives?: {
    //     ascend1: TypePost,
    //     ascend4: TypePost,
    //     passive: TypePost,
    // },
    // constelations?: {
    //     constelationOne: TypePost,
    //     constelationTwo: TypePost,
    //     constelationThree: TypePost,
    //     constelationFour: TypePost,
    //     constelationFive: TypePost,
    //     constelationSix: TypePost,
    // }
}

export type {
    GenshinElements,
    GenshinWeapons,
    GenshinRole,
    GenshinData,
}