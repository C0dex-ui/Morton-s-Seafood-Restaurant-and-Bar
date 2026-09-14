import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { StickyCta } from "@/components/sticky-cta";

type Active = "Home" | "Pages" | "Services" | "Doctors" | "Blog" | "Contact";

export function SiteShell({
  active,
  children,
}: {
  active: Active;
  children: ReactNode;
}) {
  return (
    <div className="ms-page">
      <JsonLd />
      <SiteHeader active={active} />
      <main id="main">{children}</main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
