import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorCatch } from "api/api.helper";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { IBookingCreateInput } from "@/shared/types/booking.types";

import { BookingService } from "@/services/booking.service";

export function useCreateBooking() {
  const queryClient = useQueryClient();
  const { query, push } = useRouter();

  const { mutateAsync: createAsync, isLoading } = useMutation({
    mutationFn: (data: Omit<IBookingCreateInput, "roomId">) =>
      BookingService.create({ roomId: String(query.roomId), ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Комната успешно забронирована!");
      push("/bookings");
    },
    onError: (error) => {
      toast.error(errorCatch(error));
    },
  });

  return { createAsync, isLoading };
}
