import React from "react";
import s from "./Billboard.module.scss";
import { Search } from "../search/Search";

/////////////////////////////
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectRecipeData } from "../../redux/selectors";
import { useDebounce } from "../../hooks/useDebounce";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { fetchFindByName } from "../../redux/slices/recipe";
////////////////////////////

export const Billboard: React.FC = () => {
  const data = useCustomSelector(selectRecipeData);
  const dispatch = useCustomDispatch();
  const [search, setSearch] = React.useState<string>('');
  const debounce = useDebounce(search, 300);

  React.useEffect(() => {
    if (debounce) {
      dispatch(fetchFindByName(debounce))
    }
  }, [dispatch, debounce]);

  return (
    <>
      <div className={s.bg} style={ data.recipeList > 0 ? { backgroundColor: "transparent"} : { backgroundColor: "#000"}}></div>
      <div className={s.swiper}>     
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          slidesPerView={1}
          autoplay={true}
        >
          {data.recipeList.map((item, id: number) => {
            return (
              <SwiperSlide className={s.slider} key={id}>
                <div className={s.slider__bg}>
                  <img
                    className={s.slider__img}
                    src={item.strMealThumb}
                    alt="alt"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={s.content}>
          <blockquote
            className={s.quotes}
            cite="https://www.quoteikon.com/real-food-doesnt-have-ingredients-real-food-is-ingredients.html"
          >
            <p>Real Food Doesn't Have Ingredients, Real Food Is Ingredients</p>
            <cite className={s.author}>— Jamie Oliver</cite>
          </blockquote>
          <div className={s.sliderSearch}>
            <Search mainColor="white" search={search} setSearch={setSearch}/>
          </div>
        </div>
      </div>
    </>
  );
};
