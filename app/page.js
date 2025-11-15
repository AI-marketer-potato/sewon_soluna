import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Thermometer, Shield, Zap, Users, Activity, TrendingDown } from 'lucide-react'
import PCMLayerDiagram from '@/components/PCMLayerDiagram'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Temperature indicator badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-gray-200">
              <Thermometer className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">28-32°C 상변화 기술</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              차세대 자동차 냉각 솔루션
              <span className="block text-slate-700 mt-2">솔루나</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              PCM(상변화물질) 기술을 활용한 혁신적인 차량용 썬쉐이드로
              여름철 차량 실내 온도를 <span className="font-semibold text-gray-900">평균 6~8°C 낮춰</span> 안전하고 쾌적한 드라이빙을 제공합니다.
            </p>

            {/* Temperature reduction visual indicator */}
            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="flex flex-col items-center p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-1">45°C</div>
                <div className="text-sm text-gray-600">일반 차량</div>
              </div>
              <div className="text-2xl text-gray-400 font-bold">→</div>
              <div className="flex flex-col items-center p-6 rounded-lg bg-white border-2 border-blue-600 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">37-39°C</div>
                <div className="text-sm text-gray-900 font-medium">솔루나 적용</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/science">기술 알아보기</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-blue-600 text-blue-700 hover:bg-blue-50">
                <Link href="/beta">베타 테스트 참여</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              왜 솔루나인가요?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              혁신적인 PCM 기술과 열반사 원단을 결합한 원터치 우산형 썬쉐이드로
              차량 냉각의 새로운 기준을 제시합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Temperature Reduction Card */}
            <Card className="text-center hover:shadow-md transition-shadow border-t-2 border-blue-600">
              <CardHeader>
                <Thermometer className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">온도 저감</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">6-8°C</div>
                <CardDescription className="text-sm text-gray-600">
                  여름철 차량 실내 온도를 평균 6~8°C 낮춰 쾌적한 환경을 제공합니다.
                </CardDescription>
                <div className="mt-3 text-xs text-gray-500">
                  실험 검증 완료
                </div>
              </CardContent>
            </Card>

            {/* Safety Protection Card */}
            <Card className="text-center hover:shadow-md transition-shadow border-t-2 border-blue-600">
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">안전 보호</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                <CardDescription className="text-sm text-gray-600">
                  영유아와 반려동물을 위한 안전한 차량 환경을 조성합니다.
                </CardDescription>
                <div className="mt-3 text-xs text-gray-500">
                  UV 차단 효과
                </div>
              </CardContent>
            </Card>

            {/* Easy Installation Card */}
            <Card className="text-center hover:shadow-md transition-shadow border-t-2 border-blue-600">
              <CardHeader>
                <Zap className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">간편 설치</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">10초</div>
                <CardDescription className="text-sm text-gray-600">
                  원터치 우산형 구조로 10초 이내 설치 및 철거가 가능합니다.
                </CardDescription>
                <div className="mt-3 text-xs text-gray-500">
                  특허 출원 중
                </div>
              </CardContent>
            </Card>

            {/* User-Centered Card */}
            <Card className="text-center hover:shadow-md transition-shadow border-t-2 border-blue-600">
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg">사용자 중심</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">200+</div>
                <CardDescription className="text-sm text-gray-600">
                  실제 사용자 피드백을 반영한 인체공학적 설계를 적용했습니다.
                </CardDescription>
                <div className="mt-3 text-xs text-gray-500">
                  베타 테스터 참여
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">에너지 절약</h4>
              <p className="text-sm text-gray-600 mb-2">
                차량 에어컨 사용 시간을 줄여 연료 효율을 개선하고 탄소 배출을 감소시킵니다.
              </p>
              <div className="text-xs text-gray-500">
                평균 에어컨 가동 시간 30% 감소
              </div>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">내구성</h4>
              <p className="text-sm text-gray-600 mb-2">
                마이크로캡슐화 공정으로 PCM의 누출을 방지하고 장기간 성능을 유지합니다.
              </p>
              <div className="text-xs text-gray-500">
                3년 이상 성능 보장
              </div>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">다목적 활용</h4>
              <p className="text-sm text-gray-600 mb-2">
                차량뿐만 아니라 캠핑, 아웃도어 활동 등 다양한 환경에서 활용 가능합니다.
              </p>
              <div className="text-xs text-gray-500">
                휴대용 케이스 포함
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full mb-4 border border-gray-200 shadow-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">실험 검증 완료</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                PCM 기술의 혁신
              </h2>
              <p className="text-base text-gray-600 mb-6">
                상변화물질(PCM)과 열반사 원단을 결합한 복합 소재로
                기존 썬쉐이드 대비 월등한 냉각 성능을 구현했습니다.
              </p>

              {/* Technical specifications */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <Thermometer className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">상변화 온도 범위</div>
                    <div className="text-sm text-gray-600">28-32°C 파라핀계 PCM 적용</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <Shield className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">내구성 기술</div>
                    <div className="text-sm text-gray-600">마이크로캡슐화 공정 (직경 5-10μm)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <Zap className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">지속 시간</div>
                    <div className="text-sm text-gray-600">2시간 이상 냉감 효과 유지</div>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/science">자세히 알아보기</Link>
              </Button>
            </div>

            {/* Thermal comparison */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">열 저감 성능 비교</h3>
                <p className="text-sm text-gray-500">실험 조건: 900W/m² / 외기온 33°C / 60분</p>
              </div>

              <div className="space-y-4">
                {/* Standard sunshade */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">일반 썬쉐이드</span>
                    <span className="text-sm font-semibold text-red-600">-2.5°C</span>
                  </div>
                  <div className="relative h-8 bg-red-100 rounded-lg border border-red-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold text-red-700">42.5°C</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">열 흡수율: ~65%</div>
                </div>

                {/* SOLUNA PCM sunshade */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-gray-900">솔루나 PCM 썬쉐이드</span>
                    <span className="text-sm font-bold text-blue-600">-7.0°C</span>
                  </div>
                  <div className="relative h-9 bg-blue-50 rounded-lg border-2 border-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-700">38.0°C</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 font-medium">열 흡수율: ~38% (▼ 42% 감소)</div>
                </div>

                {/* Performance metric */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">성능 개선율</span>
                    <span className="text-xl font-bold text-blue-600">+180%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Validation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 border border-gray-200 shadow-sm">
              <Activity className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">과학적 검증</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              실험 데이터로 입증된 성능
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              엄격한 실험 환경에서 측정된 열 저감 성능과 PCM 기술의 효과를 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* PCM Layer Diagram */}
            <PCMLayerDiagram />

            {/* Experimental Data Graphs */}
            <div className="space-y-6">
              {/* Time-based temperature curve */}
              <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">온도 변화 곡선</h4>
                <p className="text-sm text-gray-600 mb-4 data-label">시간별 차량 내부 온도 (외기온 33°C)</p>

                <div className="relative h-64 bg-gradient-to-b from-gray-50 to-white rounded-lg p-4 border border-gray-200">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
                    <span>50°C</span>
                    <span>45°C</span>
                    <span>40°C</span>
                    <span>35°C</span>
                    <span>30°C</span>
                  </div>

                  {/* Graph area */}
                  <div className="ml-12 h-full relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border-t border-gray-200"></div>
                      ))}
                    </div>

                    {/* Standard sunshade curve (red) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d="M 0,30 Q 25,15 50,10 T 100,8"
                        fill="none"
                        stroke="rgb(239, 68, 68)"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                    </svg>

                    {/* SOLUNA PCM curve (blue) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d="M 0,30 Q 25,35 50,45 T 100,50"
                        fill="none"
                        stroke="rgb(37, 99, 235)"
                        strokeWidth="3"
                      />
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-0.5 bg-red-500"></div>
                        <span className="text-xs text-gray-700">일반 썬쉐이드</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-blue-600"></div>
                        <span className="text-xs font-semibold text-gray-900">솔루나 PCM</span>
                      </div>
                    </div>
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-500 pt-2">
                    <span>0분</span>
                    <span>30분</span>
                    <span>60분</span>
                    <span>90분</span>
                    <span>120분</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-blue-900">핵심:</span> PCM 상변화 구간(28-32°C)에서
                    온도 상승 속도가 현저히 감소하며, 2시간 이상 냉감 효과가 지속됩니다.
                  </p>
                </div>
              </div>

              {/* Heat flux comparison */}
              <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">열류량 저감 효과</h4>
                <p className="text-sm text-gray-600 mb-4 data-label">단위 면적당 열 전달량 (W/m²)</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-700">통제군 (썬쉐이드 없음)</span>
                      <span className="text-sm font-bold text-red-600 data-label">580 W/m²</span>
                    </div>
                    <div className="w-full h-6 bg-gradient-to-r from-red-600 to-orange-500 rounded shadow-inner"></div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-700">일반 썬쉐이드</span>
                      <span className="text-sm font-bold text-orange-600 data-label">380 W/m²</span>
                    </div>
                    <div className="w-2/3 h-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded shadow-inner"></div>
                    <div className="text-xs text-gray-500 mt-1">▼ 34% 감소</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-900">솔루나 PCM 썬쉐이드</span>
                      <span className="text-sm font-bold text-blue-600 data-label">220 W/m²</span>
                    </div>
                    <div className="w-2/5 h-7 bg-blue-600 rounded shadow-lg"></div>
                    <div className="text-xs text-blue-700 font-semibold mt-1">▼ 62% 감소 (통제군 대비)</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                    <TrendingDown className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">42%</div>
                    <div className="text-xs text-gray-600">열 흡수율 감소</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                    <Thermometer className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">7.0°C</div>
                    <div className="text-xs text-gray-600">평균 온도 저감</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experimental conditions footer */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-gray-600 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold text-gray-900 mb-3 text-sm">실험 조건 및 방법</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">조사 강도:</span> 900 W/m²
                  </div>
                  <div>
                    <span className="font-medium">외기 온도:</span> 33°C ± 1°C
                  </div>
                  <div>
                    <span className="font-medium">측정 시간:</span> 120분
                  </div>
                  <div>
                    <span className="font-medium">측정 장비:</span> FLIR E8-XT
                  </div>
                  <div>
                    <span className="font-medium">열전대:</span> K-type, 16채널
                  </div>
                  <div>
                    <span className="font-medium">반복 횟수:</span> 5회
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            솔루나와 함께 시작하세요
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            베타 테스트에 참여하여 혁신적인 PCM 기술을 먼저 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="bg-white text-slate-900 hover:bg-gray-100">
              <Link href="/beta">베타 테스트 신청</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-2 border-white hover:bg-white hover:text-slate-900">
              <Link href="/partners">파트너십 문의</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
