import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorCatch } from "api/api.helper";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { RoomService } from "@/services/room.service";

export function useCreateRoom() {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  const { mutateAsync: createAsync, isLoading } = useMutation({
    mutationFn: RoomService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      toast.success("Комната успешно создана!");
      push("/rooms");
    },
    onError: (error) => {
      toast.error(errorCatch(error));
    },
  });

  return { createAsync, isLoading };
}
