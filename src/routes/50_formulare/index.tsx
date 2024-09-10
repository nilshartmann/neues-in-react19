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

  if (!contactData.firstname) {
    return {
      error: "No firstname!",
    };
  }

  await longRunningOperation("", 2000);

  console.log("contactData", contactData);

  return {
    msg: "Contact saved.",
  };
}

function ContactForm() {
  const [state, submit, isPending] = useActionState(addContact, null);

  return (
    <form action={submit} className={"flex max-w-48 flex-col space-y-4"}>
      <label>Firstname:</label>
      <input name={"firstname"} />
      <label>Lastname:</label>
      <input name={"lastname"} />

      <button type="submit">Add</button>
      {state?.error && <p>Error: {state.error}</p>}
      {state?.msg && <p>{state.msg}</p>}
      {isPending && <p>Contact saving...</p>}
    </form>
  );
}
