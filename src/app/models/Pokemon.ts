export interface Pokemon{
    id: number;
    name: string;
    sprites:{
        front_default: string;
        front_shiny: string;
    }
    abilities: Array<{
        ability: {
            name: string;
        }
    }>
}