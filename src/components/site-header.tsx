import { useState } from "react";
import { List, MagnifyingGlass, Phone, ShoppingBag, User, X } from "@phosphor-icons/react";
import { NAP, NAV } from "@/lib/mortons";

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="ms-chrome">
      <div className="ms-topbar">
        <div className="ms-wrap ms-topbar-row">
          <span>Tue–Wed closed · Boat dock at the door when the river allows</span>
          <a href="tel:+19858454970">
            <Phone className="size-4" weight="fill" /> Give us a call {NAP.phone}
          </a>
        </div>
      </div>
      <header className={`ms-head ${open ? "is-open" : ""}`}>
        <div className="ms-wrap ms-head-row">
          <a href="/#top" className="ms-logo" aria-current={active === "Home" ? "page" : undefined} onClick={close}>
            <img src="/mortons/logo.svg" alt="Morton's Seafood Restaurant & Bar" width={220} height={90} />
          </a>
          <nav className="ms-nav" aria-label="On this page">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="ms-head-tools">
            <button
              type="button"
              className="ms-icon-btn"
              aria-label="Find the board"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              <MagnifyingGlass className="size-5" />
            </button>
            <a className="ms-icon-btn" href="/#reserve" aria-label="Reserve a table">
              <User className="size-5" />
            </a>
            <a className="ms-icon-btn" href="/#reserve" aria-label="Open the reserve form">
              <ShoppingBag className="size-5" />
              <span className="ms-bag-count">0</span>
            </a>
          </div>
          <button
            type="button"
            className="ms-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" weight="bold" /> : <List className="size-5" weight="bold" />}
          </button>
        </div>
        {open ? (
          <nav className="ms-nav-mobile" aria-label="Mobile">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
            <a href="/#reserve" onClick={close}>
              Reserve a table
            </a>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
