import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata = {
  title: '솔루나 - 차세대 자동차 냉각 솔루션',
  description: 'PCM(상변화물질) 기술을 활용한 혁신적인 자동차 냉각 시스템으로 연료 효율성을 높이고 환경을 보호합니다.',
  keywords: '솔루나, PCM, 상변화물질, 자동차 냉각, 연료 효율, 친환경 기술',
  openGraph: {
    title: '솔루나 - 차세대 자동차 냉각 솔루션',
    description: '솔루나의 PCM 기술로 자동차 냉각 시스템을 혁신합니다.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
