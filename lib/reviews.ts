export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  dateShort?: string;
  text: string;
  rating: number;
  location?: string;
  ageGender?: string; // e.g. "70세 여성"
  timeAgo?: string; // e.g. "7시간 전"
  tag?: string; // 필터용
  consultant?: {
    name: string;
    quote: string;
    venue: string;
    address: string;
    avgCost: string;
  };
}

export const REVIEW_TAGS = [
  "믿고 맡길 수 있는 장례지도사",
  "친절하고 자세한 상담",
  "막막한 상황",
  "합리적이고 투명한 정책",
] as const;

export const REVIEW_REGIONS = ["전체", "서울", "경기", "부산", "인천", "대구", "광주"] as const;

export const REVIEWS: ReviewItem[] = [
  {
    id: "1766",
    author: "김○○님",
    date: "2024년 3월 13일",
    dateShort: "2일 전",
    timeAgo: "7시간 전",
    ageGender: "70세 여성",
    text: "다움을 통해 전세권 장례 지도사님을 만나게 되었습니다. 병원에서 저녁 시간에 어머님이 돌아가시고 정신없이 병원 서류 마무리 하고 장례식장 예약 후 안치실로 가보니 이미 오셔서 기다리고 계시더군요. 여건 상 홀로 임종을 지켜야 했는데, 덕분에 마음이 놓였습니다.",
    rating: 5,
    location: "경기 하남시",
    tag: "믿고 맡길 수 있는 장례지도사",
    consultant: {
      name: "김지훈 장례지도사",
      quote: "마음과 마음은 서로 통한다고 생각해요.",
      venue: "하남시 마루공원(장례식장)",
      address: "경기 하남시",
      avgCost: "빈소 평균비용 31만원",
    },
  },
  {
    id: "1767",
    author: "이○○님",
    date: "2024년 2월 28일",
    dateShort: "1주 전",
    timeAgo: "16시간 전",
    ageGender: "61세 여성",
    text: "처음 장례를 치르는 상황이라 막막했는데, 단계별로 안내해 주셔서 큰 도움이 되었습니다. 비용도 투명하게 공개되어 있어 믿고 이용할 수 있었어요.",
    rating: 5,
    location: "서울 강남구",
    tag: "친절하고 자세한 상담",
    consultant: {
      name: "박서연 장례지도사",
      quote: "차분하고 정성스럽게 모시겠습니다.",
      venue: "강남세브란스(장례식장)",
      address: "서울 강남구",
      avgCost: "빈소 평균비용 35만원",
    },
  },
  {
    id: "1768",
    author: "박○○님",
    date: "2024년 1월 15일",
    dateShort: "3주 전",
    timeAgo: "1일 전",
    ageGender: "55세 남성",
    text: "해외에 있어서 부모님 장례를 준비하기가 어려웠는데, 원격으로도 잘 상담받고 진행할 수 있어서 감사했습니다.",
    rating: 5,
    location: "부산 해운대구",
    tag: "막막한 상황",
    consultant: {
      name: "이민호 장례지도사",
      quote: "어려운 순간 함께 하겠습니다.",
      venue: "해운대장례문화원",
      address: "부산 해운대구",
      avgCost: "빈소 평균비용 28만원",
    },
  },
  {
    id: "1769",
    author: "강○○님",
    date: "2024년 3월 1일",
    timeAgo: "2일 전",
    ageGender: "61세 여성",
    text: "합리적인 가격에 서비스도 꼼꼼히 해주셔서 만족스러웠습니다. 장례지도사님 덕분에 어렵지 않게 마무리할 수 있었어요.",
    rating: 5,
    location: "서울",
    tag: "합리적이고 투명한 정책",
  },
  {
    id: "1770",
    author: "최○○님",
    date: "2024년 2월 25일",
    timeAgo: "5일 전",
    ageGender: "68세 남성",
    text: "막막했던 상황에서 친절하게 안내해 주셔서 감사합니다. 처음이라 어려웠는데 단계별로 잘 설명해 주셨어요.",
    rating: 5,
    location: "경기",
    tag: "친절하고 자세한 상담",
  },
  {
    id: "1771",
    author: "정○○님",
    date: "2024년 2월 20일",
    timeAgo: "1주 전",
    ageGender: "72세 여성",
    text: "믿고 맡길 수 있는 분이셨습니다. 세심하게 챙겨주셔서 가족 모두 감사한 마음으로 장례를 마쳤어요.",
    rating: 5,
    location: "인천",
    tag: "믿고 맡길 수 있는 장례지도사",
  },
  {
    id: "1772",
    author: "한○○님",
    date: "2024년 2월 15일",
    timeAgo: "2주 전",
    ageGender: "58세 여성",
    text: "비용이 투명하게 공개되어 있어 좋았습니다. 숨겨진 비용 없이 정말 말씀하신 대로만 결제하게 되어 신뢰가 갔어요.",
    rating: 5,
    location: "서울",
    tag: "합리적이고 투명한 정책",
  },
  {
    id: "1773",
    author: "오○○님",
    date: "2024년 2월 10일",
    timeAgo: "3주 전",
    ageGender: "64세 남성",
    text: "갑자기 부모님이 돌아가셔서 정말 막막했는데, 24시간 연락 가능하다고 해서 바로 문의했더니 빠르게 도와주셨습니다.",
    rating: 5,
    location: "부산",
    tag: "막막한 상황",
  },
  {
    id: "1774",
    author: "윤○○님",
    date: "2024년 2월 5일",
    timeAgo: "4주 전",
    ageGender: "59세 여성",
    text: "상담이 친절하고 자세했어요. 궁금한 점 하나하나 답변해 주셔서 안심하고 진행할 수 있었습니다.",
    rating: 5,
    location: "경기",
    tag: "친절하고 자세한 상담",
  },
  {
    id: "1775",
    author: "임○○님",
    date: "2024년 1월 28일",
    timeAgo: "5주 전",
    ageGender: "66세 남성",
    text: "장례지도사님이 믿음이 가셨습니다. 모든 절차를 꼼꼼히 챙겨주셔서 저희 가족이 편하게 임종을 지킬 수 있었어요.",
    rating: 5,
    location: "대구",
    tag: "믿고 맡길 수 있는 장례지도사",
  },
  {
    id: "1776",
    author: "조○○님",
    date: "2024년 1월 22일",
    timeAgo: "6주 전",
    ageGender: "62세 여성",
    text: "처음 겪는 일이라 어디부터 해야 할지 몰랐는데, 체크리스트 받아보고 순서대로 진행하니 수월했습니다.",
    rating: 5,
    location: "서울",
    tag: "막막한 상황",
  },
  {
    id: "1777",
    author: "신○○님",
    date: "2024년 1월 18일",
    timeAgo: "7주 전",
    ageGender: "57세 여성",
    text: "가격이 합리적이었고, 사용한 항목만 정산해 주셔서 불필요한 비용 부담이 없었어요. 추천합니다.",
    rating: 5,
    location: "광주",
    tag: "합리적이고 투명한 정책",
  },
  {
    id: "1778",
    author: "권○○님",
    date: "2024년 1월 12일",
    timeAgo: "8주 전",
    ageGender: "70세 남성",
    text: "친절하고 자세한 상담에 감사했습니다. 어르신 장례라 특별히 신경 써 주셔서 좋았어요.",
    rating: 5,
    location: "경기",
    tag: "친절하고 자세한 상담",
  },
  {
    id: "1779",
    author: "황○○님",
    date: "2024년 1월 8일",
    timeAgo: "9주 전",
    ageGender: "65세 여성",
    text: "나서서 인도해주셔서 어려움없이 진행해 주셨습니다. 다음에도 이분께 하도록 하겠습니다 감사합니다.",
    rating: 5,
    location: "경기 하남시",
    tag: "믿고 맡길 수 있는 장례지도사",
  },
  {
    id: "1780",
    author: "서○○님",
    date: "2024년 1월 3일",
    timeAgo: "10주 전",
    ageGender: "63세 남성",
    text: "투명한 정책이 마음에 들었습니다. 추가 비용에 대한 부담 없이 장례를 치를 수 있어 감사해요.",
    rating: 5,
    location: "인천",
    tag: "합리적이고 투명한 정책",
  },
];

export const REVIEWS_PER_PAGE = 6;

export function getReviewById(id: string): ReviewItem | undefined {
  return REVIEWS.find((r) => r.id === id);
}

export function getFilteredReviews(region: string, tag: string): ReviewItem[] {
  let list = [...REVIEWS];
  if (region && region !== "전체") {
    list = list.filter((r) => r.location?.startsWith(region));
  }
  if (tag && tag !== "전체보기") {
    list = list.filter((r) => r.tag === tag);
  }
  return list;
}
