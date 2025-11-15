'use client';

import React, { useState } from 'react';

const PCMTechnologyDiagram = () => {
  const [activeTemp, setActiveTemp] = useState(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full mb-4">
            <span className="text-2xl mr-2">🌡️</span>
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              듀얼 온도 대응 PCM 기술
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            두 가지 온도대(28°C·35°C) 반응 기술 적용
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            다양한 환경에서 최적의 냉각 성능을 발휘할 수 있도록
            <span className="font-bold text-blue-600"> 두 종류의 PCM</span>을 전략적으로 적용했습니다.
          </p>
        </div>

        {/* Dual PCM Structure Diagram */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 28°C PCM */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 cursor-pointer ${
              activeTemp === 28 ? 'border-orange-400 scale-105' : 'border-gray-200 hover:border-orange-300'
            }`}
            onMouseEnter={() => setActiveTemp(28)}
            onMouseLeave={() => setActiveTemp(null)}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4 shadow-lg">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">28°C 등급 PCM</h3>
              <div className="inline-block px-4 py-1 bg-orange-100 rounded-full">
                <span className="text-sm font-semibold text-orange-700">초기 대응층</span>
              </div>
            </div>

            {/* PCM Material Visual */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl p-6 border-2 border-orange-300">
                <div className="grid grid-cols-8 gap-1 mb-3">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 rounded-sm ${
                        activeTemp === 28
                          ? 'bg-gradient-to-br from-orange-300 to-orange-500 animate-pulse'
                          : 'bg-orange-400'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-center text-orange-800 font-medium">
                  마이크로캡슐화된 PCM 입자 구조
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">🎯</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">주요 역할</h4>
                  <p className="text-sm text-gray-600">
                    낮 시간대의 빠른 온도 상승을 즉시 억제
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">반응 특성</h4>
                  <p className="text-sm text-gray-600">
                    실내 온도가 28°C에 도달하면 상변화 시작, 열 흡수 활성화
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">🕒</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">최적 시간대</h4>
                  <p className="text-sm text-gray-600">
                    오전~낮 시간대 (초기 온도 상승 구간)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 35°C PCM */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 cursor-pointer ${
              activeTemp === 35 ? 'border-blue-400 scale-105' : 'border-gray-200 hover:border-blue-300'
            }`}
            onMouseEnter={() => setActiveTemp(35)}
            onMouseLeave={() => setActiveTemp(null)}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4 shadow-lg">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">35°C 등급 PCM</h3>
              <div className="inline-block px-4 py-1 bg-blue-100 rounded-full">
                <span className="text-sm font-semibold text-blue-700">고온 완화층</span>
              </div>
            </div>

            {/* PCM Material Visual */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-6 border-2 border-blue-300">
                <div className="grid grid-cols-8 gap-1 mb-3">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 rounded-sm ${
                        activeTemp === 35
                          ? 'bg-gradient-to-br from-blue-300 to-blue-500 animate-pulse'
                          : 'bg-blue-400'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-center text-blue-800 font-medium">
                  마이크로캡슐화된 PCM 입자 구조
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">🎯</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">주요 역할</h4>
                  <p className="text-sm text-gray-600">
                    차량 내부가 고온으로 치솟는 시간대에 추가적인 열완화 버퍼 제공
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">반응 특성</h4>
                  <p className="text-sm text-gray-600">
                    실내 온도가 35°C에 도달하면 상변화 시작, 극한 열 흡수
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">🕒</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">최적 시간대</h4>
                  <p className="text-sm text-gray-600">
                    한낮~오후 시간대 (고온 지속 구간)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sequential Activation Diagram */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            단계별 PCM 활성화 메커니즘
          </h3>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-300 via-purple-300 to-blue-300"></div>

            <div className="space-y-8">
              {/* Stage 1 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">1단계: 초기 온도 상승 (25°C → 28°C)</h4>
                    <p className="text-sm text-gray-600">28°C PCM 활성화 대기 상태</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  1
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Stage 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 animate-pulse">
                  2
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-l from-orange-50 to-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">2단계: 28°C PCM 활성화</h4>
                    <p className="text-sm text-gray-600">상변화 시작, 잠열 흡수로 온도 상승 억제</p>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">3단계: 온도 지속 상승 (28°C → 35°C)</h4>
                    <p className="text-sm text-gray-600">28°C PCM 지속 작동, 35°C PCM 대기</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                  3
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Stage 4 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 animate-pulse">
                  4
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-l from-blue-50 to-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-2">4단계: 35°C PCM 활성화</h4>
                    <p className="text-sm text-gray-600">이중 PCM 시스템 완전 가동, 최대 냉각 효과</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Feature Highlight */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-4xl mr-4">🏆</div>
            <div>
              <h3 className="text-2xl font-bold mb-3">하이엔드 냉감 기술</h3>
              <p className="text-lg leading-relaxed opacity-95 mb-4">
                이중 구조의 반응형 열완화 방식은 <span className="font-bold underline">국내 썬쉐이드 제품 중에서도
                찾아보기 어려운 고기능성·하이엔드 냉감 구조</span>입니다.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl mb-2">🔬</div>
                  <h4 className="font-bold mb-1">과학적 설계</h4>
                  <p className="text-sm opacity-90">열역학 기반 최적화</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h4 className="font-bold mb-1">전략적 배치</h4>
                  <p className="text-sm opacity-90">온도대별 맞춤 대응</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl mb-2">💎</div>
                  <h4 className="font-bold mb-1">프리미엄 품질</h4>
                  <p className="text-sm opacity-90">차별화된 냉각 성능</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCMTechnologyDiagram;
