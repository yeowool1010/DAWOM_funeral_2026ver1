import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "다움 220 상조 패키지 | 다움",
  description:
    "가족과 가까운 지인 중심으로 치르는 다움 220 상조 패키지의 서비스 구성과 안내사항을 한 페이지에서 확인해 보세요.",
};

export default function Gajokjang200Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
