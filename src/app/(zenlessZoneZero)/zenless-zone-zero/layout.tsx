import { Metadata } from "next";
import { Navbar } from "~/components/template";
import { dataMockApiImages } from "~/utils";
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
    <>
      <Navbar
        listLinkItems={{
          web: listLinkItemsZenless,
          mobile: listLinkItemsZenlessMobile,
        }}
        variant={'zenless'}
        iconGame={dataMockApiImages.zenlessZoneZero}
      />
      <MainLayout>
        {children}
      </MainLayout>
    </>
  )
}
