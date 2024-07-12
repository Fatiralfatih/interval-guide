import { CharacterList, HeaderApp } from "~/components/template";
import { listElementsZenless, listRolesZenless, listStarsZenless, listWeaponsZenless } from "~/features/zenlessZoneZero";
import { zenlessData } from "~/features/zenlessZoneZero/utils/mockApi";

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
