import { Link } from "@tanstack/react-router";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-muted">
      <ol className="flex flex-wrap gap-1">
        {all.map((item, i) => (
          <li key={`${item.name}-${i}`} className="flex items-center gap-1">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {item.href && i < all.length - 1 ? (
              <Link to={item.href} className="underline decoration-line underline-offset-2 hover:text-teal">
                {item.name}
              </Link>
            ) : (
              <span className="text-ink">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
