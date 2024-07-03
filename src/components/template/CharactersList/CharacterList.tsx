import { GenshinData } from '~/features/genshin'
import { View } from './CharacterList.View'

export interface CharacterListProps {
    data: GenshinData[]
}

const CharacterList = ({ data }: CharacterListProps) => {
    return (
        <View data={data} />
    )
}

export default CharacterList
