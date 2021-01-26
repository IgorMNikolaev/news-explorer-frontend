import React from "react";
import Popup from "../Popup/Popup";
import "./AuthPopup.css";

function AuthPopup({
  isOpen,
  onClose,
  isLoading,
  onEntrance,
  register,
  message,
  ...rest
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, name);
  };

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
      redirectText="войти"
      onSubmit={handleSubmit}
    >
      <label className="auth__input-cover">
        Email
        <input
          type="email"
          name="Email"
          className="auth__input"
          placeholder="Введите свой email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <span className="auth__input-error">{message}</span>
      </label>
      <label className="auth__input-cover">
        Пароль
        <input
          type="password"
          name="Пароль"
          className="auth__input"
          placeholder="Введите пароль"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="auth__input-error">{message}</span>
      </label>
      <label className="auth__input-cover">
        Имя
        <input
          type="text"
          name="Имя"
          className="auth__input"
          placeholder="Введите своё имя"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="auth__input-error">{message}</span>
      </label>
    </Popup>
  );
}

export default AuthPopup;
