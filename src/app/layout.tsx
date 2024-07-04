import type { Metadata } from "next";
import "./globals.css";
import { cn } from "~/utils";
import { roboto } from "~/utils/font";
import { dataMockApiImages } from "~/utils/mockApi";
import { Footer } from "~/components/ui/Footer";
import { Navbar } from "~/components/template";

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
        <Navbar />
        <main className="pt-32 container md:px-6 lg:px-10 xl:px-52">
          <div className=" bg-interval-purple-800 p-5 md:p-6 md:py-10 lg:p-7 rounded-md">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
