import CreateBooking from "@/components/screens/booking/CreateBooking";

import { NextPageAuth } from "@/shared/types/auth.types";

const BookingCreatePage: NextPageAuth = () => {
  return <CreateBooking />;
};

BookingCreatePage.isOnlyUser = true;

export default BookingCreatePage;
