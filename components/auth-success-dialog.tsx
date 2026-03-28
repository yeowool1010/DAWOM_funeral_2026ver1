"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type AuthSuccessKind = "login" | "signUp" | "logout";

const COPY: Record<
  AuthSuccessKind,
  { title: string; description: string; button: string }
> = {
  login: {
    title: "로그인되었습니다",
    description: "환영합니다. 확인을 누르면 이동합니다.",
    button: "확인",
  },
  signUp: {
    title: "회원가입이 완료되었습니다",
    description:
      "이메일로 인증 안내가 발송되었을 수 있습니다. 받은편지함을 확인해 주세요. 확인을 누르면 안내 페이지로 이동합니다.",
    button: "확인",
  },
  logout: {
    title: "로그아웃되었습니다",
    description:
      "안전하게 로그아웃되었습니다. 확인을 누르면 메인 화면으로 이동합니다.",
    button: "확인",
  },
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  kind: AuthSuccessKind;
  onConfirm: () => void;
};

export function AuthSuccessDialog({
  open,
  onOpenChange,
  kind,
  onConfirm,
}: Props) {
  const copy = COPY[kind];

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>{copy.description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button
            type="button"
            className="min-w-[120px]"
            onClick={handleConfirm}
          >
            {copy.button}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
