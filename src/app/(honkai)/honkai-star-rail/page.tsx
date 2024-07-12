import { Metadata } from "next";
import { CharacterList, HeaderApp } from "~/components/template";
import { listElementsHonkai, listStarsHonkai, listWeaponsHonkai } from "~/features/honkaiSTR/utils";
import { honkaiData } from "~/features/honkaiSTR/utils/mockApi";
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
    title: "Honkai Star Rail | Interval Guide",
    description: "guide for honkai star rail",
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
                data={honkaiData}
            />
        </>
    )
}

export default Page
