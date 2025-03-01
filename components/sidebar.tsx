"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Introduction" },
  { href: "/roadmap", label: "Project Roadmap" },
  { href: "/designing-ternary-key-exchange", label: "Designing Ternary Key Exchange" },
  { href: "/tdh", label: "Ternary Diffie-Hellman (TDH)" },
  { href: "/tecc", label: "TECC" },
  { href: "/solana-integration-analysis", label: "Solana Integration Analysis" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/undetectable-steganography", label: "Undetectable Steganography" },
  { href: "/steganography-algorithm", label: "Steganography Algorithm" },
  { href: "/advanced-steganography", label: "Advanced Steganography" },
  { href: "/future-steps", label: "Future Steps" },
  { href: "/docs/ternary-field", label: "Ternary Field Documentation" },
  { href: "/docs/ternary-elliptic-curve", label: "Ternary Elliptic Curve Documentation" },
  { href: "/official-links", label: "Official Links" },
  { href: "/dex-screener", label: "DEX Screener" },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="fixed top-4 left-4">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <SheetTitle className="text-lg font-semibold mb-4">Ternary Key Exchange</SheetTitle>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" className="justify-start" asChild onClick={() => setOpen(false)}>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden border-r bg-muted lg:block">
        <div className="flex h-full flex-col">
          <div className="p-4">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Ternary Key Exchange</h2>
          </div>
          <ScrollArea className="flex-1 px-3">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button key={item.href} variant="ghost" className="justify-start" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

