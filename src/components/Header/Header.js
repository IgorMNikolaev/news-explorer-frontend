import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

import cross from "../../images/cross.svg";
import menuBlack from "../../images/menu-black.svg";
import menuWhite from "../../images/menu-white.svg";

function Header({ theme, loggedIn, onAuth }) {
  const [menuActiv, setMenuActiv] = React.useState(false);

  const className = `header ${theme === "_white" ? "header_white" : ""} ${
    menuActiv ? "header_menu-activ" : ""
  }`;

  return (
    <header className={className}>
      <div className="header__border-mobile">
        <div className="header__menu">
          <p className="header__logo">NewsExplorer</p>
          <img
            onClick={() => setMenuActiv(!menuActiv)}
            className="header__image"
            src={
              menuActiv
                ? cross
                : `${theme === "_white" ? menuBlack : menuWhite}`
            }
            alt="закрыть меню"
          ></img>
        </div>
      </div>
      <Navigation
        theme={theme}
        loggedIn={loggedIn}
        onAuth={onAuth}
        menuActiv={menuActiv}
      />
    </header>
  );
}

export default Header;
