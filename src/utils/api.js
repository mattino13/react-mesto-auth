class Api {
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

  getInitialCards() {
    return fetch(this._buildUrl('/cards'), this._options)
      .then(res => this._checkResponse(res));
  }

  deleteCard(cardId) {
    const options = {
      ...this._options,
      method: 'DELETE'};

    return fetch(this._buildUrl(`/cards/${cardId}`), options)
      .then(res => this._checkResponse(res));
  }

  createCard(name, link) {
    const options = {
      ...this._options,
      method: 'POST',
      body: JSON.stringify({name, link})};

    return fetch(this._buildUrl('/cards'), options)
      .then(res => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(this._buildUrl('/users/me'), this._options)
      .then(res => this._checkResponse(res));
  }

  setUserInfo(name, about) {
    const options = {
      ...this._options,
      method: 'PATCH', 
      body: JSON.stringify({name, about})};
    
    return fetch(this._buildUrl('/users/me'), options)
      .then(res => this._checkResponse(res));
  }

  setUserAvatar(link) {
    const options = {
      ...this._options,
      method: 'PATCH', 
      body: JSON.stringify({avatar: link})};
    
    return fetch(this._buildUrl('/users/me/avatar'), options)
      .then(res => this._checkResponse(res));
  }

  toggleLike(cardId, newLikeStatus) {
    const options = {
      ...this._options,
      method: newLikeStatus ? 'PUT' : 'DELETE'}; 

    return fetch(this._buildUrl(`/cards/${cardId}/likes`), options)
      .then(res => this._checkResponse(res));
  }

  _buildUrl(suffix) {
    return `${this._options.baseUrl}${suffix}`;
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '5bc5b7b3-6716-4f10-8378-7ab5f2c0643b',
    'Content-Type': 'application/json'
  }
});

export default api;