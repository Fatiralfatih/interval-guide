"use client"

import Image from "next/image"
import { IoMenu } from "react-icons/io5"
import { Button } from "./button"
import { cn } from "~/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React, { forwardRef, Fragment, useCallback } from "react"
import { dataMockApiImages } from "~/lib/mockApi"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./navigation-menu"
import { usePathname } from "next/navigation"
import { listLinksItems } from "~/lib/constants"

type NavbarProps = VariantProps<typeof navbarVariants> & React.HtmlHTMLAttributes<HTMLDivElement>

const navbarVariants = cva(
    "fixed  rounded-lg top-0 left-0 right-0 py-4 px-4 w-full sm:px-6 lg:px-7 lg:py-0 ",
    {
        variants: {
            variant: {
                whutering: 'bg-wuthering-900',
                genshin: 'bg-genshin-900',
                honkaiSTR: 'bg-honkaiSTR-900'
            },
        },
        defaultVariants: {
            variant: 'genshin',
        }
    }
)

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ className, variant }, ref) => {

    const renderIcon = useCallback(() => {
        if (variant === "whutering") {
            return dataMockApiImages.whutering.icon
        } else if (variant === "honkaiSTR") {
            return dataMockApiImages.honkaiSTR.icon
        } else {
            return dataMockApiImages.genshin.icon
        }
    }, [variant])

    const renderGameName = useCallback(() => {
        if (variant === "whutering") {
            return 'whutering waves'
        } else if (variant === "honkaiSTR") {
            return 'honkai star rail'
        } else {
            return 'genshin impact'
        }
    }, [variant])

    return (
        <nav ref={ref} className={cn(navbarVariants({ variant, className }), '')}>
            {/* navbar for mobile */}
            <NavbarMobile
                renderIcon={renderIcon}
                renderGameName={renderGameName}
            />
            {/* navbar for website */}
            <NavbarWebsite />
        </nav>
    )
})

Navbar.displayName = "Navbar"

interface NavbarMobileProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    renderIcon: () => string
    renderGameName: () => string
}

const NavbarMobile = forwardRef<HTMLDivElement, NavbarMobileProps>(({ renderGameName, renderIcon, className }, ref) => {

    return (
        <section className={`flex justify-between w-full items-center lg:hidden ${className}`} ref={ref}>
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold">Interval.GG</h1>
                <div className="text-sm font-medium flex items-center gap-2">
                    <figure>
                        <Image
                            src={renderIcon()} alt={`logo-${renderGameName()}`}
                            className="w-7 rounded-full aspect-auto"
                            width={700}
                            height={700}
                        />
                    </figure>
                    <h4 className="truncate w-32 capitalize">
                        {renderGameName()}
                    </h4>
                </div>
            </div>
            <Button
                className="w-fit"
                variant={"ghost"}
                size={'icon'}
            >
                <IoMenu className="text-3xl" />
            </Button>
        </section>
    )
})

NavbarMobile.displayName = "NavbarMobile"

type NavbarWebsiteProps = React.HtmlHTMLAttributes<HTMLDivElement>

const NavbarWebsite = forwardRef<HTMLElement, NavbarWebsiteProps>(({ className, ...props }, ref) => {

    const pathName = usePathname()

    return (
        <section className={`hidden lg:flex lg:flex-col ${className}`} ref={ref} {...props}>
            <div className="flex gap-2">
                <h1 className="text-xl font-bold pt-2">Interval.GG</h1>
                <div>
                    <ul className="bg-speechless flex  rounded-b-lg capitalize text-xs">
                        {/* genshin impact */}
                        <li className={`py-2 px-3 ${pathName === "/" && 'bg-amber-800'}`}>
                            <Link href={'/'} className="flex items-center gap-2">
                                <Image
                                    src={dataMockApiImages.genshin.icon}
                                    width={26}
                                    height={26}
                                    className="rounded-full aspect-auto"
                                    alt={`logo-honkai:star-rail`}
                                />
                                <p className="font-[600]">
                                    Genshin Impact
                                </p>
                            </Link>
                        </li>

                        {/* honkai star rail */}
                        <li className={`py-2 px-3 ${pathName === "/honkai-star-rail" && 'bg-honkaiSTR-800'}`}>
                            <Link href={'/honkai-star-rail'} className="flex items-center gap-2">
                                <Image
                                    src={dataMockApiImages.honkaiSTR.icon}
                                    width={26}
                                    height={26}
                                    className="rounded-full aspect-auto"
                                    alt={`logo-honkai:star-rail`}
                                />
                                <p className="font-[600]">
                                    Honkai: Star Rail
                                </p>
                            </Link>
                        </li>

                        {/* zen less zone zero */}
                        <li className="py-2 px-3 ">
                            <Link href={'zenless-zone-zero'} className="flex items-center gap-2">
                                <Image
                                    src={dataMockApiImages.zenlessZoneZero.icon}
                                    width={26}
                                    height={26}
                                    className="rounded-full aspect-auto"
                                    alt={`logo-honkai:star-rail`}
                                />
                                <p className="font-[600]">
                                    Zenless zone zero
                                </p>
                            </Link>
                        </li>

                        {/* whutering waves */}
                        <li className={`py-2 px-3 ${pathName === "/whutering-waves" && 'bg-wuthering-800'}`}>
                            <Link href={'/whutering-waves'} className="flex items-center gap-2">
                                <Image
                                    src={dataMockApiImages.whutering.icon}
                                    width={26}
                                    height={26}
                                    className="rounded-full aspect-auto"
                                    alt={`logo-honkai:star-rail`}
                                />
                                <p className="font-[600]">
                                    Whutering Waves
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center ps-44">
                <NavigationMenu>
                    <NavigationMenuList className={`text-[16px] `}>
                        {listLinksItems.map(item => (
                            <Fragment key={item.id}>
                                {!item.children && (
                                    <Link
                                        href={String(item.link)}
                                        className={cn(navigationMenuTriggerStyle(),
                                            'p-4',
                                        )}
                                    >
                                        <NavigationMenuItem>
                                            {item.title}
                                        </NavigationMenuItem>
                                    </Link>
                                )}
                            </Fragment>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="">
                            <NavigationMenuTrigger className="text-[16px] p-3 font-medium">Database</NavigationMenuTrigger>
                            <NavigationMenuContent className="w-full">
                                {listLinksItems.map(item => (
                                    <ul className="w-full min-w-[200px]" key={item.id}>
                                        {item.children?.map(children => (
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
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </section>
    )
})

NavbarWebsite.displayName = "NavbarWebsite"

export {
    Navbar,
    NavbarMobile,
    NavbarWebsite,
}
