import type { ReactElement } from "react"
import { Button } from "~/lib/ui/button"

export default function Home(): ReactElement {
  return (
    <main>
      <p className={"font-bold text-3xl text-amber-600"}>Hello World!</p>
      <Button variant={"default"}>Sample</Button>
    </main>
  )
}
