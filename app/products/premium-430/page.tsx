import { SiteHeader } from "@/components/site-header";
import { ProductSubNav430 } from "@/components/product/product-430-sub-nav";
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
  title: "다움 450 상조 패키지 | 다움",
  description:
    "조문객이 많은 일반 장례에 맞춘 다움 450 상조 패키지의 서비스 구성과 안내사항을 한 페이지에서 확인해 보세요.",
};

export default function Premium430Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <ProductSubNav430 />
      <main className="pb-20">
        {/* 1. 메인 카드 / 가격 섹션 */}
        <section className="bg-[#FDECF2]">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <div className="mx-auto max-w-xl rounded-3xl bg-[#FDECF2] text-center">
              <p className="text-sm font-medium text-slate-700">
                많은 조문객을 위한 품격 있는 장례
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                다움 450 
              </h1>
              <Image
                    src="/images/products/premium/premium-430_main.png"
                    alt="다움 450"
                    width={600}
                    height={400}
                    className="mt-8 rounded-3xl object-cover w-full max-w-xl mx-auto"
                  />

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-sm text-slate-700">
                  다움 450 구성을{" "}
                  <span className="font-semibold text-slate-900">
                    한 번에
                  </span>{" "}
                  준비해 보세요.
                </p>
                <div className="mt-5 flex items-end justify-center gap-6 text-sm md:text-base">
                  <div className="text-slate-500">
                    <div>정상가</div>
                    <div className="mt-1 text-base font-medium line-through">
                      4,500,000원
                    </div>
                  </div>
                  <div className="text-left text-emerald-700">
                    <div className="text-sm font-semibold">회원가</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-700 md:text-3xl">
                      4,300,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 다움 450 일반장 한줄 소개 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="rounded-2xl bg-white px-5 py-6 shadow-sm md:px-7 md:py-7">
              <h2 className="text-base font-semibold text-slate-900 md:text-lg">
                다움 450 장례는
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                조문객이 많은 장례에 맞춰 접객 인력과 차량, 장례 용품을
                다움 450으로 구성한 상품으로,
                <br className="hidden md:block" />
                예우와 편의를 모두 고려한 반장 패키지입니다.
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
              다움 450 장례 특징
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              많은 조문객과 긴 장례 일정에도 여유 있게 대응할 수 있는 구성을
              제공합니다.
            </p>

            <div className="mt-8 grid gap-6 grid-cols-3 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-4 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <UserCircle className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-sm text-slate-500">접객 도우미</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  8명
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
                    앰뷸런스 배차, 빈소 확인 및 예약을 지원하고
                    전문 장례지도사를 배정합니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <p>
                  지역 및 개별상황에 가장 적합한 장례식장을 추천합니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <p>
                  장례식장 정보는 위치와 빈소상태를 바탕으로 비용과 조건을 상세히 안내해 드립니다
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                    4
                  </span>
                  <p>
                    그 외, 장례 관련 상담이 필요할 때{" "}
                    <span className="font-semibold">1600-4417</span>로 연락
                    주세요.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 5. 다움의 변하지 않는 약속 */}
        {/* <section className="bg-white">
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
        </section> */}

        {/* 6. 다움 전체 서비스 비교 - 다움 450 일반장 포함 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              다움 전체 서비스 비교
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              무빈소장, 다움 220, 다움 350, 다움 450의 차이를 한눈에 비교해 보세요.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border bg-white text-sm md:text-base">
              <div className="grid grid-cols-5 bg-slate-50 text-center font-semibold text-slate-700">
                <div className="px-3 py-3 text-left text-xs font-medium text-slate-500 md:text-sm">
                  구분
                </div>
                <div className="px-3 py-3">무빈소장</div>
                <div className="px-3 py-3">다움 220</div>
                <div className="px-3 py-3">다움 350</div>
                <div className="px-3 py-3 text-emerald-700">다움 450</div>
              </div>
              <div className="divide-y text-center">
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    접객 도우미
                  </div>
                  <div className="px-3 py-3">없음</div>
                  <div className="px-3 py-3">4명</div>
                  <div className="px-3 py-3">6명</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    8명
                  </div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장례 용품
                  </div>
                  <div className="px-3 py-3">실속형</div>
                  <div className="px-3 py-3">실속형</div>
                  <div className="px-3 py-3">고급형</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                  고급형
                  </div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장의 차량
                  </div>
                  <div className="px-3 py-3">1대</div>
                  <div className="px-3 py-3">1대</div>
                  <div className="px-3 py-3">2대</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    2대
                  </div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    회원가
                  </div>
                  <div className="px-3 py-3">130만원</div>
                  <div className="px-3 py-3">200만원</div>
                  <div className="px-3 py-3">330만원</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    430만원
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 다움 450 일반장 구성품 상세 (요약형) */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              다움450 구성품 상세
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              장례 용품, 인력, 차량 구성을 한눈에 확인하세요.
            </p>

            {/* 장례 용품 */}
            <div className="mt-8">
              {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                <Package className="h-4 w-4 text-orange-500" />
                장례 용품
              </div> */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Package className="h-4 w-4 text-slate-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">장례 용품</h3>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {[
                  {
                    name: "오동나무 관",
                    desc: "",
                    price: "",
                    discount: null,
                    img: "/images/products/오동관1.png",
                  },
                  {
                    name: "고급 가진 수의",
                    desc: "저마 100%",
                    price: "",
                    discount: "",
                    img: "/images/수의.png",
                  },
                  {
                    name: "입관 수시 용품",
                    desc: "",
                    price: "",
                    discount: null,
                    img: "/images/products/입관 수시 용품1.png",
                  },
                  {
                    name: "진공 봉안함",
                    desc: "",
                    
                    price: "",
                    free: true,
                    img: "/images/진공유골함.png",
                  },
                  {
                    name: "프리미엄 꽃관 장식",
                    desc: "계절 생화",
                    price: "",
                    discount: null,
                    img: "/images/관장식꽃.jpg",
                  },
                  {
                    name: "남자상복/여자상복",
                    desc: "남자 8벌, 여자 10벌",
                    price: "",
                    discount: null,
                    img: "/images/상복-이미지1.png",
                    
                  },
                  {
                    name: "헌화용 국화꽃",
                    desc: "50송이",
                    price: "",
                    free: true,
                    img: "/images/products/헌화.jpg",
                  },
                  {
                    name: "영정사진",
                    desc: "",
                    price: "사전 가입 고객 한정 11R 사이즈 무료 제공",
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
                      {"label" in item && typeof (item as { label?: string }).label === "string" && (
                        <span className="mt-2 inline-block text-xs font-medium text-orange-600">
                          {(item as { label: string }).label}
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
                    desc: "",
                    price: "",
                    img: "/images/장례지도사1.png",
                  },
                  {
                    name: "염습지도사",
                    desc: "",
                    price: "",
                    img: "/images/염습지도사1.png",
                  },
                  {
                    name: "접객도우미",
                    desc: "8인 (8시간)",
                    price: "",
                    img: "/images/접객도우미.png",
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
                      src="/images/products/고인이송차량1.png"
                      alt="고인이송차량"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-900">고인이송차량</h4>
                    <p className="mt-0.5 text-sm text-slate-600">관내 이송</p>
                    {/* <p className="mt-2 text-lg font-bold text-slate-900">
                      100,000원
                    </p> */}
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-slate-900">
                    <Image
                      src="/images/products/리무진3.png"
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
                    <p className="mt-0.5 text-xs leading-snug text-slate-600">
                      리무진 300km 화장장 편도
                    </p>
                    <p className="text-xs text-slate-600">
                      장의버스 300km 왕복
                    </p>
                    {/* <p className="mt-2 text-lg font-bold text-slate-900">
                      450,000원
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. 다움 450 일반장 안내사항 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              다움 450 안내사항
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
                  4일장, 5일장 등 3일장보다 일정이 길어질 경우 장례지도사 서비스
                  비용이 1일당 20만원씩 추가됩니다.
                </li>
                <li>
                  접객도우미는 시간 초과 시 시간당 2만원이 추가되며, 반대로 시간
                  당 공제는 불가능합니다.
                </li>
                <li>
                  다움 이송차량은 관외 이용 시 추가 비용이 발생하며, 금액은 거리와
                  상황에 따라 책정됩니다.
                </li>
                <li>
                  상품 내 정해진 거리를 초과하여 장의차량을 이용할 경우, 차량
                  서비스 비용이 1km당 2천원씩 추가됩니다.
                </li>
                <li>
                  리무진은 편도 이용 기준이며, 초과 거리당 1km당 2천원이
                  추가됩니다.
                </li>
                <li>
                  장지 이외의 장소에 경유를 요청하시는 경우, 이동 거리 및 소요
                  시간에 따라 별도의 추가 경비가 발생합니다.
                </li>
                <li>
                  봉안함에 각인 서비스를 요청하실 경우 각인비가 최대 2만원
                  발생할 수 있습니다.
                </li>
                <li>
                  출동 후 서비스를 이용 중임에도 심각한 취소 위약금이 있을 경우
                  기존 상조회사와의 계약 해지 여부를 반드시 확인해 주세요.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. 24시간 상담 / 후기 요약 영역 */}
        {/* <section className="bg-white">
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
                다움 450 일반장 이용 후기
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                많은 조문객을 모신 장례에서도 만족스러웠던 실제 이용 후기를
                바탕으로 구성했습니다.
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-700 md:text-base">
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  조문객이 많았음에도 접객과 동선 안내가 매끄러워 유가족이
                  장례에 집중할 수 있었다는 후기가 많아요.
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  다움 450 구성이었지만 사전에 안내된 비용 안에서 진행되어
                  예산 관리가 수월했다는 의견이 많습니다.
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <SiteFooter />
    </div>
  );
}
