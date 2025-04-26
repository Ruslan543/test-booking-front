import Link from "next/link";
import { FC } from "react";

import { IRoom } from "@/shared/types/room.types";

import { convertDate } from "@/utils/date/convertToDate";

import styles from "../../ui/list/list.module.scss";

interface Props {
  room: IRoom;
  deleteFn?: (id: string) => void;
}

const RoomItem: FC<Props> = ({ room, deleteFn }) => {
  const { createdAt, id, description, capacity, bookings = [] } = room;

  const freePlaces = capacity - bookings?.length;
  const isFree = freePlaces > 0;

  return (
    <div className={styles.item}>
      <div>
        Название комнаты: <span>{room.name}</span>
      </div>

      <div>
        Локация комнаты: <span>{room.location}</span>
      </div>

      {description && (
        <div>
          Описание комнаты: <span>{description}</span>
        </div>
      )}

      <div>
        Вместимость: <span>{capacity}</span>
      </div>

      <div>
        Свободные места: <span>{freePlaces}</span>
      </div>

      <div>
        Создано:
        <span> {convertDate(createdAt)}</span>
      </div>

      {isFree && (
        <div>
          <Link href={`/booking/${id}/create`}>
            <a>
              <div className={styles.button}>Забронировать</div>
            </a>
          </Link>
        </div>
      )}

      {deleteFn && (
        <div>
          <button className={styles.button} onClick={() => deleteFn(id)}>
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomItem;
