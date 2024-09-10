import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/29_asset_loading/")({
  component: Assets,
});

function Assets() {
  // todo :mit preinit laden /css/custom-bg.css  as: "style"

  return (
    <div>
      <button>Change Background</button>
    </div>
  );
}
