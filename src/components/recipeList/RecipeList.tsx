import React from "react";
import s from "./RecipeList.module.scss";
import { useCustomSelector } from "../../hooks/store";
import { selectRecipeData } from "../../redux/selectors";
import { Recipe } from "../recipe/Recipe";
import { Pagination } from "../pagination/Pagination";
import { RecipeType } from "../../types";
import { usePaginate } from "../../hooks/usePaginate";

interface uPaginate {
  paginate: {
    dataValue: RecipeType[];
    allPages: number;
    items: number;
  };
}

export const RecipeList: React.FC = React.memo(() => {
  const data = useCustomSelector(selectRecipeData);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const { paginate }: uPaginate = usePaginate({
    items: 6,
    currentPage,
    dataList: data.recipeList,
  });


  return (
    <div className="container">
      <section className={s.recipeList}>
        {data.isLoading === "loaded" && paginate.dataValue.length > 0 ? (
          <>
            <h2 className={s.title}>All the recipes</h2>
            <div className={s.content}>
              {paginate.dataValue.map((item: RecipeType, id: number) => (
                <Recipe item={item} key={id} />
              ))}
            </div>
          </>
        ) : null}
        <div className={s.paginationWrap}>
          <Pagination
            allPages={paginate.allPages}
            items={paginate.items}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
});
