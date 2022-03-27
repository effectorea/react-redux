function onResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getCards() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    }).then(onResponse);
  }
}
export const api = new Api({
  url: "https://picsum.photos/v2/list",
  headers: {
    "Content-Type": "application/json",
  },
});
