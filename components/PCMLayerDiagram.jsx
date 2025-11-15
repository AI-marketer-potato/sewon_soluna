'use client'

import { Thermometer } from 'lucide-react'

export default function PCMLayerDiagram() {
  const layers = [
    {
      name: '열반사 외층',
      description: '태양광 반사 (반사율 85%)',
      color: 'from-gray-200 to-gray-300',
      height: 'min-h-[60px]',
      icon: '☀️'
    },
    {
      name: 'PCM 마이크로캡슐층',
      description: '상변화 열 흡수 (28-32°C)',
      color: 'from-indigo-600 to-blue-700',
      height: 'min-h-[80px]',
      icon: '❄️',
      highlight: true
    },
    {
      name: '단열층',
      description: '열 전달 차단',
      color: 'from-slate-300 to-slate-400',
      height: 'min-h-[60px]',
      icon: '🛡️'
    },
    {
      name: '내부 원단',
      description: '구조 지지 및 보호',
      color: 'from-gray-400 to-gray-500',
      height: 'min-h-[60px]',
      icon: '📐'
    }
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Thermometer className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">PCM 복합 소재 구조</h3>
        </div>
        <p className="text-sm text-gray-600">4층 구조 / 총 두께 약 3mm / 유연성 유지</p>
      </div>

      {/* 3D Layer Visualization */}
      <div className="relative">
        {/* Arrow indicator */}
        <div className="absolute -left-8 top-0 bottom-0 flex items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-500 transform -rotate-90 whitespace-nowrap">태양열 ↓</div>
          </div>
        </div>

        <div className="space-y-3">
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 hover:scale-[1.02] ${
                layer.highlight ? 'transform hover:scale-105' : ''
              }`}
            >
              {/* 3D Layer card */}
              <div
                className={`
                  ${layer.height}
                  bg-gradient-to-r ${layer.color}
                  rounded-lg
                  shadow-md
                  border-2
                  ${layer.highlight ? 'border-blue-600' : 'border-gray-200'}
                  relative
                  overflow-hidden
                `}
                style={{
                  transform: `perspective(1000px) rotateX(${5 - index * 2}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Layer content */}
                <div className="w-full h-full flex items-center px-4 py-3">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl leading-none">{layer.icon}</span>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm leading-tight">{layer.name}</div>
                      <div className="text-xs text-gray-700 leading-tight mt-0.5">{layer.description}</div>
                    </div>

                    {/* Layer indicator */}
                    {layer.highlight && (
                      <div className="flex items-center gap-2 ml-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-white data-label">핵심 기술</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Shimmer effect for PCM layer */}
                {layer.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                )}
              </div>

              {/* Connection lines between layers */}
              {index < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-3 bg-gradient-to-b from-gray-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Temperature flow indicator */}
        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-700">입사 열량: 100%</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-bold text-blue-900">투과 열량: 38%</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-center text-gray-600">
            PCM층에서 62%의 열 에너지 흡수 및 저장
          </div>
        </div>
      </div>

      {/* Technical note */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <div className="text-sm text-gray-700">
          <span className="font-bold text-blue-900">상변화 메커니즘:</span> PCM 마이크로캡슐이 28-32°C 범위에서
          고체→액체로 상변화하며 잠열을 흡수, 열 에너지를 저장하여 차량 내부로의 열 전달을 차단합니다.
        </div>
      </div>
    </div>
  )
}
