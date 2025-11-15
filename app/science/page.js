'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Thermometer, Droplets, Shield, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'

const TemperatureCurve = dynamic(() => import('@/components/charts/TemperatureCurve'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>
})

const DeltaHistogram = dynamic(() => import('@/components/charts/DeltaHistogram'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>
})

// PCM 작동 원리 SVG 다이어그램 - 전문적 디자인
function PCMDiagram() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox="0 0 600 360" className="w-full h-auto">
        {/* 그리드 배경 */}
        <defs>
          <pattern id="pcmGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
          </pattern>
          <marker id="heatArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#374151"/>
          </marker>
        </defs>
        <rect width="600" height="360" fill="white"/>
        <rect width="600" height="360" fill="url(#pcmGrid)" opacity="0.5"/>

        {/* 제목 */}
        <text x="300" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-900" letterSpacing="1">
          PCM 상변화 메커니즘
        </text>

        {/* 고체 상태 박스 */}
        <g>
          <rect x="60" y="70" width="150" height="90" fill="none" stroke="#0891b2" strokeWidth="2"/>
          <line x1="60" y1="70" x2="210" y2="160" stroke="#0891b2" strokeWidth="0.5" opacity="0.3"/>
          <line x1="60" y1="160" x2="210" y2="70" stroke="#0891b2" strokeWidth="0.5" opacity="0.3"/>

          <text x="135" y="55" textAnchor="middle" className="text-sm font-semibold fill-gray-800">고체 상태 (Solid)</text>
          <text x="135" y="95" textAnchor="middle" className="text-xs fill-gray-700">T &lt; 28°C</text>
          <text x="135" y="180" textAnchor="middle" className="text-xs fill-gray-600">규칙적 배열 구조</text>

          {/* 격자 구조 분자 배열 */}
          <g opacity="0.7">
            <circle cx="95" cy="115" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="115" cy="115" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="135" cy="115" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="155" cy="115" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="175" cy="115" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="95" cy="135" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="115" cy="135" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="135" cy="135" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="155" cy="135" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>
            <circle cx="175" cy="135" r="4" fill="#0891b2" stroke="#06b6d4" strokeWidth="1"/>

            {/* 격자 연결선 */}
            <line x1="95" y1="115" x2="175" y2="115" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5"/>
            <line x1="95" y1="135" x2="175" y2="135" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5"/>
            <line x1="95" y1="115" x2="95" y2="135" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5"/>
            <line x1="175" y1="115" x2="175" y2="135" stroke="#06b6d4" strokeWidth="0.5" opacity="0.5"/>
          </g>
        </g>

        {/* 열 전달 화살표 - 기술적 스타일 */}
        <g>
          <line x1="220" y1="115" x2="370" y2="115" stroke="#374151" strokeWidth="2" markerEnd="url(#heatArrow)"/>
          <text x="295" y="105" textAnchor="middle" className="text-xs font-semibold fill-gray-700">열 에너지 흡수</text>
          <text x="295" y="130" textAnchor="middle" className="text-xs fill-gray-600">Q = 180 kJ/kg</text>
        </g>

        {/* 액체 상태 박스 */}
        <g>
          <rect x="380" y="70" width="150" height="90" fill="none" stroke="#dc2626" strokeWidth="2"/>
          <line x1="380" y1="70" x2="530" y2="160" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
          <line x1="380" y1="160" x2="530" y2="70" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>

          <text x="455" y="55" textAnchor="middle" className="text-sm font-semibold fill-gray-800">액체 상태 (Liquid)</text>
          <text x="455" y="95" textAnchor="middle" className="text-xs fill-gray-700">T &gt; 32°C</text>
          <text x="455" y="180" textAnchor="middle" className="text-xs fill-gray-600">무질서 배열 구조</text>

          {/* 무작위 분자 배열 */}
          <g opacity="0.7">
            <circle cx="405" cy="110" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="430" cy="120" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="445" cy="108" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="470" cy="125" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="490" cy="115" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="510" cy="122" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="420" cy="140" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="450" cy="135" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="480" cy="145" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
            <circle cx="505" cy="138" r="4" fill="#dc2626" stroke="#ef4444" strokeWidth="1"/>
          </g>
        </g>

        {/* 온도-시간 프로파일 */}
        <g>
          <text x="300" y="208" textAnchor="middle" className="text-sm font-semibold fill-gray-900">
            온도-시간 프로파일
          </text>

          {/* 좌표축 */}
          <line x1="80" y1="305" x2="520" y2="305" stroke="#374151" strokeWidth="1.5"/>
          <line x1="80" y1="235" x2="80" y2="305" stroke="#374151" strokeWidth="1.5"/>

          {/* 축 화살표 */}
          <polygon points="525,305 520,302 520,308" fill="#374151"/>
          <polygon points="80,230 77,235 83,235" fill="#374151"/>

          {/* 온도 곡선 - 명확한 평탄 구간 */}
          <path d="M 90 295 L 180 265 L 240 250 L 360 250 L 420 235 L 510 220"
                fill="none" stroke="#059669" strokeWidth="3"/>

          {/* 데이터 포인트 */}
          <circle cx="90" cy="295" r="3" fill="#059669"/>
          <circle cx="180" cy="265" r="3" fill="#059669"/>
          <circle cx="240" cy="250" r="3" fill="#059669"/>
          <circle cx="360" cy="250" r="3" fill="#059669"/>
          <circle cx="420" cy="235" r="3" fill="#059669"/>
          <circle cx="510" cy="220" r="3" fill="#059669"/>

          {/* 상변화 구간 표시 */}
          <rect x="235" y="235" width="130" height="70" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2"/>

          {/* 상변화 구간 라벨 - 박스 위에 배치 */}
          <text x="300" y="226" textAnchor="middle" className="text-xs font-bold fill-gray-800">상변화 구간: 28-32°C (평탄화)</text>

          {/* 온도 구간 표시 - 더 아래로 */}
          <line x1="240" y1="310" x2="240" y2="318" stroke="#374151" strokeWidth="1"/>
          <line x1="360" y1="310" x2="360" y2="318" stroke="#374151" strokeWidth="1"/>
          <text x="240" y="332" textAnchor="middle" className="text-xs fill-gray-600">28°C</text>
          <text x="360" y="332" textAnchor="middle" className="text-xs fill-gray-600">32°C</text>

          {/* 축 라벨 - 간격 조정 */}
          <text x="45" y="272" className="text-xs fill-gray-700 font-semibold">온도</text>
          <text x="300" y="352" textAnchor="middle" className="text-xs fill-gray-700 font-semibold">시간</text>
        </g>
      </svg>
    </div>
  )
}

// 열반사 원단 구조 SVG - 전문적인 디자인
function FabricStructure() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <svg viewBox="0 0 800 320" className="w-full h-auto">
        {/* 배경 - 그리드 패턴 */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="800" height="320" fill="white"/>
        <rect width="800" height="320" fill="url(#grid)" opacity="0.5"/>

        {/* 제목 - 기술적 스타일 */}
        <text x="400" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-900" letterSpacing="1">
          PCM 복합 소재 단면 구조도
        </text>

        {/* 태양 복사 - 기술적 표현 */}
        <g>
          <rect x="30" y="100" width="60" height="60" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4"/>
          <text x="60" y="125" textAnchor="middle" className="text-base font-bold fill-gray-800">☀</text>
          <text x="60" y="145" textAnchor="middle" className="text-xs font-medium fill-gray-700">태양복사</text>
          <text x="60" y="157" textAnchor="middle" className="text-xs fill-gray-600">900 W/m²</text>
        </g>

        {/* 입사 화살표 */}
        <g>
          <line x1="95" y1="130" x2="175" y2="130" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)"/>
          <text x="135" y="122" textAnchor="middle" className="text-xs fill-gray-600">입사열</text>
        </g>

        {/* 썬쉐이드 구조 - 기술 도면 스타일 */}
        <g>
          {/* 열반사층 */}
          <rect x="185" y="95" width="280" height="18" fill="#e5e7eb" stroke="#6b7280" strokeWidth="1.5"/>
          <line x1="185" y1="95" x2="465" y2="113" stroke="#9ca3af" strokeWidth="0.5" opacity="0.5"/>
          <line x1="185" y1="113" x2="465" y2="95" stroke="#9ca3af" strokeWidth="0.5" opacity="0.5"/>

          <line x1="465" y1="104" x2="485" y2="104" stroke="#6b7280" strokeWidth="1"/>
          <text x="490" y="108" className="text-sm font-semibold fill-gray-800">열반사층 (Al coating)</text>

          {/* PCM층 */}
          <rect x="185" y="125" width="280" height="24" fill="#06b6d4" fillOpacity="0.3" stroke="#0891b2" strokeWidth="1.5"/>

          {/* PCM 마이크로캡슐 패턴 */}
          <g opacity="0.6">
            <circle cx="205" cy="137" r="3" fill="#0891b2"/>
            <circle cx="230" cy="137" r="3" fill="#0891b2"/>
            <circle cx="255" cy="137" r="3" fill="#0891b2"/>
            <circle cx="280" cy="137" r="3" fill="#0891b2"/>
            <circle cx="305" cy="137" r="3" fill="#0891b2"/>
            <circle cx="330" cy="137" r="3" fill="#0891b2"/>
            <circle cx="355" cy="137" r="3" fill="#0891b2"/>
            <circle cx="380" cy="137" r="3" fill="#0891b2"/>
            <circle cx="405" cy="137" r="3" fill="#0891b2"/>
            <circle cx="430" cy="137" r="3" fill="#0891b2"/>
            <circle cx="455" cy="137" r="3" fill="#0891b2"/>
          </g>

          <line x1="465" y1="137" x2="485" y2="137" stroke="#0891b2" strokeWidth="1"/>
          <text x="490" y="141" className="text-sm font-semibold fill-gray-800">PCM 마이크로캡슐층</text>

          {/* 지지 원단 */}
          <rect x="185" y="161" width="280" height="16" fill="#52525b" stroke="#27272a" strokeWidth="1.5"/>
          <line x1="195" y1="161" x2="195" y2="177" stroke="#71717a" strokeWidth="1"/>
          <line x1="220" y1="161" x2="220" y2="177" stroke="#71717a" strokeWidth="1"/>
          <line x1="245" y1="161" x2="245" y2="177" stroke="#71717a" strokeWidth="1"/>

          <line x1="465" y1="169" x2="485" y2="169" stroke="#27272a" strokeWidth="1"/>
          <text x="490" y="173" className="text-sm font-semibold fill-gray-800">지지 원단 (Polyester)</text>
        </g>

        {/* 반사 화살표 - 기술적 스타일 */}
        <g>
          <line x1="280" y1="95" x2="250" y2="50" stroke="#d97706" strokeWidth="2" markerEnd="url(#arrowYellow)" strokeDasharray="3,2"/>
          <text x="230" y="45" className="text-xs font-medium fill-gray-700">반사열 (85%)</text>
        </g>

        {/* 투과 화살표 */}
        <g>
          <line x1="325" y1="177" x2="325" y2="205" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)"/>
          <text x="338" y="193" className="text-xs fill-gray-600">투과열 (15%)</text>
        </g>

        {/* 치수 표시 - 가장 오른쪽으로 이동 */}
        <g>
          <line x1="670" y1="95" x2="695" y2="95" stroke="#9ca3af" strokeWidth="0.5"/>
          <line x1="670" y1="113" x2="695" y2="113" stroke="#9ca3af" strokeWidth="0.5"/>
          <line x1="683" y1="95" x2="683" y2="113" stroke="#9ca3af" strokeWidth="1" markerStart="url(#dimArrow)" markerEnd="url(#dimArrow)"/>
          <text x="700" y="106" className="text-xs fill-gray-500">0.5mm</text>

          <line x1="670" y1="125" x2="695" y2="125" stroke="#9ca3af" strokeWidth="0.5"/>
          <line x1="670" y1="149" x2="695" y2="149" stroke="#9ca3af" strokeWidth="0.5"/>
          <line x1="683" y1="125" x2="683" y2="149" stroke="#9ca3af" strokeWidth="1" markerStart="url(#dimArrow)" markerEnd="url(#dimArrow)"/>
          <text x="700" y="139" className="text-xs fill-gray-500">1.5mm</text>

          <line x1="670" y1="161" x2="695" y2="161" stroke="#9ca3af" strokeWidth="0.5"/>
          <line x1="670" y1="177" x2="695" y2="177" stroke="#9ca3af" strokeWidth="0.5"/>
          <line x1="683" y1="161" x2="683" y2="177" stroke="#9ca3af" strokeWidth="1" markerStart="url(#dimArrow)" markerEnd="url(#dimArrow)"/>
          <text x="700" y="171" className="text-xs fill-gray-500">1.0mm</text>
        </g>

        {/* 성능 지표 박스 */}
        <g>
          <rect x="50" y="220" width="700" height="80" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5"/>

          <text x="70" y="245" className="text-sm font-bold fill-gray-900">■ 열 차단 성능</text>
          <text x="70" y="265" className="text-xs fill-gray-700">복사열 차단: 85% (765 W/m²)</text>
          <text x="70" y="280" className="text-xs fill-gray-700">PCM 잠열 흡수: 180 kJ/kg</text>
          <text x="70" y="295" className="text-xs fill-gray-700">총 열전달 계수: 0.21 W/m·K</text>

          <text x="310" y="245" className="text-sm font-bold fill-gray-900">■ 온도 저감 효과</text>
          <text x="310" y="265" className="text-xs fill-gray-700">차량 내부 온도: 6-8°C ↓</text>
          <text x="310" y="280" className="text-xs fill-gray-700">표면 온도: 12-15°C ↓</text>
          <text x="310" y="295" className="text-xs fill-gray-700">일반 대비 성능: +180%</text>

          <text x="550" y="245" className="text-sm font-bold fill-gray-900">■ 상변화 범위</text>
          <text x="550" y="265" className="text-xs fill-gray-700">작동 온도: 28-32°C</text>
          <text x="550" y="280" className="text-xs fill-gray-700">총 두께: 3.0mm</text>
          <text x="550" y="295" className="text-xs fill-gray-700">유효 면적: 99%</text>
        </g>

        {/* 화살표 마커들 */}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#374151"/>
          </marker>
          <marker id="arrowYellow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#d97706"/>
          </marker>
          <marker id="dimArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <polygon points="3 0, 6 3, 3 6, 0 3" fill="#9ca3af"/>
          </marker>
        </defs>
      </svg>
    </div>
  )
}

export default function SciencePage() {
  const [chartData, setChartData] = useState({ temperature: [], histogram: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data/sessions.json')
        const sessions = await response.json()

        // 샘플 온도 데이터 생성
        const sampleSession = sessions[0]
        const temperatureData = []
        const duration = sampleSession.duration_minutes
        const steps = 12

        for (let i = 0; i <= steps; i++) {
          const time = (duration / steps) * i
          const progress = i / steps

          temperatureData.push({
            time: Math.round(time),
            exterior: sampleSession.exterior_temp_start + (sampleSession.exterior_temp_end - sampleSession.exterior_temp_start) * progress,
            interior: sampleSession.interior_temp_start + (sampleSession.interior_temp_end - sampleSession.interior_temp_start) * progress,
            pcm: sampleSession.pcm_temp_start + (sampleSession.pcm_temp_end - sampleSession.pcm_temp_start) * progress
          })
        }

        // 히스토그램 데이터
        const histogramData = [
          { range: '0-2°C', frequency: sessions.filter(s => s.delta_temp < 2).length },
          { range: '2-4°C', frequency: sessions.filter(s => s.delta_temp >= 2 && s.delta_temp < 4).length },
          { range: '4-6°C', frequency: sessions.filter(s => s.delta_temp >= 4 && s.delta_temp < 6).length },
          { range: '6-8°C', frequency: sessions.filter(s => s.delta_temp >= 6 && s.delta_temp < 8).length },
          { range: '8°C+', frequency: sessions.filter(s => s.delta_temp >= 8).length }
        ]

        setChartData({
          temperature: temperatureData,
          histogram: histogramData
        })
      } catch (error) {
        console.error('데이터 로딩 실패:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <div className="min-h-screen bg-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            솔루나 PCM 기술 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            상변화물질(PCM)과 열반사 원단을 결합한 혁신적인 차량용 썬쉐이드 기술로
            여름철 차량 실내 온도를 획기적으로 낮춥니다.
          </p>
        </div>

        {/* PCM 기술 원리 */}
        <section className="mb-16">
          <Card className="border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-6 w-6 text-gray-700" />
                PCM(상변화물질) 기술 원리
              </CardTitle>
              <CardDescription>
                28-32°C에서 상변화하는 파라핀계 PCM이 열을 흡수하고 저장하는 과정
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <PCMDiagram />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">핵심 기술 특징</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>마이크로캡슐화:</strong> 멜라민-우레아 포름알데히드 쉘로 PCM을 캡슐화하여 누출 방지
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>최적 농도:</strong> 중량 대비 10-15% PCM 캡슐 농도로 냉감 지속성과 내구성 확보
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>저온 경화:</strong> PCM 성능 저하 방지를 위한 저온 경화 공정 적용
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">상변화 과정</h4>
                    <p className="text-gray-700 text-sm">
                      차량 실내 온도가 28°C를 넘으면 PCM이 고체에서 액체로 상변화하면서
                      잠열을 흡수하여 온도 상승을 억제합니다. 이 과정에서 2시간 이상
                      지속적인 냉각 효과를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 제품 구조 */}
        <section className="mb-16">
          <Card className="border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-gray-700" />
                솔루나 썬쉐이드 구조
              </CardTitle>
              <CardDescription>
                열반사층과 PCM 코팅층을 결합한 복합 구조로 최대 냉각 효과 구현
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <FabricStructure />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-gray-700" />
                  </div>
                  <h4 className="font-semibold mb-2">열반사층</h4>
                  <p className="text-sm text-gray-600">
                    알루미늄 증착 PET 필름으로 자외선과 근적외선을 효과적으로 반사
                  </p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">PCM 코팅층</h4>
                  <p className="text-sm text-gray-600">
                    마이크로캡슐화된 PCM이 열을 흡수하고 저장하여 지속적인 냉각 효과 제공
                  </p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-gray-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">기본 원단</h4>
                  <p className="text-sm text-gray-600">
                    고강도 열가소성 수지로 내구성과 경량성을 동시에 확보
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 성능 데이터 - KEEP CHARTS */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">실제 성능 데이터</h2>
            <p className="text-lg text-gray-600">
              실차 테스트를 통해 검증된 솔루나 썬쉐이드의 성능을 확인해보세요.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
              <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>실시간 온도 변화</CardTitle>
                  <CardDescription>시간에 따른 실내외 온도 변화 비교</CardDescription>
                </CardHeader>
                <CardContent>
                  <TemperatureCurve data={chartData.temperature} />
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>냉각 효과 분포</CardTitle>
                  <CardDescription>테스트 세션별 온도 저감 효과 분포</CardDescription>
                </CardHeader>
                <CardContent>
                  <DeltaHistogram data={chartData.histogram} />
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* 기술 사양 */}
        <section>
          <Card className="border-gray-200">
            <CardHeader className="border-b border-gray-200">
              <CardTitle>기술 사양 및 특징</CardTitle>
              <CardDescription>솔루나 썬쉐이드의 상세 기술 사양</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">6-8°C</div>
                  <div className="text-sm text-gray-600">평균 온도 저감</div>
                </div>

                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">2시간+</div>
                  <div className="text-sm text-gray-600">냉감 지속 시간</div>
                </div>

                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">10초</div>
                  <div className="text-sm text-gray-600">설치/철거 시간</div>
                </div>

                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">500g</div>
                  <div className="text-sm text-gray-600">제품 무게 (목표)</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">혁신 포인트</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-sm">원터치 우산형 접이식 구조</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-sm">다양한 차량 모델 호환 설계</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-sm">경량 알루미늄 합금 프레임</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-sm">2,000회 이상 개폐 내구성</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-sm">환경 안전성 인증 완료</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-sm">휴대용 보관 케이스 포함</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
