"use client";
import React, { useState } from "react";
import styles from "../Randomize.module.scss";
import { category } from "../data/data";
import axios from "axios";
import { ApiResponse, Recipe } from "../data/recipes";
import { getRandomNumber } from "@/Components/service/getRandomNumber";
import RecipePage from "../../Components/Recipe/Recipe";

const Page: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe | null>(null);

  const fetchRecipes = async (category: string) => {
    try {
      if (category === "soup") {
        const response = await axios.get<ApiResponse>(
          `https://dummyjson.com/recipes/tag/${category}`
        );
        const rec = response.data.recipes;
        const num = getRandomNumber(1, rec.length);
        setRecipes(rec[num]);
        return;
      }
      const response = await axios.get<ApiResponse>(
        `https://dummyjson.com/recipes/meal-type/${category}`
      );
      const rec = response.data.recipes;
      const num = getRandomNumber(0, rec.length - 1);
      setRecipes(rec[num]);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      {recipes ? (
        <RecipePage recipes={recipes} />
      ) : (
        <div className={styles.container}>
          <section className={styles.recepie}>
            <div>
              <p>Выберите категорию</p>
              <div className={styles.questionWrapper}>
                {category.map((e, i) => {
                  return (
                    <button
                      key={i}
                      className="gelatine"
                      onClick={() => fetchRecipes(e.original)}
                    >
                      {e.text}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Page;
