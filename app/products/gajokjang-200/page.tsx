import { SiteHeader } from "@/components/site-header";
import { ProductSubNav200 } from "@/components/product/product-200-sub-nav";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
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

export const metadata = {
  title: "가족장 상조 패키지 | 다움",
  description:
    "가족과 가까운 지인 중심으로 치르는 가족장 상조 패키지의 서비스 구성과 안내사항을 한 페이지에서 확인해 보세요.",
};

export default function Gajokjang200Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <ProductSubNav200 />
      <main className="pb-20">
        {/* 1. 메인 카드 / 가격 섹션 */}
        <section className="bg-[#FDF4E3]">
          <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
            <div className="mx-auto max-w-xl rounded-3xl bg-[#FDF4E3] text-center">
              <p className="text-sm font-medium text-slate-700">
                가족과 함께 준비하는 장례
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                가족장
              </h1>
              <Image
                    src="/images/products/gajokjang/gajokjang-200_main.png"
                    alt="가족장"
                    width={600}
                    height={400}
                    className="mt-8 rounded-3xl object-cover w-full max-w-xl mx-auto"
                  />
              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-sm text-slate-700">
                  특별 할인을 통해{" "}
                  <span className="font-semibold text-slate-900">
                    10만원 저렴하게
                  </span>{" "}
                  이용하세요
                </p>
                <div className="mt-5 flex items-end justify-center gap-6 text-sm md:text-base">
                  <div className="text-slate-500">
                    <div>정상가</div>
                    <div className="mt-1 text-base font-medium line-through">
                      2,100,000원
                    </div>
                  </div>
                  <div className="text-left text-emerald-700">
                    <div className="text-sm font-semibold">할인가</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-700 md:text-3xl">
                      2,000,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 가족장 한줄 소개 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="rounded-2xl bg-white px-5 py-6 shadow-sm md:px-7 md:py-7">
              <h2 className="text-base font-semibold text-slate-900 md:text-lg">
                가족장은
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                가까운 가족과 친지 중심으로 조용하고 차분하게 치르는 장례
                방식으로,
                <br className="hidden md:block" />
                복잡한 절차는 줄이고 필요한 서비스만 담은 합리적인 장례입니다.
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
              가족장 특징
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              소규모 조문에 맞춘 서비스 구성과 인력을 확인해 보세요.
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
                  실속형
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-4 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Bus className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-sm text-slate-500">장의 차량</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  1대
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
                    빈소 선택과 예약, 장례 일정 조율을 도와드리고 전담 상담원과
                    장례지도사를 배정합니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <p>
                    가족 구성과 예산, 종교에 맞춰 장례 형식을 제안하고 필요한
                    절차를 안내합니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <p>
                    식장과 장지 비용, 식사 및 부대비용까지 예산 내에서 설계할
                    수 있도록 상담해 드립니다.
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

        {/* 6. 다움 전체 서비스 비교 - 가족장 강조 */}
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
                <div className="px-3 py-3 text-emerald-700">가족장</div>
                <div className="px-3 py-3">고급형</div>
                <div className="px-3 py-3">프리미엄</div>
              </div>
              <div className="divide-y text-center">
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    접객 도우미
                  </div>
                  <div className="px-3 py-3">없음</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    2명
                  </div>
                  <div className="px-3 py-3">6명</div>
                  <div className="px-3 py-3">8명</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장례 용품
                  </div>
                  <div className="px-3 py-3">기본형</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    실속형
                  </div>
                  <div className="px-3 py-3">고급형</div>
                  <div className="px-3 py-3">고급형</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    장의 차량
                  </div>
                  <div className="px-3 py-3">1대</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    1대
                  </div>
                  <div className="px-3 py-3">2대</div>
                  <div className="px-3 py-3">2대</div>
                </div>
                <div className="grid grid-cols-5">
                  <div className="bg-slate-50 px-3 py-3 text-left text-xs font-medium text-slate-600 md:text-sm">
                    상품가
                  </div>
                  <div className="px-3 py-3">130만원</div>
                  <div className="bg-orange-50 px-3 py-3 font-semibold text-orange-600">
                    200만원
                  </div>
                  <div className="px-3 py-3">350만원</div>
                  <div className="px-3 py-3">430만원</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 가족장 구성품 상세 (요약형) */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              가족장 구성품 상세
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
                  <Package className="h-4 w-4 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">장례 용품</h3>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {(
                  [
                    {
                      name: "0.6 오동관",
                      desc: "화장용",
                      price: "200,000원",
                      discount: null,
                      img: "/images/products/오동관.png",
                    },
                    {
                      name: "화장용 수의",
                      desc: "(면 50%, 폴리 50%)",
                      price: "무료 제공",
                      free: true,
                      img: "/images/products/화장용 수의.jpg",
                    },
                    {
                      name: "입관 수시 용품",
                      desc: "15종(염포, 관보 등)",
                      price: "무료 제공",
                      free: true,
                      img: "/images/products/입관 수시 용품.png",
                    },
                    {
                      name: "유골함",
                      desc: "일반유골함",
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
                      desc: "남자 4벌, 여자 6벌",
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
                  ] as Array<{
                    name: string;
                    desc: string;
                    price: string;
                    img: string;
                    discount?: string | null;
                    label?: string;
                    free?: boolean;
                  }>
                ).map((item) => (
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
                      리무진or장의버스 택1
                    </h4>
                    <p className="mt-0.5 text-sm leading-snug text-slate-600">
                      리무진: 150km 화장장 편도
                    </p>
                    <p className="text-sm text-slate-600">
                      장의버스: 150km 왕복
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      450,000원
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 8. 가족장 안내사항 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              가족장 안내사항
            </h2>
            <div className="mt-4 rounded-2xl bg-white px-5 py-6 text-sm leading-relaxed text-slate-700 shadow-sm md:px-7 md:text-base">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  장례 일정이 3일을 초과하는 경우, 장례지도사 및 접객 도우미
                  비용이 일자별로 추가될 수 있습니다.
                </li>
                <li>
                  빈소 사용료, 식사·다과 비용 등은 장례식장 규정에 따라 별도
                  정산됩니다.
                </li>
                <li>
                  장의 차량 이용 거리가 상품에 포함된 기준 거리를 초과할 경우,
                  km당 추가 요금이 발생합니다.
                </li>
                <li>
                  장지 경유 또는 추가 방문지가 있을 경우, 이동 거리와 시간에
                  따라 별도 비용이 발생할 수 있습니다.
                </li>
                <li>
                  관·수의·유골함 등 품목 변경 시, 선택하신 품목의 차액만
                  청구됩니다.
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
                가족장 이용 후기
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                조용하고 단정한 가족장으로 보내드렸다는 유가족분들의 후기를
                확인해 보세요.
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-700 md:text-base">
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  갑작스러운 상황에서도 절차를 차분하게 이끌어 주어 큰 힘이
                  되었다는 의견이 많아요.
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  가족만 참석하는 장례여도 예우는 그대로 챙겨주어 만족도가
                  높았다는 후기가 많습니다.
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
