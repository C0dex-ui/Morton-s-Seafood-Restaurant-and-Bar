import { SiteShell } from "@/components/site-shell";
import { SITE_SHORT } from "@/lib/mortons";

export function NotFoundPage() {
  return (
    <SiteShell active="Home">
      <section className="ms-wrap" style={{ padding: "6rem 1rem", textAlign: "center" }}>
        <p className="ms-script">404</p>
        <h1>Page not found</h1>
        <p>That address is not on this {SITE_SHORT} homepage.</p>
        <div className="ms-actions" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
          <a href="/#top" className="ms-btn ms-btn-ghost">
            Home
          </a>
          <a href="/#reserve" className="ms-btn">
            Reserve
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
