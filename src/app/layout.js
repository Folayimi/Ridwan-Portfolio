import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ogunlade Ridwan | Portfolio",
  keywords: [
    "Ogunlade Ridwan",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Ogunlade Ridwan", url: "" }],
  creator: "Ogunlade Ridwan",
  openGraph: {
    title: "Ogunlade Ridwan | Portfolio",
    description: "Portfolio of Ogunlade Ridwan, a Web Developer",
    url: "https://ogunlade-ridwan.vercel.app",
    siteName: "Ogunlade Ridwan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ogunlade Ridwan Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogunlade Ridwan | Portfolio",
    site: "@ogunlade_ridwan",
    creator: "@ogunlade_ridwan",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
  colorScheme: "dark light",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  applicationName: "Ogunlade Ridwan Portfolio",
  publisher: "Ogunlade Ridwan",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1",
  creator: "Ogunlade Ridwan",
  generator: "Next.js",
  category: "Portfolio",
  description: "Portfolio of Ogunlade Ridwan, a Web Developer",
  alternates: {
    canonical: "https://ogunlade-ridwan.vercel.app",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/atom.xml",
    },
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  colorScheme: "dark light",
  metadataBase: new URL("https://ogunlade-ridwan.vercel.app"),
  appleWebApp: {
    capable: true,
    title: "Ogunlade Ridwan | Portfolio",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${sora.variable}`}>
        <ToastContainer />        
        <Navbar />
        <main> {children} </main>
      </body>
    </html>
  );
}
