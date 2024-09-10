import { createFileRoute } from "@tanstack/react-router";

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

  // todo: longRunningOperation
  // wenn firstname nicht gesetzt, error zurück
  // ansonsten msg

  return null;
}

function ContactForm() {
  // todo useActionState mit addContact und null
  //  - form action angeben
  // - state?.error
  // - state?.message
  // - isPending
  return (
    <form className={"flex max-w-48 flex-col space-y-4"}>
      <label>Firstname:</label>
      <input name={"firstname"} />
      <label>Lastname:</label>
      <input name={"lastname"} />

      <button type="submit">Add</button>
    </form>
  );
}
