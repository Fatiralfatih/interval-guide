import type { Metadata } from "next";
import "./globals.css";
import { cn } from "~/utils";
import { roboto } from "~/utils/font";
import { dataMockApiImages } from "~/utils/mockApi";
import { Navbar } from "~/components/ui/Navbar";
import { Footer } from "~/components/ui/Footer";

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

        {children}

        <Footer />
      </body>
    </html>
  );
}
