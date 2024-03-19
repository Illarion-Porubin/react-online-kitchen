import React from "react";
import { useCustomDispatch, useCustomSelector } from "./store";
import { selectFavoriteData } from "../redux/selectors";
import { RecipeType } from "../types";
import { favoriteSlice } from "../redux/slices/favoriteSlice";

interface Props {
  currentPage: number,
  dataValue: RecipeType[],
  setList: React.Dispatch<React.SetStateAction<RecipeType[]>>,
}

export const useFavorite = ({ currentPage, dataValue, setList }: Props) => {
  const data = useCustomSelector(selectFavoriteData);
  const dispatch = useCustomDispatch();
  const [search, setSearch] = React.useState<string>("");
  const [visible, setVisable] = React.useState<boolean>(true);

  const deleteRecipe = React.useCallback(
    (value: RecipeType) => {
      dispatch(favoriteSlice.actions.deleteRecipe(value));
      setList(data.favoriteList);
    },
    [dispatch, setList, data.favoriteList]
  );

  React.useEffect(() => {
    if (search) {
      const findRecipe = data.favoriteList.find((item: RecipeType) =>
        item.strMeal.toLowerCase() === search.toLowerCase() ? true : false
      );
      if (findRecipe) {
        setList([findRecipe]);
        setVisable(false);
      } else {
        setList(dataValue);
        setVisable(true);
      }
    } else {
      setList(dataValue);
    }
  }, [search, deleteRecipe, data.favoriteList, currentPage]); // Don't add setList and dataValue

  return {
    favorite: {
      search,
      visible,
      setSearch,
      setVisable,
      deleteRecipe,
    },
  };
};
