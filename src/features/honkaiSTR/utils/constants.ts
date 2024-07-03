import { ListLinkType, TypePost } from "~/utils";
import { honkaiElements, honkaiStars, honkaiWeapons } from "./mockApi";

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

const listStarsHonkai: TypePost[] = [
    {
        title: honkaiStars[4].title,
        thumbnail: honkaiStars[4].thumbnail,
    },
    {
        title: honkaiStars[5].title,
        thumbnail: honkaiStars[5].thumbnail
    }
]

const listElementsHonkai: TypePost[] = [
    {
        title: honkaiElements.fire.title,
        thumbnail: honkaiElements.fire.thumbnail
    },
    {
        title: honkaiElements.ice.title,
        thumbnail: honkaiElements.ice.thumbnail,
    },
    {
        title: honkaiElements.imaginary.title,
        thumbnail: honkaiElements.imaginary.thumbnail,
    },
    {
        title: honkaiElements.lightning.title,
        thumbnail: honkaiElements.lightning.thumbnail,
    },
    {
        title: honkaiElements.physical.title,
        thumbnail: honkaiElements.physical.thumbnail,
    },
    {
        title: honkaiElements.quantum.title,
        thumbnail: honkaiElements.quantum.thumbnail
    },
    {
        title: honkaiElements.wind.title,
        thumbnail: honkaiElements.wind.thumbnail,
    }
]

const listWeaponsHonkai: TypePost[] = [
    honkaiWeapons.abundance,
    honkaiWeapons.destruction,
    honkaiWeapons.erudition,
    honkaiWeapons.harmony,
    honkaiWeapons.hunt,
    honkaiWeapons.nihility,
    honkaiWeapons.preservation,
]

export {
    listLinkItemsHonkai,
    listLinkItemsHonkaiMobile,
    listStarsHonkai,
    listElementsHonkai,
    listWeaponsHonkai,
}