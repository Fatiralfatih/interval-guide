import { Metadata } from "next";
import { Navbar } from "~/components/template";
import { Footer } from "~/components/ui/Footer";
import { cn, dataMockApiImages, dataMockApis, roboto } from "~/utils";
import '~/app/globals.css'
import { listLinkItemsZenless, listLinkItemsZenlessMobile } from "~/features/zenlessZoneZero";
import { MainLayout } from "~/components/layout";

export const metadata: Metadata = {
  title: "Zenless Zone Zero | Interval Guide",
  description: "guide for zenless zone zero",
  icons: {
    icon: dataMockApiImages.zenlessZoneZero.icon
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
            web: listLinkItemsZenless,
            mobile: listLinkItemsZenlessMobile,
          }}
          variant={'zenless'}
          iconGame={dataMockApis.zenlessZoneZero.images}
        />
        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </body>
    </html>
  )
}
