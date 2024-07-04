import { TypePost } from "~/utils";
import { View } from "./HeaderApp.View"

export interface HeaderAppProps {
    titleHeader: string;
    listElements: TypePost[]
    listStars: TypePost[]
    listWeapons: TypePost[];
    descriptionHeader?: string
}

const HeaderApp = ({ titleHeader, listElements, listStars, listWeapons, descriptionHeader }: HeaderAppProps) => {
    return <View
        descriptionHeader={descriptionHeader}
        listElements={listElements}
        titleHeader={titleHeader}
        listStars={listStars}
        listWeapons={listWeapons}
    />
}

export { HeaderApp }
