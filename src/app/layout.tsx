import type { ReactElement, ReactNode } from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "~/style/globals.css"

export const metadata: Metadata = {
  title: "Udoc",
  description:
    "エンジニアの技術知識をドキュメントとして共有し、相互に学び合えるプラットフォームです",
}

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <html lang={"ja"} className={inter.className}>
      <body>{children}</body>
    </html>
  )
}

const inter = Inter({ subsets: ["latin"] })
