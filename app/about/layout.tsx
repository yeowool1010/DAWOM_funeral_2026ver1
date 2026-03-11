import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "다움상조",
  description:
    "장례에 진심인 사람들이 모여 진정성 있는 장례 문화를 선도합니다.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
