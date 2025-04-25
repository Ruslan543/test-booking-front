import axios from "api/interceptors";

import { IBooking, IBookingCreateInput } from "@/shared/types/booking.types";

import { getBookingUrl } from "@/configs/api.config";

export const BookingService = {
  async getAll() {
    const { data } = await axios.get<IBooking[]>(getBookingUrl());
    return data;
  },

  async getOne(id: string) {
    const { data } = await axios.get<IBooking>(getBookingUrl(id));
    return data;
  },

  async create(createData: IBookingCreateInput) {
    const { data } = await axios.post<IBooking>(getBookingUrl(), createData);
    return data;
  },

  async delete(id: string) {
    const { data } = await axios.delete<null>(getBookingUrl(id));
    return data;
  },
};
