import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Thermometer, Wind, Droplets, Activity, TrendingDown, ArrowRight } from 'lucide-react'
import ThermalFlowSimulation from '@/components/ThermalFlowSimulation'
import HeatTransferAnalysis from '@/components/HeatTransferAnalysis'

export const metadata = {
  title: '열전달 시뮬레이션 - 솔루나',
  description: 'PCM 코팅 열반사 복합소재의 열전달 및 냉각 해석, CFD 시뮬레이션 결과',
}

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-500 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Activity className="h-5 w-5 text-cyan-300" />
              <span className="text-sm font-semibold text-cyan-100">전산유체역학 (CFD) 해석</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              열전달 · 냉각 해석 시뮬레이션
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              PCM 코팅 · 열반사 복합소재의 열유동 해석을 통한 과학적 성능 검증
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Thermometer className="h-8 w-8 text-cyan-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">7.0°C</div>
                <div className="text-sm text-cyan-200">온도 저감 효과</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Wind className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">62%</div>
                <div className="text-sm text-blue-200">열류량 차단율</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Droplets className="h-8 w-8 text-teal-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">28-32°C</div>
                <div className="text-sm text-teal-200">PCM 상변화 구간</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFD Simulation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              전산유체역학 (CFD) 시뮬레이션
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ANSYS Fluent를 활용한 열전달 및 유동장 해석으로 PCM 복합소재의 냉각 성능을 정밀 분석했습니다.
            </p>
          </div>

          {/* Thermal Flow Visualization Component */}
          <ThermalFlowSimulation />

          {/* Simulation Parameters */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-cyan-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-cyan-600" />
                  시뮬레이션 조건
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">태양 복사열</span>
                    <span className="text-sm font-bold text-gray-900 data-label">900 W/m²</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">외기 온도</span>
                    <span className="text-sm font-bold text-gray-900 data-label">33°C</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">초기 차량 내부 온도</span>
                    <span className="text-sm font-bold text-gray-900 data-label">25°C</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">시뮬레이션 시간</span>
                    <span className="text-sm font-bold text-gray-900 data-label">120분</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">메쉬 요소 수</span>
                    <span className="text-sm font-bold text-gray-900 data-label">2.5M cells</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-blue-600" />
                  해석 모델
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-1">난류 모델</div>
                    <div className="text-sm text-gray-600">k-ε Realizable 모델</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-1">복사 모델</div>
                    <div className="text-sm text-gray-600">Discrete Ordinates (DO)</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-1">PCM 모델링</div>
                    <div className="text-sm text-gray-600">Enthalpy-Porosity 기법</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-1">해석 소프트웨어</div>
                    <div className="text-sm text-gray-600">ANSYS Fluent 2023 R1</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heat Transfer Analysis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              열전달 메커니즘 분석
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PCM 코팅 · 열반사 복합소재의 3가지 열전달 메커니즘과 각각의 기여도를 분석합니다.
            </p>
          </div>

          {/* Heat Transfer Analysis Component */}
          <HeatTransferAnalysis />

          {/* Material Properties */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              PCM 복합소재 물성 데이터
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PCM Layer Properties */}
              <Card className="shadow-xl border-t-4 border-cyan-500">
                <CardHeader>
                  <CardTitle className="text-xl">PCM 마이크로캡슐층 물성</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-cyan-50 to-transparent rounded-lg">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-gray-600">열전도율 (k)</span>
                        <span className="font-bold text-gray-900 data-label">0.21 W/m·K</span>

                        <span className="text-gray-600">밀도 (ρ)</span>
                        <span className="font-bold text-gray-900 data-label">880 kg/m³</span>

                        <span className="text-gray-600">비열 (Cp)</span>
                        <span className="font-bold text-gray-900 data-label">2.1 kJ/kg·K</span>

                        <span className="text-gray-600">잠열 (ΔH)</span>
                        <span className="font-bold text-cyan-600 data-label">180 kJ/kg</span>

                        <span className="text-gray-600">상변화 온도</span>
                        <span className="font-bold text-cyan-600 data-label">28-32°C</span>

                        <span className="text-gray-600">층 두께</span>
                        <span className="font-bold text-gray-900 data-label">1.5 mm</span>
                      </div>
                    </div>

                    <div className="p-3 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold text-cyan-900">핵심:</span> 높은 잠열(180 kJ/kg)로
                        상변화 구간에서 대량의 열 에너지를 흡수하여 온도 상승을 억제합니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reflective Layer Properties */}
              <Card className="shadow-xl border-t-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl">열반사 외층 물성</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-gray-600">열전도율 (k)</span>
                        <span className="font-bold text-gray-900 data-label">0.15 W/m·K</span>

                        <span className="text-gray-600">밀도 (ρ)</span>
                        <span className="font-bold text-gray-900 data-label">950 kg/m³</span>

                        <span className="text-gray-600">비열 (Cp)</span>
                        <span className="font-bold text-gray-900 data-label">1.8 kJ/kg·K</span>

                        <span className="text-gray-600">태양광 반사율</span>
                        <span className="font-bold text-blue-600 data-label">85%</span>

                        <span className="text-gray-600">적외선 방사율</span>
                        <span className="font-bold text-blue-600 data-label">0.92</span>

                        <span className="text-gray-600">층 두께</span>
                        <span className="font-bold text-gray-900 data-label">0.8 mm</span>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold text-blue-900">핵심:</span> 높은 태양광 반사율(85%)로
                        입사 복사열의 대부분을 반사하여 열 유입을 원천 차단합니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Comparison */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              시뮬레이션 결과 종합
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CFD 해석 결과와 실험 데이터의 비교를 통한 시뮬레이션 신뢰성 검증
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-t-4 border-cyan-500 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <TrendingDown className="h-10 w-10 text-cyan-600 mx-auto mb-2" />
                <CardTitle className="text-lg">온도 저감 효과</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">시뮬레이션</div>
                    <div className="text-3xl font-bold text-cyan-600 data-label">7.2°C</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">실험 측정</div>
                    <div className="text-3xl font-bold text-gray-900 data-label">7.0°C</div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500">오차율</div>
                    <div className="text-lg font-bold text-green-600">2.9%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <Wind className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">열류량 차단율</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">시뮬레이션</div>
                    <div className="text-3xl font-bold text-blue-600 data-label">63.5%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">실험 측정</div>
                    <div className="text-3xl font-bold text-gray-900 data-label">62.1%</div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500">오차율</div>
                    <div className="text-lg font-bold text-green-600">2.3%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-teal-500 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <Thermometer className="h-10 w-10 text-teal-600 mx-auto mb-2" />
                <CardTitle className="text-lg">최종 평형 온도</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">시뮬레이션</div>
                    <div className="text-3xl font-bold text-teal-600 data-label">37.8°C</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">실험 측정</div>
                    <div className="text-3xl font-bold text-gray-900 data-label">38.2°C</div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500">오차율</div>
                    <div className="text-lg font-bold text-green-600">1.0%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Validation Statement */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">시뮬레이션 검증 완료</h3>
                  <p className="text-gray-700 mb-4">
                    CFD 해석 결과가 실험 데이터와 높은 일치도(평균 오차율 2.1%)를 보여,
                    시뮬레이션 모델의 신뢰성이 검증되었습니다. 이를 통해 다양한 조건에서의
                    성능 예측과 최적화 설계에 활용 가능합니다.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="px-3 py-1 bg-white rounded-full border border-green-200">
                      <span className="text-gray-600">검증 방법:</span>
                      <span className="font-semibold text-gray-900 ml-1">실험 데이터 교차 검증</span>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-full border border-green-200">
                      <span className="text-gray-600">신뢰 수준:</span>
                      <span className="font-semibold text-green-600 ml-1">95% 이상</span>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-full border border-green-200">
                      <span className="text-gray-600">반복 횟수:</span>
                      <span className="font-semibold text-gray-900 ml-1">5회</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              더 자세한 기술 정보가 필요하신가요?
            </h2>
            <p className="text-lg text-gray-600">
              시뮬레이션 원본 데이터와 상세 보고서를 확인하실 수 있습니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              <Link href="/science">기술 상세 보기</Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              <Link href="/partners">기술 협력 문의</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
