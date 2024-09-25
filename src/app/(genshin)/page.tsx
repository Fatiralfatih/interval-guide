import { genshinData, listElementsGenshin, listLinksItemsGenshin, listLinksItemsGenshinMobile, listStarsGenshin, listWeaponsGenshin } from "~/features/genshin/utils";
import { CharacterList, HeaderApp, Navbar } from "~/components/template";
import { Metadata } from "next";
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
  title: "Genshin Impact | Interval Guide",
  description: "guide for genshin impact",
  icons: {
    icon: dataMockApiImages.genshin.icon
  }
};

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
