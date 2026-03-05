import Link from "next/link";

const footerLinks = [
  { label: "이용약관", href: "#" },
  { label: "개인정보처리방침", href: "#" },
  { label: "감사보고서", href: "#" },
  { label: "사업자정보확인", href: "#" },
  { label: "마이페이지", href: "#" },
  { label: "고객센터", href: "#" },
  { label: "상담사 조회", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-stone-600">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-stone-900 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          <p className="font-medium text-stone-700">(주) 다움</p>
          <p className="mt-1">
            대표이사 : 송슬옹 | 개인정보관리책임자 : 김소현
          </p>
          <p className="mt-1">
            주소 : 서울시 관악구 신림로 132, 1,2,3층 | 전화 문의: 1666-9784
          </p>
          <p className="mt-1">이메일 : contact@dawomfuneral.co.kr</p>
          <p className="mt-1">
            사업자 등록번호 : 831-87-01971 | 통신판매업신고번호 : 2021-서울관악-2417
          </p>
          <p className="mt-4 text-xs text-stone-400">
            © 2026. (주)다움 ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
