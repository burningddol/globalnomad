"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserType } from "@/types/user.type";
import { getUserMe, postLogout } from "@/apis/auth.api";

interface AuthContextType {
  user: UserType | null | undefined;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  const isAuthFreePage = pathname.startsWith("/auth");

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserMe,
    enabled: !isAuthFreePage,
    retry: false,
    meta: { authRequired: false },
  });

  const { mutate: logout } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      router.replace("/");
      router.refresh();
    },
  });

  return (
    <AuthContext.Provider value={{ user, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthProvider 내에서 사용해주세요");
  return context;
};
