import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })

import { headers } from 'next/headers';
import ContextProvider from '../../context';
import { ContractProvider } from '@/context/ContractProvider';

export const metadata: Metadata = {
  title: 'MYID Coin Presale',
  description: 'Introducing MyIdentity (MYID) Coin'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookies = headers().get('cookie')

  return (
    <html lang="en">
      <head>
      <Script id="chatbot" data-agent-id="67575fc1c74d7b6d49f79ac8" src="https://abi-script.vercel.app/ChatBot.js"></Script>
      </head>
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>
          <ContractProvider>
            {children}
          </ContractProvider>
        </ContextProvider>
      </body>
    </html>
  )
}