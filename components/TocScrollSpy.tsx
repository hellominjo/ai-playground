'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// 헤더 높이(109px) + 여유. 제목의 top이 이 위치를 지나면 현재 섹션으로 판단
const OFFSET = 140

// 현재 섹션을 표시할 링크 목록 (각 목록마다 따로 계산)
const LINK_GROUPS = [
  '.nextra-toc ul a[href^="#"]', // 오른쪽 On This Page
  '.nextra-sidebar li > ul a[href^="#"]' // 왼쪽 사이드바의 페이지 섹션 목록 (홈)
]

/**
 * On This Page 
 */
export default function TocScrollSpy() {
  const pathname = usePathname()

  useEffect(() => {
    let frame = 0
    let pinnedHash: string | null = null

    const update = () => {
      frame = 0
      const doc = document.documentElement
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2

      for (const selector of LINK_GROUPS) {
        const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(selector))
        if (!links.length) continue

        let index = 0
        const pinned = pinnedHash && links.findIndex(link => link.hash === pinnedHash)
        if (typeof pinned === 'number' && pinned >= 0) {
          index = pinned
        } else if (atBottom) {
          index = links.length - 1
        } else {
          links.forEach((link, i) => {
            const heading = document.getElementById(decodeURIComponent(link.hash.slice(1)))
            if (heading && heading.getBoundingClientRect().top <= OFFSET) index = i
          })
        }

        links.forEach((link, i) => link.toggleAttribute('data-active', i === index))
      }
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(LINK_GROUPS.join(','))
      if (!link) return
      pinnedHash = link.hash
      schedule()
    }

    // 사용자가 직접 스크롤하면 클릭 고정 해제
    const unpin = () => {
      pinnedHash = null
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    document.addEventListener('click', onClick)
    window.addEventListener('wheel', unpin, { passive: true })
    window.addEventListener('touchmove', unpin, { passive: true })
    window.addEventListener('keydown', unpin)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('click', onClick)
      window.removeEventListener('wheel', unpin)
      window.removeEventListener('touchmove', unpin)
      window.removeEventListener('keydown', unpin)
    }
  }, [pathname])

  return null
}
