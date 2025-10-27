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

// PCM 작동 원리 SVG 다이어그램
function PCMDiagram() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* 배경 */}
        <rect width="400" height="300" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="8"/>
        
        {/* 제목 */}
        <text x="200" y="25" textAnchor="middle" className="text-lg font-semibold fill-gray-800">
          PCM 상변화 과정
        </text>
        
        {/* 고체 상태 (왼쪽) */}
        <g>
          <rect x="50" y="60" width="120" height="80" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" rx="4"/>
          <text x="110" y="85" textAnchor="middle" className="text-sm font-medium fill-gray-700">고체 상태</text>
          <text x="110" y="105" textAnchor="middle" className="text-xs fill-gray-600">온도 &lt; 28°C</text>
          
          {/* 분자 표현 (고체) */}
          <g>
            <circle cx="80" cy="115" r="3" fill="#3b82f6"/>
            <circle cx="90" cy="115" r="3" fill="#3b82f6"/>
            <circle cx="100" cy="115" r="3" fill="#3b82f6"/>
            <circle cx="110" cy="115" r="3" fill="#3b82f6"/>
            <circle cx="120" cy="115" r="3" fill="#3b82f6"/>
            <circle cx="130" cy="115" r="3" fill="#3b82f6"/>
            <circle cx="85" cy="125" r="3" fill="#3b82f6"/>
            <circle cx="95" cy="125" r="3" fill="#3b82f6"/>
            <circle cx="105" cy="125" r="3" fill="#3b82f6"/>
            <circle cx="115" cy="125" r="3" fill="#3b82f6"/>
            <circle cx="125" cy="125" r="3" fill="#3b82f6"/>
          </g>
        </g>
        
        {/* 화살표 */}
        <g>
          <path d="M 180 100 L 220 100" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)"/>
          <text x="200" y="95" textAnchor="middle" className="text-xs fill-red-500 font-medium">열 흡수</text>
        </g>
        
        {/* 액체 상태 (오른쪽) */}
        <g>
          <rect x="230" y="60" width="120" height="80" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" rx="4"/>
          <text x="290" y="85" textAnchor="middle" className="text-sm font-medium fill-gray-700">액체 상태</text>
          <text x="290" y="105" textAnchor="middle" className="text-xs fill-gray-600">온도 &gt; 32°C</text>
          
          {/* 분자 표현 (액체) */}
          <g>
            <circle cx="250" cy="115" r="3" fill="#ef4444"/>
            <circle cx="265" cy="120" r="3" fill="#ef4444"/>
            <circle cx="275" cy="110" r="3" fill="#ef4444"/>
            <circle cx="290" cy="125" r="3" fill="#ef4444"/>
            <circle cx="305" cy="115" r="3" fill="#ef4444"/>
            <circle cx="320" cy="120" r="3" fill="#ef4444"/>
            <circle cx="260" cy="130" r="3" fill="#ef4444"/>
            <circle cx="280" cy="125" r="3" fill="#ef4444"/>
            <circle cx="300" cy="110" r="3" fill="#ef4444"/>
            <circle cx="315" cy="130" r="3" fill="#ef4444"/>
          </g>
        </g>
        
        {/* 온도 그래프 */}
        <g>
          <text x="200" y="170" textAnchor="middle" className="text-sm font-medium fill-gray-700">
            온도 변화 그래프
          </text>
          
          {/* 축 */}
          <line x1="80" y1="250" x2="320" y2="250" stroke="#6b7280" strokeWidth="2"/>
          <line x1="80" y1="180" x2="80" y2="250" stroke="#6b7280" strokeWidth="2"/>
          
          {/* 온도 곡선 */}
          <path d="M 80 240 Q 150 220 200 210 Q 250 220 320 200" 
                fill="none" stroke="#10b981" strokeWidth="3"/>
          
          {/* 상변화 구간 표시 */}
          <rect x="180" y="180" width="40" height="70" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeDasharray="2,2"/>
          <text x="200" y="275" textAnchor="middle" className="text-xs fill-gray-600">상변화 구간</text>
          
          {/* 축 라벨 */}
          <text x="50" y="220" className="text-xs fill-gray-600">온도</text>
          <text x="200" y="270" textAnchor="middle" className="text-xs fill-gray-600">시간</text>
        </g>
        
        {/* 화살표 마커 정의 */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </div>
  )
}

// 열반사 원단 구조 SVG
function FabricStructure() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 400 250" className="w-full h-auto">
        {/* 배경 */}
        <rect width="400" height="250" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="8"/>
        
        {/* 제목 */}
        <text x="200" y="25" textAnchor="middle" className="text-lg font-semibold fill-gray-800">
          솔루나 썬쉐이드 구조
        </text>
        
        {/* 태양 */}
        <g>
          <circle cx="50" cy="60" r="15" fill="#fbbf24"/>
          <path d="M 35 45 L 45 55 M 55 55 L 65 45 M 35 75 L 45 65 M 55 65 L 65 75 M 20 60 L 30 60 M 70 60 L 80 60 M 50 30 L 50 40 M 50 80 L 50 90" 
                stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          <text x="50" y="105" textAnchor="middle" className="text-xs fill-gray-600">태양열</text>
        </g>
        
        {/* 열 화살표 */}
        <g>
          <path d="M 80 60 L 120 60" stroke="#ef4444" strokeWidth="2" markerEnd="url(#redarrow)"/>
          <path d="M 85 65 L 115 65" stroke="#ef4444" strokeWidth="2" markerEnd="url(#redarrow)"/>
          <path d="M 85 55 L 115 55" stroke="#ef4444" strokeWidth="2" markerEnd="url(#redarrow)"/>
        </g>
        
        {/* 썬쉐이드 구조 */}
        <g>
          {/* 열반사층 */}
          <rect x="130" y="45" width="140" height="8" fill="#c0c0c0" stroke="#9ca3af"/>
          <text x="280" y="52" className="text-xs fill-gray-700">열반사층 (알루미늄)</text>
          
          {/* PCM 코팅층 */}
          <rect x="130" y="53" width="140" height="12" fill="#3b82f6" fillOpacity="0.6" stroke="#3b82f6"/>
          <text x="280" y="62" className="text-xs fill-gray-700">PCM 코팅층</text>
          
          {/* 기본 원단 */}
          <rect x="130" y="65" width="140" height="10" fill="#6b7280" stroke="#4b5563"/>
          <text x="280" y="73" className="text-xs fill-gray-700">기본 원단</text>
        </g>
        
        {/* 반사된 열 */}
        <g>
          <path d="M 140 40 L 110 20" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#yellowarrow)"/>
          <path d="M 160 40 L 130 20" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#yellowarrow)"/>
          <path d="M 180 40 L 150 20" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#yellowarrow)"/>
          <text x="140" y="15" className="text-xs fill-gray-600">반사된 열</text>
        </g>
        
        {/* 흡수된 열 (PCM) */}
        <g>
          <circle cx="150" cy="59" r="2" fill="#3b82f6"/>
          <circle cx="170" cy="59" r="2" fill="#3b82f6"/>
          <circle cx="190" cy="59" r="2" fill="#3b82f6"/>
          <circle cx="210" cy="59" r="2" fill="#3b82f6"/>
          <circle cx="230" cy="59" r="2" fill="#3b82f6"/>
          <circle cx="250" cy="59" r="2" fill="#3b82f6"/>
          <text x="200" y="85" textAnchor="middle" className="text-xs fill-blue-600">열 흡수 및 저장</text>
        </g>
        
        {/* 차량 실내 */}
        <g>
          <rect x="130" y="90" width="140" height="60" fill="#e5f3ff" stroke="#3b82f6" strokeWidth="2" rx="4"/>
          <text x="200" y="110" textAnchor="middle" className="text-sm font-medium fill-gray-700">차량 실내</text>
          <text x="200" y="130" textAnchor="middle" className="text-lg font-bold fill-blue-600">6-8°C ↓</text>
          <text x="200" y="145" textAnchor="middle" className="text-xs fill-gray-600">온도 저감 효과</text>
        </g>
        
        {/* 성능 지표 */}
        <g>
          <rect x="50" y="170" width="300" height="60" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" rx="4"/>
          <text x="200" y="190" textAnchor="middle" className="text-sm font-semibold fill-gray-800">
            솔루나 썬쉐이드 핵심 성능
          </text>
          <text x="120" y="210" className="text-xs fill-gray-700">• 온도 저감: 6-8°C</text>
          <text x="280" y="210" className="text-xs fill-gray-700">• 지속 시간: 2시간+</text>
          <text x="120" y="225" className="text-xs fill-gray-700">• 설치 시간: 10초 이내</text>
          <text x="280" y="225" className="text-xs fill-gray-700">• 무게: 500g 이하</text>
        </g>
        
        {/* 화살표 마커들 */}
        <defs>
          <marker id="redarrow" markerWidth="8" markerHeight="6" 
                  refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#ef4444"/>
          </marker>
          <marker id="yellowarrow" markerWidth="8" markerHeight="6" 
                  refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#fbbf24"/>
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-6 w-6 text-primary" />
                PCM(상변화물질) 기술 원리
              </CardTitle>
              <CardDescription>
                28-32°C에서 상변화하는 파라핀계 PCM이 열을 흡수하고 저장하는 과정
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <PCMDiagram />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">핵심 기술 특징</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>마이크로캡슐화:</strong> 멜라민-우레아 포름알데히드 쉘로 PCM을 캡슐화하여 누출 방지
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>최적 농도:</strong> 중량 대비 10-15% PCM 캡슐 농도로 냉감 지속성과 내구성 확보
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>저온 경화:</strong> PCM 성능 저하 방지를 위한 저온 경화 공정 적용
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">상변화 과정</h4>
                    <p className="text-blue-700 text-sm">
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                솔루나 썬쉐이드 구조
              </CardTitle>
              <CardDescription>
                열반사층과 PCM 코팅층을 결합한 복합 구조로 최대 냉각 효과 구현
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FabricStructure />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-semibold mb-2">열반사층</h4>
                  <p className="text-sm text-gray-600">
                    알루미늄 증착 PET 필름으로 자외선과 근적외선을 효과적으로 반사
                  </p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">PCM 코팅층</h4>
                  <p className="text-sm text-gray-600">
                    마이크로캡슐화된 PCM이 열을 흡수하고 저장하여 지속적인 냉각 효과 제공
                  </p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
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

        {/* 성능 데이터 */}
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
              <Card>
                <CardHeader>
                  <CardTitle>실시간 온도 변화</CardTitle>
                  <CardDescription>시간에 따른 실내외 온도 변화 비교</CardDescription>
                </CardHeader>
                <CardContent>
                  <TemperatureCurve data={chartData.temperature} />
                </CardContent>
              </Card>

              <Card>
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
          <Card>
            <CardHeader>
              <CardTitle>기술 사양 및 특징</CardTitle>
              <CardDescription>솔루나 썬쉐이드의 상세 기술 사양</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">6-8°C</div>
                  <div className="text-sm text-gray-600">평균 온도 저감</div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2시간+</div>
                  <div className="text-sm text-gray-600">냉감 지속 시간</div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">10초</div>
                  <div className="text-sm text-gray-600">설치/철거 시간</div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">500g</div>
                  <div className="text-sm text-gray-600">제품 무게 (목표)</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">혁신 포인트</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">원터치 우산형 접이식 구조</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">다양한 차량 모델 호환 설계</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">경량 알루미늄 합금 프레임</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">2,000회 이상 개폐 내구성</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">환경 안전성 인증 완료</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
