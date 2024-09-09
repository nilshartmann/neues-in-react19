import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const className = "cursor-pointer underline text-violet-800";
  return (
    <React.Fragment>
      <div
        className={"font-inter container mx-auto mt-8 flex flex-col gap-y-8"}
      >
        <nav
          className={
            "flex items-center gap-x-5 rounded-md bg-slate-200 p-4 font-medium text-violet-950"
          }
        >
          <div className={"text-2xl font-bold"}>React 19-RC</div>
          <Link
            to={"/10suspense"}
            className={"cursor-pointer hover:text-violet-800 hover:underline"}
            activeProps={{
              className,
            }}
          >
            Suspense
          </Link>
          <Link
            to={"/12use_promise"}
            className={"cursor-pointer hover:text-violet-800 hover:underline"}
            activeProps={{
              className,
            }}
          >
            use (Suspense)
          </Link>

          <Link
            to={"/15use_promise_conditional"}
            className={"cursor-pointer hover:text-violet-800 hover:underline"}
            activeProps={{
              className,
            }}
          >
            use (Suspense) Conditional
          </Link>

          <Link
            to={"/20_use_context"}
            className={"cursor-pointer hover:text-violet-800 hover:underline"}
            activeProps={{
              className,
            }}
          >
            use Context
          </Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
}
