# 솔루나 (Soluna) - PCM 기술 웹사이트

솔루나는 PCM(상변화물질) 기술을 활용한 혁신적인 차량용 썬쉐이드를 개발하는 스타트업입니다. 이 웹사이트는 Next.js 14 App Router를 기반으로 구축된 프로덕션급 웹 애플리케이션입니다.

## 🚀 주요 기능

### 📱 페이지 구성
- **홈페이지** (`/`) - 솔루나 소개 및 PCM 기술 개요
- **기술 소개** (`/science`) - PCM 기술 상세 설명 및 SVG 다이어그램
- **데모** (`/demo`) - 실제 테스트 데이터 시각화 및 필터링
- **베타 테스트** (`/beta`) - Google Forms 연동 베타 테스터 모집
- **파트너십** (`/partners`) - 사업 협력 문의 및 파트너십 프로그램
- **블로그** (`/blog`, `/blog/[slug]`) - MDX 기반 기술 블로그
- **개인정보처리방침** (`/privacy`) - 개인정보 보호 정책
- **이용약관** (`/terms`) - 서비스 이용 약관

### 🎨 기술 스택
- **Frontend**: Next.js 14 (App Router), React 18
- **Styling**: TailwindCSS, shadcn/ui
- **Charts**: Recharts (동적 임포트로 최적화)
- **Content**: MDX (블로그 시스템)
- **Icons**: Lucide React
- **Language**: JavaScript (ES2022)

### 📊 데이터 시각화
- **온도 변화 곡선**: 시간에 따른 실내외 온도 변화
- **온도 차이 분포**: 냉각 효과 히스토그램
- **지역별 성능**: 지역별 평균 성능 비교 차트
- **실시간 필터링**: 지역, 차량 모델, 계절, 직사광선 조건별 필터

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone <repository-url>
cd PCM

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 프로덕션 빌드
```bash
# 빌드
npm run build
# 또는
yarn build

# 프로덕션 서버 실행
npm start
# 또는
yarn start
```

## 📁 프로젝트 구조

```
PCM/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # 전역 스타일
│   ├── layout.js                # 루트 레이아웃
│   ├── page.js                  # 홈페이지
│   ├── science/                 # 기술 소개 페이지
│   ├── demo/                    # 데모 페이지
│   ├── beta/                    # 베타 테스트 페이지
│   ├── partners/                # 파트너십 페이지
│   ├── blog/                    # 블로그 목록 및 상세 페이지
│   ├── privacy/                 # 개인정보처리방침
│   └── terms/                   # 이용약관
├── components/                   # 재사용 가능한 컴포넌트
│   ├── ui/                      # shadcn/ui 컴포넌트
│   ├── charts/                  # Recharts 차트 컴포넌트
│   ├── Navigation.jsx           # 네비게이션 바
│   └── Footer.jsx               # 푸터
├── content/                     # MDX 콘텐츠
│   └── posts/                   # 블로그 포스트
├── lib/                         # 유틸리티 함수
│   ├── utils.js                 # 공통 유틸리티
│   └── mdx.js                   # MDX 처리 함수
├── public/                      # 정적 파일
│   └── data/                    # Mock JSON 데이터
│       ├── sessions.json        # 테스트 세션 데이터
│       ├── testers.json         # 베타 테스터 데이터
│       └── leads.json           # 리드 데이터
└── README.md                    # 프로젝트 문서
```

## 📊 Mock 데이터 구조

### 테스트 세션 데이터 (`/public/data/sessions.json`)
```json
{
  "id": "세션 ID",
  "tester_id": "테스터 ID",
  "date": "테스트 날짜",
  "region": "지역",
  "car_model": "차량 모델",
  "season": "계절",
  "direct_sun": "직사광선 여부",
  "duration_minutes": "테스트 시간(분)",
  "exterior_temp_start": "외부 시작 온도",
  "exterior_temp_end": "외부 종료 온도",
  "interior_temp_start": "실내 시작 온도",
  "interior_temp_end": "실내 종료 온도",
  "pcm_temp_start": "PCM 시작 온도",
  "pcm_temp_end": "PCM 종료 온도",
  "delta_temp": "온도 차이",
  "fuel_efficiency_improvement": "연비 개선율",
  "valid": "유효성"
}
```

## 🎯 성능 최적화

### Lighthouse 성능 목표
- **Performance**: ≥85 (모바일)
- **Accessibility**: ≥90
- **Best Practices**: ≥90
- **SEO**: ≥90

### 최적화 기법
1. **동적 임포트**: 차트 컴포넌트 지연 로딩
2. **이미지 최적화**: `next/image` 사용
3. **폰트 최적화**: `next/font` 사용
4. **번들 분할**: 페이지별 코드 스플리팅
5. **메타데이터**: SEO 최적화된 메타태그

## 🔧 개발 가이드

### 새로운 블로그 포스트 추가
1. `/content/posts/` 디렉토리에 `.mdx` 파일 생성
2. Front matter 작성:
```yaml
---
title: "포스트 제목"
description: "포스트 설명"
date: "2024-03-20"
author: "작성자"
category: "카테고리"
tags: ["태그1", "태그2"]
---
```
3. MDX 콘텐츠 작성
4. 자동으로 블로그 목록에 표시됨

### 새로운 차트 컴포넌트 추가
1. `/components/charts/` 디렉토리에 컴포넌트 생성
2. Recharts 라이브러리 사용
3. `data` props로 데이터 전달
4. 반응형 디자인 적용

### Mock 데이터 수정
1. `/public/data/` 디렉토리의 JSON 파일 수정
2. 클라이언트에서 `fetch('/data/filename.json')` 사용
3. 데이터 구조 변경 시 관련 컴포넌트도 함께 수정

## 🚀 배포

### Vercel 배포 (권장)
1. Vercel 계정 생성 및 GitHub 연동
2. 프로젝트 임포트
3. 자동 배포 설정 완료

### 환경 변수 설정
필요한 환경 변수가 있다면 `.env.local` 파일 생성:
```bash
# Google Forms URL (실제 사용 시)
NEXT_PUBLIC_BETA_FORM_URL=your_google_form_url
NEXT_PUBLIC_PARTNERSHIP_FORM_URL=your_google_form_url
```

### 기타 플랫폼 배포
- **Netlify**: `npm run build` 후 `out` 폴더 배포
- **AWS S3**: 정적 웹사이트 호스팅 설정
- **Docker**: Dockerfile 작성 후 컨테이너 배포

## 🔍 주요 특징

### 접근성 (Accessibility)
- 시맨틱 HTML 사용
- ARIA 라벨 적용
- 키보드 네비게이션 지원
- 색상 대비 최적화

### 반응형 디자인
- 모바일 퍼스트 접근
- Tailwind CSS 반응형 클래스 사용
- 다양한 화면 크기 지원

### SEO 최적화
- 메타데이터 최적화
- Open Graph 태그
- 구조화된 데이터
- 사이트맵 자동 생성

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: contact@soluna.co.kr
- **웹사이트**: https://soluna.co.kr
- **GitHub**: https://github.com/soluna-tech

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 라이브러리들을 사용합니다:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lucide React](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**솔루나와 함께 자동차 냉각 기술의 미래를 만들어가세요!** 🚗❄️
