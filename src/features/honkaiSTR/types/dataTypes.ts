import { RarityTypes, TypePost } from "~/utils"

type HonkaiType = {
    id: number,
    hero: string,
    thumbnail: string,
    link: string,
    element: TypePost,
    isNew?: boolean
    rarity: RarityTypes,
}

type HonkaiStars = {
    4: number,
    5: number,
}

type HonkaiElements = {
    fire: string
    ice: string
    imaginary: string
    lightning: string
    physical: string
    quantum: string
    wind: string
}

type HonkaiWeapons = {
    abundance: string,
    destruction: string
    erudition: string
    harmony: string
    hunt: string
    nihility: string
    preservation: string
}

export type {
    HonkaiType,
    HonkaiStars,
    HonkaiElements,
    HonkaiWeapons
}