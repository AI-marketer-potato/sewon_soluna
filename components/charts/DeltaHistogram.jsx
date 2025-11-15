'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function DeltaHistogram({ data, title = "온도 차이 분포" }) {
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
            dataKey="range"
            tick={{ fontSize: 12 }}
            label={{ value: '온도 차이 범위 (°C)', position: 'insideBottom', offset: 0 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: '빈도', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value, name) => [
              `${value}회`, 
              name === 'frequency' ? '빈도' : name
            ]}
            labelFormatter={(label) => `온도 차이: ${label}°C`}
          />
          <Legend 
            formatter={(value) => value === 'frequency' ? '빈도' : value}
          />
          <Bar 
            dataKey="frequency" 
            fill="#3b82f6" 
            name="frequency"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
