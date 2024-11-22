"use client";
import React, { useEffect, useState } from "react";
import { Recipe } from "../data/recipes";
import Loader from "@/Components/Loader/Loader";
import axios from "axios";
import RecipePage from "../../Components/Recipe/Recipe";
import { getRandomNumber } from "@/Components/service/getRandomNumber";

const Page: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<Recipe>(
          `https://dummyjson.com/recipes/${getRandomNumber(1, 30)}`
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return <div>{recipes ? <RecipePage recipes={recipes} /> : <Loader />}</div>;
};

export default Page;
