import { cn } from "@/lib/utils";

export const PROCESS_PIPE_TABLE_MARKER = "[[PROCESS_TABLE]]";

export function parseProcessPipeTableBlock(
  paragraph: string,
): { caption: string; rows: string[][] } | null {
  const trimmed = paragraph.trim();
  if (!trimmed.startsWith(PROCESS_PIPE_TABLE_MARKER)) return null;
  const raw = trimmed.slice(PROCESS_PIPE_TABLE_MARKER.length).trim();
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return null;
  const caption = lines[0];
  const rows = lines.slice(1).map((line) => line.split("|").map((c) => c.trim()));
  return { caption, rows };
}

type ProcessArticlePipeTableProps = {
  caption: string;
  rows: string[][];
};

export function ProcessArticlePipeTable({
  caption,
  rows,
}: ProcessArticlePipeTableProps) {
  if (rows.length === 0) return null;
  const [header, ...body] = rows;
  return (
    <div className="my-6 overflow-x-auto">
      <p className="mb-3 text-center text-sm font-semibold text-stone-900 sm:text-base">
        {caption}
      </p>
      <table className="w-full min-w-[40rem] border-collapse border border-stone-300 text-left text-sm text-stone-800">
        <thead>
          <tr className="bg-amber-50">
            {header.map((cell, i) => (
              <th
                key={i}
                scope="col"
                className="border border-stone-300 px-3 py-2.5 font-semibold text-stone-900"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "border border-stone-300 px-3 py-2.5 align-top leading-relaxed",
                    ci === 0 && "bg-stone-50 font-semibold text-stone-900",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
