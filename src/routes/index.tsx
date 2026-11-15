import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site";

export const Route = createFileRoute("/")({
  component: HomePage,
});
