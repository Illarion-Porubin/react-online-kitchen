import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";

export const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <div className={s.bg}></div>
      <div className="container">
        <div className={s.content}>
          <img className={s.logo} src={String(logo)} alt="logo" />
          <nav className={s.menu}>
            <ul className={s.list}>
              <li className={s.item}>
                <a className={s.link} href="#">
                  home
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#">
                  themealdb
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href="#">
                  about
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
