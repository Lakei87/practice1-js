import appendImg from "./renderImg";
import ApiService from "./apiService";
import { throttle } from "lodash";

const refs = {
    navList: document.querySelector('.nav__list'),
    gallery: document.querySelector('.gallery'),
    moveUpBtn: document.querySelector('.moveUpBtn'),
}
const apiService = new ApiService();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

refs.navList.addEventListener('click', onClickNav);
refs.moveUpBtn.addEventListener('click', onBtnClick);
window.addEventListener('scroll', throttle(onLoad, 500));

apiService.fetchImg()
.then(async data => {
    const content = await appendImg(data.hits);
    refs.gallery.insertAdjacentHTML("afterbegin", content);
    lookAfterPersent();
    })

function onClickNav(e) {
    if (e.target.nodeName === 'UL') return;
    refs.gallery.innerHTML = '';
    apiService.resetPage();
    apiService.resetPersentData();

    apiService.category = e.target.textContent;
    apiService.fetchImg()
        .then(data => {
            const content = appendImg(data.hits);
            refs.gallery.insertAdjacentHTML('afterbegin', content);
            lookAfterPersent();
        })
}

function onLoad() {
    window.scrollY > 5000 ? refs.moveUpBtn.classList.remove("is-hidden") : refs.moveUpBtn.classList.add("is-hidden");
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        apiService.fetchImg()
            .then(data => {
                console.log("onLoad")
                const content = appendImg(data.hits);
                refs.gallery.insertAdjacentHTML('beforeend', content);
                smoothScroll();
                lookAfterPersent();
            })
    }
}


function smoothScroll() {
    const { height } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();

    window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
    })
}

function lookAfterPersent() {
    const persent = apiService.showLoadPersent();
    refs.moveUpBtn.textContent = persent + "%"; 
}

function onBtnClick() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
