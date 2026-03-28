/** `AuthApiError` 등에서 HTTP 상태 코드 추출 */
export function getAuthErrorStatus(error: unknown): number | undefined {
  if (!error || typeof error !== "object") return undefined;
  const status = (error as { status?: unknown }).status;
  return typeof status === "number" ? status : undefined;
}

/**
 * Supabase Auth API가 돌려주는 영문 메시지를 사용자용 한국어로 바꿉니다.
 * `status`(예: 429)가 있으면 메시지 본문이 비어 있어도 안내할 수 있습니다.
 * 매핑이 없으면 원문을 그대로 둡니다.
 */
export function mapSupabaseAuthErrorToKo(
  message: string,
  status?: number,
): string {
  if (status === 429) {
    return "요청이 너무 많아 일시적으로 제한되었습니다. Supabase는 가입·인증 메일에 시간당 한도가 있어, 연속 테스트 시 이런 오류가 날 수 있습니다. 잠시(수십 분~1시간) 후 다시 시도해 주세요.";
  }

  const normalized = message.trim();
  const lower = normalized.toLowerCase();

  const rules: { test: (l: string) => boolean; ko: string }[] = [
    {
      test: (l) => l.includes("invalid login credentials"),
      ko: "이메일 또는 비밀번호가 올바르지 않습니다. 입력을 다시 확인하거나 비밀번호 찾기를 이용해 주세요.",
    },
    {
      test: (l) =>
        l.includes("email not confirmed") ||
        l.includes("not confirmed"),
      ko: "이메일 인증이 아직 완료되지 않았습니다. 받은편지함(스팸함 포함)의 인증 메일을 확인해 주세요.",
    },
    {
      test: (l) =>
        l.includes("invalid email") ||
        l.includes("unable to validate email"),
      ko: "이메일 형식이 올바르지 않습니다.",
    },
    {
      test: (l) =>
        l.includes("user already registered") ||
        l.includes("already been registered"),
      ko: "이미 가입된 이메일입니다. 로그인을 시도해 주세요.",
    },
    {
      test: (l) =>
        l.includes("signup is disabled") ||
        l.includes("signups are disabled"),
      ko: "현재 새 계정 가입이 제한되어 있습니다. 고객센터로 문의해 주세요.",
    },
    {
      test: (l) =>
        l.includes("password") &&
        (l.includes("should be at least") || l.includes("least 6")),
      ko: "비밀번호는 안내된 최소 길이 이상으로 설정해 주세요.",
    },
    {
      test: (l) =>
        l.includes("error sending confirmation email") ||
        l.includes("sending confirmation email") ||
        l.includes("unable to send email"),
      ko: "인증 메일을 보내지 못했습니다. Supabase 대시보드에서 이메일(SMTP) 설정·발송 한도를 확인하거나, 개발 중이면 이메일 확인을 끈 뒤 다시 시도해 주세요.",
    },
    {
      test: (l) =>
        l.includes("rate limit") ||
        l.includes("too many requests") ||
        l.includes("email rate limit") ||
        l.includes("over_email_send_rate_limit") ||
        l.includes("429"),
      ko: "요청이 너무 많아 일시적으로 제한되었습니다. 잠시 후 다시 시도해 주세요.",
    },
    {
      test: (l) =>
        l.includes("network") || l.includes("fetch failed"),
      ko: "네트워크 오류가 발생했습니다. 연결을 확인한 뒤 다시 시도해 주세요.",
    },
    {
      test: (l) =>
        l.includes("jwt expired") || l.includes("session"),
      ko: "세션이 만료되었습니다. 다시 로그인해 주세요.",
    },
  ];

  for (const { test, ko } of rules) {
    if (test(lower)) return ko;
  }

  return normalized;
}
