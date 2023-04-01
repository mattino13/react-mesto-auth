import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({isOpen, isSaving, onClose, onAddPlace}) {
  
  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setPlace('');
    setLink('');
  }, [isOpen]); 

  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      place,
      link
    });

  }

  return(
    <PopupWithForm
          title="Новое место" 
          name="place"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          saveButtonText="Сохранить"
          isSaving={isSaving}>
        
          <input value={place} onChange={handleChangePlace} id="place" className="popup__item popup__item_input_place" type="text" name="place" 
                minLength="2" maxLength="30" required placeholder="Название"/>
          <span id="place-error" className="popup__item-normal"></span>

          <input value={link} onChange={handleChangeLink} id="link" className="popup__item popup__item_input_link" type="url" name="link" 
                minLength="2" required placeholder="Ссылка на картинку"/>
          <span id="link-error" className="popup__item-normal"></span>
          
    </PopupWithForm>
  )
}

export default AddPlacePopup;