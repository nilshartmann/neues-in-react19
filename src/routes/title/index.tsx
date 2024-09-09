import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/title/")({
  component: About,
});

function About() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <h1>About</h1>
      <title>About this service</title>
      <button onClick={() => setShowDetails(!showDetails)}>Show Details</button>
      {showDetails && <Details />}
    </div>
  );
}

function Details() {
  return (
    <div className={"mt-4"}>
      <title>Service Details</title>
      <h2>Some more details</h2>
    </div>
  );
}
