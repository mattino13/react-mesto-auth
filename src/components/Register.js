import React from 'react';


function Register({onRegister}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    if (email && password) {
      onRegister({
        email: email,
        password: password
      });
    }
  }

  return (
    <div className="popup popup_auth">
      
        <form className="popup__form popup__form_auth" onSubmit={handleSubmit}>
          <h3 className="popup__tittle popup__tittle_auth">Регистрация</h3>

          <input className="popup__item popup__item_auth" placeholder="Email" onChange={handleChangeEmail} />
          <input className="popup__item popup__item_auth" placeholder="Пароль" type="password" onChange={handleChangePassword}/>

          <button type="submit" className="popup__button-save popup__button-save_auth">Зарегистрироваться</button>

          <p className="popup__subtitle popup__subtitle_auth">Уже зарегистрированы? 
          <a href="/sign-in" className="popup__subtitle popup__subtitle_auth"> Войти</a></p>
          
        </form>
      
    </div>
  )
}

export default Register;