import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_AU_SA, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Appbar";

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
  subsets:["latin"]
});
export const metadata: Metadata = {
  title: "Homemade Soaps",
  description: "Homemade Soaps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwriteAUSA.variable} ${schibsted_Grotesk.variable} antialiased max-w-[100svw] overflow-x-hidden`}
      >
        <Appbar />
        {children}
      </body>
    </html>
  );
}
