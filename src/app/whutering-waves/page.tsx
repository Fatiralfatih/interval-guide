import { Metadata } from "next";
import { CharacterList, HeaderApp } from "~/components/template";
import { listStarsGenshin } from "~/features/genshin";
import { listElementsWhutering, listWeaponsWhutering, whuteringData } from "~/features/whuteringWaves";
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
    title: "Whutering Waves | Interval Guide",
    description: "guide for whutering waves",
    icons: {
        icon: dataMockApiImages.whutering.icon
    }
};

const page = () => {
    return (
        <>
            <HeaderApp
                titleHeader="Whutering Waves"
                descriptionHeader="A list of all playable characters in Wuthering Waves."
                listStars={listStarsGenshin}
                listElements={listElementsWhutering}
                listWeapons={listWeaponsWhutering}
            />

            <CharacterList
                data={whuteringData}
            />
        </>
    )
}

export default page
