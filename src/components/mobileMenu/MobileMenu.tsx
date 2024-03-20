import React from "react";
import s from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";

interface Props {
  menuList: { value: string; link: string }[];
  active: boolean;
  clasName?: string;
}

export const MobileMenu: React.FC<Props> = ({ menuList, active, clasName }) => {

  return (
    <div className={active ? `${s.mainClasName} ${s.active} ${clasName} ` : `${s.mainClasName} ${clasName}`} style={{zIndex: active ? 10 : 9}}>
      <nav className={s.menu}>
        <ul className={s.list}>
          {menuList.map((item, id: number) => (
            <li className={s.item} key={id}>
              <Link className={s.link} to={item.link}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}