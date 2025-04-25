import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { errorCatch } from "api/api.helper";

import { BookingService } from "@/services/booking.service";

import { toastError } from "@/utils/toast-error";

export function useBookings() {
  const queryClient = useQueryClient();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: BookingService.getAll,
  });

  const { mutateAsync: deleteAsync } = useMutation({
    mutationFn: BookingService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => toastError(error, "Получение бронирований"),
  });

  return { bookings, isLoading, deleteAsync };
}
