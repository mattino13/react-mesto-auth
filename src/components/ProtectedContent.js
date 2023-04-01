import React from 'react';
import Footer from './Footer.js';
import Main from './Main.js';

function ProtectedContent({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards}) {
  return (
    <>
      <Main 
        onEditAvatar={onEditAvatar}
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}
        cards={cards}
      />

      <Footer />
    </>
  )
}

export default ProtectedContent;