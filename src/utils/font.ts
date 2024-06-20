import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    display: 'swap',
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: '--font-poppins'
})

export { poppins }