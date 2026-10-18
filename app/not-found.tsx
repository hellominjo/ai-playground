import Link from 'next/link'

import SiteLayout from '../components/SiteLayout'

const suggestions = [
  { label: 'Quick Start', href: '/quick-start' },
  { label: 'AI Tools', href: '/ai-tools' },
  { label: 'Tutorials', href: '/tutorials' }
]

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="not-found">
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <h1 className="not-found-title">페이지를 찾을 수 없습니다</h1>
        <p className="not-found-desc">
          주소가 바뀌었거나 아직 준비 중인 페이지예요.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="not-found-btn primary">
            홈으로 가기 →
          </Link>
        </div>

        <nav className="not-found-links" aria-label="추천 페이지">
          {suggestions.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label} →
            </Link>
          ))}
        </nav>
      </div>
    </SiteLayout>
  )
}
