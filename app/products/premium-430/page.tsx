import { SiteHeader } from "@/components/site-header";
import { ProductSubNav430 } from "@/components/product/product-430-sub-nav";
import { SiteFooter } from "@/components/site-footer";
import { UserCircle, Package, Bus } from "lucide-react";

export const metadata = {
  title: "프리미엄 일반장 상조 패키지 | 다움",
  description:
    "조문객이 많은 일반 장례에 맞춘 프리미엄 상조 패키지의 서비스 구성과 안내사항을 한 페이지에서 확인해 보세요.",
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
                프리미엄 일반장
              </h1>

              <div className="mt-8 h-52 rounded-3xl bg-[#F6C9DA]" />

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-sm text-slate-700">
                  프리미엄 구성을{" "}
                  <span className="font-semibold text-slate-900">
                    한 번에
                  </span>{" "}
                  준비해 보세요.
                </p>
                <div className="mt-5 flex items-end justify-center gap-6 text-sm md:text-base">
                  <div className="text-slate-500">
                    <div>정상가</div>
                    <div className="mt-1 text-base font-medium line-through">
                      4,390,000원
                    </div>
                  </div>
                  <div className="text-left text-emerald-700">
                    <div className="text-sm font-semibold">할인가</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-700 md:text-3xl">
                      4,190,000원
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 프리미엄 일반장 한줄 소개 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="rounded-2xl bg-white px-5 py-6 shadow-sm md:px-7 md:py-7">
              <h2 className="text-base font-semibold text-slate-900 md:text-lg">
                프리미엄 장례는
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                조문객이 많은 장례에 맞춰 접객 인력과 차량, 장례 용품을
                프리미엄으로 구성한 상품으로,
                <br className="hidden md:block" />
                예우와 편의를 모두 고려한 일반장 패키지입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 서비스 소개 / 특징 */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <div className="mb-6 flex gap-2 text-sm font-semibold">
              <button className="rounded-full bg-slate-900 px-4 py-1.5 text-white">
                서비스 소개
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-500">
                구성품 상세
              </button>
              <button className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-500">
                안내사항
              </button>
            </div>

            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              프리미엄 장례 특징
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              많은 조문객과 긴 장례 일정에도 여유 있게 대응할 수 있는 구성을
              제공합니다.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-4 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <UserCircle className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-sm text-slate-500">접객 도우미</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  6명
                </div>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-slate-50 px-4 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200/80 text-slate-600">
                  <Package className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-sm text-slate-500">장례 용품</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  프리미엄형
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
                    예상 조문객 수와 예산에 맞는 장례식장, 빈소 규모를 추천하고
                    예약까지 도와드립니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <p>
                    프리미엄 용품 구성과 접객 인력 운영을 설계해 드려, 장례 기간
                    동안 유가족의 부담을 줄여 드립니다.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <p>
                    식사·다과, 근조 화환, 추가 차량 등 부대비용 항목까지
                    종합적으로 상담해 드립니다.
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

        {/* 6. 다움 전체 서비스 비교 - 프리미엄 일반장 포함 */}
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
                <div className="px-3 py-3">고급형</div>
                <div className="px-3 py-3 text-emerald-700">프리미엄</div>
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
                  <div className="px-3 py-3">기본형</div>
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
                    상품가
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

        {/* 7. 프리미엄 일반장 구성품 상세 (요약형) */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              프리미엄 일반장 구성품 상세
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              많은 조문객을 맞이하기 위한 프리미엄 구성을 확인하세요.
            </p>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  장례 용품
                </h3>
                <ul className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-2 md:text-base">
                  <li>프리미엄 관 및 최고급 수의 세트</li>
                  <li>헌정·제단·분향대 생화 풀세트</li>
                  <li>입관 수시 프리미엄 세트</li>
                  <li>프리미엄 유골함 및 장식 구성</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  장례 인력
                </h3>
                <ul className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-2 md:text-base">
                  <li>경력 장례지도사 1인 3일</li>
                  <li>염습 인력 2인 1일</li>
                  <li>접객 도우미 6명 (시간제)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  장의 차량
                </h3>
                <ul className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-2 md:text-base">
                  <li>다움 이송 차량 (관내 기준)</li>
                  <li>장례식장 ↔ 장지 왕복 운구 차량 2대</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  변경·추가 시 예시 비용
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 md:text-base">
                  <li>용품 상향 변경 시 품목별 차액만 추가 청구</li>
                  <li>거리·시간 초과 운행 및 접객 인력 추가 시 약관에 따른 추가 요금 부과</li>
                </ul>
                <p className="mt-3 text-sm font-semibold text-emerald-700 md:text-base">
                  사용하지 않은 품목의 비용은 100% 공제됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. 프리미엄 일반장 안내사항 */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              프리미엄 일반장 안내사항
            </h2>
            <div className="mt-4 rounded-2xl bg-white px-5 py-6 text-sm leading-relaxed text-slate-700 shadow-sm md:px-7 md:text-base">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  조문객 수와 일정에 따라 접객 인력 및 차량 구성이 조정될 수
                  있으며, 이에 따른 비용이 사전 안내됩니다.
                </li>
                <li>
                  빈소 사용료, 식사·다과, 화환 등은 장례식장 및 협력 업체
                  규정에 따라 별도 정산됩니다.
                </li>
                <li>
                  상품에 포함된 거리 및 시간 기준을 초과하는 운행에는 km당
                  추가 요금이 발생할 수 있습니다.
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
                프리미엄 일반장 이용 후기
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
                  프리미엄 구성이었지만 사전에 안내된 비용 안에서 진행되어
                  예산 관리가 수월했다는 의견이 많습니다.
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
