import React from "react";
import s from "./Favorite.module.scss";
import { Header } from "../../components/header/Header";
import { Search } from "../../components/search/Search";
import { CustomButton } from "../../components/customButton/CustomButton";
import picture from "../../assets/jpg/ustsqw1468250014.jpg";
// import { Pagination } from "../../components/pagination/Pagination";

export const Favorite: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={s.search}>
          <Search mainColor="black" />
        </div>
        <div className={s.content}>
          <div className={s.item}>
            <img className={s.picture} src={picture} alt="picture" />
            <div className={s.textContent}>
              <p>Waffles</p>
              <p>American cuisine</p>
            </div>
            <div className={s.buttons}>
              <CustomButton text={"Смотреть"} />
              <CustomButton text={"Удалить"} />
            </div>
          </div>
        </div>
        {/* <Pagination/> */}
      </div>
    </>
  );
};
