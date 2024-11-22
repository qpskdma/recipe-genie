import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <div>
          <img src="/Sup.svg" alt="" />
        </div>
        <Link href={"/"}>
          <h1>Recipe Genie</h1>
        </Link>
      </div>
      {/* <nav>
        <ul className={styles.navWrapper}>
          <li>
            <Link href={"/main"}>Главная</Link>
          </li>
          <li>
            <Link href={"/"}>Рецепты</Link>
          </li>
          <li>
            <Link href={"/fast-recipes"}>Подобрать рецепт</Link>
          </li>
          <li>
            <Link href={"/"}>О нас</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Link href={"/"} className={styles.loginBtn}>
        <button>Вход</button>
      </Link> */}
    </header>
  );
};

export default Header;
