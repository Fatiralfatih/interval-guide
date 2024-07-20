import { Metadata } from "next";
import { Navbar } from "~/components/template";
import { Footer } from "~/components/ui/Footer";
import { cn, dataMockApiImages, dataMockApis, roboto } from "~/utils";
import '~/app/globals.css'
import { listLinkItemsWhutering } from "~/features/whuteringWaves";
import { MainLayout } from "~/components/layout";

export const metadata: Metadata = {
  title: "Wuthering Waves | Interval Guide",
  description: "guide for Wuthering waves",
  icons: {
    icon: dataMockApiImages.whutering.icon
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(`${roboto.className} bg-interval-purple-900 min-h-screen antialiased text-white`)}>
        <Navbar
          listLinkItems={{
            web: listLinkItemsWhutering,
            mobile: listLinkItemsWhutering,
          }}
          variant={'whutering'}
          iconGame={dataMockApis.wuthering.images}
        />
        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </body>
    </html>
  )
}
