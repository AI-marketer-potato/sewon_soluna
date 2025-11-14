'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Waves, Wind, Zap } from 'lucide-react'

export default function HeatTransferAnalysis() {
  const heatTransferMechanisms = [
    {
      name: '복사 열전달',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      borderColor: 'border-orange-500',
      bgColor: 'from-orange-50 to-yellow-50',
      contribution: 65,
      description: '태양 복사열이 열반사층에서 85% 반사',
      formula: 'q_rad = εσA(T₁⁴ - T₂⁴)',
      details: [
        '열반사 외층: 반사율 85%, 방사율 0.92',
        '입사 복사열: 900 W/m²',
        '차단 복사열: 765 W/m² (85%)',
        '투과 복사열: 135 W/m² (15%)'
      ]
    },
    {
      name: '전도 열전달',
      icon: Waves,
      color: 'from-blue-400 to-cyan-500',
      borderColor: 'border-cyan-500',
      bgColor: 'from-cyan-50 to-blue-50',
      contribution: 25,
      description: 'PCM층의 낮은 열전도율로 열 전달 저항 증가',
      formula: 'q_cond = kA(T₁ - T₂)/L',
      details: [
        'PCM 열전도율: k = 0.21 W/m·K',
        '층 두께: L = 1.5 mm',
        '열전달 계수: h = 140 W/m²·K',
        '열저항: R = 0.0071 m²·K/W'
      ]
    },
    {
      name: '대류 열전달',
      icon: Wind,
      color: 'from-teal-400 to-green-500',
      borderColor: 'border-teal-500',
      bgColor: 'from-teal-50 to-green-50',
      contribution: 10,
      description: 'PCM 상변화로 온도 구배 감소, 자연대류 억제',
      formula: 'q_conv = hA(T_s - T_∞)',
      details: [
        '자연대류 계수: h = 5-10 W/m²·K',
        '온도 차이 감소: ΔT ↓ 35%',
        'Grashof 수 감소: Gr ↓ 40%',
        '대류 열전달량: q ↓ 42%'
      ]
    }
  ]

  const phaseChangeProcess = [
    { stage: '고체 상태', temp: '< 28°C', state: '잠열 저장', color: 'bg-blue-400' },
    { stage: '상변화 시작', temp: '28°C', state: '흡열 시작', color: 'bg-cyan-400' },
    { stage: '상변화 진행', temp: '28-32°C', state: '잠열 흡수', color: 'bg-teal-400' },
    { stage: '액체 상태', temp: '> 32°C', state: '현열 증가', color: 'bg-green-400' }
  ]

  return (
    <div className="space-y-8">
      {/* Heat Transfer Mechanisms */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {heatTransferMechanisms.map((mechanism, idx) => (
          <Card key={idx} className={`shadow-xl border-t-4 ${mechanism.borderColor} hover:shadow-2xl transition-shadow`}>
            <CardContent className="p-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${mechanism.color} mb-4 shadow-lg`}>
                <mechanism.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{mechanism.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{mechanism.description}</p>

              {/* Contribution percentage */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">기여도</span>
                  <span className="text-2xl font-bold text-gray-900">{mechanism.contribution}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${mechanism.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${mechanism.contribution}%` }}
                  ></div>
                </div>
              </div>

              {/* Formula */}
              <div className={`p-3 bg-gradient-to-r ${mechanism.bgColor} rounded-lg mb-4 border-l-4 ${mechanism.borderColor}`}>
                <div className="text-xs text-gray-600 mb-1">지배 방정식</div>
                <div className="font-mono text-sm font-bold text-gray-900">{mechanism.formula}</div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                {mechanism.details.map((detail, detailIdx) => (
                  <div key={detailIdx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Heat Transfer Flow Diagram */}
      <Card className="shadow-xl border border-gray-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            열전달 메커니즘 흐름도
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Input */}
            <div className="flex-shrink-0">
              <div className="text-center p-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-xl text-white">
                <div className="text-sm font-semibold mb-2">입사 태양 복사열</div>
                <div className="text-4xl font-bold mb-1">900</div>
                <div className="text-sm">W/m²</div>
              </div>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400 transform md:rotate-0 rotate-90" />

            {/* Radiation blocking */}
            <div className="flex-1 max-w-xs">
              <div className="text-center p-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl shadow-lg text-white mb-2">
                <div className="text-sm font-semibold mb-1">열반사층 차단</div>
                <div className="text-3xl font-bold">765 W/m²</div>
                <div className="text-xs mt-1">(85% 반사)</div>
              </div>
              <div className="text-center text-sm text-gray-600 font-semibold">↓ 복사 열전달</div>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400 transform md:rotate-0 rotate-90" />

            {/* PCM absorption */}
            <div className="flex-1 max-w-xs">
              <div className="text-center p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg text-white mb-2">
                <div className="text-sm font-semibold mb-1">PCM층 흡수</div>
                <div className="text-3xl font-bold">90 W/m²</div>
                <div className="text-xs mt-1">(잠열 흡수)</div>
              </div>
              <div className="text-center text-sm text-gray-600 font-semibold">↓ 전도 + 상변화</div>
            </div>

            <ArrowRight className="h-8 w-8 text-gray-400 transform md:rotate-0 rotate-90" />

            {/* Output */}
            <div className="flex-shrink-0">
              <div className="text-center p-6 bg-gradient-to-br from-teal-400 to-green-500 rounded-xl shadow-xl text-white">
                <div className="text-sm font-semibold mb-2">차량 내부 투과</div>
                <div className="text-4xl font-bold mb-1">45</div>
                <div className="text-sm">W/m²</div>
              </div>
            </div>
          </div>

          {/* Overall efficiency */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-1">총 열차단 효율</div>
                <div className="text-3xl font-bold text-green-600">95.0%</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">에너지 절감량</div>
                <div className="text-3xl font-bold text-green-600">855 W/m²</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PCM Phase Change Process */}
      <Card className="shadow-xl border border-gray-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            PCM 상변화 과정
          </h3>

          <div className="space-y-6">
            {/* Phase change diagram */}
            <div className="flex items-center justify-between gap-4">
              {phaseChangeProcess.map((phase, idx) => (
                <div key={idx} className="flex-1">
                  <div className={`${phase.color} rounded-lg p-4 shadow-lg text-white text-center mb-3`}>
                    <div className="font-bold text-lg mb-1">{phase.stage}</div>
                    <div className="text-sm data-label">{phase.temp}</div>
                  </div>
                  <div className="text-center text-sm font-semibold text-gray-700">{phase.state}</div>
                  {idx < phaseChangeProcess.length - 1 && (
                    <div className="flex justify-center mt-2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>


            {/* Key insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
                <div className="font-semibold text-gray-900 mb-2">온도 평탄화 효과</div>
                <div className="text-sm text-gray-600">
                  28-32°C 구간에서 PCM이 액체로 상변화하며 대량의 잠열(180 kJ/kg)을 흡수.
                  이로 인해 온도 상승 속도가 현저히 감소하여 온도가 평탄하게 유지됩니다.
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div className="font-semibold text-gray-900 mb-2">열 저장 용량</div>
                <div className="text-sm text-gray-600">
                  PCM 1kg당 180 kJ의 열 에너지를 저장 가능. 일반 소재 대비 약 60배 높은
                  열 저장 밀도로 장시간 냉각 효과를 유지할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
