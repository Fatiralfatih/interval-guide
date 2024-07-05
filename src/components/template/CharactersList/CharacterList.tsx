import { GenshinData } from '~/features/genshin'
import { View } from './CharacterList.View'
import { HonkaiType } from '~/features/honkaiSTR/types'
import { WhuteringType } from '~/features/whuteringWaves'
import { ZenlessType } from '~/features/zenlessZoneZero/types'

export interface CharacterListProps {
    data: any[]
}

const CharacterList = ({ data }: CharacterListProps) => {
    return (
        <View data={data} />
    )
}

export { CharacterList }
