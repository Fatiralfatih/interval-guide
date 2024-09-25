import React from 'react'
import { MainLayout } from '~/components/layout'
import { Navbar } from '~/components/template'
import { listLinksItemsGenshin, listLinksItemsGenshinMobile } from '~/features/genshin'
import { dataMockApiImages } from '~/utils'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar
                listLinkItems={{
                    web: listLinksItemsGenshin,
                    mobile: listLinksItemsGenshinMobile,
                }}
                variant={'genshin'}
                iconGame={dataMockApiImages.genshin}
            />
            <MainLayout>
                {children}
            </MainLayout>
        </>
    )
}

export default RootLayout
