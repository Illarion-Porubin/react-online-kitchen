import React from "react";
import s from "./Favorite.module.scss";
import { Search } from "../../components/search/Search";
import { CustomButton } from "../../components/customButton/CustomButton";
import { useCustomSelector } from "../../hooks/store";
import { selectFavoriteData } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/pagination/Pagination";
import { RecipeType } from "../../types";
import { usePaginate } from "../../hooks/usePaginate";
import { useFavorite } from "../../hooks/useFavorite";

interface uPaginate {
  paginate: {
    dataValue: RecipeType[];
    allPages: number;
    items: number;
  };
}

interface uFavorite {
  favorite: {
    search: string;
    visible: boolean;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setVisable: React.Dispatch<React.SetStateAction<boolean>>;
    deleteRecipe: (value: RecipeType) => void;
  }
}

export const Favorite: React.FC = React.memo(() => {
  const data = useCustomSelector(selectFavoriteData);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [list, setList] = React.useState<RecipeType[]>([]);

  const { paginate }: uPaginate = usePaginate({
    items: 4,
    currentPage,
    dataList: data.favoriteList,
  });

  const { favorite }: uFavorite = useFavorite({
    currentPage,
    dataValue: paginate.dataValue,
    setList,
  });

  const RecipeContent: React.FC = () => {
    return (
      <>
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
                <CustomButton text="Look" className={s.dopStyle} />
              </Link>
              <CustomButton
                text="Удалить"
                onClick={() => favorite.deleteRecipe(item)}
                className={s.dopStyle}
              />
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <Search mainColor="black" setSearch={favorite.setSearch} className={s.search}/>
        <div className={s.content}>
          <RecipeContent />
        </div>
        <div style={{ display: favorite.visible && paginate.allPages ? "block" : "none" }}>
          <Pagination
            allPages={paginate.allPages}
            setCurrentPage={setCurrentPage}
            items={paginate.items}
          />
        </div>
      </div>
    </>
  );
});
