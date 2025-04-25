import Rooms from "@/components/screens/rooms/Rooms";

import { NextPageAuth } from "@/shared/types/auth.types";

const RoomsPage: NextPageAuth = () => {
  return <Rooms />;
};

RoomsPage.isOnlyUser = true;

export default RoomsPage;
