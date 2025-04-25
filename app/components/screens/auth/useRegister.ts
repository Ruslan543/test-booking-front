import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { IEmailPassword } from "@/shared/types/user.types";

import { AuthService } from "@/services/auth.service";

import { toastError } from "@/utils/toast-error";

export function useRegister() {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutateAsync: register, isLoading } = useMutation({
    mutationFn: (data: IEmailPassword) =>
      AuthService.register(data.email, data.password),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      push("/");
    },
    onError: (error) => {
      toastError(error, "Регистрация");
    },
  });

  return { register, isLoading };
}
