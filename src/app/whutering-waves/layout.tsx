import { Metadata } from "next";
import { Navbar } from "~/components/ui";
import { dataMockApiImages } from "~/lib/mockApi";


export const metadata: Metadata = {
    title: "Whutering Waves | Interval Guide",
    description: "guide for Whutering waves",
    icons: {
        icon: dataMockApiImages.whutering.icon
    }
};

export default function WhuteringLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="">
                <Navbar variant={"whutering"} />
            </header>
            {children}
        </>
    );
}
