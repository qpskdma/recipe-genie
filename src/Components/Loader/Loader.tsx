import React from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cooking}>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
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
