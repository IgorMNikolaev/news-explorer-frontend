import React from "react";
import Popup from "../Popup/Popup";
import "./EntrancePopup.css";

function EntrancePopup({ isOpen, onClose, isLoading, onAuth, ...rest }) {
  const [email, setEmail] = React.useState("");
  const [passward, setPassward] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswardChange(e) {
    setPassward(e.target.value);
  }

  return (
    <Popup
      name="entrance"
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      submitText="Войти"
      submitLoadText="Вход..."
      isLoading={isLoading}
      Link={onAuth}
      redirectText="Зарегистрироваться"
    >
      <label className="entrance__input-cover">
        Email
        <input
          type="email"
          name="Email"
          className="entrance__input"
          placeholder="Введите свой email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <span className="entrance__input-error"></span>
      </label>

      <label className="entrance__input-cover">
        Пароль
        <input
          type="password"
          name="Пароль"
          className="entrance__input"
          placeholder="Введите пароль"
          required
          value={passward}
          onChange={handlePasswardChange}
        />
        <span className="entrance__input-error"></span>
      </label>
    </Popup>
  );
}

export default EntrancePopup;
