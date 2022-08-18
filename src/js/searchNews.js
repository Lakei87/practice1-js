import appendNews from "./renderNews";
import NewsApiService from "./newsApiService";

const refs = {
    navList: document.querySelector('.nav__list'),
    newsList: document.querySelector('.news__list')

}
const newsApiService = new NewsApiService();

newsApiService.fetchNews()
    .then(data => {
        const content = appendNews(data.articles);
        refs.newsList.insertAdjacentHTML('beforeEnd', content);

    })