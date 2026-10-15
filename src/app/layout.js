import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://ridwan-portfolio-xi.vercel.app"),
  title: { default: "Ogunlade Ridwan Folayimi | Mobile App Engineer", template: "%s | Ogunlade Ridwan Folayimi" },
  description: "Ogunlade Ridwan Folayimi is a mobile app engineer specializing in Flutter, Dart, and React Native, with additional frontend experience in React and Next.js.",
  keywords: ["Ogunlade Ridwan Folayimi", "Mobile App Engineer", "Flutter", "Dart", "React Native", "Expo"],
  authors: [{ name: "Ogunlade Ridwan Folayimi" }],
  creator: "Ogunlade Ridwan Folayimi",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ogunlade Ridwan Folayimi | Mobile App Engineer",
    description: "Cross-platform mobile engineering with Flutter, Dart, React Native, and Expo.",
    url: "https://ridwan-portfolio-xi.vercel.app",
    siteName: "Ogunlade Ridwan Folayimi",
    type: "website",
  },
  twitter: { card: "summary", title: "Ogunlade Ridwan Folayimi | Mobile App Engineer", description: "Flutter, Dart, and React Native mobile engineering." },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport = { themeColor: "#f5f5f5", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ToastContainer position="top-right" role="status" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
