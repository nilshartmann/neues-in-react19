import { createFileRoute } from "@tanstack/react-router";
import { useActionState } from "react";

import { longRunningOperation } from "../../demo-utils.ts";

export const Route = createFileRoute("/50_formulare/")({
  component: ContactForm,
});

type FormState = {
  error?: string;
  msg?: string;
};

async function addContact(
  prevState: FormState | null,
  formData: FormData,
): Promise<FormState | null> {
  const contactData = Object.fromEntries(formData);

  await longRunningOperation("...", 2000);

  if (!contactData.firstname) {
    return {
      error: "Fehler!",
    };
  }

  // todo: longRunningOperation
  // wenn firstname nicht gesetzt, error zurück
  // ansonsten msg

  return {
    msg: "Speichern hat geklappt.",
  };
}

function ContactForm() {
  const [state, submit, isPending] = useActionState(addContact, null);

  // todo useActionState mit addContact und null
  //  - form action angeben
  // - state?.error
  // - state?.message
  // - isPending
  return (
    <form action={submit} className={"flex max-w-48 flex-col space-y-4"}>
      <label>Firstname:</label>
      <input name={"firstname"} />
      <label>Lastname:</label>
      <input name={"lastname"} />

      <button type="submit">Add</button>
      {isPending && "Speichern...."}
      {state?.msg && "Speichern hat geklappt"}
      {state?.error && "Speicher hat nicht geklappt: " + state?.error}
    </form>
  );
}
