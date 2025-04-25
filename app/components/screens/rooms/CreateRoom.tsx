import { FC, FormEvent, useState } from "react";

import styles from "@/ui/form/form.module.scss";

import { useCreateRoom } from "./useCreateRoom";

const CreateRoom: FC = () => {
  const { createAsync } = useCreateRoom();

  const [name, setName] = useState<string>("");
  const [capacity, setCapacity] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createAsync({ name, capacity: Number(capacity), location, description });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputBox}>
        <label>Название</label>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Название"
        />
      </div>

      <div className={styles.inputBox}>
        <label>Вместимость</label>
        <input
          onChange={(event) => setCapacity(event.target.value)}
          value={capacity}
          placeholder="Вместимость"
        />
      </div>

      <div className={styles.inputBox}>
        <label>Локация</label>
        <input
          onChange={(event) => setLocation(event.target.value)}
          value={location}
          placeholder="Локация"
        />
      </div>

      <div className={styles.inputBox}>
        <label>Описание</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          placeholder="Не обязательно"
        />
      </div>

      <button className="bg-yellow-700 p-2">Создать комнату</button>
    </form>
  );
};

export default CreateRoom;
