import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import logoMini from "../../assets/svg/logo-mini.svg";
import { Link } from "react-router-dom";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectFavoriteData, selectRecipeData } from "../../redux/selectors";
import { recipeSlice } from "../../redux/slices/recipeSlice";

export const Header: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectRecipeData);
  const favoriteData = useCustomSelector(selectFavoriteData);

  const menuList: { value: string; link: string }[] = [
    { value: "home", link: "/" },
    { value: "favorite", link: "/favorite" },
    { value: "about", link: "/about" },
  ]

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.content}>
          <Link to="/" className={s.mainLogo}>
            <img className={s.logo} src={logo} alt="logo" />
            <img className={s.mobileLogo} src={logoMini} alt="logo" />
          </Link>
          <div className={s.headerContetn}>
            <nav className={s.menu}>
              <ul className={s.list}>
                {menuList.map((item, id: number) => (
                  <li
                    className={s.item}
                    key={id}
                    onClick={() =>
                      dispatch(recipeSlice.actions.addCurrenPage(id))
                    }
                  >
                    {!favoriteData.favoriteList.length &&
                    item.value === "favorite" ? (
                      <Link
                        onClick={() => window.alert("Добавьте рецепт.")}
                        className={
                          data.currentPage === id
                            ? `${s.link} ${s.active}`
                            : s.link
                        }
                        to={""}
                      >
                        {`${item.value} ${favoriteData.favoriteList.length}`}
                      </Link>
                    ) : (
                      <Link
                        className={
                          data.currentPage === id
                            ? `${s.link} ${s.active}`
                            : s.link
                        }
                        to={item.link}
                      >
                        {item.value === "favorite"
                          ? `${item.value} ${favoriteData.favoriteList.length}`
                          : item.value}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <MobileMenu
              menuList={menuList}
              active={active}
              setActive={setActive}
              clasName={s.mobMenu}
              favoriteCount={favoriteData.favoriteList.length}
            />
            <BurgerMenu active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
}