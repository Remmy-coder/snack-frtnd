import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

const registerSchema = z.object({});

function RouteComponent() {
  return <div></div>;
}
