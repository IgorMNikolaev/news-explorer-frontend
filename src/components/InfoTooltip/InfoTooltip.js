import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, onEntrance }) {
  const handleLink = () => {
    onClose();
    onEntrance();
  };

  return (
      <section
        className={`info-tooltip ${isOpen ? "info-tooltip_opened" : ""}`}
      >
        <div className="info-tooltip__container">
          <p className="info-tooltip__infotip-text">
            Пользователь успешно зарегистрирован!
          </p>
          <button onClick={handleLink} className="info-tooltip__button">
            Войти
          </button>
          <button
            className="info-tooltip__close-button"
            onClick={onClose}
          ></button>
        </div>
      </section>
  );
}

export default InfoTooltip;
