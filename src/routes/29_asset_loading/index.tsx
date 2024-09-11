import { createFileRoute } from "@tanstack/react-router";
import { preload } from "react-dom";

export const Route = createFileRoute("/29_asset_loading/")({
  component: Assets,
});

function Assets() {
  // todo :mit preinit laden /css/custom-bg.css  as: "style"

  return (
    <div>
      <button onClick={() => preload("/css/custom-bg.css", { as: "style" })}>
        Change Background
      </button>
    </div>
  );
}
