import React from "react";
import { useCustomDispatch, useCustomSelector } from "./store";
import { selectFavoriteData } from "../redux/selectors";
import { RecipeType } from "../types";
import { favoriteSlice } from "../redux/slices/favoriteSlice";

export const useFavorite = () => {
  const data = useCustomSelector(selectFavoriteData);
  const dispatch = useCustomDispatch();
  const [search, setSearch] = React.useState<string>("");
  const [list, setList] = React.useState<RecipeType[]>([]);
  const [visible, setVisable] = React.useState<boolean>(true);

  const deleteRecipe = React.useCallback(
    (value: RecipeType) => {
      dispatch(favoriteSlice.actions.deleteRecipe(value));
      setList(data.favoriteList);
    },
    [dispatch, data.favoriteList]
  );

  React.useEffect(() => {
    if (search) {
      const findRecipe = data.favoriteList.find((item: RecipeType) =>
        item.strMeal.toLowerCase() === search.toLowerCase() ? true : false
      );
      if (findRecipe) {
        setList([findRecipe]);
        setVisable(false);
      }
    }
  }, [data.favoriteList, search]);

  return {
    models: {
      list,
      search,
      visible,
      setList,
      setSearch,
      setVisable,
      deleteRecipe,
    },
  };
};
