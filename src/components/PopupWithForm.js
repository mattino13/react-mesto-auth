import React from 'react';

function PopupWithForm({ title, name, children, isOpen, isSaving, saveButtonText, onClose, onSubmit}) {
  
  function handleEscClose(evt) {
    if (isOpen && evt.key === 'Escape') {
        onClose();
    }
  }

  function handleOutClick(evt) {
    if (!evt.target.closest('.popup__overlay')) { 
      onClose();
    }
  }
  
  React.useEffect(() => {
    document.addEventListener('keyup', handleEscClose);
    
    return () => {
      document.removeEventListener('keyup', handleEscClose);
    };
  }); 

  const isOpenedClass = isOpen? 'popup_opened' : '';

  return (
    
    <div className={`popup popup_${name} ${isOpenedClass}`} onClick={handleOutClick}>

      <div className="popup__container popup__overlay">
        <form className={`popup__form popup__form_${name}`} name={name} noValidate onSubmit={onSubmit} >
          <h3 className="popup__tittle">{title}</h3>

          {children}

          <button type="submit" className={`popup__button-save popup__button-save_${name}`}>{isSaving ? 'Сохранение...' : saveButtonText}</button>
          
        </form>
        <button type="button" className={`popup__button-close popup__button-close_${name}`} aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;