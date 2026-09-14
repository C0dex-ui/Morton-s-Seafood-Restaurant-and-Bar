import { Link } from "@tanstack/react-router";

export function PageBanner({
  title,
  crumbs,
}: {
  title: string;
  crumbs: { name: string; href?: string }[];
}) {
  return (
    <section className="page-banner">
      <img src="/mortons/crawfish-boil.jpg" alt="" className="page-banner-media hero-ken" />
      <div className="hero-stage relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h1 className="hero-in hero-in-2 hero-title font-display text-4xl font-bold text-snow sm:text-5xl">{title}</h1>
        <nav className="hero-in hero-in-3 mt-4 flex flex-wrap items-center gap-2 text-sm text-snow/80">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.name} className="inline-flex items-center gap-2">
              <span className="text-snow/40">/</span>
              {c.href ? (
                <a href={c.href} className="transition-colors hover:text-primary">
                  {c.name}
                </a>
              ) : (
                <span className="text-snow">{c.name}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
