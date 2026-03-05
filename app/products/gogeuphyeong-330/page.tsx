import { SiteHeader } from "@/components/site-header";
import { ProductSubNav330 } from "@/components/product/product-330-sub-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  UserCircle,
  Package,
  Bus,
  Users2,
  ArrowRight,
  Plus,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "고급형 가족장 상조 패키지 | 다움",
  description:
    "조문객 응대와 예우를 강화한 고급형 가족장 상조 패키지의 서비스 구성과 안내사항을 한 페이지에서 확인해 보세요.",
};

export default function Gogeuphyeong330Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <ProductSubNav330 />
      <main className="pb-20">
        {/* 1. 메인 카드 / 가격 섹션 */}
        <section className="bg-[#F3F5FF]">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <div className="mx-auto max-w-xl rounded-3xl bg-[#F3F5FF] text-center">
              <p className="text-sm font-medium text-slate-700">
                예우를 한층 더 높인 가족장
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                고급형 가족장
              </h1>
              <Image
                    src="/images/products/gogeuphyeong/gogeuphyeong-330_main.png"
                    alt="고급형"
                    width={600}
                    height={400}
                    className="mt-8 rounded-3xl object-cover w-full max-w-xl mx-auto"
                  />

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-sm text-slate-700">
                  품격 있는 장례를{" "}
                  <span className="font-semibold text-slate-900">
                    실속 있는 가격
                  </span>
                  으로 준비해 보세요.
                </p>
                <div className="mt-5 flex items-end justify-center gap-6 text-sm md:text-base">
                  <div className="text-slate-500">
                    <div>정상가</div>
                    <div className="mt-1 text-base font-medium line-through">
                      3,400,000원
                    </div>
                  </div>
                  <div className="text-left text-emerald-700">
                    <div className="text-sm font-semibold">할인가</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-700 md:text-3xl">
                      3,300,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 고급형 가족장 한줄 소개 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="rounded-2xl bg-white px-5 py-6 shadow-sm md:px-7 md:py-7">
              <h2 className="text-base font-semibold text-slate-900 md:text-lg">
                고급형 가족장은
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                가족장에 필요한 기본 구성에 더해 접객 인력과 장례 용품을
                업그레이드한 상품으로,
                <br className="hidden md:block" />
                예우는 높이고 부담은 줄인 합리적인 고급형 장례입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 서비스 소개 / 특징 */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            {/* <div className="mb-6 flex gap-2 text-sm font-semibold">
              <button className="rounded-full bg-slate-900 px-4 py-1.5 text-white">
                서비스 소개
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-500">
                구성품 상세
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-500">
                안내사항
              </button>
            </div> */}

            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              고급형 가족장 특징
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              더 많은 조문객과 정성스러운 예우를 위한 구성을 확인해 보세요.
            </p>

            <div className="mt-8 grid gap-6 grid-cols-3 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-4 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <UserCircle className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-sm text-slate-500">접객 도우미</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  2명
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-4 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Package className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-sm text-slate-500">장례 용품</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  고급형
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-4 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Bus className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-sm text-slate-500">장의 차량</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  2대
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 px-5 py-6">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                24시 전화 상담 지원
              </h3>
              <p className="mt-2 text-sm text-slate-700 md:text-base">
                언제든 임종 접수와 장례 준비에 대한 상담을 받으실 수 있어요.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 어떤 도움을 받을 수 있나요? */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <div className="rounded-2xl bg-white px-5 py-7 shadow-sm md:px-7">
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                Q. 어떤 도움을 받을 수 있나요?
              </h2>
              <ol className="mt-5 space-y-4 text-sm text-slate-700 md:text-base">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    1
                  </span>
                  <p>
                    조문객 규모에 맞는 빈소와 장례식장을 추천하고 예약까지
                    도와드립니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <p>
                    고급형 수의와 관, 장식 구성에 대한 선택을 돕고 예산에 맞게
                    조정해 드립니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <p>
                    접객 인력 운영, 식사·음료 준비 등 장례 기간 동안 필요한
                    운영을 안내해 드립니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                    4
                  </span>
                  <p>
                    그 외, 장례 관련 상담이 필요할 때{" "}
                    <span className="font-semibold">1666-9784</span>로 연락
                    주세요.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 5. 다움의 변하지 않는 약속 */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              다움의 변하지 않는 약속
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              장례를 장례답게 만들기 위한 최소한의 원칙이에요.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-[#E4F0FF] px-5 py-4 text-sm text-slate-900 md:text-base">
                업계 최초 품목별 정찰제로 투명한 비용을 보장해요.
              </div>
              <div className="rounded-2xl bg-[#FFF0D9] px-5 py-4 text-sm text-slate-900 md:text-base">
                사용하지 않은 품목의 비용은 100% 공제해드려요.
              </div>
              <div className="rounded-2xl bg-[#FFE3E0] px-5 py-4 text-sm text-slate-900 md:text-base">
                노잣돈 등 부당한 비용을 절대로 유도하지 않아요.
              </div>
            </div>
          </div>
        </section>

        {/* 6. 다움 전체 서비스 비교 - 고급형 가족장 강조 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              다움 전체 서비스 비교
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              무빈소장, 가족장, 고급형, 프리미엄의 차이를 한눈에 비교해 보세요.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border bg-white text-sm md:text-base">
              <div className="grid grid-cols-5 bg-slate-50 text-center font-semibold text-slate-700">
                <div className="px-3 py-3 text-left text-xs font-medium text-slate-500 md:text-sm">
                  구분
                </div>
                <div className="px-3 py-3">무빈소장</div>
                <div className="px-3 py-3">가족장</div>
                <div className="px-3 py-3 text-emerald-700">고급형</div>
                <div className="px-3 py-3">프리미엄</div>
              </div>
              <div className="divide-y text-center">
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    접객 도우미
                  </div>
                  <div className="px-3 py-3">없음</div>
                  <div className="px-3 py-3">2명</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    2명
                  </div>
                  <div className="px-3 py-3">8명</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장례 용품
                  </div>
                  <div className="px-3 py-3">기본형</div>
                  <div className="px-3 py-3">실속형</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    고급형
                  </div>
                  <div className="px-3 py-3">고급형</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장의 차량
                  </div>
                  <div className="px-3 py-3">1대</div>
                  <div className="px-3 py-3">1대</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    2대
                  </div>
                  <div className="px-3 py-3">2대</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    상품가
                  </div>
                  <div className="px-3 py-3">130만원</div>
                  <div className="px-3 py-3">200만원</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    330만원
                  </div>
                  <div className="px-3 py-3">430만원</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 고급형 가족장 구성품 상세 (요약형) */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              고급형 가족장 구성품 상세
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              업그레이드된 용품과 인력 구성을 확인하세요.
            </p>

            {/* 장례 용품 */}
            <div className="mt-8">
              {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                <Package className="h-4 w-4 text-orange-500" />
                장례 용품
              </div> */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Package className="h-4 w-4 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">장례 용품</h3>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  {
                    name: "오동나무 1단관",
                    desc: "화장용",
                    price: "200,000원",
                    discount: null,
                    img: "/images/products/오동관.png",
                  },
                  {
                    name: "화장용 수의",
                    desc: "(면 50%, 폴리 50%)",
                    price: "140,000원",
                    discount: "250,000원",
                    label: "다움 할인가",
                    img: "/images/products/화장용 수의.jpg",
                  },
                  {
                    name: "입관 수시 용품",
                    desc: "15종(염포, 관보 등)",
                    price: "150,000원",
                    discount: null,
                    img: "/images/products/입관 수시 용품.png",
                  },
                  {
                    name: "유골함",
                    desc: "일반 유골함",
                    price: "무료 제공",
                    free: true,
                    img: "/images/products/일반유골함.jpg",
                  },
                  {
                    name: "관 장식용 생화",
                    desc: "계절 생화, 안개꽃",
                    price: "100,000원",
                    discount: null,
                    img: "/images/products/관 장식용 생화.jpg",
                  },
                  {
                    name: "남자상복/여자상복",
                    desc: "남자 5벌, 여자 8벌",
                    price: "무료 제공",
                    free: true,
                    img: "/images/products/상복 이미지.png",
                  },
                  {
                    name: "헌화용 국화꽃",
                    desc: "30송이",
                    price: "무료 제공",
                    free: true,
                    img: "/images/products/헌화.jpg",
                  },
                  {
                    name: "영정사진",
                    desc: "11R 사이즈",
                    price: "사전가입 고객 한정 무료 제공",
                    free: true,
                    img: "/images/products/영정사진.jpg",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="relative aspect-square bg-slate-900">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-slate-900">{item.name}</h4>
                      <p className="mt-0.5 text-sm text-slate-600">{item.desc}</p>
                      {item.label && (
                        <span className="mt-2 inline-block text-xs font-medium text-orange-600">
                          {item.label}
                        </span>
                      )}
                      <div className="mt-2 flex items-baseline gap-2">
                        {item.discount && (
                          <span className="text-sm text-slate-400 line-through">
                            {item.discount}
                          </span>
                        )}
                        <span
                          className={
                            item.free
                              ? "font-semibold text-emerald-600"
                              : "text-lg font-bold text-slate-900"
                          }
                        >
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 장례 인력 */}
            <div className="mt-12">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Users2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">장례 인력</h3>
              </div>
              {/* <div className="grid gap-4 sm:grid-cols-2"> */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  {
                    name: "장례지도사",
                    desc: "1인 3일",
                    price: "300,000원",
                    img: "/images/products/장례지도사.png",
                  },
                  {
                    name: "염습상례사",
                    desc: "1인 1일",
                    price: "150,000원",
                    img: "/images/products/염습상례사.png",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] bg-slate-900">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-slate-900">{item.name}</h4>
                      <p className="mt-0.5 text-sm text-slate-600">{item.desc}</p>
                      <p className="mt-2 text-lg font-bold text-slate-900">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 장의 차량 */}
            <div className="mt-12">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Bus className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">장의 차량</h3>
              </div>
              {/* <div className="grid gap-4 sm:grid-cols-2"> */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-slate-900">
                    <Image
                      src="/images/products/고인이송차량.png"
                      alt="고인이송차량"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-900">고인이송차량</h4>
                    <p className="mt-0.5 text-sm text-slate-600">관내 이송</p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      100,000원
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-slate-900">
                    <Image
                      src="/images/products/리무진.png"
                      alt="리무진/장의버스"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-900">
                      리무진, 장의버스
                    </h4>
                    <p className="mt-0.5 text-sm leading-snug text-slate-600">
                      리무진: 200km 화장장 편도
                    </p>
                    <p className="text-sm text-slate-600">
                      장의버스: 200km 왕복
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      450,000원
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 변경·추가 시 예시 비용 */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 md:p-8">
              <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                용품 변경 혹은 추가를 원하시나요?
              </h3>
              <p className="mt-1 text-sm text-slate-600 md:text-base">
                문의 많은 품목의 추가 비용 예시를 알려드립니다.
              </p>

              {/* 유골함 변경 시 */}
              <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
                <div className="mb-4 inline-block rounded-full bg-slate-200/80 px-4 py-1.5 text-sm font-medium text-slate-700">
                  유골함 변경 시
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-lg border-2 border-slate-800 bg-slate-100">
                      <Image
                        src="/images/products/유골함.png"
                        alt="오동나무 목함"
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      오동나무 목함
                    </p>
                    <p className="text-sm font-semibold text-emerald-600">
                      무료 제공
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 shrink-0 text-slate-400" />
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                      <Image
                        src="/images/products/일반유골함.jpg"
                        alt="일반 유골함"
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      일반 유골함
                    </p>
                    <p className="text-sm text-slate-400 line-through">
                      250,000원
                    </p>
                    <p className="font-bold text-slate-900">150,000원</p>
                  </div>
                </div>
                <p className="mt-4 text-center font-semibold text-orange-600">
                  15만원 추가
                </p>
              </div>

              {/* 수의 변경 시 */}
              <div className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="mb-4 inline-block rounded-full bg-slate-200/80 px-4 py-1.5 text-sm font-medium text-slate-700">
                  수의 변경 시
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-28 w-28 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src="/images/products/화장용 수의.jpg"
                        alt="화장용 수의"
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      화장용 수의
                    </p>
                    <p className="text-sm text-slate-400 line-through">
                      250,000원
                    </p>
                    <p className="font-bold text-slate-900">140,000원</p>
                  </div>
                  <ArrowRight className="h-6 w-6 shrink-0 text-slate-400" />
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-28 w-28 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src="/images/products/고급면수의.jpg"
                        alt="고급 면 가진수의"
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      고급 면 가진수의
                    </p>
                    <p className="text-sm text-slate-400 line-through">
                      300,000원
                    </p>
                    <p className="font-bold text-slate-900">200,000원</p>
                  </div>
                </div>
                <p className="mt-4 text-center font-semibold text-orange-600">
                  6만원 추가
                </p>
              </div>

              {/* 장의 차량 변경 시 */}
              <div className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="mb-4 inline-block rounded-full bg-slate-200/80 px-4 py-1.5 text-sm font-medium text-slate-700">
                  장의 차량 변경 시
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-28 w-36 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src="/images/products/버스.png"
                        alt="45인승 장의버스"
                        fill
                        className="object-cover"
                        sizes="144px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      45인승 장의버스
                    </p>
                    <p className="font-bold text-slate-900">450,000원</p>
                  </div>
                  <ArrowRight className="h-6 w-6 shrink-0 text-slate-400" />
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-28 w-36 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src="/images/products/리무진1.png"
                        alt="리무진"
                        fill
                        className="object-cover"
                        sizes="144px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      리무진
                    </p>
                    <p className="font-bold text-slate-900">450,000원</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    200km 초과 시 km당 2천원이 추가됩니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    장의버스는 화장장/장지까지 왕복, 리무진은 편도 이용 기준으로
                    장의 차량 변경 시 참고 부탁드립니다.
                  </li>
                </ul>
                <p className="mt-4 text-center font-bold text-orange-600">
                  추가 비용 없음
                </p>
              </div>

              {/* 매장으로 변경 시 */}
              <div className="mt-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="mb-4 inline-block rounded-full bg-slate-200/80 px-4 py-1.5 text-sm font-medium text-slate-700">
                  매장으로 변경 시
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-28 w-32 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src="/images/products/오동관.png"
                        alt="매장용 관"
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      매장용 관으로 변경
                    </p>
                    <p className="font-semibold text-slate-900">10만원 추가</p>
                  </div>
                  <Plus className="h-6 w-6 shrink-0 text-slate-500" />
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-28 w-32 overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src="/images/products/입관 수시 용품.png"
                        alt="매장 용품"
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-900">
                      매장 용품 추가
                    </p>
                    <p className="font-semibold text-slate-900">25만원 추가</p>
                  </div>
                </div>
                <p className="mt-4 text-center text-lg font-bold text-orange-600">
                  35만원 추가
                </p>
              </div>

              {/* 100% 공제 안내 */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-slate-700 md:text-base">
                  사용하지 않은 품목의 비용은 100% 공제됩니다.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 8. 고급형 가족장 안내사항 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              고급형 가족장 안내사항
            </h2>
            <div className="mt-4 rounded-2xl bg-white px-5 py-6 text-sm leading-relaxed text-slate-700 shadow-sm md:px-7 md:text-base">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  장례 일정 연장, 접객 인력 추가 등은 사전 협의를 통해 비용이
                  안내됩니다.
                </li>
                <li>
                  빈소 사용료, 식사·다과 비용 등은 장례식장 규정에 따라 별도
                  정산됩니다.
                </li>
                <li>
                  장의 차량은 상품에 포함된 거리 내에서 이용 가능하며, 초과 시
                  km당 추가 요금이 발생할 수 있습니다.
                </li>
                <li>
                  구성품 변경 시, 선택하신 품목의 차액만 청구되며 사용하지 않은
                  품목은 100% 공제됩니다.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. 24시간 상담 / 후기 요약 영역 */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12 space-y-10">
            <div className="rounded-2xl bg-[#E3F0FF] px-5 py-7 text-sm md:text-base">
              <p className="font-semibold text-slate-900">
                전국 어디서든 24시간 접수와 상담 편하게 연락주세요.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                  채팅문의
                </button>
                <button className="rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white">
                  전화문의
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                고급형 가족장 이용 후기
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                예우와 구성에 만족했다는 실제 이용 후기의 핵심 내용을
                담았습니다.
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-700 md:text-base">
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  장례식장과 장지까지 모든 동선을 세심하게 챙겨줘 편안하게
                  진행할 수 있었다는 후기가 많아요.
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  장례 용품과 장식이 기대 이상이었고, 추가 비용에 대한 설명도
                  투명해 안심이 되었다는 의견이 많습니다.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
