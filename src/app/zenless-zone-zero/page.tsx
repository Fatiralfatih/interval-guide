import { Metadata } from "next"
import { CharacterList, HeaderApp } from "~/components/template";
import { listElementsZenless, listRolesZenless, listStarsZenless, listWeaponsZenless } from "~/features/zenlessZoneZero";
import { zenlessData } from "~/features/zenlessZoneZero/utils/mockApi";
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
  title: "Zenless Zone Zero | Interval Guide",
  description: "guide for zenless zone zero",
  icons: {
    icon: dataMockApiImages.zenlessZoneZero.icon
  }
};

const page = () => {
  return (
    <>
      <HeaderApp
        titleHeader="Zenless Zone Zero"
        listElements={listElementsZenless}
        listStars={listStarsZenless}
        listWeapons={listWeaponsZenless}
        listRoles={listRolesZenless}
      />

      <CharacterList
        data={zenlessData}
      />
    </>
  )
}

export default page
