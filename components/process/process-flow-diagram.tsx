import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

export const PROCESS_FLOW_MARKER = "[[PROCESS_FLOW]]";
export const PROCESS_FUNERAL_SHEET_MARKER = "[[PROCESS_FUNERAL_SHEET]]";

export type ProcessFlowSection = {
  dayLabel: string;
  rows: string[][];
};

export function parseProcessFlowBlock(
  paragraph: string,
): { dayLabel: string; rows: string[][] } | null {
  const trimmed = paragraph.trim();
  if (!trimmed.startsWith(PROCESS_FLOW_MARKER)) return null;
  const raw = trimmed.slice(PROCESS_FLOW_MARKER.length).trim();
  const lines = raw.split(/\r?\n/).map((l) => l.trimEnd());
  const dayLabel = (lines[0] ?? "").trim();
  if (!dayLabel) return null;

  const rows: string[][] = [];
  for (const line of lines.slice(1)) {
    const t = line.trim();
    if (!t) continue;
    if (!t.startsWith("row:")) continue;
    const cells = t
      .slice("row:".length)
      .split("|")
      .map((c) => c.trim())
      .filter(Boolean)
      .map((c) => c.replaceAll("\\n", "\n"));
    if (cells.length) rows.push(cells);
  }
  if (rows.length === 0) return null;
  return { dayLabel, rows };
}

function decodeCells(line: string): string[] {
  return line
    .slice("row:".length)
    .split("|")
    .map((c) => c.trim())
    .filter(Boolean)
    .map((c) => c.replaceAll("\\n", "\n"));
}

/** 첨부 이미지와 동일한 3일차 통합 도식 (`1일차` … `row:` …) */
export function parseProcessFuneralSheetBlock(
  paragraph: string,
): ProcessFlowSection[] | null {
  const trimmed = paragraph.trim();
  if (!trimmed.startsWith(PROCESS_FUNERAL_SHEET_MARKER)) return null;
  const raw = trimmed.slice(PROCESS_FUNERAL_SHEET_MARKER.length).trim();
  const lines = raw.split(/\r?\n/);

  const sections: ProcessFlowSection[] = [];
  let current: ProcessFlowSection | null = null;

  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (/^[123]일차$/.test(t)) {
      if (current) sections.push(current);
      current = { dayLabel: t, rows: [] };
      continue;
    }
    if (t.startsWith("row:") && current) {
      const cells = decodeCells(t);
      if (cells.length) current.rows.push(cells);
    }
  }
  if (current) sections.push(current);
  return sections.length ? sections : null;
}

function FlowItem({ label }: { label: string }) {
  return (
    <div
      className={cn(
        "flex min-h-[2.85rem] w-full items-center justify-center rounded-xl",
        "border-[3px] border-orange-400 bg-white px-1.5 py-2 shadow-sm",
        "text-center text-[0.7rem] font-semibold leading-tight text-stone-900",
        "sm:min-h-[3.25rem] sm:rounded-2xl sm:px-2 sm:text-sm md:text-[0.95rem]",
        "whitespace-pre-line",
      )}
    >
      {label}
    </div>
  );
}

function FlowArrow() {
  return (
    <ArrowRight
      className="hidden h-6 w-6 shrink-0 text-sky-800 sm:block md:h-7 md:w-7"
      strokeWidth={2.5}
      aria-hidden
    />
  );
}

/** 한 일차: 왼쪽 원 + 오른쪽 2행(각 4칸+화살표) */
function DayBand({ dayLabel, rows }: ProcessFlowSection) {
  return (
    <div className="flex flex-col gap-4 border-b border-stone-300/80 py-6 last:border-b-0 last:pb-2 md:flex-row md:items-center md:gap-6 md:py-8">
      <div className="flex shrink-0 justify-center md:w-[6.5rem] md:justify-start md:self-center">
        <div
          className={cn(
            "flex h-[5.75rem] w-[5.75rem] items-center justify-center rounded-full",
            "bg-sky-700 text-xl font-black tracking-tight text-white shadow-md",
            "md:h-[6.75rem] md:w-[6.75rem] md:text-2xl",
          )}
        >
          {dayLabel}
        </div>
      </div>

      <div className="min-w-0 flex-1 space-y-3 md:space-y-4">
        {rows.map((row, ri) => (
          <div key={ri}>
            {/* sm 이상: 가로 흐름 + 화살표 */}
            <div className="hidden sm:flex sm:flex-nowrap sm:items-center sm:justify-between sm:gap-1 md:gap-2">
              {row.map((label, i) => (
                <Fragment key={i}>
                  <div className="min-w-0 flex-[1_1_0%]">
                    <FlowItem label={label} />
                  </div>
                  {i < row.length - 1 ? <FlowArrow /> : null}
                </Fragment>
              ))}
            </div>
            {/* 모바일: 2열 그리드, 화살표 없이 읽기 우선 */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
              {row.map((label, i) => (
                <FlowItem key={i} label={label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 기존 단일 일차 블록 (하위 호환) */
export function ProcessFlowDiagram({ dayLabel, rows }: ProcessFlowSection) {
  return (
    <div className="my-8">
      <div
        className="rounded-3xl p-4 ring-1 ring-stone-200 sm:p-5"
        style={{
          backgroundColor: "rgba(250, 250, 249, 0.95)",
          backgroundImage: `
            linear-gradient(to right, rgb(214 211 209 / 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(214 211 209 / 0.35) 1px, transparent 1px)
          `,
          backgroundSize: "14px 14px",
        }}
      >
        <DayBand dayLabel={dayLabel} rows={rows} />
      </div>
    </div>
  );
}

/** 첨부 통합 이미지: 장례절차 제목 아래 한 장에 1·2·3일차 세로 배치 */
export function ProcessFuneralProcedureSheet({
  sections,
}: {
  sections: ProcessFlowSection[];
}) {
  return (
    <figure className="my-10 w-full min-w-0">
      <div
        className="overflow-hidden rounded-2xl p-4 sm:p-6 md:p-8"
        style={{
          backgroundColor: "rgb(245 245 244)",
          backgroundImage: `
            linear-gradient(to right, rgb(203 213 225 / 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(203 213 225 / 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      >
        {sections.map((section, i) => (
          <DayBand key={`${section.dayLabel}-${i}`} {...section} />
        ))}
      </div>
    </figure>
  );
}
