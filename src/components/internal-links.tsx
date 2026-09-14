import { MENU, SOCIAL } from "@/lib/mortons";

export function InternalLinks() {
  return (
    <nav aria-label="On this page" className="ms-links">
      <div className="ms-wrap ms-links-grid">
        <div>
          <p className="ms-kicker">The house</p>
          <ul>
            <li>
              <a href="/#reserve">Madisonville seafood restaurant</a>
            </li>
            <li>
              <a href="/#reserve">Tchefuncte River dining</a>
            </li>
            <li>
              <a href="/#reviews">Reviews</a>
            </li>
            <li>
              <a href="/#reserve">Cypress Room</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="ms-kicker">The board</p>
          <ul>
            {MENU.map((s) => (
              <li key={s.slug}>
                <a href="/#reserve">{s.name} in Madisonville</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="ms-kicker">Water Street</p>
          <ul>
            <li>
              <a href="/#reserve">702 Water St</a>
            </li>
            <li>
              <a href="/#visit">Hours</a>
            </li>
            <li>
              <a href={SOCIAL[0].href} rel="noreferrer" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href={SOCIAL[1].href} rel="noreferrer" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
