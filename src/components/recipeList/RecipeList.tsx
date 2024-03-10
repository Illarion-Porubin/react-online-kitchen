import React from "react";
import s from "./RecipeList.module.scss";
import { useCustomSelector } from "../../hooks/store";
import { selectRecipeData } from "../../redux/selectors";
import { Recipe } from "../recipe/Recipe";
import { Pagination } from "../pagination/Pagination";

export const RecipeList: React.FC = () => {
  const data = useCustomSelector(selectRecipeData);

  /////The server did not provide API, so we implement the logic on the client/////
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const items = 6;
  const allPages = Math.ceil(data.recipeList.length / items);
  const minItems = currentPage >= 1 ? currentPage * items : currentPage;
  const maxItems = currentPage >= 1 ? minItems + items : items;
  const dataValue = data.recipeList.slice(minItems, maxItems);

  return (
    <div className="container">
      <section className={s.recipeList}>
        {data.isLoading === "loaded" && data.recipeList.length > 0 ? (
          <>
            <h2 className={s.title}>All the recipes</h2>
            <div className={s.content}>
              {dataValue.map((item: any, id: string) => (
                <Recipe item={item} key={id} />
              ))}
            </div>
          </>
        ) : null}
        <div className={s.paginationWrap}>
          <Pagination
            allPages={allPages}
            items={items}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
};
