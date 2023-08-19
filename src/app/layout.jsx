import './globals.scss'
import { Noto_Sans_KR } from 'next/font/google'
import favicon from './favicon.svg'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const notoSansKR = Noto_Sans_KR({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: '넥스트 포트폴리오',
  description: 'NEXT.JS로 제작한 포트폴리오 홈페이지입니다.',
  keywords: "포트폴리오, next.js, portfolio, react",
  icons: [{ rel: 'icon', url: favicon.src }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
