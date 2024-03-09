export interface Movie{
    title:string;
    overview:string;
    poster_path:string;
    id:number;
    vote_count:number;
    vote_avarage:number;
    release_date:string
}

export interface MovieResponse {
    results: Movie[]
}

export interface ApiCallResponse<T>{
    data?:T;
    errorMessage?:string
}