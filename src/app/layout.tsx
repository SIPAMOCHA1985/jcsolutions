import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import SchemaOrg from "@/components/SchemaOrg";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jcsolutionsenterprise.com"),
  title: "JC Solutions Enterprise LLC — Premium Construction & Luxury Interiors Orlando",
  description:
    "Florida holding company operating IxoraGlass, Ixora Living, and LUMAE Luxury. Premium custom glass, luxury interior remodeling, and high-end home products in Orlando, FL.",
  keywords: [
    "JC Solutions Enterprise",
    "luxury remodeling Orlando",
    "custom glass Orlando",
    "IxoraGlass",
    "Ixora Living",
    "LUMAE Luxury",
    "Florida construction company",
    "luxury home renovation Orlando",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jcsolutionsenterprise.com",
    siteName: "JC Solutions Enterprise LLC",
    title: "JC Solutions Enterprise LLC — Premium Construction & Luxury Interiors",
    description:
      "Premium construction, custom glass, and luxury interiors in Orlando, FL. Brands: IxoraGlass · Ixora Living · LUMAE Luxury.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JC Solutions Enterprise LLC",
    description: "Premium construction and luxury interiors in Orlando, FL.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.jcsolutionsenterprise.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
