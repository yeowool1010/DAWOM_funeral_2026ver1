import type { LucideIcon } from "lucide-react";
import { UserCheck, Users, UsersRound } from "lucide-react";

export type ProductPackage = {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  price: string;
  unit: string;
  icon: LucideIcon;
  highlights: string[];
  recommendedFor: string[];
};

export const productPackages: ProductPackage[] = [
  {
    slug: "mubinsosang-130",
    name: "회원가 130만원",
    desc: "",
    price: "무빈소",
    unit: "",
    icon: UserCheck,
    tag: "# 조문객없이 간소한 장례 진행",
    highlights: ["간소한 진행 중심", "조문객 없는 형태", "핵심 절차를 깔끔하게"],
    recommendedFor: ["가까운 가족 중심으로 조용히 진행하고 싶은 경우", "조문객 응대 부담을 줄이고 싶은 경우"],
  },
  {
    slug: "gajokjang-200",
    name: "회원가 200만원",
    desc: "",
    price: "다움 220",
    unit: "",
    icon: Users,
    tag: "#  예상 조문객 50-100명",
    highlights: ["다움 220 표준 구성", "응대/운영 밸런스", "예상 인원 50~100명 기준"],
    recommendedFor: ["다움 220 형태로 무리 없이 운영하고 싶은 경우", "예상 조문객이 50~100명 수준인 경우"],
  },
  {
    slug: "gogeuphyeong-330",
    name: "회원가 330만원",
    desc: "",
    price: "다움 350",
    unit: "",
    icon: UsersRound,
    tag: "# 예상 조문객 150~200명",
    highlights: ["조문객 150~200명 기준", "운영 대응 강화", "구성/서비스 업그레이드"],
    recommendedFor: ["조문객 규모가 크고 운영 대응이 필요한 경우", "조문 응대 품질을 한 단계 올리고 싶은 경우"],
  },
  {
    slug: "premium-430",
    name: "회원가 430만원",
    desc: "",
    price: "다움 450",
    unit: "",
    icon: UsersRound,
    tag: "# 예상 조문객 250-300명",
    highlights: ["다움 450 운영/동선 중심", "현장 품질 강화", "큰 규모에서도 안정적으로"],
    recommendedFor: ["상급 구성과 안정적인 현장 운영을 원하는 경우", "품질/경험을 최우선으로 두는 경우"],
  },
];

export function getProductPackageBySlug(slug: string) {
  return productPackages.find((p) => p.slug === slug);
}

