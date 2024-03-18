import React from "react";
import s from "./Billboard.module.scss";
import { Search } from "../search/Search";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindByName } from "../../redux/slices/recipeSlice";

export const Billboard: React.FC = () => {
  const dispatch = useCustomDispatch();
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    if (search) {
      dispatch(fetchFindByName(search));
    }
  }, [dispatch, search]);

  return (
    <div className={s.billboard}>
      <div className={s.content}>
        <blockquote
          className={s.excerpt}
          cite="https://www.quoteikon.com/real-food-doesnt-have-ingredients-real-food-is-ingredients.html"
        >
          <p className={s.quote}>
            Real Food Doesn't Have Ingredients, Real Food Is Ingredients
          </p>
          <cite className={s.author}>— Jamie Oliver</cite>
        </blockquote>
        <div className={s.sliderSearch}>
          <Search mainColor="white" setSearch={setSearch}/>
        </div>
      </div>
    </div>
  );
};
