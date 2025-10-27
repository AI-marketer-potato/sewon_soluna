import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: '개인정보처리방침 - 솔루나',
  description: '솔루나의 개인정보처리방침을 확인하세요.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">개인정보처리방침</h1>
          <p className="text-gray-600">
            솔루나는 고객의 개인정보를 소중히 여기며, 관련 법령에 따라 안전하게 처리합니다.
          </p>
          <p className="text-sm text-gray-500 mt-2">시행일자: 2024년 3월 1일</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>제1조 (개인정보의 처리목적)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>솔루나는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. 베타 테스트 서비스 제공</h4>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>베타 테스터 선발 및 관리</li>
                  <li>제품 배송 및 피드백 수집</li>
                  <li>테스트 결과 분석 및 제품 개선</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. 파트너십 및 사업 협력</h4>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>파트너십 문의 처리 및 협력 논의</li>
                  <li>사업 제안서 검토 및 계약 체결</li>
                  <li>협력사 관리 및 소통</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3. 마케팅 및 광고 활용</h4>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>신제품 및 서비스 안내</li>
                  <li>이벤트 및 프로모션 정보 제공</li>
                  <li>뉴스레터 발송</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제2조 (개인정보의 처리 및 보유기간)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>솔루나는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">처리목적</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">보유기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">베타 테스트 서비스</td>
                      <td className="border border-gray-300 px-4 py-2">테스트 종료 후 1년</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">파트너십 문의</td>
                      <td className="border border-gray-300 px-4 py-2">문의 처리 완료 후 3년</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">마케팅 활용</td>
                      <td className="border border-gray-300 px-4 py-2">동의 철회 시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제3조 (개인정보의 제3자 제공)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>솔루나는 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">제3자 제공 현황</h4>
                <p className="text-yellow-700 text-sm">현재 솔루나는 개인정보를 제3자에게 제공하지 않습니다. 향후 제3자 제공이 필요한 경우 사전에 동의를 받겠습니다.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제4조 (개인정보처리의 위탁)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>솔루나는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">위탁받는 자</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">위탁업무</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">위탁기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Google LLC</td>
                      <td className="border border-gray-300 px-4 py-2">설문조사 및 폼 서비스</td>
                      <td className="border border-gray-300 px-4 py-2">서비스 이용 기간</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">택배업체</td>
                      <td className="border border-gray-300 px-4 py-2">제품 배송</td>
                      <td className="border border-gray-300 px-4 py-2">배송 완료 시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제5조 (정보주체의 권리·의무 및 행사방법)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>정보주체는 솔루나에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">정보주체의 권리</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-blue-700">
                    <li>개인정보 처리현황 통지 요구</li>
                    <li>개인정보 열람 요구</li>
                    <li>개인정보 정정·삭제 요구</li>
                    <li>개인정보 처리정지 요구</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">권리 행사 방법</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-green-700">
                    <li>서면, 전화, 이메일을 통한 연락</li>
                    <li>개인정보보호 담당자에게 직접 요청</li>
                    <li>대리인을 통한 권리 행사 가능</li>
                    <li>지체 없이 조치하여 결과 통지</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제6조 (개인정보의 안전성 확보조치)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>솔루나는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">기술적 조치</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>개인정보처리시스템 등의 접근권한 관리</li>
                    <li>접근통제시스템 설치 및 운영</li>
                    <li>개인정보의 암호화</li>
                    <li>보안프로그램 설치 및 갱신</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">관리적 조치</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>개인정보 취급직원의 최소화 및 교육</li>
                    <li>개인정보 취급방침의 수립 및 시행</li>
                    <li>정기적인 자체 감사 실시</li>
                    <li>개인정보 취급현황 점검</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제7조 (개인정보보호책임자)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>솔루나는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.</p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">개인정보보호책임자</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">성명:</span> 김개인</div>
                      <div><span className="font-medium">직책:</span> 개인정보보호팀장</div>
                      <div><span className="font-medium">연락처:</span> 02-1234-5678</div>
                      <div><span className="font-medium">이메일:</span> privacy@soluna.co.kr</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">개인정보보호담당자</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">성명:</span> 이담당</div>
                      <div><span className="font-medium">직책:</span> 개인정보보호담당자</div>
                      <div><span className="font-medium">연락처:</span> 02-1234-5679</div>
                      <div><span className="font-medium">이메일:</span> privacy@soluna.co.kr</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제8조 (권익침해 구제방법)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800 mb-2">개인정보침해신고센터</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div>privacy.go.kr</div>
                    <div>국번없이 182</div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 mb-2">개인정보분쟁조정위원회</h4>
                  <div className="text-sm text-green-700 space-y-1">
                    <div>privacy.go.kr</div>
                    <div>국번없이 1833-6972</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800 mb-2">대검찰청 사이버범죄수사단</h4>
                  <div className="text-sm text-purple-700 space-y-1">
                    <div>spo.go.kr</div>
                    <div>국번없이 1301</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>제9조 (개인정보처리방침 변경)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-sm space-y-1">
                  <div><span className="font-medium">현재 버전:</span> v1.0</div>
                  <div><span className="font-medium">시행일자:</span> 2024년 3월 1일</div>
                  <div><span className="font-medium">최종 수정일:</span> 2024년 3월 1일</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            개인정보처리방침에 대한 문의사항이 있으시면 언제든지 연락주세요.
          </p>
          <div className="mt-4 space-x-4">
            <a href="mailto:privacy@soluna.co.kr" className="text-primary hover:text-primary/80">
              privacy@soluna.co.kr
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
