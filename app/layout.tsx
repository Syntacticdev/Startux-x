import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Startux X - Business Consulting & UX Design Experts",
  description: "Startux X specializes in innovative business consulting and user-centered UX design solutions. Empower your business with tailored strategies and exceptional user experiences.",
  keywords: "business consulting, UX design, user experience, process development, project management, quality assurance, Startux X, innovative solutions, business growth",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Startux X - Business Consulting & UX Design Experts",
    description: "Empowering businesses with innovative consulting and exceptional UX design solutions.",
    url: "https://www.startuxx.vercel.app",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Startux X - Business Consulting & UX Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startux X - Business Consulting & UX Design Experts",
    description: "Empowering businesses with innovative consulting and exceptional UX design solutions.",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
