import { genshinData, listElementsGenshin, listStarsGenshin, listWeaponsGenshin, } from "~/features/genshin/utils";
import { HeaderApp } from "~/components/template";
import CharacterList from "~/components/template/CharactersList/CharacterList";

const HomePage = () => {

  return (
    <main className="pt-32 container md:px-6 lg:px-10 xl:px-52">
      <div className=" bg-interval-purple-800 p-5 md:p-6 md:py-10 lg:p-7 rounded-md">
        {/* header app */}
        <HeaderApp
          titleHeader="Genshin Impact"
          listElements={listElementsGenshin}
          listStars={listStarsGenshin}
          listWeapons={listWeaponsGenshin}
        />

        {/* characters list */}
        <CharacterList
          data={genshinData}
        />

      </div>
    </main>
  );
}

export default HomePage
