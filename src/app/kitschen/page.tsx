"use client";
import React, { useState } from "react";
import styles from "../Randomize.module.scss";
import { kitschen } from "@/app/data/data";
import { getRandomNumber } from "@/Components/service/getRandomNumber";
import axios from "axios";
import { ApiResponse, Recipe } from "../data/recipes";
import RecipePage from "../../Components/Recipe/Recipe";

const Page: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe | null>(null);

  const fetchRecipes = async (kitschen: string) => {
    try {
      console.log(kitschen);
      const response = await axios.get<ApiResponse>(
        `https://dummyjson.com/recipes/tag/${kitschen}`
      );
      const rec = response.data.recipes;
      const num = getRandomNumber(0, rec.length - 1);
      console.log(rec);
      setRecipes(rec[num]);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <>
      {recipes ? (
        <RecipePage recipes={recipes} />
      ) : (
        <div className={styles.container}>
          <section className={styles.recepie}>
            <div>
              <p>Какую кухню вы предпочитаете?</p>
              <div className={styles.questionWrapper}>
                {kitschen.map((e, i) => {
                  return (
                    <button key={i} onClick={() => fetchRecipes(e.original)}>
                      {e.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Page;
