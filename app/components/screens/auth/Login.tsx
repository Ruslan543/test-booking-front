import { FC } from "react";

import { Auth } from "./Auth";
import { useLogin } from "./useLogin";

export const Login: FC = () => {
  const { login, isLoading } = useLogin();

  return (
    <>
      <Auth onSubmit={login}>
        <button className="bg-yellow-700 p-2">
          {isLoading ? "Загрузка..." : "Логин"}
        </button>
      </Auth>
    </>
  );
};
