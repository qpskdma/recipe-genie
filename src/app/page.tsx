import styles from "./page.module.scss";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>
          Генератор рецептов: 30 идей для завтраков, обедов и ужинов
        </h3>
        <p className={styles.subtitle}>
          Что приготовить, когда времени, сил или настроения не хватает?
        </p>
        <p>
          На нашем сайте вы найдете очень вкусные, доступные и интересные
          рецепты домашней кухни.
        </p>
        <p className={styles.textBtns}>Подобрать рецепт:</p>
        <div className={styles.btnWrapper}>
          <a href={"/fast-recipe"}>
            <button className={styles.btn}>Случайный рецепт</button>
          </a>
          <a href={"/category"}>
            <button className={styles.btn}>По категории</button>
          </a>
          <a href={"/kitschen"}>
            <button className={styles.btn}>Выбрать кухню</button>
          </a>
        </div>
      </div>
    </div>
  );
}
