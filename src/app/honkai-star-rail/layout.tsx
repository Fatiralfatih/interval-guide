import { Metadata } from "next";
import { Navbar } from "~/components/ui";
import { dataMockApiImages } from "~/lib/mockApi";

export const metadata: Metadata = {
    title: "honkai Star Rail | Interval Guide",
    description: "guide for Whutering waves",
    icons: {
        icon: dataMockApiImages.honkaiSTR.icon,
    }
};

export default function HonkaiSTRLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="">
                <Navbar variant={"honkaiSTR"} />
            </header>
            {children}
        </>
    );
}
