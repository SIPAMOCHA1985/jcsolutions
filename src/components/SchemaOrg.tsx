export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JC Solutions Enterprise LLC",
    url: "https://www.jcsolutionsenterprise.com",
    logo: "https://www.jcsolutionsenterprise.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-407-538-8810",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      postalCode: "32803",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.ixoraglass.com",
      "https://www.ixora-living.com",
      "https://www.lumae-luxury.com",
    ],
    description:
      "JC Solutions Enterprise LLC — Florida holding company operating IxoraGlass, Ixora Living, and LUMAE Luxury brands. Premium custom glass, luxury interiors, and high-end home products in Orlando, FL.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
