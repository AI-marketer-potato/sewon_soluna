'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const PCMExperimentalValidation = () => {
  // Temperature rise comparison data
  const temperatureComparisonData = [
    { time: '0 min', standard: 25, pcm: 25 },
    { time: '10 min', standard: 38, pcm: 30 },
    { time: '20 min', standard: 48, pcm: 34 },
    { time: '30 min', standard: 56, pcm: 38 },
    { time: '40 min', standard: 62, pcm: 42 },
    { time: '50 min', standard: 67, pcm: 45 },
    { time: '60 min', standard: 70, pcm: 48 },
  ];

  // Performance comparison data
  const performanceData = [
    {
      category: '일반 차광 원단',
      tempRise: 45,
      heatReduction: 0,
      label: 'Standard'
    },
    {
      category: 'PCM 코팅 썬쉐이드',
      tempRise: 27,
      heatReduction: 40,
      label: 'PCM Coating'
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-2xl mr-2">🧊</span>
            <span className="text-blue-700 font-semibold">실험 기반 열저감 효과 검증</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            과학적으로 입증된 냉각 성능
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            동일 조건에서 측정한 온도 상승폭(ΔT) 실험에서 PCM 코팅층은
            일반 차광 원단 대비 약 <span className="font-bold text-blue-600">20~40% 낮은</span> 표면 온도 상승을 기록했습니다.
          </p>
        </div>

        {/* Temperature Rise Over Time Chart */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">📊</span>
            시간대별 온도 상승 비교 (실험 조건: 35°C 외부 온도, 직사광선 노출)
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={temperatureComparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="time"
                stroke="#666"
                style={{ fontSize: '14px', fontWeight: '500' }}
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '14px', fontWeight: '500' }}
                label={{ value: '온도 (°C)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '12px'
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              <Line
                type="monotone"
                dataKey="standard"
                stroke="#ef4444"
                strokeWidth={3}
                name="일반 차광 원단"
                dot={{ fill: '#ef4444', r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line
                type="monotone"
                dataKey="pcm"
                stroke="#3b82f6"
                strokeWidth={3}
                name="PCM 코팅 썬쉐이드"
                dot={{ fill: '#3b82f6', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bar Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">📈</span>
              60분 후 온도 상승폭 비교
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="category" stroke="#666" style={{ fontSize: '13px' }} />
                <YAxis stroke="#666" label={{ value: '온도 상승 (ΔT °C)', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="tempRise" fill="#60a5fa" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Key Findings */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-2xl mr-3">🔬</span>
              실험 결과 핵심 요약
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">❄️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">최대 40% 온도 저감</h4>
                    <p className="text-sm text-gray-600">일반 썬쉐이드 대비 표면 온도 상승 억제</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">즉각적인 반응 속도</h4>
                    <p className="text-sm text-gray-600">10분 이내 PCM 활성화 및 온도 완화 시작</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">지속적인 열 완화</h4>
                    <p className="text-sm text-gray-600">장시간 주차 시에도 안정적인 온도 유지</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-start">
            <div className="flex-shrink-0 text-4xl mr-4">💡</div>
            <div>
              <h3 className="text-2xl font-bold mb-3">핵심 인사이트</h3>
              <p className="text-lg leading-relaxed opacity-95">
                이 결과는 썬쉐이드가 <span className="font-bold underline">열을 단순히 차단하는 것이 아니라
                직접 흡수·완화</span>하여 실제로 체감되는 내부 온도를 줄여준다는 것을 의미합니다.
                PCM의 상변화 특성을 활용한 능동적 열 관리 시스템입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Test Methodology */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className="mr-2">📋</span>
            실험 방법론
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">실험 환경:</span> 35°C 외부 온도, 직사광선 노출
            </div>
            <div>
              <span className="font-semibold text-gray-900">측정 방법:</span> 적외선 온도계, 1분 단위 측정
            </div>
            <div>
              <span className="font-semibold text-gray-900">비교 대상:</span> 동일 사이즈 일반 차광 원단
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCMExperimentalValidation;
