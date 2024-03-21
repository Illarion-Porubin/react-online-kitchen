import React from "react";
import s from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";

interface Props {
  menuList: { value: string; link: string }[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  clasName?: string;
  favoriteCount: number;
}

export const MobileMenu: React.FC<Props> = ({
  menuList,
  active,
  clasName,
  favoriteCount,
  setActive,
}) => {


  return (
    <div
      className={
        active
          ? `${s.mainClasName} ${s.active} ${clasName} `
          : `${s.mainClasName} ${clasName}`
      }
      style={{ zIndex: active ? 10 : 9 }}
    >
      <nav className={s.menu} onClick={() => setActive(!active)}>
        <ul className={s.list}>
          {menuList.map((item, id: number) => (
            <li className={s.item} key={id}>
              {item.value === "favorite" && !favoriteCount ? (
                <Link
                  className={s.list}
                  onClick={() => window.alert("Добавьте рецепт.")}
                  to={""}
                >
                  favorite
                </Link>
              ) : (
                <Link className={s.list} to={item.link}>
                  {item.value === "favorite"
                    ? `${item.value} ${favoriteCount}`
                    : item.value}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
