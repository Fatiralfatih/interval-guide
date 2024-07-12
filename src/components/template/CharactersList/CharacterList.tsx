import { View } from './CharacterList.View'

export interface CharacterListProps {
    data: any[]
}

const CharacterList = ({ data }: CharacterListProps) => {
    return (
        <View data={data} />
    )
}

export { CharacterList }
