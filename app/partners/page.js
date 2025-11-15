import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Handshake, TrendingUp, Globe, Mail, Phone } from 'lucide-react'

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            파트너십 프로그램
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            솔루나는 PCM 기술 기반의 차량용 썬쉐이드 사업화를 위해
            제조, 유통, 투자, 해외 진출 등 다양한 분야의 전문 파트너를 찾고 있습니다.
          </p>
        </div>

        {/* 파트너십 유형 - 테이블 스타일 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            파트너십 분야
          </h2>

          <div className="space-y-8">
            {/* 제조/공급 */}
            <div className="border border-gray-200">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-semibold text-gray-900">제조 및 공급 파트너십</h3>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">대상</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 자동차 제조사 (OEM 협력)</li>
                      <li>• 자동차 부품 제조업체</li>
                      <li>• PCM 소재 전문 공급업체</li>
                      <li>• 섬유/원단 제조 전문업체</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">협력 방식</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• OEM/ODM 계약</li>
                      <li>• 장기 공급 계약</li>
                      <li>• 기술 라이선스</li>
                      <li>• 공동 생산 체제</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 유통/판매 */}
            <div className="border border-gray-200">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Handshake className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-semibold text-gray-900">유통 및 판매 파트너십</h3>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">대상</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 대형 유통업체</li>
                      <li>• 자동차 용품 전문점</li>
                      <li>• 온라인 커머스 플랫폼</li>
                      <li>• 렌터카/카셰어링 업체</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">협력 방식</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 독점 판매권</li>
                      <li>• B2B 대량 공급</li>
                      <li>• 위탁 판매</li>
                      <li>• 공동 마케팅</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 투자/금융 */}
            <div className="border border-gray-200">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-semibold text-gray-900">투자 및 금융 파트너십</h3>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">대상</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 벤처캐피털</li>
                      <li>• 사모펀드</li>
                      <li>• 정부 R&D 사업</li>
                      <li>• 금융기관</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">협력 방식</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 시리즈 투자</li>
                      <li>• 정부 과제 공동 참여</li>
                      <li>• 제품 금융 지원</li>
                      <li>• 전략적 투자</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 해외 진출 */}
            <div className="border border-gray-200">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-semibold text-gray-900">해외 진출 파트너십</h3>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">목표 지역</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 동남아시아 (태국, 베트남, 인도네시아)</li>
                      <li>• 중동 (UAE, 사우디아라비아)</li>
                      <li>• 북미 (미국, 캐나다)</li>
                      <li>• 남유럽 (스페인, 이탈리아, 그리스)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">협력 방식</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 현지 디스트리뷰터 계약</li>
                      <li>• 합작 법인 설립</li>
                      <li>• 현지화 공동 개발</li>
                      <li>• 글로벌 유통망 구축</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 파트너 혜택 - 테이블 형식 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            파트너 혜택
          </h2>
          <div className="border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    혜택
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    내용
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    독점 기술 라이선스
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    PCM 마이크로캡슐 기술의 지역별/분야별 독점 사용권 제공
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    우선 공급권
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    신제품 출시 및 기술 업데이트 시 파트너사 우선 공급
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    공동 마케팅 지원
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    마케팅 비용 분담, 공동 브랜딩, 전시회 참가 지원
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    기술 지원
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    전담 기술팀의 제품 적용, 공정 최적화, 품질 관리 지원
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    물량 할인
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    대량 구매 시 단계별 할인 및 장기 계약 인센티브
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    공동 R&D
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    차세대 PCM 기술 개발 프로젝트 공동 참여 및 지분 공유
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 파트너십 로드맵 - 타임라인 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            파트너십 로드맵
          </h2>
          <div className="border-l-2 border-gray-300 pl-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-[41px] w-6 h-6 bg-white border-2 border-gray-900 rounded-full"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded">
                  2024 Q3-Q4
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                초기 파트너십 체결
              </h3>
              <p className="text-sm text-gray-600">
                국내 주요 자동차 용품 전문점 및 대형 유통업체 입점.
                초기 생산 파트너와의 공급 계약 체결 및 생산 체계 구축.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] w-6 h-6 bg-white border-2 border-gray-400 rounded-full"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded">
                  2025 Q1-Q2
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                사업 확장
              </h3>
              <p className="text-sm text-gray-600">
                자동차 제조사와의 OEM 공급 계약 추진.
                렌터카 및 카셰어링 업체 B2B 파트너십 확대. 온라인 판매 채널 강화.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded">
                  2025 Q3-Q4
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                글로벌 진출
              </h3>
              <p className="text-sm text-gray-600">
                동남아시아 및 중동 지역 현지 파트너 발굴 및 계약.
                글로벌 유통망 구축 및 현지 시장 맞춤형 제품 개발.
              </p>
            </div>
          </div>
        </section>

        {/* 문의 */}
        <section className="mb-16">
          <Card className="border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-xl">파트너십 문의</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">사업개발팀</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a href="mailto:partnership@soluna.co.kr" className="text-gray-700 hover:text-gray-900">
                        partnership@soluna.co.kr
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <a href="tel:02-1234-5679" className="text-gray-700 hover:text-gray-900">
                        02-1234-5679
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">해외사업팀</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a href="mailto:global@soluna.co.kr" className="text-gray-700 hover:text-gray-900">
                        global@soluna.co.kr
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">팩스: 02-1234-5680</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">제안서 제출</strong><br />
                  구체적인 파트너십 제안이 있으신 경우,
                  사업 계획서와 함께 partnership@soluna.co.kr로 제안서를 보내주시기 바랍니다.
                  검토 후 7영업일 이내 회신 드리겠습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
