import { ListLinkType } from "~/utils"


const listLinksItemsGenshin: ListLinkType[] = [
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

const listLinksItemsGenshinWithDatabase = [
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

export { listLinksItemsGenshin, listLinksItemsGenshinWithDatabase }