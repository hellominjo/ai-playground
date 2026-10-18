import type { ReactNode } from 'react'
import type { PageMapItem } from 'nextra'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Layout, Navbar } from 'nextra-theme-docs'

import Logo from './Logo'
import TopNav from './TopNav'
import SiteFooter from './SiteFooter'
import HomeToc from './HomeToc'

// app/_meta.ts 에서 홈 전용 항목 (홈 사이드바에만 노출)
const HOME_META_KEYS = ['-- home', 'index']

// 섹션 페이지 사이드바에서 홈 항목(Home / AI Playground)을 제외
function withoutHomeItems(pageMap: PageMapItem[]): PageMapItem[] {
  return pageMap
    .filter(item => !('name' in item && HOME_META_KEYS.includes(item.name)))
    .map(item => {
      if (!('data' in item)) return item
      const data = { ...item.data }
      for (const key of HOME_META_KEYS) delete data[key]
      return { data }
    })
}

/**
 * Nextra 공통 레이아웃 (헤더 + TopNav + 사이드바 + Footer)
 */
export default async function SiteLayout({
  variant = 'docs',
  children
}: {
  variant?: 'home' | 'docs'
  children: ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <Layout
      navbar={
        <div className="site-header">
          <Navbar
            logo={
              <span className="site-brand">
                <Logo />
                <span>AI Playground</span>
                <span className="site-brand-author">by hellominjo</span>
              </span>
            }
          />
          <TopNav />
        </div>
      }
      footer={<SiteFooter />}
      pageMap={variant === 'home' ? pageMap : withoutHomeItems(pageMap)}
      toc={
        variant === 'home'
          ? { float: false, extraContent: <HomeToc /> }
          : { float: true }
      }
      search={<Search placeholder="Search" />}
      editLink={null}
      feedback={{ content: null }}
    >
      {children}
    </Layout>
  )
}
