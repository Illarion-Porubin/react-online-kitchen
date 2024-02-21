import React from "react";
import s from "./Billboard.module.scss";
import { Search } from "../search/Search";

export const Billboard: React.FC = () => {
  return (
    <>
      <div className={s.billboard}>
        <div className={s.bg}></div>
        <div className={s.content}>
          <blockquote className={s.quotes} cite="http://developer.mozilla.org">
            <p>Real Food Doesn't Have Ingredients, Real Food Is Ingredients</p>
            <cite className={s.author}>— Jamie Oliver</cite>
          </blockquote>
          <Search />
        </div>
      </div>
    </>
  );
};
