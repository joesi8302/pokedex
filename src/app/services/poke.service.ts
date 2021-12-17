import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  pokeName: string = "charizard";

  constructor(private httpCli: HttpClient) { }

  /* 

    What is RxJS?
      - RxJS is a framework for reactive programming. RxJs uses the idea of an observable
          (reactive programming deals with the idea of data streams)

    What is an observable?
      essentially a publisher of a stream of values
        - The observable will publish values to whoever subscribes to it.
        - if the data changes, the observable will notify the subscribers of that change

    What is an observer?
      - observers will execute some code whena new value occurs form the observable
      - an observer connects to an observable with .subscribe(cbf)

  */

  getOnePokemon(){
    return this.httpCli.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.pokeName}`);
  }

  getAllPokemon(){
    return this.httpCli.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  }

}
