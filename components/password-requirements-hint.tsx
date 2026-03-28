import { cn } from "@/lib/utils";
import type { PasswordRuleCheck } from "@/lib/auth-password-policy";

type Props = {
  checks: PasswordRuleCheck[];
  className?: string;
};

export function PasswordRequirementsHint({ checks, className }: Props) {
  return (
    <ul
      className={cn(
        "mt-1.5 space-y-1 rounded-md border border-stone-100 bg-stone-50/80 px-3 py-2 text-xs text-stone-600",
        className,
      )}
      aria-live="polite"
    >
      <li className="font-medium text-stone-700">비밀번호 조건</li>
      {checks.map((c) => (
        <li
          key={c.key}
          className={cn(
            "flex items-center gap-1.5 pl-0.5",
            c.satisfied ? "text-emerald-700" : "text-stone-500",
          )}
        >
          <span className="w-3 shrink-0 text-center" aria-hidden>
            {c.satisfied ? "✓" : "·"}
          </span>
          {c.label}
        </li>
      ))}
    </ul>
  );
}
