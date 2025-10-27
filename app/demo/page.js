'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Thermometer, Clock, CheckCircle, MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'

// 차트 컴포넌트들을 동적 임포트로 최적화
const TemperatureCurve = dynamic(() => import('@/components/charts/TemperatureCurve'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>
})

const DeltaHistogram = dynamic(() => import('@/components/charts/DeltaHistogram'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>
})

const RegionBar = dynamic(() => import('@/components/charts/RegionBar'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>
})

export default function DemoPage() {
  const [sessions, setSessions] = useState([])
  const [testers, setTesters] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    region: 'all',
    carModel: 'all',
    directSun: 'all',
    season: 'all'
  })

  // 데이터 로딩
  useEffect(() => {
    const loadData = async () => {
      try {
        const [sessionsRes, testersRes] = await Promise.all([
          fetch('/data/sessions.json'),
          fetch('/data/testers.json')
        ])
        
        const sessionsData = await sessionsRes.json()
        const testersData = await testersRes.json()
        
        setSessions(sessionsData)
        setTesters(testersData)
      } catch (error) {
        console.error('데이터 로딩 실패:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // 필터링된 세션 데이터
  const filteredSessions = sessions.filter(session => {
    return (
      (filters.region === 'all' || session.region === filters.region) &&
      (filters.carModel === 'all' || session.car_model === filters.carModel) &&
      (filters.directSun === 'all' || session.direct_sun.toString() === filters.directSun) &&
      (filters.season === 'all' || session.season === filters.season)
    )
  })

  // KPI 계산
  const kpis = {
    totalSessions: filteredSessions.length,
    meanDeltaTemp: filteredSessions.length > 0 
      ? (filteredSessions.reduce((sum, s) => sum + s.delta_temp, 0) / filteredSessions.length).toFixed(1)
      : 0,
    validRatio: filteredSessions.length > 0
      ? ((filteredSessions.filter(s => s.valid).length / filteredSessions.length) * 100).toFixed(1)
      : 0,
    topRegions: getTopRegions(filteredSessions)
  }

  function getTopRegions(sessions) {
    const regionStats = {}
    sessions.forEach(session => {
      if (!regionStats[session.region]) {
        regionStats[session.region] = { count: 0, totalDelta: 0 }
      }
      regionStats[session.region].count++
      regionStats[session.region].totalDelta += session.delta_temp
    })

    return Object.entries(regionStats)
      .map(([region, stats]) => ({
        region,
        avgDelta: (stats.totalDelta / stats.count).toFixed(1),
        sessions: stats.count
      }))
      .sort((a, b) => b.avgDelta - a.avgDelta)
      .slice(0, 5)
  }

  // 차트 데이터 준비
  const temperatureData = filteredSessions.slice(0, 1).map(session => {
    const data = []
    const duration = session.duration_minutes
    const steps = 12 // 10분 간격

    for (let i = 0; i <= steps; i++) {
      const time = (duration / steps) * i
      const progress = i / steps
      
      data.push({
        time: Math.round(time),
        exterior: session.exterior_temp_start + (session.exterior_temp_end - session.exterior_temp_start) * progress,
        interior: session.interior_temp_start + (session.interior_temp_end - session.interior_temp_start) * progress,
        pcm: session.pcm_temp_start + (session.pcm_temp_end - session.pcm_temp_start) * progress
      })
    }
    return data
  })[0] || []

  const deltaHistogramData = [
    { range: '0-2°C', frequency: filteredSessions.filter(s => s.delta_temp < 2).length },
    { range: '2-4°C', frequency: filteredSessions.filter(s => s.delta_temp >= 2 && s.delta_temp < 4).length },
    { range: '4-6°C', frequency: filteredSessions.filter(s => s.delta_temp >= 4 && s.delta_temp < 6).length },
    { range: '6-8°C', frequency: filteredSessions.filter(s => s.delta_temp >= 6 && s.delta_temp < 8).length },
    { range: '8°C+', frequency: filteredSessions.filter(s => s.delta_temp >= 8).length }
  ]

  const regionBarData = kpis.topRegions

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">데이터를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">솔루나 성능 데모</h1>
          <p className="text-lg text-gray-600">
            실제 테스트 데이터를 통해 솔루나 썬쉐이드의 성능을 확인해보세요.
          </p>
        </div>

        {/* 필터 섹션 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>데이터 필터</CardTitle>
            <CardDescription>원하는 조건으로 데이터를 필터링할 수 있습니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">지역</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={filters.region}
                  onChange={(e) => setFilters({...filters, region: e.target.value})}
                >
                  <option value="all">전체</option>
                  <option value="서울">서울</option>
                  <option value="부산">부산</option>
                  <option value="대구">대구</option>
                  <option value="인천">인천</option>
                  <option value="광주">광주</option>
                  <option value="대전">대전</option>
                  <option value="울산">울산</option>
                  <option value="수원">수원</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">차량 모델</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={filters.carModel}
                  onChange={(e) => setFilters({...filters, carModel: e.target.value})}
                >
                  <option value="all">전체</option>
                  <option value="현대 아반떼">현대 아반떼</option>
                  <option value="기아 K5">기아 K5</option>
                  <option value="현대 소나타">현대 소나타</option>
                  <option value="기아 스포티지">기아 스포티지</option>
                  <option value="현대 투싼">현대 투싼</option>
                  <option value="기아 셀토스">기아 셀토스</option>
                  <option value="현대 그랜저">현대 그랜저</option>
                  <option value="기아 쏘렌토">기아 쏘렌토</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">직사광선</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={filters.directSun}
                  onChange={(e) => setFilters({...filters, directSun: e.target.value})}
                >
                  <option value="all">전체</option>
                  <option value="true">있음</option>
                  <option value="false">없음</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">계절</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={filters.season}
                  onChange={(e) => setFilters({...filters, season: e.target.value})}
                >
                  <option value="all">전체</option>
                  <option value="봄">봄</option>
                  <option value="여름">여름</option>
                  <option value="가을">가을</option>
                  <option value="겨울">겨울</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 세션 수</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.totalSessions}</div>
              <p className="text-xs text-muted-foreground">테스트 세션</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">평균 온도 저감</CardTitle>
              <Thermometer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.meanDeltaTemp}°C</div>
              <p className="text-xs text-muted-foreground">평균 냉각 효과</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">유효 세션 비율</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.validRatio}%</div>
              <p className="text-xs text-muted-foreground">성공적인 테스트</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">최고 성능 지역</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {kpis.topRegions[0]?.region || 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                {kpis.topRegions[0]?.avgDelta || 0}°C 평균
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 차트 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>온도 변화 곡선</CardTitle>
              <CardDescription>시간에 따른 온도 변화를 보여줍니다</CardDescription>
            </CardHeader>
            <CardContent>
              <TemperatureCurve data={temperatureData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>온도 차이 분포</CardTitle>
              <CardDescription>냉각 효과의 분포를 나타냅니다</CardDescription>
            </CardHeader>
            <CardContent>
              <DeltaHistogram data={deltaHistogramData} />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>지역별 성능 비교</CardTitle>
            <CardDescription>지역별 평균 냉각 성능과 테스트 세션 수를 비교합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <RegionBar data={regionBarData} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
