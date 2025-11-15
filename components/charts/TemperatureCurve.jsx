'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function TemperatureCurve({ data, title = "온도 변화 곡선" }) {
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
        <LineChart
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
            dataKey="time"
            tick={{ fontSize: 12 }}
            label={{ value: '시간 (분)', position: 'insideBottom', offset: 0 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: '온도 (°C)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value, name) => [
              `${value}°C`, 
              name === 'interior' ? '실내 온도' : 
              name === 'exterior' ? '실외 온도' : 
              name === 'pcm' ? 'PCM 온도' : name
            ]}
            labelFormatter={(label) => `시간: ${label}분`}
          />
          <Legend 
            formatter={(value) => 
              value === 'interior' ? '실내 온도' : 
              value === 'exterior' ? '실외 온도' : 
              value === 'pcm' ? 'PCM 온도' : value
            }
          />
          <Line 
            type="monotone" 
            dataKey="interior" 
            stroke="#ef4444" 
            strokeWidth={2}
            dot={{ r: 3 }}
            name="interior"
          />
          <Line 
            type="monotone" 
            dataKey="exterior" 
            stroke="#f97316" 
            strokeWidth={2}
            dot={{ r: 3 }}
            name="exterior"
          />
          <Line 
            type="monotone" 
            dataKey="pcm" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ r: 3 }}
            name="pcm"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
