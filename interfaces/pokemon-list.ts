export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  SmallPkemon[];
}

export interface SmallPkemon {
    name: string;
    url:  string;
    id: string;
    img:string;
}
