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

export type {
    WhuteringType,
}