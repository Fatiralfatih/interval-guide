import type { Metadata } from "next";
import "~/app/globals.css";
import { cn } from "~/utils";
import { roboto } from "~/utils/font";
import { dataMockApiImages } from "~/utils/mockApi";
import { Footer } from "~/components/ui/Footer";
import { listLinksItemsGenshin, listLinksItemsGenshinMobile } from "~/features/genshin";
import { Navbar } from "~/components/template";
import { MainLayout } from "~/components/layout";


export const metadata: Metadata = {
    title: "Genshin Impact | Interval Guide",
    description: "guide for genshin impact",
    icons: {
        icon: dataMockApiImages.genshin.icon
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={cn(`${roboto.className} bg-interval-purple-900 min-h-screen antialiased text-white`)}>
                <Navbar
                    listLinkItems={{
                        web: listLinksItemsGenshin,
                        mobile: listLinksItemsGenshinMobile,
                    }}
                    variant={'genshin'}
                    iconGame={dataMockApiImages.genshin}
                />
                <MainLayout>
                    {children}
                </MainLayout>
                <Footer />
            </body>
        </html>
    );
}
