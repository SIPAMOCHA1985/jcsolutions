import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "JC Solutions Enterprise LLC | Luxury Construction & Remodeling Orlando, FL",
  description:
    "Florida-based holding company delivering premium construction, custom glass, and luxury interior remodeling across Orlando and Central Florida.",
  keywords: [
    "JC Solutions Enterprise",
    "luxury construction orlando",
    "remodeling company orlando fl",
    "custom glass orlando",
    "holding company florida",
    "interior design orlando",
  ],
  metadataBase: new URL("https://www.jcsolutionsenterprise.com"),
  alternates: {
    canonical: "https://www.jcsolutionsenterprise.com",
  },
  openGraph: {
    title: "JC Solutions Enterprise LLC | Luxury Construction Orlando",
    description:
      "A Florida-based holding company building premium brands across luxury construction, custom glass, and interior design.",
    url: "https://www.jcsolutionsenterprise.com",
    siteName: "JC Solutions Enterprise LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
