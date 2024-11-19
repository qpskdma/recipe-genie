import React from "react";
import styles from "./Category.module.scss";

interface CategoryProps {}

const Category: React.FC<CategoryProps> = ({}) => {
  return (
    <div className={styles.container}>
      <p>Категория</p>
      <div>
        <p className={styles.sup}>
          <span>🍲 </span>Первое
        </p>
        <p>
          <span>🧆 </span> Второе
        </p>
        <p className={styles.dessert}>
          <span>🧁 </span>Десерт
        </p>
      </div>
    </div>
  );
};

export default Category;
