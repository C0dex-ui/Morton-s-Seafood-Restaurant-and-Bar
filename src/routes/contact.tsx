import { createFileRoute } from "@tanstack/react-router";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => toHome("quote"),
  component: () => null,
});
