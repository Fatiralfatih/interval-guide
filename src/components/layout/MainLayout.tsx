import React, { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="pt-[90px] container min-h-[80vh] lg:pt-32 md:px-6 lg:px-10 xl:px-52">
            <div className=" bg-interval-purple-800 p-5 md:p-6 md:py-10 lg:p-7 rounded-md">
                {children}
            </div>
        </main>
    )
}

export { MainLayout }
