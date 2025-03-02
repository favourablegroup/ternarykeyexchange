"use client"

import { cn } from "@/lib/utils"

interface DocCodeBlockProps {
  children: string
  className?: string
}

export function DocCodeBlock({ children, className }: DocCodeBlockProps) {
  return (
    <pre className={cn("text-zinc-50 p-4 rounded-lg overflow-x-auto", className)}>
      <code>{children}</code>
    </pre>
  )
}

