import React from "react";
import s from "./Search.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindByLetter, fetchFindByName, recipeSlice } from "../../redux/slices/recipe";
import { useDebounce } from "../../hooks/useDebounce";

export const Search: React.FC = () => {
  const dispatch = useCustomDispatch();
  const [search, setSearch] = React.useState<string>("");
  const [searchOption, setSearchOption] = React.useState<boolean>(false);
  const debounce = useDebounce(search, 300);

  const clearSearch = () => {
    setSearch('');
    setTimeout(() => {
      setSearchOption(!searchOption)
    }, 300);
  }

  React.useEffect(() => {  
    if (debounce) {
      if(searchOption){
        dispatch(fetchFindByLetter(debounce))
      }
      else{
        dispatch(fetchFindByName(debounce))
      }
    }
    else{
      dispatch(recipeSlice.actions.clearState())
    }
  }, [dispatch, debounce, searchOption]);

  return (
    <div className={s.search}>
      <button className={s.searchBtn} onClick={() => clearSearch()}>By <span className={s.searchAttribute}>{searchOption ? ' latter' : "name"}</span></button>
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
