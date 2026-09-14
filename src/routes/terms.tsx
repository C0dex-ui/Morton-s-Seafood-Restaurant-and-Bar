import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { NAP, SITE_NAME } from "@/lib/mortons";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: `Terms | ${SITE_NAME}` },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Terms() {
  return (
    <SiteShell active="Pages">
      <article className="ms-wrap ms-legal">
        <h1>Terms of Use</h1>
        <p>
          This website is a homepage for {SITE_NAME} at {NAP.street}, {NAP.city}, {NAP.region} {NAP.postal}.
          Requests stay in your browser until you call {NAP.phone}. The Water Street floor confirms the table.
          Daily specials are posted by the restaurant, not as a permanent price list here.
        </p>
      </article>
    </SiteShell>
  );
}
