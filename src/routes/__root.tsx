import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const className = "text-violet-100 bg-violet-500 p-3 rounded-md";
  return (
    <React.Fragment>
      <div
        className={"font-inter container mx-auto mt-8 flex flex-col gap-y-8"}
      >
        <nav
          className={
            "flex items-center gap-x-5 rounded-md bg-violet-100 p-4 font-medium text-violet-950"
          }
        >
          <div className={"text-2xl font-bold"}>React 19-RC</div>
          <Link
            to={"/10suspense"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            Suspense Drama
          </Link>
          <Link
            to={"/12use_promise"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            use Suspense
          </Link>

          <Link
            to={"/15use_promise_conditional"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            use Suspense Conditional
          </Link>
          <Link
            to={"/20_use_context"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            use Context
          </Link>

          <Link
            to={"/25_compiler"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            Compiler
          </Link>
          <Link
            to={"/27promise_rendern_exotisch"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            ReactNode als Promise
          </Link>
          <Link
            to={"/29_asset_loading"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            Asset Loading
          </Link>
          <Link
            to={"/30_stylesheets_und_links"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            Scripts und CSS
          </Link>
          <Link
            to={"/32_meta_title"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            Metadata: Title
          </Link>
          <Link
            to={"/40_transitions"}
            className={
              "cursor-pointer rounded-md bg-violet-200 p-3 hover:bg-violet-500 hover:text-violet-100 hover:underline"
            }
            activeProps={{
              className,
            }}
          >
            Transition und optimistische Updates
          </Link>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
}
