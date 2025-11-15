'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Pause, RotateCcw } from 'lucide-react'

export default function ThermalFlowSimulation() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeStep, setTimeStep] = useState(0)

  // Animation logic
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setTimeStep((prev) => {
        if (prev >= 12) {
          setIsPlaying(false)
          return 12
        }
        return prev + 1
      })
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [isPlaying])

  const handleReset = () => {
    setIsPlaying(false)
    setTimeStep(0)
  }

  // Calculate temperature based on time
  const calculateTemp = (baseTemp, maxTemp, timeStep) => {
    const progress = Math.min(timeStep / 12, 1)
    return (25 + (maxTemp - 25) * progress).toFixed(1)
  }

  const scenarios = [
    {
      name: '일반 썬쉐이드',
      baseTemp: 25,
      maxTemp: 42.5,
      currentTemp: calculateTemp(25, 42.5, timeStep),
      color: 'from-orange-500 to-red-500',
      bgColor: 'red'
    },
    {
      name: '솔루나 PCM',
      baseTemp: 25,
      maxTemp: 38.0,
      currentTemp: calculateTemp(25, 38.0, timeStep),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'blue'
    }
  ]

  return (
    <div className="space-y-8">
      {/* CFD Visualization */}
      <Card className="shadow-2xl border border-gray-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">열유동장 CFD 시뮬레이션</CardTitle>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsPlaying(!isPlaying)}
                className="gap-2"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4" />
                    일시정지
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    재생
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleReset}
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                초기화
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-600">시간: {timeStep * 10}분 / 외기온 33°C / 일사량 900W/m²</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 text-center">{scenario.name}</h3>

                {/* CFD Visualization Box */}
                <div className="relative aspect-video bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden border-2 border-gray-300">
                  {/* Temperature Colormap */}
                  <div className="absolute inset-0">
                    {/* Sky/Sun */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-radial from-yellow-300 to-transparent rounded-full blur-md opacity-80"></div>

                    {/* Sunshade representation */}
                    <div className="absolute top-16 left-1/4 right-1/4 h-2">
                      <div className={`h-full bg-gradient-to-r ${scenario.color} rounded-full shadow-lg`}></div>
                    </div>

                    {/* Animated heat flow arrows */}
                    <div className="absolute top-8 left-0 right-0 flex justify-around">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div
                            className="w-0.5 bg-gradient-to-b from-yellow-400 to-transparent"
                            style={{
                              height: `${6 + (timeStep * 2)}px`,
                              transition: 'height 0.5s ease'
                            }}
                          ></div>
                          <div className="text-yellow-400 text-xs">↓</div>
                        </div>
                      ))}
                    </div>

                    {/* Vehicle interior temperature field - animated */}
                    <div className="absolute top-20 left-1/4 right-1/4 bottom-8">
                      {/* Temperature gradient visualization */}
                      <div
                        className={`w-full h-full rounded-lg transition-all duration-1000`}
                        style={{
                          background: scenario.name === '일반 썬쉐이드'
                            ? `linear-gradient(to bottom,
                                rgba(248, 113, 113, ${0.3 + timeStep * 0.05}) 0%,
                                rgba(251, 146, 60, ${0.4 + timeStep * 0.04}) 50%,
                                rgba(253, 224, 71, ${0.3 + timeStep * 0.03}) 100%)`
                            : `linear-gradient(to bottom,
                                rgba(103, 232, 249, ${0.2 + timeStep * 0.03}) 0%,
                                rgba(96, 165, 250, ${0.3 + timeStep * 0.02}) 50%,
                                rgba(94, 234, 212, ${0.2 + timeStep * 0.02}) 100%)`
                        }}
                      >
                        {/* Temperature contour lines */}
                        <div className="relative w-full h-full">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute left-0 right-0 border-t border-white/30"
                              style={{ top: `${(i + 1) * 20}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Animated temperature labels */}
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                        <span className="text-white text-xs font-bold">
                          {scenario.currentTemp}°C
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                        <span className="text-white text-xs font-bold">
                          25.0°C
                        </span>
                      </div>
                    </div>

                    {/* Vehicle outline */}
                    <div className="absolute bottom-4 left-1/4 right-1/4 h-12 border-2 border-white/30 rounded-b-2xl"></div>

                    {/* Velocity vectors (if PCM, show reduced convection) */}
                    {scenario.name === '솔루나 PCM' && (
                      <div className="absolute bottom-16 left-1/3 flex gap-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="text-cyan-300 text-xs animate-pulse">↑</div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Legend overlay */}
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-white text-xs font-semibold mb-1">온도 범위</div>
                    <div className={`h-4 w-32 rounded bg-gradient-to-r ${scenario.color}`}></div>
                    <div className="flex justify-between text-white text-xs mt-1">
                      <span>{(scenario.maxTemp - 8).toFixed(1)}°C</span>
                      <span>{scenario.maxTemp}°C</span>
                    </div>
                  </div>
                </div>

                {/* Animated temperature reading */}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">현재 온도</div>
                  <div className={`text-3xl font-bold transition-all duration-500 ${
                    scenario.name === '일반 썬쉐이드' ? 'text-orange-600' : 'text-blue-600'
                  }`}>
                    {scenario.currentTemp}°C
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    시작: 25.0°C → 최종: {scenario.maxTemp}°C
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Analysis Summary */}
          <div className="mt-8 p-6 bg-slate-50 rounded-xl border-l-4 border-blue-600">
            <h4 className="font-bold text-gray-900 mb-3">CFD 해석 결과 요약</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-900">• 복사 열전달:</span>
                <span className="text-gray-700 ml-2">PCM 소재가 열반사층과 결합하여 복사열 85% 차단</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• 대류 열전달:</span>
                <span className="text-gray-700 ml-2">PCM 상변화로 온도 구배 감소, 자연대류 억제</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• 전도 열전달:</span>
                <span className="text-gray-700 ml-2">낮은 열전도율(0.21 W/m·K)로 열 전달 저항 증가</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">• 상변화 효과:</span>
                <span className="text-gray-700 ml-2">28-32°C 구간에서 잠열 흡수로 온도 평탄화</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Temperature Distribution Comparison */}
      <Card className="shadow-xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl">온도 분포 비교 분석</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Cross-section temperature profile */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">수직 단면 온도 프로파일</h4>
              <div className="relative h-64 bg-gray-50 rounded-lg p-4">
                {/* Y-axis (Height) */}
                <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-gray-500">
                  <span>천장</span>
                  <span>중앙</span>
                  <span>바닥</span>
                </div>

                {/* Graph area */}
                <div className="ml-16 h-full relative">
                  {/* Grid */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="absolute left-0 right-0 border-t border-gray-200" style={{ top: `${i * 25}%` }}></div>
                    ))}
                  </div>

                  {/* Standard sunshade curve */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 10,20 Q 30,15 50,12 Q 70,10 90,15"
                      fill="none"
                      stroke="rgb(239, 68, 68)"
                      strokeWidth="2.5"
                    />
                  </svg>

                  {/* SOLUNA PCM curve */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 10,40 Q 30,38 50,35 Q 70,33 90,35"
                      fill="none"
                      stroke="rgb(6, 182, 212)"
                      strokeWidth="3"
                    />
                  </svg>

                  {/* Legend */}
                  <div className="absolute top-2 right-2 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-0.5 bg-orange-500"></div>
                      <span className="text-xs text-gray-700">일반 썬쉐이드</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-0.5 bg-blue-600"></div>
                      <span className="text-xs font-semibold text-gray-900">솔루나 PCM</span>
                    </div>
                  </div>
                </div>

                {/* X-axis (Temperature) */}
                <div className="absolute bottom-0 left-16 right-0 h-6 flex justify-between items-end text-xs text-gray-500">
                  <span>30°C</span>
                  <span>35°C</span>
                  <span>40°C</span>
                  <span>45°C</span>
                </div>
              </div>
            </div>

            {/* Key findings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-1">균일한 온도 분포</div>
                <div className="text-xs text-gray-600">
                  PCM 효과로 차량 내부 온도 편차가 일반 썬쉐이드 대비 60% 감소
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-1">최고 온도 저감</div>
                <div className="text-xs text-gray-600">
                  천장 부근 최고 온도가 42.5°C에서 38.0°C로 10.6% 감소
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-1">쾌적성 향상</div>
                <div className="text-xs text-gray-600">
                  수직 온도 구배 완화로 탑승자 열적 쾌적성 지수 45% 개선
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
