export const PROCESS_MAIN_FILTERS = [
  "임종 전",
  "장례 중",
  "장례 후",
  "기타",
] as const;

export type ProcessMainCategory = (typeof PROCESS_MAIN_FILTERS)[number];

export type ProcessThumbTone = "slate" | "sky" | "amber" | "mint" | "rose";

export type ProcessPost = {
  slug: string;
  mainCategory: ProcessMainCategory;
  /** 썸네일 좌측 라벨 · 메타 구분 (예: 장례 비용, 장례 정보) */
  subCategory: string;
  /** 썸네일 안 굵은 헤드라인 (줄바꿈 가능) */
  headline: string;
  /** 카드 하단 제목 */
  title: string;
  date: string;
  thumbTone: ProcessThumbTone;
  /** 상세 본문 (문단 단위) */
  body: string[];
};

export const PROCESS_POSTS: ProcessPost[] = [
  {
    slug: "basic-livelihood-funeral-benefits",
    mainCategory: "임종 전",
    subCategory: "장례 비용",
    headline: "기초생활수급자\n장례 혜택 4가지",
    title: "기초생활수급자 장례 혜택 4가지",
    date: "2025-10-16",
    thumbTone: "slate",
    body: [
      "기초생활수급자·차상위계층 등 국가에서 인정하는 대상자에게는 장례비 지원이나 감면 제도가 마련되어 있습니다. 지역과 시점에 따라 세부 기준이 다를 수 있으니 관할 주민센터·복지 상담 창구에서 확인하는 것이 좋습니다.",
      "대표적으로 알아두면 좋은 항목은 다음과 같습니다.",
      "① 국민기초생활수급자 장례 지원금 또는 무료·감면 대상 여부 확인",
      "② 지자체 장례 지원 사업(저소득층 장례비 등) 신청 절차",
      "③ 공설장례식장·화장장 이용 시 감면 요건",
      "④ 별도 민간 상조·장례지도사 서비스와의 중복 여부 확인",
      "정확한 금액·서류·신청 기한은 거주 지역의 안내를 따르시기 바랍니다.",
    ],
  },
  {
    slug: "funeral-cost-average-checklist",
    mainCategory: "임종 전",
    subCategory: "장례 정보",
    headline: "장례 비용\n평균 체크리스트",
    title: "장례 비용, 평균 얼마까지 알아두면 좋을까요?",
    date: "2025-10-09",
    thumbTone: "sky",
    body: [
      "장례 비용은 진행 방식(빈소 일수, 화장·매장, 조문 규모 등)에 따라 크게 달라집니다. 여러 곳의 견적을 비교할 때는 ‘포함 항목’이 같은지 먼저 확인하는 것이 중요합니다.",
      "견적서에서 꼭 확인할 항목: 빈소·안치료, 고인 운구, 입관·염습, 장례지도사, 리무진·버스, 수의·관, 장지 이동 거리, 제단·꽃 장식 등.",
      "다움은 숨겨진 비용 없이 구성을 투명하게 안내하는 것을 지향합니다. 궁금하신 점은 상담 시 구체적으로 문의해 주세요.",
    ],
  },
  {
    slug: "before-death-family-preparation",
    mainCategory: "임종 전",
    subCategory: "장례 정보",
    headline: "가족이 미리\n준비할 것들",
    title: "임종 전 가족이 미리 준비하면 좋은 것들",
    date: "2025-08-21",
    thumbTone: "amber",
    body: [
      "갑작스러운 상황에서도 절차가 덜 헷갈리도록, 미리 집에서 나눌 수 있는 이야기가 있습니다.",
      "연락망(가족·종교 지도자·담당 의료진), 희망하는 장례 방식에 대한 대략적인 의견, 병원 안내에 필요한 서류 위치 등을 정리해 두면 도움이 됩니다.",
      "다움은 24시간 접수로 급한 순간에도 절차를 차분히 안내해 드립니다.",
    ],
  },
  {
    slug: "during-funeral-flow",
    mainCategory: "장례 중",
    subCategory: "장례 정보",
    headline: "3일장 기준\n진행 순서",
    title: "장례 중: 3일장 기준 대표 진행 순서",
    date: "2025-07-30",
    thumbTone: "mint",
    body: [
      "일반적인 3일장의 흐름은 입관일, 발인일 일정에 맞춰 빈소·조문·발인·화장 또는 매장 순으로 진행됩니다.",
      "장례지도사는 각 시점에 필요한 절차·예법·가족 일정을 조율해 드립니다. 종교·지역 풍습에 따라 순서가 달라질 수 있습니다.",
    ],
  },
  {
    slug: "mourning-etiquette-brief",
    mainCategory: "장례 중",
    subCategory: "장례 정보",
    headline: "조문 예절\n한눈에 보기",
    title: "조문 예절, 이렇게만 기억해 주세요",
    date: "2025-06-12",
    thumbTone: "rose",
    body: [
      "조문 시간은 유가족 안내에 맞추고, 정중한 인사와 조의금·조화 전달 방식은 지역·가족의 뜻을 따르는 것이 좋습니다.",
      "사진 촬영·소란스러운 대화는 삼가는 것이 기본 예의입니다.",
    ],
  },
  {
    slug: "after-funeral-admin-tasks",
    mainCategory: "장례 후",
    subCategory: "장례 정보",
    headline: "장례 후\n행정 정리",
    title: "장례 후 꼭 챙겨야 할 행정·정리 체크",
    date: "2025-05-28",
    thumbTone: "slate",
    body: [
      "사망 신고, 제적 정리, 각종 보험·연금·퇴직금 문의, 휴대전화·구독 해지 등은 시기에 따라 처리 순서가 있습니다.",
      "가족이 나누어 진행하거나, 동사무소·보험사 안내를 병행하면 부담을 줄일 수 있습니다.",
    ],
  },
  {
    slug: "memorial-and-grief-support",
    mainCategory: "장례 후",
    subCategory: "장례 정보",
    headline: "애도와\n기억하기",
    title: "장례 이후 유가족의 애도와 추모",
    date: "2025-04-15",
    thumbTone: "sky",
    body: [
      "슬픔은 사람마다 속도가 다릅니다. 필요하다면 상담 전문 기관·가족과의 대화를 통해 자신의 감정을 돌보는 시간을 가져도 좋습니다.",
      "기일·추모 방식은 가족이 편안한 형태로 정하면 됩니다.",
    ],
  },
  {
    slug: "faq-dawom-services",
    mainCategory: "기타",
    subCategory: "장례 정보",
    headline: "다움 상조\n자주 묻는 질문",
    title: "다움 상조 서비스 FAQ",
    date: "2025-03-01",
    thumbTone: "amber",
    body: [
      "상담·접수는 24시간 가능합니다. 패키지 구성·지역·일정에 따라 안내 내용이 달라질 수 있습니다.",
      "구체적인 견적과 일정은 전화 또는 채널 상담을 통해 맞춤으로 안내해 드립니다.",
    ],
  },
];

export function getProcessPostBySlug(slug: string): ProcessPost | undefined {
  return PROCESS_POSTS.find((p) => p.slug === slug);
}

export function filterProcessPosts(
  mainCategory: ProcessMainCategory,
): ProcessPost[] {
  return PROCESS_POSTS.filter((p) => p.mainCategory === mainCategory);
}
