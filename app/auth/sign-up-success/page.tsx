import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const VERIFY_IMAGE_FILE = "인증이미지.png";
const verifyImageSrc = `/images/${encodeURIComponent(VERIFY_IMAGE_FILE)}`;

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">회원가입이 접수되었습니다</CardTitle>
          <CardDescription>이메일을 확인해 주세요</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border border-stone-200 bg-stone-50">
            {/* next/image 는 한글 파일명 프리렌더 시 ByteString 오류가 나므로 img + 인코딩 경로 사용 */}
            <img
              src={verifyImageSrc}
              alt="이메일 인증 방법 안내"
              width={800}
              height={500}
              className="h-auto w-full max-w-full object-contain"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            가입해 주셔서 감사합니다. 로그인 전에 이메일로 발송된 링크를 눌러
            계정을 확인해 주세요. 메일이 보이지 않으면 스팸함도 함께
            확인해 주세요.
          </p>
          <Link
            href="/auth/login"
            className="text-center text-sm font-medium text-stone-900 underline underline-offset-4"
          >
            로그인 페이지로 이동
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
