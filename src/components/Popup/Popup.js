import React from "react";
import './Popup.css';

function Popup({
  name,
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  submitText,
  submitLoadText,
  isLoading,
  Link,
  ...rest
}) {

  const handleLink = () => {onClose(); Link()};

  return (
    <>
      <section
        className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}
      >
        <div className="popup__container">
          <h3 className="popup__title">{title}</h3>
          <form
            onSubmit={onSubmit}
            className={`popup__form popup__${name}-form`}
            noValidate
          >
            {children}
            <button type="submit" className="popup__submit-button">
              {isLoading ? submitLoadText : submitText}
            </button>
          </form>
          <button className="popup__close-button" onClick={onClose}></button>
          <p className="auth__redirect">или <button onClick={handleLink} className="auth__button">войти</button></p>
        </div>

      </section>
    </>
  );
}

export default Popup;
