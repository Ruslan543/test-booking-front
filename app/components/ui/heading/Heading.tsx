import { FC } from "react";

interface IProps {
  title: string;
  className?: string;
}

const Heading: FC<IProps> = ({ title, className }) => {
  return (
    <h1 className={`flex justify-center items-center h-screen ${className}`}>
      {title}
    </h1>
  );
};

export default Heading;
