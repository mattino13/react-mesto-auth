import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({ isOpen, isSaving, onClose, onUpdateUser }) {
  
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]); 

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm
      title="Редактировать профиль" 
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      saveButtonText="Сохранить"
      isSaving={isSaving}>
      
      <input 
        value={name ?? ''} onChange={handleChangeName}
        id='name' className='popup__item popup__item_input_name' type='text' name='name' 
        minLength='2' maxLength='40' required placeholder='Имя'/>
      <span id='name-error' className='popup__item-normal'></span>

      <input 
        value={description ?? ''} onChange={handleChangeDescription}
        id='job' className='popup__item popup__item_input_job' type='text' name='job' 
        minLength='2' maxLength='200' required placeholder='О себе'/>
      <span id='job-error' className='popup__item-normal'></span>
          
    </PopupWithForm>
  )
}

export default EditProfilePopup;