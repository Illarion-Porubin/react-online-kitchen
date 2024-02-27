import React from "react";
import s from "./Search.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindByLetter, fetchFindByName } from "../../redux/slices/recipe";
import { useDebounce } from "../../hooks/useDebounce";

export const Search: React.FC = () => {
  const dispatch = useCustomDispatch();
  const [search, setSearch] = React.useState<string>("");
  const [searchOption, setSearchOption] = React.useState<boolean>(false);
  const debounce = useDebounce(search, 400);

  React.useEffect(() => {  
    if (debounce) {
      if(searchOption){
        dispatch(fetchFindByLetter(debounce))
      }
      else{
        console.log(debounce, 'debounce');
        dispatch(fetchFindByName(debounce))
      }
    }
  }, [dispatch, debounce, searchOption]);

  console.log(searchOption);

  return (
    <div className={s.search}>
      <button className={s.searchBtn} onClick={() => setSearchOption(!searchOption)}>{searchOption ? 'By latter' : "By name"}</button>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className={s.input}
        type="text"
        placeholder="Search"
        autoFocus
        maxLength={searchOption ? 1 : undefined}
        value={search}
      />
    </div>
  );
};
