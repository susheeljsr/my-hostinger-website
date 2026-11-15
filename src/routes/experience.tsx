import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [{ title: "Professional Experience · Susheel Kumar, Future CHRO, XLRI" }],
  }),
  component: ExperiencePage,
});
