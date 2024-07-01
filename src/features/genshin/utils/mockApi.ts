import { GenshinData } from "../types/dataTypes"

const genshinMaterials = {
    justice: {
        title: 'Justice',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Justice.png'
    },
    everamber: {
        title: 'Everamber',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Everamber.png',
    },
    lumitoile: {
        title: 'Lumitoile',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Lumitoile.png'
    },
    transoceanicPearl: {
        title: 'Transoceanic Pearl',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Transoceanic_Pearl.png'
    },
    fontemerUnihorn: {
        title: 'Fontemer Unihorn',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Farming/NEW/Fontemer_Unihorn.png'
    }
}

const genshinElements = {
    anemo: {
        title: 'anemo',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_anemo.png',
    },
    cyro: {
        title: 'cyro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_cryo.png'
    },
    electro: {
        title: 'electro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_electro.png'
    },
    dendro: {
        title: 'dendro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_dendro.png'
    },
    geo: {
        title: 'geo',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_geo.png',
    },
    hydro: {
        title: 'hydro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_hydro.png'
    },
    pyro: {
        title: 'pyro',
        thumbnail: 'https://rerollcdn.com/GENSHIN/UI/element_pyro.png',
    }
}

const genshinData: GenshinData[] = [
    {
        id: 1,
        hero: 'clorinde',
        element: genshinElements.electro,
        link: '/characters/clorinde',
        role: 'subDps',
        isNew: true,
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Clorinde.png',
        rarity: 5,
    },
    {
        id: 2,
        hero: 'Shetos',
        element: genshinElements.electro,
        link: '/characters/shetos',
        role: 'subDps',
        isNew: true,
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sethos.png',
        rarity: 4,
    },
    {
        id: 3,
        hero: 'Albedo',
        element: genshinElements.geo,
        link: '/characters/albedo',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Albedo.png',
        rarity: 5
    },
    {
        id: 4,
        hero: 'Alhaitam',
        element: genshinElements.dendro,
        link: '/characters/alhaitam',
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Alhaitham.png',
        rarity: 5
    },
    {
        id: 5,
        hero: 'Aloy',
        element: genshinElements.cyro,
        link: '/characters/aloy',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Aloy.png',
        rarity: 5
    },
    {
        id: 6,
        hero: 'Arlecchino',
        link: '/characters/arlecchino',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Arlecchino.png',
        rarity: 5
    },
    {
        id: 7,
        hero: 'ayaka',
        link: '/characters/ayaka',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ayaka.png',
        rarity: 5
    },
    {
        id: 8,
        hero: 'ayato',
        link: '/characters/ayato',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ayato.png',
        rarity: 5
    },
    {
        id: 9,
        hero: 'baizhu',
        link: '/characters/baizhu',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Baizhu.png',
        rarity: 5
    },
    {
        id: 10,
        hero: 'childe',
        link: '/characters/childe',
        element: genshinElements.hydro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Childe.png',
        rarity: 5
    },
    {
        id: 11,
        hero: 'chiori',
        link: '/characters/chiori',
        element: genshinElements.geo,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Chiori.png',
        rarity: 5
    },
    {
        id: 12,
        hero: 'cyno',
        link: '/characters/cyno',
        element: genshinElements.electro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Cyno.png',
        rarity: 5
    },
    {
        id: 13,
        hero: 'dehya',
        link: '/characters/dehya',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Dehya.png',
        rarity: 5
    },
    {
        id: 14,
        hero: 'diluc',
        link: '/characters/diluc',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Diluc.png',
        rarity: 5
    },
    {
        id: 15,
        hero: 'eula',
        link: '/characters/eula',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Eula.png',
        rarity: 5
    },
    {
        id: 16,
        hero: 'furina',
        link: '/characters/furina',
        element: genshinElements.hydro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Furina.png',
        rarity: 5
    },
    {
        id: 17,
        hero: 'ganyu',
        link: '/characters/ganyu',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ganyu.png',
        rarity: 5
    },
    {
        id: 18,
        hero: 'hu tao',
        link: '/characters/hu tao',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Hu%20Tao.png',
        rarity: 5
    },
    {
        id: 19,
        hero: 'itto',
        link: '/characters/itto',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Itto.png',
        rarity: 5
    },
    {
        id: 20,
        hero: 'jean',
        link: '/characters/jean',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Jean.png',
        rarity: 5
    },
    {
        id: 21,
        hero: 'kazuha',
        link: '/characters/kazuha',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kazuha.png',
        rarity: 5
    },
    {
        id: 22,
        hero: 'keqing',
        link: '/characters/keqing',
        element: genshinElements.electro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Keqing.png',
        rarity: 5
    },
    {
        id: 23,
        hero: 'klee',
        link: '/characters/klee',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Klee.png',
        rarity: 5
    },
    {
        id: 24,
        hero: 'kokomi',
        link: '/characters/kokomi',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kokomi.png',
        rarity: 5
    },
    {
        id: 25,
        hero: 'lyney',
        link: '/characters/lyney',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Lyney.png',
        rarity: 5
    },
    {
        id: 26,
        hero: 'mona',
        link: '/characters/mona',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Mona.png',
        rarity: 5
    },
    {
        id: 27,
        hero: 'nahida',
        link: '/characters/nahida',
        element: genshinElements.dendro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Nahida.png',
        rarity: 5
    },
    {
        id: 28,
        hero: 'navia',
        link: '/characters/navia',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Navia.png',
        rarity: 5
    },
    {
        id: 29,
        hero: 'neuvillette',
        link: '/characters/neuvillette',
        element: genshinElements.hydro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Neuvillette.png',
        rarity: 5
    },
    {
        id: 30,
        hero: 'nilou',
        link: '/characters/nilou',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Nilou.png',
        rarity: 5
    },
    {
        id: 31,
        hero: 'qiqi',
        link: '/characters/qiqi',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Qiqi.png',
        rarity: 5
    },
    {
        id: 32,
        hero: 'raiden',
        link: '/characters/raiden',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Raiden.png',
        rarity: 5
    },
    {
        id: 33,
        hero: 'shenhe',
        link: '/characters/shenhe',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Shenhe.png',
        rarity: 5
    },
    {
        id: 34,
        hero: 'tighnari',
        link: '/characters/tighnari',
        element: genshinElements.dendro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Tighnari.png',
        rarity: 5
    },
    {
        id: 35,
        hero: 'traveler (anemo)',
        link: '/characters/traveler(anemo)',
        element: genshinElements.anemo,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Anemo).png',
        rarity: 5
    },
    {
        id: 36,
        hero: 'traveler (dendro)',
        link: '/characters/traveler(dendro)',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Dendro).png',
        rarity: 5
    },
    {
        id: 37,
        hero: 'traveler (electro)',
        link: '/characters/traveler(electro)',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Electro).png',
        rarity: 5
    },
    {
        id: 38,
        hero: 'traveler (geo)',
        link: '/characters/traveler(geo)',
        element: genshinElements.geo,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Geo).png',
        rarity: 5
    },
    {
        id: 39,
        hero: 'traveler (hydro)',
        link: '/characters/traveler(hydro)',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Hydro).png',
        rarity: 5
    },
    {
        id: 40,
        hero: 'venti',
        link: '/characters/venti',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Venti.png',
        rarity: 5
    },
    {
        id: 41,
        hero: 'wanderer',
        link: '/characters/wanderer',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Wanderer.png',
        rarity: 5
    },
    {
        id: 42,
        hero: 'wriothesley',
        link: '/characters/wriothesley',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Wriothesley.png',
        rarity: 5
    },
    {
        id: 43,
        hero: 'xianyun',
        link: '/characters/xianyun',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xianyun.png',
        rarity: 5
    },
    {
        id: 44,
        hero: 'xiao',
        link: '/characters/xiao',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xiao.png',
        rarity: 5
    },
    {
        id: 45,
        hero: 'yae miko',
        link: '/characters/yae-miko',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yae%20Miko.png',
        rarity: 5
    },
    {
        id: 46,
        hero: 'yelan',
        link: '/characters/yelan',
        element: genshinElements.hydro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yelan.png',
        rarity: 5
    },
    {
        id: 47,
        hero: 'yoimiya',
        link: '/characters/yoimiya',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yoimiya.png',
        rarity: 5
    },
    {
        id: 48,
        hero: 'zhongli',
        link: '/characters/zhongli',
        element: genshinElements.geo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Zhongli.png',
        rarity: 5
    },
    {
        id: 49,
        hero: 'amber',
        link: '/characters/amber',
        element: genshinElements.pyro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Amber.png',
        rarity: 4
    },
    {
        id: 50,
        hero: 'barbara',
        link: '/characters/barbara',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Barbara.png',
        rarity: 4
    },
    {
        id: 51,
        hero: 'beidou',
        link: '/characters/beidou',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Beidou.png',
        rarity: 4
    },
    {
        id: 52,
        hero: 'bennett',
        link: '/characters/bennett',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Bennett.png',
        rarity: 4
    },
    {
        id: 53,
        hero: 'candace',
        link: '/characters/candace',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Candace.png',
        rarity: 4
    },
    {
        id: 54,
        hero: 'charlotte',
        link: '/characters/charlotte',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Charlotte.png',
        rarity: 4
    },
    {
        id: 55,
        hero: 'chevreuse',
        link: '/characters/chevreuse',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Chevreuse.png',
        rarity: 4
    },
    {
        id: 56,
        hero: 'chongyun',
        link: '/characters/chongyun',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Chongyun.png',
        rarity: 4
    },
    {
        id: 57,
        hero: 'collei',
        link: '/characters/collei',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Collei.png',
        rarity: 4
    },
    {
        id: 58,
        hero: 'diona',
        link: '/characters/diona',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Diona.png',
        rarity: 4
    },
    {
        id: 59,
        hero: 'dori',
        link: '/characters/dori',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Dori.png',
        rarity: 4
    },
    {
        id: 60,
        hero: 'faruzan',
        link: '/characters/faruzan',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Faruzan.png',
        rarity: 4
    },
    {
        id: 61,
        hero: 'fischl',
        link: '/characters/fischl',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Fischl.png',
        rarity: 4
    },
    {
        id: 62,
        hero: 'freminet',
        link: '/characters/freminet',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Freminet.png',
        rarity: 4
    },
    {
        id: 63,
        hero: 'gaming',
        link: '/characters/gaming',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Gaming.png',
        rarity: 4
    },
    {
        id: 64,
        hero: 'gorou',
        link: '/characters/gorou',
        element: genshinElements.geo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Gorou.png',
        rarity: 4
    },
    {
        id: 65,
        hero: 'heizou',
        link: '/characters/heizou',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Heizou.png',
        rarity: 4
    },
    {
        id: 66,
        hero: 'kaeya',
        link: '/characters/kaeya',
        element: genshinElements.cyro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kaeya.png',
        rarity: 4
    },
    {
        id: 67,
        hero: 'kaveh',
        link: '/characters/kaveh',
        element: genshinElements.dendro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kaveh.png',
        rarity: 4
    },
    {
        id: 68,
        hero: 'kirara',
        link: '/characters/kirara',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kirara.png',
        rarity: 4
    },
    {
        id: 69,
        hero: 'kuki shinobu',
        link: '/characters/kuki-shinobu',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kuki%20Shinobu.png',
        rarity: 4
    },
    {
        id: 70,
        hero: 'layla',
        link: '/characters/layla',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Layla.png',
        rarity: 4
    },
    {
        id: 71,
        hero: 'lisa',
        link: '/characters/lisa',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Lisa.png',
        rarity: 4
    },
    {
        id: 72,
        hero: 'lynette',
        link: '/characters/lynette',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Lynette.png',
        rarity: 4
    },
    {
        id: 73,
        hero: 'mika',
        link: '/characters/mika',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Mika.png',
        rarity: 4
    },
    {
        id: 74,
        hero: 'ningguang',
        link: '/characters/ningguang',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ningguang.png',
        rarity: 4
    },
    {
        id: 75,
        hero: 'noelle',
        link: '/characters/noelle',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Noelle.png',
        rarity: 4
    },
    {
        id: 76,
        hero: 'razor',
        link: '/characters/razor',
        element: genshinElements.electro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Razor.png',
        rarity: 4
    },
    {
        id: 77,
        hero: 'rosaria',
        link: '/characters/rosaria',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Rosaria.png',
        rarity: 4
    },
    {
        id: 78,
        hero: 'sara',
        link: '/characters/sara',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sara.png',
        rarity: 4
    },
    {
        id: 79,
        hero: 'sayu',
        link: '/characters/sayu',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sayu.png',
        rarity: 4
    },
    {
        id: 80,
        hero: 'sucrose',
        link: '/characters/sucrose',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sucrose.png',
        rarity: 4
    },
    {
        id: 81,
        hero: 'thoma',
        link: '/characters/thoma',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Thoma.png',
        rarity: 4
    },
    {
        id: 82,
        hero: 'xiangling',
        link: '/characters/xiangling',
        element: genshinElements.pyro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xiangling.png',
        rarity: 4
    },
    {
        id: 83,
        hero: 'xingqiu',
        link: '/characters/xingqiu',
        element: genshinElements.hydro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xingqiu.png',
        rarity: 4
    },
    {
        id: 84,
        hero: 'xinyan',
        link: '/characters/xinyan',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xinyan.png',
        rarity: 4
    },
    {
        id: 85,
        hero: 'yanfei',
        link: '/characters/yanfei',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yanfei.png',
        rarity: 4
    },
    {
        id: 86,
        hero: 'yaoyao',
        link: '/characters/yaoyao',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yaoyao.png',
        rarity: 4
    },
    {
        id: 87,
        hero: 'yun jin',
        link: '/characters/yun-jin',
        element: genshinElements.geo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yun%20Jin.png',
        rarity: 4
    },
]

export {
    genshinData,
    genshinMaterials,
    genshinElements
}

// clorinde
// weapons: {
//     type: 'sword',
//     bestWeapons: [
//         { title: 'Absolution', thumbnail: '' },
//         { title: 'Haran Geppaku Futsu', thumbnail: '' },
//         { title: 'Mistsplitter Reforged', thumbnail: '' },
//         { title: 'Finale of the Deep R5', thumbnail: '' },
//         { title: 'The Black Sword', thumbnail: '' },
//     ],
//     rarity: [3, 4, 5],
// },
// artefaks: {
//     bestArterfaks: [
//         'Fragment of Harmonic Whimsy',
//         'Thundering Fury',
//         "Gladiator's Finale",
//     ]
// },
// materials: [materials.justice, materials.everamber],
// stasts: {
//     sands: 'ATK%',
//     circlet: 'CRIT Rate / CRIT DMG',
//     goblet: 'Electro DMG',
//     subsStat: 'CRIT Rate / CRIT DMG > ATK% > Elemental Mastery'
// },
// talents: {
//     title: 'Oath of Hunting Shadows',
//     normalAttack: 'Performs up to 5 rapid strikes.',
//     chargedAttack: 'Consumes a certain amount of Stamina and fires Suppressing Shots in a fan pattern with her pistolet.',
//     pluginAttack: 'Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
//     elementalSkill: {
//         title: "Hunter's Vigil",
//         description: `Preparing her pistolet, she enters the "Night Vigil" state, using steel and shot together. In this state, Clorinde's Normal Attacks will be transformed into "Swift Hunt" pistolet attacks, and the DMG dealt is converted into Electro DMG that cannot be overridden by infusions, and she will be unable to use Charged Attacks. Using her Elemental Skill will transform it into "Impale the Night": Perform a lunging attack, dealing Electro DMG. The DMG done through the aforementioned method is considered Normal Attack DMG.

//         Swift Hunt
//         When her Bond of Life is equal to or greater than 100% of her max HP: Performs a pistolet shot.
//         When her Bond of Life is less than 100%, firing her pistolet will grant her Bond of Life, with the amount gained based on her max HP. The shots she fires can pierce opponents, and DMG dealt to opponents in their path is increased.

//         Impale the Night
//         The current percentage value of Clorinde's Bond of Life determines its effect:
//         When the Bond of Life value is 0%, perform a normal lunging strike;
//         When the Bond of Life value is less than 100% of her max HP, Clorinde is healed based on the Bond of Life value, and the AoE of the lunging attack and the DMG dealt is increased;
//         When the value of the Bond of Life is equal to or greater than 100% of her max HP, use Impale the Night: Pact. The healing multiplier is increased, and the AoE and DMG dealt by the lunge is increased even further.

//         In addition, when Clorinde is in the Night Vigil state, healing effects other than Impale the Night will not take effect and will instead be converted into a Bond of Life that is a percentage of the healing that would have been received.

//         Clorinde will exit the "Night Vigil" state when she leaves the field.

//         Arkhe: Ousia
//         Periodically, when Clorinde's Swift Hunt shots strike opponents, she will summon a Surging Blade at the position hit that deals Ousia-aligned Electro DMG.
//         `,
//     },
//     elementalBurst: {
//         title: 'Last Lightfall',
//         description: 'Grants herself a Bond of Life based upon her own max HP before swiftly evading and striking with saber and sidearm as one, dealing AoE Electro DMG.'
//     }
// },
// passives: {
//     ascend1: {
//         title: 'Dark-Shattering Flame',
//         description: `After a nearby party member triggers an Electro-related reaction against an opponent, Electro DMG dealt by Clorinde's Normal Attacks and Last Lightfall will be increased by 20% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. The Maximum DMG increase achievable this way for the above attacks is 1,800.`
//     },
//     ascend4: {
//         title: 'Lawful Remuneration',
//         description: `If Clorinde's Bond of Life is equal to or greater than 100% of her Max HP, her CRIT Rate will increase by 10% for 15s whenever her Bond of Life value increases or decreases. Max 2 stacks. Each stack is counted independently.
//         Additionally, Hunter's Vigil's Night Vigil state is buffed: While it is active, the percent of healing converted to Bond of Life increases to 100%.`
//     },
//     passive: {
//         title: "Night Vigil's Harvest",
//         description: 'Displays the location of nearby resources unique to Fontaine on the mini-map.'
//     }
// },
// constelations: {
//     constelation1: {
//         title: "From This Day, I Pass the Candle's Shadow-Veil",
//         description: `While Hunter's Vigil's Night Vigil state is active, when Electro DMG from Clorinde's Normal Attacks hit opponents, they will trigger 2 coordinated attacks from a Nightvigil Shade summoned near the hit opponent, each dealing 30% of Clorinde's ATK as Electro DMG.
//         This effect can occur once every 1.2s. DMG dealt this way is considered Normal Attack DMG.`
//     },
//     constelation2: {
//         title: 'Now, As We Face the Perils of the Long Night',
//         description: `Enhance the Passive Talent "Dark-Shattering Flame": After a nearby party member triggers an Electro-related reaction against an opponent, Electro DMG dealt by Clorinde's Normal Attacks and Last Lightfall will be increased by 30% of Clorinde's ATK for 15s. Max 3 stacks. Each stack is counted independently. When you have 3 stacks, Clorinde's interruption resistance will be increased. The Maximum DMG increase achievable this way for the above attacks is 2,700.
//         You must first unlock the Passive Talent "Dark-Shattering Flame.`
//     },
//     constelation3: {
//         title: "I Pledge to Remember the Oath of Daylight",
//         description: "Increases the Level of Hunter's Vigil by 3. Maximum upgrade level is 15."
//     },
//     constelation4: {
//         title: 'To Enshrine Tears, Life, and Love',
//         description: "When Last Lightfall deals DMG to opponent(s), DMG dealt is increased based on Clorinde's Bond of Life percentage. Every 1% of her current Bond of Life will increase Last Lightfall DMG by 2%. The maximum Last Lightfall DMG increase achievable this way is 200%."
//     },
//     constelation5: {
//         title: "Holding Dawn's Coming as My Votive",
//         description: "Increases the Level of Last Lightfall by 3. Maximum upgrade level is 15."
//     },
//     constelation6: {
//         title: "And So Shall I Never Despair",
//         description: `For 12s after Hunter's Vigil is used, Clorinde's CRIT Rate will be increased by 10%, and her CRIT DMG by 70%.
//         Additionally, while Night Vigil is active, a Glimbright Shade will appear under specific circumstances, executing an attack that deals 200% of Clorinde's ATK as Electro DMG. DMG dealt this way is considered Normal Attack DMG.
//         The Glimbright Shade will appear under the following circumstances:
//         When Clorinde is about to be hit by an attack.
//         When Clorinde uses Impale the Night: Pact.
//         1 Glimbright Shade can be summoned in the aforementioned ways every 1s. 6 Shades can be summoned per single Night Vigil duration.
//         In addition, while Night Vigil is active, the DMG Clorinde receives is decreased by 80% and her interruption resistance is increased. This effect will disappear after the Night Vigil state ends or 1s after she summons 6 Glimbright Shades.`
//     }
// }