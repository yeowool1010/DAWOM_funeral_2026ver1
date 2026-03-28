/** Supabase Auth 기본 최소 길이와 동일하게 맞춤 (프로젝트 설정이 다르면 대시보드에 맞게 조정) */
export const AUTH_PASSWORD_MIN_LENGTH = 6;
/** bcrypt 권장 상한 안내 */
export const AUTH_PASSWORD_MAX_LENGTH = 72;

export type PasswordRuleCheck = {
  key: string;
  label: string;
  satisfied: boolean;
};

export function getAuthPasswordRuleChecks(password: string): PasswordRuleCheck[] {
  const len = password.length;
  return [
    {
      key: "min",
      label: `${AUTH_PASSWORD_MIN_LENGTH}자 이상`,
      satisfied: len >= AUTH_PASSWORD_MIN_LENGTH,
    },
    {
      key: "max",
      label: `${AUTH_PASSWORD_MAX_LENGTH}자 이하`,
      satisfied: len > 0 && len <= AUTH_PASSWORD_MAX_LENGTH,
    },
    {
      key: "no-space",
      label: "공백 없이 입력",
      satisfied: len > 0 && !/\s/.test(password),
    },
  ];
}

export function isAuthPasswordValid(password: string): boolean {
  if (!password) return false;
  return (
    password.length >= AUTH_PASSWORD_MIN_LENGTH &&
    password.length <= AUTH_PASSWORD_MAX_LENGTH &&
    !/\s/.test(password)
  );
}
