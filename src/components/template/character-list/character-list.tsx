import { View } from './character-list.view'

export interface CharacterListProps {
    data: any[]
}

const CharacterList = ({ data }: CharacterListProps) => {
    return (
        <View data={data} />
    )
}

export { CharacterList }
