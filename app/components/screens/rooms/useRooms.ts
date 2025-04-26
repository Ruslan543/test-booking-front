import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { errorCatch } from "api/api.helper";
import toast from "react-hot-toast";

import { RoomService } from "@/services/room.service";

export function useRooms() {
  const queryClient = useQueryClient();

  const { data: rooms, isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: RoomService.getAll,
  });

  const { mutate: deleteFn } = useMutation({
    mutationFn: RoomService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (error) => toast.error(errorCatch(error)),
  });

  return { rooms, isLoading, deleteFn };
}
