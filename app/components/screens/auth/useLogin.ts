import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { IEmailPassword } from "@/shared/types/user.types";

import { AuthService } from "@/services/auth.service";

import { toastError } from "@/utils/toast-error";

export function useLogin() {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutateAsync: login, isLoading } = useMutation({
    mutationFn: (data: IEmailPassword) =>
      AuthService.login(data.email, data.password),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      push("/");
    },
    onError: (error) => {
      toastError(error, "Вход");
    },
  });

  return { login, isLoading };
}
