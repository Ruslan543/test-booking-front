import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { errorCatch } from "api/api.helper";
import toast from "react-hot-toast";

import { BookingService } from "@/services/booking.service";

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
    onError: (error) => toast.error(errorCatch(error)),
  });

  return { bookings, isLoading, deleteAsync };
}
