import { Metadata } from "next";
import { HeaderApp } from "~/components/template";
import { listStarsGenshin } from "~/features/genshin";
import { listElementsWhutering, listWeaponsWhutering } from "~/features/whuteringWaves";
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
                listStars={listStarsGenshin}
                listElements={listElementsWhutering}
                listWeapons={listWeaponsWhutering}
            />
        </>
    )
}

export default page
