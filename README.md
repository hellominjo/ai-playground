# AI Playground

AI 도구와 일하는 방식을 직접 실험하고 그 과정에서 배운 내용을 기록한 Docs

- **Next.js 15** (App Router) + **Nextra 4** (`nextra-theme-docs`)
- 콘텐츠는 **MDX**로 작성하고, 디자인은 `app/globals.css`에서 마크다운 구조로 제작

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   
npm run start   
```

## Project Structure

```
app/
├── layout.tsx              # <html>/<body>, 전역 CSS, TocScrollSpy
├── globals.css             # 사이트 전체 스타일 (Nextra 기본 스타일 덮어쓰기 포함)
├── not-found.tsx           # 404 페이지
├── _meta.ts                # 루트 메뉴 구성 (섹션 등록)
│
├── (home)/                 # 홈 ( / ) — 괄호 폴더는 URL에 포함되지 않음
├── ai-tools/               # /ai-tools│
└── quick-start/            # /quick-start
components/
├── SiteLayout.tsx          # Nextra Layout 공통 래퍼 (헤더 + TopNav + 사이드바 + Footer)
├── TopNav.tsx              # 헤더 아래 상단 메뉴 (Home, AI Tools, Quick Start …)
├── SiteFooter.tsx          # 하단 Footer
├── Logo.tsx                # 헤더 로고 아이콘
├── HomeToc.tsx             # 홈 전용 오른쪽 On This Page
└── TocScrollSpy.tsx        # 스크롤 위치에 따라 현재 섹션 링크 강조 (On This Page, 홈 사이드바)

mdx-components.tsx          # Nextra MDX 컴포넌트 연결
next.config.ts              # Nextra 플러그인 설정
```

### Layout

Nextra `Layout`은 루트 `app/layout.tsx`가 아니라 **영역별 `layout.tsx`에서 `components/SiteLayout`으로** 적용합니다.

| 영역 | 사이드바 | 오른쪽 On This Page |
|---|---|---|
| 홈 (`variant="home"`) | AI Playground + 페이지 섹션(h2) 목록 | `HomeToc` |
| 섹션 (`variant="docs"`, 기본값) | 해당 섹션의 페이지만 (`_meta` 기준) | Nextra 기본 TOC |

`app/_meta.ts`에서 섹션 폴더를 `type: 'page'`로 등록하면 사이드바가 섹션별로 분리됩니다.


## Environment

- Node.js 24.19.0
- npm 11.17.0
- Next.js 15.5.28 (App Router)
- React 19.3.1
- Nextra / nextra-theme-docs 4.6.1
- TypeScript 5
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- ESLint 9 (`eslint-config-next`)
- OS: Windows 11
- 에디터: VS Code
