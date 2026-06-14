import type { Metadata } from "next";

const aboutShareImage = {
  url: "/images/og-main.jpg",
  width: 1200,
  height: 801,
  alt: "조용하고 평화로운 공간",
};

export const metadata: Metadata = {
  title: "다움상조",
  description:
    "장례에 진심인 사람들이 모여 진정성 있는 장례 문화를 선도합니다.",
  openGraph: {
    title: "다움상조",
    description:
      "장례에 진심인 사람들이 모여 진정성 있는 장례 문화를 선도합니다.",
    images: [aboutShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "다움상조",
    description:
      "장례에 진심인 사람들이 모여 진정성 있는 장례 문화를 선도합니다.",
    images: [aboutShareImage.url],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
