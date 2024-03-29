import React from "react";
import s from "./BurgerMenu.module.scss";

interface Props {
  setActive: (value: boolean) => void,
  active: boolean,
}

export const BurgerMenu: React.FC<Props> = ({setActive, active}) => {


  return (
    <>
      <button className={active ? `${s.menu} ${s.active}` : `${s.menu}`}  onClick={() => setActive(!active)}>
        <span className={s.menu__burger_line_first}></span>
        <span className={s.menu__burger_line_second}></span>
        <span className={s.menu__burger_line_last}></span>
      </button>
    </>
  );
}
