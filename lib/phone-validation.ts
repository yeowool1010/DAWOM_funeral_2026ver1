/** 숫자만 남깁니다. */
export function normalizePhoneDigits(input: string): string {
  return input.replace(/\D/g, "");
}

/**
 * 국내 전화·휴대폰 번호(하이픈 포함 입력 가능).
 * 9~11자리, 선행 0.
 */
export function isValidKoreanPhoneDigits(digits: string): boolean {
  if (digits.length < 9 || digits.length > 11) return false;
  if (!digits.startsWith("0")) return false;
  return /^0\d+$/.test(digits);
}
