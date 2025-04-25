import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorCatch } from "api/api.helper";
import { useRouter } from "next/router";
import { toastr } from "react-redux-toastr";

import { IBookingCreateInput } from "@/shared/types/booking.types";

import { BookingService } from "@/services/booking.service";

import { toastError } from "@/utils/toast-error";

export function useCreateBooking() {
  const queryClient = useQueryClient();
  const { query, push } = useRouter();

  const { mutateAsync: createAsync, isLoading } = useMutation({
    mutationFn: (data: Omit<IBookingCreateInput, "roomId">) =>
      BookingService.create({ roomId: String(query.roomId), ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toastr.success("Бронирование", "комната успешно забронирована");
      push("/bookings");
    },
    onError: (error) => {
      toastError(error, "Бронирование комнаты");
    },
  });

  return { createAsync, isLoading };
}
