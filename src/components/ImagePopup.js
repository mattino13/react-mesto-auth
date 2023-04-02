import React from 'react';

function ImagePopup({card, onClose}) {
 
  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    if (!(card === null)) {
      document.addEventListener('keyup', handleEscClose);
      
      return () => {
        document.removeEventListener('keyup', handleEscClose);
      };
    }
  }, [!(card === null)]); 

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