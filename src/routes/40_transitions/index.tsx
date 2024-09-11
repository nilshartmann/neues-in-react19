import { createFileRoute } from "@tanstack/react-router";
import { useOptimistic, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { longRunningOperation } from "../../demo-utils.ts";

export const Route = createFileRoute("/40_transitions/")({
  component: Wrapper,
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

// todo
// - LikesWidget
// - Wrapper mit <ErrorBoundary />

function Wrapper() {
  return (
    <ErrorBoundary fallback={<h1>Fehler!</h1>}>
      <LikeWidget />
    </ErrorBoundary>
  );
}

function LikeWidget() {
  const [likes, setLikes] = useState(0);
  // const [isPending, setIsPending] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes);

  const handleLikeClick = () => {
    startTransition(async () => {
      setOptimisticLikes(likes + 1);
      const newLikes = await incrementLike();
      setLikes(newLikes);
    });
    // setIsPending(true);
    //
    // incrementLike().then((newLikes) => {
    //   setLikes(newLikes);
    //   setIsPending(false);
    // });
  };

  return (
    <div>
      <button disabled={isPending} onClick={handleLikeClick}>
        {optimisticLikes} Like (current: {likes})
      </button>
      {isPending && <div>Liking...</div>}
    </div>
  );
}
