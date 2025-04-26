import Link from "next/link";
import { FC } from "react";

import { useUser } from "@/hooks/useUser";

import { ROLES } from "@/shared/types/user.types";

import styles from "../../ui/list/list.module.scss";

import RoomItem from "./RoomItem";
import { useRooms } from "./useRooms";

const Rooms: FC = () => {
  const { user } = useUser();
  const { rooms, isLoading, deleteFn } = useRooms();

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
            <RoomItem
              key={room.id}
              room={room}
              deleteFn={
                user?.roles.includes(ROLES.ADMIN) ? deleteFn : undefined
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Rooms;
