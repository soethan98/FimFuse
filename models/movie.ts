export interface Movie{
    title:string,
    overview:string,
    poster_path:string,
    id:number,
    vote_count:number,
    vote_avarage:number,
    release_date:string,
    status:string,
    runtime:number,
    genres:Genre[]
}

export interface MovieResponse {
    results: Movie[]
}

export type Genre = {
    id:number,
    name:string
}