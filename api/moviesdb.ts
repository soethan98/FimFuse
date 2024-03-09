import { apiKey } from "../constants/constants";
import axios from "axios";
import { ApiCallResponse, Movie, MovieResponse } from "../models/movie";

const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming`
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated`


// function to fetch url
export const image500= (path:string):string | null => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342= (path:string):string | null => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image185= (path:string):string | null => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;


// fallback images 
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';


async function apiCall<T>(endpoint: string): Promise<ApiCallResponse<T>> {
    const options = {
        methods: 'GET',
        url: endpoint,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDQyYzBmNjBlYzNjNDE5NTIzOTk2N2M3ZjY3NjkzNyIsInN1YiI6IjU4N2UxNjZmOTI1MTQxNDEwMTAxOGRmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0roScmzyoG3504Q55gfxrwZCB7nj3tplWbEtG2gN7nI'
        },
    }

    try {
        const response = await axios.request(options);
        return { data: response.data as T };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Unexpected error:', error);

            return { errorMessage: error.message };
        } else {
            console.error('Unexpected error:', error);
            return { errorMessage: 'An unexpected error occurred' };
        }
    }
}

export async function fetchTrendingMovies(): Promise<Movie[]> {
    const movieResponse: ApiCallResponse<MovieResponse> = await apiCall<MovieResponse>(
        trendingMoviesEndpoint,
    )

    if (movieResponse.data) {
        console.log(JSON.stringify(movieResponse.data.results,))
        return movieResponse.data.results;
    }

    if (movieResponse.errorMessage) {
        console.log(movieResponse.errorMessage)
    }
    return [];
}

export async function fetchUpcomingMovies(): Promise<Movie[]> {
    const movieResponse: ApiCallResponse<MovieResponse> = await apiCall<MovieResponse>(
        upcomingMoviesEndpoint,
    )

    if (movieResponse.data) {
        console.log(JSON.stringify(movieResponse.data.results,))
        return movieResponse.data.results;
    }

    if (movieResponse.errorMessage) {
        console.log(movieResponse.errorMessage)
    }
    return [];
}

export async function fetchTopRatedMovies(): Promise<Movie[]> {
    const movieResponse: ApiCallResponse<MovieResponse> = await apiCall<MovieResponse>(
        topRatedMoviesEndpoint,
    )

    if (movieResponse.data) {
        console.log(JSON.stringify(movieResponse.data.results,))
        return movieResponse.data.results;
    }

    if (movieResponse.errorMessage) {
        console.log(movieResponse.errorMessage)

    }
    return [];
}

