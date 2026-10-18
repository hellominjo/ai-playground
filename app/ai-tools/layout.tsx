import type { ReactNode } from 'react'

import SiteLayout from '../../components/SiteLayout'

export default function AiToolsLayout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>
}
