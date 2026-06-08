import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://info.shinewebtechcretions.online"),
  title: {
    default: "Shineweb Tech Creations",
    template: "%s | Shineweb Tech Creations",
  },
  description:
    "Complete IT Solutions, Website Development, SEO, Software Development, Hardware Support, Digital Marketing and Business Growth Services.",
  keywords: [
    "Shineweb Tech Creations",
    "Website Development",
    "Web Design",
    "SEO Services",
    "Digital Marketing",
    "Software Development",
    "IT Solutions",
    "Hardware Support",
    "Business Website",
    "Ecommerce Website",
    "Assam IT Company",
    "Guwahati Website Developer",
  ],
  authors: [{ name: "Shineweb Tech Creations" }],
  creator: "Shineweb Tech Creations",
  publisher: "Shineweb Tech Creations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://info.shinewebtechcretions.online",
  },
  openGraph: {
    title: "Shineweb Tech Creations",
    description:
      "Professional Website Development, SEO, Software and IT Solutions.",
    url: "https://info.shinewebtechcretions.online",
    siteName: "Shineweb Tech Creations",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shineweb Tech Creations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shineweb Tech Creations",
    description:
      "Website Development, SEO, Software Development and IT Solutions.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Shineweb Tech Creations",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "technology",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050816",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}