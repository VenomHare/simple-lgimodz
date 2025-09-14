import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Playwrite_AU_SA, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import DiscountPopup from "@/components/DisplayComponents/DiscountPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playwriteAUSA = Playwrite_AU_SA({
  variable: "--font-playwrite-au-sa",
});
const schibsted_Grotesk = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"]
});
const antonFont = ({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Homemade Soaps",
  description: "Homemade Soaps",
};
const neonFont = localFont({
  src: '../fonts/neonrave.woff',
  fallback: ['PlayFair Display'],
  variable: '--font-neon'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${antonFont.variable} ${neonFont.variable} ${geistMono.variable} ${playwriteAUSA.variable} ${schibsted_Grotesk.variable} antialiased max-w-[100svw] overflow-x-hidden`}
      >
        <Appbar />
        <DiscountPopup/>
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
      </body>
    </html>
  );
}
