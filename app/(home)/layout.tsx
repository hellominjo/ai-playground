import type { ReactNode } from 'react'

import SiteLayout from '../../components/SiteLayout'

// 홈: 사이드바에 섹션 목록 표시 + 홈 페이지 스타일(.home) 범위 지정
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <SiteLayout variant="home">
      <div className="home">{children}</div>
    </SiteLayout>
  )
}
