import { Metadata } from "next";
import { dataMockApiImages, } from "~/utils";
import { Navbar } from "~/components/template";
import { MainLayout } from "~/components/layout";
import { listLinkItemsHonkai, listLinkItemsHonkaiMobile } from "~/features/honkaiSTR";

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
    <>
      <Navbar
        listLinkItems={{
          web: listLinkItemsHonkai,
          mobile: listLinkItemsHonkaiMobile,
        }}
        variant={'honkai'}
        iconGame={dataMockApiImages.honkaiSTR}
      />
      <MainLayout>
        {children}
      </MainLayout>
    </>
  )
}
