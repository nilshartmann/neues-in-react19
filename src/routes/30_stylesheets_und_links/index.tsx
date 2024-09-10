import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/30_stylesheets_und_links/")({
  component: EmbedCss,
});

// TODO: nur zeigen, funktioniert nicht :/

function EmbedCss() {
  return (
    // Funktioniert hier nicht wie beschrieben:
    //  - Darstellung "flackert"
    //  - Fallback wird nicht angezeigt
    //  - JS-Code wird gar nicht ausgeführt
    <Suspense fallback={"Loading Custom CSS..."}>
      <link rel="stylesheet" href="/css/changelog.css" />
      <link rel="script" href="/js/hello-world.js" />
      <script>console.log("MOIN")</script>

      <div className={"Changelog"}>Changelog with custom styling.</div>
    </Suspense>
  );
}
