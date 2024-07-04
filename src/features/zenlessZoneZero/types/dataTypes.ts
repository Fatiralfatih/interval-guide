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

export type {
    ZenlessType
}