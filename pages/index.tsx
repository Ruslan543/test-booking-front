import { NextPage } from "next";

const HomePage: NextPage<any> = () => {
  return (
    <div className="text-center h-screen flex items-center justify-center">
      Привет! Это тестовое задание на проверку REST API :)
      <br />
      Если запросы к REST API выполняются долго - это значит, что приостановился
      сервер из-за бездействия.
      <br />
      Нужно немного подождать и сервер снова запуститься
    </div>
  );
};

export default HomePage;
