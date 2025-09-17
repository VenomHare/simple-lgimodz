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
const antonFont = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"]
})

const neonFont = localFont({
  src: '../fonts/neonrave.woff',
  fallback: ['PlayFair Display'],
  variable: '--font-neon'
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const SITE_NAME = "LGI Modz"
const SITE_DESCRIPTION = "A mod that you always want. Experience enhanced features and a revamped gameplay of WWE Here Comes the Pain!"

export const metadata: Metadata = {
  // Basic metadata
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  // Application name
  applicationName: SITE_NAME,

  // Keywords (consider reducing for better SEO)
  keywords: [
    "WWE Mod",
    "HCTP",
    "LGI Modz",
    "LGI YT",
    "2K25 Mod",
    "WWE Here Comes the Pain",
    "Limited Edition",
    "Deluxe Edition",
    "PS2 Mod",
    "PlayStation Mod",
    "Wrestling Game Mod",
    "RetroGaming",
    "Game Enhancement"
  ],

  // Author information
  authors: [
    {
      name: "VenomHare",
      url: "https://github.com/venomhare"
    }
  ],
  creator: "VenomHare",
  publisher: "VenomHare",

  // Referrer policy
  referrer: 'origin-when-cross-origin',

  // Color scheme and theme

  // Viewport (Note: viewport should be in layout.tsx, not metadata in Next.js 13+)
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',

  // Icons
  icons: {
    icon: [
      { url: '/lgimodz.png' },
      { url: '/lgimodz.ico', sizes: 'any' },
    ],
    shortcut: '/lgimodz.png',
    apple: [
      { url: '/lgimodz.png' },
      { url: '/lgimodz.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/lgimodz.png',
      },
    ],
  },

  // Manifest
  manifest: '/manifest.json',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - A Mod That You Always Want`,
    description: "Revamp your WWE Here Comes the Pain! gameplay with LGI Modz - Enhanced, Polished, Unforgettable.",
    images: [
      {
        url: '/lgimodz.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Cover Image`,
        type: 'image/png',
      },
      {
        url: '/lgimodz.png', // Optional square image
        width: 400,
        height: 400,
        alt: `${SITE_NAME} Logo`,
        type: 'image/png',
      }
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@KadamSarthak',
    creator: '@KadamSarthak',
    title: `${SITE_NAME} - A Mod That You Always Want`,
    description: 'Enhanced WWE HCTP experience like never before.',
    images: {
      url: '/lgimodz.png',
      alt: `${SITE_NAME} Preview`,
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Additional SEO metadata
  category: 'Gaming',
  classification: 'Gaming Modification',

  // Language alternatives (if you have multiple languages)
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      // Add more languages if needed
      // 'es-ES': `${SITE_URL}/es`,
    },
  },

  // App links (for mobile apps if applicable)
  // appLinks: {
  //   web: {
  //     url: SITE_URL,
  //   },
  // },

  // Bookmarks (for PWA)
  bookmarks: [SITE_URL],

  // Archive links
  archives: [`${SITE_URL}/archive`],

  // Assets (for preloading critical resources)
  assets: [`${SITE_URL}/assets`],

  // Generator (Next.js adds this automatically, but you can override)
  generator: 'Next.js',

  // Format detection (disable auto-detection of phone numbers, etc.)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Verification (add your verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    // other: 'your-other-verification-code',
  },

  // Other metadata
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': SITE_NAME,
    'application-name': SITE_NAME,
    'msapplication-TileColor': '#ff0000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#ff0000',
    'color-scheme': 'dark light',
    // Custom meta tags
    'custom:author': 'VenomHare',
    'custom:contact': 'https://github.com/venomhare',
  },
}

// Separate viewport export (recommended for Next.js 15+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff0000' },
    { media: '(prefers-color-scheme: dark)', color: '#ff0000' }
  ],
}


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
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js" defer></script>
      </body>
    </html>
  );
}
