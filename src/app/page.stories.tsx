import Home from "./page"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
