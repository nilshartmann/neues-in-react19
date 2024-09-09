import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { useFetchMyData } from "../../demo-utils.ts";

export const Route = createFileRoute("/10suspense/")({
  component: SuspenseExample,
});

function SuspenseExample() {
  const [showInfos, setShowInfos] = useState(false);

  return (
    <div>
      <button onClick={() => setShowInfos(true)}>Load data</button>
      {showInfos && (
        <Suspense fallback={"Loading User and Profile..."}>
          <User />
          <Profile />
        </Suspense>
      )}
    </div>
  );
}

function User() {
  const { data } = useFetchMyData("user", 2000);
  return <p>User: {data}</p>;
}

function Profile() {
  const { data } = useFetchMyData("profile", 1000);
  return <p>Profile: {data}</p>;
}
