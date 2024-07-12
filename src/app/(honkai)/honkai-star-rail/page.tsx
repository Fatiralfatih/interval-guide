import { CharacterList, HeaderApp } from "~/components/template";
import { honkaiData, listElementsHonkai, listStarsHonkai, listWeaponsHonkai } from "~/features/honkaiSTR/utils";

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
