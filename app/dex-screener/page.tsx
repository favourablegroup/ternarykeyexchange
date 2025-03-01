export default function DexScreenerPage() {
  return (
    <div className="h-screen w-full">
      <style jsx>{`
        #dexscreener-embed {
          position: relative;
          width: 100%;
          height: 100%;
        }
        #dexscreener-embed iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border: 0;
        }
      `}</style>
      <div id="dexscreener-embed">
        <iframe src="https://dexscreener.com/solana/7jvttJGLKKmAiA8Gfza9TW8i2D8Txv9Rpa9rPitCiRs5?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
      </div>
    </div>
  )
}

