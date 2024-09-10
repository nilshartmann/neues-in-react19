import { createFileRoute } from "@tanstack/react-router";

import { longRunningOperation } from "../../demo-utils.ts";

function loadPageData() {
  console.log("Start fetching page data");

  return longRunningOperation("Lorem ipsum dolor sit amit", 2000).then(
    (result) => {
      console.log("End fetching page data");
      return result;
    },
  );
}

export const Route = createFileRoute("/12use_promise/")({
  component: UseExample,
  loader: () => {
    return {
      resultPromise: loadPageData(),
    };
  },
});

// todo:
//   - Route.useLoaderData verwenden
//   - auf resultPromise warten
//   - Ergebnis ausgeben
//   - Wrapper-Komponente mit Suspense

//
function UseExample() {
  console.log("Start Rendering use-Example");

  const loaderData = null;
  console.log("Data from loader", loaderData);

  const result = null;
  console.log("Loader Data Recived", result);

  return (
    <div>
      <p>Page Data: {result}</p>
    </div>
  );
}
