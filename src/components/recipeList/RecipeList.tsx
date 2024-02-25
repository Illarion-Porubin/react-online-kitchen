import React from "react";
import s from "./RecipeList.module.scss";
import { useCustomSelector } from "../../hooks/store";
import { selectRecipeData } from "../../redux/selectors";
import { Recipe } from "../recipe/Recipe";

export const RecipeList: React.FC = () => {
  const data = useCustomSelector(selectRecipeData);

  // console.log(data.recipeList.meals[0], 'selectRecipeData');
  console.log(data.isLoading);

  return (
    <div className="container">
      <section className={s.recipeList}>
        <h2>All the recipes</h2>
        <div className={s.content}>
          {data.isLoading === "loaded"
            ? data.recipeList.meals.map((item: any, id: string) => (
                <Recipe item={item} key={id} />
              ))
            : null}
        </div>
      </section>
    </div>
  );
};
