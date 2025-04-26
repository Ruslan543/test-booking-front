import { FC, FormEvent, useState } from "react";

import styles from "@/ui/form/form.module.scss";

import { IEmailPassword } from "@/shared/types/user.types";

interface Props {
  onSubmit: (data: IEmailPassword) => void;
}

const Auth: FC<Props> = ({ onSubmit, children }) => {
  const [email, setEmail] = useState<string>("ruslan@gmail.com");
  const [password, setPassword] = useState<string>("12345678");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      onSubmit({ email, password });
    } catch (e) {}
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputBox}>
        <label>Email</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="E-mail"
        />
      </div>

      <div className={styles.inputBox}>
        <label>Пароль</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Пароль"
          type="password"
        />
      </div>

      {children}
    </form>
  );
};

export { Auth };
