import { TypePost } from "~/utils";
import { View } from "./HeaderApp.View"
import { ChangeEvent } from "react";

export interface HeaderAppProps {
    titleHeader: string;
    listElements: TypePost[]
    listStars: TypePost[]
    listWeapons: TypePost[];
    descriptionHeader?: string
    listRoles?: TypePost[];
    searchData: string
    handleSearchData: (e: ChangeEvent<HTMLInputElement>) => void
    handleFilterStar: (star: number) => void
}

const HeaderApp = ({
    titleHeader,
    listElements,
    listStars,
    listWeapons,
    descriptionHeader,
    listRoles,
    handleSearchData,
    searchData,
    handleFilterStar
}: HeaderAppProps) => {

    return <View
        descriptionHeader={descriptionHeader}
        handleFilterStar={handleFilterStar}
        listElements={listElements}
        titleHeader={titleHeader}
        handleSearchData={handleSearchData}
        searchData={searchData}
        listStars={listStars}
        listWeapons={listWeapons}
        listRoles={listRoles}
    />
}

export { HeaderApp }
