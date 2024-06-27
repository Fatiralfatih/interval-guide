import { ListLinkType } from "~/utils";

const listLinkItemsHonkai: ListLinkType[] = [
    {
        id: 1,
        link: '/characters',
        title: 'Characters',
    },
    {
        id: 2,
        title: 'Tier List',
        link: '/tier-list',
    },
    {
        id: 3,
        title: 'Farming Guide',
        link: '/farming-guide',
    },
    {
        id: 4,
        title: 'Stats',
        children: [
            {
                id: 1,
                title: 'Characters Stats',
                link: '/characters-stats'
            },
            {
                id: 2,
                title: 'Light Cone Stats',
                link: '/light-cone-stats',
            }
        ]
    },
    {
        id: 5,
        title: 'Light cones',
        link: '/light-cones'
    },
    {
        id: 6,
        title: 'Relics',
        link: '/relics'
    },
    {
        id: 7,
        title: 'Planar Ornaments',
        link: '/planar-ornaments'
    }
]

const listLinkItemsHonkaiMobile: ListLinkType[] = [
    {
        id: 1,
        link: '/characters',
        title: 'Characters',
    },
    {
        id: 2,
        title: 'Tier List',
        link: '/tier-list',
    },
    {
        id: 3,
        title: 'Farming Guide',
        link: '/farming-guide',
    },
    {
        id: 10,
        title: 'Characters Stats',
        link: '/characters-stats'
    },
    {
        id: 123,
        title: 'Light Cone Stats',
        link: '/light-cone-stats',
    },
    {
        id: 5,
        title: 'Light cones',
        link: '/light-cones'
    },
    {
        id: 6,
        title: 'Relics',
        link: '/relics'
    },
    {
        id: 7,
        title: 'Planar Ornaments',
        link: '/planar-ornaments'
    }
]

export {
    listLinkItemsHonkai,
    listLinkItemsHonkaiMobile
}