import React from "react";
import styles from "./Main.module.scss";

interface MainProps {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <section className={styles.main}>
      <h3>Найди свой рецепт</h3>
      <p>
        На нашем сайте вы найдете очень вкусные, доступные и интересные рецепты
        домашней кухни. Вы не умеете готовить?! Не расстраивае тесь! Исправить
        это очень просто почаще заглядывайте к нам в гости и вы не только
        научитесь, но и полюбите готовить! Самый главный секрет вкусного блюда
        это хорошее настроение и уверенность в том, что у вас все получится!
        Любите то, чем вы занима етесь! Любите готовить! Готовьте с радостью и
        все у вас получится!
      </p>
      <label htmlFor="search">Быстрый поиск блюда</label>
      <div>
        <input type="text" id="search" placeholder="Введите название блюда" />
        <button className={styles.inputBtn}>Найти</button>
      </div>
    </section>
  );
};

export default Main;
