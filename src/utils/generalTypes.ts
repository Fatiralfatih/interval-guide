type RarityTypes = 4 | 5

type TypePost = {
    title: string,
    description?: string,
    thumbnail: string
}

interface WeaponsGeneral<T> {
    type: T,
    signature?: string,
    bestWeapons?: string | TypePost[]
    rarity: RarityTypes[]
}

interface ListLinkType {
    id: number;
    title: string;
    link?: string;
    children?: ListLinkType[],
}

type IconPost = {
    icon: string
    title: string,
    alt: string
}

type GamesName = {
    whutering: string,
    genshin: string,
    honkaiSTR: string,
    zenlessZoneZero: string
}

type KeyValueOfObject<T extends { [key: string]: any }, O> = {
    [key in keyof T]: O
}

export type {
    WeaponsGeneral,
    RarityTypes,
    TypePost,
    ListLinkType,
    KeyValueOfObject,
    IconPost,
    GamesName
}