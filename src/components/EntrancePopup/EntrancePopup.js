import React from "react";
import Popup from "../Popup/Popup";
import "./EntrancePopup.css";

function EntrancePopup({
  isOpen,
  onClose,
  isLoading,
  onAuth,
  authorize,
  message,
  ...rest
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authorize(email, password);
    setEmail("");
    setPassword("");
  };

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
      onSubmit={handleSubmit}
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
        <span className="entrance__input-error">{message}</span>
      </label>

      <label className="entrance__input-cover">
        Пароль
        <input
          type="password"
          name="Пароль"
          className="entrance__input"
          placeholder="Введите пароль"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="entrance__input-error">{message}</span>
      </label>
    </Popup>
  );
}

export default EntrancePopup;
