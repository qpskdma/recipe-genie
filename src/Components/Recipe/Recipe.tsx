"use client";
import React, { useEffect, useState } from "react";
import { Recipe } from "../../app/data/recipes";
import styles from "./Recipe.module.scss";
import axios from "axios";
import Link from "next/link";

interface RecipeProps {
  recipes: Recipe;
}

const RecipePage: React.FC<RecipeProps> = ({ recipes }) => {
  const [translatedIngr, setTranslatedIngr] = useState([]);
  const [translatedInstr, setTranslatedInstr] = useState([]);

  const untranslaytedIngr = recipes.ingredients.join("|*|");
  const untranslaytedInstr = recipes.instructions.join("|*|");

  useEffect(() => {
    const handleTranslate = async () => {
      try {
        const [nameResponse, descriptionResponse] = await Promise.all([
          axios.get("https://api.mymemory.translated.net/get", {
            params: {
              q: untranslaytedIngr,
              langpair: `en|ru`,
            },
          }),
          axios.get("https://api.mymemory.translated.net/get", {
            params: {
              q: untranslaytedInstr,
              langpair: `en|ru`,
            },
          }),
        ]);
        setTranslatedIngr(
          nameResponse.data.responseData.translatedText.split("|*|")
        );
        setTranslatedInstr(
          descriptionResponse.data.responseData.translatedText.split("|*|")
        );
      } catch (error) {
        console.error("Error translating text:", error);
      }
    };
    handleTranslate();
  }, []);

  console.log(recipes);
  return (
    <div className={styles.back}>
      <section className={styles.container}>
        <div className={styles.introItem}>
          <img className={styles.image} src={recipes.image} alt="" />
          <div className={styles.description}>
            <h3 className={styles.title}>{recipes.name}</h3>
            <div className={styles.properties}>
              <div className={styles.prop}>
                <div className={styles.propIcon}>
                  <img src="/Time.svg" alt="" />
                  {recipes.cookTimeMinutes}
                </div>
                <span>Минут</span>
              </div>
              <div className={styles.prop}>
                <div className={styles.propIcon}>
                  <img src="/Book.svg" alt="" />
                  {recipes.ingredients.length}
                </div>
                <span>Ингридиенты</span>
              </div>
              <div className={styles.prop}>
                <div className={styles.propIcon}>
                  <img src="/Man.svg" alt="" /> {recipes.servings}
                </div>
                <span>Порций</span>
              </div>
            </div>
            <p>{recipes.mealType}</p>
            {recipes.tags.map((e, i) => {
              return <p key={i}>{e}</p>;
            })}
          </div>
        </div>
        <div className={styles.main}>
          <p>Ингридиенты</p>
          {translatedIngr.map((e, i) => {
            return (
              <div key={i} className={styles.ingr}>
                {e}
              </div>
            );
          })}
          <div className={styles.instructions}>
            <p>Cпособ приготовления</p>
            <ol className={styles.list}>
              {translatedInstr.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ol>
          </div>
        </div>
        <Link href={"/fast-recipe"}>
          <img
            className={styles.repeat}
            src="/Repeat.svg"
            alt=""
            width={32}
            height={32}
          />
        </Link>
      </section>
    </div>
  );
};

export default RecipePage;
