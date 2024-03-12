import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import logoMini from "../../assets/svg/logo-mini.svg";
import { Link } from "react-router-dom";
import { useResizeDetector } from "react-resize-detector";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu";

export const Header: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);

  const { width, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: "debounce",
    refreshRate: 30,
    skipOnMount: true,
  });

  const checkWidth = !width ? window.screen.width : width;

  const menuList: { value: string; link: string }[] = [
    { value: "home", link: "/" },
    { value: "favorite", link: "/favorite" },
    { value: "about", link: "/about" },
  ];

  return (
    <div className={s.header} ref={ref}>
      <div className={s.bg}></div>
      <div className="container">
        <div className={s.content}>
          <Link to="/">
            <img
              className={s.logo}
              src={checkWidth > 720 ? logo : logoMini}
              alt="logo"
            />
          </Link>
          <div className={s.headerContetn}>
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
            <MobileMenu
              menuList={menuList}
              active={active}
              clasName={s.mobMenu}
            />
            <BurgerMenu active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
};
