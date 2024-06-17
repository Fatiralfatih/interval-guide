import type { Metadata } from "next";
import "./globals.css";
import { cn } from "~/lib/utils";
import { poppins } from "~/lib/font";
import { dataMockApiImages } from "~/lib/mockApi";
import { Navbar } from "~/components/ui/Navbar";

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
      <body className={cn(`${poppins.className} bg-interval-purple-900 min-h-screen antialiased text-white`)}>
        <header className="">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
