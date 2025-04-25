import { FC } from "react";

import { IBooking } from "@/shared/types/booking.types";

import { convertDate } from "@/utils/date/convertToDate";

import styles from "../../ui/list/list.module.scss";

interface Props {
  booking: IBooking;
  deleteFn: (id: string) => void;
}

const BookingItem: FC<Props> = ({ booking, deleteFn }) => {
  const { room, createdAt, startTime, endTime, id } = booking;

  return (
    <div className={styles.item}>
      <div>
        Название комнаты: <span>{room.name}</span>
      </div>

      <div>
        Локация комнаты: <span>{room.location}</span>
      </div>

      {room.description && (
        <div>
          Описание комнаты: <span>{room.description}</span>
        </div>
      )}

      <div>
        Создано:
        <span> {convertDate(createdAt)}</span>
      </div>

      <div>
        Начальная дата: <span> {convertDate(startTime)}</span>
      </div>

      <div>
        Конечная дата: <span> {convertDate(endTime)}</span>
      </div>

      <div>
        <button className={styles.button} onClick={() => deleteFn(id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default BookingItem;
