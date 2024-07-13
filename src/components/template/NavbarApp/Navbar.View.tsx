import Image from "next/image"
import { cn, dataMockApiImages } from "~/utils"
import { IoClose, IoMenu } from "react-icons/io5"
import Link from "next/link"
import { Fragment } from "react"
import { Button, Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "~/components/ui"
import { NavbarProps } from "./Navbar"
import { usePathname } from "next/navigation"


const NavbarView = ({ renderValueBeetwenPath, listLinkItems }: NavbarProps) => {

    const pathName = usePathname()

    return (
        <header>
            <nav
                className={cn(
                    "fixed rounded-lg top-0 py-2 px-4 z-10 w-full sm:px-6 lg:px-7 lg:py-0",
                    renderValueBeetwenPath?.({
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
                                        src={renderValueBeetwenPath?.({
                                            genshin: dataMockApiImages.genshin.icon,
                                            honkaiSTR: dataMockApiImages.honkaiSTR.icon,
                                            whutering: dataMockApiImages.whutering.icon,
                                            zenless: dataMockApiImages.zenlessZoneZero.icon,
                                        })}
                                        alt={`logo-${renderValueBeetwenPath?.({
                                            genshin: 'genshin-impact',
                                            honkaiSTR: 'honkai-star-rail',
                                            whutering: 'wuthering-waves',
                                            zenless: 'zenless-zone-zero'
                                        })}`}
                                        className="rounded-full aspect-auto md:w-[30px]"
                                        width={25}
                                        height={25}
                                    />
                                </figure>
                                <h4 className="truncate w-32 capitalize font-medium text-sm md:text-[16px] md:text-lg">
                                    {String(renderValueBeetwenPath?.({
                                        genshin: 'genshin impact',
                                        honkaiSTR: 'honkai: star rail',
                                        whutering: 'wuthering waves',
                                        zenless: 'zenless zone zero',
                                    }))}
                                </h4>
                            </div>
                        </div>

                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <Button
                                    className={cn(
                                        "w-fit bg-transparent",
                                        renderValueBeetwenPath?.({
                                            genshin: 'hover:bg-genshin-800',
                                            whutering: 'hover:bg-wuthering-800',
                                            honkaiSTR: 'hover:bg-honkaiSTR-800',
                                            zenless: 'hover:bg-zenless-600'
                                        })
                                    )}
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
                                        {listLinkItems.mobile.map(item => (
                                            <Link href={'#'} key={item.id}>
                                                <DrawerTitle className="border-b-[0.1px] border-b-interval-purple-500 hover:bg-interval-purple-900 transition-all ease-in-out duration-200 py-3 text-sm md:text-lg rounded-sm">{item.title}</DrawerTitle>
                                            </Link>
                                        ))}
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
                                        {pathName !== '/wuthering-waves' && (
                                            <Link href={'/wuthering-waves'}>
                                                <div className="flex gap-2 justify-center items-center py-3 hover:bg-interval-purple-900 border-b-[0.1px] rounded-sm border-b-white/20 transition-all ease-in-out duration-300">
                                                    <Image
                                                        className="rounded-full md:w-7"
                                                        src={dataMockApiImages.whutering.icon}
                                                        alt={dataMockApiImages.whutering.alt}
                                                        width={25}
                                                        height={25}
                                                    />
                                                    <p className="text-sm font-normal md:text-lg">
                                                        wuthering Waves
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
                            <li className={`py-2 px-3 ${pathName === "/wuthering-waves" ? 'bg-wuthering-800 rounded-br-lg' : 'hover:bg-interval-glory-900 rounded-br-lg'}`}>
                                <Link href={'/wuthering-waves'} className="flex items-center gap-2">
                                    <Image
                                        src={dataMockApiImages.whutering.icon}
                                        width={24}
                                        height={24}
                                        className="rounded-full aspect-auto lg:w-[26px]"
                                        alt={`logo-honkai:star-rail`}
                                    />
                                    <p className="font-[400]">
                                        Wuthering Waves
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center md:ps-[135px] lg:ps-52">
                        <NavigationMenu>
                            <NavigationMenuList className={`text-[16px] space-x-0`}>
                                {listLinkItems.web.filter(item => !item.children).map(item => (
                                    (
                                        <Fragment key={item.id}>
                                            <Link
                                                href={String(item.link)}
                                                className={cn(navigationMenuTriggerStyle(),
                                                    'p-5',
                                                    renderValueBeetwenPath?.({
                                                        genshin: 'hover:bg-genshin-800',
                                                        honkaiSTR: 'hover:bg-honkaiSTR-800',
                                                        zenless: 'hover:bg-zenless-600',
                                                        whutering: 'hover:bg-interval-glory-900/50'
                                                    }),
                                                    item.id === 1 && pathName === "/" ? 'bg-genshin-600/20' : '',
                                                    item.id === 1 && pathName === '/honkai-star-rail' ? 'bg-honkaiSTR-600/30' : '',
                                                    item.id === 1 && pathName === '/zenless-zone-zero' ? 'bg-zenless-600/40' : '',
                                                    item.id === 1 && pathName === '/whutering-waves' ? 'bg-whutering-800' : '',
                                                )}
                                            >
                                                <NavigationMenuItem className="lg:text-[17px] lg:font-light">
                                                    {item.title}
                                                </NavigationMenuItem>
                                            </Link>
                                        </Fragment>
                                    )
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    {listLinkItems.web.filter(item => item.children).map(item => (
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
        </header>
    )
}


export default NavbarView
