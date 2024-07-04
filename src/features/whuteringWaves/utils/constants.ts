import { ListLinkType, TypePost } from "~/utils";
import { elementsWhutering, weaponsWhutering } from "./mockApi";

const listLinkItemsWhutering: ListLinkType[] = [
    {
        id: 1,
        title: 'Characters',
        link: '/characters',
    },
    {
        id: 2,
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
        title: 'Stats',
        link: '/stats'
    },
    {
        id: 5,
        title: 'Echoes',
        link: '/echoes'
    },
    {
        id: 6,
        title: 'Weapons',
        link: '/weapons'
    },
    {
        id: 7,
        title: 'Gear Sets',
        link: 'gear-sets'
    }
]

const listElementsWhutering: TypePost[] = [
    elementsWhutering.aero,
    elementsWhutering.electro,
    elementsWhutering.fusion,
    elementsWhutering.glacio,
    elementsWhutering.havoc,
    elementsWhutering.spectro,
]

const listWeaponsWhutering: TypePost[] = [
    weaponsWhutering.broadBlade,
    weaponsWhutering.gauntlets,
    weaponsWhutering.pistols,
    weaponsWhutering.rectifier,
    weaponsWhutering.sword,
]

export {
    listLinkItemsWhutering,
    listElementsWhutering,
    listWeaponsWhutering,
}