import { createFileRoute } from "@tanstack/react-router";
import { Suspense, use } from "react";

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
  component: Wrapper,
  loader: () => {
    return {
      resultPromise: loadPageData(),
    };
  },
});

function Wrapper() {
  return (
    <Suspense fallback={"Waiting for Page Data..."}>
      <UseExample />
    </Suspense>
  );
}

//
function UseExample() {
  console.log("Start Rendering use-Example");
  const loaderData = Route.useLoaderData();
  console.log("Data from loader", loaderData);
  const result = use(loaderData.resultPromise);
  console.log("Loader Data Recived", result);

  return (
    <div>
      <p>Page Data: {result}</p>
    </div>
  );
}
