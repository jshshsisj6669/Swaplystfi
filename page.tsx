'use client'

import { useEffect, useState } from 'react'
import { AlphaRouter } from '@uniswap/smart-order-router'
import { ethers } from 'ethers'
import { CurrencyAmount, TradeType, Percent } from '@uniswap/sdk-core'
import { Pool, Route, Trade } from '@uniswap/v3-sdk'
import { Token } from '@uniswap/sdk-core'
import { QuoteExactInputSingleParams } from '@uniswap/v3-sdk'

export default function Home() {
  const [price, setPrice] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_KEY')
      const router = new AlphaRouter({ chainId: 1, provider })

      const tokenIn = new Token(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')
      const tokenOut = new Token(1, '0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether')
      
      const amountIn = CurrencyAmount.fromRawAmount(tokenIn, 1000000n)
      const route = await router.route(amountIn, tokenOut, TradeType.EXACT_INPUT, {
        recipient: '0x0000000000000000000000000000000000000000',
        slippageTolerance: new Percent(5, 100),
        deadline: Math.floor(Date.now() / 1000 + 1800),
      })

      if (route && route.quote) {
        setPrice(route.quote.toFixed(6))
      }
    }

    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Uniswap Price API</h1>
      <p className="mt-4 text-xl">1 USDC ≈ {price} WETH</p>
    </main>
  )
}