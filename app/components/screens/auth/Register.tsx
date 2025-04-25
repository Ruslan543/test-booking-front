import { FC, useReducer } from "react";

import { Auth } from "./Auth";
import { useRegister } from "./useRegister";

export const Register: FC = () => {
  const { register, isLoading } = useRegister();

  return (
    <>
      <Auth onSubmit={register}>
        <button className="bg-yellow-700 p-2">
          {isLoading ? "Загрузка..." : "Регистрация"}
        </button>
      </Auth>
    </>
  );
};
