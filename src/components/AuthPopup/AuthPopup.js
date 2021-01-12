import React from "react";
import Popup from "../Popup/Popup";
import './AuthPopup.css';

function AuthPopup({
  isOpen,
  onClose,
  isLoading,
  onEntrance,
  ...rest
}) {

  return (
    <Popup
      name="auth"
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      submitText="Зарегистрироваться"
      submitLoadText="Регистрация..."
      isLoading={isLoading}
      Link={onEntrance}
    >
      <div className="auth__input-cover">
        <input
          type="email"
          name="Email"
          className="auth__input"
          placeholder="Введите свой email"
          required
        />
        <span className="auth__input-error"></span>
      </div>
      <div className="auth__input-cover">
        <input
          type="passward"
          name="Пароль"
          className="auth__input"
          placeholder="Введите пароль"
          required
        />
        <span className="auth__input-error"></span>
      </div>
      <div className="auth__input-cover">
        <input
          type="text"
          name="Имя"
          className="auth__input"
          placeholder="Введите своё имя"
          required
        />
        <span className="auth__input-error"></span>
      </div>
    </Popup>
  );
}

export default AuthPopup;
