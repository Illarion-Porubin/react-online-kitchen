import React from "react";
import s from "./Favorite.module.scss";
import { Search } from "../../components/search/Search";
import { CustomButton } from "../../components/customButton/CustomButton";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectFavoriteData } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { favoriteSlice } from "../../redux/slices/favoriteSlice";
import { Pagination } from "../../components/pagination/Pagination";
import { RecipeType } from "../../types";
import { usePaginate } from "../../hooks/usePaginate";

interface Models {
  models: {
    dataValue: RecipeType[]
    allPages: number
    items: number,
  };
}

export const Favorite: React.FC = React.memo(() => {
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectFavoriteData);
  const [search, setSearch] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [list, setList] = React.useState<RecipeType[]>([]);
  const [visible, setVisable] = React.useState<boolean>(true);

  const { models }: Models = usePaginate({items: 4, currentPage, dataList: data.favoriteList});

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
      } else {
        setList(models.dataValue);
        setVisable(true);
      }
    } else {
      setList(models.dataValue);
    }
  }, [
    search,
    deleteRecipe, 
    data.favoriteList,
    currentPage
  ]);

  if (!data.favoriteList.length) {
    window.location.href = "/";
  }

  return (
    <>
      <div className="container">
        <div className={s.search}>
          <Search mainColor="black" setSearch={setSearch} />
        </div>
        <div className={s.content}>
          {list.map((item: RecipeType, id: number) => (
            <div className={s.item} key={id}>
              <div className={s.pictureWrap}>
                <img
                  className={s.picture}
                  src={item.strMealThumb}
                  alt="picture"
                />
                <div className={s.category}>
                  <p className={s.categoryText}>{item.strCategory}</p>
                </div>
              </div>
              <div className={s.description}>
                <p className={s.name}>{item.strMeal}</p>
                <div className={s.descriptionText}>
                  <p className={s.text}>{item.strArea} food</p>
                </div>
              </div>
              <div className={s.buttons}>
                <Link to={`/recipe/${item.idMeal}`} className={s.lookLink}>
                  <CustomButton text="Смотреть" className={s.dopStyle} />
                </Link>
                <CustomButton
                  text="Удалить"
                  onClick={() => deleteRecipe(item)}
                  className={s.dopStyle}
                />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: visible ? "block" : "none" }}>
          <Pagination
            allPages={models.allPages}
            setCurrentPage={setCurrentPage}
            items={models.items}
          />
        </div>
      </div>
    </>
  );
});
