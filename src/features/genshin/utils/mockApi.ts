import { KeyValueOfObject, TypePost } from "~/utils"
import { GenshinData, GenshinElements, GenshinMaterial } from "../types/dataTypes"

const genshinMaterials: KeyValueOfObject<GenshinMaterial, TypePost> = {
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

const genshinElements: KeyValueOfObject<GenshinElements, TypePost> = {
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
        link: '/character/clorinde',
        role: 'subDps',
        isNew: true,
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Clorinde.png',
        rarity: 5,
    },
    {
        id: 2,
        hero: 'Shetos',
        element: genshinElements.electro,
        link: '/character/shetos',
        role: 'subDps',
        isNew: true,
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sethos.png',
        rarity: 4,
    },
    {
        id: 3,
        hero: 'Albedo',
        element: genshinElements.geo,
        link: '/character/albedo',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Albedo.png',
        rarity: 5
    },
    {
        id: 4,
        hero: 'Alhaitam',
        element: genshinElements.dendro,
        link: '/character/alhaitam',
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Alhaitham.png',
        rarity: 5
    },
    {
        id: 5,
        hero: 'Aloy',
        element: genshinElements.cyro,
        link: '/character/aloy',
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Aloy.png',
        rarity: 5
    },
    {
        id: 6,
        hero: 'Arlecchino',
        link: '/character/arlecchino',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Arlecchino.png',
        rarity: 5
    },
    {
        id: 7,
        hero: 'ayaka',
        link: '/character/ayaka',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ayaka.png',
        rarity: 5
    },
    {
        id: 8,
        hero: 'ayato',
        link: '/character/ayato',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ayato.png',
        rarity: 5
    },
    {
        id: 9,
        hero: 'baizhu',
        link: '/character/baizhu',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Baizhu.png',
        rarity: 5
    },
    {
        id: 10,
        hero: 'childe',
        link: '/character/childe',
        element: genshinElements.hydro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Childe.png',
        rarity: 5
    },
    {
        id: 11,
        hero: 'chiori',
        link: '/character/chiori',
        element: genshinElements.geo,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Chiori.png',
        rarity: 5
    },
    {
        id: 12,
        hero: 'cyno',
        link: '/character/cyno',
        element: genshinElements.electro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Cyno.png',
        rarity: 5
    },
    {
        id: 13,
        hero: 'dehya',
        link: '/character/dehya',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Dehya.png',
        rarity: 5
    },
    {
        id: 14,
        hero: 'diluc',
        link: '/character/diluc',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Diluc.png',
        rarity: 5
    },
    {
        id: 15,
        hero: 'eula',
        link: '/character/eula',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Eula.png',
        rarity: 5
    },
    {
        id: 16,
        hero: 'furina',
        link: '/character/furina',
        element: genshinElements.hydro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Furina.png',
        rarity: 5
    },
    {
        id: 17,
        hero: 'ganyu',
        link: '/character/ganyu',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ganyu.png',
        rarity: 5
    },
    {
        id: 18,
        hero: 'hu tao',
        link: '/character/hu tao',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Hu%20Tao.png',
        rarity: 5
    },
    {
        id: 19,
        hero: 'itto',
        link: '/character/itto',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Itto.png',
        rarity: 5
    },
    {
        id: 20,
        hero: 'jean',
        link: '/character/jean',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Jean.png',
        rarity: 5
    },
    {
        id: 21,
        hero: 'kazuha',
        link: '/character/kazuha',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kazuha.png',
        rarity: 5
    },
    {
        id: 22,
        hero: 'keqing',
        link: '/character/keqing',
        element: genshinElements.electro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Keqing.png',
        rarity: 5
    },
    {
        id: 23,
        hero: 'klee',
        link: '/character/klee',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Klee.png',
        rarity: 5
    },
    {
        id: 24,
        hero: 'kokomi',
        link: '/character/kokomi',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kokomi.png',
        rarity: 5
    },
    {
        id: 25,
        hero: 'lyney',
        link: '/character/lyney',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Lyney.png',
        rarity: 5
    },
    {
        id: 26,
        hero: 'mona',
        link: '/character/mona',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Mona.png',
        rarity: 5
    },
    {
        id: 27,
        hero: 'nahida',
        link: '/character/nahida',
        element: genshinElements.dendro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Nahida.png',
        rarity: 5
    },
    {
        id: 28,
        hero: 'navia',
        link: '/character/navia',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Navia.png',
        rarity: 5
    },
    {
        id: 29,
        hero: 'neuvillette',
        link: '/character/neuvillette',
        element: genshinElements.hydro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Neuvillette.png',
        rarity: 5
    },
    {
        id: 30,
        hero: 'nilou',
        link: '/character/nilou',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Nilou.png',
        rarity: 5
    },
    {
        id: 31,
        hero: 'qiqi',
        link: '/character/qiqi',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Qiqi.png',
        rarity: 5
    },
    {
        id: 32,
        hero: 'raiden',
        link: '/character/raiden',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Raiden.png',
        rarity: 5
    },
    {
        id: 33,
        hero: 'shenhe',
        link: '/character/shenhe',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Shenhe.png',
        rarity: 5
    },
    {
        id: 34,
        hero: 'tighnari',
        link: '/character/tighnari',
        element: genshinElements.dendro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Tighnari.png',
        rarity: 5
    },
    {
        id: 35,
        hero: 'traveler (anemo)',
        link: '/character/traveler(anemo)',
        element: genshinElements.anemo,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Anemo).png',
        rarity: 5
    },
    {
        id: 36,
        hero: 'traveler (dendro)',
        link: '/character/traveler(dendro)',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Dendro).png',
        rarity: 5
    },
    {
        id: 37,
        hero: 'traveler (electro)',
        link: '/character/traveler(electro)',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Electro).png',
        rarity: 5
    },
    {
        id: 38,
        hero: 'traveler (geo)',
        link: '/character/traveler(geo)',
        element: genshinElements.geo,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Geo).png',
        rarity: 5
    },
    {
        id: 39,
        hero: 'traveler (hydro)',
        link: '/character/traveler(hydro)',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Hydro).png',
        rarity: 5
    },
    {
        id: 40,
        hero: 'venti',
        link: '/character/venti',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Venti.png',
        rarity: 5
    },
    {
        id: 41,
        hero: 'wanderer',
        link: '/character/wanderer',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Wanderer.png',
        rarity: 5
    },
    {
        id: 42,
        hero: 'wriothesley',
        link: '/character/wriothesley',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Wriothesley.png',
        rarity: 5
    },
    {
        id: 43,
        hero: 'xianyun',
        link: '/character/xianyun',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xianyun.png',
        rarity: 5
    },
    {
        id: 44,
        hero: 'xiao',
        link: '/character/xiao',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xiao.png',
        rarity: 5
    },
    {
        id: 45,
        hero: 'yae miko',
        link: '/character/yae-miko',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yae%20Miko.png',
        rarity: 5
    },
    {
        id: 46,
        hero: 'yelan',
        link: '/character/yelan',
        element: genshinElements.hydro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yelan.png',
        rarity: 5
    },
    {
        id: 47,
        hero: 'yoimiya',
        link: '/character/yoimiya',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yoimiya.png',
        rarity: 5
    },
    {
        id: 48,
        hero: 'zhongli',
        link: '/character/zhongli',
        element: genshinElements.geo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Zhongli.png',
        rarity: 5
    },
    {
        id: 49,
        hero: 'amber',
        link: '/character/amber',
        element: genshinElements.pyro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Amber.png',
        rarity: 4
    },
    {
        id: 50,
        hero: 'barbara',
        link: '/character/barbara',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Barbara.png',
        rarity: 4
    },
    {
        id: 51,
        hero: 'beidou',
        link: '/character/beidou',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Beidou.png',
        rarity: 4
    },
    {
        id: 52,
        hero: 'bennett',
        link: '/character/bennett',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Bennett.png',
        rarity: 4
    },
    {
        id: 53,
        hero: 'candace',
        link: '/character/candace',
        element: genshinElements.hydro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Candace.png',
        rarity: 4
    },
    {
        id: 54,
        hero: 'charlotte',
        link: '/character/charlotte',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Charlotte.png',
        rarity: 4
    },
    {
        id: 55,
        hero: 'chevreuse',
        link: '/character/chevreuse',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Chevreuse.png',
        rarity: 4
    },
    {
        id: 56,
        hero: 'chongyun',
        link: '/character/chongyun',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Chongyun.png',
        rarity: 4
    },
    {
        id: 57,
        hero: 'collei',
        link: '/character/collei',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Collei.png',
        rarity: 4
    },
    {
        id: 58,
        hero: 'diona',
        link: '/character/diona',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Diona.png',
        rarity: 4
    },
    {
        id: 59,
        hero: 'dori',
        link: '/character/dori',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Dori.png',
        rarity: 4
    },
    {
        id: 60,
        hero: 'faruzan',
        link: '/character/faruzan',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Faruzan.png',
        rarity: 4
    },
    {
        id: 61,
        hero: 'fischl',
        link: '/character/fischl',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Fischl.png',
        rarity: 4
    },
    {
        id: 62,
        hero: 'freminet',
        link: '/character/freminet',
        element: genshinElements.cyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Freminet.png',
        rarity: 4
    },
    {
        id: 63,
        hero: 'gaming',
        link: '/character/gaming',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Gaming.png',
        rarity: 4
    },
    {
        id: 64,
        hero: 'gorou',
        link: '/character/gorou',
        element: genshinElements.geo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Gorou.png',
        rarity: 4
    },
    {
        id: 65,
        hero: 'heizou',
        link: '/character/heizou',
        element: genshinElements.anemo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Heizou.png',
        rarity: 4
    },
    {
        id: 66,
        hero: 'kaeya',
        link: '/character/kaeya',
        element: genshinElements.cyro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kaeya.png',
        rarity: 4
    },
    {
        id: 67,
        hero: 'kaveh',
        link: '/character/kaveh',
        element: genshinElements.dendro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kaveh.png',
        rarity: 4
    },
    {
        id: 68,
        hero: 'kirara',
        link: '/character/kirara',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kirara.png',
        rarity: 4
    },
    {
        id: 69,
        hero: 'kuki shinobu',
        link: '/character/kuki-shinobu',
        element: genshinElements.electro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Kuki%20Shinobu.png',
        rarity: 4
    },
    {
        id: 70,
        hero: 'layla',
        link: '/character/layla',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Layla.png',
        rarity: 4
    },
    {
        id: 71,
        hero: 'lisa',
        link: '/character/lisa',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Lisa.png',
        rarity: 4
    },
    {
        id: 72,
        hero: 'lynette',
        link: '/character/lynette',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Lynette.png',
        rarity: 4
    },
    {
        id: 73,
        hero: 'mika',
        link: '/character/mika',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Mika.png',
        rarity: 4
    },
    {
        id: 74,
        hero: 'ningguang',
        link: '/character/ningguang',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Ningguang.png',
        rarity: 4
    },
    {
        id: 75,
        hero: 'noelle',
        link: '/character/noelle',
        element: genshinElements.geo,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Noelle.png',
        rarity: 4
    },
    {
        id: 76,
        hero: 'razor',
        link: '/character/razor',
        element: genshinElements.electro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Razor.png',
        rarity: 4
    },
    {
        id: 77,
        hero: 'rosaria',
        link: '/character/rosaria',
        element: genshinElements.cyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Rosaria.png',
        rarity: 4
    },
    {
        id: 78,
        hero: 'sara',
        link: '/character/sara',
        element: genshinElements.electro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sara.png',
        rarity: 4
    },
    {
        id: 79,
        hero: 'sayu',
        link: '/character/sayu',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sayu.png',
        rarity: 4
    },
    {
        id: 80,
        hero: 'sucrose',
        link: '/character/sucrose',
        element: genshinElements.anemo,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Sucrose.png',
        rarity: 4
    },
    {
        id: 81,
        hero: 'thoma',
        link: '/character/thoma',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Thoma.png',
        rarity: 4
    },
    {
        id: 82,
        hero: 'xiangling',
        link: '/character/xiangling',
        element: genshinElements.pyro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xiangling.png',
        rarity: 4
    },
    {
        id: 83,
        hero: 'xingqiu',
        link: '/character/xingqiu',
        element: genshinElements.hydro,
        role: 'subDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xingqiu.png',
        rarity: 4
    },
    {
        id: 84,
        hero: 'xinyan',
        link: '/character/xinyan',
        element: genshinElements.pyro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Xinyan.png',
        rarity: 4
    },
    {
        id: 85,
        hero: 'yanfei',
        link: '/character/yanfei',
        element: genshinElements.pyro,
        role: 'mainDps',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yanfei.png',
        rarity: 4
    },
    {
        id: 86,
        hero: 'yaoyao',
        link: '/character/yaoyao',
        element: genshinElements.dendro,
        role: 'support',
        thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/1/Yaoyao.png',
        rarity: 4
    },
    {
        id: 87,
        hero: 'yun jin',
        link: '/character/yun-jin',
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