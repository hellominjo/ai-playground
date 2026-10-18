import type { ReactNode } from 'react'

import SiteLayout from '../../components/SiteLayout'

// Quick Start: 공통 레이아웃 + 가이드 페이지 스타일(.guide) 범위 지정
export default function QuickStartLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <SiteLayout>
      <div className="guide">{children}</div>
    </SiteLayout>
  )
}
