"use client"

import { usePathname } from "next/navigation"
import NavbarView from "./Navbar.View"
import { IconPost, ListLinkType } from "~/utils"
import { cva, VariantProps } from "class-variance-authority"

export interface NavbarProps extends VariantProps<typeof navbarVariants> {
  className?: string
  renderValueBeetwenPath?: (value: {
    whutering?: string,
    genshin: string,
    honkaiSTR: string,
    zenless: string,
  }) => string | undefined,
  listLinkItems: {
    web: ListLinkType[],
    mobile: ListLinkType[]
  }
  iconGame: IconPost
}

const navbarVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "bg-zinc-950",
        genshin: "bg-genshin-900",
        whutering: "bg-wuthering-900",
        honkai: "bg-honkaiSTR-900",
        zenless: "bg-zenless-900"
      },
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

const Navbar = ({ listLinkItems, variant, className, iconGame }: NavbarProps) => {

  const pathName = usePathname()

  const renderValueBeetwenPath = (value: {
    whutering?: string,
    genshin: string,
    honkaiSTR: string,
    zenless: string
  }): string | undefined => {
    if (pathName === "/whutering-waves") {
      return value.whutering
    } else if (pathName === "/honkai-star-rail") {
      return value.honkaiSTR
    } else if (pathName === "/zenless-zone-zero") {
      return value.zenless
    } else if (pathName === "/") {
      return value.genshin
    }
  }

  return (
    <NavbarView
      renderValueBeetwenPath={renderValueBeetwenPath}
      listLinkItems={listLinkItems}
      variant={variant}
      className={className}
      iconGame={iconGame}
    />
  )
}

export { Navbar, navbarVariants }
