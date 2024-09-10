import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { longRunningOperation } from "../../demo-utils.ts";

export const Route = createFileRoute("/40_transitions/")({
  component: LikeWidget,
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

function LikeWidget() {
  const [likes, setLikes] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const handleLikeClick = () => {
    setIsPending(true);

    // todo: Transition
    // todo: optimistic

    incrementLike().then((newLikes) => {
      setIsPending(false);
      setLikes(newLikes);
    });
  };

  return (
    <div>
      <button disabled={isPending} onClick={handleLikeClick}>
        {likes} Like
      </button>
      {isPending && <div>Liking...</div>}
    </div>
  );
}
