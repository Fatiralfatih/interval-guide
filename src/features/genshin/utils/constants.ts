import { ListLinkType, TypePost } from "~/utils"


const listLinksItemsGenshinMobile: ListLinkType[] = [
    {
        id: 1,
        title: 'Characters',
        link: '/characters'
    },
    {
        id: 2,
        title: 'Build',
        link: '/build'
    },
    {
        id: 3,
        title: 'Teams',
        link: '/teams',
    },
    {
        id: 3,
        title: 'Tier List',
        link: '/tier-list'
    },
    {
        id: 4,
        title: 'Farming Guide',
        link: '/farming-guide',
    },
    {
        id: 1,
        title: 'Weapons',
        link: '/weapons'
    },
    {
        id: 2,
        title: 'Artifacts',
        link: '/artifacts'
    },
    {
        id: 3,
        title: 'Elements',
        link: '/elements'
    },
    {
        id: 4,
        title: 'Cooking',
        link: '/cooking'
    },
    {
        id: 5,
        title: 'Alchemy',
        link: '/alchemy'
    }
]

const listLinksItemsGenshin = [
    {
        id: 1,
        title: 'Characters',
        link: '/'
    },
    {
        id: 2,
        title: 'Build',
        link: '/build'
    },
    {
        id: 3,
        title: 'Teams',
        link: '/teams',
    },
    {
        id: 4,
        title: 'Tier List',
        link: '/tier-list'
    },
    {
        id: 5,
        title: 'Farming Guide',
        link: '/farming-guide',
    },
    {
        id: 6,
        title: 'Database',
        children: [
            {
                id: 1,
                title: 'Weapons',
            },
            {
                id: 2,
                title: 'Artefaks'
            },
            {
                id: 3,
                title: 'Elements'
            },
            {
                id: 4,
                title: 'Cooking'
            },
            {
                id: 5,
                title: 'Alchemy'
            }
        ]
    }
]

const listElementsGenshin: TypePost[] = [
    {
        title: 'anemo',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_anemo.png',
    },
    {
        title: 'cyro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_cryo.png'
    },
    {
        title: 'electro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_electro.png'
    },
    {
        title: 'dendro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_dendro.png'
    },
    {
        title: 'geo',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_geo.png',
    },
    {
        title: 'hydro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_hydro.png'
    },
    {
        title: 'pyro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_pyro.png',
    }
]

const listWeaponsGenshin: TypePost[] = [
    {
        title: 'bow',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/weapon_bow.png',
    },
    {
        title: 'catalyst',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/weapon_catalyst.png'
    },
    {
        title: 'claymore',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/weapon_claymore.png'
    },
    {
        title: 'polearn',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png'
    },
    {
        title: 'sword',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/weapon_sword.png'
    }
]

const listStarsGenshin: TypePost[] = [
    {
        title: '4',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/rarity_4.png'
    },
    {
        title: '5',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/rarity_5.png'
    }
]

export {
    listLinksItemsGenshinMobile,
    listLinksItemsGenshin,
    listElementsGenshin,
    listWeaponsGenshin,
    listStarsGenshin
}