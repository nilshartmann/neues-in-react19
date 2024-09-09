import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div className={"font-inter container mx-auto"}>
        <nav className={"border-b-slate-400 p-4"}>
          <Link to={"/title"}>Title</Link>
        </nav>
        <Outlet />
      </div>
    </React.Fragment>
  ),
});
