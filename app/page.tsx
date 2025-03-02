"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Zap, Shield, Globe, BarChart2, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Banner */}
      <div
        className="relative h-[500px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tritcoin_Banner.jpg-XAHjNd3lEFA5pFkfMIPDB7QkVkJazD.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          z-index: "-1",
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="max-w-6xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-6 text-white"
            >
              TRITCOIN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl mb-8 text-white/90"
            >
              Revolutionizing blockchain technology with balanced ternary arithmetic
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Balanced Ternary Blockchain is an innovative implementation of blockchain technology that leverages
                balanced ternary arithmetic. This system utilizes a unique numeral system consisting of three digits: -1
                (represented as 'T'), 0, and 1. This approach not only enhances cryptographic operations but also
                introduces elegant mathematical properties that improve efficiency and security within the blockchain.
              </p>
              <p>
                Our goal is to create a comprehensive ecosystem that supports charitable fundraising and community
                engagement through the innovative use of balanced ternary arithmetic.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="mr-2" />
                  Wallet Functionality
                </CardTitle>
              </CardHeader>
              <CardContent>
                Manage wallets, view balances, and send transactions using a simplified wallet interface.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2" />
                  Real-time Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                Instant notifications of new blocks and transactions through WebSocket connections.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2" />
                  Enhanced Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                Improved cryptographic operations and security measures using balanced ternary arithmetic.
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Official Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <Button variant="outline" className="w-full" asChild>
              <Link href="https://discord.gg/2ztQMVekMw" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Discord
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="https://fractal.investments/" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2" />
                Website
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link
                href="https://dexscreener.com/solana/7jvttjglkkmaia8gfza9tw8i2d8txv9rpa9rpitcirs5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BarChart2 className="mr-2" />
                DEX Screener
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/docs/ternary-field">
                <Book className="mr-2" />
                Ternary Field Documentation
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/docs/ternary-elliptic-curve">
                <Book className="mr-2" />
                Ternary Elliptic Curve Documentation
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/solana-integration-analysis">
                <Book className="mr-2" />
                Solana Integration Analysis
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dex-screener">
                <BarChart2 className="mr-2" />
                DEX Screener
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <div className="text-center">
            <Button asChild>
              <Link href="/designing-ternary-key-exchange">
                Learn More About Ternary Key Exchange <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

