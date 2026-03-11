import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "무빈소장 상조 패키지 | 다움",
  description:
    "조문객 없이 간소한 장례, 무빈소장 상조 패키지의 서비스 구성과 안내사항을 한 페이지에서 확인해 보세요.",
};

export default function Mubinsosang130Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
