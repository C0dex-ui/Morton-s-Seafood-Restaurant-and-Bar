# Project instructions — local service sites

Follow `/home/workdir/attachments/seo-system.md` on **this** build and **every future prospect** unless the user cancels it.

## SEO is not a later phase

- One primary keyword per page. Keyword in title, meta, H1, first 100 words, one H2, image alt, slug, closing paragraph.
- Titles **55–60** characters. Meta **145–160**. One H1. Never skip heading levels. Eyebrows are not headings.
- Word counts: Home 1,200–2,000 · Service 900–1,500 · City 900–1,300 · About 700–1,200.
- Production: unique service page + unique city page. Zero duplicate city copy.
- Full JSON-LD `@graph` with `@id` cross-refs: Organization, LocalBusiness (specific subtype), WebSite, WebPage, Service, BreadcrumbList, FAQPage, Person (owner when sourced). **No fake Review / aggregateRating.**
- NAP, hours, geo, social, reviews: official site / GBP only. Never invent. If hours are unpublished, omit them from UI and schema.
- `llms.txt` + `robots.txt` sitemap. Canonical. WebP images with alt, dimensions, lazy (except LCP). No iframes. No plaintext emails (use mailto / form). Sticky mobile call CTA.
- Footer: NAP, areas, services, Privacy, Terms, real social `sameAs`.
- Ban fluff: “Nowadays”, “In today’s world”, “We pride ourselves”, “Whether you need”, “When it comes to”, “Look no further”, “In conclusion”.
- Do not present stock/AI people as the owner, team, or a customer.

## Layout still unique per prospect

SEO structure is shared. Visual layout, palette, and section order stay unique to that brand — never clone the previous prospect’s homepage.
