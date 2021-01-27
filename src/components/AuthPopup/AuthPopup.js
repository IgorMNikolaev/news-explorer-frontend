import React from "react";
import Popup from "../Popup/Popup";
import "./AuthPopup.css";
import { useFormik } from "formik";

function AuthPopup({
  isOpen,
  onClose,
  isLoading,
  onEntrance,
  register,
  message,
  ...rest
}) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Введите почту!";
      } else if (!/^[^@]+@[^@.]+\.[^@]+$/.test(values.email)) {
        errors.email = "Неверный формат почты!";
      }
      if (!values.password) {
        errors.password = "Нужен пароль!";
      }
      if (!values.name) {
        errors.name = "Введите своё имя!";
      } else if (values.name.length < 3) {
        errors.name = "Введи имя по-длиннее!";
      } else if (values.name.length > 30) {
        errors.name = "Cлишком длинное имя!";
      }
      return errors;
    },
  });

  const closeAuth = () => {
    onClose();
    formik.handleReset()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formik.values.email, formik.values.password, formik.values.name);
    formik.handleReset();
  };

  return (
    <Popup
      name="auth"
      title="Регистрация"
      isOpen={isOpen}
      onClose={closeAuth}
      submitText="Зарегистрироваться"
      submitLoadText="Регистрация..."
      isLoading={isLoading}
      Link={onEntrance}
      redirectText="войти"
      onSubmit={handleSubmit}
      formikValid={formik.isValid}
      formikDirty={formik.dirty}
      message={message}
    >
      <label className="auth__input-cover">
        Email
        <input
          type="email"
          name="email"
          className="auth__input"
          placeholder="Введите свой email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="auth__input-error">{formik.errors.email}</span>
        )}
      </label>
      <label className="auth__input-cover">
        Пароль
        <input
          type="password"
          name="password"
          className="auth__input"
          placeholder="Введите пароль"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <span className="auth__input-error">{formik.errors.password}</span>
        )}
      </label>
      <label className="auth__input-cover">
        Имя
        <input
          type="text"
          name="name"
          className="auth__input"
          placeholder="Введите своё имя"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <span className="auth__input-error">{formik.errors.name}</span>
        )}
      </label>
    </Popup>
  );
}

export default AuthPopup;
