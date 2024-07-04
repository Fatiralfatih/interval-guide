import { RarityTypes, TypePost } from "~/utils"

type HonkaiType = {
    id: number,
    hero: string,
    thumbnail: string,
    link: string,
    element: TypePost,
    isNew?: boolean
    rarity: RarityTypes
}

export type {
    HonkaiType,
}