import axios from "axios";

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = '57990358696a485d8f4168d83025fc69';

export default class NewsApiService {
    constructor() {
    }

    async fetchNews(category) {
        const url = `${BASE_URL}top-headlines?country=us&apiKey=${API_KEY}`;
        
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}