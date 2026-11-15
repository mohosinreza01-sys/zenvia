
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import WhatsAppButton from "./components/others/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenvia-wheat.vercel.app"),

  title: "Zenvia Real Estate",
  description:
    "Find your perfect property with Zenvia Real Estate. Explore properties for sale and rent.",

  openGraph: {
    title: "Zenvia Real Estate",
    description: "Find Your Perfect Place with Zenvia.",
    url: "https://zenvia-wheat.vercel.app",
    siteName: "Zenvia Real Estate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenvia Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zenvia Real Estate",
    description: "Find Your Perfect Place with Zenvia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
