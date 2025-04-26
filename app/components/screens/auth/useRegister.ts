import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorCatch } from "api/api.helper";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { IEmailPassword } from "@/shared/types/user.types";

import { AuthService } from "@/services/auth.service";

export function useRegister() {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: (data: IEmailPassword) =>
      AuthService.register(data.email, data.password),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Вы зарегистрировались!");
      push("/");
    },
    onError: (error) => {
      toast.error(errorCatch(error));
    },
  });

  return { register, isLoading };
}
