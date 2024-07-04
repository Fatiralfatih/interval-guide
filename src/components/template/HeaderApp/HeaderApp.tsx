import { TypePost } from "~/utils";
import { View } from "./HeaderApp.View"

export interface HeaderAppProps {
    titleHeader: string;
    listElements: TypePost[]
    listStars: TypePost[]
    listWeapons: TypePost[];
    descriptionHeader?: string
    listRoles?: TypePost[];
}

const HeaderApp = ({
    titleHeader,
    listElements,
    listStars,
    listWeapons,
    descriptionHeader,
    listRoles,
}: HeaderAppProps) => {
    return <View
        descriptionHeader={descriptionHeader}
        listElements={listElements}
        titleHeader={titleHeader}
        listStars={listStars}
        listWeapons={listWeapons}
        listRoles={listRoles}
    />
}

export { HeaderApp }
