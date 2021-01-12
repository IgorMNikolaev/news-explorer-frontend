import React from "react";
import './InfoTooltip.css';



function InfoTooltip({ isOpen, onClose, onEntrance }) {
  return (
    <>
      <section className={`info-Tooltip ${isOpen ? "info-Tooltip_opened" : ""}`}>
        <div className="info-Tooltip__container">
          <p className="info-Tooltip__infotip-text">Вы успешно зарегистрировались!</p>
          <button className="info-Tooltip__close-button" onClick={onClose}></button>
        </div>
      </section>
    </>
  );
}

export default InfoTooltip;
