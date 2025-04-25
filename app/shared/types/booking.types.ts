import { IRoom } from "./room.types";

export interface IBooking {
  id: string;
  roomId: string;
  userId: string;
  startTime: string;
  endTime: string;
  room: IRoom;
  createdAt: string;
  updatedAt: string;
}

export interface IBookingCreateInput {
  roomId: string;
  startTime: string;
  endTime: string;
}
