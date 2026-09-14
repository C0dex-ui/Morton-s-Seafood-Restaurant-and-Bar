import { Clock, MapPin, Phone } from "@phosphor-icons/react";
import { AREAS, HOURS_SHORT, LANDMARK, MENU, MOTTO, NAP, NAV, SITE_LEGAL, SITE_NAME, SOCIAL } from "@/lib/mortons";

export function SiteFooter() {
  return (
    <footer className="ms-foot">
      <div className="ms-wrap ms-foot-grid">
        <div>
          <a href="/#top" className="ms-logo ms-logo-light">
            <img src="/mortons/logo-white.svg" alt="Morton's Seafood" width={220} height={90} />
          </a>
          <p>
            {MOTTO} on the Tchefuncte River since 1985. {SITE_NAME} is Dawn Davis’s house at {NAP.street}, {NAP.city}.
          </p>
        </div>
        <div>
          <p className="ms-foot-h">On this page</p>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="ms-foot-h">The board</p>
          <ul>
            {MENU.map((s) => (
              <li key={s.slug}>
                <a href="/#reserve">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="ms-foot-h">The river</p>
          <p>
            <MapPin className="size-4" weight="fill" /> {NAP.street}, {NAP.city}, {NAP.region} {NAP.postal}
          </p>
          <p>{LANDMARK}</p>
          <p>
            <Phone className="size-4" weight="fill" />
            <a href="/#reserve">{NAP.phone}</a>
          </p>
          <p>
            <Clock className="size-4" /> {HOURS_SHORT}
          </p>
          <p className="ms-foot-areas">{AREAS.join(" · ")}</p>
          <p className="ms-foot-social">
            {SOCIAL.map((s) => (
              <a key={s.href} href={s.href} rel="noreferrer" target="_blank">
                {s.label}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="ms-foot-bar">
        <span>
          © {new Date().getFullYear()} {SITE_LEGAL}
        </span>
        <span>St. Tammany Parish, LA</span>
        <span>
          <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
        </span>
      </div>
    </footer>
  );
}
