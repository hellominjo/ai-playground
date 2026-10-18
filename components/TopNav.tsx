'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menus = [
  { label: 'Home', href: '/' },
  { label: 'AI Tools', href: '/ai-tools' },
  { label: 'Quick Start', href: '/quick-start' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Workflows', href: '/workflows' },
  { label: 'Projects', href: '/projects' }
]

export default function TopNav() {
  const pathname = usePathname()

  return (
    <nav className="top-nav" aria-label="주 메뉴">
      <div className="top-nav-inner">
        {menus.map(({ label, href }) => {
          const active =
            pathname === href ||
            pathname.startsWith(`${href}/`)

          return (
            <Link
              key={href}
              href={href}
              className={active ? 'active' : undefined}
              aria-current={active ? 'page' : undefined}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}