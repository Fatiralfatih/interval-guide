import { RarityTypes, TypePost } from "~/utils"

type ZenlessType = {
    id: number,
    hero: string,
    thumbnail: string,
    link: string,
    element: TypePost,
    role?: TypePost,
    isNew?: boolean
    rarity: RarityTypes
}

type ZenlessStars = {
    A: string
    S: string
}

type ZenlessElements = {
    electric: string
    ether: string
    fire: string
    ice: string
    physical: string
}

type ZenlessWeapons = {
    victoria: string
    belobog: string
    section: string
    cunning: string
    obols: string
}

type ZenlessRoles = {
    anomaly: string
    attack: string
    defense: string
    stun: string
    support: string
}

export type {
    ZenlessType,
    ZenlessStars,
    ZenlessElements,
    ZenlessWeapons,
    ZenlessRoles
}