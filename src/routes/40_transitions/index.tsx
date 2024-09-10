import { createFileRoute } from "@tanstack/react-router";
import { useOptimistic, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { longRunningOperation } from "../../demo-utils.ts";

export const Route = createFileRoute("/40_transitions/")({
  component: LikeWidgetWrapper,
});

let likes = 0;

async function incrementLike() {
  // Im echten Leben: fetch-Call o.ä.
  if (likes > 5) {
    throw new Error("Too many likes");
  }
  likes = await longRunningOperation(likes + 1, 3000);
  return likes;
}

function LikeWidgetWrapper() {
  return (
    <ErrorBoundary fallback={<h1>Did not work</h1>}>
      <LikeWidget />
    </ErrorBoundary>
  );
}

function LikeWidget() {
  const [likes, setLikes] = useState(0);
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);
  const [isPending, startTransition] = useTransition();

  const handleStart = () => {
    startTransition(async () => {
      setOptimisticLikes(likes + 1);
      const newLikes = await incrementLike();
      setLikes(newLikes);
    });
  };

  return (
    <div>
      {isPending && "Liking..."}
      <button disabled={isPending} onClick={handleStart}>
        {optimisticLikes} Like
      </button>
    </div>
  );
}
