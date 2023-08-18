import './globals.css'
import { Inter } from 'next/font/google'
// import favicon from '../app/favicon.svg'
import favicon from './favicon.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '넥스트 포트폴리오',
  description: 'NEXT.JS로 제작한 포트폴리오 홈페이지입니다.',
  keywords: "포트폴리오, next.js, portfolio, react",
  icons: [{ rel: 'icon', url: favicon.src }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
