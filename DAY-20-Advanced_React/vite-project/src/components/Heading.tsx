import { type ReactNode } from "react"

interface HeadingProps {
  title: string
  counter: number
  children: ReactNode
}

function Heading({ children }: HeadingProps) {
  return <div>{children}</div>
}

export default Heading
