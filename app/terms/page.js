import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: '이용약관 - 솔루나',
  description: '솔루나 서비스 이용약관을 확인하세요.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">이용약관</h1>
          <p className="text-gray-600">
            솔루나 서비스 이용에 관한 제반 사항과 기타 필요한 사항을 규정합니다.
          </p>
          <p className="text-sm text-gray-500 mt-2">시행일자: 2024년 3월 1일</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>제1조 (목적)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>이 약관은 솔루나(이하 "회사")가 제공하는 베타 테스트 서비스, 파트너십 프로그램, 기타 관련 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제2조 (정의)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">1. "서비스"</h4>
                  <p className="text-sm">회사가 제공하는 PCM 썬쉐이드 베타 테스트, 파트너십 프로그램, 웹사이트 이용 등 모든 서비스를 의미합니다.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">2. "이용자"</h4>
                  <p className="text-sm">회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 개인 또는 법인을 의미합니다.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">3. "베타 테스터"</h4>
                  <p className="text-sm">회사의 제품 개발 과정에 참여하여 제품을 테스트하고 피드백을 제공하는 이용자를 의미합니다.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">4. "파트너"</h4>
                  <p className="text-sm">회사와 사업적 협력 관계를 맺고 상호 이익을 추구하는 개인 또는 법인을 의미합니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제3조 (약관의 효력 및 변경)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">1. 약관의 효력</h4>
                  <p className="text-sm">이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">2. 약관의 변경</h4>
                  <p className="text-sm">회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력을 발생합니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">3. 변경 공지</h4>
                  <p className="text-sm">약관이 변경되는 경우 회사는 변경사항을 시행일 7일 전부터 웹사이트를 통해 공지합니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제4조 (서비스의 제공)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>회사가 제공하는 서비스는 다음과 같습니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">베타 테스트 서비스</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-blue-700">
                    <li>제품 무료 제공 및 테스트 기회</li>
                    <li>피드백 수집 및 제품 개선 참여</li>
                    <li>우선 구매권 및 할인 혜택</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">파트너십 프로그램</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-green-700">
                    <li>사업 협력 기회 제공</li>
                    <li>기술 라이선스 및 OEM 공급</li>
                    <li>마케팅 및 유통 지원</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">정보 제공 서비스</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-purple-700">
                    <li>기술 정보 및 제품 소개</li>
                    <li>블로그 및 뉴스레터</li>
                    <li>고객 지원 및 상담</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">기타 서비스</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-orange-700">
                    <li>이벤트 및 프로모션</li>
                    <li>커뮤니티 운영</li>
                    <li>기술 지원 및 교육</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제5조 (이용자의 의무)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
              
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">금지 행위</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-red-700">
                    <li>타인의 개인정보를 도용하거나 허위 정보를 제공하는 행위</li>
                    <li>회사의 지적재산권을 침해하는 행위</li>
                    <li>서비스를 이용하여 얻은 정보를 무단으로 복제, 유통, 조작하는 행위</li>
                    <li>회사의 서비스 운영을 방해하는 행위</li>
                    <li>다른 이용자의 서비스 이용을 방해하는 행위</li>
                    <li>관련 법령에 위배되는 행위</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">준수 사항</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-green-700">
                  <li>정확하고 최신의 정보를 제공할 의무</li>
                  <li>베타 테스트 시 성실한 참여 및 피드백 제공</li>
                  <li>제공받은 제품 및 정보의 적절한 관리</li>
                  <li>회사의 영업비밀 및 기술정보 보호</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제6조 (회사의 의무)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">1. 서비스 제공 의무</h4>
                  <p className="text-sm">회사는 이용자에게 안정적이고 지속적인 서비스를 제공하기 위해 최선을 다합니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">2. 개인정보 보호 의무</h4>
                  <p className="text-sm">회사는 관련 법령에 따라 이용자의 개인정보를 보호하며, 개인정보처리방침에 따라 처리합니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">3. 품질 보증 의무</h4>
                  <p className="text-sm">회사는 제공하는 제품 및 서비스의 품질 향상을 위해 지속적으로 노력합니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">4. 고객 지원 의무</h4>
                  <p className="text-sm">회사는 이용자의 문의사항 및 불만사항에 대해 신속하고 성실하게 처리합니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제7조 (베타 테스트 특별 조항)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">베타 테스터의 권리</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-blue-700">
                    <li>무료 제품 제공 및 사용권</li>
                    <li>정식 출시 시 우선 구매권 및 할인 혜택</li>
                    <li>제품 개발 과정 참여 및 의견 반영</li>
                    <li>베타 테스트 종료 후 제품 소유권</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">베타 테스터의 의무</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-orange-700">
                    <li>정해진 기간 동안 성실한 테스트 참여</li>
                    <li>정확하고 상세한 피드백 제공</li>
                    <li>테스트 과정 및 결과에 대한 비밀 유지</li>
                    <li>제품의 적절한 사용 및 관리</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제8조 (지적재산권)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">1. 회사의 지적재산권</h4>
                  <p className="text-sm">서비스에 사용되는 모든 기술, 디자인, 콘텐츠 등에 대한 지적재산권은 회사에 귀속됩니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">2. 이용자 제공 정보</h4>
                  <p className="text-sm">이용자가 서비스 이용 과정에서 제공한 피드백, 아이디어 등은 제품 개선을 위해 활용될 수 있습니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">3. 침해 금지</h4>
                  <p className="text-sm">이용자는 회사의 지적재산권을 침해하는 행위를 해서는 안 되며, 이를 위반 시 관련 법령에 따라 처리됩니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제9조 (책임의 제한)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">1. 서비스 중단</h4>
                  <p className="text-sm">회사는 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">2. 베타 제품의 한계</h4>
                  <p className="text-sm">베타 테스트 제품은 개발 중인 제품으로, 완성품과 다를 수 있으며 이로 인한 손해에 대해 회사는 책임을 지지 않습니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">3. 이용자 과실</h4>
                  <p className="text-sm">이용자의 고의 또는 과실로 인한 손해에 대해서는 회사가 책임을 지지 않습니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제10조 (분쟁 해결)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">1. 준거법</h4>
                  <p className="text-sm">이 약관은 대한민국 법령에 따라 해석되고 적용됩니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">2. 관할법원</h4>
                  <p className="text-sm">서비스 이용과 관련하여 발생한 분쟁은 회사의 본사 소재지를 관할하는 법원을 전속관할로 합니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">3. 분쟁 조정</h4>
                  <p className="text-sm">분쟁 발생 시 당사자 간 협의를 통해 해결하며, 협의가 이루어지지 않을 경우 관련 법령에 따른 조정기관을 통해 해결할 수 있습니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제11조 (기타)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">1. 약관의 해석</h4>
                  <p className="text-sm">이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관련 법령 또는 상관례에 따릅니다.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">2. 연락처</h4>
                  <p className="text-sm">서비스 이용과 관련한 문의사항은 아래 연락처로 문의하시기 바랍니다.</p>
                  <div className="bg-gray-100 p-3 rounded mt-2">
                    <div className="text-sm space-y-1">
                      <div><span className="font-medium">이메일:</span> support@soluna.co.kr</div>
                      <div><span className="font-medium">전화:</span> 02-1234-5678</div>
                      <div><span className="font-medium">주소:</span> 서울특별시 강남구 테헤란로 123, 솔루나빌딩</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>부칙</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm space-y-1">
                  <div><span className="font-medium">시행일자:</span> 2024년 3월 1일</div>
                  <div><span className="font-medium">최초 제정:</span> 2024년 3월 1일</div>
                  <div><span className="font-medium">버전:</span> v1.0</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                본 약관은 2024년 3월 1일부터 시행됩니다. 이전 약관은 본 약관으로 대체되며, 
                변경된 약관은 공지사항을 통해 사전 고지됩니다.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            이용약관에 대한 문의사항이 있으시면 언제든지 연락주세요.
          </p>
          <div className="mt-4 space-x-4">
            <a href="mailto:support@soluna.co.kr" className="text-primary hover:text-primary/80">
              support@soluna.co.kr
            </a>
            <span className="text-gray-300">|</span>
            <a href="tel:02-1234-5678" className="text-primary hover:text-primary/80">
              02-1234-5678
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
