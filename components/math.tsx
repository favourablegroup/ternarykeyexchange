"use client"

import { MathJax, MathJaxContext } from "better-react-mathjax"

interface MathProps {
  equation: string
}

export function Math({ equation }: MathProps) {
  return (
    <MathJaxContext>
      <MathJax>{`\\[${equation}\\]`}</MathJax>
    </MathJaxContext>
  )
}

