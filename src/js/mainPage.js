// import appendNews from "./renderNews";
// import NewsApiService from "./newsApiService";
// import Notiflix from "notiflix";

// const refs = {
//     newsList: document.querySelector('.news__list'),
// }
// const newsApiService = new NewsApiService();

// Notiflix.Loading.dots('Loading ...');
// refs.newsList.innerHTML = '';
// newsApiService.resetPage();

// newsApiService.fetchNews()
//     .then(data => {
//     console.log("MainPage")
//     const content = appendNews(data.articles);
//     refs.newsList.insertAdjacentHTML('beforeend', content);
//     Notiflix.Loading.remove(500);
//     setTimeout(() => {
//         window.scrollTo(0, 0);
//     }, 1000)
// })