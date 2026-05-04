import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JC Solutions Enterprise LLC | Construction & Project Management Orlando, FL",
  description:
    "Premium construction, roofing, pool construction, remodeling and project management in Orlando and Central Florida. Bilingual team. Flexible payments.",
  keywords: [
    "JC Solutions Enterprise",
    "construction company orlando",
    "roofing orlando fl",
    "pool construction orlando",
    "general contractor orlando",
    "remodeling company orlando",
    "project management florida",
  ],
  metadataBase: new URL("https://www.jcsolutionsenterprise.com"),
  alternates: {
    canonical: "https://www.jcsolutionsenterprise.com",
  },
  openGraph: {
    title: "JC Solutions Enterprise LLC | Construction & Project Management Orlando",
    description:
      "Premium construction, roofing, pool construction, remodeling and project management in Orlando and Central Florida.",
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
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
