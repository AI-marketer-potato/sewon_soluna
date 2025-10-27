import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Handshake, TrendingUp, Globe } from 'lucide-react'

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            솔루나 파트너십 프로그램
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            혁신적인 PCM 기술과 함께 자동차 산업의 미래를 만들어가세요. 
            다양한 형태의 파트너십을 통해 상호 성장할 수 있는 기회를 제공합니다.
          </p>
        </div>

        {/* 파트너십 유형 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            파트너십 유형
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>제조/공급 파트너십</CardTitle>
                <CardDescription>
                  OEM/ODM 협력을 통한 대량 생산 및 공급망 구축
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>자동차 제조사 납품 (현대, 기아, 쌍용 등)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>자동차 부품 전문 제조업체 협력</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>PCM 소재 공급업체 장기 계약</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>프레임 제조 전문업체 협업</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Handshake className="h-12 w-12 text-primary mb-4" />
                <CardTitle>유통/판매 파트너십</CardTitle>
                <CardDescription>
                  다양한 판매 채널을 통한 시장 확장 및 브랜드 강화
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>대형마트 입점 (이마트, 홈플러스, 코스트코)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>자동차 용품 전문점 네트워크</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>온라인 플랫폼 (쿠팡, 11번가, 네이버)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>렌터카/카셰어링 업체 협력</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>투자/금융 파트너십</CardTitle>
                <CardDescription>
                  사업 확장과 기술 개발을 위한 투자 및 금융 지원
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>벤처캐피털 및 사모펀드 투자</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>정부 R&D 과제 공동 참여</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>크라우드펀딩 플랫폼 협력</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>금융기관 제품 금융 지원</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>해외 진출 파트너십</CardTitle>
                <CardDescription>
                  글로벌 시장 진출을 위한 현지 파트너 및 유통망 구축
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>동남아시아 (태국, 베트남, 인도네시아)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>중동 지역 (UAE, 사우디아라비아)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>북미 시장 (미국, 캐나다)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>남유럽 (스페인, 이탈리아, 그리스)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 파트너 혜택 */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>파트너 혜택</CardTitle>
              <CardDescription>
                솔루나와 함께하는 파트너들에게 제공되는 특별한 혜택들
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">독점 기술</div>
                  <p className="text-sm text-gray-600">
                    PCM 기술의 독점 라이선스 및 기술 이전 기회
                  </p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">우선 공급</div>
                  <p className="text-sm text-gray-600">
                    신제품 및 기술 업데이트 우선 공급권
                  </p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">마케팅 지원</div>
                  <p className="text-sm text-gray-600">
                    공동 마케팅 및 브랜드 협력 프로그램
                  </p>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">기술 지원</div>
                  <p className="text-sm text-gray-600">
                    전담 기술팀의 지속적인 기술 지원
                  </p>
                </div>
                
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">특별 할인</div>
                  <p className="text-sm text-gray-600">
                    대량 구매 시 특별 할인 및 인센티브
                  </p>
                </div>
                
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">공동 R&D</div>
                  <p className="text-sm text-gray-600">
                    차세대 기술 개발 공동 연구 참여
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 성공 사례 */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>파트너십 로드맵</CardTitle>
              <CardDescription>
                단계별 파트너십 확장 계획
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">초기 파트너십 (2024년 하반기)</h3>
                    <p className="text-gray-600 text-sm">
                      국내 주요 자동차 용품 전문점 및 대형마트 입점을 통한 시장 진입. 
                      초기 생산 파트너와의 협력 체계 구축.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">확장 파트너십 (2025년 상반기)</h3>
                    <p className="text-gray-600 text-sm">
                      자동차 제조사와의 OEM 공급 계약 체결. 
                      렌터카 및 카셰어링 업체와의 B2B 파트너십 확대.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">글로벌 파트너십 (2025년 하반기)</h3>
                    <p className="text-gray-600 text-sm">
                      동남아시아 및 중동 지역 현지 파트너와의 협력을 통한 해외 진출. 
                      글로벌 유통망 구축 및 현지화 전략 실행.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Google Form 임베드 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>파트너십 문의</CardTitle>
              <CardDescription>
                솔루나와의 파트너십에 관심이 있으시면 아래 양식을 작성해주세요. 
                담당자가 빠른 시일 내에 연락드리겠습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_example_partnership_form_url/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="rounded-lg"
                  title="솔루나 파트너십 문의 양식"
                >
                  로딩 중...
                </iframe>
                
                {/* 폴백 메시지 */}
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>양식이 표시되지 않나요?</strong><br />
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf_example_partnership_form_url/viewform" 
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

        {/* 연락처 정보 */}
        <section className="mt-12">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">파트너십 전담팀</h3>
            <p className="text-gray-600 mb-4">
              파트너십에 대한 더 자세한 논의를 원하시면 직접 연락주세요.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">사업개발팀:</span>
                  <a href="mailto:partnership@soluna.co.kr" className="text-blue-600 hover:text-blue-800">
                    partnership@soluna.co.kr
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">직통전화:</span>
                  <a href="tel:02-1234-5679" className="text-blue-600 hover:text-blue-800">
                    02-1234-5679
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">해외사업팀:</span>
                  <a href="mailto:global@soluna.co.kr" className="text-blue-600 hover:text-blue-800">
                    global@soluna.co.kr
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">팩스:</span>
                  <span className="text-gray-600">02-1234-5680</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
