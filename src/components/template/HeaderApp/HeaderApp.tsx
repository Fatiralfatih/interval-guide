import { TypePost } from "~/utils";
import { View } from "./HeaderApp.View"

export interface HeaderAppProps {
    titleHeader: string;
    listElements: TypePost[]
    listStars: TypePost[]
    listWeapons: TypePost[];
}

const HeaderApp = ({ titleHeader, listElements, listStars, listWeapons }: HeaderAppProps) => {
    return <View
        listElements={listElements}
        titleHeader={titleHeader}
        listStars={listStars}
        listWeapons={listWeapons}
    />
}

export { HeaderApp }
