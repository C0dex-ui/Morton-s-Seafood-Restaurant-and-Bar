import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

function onScreen(el: HTMLElement, pad = 80) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 800;
  return r.height > 0 && r.width > 0 && r.bottom > -pad && r.top < vh + pad;
}

function supportsViewTimeline() {
  try {
    return CSS.supports("animation-timeline: view()") || CSS.supports("animation-timeline", "view()");
  } catch {
    return false;
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "flip" | "left" | "section";
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [on, setOn] = useState(false);
  const [view, setView] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }

    if (supportsViewTimeline()) {
      setView(true);
      setArmed(true);
      setOn(true);
      return;
    }

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setOn(true);
    };

    setArmed(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    const kick = () => {
      if (onScreen(el)) show();
    };
    const raf = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(kick);
    });
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);

    const safety = window.setTimeout(kick, 1800);

    return () => {
      io.disconnect();
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      window.clearTimeout(safety);
    };
  }, []);

  const cls =
    variant === "section"
      ? "reveal-section"
      : variant === "flip"
        ? "reveal-flip"
        : variant === "left"
          ? "reveal-left"
          : "reveal-3d";

  return (
    <div
      ref={ref}
      className={cn(cls, stagger && "reveal-stagger", armed && "reveal-armed", view && "reveal-view", on && "is-in", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
