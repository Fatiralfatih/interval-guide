
const dataMockApiImages = {
    whutering: {
        icon: "https://rerollcdn.com/GENSHIN/GameIcons/wuthering-waves-game-icon.png",
        thumbnail: 'thumbnail whutering',
        alt: 'icon-whutering',
    },
    genshin: {
        icon: 'https://rerollcdn.com/GENSHIN/GameIcons/genshin-game-icon.png',
        thumbnail: 'thumbnail genshin',
        alt: 'icon-genshin',
    },
    honkaiSTR: {
        icon: 'https://rerollcdn.com/GENSHIN/GameIcons/star-rail-game-icon.png',
        thumbnail: 'thumbnail honkaiSTR',
        alt: 'icon-hsr',
    },
    zenlessZoneZero: {
        icon: 'https://rerollcdn.com/GENSHIN/GameIcons/zzz-game-icon.png',
        thumbnail: 'thumbnail zenless zone zero',
        alt: 'icon-zzz',
    }
}

const dataMockApis = {
    genshin: {
        name: 'genshin impact',
        images: dataMockApiImages.genshin
    },
    whutering: {
        name: 'whutering waves',
        images: dataMockApiImages.whutering
    },
}

export {
    dataMockApiImages,
    dataMockApis
}