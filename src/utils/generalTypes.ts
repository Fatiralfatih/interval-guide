type RarityTypes = 3 | 4 | 5

type TypePost = {
    title: string,
    description?: string,
    thumbnail?: string
}

interface WeaponsGeneral<T>  {
    type: T,
    signature?: string,
    bestWeapons?: string | TypePost[]
    rarity: RarityTypes[]
}

interface ListLinkType {
    id: number;
    title: string;
    link: string;
}

export type {
    WeaponsGeneral,
    RarityTypes,
    TypePost,
    ListLinkType
}