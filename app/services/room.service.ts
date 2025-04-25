import axios from "api/interceptors";

import {
  IRoom,
  IRoomCreateInput,
  IRoomUpdateInput,
} from "@/shared/types/room.types";

import { getRoomUrl } from "@/configs/api.config";

export const RoomService = {
  async getAll() {
    const { data } = await axios.get<IRoom[]>(getRoomUrl());
    return data;
  },

  async getOne(id: string) {
    const { data } = await axios.get<IRoom>(getRoomUrl(id));
    return data;
  },

  async create(createData: IRoomCreateInput) {
    const { data } = await axios.post<IRoom>(getRoomUrl(), createData);
    return data;
  },

  async update(id: string, updateData: IRoomUpdateInput) {
    const { data } = await axios.patch<IRoom>(getRoomUrl(id), updateData);
    return data;
  },

  async delete(id: string) {
    const { data } = await axios.delete<null>(getRoomUrl(id));
    return data;
  },
};
