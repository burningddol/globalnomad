import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DialogOptions } from "@/components/ui/Dialog";

export const useAuthError = (
  isError: boolean,
  error: unknown,
  showDialog: (options: DialogOptions) => void,
) => {
  const router = useRouter();

  useEffect(() => {
    if (isError && axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        showDialog({
          type: "alert",
          content: "로그인 세션이 만료되었습니다. 다시 로그인해 주세요.",
          onConfirm: () => {
            router.push("/auth/login");
          },
        });
      }
    }
  }, [isError, error, router, showDialog]);
};
