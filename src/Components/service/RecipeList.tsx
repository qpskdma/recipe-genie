"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApiResponse, Recipe } from "@/app/data/recipes";

interface RecipeListProps {}

const RecipeList: React.FC<RecipeListProps> = ({}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  // const params = {
  //   page: 1,
  //   // param1: "carrot",
  //   // param2: "potato",
  // };
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://dummyjson.com/recipes",
          {}
        );

        console.log(response.data.recipes);
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      {/* <h1>Recipe List</h1>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.name}</h2>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Instructions: {recipe.instructions}</p>
        </div>
      ))} */}
    </div>
  );
};

export default RecipeList;
