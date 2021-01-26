import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  loggedIn,
  handleEntrancePopupClick,
  ...props
}) => {
  const openPopupOnRedirict = () => {
    // handleEntrancePopupClick()
    return <Redirect to="/" />;
  };

  return (
    <Route>
      {() =>
        loggedIn ? (
          <Component {...props} loggedIn={loggedIn} />
        ) : (
          openPopupOnRedirict()
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
