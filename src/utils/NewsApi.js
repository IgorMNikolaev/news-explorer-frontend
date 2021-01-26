export default class NewsApi {
  constructor({ apiKey, from, to, getHeaders }) {
    this.apiKey = apiKey;
    this.from = from;
    this.to = to;
    this.getHeader = getHeaders;
  }

  getArticle(keyWord) {
    console.log(keyWord);
    return fetch(
      `https://newsapi.org/v2/everything?q=${keyWord}&from=${this.from}&to=${this.to}&pageSize=100&apiKey=${this.apiKey}`,
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }
}
//
