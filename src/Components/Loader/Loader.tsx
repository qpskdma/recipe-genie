import React from "react";
import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cooking}>
        <div className={styles.area}>
          <div className={styles.sides}>
            <div className={styles.pan}></div>
            <div className={styles.handle}></div>
          </div>
          <div className={styles.pancake}>
            <div className={styles.pastry}></div>
          </div>
        </div>
      </div>
      <div className={styles.text}>Загрузка...</div>
    </div>
  );
};

export default Loader;
