
const listLinksItems = [
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
        title: 'Tier List',
        link: '/tier-list'
    },
    {
        id: 4,
        title: 'Farming Guide',
        link: '/farming-guide',
    },
    {
        id: 5,
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

export { listLinksItems }