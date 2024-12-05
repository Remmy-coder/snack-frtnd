import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useMatch,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "~/components/ui/button";
import { UserRoundCheck } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const registerMatch = useMatch({ from: "/register", shouldThrow: false });
  const loginMatch = useMatch({ from: "/login", shouldThrow: false });

  const token = localStorage.getItem("access_token");
  const surname = localStorage.getItem("client_surname");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("client_surname");
    window.location.reload();
  };
  return (
    <>
      {!registerMatch && !loginMatch && (
        <>
          <nav className="p-2 flex gap-12 text-lg mx-5 mt-2">
            <h3>Logo</h3>
            <a href="#about">About</a>
            <a href="#how">How it works</a>
            {token ? (
              <div className="ml-auto flex gap-2">
                <UserRoundCheck className="text-green-700" />
                <small className="capitalize mt-1 mr-8">{surname}</small>
                <Button
                  size="sm"
                  variant="greenOutline"
                  className="rounded-none"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
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
              </div>
            )}
          </nav>
          <hr />
        </>
      )}
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
