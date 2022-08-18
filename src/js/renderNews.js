import NewsApiService from "./newsApiService";

const newsApiService = new NewsApiService()

function createOneNews(oneNews) {
    const { author, description, title, url, urlToImage } = oneNews;
    return`<li class="news__item">
  <a class="news__link" href="${url}"><img class="news__image" src="${urlToImage}" alt="" /></a>
  <a class="news__link" href="${url}"><h2 class="news__title">${title}</h2></a>
  <p class="news__desc">${description}</p>
  <p class="news__author">${author}</p>
</li>`
}

function generateNews(news) {
    return news.reduce((acc, el) => {
        return acc + createOneNews(el);
    }, '')
}

export default function appendNews(data) {
    console.log(data)
    const articlesArr = generateNews(data);
    return articlesArr;
}

