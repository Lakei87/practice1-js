import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29164784-c09cfa926a0283a5bc80e82cc';

export default class ApiService {
    constructor() {
        this.page = 1;
        this.category = 'places';
        this.perPage = 30;
        this.totalNum = 0;
        this.alreadyLoaded = 0;
    }

    async fetchImg() {
        const url = `${BASE_URL}?key=${API_KEY}&category=${this.category}&page=${this.page}&image_type=photo&per_page=${this.perPage}`;
        
        try {
            const response = await axios.get(url);
            const { totalHits, hits } = response.data;
            this.incrementPage();
            this.totalNum = totalHits;
            this.alreadyLoaded += hits.length;
            console.log(this.alreadyLoaded)
            console.log(this.totalNum)
            console.log(this.showLoadPersent())

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    resetPage() {
        this.page = 1;
    }

    incrementPage() {
        this.page += 1;
    }

    showLoadPersent() {
        return this.alreadyLoaded * 100 / this.totalNum;
    }

    resetPersentData() {
        this.alreadyLoaded = 0;
        this.totalNum = 0;
    }
}