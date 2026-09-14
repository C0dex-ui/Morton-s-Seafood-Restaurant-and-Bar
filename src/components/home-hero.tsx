import { ArrowRight } from "@phosphor-icons/react";
import { YelpBadge } from "@/components/yelp-badge";
import { HOURS_SHORT, MOTTO, NAP } from "@/lib/mortons";

export function HomeHero() {
  return (
    <section id="top" className="ms-hero">
      <div className="ms-wrap ms-hero-grid">
        <div className="ms-hero-copy">
          <p className="ms-script">We serve {MOTTO.toLowerCase()}</p>
          <h1>
            Best seafood
            <br />
            on the Tchefuncte
          </h1>
          <p className="ms-lead">
            Morton's Seafood Restaurant & Bar is a Madisonville seafood restaurant at 702 Water St on the
            Tchefuncte River. Catch of the day, specialty martinis, and local in-season seafood since 1985. Call{" "}
            {NAP.phone}. {HOURS_SHORT}.
          </p>
          <div className="ms-actions">
            <a href="/#reserve" className="ms-btn">
              Discover now
            </a>
            <a href="/#about" className="ms-btn ms-btn-ghost">
              Learn more <ArrowRight className="size-4" weight="bold" />
            </a>
          </div>
          <YelpBadge />
        </div>
        <div className="ms-hero-art">
          <img
            className="ms-hero-round"
            src="/mortons/crawfish-boil.jpg"
            alt="Hot boiled seafood with corn, potatoes, and crawfish at Morton's Seafood Madisonville"
            width={720}
            height={720}
            fetchPriority="high"
          />
          <img className="ms-herb ms-herb-a" src="/mortons/crawfish.png" alt="" width={180} height={150} />
          <img className="ms-herb ms-herb-b" src="/mortons/shrimp.png" alt="" width={260} height={220} />
        </div>
      </div>
    </section>
  );
}
