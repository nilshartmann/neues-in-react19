import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/32_meta_css/")({
  component: EmbedCss,
});

function EmbedCss() {
  return (
    <Suspense fallback={"Loading Custom CSS..."}>
      <link rel="stylesheet" href="/css/changelog.css" />
      <link rel="script" href="/js/hello-world.js" />
      <script>console.log("MOIN")</script>

      <div className={"Changelog"}>Changelog with custom styling.</div>
    </Suspense>
  );
}
