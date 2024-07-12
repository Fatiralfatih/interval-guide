import { RarityTypes, TypePost } from "~/utils"

type WhuteringType = {
    id: number,
    hero: string,
    thumbnail: string,
    link: string,
    element: TypePost,
    isNew?: boolean
    rarity: RarityTypes
}

type WhuteringTypeWeapons = {
    broadBlade: string
    gauntlets: string
    pistols: string
    rectifier: string
    sword: string
}

type WhuteringTypeElements = {
    aero: string
    electro: string
    fusion: string,
    glacio: string,
    havoc: string
    spectro: string
}

export type {
    WhuteringType,
    WhuteringTypeWeapons,
    WhuteringTypeElements
}