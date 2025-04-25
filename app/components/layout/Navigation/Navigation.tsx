import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import styles from "./Navigation.module.scss";
import { navList } from "./list.data";

const Navigation: FC = () => {
  const { asPath } = useRouter();

  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        {navList.map((item) => (
          <li
            key={item.link}
            className={`${asPath === item.link ? "text-yellow-700" : ""}`}
          >
            <Link href={item.link}>
              <a>
                <span>{item.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
