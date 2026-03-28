"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { AuthSuccessDialog } from "@/components/auth-success-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { ButtonProps } from "@/components/ui/button";

export function LogoutButton({
  className,
  variant = "default",
  size = "default",
}: Pick<ButtonProps, "className" | "variant" | "size">) {
  const router = useRouter();
  const [successOpen, setSuccessOpen] = useState(false);

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setSuccessOpen(true);
  };

  const handleConfirm = () => {
    router.refresh();
    router.push("/");
  };

  return (
    <>
      <Button
        type="button"
        className={className}
        variant={variant}
        size={size}
        onClick={logout}
      >
        로그아웃
      </Button>
      <AuthSuccessDialog
        open={successOpen}
        onOpenChange={setSuccessOpen}
        kind="logout"
        onConfirm={handleConfirm}
      />
    </>
  );
}
