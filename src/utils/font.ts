import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    display: 'swap',
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: '--font-poppins'
})

const roboto = Roboto({
    subsets: ["greek"],
    weight: ["100", "300", "400", "500", "700", "900"],
})

export { poppins, roboto }