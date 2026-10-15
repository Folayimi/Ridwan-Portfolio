import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://ridwan-portfolio-xi.vercel.app"),
  title: { default: "Ogunlade Ridwan | Software Engineer", template: "%s | Ogunlade Ridwan" },
  description: "Ogunlade Ridwan is a software engineer building responsive web applications and mobile experiences with React, Next.js, and React Native.",
  keywords: ["Ogunlade Ridwan", "Software Engineer", "Frontend Engineer", "React", "Next.js", "React Native"],
  authors: [{ name: "Ogunlade Ridwan" }],
  creator: "Ogunlade Ridwan",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ogunlade Ridwan | Software Engineer",
    description: "Web and mobile product engineering, selected work, and professional experience.",
    url: "https://ridwan-portfolio-xi.vercel.app",
    siteName: "Ogunlade Ridwan",
    type: "website",
  },
  twitter: { card: "summary", title: "Ogunlade Ridwan | Software Engineer", description: "Web and mobile product engineering." },
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
