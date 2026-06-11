import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.usnext.org"),
  title: "U.S. Next | Handyman, Remodeling & Home Improvement Services",
  description:
    "Call U.S. Next for reliable handyman, remodeling, repairs, painting, flooring, concrete, outdoor projects, and home improvement services. Free no-obligation estimates.",
  keywords: [
    "handyman",
    "remodeling",
    "home improvement",
    "home repairs",
    "kitchen remodeling",
    "bathroom remodeling",
    "painting",
    "flooring",
    "concrete",
    "U.S. Next",
  ],
  openGraph: {
    title: "U.S. Next | Handyman, Remodeling & Home Improvement Services",
    description:
      "Reliable handyman, remodeling, and home improvement services. Free no-obligation estimates. Call (512) 986-0287.",
    url: "https://www.usnext.org/",
    siteName: "U.S. Next",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.usnext.org/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
