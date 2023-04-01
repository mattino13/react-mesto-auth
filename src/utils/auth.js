class Auth {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject();
    } 
  }

  // регистрация
  signup(email, password) {
    const options = {
      ...this._options,
      method: 'POST',
      body: JSON.stringify({
        password: password,
        email: email })};

    return fetch(this._buildUrl('/signup'), options)
      .then(res => this._checkResponse(res));
  }

  // авторизация
  signin(email, password) {
    const options = {
      ...this._options,
      method: 'POST',
      body: JSON.stringify({
        password: password,
        email: email })};

    return fetch(this._buildUrl('/signin'), options)
      .then(res => this._checkResponse(res));
  }

  //проверка токена
  checkToken(token) {
    const options = {
      ...this._options,
      };

    options.headers = {
      ...options.headers,
      Authorization : `Bearer ${token}`
    };

    return fetch(this._buildUrl('/users/me'), options)
      .then(res => this._checkResponse(res));
  }

  _buildUrl(suffix) {
    return `${this._options.baseUrl}${suffix}`;
  }
}

const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default auth;