import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Users, Clock, Gift } from 'lucide-react'

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            솔루나 베타 테스트 프로그램
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            혁신적인 PCM 썬쉐이드를 먼저 경험해보세요. 
            베타 테스터로 참여하여 제품 개발에 직접 기여하고 특별한 혜택을 받으세요.
          </p>
        </div>

        {/* 베타 테스트 혜택 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            베타 테스터 특별 혜택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">무료 제품</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  베타 테스트용 솔루나 썬쉐이드를 무료로 제공받습니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">우선 구매권</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  정식 출시 시 30% 할인된 가격으로 우선 구매할 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">개발 참여</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  피드백을 통해 제품 개발 과정에 직접 참여하고 영향을 미칠 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">독점 체험</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  일반 출시 전 최신 PCM 기술을 가장 먼저 체험할 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 베타 테스트 과정 */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>베타 테스트 과정</CardTitle>
              <CardDescription>
                4주간의 체계적인 테스트 과정을 통해 제품 성능을 검증합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">제품 수령 및 설치 (1주차)</h3>
                    <p className="text-gray-600">
                      솔루나 썬쉐이드와 온도 측정 키트를 받고 차량에 설치합니다. 
                      설치 과정의 편의성과 소요 시간을 평가합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">일상 사용 테스트 (2-3주차)</h3>
                    <p className="text-gray-600">
                      다양한 환경(직사광선, 그늘, 계절별)에서 제품을 사용하며 
                      온도 저감 효과와 지속 시간을 측정합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">피드백 제출 (4주차)</h3>
                    <p className="text-gray-600">
                      상세한 사용 후기와 개선 제안사항을 제출합니다. 
                      온라인 인터뷰에 참여하여 추가 의견을 공유합니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 참여 자격 */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>참여 자격 요건</CardTitle>
              <CardDescription>
                다음 조건을 만족하는 분들을 우선적으로 선발합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-green-700">우선 선발 대상</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">영유아 자녀가 있는 부모</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">반려동물과 함께 이동하는 보호자</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">장거리 운전을 자주 하는 운전자</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">자동차 용품에 관심이 많은 분</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-blue-700">기본 요건</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">만 20세 이상 운전자</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">주 3회 이상 차량 이용</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">4주간 테스트 참여 가능</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">온라인 설문 및 인터뷰 참여 가능</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Google Form 임베드 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>베타 테스트 신청</CardTitle>
              <CardDescription>
                아래 양식을 작성하여 베타 테스트에 신청해주세요. 
                선발 결과는 신청 후 1주일 내에 개별 연락드립니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_example_beta_form_url/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="rounded-lg"
                  title="솔루나 베타 테스트 신청 양식"
                >
                  로딩 중...
                </iframe>
                
                {/* 폴백 메시지 */}
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>양식이 표시되지 않나요?</strong><br />
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf_example_beta_form_url/viewform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      새 창에서 양식 열기
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 문의 정보 */}
        <section className="mt-12">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">베타 테스트 관련 문의</h3>
            <p className="text-gray-600 mb-4">
              베타 테스트에 대한 궁금한 점이 있으시면 언제든 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium">이메일:</span>
                <a href="mailto:beta@soluna.co.kr" className="text-blue-600 hover:text-blue-800">
                  beta@soluna.co.kr
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium">전화:</span>
                <a href="tel:02-1234-5678" className="text-blue-600 hover:text-blue-800">
                  02-1234-5678
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
