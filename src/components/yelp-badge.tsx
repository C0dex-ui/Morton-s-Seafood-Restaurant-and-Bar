import { useId } from "react";
import { YELP_REVIEWS } from "@/lib/mortons";

export function YelpBurst({ className = "ms-y-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="#D32323">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 12 12)`}
            d="M12 1.6c1 0 1.85 2.15 1.85 4.25 0 1.7-.83 3.05-1.85 3.05s-1.85-1.35-1.85-3.05c0-2.1.85-4.25 1.85-4.25z"
          />
        ))}
      </g>
    </svg>
  );
}

export function YelpStars({ rating = 3.4 }: { rating?: number }) {
  const uid = useId().replace(/:/g, "");
  const full = Math.floor(rating);
  const frac = rating - full;
  return (
    <span className="ms-y-stars" aria-hidden="true" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2, flexWrap: "nowrap" }}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = i < full ? 1 : i === full ? frac : 0;
        const gid = `${uid}-s${i}`;
        return (
          <svg key={i} viewBox="0 0 24 24">
            <defs>
              <linearGradient id={gid}>
                <stop offset={`${Math.round(fill * 100)}%`} stopColor="#F15C00" />
                <stop offset={`${Math.round(fill * 100)}%`} stopColor="#E6E4E0" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#${gid})`}
              d="M12 2.4 14.7 8.4l6.6.9-4.8 4.6 1.2 6.5L12 17.2 6.3 20.4l1.2-6.5L2.7 9.3l6.6-.9z"
            />
          </svg>
        );
      })}
    </span>
  );
}

export function YelpBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`ms-y-badge${compact ? " is-compact" : ""}`}
      href={YELP_REVIEWS.href}
      rel="noreferrer"
      target="_blank"
    >
      <YelpBurst />
      <span>
        <b>Yelp · {YELP_REVIEWS.rating}</b>
        <em>{YELP_REVIEWS.count} named reviews</em>
      </span>
      <YelpStars rating={Number(YELP_REVIEWS.rating)} />
    </a>
  );
}
