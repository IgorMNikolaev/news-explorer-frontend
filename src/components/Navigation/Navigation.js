import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logout from "../../images/logout.svg";
import logoutWhite from "../../images/logOutWhiteTheme.svg";

function Navigation({ theme, loggedIn, onAuth, menuActiv }) {
  return (
    <nav
      className={`${
        menuActiv ? "navigation navigation_menu-activ" : "navigation"
      }`}
    >
      <NavLink
        exact
        to="/"
        activeClassName={`navigation__link-active${theme}`}
        className={`navigation__link ${
          theme === "_white" ? "navigation__link_white" : ""
        }${menuActiv ? "navigation__link_menu-activ" : ""}`}
      >
        Главная
      </NavLink>
      <div
        className={`navigation__link ${
          theme === "_white" ? "navigation__link_white" : ""
        } ${
          loggedIn ? "navigation__link_invisible" : ""
        } navigation__button_last`}
      >
        <button
          onClick={onAuth}
          className={`naviganion__button ${
            theme === "_white" ? "navigation__link_white" : ""
          }${menuActiv ? "navigation__link_menu-activ" : ""}`}
        >
          <p className="navigation__button-text">Авторизоваться</p>
        </button>
      </div>
      <NavLink
        to="/saved-news"
        activeClassName={`navigation__link-active${theme}`}
        className={`navigation__link ${
          theme === "_white" ? "navigation__link_white" : ""
        } ${loggedIn ? "" : "navigation__link_invisible"} ${
          menuActiv ? "navigation__link_menu-activ" : ""
        }`}
      >
        Сохранённые статьи
      </NavLink>
      <div
        className={`navigation__link ${
          theme === "_white" ? "navigation__link_white" : ""
        } ${
          loggedIn ? "" : "navigation__link_invisible"
        } navigation__button_last`}
      >
        <button
          className={`naviganion__button ${
            theme === "_white" ? "naviganion__button_white" : ""
          }${menuActiv ? "navigation__link_menu-activ" : ""}`}
        >
          <p className="navigation__button-text">Имя</p>
          <img
            className="navigation__button-image"
            src={theme !== "_white" || menuActiv ? logout : logoutWhite}
            alt="выход"
          />
        </button>
      </div>
      <div
        className={`navigation__cover ${
          menuActiv ? "navigation__cover_activ" : ""
        }`}
      ></div>
    </nav>
  );
}

export default Navigation;
