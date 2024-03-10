export  interface Cast{
    profile_path:string,
    original_name:string,
    id:number,
    character:string
}

export interface CastResponse{
    id:number,
    cast: Cast[]
}