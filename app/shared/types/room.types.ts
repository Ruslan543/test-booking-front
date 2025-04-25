import { IBooking } from "./booking.types";

export interface IRoom {
  id: string;
  name: string;
  capacity: number;
  location: string;
  description?: string;
  bookings?: IBooking[];
  createdAt: string;
  updatedAt: string;
}

export interface IRoomCreateInput {
  name: string;
  capacity: number;
  location: string;
  description?: string;
}

export interface IRoomUpdateInput extends Partial<IRoomCreateInput> {}
