import { createFileRoute } from "@tanstack/react-router";
import { TrainingPage } from "@/components/site";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [{ title: "Certification and Training · Susheel Kumar, LL.B." }],
  }),
  component: TrainingPage,
});
