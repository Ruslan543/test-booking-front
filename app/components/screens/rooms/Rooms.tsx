import Link from "next/link";
import { FC } from "react";

import styles from "../../ui/list/list.module.scss";

import RoomItem from "./RoomItem";
import { useRooms } from "./useRooms";

const Rooms: FC = () => {
  const { rooms, isLoading, deleteAsync } = useRooms();

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <>
      <Link href="/room/create">
        <a className="flex justify-center m-3">
          <div className="bg-yellow-700 p-2">Создать комнату</div>
        </a>
      </Link>

      {!rooms?.length ? (
        <div className={styles.notFound}>Нет комнат</div>
      ) : (
        <div className={styles.list}>
          {rooms?.map((room) => (
            <RoomItem key={room.id} room={room} deleteFn={deleteAsync} />
          ))}
        </div>
      )}
    </>
  );
};

export default Rooms;
