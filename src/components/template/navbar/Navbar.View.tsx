import Image from "next/image"
import { cn, dataMockApiImages, ListLinkType } from "~/utils"
import { IoClose, IoMenu } from "react-icons/io5"
import { listLinksItemsGenshin, listLinksItemsGenshinMobile } from "~/features/genshin"
import Link from "next/link"
import { Fragment } from "react"
import { listLinkItemsHonkai, listLinkItemsHonkaiMobile } from "~/features/honkaiSTR"
import { listLinkItemsWhutering } from "~/features/whuteringWaves"
import { listLinkItemsZenless, listLinkItemsZenlessMobile } from "~/features/zenlessZoneZero"
import { Button, Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "~/components/ui"

interface NavbarViewProps {
    renderValueBeetwenPath: (value: {
        whutering?: string | Array<ListLinkType>,
        genshin: string | Array<ListLinkType>,
        honkaiSTR: string | Array<ListLinkType>,
        zenless: string | Array<ListLinkType>,
    }) => string & Array<ListLinkType>,
    pathName: string;
}

const View = ({ renderValueBeetwenPath, pathName }: NavbarViewProps) => {

    return (
        <header>
            <nav
                className={cn(
                    "fixed rounded-lg top-0 py-2 px-4 z-10 w-full sm:px-6 lg:px-7 lg:py-0",
                    renderValueBeetwenPath({
                        whutering: 'bg-wuthering-900',
                        genshin: 'bg-genshin-900',
                        honkaiSTR: 'bg-honkaiSTR-900',
                        zenless: 'bg-zenless-900',
                    })
                )}
            >
                {/* navbar for mobile */}
                <section className={`lg:hidden`}>
                    <div className="flex justify-between w-full items-center">
                        {/* header */}
                        <div className="flex items-center gap-5">
                            <h1 className="text-xl font-bold md:text-2xl">Interval.GG</h1>
                            <div className="text-sm font-medium flex items-center gap-2">
                                <figure>
                                    <Image
                                        src={renderValueBeetwenPath({
                                            genshin: dataMockApiImages.genshin.icon,
                                            honkaiSTR: dataMockApiImages.honkaiSTR.icon,
                                            whutering: dataMockApiImages.whutering.icon,
                                            zenless: dataMockApiImages.zenlessZoneZero.icon,
                                        })}
                                        alt={`logo-${renderValueBeetwenPath({
                                            genshin: 'genshin-impact',
                                            honkaiSTR: 'honkai-star-rail',
                                            whutering: 'whutering-waves',
                                            zenless: 'zenless-zone-zero'
                                        })}`}
                                        className="rounded-full aspect-auto md:w-[30px]"
                                        width={25}
                                        height={25}
                                    />
                                </figure>
                                <h4 className="truncate w-32 capitalize font-medium text-sm md:text-[16px] md:text-lg">
                                    {String(renderValueBeetwenPath({
                                        genshin: 'genshin impact',
                                        honkaiSTR: 'honkai: star rail',
                                        whutering: 'whutering waves',
                                        zenless: 'zenless zone zero',
                                    }))}
                                </h4>
                            </div>
                        </div>

                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <Button
                                    className="w-fit"
                                    variant={"interval-purple"}
                                    size={'icon'}
                                >
                                    <IoMenu className="text-3xl" />
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className="bg-indigo-950 lg:hidden">
                                <div className="px-5 py-3 flex gap-3 items-center border-b-[0.1px] border-b-white/20 md:px-10">
                                    <DrawerClose>
                                        <IoClose className="text-[29px]" />
                                    </DrawerClose>
                                    <p className="text-lg font-medium">Menu Utama</p>
                                </div>
                                <div className="overflow-auto w-full h-screen  pb-8">
                                    <DrawerHeader className="pt-0 pb-0">
                                        {/* honkai star rail */}
                                        {pathName === "/honkai-star-rail" &&
                                            listLinkItemsHonkaiMobile.map(item => (
                                                <Link href={'#'} key={item.id}>
                                                    <DrawerTitle className="   hover:bg-interval-purple-900 transition-all ease-in-out duration-200 border-b-[0.1px] border-b-interval-purple-500 py-3 text-sm md:text-lg rounded-sm">{item.title}</DrawerTitle>
                                                </Link>
                                            ))}

                                        {/* genshin impact */}
                                        {pathName === "/" && (
                                            listLinksItemsGenshinMobile.map(item => (
                                                <Link href={'#'} key={item.id}>
                                                    <DrawerTitle className="border-b-[0.1px] border-b-interval-purple-500 hover:bg-interval-purple-900 transition-all ease-in-out duration-200 py-3 text-sm md:text-lg rounded-sm">{item.title}</DrawerTitle>
                                                </Link>
                                            ))
                                        )}

                                        {/* whutering waves */}
                                        {pathName === "/whutering-waves" && (
                                            listLinkItemsWhutering.map(item => (
                                                <Link href={'#'} key={item.id}>
                                                    <DrawerTitle className="border-b-[0.1px] border-b-interval-purple-500 hover:bg-interval-purple-900 transition-all ease-in-out duration-200 py-3 text-sm md:text-lg rounded-sm">{item.title}</DrawerTitle>
                                                </Link>
                                            ))
                                        )}

                                        {/* zenless zone zero */}
                                        {pathName === "/zenless-zone-zero" && (
                                            listLinkItemsZenlessMobile.map(item => (
                                                <Link href={'#'} key={item.id}>
                                                    <DrawerTitle className="border-b-[0.1px] border-b-interval-purple-500 hover:bg-interval-purple-900 transition-all ease-in-out duration-200 py-3 text-sm md:text-lg rounded-sm">{item.title}</DrawerTitle>
                                                </Link>
                                            ))
                                        )}
                                    </DrawerHeader>

                                    <DrawerHeader className="bg-interval-purple-700 flex flex-col rounded-lg p-0 py-2 px-4">
                                        {/* honkai star rail */}
                                        {pathName !== "/honkai-star-rail" && (
                                            <Link href={'/honkai-star-rail'}>
                                                <div className="flex gap-2 justify-center items-center border-b-[0.1px] rounded-sm border-b-white/20 py-3 hover:bg-interval-purple-900 transition-all ease-in-out duration-300">
                                                    <Image
                                                        className="rounded-full md:w-7"
                                                        src={dataMockApiImages.honkaiSTR.icon}
                                                        alt={dataMockApiImages.honkaiSTR.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                    <p className="text-sm font-normal md:text-lg">
                                                        Honkai: Star Rail
                                                    </p>
                                                </div>
                                            </Link>
                                        )}

                                        {/* genshin impact */}
                                        {pathName !== '/' && (
                                            <Link href={'/'}>
                                                <div className="flex gap-2 justify-center items-center border-b-[0.1px] rounded-sm border-b-white/20 py-3 hover:bg-interval-purple-900  transition-all ease-in-out duration-300">
                                                    <Image
                                                        className="rounded-full md:w-7"
                                                        src={dataMockApiImages.genshin.icon}
                                                        alt={dataMockApiImages.genshin.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                    <p className="text-sm font-normal md:text-lg">
                                                        Genshin Impact
                                                    </p>
                                                </div>
                                            </Link>
                                        )}

                                        {/* whutering waves */}
                                        {pathName !== '/whutering-waves' && (
                                            <Link href={'/whutering-waves'}>
                                                <div className="flex gap-2 justify-center items-center py-3 hover:bg-interval-purple-900 border-b-[0.1px] rounded-sm border-b-white/20 transition-all ease-in-out duration-300">
                                                    <Image
                                                        className="rounded-full md:w-7"
                                                        src={dataMockApiImages.whutering.icon}
                                                        alt={dataMockApiImages.whutering.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                    <p className="text-sm font-normal md:text-lg">
                                                        Whutering Waves
                                                    </p>
                                                </div>
                                            </Link>
                                        )}

                                        {/* zenless zone zero */}
                                        {pathName !== '/zenless-zone-zero' && (
                                            <Link href={'/zenless-zone-zero'}>
                                                <div className="flex gap-2 justify-center items-center py-3 hover:bg-interval-purple-900 border-b-[0.1px] rounded-sm border-b-white/20 transition-all ease-in-out duration-300">
                                                    <Image
                                                        className="rounded-full md:w-7"
                                                        src={dataMockApiImages.zenlessZoneZero.icon}
                                                        alt={dataMockApiImages.zenlessZoneZero.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                    <p className="text-sm font-normal md:text-lg">
                                                        Zenless Zone Zero
                                                    </p>
                                                </div>
                                            </Link>
                                        )}

                                    </DrawerHeader>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </section>

                {/* navbar for website */}
                <section className={`hidden lg:flex lg:flex-col `}>
                    <div className="flex gap-5">
                        <h1 className="text-xl font-bold pt-2 md:text-2xl">Interval.GG</h1>
                        <ul className="bg-speechless flex rounded-b-lg capitalize text-xs min-w-full lg:text-sm">
                            {/* genshin impact */}
                            <li className={`py-2 px-3 ${pathName === "/" ? 'bg-genshin-800 rounded-bl-lg' : 'hover:bg-interval-glory-900 rounded-bl-lg'} `}>
                                <Link href={'/'} className="flex items-center gap-2">
                                    <Image
                                        src={dataMockApiImages.genshin.icon}
                                        width={24}
                                        height={24}
                                        className="rounded-full aspect-auto lg:w-[26px]"
                                        alt={`logo-honkai:star-rail`}
                                    />
                                    <p className="font-[400]">
                                        Genshin Impact
                                    </p>
                                </Link>
                            </li>

                            {/* honkai star rail */}
                            <li className={`py-2 px-3 ${pathName === "/honkai-star-rail" ? 'bg-honkaiSTR-800' : 'hover:bg-interval-glory-900 '}`}>
                                <Link href={'/honkai-star-rail'} className="flex items-center gap-2">
                                    <Image
                                        src={dataMockApiImages.honkaiSTR.icon}
                                        width={24}
                                        height={24}
                                        className="rounded-full aspect-auto lg:w-[26px]"
                                        alt={`logo-honkai:star-rail`}
                                    />
                                    <p className="font-[400]">
                                        Honkai: Star Rail
                                    </p>
                                </Link>
                            </li>

                            {/* zen less zone zero */}
                            <li className={`py-2 px-3 ${pathName === "/zenless-zone-zero" ? 'bg-zenless-900' : 'hover:bg-interval-glory-900'} rounded-b-lg`}>
                                <Link href={'zenless-zone-zero'} className="flex items-center gap-2 ">
                                    <Image
                                        src={dataMockApiImages.zenlessZoneZero.icon}
                                        width={24}
                                        height={24}
                                        className="rounded-full aspect-auto lg:w-[26px]"
                                        alt={`logo-honkai:star-rail`}
                                    />
                                    <p className="font-[400]">
                                        Zenless zone zero
                                    </p>
                                </Link>
                            </li>

                            {/* whutering waves */}
                            <li className={`py-2 px-3 ${pathName === "/whutering-waves" ? 'bg-wuthering-800 rounded-br-lg' : 'hover:bg-interval-glory-900 rounded-br-lg'}`}>
                                <Link href={'/whutering-waves'} className="flex items-center gap-2">
                                    <Image
                                        src={dataMockApiImages.whutering.icon}
                                        width={24}
                                        height={24}
                                        className="rounded-full aspect-auto lg:w-[26px]"
                                        alt={`logo-honkai:star-rail`}
                                    />
                                    <p className="font-[400]">
                                        Whutering Waves
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center md:ps-[135px] lg:ps-52">
                        <NavigationMenu>
                            <NavigationMenuList className={`text-[16px] space-x-0`}>
                                {renderValueBeetwenPath({
                                    genshin: listLinksItemsGenshin,
                                    honkaiSTR: listLinkItemsHonkai,
                                    whutering: listLinkItemsWhutering,
                                    zenless: listLinkItemsZenless,
                                })?.map((item: ListLinkType) => (!item.children && (
                                    <Fragment key={item.id}>
                                        <Link
                                            href={String(item.link)}
                                            className={cn(navigationMenuTriggerStyle(),
                                                'p-5',
                                                renderValueBeetwenPath({
                                                    genshin: 'hover:bg-genshin-800',
                                                    honkaiSTR: 'hover:bg-honkaiSTR-800',
                                                    zenless: 'hover:bg-zenless-600',
                                                    whutering: 'hover:bg-interval-glory-900/50'
                                                }),
                                            )}
                                        >
                                            <NavigationMenuItem className="lg:text-[17px] lg:font-light">
                                                {item.title}
                                            </NavigationMenuItem>
                                        </Link>
                                    </Fragment>
                                ))
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem className="">
                                    {renderValueBeetwenPath({
                                        genshin: listLinksItemsGenshin.filter(item => item.children),
                                        honkaiSTR: listLinkItemsHonkai.filter(item => item.children),
                                        whutering: undefined,
                                        zenless: listLinkItemsZenless.filter(item => item.children),
                                    })?.map((item: ListLinkType) => (
                                        <Fragment key={item.id}>
                                            <NavigationMenuTrigger className="text-[16px] p-4 h-[60px] font-medium lg:text-[17px] lg:font-light">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent >
                                                <ul className="w-full min-w-[200px]">
                                                    {item?.children?.map(children => (
                                                        <li className="flex" key={children.id}>
                                                            <Link
                                                                href={children.title.toLowerCase()}
                                                                className="w-full ps-4 py-3"
                                                            >
                                                                {children.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </Fragment>
                                    ))}
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </section>
            </nav>
        </header >
    )
}


export { View }
