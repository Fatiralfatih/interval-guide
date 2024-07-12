"use client"

import { usePathname } from "next/navigation"
import NavbarView from "./Navbar.View"
import { ListLinkType } from "~/utils"

export interface NavbarProps {
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
}

const Navbar = ({ listLinkItems }: NavbarProps) => {

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
    />
  )
}

export { Navbar }
