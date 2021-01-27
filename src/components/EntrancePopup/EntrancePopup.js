import React from "react";
import Popup from "../Popup/Popup";
import "./EntrancePopup.css";
import { useFormik } from "formik";

function EntrancePopup({
  isOpen,
  onClose,
  isLoading,
  onAuth,
  authorize,
  message,
  ...rest
}) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
      return errors;
    },
  });

  const closeEntrance = () => {
    onClose();
    formik.handleReset()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authorize(formik.values.email, formik.values.password);
    formik.handleReset()
  };

  return (
    <Popup
      name="entrance"
      title="Вход"
      isOpen={isOpen}
      onClose={closeEntrance}
      submitText="Войти"
      submitLoadText="Вход..."
      isLoading={isLoading}
      Link={onAuth}
      redirectText="Зарегистрироваться"
      onSubmit={handleSubmit}
      formikValid={formik.isValid}
      formikDirty={formik.dirty}
      message={message}
    >
      <label className="entrance__input-cover">
        Email
        <input
          type="email"
          name="email"
          className="entrance__input"
          placeholder="Введите свой email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="entrance__input-error">{formik.errors.email}</span>
        )}
      </label>

      <label className="entrance__input-cover">
        Пароль
        <input
          type="password"
          name="password"
          className="entrance__input"
          placeholder="Введите пароль"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <span className="entrance__input-error">
            {formik.errors.password}
          </span>
        )}
      </label>
    </Popup>
  );
}

export default EntrancePopup;
