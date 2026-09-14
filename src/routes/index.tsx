import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone } from "@phosphor-icons/react";
import { FaqList } from "@/components/faq-list";
import { GoogleBadge } from "@/components/google-badge";
import { HomeHero } from "@/components/home-hero";
import { InternalLinks } from "@/components/internal-links";
import { LeadForm } from "@/components/lead-form";
import { SiteShell } from "@/components/site-shell";
import { YelpGrid } from "@/components/yelp-grid";
import {
  AREAS,
  DRINK_SPECIALS,
  FAQS,
  FOOD_SPECIALS,
  HOURS,
  LANDMARK,
  MAPS_HREF,
  MENU,
  MOTTO,
  NAP,
  OWNER,
  SPECIAL_CARDS,
  STEPS,
} from "@/lib/mortons";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: seoHead,
  component: Home,
});

function Home() {
  return (
    <SiteShell active="Home">
      <HomeHero />
      <AboutBlock />
      <ShopBlock />
      <PromoBlock />
      <FreshBlock />
      <WorksBlock />
      <SpecialsBlock />
      <CypressBlock />
      <VisitBlock />
      <ReviewsBlock />
      <ReserveBlock />
      <FaqBlock />
      <InternalLinks />
    </SiteShell>
  );
}

function AboutBlock() {
  return (
    <section id="about" className="ms-about">
      <div className="ms-wrap ms-about-grid">
        <figure className="ms-about-photo">
          <img
            src="/mortons/building.jpg"
            alt="Morton's Seafood Restaurant & Bar, a Madisonville seafood restaurant at 702 Water Street"
            width={1200}
            height={900}
          />
          <img className="ms-herb" src="/mortons/oysters.png" alt="" width={220} height={180} />
        </figure>
        <div>
          <p className="ms-script">About the house</p>
          <h2>A Madisonville seafood restaurant since 1985.</h2>
          <p>
            Welcome to Morton's Seafood Restaurant & Bar, on the Tchefuncte River in Madisonville, Louisiana.
            Morton Davis opened the doors in 1985. {OWNER.name} helped him, became a partner in 1991, and purchased
            the restaurant in 2000 when Morton retired from the industry. In 2006 she was elected president of the
            Louisiana Restaurant Association. The house still reads as a family room on Water Street, not a chain
            steakhouse with the same name.
          </p>
          <p>
            The walls hold customers' award-winning catches — mako shark teeth, a swordfish, twelve-points and
            mallards. Local flair is the point. Dine-in, to-go, or picnic on the river. Boats pull up in front of the
            building. Staff work fishing rodeos and charity nights in St. Tammany Parish. This Madisonville seafood
            restaurant is the Water Street room people mean when they say they are going to Morton's — not Morton's
            The Steakhouse.
          </p>
          <ul className="ms-checks">
            <li>
              <Check weight="bold" /> Est. 1985 on Water Street
            </li>
            <li>
              <Check weight="bold" /> Dawn Davis, owner since 2000
            </li>
            <li>
              <Check weight="bold" /> Boat dock at the door
            </li>
            <li>
              <Check weight="bold" /> Cypress Room for seventy
            </li>
          </ul>
          <a href="/#reserve" className="ms-btn">
            Learn more <ArrowRight className="size-4" weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ShopBlock() {
  return (
    <section id="menu" className="ms-shop">
      <div className="ms-wrap">
        <header className="ms-center">
          <p className="ms-script">Explore now</p>
          <h2>Shop by the board</h2>
          <p>
            Official board at Morton's: boiled seafood, oysters, seafood boats, po-boys, gumbo and bisque,
            catch from the grill, and the rest of the printed menu. Prices move with the boats and the boil.
            This page does not invent a dollar list. Write the desk if you need a table for crawfish in season,
            Monday oysters, or a po-boy to go. Seafood boats are a hollowed loaf over-stuffed with shrimp or
            oysters, fries, and house salad. Po-boys run shrimp, oyster, catfish, and soft-shell on French bread.
            Catch of the day is grilled or fried, and it moves. Kids and desserts stay on the printed board
            inside — this homepage does not guess those plates.
          </p>
        </header>
        <ul className="ms-cats">
          {MENU.map((m) => (
            <li key={m.slug}>
              <a href="/#reserve">
                <img src={m.img} alt={m.imgAlt} width={280} height={280} loading="lazy" />
                <b>{m.name}</b>
                <span>{m.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PromoBlock() {
  return (
    <section className="ms-promo">
      <div className="ms-wrap ms-promo-grid">
        <div className="ms-promo-copy">
          <div className="ms-badge" aria-hidden="true">
            <div>
              <small>Only</small>
              <strong>$4</strong>
              <em>martinis · Mon</em>
            </div>
          </div>
          <p className="ms-script">Posted Monday</p>
          <h2>Half-price oysters on our half shell.</h2>
          <p>
            Morton's writes the Monday night in plain language: half-price oysters and $4 house martinis. Thursday
            is half-price boiled shrimp and $5 Bloody Marys. Friday cuts bottles of wine in half. Saturday pours a $5
            Orange Crush. Sunday is a $6 classic mimosa. Weekday happy hour, 3–6pm, is half-price draft and bottle
            beer and house wine. Those are the numbers on the shop's own specials page — not a made-up sale.
          </p>
          <a href="/#reserve" className="ms-btn">
            Discover now
          </a>
        </div>
        <figure className="ms-promo-photo">
          <img
            src="/mortons/grilled-oysters.jpg"
            alt="Twisted chargrilled oysters, the Monday half-price oyster night at Morton's Seafood"
            width={1100}
            height={800}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

function FreshBlock() {
  return (
    <section className="ms-fresh">
      <img className="ms-herb ms-herb-a" src="/mortons/crawfish.png" alt="" />
      <img className="ms-herb ms-herb-b" src="/mortons/shrimp.png" alt="" />
      <div className="ms-wrap ms-fresh-inner">
        <p className="ms-script is-light">Naturally local, in season</p>
        <h2>Fresh & local seafood</h2>
        <p>
          {MOTTO}. Catch of the day. Specialty martinis. Morton's Seafood is a Madisonville seafood restaurant, not
          a New Orleans tourist copy. The board is in-season: crawfish when the sign flashes, Lake Pontchartrain
          crabs, raw oysters, chargrilled oysters, gumbo, bisque, and po-boys. Ask the floor what came off the boats.
        </p>
        <a href="/#reserve" className="ms-btn">
          Discover now
        </a>
      </div>
    </section>
  );
}

function WorksBlock() {
  return (
    <section className="ms-works">
      <div className="ms-wrap">
        <div className="ms-works-head">
          <div>
            <p className="ms-script">How it works</p>
            <h2>Hot boiled seafood on your schedule.</h2>
            <p>
              Morton's does not run a delivery cart from this page. You call, you write the form, or you pull the
              boat in. The Water Street floor confirms the table. Cypress Room parties of seventy need a conversation,
              not a checkout button.
            </p>
          </div>
          <div className="ms-orbit" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="ms-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <g className="ms-orbit-spin">
                <text>
                  <textPath href="#ms-circle">
                    HOT BOILED SEAFOOD · CATCH OF THE DAY · SPECIALTY MARTINIS ·{" "}
                  </textPath>
                </text>
              </g>
            </svg>
            <img src="/mortons/crawfish.png" alt="" />
          </div>
        </div>
        <ol className="ms-steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <b>{s.n}</b>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SpecialsBlock() {
  return (
    <section id="specials" className="ms-specials">
      <div className="ms-wrap">
        <header className="ms-center">
          <p className="ms-script">Posted nights</p>
          <h2>Posted nights. Real numbers.</h2>
          <p>
            These four cards are the nights Morton's publishes. Half-price oysters and boiled shrimp are dine-in.
            Drinks match the same page. If Facebook posts a holiday change, the floor wins. This Madisonville seafood
            restaurant does not keep a fake coupon book.
          </p>
        </header>
        <ul className="ms-cards">
          {SPECIAL_CARDS.map((s) => (
            <li key={s.day}>
              <a href="/#reserve">
                <img src={s.img} alt={s.imgAlt} width={600} height={450} loading="lazy" />
                <div>
                  <small>{s.day}</small>
                  <b>{s.title}</b>
                  <span>{s.deal}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="ms-promo-grid ms-boards">
          <div>
            <p className="ms-script">Drink board</p>
            <ul className="ms-board">
              {DRINK_SPECIALS.map((s) => (
                <li key={s.day}>
                  <strong>{s.day}</strong>
                  <span>{s.deal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ms-script">Food board</p>
            <ul className="ms-board">
              {FOOD_SPECIALS.map((s) => (
                <li key={s.day}>
                  <strong>{s.day}</strong>
                  <span>{s.deal}</span>
                </li>
              ))}
            </ul>
            <p className="ms-fine">
              Half-price oysters and boiled shrimp are the nights the shop writes on its site. Ask the floor for
              anything else. Sunday mimosa and Saturday Orange Crush stay on the drink list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CypressBlock() {
  return (
    <section id="cypress" className="ms-cypress">
      <div className="ms-wrap ms-cypress-grid">
        <div>
          <p className="ms-script">Private water</p>
          <h2>Reserve our Cypress Room</h2>
          <p>
            Enjoy the Cypress Room for the next party. Overlooking the water, it can accommodate up to seventy
            people. Reunions, fishing-rodeo dinners, and Northshore birthday nights use this room because it sits on
            the Tchefuncte, not a banquet hall off the interstate. Call {NAP.phone} or send the form. This page does
            not run a deposit cart.
          </p>
          <p>
            Tell the desk the headcount, the night, and whether the boat is coming in. Dawn's floor will say if the
            Cypress Room is free. Seventy is the published cap. A Madisonville seafood restaurant this size does not
            pretend it is a downtown ballroom.
          </p>
          <a href="/#reserve" className="ms-btn">
            Reserve now
          </a>
        </div>
        <figure>
          <img
            src="/mortons/building-dusk.jpg"
            alt="Morton's Seafood at dusk on Water Street, home of the Cypress Room"
            width={1200}
            height={800}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

function VisitBlock() {
  return (
    <section id="visit" className="ms-visit">
      <div className="ms-wrap ms-visit-grid">
        <div>
          <p className="ms-script">Visit</p>
          <h2>702 Water Street, Madisonville.</h2>
          <p>
            Morton's Seafood Restaurant & Bar is the Water Street room on the Tchefuncte. {LANDMARK} There is
            not a second published address. {AREAS.join(", ")} are the towns around this dock — not a statewide
            franchise. If a map pin still shows an older listing, use 702 Water St, Madisonville, LA 70447.
          </p>
          <p>
            Hours on the shop's contact page: Thursday through Monday 11:00am–9:00pm. Tuesday and Wednesday closed.
            Older listings that open Tuesday are out of date next to that page. A holiday week can move; Facebook and
            the phone are the live board. This Madisonville seafood restaurant keeps a short week on purpose — the
            boil and the oyster nights sit on the days the house is actually open. Come for Monday oysters, stay for
            the $4 house martini, and leave room for gumbo. The flashing boil sign is seasonal. If crawfish is off the
            board, the shrimp, crabs, and oysters still run. Ask before you trail a cooler for a picnic on the
            Tchefuncte; to-go is welcome, and the river bank in front of 702 Water St is the picnic the about page
            already describes.
          </p>
          <ul className="ms-hours">
            {HOURS.map((h) => (
              <li key={h.days}>
                <span>{h.days}</span>
                <strong>{h.time}</strong>
              </li>
            ))}
          </ul>
          <div className="ms-actions">
            <a className="ms-btn" href="/#reserve">
              <MapPin className="size-4" weight="fill" />
              Reserve for pickup
            </a>
            <a className="ms-btn ms-btn-ghost" href="/#reserve">
              <Phone className="size-4" weight="fill" />
              Request a table
            </a>
          </div>
          <GoogleBadge />
        </div>
        <aside className="ms-map">
          <a href={MAPS_HREF} rel="noreferrer" target="_blank">
            <img
              src="/mortons/map.jpg"
              alt="Map of Morton's Seafood at 702 Water Street on the Tchefuncte River in Madisonville, Louisiana"
              width={1100}
              height={1308}
              loading="lazy"
            />
            <span>
              <MapPin className="size-4" weight="fill" />
              Open in Google Maps
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}

function ReviewsBlock() {
  return (
    <section id="reviews" className="ms-reviews">
      <div className="ms-wrap">
        <header className="ms-center">
          <p className="ms-script">Loved your experience?</p>
          <h2>Named Yelp notes from the Water Street room</h2>
          <p>
            Quotes keep the names they were published under on Yelp. The 3.4 from 199 is Yelp’s own count — this
            Madisonville seafood restaurant does not invent a star aggregate. Read the listing yourself. Regulars talk
            about gumbo, raw oysters, and the Tchefuncte. Monday oyster night shows up in the notes because the shop
            actually posts it.
          </p>
        </header>
        <YelpGrid />
      </div>
    </section>
  );
}

function ReserveBlock() {
  return (
    <section id="reserve" className="ms-reserve">
      <div className="ms-wrap ms-reserve-grid">
        <div>
          <p className="ms-script">Reserve</p>
          <h2>Write the table. The floor confirms.</h2>
          <p>
            The form is a callback request. Morton's Seafood does not take a card on this page. Call {NAP.phone} if
            you already know the night — Monday oysters, Thursday shrimp, or a Cypress Room of seventy. A
            Madisonville seafood restaurant on the Tchefuncte does not need a cart. It needs a name, a phone, and
            Water Street.
          </p>
          <p>
            {MOTTO}. Boats at the door. Po-boys on French bread. Catch of the day when the board says so. If you are
            coming from Mandeville, Covington, or Abita Springs, leave time for the Highway 22 bridge. The house
            closes Tuesday and Wednesday. Write us before you trail the boat on a dark week.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function FaqBlock() {
  return (
    <section id="faq" className="ms-faq">
      <div className="ms-wrap ms-faq-grid">
        <div>
          <p className="ms-script">FAQ</p>
          <h2>Before you pull into Water Street.</h2>
          <p>
            Hours and specials move on Facebook. If a holiday week looks quiet, check Morton's Seafood Restaurant in
            Madisonville — not Morton's The Steakhouse. The Cypress Room, the boat dock, and the boil sign are the
            three questions the desk hears most. A Madisonville seafood restaurant this old answers them the same
            way: call {NAP.phone}, or use the form so the floor can call you back.
          </p>
        </div>
        <FaqList items={FAQS} />
      </div>
    </section>
  );
}
