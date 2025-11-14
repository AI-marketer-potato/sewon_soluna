import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Thermometer, Shield, Zap, Users, Activity, TrendingDown } from 'lucide-react'
import PCMLayerDiagram from '@/components/PCMLayerDiagram'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Thermal Visualization */}
      <section className="relative thermal-overlay bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 pt-32 pb-24 overflow-hidden">
        {/* Thermal overlay effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-cyan-200 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-200 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-radial from-teal-200 to-transparent rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Temperature indicator badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full shadow-xl mb-6 border border-cyan-200/50 hover:shadow-2xl transition-all duration-300 hover-lift animate-fade-in-scale">
              <Thermometer className="h-5 w-5 text-cyan-600 animate-pulse" />
              <span className="data-label text-cyan-900">28-32°C 상변화 기술</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              차세대 자동차 냉각 솔루션
              <span className="block gradient-text-animated mt-2" style={{animationDelay: '0.2s'}}>솔루나</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              PCM(상변화물질) 기술을 활용한 혁신적인 차량용 썬쉐이드로
              여름철 차량 실내 온도를 <span className="font-bold text-cyan-600 relative">
                평균 6~8°C 낮춰
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
              </span> 안전하고 쾌적한 드라이빙을 제공합니다.
            </p>

            {/* Temperature reduction visual indicator */}
            <div className="flex justify-center items-center gap-6 mb-8 animate-fade-in-scale" style={{animationDelay: '0.4s'}}>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 shadow-lg hover-lift">
                <div className="text-4xl font-bold text-red-500 mb-1">45°C</div>
                <div className="text-sm text-gray-600">일반 차량</div>
              </div>
              <div className="text-3xl text-cyan-500 font-bold animate-pulse">→</div>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-300 shadow-xl hover-lift">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">37-39°C</div>
                <div className="text-sm text-gray-700 font-semibold">솔루나 적용</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Link href="/science">기술 알아보기</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-cyan-600 text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:border-cyan-700 transform hover:scale-105 transition-all duration-300">
                <Link href="/beta">베타 테스트 참여</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Progressive Disclosure */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              왜 솔루나인가요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              혁신적인 PCM 기술과 열반사 원단을 결합한 원터치 우산형 썬쉐이드로
              차량 냉각의 새로운 기준을 제시합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Temperature Reduction Card */}
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-t-4 border-cyan-500 group cursor-pointer hover-lift bg-gradient-to-b from-white to-cyan-50/30 hover:from-cyan-50/50 hover:to-white">
              <CardHeader>
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-100 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                  <Thermometer className="h-12 w-12 text-cyan-600 mx-auto mb-4 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <CardTitle className="text-xl group-hover:text-cyan-700 transition-colors">온도 저감</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600 mb-2">6-8°C</div>
                <CardDescription className="text-gray-600">
                  여름철 차량 실내 온도를 평균 6~8°C 낮춰 쾌적한 환경을 제공합니다.
                </CardDescription>
                <div className="mt-4 p-2 bg-cyan-50 rounded text-xs text-cyan-800">
                  실험 검증 완료
                </div>
              </CardContent>
            </Card>

            {/* Safety Protection Card */}
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-500 group cursor-pointer hover-lift bg-gradient-to-b from-white to-blue-50/30 hover:from-blue-50/50 hover:to-white">
              <CardHeader>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">안전 보호</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <CardDescription className="text-gray-600">
                  영유아와 반려동물을 위한 안전한 차량 환경을 조성합니다.
                </CardDescription>
                <div className="mt-4 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  UV 차단 효과
                </div>
              </CardContent>
            </Card>

            {/* Easy Installation Card */}
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-t-4 border-teal-500 group cursor-pointer hover-lift bg-gradient-to-b from-white to-teal-50/30 hover:from-teal-50/50 hover:to-white">
              <CardHeader>
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-100 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                  <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <CardTitle className="text-xl group-hover:text-teal-700 transition-colors">간편 설치</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-teal-600 mb-2">10초</div>
                <CardDescription className="text-gray-600">
                  원터치 우산형 구조로 10초 이내 설치 및 철거가 가능합니다.
                </CardDescription>
                <div className="mt-4 p-2 bg-teal-50 rounded text-xs text-teal-800">
                  특허 출원 중
                </div>
              </CardContent>
            </Card>

            {/* User-Centered Card */}
            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-t-4 border-indigo-500 group cursor-pointer hover-lift bg-gradient-to-b from-white to-indigo-50/30 hover:from-indigo-50/50 hover:to-white">
              <CardHeader>
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-100 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                  <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                </div>
                <CardTitle className="text-xl group-hover:text-indigo-700 transition-colors">사용자 중심</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
                <CardDescription className="text-gray-600">
                  실제 사용자 피드백을 반영한 인체공학적 설계를 적용했습니다.
                </CardDescription>
                <div className="mt-4 p-2 bg-indigo-50 rounded text-xs text-indigo-800">
                  베타 테스터 참여
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional benefits with disclosure pattern */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-cyan-500 hover:shadow-2xl transition-all duration-300 hover-lift group">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">에너지 절약</h4>
              <p className="text-sm text-gray-600 mb-3">
                차량 에어컨 사용 시간을 줄여 연료 효율을 개선하고 탄소 배출을 감소시킵니다.
              </p>
              <div className="flex items-center gap-2 text-xs text-cyan-700">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>평균 에어컨 가동 시간 30% 감소</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover-lift group">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">내구성</h4>
              <p className="text-sm text-gray-600 mb-3">
                마이크로캡슐화 공정으로 PCM의 누출을 방지하고 장기간 성능을 유지합니다.
              </p>
              <div className="flex items-center gap-2 text-xs text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>3년 이상 성능 보장</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-2xl transition-all duration-300 hover-lift group">
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">다목적 활용</h4>
              <p className="text-sm text-gray-600 mb-3">
                차량뿐만 아니라 캠핑, 아웃도어 활동 등 다양한 환경에서 활용 가능합니다.
              </p>
              <div className="flex items-center gap-2 text-xs text-teal-700">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>휴대용 케이스 포함</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Preview with Thermal Imaging Style */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 glass-dark rounded-full mb-4 border border-cyan-200/50 shadow-lg">
                <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
                <span className="text-sm font-semibold text-cyan-900">실험 검증 완료</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                PCM 기술의 혁신
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                상변화물질(PCM)과 열반사 원단을 결합한 복합 소재로
                기존 썬쉐이드 대비 월등한 냉각 성능을 구현했습니다.
              </p>

              {/* Technical specifications with scientific styling */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-50 to-transparent rounded-lg border-l-4 border-cyan-500">
                  <Thermometer className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">상변화 온도 범위</div>
                    <div className="text-sm text-gray-600 data-label">28-32°C 파라핀계 PCM 적용</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-blue-500">
                  <Shield className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">내구성 기술</div>
                    <div className="text-sm text-gray-600">마이크로캡슐화 공정 (직경 5-10μm)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-transparent rounded-lg border-l-4 border-teal-500">
                  <Zap className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">지속 시간</div>
                    <div className="text-sm text-gray-600">2시간 이상 냉감 효과 유지</div>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Link href="/science">자세히 알아보기</Link>
              </Button>
            </div>

            {/* Thermal imaging style comparison */}
            <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover-lift">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">열 저감 성능 비교</h3>
                <p className="text-sm text-gray-500 data-label">실험 조건: 900W/m² / 외기온 33°C / 60분</p>
              </div>

              <div className="space-y-6">
                {/* Standard sunshade */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">일반 썬쉐이드</span>
                    <span className="text-sm font-bold text-red-600 data-label">-2.5°C</span>
                  </div>
                  <div className="relative h-8 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-lg shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white drop-shadow-lg data-label">42.5°C</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">열 흡수율: ~65%</div>
                </div>

                {/* SOLUNA PCM sunshade */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-gray-900">솔루나 PCM 썬쉐이드</span>
                    <span className="text-sm font-bold text-cyan-600 data-label">-7.0°C</span>
                  </div>
                  <div className="relative h-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 rounded-lg shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-white drop-shadow-lg data-label">38.0°C</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 font-semibold">열 흡수율: ~38% (▼ 42% 감소)</div>
                </div>

                {/* Divider with performance metric */}
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <div className="flex justify-between items-center bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
                    <span className="font-bold text-gray-900">성능 개선율</span>
                    <span className="text-2xl font-bold text-cyan-600">+180%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Validation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-4">
              <Activity className="h-5 w-5 text-cyan-700" />
              <span className="font-semibold text-cyan-900">과학적 검증</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              실험 데이터로 입증된 성능
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

                    {/* SOLUNA PCM curve (cyan) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d="M 0,30 Q 25,35 50,45 T 100,50"
                        fill="none"
                        stroke="rgb(6, 182, 212)"
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
                        <div className="w-4 h-0.5 bg-cyan-500"></div>
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

                <div className="mt-4 p-3 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-cyan-900">핵심:</span> PCM 상변화 구간(28-32°C)에서
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
                      <span className="text-sm font-bold text-cyan-600 data-label">220 W/m²</span>
                    </div>
                    <div className="w-2/5 h-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded shadow-lg"></div>
                    <div className="text-xs text-cyan-700 font-semibold mt-1">▼ 62% 감소 (통제군 대비)</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg text-center">
                    <TrendingDown className="h-6 w-6 text-cyan-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-cyan-600">42%</div>
                    <div className="text-xs text-gray-600">열 흡수율 감소</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg text-center">
                    <Thermometer className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">7.0°C</div>
                    <div className="text-xs text-gray-600">평균 온도 저감</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experimental conditions footer */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-gray-600 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-gray-900 mb-2">실험 조건 및 방법</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold">조사 강도:</span> 900 W/m² (한여름 정오)
                  </div>
                  <div>
                    <span className="font-semibold">외기 온도:</span> 33°C ± 1°C
                  </div>
                  <div>
                    <span className="font-semibold">측정 시간:</span> 120분 연속
                  </div>
                  <div>
                    <span className="font-semibold">측정 장비:</span> 열화상 카메라 (FLIR E8-XT)
                  </div>
                  <div>
                    <span className="font-semibold">열전대:</span> K-type, 16채널
                  </div>
                  <div>
                    <span className="font-semibold">실험 횟수:</span> 각 조건 5회 반복
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 py-20 overflow-hidden animate-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            솔루나와 함께 시작하세요
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            베타 테스트에 참여하여 혁신적인 PCM 기술을 먼저 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button variant="secondary" size="lg" asChild className="bg-white text-cyan-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link href="/beta">베타 테스트 신청</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-2 border-white hover:bg-white hover:text-cyan-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/partners">파트너십 문의</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
