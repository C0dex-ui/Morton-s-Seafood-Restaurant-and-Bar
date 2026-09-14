import {
  AREAS,
  DESCRIPTION,
  FAQS,
  MAPS_HREF,
  MENU,
  NAP,
  OWNER,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
  TITLE,
} from "@/lib/mortons";

const url = `${SITE_URL}/`;
const image = `${SITE_URL}/mortons/building.jpg`;
const logo = `${SITE_URL}/mortons/logo.svg`;

export function seoHead() {
  return {
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { name: "author", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: "Morton's Seafood Restaurant & Bar on Water Street in Madisonville" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "900" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: image },
      { name: "geo.region", content: "US-LA" },
      { name: "geo.placename", content: "Madisonville" },
      { name: "geo.position", content: `${NAP.lat};${NAP.lng}` },
      { name: "ICBM", content: `${NAP.lat}, ${NAP.lng}` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function seoGraph() {
  const orgId = `${SITE_URL}/#organization`;
  const bizId = `${SITE_URL}/#localbusiness`;
  const siteId = `${SITE_URL}/#website`;
  const logoId = `${SITE_URL}/#logo`;
  const pageId = `${SITE_URL}/#webpage`;
  const faqId = `${SITE_URL}/#faq`;
  const heroId = `${SITE_URL}/#hero-image`;
  const crumbId = `${SITE_URL}/#breadcrumb`;
  const personId = `${SITE_URL}/#owner`;

  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: NAP.street,
    addressLocality: NAP.city,
    addressRegion: NAP.region,
    postalCode: NAP.postal,
    addressCountry: "US",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url,
        logo: { "@type": "ImageObject", "@id": logoId, url: logo, contentUrl: logo },
        image: { "@id": logoId },
        telephone: NAP.phoneE164,
        address: postalAddress,
        sameAs: SOCIAL.map((s) => s.href),
        founder: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: OWNER.name,
        jobTitle: OWNER.role,
        worksFor: { "@id": orgId },
      },
      {
        "@type": "SeafoodRestaurant",
        "@id": bizId,
        name: SITE_NAME,
        url,
        telephone: NAP.phoneE164,
        address: postalAddress,
        geo: { "@type": "GeoCoordinates", latitude: NAP.lat, longitude: NAP.lng },
        hasMap: MAPS_HREF,
        image: { "@id": heroId },
        servesCuisine: ["Seafood", "Cajun", "Louisiana"],
        priceRange: "$$",
        areaServed: AREAS.map((a) => ({ "@type": "City", name: a })),
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "11:00", closes: "21:00" },
        ],
        parentOrganization: { "@id": orgId },
        employee: { "@id": personId },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url,
        name: SITE_NAME,
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": siteId },
        about: { "@id": bizId },
        primaryImageOfPage: { "@id": heroId },
      },
      {
        "@type": "ImageObject",
        "@id": heroId,
        url: image,
        contentUrl: image,
        caption: "Morton's Seafood Restaurant & Bar, 702 Water St, Madisonville",
      },
      {
        "@type": "BreadcrumbList",
        "@id": crumbId,
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: url }],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      ...MENU.map((m) => ({
        "@type": "MenuItem",
        "@id": `${SITE_URL}/#${m.slug}`,
        name: m.name,
        description: m.note,
        image: `${SITE_URL}${m.img}`,
      })),
    ],
  };
}
