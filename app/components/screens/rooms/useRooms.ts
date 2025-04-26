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

  const { mutateAsync: deleteAsync } = useMutation({
    mutationFn: RoomService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (error) => errorCatch(error),
  });

  const { mutateAsync: createAsync } = useMutation({
    mutationFn: RoomService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },
    onError: (error) => toast.error(errorCatch(error)),
  });

  return { rooms, isLoading, deleteAsync, createAsync };
}
