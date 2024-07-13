import { Metadata } from "next";
import { Navbar } from "~/components/template";
import { Footer } from "~/components/ui/Footer";
import { cn, dataMockApiImages, roboto } from "~/utils";
import '~/app/globals.css'
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
    <html lang="en">
      <body className={cn(`${roboto.className} bg-interval-purple-900 min-h-screen antialiased text-white`)}>
        <Navbar
          listLinkItems={{
            web: listLinkItemsWhutering,
            mobile: listLinkItemsWhutering,
          }}
          variant={'whutering'}
        />
        <main className="pt-32 container md:px-6 lg:px-10 xl:px-52">
          <div className=" bg-interval-purple-800 p-5 md:p-6 md:py-10 lg:p-7 rounded-md">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
