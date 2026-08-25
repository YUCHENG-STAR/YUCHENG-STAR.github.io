import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yucheng-star.github.io'),
  title: 'YUCHENG-STAR · 数字花园',
  description: '记录 AI、RAG 与工程实践的个人技术博客。',
  openGraph: { title: 'YUCHENG-STAR · 数字花园', description: '记录 AI、RAG 与工程实践的个人技术博客。', type: 'website', images: [{ url: '/og.png', width: 1672, height: 941, alt: 'YUCHENG-STAR 技术博客' }] },
  twitter: { card: 'summary_large_image', title: 'YUCHENG-STAR · 数字花园', description: '记录 AI、RAG 与工程实践的个人技术博客。', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

