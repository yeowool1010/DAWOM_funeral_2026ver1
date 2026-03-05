import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChevronRight, CheckCircle2, Phone, MessageSquare, Star } from "lucide-react";

export const metadata = {
  title: "회사소개 | 장례, 어디서부터 시작해야 할까요? | 다움",
  description:
    "처음하는 장례 준비, 어떻게 해야 후회 없을까요? 믿을 수 있는 장례지도사를 만나는 방법을 다움이 안내합니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="pb-20">
        {/* Hero */}
        <section className="relative min-h-[420px] overflow-hidden py-16 md:min-h-[480px] md:py-24">
          <Image
            src="/images/about/hero1.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-stone-900/60"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-[320px] flex-col justify-center md:min-h-[380px]">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
              <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                처음하는 장례 준비,
                <br />
                어떻게 해야
                <br />
                후회 없을까요?
              </h1>
              <p className="mt-6 text-stone-200">－ 다움장례</p>
              <p className="mt-8 text-lg text-stone-100">
                장례를 잘 준비한다는 것은
                <br />
                도대체 무엇일까요?
              </p>
            </div>
          </div>
        </section>

        {/* 장례, 어디서부터 시작해야 할까요? */}
        <section className="border-t border-stone-200 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-center text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
              장례,
              <br />
              어디서부터
              <br />
              시작해야 할까요?
            </h2>
            <div className="mt-10 space-y-4 text-stone-600 md:text-lg">
              <p>
                가격 얘기부터 시작하여 부담만 주는 상담원. 장례식장에 전화만 하면
                한번에 해결된다고 알려주는 지인. 지나치게 많은 상조 회사에,
                넘치는 광고글.
              </p>
              <p>많이 알아볼수록 혼란스럽기만 해요.</p>
              <p>
                어떤 기준으로 알아봐야 할까요? 어떤 곳이 믿을만하고, 장례를
                맡길 수 있을까요?
              </p>
            </div>
          </div>
        </section>

        {/* 이것만 기억하세요 */}
        <section className="bg-stone-900 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm font-medium text-stone-300">
              이것만 기억하세요.
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
              장례를 잘 치르는 것
              <br />
              = 좋은 장례지도사를
              <br />
              만나는 것
            </h2>
          </div>
        </section>

        {/* 설명 */}
        <section className="border-t border-stone-200 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-lg leading-relaxed text-stone-700 md:text-xl">
              장례를 잘 준비한다는 것은 믿을 수 있는 업체와 장례지도사를 만나는
              것이에요. 이것이 전부라고 해도 과장이 아니에요.
            </p>
            <p className="mt-6 text-stone-600 md:text-lg">
              왜냐하면, 장례에 필요한 모든 것은 업체가 아니라 업체에 속한
              &apos;장례지도사&apos;가 준비하고 진행하기 때문이에요.
            </p>
            <p className="mt-6 text-stone-600 md:text-lg">
              당연히 해야 하는 절차 이외에도 3일동안 가족들의 불편함을 발벗고
              나서 해소하고 요구사항을 들어주는 등 많은 일을 해내요.
            </p>
            <p className="mt-6 font-medium text-stone-800 md:text-lg">
              곧, 장례식 진행 = 장례지도사라는 공식이 성립해요.
            </p>
          </div>
        </section>

        {/* 그런데 어디서? */}
        <section className="bg-stone-50 py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-xl font-bold text-stone-900 sm:text-2xl md:text-3xl">
              그런데,
              <br />
              어디서 믿을 수 있는
              <br />
              장례지도사를 만날 수 있을까요?
            </h2>
            <p className="mt-6 text-stone-600 md:text-lg">
              어떻게 좋은 곳을 알아볼 수 있을까요?
            </p>
            <p className="mt-4 font-medium text-stone-800">
              하나하나씩 알아보아요.
            </p>
          </div>
        </section>

        {/* Step 1 */}
        <section className="border-t border-stone-200 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="inline-flex rounded-full bg-stone-900 px-4 py-1.5 text-sm font-semibold text-white">
              Step 1
            </div>
            <h2 className="mt-6 text-xl font-bold text-stone-900 sm:text-2xl">
              최대한 많은 업체를 탐색하세요.
            </h2>
            <p className="mt-6 text-stone-600 md:text-lg">
              예산 문제, 장례식장은 어디에서 할지, 장지는 어디로 해야 할지,
              임종을 앞두어 경황도 없고 생업에도 바쁜 와중에 신경 쓸 것이 많은데
              정말 업체만 찾고 있어도 되는 걸까요?
            </p>
            <p className="mt-4 text-stone-600 md:text-lg">
              네, 문제 없습니다. 갖고 있는 장례에 관한 고민들을 전부 해결해주는
              것이 &apos;상조서비스&apos;에요. 단순히 수백만원 패키지를 팔고
              출동해주는 곳이 아니라 사전 상담부터 비용 설계, 장례식장, 장지
              문제 해결, 행정적 문제까지 모두 해결해주는 곳이에요.
            </p>
            <p className="mt-6 font-medium text-stone-800 md:text-lg">
              그렇기 때문에 고민이 있다면 문제를 해결해줄 수 있는 것처럼 보이는
              업체들을 골라두세요. 갖고 있는 고민을 스스로 하나씩 해결하려 하지
              말고, 그 고민마저도 상조 서비스에 맡겨버리겠다는 생각으로
              탐색하세요.
            </p>
          </div>
        </section>

        {/* Step 2 */}
        <section className="bg-stone-50 py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="inline-flex rounded-full bg-stone-900 px-4 py-1.5 text-sm font-semibold text-white">
              Step 2
            </div>
            <h2 className="mt-6 text-xl font-bold text-stone-900 sm:text-2xl">
              꼭 전화 상담을 진행하세요.
            </h2>
            <p className="mt-6 text-stone-600 md:text-lg">
              전화 상담은 정말 중요하고 필수적인 절차에요. 이 부분을 소홀히
              하거나 꼼꼼이 하지 않으면 후회되는 일이 발생할 수도 있어요. 전화
              상담에서 확인해야 할 체크리스트를 알려드릴게요.
            </p>
            <ul className="mt-8 space-y-3 text-stone-700 md:text-lg">
              {[
                "말을 끝까지 경청하나요?",
                "상담을 사무적으로 대하지는 않나요?",
                "홈페이지 보면 나와 있다고 답변하지는 않나요?",
                "질문에 정확한 답변을 하기보다, 비용 이야기 혹은 비용과 관련된 상품 이야기만 하지는 않나요?",
                "주변 장례식장 혹은 장지 추천을 부탁했을 때 고객의 편에서 솔직하고 자세하게 답변해주나요?",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-stone-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-stone-600 md:text-lg">
              질문이 생각이 나지 않는다면 &quot;제가 막막하고 답답한 상황인데
              무엇부터 해야 할까요?&quot;라고 물어보세요. 귀찮은 듯이 &quot;일
              생기면 전화만 주세요&quot;라고 하는 업체가 있는 반면, 정말
              따뜻하게 안심시켜주고 차근차근 답변해주는 업체가 있을 거에요.
            </p>
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 md:p-5">
              <p className="font-semibold text-amber-900">추가적인 Tip</p>
              <p className="mt-2 text-amber-800/90">
                반드시 문의를 한 번만 할 필요는 없어요. 궁금한게 생겼을 때,
                혹은 확신이 생기지 않을 때 여러 번 전화를 걸어보세요. 일관된
                태도로 대하는지, 끝까지 성의있게 대해 주는지 확인할 수 있는 좋은
                기회에요.
              </p>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="border-t border-stone-200 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="inline-flex rounded-full bg-stone-900 px-4 py-1.5 text-sm font-semibold text-white">
              Step 3
            </div>
            <h2 className="mt-6 text-xl font-bold text-stone-900 sm:text-2xl">
              반드시 후기를 확인하세요.
            </h2>
            <p className="mt-6 text-stone-600 md:text-lg">
              상담만으로는 믿을 수 있는 곳인지 100% 알 수 없어요. 이미 경험한
              고객들의 목소리를 확인해야 해요. 전화 상담과 마찬가지로 후기
              확인하는 법에 대한 체크리스트도 알려드릴게요.
            </p>
            <ul className="mt-8 space-y-3 text-stone-700 md:text-lg">
              {[
                "후기를 고객이 썼는지 업체가 썼는지 확인해보세요.",
                "허위 후기가 아닌지 의심해보세요. 지나치게 업체에게 좋은 말만 있다던가 구체적인 이야기 없이 '감사했다'만 있다던가 하지는 않나요?",
                "후기가 꾸준히 올라오는지 확인해보세요. 옛날 후기만 있지는 않나요? 아니면 최근 후기만 있지는 않나요?",
                "후기를 하나만 확인하지 말고 여러개 확인해보세요. 어투가 다 똑같지는 않나요?",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-stone-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 기억해 주세요 */}
        <section className="bg-stone-900 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm font-medium text-stone-300">
              기억해 주세요.
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
              장례는 상품 패키지가 아니라
              <br />
              바로 사람입니다.
            </h2>
          </div>
        </section>

        {/* CTA 문구 + 버튼들 */}
        <section className="border-t border-stone-200 bg-stone-50 py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-lg text-stone-700 md:text-xl">
              소중하고 후회 없는 마지막 시간을 위해
            </p>
            <h2 className="mt-2 text-xl font-bold text-stone-900 sm:text-2xl">
              따뜻하고 친절한 사람을 만나세요.
            </h2>
            <p className="mt-4 text-stone-600 md:text-lg">
              장례는 사람이 하는 일이니까요.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/reviews"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-stone-800 sm:w-auto"
              >
                <Star className="h-4 w-4" />
                다움 후기 확인하기
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-stone-900 px-6 py-3.5 text-sm font-medium text-stone-900 transition hover:bg-stone-100 sm:w-auto"
              >
                상조 가입 고민된다면?
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/prime"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-stone-300 px-6 py-3.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100 sm:w-auto"
              >
                100원 상조 알아보기
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 하단 연락 CTA */}
        <section className="border-t border-stone-200 bg-white py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-stone-100 py-10 sm:flex-row sm:gap-6">
              <a
                href="tel:1666-9784"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                <Phone className="h-4 w-4" />
                전화 문의
              </a>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full border-2 border-stone-900 px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
              >
                <MessageSquare className="h-4 w-4" />
                채팅/견적 문의
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
