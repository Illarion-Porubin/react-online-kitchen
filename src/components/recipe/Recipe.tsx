import React from "react";
import s from "./Recipe.module.scss";
import { Link } from "react-router-dom";
import { CustomButton } from "../customButton/CustomButton";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { favoriteSlice } from "../../redux/slices/favoriteSlice";
import { selectFavoriteData } from "../../redux/selectors";
import { useInView } from "react-intersection-observer";

interface Props {
  item: any;
}

export const Recipe: React.FC<Props> = ({ item }) => {
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectFavoriteData);
  const check = data.favoriteList.find(
    (recipe) => recipe.idMeal === item.idMeal
  );
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const checkFavorite = () => {
    check
      ? dispatch(favoriteSlice.actions.deleteRecipe(item))
      : dispatch(favoriteSlice.actions.addRecipe(item));
  };

  return (
    <div className={s.recipe} ref={ref}>
      {inView ? (
        <>
          <img className={s.picture} src={item.strMealThumb} alt="picture" />
          <div className={s.category}>
              <p className={s.categoryText}>{item.strCategory}</p>
          </div>
          <div className={s.content}>
            <div className={s.buttonIcon}>
              <button className={s.heart}>
                <svg
                  className={s.iconHeart}
                  onClick={() => checkFavorite()}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.7135 22.8567L23.182 35.3882C21.4246 37.1455 18.5753 37.1455 16.818 35.3882L4.28647 22.8567C-0.0526855 18.5175 -0.0526851 11.4823 4.28647 7.14317C8.62564 2.804 15.6608 2.804 20 7.14317C24.3391 2.804 31.3743 2.804 35.7135 7.14317C40.0526 11.4823 40.0526 18.5175 35.7135 22.8567Z"
                    fill={check ? "red" : "gray"}
                  />
                </svg>
              </button>
            </div>
            <article className={s.description}>
              <h3 className={s.title}>{item.strMeal}</h3>
              <p className={s.text}>{item.strArea} food</p>
            </article>
            <Link className={s.look} to={`/recipe/${item.idMeal}`}>
              <CustomButton text="Смотреть" className={s.btn}/>
            </Link>
          </div>
        </>
      ) : (
        <div className={s.skelet}>
          <div className={s.skeletContent}></div>
        </div>
      )}
    </div>
  );
};
