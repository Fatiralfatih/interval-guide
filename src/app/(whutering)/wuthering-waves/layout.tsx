import { Metadata } from "next";
import { Navbar } from "~/components/template";
import { Footer } from "~/components/ui/footer";
import { cn, dataMockApiImages, dataMockApis, roboto } from "~/utils";
import '~/app/globals.css'
import { MainLayout } from "~/components/layout";
import { listLinkItemsWhutering } from "~/features/whuteringWaves";

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
    <>
      <Navbar
        listLinkItems={{
          web: listLinkItemsWhutering,
          mobile: listLinkItemsWhutering,
        }}
        variant={'whutering'}
        iconGame={dataMockApiImages.whutering}
      />
      <MainLayout>
        {children}
      </MainLayout>
    </>
  )
}
