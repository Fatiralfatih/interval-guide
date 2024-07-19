import { genshinData } from "~/features/genshin"
import { GamesName, IconPost, KeyValueOfObject } from "./generalTypes"

const dataMockApiImages: KeyValueOfObject<GamesName, IconPost> = {
    whutering: {
        icon: "https://rerollcdn.com/GENSHIN/GameIcons/wuthering-waves-game-icon.png",
        title: 'Wuthering Waves',
        alt: 'icon-whutering',
    },
    genshin: {
        icon: 'https://rerollcdn.com/GENSHIN/GameIcons/genshin-game-icon.png',
        title: 'Genshin Impact',
        alt: 'icon-genshin',
    },
    honkaiSTR: {
        icon: 'https://rerollcdn.com/GENSHIN/GameIcons/star-rail-game-icon.png',
        title: 'Honkai: Star Rail',
        alt: 'icon-hsr',
    },
    zenlessZoneZero: {
        icon: 'https://rerollcdn.com/GENSHIN/GameIcons/zzz-game-icon.png',
        title: 'Zenless Zone Zero',
        alt: 'icon-zzz',
    }
}

const dataMockApis = {
    genshin: {
        id: 1,
        name: 'genshin impact',
        images: dataMockApiImages.genshin,
        link: '/',
        data: genshinData
    },
    wuthering: {
        id: 2,
        name: 'wuthering waves',
        images: dataMockApiImages.whutering,
        link: '/wuthering-waves',
        data: genshinData
    },
    honkaiSTR: {
        id: 3,
        name: 'Honkai: Star Rail',
        images: dataMockApiImages.honkaiSTR,
        link: '/honkai-star-rail',
        data: genshinData
    },
    zenlessZoneZero: {
        id: 4,
        name: 'Zenless Zone Zero',
        images: dataMockApiImages.zenlessZoneZero,
        link: '/zenless-zone-zero',
        data: genshinData
    }
}

export {
    dataMockApiImages,
    dataMockApis
}