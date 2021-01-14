import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import AuthPopup from "../AuthPopup/AuthPopup";
import EntrancePopup from "../EntrancePopup/EntrancePopup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isAuthPopupOpen, setAuthPopupOpen] = React.useState(false);
  const [isEntrancePopupOpen, setEntrancePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  function handleAuthPopupClick() {
    setAuthPopupOpen(true);
  }

  function handleEntrancePopupClick() {
    setEntrancePopupOpen(true);
  }

  function infoTooltipOpen() {
    setInfoTooltipOpen(true);
  }

  function closeAllPopups() {
    setAuthPopupOpen(false);
    setEntrancePopupOpen(false);
    setInfoTooltipOpen(false);
  }

  return (
    <section className="app">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={loggedIn} onAuth={handleAuthPopupClick} />
        </Route>
        <Route exact path="/saved-news">
          <SavedNews loggedIn={loggedIn} />
        </Route>
      </Switch>
      <Footer />
      <AuthPopup
        isOpen={isAuthPopupOpen}
        onClose={closeAllPopups}
        isLoading={isLoading}
        onEntrance={handleEntrancePopupClick}
      />
      <EntrancePopup
        isOpen={isEntrancePopupOpen}
        onClose={closeAllPopups}
        isLoading={isLoading}
        onAuth={handleAuthPopupClick}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onEntrance={handleEntrancePopupClick}
      />
    </section>
  );
}

export default App;
