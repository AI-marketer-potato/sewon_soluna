import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">솔루나</h3>
            <p className="text-gray-600 mb-4">
              상변화물질(PCM) 기술을 활용한 혁신적인 자동차 냉각 시스템으로 
              연료 효율성을 높이고 환경을 보호합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              서비스
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/science" className="text-gray-600 hover:text-primary transition-colors">
                  기술 소개
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-600 hover:text-primary transition-colors">
                  데모
                </Link>
              </li>
              <li>
                <Link href="/beta" className="text-gray-600 hover:text-primary transition-colors">
                  베타 테스트
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              법적 고지
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 솔루나. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  )
}
