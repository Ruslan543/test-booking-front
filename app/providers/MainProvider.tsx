import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC } from "react";
import { Toaster } from "react-hot-toast";

import Layout from "@/components/layout/Layout";

import { TypeComponentAuthFields } from "@/shared/types/auth.types";

import AuthProvider from "./AuthProvider/AuthProvider";
import HeadProvider from "./HeadProvider/HeadProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
  return (
    <HeadProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            success: { duration: 5000 },
            error: { duration: 5000 },
            style: {
              background: "#fff",
              color: "#000",
              fontSize: "15px",
            },
          }}
        />

        <AuthProvider Component={Component}>
          <Layout>{children}</Layout>
        </AuthProvider>
      </QueryClientProvider>
    </HeadProvider>
  );
};

export default MainProvider;
