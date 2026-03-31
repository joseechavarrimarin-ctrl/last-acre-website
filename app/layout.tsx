import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const lora = Lora({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Last Acre',
  description: 'A solo-built farming tycoon. Every crop, every animal, every decision — yours.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="bg-farm-cream font-sans min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  )
}
