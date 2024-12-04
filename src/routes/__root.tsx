import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useMatch,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "~/components/ui/button";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const registerMatch = useMatch({ from: "/register", shouldThrow: false });
  const loginMatch = useMatch({ from: "/login", shouldThrow: false });
  return (
    <>
      {!registerMatch && !loginMatch && (
        <>
          <nav className="p-2 flex gap-12 text-lg mx-5 mt-2">
            <h3>Logo</h3>
            <a href="#about">About</a>
            <Link to="/about" activeProps={{ className: "font-bold" }}>
              How it works
            </Link>
            <div className="ml-auto flex gap-2">
              <Link to="/register">
                <Button variant="green" className="rounded-none">
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="greenOutline" className="rounded-none">
                  Login
                </Button>
              </Link>
            </div>{" "}
          </nav>
          <hr />
        </>
      )}
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
