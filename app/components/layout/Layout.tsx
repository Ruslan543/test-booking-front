import { FC } from "react";

import Navigation from "./Navigation/Navigation";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
