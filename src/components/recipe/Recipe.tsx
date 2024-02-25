import React from "react";
import s from "./Recipe.module.scss";
import arabita from "../../assets/jpg/ustsqw1468250014.jpg";

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
        <article className={s.description}>
          <h3 className={s.title}>{`Arabita`}</h3>
          <p className={s.text}>Краткое описание</p>
          <button className={s.btn}>Смотреть</button>
        </article>
      </div>
    </div>
  );
};
