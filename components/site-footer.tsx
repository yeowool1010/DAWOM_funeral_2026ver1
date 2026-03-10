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
        {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-stone-600">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-stone-900 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div> */}
        <div className="mt-8 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          <p className="font-medium text-stone-700">(주) 다움상조</p>
          <p className="mt-1">
            대표이사 : 박영광 | 개인정보관리책임자 : 박영광
          </p>
          <p className="mt-1">
            주소 : 인천시 남동구 구월로 336번길 63-23 | 전화 문의: 1600-7751
          </p>
          <p className="mt-1">이메일 : yr4417@naver.com</p>
          <p className="mt-1">
            사업자 등록번호 : 130-86-45409 | 통신판매업신고번호 : 2026-인천남동-2417
          </p>
          <p className="mt-4 text-xs text-stone-400">
            © 2026. (주)다움상조
          </p>
        </div>
      </div>
    </footer>
  );
}
