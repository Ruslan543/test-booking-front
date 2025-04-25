import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toastr } from "react-redux-toastr";

import { RoomService } from "@/services/room.service";

import { toastError } from "@/utils/toast-error";

export function useCreateRoom() {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutateAsync: createAsync, isLoading } = useMutation({
    mutationFn: RoomService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      toastr.success("Создание", "комната успешно создана");
      push("/rooms");
    },
    onError: (error) => {
      toastError(error, "Создание комнаты");
    },
  });

  return { createAsync, isLoading };
}
