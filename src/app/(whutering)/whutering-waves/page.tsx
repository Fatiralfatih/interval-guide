import { CharacterList, HeaderApp } from "~/components/template";
import { listStarsGenshin } from "~/features/genshin";
import { listElementsWhutering, listWeaponsWhutering, whuteringData } from "~/features/whuteringWaves";

const page = () => {
    return (
        <>
            <HeaderApp
                titleHeader="Whutering Waves"
                descriptionHeader="A list of all playable characters in wuthering Waves."
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
