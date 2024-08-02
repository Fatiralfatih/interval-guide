import { genshinData, listElementsGenshin, listStarsGenshin, listWeaponsGenshin } from "~/features/genshin/utils";
import { CharacterList, HeaderApp } from "~/components/template";

const HomePage = () => {

    return (
        <>
            {/* header app */}
            <HeaderApp
                listElements={listElementsGenshin}
                listStars={listStarsGenshin}
                listWeapons={listWeaponsGenshin}
                titleHeader="Genshin Impact"
            />

            {/* characters list */}
            <CharacterList
                data={genshinData}
            />
        </>
    );
}

export default HomePage
