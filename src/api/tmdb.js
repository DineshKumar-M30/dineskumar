import axios from 'axios';
import { getMockData } from './mockData';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Create simple object for URLs
export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const instance = axios.create({
    baseURL: BASE_URL,
});

// Interceptor to handle missing API key or simulate network
instance.interceptors.request.use(async (config) => {
    // If no API key or dummy key, return mock data
    if (!API_KEY || API_KEY.includes('YOUR_TMDB_API_KEY')) {
        console.warn("Using Mock Data (No API Key found)");

        // Return a promise that resolves with mock data to mimic network delay
        return Promise.reject({
            config,
            response: {
                status: 200,
                data: getMockData(config.url).data
            },
            isMock: true
        });
    }
    return config;
});

// Interceptor to handle the "error" caused by our specific mock rejection
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.isMock) {
            return Promise.resolve(error.response);
        }
        return Promise.reject(error);
    }
);

export default instance;
