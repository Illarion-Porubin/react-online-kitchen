import React from "react";
import s from "./Search.module.scss";


export const Search:React.FC = () => {

  return (
    <div className={s.search}>
      <input
        className={s.input}
        type="text"
        placeholder="Search"
        autoFocus
      />
    </div>
  );
};
