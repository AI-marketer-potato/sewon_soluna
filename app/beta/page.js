import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            베타 테스트 프로그램
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            솔루나 PCM 썬쉐이드를 먼저 경험하고 제품 개발에 참여하세요.
            베타 테스터에게는 무료 제품과 특별 혜택이 제공됩니다.
          </p>
        </div>

        {/* 베타 테스터 혜택 - 테이블 형식 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            베타 테스터 혜택
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
                    무료 제품 제공
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    베타 테스트용 솔루나 PCM 썬쉐이드와 온도 측정 키트 무료 제공
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    우선 구매권
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    정식 출시 시 30% 할인된 가격으로 우선 구매 가능
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    제품 개발 참여
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    피드백을 통해 제품 개선 과정에 직접 기여하고 영향력 행사
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    독점 체험 기회
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    일반 출시 전 최신 PCM 냉각 기술을 가장 먼저 체험
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 베타 테스트 과정 - 타임라인 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            테스트 과정 (4주)
          </h2>
          <div className="border-l-2 border-gray-300 pl-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-[41px] w-6 h-6 bg-white border-2 border-gray-900 rounded-full"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded">
                  1주차
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                제품 수령 및 설치
              </h3>
              <p className="text-sm text-gray-600">
                솔루나 썬쉐이드와 온도 측정 키트를 받고 차량에 설치합니다.
                설치 과정의 편의성과 소요 시간을 평가합니다.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] w-6 h-6 bg-white border-2 border-gray-400 rounded-full"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded">
                  2-3주차
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                일상 사용 테스트
              </h3>
              <p className="text-sm text-gray-600">
                다양한 환경(직사광선, 그늘, 계절별)에서 제품을 사용하며
                온도 저감 효과와 지속 시간을 측정합니다.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded">
                  4주차
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                피드백 제출
              </h3>
              <p className="text-sm text-gray-600">
                상세한 사용 후기와 개선 제안사항을 제출합니다.
                온라인 인터뷰에 참여하여 추가 의견을 공유합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 참여 자격 - 테이블 형식 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            참여 자격
          </h2>

          <div className="space-y-6">
            {/* 우선 선발 대상 */}
            <div className="border border-gray-200">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">우선 선발 대상</h3>
              </div>
              <div className="px-6 py-5">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li>• 영유아 자녀가 있는 부모</li>
                  <li>• 반려동물과 함께 이동하는 보호자</li>
                  <li>• 장거리 운전을 자주 하는 운전자</li>
                  <li>• 자동차 용품에 관심이 많은 분</li>
                </ul>
              </div>
            </div>

            {/* 기본 요건 */}
            <div className="border border-gray-200">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">기본 요건</h3>
              </div>
              <div className="px-6 py-5">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li>• 만 20세 이상 운전자</li>
                  <li>• 주 3회 이상 차량 이용</li>
                  <li>• 4주간 테스트 참여 가능</li>
                  <li>• 온라인 설문 및 인터뷰 참여 가능</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 신청 안내 */}
        <section className="mb-16">
          <Card className="border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-xl">베타 테스트 신청</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">신청 방법</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded p-4">
                    <p className="text-sm text-gray-600 mb-4">
                      베타 테스트에 참여를 원하시는 분은 아래 정보를 포함하여 이메일로 신청해주세요.
                      선발 결과는 신청 후 1주일 내에 개별 연락드립니다.
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>필수 정보:</strong></p>
                      <ul className="ml-4 space-y-1 text-gray-600">
                        <li>• 성명, 연락처 (휴대폰, 이메일)</li>
                        <li>• 차량 정보 (제조사, 모델명, 연식)</li>
                        <li>• 주 차량 이용 빈도 및 용도</li>
                        <li>• 우선 선발 대상 해당 여부</li>
                        <li>• 베타 테스트 참여 동기 (간단히)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">신청 접수</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <a href="mailto:beta@soluna.co.kr" className="text-gray-700 hover:text-gray-900">
                          beta@soluna.co.kr
                        </a>
                      </div>
                      <p className="text-xs text-gray-500 ml-7">
                        이메일 제목: [베타 테스트 신청] 성명
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">문의</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <a href="tel:02-1234-5678" className="text-gray-700 hover:text-gray-900">
                          02-1234-5678
                        </a>
                      </div>
                      <p className="text-xs text-gray-500 ml-7">
                        평일 09:00-18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 선발 일정 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            선발 일정
          </h2>
          <div className="border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    단계
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    기간
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    내용
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    신청 접수
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2024년 8월 1일 - 8월 31일
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    이메일을 통한 베타 테스터 신청 접수
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    선발 및 통보
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2024년 9월 1일 - 9월 7일
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    베타 테스터 50명 선발 및 개별 통보
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    제품 배송
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2024년 9월 10일 - 9월 15일
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    베타 테스트 제품 및 측정 키트 배송
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    테스트 기간
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2024년 9월 16일 - 10월 13일
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    4주간 실제 사용 테스트 및 데이터 수집
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    피드백 제출
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    2024년 10월 14일 - 10월 20일
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    사용 후기 작성 및 온라인 인터뷰 참여
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
