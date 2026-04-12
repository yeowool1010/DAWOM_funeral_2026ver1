import { Fragment } from "react";

/** `lib/process-posts` 본문에서 `**굵게**` 구간을 실제 굵은 글씨로 렌더링합니다. */
export function ProcessBodyParagraph({ text }: { text: string }) {
  const chunks = text.split(/\*\*(.+?)\*\*/);
  if (chunks.length === 1) {
    return <>{text}</>;
  }
  return (
    <>
      {chunks.map((chunk, i) =>
        i % 2 === 0 ? (
          <Fragment key={i}>{chunk}</Fragment>
        ) : (
          <strong key={i} className="font-bold text-stone-900">
            {chunk}
          </strong>
        ),
      )}
    </>
  );
}
