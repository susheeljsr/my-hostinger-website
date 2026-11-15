import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact · Susheel Kumar, Senior HR Professional" }],
  }),
  component: ContactPage,
});
