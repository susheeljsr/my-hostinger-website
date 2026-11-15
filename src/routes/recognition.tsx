import { createFileRoute } from "@tanstack/react-router";
import { RecognitionPage } from "@/components/site";

export const Route = createFileRoute("/recognition")({
  head: () => ({
    meta: [{ title: "Recognition · Susheel Kumar, Global HR Icon" }],
  }),
  component: RecognitionPage,
});
