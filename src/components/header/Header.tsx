import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { useCustomSelector } from "../../hooks/store";
import { selectFavoriteData } from "../../redux/selectors";

export const Header: React.FC = () => {
  const data = useCustomSelector(selectFavoriteData)

  return (
    <div className={s.header}>
      <div className={s.bg}></div>
      <div className="container">
        <div className={s.content}>
          <Link to="/">
            <img className={s.logo} src={logo} alt="logo" />
          </Link>
          <nav className={s.menu}>
            <ul className={s.list}>
              <li className={s.item}>
                <Link className={s.link} to="/">
                  home
                </Link>
              </li>
              <li className={s.item}>
                <Link className={s.link} to="/favorite">
                  favorite <span>{data.favoriteList.length}</span> 
                </Link>
              </li>
              <li className={s.item}>
                <Link to="/about" className={s.link}>
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
