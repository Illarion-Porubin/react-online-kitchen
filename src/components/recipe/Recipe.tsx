import React from "react";
import s from "./Recipe.module.scss";
import heart from "../../assets/svg/heart.svg";
import trash from "../../assets/svg/trash.svg";
import { Link } from "react-router-dom";
import { CustomButton } from "../customButton/CustomButton";

// import arabita from "../../assets/jpg/ustsqw1468250014.jpg";

// interface Meal {
//   strMealThumb: string
// }

interface Props {
  item: any;
}

export const Recipe: React.FC<Props> = ({ item }) => {
  return (
    <div className={s.recipe}>
      <img className={s.picture} src={item.strMealThumb} alt="picture" />
      <div className={s.content}>
          <div className={s.buttonIcons}>
            <button className={s.heart}>
              <img src={heart} alt="heart" />
            </button>
            <button className={s.trash}>
              <img src={trash} alt="trash" />
            </button>
          </div>
        <article className={s.description}>
          <h3 className={s.title}>{item.strMeal}</h3>
          <p className={s.title}>{item.strArea} food</p>
          <p className={s.title}>{item.strCategory}</p>
          {/* <a className={s.text} href={item.strYoutube}>YouTube</a> */}
          <Link to={`/recipe/${item.idMeal}`}>
            <CustomButton text="Смотреть"/>
          </Link>
        </article>
      </div>
    </div>
  );
};
