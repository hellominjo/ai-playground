'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type Heading = { id: string; text: string }

/**
 * 홈 전용 On This Page.
 * 홈은 섹션 목록을 왼쪽 사이드바에 표시(toc.float: false)하므로 Nextra 기본 TOC가 비어 있어,
 * 본문 h2를 읽어 오른쪽 TOC 영역(toc.extraContent)에 같은 마크업으로 렌더링합니다.
 * 현재 섹션 표시는 TocScrollSpy가 처리합니다.
 */
export default function HomeToc() {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const list = Array.from(document.querySelectorAll<HTMLHeadingElement>('article h2[id]')).map(
      h => ({ id: h.id, text: h.textContent?.trim() ?? '' })
    )
    setHeadings(list)
  }, [pathname])

  if (!headings.length) return null

  return (
    <div className="home-toc">
      <p className="home-toc-title">On This Page</p>
      <ul>
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
