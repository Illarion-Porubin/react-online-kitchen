import React from "react";
import s from "./Favorite.module.scss";
import { Header } from "../../components/header/Header";
import { Search } from "../../components/search/Search";
import { CustomButton } from "../../components/customButton/CustomButton";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectFavoriteData } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { favoriteSlice } from "../../redux/slices/favoriteSlice";
import { Pagination } from "../../components/pagination/Pagination";

export const Favorite: React.FC = () => {
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectFavoriteData);
  const [search, setSearch] = React.useState<string>("");

  //////////////////////////////////////
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const items = 4;
  const allPages = Math.ceil(data.favoriteList.length / items);
  const minItems = currentPage >= 1 ? currentPage * items : currentPage;
  const maxItems = currentPage >= 1 ? minItems + items : items;
  const dataValue = data.favoriteList.slice(minItems, maxItems);
  const [list, setList] = React.useState<any>([]);
  const [visible, setVisable] = React.useState<boolean>(true);

  console.log(list);

  React.useEffect(() => {
    if (search) {
      const findRecipe = data.favoriteList.find((item: any) =>
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
  }, [search, currentPage]);

  return (
    <>
      <Header />
      <div className="container">
        <div className={s.search}>
          <Search mainColor="black" search={search} setSearch={setSearch} />
        </div>
        <div className={s.content}>
          {list.map((item: any, id: number) => (
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
                  onClick={() => dispatch(favoriteSlice.actions.deleteRecipe(item))}
                  className={s.dopStyle}
                />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: visible ? "block" : "none" }}>
          <Pagination
            allPages={allPages}
            setCurrentPage={setCurrentPage}
            items={items}
          />
        </div>
      </div>
    </>
  );
};
