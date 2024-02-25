import React from "react";
import s from "./Search.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindByLetter } from "../../redux/slices/recipe";


export const Search: React.FC = () => {
  const dispatch = useCustomDispatch();
  const [search, setSearch] = React.useState<string>("pasta");




  return (
    <div className={s.search}>
      <button onClick={() => dispatch(fetchFindByLetter(search))}>test</button>
      <input 
        onChange={(e) => setSearch(e.target.value)}
        className={s.input}
        type="text"
        placeholder="Search"
        autoFocus
        value={search}
      />
    </div>
  );
};
