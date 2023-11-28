import {API_KEY} from '../Api/Api'


export const Originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
export const TrendingNow = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
 export const  ComedyMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const  TVshow = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const documenteries  = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const TvShows = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`