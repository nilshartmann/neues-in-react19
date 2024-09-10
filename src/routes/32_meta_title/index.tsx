import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/32_meta_title/")({
  component: MetadataExample,
});

function MetadataExample() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className={"rounded border border-slate-400 p-4"}>
      <h1>Document Meta Data</h1>
      <button onClick={() => setShowAbout(!showAbout)}>
        {showAbout ? "Hide" : "Show"} About
      </button>
      {showAbout && <About />}
    </div>
  );
}

function About() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className={"rounded border border-slate-400 p-4"}>
      {/*todo: title*/}
      {/*todo: meta name=author und content*/}

      <h1>About this service</h1>

      <button onClick={() => setShowContact(!showContact)}>
        {showContact ? "Hide" : "Show"} Contact
      </button>
      {showContact && <Contact />}
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const title = `Hello, ${name}`;
  return (
    <div
      className={
        "flex items-center gap-x-2 rounded border border-slate-400 p-4"
      }
    >
      {/*todo: title*/}
      <label>Contact data:</label>
      <input
        className={"rounded border border-slate-400 p-4"}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
