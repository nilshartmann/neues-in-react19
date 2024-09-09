import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { longRunningOperation } from "../../demo-utils.ts";

export const Route = createFileRoute("/27promise_rendern_exotisch/")({
  component: PromiseExample,
  loader: () => {
    console.log("Start fetching page data");
    return {
      result: longRunningOperation("Lorem ipsum dolor sit amit", 2000).then(
        (result) => {
          console.log("End fetching page data");
          return result;
        },
      ),
    } as const;
  },
});

function PromiseExample() {
  //                                     v--- Promise aus loader-Funktion von TS Router
  const promise = Route.useLoaderData().result;
  const result = promise.then((data) => <div>Loader Data: {data}</div>);

  return (
    <Suspense fallback={"Waiting for React 19 to be published 🥱"}>
      {result}
    </Suspense>
  );
}
