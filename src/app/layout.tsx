import "~/app/globals.css";
import { Footer } from "~/components/ui/footer";
import { cn } from "~/utils";
import { roboto } from "~/utils/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn(`${roboto.className} bg-interval-purple-900 min-h-screen antialiased text-white`)}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
