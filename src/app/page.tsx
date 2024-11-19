import RecipeList from "@/Components/service/RecipeList";
import styles from "./page.module.scss";
import Randomize from "./Randomize";

export default function page() {
  return (
    <div className={styles.page}>
      <Randomize />
      <RecipeList />
    </div>
  );
}
