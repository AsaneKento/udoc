import type { ReactElement, ReactNode } from "react"
import type { Metadata } from "next"
import "~/style/globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps): ReactElement {
  return (
    <html lang={"ja"}>
      <body>{children}</body>
    </html>
  )
}
