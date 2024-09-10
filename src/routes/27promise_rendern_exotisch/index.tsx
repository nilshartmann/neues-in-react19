import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { longRunningOperation } from "../../demo-utils.ts";

export const Route = createFileRoute("/27promise_rendern_exotisch/")({
  component: Changelog,
  loader: () => {
    console.log("Start fetching page data");
    return {
      changelogPromise: longRunningOperation(
        [
          { id: "1", text: "New: Async Server Components" },
          { id: "2", text: "New: useActionState Hook" },
          { id: "3", text: "Improvement: React.Node can be a Promise" },
        ],
        2000,
      ).then((result) => {
        console.log("End fetching page data");
        return result;
      }),
    } as const;
  },
});

function Changelog() {
  const changes = Route.useLoaderData().changelogPromise.then((changelog) => (
    <ul>
      {changelog.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  ));

  return (
    <Suspense fallback={"Waiting for React 19 to be published 🥱"}>
      {changes}
    </Suspense>
  );
}
