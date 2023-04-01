import React from 'react';
import imgFail from '../images/popup-fail.svg';
import imgSuccess from '../images/popup-success.svg';


function InfoTooltip({ isSuccess, isOpen, onClose }) {
  
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
    <div className={`popup popup_top ${isOpenedClass}`} onClick={handleOutClick} >
      <div className="popup__content popup__overlay">
        <div className="popup__infotooltip">
          <img className="popup__infoimage" src={isSuccess ? imgSuccess : imgFail} alt={isSuccess ? 'Успешно' : 'Ошибка'} />
          <h3 className="popup__tittle popup__tittle_info">{isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h3>
        </div>
        <button type="button" className="popup__button-close popup__button-close_image" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
    
  )
}

export default InfoTooltip;