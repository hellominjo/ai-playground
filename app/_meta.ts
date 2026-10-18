// type: 'page' → 섹션별로 사이드바 분리 (해당 섹션의 하위 페이지만 노출)
export default {
  // '' → page.mdx frontmatter의 title 사용 (사이드바·breadcrumb)
  index: '',
  'ai-tools': { type: 'page', title: 'AI Tools' },
  'quick-start': { type: 'page', title: 'Quick Start' }
}
