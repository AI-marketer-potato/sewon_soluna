'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function RegionBar({ data, title = "지역별 성능 비교" }) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">데이터가 없습니다</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="region"
            tick={{ fontSize: 12 }}
            label={{ value: '지역', position: 'insideBottom', offset: 0 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: '평균 온도 차이 (°C)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value, name) => [
              `${value}°C`, 
              name === 'avgDelta' ? '평균 온도 차이' : 
              name === 'sessions' ? '세션 수' : name
            ]}
            labelFormatter={(label) => `지역: ${label}`}
          />
          <Legend 
            formatter={(value) => 
              value === 'avgDelta' ? '평균 온도 차이' : 
              value === 'sessions' ? '세션 수' : value
            }
          />
          <Bar 
            dataKey="avgDelta" 
            fill="#10b981" 
            name="avgDelta"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="sessions" 
            fill="#6366f1" 
            name="sessions"
            radius={[4, 4, 0, 0]}
            yAxisId="right"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
