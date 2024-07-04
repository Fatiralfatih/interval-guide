import { GenshinData } from '~/features/genshin'
import { View } from './CharacterList.View'
import { HonkaiType } from '~/features/honkaiSTR/types'
import { WhuteringType } from '~/features/whuteringWaves'

export interface CharacterListProps {
    data: GenshinData[] & HonkaiType[] & WhuteringType[]
}

const CharacterList = ({ data }: CharacterListProps) => {
    return (
        <View data={data} />
    )
}

export { CharacterList }
