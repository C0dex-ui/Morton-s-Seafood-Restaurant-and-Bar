import { SITE_SHORT, YELP_REVIEWS, YELP_QUOTES } from "@/lib/mortons";
import { YelpBurst, YelpStars } from "@/components/yelp-badge";

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function YelpGrid() {
  return (
    <div className="ms-ti" data-layout="grid">
      <header className="ms-ti-head">
        <div className="ms-ti-brand">
          <YelpBurst className="ms-y-mark is-lg" />
          <div>
            <p className="ms-ti-source">Yelp reviews</p>
            <p className="ms-ti-name">{SITE_SHORT}</p>
          </div>
        </div>
        <div className="ms-ti-score">
          <div className="ms-ti-rating">
            <b>{YELP_REVIEWS.rating}</b>
            <YelpStars rating={Number(YELP_REVIEWS.rating)} />
          </div>
          <span>Based on {YELP_REVIEWS.count} Yelp reviews</span>
        </div>
        <a className="ms-ti-write" href={YELP_REVIEWS.href} rel="noreferrer" target="_blank">
          Write a review
        </a>
      </header>
      <div className="ms-ti-cards">
        {YELP_QUOTES.map((r) => (
          <article key={r.name} className="ms-ti-card">
            <header>
              <span className="ms-ti-av" aria-hidden="true">
                {initials(r.name)}
              </span>
              <div>
                <b>{r.name}</b>
                <time>{r.when}</time>
              </div>
              <YelpBurst className="ms-y-mark is-sm" />
            </header>
            <p>“{r.quote}”</p>
            <small>Posted on Yelp</small>
          </article>
        ))}
      </div>
      <footer className="ms-ti-foot">
        <a href={YELP_REVIEWS.href} rel="noreferrer" target="_blank">
          Review us on Yelp
        </a>
        <span>Named quotes · {YELP_REVIEWS.rating} from {YELP_REVIEWS.count}</span>
      </footer>
    </div>
  );
}
