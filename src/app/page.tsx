"use client"

import { genshinData, listElementsGenshin, listStarsGenshin, listWeaponsGenshin, } from "~/features/genshin/utils";
import { CharacterList, HeaderApp } from "~/components/template";
import { ChangeEvent, useState } from "react";

const HomePage = () => {
  const [searchData, setSearchData] = useState<string>('')
  const [filterStar, setFilterStar] = useState<number>()

  const handleSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }

  const handleFilterStar = (star: number) => {
    setFilterStar(star)
  }

  // filter data based on search input
  const filterSearchData = genshinData.filter(data => {
    if (searchData) {
      return data.hero.toLowerCase().includes(searchData.toLowerCase())
    } else if (filterStar) {
      return data.rarity === filterStar
    }
    return data;
  })

  return (
    <>
      {/* header app */}
      <HeaderApp
        searchData={searchData}
        handleSearchData={handleSearchData}
        handleFilterStar={handleFilterStar}
        titleHeader="Genshin Impact"
        listElements={listElementsGenshin}
        listStars={listStarsGenshin}
        listWeapons={listWeaponsGenshin}
      />

      {/* characters list */}
      <CharacterList
        data={filterSearchData}
      />
    </>
  );
}

export default HomePage
