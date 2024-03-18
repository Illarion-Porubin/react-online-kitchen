import React from "react";
import s from "./RecipeInfo.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router-dom";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFindRecipeById } from "../../redux/slices/recipeSlice";
import { RecipeType } from "../../types";

export const RecipeInfo: React.FC = React.memo(() => {
  const dispatch = useCustomDispatch()
  const [recipe, setRecipe] = React.useState<RecipeType | null >(null);
  const { id } = useParams();


  React.useEffect(() => {
    if(id){
      dispatch(fetchFindRecipeById(id)).then(data => data.payload ? setRecipe(data.payload[0]) : null);
    }
  }, []);

  React.useEffect(() => {
    console.log('RecipeInfo');
  },[])

  if (recipe)
    return (
      <>
        <div
          className={s.billboard}
          style={{ backgroundImage: `url(${recipe.strMealThumb})`}}
        >
          <div className={s.bg}></div>
          <div className={s.billboardContent}>
            <h1 className={s.billboardTitle}>{recipe.strMeal}</h1>
            <a className={s.ytBtn}href={recipe.strYoutube || "/#"} target="blank">YouTube  
              <svg className={s.ytIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.78 11.5825C36.5797 10.8438 36.1896 10.1703 35.6484 9.6291C35.1072 9.08788 34.4337 8.69775 33.695 8.4975C30.955 7.775 20 7.775 20 7.775C20 7.775 9.045 7.775 6.305 8.4975C4.805 8.9 3.625 10.0825 3.22 11.5825C2.5 14.32 2.5 20 2.5 20C2.5 20 2.5 25.7075 3.22 28.4175C3.625 29.9175 4.8075 31.1 6.305 31.5025C9.045 32.225 20 32.225 20 32.225C20 32.225 30.955 32.225 33.695 31.5025C34.4337 31.3022 35.1072 30.9121 35.6484 30.3709C36.1896 29.8297 36.5797 29.1562 36.78 28.4175C37.5 25.68 37.5 20 37.5 20C37.5 20 37.5 14.32 36.78 11.5825Z" fill="#FF0000"/>
              <path d="M16.4824 25.275L25.5924 20.03L16.4824 14.755V25.275Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
        <div className={s.recipe}>
          <div className="container">
            <div className={s.textContent}>
              <h3 className={s.recipeTitle}>Recipe</h3>
              <Markdown
                remarkPlugins={[remarkGfm]}
                children={recipe.strInstructions}
              />
            </div>
          </div>
        </div>
      </>
    );
}) 