import React from 'react';

function ImagePopup({card, onClose}) {
 
  React.useEffect(() => {
    document.addEventListener('keyup', handleEscClose);
    
    return () => {
      document.removeEventListener('keyup', handleEscClose);
    };
  }); 
  
  function handleEscClose(evt) {
    if (card && evt.key === 'Escape') {
        onClose();
    }
  }

  function handleOutClick(evt) {
    if (!evt.target.closest('.popup__overlay')) { 
      onClose();
    }
  }
  
  return (
    <div className={`popup popup_image ${card && 'popup_opened'}`} onClick={handleOutClick}>
      <div className="popup__content popup__overlay">
        <img className="popup__image" src={card?.link} alt={card?.name}/>
        <p className="popup__subtitle">{card?.name}</p>
        <button type="button" className="popup__button-close popup__button-close_image" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;