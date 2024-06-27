"use client"

import { usePathname } from "next/navigation"
import { View } from "./Navbar.View"
import { ListLinkType } from "~/utils"

const Navbar = () => {

  const pathName = usePathname()

  const renderValueBeetwenPath = (value: {
    whutering: string | Array<ListLinkType>,
    genshin: string | Array<ListLinkType>,
    honkaiSTR: string | Array<ListLinkType>,
    zenless: string | Array<ListLinkType>
  }): any => {
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
    <View
      renderValueBeetwenPath={renderValueBeetwenPath}
      pathName={pathName}
    />
  )
}

export { Navbar }
