import { FC, FormEvent, useState } from "react";

import styles from "@/ui/form/form.module.scss";

import { useCreateBooking } from "./useCreateBooking";

const CreateBooking: FC = () => {
  const { createAsync } = useCreateBooking();
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createAsync({ startTime, endTime });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputBox}>
        <label>Начальная дата</label>
        <input
          onChange={(event) => setStartTime(event.target.value)}
          value={startTime}
          placeholder="2025-04-24T20:12Z"
        />
      </div>

      <div className={styles.inputBox}>
        <label>Конечная дата</label>
        <input
          onChange={(event) => setEndTime(event.target.value)}
          value={endTime}
          placeholder="2025-04-24T20:12Z"
        />
      </div>

      <button className="bg-yellow-700 p-2">Создать бронь</button>
    </form>
  );
};

export default CreateBooking;
