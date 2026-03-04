# DAWOM Funeral 2026

Next.js 16 (LTS) + Supabase + Vercel 기반 프로젝트입니다.

## 스택

- **Next.js 16.x** (2026년 3월 기준 Active LTS)
- **React 19**
- **Supabase** (Auth, DB, Storage)
- **Vercel** 배포
- TypeScript, Tailwind CSS, shadcn/ui

## 로컬 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. Supabase 환경 변수 설정

1. [Supabase 대시보드](https://database.new)에서 프로젝트 생성
2. `.env.example`을 복사해 `.env.local` 생성
3. [프로젝트 API 설정](https://supabase.com/dashboard/project/_/settings/api)에서 아래 값 입력:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-or-anon-key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## Vercel 배포

1. [Vercel](https://vercel.com)에 저장소 연결
2. [Vercel × Supabase 연동](https://vercel.com/integrations/supabase) 사용 시 환경 변수 자동 설정
3. 수동 설정 시 Vercel 프로젝트 설정에서 위 두 환경 변수 추가

## 포함된 기능

- **Supabase SSR**: 쿠키 기반 인증 (App Router, Server/Client Components, Route Handlers, Server Actions, Middleware 지원)
- **shadcn/ui**: 비밀번호 기반 로그인 등 UI 컴포넌트
- **Tailwind CSS** 스타일링

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |
