import { createFileRoute } from "@tanstack/react-router";
import { preinit } from "react-dom";

export const Route = createFileRoute("/29_asset_loading/")({
  component: Assets,
});

function Assets() {
  // Hier möglich oder als Eventhandler (unten):
  //   preinit("/css/custom-bg.css", { as: "style" });

  return (
    <div>
      <button onClick={() => preinit("/css/custom-bg.css", { as: "style" })}>
        Change Background
      </button>
    </div>
  );
}
