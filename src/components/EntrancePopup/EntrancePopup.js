import React from "react";
import Popup from "../Popup/Popup";
import './EntrancePopup.css';

function EntrancePopup({
  isOpen,
  onClose,
  isLoading,
  ...rest
}) {

  return (
    <Popup
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      submitText="Сохранить"
      submitLoadText="Сохранение..."
      isLoading={isLoading}
    >
      <div className="entrance__input-cover">
        <input
          type="url"
          name="image"
          className="entrance__input"
          placeholder="Ссылка на новый аватар"
          required
        />
        <span className="entrance__input-error"></span>
      </div>
    </Popup>
  );
}

export default EntrancePopup;
