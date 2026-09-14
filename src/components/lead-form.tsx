import { useState } from "react";
import { NAP, RESERVE_OPTIONS } from "@/lib/mortons";

export function LeadForm({
  variant = "contact",
}: {
  variant?: "contact" | "appointment" | "hero";
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="ms-lead-done">
        Thank you. This form is a callback request, not a paid reservation. Call {NAP.phone} so the Water Street
        floor can confirm the table or the Cypress Room.
      </p>
    );
  }

  return (
    <form
      className="ms-form"
      suppressHydrationWarning
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        <span>Name</span>
        <input className="ms-input" name="name" required autoComplete="name" suppressHydrationWarning />
      </label>
      <label>
        <span>Phone</span>
        <input className="ms-input" name="phone" type="tel" required autoComplete="tel" suppressHydrationWarning />
      </label>
      <label>
        <span>What are you booking</span>
        <select className="ms-input" name="need" defaultValue="" required suppressHydrationWarning>
          <option value="" disabled>
            Table, Cypress Room, or a cup
          </option>
          {RESERVE_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Note</span>
        <textarea
          className="ms-input"
          name="note"
          rows={3}
          placeholder="Party size, boat dock, or a Monday oyster night"
          suppressHydrationWarning
        />
      </label>
      <button type="submit" className="ms-btn">
        {variant === "hero" ? "Discover now" : "Request a callback"}
      </button>
      <p className="ms-lead-hint">The desk confirms at {NAP.phone}. Tuesday and Wednesday stay closed.</p>
    </form>
  );
}
