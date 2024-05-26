"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={pathname === "/" ? styles.active : ""}>
                Мої тренування
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                href="/new-workout"
                className={pathname === "/new-workout" ? styles.active : ""}
              >
                Нове тренування
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
