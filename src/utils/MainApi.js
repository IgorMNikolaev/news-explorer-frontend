import { getToken } from "./token";

export default class MainApi {
  constructor({ baseUrl, getHeaders }) {
    this.baseUrl = baseUrl;
    this.getHeader = getHeaders;
  }

  getArticles() {
    const token = getToken();
    return fetch(`${this.baseUrl}/articles`, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  getProfileInfo() {
    const token = getToken();

    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      authorization: `Bearer ${token}`,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  postNewArticle(keyWord, title, text, date, source, link, image) {
    const token = getToken();
    return fetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      authorization: `Bearer ${token}`,
      body: JSON.stringify({
        keyWord: keyWord,
        title: title,
        text: text,
        date: date,
        source: source,
        link: link,
        image: image,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  deleteArticle(id) {
    const token = getToken();
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      authorization: `Bearer ${token}`,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }
}
