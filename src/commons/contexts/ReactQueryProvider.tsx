"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface ApiError {
  status?: number;
  response?: {
    status?: number;
  };
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
    queryCache: new QueryCache({
      onError: (error: unknown) => {
        const err = error as ApiError;
        if (
          typeof window !== "undefined" &&
          (err?.status === 401 || err?.response?.status === 401)
        ) {
          window.location.href = "/auth/login";
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error: unknown) => {
        const err = error as ApiError;
        if (
          typeof window !== "undefined" &&
          (err?.status === 401 || err?.response?.status === 401)
        ) {
          window.location.href = "/auth/login";
        }
      },
    }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
