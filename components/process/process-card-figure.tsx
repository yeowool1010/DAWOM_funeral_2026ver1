/** 썸네일 우하단 플랫 일러스트 느낌 (참고 UI의 정장 인물 + 소품) */
export function ProcessCardFigure({ seed = 0 }: { seed?: number }) {
  const mod = seed % 3;

  return (
    <div
      className="relative h-[5.5rem] w-[4.5rem] shrink-0 sm:h-[6.25rem] sm:w-20"
      aria-hidden
    >
      <svg
        viewBox="0 0 100 120"
        className="h-full w-full text-stone-900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="50" cy="24" rx="14" ry="15" fill="currentColor" />
        <path
          d="M28 42 C28 38 32 34 50 34 C68 34 72 38 72 42 L78 118 H22 L28 42Z"
          fill="currentColor"
        />
        <path
          d="M34 42 H66 V52 C66 56 62 58 50 58 C38 58 34 56 34 52 V42Z"
          fill="#ffffff"
          fillOpacity="0.22"
        />
        {mod === 0 && (
          <>
            <circle
              cx="80"
              cy="88"
              r="15"
              fill="#FACC15"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M74 88 L80 94 L88 82"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {mod === 1 && (
          <path
            d="M72 70 L90 78 L90 98 C90 106 82 114 74 116 C66 114 58 106 58 98 L58 78 Z"
            fill="#4ADE80"
            stroke="currentColor"
            strokeWidth="2"
          />
        )}
        {mod === 2 && (
          <>
            <rect
              x="56"
              y="80"
              width="38"
              height="24"
              rx="3"
              fill="#86EFAC"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="60"
              y="84"
              width="38"
              height="24"
              rx="3"
              fill="#BBF7D0"
              stroke="currentColor"
              strokeWidth="2"
            />
          </>
        )}
      </svg>
    </div>
  );
}
