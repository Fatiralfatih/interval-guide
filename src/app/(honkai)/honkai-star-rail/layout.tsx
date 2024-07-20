import { Metadata } from "next";
import { cn, dataMockApiImages, dataMockApis, roboto } from "~/utils";
import '~/app/globals.css'
import { Navbar } from "~/components/template";
import { Footer } from "~/components/ui/Footer";
import { listLinkItemsHonkai, listLinkItemsHonkaiMobile } from "~/features/honkaiSTR/utils";
import { MainLayout } from "~/components/layout";

export const metadata: Metadata = {
  title: "Honkai Star Rail | Interval Guide",
  description: "guide for honkai star rail",
  icons: {
    icon: dataMockApiImages.honkaiSTR.icon
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
            web: listLinkItemsHonkai,
            mobile: listLinkItemsHonkaiMobile,
          }}
          variant='honkai'
          iconGame={dataMockApis.honkaiSTR.images}
        />
        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </body>
    </html>
  )
}
