"use client";
import React, { useEffect, useState } from "react";
import styles from "./Randomize.module.scss";
import { Ingredient, ingredients } from "./data/Ingredients";
import Loader from "@/Components/Loader/Loader";
import Category from "@/Components/Category/Category";

interface RandomizeProps {}

const Randomize: React.FC<RandomizeProps> = ({}) => {
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedIngredientsOrigin, setSelectedIngredientsOrigin] = useState<
    string[]
  >([]);

  // useEffect(() => {
  //   const items = document.querySelectorAll(`.${styles.ingredient}`);
  //   items.forEach((item, index) => {
  //     setTimeout(() => {
  //       item.classList.add(styles.show);
  //     }, index * 80);
  //   });
  // }, [showAll]);

  const handleClick = (id: number, name: string) => {
    setSelectedIngredients((prevActiveItems) => {
      if (prevActiveItems.includes(id)) {
        return prevActiveItems.filter((itemid: number) => itemid !== id);
      } else {
        return [...prevActiveItems, id];
      }
    });
    setSelectedIngredientsOrigin((prevActiveItems) => {
      if (prevActiveItems.includes(name)) {
        return prevActiveItems.filter((itemname: string) => itemname !== name);
      } else {
        return [...prevActiveItems, name];
      }
    });
    console.log(selectedIngredientsOrigin);
  };

  const displayedIngredients = showAll ? ingredients : ingredients.slice(0, 7);

  return (
    <div className={styles.container}>
      <section>
        <ul className={styles.ingredients}>
          {displayedIngredients.map((e: Ingredient) => {
            return (
              <li
                key={e.id}
                onClick={() => handleClick(e.id, e.original)}
                className={`${styles.ingredient} ${
                  selectedIngredients.includes(e.id) ? styles.active : ""
                }`}
              >
                <p>{e.name}</p>
                <button
                  className={`${styles.selectBtn} ${
                    selectedIngredients.includes(e.id) ? styles.active : ""
                  }`}
                >
                  <b>{selectedIngredients.includes(e.id) ? "-" : "+"}</b>
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className={styles.arrowBtn}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <img src="/Arrow-up.svg" alt="" />
          ) : (
            <img src="/Arrow-down.svg" alt="" />
          )}
        </button>
      </section>
      <section className={styles.recepie}>
        <Category />
      </section>
    </div>
  );
};

export default Randomize;
