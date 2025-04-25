import CreateRoom from "@/components/screens/rooms/CreateRoom";

import { NextPageAuth } from "@/shared/types/auth.types";

const RoomCreatePage: NextPageAuth = () => {
  return <CreateRoom />;
};

RoomCreatePage.isOnlyUser = true;

export default RoomCreatePage;
