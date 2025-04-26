import { NextPage } from "next";

const HomePage: NextPage<any> = () => {
  return (
    <div className="text-center h-screen flex items-center justify-center">
      Привет! Это тестовое задание на проверку REST API :)
      <br />
      Если запросы к REST API выполняются долго - это значит, что приостановился
      сервер из-за бездействия.
      <br />
      <div className="text-yellow-700">Нужно немного подождать</в>
    </div>
  );
};

export default HomePage;
