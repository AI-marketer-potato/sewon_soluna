import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Thermometer, Shield, Zap, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              차세대 자동차 냉각 솔루션
              <span className="block text-primary">솔루나</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              PCM(상변화물질) 기술을 활용한 혁신적인 차량용 썬쉐이드로 
              여름철 차량 실내 온도를 평균 6~8°C 낮춰 안전하고 쾌적한 드라이빙을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/science">기술 알아보기</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/beta">베타 테스트 참여</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              왜 솔루나인가요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              혁신적인 PCM 기술과 열반사 원단을 결합한 원터치 우산형 썬쉐이드로 
              차량 냉각의 새로운 기준을 제시합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Thermometer className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>온도 저감</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  여름철 차량 실내 온도를 평균 6~8°C 낮춰 쾌적한 환경을 제공합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>안전 보호</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  영유아와 반려동물을 위한 안전한 차량 환경을 조성합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>간편 설치</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  원터치 우산형 구조로 10초 이내 설치 및 철거가 가능합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>사용자 중심</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  실제 사용자 피드백을 반영한 인체공학적 설계를 적용했습니다.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                PCM 기술의 혁신
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                상변화물질(PCM)과 열반사 원단을 결합한 복합 소재로 
                기존 썬쉐이드 대비 월등한 냉각 성능을 구현했습니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>28-32°C에서 상변화하는 파라핀계 PCM 적용</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>마이크로캡슐화 공정으로 내구성 확보</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>2시간 이상 지속되는 냉감 효과</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/science">자세히 알아보기</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">성능 비교</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>일반 썬쉐이드</span>
                    <div className="flex items-center">
                      <div className="w-20 h-4 bg-red-200 rounded mr-2"></div>
                      <span className="text-sm">2-3°C ↓</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">솔루나 썬쉐이드</span>
                    <div className="flex items-center">
                      <div className="w-32 h-4 bg-blue-500 rounded mr-2"></div>
                      <span className="text-sm font-semibold">6-8°C ↓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            솔루나와 함께 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            베타 테스트에 참여하여 혁신적인 PCM 기술을 먼저 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/beta">베타 테스트 신청</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/partners">파트너십 문의</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
