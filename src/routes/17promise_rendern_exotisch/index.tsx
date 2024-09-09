import { createFileRoute } from "@tanstack/react-router";
import { Suspense, useMemo } from "react";

import { longRunningOperation } from "../../demo-utils.ts";

export const Route = createFileRoute("/17promise_rendern_exotisch/")({
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

//
// function UseExample() {
//   console.log("Start Rendering use-Example");
//   const loaderData = Route.useLoaderData();
//   console.log("Data from loader", loaderData);
//   const result = use(loaderData.result);
//   console.log("Loader Data Recived", result);
//
//   return (
//     <div>
//       <p>Page Data: {result}</p>
//     </div>
//   );
// }

function PromiseExample() {
  //                                     v--- Promise aus loader-Funktion von TS Router
  const promise = Route.useLoaderData().result;
  const result = useMemo(
    () => promise.then((data) => <div>Loader Data: {data}</div>),
    [promise],
  );

  return (
    <Suspense fallback={"Waiting for React 19 to be published 🥱"}>
      {result}
    </Suspense>
  );
}
