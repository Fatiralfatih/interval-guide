import { ListLinkType, TypePost } from "~/utils";
import { elementsZenless, rolesZenless, starsZenless, weaponsZenless } from "./mockApi";

const listLinkItemsZenless: ListLinkType[] = [
    {
        id: 1,
        title: 'Characters',
        link: 'Characters',
    },
    {
        id: 2,
        title: 'Tier List',
        link: '/tier-list'
    },
    {
        id: 3,
        title: 'Stats',
        children: [
            {
                id: 1,
                title: 'Character Stats',
                link: '/character-stats'
            },
            {
                id: 2,
                title: 'Bangboo Stats',
                link: '/bangboo-stats'
            }
        ]
    },
    {
        id: 4,
        title: 'Bangboss',
        link: '/bangboos'
    },
    {
        id: 5,
        title: 'Disk Drives',
        link: '/disk-drives'
    },
    {
        id: 6,
        title: 'W-Engines',
        link: '/w-engines'
    }
]

const listLinkItemsZenlessMobile: ListLinkType[] = [
    {
        id: 1,
        title: 'Characters',
        link: '/Characters'
    },
    {
        id: 2,
        title: 'Tier List',
        link: '/tier-list'
    },
    {
        id: 3,
        title: 'Character Stats',
        link: '/character-stats'
    },
    {
        id: 4,
        title: 'Bangboo Stats',
        link: '/bangboo-stats'
    },
    {
        id: 5,
        title: 'Bangboos',
        link: '/bangboos'
    },
    {
        id: 6,
        title: 'Disk Drives',
        link: '/disk-drives'
    },
    {
        id: 7,
        title: 'W-engines',
        link: '/w-engines'
    }
]

const listStarsZenless: TypePost[] = [
    starsZenless.A,
    starsZenless.S,
]

const listElementsZenless: TypePost[] = [
    elementsZenless.electric,
    elementsZenless.ether,
    elementsZenless.fire,
    elementsZenless.ice,
    elementsZenless.physical,
]

const listWeaponsZenless: TypePost[] = [
    weaponsZenless.victoria,
    weaponsZenless.belobog,
    weaponsZenless.section,
    weaponsZenless.cunning,
    weaponsZenless.obols,
]

const listRolesZenless: TypePost[] = [
    rolesZenless.anomaly,
    rolesZenless.attack,
    rolesZenless.defense,
    rolesZenless.stun,
    rolesZenless.support,
]


export {
    listLinkItemsZenlessMobile,
    listLinkItemsZenless,
    listStarsZenless,
    listElementsZenless,
    listWeaponsZenless,
    listRolesZenless
}