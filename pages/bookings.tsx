import Bookings from "@/components/screens/bookings/Bookings";

import { NextPageAuth } from "@/shared/types/auth.types";

const BookingsPage: NextPageAuth = () => {
  return <Bookings />;
};

BookingsPage.isOnlyUser = true;

export default BookingsPage;
