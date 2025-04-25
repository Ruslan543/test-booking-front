import { axiosClassic } from "api/interceptors";

import { IAuthResponse } from "@/shared/types/user.types";

import { getAuthUrl } from "@/configs/api.config";

export const AuthService = {
  async register(email: string, password: string) {
    const { data } = await axiosClassic.post<IAuthResponse>(
      getAuthUrl("register"),
      { email, password }
    );

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    }

    localStorage.setItem("user", JSON.stringify(data.user));
    return data;
  },

  async login(email: string, password: string) {
    const { data } = await axiosClassic.post<IAuthResponse>(
      getAuthUrl("login"),
      { email, password }
    );

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    }

    localStorage.setItem("user", JSON.stringify(data.user));
    return data;
  },

  logout() {
    localStorage.removeItem("accessToken");
  },
};
