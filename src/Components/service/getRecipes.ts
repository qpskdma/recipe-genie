import axios from "axios";
import { ApiResponse } from "@/app/data/recipes";

// const params = {
//   page: 1,
//   // param1: "carrot",
//   // param2: "potato",
// };

export const fetchRecipes = async () => {
  try {
    const response = await axios.get<ApiResponse>(
      "https://dummyjson.com/recipes",
      {}
    );
    console.log(response.data.recipes);
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};
