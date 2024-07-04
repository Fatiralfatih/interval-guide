import { Metadata } from "next";
import { CharacterList, HeaderApp } from "~/components/template";
import { honkaiData, listElementsHonkai, listStarsHonkai, listWeaponsHonkai } from "~/features/honkaiSTR/utils";
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
    title: "Honkai Star Rail | Interval Guide",
    description: "guide for genshin impact",
    icons: {
        icon: dataMockApiImages.honkaiSTR.icon
    }
};

const Page = () => {
    return (
        <>
            {/* header app */}
            <HeaderApp
                titleHeader="Honkai: Star Rail"
                listElements={listElementsHonkai}
                listStars={listStarsHonkai}
                listWeapons={listWeaponsHonkai}
            />

            {/* characters list */}
            <CharacterList
                data={genshinData}
            />
        </>
    )
}

export default Page
