import { GOOGLE_REVIEWS } from "@/lib/mortons";

function Stars() {
  return (
    <span className="ms-g-stars" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24">
          <path d="M12 2.4 14.7 8.4l6.6.9-4.8 4.6 1.2 6.5L12 17.2 6.3 20.4l1.2-6.5L2.7 9.3l6.6-.9z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <svg className="ms-g-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7 12.9 19.6C14.7 15.2 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-1.1 3.2-3.5 5.8-6.6 7.5l.1.1 6.3 5.3C36.9 42.4 44 38 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

export function GoogleBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`ms-g-badge${compact ? " is-compact" : ""}`}
      href={GOOGLE_REVIEWS.href}
      rel="noreferrer"
      target="_blank"
    >
      <GoogleMark />
      <span>
        <b>Google reviews</b>
        <em>Read named notes on Maps</em>
      </span>
    </a>
  );
}

export function GoogleStars() {
  return <Stars />;
}

export function GoogleMarkIcon() {
  return <GoogleMark />;
}
