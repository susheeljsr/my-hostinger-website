import { createFileRoute } from "@tanstack/react-router";
import { ExpertisePage } from "@/components/site";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [{ title: "Core HR Expertise · Susheel Kumar, East India HR" }],
  }),
  component: ExpertisePage,
});
