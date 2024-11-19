import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>Recipe Genie</h1>
      <nav>
        <ul className={styles.navWrapper}>
          <li>
            <Link href={"/main"}>Главная</Link>
          </li>
          <li>
            <Link href={"/"}>Рецепты</Link>
          </li>
          {/* <li>
            <Link href={"/"}>Новинки</Link>
          </li> */}
          <li>
            <Link href={"/"}>О нас</Link>
          </li>
        </ul>
      </nav>
      <Link href={"/"} className={styles.loginBtn}>
        <button>Вход</button>
      </Link>
    </header>
  );
};

export default Header;
