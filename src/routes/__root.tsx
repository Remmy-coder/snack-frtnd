import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "~/components/ui/button";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <nav className="p-2 flex gap-12 text-lg mx-5 mt-2 bg-secondary">
        <h3>Logo</h3>
        <Link to="/about" activeProps={{ className: "font-bold" }}>
          About
        </Link>
        <Link to="/about" activeProps={{ className: "font-bold" }}>
          How it works
        </Link>
        <div className="ml-auto flex gap-2">
          <Button variant="secondary">Register</Button>
          <Button>Login</Button>
        </div>{" "}
      </nav>{" "}
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
