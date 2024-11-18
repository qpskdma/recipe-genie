"use client";
import React, { useState } from "react";
import styles from "./Randomize.module.scss";
import { ingredients } from "./data/Ingredients";

interface RandomizeProps {}

const Randomize: React.FC<RandomizeProps> = ({}) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const handleClick = (id: number | never) => {
    setSelectedIngredients((prevActiveItems: Array) => {
      if (prevActiveItems.includes(id)) {
        return prevActiveItems.filter((itemid: number) => itemid !== id);
      } else {
        return [...prevActiveItems, id];
      }
    });
  };
  return (
    <div className={styles.container}>
      <section>
        <ul className={styles.ingredients}>
          {ingredients.map((e, i) => {
            return (
              <li
                key={i}
                onClick={() => handleClick(i)}
                className={selectedIngredients.includes(i) ? styles.active : ""}
              >
                <p>{e}</p>
                <button
                  className={`${styles.selectBtn} ${
                    selectedIngredients.includes(i) ? styles.active : ""
                  }`}
                >
                  <b>{selectedIngredients.includes(i) ? "-" : "+"}</b>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.recepie}>
        <button className={styles.generateBtn}>Сгенерировать рецепт</button>
      </section>
    </div>
  );
};

export default Randomize;
