import { createFileRoute } from "@tanstack/react-router";
import { Suspense, useState } from "react";

import { longRunningOperation } from "../../demo-utils.ts";

function loadPageData() {
  console.log("Start fetching page data");

  return longRunningOperation("Lorem ipsum dolor sit amit", 5000).then(
    (result) => {
      console.log("End fetching page data");
      return result;
    },
  );
}

export const Route = createFileRoute("/15use_promise_conditional/")({
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
  const [showData, setShowData] = useState(false);
  console.log("Start Rendering use-Example");
  const loaderData = Route.useLoaderData();

  return (
    <div>
      <button onClick={() => setShowData(true)}>Show data!</button>
      {showData ? <p>Page Data: TODO LADEN!</p> : null}
    </div>
  );
}
