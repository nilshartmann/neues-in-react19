import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a/')({
  component: () => <div>Hello /a/!</div>
})