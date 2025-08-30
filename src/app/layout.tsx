import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "vlus - Job Portal",
  description: "Find your next career opportunity",
  openGraph: {
    title: "vlus - Job Portal",
    description: "Find your next career opportunity",
    url: "https://job-website-olive.vercel.app/",
    siteName: "vlus",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vlus" }],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
