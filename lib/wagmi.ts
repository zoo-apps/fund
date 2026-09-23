import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Zoo Fund',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'e89228fed40d4c6e9520912214dfd68b',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
})
