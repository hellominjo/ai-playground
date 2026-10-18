import type { NextConfig } from "next";
import nextra from 'nextra'

const withNextra = nextra({})

// GitHub Pages: https://hellominjo.github.io/ai-playground
// 프로덕션 빌드에서만 /ai-playground 경로를 붙이고, 개발 서버는 http://localhost:3000 그대로 사용
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export', // 정적 사이트로 내보내기 (out/)
  basePath: isProd ? '/ai-playground' : '',
  trailingSlash: true, // /ai-tools → /ai-tools/index.html (GitHub Pages 경로 호환)
  images: { unoptimized: true } // 정적 export에서는 이미지 최적화 서버를 쓸 수 없음
};

export default withNextra(nextConfig)
