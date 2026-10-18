import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Head } from 'nextra/components'

import TocScrollSpy from '../components/TocScrollSpy'

import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Playground',
  description: 'AI 도구를 배우고 실험하는 공간'
}

// Nextra Layout(헤더·사이드바)은 영역별 layout.tsx 에서 components/SiteLayout 으로 적용
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        {children}
        <TocScrollSpy />
      </body>
    </html>
  )
}
