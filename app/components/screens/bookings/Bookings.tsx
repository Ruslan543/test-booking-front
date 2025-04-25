import { FC } from "react";

import styles from "../../ui/list/list.module.scss";

import BookingItem from "./BookingItem";
import { useBookings } from "./useBookings";

const Bookings: FC = () => {
  const { bookings, isLoading, deleteAsync } = useBookings();

  if (isLoading) return <div>Загрузка...</div>;
  if (!bookings?.length) {
    return <div className={styles.notFound}>Нет бронирований</div>;
  }

  return (
    <div className={styles.list}>
      {bookings?.map((booking) => (
        <BookingItem
          key={booking.id}
          booking={booking}
          deleteFn={deleteAsync}
        />
      ))}
    </div>
  );
};

export default Bookings;
